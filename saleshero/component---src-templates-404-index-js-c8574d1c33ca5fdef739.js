webpackJsonp([54813235057449],{47:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=o(1),s=i(r),l=o(2);o(62);var c=function(e){function t(o){n(this,t);var i=a(this,e.call(this,o));return i.logo=null,i.state={mode:o.mode},i.loadLogo=i.loadLogo.bind(i),i}return p(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;e.mode!==this.state.mode&&this.setState({mode:e.mode},function(){try{t.loadAnimation()}catch(e){console.log(e)}})},t.prototype.componentDidMount=function(){window.addEventListener("load",this.loadLogo),window.SHLogo&&this.loadLogo()},t.prototype.componentWillUnmount=function(){window.removeEventListener("load",this.loadLogo),window.PIXI.loader.resources={}},t.prototype.loadLogo=function(){var e=this;return window.SHLogo?(this.logo=new window.SHLogo.Logo(this.getId(),function(){e.logo.applyState("relaxing")}),this.logo.defineState("relaxing",{mesh:{movement:"wave",xRange:2,yRange:2,xPace:2400.000000000001,yPace:2400.000000000001},shape:{mainSize:100,bubbles:[{size:0,pivot:{orbit:0,speed:0,pace:0,initRotation:0},bubble:{orbit:0,speed:0,pace:0,initRotation:0}},{size:0,pivot:{orbit:100,speed:0,pace:0,initRotation:0},bubble:{orbit:0,speed:0,pace:0,initRotation:0}},{size:0,pivot:{orbit:0,speed:0,pace:0,initRotation:0},bubble:{orbit:0,speed:0,pace:0,initRotation:0}},{size:0,pivot:{orbit:0,speed:0,pace:0,initRotation:0},bubble:{orbit:0,speed:0,pace:0,initRotation:0}},{size:0,pivot:{orbit:0,speed:0,pace:0,initRotation:0},bubble:{orbit:0,speed:0,pace:0,initRotation:0}}]},texture:{"25_01.png":{alpha:50,color:"#196dee",blur:10,scale:2.1625882352941175,initRotation:1.884955592153876,speed:.002181661564992912,pivot:{orbit:20,speed:.02181661564992912,pace:4800.000000000001,initRotation:10}},"25_02.png":{alpha:50,color:"#30d149",blur:0,scale:.9010784313725488,initRotation:6.283185307179587,speed:.002181661564992912,pivot:{orbit:20,speed:.02181661564992912,pace:4800.000000000001,initRotation:10}},"25_03.png":{alpha:70,color:"#196dee",blur:0,scale:1.0812941176470587,initRotation:.6283185307179586,speed:.002181661564992912,pivot:{orbit:10,speed:.02181661564992912,pace:4800.000000000001,initRotation:10}},"33_01.png":{alpha:100,color:"#30d149",blur:0,scale:.9010784313725488,initRotation:6.283185307179587,speed:.002181661564992912,pivot:{orbit:10,speed:.02181661564992912,pace:4800.000000000001,initRotation:30.00000000000001}},"background.png":{alpha:100,color:"#2bd8e8",blur:0,scale:1.4417254901960783,initRotation:0,speed:0,pivot:{orbit:0,speed:0,pace:0,initRotation:0}}}}),this.logo.defineState("working",{mesh:{movement:"wave",xRange:2.9999999999999996,yRange:2.9999999999999996,xPace:1800,yPace:1800},shape:{mainSize:100,bubbles:[{size:30,pivot:{orbit:80,speed:.005817764173314432,pace:18e3,initRotation:48},bubble:{orbit:10,speed:.05817764173314432,pace:1800,initRotation:12}},{size:30,pivot:{orbit:60,speed:.005817764173314432,pace:18e3,initRotation:24},bubble:{orbit:20,speed:.04363323129985824,pace:2400.0000000000005,initRotation:57}},{size:30,pivot:{orbit:70,speed:.005817764173314432,pace:18e3,initRotation:70},bubble:{orbit:10,speed:.04363323129985824,pace:2400.0000000000005,initRotation:20}},{size:0,pivot:{orbit:0,speed:0,pace:0,initRotation:0},bubble:{orbit:0,speed:0,pace:0,initRotation:0}},{size:0,pivot:{orbit:0,speed:0,pace:0,initRotation:0},bubble:{orbit:0,speed:0,pace:0,initRotation:0}}]},texture:{"25_01.png":{alpha:90,color:"#196dee",blur:10,scale:2.8834509803921566,initRotation:2.5132741228718345,speed:.005817764173314432,pivot:{orbit:20,speed:.04363323129985824,pace:2400.0000000000005,initRotation:10}},"25_02.png":{alpha:60,color:"#fd4343",blur:0,scale:1.0812941176470587,initRotation:1.2566370614359172,speed:.005817764173314432,pivot:{orbit:20,speed:.04363323129985824,pace:2400.0000000000005,initRotation:10}},"25_03.png":{alpha:100,color:"#196dee",blur:0,scale:1.0812941176470587,initRotation:1.2566370614359172,speed:.005817764173314432,pivot:{orbit:10,speed:.04363323129985824,pace:2400.0000000000005,initRotation:10}},"33_01.png":{alpha:100,color:"#fd4343",blur:0,scale:1.0812941176470587,initRotation:6.283185307179587,speed:.005817764173314432,pivot:{orbit:10,speed:.04363323129985824,pace:2400.0000000000005,initRotation:30.00000000000003}},"background.png":{alpha:100,color:"#2bd8e8",blur:0,scale:1.4417254901960783,initRotation:0,speed:0,pivot:{orbit:0,speed:0,pace:0,initRotation:0}}}}),void this.logo.defineState("waiting",{mesh:{movement:"wave",xRange:3,yRange:3,xPace:2400.000000000001,yPace:2400.000000000001},shape:{mainSize:100,bubbles:[{size:30,pivot:{orbit:70,speed:.002908882086657216,pace:36e3,initRotation:47},bubble:{orbit:10,speed:.02908882086657216,pace:3600,initRotation:20}},{size:30,pivot:{orbit:70,speed:.002908882086657216,pace:36e3,initRotation:28.000000000000004},bubble:{orbit:10,speed:.04363323129985824,pace:2400.0000000000005,initRotation:70}},{size:28.000000000000004,pivot:{orbit:70,speed:.002908882086657216,pace:36e3,initRotation:68.00000000000001},bubble:{orbit:10,speed:.02908882086657216,pace:3600,initRotation:20}},{size:0,pivot:{orbit:0,speed:0,pace:0,initRotation:0},bubble:{orbit:0,speed:0,pace:0,initRotation:0}},{size:0,pivot:{orbit:0,speed:0,pace:0,initRotation:0},bubble:{orbit:0,speed:0,pace:0,initRotation:0}}]},texture:{"25_01.png":{alpha:50,color:"#196dee",blur:10,scale:2.1625882352941175,initRotation:2.5132741228718345,speed:.002908882086657216,pivot:{orbit:20,speed:.02908882086657216,pace:3600,initRotation:15.000000000000009}},"25_02.png":{alpha:50,color:"#fdc003",blur:0,scale:1.0812941176470587,initRotation:6.283185307179587,speed:.002908882086657216,pivot:{orbit:20,speed:.02908882086657216,pace:3600,initRotation:15.000000000000009}},"25_03.png":{alpha:70,color:"#196dee",blur:0,scale:1.0812941176470587,initRotation:1.2566370614359172,speed:.002908882086657216,pivot:{orbit:10,speed:.02908882086657216,pace:3600,initRotation:15.000000000000009}},"33_01.png":{alpha:100,color:"#fdc003",blur:0,scale:1.0812941176470587,initRotation:6.283185307179587,speed:.002908882086657216,pivot:{orbit:15,speed:.02908882086657216,pace:3600,initRotation:30.00000000000003}},"background.png":{alpha:100,color:"#2bd8e8",blur:0,scale:1.4417254901960783,initRotation:0,speed:0,pivot:{orbit:0,speed:0,pace:0,initRotation:0}}}})):void setTimeout(this.loadLogo,1e3)},t.prototype.getId=function(){var e=this.props.id;return e+"-sh-logo"},t.prototype.loadAnimation=function(){var e=this.state.mode;return this.logo.transitTo(e)},t.prototype.render=function(){var e=this.props.className;return s.default.createElement("div",{id:this.getId(),className:e})},t}(r.Component);t.default=c,c.propTypes={className:l.string,mode:l.string,id:l.string},e.exports=t.default},62:function(e,t){},48:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=o(47);Object.defineProperty(t,"Logo",{enumerable:!0,get:function(){return i(n).default}})},428:function(e,t){},279:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.data,o=t.markdownRemark.frontmatter,i=o.message,n=o.note,a=o.buttonText;return p.default.createElement("section",{className:"page404__container"},p.default.createElement("div",{className:"logo animated"},p.default.createElement(c.Logo,{id:"logo-top",className:"sh-logo",mode:"relaxed"})),p.default.createElement("h1",{className:"small",dangerouslySetInnerHTML:{__html:i}}),p.default.createElement("div",{className:"page404__note"},p.default.createElement("p",{className:"copytext",dangerouslySetInnerHTML:{__html:n}}),p.default.createElement(l.default,{to:"/"},p.default.createElement(d.Button,{primary:!0},a))))}t.__esModule=!0,t.query=void 0,t.default=n;var a=o(1),p=i(a),r=o(2),s=o(18),l=i(s),c=o(48),d=o(13);o(428),n.propTypes={data:(0,r.shape)({markDownRemark:(0,r.shape)({frontmatter:(0,r.shape)({title:r.string,path:r.string,message:r.string,note:r.string,buttonText:r.string})})})};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-404-index-js-c8574d1c33ca5fdef739.js.map