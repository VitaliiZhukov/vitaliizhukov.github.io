webpackJsonp([0x91bc9dfe7945],{69:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=l(1),s=a(r),n=l(8),i=l(22);l(109);var u=function(e){var t=e.params,l=e.bg,a=l&&{backgroundImage:"url(http://saleshero.ai/assets/"+l+")"};return s.default.createElement("div",{className:"extra-block__container",style:a},s.default.createElement("div",{className:"extra-block__content"},s.default.createElement("h2",null,t.title),s.default.createElement("p",{className:"copytext extra-block__description"},t.description),s.default.createElement(i.SignupForm,{buttonText:t.buttonText,inputPlaceholder:t.inputPlaceholder})))};u.propTypes={params:(0,n.shape)({title:n.string,description:n.string,action:n.string}),bg:n.string},t.default=u,e.exports=t.default},109:function(e,t){},70:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ExtraBlock=void 0;var r=l(69),s=a(r);t.ExtraBlock=s.default},71:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=l(1),s=a(r);l(8),l(22);l(110);var n=function(e,t){var l=e.title,a=e.icon,r=e.color,n=e.description,i={gridArea:"c"+t};return s.default.createElement("div",{className:"skill__container",key:t,style:i},s.default.createElement("div",{className:"skill__header"},s.default.createElement("i",{className:"material-icons",style:{color:r}},a),s.default.createElement("h2",{className:"small"},l)),s.default.createElement("p",{className:"copytext-small"},n))};n.propTypes={},t.default=n,e.exports=t.default},110:function(e,t){},72:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Skill=void 0;var r=l(71),s=a(r);t.Skill=s.default},222:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=l(1),s=a(r),n=l(8);l(370);var i=function(e){var t=e.params;return s.default.createElement("div",{className:"securityBlock__container"},s.default.createElement("div",{className:"securityBlock__descriptionContainer"},s.default.createElement("h2",null,t.title),s.default.createElement("p",{className:"securityBlock__description copytext-large"},t.description)),s.default.createElement("div",{className:"securityBlock__text"},t.text.split("<br/>").map(function(e,t){return s.default.createElement("p",{className:"copytext",key:t,dangerouslySetInnerHTML:{__html:e}})})))};i.propTypes={params:(0,n.shape)({title:n.string,description:n.string,text:n.string})},t.default=i,e.exports=t.default},370:function(e,t){},223:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.SecurityBlock=void 0;var r=l(222),s=a(r);t.SecurityBlock=s.default},224:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=l(1),s=a(r),n=l(8),i=l(25),u=a(i),c=(l(17),l(72));l(371);var o=function(e,t){var l=e.skills,a=e.image,r=e.isColumn,n=e.reversed,i=(0,u.default)({skillset__content:!0,"skillset__content--columns":r,"skillset__content--rows":!r,"skillset__content--reversed":n});return s.default.createElement("div",{className:"skillset__container",key:t},s.default.createElement("div",{className:i},s.default.createElement("div",{className:"skillset__image"},s.default.createElement("img",{src:"http://saleshero.ai/assets/"+a})),s.default.createElement("div",{className:"skillset__items"},l.map(function(e,t){return(0,c.Skill)(e,t)}))))},d=function(e){var t=e.params;return s.default.createElement("div",{className:"skillsList__container"},t.map(function(e,t){return o(e,t)}))};d.propTypes={items:(0,n.arrayOf)((0,n.shape)({title:n.string,description:n.string,action:n.string,actionUrl:n.string,image:n.string}))},d.defaultProps={items:[]},t.default=d,e.exports=t.default},371:function(e,t){},225:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.SkillsList=void 0;var r=l(224),s=a(r);t.SkillsList=s.default},226:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=l(1),s=a(r),n=l(8);l(372);var i=function(e){var t=e.params;return s.default.createElement("div",{className:"title-block__container"},s.default.createElement("img",{src:"http://saleshero.ai/assets/backgrounds/skills-title.png"}),s.default.createElement("div",{className:"title-block__content"},s.default.createElement("h1",null,t.title),t.description.split("<br/>").map(function(e,t){return s.default.createElement("p",{className:"copytext",key:t,dangerouslySetInnerHTML:{__html:e}})})))};i.propTypes={params:(0,n.shape)({title:n.string,description:n.string,inputPlaceholder:n.string,buttonText:n.string})},t.default=i,e.exports=t.default},372:function(e,t){},227:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.TitleBlock=void 0;var r=l(226),s=a(r);t.TitleBlock=s.default},228:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var r=l(1),s=a(r),n=l(19),i=(a(n),l(227)),u=l(225),c=l(223),o=l(70);l(373),t.default=function(e){var t=e.data,l=t.markdownRemark,a=l.frontmatter,r=(a.title,a.titleBlock),n=a.skillsets,d=a.extraBlock,f=a.security;return s.default.createElement("div",{className:"skills__container"},s.default.createElement(i.TitleBlock,{params:r}),s.default.createElement(u.SkillsList,{params:n}),s.default.createElement(c.SecurityBlock,{params:f}),s.default.createElement(o.ExtraBlock,{params:d,bg:"backgrounds/skills.png"}))};t.query="** extracted graphql fragment **"},373:function(e,t){}});
//# sourceMappingURL=component---src-templates-skills-index-js-f2706ad509c34c5ca7a2.js.map