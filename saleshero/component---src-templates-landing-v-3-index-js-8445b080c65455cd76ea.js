webpackJsonp([0x5b62f2b0fff3],{44:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),s=a(2),i=a(51),o=n(i),c=function(e){var t=e.params;return r.default.createElement("div",{className:o.default.trustBlock__wrapper},r.default.createElement("div",{className:o.default.trustBlock__container},r.default.createElement("h2",{className:"extra-small"},t.title),r.default.createElement("div",{className:o.default.trustBlock__items},r.default.createElement("h2",{className:"extra-small"},t.title),t.items.map(function(e,t){return r.default.createElement("img",{src:"https://saleshero.ai/assets/"+e.image,key:t})}))))};c.propTypes={params:(0,s.shape)({title:s.string,items:(0,s.arrayOf)(s.object)})},c.defaultProps={params:{title:"Trusted by",items:[{image:"logos/landing/datastax.png"},{image:"logos/landing/newyorklife.png"},{image:"logos/landing/gradle.png"},{image:"logos/landing/instartlogic.png"}]}},t.default=c,e.exports=t.default},51:function(e,t){e.exports={content__container:"src-components-LandingTrustBlock----TrustBlock-module---content__container---2512q",trustBlock__container:"src-components-LandingTrustBlock----TrustBlock-module---trustBlock__container---3_KYq",trustBlock__wrapper:"src-components-LandingTrustBlock----TrustBlock-module---trustBlock__wrapper---1MfG0",trustBlock__items:"src-components-LandingTrustBlock----TrustBlock-module---trustBlock__items---388m-"}},45:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.TrustBlock=void 0;var l=a(44),r=n(l);t.TrustBlock=r.default},84:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),s=a(2),i=a(117),o=n(i),c=function(e){var t=e.params;return r.default.createElement("div",{className:o.default.features__container},r.default.createElement("div",{className:o.default.items__content},r.default.createElement("h2",{className:"extra-small"},t&&t.title),r.default.createElement("div",{className:o.default.items__container},t&&t.items&&t.items.map(function(e,t){var a=e.color,n=e.icon,l=e.description;return r.default.createElement("div",{className:o.default.feature__container,key:t},r.default.createElement("i",{className:"material-icons",style:{color:a}},n),r.default.createElement("p",{className:"copytext"},l))}))))};c.propTypes={params:(0,s.shape)({title:s.string,items:(0,s.arrayOf)((0,s.shape)({title:s.string,icon:s.string,color:s.string,description:s.string}))})},c.defaultProps={params:{items:[]}},t.default=c,e.exports=t.default},117:function(e,t){e.exports={content__container:"src-templates-Landing_v3-Features----Features-module---content__container---1CVzo",features__container:"src-templates-Landing_v3-Features----Features-module---features__container---WMbsU",items__container:"src-templates-Landing_v3-Features----Features-module---items__container---25KFd",items__content:"src-templates-Landing_v3-Features----Features-module---items__content---1l3d0",feature__container:"src-templates-Landing_v3-Features----Features-module---feature__container---3FAFG"}},85:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Features=void 0;var l=a(84),r=n(l);t.Features=r.default},86:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),s=a(2),i=a(19),o=a(25),c=a(85),u=a(118),m=n(u),d=function(e){var t=e.params,a=e.previewing,n=e.features;return r.default.createElement("div",{className:m.default.mainBlock__container},r.default.createElement("div",{className:m.default.mainBlock__title},r.default.createElement("h1",{className:"small",dangerouslySetInnerHTML:{__html:t&&t.title}})),r.default.createElement("div",{className:m.default.mainBlock__grid},r.default.createElement("div",{className:m.default.mainBlock__featuresArea},r.default.createElement(c.Features,{params:n})),r.default.createElement("div",{className:m.default.mainBlock__imageContainer},r.default.createElement("div",{className:m.default.mainBlock__image,style:t&&t.bgImage&&{backgroundImage:"url(https://saleshero.ai/assets/"+t.bgImage+")"}}))),r.default.createElement(i.SignupForm,{buttonText:t&&t.buttonText,disabled:a,inputPlaceholder:t&&t.inputPlaceholder}),t&&t.previewMode?null:t&&r.default.createElement(o.TermsLink,null),r.default.createElement("div",{className:m.default.mainBlock__image,style:t&&t.bgImage&&{backgroundImage:"url(https://saleshero.ai/assets/"+t.bgImage+")"}}))};d.propTypes={params:(0,s.shape)({title:s.string,description:s.string,inputPlaceholder:s.string,buttonText:s.string}),previewing:s.bool},d.defaultProps={params:{},previewing:!1},t.default=d,e.exports=t.default},118:function(e,t){e.exports={content__container:"src-templates-Landing_v3-MainBlock----MainBlock-module---content__container---I-rMw",mainBlock__container:"src-templates-Landing_v3-MainBlock----MainBlock-module---mainBlock__container---2Fyd5",mainBlock__image:"src-templates-Landing_v3-MainBlock----MainBlock-module---mainBlock__image---3NHC6",mainBlock__imageContainer:"src-templates-Landing_v3-MainBlock----MainBlock-module---mainBlock__imageContainer---1FQSq",mainBlock__title:"src-templates-Landing_v3-MainBlock----MainBlock-module---mainBlock__title---2u6wP",mainBlock__grid:"src-templates-Landing_v3-MainBlock----MainBlock-module---mainBlock__grid---1xJDL",mainBlock__featuresArea:"src-templates-Landing_v3-MainBlock----MainBlock-module---mainBlock__featuresArea---1rWPf"}},87:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.MainBlock=void 0;var l=a(86),r=n(l);t.MainBlock=r.default},88:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var l=a(1),r=n(l),s=a(87),i=a(18),o=a(45),c=a(9);t.default=function(e){var t=e.data,a=t.markdownRemark,n=a.frontmatter,l=n.features,u=n.mainBlock,m=n.extraBlock;return r.default.createElement("div",null,r.default.createElement(s.MainBlock,{params:u,features:l}),r.default.createElement(c.Divider,null),r.default.createElement(o.TrustBlock,null),r.default.createElement(i.ExtraBlock,{params:m}))};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-landing-v-3-index-js-8445b080c65455cd76ea.js.map