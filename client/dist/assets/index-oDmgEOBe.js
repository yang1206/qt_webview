const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./AboutView-fjqlOzeH.js","./AboutView-IRLiFF36.css"])))=>i.map(i=>d[i]);
var Jy=Object.defineProperty;var kp=t=>{throw TypeError(t)};var Qy=(t,e,n)=>e in t?Jy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ut=(t,e,n)=>Qy(t,typeof e!="symbol"?e+"":e,n),Nu=(t,e,n)=>e.has(t)||kp("Cannot "+n);var Ie=(t,e,n)=>(Nu(t,e,"read from private field"),n?n.call(t):e.get(t)),hn=(t,e,n)=>e.has(t)?kp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Yt=(t,e,n,i)=>(Nu(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),fl=(t,e,n)=>(Nu(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Af(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xt={},zo=[],fi=()=>{},eS=()=>!1,iu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Pf=t=>t.startsWith("onUpdate:"),Ft=Object.assign,Rf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},tS=Object.prototype.hasOwnProperty,dt=(t,e)=>tS.call(t,e),Ke=Array.isArray,Bo=t=>ru(t)==="[object Map]",dv=t=>ru(t)==="[object Set]",Qe=t=>typeof t=="function",Rt=t=>typeof t=="string",Gi=t=>typeof t=="symbol",bt=t=>t!==null&&typeof t=="object",fv=t=>(bt(t)||Qe(t))&&Qe(t.then)&&Qe(t.catch),pv=Object.prototype.toString,ru=t=>pv.call(t),nS=t=>ru(t).slice(8,-1),mv=t=>ru(t)==="[object Object]",Lf=t=>Rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ks=Af(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ou=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},iS=/-(\w)/g,mr=ou(t=>t.replace(iS,(e,n)=>n?n.toUpperCase():"")),rS=/\B([A-Z])/g,xr=ou(t=>t.replace(rS,"-$1").toLowerCase()),gv=ou(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fu=ou(t=>t?`on${gv(t)}`:""),hr=(t,e)=>!Object.is(t,e),Uu=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},vv=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},oS=t=>{const e=parseFloat(t);return isNaN(e)?t:e},sS=t=>{const e=Rt(t)?Number(t):NaN;return isNaN(e)?t:e};let Vp;const su=()=>Vp||(Vp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Df(t){if(Ke(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Rt(i)?uS(i):Df(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(Rt(t)||bt(t))return t}const aS=/;(?![^(]*\))/g,lS=/:([^]+)/,cS=/\/\*[^]*?\*\//g;function uS(t){const e={};return t.replace(cS,"").split(aS).forEach(n=>{if(n){const i=n.split(lS);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function If(t){let e="";if(Rt(t))e=t;else if(Ke(t))for(let n=0;n<t.length;n++){const i=If(t[n]);i&&(e+=i+" ")}else if(bt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const hS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dS=Af(hS);function xv(t){return!!t||t===""}const _v=t=>!!(t&&t.__v_isRef===!0),fS=t=>Rt(t)?t:t==null?"":Ke(t)||bt(t)&&(t.toString===pv||!Qe(t.toString))?_v(t)?fS(t.value):JSON.stringify(t,bv,2):String(t),bv=(t,e)=>_v(e)?bv(t,e.value):Bo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],o)=>(n[zu(i,o)+" =>"]=r,n),{})}:dv(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>zu(n))}:Gi(e)?zu(e):bt(e)&&!Ke(e)&&!mv(e)?String(e):e,zu=(t,e="")=>{var n;return Gi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mn;class yv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mn,!e&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=mn;try{return mn=this,e()}finally{mn=n}}}on(){mn=this}off(){mn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function pS(t){return new yv(t)}function Sv(){return mn}function mS(t,e=!1){mn&&mn.cleanups.push(t)}let _t;const Bu=new WeakSet;class Cv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mn&&mn.active&&mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bu.has(this)&&(Bu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$p(this),Ev(this);const e=_t,n=Qn;_t=this,Qn=!0;try{return this.fn()}finally{Tv(this),_t=e,Qn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ff(e);this.deps=this.depsTail=void 0,$p(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jh(this)&&this.run()}get dirty(){return jh(this)}}let Mv=0,Zs,Js;function wv(t,e=!1){if(t.flags|=8,e){t.next=Js,Js=t;return}t.next=Zs,Zs=t}function Of(){Mv++}function Nf(){if(--Mv>0)return;if(Js){let e=Js;for(Js=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Zs;){let e=Zs;for(Zs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Ev(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Tv(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Ff(i),gS(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function jh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Av(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Av(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ga))return;t.globalVersion=ga;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!jh(t)){t.flags&=-3;return}const n=_t,i=Qn;_t=t,Qn=!0;try{Ev(t);const r=t.fn(t._value);(e.version===0||hr(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{_t=n,Qn=i,Tv(t),t.flags&=-3}}function Ff(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Ff(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function gS(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qn=!0;const Pv=[];function _r(){Pv.push(Qn),Qn=!1}function br(){const t=Pv.pop();Qn=t===void 0?!0:t}function $p(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=_t;_t=void 0;try{e()}finally{_t=n}}}let ga=0;class vS{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class au{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!_t||!Qn||_t===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==_t)n=this.activeLink=new vS(_t,this),_t.deps?(n.prevDep=_t.depsTail,_t.depsTail.nextDep=n,_t.depsTail=n):_t.deps=_t.depsTail=n,Rv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=_t.depsTail,n.nextDep=void 0,_t.depsTail.nextDep=n,_t.depsTail=n,_t.deps===n&&(_t.deps=i)}return n}trigger(e){this.version++,ga++,this.notify(e)}notify(e){Of();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nf()}}}function Rv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Rv(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Mc=new WeakMap,$r=Symbol(""),qh=Symbol(""),va=Symbol("");function sn(t,e,n){if(Qn&&_t){let i=Mc.get(t);i||Mc.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new au),r.map=i,r.key=n),r.track()}}function Di(t,e,n,i,r,o){const s=Mc.get(t);if(!s){ga++;return}const a=l=>{l&&l.trigger()};if(Of(),e==="clear")s.forEach(a);else{const l=Ke(t),c=l&&Lf(n);if(l&&n==="length"){const u=Number(i);s.forEach((h,d)=>{(d==="length"||d===va||!Gi(d)&&d>=u)&&a(h)})}else switch((n!==void 0||s.has(void 0))&&a(s.get(n)),c&&a(s.get(va)),e){case"add":l?c&&a(s.get("length")):(a(s.get($r)),Bo(t)&&a(s.get(qh)));break;case"delete":l||(a(s.get($r)),Bo(t)&&a(s.get(qh)));break;case"set":Bo(t)&&a(s.get($r));break}}Nf()}function xS(t,e){const n=Mc.get(t);return n&&n.get(e)}function po(t){const e=at(t);return e===t?e:(sn(e,"iterate",va),Hn(t)?e:e.map(an))}function lu(t){return sn(t=at(t),"iterate",va),t}const _S={__proto__:null,[Symbol.iterator](){return Hu(this,Symbol.iterator,an)},concat(...t){return po(this).concat(...t.map(e=>Ke(e)?po(e):e))},entries(){return Hu(this,"entries",t=>(t[1]=an(t[1]),t))},every(t,e){return bi(this,"every",t,e,void 0,arguments)},filter(t,e){return bi(this,"filter",t,e,n=>n.map(an),arguments)},find(t,e){return bi(this,"find",t,e,an,arguments)},findIndex(t,e){return bi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return bi(this,"findLast",t,e,an,arguments)},findLastIndex(t,e){return bi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return bi(this,"forEach",t,e,void 0,arguments)},includes(...t){return ku(this,"includes",t)},indexOf(...t){return ku(this,"indexOf",t)},join(t){return po(this).join(t)},lastIndexOf(...t){return ku(this,"lastIndexOf",t)},map(t,e){return bi(this,"map",t,e,void 0,arguments)},pop(){return Ls(this,"pop")},push(...t){return Ls(this,"push",t)},reduce(t,...e){return Gp(this,"reduce",t,e)},reduceRight(t,...e){return Gp(this,"reduceRight",t,e)},shift(){return Ls(this,"shift")},some(t,e){return bi(this,"some",t,e,void 0,arguments)},splice(...t){return Ls(this,"splice",t)},toReversed(){return po(this).toReversed()},toSorted(t){return po(this).toSorted(t)},toSpliced(...t){return po(this).toSpliced(...t)},unshift(...t){return Ls(this,"unshift",t)},values(){return Hu(this,"values",an)}};function Hu(t,e,n){const i=lu(t),r=i[e]();return i!==t&&!Hn(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=n(o.value)),o}),r}const bS=Array.prototype;function bi(t,e,n,i,r,o){const s=lu(t),a=s!==t&&!Hn(t),l=s[e];if(l!==bS[e]){const h=l.apply(t,o);return a?an(h):h}let c=n;s!==t&&(a?c=function(h,d){return n.call(this,an(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(s,c,i);return a&&r?r(u):u}function Gp(t,e,n,i){const r=lu(t);let o=n;return r!==t&&(Hn(t)?n.length>3&&(o=function(s,a,l){return n.call(this,s,a,l,t)}):o=function(s,a,l){return n.call(this,s,an(a),l,t)}),r[e](o,...i)}function ku(t,e,n){const i=at(t);sn(i,"iterate",va);const r=i[e](...n);return(r===-1||r===!1)&&Bf(n[0])?(n[0]=at(n[0]),i[e](...n)):r}function Ls(t,e,n=[]){_r(),Of();const i=at(t)[e].apply(t,n);return Nf(),br(),i}const yS=Af("__proto__,__v_isRef,__isVue"),Lv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gi));function SS(t){Gi(t)||(t=String(t));const e=at(this);return sn(e,"has",t),e.hasOwnProperty(t)}class Dv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(r?o?DS:Fv:o?Nv:Ov).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const s=Ke(e);if(!r){let l;if(s&&(l=_S[n]))return l;if(n==="hasOwnProperty")return SS}const a=Reflect.get(e,n,kt(e)?e:i);return(Gi(n)?Lv.has(n):yS(n))||(r||sn(e,"get",n),o)?a:kt(a)?s&&Lf(n)?a:a.value:bt(a)?r?Wa(a):Ga(a):a}}class Iv extends Dv{constructor(e=!1){super(!1,e)}set(e,n,i,r){let o=e[n];if(!this._isShallow){const l=Yr(o);if(!Hn(i)&&!Yr(i)&&(o=at(o),i=at(i)),!Ke(e)&&kt(o)&&!kt(i))return l?!1:(o.value=i,!0)}const s=Ke(e)&&Lf(n)?Number(n)<e.length:dt(e,n),a=Reflect.set(e,n,i,kt(e)?e:r);return e===at(r)&&(s?hr(i,o)&&Di(e,"set",n,i):Di(e,"add",n,i)),a}deleteProperty(e,n){const i=dt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Di(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Gi(n)||!Lv.has(n))&&sn(e,"has",n),i}ownKeys(e){return sn(e,"iterate",Ke(e)?"length":$r),Reflect.ownKeys(e)}}class CS extends Dv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const MS=new Iv,wS=new CS,ES=new Iv(!0);const Yh=t=>t,pl=t=>Reflect.getPrototypeOf(t);function TS(t,e,n){return function(...i){const r=this.__v_raw,o=at(r),s=Bo(o),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,c=r[t](...i),u=n?Yh:e?Kh:an;return!e&&sn(o,"iterate",l?qh:$r),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ml(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function AS(t,e){const n={get(r){const o=this.__v_raw,s=at(o),a=at(r);t||(hr(r,a)&&sn(s,"get",r),sn(s,"get",a));const{has:l}=pl(s),c=e?Yh:t?Kh:an;if(l.call(s,r))return c(o.get(r));if(l.call(s,a))return c(o.get(a));o!==s&&o.get(r)},get size(){const r=this.__v_raw;return!t&&sn(at(r),"iterate",$r),Reflect.get(r,"size",r)},has(r){const o=this.__v_raw,s=at(o),a=at(r);return t||(hr(r,a)&&sn(s,"has",r),sn(s,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const s=this,a=s.__v_raw,l=at(a),c=e?Yh:t?Kh:an;return!t&&sn(l,"iterate",$r),a.forEach((u,h)=>r.call(o,c(u),c(h),s))}};return Ft(n,t?{add:ml("add"),set:ml("set"),delete:ml("delete"),clear:ml("clear")}:{add(r){!e&&!Hn(r)&&!Yr(r)&&(r=at(r));const o=at(this);return pl(o).has.call(o,r)||(o.add(r),Di(o,"add",r,r)),this},set(r,o){!e&&!Hn(o)&&!Yr(o)&&(o=at(o));const s=at(this),{has:a,get:l}=pl(s);let c=a.call(s,r);c||(r=at(r),c=a.call(s,r));const u=l.call(s,r);return s.set(r,o),c?hr(o,u)&&Di(s,"set",r,o):Di(s,"add",r,o),this},delete(r){const o=at(this),{has:s,get:a}=pl(o);let l=s.call(o,r);l||(r=at(r),l=s.call(o,r)),a&&a.call(o,r);const c=o.delete(r);return l&&Di(o,"delete",r,void 0),c},clear(){const r=at(this),o=r.size!==0,s=r.clear();return o&&Di(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=TS(r,t,e)}),n}function Uf(t,e){const n=AS(t,e);return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(dt(n,r)&&r in i?n:i,r,o)}const PS={get:Uf(!1,!1)},RS={get:Uf(!1,!0)},LS={get:Uf(!0,!1)};const Ov=new WeakMap,Nv=new WeakMap,Fv=new WeakMap,DS=new WeakMap;function IS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function OS(t){return t.__v_skip||!Object.isExtensible(t)?0:IS(nS(t))}function Ga(t){return Yr(t)?t:zf(t,!1,MS,PS,Ov)}function Uv(t){return zf(t,!1,ES,RS,Nv)}function Wa(t){return zf(t,!0,wS,LS,Fv)}function zf(t,e,n,i,r){if(!bt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=r.get(t);if(o)return o;const s=OS(t);if(s===0)return t;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function Ho(t){return Yr(t)?Ho(t.__v_raw):!!(t&&t.__v_isReactive)}function Yr(t){return!!(t&&t.__v_isReadonly)}function Hn(t){return!!(t&&t.__v_isShallow)}function Bf(t){return t?!!t.__v_raw:!1}function at(t){const e=t&&t.__v_raw;return e?at(e):t}function wc(t){return!dt(t,"__v_skip")&&Object.isExtensible(t)&&vv(t,"__v_skip",!0),t}const an=t=>bt(t)?Ga(t):t,Kh=t=>bt(t)?Wa(t):t;function kt(t){return t?t.__v_isRef===!0:!1}function lt(t){return zv(t,!1)}function Hf(t){return zv(t,!0)}function zv(t,e){return kt(t)?t:new NS(t,e)}class NS{constructor(e,n){this.dep=new au,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:at(e),this._value=n?e:an(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Hn(e)||Yr(e);e=i?e:at(e),hr(e,n)&&(this._rawValue=e,this._value=i?e:an(e),this.dep.trigger())}}function Zt(t){return kt(t)?t.value:t}const FS={get:(t,e,n)=>e==="__v_raw"?t:Zt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return kt(r)&&!kt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Bv(t){return Ho(t)?t:new Proxy(t,FS)}class US{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new au,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function zS(t){return new US(t)}class BS{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return xS(at(this._object),this._key)}}class HS{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Cn(t,e,n){return kt(t)?t:Qe(t)?new HS(t):bt(t)&&arguments.length>1?kS(t,e,n):lt(t)}function kS(t,e,n){const i=t[e];return kt(i)?i:new BS(t,e,n)}class VS{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new au(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ga-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_t!==this)return wv(this,!0),!0}get value(){const e=this.dep.track();return Av(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function $S(t,e,n=!1){let i,r;return Qe(t)?i=t:(i=t.get,r=t.set),new VS(i,r,n)}const gl={},Ec=new WeakMap;let Lr;function GS(t,e=!1,n=Lr){if(n){let i=Ec.get(n);i||Ec.set(n,i=[]),i.push(t)}}function WS(t,e,n=xt){const{immediate:i,deep:r,once:o,scheduler:s,augmentJob:a,call:l}=n,c=w=>r?w:Hn(w)||r===!1||r===0?Ii(w,1):Ii(w);let u,h,d,f,m=!1,v=!1;if(kt(t)?(h=()=>t.value,m=Hn(t)):Ho(t)?(h=()=>c(t),m=!0):Ke(t)?(v=!0,m=t.some(w=>Ho(w)||Hn(w)),h=()=>t.map(w=>{if(kt(w))return w.value;if(Ho(w))return c(w);if(Qe(w))return l?l(w,2):w()})):Qe(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){_r();try{d()}finally{br()}}const w=Lr;Lr=u;try{return l?l(t,3,[f]):t(f)}finally{Lr=w}}:h=fi,e&&r){const w=h,L=r===!0?1/0:r;h=()=>Ii(w(),L)}const g=Sv(),p=()=>{u.stop(),g&&Rf(g.effects,u)};if(o&&e){const w=e;e=(...L)=>{w(...L),p()}}let S=v?new Array(t.length).fill(gl):gl;const y=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(e){const L=u.run();if(r||m||(v?L.some((E,T)=>hr(E,S[T])):hr(L,S))){d&&d();const E=Lr;Lr=u;try{const T=[L,S===gl?void 0:v&&S[0]===gl?[]:S,f];l?l(e,3,T):e(...T),S=L}finally{Lr=E}}}else u.run()};return a&&a(y),u=new Cv(h),u.scheduler=s?()=>s(y,!1):y,f=w=>GS(w,!1,u),d=u.onStop=()=>{const w=Ec.get(u);if(w){if(l)l(w,4);else for(const L of w)L();Ec.delete(u)}},e?i?y(!0):S=u.run():s?s(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ii(t,e=1/0,n){if(e<=0||!bt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,kt(t))Ii(t.value,e,n);else if(Ke(t))for(let i=0;i<t.length;i++)Ii(t[i],e,n);else if(dv(t)||Bo(t))t.forEach(i=>{Ii(i,e,n)});else if(mv(t)){for(const i in t)Ii(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ii(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xa(t,e,n,i){try{return i?t(...i):t()}catch(r){cu(r,e,n)}}function ei(t,e,n,i){if(Qe(t)){const r=Xa(t,e,n,i);return r&&fv(r)&&r.catch(o=>{cu(o,e,n)}),r}if(Ke(t)){const r=[];for(let o=0;o<t.length;o++)r.push(ei(t[o],e,n,i));return r}}function cu(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||xt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(o){_r(),Xa(o,null,10,[t,l,c]),br();return}}XS(t,n,r,i,s)}function XS(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const gn=[];let ci=-1;const ko=[];let ir=null,Ro=0;const Hv=Promise.resolve();let Tc=null;function Gr(t){const e=Tc||Hv;return t?e.then(this?t.bind(this):t):e}function jS(t){let e=ci+1,n=gn.length;for(;e<n;){const i=e+n>>>1,r=gn[i],o=xa(r);o<t||o===t&&r.flags&2?e=i+1:n=i}return e}function kf(t){if(!(t.flags&1)){const e=xa(t),n=gn[gn.length-1];!n||!(t.flags&2)&&e>=xa(n)?gn.push(t):gn.splice(jS(e),0,t),t.flags|=1,kv()}}function kv(){Tc||(Tc=Hv.then($v))}function qS(t){Ke(t)?ko.push(...t):ir&&t.id===-1?ir.splice(Ro+1,0,t):t.flags&1||(ko.push(t),t.flags|=1),kv()}function Wp(t,e,n=ci+1){for(;n<gn.length;n++){const i=gn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;gn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Vv(t){if(ko.length){const e=[...new Set(ko)].sort((n,i)=>xa(n)-xa(i));if(ko.length=0,ir){ir.push(...e);return}for(ir=e,Ro=0;Ro<ir.length;Ro++){const n=ir[Ro];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ir=null,Ro=0}}const xa=t=>t.id==null?t.flags&2?-1:1/0:t.id;function $v(t){try{for(ci=0;ci<gn.length;ci++){const e=gn[ci];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Xa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ci<gn.length;ci++){const e=gn[ci];e&&(e.flags&=-2)}ci=-1,gn.length=0,Vv(),Tc=null,(gn.length||ko.length)&&$v()}}let Qt=null,Gv=null;function Ac(t){const e=Qt;return Qt=t,Gv=t&&t.type.__scopeId||null,e}function ur(t,e=Qt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&nm(-1);const o=Ac(e);let s;try{s=t(...r)}finally{Ac(o),i._d&&nm(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function YS(t,e){if(Qt===null)return t;const n=gu(Qt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,s,a,l=xt]=e[r];o&&(Qe(o)&&(o={mounted:o,updated:o}),o.deep&&Ii(s),i.push({dir:o,instance:n,value:s,oldValue:void 0,arg:a,modifiers:l}))}return t}function Sr(t,e,n,i){const r=t.dirs,o=e&&e.dirs;for(let s=0;s<r.length;s++){const a=r[s];o&&(a.oldValue=o[s].value);let l=a.dir[i];l&&(_r(),ei(l,n,8,[t.el,a,t,e]),br())}}const Wv=Symbol("_vte"),Xv=t=>t.__isTeleport,Qs=t=>t&&(t.disabled||t.disabled===""),KS=t=>t&&(t.defer||t.defer===""),Xp=t=>typeof SVGElement<"u"&&t instanceof SVGElement,jp=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Zh=(t,e)=>{const n=t&&t.to;return Rt(n)?e?e(n):null:n},ZS={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,o,s,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:m,createText:v,createComment:g}}=c,p=Qs(e.props);let{shapeFlag:S,children:y,dynamicChildren:w}=e;if(t==null){const L=e.el=v(""),E=e.anchor=v("");f(L,n,i),f(E,n,i);const T=(z,b)=>{S&16&&(r&&r.isCE&&(r.ce._teleportTarget=z),u(y,z,b,r,o,s,a,l))},D=()=>{const z=e.target=Zh(e.props,m),b=jv(z,e,v,f);z&&(s!=="svg"&&Xp(z)?s="svg":s!=="mathml"&&jp(z)&&(s="mathml"),p||(T(z,b),uc(e,!1)))};p&&(T(n,E),uc(e,!0)),KS(e.props)?Sn(D,o):D()}else{e.el=t.el,e.targetStart=t.targetStart;const L=e.anchor=t.anchor,E=e.target=t.target,T=e.targetAnchor=t.targetAnchor,D=Qs(t.props),z=D?n:E,b=D?L:T;if(s==="svg"||Xp(E)?s="svg":(s==="mathml"||jp(E))&&(s="mathml"),w?(d(t.dynamicChildren,w,z,r,o,s,a),Wf(t,e,!0)):l||h(t,e,z,b,r,o,s,a,!1),p)D?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):vl(e,n,L,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const M=e.target=Zh(e.props,m);M&&vl(e,M,null,c,0)}else D&&vl(e,E,T,c,1);uc(e,p)}},remove(t,e,n,{um:i,o:{remove:r}},o){const{shapeFlag:s,children:a,anchor:l,targetStart:c,targetAnchor:u,target:h,props:d}=t;if(h&&(r(c),r(u)),o&&r(l),s&16){const f=o||!Qs(d);for(let m=0;m<a.length;m++){const v=a[m];i(v,e,n,f,!!v.dynamicChildren)}}},move:vl,hydrate:JS};function vl(t,e,n,{o:{insert:i},m:r},o=2){o===0&&i(t.targetAnchor,e,n);const{el:s,anchor:a,shapeFlag:l,children:c,props:u}=t,h=o===2;if(h&&i(s,e,n),(!h||Qs(u))&&l&16)for(let d=0;d<c.length;d++)r(c[d],e,n,2);h&&i(a,e,n)}function JS(t,e,n,i,r,o,{o:{nextSibling:s,parentNode:a,querySelector:l,insert:c,createText:u}},h){const d=e.target=Zh(e.props,l);if(d){const f=Qs(e.props),m=d._lpa||d.firstChild;if(e.shapeFlag&16)if(f)e.anchor=h(s(t),e,a(t),n,i,r,o),e.targetStart=m,e.targetAnchor=m&&s(m);else{e.anchor=s(t);let v=m;for(;v;){if(v&&v.nodeType===8){if(v.data==="teleport start anchor")e.targetStart=v;else if(v.data==="teleport anchor"){e.targetAnchor=v,d._lpa=e.targetAnchor&&s(e.targetAnchor);break}}v=s(v)}e.targetAnchor||jv(d,e,u,c),h(m&&s(m),e,d,n,i,r,o)}uc(e,f)}return e.anchor&&s(e.anchor)}const QS=ZS;function uc(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function jv(t,e,n,i){const r=e.targetStart=n(""),o=e.targetAnchor=n("");return r[Wv]=o,t&&(i(r,t),i(o,t)),o}const rr=Symbol("_leaveCb"),xl=Symbol("_enterCb");function qv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ri(()=>{t.isMounted=!0}),_s(()=>{t.isUnmounting=!0}),t}const Fn=[Function,Array],Yv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fn,onEnter:Fn,onAfterEnter:Fn,onEnterCancelled:Fn,onBeforeLeave:Fn,onLeave:Fn,onAfterLeave:Fn,onLeaveCancelled:Fn,onBeforeAppear:Fn,onAppear:Fn,onAfterAppear:Fn,onAppearCancelled:Fn},Kv=t=>{const e=t.subTree;return e.component?Kv(e.component):e},eC={name:"BaseTransition",props:Yv,setup(t,{slots:e}){const n=ja(),i=qv();return()=>{const r=e.default&&Vf(e.default(),!0);if(!r||!r.length)return;const o=Zv(r),s=at(t),{mode:a}=s;if(i.isLeaving)return Vu(o);const l=qp(o);if(!l)return Vu(o);let c=_a(l,s,i,n,d=>c=d);l.type!==Jt&&Kr(l,c);const u=n.subTree,h=u&&qp(u);if(h&&h.type!==Jt&&!Ir(l,h)&&Kv(n).type!==Jt){const d=_a(h,s,i,n);if(Kr(h,d),a==="out-in"&&l.type!==Jt)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave},Vu(o);a==="in-out"&&l.type!==Jt&&(d.delayLeave=(f,m,v)=>{const g=Jv(i,h);g[String(h.key)]=h,f[rr]=()=>{m(),f[rr]=void 0,delete c.delayedLeave},c.delayedLeave=v})}return o}}};function Zv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Jt){e=n;break}}return e}const tC=eC;function Jv(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function _a(t,e,n,i,r){const{appear:o,mode:s,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:g,onAppear:p,onAfterAppear:S,onAppearCancelled:y}=e,w=String(t.key),L=Jv(n,t),E=(z,b)=>{z&&ei(z,i,9,b)},T=(z,b)=>{const M=b[1];E(z,b),Ke(z)?z.every(I=>I.length<=1)&&M():z.length<=1&&M()},D={mode:s,persisted:a,beforeEnter(z){let b=l;if(!n.isMounted)if(o)b=g||l;else return;z[rr]&&z[rr](!0);const M=L[w];M&&Ir(t,M)&&M.el[rr]&&M.el[rr](),E(b,[z])},enter(z){let b=c,M=u,I=h;if(!n.isMounted)if(o)b=p||c,M=S||u,I=y||h;else return;let N=!1;const W=z[xl]=ne=>{N||(N=!0,ne?E(I,[z]):E(M,[z]),D.delayedLeave&&D.delayedLeave(),z[xl]=void 0)};b?T(b,[z,W]):W()},leave(z,b){const M=String(t.key);if(z[xl]&&z[xl](!0),n.isUnmounting)return b();E(d,[z]);let I=!1;const N=z[rr]=W=>{I||(I=!0,b(),W?E(v,[z]):E(m,[z]),z[rr]=void 0,L[M]===t&&delete L[M])};L[M]=t,f?T(f,[z,N]):N()},clone(z){const b=_a(z,e,n,i,r);return r&&r(b),b}};return D}function Vu(t){if(uu(t))return t=zi(t),t.children=null,t}function qp(t){if(!uu(t))return Xv(t.type)&&t.children?Zv(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Qe(n.default))return n.default()}}function Kr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Kr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Vf(t,e=!1,n){let i=[],r=0;for(let o=0;o<t.length;o++){let s=t[o];const a=n==null?s.key:String(n)+String(s.key!=null?s.key:o);s.type===Xt?(s.patchFlag&128&&r++,i=i.concat(Vf(s.children,e,a))):(e||s.type!==Jt)&&i.push(a!=null?zi(s,{key:a}):s)}if(r>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Lt(t,e){return Qe(t)?Ft({name:t.name},e,{setup:t}):t}function Qv(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Jh(t,e,n,i,r=!1){if(Ke(t)){t.forEach((m,v)=>Jh(m,e&&(Ke(e)?e[v]:e),n,i,r));return}if(Vo(i)&&!r)return;const o=i.shapeFlag&4?gu(i.component):i.el,s=r?null:o,{i:a,r:l}=t,c=e&&e.r,u=a.refs===xt?a.refs={}:a.refs,h=a.setupState,d=at(h),f=h===xt?()=>!1:m=>dt(d,m);if(c!=null&&c!==l&&(Rt(c)?(u[c]=null,f(c)&&(h[c]=null)):kt(c)&&(c.value=null)),Qe(l))Xa(l,a,12,[s,u]);else{const m=Rt(l),v=kt(l);if(m||v){const g=()=>{if(t.f){const p=m?f(l)?h[l]:u[l]:l.value;r?Ke(p)&&Rf(p,o):Ke(p)?p.includes(o)||p.push(o):m?(u[l]=[o],f(l)&&(h[l]=u[l])):(l.value=[o],t.k&&(u[t.k]=l.value))}else m?(u[l]=s,f(l)&&(h[l]=s)):v&&(l.value=s,t.k&&(u[t.k]=s))};s?(g.id=-1,Sn(g,n)):g()}}}su().requestIdleCallback;su().cancelIdleCallback;const Vo=t=>!!t.type.__asyncLoader,uu=t=>t.type.__isKeepAlive;function nC(t,e){ex(t,"a",e)}function iC(t,e){ex(t,"da",e)}function ex(t,e,n=cn){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(hu(e,i,n),n){let r=n.parent;for(;r&&r.parent;)uu(r.parent.vnode)&&rC(i,e,n,r),r=r.parent}}function rC(t,e,n,i){const r=hu(e,t,i,!0);nx(()=>{Rf(i[e],r)},n)}function hu(t,e,n=cn,i=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...s)=>{_r();const a=qa(n),l=ei(e,n,t,s);return a(),br(),l});return i?r.unshift(o):r.push(o),o}}const Wi=t=>(e,n=cn)=>{(!ya||t==="sp")&&hu(t,(...i)=>e(...i),n)},du=Wi("bm"),ri=Wi("m"),oC=Wi("bu"),tx=Wi("u"),_s=Wi("bum"),nx=Wi("um"),sC=Wi("sp"),aC=Wi("rtg"),lC=Wi("rtc");function cC(t,e=cn){hu("ec",t,e)}const uC=Symbol.for("v-ndc");function c5(t,e,n,i){let r;const o=n,s=Ke(t);if(s||Rt(t)){const a=s&&Ho(t);let l=!1;a&&(l=!Hn(t),t=lu(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?an(t[c]):t[c],c,void 0,o)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,o)}else if(bt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,o));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,o)}}else r=[];return r}function hC(t,e,n={},i,r){if(Qt.ce||Qt.parent&&Vo(Qt.parent)&&Qt.parent.ce)return Zr(),Rc(Xt,null,[wt("slot",n,i)],64);let o=t[e];o&&o._c&&(o._d=!1),Zr();const s=o&&ix(o(n)),a=n.key||s&&s.key,l=Rc(Xt,{key:(a&&!Gi(a)?a:`_${e}`)+(!s&&i?"_fb":"")},s||[],s&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function ix(t){return t.some(e=>rs(e)?!(e.type===Jt||e.type===Xt&&!ix(e.children)):!0)?t:null}const Qh=t=>t?Sx(t)?gu(t):Qh(t.parent):null,ea=Ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qh(t.parent),$root:t=>Qh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>$f(t),$forceUpdate:t=>t.f||(t.f=()=>{kf(t.update)}),$nextTick:t=>t.n||(t.n=Gr.bind(t.proxy)),$watch:t=>DC.bind(t)}),$u=(t,e)=>t!==xt&&!t.__isScriptSetup&&dt(t,e),dC={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:o,accessCache:s,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=s[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if($u(i,e))return s[e]=1,i[e];if(r!==xt&&dt(r,e))return s[e]=2,r[e];if((c=t.propsOptions[0])&&dt(c,e))return s[e]=3,o[e];if(n!==xt&&dt(n,e))return s[e]=4,n[e];ed&&(s[e]=0)}}const u=ea[e];let h,d;if(u)return e==="$attrs"&&sn(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==xt&&dt(n,e))return s[e]=4,n[e];if(d=l.config.globalProperties,dt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return $u(r,e)?(r[e]=n,!0):i!==xt&&dt(i,e)?(i[e]=n,!0):dt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:o}},s){let a;return!!n[s]||t!==xt&&dt(t,s)||$u(e,s)||(a=o[0])&&dt(a,s)||dt(i,s)||dt(ea,s)||dt(r.config.globalProperties,s)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:dt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Yp(t){return Ke(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ed=!0;function fC(t){const e=$f(t),n=t.proxy,i=t.ctx;ed=!1,e.beforeCreate&&Kp(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:s,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:v,deactivated:g,beforeDestroy:p,beforeUnmount:S,destroyed:y,unmounted:w,render:L,renderTracked:E,renderTriggered:T,errorCaptured:D,serverPrefetch:z,expose:b,inheritAttrs:M,components:I,directives:N,filters:W}=e;if(c&&pC(c,i,null),s)for(const te in s){const j=s[te];Qe(j)&&(i[te]=j.bind(n))}if(r){const te=r.call(n,n);bt(te)&&(t.data=Ga(te))}if(ed=!0,o)for(const te in o){const j=o[te],pe=Qe(j)?j.bind(n,n):Qe(j.get)?j.get.bind(n,n):fi,xe=!Qe(j)&&Qe(j.set)?j.set.bind(n):fi,be=Je({get:pe,set:xe});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>be.value,set:ke=>be.value=ke})}if(a)for(const te in a)rx(a[te],i,n,te);if(l){const te=Qe(l)?l.call(n):l;Reflect.ownKeys(te).forEach(j=>{dr(j,te[j])})}u&&Kp(u,t,"c");function X(te,j){Ke(j)?j.forEach(pe=>te(pe.bind(n))):j&&te(j.bind(n))}if(X(du,h),X(ri,d),X(oC,f),X(tx,m),X(nC,v),X(iC,g),X(cC,D),X(lC,E),X(aC,T),X(_s,S),X(nx,w),X(sC,z),Ke(b))if(b.length){const te=t.exposed||(t.exposed={});b.forEach(j=>{Object.defineProperty(te,j,{get:()=>n[j],set:pe=>n[j]=pe})})}else t.exposed||(t.exposed={});L&&t.render===fi&&(t.render=L),M!=null&&(t.inheritAttrs=M),I&&(t.components=I),N&&(t.directives=N),z&&Qv(t)}function pC(t,e,n=fi){Ke(t)&&(t=td(t));for(const i in t){const r=t[i];let o;bt(r)?"default"in r?o=Bt(r.from||i,r.default,!0):o=Bt(r.from||i):o=Bt(r),kt(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[i]=o}}function Kp(t,e,n){ei(Ke(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function rx(t,e,n,i){let r=i.includes(".")?gx(n,i):()=>n[i];if(Rt(t)){const o=e[t];Qe(o)&&un(r,o)}else if(Qe(t))un(r,t.bind(n));else if(bt(t))if(Ke(t))t.forEach(o=>rx(o,e,n,i));else{const o=Qe(t.handler)?t.handler.bind(n):e[t.handler];Qe(o)&&un(r,o,t)}}function $f(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Pc(l,c,s,!0)),Pc(l,e,s)),bt(e)&&o.set(e,l),l}function Pc(t,e,n,i=!1){const{mixins:r,extends:o}=e;o&&Pc(t,o,n,!0),r&&r.forEach(s=>Pc(t,s,n,!0));for(const s in e)if(!(i&&s==="expose")){const a=mC[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const mC={data:Zp,props:Jp,emits:Jp,methods:$s,computed:$s,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:$s,directives:$s,watch:vC,provide:Zp,inject:gC};function Zp(t,e){return e?t?function(){return Ft(Qe(t)?t.call(this,this):t,Qe(e)?e.call(this,this):e)}:e:t}function gC(t,e){return $s(td(t),td(e))}function td(t){if(Ke(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dn(t,e){return t?[...new Set([].concat(t,e))]:e}function $s(t,e){return t?Ft(Object.create(null),t,e):e}function Jp(t,e){return t?Ke(t)&&Ke(e)?[...new Set([...t,...e])]:Ft(Object.create(null),Yp(t),Yp(e??{})):e}function vC(t,e){if(!t)return e;if(!e)return t;const n=Ft(Object.create(null),t);for(const i in e)n[i]=dn(t[i],e[i]);return n}function ox(){return{app:null,config:{isNativeTag:eS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xC=0;function _C(t,e){return function(i,r=null){Qe(i)||(i=Ft({},i)),r!=null&&!bt(r)&&(r=null);const o=ox(),s=new WeakSet,a=[];let l=!1;const c=o.app={_uid:xC++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:ZC,get config(){return o.config},set config(u){},use(u,...h){return s.has(u)||(u&&Qe(u.install)?(s.add(u),u.install(c,...h)):Qe(u)&&(s.add(u),u(c,...h))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,h){return h?(o.components[u]=h,c):o.components[u]},directive(u,h){return h?(o.directives[u]=h,c):o.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||wt(i,r);return f.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(f,u):t(f,u,d),l=!0,c._container=u,u.__vue_app__=c,gu(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ei(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return o.provides[u]=h,c},runWithContext(u){const h=$o;$o=c;try{return u()}finally{$o=h}}};return c}}let $o=null;function dr(t,e){if(cn){let n=cn.provides;const i=cn.parent&&cn.parent.provides;i===n&&(n=cn.provides=Object.create(i)),n[t]=e}}function Bt(t,e,n=!1){const i=cn||Qt;if(i||$o){const r=$o?$o._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Qe(e)?e.call(i&&i.proxy):e}}const sx={},ax=()=>Object.create(sx),lx=t=>Object.getPrototypeOf(t)===sx;function bC(t,e,n,i=!1){const r={},o=ax();t.propsDefaults=Object.create(null),cx(t,e,r,o);for(const s in t.propsOptions[0])s in r||(r[s]=void 0);n?t.props=i?r:Uv(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function yC(t,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:s}}=t,a=at(r),[l]=t.propsOptions;let c=!1;if((i||s>0)&&!(s&16)){if(s&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(pu(t.emitsOptions,d))continue;const f=e[d];if(l)if(dt(o,d))f!==o[d]&&(o[d]=f,c=!0);else{const m=mr(d);r[m]=nd(l,a,m,f,t,!1)}else f!==o[d]&&(o[d]=f,c=!0)}}}else{cx(t,e,r,o)&&(c=!0);let u;for(const h in a)(!e||!dt(e,h)&&((u=xr(h))===h||!dt(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=nd(l,a,h,void 0,t,!0)):delete r[h]);if(o!==a)for(const h in o)(!e||!dt(e,h))&&(delete o[h],c=!0)}c&&Di(t.attrs,"set","")}function cx(t,e,n,i){const[r,o]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(Ks(l))continue;const c=e[l];let u;r&&dt(r,u=mr(l))?!o||!o.includes(u)?n[u]=c:(a||(a={}))[u]=c:pu(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,s=!0)}if(o){const l=at(n),c=a||xt;for(let u=0;u<o.length;u++){const h=o[u];n[h]=nd(r,l,h,c[h],t,!dt(c,h))}}return s}function nd(t,e,n,i,r,o){const s=t[n];if(s!=null){const a=dt(s,"default");if(a&&i===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&Qe(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=qa(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}s[0]&&(o&&!a?i=!1:s[1]&&(i===""||i===xr(n))&&(i=!0))}return i}const SC=new WeakMap;function ux(t,e,n=!1){const i=n?SC:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,s={},a=[];let l=!1;if(!Qe(t)){const u=h=>{l=!0;const[d,f]=ux(h,e,!0);Ft(s,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!o&&!l)return bt(t)&&i.set(t,zo),zo;if(Ke(o))for(let u=0;u<o.length;u++){const h=mr(o[u]);Qp(h)&&(s[h]=xt)}else if(o)for(const u in o){const h=mr(u);if(Qp(h)){const d=o[u],f=s[h]=Ke(d)||Qe(d)?{type:d}:Ft({},d),m=f.type;let v=!1,g=!0;if(Ke(m))for(let p=0;p<m.length;++p){const S=m[p],y=Qe(S)&&S.name;if(y==="Boolean"){v=!0;break}else y==="String"&&(g=!1)}else v=Qe(m)&&m.name==="Boolean";f[0]=v,f[1]=g,(v||dt(f,"default"))&&a.push(h)}}const c=[s,a];return bt(t)&&i.set(t,c),c}function Qp(t){return t[0]!=="$"&&!Ks(t)}const hx=t=>t[0]==="_"||t==="$stable",Gf=t=>Ke(t)?t.map(hi):[hi(t)],CC=(t,e,n)=>{if(e._n)return e;const i=ur((...r)=>Gf(e(...r)),n);return i._c=!1,i},dx=(t,e,n)=>{const i=t._ctx;for(const r in t){if(hx(r))continue;const o=t[r];if(Qe(o))e[r]=CC(r,o,i);else if(o!=null){const s=Gf(o);e[r]=()=>s}}},fx=(t,e)=>{const n=Gf(e);t.slots.default=()=>n},px=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},MC=(t,e,n)=>{const i=t.slots=ax();if(t.vnode.shapeFlag&32){const r=e._;r?(px(i,e,n),n&&vv(i,"_",r,!0)):dx(e,i)}else e&&fx(t,e)},wC=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,s=xt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:px(r,e,n):(o=!e.$stable,dx(e,r)),s=e}else e&&(fx(t,e),s={default:1});if(o)for(const a in r)!hx(a)&&s[a]==null&&delete r[a]},Sn=BC;function EC(t){return TC(t)}function TC(t,e){const n=su();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:s,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=fi,insertStaticContent:m}=t,v=(_,P,O,H=null,k=null,K=null,Z=void 0,C=null,x=!!P.dynamicChildren)=>{if(_===P)return;_&&!Ir(_,P)&&(H=V(_),ke(_,k,K,!0),_=null),P.patchFlag===-2&&(x=!1,P.dynamicChildren=null);const{type:R,ref:F,shapeFlag:B}=P;switch(R){case mu:g(_,P,O,H);break;case Jt:p(_,P,O,H);break;case Xu:_==null&&S(P,O,H,Z);break;case Xt:I(_,P,O,H,k,K,Z,C,x);break;default:B&1?L(_,P,O,H,k,K,Z,C,x):B&6?N(_,P,O,H,k,K,Z,C,x):(B&64||B&128)&&R.process(_,P,O,H,k,K,Z,C,x,ue)}F!=null&&k&&Jh(F,_&&_.ref,K,P||_,!P)},g=(_,P,O,H)=>{if(_==null)i(P.el=a(P.children),O,H);else{const k=P.el=_.el;P.children!==_.children&&c(k,P.children)}},p=(_,P,O,H)=>{_==null?i(P.el=l(P.children||""),O,H):P.el=_.el},S=(_,P,O,H)=>{[_.el,_.anchor]=m(_.children,P,O,H,_.el,_.anchor)},y=({el:_,anchor:P},O,H)=>{let k;for(;_&&_!==P;)k=d(_),i(_,O,H),_=k;i(P,O,H)},w=({el:_,anchor:P})=>{let O;for(;_&&_!==P;)O=d(_),r(_),_=O;r(P)},L=(_,P,O,H,k,K,Z,C,x)=>{P.type==="svg"?Z="svg":P.type==="math"&&(Z="mathml"),_==null?E(P,O,H,k,K,Z,C,x):z(_,P,k,K,Z,C,x)},E=(_,P,O,H,k,K,Z,C)=>{let x,R;const{props:F,shapeFlag:B,transition:G,dirs:ae}=_;if(x=_.el=s(_.type,K,F&&F.is,F),B&8?u(x,_.children):B&16&&D(_.children,x,null,H,k,Gu(_,K),Z,C),ae&&Sr(_,null,H,"created"),T(x,_,_.scopeId,Z,H),F){for(const fe in F)fe!=="value"&&!Ks(fe)&&o(x,fe,null,F[fe],K,H);"value"in F&&o(x,"value",null,F.value,K),(R=F.onVnodeBeforeMount)&&si(R,H,_)}ae&&Sr(_,null,H,"beforeMount");const se=AC(k,G);se&&G.beforeEnter(x),i(x,P,O),((R=F&&F.onVnodeMounted)||se||ae)&&Sn(()=>{R&&si(R,H,_),se&&G.enter(x),ae&&Sr(_,null,H,"mounted")},k)},T=(_,P,O,H,k)=>{if(O&&f(_,O),H)for(let K=0;K<H.length;K++)f(_,H[K]);if(k){let K=k.subTree;if(P===K||xx(K.type)&&(K.ssContent===P||K.ssFallback===P)){const Z=k.vnode;T(_,Z,Z.scopeId,Z.slotScopeIds,k.parent)}}},D=(_,P,O,H,k,K,Z,C,x=0)=>{for(let R=x;R<_.length;R++){const F=_[R]=C?or(_[R]):hi(_[R]);v(null,F,P,O,H,k,K,Z,C)}},z=(_,P,O,H,k,K,Z)=>{const C=P.el=_.el;let{patchFlag:x,dynamicChildren:R,dirs:F}=P;x|=_.patchFlag&16;const B=_.props||xt,G=P.props||xt;let ae;if(O&&Cr(O,!1),(ae=G.onVnodeBeforeUpdate)&&si(ae,O,P,_),F&&Sr(P,_,O,"beforeUpdate"),O&&Cr(O,!0),(B.innerHTML&&G.innerHTML==null||B.textContent&&G.textContent==null)&&u(C,""),R?b(_.dynamicChildren,R,C,O,H,Gu(P,k),K):Z||j(_,P,C,null,O,H,Gu(P,k),K,!1),x>0){if(x&16)M(C,B,G,O,k);else if(x&2&&B.class!==G.class&&o(C,"class",null,G.class,k),x&4&&o(C,"style",B.style,G.style,k),x&8){const se=P.dynamicProps;for(let fe=0;fe<se.length;fe++){const Oe=se[fe],de=B[Oe],_e=G[Oe];(_e!==de||Oe==="value")&&o(C,Oe,de,_e,k,O)}}x&1&&_.children!==P.children&&u(C,P.children)}else!Z&&R==null&&M(C,B,G,O,k);((ae=G.onVnodeUpdated)||F)&&Sn(()=>{ae&&si(ae,O,P,_),F&&Sr(P,_,O,"updated")},H)},b=(_,P,O,H,k,K,Z)=>{for(let C=0;C<P.length;C++){const x=_[C],R=P[C],F=x.el&&(x.type===Xt||!Ir(x,R)||x.shapeFlag&70)?h(x.el):O;v(x,R,F,null,H,k,K,Z,!0)}},M=(_,P,O,H,k)=>{if(P!==O){if(P!==xt)for(const K in P)!Ks(K)&&!(K in O)&&o(_,K,P[K],null,k,H);for(const K in O){if(Ks(K))continue;const Z=O[K],C=P[K];Z!==C&&K!=="value"&&o(_,K,C,Z,k,H)}"value"in O&&o(_,"value",P.value,O.value,k)}},I=(_,P,O,H,k,K,Z,C,x)=>{const R=P.el=_?_.el:a(""),F=P.anchor=_?_.anchor:a("");let{patchFlag:B,dynamicChildren:G,slotScopeIds:ae}=P;ae&&(C=C?C.concat(ae):ae),_==null?(i(R,O,H),i(F,O,H),D(P.children||[],O,F,k,K,Z,C,x)):B>0&&B&64&&G&&_.dynamicChildren?(b(_.dynamicChildren,G,O,k,K,Z,C),(P.key!=null||k&&P===k.subTree)&&Wf(_,P,!0)):j(_,P,O,F,k,K,Z,C,x)},N=(_,P,O,H,k,K,Z,C,x)=>{P.slotScopeIds=C,_==null?P.shapeFlag&512?k.ctx.activate(P,O,H,Z,x):W(P,O,H,k,K,Z,x):ne(_,P,x)},W=(_,P,O,H,k,K,Z)=>{const C=_.component=WC(_,H,k);if(uu(_)&&(C.ctx.renderer=ue),XC(C,!1,Z),C.asyncDep){if(k&&k.registerDep(C,X,Z),!_.el){const x=C.subTree=wt(Jt);p(null,x,P,O)}}else X(C,_,P,O,k,K,Z)},ne=(_,P,O)=>{const H=P.component=_.component;if(UC(_,P,O))if(H.asyncDep&&!H.asyncResolved){te(H,P,O);return}else H.next=P,H.update();else P.el=_.el,H.vnode=P},X=(_,P,O,H,k,K,Z)=>{const C=()=>{if(_.isMounted){let{next:B,bu:G,u:ae,parent:se,vnode:fe}=_;{const Fe=mx(_);if(Fe){B&&(B.el=fe.el,te(_,B,Z)),Fe.asyncDep.then(()=>{_.isUnmounted||C()});return}}let Oe=B,de;Cr(_,!1),B?(B.el=fe.el,te(_,B,Z)):B=fe,G&&Uu(G),(de=B.props&&B.props.onVnodeBeforeUpdate)&&si(de,se,B,fe),Cr(_,!0);const _e=Wu(_),Be=_.subTree;_.subTree=_e,v(Be,_e,h(Be.el),V(Be),_,k,K),B.el=_e.el,Oe===null&&zC(_,_e.el),ae&&Sn(ae,k),(de=B.props&&B.props.onVnodeUpdated)&&Sn(()=>si(de,se,B,fe),k)}else{let B;const{el:G,props:ae}=P,{bm:se,m:fe,parent:Oe,root:de,type:_e}=_,Be=Vo(P);if(Cr(_,!1),se&&Uu(se),!Be&&(B=ae&&ae.onVnodeBeforeMount)&&si(B,Oe,P),Cr(_,!0),G&&ie){const Fe=()=>{_.subTree=Wu(_),ie(G,_.subTree,_,k,null)};Be&&_e.__asyncHydrate?_e.__asyncHydrate(G,_,Fe):Fe()}else{de.ce&&de.ce._injectChildStyle(_e);const Fe=_.subTree=Wu(_);v(null,Fe,O,H,_,k,K),P.el=Fe.el}if(fe&&Sn(fe,k),!Be&&(B=ae&&ae.onVnodeMounted)){const Fe=P;Sn(()=>si(B,Oe,Fe),k)}(P.shapeFlag&256||Oe&&Vo(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&_.a&&Sn(_.a,k),_.isMounted=!0,P=O=H=null}};_.scope.on();const x=_.effect=new Cv(C);_.scope.off();const R=_.update=x.run.bind(x),F=_.job=x.runIfDirty.bind(x);F.i=_,F.id=_.uid,x.scheduler=()=>kf(F),Cr(_,!0),R()},te=(_,P,O)=>{P.component=_;const H=_.vnode.props;_.vnode=P,_.next=null,yC(_,P.props,H,O),wC(_,P.children,O),_r(),Wp(_),br()},j=(_,P,O,H,k,K,Z,C,x=!1)=>{const R=_&&_.children,F=_?_.shapeFlag:0,B=P.children,{patchFlag:G,shapeFlag:ae}=P;if(G>0){if(G&128){xe(R,B,O,H,k,K,Z,C,x);return}else if(G&256){pe(R,B,O,H,k,K,Z,C,x);return}}ae&8?(F&16&&ge(R,k,K),B!==R&&u(O,B)):F&16?ae&16?xe(R,B,O,H,k,K,Z,C,x):ge(R,k,K,!0):(F&8&&u(O,""),ae&16&&D(B,O,H,k,K,Z,C,x))},pe=(_,P,O,H,k,K,Z,C,x)=>{_=_||zo,P=P||zo;const R=_.length,F=P.length,B=Math.min(R,F);let G;for(G=0;G<B;G++){const ae=P[G]=x?or(P[G]):hi(P[G]);v(_[G],ae,O,null,k,K,Z,C,x)}R>F?ge(_,k,K,!0,!1,B):D(P,O,H,k,K,Z,C,x,B)},xe=(_,P,O,H,k,K,Z,C,x)=>{let R=0;const F=P.length;let B=_.length-1,G=F-1;for(;R<=B&&R<=G;){const ae=_[R],se=P[R]=x?or(P[R]):hi(P[R]);if(Ir(ae,se))v(ae,se,O,null,k,K,Z,C,x);else break;R++}for(;R<=B&&R<=G;){const ae=_[B],se=P[G]=x?or(P[G]):hi(P[G]);if(Ir(ae,se))v(ae,se,O,null,k,K,Z,C,x);else break;B--,G--}if(R>B){if(R<=G){const ae=G+1,se=ae<F?P[ae].el:H;for(;R<=G;)v(null,P[R]=x?or(P[R]):hi(P[R]),O,se,k,K,Z,C,x),R++}}else if(R>G)for(;R<=B;)ke(_[R],k,K,!0),R++;else{const ae=R,se=R,fe=new Map;for(R=se;R<=G;R++){const Ve=P[R]=x?or(P[R]):hi(P[R]);Ve.key!=null&&fe.set(Ve.key,R)}let Oe,de=0;const _e=G-se+1;let Be=!1,Fe=0;const Ae=new Array(_e);for(R=0;R<_e;R++)Ae[R]=0;for(R=ae;R<=B;R++){const Ve=_[R];if(de>=_e){ke(Ve,k,K,!0);continue}let nt;if(Ve.key!=null)nt=fe.get(Ve.key);else for(Oe=se;Oe<=G;Oe++)if(Ae[Oe-se]===0&&Ir(Ve,P[Oe])){nt=Oe;break}nt===void 0?ke(Ve,k,K,!0):(Ae[nt-se]=R+1,nt>=Fe?Fe=nt:Be=!0,v(Ve,P[nt],O,null,k,K,Z,C,x),de++)}const tt=Be?PC(Ae):zo;for(Oe=tt.length-1,R=_e-1;R>=0;R--){const Ve=se+R,nt=P[Ve],$=Ve+1<F?P[Ve+1].el:H;Ae[R]===0?v(null,nt,O,$,k,K,Z,C,x):Be&&(Oe<0||R!==tt[Oe]?be(nt,O,$,2):Oe--)}}},be=(_,P,O,H,k=null)=>{const{el:K,type:Z,transition:C,children:x,shapeFlag:R}=_;if(R&6){be(_.component.subTree,P,O,H);return}if(R&128){_.suspense.move(P,O,H);return}if(R&64){Z.move(_,P,O,ue);return}if(Z===Xt){i(K,P,O);for(let B=0;B<x.length;B++)be(x[B],P,O,H);i(_.anchor,P,O);return}if(Z===Xu){y(_,P,O);return}if(H!==2&&R&1&&C)if(H===0)C.beforeEnter(K),i(K,P,O),Sn(()=>C.enter(K),k);else{const{leave:B,delayLeave:G,afterLeave:ae}=C,se=()=>i(K,P,O),fe=()=>{B(K,()=>{se(),ae&&ae()})};G?G(K,se,fe):fe()}else i(K,P,O)},ke=(_,P,O,H=!1,k=!1)=>{const{type:K,props:Z,ref:C,children:x,dynamicChildren:R,shapeFlag:F,patchFlag:B,dirs:G,cacheIndex:ae}=_;if(B===-2&&(k=!1),C!=null&&Jh(C,null,O,_,!0),ae!=null&&(P.renderCache[ae]=void 0),F&256){P.ctx.deactivate(_);return}const se=F&1&&G,fe=!Vo(_);let Oe;if(fe&&(Oe=Z&&Z.onVnodeBeforeUnmount)&&si(Oe,P,_),F&6)ce(_.component,O,H);else{if(F&128){_.suspense.unmount(O,H);return}se&&Sr(_,null,P,"beforeUnmount"),F&64?_.type.remove(_,P,O,ue,H):R&&!R.hasOnce&&(K!==Xt||B>0&&B&64)?ge(R,P,O,!1,!0):(K===Xt&&B&384||!k&&F&16)&&ge(x,P,O),H&&Ce(_)}(fe&&(Oe=Z&&Z.onVnodeUnmounted)||se)&&Sn(()=>{Oe&&si(Oe,P,_),se&&Sr(_,null,P,"unmounted")},O)},Ce=_=>{const{type:P,el:O,anchor:H,transition:k}=_;if(P===Xt){J(O,H);return}if(P===Xu){w(_);return}const K=()=>{r(O),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(_.shapeFlag&1&&k&&!k.persisted){const{leave:Z,delayLeave:C}=k,x=()=>Z(O,K);C?C(_.el,K,x):x()}else K()},J=(_,P)=>{let O;for(;_!==P;)O=d(_),r(_),_=O;r(P)},ce=(_,P,O)=>{const{bum:H,scope:k,job:K,subTree:Z,um:C,m:x,a:R}=_;em(x),em(R),H&&Uu(H),k.stop(),K&&(K.flags|=8,ke(Z,_,P,O)),C&&Sn(C,P),Sn(()=>{_.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},ge=(_,P,O,H=!1,k=!1,K=0)=>{for(let Z=K;Z<_.length;Z++)ke(_[Z],P,O,H,k)},V=_=>{if(_.shapeFlag&6)return V(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const P=d(_.anchor||_.el),O=P&&P[Wv];return O?d(O):P};let le=!1;const oe=(_,P,O)=>{_==null?P._vnode&&ke(P._vnode,null,null,!0):v(P._vnode||null,_,P,null,null,null,O),P._vnode=_,le||(le=!0,Wp(),Vv(),le=!1)},ue={p:v,um:ke,m:be,r:Ce,mt:W,mc:D,pc:j,pbc:b,n:V,o:t};let we,ie;return{render:oe,hydrate:we,createApp:_C(oe,we)}}function Gu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Cr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function AC(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Wf(t,e,n=!1){const i=t.children,r=e.children;if(Ke(i)&&Ke(r))for(let o=0;o<i.length;o++){const s=i[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=or(r[o]),a.el=s.el),!n&&a.patchFlag!==-2&&Wf(s,a)),a.type===mu&&(a.el=s.el)}}function PC(t){const e=t.slice(),n=[0];let i,r,o,s,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=e[s];return n}function mx(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mx(e)}function em(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const RC=Symbol.for("v-scx"),LC=()=>Bt(RC);function fu(t,e){return Xf(t,null,e)}function un(t,e,n){return Xf(t,e,n)}function Xf(t,e,n=xt){const{immediate:i,deep:r,flush:o,once:s}=n,a=Ft({},n),l=e&&i||!e&&o!=="post";let c;if(ya){if(o==="sync"){const f=LC();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=fi,f.resume=fi,f.pause=fi,f}}const u=cn;a.call=(f,m,v)=>ei(f,u,m,v);let h=!1;o==="post"?a.scheduler=f=>{Sn(f,u&&u.suspense)}:o!=="sync"&&(h=!0,a.scheduler=(f,m)=>{m?f():kf(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=WS(t,e,a);return ya&&(c?c.push(d):l&&d()),d}function DC(t,e,n){const i=this.proxy,r=Rt(t)?t.includes(".")?gx(i,t):()=>i[t]:t.bind(i,i);let o;Qe(e)?o=e:(o=e.handler,n=e);const s=qa(this),a=Xf(r,o.bind(i),n);return s(),a}function gx(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const IC=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${mr(e)}Modifiers`]||t[`${xr(e)}Modifiers`];function OC(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||xt;let r=n;const o=e.startsWith("update:"),s=o&&IC(i,e.slice(7));s&&(s.trim&&(r=n.map(u=>Rt(u)?u.trim():u)),s.number&&(r=n.map(oS)));let a,l=i[a=Fu(e)]||i[a=Fu(mr(e))];!l&&o&&(l=i[a=Fu(xr(e))]),l&&ei(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ei(c,t,6,r)}}function vx(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let s={},a=!1;if(!Qe(t)){const l=c=>{const u=vx(c,e,!0);u&&(a=!0,Ft(s,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(bt(t)&&i.set(t,null),null):(Ke(o)?o.forEach(l=>s[l]=null):Ft(s,o),bt(t)&&i.set(t,s),s)}function pu(t,e){return!t||!iu(e)?!1:(e=e.slice(2).replace(/Once$/,""),dt(t,e[0].toLowerCase()+e.slice(1))||dt(t,xr(e))||dt(t,e))}function Wu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[o],slots:s,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:m,inheritAttrs:v}=t,g=Ac(t);let p,S;try{if(n.shapeFlag&4){const w=r||i,L=w;p=hi(c.call(L,w,u,h,f,d,m)),S=a}else{const w=e;p=hi(w.length>1?w(h,{attrs:a,slots:s,emit:l}):w(h,null)),S=e.props?a:NC(a)}}catch(w){ta.length=0,cu(w,t,1),p=wt(Jt)}let y=p;if(S&&v!==!1){const w=Object.keys(S),{shapeFlag:L}=y;w.length&&L&7&&(o&&w.some(Pf)&&(S=FC(S,o)),y=zi(y,S,!1,!0))}return n.dirs&&(y=zi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&Kr(y,n.transition),p=y,Ac(g),p}const NC=t=>{let e;for(const n in t)(n==="class"||n==="style"||iu(n))&&((e||(e={}))[n]=t[n]);return e},FC=(t,e)=>{const n={};for(const i in t)(!Pf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function UC(t,e,n){const{props:i,children:r,component:o}=t,{props:s,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?tm(i,s,c):!!s;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(s[d]!==i[d]&&!pu(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===s?!1:i?s?tm(i,s,c):!0:!!s;return!1}function tm(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==t[o]&&!pu(n,o))return!0}return!1}function zC({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const xx=t=>t.__isSuspense;function BC(t,e){e&&e.pendingBranch?Ke(t)?e.effects.push(...t):e.effects.push(t):qS(t)}const Xt=Symbol.for("v-fgt"),mu=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),Xu=Symbol.for("v-stc"),ta=[];let On=null;function Zr(t=!1){ta.push(On=t?null:[])}function HC(){ta.pop(),On=ta[ta.length-1]||null}let ba=1;function nm(t){ba+=t,t<0&&On&&(On.hasOnce=!0)}function _x(t){return t.dynamicChildren=ba>0?On||zo:null,HC(),ba>0&&On&&On.push(t),t}function jf(t,e,n,i,r,o){return _x(Wr(t,e,n,i,r,o,!0))}function Rc(t,e,n,i,r){return _x(wt(t,e,n,i,r,!0))}function rs(t){return t?t.__v_isVNode===!0:!1}function Ir(t,e){return t.type===e.type&&t.key===e.key}const bx=({key:t})=>t??null,hc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Rt(t)||kt(t)||Qe(t)?{i:Qt,r:t,k:e,f:!!n}:t:null);function Wr(t,e=null,n=null,i=0,r=null,o=t===Xt?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bx(e),ref:e&&hc(e),scopeId:Gv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Qt};return a?(qf(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=Rt(n)?8:16),ba>0&&!s&&On&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&On.push(l),l}const wt=kC;function kC(t,e=null,n=null,i=0,r=null,o=!1){if((!t||t===uC)&&(t=Jt),rs(t)){const a=zi(t,e,!0);return n&&qf(a,n),ba>0&&!o&&On&&(a.shapeFlag&6?On[On.indexOf(t)]=a:On.push(a)),a.patchFlag=-2,a}if(KC(t)&&(t=t.__vccOpts),e){e=VC(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=If(a)),bt(l)&&(Bf(l)&&!Ke(l)&&(l=Ft({},l)),e.style=Df(l))}const s=Rt(t)?1:xx(t)?128:Xv(t)?64:bt(t)?4:Qe(t)?2:0;return Wr(t,e,n,i,r,s,o,!0)}function VC(t){return t?Bf(t)||lx(t)?Ft({},t):t:null}function zi(t,e,n=!1,i=!1){const{props:r,ref:o,patchFlag:s,children:a,transition:l}=t,c=e?yx(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&bx(c),ref:e&&e.ref?n&&o?Ke(o)?o.concat(hc(e)):[o,hc(e)]:hc(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zi(t.ssContent),ssFallback:t.ssFallback&&zi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Kr(u,l.clone(u)),u}function os(t=" ",e=0){return wt(mu,null,t,e)}function u5(t="",e=!1){return e?(Zr(),Rc(Jt,null,t)):wt(Jt,null,t)}function hi(t){return t==null||typeof t=="boolean"?wt(Jt):Ke(t)?wt(Xt,null,t.slice()):rs(t)?or(t):wt(mu,null,String(t))}function or(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zi(t)}function qf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ke(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),qf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!lx(e)?e._ctx=Qt:r===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Qe(e)?(e={default:e,_ctx:Qt},n=32):(e=String(e),i&64?(n=16,e=[os(e)]):n=8);t.children=e,t.shapeFlag|=n}function yx(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=If([e.class,i.class]));else if(r==="style")e.style=Df([e.style,i.style]);else if(iu(r)){const o=e[r],s=i[r];s&&o!==s&&!(Ke(o)&&o.includes(s))&&(e[r]=o?[].concat(o,s):s)}else r!==""&&(e[r]=i[r])}return e}function si(t,e,n,i=null){ei(t,e,7,[n,i])}const $C=ox();let GC=0;function WC(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||$C,o={uid:GC++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ux(i,r),emitsOptions:vx(i,r),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:i.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=OC.bind(null,o),t.ce&&t.ce(o),o}let cn=null;const ja=()=>cn||Qt;let Lc,id;{const t=su(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),o=>{r.length>1?r.forEach(s=>s(o)):r[0](o)}};Lc=e("__VUE_INSTANCE_SETTERS__",n=>cn=n),id=e("__VUE_SSR_SETTERS__",n=>ya=n)}const qa=t=>{const e=cn;return Lc(t),t.scope.on(),()=>{t.scope.off(),Lc(e)}},im=()=>{cn&&cn.scope.off(),Lc(null)};function Sx(t){return t.vnode.shapeFlag&4}let ya=!1;function XC(t,e=!1,n=!1){e&&id(e);const{props:i,children:r}=t.vnode,o=Sx(t);bC(t,i,o,e),MC(t,r,n);const s=o?jC(t,e):void 0;return e&&id(!1),s}function jC(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,dC);const{setup:i}=n;if(i){_r();const r=t.setupContext=i.length>1?YC(t):null,o=qa(t),s=Xa(i,t,0,[t.props,r]),a=fv(s);if(br(),o(),(a||t.sp)&&!Vo(t)&&Qv(t),a){if(s.then(im,im),e)return s.then(l=>{rm(t,l,e)}).catch(l=>{cu(l,t,0)});t.asyncDep=s}else rm(t,s,e)}else Cx(t,e)}function rm(t,e,n){Qe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:bt(e)&&(t.setupState=Bv(e)),Cx(t,n)}let om;function Cx(t,e,n){const i=t.type;if(!t.render){if(!e&&om&&!i.render){const r=i.template||$f(t).template;if(r){const{isCustomElement:o,compilerOptions:s}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ft(Ft({isCustomElement:o,delimiters:a},s),l);i.render=om(r,c)}}t.render=i.render||fi}{const r=qa(t);_r();try{fC(t)}finally{br(),r()}}}const qC={get(t,e){return sn(t,"get",""),t[e]}};function YC(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,qC),slots:t.slots,emit:t.emit,expose:e}}function gu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Bv(wc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ea)return ea[n](t)},has(e,n){return n in e||n in ea}})):t.proxy}function KC(t){return Qe(t)&&"__vccOpts"in t}const Je=(t,e)=>$S(t,e,ya);function me(t,e,n){const i=arguments.length;return i===2?bt(e)&&!Ke(e)?rs(e)?wt(t,null,[e]):wt(t,e):wt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&rs(n)&&(n=[n]),wt(t,e,n))}const ZC="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rd;const sm=typeof window<"u"&&window.trustedTypes;if(sm)try{rd=sm.createPolicy("vue",{createHTML:t=>t})}catch{}const Mx=rd?t=>rd.createHTML(t):t=>t,JC="http://www.w3.org/2000/svg",QC="http://www.w3.org/1998/Math/MathML",Li=typeof document<"u"?document:null,am=Li&&Li.createElement("template"),eM={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Li.createElementNS(JC,t):e==="mathml"?Li.createElementNS(QC,t):n?Li.createElement(t,{is:n}):Li.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Li.createTextNode(t),createComment:t=>Li.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Li.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,o){const s=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{am.innerHTML=Mx(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=am.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},qi="transition",Ds="animation",ss=Symbol("_vtc"),wx={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ex=Ft({},Yv,wx),tM=t=>(t.displayName="Transition",t.props=Ex,t),Tx=tM((t,{slots:e})=>me(tC,Ax(t),e)),Mr=(t,e=[])=>{Ke(t)?t.forEach(n=>n(...e)):t&&t(...e)},lm=t=>t?Ke(t)?t.some(e=>e.length>1):t.length>1:!1;function Ax(t){const e={};for(const I in t)I in wx||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:c=s,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,m=nM(r),v=m&&m[0],g=m&&m[1],{onBeforeEnter:p,onEnter:S,onEnterCancelled:y,onLeave:w,onLeaveCancelled:L,onBeforeAppear:E=p,onAppear:T=S,onAppearCancelled:D=y}=e,z=(I,N,W)=>{nr(I,N?u:a),nr(I,N?c:s),W&&W()},b=(I,N)=>{I._isLeaving=!1,nr(I,h),nr(I,f),nr(I,d),N&&N()},M=I=>(N,W)=>{const ne=I?T:S,X=()=>z(N,I,W);Mr(ne,[N,X]),cm(()=>{nr(N,I?l:o),Pi(N,I?u:a),lm(ne)||um(N,i,v,X)})};return Ft(e,{onBeforeEnter(I){Mr(p,[I]),Pi(I,o),Pi(I,s)},onBeforeAppear(I){Mr(E,[I]),Pi(I,l),Pi(I,c)},onEnter:M(!1),onAppear:M(!0),onLeave(I,N){I._isLeaving=!0;const W=()=>b(I,N);Pi(I,h),Pi(I,d),Rx(),cm(()=>{I._isLeaving&&(nr(I,h),Pi(I,f),lm(w)||um(I,i,g,W))}),Mr(w,[I,W])},onEnterCancelled(I){z(I,!1),Mr(y,[I])},onAppearCancelled(I){z(I,!0),Mr(D,[I])},onLeaveCancelled(I){b(I),Mr(L,[I])}})}function nM(t){if(t==null)return null;if(bt(t))return[ju(t.enter),ju(t.leave)];{const e=ju(t);return[e,e]}}function ju(t){return sS(t)}function Pi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ss]||(t[ss]=new Set)).add(e)}function nr(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[ss];n&&(n.delete(e),n.size||(t[ss]=void 0))}function cm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let iM=0;function um(t,e,n,i){const r=t._endId=++iM,o=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(o,n);const{type:s,timeout:a,propCount:l}=Px(t,e);if(!s)return i();const c=s+"end";let u=0;const h=()=>{t.removeEventListener(c,d),o()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function Px(t,e){const n=window.getComputedStyle(t),i=m=>(n[m]||"").split(", "),r=i(`${qi}Delay`),o=i(`${qi}Duration`),s=hm(r,o),a=i(`${Ds}Delay`),l=i(`${Ds}Duration`),c=hm(a,l);let u=null,h=0,d=0;e===qi?s>0&&(u=qi,h=s,d=o.length):e===Ds?c>0&&(u=Ds,h=c,d=l.length):(h=Math.max(s,c),u=h>0?s>c?qi:Ds:null,d=u?u===qi?o.length:l.length:0);const f=u===qi&&/\b(transform|all)(,|$)/.test(i(`${qi}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function hm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>dm(n)+dm(t[i])))}function dm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Rx(){return document.body.offsetHeight}function rM(t,e,n){const i=t[ss];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Dc=Symbol("_vod"),Lx=Symbol("_vsh"),oM={beforeMount(t,{value:e},{transition:n}){t[Dc]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Is(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Is(t,!0),i.enter(t)):i.leave(t,()=>{Is(t,!1)}):Is(t,e))},beforeUnmount(t,{value:e}){Is(t,e)}};function Is(t,e){t.style.display=e?t[Dc]:"none",t[Lx]=!e}const sM=Symbol(""),aM=/(^|;)\s*display\s*:/;function lM(t,e,n){const i=t.style,r=Rt(n);let o=!1;if(n&&!r){if(e)if(Rt(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();n[a]==null&&dc(i,a,"")}else for(const s in e)n[s]==null&&dc(i,s,"");for(const s in n)s==="display"&&(o=!0),dc(i,s,n[s])}else if(r){if(e!==n){const s=i[sM];s&&(n+=";"+s),i.cssText=n,o=aM.test(n)}}else e&&t.removeAttribute("style");Dc in t&&(t[Dc]=o?i.display:"",t[Lx]&&(i.display="none"))}const fm=/\s*!important$/;function dc(t,e,n){if(Ke(n))n.forEach(i=>dc(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=cM(t,e);fm.test(n)?t.setProperty(xr(i),n.replace(fm,""),"important"):t[i]=n}}const pm=["Webkit","Moz","ms"],qu={};function cM(t,e){const n=qu[e];if(n)return n;let i=mr(e);if(i!=="filter"&&i in t)return qu[e]=i;i=gv(i);for(let r=0;r<pm.length;r++){const o=pm[r]+i;if(o in t)return qu[e]=o}return e}const mm="http://www.w3.org/1999/xlink";function gm(t,e,n,i,r,o=dS(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(mm,e.slice(6,e.length)):t.setAttributeNS(mm,e,n):n==null||o&&!xv(n)?t.removeAttribute(e):t.setAttribute(e,o?"":Gi(n)?String(n):n)}function vm(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Mx(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=xv(n):n==null&&a==="string"?(n="",s=!0):a==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(r||e)}function uM(t,e,n,i){t.addEventListener(e,n,i)}function hM(t,e,n,i){t.removeEventListener(e,n,i)}const xm=Symbol("_vei");function dM(t,e,n,i,r=null){const o=t[xm]||(t[xm]={}),s=o[e];if(i&&s)s.value=i;else{const[a,l]=fM(e);if(i){const c=o[e]=gM(i,r);uM(t,a,c,l)}else s&&(hM(t,a,s,l),o[e]=void 0)}}const _m=/(?:Once|Passive|Capture)$/;function fM(t){let e;if(_m.test(t)){e={};let i;for(;i=t.match(_m);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xr(t.slice(2)),e]}let Yu=0;const pM=Promise.resolve(),mM=()=>Yu||(pM.then(()=>Yu=0),Yu=Date.now());function gM(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ei(vM(i,n.value),e,5,[i])};return n.value=t,n.attached=mM(),n}function vM(t,e){if(Ke(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const bm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xM=(t,e,n,i,r,o)=>{const s=r==="svg";e==="class"?rM(t,i,s):e==="style"?lM(t,n,i):iu(e)?Pf(e)||dM(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_M(t,e,i,s))?(vm(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&gm(t,e,i,s,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Rt(i))?vm(t,mr(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),gm(t,e,i,s))};function _M(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&bm(e)&&Qe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return bm(e)&&Rt(n)?!1:e in t}const Dx=new WeakMap,Ix=new WeakMap,Ic=Symbol("_moveCb"),ym=Symbol("_enterCb"),bM=t=>(delete t.props.mode,t),yM=bM({name:"TransitionGroup",props:Ft({},Ex,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=ja(),i=qv();let r,o;return tx(()=>{if(!r.length)return;const s=t.moveClass||`${t.name||"v"}-move`;if(!wM(r[0].el,n.vnode.el,s))return;r.forEach(SM),r.forEach(CM);const a=r.filter(MM);Rx(),a.forEach(l=>{const c=l.el,u=c.style;Pi(c,s),u.transform=u.webkitTransform=u.transitionDuration="";const h=c[Ic]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c[Ic]=null,nr(c,s))};c.addEventListener("transitionend",h)})}),()=>{const s=at(t),a=Ax(s);let l=s.tag||Xt;if(r=[],o)for(let c=0;c<o.length;c++){const u=o[c];u.el&&u.el instanceof Element&&(r.push(u),Kr(u,_a(u,a,i,n)),Dx.set(u,u.el.getBoundingClientRect()))}o=e.default?Vf(e.default()):[];for(let c=0;c<o.length;c++){const u=o[c];u.key!=null&&Kr(u,_a(u,a,i,n))}return wt(l,null,o)}}}),Ox=yM;function SM(t){const e=t.el;e[Ic]&&e[Ic](),e[ym]&&e[ym]()}function CM(t){Ix.set(t,t.el.getBoundingClientRect())}function MM(t){const e=Dx.get(t),n=Ix.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const o=t.el.style;return o.transform=o.webkitTransform=`translate(${i}px,${r}px)`,o.transitionDuration="0s",t}}function wM(t,e,n){const i=t.cloneNode(),r=t[ss];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const o=e.nodeType===1?e:e.parentNode;o.appendChild(i);const{hasTransform:s}=Px(i);return o.removeChild(i),s}const EM={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},h5=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=r=>{if(!("key"in r))return;const o=xr(r.key);if(e.some(s=>s===o||EM[s]===o))return t(r)})},TM=Ft({patchProp:xM},eM);let Sm;function AM(){return Sm||(Sm=EC(TM))}const PM=(...t)=>{const e=AM().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=LM(i);if(!r)return;const o=e._component;!Qe(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=n(r,!1,RM(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e};function RM(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function LM(t){return Rt(t)?document.querySelector(t):t}var DM=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const IM=Symbol();var Cm;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Cm||(Cm={}));function OM(){const t=pS(!0),e=t.run(()=>lt({}));let n=[],i=[];const r=wc({install(o){r._a=o,o.provide(IM,r),o.config.globalProperties.$pinia=r,i.forEach(s=>n.push(s)),i=[]},use(o){return!this._a&&!DM?i.push(o):n.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}function Nx(t){return Sv()?(mS(t),!0):!1}function gi(t){return typeof t=="function"?t():Zt(t)}const NM=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const FM=Object.prototype.toString,UM=t=>FM.call(t)==="[object Object]",Oc=()=>{};function Fx(t,e){function n(...i){return new Promise((r,o)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(o)})}return n}const Ux=t=>t();function zM(t,e={}){let n,i,r=Oc;const o=a=>{clearTimeout(a),r(),r=Oc};return a=>{const l=gi(t),c=gi(e.maxWait);return n&&o(n),l<=0||c!==void 0&&c<=0?(i&&(o(i),i=null),Promise.resolve(a())):new Promise((u,h)=>{r=e.rejectOnCancel?h:u,c&&!i&&(i=setTimeout(()=>{n&&o(n),i=null,u(a())},c)),n=setTimeout(()=>{i&&o(i),i=null,u(a())},l)})}}function BM(t=Ux){const e=lt(!0);function n(){e.value=!1}function i(){e.value=!0}const r=(...o)=>{e.value&&t(...o)};return{isActive:Wa(e),pause:n,resume:i,eventFilter:r}}function HM(t,e){var n;if(typeof t=="number")return t+e;const i=((n=t.match(/^-?\d+\.?\d*/))==null?void 0:n[0])||"",r=t.slice(i.length),o=Number.parseFloat(i)+e;return Number.isNaN(o)?t:o+r}function kM(t){return ja()}function VM(...t){if(t.length!==1)return Cn(...t);const e=t[0];return typeof e=="function"?Wa(zS(()=>({get:e,set:Oc}))):lt(e)}function zx(t,e=200,n={}){return Fx(zM(e,n),t)}function $M(t,e,n={}){const{eventFilter:i=Ux,...r}=n;return un(t,Fx(i,e),r)}function GM(t,e,n={}){const{eventFilter:i,...r}=n,{eventFilter:o,pause:s,resume:a,isActive:l}=BM(i);return{stop:$M(t,e,{...r,eventFilter:o}),pause:s,resume:a,isActive:l}}function Bx(t,e=!0,n){kM()?ri(t,n):e?t():Gr(t)}function WM(t=!1,e={}){const{truthyValue:n=!0,falsyValue:i=!1}=e,r=kt(t),o=lt(t);function s(a){if(arguments.length)return o.value=a,o.value;{const l=gi(n);return o.value=o.value===l?gi(i):l,o.value}}return r?s:[o,s]}const Jr=NM?window:void 0;function Hx(t){var e;const n=gi(t);return(e=n==null?void 0:n.$el)!=null?e:n}function Mm(...t){let e,n,i,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,i,r]=t,e=Jr):[e,n,i,r]=t,!e)return Oc;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const o=[],s=()=>{o.forEach(u=>u()),o.length=0},a=(u,h,d,f)=>(u.addEventListener(h,d,f),()=>u.removeEventListener(h,d,f)),l=un(()=>[Hx(e),gi(r)],([u,h])=>{if(s(),!u)return;const d=UM(h)?{...h}:h;o.push(...n.flatMap(f=>i.map(m=>a(u,f,m,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),s()};return Nx(c),c}function XM(){const t=lt(!1),e=ja();return e&&ri(()=>{t.value=!0},e),t}function jM(t){const e=XM();return Je(()=>(e.value,!!t()))}function Lo(t,e={}){const{window:n=Jr}=e,i=jM(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const o=lt(!1),s=c=>{o.value=c.matches},a=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",s):r.removeListener(s))},l=fu(()=>{i.value&&(a(),r=n.matchMedia(gi(t)),"addEventListener"in r?r.addEventListener("change",s):r.addListener(s),o.value=r.matches)});return Nx(()=>{l(),a(),r=void 0}),o}const kx={xs:480,sm:576,md:768,lg:992,xl:1200,xxl:1600};function Vx(t,e={}){function n(u,h){let d=gi(t[gi(u)]);return h!=null&&(d=HM(d,h)),typeof d=="number"&&(d=`${d}px`),d}const{window:i=Jr,strategy:r="min-width"}=e;function o(u){return i?i.matchMedia(u).matches:!1}const s=u=>Lo(()=>`(min-width: ${n(u)})`,e),a=u=>Lo(()=>`(max-width: ${n(u)})`,e),l=Object.keys(t).reduce((u,h)=>(Object.defineProperty(u,h,{get:()=>r==="min-width"?s(h):a(h),enumerable:!0,configurable:!0}),u),{});function c(){const u=Object.keys(t).map(h=>[h,s(h)]);return Je(()=>u.filter(([,h])=>h.value).map(([h])=>h))}return Object.assign(l,{greaterOrEqual:s,smallerOrEqual:a,greater(u){return Lo(()=>`(min-width: ${n(u,.1)})`,e)},smaller(u){return Lo(()=>`(max-width: ${n(u,-.1)})`,e)},between(u,h){return Lo(()=>`(min-width: ${n(u)}) and (max-width: ${n(h,-.1)})`,e)},isGreater(u){return o(`(min-width: ${n(u,.1)})`)},isGreaterOrEqual(u){return o(`(min-width: ${n(u)})`)},isSmaller(u){return o(`(max-width: ${n(u,-.1)})`)},isSmallerOrEqual(u){return o(`(max-width: ${n(u)})`)},isInBetween(u,h){return o(`(min-width: ${n(u)}) and (max-width: ${n(h,-.1)})`)},current:c,active(){const u=c();return Je(()=>u.value.length===0?"":u.value.at(-1))}})}const _l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bl="__vueuse_ssr_handlers__",qM=YM();function YM(){return bl in _l||(_l[bl]=_l[bl]||{}),_l[bl]}function $x(t,e){return qM[t]||e}function Gx(t){return Lo("(prefers-color-scheme: dark)",t)}function KM(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const ZM={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},wm="vueuse-storage";function JM(t,e,n,i={}){var r;const{flush:o="pre",deep:s=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:h=Jr,eventFilter:d,onError:f=b=>{console.error(b)},initOnMounted:m}=i,v=(u?Hf:lt)(typeof e=="function"?e():e);if(!n)try{n=$x("getDefaultStorage",()=>{var b;return(b=Jr)==null?void 0:b.localStorage})()}catch(b){f(b)}if(!n)return v;const g=gi(e),p=KM(g),S=(r=i.serializer)!=null?r:ZM[p],{pause:y,resume:w}=GM(v,()=>E(v.value),{flush:o,deep:s,eventFilter:d});h&&a&&Bx(()=>{n instanceof Storage?Mm(h,"storage",D):Mm(h,wm,z),m&&D()}),m||D();function L(b,M){if(h){const I={key:t,oldValue:b,newValue:M,storageArea:n};h.dispatchEvent(n instanceof Storage?new StorageEvent("storage",I):new CustomEvent(wm,{detail:I}))}}function E(b){try{const M=n.getItem(t);if(b==null)L(M,null),n.removeItem(t);else{const I=S.write(b);M!==I&&(n.setItem(t,I),L(M,I))}}catch(M){f(M)}}function T(b){const M=b?b.newValue:n.getItem(t);if(M==null)return l&&g!=null&&n.setItem(t,S.write(g)),g;if(!b&&c){const I=S.read(M);return typeof c=="function"?c(I,g):p==="object"&&!Array.isArray(I)?{...g,...I}:I}else return typeof M!="string"?M:S.read(M)}function D(b){if(!(b&&b.storageArea!==n)){if(b&&b.key==null){v.value=g;return}if(!(b&&b.key!==t)){y();try{(b==null?void 0:b.newValue)!==S.write(v.value)&&(v.value=T(b))}catch(M){f(M)}finally{b?Gr(w):w()}}}}function z(b){D(b.detail)}return v}const QM="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function e1(t={}){const{selector:e="html",attribute:n="class",initialValue:i="auto",window:r=Jr,storage:o,storageKey:s="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:c,disableTransition:u=!0}=t,h={auto:"",light:"light",dark:"dark",...t.modes||{}},d=Gx({window:r}),f=Je(()=>d.value?"dark":"light"),m=l||(s==null?VM(i):JM(s,i,o,{window:r,listenToStorageChanges:a})),v=Je(()=>m.value==="auto"?f.value:m.value),g=$x("updateHTMLAttrs",(w,L,E)=>{const T=typeof w=="string"?r==null?void 0:r.document.querySelector(w):Hx(w);if(!T)return;const D=new Set,z=new Set;let b=null;if(L==="class"){const I=E.split(/\s/g);Object.values(h).flatMap(N=>(N||"").split(/\s/g)).filter(Boolean).forEach(N=>{I.includes(N)?D.add(N):z.add(N)})}else b={key:L,value:E};if(D.size===0&&z.size===0&&b===null)return;let M;u&&(M=r.document.createElement("style"),M.appendChild(document.createTextNode(QM)),r.document.head.appendChild(M));for(const I of D)T.classList.add(I);for(const I of z)T.classList.remove(I);b&&T.setAttribute(b.key,b.value),u&&(r.getComputedStyle(M).opacity,document.head.removeChild(M))});function p(w){var L;g(e,n,(L=h[w])!=null?L:w)}function S(w){t.onChanged?t.onChanged(w,p):p(w)}un(v,S,{flush:"post",immediate:!0}),Bx(()=>S(v.value));const y=Je({get(){return c?m.value:v.value},set(w){m.value=w}});try{return Object.assign(y,{store:m,system:f,state:v})}catch{return y}}function t1(t={}){const{valueDark:e="dark",valueLight:n="",window:i=Jr}=t,r=e1({...t,onChanged:(a,l)=>{var c;t.onChanged?(c=t.onChanged)==null||c.call(t,a==="dark",l,a):l(a)},modes:{dark:e,light:n}}),o=Je(()=>r.system?r.system.value:Gx({window:i}).value?"dark":"light");return Je({get(){return r.value==="dark"},set(a){const l=a?"dark":"light";o.value===l?r.value="auto":r.value=l}})}const od=t1();WM(od);const jn={signal:1,propertyUpdate:2,init:3,idle:4,debug:5,invokeMethod:6,connectToSignal:7,disconnectFromSignal:8,setProperty:9,response:10},d5=function(t,e,n){if(typeof t!="object"||typeof t.send!="function"){console.error(`The QWebChannel expects a transport object with a send function and onmessage callback property. Given is: transport: ${typeof t}, transport.send: ${typeof t.send}`);return}const i=this;this.transport=t;const r={Date(o){if(typeof o=="string"&&o.match(/^-?\d+-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?([-+\u2212](\d{2}):(\d{2})|Z)?$/)){const s=new Date(o);if(!isNaN(s))return s}}};if(this.usedConverters=[],this.addConverter=function(o){typeof o=="string"?r.hasOwnProperty(o)?this.usedConverters.push(r[o]):console.error(`Converter '${o}' not found`):typeof o=="function"?this.usedConverters.push(o):console.error(`Invalid converter object type ${typeof o}`)},Array.isArray(n))for(const o of n)this.addConverter(o);else n!==void 0&&this.addConverter(n);this.send=function(o){typeof o!="string"&&(o=JSON.stringify(o)),i.transport.send(o)},this.transport.onmessage=function(o){let s=o.data;switch(typeof s=="string"&&(s=JSON.parse(s)),s.type){case jn.signal:i.handleSignal(s);break;case jn.response:i.handleResponse(s);break;case jn.propertyUpdate:i.handlePropertyUpdate(s);break;default:console.error("invalid message received:",o.data);break}},this.execCallbacks={},this.execId=0,this.exec=function(o,s){if(!s){i.send(o);return}if(i.execId===Number.MAX_VALUE&&(i.execId=Number.MIN_VALUE),o.hasOwnProperty("id")){console.error(`Cannot exec message with property id: ${JSON.stringify(o)}`);return}o.id=i.execId++,i.execCallbacks[o.id]=s,i.send(o)},this.objects={},this.handleSignal=function(o){const s=i.objects[o.object];s?s.signalEmitted(o.signal,o.args):console.warn(`Unhandled signal: ${o.object}::${o.signal}`)},this.handleResponse=function(o){if(!o.hasOwnProperty("id")){console.error("Invalid response message received: ",JSON.stringify(o));return}i.execCallbacks[o.id](o.data),delete i.execCallbacks[o.id]},this.handlePropertyUpdate=function(o){o.data.forEach(s=>{const a=i.objects[s.object];a?a.propertyUpdate(s.signals,s.properties):console.warn(`Unhandled property update: ${s.object}::${s.signal}`)}),i.exec({type:jn.idle})},this.debug=function(o){i.send({type:jn.debug,data:o})},i.exec({type:jn.init},o=>{for(const s of Object.keys(o))new Yf(s,o[s],i);for(const s of Object.keys(i.objects))i.objects[s].unwrapProperties();e&&e(i),i.exec({type:jn.idle})})};function Yf(t,e,n){this.__id__=t,n.objects[t]=this,this.__objectSignals__={},this.__propertyCache__={};const i=this;this.unwrapQObject=function(l){for(const h of n.usedConverters){const d=h(l);if(d!==void 0)return d}if(Array.isArray(l))return l.map(h=>i.unwrapQObject(h));if(!(l instanceof Object))return l;if(!l["__QObject*__"]||l.id===void 0){const h={};for(const d of Object.keys(l))h[d]=i.unwrapQObject(l[d]);return h}const c=l.id;if(n.objects[c])return n.objects[c];if(!l.data){console.error(`Cannot unwrap unknown QObject ${c} without data.`);return}const u=new Yf(c,l.data,n);return u.destroyed.connect(()=>{n.objects[c]===u&&(delete n.objects[c],Object.keys(u).forEach(h=>delete u[h]))}),u.unwrapProperties(),u},this.unwrapProperties=function(){for(const l of Object.keys(i.__propertyCache__))i.__propertyCache__[l]=i.unwrapQObject(i.__propertyCache__[l])};function r(l,c){const u=l[0],h=l[1];i[u]={connect(d){if(typeof d!="function"){console.error(`Bad callback given to connect to signal ${u}`);return}i.__objectSignals__[h]=i.__objectSignals__[h]||[],i.__objectSignals__[h].push(d),!c&&(u==="destroyed"||u==="destroyed()"||u==="destroyed(QObject*)"||i.__objectSignals__[h].length==1&&n.exec({type:jn.connectToSignal,object:i.__id__,signal:h}))},disconnect(d){if(typeof d!="function"){console.error(`Bad callback given to disconnect from signal ${u}`);return}i.__objectSignals__[h]=(i.__objectSignals__[h]||[]).filter(f=>f!=d),!c&&i.__objectSignals__[h].length===0&&n.exec({type:jn.disconnectFromSignal,object:i.__id__,signal:h})}}}function o(l,c){const u=i.__objectSignals__[l];u&&u.forEach(h=>{h.apply(h,c)})}this.propertyUpdate=function(l,c){for(const u of Object.keys(c)){const h=c[u];i.__propertyCache__[u]=this.unwrapQObject(h)}for(const u of Object.keys(l))o(u,l[u])},this.signalEmitted=function(l,c){o(l,this.unwrapQObject(c))};function s(l){const c=l[0],u=l[1],h=c[c.length-1]===")"?u:c;i[c]=function(){const d=[];let f,m;for(let g=0;g<arguments.length;++g){const p=arguments[g];typeof p=="function"?f=p:d.push(p)}let v;return!f&&typeof Promise=="function"&&(v=new Promise((g,p)=>{f=g,m=p})),n.exec({type:jn.invokeMethod,object:i.__id__,method:h,args:d},g=>{if(g!==void 0){const p=i.unwrapQObject(g);f&&f(p)}else m&&m()}),v}}function a(l){const c=l[0],u=l[1],h=l[2];i.__propertyCache__[c]=l[3],h&&(h[0]===1&&(h[0]=`${u}Changed`),r(h,!0)),Object.defineProperty(i,u,{configurable:!0,get(){const d=i.__propertyCache__[c];return d===void 0&&console.warn(`Undefined value in property cache for property "${u}" in object ${i.__id__}`),d},set(d){if(d===void 0){console.warn(`Property setter for ${u} called with undefined value!`);return}i.__propertyCache__[c]=d;const f=d;n.exec({type:jn.setProperty,object:i.__id__,property:c,value:f})}})}e.methods.forEach(s),e.properties.forEach(a),e.signals.forEach(l=>{r(l,!1)}),Object.assign(i,e.enums)}Yf.prototype.toJSON=function(){return this.__id__===void 0?{}:{id:this.__id__,"__QObject*__":!0}};function n1(t){return typeof t=="string"?t.endsWith("px")?Number(t.slice(0,t.length-2)):Number(t):t}function yl(t,e){const n=t.trim().split(/\s+/g),i={top:n[0]};switch(n.length){case 1:i.right=n[0],i.bottom=n[0],i.left=n[0];break;case 2:i.right=n[1],i.left=n[1],i.bottom=n[0];break;case 3:i.right=n[1],i.bottom=n[2],i.left=n[1];break;case 4:i.right=n[1],i.bottom=n[2],i.left=n[3];break;default:throw new Error("[seemly/getMargin]:"+t+" is not a valid value.")}return e===void 0?i:i[e]}function f5(t,e){const[n,i]=t.split(" ");return{row:n,col:i||n}}const Em={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},bs="^\\s*",ys="\\s*$",Fr="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",Ur="([0-9A-Fa-f])",zr="([0-9A-Fa-f]{2})",i1=new RegExp(`${bs}rgb\\s*\\(${Fr},${Fr},${Fr}\\)${ys}`),r1=new RegExp(`${bs}rgba\\s*\\(${Fr},${Fr},${Fr},${Fr}\\)${ys}`),o1=new RegExp(`${bs}#${Ur}${Ur}${Ur}${ys}`),s1=new RegExp(`${bs}#${zr}${zr}${zr}${ys}`),a1=new RegExp(`${bs}#${Ur}${Ur}${Ur}${Ur}${ys}`),l1=new RegExp(`${bs}#${zr}${zr}${zr}${zr}${ys}`);function bn(t){return parseInt(t,16)}function Bi(t){try{let e;if(e=s1.exec(t))return[bn(e[1]),bn(e[2]),bn(e[3]),1];if(e=i1.exec(t))return[ln(e[1]),ln(e[5]),ln(e[9]),1];if(e=r1.exec(t))return[ln(e[1]),ln(e[5]),ln(e[9]),na(e[13])];if(e=o1.exec(t))return[bn(e[1]+e[1]),bn(e[2]+e[2]),bn(e[3]+e[3]),1];if(e=l1.exec(t))return[bn(e[1]),bn(e[2]),bn(e[3]),na(bn(e[4])/255)];if(e=a1.exec(t))return[bn(e[1]+e[1]),bn(e[2]+e[2]),bn(e[3]+e[3]),na(bn(e[4]+e[4])/255)];if(t in Em)return Bi(Em[t]);throw new Error(`[seemly/rgba]: Invalid color value ${t}.`)}catch(e){throw e}}function c1(t){return t>1?1:t<0?0:t}function sd(t,e,n,i){return`rgba(${ln(t)}, ${ln(e)}, ${ln(n)}, ${c1(i)})`}function Ku(t,e,n,i,r){return ln((t*e*(1-i)+n*i)/r)}function ze(t,e){Array.isArray(t)||(t=Bi(t)),Array.isArray(e)||(e=Bi(e));const n=t[3],i=e[3],r=na(n+i-n*i);return sd(Ku(t[0],n,e[0],i,r),Ku(t[1],n,e[1],i,r),Ku(t[2],n,e[2],i,r),r)}function Ne(t,e){const[n,i,r,o=1]=Array.isArray(t)?t:Bi(t);return e.alpha?sd(n,i,r,e.alpha):sd(n,i,r,o)}function It(t,e){const[n,i,r,o=1]=Array.isArray(t)?t:Bi(t),{lightness:s=1,alpha:a=1}=e;return u1([n*s,i*s,r*s,o*a])}function na(t){const e=Math.round(Number(t)*100)/100;return e>1?1:e<0?0:e}function ln(t){const e=Math.round(Number(t));return e>255?255:e<0?0:e}function u1(t){const[e,n,i]=t;return 3 in t?`rgba(${ln(e)}, ${ln(n)}, ${ln(i)}, ${na(t[3])})`:`rgba(${ln(e)}, ${ln(n)}, ${ln(i)}, 1)`}function h1(t=8){return Math.random().toString(16).slice(2,2+t)}function Wx(t,e=[],n){const i={};return Object.getOwnPropertyNames(t).forEach(o=>{e.includes(o)||(i[o]=t[o])}),Object.assign(i,n)}function ia(t,e=!0,n=[]){return t.forEach(i=>{if(i!==null){if(typeof i!="object"){(typeof i=="string"||typeof i=="number")&&n.push(os(String(i)));return}if(Array.isArray(i)){ia(i,e,n);return}if(i.type===Xt){if(i.children===null)return;Array.isArray(i.children)&&ia(i.children,e,n)}else{if(i.type===Jt&&e)return;n.push(i)}}}),n}function Gs(t,...e){if(Array.isArray(t))t.forEach(n=>Gs(n,...e));else return t(...e)}function Xx(t,...e){return typeof t=="function"?t(...e):typeof t=="string"?os(t):typeof t=="number"?os(String(t)):null}function d1(t,e){console.error(`[naive/${t}]: ${e}`)}function jx(t,e){throw new Error(`[naive/${t}]: ${e}`)}function p5(t){return t}function Ya(t){return t.some(e=>rs(e)?!(e.type===Jt||e.type===Xt&&!Ya(e.children)):!0)?t:null}function m5(t,e){return t&&Ya(t())||e()}function g5(t,e,n){return t&&Ya(t(e))||n(e)}function Tm(t,e){const n=t&&Ya(t());return e(n||null)}function v5(t){return!(t&&Ya(t()))}function f1(t){let e=0;for(let n=0;n<t.length;++n)t[n]==="&"&&++e;return e}const qx=/\s*,(?![^(]*\))\s*/g,p1=/\s+/g;function m1(t,e){const n=[];return e.split(qx).forEach(i=>{let r=f1(i);if(r){if(r===1){t.forEach(s=>{n.push(i.replace("&",s))});return}}else{t.forEach(s=>{n.push((s&&s+" ")+i)});return}let o=[i];for(;r--;){const s=[];o.forEach(a=>{t.forEach(l=>{s.push(a.replace("&",l))})}),o=s}o.forEach(s=>n.push(s))}),n}function g1(t,e){const n=[];return e.split(qx).forEach(i=>{t.forEach(r=>{n.push((r&&r+" ")+i)})}),n}function v1(t){let e=[""];return t.forEach(n=>{n=n&&n.trim(),n&&(n.includes("&")?e=m1(e,n):e=g1(e,n))}),e.join(", ").replace(p1," ")}function Am(t){if(!t)return;const e=t.parentElement;e&&e.removeChild(t)}function vu(t,e){return(e??document.head).querySelector(`style[cssr-id="${t}"]`)}function x1(t){const e=document.createElement("style");return e.setAttribute("cssr-id",t),e}function Sl(t){return t?/^\s*@(s|m)/.test(t):!1}const _1=/[A-Z]/g;function Yx(t){return t.replace(_1,e=>"-"+e.toLowerCase())}function b1(t,e="  "){return typeof t=="object"&&t!==null?` {
`+Object.entries(t).map(n=>e+`  ${Yx(n[0])}: ${n[1]};`).join(`
`)+`
`+e+"}":`: ${t};`}function y1(t,e,n){return typeof t=="function"?t({context:e.context,props:n}):t}function Pm(t,e,n,i){if(!e)return"";const r=y1(e,n,i);if(!r)return"";if(typeof r=="string")return`${t} {
${r}
}`;const o=Object.keys(r);if(o.length===0)return n.config.keepEmptyBlock?t+` {
}`:"";const s=t?[t+" {"]:[];return o.forEach(a=>{const l=r[a];if(a==="raw"){s.push(`
`+l+`
`);return}a=Yx(a),l!=null&&s.push(`  ${a}${b1(l)}`)}),t&&s.push("}"),s.join(`
`)}function ad(t,e,n){t&&t.forEach(i=>{if(Array.isArray(i))ad(i,e,n);else if(typeof i=="function"){const r=i(e);Array.isArray(r)?ad(r,e,n):r&&n(r)}else i&&n(i)})}function Kx(t,e,n,i,r){const o=t.$;let s="";if(!o||typeof o=="string")Sl(o)?s=o:e.push(o);else if(typeof o=="function"){const c=o({context:i.context,props:r});Sl(c)?s=c:e.push(c)}else if(o.before&&o.before(i.context),!o.$||typeof o.$=="string")Sl(o.$)?s=o.$:e.push(o.$);else if(o.$){const c=o.$({context:i.context,props:r});Sl(c)?s=c:e.push(c)}const a=v1(e),l=Pm(a,t.props,i,r);s?n.push(`${s} {`):l.length&&n.push(l),t.children&&ad(t.children,{context:i.context,props:r},c=>{if(typeof c=="string"){const u=Pm(a,{raw:c},i,r);n.push(u)}else Kx(c,e,n,i,r)}),e.pop(),s&&n.push("}"),o&&o.after&&o.after(i.context)}function S1(t,e,n){const i=[];return Kx(t,[],i,e,n),i.join(`

`)}function Sa(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function C1(t,e,n,i){const{els:r}=e;if(n===void 0)r.forEach(Am),e.els=[];else{const o=vu(n,i);o&&r.includes(o)&&(Am(o),e.els=r.filter(s=>s!==o))}}function Rm(t,e){t.push(e)}function M1(t,e,n,i,r,o,s,a,l){let c;if(n===void 0&&(c=e.render(i),n=Sa(c)),l){l.adapter(n,c??e.render(i));return}a===void 0&&(a=document.head);const u=vu(n,a);if(u!==null&&!o)return u;const h=u??x1(n);if(c===void 0&&(c=e.render(i)),h.textContent=c,u!==null)return u;if(s){const d=a.querySelector(`meta[name="${s}"]`);if(d)return a.insertBefore(h,d),Rm(e.els,h),h}return r?a.insertBefore(h,a.querySelector("style, link")):a.appendChild(h),Rm(e.els,h),h}function w1(t){return S1(this,this.instance,t)}function E1(t={}){const{id:e,ssr:n,props:i,head:r=!1,force:o=!1,anchorMetaName:s,parent:a}=t;return M1(this.instance,this,e,i,r,o,s,a,n)}function T1(t={}){const{id:e,parent:n}=t;C1(this.instance,this,e,n)}const Cl=function(t,e,n,i){return{instance:t,$:e,props:n,children:i,els:[],render:w1,mount:E1,unmount:T1}},A1=function(t,e,n,i){return Array.isArray(e)?Cl(t,{$:null},null,e):Array.isArray(n)?Cl(t,e,null,n):Array.isArray(i)?Cl(t,e,n,i):Cl(t,e,n,null)};function Zx(t={}){const e={c:(...n)=>A1(e,...n),use:(n,...i)=>n.install(e,...i),find:vu,context:{},config:t};return e}function P1(t,e){if(t===void 0)return!1;if(e){const{context:{ids:n}}=e;return n.has(t)}return vu(t)!==null}function R1(t){let e=".",n="__",i="--",r;if(t){let m=t.blockPrefix;m&&(e=m),m=t.elementPrefix,m&&(n=m),m=t.modifierPrefix,m&&(i=m)}const o={install(m){r=m.c;const v=m.context;v.bem={},v.bem.b=null,v.bem.els=null}};function s(m){let v,g;return{before(p){v=p.bem.b,g=p.bem.els,p.bem.els=null},after(p){p.bem.b=v,p.bem.els=g},$({context:p,props:S}){return m=typeof m=="string"?m:m({context:p,props:S}),p.bem.b=m,`${(S==null?void 0:S.bPrefix)||e}${p.bem.b}`}}}function a(m){let v;return{before(g){v=g.bem.els},after(g){g.bem.els=v},$({context:g,props:p}){return m=typeof m=="string"?m:m({context:g,props:p}),g.bem.els=m.split(",").map(S=>S.trim()),g.bem.els.map(S=>`${(p==null?void 0:p.bPrefix)||e}${g.bem.b}${n}${S}`).join(", ")}}}function l(m){return{$({context:v,props:g}){m=typeof m=="string"?m:m({context:v,props:g});const p=m.split(",").map(w=>w.trim());function S(w){return p.map(L=>`&${(g==null?void 0:g.bPrefix)||e}${v.bem.b}${w!==void 0?`${n}${w}`:""}${i}${L}`).join(", ")}const y=v.bem.els;return y!==null?S(y[0]):S()}}}function c(m){return{$({context:v,props:g}){m=typeof m=="string"?m:m({context:v,props:g});const p=v.bem.els;return`&:not(${(g==null?void 0:g.bPrefix)||e}${v.bem.b}${p!==null&&p.length>0?`${n}${p[0]}`:""}${i}${m})`}}}return Object.assign(o,{cB:(...m)=>r(s(m[0]),m[1],m[2]),cE:(...m)=>r(a(m[0]),m[1],m[2]),cM:(...m)=>r(l(m[0]),m[1],m[2]),cNotM:(...m)=>r(c(m[0]),m[1],m[2])}),o}const L1="n",Ca=`.${L1}-`,D1="__",I1="--",Jx=Zx(),Qx=R1({blockPrefix:Ca,elementPrefix:D1,modifierPrefix:I1});Jx.use(Qx);const{c:qe,find:x5}=Jx,{cB:Te,cE:Mt,cM:Xe,cNotM:e_}=Qx;function _5(t){return qe(({props:{bPrefix:e}})=>`${e||Ca}modal, ${e||Ca}drawer`,[t])}function b5(t){return qe(({props:{bPrefix:e}})=>`${e||Ca}popover`,[t])}function y5(t){return qe(({props:{bPrefix:e}})=>`&${e||Ca}modal`,t)}function Wt(t,e){return t+(e==="default"?"":e.replace(/^[a-z]/,n=>n.toUpperCase()))}function Lm(t){const e=Je(t),n=lt(e.value);return un(e,i=>{n.value=i}),typeof t=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(i){t.set(i)}}}const O1=typeof window<"u";let Go,ra;const N1=()=>{var t,e;Go=O1?(e=(t=document)===null||t===void 0?void 0:t.fonts)===null||e===void 0?void 0:e.ready:void 0,ra=!1,Go!==void 0?Go.then(()=>{ra=!0}):ra=!0};N1();function F1(t){if(ra)return;let e=!1;ri(()=>{ra||Go==null||Go.then(()=>{e||t()})}),_s(()=>{e=!0})}function U1(t,e){return un(t,n=>{n!==void 0&&(e.value=n)}),Je(()=>t.value===void 0?e.value:t.value)}function z1(){const t=lt(!1);return ri(()=>{t.value=!0}),Wa(t)}function Dm(t,e){return Je(()=>{for(const n of e)if(t[n]!==void 0)return t[n];return t[e[e.length-1]]})}const B1="@css-render/vue3-ssr";function H1(t,e){return`<style cssr-id="${t}">
${e}
</style>`}function k1(t,e,n){const{styles:i,ids:r}=n;r.has(t)||i!==null&&(r.add(t),i.push(H1(t,e)))}const V1=typeof document<"u";function Ka(){if(V1)return;const t=Bt(B1,null);if(t!==null)return{adapter:(e,n)=>k1(e,n,t),context:t}}function Im(t,e){console.error(`[vueuc/${t}]: ${e}`)}const{c:Om}=Zx(),$1="vueuc-style";var Xr=[],G1=function(){return Xr.some(function(t){return t.activeTargets.length>0})},W1=function(){return Xr.some(function(t){return t.skippedTargets.length>0})},Nm="ResizeObserver loop completed with undelivered notifications.",X1=function(){var t;typeof ErrorEvent=="function"?t=new ErrorEvent("error",{message:Nm}):(t=document.createEvent("Event"),t.initEvent("error",!1,!1),t.message=Nm),window.dispatchEvent(t)},Ma;(function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(Ma||(Ma={}));var jr=function(t){return Object.freeze(t)},j1=function(){function t(e,n){this.inlineSize=e,this.blockSize=n,jr(this)}return t}(),t_=function(){function t(e,n,i,r){return this.x=e,this.y=n,this.width=i,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,jr(this)}return t.prototype.toJSON=function(){var e=this,n=e.x,i=e.y,r=e.top,o=e.right,s=e.bottom,a=e.left,l=e.width,c=e.height;return{x:n,y:i,top:r,right:o,bottom:s,left:a,width:l,height:c}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),Kf=function(t){return t instanceof SVGElement&&"getBBox"in t},n_=function(t){if(Kf(t)){var e=t.getBBox(),n=e.width,i=e.height;return!n&&!i}var r=t,o=r.offsetWidth,s=r.offsetHeight;return!(o||s||t.getClientRects().length)},Fm=function(t){var e;if(t instanceof Element)return!0;var n=(e=t==null?void 0:t.ownerDocument)===null||e===void 0?void 0:e.defaultView;return!!(n&&t instanceof n.Element)},q1=function(t){switch(t.tagName){case"INPUT":if(t.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},oa=typeof window<"u"?window:{},Ml=new WeakMap,Um=/auto|scroll/,Y1=/^tb|vertical/,K1=/msie|trident/i.test(oa.navigator&&oa.navigator.userAgent),ai=function(t){return parseFloat(t||"0")},Wo=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=!1),new j1((n?e:t)||0,(n?t:e)||0)},zm=jr({devicePixelContentBoxSize:Wo(),borderBoxSize:Wo(),contentBoxSize:Wo(),contentRect:new t_(0,0,0,0)}),i_=function(t,e){if(e===void 0&&(e=!1),Ml.has(t)&&!e)return Ml.get(t);if(n_(t))return Ml.set(t,zm),zm;var n=getComputedStyle(t),i=Kf(t)&&t.ownerSVGElement&&t.getBBox(),r=!K1&&n.boxSizing==="border-box",o=Y1.test(n.writingMode||""),s=!i&&Um.test(n.overflowY||""),a=!i&&Um.test(n.overflowX||""),l=i?0:ai(n.paddingTop),c=i?0:ai(n.paddingRight),u=i?0:ai(n.paddingBottom),h=i?0:ai(n.paddingLeft),d=i?0:ai(n.borderTopWidth),f=i?0:ai(n.borderRightWidth),m=i?0:ai(n.borderBottomWidth),v=i?0:ai(n.borderLeftWidth),g=h+c,p=l+u,S=v+f,y=d+m,w=a?t.offsetHeight-y-t.clientHeight:0,L=s?t.offsetWidth-S-t.clientWidth:0,E=r?g+S:0,T=r?p+y:0,D=i?i.width:ai(n.width)-E-L,z=i?i.height:ai(n.height)-T-w,b=D+g+L+S,M=z+p+w+y,I=jr({devicePixelContentBoxSize:Wo(Math.round(D*devicePixelRatio),Math.round(z*devicePixelRatio),o),borderBoxSize:Wo(b,M,o),contentBoxSize:Wo(D,z,o),contentRect:new t_(h,l,D,z)});return Ml.set(t,I),I},r_=function(t,e,n){var i=i_(t,n),r=i.borderBoxSize,o=i.contentBoxSize,s=i.devicePixelContentBoxSize;switch(e){case Ma.DEVICE_PIXEL_CONTENT_BOX:return s;case Ma.BORDER_BOX:return r;default:return o}},Z1=function(){function t(e){var n=i_(e);this.target=e,this.contentRect=n.contentRect,this.borderBoxSize=jr([n.borderBoxSize]),this.contentBoxSize=jr([n.contentBoxSize]),this.devicePixelContentBoxSize=jr([n.devicePixelContentBoxSize])}return t}(),o_=function(t){if(n_(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},J1=function(){var t=1/0,e=[];Xr.forEach(function(s){if(s.activeTargets.length!==0){var a=[];s.activeTargets.forEach(function(c){var u=new Z1(c.target),h=o_(c.target);a.push(u),c.lastReportedSize=r_(c.target,c.observedBox),h<t&&(t=h)}),e.push(function(){s.callback.call(s.observer,a,s.observer)}),s.activeTargets.splice(0,s.activeTargets.length)}});for(var n=0,i=e;n<i.length;n++){var r=i[n];r()}return t},Bm=function(t){Xr.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(r){r.isActive()&&(o_(r.target)>t?n.activeTargets.push(r):n.skippedTargets.push(r))})})},Q1=function(){var t=0;for(Bm(t);G1();)t=J1(),Bm(t);return W1()&&X1(),t>0},Zu,s_=[],ew=function(){return s_.splice(0).forEach(function(t){return t()})},tw=function(t){if(!Zu){var e=0,n=document.createTextNode(""),i={characterData:!0};new MutationObserver(function(){return ew()}).observe(n,i),Zu=function(){n.textContent="".concat(e?e--:e++)}}s_.push(t),Zu()},nw=function(t){tw(function(){requestAnimationFrame(t)})},fc=0,iw=function(){return!!fc},rw=250,ow={attributes:!0,characterData:!0,childList:!0,subtree:!0},Hm=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],km=function(t){return t===void 0&&(t=0),Date.now()+t},Ju=!1,sw=function(){function t(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return t.prototype.run=function(e){var n=this;if(e===void 0&&(e=rw),!Ju){Ju=!0;var i=km(e);nw(function(){var r=!1;try{r=Q1()}finally{if(Ju=!1,e=i-km(),!iw())return;r?n.run(1e3):e>0?n.run(e):n.start()}})}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var e=this,n=function(){return e.observer&&e.observer.observe(document.body,ow)};document.body?n():oa.addEventListener("DOMContentLoaded",n)},t.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Hm.forEach(function(n){return oa.addEventListener(n,e.listener,!0)}))},t.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),Hm.forEach(function(n){return oa.removeEventListener(n,e.listener,!0)}),this.stopped=!0)},t}(),ld=new sw,Vm=function(t){!fc&&t>0&&ld.start(),fc+=t,!fc&&ld.stop()},aw=function(t){return!Kf(t)&&!q1(t)&&getComputedStyle(t).display==="inline"},lw=function(){function t(e,n){this.target=e,this.observedBox=n||Ma.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var e=r_(this.target,this.observedBox,!0);return aw(this.target)&&(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),cw=function(){function t(e,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=n}return t}(),wl=new WeakMap,$m=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},El=function(){function t(){}return t.connect=function(e,n){var i=new cw(e,n);wl.set(e,i)},t.observe=function(e,n,i){var r=wl.get(e),o=r.observationTargets.length===0;$m(r.observationTargets,n)<0&&(o&&Xr.push(r),r.observationTargets.push(new lw(n,i&&i.box)),Vm(1),ld.schedule())},t.unobserve=function(e,n){var i=wl.get(e),r=$m(i.observationTargets,n),o=i.observationTargets.length===1;r>=0&&(o&&Xr.splice(Xr.indexOf(i),1),i.observationTargets.splice(r,1),Vm(-1))},t.disconnect=function(e){var n=this,i=wl.get(e);i.observationTargets.slice().forEach(function(r){return n.unobserve(e,r.target)}),i.activeTargets.splice(0,i.activeTargets.length)},t}(),uw=function(){function t(e){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof e!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");El.connect(this,e)}return t.prototype.observe=function(e,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Fm(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");El.observe(this,e,n)},t.prototype.unobserve=function(e){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Fm(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");El.unobserve(this,e)},t.prototype.disconnect=function(){El.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}();class hw{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||uw)(this.handleResize),this.elHandlersMap=new Map}handleResize(e){for(const n of e){const i=this.elHandlersMap.get(n.target);i!==void 0&&i(n)}}registerHandler(e,n){this.elHandlersMap.set(e,n),this.observer.observe(e)}unregisterHandler(e){this.elHandlersMap.has(e)&&(this.elHandlersMap.delete(e),this.observer.unobserve(e))}}const Gm=new hw,Qu=Lt({name:"ResizeObserver",props:{onResize:Function},setup(t){let e=!1;const n=ja().proxy;function i(r){const{onResize:o}=t;o!==void 0&&o(r)}ri(()=>{const r=n.$el;if(r===void 0){Im("resize-observer","$el does not exist.");return}if(r.nextElementSibling!==r.nextSibling&&r.nodeType===3&&r.nodeValue!==""){Im("resize-observer","$el can not be observed (it may be a text node).");return}r.nextElementSibling!==null&&(Gm.registerHandler(r.nextElementSibling,i),e=!0)}),_s(()=>{e&&Gm.unregisterHandler(n.$el.nextElementSibling)})},render(){return hC(this.$slots,"default")}}),dw=Om(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Om("&::-webkit-scrollbar",{width:0,height:0})]),fw=Lt({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const t=lt(null);function e(r){!(r.currentTarget.offsetWidth<r.currentTarget.scrollWidth)||r.deltaY===0||(r.currentTarget.scrollLeft+=r.deltaY+r.deltaX,r.preventDefault())}const n=Ka();return dw.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:$1,ssr:n}),Object.assign({selfRef:t,handleWheel:e},{scrollTo(...r){var o;(o=t.value)===null||o===void 0||o.scrollTo(...r)}})},render(){return me("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var a_=typeof global=="object"&&global&&global.Object===Object&&global,pw=typeof self=="object"&&self&&self.Object===Object&&self,ao=a_||pw||Function("return this")(),as=ao.Symbol,l_=Object.prototype,mw=l_.hasOwnProperty,gw=l_.toString,Os=as?as.toStringTag:void 0;function vw(t){var e=mw.call(t,Os),n=t[Os];try{t[Os]=void 0;var i=!0}catch{}var r=gw.call(t);return i&&(e?t[Os]=n:delete t[Os]),r}var xw=Object.prototype,_w=xw.toString;function bw(t){return _w.call(t)}var yw="[object Null]",Sw="[object Undefined]",Wm=as?as.toStringTag:void 0;function Za(t){return t==null?t===void 0?Sw:yw:Wm&&Wm in Object(t)?vw(t):bw(t)}function Ss(t){return t!=null&&typeof t=="object"}var Cw="[object Symbol]";function c_(t){return typeof t=="symbol"||Ss(t)&&Za(t)==Cw}function Mw(t,e){for(var n=-1,i=t==null?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r}var Nc=Array.isArray,ww=1/0,Xm=as?as.prototype:void 0,jm=Xm?Xm.toString:void 0;function u_(t){if(typeof t=="string")return t;if(Nc(t))return Mw(t,u_)+"";if(c_(t))return jm?jm.call(t):"";var e=t+"";return e=="0"&&1/t==-ww?"-0":e}var Ew=/\s/;function Tw(t){for(var e=t.length;e--&&Ew.test(t.charAt(e)););return e}var Aw=/^\s+/;function Pw(t){return t&&t.slice(0,Tw(t)+1).replace(Aw,"")}function ti(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var qm=NaN,Rw=/^[-+]0x[0-9a-f]+$/i,Lw=/^0b[01]+$/i,Dw=/^0o[0-7]+$/i,Iw=parseInt;function Ym(t){if(typeof t=="number")return t;if(c_(t))return qm;if(ti(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=ti(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=Pw(t);var n=Lw.test(t);return n||Dw.test(t)?Iw(t.slice(2),n?2:8):Rw.test(t)?qm:+t}function h_(t){return t}var Ow="[object AsyncFunction]",Nw="[object Function]",Fw="[object GeneratorFunction]",Uw="[object Proxy]";function Zf(t){if(!ti(t))return!1;var e=Za(t);return e==Nw||e==Fw||e==Ow||e==Uw}var eh=ao["__core-js_shared__"],Km=function(){var t=/[^.]+$/.exec(eh&&eh.keys&&eh.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function zw(t){return!!Km&&Km in t}var Bw=Function.prototype,Hw=Bw.toString;function kw(t){if(t!=null){try{return Hw.call(t)}catch{}try{return t+""}catch{}}return""}var Vw=/[\\^$.*+?()[\]{}|]/g,$w=/^\[object .+?Constructor\]$/,Gw=Function.prototype,Ww=Object.prototype,Xw=Gw.toString,jw=Ww.hasOwnProperty,qw=RegExp("^"+Xw.call(jw).replace(Vw,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Yw(t){if(!ti(t)||zw(t))return!1;var e=Zf(t)?qw:$w;return e.test(kw(t))}function Kw(t,e){return t==null?void 0:t[e]}function Jf(t,e){var n=Kw(t,e);return Yw(n)?n:void 0}var Zm=Object.create,Zw=function(){function t(){}return function(e){if(!ti(e))return{};if(Zm)return Zm(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function Jw(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function Qw(t,e){var n=-1,i=t.length;for(e||(e=Array(i));++n<i;)e[n]=t[n];return e}var eE=800,tE=16,nE=Date.now;function iE(t){var e=0,n=0;return function(){var i=nE(),r=tE-(i-n);if(n=i,r>0){if(++e>=eE)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function rE(t){return function(){return t}}var Fc=function(){try{var t=Jf(Object,"defineProperty");return t({},"",{}),t}catch{}}(),oE=Fc?function(t,e){return Fc(t,"toString",{configurable:!0,enumerable:!1,value:rE(e),writable:!0})}:h_,sE=iE(oE),aE=9007199254740991,lE=/^(?:0|[1-9]\d*)$/;function d_(t,e){var n=typeof t;return e=e??aE,!!e&&(n=="number"||n!="symbol"&&lE.test(t))&&t>-1&&t%1==0&&t<e}function Qf(t,e,n){e=="__proto__"&&Fc?Fc(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function xu(t,e){return t===e||t!==t&&e!==e}var cE=Object.prototype,uE=cE.hasOwnProperty;function hE(t,e,n){var i=t[e];(!(uE.call(t,e)&&xu(i,n))||n===void 0&&!(e in t))&&Qf(t,e,n)}function dE(t,e,n,i){var r=!n;n||(n={});for(var o=-1,s=e.length;++o<s;){var a=e[o],l=void 0;l===void 0&&(l=t[a]),r?Qf(n,a,l):hE(n,a,l)}return n}var Jm=Math.max;function fE(t,e,n){return e=Jm(e===void 0?t.length-1:e,0),function(){for(var i=arguments,r=-1,o=Jm(i.length-e,0),s=Array(o);++r<o;)s[r]=i[e+r];r=-1;for(var a=Array(e+1);++r<e;)a[r]=i[r];return a[e]=n(s),Jw(t,this,a)}}function pE(t,e){return sE(fE(t,e,h_),t+"")}var mE=9007199254740991;function f_(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=mE}function ep(t){return t!=null&&f_(t.length)&&!Zf(t)}function gE(t,e,n){if(!ti(n))return!1;var i=typeof e;return(i=="number"?ep(n)&&d_(e,n.length):i=="string"&&e in n)?xu(n[e],t):!1}function vE(t){return pE(function(e,n){var i=-1,r=n.length,o=r>1?n[r-1]:void 0,s=r>2?n[2]:void 0;for(o=t.length>3&&typeof o=="function"?(r--,o):void 0,s&&gE(n[0],n[1],s)&&(o=r<3?void 0:o,r=1),e=Object(e);++i<r;){var a=n[i];a&&t(e,a,i,o)}return e})}var xE=Object.prototype;function p_(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||xE;return t===n}function _E(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i}var bE="[object Arguments]";function Qm(t){return Ss(t)&&Za(t)==bE}var m_=Object.prototype,yE=m_.hasOwnProperty,SE=m_.propertyIsEnumerable,cd=Qm(function(){return arguments}())?Qm:function(t){return Ss(t)&&yE.call(t,"callee")&&!SE.call(t,"callee")};function CE(){return!1}var g_=typeof exports=="object"&&exports&&!exports.nodeType&&exports,eg=g_&&typeof module=="object"&&module&&!module.nodeType&&module,ME=eg&&eg.exports===g_,tg=ME?ao.Buffer:void 0,wE=tg?tg.isBuffer:void 0,v_=wE||CE,EE="[object Arguments]",TE="[object Array]",AE="[object Boolean]",PE="[object Date]",RE="[object Error]",LE="[object Function]",DE="[object Map]",IE="[object Number]",OE="[object Object]",NE="[object RegExp]",FE="[object Set]",UE="[object String]",zE="[object WeakMap]",BE="[object ArrayBuffer]",HE="[object DataView]",kE="[object Float32Array]",VE="[object Float64Array]",$E="[object Int8Array]",GE="[object Int16Array]",WE="[object Int32Array]",XE="[object Uint8Array]",jE="[object Uint8ClampedArray]",qE="[object Uint16Array]",YE="[object Uint32Array]",Ct={};Ct[kE]=Ct[VE]=Ct[$E]=Ct[GE]=Ct[WE]=Ct[XE]=Ct[jE]=Ct[qE]=Ct[YE]=!0;Ct[EE]=Ct[TE]=Ct[BE]=Ct[AE]=Ct[HE]=Ct[PE]=Ct[RE]=Ct[LE]=Ct[DE]=Ct[IE]=Ct[OE]=Ct[NE]=Ct[FE]=Ct[UE]=Ct[zE]=!1;function KE(t){return Ss(t)&&f_(t.length)&&!!Ct[Za(t)]}function ZE(t){return function(e){return t(e)}}var x_=typeof exports=="object"&&exports&&!exports.nodeType&&exports,sa=x_&&typeof module=="object"&&module&&!module.nodeType&&module,JE=sa&&sa.exports===x_,th=JE&&a_.process,ng=function(){try{var t=sa&&sa.require&&sa.require("util").types;return t||th&&th.binding&&th.binding("util")}catch{}}(),ig=ng&&ng.isTypedArray,__=ig?ZE(ig):KE;function QE(t,e){var n=Nc(t),i=!n&&cd(t),r=!n&&!i&&v_(t),o=!n&&!i&&!r&&__(t),s=n||i||r||o,a=s?_E(t.length,String):[],l=a.length;for(var c in t)s&&(c=="length"||r&&(c=="offset"||c=="parent")||o&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||d_(c,l))||a.push(c);return a}function eT(t,e){return function(n){return t(e(n))}}function tT(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var nT=Object.prototype,iT=nT.hasOwnProperty;function rT(t){if(!ti(t))return tT(t);var e=p_(t),n=[];for(var i in t)i=="constructor"&&(e||!iT.call(t,i))||n.push(i);return n}function b_(t){return ep(t)?QE(t):rT(t)}var wa=Jf(Object,"create");function oT(){this.__data__=wa?wa(null):{},this.size=0}function sT(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var aT="__lodash_hash_undefined__",lT=Object.prototype,cT=lT.hasOwnProperty;function uT(t){var e=this.__data__;if(wa){var n=e[t];return n===aT?void 0:n}return cT.call(e,t)?e[t]:void 0}var hT=Object.prototype,dT=hT.hasOwnProperty;function fT(t){var e=this.__data__;return wa?e[t]!==void 0:dT.call(e,t)}var pT="__lodash_hash_undefined__";function mT(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=wa&&e===void 0?pT:e,this}function Qr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Qr.prototype.clear=oT;Qr.prototype.delete=sT;Qr.prototype.get=uT;Qr.prototype.has=fT;Qr.prototype.set=mT;function gT(){this.__data__=[],this.size=0}function _u(t,e){for(var n=t.length;n--;)if(xu(t[n][0],e))return n;return-1}var vT=Array.prototype,xT=vT.splice;function _T(t){var e=this.__data__,n=_u(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():xT.call(e,n,1),--this.size,!0}function bT(t){var e=this.__data__,n=_u(e,t);return n<0?void 0:e[n][1]}function yT(t){return _u(this.__data__,t)>-1}function ST(t,e){var n=this.__data__,i=_u(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}function Xi(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Xi.prototype.clear=gT;Xi.prototype.delete=_T;Xi.prototype.get=bT;Xi.prototype.has=yT;Xi.prototype.set=ST;var y_=Jf(ao,"Map");function CT(){this.size=0,this.__data__={hash:new Qr,map:new(y_||Xi),string:new Qr}}function MT(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function bu(t,e){var n=t.__data__;return MT(e)?n[typeof e=="string"?"string":"hash"]:n.map}function wT(t){var e=bu(this,t).delete(t);return this.size-=e?1:0,e}function ET(t){return bu(this,t).get(t)}function TT(t){return bu(this,t).has(t)}function AT(t,e){var n=bu(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}function Cs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Cs.prototype.clear=CT;Cs.prototype.delete=wT;Cs.prototype.get=ET;Cs.prototype.has=TT;Cs.prototype.set=AT;function PT(t){return t==null?"":u_(t)}var S_=eT(Object.getPrototypeOf,Object),RT="[object Object]",LT=Function.prototype,DT=Object.prototype,C_=LT.toString,IT=DT.hasOwnProperty,OT=C_.call(Object);function NT(t){if(!Ss(t)||Za(t)!=RT)return!1;var e=S_(t);if(e===null)return!0;var n=IT.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&C_.call(n)==OT}function FT(t,e,n){var i=-1,r=t.length;e<0&&(e=-e>r?0:r+e),n=n>r?r:n,n<0&&(n+=r),r=e>n?0:n-e>>>0,e>>>=0;for(var o=Array(r);++i<r;)o[i]=t[i+e];return o}function UT(t,e,n){var i=t.length;return n=n===void 0?i:n,!e&&n>=i?t:FT(t,e,n)}var zT="\\ud800-\\udfff",BT="\\u0300-\\u036f",HT="\\ufe20-\\ufe2f",kT="\\u20d0-\\u20ff",VT=BT+HT+kT,$T="\\ufe0e\\ufe0f",GT="\\u200d",WT=RegExp("["+GT+zT+VT+$T+"]");function M_(t){return WT.test(t)}function XT(t){return t.split("")}var w_="\\ud800-\\udfff",jT="\\u0300-\\u036f",qT="\\ufe20-\\ufe2f",YT="\\u20d0-\\u20ff",KT=jT+qT+YT,ZT="\\ufe0e\\ufe0f",JT="["+w_+"]",ud="["+KT+"]",hd="\\ud83c[\\udffb-\\udfff]",QT="(?:"+ud+"|"+hd+")",E_="[^"+w_+"]",T_="(?:\\ud83c[\\udde6-\\uddff]){2}",A_="[\\ud800-\\udbff][\\udc00-\\udfff]",eA="\\u200d",P_=QT+"?",R_="["+ZT+"]?",tA="(?:"+eA+"(?:"+[E_,T_,A_].join("|")+")"+R_+P_+")*",nA=R_+P_+tA,iA="(?:"+[E_+ud+"?",ud,T_,A_,JT].join("|")+")",rA=RegExp(hd+"(?="+hd+")|"+iA+nA,"g");function oA(t){return t.match(rA)||[]}function sA(t){return M_(t)?oA(t):XT(t)}function aA(t){return function(e){e=PT(e);var n=M_(e)?sA(e):void 0,i=n?n[0]:e.charAt(0),r=n?UT(n,1).join(""):e.slice(1);return i[t]()+r}}var lA=aA("toUpperCase");function cA(){this.__data__=new Xi,this.size=0}function uA(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function hA(t){return this.__data__.get(t)}function dA(t){return this.__data__.has(t)}var fA=200;function pA(t,e){var n=this.__data__;if(n instanceof Xi){var i=n.__data__;if(!y_||i.length<fA-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new Cs(i)}return n.set(t,e),this.size=n.size,this}function Ms(t){var e=this.__data__=new Xi(t);this.size=e.size}Ms.prototype.clear=cA;Ms.prototype.delete=uA;Ms.prototype.get=hA;Ms.prototype.has=dA;Ms.prototype.set=pA;var L_=typeof exports=="object"&&exports&&!exports.nodeType&&exports,rg=L_&&typeof module=="object"&&module&&!module.nodeType&&module,mA=rg&&rg.exports===L_,og=mA?ao.Buffer:void 0;og&&og.allocUnsafe;function gA(t,e){return t.slice()}var sg=ao.Uint8Array;function vA(t){var e=new t.constructor(t.byteLength);return new sg(e).set(new sg(t)),e}function xA(t,e){var n=vA(t.buffer);return new t.constructor(n,t.byteOffset,t.length)}function _A(t){return typeof t.constructor=="function"&&!p_(t)?Zw(S_(t)):{}}function bA(t){return function(e,n,i){for(var r=-1,o=Object(e),s=i(e),a=s.length;a--;){var l=s[++r];if(n(o[l],l,o)===!1)break}return e}}var yA=bA(),nh=function(){return ao.Date.now()},SA="Expected a function",CA=Math.max,MA=Math.min;function wA(t,e,n){var i,r,o,s,a,l,c=0,u=!1,h=!1,d=!0;if(typeof t!="function")throw new TypeError(SA);e=Ym(e)||0,ti(n)&&(u=!!n.leading,h="maxWait"in n,o=h?CA(Ym(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d);function f(E){var T=i,D=r;return i=r=void 0,c=E,s=t.apply(D,T),s}function m(E){return c=E,a=setTimeout(p,e),u?f(E):s}function v(E){var T=E-l,D=E-c,z=e-T;return h?MA(z,o-D):z}function g(E){var T=E-l,D=E-c;return l===void 0||T>=e||T<0||h&&D>=o}function p(){var E=nh();if(g(E))return S(E);a=setTimeout(p,v(E))}function S(E){return a=void 0,d&&i?f(E):(i=r=void 0,s)}function y(){a!==void 0&&clearTimeout(a),c=0,i=l=r=a=void 0}function w(){return a===void 0?s:S(nh())}function L(){var E=nh(),T=g(E);if(i=arguments,r=this,l=E,T){if(a===void 0)return m(l);if(h)return clearTimeout(a),a=setTimeout(p,e),f(l)}return a===void 0&&(a=setTimeout(p,e)),s}return L.cancel=y,L.flush=w,L}function dd(t,e,n){(n!==void 0&&!xu(t[e],n)||n===void 0&&!(e in t))&&Qf(t,e,n)}function EA(t){return Ss(t)&&ep(t)}function fd(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}function TA(t){return dE(t,b_(t))}function AA(t,e,n,i,r,o,s){var a=fd(t,n),l=fd(e,n),c=s.get(l);if(c){dd(t,n,c);return}var u=o?o(a,l,n+"",t,e,s):void 0,h=u===void 0;if(h){var d=Nc(l),f=!d&&v_(l),m=!d&&!f&&__(l);u=l,d||f||m?Nc(a)?u=a:EA(a)?u=Qw(a):f?(h=!1,u=gA(l)):m?(h=!1,u=xA(l)):u=[]:NT(l)||cd(l)?(u=a,cd(a)?u=TA(a):(!ti(a)||Zf(a))&&(u=_A(l))):h=!1}h&&(s.set(l,u),r(u,l,i,o,s),s.delete(l)),dd(t,n,u)}function D_(t,e,n,i,r){t!==e&&yA(e,function(o,s){if(r||(r=new Ms),ti(o))AA(t,e,s,n,D_,i,r);else{var a=i?i(fd(t,s),o,s+"",t,e,r):void 0;a===void 0&&(a=o),dd(t,s,a)}},b_)}var Ws=vE(function(t,e,n){D_(t,e,n)}),PA="Expected a function";function ih(t,e,n){var i=!0,r=!0;if(typeof t!="function")throw new TypeError(PA);return ti(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),wA(t,e,{leading:i,maxWait:e,trailing:r})}const Ja={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:RA,fontFamily:LA,lineHeight:DA}=Ja,I_=qe("body",`
 margin: 0;
 font-size: ${RA};
 font-family: ${LA};
 line-height: ${DA};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[qe("input",`
 font-family: inherit;
 font-size: inherit;
 `)]),gr="n-config-provider",Ea="naive-ui-style";function Qa(t,e,n,i,r,o){const s=Ka(),a=Bt(gr,null);if(n){const c=()=>{const u=o==null?void 0:o.value;n.mount({id:u===void 0?e:u+e,head:!0,props:{bPrefix:u?`.${u}-`:void 0},anchorMetaName:Ea,ssr:s,parent:a==null?void 0:a.styleMountTarget}),a!=null&&a.preflightStyleDisabled||I_.mount({id:"n-global",head:!0,anchorMetaName:Ea,ssr:s,parent:a==null?void 0:a.styleMountTarget})};s?c():du(c)}return Je(()=>{var c;const{theme:{common:u,self:h,peers:d={}}={},themeOverrides:f={},builtinThemeOverrides:m={}}=r,{common:v,peers:g}=f,{common:p=void 0,[t]:{common:S=void 0,self:y=void 0,peers:w={}}={}}=(a==null?void 0:a.mergedThemeRef.value)||{},{common:L=void 0,[t]:E={}}=(a==null?void 0:a.mergedThemeOverridesRef.value)||{},{common:T,peers:D={}}=E,z=Ws({},u||S||p||i.common,L,T,v),b=Ws((c=h||y||i.self)===null||c===void 0?void 0:c(z),m,E,f);return{common:z,self:b,peers:Ws({},i.peers,w,d),peerOverrides:Ws({},m.peers,D,g)}})}Qa.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const pd="n";function tp(t={},e={defaultBordered:!0}){const n=Bt(gr,null);return{inlineThemeDisabled:n==null?void 0:n.inlineThemeDisabled,mergedRtlRef:n==null?void 0:n.mergedRtlRef,mergedComponentPropsRef:n==null?void 0:n.mergedComponentPropsRef,mergedBreakpointsRef:n==null?void 0:n.mergedBreakpointsRef,mergedBorderedRef:Je(()=>{var i,r;const{bordered:o}=t;return o!==void 0?o:(r=(i=n==null?void 0:n.mergedBorderedRef.value)!==null&&i!==void 0?i:e.defaultBordered)!==null&&r!==void 0?r:!0}),mergedClsPrefixRef:n?n.mergedClsPrefixRef:Hf(pd),namespaceRef:Je(()=>n==null?void 0:n.mergedNamespaceRef.value)}}function np(t,e,n){if(!e)return;const i=Ka(),r=Bt(gr,null),o=()=>{const s=n.value;e.mount({id:s===void 0?t:s+t,head:!0,anchorMetaName:Ea,props:{bPrefix:s?`.${s}-`:void 0},ssr:i,parent:r==null?void 0:r.styleMountTarget}),r!=null&&r.preflightStyleDisabled||I_.mount({id:"n-global",head:!0,anchorMetaName:Ea,ssr:i,parent:r==null?void 0:r.styleMountTarget})};i?o():du(o)}function O_(t,e,n,i){n||jx("useThemeClass","cssVarsRef is not passed");const r=Bt(gr,null),o=r==null?void 0:r.mergedThemeHashRef,s=r==null?void 0:r.styleMountTarget,a=lt(""),l=Ka();let c;const u=`__${t}`,h=()=>{let d=u;const f=e?e.value:void 0,m=o==null?void 0:o.value;m&&(d+=`-${m}`),f&&(d+=`-${f}`);const{themeOverrides:v,builtinThemeOverrides:g}=i;v&&(d+=`-${Sa(JSON.stringify(v))}`),g&&(d+=`-${Sa(JSON.stringify(g))}`),a.value=d,c=()=>{const p=n.value;let S="";for(const y in p)S+=`${y}: ${p[y]};`;qe(`.${d}`,S).mount({id:d,ssr:l,parent:s}),c=void 0}};return fu(()=>{h()}),{themeClass:a,onRender:()=>{c==null||c()}}}function IA(t,e,n){if(!e)return;const i=Ka(),r=Je(()=>{const{value:a}=e;if(!a)return;const l=a[t];if(l)return l}),o=Bt(gr,null),s=()=>{fu(()=>{const{value:a}=n,l=`${a}${t}Rtl`;if(P1(l,i))return;const{value:c}=r;c&&c.style.mount({id:l,head:!0,anchorMetaName:Ea,props:{bPrefix:a?`.${a}-`:void 0},ssr:i,parent:o==null?void 0:o.styleMountTarget})})};return i?s():du(s),r}const OA=Lt({name:"Add",render(){return me("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},me("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}});function el(t,e){return Lt({name:lA(t),setup(){var n;const i=(n=Bt(gr,null))===null||n===void 0?void 0:n.mergedIconsRef;return()=>{var r;const o=(r=i==null?void 0:i.value)===null||r===void 0?void 0:r[t];return o?o():e}}})}const NA=el("close",me("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},me("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},me("g",{fill:"currentColor","fill-rule":"nonzero"},me("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),FA=el("error",me("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},me("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},me("g",{"fill-rule":"nonzero"},me("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),UA=el("info",me("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},me("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},me("g",{"fill-rule":"nonzero"},me("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),zA=el("success",me("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},me("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},me("g",{"fill-rule":"nonzero"},me("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),BA=el("warning",me("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},me("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},me("g",{"fill-rule":"nonzero"},me("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),N_=Lt({name:"BaseIconSwitchTransition",setup(t,{slots:e}){const n=z1();return()=>me(Tx,{name:"icon-switch-transition",appear:n.value},e)}}),HA=Lt({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(t,{slots:e}){function n(a){t.width?a.style.maxWidth=`${a.offsetWidth}px`:a.style.maxHeight=`${a.offsetHeight}px`,a.offsetWidth}function i(a){t.width?a.style.maxWidth="0":a.style.maxHeight="0",a.offsetWidth;const{onLeave:l}=t;l&&l()}function r(a){t.width?a.style.maxWidth="":a.style.maxHeight="";const{onAfterLeave:l}=t;l&&l()}function o(a){if(a.style.transition="none",t.width){const l=a.offsetWidth;a.style.maxWidth="0",a.offsetWidth,a.style.transition="",a.style.maxWidth=`${l}px`}else if(t.reverse)a.style.maxHeight=`${a.offsetHeight}px`,a.offsetHeight,a.style.transition="",a.style.maxHeight="0";else{const l=a.offsetHeight;a.style.maxHeight="0",a.offsetWidth,a.style.transition="",a.style.maxHeight=`${l}px`}a.offsetWidth}function s(a){var l;t.width?a.style.maxWidth="":t.reverse||(a.style.maxHeight=""),(l=t.onAfterEnter)===null||l===void 0||l.call(t)}return()=>{const{group:a,width:l,appear:c,mode:u}=t,h=a?Ox:Tx,d={name:l?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:c,onEnter:o,onAfterEnter:s,onBeforeLeave:n,onLeave:i,onAfterLeave:r};return a||(d.mode=u),me(h,d,e)}}}),kA=Te("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[qe("svg",`
 height: 1em;
 width: 1em;
 `)]),ip=Lt({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(t){np("-base-icon",kA,Cn(t,"clsPrefix"))},render(){return me("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),VA=Te("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[Xe("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),qe("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),e_("disabled",[qe("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),qe("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),qe("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),qe("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),qe("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),Xe("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),Xe("round",[qe("&::before",`
 border-radius: 50%;
 `)])]),F_=Lt({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(t){return np("-base-close",VA,Cn(t,"clsPrefix")),()=>{const{clsPrefix:e,disabled:n,absolute:i,round:r,isButtonTag:o}=t;return me(o?"button":"div",{type:o?"button":void 0,tabindex:n||!t.focusable?-1:0,"aria-disabled":n,"aria-label":"close",role:o?void 0:"button",disabled:n,class:[`${e}-base-close`,i&&`${e}-base-close--absolute`,n&&`${e}-base-close--disabled`,r&&`${e}-base-close--round`],onMousedown:a=>{t.focusable||a.preventDefault()},onClick:t.onClick},me(ip,{clsPrefix:e},{default:()=>me(NA,null)}))}}}),{cubicBezierEaseInOut:$A}=Ja;function md({originalTransform:t="",left:e=0,top:n=0,transition:i=`all .3s ${$A} !important`}={}){return[qe("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:`${t} scale(0.75)`,left:e,top:n,opacity:0}),qe("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${t}`,left:e,top:n,opacity:1}),qe("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:e,top:n,transition:i})]}const GA=qe([qe("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),Te("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[Mt("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[md()]),Mt("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[md({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),Mt("container",`
 animation: rotator 3s linear infinite both;
 `,[Mt("icon",`
 height: 1em;
 width: 1em;
 `)])])]),rh="1.6s",WA={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},XA=Lt({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},WA),setup(t){np("-base-loading",GA,Cn(t,"clsPrefix"))},render(){const{clsPrefix:t,radius:e,strokeWidth:n,stroke:i,scale:r}=this,o=e/r;return me("div",{class:`${t}-base-loading`,role:"img","aria-label":"loading"},me(N_,null,{default:()=>this.show?me("div",{key:"icon",class:`${t}-base-loading__transition-wrapper`},me("div",{class:`${t}-base-loading__container`},me("svg",{class:`${t}-base-loading__icon`,viewBox:`0 0 ${2*o} ${2*o}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},me("g",null,me("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${o} ${o};270 ${o} ${o}`,begin:"0s",dur:rh,fill:"freeze",repeatCount:"indefinite"}),me("circle",{class:`${t}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:o,cy:o,r:e-n/2,"stroke-dasharray":5.67*e,"stroke-dashoffset":18.48*e},me("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${o} ${o};135 ${o} ${o};450 ${o} ${o}`,begin:"0s",dur:rh,fill:"freeze",repeatCount:"indefinite"}),me("animate",{attributeName:"stroke-dashoffset",values:`${5.67*e};${1.42*e};${5.67*e}`,begin:"0s",dur:rh,fill:"freeze",repeatCount:"indefinite"})))))):me("div",{key:"placeholder",class:`${t}-base-loading__placeholder`},this.$slots)}))}}),Pe={neutralBase:"#000",neutralInvertBase:"#fff",neutralTextBase:"#fff",neutralPopover:"rgb(72, 72, 78)",neutralCard:"rgb(24, 24, 28)",neutralModal:"rgb(44, 44, 50)",neutralBody:"rgb(16, 16, 20)",alpha1:"0.9",alpha2:"0.82",alpha3:"0.52",alpha4:"0.38",alpha5:"0.28",alphaClose:"0.52",alphaDisabled:"0.38",alphaDisabledInput:"0.06",alphaPending:"0.09",alphaTablePending:"0.06",alphaTableStriped:"0.05",alphaPressed:"0.05",alphaAvatar:"0.18",alphaRail:"0.2",alphaProgressRail:"0.12",alphaBorder:"0.24",alphaDivider:"0.09",alphaInput:"0.1",alphaAction:"0.06",alphaTab:"0.04",alphaScrollbar:"0.2",alphaScrollbarHover:"0.3",alphaCode:"0.12",alphaTag:"0.2",primaryHover:"#7fe7c4",primaryDefault:"#63e2b7",primaryActive:"#5acea7",primarySuppl:"rgb(42, 148, 125)",infoHover:"#8acbec",infoDefault:"#70c0e8",infoActive:"#66afd3",infoSuppl:"rgb(56, 137, 197)",errorHover:"#e98b8b",errorDefault:"#e88080",errorActive:"#e57272",errorSuppl:"rgb(208, 58, 82)",warningHover:"#f5d599",warningDefault:"#f2c97d",warningActive:"#e6c260",warningSuppl:"rgb(240, 138, 0)",successHover:"#7fe7c4",successDefault:"#63e2b7",successActive:"#5acea7",successSuppl:"rgb(42, 148, 125)"},jA=Bi(Pe.neutralBase),U_=Bi(Pe.neutralInvertBase),qA=`rgba(${U_.slice(0,3).join(", ")}, `;function st(t){return`${qA+String(t)})`}function YA(t){const e=Array.from(U_);return e[3]=Number(t),ze(jA,e)}const ve=Object.assign(Object.assign({name:"common"},Ja),{baseColor:Pe.neutralBase,primaryColor:Pe.primaryDefault,primaryColorHover:Pe.primaryHover,primaryColorPressed:Pe.primaryActive,primaryColorSuppl:Pe.primarySuppl,infoColor:Pe.infoDefault,infoColorHover:Pe.infoHover,infoColorPressed:Pe.infoActive,infoColorSuppl:Pe.infoSuppl,successColor:Pe.successDefault,successColorHover:Pe.successHover,successColorPressed:Pe.successActive,successColorSuppl:Pe.successSuppl,warningColor:Pe.warningDefault,warningColorHover:Pe.warningHover,warningColorPressed:Pe.warningActive,warningColorSuppl:Pe.warningSuppl,errorColor:Pe.errorDefault,errorColorHover:Pe.errorHover,errorColorPressed:Pe.errorActive,errorColorSuppl:Pe.errorSuppl,textColorBase:Pe.neutralTextBase,textColor1:st(Pe.alpha1),textColor2:st(Pe.alpha2),textColor3:st(Pe.alpha3),textColorDisabled:st(Pe.alpha4),placeholderColor:st(Pe.alpha4),placeholderColorDisabled:st(Pe.alpha5),iconColor:st(Pe.alpha4),iconColorDisabled:st(Pe.alpha5),iconColorHover:st(Number(Pe.alpha4)*1.25),iconColorPressed:st(Number(Pe.alpha4)*.8),opacity1:Pe.alpha1,opacity2:Pe.alpha2,opacity3:Pe.alpha3,opacity4:Pe.alpha4,opacity5:Pe.alpha5,dividerColor:st(Pe.alphaDivider),borderColor:st(Pe.alphaBorder),closeIconColorHover:st(Number(Pe.alphaClose)),closeIconColor:st(Number(Pe.alphaClose)),closeIconColorPressed:st(Number(Pe.alphaClose)),closeColorHover:"rgba(255, 255, 255, .12)",closeColorPressed:"rgba(255, 255, 255, .08)",clearColor:st(Pe.alpha4),clearColorHover:It(st(Pe.alpha4),{alpha:1.25}),clearColorPressed:It(st(Pe.alpha4),{alpha:.8}),scrollbarColor:st(Pe.alphaScrollbar),scrollbarColorHover:st(Pe.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:st(Pe.alphaProgressRail),railColor:st(Pe.alphaRail),popoverColor:Pe.neutralPopover,tableColor:Pe.neutralCard,cardColor:Pe.neutralCard,modalColor:Pe.neutralModal,bodyColor:Pe.neutralBody,tagColor:YA(Pe.alphaTag),avatarColor:st(Pe.alphaAvatar),invertedColor:Pe.neutralBase,inputColor:st(Pe.alphaInput),codeColor:st(Pe.alphaCode),tabColor:st(Pe.alphaTab),actionColor:st(Pe.alphaAction),tableHeaderColor:st(Pe.alphaAction),hoverColor:st(Pe.alphaPending),tableColorHover:st(Pe.alphaTablePending),tableColorStriped:st(Pe.alphaTableStriped),pressedColor:st(Pe.alphaPressed),opacityDisabled:Pe.alphaDisabled,inputColorDisabled:st(Pe.alphaDisabledInput),buttonColor2:"rgba(255, 255, 255, .08)",buttonColor2Hover:"rgba(255, 255, 255, .12)",buttonColor2Pressed:"rgba(255, 255, 255, .08)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),We={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},KA=Bi(We.neutralBase),z_=Bi(We.neutralInvertBase),ZA=`rgba(${z_.slice(0,3).join(", ")}, `;function ag(t){return`${ZA+String(t)})`}function nn(t){const e=Array.from(z_);return e[3]=Number(t),ze(KA,e)}const ws=Object.assign(Object.assign({name:"common"},Ja),{baseColor:We.neutralBase,primaryColor:We.primaryDefault,primaryColorHover:We.primaryHover,primaryColorPressed:We.primaryActive,primaryColorSuppl:We.primarySuppl,infoColor:We.infoDefault,infoColorHover:We.infoHover,infoColorPressed:We.infoActive,infoColorSuppl:We.infoSuppl,successColor:We.successDefault,successColorHover:We.successHover,successColorPressed:We.successActive,successColorSuppl:We.successSuppl,warningColor:We.warningDefault,warningColorHover:We.warningHover,warningColorPressed:We.warningActive,warningColorSuppl:We.warningSuppl,errorColor:We.errorDefault,errorColorHover:We.errorHover,errorColorPressed:We.errorActive,errorColorSuppl:We.errorSuppl,textColorBase:We.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:nn(We.alpha4),placeholderColor:nn(We.alpha4),placeholderColorDisabled:nn(We.alpha5),iconColor:nn(We.alpha4),iconColorHover:It(nn(We.alpha4),{lightness:.75}),iconColorPressed:It(nn(We.alpha4),{lightness:.9}),iconColorDisabled:nn(We.alpha5),opacity1:We.alpha1,opacity2:We.alpha2,opacity3:We.alpha3,opacity4:We.alpha4,opacity5:We.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:nn(Number(We.alphaClose)),closeIconColorHover:nn(Number(We.alphaClose)),closeIconColorPressed:nn(Number(We.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:nn(We.alpha4),clearColorHover:It(nn(We.alpha4),{lightness:.75}),clearColorPressed:It(nn(We.alpha4),{lightness:.9}),scrollbarColor:ag(We.alphaScrollbar),scrollbarColorHover:ag(We.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:nn(We.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:We.neutralPopover,tableColor:We.neutralCard,cardColor:We.neutralCard,modalColor:We.neutralModal,bodyColor:We.neutralBody,tagColor:"#eee",avatarColor:nn(We.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:nn(We.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:We.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),JA={iconSizeTiny:"28px",iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"};function B_(t){const{textColorDisabled:e,iconColor:n,textColor2:i,fontSizeTiny:r,fontSizeSmall:o,fontSizeMedium:s,fontSizeLarge:a,fontSizeHuge:l}=t;return Object.assign(Object.assign({},JA),{fontSizeTiny:r,fontSizeSmall:o,fontSizeMedium:s,fontSizeLarge:a,fontSizeHuge:l,textColor:e,iconColor:n,extraTextColor:i})}const QA={name:"Empty",common:ws,self:B_},lo={name:"Empty",common:ve,self:B_},eP={railInsetHorizontalBottom:"auto 2px 4px 2px",railInsetHorizontalTop:"4px 2px auto 2px",railInsetVerticalRight:"2px 4px 2px auto",railInsetVerticalLeft:"2px auto 2px 4px",railColor:"transparent"};function H_(t){const{scrollbarColor:e,scrollbarColorHover:n,scrollbarHeight:i,scrollbarWidth:r,scrollbarBorderRadius:o}=t;return Object.assign(Object.assign({},eP),{height:i,width:r,borderRadius:o,color:e,colorHover:n})}const S5={name:"Scrollbar",common:ws,self:H_},Tn={name:"Scrollbar",common:ve,self:H_},tP={height:"calc(var(--n-option-height) * 7.6)",paddingTiny:"4px 0",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingTiny:"0 12px",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"};function nP(t){const{borderRadius:e,popoverColor:n,textColor3:i,dividerColor:r,textColor2:o,primaryColorPressed:s,textColorDisabled:a,primaryColor:l,opacityDisabled:c,hoverColor:u,fontSizeTiny:h,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:m,fontSizeHuge:v,heightTiny:g,heightSmall:p,heightMedium:S,heightLarge:y,heightHuge:w}=t;return Object.assign(Object.assign({},tP),{optionFontSizeTiny:h,optionFontSizeSmall:d,optionFontSizeMedium:f,optionFontSizeLarge:m,optionFontSizeHuge:v,optionHeightTiny:g,optionHeightSmall:p,optionHeightMedium:S,optionHeightLarge:y,optionHeightHuge:w,borderRadius:e,color:n,groupHeaderTextColor:i,actionDividerColor:r,optionTextColor:o,optionTextColorPressed:s,optionTextColorDisabled:a,optionTextColorActive:l,optionOpacityDisabled:c,optionCheckColor:l,optionColorPending:u,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:u,actionTextColor:o,loadingColor:l})}const tl={name:"InternalSelectMenu",common:ve,peers:{Scrollbar:Tn,Empty:lo},self:nP},iP={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"};function rP(t){const{boxShadow2:e,popoverColor:n,textColor2:i,borderRadius:r,fontSize:o,dividerColor:s}=t;return Object.assign(Object.assign({},iP),{fontSize:o,borderRadius:r,color:n,dividerColor:s,textColor:i,boxShadow:e})}const co={name:"Popover",common:ve,self:rP},oP={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px"},k_={name:"Tag",common:ve,self(t){const{textColor2:e,primaryColorHover:n,primaryColorPressed:i,primaryColor:r,infoColor:o,successColor:s,warningColor:a,errorColor:l,baseColor:c,borderColor:u,tagColor:h,opacityDisabled:d,closeIconColor:f,closeIconColorHover:m,closeIconColorPressed:v,closeColorHover:g,closeColorPressed:p,borderRadiusSmall:S,fontSizeMini:y,fontSizeTiny:w,fontSizeSmall:L,fontSizeMedium:E,heightMini:T,heightTiny:D,heightSmall:z,heightMedium:b,buttonColor2Hover:M,buttonColor2Pressed:I,fontWeightStrong:N}=t;return Object.assign(Object.assign({},oP),{closeBorderRadius:S,heightTiny:T,heightSmall:D,heightMedium:z,heightLarge:b,borderRadius:S,opacityDisabled:d,fontSizeTiny:y,fontSizeSmall:w,fontSizeMedium:L,fontSizeLarge:E,fontWeightStrong:N,textColorCheckable:e,textColorHoverCheckable:e,textColorPressedCheckable:e,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:M,colorPressedCheckable:I,colorChecked:r,colorCheckedHover:n,colorCheckedPressed:i,border:`1px solid ${u}`,textColor:e,color:h,colorBordered:"#0000",closeIconColor:f,closeIconColorHover:m,closeIconColorPressed:v,closeColorHover:g,closeColorPressed:p,borderPrimary:`1px solid ${Ne(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:Ne(r,{alpha:.16}),colorBorderedPrimary:"#0000",closeIconColorPrimary:It(r,{lightness:.7}),closeIconColorHoverPrimary:It(r,{lightness:.7}),closeIconColorPressedPrimary:It(r,{lightness:.7}),closeColorHoverPrimary:Ne(r,{alpha:.16}),closeColorPressedPrimary:Ne(r,{alpha:.12}),borderInfo:`1px solid ${Ne(o,{alpha:.3})}`,textColorInfo:o,colorInfo:Ne(o,{alpha:.16}),colorBorderedInfo:"#0000",closeIconColorInfo:It(o,{alpha:.7}),closeIconColorHoverInfo:It(o,{alpha:.7}),closeIconColorPressedInfo:It(o,{alpha:.7}),closeColorHoverInfo:Ne(o,{alpha:.16}),closeColorPressedInfo:Ne(o,{alpha:.12}),borderSuccess:`1px solid ${Ne(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:Ne(s,{alpha:.16}),colorBorderedSuccess:"#0000",closeIconColorSuccess:It(s,{alpha:.7}),closeIconColorHoverSuccess:It(s,{alpha:.7}),closeIconColorPressedSuccess:It(s,{alpha:.7}),closeColorHoverSuccess:Ne(s,{alpha:.16}),closeColorPressedSuccess:Ne(s,{alpha:.12}),borderWarning:`1px solid ${Ne(a,{alpha:.3})}`,textColorWarning:a,colorWarning:Ne(a,{alpha:.16}),colorBorderedWarning:"#0000",closeIconColorWarning:It(a,{alpha:.7}),closeIconColorHoverWarning:It(a,{alpha:.7}),closeIconColorPressedWarning:It(a,{alpha:.7}),closeColorHoverWarning:Ne(a,{alpha:.16}),closeColorPressedWarning:Ne(a,{alpha:.11}),borderError:`1px solid ${Ne(l,{alpha:.3})}`,textColorError:l,colorError:Ne(l,{alpha:.16}),colorBorderedError:"#0000",closeIconColorError:It(l,{alpha:.7}),closeIconColorHoverError:It(l,{alpha:.7}),closeIconColorPressedError:It(l,{alpha:.7}),closeColorHoverError:Ne(l,{alpha:.16}),closeColorPressedError:Ne(l,{alpha:.12})})}},sP={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},rp={name:"InternalSelection",common:ve,peers:{Popover:co},self(t){const{borderRadius:e,textColor2:n,textColorDisabled:i,inputColor:r,inputColorDisabled:o,primaryColor:s,primaryColorHover:a,warningColor:l,warningColorHover:c,errorColor:u,errorColorHover:h,iconColor:d,iconColorDisabled:f,clearColor:m,clearColorHover:v,clearColorPressed:g,placeholderColor:p,placeholderColorDisabled:S,fontSizeTiny:y,fontSizeSmall:w,fontSizeMedium:L,fontSizeLarge:E,heightTiny:T,heightSmall:D,heightMedium:z,heightLarge:b}=t;return Object.assign(Object.assign({},sP),{fontSizeTiny:y,fontSizeSmall:w,fontSizeMedium:L,fontSizeLarge:E,heightTiny:T,heightSmall:D,heightMedium:z,heightLarge:b,borderRadius:e,textColor:n,textColorDisabled:i,placeholderColor:p,placeholderColorDisabled:S,color:r,colorDisabled:o,colorActive:Ne(s,{alpha:.1}),border:"1px solid #0000",borderHover:`1px solid ${a}`,borderActive:`1px solid ${s}`,borderFocus:`1px solid ${a}`,boxShadowHover:"none",boxShadowActive:`0 0 8px 0 ${Ne(s,{alpha:.4})}`,boxShadowFocus:`0 0 8px 0 ${Ne(s,{alpha:.4})}`,caretColor:s,arrowColor:d,arrowColorDisabled:f,loadingColor:s,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 8px 0 ${Ne(l,{alpha:.4})}`,boxShadowFocusWarning:`0 0 8px 0 ${Ne(l,{alpha:.4})}`,colorActiveWarning:Ne(l,{alpha:.1}),caretColorWarning:l,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${h}`,borderActiveError:`1px solid ${u}`,borderFocusError:`1px solid ${h}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 8px 0 ${Ne(u,{alpha:.4})}`,boxShadowFocusError:`0 0 8px 0 ${Ne(u,{alpha:.4})}`,colorActiveError:Ne(u,{alpha:.1}),caretColorError:u,clearColor:m,clearColorHover:v,clearColorPressed:g})}},aP={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},lP={name:"Alert",common:ve,self(t){const{lineHeight:e,borderRadius:n,fontWeightStrong:i,dividerColor:r,inputColor:o,textColor1:s,textColor2:a,closeColorHover:l,closeColorPressed:c,closeIconColor:u,closeIconColorHover:h,closeIconColorPressed:d,infoColorSuppl:f,successColorSuppl:m,warningColorSuppl:v,errorColorSuppl:g,fontSize:p}=t;return Object.assign(Object.assign({},aP),{fontSize:p,lineHeight:e,titleFontWeight:i,borderRadius:n,border:`1px solid ${r}`,color:o,titleTextColor:s,iconColor:a,contentTextColor:a,closeBorderRadius:n,closeColorHover:l,closeColorPressed:c,closeIconColor:u,closeIconColorHover:h,closeIconColorPressed:d,borderInfo:`1px solid ${Ne(f,{alpha:.35})}`,colorInfo:Ne(f,{alpha:.25}),titleTextColorInfo:s,iconColorInfo:f,contentTextColorInfo:a,closeColorHoverInfo:l,closeColorPressedInfo:c,closeIconColorInfo:u,closeIconColorHoverInfo:h,closeIconColorPressedInfo:d,borderSuccess:`1px solid ${Ne(m,{alpha:.35})}`,colorSuccess:Ne(m,{alpha:.25}),titleTextColorSuccess:s,iconColorSuccess:m,contentTextColorSuccess:a,closeColorHoverSuccess:l,closeColorPressedSuccess:c,closeIconColorSuccess:u,closeIconColorHoverSuccess:h,closeIconColorPressedSuccess:d,borderWarning:`1px solid ${Ne(v,{alpha:.35})}`,colorWarning:Ne(v,{alpha:.25}),titleTextColorWarning:s,iconColorWarning:v,contentTextColorWarning:a,closeColorHoverWarning:l,closeColorPressedWarning:c,closeIconColorWarning:u,closeIconColorHoverWarning:h,closeIconColorPressedWarning:d,borderError:`1px solid ${Ne(g,{alpha:.35})}`,colorError:Ne(g,{alpha:.25}),titleTextColorError:s,iconColorError:g,contentTextColorError:a,closeColorHoverError:l,closeColorPressedError:c,closeIconColorError:u,closeIconColorHoverError:h,closeIconColorPressedError:d})}},{cubicBezierEaseInOut:li,cubicBezierEaseOut:cP,cubicBezierEaseIn:uP}=Ja;function hP({overflow:t="hidden",duration:e=".3s",originalTransition:n="",leavingDelay:i="0s",foldPadding:r=!1,enterToProps:o=void 0,leaveToProps:s=void 0,reverse:a=!1}={}){const l=a?"leave":"enter",c=a?"enter":"leave";return[qe(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${l}-to`,Object.assign(Object.assign({},o),{opacity:1})),qe(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${l}-from`,Object.assign(Object.assign({},s),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:r?"0 !important":void 0,paddingBottom:r?"0 !important":void 0})),qe(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${t};
 transition:
 max-height ${e} ${li} ${i},
 opacity ${e} ${cP} ${i},
 margin-top ${e} ${li} ${i},
 margin-bottom ${e} ${li} ${i},
 padding-top ${e} ${li} ${i},
 padding-bottom ${e} ${li} ${i}
 ${n?`,${n}`:""}
 `),qe(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${t};
 transition:
 max-height ${e} ${li},
 opacity ${e} ${uP},
 margin-top ${e} ${li},
 margin-bottom ${e} ${li},
 padding-top ${e} ${li},
 padding-bottom ${e} ${li}
 ${n?`,${n}`:""}
 `)]}const dP={linkFontSize:"13px",linkPadding:"0 0 0 16px",railWidth:"4px"};function fP(t){const{borderRadius:e,railColor:n,primaryColor:i,primaryColorHover:r,primaryColorPressed:o,textColor2:s}=t;return Object.assign(Object.assign({},dP),{borderRadius:e,railColor:n,railColorActive:i,linkColor:Ne(i,{alpha:.15}),linkTextColor:s,linkTextColorHover:r,linkTextColorPressed:o,linkTextColorActive:i})}const pP={name:"Anchor",common:ve,self:fP},mP={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"},kn={name:"Input",common:ve,self(t){const{textColor2:e,textColor3:n,textColorDisabled:i,primaryColor:r,primaryColorHover:o,inputColor:s,inputColorDisabled:a,warningColor:l,warningColorHover:c,errorColor:u,errorColorHover:h,borderRadius:d,lineHeight:f,fontSizeTiny:m,fontSizeSmall:v,fontSizeMedium:g,fontSizeLarge:p,heightTiny:S,heightSmall:y,heightMedium:w,heightLarge:L,clearColor:E,clearColorHover:T,clearColorPressed:D,placeholderColor:z,placeholderColorDisabled:b,iconColor:M,iconColorDisabled:I,iconColorHover:N,iconColorPressed:W}=t;return Object.assign(Object.assign({},mP),{countTextColorDisabled:i,countTextColor:n,heightTiny:S,heightSmall:y,heightMedium:w,heightLarge:L,fontSizeTiny:m,fontSizeSmall:v,fontSizeMedium:g,fontSizeLarge:p,lineHeight:f,lineHeightTextarea:f,borderRadius:d,iconSize:"16px",groupLabelColor:s,textColor:e,textColorDisabled:i,textDecorationColor:e,groupLabelTextColor:e,caretColor:r,placeholderColor:z,placeholderColorDisabled:b,color:s,colorDisabled:a,colorFocus:Ne(r,{alpha:.1}),groupLabelBorder:"1px solid #0000",border:"1px solid #0000",borderHover:`1px solid ${o}`,borderDisabled:"1px solid #0000",borderFocus:`1px solid ${o}`,boxShadowFocus:`0 0 8px 0 ${Ne(r,{alpha:.3})}`,loadingColor:r,loadingColorWarning:l,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,colorFocusWarning:Ne(l,{alpha:.1}),borderFocusWarning:`1px solid ${c}`,boxShadowFocusWarning:`0 0 8px 0 ${Ne(l,{alpha:.3})}`,caretColorWarning:l,loadingColorError:u,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${h}`,colorFocusError:Ne(u,{alpha:.1}),borderFocusError:`1px solid ${h}`,boxShadowFocusError:`0 0 8px 0 ${Ne(u,{alpha:.3})}`,caretColorError:u,clearColor:E,clearColorHover:T,clearColorPressed:D,iconColor:M,iconColorDisabled:I,iconColorHover:N,iconColorPressed:W,suffixTextColor:e})}};function gP(t){const{boxShadow2:e}=t;return{menuBoxShadow:e}}const vP={name:"AutoComplete",common:ve,peers:{InternalSelectMenu:tl,Input:kn},self:gP};function xP(t){const{borderRadius:e,avatarColor:n,cardColor:i,fontSize:r,heightTiny:o,heightSmall:s,heightMedium:a,heightLarge:l,heightHuge:c,modalColor:u,popoverColor:h}=t;return{borderRadius:e,fontSize:r,border:`2px solid ${i}`,heightTiny:o,heightSmall:s,heightMedium:a,heightLarge:l,heightHuge:c,color:ze(i,n),colorModal:ze(u,n),colorPopover:ze(h,n)}}const V_={name:"Avatar",common:ve,self:xP};function _P(){return{gap:"-12px"}}const bP={name:"AvatarGroup",common:ve,peers:{Avatar:V_},self:_P},yP={width:"44px",height:"44px",borderRadius:"22px",iconSize:"26px"},SP={name:"BackTop",common:ve,self(t){const{popoverColor:e,textColor2:n,primaryColorHover:i,primaryColorPressed:r}=t;return Object.assign(Object.assign({},yP),{color:e,textColor:n,iconColor:n,iconColorHover:i,iconColorPressed:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})}},CP={name:"Badge",common:ve,self(t){const{errorColorSuppl:e,infoColorSuppl:n,successColorSuppl:i,warningColorSuppl:r,fontFamily:o}=t;return{color:e,colorInfo:n,colorSuccess:i,colorError:e,colorWarning:r,fontSize:"12px",fontFamily:o}}},MP={fontWeightActive:"400"};function wP(t){const{fontSize:e,textColor3:n,textColor2:i,borderRadius:r,buttonColor2Hover:o,buttonColor2Pressed:s}=t;return Object.assign(Object.assign({},MP),{fontSize:e,itemLineHeight:"1.25",itemTextColor:n,itemTextColorHover:i,itemTextColorPressed:i,itemTextColorActive:i,itemBorderRadius:r,itemColorHover:o,itemColorPressed:s,separatorColor:n})}const EP={name:"Breadcrumb",common:ve,self:wP},TP={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"};function $_(t){const{heightTiny:e,heightSmall:n,heightMedium:i,heightLarge:r,borderRadius:o,fontSizeTiny:s,fontSizeSmall:a,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:u,textColor2:h,textColor3:d,primaryColorHover:f,primaryColorPressed:m,borderColor:v,primaryColor:g,baseColor:p,infoColor:S,infoColorHover:y,infoColorPressed:w,successColor:L,successColorHover:E,successColorPressed:T,warningColor:D,warningColorHover:z,warningColorPressed:b,errorColor:M,errorColorHover:I,errorColorPressed:N,fontWeight:W,buttonColor2:ne,buttonColor2Hover:X,buttonColor2Pressed:te,fontWeightStrong:j}=t;return Object.assign(Object.assign({},TP),{heightTiny:e,heightSmall:n,heightMedium:i,heightLarge:r,borderRadiusTiny:o,borderRadiusSmall:o,borderRadiusMedium:o,borderRadiusLarge:o,fontSizeTiny:s,fontSizeSmall:a,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:u,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:ne,colorSecondaryHover:X,colorSecondaryPressed:te,colorTertiary:ne,colorTertiaryHover:X,colorTertiaryPressed:te,colorQuaternary:"#0000",colorQuaternaryHover:X,colorQuaternaryPressed:te,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:h,textColorTertiary:d,textColorHover:f,textColorPressed:m,textColorFocus:f,textColorDisabled:h,textColorText:h,textColorTextHover:f,textColorTextPressed:m,textColorTextFocus:f,textColorTextDisabled:h,textColorGhost:h,textColorGhostHover:f,textColorGhostPressed:m,textColorGhostFocus:f,textColorGhostDisabled:h,border:`1px solid ${v}`,borderHover:`1px solid ${f}`,borderPressed:`1px solid ${m}`,borderFocus:`1px solid ${f}`,borderDisabled:`1px solid ${v}`,rippleColor:g,colorPrimary:g,colorHoverPrimary:f,colorPressedPrimary:m,colorFocusPrimary:f,colorDisabledPrimary:g,textColorPrimary:p,textColorHoverPrimary:p,textColorPressedPrimary:p,textColorFocusPrimary:p,textColorDisabledPrimary:p,textColorTextPrimary:g,textColorTextHoverPrimary:f,textColorTextPressedPrimary:m,textColorTextFocusPrimary:f,textColorTextDisabledPrimary:h,textColorGhostPrimary:g,textColorGhostHoverPrimary:f,textColorGhostPressedPrimary:m,textColorGhostFocusPrimary:f,textColorGhostDisabledPrimary:g,borderPrimary:`1px solid ${g}`,borderHoverPrimary:`1px solid ${f}`,borderPressedPrimary:`1px solid ${m}`,borderFocusPrimary:`1px solid ${f}`,borderDisabledPrimary:`1px solid ${g}`,rippleColorPrimary:g,colorInfo:S,colorHoverInfo:y,colorPressedInfo:w,colorFocusInfo:y,colorDisabledInfo:S,textColorInfo:p,textColorHoverInfo:p,textColorPressedInfo:p,textColorFocusInfo:p,textColorDisabledInfo:p,textColorTextInfo:S,textColorTextHoverInfo:y,textColorTextPressedInfo:w,textColorTextFocusInfo:y,textColorTextDisabledInfo:h,textColorGhostInfo:S,textColorGhostHoverInfo:y,textColorGhostPressedInfo:w,textColorGhostFocusInfo:y,textColorGhostDisabledInfo:S,borderInfo:`1px solid ${S}`,borderHoverInfo:`1px solid ${y}`,borderPressedInfo:`1px solid ${w}`,borderFocusInfo:`1px solid ${y}`,borderDisabledInfo:`1px solid ${S}`,rippleColorInfo:S,colorSuccess:L,colorHoverSuccess:E,colorPressedSuccess:T,colorFocusSuccess:E,colorDisabledSuccess:L,textColorSuccess:p,textColorHoverSuccess:p,textColorPressedSuccess:p,textColorFocusSuccess:p,textColorDisabledSuccess:p,textColorTextSuccess:L,textColorTextHoverSuccess:E,textColorTextPressedSuccess:T,textColorTextFocusSuccess:E,textColorTextDisabledSuccess:h,textColorGhostSuccess:L,textColorGhostHoverSuccess:E,textColorGhostPressedSuccess:T,textColorGhostFocusSuccess:E,textColorGhostDisabledSuccess:L,borderSuccess:`1px solid ${L}`,borderHoverSuccess:`1px solid ${E}`,borderPressedSuccess:`1px solid ${T}`,borderFocusSuccess:`1px solid ${E}`,borderDisabledSuccess:`1px solid ${L}`,rippleColorSuccess:L,colorWarning:D,colorHoverWarning:z,colorPressedWarning:b,colorFocusWarning:z,colorDisabledWarning:D,textColorWarning:p,textColorHoverWarning:p,textColorPressedWarning:p,textColorFocusWarning:p,textColorDisabledWarning:p,textColorTextWarning:D,textColorTextHoverWarning:z,textColorTextPressedWarning:b,textColorTextFocusWarning:z,textColorTextDisabledWarning:h,textColorGhostWarning:D,textColorGhostHoverWarning:z,textColorGhostPressedWarning:b,textColorGhostFocusWarning:z,textColorGhostDisabledWarning:D,borderWarning:`1px solid ${D}`,borderHoverWarning:`1px solid ${z}`,borderPressedWarning:`1px solid ${b}`,borderFocusWarning:`1px solid ${z}`,borderDisabledWarning:`1px solid ${D}`,rippleColorWarning:D,colorError:M,colorHoverError:I,colorPressedError:N,colorFocusError:I,colorDisabledError:M,textColorError:p,textColorHoverError:p,textColorPressedError:p,textColorFocusError:p,textColorDisabledError:p,textColorTextError:M,textColorTextHoverError:I,textColorTextPressedError:N,textColorTextFocusError:I,textColorTextDisabledError:h,textColorGhostError:M,textColorGhostHoverError:I,textColorGhostPressedError:N,textColorGhostFocusError:I,textColorGhostDisabledError:M,borderError:`1px solid ${M}`,borderHoverError:`1px solid ${I}`,borderPressedError:`1px solid ${N}`,borderFocusError:`1px solid ${I}`,borderDisabledError:`1px solid ${M}`,rippleColorError:M,waveOpacity:"0.6",fontWeight:W,fontWeightStrong:j})}const C5={name:"Button",common:ws,self:$_},An={name:"Button",common:ve,self(t){const e=$_(t);return e.waveOpacity="0.8",e.colorOpacitySecondary="0.16",e.colorOpacitySecondaryHover="0.2",e.colorOpacitySecondaryPressed="0.12",e}},AP={titleFontSize:"22px"};function PP(t){const{borderRadius:e,fontSize:n,lineHeight:i,textColor2:r,textColor1:o,textColorDisabled:s,dividerColor:a,fontWeightStrong:l,primaryColor:c,baseColor:u,hoverColor:h,cardColor:d,modalColor:f,popoverColor:m}=t;return Object.assign(Object.assign({},AP),{borderRadius:e,borderColor:ze(d,a),borderColorModal:ze(f,a),borderColorPopover:ze(m,a),textColor:r,titleFontWeight:l,titleTextColor:o,dayTextColor:s,fontSize:n,lineHeight:i,dateColorCurrent:c,dateTextColorCurrent:u,cellColorHover:ze(d,h),cellColorHoverModal:ze(f,h),cellColorHoverPopover:ze(m,h),cellColor:d,cellColorModal:f,cellColorPopover:m,barColor:c})}const RP={name:"Calendar",common:ve,peers:{Button:An},self:PP};function LP(t){const{fontSize:e,boxShadow2:n,popoverColor:i,textColor2:r,borderRadius:o,borderColor:s,heightSmall:a,heightMedium:l,heightLarge:c,fontSizeSmall:u,fontSizeMedium:h,fontSizeLarge:d,dividerColor:f}=t;return{panelFontSize:e,boxShadow:n,color:i,textColor:r,borderRadius:o,border:`1px solid ${s}`,heightSmall:a,heightMedium:l,heightLarge:c,fontSizeSmall:u,fontSizeMedium:h,fontSizeLarge:d,dividerColor:f}}const DP={name:"ColorPicker",common:ve,peers:{Input:kn,Button:An},self:LP},IP={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function G_(t){const{primaryColor:e,borderRadius:n,lineHeight:i,fontSize:r,cardColor:o,textColor2:s,textColor1:a,dividerColor:l,fontWeightStrong:c,closeIconColor:u,closeIconColorHover:h,closeIconColorPressed:d,closeColorHover:f,closeColorPressed:m,modalColor:v,boxShadow1:g,popoverColor:p,actionColor:S}=t;return Object.assign(Object.assign({},IP),{lineHeight:i,color:o,colorModal:v,colorPopover:p,colorTarget:e,colorEmbedded:S,colorEmbeddedModal:S,colorEmbeddedPopover:S,textColor:s,titleTextColor:a,borderColor:l,actionColor:S,titleFontWeight:c,closeColorHover:f,closeColorPressed:m,closeBorderRadius:n,closeIconColor:u,closeIconColorHover:h,closeIconColorPressed:d,fontSizeSmall:r,fontSizeMedium:r,fontSizeLarge:r,fontSizeHuge:r,boxShadow:g,borderRadius:n})}const M5={name:"Card",common:ws,self:G_},W_={name:"Card",common:ve,self(t){const e=G_(t),{cardColor:n,modalColor:i,popoverColor:r}=t;return e.colorEmbedded=n,e.colorEmbeddedModal=i,e.colorEmbeddedPopover=r,e}};function OP(){return{dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}}const NP={name:"Carousel",common:ve,self:OP},FP={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"};function UP(t){const{baseColor:e,inputColorDisabled:n,cardColor:i,modalColor:r,popoverColor:o,textColorDisabled:s,borderColor:a,primaryColor:l,textColor2:c,fontSizeSmall:u,fontSizeMedium:h,fontSizeLarge:d,borderRadiusSmall:f,lineHeight:m}=t;return Object.assign(Object.assign({},FP),{labelLineHeight:m,fontSizeSmall:u,fontSizeMedium:h,fontSizeLarge:d,borderRadius:f,color:e,colorChecked:l,colorDisabled:n,colorDisabledChecked:n,colorTableHeader:i,colorTableHeaderModal:r,colorTableHeaderPopover:o,checkMarkColor:e,checkMarkColorDisabled:s,checkMarkColorDisabledChecked:s,border:`1px solid ${a}`,borderDisabled:`1px solid ${a}`,borderDisabledChecked:`1px solid ${a}`,borderChecked:`1px solid ${l}`,borderFocus:`1px solid ${l}`,boxShadowFocus:`0 0 0 2px ${Ne(l,{alpha:.3})}`,textColor:c,textColorDisabled:s})}const Es={name:"Checkbox",common:ve,self(t){const{cardColor:e}=t,n=UP(t);return n.color="#0000",n.checkMarkColor=e,n}};function zP(t){const{borderRadius:e,boxShadow2:n,popoverColor:i,textColor2:r,textColor3:o,primaryColor:s,textColorDisabled:a,dividerColor:l,hoverColor:c,fontSizeMedium:u,heightMedium:h}=t;return{menuBorderRadius:e,menuColor:i,menuBoxShadow:n,menuDividerColor:l,menuHeight:"calc(var(--n-option-height) * 6.6)",optionArrowColor:o,optionHeight:h,optionFontSize:u,optionColorHover:c,optionTextColor:r,optionTextColorActive:s,optionTextColorDisabled:a,optionCheckMarkColor:s,loadingColor:s,columnWidth:"180px"}}const BP={name:"Cascader",common:ve,peers:{InternalSelectMenu:tl,InternalSelection:rp,Scrollbar:Tn,Checkbox:Es,Empty:QA},self:zP},X_={name:"Code",common:ve,self(t){const{textColor2:e,fontSize:n,fontWeightStrong:i,textColor3:r}=t;return{textColor:e,fontSize:n,fontWeightStrong:i,"mono-3":"#5c6370","hue-1":"#56b6c2","hue-2":"#61aeee","hue-3":"#c678dd","hue-4":"#98c379","hue-5":"#e06c75","hue-5-2":"#be5046","hue-6":"#d19a66","hue-6-2":"#e6c07b",lineNumberTextColor:r}}};function HP(t){const{fontWeight:e,textColor1:n,textColor2:i,textColorDisabled:r,dividerColor:o,fontSize:s}=t;return{titleFontSize:s,titleFontWeight:e,dividerColor:o,titleTextColor:n,titleTextColorDisabled:r,fontSize:s,textColor:i,arrowColor:i,arrowColorDisabled:r,itemMargin:"16px 0 0 0",titlePadding:"16px 0 0 0"}}const kP={name:"Collapse",common:ve,self:HP};function VP(t){const{cubicBezierEaseInOut:e}=t;return{bezier:e}}const $P={name:"CollapseTransition",common:ve,self:VP},GP={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,styleMountTarget:Object,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(d1("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},WP=Lt({name:"ConfigProvider",alias:["App"],props:GP,setup(t){const e=Bt(gr,null),n=Je(()=>{const{theme:v}=t;if(v===null)return;const g=e==null?void 0:e.mergedThemeRef.value;return v===void 0?g:g===void 0?v:Object.assign({},g,v)}),i=Je(()=>{const{themeOverrides:v}=t;if(v!==null){if(v===void 0)return e==null?void 0:e.mergedThemeOverridesRef.value;{const g=e==null?void 0:e.mergedThemeOverridesRef.value;return g===void 0?v:Ws({},g,v)}}}),r=Lm(()=>{const{namespace:v}=t;return v===void 0?e==null?void 0:e.mergedNamespaceRef.value:v}),o=Lm(()=>{const{bordered:v}=t;return v===void 0?e==null?void 0:e.mergedBorderedRef.value:v}),s=Je(()=>{const{icons:v}=t;return v===void 0?e==null?void 0:e.mergedIconsRef.value:v}),a=Je(()=>{const{componentOptions:v}=t;return v!==void 0?v:e==null?void 0:e.mergedComponentPropsRef.value}),l=Je(()=>{const{clsPrefix:v}=t;return v!==void 0?v:e?e.mergedClsPrefixRef.value:pd}),c=Je(()=>{var v;const{rtl:g}=t;if(g===void 0)return e==null?void 0:e.mergedRtlRef.value;const p={};for(const S of g)p[S.name]=wc(S),(v=S.peers)===null||v===void 0||v.forEach(y=>{y.name in p||(p[y.name]=wc(y))});return p}),u=Je(()=>t.breakpoints||(e==null?void 0:e.mergedBreakpointsRef.value)),h=t.inlineThemeDisabled||(e==null?void 0:e.inlineThemeDisabled),d=t.preflightStyleDisabled||(e==null?void 0:e.preflightStyleDisabled),f=t.styleMountTarget||(e==null?void 0:e.styleMountTarget),m=Je(()=>{const{value:v}=n,{value:g}=i,p=g&&Object.keys(g).length!==0,S=v==null?void 0:v.name;return S?p?`${S}-${Sa(JSON.stringify(i.value))}`:S:p?Sa(JSON.stringify(i.value)):""});return dr(gr,{mergedThemeHashRef:m,mergedBreakpointsRef:u,mergedRtlRef:c,mergedIconsRef:s,mergedComponentPropsRef:a,mergedBorderedRef:o,mergedNamespaceRef:r,mergedClsPrefixRef:l,mergedLocaleRef:Je(()=>{const{locale:v}=t;if(v!==null)return v===void 0?e==null?void 0:e.mergedLocaleRef.value:v}),mergedDateLocaleRef:Je(()=>{const{dateLocale:v}=t;if(v!==null)return v===void 0?e==null?void 0:e.mergedDateLocaleRef.value:v}),mergedHljsRef:Je(()=>{const{hljs:v}=t;return v===void 0?e==null?void 0:e.mergedHljsRef.value:v}),mergedKatexRef:Je(()=>{const{katex:v}=t;return v===void 0?e==null?void 0:e.mergedKatexRef.value:v}),mergedThemeRef:n,mergedThemeOverridesRef:i,inlineThemeDisabled:h||!1,preflightStyleDisabled:d||!1,styleMountTarget:f}),{mergedClsPrefix:l,mergedBordered:o,mergedNamespace:r,mergedTheme:n,mergedThemeOverrides:i}},render(){var t,e,n,i;return this.abstract?(i=(n=this.$slots).default)===null||i===void 0?void 0:i.call(n):me(this.as||this.tag,{class:`${this.mergedClsPrefix||pd}-config-provider`},(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t))}}),j_={name:"Popselect",common:ve,peers:{Popover:co,InternalSelectMenu:tl}};function XP(t){const{boxShadow2:e}=t;return{menuBoxShadow:e}}const q_={name:"Select",common:ve,peers:{InternalSelection:rp,InternalSelectMenu:tl},self:XP},jP={itemPaddingSmall:"0 4px",itemMarginSmall:"0 0 0 8px",itemMarginSmallRtl:"0 8px 0 0",itemPaddingMedium:"0 4px",itemMarginMedium:"0 0 0 8px",itemMarginMediumRtl:"0 8px 0 0",itemPaddingLarge:"0 4px",itemMarginLarge:"0 0 0 8px",itemMarginLargeRtl:"0 8px 0 0",buttonIconSizeSmall:"14px",buttonIconSizeMedium:"16px",buttonIconSizeLarge:"18px",inputWidthSmall:"60px",selectWidthSmall:"unset",inputMarginSmall:"0 0 0 8px",inputMarginSmallRtl:"0 8px 0 0",selectMarginSmall:"0 0 0 8px",prefixMarginSmall:"0 8px 0 0",suffixMarginSmall:"0 0 0 8px",inputWidthMedium:"60px",selectWidthMedium:"unset",inputMarginMedium:"0 0 0 8px",inputMarginMediumRtl:"0 8px 0 0",selectMarginMedium:"0 0 0 8px",prefixMarginMedium:"0 8px 0 0",suffixMarginMedium:"0 0 0 8px",inputWidthLarge:"60px",selectWidthLarge:"unset",inputMarginLarge:"0 0 0 8px",inputMarginLargeRtl:"0 8px 0 0",selectMarginLarge:"0 0 0 8px",prefixMarginLarge:"0 8px 0 0",suffixMarginLarge:"0 0 0 8px"};function qP(t){const{textColor2:e,primaryColor:n,primaryColorHover:i,primaryColorPressed:r,inputColorDisabled:o,textColorDisabled:s,borderColor:a,borderRadius:l,fontSizeTiny:c,fontSizeSmall:u,fontSizeMedium:h,heightTiny:d,heightSmall:f,heightMedium:m}=t;return Object.assign(Object.assign({},jP),{buttonColor:"#0000",buttonColorHover:"#0000",buttonColorPressed:"#0000",buttonBorder:`1px solid ${a}`,buttonBorderHover:`1px solid ${a}`,buttonBorderPressed:`1px solid ${a}`,buttonIconColor:e,buttonIconColorHover:e,buttonIconColorPressed:e,itemTextColor:e,itemTextColorHover:i,itemTextColorPressed:r,itemTextColorActive:n,itemTextColorDisabled:s,itemColor:"#0000",itemColorHover:"#0000",itemColorPressed:"#0000",itemColorActive:"#0000",itemColorActiveHover:"#0000",itemColorDisabled:o,itemBorder:"1px solid #0000",itemBorderHover:"1px solid #0000",itemBorderPressed:"1px solid #0000",itemBorderActive:`1px solid ${n}`,itemBorderDisabled:`1px solid ${a}`,itemBorderRadius:l,itemSizeSmall:d,itemSizeMedium:f,itemSizeLarge:m,itemFontSizeSmall:c,itemFontSizeMedium:u,itemFontSizeLarge:h,jumperFontSizeSmall:c,jumperFontSizeMedium:u,jumperFontSizeLarge:h,jumperTextColor:e,jumperTextColorDisabled:s})}const Y_={name:"Pagination",common:ve,peers:{Select:q_,Input:kn,Popselect:j_},self(t){const{primaryColor:e,opacity3:n}=t,i=Ne(e,{alpha:Number(n)}),r=qP(t);return r.itemBorderActive=`1px solid ${i}`,r.itemBorderDisabled="1px solid #0000",r}},YP={padding:"8px 14px"},yu={name:"Tooltip",common:ve,peers:{Popover:co},self(t){const{borderRadius:e,boxShadow2:n,popoverColor:i,textColor2:r}=t;return Object.assign(Object.assign({},YP),{borderRadius:e,boxShadow:n,color:i,textColor:r})}},K_={name:"Ellipsis",common:ve,peers:{Tooltip:yu}},KP={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},Z_={name:"Radio",common:ve,self(t){const{borderColor:e,primaryColor:n,baseColor:i,textColorDisabled:r,inputColorDisabled:o,textColor2:s,opacityDisabled:a,borderRadius:l,fontSizeSmall:c,fontSizeMedium:u,fontSizeLarge:h,heightSmall:d,heightMedium:f,heightLarge:m,lineHeight:v}=t;return Object.assign(Object.assign({},KP),{labelLineHeight:v,buttonHeightSmall:d,buttonHeightMedium:f,buttonHeightLarge:m,fontSizeSmall:c,fontSizeMedium:u,fontSizeLarge:h,boxShadow:`inset 0 0 0 1px ${e}`,boxShadowActive:`inset 0 0 0 1px ${n}`,boxShadowFocus:`inset 0 0 0 1px ${n}, 0 0 0 2px ${Ne(n,{alpha:.3})}`,boxShadowHover:`inset 0 0 0 1px ${n}`,boxShadowDisabled:`inset 0 0 0 1px ${e}`,color:"#0000",colorDisabled:o,colorActive:"#0000",textColor:s,textColorDisabled:r,dotColorActive:n,dotColorDisabled:e,buttonBorderColor:e,buttonBorderColorActive:n,buttonBorderColorHover:n,buttonColor:"#0000",buttonColorActive:n,buttonTextColor:s,buttonTextColorActive:i,buttonTextColorHover:n,opacityDisabled:a,buttonBoxShadowFocus:`inset 0 0 0 1px ${n}, 0 0 0 2px ${Ne(n,{alpha:.3})}`,buttonBoxShadowHover:`inset 0 0 0 1px ${n}`,buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:l})}},ZP={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};function JP(t){const{primaryColor:e,textColor2:n,dividerColor:i,hoverColor:r,popoverColor:o,invertedColor:s,borderRadius:a,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:u,fontSizeHuge:h,heightSmall:d,heightMedium:f,heightLarge:m,heightHuge:v,textColor3:g,opacityDisabled:p}=t;return Object.assign(Object.assign({},ZP),{optionHeightSmall:d,optionHeightMedium:f,optionHeightLarge:m,optionHeightHuge:v,borderRadius:a,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:u,fontSizeHuge:h,optionTextColor:n,optionTextColorHover:n,optionTextColorActive:e,optionTextColorChildActive:e,color:o,dividerColor:i,suffixColor:n,prefixColor:n,optionColorHover:r,optionColorActive:Ne(e,{alpha:.1}),groupHeaderTextColor:g,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:s,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:e,optionColorActiveInverted:e,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:p})}const op={name:"Dropdown",common:ve,peers:{Popover:co},self(t){const{primaryColorSuppl:e,primaryColor:n,popoverColor:i}=t,r=JP(t);return r.colorInverted=i,r.optionColorActive=Ne(n,{alpha:.15}),r.optionColorActiveInverted=e,r.optionColorHoverInverted=e,r}},QP={thPaddingSmall:"8px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"8px",tdPaddingMedium:"12px",tdPaddingLarge:"12px",sorterSize:"15px",resizableContainerSize:"8px",resizableSize:"2px",filterSize:"15px",paginationMargin:"12px 0 0 0",emptyPadding:"48px 0",actionPadding:"8px 12px",actionButtonMargin:"0 8px 0 0"};function eR(t){const{cardColor:e,modalColor:n,popoverColor:i,textColor2:r,textColor1:o,tableHeaderColor:s,tableColorHover:a,iconColor:l,primaryColor:c,fontWeightStrong:u,borderRadius:h,lineHeight:d,fontSizeSmall:f,fontSizeMedium:m,fontSizeLarge:v,dividerColor:g,heightSmall:p,opacityDisabled:S,tableColorStriped:y}=t;return Object.assign(Object.assign({},QP),{actionDividerColor:g,lineHeight:d,borderRadius:h,fontSizeSmall:f,fontSizeMedium:m,fontSizeLarge:v,borderColor:ze(e,g),tdColorHover:ze(e,a),tdColorSorting:ze(e,a),tdColorStriped:ze(e,y),thColor:ze(e,s),thColorHover:ze(ze(e,s),a),thColorSorting:ze(ze(e,s),a),tdColor:e,tdTextColor:r,thTextColor:o,thFontWeight:u,thButtonColorHover:a,thIconColor:l,thIconColorActive:c,borderColorModal:ze(n,g),tdColorHoverModal:ze(n,a),tdColorSortingModal:ze(n,a),tdColorStripedModal:ze(n,y),thColorModal:ze(n,s),thColorHoverModal:ze(ze(n,s),a),thColorSortingModal:ze(ze(n,s),a),tdColorModal:n,borderColorPopover:ze(i,g),tdColorHoverPopover:ze(i,a),tdColorSortingPopover:ze(i,a),tdColorStripedPopover:ze(i,y),thColorPopover:ze(i,s),thColorHoverPopover:ze(ze(i,s),a),thColorSortingPopover:ze(ze(i,s),a),tdColorPopover:i,boxShadowBefore:"inset -12px 0 8px -12px rgba(0, 0, 0, .18)",boxShadowAfter:"inset 12px 0 8px -12px rgba(0, 0, 0, .18)",loadingColor:c,loadingSize:p,opacityLoading:S})}const tR={name:"DataTable",common:ve,peers:{Button:An,Checkbox:Es,Radio:Z_,Pagination:Y_,Scrollbar:Tn,Empty:lo,Popover:co,Ellipsis:K_,Dropdown:op},self(t){const e=eR(t);return e.boxShadowAfter="inset 12px 0 8px -12px rgba(0, 0, 0, .36)",e.boxShadowBefore="inset -12px 0 8px -12px rgba(0, 0, 0, .36)",e}};function nR(t){const{textColorBase:e,opacity1:n,opacity2:i,opacity3:r,opacity4:o,opacity5:s}=t;return{color:e,opacity1Depth:n,opacity2Depth:i,opacity3Depth:r,opacity4Depth:o,opacity5Depth:s}}const iR={name:"Icon",common:ve,self:nR},rR={itemFontSize:"12px",itemHeight:"36px",itemWidth:"52px",panelActionPadding:"8px 0"};function oR(t){const{popoverColor:e,textColor2:n,primaryColor:i,hoverColor:r,dividerColor:o,opacityDisabled:s,boxShadow2:a,borderRadius:l,iconColor:c,iconColorDisabled:u}=t;return Object.assign(Object.assign({},rR),{panelColor:e,panelBoxShadow:a,panelDividerColor:o,itemTextColor:n,itemTextColorActive:i,itemColorHover:r,itemOpacityDisabled:s,itemBorderRadius:l,borderRadius:l,iconColor:c,iconColorDisabled:u})}const J_={name:"TimePicker",common:ve,peers:{Scrollbar:Tn,Button:An,Input:kn},self:oR},sR={itemSize:"24px",itemCellWidth:"38px",itemCellHeight:"32px",scrollItemWidth:"80px",scrollItemHeight:"40px",panelExtraFooterPadding:"8px 12px",panelActionPadding:"8px 12px",calendarTitlePadding:"0",calendarTitleHeight:"28px",arrowSize:"14px",panelHeaderPadding:"8px 12px",calendarDaysHeight:"32px",calendarTitleGridTempateColumns:"28px 28px 1fr 28px 28px",calendarLeftPaddingDate:"6px 12px 4px 12px",calendarLeftPaddingDatetime:"4px 12px",calendarLeftPaddingDaterange:"6px 12px 4px 12px",calendarLeftPaddingDatetimerange:"4px 12px",calendarLeftPaddingMonth:"0",calendarLeftPaddingYear:"0",calendarLeftPaddingQuarter:"0",calendarLeftPaddingMonthrange:"0",calendarLeftPaddingQuarterrange:"0",calendarLeftPaddingYearrange:"0",calendarLeftPaddingWeek:"6px 12px 4px 12px",calendarRightPaddingDate:"6px 12px 4px 12px",calendarRightPaddingDatetime:"4px 12px",calendarRightPaddingDaterange:"6px 12px 4px 12px",calendarRightPaddingDatetimerange:"4px 12px",calendarRightPaddingMonth:"0",calendarRightPaddingYear:"0",calendarRightPaddingQuarter:"0",calendarRightPaddingMonthrange:"0",calendarRightPaddingQuarterrange:"0",calendarRightPaddingYearrange:"0",calendarRightPaddingWeek:"0"};function aR(t){const{hoverColor:e,fontSize:n,textColor2:i,textColorDisabled:r,popoverColor:o,primaryColor:s,borderRadiusSmall:a,iconColor:l,iconColorDisabled:c,textColor1:u,dividerColor:h,boxShadow2:d,borderRadius:f,fontWeightStrong:m}=t;return Object.assign(Object.assign({},sR),{itemFontSize:n,calendarDaysFontSize:n,calendarTitleFontSize:n,itemTextColor:i,itemTextColorDisabled:r,itemTextColorActive:o,itemTextColorCurrent:s,itemColorIncluded:Ne(s,{alpha:.1}),itemColorHover:e,itemColorDisabled:e,itemColorActive:s,itemBorderRadius:a,panelColor:o,panelTextColor:i,arrowColor:l,calendarTitleTextColor:u,calendarTitleColorHover:e,calendarDaysTextColor:i,panelHeaderDividerColor:h,calendarDaysDividerColor:h,calendarDividerColor:h,panelActionDividerColor:h,panelBoxShadow:d,panelBorderRadius:f,calendarTitleFontWeight:m,scrollItemBorderRadius:f,iconColor:l,iconColorDisabled:c})}const lR={name:"DatePicker",common:ve,peers:{Input:kn,Button:An,TimePicker:J_,Scrollbar:Tn},self(t){const{popoverColor:e,hoverColor:n,primaryColor:i}=t,r=aR(t);return r.itemColorDisabled=ze(e,n),r.itemColorIncluded=Ne(i,{alpha:.15}),r.itemColorHover=ze(e,n),r}},cR={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"};function uR(t){const{tableHeaderColor:e,textColor2:n,textColor1:i,cardColor:r,modalColor:o,popoverColor:s,dividerColor:a,borderRadius:l,fontWeightStrong:c,lineHeight:u,fontSizeSmall:h,fontSizeMedium:d,fontSizeLarge:f}=t;return Object.assign(Object.assign({},cR),{lineHeight:u,fontSizeSmall:h,fontSizeMedium:d,fontSizeLarge:f,titleTextColor:i,thColor:ze(r,e),thColorModal:ze(o,e),thColorPopover:ze(s,e),thTextColor:i,thFontWeight:c,tdTextColor:n,tdColor:r,tdColorModal:o,tdColorPopover:s,borderColor:ze(r,a),borderColorModal:ze(o,a),borderColorPopover:ze(s,a),borderRadius:l})}const hR={name:"Descriptions",common:ve,self:uR},dR={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"};function fR(t){const{textColor1:e,textColor2:n,modalColor:i,closeIconColor:r,closeIconColorHover:o,closeIconColorPressed:s,closeColorHover:a,closeColorPressed:l,infoColor:c,successColor:u,warningColor:h,errorColor:d,primaryColor:f,dividerColor:m,borderRadius:v,fontWeightStrong:g,lineHeight:p,fontSize:S}=t;return Object.assign(Object.assign({},dR),{fontSize:S,lineHeight:p,border:`1px solid ${m}`,titleTextColor:e,textColor:n,color:i,closeColorHover:a,closeColorPressed:l,closeIconColor:r,closeIconColorHover:o,closeIconColorPressed:s,closeBorderRadius:v,iconColor:f,iconColorInfo:c,iconColorSuccess:u,iconColorWarning:h,iconColorError:d,borderRadius:v,titleFontWeight:g})}const Q_={name:"Dialog",common:ve,peers:{Button:An},self:fR};function pR(t){const{modalColor:e,textColor2:n,boxShadow3:i}=t;return{color:e,textColor:n,boxShadow:i}}const mR={name:"Modal",common:ve,peers:{Scrollbar:Tn,Dialog:Q_,Card:W_},self:pR};function gR(t){const{textColor1:e,dividerColor:n,fontWeightStrong:i}=t;return{textColor:e,color:n,fontWeight:i}}const vR={name:"Divider",common:ve,self:gR};function xR(t){const{modalColor:e,textColor1:n,textColor2:i,boxShadow3:r,lineHeight:o,fontWeightStrong:s,dividerColor:a,closeColorHover:l,closeColorPressed:c,closeIconColor:u,closeIconColorHover:h,closeIconColorPressed:d,borderRadius:f,primaryColorHover:m}=t;return{bodyPadding:"16px 24px",borderRadius:f,headerPadding:"16px 24px",footerPadding:"16px 24px",color:e,textColor:i,titleTextColor:n,titleFontSize:"18px",titleFontWeight:s,boxShadow:r,lineHeight:o,headerBorderBottom:`1px solid ${a}`,footerBorderTop:`1px solid ${a}`,closeIconColor:u,closeIconColorHover:h,closeIconColorPressed:d,closeSize:"22px",closeIconSize:"18px",closeColorHover:l,closeColorPressed:c,closeBorderRadius:f,resizableTriggerColorHover:m}}const _R={name:"Drawer",common:ve,peers:{Scrollbar:Tn},self:xR},bR={actionMargin:"0 0 0 20px",actionMarginRtl:"0 20px 0 0"},yR={name:"DynamicInput",common:ve,peers:{Input:kn,Button:An},self(){return bR}},SR={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},eb={name:"Space",self(){return SR}},CR={name:"DynamicTags",common:ve,peers:{Input:kn,Button:An,Tag:k_,Space:eb},self(){return{inputWidth:"64px"}}},MR={name:"Element",common:ve},wR={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},ER={name:"Flex",self(){return wR}},TR={feedbackPadding:"4px 0 0 2px",feedbackHeightSmall:"24px",feedbackHeightMedium:"24px",feedbackHeightLarge:"26px",feedbackFontSizeSmall:"13px",feedbackFontSizeMedium:"14px",feedbackFontSizeLarge:"14px",labelFontSizeLeftSmall:"14px",labelFontSizeLeftMedium:"14px",labelFontSizeLeftLarge:"15px",labelFontSizeTopSmall:"13px",labelFontSizeTopMedium:"14px",labelFontSizeTopLarge:"14px",labelHeightSmall:"24px",labelHeightMedium:"26px",labelHeightLarge:"28px",labelPaddingVertical:"0 0 6px 2px",labelPaddingHorizontal:"0 12px 0 0",labelTextAlignVertical:"left",labelTextAlignHorizontal:"right",labelFontWeight:"400"};function AR(t){const{heightSmall:e,heightMedium:n,heightLarge:i,textColor1:r,errorColor:o,warningColor:s,lineHeight:a,textColor3:l}=t;return Object.assign(Object.assign({},TR),{blankHeightSmall:e,blankHeightMedium:n,blankHeightLarge:i,lineHeight:a,labelTextColor:r,asteriskColor:o,feedbackTextColorError:o,feedbackTextColorWarning:s,feedbackTextColor:l})}const PR={name:"Form",common:ve,self:AR},RR={closeMargin:"16px 12px",closeSize:"20px",closeIconSize:"16px",width:"365px",padding:"16px",titleFontSize:"16px",metaFontSize:"12px",descriptionFontSize:"12px"};function LR(t){const{textColor2:e,successColor:n,infoColor:i,warningColor:r,errorColor:o,popoverColor:s,closeIconColor:a,closeIconColorHover:l,closeIconColorPressed:c,closeColorHover:u,closeColorPressed:h,textColor1:d,textColor3:f,borderRadius:m,fontWeightStrong:v,boxShadow2:g,lineHeight:p,fontSize:S}=t;return Object.assign(Object.assign({},RR),{borderRadius:m,lineHeight:p,fontSize:S,headerFontWeight:v,iconColor:e,iconColorSuccess:n,iconColorInfo:i,iconColorWarning:r,iconColorError:o,color:s,textColor:e,closeIconColor:a,closeIconColorHover:l,closeIconColorPressed:c,closeBorderRadius:m,closeColorHover:u,closeColorPressed:h,headerTextColor:d,descriptionTextColor:f,actionTextColor:e,boxShadow:g})}const DR={name:"Notification",common:ve,peers:{Scrollbar:Tn},self:LR},IR={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"};function tb(t){const{textColor2:e,closeIconColor:n,closeIconColorHover:i,closeIconColorPressed:r,infoColor:o,successColor:s,errorColor:a,warningColor:l,popoverColor:c,boxShadow2:u,primaryColor:h,lineHeight:d,borderRadius:f,closeColorHover:m,closeColorPressed:v}=t;return Object.assign(Object.assign({},IR),{closeBorderRadius:f,textColor:e,textColorInfo:e,textColorSuccess:e,textColorError:e,textColorWarning:e,textColorLoading:e,color:c,colorInfo:c,colorSuccess:c,colorError:c,colorWarning:c,colorLoading:c,boxShadow:u,boxShadowInfo:u,boxShadowSuccess:u,boxShadowError:u,boxShadowWarning:u,boxShadowLoading:u,iconColor:e,iconColorInfo:o,iconColorSuccess:s,iconColorWarning:l,iconColorError:a,iconColorLoading:h,closeColorHover:m,closeColorPressed:v,closeIconColor:n,closeIconColorHover:i,closeIconColorPressed:r,closeColorHoverInfo:m,closeColorPressedInfo:v,closeIconColorInfo:n,closeIconColorHoverInfo:i,closeIconColorPressedInfo:r,closeColorHoverSuccess:m,closeColorPressedSuccess:v,closeIconColorSuccess:n,closeIconColorHoverSuccess:i,closeIconColorPressedSuccess:r,closeColorHoverError:m,closeColorPressedError:v,closeIconColorError:n,closeIconColorHoverError:i,closeIconColorPressedError:r,closeColorHoverWarning:m,closeColorPressedWarning:v,closeIconColorWarning:n,closeIconColorHoverWarning:i,closeIconColorPressedWarning:r,closeColorHoverLoading:m,closeColorPressedLoading:v,closeIconColorLoading:n,closeIconColorHoverLoading:i,closeIconColorPressedLoading:r,loadingColor:h,lineHeight:d,borderRadius:f})}const OR={name:"Message",common:ws,self:tb},NR={name:"Message",common:ve,self:tb},FR={name:"ButtonGroup",common:ve},UR={name:"GradientText",common:ve,self(t){const{primaryColor:e,successColor:n,warningColor:i,errorColor:r,infoColor:o,primaryColorSuppl:s,successColorSuppl:a,warningColorSuppl:l,errorColorSuppl:c,infoColorSuppl:u,fontWeightStrong:h}=t;return{fontWeight:h,rotate:"252deg",colorStartPrimary:e,colorEndPrimary:s,colorStartInfo:o,colorEndInfo:u,colorStartWarning:i,colorEndWarning:l,colorStartError:r,colorEndError:c,colorStartSuccess:n,colorEndSuccess:a}}},zR={name:"InputNumber",common:ve,peers:{Button:An,Input:kn},self(t){const{textColorDisabled:e}=t;return{iconColorDisabled:e}}},BR={name:"Layout",common:ve,peers:{Scrollbar:Tn},self(t){const{textColor2:e,bodyColor:n,popoverColor:i,cardColor:r,dividerColor:o,scrollbarColor:s,scrollbarColorHover:a}=t;return{textColor:e,textColorInverted:e,color:n,colorEmbedded:n,headerColor:r,headerColorInverted:r,footerColor:r,footerColorInverted:r,headerBorderColor:o,headerBorderColorInverted:o,footerBorderColor:o,footerBorderColorInverted:o,siderBorderColor:o,siderBorderColorInverted:o,siderColor:r,siderColorInverted:r,siderToggleButtonBorder:"1px solid transparent",siderToggleButtonColor:i,siderToggleButtonIconColor:e,siderToggleButtonIconColorInverted:e,siderToggleBarColor:ze(n,s),siderToggleBarColorHover:ze(n,a),__invertScrollbar:"false"}}};function HR(t){const{textColor2:e,cardColor:n,modalColor:i,popoverColor:r,dividerColor:o,borderRadius:s,fontSize:a,hoverColor:l}=t;return{textColor:e,color:n,colorHover:l,colorModal:i,colorHoverModal:ze(i,l),colorPopover:r,colorHoverPopover:ze(r,l),borderColor:o,borderColorModal:ze(i,o),borderColorPopover:ze(r,o),borderRadius:s,fontSize:a}}const kR={name:"List",common:ve,self:HR},VR={name:"LoadingBar",common:ve,self(t){const{primaryColor:e}=t;return{colorError:"red",colorLoading:e,height:"2px"}}},$R={name:"Log",common:ve,peers:{Scrollbar:Tn,Code:X_},self(t){const{textColor2:e,inputColor:n,fontSize:i,primaryColor:r}=t;return{loaderFontSize:i,loaderTextColor:e,loaderColor:n,loaderBorder:"1px solid #0000",loadingColor:r}}},GR={name:"Mention",common:ve,peers:{InternalSelectMenu:tl,Input:kn},self(t){const{boxShadow2:e}=t;return{menuBoxShadow:e}}};function WR(t,e,n,i){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:e,itemColorActiveHoverInverted:e,itemColorActiveCollapsedInverted:e,itemTextColorInverted:t,itemTextColorHoverInverted:n,itemTextColorChildActiveInverted:n,itemTextColorChildActiveHoverInverted:n,itemTextColorActiveInverted:n,itemTextColorActiveHoverInverted:n,itemTextColorHorizontalInverted:t,itemTextColorHoverHorizontalInverted:n,itemTextColorChildActiveHorizontalInverted:n,itemTextColorChildActiveHoverHorizontalInverted:n,itemTextColorActiveHorizontalInverted:n,itemTextColorActiveHoverHorizontalInverted:n,itemIconColorInverted:t,itemIconColorHoverInverted:n,itemIconColorActiveInverted:n,itemIconColorActiveHoverInverted:n,itemIconColorChildActiveInverted:n,itemIconColorChildActiveHoverInverted:n,itemIconColorCollapsedInverted:t,itemIconColorHorizontalInverted:t,itemIconColorHoverHorizontalInverted:n,itemIconColorActiveHorizontalInverted:n,itemIconColorActiveHoverHorizontalInverted:n,itemIconColorChildActiveHorizontalInverted:n,itemIconColorChildActiveHoverHorizontalInverted:n,arrowColorInverted:t,arrowColorHoverInverted:n,arrowColorActiveInverted:n,arrowColorActiveHoverInverted:n,arrowColorChildActiveInverted:n,arrowColorChildActiveHoverInverted:n,groupTextColorInverted:i}}function XR(t){const{borderRadius:e,textColor3:n,primaryColor:i,textColor2:r,textColor1:o,fontSize:s,dividerColor:a,hoverColor:l,primaryColorHover:c}=t;return Object.assign({borderRadius:e,color:"#0000",groupTextColor:n,itemColorHover:l,itemColorActive:Ne(i,{alpha:.1}),itemColorActiveHover:Ne(i,{alpha:.1}),itemColorActiveCollapsed:Ne(i,{alpha:.1}),itemTextColor:r,itemTextColorHover:r,itemTextColorActive:i,itemTextColorActiveHover:i,itemTextColorChildActive:i,itemTextColorChildActiveHover:i,itemTextColorHorizontal:r,itemTextColorHoverHorizontal:c,itemTextColorActiveHorizontal:i,itemTextColorActiveHoverHorizontal:i,itemTextColorChildActiveHorizontal:i,itemTextColorChildActiveHoverHorizontal:i,itemIconColor:o,itemIconColorHover:o,itemIconColorActive:i,itemIconColorActiveHover:i,itemIconColorChildActive:i,itemIconColorChildActiveHover:i,itemIconColorCollapsed:o,itemIconColorHorizontal:o,itemIconColorHoverHorizontal:c,itemIconColorActiveHorizontal:i,itemIconColorActiveHoverHorizontal:i,itemIconColorChildActiveHorizontal:i,itemIconColorChildActiveHoverHorizontal:i,itemHeight:"42px",arrowColor:r,arrowColorHover:r,arrowColorActive:i,arrowColorActiveHover:i,arrowColorChildActive:i,arrowColorChildActiveHover:i,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:s,dividerColor:a},WR("#BBB",i,"#FFF","#AAA"))}const jR={name:"Menu",common:ve,peers:{Tooltip:yu,Dropdown:op},self(t){const{primaryColor:e,primaryColorSuppl:n}=t,i=XR(t);return i.itemColorActive=Ne(e,{alpha:.15}),i.itemColorActiveHover=Ne(e,{alpha:.15}),i.itemColorActiveCollapsed=Ne(e,{alpha:.15}),i.itemColorActiveInverted=n,i.itemColorActiveHoverInverted=n,i.itemColorActiveCollapsedInverted=n,i}},qR={titleFontSize:"18px",backSize:"22px"};function YR(t){const{textColor1:e,textColor2:n,textColor3:i,fontSize:r,fontWeightStrong:o,primaryColorHover:s,primaryColorPressed:a}=t;return Object.assign(Object.assign({},qR),{titleFontWeight:o,fontSize:r,titleTextColor:e,backColor:n,backColorHover:s,backColorPressed:a,subtitleTextColor:i})}const KR={name:"PageHeader",common:ve,self:YR},ZR={iconSize:"22px"};function JR(t){const{fontSize:e,warningColor:n}=t;return Object.assign(Object.assign({},ZR),{fontSize:e,iconColor:n})}const QR={name:"Popconfirm",common:ve,peers:{Button:An,Popover:co},self:JR};function e2(t){const{infoColor:e,successColor:n,warningColor:i,errorColor:r,textColor2:o,progressRailColor:s,fontSize:a,fontWeight:l}=t;return{fontSize:a,fontSizeCircle:"28px",fontWeightCircle:l,railColor:s,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:e,iconColorInfo:e,iconColorSuccess:n,iconColorWarning:i,iconColorError:r,textColorCircle:o,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:o,fillColor:e,fillColorInfo:e,fillColorSuccess:n,fillColorWarning:i,fillColorError:r,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}}const nb={name:"Progress",common:ve,self(t){const e=e2(t);return e.textColorLineInner="rgb(0, 0, 0)",e.lineBgProcessing="linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)",e}},t2={name:"Rate",common:ve,self(t){const{railColor:e}=t;return{itemColor:e,itemColorActive:"#CCAA33",itemSize:"20px",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}},n2={titleFontSizeSmall:"26px",titleFontSizeMedium:"32px",titleFontSizeLarge:"40px",titleFontSizeHuge:"48px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",iconSizeSmall:"64px",iconSizeMedium:"80px",iconSizeLarge:"100px",iconSizeHuge:"125px",iconColor418:void 0,iconColor404:void 0,iconColor403:void 0,iconColor500:void 0};function i2(t){const{textColor2:e,textColor1:n,errorColor:i,successColor:r,infoColor:o,warningColor:s,lineHeight:a,fontWeightStrong:l}=t;return Object.assign(Object.assign({},n2),{lineHeight:a,titleFontWeight:l,titleTextColor:n,textColor:e,iconColorError:i,iconColorSuccess:r,iconColorInfo:o,iconColorWarning:s})}const r2={name:"Result",common:ve,self:i2},o2={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"},s2={name:"Slider",common:ve,self(t){const e="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:n,modalColor:i,primaryColorSuppl:r,popoverColor:o,textColor2:s,cardColor:a,borderRadius:l,fontSize:c,opacityDisabled:u}=t;return Object.assign(Object.assign({},o2),{fontSize:c,markFontSize:c,railColor:n,railColorHover:n,fillColor:r,fillColorHover:r,opacityDisabled:u,handleColor:"#FFF",dotColor:a,dotColorModal:i,dotColorPopover:o,handleBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowHover:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowActive:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowFocus:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",indicatorColor:o,indicatorBoxShadow:e,indicatorTextColor:s,indicatorBorderRadius:l,dotBorder:`2px solid ${n}`,dotBorderActive:`2px solid ${r}`,dotBoxShadow:""})}};function a2(t){const{opacityDisabled:e,heightTiny:n,heightSmall:i,heightMedium:r,heightLarge:o,heightHuge:s,primaryColor:a,fontSize:l}=t;return{fontSize:l,textColor:a,sizeTiny:n,sizeSmall:i,sizeMedium:r,sizeLarge:o,sizeHuge:s,color:a,opacitySpinning:e}}const l2={name:"Spin",common:ve,self:a2};function c2(t){const{textColor2:e,textColor3:n,fontSize:i,fontWeight:r}=t;return{labelFontSize:i,labelFontWeight:r,valueFontWeight:r,valueFontSize:"24px",labelTextColor:n,valuePrefixTextColor:e,valueSuffixTextColor:e,valueTextColor:e}}const u2={name:"Statistic",common:ve,self:c2},h2={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"};function d2(t){const{fontWeightStrong:e,baseColor:n,textColorDisabled:i,primaryColor:r,errorColor:o,textColor1:s,textColor2:a}=t;return Object.assign(Object.assign({},h2),{stepHeaderFontWeight:e,indicatorTextColorProcess:n,indicatorTextColorWait:i,indicatorTextColorFinish:r,indicatorTextColorError:o,indicatorBorderColorProcess:r,indicatorBorderColorWait:i,indicatorBorderColorFinish:r,indicatorBorderColorError:o,indicatorColorProcess:r,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:i,splitorColorWait:i,splitorColorFinish:r,splitorColorError:i,headerTextColorProcess:s,headerTextColorWait:i,headerTextColorFinish:i,headerTextColorError:o,descriptionTextColorProcess:a,descriptionTextColorWait:i,descriptionTextColorFinish:i,descriptionTextColorError:o})}const f2={name:"Steps",common:ve,self:d2},p2={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},m2={name:"Switch",common:ve,self(t){const{primaryColorSuppl:e,opacityDisabled:n,borderRadius:i,primaryColor:r,textColor2:o,baseColor:s}=t;return Object.assign(Object.assign({},p2),{iconColor:s,textColor:o,loadingColor:e,opacityDisabled:n,railColor:"rgba(255, 255, 255, .20)",railColorActive:e,buttonBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",buttonColor:"#FFF",railBorderRadiusSmall:i,railBorderRadiusMedium:i,railBorderRadiusLarge:i,buttonBorderRadiusSmall:i,buttonBorderRadiusMedium:i,buttonBorderRadiusLarge:i,boxShadowFocus:`0 0 8px 0 ${Ne(r,{alpha:.3})}`})}},g2={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"};function v2(t){const{dividerColor:e,cardColor:n,modalColor:i,popoverColor:r,tableHeaderColor:o,tableColorStriped:s,textColor1:a,textColor2:l,borderRadius:c,fontWeightStrong:u,lineHeight:h,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:m}=t;return Object.assign(Object.assign({},g2),{fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:m,lineHeight:h,borderRadius:c,borderColor:ze(n,e),borderColorModal:ze(i,e),borderColorPopover:ze(r,e),tdColor:n,tdColorModal:i,tdColorPopover:r,tdColorStriped:ze(n,s),tdColorStripedModal:ze(i,s),tdColorStripedPopover:ze(r,s),thColor:ze(n,o),thColorModal:ze(i,o),thColorPopover:ze(r,o),thTextColor:a,tdTextColor:l,thFontWeight:u})}const x2={name:"Table",common:ve,self:v2},_2={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"};function ib(t){const{textColor2:e,primaryColor:n,textColorDisabled:i,closeIconColor:r,closeIconColorHover:o,closeIconColorPressed:s,closeColorHover:a,closeColorPressed:l,tabColor:c,baseColor:u,dividerColor:h,fontWeight:d,textColor1:f,borderRadius:m,fontSize:v,fontWeightStrong:g}=t;return Object.assign(Object.assign({},_2),{colorSegment:c,tabFontSizeCard:v,tabTextColorLine:f,tabTextColorActiveLine:n,tabTextColorHoverLine:n,tabTextColorDisabledLine:i,tabTextColorSegment:f,tabTextColorActiveSegment:e,tabTextColorHoverSegment:e,tabTextColorDisabledSegment:i,tabTextColorBar:f,tabTextColorActiveBar:n,tabTextColorHoverBar:n,tabTextColorDisabledBar:i,tabTextColorCard:f,tabTextColorHoverCard:f,tabTextColorActiveCard:n,tabTextColorDisabledCard:i,barColor:n,closeIconColor:r,closeIconColorHover:o,closeIconColorPressed:s,closeColorHover:a,closeColorPressed:l,closeBorderRadius:m,tabColor:c,tabColorSegment:u,tabBorderColor:h,tabFontWeightActive:d,tabFontWeight:d,tabBorderRadius:m,paneTextColor:e,fontWeightStrong:g})}const b2={name:"Tabs",common:ws,self:ib},y2={name:"Tabs",common:ve,self(t){const e=ib(t),{inputColor:n}=t;return e.colorSegment=n,e.tabColorSegment=n,e}};function S2(t){const{textColor1:e,textColor2:n,fontWeightStrong:i,fontSize:r}=t;return{fontSize:r,titleTextColor:e,textColor:n,titleFontWeight:i}}const C2={name:"Thing",common:ve,self:S2},M2={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"},w2={name:"Timeline",common:ve,self(t){const{textColor3:e,infoColorSuppl:n,errorColorSuppl:i,successColorSuppl:r,warningColorSuppl:o,textColor1:s,textColor2:a,railColor:l,fontWeightStrong:c,fontSize:u}=t;return Object.assign(Object.assign({},M2),{contentFontSize:u,titleFontWeight:c,circleBorder:`2px solid ${e}`,circleBorderInfo:`2px solid ${n}`,circleBorderError:`2px solid ${i}`,circleBorderSuccess:`2px solid ${r}`,circleBorderWarning:`2px solid ${o}`,iconColor:e,iconColorInfo:n,iconColorError:i,iconColorSuccess:r,iconColorWarning:o,titleTextColor:s,contentTextColor:a,metaTextColor:e,lineColor:l})}},E2={extraFontSizeSmall:"12px",extraFontSizeMedium:"12px",extraFontSizeLarge:"14px",titleFontSizeSmall:"14px",titleFontSizeMedium:"16px",titleFontSizeLarge:"16px",closeSize:"20px",closeIconSize:"16px",headerHeightSmall:"44px",headerHeightMedium:"44px",headerHeightLarge:"50px"},T2={name:"Transfer",common:ve,peers:{Checkbox:Es,Scrollbar:Tn,Input:kn,Empty:lo,Button:An},self(t){const{fontWeight:e,fontSizeLarge:n,fontSizeMedium:i,fontSizeSmall:r,heightLarge:o,heightMedium:s,borderRadius:a,inputColor:l,tableHeaderColor:c,textColor1:u,textColorDisabled:h,textColor2:d,textColor3:f,hoverColor:m,closeColorHover:v,closeColorPressed:g,closeIconColor:p,closeIconColorHover:S,closeIconColorPressed:y,dividerColor:w}=t;return Object.assign(Object.assign({},E2),{itemHeightSmall:s,itemHeightMedium:s,itemHeightLarge:o,fontSizeSmall:r,fontSizeMedium:i,fontSizeLarge:n,borderRadius:a,dividerColor:w,borderColor:"#0000",listColor:l,headerColor:c,titleTextColor:u,titleTextColorDisabled:h,extraTextColor:f,extraTextColorDisabled:h,itemTextColor:d,itemTextColorDisabled:h,itemColorPending:m,titleFontWeight:e,closeColorHover:v,closeColorPressed:g,closeIconColor:p,closeIconColorHover:S,closeIconColorPressed:y})}};function A2(t){const{borderRadiusSmall:e,dividerColor:n,hoverColor:i,pressedColor:r,primaryColor:o,textColor3:s,textColor2:a,textColorDisabled:l,fontSize:c}=t;return{fontSize:c,lineHeight:"1.5",nodeHeight:"30px",nodeWrapperPadding:"3px 0",nodeBorderRadius:e,nodeColorHover:i,nodeColorPressed:r,nodeColorActive:Ne(o,{alpha:.1}),arrowColor:s,nodeTextColor:a,nodeTextColorDisabled:l,loadingColor:o,dropMarkColor:o,lineColor:n}}const rb={name:"Tree",common:ve,peers:{Checkbox:Es,Scrollbar:Tn,Empty:lo},self(t){const{primaryColor:e}=t,n=A2(t);return n.nodeColorActive=Ne(e,{alpha:.15}),n}},P2={name:"TreeSelect",common:ve,peers:{Tree:rb,Empty:lo,InternalSelection:rp}},R2={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"};function L2(t){const{primaryColor:e,textColor2:n,borderColor:i,lineHeight:r,fontSize:o,borderRadiusSmall:s,dividerColor:a,fontWeightStrong:l,textColor1:c,textColor3:u,infoColor:h,warningColor:d,errorColor:f,successColor:m,codeColor:v}=t;return Object.assign(Object.assign({},R2),{aTextColor:e,blockquoteTextColor:n,blockquotePrefixColor:i,blockquoteLineHeight:r,blockquoteFontSize:o,codeBorderRadius:s,liTextColor:n,liLineHeight:r,liFontSize:o,hrColor:a,headerFontWeight:l,headerTextColor:c,pTextColor:n,pTextColor1Depth:c,pTextColor2Depth:n,pTextColor3Depth:u,pLineHeight:r,pFontSize:o,headerBarColor:e,headerBarColorPrimary:e,headerBarColorInfo:h,headerBarColorError:f,headerBarColorWarning:d,headerBarColorSuccess:m,textColor:n,textColor1Depth:c,textColor2Depth:n,textColor3Depth:u,textColorPrimary:e,textColorInfo:h,textColorSuccess:m,textColorWarning:d,textColorError:f,codeTextColor:n,codeColor:v,codeBorder:"1px solid #0000"})}const D2={name:"Typography",common:ve,self:L2};function I2(t){const{iconColor:e,primaryColor:n,errorColor:i,textColor2:r,successColor:o,opacityDisabled:s,actionColor:a,borderColor:l,hoverColor:c,lineHeight:u,borderRadius:h,fontSize:d}=t;return{fontSize:d,lineHeight:u,borderRadius:h,draggerColor:a,draggerBorder:`1px dashed ${l}`,draggerBorderHover:`1px dashed ${n}`,itemColorHover:c,itemColorHoverError:Ne(i,{alpha:.06}),itemTextColor:r,itemTextColorError:i,itemTextColorSuccess:o,itemIconColor:e,itemDisabledOpacity:s,itemBorderImageCardError:`1px solid ${i}`,itemBorderImageCard:`1px solid ${l}`}}const O2={name:"Upload",common:ve,peers:{Button:An,Progress:nb},self(t){const{errorColor:e}=t,n=I2(t);return n.itemColorHoverError=Ne(e,{alpha:.09}),n}},N2={name:"Watermark",common:ve,self(t){const{fontFamily:e}=t;return{fontFamily:e}}},F2={name:"Row",common:ve},U2={name:"FloatButton",common:ve,self(t){const{popoverColor:e,textColor2:n,buttonColor2Hover:i,buttonColor2Pressed:r,primaryColor:o,primaryColorHover:s,primaryColorPressed:a,baseColor:l,borderRadius:c}=t;return{color:e,textColor:n,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)",colorHover:i,colorPressed:r,colorPrimary:o,colorPrimaryHover:s,colorPrimaryPressed:a,textColorPrimary:l,borderRadiusSquare:c}}};function z2(t){const{primaryColor:e,baseColor:n}=t;return{color:e,iconColor:n}}const B2={name:"IconWrapper",common:ve,self:z2},H2={name:"Image",common:ve,peers:{Tooltip:yu},self:t=>{const{textColor2:e}=t;return{toolbarIconColor:e,toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}},k2={extraFontSize:"12px",width:"440px"},V2={name:"Transfer",common:ve,peers:{Checkbox:Es,Scrollbar:Tn,Input:kn,Empty:lo,Button:An},self(t){const{iconColorDisabled:e,iconColor:n,fontWeight:i,fontSizeLarge:r,fontSizeMedium:o,fontSizeSmall:s,heightLarge:a,heightMedium:l,heightSmall:c,borderRadius:u,inputColor:h,tableHeaderColor:d,textColor1:f,textColorDisabled:m,textColor2:v,hoverColor:g}=t;return Object.assign(Object.assign({},k2),{itemHeightSmall:c,itemHeightMedium:l,itemHeightLarge:a,fontSizeSmall:s,fontSizeMedium:o,fontSizeLarge:r,borderRadius:u,borderColor:"#0000",listColor:h,headerColor:d,titleTextColor:f,titleTextColorDisabled:m,extraTextColor:v,filterDividerColor:"#0000",itemTextColor:v,itemTextColorDisabled:m,itemColorPending:g,titleFontWeight:i,iconColor:n,iconColorDisabled:e})}},ob={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},$2="n-message-api",sb="n-message-provider",G2=qe([Te("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[hP({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),Te("message",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `,[Mt("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),Mt("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(t=>Xe(`${t}-type`,[qe("> *",`
 color: var(--n-icon-color-${t});
 transition: color .3s var(--n-bezier);
 `)])),qe("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[md()])]),Mt("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[qe("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),qe("&:active",`
 color: var(--n-close-icon-color-pressed);
 `)])]),Te("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[Xe("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),Xe("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),Xe("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),Xe("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),Xe("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),Xe("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]),W2={info:()=>me(UA,null),success:()=>me(zA,null),warning:()=>me(BA,null),error:()=>me(FA,null),default:()=>null},X2=Lt({name:"Message",props:Object.assign(Object.assign({},ob),{render:Function}),setup(t){const{inlineThemeDisabled:e,mergedRtlRef:n}=tp(t),{props:i,mergedClsPrefixRef:r}=Bt(sb),o=IA("Message",n,r),s=Qa("Message","-message",G2,OR,i,r),a=Je(()=>{const{type:c}=t,{common:{cubicBezierEaseInOut:u},self:{padding:h,margin:d,maxWidth:f,iconMargin:m,closeMargin:v,closeSize:g,iconSize:p,fontSize:S,lineHeight:y,borderRadius:w,iconColorInfo:L,iconColorSuccess:E,iconColorWarning:T,iconColorError:D,iconColorLoading:z,closeIconSize:b,closeBorderRadius:M,[Wt("textColor",c)]:I,[Wt("boxShadow",c)]:N,[Wt("color",c)]:W,[Wt("closeColorHover",c)]:ne,[Wt("closeColorPressed",c)]:X,[Wt("closeIconColor",c)]:te,[Wt("closeIconColorPressed",c)]:j,[Wt("closeIconColorHover",c)]:pe}}=s.value;return{"--n-bezier":u,"--n-margin":d,"--n-padding":h,"--n-max-width":f,"--n-font-size":S,"--n-icon-margin":m,"--n-icon-size":p,"--n-close-icon-size":b,"--n-close-border-radius":M,"--n-close-size":g,"--n-close-margin":v,"--n-text-color":I,"--n-color":W,"--n-box-shadow":N,"--n-icon-color-info":L,"--n-icon-color-success":E,"--n-icon-color-warning":T,"--n-icon-color-error":D,"--n-icon-color-loading":z,"--n-close-color-hover":ne,"--n-close-color-pressed":X,"--n-close-icon-color":te,"--n-close-icon-color-pressed":j,"--n-close-icon-color-hover":pe,"--n-line-height":y,"--n-border-radius":w}}),l=e?O_("message",Je(()=>t.type[0]),a,{}):void 0;return{mergedClsPrefix:r,rtlEnabled:o,messageProviderProps:i,handleClose(){var c;(c=t.onClose)===null||c===void 0||c.call(t)},cssVars:e?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender,placement:i.placement}},render(){const{render:t,type:e,closable:n,content:i,mergedClsPrefix:r,cssVars:o,themeClass:s,onRender:a,icon:l,handleClose:c,showIcon:u}=this;a==null||a();let h;return me("div",{class:[`${r}-message-wrapper`,s],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},o]},t?t(this.$props):me("div",{class:[`${r}-message ${r}-message--${e}-type`,this.rtlEnabled&&`${r}-message--rtl`]},(h=j2(l,e,r))&&u?me("div",{class:`${r}-message__icon ${r}-message__icon--${e}-type`},me(N_,null,{default:()=>h})):null,me("div",{class:`${r}-message__content`},Xx(i)),n?me(F_,{clsPrefix:r,class:`${r}-message__close`,onClick:c,absolute:!0}):null))}});function j2(t,e,n){if(typeof t=="function")return t();{const i=e==="loading"?me(XA,{clsPrefix:n,strokeWidth:24,scale:.85}):W2[e]();return i?me(ip,{clsPrefix:n,key:e},{default:()=>i}):null}}const q2=Lt({name:"MessageEnvironment",props:Object.assign(Object.assign({},ob),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(t){let e=null;const n=lt(!0);ri(()=>{i()});function i(){const{duration:u}=t;u&&(e=window.setTimeout(s,u))}function r(u){u.currentTarget===u.target&&e!==null&&(window.clearTimeout(e),e=null)}function o(u){u.currentTarget===u.target&&i()}function s(){const{onHide:u}=t;n.value=!1,e&&(window.clearTimeout(e),e=null),u&&u()}function a(){const{onClose:u}=t;u&&u(),s()}function l(){const{onAfterLeave:u,onInternalAfterLeave:h,onAfterHide:d,internalKey:f}=t;u&&u(),h&&h(f),d&&d()}function c(){s()}return{show:n,hide:s,handleClose:a,handleAfterLeave:l,handleMouseleave:o,handleMouseenter:r,deactivate:c}},render(){return me(HA,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?me(X2,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),Y2=Object.assign(Object.assign({},Qa.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerClass:String,containerStyle:[String,Object]}),K2=Lt({name:"MessageProvider",props:Y2,setup(t){const{mergedClsPrefixRef:e}=tp(t),n=lt([]),i=lt({}),r={create(l,c){return o(l,Object.assign({type:"default"},c))},info(l,c){return o(l,Object.assign(Object.assign({},c),{type:"info"}))},success(l,c){return o(l,Object.assign(Object.assign({},c),{type:"success"}))},warning(l,c){return o(l,Object.assign(Object.assign({},c),{type:"warning"}))},error(l,c){return o(l,Object.assign(Object.assign({},c),{type:"error"}))},loading(l,c){return o(l,Object.assign(Object.assign({},c),{type:"loading"}))},destroyAll:a};dr(sb,{props:t,mergedClsPrefixRef:e}),dr($2,r);function o(l,c){const u=h1(),h=Ga(Object.assign(Object.assign({},c),{content:l,key:u,destroy:()=>{var f;(f=i.value[u])===null||f===void 0||f.hide()}})),{max:d}=t;return d&&n.value.length>=d&&n.value.shift(),n.value.push(h),h}function s(l){n.value.splice(n.value.findIndex(c=>c.key===l),1),delete i.value[l]}function a(){Object.values(i.value).forEach(l=>{l.hide()})}return Object.assign({mergedClsPrefix:e,messageRefs:i,messageList:n,handleAfterLeave:s},r)},render(){var t,e,n;return me(Xt,null,(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t),this.messageList.length?me(QS,{to:(n=this.to)!==null&&n!==void 0?n:"body"},me("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`,this.containerClass],key:"message-container",style:this.containerStyle},this.messageList.map(i=>me(q2,Object.assign({ref:r=>{r&&(this.messageRefs[i.key]=r)},internalKey:i.key,onInternalAfterLeave:this.handleAfterLeave},Wx(i,["destroy"],void 0),{duration:i.duration===void 0?this.duration:i.duration,keepAliveOnHover:i.keepAliveOnHover===void 0?this.keepAliveOnHover:i.keepAliveOnHover,closable:i.closable===void 0?this.closable:i.closable}))))):null)}}),Z2={name:"QrCode",common:ve,self:t=>({borderRadius:t.borderRadius})},J2={name:"Skeleton",common:ve,self(t){const{heightSmall:e,heightMedium:n,heightLarge:i,borderRadius:r}=t;return{color:"rgba(255, 255, 255, 0.12)",colorEnd:"rgba(255, 255, 255, 0.18)",borderRadius:r,heightSmall:e,heightMedium:n,heightLarge:i}}},Q2={name:"Split",common:ve},sp="n-tabs",ab={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},lg=Lt({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:ab,setup(t){const e=Bt(sp,null);return e||jx("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:e.paneStyleRef,class:e.paneClassRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){return me("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),eL=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Wx(ab,["displayDirective"])),gd=Lt({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:eL,setup(t){const{mergedClsPrefixRef:e,valueRef:n,typeRef:i,closableRef:r,tabStyleRef:o,addTabStyleRef:s,tabClassRef:a,addTabClassRef:l,tabChangeIdRef:c,onBeforeLeaveRef:u,triggerRef:h,handleAdd:d,activateTab:f,handleClose:m}=Bt(sp);return{trigger:h,mergedClosable:Je(()=>{if(t.internalAddable)return!1;const{closable:v}=t;return v===void 0?r.value:v}),style:o,addStyle:s,tabClass:a,addTabClass:l,clsPrefix:e,value:n,type:i,handleClose(v){v.stopPropagation(),!t.disabled&&m(t.name)},activateTab(){if(t.disabled)return;if(t.internalAddable){d();return}const{name:v}=t,g=++c.id;if(v!==n.value){const{value:p}=u;p?Promise.resolve(p(t.name,n.value)).then(S=>{S&&c.id===g&&f(v)}):f(v)}}}},render(){const{internalAddable:t,clsPrefix:e,name:n,disabled:i,label:r,tab:o,value:s,mergedClosable:a,trigger:l,$slots:{default:c}}=this,u=r??o;return me("div",{class:`${e}-tabs-tab-wrapper`},this.internalLeftPadded?me("div",{class:`${e}-tabs-tab-pad`}):null,me("div",Object.assign({key:n,"data-name":n,"data-disabled":i?!0:void 0},yx({class:[`${e}-tabs-tab`,s===n&&`${e}-tabs-tab--active`,i&&`${e}-tabs-tab--disabled`,a&&`${e}-tabs-tab--closable`,t&&`${e}-tabs-tab--addable`,t?this.addTabClass:this.tabClass],onClick:l==="click"?this.activateTab:void 0,onMouseenter:l==="hover"?this.activateTab:void 0,style:t?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),me("span",{class:`${e}-tabs-tab__label`},t?me(Xt,null,me("div",{class:`${e}-tabs-tab__height-placeholder`}," "),me(ip,{clsPrefix:e},{default:()=>me(OA,null)})):c?c():typeof u=="object"?u:Xx(u??n)),a&&this.type==="card"?me(F_,{clsPrefix:e,class:`${e}-tabs-tab__close`,onClick:this.handleClose,disabled:i}):null))}}),tL=Te("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[Xe("segment-type",[Te("tabs-rail",[qe("&.transition-disabled",[Te("tabs-capsule",`
 transition: none;
 `)])])]),Xe("top",[Te("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),Xe("left",[Te("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),Xe("left, right",`
 flex-direction: row;
 `,[Te("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),Te("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),Xe("right",`
 flex-direction: row-reverse;
 `,[Te("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),Te("tabs-bar",`
 left: 0;
 `)]),Xe("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[Te("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),Te("tabs-bar",`
 top: 0;
 `)]),Te("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[Te("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),Te("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Te("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Xe("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),qe("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),Xe("flex",[Te("tabs-nav",`
 width: 100%;
 position: relative;
 `,[Te("tabs-wrapper",`
 width: 100%;
 `,[Te("tabs-tab",`
 margin-right: 0;
 `)])])]),Te("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[Mt("prefix, suffix",`
 display: flex;
 align-items: center;
 `),Mt("prefix","padding-right: 16px;"),Mt("suffix","padding-left: 16px;")]),Xe("top, bottom",[Te("tabs-nav-scroll-wrapper",[qe("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),qe("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),Xe("shadow-start",[qe("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),Xe("shadow-end",[qe("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),Xe("left, right",[Te("tabs-nav-scroll-content",`
 flex-direction: column;
 `),Te("tabs-nav-scroll-wrapper",[qe("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),qe("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),Xe("shadow-start",[qe("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),Xe("shadow-end",[qe("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),Te("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[Te("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[qe("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),qe("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),Te("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),Te("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),Te("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),Te("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Xe("disabled",{cursor:"not-allowed"}),Mt("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),Mt("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),Te("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[qe("&.transition-disabled",`
 transition: none;
 `),Xe("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),Te("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),Te("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[qe("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),qe("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),qe("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),qe("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),qe("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),Te("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),Xe("line-type, bar-type",[Te("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[qe("&:hover",{color:"var(--n-tab-text-color-hover)"}),Xe("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),Xe("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),Te("tabs-nav",[Xe("line-type",[Xe("top",[Mt("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Te("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Te("tabs-bar",`
 bottom: -1px;
 `)]),Xe("left",[Mt("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),Te("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),Te("tabs-bar",`
 right: -1px;
 `)]),Xe("right",[Mt("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),Te("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),Te("tabs-bar",`
 left: -1px;
 `)]),Xe("bottom",[Mt("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),Te("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),Te("tabs-bar",`
 top: -1px;
 `)]),Mt("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),Te("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),Te("tabs-bar",`
 border-radius: 0;
 `)]),Xe("card-type",[Mt("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),Te("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),Te("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),Te("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[Xe("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[Mt("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),e_("disabled",[qe("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),Xe("closable","padding-right: 8px;"),Xe("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),Xe("disabled","color: var(--n-tab-text-color-disabled);")])]),Xe("left, right",`
 flex-direction: column; 
 `,[Mt("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),Te("tabs-wrapper",`
 flex-direction: column;
 `),Te("tabs-tab-wrapper",`
 flex-direction: column;
 `,[Te("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),Xe("top",[Xe("card-type",[Te("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),Mt("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Te("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[Xe("active",`
 border-bottom: 1px solid #0000;
 `)]),Te("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Te("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),Xe("left",[Xe("card-type",[Te("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),Mt("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),Te("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[Xe("active",`
 border-right: 1px solid #0000;
 `)]),Te("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),Te("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),Xe("right",[Xe("card-type",[Te("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),Mt("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),Te("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[Xe("active",`
 border-left: 1px solid #0000;
 `)]),Te("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),Te("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),Xe("bottom",[Xe("card-type",[Te("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),Mt("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),Te("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[Xe("active",`
 border-top: 1px solid #0000;
 `)]),Te("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),Te("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),nL=Object.assign(Object.assign({},Qa.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),iL=Lt({name:"Tabs",props:nL,setup(t,{slots:e}){var n,i,r,o;const{mergedClsPrefixRef:s,inlineThemeDisabled:a}=tp(t),l=Qa("Tabs","-tabs",tL,b2,t,s),c=lt(null),u=lt(null),h=lt(null),d=lt(null),f=lt(null),m=lt(null),v=lt(!0),g=lt(!0),p=Dm(t,["labelSize","size"]),S=Dm(t,["activeName","value"]),y=lt((i=(n=S.value)!==null&&n!==void 0?n:t.defaultValue)!==null&&i!==void 0?i:e.default?(o=(r=ia(e.default())[0])===null||r===void 0?void 0:r.props)===null||o===void 0?void 0:o.name:null),w=U1(S,y),L={id:0},E=Je(()=>{if(!(!t.justifyContent||t.type==="card"))return{display:"flex",justifyContent:t.justifyContent}});un(w,()=>{L.id=0,M(),I()});function T(){var C;const{value:x}=w;return x===null?null:(C=c.value)===null||C===void 0?void 0:C.querySelector(`[data-name="${x}"]`)}function D(C){if(t.type==="card")return;const{value:x}=u;if(!x)return;const R=x.style.opacity==="0";if(C){const F=`${s.value}-tabs-bar--disabled`,{barWidth:B,placement:G}=t;if(C.dataset.disabled==="true"?x.classList.add(F):x.classList.remove(F),["top","bottom"].includes(G)){if(b(["top","maxHeight","height"]),typeof B=="number"&&C.offsetWidth>=B){const ae=Math.floor((C.offsetWidth-B)/2)+C.offsetLeft;x.style.left=`${ae}px`,x.style.maxWidth=`${B}px`}else x.style.left=`${C.offsetLeft}px`,x.style.maxWidth=`${C.offsetWidth}px`;x.style.width="8192px",R&&(x.style.transition="none"),x.offsetWidth,R&&(x.style.transition="",x.style.opacity="1")}else{if(b(["left","maxWidth","width"]),typeof B=="number"&&C.offsetHeight>=B){const ae=Math.floor((C.offsetHeight-B)/2)+C.offsetTop;x.style.top=`${ae}px`,x.style.maxHeight=`${B}px`}else x.style.top=`${C.offsetTop}px`,x.style.maxHeight=`${C.offsetHeight}px`;x.style.height="8192px",R&&(x.style.transition="none"),x.offsetHeight,R&&(x.style.transition="",x.style.opacity="1")}}}function z(){if(t.type==="card")return;const{value:C}=u;C&&(C.style.opacity="0")}function b(C){const{value:x}=u;if(x)for(const R of C)x.style[R]=""}function M(){if(t.type==="card")return;const C=T();C?D(C):z()}function I(){var C;const x=(C=f.value)===null||C===void 0?void 0:C.$el;if(!x)return;const R=T();if(!R)return;const{scrollLeft:F,offsetWidth:B}=x,{offsetLeft:G,offsetWidth:ae}=R;F>G?x.scrollTo({top:0,left:G,behavior:"smooth"}):G+ae>F+B&&x.scrollTo({top:0,left:G+ae-B,behavior:"smooth"})}const N=lt(null);let W=0,ne=null;function X(C){const x=N.value;if(x){W=C.getBoundingClientRect().height;const R=`${W}px`,F=()=>{x.style.height=R,x.style.maxHeight=R};ne?(F(),ne(),ne=null):ne=F}}function te(C){const x=N.value;if(x){const R=C.getBoundingClientRect().height,F=()=>{document.body.offsetHeight,x.style.maxHeight=`${R}px`,x.style.height=`${Math.max(W,R)}px`};ne?(ne(),ne=null,F()):ne=F}}function j(){const C=N.value;if(C){C.style.maxHeight="",C.style.height="";const{paneWrapperStyle:x}=t;if(typeof x=="string")C.style.cssText=x;else if(x){const{maxHeight:R,height:F}=x;R!==void 0&&(C.style.maxHeight=R),F!==void 0&&(C.style.height=F)}}}const pe={value:[]},xe=lt("next");function be(C){const x=w.value;let R="next";for(const F of pe.value){if(F===x)break;if(F===C){R="prev";break}}xe.value=R,ke(C)}function ke(C){const{onActiveNameChange:x,onUpdateValue:R,"onUpdate:value":F}=t;x&&Gs(x,C),R&&Gs(R,C),F&&Gs(F,C),y.value=C}function Ce(C){const{onClose:x}=t;x&&Gs(x,C)}function J(){const{value:C}=u;if(!C)return;const x="transition-disabled";C.classList.add(x),M(),C.classList.remove(x)}const ce=lt(null);function ge({transitionDisabled:C}){const x=c.value;if(!x)return;C&&x.classList.add("transition-disabled");const R=T();R&&ce.value&&(ce.value.style.width=`${R.offsetWidth}px`,ce.value.style.height=`${R.offsetHeight}px`,ce.value.style.transform=`translateX(${R.offsetLeft-n1(getComputedStyle(x).paddingLeft)}px)`,C&&ce.value.offsetWidth),C&&x.classList.remove("transition-disabled")}un([w],()=>{t.type==="segment"&&Gr(()=>{ge({transitionDisabled:!1})})}),ri(()=>{t.type==="segment"&&ge({transitionDisabled:!0})});let V=0;function le(C){var x;if(C.contentRect.width===0&&C.contentRect.height===0||V===C.contentRect.width)return;V=C.contentRect.width;const{type:R}=t;if((R==="line"||R==="bar")&&J(),R!=="segment"){const{placement:F}=t;P((F==="top"||F==="bottom"?(x=f.value)===null||x===void 0?void 0:x.$el:m.value)||null)}}const oe=ih(le,64);un([()=>t.justifyContent,()=>t.size],()=>{Gr(()=>{const{type:C}=t;(C==="line"||C==="bar")&&J()})});const ue=lt(!1);function we(C){var x;const{target:R,contentRect:{width:F,height:B}}=C,G=R.parentElement.parentElement.offsetWidth,ae=R.parentElement.parentElement.offsetHeight,{placement:se}=t;if(!ue.value)se==="top"||se==="bottom"?G<F&&(ue.value=!0):ae<B&&(ue.value=!0);else{const{value:fe}=d;if(!fe)return;se==="top"||se==="bottom"?G-F>fe.$el.offsetWidth&&(ue.value=!1):ae-B>fe.$el.offsetHeight&&(ue.value=!1)}P(((x=f.value)===null||x===void 0?void 0:x.$el)||null)}const ie=ih(we,64);function _(){const{onAdd:C}=t;C&&C(),Gr(()=>{const x=T(),{value:R}=f;!x||!R||R.scrollTo({left:x.offsetLeft,top:0,behavior:"smooth"})})}function P(C){if(!C)return;const{placement:x}=t;if(x==="top"||x==="bottom"){const{scrollLeft:R,scrollWidth:F,offsetWidth:B}=C;v.value=R<=0,g.value=R+B>=F}else{const{scrollTop:R,scrollHeight:F,offsetHeight:B}=C;v.value=R<=0,g.value=R+B>=F}}const O=ih(C=>{P(C.target)},64);dr(sp,{triggerRef:Cn(t,"trigger"),tabStyleRef:Cn(t,"tabStyle"),tabClassRef:Cn(t,"tabClass"),addTabStyleRef:Cn(t,"addTabStyle"),addTabClassRef:Cn(t,"addTabClass"),paneClassRef:Cn(t,"paneClass"),paneStyleRef:Cn(t,"paneStyle"),mergedClsPrefixRef:s,typeRef:Cn(t,"type"),closableRef:Cn(t,"closable"),valueRef:w,tabChangeIdRef:L,onBeforeLeaveRef:Cn(t,"onBeforeLeave"),activateTab:be,handleClose:Ce,handleAdd:_}),F1(()=>{M(),I()}),fu(()=>{const{value:C}=h;if(!C)return;const{value:x}=s,R=`${x}-tabs-nav-scroll-wrapper--shadow-start`,F=`${x}-tabs-nav-scroll-wrapper--shadow-end`;v.value?C.classList.remove(R):C.classList.add(R),g.value?C.classList.remove(F):C.classList.add(F)});const H={syncBarPosition:()=>{M()}},k=()=>{ge({transitionDisabled:!0})},K=Je(()=>{const{value:C}=p,{type:x}=t,R={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[x],F=`${C}${R}`,{self:{barColor:B,closeIconColor:G,closeIconColorHover:ae,closeIconColorPressed:se,tabColor:fe,tabBorderColor:Oe,paneTextColor:de,tabFontWeight:_e,tabBorderRadius:Be,tabFontWeightActive:Fe,colorSegment:Ae,fontWeightStrong:tt,tabColorSegment:Ve,closeSize:nt,closeIconSize:$,closeColorHover:Re,closeColorPressed:re,closeBorderRadius:he,[Wt("panePadding",C)]:Ee,[Wt("tabPadding",F)]:Le,[Wt("tabPaddingVertical",F)]:rt,[Wt("tabGap",F)]:At,[Wt("tabGap",`${F}Vertical`)]:en,[Wt("tabTextColor",x)]:ot,[Wt("tabTextColorActive",x)]:tn,[Wt("tabTextColorHover",x)]:Vn,[Wt("tabTextColorDisabled",x)]:cl,[Wt("tabFontSize",C)]:ul},common:{cubicBezierEaseInOut:_i}}=l.value;return{"--n-bezier":_i,"--n-color-segment":Ae,"--n-bar-color":B,"--n-tab-font-size":ul,"--n-tab-text-color":ot,"--n-tab-text-color-active":tn,"--n-tab-text-color-disabled":cl,"--n-tab-text-color-hover":Vn,"--n-pane-text-color":de,"--n-tab-border-color":Oe,"--n-tab-border-radius":Be,"--n-close-size":nt,"--n-close-icon-size":$,"--n-close-color-hover":Re,"--n-close-color-pressed":re,"--n-close-border-radius":he,"--n-close-icon-color":G,"--n-close-icon-color-hover":ae,"--n-close-icon-color-pressed":se,"--n-tab-color":fe,"--n-tab-font-weight":_e,"--n-tab-font-weight-active":Fe,"--n-tab-padding":Le,"--n-tab-padding-vertical":rt,"--n-tab-gap":At,"--n-tab-gap-vertical":en,"--n-pane-padding-left":yl(Ee,"left"),"--n-pane-padding-right":yl(Ee,"right"),"--n-pane-padding-top":yl(Ee,"top"),"--n-pane-padding-bottom":yl(Ee,"bottom"),"--n-font-weight-strong":tt,"--n-tab-color-segment":Ve}}),Z=a?O_("tabs",Je(()=>`${p.value[0]}${t.type[0]}`),K,t):void 0;return Object.assign({mergedClsPrefix:s,mergedValue:w,renderedNames:new Set,segmentCapsuleElRef:ce,tabsPaneWrapperRef:N,tabsElRef:c,barElRef:u,addTabInstRef:d,xScrollInstRef:f,scrollWrapperElRef:h,addTabFixed:ue,tabWrapperStyle:E,handleNavResize:oe,mergedSize:p,handleScroll:O,handleTabsResize:ie,cssVars:a?void 0:K,themeClass:Z==null?void 0:Z.themeClass,animationDirection:xe,renderNameListRef:pe,yScrollElRef:m,handleSegmentResize:k,onAnimationBeforeLeave:X,onAnimationEnter:te,onAnimationAfterEnter:j,onRender:Z==null?void 0:Z.onRender},H)},render(){const{mergedClsPrefix:t,type:e,placement:n,addTabFixed:i,addable:r,mergedSize:o,renderNameListRef:s,onRender:a,paneWrapperClass:l,paneWrapperStyle:c,$slots:{default:u,prefix:h,suffix:d}}=this;a==null||a();const f=u?ia(u()).filter(L=>L.type.__TAB_PANE__===!0):[],m=u?ia(u()).filter(L=>L.type.__TAB__===!0):[],v=!m.length,g=e==="card",p=e==="segment",S=!g&&!p&&this.justifyContent;s.value=[];const y=()=>{const L=me("div",{style:this.tabWrapperStyle,class:`${t}-tabs-wrapper`},S?null:me("div",{class:`${t}-tabs-scroll-padding`,style:n==="top"||n==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),v?f.map((E,T)=>(s.value.push(E.props.name),oh(me(gd,Object.assign({},E.props,{internalCreatedByPane:!0,internalLeftPadded:T!==0&&(!S||S==="center"||S==="start"||S==="end")}),E.children?{default:E.children.tab}:void 0)))):m.map((E,T)=>(s.value.push(E.props.name),oh(T!==0&&!S?hg(E):E))),!i&&r&&g?ug(r,(v?f.length:m.length)!==0):null,S?null:me("div",{class:`${t}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return me("div",{ref:"tabsElRef",class:`${t}-tabs-nav-scroll-content`},g&&r?me(Qu,{onResize:this.handleTabsResize},{default:()=>L}):L,g?me("div",{class:`${t}-tabs-pad`}):null,g?null:me("div",{ref:"barElRef",class:`${t}-tabs-bar`}))},w=p?"top":n;return me("div",{class:[`${t}-tabs`,this.themeClass,`${t}-tabs--${e}-type`,`${t}-tabs--${o}-size`,S&&`${t}-tabs--flex`,`${t}-tabs--${w}`],style:this.cssVars},me("div",{class:[`${t}-tabs-nav--${e}-type`,`${t}-tabs-nav--${w}`,`${t}-tabs-nav`]},Tm(h,L=>L&&me("div",{class:`${t}-tabs-nav__prefix`},L)),p?me(Qu,{onResize:this.handleSegmentResize},{default:()=>me("div",{class:`${t}-tabs-rail`,ref:"tabsElRef"},me("div",{class:`${t}-tabs-capsule`,ref:"segmentCapsuleElRef"},me("div",{class:`${t}-tabs-wrapper`},me("div",{class:`${t}-tabs-tab`}))),v?f.map((L,E)=>(s.value.push(L.props.name),me(gd,Object.assign({},L.props,{internalCreatedByPane:!0,internalLeftPadded:E!==0}),L.children?{default:L.children.tab}:void 0))):m.map((L,E)=>(s.value.push(L.props.name),E===0?L:hg(L))))}):me(Qu,{onResize:this.handleNavResize},{default:()=>me("div",{class:`${t}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(w)?me(fw,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:y}):me("div",{class:`${t}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},y()))}),i&&r&&g?ug(r,!0):null,Tm(d,L=>L&&me("div",{class:`${t}-tabs-nav__suffix`},L))),v&&(this.animated&&(w==="top"||w==="bottom")?me("div",{ref:"tabsPaneWrapperRef",style:c,class:[`${t}-tabs-pane-wrapper`,l]},cg(f,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):cg(f,this.mergedValue,this.renderedNames)))}});function cg(t,e,n,i,r,o,s){const a=[];return t.forEach(l=>{const{name:c,displayDirective:u,"display-directive":h}=l.props,d=m=>u===m||h===m,f=e===c;if(l.key!==void 0&&(l.key=c),f||d("show")||d("show:lazy")&&n.has(c)){n.has(c)||n.add(c);const m=!d("if");a.push(m?YS(l,[[oM,f]]):l)}}),s?me(Ox,{name:`${s}-transition`,onBeforeLeave:i,onEnter:r,onAfterEnter:o},{default:()=>a}):a}function ug(t,e){return me(gd,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:e,disabled:typeof t=="object"&&t.disabled})}function hg(t){const e=zi(t);return e.props?e.props.internalLeftPadded=!0:e.props={internalLeftPadded:!0},e}function oh(t){return Array.isArray(t.dynamicProps)?t.dynamicProps.includes("internalLeftPadded")||t.dynamicProps.push("internalLeftPadded"):t.dynamicProps=["internalLeftPadded"],t}const rL=()=>({}),oL={name:"Equation",common:ve,self:rL},sL={name:"FloatButtonGroup",common:ve,self(t){const{popoverColor:e,dividerColor:n,borderRadius:i}=t;return{color:e,buttonBorderColor:n,borderRadiusSquare:i,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)"}}},aL={name:"dark",common:ve,Alert:lP,Anchor:pP,AutoComplete:vP,Avatar:V_,AvatarGroup:bP,BackTop:SP,Badge:CP,Breadcrumb:EP,Button:An,ButtonGroup:FR,Calendar:RP,Card:W_,Carousel:NP,Cascader:BP,Checkbox:Es,Code:X_,Collapse:kP,CollapseTransition:$P,ColorPicker:DP,DataTable:tR,DatePicker:lR,Descriptions:hR,Dialog:Q_,Divider:vR,Drawer:_R,Dropdown:op,DynamicInput:yR,DynamicTags:CR,Element:MR,Empty:lo,Ellipsis:K_,Equation:oL,Flex:ER,Form:PR,GradientText:UR,Icon:iR,IconWrapper:B2,Image:H2,Input:kn,InputNumber:zR,LegacyTransfer:V2,Layout:BR,List:kR,LoadingBar:VR,Log:$R,Menu:jR,Mention:GR,Message:NR,Modal:mR,Notification:DR,PageHeader:KR,Pagination:Y_,Popconfirm:QR,Popover:co,Popselect:j_,Progress:nb,QrCode:Z2,Radio:Z_,Rate:t2,Result:r2,Row:F2,Scrollbar:Tn,Select:q_,Skeleton:J2,Slider:s2,Space:eb,Spin:l2,Statistic:u2,Steps:f2,Switch:m2,Table:x2,Tabs:y2,Tag:k_,Thing:C2,TimePicker:J_,Timeline:w2,Tooltip:yu,Transfer:T2,Tree:rb,TreeSelect:P2,Typography:D2,Upload:O2,Watermark:N2,Split:Q2,FloatButton:U2,FloatButtonGroup:sL};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Do=typeof document<"u";function lb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function lL(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&lb(t.default)}const mt=Object.assign;function sh(t,e){const n={};for(const i in e){const r=e[i];n[i]=ni(r)?r.map(t):t(r)}return n}const aa=()=>{},ni=Array.isArray,cb=/#/g,cL=/&/g,uL=/\//g,hL=/=/g,dL=/\?/g,ub=/\+/g,fL=/%5B/g,pL=/%5D/g,hb=/%5E/g,mL=/%60/g,db=/%7B/g,gL=/%7C/g,fb=/%7D/g,vL=/%20/g;function ap(t){return encodeURI(""+t).replace(gL,"|").replace(fL,"[").replace(pL,"]")}function xL(t){return ap(t).replace(db,"{").replace(fb,"}").replace(hb,"^")}function vd(t){return ap(t).replace(ub,"%2B").replace(vL,"+").replace(cb,"%23").replace(cL,"%26").replace(mL,"`").replace(db,"{").replace(fb,"}").replace(hb,"^")}function _L(t){return vd(t).replace(hL,"%3D")}function bL(t){return ap(t).replace(cb,"%23").replace(dL,"%3F")}function yL(t){return t==null?"":bL(t).replace(uL,"%2F")}function Ta(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const SL=/\/$/,CL=t=>t.replace(SL,"");function ah(t,e,n="/"){let i,r={},o="",s="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),o=e.slice(l+1,a>-1?a:e.length),r=t(o)),a>-1&&(i=i||e.slice(0,a),s=e.slice(a,e.length)),i=TL(i??e,n),{fullPath:i+(o&&"?")+o+s,path:i,query:r,hash:Ta(s)}}function ML(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function dg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function wL(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&ls(e.matched[i],n.matched[r])&&pb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ls(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!EL(t[n],e[n]))return!1;return!0}function EL(t,e){return ni(t)?fg(t,e):ni(e)?fg(e,t):t===e}function fg(t,e){return ni(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function TL(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let o=n.length-1,s,a;for(s=0;s<i.length;s++)if(a=i[s],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+i.slice(s).join("/")}const Yi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Aa;(function(t){t.pop="pop",t.push="push"})(Aa||(Aa={}));var la;(function(t){t.back="back",t.forward="forward",t.unknown=""})(la||(la={}));function AL(t){if(!t)if(Do){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),CL(t)}const PL=/^[^#]+#/;function RL(t,e){return t.replace(PL,"#")+e}function LL(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Su=()=>({left:window.scrollX,top:window.scrollY});function DL(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=LL(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function pg(t,e){return(history.state?history.state.position-e:-1)+t}const xd=new Map;function IL(t,e){xd.set(t,e)}function OL(t){const e=xd.get(t);return xd.delete(t),e}let NL=()=>location.protocol+"//"+location.host;function mb(t,e){const{pathname:n,search:i,hash:r}=e,o=t.indexOf("#");if(o>-1){let a=r.includes(t.slice(o))?t.slice(o).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),dg(l,"")}return dg(n,t)+i+r}function FL(t,e,n,i){let r=[],o=[],s=null;const a=({state:d})=>{const f=mb(t,location),m=n.value,v=e.value;let g=0;if(d){if(n.value=f,e.value=d,s&&s===m){s=null;return}g=v?d.position-v.position:0}else i(f);r.forEach(p=>{p(n.value,m,{delta:g,type:Aa.pop,direction:g?g>0?la.forward:la.back:la.unknown})})};function l(){s=n.value}function c(d){r.push(d);const f=()=>{const m=r.indexOf(d);m>-1&&r.splice(m,1)};return o.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(mt({},d.state,{scroll:Su()}),"")}function h(){for(const d of o)d();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function mg(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Su():null}}function UL(t){const{history:e,location:n}=window,i={value:mb(t,n)},r={value:e.state};r.value||o(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:NL()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function s(l,c){const u=mt({},e.state,mg(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});o(l,u,!0),i.value=l}function a(l,c){const u=mt({},r.value,e.state,{forward:l,scroll:Su()});o(u.current,u,!0);const h=mt({},mg(i.value,l,null),{position:u.position+1},c);o(l,h,!1),i.value=l}return{location:i,state:r,push:a,replace:s}}function zL(t){t=AL(t);const e=UL(t),n=FL(t,e.state,e.location,e.replace);function i(o,s=!0){s||n.pauseListeners(),history.go(o)}const r=mt({location:"",base:t,go:i,createHref:RL.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function BL(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),zL(t)}function HL(t){return typeof t=="string"||t&&typeof t=="object"}function gb(t){return typeof t=="string"||typeof t=="symbol"}const vb=Symbol("");var gg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gg||(gg={}));function cs(t,e){return mt(new Error,{type:t,[vb]:!0},e)}function yi(t,e){return t instanceof Error&&vb in t&&(e==null||!!(t.type&e))}const vg="[^/]+?",kL={sensitive:!1,strict:!1,start:!0,end:!0},VL=/[.+*?^${}()[\]/\\]/g;function $L(t,e){const n=mt({},kL,e),i=[];let r=n.start?"^":"";const o=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(VL,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:v,optional:g,regexp:p}=d;o.push({name:m,repeatable:v,optional:g});const S=p||vg;if(S!==vg){f+=10;try{new RegExp(`(${S})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${m}" (${S}): `+w.message)}}let y=v?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(y=g&&c.length<2?`(?:/${y})`:"/"+y),g&&(y+="?"),r+=y,f+=20,g&&(f+=-8),v&&(f+=-20),S===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const s=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(s),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=o[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:v,optional:g}=f,p=m in c?c[m]:"";if(ni(p)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const S=ni(p)?p.join("/"):p;if(!S)if(g)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=S}}return u||"/"}return{re:s,score:i,keys:o,parse:a,stringify:l}}function GL(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function xb(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const o=GL(i[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-i.length)===1){if(xg(i))return 1;if(xg(r))return-1}return r.length-i.length}function xg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const WL={type:0,value:""},XL=/[a-zA-Z0-9_]/;function jL(t){if(!t)return[[]];if(t==="/")return[[WL]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,i=n;const r=[];let o;function s(){o&&r.push(o),o=[]}let a=0,l,c="",u="";function h(){c&&(n===0?o.push({type:0,value:c}):n===1||n===2||n===3?(o.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),s()):l===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:XL.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),s(),r}function qL(t,e,n){const i=$L(jL(t.path),n),r=mt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function YL(t,e){const n=[],i=new Map;e=Sg({strict:!1,end:!0,sensitive:!1},e);function r(h){return i.get(h)}function o(h,d,f){const m=!f,v=bg(h);v.aliasOf=f&&f.record;const g=Sg(e,h),p=[v];if("alias"in h){const w=typeof h.alias=="string"?[h.alias]:h.alias;for(const L of w)p.push(bg(mt({},v,{components:f?f.record.components:v.components,path:L,aliasOf:f?f.record:v})))}let S,y;for(const w of p){const{path:L}=w;if(d&&L[0]!=="/"){const E=d.record.path,T=E[E.length-1]==="/"?"":"/";w.path=d.record.path+(L&&T+L)}if(S=qL(w,d,g),f?f.alias.push(S):(y=y||S,y!==S&&y.alias.push(S),m&&h.name&&!yg(S)&&s(h.name)),_b(S)&&l(S),v.children){const E=v.children;for(let T=0;T<E.length;T++)o(E[T],S,f&&f.children[T])}f=f||S}return y?()=>{s(y)}:aa}function s(h){if(gb(h)){const d=i.get(h);d&&(i.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&i.delete(h.record.name),h.children.forEach(s),h.alias.forEach(s))}}function a(){return n}function l(h){const d=JL(h,n);n.splice(d,0,h),h.record.name&&!yg(h)&&i.set(h.record.name,h)}function c(h,d){let f,m={},v,g;if("name"in h&&h.name){if(f=i.get(h.name),!f)throw cs(1,{location:h});g=f.record.name,m=mt(_g(d.params,f.keys.filter(y=>!y.optional).concat(f.parent?f.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),h.params&&_g(h.params,f.keys.map(y=>y.name))),v=f.stringify(m)}else if(h.path!=null)v=h.path,f=n.find(y=>y.re.test(v)),f&&(m=f.parse(v),g=f.record.name);else{if(f=d.name?i.get(d.name):n.find(y=>y.re.test(d.path)),!f)throw cs(1,{location:h,currentLocation:d});g=f.record.name,m=mt({},d.params,h.params),v=f.stringify(m)}const p=[];let S=f;for(;S;)p.unshift(S.record),S=S.parent;return{name:g,path:v,params:m,matched:p,meta:ZL(p)}}t.forEach(h=>o(h));function u(){n.length=0,i.clear()}return{addRoute:o,resolve:c,removeRoute:s,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function _g(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function bg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:KL(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function KL(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function yg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ZL(t){return t.reduce((e,n)=>mt(e,n.meta),{})}function Sg(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function JL(t,e){let n=0,i=e.length;for(;n!==i;){const o=n+i>>1;xb(t,e[o])<0?i=o:n=o+1}const r=QL(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function QL(t){let e=t;for(;e=e.parent;)if(_b(e)&&xb(t,e)===0)return e}function _b({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function eD(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const o=i[r].replace(ub," "),s=o.indexOf("="),a=Ta(s<0?o:o.slice(0,s)),l=s<0?null:Ta(o.slice(s+1));if(a in e){let c=e[a];ni(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Cg(t){let e="";for(let n in t){const i=t[n];if(n=_L(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(ni(i)?i.map(o=>o&&vd(o)):[i&&vd(i)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function tD(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=ni(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const nD=Symbol(""),Mg=Symbol(""),lp=Symbol(""),bb=Symbol(""),_d=Symbol("");function Ns(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function sr(t,e,n,i,r,o=s=>s()){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(cs(4,{from:n,to:e})):d instanceof Error?l(d):HL(d)?l(cs(2,{from:e,to:d})):(s&&i.enterCallbacks[r]===s&&typeof d=="function"&&s.push(d),a())},u=o(()=>t.call(i&&i.instances[r],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function lh(t,e,n,i,r=o=>o()){const o=[];for(const s of t)for(const a in s.components){let l=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(lb(l)){const u=(l.__vccOpts||l)[e];u&&o.push(sr(u,n,i,s,a,r))}else{let c=l();o.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`);const h=lL(u)?u.default:u;s.mods[a]=u,s.components[a]=h;const f=(h.__vccOpts||h)[e];return f&&sr(f,n,i,s,a,r)()}))}}return o}function wg(t){const e=Bt(lp),n=Bt(bb),i=Je(()=>{const l=Zt(t.to);return e.resolve(l)}),r=Je(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ls.bind(null,u));if(d>-1)return d;const f=Eg(l[c-2]);return c>1&&Eg(u)===f&&h[h.length-1].path!==f?h.findIndex(ls.bind(null,l[c-2])):d}),o=Je(()=>r.value>-1&&oD(n.params,i.value.params)),s=Je(()=>r.value>-1&&r.value===n.matched.length-1&&pb(n.params,i.value.params));function a(l={}){return rD(l)?e[Zt(t.replace)?"replace":"push"](Zt(t.to)).catch(aa):Promise.resolve()}return{route:i,href:Je(()=>i.value.href),isActive:o,isExactActive:s,navigate:a}}const iD=Lt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wg,setup(t,{slots:e}){const n=Ga(wg(t)),{options:i}=Bt(lp),r=Je(()=>({[Tg(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Tg(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:me("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),bd=iD;function rD(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function oD(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!ni(r)||r.length!==i.length||i.some((o,s)=>o!==r[s]))return!1}return!0}function Eg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Tg=(t,e,n)=>t??e??n,sD=Lt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Bt(_d),r=Je(()=>t.route||i.value),o=Bt(Mg,0),s=Je(()=>{let c=Zt(o);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Je(()=>r.value.matched[s.value]);dr(Mg,Je(()=>s.value+1)),dr(nD,a),dr(_d,r);const l=lt();return un(()=>[l.value,a.value,t.name],([c,u,h],[d,f,m])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!ls(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Ag(n.default,{Component:d,route:c});const f=h.props[u],m=f?f===!0?c.params:typeof f=="function"?f(c):f:null,g=me(d,mt({},m,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Ag(n.default,{Component:g,route:c})||g}}});function Ag(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const yb=sD;function aD(t){const e=YL(t.routes,t),n=t.parseQuery||eD,i=t.stringifyQuery||Cg,r=t.history,o=Ns(),s=Ns(),a=Ns(),l=Hf(Yi);let c=Yi;Do&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sh.bind(null,V=>""+V),h=sh.bind(null,yL),d=sh.bind(null,Ta);function f(V,le){let oe,ue;return gb(V)?(oe=e.getRecordMatcher(V),ue=le):ue=V,e.addRoute(ue,oe)}function m(V){const le=e.getRecordMatcher(V);le&&e.removeRoute(le)}function v(){return e.getRoutes().map(V=>V.record)}function g(V){return!!e.getRecordMatcher(V)}function p(V,le){if(le=mt({},le||l.value),typeof V=="string"){const P=ah(n,V,le.path),O=e.resolve({path:P.path},le),H=r.createHref(P.fullPath);return mt(P,O,{params:d(O.params),hash:Ta(P.hash),redirectedFrom:void 0,href:H})}let oe;if(V.path!=null)oe=mt({},V,{path:ah(n,V.path,le.path).path});else{const P=mt({},V.params);for(const O in P)P[O]==null&&delete P[O];oe=mt({},V,{params:h(P)}),le.params=h(le.params)}const ue=e.resolve(oe,le),we=V.hash||"";ue.params=u(d(ue.params));const ie=ML(i,mt({},V,{hash:xL(we),path:ue.path})),_=r.createHref(ie);return mt({fullPath:ie,hash:we,query:i===Cg?tD(V.query):V.query||{}},ue,{redirectedFrom:void 0,href:_})}function S(V){return typeof V=="string"?ah(n,V,l.value.path):mt({},V)}function y(V,le){if(c!==V)return cs(8,{from:le,to:V})}function w(V){return T(V)}function L(V){return w(mt(S(V),{replace:!0}))}function E(V){const le=V.matched[V.matched.length-1];if(le&&le.redirect){const{redirect:oe}=le;let ue=typeof oe=="function"?oe(V):oe;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=S(ue):{path:ue},ue.params={}),mt({query:V.query,hash:V.hash,params:ue.path!=null?{}:V.params},ue)}}function T(V,le){const oe=c=p(V),ue=l.value,we=V.state,ie=V.force,_=V.replace===!0,P=E(oe);if(P)return T(mt(S(P),{state:typeof P=="object"?mt({},we,P.state):we,force:ie,replace:_}),le||oe);const O=oe;O.redirectedFrom=le;let H;return!ie&&wL(i,ue,oe)&&(H=cs(16,{to:O,from:ue}),be(ue,ue,!0,!1)),(H?Promise.resolve(H):b(O,ue)).catch(k=>yi(k)?yi(k,2)?k:xe(k):j(k,O,ue)).then(k=>{if(k){if(yi(k,2))return T(mt({replace:_},S(k.to),{state:typeof k.to=="object"?mt({},we,k.to.state):we,force:ie}),le||O)}else k=I(O,ue,!0,_,we);return M(O,ue,k),k})}function D(V,le){const oe=y(V,le);return oe?Promise.reject(oe):Promise.resolve()}function z(V){const le=J.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(V):V()}function b(V,le){let oe;const[ue,we,ie]=lD(V,le);oe=lh(ue.reverse(),"beforeRouteLeave",V,le);for(const P of ue)P.leaveGuards.forEach(O=>{oe.push(sr(O,V,le))});const _=D.bind(null,V,le);return oe.push(_),ge(oe).then(()=>{oe=[];for(const P of o.list())oe.push(sr(P,V,le));return oe.push(_),ge(oe)}).then(()=>{oe=lh(we,"beforeRouteUpdate",V,le);for(const P of we)P.updateGuards.forEach(O=>{oe.push(sr(O,V,le))});return oe.push(_),ge(oe)}).then(()=>{oe=[];for(const P of ie)if(P.beforeEnter)if(ni(P.beforeEnter))for(const O of P.beforeEnter)oe.push(sr(O,V,le));else oe.push(sr(P.beforeEnter,V,le));return oe.push(_),ge(oe)}).then(()=>(V.matched.forEach(P=>P.enterCallbacks={}),oe=lh(ie,"beforeRouteEnter",V,le,z),oe.push(_),ge(oe))).then(()=>{oe=[];for(const P of s.list())oe.push(sr(P,V,le));return oe.push(_),ge(oe)}).catch(P=>yi(P,8)?P:Promise.reject(P))}function M(V,le,oe){a.list().forEach(ue=>z(()=>ue(V,le,oe)))}function I(V,le,oe,ue,we){const ie=y(V,le);if(ie)return ie;const _=le===Yi,P=Do?history.state:{};oe&&(ue||_?r.replace(V.fullPath,mt({scroll:_&&P&&P.scroll},we)):r.push(V.fullPath,we)),l.value=V,be(V,le,oe,_),xe()}let N;function W(){N||(N=r.listen((V,le,oe)=>{if(!ce.listening)return;const ue=p(V),we=E(ue);if(we){T(mt(we,{replace:!0}),ue).catch(aa);return}c=ue;const ie=l.value;Do&&IL(pg(ie.fullPath,oe.delta),Su()),b(ue,ie).catch(_=>yi(_,12)?_:yi(_,2)?(T(_.to,ue).then(P=>{yi(P,20)&&!oe.delta&&oe.type===Aa.pop&&r.go(-1,!1)}).catch(aa),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),j(_,ue,ie))).then(_=>{_=_||I(ue,ie,!1),_&&(oe.delta&&!yi(_,8)?r.go(-oe.delta,!1):oe.type===Aa.pop&&yi(_,20)&&r.go(-1,!1)),M(ue,ie,_)}).catch(aa)}))}let ne=Ns(),X=Ns(),te;function j(V,le,oe){xe(V);const ue=X.list();return ue.length?ue.forEach(we=>we(V,le,oe)):console.error(V),Promise.reject(V)}function pe(){return te&&l.value!==Yi?Promise.resolve():new Promise((V,le)=>{ne.add([V,le])})}function xe(V){return te||(te=!V,W(),ne.list().forEach(([le,oe])=>V?oe(V):le()),ne.reset()),V}function be(V,le,oe,ue){const{scrollBehavior:we}=t;if(!Do||!we)return Promise.resolve();const ie=!oe&&OL(pg(V.fullPath,0))||(ue||!oe)&&history.state&&history.state.scroll||null;return Gr().then(()=>we(V,le,ie)).then(_=>_&&DL(_)).catch(_=>j(_,V,le))}const ke=V=>r.go(V);let Ce;const J=new Set,ce={currentRoute:l,listening:!0,addRoute:f,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:v,resolve:p,options:t,push:w,replace:L,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:o.add,beforeResolve:s.add,afterEach:a.add,onError:X.add,isReady:pe,install(V){const le=this;V.component("RouterLink",bd),V.component("RouterView",yb),V.config.globalProperties.$router=le,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Zt(l)}),Do&&!Ce&&l.value===Yi&&(Ce=!0,w(r.location).catch(we=>{}));const oe={};for(const we in Yi)Object.defineProperty(oe,we,{get:()=>l.value[we],enumerable:!0});V.provide(lp,le),V.provide(bb,Uv(oe)),V.provide(_d,l);const ue=V.unmount;J.add(V),V.unmount=function(){J.delete(V),J.size<1&&(c=Yi,N&&N(),N=null,l.value=Yi,Ce=!1,te=!1),ue()}}};function ge(V){return V.reduce((le,oe)=>le.then(()=>z(oe)),Promise.resolve())}return ce}function lD(t,e){const n=[],i=[],r=[],o=Math.max(e.matched.length,t.matched.length);for(let s=0;s<o;s++){const a=e.matched[s];a&&(t.matched.find(c=>ls(c,a))?i.push(a):n.push(a));const l=t.matched[s];l&&(e.matched.find(c=>ls(c,l))||r.push(l))}return[n,i,r]}const cD={class:"wrapper"},uD={class:"nav"},hD=Lt({__name:"App",setup(t){return console.log(od.value),(e,n)=>(Zr(),Rc(Zt(WP),{theme:Zt(od)?Zt(aL):null},{default:ur(()=>[wt(Zt(K2),null,{default:ur(()=>[Wr("header",null,[Wr("div",cD,[Wr("nav",uD,[wt(Zt(bd),{to:"/"},{default:ur(()=>n[0]||(n[0]=[os(" Home ")])),_:1}),wt(Zt(bd),{to:"/about"},{default:ur(()=>n[1]||(n[1]=[os(" About ")])),_:1})])])]),wt(Zt(yb))]),_:1})]),_:1},8,["theme"]))}}),Sb=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},dD=Sb(hD,[["__scopeId","data-v-daac44cb"]]),fD="modulepreload",pD=function(t,e){return new URL(t,e).href},Pg={},mD=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(c=>{if(c=pD(c,i),c in Pg)return;Pg[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!i)for(let m=s.length-1;m>=0;m--){const v=s[m];if(v.href===c&&(!u||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":fD,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((m,v)=>{f.addEventListener("load",m),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return r.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return e().catch(o)})},Cb=["#000089","#00018f","#000199","#0001a3","#0101ad","#0000b8","#0001c1","#0000cc","#0001d5","#0000e0","#0101e9","#0001f3","#0002fa","#0008ff","#0013fe","#011dfe","#0027ff","#0030fe","#003afe","#0045ff","#0150ff","#0059fe","#0063ff","#006dff","#0177ff","#0081ff","#008bff","#0195ff","#009fff","#00a8ff","#00b3fe","#01bdfe","#01c8ff","#01d1ff","#00dbff","#00e5ff","#00f0ff","#05f9ff","#07fff9","#0efff0","#18fee7","#23fedc","#2effd3","#37ffc9","#41fec0","#4affb5","#54ffa9","#5fff9f","#68ff97","#73ff8d","#7dff82","#86ff78","#90ff6f","#9aff64","#a3ff5a","#b0ff50","#b9ff46","#c3ff3c","#ceff33","#d8fe28","#e1ff1e","#ebff13","#f5ff0a","#fcfd05","#fff402","#ffeb00","#ffe100","#ffd700","#ffcc00","#ffc301","#ffb901","#ffaf00","#fea300","#ff9a01","#fe9100","#ff8600","#fe7c01","#ff7201","#fe6a00","#ff6000","#ff5400","#ff4b00","#ff4100","#fe3700","#ff2c00","#ff2200","#fe1800","#fd0e00","#fc0600","#f60000","#ec0100","#e40001","#da0000","#d00000","#c60001","#bd0001","#b20000","#a80000","#9e0000","#980000"];function ca(t,e){return t==null||e==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function gD(t,e){return t==null||e==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Mb(t){let e,n,i;t.length!==2?(e=ca,n=(a,l)=>ca(t(a),l),i=(a,l)=>t(a)-l):(e=t===ca||t===gD?t:vD,n=t,i=t);function r(a,l,c=0,u=a.length){if(c<u){if(e(l,l)!==0)return u;do{const h=c+u>>>1;n(a[h],l)<0?c=h+1:u=h}while(c<u)}return c}function o(a,l,c=0,u=a.length){if(c<u){if(e(l,l)!==0)return u;do{const h=c+u>>>1;n(a[h],l)<=0?c=h+1:u=h}while(c<u)}return c}function s(a,l,c=0,u=a.length){const h=r(a,l,c,u-1);return h>c&&i(a[h-1],l)>-i(a[h],l)?h-1:h}return{left:r,center:s,right:o}}function vD(){return 0}function wb(t){return t===null?NaN:+t}const xD=Mb(ca),Eb=xD.right;Mb(wb).center;const _D=Math.sqrt(50),bD=Math.sqrt(10),yD=Math.sqrt(2);function Uc(t,e,n){const i=(e-t)/Math.max(0,n),r=Math.floor(Math.log10(i)),o=i/Math.pow(10,r),s=o>=_D?10:o>=bD?5:o>=yD?2:1;let a,l,c;return r<0?(c=Math.pow(10,-r)/s,a=Math.round(t*c),l=Math.round(e*c),a/c<t&&++a,l/c>e&&--l,c=-c):(c=Math.pow(10,r)*s,a=Math.round(t/c),l=Math.round(e/c),a*c<t&&++a,l*c>e&&--l),l<a&&.5<=n&&n<2?Uc(t,e,n*2):[a,l,c]}function SD(t,e,n){if(e=+e,t=+t,n=+n,!(n>0))return[];if(t===e)return[t];const i=e<t,[r,o,s]=i?Uc(e,t,n):Uc(t,e,n);if(!(o>=r))return[];const a=o-r+1,l=new Array(a);if(i)if(s<0)for(let c=0;c<a;++c)l[c]=(o-c)/-s;else for(let c=0;c<a;++c)l[c]=(o-c)*s;else if(s<0)for(let c=0;c<a;++c)l[c]=(r+c)/-s;else for(let c=0;c<a;++c)l[c]=(r+c)*s;return l}function yd(t,e,n){return e=+e,t=+t,n=+n,Uc(t,e,n)[2]}function CD(t,e,n){e=+e,t=+t,n=+n;const i=e<t,r=i?yd(e,t,n):yd(t,e,n);return(i?-1:1)*(r<0?1/-r:r)}function MD(t,e,n=wb){if(!(!(i=t.length)||isNaN(e=+e))){if(e<=0||i<2)return+n(t[0],0,t);if(e>=1)return+n(t[i-1],i-1,t);var i,r=(i-1)*e,o=Math.floor(r),s=+n(t[o],o,t),a=+n(t[o+1],o+1,t);return s+(a-s)*(r-o)}}var wD={value:()=>{}};function Tb(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new pc(n)}function pc(t){this._=t}function ED(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}pc.prototype=Tb.prototype={constructor:pc,on:function(t,e){var n=this._,i=ED(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=TD(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=Rg(n[r],t.name,e);else if(e==null)for(r in n)n[r]=Rg(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new pc(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function TD(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function Rg(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=wD,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var Sd="http://www.w3.org/1999/xhtml";const Lg={svg:"http://www.w3.org/2000/svg",xhtml:Sd,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Cu(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),Lg.hasOwnProperty(e)?{space:Lg[e],local:t}:t}function AD(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===Sd&&e.documentElement.namespaceURI===Sd?e.createElement(t):e.createElementNS(n,t)}}function PD(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Ab(t){var e=Cu(t);return(e.local?PD:AD)(e)}function RD(){}function cp(t){return t==null?RD:function(){return this.querySelector(t)}}function LD(t){typeof t!="function"&&(t=cp(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,c,u=0;u<s;++u)(l=o[u])&&(c=t.call(l,l.__data__,u,o))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new ii(i,this._parents)}function DD(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function ID(){return[]}function Pb(t){return t==null?ID:function(){return this.querySelectorAll(t)}}function OD(t){return function(){return DD(t.apply(this,arguments))}}function ND(t){typeof t=="function"?t=OD(t):t=Pb(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,c=0;c<a;++c)(l=s[c])&&(i.push(t.call(l,l.__data__,c,s)),r.push(l));return new ii(i,r)}function Rb(t){return function(){return this.matches(t)}}function Lb(t){return function(e){return e.matches(t)}}var FD=Array.prototype.find;function UD(t){return function(){return FD.call(this.children,t)}}function zD(){return this.firstElementChild}function BD(t){return this.select(t==null?zD:UD(typeof t=="function"?t:Lb(t)))}var HD=Array.prototype.filter;function kD(){return Array.from(this.children)}function VD(t){return function(){return HD.call(this.children,t)}}function $D(t){return this.selectAll(t==null?kD:VD(typeof t=="function"?t:Lb(t)))}function GD(t){typeof t!="function"&&(t=Rb(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,c=0;c<s;++c)(l=o[c])&&t.call(l,l.__data__,c,o)&&a.push(l);return new ii(i,this._parents)}function Db(t){return new Array(t.length)}function WD(){return new ii(this._enter||this._groups.map(Db),this._parents)}function zc(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}zc.prototype={constructor:zc,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function XD(t){return function(){return t}}function jD(t,e,n,i,r,o){for(var s=0,a,l=e.length,c=o.length;s<c;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new zc(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function qD(t,e,n,i,r,o,s){var a,l,c=new Map,u=e.length,h=o.length,d=new Array(u),f;for(a=0;a<u;++a)(l=e[a])&&(d[a]=f=s.call(l,l.__data__,a,e)+"",c.has(f)?r[a]=l:c.set(f,l));for(a=0;a<h;++a)f=s.call(t,o[a],a,o)+"",(l=c.get(f))?(i[a]=l,l.__data__=o[a],c.delete(f)):n[a]=new zc(t,o[a]);for(a=0;a<u;++a)(l=e[a])&&c.get(d[a])===l&&(r[a]=l)}function YD(t){return t.__data__}function KD(t,e){if(!arguments.length)return Array.from(this,YD);var n=e?qD:jD,i=this._parents,r=this._groups;typeof t!="function"&&(t=XD(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),c=0;c<o;++c){var u=i[c],h=r[c],d=h.length,f=ZD(t.call(u,u&&u.__data__,c,i)),m=f.length,v=a[c]=new Array(m),g=s[c]=new Array(m),p=l[c]=new Array(d);n(u,h,v,g,p,f,e);for(var S=0,y=0,w,L;S<m;++S)if(w=v[S]){for(S>=y&&(y=S+1);!(L=g[y])&&++y<m;);w._next=L||null}}return s=new ii(s,i),s._enter=a,s._exit=l,s}function ZD(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function JD(){return new ii(this._exit||this._groups.map(Db),this._parents)}function QD(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function eI(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var c=n[l],u=i[l],h=c.length,d=a[l]=new Array(h),f,m=0;m<h;++m)(f=c[m]||u[m])&&(d[m]=f);for(;l<r;++l)a[l]=n[l];return new ii(a,this._parents)}function tI(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function nI(t){t||(t=iI);function e(h,d){return h&&d?t(h.__data__,d.__data__):!h-!d}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),c,u=0;u<a;++u)(c=s[u])&&(l[u]=c);l.sort(e)}return new ii(r,this._parents).order()}function iI(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function rI(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function oI(){return Array.from(this)}function sI(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function aI(){let t=0;for(const e of this)++t;return t}function lI(){return!this.node()}function cI(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function uI(t){return function(){this.removeAttribute(t)}}function hI(t){return function(){this.removeAttributeNS(t.space,t.local)}}function dI(t,e){return function(){this.setAttribute(t,e)}}function fI(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function pI(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function mI(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function gI(t,e){var n=Cu(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?hI:uI:typeof e=="function"?n.local?mI:pI:n.local?fI:dI)(n,e))}function Ib(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function vI(t){return function(){this.style.removeProperty(t)}}function xI(t,e,n){return function(){this.style.setProperty(t,e,n)}}function _I(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function bI(t,e,n){return arguments.length>1?this.each((e==null?vI:typeof e=="function"?_I:xI)(t,e,n??"")):us(this.node(),t)}function us(t,e){return t.style.getPropertyValue(e)||Ib(t).getComputedStyle(t,null).getPropertyValue(e)}function yI(t){return function(){delete this[t]}}function SI(t,e){return function(){this[t]=e}}function CI(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function MI(t,e){return arguments.length>1?this.each((e==null?yI:typeof e=="function"?CI:SI)(t,e)):this.node()[t]}function Ob(t){return t.trim().split(/^|\s+/)}function up(t){return t.classList||new Nb(t)}function Nb(t){this._node=t,this._names=Ob(t.getAttribute("class")||"")}Nb.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Fb(t,e){for(var n=up(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function Ub(t,e){for(var n=up(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function wI(t){return function(){Fb(this,t)}}function EI(t){return function(){Ub(this,t)}}function TI(t,e){return function(){(e.apply(this,arguments)?Fb:Ub)(this,t)}}function AI(t,e){var n=Ob(t+"");if(arguments.length<2){for(var i=up(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?TI:e?wI:EI)(n,e))}function PI(){this.textContent=""}function RI(t){return function(){this.textContent=t}}function LI(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function DI(t){return arguments.length?this.each(t==null?PI:(typeof t=="function"?LI:RI)(t)):this.node().textContent}function II(){this.innerHTML=""}function OI(t){return function(){this.innerHTML=t}}function NI(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function FI(t){return arguments.length?this.each(t==null?II:(typeof t=="function"?NI:OI)(t)):this.node().innerHTML}function UI(){this.nextSibling&&this.parentNode.appendChild(this)}function zI(){return this.each(UI)}function BI(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function HI(){return this.each(BI)}function kI(t){var e=typeof t=="function"?t:Ab(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function VI(){return null}function $I(t,e){var n=typeof t=="function"?t:Ab(t),i=e==null?VI:typeof e=="function"?e:cp(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function GI(){var t=this.parentNode;t&&t.removeChild(this)}function WI(){return this.each(GI)}function XI(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function jI(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function qI(t){return this.select(t?jI:XI)}function YI(t){return arguments.length?this.property("__data__",t):this.node().__data__}function KI(t){return function(e){t.call(this,e,this.__data__)}}function ZI(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function JI(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function QI(t,e,n){return function(){var i=this.__on,r,o=KI(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function e3(t,e,n){var i=ZI(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(r=0,u=a[l];r<o;++r)if((s=i[r]).type===u.type&&s.name===u.name)return u.value}return}for(a=e?QI:JI,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function zb(t,e,n){var i=Ib(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function t3(t,e){return function(){return zb(this,t,e)}}function n3(t,e){return function(){return zb(this,t,e.apply(this,arguments))}}function i3(t,e){return this.each((typeof e=="function"?n3:t3)(t,e))}function*r3(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var o3=[null];function ii(t,e){this._groups=t,this._parents=e}function nl(){return new ii([[document.documentElement]],o3)}function s3(){return this}ii.prototype=nl.prototype={constructor:ii,select:LD,selectAll:ND,selectChild:BD,selectChildren:$D,filter:GD,data:KD,enter:WD,exit:JD,join:QD,merge:eI,selection:s3,order:tI,sort:nI,call:rI,nodes:oI,node:sI,size:aI,empty:lI,each:cI,attr:gI,style:bI,property:MI,classed:AI,text:DI,html:FI,raise:zI,lower:HI,append:kI,insert:$I,remove:WI,clone:qI,datum:YI,on:e3,dispatch:i3,[Symbol.iterator]:r3};function hp(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function Bb(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function il(){}var Pa=.7,Bc=1/Pa,Xo="\\s*([+-]?\\d+)\\s*",Ra="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",pi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",a3=/^#([0-9a-f]{3,8})$/,l3=new RegExp(`^rgb\\(${Xo},${Xo},${Xo}\\)$`),c3=new RegExp(`^rgb\\(${pi},${pi},${pi}\\)$`),u3=new RegExp(`^rgba\\(${Xo},${Xo},${Xo},${Ra}\\)$`),h3=new RegExp(`^rgba\\(${pi},${pi},${pi},${Ra}\\)$`),d3=new RegExp(`^hsl\\(${Ra},${pi},${pi}\\)$`),f3=new RegExp(`^hsla\\(${Ra},${pi},${pi},${Ra}\\)$`),Dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};hp(il,eo,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Ig,formatHex:Ig,formatHex8:p3,formatHsl:m3,formatRgb:Og,toString:Og});function Ig(){return this.rgb().formatHex()}function p3(){return this.rgb().formatHex8()}function m3(){return Hb(this).formatHsl()}function Og(){return this.rgb().formatRgb()}function eo(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=a3.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?Ng(e):n===3?new Mn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?Tl(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?Tl(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=l3.exec(t))?new Mn(e[1],e[2],e[3],1):(e=c3.exec(t))?new Mn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=u3.exec(t))?Tl(e[1],e[2],e[3],e[4]):(e=h3.exec(t))?Tl(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=d3.exec(t))?zg(e[1],e[2]/100,e[3]/100,1):(e=f3.exec(t))?zg(e[1],e[2]/100,e[3]/100,e[4]):Dg.hasOwnProperty(t)?Ng(Dg[t]):t==="transparent"?new Mn(NaN,NaN,NaN,0):null}function Ng(t){return new Mn(t>>16&255,t>>8&255,t&255,1)}function Tl(t,e,n,i){return i<=0&&(t=e=n=NaN),new Mn(t,e,n,i)}function g3(t){return t instanceof il||(t=eo(t)),t?(t=t.rgb(),new Mn(t.r,t.g,t.b,t.opacity)):new Mn}function Cd(t,e,n,i){return arguments.length===1?g3(t):new Mn(t,e,n,i??1)}function Mn(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}hp(Mn,Cd,Bb(il,{brighter(t){return t=t==null?Bc:Math.pow(Bc,t),new Mn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?Pa:Math.pow(Pa,t),new Mn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Mn(qr(this.r),qr(this.g),qr(this.b),Hc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Fg,formatHex:Fg,formatHex8:v3,formatRgb:Ug,toString:Ug}));function Fg(){return`#${Br(this.r)}${Br(this.g)}${Br(this.b)}`}function v3(){return`#${Br(this.r)}${Br(this.g)}${Br(this.b)}${Br((isNaN(this.opacity)?1:this.opacity)*255)}`}function Ug(){const t=Hc(this.opacity);return`${t===1?"rgb(":"rgba("}${qr(this.r)}, ${qr(this.g)}, ${qr(this.b)}${t===1?")":`, ${t})`}`}function Hc(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function qr(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Br(t){return t=qr(t),(t<16?"0":"")+t.toString(16)}function zg(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Yn(t,e,n,i)}function Hb(t){if(t instanceof Yn)return new Yn(t.h,t.s,t.l,t.opacity);if(t instanceof il||(t=eo(t)),!t)return new Yn;if(t instanceof Yn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),o=Math.max(e,n,i),s=NaN,a=o-r,l=(o+r)/2;return a?(e===o?s=(n-i)/a+(n<i)*6:n===o?s=(i-e)/a+2:s=(e-n)/a+4,a/=l<.5?o+r:2-o-r,s*=60):a=l>0&&l<1?0:s,new Yn(s,a,l,t.opacity)}function x3(t,e,n,i){return arguments.length===1?Hb(t):new Yn(t,e,n,i??1)}function Yn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}hp(Yn,x3,Bb(il,{brighter(t){return t=t==null?Bc:Math.pow(Bc,t),new Yn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?Pa:Math.pow(Pa,t),new Yn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new Mn(ch(t>=240?t-240:t+120,r,i),ch(t,r,i),ch(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new Yn(Bg(this.h),Al(this.s),Al(this.l),Hc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Hc(this.opacity);return`${t===1?"hsl(":"hsla("}${Bg(this.h)}, ${Al(this.s)*100}%, ${Al(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Bg(t){return t=(t||0)%360,t<0?t+360:t}function Al(t){return Math.max(0,Math.min(1,t||0))}function ch(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const dp=t=>()=>t;function _3(t,e){return function(n){return t+n*e}}function b3(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function y3(t){return(t=+t)==1?kb:function(e,n){return n-e?b3(e,n,t):dp(isNaN(e)?n:e)}}function kb(t,e){var n=e-t;return n?_3(t,n):dp(isNaN(t)?e:t)}const kc=function t(e){var n=y3(e);function i(r,o){var s=n((r=Cd(r)).r,(o=Cd(o)).r),a=n(r.g,o.g),l=n(r.b,o.b),c=kb(r.opacity,o.opacity);return function(u){return r.r=s(u),r.g=a(u),r.b=l(u),r.opacity=c(u),r+""}}return i.gamma=t,i}(1);function S3(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,i=e.slice(),r;return function(o){for(r=0;r<n;++r)i[r]=t[r]*(1-o)+e[r]*o;return i}}function C3(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function M3(t,e){var n=e?e.length:0,i=t?Math.min(n,t.length):0,r=new Array(i),o=new Array(n),s;for(s=0;s<i;++s)r[s]=fp(t[s],e[s]);for(;s<n;++s)o[s]=e[s];return function(a){for(s=0;s<i;++s)o[s]=r[s](a);return o}}function w3(t,e){var n=new Date;return t=+t,e=+e,function(i){return n.setTime(t*(1-i)+e*i),n}}function qn(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function E3(t,e){var n={},i={},r;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in t?n[r]=fp(t[r],e[r]):i[r]=e[r];return function(o){for(r in n)i[r]=n[r](o);return i}}var Md=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,uh=new RegExp(Md.source,"g");function T3(t){return function(){return t}}function A3(t){return function(e){return t(e)+""}}function Vb(t,e){var n=Md.lastIndex=uh.lastIndex=0,i,r,o,s=-1,a=[],l=[];for(t=t+"",e=e+"";(i=Md.exec(t))&&(r=uh.exec(e));)(o=r.index)>n&&(o=e.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(i=i[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,l.push({i:s,x:qn(i,r)})),n=uh.lastIndex;return n<e.length&&(o=e.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?A3(l[0].x):T3(e):(e=l.length,function(c){for(var u=0,h;u<e;++u)a[(h=l[u]).i]=h.x(c);return a.join("")})}function fp(t,e){var n=typeof e,i;return e==null||n==="boolean"?dp(e):(n==="number"?qn:n==="string"?(i=eo(e))?(e=i,kc):Vb:e instanceof eo?kc:e instanceof Date?w3:C3(e)?S3:Array.isArray(e)?M3:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?E3:qn)(t,e)}function P3(t,e){return t=+t,e=+e,function(n){return Math.round(t*(1-n)+e*n)}}var Hg=180/Math.PI,wd={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function $b(t,e,n,i,r,o){var s,a,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,s=-s),{translateX:r,translateY:o,rotate:Math.atan2(e,t)*Hg,skewX:Math.atan(l)*Hg,scaleX:s,scaleY:a}}var Pl;function R3(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?wd:$b(e.a,e.b,e.c,e.d,e.e,e.f)}function L3(t){return t==null||(Pl||(Pl=document.createElementNS("http://www.w3.org/2000/svg","g")),Pl.setAttribute("transform",t),!(t=Pl.transform.baseVal.consolidate()))?wd:(t=t.matrix,$b(t.a,t.b,t.c,t.d,t.e,t.f))}function Gb(t,e,n,i){function r(c){return c.length?c.pop()+" ":""}function o(c,u,h,d,f,m){if(c!==h||u!==d){var v=f.push("translate(",null,e,null,n);m.push({i:v-4,x:qn(c,h)},{i:v-2,x:qn(u,d)})}else(h||d)&&f.push("translate("+h+e+d+n)}function s(c,u,h,d){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),d.push({i:h.push(r(h)+"rotate(",null,i)-2,x:qn(c,u)})):u&&h.push(r(h)+"rotate("+u+i)}function a(c,u,h,d){c!==u?d.push({i:h.push(r(h)+"skewX(",null,i)-2,x:qn(c,u)}):u&&h.push(r(h)+"skewX("+u+i)}function l(c,u,h,d,f,m){if(c!==h||u!==d){var v=f.push(r(f)+"scale(",null,",",null,")");m.push({i:v-4,x:qn(c,h)},{i:v-2,x:qn(u,d)})}else(h!==1||d!==1)&&f.push(r(f)+"scale("+h+","+d+")")}return function(c,u){var h=[],d=[];return c=t(c),u=t(u),o(c.translateX,c.translateY,u.translateX,u.translateY,h,d),s(c.rotate,u.rotate,h,d),a(c.skewX,u.skewX,h,d),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,h,d),c=u=null,function(f){for(var m=-1,v=d.length,g;++m<v;)h[(g=d[m]).i]=g.x(f);return h.join("")}}}var D3=Gb(R3,"px, ","px)","deg)"),I3=Gb(L3,", ",")",")"),hs=0,Xs=0,Fs=0,Wb=1e3,Vc,js,$c=0,to=0,Mu=0,La=typeof performance=="object"&&performance.now?performance:Date,Xb=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function pp(){return to||(Xb(O3),to=La.now()+Mu)}function O3(){to=0}function Gc(){this._call=this._time=this._next=null}Gc.prototype=jb.prototype={constructor:Gc,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?pp():+n)+(e==null?0:+e),!this._next&&js!==this&&(js?js._next=this:Vc=this,js=this),this._call=t,this._time=n,Ed()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ed())}};function jb(t,e,n){var i=new Gc;return i.restart(t,e,n),i}function N3(){pp(),++hs;for(var t=Vc,e;t;)(e=to-t._time)>=0&&t._call.call(void 0,e),t=t._next;--hs}function kg(){to=($c=La.now())+Mu,hs=Xs=0;try{N3()}finally{hs=0,U3(),to=0}}function F3(){var t=La.now(),e=t-$c;e>Wb&&(Mu-=e,$c=t)}function U3(){for(var t,e=Vc,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Vc=n);js=t,Ed(i)}function Ed(t){if(!hs){Xs&&(Xs=clearTimeout(Xs));var e=t-to;e>24?(t<1/0&&(Xs=setTimeout(kg,t-La.now()-Mu)),Fs&&(Fs=clearInterval(Fs))):(Fs||($c=La.now(),Fs=setInterval(F3,Wb)),hs=1,Xb(kg))}}function Vg(t,e,n){var i=new Gc;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var z3=Tb("start","end","cancel","interrupt"),B3=[],qb=0,$g=1,Td=2,mc=3,Gg=4,Ad=5,gc=6;function wu(t,e,n,i,r,o){var s=t.__transition;if(!s)t.__transition={};else if(n in s)return;H3(t,n,{name:e,index:i,group:r,on:z3,tween:B3,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:qb})}function mp(t,e){var n=oi(t,e);if(n.state>qb)throw new Error("too late; already scheduled");return n}function vi(t,e){var n=oi(t,e);if(n.state>mc)throw new Error("too late; already running");return n}function oi(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function H3(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=jb(o,0,n.time);function o(c){n.state=$g,n.timer.restart(s,n.delay,n.time),n.delay<=c&&s(c-n.delay)}function s(c){var u,h,d,f;if(n.state!==$g)return l();for(u in i)if(f=i[u],f.name===n.name){if(f.state===mc)return Vg(s);f.state===Gg?(f.state=gc,f.timer.stop(),f.on.call("interrupt",t,t.__data__,f.index,f.group),delete i[u]):+u<e&&(f.state=gc,f.timer.stop(),f.on.call("cancel",t,t.__data__,f.index,f.group),delete i[u])}if(Vg(function(){n.state===mc&&(n.state=Gg,n.timer.restart(a,n.delay,n.time),a(c))}),n.state=Td,n.on.call("start",t,t.__data__,n.index,n.group),n.state===Td){for(n.state=mc,r=new Array(d=n.tween.length),u=0,h=-1;u<d;++u)(f=n.tween[u].value.call(t,t.__data__,n.index,n.group))&&(r[++h]=f);r.length=h+1}}function a(c){for(var u=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=Ad,1),h=-1,d=r.length;++h<d;)r[h].call(t,u);n.state===Ad&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=gc,n.timer.stop(),delete i[e];for(var c in i)return;delete t.__transition}}function k3(t,e){var n=t.__transition,i,r,o=!0,s;if(n){e=e==null?null:e+"";for(s in n){if((i=n[s]).name!==e){o=!1;continue}r=i.state>Td&&i.state<Ad,i.state=gc,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[s]}o&&delete t.__transition}}function V3(t){return this.each(function(){k3(this,t)})}function $3(t,e){var n,i;return function(){var r=vi(this,t),o=r.tween;if(o!==n){i=n=o;for(var s=0,a=i.length;s<a;++s)if(i[s].name===e){i=i.slice(),i.splice(s,1);break}}r.tween=i}}function G3(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var o=vi(this,t),s=o.tween;if(s!==i){r=(i=s).slice();for(var a={name:e,value:n},l=0,c=r.length;l<c;++l)if(r[l].name===e){r[l]=a;break}l===c&&r.push(a)}o.tween=r}}function W3(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=oi(this.node(),n).tween,r=0,o=i.length,s;r<o;++r)if((s=i[r]).name===t)return s.value;return null}return this.each((e==null?$3:G3)(n,t,e))}function gp(t,e,n){var i=t._id;return t.each(function(){var r=vi(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return oi(r,i).value[e]}}function Yb(t,e){var n;return(typeof e=="number"?qn:e instanceof eo?kc:(n=eo(e))?(e=n,kc):Vb)(t,e)}function X3(t){return function(){this.removeAttribute(t)}}function j3(t){return function(){this.removeAttributeNS(t.space,t.local)}}function q3(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttribute(t);return s===r?null:s===i?o:o=e(i=s,n)}}function Y3(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===r?null:s===i?o:o=e(i=s,n)}}function K3(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function Z3(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function J3(t,e){var n=Cu(t),i=n==="transform"?I3:Yb;return this.attrTween(t,typeof e=="function"?(n.local?Z3:K3)(n,i,gp(this,"attr."+t,e)):e==null?(n.local?j3:X3)(n):(n.local?Y3:q3)(n,i,e))}function Q3(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function eO(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function tO(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&eO(t,o)),n}return r._value=e,r}function nO(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&Q3(t,o)),n}return r._value=e,r}function iO(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=Cu(t);return this.tween(n,(i.local?tO:nO)(i,e))}function rO(t,e){return function(){mp(this,t).delay=+e.apply(this,arguments)}}function oO(t,e){return e=+e,function(){mp(this,t).delay=e}}function sO(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?rO:oO)(e,t)):oi(this.node(),e).delay}function aO(t,e){return function(){vi(this,t).duration=+e.apply(this,arguments)}}function lO(t,e){return e=+e,function(){vi(this,t).duration=e}}function cO(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?aO:lO)(e,t)):oi(this.node(),e).duration}function uO(t,e){if(typeof e!="function")throw new Error;return function(){vi(this,t).ease=e}}function hO(t){var e=this._id;return arguments.length?this.each(uO(e,t)):oi(this.node(),e).ease}function dO(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;vi(this,t).ease=n}}function fO(t){if(typeof t!="function")throw new Error;return this.each(dO(this._id,t))}function pO(t){typeof t!="function"&&(t=Rb(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,c=0;c<s;++c)(l=o[c])&&t.call(l,l.__data__,c,o)&&a.push(l);return new Hi(i,this._parents,this._name,this._id)}function mO(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,o=Math.min(i,r),s=new Array(i),a=0;a<o;++a)for(var l=e[a],c=n[a],u=l.length,h=s[a]=new Array(u),d,f=0;f<u;++f)(d=l[f]||c[f])&&(h[f]=d);for(;a<i;++a)s[a]=e[a];return new Hi(s,this._parents,this._name,this._id)}function gO(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function vO(t,e,n){var i,r,o=gO(e)?mp:vi;return function(){var s=o(this,t),a=s.on;a!==i&&(r=(i=a).copy()).on(e,n),s.on=r}}function xO(t,e){var n=this._id;return arguments.length<2?oi(this.node(),n).on.on(t):this.each(vO(n,t,e))}function _O(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function bO(){return this.on("end.remove",_O(this._id))}function yO(t){var e=this._name,n=this._id;typeof t!="function"&&(t=cp(t));for(var i=this._groups,r=i.length,o=new Array(r),s=0;s<r;++s)for(var a=i[s],l=a.length,c=o[s]=new Array(l),u,h,d=0;d<l;++d)(u=a[d])&&(h=t.call(u,u.__data__,d,a))&&("__data__"in u&&(h.__data__=u.__data__),c[d]=h,wu(c[d],e,n,d,c,oi(u,n)));return new Hi(o,this._parents,e,n)}function SO(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Pb(t));for(var i=this._groups,r=i.length,o=[],s=[],a=0;a<r;++a)for(var l=i[a],c=l.length,u,h=0;h<c;++h)if(u=l[h]){for(var d=t.call(u,u.__data__,h,l),f,m=oi(u,n),v=0,g=d.length;v<g;++v)(f=d[v])&&wu(f,e,n,v,d,m);o.push(d),s.push(u)}return new Hi(o,s,e,n)}var CO=nl.prototype.constructor;function MO(){return new CO(this._groups,this._parents)}function wO(t,e){var n,i,r;return function(){var o=us(this,t),s=(this.style.removeProperty(t),us(this,t));return o===s?null:o===n&&s===i?r:r=e(n=o,i=s)}}function Kb(t){return function(){this.style.removeProperty(t)}}function EO(t,e,n){var i,r=n+"",o;return function(){var s=us(this,t);return s===r?null:s===i?o:o=e(i=s,n)}}function TO(t,e,n){var i,r,o;return function(){var s=us(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),us(this,t))),s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a))}}function AO(t,e){var n,i,r,o="style."+e,s="end."+o,a;return function(){var l=vi(this,t),c=l.on,u=l.value[o]==null?a||(a=Kb(e)):void 0;(c!==n||r!==u)&&(i=(n=c).copy()).on(s,r=u),l.on=i}}function PO(t,e,n){var i=(t+="")=="transform"?D3:Yb;return e==null?this.styleTween(t,wO(t,i)).on("end.style."+t,Kb(t)):typeof e=="function"?this.styleTween(t,TO(t,i,gp(this,"style."+t,e))).each(AO(this._id,t)):this.styleTween(t,EO(t,i,e),n).on("end.style."+t,null)}function RO(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function LO(t,e,n){var i,r;function o(){var s=e.apply(this,arguments);return s!==r&&(i=(r=s)&&RO(t,s,n)),i}return o._value=e,o}function DO(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,LO(t,e,n??""))}function IO(t){return function(){this.textContent=t}}function OO(t){return function(){var e=t(this);this.textContent=e??""}}function NO(t){return this.tween("text",typeof t=="function"?OO(gp(this,"text",t)):IO(t==null?"":t+""))}function FO(t){return function(e){this.textContent=t.call(this,e)}}function UO(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&FO(r)),e}return i._value=t,i}function zO(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,UO(t))}function BO(){for(var t=this._name,e=this._id,n=Zb(),i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,c=0;c<a;++c)if(l=s[c]){var u=oi(l,e);wu(l,t,n,c,s,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Hi(i,this._parents,t,n)}function HO(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--r===0&&o()}};n.each(function(){var c=vi(this,i),u=c.on;u!==t&&(e=(t=u).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),c.on=e}),r===0&&o()})}var kO=0;function Hi(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function Zb(){return++kO}var Si=nl.prototype;Hi.prototype={constructor:Hi,select:yO,selectAll:SO,selectChild:Si.selectChild,selectChildren:Si.selectChildren,filter:pO,merge:mO,selection:MO,transition:BO,call:Si.call,nodes:Si.nodes,node:Si.node,size:Si.size,empty:Si.empty,each:Si.each,on:xO,attr:J3,attrTween:iO,style:PO,styleTween:DO,text:NO,textTween:zO,remove:bO,tween:W3,delay:sO,duration:cO,ease:hO,easeVarying:fO,end:HO,[Symbol.iterator]:Si[Symbol.iterator]};function VO(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var $O={time:null,delay:0,duration:250,ease:VO};function GO(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function WO(t){var e,n;t instanceof Hi?(e=t._id,t=t._name):(e=Zb(),(n=$O).time=pp(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,c=0;c<a;++c)(l=s[c])&&wu(l,t,e,c,s,n||GO(l,e));return new Hi(i,this._parents,t,e)}nl.prototype.interrupt=V3;nl.prototype.transition=WO;function XO(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function Wc(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,i=t.slice(0,n);return[i.length>1?i[0]+i.slice(2):i,+t.slice(n+1)]}function ds(t){return t=Wc(Math.abs(t)),t?t[1]:NaN}function jO(t,e){return function(n,i){for(var r=n.length,o=[],s=0,a=t[0],l=0;r>0&&a>0&&(l+a+1>i&&(a=Math.max(1,i-l)),o.push(n.substring(r-=a,r+a)),!((l+=a+1)>i));)a=t[s=(s+1)%t.length];return o.reverse().join(e)}}function qO(t){return function(e){return e.replace(/[0-9]/g,function(n){return t[+n]})}}var YO=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Xc(t){if(!(e=YO.exec(t)))throw new Error("invalid format: "+t);var e;return new vp({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Xc.prototype=vp.prototype;function vp(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}vp.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function KO(t){e:for(var e=t.length,n=1,i=-1,r;n<e;++n)switch(t[n]){case".":i=r=n;break;case"0":i===0&&(i=n),r=n;break;default:if(!+t[n])break e;i>0&&(i=0);break}return i>0?t.slice(0,i)+t.slice(r+1):t}var Jb;function ZO(t,e){var n=Wc(t,e);if(!n)return t+"";var i=n[0],r=n[1],o=r-(Jb=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,s=i.length;return o===s?i:o>s?i+new Array(o-s+1).join("0"):o>0?i.slice(0,o)+"."+i.slice(o):"0."+new Array(1-o).join("0")+Wc(t,Math.max(0,e+o-1))[0]}function Wg(t,e){var n=Wc(t,e);if(!n)return t+"";var i=n[0],r=n[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const Xg={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:XO,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>Wg(t*100,e),r:Wg,s:ZO,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function jg(t){return t}var qg=Array.prototype.map,Yg=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function JO(t){var e=t.grouping===void 0||t.thousands===void 0?jg:jO(qg.call(t.grouping,Number),t.thousands+""),n=t.currency===void 0?"":t.currency[0]+"",i=t.currency===void 0?"":t.currency[1]+"",r=t.decimal===void 0?".":t.decimal+"",o=t.numerals===void 0?jg:qO(qg.call(t.numerals,String)),s=t.percent===void 0?"%":t.percent+"",a=t.minus===void 0?"−":t.minus+"",l=t.nan===void 0?"NaN":t.nan+"";function c(h){h=Xc(h);var d=h.fill,f=h.align,m=h.sign,v=h.symbol,g=h.zero,p=h.width,S=h.comma,y=h.precision,w=h.trim,L=h.type;L==="n"?(S=!0,L="g"):Xg[L]||(y===void 0&&(y=12),w=!0,L="g"),(g||d==="0"&&f==="=")&&(g=!0,d="0",f="=");var E=v==="$"?n:v==="#"&&/[boxX]/.test(L)?"0"+L.toLowerCase():"",T=v==="$"?i:/[%p]/.test(L)?s:"",D=Xg[L],z=/[defgprs%]/.test(L);y=y===void 0?6:/[gprs]/.test(L)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y));function b(M){var I=E,N=T,W,ne,X;if(L==="c")N=D(M)+N,M="";else{M=+M;var te=M<0||1/M<0;if(M=isNaN(M)?l:D(Math.abs(M),y),w&&(M=KO(M)),te&&+M==0&&m!=="+"&&(te=!1),I=(te?m==="("?m:a:m==="-"||m==="("?"":m)+I,N=(L==="s"?Yg[8+Jb/3]:"")+N+(te&&m==="("?")":""),z){for(W=-1,ne=M.length;++W<ne;)if(X=M.charCodeAt(W),48>X||X>57){N=(X===46?r+M.slice(W+1):M.slice(W))+N,M=M.slice(0,W);break}}}S&&!g&&(M=e(M,1/0));var j=I.length+M.length+N.length,pe=j<p?new Array(p-j+1).join(d):"";switch(S&&g&&(M=e(pe+M,pe.length?p-N.length:1/0),pe=""),f){case"<":M=I+M+N+pe;break;case"=":M=I+pe+M+N;break;case"^":M=pe.slice(0,j=pe.length>>1)+I+M+N+pe.slice(j);break;default:M=pe+I+M+N;break}return o(M)}return b.toString=function(){return h+""},b}function u(h,d){var f=c((h=Xc(h),h.type="f",h)),m=Math.max(-8,Math.min(8,Math.floor(ds(d)/3)))*3,v=Math.pow(10,-m),g=Yg[8+m/3];return function(p){return f(v*p)+g}}return{format:c,formatPrefix:u}}var Rl,Qb,ey;QO({thousands:",",grouping:[3],currency:["$",""]});function QO(t){return Rl=JO(t),Qb=Rl.format,ey=Rl.formatPrefix,Rl}function eN(t){return Math.max(0,-ds(Math.abs(t)))}function tN(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(ds(e)/3)))*3-ds(Math.abs(t)))}function nN(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,ds(e)-ds(t))+1}const iN=Math.random,Pd=function t(e){function n(i,r){var o,s;return i=i==null?0:+i,r=r==null?1:+r,function(){var a;if(o!=null)a=o,o=null;else do o=e()*2-1,a=e()*2-1,s=o*o+a*a;while(!s||s>1);return i+r*a*Math.sqrt(-2*Math.log(s)/s)}}return n.source=t,n}(iN);function ty(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}function rN(t){return function(){return t}}function oN(t){return+t}var Kg=[0,1];function Oo(t){return t}function Rd(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:rN(isNaN(e)?NaN:.5)}function sN(t,e){var n;return t>e&&(n=t,t=e,e=n),function(i){return Math.max(t,Math.min(e,i))}}function aN(t,e,n){var i=t[0],r=t[1],o=e[0],s=e[1];return r<i?(i=Rd(r,i),o=n(s,o)):(i=Rd(i,r),o=n(o,s)),function(a){return o(i(a))}}function lN(t,e,n){var i=Math.min(t.length,e.length)-1,r=new Array(i),o=new Array(i),s=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++s<i;)r[s]=Rd(t[s],t[s+1]),o[s]=n(e[s],e[s+1]);return function(a){var l=Eb(t,a,1,i)-1;return o[l](r[l](a))}}function cN(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function uN(){var t=Kg,e=Kg,n=fp,i,r,o,s=Oo,a,l,c;function u(){var d=Math.min(t.length,e.length);return s!==Oo&&(s=sN(t[0],t[d-1])),a=d>2?lN:aN,l=c=null,h}function h(d){return d==null||isNaN(d=+d)?o:(l||(l=a(t.map(i),e,n)))(i(s(d)))}return h.invert=function(d){return s(r((c||(c=a(e,t.map(i),qn)))(d)))},h.domain=function(d){return arguments.length?(t=Array.from(d,oN),u()):t.slice()},h.range=function(d){return arguments.length?(e=Array.from(d),u()):e.slice()},h.rangeRound=function(d){return e=Array.from(d),n=P3,u()},h.clamp=function(d){return arguments.length?(s=d?!0:Oo,u()):s!==Oo},h.interpolate=function(d){return arguments.length?(n=d,u()):n},h.unknown=function(d){return arguments.length?(o=d,h):o},function(d,f){return i=d,r=f,u()}}function hN(){return uN()(Oo,Oo)}function dN(t,e,n,i){var r=CD(t,e,n),o;switch(i=Xc(i??",f"),i.type){case"s":{var s=Math.max(Math.abs(t),Math.abs(e));return i.precision==null&&!isNaN(o=tN(r,s))&&(i.precision=o),ey(i,s)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(o=nN(r,Math.max(Math.abs(t),Math.abs(e))))&&(i.precision=o-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(o=eN(r))&&(i.precision=o-(i.type==="%")*2);break}}return Qb(i)}function fN(t){var e=t.domain;return t.ticks=function(n){var i=e();return SD(i[0],i[i.length-1],n??10)},t.tickFormat=function(n,i){var r=e();return dN(r[0],r[r.length-1],n??10,i)},t.nice=function(n){n==null&&(n=10);var i=e(),r=0,o=i.length-1,s=i[r],a=i[o],l,c,u=10;for(a<s&&(c=s,s=a,a=c,c=r,r=o,o=c);u-- >0;){if(c=yd(s,a,n),c===l)return i[r]=s,i[o]=a,e(i);if(c>0)s=Math.floor(s/c)*c,a=Math.ceil(a/c)*c;else if(c<0)s=Math.ceil(s*c)/c,a=Math.floor(a*c)/c;else break;l=c}return t},t}function Da(){var t=hN();return t.copy=function(){return cN(t,Da())},ty.apply(t,arguments),fN(t)}function xp(){var t=[],e=[],n=[],i;function r(){var s=0,a=Math.max(1,e.length);for(n=new Array(a-1);++s<a;)n[s-1]=MD(t,s/a);return o}function o(s){return s==null||isNaN(s=+s)?i:e[Eb(n,s)]}return o.invertExtent=function(s){var a=e.indexOf(s);return a<0?[NaN,NaN]:[a>0?n[a-1]:t[0],a<n.length?n[a]:t[t.length-1]]},o.domain=function(s){if(!arguments.length)return t.slice();t=[];for(let a of s)a!=null&&!isNaN(a=+a)&&t.push(a);return t.sort(ca),r()},o.range=function(s){return arguments.length?(e=Array.from(s),r()):e.slice()},o.unknown=function(s){return arguments.length?(i=s,o):i},o.quantiles=function(){return n.slice()},o.copy=function(){return xp().domain(t).range(e).unknown(i)},ty.apply(o,arguments)}function qs(t,e,n){this.k=t,this.x=e,this.y=n}qs.prototype={constructor:qs,scale:function(t){return t===1?this:new qs(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new qs(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};qs.prototype;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _p="169",jo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},No={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pN=0,Zg=1,mN=2,ny=1,gN=2,Ri=3,vr=0,wn=1,Oi=2,fr=0,qo=1,Jg=2,Qg=3,e0=4,vN=5,Or=100,xN=101,_N=102,bN=103,yN=104,SN=200,CN=201,MN=202,wN=203,Ld=204,Dd=205,EN=206,TN=207,AN=208,PN=209,RN=210,LN=211,DN=212,IN=213,ON=214,Id=0,Od=1,Nd=2,fs=3,Fd=4,Ud=5,zd=6,Bd=7,iy=0,NN=1,FN=2,pr=0,UN=1,zN=2,BN=3,HN=4,kN=5,VN=6,$N=7,ry=300,ps=301,ms=302,Hd=303,kd=304,Eu=306,Vd=1e3,Hr=1001,$d=1002,Bn=1003,GN=1004,Ll=1005,Kn=1006,hh=1007,kr=1008,ki=1009,oy=1010,sy=1011,Ia=1012,bp=1013,no=1014,Ni=1015,rl=1016,yp=1017,Sp=1018,gs=1020,ay=35902,ly=1021,cy=1022,Jn=1023,uy=1024,hy=1025,Yo=1026,vs=1027,dy=1028,Cp=1029,fy=1030,Mp=1031,wp=1033,vc=33776,xc=33777,_c=33778,bc=33779,Gd=35840,Wd=35841,Xd=35842,jd=35843,qd=36196,Yd=37492,Kd=37496,Zd=37808,Jd=37809,Qd=37810,ef=37811,tf=37812,nf=37813,rf=37814,of=37815,sf=37816,af=37817,lf=37818,cf=37819,uf=37820,hf=37821,yc=36492,df=36494,ff=36495,py=36283,pf=36284,mf=36285,gf=36286,WN=3200,XN=3201,jN=0,qN=1,lr="",ui="srgb",yr="srgb-linear",Ep="display-p3",Tu="display-p3-linear",jc="linear",St="srgb",qc="rec709",Yc="p3",mo=7680,t0=519,YN=512,KN=513,ZN=514,my=515,JN=516,QN=517,eF=518,tF=519,n0=35044,i0="300 es",Fi=2e3,Kc=2001;class uo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let r0=1234567;const ua=Math.PI/180,Oa=180/Math.PI;function ho(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[t&255]+rn[t>>8&255]+rn[t>>16&255]+rn[t>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[n&63|128]+rn[n>>8&255]+"-"+rn[n>>16&255]+rn[n>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function jt(t,e,n){return Math.max(e,Math.min(n,t))}function Tp(t,e){return(t%e+e)%e}function nF(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function iF(t,e,n){return t!==e?(n-t)/(e-t):0}function ha(t,e,n){return(1-n)*t+n*e}function rF(t,e,n,i){return ha(t,e,1-Math.exp(-n*i))}function oF(t,e=1){return e-Math.abs(Tp(t,e*2)-e)}function sF(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function aF(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function lF(t,e){return t+Math.floor(Math.random()*(e-t+1))}function cF(t,e){return t+Math.random()*(e-t)}function uF(t){return t*(.5-Math.random())}function hF(t){t!==void 0&&(r0=t);let e=r0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dF(t){return t*ua}function fF(t){return t*Oa}function pF(t){return(t&t-1)===0&&t!==0}function mF(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function gF(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function vF(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),c=o((e+i)/2),u=s((e+i)/2),h=o((e-i)/2),d=s((e-i)/2),f=o((i-e)/2),m=s((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*m,l*f,a*c);break;case"YXY":t.set(l*f,a*u,l*m,a*c);break;case"ZYZ":t.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Io(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const xF={DEG2RAD:ua,RAD2DEG:Oa,generateUUID:ho,clamp:jt,euclideanModulo:Tp,mapLinear:nF,inverseLerp:iF,lerp:ha,damp:rF,pingpong:oF,smoothstep:sF,smootherstep:aF,randInt:lF,randFloat:cF,randFloatSpread:uF,seededRandom:hF,degToRad:dF,radToDeg:fF,isPowerOfTwo:pF,ceilPowerOfTwo:mF,floorPowerOfTwo:gF,setQuaternionFromProperEuler:vF,normalize:fn,denormalize:Io};class Se{constructor(e=0,n=0){Se.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,n,i,r,o,s,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=o,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],m=i[8],v=r[0],g=r[3],p=r[6],S=r[1],y=r[4],w=r[7],L=r[2],E=r[5],T=r[8];return o[0]=s*v+a*S+l*L,o[3]=s*g+a*y+l*E,o[6]=s*p+a*w+l*T,o[1]=c*v+u*S+h*L,o[4]=c*g+u*y+h*E,o[7]=c*p+u*w+h*T,o[2]=d*v+f*S+m*L,o[5]=d*g+f*y+m*E,o[8]=d*p+f*w+m*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*a*c-i*o*u+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*s-a*c,d=a*l-u*o,f=c*o-s*l,m=n*h+i*d+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*s)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*o-a*n)*v,e[6]=f*v,e[7]=(i*l-c*n)*v,e[8]=(s*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(dh.makeScale(e,n)),this}rotate(e){return this.premultiply(dh.makeRotation(-e)),this}translate(e,n){return this.premultiply(dh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dh=new et;function gy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Zc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function _F(){const t=Zc("canvas");return t.style.display="block",t}const o0={};function Sc(t){t in o0||(o0[t]=!0,console.warn(t))}function bF(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function yF(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function SF(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const s0=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),a0=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[yr]:{transfer:jc,primaries:qc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ui]:{transfer:St,primaries:qc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Tu]:{transfer:jc,primaries:Yc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(a0),fromReference:t=>t.applyMatrix3(s0)},[Ep]:{transfer:St,primaries:Yc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(a0),fromReference:t=>t.applyMatrix3(s0).convertLinearToSRGB()}},CF=new Set([yr,Tu]),ft={enabled:!0,_workingColorSpace:yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!CF.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Us[e].toReference,r=Us[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Us[t].primaries},getTransfer:function(t){return t===lr?jc:Us[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Us[e].luminanceCoefficients)}};function Ko(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function fh(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let go;class MF{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{go===void 0&&(go=Zc("canvas")),go.width=e.width,go.height=e.height;const i=go.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=go}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Zc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ko(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ko(n[i]/255)*255):n[i]=Ko(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wF=0;class vy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wF++}),this.uuid=ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(ph(r[s].image)):o.push(ph(r[s]))}else o=ph(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function ph(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?MF.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let EF=0;class En extends uo{constructor(e=En.DEFAULT_IMAGE,n=En.DEFAULT_MAPPING,i=Hr,r=Hr,o=Kn,s=kr,a=Jn,l=ki,c=En.DEFAULT_ANISOTROPY,u=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EF++}),this.uuid=ho(),this.name="",this.source=new vy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ry)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vd:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case $d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vd:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case $d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=ry;En.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,w=(f+1)/2,L=(p+1)/2,E=(u+d)/4,T=(h+v)/4,D=(m+g)/4;return y>w&&y>L?y<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(y),r=E/i,o=T/i):w>L?w<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(w),i=E/r,o=D/r):L<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),i=T/o,r=D/o),this.set(i,r,o,n),this}let S=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(h-v)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TF extends uo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new En(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new vy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class io extends TF{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class xy extends En{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AF extends En{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ro{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=o[s+0],f=o[s+1],m=o[s+2],v=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=f,e[n+2]=m,e[n+3]=v;return}if(h!==v||l!==d||c!==f||u!==m){let g=1-a;const p=l*d+c*f+u*m+h*v,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),E=Math.atan2(L,p*S);g=Math.sin(g*E)/L,a=Math.sin(a*E)/L}const w=a*S;if(l=l*g+d*w,c=c*g+f*w,u=u*g+m*w,h=h*g+v*w,g===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=o[s],d=o[s+1],f=o[s+2],m=o[s+3];return e[n]=a*m+u*h+l*f-c*d,e[n+1]=l*m+u*d+c*h-a*f,e[n+2]=c*m+u*f+a*d-l*h,e[n+3]=u*m-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(o/2),d=l(i/2),f=l(r/2),m=l(o/2);switch(s){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(o-c)*f,this._z=(s-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(o+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(o-c)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(s-r)/f,this._x=(o+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-i*c,this._z=o*u+s*c+i*l-r*a,this._w=s*u-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-n;return this._w=f*s+n*this._w,this._x=f*i+n*this._x,this._y=f*r+n*this._y,this._z=f*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=s*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(l0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(l0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),u=2*(a*n-o*r),h=2*(o*i-s*n);return this.x=n+l*c+s*h-a*u,this.y=i+l*u+a*c-o*h,this.z=r+l*h+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mh.copy(this).projectOnVector(e),this.sub(mh)}reflect(e){return this.sub(mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mh=new U,l0=new ro;class ol{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Gn):Gn.fromBufferAttribute(o,s),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dl.copy(i.boundingBox)),Dl.applyMatrix4(e.matrixWorld),this.union(Dl)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),Il.subVectors(this.max,zs),vo.subVectors(e.a,zs),xo.subVectors(e.b,zs),_o.subVectors(e.c,zs),Ki.subVectors(xo,vo),Zi.subVectors(_o,xo),wr.subVectors(vo,_o);let n=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-wr.z,wr.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,wr.z,0,-wr.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-wr.y,wr.x,0];return!gh(n,vo,xo,_o,Il)||(n=[1,0,0,0,1,0,0,0,1],!gh(n,vo,xo,_o,Il))?!1:(Ol.crossVectors(Ki,Zi),n=[Ol.x,Ol.y,Ol.z],gh(n,vo,xo,_o,Il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new U,new U,new U,new U,new U,new U,new U,new U],Gn=new U,Dl=new ol,vo=new U,xo=new U,_o=new U,Ki=new U,Zi=new U,wr=new U,zs=new U,Il=new U,Ol=new U,Er=new U;function gh(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Er.fromArray(t,o);const a=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=n.dot(Er),u=i.dot(Er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const PF=new ol,Bs=new U,vh=new U;class Ts{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):PF.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const n=Bs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(vh)),this.expandByPoint(Bs.copy(e.center).sub(vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new U,xh=new U,Nl=new U,Ji=new U,_h=new U,Fl=new U,bh=new U;class sl{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xh.copy(e).add(n).multiplyScalar(.5),Nl.copy(n).sub(e).normalize(),Ji.copy(this.origin).sub(xh);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Nl),a=Ji.dot(this.direction),l=-Ji.dot(Nl),c=Ji.lengthSq(),u=Math.abs(1-s*s);let h,d,f,m;if(u>0)if(h=s*l-a,d=s*a-l,m=o*u,h>=0)if(d>=-m)if(d<=m){const v=1/u;h*=v,d*=v,f=h*(h+s*d+2*a)+d*(s*h+d+2*l)+c}else d=o,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;else d=-o,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-s*o+a)),d=h>0?-o:Math.min(Math.max(-o,-l),o),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(h=Math.max(0,-(s*o+a)),d=h>0?o:Math.min(Math.max(-o,-l),o),f=-h*h+d*(d+2*l)+c);else d=s>0?-o:o,h=Math.max(0,-(s*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xh).addScaledVector(Nl,d),f}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,o){_h.subVectors(n,e),Fl.subVectors(i,e),bh.crossVectors(_h,Fl);let s=this.direction.dot(bh),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ji.subVectors(this.origin,e);const l=a*this.direction.dot(Fl.crossVectors(Ji,Fl));if(l<0)return null;const c=a*this.direction.dot(_h.cross(Ji));if(c<0||l+c>s)return null;const u=-a*Ji.dot(bh);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,o,s,a,l,c,u,h,d,f,m,v,g){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,u,h,d,f,m,v,g)}set(e,n,i,r,o,s,a,l,c,u,h,d,f,m,v,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/bo.setFromMatrixColumn(e,0).length(),o=1/bo.setFromMatrixColumn(e,1).length(),s=1/bo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=s*u,f=s*h,m=a*u,v=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=f+m*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=m+f*c,n[10]=s*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,m=c*u,v=c*h;n[0]=d+v*a,n[4]=m*a-f,n[8]=s*c,n[1]=s*h,n[5]=s*u,n[9]=-a,n[2]=f*a-m,n[6]=v+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,m=c*u,v=c*h;n[0]=d-v*a,n[4]=-s*h,n[8]=m+f*a,n[1]=f+m*a,n[5]=s*u,n[9]=v-d*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*u,f=s*h,m=a*u,v=a*h;n[0]=l*u,n[4]=m*c-f,n[8]=d*c+v,n[1]=l*h,n[5]=v*c+d,n[9]=f*c-m,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,f=s*c,m=a*l,v=a*c;n[0]=l*u,n[4]=v-d*h,n[8]=m*h+f,n[1]=h,n[5]=s*u,n[9]=-a*u,n[2]=-c*u,n[6]=f*h+m,n[10]=d-v*h}else if(e.order==="XZY"){const d=s*l,f=s*c,m=a*l,v=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+v,n[5]=s*u,n[9]=f*h-m,n[2]=m*h-f,n[6]=a*u,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RF,e,LF)}lookAt(e,n,i){const r=this.elements;return Dn.subVectors(e,n),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Qi.crossVectors(i,Dn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Qi.crossVectors(i,Dn)),Qi.normalize(),Ul.crossVectors(Dn,Qi),r[0]=Qi.x,r[4]=Ul.x,r[8]=Dn.x,r[1]=Qi.y,r[5]=Ul.y,r[9]=Dn.y,r[2]=Qi.z,r[6]=Ul.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],m=i[2],v=i[6],g=i[10],p=i[14],S=i[3],y=i[7],w=i[11],L=i[15],E=r[0],T=r[4],D=r[8],z=r[12],b=r[1],M=r[5],I=r[9],N=r[13],W=r[2],ne=r[6],X=r[10],te=r[14],j=r[3],pe=r[7],xe=r[11],be=r[15];return o[0]=s*E+a*b+l*W+c*j,o[4]=s*T+a*M+l*ne+c*pe,o[8]=s*D+a*I+l*X+c*xe,o[12]=s*z+a*N+l*te+c*be,o[1]=u*E+h*b+d*W+f*j,o[5]=u*T+h*M+d*ne+f*pe,o[9]=u*D+h*I+d*X+f*xe,o[13]=u*z+h*N+d*te+f*be,o[2]=m*E+v*b+g*W+p*j,o[6]=m*T+v*M+g*ne+p*pe,o[10]=m*D+v*I+g*X+p*xe,o[14]=m*z+v*N+g*te+p*be,o[3]=S*E+y*b+w*W+L*j,o[7]=S*T+y*M+w*ne+L*pe,o[11]=S*D+y*I+w*X+L*xe,o[15]=S*z+y*N+w*te+L*be,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+o*l*h-r*c*h-o*a*d+i*c*d+r*a*f-i*l*f)+v*(+n*l*f-n*c*d+o*s*d-r*s*f+r*c*u-o*l*u)+g*(+n*c*h-n*a*f-o*s*h+i*s*f+o*a*u-i*c*u)+p*(-r*a*u-n*l*h+n*a*d+r*s*h-i*s*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],S=h*g*c-v*d*c+v*l*f-a*g*f-h*l*p+a*d*p,y=m*d*c-u*g*c-m*l*f+s*g*f+u*l*p-s*d*p,w=u*v*c-m*h*c+m*a*f-s*v*f-u*a*p+s*h*p,L=m*h*l-u*v*l-m*a*d+s*v*d+u*a*g-s*h*g,E=n*S+i*y+r*w+o*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=S*T,e[1]=(v*d*o-h*g*o-v*r*f+i*g*f+h*r*p-i*d*p)*T,e[2]=(a*g*o-v*l*o+v*r*c-i*g*c-a*r*p+i*l*p)*T,e[3]=(h*l*o-a*d*o-h*r*c+i*d*c+a*r*f-i*l*f)*T,e[4]=y*T,e[5]=(u*g*o-m*d*o+m*r*f-n*g*f-u*r*p+n*d*p)*T,e[6]=(m*l*o-s*g*o-m*r*c+n*g*c+s*r*p-n*l*p)*T,e[7]=(s*d*o-u*l*o+u*r*c-n*d*c-s*r*f+n*l*f)*T,e[8]=w*T,e[9]=(m*h*o-u*v*o-m*i*f+n*v*f+u*i*p-n*h*p)*T,e[10]=(s*v*o-m*a*o+m*i*c-n*v*c-s*i*p+n*a*p)*T,e[11]=(u*a*o-s*h*o-u*i*c+n*h*c+s*i*f-n*a*f)*T,e[12]=L*T,e[13]=(u*v*r-m*h*r+m*i*d-n*v*d-u*i*g+n*h*g)*T,e[14]=(m*a*r-s*v*r-m*i*l+n*v*l+s*i*g-n*a*g)*T,e[15]=(s*h*r-u*a*r+u*i*l-n*h*l-s*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,u=s+s,h=a+a,d=o*c,f=o*u,m=o*h,v=s*u,g=s*h,p=a*h,S=l*c,y=l*u,w=l*h,L=i.x,E=i.y,T=i.z;return r[0]=(1-(v+p))*L,r[1]=(f+w)*L,r[2]=(m-y)*L,r[3]=0,r[4]=(f-w)*E,r[5]=(1-(d+p))*E,r[6]=(g+S)*E,r[7]=0,r[8]=(m+y)*T,r[9]=(g-S)*T,r[10]=(1-(d+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=bo.set(r[0],r[1],r[2]).length();const s=bo.set(r[4],r[5],r[6]).length(),a=bo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/o,u=1/s,h=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,n.setFromRotationMatrix(Wn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Fi){const l=this.elements,c=2*o/(n-e),u=2*o/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let f,m;if(a===Fi)f=-(s+o)/(s-o),m=-2*s*o/(s-o);else if(a===Kc)f=-s/(s-o),m=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Fi){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(s-o),d=(n+e)*c,f=(i+r)*u;let m,v;if(a===Fi)m=(s+o)*h,v=-2*h;else if(a===Kc)m=o*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const bo=new U,Wn=new Et,RF=new U(0,0,0),LF=new U(1,1,1),Qi=new U,Ul=new U,Dn=new U,c0=new Et,u0=new ro;class Vi{constructor(e=0,n=0,i=0,r=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(n){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return c0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(c0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return u0.setFromEuler(this),this.setFromQuaternion(u0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class _y{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DF=0;const h0=new U,yo=new ro,wi=new Et,zl=new U,Hs=new U,IF=new U,OF=new ro,d0=new U(1,0,0),f0=new U(0,1,0),p0=new U(0,0,1),m0={type:"added"},NF={type:"removed"},So={type:"childadded",child:null},yh={type:"childremoved",child:null};class _n extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DF++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new U,n=new Vi,i=new ro,r=new U(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new et}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _y,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return yo.setFromAxisAngle(e,n),this.quaternion.multiply(yo),this}rotateOnWorldAxis(e,n){return yo.setFromAxisAngle(e,n),this.quaternion.premultiply(yo),this}rotateX(e){return this.rotateOnAxis(d0,e)}rotateY(e){return this.rotateOnAxis(f0,e)}rotateZ(e){return this.rotateOnAxis(p0,e)}translateOnAxis(e,n){return h0.copy(e).applyQuaternion(this.quaternion),this.position.add(h0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(d0,e)}translateY(e){return this.translateOnAxis(f0,e)}translateZ(e){return this.translateOnAxis(p0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?zl.copy(e):zl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Hs,zl,this.up):wi.lookAt(zl,Hs,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),yo.setFromRotationMatrix(wi),this.quaternion.premultiply(yo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(m0),So.child=e,this.dispatchEvent(So),So.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(NF),yh.child=e,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(m0),So.child=e,this.dispatchEvent(So),So.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,IF),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,OF,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),f=s(e.animations),m=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=r,i;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_n.DEFAULT_UP=new U(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new U,Ei=new U,Sh=new U,Ti=new U,Co=new U,Mo=new U,g0=new U,Ch=new U,Mh=new U,wh=new U,Eh=new Nt,Th=new Nt,Ah=new Nt;class Zn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Xn.subVectors(e,n),r.cross(Xn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Xn.subVectors(r,n),Ei.subVectors(i,n),Sh.subVectors(e,n);const s=Xn.dot(Xn),a=Xn.dot(Ei),l=Xn.dot(Sh),c=Ei.dot(Ei),u=Ei.dot(Sh),h=s*c-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,m=(s*u-a*l)*d;return o.set(1-f-m,m,f)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ti.x),l.addScaledVector(s,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return Eh.setScalar(0),Th.setScalar(0),Ah.setScalar(0),Eh.fromBufferAttribute(e,n),Th.fromBufferAttribute(e,i),Ah.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Eh,o.x),s.addScaledVector(Th,o.y),s.addScaledVector(Ah,o.z),s}static isFrontFacing(e,n,i,r){return Xn.subVectors(i,n),Ei.subVectors(e,n),Xn.cross(Ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Xn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Co.subVectors(r,i),Mo.subVectors(o,i),Ch.subVectors(e,i);const l=Co.dot(Ch),c=Mo.dot(Ch);if(l<=0&&c<=0)return n.copy(i);Mh.subVectors(e,r);const u=Co.dot(Mh),h=Mo.dot(Mh);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector(Co,s);wh.subVectors(e,o);const f=Co.dot(wh),m=Mo.dot(wh);if(m>=0&&f<=m)return n.copy(o);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Mo,a);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return g0.subVectors(o,r),a=(h-u)/(h-u+(f-m)),n.copy(r).addScaledVector(g0,a);const p=1/(g+v+d);return s=v*p,a=d*p,n.copy(i).addScaledVector(Co,s).addScaledVector(Mo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const by={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Bl={h:0,s:0,l:0};function Ph(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ft.workingColorSpace){return this.r=e,this.g=n,this.b=i,ft.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ft.workingColorSpace){if(e=Tp(e,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Ph(s,o,e+1/3),this.g=Ph(s,o,e),this.b=Ph(s,o,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,n=ui){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ui){const i=by[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}copyLinearToSRGB(e){return this.r=fh(e.r),this.g=fh(e.g),this.b=fh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return ft.fromWorkingColorSpace(on.copy(this),e),Math.round(jt(on.r*255,0,255))*65536+Math.round(jt(on.g*255,0,255))*256+Math.round(jt(on.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ft.workingColorSpace){ft.fromWorkingColorSpace(on.copy(this),n);const i=on.r,r=on.g,o=on.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case i:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-i)/h+2;break;case o:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ft.workingColorSpace){return ft.fromWorkingColorSpace(on.copy(this),n),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=ui){ft.fromWorkingColorSpace(on.copy(this),e);const n=on.r,i=on.g,r=on.b;return e!==ui?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+n,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(er),e.getHSL(Bl);const i=ha(er.h,Bl.h,n),r=ha(er.s,Bl.s,n),o=ha(er.l,Bl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new it;it.NAMES=by;let FF=0;class As extends uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FF++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=qo,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Dd,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qo&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ld&&(i.blendSrc=this.blendSrc),this.blendDst!==Dd&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ps extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=iy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new U,Hl=new Se;class Ot{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=n0,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Hl.fromBufferAttribute(this,n),Hl.applyMatrix3(e),this.setXY(n,Hl.x,Hl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Io(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Io(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Io(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Io(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Io(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),o=fn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==n0&&(e.usage=this.usage),e}}class yy extends Ot{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Sy extends Ot{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class vn extends Ot{constructor(e,n,i){super(new Float32Array(e),n,i)}}let UF=0;const Un=new Et,Rh=new _n,wo=new U,In=new ol,ks=new ol,Gt=new U;class Pn extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UF++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gy(e)?Sy:yy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new et().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Rh.lookAt(e),Rh.updateMatrix(),this.applyMatrix4(Rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wo).negate(),this.translate(wo.x,wo.y,wo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new vn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];In.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(In.min,ks.min),In.expandByPoint(Gt),Gt.addVectors(In.max,ks.max),In.expandByPoint(Gt)):(In.expandByPoint(ks.min),In.expandByPoint(ks.max))}In.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Gt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(wo.fromBufferAttribute(e,c),Gt.add(wo)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new U,l[D]=new U;const c=new U,u=new U,h=new U,d=new Se,f=new Se,m=new Se,v=new U,g=new U;function p(D,z,b){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,z),h.fromBufferAttribute(i,b),d.fromBufferAttribute(o,D),f.fromBufferAttribute(o,z),m.fromBufferAttribute(o,b),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const M=1/(f.x*m.y-m.x*f.y);isFinite(M)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(M),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(M),a[D].add(v),a[z].add(v),a[b].add(v),l[D].add(g),l[z].add(g),l[b].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,z=S.length;D<z;++D){const b=S[D],M=b.start,I=b.count;for(let N=M,W=M+I;N<W;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new U,w=new U,L=new U,E=new U;function T(D){L.fromBufferAttribute(r,D),E.copy(L);const z=a[D];y.copy(z),y.sub(L.multiplyScalar(L.dot(z))).normalize(),w.crossVectors(E,z);const M=w.dot(l[D])<0?-1:1;s.setXYZW(D,y.x,y.y,y.z,M)}for(let D=0,z=S.length;D<z;++D){const b=S[D],M=b.start,I=b.count;for(let N=M,W=M+I;N<W;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new U,o=new U,s=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,m),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=n.count;d<f;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new Ot(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const o=e.morphAttributes;for(const c in o){const u=[],h=o[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const v0=new Et,Tr=new sl,kl=new Ts,x0=new U,Vl=new U,$l=new U,Gl=new U,Lh=new U,Wl=new U,_0=new U,Xl=new U;class xn extends _n{constructor(e=new Pn,n=new Ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Wl.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],h=o[l];u!==0&&(Lh.fromBufferAttribute(h,e),s?Wl.addScaledVector(Lh,u):Wl.addScaledVector(Lh.sub(n),u))}n.add(Wl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(o),Tr.copy(e.ray).recast(e.near),!(kl.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(kl,x0)===null||Tr.origin.distanceToSquared(x0)>(e.far-e.near)**2))&&(v0.copy(o).invert(),Tr.copy(e.ray).applyMatrix4(v0),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Tr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=s[g.materialIndex],S=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let w=S,L=y;w<L;w+=3){const E=a.getX(w),T=a.getX(w+1),D=a.getX(w+2);r=jl(this,p,e,i,c,u,h,E,T,D),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const S=a.getX(g),y=a.getX(g+1),w=a.getX(g+2);r=jl(this,s,e,i,c,u,h,S,y,w),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=s[g.materialIndex],S=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let w=S,L=y;w<L;w+=3){const E=w,T=w+1,D=w+2;r=jl(this,p,e,i,c,u,h,E,T,D),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const S=g,y=g+1,w=g+2;r=jl(this,s,e,i,c,u,h,S,y,w),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function zF(t,e,n,i,r,o,s,a){let l;if(e.side===wn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===vr,a),l===null)return null;Xl.copy(a),Xl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Xl);return c<n.near||c>n.far?null:{distance:c,point:Xl.clone(),object:t}}function jl(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,Vl),t.getVertexPosition(l,$l),t.getVertexPosition(c,Gl);const u=zF(t,e,n,i,Vl,$l,Gl,_0);if(u){const h=new U;Zn.getBarycoord(_0,Vl,$l,Gl,h),r&&(u.uv=Zn.getInterpolatedAttribute(r,a,l,c,h,new Se)),o&&(u.uv1=Zn.getInterpolatedAttribute(o,a,l,c,h,new Se)),s&&(u.normal=Zn.getInterpolatedAttribute(s,a,l,c,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};Zn.getNormal(Vl,$l,Gl,d.normal),u.face=d,u.barycoord=h}return u}class al extends Pn{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,i,n,e,s,o,0),m("z","y","x",1,-1,i,n,-e,s,o,1),m("x","z","y",1,1,e,i,n,r,s,2),m("x","z","y",1,-1,e,i,-n,r,s,3),m("x","y","z",1,-1,e,n,i,r,o,4),m("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(h,2));function m(v,g,p,S,y,w,L,E,T,D,z){const b=w/T,M=L/D,I=w/2,N=L/2,W=E/2,ne=T+1,X=D+1;let te=0,j=0;const pe=new U;for(let xe=0;xe<X;xe++){const be=xe*M-N;for(let ke=0;ke<ne;ke++){const Ce=ke*b-I;pe[v]=Ce*S,pe[g]=be*y,pe[p]=W,c.push(pe.x,pe.y,pe.z),pe[v]=0,pe[g]=0,pe[p]=E>0?1:-1,u.push(pe.x,pe.y,pe.z),h.push(ke/T),h.push(1-xe/D),te+=1}}for(let xe=0;xe<D;xe++)for(let be=0;be<T;be++){const ke=d+be+ne*xe,Ce=d+be+ne*(xe+1),J=d+(be+1)+ne*(xe+1),ce=d+(be+1)+ne*xe;l.push(ke,Ce,ce),l.push(Ce,J,ce),j+=6}a.addGroup(f,j,z),f+=j,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function pn(t){const e={};for(let n=0;n<t.length;n++){const i=xs(t[n]);for(const r in i)e[r]=i[r]}return e}function BF(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Cy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const HF={clone:xs,merge:pn};var kF=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VF=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kF,this.fragmentShader=VF,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=BF(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class My extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const tr=new U,b0=new Se,y0=new Se;class zn extends My{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Oa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,n){return this.getViewBounds(e,b0,y0),n.subVectors(y0,b0)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ua*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Eo=-90,To=1;class $F extends _n{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(Eo,To,e,n);r.layers=this.layers,this.add(r);const o=new zn(Eo,To,e,n);o.layers=this.layers,this.add(o);const s=new zn(Eo,To,e,n);s.layers=this.layers,this.add(s);const a=new zn(Eo,To,e,n);a.layers=this.layers,this.add(a);const l=new zn(Eo,To,e,n);l.layers=this.layers,this.add(l);const c=new zn(Eo,To,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class wy extends En{constructor(e,n,i,r,o,s,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ps,super(e,n,i,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class GF extends io{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wy(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new al(5,5,5),o=new $i({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:fr});o.uniforms.tEquirect.value=n;const s=new xn(r,o),a=n.minFilter;return n.minFilter===kr&&(n.minFilter=Kn),new $F(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Dh=new U,WF=new U,XF=new et;class ar{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Dh.subVectors(i,n).cross(WF.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Dh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||XF.getNormalMatrix(e),r=this.coplanarPoint(Dh).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new Ts,ql=new U;class Ey{constructor(e=new ar,n=new ar,i=new ar,r=new ar,o=new ar,s=new ar){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Fi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],m=r[9],v=r[10],g=r[11],p=r[12],S=r[13],y=r[14],w=r[15];if(i[0].setComponents(l-o,d-c,g-f,w-p).normalize(),i[1].setComponents(l+o,d+c,g+f,w+p).normalize(),i[2].setComponents(l+s,d+u,g+m,w+S).normalize(),i[3].setComponents(l-s,d-u,g-m,w-S).normalize(),i[4].setComponents(l-a,d-h,g-v,w-y).normalize(),n===Fi)i[5].setComponents(l+a,d+h,g+v,w+y).normalize();else if(n===Kc)i[5].setComponents(a,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ql.x=r.normal.x>0?e.max.x:e.min.x,ql.y=r.normal.y>0?e.max.y:e.min.y,ql.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ty(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function jF(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],v=h[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const v=h[f];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class ll extends Pn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,f=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const S=p*d-s;for(let y=0;y<c;y++){const w=y*h-o;m.push(w,-S,0),v.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const y=S+c*p,w=S+c*(p+1),L=S+1+c*(p+1),E=S+1+c*p;f.push(y,w,E),f.push(w,L,E)}this.setIndex(f),this.setAttribute("position",new vn(m,3)),this.setAttribute("normal",new vn(v,3)),this.setAttribute("uv",new vn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.widthSegments,e.heightSegments)}}var qF=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YF=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KF=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZF=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JF=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QF=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eU=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nU=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sU=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aU=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lU=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cU=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fU=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gU=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vU=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xU=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_U=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MU="gl_FragColor = linearToOutputTexel( gl_FragColor );",wU=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AU=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,PU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NU=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zU=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BU=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,HU=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VU=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$U=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GU=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WU=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XU=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jU=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qU=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YU=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KU=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZU=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JU=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QU=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ez=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tz=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nz=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iz=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rz=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oz=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sz=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,az=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lz=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cz=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uz=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hz=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dz=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fz=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pz=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mz=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gz=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vz=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xz=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_z=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bz=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yz=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sz=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cz=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mz=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wz=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ez=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tz=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Az=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pz=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rz=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lz=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dz=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Iz=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oz=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nz=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fz=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uz=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zz=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bz=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hz=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kz=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vz=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$z=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gz=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wz=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xz=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jz=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qz=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yz=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kz=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zz=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jz=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qz=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eB=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tB=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nB=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rB=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oB=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sB=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aB=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lB=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cB=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uB=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hB=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dB=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fB=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pB=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mB=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gB=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vB=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xB=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_B=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bB=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yB=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SB=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CB=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MB=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wB=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EB=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:qF,alphahash_pars_fragment:YF,alphamap_fragment:KF,alphamap_pars_fragment:ZF,alphatest_fragment:JF,alphatest_pars_fragment:QF,aomap_fragment:eU,aomap_pars_fragment:tU,batching_pars_vertex:nU,batching_vertex:iU,begin_vertex:rU,beginnormal_vertex:oU,bsdfs:sU,iridescence_fragment:aU,bumpmap_pars_fragment:lU,clipping_planes_fragment:cU,clipping_planes_pars_fragment:uU,clipping_planes_pars_vertex:hU,clipping_planes_vertex:dU,color_fragment:fU,color_pars_fragment:pU,color_pars_vertex:mU,color_vertex:gU,common:vU,cube_uv_reflection_fragment:xU,defaultnormal_vertex:_U,displacementmap_pars_vertex:bU,displacementmap_vertex:yU,emissivemap_fragment:SU,emissivemap_pars_fragment:CU,colorspace_fragment:MU,colorspace_pars_fragment:wU,envmap_fragment:EU,envmap_common_pars_fragment:TU,envmap_pars_fragment:AU,envmap_pars_vertex:PU,envmap_physical_pars_fragment:HU,envmap_vertex:RU,fog_vertex:LU,fog_pars_vertex:DU,fog_fragment:IU,fog_pars_fragment:OU,gradientmap_pars_fragment:NU,lightmap_pars_fragment:FU,lights_lambert_fragment:UU,lights_lambert_pars_fragment:zU,lights_pars_begin:BU,lights_toon_fragment:kU,lights_toon_pars_fragment:VU,lights_phong_fragment:$U,lights_phong_pars_fragment:GU,lights_physical_fragment:WU,lights_physical_pars_fragment:XU,lights_fragment_begin:jU,lights_fragment_maps:qU,lights_fragment_end:YU,logdepthbuf_fragment:KU,logdepthbuf_pars_fragment:ZU,logdepthbuf_pars_vertex:JU,logdepthbuf_vertex:QU,map_fragment:ez,map_pars_fragment:tz,map_particle_fragment:nz,map_particle_pars_fragment:iz,metalnessmap_fragment:rz,metalnessmap_pars_fragment:oz,morphinstance_vertex:sz,morphcolor_vertex:az,morphnormal_vertex:lz,morphtarget_pars_vertex:cz,morphtarget_vertex:uz,normal_fragment_begin:hz,normal_fragment_maps:dz,normal_pars_fragment:fz,normal_pars_vertex:pz,normal_vertex:mz,normalmap_pars_fragment:gz,clearcoat_normal_fragment_begin:vz,clearcoat_normal_fragment_maps:xz,clearcoat_pars_fragment:_z,iridescence_pars_fragment:bz,opaque_fragment:yz,packing:Sz,premultiplied_alpha_fragment:Cz,project_vertex:Mz,dithering_fragment:wz,dithering_pars_fragment:Ez,roughnessmap_fragment:Tz,roughnessmap_pars_fragment:Az,shadowmap_pars_fragment:Pz,shadowmap_pars_vertex:Rz,shadowmap_vertex:Lz,shadowmask_pars_fragment:Dz,skinbase_vertex:Iz,skinning_pars_vertex:Oz,skinning_vertex:Nz,skinnormal_vertex:Fz,specularmap_fragment:Uz,specularmap_pars_fragment:zz,tonemapping_fragment:Bz,tonemapping_pars_fragment:Hz,transmission_fragment:kz,transmission_pars_fragment:Vz,uv_pars_fragment:$z,uv_pars_vertex:Gz,uv_vertex:Wz,worldpos_vertex:Xz,background_vert:jz,background_frag:qz,backgroundCube_vert:Yz,backgroundCube_frag:Kz,cube_vert:Zz,cube_frag:Jz,depth_vert:Qz,depth_frag:eB,distanceRGBA_vert:tB,distanceRGBA_frag:nB,equirect_vert:iB,equirect_frag:rB,linedashed_vert:oB,linedashed_frag:sB,meshbasic_vert:aB,meshbasic_frag:lB,meshlambert_vert:cB,meshlambert_frag:uB,meshmatcap_vert:hB,meshmatcap_frag:dB,meshnormal_vert:fB,meshnormal_frag:pB,meshphong_vert:mB,meshphong_frag:gB,meshphysical_vert:vB,meshphysical_frag:xB,meshtoon_vert:_B,meshtoon_frag:bB,points_vert:yB,points_frag:SB,shadow_vert:CB,shadow_frag:MB,sprite_vert:wB,sprite_frag:EB},Me={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},di={basic:{uniforms:pn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:pn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new it(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:pn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:pn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:pn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new it(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:pn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:pn([Me.points,Me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:pn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:pn([Me.common,Me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:pn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:pn([Me.sprite,Me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:pn([Me.common,Me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:pn([Me.lights,Me.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};di.physical={uniforms:pn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Yl={r:0,b:0,g:0},Pr=new Vi,TB=new Et;function AB(t,e,n,i,r,o,s){const a=new it(0);let l=o===!0?0:1,c,u,h=null,d=0,f=null;function m(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?n:e).get(y)),y}function v(S){let y=!1;const w=m(S);w===null?p(a,l):w&&w.isColor&&(p(w,1),y=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(S,y){const w=m(y);w&&(w.isCubeTexture||w.mapping===Eu)?(u===void 0&&(u=new xn(new al(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:xs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Pr.copy(y.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(TB.makeRotationFromEuler(Pr)),u.material.toneMapped=ft.getTransfer(w.colorSpace)!==St,(h!==w||d!==w.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,f=t.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new xn(new ll(2,2),new $i({name:"BackgroundMaterial",uniforms:xs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ft.getTransfer(w.colorSpace)!==St,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,f=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,y){S.getRGB(Yl,Cy(t)),i.buffers.color.setClear(Yl.r,Yl.g,Yl.b,y,s)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:v,addToRenderList:g}}function PB(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let o=r,s=!1;function a(b,M,I,N,W){let ne=!1;const X=h(N,I,M);o!==X&&(o=X,c(o.object)),ne=f(b,N,I,W),ne&&m(b,N,I,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(ne||s)&&(s=!1,w(b,M,I,N),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function u(b){return t.deleteVertexArray(b)}function h(b,M,I){const N=I.wireframe===!0;let W=i[b.id];W===void 0&&(W={},i[b.id]=W);let ne=W[M.id];ne===void 0&&(ne={},W[M.id]=ne);let X=ne[N];return X===void 0&&(X=d(l()),ne[N]=X),X}function d(b){const M=[],I=[],N=[];for(let W=0;W<n;W++)M[W]=0,I[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:I,attributeDivisors:N,object:b,attributes:{},index:null}}function f(b,M,I,N){const W=o.attributes,ne=M.attributes;let X=0;const te=I.getAttributes();for(const j in te)if(te[j].location>=0){const xe=W[j];let be=ne[j];if(be===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),xe===void 0||xe.attribute!==be||be&&xe.data!==be.data)return!0;X++}return o.attributesNum!==X||o.index!==N}function m(b,M,I,N){const W={},ne=M.attributes;let X=0;const te=I.getAttributes();for(const j in te)if(te[j].location>=0){let xe=ne[j];xe===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor));const be={};be.attribute=xe,xe&&xe.data&&(be.data=xe.data),W[j]=be,X++}o.attributes=W,o.attributesNum=X,o.index=N}function v(){const b=o.newAttributes;for(let M=0,I=b.length;M<I;M++)b[M]=0}function g(b){p(b,0)}function p(b,M){const I=o.newAttributes,N=o.enabledAttributes,W=o.attributeDivisors;I[b]=1,N[b]===0&&(t.enableVertexAttribArray(b),N[b]=1),W[b]!==M&&(t.vertexAttribDivisor(b,M),W[b]=M)}function S(){const b=o.newAttributes,M=o.enabledAttributes;for(let I=0,N=M.length;I<N;I++)M[I]!==b[I]&&(t.disableVertexAttribArray(I),M[I]=0)}function y(b,M,I,N,W,ne,X){X===!0?t.vertexAttribIPointer(b,M,I,W,ne):t.vertexAttribPointer(b,M,I,N,W,ne)}function w(b,M,I,N){v();const W=N.attributes,ne=I.getAttributes(),X=M.defaultAttributeValues;for(const te in ne){const j=ne[te];if(j.location>=0){let pe=W[te];if(pe===void 0&&(te==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),te==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor)),pe!==void 0){const xe=pe.normalized,be=pe.itemSize,ke=e.get(pe);if(ke===void 0)continue;const Ce=ke.buffer,J=ke.type,ce=ke.bytesPerElement,ge=J===t.INT||J===t.UNSIGNED_INT||pe.gpuType===bp;if(pe.isInterleavedBufferAttribute){const V=pe.data,le=V.stride,oe=pe.offset;if(V.isInstancedInterleavedBuffer){for(let ue=0;ue<j.locationSize;ue++)p(j.location+ue,V.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ue=0;ue<j.locationSize;ue++)g(j.location+ue);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let ue=0;ue<j.locationSize;ue++)y(j.location+ue,be/j.locationSize,J,xe,le*ce,(oe+be/j.locationSize*ue)*ce,ge)}else{if(pe.isInstancedBufferAttribute){for(let V=0;V<j.locationSize;V++)p(j.location+V,pe.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let V=0;V<j.locationSize;V++)g(j.location+V);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let V=0;V<j.locationSize;V++)y(j.location+V,be/j.locationSize,J,xe,be*ce,be/j.locationSize*V*ce,ge)}}else if(X!==void 0){const xe=X[te];if(xe!==void 0)switch(xe.length){case 2:t.vertexAttrib2fv(j.location,xe);break;case 3:t.vertexAttrib3fv(j.location,xe);break;case 4:t.vertexAttrib4fv(j.location,xe);break;default:t.vertexAttrib1fv(j.location,xe)}}}}S()}function L(){D();for(const b in i){const M=i[b];for(const I in M){const N=M[I];for(const W in N)u(N[W].object),delete N[W];delete M[I]}delete i[b]}}function E(b){if(i[b.id]===void 0)return;const M=i[b.id];for(const I in M){const N=M[I];for(const W in N)u(N[W].object),delete N[W];delete M[I]}delete i[b.id]}function T(b){for(const M in i){const I=i[M];if(I[b.id]===void 0)continue;const N=I[b.id];for(const W in N)u(N[W].object),delete N[W];delete I[b.id]}}function D(){z(),s=!0,o!==r&&(o=r,c(o.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:z,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function RB(t,e,n){let i;function r(c){i=c}function o(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function s(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];n.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)s(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v];for(let v=0;v<d.length;v++)n.update(m,i,d[v])}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function LB(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(T){return!(T!==Jn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const D=T===rl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ki&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ni&&!D)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,E=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:w,vertexTextures:L,maxSamples:E}}function DB(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new ar,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=t.get(h);if(!r||m===null||m.length===0||o&&!g)o?u(null):c();else{const S=o?0:i,y=S*4;let w=p.clippingState||null;l.value=w,w=u(m,d,y,f);for(let L=0;L!==y;++L)w[L]=n[L];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,m){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=f+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,w=f;y!==v;++y,w+=4)s.copy(h[y]).applyMatrix4(S,a),s.normal.toArray(g,w),g[w+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function IB(t){let e=new WeakMap;function n(s,a){return a===Hd?s.mapping=ps:a===kd&&(s.mapping=ms),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Hd||a===kd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new GF(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Ay extends My{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fo=4,S0=[.125,.215,.35,.446,.526,.582],Nr=20,Ih=new Ay,C0=new it;let Oh=null,Nh=0,Fh=0,Uh=!1;const Dr=(1+Math.sqrt(5))/2,Ao=1/Dr,M0=[new U(-Dr,Ao,0),new U(Dr,Ao,0),new U(-Ao,0,Dr),new U(Ao,0,Dr),new U(0,Dr,-Ao),new U(0,Dr,Ao),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class w0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Oh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=A0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,Nh,Fh),this._renderer.xr.enabled=Uh,e.scissorTest=!1,Kl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:rl,format:Jn,colorSpace:yr,depthBuffer:!1},r=E0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E0(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OB(o)),this._blurMaterial=NB(o,e,n)}return r}_compileMaterial(e){const n=new xn(this._lodPlanes[0],e);this._renderer.compile(n,Ih)}_sceneToCubeUV(e,n,i,r){const a=new zn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(C0),u.toneMapping=pr,u.autoClear=!1;const f=new Ps({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),m=new xn(new al,f);let v=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(C0),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Kl(r,S*y,p>2?y:0,y,y),u.setRenderTarget(r),v&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ps||e.mapping===ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=A0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T0());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new xn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Kl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Ih)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=M0[(r-o-1)%M0.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new xn(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Nr-1),v=o/m,g=isFinite(o)?1+Math.floor(u*v):Nr;g>Nr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Nr}`);const p=[];let S=0;for(let T=0;T<Nr;++T){const D=T/v,z=Math.exp(-D*D/2);p.push(z),T===0?S+=z:T<g&&(S+=2*z)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-i;const w=this._sizeLods[r],L=3*w*(r>y-Fo?r-y+Fo:0),E=4*(this._cubeSize-w);Kl(n,L,E,3*w,2*w),l.setRenderTarget(n),l.render(h,Ih)}}function OB(t){const e=[],n=[],i=[];let r=t;const o=t-Fo+1+S0.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Fo?l=S0[s-t+Fo-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,v=3,g=2,p=1,S=new Float32Array(v*m*f),y=new Float32Array(g*m*f),w=new Float32Array(p*m*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,D=E>2?0:-1,z=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];S.set(z,v*m*E),y.set(d,g*m*E);const b=[E,E,E,E,E,E];w.set(b,p*m*E)}const L=new Pn;L.setAttribute("position",new Ot(S,v)),L.setAttribute("uv",new Ot(y,g)),L.setAttribute("faceIndex",new Ot(w,p)),e.push(L),r>Fo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function E0(t,e,n){const i=new io(t,e,n);return i.texture.mapping=Eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Kl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function NB(t,e,n){const i=new Float32Array(Nr),r=new U(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function T0(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function A0(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Ap(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FB(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hd||l===kd,u=l===ps||l===ms;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new w0(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&r(f)?(n===null&&(n=new w0(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function UB(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Sc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zB(t,e,n,i){const r={},o=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}d.removeEventListener("dispose",s),delete r[d.id];const f=o.get(d);f&&(e.remove(f),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const v=f[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],t.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,m=h.attributes.position;let v=0;if(f!==null){const S=f.array;v=f.version;for(let y=0,w=S.length;y<w;y+=3){const L=S[y+0],E=S[y+1],T=S[y+2];d.push(L,E,E,T,T,L)}}else if(m!==void 0){const S=m.array;v=m.version;for(let y=0,w=S.length/3-1;y<w;y+=3){const L=y+0,E=y+1,T=y+2;d.push(L,E,E,T,T,L)}}else return;const g=new(gy(d)?Sy:yy)(d,1);g.version=v;const p=o.get(h);p&&e.remove(p),o.set(h,g)}function u(h){const d=o.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function BB(t,e,n){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,f){t.drawElements(i,f,o,d*s),n.update(f,i,1)}function c(d,f,m){m!==0&&(t.drawElementsInstanced(i,f,o,d*s,m),n.update(f,i,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];n.update(g,i,1)}function h(d,f,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/s,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,o,d,0,v,0,m);let p=0;for(let S=0;S<m;S++)p+=f[S];for(let S=0;S<v.length;S++)n.update(p,i,v[S])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function HB(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function kB(t,e,n){const i=new WeakMap,r=new Nt;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let z=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",z)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),m===!0&&(y=2),v===!0&&(y=3);let w=a.attributes.position.count*y,L=1;w>e.maxTextureSize&&(L=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const E=new Float32Array(w*L*4*h),T=new xy(E,w,L,h);T.type=Ni,T.needsUpdate=!0;const D=y*4;for(let b=0;b<h;b++){const M=g[b],I=p[b],N=S[b],W=w*L*4*b;for(let ne=0;ne<M.count;ne++){const X=ne*D;f===!0&&(r.fromBufferAttribute(M,ne),E[W+X+0]=r.x,E[W+X+1]=r.y,E[W+X+2]=r.z,E[W+X+3]=0),m===!0&&(r.fromBufferAttribute(I,ne),E[W+X+4]=r.x,E[W+X+5]=r.y,E[W+X+6]=r.z,E[W+X+7]=0),v===!0&&(r.fromBufferAttribute(N,ne),E[W+X+8]=r.x,E[W+X+9]=r.y,E[W+X+10]=r.z,E[W+X+11]=N.itemSize===4?r.w:1)}}d={count:h,texture:T,size:new Se(w,L)},i.set(a,d),a.addEventListener("dispose",z)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:o}}function VB(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}class Py extends En{constructor(e,n,i,r,o,s,a,l,c,u=Yo){if(u!==Yo&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Yo&&(i=no),i===void 0&&u===vs&&(i=gs),super(null,r,o,s,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ry=new En,P0=new Py(1,1),Ly=new xy,Dy=new AF,Iy=new wy,R0=[],L0=[],D0=new Float32Array(16),I0=new Float32Array(9),O0=new Float32Array(4);function Rs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=R0[r];if(o===void 0&&(o=new Float32Array(r),R0[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Au(t,e){let n=L0[e];n===void 0&&(n=new Int32Array(e),L0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function $B(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function GB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function WB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function XB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function jB(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Vt(n,i))return;O0.set(i),t.uniformMatrix2fv(this.addr,!1,O0),$t(n,i)}}function qB(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Vt(n,i))return;I0.set(i),t.uniformMatrix3fv(this.addr,!1,I0),$t(n,i)}}function YB(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Vt(n,i))return;D0.set(i),t.uniformMatrix4fv(this.addr,!1,D0),$t(n,i)}}function KB(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ZB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function JB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function QB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function eH(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tH(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function nH(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function iH(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function rH(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(P0.compareFunction=my,o=P0):o=Ry,n.setTexture2D(e||o,r)}function oH(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Dy,r)}function sH(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Iy,r)}function aH(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ly,r)}function lH(t){switch(t){case 5126:return $B;case 35664:return GB;case 35665:return WB;case 35666:return XB;case 35674:return jB;case 35675:return qB;case 35676:return YB;case 5124:case 35670:return KB;case 35667:case 35671:return ZB;case 35668:case 35672:return JB;case 35669:case 35673:return QB;case 5125:return eH;case 36294:return tH;case 36295:return nH;case 36296:return iH;case 35678:case 36198:case 36298:case 36306:case 35682:return rH;case 35679:case 36299:case 36307:return oH;case 35680:case 36300:case 36308:case 36293:return sH;case 36289:case 36303:case 36311:case 36292:return aH}}function cH(t,e){t.uniform1fv(this.addr,e)}function uH(t,e){const n=Rs(e,this.size,2);t.uniform2fv(this.addr,n)}function hH(t,e){const n=Rs(e,this.size,3);t.uniform3fv(this.addr,n)}function dH(t,e){const n=Rs(e,this.size,4);t.uniform4fv(this.addr,n)}function fH(t,e){const n=Rs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pH(t,e){const n=Rs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mH(t,e){const n=Rs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gH(t,e){t.uniform1iv(this.addr,e)}function vH(t,e){t.uniform2iv(this.addr,e)}function xH(t,e){t.uniform3iv(this.addr,e)}function _H(t,e){t.uniform4iv(this.addr,e)}function bH(t,e){t.uniform1uiv(this.addr,e)}function yH(t,e){t.uniform2uiv(this.addr,e)}function SH(t,e){t.uniform3uiv(this.addr,e)}function CH(t,e){t.uniform4uiv(this.addr,e)}function MH(t,e,n){const i=this.cache,r=e.length,o=Au(n,r);Vt(i,o)||(t.uniform1iv(this.addr,o),$t(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||Ry,o[s])}function wH(t,e,n){const i=this.cache,r=e.length,o=Au(n,r);Vt(i,o)||(t.uniform1iv(this.addr,o),$t(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Dy,o[s])}function EH(t,e,n){const i=this.cache,r=e.length,o=Au(n,r);Vt(i,o)||(t.uniform1iv(this.addr,o),$t(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Iy,o[s])}function TH(t,e,n){const i=this.cache,r=e.length,o=Au(n,r);Vt(i,o)||(t.uniform1iv(this.addr,o),$t(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||Ly,o[s])}function AH(t){switch(t){case 5126:return cH;case 35664:return uH;case 35665:return hH;case 35666:return dH;case 35674:return fH;case 35675:return pH;case 35676:return mH;case 5124:case 35670:return gH;case 35667:case 35671:return vH;case 35668:case 35672:return xH;case 35669:case 35673:return _H;case 5125:return bH;case 36294:return yH;case 36295:return SH;case 36296:return CH;case 35678:case 36198:case 36298:case 36306:case 35682:return MH;case 35679:case 36299:case 36307:return wH;case 35680:case 36300:case 36308:case 36293:return EH;case 36289:case 36303:case 36311:case 36292:return TH}}class PH{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lH(n.type)}}class RH{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AH(n.type)}}class LH{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function N0(t,e){t.seq.push(e),t.map[e.id]=e}function DH(t,e,n){const i=t.name,r=i.length;for(zh.lastIndex=0;;){const o=zh.exec(i),s=zh.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){N0(n,c===void 0?new PH(a,t,e):new RH(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new LH(a),N0(n,h)),n=h}}}class Cc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);DH(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function F0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const IH=37297;let OH=0;function NH(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function FH(t){const e=ft.getPrimaries(ft.workingColorSpace),n=ft.getPrimaries(t);let i;switch(e===n?i="":e===Yc&&n===qc?i="LinearDisplayP3ToLinearSRGB":e===qc&&n===Yc&&(i="LinearSRGBToLinearDisplayP3"),t){case yr:case Tu:return[i,"LinearTransferOETF"];case ui:case Ep:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function U0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+NH(t.getShaderSource(e),s)}else return r}function UH(t,e){const n=FH(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function zH(t,e){let n;switch(e){case UN:n="Linear";break;case zN:n="Reinhard";break;case BN:n="Cineon";break;case HN:n="ACESFilmic";break;case VN:n="AgX";break;case $N:n="Neutral";break;case kN:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Zl=new U;function BH(){ft.getLuminanceCoefficients(Zl);const t=Zl.x.toFixed(4),e=Zl.y.toFixed(4),n=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HH(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function kH(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function VH(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Ys(t){return t!==""}function z0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function B0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $H=/^[ \t]*#include +<([\w\d./]+)>/gm;function vf(t){return t.replace($H,WH)}const GH=new Map;function WH(t,e){let n=je[e];if(n===void 0){const i=GH.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vf(n)}const XH=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H0(t){return t.replace(XH,jH)}function jH(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function k0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qH(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ny?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===gN?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function YH(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case Eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KH(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function ZH(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case iy:e="ENVMAP_BLENDING_MULTIPLY";break;case NN:e="ENVMAP_BLENDING_MIX";break;case FN:e="ENVMAP_BLENDING_ADD";break}return e}function JH(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function QH(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=qH(n),c=YH(n),u=KH(n),h=ZH(n),d=JH(n),f=HH(n),m=kH(o),v=r.createProgram();let g,p,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Ys).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Ys).join(`
`),p.length>0&&(p+=`
`)):(g=[k0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),p=[k0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pr?"#define TONE_MAPPING":"",n.toneMapping!==pr?je.tonemapping_pars_fragment:"",n.toneMapping!==pr?zH("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,UH("linearToOutputTexel",n.outputColorSpace),BH(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ys).join(`
`)),s=vf(s),s=z0(s,n),s=B0(s,n),a=vf(a),a=z0(a,n),a=B0(a,n),s=H0(s),a=H0(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===i0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===i0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+g+s,w=S+p+a,L=F0(r,r.VERTEX_SHADER,y),E=F0(r,r.FRAGMENT_SHADER,w);r.attachShader(v,L),r.attachShader(v,E),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(M){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(v).trim(),N=r.getShaderInfoLog(L).trim(),W=r.getShaderInfoLog(E).trim();let ne=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,L,E);else{const te=U0(r,L,"vertex"),j=U0(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+I+`
`+te+`
`+j)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(N===""||W==="")&&(X=!1);X&&(M.diagnostics={runnable:ne,programLog:I,vertexShader:{log:N,prefix:g},fragmentShader:{log:W,prefix:p}})}r.deleteShader(L),r.deleteShader(E),D=new Cc(r,v),z=VH(r,v)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let z;this.getAttributes=function(){return z===void 0&&T(this),z};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,IH)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=OH++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=E,this}let e4=0;class t4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new n4(e),n.set(e,i)),i}}class n4{constructor(e){this.id=e4++,this.code=e,this.usedTimes=0}}function i4(t,e,n,i,r,o,s){const a=new _y,l=new t4,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,M,I,N,W){const ne=N.fog,X=W.geometry,te=b.isMeshStandardMaterial?N.environment:null,j=(b.isMeshStandardMaterial?n:e).get(b.envMap||te),pe=j&&j.mapping===Eu?j.image.height:null,xe=v[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const be=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ke=be!==void 0?be.length:0;let Ce=0;X.morphAttributes.position!==void 0&&(Ce=1),X.morphAttributes.normal!==void 0&&(Ce=2),X.morphAttributes.color!==void 0&&(Ce=3);let J,ce,ge,V;if(xe){const tn=di[xe];J=tn.vertexShader,ce=tn.fragmentShader}else J=b.vertexShader,ce=b.fragmentShader,l.update(b),ge=l.getVertexShaderID(b),V=l.getFragmentShaderID(b);const le=t.getRenderTarget(),oe=W.isInstancedMesh===!0,ue=W.isBatchedMesh===!0,we=!!b.map,ie=!!b.matcap,_=!!j,P=!!b.aoMap,O=!!b.lightMap,H=!!b.bumpMap,k=!!b.normalMap,K=!!b.displacementMap,Z=!!b.emissiveMap,C=!!b.metalnessMap,x=!!b.roughnessMap,R=b.anisotropy>0,F=b.clearcoat>0,B=b.dispersion>0,G=b.iridescence>0,ae=b.sheen>0,se=b.transmission>0,fe=R&&!!b.anisotropyMap,Oe=F&&!!b.clearcoatMap,de=F&&!!b.clearcoatNormalMap,_e=F&&!!b.clearcoatRoughnessMap,Be=G&&!!b.iridescenceMap,Fe=G&&!!b.iridescenceThicknessMap,Ae=ae&&!!b.sheenColorMap,tt=ae&&!!b.sheenRoughnessMap,Ve=!!b.specularMap,nt=!!b.specularColorMap,$=!!b.specularIntensityMap,Re=se&&!!b.transmissionMap,re=se&&!!b.thicknessMap,he=!!b.gradientMap,Ee=!!b.alphaMap,Le=b.alphaTest>0,rt=!!b.alphaHash,At=!!b.extensions;let en=pr;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(en=t.toneMapping);const ot={shaderID:xe,shaderType:b.type,shaderName:b.name,vertexShader:J,fragmentShader:ce,defines:b.defines,customVertexShaderID:ge,customFragmentShaderID:V,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:ue,batchingColor:ue&&W._colorsTexture!==null,instancing:oe,instancingColor:oe&&W.instanceColor!==null,instancingMorph:oe&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:yr,alphaToCoverage:!!b.alphaToCoverage,map:we,matcap:ie,envMap:_,envMapMode:_&&j.mapping,envMapCubeUVHeight:pe,aoMap:P,lightMap:O,bumpMap:H,normalMap:k,displacementMap:f&&K,emissiveMap:Z,normalMapObjectSpace:k&&b.normalMapType===qN,normalMapTangentSpace:k&&b.normalMapType===jN,metalnessMap:C,roughnessMap:x,anisotropy:R,anisotropyMap:fe,clearcoat:F,clearcoatMap:Oe,clearcoatNormalMap:de,clearcoatRoughnessMap:_e,dispersion:B,iridescence:G,iridescenceMap:Be,iridescenceThicknessMap:Fe,sheen:ae,sheenColorMap:Ae,sheenRoughnessMap:tt,specularMap:Ve,specularColorMap:nt,specularIntensityMap:$,transmission:se,transmissionMap:Re,thicknessMap:re,gradientMap:he,opaque:b.transparent===!1&&b.blending===qo&&b.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Le,alphaHash:rt,combine:b.combine,mapUv:we&&g(b.map.channel),aoMapUv:P&&g(b.aoMap.channel),lightMapUv:O&&g(b.lightMap.channel),bumpMapUv:H&&g(b.bumpMap.channel),normalMapUv:k&&g(b.normalMap.channel),displacementMapUv:K&&g(b.displacementMap.channel),emissiveMapUv:Z&&g(b.emissiveMap.channel),metalnessMapUv:C&&g(b.metalnessMap.channel),roughnessMapUv:x&&g(b.roughnessMap.channel),anisotropyMapUv:fe&&g(b.anisotropyMap.channel),clearcoatMapUv:Oe&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:tt&&g(b.sheenRoughnessMap.channel),specularMapUv:Ve&&g(b.specularMap.channel),specularColorMapUv:nt&&g(b.specularColorMap.channel),specularIntensityMapUv:$&&g(b.specularIntensityMap.channel),transmissionMapUv:Re&&g(b.transmissionMap.channel),thicknessMapUv:re&&g(b.thicknessMap.channel),alphaMapUv:Ee&&g(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(k||R),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!X.attributes.uv&&(we||Ee),fog:!!ne,useFog:b.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:Ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:en,decodeVideoTexture:we&&b.map.isVideoTexture===!0&&ft.getTransfer(b.map.colorSpace)===St,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Oi,flipSided:b.side===wn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:At&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&b.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function S(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(y(M,b),w(M,b),M.push(t.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function w(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),b.push(a.mask)}function L(b){const M=v[b.type];let I;if(M){const N=di[M];I=HF.clone(N.uniforms)}else I=b.uniforms;return I}function E(b,M){let I;for(let N=0,W=u.length;N<W;N++){const ne=u[N];if(ne.cacheKey===M){I=ne,++I.usedTimes;break}}return I===void 0&&(I=new QH(t,M,b,o),u.push(I)),I}function T(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function D(b){l.remove(b)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:L,acquireProgram:E,releaseProgram:T,releaseShaderCache:D,programs:u,dispose:z}}function r4(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function o4(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function V0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function $0(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(h,d,f,m,v,g){let p=t[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},t[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function a(h,d,f,m,v,g){const p=s(h,d,f,m,v,g);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):n.push(p)}function l(h,d,f,m,v,g){const p=s(h,d,f,m,v,g);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):n.unshift(p)}function c(h,d){n.length>1&&n.sort(h||o4),i.length>1&&i.sort(d||V0),r.length>1&&r.sort(d||V0)}function u(){for(let h=e,d=t.length;h<d;h++){const f=t[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function s4(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new $0,t.set(i,[s])):r>=o.length?(s=new $0,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function a4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new it};break;case"SpotLight":n={position:new U,direction:new U,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function l4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let c4=0;function u4(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function h4(t){const e=new a4,n=l4(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,o=new Et,s=new Et;function a(c){let u=0,h=0,d=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,S=0,y=0,w=0,L=0,E=0,T=0;c.sort(u4);for(let z=0,b=c.length;z<b;z++){const M=c[z],I=M.color,N=M.intensity,W=M.distance,ne=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=I.r*N,h+=I.g*N,d+=I.b*N;else if(M.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(M.sh.coefficients[X],N);T++}else if(M.isDirectionalLight){const X=e.get(M);if(X.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const te=M.shadow,j=n.get(M);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,i.directionalShadow[f]=j,i.directionalShadowMap[f]=ne,i.directionalShadowMatrix[f]=M.shadow.matrix,S++}i.directional[f]=X,f++}else if(M.isSpotLight){const X=e.get(M);X.position.setFromMatrixPosition(M.matrixWorld),X.color.copy(I).multiplyScalar(N),X.distance=W,X.coneCos=Math.cos(M.angle),X.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),X.decay=M.decay,i.spot[v]=X;const te=M.shadow;if(M.map&&(i.spotLightMap[L]=M.map,L++,te.updateMatrices(M),M.castShadow&&E++),i.spotLightMatrix[v]=te.matrix,M.castShadow){const j=n.get(M);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=ne,w++}v++}else if(M.isRectAreaLight){const X=e.get(M);X.color.copy(I).multiplyScalar(N),X.halfWidth.set(M.width*.5,0,0),X.halfHeight.set(0,M.height*.5,0),i.rectArea[g]=X,g++}else if(M.isPointLight){const X=e.get(M);if(X.color.copy(M.color).multiplyScalar(M.intensity),X.distance=M.distance,X.decay=M.decay,M.castShadow){const te=M.shadow,j=n.get(M);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,j.shadowCameraNear=te.camera.near,j.shadowCameraFar=te.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=ne,i.pointShadowMatrix[m]=M.shadow.matrix,y++}i.point[m]=X,m++}else if(M.isHemisphereLight){const X=e.get(M);X.skyColor.copy(M.color).multiplyScalar(N),X.groundColor.copy(M.groundColor).multiplyScalar(N),i.hemi[p]=X,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==v||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==y||D.numSpotShadows!==w||D.numSpotMaps!==L||D.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=w+L-E,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,D.directionalLength=f,D.pointLength=m,D.spotLength=v,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=y,D.numSpotShadows=w,D.numSpotMaps=L,D.numLightProbes=T,i.version=c4++)}function l(c,u){let h=0,d=0,f=0,m=0,v=0;const g=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const y=c[p];if(y.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),h++}else if(y.isSpotLight){const w=i.spot[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const w=i.rectArea[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),s.identity(),o.copy(y.matrixWorld),o.premultiply(g),s.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),m++}else if(y.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const w=i.hemi[v];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function G0(t){const e=new h4(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function o(u){n.push(u)}function s(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function d4(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new G0(t),e.set(r,[a])):o>=s.length?(a=new G0(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class f4 extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WN,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p4 extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const m4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function v4(t,e,n){let i=new Ey;const r=new Se,o=new Se,s=new Nt,a=new f4({depthPacking:XN}),l=new p4,c={},u=n.maxTextureSize,h={[vr]:wn,[wn]:vr,[Oi]:Oi},d=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:m4,fragmentShader:g4}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Pn;m.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xn(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ny;let p=this.type;this.render=function(E,T,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const z=t.getRenderTarget(),b=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),I=t.state;I.setBlending(fr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=p!==Ri&&this.type===Ri,W=p===Ri&&this.type!==Ri;for(let ne=0,X=E.length;ne<X;ne++){const te=E[ne],j=te.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const pe=j.getFrameExtents();if(r.multiply(pe),o.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/pe.x),r.x=o.x*pe.x,j.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/pe.y),r.y=o.y*pe.y,j.mapSize.y=o.y)),j.map===null||N===!0||W===!0){const be=this.type!==Ri?{minFilter:Bn,magFilter:Bn}:{};j.map!==null&&j.map.dispose(),j.map=new io(r.x,r.y,be),j.map.texture.name=te.name+".shadowMap",j.camera.updateProjectionMatrix()}t.setRenderTarget(j.map),t.clear();const xe=j.getViewportCount();for(let be=0;be<xe;be++){const ke=j.getViewport(be);s.set(o.x*ke.x,o.y*ke.y,o.x*ke.z,o.y*ke.w),I.viewport(s),j.updateMatrices(te,be),i=j.getFrustum(),w(T,D,j.camera,te,this.type)}j.isPointLightShadow!==!0&&this.type===Ri&&S(j,D),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(z,b,M)};function S(E,T){const D=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new io(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(T,null,D,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(T,null,D,f,v,null)}function y(E,T,D,z){let b=null;const M=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(M!==void 0)b=M;else if(b=D.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=b.uuid,N=T.uuid;let W=c[I];W===void 0&&(W={},c[I]=W);let ne=W[N];ne===void 0&&(ne=b.clone(),W[N]=ne,T.addEventListener("dispose",L)),b=ne}if(b.visible=T.visible,b.wireframe=T.wireframe,z===Ri?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:h[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=t.properties.get(b);I.light=D}return b}function w(E,T,D,z,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Ri)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const N=e.update(E),W=E.material;if(Array.isArray(W)){const ne=N.groups;for(let X=0,te=ne.length;X<te;X++){const j=ne[X],pe=W[j.materialIndex];if(pe&&pe.visible){const xe=y(E,pe,z,b);E.onBeforeShadow(t,E,T,D,N,xe,j),t.renderBufferDirect(D,null,N,xe,E,j),E.onAfterShadow(t,E,T,D,N,xe,j)}}}else if(W.visible){const ne=y(E,W,z,b);E.onBeforeShadow(t,E,T,D,N,ne,null),t.renderBufferDirect(D,null,N,ne,E,null),E.onAfterShadow(t,E,T,D,N,ne,null)}}const I=E.children;for(let N=0,W=I.length;N<W;N++)w(I[N],T,D,z,b)}function L(E){E.target.removeEventListener("dispose",L);for(const D in c){const z=c[D],b=E.target.uuid;b in z&&(z[b].dispose(),delete z[b])}}}const x4={[Id]:Od,[Nd]:zd,[Fd]:Bd,[fs]:Ud,[Od]:Id,[zd]:Nd,[Bd]:Fd,[Ud]:fs};function _4(t){function e(){let $=!1;const Re=new Nt;let re=null;const he=new Nt(0,0,0,0);return{setMask:function(Ee){re!==Ee&&!$&&(t.colorMask(Ee,Ee,Ee,Ee),re=Ee)},setLocked:function(Ee){$=Ee},setClear:function(Ee,Le,rt,At,en){en===!0&&(Ee*=At,Le*=At,rt*=At),Re.set(Ee,Le,rt,At),he.equals(Re)===!1&&(t.clearColor(Ee,Le,rt,At),he.copy(Re))},reset:function(){$=!1,re=null,he.set(-1,0,0,0)}}}function n(){let $=!1,Re=!1,re=null,he=null,Ee=null;return{setReversed:function(Le){Re=Le},setTest:function(Le){Le?ge(t.DEPTH_TEST):V(t.DEPTH_TEST)},setMask:function(Le){re!==Le&&!$&&(t.depthMask(Le),re=Le)},setFunc:function(Le){if(Re&&(Le=x4[Le]),he!==Le){switch(Le){case Id:t.depthFunc(t.NEVER);break;case Od:t.depthFunc(t.ALWAYS);break;case Nd:t.depthFunc(t.LESS);break;case fs:t.depthFunc(t.LEQUAL);break;case Fd:t.depthFunc(t.EQUAL);break;case Ud:t.depthFunc(t.GEQUAL);break;case zd:t.depthFunc(t.GREATER);break;case Bd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=Le}},setLocked:function(Le){$=Le},setClear:function(Le){Ee!==Le&&(t.clearDepth(Le),Ee=Le)},reset:function(){$=!1,re=null,he=null,Ee=null}}}function i(){let $=!1,Re=null,re=null,he=null,Ee=null,Le=null,rt=null,At=null,en=null;return{setTest:function(ot){$||(ot?ge(t.STENCIL_TEST):V(t.STENCIL_TEST))},setMask:function(ot){Re!==ot&&!$&&(t.stencilMask(ot),Re=ot)},setFunc:function(ot,tn,Vn){(re!==ot||he!==tn||Ee!==Vn)&&(t.stencilFunc(ot,tn,Vn),re=ot,he=tn,Ee=Vn)},setOp:function(ot,tn,Vn){(Le!==ot||rt!==tn||At!==Vn)&&(t.stencilOp(ot,tn,Vn),Le=ot,rt=tn,At=Vn)},setLocked:function(ot){$=ot},setClear:function(ot){en!==ot&&(t.clearStencil(ot),en=ot)},reset:function(){$=!1,Re=null,re=null,he=null,Ee=null,Le=null,rt=null,At=null,en=null}}}const r=new e,o=new n,s=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,m=!1,v=null,g=null,p=null,S=null,y=null,w=null,L=null,E=new it(0,0,0),T=0,D=!1,z=null,b=null,M=null,I=null,N=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,X=0;const te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(te)[1]),ne=X>=1):te.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),ne=X>=2);let j=null,pe={};const xe=t.getParameter(t.SCISSOR_BOX),be=t.getParameter(t.VIEWPORT),ke=new Nt().fromArray(xe),Ce=new Nt().fromArray(be);function J($,Re,re,he){const Ee=new Uint8Array(4),Le=t.createTexture();t.bindTexture($,Le),t.texParameteri($,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri($,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let rt=0;rt<re;rt++)$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?t.texImage3D(Re,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(Re+rt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return Le}const ce={};ce[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ge(t.DEPTH_TEST),o.setFunc(fs),O(!1),H(Zg),ge(t.CULL_FACE),_(fr);function ge($){c[$]!==!0&&(t.enable($),c[$]=!0)}function V($){c[$]!==!1&&(t.disable($),c[$]=!1)}function le($,Re){return u[$]!==Re?(t.bindFramebuffer($,Re),u[$]=Re,$===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=Re),$===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=Re),!0):!1}function oe($,Re){let re=d,he=!1;if($){re=h.get(Re),re===void 0&&(re=[],h.set(Re,re));const Ee=$.textures;if(re.length!==Ee.length||re[0]!==t.COLOR_ATTACHMENT0){for(let Le=0,rt=Ee.length;Le<rt;Le++)re[Le]=t.COLOR_ATTACHMENT0+Le;re.length=Ee.length,he=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,he=!0);he&&t.drawBuffers(re)}function ue($){return f!==$?(t.useProgram($),f=$,!0):!1}const we={[Or]:t.FUNC_ADD,[xN]:t.FUNC_SUBTRACT,[_N]:t.FUNC_REVERSE_SUBTRACT};we[bN]=t.MIN,we[yN]=t.MAX;const ie={[SN]:t.ZERO,[CN]:t.ONE,[MN]:t.SRC_COLOR,[Ld]:t.SRC_ALPHA,[RN]:t.SRC_ALPHA_SATURATE,[AN]:t.DST_COLOR,[EN]:t.DST_ALPHA,[wN]:t.ONE_MINUS_SRC_COLOR,[Dd]:t.ONE_MINUS_SRC_ALPHA,[PN]:t.ONE_MINUS_DST_COLOR,[TN]:t.ONE_MINUS_DST_ALPHA,[LN]:t.CONSTANT_COLOR,[DN]:t.ONE_MINUS_CONSTANT_COLOR,[IN]:t.CONSTANT_ALPHA,[ON]:t.ONE_MINUS_CONSTANT_ALPHA};function _($,Re,re,he,Ee,Le,rt,At,en,ot){if($===fr){m===!0&&(V(t.BLEND),m=!1);return}if(m===!1&&(ge(t.BLEND),m=!0),$!==vN){if($!==v||ot!==D){if((g!==Or||y!==Or)&&(t.blendEquation(t.FUNC_ADD),g=Or,y=Or),ot)switch($){case qo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jg:t.blendFunc(t.ONE,t.ONE);break;case Qg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case e0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case qo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Qg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case e0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}p=null,S=null,w=null,L=null,E.set(0,0,0),T=0,v=$,D=ot}return}Ee=Ee||Re,Le=Le||re,rt=rt||he,(Re!==g||Ee!==y)&&(t.blendEquationSeparate(we[Re],we[Ee]),g=Re,y=Ee),(re!==p||he!==S||Le!==w||rt!==L)&&(t.blendFuncSeparate(ie[re],ie[he],ie[Le],ie[rt]),p=re,S=he,w=Le,L=rt),(At.equals(E)===!1||en!==T)&&(t.blendColor(At.r,At.g,At.b,en),E.copy(At),T=en),v=$,D=!1}function P($,Re){$.side===Oi?V(t.CULL_FACE):ge(t.CULL_FACE);let re=$.side===wn;Re&&(re=!re),O(re),$.blending===qo&&$.transparent===!1?_(fr):_($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);const he=$.stencilWrite;s.setTest(he),he&&(s.setMask($.stencilWriteMask),s.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),s.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),K($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):V(t.SAMPLE_ALPHA_TO_COVERAGE)}function O($){z!==$&&($?t.frontFace(t.CW):t.frontFace(t.CCW),z=$)}function H($){$!==pN?(ge(t.CULL_FACE),$!==b&&($===Zg?t.cullFace(t.BACK):$===mN?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):V(t.CULL_FACE),b=$}function k($){$!==M&&(ne&&t.lineWidth($),M=$)}function K($,Re,re){$?(ge(t.POLYGON_OFFSET_FILL),(I!==Re||N!==re)&&(t.polygonOffset(Re,re),I=Re,N=re)):V(t.POLYGON_OFFSET_FILL)}function Z($){$?ge(t.SCISSOR_TEST):V(t.SCISSOR_TEST)}function C($){$===void 0&&($=t.TEXTURE0+W-1),j!==$&&(t.activeTexture($),j=$)}function x($,Re,re){re===void 0&&(j===null?re=t.TEXTURE0+W-1:re=j);let he=pe[re];he===void 0&&(he={type:void 0,texture:void 0},pe[re]=he),(he.type!==$||he.texture!==Re)&&(j!==re&&(t.activeTexture(re),j=re),t.bindTexture($,Re||ce[$]),he.type=$,he.texture=Re)}function R(){const $=pe[j];$!==void 0&&$.type!==void 0&&(t.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function F(){try{t.compressedTexImage2D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function B(){try{t.compressedTexImage3D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function G(){try{t.texSubImage2D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ae(){try{t.texSubImage3D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Oe(){try{t.texStorage2D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function de(){try{t.texStorage3D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Be(){try{t.texImage3D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Fe($){ke.equals($)===!1&&(t.scissor($.x,$.y,$.z,$.w),ke.copy($))}function Ae($){Ce.equals($)===!1&&(t.viewport($.x,$.y,$.z,$.w),Ce.copy($))}function tt($,Re){let re=l.get(Re);re===void 0&&(re=new WeakMap,l.set(Re,re));let he=re.get($);he===void 0&&(he=t.getUniformBlockIndex(Re,$.name),re.set($,he))}function Ve($,Re){const he=l.get(Re).get($);a.get(Re)!==he&&(t.uniformBlockBinding(Re,he,$.__bindingPointIndex),a.set(Re,he))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},j=null,pe={},u={},h=new WeakMap,d=[],f=null,m=!1,v=null,g=null,p=null,S=null,y=null,w=null,L=null,E=new it(0,0,0),T=0,D=!1,z=null,b=null,M=null,I=null,N=null,ke.set(0,0,t.canvas.width,t.canvas.height),Ce.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:ge,disable:V,bindFramebuffer:le,drawBuffers:oe,useProgram:ue,setBlending:_,setMaterial:P,setFlipSided:O,setCullFace:H,setLineWidth:k,setPolygonOffset:K,setScissorTest:Z,activeTexture:C,bindTexture:x,unbindTexture:R,compressedTexImage2D:F,compressedTexImage3D:B,texImage2D:_e,texImage3D:Be,updateUBOMapping:tt,uniformBlockBinding:Ve,texStorage2D:Oe,texStorage3D:de,texSubImage2D:G,texSubImage3D:ae,compressedTexSubImage2D:se,compressedTexSubImage3D:fe,scissor:Fe,viewport:Ae,reset:nt}}function W0(t,e,n,i){const r=b4(i);switch(n){case ly:return t*e;case uy:return t*e;case hy:return t*e*2;case dy:return t*e/r.components*r.byteLength;case Cp:return t*e/r.components*r.byteLength;case fy:return t*e*2/r.components*r.byteLength;case Mp:return t*e*2/r.components*r.byteLength;case cy:return t*e*3/r.components*r.byteLength;case Jn:return t*e*4/r.components*r.byteLength;case wp:return t*e*4/r.components*r.byteLength;case vc:case xc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _c:case bc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wd:case jd:return Math.max(t,16)*Math.max(e,8)/4;case Gd:case Xd:return Math.max(t,8)*Math.max(e,8)/2;case qd:case Yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ef:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case nf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case of:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case sf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case lf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case uf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case yc:case df:case ff:return Math.ceil(t/4)*Math.ceil(e/4)*16;case py:case pf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case mf:case gf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function b4(t){switch(t){case ki:case oy:return{byteLength:1,components:1};case Ia:case sy:case rl:return{byteLength:2,components:1};case yp:case Sp:return{byteLength:2,components:4};case no:case bp:case Ni:return{byteLength:4,components:1};case ay:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function y4(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,x){return f?new OffscreenCanvas(C,x):Zc("canvas")}function v(C,x,R){let F=1;const B=Z(C);if((B.width>R||B.height>R)&&(F=R/Math.max(B.width,B.height)),F<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const G=Math.floor(F*B.width),ae=Math.floor(F*B.height);h===void 0&&(h=m(G,ae));const se=x?m(G,ae):h;return se.width=G,se.height=ae,se.getContext("2d").drawImage(C,0,0,G,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+G+"x"+ae+")."),se}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),C;return C}function g(C){return C.generateMipmaps&&C.minFilter!==Bn&&C.minFilter!==Kn}function p(C){t.generateMipmap(C)}function S(C,x,R,F,B=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let G=x;if(x===t.RED&&(R===t.FLOAT&&(G=t.R32F),R===t.HALF_FLOAT&&(G=t.R16F),R===t.UNSIGNED_BYTE&&(G=t.R8)),x===t.RED_INTEGER&&(R===t.UNSIGNED_BYTE&&(G=t.R8UI),R===t.UNSIGNED_SHORT&&(G=t.R16UI),R===t.UNSIGNED_INT&&(G=t.R32UI),R===t.BYTE&&(G=t.R8I),R===t.SHORT&&(G=t.R16I),R===t.INT&&(G=t.R32I)),x===t.RG&&(R===t.FLOAT&&(G=t.RG32F),R===t.HALF_FLOAT&&(G=t.RG16F),R===t.UNSIGNED_BYTE&&(G=t.RG8)),x===t.RG_INTEGER&&(R===t.UNSIGNED_BYTE&&(G=t.RG8UI),R===t.UNSIGNED_SHORT&&(G=t.RG16UI),R===t.UNSIGNED_INT&&(G=t.RG32UI),R===t.BYTE&&(G=t.RG8I),R===t.SHORT&&(G=t.RG16I),R===t.INT&&(G=t.RG32I)),x===t.RGB_INTEGER&&(R===t.UNSIGNED_BYTE&&(G=t.RGB8UI),R===t.UNSIGNED_SHORT&&(G=t.RGB16UI),R===t.UNSIGNED_INT&&(G=t.RGB32UI),R===t.BYTE&&(G=t.RGB8I),R===t.SHORT&&(G=t.RGB16I),R===t.INT&&(G=t.RGB32I)),x===t.RGBA_INTEGER&&(R===t.UNSIGNED_BYTE&&(G=t.RGBA8UI),R===t.UNSIGNED_SHORT&&(G=t.RGBA16UI),R===t.UNSIGNED_INT&&(G=t.RGBA32UI),R===t.BYTE&&(G=t.RGBA8I),R===t.SHORT&&(G=t.RGBA16I),R===t.INT&&(G=t.RGBA32I)),x===t.RGB&&R===t.UNSIGNED_INT_5_9_9_9_REV&&(G=t.RGB9_E5),x===t.RGBA){const ae=B?jc:ft.getTransfer(F);R===t.FLOAT&&(G=t.RGBA32F),R===t.HALF_FLOAT&&(G=t.RGBA16F),R===t.UNSIGNED_BYTE&&(G=ae===St?t.SRGB8_ALPHA8:t.RGBA8),R===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),R===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function y(C,x){let R;return C?x===null||x===no||x===gs?R=t.DEPTH24_STENCIL8:x===Ni?R=t.DEPTH32F_STENCIL8:x===Ia&&(R=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===no||x===gs?R=t.DEPTH_COMPONENT24:x===Ni?R=t.DEPTH_COMPONENT32F:x===Ia&&(R=t.DEPTH_COMPONENT16),R}function w(C,x){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bn&&C.minFilter!==Kn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function L(C){const x=C.target;x.removeEventListener("dispose",L),T(x),x.isVideoTexture&&u.delete(x)}function E(C){const x=C.target;x.removeEventListener("dispose",E),z(x)}function T(C){const x=i.get(C);if(x.__webglInit===void 0)return;const R=C.source,F=d.get(R);if(F){const B=F[x.__cacheKey];B.usedTimes--,B.usedTimes===0&&D(C),Object.keys(F).length===0&&d.delete(R)}i.remove(C)}function D(C){const x=i.get(C);t.deleteTexture(x.__webglTexture);const R=C.source,F=d.get(R);delete F[x.__cacheKey],s.memory.textures--}function z(C){const x=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(x.__webglFramebuffer[F]))for(let B=0;B<x.__webglFramebuffer[F].length;B++)t.deleteFramebuffer(x.__webglFramebuffer[F][B]);else t.deleteFramebuffer(x.__webglFramebuffer[F]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[F])}else{if(Array.isArray(x.__webglFramebuffer))for(let F=0;F<x.__webglFramebuffer.length;F++)t.deleteFramebuffer(x.__webglFramebuffer[F]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let F=0;F<x.__webglColorRenderbuffer.length;F++)x.__webglColorRenderbuffer[F]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[F]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const R=C.textures;for(let F=0,B=R.length;F<B;F++){const G=i.get(R[F]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),s.memory.textures--),i.remove(R[F])}i.remove(C)}let b=0;function M(){b=0}function I(){const C=b;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),b+=1,C}function N(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function W(C,x){const R=i.get(C);if(C.isVideoTexture&&k(C),C.isRenderTargetTexture===!1&&C.version>0&&R.__version!==C.version){const F=C.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(R,C,x);return}}n.bindTexture(t.TEXTURE_2D,R.__webglTexture,t.TEXTURE0+x)}function ne(C,x){const R=i.get(C);if(C.version>0&&R.__version!==C.version){Ce(R,C,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,R.__webglTexture,t.TEXTURE0+x)}function X(C,x){const R=i.get(C);if(C.version>0&&R.__version!==C.version){Ce(R,C,x);return}n.bindTexture(t.TEXTURE_3D,R.__webglTexture,t.TEXTURE0+x)}function te(C,x){const R=i.get(C);if(C.version>0&&R.__version!==C.version){J(R,C,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+x)}const j={[Vd]:t.REPEAT,[Hr]:t.CLAMP_TO_EDGE,[$d]:t.MIRRORED_REPEAT},pe={[Bn]:t.NEAREST,[GN]:t.NEAREST_MIPMAP_NEAREST,[Ll]:t.NEAREST_MIPMAP_LINEAR,[Kn]:t.LINEAR,[hh]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},xe={[YN]:t.NEVER,[tF]:t.ALWAYS,[KN]:t.LESS,[my]:t.LEQUAL,[ZN]:t.EQUAL,[eF]:t.GEQUAL,[JN]:t.GREATER,[QN]:t.NOTEQUAL};function be(C,x){if(x.type===Ni&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Kn||x.magFilter===hh||x.magFilter===Ll||x.magFilter===kr||x.minFilter===Kn||x.minFilter===hh||x.minFilter===Ll||x.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,j[x.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,j[x.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,j[x.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,pe[x.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,pe[x.minFilter]),x.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,xe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Bn||x.minFilter!==Ll&&x.minFilter!==kr||x.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ke(C,x){let R=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",L));const F=x.source;let B=d.get(F);B===void 0&&(B={},d.set(F,B));const G=N(x);if(G!==C.__cacheKey){B[G]===void 0&&(B[G]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,R=!0),B[G].usedTimes++;const ae=B[C.__cacheKey];ae!==void 0&&(B[C.__cacheKey].usedTimes--,ae.usedTimes===0&&D(x)),C.__cacheKey=G,C.__webglTexture=B[G].texture}return R}function Ce(C,x,R){let F=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(F=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(F=t.TEXTURE_3D);const B=ke(C,x),G=x.source;n.bindTexture(F,C.__webglTexture,t.TEXTURE0+R);const ae=i.get(G);if(G.version!==ae.__version||B===!0){n.activeTexture(t.TEXTURE0+R);const se=ft.getPrimaries(ft.workingColorSpace),fe=x.colorSpace===lr?null:ft.getPrimaries(x.colorSpace),Oe=x.colorSpace===lr||se===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let de=v(x.image,!1,r.maxTextureSize);de=K(x,de);const _e=o.convert(x.format,x.colorSpace),Be=o.convert(x.type);let Fe=S(x.internalFormat,_e,Be,x.colorSpace,x.isVideoTexture);be(F,x);let Ae;const tt=x.mipmaps,Ve=x.isVideoTexture!==!0,nt=ae.__version===void 0||B===!0,$=G.dataReady,Re=w(x,de);if(x.isDepthTexture)Fe=y(x.format===vs,x.type),nt&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,Fe,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Fe,de.width,de.height,0,_e,Be,null));else if(x.isDataTexture)if(tt.length>0){Ve&&nt&&n.texStorage2D(t.TEXTURE_2D,Re,Fe,tt[0].width,tt[0].height);for(let re=0,he=tt.length;re<he;re++)Ae=tt[re],Ve?$&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,Ae.width,Ae.height,_e,Be,Ae.data):n.texImage2D(t.TEXTURE_2D,re,Fe,Ae.width,Ae.height,0,_e,Be,Ae.data);x.generateMipmaps=!1}else Ve?(nt&&n.texStorage2D(t.TEXTURE_2D,Re,Fe,de.width,de.height),$&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de.width,de.height,_e,Be,de.data)):n.texImage2D(t.TEXTURE_2D,0,Fe,de.width,de.height,0,_e,Be,de.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ve&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,Fe,tt[0].width,tt[0].height,de.depth);for(let re=0,he=tt.length;re<he;re++)if(Ae=tt[re],x.format!==Jn)if(_e!==null)if(Ve){if($)if(x.layerUpdates.size>0){const Ee=W0(Ae.width,Ae.height,x.format,x.type);for(const Le of x.layerUpdates){const rt=Ae.data.subarray(Le*Ee/Ae.data.BYTES_PER_ELEMENT,(Le+1)*Ee/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,Le,Ae.width,Ae.height,1,_e,rt,0,0)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,Ae.width,Ae.height,de.depth,_e,Ae.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,Fe,Ae.width,Ae.height,de.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?$&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,Ae.width,Ae.height,de.depth,_e,Be,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,Fe,Ae.width,Ae.height,de.depth,0,_e,Be,Ae.data)}else{Ve&&nt&&n.texStorage2D(t.TEXTURE_2D,Re,Fe,tt[0].width,tt[0].height);for(let re=0,he=tt.length;re<he;re++)Ae=tt[re],x.format!==Jn?_e!==null?Ve?$&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,Ae.width,Ae.height,_e,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,re,Fe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?$&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,Ae.width,Ae.height,_e,Be,Ae.data):n.texImage2D(t.TEXTURE_2D,re,Fe,Ae.width,Ae.height,0,_e,Be,Ae.data)}else if(x.isDataArrayTexture)if(Ve){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,Fe,de.width,de.height,de.depth),$)if(x.layerUpdates.size>0){const re=W0(de.width,de.height,x.format,x.type);for(const he of x.layerUpdates){const Ee=de.data.subarray(he*re/de.data.BYTES_PER_ELEMENT,(he+1)*re/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,de.width,de.height,1,_e,Be,Ee)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,_e,Be,de.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,de.width,de.height,de.depth,0,_e,Be,de.data);else if(x.isData3DTexture)Ve?(nt&&n.texStorage3D(t.TEXTURE_3D,Re,Fe,de.width,de.height,de.depth),$&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,_e,Be,de.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,de.width,de.height,de.depth,0,_e,Be,de.data);else if(x.isFramebufferTexture){if(nt)if(Ve)n.texStorage2D(t.TEXTURE_2D,Re,Fe,de.width,de.height);else{let re=de.width,he=de.height;for(let Ee=0;Ee<Re;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,Fe,re,he,0,_e,Be,null),re>>=1,he>>=1}}else if(tt.length>0){if(Ve&&nt){const re=Z(tt[0]);n.texStorage2D(t.TEXTURE_2D,Re,Fe,re.width,re.height)}for(let re=0,he=tt.length;re<he;re++)Ae=tt[re],Ve?$&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,_e,Be,Ae):n.texImage2D(t.TEXTURE_2D,re,Fe,_e,Be,Ae);x.generateMipmaps=!1}else if(Ve){if(nt){const re=Z(de);n.texStorage2D(t.TEXTURE_2D,Re,Fe,re.width,re.height)}$&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Be,de)}else n.texImage2D(t.TEXTURE_2D,0,Fe,_e,Be,de);g(x)&&p(F),ae.__version=G.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function J(C,x,R){if(x.image.length!==6)return;const F=ke(C,x),B=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+R);const G=i.get(B);if(B.version!==G.__version||F===!0){n.activeTexture(t.TEXTURE0+R);const ae=ft.getPrimaries(ft.workingColorSpace),se=x.colorSpace===lr?null:ft.getPrimaries(x.colorSpace),fe=x.colorSpace===lr||ae===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Oe=x.isCompressedTexture||x.image[0].isCompressedTexture,de=x.image[0]&&x.image[0].isDataTexture,_e=[];for(let he=0;he<6;he++)!Oe&&!de?_e[he]=v(x.image[he],!0,r.maxCubemapSize):_e[he]=de?x.image[he].image:x.image[he],_e[he]=K(x,_e[he]);const Be=_e[0],Fe=o.convert(x.format,x.colorSpace),Ae=o.convert(x.type),tt=S(x.internalFormat,Fe,Ae,x.colorSpace),Ve=x.isVideoTexture!==!0,nt=G.__version===void 0||F===!0,$=B.dataReady;let Re=w(x,Be);be(t.TEXTURE_CUBE_MAP,x);let re;if(Oe){Ve&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,tt,Be.width,Be.height);for(let he=0;he<6;he++){re=_e[he].mipmaps;for(let Ee=0;Ee<re.length;Ee++){const Le=re[Ee];x.format!==Jn?Fe!==null?Ve?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,0,0,Le.width,Le.height,Fe,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,tt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,0,0,Le.width,Le.height,Fe,Ae,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,tt,Le.width,Le.height,0,Fe,Ae,Le.data)}}}else{if(re=x.mipmaps,Ve&&nt){re.length>0&&Re++;const he=Z(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,tt,he.width,he.height)}for(let he=0;he<6;he++)if(de){Ve?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,_e[he].width,_e[he].height,Fe,Ae,_e[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,tt,_e[he].width,_e[he].height,0,Fe,Ae,_e[he].data);for(let Ee=0;Ee<re.length;Ee++){const rt=re[Ee].image[he].image;Ve?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,0,0,rt.width,rt.height,Fe,Ae,rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,tt,rt.width,rt.height,0,Fe,Ae,rt.data)}}else{Ve?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Fe,Ae,_e[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,tt,Fe,Ae,_e[he]);for(let Ee=0;Ee<re.length;Ee++){const Le=re[Ee];Ve?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,0,0,Fe,Ae,Le.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,tt,Fe,Ae,Le.image[he])}}}g(x)&&p(t.TEXTURE_CUBE_MAP),G.__version=B.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ce(C,x,R,F,B,G){const ae=o.convert(R.format,R.colorSpace),se=o.convert(R.type),fe=S(R.internalFormat,ae,se,R.colorSpace);if(!i.get(x).__hasExternalTextures){const de=Math.max(1,x.width>>G),_e=Math.max(1,x.height>>G);B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?n.texImage3D(B,G,fe,de,_e,x.depth,0,ae,se,null):n.texImage2D(B,G,fe,de,_e,0,ae,se,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),H(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,F,B,i.get(R).__webglTexture,0,O(x)):(B===t.TEXTURE_2D||B>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,F,B,i.get(R).__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ge(C,x,R){if(t.bindRenderbuffer(t.RENDERBUFFER,C),x.depthBuffer){const F=x.depthTexture,B=F&&F.isDepthTexture?F.type:null,G=y(x.stencilBuffer,B),ae=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=O(x);H(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,G,x.width,x.height):R?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,G,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,G,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,C)}else{const F=x.textures;for(let B=0;B<F.length;B++){const G=F[B],ae=o.convert(G.format,G.colorSpace),se=o.convert(G.type),fe=S(G.internalFormat,ae,se,G.colorSpace),Oe=O(x);R&&H(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,fe,x.width,x.height):H(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Oe,fe,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,fe,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function V(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const F=i.get(x.depthTexture).__webglTexture,B=O(x);if(x.depthTexture.format===Yo)H(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0,B):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0);else if(x.depthTexture.format===vs)H(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0,B):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function le(C){const x=i.get(C),R=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const F=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),F){const B=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,F.removeEventListener("dispose",B)};F.addEventListener("dispose",B),x.__depthDisposeCallback=B}x.__boundDepthTexture=F}if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");V(x.__webglFramebuffer,C)}else if(R){x.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[F]),x.__webglDepthbuffer[F]===void 0)x.__webglDepthbuffer[F]=t.createRenderbuffer(),ge(x.__webglDepthbuffer[F],C,!1);else{const B=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer[F];t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,B,t.RENDERBUFFER,G)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),ge(x.__webglDepthbuffer,C,!1);else{const F=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,B=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,B),t.framebufferRenderbuffer(t.FRAMEBUFFER,F,t.RENDERBUFFER,B)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(C,x,R){const F=i.get(C);x!==void 0&&ce(F.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),R!==void 0&&le(C)}function ue(C){const x=C.texture,R=i.get(C),F=i.get(x);C.addEventListener("dispose",E);const B=C.textures,G=C.isWebGLCubeRenderTarget===!0,ae=B.length>1;if(ae||(F.__webglTexture===void 0&&(F.__webglTexture=t.createTexture()),F.__version=x.version,s.memory.textures++),G){R.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer[se]=[];for(let fe=0;fe<x.mipmaps.length;fe++)R.__webglFramebuffer[se][fe]=t.createFramebuffer()}else R.__webglFramebuffer[se]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)R.__webglFramebuffer[se]=t.createFramebuffer()}else R.__webglFramebuffer=t.createFramebuffer();if(ae)for(let se=0,fe=B.length;se<fe;se++){const Oe=i.get(B[se]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),s.memory.textures++)}if(C.samples>0&&H(C)===!1){R.__webglMultisampledFramebuffer=t.createFramebuffer(),R.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let se=0;se<B.length;se++){const fe=B[se];R.__webglColorRenderbuffer[se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,R.__webglColorRenderbuffer[se]);const Oe=o.convert(fe.format,fe.colorSpace),de=o.convert(fe.type),_e=S(fe.internalFormat,Oe,de,fe.colorSpace,C.isXRRenderTarget===!0),Be=O(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,_e,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.RENDERBUFFER,R.__webglColorRenderbuffer[se])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(R.__webglDepthRenderbuffer=t.createRenderbuffer(),ge(R.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(G){n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture),be(t.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)ce(R.__webglFramebuffer[se][fe],C,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,fe);else ce(R.__webglFramebuffer[se],C,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);g(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){for(let se=0,fe=B.length;se<fe;se++){const Oe=B[se],de=i.get(Oe);n.bindTexture(t.TEXTURE_2D,de.__webglTexture),be(t.TEXTURE_2D,Oe),ce(R.__webglFramebuffer,C,Oe,t.COLOR_ATTACHMENT0+se,t.TEXTURE_2D,0),g(Oe)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(se,F.__webglTexture),be(se,x),x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)ce(R.__webglFramebuffer[fe],C,x,t.COLOR_ATTACHMENT0,se,fe);else ce(R.__webglFramebuffer,C,x,t.COLOR_ATTACHMENT0,se,0);g(x)&&p(se),n.unbindTexture()}C.depthBuffer&&le(C)}function we(C){const x=C.textures;for(let R=0,F=x.length;R<F;R++){const B=x[R];if(g(B)){const G=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ae=i.get(B).__webglTexture;n.bindTexture(G,ae),p(G),n.unbindTexture()}}}const ie=[],_=[];function P(C){if(C.samples>0){if(H(C)===!1){const x=C.textures,R=C.width,F=C.height;let B=t.COLOR_BUFFER_BIT;const G=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(C),se=x.length>1;if(se)for(let fe=0;fe<x.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(B|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(B|=t.STENCIL_BUFFER_BIT)),se){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);const Oe=i.get(x[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Oe,0)}t.blitFramebuffer(0,0,R,F,0,0,R,F,B,t.NEAREST),l===!0&&(ie.length=0,_.length=0,ie.push(t.COLOR_ATTACHMENT0+fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ie.push(G),_.push(G),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,_)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),se)for(let fe=0;fe<x.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);const Oe=i.get(x[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,Oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function O(C){return Math.min(r.maxSamples,C.samples)}function H(C){const x=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function k(C){const x=s.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function K(C,x){const R=C.colorSpace,F=C.format,B=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||R!==yr&&R!==lr&&(ft.getTransfer(R)===St?(F!==Jn||B!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),x}function Z(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=M,this.setTexture2D=W,this.setTexture2DArray=ne,this.setTexture3D=X,this.setTextureCube=te,this.rebindTextures=oe,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=H}function S4(t,e){function n(i,r=lr){let o;const s=ft.getTransfer(r);if(i===ki)return t.UNSIGNED_BYTE;if(i===yp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Sp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ay)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===oy)return t.BYTE;if(i===sy)return t.SHORT;if(i===Ia)return t.UNSIGNED_SHORT;if(i===bp)return t.INT;if(i===no)return t.UNSIGNED_INT;if(i===Ni)return t.FLOAT;if(i===rl)return t.HALF_FLOAT;if(i===ly)return t.ALPHA;if(i===cy)return t.RGB;if(i===Jn)return t.RGBA;if(i===uy)return t.LUMINANCE;if(i===hy)return t.LUMINANCE_ALPHA;if(i===Yo)return t.DEPTH_COMPONENT;if(i===vs)return t.DEPTH_STENCIL;if(i===dy)return t.RED;if(i===Cp)return t.RED_INTEGER;if(i===fy)return t.RG;if(i===Mp)return t.RG_INTEGER;if(i===wp)return t.RGBA_INTEGER;if(i===vc||i===xc||i===_c||i===bc)if(s===St)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===vc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_c)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===vc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_c)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gd||i===Wd||i===Xd||i===jd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Gd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qd||i===Yd||i===Kd)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===qd||i===Yd)return s===St?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Kd)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zd||i===Jd||i===Qd||i===ef||i===tf||i===nf||i===rf||i===of||i===sf||i===af||i===lf||i===cf||i===uf||i===hf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Zd)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jd)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qd)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ef)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tf)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nf)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rf)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===of)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sf)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===af)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lf)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cf)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uf)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hf)return s===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yc||i===df||i===ff)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===yc)return s===St?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===df)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ff)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===py||i===pf||i===mf||i===gf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===yc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===pf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class C4 extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ui extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M4={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M4)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ui;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const w4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E4=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class T4{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new En,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $i({vertexShader:w4,fragmentShader:E4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xn(new ll(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A4 extends uo{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const v=new T4,g=n.getContextAttributes();let p=null,S=null;const y=[],w=[],L=new Se;let E=null;const T=new zn;T.layers.enable(1),T.viewport=new Nt;const D=new zn;D.layers.enable(2),D.viewport=new Nt;const z=[T,D],b=new C4;b.layers.enable(1),b.layers.enable(2);let M=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ce=y[J];return ce===void 0&&(ce=new Bh,y[J]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(J){let ce=y[J];return ce===void 0&&(ce=new Bh,y[J]=ce),ce.getGripSpace()},this.getHand=function(J){let ce=y[J];return ce===void 0&&(ce=new Bh,y[J]=ce),ce.getHandSpace()};function N(J){const ce=w.indexOf(J.inputSource);if(ce===-1)return;const ge=y[ce];ge!==void 0&&(ge.update(J.inputSource,J.frame,c||s),ge.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ne);for(let J=0;J<y.length;J++){const ce=w[J];ce!==null&&(w[J]=null,y[J].disconnect(ce))}M=null,I=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,S=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ne),g.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new io(f.framebufferWidth,f.framebufferHeight,{format:Jn,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ce=null,ge=null,V=null;g.depth&&(V=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=g.stencil?vs:Yo,ge=g.stencil?gs:no);const le={colorFormat:n.RGBA8,depthFormat:V,scaleFactor:o};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new io(d.textureWidth,d.textureHeight,{format:Jn,type:ki,depthTexture:new Py(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ne(J){for(let ce=0;ce<J.removed.length;ce++){const ge=J.removed[ce],V=w.indexOf(ge);V>=0&&(w[V]=null,y[V].disconnect(ge))}for(let ce=0;ce<J.added.length;ce++){const ge=J.added[ce];let V=w.indexOf(ge);if(V===-1){for(let oe=0;oe<y.length;oe++)if(oe>=w.length){w.push(ge),V=oe;break}else if(w[oe]===null){w[oe]=ge,V=oe;break}if(V===-1)break}const le=y[V];le&&le.connect(ge)}}const X=new U,te=new U;function j(J,ce,ge){X.setFromMatrixPosition(ce.matrixWorld),te.setFromMatrixPosition(ge.matrixWorld);const V=X.distanceTo(te),le=ce.projectionMatrix.elements,oe=ge.projectionMatrix.elements,ue=le[14]/(le[10]-1),we=le[14]/(le[10]+1),ie=(le[9]+1)/le[5],_=(le[9]-1)/le[5],P=(le[8]-1)/le[0],O=(oe[8]+1)/oe[0],H=ue*P,k=ue*O,K=V/(-P+O),Z=K*-P;if(ce.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Z),J.translateZ(K),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),le[10]===-1)J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const C=ue+K,x=we+K,R=H-Z,F=k+(V-Z),B=ie*we/x*C,G=_*we/x*C;J.projectionMatrix.makePerspective(R,F,B,G,C,x),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function pe(J,ce){ce===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ce.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ce=J.near,ge=J.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),b.near=D.near=T.near=ce,b.far=D.far=T.far=ge,(M!==b.near||I!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),M=b.near,I=b.far);const V=J.parent,le=b.cameras;pe(b,V);for(let oe=0;oe<le.length;oe++)pe(le[oe],V);le.length===2?j(b,T,D):b.projectionMatrix.copy(T.projectionMatrix),xe(J,b,V)};function xe(J,ce,ge){ge===null?J.matrix.copy(ce.matrixWorld):(J.matrix.copy(ge.matrixWorld),J.matrix.invert(),J.matrix.multiply(ce.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Oa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let be=null;function ke(J,ce){if(u=ce.getViewerPose(c||s),m=ce,u!==null){const ge=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let V=!1;ge.length!==b.cameras.length&&(b.cameras.length=0,V=!0);for(let oe=0;oe<ge.length;oe++){const ue=ge[oe];let we=null;if(f!==null)we=f.getViewport(ue);else{const _=h.getViewSubImage(d,ue);we=_.viewport,oe===0&&(e.setRenderTargetTextures(S,_.colorTexture,d.ignoreDepthValues?void 0:_.depthStencilTexture),e.setRenderTarget(S))}let ie=z[oe];ie===void 0&&(ie=new zn,ie.layers.enable(oe),ie.viewport=new Nt,z[oe]=ie),ie.matrix.fromArray(ue.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(we.x,we.y,we.width,we.height),oe===0&&(b.matrix.copy(ie.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),V===!0&&b.cameras.push(ie)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")){const oe=h.getDepthInformation(ge[0]);oe&&oe.isValid&&oe.texture&&v.init(e,oe,r.renderState)}}for(let ge=0;ge<y.length;ge++){const V=w[ge],le=y[ge];V!==null&&le!==void 0&&le.update(V,ce,c||s)}be&&be(J,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),m=null}const Ce=new Ty;Ce.setAnimationLoop(ke),this.setAnimationLoop=function(J){be=J},this.dispose=function(){}}}const Rr=new Vi,P4=new Et;function R4(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Cy(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,S,y,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),h(g,p)):p.isMeshPhongMaterial?(o(g,p),u(g,p)):p.isMeshStandardMaterial?(o(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,w)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),v(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,S,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===wn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===wn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=e.get(p),y=S.envMap,w=S.envMapRotation;y&&(g.envMap.value=y,Rr.copy(w),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),g.envMapRotation.value.setFromMatrix4(P4.makeRotationFromEuler(Rr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=y*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const S=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function L4(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const w=y.program;i.uniformBlockBinding(S,w)}function c(S,y){let w=r[S.id];w===void 0&&(m(S),w=u(S),r[S.id]=w,S.addEventListener("dispose",g));const L=y.program;i.updateUBOMapping(S,L);const E=e.render.frame;o[S.id]!==E&&(d(S),o[S.id]=E)}function u(S){const y=h();S.__bindingPointIndex=y;const w=t.createBuffer(),L=S.__size,E=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,L,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,w),w}function h(){for(let S=0;S<a;S++)if(s.indexOf(S)===-1)return s.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=r[S.id],w=S.uniforms,L=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let E=0,T=w.length;E<T;E++){const D=Array.isArray(w[E])?w[E]:[w[E]];for(let z=0,b=D.length;z<b;z++){const M=D[z];if(f(M,E,z,L)===!0){const I=M.__offset,N=Array.isArray(M.value)?M.value:[M.value];let W=0;for(let ne=0;ne<N.length;ne++){const X=N[ne],te=v(X);typeof X=="number"||typeof X=="boolean"?(M.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,I+W,M.__data)):X.isMatrix3?(M.__data[0]=X.elements[0],M.__data[1]=X.elements[1],M.__data[2]=X.elements[2],M.__data[3]=0,M.__data[4]=X.elements[3],M.__data[5]=X.elements[4],M.__data[6]=X.elements[5],M.__data[7]=0,M.__data[8]=X.elements[6],M.__data[9]=X.elements[7],M.__data[10]=X.elements[8],M.__data[11]=0):(X.toArray(M.__data,W),W+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,M.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(S,y,w,L){const E=S.value,T=y+"_"+w;if(L[T]===void 0)return typeof E=="number"||typeof E=="boolean"?L[T]=E:L[T]=E.clone(),!0;{const D=L[T];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return L[T]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function m(S){const y=S.uniforms;let w=0;const L=16;for(let T=0,D=y.length;T<D;T++){const z=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,M=z.length;b<M;b++){const I=z[b],N=Array.isArray(I.value)?I.value:[I.value];for(let W=0,ne=N.length;W<ne;W++){const X=N[W],te=v(X),j=w%L,pe=j%te.boundary,xe=j+pe;w+=pe,xe!==0&&L-xe<te.storage&&(w+=L-xe),I.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=te.storage}}}const E=w%L;return E>0&&(w+=L-E),S.__size=w,S.__cache={},this}function v(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function g(S){const y=S.target;y.removeEventListener("dispose",g);const w=s.indexOf(y.__bindingPointIndex);s.splice(w,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function p(){for(const S in r)t.deleteBuffer(r[S]);s=[],r={},o={}}return{bind:l,update:c,dispose:p}}class D4{constructor(e={}){const{canvas:n=_F(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const f=new Uint32Array(4),m=new Int32Array(4);let v=null,g=null;const p=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=pr,this.toneMappingExposure=1;const y=this;let w=!1,L=0,E=0,T=null,D=-1,z=null;const b=new Nt,M=new Nt;let I=null;const N=new it(0);let W=0,ne=n.width,X=n.height,te=1,j=null,pe=null;const xe=new Nt(0,0,ne,X),be=new Nt(0,0,ne,X);let ke=!1;const Ce=new Ey;let J=!1,ce=!1;const ge=new Et,V=new Et,le=new U,oe=new Nt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function ie(){return T===null?te:1}let _=i;function P(A,q){return n.getContext(A,q)}try{const A={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_p}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Ee,!1),n.addEventListener("webglcontextcreationerror",Le,!1),_===null){const q="webgl2";if(_=P(q,A),_===null)throw P(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let O,H,k,K,Z,C,x,R,F,B,G,ae,se,fe,Oe,de,_e,Be,Fe,Ae,tt,Ve,nt,$;function Re(){O=new UB(_),O.init(),Ve=new S4(_,O),H=new LB(_,O,e,Ve),k=new _4(_),H.reverseDepthBuffer&&k.buffers.depth.setReversed(!0),K=new HB(_),Z=new r4,C=new y4(_,O,k,Z,H,Ve,K),x=new IB(y),R=new FB(y),F=new jF(_),nt=new PB(_,F),B=new zB(_,F,K,nt),G=new VB(_,B,F,K),Fe=new kB(_,H,C),de=new DB(Z),ae=new i4(y,x,R,O,H,nt,de),se=new R4(y,Z),fe=new s4,Oe=new d4(O),Be=new AB(y,x,R,k,G,d,l),_e=new v4(y,G,H),$=new L4(_,K,H,k),Ae=new RB(_,O,K),tt=new BB(_,O,K),K.programs=ae.programs,y.capabilities=H,y.extensions=O,y.properties=Z,y.renderLists=fe,y.shadowMap=_e,y.state=k,y.info=K}Re();const re=new A4(y,_);this.xr=re,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const A=O.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=O.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(A){A!==void 0&&(te=A,this.setSize(ne,X,!1))},this.getSize=function(A){return A.set(ne,X)},this.setSize=function(A,q,Q=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=A,X=q,n.width=Math.floor(A*te),n.height=Math.floor(q*te),Q===!0&&(n.style.width=A+"px",n.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(ne*te,X*te).floor()},this.setDrawingBufferSize=function(A,q,Q){ne=A,X=q,te=Q,n.width=Math.floor(A*Q),n.height=Math.floor(q*Q),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(xe)},this.setViewport=function(A,q,Q,ee){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,q,Q,ee),k.viewport(b.copy(xe).multiplyScalar(te).round())},this.getScissor=function(A){return A.copy(be)},this.setScissor=function(A,q,Q,ee){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,q,Q,ee),k.scissor(M.copy(be).multiplyScalar(te).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(A){k.setScissorTest(ke=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){pe=A},this.getClearColor=function(A){return A.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(A=!0,q=!0,Q=!0){let ee=0;if(A){let Y=!1;if(T!==null){const ye=T.texture.format;Y=ye===wp||ye===Mp||ye===Cp}if(Y){const ye=T.texture.type,De=ye===ki||ye===no||ye===Ia||ye===gs||ye===yp||ye===Sp,Ue=Be.getClearColor(),He=Be.getClearAlpha(),Ye=Ue.r,Ze=Ue.g,$e=Ue.b;De?(f[0]=Ye,f[1]=Ze,f[2]=$e,f[3]=He,_.clearBufferuiv(_.COLOR,0,f)):(m[0]=Ye,m[1]=Ze,m[2]=$e,m[3]=He,_.clearBufferiv(_.COLOR,0,m))}else ee|=_.COLOR_BUFFER_BIT}q&&(ee|=_.DEPTH_BUFFER_BIT,_.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(ee|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Ee,!1),n.removeEventListener("webglcontextcreationerror",Le,!1),fe.dispose(),Oe.dispose(),Z.dispose(),x.dispose(),R.dispose(),G.dispose(),nt.dispose(),$.dispose(),ae.dispose(),re.dispose(),re.removeEventListener("sessionstart",cl),re.removeEventListener("sessionend",ul),_i.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=K.autoReset,q=_e.enabled,Q=_e.autoUpdate,ee=_e.needsUpdate,Y=_e.type;Re(),K.autoReset=A,_e.enabled=q,_e.autoUpdate=Q,_e.needsUpdate=ee,_e.type=Y}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const q=A.target;q.removeEventListener("dispose",rt),At(q)}function At(A){en(A),Z.remove(A)}function en(A){const q=Z.get(A).programs;q!==void 0&&(q.forEach(function(Q){ae.releaseProgram(Q)}),A.isShaderMaterial&&ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,Q,ee,Y,ye){q===null&&(q=ue);const De=Y.isMesh&&Y.matrixWorld.determinant()<0,Ue=qy(A,q,Q,ee,Y);k.setMaterial(ee,De);let He=Q.index,Ye=1;if(ee.wireframe===!0){if(He=B.getWireframeAttribute(Q),He===void 0)return;Ye=2}const Ze=Q.drawRange,$e=Q.attributes.position;let pt=Ze.start*Ye,yt=(Ze.start+Ze.count)*Ye;ye!==null&&(pt=Math.max(pt,ye.start*Ye),yt=Math.min(yt,(ye.start+ye.count)*Ye)),He!==null?(pt=Math.max(pt,0),yt=Math.min(yt,He.count)):$e!=null&&(pt=Math.max(pt,0),yt=Math.min(yt,$e.count));const Pt=yt-pt;if(Pt<0||Pt===1/0)return;nt.setup(Y,ee,Ue,Q,He);let Rn,ct=Ae;if(He!==null&&(Rn=F.get(He),ct=tt,ct.setIndex(Rn)),Y.isMesh)ee.wireframe===!0?(k.setLineWidth(ee.wireframeLinewidth*ie()),ct.setMode(_.LINES)):ct.setMode(_.TRIANGLES);else if(Y.isLine){let Ge=ee.linewidth;Ge===void 0&&(Ge=1),k.setLineWidth(Ge*ie()),Y.isLineSegments?ct.setMode(_.LINES):Y.isLineLoop?ct.setMode(_.LINE_LOOP):ct.setMode(_.LINE_STRIP)}else Y.isPoints?ct.setMode(_.POINTS):Y.isSprite&&ct.setMode(_.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ct.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ge=Y._multiDrawStarts,qt=Y._multiDrawCounts,ut=Y._multiDrawCount,$n=He?F.get(He).bytesPerElement:1,fo=Z.get(ee).currentProgram.getUniforms();for(let Ln=0;Ln<ut;Ln++)fo.setValue(_,"_gl_DrawID",Ln),ct.render(Ge[Ln]/$n,qt[Ln])}else if(Y.isInstancedMesh)ct.renderInstances(pt,Pt,Y.count);else if(Q.isInstancedBufferGeometry){const Ge=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,qt=Math.min(Q.instanceCount,Ge);ct.renderInstances(pt,Pt,qt)}else ct.render(pt,Pt)};function ot(A,q,Q){A.transparent===!0&&A.side===Oi&&A.forceSinglePass===!1?(A.side=wn,A.needsUpdate=!0,dl(A,q,Q),A.side=vr,A.needsUpdate=!0,dl(A,q,Q),A.side=Oi):dl(A,q,Q)}this.compile=function(A,q,Q=null){Q===null&&(Q=A),g=Oe.get(Q),g.init(q),S.push(g),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),A!==Q&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const ee=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ye=Y.material;if(ye)if(Array.isArray(ye))for(let De=0;De<ye.length;De++){const Ue=ye[De];ot(Ue,Q,Y),ee.add(Ue)}else ot(ye,Q,Y),ee.add(ye)}),S.pop(),g=null,ee},this.compileAsync=function(A,q,Q=null){const ee=this.compile(A,q,Q);return new Promise(Y=>{function ye(){if(ee.forEach(function(De){Z.get(De).currentProgram.isReady()&&ee.delete(De)}),ee.size===0){Y(A);return}setTimeout(ye,10)}O.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let tn=null;function Vn(A){tn&&tn(A)}function cl(){_i.stop()}function ul(){_i.start()}const _i=new Ty;_i.setAnimationLoop(Vn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(A){tn=A,re.setAnimationLoop(A),A===null?_i.stop():_i.start()},re.addEventListener("sessionstart",cl),re.addEventListener("sessionend",ul),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(q),q=re.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,q,T),g=Oe.get(A,S.length),g.init(q),S.push(g),V.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ce.setFromProjectionMatrix(V),ce=this.localClippingEnabled,J=de.init(this.clippingPlanes,ce),v=fe.get(A,p.length),v.init(),p.push(v),re.enabled===!0&&re.isPresenting===!0){const ye=y.xr.getDepthSensingMesh();ye!==null&&Lu(ye,q,-1/0,y.sortObjects)}Lu(A,q,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(j,pe),we=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,we&&Be.addToRenderList(v,A),this.info.render.frame++,J===!0&&de.beginShadows();const Q=g.state.shadowsArray;_e.render(Q,A,q),J===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=v.opaque,Y=v.transmissive;if(g.setupLights(),q.isArrayCamera){const ye=q.cameras;if(Y.length>0)for(let De=0,Ue=ye.length;De<Ue;De++){const He=ye[De];Fp(ee,Y,A,He)}we&&Be.render(A);for(let De=0,Ue=ye.length;De<Ue;De++){const He=ye[De];Np(v,A,He,He.viewport)}}else Y.length>0&&Fp(ee,Y,A,q),we&&Be.render(A),Np(v,A,q);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(y,A,q),nt.resetDefaultState(),D=-1,z=null,S.pop(),S.length>0?(g=S[S.length-1],J===!0&&de.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Lu(A,q,Q,ee){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ce.intersectsSprite(A)){ee&&oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(V);const De=G.update(A),Ue=A.material;Ue.visible&&v.push(A,De,Ue,Q,oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ce.intersectsObject(A))){const De=G.update(A),Ue=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),oe.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),oe.copy(De.boundingSphere.center)),oe.applyMatrix4(A.matrixWorld).applyMatrix4(V)),Array.isArray(Ue)){const He=De.groups;for(let Ye=0,Ze=He.length;Ye<Ze;Ye++){const $e=He[Ye],pt=Ue[$e.materialIndex];pt&&pt.visible&&v.push(A,De,pt,Q,oe.z,$e)}}else Ue.visible&&v.push(A,De,Ue,Q,oe.z,null)}}const ye=A.children;for(let De=0,Ue=ye.length;De<Ue;De++)Lu(ye[De],q,Q,ee)}function Np(A,q,Q,ee){const Y=A.opaque,ye=A.transmissive,De=A.transparent;g.setupLightsView(Q),J===!0&&de.setGlobalState(y.clippingPlanes,Q),ee&&k.viewport(b.copy(ee)),Y.length>0&&hl(Y,q,Q),ye.length>0&&hl(ye,q,Q),De.length>0&&hl(De,q,Q),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Fp(A,q,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ee.id]===void 0&&(g.state.transmissionRenderTarget[ee.id]=new io(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?rl:ki,minFilter:kr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const ye=g.state.transmissionRenderTarget[ee.id],De=ee.viewport||b;ye.setSize(De.z,De.w);const Ue=y.getRenderTarget();y.setRenderTarget(ye),y.getClearColor(N),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),we&&Be.render(Q);const He=y.toneMapping;y.toneMapping=pr;const Ye=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),g.setupLightsView(ee),J===!0&&de.setGlobalState(y.clippingPlanes,ee),hl(A,Q,ee),C.updateMultisampleRenderTarget(ye),C.updateRenderTargetMipmap(ye),O.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let $e=0,pt=q.length;$e<pt;$e++){const yt=q[$e],Pt=yt.object,Rn=yt.geometry,ct=yt.material,Ge=yt.group;if(ct.side===Oi&&Pt.layers.test(ee.layers)){const qt=ct.side;ct.side=wn,ct.needsUpdate=!0,Up(Pt,Q,ee,Rn,ct,Ge),ct.side=qt,ct.needsUpdate=!0,Ze=!0}}Ze===!0&&(C.updateMultisampleRenderTarget(ye),C.updateRenderTargetMipmap(ye))}y.setRenderTarget(Ue),y.setClearColor(N,W),Ye!==void 0&&(ee.viewport=Ye),y.toneMapping=He}function hl(A,q,Q){const ee=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,ye=A.length;Y<ye;Y++){const De=A[Y],Ue=De.object,He=De.geometry,Ye=ee===null?De.material:ee,Ze=De.group;Ue.layers.test(Q.layers)&&Up(Ue,q,Q,He,Ye,Ze)}}function Up(A,q,Q,ee,Y,ye){A.onBeforeRender(y,q,Q,ee,Y,ye),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(y,q,Q,ee,A,ye),Y.transparent===!0&&Y.side===Oi&&Y.forceSinglePass===!1?(Y.side=wn,Y.needsUpdate=!0,y.renderBufferDirect(Q,q,ee,Y,A,ye),Y.side=vr,Y.needsUpdate=!0,y.renderBufferDirect(Q,q,ee,Y,A,ye),Y.side=Oi):y.renderBufferDirect(Q,q,ee,Y,A,ye),A.onAfterRender(y,q,Q,ee,Y,ye)}function dl(A,q,Q){q.isScene!==!0&&(q=ue);const ee=Z.get(A),Y=g.state.lights,ye=g.state.shadowsArray,De=Y.state.version,Ue=ae.getParameters(A,Y.state,ye,q,Q),He=ae.getProgramCacheKey(Ue);let Ye=ee.programs;ee.environment=A.isMeshStandardMaterial?q.environment:null,ee.fog=q.fog,ee.envMap=(A.isMeshStandardMaterial?R:x).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Ye===void 0&&(A.addEventListener("dispose",rt),Ye=new Map,ee.programs=Ye);let Ze=Ye.get(He);if(Ze!==void 0){if(ee.currentProgram===Ze&&ee.lightsStateVersion===De)return Bp(A,Ue),Ze}else Ue.uniforms=ae.getUniforms(A),A.onBeforeCompile(Ue,y),Ze=ae.acquireProgram(Ue,He),Ye.set(He,Ze),ee.uniforms=Ue.uniforms;const $e=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=de.uniform),Bp(A,Ue),ee.needsLights=Ky(A),ee.lightsStateVersion=De,ee.needsLights&&($e.ambientLightColor.value=Y.state.ambient,$e.lightProbe.value=Y.state.probe,$e.directionalLights.value=Y.state.directional,$e.directionalLightShadows.value=Y.state.directionalShadow,$e.spotLights.value=Y.state.spot,$e.spotLightShadows.value=Y.state.spotShadow,$e.rectAreaLights.value=Y.state.rectArea,$e.ltc_1.value=Y.state.rectAreaLTC1,$e.ltc_2.value=Y.state.rectAreaLTC2,$e.pointLights.value=Y.state.point,$e.pointLightShadows.value=Y.state.pointShadow,$e.hemisphereLights.value=Y.state.hemi,$e.directionalShadowMap.value=Y.state.directionalShadowMap,$e.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,$e.spotShadowMap.value=Y.state.spotShadowMap,$e.spotLightMatrix.value=Y.state.spotLightMatrix,$e.spotLightMap.value=Y.state.spotLightMap,$e.pointShadowMap.value=Y.state.pointShadowMap,$e.pointShadowMatrix.value=Y.state.pointShadowMatrix),ee.currentProgram=Ze,ee.uniformsList=null,Ze}function zp(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Cc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Bp(A,q){const Q=Z.get(A);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function qy(A,q,Q,ee,Y){q.isScene!==!0&&(q=ue),C.resetTextureUnits();const ye=q.fog,De=ee.isMeshStandardMaterial?q.environment:null,Ue=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:yr,He=(ee.isMeshStandardMaterial?R:x).get(ee.envMap||De),Ye=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ze=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),$e=!!Q.morphAttributes.position,pt=!!Q.morphAttributes.normal,yt=!!Q.morphAttributes.color;let Pt=pr;ee.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Pt=y.toneMapping);const Rn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ct=Rn!==void 0?Rn.length:0,Ge=Z.get(ee),qt=g.state.lights;if(J===!0&&(ce===!0||A!==z)){const Nn=A===z&&ee.id===D;de.setState(ee,A,Nn)}let ut=!1;ee.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==qt.state.version||Ge.outputColorSpace!==Ue||Y.isBatchedMesh&&Ge.batching===!1||!Y.isBatchedMesh&&Ge.batching===!0||Y.isBatchedMesh&&Ge.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ge.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ge.instancing===!1||!Y.isInstancedMesh&&Ge.instancing===!0||Y.isSkinnedMesh&&Ge.skinning===!1||!Y.isSkinnedMesh&&Ge.skinning===!0||Y.isInstancedMesh&&Ge.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ge.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ge.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ge.instancingMorph===!1&&Y.morphTexture!==null||Ge.envMap!==He||ee.fog===!0&&Ge.fog!==ye||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==de.numPlanes||Ge.numIntersection!==de.numIntersection)||Ge.vertexAlphas!==Ye||Ge.vertexTangents!==Ze||Ge.morphTargets!==$e||Ge.morphNormals!==pt||Ge.morphColors!==yt||Ge.toneMapping!==Pt||Ge.morphTargetsCount!==ct)&&(ut=!0):(ut=!0,Ge.__version=ee.version);let $n=Ge.currentProgram;ut===!0&&($n=dl(ee,q,Y));let fo=!1,Ln=!1,Du=!1;const Dt=$n.getUniforms(),ji=Ge.uniforms;if(k.useProgram($n.program)&&(fo=!0,Ln=!0,Du=!0),ee.id!==D&&(D=ee.id,Ln=!0),fo||z!==A){H.reverseDepthBuffer?(ge.copy(A.projectionMatrix),yF(ge),SF(ge),Dt.setValue(_,"projectionMatrix",ge)):Dt.setValue(_,"projectionMatrix",A.projectionMatrix),Dt.setValue(_,"viewMatrix",A.matrixWorldInverse);const Nn=Dt.map.cameraPosition;Nn!==void 0&&Nn.setValue(_,le.setFromMatrixPosition(A.matrixWorld)),H.logarithmicDepthBuffer&&Dt.setValue(_,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Dt.setValue(_,"isOrthographic",A.isOrthographicCamera===!0),z!==A&&(z=A,Ln=!0,Du=!0)}if(Y.isSkinnedMesh){Dt.setOptional(_,Y,"bindMatrix"),Dt.setOptional(_,Y,"bindMatrixInverse");const Nn=Y.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Dt.setValue(_,"boneTexture",Nn.boneTexture,C))}Y.isBatchedMesh&&(Dt.setOptional(_,Y,"batchingTexture"),Dt.setValue(_,"batchingTexture",Y._matricesTexture,C),Dt.setOptional(_,Y,"batchingIdTexture"),Dt.setValue(_,"batchingIdTexture",Y._indirectTexture,C),Dt.setOptional(_,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Dt.setValue(_,"batchingColorTexture",Y._colorsTexture,C));const Iu=Q.morphAttributes;if((Iu.position!==void 0||Iu.normal!==void 0||Iu.color!==void 0)&&Fe.update(Y,Q,$n),(Ln||Ge.receiveShadow!==Y.receiveShadow)&&(Ge.receiveShadow=Y.receiveShadow,Dt.setValue(_,"receiveShadow",Y.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(ji.envMap.value=He,ji.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&q.environment!==null&&(ji.envMapIntensity.value=q.environmentIntensity),Ln&&(Dt.setValue(_,"toneMappingExposure",y.toneMappingExposure),Ge.needsLights&&Yy(ji,Du),ye&&ee.fog===!0&&se.refreshFogUniforms(ji,ye),se.refreshMaterialUniforms(ji,ee,te,X,g.state.transmissionRenderTarget[A.id]),Cc.upload(_,zp(Ge),ji,C)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Cc.upload(_,zp(Ge),ji,C),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Dt.setValue(_,"center",Y.center),Dt.setValue(_,"modelViewMatrix",Y.modelViewMatrix),Dt.setValue(_,"normalMatrix",Y.normalMatrix),Dt.setValue(_,"modelMatrix",Y.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Nn=ee.uniformsGroups;for(let Ou=0,Zy=Nn.length;Ou<Zy;Ou++){const Hp=Nn[Ou];$.update(Hp,$n),$.bind(Hp,$n)}}return $n}function Yy(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Ky(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,q,Q){Z.get(A.texture).__webglTexture=q,Z.get(A.depthTexture).__webglTexture=Q;const ee=Z.get(A);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,q){const Q=Z.get(A);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,Q=0){T=A,L=q,E=Q;let ee=!0,Y=null,ye=!1,De=!1;if(A){const He=Z.get(A);if(He.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(_.FRAMEBUFFER,null),ee=!1;else if(He.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(He.__hasExternalTextures)C.rebindTextures(A,Z.get(A.texture).__webglTexture,Z.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(He.__boundDepthTexture!==$e){if($e!==null&&Z.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(De=!0);const Ze=Z.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[q])?Y=Ze[q][Q]:Y=Ze[q],ye=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?Y=Z.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?Y=Ze[Q]:Y=Ze,b.copy(A.viewport),M.copy(A.scissor),I=A.scissorTest}else b.copy(xe).multiplyScalar(te).floor(),M.copy(be).multiplyScalar(te).floor(),I=ke;if(k.bindFramebuffer(_.FRAMEBUFFER,Y)&&ee&&k.drawBuffers(A,Y),k.viewport(b),k.scissor(M),k.setScissorTest(I),ye){const He=Z.get(A.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+q,He.__webglTexture,Q)}else if(De){const He=Z.get(A.texture),Ye=q||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,He.__webglTexture,Q||0,Ye)}D=-1},this.readRenderTargetPixels=function(A,q,Q,ee,Y,ye,De){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){k.bindFramebuffer(_.FRAMEBUFFER,Ue);try{const He=A.texture,Ye=He.format,Ze=He.type;if(!H.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ee&&Q>=0&&Q<=A.height-Y&&_.readPixels(q,Q,ee,Y,Ve.convert(Ye),Ve.convert(Ze),ye)}finally{const He=T!==null?Z.get(T).__webglFramebuffer:null;k.bindFramebuffer(_.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,q,Q,ee,Y,ye,De){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){const He=A.texture,Ye=He.format,Ze=He.type;if(!H.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=A.width-ee&&Q>=0&&Q<=A.height-Y){k.bindFramebuffer(_.FRAMEBUFFER,Ue);const $e=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,$e),_.bufferData(_.PIXEL_PACK_BUFFER,ye.byteLength,_.STREAM_READ),_.readPixels(q,Q,ee,Y,Ve.convert(Ye),Ve.convert(Ze),0);const pt=T!==null?Z.get(T).__webglFramebuffer:null;k.bindFramebuffer(_.FRAMEBUFFER,pt);const yt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await bF(_,yt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,$e),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,ye),_.deleteBuffer($e),_.deleteSync(yt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,q=null,Q=0){A.isTexture!==!0&&(Sc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1]);const ee=Math.pow(2,-Q),Y=Math.floor(A.image.width*ee),ye=Math.floor(A.image.height*ee),De=q!==null?q.x:0,Ue=q!==null?q.y:0;C.setTexture2D(A,0),_.copyTexSubImage2D(_.TEXTURE_2D,Q,0,0,De,Ue,Y,ye),k.unbindTexture()},this.copyTextureToTexture=function(A,q,Q=null,ee=null,Y=0){A.isTexture!==!0&&(Sc("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,A=arguments[1],q=arguments[2],Y=arguments[3]||0,Q=null);let ye,De,Ue,He,Ye,Ze;Q!==null?(ye=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,Ue=Q.min.x,He=Q.min.y):(ye=A.image.width,De=A.image.height,Ue=0,He=0),ee!==null?(Ye=ee.x,Ze=ee.y):(Ye=0,Ze=0);const $e=Ve.convert(q.format),pt=Ve.convert(q.type);C.setTexture2D(q,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,q.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,q.unpackAlignment);const yt=_.getParameter(_.UNPACK_ROW_LENGTH),Pt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Rn=_.getParameter(_.UNPACK_SKIP_PIXELS),ct=_.getParameter(_.UNPACK_SKIP_ROWS),Ge=_.getParameter(_.UNPACK_SKIP_IMAGES),qt=A.isCompressedTexture?A.mipmaps[Y]:A.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,qt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,qt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ue),_.pixelStorei(_.UNPACK_SKIP_ROWS,He),A.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,Y,Ye,Ze,ye,De,$e,pt,qt.data):A.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,Y,Ye,Ze,qt.width,qt.height,$e,qt.data):_.texSubImage2D(_.TEXTURE_2D,Y,Ye,Ze,ye,De,$e,pt,qt),_.pixelStorei(_.UNPACK_ROW_LENGTH,yt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Pt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Rn),_.pixelStorei(_.UNPACK_SKIP_ROWS,ct),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ge),Y===0&&q.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(A,q,Q=null,ee=null,Y=0){A.isTexture!==!0&&(Sc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,ee=arguments[1]||null,A=arguments[2],q=arguments[3],Y=arguments[4]||0);let ye,De,Ue,He,Ye,Ze,$e,pt,yt;const Pt=A.isCompressedTexture?A.mipmaps[Y]:A.image;Q!==null?(ye=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,Ue=Q.max.z-Q.min.z,He=Q.min.x,Ye=Q.min.y,Ze=Q.min.z):(ye=Pt.width,De=Pt.height,Ue=Pt.depth,He=0,Ye=0,Ze=0),ee!==null?($e=ee.x,pt=ee.y,yt=ee.z):($e=0,pt=0,yt=0);const Rn=Ve.convert(q.format),ct=Ve.convert(q.type);let Ge;if(q.isData3DTexture)C.setTexture3D(q,0),Ge=_.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)C.setTexture2DArray(q,0),Ge=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,q.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,q.unpackAlignment);const qt=_.getParameter(_.UNPACK_ROW_LENGTH),ut=_.getParameter(_.UNPACK_IMAGE_HEIGHT),$n=_.getParameter(_.UNPACK_SKIP_PIXELS),fo=_.getParameter(_.UNPACK_SKIP_ROWS),Ln=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,Pt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Pt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,He),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ye),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ze),A.isDataTexture||A.isData3DTexture?_.texSubImage3D(Ge,Y,$e,pt,yt,ye,De,Ue,Rn,ct,Pt.data):q.isCompressedArrayTexture?_.compressedTexSubImage3D(Ge,Y,$e,pt,yt,ye,De,Ue,Rn,Pt.data):_.texSubImage3D(Ge,Y,$e,pt,yt,ye,De,Ue,Rn,ct,Pt),_.pixelStorei(_.UNPACK_ROW_LENGTH,qt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ut),_.pixelStorei(_.UNPACK_SKIP_PIXELS,$n),_.pixelStorei(_.UNPACK_SKIP_ROWS,fo),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ln),Y===0&&q.generateMipmaps&&_.generateMipmap(Ge),k.unbindTexture()},this.initRenderTarget=function(A){Z.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),k.unbindTexture()},this.resetState=function(){L=0,E=0,T=null,k.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ep?"display-p3":"srgb",n.unpackColorSpace=ft.workingColorSpace===Tu?"display-p3":"srgb"}}class Oy extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Jc extends As{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qc=new U,eu=new U,X0=new Et,Vs=new sl,Jl=new Ts,Hh=new U,j0=new U;class I4 extends _n{constructor(e=new Pn,n=new Jc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)Qc.fromBufferAttribute(n,r-1),eu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Qc.distanceTo(eu);e.setAttribute("lineDistance",new vn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(r),Jl.radius+=o,e.ray.intersectsSphere(Jl)===!1)return;X0.copy(r).invert(),Vs.copy(e.ray).applyMatrix4(X0);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let v=f,g=m-1;v<g;v+=c){const p=u.getX(v),S=u.getX(v+1),y=Ql(this,e,Vs,l,p,S);y&&n.push(y)}if(this.isLineLoop){const v=u.getX(m-1),g=u.getX(f),p=Ql(this,e,Vs,l,v,g);p&&n.push(p)}}else{const f=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let v=f,g=m-1;v<g;v+=c){const p=Ql(this,e,Vs,l,v,v+1);p&&n.push(p)}if(this.isLineLoop){const v=Ql(this,e,Vs,l,m-1,f);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ql(t,e,n,i,r,o){const s=t.geometry.attributes.position;if(Qc.fromBufferAttribute(s,r),eu.fromBufferAttribute(s,o),n.distanceSqToSegment(Qc,eu,Hh,j0)>i)return;Hh.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Hh);if(!(l<e.near||l>e.far))return{distance:l,point:j0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const q0=new U,Y0=new U;class tu extends I4{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)q0.fromBufferAttribute(n,r),Y0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+q0.distanceTo(Y0);e.setAttribute("lineDistance",new vn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ny extends As{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const K0=new Et,xf=new sl,ec=new Ts,tc=new U;class O4 extends _n{constructor(e=new Pn,n=new Ny){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(r),ec.radius+=o,e.ray.intersectsSphere(ec)===!1)return;K0.copy(r).invert(),xf.copy(e.ray).applyMatrix4(K0);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let m=d,v=f;m<v;m++){const g=c.getX(m);tc.fromBufferAttribute(h,g),Z0(tc,g,l,r,e,n,this)}}else{const d=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let m=d,v=f;m<v;m++)tc.fromBufferAttribute(h,m),Z0(tc,m,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Z0(t,e,n,i,r,o,s){const a=xf.distanceSqToPoint(t);if(a<n){const l=new U;xf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),o=0;n.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),o+=i.distanceTo(r),n.push(o),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const o=i.length;let s;n?s=n:s=e*i[o-1];let a=0,l=o-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-s,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(o-1);const u=i[r],d=i[r+1]-u,f=(s-u)/d;return(r+f)/(o-1)}getTangent(e,n){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const s=this.getPoint(r),a=this.getPoint(o),l=n||(s.isVector2?new Se:new U);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new U,r=[],o=[],s=[],a=new U,l=new Et;for(let f=0;f<=e;f++){const m=f/e;r[f]=this.getTangentAt(m,new U)}o[0]=new U,s[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let f=1;f<=e;f++){if(o[f]=o[f-1].clone(),s[f]=s[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(jt(r[f-1].dot(r[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,m))}s[f].crossVectors(r[f],o[f])}if(n===!0){let f=Math.acos(jt(o[0].dot(o[e]),-1,1));f/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(f=-f);for(let m=1;m<=e;m++)o[m].applyMatrix4(l.makeRotationAxis(r[m],f*m)),s[m].crossVectors(r[m],o[m])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Pp extends xi{constructor(e=0,n=0,i=1,r=1,o=0,s=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Se){const i=n,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);const a=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class N4 extends Pp{constructor(e,n,i,r,o,s){super(e,n,i,i,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Rp(){let t=0,e=0,n=0,i=0;function r(o,s,a,l){t=o,e=a,n=-3*o+3*s-2*a-l,i=2*o-2*s+a+l}return{initCatmullRom:function(o,s,a,l,c){r(s,a,c*(a-o),c*(l-s))},initNonuniformCatmullRom:function(o,s,a,l,c,u,h){let d=(s-o)/c-(a-o)/(c+u)+(a-s)/u,f=(a-s)/u-(l-s)/(u+h)+(l-a)/h;d*=u,f*=u,r(s,a,d,f)},calc:function(o){const s=o*o,a=s*o;return t+e*o+n*s+i*a}}}const nc=new U,kh=new Rp,Vh=new Rp,$h=new Rp;class F4 extends xi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new U){const i=n,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e;let a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%o]:(nc.subVectors(r[0],r[1]).add(r[0]),c=nc);const h=r[a%o],d=r[(a+1)%o];if(this.closed||a+2<o?u=r[(a+2)%o]:(nc.subVectors(r[o-1],r[o-2]).add(r[o-1]),u=nc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),kh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,v,g),Vh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,v,g),$h.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(kh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Vh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),$h.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(kh.calc(l),Vh.calc(l),$h.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function J0(t,e,n,i,r){const o=(i-e)*.5,s=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+o+s)*l+(-3*n+3*i-2*o-s)*a+o*t+n}function U4(t,e){const n=1-t;return n*n*e}function z4(t,e){return 2*(1-t)*t*e}function B4(t,e){return t*t*e}function da(t,e,n,i){return U4(t,e)+z4(t,n)+B4(t,i)}function H4(t,e){const n=1-t;return n*n*n*e}function k4(t,e){const n=1-t;return 3*n*n*t*e}function V4(t,e){return 3*(1-t)*t*t*e}function $4(t,e){return t*t*t*e}function fa(t,e,n,i,r){return H4(t,e)+k4(t,n)+V4(t,i)+$4(t,r)}class Fy extends xi{constructor(e=new Se,n=new Se,i=new Se,r=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Se){const i=n,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(fa(e,r.x,o.x,s.x,a.x),fa(e,r.y,o.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class G4 extends xi{constructor(e=new U,n=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new U){const i=n,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(fa(e,r.x,o.x,s.x,a.x),fa(e,r.y,o.y,s.y,a.y),fa(e,r.z,o.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Uy extends xi{constructor(e=new Se,n=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Se){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Se){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class W4 extends xi{constructor(e=new U,n=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new U){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new U){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zy extends xi{constructor(e=new Se,n=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Se){const i=n,r=this.v0,o=this.v1,s=this.v2;return i.set(da(e,r.x,o.x,s.x),da(e,r.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class X4 extends xi{constructor(e=new U,n=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new U){const i=n,r=this.v0,o=this.v1,s=this.v2;return i.set(da(e,r.x,o.x,s.x),da(e,r.y,o.y,s.y),da(e,r.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class By extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Se){const i=n,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,l=r[s===0?s:s-1],c=r[s],u=r[s>r.length-2?r.length-1:s+1],h=r[s>r.length-3?r.length-1:s+2];return i.set(J0(a,l.x,c.x,u.x,h.x),J0(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Se().fromArray(r))}return this}}var _f=Object.freeze({__proto__:null,ArcCurve:N4,CatmullRomCurve3:F4,CubicBezierCurve:Fy,CubicBezierCurve3:G4,EllipseCurve:Pp,LineCurve:Uy,LineCurve3:W4,QuadraticBezierCurve:zy,QuadraticBezierCurve3:X4,SplineCurve:By});class j4 extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _f[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=i){const s=r[o]-i,a=this.curves[o],l=a.getLength(),c=l===0?0:1-s/l;return a.getPointAt(c,n)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,o=this.curves;r<o.length;r++){const s=o[r],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new _f[r.type]().fromJSON(r))}return this}}class bf extends j4{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Uy(this.currentPoint.clone(),new Se(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const o=new zy(this.currentPoint.clone(),new Se(e,n),new Se(i,r));return this.curves.push(o),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,o,s){const a=new Fy(this.currentPoint.clone(),new Se(e,n),new Se(i,r),new Se(o,s));return this.curves.push(a),this.currentPoint.set(o,s),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new By(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,o,s){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,o,s),this}absarc(e,n,i,r,o,s){return this.absellipse(e,n,i,i,r,o,s),this}ellipse(e,n,i,r,o,s,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,o,s,a,l),this}absellipse(e,n,i,r,o,s,a,l){const c=new Pp(e,n,i,r,o,s,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class pa extends bf{constructor(e){super(e),this.uuid=ho(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new bf().fromJSON(r))}return this}}const q4={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let o=Hy(t,0,r,n,!0);const s=[];if(!o||o.next===o.prev)return s;let a,l,c,u,h,d,f;if(i&&(o=Q4(t,e,o,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let m=n;m<r;m+=n)h=t[m],d=t[m+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return Na(o,s,n,a,l,f,0),s}};function Hy(t,e,n,i,r){let o,s;if(r===uk(t,e,n,i)>0)for(o=e;o<n;o+=i)s=Q0(o,t[o],t[o+1],s);else for(o=n-i;o>=e;o-=i)s=Q0(o,t[o],t[o+1],s);return s&&Pu(s,s.next)&&(Ua(s),s=s.next),s}function oo(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Pu(n,n.next)||Tt(n.prev,n,n.next)===0)){if(Ua(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Na(t,e,n,i,r,o,s){if(!t)return;!s&&o&&rk(t,i,r,o);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,o?K4(t,i,r,o):Y4(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Ua(t),t=c.next,a=c.next;continue}if(t=c,t===a){s?s===1?(t=Z4(oo(t),e,n),Na(t,e,n,i,r,o,2)):s===2&&J4(t,e,n,i,r,o):Na(oo(t),e,n,i,r,o,1);break}}}function Y4(t){const e=t.prev,n=t,i=t.next;if(Tt(e,n,i)>=0)return!1;const r=e.x,o=n.x,s=i.x,a=e.y,l=n.y,c=i.y,u=r<o?r<s?r:s:o<s?o:s,h=a<l?a<c?a:c:l<c?l:c,d=r>o?r>s?r:s:o>s?o:s,f=a>l?a>c?a:c:l>c?l:c;let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&Uo(r,a,o,l,s,c,m.x,m.y)&&Tt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function K4(t,e,n,i){const r=t.prev,o=t,s=t.next;if(Tt(r,o,s)>=0)return!1;const a=r.x,l=o.x,c=s.x,u=r.y,h=o.y,d=s.y,f=a<l?a<c?a:c:l<c?l:c,m=u<h?u<d?u:d:h<d?h:d,v=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,p=yf(f,m,e,n,i),S=yf(v,g,e,n,i);let y=t.prevZ,w=t.nextZ;for(;y&&y.z>=p&&w&&w.z<=S;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=g&&y!==r&&y!==s&&Uo(a,u,l,h,c,d,y.x,y.y)&&Tt(y.prev,y,y.next)>=0||(y=y.prevZ,w.x>=f&&w.x<=v&&w.y>=m&&w.y<=g&&w!==r&&w!==s&&Uo(a,u,l,h,c,d,w.x,w.y)&&Tt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=g&&y!==r&&y!==s&&Uo(a,u,l,h,c,d,y.x,y.y)&&Tt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;w&&w.z<=S;){if(w.x>=f&&w.x<=v&&w.y>=m&&w.y<=g&&w!==r&&w!==s&&Uo(a,u,l,h,c,d,w.x,w.y)&&Tt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Z4(t,e,n){let i=t;do{const r=i.prev,o=i.next.next;!Pu(r,o)&&ky(r,i,i.next,o)&&Fa(r,o)&&Fa(o,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(o.i/n|0),Ua(i),Ua(i.next),i=t=o),i=i.next}while(i!==t);return oo(i)}function J4(t,e,n,i,r,o){let s=t;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&ak(s,a)){let l=Vy(s,a);s=oo(s,s.next),l=oo(l,l.next),Na(s,e,n,i,r,o,0),Na(l,e,n,i,r,o,0);return}a=a.next}s=s.next}while(s!==t)}function Q4(t,e,n,i){const r=[];let o,s,a,l,c;for(o=0,s=e.length;o<s;o++)a=e[o]*i,l=o<s-1?e[o+1]*i:t.length,c=Hy(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(sk(c));for(r.sort(ek),o=0;o<r.length;o++)n=tk(r[o],n);return n}function ek(t,e){return t.x-e.x}function tk(t,e){const n=nk(t,e);if(!n)return e;const i=Vy(n,t);return oo(i,i.next),oo(n,n.next)}function nk(t,e){let n=e,i=-1/0,r;const o=t.x,s=t.y;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=o&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===o))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;n=r;do o>=n.x&&n.x>=l&&o!==n.x&&Uo(s<c?o:i,s,l,c,s<c?i:o,s,n.x,n.y)&&(h=Math.abs(s-n.y)/(o-n.x),Fa(n,t)&&(h<u||h===u&&(n.x>r.x||n.x===r.x&&ik(r,n)))&&(r=n,u=h)),n=n.next;while(n!==a);return r}function ik(t,e){return Tt(t.prev,t,e.prev)<0&&Tt(e.next,t,t.next)<0}function rk(t,e,n,i){let r=t;do r.z===0&&(r.z=yf(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,ok(r)}function ok(t){let e,n,i,r,o,s,a,l,c=1;do{for(n=t,t=null,o=null,s=0;n;){for(s++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),o?o.nextZ=r:t=r,r.prevZ=o,o=r;n=i}o.nextZ=null,c*=2}while(s>1);return t}function yf(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function sk(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Uo(t,e,n,i,r,o,s,a){return(r-s)*(e-a)>=(t-s)*(o-a)&&(t-s)*(i-a)>=(n-s)*(e-a)&&(n-s)*(o-a)>=(r-s)*(i-a)}function ak(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!lk(t,e)&&(Fa(t,e)&&Fa(e,t)&&ck(t,e)&&(Tt(t.prev,t,e.prev)||Tt(t,e.prev,e))||Pu(t,e)&&Tt(t.prev,t,t.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Pu(t,e){return t.x===e.x&&t.y===e.y}function ky(t,e,n,i){const r=rc(Tt(t,e,n)),o=rc(Tt(t,e,i)),s=rc(Tt(n,i,t)),a=rc(Tt(n,i,e));return!!(r!==o&&s!==a||r===0&&ic(t,n,e)||o===0&&ic(t,i,e)||s===0&&ic(n,t,i)||a===0&&ic(n,e,i))}function ic(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function rc(t){return t>0?1:t<0?-1:0}function lk(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&ky(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Fa(t,e){return Tt(t.prev,t,t.next)<0?Tt(t,e,t.next)>=0&&Tt(t,t.prev,e)>=0:Tt(t,e,t.prev)<0||Tt(t,t.next,e)<0}function ck(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,o=(t.y+e.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&r<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Vy(t,e){const n=new Sf(t.i,t.x,t.y),i=new Sf(e.i,e.x,e.y),r=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,o.next=i,i.prev=o,i}function Q0(t,e,n,i){const r=new Sf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ua(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Sf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uk(t,e,n,i){let r=0;for(let o=e,s=n-i;o<n;o+=i)r+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return r}class Zo{static area(e){const n=e.length;let i=0;for(let r=n-1,o=0;o<n;r=o++)i+=e[r].x*e[o].y-e[o].x*e[r].y;return i*.5}static isClockWise(e){return Zo.area(e)<0}static triangulateShape(e,n){const i=[],r=[],o=[];ev(e),tv(i,e);let s=e.length;n.forEach(ev);for(let l=0;l<n.length;l++)r.push(s),s+=n[l].length,tv(i,n[l]);const a=q4.triangulate(i,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function ev(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function tv(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Ru extends Pn{constructor(e=new pa([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s(c)}this.setAttribute("position",new vn(r,3)),this.setAttribute("uv",new vn(o,2)),this.computeVertexNormals();function s(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,f=n.bevelThickness!==void 0?n.bevelThickness:.2,m=n.bevelSize!==void 0?n.bevelSize:f-.1,v=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const p=n.extrudePath,S=n.UVGenerator!==void 0?n.UVGenerator:hk;let y,w=!1,L,E,T,D;p&&(y=p.getSpacedPoints(u),w=!0,d=!1,L=p.computeFrenetFrames(u,!1),E=new U,T=new U,D=new U),d||(g=0,f=0,m=0,v=0);const z=a.extractPoints(c);let b=z.shape;const M=z.holes;if(!Zo.isClockWise(b)){b=b.reverse();for(let ie=0,_=M.length;ie<_;ie++){const P=M[ie];Zo.isClockWise(P)&&(M[ie]=P.reverse())}}const N=Zo.triangulateShape(b,M),W=b;for(let ie=0,_=M.length;ie<_;ie++){const P=M[ie];b=b.concat(P)}function ne(ie,_,P){return _||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(_,P)}const X=b.length,te=N.length;function j(ie,_,P){let O,H,k;const K=ie.x-_.x,Z=ie.y-_.y,C=P.x-ie.x,x=P.y-ie.y,R=K*K+Z*Z,F=K*x-Z*C;if(Math.abs(F)>Number.EPSILON){const B=Math.sqrt(R),G=Math.sqrt(C*C+x*x),ae=_.x-Z/B,se=_.y+K/B,fe=P.x-x/G,Oe=P.y+C/G,de=((fe-ae)*x-(Oe-se)*C)/(K*x-Z*C);O=ae+K*de-ie.x,H=se+Z*de-ie.y;const _e=O*O+H*H;if(_e<=2)return new Se(O,H);k=Math.sqrt(_e/2)}else{let B=!1;K>Number.EPSILON?C>Number.EPSILON&&(B=!0):K<-Number.EPSILON?C<-Number.EPSILON&&(B=!0):Math.sign(Z)===Math.sign(x)&&(B=!0),B?(O=-Z,H=K,k=Math.sqrt(R)):(O=K,H=Z,k=Math.sqrt(R/2))}return new Se(O/k,H/k)}const pe=[];for(let ie=0,_=W.length,P=_-1,O=ie+1;ie<_;ie++,P++,O++)P===_&&(P=0),O===_&&(O=0),pe[ie]=j(W[ie],W[P],W[O]);const xe=[];let be,ke=pe.concat();for(let ie=0,_=M.length;ie<_;ie++){const P=M[ie];be=[];for(let O=0,H=P.length,k=H-1,K=O+1;O<H;O++,k++,K++)k===H&&(k=0),K===H&&(K=0),be[O]=j(P[O],P[k],P[K]);xe.push(be),ke=ke.concat(be)}for(let ie=0;ie<g;ie++){const _=ie/g,P=f*Math.cos(_*Math.PI/2),O=m*Math.sin(_*Math.PI/2)+v;for(let H=0,k=W.length;H<k;H++){const K=ne(W[H],pe[H],O);V(K.x,K.y,-P)}for(let H=0,k=M.length;H<k;H++){const K=M[H];be=xe[H];for(let Z=0,C=K.length;Z<C;Z++){const x=ne(K[Z],be[Z],O);V(x.x,x.y,-P)}}}const Ce=m+v;for(let ie=0;ie<X;ie++){const _=d?ne(b[ie],ke[ie],Ce):b[ie];w?(T.copy(L.normals[0]).multiplyScalar(_.x),E.copy(L.binormals[0]).multiplyScalar(_.y),D.copy(y[0]).add(T).add(E),V(D.x,D.y,D.z)):V(_.x,_.y,0)}for(let ie=1;ie<=u;ie++)for(let _=0;_<X;_++){const P=d?ne(b[_],ke[_],Ce):b[_];w?(T.copy(L.normals[ie]).multiplyScalar(P.x),E.copy(L.binormals[ie]).multiplyScalar(P.y),D.copy(y[ie]).add(T).add(E),V(D.x,D.y,D.z)):V(P.x,P.y,h/u*ie)}for(let ie=g-1;ie>=0;ie--){const _=ie/g,P=f*Math.cos(_*Math.PI/2),O=m*Math.sin(_*Math.PI/2)+v;for(let H=0,k=W.length;H<k;H++){const K=ne(W[H],pe[H],O);V(K.x,K.y,h+P)}for(let H=0,k=M.length;H<k;H++){const K=M[H];be=xe[H];for(let Z=0,C=K.length;Z<C;Z++){const x=ne(K[Z],be[Z],O);w?V(x.x,x.y+y[u-1].y,y[u-1].x+P):V(x.x,x.y,h+P)}}}J(),ce();function J(){const ie=r.length/3;if(d){let _=0,P=X*_;for(let O=0;O<te;O++){const H=N[O];le(H[2]+P,H[1]+P,H[0]+P)}_=u+g*2,P=X*_;for(let O=0;O<te;O++){const H=N[O];le(H[0]+P,H[1]+P,H[2]+P)}}else{for(let _=0;_<te;_++){const P=N[_];le(P[2],P[1],P[0])}for(let _=0;_<te;_++){const P=N[_];le(P[0]+X*u,P[1]+X*u,P[2]+X*u)}}i.addGroup(ie,r.length/3-ie,0)}function ce(){const ie=r.length/3;let _=0;ge(W,_),_+=W.length;for(let P=0,O=M.length;P<O;P++){const H=M[P];ge(H,_),_+=H.length}i.addGroup(ie,r.length/3-ie,1)}function ge(ie,_){let P=ie.length;for(;--P>=0;){const O=P;let H=P-1;H<0&&(H=ie.length-1);for(let k=0,K=u+g*2;k<K;k++){const Z=X*k,C=X*(k+1),x=_+O+Z,R=_+H+Z,F=_+H+C,B=_+O+C;oe(x,R,F,B)}}}function V(ie,_,P){l.push(ie),l.push(_),l.push(P)}function le(ie,_,P){ue(ie),ue(_),ue(P);const O=r.length/3,H=S.generateTopUV(i,r,O-3,O-2,O-1);we(H[0]),we(H[1]),we(H[2])}function oe(ie,_,P,O){ue(ie),ue(_),ue(O),ue(_),ue(P),ue(O);const H=r.length/3,k=S.generateSideWallUV(i,r,H-6,H-3,H-2,H-1);we(k[0]),we(k[1]),we(k[3]),we(k[1]),we(k[2]),we(k[3])}function ue(ie){r.push(l[ie*3+0]),r.push(l[ie*3+1]),r.push(l[ie*3+2])}function we(ie){o.push(ie.x),o.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return dk(n,i,e)}static fromJSON(e,n){const i=[];for(let o=0,s=e.shapes.length;o<s;o++){const a=n[e.shapes[o]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new _f[r.type]().fromJSON(r)),new Ru(i,e.options)}}const hk={generateTopUV:function(t,e,n,i,r){const o=e[n*3],s=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Se(o,s),new Se(a,l),new Se(c,u)]},generateSideWallUV:function(t,e,n,i,r,o){const s=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],f=e[r*3+1],m=e[r*3+2],v=e[o*3],g=e[o*3+1],p=e[o*3+2];return Math.abs(a-u)<Math.abs(s-c)?[new Se(s,1-l),new Se(c,1-h),new Se(d,1-m),new Se(v,1-p)]:[new Se(a,1-l),new Se(u,1-h),new Se(f,1-m),new Se(g,1-p)]}};function dk(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const o=t[i];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}const nv={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class fk{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const pk=new fk;class Lp{constructor(e){this.manager=e!==void 0?e:pk,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Lp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ai={};class mk extends Error{constructor(e,n){super(e),this.response=n}}class gk extends Lp{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=nv.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(o),this.manager.itemEnd(e)},0),o;if(Ai[e]!==void 0){Ai[e].push({onLoad:n,onProgress:i,onError:r});return}Ai[e]=[],Ai[e].push({onLoad:n,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ai[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let v=0;const g=new ReadableStream({start(p){S();function S(){h.read().then(({done:y,value:w})=>{if(y)p.close();else{v+=w.byteLength;const L=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let E=0,T=u.length;E<T;E++){const D=u[E];D.onProgress&&D.onProgress(L)}p.enqueue(w),S()}},y=>{p.error(y)})}}});return new Response(g)}else throw new mk(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{nv.add(e,c);const u=Ai[e];delete Ai[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Ai[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ai[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class iv{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(jt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vk{constructor(){this.type="ShapePath",this.color=new it,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new bf,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,r){return this.currentPath.quadraticCurveTo(e,n,i,r),this}bezierCurveTo(e,n,i,r,o,s){return this.currentPath.bezierCurveTo(e,n,i,r,o,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(p){const S=[];for(let y=0,w=p.length;y<w;y++){const L=p[y],E=new pa;E.curves=L.curves,S.push(E)}return S}function i(p,S){const y=S.length;let w=!1;for(let L=y-1,E=0;E<y;L=E++){let T=S[L],D=S[E],z=D.x-T.x,b=D.y-T.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(T=S[E],z=-z,D=S[L],b=-b),p.y<T.y||p.y>D.y)continue;if(p.y===T.y){if(p.x===T.x)return!0}else{const M=b*(p.x-T.x)-z*(p.y-T.y);if(M===0)return!0;if(M<0)continue;w=!w}}else{if(p.y!==T.y)continue;if(D.x<=p.x&&p.x<=T.x||T.x<=p.x&&p.x<=D.x)return!0}}return w}const r=Zo.isClockWise,o=this.subPaths;if(o.length===0)return[];let s,a,l;const c=[];if(o.length===1)return a=o[0],l=new pa,l.curves=a.curves,c.push(l),c;let u=!r(o[0].getPoints());u=e?!u:u;const h=[],d=[];let f=[],m=0,v;d[m]=void 0,f[m]=[];for(let p=0,S=o.length;p<S;p++)a=o[p],v=a.getPoints(),s=r(v),s=e?!s:s,s?(!u&&d[m]&&m++,d[m]={s:new pa,p:v},d[m].s.curves=a.curves,u&&m++,f[m]=[]):f[m].push({h:a,p:v[0]});if(!d[0])return n(o);if(d.length>1){let p=!1,S=0;for(let y=0,w=d.length;y<w;y++)h[y]=[];for(let y=0,w=d.length;y<w;y++){const L=f[y];for(let E=0;E<L.length;E++){const T=L[E];let D=!0;for(let z=0;z<d.length;z++)i(T.p,d[z].p)&&(y!==z&&S++,D?(D=!1,h[z].push(T)):p=!0);D&&h[y].push(T)}}S>0&&p===!1&&(f=h)}let g;for(let p=0,S=d.length;p<S;p++){l=d[p].s,c.push(l),g=f[p];for(let y=0,w=g.length;y<w;y++)l.holes.push(g[y].h)}return c}}class xk extends uo{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_p}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_p);const Kt=6;var ht,es,ts,Ba,Ha,ka,ns,cr,gt,Va,$a,is,Vr,so,$y,Mf;class Cf extends Pn{constructor(){super(...arguments);hn(this,so);Ut(this,"isMeshLineGeometry",!0);Ut(this,"type","MeshLineGeometry");hn(this,ht,new Float32Array);hn(this,es,new Float32Array);hn(this,ts,new Float32Array);hn(this,Ba,new Float32Array);hn(this,Ha,new Float32Array);hn(this,ka,new Float32Array);hn(this,ns,new Uint16Array);hn(this,cr,new Float32Array);Ut(this,"widthCallback",null);hn(this,gt,null);hn(this,Va,[]);hn(this,$a,null);hn(this,is,0);hn(this,Vr,0)}get points(){return Ie(this,Va)}set points(n){this.setPoints(n,this.widthCallback)}setPoints(n,i=null,r=!0){if(Yt(this,Va,n),Yt(this,$a,this.widthCallback),this.widthCallback=i,!("length"in n))throw new Error("not a Vector3 Array, or not a number Array or Float32Array with 3 numbers per point");if(!n.length){this.dispose(),Yt(this,Vr,0),Yt(this,is,0);return}const o=_k(n);if(o)Yt(this,Vr,n.length);else{if(n.length%3!==0)throw new Error("The array should consist of number triplets, 3 number per point.");Yt(this,Vr,n.length/3)}const s=Ie(this,Vr),a=Ie(this,is)!==s,l=Ie(this,$a)!==this.widthCallback;(!Ie(this,gt)||a)&&fl(this,so,$y).call(this,s),Yt(this,is,s);let c,u=0,h=0,d=0,f=0,m=0,v=0,g=0,p=0,S=0,y=0,w=0;if(o)for(let E=0;E<n.length;E++){const T=n[E];if(!T)throw new Error("point missing");({x:u,y:h,z:d}=T),Po(Ie(this,ht),f,u,h,d),f+=Kt;const D=E/n.length;Ie(this,cr)[m+0]=D,Ie(this,cr)[m+1]=D,m+=2}else for(let E=0;E<n.length;E+=3){const T=n[E+0],D=n[E+1],z=n[E+2];if(T==null||D==null||z==null)throw new Error("point missing");Po(Ie(this,ht),f,T,D,z),f+=Kt;const b=E/n.length;Ie(this,cr)[m+0]=b,Ie(this,cr)[m+1]=b,m+=2}let L=0;if(fl(this,so,Mf).call(this,0,s-1)?(L=(s-2)*Kt,u=Ie(this,ht)[L+0],h=Ie(this,ht)[L+1],d=Ie(this,ht)[L+2]):(L=0,u=Ie(this,ht)[L+0],h=Ie(this,ht)[L+1],d=Ie(this,ht)[L+2]),u==null||h==null||d==null)throw new Error("point missing");Po(Ie(this,es),v,u,h,d),v+=6;for(let E=0;E<s;E++){if(a&&(rv(Ie(this,Ba),p,1,-1),p+=2),(l||a)&&(this.widthCallback?c=this.widthCallback(E/(s-1)):c=1,rv(Ie(this,Ha),S,c,c),S+=2),a&&(bk(Ie(this,ka),w,E/(s-1),0,E/(s-1),1),w+=4),E<s-1){if(L=E*Kt,u=Ie(this,ht)[L+0],h=Ie(this,ht)[L+1],d=Ie(this,ht)[L+2],u==null||h==null||d==null)throw new Error("point missing");if(Po(Ie(this,es),v,u,h,d),v+=6,a){const T=E*2;ov(Ie(this,ns),y,T+0,T+1,T+2),ov(Ie(this,ns),y+3,T+2,T+1,T+3),y+=6}}if(E>0){if(L=E*Kt,u=Ie(this,ht)[L+0],h=Ie(this,ht)[L+1],d=Ie(this,ht)[L+2],u==null||h==null||d==null)throw new Error("point missing");Po(Ie(this,ts),g,u,h,d),g+=6}}if(fl(this,so,Mf).call(this,s-1,0)?(L=1*Kt,u=Ie(this,ht)[L+0],h=Ie(this,ht)[L+1],d=Ie(this,ht)[L+2]):(L=(s-1)*Kt,u=Ie(this,ht)[L+0],h=Ie(this,ht)[L+1],d=Ie(this,ht)[L+2]),u==null||h==null||d==null)throw new Error("point missing");if(Po(Ie(this,ts),g,u,h,d),!Ie(this,gt))throw new Error("missing attributes");Ie(this,gt).position.needsUpdate=!0,Ie(this,gt).previous.needsUpdate=!0,Ie(this,gt).next.needsUpdate=!0,Ie(this,gt).side.needsUpdate=a,Ie(this,gt).width.needsUpdate=a,Ie(this,gt).uv.needsUpdate=a,Ie(this,gt).index.needsUpdate=a,r&&(this.computeBoundingSphere(),this.computeBoundingBox())}advance(n){if(!Ie(this,gt))throw new Error("Call setPoints first.");const i=Ie(this,gt).position.array,r=Ie(this,gt).previous.array,o=Ie(this,gt).next.array,s=i.length;Gh(i,0,r,0,s),Gh(i,Kt,i,0,s-Kt),i[s-6]=n.x,i[s-5]=n.y,i[s-4]=n.z,i[s-3]=n.x,i[s-2]=n.y,i[s-1]=n.z,Gh(i,Kt,o,0,s-Kt),o[s-6]=n.x,o[s-5]=n.y,o[s-4]=n.z,o[s-3]=n.x,o[s-2]=n.y,o[s-1]=n.z,Ie(this,gt).position.needsUpdate=!0,Ie(this,gt).previous.needsUpdate=!0,Ie(this,gt).next.needsUpdate=!0}}ht=new WeakMap,es=new WeakMap,ts=new WeakMap,Ba=new WeakMap,Ha=new WeakMap,ka=new WeakMap,ns=new WeakMap,cr=new WeakMap,gt=new WeakMap,Va=new WeakMap,$a=new WeakMap,is=new WeakMap,Vr=new WeakMap,so=new WeakSet,$y=function(n){this.dispose(),Yt(this,gt,{position:new Ot(Yt(this,ht,new Float32Array(n*Kt)),3),previous:new Ot(Yt(this,es,new Float32Array(n*Kt)),3),next:new Ot(Yt(this,ts,new Float32Array(n*Kt)),3),side:new Ot(Yt(this,Ba,new Float32Array(n*2)),1),width:new Ot(Yt(this,Ha,new Float32Array(n*2)),1),uv:new Ot(Yt(this,ka,new Float32Array(n*4)),2),counters:new Ot(Yt(this,cr,new Float32Array(n*2)),1),index:new Ot(Yt(this,ns,new Uint16Array((n-1)*Kt)),1)}),this.setAttribute("position",Ie(this,gt).position),this.setAttribute("previous",Ie(this,gt).previous),this.setAttribute("next",Ie(this,gt).next),this.setAttribute("side",Ie(this,gt).side),this.setAttribute("width",Ie(this,gt).width),this.setAttribute("uv",Ie(this,gt).uv),this.setAttribute("counters",Ie(this,gt).counters),this.setIndex(Ie(this,gt).index)},Mf=function(n,i){const r=n*Kt,o=i*Kt;return Ie(this,ht)[r+0]===Ie(this,ht)[o+0]&&Ie(this,ht)[r+1]===Ie(this,ht)[o+1]&&Ie(this,ht)[r+2]===Ie(this,ht)[o+2]};function _k(t){return!!(t.length&&t[0]instanceof U)}function Gh(t,e,n,i,r){if(i+r>n.length)throw new Error("Not enough space to copy from src to dst.");for(let o=0,s=e+r;o+e<s;o++){const a=t[o+e];if(a==null)throw new Error("missing src value");n[o+i]=a}}function rv(t,e,n,i){t[e+0]=n,t[e+1]=i}function ov(t,e,n,i,r){t[e+0]=n,t[e+1]=i,t[e+2]=r}function Po(t,e,n,i,r){t[e+0]=n,t[e+1]=i,t[e+2]=r,t[e+3]=n,t[e+4]=i,t[e+5]=r}function bk(t,e,n,i,r,o){t[e+0]=n,t[e+1]=i,t[e+2]=r,t[e+3]=o}je.meshline_vert=`
	${je.logdepthbuf_pars_vertex}
	${je.fog_pars_vertex}
	
	attribute vec3 previous;
	attribute vec3 next;
	attribute float side;
	attribute float width;
	attribute float counters;
	
	uniform vec2 resolution;
	uniform float lineWidth;
	uniform vec3 color;
	uniform float opacity;
	uniform float sizeAttenuation;
	
	varying vec2 vUV;
	varying vec4 vColor;
	varying float vCounters;
	
	vec2 fix( vec4 i, float aspect ) {
	
	    vec2 res = i.xy / i.w;
	    res.x *= aspect;
		 vCounters = counters;
	    return res;
        
	}
	
	void main() {
	
	    float aspect = resolution.x / resolution.y;
	
	    vColor = vec4( color, opacity );
	    vUV = uv;
	
	    mat4 m = projectionMatrix * modelViewMatrix;
	    vec4 finalPosition = m * vec4( position, 1.0 );
	    vec4 prevPos = m * vec4( previous, 1.0 );
	    vec4 nextPos = m * vec4( next, 1.0 );
	
	    vec2 currentP = fix( finalPosition, aspect );
	    vec2 prevP = fix( prevPos, aspect );
	    vec2 nextP = fix( nextPos, aspect );
	
	    float w = lineWidth * width;
	
	    vec2 dir;
	    if( nextP == currentP ) dir = normalize( currentP - prevP );
	    else if( prevP == currentP ) dir = normalize( nextP - currentP );
	    else {
	        vec2 dir1 = normalize( currentP - prevP );
	        vec2 dir2 = normalize( nextP - currentP );
	        dir = normalize( dir1 + dir2 );
	
	        vec2 perp = vec2( -dir1.y, dir1.x );
	        vec2 miter = vec2( -dir.y, dir.x );
	        //w = clamp( w / dot( miter, perp ), 0., 4. * lineWidth * width );
	
	    }
	
	    //vec2 normal = ( cross( vec3( dir, 0. ), vec3( 0., 0., 1. ) ) ).xy;
	    vec4 normal = vec4( -dir.y, dir.x, 0., 1. );
	    normal.xy *= .5 * w;
	    normal *= projectionMatrix;
	    if( sizeAttenuation == 0. ) {
	        normal.xy *= finalPosition.w;
	        normal.xy /= ( vec4( resolution, 0., 1. ) * projectionMatrix ).xy;
	    }
	
	    finalPosition.xy += normal.xy * side;
	
	    gl_Position = finalPosition;
	
        ${je.logdepthbuf_vertex}
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
        ${je.fog_vertex}
	}
`;je.meshline_frag=`
	${je.fog_pars_fragment}
	${je.logdepthbuf_pars_fragment}
	
	uniform sampler2D map;
	uniform sampler2D alphaMap;
	uniform float useMap;
	uniform float useAlphaMap;
	uniform float useDash;
	uniform float dashArray;
	uniform float dashOffset;
	uniform float dashRatio;
	uniform float visibility;
	uniform float alphaTest;
	uniform vec2 repeat;

	varying vec2 vUV;
	varying vec4 vColor;
	varying float vCounters;
	
	void main() {
        ${je.logdepthbuf_fragment}

	    vec4 c = vColor;
	    if( useMap == 1. ) c *= texture2D( map, vUV * repeat );
	    if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV * repeat ).a;
	    if( c.a < alphaTest ) discard;
	    if( useDash == 1. ){
	        c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
	    }
	    gl_FragColor = c;
	    gl_FragColor.a *= step(vCounters, visibility);
	
        ${je.fog_fragment}
	}
`;class wf extends $i{constructor(n){super({uniforms:Object.assign({},Me.fog,{lineWidth:{value:1},map:{value:null},useMap:{value:!1},alphaMap:{value:null},useAlphaMap:{value:!1},color:{value:new it(16777215)},opacity:{value:1},resolution:{value:new Se(1,1)},sizeAttenuation:{value:!0},dashArray:{value:0},dashOffset:{value:0},dashRatio:{value:.5},useDash:{value:!1},visibility:{value:1},alphaTest:{value:0},repeat:{value:new Se(1,1)}}),vertexShader:je.meshline_vert,fragmentShader:je.meshline_frag});Ut(this,"isMeshLineMaterial",!0);Ut(this,"type","MeshLineMaterial");Object.defineProperties(this,{fogColor:{enumerable:!0,get:()=>this.uniforms.fogColor.value,set:i=>{this.uniforms.fogColor.value=i}},fogDensity:{enumerable:!0,get:()=>this.uniforms.fogDensity.value,set:i=>{this.uniforms.fogDensity.value=i}},fogNear:{enumerable:!0,get:()=>this.uniforms.fogNear.value,set:i=>{this.uniforms.fogNear.value=i}},fogFar:{enumerable:!0,get:()=>this.uniforms.fogFar.value,set:i=>{this.uniforms.fogFar.value=i}},lineWidth:{enumerable:!0,get:()=>this.uniforms.lineWidth.value,set:i=>{this.uniforms.lineWidth.value=i}},map:{enumerable:!0,get:()=>this.uniforms.map.value,set:i=>{this.uniforms.map.value=i}},useMap:{enumerable:!0,get:()=>this.uniforms.useMap.value,set:i=>{this.uniforms.useMap.value=i}},alphaMap:{enumerable:!0,get:()=>this.uniforms.alphaMap.value,set:i=>{this.uniforms.alphaMap.value=i}},useAlphaMap:{enumerable:!0,get:()=>this.uniforms.useAlphaMap.value,set:i=>{this.uniforms.useAlphaMap.value=i}},color:{enumerable:!0,get:()=>this.uniforms.color.value,set:i=>{this.uniforms.color.value=i}},opacity:{enumerable:!0,get:()=>this.uniforms.opacity.value,set:i=>{this.uniforms.opacity.value=i}},resolution:{enumerable:!0,get:()=>this.uniforms.resolution.value,set:i=>{this.uniforms.resolution.value.copy(i)}},sizeAttenuation:{enumerable:!0,get:()=>this.uniforms.sizeAttenuation.value,set:i=>{this.uniforms.sizeAttenuation.value=i}},dashArray:{enumerable:!0,get:()=>this.uniforms.dashArray.value,set:i=>{this.uniforms.dashArray.value=i,this.useDash=i!==0}},dashOffset:{enumerable:!0,get:()=>this.uniforms.dashOffset.value,set:i=>{this.uniforms.dashOffset.value=i}},dashRatio:{enumerable:!0,get:()=>this.uniforms.dashRatio.value,set:i=>{this.uniforms.dashRatio.value=i}},useDash:{enumerable:!0,get:()=>this.uniforms.useDash.value,set:i=>{this.uniforms.useDash.value=i}},visibility:{enumerable:!0,get:()=>this.uniforms.visibility.value,set:i=>{this.uniforms.visibility.value=i}},alphaTest:{enumerable:!0,get:()=>this.uniforms.alphaTest.value,set:i=>{this.uniforms.alphaTest.value=i}},repeat:{enumerable:!0,get:()=>this.uniforms.repeat.value,set:i=>{this.uniforms.repeat.value.copy(i)}}}),this.setValues(n)}copy(n){return super.copy(this),this.fogColor=n.fogColor,this.fogDensity=n.fogDensity,this.fogNear=n.fogNear,this.fogFar=n.fogFar,this.lineWidth=n.lineWidth,this.map=n.map,this.useMap=n.useMap,this.alphaMap=n.alphaMap,this.useAlphaMap=n.useAlphaMap,this.color.copy(n.color),this.opacity=n.opacity,this.resolution.copy(n.resolution),this.sizeAttenuation=n.sizeAttenuation,this.dashArray=n.dashArray,this.dashOffset=n.dashOffset,this.dashRatio=n.dashRatio,this.useDash=n.useDash,this.visibility=n.visibility,this.alphaTest=n.alphaTest,this.repeat.copy(n.repeat),this}}class Gy extends xn{constructor(){super(...arguments);Ut(this,"isMeshLine",!0);Ut(this,"type","MeshLine")}raycast(n,i){const r=new Et,o=new sl,s=new Ts,a=new U,l=this.geometry;if(l.boundingSphere||l.computeBoundingSphere(),s.copy(l.boundingSphere),s.applyMatrix4(this.matrixWorld),!n.ray.intersectSphere(s,a))return;r.copy(this.matrixWorld).invert(),o.copy(n.ray).applyMatrix4(r);const c=new U,u=new U,h=new U,d=this instanceof tu?2:1,f=l.index,m=l.attributes;if(f!==null){const v=f.array,g=m.position.array,p=m.width.array;for(let S=0,y=v.length-1;S<y;S+=d){const w=v[S],L=v[S+1];if(w==null||L==null)throw new Error("missing index");c.fromArray(g,w*3),u.fromArray(g,L*3);const E=p[Math.floor(S/3)]!==void 0?p[Math.floor(S/3)]:1;if(E==null)throw new Error("missing width");n.params.Line=n.params.Line??{threshold:1};const T=n.params.Line.threshold+this.material.lineWidth*E/2,D=T*T;if(o.distanceSqToSegment(c,u,a,h)>D)continue;a.applyMatrix4(this.matrixWorld);const b=n.ray.origin.distanceTo(a);b<n.near||b>n.far||(i.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:void 0,object:this}),S=y)}}}}class yk extends Ru{constructor(e,n={}){const i=n.font;if(i===void 0)super();else{const r=i.generateShapes(e,n.size);n.depth===void 0&&n.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),n.depth=n.depth!==void 0?n.depth:n.height!==void 0?n.height:50,n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(r,n)}this.type="TextGeometry"}}class Sk extends Lp{constructor(e){super(e)}load(e,n,i,r){const o=this,s=new gk(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(a){const l=o.parse(JSON.parse(a));n&&n(l)},i,r)}parse(e){return new Ck(e)}}class Ck{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,n=100){const i=[],r=Mk(e,n,this.data);for(let o=0,s=r.length;o<s;o++)i.push(...r[o].toShapes());return i}}function Mk(t,e,n){const i=Array.from(t),r=e/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,s=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=o;else{const h=wk(u,r,a,l,n);a+=h.offsetX,s.push(h.path)}}return s}function wk(t,e,n,i,r){const o=r.glyphs[t]||r.glyphs["?"];if(!o){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}const s=new vk;let a,l,c,u,h,d,f,m;if(o.o){const v=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let g=0,p=v.length;g<p;)switch(v[g++]){case"m":a=v[g++]*e+n,l=v[g++]*e+i,s.moveTo(a,l);break;case"l":a=v[g++]*e+n,l=v[g++]*e+i,s.lineTo(a,l);break;case"q":c=v[g++]*e+n,u=v[g++]*e+i,h=v[g++]*e+n,d=v[g++]*e+i,s.quadraticCurveTo(h,d,c,u);break;case"b":c=v[g++]*e+n,u=v[g++]*e+i,h=v[g++]*e+n,d=v[g++]*e+i,f=v[g++]*e+n,m=v[g++]*e+i,s.bezierCurveTo(h,d,f,m,c,u);break}}return{offsetX:o.ha*e,path:s}}function Ef(t=1,e=1,n=1,i=1,r=[0,0],o=["x",0]){const s=new Se(t/n,e/i),a=s.clone().multiplyScalar(.5),l=o[0]==="x"?new U(1,0,0):new U(0,1,0),c=o[1],u=[];for(let h=0;h<=i;h++)u.push(new U(0,h*s.y,0).applyAxisAngle(l,c),new U(t+a.x*r[0],h*s.y,0).applyAxisAngle(l,c));for(let h=0;h<=n;h++)u.push(new U(h*s.x,0,0).applyAxisAngle(l,c),new U(h*s.x,e+a.y*r[1],0).applyAxisAngle(l,c));return new Pn().setFromPoints(u)}function Wy(t,e,n=.01,i="#0000ff"){const s=new wf({color:i,lineWidth:n}),a=[],l=new Cf,c=.01/10;for(let u=0;u<=1;u+=c){const h=Math.sin(u*2*Math.PI)*1,d=u*t.x,f=(h*.5+.5)*e.y;a.push(new U(d,f,0))}return l.setPoints(a),new Gy(l,s)}function nu(t,e,n){const i=new pa;switch(t){case"up":i.moveTo(0,e),i.lineTo(-e/2,-e/2),i.lineTo(e/2,-e/2),i.lineTo(0,e);break;case"down":i.moveTo(0,-e),i.lineTo(-e/2,e/2),i.lineTo(e/2,e/2),i.lineTo(0,-e);break;case"left":i.moveTo(-e,0),i.lineTo(e/2,-e/2),i.lineTo(e/2,e/2),i.lineTo(-e,0);break;case"right":i.moveTo(e,0),i.lineTo(-e/2,-e/2),i.lineTo(-e/2,e/2),i.lineTo(e,0);break;case"front":i.moveTo(0,e/2),i.lineTo(-e/2,-e/2),i.lineTo(e/2,-e/2),i.lineTo(0,e/2);break;case"back":i.moveTo(0,-e/2),i.lineTo(-e/2,e/2),i.lineTo(e/2,e/2),i.lineTo(0,-e/2);break;default:console.error("Invalid direction. Choices are 'up', 'down', 'left', 'right'.");return}const r=new Ru(i,{steps:1,depth:.1,bevelEnabled:!1}),o=new Ps({color:n}),s=new xn(r,o);switch(t){case"front":s.rotation.x=Math.PI/2;break;case"back":s.rotation.x=Math.PI/2;break}return s}function Ek(t,e="black",n=1.2){return new Promise(i=>{new Sk().load("/font/han_serif_light.json",o=>{const s=new yk(t,{font:o,bevelEnabled:!0,depth:.1,bevelSegments:5,curveSegments:12,bevelThickness:10,bevelSize:8,bevelOffset:0});s.computeBoundingBox();const a=s.boundingBox.max.x-s.boundingBox.min.x,l=new Ps({color:e}),c=new xn(s,l);c.position.set(-a/2,0,0),c.scale.set(n/2e3,n/2e3,n/2e3),i(c)})})}const Tk={labelColor:"black",labelMax:10,labelMin:0,labelStep:1,lineColor:"black",lineWidth:1,showLabel:!0,showTick:!0,vector:"x",maxXVector:new U(10,0,0),maxYVector:new U(0,10,0),tickLineWidth:.005,tickLineColor:"grey"};function ma(t,e){const n={...Tk,...e},i=new Ui,r=new Ui;r.name="axisLabel";const o=new Ui;if(o.name="axisTick",n.showLabel)for(let c=n.labelMin;c<=n.labelMax;c+=n.labelStep){const u=(c-n.labelMin)/(n.labelMax-n.labelMin),h=new U().lerpVectors(t[0],t[1],u);if(n.showTick){const d=n;if(!(d.vector==="y"&&h.y===0||d.vector==="x"&&h.x===0)){const f=new Cf;f.setPoints(d.vector==="x"?[h,new U(h.x,d.maxYVector.y)]:[new U(0,h.y),new U(d.maxXVector.x,h.y)]);const m=new wf({color:new it(d.tickLineColor),lineWidth:d.tickLineWidth}),v=new Gy(f,m);o.add(v)}}Ek(c.toString(),n.labelColor,n.labelFontSize).then(d=>{d.position.copy(h),r.add(d)})}const s=new Cf;s.setPoints(t);const a=new wf({color:new it(n.lineColor),lineWidth:n.lineWidth,sizeAttenuation:!0}),l=new xn(s,a);return i.add(l),i.add(o),i.add(r),i}const Jo=new Map([["xs",[200,250]],["sm",[390,250]],["md",[270,300]],["lg",[300,250]],["xl",[350,300]],["xxl",[450,400]]]);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class mi{constructor(e,n,i,r,o="div"){this.parent=e,this.object=n,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(o),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),mi.nextNameID=mi.nextNameID||0,this.$name.id=`lil-gui-name-${++mi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",s=>s.stopPropagation()),this.domElement.addEventListener("keyup",s=>s.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const n=this.parent.add(this.object,this.property,e);return n.name(this._name),this.destroy(),n}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ak extends mi{constructor(e,n,i){super(e,n,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Tf(t){let e,n;return(e=t.match(/(#|0x)?([a-f0-9]{6})/i))?n=e[2]:(e=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),n?"#"+n:!1}const Pk={isPrimitive:!0,match:t=>typeof t=="string",fromHexString:Tf,toHexString:Tf},za={isPrimitive:!0,match:t=>typeof t=="number",fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},Rk={isPrimitive:!1,match:t=>Array.isArray(t),fromHexString(t,e,n=1){const i=za.fromHexString(t);e[0]=(i>>16&255)/255*n,e[1]=(i>>8&255)/255*n,e[2]=(i&255)/255*n},toHexString([t,e,n],i=1){i=255/i;const r=t*i<<16^e*i<<8^n*i<<0;return za.toHexString(r)}},Lk={isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,e,n=1){const i=za.fromHexString(t);e.r=(i>>16&255)/255*n,e.g=(i>>8&255)/255*n,e.b=(i&255)/255*n},toHexString({r:t,g:e,b:n},i=1){i=255/i;const r=t*i<<16^e*i<<8^n*i<<0;return za.toHexString(r)}},Dk=[Pk,za,Rk,Lk];function Ik(t){return Dk.find(e=>e.match(t))}class Ok extends mi{constructor(e,n,i,r){super(e,n,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Ik(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Tf(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const n=this._format.fromHexString(e);this.setValue(n)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Wh extends mi{constructor(e,n,i){super(e,n,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Nk extends mi{constructor(e,n,i,r,o,s){super(e,n,i,"number"),this._initInput(),this.min(r),this.max(o);const a=s!==void 0;this.step(a?s:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,n=!0){return this._step=e,this._stepExplicit=n,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let n=(e-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=n*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const n=()=>{let S=parseFloat(this.$input.value);isNaN(S)||(this._stepExplicit&&(S=this._snap(S)),this.setValue(this._clamp(S)))},i=S=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+S),this.$input.value=this.getValue())},r=S=>{S.key==="Enter"&&this.$input.blur(),S.code==="ArrowUp"&&(S.preventDefault(),i(this._step*this._arrowKeyMultiplier(S))),S.code==="ArrowDown"&&(S.preventDefault(),i(this._step*this._arrowKeyMultiplier(S)*-1))},o=S=>{this._inputFocused&&(S.preventDefault(),i(this._step*this._normalizeMouseWheel(S)))};let s=!1,a,l,c,u,h;const d=5,f=S=>{a=S.clientX,l=c=S.clientY,s=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",v)},m=S=>{if(s){const y=S.clientX-a,w=S.clientY-l;Math.abs(w)>d?(S.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>d&&v()}if(!s){const y=S.clientY-c;h-=y*this._step*this._arrowKeyMultiplier(S),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=S.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",v)},g=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",n),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",o,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,S,y,w,L)=>(p-S)/(y-S)*(L-w)+w,n=p=>{const S=this.$slider.getBoundingClientRect();let y=e(p,S.left,S.right,this._min,this._max);this._snapClampSetValue(y)},i=p=>{this._setDraggingStyle(!0),n(p.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",o)},r=p=>{n(p.clientX)},o=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",o)};let s=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),n(p.touches[0].clientX),s=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,s=!0):c(p),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=p=>{if(s){const S=p.touches[0].clientX-a,y=p.touches[0].clientY-l;Math.abs(S)>Math.abs(y)?c(p):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else p.preventDefault(),n(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),m=400;let v;const g=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const y=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(f,m)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,n="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${n}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:n,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(n=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),n+-i}_arrowKeyMultiplier(e){let n=this._stepExplicit?1:10;return e.shiftKey?n*=10:e.altKey&&(n/=10),n}_snap(e){const n=Math.round(e/this._step)*this._step;return parseFloat(n.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Fk extends mi{constructor(e,n,i,r){super(e,n,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(n=>{const i=document.createElement("option");i.textContent=n,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),n=this._values.indexOf(e);return this.$select.selectedIndex=n,this.$display.textContent=n===-1?e:this._names[n],this}}class Uk extends mi{constructor(e,n,i){super(e,n,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const zk=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Bk(t){const e=document.createElement("style");e.innerHTML=t;const n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(e,n):document.head.appendChild(e)}let sv=!1;class Dp{constructor({parent:e,autoPlace:n=e===void 0,container:i,width:r,title:o="Controls",closeFolders:s=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(o),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!sv&&a&&(Bk(zk),sv=!0),i?i.appendChild(this.domElement):n&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=s}add(e,n,i,r,o){if(Object(i)===i)return new Fk(this,e,n,i);const s=e[n];switch(typeof s){case"number":return new Nk(this,e,n,i,r,o);case"boolean":return new Ak(this,e,n);case"string":return new Uk(this,e,n);case"function":return new Wh(this,e,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,e,`
	value:`,s)}addColor(e,n,i=1){return new Ok(this,e,n,i)}addFolder(e){const n=new Dp({parent:this,title:e});return this.root._closeFolders&&n.close(),n}load(e,n=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Wh||i._name in e.controllers&&i.load(e.controllers[i._name])}),n&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const n={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Wh)){if(i._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);n.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);n.folders[i._title]=i.save()}),n}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("transition");const i=o=>{o.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(n=>{e=e.concat(n.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(n=>{e=e.concat(n.foldersRecursive())}),e}}const av={type:"change"},Ip={type:"start"},Xy={type:"end"},oc=new sl,lv=new ar,Hk=Math.cos(70*xF.DEG2RAD),Ht=new U,yn=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xh=1e-6;class kk extends xk{constructor(e,n=null){super(e,n),this.state=vt.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jo.ROTATE,MIDDLE:jo.DOLLY,RIGHT:jo.PAN},this.touches={ONE:No.ROTATE,TWO:No.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new ro,this._lastTargetPosition=new U,this._quat=new ro().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new iv,this._sphericalDelta=new iv,this._scale=1,this._panOffset=new U,this._rotateStart=new Se,this._rotateEnd=new Se,this._rotateDelta=new Se,this._panStart=new Se,this._panEnd=new Se,this._panDelta=new Se,this._dollyStart=new Se,this._dollyEnd=new Se,this._dollyDelta=new Se,this._dollyDirection=new U,this._mouse=new Se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$k.bind(this),this._onPointerDown=Vk.bind(this),this._onPointerUp=Gk.bind(this),this._onContextMenu=Zk.bind(this),this._onMouseWheel=jk.bind(this),this._onKeyDown=qk.bind(this),this._onTouchStart=Yk.bind(this),this._onTouchMove=Kk.bind(this),this._onMouseDown=Wk.bind(this),this._onMouseMove=Xk.bind(this),this._interceptControlDown=Jk.bind(this),this._interceptControlUp=Qk.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(av),this.update(),this.state=vt.NONE}update(e=null){const n=this.object.position;Ht.copy(n).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=yn:i>Math.PI&&(i-=yn),r<-Math.PI?r+=yn:r>Math.PI&&(r-=yn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=Ht.length();s=this._clampDistance(a*this._scale);const l=a-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),s=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(oc.origin.copy(this.object.position),oc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oc.direction))<Hk?this.object.lookAt(this.target):(lv.setFromNormalAndCoplanarPoint(this.object.up,this.target),oc.intersectPlane(lv,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Xh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xh||this._lastTargetPosition.distanceToSquared(this.target)>Xh?(this.dispatchEvent(av),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?yn/60*this.autoRotateSpeed*e:yn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ht.setFromMatrixColumn(n,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,n){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(n,1):(Ht.setFromMatrixColumn(n,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ht.copy(r).sub(this.target);let o=Ht.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*n*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,o=n-i.top,s=i.width,a=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/n.clientHeight),this._rotateUp(yn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/n.clientHeight),this._rotateUp(yn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Se,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Vk(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function $k(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function Gk(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xy),this.state=vt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Wk(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case jo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=vt.DOLLY;break;case jo.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=vt.ROTATE}break;case jo.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(Ip)}function Xk(t){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function jk(t){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(t.preventDefault(),this.dispatchEvent(Ip),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Xy))}function qk(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function Yk(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case No.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=vt.TOUCH_ROTATE;break;case No.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case No.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=vt.TOUCH_DOLLY_PAN;break;case No.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(Ip)}function Kk(t){switch(this._trackPointer(t),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=vt.NONE}}function Zk(t){this.enabled!==!1&&t.preventDefault()}function Jk(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qk(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Qo=function(){var t=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),i(++t%e.children.length)},!1);function n(u){return e.appendChild(u.dom),u}function i(u){for(var h=0;h<e.children.length;h++)e.children[h].style.display=h===u?"block":"none";t=u}var r=(performance||Date).now(),o=r,s=0,a=n(new Qo.Panel("FPS","#0ff","#002")),l=n(new Qo.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=n(new Qo.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:n,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){s++;var u=(performance||Date).now();if(l.update(u-r,200),u>=o+1e3&&(a.update(s*1e3/(u-o),100),o=u,s=0,c)){var h=performance.memory;c.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){r=this.end()},domElement:e,setMode:i}};Qo.Panel=function(t,e,n){var i=1/0,r=0,o=Math.round,s=o(window.devicePixelRatio||1),a=80*s,l=48*s,c=3*s,u=2*s,h=3*s,d=15*s,f=74*s,m=30*s,v=document.createElement("canvas");v.width=a,v.height=l,v.style.cssText="width:80px;height:48px";var g=v.getContext("2d");return g.font="bold "+9*s+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,a,l),g.fillStyle=e,g.fillText(t,c,u),g.fillRect(h,d,f,m),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,d,f,m),{dom:v,update:function(p,S){i=Math.min(i,p),r=Math.max(r,p),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,a,d),g.fillStyle=e,g.fillText(o(p)+" "+t+" ("+o(i)+"-"+o(r)+")",c,u),g.drawImage(v,h+s,d,f-s,m,h,d,f-s,m),g.fillRect(h+f-s,d,s,m),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+f-s,d,s,o((1-p/S)*m))}}};class jy{constructor(e,n,i={},r,o,s){Ut(this,"renderer");Ut(this,"camera");Ut(this,"scene");Ut(this,"customAnimate");Ut(this,"controls");Ut(this,"canvas");Ut(this,"windowSize");Ut(this,"autoSize");Ut(this,"gui");Ut(this,"stats");Ut(this,"frameId");Ut(this,"resizeCallbacks");this.canvas=e,this.camera=n,this.windowSize=i.windowSize||!1,this.autoSize=i.autoSize||!1,this.scene=s||new Oy,this.resizeCallbacks=[],this.renderer=new D4({canvas:e,antialias:!0,powerPreference:"high-performance",...i}),this.initSize(r,o),this.windowSize&&window.addEventListener("resize",this.onWindowResize.bind(this)),this.autoSize&&e.parentElement&&window.addEventListener("resize",this.onParentResize.bind(this)),i.useControls&&(this.controls=new kk(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.minDistance=10,this.controls.maxDistance=20),i.useGUI&&(this.gui=new Dp),i.useStats&&(this.stats=new Qo,this.stats.showPanel(0),document.body.appendChild(this.stats.dom))}initSize(e,n){this.windowSize?this.setSize(window.innerWidth,window.innerHeight):this.autoSize&&this.canvas.parentElement?this.setSize(this.canvas.parentElement.clientWidth,this.canvas.parentElement.clientHeight):e&&n?this.setSize(e,n):this.setSize(this.canvas.clientWidth,this.canvas.clientHeight)}setSize(e,n){this.renderer.setSize(e,n),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),"aspect"in this.camera&&(this.camera.aspect=e/n,this.camera.updateProjectionMatrix()),this.resizeCallbacks.forEach(i=>i(e,n))}onWindowResize(){this.setSize(window.innerWidth,window.innerHeight)}onParentResize(){const e=this.canvas.parentElement;e&&this.setSize(e.clientWidth,e.clientHeight)}animate(){this.renderer.render(this.scene,this.camera),this.frameId=requestAnimationFrame(()=>this.animate()),this.customAnimate&&this.customAnimate(),this.controls&&this.controls.update(),this.stats&&this.stats.begin(),this.stats&&this.stats.end()}addObject(e){this.scene.add(e)}addResizeCallback(e){this.resizeCallbacks.push(e)}destroy(){this.frameId!==void 0&&cancelAnimationFrame(this.frameId),this.renderer.dispose(),window.removeEventListener("resize",this.onWindowResize.bind(this)),window.removeEventListener("resize",this.onParentResize.bind(this)),this.controls&&this.controls.dispose(),this.gui&&this.gui.destroy(),this.stats&&document.body.removeChild(this.stats.dom)}}const sc=0,ac=360,lc=0,cc=50,cv=10;var uv,hv;const e5=Lt({__name:"PrpdChart",props:{width:{default:(uv=Jo.get("xxl"))==null?void 0:uv[0]},height:{default:(hv=Jo.get("xxl"))==null?void 0:hv[1]},autoresize:{type:Boolean},breackpoint:{}},setup(t){const e=t,{active:n}=Vx(kx),i=n(),r=lt();let o,s;const a=Je(()=>e.width/e.height),l=new U(a.value*2,0,0),c=new U(0,a.value*2,0),u=new U(0,0,0),h=new Oy,d=new ll(e.width,e.height),f=new Ps({color:"#323333",transparent:!1,opacity:.1}),m=new xn(d,f);h.add(m),h.background=new it("white");{const D=Ef(l.x,c.y,20,20),z=new tu(D,new Jc({color:"#808080",linewidth:.005,opacity:.7,transparent:!0}));m.add(z)}{const D=ma([u,l],{labelColor:"#A9AAAA",labelMax:360,labelStep:90,lineColor:"#A9AAAA",labelMin:0,lineWidth:.02,showTick:!0,showLabel:!0,vector:"x",maxXVector:l,maxYVector:c,labelFontSize:1.4});D.children.filter(W=>W.name==="axisLabel")[0].position.set(-.05,-.08,0);const b=nu("right",.1,"red");b==null||b.position.set(l.x,0,0),m.add(D);const M=ma([u,c],{showLabel:!0,labelColor:"white",labelMax:-40,labelStep:5,lineColor:"#A9AAAA",labelMin:-65,lineWidth:.02,showTick:!0,vector:"y",maxXVector:l,maxYVector:c});M.children.filter(W=>W.name==="axisLabel")[0].position.set(-.12,-.03,0);const N=nu("up",.1,"green");N==null||N.position.set(0,c.y,0),m.add(M)}const v=Wy(l,c,.01,"#A9AAAA");m.add(v);const g=Da().domain([sc,ac]).range([0,l.x]),p=Da().domain([lc,cc]).range([0,c.y]),S=xp().domain([0,1,1]).range(Cb);function y(D,z,b=1e3){const M=new Ny({size:5,vertexColors:!0}),I=new Pn,N=new Float32Array(b*3),W=new Float32Array(b*3),ne=new it,X=Pd((ac+sc)/2,(ac-sc)/12),te=Pd((cc+lc)/2,(cc-lc)/12);for(let j=0;j<b;j++){let pe=X(),xe=te();const be=Math.floor(Math.random()*cv);pe=Math.max(sc,Math.min(ac,pe)),xe=Math.max(lc,Math.min(cc,xe));const ke=g(pe),Ce=p(xe);N[j*3]=ke,N[j*3+1]=Ce,N[j*3+2]=0;const J=be/cv,ce=S(J);ne.set(ce),W[j*3]=ne.r,W[j*3+1]=ne.g,W[j*3+2]=ne.b}return I.setAttribute("position",new vn(N,3)),I.setAttribute("color",new vn(W,3)),new O4(I,M)}const w=y();m.add(w);function L(D,z,b=1e3){const M=D.geometry.getAttribute("position").array,I=D.geometry.getAttribute("color").array,N=new Float32Array(M.length),W=new Float32Array(I.length);N.set(M.subarray(z*3)),W.set(I.subarray(z*3));const ne=y(l,c,b),X=ne.geometry.getAttribute("position").array,te=ne.geometry.getAttribute("color").array;N.set(X,M.length-X.length),W.set(te,I.length-te.length),D.geometry.setAttribute("position",new vn(N,3)),D.geometry.setAttribute("color",new vn(W,3)),D.geometry.attributes.position.needsUpdate=!0,D.geometry.attributes.color.needsUpdate=!0}function E(){return new Ay(-.1,a.value*2+.1,a.value*2+.1,-.1,-1e3,1e3)}const T=zx((D,z)=>{if(D<=0||z<=0)return!1;o.setSize(D,z)},200);return un(()=>[e.width,e.height],()=>{T(e.width,e.height)},{immediate:!0}),un(()=>i.value,()=>{const z=new Map([...Jo,...(e==null?void 0:e.breackpoint)??[]]).get(i.value);z&&e.autoresize&&T(z[0],z[1])},{immediate:!0,deep:!0}),ri(()=>{r.value&&(s=E(),o=new jy(r.value,s,{useControls:!1,useGUI:!1,useStats:!1,antialias:!0,powerPreference:"high-performance"},e.width,e.height),o.addObject(m),setInterval(()=>{L(w,1e3)},20),o.animate())}),_s(()=>{o&&o.destroy()}),(D,z)=>(Zr(),jf("canvas",{ref_key:"webgl",ref:r,class:"wh-full"},null,512))}}),t5=Lt({__name:"PrpsChart",props:{autoresize:{type:Boolean},breackpoint:{}},setup(t){const e=t,n=Je(()=>{var Ce,J,ce,ge;return e.breackpoint?{width:(Ce=e.breackpoint.get("xxl"))==null?void 0:Ce[0],height:(J=e.breackpoint.get("xxl"))==null?void 0:J[1]}:{width:(ce=Jo.get("xxl"))==null?void 0:ce[0],height:(ge=Jo.get("xxl"))==null?void 0:ge[1]}}),{active:i}=Vx(kx),r=i(),o=new Qo;o.showPanel(0),o.dom.style.position="absolute",o.dom.style.left="0px",o.dom.style.top="0px";const s=lt();let a,l;const c=new U(6,0,0),u=new U(0,6,0),h=new U(0,0,5),d=new U(0,0,0);let f;const m=new Ui,v=Ef(c.x,u.y,10,10,[0,0]),g=new Jc({color:"#A9AAAA"}),p=new tu(v,g),S=Wy(c,u,.1,"#CDCECE");p.add(S),m.add(p);const y=Ef(c.x,h.z,15,15,[0,0],["x",Math.PI*.5]),w=new Jc({color:"#A9AAAA"}),L=new tu(y,w);m.add(L);const E=ma([h,new U(c.x,0,h.z)],{labelColor:"#A9AAAA",labelMax:360,labelStep:90,lineColor:"#A9AAAA",labelMin:0,labelFontSize:5,lineWidth:0,showLabel:!0,showTick:!0,vector:"x",maxXVector:h,maxYVector:new U(c.x,0,h.z)});E.children.filter(Ce=>Ce.name==="axisLabel")[0].position.set(-.1,0,0);const D=ma([d,u],{lineColor:"#A9AAAA",lineWidth:.1,showLabel:!0,labelMax:-20,labelMin:-65,labelStep:10,labelFontSize:5,labelColor:"#A9AAAA",vector:"y",maxXVector:d,maxYVector:u});D.children.filter(Ce=>Ce.name==="axisLabel")[0].position.set(-.5,0,0);const b=nu("up",.3,"red");b==null||b.position.set(0,u.y,-.05);const M=ma([d,h],{lineColor:"#A9AAAA",lineWidth:.1,showLabel:!1}),I=M.children.filter(Ce=>Ce.name==="axisLabel")[0];I.position.set(-.5,0,0),I.rotation.set(0,0,Math.PI*4);const N=nu("front",.3,"blue");N==null||N.position.set(0,.05,h.z);const W=new Ui,ne=xp().domain([0,5]).range(Cb);function X(Ce){const ge=Da().domain([0,Ce.length]).range([0,6]),V=Da().domain([0,5]).range([0,5]),le=Ce.length,oe=new Float32Array(le*8*3),ue=new Float32Array(le*8*3),we=new Uint32Array(le*12*3),ie=new it;let _=0,P=0,O=0;Ce.forEach((Z,C)=>{const x=ge(C),R=0,F=V(Z),B=C*8,G=[[x,R,5],[x+.01,R,5],[x+.01,R+F,5],[x,R+F,5],[x,R,5+.01],[x+.01,R,5+.01],[x+.01,R+F,5+.01],[x,R+F,5+.01]];for(const se of G){oe[_++]=se[0],oe[_++]=se[1],oe[_++]=se[2];const fe=ne(Z);ie.set(fe),ue[P++]=ie.r,ue[P++]=ie.g,ue[P++]=ie.b}const ae=[3,2,1,3,1,0,4,5,6,4,6,7,3,7,6,3,6,2,0,1,5,0,5,4,0,4,7,0,7,3,1,2,6,1,6,5];for(let se=0;se<ae.length;se+=3)we[O++]=B+ae[se],we[O++]=B+ae[se+1],we[O++]=B+ae[se+2]});const H=new Pn;H.setAttribute("position",new Ot(oe,3)),H.setAttribute("color",new Ot(ue,3)),H.setIndex(new Ot(we,1)),H.computeVertexNormals();const k=new Ps({vertexColors:!0});return new xn(H,k)}function te(){const Ce=Pd(2.1,1);return Array.from({length:50},()=>Math.min(4.5,Math.max(0,Ce())))}function j(){W.children.forEach(Ce=>{Ce.position.z<-5&&W.remove(Ce)})}function pe(){W.children.forEach(Ce=>{Ce.position.z-=.01})}function xe(){var J,ce;const Ce=new zn(45,((J=n.value)==null?void 0:J.width)/((ce=n.value)==null?void 0:ce.height),1,1e3);return Ce.position.setScalar(9),Ce.position.z=8,Ce}function be(){a&&[E,D,M,W].forEach(J=>{a.addObject(J)})}ri(()=>{var Ce,J;s.value&&(l=xe(),a=new jy(s.value,l,{useControls:!0,useGUI:!1,useStats:!1,antialias:!1,powerPreference:"high-performance"},(Ce=n.value)==null?void 0:Ce.width,(J=n.value)==null?void 0:J.height),f=a.scene,f.background=new it("#323333"),a.addObject(m),be(),a.customAnimate=()=>{j(),pe()},setInterval(()=>{const ce=te();W.add(X(ce))},100),a.animate())});const ke=zx((Ce=(ce=>(ce=n.value)==null?void 0:ce.width)(),J=(ge=>(ge=n.value)==null?void 0:ge.height)())=>{a.setSize(Ce,J)},200);return un(()=>n,()=>{var Ce,J;ke((Ce=n.value)==null?void 0:Ce.width,(J=n.value)==null?void 0:J.height)},{immediate:!0}),un(()=>r,()=>{const J=new Map([...Jo,...(e==null?void 0:e.breackpoint)??[]]).get(r.value);J&&e.autoresize&&ke(J[0],J[1])},{immediate:!0,deep:!0}),_s(()=>{a.destroy()}),(Ce,J)=>(Zr(),jf("canvas",{ref_key:"webgl",ref:s,class:"wh-full"},null,512))}}),n5={class:"home-view"},i5={class:"chart-container"},r5={class:"chart-container"},o5=Lt({__name:"HomeView",setup(t){const e=lt("prpd");return(n,i)=>(Zr(),jf("main",n5,[wt(Zt(iL),{type:"line",animated:"",value:e.value,"onUpdate:value":i[0]||(i[0]=r=>e.value=r)},{default:ur(()=>[wt(Zt(lg),{name:"prpd",tab:"prpd"},{default:ur(()=>[Wr("div",i5,[wt(e5)])]),_:1}),wt(Zt(lg),{name:"prps",tab:"prps"},{default:ur(()=>[Wr("div",r5,[wt(t5)])]),_:1})]),_:1},8,["value"])]))}}),s5=Sb(o5,[["__scopeId","data-v-eb8bf727"]]),a5=aD({history:BL("/"),routes:[{path:"/",name:"home",component:s5},{path:"/about",name:"about",component:()=>mD(()=>import("./AboutView-fjqlOzeH.js"),__vite__mapDeps([0,1]),import.meta.url)}]}),Op=PM(dD);Op.use(OM());Op.use(a5);Op.mount("#app");export{HA as $,yx as A,np as B,Cn as C,Gr as D,md as E,Xt as F,m5 as G,ip as H,XA as I,ws as J,mP as K,Ne as L,un as M,N_ as N,g5 as O,e_ as P,d5 as Q,U1 as R,Lm as S,Tx as T,ja as U,Qu as V,Wt as W,Tm as X,Gs as Y,ze as Z,C5 as _,nC as a,v5 as a0,y5 as a1,_5 as a2,b5 as a3,M5 as a4,Ya as a5,F_ as a6,SR as a7,f5 as a8,ia as a9,Jt as aa,jx as ab,$2 as ac,Zr as ad,jf as ae,wt as af,ur as ag,Zt as ah,Wr as ai,u5 as aj,c5 as ak,h5 as al,os as am,If as an,fS as ao,Sb as ap,iC as b,Je as c,Lt as d,_s as e,p5 as f,yl as g,gr as h,Bt as i,me as j,el as k,qe as l,Ja as m,Te as n,ri as o,dr as p,Xe as q,lt as r,Mt as s,tp as t,Qa as u,IA as v,fu as w,S5 as x,n1 as y,O_ as z};
