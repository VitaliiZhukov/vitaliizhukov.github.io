webpackJsonp([0x91bc9dfe7945],{"./node_modules/classnames/index.js":function(e,t,s){var n,l;!function(){"use strict";function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n))e.push(s.apply(null,n));else if("object"===l)for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=s:(n=[],l=function(){return s}.apply(t,n),!(void 0!==l&&(e.exports=l)))}()},"./node_modules/hoist-non-react-statics/index.js":function(e,t){"use strict";var s={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l=Object.defineProperty,i=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,a=u&&u(Object);e.exports=function e(t,c,d){if("string"!=typeof c){if(a){var M=u(c);M&&M!==a&&e(t,M,d)}var p=i(c);o&&(p=p.concat(o(c)));for(var g=0;g<p.length;++g){var j=p[g];if(!(s[j]||n[j]||d&&d[j])){var m=r(c,j);try{l(t,j,m)}catch(e){}}}return t}return t}},"./node_modules/react-proptypes/index.js":function(e,t,s){e.exports=s("./node_modules/prop-types/index.js")},"./src/components/Icon/index.js":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=s("./node_modules/react/react.js"),i=n(l),o=s("./node_modules/prop-types/index.js"),r=function(e){if(e)try{var t=s(1)("./"+e+".svg");return i.default.createElement("img",{src:t,alt:e})}catch(e){console.log(e)}return null},u=function(e){var t=e.image;return t?i.default.createElement("div",null,r(t)):null};u.propTypes={image:o.string},u.defaultProps={image:""},t.default=u,e.exports=t.default},1:function(e,t,s){function n(e){return s(l(e))}function l(e){return i[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var i={"./linkedin.svg":"./src/components/Icon/linkedin.svg","./logo.svg":"./src/components/Icon/logo.svg","./robin.svg":"./src/components/Icon/robin.svg"};n.keys=function(){return Object.keys(i)},n.resolve=l,e.exports=n,n.id=1},"./src/components/Icon/linkedin.svg":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxNzkyIDE3OTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM2NSAxNDE0aDIzMXYtNjk0aC0yMzF2Njk0em0yNDYtOTA4cS0xLTUyLTM2LTg2dC05My0zNC05NC41IDM0LTM2LjUgODZxMCA1MSAzNS41IDg1LjV0OTIuNSAzNC41aDFxNTkgMCA5NS0zNC41dDM2LTg1LjV6bTU4NSA5MDhoMjMxdi0zOThxMC0xNTQtNzMtMjMzdC0xOTMtNzlxLTEzNiAwLTIwOSAxMTdoMnYtMTAxaC0yMzFxMyA2NiAwIDY5NGgyMzF2LTM4OHEwLTM4IDctNTYgMTUtMzUgNDUtNTkuNXQ3NC0yNC41cTExNiAwIDExNiAxNTd2Mzcxem00NjgtOTk4djk2MHEwIDExOS04NC41IDIwMy41dC0yMDMuNSA4NC41aC05NjBxLTExOSAwLTIwMy41LTg0LjV0LTg0LjUtMjAzLjV2LTk2MHEwLTExOSA4NC41LTIwMy41dDIwMy41LTg0LjVoOTYwcTExOSAwIDIwMy41IDg0LjV0ODQuNSAyMDMuNXoiPjwvcGF0aD48L3N2Zz4="},"./src/components/Icon/logo.svg":function(e,t){e.exports="data:image/svg+xml;base64,ICAgIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAxNTggMjIiPgogICAgICAgIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT4KICAgICAgICA8cGF0aCBkPSJNMTAuNyA2LjNDMTAuNSA1LjQgOS44IDMuOSA3LjYgMy45Yy0xLjYgMC0yLjcgMS0yLjcgMi4yIDAgMC45IDAuNiAxLjcgMS44IDEuOWwyLjQgMC41YzMuMSAwLjYgNC44IDIuNiA0LjggNSAwIDIuNi0yLjIgNS4zLTYuMSA1LjMgLTQuNSAwLTYuNS0yLjktNi44LTUuM2wzLjEtMC44YzAuMSAxLjcgMS4zIDMuMiAzLjcgMy4yIDEuOCAwIDIuOC0wLjkgMi44LTIuMSAwLTEtMC43LTEuOC0yLjEtMmwtMi40LTAuNWMtMi43LTAuNi00LjUtMi4zLTQuNS00LjlDMS42IDMuMyA0LjQgMSA3LjYgMWM0LjEgMCA1LjcgMi41IDYuMSA0LjRMMTAuNyA2LjN6IiAvPjxwYXRoIGQ9Ik0yNy4xIDE0LjVoLTYuOWwtMS40IDMuOWgtMy41bDYuNS0xN2gzLjhsNi41IDE3aC0zLjZMMjcuMSAxNC41ek0yMS4zIDExLjVoNC43bC0yLjQtNi40TDIxLjMgMTEuNXoiIC8+PHBhdGggZD0iTTM0LjcgMTguNFYxLjRoMy4zdjEzLjloNy42djMuMkgzNC43eiIgLz48cGF0aCBkPSJNNDguMyAxOC40VjEuNGgxMC43djMuMWgtNy4zdjMuOWg2Ljd2M2gtNi42djMuOWg3LjN2My4xSDQ4LjN6IiAvPjxwYXRoIGQ9Ik03MS4yIDYuM0M3MSA1LjQgNzAuMyAzLjkgNjguMSAzLjljLTEuNiAwLTIuNyAxLTIuNyAyLjIgMCAwLjkgMC42IDEuNyAxLjggMS45bDIuNCAwLjVjMy4xIDAuNiA0LjggMi42IDQuOCA1IDAgMi42LTIuMiA1LjMtNi4xIDUuMyAtNC41IDAtNi41LTIuOS02LjgtNS4zbDMuMS0wLjhjMC4xIDEuNyAxLjMgMy4yIDMuNyAzLjIgMS44IDAgMi44LTAuOSAyLjgtMi4xIDAtMS0wLjctMS44LTIuMS0ybC0yLjQtMC41Yy0yLjctMC42LTQuNS0yLjMtNC41LTQuOUM2Mi4yIDMuMyA2NC45IDEgNjguMSAxYzQuMSAwIDUuNyAyLjUgNi4xIDQuNEw3MS4yIDYuM3oiIC8+PHBhdGggZD0iTTg4LjYgMTguNHYtNy4xaC03LjR2Ny4xaC0zLjNWMS40aDMuM3Y2LjhoNy40VjEuNGgzLjN2MTdIODguNnoiIC8+PHBhdGggZD0iTTk2LjMgMTguNFYxLjRoMTAuN3YzLjFoLTcuM3YzLjloNi43djNoLTYuNnYzLjloNy4zdjMuMUg5Ni4zeiIgLz48cGF0aCBkPSJNMTE1LjkgMTEuOGgtMS43djYuNmgtMy4zVjEuNGg2LjZjMy4zIDAgNS40IDIuMyA1LjQgNS4yIDAgMi40LTEuNCA0LjItMy42IDQuOGwzLjYgN2gtMy43TDExNS45IDExLjh6TTExNi44IDljMS43IDAgMi43LTEgMi43LTIuNCAwLTEuNC0xLTIuNC0yLjctMi40aC0yLjd2NC43SDExNi44eiIgLz48cGF0aCBkPSJNMTMzLjkgMWM0LjYgMCA4LjggMy40IDguOCA4LjkgMCA1LjUtNC4xIDguOS04LjggOC45IC00LjYgMC04LjctMy40LTguNy04LjlDMTI1LjIgNC40IDEyOS4zIDEgMTMzLjkgMXpNMTMzLjkgMTUuNWMyLjYgMCA1LjMtMS44IDUuMy01LjdzLTIuNy01LjctNS4zLTUuN2MtMi42IDAtNS4zIDEuOC01LjMgNS43UzEzMS4zIDE1LjUgMTMzLjkgMTUuNXoiIC8+PHBhdGggZD0iTTE0NC4yIDIxdi0yLjZoMTIuM1YyMUgxNDQuMnoiIC8+CiAgICA8L3N2Zz4="},"./src/components/Icon/robin.svg":function(e,t,s){e.exports=s.p+"static/robin.3c567070.svg"},"./src/components/SignupForm/SignupForm.js":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=s("./node_modules/react/react.js"),i=n(l),o=s("./node_modules/react-proptypes/index.js"),r=s("./src/ui/index.js");s("./src/components/SignupForm/SignupForm.scss");var u=function(e){var t=e.buttonText,s=e.inputPlaceholder,n=e.hasAutofocus;return i.default.createElement("form",{className:"signup-form__container",action:"https://app.saleshero.ai/api/v2/user",method:"post"},i.default.createElement(r.Input,{placeholder:s,name:"email",type:"email",required:!0,autoFocus:n}),i.default.createElement(r.Button,{type:"submit"},t))};u.propTypes={buttonText:o.string,inputPlaceholder:o.string,hasAutofocus:o.bool},u.defaultProps={buttonText:"Free Trial",inputPlaceholder:"Input your Work Gmail",hasAutofocus:!1},t.default=u,e.exports=t.default},"./src/components/SignupForm/SignupForm.scss":function(e,t){},"./src/components/SignupForm/index.js":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.SignupForm=void 0;var l=s("./src/components/SignupForm/SignupForm.js"),i=n(l);t.SignupForm=i.default},"./src/templates/Skills/ExtraBlock/ExtraBlock.js":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=s("./node_modules/react/react.js"),i=n(l),o=s("./node_modules/react-proptypes/index.js"),r=s("./src/components/SignupForm/index.js");s("./src/templates/Skills/ExtraBlock/ExtraBlock.scss");var u=function(e){var t=e.params;return i.default.createElement("div",{className:"extra-block__container"},i.default.createElement("div",{className:"extra-block__content"},i.default.createElement("h2",null,t.title),i.default.createElement("p",{className:"subline2"},t.description),i.default.createElement(r.SignupForm,null)))};u.propTypes={params:(0,o.shape)({title:o.string,description:o.string,action:o.string})},t.default=u,e.exports=t.default},"./src/templates/Skills/ExtraBlock/ExtraBlock.scss":function(e,t){},"./src/templates/Skills/ExtraBlock/index.js":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ExtraBlock=void 0;var l=s("./src/templates/Skills/ExtraBlock/ExtraBlock.js"),i=n(l);t.ExtraBlock=i.default},"./src/templates/Skills/SkillsList/SkillsList.js":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=s("./node_modules/react/react.js"),i=n(l),o=s("./node_modules/react-proptypes/index.js");s("./src/templates/Skills/SkillsList/SkillsList.scss");var r=function(e,t){var s=e.title,n=e.description,l=(e.action,e.image,e.linkContent),o=e.linkUrl;return i.default.createElement("div",{className:"skill__container"},i.default.createElement("div",{className:"skill__content",style:{order:t%2===0?0:1}},i.default.createElement("h2",null,s),i.default.createElement("p",{className:"subline2"},n),l&&i.default.createElement("a",{href:o,className:"button-text-large"},l)),i.default.createElement("div",{className:"skill__image",style:{order:t%2===0?1:0}},i.default.createElement("div",null)))},u=function(e){var t=e.params,s=(t.length,[]);return t.forEach(function(e,n){if(n%2===1){var l=i.default.createElement("div",{className:"pair__container",key:n},r(t[n-1],n-1),r(e,n));s.push(l)}}),i.default.createElement("div",{className:"skills-list__container"},s)};u.propTypes={items:(0,o.arrayOf)((0,o.shape)({title:o.string,description:o.string,action:o.string,actionUrl:o.string,image:o.string}))},u.defaultProps={items:[]},t.default=u,e.exports=t.default},"./src/templates/Skills/SkillsList/SkillsList.scss":function(e,t){},"./src/templates/Skills/SkillsList/index.js":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.SkillsList=void 0;var l=s("./src/templates/Skills/SkillsList/SkillsList.js"),i=n(l);t.SkillsList=i.default},"./src/templates/Skills/TitleBlock/TitleBlock.js":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=s("./node_modules/react/react.js"),i=n(l),o=s("./node_modules/react-proptypes/index.js"),r=s("./src/components/Icon/index.js");n(r);s("./src/templates/Skills/TitleBlock/TitleBlock.scss");var u=function(e){var t=e.params;return i.default.createElement("div",{className:"title-block__container"},i.default.createElement("div",{className:"title-block__content"},i.default.createElement("h1",null,t.title),i.default.createElement("p",{className:"subline2"},t.description)))};u.propTypes={params:(0,o.shape)({title:o.string,description:o.string,inputPlaceholder:o.string,buttonText:o.string})},t.default=u,e.exports=t.default},"./src/templates/Skills/TitleBlock/TitleBlock.scss":function(e,t){},"./src/templates/Skills/TitleBlock/index.js":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.TitleBlock=void 0;var l=s("./src/templates/Skills/TitleBlock/TitleBlock.js"),i=n(l);t.TitleBlock=i.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/vitaliizhukov/work/sh-site/website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/vitaliizhukov/work/sh-site/website/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/vitaliizhukov/work/sh-site/website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/vitaliizhukov/work/sh-site/website/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/vitaliizhukov/work/sh-site/website/node_modules/babel-preset-stage-0/lib/index.js","/Users/vitaliizhukov/work/sh-site/website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/Skills/index.js':function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var l=s("./node_modules/react/react.js"),i=n(l),o=s("./node_modules/gatsby-link/index.js"),r=(n(o),s("./src/templates/Skills/TitleBlock/index.js")),u=s("./src/templates/Skills/SkillsList/index.js"),a=s("./src/templates/Skills/ExtraBlock/index.js");s("./src/templates/Skills/index.scss"),t.default=function(e){var t=e.data,s=t.markdownRemark,n=s.frontmatter,l=(n.title,n.titleBlock),o=n.skills,c=n.extraBlock;return console.log(o),i.default.createElement("div",{className:"skills__container"},i.default.createElement(r.TitleBlock,{params:l}),i.default.createElement(u.SkillsList,{params:o}),i.default.createElement(a.ExtraBlock,{params:c}))};t.query="** extracted graphql fragment **"},"./src/templates/Skills/index.scss":function(e,t){},"./src/ui/Button/Button.js":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=s("./node_modules/react/react.js"),i=n(l),o=s("./node_modules/react-proptypes/index.js"),r=s("./node_modules/classnames/index.js"),u=n(r);s("./src/ui/Button/Button.scss");var a=function(e){var t=e.children,s=e.outline,n=e.small,l=e.onClick,o=(0,u.default)({"sh-button__container":!0,"button-text-large":!n,"button-text-small":n,"sh-button__container--outline":s,"sh-button__container--small":n});return i.default.createElement("button",{className:o,onClick:l},t)};a.propTypes={children:o.node,type:o.string,outline:o.bool,small:o.bool,onClick:o.func},a.defaultProps={children:null,type:"button",outline:!1,small:!1,onClick:null},t.default=a,e.exports=t.default},"./src/ui/Button/Button.scss":function(e,t){},"./src/ui/Input/Input.js":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=s("./node_modules/react/react.js"),i=n(l),o=s("./node_modules/react-proptypes/index.js");s("./src/ui/Input/Input.scss");var r=function(e){var t=e.placeholder,s=e.type,n=e.name,l=e.required,o=e.autoFocus;return i.default.createElement("input",{className:"sh-input__container copytext",placeholder:t,name:n,type:s,required:l,autoFocus:o})};r.propTypes={placeholder:o.string,type:o.string,name:o.string.isRequired},r.defaultProps={placeholder:"",type:o.string},t.default=r,e.exports=t.default},"./src/ui/Input/Input.scss":function(e,t){},"./src/ui/index.js":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Input=t.Button=void 0;var l=s("./src/ui/Button/Button.js"),i=n(l),o=s("./src/ui/Input/Input.js"),r=n(o);t.Button=i.default,t.Input=r.default}});
//# sourceMappingURL=component---src-templates-skills-index-js-6ee744474a4ec03514de.js.map