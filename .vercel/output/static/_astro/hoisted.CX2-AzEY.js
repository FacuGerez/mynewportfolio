function q(){const e=typeof localStorage<"u"&&localStorage.getItem("theme")?localStorage.getItem("theme"):window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";window.localStorage.setItem("theme",e==="dark"?"dark":"light"),e==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}q();document.addEventListener("astro:page-load",q);const v="data-astro-transition-persist";function te(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function ne(e){const t=document.documentElement,n=[...t.attributes].filter(({name:r})=>(t.removeAttribute(r),r.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:r,value:o})=>t.setAttribute(r,o))}function re(e){for(const t of Array.from(document.head.children)){const n=se(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function oe(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${v}]`)){const r=n.getAttribute(v),o=e.querySelector(`[${v}="${r}"]`);o&&(o.replaceWith(n),o.localName==="astro-island"&&ae(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",o.getAttribute("props"))))}}const ie=()=>{const e=document.activeElement;if(e?.closest(`[${v}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>L({activeElement:e,start:t,end:n})}return()=>L({activeElement:e})}else return()=>L({activeElement:null})},L=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},se=(e,t)=>{const n=e.getAttribute(v),r=n&&t.head.querySelector(`[${v}="${n}"]`);if(r)return r;if(e.matches("link[rel=stylesheet]")){const o=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${o}"]`)}return null},ae=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},ce=e=>{te(e),ne(e),re(e);const t=ie();oe(e.body,document.body),t()},le="astro:before-preparation",ue="astro:after-preparation",de="astro:before-swap",fe="astro:after-swap",me=e=>document.dispatchEvent(new Event(e));class B extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,r,o,i,c,a,u,d,l){super(t,n),this.from=r,this.to=o,this.direction=i,this.navigationType=c,this.sourceElement=a,this.info=u,this.newDocument=d,this.signal=l,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class he extends B{formData;loader;constructor(t,n,r,o,i,c,a,u,d,l){super(le,{cancelable:!0},t,n,r,o,i,c,a,u),this.formData=d,this.loader=l.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class pe extends B{direction;viewTransition;swap;constructor(t,n){super(de,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>ce(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function we(e,t,n,r,o,i,c,a,u){const d=new he(e,t,n,r,o,i,window.document,c,a,u);return document.dispatchEvent(d)&&(await d.loader(),d.defaultPrevented||(me(ue),d.navigationType!=="traverse"&&P({scrollX,scrollY}))),d}function ge(e,t){const n=new pe(e,t);return document.dispatchEvent(n),n.swap(),n}const ve=history.pushState.bind(history),T=history.replaceState.bind(history),P=e=>{history.state&&(history.scrollRestoration="manual",T({...history.state,...e},""))},x=!!document.startViewTransition,D=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),V=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let f,w,S;const j=e=>document.dispatchEvent(new Event(e)),W=()=>j("astro:page-load"),ye=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},$="data-astro-transition-persist",N="data-astro-transition",k="data-astro-transition-fallback";let H,y=0;history.state?(y=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):D()&&(T({index:y,scrollX,scrollY},""),history.scrollRestoration="manual");async function be(e,t){try{const n=await fetch(e,t),o=(n.headers.get("content-type")??"").split(";",1)[0].trim();return o!=="text/html"&&o!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:o}}catch{return null}}function K(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function Te(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const r=document.createElement("script");r.innerHTML=t.innerHTML;for(const o of t.attributes){if(o.name==="src"){const i=new Promise(c=>{r.onload=r.onerror=c});e=e.then(()=>i)}r.setAttribute(o.name,o.value)}r.dataset.astroExec="",t.replaceWith(r)}return e}const J=(e,t,n,r,o)=>{const i=V(t,e),c=document.title;document.title=r;let a=!1;if(e.href!==location.href&&!o)if(n.history==="replace"){const u=history.state;T({...n.state,index:u.index,scrollX:u.scrollX,scrollY:u.scrollY},"",e.href)}else ve({...n.state,index:++y,scrollX:0,scrollY:0},"",e.href);if(document.title=c,S=e,i||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),o)scrollTo(o.scrollX,o.scrollY);else{if(e.hash){history.scrollRestoration="auto";const u=history.state;location.href=e.href,history.state||(T(u,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Ee(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${$}="${n.getAttribute($)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const r=document.createElement("link");r.setAttribute("rel","preload"),r.setAttribute("as","style"),r.setAttribute("href",n.getAttribute("href")),t.push(new Promise(o=>{["load","error"].forEach(i=>r.addEventListener(i,o)),document.head.append(r)}))}return t}async function M(e,t,n,r,o){async function i(u){function d(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const l=document.getAnimations();document.documentElement.setAttribute(k,u);const p=document.getAnimations().filter(h=>!l.includes(h)&&!d(h));return Promise.allSettled(p.map(h=>h.finished))}if(o==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await i("old")}catch{}const c=document.title,a=ge(e,n.viewTransition);J(a.to,a.from,t,c,r),j(fe),o==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?i("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Se(){return f?.controller.abort(),f={controller:new AbortController}}async function G(e,t,n,r,o){const i=Se();if(!D()||location.origin!==n.origin){i===f&&(f=void 0),location.href=n.href;return}const c=o?"traverse":r.history==="replace"?"replace":"push";if(c!=="traverse"&&P({scrollX,scrollY}),V(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){J(n,t,r,document.title,o),i===f&&(f=void 0);return}const a=await we(t,n,e,c,r.sourceElement,r.info,i.controller.signal,r.formData,u);if(a.defaultPrevented||a.signal.aborted){i===f&&(f=void 0),a.signal.aborted||(location.href=n.href);return}async function u(s){const p=s.to.href,h={signal:s.signal};if(s.formData){h.method="POST";const g=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:s.sourceElement?.closest("form");h.body=g?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const m=await be(p,h);if(m===null){s.preventDefault();return}if(m.redirected){const g=new URL(m.redirected);if(g.origin!==s.to.origin){s.preventDefault();return}s.to=g}if(H??=new DOMParser,s.newDocument=H.parseFromString(m.html,m.mediaType),s.newDocument.querySelectorAll("noscript").forEach(g=>g.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const R=Ee(s.newDocument);R.length&&!s.signal.aborted&&await Promise.all(R)}async function d(){if(w&&w.viewTransition){try{w.viewTransition.skipTransition()}catch{}try{await w.viewTransition.updateCallbackDone}catch{}}return w={transitionSkipped:!1}}const l=await d();if(a.signal.aborted){i===f&&(f=void 0);return}if(document.documentElement.setAttribute(N,a.direction),x)l.viewTransition=document.startViewTransition(async()=>await M(a,r,l,o));else{const s=(async()=>{await Promise.resolve(),await M(a,r,l,o,K())})();l.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(p=>l.viewTransitionFinished=p),skipTransition:()=>{l.transitionSkipped=!0,document.documentElement.removeAttribute(k)}}}l.viewTransition.updateCallbackDone.finally(async()=>{await Te(),W(),ye()}),l.viewTransition.finished.finally(()=>{l.viewTransition=void 0,l===w&&(w=void 0),i===f&&(f=void 0),document.documentElement.removeAttribute(N),document.documentElement.removeAttribute(k)});try{await l.viewTransition.updateCallbackDone}catch(s){const p=s;console.log("[astro]",p.name,p.message,p.stack)}}async function _(e,t){await G("forward",S,new URL(e,location.href),t??{})}function Ae(e){if(!D()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,r=n>y?"forward":"back";y=n,G(r,S,new URL(location.href),{},t)}const C=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&P({scrollX,scrollY})};{if(x||K()!=="none")if(S=new URL(location.href),addEventListener("popstate",Ae),addEventListener("load",W),"onscrollend"in window)addEventListener("scrollend",C);else{let e,t,n,r;const o=()=>{if(r!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,C();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(r=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(o,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}const Q=new Set,E=new WeakSet;let I,z,F=!1;function Re(e){F||(F=!0,I??=e?.prefetchAll,z??=e?.defaultStrategy??"hover",Le(),ke(),Ie(),xe())}function Le(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{b(t.target,"tap")&&A(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function ke(){let e;document.body.addEventListener("focusin",r=>{b(r.target,"hover")&&t(r)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),O(()=>{for(const r of document.getElementsByTagName("a"))E.has(r)||b(r,"hover")&&(E.add(r),r.addEventListener("mouseenter",t,{passive:!0}),r.addEventListener("mouseleave",n,{passive:!0}))});function t(r){const o=r.target.href;e&&clearTimeout(e),e=setTimeout(()=>{A(o)},80)}function n(){e&&(clearTimeout(e),e=0)}}function Ie(){let e;O(()=>{for(const t of document.getElementsByTagName("a"))E.has(t)||b(t,"viewport")&&(E.add(t),e??=Pe(),e.observe(t))})}function Pe(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const r of t){const o=r.target,i=e.get(o);r.isIntersecting?(i&&clearTimeout(i),e.set(o,setTimeout(()=>{n.unobserve(o),e.delete(o),A(o.href)},300))):i&&(clearTimeout(i),e.delete(o))}})}function xe(){O(()=>{for(const e of document.getElementsByTagName("a"))b(e,"load")&&A(e.href)})}function A(e,t){const n=t?.ignoreSlowConnection??!1;if(De(e,n))if(Q.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const r=document.createElement("link");r.rel="prefetch",r.setAttribute("href",e),document.head.append(r)}else fetch(e,{priority:"low"})}function De(e,t){if(!navigator.onLine||!t&&Z())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!Q.has(e)}catch{}return!1}function b(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||I)&&Z()?!0:n==null&&I||n===""?t===z:n===t}function Z(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function O(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Oe(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function U(e){return e.dataset.astroReload!==void 0}(x||Oe()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,r=t instanceof HTMLElement?t.href:t.href.baseVal,o=new URL(r,location.href).origin;U(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||o!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),_(r,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||U(t))return;const n=t,r=e.submitter,o=new FormData(n,r),i=typeof n.action=="string"?n.action:n.getAttribute("action"),c=typeof n.method=="string"?n.method:n.getAttribute("method");let a=r?.getAttribute("formaction")??i??location.pathname;const u=r?.getAttribute("formmethod")??c??"get";if(u==="dialog"||location.origin!==new URL(a,location.href).origin)return;const d={sourceElement:r??n};if(u==="get"){const l=new URLSearchParams(o),s=new URL(a);s.search=l.toString(),a=s.toString()}else d.formData=o;e.preventDefault(),_(a,d)}),Re({prefetchAll:!0}));var $e="@vercel/speed-insights",Ne="1.0.12",He=()=>{window.si||(window.si=function(...t){(window.siq=window.siq||[]).push(t)})};function Me(){return typeof window<"u"}function _e(){try{const e="production"}catch{}return"production"}function X(){return _e()==="development"}function Ce(e,t){if(!e||!t)return e;let n=e;try{const r=Object.entries(t);for(const[o,i]of r)if(!Array.isArray(i)){const c=Y(i);c.test(n)&&(n=n.replace(c,`/[${o}]`))}for(const[o,i]of r)if(Array.isArray(i)){const c=Y(i.join("/"));c.test(n)&&(n=n.replace(c,`/[...${o}]`))}return n}catch{return e}}function Y(e){return new RegExp(`/${Fe(e)}(?=[/?#]|$)`)}function Fe(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var ee="https://va.vercel-scripts.com/v1/speed-insights",Ue=`${ee}/script.js`,Xe=`${ee}/script.debug.js`,Ye="/_vercel/speed-insights/script.js";function qe(e={}){var t;if(!Me()||e.route===null)return null;He();const r=!!e.dsn?Ue:Ye,o=e.scriptSrc||(X()?Xe:r);if(document.head.querySelector(`script[src*="${o}"]`))return null;e.beforeSend&&((t=window.si)==null||t.call(window,"beforeSend",e.beforeSend));const i=document.createElement("script");return i.src=o,i.defer=!0,i.dataset.sdkn=$e+(e.framework?`/${e.framework}`:""),i.dataset.sdkv=Ne,e.sampleRate&&(i.dataset.sampleRate=e.sampleRate.toString()),e.route&&(i.dataset.route=e.route),e.endpoint&&(i.dataset.endpoint=e.endpoint),e.dsn&&(i.dataset.dsn=e.dsn),X()&&e.debug===!1&&(i.dataset.debug="false"),i.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${o}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(i),{setRoute:c=>{i.dataset.route=c??void 0}}}customElements.define("vercel-speed-insights",class extends HTMLElement{constructor(){super();try{const t=JSON.parse(this.dataset.props??"{}"),n=JSON.parse(this.dataset.params??"{}"),r=Ce(this.dataset.pathname??"",n);qe({route:r,...t,framework:"astro",beforeSend:window.speedInsightsBeforeSend})}catch(t){throw new Error(`Failed to parse SpeedInsights properties: ${t}`)}}});
