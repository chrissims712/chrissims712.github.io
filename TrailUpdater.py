#system imports
import os
#3rd party imports
from Tkinter import *
from tkFileDialog import *
import arcpy
from arcpy.sa import *
arcpy.env.overwriteOutput = True
arcpy.CheckOutExtension('Spatial')


def GPX2Line(inFile, outFile, trailName, DEM, workFolder):
    lay = os.path.join(os.path.abspath(workFolder), "temp.lyr")
    feat = os.path.join(os.path.abspath(workFolder), "temp.shp")
    shape = os.path.join(os.path.abspath(workFolder), "Line.shp")
    arcpy.GPXtoFeatures_conversion(inFile, shape)
    arcpy.MakeFeatureLayer_management(shape, lay)
    arcpy.SelectLayerByAttribute_management(lay, 'NEW_SELECTION', "Type = 'TRKPT'")
    arcpy.PointsToLine_management(lay, feat, "Name")
    arcpy.CalculateField_management(feat, "Name", '"'+ str(trailName)+'"', "PYTHON")
    CorSystemDEM = arcpy.Describe(DEM).spatialReference
    CorSystemLine = arcpy.Describe(feat).spatialReference
    arcpy.Project_management(feat, shape, CorSystemDEM)
    arcpy.FeatureClassToFeatureClass_conversion(shape, outFile, "Line")


def rasterClipper(feature, rasterFull, rasterClip):
    desc = arcpy.Describe(feature)
    extent = desc.extent
    extStr = "{} {} {} {}".format(extent.XMin, extent.YMin, extent.XMax, extent.YMax)
    arcpy.Clip_management(rasterFull, extStr, rasterClip, feature, "#", "#")

def lineDicer(workFolder, dice ,vertexLimit):
    line = os.path.join(os.path.abspath(workFolder), "Line")
    arcpy.Dice_management(line, dice, vertexLimit)

def extractAndJoin(workFolder, inFile, DEM, inputFields, finalFile):
    pts = os.path.join(os.path.abspath(workFolder), "pts")
    ptsExt = os.path.join(os.path.abspath(workFolder), "ptsEXT")
    temp = os.path.join(os.path.abspath(workFolder), "temp")
    arcpy.FeatureVerticesToPoints_management(inFile, pts, "BOTH_ENDS")
    arcpy.DeleteIdentical_management(pts, "Shape")
    arcpy.sa.ExtractValuesToPoints(pts, DEM, ptsExt)
    arcpy.AlterField_management(ptsExt, "RASTERVALU", "startElev")
    arcpy.AlterField_management(ptsExt, "Name", "TRAIL_NAME")
    fieldmappings = arcpy.FieldMappings()
    fieldmappings.addTable(inFile)
    fieldmappings.addTable(ptsExt)
    for field in fieldmappings.fields:
        if field.name not in inputFields:
            fieldmappings.removeFieldMap(fieldmappings.findFieldMapIndex(field.name))
    for field in fieldmappings.fields:
        b=fieldmappings.getFieldMap(fieldmappings.findFieldMapIndex(field.name))
        b.mergeRule = 'First'
        fieldmappings.replaceFieldMap(fieldmappings.findFieldMapIndex(field.name),b)
    arcpy.SpatialJoin_analysis(inFile, ptsExt, temp, "JOIN_ONE_TO_ONE", "#", fieldmappings)
    fieldmappings.removeAll()
    arcpy.AlterField_management(ptsExt, "startElev", "endElev")
    fieldmappings = arcpy.FieldMappings()
    fieldmappings.addTable(temp)
    fieldmappings.addTable(ptsExt)
    for field in fieldmappings.fields:
        if field.name not in inputFields:
            fieldmappings.removeFieldMap(fieldmappings.findFieldMapIndex(field.name))
    for field in fieldmappings.fields:
        b=fieldmappings.getFieldMap(fieldmappings.findFieldMapIndex(field.name))
        b.mergeRule = 'Last'
        fieldmappings.replaceFieldMap(fieldmappings.findFieldMapIndex(field.name),b)
    arcpy.SpatialJoin_analysis(temp, ptsExt, finalFile, "JOIN_ONE_TO_ONE", "#", fieldmappings)
    fieldmappings.removeAll()
    arcpy.DeleteField_management(finalFile, ["Join_Count", "TARGET_FID", "TARGET_FID1"])
    

    
def fieldMatcher(largeFile, smallFile):
    fullFields = [field.name for field in arcpy.ListFields(largeFile)]
    fullFieldsType = [field.type for field in arcpy.ListFields(largeFile)]
    adderFields = [field.name for field in arcpy.ListFields(smallFile)]
    for f in range(len(fullFieldsType)):
        if fullFieldsType[f] == 'String':
            fullFieldsType[f] = 'TEXT'
        elif fullFieldsType[f] == 'Double':
            fullFieldsType[f] = 'DOUBLE'
        elif fullFieldsType[f] == 'Integer':
            fullFieldsType[f] = 'SHORT'
        elif fullFieldsType[f] == 'SmallInteger':
            fullFieldsType[f] = 'SHORT'
        elif fullFieldsType[f] == 'Single':
            fullFieldsType[f] = 'SHORT'
        else:
            continue
    for f in range(2, len(fullFields)):
        if fullFields[f] in adderFields:
            continue
        else:
            arcpy.AddField_management(smallFile, fullFields[f], fullFieldsType[f])


class Application(Frame):
    global endFile, inName, inGeodatabase, workFolder, DEM, inFile

    def executeCode(self, inFile, workFolder, inName, DEM, endFile, *positional_parameters):
        arcpy.env.workspace = workFolder
        lineGeodatabase = str(arcpy.env.scratchGDB)
        GPX2Line(inFile, lineGeodatabase, inName, DEM, workFolder)
        DEMClip = os.path.join(os.path.abspath(workFolder), "DEMClip.tif")
        arcpy.env.workspace = lineGeodatabase
        workFolder = lineGeodatabase
        dice = os.path.join(os.path.abspath(workFolder), "Dice")
        lineDicer(workFolder, dice, 20)
        rasterClipper(dice, DEM, DEMClip)
        #may make field1 an input, still pondering
        field1 = ['TRAIL_NAME', 'startElev', 'endElev']
        
        finalTrails = os.path.join(os.path.abspath(workFolder), "FinalTrails")
        extractAndJoin(workFolder, dice, DEMClip, field1, finalTrails)
        fieldMatcher(endFile, finalTrails)

        BLOCK1 = """def slopeDiffCalc(slope):
            if slope >= 0 and slope < 2.86:
                return 1
            elif slope >= 2.86 and slope < 5.71:
                return 2
            elif slope >= 5.71 and slope < 8.53:
                return 3
            elif slope >= 8.53 and slope < 11.31:
                return 4
            elif slope >= 11.31 and slope < 20:
                return 5
            elif slope >= 20 and slope < 90:
                return 6"""

        BLOCK2 = """def eleDiffCalc(elev):
            if elev >= 0 and elev < 7000:
                return 0
            elif elev >= 7000 and elev < 8500:
                return 1
            elif elev >= 8500 and elev < 11000:
                return 2
            elif elev >= 11000 and elev < 12500:
                return 3
            elif elev >= 12500 and elev < 20000:
                return 4"""

        BLOCK3 = """def totalDiffCalc(num):
            if num >= 0 and num < 3:
                return 'Easy'
            elif num >= 3 and num < 6:
                return 'Moderate'
            elif num >= 6 and num < 8:
                return 'Hard'
            elif num >= 8 and num < 11:
                return 'Very Hard'"""
        

        arcpy.AddGeometryAttributes_management(finalTrails, "LENGTH_GEODESIC", "METERS")

        arcpy.CalculateField_management(finalTrails, "aveElev",
                                        '(!startElev! + !endElev!)/2',
                                        'PYTHON') 

        arcpy.CalculateField_management(finalTrails, "feetElev",
                                        '!aveElev!*3.28084',
                                        'PYTHON')

        arcpy.CalculateField_management(finalTrails, "Slope",
                                        'math.atan((abs(!endElev!-!startElev!))/!LENGTH_GEO!)*(180/math.pi)',
                                        'PYTHON')

        arcpy.CalculateField_management(finalTrails, "Slope_Diff",
                                        'slopeDiffCalc(!Slope!)' ,
                                        'PYTHON', BLOCK1)

        arcpy.CalculateField_management(finalTrails, "Ele_Diff",
                                        'eleDiffCalc(!feetElev!)',
                                        'PYTHON',BLOCK2)

        arcpy.CalculateField_management(finalTrails, "Diff_Sum",
                                        '!Slope_Diff! + !Ele_Diff!',
                                        'PYTHON')

        arcpy.CalculateField_management(finalTrails, "Seg_Diff", 'totalDiffCalc(!Diff_Sum!)',
                                        'PYTHON', BLOCK3)

        mapper = arcpy.FieldMappings()
        mapper.addTable(endFile)
        arcpy.Append_management(finalTrails, endFile, 'NO_TEST', mapper)
        
        
    
    #__init__ function goes here
    def runProgram(self, event=None):
        print inFile
        print DEM
        print workFolder
        print inName
        print endName
        endFile = os.path.join(os.path.abspath(endGeodatabase), endName)
        self.executeCode(inFile, workFolder, inName, DEM, endFile)
        self.quit()

    def quitProgram(self, event=None):
        self.quit()
    
    def callback1(self):
        global inFile
        global workFolder
        inFile = askopenfilename()
        inFile = str(inFile)
        workFolder = os.path.dirname(inFile)

    def callback2(self):
        global DEM
        DEM = askdirectory()
        DEM = str(DEM)

    def callback3(self):
        global endGeodatabase
        endGeodatabase = askdirectory()
        endGeodatabase = str(endGeodatabase)


    def trailNameSetter(self, event):
        global inName
        inName = self.trailName.get()

    def endFilePointer(self, event):
        global endName
        endName = self.setter.get()

    def __init__(self, master=None):
        Frame.__init__(self, master)
        
        self.top = Toplevel()
        self.top.title("Trail Rating Updater")
        self.msg = Message(self.top, text="This application takes .gpx data"
                           "and converts it into a geodatabase feature class"
                           "that (blah blah blah information to be filled in later)."
                           "Please press the enter key when entering the text boxes.")
        self.msg.pack()
        self.button = Button(self.top, text="Got it", command=self.top.destroy)
        self.button.pack()

        self.grid()
        
        self.text = Label(self, text="Select Folder Locations")
        self.text.grid(column=0, row=0)
        
        self.inFile = Button(self)
        self.inFile["text"] = "Input .gpx File"
        self.inFile["command"] = self.callback1
        self.inFile.grid(column=0,row=1)

        self.text1 = Label(self, text="Enter Trail Name")
        self.text1.grid(column=1, row=0)

        self.inName = Entry(self)
        self.inName.grid(column=1,row=1)
        self.trailName = StringVar()
        self.inName["textvariable"] = self.trailName
        self.inName.bind('<FocusOut>', self.trailNameSetter)
        
        self.DEM = Button(self)
        self.DEM["text"] = "Input DEM"
        self.DEM["command"] = self.callback2
        self.DEM.grid(column=0, row=3)

        self.text2 = Label(self, text="Enter Feature to Append Trail to", wraplength=120)
        self.text2.grid(column=1, row=2)
        
        self.endName = Entry(self)
        self.endName.grid(column=1, row=3)
        self.setter = StringVar()
        self.endName["textvariable"] = self.setter
        self.endName.bind('<FocusOut>', self.endFilePointer)

        self.endGeodatabase = Button(self)
        self.endGeodatabase.grid(column=1, row=4)
        self.endGeodatabase["text"] = "Input Append Feature Geodatabase"
        self.endGeodatabase["command"] = self.callback3
        
        self.EXECUTE = Button(self)
        self.EXECUTE["text"] = "Run"
        self.EXECUTE["command"] = self.runProgram
        self.EXECUTE.grid(column=0,row=5)

        self.QUIT = Button(self)
        self.QUIT["text"] = "Quit"
        self.QUIT["command"] = self.quitProgram
        self.QUIT.grid(column=1, row=5)

root = Tk()
app = Application(master=root)
app.mainloop()
root.destroy()
