webpackJsonp([69919025524611],{229:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var c=n(1),s=r(c),i=n(19);r(i);n(375);var u=function(e){function t(n){a(this,t);var r=l(this,e.call(this,n));return r.state={activeIndex:-1},r.setActiveIndex=r.setActiveIndex.bind(r),r.scrollTo=r.scrollTo.bind(r),r}return o(t,e),t.prototype.setActiveIndex=function(e){this.setState({activeIndex:e})},t.prototype.scrollTo=function(e){var t=this.refs[e];window.scrollTo(0,t.offsetTop-100)},t.prototype.renderTerm=function(e,t){var n=e.title,r=e.text,a=e.subitems;return s.default.createElement("div",{className:"term__container",key:t,ref:t},s.default.createElement("h2",{className:"medium"},n),s.default.createElement("p",{className:"copytext-small",dangerouslySetInnerHTML:{__html:r}}),a&&a.map(function(e,t){return s.default.createElement("div",{className:"termSub__container",key:t},s.default.createElement("h3",{className:"medium"},e.title),s.default.createElement("p",{className:"copytext-small",dangerouslySetInnerHTML:{__html:e.text}}))}))},t.prototype.renderNav=function(e){var t=this;return s.default.createElement("ul",null,e.map(function(e,n){return s.default.createElement("li",{className:"termNav__item link-small",key:n,onClick:function(){return t.scrollTo(n)}},e.title.replace(/\.$/,""))}))},t.prototype.render=function(){var e=this,t=this.props.data,n=t.markdownRemark,r=n.frontmatter,a=r.title,l=r.updatedDt,o=r.items,c=r.description;return s.default.createElement("div",{className:"terms__container"},s.default.createElement("div",{className:"terms__nav"},this.renderNav(o)),s.default.createElement("h1",null,a),s.default.createElement("div",{className:"terms__content"},s.default.createElement("h3",{className:"medium"},"Last Updated Date: "+l),s.default.createElement("p",{className:"copytext-small",dangerouslySetInnerHTML:{__html:c}}),s.default.createElement("div",{className:"terms__content"},o.map(function(t,n){return e.renderTerm(t,n)}))))},t}(c.Component);t.default=u;t.query="** extracted graphql fragment **"},375:function(e,t){}});
//# sourceMappingURL=component---src-templates-terms-index-js-423ee9a5fdbb8e33115f.js.map