webpackJsonp([0x67ef26645b2a,60335399758886],{"./node_modules/json-loader/index.js!./.cache/json/layout-index.json":function(e,t){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{scope:null,title:"Home Page"},fields:{slug:"/"}}},{node:{frontmatter:{scope:null,title:"Privacy policy"},fields:{slug:"/privacy/"}}},{node:{frontmatter:{scope:["HEADER","FOOTER"],title:"Saleshero Skills"},fields:{slug:"/skills/"}}},{node:{frontmatter:{scope:null,title:"Terms of Service"},fields:{slug:"/terms/"}}},{node:{frontmatter:{scope:null,title:"Home Page"},fields:{slug:"/lp/ai_assistant_for_sales_reps/"}}},{node:{frontmatter:{scope:null,title:"AI for sales reps"},fields:{slug:"/lp/ai_assistant_linkedin/"}}}]}},layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/vitaliizhukov/work/sh-site/website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/vitaliizhukov/work/sh-site/website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/vitaliizhukov/work/sh-site/website/node_modules/babel-plugin-transform-object-assign/lib/index.js",["react-css-modules",{"generateScopedName":"[path]---[name]---[local]---[hash:base64:5]","webpackHotModuleReloading":false,"filetypes":{".scss":{"syntax":"postcss-scss"}},"exclude":"/global/"}]],"presets":[["/Users/vitaliizhukov/work/sh-site/website/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/vitaliizhukov/work/sh-site/website/node_modules/babel-preset-stage-0/lib/index.js","/Users/vitaliizhukov/work/sh-site/website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n("./node_modules/react/react.js"),i=r(s),a=n("./src/layouts/index.js"),u=r(a),l=n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json"),c=r(l);t.default=function(e){return i.default.createElement(u.default,o({},e,c.default))},e.exports=t.default},"./node_modules/classnames/index.js":function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var i in r)s.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}var s={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(r=[],o=function(){return n}.apply(t,r),!(void 0!==o&&(e.exports=o)))}()},"./node_modules/deep-equal/index.js":function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function s(e,t,n){var s,c;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=i.call(e),t=i.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(s=0;s<e.length;s++)if(e[s]!==t[s])return!1;return!0}try{var d=a(e),f=a(t)}catch(e){return!1}if(d.length!=f.length)return!1;for(d.sort(),f.sort(),s=d.length-1;s>=0;s--)if(d[s]!=f[s])return!1;for(s=d.length-1;s>=0;s--)if(c=d[s],!l(e[c],t[c],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,a=n("./node_modules/deep-equal/lib/keys.js"),u=n("./node_modules/deep-equal/lib/is_arguments.js"),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:s(e,t,n))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},"./node_modules/deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/exenv/index.js":function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),s={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return s}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},"./node_modules/normalize.css/normalize.css":function(e,t){},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("./node_modules/react/react.js"),d=r(c),f=n("./node_modules/prop-types/index.js"),p=r(f),T=n("./node_modules/react-side-effect/lib/index.js"),m=r(T),y=n("./node_modules/deep-equal/index.js"),E=r(y),A=n("./node_modules/react-helmet/lib/HelmetUtils.js"),M=n("./node_modules/react-helmet/lib/HelmetConstants.js"),g=function(e){var t,n;return n=t=function(t){function n(){return s(this,n),i(this,t.apply(this,arguments))}return a(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,E.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case M.TAG_NAMES.SCRIPT:case M.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case M.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,s=e.nestedChildren;return u({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[u({},o,this.mapNestedChildrenToProps(n,s))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,s=e.newChildProps,i=e.nestedChildren;switch(r.type){case M.TAG_NAMES.TITLE:return u({},o,(t={},t[r.type]=i,t.titleAttributes=u({},s),t));case M.TAG_NAMES.BODY:return u({},o,{bodyAttributes:u({},s)});case M.TAG_NAMES.HTML:return u({},o,{htmlAttributes:u({},s)})}return u({},o,(n={},n[r.type]=u({},s),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var r;n=u({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.default.Children.forEach(e,function(e){if(e&&e.props){var s=e.props,i=s.children,a=o(s,["children"]),u=(0,A.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case M.TAG_NAMES.LINK:case M.TAG_NAMES.META:case M.TAG_NAMES.NOSCRIPT:case M.TAG_NAMES.SCRIPT:case M.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),s=u({},r);return n&&(s=this.mapChildrenToProps(n,s)),d.default.createElement(e,s)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(d.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,A.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},j=function(){return null},_=(0,m.default)(A.reducePropsToState,A.handleClientStateChange,A.mapStateOnServer)(j),h=g(_);h.renderStatic=h.rewind,t.Helmet=h,t.default=h},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"./node_modules/react-helmet/lib/HelmetUtils.js":function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("./node_modules/react/react.js"),a=r(i),u=n("./node_modules/object-assign/index.js"),l=r(u),c=n("./node_modules/react-helmet/lib/HelmetConstants.js"),d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=E(e,c.TAG_NAMES.TITLE),n=E(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=E(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return E(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return s({},e,t)},{})},m=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var s=r[o],i=s.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},y=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&h("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,s=Object.keys(e),i=0;i<s.length;i++){var a=s[i],u=a.toLowerCase();t.indexOf(u)===-1||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),t.indexOf(a)===-1||a!==c.TAG_PROPERTIES.INNER_HTML&&a!==c.TAG_PROPERTIES.CSS_TEXT&&a!==c.TAG_PROPERTIES.ITEM_PROP||(n=a)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var s=Object.keys(o),i=0;i<s.length;i++){var a=s[i],u=(0,l.default)({},r[a],o[a]);r[a]=u}return e},[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=function(e){return{baseTag:m([c.TAG_PROPERTIES.HREF],e),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,e),defer:E(e,c.HELMET_PROPS.DEFER),encode:E(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,e),linkTags:y(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:y(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:y(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:y(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:y(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,e)}},M=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){M(t)},0)}}(),g=function(e){return clearTimeout(e)},j="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||M:e.requestAnimationFrame||M,_="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||g:e.cancelAnimationFrame||g,h=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,N=function(e){S&&_(S),e.defer?S=j(function(){v(e,function(){S=null})}):(v(e),S=null)},v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,s=e.linkTags,i=e.metaTags,a=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;L(c.TAG_NAMES.BODY,r),L(c.TAG_NAMES.HTML,o),b(f,p);var T={baseTag:C(c.TAG_NAMES.BASE,n),linkTags:C(c.TAG_NAMES.LINK,s),metaTags:C(c.TAG_NAMES.META,i),noscriptTags:C(c.TAG_NAMES.NOSCRIPT,a),scriptTags:C(c.TAG_NAMES.SCRIPT,l),styleTags:C(c.TAG_NAMES.STYLE,d)},m={},y={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=T[e].oldTags)}),t&&t(),u(e,m,y)},I=function(e){return Array.isArray(e)?e.join(""):e},b=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=I(e)),L(c.TAG_NAMES.TITLE,t)},L=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],s=[].concat(o),i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),o.indexOf(u)===-1&&o.push(u);var d=s.indexOf(u);d!==-1&&s.splice(d,1)}for(var f=s.length-1;f>=0;f--)n.removeAttribute(s[f]);o.length===s.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},C=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),s=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,a)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):s.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),s.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:s}},O=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},x=function(e,t,n,r){var o=O(n),s=I(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+d(s,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+d(s,r)+"</"+e+">"},w=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+d(r[t],n)+'"';return e?e+" "+o:o},""),s=r.innerHTML||r.cssText||"",i=c.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+s+"</"+e+">")},"")},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t},t)},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t},t)},D=function(e,t,n){var r,o=(r={key:t},r[c.HELMET_ATTRIBUTE]=!0,r),s=P(n,o);return[a.default.createElement(c.TAG_NAMES.TITLE,s,t)]},k=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),a.default.createElement(e,o)})},H=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return D(e,t.title,t.titleAttributes,n)},toString:function(){return x(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return P(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return k(e,t)},toString:function(){return w(e,t,n)}}}},G=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,s=e.linkTags,i=e.metaTags,a=e.noscriptTags,u=e.scriptTags,l=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:H(c.TAG_NAMES.BASE,t,r),bodyAttributes:H(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:H(c.ATTRIBUTE_NAMES.HTML,o,r),link:H(c.TAG_NAMES.LINK,s,r),meta:H(c.TAG_NAMES.META,i,r),noscript:H(c.TAG_NAMES.NOSCRIPT,a,r),script:H(c.TAG_NAMES.SCRIPT,u,r),style:H(c.TAG_NAMES.STYLE,l,r),title:H(c.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=R,t.handleClientStateChange=N,t.mapStateOnServer=G,t.reducePropsToState=A,t.requestAnimationFrame=j,t.warn=h}).call(t,function(){return this}())},"./node_modules/react-proptypes/index.js":function(e,t,n){e.exports=n("./node_modules/prop-types/index.js")},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("./node_modules/react/react.js"),u=r(a),l=n("./node_modules/exenv/index.js"),c=r(l),d=n("./node_modules/shallowequal/index.js"),f=r(d);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function d(){T=e(p.map(function(e){return e.props})),m.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,m=function(e){function t(){return o(this,t),s(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,f.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),d()},t.prototype.render=function(){return u.default.createElement(l,this.props)},t}(a.Component);return m.displayName="SideEffect("+r(l)+")",m.canUseDOM=c.default.canUseDOM,m}}},"./node_modules/shallowequal/index.js":function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var s=Object.keys(e),i=Object.keys(t);if(s.length!==i.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),u=0;u<s.length;u++){var l=s[u];if(!a(l))return!1;var c=e[l],d=t[l];if(o=n?n.call(r,c,d,l):void 0,o===!1||void 0===o&&c!==d)return!1}return!0}},2:function(e,t,n){function r(e){return n(o(e))}function o(e){return s[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var s={"./linkedin.svg":"./src/components/Icon/linkedin.svg","./logo.svg":"./src/components/Icon/logo.svg","./robin.svg":"./src/components/Icon/robin.svg"};r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id=2},1:function(e,t,n){function r(e){return n(o(e))}function o(e){return s[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var s={"./index":"./src/components/Icon/index.js","./index.js":"./src/components/Icon/index.js","./linkedin.png":"./src/components/Icon/linkedin.png","./linkedin.svg":"./src/components/Icon/linkedin.svg","./logo.svg":"./src/components/Icon/logo.svg","./robin.svg":"./src/components/Icon/robin.svg"};r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id=1},"./src/components/Icon/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/react/react.js"),s=r(o),i=n("./node_modules/prop-types/index.js"),a=function(e){if(e)try{var t=e;return t=e.includes(".")?n(1)("./"+e):n(2)("./"+e+".svg"),s.default.createElement("img",{src:t,alt:e})}catch(e){console.log(e)}return null},u=function(e){var t=e.image;return t?a(t):null};u.propTypes={image:i.string},u.defaultProps={image:""},t.default=u,e.exports=t.default},"./src/components/Icon/linkedin.png":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAABGdBTUEAALGPC/xhBQAAAdxJREFUOBG9UzFrU1EUPueSWHCIYhB0Km0WBenQQcjWQWKx1IRENEFcFKSjQkd/QYo4Cjq1Q2maIUEMDXFw6dKhiig4uDiIYrYKKnkm7+v3El7yXkheQiI9D9493/nO+e65792jy5ncApp4KcAVUf0QMnhQKRU+yxRm7Ka9CeAqRE5zjTdb+mIKvXapUei8T0Ql5sMTACOKXV+dqh/7yPGAiZzKrKma+6JmQ1XvVkvbj8crPeEsTSSz6wK51N3X4LBWLjx3cCKZy/NWnHM5o1I5HwnXfv6yHonoqopcEMEXQPfPzFzMF4vP/jq5IRIrECy5hQo5S78tKrBv0Z9zOa5/6kfWE66LFOPTtln6146sH3eWU9kb1fLOV9OJD3tzC48B8pABCg4w4DJseeowoQH00BAFZ1TF4tHfsM0Ge73p1SBOO8MUKEoBzkNvD36qhoHG917tvHei11PZe7Cx1cug15KFEcf3pbNBKbiCDhMJp7cZ/O3Nsm3EAkXZJZvzmn7zomLxdov4uzfGEY0GinqTO77/xzkxVfzrzxshir5O+8sH40BRju3/Fx3cx+hoYKe8T4H8MPnAokmPz8uPtypad3dV4MD1OTWvyUVdzIn56PrdVU2VNZ96WN4dA+ASl1oO2b++AAAAAElFTkSuQmCC"},"./src/components/Icon/linkedin.svg":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxNzkyIDE3OTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM2NSAxNDE0aDIzMXYtNjk0aC0yMzF2Njk0em0yNDYtOTA4cS0xLTUyLTM2LTg2dC05My0zNC05NC41IDM0LTM2LjUgODZxMCA1MSAzNS41IDg1LjV0OTIuNSAzNC41aDFxNTkgMCA5NS0zNC41dDM2LTg1LjV6bTU4NSA5MDhoMjMxdi0zOThxMC0xNTQtNzMtMjMzdC0xOTMtNzlxLTEzNiAwLTIwOSAxMTdoMnYtMTAxaC0yMzFxMyA2NiAwIDY5NGgyMzF2LTM4OHEwLTM4IDctNTYgMTUtMzUgNDUtNTkuNXQ3NC0yNC41cTExNiAwIDExNiAxNTd2Mzcxem00NjgtOTk4djk2MHEwIDExOS04NC41IDIwMy41dC0yMDMuNSA4NC41aC05NjBxLTExOSAwLTIwMy41LTg0LjV0LTg0LjUtMjAzLjV2LTk2MHEwLTExOSA4NC41LTIwMy41dDIwMy41LTg0LjVoOTYwcTExOSAwIDIwMy41IDg0LjV0ODQuNSAyMDMuNXoiPjwvcGF0aD48L3N2Zz4="},"./src/components/Icon/logo.svg":function(e,t){e.exports="data:image/svg+xml;base64,ICAgIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAxNTggMjIiPgogICAgICAgIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT4KICAgICAgICA8cGF0aCBkPSJNMTAuNyA2LjNDMTAuNSA1LjQgOS44IDMuOSA3LjYgMy45Yy0xLjYgMC0yLjcgMS0yLjcgMi4yIDAgMC45IDAuNiAxLjcgMS44IDEuOWwyLjQgMC41YzMuMSAwLjYgNC44IDIuNiA0LjggNSAwIDIuNi0yLjIgNS4zLTYuMSA1LjMgLTQuNSAwLTYuNS0yLjktNi44LTUuM2wzLjEtMC44YzAuMSAxLjcgMS4zIDMuMiAzLjcgMy4yIDEuOCAwIDIuOC0wLjkgMi44LTIuMSAwLTEtMC43LTEuOC0yLjEtMmwtMi40LTAuNWMtMi43LTAuNi00LjUtMi4zLTQuNS00LjlDMS42IDMuMyA0LjQgMSA3LjYgMWM0LjEgMCA1LjcgMi41IDYuMSA0LjRMMTAuNyA2LjN6IiAvPjxwYXRoIGQ9Ik0yNy4xIDE0LjVoLTYuOWwtMS40IDMuOWgtMy41bDYuNS0xN2gzLjhsNi41IDE3aC0zLjZMMjcuMSAxNC41ek0yMS4zIDExLjVoNC43bC0yLjQtNi40TDIxLjMgMTEuNXoiIC8+PHBhdGggZD0iTTM0LjcgMTguNFYxLjRoMy4zdjEzLjloNy42djMuMkgzNC43eiIgLz48cGF0aCBkPSJNNDguMyAxOC40VjEuNGgxMC43djMuMWgtNy4zdjMuOWg2Ljd2M2gtNi42djMuOWg3LjN2My4xSDQ4LjN6IiAvPjxwYXRoIGQ9Ik03MS4yIDYuM0M3MSA1LjQgNzAuMyAzLjkgNjguMSAzLjljLTEuNiAwLTIuNyAxLTIuNyAyLjIgMCAwLjkgMC42IDEuNyAxLjggMS45bDIuNCAwLjVjMy4xIDAuNiA0LjggMi42IDQuOCA1IDAgMi42LTIuMiA1LjMtNi4xIDUuMyAtNC41IDAtNi41LTIuOS02LjgtNS4zbDMuMS0wLjhjMC4xIDEuNyAxLjMgMy4yIDMuNyAzLjIgMS44IDAgMi44LTAuOSAyLjgtMi4xIDAtMS0wLjctMS44LTIuMS0ybC0yLjQtMC41Yy0yLjctMC42LTQuNS0yLjMtNC41LTQuOUM2Mi4yIDMuMyA2NC45IDEgNjguMSAxYzQuMSAwIDUuNyAyLjUgNi4xIDQuNEw3MS4yIDYuM3oiIC8+PHBhdGggZD0iTTg4LjYgMTguNHYtNy4xaC03LjR2Ny4xaC0zLjNWMS40aDMuM3Y2LjhoNy40VjEuNGgzLjN2MTdIODguNnoiIC8+PHBhdGggZD0iTTk2LjMgMTguNFYxLjRoMTAuN3YzLjFoLTcuM3YzLjloNi43djNoLTYuNnYzLjloNy4zdjMuMUg5Ni4zeiIgLz48cGF0aCBkPSJNMTE1LjkgMTEuOGgtMS43djYuNmgtMy4zVjEuNGg2LjZjMy4zIDAgNS40IDIuMyA1LjQgNS4yIDAgMi40LTEuNCA0LjItMy42IDQuOGwzLjYgN2gtMy43TDExNS45IDExLjh6TTExNi44IDljMS43IDAgMi43LTEgMi43LTIuNCAwLTEuNC0xLTIuNC0yLjctMi40aC0yLjd2NC43SDExNi44eiIgLz48cGF0aCBkPSJNMTMzLjkgMWM0LjYgMCA4LjggMy40IDguOCA4LjkgMCA1LjUtNC4xIDguOS04LjggOC45IC00LjYgMC04LjctMy40LTguNy04LjlDMTI1LjIgNC40IDEyOS4zIDEgMTMzLjkgMXpNMTMzLjkgMTUuNWMyLjYgMCA1LjMtMS44IDUuMy01LjdzLTIuNy01LjctNS4zLTUuN2MtMi42IDAtNS4zIDEuOC01LjMgNS43UzEzMS4zIDE1LjUgMTMzLjkgMTUuNXoiIC8+PHBhdGggZD0iTTE0NC4yIDIxdi0yLjZoMTIuM1YyMUgxNDQuMnoiIC8+CiAgICA8L3N2Zz4="},"./src/components/Icon/robin.svg":function(e,t,n){e.exports=n.p+"static/robin.3c567070.svg"},"./src/components/Navigation/Navigation.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/react/react.js"),s=r(o),i=n("./node_modules/gatsby-link/index.js"),a=r(i),u=n("./node_modules/prop-types/index.js"),l=n("./src/ui/index.js");n("./src/components/Navigation/Navigation.scss");var c=function(e){return"key-nav-item-"+e.fields.slug},d=function(e,t){return e.node.fields.slug<t.node.fields.slug?-1:e.node.fields.slug>t.node.fields.slug?1:0},f=function(e){var t=e.pages,n=e.isTop,r=e.scrollToTop;return s.default.createElement("ul",{className:"nav__container"},t.sort(d).map(function(e){var t=e.node;return s.default.createElement("li",{key:c(t)},s.default.createElement(a.default,{to:t.fields.slug,className:"button-text-small"},t.frontmatter.title))}),s.default.createElement("li",null,s.default.createElement(l.Button,{small:!0,outline:n,onClick:r},"Free Trial")))};f.propTypes={pages:(0,u.arrayOf)((0,u.shape)({node:(0,u.shape)({fields:(0,u.shape)({slug:u.string})})})),isTop:u.bool,scrollTop:u.func},t.default=f,e.exports=t.default},"./src/components/Navigation/Navigation.scss":function(e,t){},"./src/layouts/Footer/Footer.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/react/react.js"),s=r(o),i=n("./node_modules/prop-types/index.js"),a=n("./node_modules/gatsby-link/index.js"),u=r(a);n("./src/layouts/Footer/Footer.scss");var l=n("./src/components/Icon/index.js"),c=r(l),d=function(e){return e.filter(function(e){var t=e.node.frontmatter.scope;return t&&t.indexOf("FOOTER")>-1})},f=function(e){return s.default.createElement("div",{className:"nav__items"},d(e.allMarkdownRemark.edges).map(function(e,t){return s.default.createElement(u.default,{to:e.node.fields.slug,key:t,className:"button-text-small"},e.node.frontmatter.title)}),s.default.createElement("a",{href:"https://linkedin.com"},s.default.createElement(c.default,{image:"linkedin.png"})))},p=function(e){var t=e.data,n=e.withNav;return s.default.createElement("section",{className:"footer__container"},s.default.createElement("div",{className:"footer__top"},s.default.createElement("div",{className:"footer__nav"},s.default.createElement(u.default,{to:"/",className:"logo__container"},s.default.createElement(c.default,{image:"logo"})),n&&f(t)),s.default.createElement("p",{className:"copytext-extra-small"},"At SalesHero, our mission is to empower sales teams through artificial intelligence. We are located in San Francisco, CA.")),s.default.createElement("div",{className:"underline"}),s.default.createElement("div",{className:"footer__bottom"},s.default.createElement("div",{className:"footer__tm copytext-extra-small"},"© 2017 SalesHero, Inc."),n&&s.default.createElement("div",{className:"footer__terms copytext-small"},s.default.createElement(u.default,{to:"/terms"},"Terms of Service"),s.default.createElement(u.default,{to:"/privacy"},"Privacy policy"))))};p.propTypes={data:(0,i.shape)({allMarkDownRemark:(0,i.shape)({edges:(0,i.arrayOf)(i.object)})}),withNav:i.bool},t.default=p,e.exports=t.default},"./src/layouts/Footer/Footer.scss":function(e,t){},"./src/layouts/Header/Header.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/react/react.js"),s=r(o),i=n("./node_modules/prop-types/index.js"),a=n("./node_modules/gatsby-link/index.js"),u=r(a),l=n("./node_modules/classnames/index.js"),c=r(l),d=n("./src/components/Icon/index.js"),f=r(d),p=n("./src/components/Navigation/Navigation.js"),T=r(p);n("./src/layouts/Header/Header.scss");var m=function(e){return e.filter(function(e){var t=e.node.frontmatter.scope;return t&&t.indexOf("HEADER")>-1})},y=function(e){var t=e.data,n=e.isTop,r=e.scrollToTop,o=e.withNav,i=(0,c.default)({header__container:!0,shadow:!n});return s.default.createElement("div",{className:i},s.default.createElement("div",{className:"header__content"},s.default.createElement(u.default,{
to:"/",className:"logo__container"},s.default.createElement(f.default,{image:"logo"})),o&&s.default.createElement(T.default,{pages:m(t.allMarkdownRemark.edges),scrollToTop:r,isTop:n})))};y.propTypes={data:(0,i.shape)({allMarkDownRemark:(0,i.shape)({edges:(0,i.arrayOf)(i.object)})}),isTop:i.bool,withNav:i.bool,scrollToTop:i.func},t.default=y,e.exports=t.default},"./src/layouts/Header/Header.scss":function(e,t){},"./src/layouts/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var a=n("./node_modules/react/react.js"),u=r(a),l=n("./node_modules/prop-types/index.js"),c=n("./node_modules/gatsby-link/index.js"),d=(r(c),n("./node_modules/react-helmet/lib/Helmet.js")),f=r(d);n("./node_modules/normalize.css/normalize.css");var p=n("./src/layouts/Header/Header.js"),T=r(p),m=n("./src/layouts/Footer/Footer.js"),y=r(m);n("./src/styles/styles.scss"),n("./src/layouts/index.scss");var E=function(e){function t(n){o(this,t);var r=s(this,e.call(this,n));return r.state={isTop:!0,intervalId:0,isLanding:!1},r.onScroll=r.onScroll.bind(r),r.scrollToTop=r.scrollToTop.bind(r),r.scrollStep=r.scrollStep.bind(r),r}return i(t,e),t.prototype.componentDidMount=function(){document.addEventListener("scroll",this.onScroll,!1),this.setState({isLanding:window.location.href.includes("/lp/")})},t.prototype.componentWillUnmount=function(){document.removeEventListener("scroll",this.onScroll,!1)},t.prototype.onScroll=function(){this.setState({isTop:window.scrollY<100})},t.prototype.scrollStep=function(){0===window.pageYOffset&&clearInterval(this.state.intervalId);var e=10;window.scroll(0,window.pageYOffset-e)},t.prototype.scrollToTop=function(){var e=setInterval(this.scrollStep,this.props.delayInMs);this.setState({intervalId:e})},t.prototype.render=function(){var e=this.props,t=e.data,n=e.children,r=this.state,o=r.isTop,s=r.isLanding;return u.default.createElement("div",{className:"app__container"},u.default.createElement(f.default,{title:"SalesHero: Sales AI",meta:[{name:"description",content:"AI assistant for sales reps"},{name:"keywords",content:"AI sales assistant"}]},u.default.createElement("link",{rel:"stylesheet",href:"http://fonts.googleapis.com/icon?family=Material+Icons"}),u.default.createElement("script",{type:"text/javascript",src:"./dist/shlogo.min.js"})),u.default.createElement(T.default,{data:t,scrollToTop:this.scrollToTop,isTop:o,withNav:!s}),u.default.createElement("div",{className:"app__content"},n()),u.default.createElement(y.default,{data:t,withNav:!s}))},t}(u.default.Component);E.propTypes={children:l.func,data:l.object},t.default=E;t.query="** extracted graphql fragment **"},"./src/layouts/index.scss":function(e,t){},"./src/styles/styles.scss":function(e,t){},"./src/ui/Button/Button.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/react/react.js"),s=r(o),i=n("./node_modules/react-proptypes/index.js"),a=n("./node_modules/classnames/index.js"),u=r(a);n("./src/ui/Button/Button.scss");var l=function(e){var t=e.children,n=e.outline,r=e.small,o=e.onClick,i=(0,u.default)({"sh-button__container":!0,"button-text-large":!r,"button-text-small":r,"sh-button__container--outline":n,"sh-button__container--small":r});return s.default.createElement("button",{className:i,onClick:o},t)};l.propTypes={children:i.node,type:i.string,outline:i.bool,small:i.bool,onClick:i.func},l.defaultProps={children:null,type:"button",outline:!1,small:!1,onClick:null},t.default=l,e.exports=t.default},"./src/ui/Button/Button.scss":function(e,t){},"./src/ui/Divider/Divider.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/react/react.js"),s=r(o);n("./src/ui/Divider/Divider.scss");var i=function(){return s.default.createElement("div",{className:"divider__container"})};t.default=i,e.exports=t.default},"./src/ui/Divider/Divider.scss":function(e,t){},"./src/ui/Input/Input.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/react/react.js"),s=r(o),i=n("./node_modules/react-proptypes/index.js");n("./src/ui/Input/Input.scss");var a=function(e){var t=e.placeholder,n=e.type,r=e.name,o=e.required,i=e.autoFocus;return s.default.createElement("input",{className:"sh-input__container copytext",placeholder:t,name:r,type:n,required:o,autoFocus:i})};a.propTypes={placeholder:i.string,type:i.string,name:i.string.isRequired},a.defaultProps={placeholder:"",type:i.string},t.default=a,e.exports=t.default},"./src/ui/Input/Input.scss":function(e,t){},"./src/ui/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Divider=t.Input=t.Button=void 0;var o=n("./src/ui/Button/Button.js"),s=r(o),i=n("./src/ui/Input/Input.js"),a=r(i),u=n("./src/ui/Divider/Divider.js"),l=r(u);t.Button=s.default,t.Input=a.default,t.Divider=l.default}});
//# sourceMappingURL=component---src-layouts-index-js-476d12c85f57a88bee5c.js.map