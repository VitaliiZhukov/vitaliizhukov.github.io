webpackJsonp([0x78c71f1f0deb],{72:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),l=r(n),s=a(2),u=a(100),o=r(u),c=function(e){var t=e.params;return l.default.createElement("div",{className:o.default.trustBlock__wrapper},l.default.createElement("div",{className:o.default.trustBlock__container},l.default.createElement("h2",{className:"extra-small"},t.title),l.default.createElement("div",{className:o.default.trustBlock__items},l.default.createElement("h2",{className:"extra-small"},t.title),t.items.map(function(e,t){return l.default.createElement("div",{key:t,style:{backgroundImage:"url(http://saleshero.ai/assets/"+e.image+")"}})}))))};c.propTypes={params:(0,s.shape)({title:s.string,items:(0,s.arrayOf)(s.object)})},c.defaultProps={params:{title:"Trusted by",items:[{image:"logos/datastax.jpg"},{image:"logos/newyorklife.jpg"},{image:"logos/gradle.png"},{image:"logos/instart.png"}]}},t.default=c,e.exports=t.default},100:function(e,t){e.exports={content__container:"src-components-LandingTrustBlock----TrustBlock-module---content__container---2512q",trustBlock__container:"src-components-LandingTrustBlock----TrustBlock-module---trustBlock__container---3_KYq",trustBlock__wrapper:"src-components-LandingTrustBlock----TrustBlock-module---trustBlock__wrapper---1MfG0",trustBlock__items:"src-components-LandingTrustBlock----TrustBlock-module---trustBlock__items---388m-"}},73:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.TrustBlock=void 0;var n=a(72),l=r(n);t.TrustBlock=l.default},231:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),l=r(n),s=a(2),u=a(331),o=r(u),c=function(e){var t=e.params;return l.default.createElement("div",{className:o.default.features__container},l.default.createElement("div",{className:o.default.items__content},l.default.createElement("h2",{className:"extra-small"},t.title),l.default.createElement("div",{className:o.default.items__container},t.items.map(function(e,t){var a=e.color,r=e.icon,n=e.description;return l.default.createElement("div",{className:o.default.feature__container,key:t,style:{gridArea:"c"+t}},l.default.createElement("i",{className:"material-icons",style:{color:a}},r),l.default.createElement("p",{className:"copytext"},n))}))))};c.propTypes={params:(0,s.shape)({title:s.string,items:(0,s.arrayOf)((0,s.shape)({title:s.string,icon:s.string,color:s.string,description:s.string}))})},c.defaultProps={params:{items:[]}},t.default=c,e.exports=t.default},331:function(e,t){e.exports={content__container:"src-templates-Landing_v4-Features----Features-module---content__container---3yjGR",features__container:"src-templates-Landing_v4-Features----Features-module---features__container---3oEzs",items__container:"src-templates-Landing_v4-Features----Features-module---items__container---XGfWV",items__content:"src-templates-Landing_v4-Features----Features-module---items__content---Mrdc9",feature__container:"src-templates-Landing_v4-Features----Features-module---feature__container---3cyPr"}},128:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Features=void 0;var n=a(231),l=r(n);t.Features=l.default},232:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),l=r(n),s=a(2),u=a(21),o=a(27),c=a(128),i=a(332),d=r(i),m=function(e){var t=e.params,a=e.features;return l.default.createElement("div",{className:d.default.mainBlock__container},l.default.createElement("h1",{className:"small",dangerouslySetInnerHTML:{__html:t&&t.title}}),l.default.createElement(c.Features,{params:a}),l.default.createElement("p",{className:"copytext-large "+d.default.mainBlock__description,dangerouslySetInnerHTML:{__html:t&&t.description}}),l.default.createElement(u.SignupForm,{buttonText:t&&t.buttonText,inputPlaceholder:t&&t.inputPlaceholder}),t&&t.previewMode?null:t&&l.default.createElement(o.TermsLink,null))};m.propTypes={params:(0,s.shape)({title:s.string,description:s.string,inputPlaceholder:s.string,buttonText:s.string}),previewing:s.bool},m.defaultProps={params:{},previewing:!1},t.default=m,e.exports=t.default},332:function(e,t){e.exports={content__container:"src-templates-Landing_v4-MainBlock----MainBlock-module---content__container---1pC1t",mainBlock__container:"src-templates-Landing_v4-MainBlock----MainBlock-module---mainBlock__container---3iUF2"}},233:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.MainBlock=void 0;var n=a(232),l=r(n);t.MainBlock=l.default},234:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=a(1),l=r(n),s=(a(128),a(233)),u=a(24),o=a(73),c=a(12);t.default=function(e){var t=e.data,a=t.markdownRemark,r=a.frontmatter,n=r.features,i=r.mainBlock,d=r.extraBlock;return l.default.createElement("div",null,l.default.createElement(s.MainBlock,{params:i,features:n}),l.default.createElement(c.Divider,null),l.default.createElement(o.TrustBlock,null),l.default.createElement(u.ExtraBlock,{params:d}),l.default.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}}))};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-landing-v-4-index-js-929023a59f6b8a8ca3f2.js.map