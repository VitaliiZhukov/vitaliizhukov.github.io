webpackJsonp([0x6f4348dd71fa],{242:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),i=a(2),o=a(353),c=n(o),s=a(30),u=function(e){var t=e.params;return r.default.createElement("div",{className:c.default.features__container},r.default.createElement("h2",{className:"small"},t.title),r.default.createElement("div",{className:c.default.items__container},t.items.map(function(e,t){return(0,s.Skill)(e,t)})))};u.propTypes={params:(0,i.shape)({title:i.string,items:(0,i.arrayOf)((0,i.shape)({title:i.string,icon:i.string,color:i.string,description:i.string}))})},u.defaultProps={params:{items:[]}},t.default=u,e.exports=t.default},353:function(e,t){e.exports={content__container:"src-templates-Landing_v1-Features----Features-module---content__container---2sw_o",features__container:"src-templates-Landing_v1-Features----Features-module---features__container---1xvvt",items__container:"src-templates-Landing_v1-Features----Features-module---items__container---riny5"}},243:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Features=void 0;var l=a(242),r=n(l);t.Features=r.default},244:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),i=a(2),o=a(15),c=a(24),s=a(354),u=n(s),d=function(e){var t=e.params,a=e.previewing;return r.default.createElement("div",{className:u.default.mainBlock__container},r.default.createElement("div",{className:u.default.mainBlock__title,style:{backgroundImage:"url(https://saleshero.ai/assets/"+t.bgImage+")"}},r.default.createElement("div",{className:u.default.mainBlock__content},r.default.createElement("h1",{dangerouslySetInnerHTML:{__html:t&&t.title}}))),r.default.createElement("div",{className:u.default.mainBlock__content},r.default.createElement("p",{className:"copytext-large "+u.default.mainBlock__description,dangerouslySetInnerHTML:{__html:t.description}}),r.default.createElement(o.SignupForm,{buttonText:t.buttonText,disabled:a,inputPlaceholder:t.inputPlaceholder}),t&&t.previewMode?null:t&&r.default.createElement(c.TermsLink,null)))};d.propTypes={params:(0,i.shape)({title:i.string,description:i.string,inputPlaceholder:i.string,buttonText:i.string}),previewing:i.bool},d.defaultProps={params:{},previewing:!1},t.default=d,e.exports=t.default},354:function(e,t){e.exports={content__container:"src-templates-Landing_v1-MainBlock----MainBlock-module---content__container---g9rg-",mainBlock__content:"src-templates-Landing_v1-MainBlock----MainBlock-module---mainBlock__content---IbCbN",mainBlock__title:"src-templates-Landing_v1-MainBlock----MainBlock-module---mainBlock__title---27nac",mainBlock__container:"src-templates-Landing_v1-MainBlock----MainBlock-module---mainBlock__container---2yboT"}},245:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.MainBlock=void 0;var l=a(244),r=n(l);t.MainBlock=r.default},246:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var l=a(1),r=n(l),i=a(243),o=a(245),c=a(19),s=a(56),u=a(9),d=a(355),_=n(d);t.default=function(e){var t=e.data,a=t.markdownRemark,n=a.frontmatter,l=n.features,d=n.mainBlock,m=n.extraBlock;return r.default.createElement("div",{className:_.default.landing__container},r.default.createElement(o.MainBlock,{params:d}),r.default.createElement(u.Divider,null),r.default.createElement(s.TrustBlock,null),r.default.createElement(i.Features,{params:l}),r.default.createElement(c.ExtraBlock,{params:m}))};t.query="** extracted graphql fragment **"},355:function(e,t){e.exports={content__container:"src-templates-Landing_v1----index-module---content__container---3zR-5",landing__container:"src-templates-Landing_v1----index-module---landing__container---2L-kg"}}});
//# sourceMappingURL=component---src-templates-landing-v-1-index-js-eb4cd4273f364a5915e5.js.map