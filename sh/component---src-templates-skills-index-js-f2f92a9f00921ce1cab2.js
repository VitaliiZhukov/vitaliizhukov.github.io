webpackJsonp([0x91bc9dfe7945],{87:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=l(1),r=a(s),n=l(2);l(125);var i=function(e){var t=e.params;return r.default.createElement("div",{className:"securityBlock__container"},r.default.createElement("div",{className:"securityBlock__descriptionContainer"},r.default.createElement("h2",null,t.title),r.default.createElement("p",{className:"securityBlock__description copytext-large"},t.description)),r.default.createElement("div",{className:"securityBlock__text"},t.text.split("<br/>").map(function(e,t){return r.default.createElement("p",{className:"copytext",key:t,dangerouslySetInnerHTML:{__html:e}})})))};i.propTypes={params:(0,n.shape)({title:n.string,description:n.string,text:n.string})},t.default=i,e.exports=t.default},125:function(e,t){},88:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.SecurityBlock=void 0;var s=l(87),r=a(s);t.SecurityBlock=r.default},89:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=l(1),r=a(s),n=l(2),i=l(20),u=a(i),c=l(30);l(126);var o=function(e,t){var l=e.skills,a=e.image,s=e.isColumn,n=e.reversed,i=(0,u.default)({skillset__content:!0,"skillset__content--columns":s,"skillset__content--rows":!s,"skillset__content--reversed":n});return r.default.createElement("div",{className:"skillset__container",key:t},r.default.createElement("div",{className:i},r.default.createElement("div",{className:"skillset__image"},r.default.createElement("img",{src:"https://saleshero.ai/assets/"+a})),r.default.createElement("div",{className:"skillset__items"},l.map(function(e,t){return(0,c.Skill)(e,t)}))))},d=function(e){var t=e.params;return r.default.createElement("div",{className:"skillsList__container"},t.map(function(e,t){return o(e,t)}))};d.propTypes={skills:(0,n.arrayOf)((0,n.shape)({title:n.string,description:n.string,action:n.string,actionUrl:n.string,image:n.string}))},d.defaultProps={skills:[]},t.default=d,e.exports=t.default},126:function(e,t){},90:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.SkillsList=void 0;var s=l(89),r=a(s);t.SkillsList=r.default},91:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=l(1),r=a(s),n=l(2);l(127);var i=function(e){var t=e.params;return r.default.createElement("div",{className:"title-block__container"},r.default.createElement("img",{src:"https://saleshero.ai/assets/backgrounds/skills-title.png"}),r.default.createElement("div",{className:"title-block__content"},r.default.createElement("h1",null,t.title),t.description.split("<br/>").map(function(e,t){return r.default.createElement("p",{className:"copytext",key:t,dangerouslySetInnerHTML:{__html:e}})})))};i.propTypes={params:(0,n.shape)({title:n.string,description:n.string,inputPlaceholder:n.string,buttonText:n.string})},t.default=i,e.exports=t.default},127:function(e,t){},92:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.TitleBlock=void 0;var s=l(91),r=a(s);t.TitleBlock=r.default},93:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var s=l(1),r=a(s),n=l(92),i=l(90),u=l(88),c=l(19);l(128),t.default=function(e){var t=e.data,l=t.markdownRemark,a=l.frontmatter,s=a.titleBlock,o=a.skillsets,d=a.extraBlock,f=a.security;return r.default.createElement("div",{className:"skills__container"},r.default.createElement(n.TitleBlock,{params:s}),r.default.createElement(i.SkillsList,{params:o}),r.default.createElement(u.SecurityBlock,{params:f}),r.default.createElement(c.ExtraBlock,{params:d,bg:"backgrounds/skills.png"}))};t.query="** extracted graphql fragment **"},128:function(e,t){}});
//# sourceMappingURL=component---src-templates-skills-index-js-f2f92a9f00921ce1cab2.js.map