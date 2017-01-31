//>>built
define("esri/layers/vectorTiles/views/vectorTiles/SpriteMosaic",["require","exports","./Rect","./RectangleBinPack","../webgl/Texture"],function(s,t,q,k,r){return function(){function e(a,c){this._height=this._width=0;this._mosaicRects={};this._dirty=!1;this.pixelRatio=1;(0>=a||0>=c)&&console.error("Sprites mosaic width and height must be greater than zero!");this._width=a;this._height=c;this._binPack=new k(a,c)}Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!0,
configurable:!0});Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0});e.prototype.setSpriteSource=function(a){this._dispose();this.pixelRatio=a.devicePixelRatio;this._mosaicData||(this._binPack=new k(this._width,this._height),this._mosaicData=new Uint32Array(Math.floor(this._width)*Math.floor(this._height)));this._sprites=a};e.prototype.getSpriteItem=function(a,c){void 0===c&&(c=!1);var b=this._mosaicRects[a];if(b)return b;if(!this._sprites||
"loaded"!==this._sprites.loadStatus)return null;var d=this._sprites.getSpritePosition(a);if(!d||!d.width||!d.height)return null;var e=this._allocateImage(d.width,d.height);if(0>=e.width)return null;b={rect:e,width:d.width,height:d.height,sdf:d.sdf,pixelRatio:d.pixelRatio};this._copy(e,d,c);return this._mosaicRects[a]=b};e.prototype.getSpriteItems=function(a){for(var c={},b=0;b<a.length;b++){var d=a[b];c[d]=this.getSpriteItem(d)}return c};e.prototype.getMosaicItemPosition=function(a,c){var b=this.getSpriteItem(a,
c),d=b&&b.rect;if(!d)return null;d.width=b.width;d.height=b.height;return{size:[b.width,b.height],tl:[(d.x+1)/this._width,(d.y+1)/this._height],br:[(d.x+1+b.width)/this._width,(d.y+1+b.height)/this._height]}};e.prototype.bind=function(a,c,b){void 0===b&&(b=0);this._texture||(this._texture=new r(a,{pixelFormat:6408,dataType:5121,width:this._width,height:this._height},new Uint8Array(this._mosaicData.buffer)));this._texture.setSamplingMode(c);a.bindTexture(this._texture,b);this._dirty&&this._texture.setData(new Uint8Array(this._mosaicData.buffer));
this._dirty=!1};e._copyBits=function(a,c,b,d,e,m,g,f,n,p,h){var l=d*c+b;g=f*m+g;if(h){g-=m;for(h=-1;h<=p;h++,l=((h+p)%p+d)*c+b,g+=m)for(f=-1;f<=n;f++)e[g+f]=a[l+(f+n)%n]}else for(h=0;h<p;h++){for(f=0;f<n;f++)e[g+f]=a[l+f];l+=c;g+=m}};e.prototype._copy=function(a,c,b){if(this._sprites&&"loaded"===this._sprites.loadStatus){var d=new Uint32Array(this._sprites.image.buffer),k=this._mosaicData;(!k||!d)&&console.error("Source or target images are uninitialized!");e._copyBits(d,this._sprites.width,c.x,c.y,
k,this._width,a.x+1,a.y+1,c.width,c.height,b);this._dirty=!0}};e.prototype._allocateImage=function(a,c){a+=2;c+=2;var b=this._binPack.allocate(a+(a%4?4-a%4:0),c+(c%4?4-c%4:0));0>=b.width&&(console.warn("Out of sprite mosaic space!"),b=new q(0,0,0,0));return b};e.prototype._dispose=function(){this._binPack=this._mosaicData=null;this._mosaicRects={};this._dirty=!0};return e}()});