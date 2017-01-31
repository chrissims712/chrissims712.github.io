//>>built
define("esri/layers/OnDemandMode","dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/_base/array dojo/has ../kernel ../geometry/Point ../tasks/query ./RenderMode ./GridLayout".split(" "),function(t,m,v,u,x,y,z,w,A,B){t=t([A],{declaredClass:"esri.layers._OnDemandMode",constructor:function(b){this.featureLayer=b;this._featureMap={};this._hasPartialFeatures=!1;this._queryErrorHandler=v.hitch(this,this._queryErrorHandler)},initialize:function(b){this.inherited(arguments);var a=this.featureLayer,
c=a._srInfo;this._gridLayer=new B(new z(c?c.valid[0]:b.extent.xmin,c?c.valid[1]:b.extent.ymax,b.spatialReference),{width:a._tileWidth,height:a._tileHeight},{width:b.width,height:b.height},c);this._cellMap={};this._gridLayer.setResolution(b.extent)},startup:function(){this._ioQueue=[];this.featureLayer.suspended||(this._zoomHandler(),this._enableConnectors())},propertyChangeHandler:function(b){this._init&&2>b&&this._zoomHandler()},destroy:function(){this._disableConnectors();this.inherited(arguments)},
drawFeature:function(b){var a=this._gridLayer,c=b.geometry,d=[];if(c)for(var d=a.getCellsInExtent("point"===c.type?{xmin:c.x,ymin:c.y,xmax:c.x,ymax:c.y}:c.getExtent(),!1).cells,a=this._cellMap,e,f=b.attributes[this.featureLayer.objectIdField],g,k,h,c=0;c<d.length;c++)e=d[c],g=e.latticeID,k=e.row,h=e.col,g?e=a[g]=a[g]||e:(a[k]=a[k]||{},e=a[k][h]=a[k][h]||e),e.features=e.features||[],e.features.push(b),this._addFeatureIIf(f,b),this._incRefCount(f)},suspend:function(){this._init&&this._disableConnectors()},
resume:function(){this._init&&(this._enableConnectors(),this._zoomHandler())},refresh:function(){this._zoomHandler()},hasAllFeatures:function(){if(this._hasPartialFeatures)return!0;var b=!1,a=this._getCurrentCells(),c;for(c=0;c<a.length;c++)if(a[c].hasPartialFeatures){b=!0;break}return!b},_enableConnectors:function(){var b=this.map;this._zoomConnect=m.connect(b,"onZoomEnd",this,this._zoomHandler);this._panConnect=m.connect(b,"onPanEnd",this,this._panHandler);this._resizeConnect=m.connect(b,"onResize",
this,this._panHandler)},_disableConnectors:function(){m.disconnect(this._zoomConnect);m.disconnect(this._panConnect);m.disconnect(this._resizeConnect)},_zoomHandler:function(){this._processIOQueue(!0);var b=this.featureLayer,a=this.map;b.suspended||(b._fireUpdateStart(),this._clearIIf(),this._hasPartialFeatures=!1,(b=b._trackManager)&&b.clearTracks(),this._cellMap={},this._gridLayer.setResolution(a.extent),this._sendRequest())},_panHandler:function(b){this.featureLayer._fireUpdateStart();var a=this.featureLayer._resized;
b=a?b:null;a&&this._gridLayer.setMapState(b,this.map.width,this.map.height);this._sendRequest(b)},_getRequestId:function(b,a){return("_"+b.name+b.layerId+b._ulid+"_"+a.resolution+"_"+(a.latticeID||a.row+"_"+a.col)).replace(/[^a-zA-Z0-9\_]+/g,"_")},_sendRequest:function(b){this._exceeds=!1;var a=this.featureLayer,c=this.map;b=b||c.extent;c=this._gridLayer.getCellsInExtent(b,a.latticeTiling).cells;if(!a.isEditable())var d=this._cellMap,c=u.filter(c,function(a){if(a.lattice){if(d[a.latticeID])return!1}else if(d[a.row]&&
d[a.row][a.col])return!1;return!0});var e=a.getOutFields(),f=a.getDefinitionExpression(),g=a._getOffsettedTE(a._mapTimeExtent),k=a.supportsAdvancedQueries?a.getOrderByFields():null,h=a._usePatch,m=this._ioQueue,n,p=this,s=this._drawFeatures,q,l,r;this._pending=this._pending||0;for(n=0;n<c.length;n++){q=c[n];l=new w;l.geometry=q.extent||q.lattice;l.outFields=e;l.where=f;a.latticeTiling&&q.extent&&(l.spatialRelationship=w.SPATIAL_REL_CONTAINS);l.returnGeometry=!0;l.timeExtent=g;a._ts&&(l._ts=(new Date).getTime());
l.orderByFields=k;l.multipatchOption=a.multipatchOption;l.maxAllowableOffset=a._maxOffset;l.quantizationParameters=a._quantizationParameters;if((r=a.advancedQueryCapabilities)&&r.supportsQueryWithResultType)l.resultType="tile";r=null;if(h&&(r=this._getRequestId(a,q),this._isPending(r)))continue;this._pending++;m.push(a._task.execute(l,function(){var a=q;return function(b){s.apply(p,[b,a])}}.call(this),this._queryErrorHandler,r))}this._removeOldCells(b);this._endCheck()},_drawFeatures:function(b,a){a.hasPartialFeatures=
!!b.exceededTransferLimit;this._exceeds=this._exceeds||b.exceededTransferLimit;this._finalizeIO();var c=this.featureLayer,d=this.map.extent,e=a.extent,f=a.row,g=a.col,k=c.objectIdField,h=b.features,m=this._gridLayer,n=this._cellMap,p=a.latticeID,s=p?n[p]:n[f]&&n[f][g];if(a.resolution!=m._resolution||(p?p!==m.getLatticeID(d):!m.intersects(e,d)))s&&this._removeCell(f,g,p);else if(s)c._sortFeatures(h),this._updateCell(s,h);else{c._sortFeatures(h);a.features=h;p?n[p]=a:(n[f]=n[f]||{},n[f][g]=a);d=h.length;
for(c=0;c<d;c++)e=h[c],f=e.attributes[k],this._addFeatureIIf(f,e),this._incRefCount(f)}this._endCheck()},_queryErrorHandler:function(b){this._finalizeIO();this._hasPartialFeatures=!0;this.featureLayer._errorHandler(b);this._endCheck(!0)},_finalizeIO:function(){this._purgeRequests();this._pending--},_endCheck:function(b){if(0===this._pending){this._processIOQueue();var a=this.featureLayer,c=a._trackManager;c&&(c.clearTracks(),c.addFeatures(a.graphics),a._ager&&u.forEach(a.graphics,function(b){b._shape&&
a._repaint(b)}),c.moveLatestToFront(),c.drawTracks());this.featureLayer._fireUpdateEnd(b&&Error("FeatureLayer: an error occurred while updating the layer"),this._exceeds?{queryLimitExceeded:!0}:null);if(this._exceeds)a.onQueryLimitExceeded()}},_processIOQueue:function(b){this._ioQueue=u.filter(this._ioQueue,function(a){return-1<a.fired?!1:!0});b&&u.forEach(this._ioQueue,this._cancelPendingRequest)},_getCurrentCells:function(b){var a=[];b=b||this._cellMap;for(var c in b)if(b.hasOwnProperty(c)){var d=
b[c];d&&(d.hasOwnProperty("row")||d.hasOwnProperty("latticeID")?a.push(d):"object"===typeof d&&a.push.apply(a,this._getCurrentCells(d)))}return a},_removeOldCells:function(b){var a=this._cellMap,c=this._gridLayer,d,e;for(d in a)if(a[d]){var f=a[d],g=f.latticeID,k=0,h=0;if(g)k++,g!==c.getLatticeID(b)&&(this._removeCell(null,null,g),h++);else for(e in f)f[e]&&(k++,c.intersects(f[e].extent,b)||(this._removeCell(d,e),h++));h===k&&delete a[d]}},_updateCell:function(b,a){var c=this.featureLayer,d=c.objectIdField,
c=c._selectedFeatures,e,f=a.length;b.features=b.features||[];for(e=0;e<f;e++){var g=a[e],k=g.attributes[d],h=this._addFeatureIIf(k,g);h===g?(this._incRefCount(k),b.features.push(h)):k in c||(h.setGeometry(g.geometry),h.setAttributes(g.attributes))}},_removeCell:function(b,a,c){var d=this._cellMap,e=this.featureLayer,f=e.objectIdField,g=c?d[c]:d[b]&&d[b][a];if(g){c?delete d[c]:delete d[b][a];b=g.features;for(a=0;a<b.length;a++)c=b[a].attributes[f],this._decRefCount(c),c in e._selectedFeatures||this._removeFeatureIIf(c)}}});
x("extend-esri")&&v.setObject("layers._OnDemandMode",t,y);return t});