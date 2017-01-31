//>>built
define("esri/dijit/metadata/base/XNode","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/dom-attr dojo/has ./etc/docUtil ./etc/validationUtil ./Templated ../../../kernel".split(" "),function(f,e,g,h,m,n,k,l,p,q){f=f([p],{_isGxeAttribute:!1,_isGxeElement:!1,_isGxeNode:!0,_isOptionallyOff:!1,conditionalValidator:null,gxeDocument:null,gxePath:null,inputWidget:null,parentElement:null,notApplicable:!1,serialize:!0,label:null,target:null,fixed:!1,isDocumentTitle:!1,optionsFilter:null,
serializeIfEmpty:!1,trim:!0,value:null,valueType:null,alternateValues:null,postCreate:function(){this.inherited(arguments)},destroy:function(){try{var a=this.conditionalValidator;a&&(e.isArray(a)?g.forEach(a,function(a){a.destroyRecursive(!1)}):a.destroyRecursive(!1))}catch(b){console.error(b)}try{h.publish("gxe/xnode-destroyed",{xnode:this})}catch(c){console.error(c)}this.inherited(arguments);try{h.publish("gxe/after-xnode-destroyed",{xnode:this})}catch(d){console.error(d)}},afterValidateValue:function(a,
b,c){},beforeValidateValue:function(a,b,c){},buildPath:function(){var a=function(a,b,c){b._isGxeRootDescriptor&&b.gxeDocument&&(a.gxeDocument||(a.gxeDocument=b.gxeDocument),!a.gxeDocument.rootElement&&c&&(a.gxeDocument.rootElement=c))};"string"!==typeof this.target&&(this.target=null);null!==this.target&&(this.target=e.trim(this.target),0===this.target.length&&(this.target=null));var b=null,c=this.getParent(),d=this.target;this._isGxeAttribute&&(d="@"+d);this._isGxeElement&&(b=this);for(this._isGxeElement&&
a(this,this,b);c;){if(c._isGxeElement){this.parentElement||(this.parentElement=c);if(null!==c.gxePath&&null!==c.gxeDocument){this.gxePath=c.gxePath+"/"+d;this.gxeDocument=c.gxeDocument;m.set(this.domNode,"data-gxe-path",this.gxePath);this._validateTarget();return}d=c.target+"/"+d;b=c}a(this,c,b);c=c.getParent()}this.gxePath="/"+d;m.set(this.domNode,"data-gxe-path",this.gxePath);this._validateTarget()},_checkOccurs:function(a,b){var c=1,d=typeof b;if(this._isGxeAttribute){if(a)return 1;c=0}if("undefined"!==
d&&null!==b){if("string"===d){b=e.trim(b).toLowerCase();if(a&&"unbounded"===b)return b;0<b.length&&(b=parseInt(b,10),isNaN(b)||(d=typeof b))}"number"===d&&isFinite(b)&&(0>b&&(b=0),c=b)}return c},checkXmlValue:function(){var a=this.getXmlValue();"undefined"===typeof a&&(a=null);null!==a&&(this.trim&&"string"===typeof a&&(a=e.trim(a)),a.push||(a=""+a),!this.serializeIfEmpty&&0===a.length&&(a=null));return a},findInputWidget:function(){var a=null;g.some(this.getChildren(),function(b){if(b._isGxeInput)return a=
b,!0});return a},getLabelString:function(){var a;a=this.label;if("undefined"!==typeof a&&null!=a)return a;a=this.target;return"undefined"!==typeof a&&null!=a?this.label=a:"No Target"},getParentElement:function(){for(var a=this.getParent();a;){if(a._isGxeElement)return a;a=a.getParent()}return null},getXmlValue:function(){return this.inputWidget?this.inputWidget.getXmlValue():this.value},getValidationLabel:function(){return!this.showHeader&&this.parentElement?this._isGxeElement&&this._adoptedForMultiplicity?
this.getLabelString():this.parentElement.getValidationLabel():this.getLabelString()},isLineageDescendant:function(a){var b=this;if(0===b.gxePath.indexOf(a.gxePath))for(;b;){if(b===a)return!0;b=b.parentElement}return!1},_newValidationStatus:function(){return{isValid:!0,isRequired:!1,label:null,message:"",xnodeWidget:this,inputWidget:this.inputWidget}},_publishStarted:function(){try{h.publish("gxe/xnode-started",{xnode:this})}catch(a){console.error(a)}},resolveMinOccurs:function(){return this.minOccurs},
_validateTarget:function(){var a;a=this.target;this.minOccurs=this._checkOccurs(!1,this.minOccurs);this.maxOccurs=this._checkOccurs(!0,this.maxOccurs);if(!this.gxeDocument)throw Error("XNode.validateTarget: Unable to connect to gxeDocument "+this.target);if("string"!==typeof a||null===a||0===a.length)throw a="XNode.validateTarget: The target is empty: "+this.target,k.findDescriptor(this),Error(a);if(-1!==this.target.indexOf("/"))throw a="XNode.validateTarget: The target should not contain a forward slash: "+
this.target,k.findDescriptor(this),Error(a);this._isGxeElement&&-1===this.target.indexOf(":")&&this.gxeDocument.hasNamespaces()&&k.findDescriptor(this)},validateConditionals:function(a){var b=this.conditionalValidator;b&&(e.isArray(b)?g.forEach(b,function(b){b.validateConditionals(a)}):b.validateConditionals(a))},validateValue:function(a){var b=this._newValidationStatus();if(this.fixed||!this.inputWidget)return b;var c=this.resolveMinOccurs();b.isRequired=0<c;b.label=this.getValidationLabel();c=this.inputWidget.getInputValue();
"undefined"===typeof c&&(c=null);null!==c&&this.trim&&"string"===typeof c&&(c=e.trim(c));this.beforeValidateValue(l,b,c);b.isValid&&l.validateValue(b,c);this.afterValidateValue(l,b,c);if(c=!b.isValid)if(c=a){for(var c=!1,d=this;d;){if(d.notApplicable){c=!0;break}d=d.parentElement}c=c?!1:!0}c&&a.handleValidationError(this,b.message,this.inputWidget);return b}});n("extend-esri")&&e.setObject("dijit.metadata.base.XNode",f,q);return f});