function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequirea730;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequirea730=i),i.register("hqokU",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("hqokU").register(JSON.parse('{"9BLYW":"index.650adc21.js","foihl":"github-mark-black.1e0cff47.svg","5VjFl":"index.131823d5.css"}'));const l={};function s(e){l.context=e}const u=(e,t)=>e===t,a=(Symbol("solid-proxy"),Symbol("solid-track")),c=(Symbol("solid-dev-component"),{equals:u});let f=null,d=Q;const p={},h={owned:null,cleanups:null,context:null,owner:null},[g,v]=q(!1);var m=null;let b,y=null,w=null,S=null,x=null,k=null,A=null,_=null,C=0;function N(e,t){const n=x,r=m,o=0===e.length?h:{owned:null,cleanups:null,context:null,owner:t||r};m=o,x=null;try{return K((()=>e((()=>J(o)))),!0)}finally{x=n,m=r}}function q(e,t){t=t?Object.assign({},c,t):c;const n={value:e,observers:null,observerSlots:null,pending:p,comparator:t.equals||void 0};return[R.bind(n),e=>("function"==typeof e&&(e=y&&y.running&&y.sources.has(n)?e(n.pending!==p?n.pending:n.tValue):e(n.pending!==p?n.pending:n.value)),H(n,e))]}function $(e,t,n){const r=I(e,t,!0,1);w&&y&&y.running?A.push(r):U(r)}function O(e,t,n){const r=I(e,t,!1,1);w&&y&&y.running?A.push(r):U(r)}function T(e,t,n){d=W;const r=I(e,t,!1,1),o=b&&te(m,b.id);o&&(r.suspense=o),r.user=!0,_?_.push(r):U(r)}function L(e,t,n){n=n?Object.assign({},c,n):c;const r=I(e,t,!0,0);return r.pending=p,r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,w&&y&&y.running?(r.tState=1,A.push(r)):U(r),R.bind(r)}function E(e,t,n){2===arguments.length?"object"==typeof t&&(n=t,t=e,e=!0):1===arguments.length&&(t=e,e=!0),n||(n={});const r=new Set,[o,i]=q(n.initialValue),[s,u]=q(void 0,{equals:!1}),[a,c]=q(!1),[f,d]=q();let p,h=null,g=null,v=null,w=!1,S=!1,k="initialValue"in n,A="function"==typeof e&&L(e);function C(e,t,r,o){return h===e&&(h=null,k=!0,g&&(e===g||t===g)&&n.onHydrated&&queueMicrotask((()=>n.onHydrated(o,{value:t}))),g=null,d(p=r),y&&e&&w?(y.promises.delete(e),w=!1,K((()=>{y.running=!0,y.promises.size||(_.push.apply(_,y.effects),y.effects=[]),N(t)}),!1)):N(t)),t}function N(e){M((()=>{i((()=>e)),c(!1);for(const e of r.keys())e.decrement();r.clear()}))}function O(){const e=b&&te(m,b.id),t=o();if(p)throw p;return x&&!x.user&&e&&$((()=>{s(),h&&(e.resolved&&y?y.promises.add(h):r.has(e)||(e.increment(),r.add(e)))})),t}function T(n=!0){if(n&&S)return;S=!1,d(p=void 0);const r=A?A():e;if(w=y&&y.running,null==r||!1===r)return void C(h,P(o));y&&h&&y.promises.delete(h);const i=g||P((()=>t(r,{value:o(),refetching:n})));return"object"==typeof i&&"then"in i?(h=i,S=!0,queueMicrotask((()=>S=!1)),M((()=>{c(!0),u()})),i.then((e=>C(i,e,void 0,r)),(e=>C(i,e,e)))):(C(h,i),i)}return l.context&&(v=`${l.context.id}${l.context.count++}`,l.load&&(g=l.load(v))),Object.defineProperties(O,{loading:{get:()=>a()},error:{get:()=>f()},latest:{get(){if(!k)return O();if(p)throw p;return o()}}}),A?$((()=>T(!1))):T(!1),[O,{refetch:T,mutate:i}]}function M(e){if(k)return e();let t;const n=k=[];try{t=e()}finally{k=null}return K((()=>{for(let e=0;e<n.length;e+=1){const t=n[e];if(t.pending!==p){const e=t.pending;t.pending=p,H(t,e)}}}),!1),t}function P(e){let t,n=x;return x=null,t=e(),x=n,t}function j(e,t,n){const r=Array.isArray(e);let o,i=n&&n.defer;return n=>{let l;if(r){l=Array(e.length);for(let t=0;t<e.length;t++)l[t]=e[t]()}else l=e();if(i)return void(i=!1);const s=P((()=>t(l,o,n)));return o=l,s}}function B(e){return null===m||(null===m.cleanups?m.cleanups=[e]:m.cleanups.push(e)),e}function V(e){if(y&&y.running)return e(),y.done;const t=x,n=m;return Promise.resolve().then((()=>{let r;return x=t,m=n,(w||b)&&(r=y||(y={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise((e=>r.resolve=e))),r.running=!0),M(e),x=m=null,r?r.done:void 0}))}function F(e){const t=Symbol("context");return{id:t,Provider:re(t),defaultValue:e}}function D(e){const t=L(e);return L((()=>ne(t())))}function R(){const e=y&&y.running;if(this.sources&&(!e&&this.state||e&&this.tState)){const t=A;A=null,!e&&1===this.state||e&&1===this.tState?U(this):Y(this),A=t}if(x){const e=this.observers?this.observers.length:0;x.sources?(x.sources.push(this),x.sourceSlots.push(e)):(x.sources=[this],x.sourceSlots=[e]),this.observers?(this.observers.push(x),this.observerSlots.push(x.sources.length-1)):(this.observers=[x],this.observerSlots=[x.sources.length-1])}return e&&y.sources.has(this)?this.tValue:this.value}function H(e,t,n){if(k)return e.pending===p&&k.push(e),e.pending=t,t;if(e.comparator)if(y&&y.running&&y.sources.has(e)){if(e.comparator(e.tValue,t))return t}else if(e.comparator(e.value,t))return t;let r=!1;return y?(r=y.running,(r||!n&&y.sources.has(e))&&(y.sources.add(e),e.tValue=t),r||(e.value=t)):e.value=t,e.observers&&e.observers.length&&K((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];r&&y.disposed.has(n)||((r&&!n.tState||!r&&!n.state)&&(n.pure?A.push(n):_.push(n),n.observers&&X(n)),r?n.tState=1:n.state=1)}if(A.length>1e6)throw A=[],new Error}),!1),t}function U(e){if(!e.fn)return;J(e);const t=m,n=x,r=C;x=m=e,G(e,y&&y.running&&y.sources.has(e)?e.tValue:e.value,r),y&&!y.running&&y.sources.has(e)&&queueMicrotask((()=>{K((()=>{y&&(y.running=!0),G(e,e.tValue,r)}),!1)})),x=n,m=t}function G(e,t,n){let r;try{r=e.fn(t)}catch(e){ee(e)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?H(e,r,!0):y&&y.running&&e.pure?(y.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function I(e,t,n,r=1,o){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:n};if(y&&y.running&&(i.state=0,i.tState=r),null===m||m!==h&&(y&&y.running&&m.pure?m.tOwned?m.tOwned.push(i):m.tOwned=[i]:m.owned?m.owned.push(i):m.owned=[i]),S){const[e,t]=q(void 0,{equals:!1}),n=S(i.fn,t);B((()=>n.dispose()));const r=()=>V(t).then((()=>o.dispose())),o=S(i.fn,r);i.fn=t=>(e(),y&&y.running?o.track(t):n.track(t))}return i}function z(e){const t=y&&y.running;if(!t&&0===e.state||t&&0===e.tState)return;if(!t&&2===e.state||t&&2===e.tState)return Y(e);if(e.suspense&&P(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<C);){if(t&&y.disposed.has(e))return;(!t&&e.state||t&&e.tState)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let t=e,o=n[r+1];for(;(t=t.owner)&&t!==o;)if(y.disposed.has(t))return}if(!t&&1===e.state||t&&1===e.tState)U(e);else if(!t&&2===e.state||t&&2===e.tState){const t=A;A=null,Y(e,n[0]),A=t}}}function K(e,t){if(A)return e();let n=!1;t||(A=[]),_?n=!0:_=[],C++;try{const t=e();return function(e){A&&(w&&y&&y.running?function(e){for(let t=0;t<e.length;t++){const n=e[t],r=y.queue;r.has(n)||(r.add(n),w((()=>{r.delete(n),K((()=>{y.running=!0,z(n),r.size||(_.push.apply(_,y.effects),y.effects=[])}),!1),y&&(y.running=!1)})))}}(A):Q(A),A=null);if(e)return;let t;if(y&&y.running){if(y.promises.size||y.queue.size)return y.running=!1,y.effects.push.apply(y.effects,_),_=null,void v(!0);const e=y.sources;t=y.resolve,_.forEach((e=>{"tState"in e&&(e.state=e.tState),delete e.tState})),y=null,M((()=>{e.forEach((e=>{if(e.value=e.tValue,e.owned)for(let t=0,n=e.owned.length;t<n;t++)J(e.owned[t]);e.tOwned&&(e.owned=e.tOwned),delete e.tValue,delete e.tOwned,e.tState=0})),v(!1)}))}_.length?M((()=>{d(_),_=null})):_=null;t&&t()}(n),t}catch(e){ee(e)}finally{A=null,n||(_=null)}}function Q(e){for(let t=0;t<e.length;t++)z(e[t])}function W(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:z(r)}l.context&&s();const r=e.length;for(t=0;t<n;t++)z(e[t]);for(t=r;t<e.length;t++)z(e[t])}function Y(e,t){const n=y&&y.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];o.sources&&(!n&&1===o.state||n&&1===o.tState?o!==t&&z(o):(!n&&2===o.state||n&&2===o.tState)&&Y(o,t))}}function X(e){const t=y&&y.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!t&&!r.state||t&&!r.tState)&&(t?r.tState=2:r.state=2,r.pure?A.push(r):_.push(r),r.observers&&X(r))}}function J(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(y&&y.running&&e.pure){if(e.tOwned){for(t=0;t<e.tOwned.length;t++)J(e.tOwned[t]);delete e.tOwned}Z(e,!0)}else if(e.owned){for(t=0;t<e.owned.length;t++)J(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}y&&y.running?e.tState=0:e.state=0,e.context=null}function Z(e,t){if(t||(e.tState=0,y.disposed.add(e)),e.owned)for(let t=0;t<e.owned.length;t++)Z(e.owned[t])}function ee(e){const t=f&&te(m,f);if(!t)throw e;t.forEach((t=>t(e)))}function te(e,t){return e?e.context&&void 0!==e.context[t]?e.context[t]:te(e.owner,t):void 0}function ne(e){if("function"==typeof e&&!e.length)return ne(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ne(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function re(e){return function(t){let n;return $((()=>n=P((()=>(m.context={[e]:t.value},D((()=>t.children))))))),n}}const oe=Symbol("fallback");function ie(e){for(let t=0;t<e.length;t++)e[t]()}let le=!1;function se(e,t){if(le&&l.context){const n=l.context;s({...l.context,id:`${l.context.id}${l.context.count++}-`,count:0});const r=P((()=>e(t||{})));return s(n),r}return P((()=>e(t||{})))}function ue(e){const t="fallback"in e&&{fallback:()=>e.fallback};return L(function(e,t,n={}){let r=[],o=[],i=[],l=0,s=t.length>1?[]:null;return B((()=>ie(i))),()=>{let u,c,f=e()||[];return f[a],P((()=>{let e,t,a,p,h,g,v,m,b,y=f.length;if(0===y)0!==l&&(ie(i),i=[],r=[],o=[],l=0,s&&(s=[])),n.fallback&&(r=[oe],o[0]=N((e=>(i[0]=e,n.fallback()))),l=1);else if(0===l){for(o=new Array(y),c=0;c<y;c++)r[c]=f[c],o[c]=N(d);l=y}else{for(a=new Array(y),p=new Array(y),s&&(h=new Array(y)),g=0,v=Math.min(l,y);g<v&&r[g]===f[g];g++);for(v=l-1,m=y-1;v>=g&&m>=g&&r[v]===f[m];v--,m--)a[m]=o[v],p[m]=i[v],s&&(h[m]=s[v]);for(e=new Map,t=new Array(m+1),c=m;c>=g;c--)b=f[c],u=e.get(b),t[c]=void 0===u?-1:u,e.set(b,c);for(u=g;u<=v;u++)b=r[u],c=e.get(b),void 0!==c&&-1!==c?(a[c]=o[u],p[c]=i[u],s&&(h[c]=s[u]),c=t[c],e.set(b,c)):i[u]();for(c=g;c<y;c++)c in a?(o[c]=a[c],i[c]=p[c],s&&(s[c]=h[c],s[c](c))):o[c]=N(d);o=o.slice(0,l=y),r=f.slice(0)}return o}));function d(e){if(i[c]=e,s){const[e,n]=q(c);return s[c]=n,t(f[c],e)}return t(f[c])}}}((()=>e.each),e.children,t||void 0))}function ae(e){let t=!1;const n=L((()=>e.when),void 0,{equals:(e,n)=>t?e===n:!e==!n});return L((()=>{const r=n();if(r){const n=e.children;return(t="function"==typeof n&&n.length>0)?P((()=>n(r))):n}return e.fallback}))}F();new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline","allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"]),new Set(["innerHTML","textContent","innerText","children"]),new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),new Set(["html","base","head","link","meta","style","title","body","address","article","aside","footer","header","main","nav","section","body","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","img","map","track","video","embed","iframe","object","param","picture","portal","source","svg","math","canvas","noscript","script","del","ins","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","menu","summary","details","slot","template","acronym","applet","basefont","bgsound","big","blink","center","content","dir","font","frame","frameset","hgroup","image","keygen","marquee","menuitem","nobr","noembed","noframes","plaintext","rb","rtc","shadow","spacer","strike","tt","xmp","a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","portal","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp","input"]);function ce(e,t,n){let r;return N((o=>{r=o,t===document?e():ge(t,e(),t.firstChild?null:void 0,n)})),()=>{r(),t.textContent=""}}function fe(e,t,n){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function de(e,t=window.document){const n=t._$DX_DELEGATE||(t._$DX_DELEGATE=new Set);for(let r=0,o=e.length;r<o;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,ve))}}function pe(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function he(e,t){null==t?e.removeAttribute("class"):e.className=t}function ge(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return me(e,t,r,n);O((r=>me(e,t(),r,n)),r)}function ve(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n||document}),l.registry&&!l.done&&(l.done=!0,document.querySelectorAll("[id^=pl-]").forEach((e=>e.remove())));null!==n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(void 0!==o?r(o,e):r(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function me(e,t,n,r,o){for(l.context&&!n&&(n=[...e.childNodes]);"function"==typeof n;)n=n();if(t===n)return n;const i=typeof t,s=void 0!==r;if(e=s&&n[0]&&n[0].parentNode||e,"string"===i||"number"===i){if(l.context)return n;if("number"===i&&(t=t.toString()),s){let o=n[0];o&&3===o.nodeType?o.data=t:o=document.createTextNode(t),n=we(e,n,r,o)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t}else if(null==t||"boolean"===i){if(l.context)return n;n=we(e,n,r)}else{if("function"===i)return O((()=>{let o=t();for(;"function"==typeof o;)o=o();n=me(e,o,n,r)})),()=>n;if(Array.isArray(t)){const i=[];if(be(i,t,o))return O((()=>n=me(e,i,n,r,!0))),()=>n;if(l.context)for(let e=0;e<i.length;e++)if(i[e].parentNode)return n=i;if(0===i.length){if(n=we(e,n,r),s)return n}else Array.isArray(n)?0===n.length?ye(e,i,r):function(e,t,n){let r=n.length,o=t.length,i=r,l=0,s=0,u=t[o-1].nextSibling,a=null;for(;l<o||s<i;)if(t[l]!==n[s]){for(;t[o-1]===n[i-1];)o--,i--;if(o===l){const t=i<r?s?n[s-1].nextSibling:n[i-s]:u;for(;s<i;)e.insertBefore(n[s++],t)}else if(i===s)for(;l<o;)a&&a.has(t[l])||t[l].remove(),l++;else if(t[l]===n[i-1]&&n[s]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[s++],t[l++].nextSibling),e.insertBefore(n[--i],r),t[o]=n[i]}else{if(!a){a=new Map;let e=s;for(;e<i;)a.set(n[e],e++)}const r=a.get(t[l]);if(null!=r)if(s<r&&r<i){let u,c=l,f=1;for(;++c<o&&c<i&&null!=(u=a.get(t[c]))&&u===r+f;)f++;if(f>r-s){const o=t[l];for(;s<r;)e.insertBefore(n[s++],o)}else e.replaceChild(n[s++],t[l++])}else l++;else t[l++].remove()}}else l++,s++}(e,n,i):(n&&we(e),ye(e,i));n=i}else if(t instanceof Node){if(l.context&&t.parentNode)return n=s?[t]:t;if(Array.isArray(n)){if(s)return n=we(e,n,r,t);we(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}}return n}function be(e,t,n){let r=!1;for(let o=0,i=t.length;o<i;o++){let i,l=t[o];if(l instanceof Node)e.push(l);else if(null==l||!0===l||!1===l);else if(Array.isArray(l))r=be(e,l)||r;else if("string"==(i=typeof l))e.push(document.createTextNode(l));else if("function"===i)if(n){for(;"function"==typeof l;)l=l();r=be(e,Array.isArray(l)?l:[l])||r}else e.push(l),r=!0;else e.push(document.createTextNode(l.toString()))}return r}function ye(e,t,n){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function we(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(o!==l){const t=l.parentNode===e;r||i?t&&l.remove():t?e.replaceChild(o,l):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}const Se=fe("<select></select>"),xe=fe("<option></option>");var ke=e=>(()=>{const t=Se.cloneNode(!0);return t.addEventListener("change",(t=>e.setLanguage(t.target.value))),ge(t,se(ue,{get each(){return[...e.available]},children:t=>(()=>{const n=xe.cloneNode(!0);return n.value=t,ge(n,t),O((()=>n.selected=e.selected==t)),n})()})),t})();const Ae=e=>e>65535,_e=[[688,767],[734,734],[736,745],[735,735],[746,767],[768,879],[6832,6911],[7616,7679],[8400,8447],[65056,65071],[768,879],[810,810],[838,847],[860,879],[6832,6846],[7616,7679],[8400,8447],[65056,65071]].map((e=>((e,t)=>n=>e<=n&&n<=t)(...e))),Ce=e=>_e.some((t=>t(e))),Ne=e=>{return(t=((e="")=>{const t=[];let n,r=0;for(;void 0!==(n=e.codePointAt(r));)for(Ae(n)?(t.push(String.fromCodePoint(n)),r+=2):(t.push(String.fromCodePoint(n)),r+=1);void 0!==(n=e.codePointAt(r))&&Ce(n);)t[t.length-1]+=String.fromCodePoint(n),r+=1;return t})(e),t.map((e=>Ae(e.codePointAt(0))?e:e.toLocaleLowerCase().normalize("NFKD")[0]))).join("");var t};var qe;var $e,Oe,Te,Le={};e(Le,"list",(function(){return $e}),(function(e){return $e=e})),e(Le,"group",(function(){return Oe}),(function(e){return Oe=e})),e(Le,"description",(function(){return Te}),(function(e){return Te=e})),$e="FY8nBW_list",Oe="FY8nBW_group",Te="FY8nBW_description";const Ee=fe("<ul></ul>"),Me=fe("<h2></h2>"),Pe=fe("<em>(<!>)</em>"),je=fe("<li><a><dfn></dfn></a>: <strong></strong></li>"),Be=fe("<p></p>");var Ve=e=>{const n=()=>{const t=Ne(e.searchTerm.trim().toLocaleLowerCase());var n;const r=t?e.dictionary.filter((e=>e.normalized.includes(t))):null!==(n=e.dictionary)&&void 0!==n?n:[],o=new Map;for(const e of r)i=o,l=e.value[0],s=t=>(t.push(e),t),u=()=>[],i.set(l,s(null!==(qe=i.get(l))&&void 0!==qe?qe:u()));var i,l,s,u;return o};return T((()=>{if(!e.dictionary||!window.location.hash)return;const t=document.getElementById(window.location.hash.slice(1));t&&t.scrollIntoView({behavior:"smooth"})})),(()=>{const r=Ee.cloneNode(!0);return ge(r,se(ue,{get each(){return[...n().entries()]},children:([n,r])=>[(()=>{const e=Me.cloneNode(!0);return ge(e,(()=>n.toLocaleUpperCase())),O((()=>he(e,t(Le).group))),e})(),se(ue,{each:r,children:n=>{const r=n.translations.find((t=>t.language==e.language));if(!r)return null;const o=(i=n.value,encodeURIComponent(i.replace(/\s/g,"-")));var i;return(()=>{const e=je.cloneNode(!0),i=e.firstChild,l=i.firstChild,s=i.nextSibling.nextSibling;return pe(e,"id",o),pe(i,"href",`#${o}`),ge(l,(()=>n.value)),ge(s,(()=>r.value)),ge(e,se(ae,{get when(){var e;return(null===(e=r.alternatives)||void 0===e?void 0:e.length)>0},get children(){return[" ",(()=>{const e=Pe.cloneNode(!0),t=e.firstChild.nextSibling;t.nextSibling;return ge(e,(()=>r.alternatives.join(", ")),t),e})()]}}),null),ge(e,(()=>{const e=L((()=>!!n.description),void 0,(r=!0)?void 0:{equals:r});var r;return()=>e()?(()=>{const e=Be.cloneNode(!0);return ge(e,(()=>n.description)),O((()=>he(e,t(Le).description))),e})():null})(),null),e})()}})]})),O((()=>he(r,t(Le).list))),r})()};const Fe=fe('<input type="search">');var De=e=>(()=>{const t=Fe.cloneNode(!0);return t.$$input=t=>e.setSearchTerm(t.target.value),t.autofocus=!0,t})();de(["input"]);var Re,He,Ue,Ge,Ie={};e(Ie,"search",(function(){return Re}),(function(e){return Re=e})),e(Ie,"layout",(function(){return He}),(function(e){return He=e})),e(Ie,"contribute",(function(){return Ue}),(function(e){return Ue=e})),e(Ie,"list",(function(){return Ge}),(function(e){return Ge=e})),Re="_fQK7q_search",He="_fQK7q_layout",Ue="_fQK7q_contribute",Ge="_fQK7q_list";const ze=fe('<div><div><h1>DnD 5e Translations</h1><a title="Contribute translations" target="_blank" href="https://github.com/krofdrakula/dnd-translations"><img></a></div><div></div></div>'),Ke=fe("<p>Please wait, loading dictionary &hellip;</p>");var Qe;Qe=new URL(i("hqokU").resolve("foihl"),import.meta.url).toString();var We=()=>{const[e,n]=q(""),[r,o]=q("sl"),[i]=E((async()=>(await fetch("./dictionary.json")).json()),{initialValue:null});let l;T((()=>{const e=new URL(document.location.href);e.searchParams.get("lang")||(e.searchParams.set("lang",r()),window.history.replaceState(null,"",e))})),T(j(e,(()=>l.scrollTop=0)));const s=new URL(Qe);return se(ae,{when:()=>i.loading,get fallback(){return Ke.cloneNode(!0)},get children(){const u=ze.cloneNode(!0),a=u.firstChild,c=a.firstChild.nextSibling,f=c.firstChild,d=a.nextSibling;return ge(a,se(De,{setSearchTerm:n}),c),ge(a,se(ke,{get selected(){return r()},setLanguage:o,get available(){return new Set(null===(e=i())||void 0===e?void 0:e.flatMap((e=>e.translations.map((e=>e.language)))));var e}}),c),l=d,ge(d,se(Ve,{get searchTerm(){return e()},get language(){return r()},get dictionary(){return i()}})),O((e=>{const n=t(Ie).layout,r=t(Ie).search,o=t(Ie).contribute,i=s.href,l=t(Ie).list;return n!==e._v$&&he(u,e._v$=n),r!==e._v$2&&he(a,e._v$2=r),o!==e._v$3&&he(c,e._v$3=o),i!==e._v$4&&pe(f,"src",e._v$4=i),l!==e._v$5&&he(d,e._v$5=l),e}),{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),u}})};ce((()=>se(We,{})),document.getElementById("app"));
//# sourceMappingURL=index.650adc21.js.map