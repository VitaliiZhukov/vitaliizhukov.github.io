webpackJsonp([0x8fa6f4b954b0,20595694195868],{204:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.netlifyToGatsby=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=n(1),u=o(s);t.netlifyToGatsby=function(e){return function(t){function n(e){r(this,n);var o=a(this,t.call(this,e));return o.cacheTemplate=o.cacheTemplate.bind(o),o.autoFocus=o.autoFocus.bind(o),o}return i(n,t),n.prototype.cacheTemplate=function(){var e=document.querySelector(".cms__EntryEditor__previewPane iframe"),t=e.contentDocument.querySelectorAll("input");[].forEach.call(t,function(e){e.disabled=!0}),document.addEventListener("keydown",this.autoFocus)},n.prototype.autoFocus=function(e){"Tab"!==e.key&&setTimeout(function(){e.target.focus()})},n.prototype.componentWillUnmount=function(){document.removeEventListener("keydown",this.autoFocus)},n.prototype.transformedProps=function(){var e=this.props.entry,t=e.toJS(),n=t.data;for(var o in n)"object"==typeof n[o]&&n.hasOwnProperty(o)&&n[o]&&(n[o].previewMode=!0);return{data:{markdownRemark:{html:n.body,frontmatter:l({},n)}}}},n.prototype.render=function(){return u.default.createElement(e,l({ref:this.cacheTemplate},this.transformedProps()))},n}(u.default.Component)}},209:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),s=o(l),u=n(76),c=o(u),d=n(204),f=function(e){function t(n){r(this,t);var o=a(this,e.call(this,n));return o.removeHead=o.removeHead.bind(o),o.setupCMS=o.setupCMS.bind(o),o}return i(t,e),t.prototype.setupCMS=function(){window.CMS.registerPreviewStyle("http://fonts.googleapis.com/icon?family=Material+Icons"),window.CMS.registerPreviewStyle("http://saleshero.ai/admin_preiviews/styles.css"),window.CMS.registerPreviewTemplate("landingpage",(0,d.netlifyToGatsby)(c.default))},t.prototype.loadFile=function(e,t){var n="https://unpkg.com/netlify-cms@~0.4/dist/"+t;if("css"===e){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.href=n;var r=document.getElementsByTagName("head")[0];r.appendChild(o)}else{var a=document.createElement("script");a.setAttribute("src",n),document.body.appendChild(a),a.onload=this.setupCMS}},t.prototype.loadCMS=function(){this.loadFile("css","cms.css"),this.loadFile("script","cms.js")},t.prototype.removeHead=function(){this.removeItem("material-icons",!1),this.removeItem("material-styles",!1)},t.prototype.removeItem=function(e,t){var n=document.getElementById(e);return t?n.parentNode.removeChild(n):void(n&&(n.disabled=!0))},t.prototype.componentDidMount=function(){this.loadCMS(),this.removeItem("___gatsby",!0),window.addEventListener("load",this.removeHead)},t.prototype.componentWillUnmount=function(){window.removeEventListener("load",this.removeHead)},t.prototype.render=function(){return s.default.createElement("div",null)},t}(s.default.Component);t.default=f,e.exports=t.default},72:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),a=o(r),i=n(2),l=n(98),s=o(l),u=n(42),c=function(e){var t=e.params;return a.default.createElement("div",{className:s.default.features__container},a.default.createElement("h2",{className:"small"},t&&t.title),a.default.createElement("div",{className:s.default.items__container},t&&t.items&&t.items.map(function(e,t){return(0,u.Skill)(e,t)})))};c.propTypes={params:(0,i.shape)({title:i.string,items:(0,i.arrayOf)((0,i.shape)({title:i.string,icon:i.string,color:i.string,description:i.string}))})},c.defaultProps={params:{title:"",items:[]}},t.default=c,e.exports=t.default},98:function(e,t){e.exports={content__container:"src-templates-Landing-Features----Features-module---content__container---1m7ls",features__container:"src-templates-Landing-Features----Features-module---features__container---1ZutN",items__container:"src-templates-Landing-Features----Features-module---items__container---Y41YC"}},73:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Features=void 0;var r=n(72),a=o(r);t.Features=a.default},74:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),a=o(r),i=n(2),l=n(25),s=n(54),u=n(99),c=o(u),d=function(e){var t=e.params;return a.default.createElement("div",{className:c.default.mainBlock__container},a.default.createElement("h1",{dangerouslySetInnerHTML:{__html:t&&t.title}}),a.default.createElement("p",{className:"copytext-large "+c.default.mainBlock__description,dangerouslySetInnerHTML:{__html:t&&t.description}}),a.default.createElement(l.SignupForm,{buttonText:t&&t.buttonText,inputPlaceholder:t&&t.inputPlaceholder}),t&&t.previewMode?null:t&&a.default.createElement(s.TermsLink,null))};d.propTypes={params:(0,i.shape)({title:i.string,description:i.string,inputPlaceholder:i.string,buttonText:i.string}),previewing:i.bool},d.defaultProps={params:{},previewing:!1},t.default=d,e.exports=t.default},99:function(e,t){e.exports={content__container:"src-templates-Landing-MainBlock----MainBlock-module---content__container---2lGtP",mainBlock__container:"src-templates-Landing-MainBlock----MainBlock-module---mainBlock__container---1fqfT",mainBlock__content:"src-templates-Landing-MainBlock----MainBlock-module---mainBlock__content---Ex22i"}},75:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.MainBlock=void 0;var r=n(74),a=o(r);t.MainBlock=a.default},76:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var r=n(1),a=o(r),i=n(73),l=n(75),s=n(41),u=n(55),c=n(13);t.default=function(e){var t=e.data,n=t.markdownRemark,o=n.frontmatter,r=o.features,d=o.mainBlock,f=o.extraBlock;return a.default.createElement("div",null,a.default.createElement(l.MainBlock,{params:d}),a.default.createElement(c.Divider,null),a.default.createElement(u.TrustBlock,null),a.default.createElement(c.Divider,null),a.default.createElement(i.Features,{params:r}),a.default.createElement(s.ExtraBlock,{params:f,bg:"backgrounds/skills.png"}),a.default.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}))};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-admin-index-jsx-e8b80d87d0f69acaaac8.js.map