(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71],{4256:(e,r,l)=>{Promise.resolve().then(l.bind(l,5179))},5179:(e,r,l)=>{"use strict";l.r(r),l.d(r,{default:()=>s});var a=l(7437),t=l(9354),n=l(211),c=l(2265),o=l(1942);function i(e){let{src:r,alt:l,className:t}=e;return(0,a.jsx)("div",{className:t,children:(0,a.jsx)("img",{src:r,alt:l,className:"mb-6 h-auto max-w-full rounded-[32px] object-cover"})})}function s(){let e=[{label:"Click Runner",value:"Click Runner"},{label:"Click com voc\xea",value:"Click com voc\xea"},{label:"Click nas ruas",value:"Click nas ruas"},{label:"Click no esporte",value:"Click no esporte"},{label:"Click sob rodas",value:"Click sob rodas"},{label:"Click no carnaval",value:"Click no carnaval"}],[r,l]=(0,c.useState)(!0),[s,u]=(0,c.useState)(!1),[m,d]=(0,c.useState)("Click Runner"),[f,p]=(0,c.useState)("Iron Man"),b=(0,c.useRef)(null),v=(0,c.useRef)([]);(0,c.useEffect)(()=>{let r=e.findIndex(e=>e.value===m);l(0===r),u(r===e.length-1)},[m]),(0,c.useEffect)(()=>{let r=e.findIndex(e=>e.value===m);if(-1!==r&&v.current[r]){var l;null===(l=v.current[r])||void 0===l||l.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}},[m]);let x=e=>{let r={"Click Runner":26,"Click com voc\xea":12,"Click nas ruas":11,"Click no esporte":"Iron Man"===f?11:8,"Click sob rodas":12,"Click no carnaval":14}[e],l={"Click Runner":"/image/galeria/click-runner/","Click com voc\xea":"/image/galeria/com-voce/","Click nas ruas":"/image/galeria/nas-ruas/","Click no esporte":"Iron Man"===f?"/image/galeria/iron-man/":"/image/galeria/bro-tour/","Click sob rodas":"/image/galeria/nas-rodas/","Click no carnaval":"/image/galeria/carnaval/"}[e],a=[];for(let e=1;e<=r;e++)a.push("".concat(l).concat(e,".webp"));return a};return(0,a.jsxs)("div",{id:"gallery",className:"flex flex-col items-center justify-center px-5 py-10 md:px-10 md:py-32",children:[(0,a.jsxs)("div",{ref:b,className:"flex w-full max-w-[80rem] flex-col",children:[(0,a.jsx)(n.E.h1,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.2,delay:.1},className:"mb-8 whitespace-nowrap text-5xl md:text-8xl",children:"Galeria"}),(0,a.jsx)("div",{className:"scrollbar-hidden mb-8 flex w-full flex-nowrap gap-2 overflow-x-auto rounded-2xl border p-1 lg:max-w-max lg:flex-wrap lg:overflow-visible",children:e.map((e,r)=>(0,a.jsx)(n.E.button,{ref:e=>{v.current[r]=e},whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>d(e.value),className:"flex-shrink-0 whitespace-nowrap rounded-xl px-4 py-2 ".concat(m===e.value?"bg-[#E7EDE7BF] text-black":"bg-white text-gray-500"),children:e.label},e.label))})]}),"Click no esporte"===m?(0,a.jsxs)("div",{className:"flex w-full max-w-[80rem] flex-col items-center justify-center gap-3",children:[(0,a.jsxs)("div",{className:"mb-3 flex max-w-max gap-2 self-start rounded-2xl border p-1",children:[(0,a.jsx)(n.E.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>p("Iron Man"),className:"whitespace-nowrap rounded-xl px-4 py-2 ".concat("Iron Man"===f?"bg-[#E7EDE7BF]":"bg-gray-0"),children:"Iron Man"}),(0,a.jsx)(n.E.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>p("Olas Bro Tour"),className:"whitespace-nowrap rounded-xl px-4 py-2 ".concat("Olas Bro Tour"===f?"bg-[#E7EDE7BF]":"bg-gray-0"),children:"Olas Pro Tour"})]}),(0,a.jsx)("div",{className:"masonry sm:masonry-sm md:masonry-md",children:x(m).map((e,r)=>(0,a.jsx)(i,{src:e,alt:"".concat(m," ").concat(r+1),className:"mb-6 h-auto max-w-full"},e))})]}):(0,a.jsx)("div",{className:"masonry sm:masonry-sm md:masonry-md",children:x(m).map((e,r)=>(0,a.jsx)(i,{src:e,alt:"".concat(m," ").concat(r+1),className:"mb-6 h-auto max-w-full"},e))}),(0,a.jsxs)("div",{className:"flex w-full items-center justify-center gap-3 py-10",children:[(0,a.jsx)("button",{type:"button",className:(0,t.cn)("flex h-8 w-8 items-center justify-center rounded-full bg-[#E0E0E3]",r&&"cursor-not-allowed opacity-50"),onClick:()=>{let r=e.findIndex(e=>e.value===m);r>0&&d(e[r-1].value)},disabled:r,children:(0,a.jsx)(o.bUI,{color:"#626263"})}),(0,a.jsx)("button",{type:"button",className:(0,t.cn)("flex h-8 w-8 items-center justify-center rounded-full bg-[#E0E0E3]",s&&"cursor-not-allowed opacity-50"),onClick:()=>{let r=e.findIndex(e=>e.value===m);r<e.length-1&&d(e[r+1].value)},disabled:s,children:(0,a.jsx)(o.Dli,{color:"#626263"})})]})]})}},9354:(e,r,l)=>{"use strict";l.d(r,{cn:()=>n});var a=l(4839),t=l(6164);function n(){for(var e=arguments.length,r=Array(e),l=0;l<e;l++)r[l]=arguments[l];return(0,t.m6)((0,a.W)(r))}},1810:(e,r,l)=>{"use strict";l.d(r,{w_:()=>u});var a=l(2265),t={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(t),c=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function i(e,r){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),l.push.apply(l,a)}return l}function s(e){for(var r=1;r<arguments.length;r++){var l=null!=arguments[r]?arguments[r]:{};r%2?i(Object(l),!0).forEach(function(r){var a,t;a=r,t=l[r],(a=function(e){var r=function(e,r){if("object"!=typeof e||!e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var a=l.call(e,r||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:r+""}(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(l,r))})}return e}function u(e){return r=>a.createElement(m,o({attr:s({},e.attr)},r),function e(r){return r&&r.map((r,l)=>a.createElement(r.tag,s({key:l},r.attr),e(r.child)))}(e.child))}function m(e){var r=r=>{var l,{attr:t,size:n,title:i}=e,u=function(e,r){if(null==e)return{};var l,a,t=function(e,r){if(null==e)return{};var l={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(r.indexOf(a)>=0)continue;l[a]=e[a]}return l}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],!(r.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}(e,c),m=n||r.size||"1em";return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,t,u,{className:l,style:s(s({color:e.color||r.color},r.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==n?a.createElement(n.Consumer,null,e=>r(e)):r(t)}}},e=>{var r=r=>e(e.s=r);e.O(0,[7699,211,4868,7130,6215,1744],()=>r(4256)),_N_E=e.O()}]);
//# sourceMappingURL=page-0dc91e9409384d48.js.map