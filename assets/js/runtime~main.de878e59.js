(()=>{"use strict";var e,t,r,o,n,a={},i={};function c(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,c),r.loaded=!0,r.exports}c.m=a,c.c=i,e=[],c.O=(t,r,o,n)=>{if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],n=e[f][2];for(var i=!0,u=0;u<r.length;u++)(!1&n||a>=n)&&Object.keys(c.O).every((e=>c.O[e](r[u])))?r.splice(u--,1):(i=!1,n<a&&(a=n));if(i){e.splice(f--,1);var l=o();void 0!==l&&(t=l)}}return t}n=n||0;for(var f=e.length;f>0&&e[f-1][2]>n;f--)e[f]=e[f-1];e[f]=[r,o,n]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);c.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&o&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,c.d(n,a),n},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>"assets/js/"+{53:"935f2afb",129:"0870db4e",179:"413aba37",299:"b41bce69",514:"1be78505",592:"common",671:"0e384e19",918:"17896441"}[e]+"."+{53:"cb249a62",129:"48a24a4c",179:"23a2a483",299:"83a752c1",514:"5090bd90",592:"a0ad04ea",671:"a5b646be",918:"3056c05f"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="chatgpt-shortcut:",c.l=(e,t,r,a)=>{if(o[e])o[e].push(t);else{var i,u;if(void 0!==r)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+r){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",n+r),i.src=e),o[e]=[t];var s=(t,r)=>{i.onerror=i.onload=null,clearTimeout(b);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/chatgpt/",c.gca=function(e){return e={17896441:"918","935f2afb":"53","0870db4e":"129","413aba37":"179",b41bce69:"299","1be78505":"514",common:"592","0e384e19":"671"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(t,r)=>{var o=c.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=c.p+c.u(t),i=new Error;c.l(a,(r=>{if(c.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,a=r[0],i=r[1],u=r[2],l=0;if(a.some((t=>0!==e[t]))){for(o in i)c.o(i,o)&&(c.m[o]=i[o]);if(u)var f=u(c)}for(t&&t(r);l<a.length;l++)n=a[l],c.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return c.O(f)},r=self.webpackChunkchatgpt_shortcut=self.webpackChunkchatgpt_shortcut||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();