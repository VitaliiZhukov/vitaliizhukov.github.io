webpackJsonp([0x67ef26645b2a,60335399758886],{108:function(e,t){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{scope:null,title:"Home Page"},fields:{slug:"/"}}},{node:{frontmatter:{scope:["HEADER","FOOTER"],title:"Skills"},fields:{slug:"/skills/"}}},{node:{frontmatter:{scope:null,title:"Privacy policy"},fields:{slug:"/privacy/"}}},{node:{frontmatter:{scope:null,title:"Terms of Use"},fields:{slug:"/terms/"}}},{node:{frontmatter:{scope:null,title:"Home Page"},fields:{slug:"/lp/ai_assistant_for_sales_reps/"}}},{node:{frontmatter:{scope:null,title:"AI for sales reps"},fields:{slug:"/lp/ai_assistant_linkedin/"}}}]}},layoutContext:{}}},198:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),u=n(210),l=r(u),c=n(108),s=r(c);t.default=function(e){return i.default.createElement(l.default,o({},e,s.default))},e.exports=t.default},303:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=i.call(e),t=i.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=u(e),d=u(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),a=f.length-1;a>=0;a--)if(f[a]!=d[a])return!1;for(a=f.length-1;a>=0;a--)if(s=f[a],!c(e[s],t[s],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(305),l=n(304),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},304:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},305:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},312:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},445:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),d=n(5),p=r(d),T=n(464),E=r(T),m=n(303),h=r(m),y=n(446),A=n(184),_=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,h.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case A.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return l({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[l({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case A.TAG_NAMES.TITLE:return l({},o,(t={},t[r.type]=i,t.titleAttributes=l({},a),t));case A.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},a)});case A.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},a)})}return l({},o,(n={},n[r.type]=l({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=l({},t);return Object.keys(e).forEach(function(t){var r;n=l({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),l=(0,y.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case A.TAG_NAMES.LINK:case A.TAG_NAMES.META:case A.TAG_NAMES.NOSCRIPT:case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=l({},r);return n&&(a=this.mapChildrenToProps(n,a)),f.default.createElement(e,a)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},v=function(){return null},b=(0,E.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(v),S=_(b);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},184:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},446:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),u=r(i),l=n(6),c=r(l),s=n(184),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,s.TAG_NAMES.TITLE),n=h(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=h(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},m=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],l=u.toLowerCase();t.indexOf(l)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===s.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],l=(0,c.default)({},r[u],o[u]);r[u]=l}return e},[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:E([s.TAG_PROPERTIES.HREF],e),bodyAttributes:T(s.ATTRIBUTE_NAMES.BODY,e),defer:h(e,s.HELMET_PROPS.DEFER),encode:h(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(s.ATTRIBUTE_NAMES.HTML,e),linkTags:m(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:m(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(s.ATTRIBUTE_NAMES.TITLE,e)}},A=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){A(t)},0)}}(),_=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||_:e.cancelAnimationFrame||_,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,O=function(e){g&&b(g),e.defer?g=v(function(){w(e,function(){g=null})}):(w(e),g=null)},w=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;P(s.TAG_NAMES.BODY,r),P(s.TAG_NAMES.HTML,o),R(d,p);var T={baseTag:N(s.TAG_NAMES.BASE,n),linkTags:N(s.TAG_NAMES.LINK,a),metaTags:N(s.TAG_NAMES.META,i),noscriptTags:N(s.TAG_NAMES.NOSCRIPT,u),scriptTags:N(s.TAG_NAMES.SCRIPT,c),styleTags:N(s.TAG_NAMES.STYLE,f)},E={},m={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(m[e]=T[e].oldTags)}),t&&t(),l(e,E,m)},M=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=M(e)),P(s.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var l=i[u],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);var f=a.indexOf(l);f!==-1&&a.splice(f,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,i.join(","))}},N=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},C=function(e,t,n,r){var o=I(n),a=M(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},k=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),a=j(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,a,t)]},x=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},H=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return k(e,t.title,t.titleAttributes,n)},toString:function(){return C(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return x(e,t)},toString:function(){return L(e,t,n)}}}},D=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.scriptTags,c=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:H(s.TAG_NAMES.BASE,t,r),bodyAttributes:H(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:H(s.ATTRIBUTE_NAMES.HTML,o,r),link:H(s.TAG_NAMES.LINK,a,r),meta:H(s.TAG_NAMES.META,i,r),noscript:H(s.TAG_NAMES.NOSCRIPT,u,r),script:H(s.TAG_NAMES.SCRIPT,l,r),style:H(s.TAG_NAMES.STYLE,c,r),title:H(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=O,t.mapStateOnServer=D,t.reducePropsToState=y,t.requestAnimationFrame=v,t.warn=S}).call(t,function(){return this}())},464:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),l=r(u),c=n(312),s=r(c),f=n(479),d=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function f(){T=e(p.map(function(e){return e.props})),E.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,E=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return l.default.createElement(c,this.props)},t}(u.Component);return E.displayName="SideEffect("+r(c)+")",E.canUseDOM=s.default.canUseDOM,E}}},479:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!u(c))return!1;var s=e[c],f=t[c];if(o=n?n.call(r,s,f,c):void 0,o===!1||void 0===o&&s!==f)return!1}return!0}},201:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),c=n(8),s=n(25),f=r(s),d=n(17);n(357);var p=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.state={params:[],expandingInitiated:!1,forcedExpanding:!1},r.handleSubmit=r.handleSubmit.bind(r),r}return i(t,e),t.prototype.componentDidMount=function(){for(var e=new URL(window.location.href),t=[],n=e.searchParams.keys(),r=Array.isArray(n),o=0,n=r?n:n[Symbol.iterator]();;){var a;if(r){if(o>=n.length)break;a=n[o++]}else{if(o=n.next(),o.done)break;a=o.value}var i=a;t.push({name:i,value:e.searchParams.get(i)})}this.setState({params:t})},t.prototype.componentWillReceiveProps=function(e){var t=this.props.expanded,n=this.state.expandingInitiated;t||!e.expanded||n||this.setState({expandingInitiated:!0})},t.prototype.handleSubmit=function(e){e.preventDefault(),this.setState({forcedExpanding:!0})},t.prototype.render=function(){var e=this.props,t=e.buttonText,n=e.inputPlaceholder,r=e.hasAutofocus,o=e.expanded,a=this.state,i=a.expandingInitiated,u=a.forcedExpanding,c=a.params,s=(0,f.default)({"animatedSignupForm__input--hidden":i&&!o&&!u,"animatedSignupForm__input--visible":i&&o||u,animatedSignupForm__input:!0});return l.default.createElement("form",{className:"animatedSignupForm__container",action:"https://app.saleshero.ai/api/v2/user",method:"post",onSubmit:!o&&this.handleSubmit},l.default.createElement("div",{className:s},l.default.createElement(d.Input,{placeholder:n,name:"email",type:"email",required:o,small:!0,autoFocus:r})),c.map(function(e){return l.default.createElement("input",{key:e.name,name:e.name,value:e.value,hidden:!0,readOnly:!0})}),l.default.createElement(d.Button,{type:"submit",small:!0,outline:!o},t))},t}(l.default.Component);t.default=p,p.propTypes={buttonText:c.string,inputPlaceholder:c.string,hasAutofocus:c.bool},p.defaultProps={buttonText:"Get Started for Free",inputPlaceholder:"Enter Email",hasAutofocus:!1,expanded:null},e.exports=t.default},357:function(e,t){},202:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.AnimatedSignupForm=void 0;var o=n(201),a=r(o);t.AnimatedSignupForm=a.default},205:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(19),u=r(i),l=n(5);n(17);n(359);var c=n(202),s=function(e){return"key-nav-item-"+e.fields.slug},f=function(e,t){return e.node.fields.slug<t.node.fields.slug?-1:e.node.fields.slug>t.node.fields.slug?1:0},d=function(e){var t=e.pages,n=e.isTop,r=(e.scrollToTop,e.path);return a.default.createElement("ul",{className:"nav__container"},t.sort(f).map(function(e){var t=e.node;return a.default.createElement("li",{key:s(t),className:r.includes(t.fields.slug)?"nav__item--active":"nav__item"},a.default.createElement(u.default,{to:t.fields.slug,className:"main-navigation"},t.frontmatter.title))}),a.default.createElement("li",null,a.default.createElement(c.AnimatedSignupForm,{expanded:!n})))};d.propTypes={pages:(0,l.arrayOf)((0,l.shape)({node:(0,l.shape)({fields:(0,l.shape)({slug:l.string})})})),isTop:l.bool,scrollTop:l.func,path:l.string},t.default=d,e.exports=t.default},359:function(e,t){},207:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(5),u=n(19),l=r(u);n(361);var c=n(17),s=function(e){return e.filter(function(e){var t=e.node.frontmatter.scope;return t&&t.indexOf("FOOTER")>-1})},f=function(e){return a.default.createElement("div",{className:"nav__items"},s(e.allMarkdownRemark.edges).map(function(e,t){return a.default.createElement(l.default,{to:e.node.fields.slug,key:t,className:"footer-navigation-1"},e.node.frontmatter.title)}),a.default.createElement("a",{href:"https://www.linkedin.com/company/18188846/"},a.default.createElement(c.Icon,{image:"linkedin"})))},d=function(e){var t=e.data,n=e.withNav;return a.default.createElement("section",{className:"footer__container"},a.default.createElement("div",{className:"footer__top"},a.default.createElement("div",{className:"footer__nav"},a.default.createElement(l.default,{to:"/",className:"logo__container"},a.default.createElement(c.Icon,{image:"logo"})),n&&f(t)),a.default.createElement("p",{className:"footer-copytext"},"At SalesHero, our mission is to empower sales teams through artificial intelligence. We are located in San Francisco, CA.")),a.default.createElement(c.Divider,{fullWidth:!0}),a.default.createElement("div",{className:"footer__bottom"},a.default.createElement("div",{className:"footer__tm footer-copytext"},"© 2017 SalesHero, Inc."),n&&a.default.createElement("div",{className:"footer__terms footer-navigation-2"},a.default.createElement(l.default,{to:"/terms"},"Terms of Service"),a.default.createElement(l.default,{to:"/privacy"},"Privacy policy"))))};d.propTypes={data:(0,i.shape)({allMarkDownRemark:(0,i.shape)({edges:(0,i.arrayOf)(i.object)})}),withNav:i.bool},t.default=d,e.exports=t.default},361:function(e,t){},208:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(5),u=n(19),l=r(u),c=n(25),s=r(c),f=n(17),d=n(205),p=r(d);n(362);var T=function(e){return e.filter(function(e){var t=e.node.frontmatter.scope;return t&&t.indexOf("HEADER")>-1})},E=function(e){var t=e.data,n=e.isTop,r=e.withNav,o=e.path,i=e.navVisible,u=e.showNav,c=(0,s.default)({header__shadow:!0,"header__shadow--visible":!n}),d=a.default.createElement("i",{className:"material-icons",onClick:u.bind(void 0,!0)},"menu"),E=a.default.createElement("i",{className:"material-icons",onClick:u.bind(void 0,!1)},"close");return a.default.createElement("div",null,a.default.createElement("div",{className:"header__container"},a.default.createElement("div",{className:"header__content"},a.default.createElement(l.default,{to:"/",className:"logo__container"},a.default.createElement(f.Icon,{image:"logo"})),r&&a.default.createElement(p.default,{path:o,pages:T(t.allMarkdownRemark.edges),isTop:n}),a.default.createElement("div",{className:"header__mobileMenu"},i?E:d))),a.default.createElement("div",{className:c}))};E.propTypes={data:(0,i.shape)({allMarkDownRemark:(0,i.shape)({edges:(0,i.arrayOf)(i.object)})}),isTop:i.bool,withNav:i.bool,path:i.string},t.default=E,e.exports=t.default},362:function(e,t){},209:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),c=n(5),s=n(19),f=r(s),d=n(25),p=(r(d),n(17)),T=n(22);n(363);var E=function(e){return e.filter(function(e){var t=e.node.frontmatter.scope;return t&&t.indexOf("HEADER")>-1})},m=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentDidMount=function(){document.body.style.overflow="hidden"},t.prototype.componentWillUnmount=function(){document.body.style.overflow="visible"},t.prototype.render=function(){var e=this.props.data,t=[];return E(e.allMarkdownRemark.edges).forEach(function(e,n){t.push(l.default.createElement(f.default,{to:e.node.fields.slug,className:"main-navigation",key:n},e.node.frontmatter.title)),t.push(l.default.createElement(p.Divider,{key:n+"d"}))}),l.default.createElement("div",{className:"mobileNav__container"},l.default.createElement("div",{className:"mobileNav__content"},l.default.createElement("div",null),l.default.createElement("div",{className:"mobileNav__items"},l.default.createElement(p.Divider,null),t),l.default.createElement("div",{className:"mobileNav__form"},l.default.createElement(T.SignupForm,{hasAutofocus:!0,secondarySubmitBtn:!0}))),l.default.createElement(p.Divider,{fullWidth:!0}))},t}(l.default.Component);t.default=m,m.propTypes={data:(0,c.shape)({allMarkDownRemark:(0,c.shape)({edges:(0,c.arrayOf)(c.object)})}),isTop:c.bool,withNav:c.bool,path:c.string},e.exports=t.default},363:function(e,t){},210:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var u=n(1),l=r(u),c=n(5),s=n(19),f=(r(s),n(445)),d=r(f),p=n(208),T=r(p),E=n(207),m=r(E),h=n(209),y=r(h);n(365),n(364);var A=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.onScroll=function(){r.setState({isTop:window.scrollY<100})},r.showNav=function(e){r.setState({navVisible:e})},r.state={isTop:!0,intervalId:0,isLanding:!1,navVisible:!1},r}return i(t,e),t.prototype.componentDidMount=function(){document.addEventListener("scroll",this.onScroll,!1),this.setState({isLanding:window.location.href.includes("/lp/")})},t.prototype.componentWillUnmount=function(){document.removeEventListener("scroll",this.onScroll,!1)},t.prototype.componentWillReceiveProps=function(e){this.setState({navVisible:!1})},t.prototype.render=function(){var e=this.props,t=e.data,n=e.children,r=e.location,o=this.state,a=o.isTop,i=o.isLanding,u=o.navVisible;return l.default.createElement("div",{className:"app__container"},l.default.createElement(d.default,{title:"SalesHero: Sales AI",meta:[{name:"description",content:"AI assistant for sales reps"},{name:"keywords",content:"AI sales assistant"}]},l.default.createElement("link",{rel:"stylesheet",href:"http://fonts.googleapis.com/icon?family=Material+Icons"}),l.default.createElement("script",{type:"text/javascript",src:"http://saleshero.ai/assets/scripts/shlogo.min.js"})),l.default.createElement(T.default,{data:t,isTop:a,withNav:!i,path:r.pathname,navVisible:u,showNav:this.showNav}),u&&l.default.createElement(y.default,{data:t}),n(),l.default.createElement(m.default,{data:t,withNav:!i}))},t}(l.default.Component);A.propTypes={children:c.func,data:c.object},t.default=A;t.query="** extracted graphql fragment **"},364:function(e,t){},365:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-956c9b35ecd86749d322.js.map