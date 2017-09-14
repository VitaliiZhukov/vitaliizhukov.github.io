webpackJsonp([0x5eadfb0a5d2a],{"./node_modules/classnames/index.js":function(e,t,n){var o,s;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var s=typeof o;if("string"===s||"number"===s)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===s)for(var a in o)r.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(o=[],s=function(){return n}.apply(t,o),!(void 0!==s&&(e.exports=s)))}()},"./node_modules/create-react-class/factory.js":function(e,t,n){"use strict";function o(e){return e}function s(e,t,n){function s(e,t){var n=E.hasOwnProperty(t)?E[t]:null;g.hasOwnProperty(t)&&u("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&u("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function r(e,n){if(n){u("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),u(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,r=o.__reactAutoBindPairs;n.hasOwnProperty(c)&&b.mixins(e,n.mixins);for(var a in n)if(n.hasOwnProperty(a)&&a!==c){var i=n[a],l=o.hasOwnProperty(a);if(s(l,a),b.hasOwnProperty(a))b[a](e,i);else{var p=E.hasOwnProperty(a),f="function"==typeof i,_=f&&!p&&!l&&n.autobind!==!1;if(_)r.push(a,i),o[a]=i;else if(l){var h=E[a];u(p&&("DEFINE_MANY_MERGED"===h||"DEFINE_MANY"===h),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",h,a),"DEFINE_MANY_MERGED"===h?o[a]=d(o[a],i):"DEFINE_MANY"===h&&(o[a]=m(o[a],i))}else o[a]=i}}}else;}function l(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var s=n in b;u(!s,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var r=n in e;u(!r,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=o}}}function p(e,t){u(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(u(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function d(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var s={};return p(s,n),p(s,o),s}}function m(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function f(e,t){var n=t.bind(e);return n}function _(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],s=t[n+1];e[o]=f(e,s)}}function h(e){var t=o(function(e,o,s){this.__reactAutoBindPairs.length&&_(this),this.props=e,this.context=o,this.refs=i,this.updater=s||n,this.state=null;var r=this.getInitialState?this.getInitialState():null;u("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new j,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],y.forEach(r.bind(null,t)),r(t,v),r(t,e),r(t,x),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),u(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var s in E)t.prototype[s]||(t.prototype[s]=null);return t}var y=[],E={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)r(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=a({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=a({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=d(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=a({},e.propTypes,t)},statics:function(e,t){l(e,t)},autobind:function(){}},v={componentDidMount:function(){this.__isMounted=!0}},x={componentWillUnmount:function(){this.__isMounted=!1}},g={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},j=function(){};return a(j.prototype,e.prototype,g),h}var r,a=n("./node_modules/object-assign/index.js"),i=n("./node_modules/fbjs/lib/emptyObject.js"),u=n("./node_modules/fbjs/lib/invariant.js"),c="mixins";r={},e.exports=s},"./node_modules/object-assign/index.js":function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach(function(e){s[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(e){return!1}}var s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var o,i,u=n(e),c=1;c<arguments.length;c++){o=Object(arguments[c]);for(var l in o)r.call(o,l)&&(u[l]=o[l]);if(s){i=s(o);for(var p=0;p<i.length;p++)a.call(o,i[p])&&(u[i[p]]=o[i[p]])}}return u}},"./node_modules/react-proptypes/index.js":function(e,t,n){e.exports=n("./node_modules/prop-types/index.js")},"./src/components/Home/ExtraBlock/ExtraBlock.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/react/react.js"),r=o(s),a=n("./node_modules/react-proptypes/index.js");n("./src/components/Home/ExtraBlock/ExtraBlock.scss");var i=function(e){var t=e.params;return r.default.createElement("div",{className:"extra-block__container"},r.default.createElement("h2",null,t.title),r.default.createElement("p",{className:"extra-block__description subline2"},t.description),r.default.createElement("p",{className:"extra-block__action button-text-large"},t.action))};i.propTypes={params:(0,a.shape)({title:a.string,description:a.string,action:a.string})},t.default=i,e.exports=t.default},"./src/components/Home/ExtraBlock/ExtraBlock.scss":function(e,t){},"./src/components/Home/ExtraBlock/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ExtraBlock=void 0;var s=n("./src/components/Home/ExtraBlock/ExtraBlock.js"),r=o(s);t.ExtraBlock=r.default},"./src/components/Home/Features/Features.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/react/react.js"),r=o(s),a=n("./node_modules/react-proptypes/index.js");n("./src/components/Home/Features/Features.scss");var i=function(e,t){var n=e.title,o=e.icon,s=e.color,a=e.text;return r.default.createElement("div",{className:s+"-text col-sm-6 col-xs-12 col-lg-4 col-md-4",key:t},r.default.createElement("div",{className:"feature__container"},r.default.createElement("i",{className:"material-icons"},o),r.default.createElement("h3",null,n),r.default.createElement("p",{className:"copytext-large"},a)))},u=function(e){var t=e.items;return r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"features__container row"},t.map(function(e,t){return i(e,t)})))};u.propTypes={items:(0,a.arrayOf)((0,a.shape)({title:a.string,icon:a.string,color:a.string,text:a.string}))},u.defaultProps={items:[]},t.default=u,e.exports=t.default},"./src/components/Home/Features/Features.scss":function(e,t){},"./src/components/Home/Features/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Features=void 0;var s=n("./src/components/Home/Features/Features.js"),r=o(s);t.Features=r.default},"./src/components/Home/MainBlock/MainBlock.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/react/react.js"),r=o(s),a=n("./node_modules/react-proptypes/index.js"),i=n("./src/ui/index.js");n("./src/components/Home/MainBlock/MainBlock.scss");var u=function(e){var t=e.params;return r.default.createElement("div",{className:"main-block__container"},r.default.createElement("h1",null,t.title),r.default.createElement("p",{className:"main-block__description subline2"},t.description),r.default.createElement("form",{className:"main-block__form",action:"http:staging.saleshero.ai/api/v2/user",method:"post"},r.default.createElement(i.Input,{placeholder:t.inputPlaceholder,name:"email",type:"email"}),r.default.createElement(i.Button,{type:"submit"},t.buttonText)))};u.propTypes={params:(0,a.shape)({title:a.string,description:a.string,inputPlaceholder:a.string,buttonText:a.string})},t.default=u,e.exports=t.default},"./src/components/Home/MainBlock/MainBlock.scss":function(e,t){},"./src/components/Home/MainBlock/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.MainBlock=void 0;var s=n("./src/components/Home/MainBlock/MainBlock.js"),r=o(s);t.MainBlock=r.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/vitaliizhukov/work/sh-site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/vitaliizhukov/work/sh-site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/vitaliizhukov/work/sh-site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/vitaliizhukov/work/sh-site/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/vitaliizhukov/work/sh-site/node_modules/babel-preset-stage-0/lib/index.js","/Users/vitaliizhukov/work/sh-site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/index.js':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var s=n("./node_modules/react/react.js"),r=o(s),a=n("./src/components/Home/Features/index.js"),i=n("./src/components/Home/MainBlock/index.js"),u=n("./src/components/Home/ExtraBlock/index.js");t.default=function(e){var t=e.data,n=t.markdownRemark,o=n.frontmatter,s=(o.title,o.features),c=o.mainBlock,l=o.extraBlock;return r.default.createElement("div",null,r.default.createElement(i.MainBlock,{params:c}),r.default.createElement(a.Features,{items:s}),r.default.createElement(u.ExtraBlock,{params:l}),r.default.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}))};t.query="** extracted graphql fragment **"},"./src/ui/Button/Button.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/react/react.js"),r=o(s),a=n("./node_modules/react-proptypes/index.js"),i=n("./node_modules/classnames/index.js"),u=o(i);n("./src/ui/Button/Button.scss");var c=function(e){var t=e.children,n=e.outline,o=e.small,s=e.onClick,a=(0,u.default)({"sh-button__container":!0,"button-text-large":!o,"button-text-small":o,"sh-button__container--outline":n,"sh-button__container--small":o});return r.default.createElement("button",{className:a,onClick:s},t)};c.propTypes={children:a.node,type:a.string,outline:a.bool,small:a.bool,onClick:a.func},c.defaultProps={children:null,type:"button",outline:!1,small:!1,onClick:null},t.default=c,e.exports=t.default},"./src/ui/Button/Button.scss":function(e,t){},"./src/ui/Input/Input.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/react/react.js"),r=o(s),a=n("./node_modules/react-proptypes/index.js");n("./src/ui/Input/Input.scss");var i=function(e){var t=e.placeholder,n=(e.type,e.name);return r.default.createElement("input",{className:"sh-input__container copytext",placeholder:t,name:n})};i.propTypes={placeholder:a.string,type:a.string,name:a.string.isRequired},i.defaultProps={placeholder:"",type:a.string},t.default=i,e.exports=t.default},"./src/ui/Input/Input.scss":function(e,t){},"./src/ui/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Input=t.Button=void 0;var s=n("./src/ui/Button/Button.js"),r=o(s),a=n("./src/ui/Input/Input.js"),i=o(a);t.Button=r.default,t.Input=i.default}});
//# sourceMappingURL=component---src-templates-index-js-d5d49d35aa822bc17856.js.map