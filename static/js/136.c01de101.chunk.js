(self.webpackChunkgopalkarandcompany=self.webpackChunkgopalkarandcompany||[]).push([[136],{136:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return K}});var n=r(885),o=r(683),i=r(791);var a=function(e){var t=this.constructor;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){return t.reject(r)}))}))};var s=function(e){return new this((function(t,r){if(!e||"undefined"===typeof e.length)return r(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var n=Array.prototype.slice.call(e);if(0===n.length)return t([]);var o=n.length;function i(e,r){if(r&&("object"===typeof r||"function"===typeof r)){var a=r.then;if("function"===typeof a)return void a.call(r,(function(t){i(e,t)}),(function(r){n[e]={status:"rejected",reason:r},0===--o&&t(n)}))}n[e]={status:"fulfilled",value:r},0===--o&&t(n)}for(var a=0;a<n.length;a++)i(a,n[a])}))},c=setTimeout,l="undefined"!==typeof setImmediate?setImmediate:null;function d(e){return Boolean(e&&"undefined"!==typeof e.length)}function u(){}function f(e){if(!(this instanceof f))throw new TypeError("Promises must be constructed via new");if("function"!==typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],b(e,this)}function h(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,f._immediateFn((function(){var r=1===e._state?t.onFulfilled:t.onRejected;if(null!==r){var n;try{n=r(e._value)}catch(o){return void m(t.promise,o)}p(t.promise,n)}else(1===e._state?p:m)(t.promise,e._value)}))):e._deferreds.push(t)}function p(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===typeof t||"function"===typeof t)){var r=t.then;if(t instanceof f)return e._state=3,e._value=t,void y(e);if("function"===typeof r)return void b((n=r,o=t,function(){n.apply(o,arguments)}),e)}e._state=1,e._value=t,y(e)}catch(i){m(e,i)}var n,o}function m(e,t){e._state=2,e._value=t,y(e)}function y(e){2===e._state&&0===e._deferreds.length&&f._immediateFn((function(){e._handled||f._unhandledRejectionFn(e._value)}));for(var t=0,r=e._deferreds.length;t<r;t++)h(e,e._deferreds[t]);e._deferreds=null}function v(e,t,r){this.onFulfilled="function"===typeof e?e:null,this.onRejected="function"===typeof t?t:null,this.promise=r}function b(e,t){var r=!1;try{e((function(e){r||(r=!0,p(t,e))}),(function(e){r||(r=!0,m(t,e))}))}catch(n){if(r)return;r=!0,m(t,n)}}f.prototype.catch=function(e){return this.then(null,e)},f.prototype.then=function(e,t){var r=new this.constructor(u);return h(this,new v(e,t,r)),r},f.prototype.finally=a,f.all=function(e){return new f((function(t,r){if(!d(e))return r(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(e);if(0===n.length)return t([]);var o=n.length;function i(e,a){try{if(a&&("object"===typeof a||"function"===typeof a)){var s=a.then;if("function"===typeof s)return void s.call(a,(function(t){i(e,t)}),r)}n[e]=a,0===--o&&t(n)}catch(c){r(c)}}for(var a=0;a<n.length;a++)i(a,n[a])}))},f.allSettled=s,f.resolve=function(e){return e&&"object"===typeof e&&e.constructor===f?e:new f((function(t){t(e)}))},f.reject=function(e){return new f((function(t,r){r(e)}))},f.race=function(e){return new f((function(t,r){if(!d(e))return r(new TypeError("Promise.race accepts an array"));for(var n=0,o=e.length;n<o;n++)f.resolve(e[n]).then(t,r)}))},f._immediateFn="function"===typeof l&&function(e){l(e)}||function(e){c(e,0)},f._unhandledRejectionFn=function(e){"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var w=f,g=r(540),x=r.n(g);function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t,r){return t&&C(e.prototype,t),r&&C(e,r),e}var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",E=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;var T,O=function(e){return function(e){for(var t,r,n,o,i="",a=0,s=(e=String(e)).length%3;a<e.length;){if((r=e.charCodeAt(a++))>255||(n=e.charCodeAt(a++))>255||(o=e.charCodeAt(a++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");i+=A.charAt((t=r<<16|n<<8|o)>>18&63)+A.charAt(t>>12&63)+A.charAt(t>>6&63)+A.charAt(63&t)}return s?i.slice(0,s-3)+"===".substring(s):i}(JSON.stringify(e))},I=function(e){var t="@formspree/core@".concat("2.6.2");return e?"".concat(e," ").concat(t):t},S=function(){return navigator.webdriver||!!document.documentElement.getAttribute(function(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!E.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(3&e.length));for(var t,r,n,o="",i=0;i<e.length;)t=A.indexOf(e.charAt(i++))<<18|A.indexOf(e.charAt(i++))<<12|(r=A.indexOf(e.charAt(i++)))<<6|(n=A.indexOf(e.charAt(i++))),o+=64===r?String.fromCharCode(t>>16&255):64===n?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,255&t);return o}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom},B=function(){function e(){j(this,e),this.loadedAt=1*new Date,this.webdriver=S()}return _(e,[{key:"teardown",value:function(){}},{key:"data",value:function(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}}]),e}(),F=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};j(this,e),this.project=t.project,"undefined"!==typeof window&&this.startBrowserSession()}return _(e,[{key:"startBrowserSession",value:function(){this.session||(this.session=new B)}},{key:"teardown",value:function(){this.session&&this.session.teardown()}},{key:"submitForm",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.endpoint||"https://formspree.io",o=r.fetchImpl||x()({Promise:w}).fetch,i=this.project?"".concat(n,"/p/").concat(this.project,"/f/").concat(e):"".concat(n,"/f/").concat(e),a=function(e){return e instanceof FormData?e:JSON.stringify(e)},s={Accept:"application/json","Formspree-Client":I(r.clientName)};this.session&&(s["Formspree-Session-Data"]=O(this.session.data())),t instanceof FormData||(s["Content-Type"]="application/json");var c={method:"POST",mode:"cors",body:a(t),headers:s};return o(i,c).then((function(e){return e.json().then((function(t){return{body:t,response:e}}))}))}}]),e}(),P=function(){var e;return T||(T=new F(e)),T};function k(e){return k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var R=i.createContext({client:void 0});R.displayName="Formspree";function D(){return(0,i.useContext)(R).client||P()}var U="2.2.4";function L(e){return void 0!==e.preventDefault}var q=r(182),H=r(270),M=r(246),z=r(765),G=r(961),V=r(350),W=r(636),J={root:(0,o.Z)((0,o.Z)((0,o.Z)({},W.qj),W.Zh),{},{paddingTop:"2rem",paddingBottom:"2rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),text:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","& h2":(0,o.Z)((0,o.Z)({},W.vU),{},{letterSpacing:"1px",textAlign:"center"}),"& p":(0,o.Z)({paddingTop:"2rem"},W.Em)},mediaIcons:{width:"100%",padding:"2rem 0 0 0",display:"flex",justifyContent:"space-around",alignItems:"center"},mediaIcon:{height:"2rem",width:"2rem",padding:"0.2rem",borderRadius:"2rem",color:"var(--accent)",border:"1px solid var(--accent-hover)",transition:"all 0.4s","&:hover":{border:"2px double var(--accent-hover)",opacity:"0.9",transform:"rotate(360deg)",boxShadow:"2px 2px 24px var(--accent)"}},form:(0,o.Z)((0,o.Z)((0,o.Z)({minHeight:"50vh",padding:"2rem 0 0.5rem 0",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"},W.WT),W.Em),{},{"& input,input:focus,textarea":{width:"100%",margin:"0.5rem 0",padding:"0.2rem",outline:"none",border:"none",borderBottom:"1px solid var(--text-gray)"},"& label":{width:"100%",padding:"0.5rem 0"},"& div":{width:"100%",display:"flex",justifyContent:"center"}}),response:{display:"none",padding:"0.5rem",border:"1px solid #2DA64D",borderRadius:"0.5rem",fontSize:"0.8rem",textAlign:"center"},open:{display:"block"},"@media only screen and (min-width: 401px) and (max-width: 960px)":{root:{paddingTop:"4rem",paddingBottom:"2rem"},text:{"& p":{width:"80%"}},mediaIcons:{width:"50%"},form:{width:"80%",padding:"4rem 0 1rem 0","& input,input:focus,textarea":{margin:"1rem 0",padding:"0.4rem"},"& div":{justifyContent:"flex-end"}}},"@media only screen and (min-width: 961px)":{root:{paddingTop:"6rem",paddingBottom:"2rem"},text:{"& p":{width:"60%"}},mediaIcons:{width:"50%"},form:{width:"40%",padding:"6rem 0 1rem 0","& input,input:focus,textarea":{margin:"1rem 0",padding:"0.4rem"},"& div":{justifyContent:"flex-end"}}}},X=r(184),Y=(0,M.Z)((0,o.Z)({},J));var K=function(){var e=Y(),t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Z((0,i.useState)(!1),2),n=r[0],o=r[1],a=Z((0,i.useState)(!1),2),s=a[0],c=a[1],l=Z((0,i.useState)([]),2),d=l[0],u=l[1],f=D(),h=t.client||f;if(!h)throw new Error("You must provide a Formspree client");if(!e)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');var p=!!t.debug,m=t.data;return[{submitting:n,succeeded:s,errors:d},function(r){var n=L(r)?function(e){e.preventDefault();var t=e.target;if("FORM"!=t.tagName)throw new Error("submit was triggered for a non-form element");return new FormData(t)}(r):r,i=function(e,t){n instanceof FormData?n.append(e,t):n=Object.assign(n,N({},e,t))};if("object"===k(m))for(var a in m)"function"===typeof m[a]?i(a,m[a].call(null)):i(a,m[a]);return o(!0),h.submitForm(e,n,{endpoint:t.endpoint,clientName:"@formspree/react@".concat(U)}).then((function(e){var t,r=e.response.status;return 200===r?(p&&console.log("Form submitted",e),c(!0),u([])):r>=400&&r<500?((t=e.body).errors&&u(t.errors),p&&console.log("Validation error",e),c(!1)):(p&&console.log("Unexpected error",e),c(!1)),e})).catch((function(e){throw p&&console.log("Unexpected error",e),c(!1),e})).finally((function(){o(!1)}))},function(){o(!1),c(!1),u([])}]}("xzborpzd"),r=(0,n.Z)(t,2),o=r[0],a=r[1];return(0,X.jsxs)("div",{className:e.root,children:[(0,X.jsxs)(H.q,{children:[(0,X.jsx)("title",{children:"Contact - Gopalkar & Company"}),(0,X.jsx)("meta",{name:"description",content:"We are here to help. If you have a question or would like to speak to one of our team members, submit your inquiry below and we'll be in touch shortly."})]}),(0,X.jsxs)("div",{className:e.text,children:[(0,X.jsx)("h2",{children:"Gopalkar & Company Help Desk"}),(0,X.jsx)("p",{children:"If you have any questions or concerns, a member of staff would be pleased to assist you. Please contact us by phone or email, and we will get back to you as soon as possible."}),(0,X.jsxs)("div",{className:e.mediaIcons,children:[(0,X.jsx)("a",{href:"https://in.linkedin.com/in/ca-chetan-gopalkar-62456066",target:"_blank",rel:"noreferrer",children:(0,X.jsx)(G.r,{className:e.mediaIcon})}),(0,X.jsx)("a",{href:"mailto: gopalkar.ca@gmail.com",children:(0,X.jsx)(z.r,{className:e.mediaIcon})})]})]}),(0,X.jsxs)("form",{className:e.form,onSubmit:a,children:[(0,X.jsx)("label",{htmlFor:"name",children:"Name :"}),(0,X.jsx)("input",{id:"name",type:"text",name:"name",placeholder:"Name",required:!0}),(0,X.jsx)("label",{htmlFor:"email",children:"Email :"}),(0,X.jsx)("input",{id:"email",type:"email",name:"email",placeholder:"Email",required:!0}),(0,X.jsx)("label",{htmlFor:"message",children:"Message :"}),(0,X.jsx)("textarea",{id:"message",name:"message",rows:"5",placeholder:"Message",required:!0}),(0,X.jsx)("div",{children:(0,X.jsx)("button",{type:"submit",disabled:o.succeeded,children:"Send"})})]}),(0,X.jsx)("div",{className:o.succeeded?(0,q.Z)(e.response,e.open):e.response,children:"Thank you for your message. We will get back to you soon."}),(0,X.jsx)(V.Z,{})]})}},350:function(e,t,r){"use strict";r.d(t,{Z:function(){return E}});var n,o,i=r(683),a=r(791),s=r(246),c=r(765),l=r(961),d=["title","titleId"];function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function h(e,t){var r=e.title,i=e.titleId,s=f(e,d);return a.createElement("svg",u({width:265,height:265,viewBox:"0 0 265 265",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},s),r?a.createElement("title",{id:i},r):null,n||(n=a.createElement("g",{clipPath:"url(#clip0_504_135)"},a.createElement("path",{d:"M132.009 0C89.349 0 54.643 34.706 54.643 77.366C54.643 89 57.163 100.181 62.131 110.606C62.231 110.829 62.336 111.048 62.448 111.267L120.902 224.446C123.048 228.6 127.333 231.21 132.008 231.21C136.684 231.21 140.969 228.601 143.114 224.446L201.552 111.298C201.653 111.103 201.747 110.906 201.837 110.707C206.838 100.252 209.373 89.037 209.373 77.366C209.375 34.706 174.669 0 132.009 0ZM132.009 117.861C109.68 117.861 91.514 99.695 91.514 77.366C91.514 55.038 109.68 36.872 132.009 36.872C154.338 36.872 172.504 55.038 172.504 77.366C172.504 99.695 154.338 117.861 132.009 117.861Z",fill:"#7ACAE5"}),a.createElement("path",{d:"M161.81 249.018H102.208C98.065 249.018 94.708 252.375 94.708 256.518C94.708 260.661 98.065 264.018 102.208 264.018H161.81C165.953 264.018 169.31 260.661 169.31 256.518C169.31 252.375 165.952 249.018 161.81 249.018Z",fill:"#7ACAE5"}))),o||(o=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_504_135"},a.createElement("rect",{width:264.018,height:264.018,fill:"white"})))))}var p,m,y=a.forwardRef(h),v=(r.p,["title","titleId"]);function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function w(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function g(e,t){var r=e.title,n=e.titleId,o=w(e,v);return a.createElement("svg",b({width:505,height:505,viewBox:"0 0 505 505",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},o),r?a.createElement("title",{id:n},r):null,p||(p=a.createElement("g",{clipPath:"url(#clip0_504_86)"},a.createElement("path",{d:"M254.8 119.4C183.2 119.4 125.2 177 125.2 248.2C125.2 276.2 134.4 302.6 150 323.8L133.6 371.8L183.6 355.8C204 369.4 228.8 377 255.2 377C326.8 377 385.2 319.4 385.2 248.2C384.8 177 326.4 119.4 254.8 119.4ZM330.8 301.4C327.6 310.2 312 318.6 305.2 319.4C298.4 320.2 298.4 325 259.6 310.2C221.2 295 196.8 256.2 194.8 253.4C192.8 251 179.2 233 179.2 214.6C179.2 196.2 188.8 187 192.4 183.4C196 179.8 200 178.6 202.4 178.6C204.8 178.6 207.6 179 209.6 179C212 179 214.8 177.8 218 185.4C221.2 193 228.8 211.4 229.6 213.4C230.4 215.4 231.2 217.4 230 219.8C228.8 222.2 228 223.8 226.4 226.2C224.4 228.2 222.4 231 220.8 232.6C218.8 234.6 216.8 236.6 219.2 240.2C221.6 243.8 229.2 256.2 240.4 266.2C254.8 279 267.2 283 270.8 285C274.4 287 276.8 286.6 278.8 284.2C281.2 281.8 288.4 273.4 290.8 269.4C293.2 265.8 296 266.2 299.2 267.4C302.8 268.6 321.2 277.8 325.2 279.8C328.8 281.8 331.6 282.6 332.4 284.2C333.6 285 333.6 292.6 330.8 301.4Z",fill:"#7ACAE5"}),a.createElement("path",{d:"M377.6 0.199997H126.4C56.8 0.199997 0 57 0 126.6V378.2C0 447.4 56.8 504.2 126.4 504.2H378C447.6 504.2 504.4 447.4 504.4 377.8V126.6C504 57 447.2 0.199997 377.6 0.199997ZM254.8 401.4C227.6 401.4 202.4 394.6 180 382.2L94.4 409.4L122.4 327.4C108.4 304.2 100.4 277 100.4 248.2C100.4 163.4 169.6 95 254.8 95C340 95 409.2 163.4 409.2 248.2C409.2 333 340 401.4 254.8 401.4Z",fill:"#7ACAE5"}))),m||(m=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_504_86"},a.createElement("rect",{width:504.4,height:504.4,fill:"white"})))))}var x=a.forwardRef(g),j=(r.p,r(636)),C={root:(0,i.Z)((0,i.Z)((0,i.Z)({},j.qj),j.Zh),{},{paddingTop:"2rem",paddingBottom:"2rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),header:(0,i.Z)((0,i.Z)({},j.vU),{},{letterSpacing:"1px"}),container:{paddingTop:"1rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},address:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start","& div":{padding:"0.25rem 0",display:"flex",justifyContent:"center",alignItems:"center","& div":{marginBottom:"auto",padding:"0",height:"100%"}}},icon:{height:"1.5rem",width:"1.5rem",color:"var(--accent)"},text:{paddingLeft:"0.5rem",lineHeight:"1.3rem"},mediaIcons:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center","& div":{width:"50%",padding:"1rem 0",display:"flex",justifyContent:"space-around",alignItems:"center"}},mediaIcon:{height:"2rem",width:"2rem",padding:"0.2rem",borderRadius:"2rem",color:"var(--accent)",border:"1px solid var(--accent-hover)",transition:"all 0.4s","&:hover":{border:"2px double var(--accent-hover)",opacity:"0.9",transform:"rotate(360deg)",boxShadow:"2px 2px 24px var(--accent)"}},map:{height:"100%",width:"100%"},"@media only screen and (min-width: 401px) and (max-width: 960px)":{root:{paddingTop:"2rem",paddingBottom:"2rem"},container:{paddingTop:"2rem",height:"50vh",width:"100%",flexDirection:"row"},address:{minWidth:"40vw"}},"@media only screen and (min-width: 961px)":{root:{paddingTop:"2rem",paddingBottom:"2rem"},container:{paddingTop:"2rem",height:"50vh",width:"60vw",flexDirection:"row"},address:{minWidth:"300px"}}},_=r(184),A=(0,s.Z)((0,i.Z)({},C));var E=function(){var e=A();return(0,_.jsxs)("section",{className:e.root,children:[(0,_.jsx)("h2",{className:e.header,children:"Contact"}),(0,_.jsxs)("div",{className:e.container,children:[(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:e.address,children:[(0,_.jsxs)("div",{children:[(0,_.jsx)(x,{className:e.icon}),(0,_.jsx)("p",{className:e.text,children:"9421061989"})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)(c.r,{className:e.icon}),(0,_.jsx)("p",{className:e.text,children:"gopalkar.ca@gmail.com"})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{children:(0,_.jsx)(y,{className:e.icon})}),(0,_.jsxs)("p",{className:e.text,children:["Plot no.26, Cosmos Gardens,",(0,_.jsx)("br",{}),"Next to Learning Curve School,",(0,_.jsx)("br",{}),"Near Hotel Grillicious,",(0,_.jsx)("br",{}),"Baner, Pune - 411045"]})]})]}),(0,_.jsx)("div",{className:e.mediaIcons,children:(0,_.jsxs)("div",{children:[(0,_.jsx)("a",{href:"https://in.linkedin.com/in/ca-chetan-gopalkar-62456066",target:"_blank",rel:"noreferrer",children:(0,_.jsx)(l.r,{className:e.mediaIcon})}),(0,_.jsx)("a",{href:"mailto: gopalkar.ca@gmail.com",children:(0,_.jsx)(c.r,{className:e.mediaIcon})})]})})]}),(0,_.jsx)("div",{className:e.map,children:(0,_.jsx)("iframe",{title:"gopalkar-and-company-address",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.279526239389!2d73.78137176485787!3d18.561432537385176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf71c4ca6f29%3A0xdeeeda98108514be!2sGopalkar%20%26%20Company!5e0!3m2!1sen!2sin!4v1644489498352!5m2!1sen!2sin",width:"100%",height:"100%",frameBorder:"0",allow:"fullscreen",loading:"lazy"})})]})]})}},540:function(e,t,r){var n;!function(o){"use strict";function i(e){var t=e&&e.Promise||o.Promise,r=e&&e.XMLHttpRequest||o.XMLHttpRequest,n=o;return function(){var e=Object.create(n,{fetch:{value:void 0,writable:!0}});return function(e){if(!e.fetch){var n="URLSearchParams"in e,o="Symbol"in e&&"iterator"in Symbol,i="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in e,s="ArrayBuffer"in e;if(s)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=function(e){return e&&DataView.prototype.isPrototypeOf(e)},d=ArrayBuffer.isView||function(e){return e&&c.indexOf(Object.prototype.toString.call(e))>-1};y.prototype.append=function(e,t){e=h(e),t=p(t);var r=this.map[e];this.map[e]=r?r+","+t:t},y.prototype.delete=function(e){delete this.map[h(e)]},y.prototype.get=function(e){return e=h(e),this.has(e)?this.map[e]:null},y.prototype.has=function(e){return this.map.hasOwnProperty(h(e))},y.prototype.set=function(e,t){this.map[h(e)]=p(t)},y.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},y.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),m(e)},y.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),m(e)},y.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),m(e)},o&&(y.prototype[Symbol.iterator]=y.prototype.entries);var u=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];j.prototype.clone=function(){return new j(this,{body:this._bodyInit})},x.call(j.prototype),x.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new y(this.headers),url:this.url})},A.error=function(){var e=new A(null,{status:0,statusText:""});return e.type="error",e};var f=[301,302,303,307,308];A.redirect=function(e,t){if(-1===f.indexOf(t))throw new RangeError("Invalid status code");return new A(null,{status:t,headers:{location:e}})},e.Headers=y,e.Request=j,e.Response=A,e.fetch=function(e,n){return new t((function(t,o){var a=new j(e,n),s=new r;s.onload=function(){var e={status:s.status,statusText:s.statusText,headers:_(s.getAllResponseHeaders()||"")};e.url="responseURL"in s?s.responseURL:e.headers.get("X-Request-URL");var r="response"in s?s.response:s.responseText;t(new A(r,e))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(a.method,a.url,!0),"include"===a.credentials?s.withCredentials=!0:"omit"===a.credentials&&(s.withCredentials=!1),"responseType"in s&&i&&(s.responseType="blob"),a.headers.forEach((function(e,t){s.setRequestHeader(t,e)})),s.send("undefined"===typeof a._bodyInit?null:a._bodyInit)}))},e.fetch.polyfill=!0}function h(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function p(e){return"string"!==typeof e&&(e=String(e)),e}function m(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return o&&(t[Symbol.iterator]=function(){return t}),t}function y(e){this.map={},e instanceof y?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function v(e){if(e.bodyUsed)return t.reject(new TypeError("Already read"));e.bodyUsed=!0}function b(e){return new t((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function w(e){var t=new FileReader,r=b(t);return t.readAsArrayBuffer(e),r}function g(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function x(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"===typeof e)this._bodyText=e;else if(i&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(a&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(n&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(s&&i&&l(e))this._bodyArrayBuffer=g(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!s||!ArrayBuffer.prototype.isPrototypeOf(e)&&!d(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=g(e)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var e=v(this);if(e)return e;if(this._bodyBlob)return t.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return t.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return t.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?v(this)||t.resolve(this._bodyArrayBuffer):this.blob().then(w)}),this.text=function(){var e=v(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,r=b(t);return t.readAsText(e),r}(this._bodyBlob);if(this._bodyArrayBuffer)return t.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return t.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(C)}),this.json=function(){return this.text().then(JSON.parse)},this}function j(e,t){var r=(t=t||{}).body;if(e instanceof j){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new y(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new y(t.headers)),this.method=function(e){var t=e.toUpperCase();return u.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function C(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function _(e){var t=new y;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}})),t}function A(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new y(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!==typeof e?e:this),{fetch:e.fetch,Headers:e.Headers,Request:e.Request,Response:e.Response}}()}void 0===(n=function(){return i}.call(t,r,t,e))||(e.exports=n)}("undefined"!==typeof self?self:"undefined"!==typeof r.g?r.g:this)}}]);
//# sourceMappingURL=136.c01de101.chunk.js.map