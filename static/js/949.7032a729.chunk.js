/*! For license information please see 949.7032a729.chunk.js.LICENSE.txt */
(self.webpackChunkarticles=self.webpackChunkarticles||[]).push([[949],{5649:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(4454)},5527:function(t,e,r){"use strict";r.d(e,{Z:function(){return g}});var n=r(3366),o=r(7462),i=r(2791),a=r(8182),u=r(4419),c=r(2065),l=r(6934),s=function(t){return((t<1?5.11916*Math.pow(t,2):4.5*Math.log(t+1)+2)/100).toFixed(2)},f=r(1402),v=r(5878),d=r(1217);function p(t){return(0,d.Z)("MuiPaper",t)}(0,v.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var h=r(184),y=["className","component","elevation","square","variant"],m=(0,l.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(t,e){var r=t.ownerState;return[e.root,e[r.variant],!r.square&&e.rounded,"elevation"===r.variant&&e["elevation".concat(r.elevation)]]}})((function(t){var e,r=t.theme,n=t.ownerState;return(0,o.Z)({backgroundColor:(r.vars||r).palette.background.paper,color:(r.vars||r).palette.text.primary,transition:r.transitions.create("box-shadow")},!n.square&&{borderRadius:r.shape.borderRadius},"outlined"===n.variant&&{border:"1px solid ".concat((r.vars||r).palette.divider)},"elevation"===n.variant&&(0,o.Z)({boxShadow:(r.vars||r).shadows[n.elevation]},!r.vars&&"dark"===r.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,c.Fq)("#fff",s(n.elevation)),", ").concat((0,c.Fq)("#fff",s(n.elevation)),")")},r.vars&&{backgroundImage:null==(e=r.vars.overlays)?void 0:e[n.elevation]}))})),g=i.forwardRef((function(t,e){var r=(0,f.Z)({props:t,name:"MuiPaper"}),i=r.className,c=r.component,l=void 0===c?"div":c,s=r.elevation,v=void 0===s?1:s,d=r.square,g=void 0!==d&&d,w=r.variant,Z=void 0===w?"elevation":w,b=(0,n.Z)(r,y),x=(0,o.Z)({},r,{component:l,elevation:v,square:g,variant:Z}),S=function(t){var e=t.square,r=t.elevation,n=t.variant,o=t.classes,i={root:["root",n,!e&&"rounded","elevation"===n&&"elevation".concat(r)]};return(0,u.Z)(i,p,o)}(x);return(0,h.jsx)(m,(0,o.Z)({as:l,ownerState:x,className:(0,a.Z)(S.root,i),ref:e},b))}))},9201:function(t,e,r){"use strict";r.d(e,{Z:function(){return w}});var n=r(7462),o=r(2791),i=r(3366),a=r(8182),u=r(4419),c=r(4036),l=r(1402),s=r(6934),f=r(5878),v=r(1217);function d(t){return(0,v.Z)("MuiSvgIcon",t)}(0,f.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=r(184),h=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],y=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(t,e){var r=t.ownerState;return[e.root,"inherit"!==r.color&&e["color".concat((0,c.Z)(r.color))],e["fontSize".concat((0,c.Z)(r.fontSize))]]}})((function(t){var e,r,n,o,i,a,u,c,l,s,f,v,d,p,h,y,m,g=t.theme,w=t.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(e=g.transitions)||null==(r=e.create)?void 0:r.call(e,"fill",{duration:null==(n=g.transitions)||null==(o=n.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(i=g.typography)||null==(a=i.pxToRem)?void 0:a.call(i,20))||"1.25rem",medium:(null==(u=g.typography)||null==(c=u.pxToRem)?void 0:c.call(u,24))||"1.5rem",large:(null==(l=g.typography)||null==(s=l.pxToRem)?void 0:s.call(l,35))||"2.1875rem"}[w.fontSize],color:null!=(f=null==(v=(g.vars||g).palette)||null==(d=v[w.color])?void 0:d.main)?f:{action:null==(p=(g.vars||g).palette)||null==(h=p.action)?void 0:h.active,disabled:null==(y=(g.vars||g).palette)||null==(m=y.action)?void 0:m.disabled,inherit:void 0}[w.color]}})),m=o.forwardRef((function(t,e){var r=(0,l.Z)({props:t,name:"MuiSvgIcon"}),o=r.children,s=r.className,f=r.color,v=void 0===f?"inherit":f,m=r.component,g=void 0===m?"svg":m,w=r.fontSize,Z=void 0===w?"medium":w,b=r.htmlColor,x=r.inheritViewBox,S=void 0!==x&&x,E=r.titleAccess,k=r.viewBox,j=void 0===k?"0 0 24 24":k,F=(0,i.Z)(r,h),L=(0,n.Z)({},r,{color:v,component:g,fontSize:Z,instanceFontSize:t.fontSize,inheritViewBox:S,viewBox:j}),O={};S||(O.viewBox=j);var N=function(t){var e=t.color,r=t.fontSize,n=t.classes,o={root:["root","inherit"!==e&&"color".concat((0,c.Z)(e)),"fontSize".concat((0,c.Z)(r))]};return(0,u.Z)(o,d,n)}(L);return(0,p.jsxs)(y,(0,n.Z)({as:g,className:(0,a.Z)(N.root,s),focusable:"false",color:b,"aria-hidden":!E||void 0,role:E?"img":void 0,ref:e},O,F,{ownerState:L,children:[o,E?(0,p.jsx)("title",{children:E}):null]}))}));m.muiName="SvgIcon";var g=m;function w(t,e){function r(r,o){return(0,p.jsx)(g,(0,n.Z)({"data-testid":"".concat(e,"Icon"),ref:o},r,{children:t}))}return r.muiName=g.muiName,o.memo(o.forwardRef(r))}},3199:function(t,e,r){"use strict";var n=r(3981);e.Z=n.Z},4454:function(t,e,r){"use strict";r.r(e),r.d(e,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return u.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return l.Z},ownerDocument:function(){return s.Z},ownerWindow:function(){return f.Z},requirePropFactory:function(){return v},setRef:function(){return d},unstable_ClassNameGenerator:function(){return b},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return h},unsupportedProp:function(){return y},useControlled:function(){return m.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return w.Z},useIsFocusVisible:function(){return Z.Z}});var n=r(5902),o=r(4036),i=r(8949).Z,a=r(9201),u=r(3199);var c=function(t,e){return function(){return null}},l=r(9103),s=r(8301),f=r(7602);r(7462);var v=function(t,e){return function(){return null}},d=r(2971).Z,p=r(162),h=r(6248).Z;var y=function(t,e,r,n,o){return null},m=r(8744),g=r(9683),w=r(2071),Z=r(3031),b={configure:function(t){n.Z.configure(t)}}},9103:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(2791);var o=function(t,e){return n.isValidElement(t)&&-1!==e.indexOf(t.type.muiName)}},8301:function(t,e,r){"use strict";var n=r(9723);e.Z=n.Z},7602:function(t,e,r){"use strict";var n=r(7979);e.Z=n.Z},8744:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(9439),o=r(2791);var i=function(t){var e=t.controlled,r=t.default,i=(t.name,t.state,o.useRef(void 0!==e).current),a=o.useState(r),u=(0,n.Z)(a,2),c=u[0],l=u[1];return[i?e:c,o.useCallback((function(t){i||l(t)}),[])]}},162:function(t,e,r){"use strict";var n=r(5721);e.Z=n.Z},9683:function(t,e,r){"use strict";var n=r(8956);e.Z=n.Z},2071:function(t,e,r){"use strict";var n=r(7563);e.Z=n.Z},3031:function(t,e,r){"use strict";r.d(e,{Z:function(){return v}});var n,o=r(2791),i=!0,a=!1,u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(t){t.metaKey||t.altKey||t.ctrlKey||(i=!0)}function l(){i=!1}function s(){"hidden"===this.visibilityState&&a&&(i=!0)}function f(t){var e=t.target;try{return e.matches(":focus-visible")}catch(r){}return i||function(t){var e=t.type,r=t.tagName;return!("INPUT"!==r||!u[e]||t.readOnly)||"TEXTAREA"===r&&!t.readOnly||!!t.isContentEditable}(e)}var v=function(){var t=o.useCallback((function(t){var e;null!=t&&((e=t.ownerDocument).addEventListener("keydown",c,!0),e.addEventListener("mousedown",l,!0),e.addEventListener("pointerdown",l,!0),e.addEventListener("touchstart",l,!0),e.addEventListener("visibilitychange",s,!0))}),[]),e=o.useRef(!1);return{isFocusVisibleRef:e,onFocus:function(t){return!!f(t)&&(e.current=!0,!0)},onBlur:function(){return!!e.current&&(a=!0,window.clearTimeout(n),n=window.setTimeout((function(){a=!1}),100),e.current=!1,!0)},ref:t}}},8949:function(t,e,r){"use strict";function n(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.reduce((function(t,e){return null==e?t:function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];t.apply(this,n),e.apply(this,n)}}),(function(){}))}r.d(e,{Z:function(){return n}})},3981:function(t,e,r){"use strict";function n(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function n(){for(var n=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var u=function(){t.apply(n,i)};clearTimeout(e),e=setTimeout(u,r)}return n.clear=function(){clearTimeout(e)},n}r.d(e,{Z:function(){return n}})},9723:function(t,e,r){"use strict";function n(t){return t&&t.ownerDocument||document}r.d(e,{Z:function(){return n}})},7979:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(9723);function o(t){return(0,n.Z)(t).defaultView||window}},2971:function(t,e,r){"use strict";function n(t,e){"function"===typeof t?t(e):t&&(t.current=e)}r.d(e,{Z:function(){return n}})},5721:function(t,e,r){"use strict";var n=r(2791),o="undefined"!==typeof window?n.useLayoutEffect:n.useEffect;e.Z=o},8956:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(2791),o=r(5721);function i(t){var e=n.useRef(t);return(0,o.Z)((function(){e.current=t})),n.useCallback((function(){return e.current.apply(void 0,arguments)}),[])}},7563:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(2791),o=r(2971);function i(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.useMemo((function(){return e.every((function(t){return null==t}))?null:function(t){e.forEach((function(e){(0,o.Z)(e,t)}))}}),e)}},6248:function(t,e,r){"use strict";var n;r.d(e,{Z:function(){return c}});var o=r(9439),i=r(2791),a=0;var u=(n||(n=r.t(i,2))).useId;function c(t){if(void 0!==u){var e=u();return null!=t?t:e}return function(t){var e=i.useState(t),r=(0,o.Z)(e,2),n=r[0],u=r[1],c=t||n;return i.useEffect((function(){null==n&&u("mui-".concat(a+=1))}),[n]),c}(t)}},4836:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},5861:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}r.d(e,{Z:function(){return o}})},4165:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(N){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),u=new F(n||[]);return i(a,"_invoke",{value:S(t,r,u)}),a}function v(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=f;var d={};function p(){}function h(){}function y(){}var m={};s(m,u,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(L([])));w&&w!==e&&r.call(w,u)&&(m=w);var Z=y.prototype=p.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(i,a,u,c){var l=v(t[i],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(f).then((function(t){s.value=t,u(s)}),(function(t){return o("throw",t,u,c)}))}c(l.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=E(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=v(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=v(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=y,i(Z,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:h,configurable:!0}),h.displayName=s(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,l,"GeneratorFunction")),t.prototype=Object.create(Z),t},t.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(Z),s(Z,l,"Generator"),s(Z,u,(function(){return this})),s(Z,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}},3573:function(t,e,r){"use strict";r.d(e,{Z:function(){return I}});var n={};r.r(n),r.d(n,{exclude:function(){return N},extract:function(){return E},parse:function(){return k},parseUrl:function(){return F},pick:function(){return O},stringify:function(){return j},stringifyUrl:function(){return L}});var o=r(4942),i=r(9439),a=r(7762),u=r(1413),c=r(3433),l="%[a-f0-9]{2}",s=new RegExp("("+l+")|([^%]+?)","gi"),f=new RegExp("("+l+")+","gi");function v(t,e){try{return[decodeURIComponent(t.join(""))]}catch(o){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],v(r),v(n))}function d(t){try{return decodeURIComponent(t)}catch(n){for(var e=t.match(s)||[],r=1;r<e.length;r++)e=(t=v(e,r).join("")).match(s)||[];return t}}function p(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=f.exec(t);r;){try{e[r[0]]=decodeURIComponent(r[0])}catch(u){var n=d(r[0]);n!==r[0]&&(e[r[0]]=n)}r=f.exec(t)}e["%C2"]="\ufffd";for(var o=0,i=Object.keys(e);o<i.length;o++){var a=i[o];t=t.replace(new RegExp(a,"g"),e[a])}return t}(t)}}function h(t,e){if("string"!==typeof t||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===t||""===e)return[];var r=t.indexOf(e);return-1===r?[]:[t.slice(0,r),t.slice(r+e.length)]}function y(t,e){var r={};if(Array.isArray(e)){var n,o=(0,a.Z)(e);try{for(o.s();!(n=o.n()).done;){var i=n.value,u=Object.getOwnPropertyDescriptor(t,i);null!==u&&void 0!==u&&u.enumerable&&Object.defineProperty(r,i,u)}}catch(v){o.e(v)}finally{o.f()}}else{var c,l=(0,a.Z)(Reflect.ownKeys(t));try{for(l.s();!(c=l.n()).done;){var s=c.value,f=Object.getOwnPropertyDescriptor(t,s);if(f.enumerable)e(s,t[s],t)&&Object.defineProperty(r,s,f)}}catch(v){l.e(v)}finally{l.f()}}return r}var m=Symbol("encodeFragmentIdentifier");function g(t){if("string"!==typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function w(t,e){return e.encode?e.strict?encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())})):encodeURIComponent(t):t}function Z(t,e){return e.decode?p(t):t}function b(t){return Array.isArray(t)?t.sort():"object"===typeof t?b(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function x(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function S(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"===typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function E(t){var e=(t=x(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function k(t,e){g((e=(0,u.Z)({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)]$/.exec(t),t=t.replace(/\[\d*]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[])$/.exec(t),t=t.replace(/\[]$/,""),e?void 0!==n[t]?n[t]=[].concat((0,c.Z)(n[t]),[r]):n[t]=[r]:n[t]=r};case"colon-list-separator":return function(t,r,n){e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),e?void 0!==n[t]?n[t]=[].concat((0,c.Z)(n[t]),[r]):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var o="string"===typeof r&&r.includes(t.arrayFormatSeparator),i="string"===typeof r&&!o&&Z(r,t).includes(t.arrayFormatSeparator);r=i?Z(r,t):r;var a=o||i?r.split(t.arrayFormatSeparator).map((function(e){return Z(e,t)})):null===r?r:Z(r,t);n[e]=a};case"bracket-separator":return function(e,r,n){var o=/(\[])$/.test(e);if(e=e.replace(/\[]$/,""),o){var i=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return Z(e,t)}));void 0!==n[e]?n[e]=[].concat((0,c.Z)(n[e]),(0,c.Z)(i)):n[e]=i}else n[e]=r?Z(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat((0,c.Z)([r[t]].flat()),[e]):r[t]=e}}}(e),n=Object.create(null);if("string"!==typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var o,l=(0,a.Z)(t.split("&"));try{for(l.s();!(o=l.n()).done;){var s=o.value;if(""!==s){var f=e.decode?s.replace(/\+/g," "):s,v=h(f,"="),d=(0,i.Z)(v,2),p=d[0],y=d[1];void 0===p&&(p=f),y=void 0===y?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?y:Z(y,e),r(Z(p,e),y,n)}}}catch(I){l.e(I)}finally{l.f()}for(var m=0,w=Object.entries(n);m<w.length;m++){var x=(0,i.Z)(w[m],2),E=x[0],k=x[1];if("object"===typeof k&&null!==k)for(var j=0,F=Object.entries(k);j<F.length;j++){var L=(0,i.Z)(F[j],2),O=L[0],N=L[1];k[O]=S(N,e)}else n[E]=S(k,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(t,e){var r=n[e];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?t[e]=b(r):t[e]=r,t}),Object.create(null))}function j(t,e){if(!t)return"";g((e=(0,u.Z)({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&function(t){return null===t||void 0===t}(t[r])||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat((0,c.Z)(r),null===n?[[w(e,t),"[",o,"]"].join("")]:[[w(e,t),"[",w(o,t),"]=",w(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat((0,c.Z)(r),null===n?[[w(e,t),"[]"].join("")]:[[w(e,t),"[]=",w(n,t)].join("")])}};case"colon-list-separator":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat((0,c.Z)(r),null===n?[[w(e,t),":list="].join("")]:[[w(e,t),":list=",w(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[w(r,t),e,w(o,t)].join("")]:[[n,w(o,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat((0,c.Z)(r),null===n?[w(e,t)]:[[w(e,t),"=",w(n,t)].join("")])}}}}(e),o={},a=0,l=Object.entries(t);a<l.length;a++){var s=(0,i.Z)(l[a],2),f=s[0],v=s[1];r(f)||(o[f]=v)}var d=Object.keys(o);return!1!==e.sort&&d.sort(e.sort),d.map((function(r){var o=t[r];return void 0===o?"":null===o?w(r,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?w(r,e)+"[]":o.reduce(n(r),[]).join("&"):w(r,e)+"="+w(o,e)})).filter((function(t){return t.length>0})).join("&")}function F(t,e){var r,n,o;e=(0,u.Z)({decode:!0},e);var a=h(t,"#"),c=(0,i.Z)(a,2),l=c[0],s=c[1];return void 0===l&&(l=t),(0,u.Z)({url:null!==(r=null===(n=l)||void 0===n||null===(o=n.split("?"))||void 0===o?void 0:o[0])&&void 0!==r?r:"",query:k(E(t),e)},e&&e.parseFragmentIdentifier&&s?{fragmentIdentifier:Z(s,e)}:{})}function L(t,e){e=(0,u.Z)((0,o.Z)({encode:!0,strict:!0},m,!0),e);var r=x(t.url).split("?")[0]||"",n=E(t.url),i=j((0,u.Z)((0,u.Z)({},k(n,{sort:!1})),t.query),e);i&&(i="?".concat(i));var a=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);if(t.fragmentIdentifier){var c=new URL(r);c.hash=t.fragmentIdentifier,a=e[m]?c.hash:"#".concat(t.fragmentIdentifier)}return"".concat(r).concat(i).concat(a)}function O(t,e,r){var n=F(t,r=(0,u.Z)((0,o.Z)({parseFragmentIdentifier:!0},m,!1),r)),i=n.url,a=n.query,c=n.fragmentIdentifier;return L({url:i,query:y(a,e),fragmentIdentifier:c},r)}function N(t,e,r){return O(t,Array.isArray(e)?function(t){return!e.includes(t)}:function(t,r){return!e(t,r)},r)}var I=n}}]);
//# sourceMappingURL=949.7032a729.chunk.js.map