(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Br(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const X={},yt=[],Oe=()=>{},as=()=>!1,is=/^on[^a-z]/,Hn=e=>is.test(e),Yr=e=>e.startsWith("onUpdate:"),ae=Object.assign,Wr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},os=Object.prototype.hasOwnProperty,H=(e,t)=>os.call(e,t),M=Array.isArray,xt=e=>Un(e)==="[object Map]",Ri=e=>Un(e)==="[object Set]",L=e=>typeof e=="function",te=e=>typeof e=="string",Kr=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Fi=e=>(J(e)||L(e))&&L(e.then)&&L(e.catch),Li=Object.prototype.toString,Un=e=>Li.call(e),ss=e=>Un(e).slice(8,-1),ji=e=>Un(e)==="[object Object]",qr=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,On=Br(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ls=/-(\w)/g,Me=Bn(e=>e.replace(ls,(t,n)=>n?n.toUpperCase():"")),fs=/\B([A-Z])/g,St=Bn(e=>e.replace(fs,"-$1").toLowerCase()),Yn=Bn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ir=Bn(e=>e?`on${Yn(e)}`:""),Ot=(e,t)=>!Object.is(e,t),or=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Nn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},cs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Sa;const br=()=>Sa||(Sa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?ps(r):Vr(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(te(e)||J(e))return e}const us=/;(?![^(]*\))/g,ds=/:([^]+)/,ms=/\/\*[^]*?\*\//g;function ps(e){const t={};return e.replace(ms,"").split(us).forEach(n=>{if(n){const r=n.split(ds);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Wn(e){let t="";if(te(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const r=Wn(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const hs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gs=Br(hs);function zi(e){return!!e||e===""}const vs=e=>te(e)?e:e==null?"":M(e)||J(e)&&(e.toString===Li||!L(e.toString))?JSON.stringify(e,$i,2):String(e),$i=(e,t)=>t&&t.__v_isRef?$i(e,t.value):xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ri(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!M(t)&&!ji(t)?String(t):t;let we;class bs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ys(e,t=we){t&&t.active&&t.effects.push(e)}function xs(){return we}const Xr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Di=e=>(e.w&Je)>0,Hi=e=>(e.n&Je)>0,ws=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Je},_s=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Di(a)&&!Hi(a)?a.delete(e):t[n++]=a,a.w&=~Je,a.n&=~Je}t.length=n}},yr=new WeakMap;let jt=0,Je=1;const xr=30;let _e;const ft=Symbol(""),wr=Symbol("");class Jr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ys(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=Ve;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,Ve=!0,Je=1<<++jt,jt<=xr?ws(this):Ia(this),this.fn()}finally{jt<=xr&&_s(this),Je=1<<--jt,_e=this.parent,Ve=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(Ia(this),this.onStop&&this.onStop(),this.active=!1)}}function Ia(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ve=!0;const Ui=[];function It(){Ui.push(Ve),Ve=!1}function Nt(){const e=Ui.pop();Ve=e===void 0?!0:e}function pe(e,t,n){if(Ve&&_e){let r=yr.get(e);r||yr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Xr()),Bi(a)}}function Bi(e,t){let n=!1;jt<=xr?Hi(e)||(e.n|=Je,n=!Di(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function ze(e,t,n,r,a,i){const o=yr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&M(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":M(e)?qr(n)&&s.push(o.get("length")):(s.push(o.get(ft)),xt(e)&&s.push(o.get(wr)));break;case"delete":M(e)||(s.push(o.get(ft)),xt(e)&&s.push(o.get(wr)));break;case"set":xt(e)&&s.push(o.get(ft));break}if(s.length===1)s[0]&&_r(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);_r(Xr(l))}}function _r(e,t){const n=M(e)?e:[...e];for(const r of n)r.computed&&Na(r);for(const r of n)r.computed||Na(r)}function Na(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ks=Br("__proto__,__v_isRef,__isVue"),Yi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Kr)),Ma=As();function As(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){It();const r=U(this)[t].apply(this,n);return Nt(),r}}),e}function Os(e){const t=U(this);return pe(t,"has",e),t.hasOwnProperty(e)}class Wi{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?zs:Xi:i?Vi:qi).get(t))return t;const o=M(t);if(!a){if(o&&H(Ma,n))return Reflect.get(Ma,n,r);if(n==="hasOwnProperty")return Os}const s=Reflect.get(t,n,r);return(Kr(n)?Yi.has(n):ks(n))||(a||pe(t,"get",n),i)?s:ce(s)?o&&qr(n)?s:s.value:J(s)?a?Ji(s):Qr(s):s}}class Ki extends Wi{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Kt(i)&&ce(i)&&!ce(r))return!1;if(!this._shallow&&(!kr(r)&&!Kt(r)&&(i=U(i),r=U(r)),!M(t)&&ce(i)&&!ce(r)))return i.value=r,!0;const o=M(t)&&qr(n)?Number(n)<t.length:H(t,n),s=Reflect.set(t,n,r,a);return t===U(a)&&(o?Ot(r,i)&&ze(t,"set",n,r):ze(t,"add",n,r)),s}deleteProperty(t,n){const r=H(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&ze(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Kr(n)||!Yi.has(n))&&pe(t,"has",n),r}ownKeys(t){return pe(t,"iterate",M(t)?"length":ft),Reflect.ownKeys(t)}}class Es extends Wi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Cs=new Ki,Ps=new Es,Ts=new Ki(!0),Zr=e=>e,Kn=e=>Reflect.getPrototypeOf(e);function cn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(Ot(t,i)&&pe(a,"get",t),pe(a,"get",i));const{has:o}=Kn(a),s=r?Zr:n?na:ta;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function un(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(Ot(e,a)&&pe(r,"has",e),pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function dn(e,t=!1){return e=e.__v_raw,!t&&pe(U(e),"iterate",ft),Reflect.get(e,"size",e)}function Ra(e){e=U(e);const t=U(this);return Kn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function Fa(e,t){t=U(t);const n=U(this),{has:r,get:a}=Kn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Ot(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function La(e){const t=U(this),{has:n,get:r}=Kn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function ja(){const e=U(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function mn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Zr:e?na:ta;return!e&&pe(s,"iterate",ft),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function pn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=xt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Zr:t?na:ta;return!t&&pe(i,"iterate",l?wr:ft),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function Ss(){const e={get(i){return cn(this,i)},get size(){return dn(this)},has:un,add:Ra,set:Fa,delete:La,clear:ja,forEach:mn(!1,!1)},t={get(i){return cn(this,i,!1,!0)},get size(){return dn(this)},has:un,add:Ra,set:Fa,delete:La,clear:ja,forEach:mn(!1,!0)},n={get(i){return cn(this,i,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:mn(!0,!1)},r={get(i){return cn(this,i,!0,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=pn(i,!1,!1),n[i]=pn(i,!0,!1),t[i]=pn(i,!1,!0),r[i]=pn(i,!0,!0)}),[e,n,t,r]}const[Is,Ns,Ms,Rs]=Ss();function Gr(e,t){const n=t?e?Rs:Ms:e?Ns:Is;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const Fs={get:Gr(!1,!1)},Ls={get:Gr(!1,!0)},js={get:Gr(!0,!1)},qi=new WeakMap,Vi=new WeakMap,Xi=new WeakMap,zs=new WeakMap;function $s(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ds(e){return e.__v_skip||!Object.isExtensible(e)?0:$s(ss(e))}function Qr(e){return Kt(e)?e:ea(e,!1,Cs,Fs,qi)}function Hs(e){return ea(e,!1,Ts,Ls,Vi)}function Ji(e){return ea(e,!0,Ps,js,Xi)}function ea(e,t,n,r,a){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ds(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function wt(e){return Kt(e)?wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Kt(e){return!!(e&&e.__v_isReadonly)}function kr(e){return!!(e&&e.__v_isShallow)}function Zi(e){return wt(e)||Kt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Gi(e){return Nn(e,"__v_skip",!0),e}const ta=e=>J(e)?Qr(e):e,na=e=>J(e)?Ji(e):e;function Us(e){Ve&&_e&&(e=U(e),Bi(e.dep||(e.dep=Xr())))}function Bs(e,t){e=U(e);const n=e.dep;n&&_r(n)}function ce(e){return!!(e&&e.__v_isRef===!0)}function Ys(e){return ce(e)?e.value:e}const Ws={get:(e,t,n)=>Ys(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ce(a)&&!ce(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Qi(e){return wt(e)?e:new Proxy(e,Ws)}class Ks{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Jr(t,()=>{this._dirty||(this._dirty=!0,Bs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Us(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function qs(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Oe):(r=e.get,a=e.set),new Ks(r,a,i||!a,n)}function Xe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){qn(i,t,n)}return a}function Ee(e,t,n,r){if(L(e)){const i=Xe(e,t,n,r);return i&&Fi(i)&&i.catch(o=>{qn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function qn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Xe(l,null,10,[e,o,s]);return}}Vs(e,n,a,r)}function Vs(e,t,n,r=!0){console.error(e)}let qt=!1,Ar=!1;const se=[];let Ie=0;const _t=[];let Le=null,it=0;const eo=Promise.resolve();let ra=null;function Xs(e){const t=ra||eo;return e?t.then(this?e.bind(this):e):t}function Js(e){let t=Ie+1,n=se.length;for(;t<n;){const r=t+n>>>1;Vt(se[r])<e?t=r+1:n=r}return t}function aa(e){(!se.length||!se.includes(e,qt&&e.allowRecurse?Ie+1:Ie))&&(e.id==null?se.push(e):se.splice(Js(e.id),0,e),to())}function to(){!qt&&!Ar&&(Ar=!0,ra=eo.then(ro))}function Zs(e){const t=se.indexOf(e);t>Ie&&se.splice(t,1)}function Gs(e){M(e)?_t.push(...e):(!Le||!Le.includes(e,e.allowRecurse?it+1:it))&&_t.push(e),to()}function za(e,t=qt?Ie+1:0){for(;t<se.length;t++){const n=se[t];n&&n.pre&&(se.splice(t,1),t--,n())}}function no(e){if(_t.length){const t=[...new Set(_t)];if(_t.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,r)=>Vt(n)-Vt(r)),it=0;it<Le.length;it++)Le[it]();Le=null,it=0}}const Vt=e=>e.id==null?1/0:e.id,Qs=(e,t)=>{const n=Vt(e)-Vt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ro(e){Ar=!1,qt=!0,se.sort(Qs);const t=Oe;try{for(Ie=0;Ie<se.length;Ie++){const n=se[Ie];n&&n.active!==!1&&Xe(n,null,14)}}finally{Ie=0,se.length=0,no(),qt=!1,ra=null,(se.length||_t.length)&&ro()}}function el(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||X;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||X;v&&(a=n.map(_=>te(_)?_.trim():_)),m&&(a=n.map(cs))}let s,l=r[s=ir(t)]||r[s=ir(Me(t))];!l&&i&&(l=r[s=ir(St(t))]),l&&Ee(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ee(c,e,6,a)}}function ao(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=ao(c,t,!0);d&&(s=!0,ae(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(J(e)&&r.set(e,null),null):(M(i)?i.forEach(l=>o[l]=null):ae(o,i),J(e)&&r.set(e,o),o)}function Vn(e,t){return!e||!Hn(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,St(t))||H(e,t))}let ue=null,io=null;function Mn(e){const t=ue;return ue=e,io=e&&e.type.__scopeId||null,t}function En(e,t=ue,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Xa(-1);const i=Mn(t);let o;try{o=e(...a)}finally{Mn(i),r._d&&Xa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function sr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:_,ctx:z,inheritAttrs:N}=e;let D,k;const O=Mn(e);try{if(n.shapeFlag&4){const T=a||r;D=Se(d.call(T,T,m,i,_,v,z)),k=l}else{const T=t;D=Se(T.length>1?T(i,{attrs:l,slots:s,emit:c}):T(i,null)),k=t.props?l:tl(l)}}catch(T){Ut.length=0,qn(T,e,1),D=Z(Et)}let R=D;if(k&&N!==!1){const T=Object.keys(k),{shapeFlag:B}=R;T.length&&B&7&&(o&&T.some(Yr)&&(k=nl(k,o)),R=Ct(R,k))}return n.dirs&&(R=Ct(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),D=R,Mn(O),D}const tl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hn(n))&&((t||(t={}))[n]=e[n]);return t},nl=(e,t)=>{const n={};for(const r in e)(!Yr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function rl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?$a(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Vn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?$a(r,o,c):!0:!!o;return!1}function $a(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Vn(n,i))return!0}return!1}function al({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const il=e=>e.__isSuspense;function ol(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):Gs(e)}const hn={};function Cn(e,t,n){return oo(e,t,n)}function oo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=X){var s;const l=xs()===((s=re)==null?void 0:s.scope)?re:null;let c,d=!1,m=!1;if(ce(e)?(c=()=>e.value,d=kr(e)):wt(e)?(c=()=>e,r=!0):M(e)?(m=!0,d=e.some(T=>wt(T)||kr(T)),c=()=>e.map(T=>{if(ce(T))return T.value;if(wt(T))return gt(T);if(L(T))return Xe(T,l,2)})):L(e)?t?c=()=>Xe(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Ee(e,l,3,[_])}:c=Oe,t&&r){const T=c;c=()=>gt(T())}let v,_=T=>{v=O.onStop=()=>{Xe(T,l,4)}},z;if(Jt)if(_=Oe,t?n&&Ee(t,l,3,[c(),m?[]:void 0,_]):c(),a==="sync"){const T=of();z=T.__watcherHandles||(T.__watcherHandles=[])}else return Oe;let N=m?new Array(e.length).fill(hn):hn;const D=()=>{if(O.active)if(t){const T=O.run();(r||d||(m?T.some((B,ie)=>Ot(B,N[ie])):Ot(T,N)))&&(v&&v(),Ee(t,l,3,[T,N===hn?void 0:m&&N[0]===hn?[]:N,_]),N=T)}else O.run()};D.allowRecurse=!!t;let k;a==="sync"?k=D:a==="post"?k=()=>me(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),k=()=>aa(D));const O=new Jr(c,k);t?n?D():N=O.run():a==="post"?me(O.run.bind(O),l&&l.suspense):O.run();const R=()=>{O.stop(),l&&l.scope&&Wr(l.scope.effects,O)};return z&&z.push(R),R}function sl(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?so(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=re;Pt(this);const s=oo(a,i.bind(r),n);return o?Pt(o):ct(),s}function so(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function gt(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ce(e))gt(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)gt(e[n],t);else if(Ri(e)||xt(e))e.forEach(n=>{gt(n,t)});else if(ji(e))for(const n in e)gt(e[n],t);return e}function nt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(It(),Ee(l,n,8,[e.el,s,e,t]),Nt())}}/*! #__NO_SIDE_EFFECTS__ */function ll(e,t){return L(e)?(()=>ae({name:e.name},t,{setup:e}))():e}const Dt=e=>!!e.type.__asyncLoader,lo=e=>e.type.__isKeepAlive;function fl(e,t){fo(e,"a",t)}function cl(e,t){fo(e,"da",t)}function fo(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Xn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)lo(a.parent.vnode)&&ul(r,t,n,a),a=a.parent}}function ul(e,t,n,r){const a=Xn(t,e,r,!0);co(()=>{Wr(r[t],a)},n)}function Xn(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;It(),Pt(n);const s=Ee(t,n,e,o);return ct(),Nt(),s});return r?a.unshift(i):a.push(i),i}}const Ue=e=>(t,n=re)=>(!Jt||e==="sp")&&Xn(e,(...r)=>t(...r),n),dl=Ue("bm"),ml=Ue("m"),pl=Ue("bu"),hl=Ue("u"),gl=Ue("bum"),co=Ue("um"),vl=Ue("sp"),bl=Ue("rtg"),yl=Ue("rtc");function xl(e,t=re){Xn("ec",e,t)}const uo="components";function lr(e,t){return _l(uo,e,!0,t)||e}const wl=Symbol.for("v-ndc");function _l(e,t,n=!0,r=!1){const a=ue||re;if(a){const i=a.type;if(e===uo){const s=tf(i,!1);if(s&&(s===t||s===Me(t)||s===Yn(Me(t))))return i}const o=Da(a[e]||i[e],t)||Da(a.appContext[e],t);return!o&&r?i:o}}function Da(e,t){return e&&(e[t]||e[Me(t)]||e[Yn(Me(t))])}function kl(e,t,n,r){let a;const i=n&&n[r];if(M(e)||te(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(J(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}function Al(e,t,n={},r,a){if(ue.isCE||ue.parent&&Dt(ue.parent)&&ue.parent.isCE)return t!=="default"&&(n.name=t),Z("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),kt();const o=i&&mo(i(n)),s=Yl(be,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function mo(e){return e.some(t=>Ln(t)?!(t.type===Et||t.type===be&&!mo(t.children)):!0)?e:null}const Or=e=>e?Ao(e)?fa(e)||e.proxy:Or(e.parent):null,Ht=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Or(e.parent),$root:e=>Or(e.root),$emit:e=>e.emit,$options:e=>ia(e),$forceUpdate:e=>e.f||(e.f=()=>aa(e.update)),$nextTick:e=>e.n||(e.n=Xs.bind(e.proxy)),$watch:e=>sl.bind(e)}),fr=(e,t)=>e!==X&&!e.__isScriptSetup&&H(e,t),Ol={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(fr(r,t))return o[t]=1,r[t];if(a!==X&&H(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&H(c,t))return o[t]=3,i[t];if(n!==X&&H(n,t))return o[t]=4,n[t];Er&&(o[t]=0)}}const d=Ht[t];let m,v;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==X&&H(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,H(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return fr(a,t)?(a[t]=n,!0):r!==X&&H(r,t)?(r[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==X&&H(e,o)||fr(t,o)||(s=i[0])&&H(s,o)||H(r,o)||H(Ht,o)||H(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ha(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Er=!0;function El(e){const t=ia(e),n=e.proxy,r=e.ctx;Er=!1,t.beforeCreate&&Ua(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:_,updated:z,activated:N,deactivated:D,beforeDestroy:k,beforeUnmount:O,destroyed:R,unmounted:T,render:B,renderTracked:ie,renderTriggered:oe,errorCaptured:ye,serverPrefetch:ve,expose:Re,inheritAttrs:Rt,components:on,directives:sn,filters:nr}=t;if(c&&Cl(c,r,null),o)for(const G in o){const W=o[G];L(W)&&(r[G]=W.bind(n))}if(a){const G=a.call(n,n);J(G)&&(e.data=Qr(G))}if(Er=!0,i)for(const G in i){const W=i[G],et=L(W)?W.bind(n,n):L(W.get)?W.get.bind(n,n):Oe,ln=!L(W)&&L(W.set)?W.set.bind(n):Oe,tt=at({get:et,set:ln});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Ce=>tt.value=Ce})}if(s)for(const G in s)po(s[G],r,n,G);if(l){const G=L(l)?l.call(n):l;Reflect.ownKeys(G).forEach(W=>{Ml(W,G[W])})}d&&Ua(d,e,"c");function le(G,W){M(W)?W.forEach(et=>G(et.bind(n))):W&&G(W.bind(n))}if(le(dl,m),le(ml,v),le(pl,_),le(hl,z),le(fl,N),le(cl,D),le(xl,ye),le(yl,ie),le(bl,oe),le(gl,O),le(co,T),le(vl,ve),M(Re))if(Re.length){const G=e.exposed||(e.exposed={});Re.forEach(W=>{Object.defineProperty(G,W,{get:()=>n[W],set:et=>n[W]=et})})}else e.exposed||(e.exposed={});B&&e.render===Oe&&(e.render=B),Rt!=null&&(e.inheritAttrs=Rt),on&&(e.components=on),sn&&(e.directives=sn)}function Cl(e,t,n=Oe){M(e)&&(e=Cr(e));for(const r in e){const a=e[r];let i;J(a)?"default"in a?i=Pn(a.from||r,a.default,!0):i=Pn(a.from||r):i=Pn(a),ce(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ua(e,t,n){Ee(M(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function po(e,t,n,r){const a=r.includes(".")?so(n,r):()=>n[r];if(te(e)){const i=t[e];L(i)&&Cn(a,i)}else if(L(e))Cn(a,e.bind(n));else if(J(e))if(M(e))e.forEach(i=>po(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&Cn(a,i,e)}}function ia(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Rn(l,c,o,!0)),Rn(l,t,o)),J(t)&&i.set(t,l),l}function Rn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Rn(e,i,n,!0),a&&a.forEach(o=>Rn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Pl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Pl={data:Ba,props:Ya,emits:Ya,methods:zt,computed:zt,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:zt,directives:zt,watch:Sl,provide:Ba,inject:Tl};function Ba(e,t){return t?e?function(){return ae(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Tl(e,t){return zt(Cr(e),Cr(t))}function Cr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function zt(e,t){return e?ae(Object.create(null),e,t):t}function Ya(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:ae(Object.create(null),Ha(e),Ha(t??{})):t}function Sl(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function ho(){return{app:null,config:{isNativeTag:as,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Il=0;function Nl(e,t){return function(r,a=null){L(r)||(r=ae({},r)),a!=null&&!J(a)&&(a=null);const i=ho(),o=new WeakSet;let s=!1;const l=i.app={_uid:Il++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:sf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=Z(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,fa(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Fn=l;try{return c()}finally{Fn=null}}};return l}}let Fn=null;function Ml(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function Pn(e,t,n=!1){const r=re||ue;if(r||Fn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Fn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}function Rl(e,t,n,r=!1){const a={},i={};Nn(i,Zn,1),e.propsDefaults=Object.create(null),go(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Hs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Fl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Vn(e.emitsOptions,v))continue;const _=t[v];if(l)if(H(i,v))_!==i[v]&&(i[v]=_,c=!0);else{const z=Me(v);a[z]=Pr(l,s,z,_,e,!1)}else _!==i[v]&&(i[v]=_,c=!0)}}}else{go(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!H(t,m)&&((d=St(m))===m||!H(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Pr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!H(t,m))&&(delete i[m],c=!0)}c&&ze(e,"set","$attrs")}function go(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(On(l))continue;const c=t[l];let d;a&&H(a,d=Me(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Vn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||X;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Pr(a,l,m,c[m],e,!H(c,m))}}return o}function Pr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=H(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Pt(a),r=c[n]=l.call(null,t),ct())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===St(n))&&(r=!0))}return r}function vo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,_]=vo(m,t,!0);ae(o,v),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return J(e)&&r.set(e,yt),yt;if(M(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);Wa(m)&&(o[m]=X)}else if(i)for(const d in i){const m=Me(d);if(Wa(m)){const v=i[d],_=o[m]=M(v)||L(v)?{type:v}:ae({},v);if(_){const z=Va(Boolean,_.type),N=Va(String,_.type);_[0]=z>-1,_[1]=N<0||z<N,(z>-1||H(_,"default"))&&s.push(m)}}}const c=[o,s];return J(e)&&r.set(e,c),c}function Wa(e){return e[0]!=="$"}function Ka(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function qa(e,t){return Ka(e)===Ka(t)}function Va(e,t){return M(t)?t.findIndex(n=>qa(n,e)):L(t)&&qa(t,e)?0:-1}const bo=e=>e[0]==="_"||e==="$stable",oa=e=>M(e)?e.map(Se):[Se(e)],Ll=(e,t,n)=>{if(t._n)return t;const r=En((...a)=>oa(t(...a)),n);return r._c=!1,r},yo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(bo(a))continue;const i=e[a];if(L(i))t[a]=Ll(a,i,r);else if(i!=null){const o=oa(i);t[a]=()=>o}}},xo=(e,t)=>{const n=oa(t);e.slots.default=()=>n},jl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Nn(t,"_",n)):yo(t,e.slots={})}else e.slots={},t&&xo(e,t);Nn(e.slots,Zn,1)},zl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=X;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ae(a,t),!n&&s===1&&delete a._):(i=!t.$stable,yo(t,a)),o=t}else t&&(xo(e,t),o={default:1});if(i)for(const s in a)!bo(s)&&o[s]==null&&delete a[s]};function Tr(e,t,n,r,a=!1){if(M(e)){e.forEach((v,_)=>Tr(v,t&&(M(t)?t[_]:t),n,r,a));return}if(Dt(r)&&!a)return;const i=r.shapeFlag&4?fa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===X?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(te(c)?(d[c]=null,H(m,c)&&(m[c]=null)):ce(c)&&(c.value=null)),L(l))Xe(l,s,12,[o,d]);else{const v=te(l),_=ce(l);if(v||_){const z=()=>{if(e.f){const N=v?H(m,l)?m[l]:d[l]:l.value;a?M(N)&&Wr(N,i):M(N)?N.includes(i)||N.push(i):v?(d[l]=[i],H(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,H(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(d[e.k]=o))};o?(z.id=-1,me(z,n)):z()}}}const me=ol;function $l(e){return Dl(e)}function Dl(e,t){const n=br();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:_=Oe,insertStaticContent:z}=e,N=(f,u,p,g=null,h=null,x=null,A=!1,y=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Lt(f,u)&&(g=fn(f),Ce(f,h,x,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:C}=u;switch(b){case Jn:D(f,u,p,g);break;case Et:k(f,u,p,g);break;case cr:f==null&&O(u,p,g,A);break;case be:on(f,u,p,g,h,x,A,y,w);break;default:C&1?B(f,u,p,g,h,x,A,y,w):C&6?sn(f,u,p,g,h,x,A,y,w):(C&64||C&128)&&b.process(f,u,p,g,h,x,A,y,w,mt)}S!=null&&h&&Tr(S,f&&f.ref,x,u||f,!u)},D=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},k=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},O=(f,u,p,g)=>{[f.el,f.anchor]=z(f.children,u,p,g,f.el,f.anchor)},R=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},T=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},B=(f,u,p,g,h,x,A,y,w)=>{A=A||u.type==="svg",f==null?ie(u,p,g,h,x,A,y,w):ve(f,u,h,x,A,y,w)},ie=(f,u,p,g,h,x,A,y)=>{let w,b;const{type:S,props:C,shapeFlag:I,transition:F,dirs:$}=f;if(w=f.el=o(f.type,x,C&&C.is,C),I&8?d(w,f.children):I&16&&ye(f.children,w,null,g,h,x&&S!=="foreignObject",A,y),$&&nt(f,null,g,"created"),oe(w,f,f.scopeId,A,g),C){for(const Y in C)Y!=="value"&&!On(Y)&&i(w,Y,null,C[Y],x,f.children,g,h,Fe);"value"in C&&i(w,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Te(b,g,f)}$&&nt(f,null,g,"beforeMount");const K=(!h||h&&!h.pendingBranch)&&F&&!F.persisted;K&&F.beforeEnter(w),r(w,u,p),((b=C&&C.onVnodeMounted)||K||$)&&me(()=>{b&&Te(b,g,f),K&&F.enter(w),$&&nt(f,null,g,"mounted")},h)},oe=(f,u,p,g,h)=>{if(p&&_(f,p),g)for(let x=0;x<g.length;x++)_(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;oe(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ye=(f,u,p,g,h,x,A,y,w=0)=>{for(let b=w;b<f.length;b++){const S=f[b]=y?Ke(f[b]):Se(f[b]);N(null,S,u,p,g,h,x,A,y)}},ve=(f,u,p,g,h,x,A)=>{const y=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:S}=u;w|=f.patchFlag&16;const C=f.props||X,I=u.props||X;let F;p&&rt(p,!1),(F=I.onVnodeBeforeUpdate)&&Te(F,p,u,f),S&&nt(u,f,p,"beforeUpdate"),p&&rt(p,!0);const $=h&&u.type!=="foreignObject";if(b?Re(f.dynamicChildren,b,y,p,g,$,x):A||W(f,u,y,null,p,g,$,x,!1),w>0){if(w&16)Rt(y,u,C,I,p,g,h);else if(w&2&&C.class!==I.class&&i(y,"class",null,I.class,h),w&4&&i(y,"style",C.style,I.style,h),w&8){const K=u.dynamicProps;for(let Y=0;Y<K.length;Y++){const ee=K[Y],xe=C[ee],pt=I[ee];(pt!==xe||ee==="value")&&i(y,ee,xe,pt,h,f.children,p,g,Fe)}}w&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Rt(y,u,C,I,p,g,h);((F=I.onVnodeUpdated)||S)&&me(()=>{F&&Te(F,p,u,f),S&&nt(u,f,p,"updated")},g)},Re=(f,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const w=f[y],b=u[y],S=w.el&&(w.type===be||!Lt(w,b)||w.shapeFlag&70)?m(w.el):p;N(w,b,S,null,g,h,x,A,!0)}},Rt=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==X)for(const y in p)!On(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,x,Fe);for(const y in g){if(On(y))continue;const w=g[y],b=p[y];w!==b&&y!=="value"&&i(f,y,b,w,A,u.children,h,x,Fe)}"value"in g&&i(f,"value",p.value,g.value)}},on=(f,u,p,g,h,x,A,y,w)=>{const b=u.el=f?f.el:s(""),S=u.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:I,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,p,g),r(S,p,g),ye(u.children,p,S,h,x,A,y,w)):C>0&&C&64&&I&&f.dynamicChildren?(Re(f.dynamicChildren,I,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&wo(f,u,!0)):W(f,u,p,S,h,x,A,y,w)},sn=(f,u,p,g,h,x,A,y,w)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,w):nr(u,p,g,h,x,A,w):Aa(f,u,w)},nr=(f,u,p,g,h,x,A)=>{const y=f.component=Jl(f,g,h);if(lo(f)&&(y.ctx.renderer=mt),Zl(y),y.asyncDep){if(h&&h.registerDep(y,le),!f.el){const w=y.subTree=Z(Et);k(null,w,u,p)}return}le(y,f,u,p,h,x,A)},Aa=(f,u,p)=>{const g=u.component=f.component;if(rl(f,u,p))if(g.asyncDep&&!g.asyncResolved){G(g,u,p);return}else g.next=u,Zs(g.update),g.update();else u.el=f.el,g.vnode=u},le=(f,u,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:S,bu:C,u:I,parent:F,vnode:$}=f,K=S,Y;rt(f,!1),S?(S.el=$.el,G(f,S,A)):S=$,C&&or(C),(Y=S.props&&S.props.onVnodeBeforeUpdate)&&Te(Y,F,S,$),rt(f,!0);const ee=sr(f),xe=f.subTree;f.subTree=ee,N(xe,ee,m(xe.el),fn(xe),f,h,x),S.el=ee.el,K===null&&al(f,ee.el),I&&me(I,h),(Y=S.props&&S.props.onVnodeUpdated)&&me(()=>Te(Y,F,S,$),h)}else{let S;const{el:C,props:I}=u,{bm:F,m:$,parent:K}=f,Y=Dt(u);if(rt(f,!1),F&&or(F),!Y&&(S=I&&I.onVnodeBeforeMount)&&Te(S,K,u),rt(f,!0),C&&ar){const ee=()=>{f.subTree=sr(f),ar(C,f.subTree,f,h,null)};Y?u.type.__asyncLoader().then(()=>!f.isUnmounted&&ee()):ee()}else{const ee=f.subTree=sr(f);N(null,ee,p,g,f,h,x),u.el=ee.el}if($&&me($,h),!Y&&(S=I&&I.onVnodeMounted)){const ee=u;me(()=>Te(S,K,ee),h)}(u.shapeFlag&256||K&&Dt(K.vnode)&&K.vnode.shapeFlag&256)&&f.a&&me(f.a,h),f.isMounted=!0,u=p=g=null}},w=f.effect=new Jr(y,()=>aa(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,rt(f,!0),b()},G=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Fl(f,u.props,g,p),zl(f,u.children,p),It(),za(),Nt()},W=(f,u,p,g,h,x,A,y,w=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,C=u.children,{patchFlag:I,shapeFlag:F}=u;if(I>0){if(I&128){ln(b,C,p,g,h,x,A,y,w);return}else if(I&256){et(b,C,p,g,h,x,A,y,w);return}}F&8?(S&16&&Fe(b,h,x),C!==b&&d(p,C)):S&16?F&16?ln(b,C,p,g,h,x,A,y,w):Fe(b,h,x,!0):(S&8&&d(p,""),F&16&&ye(C,p,g,h,x,A,y,w))},et=(f,u,p,g,h,x,A,y,w)=>{f=f||yt,u=u||yt;const b=f.length,S=u.length,C=Math.min(b,S);let I;for(I=0;I<C;I++){const F=u[I]=w?Ke(u[I]):Se(u[I]);N(f[I],F,p,null,h,x,A,y,w)}b>S?Fe(f,h,x,!0,!1,C):ye(u,p,g,h,x,A,y,w,C)},ln=(f,u,p,g,h,x,A,y,w)=>{let b=0;const S=u.length;let C=f.length-1,I=S-1;for(;b<=C&&b<=I;){const F=f[b],$=u[b]=w?Ke(u[b]):Se(u[b]);if(Lt(F,$))N(F,$,p,null,h,x,A,y,w);else break;b++}for(;b<=C&&b<=I;){const F=f[C],$=u[I]=w?Ke(u[I]):Se(u[I]);if(Lt(F,$))N(F,$,p,null,h,x,A,y,w);else break;C--,I--}if(b>C){if(b<=I){const F=I+1,$=F<S?u[F].el:g;for(;b<=I;)N(null,u[b]=w?Ke(u[b]):Se(u[b]),p,$,h,x,A,y,w),b++}}else if(b>I)for(;b<=C;)Ce(f[b],h,x,!0),b++;else{const F=b,$=b,K=new Map;for(b=$;b<=I;b++){const he=u[b]=w?Ke(u[b]):Se(u[b]);he.key!=null&&K.set(he.key,b)}let Y,ee=0;const xe=I-$+1;let pt=!1,Ca=0;const Ft=new Array(xe);for(b=0;b<xe;b++)Ft[b]=0;for(b=F;b<=C;b++){const he=f[b];if(ee>=xe){Ce(he,h,x,!0);continue}let Pe;if(he.key!=null)Pe=K.get(he.key);else for(Y=$;Y<=I;Y++)if(Ft[Y-$]===0&&Lt(he,u[Y])){Pe=Y;break}Pe===void 0?Ce(he,h,x,!0):(Ft[Pe-$]=b+1,Pe>=Ca?Ca=Pe:pt=!0,N(he,u[Pe],p,null,h,x,A,y,w),ee++)}const Pa=pt?Hl(Ft):yt;for(Y=Pa.length-1,b=xe-1;b>=0;b--){const he=$+b,Pe=u[he],Ta=he+1<S?u[he+1].el:g;Ft[b]===0?N(null,Pe,p,Ta,h,x,A,y,w):pt&&(Y<0||b!==Pa[Y]?tt(Pe,p,Ta,2):Y--)}}},tt=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:w,shapeFlag:b}=f;if(b&6){tt(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,mt);return}if(A===be){r(x,u,p);for(let C=0;C<w.length;C++)tt(w[C],u,p,g);r(f.anchor,u,p);return}if(A===cr){R(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),me(()=>y.enter(x),h);else{const{leave:C,delayLeave:I,afterLeave:F}=y,$=()=>r(x,u,p),K=()=>{C(x,()=>{$(),F&&F()})};I?I(x,$,K):K()}else r(x,u,p)},Ce=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:S,patchFlag:C,dirs:I}=f;if(y!=null&&Tr(y,null,p,f,!0),S&256){u.ctx.deactivate(f);return}const F=S&1&&I,$=!Dt(f);let K;if($&&(K=A&&A.onVnodeBeforeUnmount)&&Te(K,u,f),S&6)rs(f.component,p,g);else{if(S&128){f.suspense.unmount(p,g);return}F&&nt(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,p,h,mt,g):b&&(x!==be||C>0&&C&64)?Fe(b,u,p,!1,!0):(x===be&&C&384||!h&&S&16)&&Fe(w,u,p),g&&Oa(f)}($&&(K=A&&A.onVnodeUnmounted)||F)&&me(()=>{K&&Te(K,u,f),F&&nt(f,null,u,"unmounted")},p)},Oa=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===be){ns(p,g);return}if(u===cr){T(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,w=()=>A(p,x);y?y(f.el,x,w):w()}else x()},ns=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},rs=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&or(g),h.stop(),x&&(x.active=!1,Ce(A,f,u,p)),y&&me(y,u),me(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Fe=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Ce(f[A],u,p,g,h)},fn=f=>f.shapeFlag&6?fn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ea=(f,u,p)=>{f==null?u._vnode&&Ce(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),za(),no(),u._vnode=f},mt={p:N,um:Ce,m:tt,r:Oa,mt:nr,mc:ye,pc:W,pbc:Re,n:fn,o:e};let rr,ar;return t&&([rr,ar]=t(mt)),{render:Ea,hydrate:rr,createApp:Nl(Ea,rr)}}function rt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function wo(e,t,n=!1){const r=e.children,a=t.children;if(M(r)&&M(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ke(a[i]),s.el=o.el),n||wo(o,s)),s.type===Jn&&(s.el=o.el)}}function Hl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Ul=e=>e.__isTeleport,be=Symbol.for("v-fgt"),Jn=Symbol.for("v-txt"),Et=Symbol.for("v-cmt"),cr=Symbol.for("v-stc"),Ut=[];let ke=null;function kt(e=!1){Ut.push(ke=e?null:[])}function Bl(){Ut.pop(),ke=Ut[Ut.length-1]||null}let Xt=1;function Xa(e){Xt+=e}function _o(e){return e.dynamicChildren=Xt>0?ke||yt:null,Bl(),Xt>0&&ke&&ke.push(e),e}function Bt(e,t,n,r,a,i){return _o(j(e,t,n,r,a,i,!0))}function Yl(e,t,n,r,a){return _o(Z(e,t,n,r,a,!0))}function Ln(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const Zn="__vInternal",ko=({key:e})=>e??null,Tn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?te(e)||ce(e)||L(e)?{i:ue,r:e,k:t,f:!!n}:e:null);function j(e,t=null,n=null,r=0,a=null,i=e===be?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ko(t),ref:t&&Tn(t),scopeId:io,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ue};return s?(sa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),Xt>0&&!o&&ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ke.push(l),l}const Z=Wl;function Wl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===wl)&&(e=Et),Ln(e)){const s=Ct(e,t,!0);return n&&sa(s,n),Xt>0&&!i&&ke&&(s.shapeFlag&6?ke[ke.indexOf(e)]=s:ke.push(s)),s.patchFlag|=-2,s}if(nf(e)&&(e=e.__vccOpts),t){t=Kl(t);let{class:s,style:l}=t;s&&!te(s)&&(t.class=Wn(s)),J(l)&&(Zi(l)&&!M(l)&&(l=ae({},l)),t.style=Vr(l))}const o=te(e)?1:il(e)?128:Ul(e)?64:J(e)?4:L(e)?2:0;return j(e,t,n,r,a,o,i,!0)}function Kl(e){return e?Zi(e)||Zn in e?ae({},e):e:null}function Ct(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?ql(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ko(s),ref:t&&t.ref?n&&a?M(a)?a.concat(Tn(t)):[a,Tn(t)]:Tn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==be?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ct(e.ssContent),ssFallback:e.ssFallback&&Ct(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function qe(e=" ",t=0){return Z(Jn,null,e,t)}function Se(e){return e==null||typeof e=="boolean"?Z(Et):M(e)?Z(be,null,e.slice()):typeof e=="object"?Ke(e):Z(Jn,null,String(e))}function Ke(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ct(e)}function sa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),sa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Zn in t)?t._ctx=ue:a===3&&ue&&(ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:ue},n=32):(t=String(t),r&64?(n=16,t=[qe(t)]):n=8);e.children=t,e.shapeFlag|=n}function ql(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Wn([t.class,r.class]));else if(a==="style")t.style=Vr([t.style,r.style]);else if(Hn(a)){const i=t[a],o=r[a];o&&i!==o&&!(M(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Te(e,t,n,r=null){Ee(e,t,7,[n,r])}const Vl=ho();let Xl=0;function Jl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Vl,i={uid:Xl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new bs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vo(r,a),emitsOptions:ao(r,a),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=el.bind(null,i),e.ce&&e.ce(i),i}let re=null,la,ht,Ja="__VUE_INSTANCE_SETTERS__";(ht=br()[Ja])||(ht=br()[Ja]=[]),ht.push(e=>re=e),la=e=>{ht.length>1?ht.forEach(t=>t(e)):ht[0](e)};const Pt=e=>{la(e),e.scope.on()},ct=()=>{re&&re.scope.off(),la(null)};function Ao(e){return e.vnode.shapeFlag&4}let Jt=!1;function Zl(e,t=!1){Jt=t;const{props:n,children:r}=e.vnode,a=Ao(e);Rl(e,n,a,t),jl(e,r);const i=a?Gl(e,t):void 0;return Jt=!1,i}function Gl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Gi(new Proxy(e.ctx,Ol));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?ef(e):null;Pt(e),It();const i=Xe(r,e,0,[e.props,a]);if(Nt(),ct(),Fi(i)){if(i.then(ct,ct),t)return i.then(o=>{Za(e,o,t)}).catch(o=>{qn(o,e,0)});e.asyncDep=i}else Za(e,i,t)}else Oo(e,t)}function Za(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=Qi(t)),Oo(e,n)}let Ga;function Oo(e,t,n){const r=e.type;if(!e.render){if(!t&&Ga&&!r.render){const a=r.template||ia(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ae(ae({isCustomElement:i,delimiters:s},o),l);r.render=Ga(a,c)}}e.render=r.render||Oe}{Pt(e),It();try{El(e)}finally{Nt(),ct()}}}function Ql(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}}))}function ef(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Ql(e)},slots:e.slots,emit:e.emit,expose:t}}function fa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qi(Gi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ht)return Ht[n](e)},has(t,n){return n in t||n in Ht}}))}function tf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function nf(e){return L(e)&&"__vccOpts"in e}const at=(e,t)=>qs(e,t,Jt);function rf(e,t,n){const r=arguments.length;return r===2?J(t)&&!M(t)?Ln(t)?Z(e,null,[t]):Z(e,t):Z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ln(n)&&(n=[n]),Z(e,t,n))}const af=Symbol.for("v-scx"),of=()=>Pn(af),sf="3.3.6",lf="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,Qa=ot&&ot.createElement("template"),ff={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ot.createElementNS(lf,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Qa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Qa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},cf=Symbol("_vtc");function uf(e,t,n){const r=e[cf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const df=Symbol("_vod");function mf(e,t,n){const r=e.style,a=te(n);if(n&&!a){if(t&&!te(t))for(const i in t)n[i]==null&&Sr(r,i,"");for(const i in n)Sr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),df in e&&(r.display=i)}}const ei=/\s*!important$/;function Sr(e,t,n){if(M(n))n.forEach(r=>Sr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=pf(e,t);ei.test(n)?e.setProperty(St(r),n.replace(ei,""),"important"):e[r]=n}}const ti=["Webkit","Moz","ms"],ur={};function pf(e,t){const n=ur[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return ur[t]=r;r=Yn(r);for(let a=0;a<ti.length;a++){const i=ti[a]+r;if(i in e)return ur[t]=i}return t}const ni="http://www.w3.org/1999/xlink";function hf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ni,t.slice(6,t.length)):e.setAttributeNS(ni,t,n);else{const i=gs(t);n==null||i&&!zi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function gf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=zi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function vf(e,t,n,r){e.addEventListener(t,n,r)}function bf(e,t,n,r){e.removeEventListener(t,n,r)}const ri=Symbol("_vei");function yf(e,t,n,r,a=null){const i=e[ri]||(e[ri]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=xf(t);if(r){const c=i[t]=kf(r,a);vf(e,s,c,l)}else o&&(bf(e,s,o,l),i[t]=void 0)}}const ai=/(?:Once|Passive|Capture)$/;function xf(e){let t;if(ai.test(e)){t={};let r;for(;r=e.match(ai);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):St(e.slice(2)),t]}let dr=0;const wf=Promise.resolve(),_f=()=>dr||(wf.then(()=>dr=0),dr=Date.now());function kf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(Af(r,n.value),t,5,[r])};return n.value=e,n.attached=_f(),n}function Af(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ii=/^on[a-z]/,Of=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?uf(e,r,a):t==="style"?mf(e,n,r):Hn(t)?Yr(t)||yf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ef(e,t,r,a))?gf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),hf(e,t,r,a))};function Ef(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ii.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ii.test(t)&&te(n)?!1:t in e}const Cf=ae({patchProp:Of},ff);let oi;function Pf(){return oi||(oi=$l(Cf))}const Tf=(...e)=>{const t=Pf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Sf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Sf(e){return te(e)?document.querySelector(e):e}const ca=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},If={props:{color:{type:String,default:"secondary"},title:{type:String,default:"title"},decorations:{type:Number,default:0}}},Nf={class:"p-2 flex items-center border-b-2 gap-2 border-black"},Mf={class:"w-5 h-5 border-2 border-black bg-white rounded-xl"},Rf={class:"grow text-center font-bold"},Ff={class:"p-2"};function Lf(e,t,n,r,a,i){return kt(),Bt("div",{class:Wn(`bg-[var(--color-${n.color})] rounded-xl border-4 border-black shadow-solid`)},[j("div",Nf,[(kt(!0),Bt(be,null,kl(n.decorations,o=>(kt(),Bt("div",Mf))),256)),j("div",Rf,vs(n.title),1)]),j("div",Ff,[Al(e.$slots,"default")])],2)}const jf=ca(If,[["render",Lf]]),zf={mounted(){const e="[you@lareii.github.io ~]$&nbsp;",t=this.$parent.$el.children.item(1).children.item(0),n=document.getElementById("prompt"),r=document.getElementById("input"),a=document.getElementById("history");function i(o){o!=""&&(o=="help"?a.innerHTML+="help yourself<br>":o=="whoami"?a.innerHTML+="you<br>":o=="clear"?a.innerHTML="":a.innerHTML+="command not found: "+o+"<br>")}r.addEventListener("keydown",o=>{o.key==="Enter"&&(a.innerHTML+=e+r.value+"<br>",i(r.value),r.value="",t.scrollTo(0,t.scrollHeight))}),t.addEventListener("click",o=>{r.focus()}),a.innerHTML='get started with typing "help"<br>',n.innerHTML=e}},$f={class:"font-mono"},Df=j("div",{id:"history",class:"flex items-center text-sm"},null,-1),Hf=j("div",{class:"flex items-center text-sm"},[j("div",{id:"prompt"}),j("input",{id:"input",class:"w-full bg-transparent outline-none",type:"text"})],-1),Uf=[Df,Hf];function Bf(e,t,n,r,a,i){return kt(),Bt("div",$f,Uf)}const Yf=ca(zf,[["render",Bf]]),Wf={components:{TheWindow:jf,TheTerminal:Yf},methods:{changeEmoji(){const e=document.getElementById("emoji");e.innerText=e.innerText=="✨"?"✌️":"✨",document.title=document.title=="✨"?"✌️":"✨"}}},Kf={class:"sm:pt-20 relative max-w-screen-md mx-auto p-5"},qf={class:"font-black text-5xl"},Vf=j("span",{class:"bg-[var(--color-quinary)]"},[qe(" emirhan! "),j("span",{class:"text-[10px]"},"a.k.a. larei")],-1),Xf=j("div",{class:"font-bold text-lg mb-2"},[qe(" 17 years-old, university student. self-taught developer, open-source enthusiast. programming, music, math. "),j("i",null,"*insert here some lorem ipsum*")],-1),Jf={class:"flex max-sm:flex-col gap-3 mb-3"},Zf=j("div",{class:"font-bold h-40 overflow-y-auto no-scrollbar"},[j("div",null,[qe("- "),j("s",null,"birth")]),j("div",null,[qe("- "),j("s",null,"learn")]),j("div",null,[qe("- "),j("s",null,"explore")]),j("div",null,[qe("- "),j("s",null,"study")]),j("div",null,"- university"),j("div",null,"- career"),j("div",null,"- work"),j("div",null,"- love"),j("div",null,"- die")],-1),Gf={class:"h-40 w-full overflow-auto no-scrollbar whitespace-nowrap"},Qf={class:"flex max-sm:flex-col justify-between items-center gap-3"},ec={class:"flex flex-wrap text-2xl gap-2"},tc={class:"p-1 h-10 w-10 shadow-solid border-2 border-black text-center rounded-xl bg-[var(--color-secondary)]",href:"https://github.com/lareii",target:"_blank"},nc={class:"p-1 h-10 w-10 shadow-solid border-2 border-black text-center rounded-xl bg-[var(--color-tertiary)]",href:"https://www.linkedin.com/in/emirhan-b-38a913297/",target:"_blank"},rc={class:"p-1 h-10 w-10 shadow-solid border-2 border-black text-center rounded-xl bg-[var(--color-quaternary)]",href:"https://discord.com/users/748539900793716887",target:"_blank"},ac={class:"p-1 h-10 w-10 shadow-solid border-2 border-black text-center rounded-xl bg-[var(--color-quinary)]",href:"https://reddit.com/u/lareidev",target:"_blank"},ic={class:"p-1 h-10 w-10 shadow-solid border-2 border-black text-center rounded-xl bg-[var(--color-senary)]",href:"https://open.spotify.com/user/800b0v2zx3p2n6apxfh2bwcfn",target:"_blank"},oc={class:"p-1 h-10 w-10 shadow-solid border-2 border-black text-center rounded-xl bg-[var(--color-septenary)]",href:"https://mastodon.com.tr/@larei",target:"_blank"},sc=j("a",{class:"py-1 px-2 h-10 shadow-solid border-2 border-black text-center rounded-xl bg-white font-bold",href:"https://github.com/lareii/lareii.github.io",target:"_blank"}," gimme a ⭐ ",-1);function lc(e,t,n,r,a,i){const o=lr("TheWindow"),s=lr("TheTerminal"),l=lr("font-awesome-icon");return kt(),Bt("main",Kf,[Z(o,{class:"mb-3",title:"about_meeee.md",decorations:3},{default:En(()=>[j("div",qf,[qe(" it's "),Vf,j("span",{id:"emoji",onDblclick:t[0]||(t[0]=(...c)=>i.changeEmoji&&i.changeEmoji(...c)),class:"text-[2rem] select-none"}," ✨ ",32)]),Xf]),_:1}),j("div",Jf,[Z(o,{class:"sm:basis-1/3",decorations:1,color:"quaternary",title:"todo_list.txt"},{default:En(()=>[Zf]),_:1}),Z(o,{class:"sm:basis-2/3 sm:w-0",color:"tertiary",title:"terminal.sh",decorations:1},{default:En(()=>[j("div",Gf,[Z(s)])]),_:1})]),j("div",Qf,[j("div",ec,[j("a",tc,[Z(l,{icon:"fa-brands fa-github"})]),j("a",nc,[Z(l,{icon:"fa-brands fa-linkedin"})]),j("a",rc,[Z(l,{icon:"fa-brands fa-discord"})]),j("a",ac,[Z(l,{icon:"fa-brands fa-reddit"})]),j("a",ic,[Z(l,{icon:"fa-brands fa-spotify"})]),j("a",oc,[Z(l,{icon:"fa-brands fa-mastodon"})])]),sc])])}const fc=ca(Wf,[["render",lc]]);function si(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?si(Object(n),!0).forEach(function(r){ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):si(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jn(e){"@babel/helpers - typeof";return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jn(e)}function cc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function li(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function uc(e,t,n){return t&&li(e.prototype,t),n&&li(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ua(e,t){return mc(e)||hc(e,t)||Eo(e,t)||vc()}function nn(e){return dc(e)||pc(e)||Eo(e)||gc()}function dc(e){if(Array.isArray(e))return Ir(e)}function mc(e){if(Array.isArray(e))return e}function pc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Eo(e,t){if(e){if(typeof e=="string")return Ir(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ir(e,t)}}function Ir(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fi=function(){},da={},Co={},Po=null,To={mark:fi,measure:fi};try{typeof window<"u"&&(da=window),typeof document<"u"&&(Co=document),typeof MutationObserver<"u"&&(Po=MutationObserver),typeof performance<"u"&&(To=performance)}catch{}var bc=da.navigator||{},ci=bc.userAgent,ui=ci===void 0?"":ci,Ze=da,V=Co,di=Po,gn=To;Ze.document;var Be=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",So=~ui.indexOf("MSIE")||~ui.indexOf("Trident/"),vn,bn,yn,xn,wn,$e="___FONT_AWESOME___",Nr=16,Io="fa",No="svg-inline--fa",ut="data-fa-i2svg",Mr="data-fa-pseudo-element",yc="data-fa-pseudo-element-pending",ma="data-prefix",pa="data-icon",mi="fontawesome-i2svg",xc="async",wc=["HTML","HEAD","STYLE","SCRIPT"],Mo=function(){try{return!0}catch{return!1}}(),q="classic",Q="sharp",ha=[q,Q];function rn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var Zt=rn((vn={},ne(vn,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ne(vn,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),vn)),Gt=rn((bn={},ne(bn,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ne(bn,Q,{solid:"fass",regular:"fasr",light:"fasl"}),bn)),Qt=rn((yn={},ne(yn,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ne(yn,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),yn)),_c=rn((xn={},ne(xn,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ne(xn,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),xn)),kc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ro="fa-layers-text",Ac=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Oc=rn((wn={},ne(wn,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ne(wn,Q,{900:"fass",400:"fasr",300:"fasl"}),wn)),Fo=[1,2,3,4,5,6,7,8,9,10],Ec=Fo.concat([11,12,13,14,15,16,17,18,19,20]),Cc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],st={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},en=new Set;Object.keys(Gt[q]).map(en.add.bind(en));Object.keys(Gt[Q]).map(en.add.bind(en));var Pc=[].concat(ha,nn(en),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",st.GROUP,st.SWAP_OPACITY,st.PRIMARY,st.SECONDARY]).concat(Fo.map(function(e){return"".concat(e,"x")})).concat(Ec.map(function(e){return"w-".concat(e)})),Yt=Ze.FontAwesomeConfig||{};function Tc(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Sc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(V&&typeof V.querySelector=="function"){var Ic=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ic.forEach(function(e){var t=ua(e,2),n=t[0],r=t[1],a=Sc(Tc(n));a!=null&&(Yt[r]=a)})}var Lo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Io,replacementClass:No,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yt.familyPrefix&&(Yt.cssPrefix=Yt.familyPrefix);var Tt=E(E({},Lo),Yt);Tt.autoReplaceSvg||(Tt.observeMutations=!1);var P={};Object.keys(Lo).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Tt[e]=n,Wt.forEach(function(r){return r(P)})},get:function(){return Tt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Tt.cssPrefix=t,Wt.forEach(function(n){return n(P)})},get:function(){return Tt.cssPrefix}});Ze.FontAwesomeConfig=P;var Wt=[];function Nc(e){return Wt.push(e),function(){Wt.splice(Wt.indexOf(e),1)}}var We=Nr,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Mc(e){if(!(!e||!Be)){var t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=V.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return V.head.insertBefore(t,r),e}}var Rc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tn(){for(var e=12,t="";e-- >0;)t+=Rc[Math.random()*62|0];return t}function Mt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ga(e){return e.classList?Mt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function jo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(jo(e[n]),'" ')},"").trim()}function Gn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function va(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function Lc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function jc(e){var t=e.transform,n=e.width,r=n===void 0?Nr:n,a=e.height,i=a===void 0?Nr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&So?l+="translate(".concat(t.x/We-r/2,"em, ").concat(t.y/We-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/We,"em), calc(-50% + ").concat(t.y/We,"em)) "):l+="translate(".concat(t.x/We,"em, ").concat(t.y/We,"em) "),l+="scale(".concat(t.size/We*(t.flipX?-1:1),", ").concat(t.size/We*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var zc=`:root, :host {
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
}`;function zo(){var e=Io,t=No,n=P.cssPrefix,r=P.replacementClass,a=zc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var pi=!1;function mr(){P.autoAddCss&&!pi&&(Mc(zo()),pi=!0)}var $c={mixout:function(){return{dom:{css:zo,insertCss:mr}}},hooks:function(){return{beforeDOMElementCreation:function(){mr()},beforeI2svg:function(){mr()}}}},De=Ze||{};De[$e]||(De[$e]={});De[$e].styles||(De[$e].styles={});De[$e].hooks||(De[$e].hooks={});De[$e].shims||(De[$e].shims=[]);var Ae=De[$e],$o=[],Dc=function e(){V.removeEventListener("DOMContentLoaded",e),zn=1,$o.map(function(t){return t()})},zn=!1;Be&&(zn=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),zn||V.addEventListener("DOMContentLoaded",Dc));function Hc(e){Be&&(zn?setTimeout(e,0):$o.push(e))}function an(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?jo(e):"<".concat(t," ").concat(Fc(r),">").concat(i.map(an).join(""),"</").concat(t,">")}function hi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Uc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},pr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Uc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Bc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Rr(e){var t=Bc(e);return t.length===1?t[0].toString(16):null}function Yc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function gi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Fr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=gi(t);typeof Ae.hooks.addPack=="function"&&!a?Ae.hooks.addPack(e,gi(t)):Ae.styles[e]=E(E({},Ae.styles[e]||{}),i),e==="fas"&&Fr("fa",t)}var _n,kn,An,vt=Ae.styles,Wc=Ae.shims,Kc=(_n={},ne(_n,q,Object.values(Qt[q])),ne(_n,Q,Object.values(Qt[Q])),_n),ba=null,Do={},Ho={},Uo={},Bo={},Yo={},qc=(kn={},ne(kn,q,Object.keys(Zt[q])),ne(kn,Q,Object.keys(Zt[Q])),kn);function Vc(e){return~Pc.indexOf(e)}function Xc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Vc(a)?a:null}var Wo=function(){var t=function(i){return pr(vt,function(o,s,l){return o[l]=pr(s,i,{}),o},{})};Do=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ho=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Yo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in vt||P.autoFetchSvg,r=pr(Wc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Uo=r.names,Bo=r.unicodes,ba=Qn(P.styleDefault,{family:P.familyDefault})};Nc(function(e){ba=Qn(e.styleDefault,{family:P.familyDefault})});Wo();function ya(e,t){return(Do[e]||{})[t]}function Jc(e,t){return(Ho[e]||{})[t]}function lt(e,t){return(Yo[e]||{})[t]}function Ko(e){return Uo[e]||{prefix:null,iconName:null}}function Zc(e){var t=Bo[e],n=ya("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ge(){return ba}var xa=function(){return{prefix:null,iconName:null,rest:[]}};function Qn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=Zt[r][e],i=Gt[r][e]||Gt[r][a],o=e in Ae.styles?e:null;return i||o||null}var vi=(An={},ne(An,q,Object.keys(Qt[q])),ne(An,Q,Object.keys(Qt[Q])),An);function er(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ne(t,q,"".concat(P.cssPrefix,"-").concat(q)),ne(t,Q,"".concat(P.cssPrefix,"-").concat(Q)),t),o=null,s=q;(e.includes(i[q])||e.some(function(c){return vi[q].includes(c)}))&&(s=q),(e.includes(i[Q])||e.some(function(c){return vi[Q].includes(c)}))&&(s=Q);var l=e.reduce(function(c,d){var m=Xc(P.cssPrefix,d);if(vt[d]?(d=Kc[s].includes(d)?_c[s][d]:d,o=d,c.prefix=d):qc[s].indexOf(d)>-1?(o=d,c.prefix=Qn(d,{family:s})):m?c.iconName=m:d!==P.replacementClass&&d!==i[q]&&d!==i[Q]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Ko(c.iconName):{},_=lt(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||_||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!vt.far&&vt.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},xa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Q&&(vt.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=lt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ge()||"fas"),l}var Gc=function(){function e(){cc(this,e),this.definitions={}}return uc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Fr(s,o[s]);var l=Qt[q][s];l&&Fr(l,o[s]),Wo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),bi=[],bt={},At={},Qc=Object.keys(At);function eu(e,t){var n=t.mixoutsTo;return bi=e,bt={},Object.keys(At).forEach(function(r){Qc.indexOf(r)===-1&&delete At[r]}),bi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),jn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){bt[o]||(bt[o]=[]),bt[o].push(i[o])})}r.provides&&r.provides(At)}),n}function Lr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=bt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function dt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=bt[e]||[];a.forEach(function(i){i.apply(null,n)})}function He(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return At[e]?At[e].apply(null,t):void 0}function jr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ge();if(t)return t=lt(n,t)||t,hi(qo.definitions,n,t)||hi(Ae.styles,n,t)}var qo=new Gc,tu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,dt("noAuto")},nu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Be?(dt("beforeI2svg",t),He("pseudoElements2svg",t),He("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Hc(function(){au({autoReplaceSvgRoot:n}),dt("watch",t)})}},ru={icon:function(t){if(t===null)return null;if(jn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:lt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Qn(t[0]);return{prefix:r,iconName:lt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(kc))){var a=er(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ge(),iconName:lt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ge();return{prefix:i,iconName:lt(i,t)||t}}}},ge={noAuto:tu,config:P,dom:nu,parse:ru,library:qo,findIconDefinition:jr,toHtml:an},au=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?V:n;(Object.keys(Ae.styles).length>0||P.autoFetchSvg)&&Be&&P.autoReplaceSvg&&ge.dom.i2svg({node:r})};function tr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return an(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Be){var r=V.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function iu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(va(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Gn(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ou(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function wa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,_=v===void 0?!1:v,z=r.found?r:n,N=z.width,D=z.height,k=a==="fak",O=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(ve){return m.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(m.classes).join(" "),R={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},T=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};_&&(R.attributes[ut]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(d||tn())},children:[l]}),delete R.attributes.title);var B=E(E({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},T),m.styles)}),ie=r.found&&n.found?He("generateAbstractMask",B)||{children:[],attributes:{}}:He("generateAbstractIcon",B)||{children:[],attributes:{}},oe=ie.children,ye=ie.attributes;return B.children=oe,B.attributes=ye,s?ou(B):iu(B)}function yi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ut]="");var d=E({},o.styles);va(a)&&(d.transform=jc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Gn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function su(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Gn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var hr=Ae.styles;function zr(e){var t=e[0],n=e[1],r=e.slice(4),a=ua(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(st.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(st.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(st.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var lu={found:!1,width:512,height:512};function fu(e,t){!Mo&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function $r(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Ge()),new Promise(function(r,a){if(He("missingIconAbstract"),n==="fa"){var i=Ko(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&hr[t]&&hr[t][e]){var o=hr[t][e];return r(zr(o))}fu(e,t),r(E(E({},lu),{},{icon:P.showMissingIcons&&e?He("missingIconAbstract")||{}:{}}))})}var xi=function(){},Dr=P.measurePerformance&&gn&&gn.mark&&gn.measure?gn:{mark:xi,measure:xi},$t='FA "6.4.2"',cu=function(t){return Dr.mark("".concat($t," ").concat(t," begins")),function(){return Vo(t)}},Vo=function(t){Dr.mark("".concat($t," ").concat(t," ends")),Dr.measure("".concat($t," ").concat(t),"".concat($t," ").concat(t," begins"),"".concat($t," ").concat(t," ends"))},_a={begin:cu,end:Vo},Sn=function(){};function wi(e){var t=e.getAttribute?e.getAttribute(ut):null;return typeof t=="string"}function uu(e){var t=e.getAttribute?e.getAttribute(ma):null,n=e.getAttribute?e.getAttribute(pa):null;return t&&n}function du(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function mu(){if(P.autoReplaceSvg===!0)return In.replace;var e=In[P.autoReplaceSvg];return e||In.replace}function pu(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function hu(e){return V.createElement(e)}function Xo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?pu:hu:n;if(typeof e=="string")return V.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Xo(o,{ceFn:r}))}),a}function gu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var In={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Xo(a),n)}),n.getAttribute(ut)===null&&P.keepOriginalSource){var r=V.createComment(gu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ga(n).indexOf(P.replacementClass))return In.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return an(s)}).join(`
`);n.setAttribute(ut,""),n.innerHTML=o}};function _i(e){e()}function Jo(e,t){var n=typeof t=="function"?t:Sn;if(e.length===0)n();else{var r=_i;P.mutateApproach===xc&&(r=Ze.requestAnimationFrame||_i),r(function(){var a=mu(),i=_a.begin("mutate");e.map(a),i(),n()})}}var ka=!1;function Zo(){ka=!0}function Hr(){ka=!1}var $n=null;function ki(e){if(di&&P.observeMutations){var t=e.treeCallback,n=t===void 0?Sn:t,r=e.nodeCallback,a=r===void 0?Sn:r,i=e.pseudoElementsCallback,o=i===void 0?Sn:i,s=e.observeMutationsRoot,l=s===void 0?V:s;$n=new di(function(c){if(!ka){var d=Ge();Mt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!wi(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&wi(m.target)&&~Cc.indexOf(m.attributeName))if(m.attributeName==="class"&&uu(m.target)){var v=er(ga(m.target)),_=v.prefix,z=v.iconName;m.target.setAttribute(ma,_||d),z&&m.target.setAttribute(pa,z)}else du(m.target)&&a(m.target)})}}),Be&&$n.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vu(){$n&&$n.disconnect()}function bu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function yu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=er(ga(e));return a.prefix||(a.prefix=Ge()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Jc(a.prefix,e.innerText)||ya(a.prefix,Rr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function xu(e){var t=Mt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||tn()):(t["aria-hidden"]="true",t.focusable="false")),t}function wu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=yu(e),r=n.iconName,a=n.prefix,i=n.rest,o=xu(e),s=Lr("parseNodeAttributes",{},e),l=t.styleParser?bu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var _u=Ae.styles;function Go(e){var t=P.autoReplaceSvg==="nest"?Ai(e,{styleParser:!1}):Ai(e);return~t.extra.classes.indexOf(Ro)?He("generateLayersText",e,t):He("generateSvgReplacementMutation",e,t)}var Qe=new Set;ha.map(function(e){Qe.add("fa-".concat(e))});Object.keys(Zt[q]).map(Qe.add.bind(Qe));Object.keys(Zt[Q]).map(Qe.add.bind(Qe));Qe=nn(Qe);function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Be)return Promise.resolve();var n=V.documentElement.classList,r=function(m){return n.add("".concat(mi,"-").concat(m))},a=function(m){return n.remove("".concat(mi,"-").concat(m))},i=P.autoFetchSvg?Qe:ha.map(function(d){return"fa-".concat(d)}).concat(Object.keys(_u));i.includes("fa")||i.push("fa");var o=[".".concat(Ro,":not([").concat(ut,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ut,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Mt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=_a.begin("onTree"),c=s.reduce(function(d,m){try{var v=Go(m);v&&d.push(v)}catch(_){Mo||_.name==="MissingIcon"&&console.error(_)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Jo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function ku(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Go(e).then(function(n){n&&Jo([n],t)})}function Au(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:jr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:jr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Ou=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ne:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,_=n.titleId,z=_===void 0?null:_,N=n.classes,D=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,R=n.styles,T=R===void 0?{}:R;if(t){var B=t.prefix,ie=t.iconName,oe=t.icon;return tr(E({type:"icon"},t),function(){return dt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(v?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(z||tn()):(O["aria-hidden"]="true",O.focusable="false")),wa({icons:{main:zr(oe),mask:l?zr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:ie,transform:E(E({},Ne),a),symbol:o,title:v,maskId:d,titleId:z,extra:{attributes:O,styles:T,classes:D}})})}},Eu={mixout:function(){return{icon:Au(Ou)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Oi,n.nodeCallback=ku,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?V:r,i=n.callback,o=i===void 0?function(){}:i;return Oi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(_,z){Promise.all([$r(a,s),d.iconName?$r(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=ua(N,2),k=D[0],O=D[1];_([n,wa({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(z)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Gn(s);l.length>0&&(a.style=l);var c;return va(o)&&(c=He("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Cu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return tr({type:"layer"},function(){dt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(nn(i)).join(" ")},children:o}]})}}}},Pu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return tr({type:"counter",content:n},function(){return dt("beforeDOMElementCreation",{content:n,params:r}),su({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(nn(s))}})})}}}},Tu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ne:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,_=v===void 0?{}:v;return tr({type:"text",content:n},function(){return dt("beforeDOMElementCreation",{content:n,params:r}),yi({content:n,transform:E(E({},Ne),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(P.cssPrefix,"-layers-text")].concat(nn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(So){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,yi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Su=new RegExp('"',"ug"),Ei=[1105920,1112319];function Iu(e){var t=e.replace(Su,""),n=Yc(t,0),r=n>=Ei[0]&&n<=Ei[1],a=t.length===2?t[0]===t[1]:!1;return{value:Rr(a?t[0]:t),isSecondary:r||a}}function Ci(e,t){var n="".concat(yc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Mt(e.children),o=i.filter(function(oe){return oe.getAttribute(Mr)===t})[0],s=Ze.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ac),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Q:q,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Gt[v][l[2].toLowerCase()]:Oc[v][c],z=Iu(m),N=z.value,D=z.isSecondary,k=l[0].startsWith("FontAwesome"),O=ya(_,N),R=O;if(k){var T=Zc(N);T.iconName&&T.prefix&&(O=T.iconName,_=T.prefix)}if(O&&!D&&(!o||o.getAttribute(ma)!==_||o.getAttribute(pa)!==R)){e.setAttribute(n,R),o&&e.removeChild(o);var B=wu(),ie=B.extra;ie.attributes[Mr]=t,$r(O,_).then(function(oe){var ye=wa(E(E({},B),{},{icons:{main:oe,mask:xa()},prefix:_,iconName:R,extra:ie,watchable:!0})),ve=V.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=ye.map(function(Re){return an(Re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Nu(e){return Promise.all([Ci(e,"::before"),Ci(e,"::after")])}function Mu(e){return e.parentNode!==document.head&&!~wc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Mr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Pi(e){if(Be)return new Promise(function(t,n){var r=Mt(e.querySelectorAll("*")).filter(Mu).map(Nu),a=_a.begin("searchPseudoElements");Zo(),Promise.all(r).then(function(){a(),Hr(),t()}).catch(function(){a(),Hr(),n()})})}var Ru={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Pi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?V:r;P.searchPseudoElements&&Pi(a)}}},Ti=!1,Fu={mixout:function(){return{dom:{unwatch:function(){Zo(),Ti=!0}}}},hooks:function(){return{bootstrap:function(){ki(Lr("mutationObserverCallbacks",{}))},noAuto:function(){vu()},watch:function(n){var r=n.observeMutationsRoot;Ti?Hr():ki(Lr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Si=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Lu={mixout:function(){return{parse:{transform:function(n){return Si(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Si(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},_.outer),children:[{tag:"g",attributes:E({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),_.path)}]}]}}}},gr={x:0,y:0,width:"100%",height:"100%"};function Ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ju(e){return e.tag==="g"?e.children:[e]}var zu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?er(a.split(" ").map(function(o){return o.trim()})):xa();return i.prefix||(i.prefix=Ge()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,_=Lc({transform:l,containerWidth:m,iconWidth:c}),z={tag:"rect",attributes:E(E({},gr),{},{fill:"white"})},N=d.children?{children:d.children.map(Ii)}:{},D={tag:"g",attributes:E({},_.inner),children:[Ii(E({tag:d.tag,attributes:E(E({},d.attributes),_.path)},N))]},k={tag:"g",attributes:E({},_.outer),children:[D]},O="mask-".concat(s||tn()),R="clip-".concat(s||tn()),T={tag:"mask",attributes:E(E({},gr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,k]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:ju(v)},T]};return r.push(B,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(O,")")},gr)}),{children:r,attributes:a}}}},$u={provides:function(t){var n=!1;Ze.matchMedia&&(n=Ze.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Du={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Hu=[$c,Eu,Cu,Pu,Tu,Ru,Fu,Lu,zu,$u,Du];eu(Hu,{mixoutsTo:ge});ge.noAuto;ge.config;var Uu=ge.library;ge.dom;var Ur=ge.parse;ge.findIconDefinition;ge.toHtml;var Bu=ge.icon;ge.layer;ge.text;ge.counter;function Ni(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ni(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ni(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dn(e){"@babel/helpers - typeof";return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dn(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Wu(e,t){if(e==null)return{};var n=Yu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qo={exports:{}};(function(e){(function(t){var n=function(k,O,R){if(!c(O)||m(O)||v(O)||_(O)||l(O))return O;var T,B=0,ie=0;if(d(O))for(T=[],ie=O.length;B<ie;B++)T.push(n(k,O[B],R));else{T={};for(var oe in O)Object.prototype.hasOwnProperty.call(O,oe)&&(T[k(oe,R)]=n(k,O[oe],R))}return T},r=function(k,O){O=O||{};var R=O.separator||"_",T=O.split||/(?=[A-Z])/;return k.split(T).join(R)},a=function(k){return z(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,R){return R?R.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},v=function(k){return s.call(k)=="[object RegExp]"},_=function(k){return s.call(k)=="[object Boolean]"},z=function(k){return k=k-0,k===k},N=function(k,O){var R=O&&"process"in O?O.process:O;return typeof R!="function"?k:function(T,B){return R(T,k,B)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(Ku)})(Qo);var qu=Qo.exports,Vu=["class","style"];function Xu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=qu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Ju(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function es(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return es(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Ju(d);break;case"style":l.style=Xu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Wu(n,Vu);return rf(e.tag,je(je(je({},t),{},{class:a.class,style:je(je({},a.style),o)},a.attrs),s),r)}var ts=!1;try{ts=!0}catch{}function Zu(){if(!ts&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function vr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?de({},e,t):{}}function Gu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},de(t,"fa-".concat(e.size),e.size!==null),de(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),de(t,"fa-pull-".concat(e.pull),e.pull!==null),de(t,"fa-swap-opacity",e.swapOpacity),de(t,"fa-bounce",e.bounce),de(t,"fa-shake",e.shake),de(t,"fa-beat",e.beat),de(t,"fa-fade",e.fade),de(t,"fa-beat-fade",e.beatFade),de(t,"fa-flash",e.flash),de(t,"fa-spin-pulse",e.spinPulse),de(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Mi(e){if(e&&Dn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ur.icon)return Ur.icon(e);if(e===null)return null;if(Dn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Qu=ll({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=at(function(){return Mi(t.icon)}),i=at(function(){return vr("classes",Gu(t))}),o=at(function(){return vr("transform",typeof t.transform=="string"?Ur.transform(t.transform):t.transform)}),s=at(function(){return vr("mask",Mi(t.mask))}),l=at(function(){return Bu(a.value,je(je(je(je({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Cn(l,function(d){if(!d)return Zu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=at(function(){return l.value?es(l.value.abstract[0],{},r):null});return function(){return c.value}}}),ed={prefix:"fab",iconName:"reddit",icon:[512,512,[],"f1a1","M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"]},td={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},nd={prefix:"fab",iconName:"spotify",icon:[496,512,[],"f1bc","M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},rd={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},ad={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},id={prefix:"fab",iconName:"mastodon",icon:[448,512,[],"f4f6","M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"]};Uu.add(nd,td,rd,ed,ad,id);Tf(fc).component("font-awesome-icon",Qu).mount("#app");
