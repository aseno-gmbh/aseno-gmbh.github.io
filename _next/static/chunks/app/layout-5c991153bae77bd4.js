(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2427:function(e,t,l){Promise.resolve().then(l.bind(l,7038))},7038:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return _}});var r=l(9268),a=l(6394),s=l.n(a),n=l(5846),i=l.n(n);let o=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("footer",{className:"wow fadeInUp relative z-10 bg-primary bg-opacity-5 pt-4 md:pt-4 lg:pt-4","data-wow-delay":".1s",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"-mx-2 flex flex-wrap",children:[(0,r.jsx)("div",{className:"w-full px-2 md:w-1/2  ",children:(0,r.jsxs)("div",{className:"mb-12 max-w-[280px] lg:mb-16",children:[(0,r.jsxs)(i(),{href:"/",className:"mb-6 inline-block",children:[(0,r.jsx)(s(),{src:"/images/logo/aseno_logo_ae.svg",alt:"logo",className:"w-full dark:hidden",width:140,height:30}),(0,r.jsx)(s(),{src:"/images/logo/aseno_logo_inv_ae.svg",alt:"logo",className:"hidden w-full dark:block",width:140,height:30})]}),(0,r.jsx)("div",{className:"bg-primary/1 py-1",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("p",{className:"text-center text-base text-body-color dark:text-white",children:(0,r.jsx)("a",{href:"https://aseno.org",rel:"nofollow noopener",children:"Aseno Ltd. 2023"})})})})]})}),(0,r.jsxs)("div",{className:"w-full px-2 md:w-1/2  ",children:[(0,r.jsx)("div",{className:"mb-12 lg:mb-16",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"/privacy",className:"mb-4 inline-block text-base font-medium text-body-color hover:text-primary",children:[" ","Privacy Policy"," "]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"/legal",className:"mb-4 inline-block text-base font-medium text-body-color hover:text-primary",children:[" ","Legal Notice"," "]})})]})}),(0,r.jsxs)("div",{className:"mb-12 text-base font-medium text-body-color",children:[(0,r.jsx)("div",{className:"row",children:"CEO Manfred Erlwein"}),(0,r.jsx)("div",{className:"row",children:"Commercial Register N\xfcrnberg No. 29588"}),(0,r.jsx)("div",{className:"row",children:"VAT DE229236568"})]})]})]})})})});var d=l(6006);let c=["light","dark"],m="(prefers-color-scheme: dark)",h="undefined"==typeof window,C=(0,d.createContext)(void 0),u={setTheme:e=>{},themes:[]},x=()=>{var e;return null!==(e=(0,d.useContext)(C))&&void 0!==e?e:u},p=e=>(0,d.useContext)(C)?d.createElement(d.Fragment,null,e.children):d.createElement(b,e),g=["light","dark"],b=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:l=!0,enableColorScheme:r=!0,storageKey:a="theme",themes:s=g,defaultTheme:n=l?"system":"light",attribute:i="data-theme",value:o,children:h,nonce:u})=>{let[x,p]=(0,d.useState)(()=>w(a,n)),[b,k]=(0,d.useState)(()=>w(a)),j=o?Object.values(o):s,N=(0,d.useCallback)(e=>{let a=e;if(!a)return;"system"===e&&l&&(a=y());let s=o?o[a]:a,d=t?v():null,m=document.documentElement;if("class"===i?(m.classList.remove(...j),s&&m.classList.add(s)):s?m.setAttribute(i,s):m.removeAttribute(i),r){let e=c.includes(n)?n:null,t=c.includes(a)?a:e;m.style.colorScheme=t}null==d||d()},[]),L=(0,d.useCallback)(e=>{p(e);try{localStorage.setItem(a,e)}catch(e){}},[e]),S=(0,d.useCallback)(t=>{let r=y(t);k(r),"system"===x&&l&&!e&&N("system")},[x,e]);(0,d.useEffect)(()=>{let e=window.matchMedia(m);return e.addListener(S),S(e),()=>e.removeListener(S)},[S]),(0,d.useEffect)(()=>{let e=e=>{e.key===a&&L(e.newValue||n)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[L]),(0,d.useEffect)(()=>{N(null!=e?e:x)},[e,x]);let _=(0,d.useMemo)(()=>({theme:x,setTheme:L,forcedTheme:e,resolvedTheme:"system"===x?b:x,themes:l?[...s,"system"]:s,systemTheme:l?b:void 0}),[x,L,e,b,l,s]);return d.createElement(C.Provider,{value:_},d.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:l,enableColorScheme:r,storageKey:a,themes:s,defaultTheme:n,attribute:i,value:o,children:h,attrs:j,nonce:u}),h)},f=(0,d.memo)(({forcedTheme:e,storageKey:t,attribute:l,enableSystem:r,enableColorScheme:a,defaultTheme:s,value:n,attrs:i,nonce:o})=>{let h="system"===s,C="class"===l?`var d=document.documentElement,c=d.classList;c.remove(${i.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${l}',s='setAttribute';`,u=a?c.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",x=(e,t=!1,r=!0)=>{let s=n?n[e]:e,i=t?e+"|| ''":`'${s}'`,o="";return a&&r&&!t&&c.includes(e)&&(o+=`d.style.colorScheme = '${e}';`),"class"===l?o+=t||s?`c.add(${i})`:"null":s&&(o+=`d[s](n,${i})`),o},p=e?`!function(){${C}${x(e)}}()`:r?`!function(){try{${C}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${h})){var t='${m}',m=window.matchMedia(t);if(m.media!==t||m.matches){${x("dark")}}else{${x("light")}}}else if(e){${n?`var x=${JSON.stringify(n)};`:""}${x(n?"x[e]":"e",!0)}}${h?"":"else{"+x(s,!1,!1)+"}"}${u}}catch(e){}}()`:`!function(){try{${C}var e=localStorage.getItem('${t}');if(e){${n?`var x=${JSON.stringify(n)};`:""}${x(n?"x[e]":"e",!0)}}else{${x(s,!1,!1)};}${u}}catch(t){}}();`;return d.createElement("script",{nonce:o,dangerouslySetInnerHTML:{__html:p}})},()=>!0),w=(e,t)=>{let l;if(!h){try{l=localStorage.getItem(e)||void 0}catch(e){}return l||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(m)),e.matches?"dark":"light"),k=()=>{let{theme:e,setTheme:t}=x();return(0,r.jsxs)("button",{onClick:()=>t("dark"===e?"light":"dark"),className:"bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-black dark:text-white md:h-14 md:w-14",children:[(0,r.jsx)("svg",{viewBox:"0 0 23 23",className:"h-5 w-5 stroke-current dark:hidden md:h-6 md:w-6",fill:"none",children:(0,r.jsx)("path",{d:"M9.55078 1.5C5.80078 1.5 1.30078 5.25 1.30078 11.25C1.30078 17.25 5.80078 21.75 11.8008 21.75C17.8008 21.75 21.5508 17.25 21.5508 13.5C13.3008 18.75 4.30078 9.75 9.55078 1.5Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,r.jsxs)("svg",{viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"hidden h-5 w-5 dark:block md:h-6 md:w-6",children:[(0,r.jsx)("mask",{id:"path-1-inside-1_977:1934",fill:"white",children:(0,r.jsx)("path",{d:"M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.65515 20.7559 3.84588 20.7559 4.04475C20.7559 4.24362 20.6769 4.43435 20.5363 4.575L18.4153 6.6975C18.3455 6.76713 18.2628 6.82235 18.1717 6.86C18.0806 6.89765 17.983 6.91699 17.8845 6.91692C17.6855 6.91678 17.4947 6.83758 17.354 6.69675C17.2844 6.62702 17.2292 6.54425 17.1915 6.45318C17.1539 6.36211 17.1345 6.26452 17.1346 6.16597C17.1348 5.96695 17.214 5.77613 17.3548 5.6355L19.4758 3.5145C19.6164 3.3739 19.8072 3.29491 20.006 3.29491C20.2049 3.29491 20.3956 3.3739 20.5363 3.5145ZM6.74678 17.304C6.88738 17.4446 6.96637 17.6354 6.96637 17.8342C6.96637 18.0331 6.88738 18.2239 6.74678 18.3645L4.62578 20.4855C4.48433 20.6221 4.29488 20.6977 4.09823 20.696C3.90158 20.6943 3.71347 20.6154 3.57442 20.4764C3.43536 20.3373 3.35648 20.1492 3.35478 19.9526C3.35307 19.7559 3.42866 19.5665 3.56528 19.425L5.68628 17.304C5.82693 17.1634 6.01766 17.0844 6.21653 17.0844C6.4154 17.0844 6.60614 17.1634 6.74678 17.304ZM20.5363 20.4855C20.3956 20.6261 20.2049 20.7051 20.006 20.7051C19.8072 20.7051 19.6164 20.6261 19.4758 20.4855L17.3548 18.3645C17.2182 18.223 17.1426 18.0336 17.1443 17.8369C17.146 17.6403 17.2249 17.4522 17.3639 17.3131C17.503 17.1741 17.6911 17.0952 17.8877 17.0935C18.0844 17.0918 18.2738 17.1674 18.4153 17.304L20.5363 19.425C20.6769 19.5656 20.7559 19.7564 20.7559 19.9552C20.7559 20.1541 20.6769 20.3449 20.5363 20.4855ZM6.74678 6.6975C6.60614 6.8381 6.4154 6.91709 6.21653 6.91709C6.01766 6.91709 5.82693 6.8381 5.68628 6.6975L3.56528 4.575C3.49365 4.50582 3.43651 4.42306 3.39721 4.33155C3.3579 4.24005 3.33721 4.14164 3.33634 4.04205C3.33548 3.94247 3.35445 3.84371 3.39216 3.75153C3.42988 3.65936 3.48557 3.57562 3.55598 3.5052C3.6264 3.43478 3.71014 3.37909 3.80232 3.34138C3.89449 3.30367 3.99325 3.2847 4.09283 3.28556C4.19242 3.28643 4.29083 3.30712 4.38233 3.34642C4.47384 3.38573 4.5566 3.44287 4.62578 3.5145L6.74678 5.6355C6.81663 5.70517 6.87204 5.78793 6.90985 5.87905C6.94766 5.97017 6.96712 6.06785 6.96712 6.1665C6.96712 6.26515 6.94766 6.36283 6.90985 6.45395C6.87204 6.54507 6.81663 6.62783 6.74678 6.6975Z"})}),(0,r.jsx)("path",{d:"M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.65515 20.7559 3.84588 20.7559 4.04475C20.7559 4.24362 20.6769 4.43435 20.5363 4.575L18.4153 6.6975C18.3455 6.76713 18.2628 6.82235 18.1717 6.86C18.0806 6.89765 17.983 6.91699 17.8845 6.91692C17.6855 6.91678 17.4947 6.83758 17.354 6.69675C17.2844 6.62702 17.2292 6.54425 17.1915 6.45318C17.1539 6.36211 17.1345 6.26452 17.1346 6.16597C17.1348 5.96695 17.214 5.77613 17.3548 5.6355L19.4758 3.5145C19.6164 3.3739 19.8072 3.29491 20.006 3.29491C20.2049 3.29491 20.3956 3.3739 20.5363 3.5145ZM6.74678 17.304C6.88738 17.4446 6.96637 17.6354 6.96637 17.8342C6.96637 18.0331 6.88738 18.2239 6.74678 18.3645L4.62578 20.4855C4.48433 20.6221 4.29488 20.6977 4.09823 20.696C3.90158 20.6943 3.71347 20.6154 3.57442 20.4764C3.43536 20.3373 3.35648 20.1492 3.35478 19.9526C3.35307 19.7559 3.42866 19.5665 3.56528 19.425L5.68628 17.304C5.82693 17.1634 6.01766 17.0844 6.21653 17.0844C6.4154 17.0844 6.60614 17.1634 6.74678 17.304ZM20.5363 20.4855C20.3956 20.6261 20.2049 20.7051 20.006 20.7051C19.8072 20.7051 19.6164 20.6261 19.4758 20.4855L17.3548 18.3645C17.2182 18.223 17.1426 18.0336 17.1443 17.8369C17.146 17.6403 17.2249 17.4522 17.3639 17.3131C17.503 17.1741 17.6911 17.0952 17.8877 17.0935C18.0844 17.0918 18.2738 17.1674 18.4153 17.304L20.5363 19.425C20.6769 19.5656 20.7559 19.7564 20.7559 19.9552C20.7559 20.1541 20.6769 20.3449 20.5363 20.4855ZM6.74678 6.6975C6.60614 6.8381 6.4154 6.91709 6.21653 6.91709C6.01766 6.91709 5.82693 6.8381 5.68628 6.6975L3.56528 4.575C3.49365 4.50582 3.43651 4.42306 3.39721 4.33155C3.3579 4.24005 3.33721 4.14164 3.33634 4.04205C3.33548 3.94247 3.35445 3.84371 3.39216 3.75153C3.42988 3.65936 3.48557 3.57562 3.55598 3.5052C3.6264 3.43478 3.71014 3.37909 3.80232 3.34138C3.89449 3.30367 3.99325 3.2847 4.09283 3.28556C4.19242 3.28643 4.29083 3.30712 4.38233 3.34642C4.47384 3.38573 4.5566 3.44287 4.62578 3.5145L6.74678 5.6355C6.81663 5.70517 6.87204 5.78793 6.90985 5.87905C6.94766 5.97017 6.96712 6.06785 6.96712 6.1665C6.96712 6.26515 6.94766 6.36283 6.90985 6.45395C6.87204 6.54507 6.81663 6.62783 6.74678 6.6975Z",fill:"black",stroke:"white",strokeWidth:"2",mask:"url(#path-1-inside-1_977:1934)"})]})]})};var j=[{id:1,title:"Home",path:"/",newTab:!1},{id:2,title:"Services",path:"/about",newTab:!1},{id:3,title:"Contact",path:"/contact",newTab:!1},{id:4,title:"Career",newTab:!1,submenu:[{id:44,title:"Senior SW Engineer",path:"/blog-senior",newTab:!1},{id:45,title:"Junior SW Engineer",path:"/blog-junior",newTab:!1}]}];let N=()=>{let[e,t]=(0,d.useState)(!1),l=()=>{t(!e)},[a,n]=(0,d.useState)(!1),o=()=>{window.scrollY>=80?n(!0):n(!1)};(0,d.useEffect)(()=>{window.addEventListener("scroll",o)});let[c,m]=(0,d.useState)(-1),h=e=>{c===e?m(-1):m(e)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{className:"header top-0 left-0 z-40 flex w-full items-center bg-transparent ".concat(a?"!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20":"absolute"),children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"relative -mx-4 flex items-center justify-between",children:[(0,r.jsx)("div",{className:"w-60 max-w-full px-4 xl:mr-12",children:(0,r.jsxs)(i(),{href:"/",className:"header-logo block w-full ".concat(a?"py-5 lg:py-2":"py-8"," "),children:[(0,r.jsx)(s(),{src:"/images/logo/aseno_logo_ae.svg",alt:"logo",width:140,height:30,className:"w-full dark:hidden"}),(0,r.jsx)(s(),{src:"/images/logo/aseno_logo_inv_ae.svg",alt:"logo",width:140,height:30,className:"hidden w-full dark:block"})]})}),(0,r.jsxs)("div",{className:"flex w-full items-center justify-between px-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{onClick:l,id:"navbarToggler","aria-label":"Mobile Menu",className:"absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden",children:[(0,r.jsx)("span",{className:"relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ".concat(e?" top-[7px] rotate-45":" ")}),(0,r.jsx)("span",{className:"relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ".concat(e?"opacity-0 ":" ")}),(0,r.jsx)("span",{className:"relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ".concat(e?" top-[-8px] -rotate-45":" ")})]}),(0,r.jsx)("nav",{id:"navbarCollapse",className:"navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ".concat(e?"visibility top-full opacity-100":"invisible top-[120%] opacity-0"),children:(0,r.jsx)("ul",{className:"block lg:flex lg:space-x-12",children:j.map((e,t)=>(0,r.jsx)("li",{className:"group relative",children:e.path?(0,r.jsx)(i(),{href:e.path,className:"flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0",children:e.title}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("a",{onClick:()=>h(t),className:"flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0",children:[e.title,(0,r.jsx)("span",{className:"pl-3",children:(0,r.jsx)("svg",{width:"15",height:"14",viewBox:"0 0 15 14",children:(0,r.jsx)("path",{d:"M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z",fill:"currentColor"})})})]}),(0,r.jsx)("div",{className:"submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ".concat(c===t?"block":"hidden"),children:e.submenu.map(e=>(0,r.jsx)(i(),{href:e.path,className:"block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3",children:e.title},e.id))})]})},e.id))})})]}),(0,r.jsxs)("div",{className:"flex items-center justify-end pr-16 lg:pr-0",children:[(0,r.jsx)(i(),{href:"/signin",className:"hidden py-3 px-7 text-base font-bold text-dark hover:opacity-70 dark:text-white md:block",children:"Sign In"}),(0,r.jsx)(i(),{href:"/signup",className:"ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9",children:"Sign Up"}),(0,r.jsx)("div",{children:(0,r.jsx)(k,{})})]})]})]})})})})};function L(){let[e,t]=(0,d.useState)(!1),l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(0,d.useEffect)(()=>{let e=()=>{window.pageYOffset>300?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,r.jsx)("div",{className:"fixed bottom-8 right-8 z-[99]",children:e&&(0,r.jsx)("div",{onClick:l,name:"scroll to top","aria-label":"scroll to top",className:"flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp",children:(0,r.jsx)("span",{className:"mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"})})})}function S(e){let{children:t}=e;return(0,r.jsx)(p,{attribute:"class",enableSystem:"false",defaultTheme:"dark",children:t})}function _(e){let{children:t}=e;return(0,r.jsxs)("html",{suppressHydrationWarning:!0,lang:"en",children:[(0,r.jsx)("head",{}),(0,r.jsx)("body",{className:"dark:bg-black",children:(0,r.jsxs)(S,{children:[(0,r.jsx)(N,{}),t,(0,r.jsx)(o,{}),(0,r.jsx)(L,{})]})})]})}l(9939),l(233)},9939:function(){},233:function(){},3177:function(e,t,l){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=l(6006),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,l){var r,s={},d=null,c=null;for(r in void 0!==l&&(d=""+l),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)n.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:c,props:s,_owner:i.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},9268:function(e,t,l){"use strict";e.exports=l(3177)},6394:function(e,t,l){e.exports=l(2011)},5846:function(e,t,l){e.exports=l(414)}},function(e){e.O(0,[414,11,667,139,744],function(){return e(e.s=2427)}),_N_E=e.O()}]);