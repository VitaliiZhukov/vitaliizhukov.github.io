webpackJsonp([0x67ef26645b2a,60335399758886],{106:function(e,t){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{scope:null,title:"Home Page"},fields:{slug:"/"}}},{node:{frontmatter:{scope:null,title:"Privacy policy"},fields:{slug:"/privacy/"}}},{node:{frontmatter:{scope:null,title:"Terms of Use"},fields:{slug:"/terms/"}}},{node:{frontmatter:{scope:["HEADER","FOOTER"],title:"Skills"},fields:{slug:"/skills/"}}},{node:{frontmatter:{scope:null,title:"Home Page"},fields:{slug:"/lp_v1/ai_assistant_for_sales_reps/"}}},{node:{frontmatter:{scope:null,title:"AI for sales reps"},fields:{slug:"/lp_v1/ai_assistant_linkedin/"}}},{node:{frontmatter:{scope:null,title:"Home Page"},fields:{slug:"/lp_v2/ai_assistant_for_sales_reps/"}}},{node:{frontmatter:{scope:null,title:"AI for sales reps"},fields:{slug:"/lp_v2/ai_assistant_linkedin/"}}},{node:{frontmatter:{scope:null,title:"Home Page"},fields:{slug:"/lp_v4/ai_assistant_for_sales_reps/"}}},{node:{frontmatter:{scope:null,title:"Home Page"},fields:{slug:"/lp_v3/ai_assistant_for_sales_reps/"}}},{node:{frontmatter:{scope:null,title:"AI for sales reps"},fields:{slug:"/lp_v3/ai_assistant_linkedin/"}}},{node:{frontmatter:{scope:null,title:"AI for sales reps"},fields:{slug:"/lp_v4/ai_assistant_linkedin/"}}}]}},layoutContext:{}}},195:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),l=n(212),u=r(l),s=n(106),c=r(s);t.default=function(e){return i.default.createElement(u.default,o({},e,c.default))},e.exports=t.default},316:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,c;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=i.call(e),t=i.call(t),s(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=l(e),d=l(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),a=f.length-1;a>=0;a--)if(f[a]!=d[a])return!1;for(a=f.length-1;a>=0;a--)if(c=f[a],!s(e[c],t[c],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,l=n(318),u=n(317),s=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},317:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},318:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},325:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},480:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=r(c),d=n(2),p=r(d),T=n(499),m=r(T),E=n(316),h=r(E),_=n(481),y=n(181),v=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return l(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case y.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return u({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[u({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case y.TAG_NAMES.TITLE:return u({},o,(t={},t[r.type]=i,t.titleAttributes=u({},a),t));case y.TAG_NAMES.BODY:return u({},o,{bodyAttributes:u({},a)});case y.TAG_NAMES.HTML:return u({},o,{htmlAttributes:u({},a)})}return u({},o,(n={},n[r.type]=u({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var r;n=u({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,l=o(a,["children"]),u=(0,_.convertReactPropstoHtmlAttributes)(l);switch(n.warnOnInvalidChildren(e,i),e.type){case y.TAG_NAMES.LINK:case y.TAG_NAMES.META:case y.TAG_NAMES.NOSCRIPT:case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=u({},r);return n&&(a=this.mapChildrenToProps(n,a)),f.default.createElement(e,a)},s(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,_.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},A=function(){return null},b=(0,m.default)(_.reducePropsToState,_.handleClientStateChange,_.mapStateOnServer)(A),S=v(b);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},181:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},481:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),l=r(i),u=n(6),s=r(u),c=n(181),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,c.TAG_NAMES.TITLE),n=h(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},m=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var l=a[i],u=l.toLowerCase();t.indexOf(u)===-1||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),t.indexOf(l)===-1||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var l=a[i],u=(0,s.default)({},r[l],o[l]);r[l]=u}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},_=function(e){return{baseTag:m([c.TAG_PROPERTIES.HREF],e),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,e),defer:h(e,c.HELMET_PROPS.DEFER),encode:h(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,e),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,e)}},y=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){y(t)},0)}}(),v=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:e.requestAnimationFrame||y,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||v:e.cancelAnimationFrame||v,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,O=function(e){g&&b(g),e.defer?g=A(function(){P(e,function(){g=null})}):(P(e),g=null)},P=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;R(c.TAG_NAMES.BODY,r),R(c.TAG_NAMES.HTML,o),M(d,p);var T={baseTag:N(c.TAG_NAMES.BASE,n),linkTags:N(c.TAG_NAMES.LINK,a),metaTags:N(c.TAG_NAMES.META,i),noscriptTags:N(c.TAG_NAMES.NOSCRIPT,l),scriptTags:N(c.TAG_NAMES.SCRIPT,s),styleTags:N(c.TAG_NAMES.STYLE,f)},m={},E={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(E[e]=T[e].oldTags)}),t&&t(),u(e,m,E)},w=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=w(e)),R(c.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),l=0;l<i.length;l++){var u=i[l],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),o.indexOf(u)===-1&&o.push(u);var f=a.indexOf(u);f!==-1&&a.splice(f,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},N=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},C=function(e,t,n,r){var o=I(n),a=w(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=c.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t},t)},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t},t)},G=function(e,t,n){var r,o=(r={key:t},r[c.HELMET_ATTRIBUTE]=!0,r),a=j(n,o);return[l.default.createElement(c.TAG_NAMES.TITLE,a,t)]},H=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),l.default.createElement(e,o)})},x=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,n)},toString:function(){return C(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return L(e,t,n)}}}},D=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:x(c.TAG_NAMES.BASE,t,r),bodyAttributes:x(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(c.ATTRIBUTE_NAMES.HTML,o,r),link:x(c.TAG_NAMES.LINK,a,r),meta:x(c.TAG_NAMES.META,i,r),noscript:x(c.TAG_NAMES.NOSCRIPT,l,r),script:x(c.TAG_NAMES.SCRIPT,u,r),style:x(c.TAG_NAMES.STYLE,s,r),title:x(c.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=k,t.handleClientStateChange=O,t.mapStateOnServer=D,t.reducePropsToState=_,t.requestAnimationFrame=A,t.warn=S}).call(t,function(){return this}())},499:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(1),u=r(l),s=n(325),c=r(s),f=n(514),d=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(s){function f(){T=e(p.map(function(e){return e.props})),m.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof s)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,m=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return u.default.createElement(s,this.props)},t}(l.Component);return m.displayName="SideEffect("+r(s)+")",m.canUseDOM=c.default.canUseDOM,m}}},514:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),u=0;u<a.length;u++){var s=a[u];if(!l(s))return!1;var c=e[s],f=t[s];if(o=n?n.call(r,c,f,s):void 0,o===!1||void 0===o&&c!==f)return!1}return!0}},198:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=r(l),s=n(2),c=n(28),f=r(c),d=n(12);n(390);var p=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.handleSubmit=function(e){e.preventDefault(),r.setState({forcedExpanding:!0})},r.state={params:[],expandingInitiated:!1,forcedExpanding:!1},r}return i(t,e),t.prototype.componentDidMount=function(){var e=new URL(window.location.href),t=[];if(e.searchParams){for(var n=e.searchParams.keys(),r=Array.isArray(n),o=0,n=r?n:n[Symbol.iterator]();;){var a;if(r){if(o>=n.length)break;a=n[o++]}else{if(o=n.next(),o.done)break;a=o.value}var i=a;t.push({name:i,value:e.searchParams.get(i)})}this.setState({params:t})}},t.prototype.componentWillReceiveProps=function(e){var t=this.props.expanded,n=this.state.expandingInitiated;t||!e.expanded||n||this.setState({expandingInitiated:!0})},t.prototype.render=function(){var e=this.props,t=e.buttonText,n=e.inputPlaceholder,r=e.hasAutofocus,o=e.expanded,a=this.state,i=a.expandingInitiated,l=a.forcedExpanding,s=a.params,c=(0,f.default)({"animatedSignupForm__input--hidden":i&&!o&&!l,"animatedSignupForm__input--visible":i&&o||l,animatedSignupForm__input:!0});return u.default.createElement("form",{className:"animatedSignupForm__container",action:"https://app.saleshero.ai/api/v2/user",method:"post",onSubmit:!o&&this.handleSubmit},u.default.createElement("div",{className:c},u.default.createElement(d.Input,{placeholder:n,name:"email",type:"email",required:o,small:!0,autoFocus:r})),s.map(function(e){return u.default.createElement("input",{key:e.name,name:e.name,value:e.value,hidden:!0,readOnly:!0})}),u.default.createElement(d.Button,{type:"submit",small:!0,outline:!o},t))},t}(u.default.Component);t.default=p,p.propTypes={buttonText:s.string,inputPlaceholder:s.string,hasAutofocus:s.bool,expanded:s.bool},p.defaultProps={buttonText:"Get Started for Free",inputPlaceholder:"name@company.com",hasAutofocus:!1,expanded:null},e.exports=t.default},390:function(e,t){},199:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.AnimatedSignupForm=void 0;var o=n(198),a=r(o);t.AnimatedSignupForm=a.default},203:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(36),l=r(i),u=n(2);n(393);var s=n(199),c=function(e){return"key-nav-item-"+e.fields.slug},f=function(e,t){return e.node.fields.slug<t.node.fields.slug?-1:e.node.fields.slug>t.node.fields.slug?1:0},d=function(e){var t=e.pages,n=e.isTop,r=e.path;return a.default.createElement("ul",{className:"nav__container"},t.sort(f).map(function(e){var t=e.node;return a.default.createElement("li",{key:c(t),className:r.includes(t.fields.slug)?"nav__item--active":"nav__item"},a.default.createElement(l.default,{to:t.fields.slug,className:"main-navigation"},t.frontmatter.title))}),a.default.createElement("li",null,a.default.createElement(s.AnimatedSignupForm,{expanded:!n})))};d.propTypes={pages:(0,u.arrayOf)((0,u.shape)({node:(0,u.shape)({fields:(0,u.shape)({slug:u.string})})})),isTop:u.bool,path:u.string},t.default=d,e.exports=t.default},393:function(e,t){},209:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(2),l=n(36),u=r(l);n(398);var s=n(12),c=function(e){return e.filter(function(e){var t=e.node.frontmatter.scope;return t&&t.indexOf("FOOTER")>-1})},f=function(e){return a.default.createElement("div",{className:"nav__items"},c(e.allMarkdownRemark.edges).map(function(e,t){return a.default.createElement(u.default,{to:e.node.fields.slug,key:t,className:"footer-navigation-1"},e.node.frontmatter.title)}),a.default.createElement("a",{href:"https://www.linkedin.com/company/18188846/"},a.default.createElement(s.Icon,{image:"linkedin"})))},d=function(e){var t=e.data,n=e.isLanding;return a.default.createElement("section",{className:"footer__container"},!n&&a.default.createElement("div",{className:"footer__top"},a.default.createElement("div",{className:"footer__nav"},a.default.createElement(u.default,{to:"/",className:"logo__container"},a.default.createElement(s.Icon,{image:"logo"})),f(t)),a.default.createElement("p",{className:"footer-copytext"},"At SalesHero, our mission is to empower sales teams through artificial intelligence. We are located in San Francisco, CA.")),!n&&a.default.createElement(s.Divider,{fullWidth:!0}),a.default.createElement("div",{className:"footer__bottom"},a.default.createElement("div",{className:"footer__tm footer-copytext"},"© 2017 SalesHero, Inc."),a.default.createElement("div",{className:"footer__terms footer-navigation-2"},a.default.createElement(u.default,{to:"/terms"},"Terms of Service"),a.default.createElement(u.default,{to:"/privacy"},"Privacy policy"))))};d.propTypes={data:(0,i.shape)({allMarkDownRemark:(0,i.shape)({edges:(0,i.arrayOf)(i.object)})}),isLanding:i.bool},t.default=d,e.exports=t.default},398:function(e,t){},210:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(2),l=n(36),u=r(l),s=n(28),c=r(s),f=n(12),d=n(203),p=r(d);n(399);var T=function(e){return e.filter(function(e){var t=e.node.frontmatter.scope;return t&&t.indexOf("HEADER")>-1})},m=function(e){var t=e.data,n=e.isTop,r=e.isLanding,o=e.path,i=e.navVisible,l=e.showNav,s=(0,c.default)({header__shadow:!0,"header__shadow--visible":!n}),d=a.default.createElement("i",{className:"material-icons",onClick:l.bind(void 0,!0)},"menu"),m=a.default.createElement("i",{className:"material-icons",onClick:l.bind(void 0,!1)},"close");return r?a.default.createElement("div",null,a.default.createElement("div",{className:"header__container header__container--landing"},a.default.createElement("div",{className:"header__content"},a.default.createElement(u.default,{to:"/",className:"logo__container"},a.default.createElement(f.Icon,{image:"logo"}))))):a.default.createElement("div",null,a.default.createElement("div",{className:"header__container"},a.default.createElement("div",{className:"header__content"},a.default.createElement(u.default,{to:"/",className:"logo__container"},a.default.createElement(f.Icon,{image:"logo"})),a.default.createElement(p.default,{path:o,pages:T(t.allMarkdownRemark.edges),isTop:n}),a.default.createElement("div",{className:"header__mobileMenu"},i?m:d))),a.default.createElement("div",{className:s}))};m.propTypes={data:(0,i.shape)({allMarkDownRemark:(0,i.shape)({edges:(0,i.arrayOf)(i.object)})}),isTop:i.bool,isLanding:i.bool,path:i.string,showNav:i.func,navVisible:i.bool},t.default=m,e.exports=t.default},399:function(e,t){},211:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=r(l),s=n(2),c=n(36),f=r(c),d=n(12),p=n(21);n(400);var T=function(e){return e.filter(function(e){var t=e.node.frontmatter.scope;return t&&t.indexOf("HEADER")>-1})},m=function(e){function t(){var n,r,i;o(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=r=a(this,e.call.apply(e,[this].concat(u))),r.handleScroll=function(e){e.preventDefault()},i=n,a(r,i)}return i(t,e),t.prototype.componentDidMount=function(){document.body.style.overflow="hidden",document.addEventListener("touchmove",this.handleScroll,!1),document.addEventListener("scroll",this.handleScroll,!1)},t.prototype.componentWillUnmount=function(){document.body.style.overflow="visible",document.removeEventListener("touchmove",this.handleScroll,!1),document.removeEventListener("scroll",this.handleScroll,!1)},t.prototype.handleClick=function(e){e.stopPropagation()},t.prototype.render=function(){var e=this.props,t=e.data,n=e.showNav,r=[];return T(t.allMarkdownRemark.edges).forEach(function(e,t){r.push(u.default.createElement(f.default,{to:e.node.fields.slug,className:"copytext-large",key:t},e.node.frontmatter.title)),r.push(u.default.createElement(d.Divider,{key:t+"d"}))}),u.default.createElement("div",{className:"mobileNav__container",onClick:n.bind(this,!1)},u.default.createElement("div",{className:"mobileNav__content",onClick:this.handleClick},u.default.createElement("div",null),u.default.createElement("div",{className:"mobileNav__items"},u.default.createElement(d.Divider,null),r),u.default.createElement("div",{className:"mobileNav__form"},u.default.createElement(p.SignupForm,{secondarySubmitBtn:!0}))),u.default.createElement("div",{className:"mobileNav__shadow"}))},t}(u.default.Component);t.default=m,m.propTypes={data:(0,s.shape)({allMarkDownRemark:(0,s.shape)({edges:(0,s.arrayOf)(s.object)})}),isTop:s.bool,withNav:s.bool,path:s.string,showNav:s.func},e.exports=t.default},400:function(e,t){},212:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var l=n(1),u=r(l),s=n(2),c=n(480),f=r(c),d=n(210),p=r(d),T=n(209),m=r(T),E=n(211),h=r(E);n(402),n(401);var _=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.onScroll=function(){r.setState({isTop:window.scrollY<100})},r.showNav=function(e){r.setState({navVisible:e})},r.state={isTop:!0,intervalId:0,isLanding:!1,navVisible:!1},r}return i(t,e),t.prototype.componentDidMount=function(){document.addEventListener("scroll",this.onScroll,!1),this.setState({isLanding:window.location.href.includes("lp")})},t.prototype.componentWillUnmount=function(){document.removeEventListener("scroll",this.onScroll,!1)},t.prototype.componentWillReceiveProps=function(){this.setState({navVisible:!1})},t.prototype.render=function(){var e=this.props,t=e.data,n=e.children,r=e.location,o=this.state,a=o.isTop,i=o.isLanding,l=o.navVisible;return u.default.createElement("div",{className:"app__container"},u.default.createElement(f.default,{title:"SalesHero: Sales AI",meta:[{name:"description",
content:"AI assistant for sales reps"},{name:"keywords",content:"AI sales assistant"}]},u.default.createElement("link",{rel:"stylesheet",href:"http://fonts.googleapis.com/icon?family=Material+Icons"}),u.default.createElement("script",{type:"text/javascript",src:"http://saleshero.ai/assets/scripts/shlogo.min.js"})),u.default.createElement(p.default,{data:t,isTop:a,isLanding:i,path:r.pathname,navVisible:l,showNav:this.showNav}),l&&u.default.createElement(h.default,{data:t,showNav:this.showNav}),n(),u.default.createElement(m.default,{data:t,isLanding:i}))},t}(u.default.Component);_.propTypes={children:s.func,data:s.object,location:s.object},t.default=_;t.query="** extracted graphql fragment **"},401:function(e,t){},402:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-958b850229dc834d267e.js.map