webpackJsonp([0x916fe6afdc9e],{"./node_modules/babel-runtime/core-js/object/assign.js":function(e,o,s){e.exports={default:s("./node_modules/core-js/library/fn/object/assign.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/keys.js":function(e,o,s){e.exports={default:s("./node_modules/core-js/library/fn/object/keys.js"),__esModule:!0}},"./node_modules/babel-runtime/helpers/extends.js":function(e,o,s){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}o.__esModule=!0;var r=s("./node_modules/babel-runtime/core-js/object/assign.js"),l=t(r);o.default=l.default||function(e){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e}},"./node_modules/babel-runtime/helpers/objectWithoutProperties.js":function(e,o){"use strict";o.__esModule=!0,o.default=function(e,o){var s={};for(var t in e)o.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(s[t]=e[t]);return s}},"./node_modules/core-js/library/fn/object/assign.js":function(e,o,s){s("./node_modules/core-js/library/modules/es6.object.assign.js"),e.exports=s("./node_modules/core-js/library/modules/_core.js").Object.assign},"./node_modules/core-js/library/fn/object/keys.js":function(e,o,s){s("./node_modules/core-js/library/modules/es6.object.keys.js"),e.exports=s("./node_modules/core-js/library/modules/_core.js").Object.keys},"./node_modules/core-js/library/modules/_object-assign.js":function(e,o,s){"use strict";var t=s("./node_modules/core-js/library/modules/_object-keys.js"),r=s("./node_modules/core-js/library/modules/_object-gops.js"),l=s("./node_modules/core-js/library/modules/_object-pie.js"),n=s("./node_modules/core-js/library/modules/_to-object.js"),a=s("./node_modules/core-js/library/modules/_iobject.js"),u=Object.assign;e.exports=!u||s("./node_modules/core-js/library/modules/_fails.js")(function(){var e={},o={},s=Symbol(),t="abcdefghijklmnopqrst";return e[s]=7,t.split("").forEach(function(e){o[e]=e}),7!=u({},e)[s]||Object.keys(u({},o)).join("")!=t})?function(e,o){for(var s=n(e),u=arguments.length,d=1,i=r.f,c=l.f;u>d;)for(var b,j=a(arguments[d++]),m=i?t(j).concat(i(j)):t(j),f=m.length,_=0;f>_;)c.call(j,b=m[_++])&&(s[b]=j[b]);return s}:u},"./node_modules/core-js/library/modules/_object-sap.js":function(e,o,s){var t=s("./node_modules/core-js/library/modules/_export.js"),r=s("./node_modules/core-js/library/modules/_core.js"),l=s("./node_modules/core-js/library/modules/_fails.js");e.exports=function(e,o){var s=(r.Object||{})[e]||Object[e],n={};n[e]=o(s),t(t.S+t.F*l(function(){s(1)}),"Object",n)}},"./node_modules/core-js/library/modules/es6.object.assign.js":function(e,o,s){var t=s("./node_modules/core-js/library/modules/_export.js");t(t.S+t.F,"Object",{assign:s("./node_modules/core-js/library/modules/_object-assign.js")})},"./node_modules/core-js/library/modules/es6.object.keys.js":function(e,o,s){var t=s("./node_modules/core-js/library/modules/_to-object.js"),r=s("./node_modules/core-js/library/modules/_object-keys.js");s("./node_modules/core-js/library/modules/_object-sap.js")("keys",function(){return function(e){return r(t(e))}})},"./node_modules/gatsby-link/index.js":function(e,o,s){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return e.replace(/^\/\//g,"/")}o.__esModule=!0,o.navigateTo=void 0;var l=s("./node_modules/babel-runtime/helpers/extends.js"),n=t(l),a=s("./node_modules/babel-runtime/core-js/object/keys.js"),u=t(a),d=s("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),i=t(d),c=s("./node_modules/babel-runtime/helpers/classCallCheck.js"),b=t(c),j=s("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),m=t(j),f=s("./node_modules/babel-runtime/helpers/inherits.js"),_=t(f),p=s("./node_modules/react/react.js"),y=t(p),g=s("./node_modules/react-router-dom/index.js"),h=s("./node_modules/prop-types/index.js"),v=t(h),k="/";k="/saleshero";var x={activeClassName:v.default.string,activeStyle:v.default.object,exact:v.default.bool,strict:v.default.bool,isActive:v.default.func,location:v.default.object},w=function(e){function o(s){(0,b.default)(this,o);var t=(0,m.default)(this,e.call(this));return t.state={to:r(k+s.to)},t}return(0,_.default)(o,e),o.prototype.componentWillReceiveProps=function(e){this.props.to!==e.to&&(this.setState({to:r(k+e.to)}),___loader.enqueue(this.state.to))},o.prototype.componentDidMount=function(){___loader.enqueue(this.state.to)},o.prototype.render=function(){var e=this,o=this.props,s=o.onClick,t=(0,i.default)(o,["onClick"]),r=void 0;return r=(0,u.default)(x).some(function(o){return e.props[o]})?g.NavLink:g.Link,y.default.createElement(r,(0,n.default)({onClick:function(o){if(s&&s(o),!(0!==o.button||e.props.target||o.defaultPrevented||o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)){var t=e.state.to;if(t.split("#").length>1&&(t=t.split("#").slice(0,-1).join("")),t===window.location.pathname){var r=e.state.to.split("#").slice(1).join("#"),l=document.getElementById(r);if(null!==l)return l.scrollIntoView(),!0}o.preventDefault(),window.___navigateTo(e.state.to)}return!0}},t,{to:this.state.to}))},o}(y.default.Component);w.propTypes=(0,n.default)({},x,{to:v.default.string.isRequired,onClick:v.default.func}),w.contextTypes={router:v.default.object},o.default=w;o.navigateTo=function(e){window.___navigateTo(r(k+e))}},'./node_modules/babel-loader/lib/index.js?{"plugins":["D:/work/soshace/site2/website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","D:/work/soshace/site2/website/node_modules/babel-plugin-add-module-exports/lib/index.js","D:/work/soshace/site2/website/node_modules/babel-plugin-transform-object-assign/lib/index.js",["react-css-modules",{"generateScopedName":"[path]---[name]---[local]---[hash:base64:5]","webpackHotModuleReloading":false,"filetypes":{".scss":{"syntax":"postcss-scss"}},"exclude":"/global/"}]],"presets":[["D:/work/soshace/site2/website/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"D:/work/soshace/site2/website/node_modules/babel-preset-stage-0/lib/index.js","D:/work/soshace/site2/website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/default.js':function(e,o,s){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}o.__esModule=!0,o.query=void 0;var r=s("./node_modules/react/react.js"),l=t(r),n=s("./node_modules/gatsby-link/index.js");t(n);s("./src/templates/default.scss"),o.default=function(e){var o=e.data,s=o.markdownRemark,t=s.frontmatter.title;return l.default.createElement("div",{className:"default-page__container"},l.default.createElement("h1",null,t),l.default.createElement("div",{className:"default-page__content copytext",dangerouslySetInnerHTML:{__html:s.html}}))};o.query="** extracted graphql fragment **"},"./src/templates/default.scss":function(e,o){}});
//# sourceMappingURL=component---src-templates-default-js-452f7ca815f7f6138dc1.js.map