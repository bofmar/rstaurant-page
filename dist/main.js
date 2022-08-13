(()=>{"use strict";var n={434:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=i},890:(n,e,t)=>{t.d(e,{Z:()=>m});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),c=t.n(s),d=new URL(t(905),t.b),p=new URL(t(867),t.b),l=i()(o()),u=c()(d),f=c()(p);l.push([n.id,'/* * * * *\n  Global\n* * * * */\n@font-face {\n\n  font-family: "Japanese";\n  src: url('+u+') format("woff");\n  font-weight: 600;\n  font-style: normal;\n\n}\n\n/* * * * *\n  Banner\n* * * * */\nheader{\n  height: 10vh;\n  background-color: #333;  \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.buttons-container{\n  display: flex;\n  gap: 5px;\n}\n\n/* * * * * *\n  Homepage\n* * * * * */\n\n.homepage{\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.homepage > img{\n  width: 100vw;\n  height: 60vh;\n}\n\n.homepage > div{\n  height: 50vh;\n  width: 50vw;\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas: \n    "kids text award1"\n    "parties text award2";\n  justify-items: center;\n  padding-top: 10px;\n}\n\n.kids{\n  grid-area: kids;\n}\n\n.parties{\n  grid-area: parties;\n}\n\n.award1{\n  grid-area: award1;\n}\n\n.award2{\n  grid-area: award2;\n}\n\n.homepage > div > div{\n  grid-area: text;\n  display: flex;\n  line-height: 1.5rem;\n  gap: 10px;\n  flex-direction: column;\n  width: 60ch;\n}\n\n.homepage h1{\n  font-size: 1.5rem;\n  font-weight: bolder;\n  border-bottom: #333 solid 1px;\n  padding-bottom: 10px;\n}\n\n.homepage h2{\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.homepage h1,\n.homepage h2{\n  color: #555;\n}\n\n/* * * *\n  Menu\n* * * */\n\n.menu{\n  background: url('+f+');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 90vh;\n  display:grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  justify-items: center;\n  column-gap: 5vw;\n}\n\n.menu > :nth-child(2n - 1){\n  justify-self: end;\n}\n\n.menu > :nth-child(2n){\n  justify-self: start;\n}\n\n.menu-item{\n  width: 60%;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n.menu-item img{\n  height: 180px;\n  width: 200px;\n}\n\n.menu-text{\n  display: grid;\n  grid-template-columns: 200px 80px;\n  gap: 30px;\n  justify-content: space-between;\n}\n\n.menu-text h1,\n.menu-text h2{\n  font-size: 1.5rem;\n  font-family: "Japanese";\n}\n\n.menu-text h1{\n  position: relative;\n  width: 100%;\n}\n\n.menu-item h2{\n  color: rgb(255, 103, 103);\n  justify-self: center;\n}\n\n.menu-text > h1::after{\n  content: "";\n  background-color: rgb(255, 103, 103);\n  position: absolute;\n  left:0;\n  bottom: -7px;\n  width: 15vw;\n  height: 1px;\n}\n\n.menu-text p{\n  font-size: 1.2rem;\n  grid-column: 1/3;\n}',""]);const m=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var p=t(a[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},905:(n,e,t)=>{n.exports=t.p+"af4754642d7bf3589c3c.woff"},867:(n,e,t)=>{n.exports=t.p+"2555b2dfb69a2e2faa25.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"27e56b0bb5d134f27bcb.png";function e(n,e,t){const r=document.createElement(n);r.innerText=t,e.appendChild(r)}function r(n){const e=document.createElement("button");return e.setAttribute("id",n),e.innerText=n.toUpperCase().split("-")[0],e}t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p;const o=t.p+"74804ea924f665666072.png";var a=t(379),i=t.n(a),s=t(795),c=t.n(s),d=t(569),p=t.n(d),l=t(565),u=t.n(l),f=t(216),m=t.n(f),h=t(589),g=t.n(h),b=t(434),v={};v.styleTagTransform=g(),v.setAttributes=u(),v.insert=p().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=m(),i()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;var y=t(890),x={};x.styleTagTransform=g(),x.setAttributes=u(),x.insert=p().bind(null,"head"),x.domAPI=c(),x.insertStyleElement=m(),i()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals,function(){const t=document.getElementById("content");t.appendChild(function(){const e=document.createElement("header"),t=new Image;t.src=n,e.appendChild(t);const o=document.createElement("div");o.classList.add("buttons-container");const a=r("home-button"),i=r("menu-button"),s=r("contact-button");return o.appendChild(a),o.appendChild(i),o.appendChild(s),e.appendChild(o),e}()),t.appendChild(function(){const n=document.createElement("div");n.classList.add("contact-page");const t=document.createElement("div");t.classList.add("contact-address-wrapper");const r=function(n){const e=document.createElement("div");return e.classList.add("address-text-wrapper"),e}();e("h1",r,"Address"),e("p",r,"123 Fake Street Avenue"),e("p",r,"Paphos, CY"),e("p",r,"66357"),t.appendChild(r),function(n,e,t){const r=new Image;r.src=n,r.classList.add("map"),e.appendChild(r)}(o,t);const a=document.createElement("div");a.classList.add("contact-info-wrapper");const i=document.createElement("footer");return n.appendChild(t),n.appendChild(a),n.appendChild(i),n}())}()})()})();