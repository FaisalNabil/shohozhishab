import{_ as l}from"./currency-B1QCtbGi.js";function f(e,n=2){if(e.length===0)return"";if(e.length===1)return e[0];if(e.length>n){let t=e.slice(0,n).join(", "),o=e.length-n,i=l("+{count} other").replace("{count}",o);return`${t}, ${i}`}return e.join(", ")}export{f as j};
