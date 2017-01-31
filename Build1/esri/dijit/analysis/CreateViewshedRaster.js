//>>built
require({cache:{"url:esri/dijit/analysis/templates/CreateViewshedRaster.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n      \x3ctable class\x3d"esriFormTable" \x3e \r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"createViewshedRasterIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n          \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.createViewshed}\x3c/label\x3e\r\n            \x3cnav class\x3d"breadcrumbs" data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb" style\x3d"font-size:12px;" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.createViewshed}\x3c/a\x3e\r\n            \x3c/nav\x3e \r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n              \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e              \r\n            \x3c/div\x3e               \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n    \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n      \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_interpolateToolDescription"\x3e${i18n.toolDefine}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.elevationSurfaceLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"elevationSurface"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n          \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel" style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_layersSelect" data-dojo-attach-event\x3d"onChange:_handleLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"observerFeatures"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e  \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3cselect class\x3d"longInput esriLongLabel esriLeadingMargin1" style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.optimizeFor}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"optimizeFor"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3ctable style\x3d"width:100%"\x3e\r\n              \x3ctr\x3e\r\n                \x3ctd\x3e\r\n                  \x3cdiv class\x3d"bufferSelector selected" data-dojo-attach-point\x3d"_Speed"\x3e\r\n                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel label"\x3e${i18n.speed}\x3c/label\x3e\x3c/div\x3e\r\n                  \x3c/div\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd\x3e\r\n                  \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_Accuracy"\x3e\r\n                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel label"\x3e${i18n.accuracy}\x3c/label\x3e\x3c/div\x3e\r\n                  \x3c/div\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n            \x3c/table\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_optionsRow"\x3e\r\n          \x3ctd colspan\x3d"2" class\x3d"optionsTd"\x3e\r\n            \x3cdiv class\x3d"optionsClose" data-dojo-attach-point\x3d"_optionsDiv"\x3e\r\n              \x3cdiv class\x3d"dijitTreeExpando" data-dojo-attach-event\x3d"onclick:_handleOptionsBtnClick"\x3e\x3clabel class\x3d"esriLeadingMargin2 noWrapLabel"\x3e${i18n.options}\x3c/label\x3e\x3c/div\x3e\r\n              \x3ctable class\x3d"esriFormTable optionsTable"\x3e\r\n                \x3ctbody\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd colspan\x3d"3" style\x3d"padding:0;"\x3e\r\n                    \x3ctable class\x3d"esriFormTable esriLeadingMargin2" style\x3d"width:90%;"\x3e\r\n                      \x3ctbody\x3e\r\n                        \x3ctr\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                            \x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.maxDistanceLabel}\x3c/label\x3e\r\n                          \x3c/td\x3e\r\n                          \x3ctd class\x3d"shortTextInput"\x3e\r\n                            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"maximumDistance"\x3e\x3c/a\x3e\r\n                          \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3ctr\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                            \x3ctable style\x3d"width:100%"\x3e\r\n                              \x3ctr\x3e\r\n                                \x3ctd\x3e\r\n                                  \x3cdiv class\x3d"bufferSelector selected" data-dojo-attach-point\x3d"_MaxDistance"\x3e\r\n                                    \x3cdiv class\x3d"bufferIcon viewshedInnerIcon"\x3e\x3c/div\x3e\r\n                                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.distance}\x3c/label\x3e\x3c/div\x3e\r\n                                  \x3c/div\x3e\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                  \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_MaxField"\x3e\r\n                                    \x3cdiv class\x3d"bufferIcon viewshedInnerFieldIcon"\x3e\x3c/div\x3e\r\n                                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.field}\x3c/label\x3e\x3c/div\x3e\r\n                                  \x3c/div\x3e\r\n                                \x3c/td\x3e\r\n                              \x3c/tr\x3e\r\n                            \x3c/table\x3e\r\n                          \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3ctr data-dojo-attach-point\x3d"_maxDistanceRow"\x3e\r\n                          \x3ctd style\x3d"width:50%;padding-right:1em;"\x3e\r\n                            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"intermediateChanges:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_maxDistanceInput" style\x3d"width:100%;text-align:right"\x3e\r\n                            \x3cselect class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_maxDistanceFldSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"display:none; width:95%;table-layout:fixed;"\x3e\x3c/select\x3e\r\n                          \x3c/td\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                            \x3cselect class\x3d"longInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_maxDistanceUnitsSelect"\x3e\x3c/select\x3e\r\n                          \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3ctr\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                            \x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.minDistanceLabel}\x3c/label\x3e\r\n                          \x3c/td\x3e\r\n                          \x3ctd class\x3d"shortTextInput"\x3e\r\n                            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"minimumDistance"\x3e\x3c/a\x3e\r\n                          \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3ctr\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                            \x3ctable style\x3d"width:100%"\x3e\r\n                              \x3ctr\x3e\r\n                                \x3ctd\x3e\r\n                                  \x3cdiv class\x3d"bufferSelector selected" data-dojo-attach-point\x3d"_MinDistance"\x3e\r\n                                    \x3cdiv class\x3d"bufferIcon viewshedOuterIcon"\x3e\x3c/div\x3e\r\n                                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.distance}\x3c/label\x3e\x3c/div\x3e\r\n                                  \x3c/div\x3e\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                  \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_MinField"\x3e\r\n                                    \x3cdiv class\x3d"bufferIcon viewshedOuterFieldIcon"\x3e\x3c/div\x3e\r\n                                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.field}\x3c/label\x3e\x3c/div\x3e\r\n                                  \x3c/div\x3e\r\n                                \x3c/td\x3e\r\n                              \x3c/tr\x3e\r\n                            \x3c/table\x3e\r\n                          \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3ctr data-dojo-attach-point\x3d"_minDistanceRow"\x3e\r\n                          \x3ctd style\x3d"width:50%;padding-right:1em;"\x3e\r\n                            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"intermediateChanges:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_minDistanceInput" style\x3d"width:100%;text-align:right"\x3e\r\n                            \x3cselect class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_minDistanceFldSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"display:none; width:95%;table-layout:fixed;"\x3e\x3c/select\x3e\r\n                          \x3c/td\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                            \x3cselect class\x3d"longInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_minDistanceUnitsSelect"\x3e\x3c/select\x3e\r\n                          \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3ctr\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                            \x3clabel class\x3d"esriLeadingMargin1 esriSelectLabel" \x3e\r\n                              \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_is3DCheck" data-dojo-props\x3d"checked:false"\x3e\x3c/div\x3e\r\n                              ${i18n.dist3D}\r\n                            \x3c/label\x3e\r\n                          \x3c/td\x3e\r\n                          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n                            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"viewingDistance3D"\x3e\x3c/a\x3e\r\n                          \x3c/td\x3e\r\n                        \x3c/tr\x3e  \r\n                        \x3ctr\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                            \x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.observerEleLabel}\x3c/label\x3e\r\n                          \x3c/td\x3e\r\n                          \x3ctd class\x3d"shortTextInput"\x3e\r\n                            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"observersElevation"\x3e\x3c/a\x3e\r\n                          \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3ctr\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                            \x3ctable style\x3d"width:100%"\x3e\r\n                              \x3ctr\x3e\r\n                                \x3ctd\x3e\r\n                                  \x3cdiv class\x3d"bufferSelector selected" data-dojo-attach-point\x3d"_ObElevation"\x3e\r\n                                    \x3cdiv class\x3d"bufferIcon distanceAboveSurfaceIcon"\x3e\x3c/div\x3e\r\n                                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.elevation}\x3c/label\x3e\x3c/div\x3e\r\n                                  \x3c/div\x3e\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                  \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_ObField"\x3e\r\n                                    \x3cdiv class\x3d"bufferIcon distanceAboveSurfaceFieldIcon"\x3e\x3c/div\x3e\r\n                                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.field}\x3c/label\x3e\x3c/div\x3e\r\n                                  \x3c/div\x3e\r\n                                \x3c/td\x3e\r\n                              \x3c/tr\x3e\r\n                            \x3c/table\x3e\r\n                          \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3ctr data-dojo-attach-point\x3d"_observerElevationRow"\x3e\r\n                          \x3ctd style\x3d"width:50%;padding-right:1em;"\x3e\r\n                            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"intermediateChanges:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_observerEleInput" style\x3d"width:100%;text-align:right"\x3e\r\n                            \x3cselect class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_observerEleFldSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"display:none; width:95%;table-layout:fixed;"\x3e\x3c/select\x3e\r\n                          \x3c/td\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                            \x3cselect class\x3d"longInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_observerEleUnitsSelect"\x3e\x3c/select\x3e\r\n                          \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3ctr\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                            \x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.observerHghtLabel}\x3c/label\x3e\r\n                          \x3c/td\x3e\r\n                          \x3ctd class\x3d"shortTextInput"\x3e\r\n                            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"observersHeight"\x3e\x3c/a\x3e\r\n                          \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3ctr\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                            \x3ctable style\x3d"width:100%"\x3e\r\n                              \x3ctr\x3e\r\n                                \x3ctd\x3e\r\n                                  \x3cdiv class\x3d"bufferSelector selected" data-dojo-attach-point\x3d"_ObHeight"\x3e\r\n                                    \x3cdiv class\x3d"bufferIcon distanceAboveSurfaceIcon"\x3e\x3c/div\x3e\r\n                                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.height}\x3c/label\x3e\x3c/div\x3e\r\n                                  \x3c/div\x3e\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                  \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_ObHghtField"\x3e\r\n                                    \x3cdiv class\x3d"bufferIcon distanceAboveSurfaceFieldIcon"\x3e\x3c/div\x3e\r\n                                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.field}\x3c/label\x3e\x3c/div\x3e\r\n                                  \x3c/div\x3e\r\n                                \x3c/td\x3e\r\n                              \x3c/tr\x3e\r\n                            \x3c/table\x3e\r\n                          \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3ctr data-dojo-attach-point\x3d"_observerHeightRow"\x3e\r\n                          \x3ctd style\x3d"width:50%;padding-right:1em;"\x3e\r\n                            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"intermediateChanges:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_observerHghtInput" style\x3d"width:100%;text-align:right"\x3e\r\n                            \x3cselect class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_observerHghtFldSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"display:none; width:95%;table-layout:fixed;"\x3e\x3c/select\x3e\r\n                          \x3c/td\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                            \x3cselect class\x3d"longInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_observerHghtUnitsSelect"\x3e\x3c/select\x3e\r\n                          \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3ctr\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                            \x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.targetHghtLabel}\x3c/label\x3e\r\n                          \x3c/td\x3e\r\n                          \x3ctd class\x3d"shortTextInput"\x3e\r\n                            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"targetHeight"\x3e\x3c/a\x3e\r\n                          \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3ctr\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                            \x3ctable style\x3d"width:100%"\x3e\r\n                              \x3ctr\x3e\r\n                                \x3ctd\x3e\r\n                                  \x3cdiv class\x3d"bufferSelector selected" data-dojo-attach-point\x3d"_TargetHeight"\x3e\r\n                                    \x3cdiv class\x3d"bufferIcon distanceAboveSurfaceIcon"\x3e\x3c/div\x3e\r\n                                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.height}\x3c/label\x3e\x3c/div\x3e\r\n                                  \x3c/div\x3e\r\n                                \x3c/td\x3e\r\n                                \x3ctd\x3e\r\n                                  \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_TargetField"\x3e\r\n                                    \x3cdiv class\x3d"bufferIcon distanceAboveSurfaceFieldIcon"\x3e\x3c/div\x3e\r\n                                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.field}\x3c/label\x3e\x3c/div\x3e\r\n                                  \x3c/div\x3e\r\n                                \x3c/td\x3e\r\n                              \x3c/tr\x3e\r\n                            \x3c/table\x3e\r\n                          \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                        \x3ctr data-dojo-attach-point\x3d"_targetHeightRow"\x3e\r\n                          \x3ctd style\x3d"width:50%;padding-right:1em;"\x3e\r\n                            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"intermediateChanges:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_targetHghtInput" style\x3d"width:100%;text-align:right"\x3e\r\n                            \x3cselect class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_targetHghtFldSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"display:none; width:95%;table-layout:fixed;"\x3e\x3c/select\x3e\r\n                          \x3c/td\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                            \x3cselect class\x3d"longInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_targetHghtUnitsSelect"\x3e\x3c/select\x3e\r\n                          \x3c/td\x3e\r\n                        \x3c/tr\x3e\r\n                      \x3c/tbody\x3e\r\n                    \x3c/table\x3e\r\n                  \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3c/tbody\x3e\r\n              \x3c/table\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.resultAgLayer}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"resultAglLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"longInput esriLeadingMargin1" data-dojo-props\x3d"trim:true,required:false" data-dojo-attach-point\x3d"_outputAGLayerInput" value\x3d""\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e          \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"resultLayer"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e             \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"longInput esriLeadingMargin1" data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n          \x3c/td\x3e                \r\n        \x3c/tr\x3e \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow" class\x3d"esriLeadingMargin1"\x3e\r\n                \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n                \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n              \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e   \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_chooseLayerTypeRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel class\x3d"esriSaveLayerlabel"\x3e${i18n.saveLayerType}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput esriLongLabel" data-dojo-attach-point\x3d"_webLayerTypeSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e                                   \r\n      \x3c/tbody\x3e         \r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont" href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n      \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n        \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true" /\x3e\r\n        ${i18n.useMapExtent}\r\n      \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3ctable class\x3d"esriFormTable"\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e\r\n            \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n              ${i18n.runAnalysis}\r\n            \x3c/button\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator" data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e       \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/CreateViewshedRaster","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has dojo/dom-class dojo/dom-style dojo/string dojo/_base/connect dojo/json dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin ../../kernel ../../lang ./RasterAnalysisMixin ./utils dojo/i18n!../../nls/jsapi dojo/text!./templates/CreateViewshedRaster.html".split(" "),function(f,c,k,r,m,b,e,n,d,h,p,v,w,x,y,z,g,A,s,B,
C){f=f([p,v,w,x,y,A],{declaredClass:"esri.dijit.analysis.CreateViewshedRaster",templateString:C,widgetsInTemplate:!0,inputLayer:null,valueLayer:null,valueLayers:null,maxDistanceUnits:null,maximumDistance:null,minDistanceUnits:null,minimumDistance:null,observerHeightUnits:null,observerHeight:null,targetHeightUnits:null,targetHeight:null,observerElevationUnits:null,observerElevation:null,maxDistFld:null,minDistFld:null,obEleFld:null,obHghtFld:null,targetHghtFld:null,is3D:!1,agLayerName:null,toolName:"CreateViewshedRaster",
helpFileName:"CreateViewshedRaster",toolNlsName:B.createViewshedRasterTool,rasterGPToolName:"CreateViewshed",resultParameter:"outputRaster",_getJobParameters:function(){var a=r.toJson(s.constructAnalysisInputLyrObj(this.get("inputLayer"))),l=r.toJson(s.constructAnalysisInputLyrObj(this.get("valueLayer"))),b=this.get("optimizeFor"),c=this.get("maxDistance"),d="field"===this._maxType?this._maxDistanceFldSelect.get("value"):null,e=this.get("minDistance"),g="field"===this._minType?this._minDistanceFldSelect.get("value"):
null,f=this.get("observerEle"),k="field"===this._obEleType?this._observerEleFldSelect.get("value"):null,t=this.get("observerHeight"),m="field"===this._obHghtType?this._observerHghtFldSelect.get("value"):null,u=this.get("targetHeight"),n="field"===this._targetType?this._targetHghtFldSelect.get("value"):null,p=this.get("is3D"),q=this.get("AgLayerName")?{serviceProperties:{name:this.get("AgLayerName")},itemProperties:{folderId:this.get("folderId")}}:null;q&&(this.resultParameter=["outputRaster","outputAboveGroundLevelRaster"]);
return{inputElevationSurface:l,inputObserverFeatures:a,optimizeFor:b,maximumViewingDistance:c?h.stringify(c):null,maximumViewingDistanceField:d,minimumViewingDistance:e?h.stringify(e):null,minimumViewingDistanceField:g,observersElevation:f?h.stringify(f):null,observersElevationField:k,observersHeight:t?h.stringify(t):null,observersHeightField:m,targetHeight:u?h.stringify(u):null,targetHeightField:n,viewingDistanceIs3D:p,aboveGroundLevelOutputName:q?h.stringify(q):null}},_setDefaultInputs:function(){this.valueLayers&&
k.forEach(this.valueLayers,function(a,l){this._layersSelect.addOption({value:l,label:a.name});0===l&&this.set("valueLayer",a)},this);this._addOptions(this._maxDistanceUnitsSelect);this._addOptions(this._minDistanceUnitsSelect);this._addOptions(this._observerEleUnitsSelect);this._addOptions(this._observerHghtUnitsSelect);this._addOptions(this._targetHghtUnitsSelect);this.maxDistanceUnits&&this._maxDistanceUnitsSelect.set("value",this.maxDistanceUnits);this.maximumDistance&&this._maxDistanceInput.set("value",
this.maximumDistance);this.minDistanceUnits&&this._minDistanceUnitsSelect.set("value",this.minDistanceUnits);(this.minimumDistance||0===this.minimumDistance)&&this._minDistanceInput.set("value",this.minimumDistance);this.observerHeightUnits&&this._observerHghtUnitsSelect.set("value",this.observerHeightUnits);this.observerHeight&&this._observerHghtInput.set("value",this.observerHeight);this.observerElevationUnits&&this._observerEleUnitsSelect.set("value",this.observerElevationUnits);this.observerElevation&&
this._observerEleInput.set("value",this.observerElevation);this.targetHeightUnits&&this._targetHghtUnitsSelect.set("value",this.targetHeightUnits);(this.targetHeight||0===this.targetHeight)&&this._targetHghtInput.set("value",this.targetHeight);this._minType=this._maxType="distance";this._obEleType="elevation";this._obHghtType=this._targetType="height";d.connect(this._MaxDistance,"onclick",c.hitch(this,"_handleMaxTypeChange","distance"));d.connect(this._MaxField,"onclick",c.hitch(this,"_handleMaxTypeChange",
"field"));d.connect(this._MinDistance,"onclick",c.hitch(this,"_handleMinTypeChange","distance"));d.connect(this._MinField,"onclick",c.hitch(this,"_handleMinTypeChange","field"));d.connect(this._ObElevation,"onclick",c.hitch(this,"_handleObEleTypeChange","elevation"));d.connect(this._ObField,"onclick",c.hitch(this,"_handleObEleTypeChange","field"));d.connect(this._ObHeight,"onclick",c.hitch(this,"_handleObHghtTypeChange","height"));d.connect(this._ObHghtField,"onclick",c.hitch(this,"_handleObHghtTypeChange",
"field"));d.connect(this._TargetHeight,"onclick",c.hitch(this,"_handleTargetHghtTypeChange","height"));d.connect(this._TargetField,"onclick",c.hitch(this,"_handleTargetHghtTypeChange","field"));d.connect(this._Speed,"onclick",c.hitch(this,"_handleOptimizeForChange","speed"));d.connect(this._Accuracy,"onclick",c.hitch(this,"_handleOptimizeForChange","accuracy"))},_resetUI:function(){this.set("fields");this.agLayerName=n.substitute(this.i18n.outputAgLayerName,{layername:this.inputLayer.name})},_addOptions:function(a){a&&
a.addOption([{value:"Miles",label:this.i18n.miles},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}])},_handleLayerChange:function(a){this.set("valueLayer",this.valueLayers[this._layersSelect.get("value")])},_handleMaxTypeChange:function(a){this._maxType=a;b.remove(this._MaxDistance,"selected");b.remove(this._MaxField,"selected");b.add("distance"===a?this._MaxDistance:this._MaxField,"selected");e.set(this._maxDistanceInput.domNode,
"display","distance"===a?"block":"none");e.set(this._maxDistanceFldSelect.domNode,"display","distance"===a?"none":"block")},_handleMinTypeChange:function(a){this._minType=a;b.remove(this._MinDistance,"selected");b.remove(this._MinField,"selected");b.add("distance"===a?this._MinDistance:this._MinField,"selected");e.set(this._minDistanceInput.domNode,"display","distance"===a?"block":"none");e.set(this._minDistanceFldSelect.domNode,"display","distance"===a?"none":"block")},_handleObEleTypeChange:function(a){this._obEleType=
a;b.remove(this._ObElevation,"selected");b.remove(this._ObField,"selected");b.add("elevation"===a?this._ObElevation:this._ObField,"selected");e.set(this._observerEleInput.domNode,"display","elevation"===a?"block":"none");e.set(this._observerEleFldSelect.domNode,"display","elevation"===a?"none":"block")},_handleObHghtTypeChange:function(a){this._obHghtType=a;b.remove(this._ObHeight,"selected");b.remove(this._ObHghtField,"selected");b.add("height"===a?this._ObHeight:this._ObHghtField,"selected");e.set(this._observerHghtInput.domNode,
"display","height"===a?"block":"none");e.set(this._observerHghtFldSelect.domNode,"display","height"===a?"none":"block")},_handleTargetHghtTypeChange:function(a){this._targetType=a;b.remove(this._TargetHeight,"selected");b.remove(this._TargetField,"selected");b.add("height"===a?this._TargetHeight:this._TargetField,"selected");e.set(this._targetHghtInput.domNode,"display","height"===a?"block":"none");e.set(this._targetHghtFldSelect.domNode,"display","height"===a?"none":"block")},_handleOptimizeForChange:function(a){this._optimizeFor=
a;b.remove(this._Speed,"selected");b.remove(this._Accuracy,"selected");b.add("speed"===a?this._Speed:this._Accuracy,"selected")},_handleOptionsBtnClick:function(){b.contains(this._optionsDiv,"disabled")||(b.contains(this._optionsDiv,"optionsClose")?(b.remove(this._optionsDiv,"optionsClose"),b.add(this._optionsDiv,"optionsOpen")):b.contains(this._optionsDiv,"optionsOpen")&&(b.remove(this._optionsDiv,"optionsOpen"),b.add(this._optionsDiv,"optionsClose")))},_getValueLayerAttr:function(){return this.valueLayer=
this.valueLayers[this._layersSelect.get("value")]},_setValueLayerAttr:function(a){this.valueLayer=a},_setValueLayersAttr:function(a){this.valueLayers=a;this.valueLayer=this.valueLayers[0]},_getValueLayersAttr:function(){return this.valueLayers},_setFieldsAttr:function(a){this._maxDistanceFldSelect.removeOption(this._maxDistanceFldSelect.getOptions());this._minDistanceFldSelect.removeOption(this._maxDistanceFldSelect.getOptions());this._observerEleFldSelect.removeOption(this._maxDistanceFldSelect.getOptions());
this._observerHghtFldSelect.removeOption(this._maxDistanceFldSelect.getOptions());this._targetHghtFldSelect.removeOption(this._maxDistanceFldSelect.getOptions());this.inputLayer&&(a=this.inputLayer.fields)&&k.forEach(a,function(a){-1!==k.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a.type)&&a.name!==this.inputLayer.objectIdField&&(this._maxDistanceFldSelect.addOption({value:a.name,label:g.isDefined(a.alias)&&""!==a.alias?a.alias:a.name}),
this._minDistanceFldSelect.addOption({value:a.name,label:g.isDefined(a.alias)&&""!==a.alias?a.alias:a.name}),this._observerEleFldSelect.addOption({value:a.name,label:g.isDefined(a.alias)&&""!==a.alias?a.alias:a.name}),this._observerHghtFldSelect.addOption({value:a.name,label:g.isDefined(a.alias)&&""!==a.alias?a.alias:a.name}),this._targetHghtFldSelect.addOption({value:a.name,label:g.isDefined(a.alias)&&""!==a.alias?a.alias:a.name}))},this)},_setMaxDistanceAttr:function(a){this.maxDist=a},_getMaxDistanceAttr:function(){if("field"===
this._maxType)return null;var a=this._maxDistanceUnitsSelect.get("value"),b=this._maxDistanceInput.get("value");b&&a&&(this.maxDist={distance:b,units:a});return this.maxDist},_setMinDistanceAttr:function(a){this.minDist=a},_getMinDistanceAttr:function(){if("field"===this._minType)return null;var a=this._minDistanceUnitsSelect.get("value"),b=this._minDistanceInput.get("value");b&&a&&(this.minDist={distance:b,units:a});return this.minDist},_setObserverEleAttr:function(a){this.observerElevation=a},_getObserverEleAttr:function(){if("field"===
this._obEleType)return null;var a=this._observerEleUnitsSelect.get("value"),b=this._observerEleInput.get("value");b&&a&&(this.observerElevation={distance:b,units:a});return this.observerElevation},_setObserverHeightAttr:function(a){this.observerHeight=a},_getObserverHeightAttr:function(){if("field"===this._obHghtType)return null;var a=this._observerHghtUnitsSelect.get("value"),b=this._observerHghtInput.get("value");b&&a&&(this.observerHeight={distance:b,units:a});return this.observerHeight},_setTargetHeightAttr:function(a){this.targetHeight=
a},_getTargetHeightAttr:function(){if("field"===this._targetType)return null;var a=this._targetHghtUnitsSelect.get("value"),b=this._targetHghtInput.get("value");b&&a&&(this.targetheight={distance:b,units:a});return this.targetheight},_setIs3DAttr:function(a){this.is3D=a},_getIs3DAttr:function(){this._is3DCheck&&(this.is3D=this._is3DCheck.get("checked"));return this.is3D},_setOptimizeForAttr:function(a){this.OptimizeFor=a},_getOptimizeForAttr:function(){this.OptimizerFor=this._optimizeFor;return this.OptimizeFor},
_setAgLayerNameAttr:function(a){this.agLayerName=a;this._outputAGLayerInput.set("value",a)},_getAgLayerNameAttr:function(){return this.agLayerName=this._outputAGLayerInput.get("value",name)}});m("extend-esri")&&c.setObject("dijit.analysis.CreateViewshedRaster",f,z);return f});