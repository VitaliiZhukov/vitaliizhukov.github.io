webpackJsonp([0x5b62f2b0fff3],{82:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),i=a(2),s=a(115),c=n(s),o=function(e){var t=e.params;return r.default.createElement("div",{className:c.default.features__container},r.default.createElement("div",{className:c.default.items__content},r.default.createElement("h2",{className:"extra-small"},t&&t.title),r.default.createElement("div",{className:c.default.items__container},t&&t.items&&t.items.map(function(e,t){var a=e.color,n=e.icon,l=e.description;return r.default.createElement("div",{className:c.default.feature__container,key:t},r.default.createElement("i",{className:"material-icons",style:{color:a}},n),r.default.createElement("p",{className:"copytext"},l))}))))};o.propTypes={params:(0,i.shape)({title:i.string,items:(0,i.arrayOf)((0,i.shape)({title:i.string,icon:i.string,color:i.string,description:i.string}))})},o.defaultProps={params:{items:[]}},t.default=o,e.exports=t.default},115:function(e,t){e.exports={content__container:"src-templates-Landing_v3-Features----Features-module---content__container---1CVzo",features__container:"src-templates-Landing_v3-Features----Features-module---features__container---WMbsU",items__container:"src-templates-Landing_v3-Features----Features-module---items__container---25KFd",items__content:"src-templates-Landing_v3-Features----Features-module---items__content---1l3d0",feature__container:"src-templates-Landing_v3-Features----Features-module---feature__container---3FAFG"}},83:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Features=void 0;var l=a(82),r=n(l);t.Features=r.default},84:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),i=a(2),s=a(15),c=a(24),o=a(83),u=a(116),m=n(u),d=function(e){var t=e.params,a=e.previewing,n=e.features;return r.default.createElement("div",{className:m.default.mainBlock__container},r.default.createElement("div",{className:m.default.mainBlock__title},r.default.createElement("h1",{className:"small",dangerouslySetInnerHTML:{__html:t&&t.title}})),r.default.createElement("div",{className:m.default.mainBlock__grid},r.default.createElement("div",{className:m.default.mainBlock__featuresArea},r.default.createElement(o.Features,{params:n})),r.default.createElement("div",{className:m.default.mainBlock__imageContainer},r.default.createElement("div",{className:m.default.mainBlock__image,style:t&&t.bgImage&&{backgroundImage:"url(https://saleshero.ai/assets/"+t.bgImage+")"}}))),r.default.createElement(s.SignupForm,{buttonText:t&&t.buttonText,disabled:a,inputPlaceholder:t&&t.inputPlaceholder}),t&&t.previewMode?null:t&&r.default.createElement(c.TermsLink,null),r.default.createElement("div",{className:m.default.mainBlock__image,style:t&&t.bgImage&&{backgroundImage:"url(https://saleshero.ai/assets/"+t.bgImage+")"}}))};d.propTypes={params:(0,i.shape)({title:i.string,description:i.string,inputPlaceholder:i.string,buttonText:i.string}),previewing:i.bool},d.defaultProps={params:{},previewing:!1},t.default=d,e.exports=t.default},116:function(e,t){e.exports={content__container:"src-templates-Landing_v3-MainBlock----MainBlock-module---content__container---I-rMw",mainBlock__container:"src-templates-Landing_v3-MainBlock----MainBlock-module---mainBlock__container---2Fyd5",mainBlock__image:"src-templates-Landing_v3-MainBlock----MainBlock-module---mainBlock__image---3NHC6",mainBlock__imageContainer:"src-templates-Landing_v3-MainBlock----MainBlock-module---mainBlock__imageContainer---1FQSq",mainBlock__title:"src-templates-Landing_v3-MainBlock----MainBlock-module---mainBlock__title---2u6wP",mainBlock__grid:"src-templates-Landing_v3-MainBlock----MainBlock-module---mainBlock__grid---1xJDL",mainBlock__featuresArea:"src-templates-Landing_v3-MainBlock----MainBlock-module---mainBlock__featuresArea---1rWPf"}},85:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.MainBlock=void 0;var l=a(84),r=n(l);t.MainBlock=r.default},86:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var l=a(1),r=n(l),i=a(85),s=a(19),c=a(55),o=a(9);t.default=function(e){var t=e.data,a=t.markdownRemark,n=a.frontmatter,l=n.features,u=n.mainBlock,m=n.extraBlock;return r.default.createElement("div",null,r.default.createElement(i.MainBlock,{params:u,features:l}),r.default.createElement(o.Divider,null),r.default.createElement(c.TrustBlock,null),r.default.createElement(s.ExtraBlock,{params:m}))};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-landing-v-3-index-js-d613a6e82cb990fabccd.js.map