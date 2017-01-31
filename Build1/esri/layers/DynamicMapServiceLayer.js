//>>built
define("esri/layers/DynamicMapServiceLayer","dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/dom-construct dojo/dom-style dojox/gfx/matrix ../kernel ../config ../sniff ../request ../domUtils ./layer ./MapImage".split(" "),function(p,f,t,r,g,v,k,x,u,A,y,B,C){var z=x.defaults.map.zoomDuration;p=p(B,{declaredClass:"esri.layers.DynamicMapServiceLayer",_eventMap:{"map-image-export":["mapImage"]},constructor:function(a,b){this.useMapTime=b&&b.hasOwnProperty("useMapTime")?!!b.useMapTime:!0;this.extentProcessor=
b&&b.extentProcessor;var c=t.hitch;this._exportMapImageHandler=c(this,this._exportMapImageHandler);this._imgSrcFunc=c(this,this._imgSrcFunc);this._divAlphaImageFunc=c(this,this._divAlphaImageFunc);this._tileLoadHandler=c(this,this._tileLoadHandler);this._tileErrorHandler=c(this,this._tileErrorHandler);this.registerConnectEvents()},opacity:1,isPNG32:!1,_setMap:function(a,b,c){this.inherited(arguments);this._map=a;var e=this._div=r.create("div",null,b),d=k._css.names,h={position:"absolute",width:a.width+
"px",height:a.height+"px",overflow:"visible",opacity:this.opacity},m=u("ie"),w=f.connect,s=a.__visibleDelta;8===m&&delete h.opacity;"css-transforms"===a.navigationMode?(this._isChildLayer||(h[d.transform]=k._css.translate(s.x,s.y),g.set(e,h)),this._left=s.x,this._top=s.y):(h.left="0px",h.top="0px",g.set(e,h),this._left=this._top=0);g.set(e,h);this._onResizeHandler_connect=w(a,"onResize",this,"_onResizeHandler");this._opacityChangeHandler_connect=w(this,"onOpacityChange",this,"_opacityChangeHandler");
this._img_loading=null;this._dragOrigin={x:0,y:0};this.evaluateSuspension();if(this.suspended&&!a.loaded)var l=f.connect(a,"onLoad",this,function(){f.disconnect(l);l=null;this.evaluateSuspension()});this.extentProcessor&&(this._panEndEvalHandle=f.connect(a,"onPanEnd",this,this.evaluateSuspension),this._zoomEndEvalHandle=f.connect(a,"onZoomEnd",this,this.evaluateSuspension));return e},_unsetMap:function(a,b){this._img&&this._clearEventListeners(this._img);this._img_loading&&this._clearEventListeners(this._img_loading);
r.destroy(this._div);this._map=this._div=this._img=this._img_loading=null;var c=f.disconnect;c(this._onResizeHandler_connect);c(this._opacityChangeHandler_connect);c(this._panEndEvalHandle);c(this._zoomEndEvalHandle);this._panEndEvalHandle=this._zoomEndEvalHandle=this._onResizeHandler_connect=this._opacityChangeHandler_connect=null;this._fireUpdateEnd();this._toggleTime();clearTimeout(this._wakeTimer);this._wakeTimer=null;this._disableDrawConnectors();this.inherited(arguments)},_onResizeHandler:function(a,
b,c){g.set(this._div,{width:b+"px",height:c+"px"});this._onExtentChangeHandler(a)},onSuspend:function(){this.inherited(arguments);this._fireUpdateEnd();this._toggleTime();y.hide(this._div);clearTimeout(this._wakeTimer);this._wakeTimer=null;this._disableDrawConnectors()},onResume:function(){this.inherited(arguments);var a=this._map;this._toggleTime();"css-transforms"===a.navigationMode&&(a=a.__visibleDelta,this._left=a.x,this._top=a.y,this._isChildLayer||g.set(this._div,k._css.names.transform,k._css.translate(this._left,
this._top)));this._enableDrawConnectors();this._wakeTimer=this._wakeTimer||setTimeout(t.hitch(this,function(){this.suspended||this._onExtentChangeHandler(this._map.extent,null,!0)}),0)},canResume:function(){var a=this.inherited(arguments);if(a){var b=this._map.extent;this.extentProcessor&&b&&(a=!!this.extentProcessor({layer:this,extent:b,width:this._map.width}).extent)}return a},_enableDrawConnectors:function(){var a=f.connect,b=this._map;b&&(this._onPanHandler_connect=a(b,"onPan",this,"_onPanHandler"),
this._onExtentChangeHandler_connect=a(b,"onExtentChange",this,"_onExtentChangeHandler"),"css-transforms"===b.navigationMode?this._onScaleHandler_connect=a(b,"onScale",this,this._onScaleHandler):this._onZoomHandler_connect=a(b,"onZoom",this,"_onZoomHandler"))},_disableDrawConnectors:function(){var a=f.disconnect;a(this._onPanHandler_connect);a(this._onExtentChangeHandler_connect);a(this._onZoomHandler_connect);a(this._onScaleHandler_connect);this._onPanHandler_connect=this._onExtentChangeHandler_connect=
this._onZoomHandler_connect=this._onScaleHandler_connect=null},_toggleTime:function(){var a=this._map;this.timeInfo&&this.useMapTime&&a&&!this.suspended?(this._timeConnect||(this._timeConnect=f.connect(a,"onTimeExtentChange",this,this._onTimeExtentChangeHandler)),this._setTime(a.timeExtent)):(f.disconnect(this._timeConnect),this._timeConnect=null,this._setTime(null))},_setTime:function(a){this._params&&(this._params.time=a?a.toJson().join(","):null)},_onPanHandler:function(a,b){this._panDx=b.x;this._panDy=
b.y;var c=this._dragOrigin,e=this._map.__visibleDelta,d=this._img;d&&("css-transforms"===this._map.navigationMode?(this._left=e.x+b.x,this._top=e.y+b.y,this._isChildLayer||g.set(this._div,k._css.names.transform,k._css.translate(this._left,this._top))):g.set(d,{left:c.x+b.x+"px",top:c.y+b.y+"px"}))},_onExtentChangeHandler:function(a,b,c){if(!this.suspended){clearTimeout(this._wakeTimer);this._wakeTimer=null;var e=this._map,d=this._img,h=d&&d.style,m=this._dragOrigin;if(b&&!c&&d&&(b.x!==this._panDx||
b.y!==this._panDy))"css-transforms"===e.navigationMode?(b=e.__visibleDelta,this._left=b.x,this._top=b.y,this._isChildLayer||g.set(this._div,k._css.names.transform,k._css.translate(this._left,this._top))):g.set(d,{left:m.x+b.x+"px",top:m.y+b.y+"px"});d?(m.x=parseInt(h.left,10),m.y=parseInt(h.top,10)):m.x=m.y=0;"css-transforms"===e.navigationMode&&(c&&d)&&(g.set(d,k._css.names.transition,"none"),d._multiply=d._multiply?v.multiply(d._matrix,d._multiply):d._matrix);this._fireUpdateStart();if(c=this._img_loading)if(this._clearEventListeners(c),
r.destroy(c),this._img_loading=null,c=this._jsonRequest){try{c.cancel()}catch(w){}this._jsonRequest=null}var s=e.width;c=e.height;b=s;var l=0;10<=this.version&&e.wrapAround180&&(a=a._normalize(!0));this.extentProcessor&&(l=this.extentProcessor({layer:this,extent:a,width:b}),a=l.extent,b=l.width,l=l.marginLeft||0);if(this.isPNG32)d=this._img_loading=r.create("div"),d.id=e.id+"_"+this.id+"_"+(new Date).getTime(),g.set(d,{position:"absolute",left:"0px",top:"0px",width:b+"px",height:c+"px"}),e=d.appendChild(r.create("div")),
g.set(e,{opacity:0,width:b+"px",height:c+"px"}),this.getImageUrl(a,b,c,this._divAlphaImageFunc);else{var n=this._img_loading=r.create("img"),p=k._css.names,t=u("ie"),q={position:"absolute",width:b+"px",height:c+"px"};8===t&&(q.opacity=this.opacity);null!=l&&0!==l&&(q.marginLeft=l+"px");"css-transforms"===e.navigationMode?(q[p.transform]=k._css.translate(-this._left,-this._top),n._tdx=-this._left,n._tdy=-this._top,q[p.transition]=p.transformName+" "+z+"ms ease",this.extentProcessor&&(q[p.origin]=s/
2-l+"px "+c/2+"px")):(q.left="0px",q.top="0px");n.id=e.id+"_"+this.id+"_"+(new Date).getTime();g.set(n,q);n._onload_connect=f.connect(n,"onload",this,"_onLoadHandler");n._onerror_connect=f.connect(n,"onerror",this,"_onErrorHandler");n._onabort_connect=f.connect(n,"onabort",this,"_onErrorHandler");this._startRect={left:m.x,top:m.y,width:d?parseInt(h.width,10):b,height:d?parseInt(h.height,10):c,marginLeft:d?parseInt(h.marginLeft||"0",10):l,zoom:h&&h.zoom?parseFloat(h.zoom):1};this.getImageUrl(a,b,c,
this._imgSrcFunc)}}},_onTimeExtentChangeHandler:function(a){this.suspended||(this._setTime(a),this.refresh(!0))},getImageUrl:function(a,b,c,e){},_imgSrcFunc:function(a){this._img_loading.src=a},_divAlphaImageFunc:function(a){g.set(this._img_loading,"filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(src\x3d'"+a+"', sizingMethod\x3d'scale')");this._onLoadHandler({currentTarget:this._img_loading})},_onLoadHandler:function(a){a=a.currentTarget;var b=this._map;this._clearEventListeners(a);!b||
b.__panning||b.__zooming?r.destroy(a):(this._img&&this._div.removeChild(this._img),this._img=a,b=a.style,this._startRect={left:0,top:0,width:parseInt(b.width,10),height:parseInt(b.height,10),marginLeft:parseInt(b.marginLeft||"0",10),zoom:1},this._div.appendChild(a),this.suspended||y.show(this._div),this._img_loading=null,a=this._dragOrigin,a.x=a.y=0,this.onUpdate());this._fireUpdateEnd()},_onErrorHandler:function(a){a=a.currentTarget;g.set(a,"visibility","hidden");this._clearEventListeners(a);a=Error("Unable to load image: "+
a.src);this.onError(a);this._fireUpdateEnd(a)},_clearEventListeners:function(a){f.disconnect(a._onload_connect);f.disconnect(a._onerror_connect);f.disconnect(a._onabort_connect);a._onload_connect=a._onerror_connect=a._onabort_connect=null},setUseMapTime:function(a,b){this.useMapTime=a;this._toggleTime();b||this.refresh(!0)},refresh:function(){this._map&&this._onExtentChangeHandler(this._map.extent)},_onScaleHandler:function(a,b){var c={},e=k._css.names,d=this._img;if(d){g.set(d,e.transition,b?"none":
e.transformName+" "+z+"ms ease");d._matrix=a;a=d._multiply?v.multiply(a,d._multiply):a;if(d._tdx||d._tdy)a=v.multiply(a,{xx:1,xy:0,yx:0,yy:1,dx:d._tdx,dy:d._tdy});c[e.transform]=k._css.matrix(a);g.set(d,c)}},_onZoomHandler:function(a,b,c){a=this._startRect;var e=a.width*b,d=a.height*b,h=a.marginLeft*b,f=this._img,k=u("ie");f&&(k&&8>k?g.set(f,{left:a.left-(e-a.width)*(c.x-a.left)/a.width+"px",top:a.top-(d-a.height)*(c.y-a.top)/a.height+"px",zoom:b*a.zoom}):g.set(f,{left:a.left-(e-a.width)*(c.x-a.left)/
a.width+"px",top:a.top-(d-a.height)*(c.y-a.top)/a.height+"px",width:e+"px",height:d+"px"}),null!=h&&0!==h&&g.set(f,{marginLeft:h+"px"}))},_exportMapImage:function(a,b,c){var e=this._exportMapImageHandler;b.token=this._getToken();A({url:a,content:b,callbackParamName:"callback",load:function(a,b){e(a,b,c)},error:x.defaults.io.errorHandler})},_exportMapImageHandler:function(a,b,c){a=new C(a);this.onMapImageExport(a);c&&c(a)},onMapImageExport:function(){},setOpacity:function(a){if(this.opacity!=a)this.onOpacityChange(this.opacity=
a)},onOpacityChange:function(){},_opacityChangeHandler:function(a){var b=8===u("ie")?this._img:this._div;g.set(b,"opacity",a)}});u("extend-esri")&&t.setObject("layers.DynamicMapServiceLayer",p,k);return p});