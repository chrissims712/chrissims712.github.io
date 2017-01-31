//>>built
require({cache:{"url:esri/dijit/analysis/templates/ExtractData.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_extractDataToolContentTitle" class\x3d"analysisTitle"\x3e\r\n         \x3ctable class\x3d"esriFormTable" \x3e \r\n            \x3ctr\x3e\r\n              \x3ctd\x3e\x3cdiv class\x3d"extractDataIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n              \x3ctd\x3e\r\n                \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.extractData}\x3c/label\x3e\r\n                \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb" style\x3d"font-size:12px;" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.extractData}\x3c/a\x3e\r\n                \x3c/nav\x3e                 \r\n              \x3c/td\x3e\r\n              \x3ctd\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n                \x3c/div\x3e  \r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n         \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n     \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_extractDataTable"\x3e \r\n       \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"longTextInput esriAnalysisStepsLabel"\x3e${i18n.layersToExtract}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"InputLayers"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding:0.25em 0.5em 0.5em 0.5em"\x3e\r\n            \x3ctable style\x3d"width:100%;table-layout:fixed;"\x3e\r\n              \x3ctbody\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd\x3e\r\n                    \x3cselect multiple\x3d"true"  class\x3d"esriLeadingMargin1" style\x3d"width:100%;margin-top:10px;" data-dojo-props\x3d"required:true" data-dojo-type\x3d"dojox/form/CheckedMultiSelect" data-dojo-attach-point\x3d"_inputLayersSelect"\x3e\x3c/select\x3e        \r\n                  \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"white-space:nowrap;padding:0.5em 0.5em 0.25em 0.5em"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.studyArea}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"AreaOfInterest"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e          \r\n        \x3c/tr\x3e  \r\n        \x3ctr\x3e\r\n          \x3ctd colpan\x3d"2" style\x3d"padding:0.5em 0.5em 0.25em 0.5em;width:90%;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"onChange:_handleExtentSelectChange" data-dojo-attach-point\x3d"_extentSelect"\x3e\x3c/select\x3e                      \r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding:0.5em 0.5em 0.25em 0.5em;width:3%;"\x3e\r\n            \x3cbutton data-dojo-type\x3d"dijit/form/ToggleButton" class\x3d"esriboundingButton esriLeadingMargin05 esriActionButton" data-dojo-attach-point\x3d"_drawExtentBtn" data-dojo-props\x3d"showLabel:false,iconClass:\'toolbarIcon polygonIcon\',style:\'width:16px;\',label:\'${i18n.drawLabel}\'" data-dojo-attach-event\x3d"onClick:_handleExtentBtnClick"\x3e\x3c/button\x3e\r\n          \x3c/td\x3e \r\n        \x3c/tr\x3e      \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding:0.25em 0.5em 0.25em 0.5em;"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin2" style\x3d"width:100%;"\x3e\r\n              \x3clabel class\x3d"esriSelectLabel"\x3e\r\n                \x3cinput type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-props\x3d"\'class\':\'esriSelectLabel\',checked:true" name\x3d"clip" value\x3d"fgdb"/\x3e\r\n                ${i18n.selectFtrs}\r\n              \x3c/label\x3e\r\n              \x3cbr/\x3e\r\n              \x3clabel class\x3d"esriSelectLabel"\x3e\r\n                \x3cinput type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"_clipRadioBtn" data-dojo-props\x3d"\'class\':\'esriSelectLabel\'" name\x3d"clip" value\x3d"shp"/\x3e \r\n                ${i18n.clipFtrs}\r\n              \x3c/label\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e               \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputDataFormat}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputFormat"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e             \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding:0.25em 0.5em 0.5em 0.5em;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput"  style\x3d"table-layout:fixed;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_dataFormatSelect"\x3e\r\n              \x3coption value\x3d"CSV"\x3e${i18n.csvPoints}\x3c/option\x3e\r\n              \x3coption value\x3d"FILEGEODATABASE"\x3e ${i18n.filegdb}\x3c/option\x3e\r\n              \x3c!--\x3coption value\x3d"LAYERPACKAGE"\x3e${i18n.lyrpkg}\x3c/option\x3e--\x3e\r\n              \x3coption value\x3d"KML"\x3e${i18n.kml}\x3c/option\x3e\r\n              \x3coption value\x3d"SHAPEFILE"\x3e${i18n.shpFile}\x3c/option\x3e                \r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputFileName}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputName"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e             \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true,missingMessage:\'${i18n.outputnameMissingMsg}\'"class\x3d"esriLeadingMargin1 esriOutputText" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e                \r\n        \x3c/tr\x3e \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n             \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n               \x3cinput class\x3d"longInput esriFolderSelect" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true"\x3e\x3c/input\x3e\r\n             \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e         \r\n      \x3c/tbody\x3e         \r\n     \x3c/table\x3e\r\n   \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e    \r\n  \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n    \x3ca href\x3d"#" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg" class\x3d"esriFloatTrailing esriAnalysisInfoPaneCloseIcon"\x3e\x3c/a\x3e\r\n    \x3c/a\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/ExtractData","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/Color dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/number dojo/date/locale dojo/fx/easing dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ToggleButton dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/form/RadioButton dijit/Dialog dojox/form/CheckedMultiSelect ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ./CreditEstimator ../../geometry/jsonUtils ../../toolbars/draw ../../graphic ../../layers/FeatureLayer ./utils ../../geometry/Point ../../geometry/Polyline ../../geometry/Polygon ../../geometry/Multipoint ../../geometry/Extent ../../symbols/SimpleFillSymbol ../../symbols/SimpleLineSymbol ../../SpatialReference dojo/i18n!../../nls/jsapi dojo/text!./templates/ExtractData.html".split(" "),
function(m,x,c,e,r,n,f,s,y,Q,t,g,z,R,S,A,T,B,u,C,D,E,F,G,U,V,W,X,Y,Z,$,aa,ba,ca,da,ea,fa,H,I,J,K,ga,ha,v,w,L,p,ia,ja,M,ka,N,k,l,O,q,P){m=x([C,D,E,F,G,J,K],{declaredClass:"esri.dijit.analysis.ExtractData",templateString:P,widgetsInTemplate:!0,clip:!1,dataFormat:"CSV",inputLayers:null,featureLayers:null,outputLayerName:null,i18n:null,toolName:"ExtractData",helpFileName:"ExtractData",resultParameter:"contentID",constructor:function(a,b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},
destroy:function(){this.inherited(arguments);e.forEach(this._pbConnects,n.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);this.i18n={};c.mixin(this.i18n,q.common);c.mixin(this.i18n,q.analysisTools);c.mixin(this.i18n,q.extractDataTool)},postCreate:function(){this.inherited(arguments);A.add(this._form.domNode,"esriSimpleForm");g.set(this._inputLayersSelect.selectNode,"width","90%");this._outputLayerInput.set("validator",c.hitch(this,this.validateServiceName));
this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},clear:function(){this._extentArea&&(this.map.graphics.remove(this._extentArea),this._extentArea=null);this._featureLayer&&(this.map.removeLayer(this._featureLayer),this._featureLayer=null);this._toolbar.deactivate()},_buildJobParams:function(){var a={},b,h,d=[];h=e.map(this._inputLayersSelect.get("value"),function(a){return this.featureLayers[parseInt(a,10)]},this);
b=[];b=e.map(h,function(a){return f.toJson(this.constructAnalysisInputLyrObj(a))},this);a.InputLayers=b;a.Clip=this.get("clip");a.DataFormat=this._dataFormatSelect.get("value");if("-1"!==this._extentSelect.get("value")||this._extentArea)this._extentArea?(this._featureLayer||(this._featureLayer=this._createBoundingPolyFeatColl(),this.map.addLayer(this._featureLayer)),d.push(this._extentArea),this._featureLayer.applyEdits(d,null,null),a.Extent=f.toJson(this.constructAnalysisInputLyrObj(this._featureLayer))):
a.Extent=f.toJson(this.constructAnalysisInputLyrObj(this.featureLayers[parseInt(this._extentSelect.get("value"),10)-1])),a.context=f.toJson({extent:this.get("extent")});else{b=new k(k.STYLE_NULL,new l(l.STYLE_SOLID,new r([0,0,0]),4));h=this._createBoundingPolyFeatColl();var d=this.map.extent._normalize(!0),c=new M(d.spatialReference);c.addRing([[d.xmin,d.ymin],[d.xmin,d.ymax],[d.xmax,d.ymax],[d.xmax,d.ymin],[d.xmin,d.ymin]]);h.add(new w(c,b));a.Extent=f.toJson(this.constructAnalysisInputLyrObj(h));
this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=f.toJson({extent:this.map.extent._normalize(!0)}))}a.OutputName=f.toJson({itemProperties:{title:this._outputLayerInput.get("value"),description:this.i18n.itemDescription,tags:this.i18n.itemTags,snippet:this.i18n.itemSnippet,folderId:this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):""}});return a},_handleShowCreditsClick:function(a){var b={};a.preventDefault();this._form.validate()&&(b=
this._buildJobParams(),b.InputLayers=f.toJson(b.InputLayers),this.getCreditsEstimate(this.toolName,b).then(c.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()})))},_handleSaveBtnClick:function(a){a={};var b={};this._form.validate()&&(this._saveBtn.set("disabled",!0),a=this._buildJobParams(),b.jobParams=a,this._featureLayer&&(this.map.removeLayer(this._featureLayer),this._featureLayer=null),this._extentArea&&(this.map.graphics.remove(this._extentArea),this._extentArea=
null),this.execute(b))},_save:function(){},_buildUI:function(){var a;this._loadConnections();g.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this.signInPromise.then(c.hitch(this,p.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));a=B.format(new Date,{datePattern:"MMMM d yyyy",timePattern:"h.m.s a"});this._outputLayerInput.set("value",t.substitute(this.i18n.outputfileName,{datetime:a}));this.outputLayerName&&this._outputLayerInput.set("value",
this.outputLayerName);this.featureLayers&&(this._extentSelect.addOption({value:"-1",label:this.i18n.sameAsDisplay}),e.forEach(this.featureLayers,function(a,c){this._inputLayersSelect.addOption({value:c,label:a.name,selected:this.featureLayers&&-1!==e.indexOf(this.inputLayers,a)});this._extentSelect.addOption({value:c+1,label:t.substitute(this.i18n.sameAsLayer,{layername:a.name})})},this));this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName);g.set(this._chooseFolderRow,"display",
!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(c.hitch(this,function(a){this.folderStore=a;p.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));g.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");this.clip&&this._clipRadioBtn.set("value",this.clip);this.dataFormat&&this._dataFormatSelect.set("value",
this.dataFormat)},_loadConnections:function(){this.on("start",c.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",c.hitch(this,"_onClose",!1))},_handleDataFormatSelectChange:function(){var a,b;b=!1;"CSV"===this._dataFormatSelect.get("value")?(b=e.some(this._inputLayersSelect.get("value"),function(b){a=this.featureLayers[parseInt(b,10)];return"esriGeometryPolyline"===a.geometryType||"esriGeometryPolygon"===a.geometryType},this))?(this._showMessages(this.i18n.linesCSVValidationMsg),
this.set("disableRunAnalysis",!0)):(this._handleCloseMsg(),this.set("disableRunAnalysis",!1)):(this._handleCloseMsg(),this.set("disableRunAnalysis",!1))},_handleExtentSelectChange:function(a){var b;this._drawExtentBtn.set("disabled","-1"!==this._extentSelect.get("value"));this._extentArea&&(this.map.graphics.remove(this._extentArea),this._extentArea=null,this._extentSelect.updateOption({value:"-1",label:this.i18n.sameAsDisplay}));"-1"!==a?(b=this.featureLayers[parseInt(a-1,10)].toJson(),a=this.featureLayers[parseInt(a-
1,10)],this.set("extent",I.isDefined(b.layerDefinition.extent)?b.layerDefinition.extent:this._getLayerFullExtent(a))):this.set("extent",this.map.extent._normalize(!0))},_getLayerFullExtent:function(a){var b=null;e.forEach(a.graphics,function(a,c){var e=this._getExtent(a.geometry);e&&(b=b?b.union(e):e)},this);return b},_getExtent:function(a){if(!a)return null;var b=null;if("esri.geometry.Extent"===a.declaredClass)b=a;else if("esri.geometry.Point"===a.declaredClass)b=new N(a.x-1E-4,a.y-1E-4,a.x+1E-4,
a.y+1E-4,a.spatialReference);else if(b=a.getExtent())b.spatialReference=new O(a.spatialReference.toJson());return b},_handleExtentBtnClick:function(a){a.preventDefault();this.emit("drawtool-activate",{});this._toolbar.activate(v.POLYGON);this._featureLayer&&(this.map.removeLayer(this._featureLayer),this._featureLayer=null);this._extentArea&&(this.map.graphics.remove(this._extentArea),this._extentArea=null)},_addFeatures:function(a){this.emit("drawtool-deactivate",{});this._toolbar.deactivate();var b;
b=new k(k.STYLE_NULL,new l(l.STYLE_SOLID,new r([0,0,0]),4));this.set("extent",a.getExtent());this._extentArea=new w(a,b);this.map.graphics.add(this._extentArea);this._extentSelect.updateOption({value:"-1",label:this.i18n.drawnBoundary})},_setExtentAttr:function(a){this.extent=a},_getExtentAttr:function(){return this.extent},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setFeatureLayersAttr:function(a){this.featureLayers=
e.filter(a,function(a){return-1!==a.capabilities.indexOf("Extract")})},_getFeatureLayersAttr:function(){return this.featureLayers},_setInputLayersAttr:function(a){this.inputLayers=a},_getInputLayersAttr:function(){return this.inputLayers=e.map(this._inputLayersSelect.get("value"),function(a){return this.featureLayers[parseInt(a,10)]},this)},_setClipAttr:function(a){this.clip=a},_getClipAttr:function(){return this.clip=this._clipRadioBtn.get("checked")},_setDataFormatAttr:function(a){this.dataFormat=
a},_getDataFormatAttr:function(){return this._dataFormatSelect.get("value")},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setMapAttr:function(a){this.map=a;this._toolbar=new v(this.map);this.set("extent",this.map.extent._normalize(!0));n.connect(this._toolbar,"onDrawEnd",c.hitch(this,this._addFeatures))},validateServiceName:function(a){return p.validateServiceName(a,{textInput:this._outputLayerInput})},_connect:function(a,b,c){this._pbConnects.push(n.connect(a,b,c))},_showMessages:function(a){z.set(this._bodyNode,
"innerHTML",a);s.fadeIn({node:this._errorMessagePane,easing:u.quadIn,onEnd:c.hitch(this,function(){g.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(a){a&&a.preventDefault();s.fadeOut({node:this._errorMessagePane,easing:u.quadOut,onEnd:c.hitch(this,function(){g.set(this._errorMessagePane,{display:"none"})})}).play()},_createBoundingPolyFeatColl:function(){return new L({layerDefinition:null,featureSet:{features:[],geometryType:"esriGeometryPolygon"},layerDefinition:{currentVersion:10.11,
copyrightText:"",defaultVisibility:!0,relationships:[],isDataVersioned:!1,supportsRollbackOnFailureParameter:!0,supportsStatistics:!0,supportsAdvancedQueries:!0,geometryType:"esriGeometryPolygon",minScale:0,maxScale:0,objectIdField:"OBJECTID",templates:[],type:"Feature Layer",displayField:"TITLE",visibilityField:"VISIBLE",name:"Boundary",hasAttachments:!1,typeIdField:"TYPEID",capabilities:"Query",allowGeometryUpdates:!0,htmlPopupType:"",hasM:!1,hasZ:!1,globalIdField:"",supportedQueryFormats:"JSON",
hasStaticData:!1,maxRecordCount:-1,indexes:[],types:[],drawingInfo:{renderer:{type:"simple",symbol:{color:[0,0,0,255],outline:{color:[0,0,0,255],width:3,type:"esriSLS",style:"esriSLSSolid"},type:"esriSFS",style:"esriSFSNull"},label:"",description:""},transparency:0,labelingInfo:null,fixedSymbols:!0},fields:[{alias:"OBJECTID",name:"OBJECTID",type:"esriFieldTypeOID",editable:!1},{alias:"Title",name:"TITLE",length:50,type:"esriFieldTypeString",editable:!0},{alias:"Visible",name:"VISIBLE",type:"esriFieldTypeInteger",
editable:!0},{alias:"Description",name:"DESCRIPTION",length:1073741822,type:"esriFieldTypeString",editable:!0},{alias:"Type ID",name:"TYPEID",type:"esriFieldTypeInteger",editable:!0}]}},{id:"boundary"})}});y("extend-esri")&&c.setObject("dijit.analysis.ExtractData",m,H);return m});