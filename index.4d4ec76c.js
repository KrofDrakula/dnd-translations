!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequirea730;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequirea730=o),o.register("kTepu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("bEZ20",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("aH8qw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("3MI6U",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("1Z5yg"))&&n.__esModule?n:{default:n}})),o.register("1Z5yg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("8aL22",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("1Z5yg"))&&n.__esModule?n:{default:n}})),o.register("iFX13",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("9QFXR",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){return i.default(e)||a.default(e,t)||s.default(e,t)||l.default()};var i=f(o("kTepu")),a=f(o("bEZ20")),l=f(o("aH8qw")),s=f(o("3MI6U"));function f(e){return e&&e.__esModule?e:{default:e}}var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){return d.default(e)||p.default(e)||g.default(e)||v.default()};var d=h(o("8aL22")),p=h(o("bEZ20")),v=h(o("iFX13")),g=h(o("3MI6U"));function h(e){return e&&e.__esModule?e:{default:e}}var m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var b=o("9QFXR"),y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){S.default(e,t,n[t])}))}return e};var w,S=(w=o("9QFXR"))&&w.__esModule?w:{default:w};var x={};function A(e){x.context=e}var k,O=function(e,t){return e===t},_=(Symbol("solid-proxy"),Symbol("solid-track")),M=(Symbol("solid-dev-component"),{equals:O}),P=null,j=ae,C={},N={owned:null,cleanups:null,context:null,owner:null},T=e(u)(X(!1),2),E=(T[0],T[1]),q=null,L=null,D=null,B=null,F=null,I=null,V=null,G=null,R=0;function U(e,t){var n=F,r=q,o=0===e.length?N:{owned:null,cleanups:null,context:null,owner:t||r};q=o,F=null;try{return ie((function(){return e((function(){return fe(o)}))}),!0)}finally{F=n,q=r}}function X(e,t){t=t?Object.assign({},M,t):M;var n={value:e,observers:null,observerSlots:null,pending:C,comparator:t.equals||void 0};return[ee.bind(n),function(e){return"function"==typeof e&&(e=L&&L.running&&L.sources.has(n)?e(n.pending!==C?n.pending:n.tValue):e(n.pending!==C?n.pending:n.value)),te(n,e)}]}function $(e,t,n){var r=oe(e,t,!0,1);D&&L&&L.running?V.push(r):ne(r)}function Z(e,t,n){var r=oe(e,t,!1,1);D&&L&&L.running?V.push(r):ne(r)}function z(e,t,n){n=n?Object.assign({},M,n):M;var r=oe(e,t,!0,0);return r.pending=C,r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,D&&L&&L.running?(r.tState=1,V.push(r)):ne(r),ee.bind(r)}function H(e){if(I)return e();var t,n=I=[];try{t=e()}finally{I=null}return ie((function(){for(var e=0;e<n.length;e+=1){var t=n[e];if(t.pending!==C){var r=t.pending;t.pending=C,te(t,r)}}}),!1),t}function Q(e){var t,n=F;return F=null,t=e(),F=n,t}function K(e){return null===q||(null===q.cleanups?q.cleanups=[e]:q.cleanups.push(e)),e}function W(e){if(L&&L.running)return e(),L.done;var t=F,n=q;return Promise.resolve().then((function(){var r;return F=t,q=n,(D||k)&&((r=L||(L={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0})).done||(r.done=new Promise((function(e){return r.resolve=e}))),r.running=!0),H(e),F=q=null,r?r.done:void 0}))}function Y(e){var t=Symbol("context");return{id:t,Provider:ge(t),defaultValue:e}}function J(e){var t=z(e);return z((function(){return ve(t())}))}function ee(){var e=L&&L.running;if(this.sources&&(!e&&this.state||e&&this.tState)){var t=V;V=null,!e&&1===this.state||e&&1===this.tState?ne(this):le(this),V=t}if(F){var n=this.observers?this.observers.length:0;F.sources?(F.sources.push(this),F.sourceSlots.push(n)):(F.sources=[this],F.sourceSlots=[n]),this.observers?(this.observers.push(F),this.observerSlots.push(F.sources.length-1)):(this.observers=[F],this.observerSlots=[F.sources.length-1])}return e&&L.sources.has(this)?this.tValue:this.value}function te(e,t,n){if(I)return e.pending===C&&I.push(e),e.pending=t,t;if(e.comparator)if(L&&L.running&&L.sources.has(e)){if(e.comparator(e.tValue,t))return t}else if(e.comparator(e.value,t))return t;var r=!1;return L?(((r=L.running)||!n&&L.sources.has(e))&&(L.sources.add(e),e.tValue=t),r||(e.value=t)):e.value=t,e.observers&&e.observers.length&&ie((function(){for(var t=0;t<e.observers.length;t+=1){var n=e.observers[t];r&&L.disposed.has(n)||((r&&!n.tState||!r&&!n.state)&&(n.pure?V.push(n):G.push(n),n.observers&&se(n)),r?n.tState=1:n.state=1)}if(V.length>1e6)throw V=[],new Error}),!1),t}function ne(e){if(e.fn){fe(e);var t=q,n=F,r=R;F=q=e,re(e,L&&L.running&&L.sources.has(e)?e.tValue:e.value,r),L&&!L.running&&L.sources.has(e)&&queueMicrotask((function(){ie((function(){L&&(L.running=!0),re(e,e.tValue,r)}),!1)})),F=n,q=t}}function re(e,t,n){var r;try{r=e.fn(t)}catch(e){de(e)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?te(e,r,!0):L&&L.running&&e.pure?(L.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function oe(t,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i={fn:t,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:q,context:null,pure:r};if(L&&L.running&&(i.state=0,i.tState=o),null===q||q!==N&&(L&&L.running&&q.pure?q.tOwned?q.tOwned.push(i):q.tOwned=[i]:q.owned?q.owned.push(i):q.owned=[i]),B){var a=e(u)(X(void 0,{equals:!1}),2),l=a[0],s=a[1],f=B(i.fn,s);K((function(){return f.dispose()}));var c=function(){return W(s).then((function(){return d.dispose()}))},d=B(i.fn,c);i.fn=function(e){return l(),L&&L.running?d.track(e):f.track(e)}}return i}function ue(e){var t=L&&L.running;if(!(!t&&0===e.state||t&&0===e.tState)){if(!t&&2===e.state||t&&2===e.tState)return le(e);if(e.suspense&&Q(e.suspense.inFallback))return e.suspense.effects.push(e);for(var n=[e];(e=e.owner)&&(!e.updatedAt||e.updatedAt<R);){if(t&&L.disposed.has(e))return;(!t&&e.state||t&&e.tState)&&n.push(e)}for(var r=n.length-1;r>=0;r--){if(e=n[r],t)for(var o=e,u=n[r+1];(o=o.owner)&&o!==u;)if(L.disposed.has(o))return;if(!t&&1===e.state||t&&1===e.tState)ne(e);else if(!t&&2===e.state||t&&2===e.tState){var i=V;V=null,le(e,n[0]),V=i}}}}function ie(e,t){if(V)return e();var n=!1;t||(V=[]),G?n=!0:G=[],R++;try{var r=e();return function(e){V&&(D&&L&&L.running?function(e){for(var t=function(t){var n=e[t],r=L.queue;r.has(n)||(r.add(n),D((function(){r.delete(n),ie((function(){L.running=!0,ue(n),r.size||(G.push.apply(G,L.effects),L.effects=[])}),!1),L&&(L.running=!1)})))},n=0;n<e.length;n++)t(n)}(V):ae(V),V=null);if(e)return;var t;if(L&&L.running){if(L.promises.size||L.queue.size)return L.running=!1,L.effects.push.apply(L.effects,G),G=null,void E(!0);var n=L.sources;t=L.resolve,G.forEach((function(e){"tState"in e&&(e.state=e.tState),delete e.tState})),L=null,H((function(){n.forEach((function(e){if(e.value=e.tValue,e.owned)for(var t=0,n=e.owned.length;t<n;t++)fe(e.owned[t]);e.tOwned&&(e.owned=e.tOwned),delete e.tValue,delete e.tOwned,e.tState=0})),E(!1)}))}G.length?H((function(){j(G),G=null})):G=null;t&&t()}(n),r}catch(e){de(e)}finally{V=null,n||(G=null)}}function ae(e){for(var t=0;t<e.length;t++)ue(e[t])}function le(e,t){var n=L&&L.running;n?e.tState=0:e.state=0;for(var r=0;r<e.sources.length;r+=1){var o=e.sources[r];o.sources&&(!n&&1===o.state||n&&1===o.tState?o!==t&&ue(o):(!n&&2===o.state||n&&2===o.tState)&&le(o,t))}}function se(e){for(var t=L&&L.running,n=0;n<e.observers.length;n+=1){var r=e.observers[n];(!t&&!r.state||t&&!r.tState)&&(t?r.tState=2:r.state=2,r.pure?V.push(r):G.push(r),r.observers&&se(r))}}function fe(e){var t;if(e.sources)for(;e.sources.length;){var n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){var u=o.pop(),i=n.observerSlots.pop();r<o.length&&(u.sourceSlots[i]=r,o[r]=u,n.observerSlots[r]=i)}}if(L&&L.running&&e.pure){if(e.tOwned){for(t=0;t<e.tOwned.length;t++)fe(e.tOwned[t]);delete e.tOwned}ce(e,!0)}else if(e.owned){for(t=0;t<e.owned.length;t++)fe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}L&&L.running?e.tState=0:e.state=0,e.context=null}function ce(e,t){if(t||(e.tState=0,L.disposed.add(e)),e.owned)for(var n=0;n<e.owned.length;n++)ce(e.owned[n])}function de(e){var t=P&&pe(q,P);if(!t)throw e;t.forEach((function(t){return t(e)}))}function pe(e,t){return e?e.context&&void 0!==e.context[t]?e.context[t]:pe(e.owner,t):void 0}function ve(e){if("function"==typeof e&&!e.length)return ve(e());if(Array.isArray(e)){for(var t=[],n=0;n<e.length;n++){var r=ve(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function ge(t){return function(n){var r;return $((function(){return r=Q((function(){return q.context=e(b)({},t,n.value),J((function(){return n.children}))}))})),r}}var he=Symbol("fallback");function me(e){for(var t=0;t<e.length;t++)e[t]()}var be=!1;function ye(t,n){if(be&&x.context){var r=x.context;A(e(y)({},x.context,{id:"".concat(x.context.id).concat(x.context.count++,"-"),count:0}));var o=Q((function(){return t(n||{})}));return A(r),o}return Q((function(){return t(n||{})}))}function we(t){var n="fallback"in t&&{fallback:function(){return t.fallback}};return z(function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=[],i=[],a=[],l=0,s=n.length>1?[]:null;return K((function(){return me(a)})),function(){var f,c,d=t()||[];return d[_],Q((function(){var e,t,n,u,v,g,h,m,b,y=d.length;if(0===y)0!==l&&(me(a),a=[],o=[],i=[],l=0,s&&(s=[])),r.fallback&&(o=[he],i[0]=U((function(e){return a[0]=e,r.fallback()})),l=1);else if(0===l){for(i=new Array(y),c=0;c<y;c++)o[c]=d[c],i[c]=U(p);l=y}else{for(n=new Array(y),u=new Array(y),s&&(v=new Array(y)),g=0,h=Math.min(l,y);g<h&&o[g]===d[g];g++);for(h=l-1,m=y-1;h>=g&&m>=g&&o[h]===d[m];h--,m--)n[m]=i[h],u[m]=a[h],s&&(v[m]=s[h]);for(e=new Map,t=new Array(m+1),c=m;c>=g;c--)b=d[c],f=e.get(b),t[c]=void 0===f?-1:f,e.set(b,c);for(f=g;f<=h;f++)b=o[f],void 0!==(c=e.get(b))&&-1!==c?(n[c]=i[f],u[c]=a[f],s&&(v[c]=s[f]),c=t[c],e.set(b,c)):a[f]();for(c=g;c<y;c++)c in n?(i[c]=n[c],a[c]=u[c],s&&(s[c]=v[c],s[c](c))):i[c]=U(p);i=i.slice(0,l=y),o=d.slice(0)}return i}));function p(t){if(a[c]=t,s){var r=e(u)(X(c),2),o=r[0],i=r[1];return s[c]=i,n(d[c],o)}return n(d[c])}}}((function(){return t.each}),t.children,n||void 0))}function Se(e){var t=!1,n=z((function(){return e.when}),void 0,{equals:function(e,n){return t?e===n:!e==!n}});return z((function(){var r=n();if(r){var o=e.children;return(t="function"==typeof o&&o.length>0)?Q((function(){return o(r)})):o}return e.fallback}))}Y();new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline"].concat(e(c)(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"]))),new Set(["innerHTML","textContent","innerText","children"]),new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),new Set(["html","base","head","link","meta","style","title","body","address","article","aside","footer","header","main","nav","section","body","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","img","map","track","video","embed","iframe","object","param","picture","portal","source","svg","math","canvas","noscript","script","del","ins","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","menu","summary","details","slot","template","acronym","applet","basefont","bgsound","big","blink","center","content","dir","font","frame","frameset","hgroup","image","keygen","marquee","menuitem","nobr","noembed","noframes","plaintext","rb","rtc","shadow","spacer","strike","tt","xmp","a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","portal","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp","input"]);function xe(e,t,n){var r;return U((function(o){r=o,t===document?e():Me(t,e(),t.firstChild?null:void 0,n)})),function(){r(),t.textContent=""}}function Ae(e,t,n){var r=document.createElement("template");r.innerHTML=e;var o=r.content.firstChild;return n&&(o=o.firstChild),o}function ke(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.document,n=t._$DX_DELEGATE||(t._$DX_DELEGATE=new Set),r=0,o=e.length;r<o;r++){var u=e[r];n.has(u)||(n.add(u),t.addEventListener(u,Pe))}}function Oe(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function _e(e,t){null==t?e.removeAttribute("class"):e.className=t}function Me(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return je(e,t,r,n);Z((function(r){return je(e,t(),r,n)}),r)}function Pe(e){var t="$$".concat(e.type),n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n||document}}),x.registry&&!x.done&&(x.done=!0,document.querySelectorAll("[id^=pl-]").forEach((function(e){return e.remove()})));null!==n;){var r=n[t];if(r&&!n.disabled){var o=n["".concat(t,"Data")];if(void 0!==o?r(o,e):r(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function je(t,n,r,o,u){for(x.context&&!r&&(r=e(c)(t.childNodes));"function"==typeof r;)r=r();if(n===r)return r;var i=void 0===n?"undefined":e(m)(n),a=void 0!==o;if(t=a&&r[0]&&r[0].parentNode||t,"string"===i||"number"===i){if(x.context)return r;if("number"===i&&(n=n.toString()),a){var l=r[0];l&&3===l.nodeType?l.data=n:l=document.createTextNode(n),r=Te(t,r,o,l)}else r=""!==r&&"string"==typeof r?t.firstChild.data=n:t.textContent=n}else if(null==n||"boolean"===i){if(x.context)return r;r=Te(t,r,o)}else{if("function"===i)return Z((function(){for(var e=n();"function"==typeof e;)e=e();r=je(t,e,r,o)})),function(){return r};if(Array.isArray(n)){var s=[];if(Ce(s,n,u))return Z((function(){return r=je(t,s,r,o,!0)})),function(){return r};if(x.context)for(var f=0;f<s.length;f++)if(s[f].parentNode)return r=s;if(0===s.length){if(r=Te(t,r,o),a)return r}else Array.isArray(r)?0===r.length?Ne(t,s,o):function(e,t,n){for(var r=n.length,o=t.length,u=r,i=0,a=0,l=t[o-1].nextSibling,s=null;i<o||a<u;)if(t[i]!==n[a]){for(;t[o-1]===n[u-1];)o--,u--;if(o===i)for(var f=u<r?a?n[a-1].nextSibling:n[u-a]:l;a<u;)e.insertBefore(n[a++],f);else if(u===a)for(;i<o;)s&&s.has(t[i])||t[i].remove(),i++;else if(t[i]===n[u-1]&&n[a]===t[o-1]){var c=t[--o].nextSibling;e.insertBefore(n[a++],t[i++].nextSibling),e.insertBefore(n[--u],c),t[o]=n[u]}else{if(!s){s=new Map;for(var d=a;d<u;)s.set(n[d],d++)}var p=s.get(t[i]);if(null!=p)if(a<p&&p<u){for(var v=i,g=1,h=void 0;++v<o&&v<u&&null!=(h=s.get(t[v]))&&h===p+g;)g++;if(g>p-a)for(var m=t[i];a<p;)e.insertBefore(n[a++],m);else e.replaceChild(n[a++],t[i++])}else i++;else t[i++].remove()}}else i++,a++}(t,r,s):(r&&Te(t),Ne(t,s));r=s}else if(n instanceof Node){if(x.context&&n.parentNode)return r=a?[n]:n;if(Array.isArray(r)){if(a)return r=Te(t,r,o,n);Te(t,r,null,n)}else null!=r&&""!==r&&t.firstChild?t.replaceChild(n,t.firstChild):t.appendChild(n);r=n}}return r}function Ce(t,n,r){for(var o=!1,u=0,i=n.length;u<i;u++){var a=n[u],l=void 0;if(a instanceof Node)t.push(a);else if(null==a||!0===a||!1===a);else if(Array.isArray(a))o=Ce(t,a)||o;else if("string"===(l=void 0===a?"undefined":e(m)(a)))t.push(document.createTextNode(a));else if("function"===l)if(r){for(;"function"==typeof a;)a=a();o=Ce(t,Array.isArray(a)?a:[a])||o}else t.push(a),o=!0;else t.push(document.createTextNode(a.toString()))}return o}function Ne(e,t,n){for(var r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function Te(e,t,n,r){if(void 0===n)return e.textContent="";var o=r||document.createTextNode("");if(t.length)for(var u=!1,i=t.length-1;i>=0;i--){var a=t[i];if(o!==a){var l=a.parentNode===e;u||i?l&&a.remove():l?e.replaceChild(o,a):e.insertBefore(o,n)}else u=!0}else e.insertBefore(o,n);return[o]}var Ee,qe,Le,De,Be,Fe=Ae("<select></select>"),Ie=Ae("<option></option>"),Ve=function(t){return(n=Fe.cloneNode(!0)).addEventListener("change",(function(e){return t.setLanguage(e.target.value)})),Me(n,ye(we,{get each(){return e(c)(t.available)},children:function(e){return(n=Ie.cloneNode(!0)).value=e,Me(n,e),Z((function(){return n.selected=t.selected==e})),n;var n}})),n;var n},Ge=function(e){return e>65535},Re=function(e,t){return function(n){return e<=n&&n<=t}},Ue=[[688,767],[734,734],[736,745],[735,735],[746,767],[768,879],[6832,6911],[7616,7679],[8400,8447],[65056,65071],[768,879],[810,810],[838,847],[860,879],[6832,6846],[7616,7679],[8400,8447],[65056,65071]].map((function(t){return Re.apply(void 0,e(c)(t))})),Xe=function(e){return Ue.some((function(t){return t(e)}))},$e=function(e){return(t=function(){for(var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=[],r=0;void 0!==(e=t.codePointAt(r));)for(Ge(e)?(n.push(String.fromCodePoint(e)),r+=2):(n.push(String.fromCodePoint(e)),r+=1);void 0!==(e=t.codePointAt(r))&&Xe(e);)n[n.length-1]+=String.fromCodePoint(e),r+=1;return n}(e),t.map((function(e){return Ge(e.codePointAt(0))?e:e.toLocaleLowerCase().normalize("NFKD")[0]}))).join("");var t},Ze={};Ee=Ze,qe="list",Le=function(){return Be},De=function(e){return Be=e},Object.defineProperty(Ee,qe,{get:Le,set:De,enumerable:!0,configurable:!0}),Be="FY8nBW_list";var ze=Ae("<ul></ul>"),He=Ae("<em>(<!>)</em>"),Qe=Ae("<li><a><dfn></dfn></a>: <strong></strong><p></p></li>"),Ke=function(t){var n;return Me(n=ze.cloneNode(!0),ye(we,{get each(){return(e=$e(t.searchTerm.trim().toLocaleLowerCase()))?t.dictionary.filter((function(t){return t.normalized.includes(e)})):t.dictionary;var e},children:function(e){var n=e.translations.find((function(e){return e.language==t.language}));if(!n)return null;var r,o,u,i,a,l,s=(r=e.value,encodeURIComponent(r.replace(/\s/g,"-")));return o=Qe.cloneNode(!0),u=o.firstChild,i=u.firstChild,a=u.nextSibling.nextSibling,l=a.nextSibling,Oe(o,"id",s),Oe(u,"href","#".concat(s)),Me(i,(function(){return e.value})),Me(a,(function(){return n.value})),Me(o,ye(Se,{get when(){var e;return(null===(e=n.alternatives)||void 0===e?void 0:e.length)>0},get children(){return[" ",(e=He.cloneNode(!0),t=e.firstChild.nextSibling,t.nextSibling,Me(e,(function(){return n.alternatives.join(", ")}),t),e)];var e,t}}),l),Me(l,(function(){return e.description})),o}})),Z((function(){return _e(n,e(Ze).list)})),n},We=Ae('<input type="search">'),Ye=function(e){return(t=We.cloneNode(!0)).$$input=function(t){return e.setSearchTerm(t.target.value)},t;var t};ke(["input"]);var Je=Ae("<h1>Backpacker's Guide to DnD</h1>"),et=Ae("<p>Please wait, loading dictionary &hellip;</p>"),tt=function(){var t=e(u)(X(""),2),n=t[0],r=t[1],o=e(u)(X("sl"),2),i=o[0],a=o[1],l=e(u)(X(null),2),s=l[0],f=l[1];return fetch("./dictionary.json").then((function(e){return e.json()})).then((function(e){return f(e)})).catch((function(e){alert("Cannot load dictionary, try reloading the page."),console.error(e)})),ye(Se,{get when(){return s()},get fallback(){return et.cloneNode(!0)},get children(){return[Je.cloneNode(!0),ye(Ve,{get selected(){return i()},setLanguage:a,get available(){return s()?new Set(["sl"]):new Set(null===(e=s())||void 0===e?void 0:e.flatMap((function(e){return e.translations.map((function(e){return e.language}))})));var e}}),ye(Ye,{setSearchTerm:r}),ye(Ke,{get searchTerm(){return n()},get language(){return i()},get dictionary(){return s()}})]}})};xe((function(){return ye(tt,{})}),document.getElementById("app"))}();
//# sourceMappingURL=index.4d4ec76c.js.map
