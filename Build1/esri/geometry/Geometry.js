//>>built
define("esri/geometry/Geometry",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../SpatialReference"],function(a,c,d,e,f){a=a(null,{declaredClass:"esri.geometry.Geometry",spatialReference:null,type:null,cache:void 0,setSpatialReference:function(b){this.spatialReference=b;return this},verifySR:function(){this.spatialReference||this.setSpatialReference(new f(4326))},getExtent:function(){return null},clearCache:function(){this.cache=void 0},getCacheValue:function(b){return this.cache&&
this.cache[b]},setCacheValue:function(b,a){this.cache||(this.cache={});this.cache[b]=a}});d("extend-esri")&&c.setObject("geometry.Geometry",a,e);return a});