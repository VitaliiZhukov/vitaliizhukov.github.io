webpackJsonp([57352762097436],{257:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=n(r),o=a(2),i=a(360),u=n(i),s=function(e){var t=e.params;return l.default.createElement("div",{className:u.default.features__container},l.default.createElement("div",{className:u.default.items__content},l.default.createElement("h2",{className:"extra-small"},t&&t.title),l.default.createElement("div",{className:u.default.items__container},t&&t.items&&t.items.map(function(e,t){var a=e.color,n=e.icon,r=e.description;return l.default.createElement("div",{className:u.default.feature__container,key:t},l.default.createElement("i",{className:"material-icons",style:{color:a}},n),l.default.createElement("p",{className:"copytext"},r))}))))};s.propTypes={params:(0,o.shape)({title:o.string,items:(0,o.arrayOf)((0,o.shape)({title:o.string,icon:o.string,color:o.string,description:o.string}))})},s.defaultProps={params:{items:[]}},t.default=s,e.exports=t.default},360:function(e,t){e.exports={content__container:"src-templates-Landing_v5-Features----Features-module---content__container---19MP-",features__container:"src-templates-Landing_v5-Features----Features-module---features__container---3XYOQ",items__container:"src-templates-Landing_v5-Features----Features-module---items__container---2gVxt",feature__container:"src-templates-Landing_v5-Features----Features-module---feature__container---2jbx2"}},258:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Features=void 0;var r=a(257),l=n(r);t.Features=l.default},259:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=n(r),o=a(2),i=a(262),u=a(24),s=a(258),c=a(361),d=n(c),m=function(e){var t=e.params,a=e.previewing,n=e.features;return l.default.createElement("div",{className:d.default.mainBlock__container},l.default.createElement("h1",{className:"small",dangerouslySetInnerHTML:{__html:t&&t.title}}),l.default.createElement("div",{className:d.default.mainBlock__grid},l.default.createElement("div",{className:d.default.mainBlock__image,style:t&&t.bgImage&&{backgroundImage:"url(https://saleshero.ai/assets/"+t.bgImage+")"}}),l.default.createElement("div",{className:d.default.mainBlock__overlap}),l.default.createElement("div",{className:d.default.mainBlock__gridContent},l.default.createElement("div",null,l.default.createElement(s.Features,{params:n}),l.default.createElement(i.SignupForm,{buttonText:t&&t.buttonText,disabled:a,inputPlaceholder:t&&t.inputPlaceholder,splitted:["XS","MD","LG"]}),t&&t.previewMode?null:t&&l.default.createElement(u.TermsLink,null)))))};m.propTypes={params:(0,o.shape)({title:o.string,description:o.string,inputPlaceholder:o.string,buttonText:o.string}),previewing:o.bool},m.defaultProps={params:{},previewing:!1},t.default=m,e.exports=t.default},361:function(e,t){e.exports={content__container:"src-templates-Landing_v5-MainBlock----MainBlock-module---content__container---1VaQP",mainBlock__container:"src-templates-Landing_v5-MainBlock----MainBlock-module---mainBlock__container---h-R1v",mainBlock__grid:"src-templates-Landing_v5-MainBlock----MainBlock-module---mainBlock__grid---2FAfU",mainBlock__image:"src-templates-Landing_v5-MainBlock----MainBlock-module---mainBlock__image---gi_HR",mainBlock__overlap:"src-templates-Landing_v5-MainBlock----MainBlock-module---mainBlock__overlap---3aIDC",mainBlock__gridContent:"src-templates-Landing_v5-MainBlock----MainBlock-module---mainBlock__gridContent---2VS0x"}},260:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.MainBlock=void 0;var r=a(259),l=n(r);t.MainBlock=l.default},261:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(1),u=n(i),s=a(2),c=a(20),d=n(c),m=a(9),f=a(362),p=n(f),_=function(e){function t(a){r(this,t);var n=l(this,e.call(this,a));return n.state={params:[]},n}return o(t,e),t.prototype.componentDidMount=function(){var e=new URL(window.location.href),t=[];if(e.searchParams){for(var a=e.searchParams.keys(),n=Array.isArray(a),r=0,a=n?a:a[Symbol.iterator]();;){var l;if(n){if(r>=a.length)break;l=a[r++]}else{if(r=a.next(),r.done)break;l=r.value}var o=l;t.push({name:o,value:e.searchParams.get(o)})}this.setState({params:t})}},t.prototype.render=function(){var e,t=this.props,a=t.buttonText,n=t.inputPlaceholder,r=(t.hasAutofocus,t.disabled,t.secondarySubmitBtn,t.splitted,this.state.params),l=(0,d.default)((e={},e[p.default.signupForm__container]=!0,e));return u.default.createElement("form",{className:l,action:"https://app.saleshero.ai/api/v2/user",method:"post"},u.default.createElement(m.Input,{placeholder:n,name:"email",type:"email",required:!0}),r.map(function(e){return u.default.createElement("input",{key:e.name,name:e.name,value:e.value,hidden:!0,readOnly:!0})}),u.default.createElement(m.Button,{type:"submit",primary:!0},a))},t}(u.default.Component);_.propTypes={buttonText:s.string,inputPlaceholder:s.string,hasAutofocus:s.bool,disabled:s.bool,secondarySubmitBtn:s.bool,splitted:(0,s.arrayOf)(s.string)},_.defaultProps={buttonText:"Get Started for Free",inputPlaceholder:"Input Email_",hasAutofocus:!1,disabled:!1,secondarySubmitBtn:!1,splitted:null},t.default=_,e.exports=t.default},362:function(e,t){e.exports={content__container:"src-templates-Landing_v5-SignupForm----SignupForm-module---content__container---2YfA-",signupForm__container:"src-templates-Landing_v5-SignupForm----SignupForm-module---signupForm__container---xm-lU"}},262:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.SignupForm=void 0;var r=a(261),l=n(r);t.SignupForm=l.default},263:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var r=a(1),l=n(r),o=a(260),i=a(55);t.default=function(e){var t=e.data,a=t.markdownRemark,n=a.frontmatter,r=n.features,u=n.mainBlock;n.extraBlock;return l.default.createElement("div",null,l.default.createElement(o.MainBlock,{params:u,features:r}),l.default.createElement(i.TrustBlock,null))};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-landing-v-5-index-js-7e125d969471315688fc.js.map