(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Yr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const J={},_t=[],Ee=()=>{},is=()=>!1,os=/^on[^a-z]/,Un=e=>os.test(e),Wr=e=>e.startsWith("onUpdate:"),ae=Object.assign,Kr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ss=Object.prototype.hasOwnProperty,H=(e,t)=>ss.call(e,t),M=Array.isArray,wt=e=>Yn(e)==="[object Map]",Ri=e=>Yn(e)==="[object Set]",L=e=>typeof e=="function",te=e=>typeof e=="string",qr=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",Fi=e=>(Z(e)||L(e))&&L(e.then)&&L(e.catch),Li=Object.prototype.toString,Yn=e=>Li.call(e),ls=e=>Yn(e).slice(8,-1),ji=e=>Yn(e)==="[object Object]",Vr=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pn=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},fs=/-(\w)/g,Re=Wn(e=>e.replace(fs,(t,n)=>n?n.toUpperCase():"")),cs=/\B([A-Z])/g,Nt=Wn(e=>e.replace(cs,"-$1").toLowerCase()),Kn=Wn(e=>e.charAt(0).toUpperCase()+e.slice(1)),sr=Wn(e=>e?`on${Kn(e)}`:""),Ct=(e,t)=>!Object.is(e,t),lr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Rn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},us=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Sa;const yr=()=>Sa||(Sa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?hs(r):Xr(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(te(e)||Z(e))return e}const ds=/;(?![^(]*\))/g,ms=/:([^]+)/,ps=/\/\*[^]*?\*\//g;function hs(e){const t={};return e.replace(ps,"").split(ds).forEach(n=>{if(n){const r=n.split(ms);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function rn(e){let t="";if(te(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const r=rn(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const gs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vs=Yr(gs);function zi(e){return!!e||e===""}const bs=e=>te(e)?e:e==null?"":M(e)||Z(e)&&(e.toString===Li||!L(e.toString))?JSON.stringify(e,$i,2):String(e),$i=(e,t)=>t&&t.__v_isRef?$i(e,t.value):wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ri(t)?{[`Set(${t.size})`]:[...t.values()]}:Z(t)&&!M(t)&&!ji(t)?String(t):t;let we;class ys{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function xs(e,t=we){t&&t.active&&t.effects.push(e)}function _s(){return we}const Jr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Di=e=>(e.w&Ze)>0,Hi=e=>(e.n&Ze)>0,ws=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},ks=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Di(a)&&!Hi(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},xr=new WeakMap;let $t=0,Ze=1;const _r=30;let ke;const ct=Symbol(""),wr=Symbol("");class Zr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xs(this,r)}run(){if(!this.active)return this.fn();let t=ke,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ke,ke=this,Xe=!0,Ze=1<<++$t,$t<=_r?ws(this):Ia(this),this.fn()}finally{$t<=_r&&ks(this),Ze=1<<--$t,ke=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ke===this?this.deferStop=!0:this.active&&(Ia(this),this.onStop&&this.onStop(),this.active=!1)}}function Ia(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const Bi=[];function Mt(){Bi.push(Xe),Xe=!1}function Rt(){const e=Bi.pop();Xe=e===void 0?!0:e}function pe(e,t,n){if(Xe&&ke){let r=xr.get(e);r||xr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Jr()),Ui(a)}}function Ui(e,t){let n=!1;$t<=_r?Hi(e)||(e.n|=Ze,n=!Di(e)):n=!e.has(ke),n&&(e.add(ke),ke.deps.push(e))}function De(e,t,n,r,a,i){const o=xr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&M(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":M(e)?Vr(n)&&s.push(o.get("length")):(s.push(o.get(ct)),wt(e)&&s.push(o.get(wr)));break;case"delete":M(e)||(s.push(o.get(ct)),wt(e)&&s.push(o.get(wr)));break;case"set":wt(e)&&s.push(o.get(ct));break}if(s.length===1)s[0]&&kr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);kr(Jr(l))}}function kr(e,t){const n=M(e)?e:[...e];for(const r of n)r.computed&&Na(r);for(const r of n)r.computed||Na(r)}function Na(e,t){(e!==ke||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const As=Yr("__proto__,__v_isRef,__isVue"),Yi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(qr)),Ma=Os();function Os(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mt();const r=U(this)[t].apply(this,n);return Rt(),r}}),e}function Es(e){const t=U(this);return pe(t,"has",e),t.hasOwnProperty(e)}class Wi{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?$s:Xi:i?Vi:qi).get(t))return t;const o=M(t);if(!a){if(o&&H(Ma,n))return Reflect.get(Ma,n,r);if(n==="hasOwnProperty")return Es}const s=Reflect.get(t,n,r);return(qr(n)?Yi.has(n):As(n))||(a||pe(t,"get",n),i)?s:ce(s)?o&&Vr(n)?s:s.value:Z(s)?a?Ji(s):ea(s):s}}class Ki extends Wi{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(qt(i)&&ce(i)&&!ce(r))return!1;if(!this._shallow&&(!Ar(r)&&!qt(r)&&(i=U(i),r=U(r)),!M(t)&&ce(i)&&!ce(r)))return i.value=r,!0;const o=M(t)&&Vr(n)?Number(n)<t.length:H(t,n),s=Reflect.set(t,n,r,a);return t===U(a)&&(o?Ct(r,i)&&De(t,"set",n,r):De(t,"add",n,r)),s}deleteProperty(t,n){const r=H(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&De(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!qr(n)||!Yi.has(n))&&pe(t,"has",n),r}ownKeys(t){return pe(t,"iterate",M(t)?"length":ct),Reflect.ownKeys(t)}}class Cs extends Wi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ps=new Ki,Ts=new Cs,Ss=new Ki(!0),Gr=e=>e,qn=e=>Reflect.getPrototypeOf(e);function dn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(Ct(t,i)&&pe(a,"get",t),pe(a,"get",i));const{has:o}=qn(a),s=r?Gr:n?ra:na;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function mn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(Ct(e,a)&&pe(r,"has",e),pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function pn(e,t=!1){return e=e.__v_raw,!t&&pe(U(e),"iterate",ct),Reflect.get(e,"size",e)}function Ra(e){e=U(e);const t=U(this);return qn(t).has.call(t,e)||(t.add(e),De(t,"add",e,e)),this}function Fa(e,t){t=U(t);const n=U(this),{has:r,get:a}=qn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Ct(t,o)&&De(n,"set",e,t):De(n,"add",e,t),this}function La(e){const t=U(this),{has:n,get:r}=qn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&De(t,"delete",e,void 0),i}function ja(){const e=U(this),t=e.size!==0,n=e.clear();return t&&De(e,"clear",void 0,void 0),n}function hn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Gr:e?ra:na;return!e&&pe(s,"iterate",ct),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function gn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=wt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Gr:t?ra:na;return!t&&pe(i,"iterate",l?wr:ct),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:this}}function Is(){const e={get(i){return dn(this,i)},get size(){return pn(this)},has:mn,add:Ra,set:Fa,delete:La,clear:ja,forEach:hn(!1,!1)},t={get(i){return dn(this,i,!1,!0)},get size(){return pn(this)},has:mn,add:Ra,set:Fa,delete:La,clear:ja,forEach:hn(!1,!0)},n={get(i){return dn(this,i,!0)},get size(){return pn(this,!0)},has(i){return mn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:hn(!0,!1)},r={get(i){return dn(this,i,!0,!0)},get size(){return pn(this,!0)},has(i){return mn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=gn(i,!1,!1),n[i]=gn(i,!0,!1),t[i]=gn(i,!1,!0),r[i]=gn(i,!0,!0)}),[e,n,t,r]}const[Ns,Ms,Rs,Fs]=Is();function Qr(e,t){const n=t?e?Fs:Rs:e?Ms:Ns;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const Ls={get:Qr(!1,!1)},js={get:Qr(!1,!0)},zs={get:Qr(!0,!1)},qi=new WeakMap,Vi=new WeakMap,Xi=new WeakMap,$s=new WeakMap;function Ds(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hs(e){return e.__v_skip||!Object.isExtensible(e)?0:Ds(ls(e))}function ea(e){return qt(e)?e:ta(e,!1,Ps,Ls,qi)}function Bs(e){return ta(e,!1,Ss,js,Vi)}function Ji(e){return ta(e,!0,Ts,zs,Xi)}function ta(e,t,n,r,a){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Hs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function kt(e){return qt(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function qt(e){return!!(e&&e.__v_isReadonly)}function Ar(e){return!!(e&&e.__v_isShallow)}function Zi(e){return kt(e)||qt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Gi(e){return Rn(e,"__v_skip",!0),e}const na=e=>Z(e)?ea(e):e,ra=e=>Z(e)?Ji(e):e;function Us(e){Xe&&ke&&(e=U(e),Ui(e.dep||(e.dep=Jr())))}function Ys(e,t){e=U(e);const n=e.dep;n&&kr(n)}function ce(e){return!!(e&&e.__v_isRef===!0)}function Ws(e){return ce(e)?e.value:e}const Ks={get:(e,t,n)=>Ws(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ce(a)&&!ce(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Qi(e){return kt(e)?e:new Proxy(e,Ks)}class qs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Zr(t,()=>{this._dirty||(this._dirty=!0,Ys(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Us(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Vs(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ee):(r=e.get,a=e.set),new qs(r,a,i||!a,n)}function Je(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Vn(i,t,n)}return a}function Ce(e,t,n,r){if(L(e)){const i=Je(e,t,n,r);return i&&Fi(i)&&i.catch(o=>{Vn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ce(e[i],t,n,r));return a}function Vn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Je(l,null,10,[e,o,s]);return}}Xs(e,n,a,r)}function Xs(e,t,n,r=!0){console.error(e)}let Vt=!1,Or=!1;const se=[];let Ne=0;const At=[];let je=null,ot=0;const eo=Promise.resolve();let aa=null;function Js(e){const t=aa||eo;return e?t.then(this?e.bind(this):e):t}function Zs(e){let t=Ne+1,n=se.length;for(;t<n;){const r=t+n>>>1;Xt(se[r])<e?t=r+1:n=r}return t}function ia(e){(!se.length||!se.includes(e,Vt&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?se.push(e):se.splice(Zs(e.id),0,e),to())}function to(){!Vt&&!Or&&(Or=!0,aa=eo.then(ro))}function Gs(e){const t=se.indexOf(e);t>Ne&&se.splice(t,1)}function Qs(e){M(e)?At.push(...e):(!je||!je.includes(e,e.allowRecurse?ot+1:ot))&&At.push(e),to()}function za(e,t=Vt?Ne+1:0){for(;t<se.length;t++){const n=se[t];n&&n.pre&&(se.splice(t,1),t--,n())}}function no(e){if(At.length){const t=[...new Set(At)];if(At.length=0,je){je.push(...t);return}for(je=t,je.sort((n,r)=>Xt(n)-Xt(r)),ot=0;ot<je.length;ot++)je[ot]();je=null,ot=0}}const Xt=e=>e.id==null?1/0:e.id,el=(e,t)=>{const n=Xt(e)-Xt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ro(e){Or=!1,Vt=!0,se.sort(el);const t=Ee;try{for(Ne=0;Ne<se.length;Ne++){const n=se[Ne];n&&n.active!==!1&&Je(n,null,14)}}finally{Ne=0,se.length=0,no(),Vt=!1,aa=null,(se.length||At.length)&&ro()}}function tl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||J;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||J;v&&(a=n.map(w=>te(w)?w.trim():w)),m&&(a=n.map(us))}let s,l=r[s=sr(t)]||r[s=sr(Re(t))];!l&&i&&(l=r[s=sr(Nt(t))]),l&&Ce(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ce(c,e,6,a)}}function ao(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=ao(c,t,!0);d&&(s=!0,ae(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(Z(e)&&r.set(e,null),null):(M(i)?i.forEach(l=>o[l]=null):ae(o,i),Z(e)&&r.set(e,o),o)}function Xn(e,t){return!e||!Un(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,Nt(t))||H(e,t))}let ue=null,io=null;function Fn(e){const t=ue;return ue=e,io=e&&e.type.__scopeId||null,t}function _e(e,t=ue,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Xa(-1);const i=Fn(t);let o;try{o=e(...a)}finally{Fn(i),r._d&&Xa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function fr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:w,ctx:z,inheritAttrs:N}=e;let D,k;const O=Fn(e);try{if(n.shapeFlag&4){const T=a||r;D=Ie(d.call(T,T,m,i,w,v,z)),k=l}else{const T=t;D=Ie(T.length>1?T(i,{attrs:l,slots:s,emit:c}):T(i,null)),k=t.props?l:nl(l)}}catch(T){Yt.length=0,Vn(T,e,1),D=B(Pt)}let R=D;if(k&&N!==!1){const T=Object.keys(k),{shapeFlag:Y}=R;T.length&&Y&7&&(o&&T.some(Wr)&&(k=rl(k,o)),R=Tt(R,k))}return n.dirs&&(R=Tt(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),D=R,Fn(O),D}const nl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Un(n))&&((t||(t={}))[n]=e[n]);return t},rl=(e,t)=>{const n={};for(const r in e)(!Wr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function al(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?$a(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Xn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?$a(r,o,c):!0:!!o;return!1}function $a(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Xn(n,i))return!0}return!1}function il({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ol=e=>e.__isSuspense;function sl(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):Qs(e)}const vn={};function Tn(e,t,n){return oo(e,t,n)}function oo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=J){var s;const l=_s()===((s=re)==null?void 0:s.scope)?re:null;let c,d=!1,m=!1;if(ce(e)?(c=()=>e.value,d=Ar(e)):kt(e)?(c=()=>e,r=!0):M(e)?(m=!0,d=e.some(T=>kt(T)||Ar(T)),c=()=>e.map(T=>{if(ce(T))return T.value;if(kt(T))return bt(T);if(L(T))return Je(T,l,2)})):L(e)?t?c=()=>Je(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Ce(e,l,3,[w])}:c=Ee,t&&r){const T=c;c=()=>bt(T())}let v,w=T=>{v=O.onStop=()=>{Je(T,l,4)}},z;if(Zt)if(w=Ee,t?n&&Ce(t,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const T=of();z=T.__watcherHandles||(T.__watcherHandles=[])}else return Ee;let N=m?new Array(e.length).fill(vn):vn;const D=()=>{if(O.active)if(t){const T=O.run();(r||d||(m?T.some((Y,ie)=>Ct(Y,N[ie])):Ct(T,N)))&&(v&&v(),Ce(t,l,3,[T,N===vn?void 0:m&&N[0]===vn?[]:N,w]),N=T)}else O.run()};D.allowRecurse=!!t;let k;a==="sync"?k=D:a==="post"?k=()=>me(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),k=()=>ia(D));const O=new Zr(c,k);t?n?D():N=O.run():a==="post"?me(O.run.bind(O),l&&l.suspense):O.run();const R=()=>{O.stop(),l&&l.scope&&Kr(l.scope.effects,O)};return z&&z.push(R),R}function ll(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?so(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=re;St(this);const s=oo(a,i.bind(r),n);return o?St(o):dt(),s}function so(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function bt(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ce(e))bt(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)bt(e[n],t);else if(Ri(e)||wt(e))e.forEach(n=>{bt(n,t)});else if(ji(e))for(const n in e)bt(e[n],t);return e}function rt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Mt(),Ce(l,n,8,[e.el,s,e,t]),Rt())}}/*! #__NO_SIDE_EFFECTS__ */function fl(e,t){return L(e)?(()=>ae({name:e.name},t,{setup:e}))():e}const Bt=e=>!!e.type.__asyncLoader,lo=e=>e.type.__isKeepAlive;function cl(e,t){fo(e,"a",t)}function ul(e,t){fo(e,"da",t)}function fo(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Jn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)lo(a.parent.vnode)&&dl(r,t,n,a),a=a.parent}}function dl(e,t,n,r){const a=Jn(t,e,r,!0);co(()=>{Kr(r[t],a)},n)}function Jn(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Mt(),St(n);const s=Ce(t,n,e,o);return dt(),Rt(),s});return r?a.unshift(i):a.push(i),i}}const Ye=e=>(t,n=re)=>(!Zt||e==="sp")&&Jn(e,(...r)=>t(...r),n),ml=Ye("bm"),pl=Ye("m"),hl=Ye("bu"),gl=Ye("u"),vl=Ye("bum"),co=Ye("um"),bl=Ye("sp"),yl=Ye("rtg"),xl=Ye("rtc");function _l(e,t=re){Jn("ec",e,t)}const uo="components";function bn(e,t){return kl(uo,e,!0,t)||e}const wl=Symbol.for("v-ndc");function kl(e,t,n=!0,r=!1){const a=ue||re;if(a){const i=a.type;if(e===uo){const s=tf(i,!1);if(s&&(s===t||s===Re(t)||s===Kn(Re(t))))return i}const o=Da(a[e]||i[e],t)||Da(a.appContext[e],t);return!o&&r?i:o}}function Da(e,t){return e&&(e[t]||e[Re(t)]||e[Kn(Re(t))])}function Al(e,t,n,r){let a;const i=n&&n[r];if(M(e)||te(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(Z(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}function mo(e,t,n={},r,a){if(ue.isCE||ue.parent&&Bt(ue.parent)&&ue.parent.isCE)return t!=="default"&&(n.name=t),B("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),ut();const o=i&&po(i(n)),s=Yl(be,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function po(e){return e.some(t=>zn(t)?!(t.type===Pt||t.type===be&&!po(t.children)):!0)?e:null}const Er=e=>e?Oo(e)?ca(e)||e.proxy:Er(e.parent):null,Ut=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Er(e.parent),$root:e=>Er(e.root),$emit:e=>e.emit,$options:e=>oa(e),$forceUpdate:e=>e.f||(e.f=()=>ia(e.update)),$nextTick:e=>e.n||(e.n=Js.bind(e.proxy)),$watch:e=>ll.bind(e)}),cr=(e,t)=>e!==J&&!e.__isScriptSetup&&H(e,t),Ol={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(cr(r,t))return o[t]=1,r[t];if(a!==J&&H(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&H(c,t))return o[t]=3,i[t];if(n!==J&&H(n,t))return o[t]=4,n[t];Cr&&(o[t]=0)}}const d=Ut[t];let m,v;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==J&&H(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,H(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return cr(a,t)?(a[t]=n,!0):r!==J&&H(r,t)?(r[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==J&&H(e,o)||cr(t,o)||(s=i[0])&&H(s,o)||H(r,o)||H(Ut,o)||H(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ha(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Cr=!0;function El(e){const t=oa(e),n=e.proxy,r=e.ctx;Cr=!1,t.beforeCreate&&Ba(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:w,updated:z,activated:N,deactivated:D,beforeDestroy:k,beforeUnmount:O,destroyed:R,unmounted:T,render:Y,renderTracked:ie,renderTriggered:oe,errorCaptured:ye,serverPrefetch:ve,expose:Fe,inheritAttrs:Lt,components:ln,directives:fn,filters:ar}=t;if(c&&Cl(c,r,null),o)for(const G in o){const K=o[G];L(K)&&(r[G]=K.bind(n))}if(a){const G=a.call(n,n);Z(G)&&(e.data=ea(G))}if(Cr=!0,i)for(const G in i){const K=i[G],tt=L(K)?K.bind(n,n):L(K.get)?K.get.bind(n,n):Ee,cn=!L(K)&&L(K.set)?K.set.bind(n):Ee,nt=it({get:tt,set:cn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Pe=>nt.value=Pe})}if(s)for(const G in s)ho(s[G],r,n,G);if(l){const G=L(l)?l.call(n):l;Reflect.ownKeys(G).forEach(K=>{Ml(K,G[K])})}d&&Ba(d,e,"c");function le(G,K){M(K)?K.forEach(tt=>G(tt.bind(n))):K&&G(K.bind(n))}if(le(ml,m),le(pl,v),le(hl,w),le(gl,z),le(cl,N),le(ul,D),le(_l,ye),le(xl,ie),le(yl,oe),le(vl,O),le(co,T),le(bl,ve),M(Fe))if(Fe.length){const G=e.exposed||(e.exposed={});Fe.forEach(K=>{Object.defineProperty(G,K,{get:()=>n[K],set:tt=>n[K]=tt})})}else e.exposed||(e.exposed={});Y&&e.render===Ee&&(e.render=Y),Lt!=null&&(e.inheritAttrs=Lt),ln&&(e.components=ln),fn&&(e.directives=fn)}function Cl(e,t,n=Ee){M(e)&&(e=Pr(e));for(const r in e){const a=e[r];let i;Z(a)?"default"in a?i=Sn(a.from||r,a.default,!0):i=Sn(a.from||r):i=Sn(a),ce(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ba(e,t,n){Ce(M(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ho(e,t,n,r){const a=r.includes(".")?so(n,r):()=>n[r];if(te(e)){const i=t[e];L(i)&&Tn(a,i)}else if(L(e))Tn(a,e.bind(n));else if(Z(e))if(M(e))e.forEach(i=>ho(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&Tn(a,i,e)}}function oa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Ln(l,c,o,!0)),Ln(l,t,o)),Z(t)&&i.set(t,l),l}function Ln(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Ln(e,i,n,!0),a&&a.forEach(o=>Ln(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Pl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Pl={data:Ua,props:Ya,emits:Ya,methods:Dt,computed:Dt,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:Dt,directives:Dt,watch:Sl,provide:Ua,inject:Tl};function Ua(e,t){return t?e?function(){return ae(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Tl(e,t){return Dt(Pr(e),Pr(t))}function Pr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function Dt(e,t){return e?ae(Object.create(null),e,t):t}function Ya(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:ae(Object.create(null),Ha(e),Ha(t??{})):t}function Sl(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function go(){return{app:null,config:{isNativeTag:is,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Il=0;function Nl(e,t){return function(r,a=null){L(r)||(r=ae({},r)),a!=null&&!Z(a)&&(a=null);const i=go(),o=new WeakSet;let s=!1;const l=i.app={_uid:Il++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:sf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=B(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,ca(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){jn=l;try{return c()}finally{jn=null}}};return l}}let jn=null;function Ml(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function Sn(e,t,n=!1){const r=re||ue;if(r||jn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:jn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}function Rl(e,t,n,r=!1){const a={},i={};Rn(i,Gn,1),e.propsDefaults=Object.create(null),vo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Bs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Fl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Xn(e.emitsOptions,v))continue;const w=t[v];if(l)if(H(i,v))w!==i[v]&&(i[v]=w,c=!0);else{const z=Re(v);a[z]=Tr(l,s,z,w,e,!1)}else w!==i[v]&&(i[v]=w,c=!0)}}}else{vo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!H(t,m)&&((d=Nt(m))===m||!H(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Tr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!H(t,m))&&(delete i[m],c=!0)}c&&De(e,"set","$attrs")}function vo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Pn(l))continue;const c=t[l];let d;a&&H(a,d=Re(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Xn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||J;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Tr(a,l,m,c[m],e,!H(c,m))}}return o}function Tr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=H(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(St(a),r=c[n]=l.call(null,t),dt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Nt(n))&&(r=!0))}return r}function bo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,w]=bo(m,t,!0);ae(o,v),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return Z(e)&&r.set(e,_t),_t;if(M(i))for(let d=0;d<i.length;d++){const m=Re(i[d]);Wa(m)&&(o[m]=J)}else if(i)for(const d in i){const m=Re(d);if(Wa(m)){const v=i[d],w=o[m]=M(v)||L(v)?{type:v}:ae({},v);if(w){const z=Va(Boolean,w.type),N=Va(String,w.type);w[0]=z>-1,w[1]=N<0||z<N,(z>-1||H(w,"default"))&&s.push(m)}}}const c=[o,s];return Z(e)&&r.set(e,c),c}function Wa(e){return e[0]!=="$"}function Ka(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function qa(e,t){return Ka(e)===Ka(t)}function Va(e,t){return M(t)?t.findIndex(n=>qa(n,e)):L(t)&&qa(t,e)?0:-1}const yo=e=>e[0]==="_"||e==="$stable",sa=e=>M(e)?e.map(Ie):[Ie(e)],Ll=(e,t,n)=>{if(t._n)return t;const r=_e((...a)=>sa(t(...a)),n);return r._c=!1,r},xo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(yo(a))continue;const i=e[a];if(L(i))t[a]=Ll(a,i,r);else if(i!=null){const o=sa(i);t[a]=()=>o}}},_o=(e,t)=>{const n=sa(t);e.slots.default=()=>n},jl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Rn(t,"_",n)):xo(t,e.slots={})}else e.slots={},t&&_o(e,t);Rn(e.slots,Gn,1)},zl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=J;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ae(a,t),!n&&s===1&&delete a._):(i=!t.$stable,xo(t,a)),o=t}else t&&(_o(e,t),o={default:1});if(i)for(const s in a)!yo(s)&&o[s]==null&&delete a[s]};function Sr(e,t,n,r,a=!1){if(M(e)){e.forEach((v,w)=>Sr(v,t&&(M(t)?t[w]:t),n,r,a));return}if(Bt(r)&&!a)return;const i=r.shapeFlag&4?ca(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===J?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(te(c)?(d[c]=null,H(m,c)&&(m[c]=null)):ce(c)&&(c.value=null)),L(l))Je(l,s,12,[o,d]);else{const v=te(l),w=ce(l);if(v||w){const z=()=>{if(e.f){const N=v?H(m,l)?m[l]:d[l]:l.value;a?M(N)&&Kr(N,i):M(N)?N.includes(i)||N.push(i):v?(d[l]=[i],H(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,H(m,l)&&(m[l]=o)):w&&(l.value=o,e.k&&(d[e.k]=o))};o?(z.id=-1,me(z,n)):z()}}}const me=sl;function $l(e){return Dl(e)}function Dl(e,t){const n=yr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:w=Ee,insertStaticContent:z}=e,N=(f,u,p,g=null,h=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!zt(f,u)&&(g=un(f),Pe(f,h,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:C}=u;switch(b){case Zn:D(f,u,p,g);break;case Pt:k(f,u,p,g);break;case ur:f==null&&O(u,p,g,A);break;case be:ln(f,u,p,g,h,x,A,y,_);break;default:C&1?Y(f,u,p,g,h,x,A,y,_):C&6?fn(f,u,p,g,h,x,A,y,_):(C&64||C&128)&&b.process(f,u,p,g,h,x,A,y,_,ht)}S!=null&&h&&Sr(S,f&&f.ref,x,u||f,!u)},D=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},k=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},O=(f,u,p,g)=>{[f.el,f.anchor]=z(f.children,u,p,g,f.el,f.anchor)},R=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},T=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},Y=(f,u,p,g,h,x,A,y,_)=>{A=A||u.type==="svg",f==null?ie(u,p,g,h,x,A,y,_):ve(f,u,h,x,A,y,_)},ie=(f,u,p,g,h,x,A,y)=>{let _,b;const{type:S,props:C,shapeFlag:I,transition:F,dirs:$}=f;if(_=f.el=o(f.type,x,C&&C.is,C),I&8?d(_,f.children):I&16&&ye(f.children,_,null,g,h,x&&S!=="foreignObject",A,y),$&&rt(f,null,g,"created"),oe(_,f,f.scopeId,A,g),C){for(const W in C)W!=="value"&&!Pn(W)&&i(_,W,null,C[W],x,f.children,g,h,Le);"value"in C&&i(_,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Se(b,g,f)}$&&rt(f,null,g,"beforeMount");const q=(!h||h&&!h.pendingBranch)&&F&&!F.persisted;q&&F.beforeEnter(_),r(_,u,p),((b=C&&C.onVnodeMounted)||q||$)&&me(()=>{b&&Se(b,g,f),q&&F.enter(_),$&&rt(f,null,g,"mounted")},h)},oe=(f,u,p,g,h)=>{if(p&&w(f,p),g)for(let x=0;x<g.length;x++)w(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;oe(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ye=(f,u,p,g,h,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const S=f[b]=y?Ve(f[b]):Ie(f[b]);N(null,S,u,p,g,h,x,A,y)}},ve=(f,u,p,g,h,x,A)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:S}=u;_|=f.patchFlag&16;const C=f.props||J,I=u.props||J;let F;p&&at(p,!1),(F=I.onVnodeBeforeUpdate)&&Se(F,p,u,f),S&&rt(u,f,p,"beforeUpdate"),p&&at(p,!0);const $=h&&u.type!=="foreignObject";if(b?Fe(f.dynamicChildren,b,y,p,g,$,x):A||K(f,u,y,null,p,g,$,x,!1),_>0){if(_&16)Lt(y,u,C,I,p,g,h);else if(_&2&&C.class!==I.class&&i(y,"class",null,I.class,h),_&4&&i(y,"style",C.style,I.style,h),_&8){const q=u.dynamicProps;for(let W=0;W<q.length;W++){const ee=q[W],xe=C[ee],gt=I[ee];(gt!==xe||ee==="value")&&i(y,ee,xe,gt,h,f.children,p,g,Le)}}_&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Lt(y,u,C,I,p,g,h);((F=I.onVnodeUpdated)||S)&&me(()=>{F&&Se(F,p,u,f),S&&rt(u,f,p,"updated")},g)},Fe=(f,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],S=_.el&&(_.type===be||!zt(_,b)||_.shapeFlag&70)?m(_.el):p;N(_,b,S,null,g,h,x,A,!0)}},Lt=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==J)for(const y in p)!Pn(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,x,Le);for(const y in g){if(Pn(y))continue;const _=g[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,A,u.children,h,x,Le)}"value"in g&&i(f,"value",p.value,g.value)}},ln=(f,u,p,g,h,x,A,y,_)=>{const b=u.el=f?f.el:s(""),S=u.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:I,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,p,g),r(S,p,g),ye(u.children,p,S,h,x,A,y,_)):C>0&&C&64&&I&&f.dynamicChildren?(Fe(f.dynamicChildren,I,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&wo(f,u,!0)):K(f,u,p,S,h,x,A,y,_)},fn=(f,u,p,g,h,x,A,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,_):ar(u,p,g,h,x,A,_):Aa(f,u,_)},ar=(f,u,p,g,h,x,A)=>{const y=f.component=Jl(f,g,h);if(lo(f)&&(y.ctx.renderer=ht),Zl(y),y.asyncDep){if(h&&h.registerDep(y,le),!f.el){const _=y.subTree=B(Pt);k(null,_,u,p)}return}le(y,f,u,p,h,x,A)},Aa=(f,u,p)=>{const g=u.component=f.component;if(al(f,u,p))if(g.asyncDep&&!g.asyncResolved){G(g,u,p);return}else g.next=u,Gs(g.update),g.update();else u.el=f.el,g.vnode=u},le=(f,u,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:S,bu:C,u:I,parent:F,vnode:$}=f,q=S,W;at(f,!1),S?(S.el=$.el,G(f,S,A)):S=$,C&&lr(C),(W=S.props&&S.props.onVnodeBeforeUpdate)&&Se(W,F,S,$),at(f,!0);const ee=fr(f),xe=f.subTree;f.subTree=ee,N(xe,ee,m(xe.el),un(xe),f,h,x),S.el=ee.el,q===null&&il(f,ee.el),I&&me(I,h),(W=S.props&&S.props.onVnodeUpdated)&&me(()=>Se(W,F,S,$),h)}else{let S;const{el:C,props:I}=u,{bm:F,m:$,parent:q}=f,W=Bt(u);if(at(f,!1),F&&lr(F),!W&&(S=I&&I.onVnodeBeforeMount)&&Se(S,q,u),at(f,!0),C&&or){const ee=()=>{f.subTree=fr(f),or(C,f.subTree,f,h,null)};W?u.type.__asyncLoader().then(()=>!f.isUnmounted&&ee()):ee()}else{const ee=f.subTree=fr(f);N(null,ee,p,g,f,h,x),u.el=ee.el}if($&&me($,h),!W&&(S=I&&I.onVnodeMounted)){const ee=u;me(()=>Se(S,q,ee),h)}(u.shapeFlag&256||q&&Bt(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&me(f.a,h),f.isMounted=!0,u=p=g=null}},_=f.effect=new Zr(y,()=>ia(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,at(f,!0),b()},G=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Fl(f,u.props,g,p),zl(f,u.children,p),Mt(),za(),Rt()},K=(f,u,p,g,h,x,A,y,_=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,C=u.children,{patchFlag:I,shapeFlag:F}=u;if(I>0){if(I&128){cn(b,C,p,g,h,x,A,y,_);return}else if(I&256){tt(b,C,p,g,h,x,A,y,_);return}}F&8?(S&16&&Le(b,h,x),C!==b&&d(p,C)):S&16?F&16?cn(b,C,p,g,h,x,A,y,_):Le(b,h,x,!0):(S&8&&d(p,""),F&16&&ye(C,p,g,h,x,A,y,_))},tt=(f,u,p,g,h,x,A,y,_)=>{f=f||_t,u=u||_t;const b=f.length,S=u.length,C=Math.min(b,S);let I;for(I=0;I<C;I++){const F=u[I]=_?Ve(u[I]):Ie(u[I]);N(f[I],F,p,null,h,x,A,y,_)}b>S?Le(f,h,x,!0,!1,C):ye(u,p,g,h,x,A,y,_,C)},cn=(f,u,p,g,h,x,A,y,_)=>{let b=0;const S=u.length;let C=f.length-1,I=S-1;for(;b<=C&&b<=I;){const F=f[b],$=u[b]=_?Ve(u[b]):Ie(u[b]);if(zt(F,$))N(F,$,p,null,h,x,A,y,_);else break;b++}for(;b<=C&&b<=I;){const F=f[C],$=u[I]=_?Ve(u[I]):Ie(u[I]);if(zt(F,$))N(F,$,p,null,h,x,A,y,_);else break;C--,I--}if(b>C){if(b<=I){const F=I+1,$=F<S?u[F].el:g;for(;b<=I;)N(null,u[b]=_?Ve(u[b]):Ie(u[b]),p,$,h,x,A,y,_),b++}}else if(b>I)for(;b<=C;)Pe(f[b],h,x,!0),b++;else{const F=b,$=b,q=new Map;for(b=$;b<=I;b++){const he=u[b]=_?Ve(u[b]):Ie(u[b]);he.key!=null&&q.set(he.key,b)}let W,ee=0;const xe=I-$+1;let gt=!1,Ca=0;const jt=new Array(xe);for(b=0;b<xe;b++)jt[b]=0;for(b=F;b<=C;b++){const he=f[b];if(ee>=xe){Pe(he,h,x,!0);continue}let Te;if(he.key!=null)Te=q.get(he.key);else for(W=$;W<=I;W++)if(jt[W-$]===0&&zt(he,u[W])){Te=W;break}Te===void 0?Pe(he,h,x,!0):(jt[Te-$]=b+1,Te>=Ca?Ca=Te:gt=!0,N(he,u[Te],p,null,h,x,A,y,_),ee++)}const Pa=gt?Hl(jt):_t;for(W=Pa.length-1,b=xe-1;b>=0;b--){const he=$+b,Te=u[he],Ta=he+1<S?u[he+1].el:g;jt[b]===0?N(null,Te,p,Ta,h,x,A,y,_):gt&&(W<0||b!==Pa[W]?nt(Te,p,Ta,2):W--)}}},nt=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){nt(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,ht);return}if(A===be){r(x,u,p);for(let C=0;C<_.length;C++)nt(_[C],u,p,g);r(f.anchor,u,p);return}if(A===ur){R(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),me(()=>y.enter(x),h);else{const{leave:C,delayLeave:I,afterLeave:F}=y,$=()=>r(x,u,p),q=()=>{C(x,()=>{$(),F&&F()})};I?I(x,$,q):q()}else r(x,u,p)},Pe=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:S,patchFlag:C,dirs:I}=f;if(y!=null&&Sr(y,null,p,f,!0),S&256){u.ctx.deactivate(f);return}const F=S&1&&I,$=!Bt(f);let q;if($&&(q=A&&A.onVnodeBeforeUnmount)&&Se(q,u,f),S&6)as(f.component,p,g);else{if(S&128){f.suspense.unmount(p,g);return}F&&rt(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,p,h,ht,g):b&&(x!==be||C>0&&C&64)?Le(b,u,p,!1,!0):(x===be&&C&384||!h&&S&16)&&Le(_,u,p),g&&Oa(f)}($&&(q=A&&A.onVnodeUnmounted)||F)&&me(()=>{q&&Se(q,u,f),F&&rt(f,null,u,"unmounted")},p)},Oa=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===be){rs(p,g);return}if(u===ur){T(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,_=()=>A(p,x);y?y(f.el,x,_):_()}else x()},rs=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},as=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&lr(g),h.stop(),x&&(x.active=!1,Pe(A,f,u,p)),y&&me(y,u),me(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Le=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Pe(f[A],u,p,g,h)},un=f=>f.shapeFlag&6?un(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ea=(f,u,p)=>{f==null?u._vnode&&Pe(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),za(),no(),u._vnode=f},ht={p:N,um:Pe,m:nt,r:Oa,mt:ar,mc:ye,pc:K,pbc:Fe,n:un,o:e};let ir,or;return t&&([ir,or]=t(ht)),{render:Ea,hydrate:ir,createApp:Nl(Ea,ir)}}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function wo(e,t,n=!1){const r=e.children,a=t.children;if(M(r)&&M(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ve(a[i]),s.el=o.el),n||wo(o,s)),s.type===Zn&&(s.el=o.el)}}function Hl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Bl=e=>e.__isTeleport,be=Symbol.for("v-fgt"),Zn=Symbol.for("v-txt"),Pt=Symbol.for("v-cmt"),ur=Symbol.for("v-stc"),Yt=[];let Ae=null;function ut(e=!1){Yt.push(Ae=e?null:[])}function Ul(){Yt.pop(),Ae=Yt[Yt.length-1]||null}let Jt=1;function Xa(e){Jt+=e}function ko(e){return e.dynamicChildren=Jt>0?Ae||_t:null,Ul(),Jt>0&&Ae&&Ae.push(e),e}function Ot(e,t,n,r,a,i){return ko(j(e,t,n,r,a,i,!0))}function Yl(e,t,n,r,a){return ko(B(e,t,n,r,a,!0))}function zn(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const Gn="__vInternal",Ao=({key:e})=>e??null,In=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?te(e)||ce(e)||L(e)?{i:ue,r:e,k:t,f:!!n}:e:null);function j(e,t=null,n=null,r=0,a=null,i=e===be?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ao(t),ref:t&&In(t),scopeId:io,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ue};return s?(la(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),Jt>0&&!o&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const B=Wl;function Wl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===wl)&&(e=Pt),zn(e)){const s=Tt(e,t,!0);return n&&la(s,n),Jt>0&&!i&&Ae&&(s.shapeFlag&6?Ae[Ae.indexOf(e)]=s:Ae.push(s)),s.patchFlag|=-2,s}if(nf(e)&&(e=e.__vccOpts),t){t=Kl(t);let{class:s,style:l}=t;s&&!te(s)&&(t.class=rn(s)),Z(l)&&(Zi(l)&&!M(l)&&(l=ae({},l)),t.style=Xr(l))}const o=te(e)?1:ol(e)?128:Bl(e)?64:Z(e)?4:L(e)?2:0;return j(e,t,n,r,a,o,i,!0)}function Kl(e){return e?Zi(e)||Gn in e?ae({},e):e:null}function Tt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?ql(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ao(s),ref:t&&t.ref?n&&a?M(a)?a.concat(In(t)):[a,In(t)]:In(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==be?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tt(e.ssContent),ssFallback:e.ssFallback&&Tt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function $e(e=" ",t=0){return B(Zn,null,e,t)}function Ie(e){return e==null||typeof e=="boolean"?B(Pt):M(e)?B(be,null,e.slice()):typeof e=="object"?Ve(e):B(Zn,null,String(e))}function Ve(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Tt(e)}function la(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),la(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Gn in t)?t._ctx=ue:a===3&&ue&&(ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:ue},n=32):(t=String(t),r&64?(n=16,t=[$e(t)]):n=8);e.children=t,e.shapeFlag|=n}function ql(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=rn([t.class,r.class]));else if(a==="style")t.style=Xr([t.style,r.style]);else if(Un(a)){const i=t[a],o=r[a];o&&i!==o&&!(M(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Se(e,t,n,r=null){Ce(e,t,7,[n,r])}const Vl=go();let Xl=0;function Jl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Vl,i={uid:Xl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ys(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bo(r,a),emitsOptions:ao(r,a),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=tl.bind(null,i),e.ce&&e.ce(i),i}let re=null,fa,vt,Ja="__VUE_INSTANCE_SETTERS__";(vt=yr()[Ja])||(vt=yr()[Ja]=[]),vt.push(e=>re=e),fa=e=>{vt.length>1?vt.forEach(t=>t(e)):vt[0](e)};const St=e=>{fa(e),e.scope.on()},dt=()=>{re&&re.scope.off(),fa(null)};function Oo(e){return e.vnode.shapeFlag&4}let Zt=!1;function Zl(e,t=!1){Zt=t;const{props:n,children:r}=e.vnode,a=Oo(e);Rl(e,n,a,t),jl(e,r);const i=a?Gl(e,t):void 0;return Zt=!1,i}function Gl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Gi(new Proxy(e.ctx,Ol));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?ef(e):null;St(e),Mt();const i=Je(r,e,0,[e.props,a]);if(Rt(),dt(),Fi(i)){if(i.then(dt,dt),t)return i.then(o=>{Za(e,o,t)}).catch(o=>{Vn(o,e,0)});e.asyncDep=i}else Za(e,i,t)}else Eo(e,t)}function Za(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=Qi(t)),Eo(e,n)}let Ga;function Eo(e,t,n){const r=e.type;if(!e.render){if(!t&&Ga&&!r.render){const a=r.template||oa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ae(ae({isCustomElement:i,delimiters:s},o),l);r.render=Ga(a,c)}}e.render=r.render||Ee}{St(e),Mt();try{El(e)}finally{Rt(),dt()}}}function Ql(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}}))}function ef(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Ql(e)},slots:e.slots,emit:e.emit,expose:t}}function ca(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qi(Gi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ut)return Ut[n](e)},has(t,n){return n in t||n in Ut}}))}function tf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function nf(e){return L(e)&&"__vccOpts"in e}const it=(e,t)=>Vs(e,t,Zt);function rf(e,t,n){const r=arguments.length;return r===2?Z(t)&&!M(t)?zn(t)?B(e,null,[t]):B(e,t):B(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&zn(n)&&(n=[n]),B(e,t,n))}const af=Symbol.for("v-scx"),of=()=>Sn(af),sf="3.3.6",lf="http://www.w3.org/2000/svg",st=typeof document<"u"?document:null,Qa=st&&st.createElement("template"),ff={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?st.createElementNS(lf,e):st.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>st.createTextNode(e),createComment:e=>st.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>st.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Qa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Qa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},cf=Symbol("_vtc");function uf(e,t,n){const r=e[cf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const df=Symbol("_vod");function mf(e,t,n){const r=e.style,a=te(n);if(n&&!a){if(t&&!te(t))for(const i in t)n[i]==null&&Ir(r,i,"");for(const i in n)Ir(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),df in e&&(r.display=i)}}const ei=/\s*!important$/;function Ir(e,t,n){if(M(n))n.forEach(r=>Ir(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=pf(e,t);ei.test(n)?e.setProperty(Nt(r),n.replace(ei,""),"important"):e[r]=n}}const ti=["Webkit","Moz","ms"],dr={};function pf(e,t){const n=dr[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return dr[t]=r;r=Kn(r);for(let a=0;a<ti.length;a++){const i=ti[a]+r;if(i in e)return dr[t]=i}return t}const ni="http://www.w3.org/1999/xlink";function hf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ni,t.slice(6,t.length)):e.setAttributeNS(ni,t,n);else{const i=vs(t);n==null||i&&!zi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function gf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=zi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function vf(e,t,n,r){e.addEventListener(t,n,r)}function bf(e,t,n,r){e.removeEventListener(t,n,r)}const ri=Symbol("_vei");function yf(e,t,n,r,a=null){const i=e[ri]||(e[ri]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=xf(t);if(r){const c=i[t]=kf(r,a);vf(e,s,c,l)}else o&&(bf(e,s,o,l),i[t]=void 0)}}const ai=/(?:Once|Passive|Capture)$/;function xf(e){let t;if(ai.test(e)){t={};let r;for(;r=e.match(ai);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Nt(e.slice(2)),t]}let mr=0;const _f=Promise.resolve(),wf=()=>mr||(_f.then(()=>mr=0),mr=Date.now());function kf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ce(Af(r,n.value),t,5,[r])};return n.value=e,n.attached=wf(),n}function Af(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ii=/^on[a-z]/,Of=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?uf(e,r,a):t==="style"?mf(e,n,r):Un(t)?Wr(t)||yf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ef(e,t,r,a))?gf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),hf(e,t,r,a))};function Ef(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ii.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ii.test(t)&&te(n)?!1:t in e}const Cf=ae({patchProp:Of},ff);let oi;function Pf(){return oi||(oi=$l(Cf))}const Tf=(...e)=>{const t=Pf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Sf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Sf(e){return te(e)?document.querySelector(e):e}const Qn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},If={props:{color:{type:String,default:"secondary"},title:{type:String,default:"title"},decorations:{type:Number,default:0}}},Nf={class:"p-2 flex items-center border-b-2 gap-2 border-black"},Mf={class:"w-5 h-5 border-2 border-black bg-white rounded-xl"},Rf={class:"grow text-center font-bold"},Ff={class:"p-2"};function Lf(e,t,n,r,a,i){return ut(),Ot("div",{class:rn(`bg-[var(--color-${n.color})] rounded-xl border-4 border-black shadow-solid`)},[j("div",Nf,[(ut(!0),Ot(be,null,Al(n.decorations,o=>(ut(),Ot("div",Mf))),256)),j("div",Rf,bs(n.title),1)]),j("div",Ff,[mo(e.$slots,"default")])],2)}const jf=Qn(If,[["render",Lf]]),zf={mounted(){const e="[you@lareii.github.io ~]$&nbsp;",t=this.$parent.$el.children.item(1).children.item(0),n=document.getElementById("prompt"),r=document.getElementById("input"),a=document.getElementById("history");function i(o){o!=""&&(o=="help"?a.innerHTML+="help yourself<br>":o=="whoami"?a.innerHTML+="you<br>":o=="clear"?a.innerHTML="":a.innerHTML+="command not found: "+o+"<br>")}r.addEventListener("keydown",o=>{o.key==="Enter"&&(a.innerHTML+=e+r.value+"<br>",i(r.value),r.value="",t.scrollTo(0,t.scrollHeight))}),t.addEventListener("click",o=>{r.focus()}),a.innerHTML='get started with typing "help"<br>',n.innerHTML=e}},$f={class:"font-mono"},Df=j("div",{id:"history",class:"flex items-center text-sm"},null,-1),Hf=j("div",{class:"flex items-center text-sm"},[j("div",{id:"prompt"}),j("input",{id:"input",class:"w-full bg-transparent outline-none",type:"text"})],-1),Bf=[Df,Hf];function Uf(e,t,n,r,a,i){return ut(),Ot("div",$f,Bf)}const Yf=Qn(zf,[["render",Uf]]),Wf={props:{color:{type:String,default:"secondary"}}};function Kf(e,t,n,r,a,i){return ut(),Ot("div",{class:rn(`bg-[var(--color-${n.color})] shadow-solid rounded-xl border-4 border-black p-1 hover:translate-y-[5px] hover:translate-x-[5px] hover:shadow-none`)},[mo(e.$slots,"default")],2)}const qf=Qn(Wf,[["render",Kf]]),Vf={components:{TheWindow:jf,TheTerminal:Yf,TheButton:qf},methods:{changeEmoji(){const e=document.getElementById("emoji");e.innerText=e.innerText=="✨"?"✌️":"✨",document.title=document.title=="✨"?"✌️":"✨"}}},Xf={class:"sm:pt-20 relative max-w-screen-md mx-auto p-5"},Jf={class:"font-black text-5xl"},Zf=j("span",{class:"whitespace-nowrap bg-[var(--color-quinary)]"},[$e("emirhan!"),j("span",{class:"text-[10px]"},"a.k.a. larei")],-1),Gf=j("div",{class:"font-bold text-lg mb-2"},[$e(" 17 years-old, university student. self-taught developer, open-source enthusiast. programming, music, math. "),j("i",null,"*insert here some lorem ipsum*")],-1),Qf={class:"flex max-sm:flex-col gap-3 mb-3"},ec=j("div",{class:"font-bold h-40 overflow-y-auto no-scrollbar"},[j("div",null,[$e("- "),j("s",null,"birth")]),j("div",null,[$e("- "),j("s",null,"learn")]),j("div",null,[$e("- "),j("s",null,"explore")]),j("div",null,[$e("- "),j("s",null,"study")]),j("div",null,"- university"),j("div",null,"- career"),j("div",null,"- work"),j("div",null,"- love"),j("div",null,"- die")],-1),tc={class:"h-40 w-full overflow-auto no-scrollbar whitespace-nowrap"},nc={class:"flex max-sm:flex-col justify-between items-center gap-3"},rc={class:"flex flex-wrap justify-center text-2xl gap-2"},ac={href:"https://github.com/lareii",target:"_blank"},ic={href:"https://www.linkedin.com/in/emirhan-b-38a913297/",target:"_blank"},oc={href:"https://discord.com/users/748539900793716887",target:"_blank"},sc={href:"https://reddit.com/u/lareidev",target:"_blank"},lc={href:"https://open.spotify.com/user/800b0v2zx3p2n6apxfh2bwcfn",target:"_blank"},fc={href:"https://mastodon.com.tr/@larei",target:"_blank"},cc=j("a",{class:"font-bold",href:"https://github.com/lareii/lareii.github.io",target:"_blank"}," gimme a ⭐ ",-1);function uc(e,t,n,r,a,i){const o=bn("TheWindow"),s=bn("TheTerminal"),l=bn("font-awesome-icon"),c=bn("TheButton");return ut(),Ot("main",Xf,[B(o,{class:"mb-3",title:"about_meeee.md",decorations:3},{default:_e(()=>[j("div",Jf,[$e(" it's "),Zf,$e("   "),j("span",{id:"emoji",onDblclick:t[0]||(t[0]=(...d)=>i.changeEmoji&&i.changeEmoji(...d)),class:"text-[2rem] select-none"},"✨",32)]),Gf]),_:1}),j("div",Qf,[B(o,{class:"sm:basis-1/3",decorations:1,color:"quaternary",title:"todo_list.txt"},{default:_e(()=>[ec]),_:1}),B(o,{class:"sm:basis-2/3 sm:w-0",color:"tertiary",title:"terminal.sh",decorations:1},{default:_e(()=>[j("div",tc,[B(s)])]),_:1})]),j("div",nc,[j("div",rc,[B(c,{color:"secondary",class:"w-12 text-center"},{default:_e(()=>[j("a",ac,[B(l,{icon:"fa-brands fa-github"})])]),_:1}),B(c,{color:"tertiary",class:"w-12 text-center"},{default:_e(()=>[j("a",ic,[B(l,{icon:"fa-brands fa-linkedin"})])]),_:1}),B(c,{color:"quaternary",class:"w-12 text-center"},{default:_e(()=>[j("a",oc,[B(l,{icon:"fa-brands fa-discord"})])]),_:1}),B(c,{color:"quinary",class:"w-12 text-center"},{default:_e(()=>[j("a",sc,[B(l,{icon:"fa-brands fa-reddit"})])]),_:1}),B(c,{color:"senary",class:"w-12 text-center"},{default:_e(()=>[j("a",lc,[B(l,{icon:"fa-brands fa-spotify"})])]),_:1}),B(c,{color:"septenary",class:"w-12 text-center"},{default:_e(()=>[j("a",fc,[B(l,{icon:"fa-brands fa-mastodon"})])]),_:1})]),B(c,{color:"octonary",class:"w-fit"},{default:_e(()=>[cc]),_:1})])])}const dc=Qn(Vf,[["render",uc]]);function si(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?si(Object(n),!0).forEach(function(r){ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):si(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $n(e){"@babel/helpers - typeof";return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$n(e)}function mc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function li(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pc(e,t,n){return t&&li(e.prototype,t),n&&li(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ua(e,t){return gc(e)||bc(e,t)||Co(e,t)||xc()}function an(e){return hc(e)||vc(e)||Co(e)||yc()}function hc(e){if(Array.isArray(e))return Nr(e)}function gc(e){if(Array.isArray(e))return e}function vc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Co(e,t){if(e){if(typeof e=="string")return Nr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nr(e,t)}}function Nr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fi=function(){},da={},Po={},To=null,So={mark:fi,measure:fi};try{typeof window<"u"&&(da=window),typeof document<"u"&&(Po=document),typeof MutationObserver<"u"&&(To=MutationObserver),typeof performance<"u"&&(So=performance)}catch{}var _c=da.navigator||{},ci=_c.userAgent,ui=ci===void 0?"":ci,Ge=da,X=Po,di=To,yn=So;Ge.document;var We=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Io=~ui.indexOf("MSIE")||~ui.indexOf("Trident/"),xn,_n,wn,kn,An,He="___FONT_AWESOME___",Mr=16,No="fa",Mo="svg-inline--fa",mt="data-fa-i2svg",Rr="data-fa-pseudo-element",wc="data-fa-pseudo-element-pending",ma="data-prefix",pa="data-icon",mi="fontawesome-i2svg",kc="async",Ac=["HTML","HEAD","STYLE","SCRIPT"],Ro=function(){try{return!0}catch{return!1}}(),V="classic",Q="sharp",ha=[V,Q];function on(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var Gt=on((xn={},ne(xn,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ne(xn,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),xn)),Qt=on((_n={},ne(_n,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ne(_n,Q,{solid:"fass",regular:"fasr",light:"fasl"}),_n)),en=on((wn={},ne(wn,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ne(wn,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),wn)),Oc=on((kn={},ne(kn,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ne(kn,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),kn)),Ec=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Fo="fa-layers-text",Cc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Pc=on((An={},ne(An,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ne(An,Q,{900:"fass",400:"fasr",300:"fasl"}),An)),Lo=[1,2,3,4,5,6,7,8,9,10],Tc=Lo.concat([11,12,13,14,15,16,17,18,19,20]),Sc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tn=new Set;Object.keys(Qt[V]).map(tn.add.bind(tn));Object.keys(Qt[Q]).map(tn.add.bind(tn));var Ic=[].concat(ha,an(tn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lt.GROUP,lt.SWAP_OPACITY,lt.PRIMARY,lt.SECONDARY]).concat(Lo.map(function(e){return"".concat(e,"x")})).concat(Tc.map(function(e){return"w-".concat(e)})),Wt=Ge.FontAwesomeConfig||{};function Nc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Mc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Rc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Rc.forEach(function(e){var t=ua(e,2),n=t[0],r=t[1],a=Mc(Nc(n));a!=null&&(Wt[r]=a)})}var jo={styleDefault:"solid",familyDefault:"classic",cssPrefix:No,replacementClass:Mo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wt.familyPrefix&&(Wt.cssPrefix=Wt.familyPrefix);var It=E(E({},jo),Wt);It.autoReplaceSvg||(It.observeMutations=!1);var P={};Object.keys(jo).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){It[e]=n,Kt.forEach(function(r){return r(P)})},get:function(){return It[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){It.cssPrefix=t,Kt.forEach(function(n){return n(P)})},get:function(){return It.cssPrefix}});Ge.FontAwesomeConfig=P;var Kt=[];function Fc(e){return Kt.push(e),function(){Kt.splice(Kt.indexOf(e),1)}}var qe=Mr,Me={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Lc(e){if(!(!e||!We)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var jc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nn(){for(var e=12,t="";e-- >0;)t+=jc[Math.random()*62|0];return t}function Ft(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ga(e){return e.classList?Ft(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function zo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(zo(e[n]),'" ')},"").trim()}function er(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function va(e){return e.size!==Me.size||e.x!==Me.x||e.y!==Me.y||e.rotate!==Me.rotate||e.flipX||e.flipY}function $c(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Dc(e){var t=e.transform,n=e.width,r=n===void 0?Mr:n,a=e.height,i=a===void 0?Mr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Io?l+="translate(".concat(t.x/qe-r/2,"em, ").concat(t.y/qe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/qe,"em), calc(-50% + ").concat(t.y/qe,"em)) "):l+="translate(".concat(t.x/qe,"em, ").concat(t.y/qe,"em) "),l+="scale(".concat(t.size/qe*(t.flipX?-1:1),", ").concat(t.size/qe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Hc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $o(){var e=No,t=Mo,n=P.cssPrefix,r=P.replacementClass,a=Hc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var pi=!1;function pr(){P.autoAddCss&&!pi&&(Lc($o()),pi=!0)}var Bc={mixout:function(){return{dom:{css:$o,insertCss:pr}}},hooks:function(){return{beforeDOMElementCreation:function(){pr()},beforeI2svg:function(){pr()}}}},Be=Ge||{};Be[He]||(Be[He]={});Be[He].styles||(Be[He].styles={});Be[He].hooks||(Be[He].hooks={});Be[He].shims||(Be[He].shims=[]);var Oe=Be[He],Do=[],Uc=function e(){X.removeEventListener("DOMContentLoaded",e),Dn=1,Do.map(function(t){return t()})},Dn=!1;We&&(Dn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Dn||X.addEventListener("DOMContentLoaded",Uc));function Yc(e){We&&(Dn?setTimeout(e,0):Do.push(e))}function sn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?zo(e):"<".concat(t," ").concat(zc(r),">").concat(i.map(sn).join(""),"</").concat(t,">")}function hi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Wc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},hr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Wc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Kc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Fr(e){var t=Kc(e);return t.length===1?t[0].toString(16):null}function qc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function gi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Lr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=gi(t);typeof Oe.hooks.addPack=="function"&&!a?Oe.hooks.addPack(e,gi(t)):Oe.styles[e]=E(E({},Oe.styles[e]||{}),i),e==="fas"&&Lr("fa",t)}var On,En,Cn,yt=Oe.styles,Vc=Oe.shims,Xc=(On={},ne(On,V,Object.values(en[V])),ne(On,Q,Object.values(en[Q])),On),ba=null,Ho={},Bo={},Uo={},Yo={},Wo={},Jc=(En={},ne(En,V,Object.keys(Gt[V])),ne(En,Q,Object.keys(Gt[Q])),En);function Zc(e){return~Ic.indexOf(e)}function Gc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Zc(a)?a:null}var Ko=function(){var t=function(i){return hr(yt,function(o,s,l){return o[l]=hr(s,i,{}),o},{})};Ho=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Bo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Wo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in yt||P.autoFetchSvg,r=hr(Vc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Uo=r.names,Yo=r.unicodes,ba=tr(P.styleDefault,{family:P.familyDefault})};Fc(function(e){ba=tr(e.styleDefault,{family:P.familyDefault})});Ko();function ya(e,t){return(Ho[e]||{})[t]}function Qc(e,t){return(Bo[e]||{})[t]}function ft(e,t){return(Wo[e]||{})[t]}function qo(e){return Uo[e]||{prefix:null,iconName:null}}function eu(e){var t=Yo[e],n=ya("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qe(){return ba}var xa=function(){return{prefix:null,iconName:null,rest:[]}};function tr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,a=Gt[r][e],i=Qt[r][e]||Qt[r][a],o=e in Oe.styles?e:null;return i||o||null}var vi=(Cn={},ne(Cn,V,Object.keys(en[V])),ne(Cn,Q,Object.keys(en[Q])),Cn);function nr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ne(t,V,"".concat(P.cssPrefix,"-").concat(V)),ne(t,Q,"".concat(P.cssPrefix,"-").concat(Q)),t),o=null,s=V;(e.includes(i[V])||e.some(function(c){return vi[V].includes(c)}))&&(s=V),(e.includes(i[Q])||e.some(function(c){return vi[Q].includes(c)}))&&(s=Q);var l=e.reduce(function(c,d){var m=Gc(P.cssPrefix,d);if(yt[d]?(d=Xc[s].includes(d)?Oc[s][d]:d,o=d,c.prefix=d):Jc[s].indexOf(d)>-1?(o=d,c.prefix=tr(d,{family:s})):m?c.iconName=m:d!==P.replacementClass&&d!==i[V]&&d!==i[Q]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?qo(c.iconName):{},w=ft(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||w||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!yt.far&&yt.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},xa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Q&&(yt.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=ft(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qe()||"fas"),l}var tu=function(){function e(){mc(this,e),this.definitions={}}return pc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Lr(s,o[s]);var l=en[V][s];l&&Lr(l,o[s]),Ko()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),bi=[],xt={},Et={},nu=Object.keys(Et);function ru(e,t){var n=t.mixoutsTo;return bi=e,xt={},Object.keys(Et).forEach(function(r){nu.indexOf(r)===-1&&delete Et[r]}),bi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),$n(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xt[o]||(xt[o]=[]),xt[o].push(i[o])})}r.provides&&r.provides(Et)}),n}function jr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Et[e]?Et[e].apply(null,t):void 0}function zr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Qe();if(t)return t=ft(n,t)||t,hi(Vo.definitions,n,t)||hi(Oe.styles,n,t)}var Vo=new tu,au=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,pt("noAuto")},iu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(pt("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Yc(function(){su({autoReplaceSvgRoot:n}),pt("watch",t)})}},ou={icon:function(t){if(t===null)return null;if($n(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ft(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=tr(t[0]);return{prefix:r,iconName:ft(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(Ec))){var a=nr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qe(),iconName:ft(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Qe();return{prefix:i,iconName:ft(i,t)||t}}}},ge={noAuto:au,config:P,dom:iu,parse:ou,library:Vo,findIconDefinition:zr,toHtml:sn},su=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Oe.styles).length>0||P.autoFetchSvg)&&We&&P.autoReplaceSvg&&ge.dom.i2svg({node:r})};function rr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return sn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(We){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function lu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(va(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=er(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function fu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function _a(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,w=v===void 0?!1:v,z=r.found?r:n,N=z.width,D=z.height,k=a==="fak",O=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(ve){return m.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(m.classes).join(" "),R={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},T=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};w&&(R.attributes[mt]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(d||nn())},children:[l]}),delete R.attributes.title);var Y=E(E({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},T),m.styles)}),ie=r.found&&n.found?Ue("generateAbstractMask",Y)||{children:[],attributes:{}}:Ue("generateAbstractIcon",Y)||{children:[],attributes:{}},oe=ie.children,ye=ie.attributes;return Y.children=oe,Y.attributes=ye,s?fu(Y):lu(Y)}function yi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[mt]="");var d=E({},o.styles);va(a)&&(d.transform=Dc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=er(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function cu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=er(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var gr=Oe.styles;function $r(e){var t=e[0],n=e[1],r=e.slice(4),a=ua(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(lt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(lt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(lt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var uu={found:!1,width:512,height:512};function du(e,t){!Ro&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Dr(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Qe()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=qo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&gr[t]&&gr[t][e]){var o=gr[t][e];return r($r(o))}du(e,t),r(E(E({},uu),{},{icon:P.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var xi=function(){},Hr=P.measurePerformance&&yn&&yn.mark&&yn.measure?yn:{mark:xi,measure:xi},Ht='FA "6.4.2"',mu=function(t){return Hr.mark("".concat(Ht," ").concat(t," begins")),function(){return Xo(t)}},Xo=function(t){Hr.mark("".concat(Ht," ").concat(t," ends")),Hr.measure("".concat(Ht," ").concat(t),"".concat(Ht," ").concat(t," begins"),"".concat(Ht," ").concat(t," ends"))},wa={begin:mu,end:Xo},Nn=function(){};function _i(e){var t=e.getAttribute?e.getAttribute(mt):null;return typeof t=="string"}function pu(e){var t=e.getAttribute?e.getAttribute(ma):null,n=e.getAttribute?e.getAttribute(pa):null;return t&&n}function hu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function gu(){if(P.autoReplaceSvg===!0)return Mn.replace;var e=Mn[P.autoReplaceSvg];return e||Mn.replace}function vu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function bu(e){return X.createElement(e)}function Jo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?vu:bu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Jo(o,{ceFn:r}))}),a}function yu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Mn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Jo(a),n)}),n.getAttribute(mt)===null&&P.keepOriginalSource){var r=X.createComment(yu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ga(n).indexOf(P.replacementClass))return Mn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return sn(s)}).join(`
`);n.setAttribute(mt,""),n.innerHTML=o}};function wi(e){e()}function Zo(e,t){var n=typeof t=="function"?t:Nn;if(e.length===0)n();else{var r=wi;P.mutateApproach===kc&&(r=Ge.requestAnimationFrame||wi),r(function(){var a=gu(),i=wa.begin("mutate");e.map(a),i(),n()})}}var ka=!1;function Go(){ka=!0}function Br(){ka=!1}var Hn=null;function ki(e){if(di&&P.observeMutations){var t=e.treeCallback,n=t===void 0?Nn:t,r=e.nodeCallback,a=r===void 0?Nn:r,i=e.pseudoElementsCallback,o=i===void 0?Nn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;Hn=new di(function(c){if(!ka){var d=Qe();Ft(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!_i(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&_i(m.target)&&~Sc.indexOf(m.attributeName))if(m.attributeName==="class"&&pu(m.target)){var v=nr(ga(m.target)),w=v.prefix,z=v.iconName;m.target.setAttribute(ma,w||d),z&&m.target.setAttribute(pa,z)}else hu(m.target)&&a(m.target)})}}),We&&Hn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xu(){Hn&&Hn.disconnect()}function _u(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function wu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=nr(ga(e));return a.prefix||(a.prefix=Qe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Qc(a.prefix,e.innerText)||ya(a.prefix,Fr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ku(e){var t=Ft(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||nn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Au(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Me,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=wu(e),r=n.iconName,a=n.prefix,i=n.rest,o=ku(e),s=jr("parseNodeAttributes",{},e),l=t.styleParser?_u(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Me,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ou=Oe.styles;function Qo(e){var t=P.autoReplaceSvg==="nest"?Ai(e,{styleParser:!1}):Ai(e);return~t.extra.classes.indexOf(Fo)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var et=new Set;ha.map(function(e){et.add("fa-".concat(e))});Object.keys(Gt[V]).map(et.add.bind(et));Object.keys(Gt[Q]).map(et.add.bind(et));et=an(et);function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(mi,"-").concat(m))},a=function(m){return n.remove("".concat(mi,"-").concat(m))},i=P.autoFetchSvg?et:ha.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Ou));i.includes("fa")||i.push("fa");var o=[".".concat(Fo,":not([").concat(mt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(mt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ft(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=wa.begin("onTree"),c=s.reduce(function(d,m){try{var v=Qo(m);v&&d.push(v)}catch(w){Ro||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Zo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Eu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qo(e).then(function(n){n&&Zo([n],t)})}function Cu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:zr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:zr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Pu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Me:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,w=n.titleId,z=w===void 0?null:w,N=n.classes,D=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,R=n.styles,T=R===void 0?{}:R;if(t){var Y=t.prefix,ie=t.iconName,oe=t.icon;return rr(E({type:"icon"},t),function(){return pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(v?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(z||nn()):(O["aria-hidden"]="true",O.focusable="false")),_a({icons:{main:$r(oe),mask:l?$r(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:ie,transform:E(E({},Me),a),symbol:o,title:v,maskId:d,titleId:z,extra:{attributes:O,styles:T,classes:D}})})}},Tu={mixout:function(){return{icon:Cu(Pu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Oi,n.nodeCallback=Eu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Oi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(w,z){Promise.all([Dr(a,s),d.iconName?Dr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=ua(N,2),k=D[0],O=D[1];w([n,_a({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(z)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=er(s);l.length>0&&(a.style=l);var c;return va(o)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Su={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return rr({type:"layer"},function(){pt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(an(i)).join(" ")},children:o}]})}}}},Iu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return rr({type:"counter",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),cu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(an(s))}})})}}}},Nu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Me:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,w=v===void 0?{}:v;return rr({type:"text",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),yi({content:n,transform:E(E({},Me),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(P.cssPrefix,"-layers-text")].concat(an(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Io){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,yi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Mu=new RegExp('"',"ug"),Ei=[1105920,1112319];function Ru(e){var t=e.replace(Mu,""),n=qc(t,0),r=n>=Ei[0]&&n<=Ei[1],a=t.length===2?t[0]===t[1]:!1;return{value:Fr(a?t[0]:t),isSecondary:r||a}}function Ci(e,t){var n="".concat(wc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ft(e.children),o=i.filter(function(oe){return oe.getAttribute(Rr)===t})[0],s=Ge.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Cc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Q:V,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Qt[v][l[2].toLowerCase()]:Pc[v][c],z=Ru(m),N=z.value,D=z.isSecondary,k=l[0].startsWith("FontAwesome"),O=ya(w,N),R=O;if(k){var T=eu(N);T.iconName&&T.prefix&&(O=T.iconName,w=T.prefix)}if(O&&!D&&(!o||o.getAttribute(ma)!==w||o.getAttribute(pa)!==R)){e.setAttribute(n,R),o&&e.removeChild(o);var Y=Au(),ie=Y.extra;ie.attributes[Rr]=t,Dr(O,w).then(function(oe){var ye=_a(E(E({},Y),{},{icons:{main:oe,mask:xa()},prefix:w,iconName:R,extra:ie,watchable:!0})),ve=X.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=ye.map(function(Fe){return sn(Fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Fu(e){return Promise.all([Ci(e,"::before"),Ci(e,"::after")])}function Lu(e){return e.parentNode!==document.head&&!~Ac.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Rr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Pi(e){if(We)return new Promise(function(t,n){var r=Ft(e.querySelectorAll("*")).filter(Lu).map(Fu),a=wa.begin("searchPseudoElements");Go(),Promise.all(r).then(function(){a(),Br(),t()}).catch(function(){a(),Br(),n()})})}var ju={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Pi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;P.searchPseudoElements&&Pi(a)}}},Ti=!1,zu={mixout:function(){return{dom:{unwatch:function(){Go(),Ti=!0}}}},hooks:function(){return{bootstrap:function(){ki(jr("mutationObserverCallbacks",{}))},noAuto:function(){xu()},watch:function(n){var r=n.observeMutationsRoot;Ti?Br():ki(jr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Si=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},$u={mixout:function(){return{parse:{transform:function(n){return Si(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Si(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},vr={x:0,y:0,width:"100%",height:"100%"};function Ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Du(e){return e.tag==="g"?e.children:[e]}var Hu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?nr(a.split(" ").map(function(o){return o.trim()})):xa();return i.prefix||(i.prefix=Qe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,w=$c({transform:l,containerWidth:m,iconWidth:c}),z={tag:"rect",attributes:E(E({},vr),{},{fill:"white"})},N=d.children?{children:d.children.map(Ii)}:{},D={tag:"g",attributes:E({},w.inner),children:[Ii(E({tag:d.tag,attributes:E(E({},d.attributes),w.path)},N))]},k={tag:"g",attributes:E({},w.outer),children:[D]},O="mask-".concat(s||nn()),R="clip-".concat(s||nn()),T={tag:"mask",attributes:E(E({},vr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,k]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:Du(v)},T]};return r.push(Y,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(O,")")},vr)}),{children:r,attributes:a}}}},Bu={provides:function(t){var n=!1;Ge.matchMedia&&(n=Ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Uu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Yu=[Bc,Tu,Su,Iu,Nu,ju,zu,$u,Hu,Bu,Uu];ru(Yu,{mixoutsTo:ge});ge.noAuto;ge.config;var Wu=ge.library;ge.dom;var Ur=ge.parse;ge.findIconDefinition;ge.toHtml;var Ku=ge.icon;ge.layer;ge.text;ge.counter;function Ni(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ni(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ni(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bn(e){"@babel/helpers - typeof";return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bn(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Vu(e,t){if(e==null)return{};var n=qu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},es={exports:{}};(function(e){(function(t){var n=function(k,O,R){if(!c(O)||m(O)||v(O)||w(O)||l(O))return O;var T,Y=0,ie=0;if(d(O))for(T=[],ie=O.length;Y<ie;Y++)T.push(n(k,O[Y],R));else{T={};for(var oe in O)Object.prototype.hasOwnProperty.call(O,oe)&&(T[k(oe,R)]=n(k,O[oe],R))}return T},r=function(k,O){O=O||{};var R=O.separator||"_",T=O.split||/(?=[A-Z])/;return k.split(T).join(R)},a=function(k){return z(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,R){return R?R.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},v=function(k){return s.call(k)=="[object RegExp]"},w=function(k){return s.call(k)=="[object Boolean]"},z=function(k){return k=k-0,k===k},N=function(k,O){var R=O&&"process"in O?O.process:O;return typeof R!="function"?k:function(T,Y){return R(T,k,Y)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(Xu)})(es);var Ju=es.exports,Zu=["class","style"];function Gu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Ju.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Qu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ts(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ts(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Qu(d);break;case"style":l.style=Gu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Vu(n,Zu);return rf(e.tag,ze(ze(ze({},t),{},{class:a.class,style:ze(ze({},a.style),o)},a.attrs),s),r)}var ns=!1;try{ns=!0}catch{}function ed(){if(!ns&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function br(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?de({},e,t):{}}function td(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},de(t,"fa-".concat(e.size),e.size!==null),de(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),de(t,"fa-pull-".concat(e.pull),e.pull!==null),de(t,"fa-swap-opacity",e.swapOpacity),de(t,"fa-bounce",e.bounce),de(t,"fa-shake",e.shake),de(t,"fa-beat",e.beat),de(t,"fa-fade",e.fade),de(t,"fa-beat-fade",e.beatFade),de(t,"fa-flash",e.flash),de(t,"fa-spin-pulse",e.spinPulse),de(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Mi(e){if(e&&Bn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ur.icon)return Ur.icon(e);if(e===null)return null;if(Bn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var nd=fl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=it(function(){return Mi(t.icon)}),i=it(function(){return br("classes",td(t))}),o=it(function(){return br("transform",typeof t.transform=="string"?Ur.transform(t.transform):t.transform)}),s=it(function(){return br("mask",Mi(t.mask))}),l=it(function(){return Ku(a.value,ze(ze(ze(ze({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Tn(l,function(d){if(!d)return ed("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=it(function(){return l.value?ts(l.value.abstract[0],{},r):null});return function(){return c.value}}}),rd={prefix:"fab",iconName:"reddit",icon:[512,512,[],"f1a1","M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"]},ad={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},id={prefix:"fab",iconName:"spotify",icon:[496,512,[],"f1bc","M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},od={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},sd={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},ld={prefix:"fab",iconName:"mastodon",icon:[448,512,[],"f4f6","M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"]};Wu.add(id,ad,od,rd,sd,ld);Tf(dc).component("font-awesome-icon",nd).mount("#app");
