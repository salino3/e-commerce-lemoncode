(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Kf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $r={},Zf={get exports(){return $r},set exports(e){$r=e}},Po={},$={},Gf={get exports(){return $},set exports(e){$=e}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oi=Symbol.for("react.element"),Jf=Symbol.for("react.portal"),qf=Symbol.for("react.fragment"),e1=Symbol.for("react.strict_mode"),t1=Symbol.for("react.profiler"),n1=Symbol.for("react.provider"),r1=Symbol.for("react.context"),i1=Symbol.for("react.forward_ref"),o1=Symbol.for("react.suspense"),l1=Symbol.for("react.memo"),a1=Symbol.for("react.lazy"),zs=Symbol.iterator;function s1(e){return e===null||typeof e!="object"?null:(e=zs&&e[zs]||e["@@iterator"],typeof e=="function"?e:null)}var xc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wc=Object.assign,Cc={};function lr(e,t,n){this.props=e,this.context=t,this.refs=Cc,this.updater=n||xc}lr.prototype.isReactComponent={};lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kc(){}kc.prototype=lr.prototype;function _a(e,t,n){this.props=e,this.context=t,this.refs=Cc,this.updater=n||xc}var La=_a.prototype=new kc;La.constructor=_a;wc(La,lr.prototype);La.isPureReactComponent=!0;var Ms=Array.isArray,Sc=Object.prototype.hasOwnProperty,za={current:null},Ec={key:!0,ref:!0,__self:!0,__source:!0};function Nc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Sc.call(t,r)&&!Ec.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:oi,type:e,key:o,ref:l,props:i,_owner:za.current}}function u1(e,t){return{$$typeof:oi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ma(e){return typeof e=="object"&&e!==null&&e.$$typeof===oi}function c1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var js=/\/+/g;function Ko(e,t){return typeof e=="object"&&e!==null&&e.key!=null?c1(""+e.key):t.toString(36)}function bi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case oi:case Jf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ko(l,0):r,Ms(i)?(n="",e!=null&&(n=e.replace(js,"$&/")+"/"),bi(i,t,n,"",function(c){return c})):i!=null&&(Ma(i)&&(i=u1(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(js,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Ms(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Ko(o,s);l+=bi(o,t,n,u,i)}else if(u=s1(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Ko(o,s++),l+=bi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function pi(e,t,n){if(e==null)return e;var r=[],i=0;return bi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function d1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Di={transition:null},f1={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Di,ReactCurrentOwner:za};Y.Children={map:pi,forEach:function(e,t,n){pi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pi(e,function(){t++}),t},toArray:function(e){return pi(e,function(t){return t})||[]},only:function(e){if(!Ma(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=lr;Y.Fragment=qf;Y.Profiler=t1;Y.PureComponent=_a;Y.StrictMode=e1;Y.Suspense=o1;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f1;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=wc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=za.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Sc.call(t,u)&&!Ec.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:oi,type:e.type,key:i,ref:o,props:r,_owner:l}};Y.createContext=function(e){return e={$$typeof:r1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:n1,_context:e},e.Consumer=e};Y.createElement=Nc;Y.createFactory=function(e){var t=Nc.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:i1,render:e}};Y.isValidElement=Ma;Y.lazy=function(e){return{$$typeof:a1,_payload:{_status:-1,_result:e},_init:d1}};Y.memo=function(e,t){return{$$typeof:l1,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Di.transition;Di.transition={};try{e()}finally{Di.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return De.current.useCallback(e,t)};Y.useContext=function(e){return De.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return De.current.useDeferredValue(e)};Y.useEffect=function(e,t){return De.current.useEffect(e,t)};Y.useId=function(){return De.current.useId()};Y.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return De.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};Y.useRef=function(e){return De.current.useRef(e)};Y.useState=function(e){return De.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return De.current.useTransition()};Y.version="18.2.0";(function(e){e.exports=Y})(Gf);const ct=Xf($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p1=$,m1=Symbol.for("react.element"),h1=Symbol.for("react.fragment"),g1=Object.prototype.hasOwnProperty,v1=p1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y1={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)g1.call(t,r)&&!y1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:m1,type:e,key:o,ref:l,props:i,_owner:v1.current}}Po.Fragment=h1;Po.jsx=Pc;Po.jsxs=Pc;(function(e){e.exports=Po})(Zf);const ln=$r.Fragment,a=$r.jsx,m=$r.jsxs;var _l={},x1={get exports(){return _l},set exports(e){_l=e}},nt={},Ll={},w1={get exports(){return Ll},set exports(e){Ll=e}},_c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,D){var B=T.length;T.push(D);e:for(;0<B;){var ie=B-1>>>1,pe=T[ie];if(0<i(pe,D))T[ie]=D,T[B]=pe,B=ie;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],B=T.pop();if(B!==D){T[0]=B;e:for(var ie=0,pe=T.length,At=pe>>>1;ie<At;){var Be=2*(ie+1)-1,pn=T[Be],ke=Be+1,Xe=T[ke];if(0>i(pn,B))ke<pe&&0>i(Xe,pn)?(T[ie]=Xe,T[ke]=B,ie=ke):(T[ie]=pn,T[Be]=B,ie=Be);else if(ke<pe&&0>i(Xe,B))T[ie]=Xe,T[ke]=B,ie=ke;else break e}}return D}function i(T,D){var B=T.sortIndex-D.sortIndex;return B!==0?B:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],g=1,v=null,y=3,w=!1,C=!1,x=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=T)r(c),D.sortIndex=D.expirationTime,t(u,D);else break;D=n(c)}}function k(T){if(x=!1,h(T),!C)if(n(u)!==null)C=!0,Ke(E);else{var D=n(c);D!==null&&fn(k,D.startTime-T)}}function E(T,D){C=!1,x&&(x=!1,f(M),M=-1),w=!0;var B=y;try{for(h(D),v=n(u);v!==null&&(!(v.expirationTime>D)||T&&!U());){var ie=v.callback;if(typeof ie=="function"){v.callback=null,y=v.priorityLevel;var pe=ie(v.expirationTime<=D);D=e.unstable_now(),typeof pe=="function"?v.callback=pe:v===n(u)&&r(u),h(D)}else r(u);v=n(u)}if(v!==null)var At=!0;else{var Be=n(c);Be!==null&&fn(k,Be.startTime-D),At=!1}return At}finally{v=null,y=B,w=!1}}var P=!1,S=null,M=-1,z=5,j=-1;function U(){return!(e.unstable_now()-j<z)}function A(){if(S!==null){var T=e.unstable_now();j=T;var D=!0;try{D=S(!0,T)}finally{D?b():(P=!1,S=null)}}else P=!1}var b;if(typeof d=="function")b=function(){d(A)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,Ae=xe.port2;xe.port1.onmessage=A,b=function(){Ae.postMessage(null)}}else b=function(){N(A,0)};function Ke(T){S=T,P||(P=!0,b())}function fn(T,D){M=N(function(){T(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){C||w||(C=!0,Ke(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(T){switch(y){case 1:case 2:case 3:var D=3;break;default:D=y}var B=y;y=D;try{return T()}finally{y=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var B=y;y=T;try{return D()}finally{y=B}},e.unstable_scheduleCallback=function(T,D,B){var ie=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ie+B:ie):B=ie,T){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=B+pe,T={id:g++,callback:D,priorityLevel:T,startTime:B,expirationTime:pe,sortIndex:-1},B>ie?(T.sortIndex=B,t(c,T),n(u)===null&&T===n(c)&&(x?(f(M),M=-1):x=!0,fn(k,B-ie))):(T.sortIndex=pe,t(u,T),C||w||(C=!0,Ke(E))),T},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(T){var D=y;return function(){var B=y;y=D;try{return T.apply(this,arguments)}finally{y=B}}}})(_c);(function(e){e.exports=_c})(w1);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc=$,tt=Ll;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zc=new Set,br={};function _n(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(br[e]=t,e=0;e<t.length;e++)zc.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zl=Object.prototype.hasOwnProperty,C1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ts={},Rs={};function k1(e){return zl.call(Rs,e)?!0:zl.call(Ts,e)?!1:C1.test(e)?Rs[e]=!0:(Ts[e]=!0,!1)}function S1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E1(e,t,n,r){if(t===null||typeof t>"u"||S1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var ja=/[\-:]([a-z])/g;function Ta(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ja,Ta);Me[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ja,Ta);Me[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ja,Ta);Me[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ra(e,t,n,r){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(E1(t,n,i,r)&&(n=null),r||i===null?k1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ut=Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mi=Symbol.for("react.element"),Rn=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),Oa=Symbol.for("react.strict_mode"),Ml=Symbol.for("react.profiler"),Mc=Symbol.for("react.provider"),jc=Symbol.for("react.context"),Ia=Symbol.for("react.forward_ref"),jl=Symbol.for("react.suspense"),Tl=Symbol.for("react.suspense_list"),$a=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Tc=Symbol.for("react.offscreen"),Os=Symbol.iterator;function pr(e){return e===null||typeof e!="object"?null:(e=Os&&e[Os]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,Xo;function Sr(e){if(Xo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xo=t&&t[1]||""}return`
`+Xo+e}var Zo=!1;function Go(e,t){if(!e||Zo)return"";Zo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Zo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sr(e):""}function N1(e){switch(e.tag){case 5:return Sr(e.type);case 16:return Sr("Lazy");case 13:return Sr("Suspense");case 19:return Sr("SuspenseList");case 0:case 2:case 15:return e=Go(e.type,!1),e;case 11:return e=Go(e.type.render,!1),e;case 1:return e=Go(e.type,!0),e;default:return""}}function Rl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case On:return"Fragment";case Rn:return"Portal";case Ml:return"Profiler";case Oa:return"StrictMode";case jl:return"Suspense";case Tl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jc:return(e.displayName||"Context")+".Consumer";case Mc:return(e._context.displayName||"Context")+".Provider";case Ia:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $a:return t=e.displayName||null,t!==null?t:Rl(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return Rl(e(t))}catch{}}return null}function P1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rl(t);case 8:return t===Oa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _1(e){var t=Rc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hi(e){e._valueTracker||(e._valueTracker=_1(e))}function Oc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ol(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Is(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ic(e,t){t=t.checked,t!=null&&Ra(e,"checked",t,!1)}function Il(e,t){Ic(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$l(e,t.type,n):t.hasOwnProperty("defaultValue")&&$l(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $s(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $l(e,t,n){(t!=="number"||Ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Er=Array.isArray;function Hn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Er(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function $c(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ds(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gi,Dc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gi=gi||document.createElement("div"),gi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L1=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){L1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_r[t]=_r[e]})});function Uc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_r.hasOwnProperty(e)&&_r[e]?(""+t).trim():t+"px"}function Ac(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Uc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var z1=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ul(e,t){if(t){if(z1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Al(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function ba(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fl=null,Qn=null,Yn=null;function Us(e){if(e=si(e)){if(typeof Fl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=jo(t),Fl(e.stateNode,e.type,t))}}function Bc(e){Qn?Yn?Yn.push(e):Yn=[e]:Qn=e}function Fc(){if(Qn){var e=Qn,t=Yn;if(Yn=Qn=null,Us(e),t)for(e=0;e<t.length;e++)Us(t[e])}}function Vc(e,t){return e(t)}function Wc(){}var Jo=!1;function Hc(e,t,n){if(Jo)return e(t,n);Jo=!0;try{return Vc(e,t,n)}finally{Jo=!1,(Qn!==null||Yn!==null)&&(Wc(),Fc())}}function Ur(e,t){var n=e.stateNode;if(n===null)return null;var r=jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Vl=!1;if(It)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){Vl=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{Vl=!1}function M1(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Lr=!1,qi=null,eo=!1,Wl=null,j1={onError:function(e){Lr=!0,qi=e}};function T1(e,t,n,r,i,o,l,s,u){Lr=!1,qi=null,M1.apply(j1,arguments)}function R1(e,t,n,r,i,o,l,s,u){if(T1.apply(this,arguments),Lr){if(Lr){var c=qi;Lr=!1,qi=null}else throw Error(_(198));eo||(eo=!0,Wl=c)}}function Ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function As(e){if(Ln(e)!==e)throw Error(_(188))}function O1(e){var t=e.alternate;if(!t){if(t=Ln(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return As(i),e;if(o===r)return As(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Yc(e){return e=O1(e),e!==null?Kc(e):null}function Kc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kc(e);if(t!==null)return t;e=e.sibling}return null}var Xc=tt.unstable_scheduleCallback,Bs=tt.unstable_cancelCallback,I1=tt.unstable_shouldYield,$1=tt.unstable_requestPaint,he=tt.unstable_now,b1=tt.unstable_getCurrentPriorityLevel,Da=tt.unstable_ImmediatePriority,Zc=tt.unstable_UserBlockingPriority,to=tt.unstable_NormalPriority,D1=tt.unstable_LowPriority,Gc=tt.unstable_IdlePriority,_o=null,Pt=null;function U1(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(_o,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:F1,A1=Math.log,B1=Math.LN2;function F1(e){return e>>>=0,e===0?32:31-(A1(e)/B1|0)|0}var vi=64,yi=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function no(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Nr(s):(o&=l,o!==0&&(r=Nr(o)))}else l=n&~i,l!==0?r=Nr(l):o!==0&&(r=Nr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),i=1<<n,r|=e[n],t&=~i;return r}function V1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-gt(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=V1(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jc(){var e=vi;return vi<<=1,!(vi&4194240)&&(vi=64),e}function qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function li(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function H1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-gt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ua(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var re=0;function qc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ed,Aa,td,nd,rd,Ql=!1,xi=[],Zt=null,Gt=null,Jt=null,Ar=new Map,Br=new Map,Ht=[],Q1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fs(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":Ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(t.pointerId)}}function hr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=si(t),t!==null&&Aa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Y1(e,t,n,r,i){switch(t){case"focusin":return Zt=hr(Zt,e,t,n,r,i),!0;case"dragenter":return Gt=hr(Gt,e,t,n,r,i),!0;case"mouseover":return Jt=hr(Jt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ar.set(o,hr(Ar.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Br.set(o,hr(Br.get(o)||null,e,t,n,r,i)),!0}return!1}function id(e){var t=vn(e.target);if(t!==null){var n=Ln(t);if(n!==null){if(t=n.tag,t===13){if(t=Qc(n),t!==null){e.blockedOn=t,rd(e.priority,function(){td(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bl=r,n.target.dispatchEvent(r),Bl=null}else return t=si(n),t!==null&&Aa(t),e.blockedOn=n,!1;t.shift()}return!0}function Vs(e,t,n){Ui(e)&&n.delete(t)}function K1(){Ql=!1,Zt!==null&&Ui(Zt)&&(Zt=null),Gt!==null&&Ui(Gt)&&(Gt=null),Jt!==null&&Ui(Jt)&&(Jt=null),Ar.forEach(Vs),Br.forEach(Vs)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ql||(Ql=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,K1)))}function Fr(e){function t(i){return gr(i,e)}if(0<xi.length){gr(xi[0],e);for(var n=1;n<xi.length;n++){var r=xi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&gr(Zt,e),Gt!==null&&gr(Gt,e),Jt!==null&&gr(Jt,e),Ar.forEach(t),Br.forEach(t),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)id(n),n.blockedOn===null&&Ht.shift()}var Kn=Ut.ReactCurrentBatchConfig,ro=!0;function X1(e,t,n,r){var i=re,o=Kn.transition;Kn.transition=null;try{re=1,Ba(e,t,n,r)}finally{re=i,Kn.transition=o}}function Z1(e,t,n,r){var i=re,o=Kn.transition;Kn.transition=null;try{re=4,Ba(e,t,n,r)}finally{re=i,Kn.transition=o}}function Ba(e,t,n,r){if(ro){var i=Yl(e,t,n,r);if(i===null)ul(e,t,r,io,n),Fs(e,r);else if(Y1(i,e,t,n,r))r.stopPropagation();else if(Fs(e,r),t&4&&-1<Q1.indexOf(e)){for(;i!==null;){var o=si(i);if(o!==null&&ed(o),o=Yl(e,t,n,r),o===null&&ul(e,t,r,io,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ul(e,t,r,null,n)}}var io=null;function Yl(e,t,n,r){if(io=null,e=ba(r),e=vn(e),e!==null)if(t=Ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return io=e,null}function od(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b1()){case Da:return 1;case Zc:return 4;case to:case D1:return 16;case Gc:return 536870912;default:return 16}default:return 16}}var Yt=null,Fa=null,Ai=null;function ld(){if(Ai)return Ai;var e,t=Fa,n=t.length,r,i="value"in Yt?Yt.value:Yt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ai=i.slice(e,1<r?1-r:void 0)}function Bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function Ws(){return!1}function rt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wi:Ws,this.isPropagationStopped=Ws,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Va=rt(ar),ai=fe({},ar,{view:0,detail:0}),G1=rt(ai),el,tl,vr,Lo=fe({},ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?(el=e.screenX-vr.screenX,tl=e.screenY-vr.screenY):tl=el=0,vr=e),el)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),Hs=rt(Lo),J1=fe({},Lo,{dataTransfer:0}),q1=rt(J1),ep=fe({},ai,{relatedTarget:0}),nl=rt(ep),tp=fe({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),np=rt(tp),rp=fe({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ip=rt(rp),op=fe({},ar,{data:0}),Qs=rt(op),lp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ap={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function up(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sp[e])?!!t[e]:!1}function Wa(){return up}var cp=fe({},ai,{key:function(e){if(e.key){var t=lp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ap[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wa,charCode:function(e){return e.type==="keypress"?Bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dp=rt(cp),fp=fe({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ys=rt(fp),pp=fe({},ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wa}),mp=rt(pp),hp=fe({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),gp=rt(hp),vp=fe({},Lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yp=rt(vp),xp=[9,13,27,32],Ha=It&&"CompositionEvent"in window,zr=null;It&&"documentMode"in document&&(zr=document.documentMode);var wp=It&&"TextEvent"in window&&!zr,ad=It&&(!Ha||zr&&8<zr&&11>=zr),Ks=String.fromCharCode(32),Xs=!1;function sd(e,t){switch(e){case"keyup":return xp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var In=!1;function Cp(e,t){switch(e){case"compositionend":return ud(t);case"keypress":return t.which!==32?null:(Xs=!0,Ks);case"textInput":return e=t.data,e===Ks&&Xs?null:e;default:return null}}function kp(e,t){if(In)return e==="compositionend"||!Ha&&sd(e,t)?(e=ld(),Ai=Fa=Yt=null,In=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ad&&t.locale!=="ko"?null:t.data;default:return null}}var Sp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sp[e.type]:t==="textarea"}function cd(e,t,n,r){Bc(r),t=oo(t,"onChange"),0<t.length&&(n=new Va("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mr=null,Vr=null;function Ep(e){Cd(e,0)}function zo(e){var t=Dn(e);if(Oc(t))return e}function Np(e,t){if(e==="change")return t}var dd=!1;if(It){var rl;if(It){var il="oninput"in document;if(!il){var Gs=document.createElement("div");Gs.setAttribute("oninput","return;"),il=typeof Gs.oninput=="function"}rl=il}else rl=!1;dd=rl&&(!document.documentMode||9<document.documentMode)}function Js(){Mr&&(Mr.detachEvent("onpropertychange",fd),Vr=Mr=null)}function fd(e){if(e.propertyName==="value"&&zo(Vr)){var t=[];cd(t,Vr,e,ba(e)),Hc(Ep,t)}}function Pp(e,t,n){e==="focusin"?(Js(),Mr=t,Vr=n,Mr.attachEvent("onpropertychange",fd)):e==="focusout"&&Js()}function _p(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zo(Vr)}function Lp(e,t){if(e==="click")return zo(t)}function zp(e,t){if(e==="input"||e==="change")return zo(t)}function Mp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Mp;function Wr(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zl.call(t,i)||!xt(e[i],t[i]))return!1}return!0}function qs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eu(e,t){var n=qs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qs(n)}}function pd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function md(){for(var e=window,t=Ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ji(e.document)}return t}function Qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jp(e){var t=md(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pd(n.ownerDocument.documentElement,n)){if(r!==null&&Qa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=eu(n,o);var l=eu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tp=It&&"documentMode"in document&&11>=document.documentMode,$n=null,Kl=null,jr=null,Xl=!1;function tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xl||$n==null||$n!==Ji(r)||(r=$n,"selectionStart"in r&&Qa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Wr(jr,r)||(jr=r,r=oo(Kl,"onSelect"),0<r.length&&(t=new Va("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$n)))}function Ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionend:Ci("Transition","TransitionEnd")},ol={},hd={};It&&(hd=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function Mo(e){if(ol[e])return ol[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hd)return ol[e]=t[n];return e}var gd=Mo("animationend"),vd=Mo("animationiteration"),yd=Mo("animationstart"),xd=Mo("transitionend"),wd=new Map,nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){wd.set(e,t),_n(t,[e])}for(var ll=0;ll<nu.length;ll++){var al=nu[ll],Rp=al.toLowerCase(),Op=al[0].toUpperCase()+al.slice(1);un(Rp,"on"+Op)}un(gd,"onAnimationEnd");un(vd,"onAnimationIteration");un(yd,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(xd,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ip=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,R1(r,t,void 0,e),e.currentTarget=null}function Cd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;ru(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;ru(i,s,c),o=u}}}if(eo)throw e=Wl,eo=!1,Wl=null,e}function ae(e,t){var n=t[ea];n===void 0&&(n=t[ea]=new Set);var r=e+"__bubble";n.has(r)||(kd(t,e,2,!1),n.add(r))}function sl(e,t,n){var r=0;t&&(r|=4),kd(n,e,r,t)}var ki="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[ki]){e[ki]=!0,zc.forEach(function(n){n!=="selectionchange"&&(Ip.has(n)||sl(n,!1,e),sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ki]||(t[ki]=!0,sl("selectionchange",!1,t))}}function kd(e,t,n,r){switch(od(t)){case 1:var i=X1;break;case 4:i=Z1;break;default:i=Ba}n=i.bind(null,t,n,e),i=void 0,!Vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ul(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=vn(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Hc(function(){var c=o,g=ba(n),v=[];e:{var y=wd.get(e);if(y!==void 0){var w=Va,C=e;switch(e){case"keypress":if(Bi(n)===0)break e;case"keydown":case"keyup":w=dp;break;case"focusin":C="focus",w=nl;break;case"focusout":C="blur",w=nl;break;case"beforeblur":case"afterblur":w=nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=q1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=mp;break;case gd:case vd:case yd:w=np;break;case xd:w=gp;break;case"scroll":w=G1;break;case"wheel":w=yp;break;case"copy":case"cut":case"paste":w=ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ys}var x=(t&4)!==0,N=!x&&e==="scroll",f=x?y!==null?y+"Capture":null:y;x=[];for(var d=c,h;d!==null;){h=d;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,f!==null&&(k=Ur(d,f),k!=null&&x.push(Qr(d,k,h)))),N)break;d=d.return}0<x.length&&(y=new w(y,C,null,n,g),v.push({event:y,listeners:x}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",y&&n!==Bl&&(C=n.relatedTarget||n.fromElement)&&(vn(C)||C[$t]))break e;if((w||y)&&(y=g.window===g?g:(y=g.ownerDocument)?y.defaultView||y.parentWindow:window,w?(C=n.relatedTarget||n.toElement,w=c,C=C?vn(C):null,C!==null&&(N=Ln(C),C!==N||C.tag!==5&&C.tag!==6)&&(C=null)):(w=null,C=c),w!==C)){if(x=Hs,k="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ys,k="onPointerLeave",f="onPointerEnter",d="pointer"),N=w==null?y:Dn(w),h=C==null?y:Dn(C),y=new x(k,d+"leave",w,n,g),y.target=N,y.relatedTarget=h,k=null,vn(g)===c&&(x=new x(f,d+"enter",C,n,g),x.target=h,x.relatedTarget=N,k=x),N=k,w&&C)t:{for(x=w,f=C,d=0,h=x;h;h=Mn(h))d++;for(h=0,k=f;k;k=Mn(k))h++;for(;0<d-h;)x=Mn(x),d--;for(;0<h-d;)f=Mn(f),h--;for(;d--;){if(x===f||f!==null&&x===f.alternate)break t;x=Mn(x),f=Mn(f)}x=null}else x=null;w!==null&&iu(v,y,w,x,!1),C!==null&&N!==null&&iu(v,N,C,x,!0)}}e:{if(y=c?Dn(c):window,w=y.nodeName&&y.nodeName.toLowerCase(),w==="select"||w==="input"&&y.type==="file")var E=Np;else if(Zs(y))if(dd)E=zp;else{E=_p;var P=Pp}else(w=y.nodeName)&&w.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(E=Lp);if(E&&(E=E(e,c))){cd(v,E,n,g);break e}P&&P(e,y,c),e==="focusout"&&(P=y._wrapperState)&&P.controlled&&y.type==="number"&&$l(y,"number",y.value)}switch(P=c?Dn(c):window,e){case"focusin":(Zs(P)||P.contentEditable==="true")&&($n=P,Kl=c,jr=null);break;case"focusout":jr=Kl=$n=null;break;case"mousedown":Xl=!0;break;case"contextmenu":case"mouseup":case"dragend":Xl=!1,tu(v,n,g);break;case"selectionchange":if(Tp)break;case"keydown":case"keyup":tu(v,n,g)}var S;if(Ha)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else In?sd(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(ad&&n.locale!=="ko"&&(In||M!=="onCompositionStart"?M==="onCompositionEnd"&&In&&(S=ld()):(Yt=g,Fa="value"in Yt?Yt.value:Yt.textContent,In=!0)),P=oo(c,M),0<P.length&&(M=new Qs(M,e,null,n,g),v.push({event:M,listeners:P}),S?M.data=S:(S=ud(n),S!==null&&(M.data=S)))),(S=wp?Cp(e,n):kp(e,n))&&(c=oo(c,"onBeforeInput"),0<c.length&&(g=new Qs("onBeforeInput","beforeinput",null,n,g),v.push({event:g,listeners:c}),g.data=S))}Cd(v,t)})}function Qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ur(e,n),o!=null&&r.unshift(Qr(e,o,i)),o=Ur(e,t),o!=null&&r.push(Qr(e,o,i))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function iu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Ur(n,o),u!=null&&l.unshift(Qr(n,u,s))):i||(u=Ur(n,o),u!=null&&l.push(Qr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var $p=/\r\n?/g,bp=/\u0000|\uFFFD/g;function ou(e){return(typeof e=="string"?e:""+e).replace($p,`
`).replace(bp,"")}function Si(e,t,n){if(t=ou(t),ou(e)!==t&&n)throw Error(_(425))}function lo(){}var Zl=null,Gl=null;function Jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ql=typeof setTimeout=="function"?setTimeout:void 0,Dp=typeof clearTimeout=="function"?clearTimeout:void 0,lu=typeof Promise=="function"?Promise:void 0,Up=typeof queueMicrotask=="function"?queueMicrotask:typeof lu<"u"?function(e){return lu.resolve(null).then(e).catch(Ap)}:ql;function Ap(e){setTimeout(function(){throw e})}function cl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fr(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),Et="__reactFiber$"+sr,Yr="__reactProps$"+sr,$t="__reactContainer$"+sr,ea="__reactEvents$"+sr,Bp="__reactListeners$"+sr,Fp="__reactHandles$"+sr;function vn(e){var t=e[Et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=au(e);e!==null;){if(n=e[Et])return n;e=au(e)}return t}e=n,n=e.parentNode}return null}function si(e){return e=e[Et]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function jo(e){return e[Yr]||null}var ta=[],Un=-1;function cn(e){return{current:e}}function se(e){0>Un||(e.current=ta[Un],ta[Un]=null,Un--)}function oe(e,t){Un++,ta[Un]=e.current,e.current=t}var sn={},Ie=cn(sn),We=cn(!1),kn=sn;function qn(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function He(e){return e=e.childContextTypes,e!=null}function ao(){se(We),se(Ie)}function su(e,t,n){if(Ie.current!==sn)throw Error(_(168));oe(Ie,t),oe(We,n)}function Sd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,P1(e)||"Unknown",i));return fe({},n,r)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,kn=Ie.current,oe(Ie,e),oe(We,We.current),!0}function uu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Sd(e,t,kn),r.__reactInternalMemoizedMergedChildContext=e,se(We),se(Ie),oe(Ie,e)):se(We),oe(We,n)}var jt=null,To=!1,dl=!1;function Ed(e){jt===null?jt=[e]:jt.push(e)}function Vp(e){To=!0,Ed(e)}function dn(){if(!dl&&jt!==null){dl=!0;var e=0,t=re;try{var n=jt;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jt=null,To=!1}catch(i){throw jt!==null&&(jt=jt.slice(e+1)),Xc(Da,dn),i}finally{re=t,dl=!1}}return null}var An=[],Bn=0,uo=null,co=0,it=[],ot=0,Sn=null,Tt=1,Rt="";function mn(e,t){An[Bn++]=co,An[Bn++]=uo,uo=e,co=t}function Nd(e,t,n){it[ot++]=Tt,it[ot++]=Rt,it[ot++]=Sn,Sn=e;var r=Tt;e=Rt;var i=32-gt(r)-1;r&=~(1<<i),n+=1;var o=32-gt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Tt=1<<32-gt(t)+i|n<<i|r,Rt=o+e}else Tt=1<<o|n<<i|r,Rt=e}function Ya(e){e.return!==null&&(mn(e,1),Nd(e,1,0))}function Ka(e){for(;e===uo;)uo=An[--Bn],An[Bn]=null,co=An[--Bn],An[Bn]=null;for(;e===Sn;)Sn=it[--ot],it[ot]=null,Rt=it[--ot],it[ot]=null,Tt=it[--ot],it[ot]=null}var qe=null,Je=null,ue=!1,ht=null;function Pd(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Je=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sn!==null?{id:Tt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Je=null,!0):!1;default:return!1}}function na(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ra(e){if(ue){var t=Je;if(t){var n=t;if(!cu(e,t)){if(na(e))throw Error(_(418));t=qt(n.nextSibling);var r=qe;t&&cu(e,t)?Pd(r,n):(e.flags=e.flags&-4097|2,ue=!1,qe=e)}}else{if(na(e))throw Error(_(418));e.flags=e.flags&-4097|2,ue=!1,qe=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Ei(e){if(e!==qe)return!1;if(!ue)return du(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jl(e.type,e.memoizedProps)),t&&(t=Je)){if(na(e))throw _d(),Error(_(418));for(;t;)Pd(e,t),t=qt(t.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=qe?qt(e.stateNode.nextSibling):null;return!0}function _d(){for(var e=Je;e;)e=qt(e.nextSibling)}function er(){Je=qe=null,ue=!1}function Xa(e){ht===null?ht=[e]:ht.push(e)}var Wp=Ut.ReactCurrentBatchConfig;function pt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var fo=cn(null),po=null,Fn=null,Za=null;function Ga(){Za=Fn=po=null}function Ja(e){var t=fo.current;se(fo),e._currentValue=t}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){po=e,Za=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(Za!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(po===null)throw Error(_(308));Fn=e,po.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var yn=null;function qa(e){yn===null?yn=[e]:yn.push(e)}function Ld(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,qa(t)):(n.next=i.next,i.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function es(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,bt(e,n)}return i=r.interleaved,i===null?(t.next=t,qa(r)):(t.next=i.next,i.next=t),r.interleaved=t,bt(e,n)}function Fi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ua(e,n)}}function fu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mo(e,t,n,r){var i=e.updateQueue;Wt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==l&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=u))}if(o!==null){var v=i.baseState;l=0,g=c=u=null,s=o;do{var y=s.lane,w=s.eventTime;if((r&y)===y){g!==null&&(g=g.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var C=e,x=s;switch(y=t,w=n,x.tag){case 1:if(C=x.payload,typeof C=="function"){v=C.call(w,v,y);break e}v=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=x.payload,y=typeof C=="function"?C.call(w,v,y):C,y==null)break e;v=fe({},v,y);break e;case 2:Wt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[s]:y.push(s))}else w={eventTime:w,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=w,u=v):g=g.next=w,l|=y;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;y=s,s=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(g===null&&(u=v),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Nn|=l,e.lanes=l,e.memoizedState=v}}function pu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Md=new Lc.Component().refs;function oa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ro={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),i=nn(e),o=Ot(r,i);o.payload=t,n!=null&&(o.callback=n),t=en(e,o,i),t!==null&&(vt(t,e,i,r),Fi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),i=nn(e),o=Ot(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=en(e,o,i),t!==null&&(vt(t,e,i,r),Fi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=nn(e),i=Ot(n,r);i.tag=2,t!=null&&(i.callback=t),t=en(e,i,r),t!==null&&(vt(t,e,r,n),Fi(t,e,r))}};function mu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Wr(n,r)||!Wr(i,o):!0}function jd(e,t,n){var r=!1,i=sn,o=t.contextType;return typeof o=="object"&&o!==null?o=st(o):(i=He(t)?kn:Ie.current,r=t.contextTypes,o=(r=r!=null)?qn(e,i):sn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function hu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ro.enqueueReplaceState(t,t.state,null)}function la(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Md,es(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=st(o):(o=He(t)?kn:Ie.current,i.context=qn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(oa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ro.enqueueReplaceState(i,i.state,null),mo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===Md&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Ni(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gu(e){var t=e._init;return t(e._payload)}function Td(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=rn(f,d),f.index=0,f.sibling=null,f}function o(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,h,k){return d===null||d.tag!==6?(d=yl(h,f.mode,k),d.return=f,d):(d=i(d,h),d.return=f,d)}function u(f,d,h,k){var E=h.type;return E===On?g(f,d,h.props.children,k,h.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Vt&&gu(E)===d.type)?(k=i(d,h.props),k.ref=yr(f,d,h),k.return=f,k):(k=Ki(h.type,h.key,h.props,null,f.mode,k),k.ref=yr(f,d,h),k.return=f,k)}function c(f,d,h,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=xl(h,f.mode,k),d.return=f,d):(d=i(d,h.children||[]),d.return=f,d)}function g(f,d,h,k,E){return d===null||d.tag!==7?(d=Cn(h,f.mode,k,E),d.return=f,d):(d=i(d,h),d.return=f,d)}function v(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=yl(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case mi:return h=Ki(d.type,d.key,d.props,null,f.mode,h),h.ref=yr(f,null,d),h.return=f,h;case Rn:return d=xl(d,f.mode,h),d.return=f,d;case Vt:var k=d._init;return v(f,k(d._payload),h)}if(Er(d)||pr(d))return d=Cn(d,f.mode,h,null),d.return=f,d;Ni(f,d)}return null}function y(f,d,h,k){var E=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:s(f,d,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case mi:return h.key===E?u(f,d,h,k):null;case Rn:return h.key===E?c(f,d,h,k):null;case Vt:return E=h._init,y(f,d,E(h._payload),k)}if(Er(h)||pr(h))return E!==null?null:g(f,d,h,k,null);Ni(f,h)}return null}function w(f,d,h,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(h)||null,s(d,f,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case mi:return f=f.get(k.key===null?h:k.key)||null,u(d,f,k,E);case Rn:return f=f.get(k.key===null?h:k.key)||null,c(d,f,k,E);case Vt:var P=k._init;return w(f,d,h,P(k._payload),E)}if(Er(k)||pr(k))return f=f.get(h)||null,g(d,f,k,E,null);Ni(d,k)}return null}function C(f,d,h,k){for(var E=null,P=null,S=d,M=d=0,z=null;S!==null&&M<h.length;M++){S.index>M?(z=S,S=null):z=S.sibling;var j=y(f,S,h[M],k);if(j===null){S===null&&(S=z);break}e&&S&&j.alternate===null&&t(f,S),d=o(j,d,M),P===null?E=j:P.sibling=j,P=j,S=z}if(M===h.length)return n(f,S),ue&&mn(f,M),E;if(S===null){for(;M<h.length;M++)S=v(f,h[M],k),S!==null&&(d=o(S,d,M),P===null?E=S:P.sibling=S,P=S);return ue&&mn(f,M),E}for(S=r(f,S);M<h.length;M++)z=w(S,f,M,h[M],k),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?M:z.key),d=o(z,d,M),P===null?E=z:P.sibling=z,P=z);return e&&S.forEach(function(U){return t(f,U)}),ue&&mn(f,M),E}function x(f,d,h,k){var E=pr(h);if(typeof E!="function")throw Error(_(150));if(h=E.call(h),h==null)throw Error(_(151));for(var P=E=null,S=d,M=d=0,z=null,j=h.next();S!==null&&!j.done;M++,j=h.next()){S.index>M?(z=S,S=null):z=S.sibling;var U=y(f,S,j.value,k);if(U===null){S===null&&(S=z);break}e&&S&&U.alternate===null&&t(f,S),d=o(U,d,M),P===null?E=U:P.sibling=U,P=U,S=z}if(j.done)return n(f,S),ue&&mn(f,M),E;if(S===null){for(;!j.done;M++,j=h.next())j=v(f,j.value,k),j!==null&&(d=o(j,d,M),P===null?E=j:P.sibling=j,P=j);return ue&&mn(f,M),E}for(S=r(f,S);!j.done;M++,j=h.next())j=w(S,f,M,j.value,k),j!==null&&(e&&j.alternate!==null&&S.delete(j.key===null?M:j.key),d=o(j,d,M),P===null?E=j:P.sibling=j,P=j);return e&&S.forEach(function(A){return t(f,A)}),ue&&mn(f,M),E}function N(f,d,h,k){if(typeof h=="object"&&h!==null&&h.type===On&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case mi:e:{for(var E=h.key,P=d;P!==null;){if(P.key===E){if(E=h.type,E===On){if(P.tag===7){n(f,P.sibling),d=i(P,h.props.children),d.return=f,f=d;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Vt&&gu(E)===P.type){n(f,P.sibling),d=i(P,h.props),d.ref=yr(f,P,h),d.return=f,f=d;break e}n(f,P);break}else t(f,P);P=P.sibling}h.type===On?(d=Cn(h.props.children,f.mode,k,h.key),d.return=f,f=d):(k=Ki(h.type,h.key,h.props,null,f.mode,k),k.ref=yr(f,d,h),k.return=f,f=k)}return l(f);case Rn:e:{for(P=h.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(f,d.sibling),d=i(d,h.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=xl(h,f.mode,k),d.return=f,f=d}return l(f);case Vt:return P=h._init,N(f,d,P(h._payload),k)}if(Er(h))return C(f,d,h,k);if(pr(h))return x(f,d,h,k);Ni(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,h),d.return=f,f=d):(n(f,d),d=yl(h,f.mode,k),d.return=f,f=d),l(f)):n(f,d)}return N}var tr=Td(!0),Rd=Td(!1),ui={},_t=cn(ui),Kr=cn(ui),Xr=cn(ui);function xn(e){if(e===ui)throw Error(_(174));return e}function ts(e,t){switch(oe(Xr,t),oe(Kr,e),oe(_t,ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dl(t,e)}se(_t),oe(_t,t)}function nr(){se(_t),se(Kr),se(Xr)}function Od(e){xn(Xr.current);var t=xn(_t.current),n=Dl(t,e.type);t!==n&&(oe(Kr,e),oe(_t,n))}function ns(e){Kr.current===e&&(se(_t),se(Kr))}var ce=cn(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fl=[];function rs(){for(var e=0;e<fl.length;e++)fl[e]._workInProgressVersionPrimary=null;fl.length=0}var Vi=Ut.ReactCurrentDispatcher,pl=Ut.ReactCurrentBatchConfig,En=0,de=null,we=null,Ee=null,go=!1,Tr=!1,Zr=0,Hp=0;function je(){throw Error(_(321))}function is(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function os(e,t,n,r,i,o){if(En=o,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vi.current=e===null||e.memoizedState===null?Xp:Zp,e=n(r,i),Tr){o=0;do{if(Tr=!1,Zr=0,25<=o)throw Error(_(301));o+=1,Ee=we=null,t.updateQueue=null,Vi.current=Gp,e=n(r,i)}while(Tr)}if(Vi.current=vo,t=we!==null&&we.next!==null,En=0,Ee=we=de=null,go=!1,t)throw Error(_(300));return e}function ls(){var e=Zr!==0;return Zr=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?de.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function ut(){if(we===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Ee===null?de.memoizedState:Ee.next;if(t!==null)Ee=t,we=e;else{if(e===null)throw Error(_(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ee===null?de.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Gr(e,t){return typeof t=="function"?t(e):t}function ml(e){var t=ut(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=we,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var g=c.lane;if((En&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var v={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=v,l=r):u=u.next=v,de.lanes|=g,Nn|=g}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,xt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,de.lanes|=o,Nn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hl(e){var t=ut(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);xt(o,t.memoizedState)||(Ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Id(){}function $d(e,t){var n=de,r=ut(),i=t(),o=!xt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ve=!0),r=r.queue,as(Ud.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Jr(9,Dd.bind(null,n,r,i,t),void 0,null),Ne===null)throw Error(_(349));En&30||bd(n,t,i)}return i}function bd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Dd(e,t,n,r){t.value=n,t.getSnapshot=r,Ad(t)&&Bd(e)}function Ud(e,t,n){return n(function(){Ad(t)&&Bd(e)})}function Ad(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function Bd(e){var t=bt(e,1);t!==null&&vt(t,e,1,-1)}function vu(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:e},t.queue=e,e=e.dispatch=Kp.bind(null,de,e),[t.memoizedState,e]}function Jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fd(){return ut().memoizedState}function Wi(e,t,n,r){var i=Ct();de.flags|=e,i.memoizedState=Jr(1|t,n,void 0,r===void 0?null:r)}function Oo(e,t,n,r){var i=ut();r=r===void 0?null:r;var o=void 0;if(we!==null){var l=we.memoizedState;if(o=l.destroy,r!==null&&is(r,l.deps)){i.memoizedState=Jr(t,n,o,r);return}}de.flags|=e,i.memoizedState=Jr(1|t,n,o,r)}function yu(e,t){return Wi(8390656,8,e,t)}function as(e,t){return Oo(2048,8,e,t)}function Vd(e,t){return Oo(4,2,e,t)}function Wd(e,t){return Oo(4,4,e,t)}function Hd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qd(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4,4,Hd.bind(null,t,e),n)}function ss(){}function Yd(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&is(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kd(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&is(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xd(e,t,n){return En&21?(xt(n,t)||(n=Jc(),de.lanes|=n,Nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function Qp(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=pl.transition;pl.transition={};try{e(!1),t()}finally{re=n,pl.transition=r}}function Zd(){return ut().memoizedState}function Yp(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gd(e))Jd(t,n);else if(n=Ld(e,t,n,r),n!==null){var i=be();vt(n,e,r,i),qd(n,t,r)}}function Kp(e,t,n){var r=nn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gd(e))Jd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,xt(s,l)){var u=t.interleaved;u===null?(i.next=i,qa(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Ld(e,t,i,r),n!==null&&(i=be(),vt(n,e,r,i),qd(n,t,r))}}function Gd(e){var t=e.alternate;return e===de||t!==null&&t===de}function Jd(e,t){Tr=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ua(e,n)}}var vo={readContext:st,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Xp={readContext:st,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:yu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wi(4194308,4,Hd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wi(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yp.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:vu,useDebugValue:ss,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=vu(!1),t=e[0];return e=Qp.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=Ct();if(ue){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Ne===null)throw Error(_(349));En&30||bd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,yu(Ud.bind(null,r,o,e),[e]),r.flags|=2048,Jr(9,Dd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ct(),t=Ne.identifierPrefix;if(ue){var n=Rt,r=Tt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zp={readContext:st,useCallback:Yd,useContext:st,useEffect:as,useImperativeHandle:Qd,useInsertionEffect:Vd,useLayoutEffect:Wd,useMemo:Kd,useReducer:ml,useRef:Fd,useState:function(){return ml(Gr)},useDebugValue:ss,useDeferredValue:function(e){var t=ut();return Xd(t,we.memoizedState,e)},useTransition:function(){var e=ml(Gr)[0],t=ut().memoizedState;return[e,t]},useMutableSource:Id,useSyncExternalStore:$d,useId:Zd,unstable_isNewReconciler:!1},Gp={readContext:st,useCallback:Yd,useContext:st,useEffect:as,useImperativeHandle:Qd,useInsertionEffect:Vd,useLayoutEffect:Wd,useMemo:Kd,useReducer:hl,useRef:Fd,useState:function(){return hl(Gr)},useDebugValue:ss,useDeferredValue:function(e){var t=ut();return we===null?t.memoizedState=e:Xd(t,we.memoizedState,e)},useTransition:function(){var e=hl(Gr)[0],t=ut().memoizedState;return[e,t]},useMutableSource:Id,useSyncExternalStore:$d,useId:Zd,unstable_isNewReconciler:!1};function rr(e,t){try{var n="",r=t;do n+=N1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function aa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Jp=typeof WeakMap=="function"?WeakMap:Map;function ef(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xo||(xo=!0,va=r),aa(e,t)},n}function tf(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){aa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){aa(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function xu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Jp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=f0.bind(null,e,t,n),t.then(e,e))}function wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var qp=Ut.ReactCurrentOwner,Ve=!1;function $e(e,t,n,r){t.child=e===null?Rd(t,null,n,r):tr(t,e.child,n,r)}function ku(e,t,n,r,i){n=n.render;var o=t.ref;return Xn(t,i),r=os(e,t,n,r,o,i),n=ls(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(ue&&n&&Ya(t),t.flags|=1,$e(e,t,r,i),t.child)}function Su(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!gs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,nf(e,t,o,r,i)):(e=Ki(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Wr,n(l,r)&&e.ref===t.ref)return Dt(e,t,i)}return t.flags|=1,e=rn(o,r),e.ref=t.ref,e.return=t,t.child=e}function nf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Wr(o,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Dt(e,t,i)}return sa(e,t,n,r,i)}function rf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Wn,Ze),Ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(Wn,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,oe(Wn,Ze),Ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,oe(Wn,Ze),Ze|=r;return $e(e,t,i,n),t.child}function of(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function sa(e,t,n,r,i){var o=He(n)?kn:Ie.current;return o=qn(t,o),Xn(t,i),n=os(e,t,n,r,o,i),r=ls(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(ue&&r&&Ya(t),t.flags|=1,$e(e,t,n,i),t.child)}function Eu(e,t,n,r,i){if(He(n)){var o=!0;so(t)}else o=!1;if(Xn(t,i),t.stateNode===null)Hi(e,t),jd(t,n,r),la(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=st(c):(c=He(n)?kn:Ie.current,c=qn(t,c));var g=n.getDerivedStateFromProps,v=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&hu(t,l,r,c),Wt=!1;var y=t.memoizedState;l.state=y,mo(t,r,l,i),u=t.memoizedState,s!==r||y!==u||We.current||Wt?(typeof g=="function"&&(oa(t,n,g,r),u=t.memoizedState),(s=Wt||mu(t,n,s,r,y,u,c))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,zd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:pt(t.type,s),l.props=c,v=t.pendingProps,y=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=st(u):(u=He(n)?kn:Ie.current,u=qn(t,u));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==v||y!==u)&&hu(t,l,r,u),Wt=!1,y=t.memoizedState,l.state=y,mo(t,r,l,i);var C=t.memoizedState;s!==v||y!==C||We.current||Wt?(typeof w=="function"&&(oa(t,n,w,r),C=t.memoizedState),(c=Wt||mu(t,n,c,r,y,C,u)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,C,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,C,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),l.props=r,l.state=C,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return ua(e,t,n,r,o,i)}function ua(e,t,n,r,i,o){of(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&uu(t,n,!1),Dt(e,t,o);r=t.stateNode,qp.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=tr(t,e.child,null,o),t.child=tr(t,null,s,o)):$e(e,t,s,o),t.memoizedState=r.state,i&&uu(t,n,!0),t.child}function lf(e){var t=e.stateNode;t.pendingContext?su(e,t.pendingContext,t.pendingContext!==t.context):t.context&&su(e,t.context,!1),ts(e,t.containerInfo)}function Nu(e,t,n,r,i){return er(),Xa(i),t.flags|=256,$e(e,t,n,r),t.child}var ca={dehydrated:null,treeContext:null,retryLane:0};function da(e){return{baseLanes:e,cachePool:null,transitions:null}}function af(e,t,n){var r=t.pendingProps,i=ce.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),oe(ce,i&1),e===null)return ra(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=bo(l,r,0,null),e=Cn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=da(n),t.memoizedState=ca,e):us(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return e0(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=rn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=rn(s,o):(o=Cn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?da(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ca,r}return o=e.child,e=o.sibling,r=rn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function us(e,t){return t=bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pi(e,t,n,r){return r!==null&&Xa(r),tr(t,e.child,null,n),e=us(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function e0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=gl(Error(_(422))),Pi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=bo({mode:"visible",children:r.children},i,0,null),o=Cn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&tr(t,e.child,null,l),t.child.memoizedState=da(l),t.memoizedState=ca,o);if(!(t.mode&1))return Pi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(_(419)),r=gl(o,r,void 0),Pi(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ve||s){if(r=Ne,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,bt(e,i),vt(r,e,i,-1))}return hs(),r=gl(Error(_(421))),Pi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=p0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Je=qt(i.nextSibling),qe=t,ue=!0,ht=null,e!==null&&(it[ot++]=Tt,it[ot++]=Rt,it[ot++]=Sn,Tt=e.id,Rt=e.overflow,Sn=t),t=us(t,r.children),t.flags|=4096,t)}function Pu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function vl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function sf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if($e(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pu(e,n,t);else if(e.tag===19)Pu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vl(t,!0,n,null,o);break;case"together":vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function t0(e,t,n){switch(t.tag){case 3:lf(t),er();break;case 5:Od(t);break;case 1:He(t.type)&&so(t);break;case 4:ts(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;oe(fo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?af(e,t,n):(oe(ce,ce.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);oe(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,rf(e,t,n)}return Dt(e,t,n)}var uf,fa,cf,df;uf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fa=function(){};cf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,xn(_t.current);var o=null;switch(n){case"input":i=Ol(e,i),r=Ol(e,r),o=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),o=[];break;case"textarea":i=bl(e,i),r=bl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=lo)}Ul(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(br.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(br.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ae("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};df=function(e,t,n,r){n!==r&&(t.flags|=4)};function xr(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function n0(e,t,n){var r=t.pendingProps;switch(Ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return He(t.type)&&ao(),Te(t),null;case 3:return r=t.stateNode,nr(),se(We),se(Ie),rs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(wa(ht),ht=null))),fa(e,t),Te(t),null;case 5:ns(t);var i=xn(Xr.current);if(n=t.type,e!==null&&t.stateNode!=null)cf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Te(t),null}if(e=xn(_t.current),Ei(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Et]=t,r[Yr]=o,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<Pr.length;i++)ae(Pr[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":Is(r,o),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ae("invalid",r);break;case"textarea":bs(r,o),ae("invalid",r)}Ul(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Si(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Si(r.textContent,s,e),i=["children",""+s]):br.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ae("scroll",r)}switch(n){case"input":hi(r),$s(r,o,!0);break;case"textarea":hi(r),Ds(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=lo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Et]=t,e[Yr]=r,uf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Al(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<Pr.length;i++)ae(Pr[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":Is(e,r),i=Ol(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),ae("invalid",e);break;case"textarea":bs(e,r),i=bl(e,r),ae("invalid",e);break;default:i=r}Ul(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Ac(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Dc(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Dr(e,u):typeof u=="number"&&Dr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(br.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ae("scroll",e):u!=null&&Ra(e,o,u,l))}switch(n){case"input":hi(e),$s(e,r,!1);break;case"textarea":hi(e),Ds(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Hn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)df(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=xn(Xr.current),xn(_t.current),Ei(t)){if(r=t.stateNode,n=t.memoizedProps,r[Et]=t,(o=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Si(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Si(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Et]=t,t.stateNode=r}return Te(t),null;case 13:if(se(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&Je!==null&&t.mode&1&&!(t.flags&128))_d(),er(),t.flags|=98560,o=!1;else if(o=Ei(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[Et]=t}else er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else ht!==null&&(wa(ht),ht=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?Ce===0&&(Ce=3):hs())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return nr(),fa(e,t),e===null&&Hr(t.stateNode.containerInfo),Te(t),null;case 10:return Ja(t.type._context),Te(t),null;case 17:return He(t.type)&&ao(),Te(t),null;case 19:if(se(ce),o=t.memoizedState,o===null)return Te(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)xr(o,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ho(e),l!==null){for(t.flags|=128,xr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(ce,ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&he()>ir&&(t.flags|=128,r=!0,xr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ho(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ue)return Te(t),null}else 2*he()-o.renderingStartTime>ir&&n!==1073741824&&(t.flags|=128,r=!0,xr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,n=ce.current,oe(ce,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return ms(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ze&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function r0(e,t){switch(Ka(t),t.tag){case 1:return He(t.type)&&ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nr(),se(We),se(Ie),rs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ns(t),null;case 13:if(se(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ce),null;case 4:return nr(),null;case 10:return Ja(t.type._context),null;case 22:case 23:return ms(),null;case 24:return null;default:return null}}var _i=!1,Oe=!1,i0=typeof WeakSet=="function"?WeakSet:Set,O=null;function Vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function pa(e,t,n){try{n()}catch(r){me(e,t,r)}}var _u=!1;function o0(e,t){if(Zl=ro,e=md(),Qa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,g=0,v=e,y=null;t:for(;;){for(var w;v!==n||i!==0&&v.nodeType!==3||(s=l+i),v!==o||r!==0&&v.nodeType!==3||(u=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(w=v.firstChild)!==null;)y=v,v=w;for(;;){if(v===e)break t;if(y===n&&++c===i&&(s=l),y===o&&++g===r&&(u=l),(w=v.nextSibling)!==null)break;v=y,y=v.parentNode}v=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gl={focusedElem:e,selectionRange:n},ro=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var x=C.memoizedProps,N=C.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:pt(t.type,x),N);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(k){me(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return C=_u,_u=!1,C}function Rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&pa(t,n,o)}i=i.next}while(i!==r)}}function Io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ma(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ff(e){var t=e.alternate;t!==null&&(e.alternate=null,ff(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[Yr],delete t[ea],delete t[Bp],delete t[Fp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pf(e){return e.tag===5||e.tag===3||e.tag===4}function Lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=lo));else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}function ga(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ga(e,t,n),e=e.sibling;e!==null;)ga(e,t,n),e=e.sibling}var Pe=null,mt=!1;function Bt(e,t,n){for(n=n.child;n!==null;)mf(e,t,n),n=n.sibling}function mf(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(_o,n)}catch{}switch(n.tag){case 5:Oe||Vn(n,t);case 6:var r=Pe,i=mt;Pe=null,Bt(e,t,n),Pe=r,mt=i,Pe!==null&&(mt?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(mt?(e=Pe,n=n.stateNode,e.nodeType===8?cl(e.parentNode,n):e.nodeType===1&&cl(e,n),Fr(e)):cl(Pe,n.stateNode));break;case 4:r=Pe,i=mt,Pe=n.stateNode.containerInfo,mt=!0,Bt(e,t,n),Pe=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&pa(n,t,l),i=i.next}while(i!==r)}Bt(e,t,n);break;case 1:if(!Oe&&(Vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){me(n,t,s)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,Bt(e,t,n),Oe=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new i0),t.forEach(function(r){var i=m0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Pe=s.stateNode,mt=!1;break e;case 3:Pe=s.stateNode.containerInfo,mt=!0;break e;case 4:Pe=s.stateNode.containerInfo,mt=!0;break e}s=s.return}if(Pe===null)throw Error(_(160));mf(o,l,i),Pe=null,mt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){me(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hf(t,e),t=t.sibling}function hf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),wt(e),r&4){try{Rr(3,e,e.return),Io(3,e)}catch(x){me(e,e.return,x)}try{Rr(5,e,e.return)}catch(x){me(e,e.return,x)}}break;case 1:ft(t,e),wt(e),r&512&&n!==null&&Vn(n,n.return);break;case 5:if(ft(t,e),wt(e),r&512&&n!==null&&Vn(n,n.return),e.flags&32){var i=e.stateNode;try{Dr(i,"")}catch(x){me(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Ic(i,o),Al(s,l);var c=Al(s,o);for(l=0;l<u.length;l+=2){var g=u[l],v=u[l+1];g==="style"?Ac(i,v):g==="dangerouslySetInnerHTML"?Dc(i,v):g==="children"?Dr(i,v):Ra(i,g,v,c)}switch(s){case"input":Il(i,o);break;case"textarea":$c(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Hn(i,!!o.multiple,w,!1):y!==!!o.multiple&&(o.defaultValue!=null?Hn(i,!!o.multiple,o.defaultValue,!0):Hn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Yr]=o}catch(x){me(e,e.return,x)}}break;case 6:if(ft(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){me(e,e.return,x)}}break;case 3:if(ft(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(x){me(e,e.return,x)}break;case 4:ft(t,e),wt(e);break;case 13:ft(t,e),wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(fs=he())),r&4&&zu(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(c=Oe)||g,ft(t,e),Oe=c):ft(t,e),wt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(O=e,g=e.child;g!==null;){for(v=O=g;O!==null;){switch(y=O,w=y.child,y.tag){case 0:case 11:case 14:case 15:Rr(4,y,y.return);break;case 1:Vn(y,y.return);var C=y.stateNode;if(typeof C.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(x){me(r,n,x)}}break;case 5:Vn(y,y.return);break;case 22:if(y.memoizedState!==null){ju(v);continue}}w!==null?(w.return=y,O=w):ju(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{i=v.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=v.stateNode,u=v.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Uc("display",l))}catch(x){me(e,e.return,x)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(x){me(e,e.return,x)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ft(t,e),wt(e),r&4&&zu(e);break;case 21:break;default:ft(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(pf(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Dr(i,""),r.flags&=-33);var o=Lu(e);ga(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Lu(e);ha(e,s,l);break;default:throw Error(_(161))}}catch(u){me(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function l0(e,t,n){O=e,gf(e)}function gf(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||_i;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||Oe;s=_i;var c=Oe;if(_i=l,(Oe=u)&&!c)for(O=i;O!==null;)l=O,u=l.child,l.tag===22&&l.memoizedState!==null?Tu(i):u!==null?(u.return=l,O=u):Tu(i);for(;o!==null;)O=o,gf(o),o=o.sibling;O=i,_i=s,Oe=c}Mu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):Mu(e)}}function Mu(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||Io(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&pu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&Fr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Oe||t.flags&512&&ma(t)}catch(y){me(t,t.return,y)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function ju(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Tu(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Io(4,t)}catch(u){me(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){me(t,i,u)}}var o=t.return;try{ma(t)}catch(u){me(t,o,u)}break;case 5:var l=t.return;try{ma(t)}catch(u){me(t,l,u)}}}catch(u){me(t,t.return,u)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var a0=Math.ceil,yo=Ut.ReactCurrentDispatcher,cs=Ut.ReactCurrentOwner,at=Ut.ReactCurrentBatchConfig,X=0,Ne=null,ve=null,ze=0,Ze=0,Wn=cn(0),Ce=0,qr=null,Nn=0,$o=0,ds=0,Or=null,Fe=null,fs=0,ir=1/0,Mt=null,xo=!1,va=null,tn=null,Li=!1,Kt=null,wo=0,Ir=0,ya=null,Qi=-1,Yi=0;function be(){return X&6?he():Qi!==-1?Qi:Qi=he()}function nn(e){return e.mode&1?X&2&&ze!==0?ze&-ze:Wp.transition!==null?(Yi===0&&(Yi=Jc()),Yi):(e=re,e!==0||(e=window.event,e=e===void 0?16:od(e.type)),e):1}function vt(e,t,n,r){if(50<Ir)throw Ir=0,ya=null,Error(_(185));li(e,n,r),(!(X&2)||e!==Ne)&&(e===Ne&&(!(X&2)&&($o|=n),Ce===4&&Qt(e,ze)),Qe(e,r),n===1&&X===0&&!(t.mode&1)&&(ir=he()+500,To&&dn()))}function Qe(e,t){var n=e.callbackNode;W1(e,t);var r=no(e,e===Ne?ze:0);if(r===0)n!==null&&Bs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bs(n),t===1)e.tag===0?Vp(Ru.bind(null,e)):Ed(Ru.bind(null,e)),Up(function(){!(X&6)&&dn()}),n=null;else{switch(qc(r)){case 1:n=Da;break;case 4:n=Zc;break;case 16:n=to;break;case 536870912:n=Gc;break;default:n=to}n=Ef(n,vf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vf(e,t){if(Qi=-1,Yi=0,X&6)throw Error(_(327));var n=e.callbackNode;if(Zn()&&e.callbackNode!==n)return null;var r=no(e,e===Ne?ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Co(e,r);else{t=r;var i=X;X|=2;var o=xf();(Ne!==e||ze!==t)&&(Mt=null,ir=he()+500,wn(e,t));do try{c0();break}catch(s){yf(e,s)}while(1);Ga(),yo.current=o,X=i,ve!==null?t=0:(Ne=null,ze=0,t=Ce)}if(t!==0){if(t===2&&(i=Hl(e),i!==0&&(r=i,t=xa(e,i))),t===1)throw n=qr,wn(e,0),Qt(e,r),Qe(e,he()),n;if(t===6)Qt(e,r);else{if(i=e.current.alternate,!(r&30)&&!s0(i)&&(t=Co(e,r),t===2&&(o=Hl(e),o!==0&&(r=o,t=xa(e,o))),t===1))throw n=qr,wn(e,0),Qt(e,r),Qe(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:hn(e,Fe,Mt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=fs+500-he(),10<t)){if(no(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ql(hn.bind(null,e,Fe,Mt),t);break}hn(e,Fe,Mt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-gt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*a0(r/1960))-r,10<r){e.timeoutHandle=ql(hn.bind(null,e,Fe,Mt),r);break}hn(e,Fe,Mt);break;case 5:hn(e,Fe,Mt);break;default:throw Error(_(329))}}}return Qe(e,he()),e.callbackNode===n?vf.bind(null,e):null}function xa(e,t){var n=Or;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=Co(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&wa(t)),e}function wa(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function s0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!xt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~ds,t&=~$o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function Ru(e){if(X&6)throw Error(_(327));Zn();var t=no(e,0);if(!(t&1))return Qe(e,he()),null;var n=Co(e,t);if(e.tag!==0&&n===2){var r=Hl(e);r!==0&&(t=r,n=xa(e,r))}if(n===1)throw n=qr,wn(e,0),Qt(e,t),Qe(e,he()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,Fe,Mt),Qe(e,he()),null}function ps(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(ir=he()+500,To&&dn())}}function Pn(e){Kt!==null&&Kt.tag===0&&!(X&6)&&Zn();var t=X;X|=1;var n=at.transition,r=re;try{if(at.transition=null,re=1,e)return e()}finally{re=r,at.transition=n,X=t,!(X&6)&&dn()}}function ms(){Ze=Wn.current,se(Wn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dp(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(Ka(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:nr(),se(We),se(Ie),rs();break;case 5:ns(r);break;case 4:nr();break;case 13:se(ce);break;case 19:se(ce);break;case 10:Ja(r.type._context);break;case 22:case 23:ms()}n=n.return}if(Ne=e,ve=e=rn(e.current,null),ze=Ze=t,Ce=0,qr=null,ds=$o=Nn=0,Fe=Or=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}yn=null}return e}function yf(e,t){do{var n=ve;try{if(Ga(),Vi.current=vo,go){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}go=!1}if(En=0,Ee=we=de=null,Tr=!1,Zr=0,cs.current=null,n===null||n.return===null){Ce=1,qr=t,ve=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=ze,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=s,v=g.tag;if(!(g.mode&1)&&(v===0||v===11||v===15)){var y=g.alternate;y?(g.updateQueue=y.updateQueue,g.memoizedState=y.memoizedState,g.lanes=y.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=wu(l);if(w!==null){w.flags&=-257,Cu(w,l,s,o,t),w.mode&1&&xu(o,c,t),t=w,u=c;var C=t.updateQueue;if(C===null){var x=new Set;x.add(u),t.updateQueue=x}else C.add(u);break e}else{if(!(t&1)){xu(o,c,t),hs();break e}u=Error(_(426))}}else if(ue&&s.mode&1){var N=wu(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Cu(N,l,s,o,t),Xa(rr(u,s));break e}}o=u=rr(u,s),Ce!==4&&(Ce=2),Or===null?Or=[o]:Or.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=ef(o,u,t);fu(o,f);break e;case 1:s=u;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(tn===null||!tn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=tf(o,s,t);fu(o,k);break e}}o=o.return}while(o!==null)}Cf(n)}catch(E){t=E,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(1)}function xf(){var e=yo.current;return yo.current=vo,e===null?vo:e}function hs(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Ne===null||!(Nn&268435455)&&!($o&268435455)||Qt(Ne,ze)}function Co(e,t){var n=X;X|=2;var r=xf();(Ne!==e||ze!==t)&&(Mt=null,wn(e,t));do try{u0();break}catch(i){yf(e,i)}while(1);if(Ga(),X=n,yo.current=r,ve!==null)throw Error(_(261));return Ne=null,ze=0,Ce}function u0(){for(;ve!==null;)wf(ve)}function c0(){for(;ve!==null&&!I1();)wf(ve)}function wf(e){var t=Sf(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Cf(e):ve=t,cs.current=null}function Cf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=r0(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,ve=null;return}}else if(n=n0(n,t,Ze),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);Ce===0&&(Ce=5)}function hn(e,t,n){var r=re,i=at.transition;try{at.transition=null,re=1,d0(e,t,n,r)}finally{at.transition=i,re=r}return null}function d0(e,t,n,r){do Zn();while(Kt!==null);if(X&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(H1(e,o),e===Ne&&(ve=Ne=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Li||(Li=!0,Ef(to,function(){return Zn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=at.transition,at.transition=null;var l=re;re=1;var s=X;X|=4,cs.current=null,o0(e,n),hf(n,e),jp(Gl),ro=!!Zl,Gl=Zl=null,e.current=n,l0(n),$1(),X=s,re=l,at.transition=o}else e.current=n;if(Li&&(Li=!1,Kt=e,wo=i),o=e.pendingLanes,o===0&&(tn=null),U1(n.stateNode),Qe(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xo)throw xo=!1,e=va,va=null,e;return wo&1&&e.tag!==0&&Zn(),o=e.pendingLanes,o&1?e===ya?Ir++:(Ir=0,ya=e):Ir=0,dn(),null}function Zn(){if(Kt!==null){var e=qc(wo),t=at.transition,n=re;try{if(at.transition=null,re=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,wo=0,X&6)throw Error(_(331));var i=X;for(X|=4,O=e.current;O!==null;){var o=O,l=o.child;if(O.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(O=c;O!==null;){var g=O;switch(g.tag){case 0:case 11:case 15:Rr(8,g,o)}var v=g.child;if(v!==null)v.return=g,O=v;else for(;O!==null;){g=O;var y=g.sibling,w=g.return;if(ff(g),g===c){O=null;break}if(y!==null){y.return=w,O=y;break}O=w}}}var C=o.alternate;if(C!==null){var x=C.child;if(x!==null){C.child=null;do{var N=x.sibling;x.sibling=null,x=N}while(x!==null)}}O=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,O=l;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Rr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,O=f;break e}O=o.return}}var d=e.current;for(O=d;O!==null;){l=O;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,O=h;else e:for(l=d;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Io(9,s)}}catch(E){me(s,s.return,E)}if(s===l){O=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,O=k;break e}O=s.return}}if(X=i,dn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(_o,e)}catch{}r=!0}return r}finally{re=n,at.transition=t}}return!1}function Ou(e,t,n){t=rr(n,t),t=ef(e,t,1),e=en(e,t,1),t=be(),e!==null&&(li(e,1,t),Qe(e,t))}function me(e,t,n){if(e.tag===3)Ou(e,e,n);else for(;t!==null;){if(t.tag===3){Ou(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=rr(n,e),e=tf(t,e,1),t=en(t,e,1),e=be(),t!==null&&(li(t,1,e),Qe(t,e));break}}t=t.return}}function f0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(ze&n)===n&&(Ce===4||Ce===3&&(ze&130023424)===ze&&500>he()-fs?wn(e,0):ds|=n),Qe(e,t)}function kf(e,t){t===0&&(e.mode&1?(t=yi,yi<<=1,!(yi&130023424)&&(yi=4194304)):t=1);var n=be();e=bt(e,t),e!==null&&(li(e,t,n),Qe(e,n))}function p0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kf(e,n)}function m0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),kf(e,n)}var Sf;Sf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,t0(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,ue&&t.flags&1048576&&Nd(t,co,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hi(e,t),e=t.pendingProps;var i=qn(t,Ie.current);Xn(t,n),i=os(null,t,r,e,i,n);var o=ls();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(o=!0,so(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,es(t),i.updater=Ro,t.stateNode=i,i._reactInternals=t,la(t,r,e,n),t=ua(null,t,r,!0,o,n)):(t.tag=0,ue&&o&&Ya(t),$e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=g0(r),e=pt(r,e),i){case 0:t=sa(null,t,r,e,n);break e;case 1:t=Eu(null,t,r,e,n);break e;case 11:t=ku(null,t,r,e,n);break e;case 14:t=Su(null,t,r,pt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),sa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Eu(e,t,r,i,n);case 3:e:{if(lf(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,zd(e,t),mo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=rr(Error(_(423)),t),t=Nu(e,t,r,n,i);break e}else if(r!==i){i=rr(Error(_(424)),t),t=Nu(e,t,r,n,i);break e}else for(Je=qt(t.stateNode.containerInfo.firstChild),qe=t,ue=!0,ht=null,n=Rd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),r===i){t=Dt(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return Od(t),e===null&&ra(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Jl(r,i)?l=null:o!==null&&Jl(r,o)&&(t.flags|=32),of(e,t),$e(e,t,l,n),t.child;case 6:return e===null&&ra(t),null;case 13:return af(e,t,n);case 4:return ts(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tr(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),ku(e,t,r,i,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,oe(fo,r._currentValue),r._currentValue=l,o!==null)if(xt(o.value,l)){if(o.children===i.children&&!We.current){t=Dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Ot(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ia(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(_(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ia(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}$e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xn(t,n),i=st(i),r=r(i),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,i=pt(r,t.pendingProps),i=pt(r.type,i),Su(e,t,r,i,n);case 15:return nf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Hi(e,t),t.tag=1,He(r)?(e=!0,so(t)):e=!1,Xn(t,n),jd(t,r,i),la(t,r,i,n),ua(null,t,r,!0,e,n);case 19:return sf(e,t,n);case 22:return rf(e,t,n)}throw Error(_(156,t.tag))};function Ef(e,t){return Xc(e,t)}function h0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,r){return new h0(e,t,n,r)}function gs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function g0(e){if(typeof e=="function")return gs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ia)return 11;if(e===$a)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ki(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")gs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case On:return Cn(n.children,i,o,t);case Oa:l=8,i|=8;break;case Ml:return e=lt(12,n,t,i|2),e.elementType=Ml,e.lanes=o,e;case jl:return e=lt(13,n,t,i),e.elementType=jl,e.lanes=o,e;case Tl:return e=lt(19,n,t,i),e.elementType=Tl,e.lanes=o,e;case Tc:return bo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mc:l=10;break e;case jc:l=9;break e;case Ia:l=11;break e;case $a:l=14;break e;case Vt:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=lt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Cn(e,t,n,r){return e=lt(7,e,r,t),e.lanes=n,e}function bo(e,t,n,r){return e=lt(22,e,r,t),e.elementType=Tc,e.lanes=n,e.stateNode={isHidden:!1},e}function yl(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function xl(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function v0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qo(0),this.expirationTimes=qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vs(e,t,n,r,i,o,l,s,u){return e=new v0(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=lt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},es(o),e}function y0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nf(e){if(!e)return sn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(He(n))return Sd(e,n,t)}return t}function Pf(e,t,n,r,i,o,l,s,u){return e=vs(n,r,!0,e,i,o,l,s,u),e.context=Nf(null),n=e.current,r=be(),i=nn(n),o=Ot(r,i),o.callback=t??null,en(n,o,i),e.current.lanes=i,li(e,i,r),Qe(e,r),e}function Do(e,t,n,r){var i=t.current,o=be(),l=nn(i);return n=Nf(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(i,t,l),e!==null&&(vt(e,i,l,o),Fi(e,i,l)),l}function ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Iu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ys(e,t){Iu(e,t),(e=e.alternate)&&Iu(e,t)}function x0(){return null}var _f=typeof reportError=="function"?reportError:function(e){console.error(e)};function xs(e){this._internalRoot=e}Uo.prototype.render=xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Do(e,t,null,null)};Uo.prototype.unmount=xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){Do(null,e,null,null)}),t[$t]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=nd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ht.length&&t!==0&&t<Ht[n].priority;n++);Ht.splice(n,0,e),n===0&&id(e)}};function ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $u(){}function w0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=ko(l);o.call(c)}}var l=Pf(t,r,e,0,null,!1,!1,"",$u);return e._reactRootContainer=l,e[$t]=l.current,Hr(e.nodeType===8?e.parentNode:e),Pn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=ko(u);s.call(c)}}var u=vs(e,0,!1,null,null,!1,!1,"",$u);return e._reactRootContainer=u,e[$t]=u.current,Hr(e.nodeType===8?e.parentNode:e),Pn(function(){Do(t,u,n,r)}),u}function Bo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=ko(l);s.call(u)}}Do(t,l,e,i)}else l=w0(n,t,e,i,r);return ko(l)}ed=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nr(t.pendingLanes);n!==0&&(Ua(t,n|1),Qe(t,he()),!(X&6)&&(ir=he()+500,dn()))}break;case 13:Pn(function(){var r=bt(e,1);if(r!==null){var i=be();vt(r,e,1,i)}}),ys(e,1)}};Aa=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=be();vt(t,e,134217728,n)}ys(e,134217728)}};td=function(e){if(e.tag===13){var t=nn(e),n=bt(e,t);if(n!==null){var r=be();vt(n,e,t,r)}ys(e,t)}};nd=function(){return re};rd=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};Fl=function(e,t,n){switch(t){case"input":if(Il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=jo(r);if(!i)throw Error(_(90));Oc(r),Il(r,i)}}}break;case"textarea":$c(e,n);break;case"select":t=n.value,t!=null&&Hn(e,!!n.multiple,t,!1)}};Vc=ps;Wc=Pn;var C0={usingClientEntryPoint:!1,Events:[si,Dn,jo,Bc,Fc,ps]},wr={findFiberByHostInstance:vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},k0={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yc(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||x0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zi.isDisabled&&zi.supportsFiber)try{_o=zi.inject(k0),Pt=zi}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C0;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ws(t))throw Error(_(200));return y0(e,t,null,n)};nt.createRoot=function(e,t){if(!ws(e))throw Error(_(299));var n=!1,r="",i=_f;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vs(e,1,!1,null,null,n,!1,r,i),e[$t]=t.current,Hr(e.nodeType===8?e.parentNode:e),new xs(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Yc(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return Pn(e)};nt.hydrate=function(e,t,n){if(!Ao(t))throw Error(_(200));return Bo(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!ws(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=_f;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Pf(t,null,e,1,n??null,i,!1,o,l),e[$t]=t.current,Hr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Uo(t)};nt.render=function(e,t,n){if(!Ao(t))throw Error(_(200));return Bo(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!Ao(e))throw Error(_(40));return e._reactRootContainer?(Pn(function(){Bo(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};nt.unstable_batchedUpdates=ps;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ao(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Bo(e,t,n,!1,r)};nt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=nt})(x1);var Lf,bu=_l;Lf=bu.createRoot,bu.hydrateRoot;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ei(){return ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ei.apply(this,arguments)}var Xt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xt||(Xt={}));const Du="popstate";function S0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return Ca("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:So(i)}return N0(t,n,null,e)}function ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Cs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function E0(){return Math.random().toString(36).substr(2,8)}function Uu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ca(e,t,n,r){return n===void 0&&(n=null),ei({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ur(t):t,{state:n,key:t&&t.key||r||E0()})}function So(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ur(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function N0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Xt.Pop,u=null,c=g();c==null&&(c=0,l.replaceState(ei({},l.state,{idx:c}),""));function g(){return(l.state||{idx:null}).idx}function v(){s=Xt.Pop;let N=g(),f=N==null?null:N-c;c=N,u&&u({action:s,location:x.location,delta:f})}function y(N,f){s=Xt.Push;let d=Ca(x.location,N,f);n&&n(d,N),c=g()+1;let h=Uu(d,c),k=x.createHref(d);try{l.pushState(h,"",k)}catch{i.location.assign(k)}o&&u&&u({action:s,location:x.location,delta:1})}function w(N,f){s=Xt.Replace;let d=Ca(x.location,N,f);n&&n(d,N),c=g();let h=Uu(d,c),k=x.createHref(d);l.replaceState(h,"",k),o&&u&&u({action:s,location:x.location,delta:0})}function C(N){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof N=="string"?N:So(N);return ye(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let x={get action(){return s},get location(){return e(i,l)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Du,v),u=N,()=>{i.removeEventListener(Du,v),u=null}},createHref(N){return t(i,N)},createURL:C,encodeLocation(N){let f=C(N);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:y,replace:w,go(N){return l.go(N)}};return x}var Au;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Au||(Au={}));function P0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ur(t):t,i=ks(r.pathname||"/",n);if(i==null)return null;let o=zf(e);_0(o);let l=null;for(let s=0;l==null&&s<o.length;++s)l=$0(o[s],U0(i));return l}function zf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(ye(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=on([r,u.relativePath]),g=n.concat(u);o.children&&o.children.length>0&&(ye(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),zf(o.children,t,g,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:O0(c,o.index),routesMeta:g})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let u of Mf(o.path))i(o,l,u)}),t}function Mf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Mf(r.join("/")),s=[];return s.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function _0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:I0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const L0=/^:\w+$/,z0=3,M0=2,j0=1,T0=10,R0=-2,Bu=e=>e==="*";function O0(e,t){let n=e.split("/"),r=n.length;return n.some(Bu)&&(r+=R0),t&&(r+=M0),n.filter(i=>!Bu(i)).reduce((i,o)=>i+(L0.test(o)?z0:o===""?j0:T0),r)}function I0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function $0(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],u=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",g=b0({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!g)return null;Object.assign(r,g.params);let v=s.route;o.push({params:r,pathname:on([i,g.pathname]),pathnameBase:V0(on([i,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(i=on([i,g.pathnameBase]))}return o}function b0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=D0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,g,v)=>{if(g==="*"){let y=s[v]||"";l=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return c[g]=A0(s[v]||"",g),c},{}),pathname:o,pathnameBase:l,pattern:e}}function D0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Cs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function U0(e){try{return decodeURI(e)}catch(t){return Cs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function A0(e,t){try{return decodeURIComponent(e)}catch(n){return Cs(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ks(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function B0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ur(e):e;return{pathname:n?n.startsWith("/")?n:F0(n,t):t,search:W0(r),hash:H0(i)}}function F0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Tf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ur(e):(i=ei({},e),ye(!i.pathname||!i.pathname.includes("?"),wl("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),wl("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),wl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(r||l==null)s=n;else{let v=t.length-1;if(l.startsWith("..")){let y=l.split("/");for(;y[0]==="..";)y.shift(),v-=1;i.pathname=y.join("/")}s=v>=0?t[v]:"/"}let u=B0(i,s),c=l&&l!=="/"&&l.endsWith("/"),g=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}const on=e=>e.join("/").replace(/\/\/+/g,"/"),V0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),W0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,H0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Q0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eo(){return Eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Eo.apply(this,arguments)}const Rf=$.createContext(null),Y0=$.createContext(null),cr=$.createContext(null),Fo=$.createContext(null),zn=$.createContext({outlet:null,matches:[],isDataRoute:!1}),Of=$.createContext(null);function K0(e,t){let{relative:n}=t===void 0?{}:t;ci()||ye(!1);let{basename:r,navigator:i}=$.useContext(cr),{hash:o,pathname:l,search:s}=$f(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:on([r,l])),i.createHref({pathname:u,search:s,hash:o})}function ci(){return $.useContext(Fo)!=null}function Vo(){return ci()||ye(!1),$.useContext(Fo).location}function If(e){$.useContext(cr).static||$.useLayoutEffect(e)}function dr(){let{isDataRoute:e}=$.useContext(zn);return e?am():X0()}function X0(){ci()||ye(!1);let{basename:e,navigator:t}=$.useContext(cr),{matches:n}=$.useContext(zn),{pathname:r}=Vo(),i=JSON.stringify(jf(n).map(s=>s.pathnameBase)),o=$.useRef(!1);return If(()=>{o.current=!0}),$.useCallback(function(s,u){if(u===void 0&&(u={}),!o.current)return;if(typeof s=="number"){t.go(s);return}let c=Tf(s,JSON.parse(i),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:on([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,i,r])}function $f(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=$.useContext(zn),{pathname:i}=Vo(),o=JSON.stringify(jf(r).map(l=>l.pathnameBase));return $.useMemo(()=>Tf(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Z0(e,t){return G0(e,t)}function G0(e,t,n){ci()||ye(!1);let{navigator:r}=$.useContext(cr),{matches:i}=$.useContext(zn),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=Vo(),c;if(t){var g;let x=typeof t=="string"?ur(t):t;s==="/"||(g=x.pathname)!=null&&g.startsWith(s)||ye(!1),c=x}else c=u;let v=c.pathname||"/",y=s==="/"?v:v.slice(s.length)||"/",w=P0(e,{pathname:y}),C=nm(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:on([s,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?s:on([s,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&C?$.createElement(Fo.Provider,{value:{location:Eo({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Xt.Pop}},C):C}function J0(){let e=lm(),t=Q0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},t),n?$.createElement("pre",{style:i},n):null,o)}const q0=$.createElement(J0,null);class em extends $.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?$.createElement(zn.Provider,{value:this.props.routeContext},$.createElement(Of.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tm(e){let{routeContext:t,match:n,children:r}=e,i=$.useContext(Rf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(zn.Provider,{value:t},r)}function nm(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let s=o.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id]));s>=0||ye(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,u,c)=>{let g=u.route.id?l==null?void 0:l[u.route.id]:null,v=null;n&&(v=u.route.errorElement||q0);let y=t.concat(o.slice(0,c+1)),w=()=>{let C;return g?C=v:u.route.Component?C=$.createElement(u.route.Component,null):u.route.element?C=u.route.element:C=s,$.createElement(tm,{match:u,routeContext:{outlet:s,matches:y,isDataRoute:n!=null},children:C})};return n&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?$.createElement(em,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:w(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):w()},null)}var ka;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(ka||(ka={}));var ti;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ti||(ti={}));function rm(e){let t=$.useContext(Rf);return t||ye(!1),t}function im(e){let t=$.useContext(Y0);return t||ye(!1),t}function om(e){let t=$.useContext(zn);return t||ye(!1),t}function bf(e){let t=om(),n=t.matches[t.matches.length-1];return n.route.id||ye(!1),n.route.id}function lm(){var e;let t=$.useContext(Of),n=im(ti.UseRouteError),r=bf(ti.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function am(){let{router:e}=rm(ka.UseNavigateStable),t=bf(ti.UseNavigateStable),n=$.useRef(!1);return If(()=>{n.current=!0}),$.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Eo({fromRouteId:t},o)))},[e,t])}function gn(e){ye(!1)}function sm(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xt.Pop,navigator:o,static:l=!1}=e;ci()&&ye(!1);let s=t.replace(/^\/*/,"/"),u=$.useMemo(()=>({basename:s,navigator:o,static:l}),[s,o,l]);typeof r=="string"&&(r=ur(r));let{pathname:c="/",search:g="",hash:v="",state:y=null,key:w="default"}=r,C=$.useMemo(()=>{let x=ks(c,s);return x==null?null:{location:{pathname:x,search:g,hash:v,state:y,key:w},navigationType:i}},[s,c,g,v,y,w,i]);return C==null?null:$.createElement(cr.Provider,{value:u},$.createElement(Fo.Provider,{children:n,value:C}))}function um(e){let{children:t,location:n}=e;return Z0(Sa(t),n)}var Fu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Fu||(Fu={}));new Promise(()=>{});function Sa(e,t){t===void 0&&(t=[]);let n=[];return $.Children.forEach(e,(r,i)=>{if(!$.isValidElement(r))return;let o=[...t,i];if(r.type===$.Fragment){n.push.apply(n,Sa(r.props.children,o));return}r.type!==gn&&ye(!1),!r.props.index||!r.props.children||ye(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Sa(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ea(){return Ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ea.apply(this,arguments)}function cm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function dm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function fm(e,t){return e.button===0&&(!t||t==="_self")&&!dm(e)}const pm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function mm(e){let{basename:t,children:n,window:r}=e,i=$.useRef();i.current==null&&(i.current=S0({window:r,v5Compat:!0}));let o=i.current,[l,s]=$.useState({action:o.action,location:o.location});return $.useLayoutEffect(()=>o.listen(s),[o]),$.createElement(sm,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const hm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Le=$.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:c,preventScrollReset:g}=t,v=cm(t,pm),{basename:y}=$.useContext(cr),w,C=!1;if(typeof c=="string"&&gm.test(c)&&(w=c,hm))try{let d=new URL(window.location.href),h=c.startsWith("//")?new URL(d.protocol+c):new URL(c),k=ks(h.pathname,y);h.origin===d.origin&&k!=null?c=k+h.search+h.hash:C=!0}catch{}let x=K0(c,{relative:i}),N=vm(c,{replace:l,state:s,target:u,preventScrollReset:g,relative:i});function f(d){r&&r(d),d.defaultPrevented||N(d)}return $.createElement("a",Ea({},v,{href:w||x,onClick:C||o?r:f,ref:n,target:u}))});var Vu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Vu||(Vu={}));var Wu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wu||(Wu={}));function vm(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l}=t===void 0?{}:t,s=dr(),u=Vo(),c=$f(e,{relative:l});return $.useCallback(g=>{if(fm(g,n)){g.preventDefault();let v=r!==void 0?r:So(u)===So(c);s(e,{replace:v,state:i,preventScrollReset:o,relative:l})}},[u,s,c,r,i,n,e,o,l])}function ym(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function xm(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var wm=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(xm(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=ym(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Re="-ms-",No="-moz-",ee="-webkit-",Df="comm",Ss="rule",Es="decl",Cm="@import",Uf="@keyframes",km=Math.abs,Wo=String.fromCharCode,Sm=Object.assign;function Em(e,t){return _e(e,0)^45?(((t<<2^_e(e,0))<<2^_e(e,1))<<2^_e(e,2))<<2^_e(e,3):0}function Af(e){return e.trim()}function Nm(e,t){return(e=t.exec(e))?e[0]:e}function te(e,t,n){return e.replace(t,n)}function Na(e,t){return e.indexOf(t)}function _e(e,t){return e.charCodeAt(t)|0}function ni(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function Ns(e){return e.length}function Mi(e,t){return t.push(e),e}function Pm(e,t){return e.map(t).join("")}var Ho=1,or=1,Bf=0,Ye=0,ge=0,fr="";function Qo(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ho,column:or,length:l,return:""}}function Cr(e,t){return Sm(Qo("",null,null,"",null,null,0),e,{length:-e.length},t)}function _m(){return ge}function Lm(){return ge=Ye>0?_e(fr,--Ye):0,or--,ge===10&&(or=1,Ho--),ge}function et(){return ge=Ye<Bf?_e(fr,Ye++):0,or++,ge===10&&(or=1,Ho++),ge}function Lt(){return _e(fr,Ye)}function Xi(){return Ye}function di(e,t){return ni(fr,e,t)}function ri(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ff(e){return Ho=or=1,Bf=kt(fr=e),Ye=0,[]}function Vf(e){return fr="",e}function Zi(e){return Af(di(Ye-1,Pa(e===91?e+2:e===40?e+1:e)))}function zm(e){for(;(ge=Lt())&&ge<33;)et();return ri(e)>2||ri(ge)>3?"":" "}function Mm(e,t){for(;--t&&et()&&!(ge<48||ge>102||ge>57&&ge<65||ge>70&&ge<97););return di(e,Xi()+(t<6&&Lt()==32&&et()==32))}function Pa(e){for(;et();)switch(ge){case e:return Ye;case 34:case 39:e!==34&&e!==39&&Pa(ge);break;case 40:e===41&&Pa(e);break;case 92:et();break}return Ye}function jm(e,t){for(;et()&&e+ge!==47+10;)if(e+ge===42+42&&Lt()===47)break;return"/*"+di(t,Ye-1)+"*"+Wo(e===47?e:et())}function Tm(e){for(;!ri(Lt());)et();return di(e,Ye)}function Rm(e){return Vf(Gi("",null,null,null,[""],e=Ff(e),0,[0],e))}function Gi(e,t,n,r,i,o,l,s,u){for(var c=0,g=0,v=l,y=0,w=0,C=0,x=1,N=1,f=1,d=0,h="",k=i,E=o,P=r,S=h;N;)switch(C=d,d=et()){case 40:if(C!=108&&_e(S,v-1)==58){Na(S+=te(Zi(d),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:S+=Zi(d);break;case 9:case 10:case 13:case 32:S+=zm(C);break;case 92:S+=Mm(Xi()-1,7);continue;case 47:switch(Lt()){case 42:case 47:Mi(Om(jm(et(),Xi()),t,n),u);break;default:S+="/"}break;case 123*x:s[c++]=kt(S)*f;case 125*x:case 59:case 0:switch(d){case 0:case 125:N=0;case 59+g:w>0&&kt(S)-v&&Mi(w>32?Qu(S+";",r,n,v-1):Qu(te(S," ","")+";",r,n,v-2),u);break;case 59:S+=";";default:if(Mi(P=Hu(S,t,n,c,g,i,s,h,k=[],E=[],v),o),d===123)if(g===0)Gi(S,t,P,P,k,o,v,s,E);else switch(y===99&&_e(S,3)===110?100:y){case 100:case 109:case 115:Gi(e,P,P,r&&Mi(Hu(e,P,P,0,0,i,s,h,i,k=[],v),E),i,E,v,s,r?k:E);break;default:Gi(S,P,P,P,[""],E,0,s,E)}}c=g=w=0,x=f=1,h=S="",v=l;break;case 58:v=1+kt(S),w=C;default:if(x<1){if(d==123)--x;else if(d==125&&x++==0&&Lm()==125)continue}switch(S+=Wo(d),d*x){case 38:f=g>0?1:(S+="\f",-1);break;case 44:s[c++]=(kt(S)-1)*f,f=1;break;case 64:Lt()===45&&(S+=Zi(et())),y=Lt(),g=v=kt(h=S+=Tm(Xi())),d++;break;case 45:C===45&&kt(S)==2&&(x=0)}}return o}function Hu(e,t,n,r,i,o,l,s,u,c,g){for(var v=i-1,y=i===0?o:[""],w=Ns(y),C=0,x=0,N=0;C<r;++C)for(var f=0,d=ni(e,v+1,v=km(x=l[C])),h=e;f<w;++f)(h=Af(x>0?y[f]+" "+d:te(d,/&\f/g,y[f])))&&(u[N++]=h);return Qo(e,t,n,i===0?Ss:s,u,c,g)}function Om(e,t,n){return Qo(e,t,n,Df,Wo(_m()),ni(e,2,-2),0)}function Qu(e,t,n,r){return Qo(e,t,n,Es,ni(e,0,r),ni(e,r+1,-1),r)}function Gn(e,t){for(var n="",r=Ns(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Im(e,t,n,r){switch(e.type){case Cm:case Es:return e.return=e.return||e.value;case Df:return"";case Uf:return e.return=e.value+"{"+Gn(e.children,r)+"}";case Ss:e.value=e.props.join(",")}return kt(n=Gn(e.children,r))?e.return=e.value+"{"+n+"}":""}function $m(e){var t=Ns(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function bm(e){return function(t){t.root||(t=t.return)&&e(t)}}function Dm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Um=function(t,n,r){for(var i=0,o=0;i=o,o=Lt(),i===38&&o===12&&(n[r]=1),!ri(o);)et();return di(t,Ye)},Am=function(t,n){var r=-1,i=44;do switch(ri(i)){case 0:i===38&&Lt()===12&&(n[r]=1),t[r]+=Um(Ye-1,n,r);break;case 2:t[r]+=Zi(i);break;case 4:if(i===44){t[++r]=Lt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Wo(i)}while(i=et());return t},Bm=function(t,n){return Vf(Am(Ff(t),n))},Yu=new WeakMap,Fm=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Yu.get(r))&&!i){Yu.set(t,!0);for(var o=[],l=Bm(n,o),s=r.props,u=0,c=0;u<l.length;u++)for(var g=0;g<s.length;g++,c++)t.props[c]=o[u]?l[u].replace(/&\f/g,s[g]):s[g]+" "+l[u]}}},Vm=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Wf(e,t){switch(Em(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+No+e+Re+e+e;case 6828:case 4268:return ee+e+Re+e+e;case 6165:return ee+e+Re+"flex-"+e+e;case 5187:return ee+e+te(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+Re+"flex-$1$2")+e;case 5443:return ee+e+Re+"flex-item-"+te(e,/flex-|-self/,"")+e;case 4675:return ee+e+Re+"flex-line-pack"+te(e,/align-content|flex-|-self/,"")+e;case 5548:return ee+e+Re+te(e,"shrink","negative")+e;case 5292:return ee+e+Re+te(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+te(e,"-grow","")+ee+e+Re+te(e,"grow","positive")+e;case 4554:return ee+te(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return te(te(te(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return te(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return te(te(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4095:case 3583:case 4068:case 2532:return te(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch(_e(e,t+1)){case 109:if(_e(e,t+4)!==45)break;case 102:return te(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+No+(_e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Na(e,"stretch")?Wf(te(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(_e(e,t+1)!==115)break;case 6444:switch(_e(e,kt(e)-3-(~Na(e,"!important")&&10))){case 107:return te(e,":",":"+ee)+e;case 101:return te(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ee+(_e(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+Re+"$2box$3")+e}break;case 5936:switch(_e(e,t+11)){case 114:return ee+e+Re+te(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+Re+te(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+Re+te(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ee+e+Re+e+e}return e}var Wm=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Es:t.return=Wf(t.value,t.length);break;case Uf:return Gn([Cr(t,{value:te(t.value,"@","@"+ee)})],i);case Ss:if(t.length)return Pm(t.props,function(o){switch(Nm(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Gn([Cr(t,{props:[te(o,/:(read-\w+)/,":"+No+"$1")]})],i);case"::placeholder":return Gn([Cr(t,{props:[te(o,/:(plac\w+)/,":"+ee+"input-$1")]}),Cr(t,{props:[te(o,/:(plac\w+)/,":"+No+"$1")]}),Cr(t,{props:[te(o,/:(plac\w+)/,Re+"input-$1")]})],i)}return""})}},Hm=[Wm],Qm=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(x){var N=x.getAttribute("data-emotion");N.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var i=t.stylisPlugins||Hm,o={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var N=x.getAttribute("data-emotion").split(" "),f=1;f<N.length;f++)o[N[f]]=!0;s.push(x)});var u,c=[Fm,Vm];{var g,v=[Im,bm(function(x){g.insert(x)})],y=$m(c.concat(i,v)),w=function(N){return Gn(Rm(N),y)};u=function(N,f,d,h){g=d,w(N?N+"{"+f.styles+"}":f.styles),h&&(C.inserted[f.name]=!0)}}var C={key:n,sheet:new wm({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:u};return C.sheet.hydrate(s),C};function Ym(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Km={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xm=/[A-Z]|^ms/g,Zm=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Hf=function(t){return t.charCodeAt(1)===45},Ku=function(t){return t!=null&&typeof t!="boolean"},Cl=Dm(function(e){return Hf(e)?e:e.replace(Xm,"-$&").toLowerCase()}),Xu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Zm,function(r,i,o){return St={name:i,styles:o,next:St},i})}return Km[t]!==1&&!Hf(t)&&typeof n=="number"&&n!==0?n+"px":n};function ii(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return St={name:n.name,styles:n.styles,next:St},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)St={name:r.name,styles:r.styles,next:St},r=r.next;var i=n.styles+";";return i}return Gm(e,t,n)}case"function":{if(e!==void 0){var o=St,l=n(e);return St=o,ii(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Gm(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ii(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":Ku(l)&&(r+=Cl(o)+":"+Xu(o,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)Ku(l[s])&&(r+=Cl(o)+":"+Xu(o,l[s])+";");else{var u=ii(e,t,l);switch(o){case"animation":case"animationName":{r+=Cl(o)+":"+u+";";break}default:r+=o+"{"+u+"}"}}}return r}var Zu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,St,kl=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";St=void 0;var l=t[0];l==null||l.raw===void 0?(i=!1,o+=ii(r,n,l)):o+=l[0];for(var s=1;s<t.length;s++)o+=ii(r,n,t[s]),i&&(o+=l[s]);Zu.lastIndex=0;for(var u="",c;(c=Zu.exec(o))!==null;)u+="-"+c[1];var g=Ym(o)+u;return{name:g,styles:o,next:St}},Jm=!0;function Qf(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var qm=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Jm===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},eh=function(t,n,r){qm(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function Gu(e,t){if(e.inserted[t.name]===void 0)return e.insert("",t,e.sheet,!0)}function Ju(e,t,n){var r=[],i=Qf(e,r,n);return r.length<2?n:i+t(r)}var th=function(t){var n=Qm(t);n.sheet.speedy=function(s){this.isSpeedy=s},n.compat=!0;var r=function(){for(var u=arguments.length,c=new Array(u),g=0;g<u;g++)c[g]=arguments[g];var v=kl(c,n.registered,void 0);return eh(n,v,!1),n.key+"-"+v.name},i=function(){for(var u=arguments.length,c=new Array(u),g=0;g<u;g++)c[g]=arguments[g];var v=kl(c,n.registered),y="animation-"+v.name;return Gu(n,{name:v.name,styles:"@keyframes "+y+"{"+v.styles+"}"}),y},o=function(){for(var u=arguments.length,c=new Array(u),g=0;g<u;g++)c[g]=arguments[g];var v=kl(c,n.registered);Gu(n,v)},l=function(){for(var u=arguments.length,c=new Array(u),g=0;g<u;g++)c[g]=arguments[g];return Ju(n.registered,r,nh(c))};return{css:r,cx:l,injectGlobal:o,keyframes:i,hydrate:function(u){u.forEach(function(c){n.inserted[c]=!0})},flush:function(){n.registered={},n.inserted={},n.sheet.flush()},sheet:n.sheet,cache:n,getRegisteredStyles:Qf.bind(null,n.registered),merge:Ju.bind(null,n.registered,r)}},nh=function e(t){for(var n="",r=0;r<t.length;r++){var i=t[r];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=e(i);else{o="";for(var l in i)i[l]&&l&&(o&&(o+=" "),o+=l)}break}default:o=i}o&&(n&&(n+=" "),n+=o)}}return n},Ps=th({key:"css"}),yt=Ps.cx,rh=Ps.injectGlobal,p=Ps.css;const ih=p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #212429;
  border-radius: 48px;
  width: 152px;
  height: 48px;

`,le=e=>{const{children:t,className:n,route:r,disabled:i,type:o}=e,l=dr();function s(){r&&l(`${r}`)}return a("button",{disabled:i,type:o,onClick:s,className:yt(ih,n),children:t})},oh=p`
  display: grid;
  grid-template-rows: 1fr 25%;
  gap: 1rem;
  padding: 8px;
  position: relative;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    grid-template-rows: 1fr auto;
  }
`,lh=p`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }
`,ah=p`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 16px;
  font-weight: 400;
  color: #212429;

  & > :last-child {
    font-weight: 700;
    color: #212429;
  }
`,sh=p`
  color: #ef3c3c;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;

  @media (min-width: 1024px) {
    align-self: flex-end;
  }
`,uh=p`
  display: none;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  font-size: 16px;
  font-weight: 400;
  color: #212429;

  @media (min-width: 1024px) { 
    display: flex;
  }
`,ch=p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  position: absolute;
  width: 16px;
  height: 16px;
  cursor: pointer;
  background: #fff;
  border-radius: 50%;
  top: 12px;
  right: 12px;
`,dh=p`
  width: 100%;
`,fh=p`
  fill: #212429;
`,ph=p`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-grow: 1;
  border-radius: 12px;
`,mh=p`
  text-decoration: line-through;
  opacity: 0.6;
`,q=e=>{const{onClick:t,className:n,imageUrl:r,alt:i="image",name:o,price:l,offer:s,sizes:u,colors:c,showIcon:g=!0}=e,[v,y]=ct.useState(!1),w=()=>{y(!v)};return m("div",{className:yt(oh,n),children:[g&&a("div",{onClick:w,className:ch,children:a("svg",{className:yt(dh,{[fh]:v}),width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M13.8933 2.07333C13.5528 1.73267 13.1485 1.46243 12.7036 1.27805C12.2586 1.09368 11.7817 0.998779 11.3 0.998779C10.8183 0.998779 10.3414 1.09368 9.89643 1.27805C9.45146 1.46243 9.04717 1.73267 8.70667 2.07333L8 2.78L7.29333 2.07333C6.60554 1.38553 5.67269 0.999136 4.7 0.999136C3.72731 0.999136 2.79446 1.38553 2.10666 2.07333C1.41887 2.76112 1.03247 3.69397 1.03247 4.66666C1.03247 5.63935 1.41887 6.5722 2.10666 7.26L2.81333 7.96666L8 13.1533L13.1867 7.96666L13.8933 7.26C14.234 6.91949 14.5042 6.51521 14.6886 6.07023C14.873 5.62526 14.9679 5.14832 14.9679 4.66666C14.9679 4.185 14.873 3.70807 14.6886 3.26309C14.5042 2.81812 14.234 2.41383 13.8933 2.07333V2.07333Z",stroke:"#212429",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),a("img",{onClick:t,className:ph,src:r,alt:i}),m("div",{className:lh,children:[m("div",{className:ah,children:[o&&a("div",{children:o}),l&&a("div",{className:yt({[mh]:!!s}),children:l})]}),s&&a("div",{className:sh,children:s}),m("div",{className:uh,children:[u&&m("div",{children:[" ",u]}),c&&m("div",{children:[" ",c," "]})]})]})]})},hh=p`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  width: 100%;
  max-width: 1225px;
  margin: 1rem auto;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;

    div {
      align-self: center;
      text-align: start;
    }
  }
`,gh=p`

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #000000;
`,vh=p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
`,yh=p`
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (min-width: 1024px) {
    all: unset;
  }
`,xh=p`
  border: 0.5px solid #b6b6b6;
  border-radius: 48px;
  width: 312px;
  height: 48px;
  padding-left: 10px;

  @media (min-width: 1024px) {
    margin-right: 1rem;
  }
`,wh=p`
  margin: 2rem auto 1rem;
  border: solid 1px;
  width: 178px;
  cursor: pointer;
  background: #212429;
  color: #ffffff;

  @media (min-width: 1024px) {
    margin-left: 1rem;
  }
`,_s=()=>{const[e,t]=ct.useState("");return m("div",{className:hh,children:[m("div",{children:[a("h3",{className:gh,children:"Suscríbase al boletín de noticias"}),a("p",{className:vh,children:"¿y obtenga un 10% de descuento en su primera compra!"})]}),m("form",{className:yh,onSubmit:i=>{i.preventDefault(),console.log(e),t("")},children:[a("input",{type:"text",id:"boletin",onChange:i=>{t(i.target.value)},value:e,className:xh,required:!0,placeholder:"Introduzca su dirección Email"}),a(le,{type:"submit",className:wh,children:"Suscríbase"})]})]})},Ch=p`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 25%));

  gap: 20px;
  padding: 2rem 2rem 5rem;
  height: 18rem;

  div {
    color: white;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    font-variant: small-caps;
    color: #ffffff;
  }

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 170%;
`,kh=p`
  display: flex;
  flex-direction: row;
  gap: 10px;

  div {
    justify-content: center;
    text-align: center;

  }
`,Sh=p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  width: 56px;
  height: 56px;

  img {
    width: 33px;
    height: 33px;
  }
`,ji=p`
  display: flex;
  justify-content: center;
  align-items: center;

`,Eh=p`
  display: flex;
  flex-direction: row;
  gap: 10px;

  div {
    justify-content: center;
    text-align: center;
  }
`,Nh=p`
  display: flex;
  flex-direction: row;
  gap: 10px;

  div {
    justify-content: center;
    text-align: center;
  }

  @media (min-width: 725px) and (max-width: 1100px) {
    margin-bottom: 1rem;
  }
`,Ph=p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  width: 56px;
  height: 56px;

  img {
    width: 50px;
    height: 50px;
  }
`,qu=p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  width: 56px;
  height: 56px;

  img {
    width: 50px;
    height: 50px;
  }
`,_h=p`
  display: flex;
  flex-direction: row;
  gap: 10px;

  div {
    justify-content: center;
    text-align: center;
  }
`,Ti=p`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-sizing: content-box;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 170%;

    color: rgba(255, 255, 255, 0.64);
  }
`,Lh=p`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-right: 0.5rem;
`,zh=p`

    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;

`;p`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem 5rem;
  gap: 0.5rem;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: #737373;
`;const Mh=p`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`,jh=()=>m("div",{className:Ch,children:[m("div",{className:Ti,children:[m("div",{className:kh,children:[a("div",{className:Sh,children:a("img",{src:"/assets/fi_truck.png",alt:"icon"})}),a("div",{className:ji,children:"Entrega"})]}),a("h3",{children:"Compradores"}),m("p",{children:["Pago ",a("br",{}),"Política de datos personales ",a("br",{}),"Acciones ",a("br",{}),"Chenques regalo"]}),m("p",{children:["© 2020 – 2022 ООО «Omix Stor». ",a("br",{}),"Todos los derechos reservados."]})]}),a("div",{children:m("div",{className:Ti,children:[m("div",{className:Eh,children:[a("div",{className:Ph,children:a("img",{src:"/assets/Group178.png",alt:"icon"})}),a("div",{className:ji,children:"Devoluciones y cambios"})]}),m("p",{children:["Programa de afilición ",a("br",{}),"Normas de uso de los códigos promocionales"]}),a("p",{children:"ОOmiks Store Sociedad de Responsabilidad Limitada, domicilio social: Avenida Pobediteley, 100, Minsk, 220020, oficina 203. 203"})]})}),a("div",{children:m("div",{className:Ti,children:[m("div",{className:Nh,children:[a("div",{className:qu,children:a("img",{src:"/assets/Group33.png",alt:"icon"})}),a("div",{className:ji,children:"+375 (29) 749-18-23 "})]}),a("h3",{children:"Quiènes somos"}),m("p",{children:["Quiénes somos ",a("br",{}),"Póngase en contacto con ",a("br",{}),"Noticias ",a("br",{}),"Empleo ",a("br",{})]}),a("p",{children:"En el registro mercantil desde el 23 de junio de 2010, número de registro 256476, UNP 14886482"})]})}),a("div",{children:m("div",{className:Ti,children:[m("div",{className:_h,children:[a("div",{className:qu,children:a("img",{src:"/assets/Group34.png",alt:"icon"})}),a("div",{className:ji,children:"+375 (29) 749-18-23 "})]}),m("div",{className:Mh,children:[m("article",{children:[a("br",{}),a("h3",{children:"Estamos en las redes sociales"}),m("div",{className:zh,children:[a("svg",{width:"24",height:"23",viewBox:"0 0 24 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M22.0005 11.9999C22.0005 6.47705 17.5233 1.9999 12.0005 1.9999C6.47764 1.9999 2.00049 6.47705 2.00049 11.9999C2.00049 16.9912 5.65734 21.1282 10.438 21.8784V14.8905H7.89893V11.9999H10.438V9.79677C10.438 7.29052 11.9309 5.90615 14.2151 5.90615C15.3092 5.90615 16.4536 6.10146 16.4536 6.10146V8.5624H15.1926C13.9504 8.5624 13.563 9.33324 13.563 10.1241V11.9999H16.3364L15.8931 14.8905H13.563V21.8784C18.3436 21.1282 22.0005 16.9912 22.0005 11.9999Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),a("svg",{width:"24",height:"19",viewBox:"0 0 24 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.5949 2.45999C21.5421 2.71353 22.2865 3.45785 22.54 4.40501C22.9982 6.12001 23 9.70036 23 9.70036C23 9.70036 23 13.2807 22.54 14.9957C22.2865 15.9429 21.5421 16.6872 20.5949 16.9407C18.88 17.4007 12 17.4007 12 17.4007C12 17.4007 5.12001 17.4007 3.405 16.9407C2.45785 16.6872 1.71353 15.9429 1.45999 14.9957C1 13.2807 1 9.70036 1 9.70036C1 9.70036 1 6.12001 1.45999 4.40501C1.71353 3.45785 2.45785 2.71353 3.405 2.45999C5.12001 2 12 2 12 2C12 2 18.88 2 20.5949 2.45999ZM15.5134 9.70067L9.79788 13.0003V6.40101L15.5134 9.70067Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),a("svg",{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M2.0617 7.24464C2.10847 6.22264 2.26849 5.56351 2.4849 5.00402L2.48781 4.99629C2.70226 4.42695 3.03821 3.91119 3.47227 3.48489L3.47836 3.47891L3.48434 3.47282C3.91099 3.0382 4.42694 2.70258 4.99578 2.4887L5.00559 2.48495C5.56381 2.26786 6.22165 2.10843 7.2445 2.06167M2.0617 7.24464C2.01253 8.33659 2 8.67508 2 11.5063C2 14.3381 2.01184 14.6758 2.06167 15.768M2.0617 7.24464L2.0617 7.52008M2.4887 18.0168C2.70258 18.5856 3.0382 19.1015 3.47282 19.5282L3.4789 19.5342L3.48487 19.5402C3.91119 19.9743 4.42697 20.3103 4.99631 20.5247L5.00481 20.5279C5.56354 20.7446 6.2217 20.9041 7.2445 20.9509M2.4887 18.0168L2.48495 18.0069C2.26786 17.4487 2.10843 16.7909 2.06167 15.768M2.4887 18.0168L2.47588 17.9492M2.06167 15.768L2.07842 15.8562M2.06167 15.768L2.06167 15.4919M2.47588 17.9492L2.07842 15.8562M2.47588 17.9492C2.30707 17.5033 2.13325 16.881 2.07842 15.8562M2.47588 17.9492C2.4818 17.9649 2.48771 17.9803 2.49362 17.9955C2.70769 18.5726 3.04689 19.0952 3.48682 19.5256C3.91712 19.9655 4.43947 20.3046 5.01639 20.5187C5.47938 20.699 6.13176 20.8875 7.24434 20.9385C8.36713 20.9896 8.71402 21 11.5063 21C14.2985 21 14.6457 20.9896 15.7685 20.9385C16.8825 20.8874 17.5341 20.6979 17.9954 20.519C18.5727 20.305 19.0953 19.9657 19.5257 19.5256C19.9655 19.0953 20.3046 18.573 20.5187 17.9961C20.699 17.5331 20.8875 16.8808 20.9385 15.7682C20.9896 14.6454 21 14.2978 21 11.5063C21 8.71472 20.9896 8.36684 20.9385 7.24405C20.8871 6.12427 20.6959 5.47168 20.5162 5.00992C20.2811 4.40322 19.9831 3.94437 19.525 3.48627C19.0678 3.02999 18.6102 2.73179 18.0031 2.49654C17.5396 2.31537 16.8866 2.12531 15.7685 2.07406C15.6712 2.06964 15.5798 2.06552 15.4921 2.06168M2.07842 15.8562C2.07687 15.8273 2.07542 15.7981 2.07406 15.7685C2.06964 15.6712 2.06551 15.5797 2.06167 15.4919M7.2445 2.06167C8.33671 2.01184 8.67508 2 11.5063 2C14.3374 2 14.6757 2.01252 15.7676 2.06168M7.2445 2.06167L7.52065 2.06167M15.7676 2.06168L15.4921 2.06168M15.7676 2.06168C16.7898 2.10844 17.449 2.26844 18.0085 2.48487L18.0162 2.48781C18.5856 2.70226 19.1013 3.03821 19.5276 3.47227L19.5336 3.4783L19.5396 3.48422C19.9737 3.91055 20.3096 4.42646 20.5239 4.99596L20.5276 5.00559C20.7447 5.56381 20.9041 6.22165 20.9509 7.2445M7.52065 2.06167L15.4921 2.06168M7.52065 2.06167C8.44551 2.02123 8.95669 2.01253 11.5063 2.01253C14.0561 2.01253 14.5671 2.02124 15.4921 2.06168M7.52065 2.06167C7.43287 2.06551 7.34137 2.06964 7.24405 2.07406C6.13007 2.12512 5.47846 2.31464 5.01711 2.49358C4.4377 2.70837 3.91331 3.04936 3.48195 3.49186C3.02813 3.94756 2.73108 4.40422 2.49658 5.0094C2.31539 5.4728 2.1253 6.12614 2.07405 7.24434C2.06964 7.34135 2.06552 7.43257 2.0617 7.52008M20.9509 15.768C20.9041 16.7908 20.7447 17.449 20.528 18.0077L20.5247 18.0162C20.3103 18.5856 19.9743 19.1013 19.5403 19.5276L19.5342 19.5336L19.5282 19.5397C19.1015 19.9743 18.5856 20.3099 18.0168 20.5238L18.0069 20.5276C17.4487 20.7447 16.7909 20.9041 15.768 20.9509M2.06167 15.4919C2.02123 14.567 2.01253 14.0558 2.01253 11.5063C2.01253 8.95591 2.02123 8.44544 2.0617 7.52008M2.06167 15.4919L2.0617 7.52008M9.81551 15.5881C10.3516 15.8101 10.9261 15.9244 11.5063 15.9244C12.678 15.9244 13.8018 15.4589 14.6304 14.6304C15.4589 13.8018 15.9244 12.678 15.9244 11.5063C15.9244 10.3345 15.4589 9.21072 14.6304 8.38215C13.8018 7.55359 12.678 7.0881 11.5063 7.0881C10.9261 7.0881 10.3515 7.20238 9.81551 7.42442C9.27948 7.64645 8.79242 7.97189 8.38216 8.38215C7.9719 8.79242 7.64646 9.27947 7.42442 9.81551C7.20239 10.3515 7.08811 10.9261 7.08811 11.5063C7.08811 12.0865 7.20239 12.661 7.42442 13.197C7.64646 13.7331 7.9719 14.2201 8.38216 14.6304C8.79242 15.0406 9.27948 15.3661 9.81551 15.5881ZM8.37232 8.37231C9.20349 7.54113 10.3308 7.07418 11.5063 7.07418C12.6817 7.07418 13.809 7.54113 14.6402 8.37231C15.4714 9.20349 15.9383 10.3308 15.9383 11.5063C15.9383 12.6817 15.4714 13.809 14.6402 14.6402C13.809 15.4714 12.6817 15.9383 11.5063 15.9383C10.3308 15.9383 9.20349 15.4714 8.37232 14.6402C7.54114 13.809 7.07419 12.6817 7.07419 11.5063C7.07419 10.3308 7.54114 9.20349 8.37232 8.37231ZM18.434 6.04229C18.434 6.37873 18.3004 6.70139 18.0625 6.93929C17.8246 7.17719 17.5019 7.31084 17.1655 7.31084C16.829 7.31084 16.5064 7.17719 16.2685 6.93929C16.0306 6.70139 15.8969 6.37873 15.8969 6.04229C15.8969 5.70585 16.0306 5.38319 16.2685 5.1453C16.5064 4.9074 16.829 4.77375 17.1655 4.77375C17.5019 4.77375 17.8246 4.9074 18.0625 5.1453C18.3004 5.38319 18.434 5.70585 18.434 6.04229Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),a("svg",{width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M22 3.9246C21.2645 4.25051 20.4744 4.47071 19.6438 4.57025C20.4911 4.06289 21.1412 3.25782 21.4477 2.29948C20.655 2.76984 19.7768 3.1116 18.8422 3.29481C18.0935 2.49855 17.0277 2 15.8474 2C13.582 2 11.7446 3.8374 11.7446 6.10464C11.7446 6.42526 11.7816 6.73707 11.8503 7.03832C8.43883 6.86656 5.41672 5.23263 3.39258 2.75046C3.04025 3.35823 2.83766 4.06289 2.83766 4.81335C2.83766 6.23677 3.56258 7.4937 4.66273 8.22919C3.98978 8.20717 3.35735 8.02308 2.80419 7.71567V7.76852C2.80419 9.75654 4.21792 11.4151 6.09583 11.7921C5.75055 11.8855 5.38853 11.9348 5.01506 11.9348C4.75081 11.9348 4.49273 11.9102 4.24258 11.8626C4.76491 13.4921 6.27993 14.6795 8.07593 14.7112C6.67101 15.8122 4.90144 16.4684 2.97948 16.4684C2.64829 16.4684 2.3215 16.449 2 16.4112C3.81626 17.5765 5.97252 18.2547 8.28909 18.2547C15.8378 18.2547 19.9644 12.0026 19.9644 6.58029C19.9644 6.40412 19.96 6.2262 19.9521 6.05003C20.7536 5.47045 21.4495 4.74905 21.9982 3.92724L22 3.9246Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),a("svg",{width:"21",height:"24",viewBox:"0 0 21 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M15.8218 5.1344C15.0887 4.29394 14.648 3.19805 14.648 2H13.7293M15.8218 5.1344C16.4899 5.90063 17.3945 6.45789 18.4245 6.67608C18.7446 6.74574 19.0787 6.78293 19.4267 6.78293V10.2191C17.645 10.2191 15.9933 9.64801 14.6478 8.68211V15.6707C14.6478 19.1627 11.8083 22 8.32392 22C6.50049 22 4.8534 21.2198 3.69812 19.98C2.64492 18.847 2 17.3331 2 15.6707C2 12.2298 4.75598 9.42509 8.17079 9.35079M15.8218 5.1344C15.8039 5.12276 15.7861 5.11101 15.7684 5.09914M5.98556 17.3517C5.64223 16.8781 5.43808 16.2977 5.43808 15.6661C5.43808 14.0734 6.73255 12.7778 8.324 12.7778C8.62093 12.7778 8.90856 12.8288 9.17768 12.9124V9.40192C8.89927 9.36473 8.61628 9.34149 8.324 9.34149C8.27294 9.34149 7.86183 9.36884 7.81079 9.36884M13.7245 2H11.2098L11.2051 15.7775C11.1495 17.3192 9.87817 18.5591 8.32392 18.5591C7.35884 18.5591 6.50977 18.0808 5.98086 17.3564",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.9971 12C21.9971 17.5228 17.5199 22 11.9971 22C6.47422 22 1.99707 17.5228 1.99707 12C1.99707 6.47715 6.47422 2 11.9971 2C17.5199 2 21.9971 6.47715 21.9971 12ZM12.3554 9.38244C11.3828 9.787 9.43884 10.6243 6.52364 11.8944C6.05025 12.0827 5.80227 12.2669 5.7797 12.4469C5.74155 12.7513 6.12266 12.8711 6.64162 13.0343C6.71222 13.0565 6.78536 13.0795 6.86034 13.1038C7.37092 13.2698 8.05775 13.464 8.4148 13.4717C8.73868 13.4787 9.10017 13.3452 9.49926 13.0711C12.223 11.2325 13.629 10.3032 13.7173 10.2831C13.7796 10.269 13.8659 10.2512 13.9244 10.3032C13.9828 10.3552 13.9771 10.4536 13.9709 10.48C13.9331 10.641 12.4371 12.0318 11.663 12.7515C11.4216 12.9759 11.2505 13.135 11.2155 13.1714C11.1371 13.2528 11.0572 13.3298 10.9804 13.4038C10.506 13.8611 10.1503 14.204 11.0001 14.764C11.4084 15.0331 11.7352 15.2556 12.0612 15.4776C12.4172 15.7201 12.7723 15.9619 13.2317 16.2631C13.3488 16.3398 13.4606 16.4195 13.5695 16.4971C13.9838 16.7925 14.356 17.0579 14.8159 17.0155C15.0831 16.991 15.3591 16.7397 15.4993 15.9903C15.8306 14.2193 16.4817 10.3821 16.6322 8.80081C16.6454 8.66228 16.6288 8.48498 16.6155 8.40715C16.6022 8.32932 16.5744 8.21842 16.4732 8.13633C16.3534 8.03912 16.1684 8.01861 16.0857 8.02C15.7096 8.0267 15.1325 8.22735 12.3554 9.38244Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})})]})]}),m("article",{className:Lh,children:[a("img",{src:"/assets/belcart-footer.png",alt:"icon"}),a("img",{src:"/assets/visa-footer.png",alt:"icon"}),a("img",{src:"/assets/master-card-footer.png",alt:"icon"}),a("img",{src:"/assets/icon-footer2.png",alt:"icon"})]})]})]})})]}),Ge=e=>{const{type:t="text",pl:n,className:r}=e;return a("input",{type:t,required:!0,placeholder:n,className:r})};var zt={},Th={get exports(){return zt},set exports(e){zt=e}};(function(e,t){(function(r,i){e.exports=i($)})(Kf,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(s,u)=>{u.match=C,u.parse=x;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,g=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,v=/^(?:(min|max)-)?(.+)/,y=/(em|rem|px|cm|mm|in|pt|pc)?$/,w=/(dpi|dpcm|dppx)?$/;function C(h,k){return x(h).some(function(E){var P=E.inverse,S=E.type==="all"||k.type===E.type;if(S&&P||!(S||P))return!1;var M=E.expressions.every(function(z){var j=z.feature,U=z.modifier,A=z.value,b=k[j];if(!b)return!1;switch(j){case"orientation":case"scan":return b.toLowerCase()===A.toLowerCase();case"width":case"height":case"device-width":case"device-height":A=d(A),b=d(b);break;case"resolution":A=f(A),b=f(b);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":A=N(A),b=N(b);break;case"grid":case"color":case"color-index":case"monochrome":A=parseInt(A,10)||1,b=parseInt(b,10)||0;break}switch(U){case"min":return b>=A;case"max":return b<=A;default:return b===A}});return M&&!P||!M&&P})}function x(h){return h.split(",").map(function(k){k=k.trim();var E=k.match(c),P=E[1],S=E[2],M=E[3]||"",z={};return z.inverse=!!P&&P.toLowerCase()==="not",z.type=S?S.toLowerCase():"all",M=M.match(/\([^\)]+\)/g)||[],z.expressions=M.map(function(j){var U=j.match(g),A=U[1].toLowerCase().match(v);return{modifier:A[1],feature:A[2],value:U[2]}}),z})}function N(h){var k=Number(h),E;return k||(E=h.match(/^(\d+)\s*\/\s*(\d+)$/),k=E[1]/E[2]),k}function f(h){var k=parseFloat(h),E=String(h).match(w)[1];switch(E){case"dpcm":return k/2.54;case"dppx":return k*96;default:return k}}function d(h){var k=parseFloat(h),E=String(h).match(y)[1];switch(E){case"em":return k*16;case"rem":return k*16;case"cm":return k*96/2.54;case"mm":return k*96/2.54/10;case"in":return k*96;case"pt":return k*72;case"pc":return k*72/12;default:return k}}},"./node_modules/hyphenate-style-name/index.js":(s,u,c)=>{c.r(u),c.d(u,{default:()=>x});var g=/[A-Z]/g,v=/^ms-/,y={};function w(N){return"-"+N.toLowerCase()}function C(N){if(y.hasOwnProperty(N))return y[N];var f=N.replace(g,w);return y[N]=v.test(f)?"-"+f:f}const x=C},"./node_modules/matchmediaquery/index.js":(s,u,c)=>{var g=c("./node_modules/css-mediaquery/index.js").match,v=typeof window<"u"?window.matchMedia:null;function y(C,x,N){var f=this;if(v&&!N){var d=v.call(window,C);this.matches=d.matches,this.media=d.media,d.addListener(E)}else this.matches=g(C,x),this.media=C;this.addListener=h,this.removeListener=k,this.dispose=P;function h(S){d&&d.addListener(S)}function k(S){d&&d.removeListener(S)}function E(S){f.matches=S.matches,f.media=S.media}function P(){d&&d.removeListener(E)}}function w(C,x,N){return new y(C,x,N)}s.exports=w},"./node_modules/object-assign/index.js":s=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;function v(w){if(w==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(w)}function y(){try{if(!Object.assign)return!1;var w=new String("abc");if(w[5]="de",Object.getOwnPropertyNames(w)[0]==="5")return!1;for(var C={},x=0;x<10;x++)C["_"+String.fromCharCode(x)]=x;var N=Object.getOwnPropertyNames(C).map(function(d){return C[d]});if(N.join("")!=="0123456789")return!1;var f={};return"abcdefghijklmnopqrst".split("").forEach(function(d){f[d]=d}),Object.keys(Object.assign({},f)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}s.exports=y()?Object.assign:function(w,C){for(var x,N=v(w),f,d=1;d<arguments.length;d++){x=Object(arguments[d]);for(var h in x)c.call(x,h)&&(N[h]=x[h]);if(u){f=u(x);for(var k=0;k<f.length;k++)g.call(x,f[k])&&(N[f[k]]=x[f[k]])}}return N}},"./node_modules/prop-types/checkPropTypes.js":(s,u,c)=>{var g=function(){};{var v=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),y={},w=c("./node_modules/prop-types/lib/has.js");g=function(x){var N="Warning: "+x;typeof console<"u"&&console.error(N);try{throw new Error(N)}catch{}}}function C(x,N,f,d,h){for(var k in x)if(w(x,k)){var E;try{if(typeof x[k]!="function"){var P=Error((d||"React class")+": "+f+" type `"+k+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof x[k]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw P.name="Invariant Violation",P}E=x[k](N,k,d,f,null,v)}catch(M){E=M}if(E&&!(E instanceof Error)&&g((d||"React class")+": type specification of "+f+" `"+k+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof E+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),E instanceof Error&&!(E.message in y)){y[E.message]=!0;var S=h?h():"";g("Failed "+f+" type: "+E.message+(S??""))}}}C.resetWarningCache=function(){y={}},s.exports=C},"./node_modules/prop-types/factoryWithTypeCheckers.js":(s,u,c)=>{var g=c("./node_modules/react-is/index.js"),v=c("./node_modules/object-assign/index.js"),y=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),w=c("./node_modules/prop-types/lib/has.js"),C=c("./node_modules/prop-types/checkPropTypes.js"),x=function(){};x=function(f){var d="Warning: "+f;typeof console<"u"&&console.error(d);try{throw new Error(d)}catch{}};function N(){return null}s.exports=function(f,d){var h=typeof Symbol=="function"&&Symbol.iterator,k="@@iterator";function E(L){var I=L&&(h&&L[h]||L[k]);if(typeof I=="function")return I}var P="<<anonymous>>",S={array:U("array"),bigint:U("bigint"),bool:U("boolean"),func:U("function"),number:U("number"),object:U("object"),string:U("string"),symbol:U("symbol"),any:A(),arrayOf:b,element:xe(),elementType:Ae(),instanceOf:Ke,node:B(),objectOf:T,oneOf:fn,oneOfType:D,shape:pe,exact:At};function M(L,I){return L===I?L!==0||1/L===1/I:L!==L&&I!==I}function z(L,I){this.message=L,this.data=I&&typeof I=="object"?I:{},this.stack=""}z.prototype=Error.prototype;function j(L){var I={},K=0;function H(Z,W,Q,G,ne,J,R){if(G=G||P,J=J||Q,R!==y){if(d){var Se=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw Se.name="Invariant Violation",Se}else if(typeof console<"u"){var dt=G+":"+Q;!I[dt]&&K<3&&(x("You are manually calling a React.PropTypes validation function for the `"+J+"` prop on `"+G+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),I[dt]=!0,K++)}}return W[Q]==null?Z?W[Q]===null?new z("The "+ne+" `"+J+"` is marked as required "+("in `"+G+"`, but its value is `null`.")):new z("The "+ne+" `"+J+"` is marked as required in "+("`"+G+"`, but its value is `undefined`.")):null:L(W,Q,G,ne,J)}var F=H.bind(null,!1);return F.isRequired=H.bind(null,!0),F}function U(L){function I(K,H,F,Z,W,Q){var G=K[H],ne=ke(G);if(ne!==L){var J=Xe(G);return new z("Invalid "+Z+" `"+W+"` of type "+("`"+J+"` supplied to `"+F+"`, expected ")+("`"+L+"`."),{expectedType:L})}return null}return j(I)}function A(){return j(N)}function b(L){function I(K,H,F,Z,W){if(typeof L!="function")return new z("Property `"+W+"` of component `"+F+"` has invalid PropType notation inside arrayOf.");var Q=K[H];if(!Array.isArray(Q)){var G=ke(Q);return new z("Invalid "+Z+" `"+W+"` of type "+("`"+G+"` supplied to `"+F+"`, expected an array."))}for(var ne=0;ne<Q.length;ne++){var J=L(Q,ne,F,Z,W+"["+ne+"]",y);if(J instanceof Error)return J}return null}return j(I)}function xe(){function L(I,K,H,F,Z){var W=I[K];if(!f(W)){var Q=ke(W);return new z("Invalid "+F+" `"+Z+"` of type "+("`"+Q+"` supplied to `"+H+"`, expected a single ReactElement."))}return null}return j(L)}function Ae(){function L(I,K,H,F,Z){var W=I[K];if(!g.isValidElementType(W)){var Q=ke(W);return new z("Invalid "+F+" `"+Z+"` of type "+("`"+Q+"` supplied to `"+H+"`, expected a single ReactElement type."))}return null}return j(L)}function Ke(L){function I(K,H,F,Z,W){if(!(K[H]instanceof L)){var Q=L.name||P,G=fi(K[H]);return new z("Invalid "+Z+" `"+W+"` of type "+("`"+G+"` supplied to `"+F+"`, expected ")+("instance of `"+Q+"`."))}return null}return j(I)}function fn(L){if(!Array.isArray(L))return arguments.length>1?x("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):x("Invalid argument supplied to oneOf, expected an array."),N;function I(K,H,F,Z,W){for(var Q=K[H],G=0;G<L.length;G++)if(M(Q,L[G]))return null;var ne=JSON.stringify(L,function(R,Se){var dt=Xe(Se);return dt==="symbol"?String(Se):Se});return new z("Invalid "+Z+" `"+W+"` of value `"+String(Q)+"` "+("supplied to `"+F+"`, expected one of "+ne+"."))}return j(I)}function T(L){function I(K,H,F,Z,W){if(typeof L!="function")return new z("Property `"+W+"` of component `"+F+"` has invalid PropType notation inside objectOf.");var Q=K[H],G=ke(Q);if(G!=="object")return new z("Invalid "+Z+" `"+W+"` of type "+("`"+G+"` supplied to `"+F+"`, expected an object."));for(var ne in Q)if(w(Q,ne)){var J=L(Q,ne,F,Z,W+"."+ne,y);if(J instanceof Error)return J}return null}return j(I)}function D(L){if(!Array.isArray(L))return x("Invalid argument supplied to oneOfType, expected an instance of array."),N;for(var I=0;I<L.length;I++){var K=L[I];if(typeof K!="function")return x("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Yo(K)+" at index "+I+"."),N}function H(F,Z,W,Q,G){for(var ne=[],J=0;J<L.length;J++){var R=L[J],Se=R(F,Z,W,Q,G,y);if(Se==null)return null;Se.data&&w(Se.data,"expectedType")&&ne.push(Se.data.expectedType)}var dt=ne.length>0?", expected one of type ["+ne.join(", ")+"]":"";return new z("Invalid "+Q+" `"+G+"` supplied to "+("`"+W+"`"+dt+"."))}return j(H)}function B(){function L(I,K,H,F,Z){return Be(I[K])?null:new z("Invalid "+F+" `"+Z+"` supplied to "+("`"+H+"`, expected a ReactNode."))}return j(L)}function ie(L,I,K,H,F){return new z((L||"React class")+": "+I+" type `"+K+"."+H+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+F+"`.")}function pe(L){function I(K,H,F,Z,W){var Q=K[H],G=ke(Q);if(G!=="object")return new z("Invalid "+Z+" `"+W+"` of type `"+G+"` "+("supplied to `"+F+"`, expected `object`."));for(var ne in L){var J=L[ne];if(typeof J!="function")return ie(F,Z,W,ne,Xe(J));var R=J(Q,ne,F,Z,W+"."+ne,y);if(R)return R}return null}return j(I)}function At(L){function I(K,H,F,Z,W){var Q=K[H],G=ke(Q);if(G!=="object")return new z("Invalid "+Z+" `"+W+"` of type `"+G+"` "+("supplied to `"+F+"`, expected `object`."));var ne=v({},K[H],L);for(var J in ne){var R=L[J];if(w(L,J)&&typeof R!="function")return ie(F,Z,W,J,Xe(R));if(!R)return new z("Invalid "+Z+" `"+W+"` key `"+J+"` supplied to `"+F+"`.\nBad object: "+JSON.stringify(K[H],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(L),null,"  "));var Se=R(Q,J,F,Z,W+"."+J,y);if(Se)return Se}return null}return j(I)}function Be(L){switch(typeof L){case"number":case"string":case"undefined":return!0;case"boolean":return!L;case"object":if(Array.isArray(L))return L.every(Be);if(L===null||f(L))return!0;var I=E(L);if(I){var K=I.call(L),H;if(I!==L.entries){for(;!(H=K.next()).done;)if(!Be(H.value))return!1}else for(;!(H=K.next()).done;){var F=H.value;if(F&&!Be(F[1]))return!1}}else return!1;return!0;default:return!1}}function pn(L,I){return L==="symbol"?!0:I?I["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&I instanceof Symbol:!1}function ke(L){var I=typeof L;return Array.isArray(L)?"array":L instanceof RegExp?"object":pn(I,L)?"symbol":I}function Xe(L){if(typeof L>"u"||L===null)return""+L;var I=ke(L);if(I==="object"){if(L instanceof Date)return"date";if(L instanceof RegExp)return"regexp"}return I}function Yo(L){var I=Xe(L);switch(I){case"array":case"object":return"an "+I;case"boolean":case"date":case"regexp":return"a "+I;default:return I}}function fi(L){return!L.constructor||!L.constructor.name?P:L.constructor.name}return S.checkPropTypes=C,S.resetWarningCache=C.resetWarningCache,S.PropTypes=S,S}},"./node_modules/prop-types/index.js":(s,u,c)=>{{var g=c("./node_modules/react-is/index.js"),v=!0;s.exports=c("./node_modules/prop-types/factoryWithTypeCheckers.js")(g.isElement,v)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":s=>{var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";s.exports=u},"./node_modules/prop-types/lib/has.js":s=>{s.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(s,u)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var c=typeof Symbol=="function"&&Symbol.for,g=c?Symbol.for("react.element"):60103,v=c?Symbol.for("react.portal"):60106,y=c?Symbol.for("react.fragment"):60107,w=c?Symbol.for("react.strict_mode"):60108,C=c?Symbol.for("react.profiler"):60114,x=c?Symbol.for("react.provider"):60109,N=c?Symbol.for("react.context"):60110,f=c?Symbol.for("react.async_mode"):60111,d=c?Symbol.for("react.concurrent_mode"):60111,h=c?Symbol.for("react.forward_ref"):60112,k=c?Symbol.for("react.suspense"):60113,E=c?Symbol.for("react.suspense_list"):60120,P=c?Symbol.for("react.memo"):60115,S=c?Symbol.for("react.lazy"):60116,M=c?Symbol.for("react.block"):60121,z=c?Symbol.for("react.fundamental"):60117,j=c?Symbol.for("react.responder"):60118,U=c?Symbol.for("react.scope"):60119;function A(R){return typeof R=="string"||typeof R=="function"||R===y||R===d||R===C||R===w||R===k||R===E||typeof R=="object"&&R!==null&&(R.$$typeof===S||R.$$typeof===P||R.$$typeof===x||R.$$typeof===N||R.$$typeof===h||R.$$typeof===z||R.$$typeof===j||R.$$typeof===U||R.$$typeof===M)}function b(R){if(typeof R=="object"&&R!==null){var Se=R.$$typeof;switch(Se){case g:var dt=R.type;switch(dt){case f:case d:case y:case C:case w:case k:return dt;default:var Ls=dt&&dt.$$typeof;switch(Ls){case N:case h:case S:case P:case x:return Ls;default:return Se}}case v:return Se}}}var xe=f,Ae=d,Ke=N,fn=x,T=g,D=h,B=y,ie=S,pe=P,At=v,Be=C,pn=w,ke=k,Xe=!1;function Yo(R){return Xe||(Xe=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),fi(R)||b(R)===f}function fi(R){return b(R)===d}function L(R){return b(R)===N}function I(R){return b(R)===x}function K(R){return typeof R=="object"&&R!==null&&R.$$typeof===g}function H(R){return b(R)===h}function F(R){return b(R)===y}function Z(R){return b(R)===S}function W(R){return b(R)===P}function Q(R){return b(R)===v}function G(R){return b(R)===C}function ne(R){return b(R)===w}function J(R){return b(R)===k}u.AsyncMode=xe,u.ConcurrentMode=Ae,u.ContextConsumer=Ke,u.ContextProvider=fn,u.Element=T,u.ForwardRef=D,u.Fragment=B,u.Lazy=ie,u.Memo=pe,u.Portal=At,u.Profiler=Be,u.StrictMode=pn,u.Suspense=ke,u.isAsyncMode=Yo,u.isConcurrentMode=fi,u.isContextConsumer=L,u.isContextProvider=I,u.isElement=K,u.isForwardRef=H,u.isFragment=F,u.isLazy=Z,u.isMemo=W,u.isPortal=Q,u.isProfiler=G,u.isStrictMode=ne,u.isSuspense=J,u.isValidElementType=A,u.typeOf=b})()},"./node_modules/react-is/index.js":(s,u,c)=>{s.exports=c("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(s,u,c)=>{c.r(u),c.d(u,{shallowEqualArrays:()=>v,shallowEqualObjects:()=>g});function g(y,w){if(y===w)return!0;if(!y||!w)return!1;var C=Object.keys(y),x=Object.keys(w),N=C.length;if(x.length!==N)return!1;for(var f=0;f<N;f++){var d=C[f];if(y[d]!==w[d]||!Object.prototype.hasOwnProperty.call(w,d))return!1}return!0}function v(y,w){if(y===w)return!0;if(!y||!w)return!1;var C=y.length;if(w.length!==C)return!1;for(var x=0;x<C;x++)if(y[x]!==w[x])return!1;return!0}},"./src/Component.ts":function(s,u,c){var g=this&&this.__rest||function(C,x){var N={};for(var f in C)Object.prototype.hasOwnProperty.call(C,f)&&x.indexOf(f)<0&&(N[f]=C[f]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,f=Object.getOwnPropertySymbols(C);d<f.length;d++)x.indexOf(f[d])<0&&Object.prototype.propertyIsEnumerable.call(C,f[d])&&(N[f[d]]=C[f[d]]);return N},v=this&&this.__importDefault||function(C){return C&&C.__esModule?C:{default:C}};Object.defineProperty(u,"__esModule",{value:!0});var y=v(c("./src/useMediaQuery.ts")),w=function(C){var x=C.children,N=C.device,f=C.onChange,d=g(C,["children","device","onChange"]),h=(0,y.default)(d,N,f);return typeof x=="function"?x(h):h?x:null};u.default=w},"./src/Context.ts":(s,u,c)=>{Object.defineProperty(u,"__esModule",{value:!0});var g=c("react"),v=(0,g.createContext)(void 0);u.default=v},"./src/index.ts":function(s,u,c){var g=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(u,"__esModule",{value:!0}),u.Context=u.toQuery=u.useMediaQuery=u.default=void 0;var v=g(c("./src/useMediaQuery.ts"));u.useMediaQuery=v.default;var y=g(c("./src/Component.ts"));u.default=y.default;var w=g(c("./src/toQuery.ts"));u.toQuery=w.default;var C=g(c("./src/Context.ts"));u.Context=C.default},"./src/mediaQuery.ts":function(s,u,c){var g=this&&this.__assign||function(){return g=Object.assign||function(k){for(var E,P=1,S=arguments.length;P<S;P++){E=arguments[P];for(var M in E)Object.prototype.hasOwnProperty.call(E,M)&&(k[M]=E[M])}return k},g.apply(this,arguments)},v=this&&this.__rest||function(k,E){var P={};for(var S in k)Object.prototype.hasOwnProperty.call(k,S)&&E.indexOf(S)<0&&(P[S]=k[S]);if(k!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,S=Object.getOwnPropertySymbols(k);M<S.length;M++)E.indexOf(S[M])<0&&Object.prototype.propertyIsEnumerable.call(k,S[M])&&(P[S[M]]=k[S[M]]);return P},y=this&&this.__importDefault||function(k){return k&&k.__esModule?k:{default:k}};Object.defineProperty(u,"__esModule",{value:!0});var w=y(c("./node_modules/prop-types/index.js")),C=w.default.oneOfType([w.default.string,w.default.number]),x={all:w.default.bool,grid:w.default.bool,aural:w.default.bool,braille:w.default.bool,handheld:w.default.bool,print:w.default.bool,projection:w.default.bool,screen:w.default.bool,tty:w.default.bool,tv:w.default.bool,embossed:w.default.bool},N={orientation:w.default.oneOf(["portrait","landscape"]),scan:w.default.oneOf(["progressive","interlace"]),aspectRatio:w.default.string,deviceAspectRatio:w.default.string,height:C,deviceHeight:C,width:C,deviceWidth:C,color:w.default.bool,colorIndex:w.default.bool,monochrome:w.default.bool,resolution:C,type:Object.keys(x)};N.type;var f=v(N,["type"]),d=g({minAspectRatio:w.default.string,maxAspectRatio:w.default.string,minDeviceAspectRatio:w.default.string,maxDeviceAspectRatio:w.default.string,minHeight:C,maxHeight:C,minDeviceHeight:C,maxDeviceHeight:C,minWidth:C,maxWidth:C,minDeviceWidth:C,maxDeviceWidth:C,minColor:w.default.number,maxColor:w.default.number,minColorIndex:w.default.number,maxColorIndex:w.default.number,minMonochrome:w.default.number,maxMonochrome:w.default.number,minResolution:C,maxResolution:C},f),h=g(g({},x),d);u.default={all:h,types:x,matchers:N,features:d}},"./src/toQuery.ts":function(s,u,c){var g=this&&this.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(u,"__esModule",{value:!0});var v=g(c("./node_modules/hyphenate-style-name/index.js")),y=g(c("./src/mediaQuery.ts")),w=function(f){return"not ".concat(f)},C=function(f,d){var h=(0,v.default)(f);return typeof d=="number"&&(d="".concat(d,"px")),d===!0?h:d===!1?w(h):"(".concat(h,": ").concat(d,")")},x=function(f){return f.join(" and ")},N=function(f){var d=[];return Object.keys(y.default.all).forEach(function(h){var k=f[h];k!=null&&d.push(C(h,k))}),x(d)};u.default=N},"./src/useMediaQuery.ts":function(s,u,c){var g=this&&this.__importDefault||function(z){return z&&z.__esModule?z:{default:z}};Object.defineProperty(u,"__esModule",{value:!0});var v=c("react"),y=g(c("./node_modules/matchmediaquery/index.js")),w=g(c("./node_modules/hyphenate-style-name/index.js")),C=c("./node_modules/shallow-equal/dist/index.esm.js"),x=g(c("./src/toQuery.ts")),N=g(c("./src/Context.ts")),f=function(z){return z.query||(0,x.default)(z)},d=function(z){if(z){var j=Object.keys(z);return j.reduce(function(U,A){return U[(0,w.default)(A)]=z[A],U},{})}},h=function(){var z=(0,v.useRef)(!1);return(0,v.useEffect)(function(){z.current=!0},[]),z.current},k=function(z){var j=(0,v.useContext)(N.default),U=function(){return d(z)||d(j)},A=(0,v.useState)(U),b=A[0],xe=A[1];return(0,v.useEffect)(function(){var Ae=U();(0,C.shallowEqualObjects)(b,Ae)||xe(Ae)},[z,j]),b},E=function(z){var j=function(){return f(z)},U=(0,v.useState)(j),A=U[0],b=U[1];return(0,v.useEffect)(function(){var xe=j();A!==xe&&b(xe)},[z]),A},P=function(z,j){var U=function(){return(0,y.default)(z,j||{},!!j)},A=(0,v.useState)(U),b=A[0],xe=A[1],Ae=h();return(0,v.useEffect)(function(){if(Ae){var Ke=U();return xe(Ke),function(){Ke&&Ke.dispose()}}},[z,j]),b},S=function(z){var j=(0,v.useState)(z.matches),U=j[0],A=j[1];return(0,v.useEffect)(function(){var b=function(xe){A(xe.matches)};return z.addListener(b),A(z.matches),function(){z.removeListener(b)}},[z]),U},M=function(z,j,U){var A=k(j),b=E(z);if(!b)throw new Error("Invalid or missing MediaQuery!");var xe=P(b,A),Ae=S(xe),Ke=h();return(0,v.useEffect)(function(){Ke&&U&&U(Ae)},[Ae]),(0,v.useEffect)(function(){return function(){xe&&xe.dispose()}},[]),Ae};u.default=M},react:s=>{s.exports=n}},i={};function o(s){var u=i[s];if(u!==void 0)return u.exports;var c=i[s]={exports:{}};return r[s].call(c.exports,c,c.exports,o),c.exports}o.d=(s,u)=>{for(var c in u)o.o(u,c)&&!o.o(s,c)&&Object.defineProperty(s,c,{enumerable:!0,get:u[c]})},o.o=(s,u)=>Object.prototype.hasOwnProperty.call(s,u),o.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var l=o("./src/index.ts");return l})())})(Th);const Rh=e=>{const{className:t,text1:n="Compradores",text2:r="Quiénes somos"}=e;return m(ln,{children:[m("div",{className:t,children:[m("div",{children:[n,a("svg",{width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),a("hr",{})]}),m("div",{className:t,children:[m("div",{children:[r,a("svg",{width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),a("hr",{})]})]})},Oh=p`

  background-color: black;
  color: white;
  padding: 1rem 0rem;
`,Ih=p`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 1rem 0rem;

  & > div {
    height: 5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    padding: 0rem 2rem;

    @media (min-width: 725px) {
      padding: 0.5rem 0rem;
      gap: 10%;
    }
  }

  @media (min-width: 725px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    position: relative;
    left: 2em;
  }
`,$h=p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  width: 40px;
  height: 40px;

  img {
    width: 24px;
    height: 24px;
  }
`,Sl=p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  width: 38px;
  height: 38px;

  img {
    width: 40px;
    height: 40px;
  }
`,bh=p`
  margin: 0rem 0rem 2rem;

  color: rgba(255, 255, 255, 0.64);

  hr {
    border: 0.5px solid #4d4d4d;

  }
`,Dh=p`
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
`,Uh=p`
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem 0rem;
  justify-content: space-between;
  height: 100%;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;

  h3 {
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
  @media (min-width: 725px) {
    margin-top: 0rem;
  }
`,Ah=p`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem 5rem;
  gap: 0.5rem;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: #737373;
`,Bh=p`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 725px) {
    margin-top: 5rem;
  }
`;p`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, auto));

  padding: 0rem 2rem;
  height: 18rem;

  div {
    color: white;
    border: 1px solid;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    font-variant: small-caps;
    color: #ffffff;
  }

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 170%;
`;p`

 display: flex;
 flex-direction: column;
 justify-content: space-between;
 height: 100%;
 box-sizing: content-box;

`;const Fh=()=>{const e=zt.useMediaQuery({maxWidth:"725px"});return a("footer",{className:Oh,children:a("div",{className:bh,children:e?m(ln,{children:[m("div",{className:Ih,children:[m("div",{children:[a(Le,{to:"#",children:a("div",{className:$h,children:a("img",{src:"/assets/fi_truck.png",alt:"icon"})})}),a("p",{children:"Entega"})]}),m("div",{children:[a(Le,{to:"#",children:a("div",{className:Sl,children:a("img",{src:"/assets/Group178.png",alt:"icon"})})}),a("p",{children:"Devoluciones y cambios"})]}),m("div",{children:[a(Le,{to:"#",children:a("div",{className:Sl,children:a("img",{src:"/assets/Group33.png",alt:"icon"})})}),a("p",{children:"+375 (29) 749-18-23"})]}),m("div",{children:[a(Le,{to:"#",children:a("div",{className:Sl,children:a("img",{src:"/assets/Group34.png",alt:"icon"})})}),a("p",{children:"shop@omix.com"})]})]}),a("hr",{}),a(Rh,{className:Dh}),m("div",{className:Uh,children:[a("h3",{children:"Estamos en las redes sociales"}),m("div",{children:[a("svg",{width:"24",height:"23",viewBox:"0 0 24 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M22.0005 11.9999C22.0005 6.47705 17.5233 1.9999 12.0005 1.9999C6.47764 1.9999 2.00049 6.47705 2.00049 11.9999C2.00049 16.9912 5.65734 21.1282 10.438 21.8784V14.8905H7.89893V11.9999H10.438V9.79677C10.438 7.29052 11.9309 5.90615 14.2151 5.90615C15.3092 5.90615 16.4536 6.10146 16.4536 6.10146V8.5624H15.1926C13.9504 8.5624 13.563 9.33324 13.563 10.1241V11.9999H16.3364L15.8931 14.8905H13.563V21.8784C18.3436 21.1282 22.0005 16.9912 22.0005 11.9999Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),a("svg",{width:"24",height:"19",viewBox:"0 0 24 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.5949 2.45999C21.5421 2.71353 22.2865 3.45785 22.54 4.40501C22.9982 6.12001 23 9.70036 23 9.70036C23 9.70036 23 13.2807 22.54 14.9957C22.2865 15.9429 21.5421 16.6872 20.5949 16.9407C18.88 17.4007 12 17.4007 12 17.4007C12 17.4007 5.12001 17.4007 3.405 16.9407C2.45785 16.6872 1.71353 15.9429 1.45999 14.9957C1 13.2807 1 9.70036 1 9.70036C1 9.70036 1 6.12001 1.45999 4.40501C1.71353 3.45785 2.45785 2.71353 3.405 2.45999C5.12001 2 12 2 12 2C12 2 18.88 2 20.5949 2.45999ZM15.5134 9.70067L9.79788 13.0003V6.40101L15.5134 9.70067Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),a("svg",{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M2.0617 7.24464C2.10847 6.22264 2.26849 5.56351 2.4849 5.00402L2.48781 4.99629C2.70226 4.42695 3.03821 3.91119 3.47227 3.48489L3.47836 3.47891L3.48434 3.47282C3.91099 3.0382 4.42694 2.70258 4.99578 2.4887L5.00559 2.48495C5.56381 2.26786 6.22165 2.10843 7.2445 2.06167M2.0617 7.24464C2.01253 8.33659 2 8.67508 2 11.5063C2 14.3381 2.01184 14.6758 2.06167 15.768M2.0617 7.24464L2.0617 7.52008M2.4887 18.0168C2.70258 18.5856 3.0382 19.1015 3.47282 19.5282L3.4789 19.5342L3.48487 19.5402C3.91119 19.9743 4.42697 20.3103 4.99631 20.5247L5.00481 20.5279C5.56354 20.7446 6.2217 20.9041 7.2445 20.9509M2.4887 18.0168L2.48495 18.0069C2.26786 17.4487 2.10843 16.7909 2.06167 15.768M2.4887 18.0168L2.47588 17.9492M2.06167 15.768L2.07842 15.8562M2.06167 15.768L2.06167 15.4919M2.47588 17.9492L2.07842 15.8562M2.47588 17.9492C2.30707 17.5033 2.13325 16.881 2.07842 15.8562M2.47588 17.9492C2.4818 17.9649 2.48771 17.9803 2.49362 17.9955C2.70769 18.5726 3.04689 19.0952 3.48682 19.5256C3.91712 19.9655 4.43947 20.3046 5.01639 20.5187C5.47938 20.699 6.13176 20.8875 7.24434 20.9385C8.36713 20.9896 8.71402 21 11.5063 21C14.2985 21 14.6457 20.9896 15.7685 20.9385C16.8825 20.8874 17.5341 20.6979 17.9954 20.519C18.5727 20.305 19.0953 19.9657 19.5257 19.5256C19.9655 19.0953 20.3046 18.573 20.5187 17.9961C20.699 17.5331 20.8875 16.8808 20.9385 15.7682C20.9896 14.6454 21 14.2978 21 11.5063C21 8.71472 20.9896 8.36684 20.9385 7.24405C20.8871 6.12427 20.6959 5.47168 20.5162 5.00992C20.2811 4.40322 19.9831 3.94437 19.525 3.48627C19.0678 3.02999 18.6102 2.73179 18.0031 2.49654C17.5396 2.31537 16.8866 2.12531 15.7685 2.07406C15.6712 2.06964 15.5798 2.06552 15.4921 2.06168M2.07842 15.8562C2.07687 15.8273 2.07542 15.7981 2.07406 15.7685C2.06964 15.6712 2.06551 15.5797 2.06167 15.4919M7.2445 2.06167C8.33671 2.01184 8.67508 2 11.5063 2C14.3374 2 14.6757 2.01252 15.7676 2.06168M7.2445 2.06167L7.52065 2.06167M15.7676 2.06168L15.4921 2.06168M15.7676 2.06168C16.7898 2.10844 17.449 2.26844 18.0085 2.48487L18.0162 2.48781C18.5856 2.70226 19.1013 3.03821 19.5276 3.47227L19.5336 3.4783L19.5396 3.48422C19.9737 3.91055 20.3096 4.42646 20.5239 4.99596L20.5276 5.00559C20.7447 5.56381 20.9041 6.22165 20.9509 7.2445M7.52065 2.06167L15.4921 2.06168M7.52065 2.06167C8.44551 2.02123 8.95669 2.01253 11.5063 2.01253C14.0561 2.01253 14.5671 2.02124 15.4921 2.06168M7.52065 2.06167C7.43287 2.06551 7.34137 2.06964 7.24405 2.07406C6.13007 2.12512 5.47846 2.31464 5.01711 2.49358C4.4377 2.70837 3.91331 3.04936 3.48195 3.49186C3.02813 3.94756 2.73108 4.40422 2.49658 5.0094C2.31539 5.4728 2.1253 6.12614 2.07405 7.24434C2.06964 7.34135 2.06552 7.43257 2.0617 7.52008M20.9509 15.768C20.9041 16.7908 20.7447 17.449 20.528 18.0077L20.5247 18.0162C20.3103 18.5856 19.9743 19.1013 19.5403 19.5276L19.5342 19.5336L19.5282 19.5397C19.1015 19.9743 18.5856 20.3099 18.0168 20.5238L18.0069 20.5276C17.4487 20.7447 16.7909 20.9041 15.768 20.9509M2.06167 15.4919C2.02123 14.567 2.01253 14.0558 2.01253 11.5063C2.01253 8.95591 2.02123 8.44544 2.0617 7.52008M2.06167 15.4919L2.0617 7.52008M9.81551 15.5881C10.3516 15.8101 10.9261 15.9244 11.5063 15.9244C12.678 15.9244 13.8018 15.4589 14.6304 14.6304C15.4589 13.8018 15.9244 12.678 15.9244 11.5063C15.9244 10.3345 15.4589 9.21072 14.6304 8.38215C13.8018 7.55359 12.678 7.0881 11.5063 7.0881C10.9261 7.0881 10.3515 7.20238 9.81551 7.42442C9.27948 7.64645 8.79242 7.97189 8.38216 8.38215C7.9719 8.79242 7.64646 9.27947 7.42442 9.81551C7.20239 10.3515 7.08811 10.9261 7.08811 11.5063C7.08811 12.0865 7.20239 12.661 7.42442 13.197C7.64646 13.7331 7.9719 14.2201 8.38216 14.6304C8.79242 15.0406 9.27948 15.3661 9.81551 15.5881ZM8.37232 8.37231C9.20349 7.54113 10.3308 7.07418 11.5063 7.07418C12.6817 7.07418 13.809 7.54113 14.6402 8.37231C15.4714 9.20349 15.9383 10.3308 15.9383 11.5063C15.9383 12.6817 15.4714 13.809 14.6402 14.6402C13.809 15.4714 12.6817 15.9383 11.5063 15.9383C10.3308 15.9383 9.20349 15.4714 8.37232 14.6402C7.54114 13.809 7.07419 12.6817 7.07419 11.5063C7.07419 10.3308 7.54114 9.20349 8.37232 8.37231ZM18.434 6.04229C18.434 6.37873 18.3004 6.70139 18.0625 6.93929C17.8246 7.17719 17.5019 7.31084 17.1655 7.31084C16.829 7.31084 16.5064 7.17719 16.2685 6.93929C16.0306 6.70139 15.8969 6.37873 15.8969 6.04229C15.8969 5.70585 16.0306 5.38319 16.2685 5.1453C16.5064 4.9074 16.829 4.77375 17.1655 4.77375C17.5019 4.77375 17.8246 4.9074 18.0625 5.1453C18.3004 5.38319 18.434 5.70585 18.434 6.04229Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),a("svg",{width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M22 3.9246C21.2645 4.25051 20.4744 4.47071 19.6438 4.57025C20.4911 4.06289 21.1412 3.25782 21.4477 2.29948C20.655 2.76984 19.7768 3.1116 18.8422 3.29481C18.0935 2.49855 17.0277 2 15.8474 2C13.582 2 11.7446 3.8374 11.7446 6.10464C11.7446 6.42526 11.7816 6.73707 11.8503 7.03832C8.43883 6.86656 5.41672 5.23263 3.39258 2.75046C3.04025 3.35823 2.83766 4.06289 2.83766 4.81335C2.83766 6.23677 3.56258 7.4937 4.66273 8.22919C3.98978 8.20717 3.35735 8.02308 2.80419 7.71567V7.76852C2.80419 9.75654 4.21792 11.4151 6.09583 11.7921C5.75055 11.8855 5.38853 11.9348 5.01506 11.9348C4.75081 11.9348 4.49273 11.9102 4.24258 11.8626C4.76491 13.4921 6.27993 14.6795 8.07593 14.7112C6.67101 15.8122 4.90144 16.4684 2.97948 16.4684C2.64829 16.4684 2.3215 16.449 2 16.4112C3.81626 17.5765 5.97252 18.2547 8.28909 18.2547C15.8378 18.2547 19.9644 12.0026 19.9644 6.58029C19.9644 6.40412 19.96 6.2262 19.9521 6.05003C20.7536 5.47045 21.4495 4.74905 21.9982 3.92724L22 3.9246Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),a("svg",{width:"21",height:"24",viewBox:"0 0 21 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M15.8218 5.1344C15.0887 4.29394 14.648 3.19805 14.648 2H13.7293M15.8218 5.1344C16.4899 5.90063 17.3945 6.45789 18.4245 6.67608C18.7446 6.74574 19.0787 6.78293 19.4267 6.78293V10.2191C17.645 10.2191 15.9933 9.64801 14.6478 8.68211V15.6707C14.6478 19.1627 11.8083 22 8.32392 22C6.50049 22 4.8534 21.2198 3.69812 19.98C2.64492 18.847 2 17.3331 2 15.6707C2 12.2298 4.75598 9.42509 8.17079 9.35079M15.8218 5.1344C15.8039 5.12276 15.7861 5.11101 15.7684 5.09914M5.98556 17.3517C5.64223 16.8781 5.43808 16.2977 5.43808 15.6661C5.43808 14.0734 6.73255 12.7778 8.324 12.7778C8.62093 12.7778 8.90856 12.8288 9.17768 12.9124V9.40192C8.89927 9.36473 8.61628 9.34149 8.324 9.34149C8.27294 9.34149 7.86183 9.36884 7.81079 9.36884M13.7245 2H11.2098L11.2051 15.7775C11.1495 17.3192 9.87817 18.5591 8.32392 18.5591C7.35884 18.5591 6.50977 18.0808 5.98086 17.3564",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.9971 12C21.9971 17.5228 17.5199 22 11.9971 22C6.47422 22 1.99707 17.5228 1.99707 12C1.99707 6.47715 6.47422 2 11.9971 2C17.5199 2 21.9971 6.47715 21.9971 12ZM12.3554 9.38244C11.3828 9.787 9.43884 10.6243 6.52364 11.8944C6.05025 12.0827 5.80227 12.2669 5.7797 12.4469C5.74155 12.7513 6.12266 12.8711 6.64162 13.0343C6.71222 13.0565 6.78536 13.0795 6.86034 13.1038C7.37092 13.2698 8.05775 13.464 8.4148 13.4717C8.73868 13.4787 9.10017 13.3452 9.49926 13.0711C12.223 11.2325 13.629 10.3032 13.7173 10.2831C13.7796 10.269 13.8659 10.2512 13.9244 10.3032C13.9828 10.3552 13.9771 10.4536 13.9709 10.48C13.9331 10.641 12.4371 12.0318 11.663 12.7515C11.4216 12.9759 11.2505 13.135 11.2155 13.1714C11.1371 13.2528 11.0572 13.3298 10.9804 13.4038C10.506 13.8611 10.1503 14.204 11.0001 14.764C11.4084 15.0331 11.7352 15.2556 12.0612 15.4776C12.4172 15.7201 12.7723 15.9619 13.2317 16.2631C13.3488 16.3398 13.4606 16.4195 13.5695 16.4971C13.9838 16.7925 14.356 17.0579 14.8159 17.0155C15.0831 16.991 15.3591 16.7397 15.4993 15.9903C15.8306 14.2193 16.4817 10.3821 16.6322 8.80081C16.6454 8.66228 16.6288 8.48498 16.6155 8.40715C16.6022 8.32932 16.5744 8.21842 16.4732 8.13633C16.3534 8.03912 16.1684 8.01861 16.0857 8.02C15.7096 8.0267 15.1325 8.22735 12.3554 9.38244Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})})]})]}),m("div",{className:Ah,children:[m("div",{children:["Omix Store Sociedad de Responsabilidad Limitada, dirección legal: 100, avenida Pobediteley, Minsk, 220020, oficina 203. 203",a("br",{}),"En el registro mercantil desde el 23 de junio de 2010"]}),m("div",{className:Bh,children:[a("img",{src:"/assets/belcart-footer.png",alt:"icon"}),a("img",{src:"/assets/visa-footer.png",alt:"icon"}),a("img",{src:"/assets/master-card-footer.png",alt:"icon"}),a("img",{src:"/assets/icon-footer2.png",alt:"icon"})]}),m("div",{children:["2020 - 2022 Omics Store Ltd. ",a("br",{}),"Todos los derechos reservados."]})]})]}):a(jh,{})})})},V={root:"/",woman:"/mujer",product:"/product",cart:"/cart",checkout:"/checkout",payment:"/payment"},Vh=p`
  position: fixed;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  width: 100%;


  background: white;
  z-index: 99999;
  height: 60px;
  padding-left: 1rem;
  & > :last-child {
    justify-self: end;
  }

  @media (min-width: 725px) {
    grid-template-columns: 5% 20% 50% auto;
  }

  @media (min-width: 1024px) {
    grid-template-columns:  20% 50% auto;
  }
`,Wh=p`

@media (min-width: 1024px) {
  display: none;
 }
`,Hh=p`
  margin: auto;

  @media (max-width: 725px) {
    display: none;
}

@media (min-width: 1000px) {
    white-space: nowrap;
}
`,Qh=p`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 2rem;
  justify-content: center;

  a {
    text-decoration: none;
    color: #212429;
  }


  @media (min-width: 1024px) {
    gap: 3rem;
  }
`,Yh=p`
  display: flex;
  gap: 20px;
  padding: 0rem 1rem;
  height: 18px;
  margin-right: 3rem;

`,Kh=()=>a("nav",{className:Hh,children:m("ul",{className:Qh,children:[a("li",{children:a(Le,{to:V.woman,children:"PARA MUJERES"})}),a("li",{children:a(Le,{to:V.woman,children:"HOMBRE"})}),a("li",{children:a(Le,{to:V.woman,children:"NUEVO"})}),a("li",{children:a(Le,{to:V.woman,children:"COLECCIONES ESPECIALES"})})]})}),Xh=()=>m("header",{className:Vh,children:[a("div",{className:Wh,children:a("img",{src:"/assets/shape-lines.png",alt:"menu"})}),a("div",{children:a(Le,{to:V.root,children:a("img",{className:"img_1",src:"/assets/icons/logo.svg",alt:"logo"})})}),a(Kh,{}),m("div",{className:Yh,children:[a("img",{src:"/assets/gallery/shape-2.png",alt:"magnifying glass"}),a("img",{src:"/assets/gallery/shape-hearth.png",alt:"heart"}),a(Le,{to:V.cart,children:a("img",{src:"/assets/gallery/shape.png",alt:"cart"})})]})]}),Zh=p`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  gap: 10px;
  margin: auto;
  background: #f7f7f7;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-variant: small-caps;
  color: #000000;

  & :first-child {
    font-weight: 700;
  }

  span {
    font-weight: 700;
  }

  @media (min-width: 725px) {
    padding: 0rem 5rem;

    div {
      padding: 0rem 5rem;
    }
  }
`,Gh=e=>{const{children:t,className:n}=e;return m("div",{className:yt(Zh,n),children:[m("div",{children:["Importe total del pedido: ",a("span",{children:"169.98 €"})]}),m("div",{children:["Coste de los bienes: ",a("span",{children:"159.98 €"})]}),m("div",{children:["Entrega: ",a("span",{children:"10 €"})]}),m("div",{children:["Importe del descuento: ",a("span",{children:"0 €"})]}),t]})},Jh=p`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`,qh=e=>{const{children:t}=e;return m("div",{className:Jh,children:[a(Xh,{}),t,a(Fh,{})]})},e2=p`

  padding: 1rem;

  hr {
    display: none;
  }

  @media (min-width: 725px) {
    max-width: 530px;
    width: 100%;

    hr {
      display: unset;
      background: #212429;
      border: 1px solid #212429;
      margin: 1rem 5rem;
    }
  }

  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  gap: 10px;
  margin: auto;
  background: #f8f8f8;
  border-radius: 12px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-variant: small-caps;
  color: #000000;

  & :first-child {
    font-weight: 700;
  }

  span {
    font-weight: 700;
    white-space: nowrap;
  }

  @media (min-width: 725px) {
    padding: 1rem 0rem;

    div {
      padding: 0rem 5rem;
      gap: 150px;
    }
  }

  @media (min-width: 1024px) {
    max-width: 530px;
    width: 100%;
  }
`,Ri=p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
`,t2=p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  font-variant: small-caps;
  color: #212429;

  @media (max-width: 725px) {
    display: none;
  }
`,n2=p`
  font-weight: 500;
  border-radius: 48px;
  max-width: calc(530px - 150px);
  width: 100%;
  margin: 2rem auto 3rem;
  border: 1px solid #212429;

  cursor: pointer;
  color: #ffffff;
  background: black;
  border-radius: 48px;
`,r2=e=>{const{className:t}=e;return m("div",{className:yt(e2,t),children:[a("div",{className:Ri,children:"Importe total del pedido"}),m("div",{className:Ri,children:["Coste de los bienes ",a("span",{children:"159.98 €"})]}),m("div",{className:Ri,children:["Entrega ",a("span",{children:"10 €"})]}),m("div",{className:Ri,children:["Importe del descuento ",a("span",{children:"0 €"})]}),a("hr",{}),m("div",{className:t2,children:["Importe total ",a("span",{children:"169,98 €"})]}),a(le,{route:V.payment,className:n2,children:"Pagar"})]})},i2=p`

  margin-top: 60px;
  padding: 0rem 1rem;
  
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;
  }

`,o2=p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: rgba(33, 36, 41, 0.64);
`,l2=p`


  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;

  #img {
    width: 16px;
    @media (min-width: 1024px) {
    display: none;
    }
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    font-variant: small-caps;
    color: #000000;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #212429;
  }

  @media (min-width: 1024px) {
    padding: 1rem 0rem;
  }
`,a2=p`
  display: grid;
  grid-template-rows: repeat(4, auto);
  justify-content: center;
  gap: 20px;

  input {
    width: 312px;
    height: 48px;
    border: 1px solid #dbe5f1;
    border-radius: 24px;
    padding-left: 0.3rem;

    & :focus {
      border: 1px solid #212429;
    }
  }

  @media (min-width: 1024px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(2, auto);
    justify-content: unset;
  }
`,s2=p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #999999;
`,u2=p`
  padding: 2rem 0rem 3rem;

  div {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    margin: 1rem 0rem;

    @media (min-width: 1024px) {
      justify-content: unset;
    }
  }

  button {
    width: 152px;
    height: 48px;
    background: #f8f8f8;
    border: 1px solid #212429;
    border-radius: 48px;

    &:hover {
      background: #000000;
      color: #f8f8f8;
    }

    @media (min-width: 1024px) {
      width: 176px;
    }
  }
`,c2=()=>{const e=()=>{window.scrollTo(0,0)};return ct.useEffect(()=>{e()},[]),m("div",{className:i2,children:[m("div",{className:l2,children:[a("div",{className:o2,children:"Inicio / Cesta / Pedidos"}),m("h1",{children:[a("img",{id:"img",src:"/assets/gallery/shape-arrow-left.png",alt:"arrow-left"}),"Pedidos"]}),a("h2",{children:"Datos de contacto"}),m("div",{className:a2,children:[a(Ge,{pl:"Nombre"}),a(Ge,{pl:"Apellido"}),a(Ge,{type:"email",pl:"E-mail"}),a(Ge,{type:"number",pl:"Teléfono"})]}),a("h2",{children:"Dirección de entrega"}),a("p",{children:"España, Madrid, Andrés Mellado, 77"}),a("div",{className:s2,children:"Cambiar dirección"}),m("div",{className:u2,children:[a("h2",{children:"Forma de pago"}),m("div",{children:[a(le,{children:"Pago en línea"}),a(le,{children:"Al recibir"})]})]})]}),a(r2,{})]})},d2=p`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1200px){
  & > div:last-of-type {
    align-self: center;
   }
  }
`,f2=p`

  margin: 2rem 2rem 1rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #212429;

`,p2=p`
  display: flex;
  margin: 0rem 1rem;
  gap: 20px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: 725px) {
    margin: auto 1rem;
  }
`,jn=p`
  width: 176px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  img {
    width: 176px;
  }


    text-align: center;

`,m2=()=>m("div",{className:d2,children:[a("h2",{className:f2,children:"Actual"}),m("div",{className:p2,children:[m("div",{className:jn,children:[a("img",{src:"/assets/gallery/actual-image1.png",alt:"image"}),"Primavera/verano 2022"]}),m("div",{className:jn,children:[a("img",{src:"/assets/gallery/actual-image2.png",alt:"image"}),"Elegir un estilista"]}),m("div",{className:jn,children:[a("img",{src:"/assets/gallery/actual-image3.png",alt:"image"}),"Camisetas"]}),m("div",{className:jn,children:[a("img",{src:"/assets/gallery/actual-image4.png",alt:"image"}),"Camisas"]}),m("div",{className:jn,children:[a("img",{src:"/assets/gallery/actual-image5.png",alt:"image"}),"Vestidos"]}),m("div",{className:jn,children:[a("img",{src:"/assets/gallery/Group8-sale.png",alt:"sale"}),"Sale"]})]})]}),h2=p`
  background-image: url('/assets/group93.png');
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 2rem;
  width: 100%;
  height: 525px;

  @media (min-width: 725px) {
    background-image: url('/assets/gallery/grupo192.png');
    height: 800px;
  }
`,g2=p`
  position: relative;
  top: 50%;
  display: flex;
  flex-direction: column;
  text-align: start;
  align-items: center;
  padding: 0rem  1rem;

  @media (min-width: 1024px) {
    left: 20%;
  }
`,v2=p`

  div {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 150%;
    color: #000000;
  }
`,y2=p`
  width: 180px;
  border: solid 1px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  cursor: pointer;
  background-color: Transparent;

  &:hover {
    background-color: #212429;
    color: #ffffff;
    border: 0;
  }
`,x2=()=>a("div",{className:h2,children:m("div",{className:g2,children:[m("div",{className:v2,children:[a("p",{children:"ENVÍO GRATUITO EN TODOS LOS PEDIDOS"}),a("div",{children:"COLECCIÓN DE DEPORTES"})]}),a(le,{route:V.woman,className:y2,children:"Me interesa"})]})}),w2=p`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0rem 0.5rem;
  box-sizing: border-box;

`,C2=p`
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 100%;
  color: #212429;
  margin: auto;

`,k2=p`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #212429;
  margin: auto;
`,ec=p`
  position: relative;
  place-self: center;
  justify-self: center;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: #212429;
  text-align: start;
`,S2=p`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  @media (max-width: 700px) {
    justify-content: center;
    margin: auto;
  }

  button {
    border: solid 1px;
    margin: auto;
    cursor: pointer;

    &:hover {
      background-color: #f6b750;
      border: 0;
    }
  }
`,E2=()=>{const e=zt.useMediaQuery({minWidth:"725px"});return m("div",{className:w2,children:[e?m("div",{className:C2,children:["Todos ",a("br",{})," los estilos ",a("br",{})," más actuales"]}):a("div",{className:k2,children:"Hay ropa para todos"}),e?m("div",{className:ec,children:["Encuentra la ropa más actual en nuestra tienda y",a("br",{}),"obtén descuentos en tus compras."]}):a("div",{className:ec,children:"Pague sólo por lo que le convenga y le guste."}),m("div",{className:S2,children:[a(le,{route:V.woman,children:"Para mujeres"}),a(le,{route:V.woman,children:"Para hombres"})]})]})},N2=p`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  height: 100%;

`,P2=p`

  margin: 2rem 2rem 1rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #212429;
`,_2=p`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-left: 2rem;

  a {
    text-decoration: none;
    color: #212429;
  }
`,L2=p`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  margin: auto;
  padding: 0rem 1rem;
  box-sizing: border-box;
  overflow-x: auto;
  justify-content: center;
  margin-top: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* for IE y Edge */
  scrollbar-width: none; /* for Firefox */


  @media (min-width: 725px) {
    display: flex;
    justify-content: space-around;
    gap: 20px;
  }
`,Oi=p`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  img {
    width: 100%;
    height: 100%;

  }
`,z2=()=>{const e=dr();function t(){return e("/mujer")}return m("div",{className:N2,children:[a("h2",{className:P2,children:"Éxitos de ventas"}),m("div",{className:_2,children:[a(Le,{to:V.woman,children:"Mujeres"}),a(Le,{to:V.woman,children:"Hombres"})]}),m("div",{id:"exito-ventas",className:L2,children:[a(q,{onClick:()=>t(),className:Oi,imageUrl:"/assets/gallery/exito-venta1.png",name:"Camiseta",price:"34.95 €"}),a(q,{className:Oi,onClick:()=>t(),imageUrl:"/assets/gallery/exito-venta2.png",name:"Vestido",price:"34.95 €"}),a(q,{onClick:()=>t(),imageUrl:"/assets/gallery/exito-venta3.png",className:Oi,name:"Vaqueros",price:"80.00 €"}),a(q,{onClick:()=>t(),imageUrl:"/assets/gallery/exito-venta4.png",className:Oi,name:"Vestido",price:"179.00 €",offer:"75.00 €"})]})]})},M2=p`
  display: flex;
  flex-direction: column;
  justify-content: center;


  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 120%;

  font-variant: small-caps;
  color: #212429;

  width: 100%;

  & > :first-child {
    margin: 1rem 0rem;
    padding: 0rem 3rem;
  }
`,j2=p`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, auto);
  padding: 0rem 1rem;

  gap: 1rem;

  img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(2, auto);
    padding: 0rem 3rem;
  }
`,T2=()=>m("div",{className:M2,children:[a("div",{children:"@Onix"}),m("div",{className:j2,children:[a("img",{src:"/assets/gallery/omix1.png",alt:"image"}),a("img",{src:"/assets/gallery/omix3.png",alt:"image"}),a("img",{src:"/assets/gallery/omix2.png",alt:"image"}),a("img",{src:"/assets/gallery/omix4.png",alt:"image"}),a("img",{src:"/assets/gallery/omix5.png",alt:"image"}),a("img",{src:"/assets/gallery/omix6.png",alt:"image"}),a("img",{src:"/assets/gallery/omix7.png",alt:"image"}),a("img",{src:"/assets/gallery/omix8.png",alt:"image"})]})]}),R2=p`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: end;

  img {
    width: 100%;
    box-sizing: border-box;
  }
`,O2=p`
  position: absolute;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
  border-radius: 0px 0px 24px 24px;
  width: 100%;
  max-height: 128px;
  height: 100%;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    text-align: center;
    font-variant: small-caps;
    color: #ffffff;
  }
`,Tn=e=>{const{imgUrl:t,text:n,route:r}=e,i=dr();function o(){return i(`${r}`)}return m("div",{onClick:o,className:R2,children:[a("img",{src:t,alt:"image"}),a("div",{className:O2,children:a("h3",{children:n})})]})},I2=p`
  display: flex;
  flex-direction: column;

`,$2=p`
  margin: 1rem 2rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #212429;
`,tc=p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 20px;
  padding: 0rem 1rem;

  @media (min-width: 725px) {
    justify-content: space-around;
    flex-direction: row;
    gap: 10px;
  }
  
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* for IE y Edge */
  scrollbar-width: none; /* for Firefox */

  @media (min-width: 1024px) {
    gap: 20px;
  }
`;p`
  img {
    height: auto;
    object-fit: cover;
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;

    @media (min-width: 725px) {
      width: 100%;
    }
  }
`;const b2=()=>{const e=zt.useMediaQuery({minWidth:"725px"});return m("div",{id:"nuevas-colecciones",className:I2,children:[a("h2",{className:$2,children:"Nuevas colecciones"}),e?m("div",{className:tc,children:[a(Tn,{imgUrl:"/assets/gallery/new-collection-desktop1.png",text:"Primavera/Verano 2022",route:V.woman}),a(Tn,{imgUrl:"/assets/gallery/new-collection-desktop2.png",text:"Vaqueros",route:V.woman}),a(Tn,{imgUrl:"/assets/gallery/new-collection-desktop3.png",text:"Bañadores",route:V.woman})]}):m("div",{className:tc,children:[a(Tn,{imgUrl:"/assets/gallery/new-collection1.png",text:"Primavera/Verano 2022",route:V.woman}),a(Tn,{imgUrl:"/assets/gallery/new-collection2.png",text:"Vaqueros",route:V.woman}),a(Tn,{imgUrl:"/assets/gallery/new-collection3.png",text:"Bañadores",route:V.woman})]})]})},D2=p`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  height: 100%;

`,U2=p`
  margin: 2rem 2rem 1rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #212429;
`,A2=p`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-left: 2rem;

  a {
    text-decoration: none;
    color: #212429;
  }
`,B2=p`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, auto);
  margin: auto;
  padding: 0rem 0.5rem;
  justify-self: center;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
    padding: 0rem;

  }
`,Ft=p`
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
  justify-content: center;


  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;

  height: 100%;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`,nc=p`
  @media (max-width: 1024px) {
    display: none;
  }
`,F2=()=>{const e=dr();function t(){e(V.product)}return m("div",{className:D2,children:[a("h2",{className:U2,children:"Nuevo productos"}),m("div",{className:A2,children:[a(Le,{to:V.woman,children:"Mujeres"}),a(Le,{to:V.woman,children:"Hombres"})]}),m("div",{id:"nuevos-productos",className:B2,children:[a(q,{onClick:()=>t(),className:Ft,imageUrl:"/assets/gallery/nuevos-productos1.png",name:"Polo",price:"44.95 €"}),a(q,{className:Ft,onClick:()=>t(),imageUrl:"/assets/gallery/nuevos-productos2.png",name:"Camiseta",price:"25.00 €"}),a(q,{className:Ft,onClick:()=>t(),imageUrl:"/assets/gallery/nuevos-productos3.png",name:"Pantalones deportivos",price:"49.95 €"}),a(q,{className:Ft,onClick:()=>t(),imageUrl:"/assets/gallery/nuevos-productos4.png",name:"Camiseta",price:"27.99 €"}),a(q,{className:Ft,onClick:()=>t(),imageUrl:"/assets/gallery/nuevos-productos6.png",name:"Camisa",price:"25.00 €"}),a(q,{className:yt(Ft,nc),onClick:()=>t(),imageUrl:"/assets/gallery/nuevos-productos7.png",name:"Sudadera",price:"44.99 €"}),a(q,{className:Ft,onClick:()=>t(),imageUrl:"/assets/gallery/nuevos-productos5.png",name:"Juego de camisetas (5 piezas)",price:"75.95 €"}),a(q,{className:yt(Ft,nc),onClick:()=>t(),imageUrl:"/assets/gallery/nuevos-productos8.png",name:"Camiseta",price:"22.99 €"})]})]})},V2=p`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1225px;
  margin: 60px auto;

  hr {
    border: 1px solid #b6b6b6;
  }
`,W2=p`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 3rem;
  width: 100%;
  padding: 0rem 1rem;
  box-sizing: border-box;

  @media (min-width: 725px) {
    flex-direction: row;
    gap: 5%;
    padding: unset;
    box-sizing: unset;
  }

  @media (min-width: 1024px) {
    gap: 150px;
  }
`,H2=p`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (min-width: 725px) {
    border-radius: 0px 50% 0px 0px;
    width: 40%;
  }
`,El=p`
  margin: 2rem auto 1rem;
  padding: 0rem 1rem;
  border: solid 1px;
  width: 280px;
  cursor: pointer;

  &:hover {
    background-color: #212429;
    color: #ffffff;
    border: 0;
  }
`,Q2=p`
  margin-top: 3rem;
  border: 1px solid #b6b6b6;
`,Y2=()=>{const e=()=>{window.scrollTo(0,0)};return ct.useEffect(()=>{const t=window.location.hash.substring(1),n=document.getElementById(t);n?n.scrollIntoView({behavior:"smooth"}):e()},[]),m(ln,{children:[m("div",{className:V2,children:[m("div",{className:W2,children:[a("img",{className:H2,src:"/assets/gallery/primaryImage2.png",alt:"home-image"}),a(E2,{})]}),a(m2,{}),a(z2,{}),a(le,{route:V.woman,className:El,children:"Todos los éxitos"}),a(b2,{}),a(le,{route:V.woman,className:El,children:"Todas las colecciones"}),a(F2,{}),a(le,{route:V.woman,className:El,children:"Ver todos"}),a(x2,{}),a(T2,{})]}),a("hr",{className:Q2}),a(_s,{})]})},K2=p`

padding: 0rem 1rem;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 25% 75%;
    #div {
      position: sticky;
      top: 0;
    }
  }
`,X2=p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
`,Z2=p`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 42vw));
  justify-content: center;

  gap: 10px;

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 725px) {
    gap: 40px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(40px, 340px));
    gap: 30px;
    justify-content: center;
  }
`;p`
  justify-self: center ;

`;p`
  display: grid;
  grid-row-gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  color: #212429;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  span:nth-child(3) {

    font-weight: 700;
  }
`;p`

 display: none;
`;const G2=p`
  margin: 2rem auto 1rem;
  border: solid 1px;
  width: 100%;
  background: #212429;
  color: #ffffff;

`,J2=()=>{const e=dr();function t(){e(V.product)}return m("div",{className:K2,children:[a("div",{id:"div"}),m("div",{children:[a("div",{children:m("div",{className:X2,children:["Todos los productos",m("div",{children:[m("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a("path",{d:"M3.5 3.5H10.5V10.5H3.5V3.5Z",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"}),a("path",{d:"M3.5 13.5H10.5V20.5H3.5V13.5Z",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"}),a("path",{d:"M13.5 3.5H20.5V10.5H13.5V3.5Z",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"}),a("path",{d:"M13.5 13.5H20.5V20.5H13.5V13.5Z",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"})]}),m("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a("path",{d:"M0.500001 17.5L0.5 10.5L17.5 10.5V17.5H0.500001Z",stroke:"#B3B3B3",strokeLinecap:"round",strokeLinejoin:"round"}),a("path",{d:"M0.5 7.5L0.5 0.500001L17.5 0.5V7.5L0.5 7.5Z",stroke:"#B3B3B3",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})}),m("div",{className:Z2,children:[a(q,{imageUrl:"/assets/gallery/image-grid1.png",onClick:t,name:"Vaqueros",price:"79.99 €",sizes:"XS M L",colors:"1 Color"}),a(q,{imageUrl:"/assets/gallery/image-grid2.png",onClick:t,name:"Vestido",price:"34.99 €",sizes:"XS M L",colors:"1 Color"}),a(q,{imageUrl:"/assets/gallery/image-grid3.png",onClick:t,name:"Camisa",price:"44.99 €",sizes:"XS M L",colors:"2 Colores"}),a(q,{imageUrl:"/assets/gallery/image-grid4.png",onClick:t,name:"Vestido",price:"59.99 €",sizes:"XS M L",colors:"1 Color"}),a(q,{imageUrl:"/assets/gallery/image-grid5.png",onClick:t,name:"Camiseta",price:"22.99 €",sizes:"XS M L",colors:"17 Colores"}),a(q,{imageUrl:"/assets/gallery/image-grid6.png",onClick:t,name:"Pantalones cortos",price:"54.99 €",sizes:"XS M L",colors:"2 Colores"}),a(q,{imageUrl:"/assets/gallery/image-grid7.png",onClick:t,name:"Vaqueros",price:"79.99 €",sizes:"XS M L",colors:"1 Color"}),a(q,{imageUrl:"/assets/gallery/image-grid8.png",onClick:t,name:"Pantalones cortos",price:"54.99 €",sizes:"XS M L",colors:"17 Colores"}),a(q,{imageUrl:"/assets/gallery/image-grid9.png",onClick:t,name:"Vaqueros",price:"79.99 €",sizes:"XS M L",colors:"2 Colores"}),a(q,{imageUrl:"/assets/gallery/image-grid10.png",onClick:t,name:"Vestido",price:"34.99 €",sizes:"XS M L",colors:"1 Color"}),a(q,{imageUrl:"/assets/gallery/image-grid11.png",onClick:t,name:"Pantalones cortos",price:"34.99 €",sizes:"XS M L",colors:"17 Colores"}),a(q,{imageUrl:"/assets/gallery/image-grid12.png",onClick:t,name:"Camiseta",price:"79.99 €",sizes:"XS M L",colors:"2 Colores"})]}),a(le,{className:G2,children:"Los 12 productos siguientes"})]})]})},q2=p`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 5%;
  overflow-x: auto;

  img {
    width: 176px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* for IE y Edge */
  scrollbar-width: none; /* for Firefox */

  @media (min-width: 1024px) {
    justify-content: center;
  }
`,rc=()=>m("div",{className:q2,children:[a("img",{src:"/assets/gallery/box-images1.png",alt:"image"}),a("img",{src:"/assets/gallery/box-images2.png",alt:"image"}),a("img",{src:"/assets/gallery/box-images3.png",alt:"image"}),a("img",{src:"/assets/gallery/box-images4.png",alt:"image"})]}),eg=p`
  display: flex;
  flex-direction: column;
  gap: 3px;

  a {
    text-decoration: none;
    color: #212429;
  }
`,Nt=e=>{const{onClick:t,toggleIcon:n,h2:r,text1:i="Ver todos",text2:o="Éxitos de ventas",text3:l="Nueva colección",text4:s="nuevos productos"}=e;return m("div",{onClick:t,children:[m("h2",{children:[r,a("img",{src:`/assets/gallery/icon-${n?"plus":"minus"}.png`,alt:"icon"})]}),n&&m("ul",{className:eg,children:[a("li",{children:i}),a("li",{children:a(Le,{to:"/#exito-ventas",children:o})}),a("li",{children:a(Le,{to:"/#nuevas-colecciones",children:l})}),a("li",{children:a(Le,{to:"/#nuevos-productos",children:s})})]})]})},tg=p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0rem 1rem;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;

  div {
    display: flex;
    gap: 1rem;
  }
`,ng=p`
  display: flex;
  align-items: center;
  img {
    width: 16px;
    height: 14px;
  }
`,rg=p`
  display: flex;
  align-items: center;

  img {
    width: 16px;
    height: 18px;
  }
`,ig=p`
  display: grid;
  grid-template-columns: 25% 75%;

  @media (max-width: 1024px) {
    display: unset;
  }
`,og=p`
  position: absolute;
  display: none;
  top: 3rem;
  left: 0;
  z-index: 10;
  width: 23%;

  padding: 2.15rem 1rem;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    cursor: pointer;

    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    color: #212429;
  }

  img {
    width: 15px;
  }

  @media (min-width: 1024px) {
    display: unset;
  }
`,ic=p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: rgba(33, 36, 41, 0.64);
  margin-left: 1rem;
`,lg=()=>{const e=zt.useMediaQuery({maxWidth:"725px"}),[t,n]=ct.useState({img1:!0,img2:!1,img3:!1,img4:!1,img5:!1});function r(i){n(o=>({...o,[i]:!o[i]}))}return a("div",{children:e?m("div",{children:[a("div",{className:ic,children:"Inicio/Mujer"}),m("div",{className:tg,children:[m("div",{className:ng,children:[a("img",{src:"/assets/gallery/shape-arrow-left.png",alt:"arrow"}),"Ropa de mujer"]}),a("div",{className:rg,children:a("img",{src:"/assets/gallery/shape-aside-1.png",alt:"settings"})})]}),a(rc,{})]}):m("div",{className:ig,children:[a("div",{children:m("aside",{className:og,children:[a(Nt,{h2:"Mujeres",toggleIcon:t.img1,onClick:()=>r("img1")}),a(Nt,{h2:"Hombres",toggleIcon:t.img2,onClick:()=>r("img2")}),a(Nt,{h2:"Accesorios",toggleIcon:t.img3,onClick:()=>r("img3")}),a(Nt,{h2:"Colecciones",toggleIcon:t.img4,onClick:()=>r("img4")}),a(Nt,{h2:"Acciones",toggleIcon:t.img5,onClick:()=>r("img5")})]})}),m("div",{children:[a("div",{className:ic,children:"Inicio/Mujer"}),a(rc,{})]})]})})},ag=p`
 margin-top: 60px;
 scroll-behavior: initial;
`,sg=p`

  margin-top: 3rem;
  border: 1px solid #b6b6b6;
`,ug=()=>{const e=()=>{window.scrollTo(0,0)};return ct.useEffect(()=>{e()},[]),m(ln,{children:[m("div",{className:ag,children:[a(lg,{}),a(J2,{})]}),a("hr",{className:sg}),a(_s,{})]})},cg=p`
    display: grid;
    grid-template-areas:
      'num    lines'
      'texto  lines'
      ' .     lines'
      'stars  lines';
    width: 100%;
    margin: 0rem auto 2rem;
    background: #f7f7f7;
    border-radius: 8px;
    padding: 1rem;
    box-sizing: border-box;

  @media (min-width: 745px) {
    max-width: 383px;
    max-height: 200px;

  }
`,dg=p`
  grid-area: num;

  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 64px;
  text-transform: capitalize;
  color: #212429;
`,fg=p`
  grid-area: texto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #212429;
`,pg=p`
  grid-area: stars;
`,mg=p`
  grid-area: lines;
  display: flex;
  flex-direction: column;

  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 140%;
  color: #212429;
  gap: 10px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #878787;
  }
`,kr=p`
  height: 3px;
  background-color: #d9d9d9;
  border-radius: 18px;
  width: 160px;
`,oc=p`
  height: 100%;
  width: 50%;
  background: #212429;
  border-radius: 18px;
`,Nl=p`
  height: 100%;
  width: 0%;
  background: #212429;
  border-radius: 18px;
`,hg=()=>m("div",{className:cg,children:[a("div",{className:dg,children:"4.5"}),a("div",{className:fg,children:"basados en 2 opiniones"}),m("div",{className:pg,children:[a("img",{src:"/assets/gallery/star.png",alt:"reviews"}),a("img",{src:"/assets/gallery/star.png",alt:"reviews"}),a("img",{src:"/assets/gallery/star.png",alt:"reviews"}),a("img",{src:"/assets/gallery/star.png",alt:"reviews"}),a("img",{src:"/assets/star-half-color.png",alt:"reviews"})]}),m("div",{className:mg,children:[m("div",{children:["5",a("div",{className:kr,children:a("div",{className:oc})}),a("p",{children:"50%"})]}),m("div",{children:["4",a("div",{className:kr,children:a("div",{className:oc})}),a("p",{children:"50%"})]}),m("div",{children:["3",a("div",{className:kr,children:a("div",{className:Nl})}),a("p",{children:"0%"})]}),m("div",{children:["2",a("div",{className:kr,children:a("div",{className:Nl})}),a("p",{children:"0%"})]}),m("div",{children:["1",a("div",{className:kr,children:a("div",{className:Nl})}),a("p",{children:"0%"})]})]})]}),gg=p`
  margin: 2rem auto 0rem;

  img {
    max-width: 104px;
  }

  @media (min-width: 725px) {
    img {
      max-width: 200px;
    }
  }
`,vg=p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #212429;
`,yg=p`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 20vw;
  }
`,xg=p`
  min-width: 280px;
  border-radius: 48px;
  height: 48px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  width: 100%;
  border: solid 1px;
  color: #ffffff;
  background: #212429;


  @media (min-width: 725px) {
    width: 280px;
  }
`,lc=p`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  div {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    color: #a0a0a0;
  }
`,ac=p`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;
`,sc=p`
  margin: 0.5rem 0rem;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;
`,uc=p`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;

  color: #878787;
`,cc=()=>m("div",{className:gg,children:[a("div",{className:vg,children:"Reseñas"}),a("br",{}),m("div",{className:yg,children:[a("div",{children:a(le,{className:xg,children:"Deja tu opinión"})}),a(hg,{})]}),m("div",{children:[m("div",{className:lc,children:["Ludmilla ",a("div",{children:"Hoy, 13.54"})]}),m("div",{className:ac,children:[m("div",{children:[a("img",{src:"/assets/gallery/star.png",alt:"reviews"}),a("img",{src:"/assets/gallery/star.png",alt:"reviews"}),a("img",{src:"/assets/gallery/star.png",alt:"reviews"}),a("img",{src:"/assets/gallery/star.png",alt:"reviews"}),a("img",{src:"/assets/gallery/star.png",alt:"reviews"})]}),a("div",{children:"Color: blanco"}),a("div",{children:"Talla: M"})]}),a("div",{className:sc,children:"Tejido agradable, ajuste perfecto. En la cintura. Color negro. Se ajusta perfectamente a la talla M."}),a("img",{src:"/assets/gallery/opinion-image1.png",alt:"reviewer"}),m("div",{className:uc,children:[a("div",{children:"Quejarse de la revision"}),a("div",{children:"Respuesta"})]})]}),m("div",{children:[m("div",{className:lc,children:["Elena ",a("div",{children:"4 Junio, 16.54"})]}),m("div",{className:ac,children:[m("div",{children:[a("img",{src:"/assets/gallery/star.png",alt:"reviews"}),a("img",{src:"/assets/gallery/star.png",alt:"reviews"}),a("img",{src:"/assets/gallery/star.png",alt:"reviews"}),a("img",{src:"/assets/gallery/star.png",alt:"reviews"}),a("img",{src:"/assets/gallery/star-white.png",alt:"reviews"})]}),a("div",{children:"Color: blanco"}),a("div",{children:"Talla: M"})]}),a("div",{className:sc,children:"Buenos vaqueros, la calidad en general es satisfactoria, la única pega es que son un poco cortos"}),a("img",{src:"/assets/gallery/opinion-image2.png",alt:"reviewer"}),m("div",{className:uc,children:[a("div",{children:"Quejarse de la revision"}),a("div",{children:"Respuesta"})]})]})]}),wg=p`
  animation: fadeIn;
  animation-duration: 2s;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;

  @media (max-width: 1066px) {
    display: none;
  }
`,Cg=p`
  position: fixed;
  top: 12%;
  left: 25%;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  height: 85%;
  width: 55%;

  background-color: whitesmoke;
  padding: 0.2rem;
  padding-top: 2rem;
  box-sizing: border-box;
  border-radius: 10px;

  #img {
    max-width: 250px;
  }
`,kg=p`
  position: absolute;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: end;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  img {
    max-width: 20px;
  }

  button {
    cursor: pointer;
    position: absolute;
    bottom: 2.6rem;
  }
`,Sg=p`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,Eg=p`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 50px;
  margin-bottom: 1rem;
`,Ng=p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  font-variant: small-caps;
  width: 70%;
  color: #212429;
`,Pg=p`
  margin: 1rem 0rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  font-variant: small-caps;
  color: #212429;
`,_g=p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;
  max-height: 135px;
  box-sizing: border-box;
`,Lg=p`
  margin: 1rem 0rem;

  img {
    margin: 0.2rem 0rem;
    max-width: 80px;
  }
`,zg=p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  div {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;

    div {
      box-sizing: border-box;
      width: 64px;
      height: 48px;
      border: 1px solid #212429;
      border-radius: 81px;
    }
  }
`,Mg=p`
  display: flex;
  flex-direction: row;
  margin: auto;
  gap: 20px;
  margin-top: 1rem;
`,jg=p`
  display: flex;
  flex-direction: row;
  place-content: center;

  justify-content: space-around;
  align-items: center;
  width: 140px;
  height: 48px;

  border: 1px solid #212429;
  border-radius: 48px;

  img {
    width: 10px;
  }
`,Tg=p`
  width: 145px;
  height: 48px;
  background: #212429;
  border-radius: 48px;
  cursor: pointer;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;

  img {
    max-width: 19px;
  }
`,Yf=e=>{const{className:t,onClick:n}=e;return a("div",{className:yt(wg,t),children:m("div",{className:Cg,children:[a("img",{id:"img",src:"/assets/image-popup1.png",alt:"image"}),m("div",{children:[m("div",{className:kg,children:[a("button",{onClick:n,children:a("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M17.75 2.0125L15.9875 0.25L9 7.2375L2.0125 0.25L0.25 2.0125L7.2375 9L0.25 15.9875L2.0125 17.75L9 10.7625L15.9875 17.75L17.75 15.9875L10.7625 9L17.75 2.0125Z",fill:"#212429"})})}),a("p",{children:"2 comentarios"}),m("div",{className:Sg,children:[a("img",{src:"/assets/gallery/shape-hearth.png",alt:"heart"}),a("img",{src:"/assets/gallery/shareIcon.png",alt:"share"})]})]}),m("div",{className:Eg,children:[a("img",{src:"/assets/gallery/star.png",alt:"star"}),a("img",{src:"/assets/gallery/star.png",alt:"star"}),a("img",{src:"/assets/gallery/star.png",alt:"star"}),a("img",{src:"/assets/gallery/star.png",alt:"star"}),a("img",{src:"/assets/gallery/star.png",alt:"star"})]}),a("div",{className:Ng,children:"Vestido negro de lunares"}),a("div",{className:Pg,children:"79.99 €"}),a("div",{className:_g,children:"Precioso vestido femenino de silueta en tejido de popelina. Las mangas cortas alargadas se fruncen en la banda elástica. El cinturón en la cintura acentúa la feminidad de la figura. El bajo del vestido es un volante ancho con un fruncido ondulado."}),m("div",{className:Lg,children:[a("p",{children:" Lunares blancos y negros"}),m("div",{children:[a("img",{src:"/assets/image-popup2.png",alt:"image"}),a("img",{src:"/assets/image-popup3.png",alt:"image"})]})]}),m("div",{className:zg,children:["Talla:",m("div",{children:[a("div",{children:"XS"}),a("div",{children:"S"}),a("div",{children:"M"}),a("div",{children:"L"})]})]}),m("div",{className:Mg,children:[m(le,{className:jg,children:[a("img",{src:"/assets/gallery/icon-minus.png",alt:"icon"}),"1",a("img",{src:"/assets/gallery/icon-plus.png",alt:"icon"})]}),m(le,{className:Tg,route:V.cart,children:[a("img",{src:"/assets/gallery/cartIcon.png",alt:"image"}),"  En cesta"]})]})]})]})})},Rg=p`
 display: flex;
 flex-direction: column;
 margin-top: 1rem;
`,Og=p`
  display: grid;
  grid-template-columns: repeat(2, minmax(40px, 100%));
  justify-content: space-between;
  gap: 10px;
  margin-top: 1rem;

  img {
    width: 100%;
  }

  @media (min-width: 725px) {
    grid-template-columns: repeat(4, minmax(150px, 100%));
  }
`,Ig=p`
  display: none;
`,$g=p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #212429;
`,Ii=p`
  justify-self: center;
`;p`
  display: grid;
  grid-row-gap: 0.5rem;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr;

  color: #212429;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  width: 100%;

  span:nth-child(3) {
    font-weight: 700;
  }
`;const dc=()=>{const e=zt.useMediaQuery({maxWidth:"1066px"}),[t,n]=ct.useState(!1),r=()=>{e||n(!0)};return m("div",{className:Rg,children:[a("div",{className:$g,children:"Comprar con este producto"}),m("div",{className:Og,children:[a(Yf,{onClick:()=>{n(!1)},className:yt({[Ig]:!t})}),a(q,{onClick:r,className:Ii,showIcon:!1,imageUrl:"/assets/gallery/images-grid-product1.png",name:"Vaqueros",price:"59.99 €",colors:"1 Color",sizes:"XS S M L"}),a(q,{onClick:r,className:Ii,showIcon:!1,imageUrl:"/assets/gallery/images-grid-product2.png",name:"Vaqueros",price:"22.99 €",colors:"17 Colores",sizes:"XS S M L"}),a(q,{onClick:r,showIcon:!1,className:Ii,imageUrl:"/assets/gallery/images-grid-product3.png",name:"Vaqueros",price:"54.99 €",colors:"2 Colores",sizes:"XS S M L"}),a(q,{onClick:r,showIcon:!1,className:Ii,imageUrl:"/assets/gallery/images-grid-product4.png",name:"Pantalones cortos",price:"22.99 €",sizes:"XS M L",colors:"17 Colores"})]})]})},bg=p`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`,Dg=p`
  display: grid;
  grid-template-columns: repeat(2, minmax(40px, 100%));
  justify-content: space-between;
  gap: 10px;
  margin-top: 1rem;

  img {
    width: 100%;
  }

  @media (min-width: 725px) {
    grid-template-columns: repeat(4, minmax(150px, 100%));
  }
`,Ug=p`
  display: none;
`,Ag=p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #212429;
`,$i=p`
  justify-self: center;

`;p`
  display: grid;
  grid-row-gap: 0.5rem;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr;

  color: #212429;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  width: 100%;

  span:nth-child(3) {
    font-weight: 700;
  }
`;p`
  position: relative;
  left: 1em;
  top: 2rem;
`;p`
  fill: red;
`;const fc=()=>{const e=zt.useMediaQuery({maxWidth:"1066px"}),[t,n]=ct.useState(!1),r=()=>{e||n(!0)};return m("div",{className:bg,children:[a("div",{className:Ag,children:"Productos similares"}),m("div",{className:Dg,children:[a(Yf,{onClick:()=>{n(!1)},className:yt({[Ug]:!t})}),a(q,{onClick:r,showIcon:!1,className:$i,imageUrl:"/assets/gallery/images-grid-product4.png",name:"Pantalones cortos",price:"22.99 €",sizes:"XS M L",colors:"17 Colores"}),a(q,{onClick:r,showIcon:!1,className:$i,imageUrl:"/assets/gallery/images-grid-product5.png",name:"Camiseta",price:"59.99 €",sizes:"XS S M L",colors:"1 Color"}),a(q,{onClick:r,showIcon:!1,className:$i,imageUrl:"/assets/gallery/images-grid-product1.png",name:"Vaqueros",price:"59.99 €",colors:"1 Color",sizes:"XS S M L"}),a(q,{onClick:r,showIcon:!1,className:$i,imageUrl:"/assets/gallery/images-grid-product6.png",name:"Camiseta",price:"59.99 €",colors:"1 Color",sizes:"XS S M L"})]})]})},Bg=p`
  padding: 0rem 1rem;

  @media (min-width: 1024px) {
    padding-left: 25%;
  }
`,Fg=p`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #000000;
`,pc=p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-justify: left;
  gap: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  img {
    height: 20px;
  }
`,Pl=p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  font-variant: small-caps;
  color: #212429;

  div {
    margin: 1rem 0rem;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }
`,mc=p`
  margin: 2rem auto 1rem;
  border: solid 1px;
  width: 100%;
  background: #212429;
  color: #ffffff;

`,Vg=()=>{const e=zt.useMediaQuery({maxWidth:"1024px"});return a("div",{className:Bg,children:e?m(ln,{children:[m("div",{className:Fg,children:["Descripión",a("svg",{width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),m("div",{className:pc,children:[a("img",{src:"/assets/gallery/iconoir_delivery-truck.png",alt:"icon"}),m("div",{children:["Por mensajero a domicilio - a partir de 50 € gratis.",a("br",{}),"Montaje antes de la compra en 15 minutos"]})]}),m("div",{className:pc,children:[a("img",{src:"/assets/gallery/iconoir_delivery.png",alt:"icon"}),a("div",{children:"Belarus Post - a partir de 50 € gratis. Sin la posibilidad de encajar"})]}),a("hr",{}),a(cc,{}),a(dc,{}),a(fc,{}),a(le,{className:mc,children:"Los 12 productos siguientes"})]}):m(ln,{children:[m("div",{children:[m("div",{className:Pl,children:[a("div",{children:"Descripción"}),m("p",{children:["Vaqueros blancos en denim de algodón de alta calidad (corte recto). El modelo largo es perfecto para las chicas más altas. Corte de talle alto. Pantalón acabado con elegantes rotos. Excelente modelo de vaqueros, que ayudará a crear imágenes de actualidad en estilo casual. Recomendado.",a("br",{}),"La altura de la modelo de la foto es de 179 cm.",a("br",{}),"La mayoría de las veces, la modelo elige ropa de la talla S."]})]}),m("div",{className:Pl,children:[a("div",{children:"Composición"}),a("p",{children:"100% algodón"})]}),m("div",{className:Pl,children:[a("div",{children:"Características"}),a("p",{children:"País de producción: China"})]})]}),a("hr",{}),a(cc,{}),a(dc,{}),a(fc,{}),a(le,{className:mc,children:"Los 12 productos siguientes"})]})})},Wg=p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  `,Hg=p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: rgba(33, 36, 41, 0.64);
`,Qg=p`
  display: grid;
  grid-template-rows: 1fr auto;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #212429;

  `,Yg=p`

 display: flex;
 flex-direction: row;
 justify-content: space-between;

 `,Kg=p`

  display: flex;
  flex-direction: column;
  justify-content: center;

  div {

    display: flex;
    flex-direction: row;
    gap: 5px;
  }
`,Xg=p`
  width: 100%;
  margin: auto;
`,Zg=p`

 justify-content: space-around;

  img {
    width: 30%;
  }
`,Gg=p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem auto;
`,hc=p`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 5px;
  align-items: center;
  box-sizing: border-box;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: #000000;

  width: 152px;
  height: 48px;
  padding: 0rem 0.5rem;

  background: #ffffff;
  border: 1px solid #f7f7f7;
  border-radius: 48px;
`,Jg=p`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  width: 100%;

`,qg=p`
  display: flex;
  flex-direction: row;
  place-content: center;
  justify-content: space-around;
  align-items: center;
  width: 176px;
  height: 48px;
  border: 1px solid #212429;
  border-radius: 48px;

  img {
    max-width: 10px;
  }
`,e4=p`
  margin-right: 3rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  text-align: right;
  color: #000000;

`,t4=p`
  width: 296px;
  height: 48px;
  background: #212429;
  border-radius: 48px;
  margin: 1rem 0rem;
  margin: 1rem auto;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  cursor: pointer;

  img {
    max-width: 19px;
  }
`,n4=()=>a(ln,{children:m("div",{className:Wg,children:[a("div",{className:Hg,children:"Inicio/Mujer/Ropa de mujer/Vaqueros"}),m("div",{className:Qg,children:[a("h2",{children:" Vaqueros largos rectos en blanco"}),m("div",{className:Yg,children:[m("div",{children:[a("img",{src:"/assets/gallery/star.png",alt:"star"}),a("img",{src:"/assets/gallery/star.png",alt:"star"}),a("img",{src:"/assets/gallery/star.png",alt:"star"}),a("img",{src:"/assets/gallery/star.png",alt:"star"}),a("img",{src:"/assets/gallery/star.png",alt:"star"})]}),m("div",{children:[a("img",{src:"/assets/gallery/shape-hearth.png",alt:"hearth"}),"  ",a("img",{src:"/assets/gallery/shareIcon.png",alt:"share"})]})]})]}),m("div",{className:Kg,children:[a("img",{className:Xg,src:"/assets/gallery/product-image1.png",alt:"image"}),a("br",{}),m("div",{className:Zg,children:[a("img",{src:"/assets/gallery/product-image2.png",alt:"image"}),a("img",{src:"/assets/gallery/product-image3.png",alt:"image"}),a("img",{src:"/assets/gallery/product-image4.png",alt:"image"})]}),m("div",{className:Gg,children:[m("div",{className:hc,children:["Color",a("svg",{width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),m("div",{className:hc,children:["XS",a("svg",{width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),m("div",{className:Jg,children:[m(le,{className:qg,route:V.cart,children:[a("img",{src:"/assets/gallery/icon-minus.png",alt:"icon"}),"1",a("img",{src:"/assets/gallery/icon-plus.png",alt:"icon"})]}),a("div",{className:e4,children:"79.99 €"})]}),m(le,{className:t4,route:V.cart,children:[a("img",{src:"/assets/gallery/cartIcon.png",alt:"image"}),"  En cesta"]})]})]})});p`
  display: grid;
  grid-template-columns: 25% 75%;
`;const r4=p`
  display: grid;
  grid-template-columns: 25% 75%;
`,i4=p`

  padding: 1rem;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    cursor: pointer;

    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    color: #212429;
  }

  img {
    width: 15px;
  }
`,o4=p`
  div {
    margin: 0.5rem 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,l4=p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: rgba(33, 36, 41, 0.64);
`,a4=p`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,s4=p`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;

`,u4=p`
  display: grid;
  grid-template-columns: 1fr auto;
  width: 90%;

  h2 {
    width: 50%;
  }

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;

  color: #212429;
`,c4=p`
  margin: 1rem 0rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #212429;
`,d4=p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  div {
    border-radius: 100%;
    border: solid #dbe5f1;
    box-sizing: border-box;
    width: 47px;
    height: 47px;
    background: #ffffff;
  }
`,f4=p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  div {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;

    div {
      box-sizing: border-box;
      width: 64px;
      height: 48px;
      border: 1px solid #212429;
      border-radius: 81px;
    }
  }
`,gc=p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-justify: left;
  gap: 10px;
  margin: 1rem;
  width: 50%;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;

  img {
    height: 20px;
  }
`,p4=p`
  display: flex;
  flex-direction: row;
  margin: auto;
  gap: 20px;
`,m4=p`
  display: flex;
  flex-direction: row;
  place-content: center;
  justify-content: space-around;
  align-items: center;
  width: 176px;
  height: 48px;
  left: 840px;
  top: 873px;

  border: 1px solid #212429;
  border-radius: 48px;

  img {
    width: 10px;
  }
`,h4=p`
  width: 296px;
  height: 48px;
  background: #212429;
  border-radius: 48px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  cursor: pointer;

  img {
    max-width: 19px;
  }
`,g4=()=>{const[e,t]=ct.useState({img1:!0,img2:!1,img3:!1,img4:!1,img5:!1});function n(r){t(i=>({...i,[r]:!i[r]}))}return m("div",{className:r4,children:[m("aside",{className:i4,children:[a(Nt,{h2:"Mujeres",toggleIcon:e.img1,onClick:()=>n("img1")}),a(Nt,{h2:"Hombres",toggleIcon:e.img2,onClick:()=>n("img2")}),a(Nt,{h2:"Accesorios",toggleIcon:e.img3,onClick:()=>n("img3")}),a(Nt,{h2:"Colecciones",toggleIcon:e.img4,onClick:()=>n("img4")}),a(Nt,{h2:"Acciones",toggleIcon:e.img5,onClick:()=>n("img5")})]}),m("div",{className:s4,children:[m("div",{className:o4,children:[a("div",{className:l4,children:"Inicio/Mujer/Ropa de mujer/Vaqueros"}),a("img",{src:"/assets/gallery/primaryImage.png",alt:"image"})," ",a("br",{}),m("div",{children:[a("img",{src:"/assets/gallery/small-image-second-page1.png",alt:"image"}),a("img",{src:"/assets/gallery/small-image-second-page2.png",alt:"image"}),a("img",{src:"/assets/gallery/small-image-second-page3.png",alt:"image"})]})]}),m("div",{className:a4,children:[m("div",{children:[a("img",{src:"/assets/gallery/star.png",alt:"star"}),a("img",{src:"/assets/gallery/star.png",alt:"star"}),a("img",{src:"/assets/gallery/star.png",alt:"star"}),a("img",{src:"/assets/gallery/star.png",alt:"star"}),a("img",{src:"/assets/gallery/star.png",alt:"star"})]}),m("div",{className:u4,children:[a("h2",{children:" Vaqueros largos rectos en blanco"}),m("div",{children:[a("img",{src:"/assets/gallery/shape-hearth.png",alt:"hearth"}),"  ",a("img",{src:"/assets/gallery/shareIcon.png",alt:"star"})]})]}),a("div",{className:c4,children:"79.99 €"}),m("div",{className:d4,children:["Color:",a("div",{})]}),a("br",{}),m("div",{className:f4,children:["Talla:",m("div",{children:[a("div",{children:"XS"}),a("div",{children:"S"}),a("div",{children:"M"}),a("div",{children:"L"})]})]}),m("div",{className:gc,children:[a("img",{src:"/assets/gallery/iconoir_delivery-truck.png",alt:"icon"}),a("div",{children:"Por mensajero a domicilio - a partir de 50 € gratis. Montaje antes de la compra en 15 minutos"})]}),m("div",{className:gc,children:[a("img",{src:"/assets/gallery/iconoir_delivery.png",alt:"icon"}),a("div",{children:"Belarus Post - a partir de 50 € gratis. Sin la posibilidad de encajar"})]}),m("div",{className:p4,children:[m(le,{className:m4,route:V.cart,children:[a("img",{src:"/assets/gallery/icon-minus.png",alt:"icon"}),"1",a("img",{src:"/assets/gallery/icon-plus.png",alt:"icon"})]}),m(le,{className:h4,route:V.cart,children:[a("img",{src:"/assets/gallery/cartIcon.png",alt:"image"}),"  En cesta"]})]})]})]})]})},v4=p`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`,y4=()=>{const e=zt.useMediaQuery({maxWidth:"1024px"});return a("div",{className:v4,children:e?a(n4,{}):a(g4,{})})},x4=p`
  margin-top: 60px;
`,w4=p`
  margin-top: 3rem;
  border: 1px solid #b6b6b6;
`,C4=()=>{const e=()=>{window.scrollTo(0,0)};return ct.useEffect(()=>{e()},[]),m(ln,{children:[m("div",{className:x4,children:[a(y4,{}),a(Vg,{})]}),a("hr",{className:w4}),a(_s,{})]})},k4=p`

  display: grid;
  grid-template-areas:
    "img texto bin"
    "img texto ."
    "img texto ."
    "btn btn price ";
  gap: 1rem;


  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: #212429;

    span {
      text-transform: capitalize;
      font-weight: 400;
    }
  }

  @media (min-width: 725px) {
    grid-template-areas:
      "img texto . price bin"
      "img texto . . ."
      "img texto . btn btn"
      "img texto . . . ";
  }

`,S4=p`

  grid-area: img;
  max-width: 104px;

  @media (min-width: 725px) {

    max-width: 200px;
  }
`,E4=p`
  display: grid;
  grid-area: texto;
  justify-self: left;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  text-transform: capitalize;
  color: #212429;

  span {
    font-weight: 400;
  }
`,N4=p`
  grid-area: price;
  justify-self: end;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  color: #212429;
`,P4=p`
  grid-area: bin;
  justify-self: end;

  @media (min-width: 725px) {
    margin-right: 1rem;
  }
`,_4=p`

  grid-area: btn;
  justify-self: end;

`,L4=p`
  display: flex;
  flex-direction: row;
  place-content: center;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #212429;
  border-radius: 48px;
  width: 176px;
  height: 48px;

  img {
    width: 10px;
  }

`,vc=e=>{const{article:t,routeImg:n,text1:r,text2:i,numArticle:o,price:l}=e;return m("div",{className:k4,children:[a("img",{className:S4,src:`/assets/gallery/${n}`,alt:"image"}),m("div",{className:E4,children:[a("h3",{children:t}),m("h3",{children:["Color: ",a("span",{children:r})]}),m("h3",{children:["Talla: ",a("span",{children:i})]}),m("h3",{children:["Cantidad: ",a("span",{children:o})]})]}),m("h4",{className:N4,children:[l," €"]}),a("svg",{className:P4,width:"20",height:"22",viewBox:"0 0 20 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M7.857 4.14244H12.1427C12.1427 3.57412 11.917 3.02907 11.5151 2.62721C11.1132 2.22535 10.5682 1.99958 9.99986 1.99958C9.43154 1.99958 8.8865 2.22535 8.48463 2.62721C8.08277 3.02907 7.857 3.57412 7.857 4.14244V4.14244ZM6.57129 4.14244C6.57129 3.23312 6.93251 2.36105 7.57549 1.71807C8.21848 1.07509 9.09055 0.713867 9.99986 0.713867C10.9092 0.713867 11.7812 1.07509 12.4242 1.71807C13.0672 2.36105 13.4284 3.23312 13.4284 4.14244H18.7856C18.9561 4.14244 19.1196 4.21017 19.2401 4.33073C19.3607 4.45129 19.4284 4.6148 19.4284 4.7853C19.4284 4.95579 19.3607 5.11931 19.2401 5.23986C19.1196 5.36042 18.9561 5.42815 18.7856 5.42815H17.6627L16.6196 17.945C16.5437 18.8556 16.1284 19.7044 15.456 20.3231C14.7836 20.9418 13.9033 21.2852 12.9896 21.2853H7.01015C6.09643 21.2852 5.21609 20.9418 4.54372 20.3231C3.87135 19.7044 3.45604 18.8556 3.38015 17.945L2.337 5.42815H1.21415C1.04365 5.42815 0.880137 5.36042 0.759577 5.23986C0.639018 5.11931 0.571289 4.95579 0.571289 4.7853C0.571289 4.6148 0.639018 4.45129 0.759577 4.33073C0.880137 4.21017 1.04365 4.14244 1.21415 4.14244H6.57129ZM4.66157 17.8379C4.71059 18.4271 4.97925 18.9763 5.41427 19.3768C5.84929 19.7772 6.4189 19.9995 7.01015 19.9996H12.9896C13.5808 19.9995 14.1504 19.7772 14.5854 19.3768C15.0205 18.9763 15.2891 18.4271 15.3381 17.8379L16.3736 5.42815H3.627L4.66157 17.8379ZM8.07129 8.42815C8.24179 8.42815 8.4053 8.49588 8.52586 8.61644C8.64642 8.737 8.71415 8.90051 8.71415 9.07101V16.3567C8.71415 16.5272 8.64642 16.6907 8.52586 16.8113C8.4053 16.9319 8.24179 16.9996 8.07129 16.9996C7.90079 16.9996 7.73728 16.9319 7.61672 16.8113C7.49616 16.6907 7.42843 16.5272 7.42843 16.3567V9.07101C7.42843 8.90051 7.49616 8.737 7.61672 8.61644C7.73728 8.49588 7.90079 8.42815 8.07129 8.42815ZM12.5713 9.07101C12.5713 8.90051 12.5036 8.737 12.383 8.61644C12.2624 8.49588 12.0989 8.42815 11.9284 8.42815C11.7579 8.42815 11.5944 8.49588 11.4739 8.61644C11.3533 8.737 11.2856 8.90051 11.2856 9.07101V16.3567C11.2856 16.5272 11.3533 16.6907 11.4739 16.8113C11.5944 16.9319 11.7579 16.9996 11.9284 16.9996C12.0989 16.9996 12.2624 16.9319 12.383 16.8113C12.5036 16.6907 12.5713 16.5272 12.5713 16.3567V9.07101Z",fill:"#212429"})}),a("div",{className:_4,children:m(le,{className:L4,route:"/cart",children:[a("img",{src:"/assets/gallery/icon-minus.png",alt:"icon"}),"1",a("img",{src:"/assets/gallery/icon-plus.png",alt:"icon"})]})})]})},z4=p`
  padding: 1rem;


  h2 {
    padding-bottom: 1rem;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    color: #212429;

  }
`,M4=p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: rgba(33, 36, 41, 0.64);
`,j4=p`

  width: 100%;

  @media (min-width: 1024px) {

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10%;
  }
`,T4=p`
  display: flex;
  flex-direction: column;
  width: 70%;
  background: #f8f8f8;
  padding: 1rem;
  border-radius: 12px 12px 0px 0px;
  height: 480px;

  form {
    display: flex;
    flex-direction: column;

    div:first-child {
      margin: auto;
    }
  }

  hr {
    width: 100%;
    margin: 1rem auto;
  }

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  font-variant: small-caps;
  color: #212429;

  @media (max-width: 1024px) {
    display: none;
  }
`,R4=p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  padding: 0.5rem 0.1rem 0.5em 0rem;

  background: #ffffff;
  border: 2px solid #dbe5f1;
  border-radius: 48px;
  height: 48px;
`,O4=p`
  margin: 1rem 0rem;
  padding-left: 0.2rem;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;
  outline: none;
`,I4=p`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background: #212429;
  border: 0.5px solid #ececec;
  border-radius: 24px;


  &:active {
    border: 2px solid #ececec;
  }
`,$4=p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-variant: small-caps;
  color: #212429;
  margin-top: 1rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 0rem;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    font-variant: small-caps;
    color: #212429;
  }

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    font-variant: small-caps;
    color: #212429;
  }
`,b4=p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0rem;
`,D4=p`
  margin: 2rem auto 1rem;
  border: solid 1px;
  width: 178px;
  color: #ffffff;
  background: #212429;
  width: 100%;
  cursor: pointer;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
`,U4=()=>m("div",{className:z4,children:[a("div",{className:M4,children:"Inicio / Cesta"}),a("h2",{children:"Cesta"}),m("div",{className:j4,children:[m("div",{children:[a(vc,{article:"Vaqueros blancos",routeImg:"cesta2.png",text1:"Blanco",text2:"XS",numArticle:1,price:79.99}),a("br",{}),a(vc,{article:"Vestido",routeImg:"cesta1.png",text1:"Flores",text2:"XS",numArticle:1,price:79.99})]}),m("div",{className:T4,children:[a("h2",{children:"Código promocional"}),m("form",{children:[m("div",{className:R4,children:[a("input",{className:O4,required:!0,placeholder:"Introduzca el código",type:"text"}),a("button",{title:"enter-code",type:"submit",className:I4,children:a("svg",{width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M1 11L6 6L1 1",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),m("div",{className:$4,children:[a("h3",{children:"Importe del pedido"}),m("div",{children:["Coste de los bienes ",a("span",{children:"159,97 €"})]}),m("div",{children:["Entrega ",a("span",{children:"10 €"})]}),m("div",{children:["Importe del descuento ",a("span",{children:"0 €"})]})]}),a("hr",{}),m("div",{className:b4,children:["Importe total ",a("span",{children:"0 €"})]}),a(le,{route:V.checkout,className:D4,children:"Pagar"})]})]})]})]}),A4=p`

padding: 0rem 1rem;

& > :first-child{
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    font-variant: small-caps;
    color: #000000;
  }

`,yc=p`

 img {
  width: 24px;
 }
`,B4=p`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 1rem auto;
  justify-content: center;

  button {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    margin: 1rem 0rem;
    justify-content: unset;
  }
`,F4=p`

 display: flex;
 flex-direction: column;
 gap: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;

  & > :nth-child(2) {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #000000;
  }
`,V4=p`
  margin: 1rem 0rem;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;

  span {
    text-decoration-line: underline;
  }

  img {
    width: 18px;
  }
`,W4=p`
  display: grid;
  grid-template-areas:
    'ciudad ciudad'
    'calle calle'
    'numero piso';
  grid-row-gap: 1rem;
  grid-column-gap: 8px;
  width: 312px;
  margin: 0rem auto 3rem;

  @media (min-width: 1024px) {
    width: 591px;
    grid-column-gap: 18px;
    margin: 0rem 0rem 3rem;
  }

  input {
    box-sizing: border-box;
    width: 312px;
    height: 48px;
    border: 2px solid #dbe5f1;
    border-radius: 48px;
    outline: none;
    padding-left: 0.3rem;

    @media (min-width: 1024px) {
      width: 591px;
    }
  }

  input:focus {
    box-sizing: border-box;
    border: 1px solid #131313;
  }

  & > :first-child {
    grid-area: ciudad;
  }

  & > :nth-child(2) {
    grid-area: calle;
  }

  & > :nth-child(3) {
    grid-area: numero;
    width: 152px;
    @media (min-width: 1024px) {
      width: 100%;
    }
  }

  & > :nth-child(4) {
    grid-area: piso;
    width: 152px;
    @media (min-width: 1024px) {
      width: 100%;
    }
  }
`,H4=()=>m("div",{className:A4,children:[a("div",{children:"Entrega"}),m("div",{className:B4,children:[m(le,{className:yc,children:[a("img",{src:"/assets/gallery/delivery-icon.png",alt:"delivery-icon"}),"  Envío"]}),m(le,{className:yc,children:[a("img",{src:"/assets/gallery/mail-icon.png",alt:"mail-icon"}),"  Correo"]})]}),m("div",{className:F4,children:[a("div",{children:"Probar antes de comprar.Plazo de entrega 2-7 días."}),a("div",{children:"¿Dónde quiere que le entreguemos su pedido?"}),a("div",{children:"Introduzca su dirección en el mapa o introduzca datos."})]}),m("div",{className:V4,children:[a("img",{src:"/assets/gallery/fi_map-pin.png",alt:"icon"}),"  ",a("span",{children:"Localizar envío"})]}),m("div",{className:W4,children:[a(Ge,{pl:"Ciudad o población"}),a(Ge,{pl:"Calle"}),a(Ge,{type:"number",pl:"Número"}),a(Ge,{pl:"Piso"})]})]}),Q4=p`
  margin-top: 60px;

  hr {
    border: 1px solid #b6b6b6;
  }

  @media (min-width: 1024px) {
    padding: 0rem 3rem;
  }
`,Y4=p`
  @media (min-width: 1024px) {
    display: none;
  }
`,K4=p`
  font-weight: 500;
  margin: 2rem auto 3rem;
  width: 100%;
  border-radius: 48px;
  cursor: pointer;
  border: 1px solid #212429;
  border-radius: 48px;
  color: #ffffff;
   background: #212429;

`,X4=()=>{const e=()=>{window.scrollTo(0,0)};return ct.useEffect(()=>{e()},[]),m("div",{className:Q4,children:[a(U4,{}),a(H4,{}),a(Gh,{className:Y4,children:a(le,{route:V.checkout,className:K4,children:"Ir al carrito"})})]})},Z4=p`
  padding: 1rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

 @media (min-width: 725px) {
 display: grid;
 grid-template-columns: 50% 50%;
 padding: 0rem 3rem;
 }
`,G4=p`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 5rem;
`,J4=p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: rgba(33, 36, 41, 0.64);
`,q4=p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  font-variant: small-caps;
  color: #000000;

  img {
    width: 16px;
    height: 12px;
    color: #000000;
  }
`,ev=p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #999999;
  margin-bottom: 2rem;
`,tv=p`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`,nv=p`
  position: relative;
  right: 1.2rem;
  z-index: 4;
  width: 85%;

  @media (min-width: 1024px) {
    width: 80%;
  }
`,rv=p`
  position: absolute;
  right: 3%;
  top: 25%;
  z-index: 3;
  width: 82%;

  @media (min-width: 1024px) {
   width: 77%
  }
`,iv=p`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: auto 2rem;
  width: 100%;

  @media (min-width: 725px) {
    gap: 30px;
  }
  @media (min-width: 1024px) {
    gap: 30px;
  }
`,ov=p`

  display: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
`,lv=p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 312px;

  input {
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 48px;
    border: 2px solid #dbe5f1;

    & :focus {
      border: 2px solid #212429;
    }
  }

  @media (min-width: 1024px) {
    max-width: 384px;
  }
`,av=p`
  display: grid;
  grid-template-areas:
    'input1 input1 input1 input1'
    'input2 input2 input2 input2'
    'input3 input4 input5 input5';

  box-sizing: content-box;
  width: 100%;

  grid-row-gap: 10px;
`,sv=p`

 grid-area: input1;
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;

  & :last-child {
    position: relative;
    right: 2rem;
    width: 24px;
    height: 24px;
  }
`,uv=p`
  padding-left: 0.3rem;
  width: 312px;
  height: 48px;

  @media (min-width: 1024px) {
    width: 384px;
  }
`,cv=p`
  grid-area: input2;
  width: 100%;
  `,dv=p`
  padding-left: 0.3rem;
  width: 312px;
  height: 48px;

  @media (min-width: 1024px) {
    width: 384px;
  }
`,fv=p`

  grid-area: input3;
  display: flex;
  align-items: center;
  width: 100%;

  & :last-child {
    position: relative;
    right: 1.5rem;
  }
`,pv=p`
  width: 72px;
  height: 48px;
  padding: 0.5rem;

  @media (min-width: 1024px) {
    width: 112px;
  }
`,mv=p`

  grid-area: input4;
  display: flex;
  align-items: center;
  width: 100%;

  & :last-child {
    position: relative;
    right: 1.5rem;
  }
`,hv=p`
  width: 72px;
  height: 48px;
  box-sizing: border-box;
  padding: 0.5rem;
  border-radius: 48px;

  @media (min-width: 1024px) {
    width: 112px;
  }
`,gv=p`

  grid-area: input5;
  display: flex;
  align-items: center;
  width: 100%;

  & :last-child {
    position: relative;
    right: 2rem;
    width: 20px;
    height: 20px;
  }
`,vv=p`
  width: 140px;
  height: 48px;
  padding: 0.5rem;
  border: 2px solid #dbe5f1;

  @media (min-width: 1024px) {
    width: 130px;
  }
`,yv=p`

 margin: 1rem;
 display: flex;
 flex-direction: row;
 width: 100%;
 justify-content: space-between;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  font-variant: small-caps;
  color: #000000;
`,xv=p`
  margin-top: 2rem;
  width: 100%;
  height: 48px;
  border-radius: 48px;
  color: #ffffff;
  background: black;
  cursor: pointer;
  border: 1px solid #212429;
  border-radius: 48px;
`,wv=()=>{const e=()=>{window.scrollTo(0,0)};return ct.useEffect(()=>{e()},[]),m("div",{className:Z4,children:[m("div",{className:G4,children:[a("div",{className:J4,children:"Inicio/Cesta de la compra/Pedidos/Pago"}),m("h1",{className:q4,children:[a("div",{children:a("img",{src:"/assets/gallery/shape-arrow-left.png",alt:"arrow-left"})}),"Orden de pago"]}),a("div",{className:ev,children:"Todas las transacciones son seguras y están encriptadas"}),m("div",{className:tv,children:[a("img",{className:nv,src:"/assets/gallery/card1.png",alt:"card"}),a("img",{className:rv,src:"/assets/gallery/card2.png",alt:"card"})]})]}),m("div",{className:iv,children:[a("h2",{className:ov,children:"Tarjeta de crédito"}),m("form",{className:lv,children:[m("div",{className:av,children:[m("div",{className:sv,children:[a(Ge,{pl:"Número de tarjeta",className:uv}),a("img",{src:"/assets/gallery/fi_lock.png",alt:"lock"})]}),a("div",{className:cv,children:a(Ge,{pl:"Nombre del titular",className:dv})}),m("div",{className:fv,children:[a(Ge,{pl:"12 ",className:pv}),a("svg",{width:"12",height:"7",viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M1 1L6 6L11 1",stroke:"#999999",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),m("div",{className:mv,children:[a(Ge,{pl:"24",className:hv}),a("svg",{width:"12",height:"7",viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M1 1L6 6L11 1",stroke:"#999999",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),m("div",{className:gv,children:[a(Ge,{pl:"CVV",className:vv}),a("img",{src:"/assets/gallery/question-mark-icon.png",alt:"quastion-mark"})]})]}),m("div",{className:yv,children:["Importe a pagar ",a("span",{children:"169,98 €"})]}),a(le,{className:xv,children:"Pagar"})]})]})]})},Cv=()=>a(Y2,{}),kv=()=>a(ug,{}),Sv=()=>a(C4,{}),Ev=()=>a(X4,{}),Nv=()=>a(c2,{}),Pv=()=>a(wv,{}),_v=()=>a(mm,{children:a(qh,{children:m(um,{children:[a(gn,{path:V.root,element:a(Cv,{})}),a(gn,{path:V.woman,element:a(kv,{})}),a(gn,{path:V.product,element:a(Sv,{})}),a(gn,{path:V.cart,element:a(Ev,{})}),a(gn,{path:V.checkout,element:a(Nv,{})}),a(gn,{path:V.payment,element:a(Pv,{})})]})})}),Lv=()=>a(_v,{});rh`

body {

  background: white;
  width: 100%;
  overflow-y: auto;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
	font-weight: normal;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

 }

* {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
 }
`;const zv=Lf(document.getElementById("root"));zv.render(a(Lv,{}));
