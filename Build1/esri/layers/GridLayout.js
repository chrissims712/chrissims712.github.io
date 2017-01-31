//>>built
define("esri/layers/GridLayout","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../kernel ../SpatialReference ../geometry/Extent ../geometry/Polyline".split(" "),function(k,v,q,w,x,y,z,A){k=k(null,{declaredClass:"esri.layers._GridLayout",constructor:function(a,d,b,e){this.origin=a;this.cellWidth=d.width;this.cellHeight=d.height;this.mapWidth=b.width;this.mapHeight=b.height;this.srInfo=e},setResolution:function(a){this._resolution=(a.xmax-a.xmin)/this.mapWidth;this.srInfo&&(a=Math.round(2*
this.srInfo.valid[1]/this._resolution),a=Math.round(a/this.cellWidth),this._frameStats=[a,0,a-1])},setMapState:function(a,d,b){this.mapWidth=d;this.mapHeight=b;this.setResolution(a)},getCellCoordinates:function(a){var d=this._resolution,b=this.origin;return{row:Math.floor((b.y-a.y)/(this.cellHeight*d)),col:Math.floor((a.x-b.x)/(this.cellWidth*d))}},normalize:function(a){var d=this._frameStats;if(d){var b=d[0],e=d[1],d=d[2];a<e?(a%=b,a=a<e?a+b:a):a>d&&(a%=b)}return a},intersects:function(a,d){var b=
this.srInfo;return b?q.some(d._getParts(b),function(b){return a.intersects(b.extent)}):a.intersects(d)},getCellExtent:function(a,d){var b=this._resolution,e=this.origin,l=this.cellWidth,m=this.cellHeight;return new z(d*l*b+e.x,e.y-(a+1)*m*b,(d+1)*l*b+e.x,e.y-a*m*b,new y(e.spatialReference.toJson()))},getLatticeID:function(a){var d=this.getCellCoordinates({x:a.xmin,y:a.ymax}),b=this.getCellCoordinates({x:a.xmax,y:a.ymin});a=d.row;var e=b.row,d=this.normalize(d.col),b=this.normalize(b.col);return a+
"_"+e+"_"+d+"_"+b},sorter:function(a,d){return a<d?-1:1},getCellsInExtent:function(a,d){var b=this.getCellCoordinates({x:a.xmin,y:a.ymax}),e=this.getCellCoordinates({x:a.xmax,y:a.ymin}),l=b.row,m=e.row,b=b.col,e=e.col,k=[],c,g,n,f=[],h=[],r,s,t,u,p=[];for(c=l;c<=m;c++)for(g=b;g<=e;g++)n=this.normalize(g),a=this.getCellExtent(c,n),q.some(k,function(a){return a.row===c&&a.col===n})||k.push({row:c,col:n,extent:a,resolution:this._resolution}),d&&(f.push(a.xmin,a.xmax),h.push(a.ymin,a.ymax));b=this.normalize(b);
e=this.normalize(e);f.sort(this.sorter);h.sort(this.sorter);g=f.length;for(c=g-1;0<=c;c--)c<g-1&&f[c]===f[c+1]&&f.splice(c,1);g=h.length;for(c=g-1;0<=c;c--)c<g-1&&h[c]===h[c+1]&&h.splice(c,1);if(f.length&&h.length){r=f[0];s=f[f.length-1];t=h[0];u=h[h.length-1];g=f.length;for(c=0;c<g;c++)p.push([[f[c],u],[f[c],t]]);g=h.length;for(c=0;c<g;c++)p.push([[r,h[c]],[s,h[c]]]);f=new A({paths:p,spatialReference:this.origin.spatialReference.toJson()});k.push({latticeID:l+"_"+m+"_"+b+"_"+e,lattice:f,resolution:this._resolution})}return{minRow:l,
maxRow:m,minCol:b,maxCol:e,cells:k}}});w("extend-esri")&&v.setObject("layers._GridLayout",k,x);return k});