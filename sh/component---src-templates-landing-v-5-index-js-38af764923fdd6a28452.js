webpackJsonp([57352762097436],{257:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),i=a(2),s=a(358),o=n(s),c=function(e){var t=e.params;return r.default.createElement("div",{className:o.default.features__container},r.default.createElement("div",{className:o.default.items__content},r.default.createElement("h2",{className:"extra-small"},t&&t.title),r.default.createElement("div",{className:o.default.items__container},t&&t.items&&t.items.map(function(e,t){var a=e.color,n=e.icon,l=e.description;return r.default.createElement("div",{className:o.default.feature__container,key:t},r.default.createElement("i",{className:"material-icons",style:{color:a}},n),r.default.createElement("p",{className:"copytext"},l))}))))};c.propTypes={params:(0,i.shape)({title:i.string,items:(0,i.arrayOf)((0,i.shape)({title:i.string,icon:i.string,color:i.string,description:i.string}))})},c.defaultProps={params:{items:[]}},t.default=c,e.exports=t.default},358:function(e,t){e.exports={content__container:"src-templates-Landing_v5-Features----Features-module---content__container---19MP-",features__container:"src-templates-Landing_v5-Features----Features-module---features__container---3XYOQ",items__container:"src-templates-Landing_v5-Features----Features-module---items__container---2gVxt",feature__container:"src-templates-Landing_v5-Features----Features-module---feature__container---2jbx2"}},258:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Features=void 0;var l=a(257),r=n(l);t.Features=r.default},259:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),i=a(2),s=a(14),o=a(23),c=a(258),u=a(359),d=n(u),m=function(e){var t=e.params,a=e.previewing,n=e.features;return r.default.createElement("div",{className:d.default.mainBlock__container},r.default.createElement("h1",{className:"small",dangerouslySetInnerHTML:{__html:t&&t.title}}),r.default.createElement("div",{className:d.default.mainBlock__grid},r.default.createElement("div",{className:d.default.mainBlock__image,style:t&&t.bgImage&&{backgroundImage:"url(/assets/"+t.bgImage+")"}}),r.default.createElement("div",{className:d.default.mainBlock__overlap}),r.default.createElement("div",{className:d.default.mainBlock__gridContent},r.default.createElement(c.Features,{params:n}),r.default.createElement(s.SignupForm,{buttonText:t&&t.buttonText,disabled:a,inputPlaceholder:t&&t.inputPlaceholder,splitted:["XS","MD","LG"]}),t&&t.previewMode?null:t&&r.default.createElement(o.TermsLink,null))))};m.propTypes={params:(0,i.shape)({title:i.string,description:i.string,inputPlaceholder:i.string,buttonText:i.string}),previewing:i.bool},m.defaultProps={params:{},previewing:!1},t.default=m,e.exports=t.default},359:function(e,t){e.exports={content__container:"src-templates-Landing_v5-MainBlock----MainBlock-module---content__container---1VaQP",mainBlock__container:"src-templates-Landing_v5-MainBlock----MainBlock-module---mainBlock__container---h-R1v",mainBlock__grid:"src-templates-Landing_v5-MainBlock----MainBlock-module---mainBlock__grid---2FAfU",mainBlock__image:"src-templates-Landing_v5-MainBlock----MainBlock-module---mainBlock__image---gi_HR",mainBlock__overlap:"src-templates-Landing_v5-MainBlock----MainBlock-module---mainBlock__overlap---3aIDC",mainBlock__gridContent:"src-templates-Landing_v5-MainBlock----MainBlock-module---mainBlock__gridContent---2VS0x"}},260:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.MainBlock=void 0;var l=a(259),r=n(l);t.MainBlock=r.default},261:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var l=a(1),r=n(l),i=a(260),s=a(55);t.default=function(e){var t=e.data,a=t.markdownRemark,n=a.frontmatter,l=n.features,o=n.mainBlock;n.extraBlock;return r.default.createElement("div",null,r.default.createElement(i.MainBlock,{params:o,features:l}),r.default.createElement(s.TrustBlock,null))};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-landing-v-5-index-js-38af764923fdd6a28452.js.map