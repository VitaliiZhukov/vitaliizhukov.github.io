webpackJsonp([0x8fa6f4b954b0,20595694195868],{207:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.netlifyToGatsby=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=n(1),c=a(s);t.netlifyToGatsby=function(e){return function(t){function n(){return r(this,n),o(this,t.apply(this,arguments))}return i(n,t),n.prototype.transformedProps=function(){var e=this.props.entry,t=e.toJS(),n=t.data;return{data:{markdownRemark:{html:n.body,frontmatter:l({},n)}}}},n.prototype.render=function(){return c.default.createElement(e,this.transformedProps())},n}(c.default.Component)}},212:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),s=a(l),c=n(79),u=a(c),d=n(207),f=function(e){function t(n){r(this,t);var a=o(this,e.call(this,n));return a.removeHead=a.removeHead.bind(a),a.setupCMS=a.setupCMS.bind(a),a}return i(t,e),t.prototype.setupCMS=function(){window.CMS.registerPreviewStyle("http://fonts.googleapis.com/icon?family=Material+Icons"),window.CMS.registerPreviewStyle("http://saleshero.ai/admin_preiviews/styles.css"),window.CMS.registerPreviewTemplate("landingpage",(0,d.netlifyToGatsby)(u.default))},t.prototype.loadFile=function(e,t){var n="https://unpkg.com/netlify-cms@~0.4/dist/"+t;if("css"===e){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.href=n;var r=document.getElementsByTagName("head")[0];r.appendChild(a)}else{var o=document.createElement("script");o.setAttribute("src",n),document.body.appendChild(o),o.onload=this.setupCMS}},t.prototype.loadCMS=function(){this.loadFile("css","cms.css"),this.loadFile("script","cms.js")},t.prototype.removeHead=function(){this.removeItem("material-icons",!1),this.removeItem("material-styles",!1)},t.prototype.removeItem=function(e,t){var n=document.getElementById(e);return t?n.parentNode.removeChild(n):void(n&&(n.disabled=!0))},t.prototype.componentDidMount=function(){this.loadCMS(),this.removeItem("___gatsby",!0),window.addEventListener("load",this.removeHead)},t.prototype.componentWillUnmount=function(){window.removeEventListener("load",this.removeHead)},t.prototype.render=function(){return s.default.createElement("div",null)},t}(s.default.Component);t.default=f,e.exports=t.default},73:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r),i=n(8),l=n(101),s=a(l),c=function(e){var t=e.params;return o.default.createElement("div",{className:s.default.extraBlock__container},o.default.createElement("h2",null,t.title),o.default.createElement("p",{className:s.default.extraBlock__description+" subline2"},t.description),t.action&&o.default.createElement("a",{className:s.default.extraBlock__action+" button-text-large",href:"http://saleshero.ai/"},t.action))};c.propTypes={params:(0,i.shape)({title:i.string,description:i.string,action:i.string})},t.default=c,e.exports=t.default},101:function(e,t){e.exports={content__container:"src-templates-Landing-ExtraBlock----ExtraBlock-module---content__container---1_0sY",extraBlock__container:"src-templates-Landing-ExtraBlock----ExtraBlock-module---extraBlock__container---hAi1H",extraBlock__description:"src-templates-Landing-ExtraBlock----ExtraBlock-module---extraBlock__description---mNkVq",extraBlock__action:"src-templates-Landing-ExtraBlock----ExtraBlock-module---extraBlock__action---3HcRg"}},74:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ExtraBlock=void 0;var r=n(73),o=a(r);t.ExtraBlock=o.default},75:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r),i=n(8),l=n(102),s=a(l),c=function(e,t){var n=e.text,a=e.icon,r=e.color;return o.default.createElement("div",{key:t,className:s.default.feature__container},o.default.createElement("div",{className:s.default.feature__content},o.default.createElement("i",{className:"material-icons",style:{color:r}},a),o.default.createElement("p",{className:"copytext-large"},n)))},u=function(e){var t=e.params;return o.default.createElement("div",{className:s.default.features__container},o.default.createElement("h2",null,t.title),o.default.createElement("div",{className:s.default.items__container},t.items.map(function(e,t){return c(e,t)})))};u.propTypes={params:(0,i.shape)({title:i.string,items:(0,i.arrayOf)((0,i.shape)({title:i.string,icon:i.string,color:i.string,text:i.string}))})},u.defaultProps={params:{items:[]}},t.default=u,e.exports=t.default},102:function(e,t){e.exports={content__container:"src-templates-Landing-Features----Features-module---content__container---1m7ls",features__container:"src-templates-Landing-Features----Features-module---features__container---1ZutN",items__container:"src-templates-Landing-Features----Features-module---items__container---Y41YC",feature__container:"src-templates-Landing-Features----Features-module---feature__container---1UJY1",feature__content:"src-templates-Landing-Features----Features-module---feature__content---2L6ZZ"}},76:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Features=void 0;var r=n(75),o=a(r);t.Features=o.default},77:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r),i=n(8),l=n(22),s=n(103),c=a(s),u=function(e){var t=e.params,n=e.previewing;return o.default.createElement("div",{className:c.default.mainBlock__container},o.default.createElement("h1",null,t.title),o.default.createElement("p",{className:c.default.mainBlock__description+" subline2",dangerouslySetInnerHTML:{__html:t.description}}),o.default.createElement(l.SignupForm,{buttonText:t.buttonText,hasAutofocus:!0,disabled:n,inputPlaceholder:t.inputPlaceholder}))};u.propTypes={params:(0,i.shape)({title:i.string,description:i.string,inputPlaceholder:i.string,buttonText:i.string}),previewing:i.bool},u.defaultProps={params:{},previewing:!1},t.default=u,e.exports=t.default},103:function(e,t){e.exports={content__container:"src-templates-Landing-MainBlock----MainBlock-module---content__container---2lGtP",mainBlock__container:"src-templates-Landing-MainBlock----MainBlock-module---mainBlock__container---1fqfT",mainBlock__description:"src-templates-Landing-MainBlock----MainBlock-module---mainBlock__description---1rlSB"}},78:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.MainBlock=void 0;var r=n(77),o=a(r);t.MainBlock=o.default},79:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var r=n(1),o=a(r),i=n(76),l=n(78),s=n(74),c=n(104),u=a(c);t.default=function(e){var t=e.data,n=t.markdownRemark,a=n.frontmatter,r=(a.title,a.features),c=a.mainBlock,d=a.extraBlock;return o.default.createElement("div",{className:u.default.landing__container},o.default.createElement(l.MainBlock,{params:c}),o.default.createElement(i.Features,{params:r}),o.default.createElement(s.ExtraBlock,{params:d}),o.default.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}))};t.query="** extracted graphql fragment **"},104:function(e,t){e.exports={content__container:"src-templates-Landing----index-module---content__container---2Nz24",landing__container:"src-templates-Landing----index-module---landing__container---DVbA8",landing__content:"src-templates-Landing----index-module---landing__content---3rT_q"}}});
//# sourceMappingURL=component---src-pages-admin-index-jsx-a12fe05c98994553c1de.js.map