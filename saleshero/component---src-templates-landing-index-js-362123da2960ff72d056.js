webpackJsonp([20595694195868],{72:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),l=a(r),u=n(2),i=n(98),o=a(i),s=n(42),c=function(e){var t=e.params;return l.default.createElement("div",{className:o.default.features__container},l.default.createElement("h2",{className:"small"},t&&t.title),l.default.createElement("div",{className:o.default.items__container},t&&t.items&&t.items.map(function(e,t){return(0,s.Skill)(e,t)})))};c.propTypes={params:(0,u.shape)({title:u.string,items:(0,u.arrayOf)((0,u.shape)({title:u.string,icon:u.string,color:u.string,description:u.string}))})},c.defaultProps={params:{title:"",items:[]}},t.default=c,e.exports=t.default},98:function(e,t){e.exports={content__container:"src-templates-Landing-Features----Features-module---content__container---1m7ls",features__container:"src-templates-Landing-Features----Features-module---features__container---1ZutN",items__container:"src-templates-Landing-Features----Features-module---items__container---Y41YC"}},73:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Features=void 0;var r=n(72),l=a(r);t.Features=l.default},74:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),l=a(r),u=n(2),i=n(25),o=n(54),s=n(99),c=a(s),d=function(e){var t=e.params;return l.default.createElement("div",{className:c.default.mainBlock__container},l.default.createElement("h1",null,t&&t.title),l.default.createElement("p",{className:"copytext-large "+c.default.mainBlock__description,dangerouslySetInnerHTML:{__html:t&&t.description}}),l.default.createElement(i.SignupForm,{buttonText:t&&t.buttonText,inputPlaceholder:t&&t.inputPlaceholder}),t&&t.previewMode?null:t&&l.default.createElement(o.TermsLink,null))};d.propTypes={params:(0,u.shape)({title:u.string,description:u.string,inputPlaceholder:u.string,buttonText:u.string}),previewing:u.bool},d.defaultProps={params:{},previewing:!1},t.default=d,e.exports=t.default},99:function(e,t){e.exports={content__container:"src-templates-Landing-MainBlock----MainBlock-module---content__container---2lGtP",mainBlock__container:"src-templates-Landing-MainBlock----MainBlock-module---mainBlock__container---1fqfT",mainBlock__content:"src-templates-Landing-MainBlock----MainBlock-module---mainBlock__content---Ex22i"}},75:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.MainBlock=void 0;var r=n(74),l=a(r);t.MainBlock=l.default},76:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var r=n(1),l=a(r),u=n(73),i=n(75),o=n(41),s=n(55),c=n(13);t.default=function(e){var t=e.data,n=t.markdownRemark,a=n.frontmatter,r=a.features,d=a.mainBlock,m=a.extraBlock;return l.default.createElement("div",null,l.default.createElement(i.MainBlock,{params:d}),l.default.createElement(c.Divider,null),l.default.createElement(s.TrustBlock,null),l.default.createElement(c.Divider,null),l.default.createElement(u.Features,{params:r}),l.default.createElement(o.ExtraBlock,{params:m,bg:"backgrounds/skills.png"}),l.default.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}))};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-landing-index-js-362123da2960ff72d056.js.map