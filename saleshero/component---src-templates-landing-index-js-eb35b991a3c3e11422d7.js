webpackJsonp([20595694195868],{"./node_modules/classnames/index.js":function(e,t,n){var s,a;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var a=typeof s;if("string"===a||"number"===a)e.push(s);else if(Array.isArray(s))e.push(n.apply(null,s));else if("object"===a)for(var r in s)o.call(s,r)&&s[r]&&e.push(r)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(s=[],a=function(){return n}.apply(t,s),!(void 0!==a&&(e.exports=a)))}()},"./node_modules/react-proptypes/index.js":function(e,t,n){e.exports=n("./node_modules/prop-types/index.js")},2:function(e,t,n){function s(e){return n(a(e))}function a(e){return o[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var o={"./logo.svg":"./src/ui/Icon/logo.svg"};s.keys=function(){return Object.keys(o)},s.resolve=a,e.exports=s,s.id=2},"./src/components/SignupForm/SignupForm.js":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n("./node_modules/react/react.js"),i=s(u),l=n("./node_modules/react-proptypes/index.js"),c=n("./src/ui/index.js");n("./src/components/SignupForm/SignupForm.scss");var d=function(e){function t(n){a(this,t);var s=o(this,e.call(this,n));return s.state={ls:""},s}return r(t,e),t.prototype.componentDidMount=function(){var e=new URL(window.location.href),t=e.searchParams.get("ls")||"";this.setState({ls:t})},t.prototype.render=function(){var e=this.props,t=e.buttonText,n=e.inputPlaceholder,s=e.hasAutofocus;return i.default.createElement("form",{className:"signup-form__container",action:"https://app.saleshero.ai/api/v2/user",method:"post"},i.default.createElement(c.Input,{placeholder:n,name:"email",type:"email",required:!0,autoFocus:s}),i.default.createElement("input",{name:"leadSource",value:this.state.ls,hidden:!0}),i.default.createElement(c.Button,{type:"submit",primary:!0},t))},t}(i.default.Component);d.propTypes={buttonText:l.string,inputPlaceholder:l.string,hasAutofocus:l.bool},d.defaultProps={buttonText:"Free Trial",inputPlaceholder:"Input your Work Gmail",hasAutofocus:!1},t.default=d,e.exports=t.default},1:function(e,t,n){function s(e){return n(a(e))}function a(e){return o[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var o={"./index":"./src/ui/Icon/index.js","./index.js":"./src/ui/Icon/index.js","./linkedin.png":"./src/ui/Icon/linkedin.png","./logo.svg":"./src/ui/Icon/logo.svg"};s.keys=function(){return Object.keys(o)},s.resolve=a,e.exports=s,s.id=1},"./src/components/SignupForm/SignupForm.scss":function(e,t){},"./src/components/SignupForm/index.js":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.SignupForm=void 0;var a=n("./src/components/SignupForm/SignupForm.js"),o=s(a);t.SignupForm=o.default},"./src/templates/Landing/ExtraBlock/ExtraBlock.js":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n("./node_modules/react/react.js"),o=s(a),r=n("./node_modules/react-proptypes/index.js"),u=n("./src/templates/Landing/ExtraBlock/ExtraBlock.module.scss"),i=s(u),l=function(e){var t=e.params;return o.default.createElement("div",{className:i.default.extraBlock__container},o.default.createElement("h2",null,t.title),o.default.createElement("p",{className:i.default.extraBlock__description+" subline2"},t.description),t.action&&o.default.createElement("a",{className:extraBlock__action+" button-text-large",href:"http://saleshero.ai/"},t.action))};l.propTypes={params:(0,r.shape)({title:r.string,description:r.string,action:r.string})},t.default=l,e.exports=t.default},"./src/templates/Landing/ExtraBlock/ExtraBlock.module.scss":function(e,t){e.exports={content__container:"src-templates-Landing-ExtraBlock----ExtraBlock-module---content__container---21Dk0",extraBlock__container:"src-templates-Landing-ExtraBlock----ExtraBlock-module---extraBlock__container---2-mG8",extraBlock__description:"src-templates-Landing-ExtraBlock----ExtraBlock-module---extraBlock__description---s89EM",extraBlock__action:"src-templates-Landing-ExtraBlock----ExtraBlock-module---extraBlock__action---1eHC7"}},"./src/templates/Landing/ExtraBlock/index.js":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ExtraBlock=void 0;var a=n("./src/templates/Landing/ExtraBlock/ExtraBlock.js"),o=s(a);t.ExtraBlock=o.default},"./src/templates/Landing/Features/Features.js":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n("./node_modules/react/react.js"),o=s(a),r=n("./node_modules/react-proptypes/index.js"),u=n("./src/templates/Landing/Features/Features.module.scss"),i=s(u),l=function(e,t){var n=e.text,s=e.icon,a=e.color;return o.default.createElement("div",{key:t,className:i.default.feature__container},o.default.createElement("div",{className:i.default.feature__content},o.default.createElement("i",{className:"material-icons",style:{color:a}},s),o.default.createElement("p",{className:"copytext-large"},n)))},c=function(e){var t=e.params;return o.default.createElement("div",{className:i.default.features__container},o.default.createElement("h2",null,t.title),o.default.createElement("div",{className:i.default.items__container},t.items.map(function(e,t){return l(e,t)})))};c.propTypes={params:(0,r.shape)({title:r.string,items:(0,r.arrayOf)((0,r.shape)({title:r.string,icon:r.string,color:r.string,text:r.string}))})},c.defaultProps={params:{items:[]}},t.default=c,e.exports=t.default},"./src/templates/Landing/Features/Features.module.scss":function(e,t){e.exports={content__container:"src-templates-Landing-Features----Features-module---content__container---ONpK8",features__container:"src-templates-Landing-Features----Features-module---features__container---1hf_U",items__container:"src-templates-Landing-Features----Features-module---items__container---1IUw5",feature__container:"src-templates-Landing-Features----Features-module---feature__container---qtuQb",feature__content:"src-templates-Landing-Features----Features-module---feature__content---H7HUO"}},"./src/templates/Landing/Features/index.js":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Features=void 0;var a=n("./src/templates/Landing/Features/Features.js"),o=s(a);t.Features=o.default},"./src/templates/Landing/MainBlock/MainBlock.js":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n("./node_modules/react/react.js"),o=s(a),r=n("./node_modules/react-proptypes/index.js"),u=n("./src/components/SignupForm/index.js"),i=n("./src/templates/Landing/MainBlock/MainBlock.module.scss"),l=s(i),c=function(e){var t=e.params;return o.default.createElement("div",{className:l.default.mainBlock__container},o.default.createElement("h1",null,t.title),o.default.createElement("p",{className:l.default.mainBlock__description+" subline2",dangerouslySetInnerHTML:{__html:t.description}}),o.default.createElement(u.SignupForm,{buttonText:t.buttonText,hasAutofocus:!0,inputPlaceholder:t.inputPlaceholder}))};c.propTypes={params:(0,r.shape)({title:r.string,description:r.string,inputPlaceholder:r.string,buttonText:r.string})},t.default=c,e.exports=t.default},"./src/templates/Landing/MainBlock/MainBlock.module.scss":function(e,t){e.exports={content__container:"src-templates-Landing-MainBlock----MainBlock-module---content__container---AFTWV",mainBlock__container:"src-templates-Landing-MainBlock----MainBlock-module---mainBlock__container---1HH9z",mainBlock__description:"src-templates-Landing-MainBlock----MainBlock-module---mainBlock__description---1R4Up"}},"./src/templates/Landing/MainBlock/index.js":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.MainBlock=void 0;var a=n("./src/templates/Landing/MainBlock/MainBlock.js"),o=s(a);t.MainBlock=o.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["D:/work/soshace/site2/website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","D:/work/soshace/site2/website/node_modules/babel-plugin-add-module-exports/lib/index.js","D:/work/soshace/site2/website/node_modules/babel-plugin-transform-object-assign/lib/index.js",["react-css-modules",{"generateScopedName":"[path]---[name]---[local]---[hash:base64:5]","webpackHotModuleReloading":false,"filetypes":{".scss":{"syntax":"postcss-scss"}},"exclude":"/global/"}]],"presets":[["D:/work/soshace/site2/website/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"D:/work/soshace/site2/website/node_modules/babel-preset-stage-0/lib/index.js","D:/work/soshace/site2/website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/Landing/index.js':function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=n("./node_modules/react/react.js"),o=s(a),r=n("./src/templates/Landing/Features/index.js"),u=n("./src/templates/Landing/MainBlock/index.js"),i=n("./src/templates/Landing/ExtraBlock/index.js"),l=n("./src/templates/Landing/index.module.scss"),c=s(l);t.default=function(e){var t=e.data,n=t.markdownRemark,s=n.frontmatter,a=(s.title,s.features),l=s.mainBlock,d=s.extraBlock;return o.default.createElement("div",{className:c.default.landing__container},o.default.createElement(u.MainBlock,{params:l}),o.default.createElement(r.Features,{params:a}),o.default.createElement(i.ExtraBlock,{params:d}),o.default.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}))};t.query="** extracted graphql fragment **"},"./src/templates/Landing/index.module.scss":function(e,t){e.exports={content__container:"src-templates-Landing----index-module---content__container---38HHK",landing__container:"src-templates-Landing----index-module---landing__container---2n7k-",landing__content:"src-templates-Landing----index-module---landing__content---l-6A2"}},"./src/ui/Button/Button.js":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n("./node_modules/react/react.js"),o=s(a),r=n("./node_modules/react-proptypes/index.js"),u=n("./node_modules/classnames/index.js"),i=s(u);n("./src/ui/Button/Button.scss");var l=function(e){var t=e.children,n=e.outline,s=e.small,a=e.onClick,r=e.primary,u=(0,i.default)({"sh-button__container":!0,"link-small":!0,"button-text-large":!s,"button-text-small":s,"sh-button__container--outline":n,"sh-button__container--small":s,"sh-button__container--primary":r});return o.default.createElement("button",{className:u,onClick:a},t)};l.propTypes={children:r.node,type:r.string,outline:r.bool,small:r.bool,onClick:r.func,primary:r.bool},l.defaultProps={children:null,type:"button",outline:!1,small:!1,onClick:null,primary:!1},t.default=l,e.exports=t.default},"./src/ui/Button/Button.scss":function(e,t){},"./src/ui/Divider/Divider.js":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n("./node_modules/react/react.js"),o=s(a),r=n("./node_modules/prop-types/index.js"),u=n("./node_modules/classnames/index.js"),i=s(u);n("./src/ui/Divider/Divider.scss");var l=function(e){var t=e.fullWidth,n=(0,i.default)({divider__container:!0,"divider__container--fullWidth":t});return o.default.createElement("div",{className:n})};l.propTypes={fullWidth:r.bool},t.default=l,e.exports=t.default},"./src/ui/Divider/Divider.scss":function(e,t){},"./src/ui/Icon/index.js":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n("./node_modules/react/react.js"),o=s(a),r=n("./node_modules/prop-types/index.js"),u=function(e){if(e)try{var t=e;return t=e.includes(".")?n(1)("./"+e):n(2)("./"+e+".svg"),o.default.createElement("img",{src:t,alt:e})}catch(e){console.log(e)}return null},i=function(e){var t=e.image;return t?u(t):null};i.propTypes={image:r.string},i.defaultProps={image:""},t.default=i,e.exports=t.default},"./src/ui/Icon/linkedin.png":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAABGdBTUEAALGPC/xhBQAAAdxJREFUOBG9UzFrU1EUPueSWHCIYhB0Km0WBenQQcjWQWKx1IRENEFcFKSjQkd/QYo4Cjq1Q2maIUEMDXFw6dKhiig4uDiIYrYKKnkm7+v3El7yXkheQiI9D9493/nO+e65792jy5ncApp4KcAVUf0QMnhQKRU+yxRm7Ka9CeAqRE5zjTdb+mIKvXapUei8T0Ql5sMTACOKXV+dqh/7yPGAiZzKrKma+6JmQ1XvVkvbj8crPeEsTSSz6wK51N3X4LBWLjx3cCKZy/NWnHM5o1I5HwnXfv6yHonoqopcEMEXQPfPzFzMF4vP/jq5IRIrECy5hQo5S78tKrBv0Z9zOa5/6kfWE66LFOPTtln6146sH3eWU9kb1fLOV9OJD3tzC48B8pABCg4w4DJseeowoQH00BAFZ1TF4tHfsM0Ge73p1SBOO8MUKEoBzkNvD36qhoHG917tvHei11PZe7Cx1cug15KFEcf3pbNBKbiCDhMJp7cZ/O3Nsm3EAkXZJZvzmn7zomLxdov4uzfGEY0GinqTO77/xzkxVfzrzxshir5O+8sH40BRju3/Fx3cx+hoYKe8T4H8MPnAokmPz8uPtypad3dV4MD1OTWvyUVdzIn56PrdVU2VNZ96WN4dA+ASl1oO2b++AAAAAElFTkSuQmCC"},"./src/ui/Icon/logo.svg":function(e,t){e.exports="data:image/svg+xml;base64,ICAgIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAxNTggMjIiPg0KICAgICAgICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+DQogICAgICAgIDxwYXRoIGQ9Ik0xMC43IDYuM0MxMC41IDUuNCA5LjggMy45IDcuNiAzLjljLTEuNiAwLTIuNyAxLTIuNyAyLjIgMCAwLjkgMC42IDEuNyAxLjggMS45bDIuNCAwLjVjMy4xIDAuNiA0LjggMi42IDQuOCA1IDAgMi42LTIuMiA1LjMtNi4xIDUuMyAtNC41IDAtNi41LTIuOS02LjgtNS4zbDMuMS0wLjhjMC4xIDEuNyAxLjMgMy4yIDMuNyAzLjIgMS44IDAgMi44LTAuOSAyLjgtMi4xIDAtMS0wLjctMS44LTIuMS0ybC0yLjQtMC41Yy0yLjctMC42LTQuNS0yLjMtNC41LTQuOUMxLjYgMy4zIDQuNCAxIDcuNiAxYzQuMSAwIDUuNyAyLjUgNi4xIDQuNEwxMC43IDYuM3oiIC8+PHBhdGggZD0iTTI3LjEgMTQuNWgtNi45bC0xLjQgMy45aC0zLjVsNi41LTE3aDMuOGw2LjUgMTdoLTMuNkwyNy4xIDE0LjV6TTIxLjMgMTEuNWg0LjdsLTIuNC02LjRMMjEuMyAxMS41eiIgLz48cGF0aCBkPSJNMzQuNyAxOC40VjEuNGgzLjN2MTMuOWg3LjZ2My4ySDM0Ljd6IiAvPjxwYXRoIGQ9Ik00OC4zIDE4LjRWMS40aDEwLjd2My4xaC03LjN2My45aDYuN3YzaC02LjZ2My45aDcuM3YzLjFINDguM3oiIC8+PHBhdGggZD0iTTcxLjIgNi4zQzcxIDUuNCA3MC4zIDMuOSA2OC4xIDMuOWMtMS42IDAtMi43IDEtMi43IDIuMiAwIDAuOSAwLjYgMS43IDEuOCAxLjlsMi40IDAuNWMzLjEgMC42IDQuOCAyLjYgNC44IDUgMCAyLjYtMi4yIDUuMy02LjEgNS4zIC00LjUgMC02LjUtMi45LTYuOC01LjNsMy4xLTAuOGMwLjEgMS43IDEuMyAzLjIgMy43IDMuMiAxLjggMCAyLjgtMC45IDIuOC0yLjEgMC0xLTAuNy0xLjgtMi4xLTJsLTIuNC0wLjVjLTIuNy0wLjYtNC41LTIuMy00LjUtNC45QzYyLjIgMy4zIDY0LjkgMSA2OC4xIDFjNC4xIDAgNS43IDIuNSA2LjEgNC40TDcxLjIgNi4zeiIgLz48cGF0aCBkPSJNODguNiAxOC40di03LjFoLTcuNHY3LjFoLTMuM1YxLjRoMy4zdjYuOGg3LjRWMS40aDMuM3YxN0g4OC42eiIgLz48cGF0aCBkPSJNOTYuMyAxOC40VjEuNGgxMC43djMuMWgtNy4zdjMuOWg2Ljd2M2gtNi42djMuOWg3LjN2My4xSDk2LjN6IiAvPjxwYXRoIGQ9Ik0xMTUuOSAxMS44aC0xLjd2Ni42aC0zLjNWMS40aDYuNmMzLjMgMCA1LjQgMi4zIDUuNCA1LjIgMCAyLjQtMS40IDQuMi0zLjYgNC44bDMuNiA3aC0zLjdMMTE1LjkgMTEuOHpNMTE2LjggOWMxLjcgMCAyLjctMSAyLjctMi40IDAtMS40LTEtMi40LTIuNy0yLjRoLTIuN3Y0LjdIMTE2Ljh6IiAvPjxwYXRoIGQ9Ik0xMzMuOSAxYzQuNiAwIDguOCAzLjQgOC44IDguOSAwIDUuNS00LjEgOC45LTguOCA4LjkgLTQuNiAwLTguNy0zLjQtOC43LTguOUMxMjUuMiA0LjQgMTI5LjMgMSAxMzMuOSAxek0xMzMuOSAxNS41YzIuNiAwIDUuMy0xLjggNS4zLTUuN3MtMi43LTUuNy01LjMtNS43Yy0yLjYgMC01LjMgMS44LTUuMyA1LjdTMTMxLjMgMTUuNSAxMzMuOSAxNS41eiIgLz48cGF0aCBkPSJNMTQ0LjIgMjF2LTIuNmgxMi4zVjIxSDE0NC4yeiIgLz4NCiAgICA8L3N2Zz4="},"./src/ui/Input/Input.js":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n("./node_modules/react/react.js"),o=s(a),r=n("./node_modules/react-proptypes/index.js"),u=n("./node_modules/classnames/index.js"),i=s(u);n("./src/ui/Input/Input.scss");var l=function(e){var t=e.placeholder,n=e.type,s=e.name,a=e.required,r=e.autoFocus,u=e.small,l=(0,i.default)({"sh-input__container":!0,"copytext-small":!0,"sh-input__container--small":u});return o.default.createElement("input",{className:l,placeholder:t,name:s,type:n,required:a,autoFocus:r})};l.propTypes={placeholder:r.string,type:r.string,small:r.bool,name:r.string.isRequired},l.defaultProps={placeholder:"",type:"text",small:!1},t.default=l,e.exports=t.default},"./src/ui/Input/Input.scss":function(e,t){},"./src/ui/index.js":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Icon=t.Divider=t.Input=t.Button=void 0;var a=n("./src/ui/Button/Button.js"),o=s(a),r=n("./src/ui/Input/Input.js"),u=s(r),i=n("./src/ui/Divider/Divider.js"),l=s(i),c=n("./src/ui/Icon/index.js"),d=s(c);t.Button=o.default,t.Input=u.default,t.Divider=l.default,t.Icon=d.default}});
//# sourceMappingURL=component---src-templates-landing-index-js-eb35b991a3c3e11422d7.js.map