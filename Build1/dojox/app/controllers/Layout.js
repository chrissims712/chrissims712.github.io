//>>built
define("dojox/app/controllers/Layout","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/window dojo/query dojo/dom-geometry dojo/dom-attr dojo/dom-style dijit/registry ./LayoutBase ../utils/layout ../utils/constraints dojo/sniff".split(" "),function(p,q,m,h,r,f,l,k,g,s,t,u,n){return p("dojox.app.controllers.Layout",s,{constructor:function(a,b){},onResize:function(){this._doResize(this.app);this.resizeSelectedChildren(this.app)},resizeSelectedChildren:function(a){for(var b in a.selectedChildren)a.selectedChildren[b]&&
a.selectedChildren[b].domNode&&(this.app.log("in Layout resizeSelectedChildren calling resizeSelectedChildren calling _doResize for w.selectedChildren[hash].id\x3d"+a.selectedChildren[b].id),this._doResize(a.selectedChildren[b]),m.forEach(a.selectedChildren[b].domNode.children,function(a){g.byId(a.id)&&g.byId(a.id).resize&&g.byId(a.id).resize()}),this.resizeSelectedChildren(a.selectedChildren[b]))},initLayout:function(a){this.app.log("in app/controllers/Layout.initLayout event\x3d",a);this.app.log("in app/controllers/Layout.initLayout event.view.parent.name\x3d[",
a.view.parent.name,"]");if(!a.view.domNode.parentNode||8==n("ie")&&!a.view.domNode.parentElement)this.app.useConfigOrder?a.view.parent.domNode.appendChild(a.view.domNode):this.addViewToParentDomByConstraint(a);l.set(a.view.domNode,"data-app-constraint",a.view.constraint);this.inherited(arguments)},addViewToParentDomByConstraint:function(a){var b=a.view.constraint;if("bottom"===b)a.view.parent.domNode.appendChild(a.view.domNode);else if("top"===b)a.view.parent.domNode.insertBefore(a.view.domNode,a.view.parent.domNode.firstChild);
else if(0<a.view.parent.domNode.children.length)for(var c in a.view.parent.domNode.children){var d=a.view.parent.domNode.children[c],e="ltr"===k.get(a.view.parent.domNode,"direction"),h=e?"left":"right",e=e?"right":"left";if(d.getAttribute&&d.getAttribute("data-app-constraint")){var f=d.getAttribute("data-app-constraint");if("bottom"===f||f===e||"top"!==f&&b===h){a.view.parent.domNode.insertBefore(a.view.domNode,d);break}}}(!a.view.domNode.parentNode||8==n("ie")&&!a.view.domNode.parentElement)&&a.view.parent.domNode.appendChild(a.view.domNode)},
_doResize:function(a){var b=a.domNode;if(b){var c={};if(!("h"in c)||!("w"in c))c=q.mixin(f.getMarginBox(b),c);if(a!==this.app){var d=k.getComputedStyle(b),e=f.getMarginExtents(b,d),g=f.getBorderExtents(b,d),c=a._borderBox={w:c.w-(e.w+g.w),h:c.h-(e.h+g.h)},e=f.getPadExtents(b,d);a._contentBox={l:k.toPixelValue(b,d.paddingLeft),t:k.toPixelValue(b,d.paddingTop),w:c.w-e.w,h:c.h-e.h}}else a._contentBox={l:0,t:0,h:h.global.innerHeight||h.doc.documentElement.clientHeight,w:h.global.innerWidth||h.doc.documentElement.clientWidth};
this.inherited(arguments)}else this.app.log("Warning - View has not been loaded, in Layout _doResize view.domNode is not set for view.id\x3d"+a.id+" view\x3d",a)},layoutView:function(a){a.view&&(this.inherited(arguments),a.doResize&&(this._doResize(a.parent||this.app),this._doResize(a.view)))},_doLayout:function(a){if(a){this.app.log("in Layout _doLayout called for view.id\x3d"+a.id+" view\x3d",a);var b,c=u.getSelectedChild(a,a.constraint);c&&c.isFullScreen?console.warn("fullscreen sceen layout"):
(b=r("\x3e [data-app-constraint]",a.domNode).map(function(a){var b=g.getEnclosingWidget(a);return b?(b._constraint=l.get(a,"data-app-constraint"),b):{domNode:a,_constraint:l.get(a,"data-app-constraint")}}),c&&(b=m.filter(b,function(a){return a.domNode&&a._constraint},a)));a._contentBox&&t.layoutChildren(a.domNode,a._contentBox,b)}else console.warn("layout empty view.")}})});