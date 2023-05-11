(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Zf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var br={},Jf={get exports(){return br},set exports(e){br=e}},Lo={},$={},qf={get exports(){return $},set exports(e){$=e}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),e1=Symbol.for("react.portal"),t1=Symbol.for("react.fragment"),n1=Symbol.for("react.strict_mode"),r1=Symbol.for("react.profiler"),i1=Symbol.for("react.provider"),o1=Symbol.for("react.context"),l1=Symbol.for("react.forward_ref"),a1=Symbol.for("react.suspense"),s1=Symbol.for("react.memo"),u1=Symbol.for("react.lazy"),js=Symbol.iterator;function c1(e){return e===null||typeof e!="object"?null:(e=js&&e[js]||e["@@iterator"],typeof e=="function"?e:null)}var Cc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kc=Object.assign,Sc={};function or(e,t,n){this.props=e,this.context=t,this.refs=Sc,this.updater=n||Cc}or.prototype.isReactComponent={};or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ec(){}Ec.prototype=or.prototype;function za(e,t,n){this.props=e,this.context=t,this.refs=Sc,this.updater=n||Cc}var Ma=za.prototype=new Ec;Ma.constructor=za;kc(Ma,or.prototype);Ma.isPureReactComponent=!0;var Ts=Array.isArray,Nc=Object.prototype.hasOwnProperty,ja={current:null},Pc={key:!0,ref:!0,__self:!0,__source:!0};function _c(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Nc.call(t,r)&&!Pc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ai,type:e,key:o,ref:a,props:i,_owner:ja.current}}function d1(e,t){return{$$typeof:ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ta(e){return typeof e=="object"&&e!==null&&e.$$typeof===ai}function f1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Rs=/\/+/g;function Zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?f1(""+e.key):t.toString(36)}function Ui(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ai:case e1:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Zo(a,0):r,Ts(i)?(n="",e!=null&&(n=e.replace(Rs,"$&/")+"/"),Ui(i,t,n,"",function(c){return c})):i!=null&&(Ta(i)&&(i=d1(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Rs,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Ts(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Zo(o,s);a+=Ui(o,t,n,u,i)}else if(u=c1(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Zo(o,s++),a+=Ui(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function hi(e,t,n){if(e==null)return e;var r=[],i=0;return Ui(e,r,"","",function(o){return t.call(n,o,i++)}),r}function p1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Ai={transition:null},m1={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:ja};Y.Children={map:hi,forEach:function(e,t,n){hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hi(e,function(){t++}),t},toArray:function(e){return hi(e,function(t){return t})||[]},only:function(e){if(!Ta(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=or;Y.Fragment=t1;Y.Profiler=r1;Y.PureComponent=za;Y.StrictMode=n1;Y.Suspense=a1;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m1;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=kc({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ja.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Nc.call(t,u)&&!Pc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:ai,type:e.type,key:i,ref:o,props:r,_owner:a}};Y.createContext=function(e){return e={$$typeof:o1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:i1,_context:e},e.Consumer=e};Y.createElement=_c;Y.createFactory=function(e){var t=_c.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:l1,render:e}};Y.isValidElement=Ta;Y.lazy=function(e){return{$$typeof:u1,_payload:{_status:-1,_result:e},_init:p1}};Y.memo=function(e,t){return{$$typeof:s1,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Ai.transition;Ai.transition={};try{e()}finally{Ai.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return De.current.useCallback(e,t)};Y.useContext=function(e){return De.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return De.current.useDeferredValue(e)};Y.useEffect=function(e,t){return De.current.useEffect(e,t)};Y.useId=function(){return De.current.useId()};Y.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return De.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};Y.useRef=function(e){return De.current.useRef(e)};Y.useState=function(e){return De.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return De.current.useTransition()};Y.version="18.2.0";(function(e){e.exports=Y})(qf);const ct=Gf($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1=$,g1=Symbol.for("react.element"),v1=Symbol.for("react.fragment"),y1=Object.prototype.hasOwnProperty,x1=h1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w1={key:!0,ref:!0,__self:!0,__source:!0};function Lc(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)y1.call(t,r)&&!w1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:g1,type:e,key:o,ref:a,props:i,_owner:x1.current}}Lo.Fragment=v1;Lo.jsx=Lc;Lo.jsxs=Lc;(function(e){e.exports=Lo})(Jf);const Dr=br.Fragment,l=br.jsx,m=br.jsxs;var zl={},C1={get exports(){return zl},set exports(e){zl=e}},nt={},Ml={},k1={get exports(){return Ml},set exports(e){Ml=e}},zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,D){var B=T.length;T.push(D);e:for(;0<B;){var ie=B-1>>>1,pe=T[ie];if(0<i(pe,D))T[ie]=D,T[B]=pe,B=ie;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],B=T.pop();if(B!==D){T[0]=B;e:for(var ie=0,pe=T.length,At=pe>>>1;ie<At;){var Be=2*(ie+1)-1,fn=T[Be],ke=Be+1,Xe=T[ke];if(0>i(fn,B))ke<pe&&0>i(Xe,fn)?(T[ie]=Xe,T[ke]=B,ie=ke):(T[ie]=fn,T[Be]=B,ie=Be);else if(ke<pe&&0>i(Xe,B))T[ie]=Xe,T[ke]=B,ie=ke;else break e}}return D}function i(T,D){var B=T.sortIndex-D.sortIndex;return B!==0?B:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],c=[],g=1,v=null,y=3,w=!1,C=!1,x=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=T)r(c),D.sortIndex=D.expirationTime,t(u,D);else break;D=n(c)}}function k(T){if(x=!1,h(T),!C)if(n(u)!==null)C=!0,Ke(E);else{var D=n(c);D!==null&&dn(k,D.startTime-T)}}function E(T,D){C=!1,x&&(x=!1,f(M),M=-1),w=!0;var B=y;try{for(h(D),v=n(u);v!==null&&(!(v.expirationTime>D)||T&&!U());){var ie=v.callback;if(typeof ie=="function"){v.callback=null,y=v.priorityLevel;var pe=ie(v.expirationTime<=D);D=e.unstable_now(),typeof pe=="function"?v.callback=pe:v===n(u)&&r(u),h(D)}else r(u);v=n(u)}if(v!==null)var At=!0;else{var Be=n(c);Be!==null&&dn(k,Be.startTime-D),At=!1}return At}finally{v=null,y=B,w=!1}}var P=!1,S=null,M=-1,z=5,j=-1;function U(){return!(e.unstable_now()-j<z)}function A(){if(S!==null){var T=e.unstable_now();j=T;var D=!0;try{D=S(!0,T)}finally{D?b():(P=!1,S=null)}}else P=!1}var b;if(typeof d=="function")b=function(){d(A)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,Ae=xe.port2;xe.port1.onmessage=A,b=function(){Ae.postMessage(null)}}else b=function(){N(A,0)};function Ke(T){S=T,P||(P=!0,b())}function dn(T,D){M=N(function(){T(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){C||w||(C=!0,Ke(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(T){switch(y){case 1:case 2:case 3:var D=3;break;default:D=y}var B=y;y=D;try{return T()}finally{y=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var B=y;y=T;try{return D()}finally{y=B}},e.unstable_scheduleCallback=function(T,D,B){var ie=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ie+B:ie):B=ie,T){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=B+pe,T={id:g++,callback:D,priorityLevel:T,startTime:B,expirationTime:pe,sortIndex:-1},B>ie?(T.sortIndex=B,t(c,T),n(u)===null&&T===n(c)&&(x?(f(M),M=-1):x=!0,dn(k,B-ie))):(T.sortIndex=pe,t(u,T),C||w||(C=!0,Ke(E))),T},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(T){var D=y;return function(){var B=y;y=D;try{return T.apply(this,arguments)}finally{y=B}}}})(zc);(function(e){e.exports=zc})(k1);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc=$,tt=Ml;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jc=new Set,Ur={};function Pn(e,t){Gn(e,t),Gn(e+"Capture",t)}function Gn(e,t){for(Ur[e]=t,e=0;e<t.length;e++)jc.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jl=Object.prototype.hasOwnProperty,S1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Os={},Is={};function E1(e){return jl.call(Is,e)?!0:jl.call(Os,e)?!1:S1.test(e)?Is[e]=!0:(Os[e]=!0,!1)}function N1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P1(e,t,n,r){if(t===null||typeof t>"u"||N1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ra=/[\-:]([a-z])/g;function Oa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ra,Oa);Me[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ra,Oa);Me[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ra,Oa);Me[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ia(e,t,n,r){var i=Me.hasOwnProperty(t)?Me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P1(t,n,i,r)&&(n=null),r||i===null?E1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ut=Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gi=Symbol.for("react.element"),Tn=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),$a=Symbol.for("react.strict_mode"),Tl=Symbol.for("react.profiler"),Tc=Symbol.for("react.provider"),Rc=Symbol.for("react.context"),ba=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),Ol=Symbol.for("react.suspense_list"),Da=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Oc=Symbol.for("react.offscreen"),$s=Symbol.iterator;function mr(e){return e===null||typeof e!="object"?null:(e=$s&&e[$s]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,Go;function Er(e){if(Go===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Go=t&&t[1]||""}return`
`+Go+e}var Jo=!1;function qo(e,t){if(!e||Jo)return"";Jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Jo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Er(e):""}function _1(e){switch(e.tag){case 5:return Er(e.type);case 16:return Er("Lazy");case 13:return Er("Suspense");case 19:return Er("SuspenseList");case 0:case 2:case 15:return e=qo(e.type,!1),e;case 11:return e=qo(e.type.render,!1),e;case 1:return e=qo(e.type,!0),e;default:return""}}function Il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rn:return"Fragment";case Tn:return"Portal";case Tl:return"Profiler";case $a:return"StrictMode";case Rl:return"Suspense";case Ol:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rc:return(e.displayName||"Context")+".Consumer";case Tc:return(e._context.displayName||"Context")+".Provider";case ba:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Da:return t=e.displayName||null,t!==null?t:Il(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return Il(e(t))}catch{}}return null}function L1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Il(t);case 8:return t===$a?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function z1(e){var t=Ic(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vi(e){e._valueTracker||(e._valueTracker=z1(e))}function $c(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ic(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function eo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $l(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bc(e,t){t=t.checked,t!=null&&Ia(e,"checked",t,!1)}function bl(e,t){bc(e,t);var n=ln(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Dl(e,t.type,ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ds(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Dl(e,t,n){(t!=="number"||eo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nr=Array.isArray;function Wn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ln(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Us(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Nr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ln(n)}}function Dc(e,t){var n=ln(t.value),r=ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function As(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Uc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Al(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Uc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yi,Ac=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yi=yi||document.createElement("div"),yi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M1=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(e){M1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lr[t]=Lr[e]})});function Bc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lr.hasOwnProperty(e)&&Lr[e]?(""+t).trim():t+"px"}function Fc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var j1=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bl(e,t){if(t){if(j1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vl=null;function Ua(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wl=null,Hn=null,Qn=null;function Bs(e){if(e=ci(e)){if(typeof Wl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Ro(t),Wl(e.stateNode,e.type,t))}}function Vc(e){Hn?Qn?Qn.push(e):Qn=[e]:Hn=e}function Wc(){if(Hn){var e=Hn,t=Qn;if(Qn=Hn=null,Bs(e),t)for(e=0;e<t.length;e++)Bs(t[e])}}function Hc(e,t){return e(t)}function Qc(){}var el=!1;function Yc(e,t,n){if(el)return e(t,n);el=!0;try{return Hc(e,t,n)}finally{el=!1,(Hn!==null||Qn!==null)&&(Qc(),Wc())}}function Br(e,t){var n=e.stateNode;if(n===null)return null;var r=Ro(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Hl=!1;if(It)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){Hl=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{Hl=!1}function T1(e,t,n,r,i,o,a,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var zr=!1,to=null,no=!1,Ql=null,R1={onError:function(e){zr=!0,to=e}};function O1(e,t,n,r,i,o,a,s,u){zr=!1,to=null,T1.apply(R1,arguments)}function I1(e,t,n,r,i,o,a,s,u){if(O1.apply(this,arguments),zr){if(zr){var c=to;zr=!1,to=null}else throw Error(_(198));no||(no=!0,Ql=c)}}function _n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fs(e){if(_n(e)!==e)throw Error(_(188))}function $1(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Fs(i),e;if(o===r)return Fs(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Xc(e){return e=$1(e),e!==null?Zc(e):null}function Zc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zc(e);if(t!==null)return t;e=e.sibling}return null}var Gc=tt.unstable_scheduleCallback,Vs=tt.unstable_cancelCallback,b1=tt.unstable_shouldYield,D1=tt.unstable_requestPaint,he=tt.unstable_now,U1=tt.unstable_getCurrentPriorityLevel,Aa=tt.unstable_ImmediatePriority,Jc=tt.unstable_UserBlockingPriority,ro=tt.unstable_NormalPriority,A1=tt.unstable_LowPriority,qc=tt.unstable_IdlePriority,zo=null,Pt=null;function B1(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(zo,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:W1,F1=Math.log,V1=Math.LN2;function W1(e){return e>>>=0,e===0?32:31-(F1(e)/V1|0)|0}var xi=64,wi=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function io(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Pr(s):(o&=a,o!==0&&(r=Pr(o)))}else a=n&~i,a!==0?r=Pr(a):o!==0&&(r=Pr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),i=1<<n,r|=e[n],t&=~i;return r}function H1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-gt(o),s=1<<a,u=i[a];u===-1?(!(s&n)||s&r)&&(i[a]=H1(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ed(){var e=xi;return xi<<=1,!(xi&4194240)&&(xi=64),e}function tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function Y1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-gt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ba(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var re=0;function td(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nd,Fa,rd,id,od,Kl=!1,Ci=[],Zt=null,Gt=null,Jt=null,Fr=new Map,Vr=new Map,Ht=[],K1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ws(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":Fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function gr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ci(t),t!==null&&Fa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function X1(e,t,n,r,i){switch(t){case"focusin":return Zt=gr(Zt,e,t,n,r,i),!0;case"dragenter":return Gt=gr(Gt,e,t,n,r,i),!0;case"mouseover":return Jt=gr(Jt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Fr.set(o,gr(Fr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Vr.set(o,gr(Vr.get(o)||null,e,t,n,r,i)),!0}return!1}function ld(e){var t=gn(e.target);if(t!==null){var n=_n(t);if(n!==null){if(t=n.tag,t===13){if(t=Kc(n),t!==null){e.blockedOn=t,od(e.priority,function(){rd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vl=r,n.target.dispatchEvent(r),Vl=null}else return t=ci(n),t!==null&&Fa(t),e.blockedOn=n,!1;t.shift()}return!0}function Hs(e,t,n){Bi(e)&&n.delete(t)}function Z1(){Kl=!1,Zt!==null&&Bi(Zt)&&(Zt=null),Gt!==null&&Bi(Gt)&&(Gt=null),Jt!==null&&Bi(Jt)&&(Jt=null),Fr.forEach(Hs),Vr.forEach(Hs)}function vr(e,t){e.blockedOn===t&&(e.blockedOn=null,Kl||(Kl=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,Z1)))}function Wr(e){function t(i){return vr(i,e)}if(0<Ci.length){vr(Ci[0],e);for(var n=1;n<Ci.length;n++){var r=Ci[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&vr(Zt,e),Gt!==null&&vr(Gt,e),Jt!==null&&vr(Jt,e),Fr.forEach(t),Vr.forEach(t),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)ld(n),n.blockedOn===null&&Ht.shift()}var Yn=Ut.ReactCurrentBatchConfig,oo=!0;function G1(e,t,n,r){var i=re,o=Yn.transition;Yn.transition=null;try{re=1,Va(e,t,n,r)}finally{re=i,Yn.transition=o}}function J1(e,t,n,r){var i=re,o=Yn.transition;Yn.transition=null;try{re=4,Va(e,t,n,r)}finally{re=i,Yn.transition=o}}function Va(e,t,n,r){if(oo){var i=Xl(e,t,n,r);if(i===null)dl(e,t,r,lo,n),Ws(e,r);else if(X1(i,e,t,n,r))r.stopPropagation();else if(Ws(e,r),t&4&&-1<K1.indexOf(e)){for(;i!==null;){var o=ci(i);if(o!==null&&nd(o),o=Xl(e,t,n,r),o===null&&dl(e,t,r,lo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else dl(e,t,r,null,n)}}var lo=null;function Xl(e,t,n,r){if(lo=null,e=Ua(r),e=gn(e),e!==null)if(t=_n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return lo=e,null}function ad(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(U1()){case Aa:return 1;case Jc:return 4;case ro:case A1:return 16;case qc:return 536870912;default:return 16}default:return 16}}var Yt=null,Wa=null,Fi=null;function sd(){if(Fi)return Fi;var e,t=Wa,n=t.length,r,i="value"in Yt?Yt.value:Yt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Fi=i.slice(e,1<r?1-r:void 0)}function Vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function Qs(){return!1}function rt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ki:Qs,this.isPropagationStopped=Qs,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ha=rt(lr),ui=fe({},lr,{view:0,detail:0}),q1=rt(ui),nl,rl,yr,Mo=fe({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(nl=e.screenX-yr.screenX,rl=e.screenY-yr.screenY):rl=nl=0,yr=e),nl)},movementY:function(e){return"movementY"in e?e.movementY:rl}}),Ys=rt(Mo),ep=fe({},Mo,{dataTransfer:0}),tp=rt(ep),np=fe({},ui,{relatedTarget:0}),il=rt(np),rp=fe({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),ip=rt(rp),op=fe({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lp=rt(op),ap=fe({},lr,{data:0}),Ks=rt(ap),sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},up={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cp[e])?!!t[e]:!1}function Qa(){return dp}var fp=fe({},ui,{key:function(e){if(e.key){var t=sp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?up[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qa,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pp=rt(fp),mp=fe({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xs=rt(mp),hp=fe({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qa}),gp=rt(hp),vp=fe({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),yp=rt(vp),xp=fe({},Mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wp=rt(xp),Cp=[9,13,27,32],Ya=It&&"CompositionEvent"in window,Mr=null;It&&"documentMode"in document&&(Mr=document.documentMode);var kp=It&&"TextEvent"in window&&!Mr,ud=It&&(!Ya||Mr&&8<Mr&&11>=Mr),Zs=String.fromCharCode(32),Gs=!1;function cd(e,t){switch(e){case"keyup":return Cp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function Sp(e,t){switch(e){case"compositionend":return dd(t);case"keypress":return t.which!==32?null:(Gs=!0,Zs);case"textInput":return e=t.data,e===Zs&&Gs?null:e;default:return null}}function Ep(e,t){if(On)return e==="compositionend"||!Ya&&cd(e,t)?(e=sd(),Fi=Wa=Yt=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ud&&t.locale!=="ko"?null:t.data;default:return null}}var Np={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Np[e.type]:t==="textarea"}function fd(e,t,n,r){Vc(r),t=ao(t,"onChange"),0<t.length&&(n=new Ha("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jr=null,Hr=null;function Pp(e){Sd(e,0)}function jo(e){var t=bn(e);if($c(t))return e}function _p(e,t){if(e==="change")return t}var pd=!1;if(It){var ol;if(It){var ll="oninput"in document;if(!ll){var qs=document.createElement("div");qs.setAttribute("oninput","return;"),ll=typeof qs.oninput=="function"}ol=ll}else ol=!1;pd=ol&&(!document.documentMode||9<document.documentMode)}function eu(){jr&&(jr.detachEvent("onpropertychange",md),Hr=jr=null)}function md(e){if(e.propertyName==="value"&&jo(Hr)){var t=[];fd(t,Hr,e,Ua(e)),Yc(Pp,t)}}function Lp(e,t,n){e==="focusin"?(eu(),jr=t,Hr=n,jr.attachEvent("onpropertychange",md)):e==="focusout"&&eu()}function zp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jo(Hr)}function Mp(e,t){if(e==="click")return jo(t)}function jp(e,t){if(e==="input"||e==="change")return jo(t)}function Tp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Tp;function Qr(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jl.call(t,i)||!xt(e[i],t[i]))return!1}return!0}function tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nu(e,t){var n=tu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tu(n)}}function hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gd(){for(var e=window,t=eo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=eo(e.document)}return t}function Ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rp(e){var t=gd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hd(n.ownerDocument.documentElement,n)){if(r!==null&&Ka(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=nu(n,o);var a=nu(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Op=It&&"documentMode"in document&&11>=document.documentMode,In=null,Zl=null,Tr=null,Gl=!1;function ru(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gl||In==null||In!==eo(r)||(r=In,"selectionStart"in r&&Ka(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tr&&Qr(Tr,r)||(Tr=r,r=ao(Zl,"onSelect"),0<r.length&&(t=new Ha("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=In)))}function Si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $n={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},al={},vd={};It&&(vd=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function To(e){if(al[e])return al[e];if(!$n[e])return e;var t=$n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vd)return al[e]=t[n];return e}var yd=To("animationend"),xd=To("animationiteration"),wd=To("animationstart"),Cd=To("transitionend"),kd=new Map,iu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){kd.set(e,t),Pn(t,[e])}for(var sl=0;sl<iu.length;sl++){var ul=iu[sl],Ip=ul.toLowerCase(),$p=ul[0].toUpperCase()+ul.slice(1);sn(Ip,"on"+$p)}sn(yd,"onAnimationEnd");sn(xd,"onAnimationIteration");sn(wd,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(Cd,"onTransitionEnd");Gn("onMouseEnter",["mouseout","mouseover"]);Gn("onMouseLeave",["mouseout","mouseover"]);Gn("onPointerEnter",["pointerout","pointerover"]);Gn("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bp=new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));function ou(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,I1(r,t,void 0,e),e.currentTarget=null}function Sd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;ou(i,s,c),o=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;ou(i,s,c),o=u}}}if(no)throw e=Ql,no=!1,Ql=null,e}function ae(e,t){var n=t[na];n===void 0&&(n=t[na]=new Set);var r=e+"__bubble";n.has(r)||(Ed(t,e,2,!1),n.add(r))}function cl(e,t,n){var r=0;t&&(r|=4),Ed(n,e,r,t)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function Yr(e){if(!e[Ei]){e[Ei]=!0,jc.forEach(function(n){n!=="selectionchange"&&(bp.has(n)||cl(n,!1,e),cl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ei]||(t[Ei]=!0,cl("selectionchange",!1,t))}}function Ed(e,t,n,r){switch(ad(t)){case 1:var i=G1;break;case 4:i=J1;break;default:i=Va}n=i.bind(null,t,n,e),i=void 0,!Hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function dl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;s!==null;){if(a=gn(s),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Yc(function(){var c=o,g=Ua(n),v=[];e:{var y=kd.get(e);if(y!==void 0){var w=Ha,C=e;switch(e){case"keypress":if(Vi(n)===0)break e;case"keydown":case"keyup":w=pp;break;case"focusin":C="focus",w=il;break;case"focusout":C="blur",w=il;break;case"beforeblur":case"afterblur":w=il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=gp;break;case yd:case xd:case wd:w=ip;break;case Cd:w=yp;break;case"scroll":w=q1;break;case"wheel":w=wp;break;case"copy":case"cut":case"paste":w=lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Xs}var x=(t&4)!==0,N=!x&&e==="scroll",f=x?y!==null?y+"Capture":null:y;x=[];for(var d=c,h;d!==null;){h=d;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,f!==null&&(k=Br(d,f),k!=null&&x.push(Kr(d,k,h)))),N)break;d=d.return}0<x.length&&(y=new w(y,C,null,n,g),v.push({event:y,listeners:x}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",y&&n!==Vl&&(C=n.relatedTarget||n.fromElement)&&(gn(C)||C[$t]))break e;if((w||y)&&(y=g.window===g?g:(y=g.ownerDocument)?y.defaultView||y.parentWindow:window,w?(C=n.relatedTarget||n.toElement,w=c,C=C?gn(C):null,C!==null&&(N=_n(C),C!==N||C.tag!==5&&C.tag!==6)&&(C=null)):(w=null,C=c),w!==C)){if(x=Ys,k="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=Xs,k="onPointerLeave",f="onPointerEnter",d="pointer"),N=w==null?y:bn(w),h=C==null?y:bn(C),y=new x(k,d+"leave",w,n,g),y.target=N,y.relatedTarget=h,k=null,gn(g)===c&&(x=new x(f,d+"enter",C,n,g),x.target=h,x.relatedTarget=N,k=x),N=k,w&&C)t:{for(x=w,f=C,d=0,h=x;h;h=zn(h))d++;for(h=0,k=f;k;k=zn(k))h++;for(;0<d-h;)x=zn(x),d--;for(;0<h-d;)f=zn(f),h--;for(;d--;){if(x===f||f!==null&&x===f.alternate)break t;x=zn(x),f=zn(f)}x=null}else x=null;w!==null&&lu(v,y,w,x,!1),C!==null&&N!==null&&lu(v,N,C,x,!0)}}e:{if(y=c?bn(c):window,w=y.nodeName&&y.nodeName.toLowerCase(),w==="select"||w==="input"&&y.type==="file")var E=_p;else if(Js(y))if(pd)E=jp;else{E=zp;var P=Lp}else(w=y.nodeName)&&w.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(E=Mp);if(E&&(E=E(e,c))){fd(v,E,n,g);break e}P&&P(e,y,c),e==="focusout"&&(P=y._wrapperState)&&P.controlled&&y.type==="number"&&Dl(y,"number",y.value)}switch(P=c?bn(c):window,e){case"focusin":(Js(P)||P.contentEditable==="true")&&(In=P,Zl=c,Tr=null);break;case"focusout":Tr=Zl=In=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,ru(v,n,g);break;case"selectionchange":if(Op)break;case"keydown":case"keyup":ru(v,n,g)}var S;if(Ya)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else On?cd(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(ud&&n.locale!=="ko"&&(On||M!=="onCompositionStart"?M==="onCompositionEnd"&&On&&(S=sd()):(Yt=g,Wa="value"in Yt?Yt.value:Yt.textContent,On=!0)),P=ao(c,M),0<P.length&&(M=new Ks(M,e,null,n,g),v.push({event:M,listeners:P}),S?M.data=S:(S=dd(n),S!==null&&(M.data=S)))),(S=kp?Sp(e,n):Ep(e,n))&&(c=ao(c,"onBeforeInput"),0<c.length&&(g=new Ks("onBeforeInput","beforeinput",null,n,g),v.push({event:g,listeners:c}),g.data=S))}Sd(v,t)})}function Kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ao(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Br(e,n),o!=null&&r.unshift(Kr(e,o,i)),o=Br(e,t),o!=null&&r.push(Kr(e,o,i))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lu(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Br(n,o),u!=null&&a.unshift(Kr(n,u,s))):i||(u=Br(n,o),u!=null&&a.push(Kr(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Dp=/\r\n?/g,Up=/\u0000|\uFFFD/g;function au(e){return(typeof e=="string"?e:""+e).replace(Dp,`
`).replace(Up,"")}function Ni(e,t,n){if(t=au(t),au(e)!==t&&n)throw Error(_(425))}function so(){}var Jl=null,ql=null;function ea(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ta=typeof setTimeout=="function"?setTimeout:void 0,Ap=typeof clearTimeout=="function"?clearTimeout:void 0,su=typeof Promise=="function"?Promise:void 0,Bp=typeof queueMicrotask=="function"?queueMicrotask:typeof su<"u"?function(e){return su.resolve(null).then(e).catch(Fp)}:ta;function Fp(e){setTimeout(function(){throw e})}function fl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wr(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ar=Math.random().toString(36).slice(2),Et="__reactFiber$"+ar,Xr="__reactProps$"+ar,$t="__reactContainer$"+ar,na="__reactEvents$"+ar,Vp="__reactListeners$"+ar,Wp="__reactHandles$"+ar;function gn(e){var t=e[Et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uu(e);e!==null;){if(n=e[Et])return n;e=uu(e)}return t}e=n,n=e.parentNode}return null}function ci(e){return e=e[Et]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Ro(e){return e[Xr]||null}var ra=[],Dn=-1;function un(e){return{current:e}}function se(e){0>Dn||(e.current=ra[Dn],ra[Dn]=null,Dn--)}function oe(e,t){Dn++,ra[Dn]=e.current,e.current=t}var an={},Ie=un(an),We=un(!1),Cn=an;function Jn(e,t){var n=e.type.contextTypes;if(!n)return an;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function He(e){return e=e.childContextTypes,e!=null}function uo(){se(We),se(Ie)}function cu(e,t,n){if(Ie.current!==an)throw Error(_(168));oe(Ie,t),oe(We,n)}function Nd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,L1(e)||"Unknown",i));return fe({},n,r)}function co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||an,Cn=Ie.current,oe(Ie,e),oe(We,We.current),!0}function du(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Nd(e,t,Cn),r.__reactInternalMemoizedMergedChildContext=e,se(We),se(Ie),oe(Ie,e)):se(We),oe(We,n)}var jt=null,Oo=!1,pl=!1;function Pd(e){jt===null?jt=[e]:jt.push(e)}function Hp(e){Oo=!0,Pd(e)}function cn(){if(!pl&&jt!==null){pl=!0;var e=0,t=re;try{var n=jt;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jt=null,Oo=!1}catch(i){throw jt!==null&&(jt=jt.slice(e+1)),Gc(Aa,cn),i}finally{re=t,pl=!1}}return null}var Un=[],An=0,fo=null,po=0,it=[],ot=0,kn=null,Tt=1,Rt="";function pn(e,t){Un[An++]=po,Un[An++]=fo,fo=e,po=t}function _d(e,t,n){it[ot++]=Tt,it[ot++]=Rt,it[ot++]=kn,kn=e;var r=Tt;e=Rt;var i=32-gt(r)-1;r&=~(1<<i),n+=1;var o=32-gt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Tt=1<<32-gt(t)+i|n<<i|r,Rt=o+e}else Tt=1<<o|n<<i|r,Rt=e}function Xa(e){e.return!==null&&(pn(e,1),_d(e,1,0))}function Za(e){for(;e===fo;)fo=Un[--An],Un[An]=null,po=Un[--An],Un[An]=null;for(;e===kn;)kn=it[--ot],it[ot]=null,Rt=it[--ot],it[ot]=null,Tt=it[--ot],it[ot]=null}var qe=null,Je=null,ue=!1,ht=null;function Ld(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Je=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kn!==null?{id:Tt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Je=null,!0):!1;default:return!1}}function ia(e){return(e.mode&1)!==0&&(e.flags&128)===0}function oa(e){if(ue){var t=Je;if(t){var n=t;if(!fu(e,t)){if(ia(e))throw Error(_(418));t=qt(n.nextSibling);var r=qe;t&&fu(e,t)?Ld(r,n):(e.flags=e.flags&-4097|2,ue=!1,qe=e)}}else{if(ia(e))throw Error(_(418));e.flags=e.flags&-4097|2,ue=!1,qe=e}}}function pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Pi(e){if(e!==qe)return!1;if(!ue)return pu(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ea(e.type,e.memoizedProps)),t&&(t=Je)){if(ia(e))throw zd(),Error(_(418));for(;t;)Ld(e,t),t=qt(t.nextSibling)}if(pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=qe?qt(e.stateNode.nextSibling):null;return!0}function zd(){for(var e=Je;e;)e=qt(e.nextSibling)}function qn(){Je=qe=null,ue=!1}function Ga(e){ht===null?ht=[e]:ht.push(e)}var Qp=Ut.ReactCurrentBatchConfig;function pt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var mo=un(null),ho=null,Bn=null,Ja=null;function qa(){Ja=Bn=ho=null}function es(e){var t=mo.current;se(mo),e._currentValue=t}function la(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kn(e,t){ho=e,Ja=Bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(Ja!==e)if(e={context:e,memoizedValue:t,next:null},Bn===null){if(ho===null)throw Error(_(308));Bn=e,ho.dependencies={lanes:0,firstContext:e}}else Bn=Bn.next=e;return t}var vn=null;function ts(e){vn===null?vn=[e]:vn.push(e)}function Md(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ts(t)):(n.next=i.next,i.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,bt(e,n)}return i=r.interleaved,i===null?(t.next=t,ts(r)):(t.next=i.next,i.next=t),r.interleaved=t,bt(e,n)}function Wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ba(e,n)}}function mu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function go(e,t,n,r){var i=e.updateQueue;Wt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,a===null?o=c:a.next=c,a=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==a&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=u))}if(o!==null){var v=i.baseState;a=0,g=c=u=null,s=o;do{var y=s.lane,w=s.eventTime;if((r&y)===y){g!==null&&(g=g.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var C=e,x=s;switch(y=t,w=n,x.tag){case 1:if(C=x.payload,typeof C=="function"){v=C.call(w,v,y);break e}v=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=x.payload,y=typeof C=="function"?C.call(w,v,y):C,y==null)break e;v=fe({},v,y);break e;case 2:Wt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[s]:y.push(s))}else w={eventTime:w,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=w,u=v):g=g.next=w,a|=y;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;y=s,s=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(g===null&&(u=v),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);En|=a,e.lanes=a,e.memoizedState=v}}function hu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Td=new Mc.Component().refs;function aa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Io={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),i=nn(e),o=Ot(r,i);o.payload=t,n!=null&&(o.callback=n),t=en(e,o,i),t!==null&&(vt(t,e,i,r),Wi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),i=nn(e),o=Ot(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=en(e,o,i),t!==null&&(vt(t,e,i,r),Wi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=nn(e),i=Ot(n,r);i.tag=2,t!=null&&(i.callback=t),t=en(e,i,r),t!==null&&(vt(t,e,r,n),Wi(t,e,r))}};function gu(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Qr(n,r)||!Qr(i,o):!0}function Rd(e,t,n){var r=!1,i=an,o=t.contextType;return typeof o=="object"&&o!==null?o=st(o):(i=He(t)?Cn:Ie.current,r=t.contextTypes,o=(r=r!=null)?Jn(e,i):an),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Io,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function vu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Io.enqueueReplaceState(t,t.state,null)}function sa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Td,ns(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=st(o):(o=He(t)?Cn:Ie.current,i.context=Jn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(aa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Io.enqueueReplaceState(i,i.state,null),go(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===Td&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function _i(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yu(e){var t=e._init;return t(e._payload)}function Od(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=rn(f,d),f.index=0,f.sibling=null,f}function o(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,h,k){return d===null||d.tag!==6?(d=wl(h,f.mode,k),d.return=f,d):(d=i(d,h),d.return=f,d)}function u(f,d,h,k){var E=h.type;return E===Rn?g(f,d,h.props.children,k,h.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Vt&&yu(E)===d.type)?(k=i(d,h.props),k.ref=xr(f,d,h),k.return=f,k):(k=Zi(h.type,h.key,h.props,null,f.mode,k),k.ref=xr(f,d,h),k.return=f,k)}function c(f,d,h,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Cl(h,f.mode,k),d.return=f,d):(d=i(d,h.children||[]),d.return=f,d)}function g(f,d,h,k,E){return d===null||d.tag!==7?(d=wn(h,f.mode,k,E),d.return=f,d):(d=i(d,h),d.return=f,d)}function v(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=wl(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case gi:return h=Zi(d.type,d.key,d.props,null,f.mode,h),h.ref=xr(f,null,d),h.return=f,h;case Tn:return d=Cl(d,f.mode,h),d.return=f,d;case Vt:var k=d._init;return v(f,k(d._payload),h)}if(Nr(d)||mr(d))return d=wn(d,f.mode,h,null),d.return=f,d;_i(f,d)}return null}function y(f,d,h,k){var E=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:s(f,d,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case gi:return h.key===E?u(f,d,h,k):null;case Tn:return h.key===E?c(f,d,h,k):null;case Vt:return E=h._init,y(f,d,E(h._payload),k)}if(Nr(h)||mr(h))return E!==null?null:g(f,d,h,k,null);_i(f,h)}return null}function w(f,d,h,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(h)||null,s(d,f,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case gi:return f=f.get(k.key===null?h:k.key)||null,u(d,f,k,E);case Tn:return f=f.get(k.key===null?h:k.key)||null,c(d,f,k,E);case Vt:var P=k._init;return w(f,d,h,P(k._payload),E)}if(Nr(k)||mr(k))return f=f.get(h)||null,g(d,f,k,E,null);_i(d,k)}return null}function C(f,d,h,k){for(var E=null,P=null,S=d,M=d=0,z=null;S!==null&&M<h.length;M++){S.index>M?(z=S,S=null):z=S.sibling;var j=y(f,S,h[M],k);if(j===null){S===null&&(S=z);break}e&&S&&j.alternate===null&&t(f,S),d=o(j,d,M),P===null?E=j:P.sibling=j,P=j,S=z}if(M===h.length)return n(f,S),ue&&pn(f,M),E;if(S===null){for(;M<h.length;M++)S=v(f,h[M],k),S!==null&&(d=o(S,d,M),P===null?E=S:P.sibling=S,P=S);return ue&&pn(f,M),E}for(S=r(f,S);M<h.length;M++)z=w(S,f,M,h[M],k),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?M:z.key),d=o(z,d,M),P===null?E=z:P.sibling=z,P=z);return e&&S.forEach(function(U){return t(f,U)}),ue&&pn(f,M),E}function x(f,d,h,k){var E=mr(h);if(typeof E!="function")throw Error(_(150));if(h=E.call(h),h==null)throw Error(_(151));for(var P=E=null,S=d,M=d=0,z=null,j=h.next();S!==null&&!j.done;M++,j=h.next()){S.index>M?(z=S,S=null):z=S.sibling;var U=y(f,S,j.value,k);if(U===null){S===null&&(S=z);break}e&&S&&U.alternate===null&&t(f,S),d=o(U,d,M),P===null?E=U:P.sibling=U,P=U,S=z}if(j.done)return n(f,S),ue&&pn(f,M),E;if(S===null){for(;!j.done;M++,j=h.next())j=v(f,j.value,k),j!==null&&(d=o(j,d,M),P===null?E=j:P.sibling=j,P=j);return ue&&pn(f,M),E}for(S=r(f,S);!j.done;M++,j=h.next())j=w(S,f,M,j.value,k),j!==null&&(e&&j.alternate!==null&&S.delete(j.key===null?M:j.key),d=o(j,d,M),P===null?E=j:P.sibling=j,P=j);return e&&S.forEach(function(A){return t(f,A)}),ue&&pn(f,M),E}function N(f,d,h,k){if(typeof h=="object"&&h!==null&&h.type===Rn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case gi:e:{for(var E=h.key,P=d;P!==null;){if(P.key===E){if(E=h.type,E===Rn){if(P.tag===7){n(f,P.sibling),d=i(P,h.props.children),d.return=f,f=d;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Vt&&yu(E)===P.type){n(f,P.sibling),d=i(P,h.props),d.ref=xr(f,P,h),d.return=f,f=d;break e}n(f,P);break}else t(f,P);P=P.sibling}h.type===Rn?(d=wn(h.props.children,f.mode,k,h.key),d.return=f,f=d):(k=Zi(h.type,h.key,h.props,null,f.mode,k),k.ref=xr(f,d,h),k.return=f,f=k)}return a(f);case Tn:e:{for(P=h.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(f,d.sibling),d=i(d,h.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Cl(h,f.mode,k),d.return=f,f=d}return a(f);case Vt:return P=h._init,N(f,d,P(h._payload),k)}if(Nr(h))return C(f,d,h,k);if(mr(h))return x(f,d,h,k);_i(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,h),d.return=f,f=d):(n(f,d),d=wl(h,f.mode,k),d.return=f,f=d),a(f)):n(f,d)}return N}var er=Od(!0),Id=Od(!1),di={},_t=un(di),Zr=un(di),Gr=un(di);function yn(e){if(e===di)throw Error(_(174));return e}function rs(e,t){switch(oe(Gr,t),oe(Zr,e),oe(_t,di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Al(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Al(t,e)}se(_t),oe(_t,t)}function tr(){se(_t),se(Zr),se(Gr)}function $d(e){yn(Gr.current);var t=yn(_t.current),n=Al(t,e.type);t!==n&&(oe(Zr,e),oe(_t,n))}function is(e){Zr.current===e&&(se(_t),se(Zr))}var ce=un(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ml=[];function os(){for(var e=0;e<ml.length;e++)ml[e]._workInProgressVersionPrimary=null;ml.length=0}var Hi=Ut.ReactCurrentDispatcher,hl=Ut.ReactCurrentBatchConfig,Sn=0,de=null,we=null,Ee=null,yo=!1,Rr=!1,Jr=0,Yp=0;function je(){throw Error(_(321))}function ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function as(e,t,n,r,i,o){if(Sn=o,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hi.current=e===null||e.memoizedState===null?Gp:Jp,e=n(r,i),Rr){o=0;do{if(Rr=!1,Jr=0,25<=o)throw Error(_(301));o+=1,Ee=we=null,t.updateQueue=null,Hi.current=qp,e=n(r,i)}while(Rr)}if(Hi.current=xo,t=we!==null&&we.next!==null,Sn=0,Ee=we=de=null,yo=!1,t)throw Error(_(300));return e}function ss(){var e=Jr!==0;return Jr=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?de.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function ut(){if(we===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Ee===null?de.memoizedState:Ee.next;if(t!==null)Ee=t,we=e;else{if(e===null)throw Error(_(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ee===null?de.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function qr(e,t){return typeof t=="function"?t(e):t}function gl(e){var t=ut(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=we,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,u=null,c=o;do{var g=c.lane;if((Sn&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var v={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=v,a=r):u=u.next=v,de.lanes|=g,En|=g}c=c.next}while(c!==null&&c!==o);u===null?a=r:u.next=s,xt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,de.lanes|=o,En|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vl(e){var t=ut(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);xt(o,t.memoizedState)||(Ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function bd(){}function Dd(e,t){var n=de,r=ut(),i=t(),o=!xt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ve=!0),r=r.queue,us(Bd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,ei(9,Ad.bind(null,n,r,i,t),void 0,null),Ne===null)throw Error(_(349));Sn&30||Ud(n,t,i)}return i}function Ud(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ad(e,t,n,r){t.value=n,t.getSnapshot=r,Fd(t)&&Vd(e)}function Bd(e,t,n){return n(function(){Fd(t)&&Vd(e)})}function Fd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function Vd(e){var t=bt(e,1);t!==null&&vt(t,e,1,-1)}function xu(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:e},t.queue=e,e=e.dispatch=Zp.bind(null,de,e),[t.memoizedState,e]}function ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wd(){return ut().memoizedState}function Qi(e,t,n,r){var i=Ct();de.flags|=e,i.memoizedState=ei(1|t,n,void 0,r===void 0?null:r)}function $o(e,t,n,r){var i=ut();r=r===void 0?null:r;var o=void 0;if(we!==null){var a=we.memoizedState;if(o=a.destroy,r!==null&&ls(r,a.deps)){i.memoizedState=ei(t,n,o,r);return}}de.flags|=e,i.memoizedState=ei(1|t,n,o,r)}function wu(e,t){return Qi(8390656,8,e,t)}function us(e,t){return $o(2048,8,e,t)}function Hd(e,t){return $o(4,2,e,t)}function Qd(e,t){return $o(4,4,e,t)}function Yd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kd(e,t,n){return n=n!=null?n.concat([e]):null,$o(4,4,Yd.bind(null,t,e),n)}function cs(){}function Xd(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zd(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gd(e,t,n){return Sn&21?(xt(n,t)||(n=ed(),de.lanes|=n,En|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function Kp(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=hl.transition;hl.transition={};try{e(!1),t()}finally{re=n,hl.transition=r}}function Jd(){return ut().memoizedState}function Xp(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qd(e))ef(t,n);else if(n=Md(e,t,n,r),n!==null){var i=be();vt(n,e,r,i),tf(n,t,r)}}function Zp(e,t,n){var r=nn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qd(e))ef(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,xt(s,a)){var u=t.interleaved;u===null?(i.next=i,ts(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Md(e,t,i,r),n!==null&&(i=be(),vt(n,e,r,i),tf(n,t,r))}}function qd(e){var t=e.alternate;return e===de||t!==null&&t===de}function ef(e,t){Rr=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ba(e,n)}}var xo={readContext:st,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Gp={readContext:st,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:wu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qi(4194308,4,Yd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qi(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xp.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:xu,useDebugValue:cs,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=xu(!1),t=e[0];return e=Kp.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=Ct();if(ue){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Ne===null)throw Error(_(349));Sn&30||Ud(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,wu(Bd.bind(null,r,o,e),[e]),r.flags|=2048,ei(9,Ad.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ct(),t=Ne.identifierPrefix;if(ue){var n=Rt,r=Tt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jp={readContext:st,useCallback:Xd,useContext:st,useEffect:us,useImperativeHandle:Kd,useInsertionEffect:Hd,useLayoutEffect:Qd,useMemo:Zd,useReducer:gl,useRef:Wd,useState:function(){return gl(qr)},useDebugValue:cs,useDeferredValue:function(e){var t=ut();return Gd(t,we.memoizedState,e)},useTransition:function(){var e=gl(qr)[0],t=ut().memoizedState;return[e,t]},useMutableSource:bd,useSyncExternalStore:Dd,useId:Jd,unstable_isNewReconciler:!1},qp={readContext:st,useCallback:Xd,useContext:st,useEffect:us,useImperativeHandle:Kd,useInsertionEffect:Hd,useLayoutEffect:Qd,useMemo:Zd,useReducer:vl,useRef:Wd,useState:function(){return vl(qr)},useDebugValue:cs,useDeferredValue:function(e){var t=ut();return we===null?t.memoizedState=e:Gd(t,we.memoizedState,e)},useTransition:function(){var e=vl(qr)[0],t=ut().memoizedState;return[e,t]},useMutableSource:bd,useSyncExternalStore:Dd,useId:Jd,unstable_isNewReconciler:!1};function nr(e,t){try{var n="",r=t;do n+=_1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ua(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var e0=typeof WeakMap=="function"?WeakMap:Map;function nf(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Co||(Co=!0,xa=r),ua(e,t)},n}function rf(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ua(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ua(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Cu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new e0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=m0.bind(null,e,t,n),t.then(e,e))}function ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Su(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var t0=Ut.ReactCurrentOwner,Ve=!1;function $e(e,t,n,r){t.child=e===null?Id(t,null,n,r):er(t,e.child,n,r)}function Eu(e,t,n,r,i){n=n.render;var o=t.ref;return Kn(t,i),r=as(e,t,n,r,o,i),n=ss(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(ue&&n&&Xa(t),t.flags|=1,$e(e,t,r,i),t.child)}function Nu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ys(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,of(e,t,o,r,i)):(e=Zi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qr,n(a,r)&&e.ref===t.ref)return Dt(e,t,i)}return t.flags|=1,e=rn(o,r),e.ref=t.ref,e.return=t,t.child=e}function of(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Qr(o,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Dt(e,t,i)}return ca(e,t,n,r,i)}function lf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Vn,Ze),Ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(Vn,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,oe(Vn,Ze),Ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,oe(Vn,Ze),Ze|=r;return $e(e,t,i,n),t.child}function af(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ca(e,t,n,r,i){var o=He(n)?Cn:Ie.current;return o=Jn(t,o),Kn(t,i),n=as(e,t,n,r,o,i),r=ss(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(ue&&r&&Xa(t),t.flags|=1,$e(e,t,n,i),t.child)}function Pu(e,t,n,r,i){if(He(n)){var o=!0;co(t)}else o=!1;if(Kn(t,i),t.stateNode===null)Yi(e,t),Rd(t,n,r),sa(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=st(c):(c=He(n)?Cn:Ie.current,c=Jn(t,c));var g=n.getDerivedStateFromProps,v=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";v||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==c)&&vu(t,a,r,c),Wt=!1;var y=t.memoizedState;a.state=y,go(t,r,a,i),u=t.memoizedState,s!==r||y!==u||We.current||Wt?(typeof g=="function"&&(aa(t,n,g,r),u=t.memoizedState),(s=Wt||gu(t,n,s,r,y,u,c))?(v||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,jd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:pt(t.type,s),a.props=c,v=t.pendingProps,y=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=st(u):(u=He(n)?Cn:Ie.current,u=Jn(t,u));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==v||y!==u)&&vu(t,a,r,u),Wt=!1,y=t.memoizedState,a.state=y,go(t,r,a,i);var C=t.memoizedState;s!==v||y!==C||We.current||Wt?(typeof w=="function"&&(aa(t,n,w,r),C=t.memoizedState),(c=Wt||gu(t,n,c,r,y,C,u)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,C,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,C,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),a.props=r,a.state=C,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return da(e,t,n,r,o,i)}function da(e,t,n,r,i,o){af(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&du(t,n,!1),Dt(e,t,o);r=t.stateNode,t0.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=er(t,e.child,null,o),t.child=er(t,null,s,o)):$e(e,t,s,o),t.memoizedState=r.state,i&&du(t,n,!0),t.child}function sf(e){var t=e.stateNode;t.pendingContext?cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cu(e,t.context,!1),rs(e,t.containerInfo)}function _u(e,t,n,r,i){return qn(),Ga(i),t.flags|=256,$e(e,t,n,r),t.child}var fa={dehydrated:null,treeContext:null,retryLane:0};function pa(e){return{baseLanes:e,cachePool:null,transitions:null}}function uf(e,t,n){var r=t.pendingProps,i=ce.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),oe(ce,i&1),e===null)return oa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Uo(a,r,0,null),e=wn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=pa(n),t.memoizedState=fa,e):ds(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return n0(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=rn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=rn(s,o):(o=wn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?pa(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=fa,r}return o=e.child,e=o.sibling,r=rn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ds(e,t){return t=Uo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Li(e,t,n,r){return r!==null&&Ga(r),er(t,e.child,null,n),e=ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function n0(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=yl(Error(_(422))),Li(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Uo({mode:"visible",children:r.children},i,0,null),o=wn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&er(t,e.child,null,a),t.child.memoizedState=pa(a),t.memoizedState=fa,o);if(!(t.mode&1))return Li(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(_(419)),r=yl(o,r,void 0),Li(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ve||s){if(r=Ne,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,bt(e,i),vt(r,e,i,-1))}return vs(),r=yl(Error(_(421))),Li(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=h0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Je=qt(i.nextSibling),qe=t,ue=!0,ht=null,e!==null&&(it[ot++]=Tt,it[ot++]=Rt,it[ot++]=kn,Tt=e.id,Rt=e.overflow,kn=t),t=ds(t,r.children),t.flags|=4096,t)}function Lu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),la(e.return,t,n)}function xl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function cf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if($e(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lu(e,n,t);else if(e.tag===19)Lu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xl(t,!0,n,null,o);break;case"together":xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),En|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function r0(e,t,n){switch(t.tag){case 3:sf(t),qn();break;case 5:$d(t);break;case 1:He(t.type)&&co(t);break;case 4:rs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;oe(mo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?uf(e,t,n):(oe(ce,ce.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);oe(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,lf(e,t,n)}return Dt(e,t,n)}var df,ma,ff,pf;df=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ma=function(){};ff=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,yn(_t.current);var o=null;switch(n){case"input":i=$l(e,i),r=$l(e,r),o=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),o=[];break;case"textarea":i=Ul(e,i),r=Ul(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=so)}Bl(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ur.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ur.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ae("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};pf=function(e,t,n,r){n!==r&&(t.flags|=4)};function wr(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i0(e,t,n){var r=t.pendingProps;switch(Za(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return He(t.type)&&uo(),Te(t),null;case 3:return r=t.stateNode,tr(),se(We),se(Ie),os(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(ka(ht),ht=null))),ma(e,t),Te(t),null;case 5:is(t);var i=yn(Gr.current);if(n=t.type,e!==null&&t.stateNode!=null)ff(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Te(t),null}if(e=yn(_t.current),Pi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Et]=t,r[Xr]=o,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<_r.length;i++)ae(_r[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":bs(r,o),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ae("invalid",r);break;case"textarea":Us(r,o),ae("invalid",r)}Bl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Ni(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Ni(r.textContent,s,e),i=["children",""+s]):Ur.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ae("scroll",r)}switch(n){case"input":vi(r),Ds(r,o,!0);break;case"textarea":vi(r),As(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=so)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Et]=t,e[Xr]=r,df(e,t,!1,!1),t.stateNode=e;e:{switch(a=Fl(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<_r.length;i++)ae(_r[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":bs(e,r),i=$l(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),ae("invalid",e);break;case"textarea":Us(e,r),i=Ul(e,r),ae("invalid",e);break;default:i=r}Bl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Fc(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ac(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ar(e,u):typeof u=="number"&&Ar(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ur.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ae("scroll",e):u!=null&&Ia(e,o,u,a))}switch(n){case"input":vi(e),Ds(e,r,!1);break;case"textarea":vi(e),As(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ln(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Wn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=so)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)pf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=yn(Gr.current),yn(_t.current),Pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Et]=t,(o=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Ni(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ni(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Et]=t,t.stateNode=r}return Te(t),null;case 13:if(se(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&Je!==null&&t.mode&1&&!(t.flags&128))zd(),qn(),t.flags|=98560,o=!1;else if(o=Pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[Et]=t}else qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else ht!==null&&(ka(ht),ht=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?Ce===0&&(Ce=3):vs())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return tr(),ma(e,t),e===null&&Yr(t.stateNode.containerInfo),Te(t),null;case 10:return es(t.type._context),Te(t),null;case 17:return He(t.type)&&uo(),Te(t),null;case 19:if(se(ce),o=t.memoizedState,o===null)return Te(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)wr(o,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=vo(e),a!==null){for(t.flags|=128,wr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(ce,ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&he()>rr&&(t.flags|=128,r=!0,wr(o,!1),t.lanes=4194304)}else{if(!r)if(e=vo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ue)return Te(t),null}else 2*he()-o.renderingStartTime>rr&&n!==1073741824&&(t.flags|=128,r=!0,wr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,n=ce.current,oe(ce,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return gs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ze&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function o0(e,t){switch(Za(t),t.tag){case 1:return He(t.type)&&uo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),se(We),se(Ie),os(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return is(t),null;case 13:if(se(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ce),null;case 4:return tr(),null;case 10:return es(t.type._context),null;case 22:case 23:return gs(),null;case 24:return null;default:return null}}var zi=!1,Oe=!1,l0=typeof WeakSet=="function"?WeakSet:Set,O=null;function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function ha(e,t,n){try{n()}catch(r){me(e,t,r)}}var zu=!1;function a0(e,t){if(Jl=oo,e=gd(),Ka(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,c=0,g=0,v=e,y=null;t:for(;;){for(var w;v!==n||i!==0&&v.nodeType!==3||(s=a+i),v!==o||r!==0&&v.nodeType!==3||(u=a+r),v.nodeType===3&&(a+=v.nodeValue.length),(w=v.firstChild)!==null;)y=v,v=w;for(;;){if(v===e)break t;if(y===n&&++c===i&&(s=a),y===o&&++g===r&&(u=a),(w=v.nextSibling)!==null)break;v=y,y=v.parentNode}v=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ql={focusedElem:e,selectionRange:n},oo=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var x=C.memoizedProps,N=C.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:pt(t.type,x),N);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(k){me(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return C=zu,zu=!1,C}function Or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ha(t,n,o)}i=i.next}while(i!==r)}}function bo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ga(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mf(e){var t=e.alternate;t!==null&&(e.alternate=null,mf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[Xr],delete t[na],delete t[Vp],delete t[Wp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hf(e){return e.tag===5||e.tag===3||e.tag===4}function Mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=so));else if(r!==4&&(e=e.child,e!==null))for(va(e,t,n),e=e.sibling;e!==null;)va(e,t,n),e=e.sibling}function ya(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ya(e,t,n),e=e.sibling;e!==null;)ya(e,t,n),e=e.sibling}var Pe=null,mt=!1;function Bt(e,t,n){for(n=n.child;n!==null;)gf(e,t,n),n=n.sibling}function gf(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(zo,n)}catch{}switch(n.tag){case 5:Oe||Fn(n,t);case 6:var r=Pe,i=mt;Pe=null,Bt(e,t,n),Pe=r,mt=i,Pe!==null&&(mt?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(mt?(e=Pe,n=n.stateNode,e.nodeType===8?fl(e.parentNode,n):e.nodeType===1&&fl(e,n),Wr(e)):fl(Pe,n.stateNode));break;case 4:r=Pe,i=mt,Pe=n.stateNode.containerInfo,mt=!0,Bt(e,t,n),Pe=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ha(n,t,a),i=i.next}while(i!==r)}Bt(e,t,n);break;case 1:if(!Oe&&(Fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){me(n,t,s)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,Bt(e,t,n),Oe=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new l0),t.forEach(function(r){var i=g0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Pe=s.stateNode,mt=!1;break e;case 3:Pe=s.stateNode.containerInfo,mt=!0;break e;case 4:Pe=s.stateNode.containerInfo,mt=!0;break e}s=s.return}if(Pe===null)throw Error(_(160));gf(o,a,i),Pe=null,mt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){me(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vf(t,e),t=t.sibling}function vf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),wt(e),r&4){try{Or(3,e,e.return),bo(3,e)}catch(x){me(e,e.return,x)}try{Or(5,e,e.return)}catch(x){me(e,e.return,x)}}break;case 1:ft(t,e),wt(e),r&512&&n!==null&&Fn(n,n.return);break;case 5:if(ft(t,e),wt(e),r&512&&n!==null&&Fn(n,n.return),e.flags&32){var i=e.stateNode;try{Ar(i,"")}catch(x){me(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&bc(i,o),Fl(s,a);var c=Fl(s,o);for(a=0;a<u.length;a+=2){var g=u[a],v=u[a+1];g==="style"?Fc(i,v):g==="dangerouslySetInnerHTML"?Ac(i,v):g==="children"?Ar(i,v):Ia(i,g,v,c)}switch(s){case"input":bl(i,o);break;case"textarea":Dc(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Wn(i,!!o.multiple,w,!1):y!==!!o.multiple&&(o.defaultValue!=null?Wn(i,!!o.multiple,o.defaultValue,!0):Wn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Xr]=o}catch(x){me(e,e.return,x)}}break;case 6:if(ft(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){me(e,e.return,x)}}break;case 3:if(ft(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wr(t.containerInfo)}catch(x){me(e,e.return,x)}break;case 4:ft(t,e),wt(e);break;case 13:ft(t,e),wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ms=he())),r&4&&ju(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(c=Oe)||g,ft(t,e),Oe=c):ft(t,e),wt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(O=e,g=e.child;g!==null;){for(v=O=g;O!==null;){switch(y=O,w=y.child,y.tag){case 0:case 11:case 14:case 15:Or(4,y,y.return);break;case 1:Fn(y,y.return);var C=y.stateNode;if(typeof C.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(x){me(r,n,x)}}break;case 5:Fn(y,y.return);break;case 22:if(y.memoizedState!==null){Ru(v);continue}}w!==null?(w.return=y,O=w):Ru(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{i=v.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=v.stateNode,u=v.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Bc("display",a))}catch(x){me(e,e.return,x)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(x){me(e,e.return,x)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ft(t,e),wt(e),r&4&&ju(e);break;case 21:break;default:ft(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hf(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ar(i,""),r.flags&=-33);var o=Mu(e);ya(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Mu(e);va(e,s,a);break;default:throw Error(_(161))}}catch(u){me(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function s0(e,t,n){O=e,yf(e)}function yf(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||zi;if(!a){var s=i.alternate,u=s!==null&&s.memoizedState!==null||Oe;s=zi;var c=Oe;if(zi=a,(Oe=u)&&!c)for(O=i;O!==null;)a=O,u=a.child,a.tag===22&&a.memoizedState!==null?Ou(i):u!==null?(u.return=a,O=u):Ou(i);for(;o!==null;)O=o,yf(o),o=o.sibling;O=i,zi=s,Oe=c}Tu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):Tu(e)}}function Tu(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||bo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&hu(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hu(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&Wr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Oe||t.flags&512&&ga(t)}catch(y){me(t,t.return,y)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Ru(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Ou(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bo(4,t)}catch(u){me(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){me(t,i,u)}}var o=t.return;try{ga(t)}catch(u){me(t,o,u)}break;case 5:var a=t.return;try{ga(t)}catch(u){me(t,a,u)}}}catch(u){me(t,t.return,u)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var u0=Math.ceil,wo=Ut.ReactCurrentDispatcher,fs=Ut.ReactCurrentOwner,at=Ut.ReactCurrentBatchConfig,X=0,Ne=null,ve=null,ze=0,Ze=0,Vn=un(0),Ce=0,ti=null,En=0,Do=0,ps=0,Ir=null,Fe=null,ms=0,rr=1/0,Mt=null,Co=!1,xa=null,tn=null,Mi=!1,Kt=null,ko=0,$r=0,wa=null,Ki=-1,Xi=0;function be(){return X&6?he():Ki!==-1?Ki:Ki=he()}function nn(e){return e.mode&1?X&2&&ze!==0?ze&-ze:Qp.transition!==null?(Xi===0&&(Xi=ed()),Xi):(e=re,e!==0||(e=window.event,e=e===void 0?16:ad(e.type)),e):1}function vt(e,t,n,r){if(50<$r)throw $r=0,wa=null,Error(_(185));si(e,n,r),(!(X&2)||e!==Ne)&&(e===Ne&&(!(X&2)&&(Do|=n),Ce===4&&Qt(e,ze)),Qe(e,r),n===1&&X===0&&!(t.mode&1)&&(rr=he()+500,Oo&&cn()))}function Qe(e,t){var n=e.callbackNode;Q1(e,t);var r=io(e,e===Ne?ze:0);if(r===0)n!==null&&Vs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vs(n),t===1)e.tag===0?Hp(Iu.bind(null,e)):Pd(Iu.bind(null,e)),Bp(function(){!(X&6)&&cn()}),n=null;else{switch(td(r)){case 1:n=Aa;break;case 4:n=Jc;break;case 16:n=ro;break;case 536870912:n=qc;break;default:n=ro}n=Pf(n,xf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xf(e,t){if(Ki=-1,Xi=0,X&6)throw Error(_(327));var n=e.callbackNode;if(Xn()&&e.callbackNode!==n)return null;var r=io(e,e===Ne?ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=So(e,r);else{t=r;var i=X;X|=2;var o=Cf();(Ne!==e||ze!==t)&&(Mt=null,rr=he()+500,xn(e,t));do try{f0();break}catch(s){wf(e,s)}while(1);qa(),wo.current=o,X=i,ve!==null?t=0:(Ne=null,ze=0,t=Ce)}if(t!==0){if(t===2&&(i=Yl(e),i!==0&&(r=i,t=Ca(e,i))),t===1)throw n=ti,xn(e,0),Qt(e,r),Qe(e,he()),n;if(t===6)Qt(e,r);else{if(i=e.current.alternate,!(r&30)&&!c0(i)&&(t=So(e,r),t===2&&(o=Yl(e),o!==0&&(r=o,t=Ca(e,o))),t===1))throw n=ti,xn(e,0),Qt(e,r),Qe(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:mn(e,Fe,Mt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=ms+500-he(),10<t)){if(io(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ta(mn.bind(null,e,Fe,Mt),t);break}mn(e,Fe,Mt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-gt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u0(r/1960))-r,10<r){e.timeoutHandle=ta(mn.bind(null,e,Fe,Mt),r);break}mn(e,Fe,Mt);break;case 5:mn(e,Fe,Mt);break;default:throw Error(_(329))}}}return Qe(e,he()),e.callbackNode===n?xf.bind(null,e):null}function Ca(e,t){var n=Ir;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=So(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&ka(t)),e}function ka(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function c0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!xt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~ps,t&=~Do,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function Iu(e){if(X&6)throw Error(_(327));Xn();var t=io(e,0);if(!(t&1))return Qe(e,he()),null;var n=So(e,t);if(e.tag!==0&&n===2){var r=Yl(e);r!==0&&(t=r,n=Ca(e,r))}if(n===1)throw n=ti,xn(e,0),Qt(e,t),Qe(e,he()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,Fe,Mt),Qe(e,he()),null}function hs(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(rr=he()+500,Oo&&cn())}}function Nn(e){Kt!==null&&Kt.tag===0&&!(X&6)&&Xn();var t=X;X|=1;var n=at.transition,r=re;try{if(at.transition=null,re=1,e)return e()}finally{re=r,at.transition=n,X=t,!(X&6)&&cn()}}function gs(){Ze=Vn.current,se(Vn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ap(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(Za(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uo();break;case 3:tr(),se(We),se(Ie),os();break;case 5:is(r);break;case 4:tr();break;case 13:se(ce);break;case 19:se(ce);break;case 10:es(r.type._context);break;case 22:case 23:gs()}n=n.return}if(Ne=e,ve=e=rn(e.current,null),ze=Ze=t,Ce=0,ti=null,ps=Do=En=0,Fe=Ir=null,vn!==null){for(t=0;t<vn.length;t++)if(n=vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}vn=null}return e}function wf(e,t){do{var n=ve;try{if(qa(),Hi.current=xo,yo){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yo=!1}if(Sn=0,Ee=we=de=null,Rr=!1,Jr=0,fs.current=null,n===null||n.return===null){Ce=1,ti=t,ve=null;break}e:{var o=e,a=n.return,s=n,u=t;if(t=ze,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=s,v=g.tag;if(!(g.mode&1)&&(v===0||v===11||v===15)){var y=g.alternate;y?(g.updateQueue=y.updateQueue,g.memoizedState=y.memoizedState,g.lanes=y.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=ku(a);if(w!==null){w.flags&=-257,Su(w,a,s,o,t),w.mode&1&&Cu(o,c,t),t=w,u=c;var C=t.updateQueue;if(C===null){var x=new Set;x.add(u),t.updateQueue=x}else C.add(u);break e}else{if(!(t&1)){Cu(o,c,t),vs();break e}u=Error(_(426))}}else if(ue&&s.mode&1){var N=ku(a);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Su(N,a,s,o,t),Ga(nr(u,s));break e}}o=u=nr(u,s),Ce!==4&&(Ce=2),Ir===null?Ir=[o]:Ir.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=nf(o,u,t);mu(o,f);break e;case 1:s=u;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(tn===null||!tn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=rf(o,s,t);mu(o,k);break e}}o=o.return}while(o!==null)}Sf(n)}catch(E){t=E,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(1)}function Cf(){var e=wo.current;return wo.current=xo,e===null?xo:e}function vs(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Ne===null||!(En&268435455)&&!(Do&268435455)||Qt(Ne,ze)}function So(e,t){var n=X;X|=2;var r=Cf();(Ne!==e||ze!==t)&&(Mt=null,xn(e,t));do try{d0();break}catch(i){wf(e,i)}while(1);if(qa(),X=n,wo.current=r,ve!==null)throw Error(_(261));return Ne=null,ze=0,Ce}function d0(){for(;ve!==null;)kf(ve)}function f0(){for(;ve!==null&&!b1();)kf(ve)}function kf(e){var t=Nf(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Sf(e):ve=t,fs.current=null}function Sf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=o0(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,ve=null;return}}else if(n=i0(n,t,Ze),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);Ce===0&&(Ce=5)}function mn(e,t,n){var r=re,i=at.transition;try{at.transition=null,re=1,p0(e,t,n,r)}finally{at.transition=i,re=r}return null}function p0(e,t,n,r){do Xn();while(Kt!==null);if(X&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Y1(e,o),e===Ne&&(ve=Ne=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mi||(Mi=!0,Pf(ro,function(){return Xn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=at.transition,at.transition=null;var a=re;re=1;var s=X;X|=4,fs.current=null,a0(e,n),vf(n,e),Rp(ql),oo=!!Jl,ql=Jl=null,e.current=n,s0(n),D1(),X=s,re=a,at.transition=o}else e.current=n;if(Mi&&(Mi=!1,Kt=e,ko=i),o=e.pendingLanes,o===0&&(tn=null),B1(n.stateNode),Qe(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Co)throw Co=!1,e=xa,xa=null,e;return ko&1&&e.tag!==0&&Xn(),o=e.pendingLanes,o&1?e===wa?$r++:($r=0,wa=e):$r=0,cn(),null}function Xn(){if(Kt!==null){var e=td(ko),t=at.transition,n=re;try{if(at.transition=null,re=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,ko=0,X&6)throw Error(_(331));var i=X;for(X|=4,O=e.current;O!==null;){var o=O,a=o.child;if(O.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(O=c;O!==null;){var g=O;switch(g.tag){case 0:case 11:case 15:Or(8,g,o)}var v=g.child;if(v!==null)v.return=g,O=v;else for(;O!==null;){g=O;var y=g.sibling,w=g.return;if(mf(g),g===c){O=null;break}if(y!==null){y.return=w,O=y;break}O=w}}}var C=o.alternate;if(C!==null){var x=C.child;if(x!==null){C.child=null;do{var N=x.sibling;x.sibling=null,x=N}while(x!==null)}}O=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,O=a;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Or(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,O=f;break e}O=o.return}}var d=e.current;for(O=d;O!==null;){a=O;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,O=h;else e:for(a=d;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:bo(9,s)}}catch(E){me(s,s.return,E)}if(s===a){O=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,O=k;break e}O=s.return}}if(X=i,cn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(zo,e)}catch{}r=!0}return r}finally{re=n,at.transition=t}}return!1}function $u(e,t,n){t=nr(n,t),t=nf(e,t,1),e=en(e,t,1),t=be(),e!==null&&(si(e,1,t),Qe(e,t))}function me(e,t,n){if(e.tag===3)$u(e,e,n);else for(;t!==null;){if(t.tag===3){$u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=nr(n,e),e=rf(t,e,1),t=en(t,e,1),e=be(),t!==null&&(si(t,1,e),Qe(t,e));break}}t=t.return}}function m0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(ze&n)===n&&(Ce===4||Ce===3&&(ze&130023424)===ze&&500>he()-ms?xn(e,0):ps|=n),Qe(e,t)}function Ef(e,t){t===0&&(e.mode&1?(t=wi,wi<<=1,!(wi&130023424)&&(wi=4194304)):t=1);var n=be();e=bt(e,t),e!==null&&(si(e,t,n),Qe(e,n))}function h0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ef(e,n)}function g0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Ef(e,n)}var Nf;Nf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,r0(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,ue&&t.flags&1048576&&_d(t,po,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Yi(e,t),e=t.pendingProps;var i=Jn(t,Ie.current);Kn(t,n),i=as(null,t,r,e,i,n);var o=ss();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(o=!0,co(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ns(t),i.updater=Io,t.stateNode=i,i._reactInternals=t,sa(t,r,e,n),t=da(null,t,r,!0,o,n)):(t.tag=0,ue&&o&&Xa(t),$e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Yi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=y0(r),e=pt(r,e),i){case 0:t=ca(null,t,r,e,n);break e;case 1:t=Pu(null,t,r,e,n);break e;case 11:t=Eu(null,t,r,e,n);break e;case 14:t=Nu(null,t,r,pt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),ca(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Pu(e,t,r,i,n);case 3:e:{if(sf(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,jd(e,t),go(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=nr(Error(_(423)),t),t=_u(e,t,r,n,i);break e}else if(r!==i){i=nr(Error(_(424)),t),t=_u(e,t,r,n,i);break e}else for(Je=qt(t.stateNode.containerInfo.firstChild),qe=t,ue=!0,ht=null,n=Id(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qn(),r===i){t=Dt(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return $d(t),e===null&&oa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ea(r,i)?a=null:o!==null&&ea(r,o)&&(t.flags|=32),af(e,t),$e(e,t,a,n),t.child;case 6:return e===null&&oa(t),null;case 13:return uf(e,t,n);case 4:return rs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=er(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Eu(e,t,r,i,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,oe(mo,r._currentValue),r._currentValue=a,o!==null)if(xt(o.value,a)){if(o.children===i.children&&!We.current){t=Dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Ot(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),la(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(_(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),la(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}$e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Kn(t,n),i=st(i),r=r(i),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,i=pt(r,t.pendingProps),i=pt(r.type,i),Nu(e,t,r,i,n);case 15:return of(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Yi(e,t),t.tag=1,He(r)?(e=!0,co(t)):e=!1,Kn(t,n),Rd(t,r,i),sa(t,r,i,n),da(null,t,r,!0,e,n);case 19:return cf(e,t,n);case 22:return lf(e,t,n)}throw Error(_(156,t.tag))};function Pf(e,t){return Gc(e,t)}function v0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,r){return new v0(e,t,n,r)}function ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function y0(e){if(typeof e=="function")return ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ba)return 11;if(e===Da)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zi(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")ys(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Rn:return wn(n.children,i,o,t);case $a:a=8,i|=8;break;case Tl:return e=lt(12,n,t,i|2),e.elementType=Tl,e.lanes=o,e;case Rl:return e=lt(13,n,t,i),e.elementType=Rl,e.lanes=o,e;case Ol:return e=lt(19,n,t,i),e.elementType=Ol,e.lanes=o,e;case Oc:return Uo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tc:a=10;break e;case Rc:a=9;break e;case ba:a=11;break e;case Da:a=14;break e;case Vt:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=lt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function wn(e,t,n,r){return e=lt(7,e,r,t),e.lanes=n,e}function Uo(e,t,n,r){return e=lt(22,e,r,t),e.elementType=Oc,e.lanes=n,e.stateNode={isHidden:!1},e}function wl(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function Cl(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function x0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tl(0),this.expirationTimes=tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xs(e,t,n,r,i,o,a,s,u){return e=new x0(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=lt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ns(o),e}function w0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _f(e){if(!e)return an;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(He(n))return Nd(e,n,t)}return t}function Lf(e,t,n,r,i,o,a,s,u){return e=xs(n,r,!0,e,i,o,a,s,u),e.context=_f(null),n=e.current,r=be(),i=nn(n),o=Ot(r,i),o.callback=t??null,en(n,o,i),e.current.lanes=i,si(e,i,r),Qe(e,r),e}function Ao(e,t,n,r){var i=t.current,o=be(),a=nn(i);return n=_f(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(i,t,a),e!==null&&(vt(e,i,a,o),Wi(e,i,a)),a}function Eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ws(e,t){bu(e,t),(e=e.alternate)&&bu(e,t)}function C0(){return null}var zf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cs(e){this._internalRoot=e}Bo.prototype.render=Cs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Ao(e,t,null,null)};Bo.prototype.unmount=Cs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nn(function(){Ao(null,e,null,null)}),t[$t]=null}};function Bo(e){this._internalRoot=e}Bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=id();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ht.length&&t!==0&&t<Ht[n].priority;n++);Ht.splice(n,0,e),n===0&&ld(e)}};function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Du(){}function k0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Eo(a);o.call(c)}}var a=Lf(t,r,e,0,null,!1,!1,"",Du);return e._reactRootContainer=a,e[$t]=a.current,Yr(e.nodeType===8?e.parentNode:e),Nn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Eo(u);s.call(c)}}var u=xs(e,0,!1,null,null,!1,!1,"",Du);return e._reactRootContainer=u,e[$t]=u.current,Yr(e.nodeType===8?e.parentNode:e),Nn(function(){Ao(t,u,n,r)}),u}function Vo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var u=Eo(a);s.call(u)}}Ao(t,a,e,i)}else a=k0(n,t,e,i,r);return Eo(a)}nd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pr(t.pendingLanes);n!==0&&(Ba(t,n|1),Qe(t,he()),!(X&6)&&(rr=he()+500,cn()))}break;case 13:Nn(function(){var r=bt(e,1);if(r!==null){var i=be();vt(r,e,1,i)}}),ws(e,1)}};Fa=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=be();vt(t,e,134217728,n)}ws(e,134217728)}};rd=function(e){if(e.tag===13){var t=nn(e),n=bt(e,t);if(n!==null){var r=be();vt(n,e,t,r)}ws(e,t)}};id=function(){return re};od=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};Wl=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ro(r);if(!i)throw Error(_(90));$c(r),bl(r,i)}}}break;case"textarea":Dc(e,n);break;case"select":t=n.value,t!=null&&Wn(e,!!n.multiple,t,!1)}};Hc=hs;Qc=Nn;var S0={usingClientEntryPoint:!1,Events:[ci,bn,Ro,Vc,Wc,hs]},Cr={findFiberByHostInstance:gn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},E0={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xc(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||C0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ji.isDisabled&&ji.supportsFiber)try{zo=ji.inject(E0),Pt=ji}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S0;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ks(t))throw Error(_(200));return w0(e,t,null,n)};nt.createRoot=function(e,t){if(!ks(e))throw Error(_(299));var n=!1,r="",i=zf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xs(e,1,!1,null,null,n,!1,r,i),e[$t]=t.current,Yr(e.nodeType===8?e.parentNode:e),new Cs(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Xc(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return Nn(e)};nt.hydrate=function(e,t,n){if(!Fo(t))throw Error(_(200));return Vo(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!ks(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=zf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Lf(t,null,e,1,n??null,i,!1,o,a),e[$t]=t.current,Yr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bo(t)};nt.render=function(e,t,n){if(!Fo(t))throw Error(_(200));return Vo(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(_(40));return e._reactRootContainer?(Nn(function(){Vo(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};nt.unstable_batchedUpdates=hs;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fo(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Vo(e,t,n,!1,r)};nt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=nt})(C1);var Mf,Uu=zl;Mf=Uu.createRoot,Uu.hydrateRoot;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ni.apply(this,arguments)}var Xt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xt||(Xt={}));const Au="popstate";function N0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return Sa("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:No(i)}return _0(t,n,null,e)}function ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ss(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function P0(){return Math.random().toString(36).substr(2,8)}function Bu(e,t){return{usr:e.state,key:e.key,idx:t}}function Sa(e,t,n,r){return n===void 0&&(n=null),ni({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?sr(t):t,{state:n,key:t&&t.key||r||P0()})}function No(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function sr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function _0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=Xt.Pop,u=null,c=g();c==null&&(c=0,a.replaceState(ni({},a.state,{idx:c}),""));function g(){return(a.state||{idx:null}).idx}function v(){s=Xt.Pop;let N=g(),f=N==null?null:N-c;c=N,u&&u({action:s,location:x.location,delta:f})}function y(N,f){s=Xt.Push;let d=Sa(x.location,N,f);n&&n(d,N),c=g()+1;let h=Bu(d,c),k=x.createHref(d);try{a.pushState(h,"",k)}catch{i.location.assign(k)}o&&u&&u({action:s,location:x.location,delta:1})}function w(N,f){s=Xt.Replace;let d=Sa(x.location,N,f);n&&n(d,N),c=g();let h=Bu(d,c),k=x.createHref(d);a.replaceState(h,"",k),o&&u&&u({action:s,location:x.location,delta:0})}function C(N){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof N=="string"?N:No(N);return ye(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let x={get action(){return s},get location(){return e(i,a)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Au,v),u=N,()=>{i.removeEventListener(Au,v),u=null}},createHref(N){return t(i,N)},createURL:C,encodeLocation(N){let f=C(N);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:y,replace:w,go(N){return a.go(N)}};return x}var Fu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fu||(Fu={}));function L0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?sr(t):t,i=Es(r.pathname||"/",n);if(i==null)return null;let o=jf(e);z0(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=D0(o[s],B0(i));return a}function jf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};u.relativePath.startsWith("/")&&(ye(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=on([r,u.relativePath]),g=n.concat(u);o.children&&o.children.length>0&&(ye(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),jf(o.children,t,g,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:$0(c,o.index),routesMeta:g})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let u of Tf(o.path))i(o,a,u)}),t}function Tf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Tf(r.join("/")),s=[];return s.push(...a.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...a),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function z0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:b0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const M0=/^:\w+$/,j0=3,T0=2,R0=1,O0=10,I0=-2,Vu=e=>e==="*";function $0(e,t){let n=e.split("/"),r=n.length;return n.some(Vu)&&(r+=I0),t&&(r+=T0),n.filter(i=>!Vu(i)).reduce((i,o)=>i+(M0.test(o)?j0:o===""?R0:O0),r)}function b0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function D0(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],u=a===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",g=U0({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!g)return null;Object.assign(r,g.params);let v=s.route;o.push({params:r,pathname:on([i,g.pathname]),pathnameBase:H0(on([i,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(i=on([i,g.pathnameBase]))}return o}function U0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=A0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,g,v)=>{if(g==="*"){let y=s[v]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}return c[g]=F0(s[v]||"",g),c},{}),pathname:o,pathnameBase:a,pattern:e}}function A0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ss(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function B0(e){try{return decodeURI(e)}catch(t){return Ss(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function F0(e,t){try{return decodeURIComponent(e)}catch(n){return Ss(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Es(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function V0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?sr(e):e;return{pathname:n?n.startsWith("/")?n:W0(n,t):t,search:Q0(r),hash:Y0(i)}}function W0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function kl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Of(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=sr(e):(i=ni({},e),ye(!i.pathname||!i.pathname.includes("?"),kl("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),kl("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),kl("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let v=t.length-1;if(a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),v-=1;i.pathname=y.join("/")}s=v>=0?t[v]:"/"}let u=V0(i,s),c=a&&a!=="/"&&a.endsWith("/"),g=(o||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}const on=e=>e.join("/").replace(/\/\/+/g,"/"),H0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Q0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Y0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function K0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Po.apply(this,arguments)}const If=$.createContext(null),X0=$.createContext(null),ur=$.createContext(null),Wo=$.createContext(null),Ln=$.createContext({outlet:null,matches:[],isDataRoute:!1}),$f=$.createContext(null);function Z0(e,t){let{relative:n}=t===void 0?{}:t;fi()||ye(!1);let{basename:r,navigator:i}=$.useContext(ur),{hash:o,pathname:a,search:s}=Df(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:on([r,a])),i.createHref({pathname:u,search:s,hash:o})}function fi(){return $.useContext(Wo)!=null}function Ho(){return fi()||ye(!1),$.useContext(Wo).location}function bf(e){$.useContext(ur).static||$.useLayoutEffect(e)}function cr(){let{isDataRoute:e}=$.useContext(Ln);return e?um():G0()}function G0(){fi()||ye(!1);let{basename:e,navigator:t}=$.useContext(ur),{matches:n}=$.useContext(Ln),{pathname:r}=Ho(),i=JSON.stringify(Rf(n).map(s=>s.pathnameBase)),o=$.useRef(!1);return bf(()=>{o.current=!0}),$.useCallback(function(s,u){if(u===void 0&&(u={}),!o.current)return;if(typeof s=="number"){t.go(s);return}let c=Of(s,JSON.parse(i),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:on([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,i,r])}function Df(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=$.useContext(Ln),{pathname:i}=Ho(),o=JSON.stringify(Rf(r).map(a=>a.pathnameBase));return $.useMemo(()=>Of(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function J0(e,t){return q0(e,t)}function q0(e,t,n){fi()||ye(!1);let{navigator:r}=$.useContext(ur),{matches:i}=$.useContext(Ln),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=Ho(),c;if(t){var g;let x=typeof t=="string"?sr(t):t;s==="/"||(g=x.pathname)!=null&&g.startsWith(s)||ye(!1),c=x}else c=u;let v=c.pathname||"/",y=s==="/"?v:v.slice(s.length)||"/",w=L0(e,{pathname:y}),C=im(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:on([s,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?s:on([s,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&C?$.createElement(Wo.Provider,{value:{location:Po({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Xt.Pop}},C):C}function em(){let e=sm(),t=K0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},t),n?$.createElement("pre",{style:i},n):null,o)}const tm=$.createElement(em,null);class nm extends $.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?$.createElement(Ln.Provider,{value:this.props.routeContext},$.createElement($f.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rm(e){let{routeContext:t,match:n,children:r}=e,i=$.useContext(If);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(Ln.Provider,{value:t},r)}function im(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let s=o.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id]));s>=0||ye(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,u,c)=>{let g=u.route.id?a==null?void 0:a[u.route.id]:null,v=null;n&&(v=u.route.errorElement||tm);let y=t.concat(o.slice(0,c+1)),w=()=>{let C;return g?C=v:u.route.Component?C=$.createElement(u.route.Component,null):u.route.element?C=u.route.element:C=s,$.createElement(rm,{match:u,routeContext:{outlet:s,matches:y,isDataRoute:n!=null},children:C})};return n&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?$.createElement(nm,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:w(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):w()},null)}var Ea;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Ea||(Ea={}));var ri;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ri||(ri={}));function om(e){let t=$.useContext(If);return t||ye(!1),t}function lm(e){let t=$.useContext(X0);return t||ye(!1),t}function am(e){let t=$.useContext(Ln);return t||ye(!1),t}function Uf(e){let t=am(),n=t.matches[t.matches.length-1];return n.route.id||ye(!1),n.route.id}function sm(){var e;let t=$.useContext($f),n=lm(ri.UseRouteError),r=Uf(ri.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function um(){let{router:e}=om(Ea.UseNavigateStable),t=Uf(ri.UseNavigateStable),n=$.useRef(!1);return bf(()=>{n.current=!0}),$.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Po({fromRouteId:t},o)))},[e,t])}function hn(e){ye(!1)}function cm(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xt.Pop,navigator:o,static:a=!1}=e;fi()&&ye(!1);let s=t.replace(/^\/*/,"/"),u=$.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=sr(r));let{pathname:c="/",search:g="",hash:v="",state:y=null,key:w="default"}=r,C=$.useMemo(()=>{let x=Es(c,s);return x==null?null:{location:{pathname:x,search:g,hash:v,state:y,key:w},navigationType:i}},[s,c,g,v,y,w,i]);return C==null?null:$.createElement(ur.Provider,{value:u},$.createElement(Wo.Provider,{children:n,value:C}))}function dm(e){let{children:t,location:n}=e;return J0(Na(t),n)}var Wu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Wu||(Wu={}));new Promise(()=>{});function Na(e,t){t===void 0&&(t=[]);let n=[];return $.Children.forEach(e,(r,i)=>{if(!$.isValidElement(r))return;let o=[...t,i];if(r.type===$.Fragment){n.push.apply(n,Na(r.props.children,o));return}r.type!==hn&&ye(!1),!r.props.index||!r.props.children||ye(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Na(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pa.apply(this,arguments)}function fm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function pm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mm(e,t){return e.button===0&&(!t||t==="_self")&&!pm(e)}const hm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function gm(e){let{basename:t,children:n,window:r}=e,i=$.useRef();i.current==null&&(i.current=N0({window:r,v5Compat:!0}));let o=i.current,[a,s]=$.useState({action:o.action,location:o.location});return $.useLayoutEffect(()=>o.listen(s),[o]),$.createElement(cm,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const vm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ym=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Le=$.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:u,to:c,preventScrollReset:g}=t,v=fm(t,hm),{basename:y}=$.useContext(ur),w,C=!1;if(typeof c=="string"&&ym.test(c)&&(w=c,vm))try{let d=new URL(window.location.href),h=c.startsWith("//")?new URL(d.protocol+c):new URL(c),k=Es(h.pathname,y);h.origin===d.origin&&k!=null?c=k+h.search+h.hash:C=!0}catch{}let x=Z0(c,{relative:i}),N=xm(c,{replace:a,state:s,target:u,preventScrollReset:g,relative:i});function f(d){r&&r(d),d.defaultPrevented||N(d)}return $.createElement("a",Pa({},v,{href:w||x,onClick:C||o?r:f,ref:n,target:u}))});var Hu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Hu||(Hu={}));var Qu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Qu||(Qu={}));function xm(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,s=cr(),u=Ho(),c=Df(e,{relative:a});return $.useCallback(g=>{if(mm(g,n)){g.preventDefault();let v=r!==void 0?r:No(u)===No(c);s(e,{replace:v,state:i,preventScrollReset:o,relative:a})}},[u,s,c,r,i,n,e,o,a])}function wm(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Cm(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var km=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Cm(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=wm(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Re="-ms-",_o="-moz-",ee="-webkit-",Af="comm",Ns="rule",Ps="decl",Sm="@import",Bf="@keyframes",Em=Math.abs,Qo=String.fromCharCode,Nm=Object.assign;function Pm(e,t){return _e(e,0)^45?(((t<<2^_e(e,0))<<2^_e(e,1))<<2^_e(e,2))<<2^_e(e,3):0}function Ff(e){return e.trim()}function _m(e,t){return(e=t.exec(e))?e[0]:e}function te(e,t,n){return e.replace(t,n)}function _a(e,t){return e.indexOf(t)}function _e(e,t){return e.charCodeAt(t)|0}function ii(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function _s(e){return e.length}function Ti(e,t){return t.push(e),e}function Lm(e,t){return e.map(t).join("")}var Yo=1,ir=1,Vf=0,Ye=0,ge=0,dr="";function Ko(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Yo,column:ir,length:a,return:""}}function kr(e,t){return Nm(Ko("",null,null,"",null,null,0),e,{length:-e.length},t)}function zm(){return ge}function Mm(){return ge=Ye>0?_e(dr,--Ye):0,ir--,ge===10&&(ir=1,Yo--),ge}function et(){return ge=Ye<Vf?_e(dr,Ye++):0,ir++,ge===10&&(ir=1,Yo++),ge}function Lt(){return _e(dr,Ye)}function Gi(){return Ye}function pi(e,t){return ii(dr,e,t)}function oi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wf(e){return Yo=ir=1,Vf=kt(dr=e),Ye=0,[]}function Hf(e){return dr="",e}function Ji(e){return Ff(pi(Ye-1,La(e===91?e+2:e===40?e+1:e)))}function jm(e){for(;(ge=Lt())&&ge<33;)et();return oi(e)>2||oi(ge)>3?"":" "}function Tm(e,t){for(;--t&&et()&&!(ge<48||ge>102||ge>57&&ge<65||ge>70&&ge<97););return pi(e,Gi()+(t<6&&Lt()==32&&et()==32))}function La(e){for(;et();)switch(ge){case e:return Ye;case 34:case 39:e!==34&&e!==39&&La(ge);break;case 40:e===41&&La(e);break;case 92:et();break}return Ye}function Rm(e,t){for(;et()&&e+ge!==47+10;)if(e+ge===42+42&&Lt()===47)break;return"/*"+pi(t,Ye-1)+"*"+Qo(e===47?e:et())}function Om(e){for(;!oi(Lt());)et();return pi(e,Ye)}function Im(e){return Hf(qi("",null,null,null,[""],e=Wf(e),0,[0],e))}function qi(e,t,n,r,i,o,a,s,u){for(var c=0,g=0,v=a,y=0,w=0,C=0,x=1,N=1,f=1,d=0,h="",k=i,E=o,P=r,S=h;N;)switch(C=d,d=et()){case 40:if(C!=108&&_e(S,v-1)==58){_a(S+=te(Ji(d),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:S+=Ji(d);break;case 9:case 10:case 13:case 32:S+=jm(C);break;case 92:S+=Tm(Gi()-1,7);continue;case 47:switch(Lt()){case 42:case 47:Ti($m(Rm(et(),Gi()),t,n),u);break;default:S+="/"}break;case 123*x:s[c++]=kt(S)*f;case 125*x:case 59:case 0:switch(d){case 0:case 125:N=0;case 59+g:w>0&&kt(S)-v&&Ti(w>32?Ku(S+";",r,n,v-1):Ku(te(S," ","")+";",r,n,v-2),u);break;case 59:S+=";";default:if(Ti(P=Yu(S,t,n,c,g,i,s,h,k=[],E=[],v),o),d===123)if(g===0)qi(S,t,P,P,k,o,v,s,E);else switch(y===99&&_e(S,3)===110?100:y){case 100:case 109:case 115:qi(e,P,P,r&&Ti(Yu(e,P,P,0,0,i,s,h,i,k=[],v),E),i,E,v,s,r?k:E);break;default:qi(S,P,P,P,[""],E,0,s,E)}}c=g=w=0,x=f=1,h=S="",v=a;break;case 58:v=1+kt(S),w=C;default:if(x<1){if(d==123)--x;else if(d==125&&x++==0&&Mm()==125)continue}switch(S+=Qo(d),d*x){case 38:f=g>0?1:(S+="\f",-1);break;case 44:s[c++]=(kt(S)-1)*f,f=1;break;case 64:Lt()===45&&(S+=Ji(et())),y=Lt(),g=v=kt(h=S+=Om(Gi())),d++;break;case 45:C===45&&kt(S)==2&&(x=0)}}return o}function Yu(e,t,n,r,i,o,a,s,u,c,g){for(var v=i-1,y=i===0?o:[""],w=_s(y),C=0,x=0,N=0;C<r;++C)for(var f=0,d=ii(e,v+1,v=Em(x=a[C])),h=e;f<w;++f)(h=Ff(x>0?y[f]+" "+d:te(d,/&\f/g,y[f])))&&(u[N++]=h);return Ko(e,t,n,i===0?Ns:s,u,c,g)}function $m(e,t,n){return Ko(e,t,n,Af,Qo(zm()),ii(e,2,-2),0)}function Ku(e,t,n,r){return Ko(e,t,n,Ps,ii(e,0,r),ii(e,r+1,-1),r)}function Zn(e,t){for(var n="",r=_s(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function bm(e,t,n,r){switch(e.type){case Sm:case Ps:return e.return=e.return||e.value;case Af:return"";case Bf:return e.return=e.value+"{"+Zn(e.children,r)+"}";case Ns:e.value=e.props.join(",")}return kt(n=Zn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Dm(e){var t=_s(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function Um(e){return function(t){t.root||(t=t.return)&&e(t)}}function Am(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Bm=function(t,n,r){for(var i=0,o=0;i=o,o=Lt(),i===38&&o===12&&(n[r]=1),!oi(o);)et();return pi(t,Ye)},Fm=function(t,n){var r=-1,i=44;do switch(oi(i)){case 0:i===38&&Lt()===12&&(n[r]=1),t[r]+=Bm(Ye-1,n,r);break;case 2:t[r]+=Ji(i);break;case 4:if(i===44){t[++r]=Lt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Qo(i)}while(i=et());return t},Vm=function(t,n){return Hf(Fm(Wf(t),n))},Xu=new WeakMap,Wm=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Xu.get(r))&&!i){Xu.set(t,!0);for(var o=[],a=Vm(n,o),s=r.props,u=0,c=0;u<a.length;u++)for(var g=0;g<s.length;g++,c++)t.props[c]=o[u]?a[u].replace(/&\f/g,s[g]):s[g]+" "+a[u]}}},Hm=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Qf(e,t){switch(Pm(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+_o+e+Re+e+e;case 6828:case 4268:return ee+e+Re+e+e;case 6165:return ee+e+Re+"flex-"+e+e;case 5187:return ee+e+te(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+Re+"flex-$1$2")+e;case 5443:return ee+e+Re+"flex-item-"+te(e,/flex-|-self/,"")+e;case 4675:return ee+e+Re+"flex-line-pack"+te(e,/align-content|flex-|-self/,"")+e;case 5548:return ee+e+Re+te(e,"shrink","negative")+e;case 5292:return ee+e+Re+te(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+te(e,"-grow","")+ee+e+Re+te(e,"grow","positive")+e;case 4554:return ee+te(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return te(te(te(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return te(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return te(te(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4095:case 3583:case 4068:case 2532:return te(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch(_e(e,t+1)){case 109:if(_e(e,t+4)!==45)break;case 102:return te(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+_o+(_e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~_a(e,"stretch")?Qf(te(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(_e(e,t+1)!==115)break;case 6444:switch(_e(e,kt(e)-3-(~_a(e,"!important")&&10))){case 107:return te(e,":",":"+ee)+e;case 101:return te(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ee+(_e(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+Re+"$2box$3")+e}break;case 5936:switch(_e(e,t+11)){case 114:return ee+e+Re+te(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+Re+te(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+Re+te(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ee+e+Re+e+e}return e}var Qm=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Ps:t.return=Qf(t.value,t.length);break;case Bf:return Zn([kr(t,{value:te(t.value,"@","@"+ee)})],i);case Ns:if(t.length)return Lm(t.props,function(o){switch(_m(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Zn([kr(t,{props:[te(o,/:(read-\w+)/,":"+_o+"$1")]})],i);case"::placeholder":return Zn([kr(t,{props:[te(o,/:(plac\w+)/,":"+ee+"input-$1")]}),kr(t,{props:[te(o,/:(plac\w+)/,":"+_o+"$1")]}),kr(t,{props:[te(o,/:(plac\w+)/,Re+"input-$1")]})],i)}return""})}},Ym=[Qm],Km=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(x){var N=x.getAttribute("data-emotion");N.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var i=t.stylisPlugins||Ym,o={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var N=x.getAttribute("data-emotion").split(" "),f=1;f<N.length;f++)o[N[f]]=!0;s.push(x)});var u,c=[Wm,Hm];{var g,v=[bm,Um(function(x){g.insert(x)})],y=Dm(c.concat(i,v)),w=function(N){return Zn(Im(N),y)};u=function(N,f,d,h){g=d,w(N?N+"{"+f.styles+"}":f.styles),h&&(C.inserted[f.name]=!0)}}var C={key:n,sheet:new km({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:u};return C.sheet.hydrate(s),C};function Xm(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Zm={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gm=/[A-Z]|^ms/g,Jm=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Yf=function(t){return t.charCodeAt(1)===45},Zu=function(t){return t!=null&&typeof t!="boolean"},Sl=Am(function(e){return Yf(e)?e:e.replace(Gm,"-$&").toLowerCase()}),Gu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Jm,function(r,i,o){return St={name:i,styles:o,next:St},i})}return Zm[t]!==1&&!Yf(t)&&typeof n=="number"&&n!==0?n+"px":n};function li(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return St={name:n.name,styles:n.styles,next:St},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)St={name:r.name,styles:r.styles,next:St},r=r.next;var i=n.styles+";";return i}return qm(e,t,n)}case"function":{if(e!==void 0){var o=St,a=n(e);return St=o,li(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function qm(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=li(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":Zu(a)&&(r+=Sl(o)+":"+Gu(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Zu(a[s])&&(r+=Sl(o)+":"+Gu(o,a[s])+";");else{var u=li(e,t,a);switch(o){case"animation":case"animationName":{r+=Sl(o)+":"+u+";";break}default:r+=o+"{"+u+"}"}}}return r}var Ju=/label:\s*([^\s;\n{]+)\s*(;|$)/g,St,El=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";St=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=li(r,n,a)):o+=a[0];for(var s=1;s<t.length;s++)o+=li(r,n,t[s]),i&&(o+=a[s]);Ju.lastIndex=0;for(var u="",c;(c=Ju.exec(o))!==null;)u+="-"+c[1];var g=Xm(o)+u;return{name:g,styles:o,next:St}},eh=!0;function Kf(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var th=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||eh===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},nh=function(t,n,r){th(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function qu(e,t){if(e.inserted[t.name]===void 0)return e.insert("",t,e.sheet,!0)}function ec(e,t,n){var r=[],i=Kf(e,r,n);return r.length<2?n:i+t(r)}var rh=function(t){var n=Km(t);n.sheet.speedy=function(s){this.isSpeedy=s},n.compat=!0;var r=function(){for(var u=arguments.length,c=new Array(u),g=0;g<u;g++)c[g]=arguments[g];var v=El(c,n.registered,void 0);return nh(n,v,!1),n.key+"-"+v.name},i=function(){for(var u=arguments.length,c=new Array(u),g=0;g<u;g++)c[g]=arguments[g];var v=El(c,n.registered),y="animation-"+v.name;return qu(n,{name:v.name,styles:"@keyframes "+y+"{"+v.styles+"}"}),y},o=function(){for(var u=arguments.length,c=new Array(u),g=0;g<u;g++)c[g]=arguments[g];var v=El(c,n.registered);qu(n,v)},a=function(){for(var u=arguments.length,c=new Array(u),g=0;g<u;g++)c[g]=arguments[g];return ec(n.registered,r,ih(c))};return{css:r,cx:a,injectGlobal:o,keyframes:i,hydrate:function(u){u.forEach(function(c){n.inserted[c]=!0})},flush:function(){n.registered={},n.inserted={},n.sheet.flush()},sheet:n.sheet,cache:n,getRegisteredStyles:Kf.bind(null,n.registered),merge:ec.bind(null,n.registered,r)}},ih=function e(t){for(var n="",r=0;r<t.length;r++){var i=t[r];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=e(i);else{o="";for(var a in i)i[a]&&a&&(o&&(o+=" "),o+=a)}break}default:o=i}o&&(n&&(n+=" "),n+=o)}}return n},Ls=rh({key:"css"}),yt=Ls.cx,oh=Ls.injectGlobal,p=Ls.css;const lh=p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #212429;
  border-radius: 48px;
  width: 152px;
  height: 48px;

`,le=e=>{const{children:t,className:n,route:r,disabled:i,type:o}=e,a=cr();function s(){r&&a(`${r}`)}return l("button",{disabled:i,type:o,onClick:s,className:yt(lh,n),children:t})},ah=p`
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
`,sh=p`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }
`,uh=p`
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
`,ch=p`
  color: #ef3c3c;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;

  @media (min-width: 1024px) {
    align-self: flex-end;
  }
`,dh=p`
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
`,fh=p`
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
`,ph=p`
  width: 100%;
`,mh=p`
  fill: #212429;
`,hh=p`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-grow: 1;
  border-radius: 12px;
`,gh=p`
  text-decoration: line-through;
  opacity: 0.6;
`,q=e=>{const{onClick:t,className:n,imageUrl:r,alt:i="image",name:o,price:a,offer:s,sizes:u,colors:c,showIcon:g=!0}=e,[v,y]=ct.useState(!1),w=()=>{y(!v)};return m("div",{className:yt(ah,n),children:[g&&l("div",{onClick:w,className:fh,children:l("svg",{className:yt(ph,{[mh]:v}),width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M13.8933 2.07333C13.5528 1.73267 13.1485 1.46243 12.7036 1.27805C12.2586 1.09368 11.7817 0.998779 11.3 0.998779C10.8183 0.998779 10.3414 1.09368 9.89643 1.27805C9.45146 1.46243 9.04717 1.73267 8.70667 2.07333L8 2.78L7.29333 2.07333C6.60554 1.38553 5.67269 0.999136 4.7 0.999136C3.72731 0.999136 2.79446 1.38553 2.10666 2.07333C1.41887 2.76112 1.03247 3.69397 1.03247 4.66666C1.03247 5.63935 1.41887 6.5722 2.10666 7.26L2.81333 7.96666L8 13.1533L13.1867 7.96666L13.8933 7.26C14.234 6.91949 14.5042 6.51521 14.6886 6.07023C14.873 5.62526 14.9679 5.14832 14.9679 4.66666C14.9679 4.185 14.873 3.70807 14.6886 3.26309C14.5042 2.81812 14.234 2.41383 13.8933 2.07333V2.07333Z",stroke:"#212429",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),l("img",{onClick:t,className:hh,src:r,alt:i}),m("div",{className:sh,children:[m("div",{className:uh,children:[o&&l("div",{children:o}),a&&l("div",{className:yt({[gh]:!!s}),children:a})]}),s&&l("div",{className:ch,children:s}),m("div",{className:dh,children:[u&&m("div",{children:[" ",u]}),c&&m("div",{children:[" ",c," "]})]})]})]})},vh=p`
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
`,yh=p`

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #000000;
`,xh=p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
`,wh=p`
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (min-width: 1024px) {
    all: unset;
  }
`,Ch=p`
  border: 0.5px solid #b6b6b6;
  border-radius: 48px;
  width: 312px;
  height: 48px;
  padding-left: 10px;

  @media (min-width: 1024px) {
    margin-right: 1rem;
  }
`,kh=p`
  margin: 2rem auto 1rem;
  border: solid 1px;
  width: 178px;
  cursor: pointer;
  background: #212429;
  color: #ffffff;

  @media (min-width: 1024px) {
    margin-left: 1rem;
  }
`,zs=()=>{const[e,t]=ct.useState("");return m("div",{className:vh,children:[m("div",{children:[l("h3",{className:yh,children:"Suscríbase al boletín de noticias"}),l("p",{className:xh,children:"¿y obtenga un 10% de descuento en su primera compra!"})]}),m("form",{className:wh,onSubmit:i=>{i.preventDefault(),console.log(e),t("")},children:[l("input",{type:"text",id:"boletin",onChange:i=>{t(i.target.value)},value:e,className:Ch,required:!0,placeholder:"Introduzca su dirección Email"}),l(le,{type:"submit",className:kh,children:"Suscríbase"})]})]})},Sh=p`
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
`,Ri=p`
  display: flex;
  justify-content: center;
  align-items: center;

`,Ph=p`
  display: flex;
  flex-direction: row;
  gap: 10px;

  div {
    justify-content: center;
    text-align: center;
  }
`,_h=p`
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
`,Lh=p`
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
`,tc=p`
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
`,zh=p`
  display: flex;
  flex-direction: row;
  gap: 10px;

  div {
    justify-content: center;
    text-align: center;
  }
`,Oi=p`
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
`,Mh=p`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-right: 0.5rem;
`,jh=p`

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
`;const Th=p`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`,Rh=()=>m("div",{className:Sh,children:[m("div",{className:Oi,children:[m("div",{className:Eh,children:[l("div",{className:Nh,children:l("img",{src:"/assets/fi_truck.png",alt:"icon"})}),l("div",{className:Ri,children:"Entrega"})]}),l("h3",{children:"Compradores"}),m("p",{children:["Pago ",l("br",{}),"Política de datos personales ",l("br",{}),"Acciones ",l("br",{}),"Chenques regalo"]}),m("p",{children:["© 2020 – 2022 ООО «Omix Stor». ",l("br",{}),"Todos los derechos reservados."]})]}),l("div",{children:m("div",{className:Oi,children:[m("div",{className:Ph,children:[l("div",{className:Lh,children:l("img",{src:"/assets/Group178.png",alt:"icon"})}),l("div",{className:Ri,children:"Devoluciones y cambios"})]}),m("p",{children:["Programa de afilición ",l("br",{}),"Normas de uso de los códigos promocionales"]}),l("p",{children:"ОOmiks Store Sociedad de Responsabilidad Limitada, domicilio social: Avenida Pobediteley, 100, Minsk, 220020, oficina 203. 203"})]})}),l("div",{children:m("div",{className:Oi,children:[m("div",{className:_h,children:[l("div",{className:tc,children:l("img",{src:"/assets/Group33.png",alt:"icon"})}),l("div",{className:Ri,children:"+375 (29) 749-18-23 "})]}),l("h3",{children:"Quiènes somos"}),m("p",{children:["Quiénes somos ",l("br",{}),"Póngase en contacto con ",l("br",{}),"Noticias ",l("br",{}),"Empleo ",l("br",{})]}),l("p",{children:"En el registro mercantil desde el 23 de junio de 2010, número de registro 256476, UNP 14886482"})]})}),l("div",{children:m("div",{className:Oi,children:[m("div",{className:zh,children:[l("div",{className:tc,children:l("img",{src:"/assets/Group34.png",alt:"icon"})}),l("div",{className:Ri,children:"+375 (29) 749-18-23 "})]}),m("div",{className:Th,children:[m("article",{children:[l("br",{}),l("h3",{children:"Estamos en las redes sociales"}),m("div",{className:jh,children:[l("svg",{width:"24",height:"23",viewBox:"0 0 24 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M22.0005 11.9999C22.0005 6.47705 17.5233 1.9999 12.0005 1.9999C6.47764 1.9999 2.00049 6.47705 2.00049 11.9999C2.00049 16.9912 5.65734 21.1282 10.438 21.8784V14.8905H7.89893V11.9999H10.438V9.79677C10.438 7.29052 11.9309 5.90615 14.2151 5.90615C15.3092 5.90615 16.4536 6.10146 16.4536 6.10146V8.5624H15.1926C13.9504 8.5624 13.563 9.33324 13.563 10.1241V11.9999H16.3364L15.8931 14.8905H13.563V21.8784C18.3436 21.1282 22.0005 16.9912 22.0005 11.9999Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),l("svg",{width:"24",height:"19",viewBox:"0 0 24 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.5949 2.45999C21.5421 2.71353 22.2865 3.45785 22.54 4.40501C22.9982 6.12001 23 9.70036 23 9.70036C23 9.70036 23 13.2807 22.54 14.9957C22.2865 15.9429 21.5421 16.6872 20.5949 16.9407C18.88 17.4007 12 17.4007 12 17.4007C12 17.4007 5.12001 17.4007 3.405 16.9407C2.45785 16.6872 1.71353 15.9429 1.45999 14.9957C1 13.2807 1 9.70036 1 9.70036C1 9.70036 1 6.12001 1.45999 4.40501C1.71353 3.45785 2.45785 2.71353 3.405 2.45999C5.12001 2 12 2 12 2C12 2 18.88 2 20.5949 2.45999ZM15.5134 9.70067L9.79788 13.0003V6.40101L15.5134 9.70067Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),l("svg",{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M2.0617 7.24464C2.10847 6.22264 2.26849 5.56351 2.4849 5.00402L2.48781 4.99629C2.70226 4.42695 3.03821 3.91119 3.47227 3.48489L3.47836 3.47891L3.48434 3.47282C3.91099 3.0382 4.42694 2.70258 4.99578 2.4887L5.00559 2.48495C5.56381 2.26786 6.22165 2.10843 7.2445 2.06167M2.0617 7.24464C2.01253 8.33659 2 8.67508 2 11.5063C2 14.3381 2.01184 14.6758 2.06167 15.768M2.0617 7.24464L2.0617 7.52008M2.4887 18.0168C2.70258 18.5856 3.0382 19.1015 3.47282 19.5282L3.4789 19.5342L3.48487 19.5402C3.91119 19.9743 4.42697 20.3103 4.99631 20.5247L5.00481 20.5279C5.56354 20.7446 6.2217 20.9041 7.2445 20.9509M2.4887 18.0168L2.48495 18.0069C2.26786 17.4487 2.10843 16.7909 2.06167 15.768M2.4887 18.0168L2.47588 17.9492M2.06167 15.768L2.07842 15.8562M2.06167 15.768L2.06167 15.4919M2.47588 17.9492L2.07842 15.8562M2.47588 17.9492C2.30707 17.5033 2.13325 16.881 2.07842 15.8562M2.47588 17.9492C2.4818 17.9649 2.48771 17.9803 2.49362 17.9955C2.70769 18.5726 3.04689 19.0952 3.48682 19.5256C3.91712 19.9655 4.43947 20.3046 5.01639 20.5187C5.47938 20.699 6.13176 20.8875 7.24434 20.9385C8.36713 20.9896 8.71402 21 11.5063 21C14.2985 21 14.6457 20.9896 15.7685 20.9385C16.8825 20.8874 17.5341 20.6979 17.9954 20.519C18.5727 20.305 19.0953 19.9657 19.5257 19.5256C19.9655 19.0953 20.3046 18.573 20.5187 17.9961C20.699 17.5331 20.8875 16.8808 20.9385 15.7682C20.9896 14.6454 21 14.2978 21 11.5063C21 8.71472 20.9896 8.36684 20.9385 7.24405C20.8871 6.12427 20.6959 5.47168 20.5162 5.00992C20.2811 4.40322 19.9831 3.94437 19.525 3.48627C19.0678 3.02999 18.6102 2.73179 18.0031 2.49654C17.5396 2.31537 16.8866 2.12531 15.7685 2.07406C15.6712 2.06964 15.5798 2.06552 15.4921 2.06168M2.07842 15.8562C2.07687 15.8273 2.07542 15.7981 2.07406 15.7685C2.06964 15.6712 2.06551 15.5797 2.06167 15.4919M7.2445 2.06167C8.33671 2.01184 8.67508 2 11.5063 2C14.3374 2 14.6757 2.01252 15.7676 2.06168M7.2445 2.06167L7.52065 2.06167M15.7676 2.06168L15.4921 2.06168M15.7676 2.06168C16.7898 2.10844 17.449 2.26844 18.0085 2.48487L18.0162 2.48781C18.5856 2.70226 19.1013 3.03821 19.5276 3.47227L19.5336 3.4783L19.5396 3.48422C19.9737 3.91055 20.3096 4.42646 20.5239 4.99596L20.5276 5.00559C20.7447 5.56381 20.9041 6.22165 20.9509 7.2445M7.52065 2.06167L15.4921 2.06168M7.52065 2.06167C8.44551 2.02123 8.95669 2.01253 11.5063 2.01253C14.0561 2.01253 14.5671 2.02124 15.4921 2.06168M7.52065 2.06167C7.43287 2.06551 7.34137 2.06964 7.24405 2.07406C6.13007 2.12512 5.47846 2.31464 5.01711 2.49358C4.4377 2.70837 3.91331 3.04936 3.48195 3.49186C3.02813 3.94756 2.73108 4.40422 2.49658 5.0094C2.31539 5.4728 2.1253 6.12614 2.07405 7.24434C2.06964 7.34135 2.06552 7.43257 2.0617 7.52008M20.9509 15.768C20.9041 16.7908 20.7447 17.449 20.528 18.0077L20.5247 18.0162C20.3103 18.5856 19.9743 19.1013 19.5403 19.5276L19.5342 19.5336L19.5282 19.5397C19.1015 19.9743 18.5856 20.3099 18.0168 20.5238L18.0069 20.5276C17.4487 20.7447 16.7909 20.9041 15.768 20.9509M2.06167 15.4919C2.02123 14.567 2.01253 14.0558 2.01253 11.5063C2.01253 8.95591 2.02123 8.44544 2.0617 7.52008M2.06167 15.4919L2.0617 7.52008M9.81551 15.5881C10.3516 15.8101 10.9261 15.9244 11.5063 15.9244C12.678 15.9244 13.8018 15.4589 14.6304 14.6304C15.4589 13.8018 15.9244 12.678 15.9244 11.5063C15.9244 10.3345 15.4589 9.21072 14.6304 8.38215C13.8018 7.55359 12.678 7.0881 11.5063 7.0881C10.9261 7.0881 10.3515 7.20238 9.81551 7.42442C9.27948 7.64645 8.79242 7.97189 8.38216 8.38215C7.9719 8.79242 7.64646 9.27947 7.42442 9.81551C7.20239 10.3515 7.08811 10.9261 7.08811 11.5063C7.08811 12.0865 7.20239 12.661 7.42442 13.197C7.64646 13.7331 7.9719 14.2201 8.38216 14.6304C8.79242 15.0406 9.27948 15.3661 9.81551 15.5881ZM8.37232 8.37231C9.20349 7.54113 10.3308 7.07418 11.5063 7.07418C12.6817 7.07418 13.809 7.54113 14.6402 8.37231C15.4714 9.20349 15.9383 10.3308 15.9383 11.5063C15.9383 12.6817 15.4714 13.809 14.6402 14.6402C13.809 15.4714 12.6817 15.9383 11.5063 15.9383C10.3308 15.9383 9.20349 15.4714 8.37232 14.6402C7.54114 13.809 7.07419 12.6817 7.07419 11.5063C7.07419 10.3308 7.54114 9.20349 8.37232 8.37231ZM18.434 6.04229C18.434 6.37873 18.3004 6.70139 18.0625 6.93929C17.8246 7.17719 17.5019 7.31084 17.1655 7.31084C16.829 7.31084 16.5064 7.17719 16.2685 6.93929C16.0306 6.70139 15.8969 6.37873 15.8969 6.04229C15.8969 5.70585 16.0306 5.38319 16.2685 5.1453C16.5064 4.9074 16.829 4.77375 17.1655 4.77375C17.5019 4.77375 17.8246 4.9074 18.0625 5.1453C18.3004 5.38319 18.434 5.70585 18.434 6.04229Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),l("svg",{width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M22 3.9246C21.2645 4.25051 20.4744 4.47071 19.6438 4.57025C20.4911 4.06289 21.1412 3.25782 21.4477 2.29948C20.655 2.76984 19.7768 3.1116 18.8422 3.29481C18.0935 2.49855 17.0277 2 15.8474 2C13.582 2 11.7446 3.8374 11.7446 6.10464C11.7446 6.42526 11.7816 6.73707 11.8503 7.03832C8.43883 6.86656 5.41672 5.23263 3.39258 2.75046C3.04025 3.35823 2.83766 4.06289 2.83766 4.81335C2.83766 6.23677 3.56258 7.4937 4.66273 8.22919C3.98978 8.20717 3.35735 8.02308 2.80419 7.71567V7.76852C2.80419 9.75654 4.21792 11.4151 6.09583 11.7921C5.75055 11.8855 5.38853 11.9348 5.01506 11.9348C4.75081 11.9348 4.49273 11.9102 4.24258 11.8626C4.76491 13.4921 6.27993 14.6795 8.07593 14.7112C6.67101 15.8122 4.90144 16.4684 2.97948 16.4684C2.64829 16.4684 2.3215 16.449 2 16.4112C3.81626 17.5765 5.97252 18.2547 8.28909 18.2547C15.8378 18.2547 19.9644 12.0026 19.9644 6.58029C19.9644 6.40412 19.96 6.2262 19.9521 6.05003C20.7536 5.47045 21.4495 4.74905 21.9982 3.92724L22 3.9246Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),l("svg",{width:"21",height:"24",viewBox:"0 0 21 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M15.8218 5.1344C15.0887 4.29394 14.648 3.19805 14.648 2H13.7293M15.8218 5.1344C16.4899 5.90063 17.3945 6.45789 18.4245 6.67608C18.7446 6.74574 19.0787 6.78293 19.4267 6.78293V10.2191C17.645 10.2191 15.9933 9.64801 14.6478 8.68211V15.6707C14.6478 19.1627 11.8083 22 8.32392 22C6.50049 22 4.8534 21.2198 3.69812 19.98C2.64492 18.847 2 17.3331 2 15.6707C2 12.2298 4.75598 9.42509 8.17079 9.35079M15.8218 5.1344C15.8039 5.12276 15.7861 5.11101 15.7684 5.09914M5.98556 17.3517C5.64223 16.8781 5.43808 16.2977 5.43808 15.6661C5.43808 14.0734 6.73255 12.7778 8.324 12.7778C8.62093 12.7778 8.90856 12.8288 9.17768 12.9124V9.40192C8.89927 9.36473 8.61628 9.34149 8.324 9.34149C8.27294 9.34149 7.86183 9.36884 7.81079 9.36884M13.7245 2H11.2098L11.2051 15.7775C11.1495 17.3192 9.87817 18.5591 8.32392 18.5591C7.35884 18.5591 6.50977 18.0808 5.98086 17.3564",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.9971 12C21.9971 17.5228 17.5199 22 11.9971 22C6.47422 22 1.99707 17.5228 1.99707 12C1.99707 6.47715 6.47422 2 11.9971 2C17.5199 2 21.9971 6.47715 21.9971 12ZM12.3554 9.38244C11.3828 9.787 9.43884 10.6243 6.52364 11.8944C6.05025 12.0827 5.80227 12.2669 5.7797 12.4469C5.74155 12.7513 6.12266 12.8711 6.64162 13.0343C6.71222 13.0565 6.78536 13.0795 6.86034 13.1038C7.37092 13.2698 8.05775 13.464 8.4148 13.4717C8.73868 13.4787 9.10017 13.3452 9.49926 13.0711C12.223 11.2325 13.629 10.3032 13.7173 10.2831C13.7796 10.269 13.8659 10.2512 13.9244 10.3032C13.9828 10.3552 13.9771 10.4536 13.9709 10.48C13.9331 10.641 12.4371 12.0318 11.663 12.7515C11.4216 12.9759 11.2505 13.135 11.2155 13.1714C11.1371 13.2528 11.0572 13.3298 10.9804 13.4038C10.506 13.8611 10.1503 14.204 11.0001 14.764C11.4084 15.0331 11.7352 15.2556 12.0612 15.4776C12.4172 15.7201 12.7723 15.9619 13.2317 16.2631C13.3488 16.3398 13.4606 16.4195 13.5695 16.4971C13.9838 16.7925 14.356 17.0579 14.8159 17.0155C15.0831 16.991 15.3591 16.7397 15.4993 15.9903C15.8306 14.2193 16.4817 10.3821 16.6322 8.80081C16.6454 8.66228 16.6288 8.48498 16.6155 8.40715C16.6022 8.32932 16.5744 8.21842 16.4732 8.13633C16.3534 8.03912 16.1684 8.01861 16.0857 8.02C15.7096 8.0267 15.1325 8.22735 12.3554 9.38244Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})})]})]}),m("article",{className:Mh,children:[l("img",{src:"/assets/belcart-footer.png",alt:"icon"}),l("img",{src:"/assets/visa-footer.png",alt:"icon"}),l("img",{src:"/assets/master-card-footer.png",alt:"icon"}),l("img",{src:"/assets/icon-footer2.png",alt:"icon"})]})]})]})})]}),Ge=e=>{const{type:t="text",pl:n,className:r}=e;return l("input",{type:t,required:!0,placeholder:n,className:r})};var zt={},Oh={get exports(){return zt},set exports(e){zt=e}};(function(e,t){(function(r,i){e.exports=i($)})(Zf,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(s,u)=>{u.match=C,u.parse=x;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,g=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,v=/^(?:(min|max)-)?(.+)/,y=/(em|rem|px|cm|mm|in|pt|pc)?$/,w=/(dpi|dpcm|dppx)?$/;function C(h,k){return x(h).some(function(E){var P=E.inverse,S=E.type==="all"||k.type===E.type;if(S&&P||!(S||P))return!1;var M=E.expressions.every(function(z){var j=z.feature,U=z.modifier,A=z.value,b=k[j];if(!b)return!1;switch(j){case"orientation":case"scan":return b.toLowerCase()===A.toLowerCase();case"width":case"height":case"device-width":case"device-height":A=d(A),b=d(b);break;case"resolution":A=f(A),b=f(b);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":A=N(A),b=N(b);break;case"grid":case"color":case"color-index":case"monochrome":A=parseInt(A,10)||1,b=parseInt(b,10)||0;break}switch(U){case"min":return b>=A;case"max":return b<=A;default:return b===A}});return M&&!P||!M&&P})}function x(h){return h.split(",").map(function(k){k=k.trim();var E=k.match(c),P=E[1],S=E[2],M=E[3]||"",z={};return z.inverse=!!P&&P.toLowerCase()==="not",z.type=S?S.toLowerCase():"all",M=M.match(/\([^\)]+\)/g)||[],z.expressions=M.map(function(j){var U=j.match(g),A=U[1].toLowerCase().match(v);return{modifier:A[1],feature:A[2],value:U[2]}}),z})}function N(h){var k=Number(h),E;return k||(E=h.match(/^(\d+)\s*\/\s*(\d+)$/),k=E[1]/E[2]),k}function f(h){var k=parseFloat(h),E=String(h).match(w)[1];switch(E){case"dpcm":return k/2.54;case"dppx":return k*96;default:return k}}function d(h){var k=parseFloat(h),E=String(h).match(y)[1];switch(E){case"em":return k*16;case"rem":return k*16;case"cm":return k*96/2.54;case"mm":return k*96/2.54/10;case"in":return k*96;case"pt":return k*72;case"pc":return k*72/12;default:return k}}},"./node_modules/hyphenate-style-name/index.js":(s,u,c)=>{c.r(u),c.d(u,{default:()=>x});var g=/[A-Z]/g,v=/^ms-/,y={};function w(N){return"-"+N.toLowerCase()}function C(N){if(y.hasOwnProperty(N))return y[N];var f=N.replace(g,w);return y[N]=v.test(f)?"-"+f:f}const x=C},"./node_modules/matchmediaquery/index.js":(s,u,c)=>{var g=c("./node_modules/css-mediaquery/index.js").match,v=typeof window<"u"?window.matchMedia:null;function y(C,x,N){var f=this;if(v&&!N){var d=v.call(window,C);this.matches=d.matches,this.media=d.media,d.addListener(E)}else this.matches=g(C,x),this.media=C;this.addListener=h,this.removeListener=k,this.dispose=P;function h(S){d&&d.addListener(S)}function k(S){d&&d.removeListener(S)}function E(S){f.matches=S.matches,f.media=S.media}function P(){d&&d.removeListener(E)}}function w(C,x,N){return new y(C,x,N)}s.exports=w},"./node_modules/object-assign/index.js":s=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;function v(w){if(w==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(w)}function y(){try{if(!Object.assign)return!1;var w=new String("abc");if(w[5]="de",Object.getOwnPropertyNames(w)[0]==="5")return!1;for(var C={},x=0;x<10;x++)C["_"+String.fromCharCode(x)]=x;var N=Object.getOwnPropertyNames(C).map(function(d){return C[d]});if(N.join("")!=="0123456789")return!1;var f={};return"abcdefghijklmnopqrst".split("").forEach(function(d){f[d]=d}),Object.keys(Object.assign({},f)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}s.exports=y()?Object.assign:function(w,C){for(var x,N=v(w),f,d=1;d<arguments.length;d++){x=Object(arguments[d]);for(var h in x)c.call(x,h)&&(N[h]=x[h]);if(u){f=u(x);for(var k=0;k<f.length;k++)g.call(x,f[k])&&(N[f[k]]=x[f[k]])}}return N}},"./node_modules/prop-types/checkPropTypes.js":(s,u,c)=>{var g=function(){};{var v=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),y={},w=c("./node_modules/prop-types/lib/has.js");g=function(x){var N="Warning: "+x;typeof console<"u"&&console.error(N);try{throw new Error(N)}catch{}}}function C(x,N,f,d,h){for(var k in x)if(w(x,k)){var E;try{if(typeof x[k]!="function"){var P=Error((d||"React class")+": "+f+" type `"+k+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof x[k]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw P.name="Invariant Violation",P}E=x[k](N,k,d,f,null,v)}catch(M){E=M}if(E&&!(E instanceof Error)&&g((d||"React class")+": type specification of "+f+" `"+k+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof E+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),E instanceof Error&&!(E.message in y)){y[E.message]=!0;var S=h?h():"";g("Failed "+f+" type: "+E.message+(S??""))}}}C.resetWarningCache=function(){y={}},s.exports=C},"./node_modules/prop-types/factoryWithTypeCheckers.js":(s,u,c)=>{var g=c("./node_modules/react-is/index.js"),v=c("./node_modules/object-assign/index.js"),y=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),w=c("./node_modules/prop-types/lib/has.js"),C=c("./node_modules/prop-types/checkPropTypes.js"),x=function(){};x=function(f){var d="Warning: "+f;typeof console<"u"&&console.error(d);try{throw new Error(d)}catch{}};function N(){return null}s.exports=function(f,d){var h=typeof Symbol=="function"&&Symbol.iterator,k="@@iterator";function E(L){var I=L&&(h&&L[h]||L[k]);if(typeof I=="function")return I}var P="<<anonymous>>",S={array:U("array"),bigint:U("bigint"),bool:U("boolean"),func:U("function"),number:U("number"),object:U("object"),string:U("string"),symbol:U("symbol"),any:A(),arrayOf:b,element:xe(),elementType:Ae(),instanceOf:Ke,node:B(),objectOf:T,oneOf:dn,oneOfType:D,shape:pe,exact:At};function M(L,I){return L===I?L!==0||1/L===1/I:L!==L&&I!==I}function z(L,I){this.message=L,this.data=I&&typeof I=="object"?I:{},this.stack=""}z.prototype=Error.prototype;function j(L){var I={},K=0;function H(Z,W,Q,G,ne,J,R){if(G=G||P,J=J||Q,R!==y){if(d){var Se=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw Se.name="Invariant Violation",Se}else if(typeof console<"u"){var dt=G+":"+Q;!I[dt]&&K<3&&(x("You are manually calling a React.PropTypes validation function for the `"+J+"` prop on `"+G+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),I[dt]=!0,K++)}}return W[Q]==null?Z?W[Q]===null?new z("The "+ne+" `"+J+"` is marked as required "+("in `"+G+"`, but its value is `null`.")):new z("The "+ne+" `"+J+"` is marked as required in "+("`"+G+"`, but its value is `undefined`.")):null:L(W,Q,G,ne,J)}var F=H.bind(null,!1);return F.isRequired=H.bind(null,!0),F}function U(L){function I(K,H,F,Z,W,Q){var G=K[H],ne=ke(G);if(ne!==L){var J=Xe(G);return new z("Invalid "+Z+" `"+W+"` of type "+("`"+J+"` supplied to `"+F+"`, expected ")+("`"+L+"`."),{expectedType:L})}return null}return j(I)}function A(){return j(N)}function b(L){function I(K,H,F,Z,W){if(typeof L!="function")return new z("Property `"+W+"` of component `"+F+"` has invalid PropType notation inside arrayOf.");var Q=K[H];if(!Array.isArray(Q)){var G=ke(Q);return new z("Invalid "+Z+" `"+W+"` of type "+("`"+G+"` supplied to `"+F+"`, expected an array."))}for(var ne=0;ne<Q.length;ne++){var J=L(Q,ne,F,Z,W+"["+ne+"]",y);if(J instanceof Error)return J}return null}return j(I)}function xe(){function L(I,K,H,F,Z){var W=I[K];if(!f(W)){var Q=ke(W);return new z("Invalid "+F+" `"+Z+"` of type "+("`"+Q+"` supplied to `"+H+"`, expected a single ReactElement."))}return null}return j(L)}function Ae(){function L(I,K,H,F,Z){var W=I[K];if(!g.isValidElementType(W)){var Q=ke(W);return new z("Invalid "+F+" `"+Z+"` of type "+("`"+Q+"` supplied to `"+H+"`, expected a single ReactElement type."))}return null}return j(L)}function Ke(L){function I(K,H,F,Z,W){if(!(K[H]instanceof L)){var Q=L.name||P,G=mi(K[H]);return new z("Invalid "+Z+" `"+W+"` of type "+("`"+G+"` supplied to `"+F+"`, expected ")+("instance of `"+Q+"`."))}return null}return j(I)}function dn(L){if(!Array.isArray(L))return arguments.length>1?x("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):x("Invalid argument supplied to oneOf, expected an array."),N;function I(K,H,F,Z,W){for(var Q=K[H],G=0;G<L.length;G++)if(M(Q,L[G]))return null;var ne=JSON.stringify(L,function(R,Se){var dt=Xe(Se);return dt==="symbol"?String(Se):Se});return new z("Invalid "+Z+" `"+W+"` of value `"+String(Q)+"` "+("supplied to `"+F+"`, expected one of "+ne+"."))}return j(I)}function T(L){function I(K,H,F,Z,W){if(typeof L!="function")return new z("Property `"+W+"` of component `"+F+"` has invalid PropType notation inside objectOf.");var Q=K[H],G=ke(Q);if(G!=="object")return new z("Invalid "+Z+" `"+W+"` of type "+("`"+G+"` supplied to `"+F+"`, expected an object."));for(var ne in Q)if(w(Q,ne)){var J=L(Q,ne,F,Z,W+"."+ne,y);if(J instanceof Error)return J}return null}return j(I)}function D(L){if(!Array.isArray(L))return x("Invalid argument supplied to oneOfType, expected an instance of array."),N;for(var I=0;I<L.length;I++){var K=L[I];if(typeof K!="function")return x("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Xo(K)+" at index "+I+"."),N}function H(F,Z,W,Q,G){for(var ne=[],J=0;J<L.length;J++){var R=L[J],Se=R(F,Z,W,Q,G,y);if(Se==null)return null;Se.data&&w(Se.data,"expectedType")&&ne.push(Se.data.expectedType)}var dt=ne.length>0?", expected one of type ["+ne.join(", ")+"]":"";return new z("Invalid "+Q+" `"+G+"` supplied to "+("`"+W+"`"+dt+"."))}return j(H)}function B(){function L(I,K,H,F,Z){return Be(I[K])?null:new z("Invalid "+F+" `"+Z+"` supplied to "+("`"+H+"`, expected a ReactNode."))}return j(L)}function ie(L,I,K,H,F){return new z((L||"React class")+": "+I+" type `"+K+"."+H+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+F+"`.")}function pe(L){function I(K,H,F,Z,W){var Q=K[H],G=ke(Q);if(G!=="object")return new z("Invalid "+Z+" `"+W+"` of type `"+G+"` "+("supplied to `"+F+"`, expected `object`."));for(var ne in L){var J=L[ne];if(typeof J!="function")return ie(F,Z,W,ne,Xe(J));var R=J(Q,ne,F,Z,W+"."+ne,y);if(R)return R}return null}return j(I)}function At(L){function I(K,H,F,Z,W){var Q=K[H],G=ke(Q);if(G!=="object")return new z("Invalid "+Z+" `"+W+"` of type `"+G+"` "+("supplied to `"+F+"`, expected `object`."));var ne=v({},K[H],L);for(var J in ne){var R=L[J];if(w(L,J)&&typeof R!="function")return ie(F,Z,W,J,Xe(R));if(!R)return new z("Invalid "+Z+" `"+W+"` key `"+J+"` supplied to `"+F+"`.\nBad object: "+JSON.stringify(K[H],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(L),null,"  "));var Se=R(Q,J,F,Z,W+"."+J,y);if(Se)return Se}return null}return j(I)}function Be(L){switch(typeof L){case"number":case"string":case"undefined":return!0;case"boolean":return!L;case"object":if(Array.isArray(L))return L.every(Be);if(L===null||f(L))return!0;var I=E(L);if(I){var K=I.call(L),H;if(I!==L.entries){for(;!(H=K.next()).done;)if(!Be(H.value))return!1}else for(;!(H=K.next()).done;){var F=H.value;if(F&&!Be(F[1]))return!1}}else return!1;return!0;default:return!1}}function fn(L,I){return L==="symbol"?!0:I?I["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&I instanceof Symbol:!1}function ke(L){var I=typeof L;return Array.isArray(L)?"array":L instanceof RegExp?"object":fn(I,L)?"symbol":I}function Xe(L){if(typeof L>"u"||L===null)return""+L;var I=ke(L);if(I==="object"){if(L instanceof Date)return"date";if(L instanceof RegExp)return"regexp"}return I}function Xo(L){var I=Xe(L);switch(I){case"array":case"object":return"an "+I;case"boolean":case"date":case"regexp":return"a "+I;default:return I}}function mi(L){return!L.constructor||!L.constructor.name?P:L.constructor.name}return S.checkPropTypes=C,S.resetWarningCache=C.resetWarningCache,S.PropTypes=S,S}},"./node_modules/prop-types/index.js":(s,u,c)=>{{var g=c("./node_modules/react-is/index.js"),v=!0;s.exports=c("./node_modules/prop-types/factoryWithTypeCheckers.js")(g.isElement,v)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":s=>{var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";s.exports=u},"./node_modules/prop-types/lib/has.js":s=>{s.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(s,u)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var c=typeof Symbol=="function"&&Symbol.for,g=c?Symbol.for("react.element"):60103,v=c?Symbol.for("react.portal"):60106,y=c?Symbol.for("react.fragment"):60107,w=c?Symbol.for("react.strict_mode"):60108,C=c?Symbol.for("react.profiler"):60114,x=c?Symbol.for("react.provider"):60109,N=c?Symbol.for("react.context"):60110,f=c?Symbol.for("react.async_mode"):60111,d=c?Symbol.for("react.concurrent_mode"):60111,h=c?Symbol.for("react.forward_ref"):60112,k=c?Symbol.for("react.suspense"):60113,E=c?Symbol.for("react.suspense_list"):60120,P=c?Symbol.for("react.memo"):60115,S=c?Symbol.for("react.lazy"):60116,M=c?Symbol.for("react.block"):60121,z=c?Symbol.for("react.fundamental"):60117,j=c?Symbol.for("react.responder"):60118,U=c?Symbol.for("react.scope"):60119;function A(R){return typeof R=="string"||typeof R=="function"||R===y||R===d||R===C||R===w||R===k||R===E||typeof R=="object"&&R!==null&&(R.$$typeof===S||R.$$typeof===P||R.$$typeof===x||R.$$typeof===N||R.$$typeof===h||R.$$typeof===z||R.$$typeof===j||R.$$typeof===U||R.$$typeof===M)}function b(R){if(typeof R=="object"&&R!==null){var Se=R.$$typeof;switch(Se){case g:var dt=R.type;switch(dt){case f:case d:case y:case C:case w:case k:return dt;default:var Ms=dt&&dt.$$typeof;switch(Ms){case N:case h:case S:case P:case x:return Ms;default:return Se}}case v:return Se}}}var xe=f,Ae=d,Ke=N,dn=x,T=g,D=h,B=y,ie=S,pe=P,At=v,Be=C,fn=w,ke=k,Xe=!1;function Xo(R){return Xe||(Xe=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),mi(R)||b(R)===f}function mi(R){return b(R)===d}function L(R){return b(R)===N}function I(R){return b(R)===x}function K(R){return typeof R=="object"&&R!==null&&R.$$typeof===g}function H(R){return b(R)===h}function F(R){return b(R)===y}function Z(R){return b(R)===S}function W(R){return b(R)===P}function Q(R){return b(R)===v}function G(R){return b(R)===C}function ne(R){return b(R)===w}function J(R){return b(R)===k}u.AsyncMode=xe,u.ConcurrentMode=Ae,u.ContextConsumer=Ke,u.ContextProvider=dn,u.Element=T,u.ForwardRef=D,u.Fragment=B,u.Lazy=ie,u.Memo=pe,u.Portal=At,u.Profiler=Be,u.StrictMode=fn,u.Suspense=ke,u.isAsyncMode=Xo,u.isConcurrentMode=mi,u.isContextConsumer=L,u.isContextProvider=I,u.isElement=K,u.isForwardRef=H,u.isFragment=F,u.isLazy=Z,u.isMemo=W,u.isPortal=Q,u.isProfiler=G,u.isStrictMode=ne,u.isSuspense=J,u.isValidElementType=A,u.typeOf=b})()},"./node_modules/react-is/index.js":(s,u,c)=>{s.exports=c("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(s,u,c)=>{c.r(u),c.d(u,{shallowEqualArrays:()=>v,shallowEqualObjects:()=>g});function g(y,w){if(y===w)return!0;if(!y||!w)return!1;var C=Object.keys(y),x=Object.keys(w),N=C.length;if(x.length!==N)return!1;for(var f=0;f<N;f++){var d=C[f];if(y[d]!==w[d]||!Object.prototype.hasOwnProperty.call(w,d))return!1}return!0}function v(y,w){if(y===w)return!0;if(!y||!w)return!1;var C=y.length;if(w.length!==C)return!1;for(var x=0;x<C;x++)if(y[x]!==w[x])return!1;return!0}},"./src/Component.ts":function(s,u,c){var g=this&&this.__rest||function(C,x){var N={};for(var f in C)Object.prototype.hasOwnProperty.call(C,f)&&x.indexOf(f)<0&&(N[f]=C[f]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,f=Object.getOwnPropertySymbols(C);d<f.length;d++)x.indexOf(f[d])<0&&Object.prototype.propertyIsEnumerable.call(C,f[d])&&(N[f[d]]=C[f[d]]);return N},v=this&&this.__importDefault||function(C){return C&&C.__esModule?C:{default:C}};Object.defineProperty(u,"__esModule",{value:!0});var y=v(c("./src/useMediaQuery.ts")),w=function(C){var x=C.children,N=C.device,f=C.onChange,d=g(C,["children","device","onChange"]),h=(0,y.default)(d,N,f);return typeof x=="function"?x(h):h?x:null};u.default=w},"./src/Context.ts":(s,u,c)=>{Object.defineProperty(u,"__esModule",{value:!0});var g=c("react"),v=(0,g.createContext)(void 0);u.default=v},"./src/index.ts":function(s,u,c){var g=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(u,"__esModule",{value:!0}),u.Context=u.toQuery=u.useMediaQuery=u.default=void 0;var v=g(c("./src/useMediaQuery.ts"));u.useMediaQuery=v.default;var y=g(c("./src/Component.ts"));u.default=y.default;var w=g(c("./src/toQuery.ts"));u.toQuery=w.default;var C=g(c("./src/Context.ts"));u.Context=C.default},"./src/mediaQuery.ts":function(s,u,c){var g=this&&this.__assign||function(){return g=Object.assign||function(k){for(var E,P=1,S=arguments.length;P<S;P++){E=arguments[P];for(var M in E)Object.prototype.hasOwnProperty.call(E,M)&&(k[M]=E[M])}return k},g.apply(this,arguments)},v=this&&this.__rest||function(k,E){var P={};for(var S in k)Object.prototype.hasOwnProperty.call(k,S)&&E.indexOf(S)<0&&(P[S]=k[S]);if(k!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,S=Object.getOwnPropertySymbols(k);M<S.length;M++)E.indexOf(S[M])<0&&Object.prototype.propertyIsEnumerable.call(k,S[M])&&(P[S[M]]=k[S[M]]);return P},y=this&&this.__importDefault||function(k){return k&&k.__esModule?k:{default:k}};Object.defineProperty(u,"__esModule",{value:!0});var w=y(c("./node_modules/prop-types/index.js")),C=w.default.oneOfType([w.default.string,w.default.number]),x={all:w.default.bool,grid:w.default.bool,aural:w.default.bool,braille:w.default.bool,handheld:w.default.bool,print:w.default.bool,projection:w.default.bool,screen:w.default.bool,tty:w.default.bool,tv:w.default.bool,embossed:w.default.bool},N={orientation:w.default.oneOf(["portrait","landscape"]),scan:w.default.oneOf(["progressive","interlace"]),aspectRatio:w.default.string,deviceAspectRatio:w.default.string,height:C,deviceHeight:C,width:C,deviceWidth:C,color:w.default.bool,colorIndex:w.default.bool,monochrome:w.default.bool,resolution:C,type:Object.keys(x)};N.type;var f=v(N,["type"]),d=g({minAspectRatio:w.default.string,maxAspectRatio:w.default.string,minDeviceAspectRatio:w.default.string,maxDeviceAspectRatio:w.default.string,minHeight:C,maxHeight:C,minDeviceHeight:C,maxDeviceHeight:C,minWidth:C,maxWidth:C,minDeviceWidth:C,maxDeviceWidth:C,minColor:w.default.number,maxColor:w.default.number,minColorIndex:w.default.number,maxColorIndex:w.default.number,minMonochrome:w.default.number,maxMonochrome:w.default.number,minResolution:C,maxResolution:C},f),h=g(g({},x),d);u.default={all:h,types:x,matchers:N,features:d}},"./src/toQuery.ts":function(s,u,c){var g=this&&this.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(u,"__esModule",{value:!0});var v=g(c("./node_modules/hyphenate-style-name/index.js")),y=g(c("./src/mediaQuery.ts")),w=function(f){return"not ".concat(f)},C=function(f,d){var h=(0,v.default)(f);return typeof d=="number"&&(d="".concat(d,"px")),d===!0?h:d===!1?w(h):"(".concat(h,": ").concat(d,")")},x=function(f){return f.join(" and ")},N=function(f){var d=[];return Object.keys(y.default.all).forEach(function(h){var k=f[h];k!=null&&d.push(C(h,k))}),x(d)};u.default=N},"./src/useMediaQuery.ts":function(s,u,c){var g=this&&this.__importDefault||function(z){return z&&z.__esModule?z:{default:z}};Object.defineProperty(u,"__esModule",{value:!0});var v=c("react"),y=g(c("./node_modules/matchmediaquery/index.js")),w=g(c("./node_modules/hyphenate-style-name/index.js")),C=c("./node_modules/shallow-equal/dist/index.esm.js"),x=g(c("./src/toQuery.ts")),N=g(c("./src/Context.ts")),f=function(z){return z.query||(0,x.default)(z)},d=function(z){if(z){var j=Object.keys(z);return j.reduce(function(U,A){return U[(0,w.default)(A)]=z[A],U},{})}},h=function(){var z=(0,v.useRef)(!1);return(0,v.useEffect)(function(){z.current=!0},[]),z.current},k=function(z){var j=(0,v.useContext)(N.default),U=function(){return d(z)||d(j)},A=(0,v.useState)(U),b=A[0],xe=A[1];return(0,v.useEffect)(function(){var Ae=U();(0,C.shallowEqualObjects)(b,Ae)||xe(Ae)},[z,j]),b},E=function(z){var j=function(){return f(z)},U=(0,v.useState)(j),A=U[0],b=U[1];return(0,v.useEffect)(function(){var xe=j();A!==xe&&b(xe)},[z]),A},P=function(z,j){var U=function(){return(0,y.default)(z,j||{},!!j)},A=(0,v.useState)(U),b=A[0],xe=A[1],Ae=h();return(0,v.useEffect)(function(){if(Ae){var Ke=U();return xe(Ke),function(){Ke&&Ke.dispose()}}},[z,j]),b},S=function(z){var j=(0,v.useState)(z.matches),U=j[0],A=j[1];return(0,v.useEffect)(function(){var b=function(xe){A(xe.matches)};return z.addListener(b),A(z.matches),function(){z.removeListener(b)}},[z]),U},M=function(z,j,U){var A=k(j),b=E(z);if(!b)throw new Error("Invalid or missing MediaQuery!");var xe=P(b,A),Ae=S(xe),Ke=h();return(0,v.useEffect)(function(){Ke&&U&&U(Ae)},[Ae]),(0,v.useEffect)(function(){return function(){xe&&xe.dispose()}},[]),Ae};u.default=M},react:s=>{s.exports=n}},i={};function o(s){var u=i[s];if(u!==void 0)return u.exports;var c=i[s]={exports:{}};return r[s].call(c.exports,c,c.exports,o),c.exports}o.d=(s,u)=>{for(var c in u)o.o(u,c)&&!o.o(s,c)&&Object.defineProperty(s,c,{enumerable:!0,get:u[c]})},o.o=(s,u)=>Object.prototype.hasOwnProperty.call(s,u),o.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var a=o("./src/index.ts");return a})())})(Oh);const Ih=e=>{const{className:t,text1:n="Compradores",text2:r="Quiénes somos"}=e;return m(Dr,{children:[m("div",{className:t,children:[m("div",{children:[n,l("svg",{width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),l("hr",{})]}),m("div",{className:t,children:[m("div",{children:[r,l("svg",{width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),l("hr",{})]})]})},$h=p`

  background-color: black;
  color: white;
  padding: 1rem 0rem;
`,bh=p`
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
`,Dh=p`
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
`,Nl=p`
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
`,Uh=p`
  margin: 0rem 0rem 2rem;

  color: rgba(255, 255, 255, 0.64);

  hr {
    border: 0.5px solid #4d4d4d;

  }
`,Ah=p`
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
`,Bh=p`
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
`,Fh=p`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem 5rem;
  gap: 0.5rem;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: #737373;
`,Vh=p`
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

`;const fr=()=>{const e=zt.useMediaQuery({maxWidth:"725px"});return l("footer",{className:$h,children:l("div",{className:Uh,children:e?m(Dr,{children:[m("div",{className:bh,children:[m("div",{children:[l(Le,{to:"#",children:l("div",{className:Dh,children:l("img",{src:"/assets/fi_truck.png",alt:"icon"})})}),l("p",{children:"Entega"})]}),m("div",{children:[l(Le,{to:"#",children:l("div",{className:Nl,children:l("img",{src:"/assets/Group178.png",alt:"icon"})})}),l("p",{children:"Devoluciones y cambios"})]}),m("div",{children:[l(Le,{to:"#",children:l("div",{className:Nl,children:l("img",{src:"/assets/Group33.png",alt:"icon"})})}),l("p",{children:"+375 (29) 749-18-23"})]}),m("div",{children:[l(Le,{to:"#",children:l("div",{className:Nl,children:l("img",{src:"/assets/Group34.png",alt:"icon"})})}),l("p",{children:"shop@omix.com"})]})]}),l("hr",{}),l(Ih,{className:Ah}),m("div",{className:Bh,children:[l("h3",{children:"Estamos en las redes sociales"}),m("div",{children:[l("svg",{width:"24",height:"23",viewBox:"0 0 24 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M22.0005 11.9999C22.0005 6.47705 17.5233 1.9999 12.0005 1.9999C6.47764 1.9999 2.00049 6.47705 2.00049 11.9999C2.00049 16.9912 5.65734 21.1282 10.438 21.8784V14.8905H7.89893V11.9999H10.438V9.79677C10.438 7.29052 11.9309 5.90615 14.2151 5.90615C15.3092 5.90615 16.4536 6.10146 16.4536 6.10146V8.5624H15.1926C13.9504 8.5624 13.563 9.33324 13.563 10.1241V11.9999H16.3364L15.8931 14.8905H13.563V21.8784C18.3436 21.1282 22.0005 16.9912 22.0005 11.9999Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),l("svg",{width:"24",height:"19",viewBox:"0 0 24 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.5949 2.45999C21.5421 2.71353 22.2865 3.45785 22.54 4.40501C22.9982 6.12001 23 9.70036 23 9.70036C23 9.70036 23 13.2807 22.54 14.9957C22.2865 15.9429 21.5421 16.6872 20.5949 16.9407C18.88 17.4007 12 17.4007 12 17.4007C12 17.4007 5.12001 17.4007 3.405 16.9407C2.45785 16.6872 1.71353 15.9429 1.45999 14.9957C1 13.2807 1 9.70036 1 9.70036C1 9.70036 1 6.12001 1.45999 4.40501C1.71353 3.45785 2.45785 2.71353 3.405 2.45999C5.12001 2 12 2 12 2C12 2 18.88 2 20.5949 2.45999ZM15.5134 9.70067L9.79788 13.0003V6.40101L15.5134 9.70067Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),l("svg",{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M2.0617 7.24464C2.10847 6.22264 2.26849 5.56351 2.4849 5.00402L2.48781 4.99629C2.70226 4.42695 3.03821 3.91119 3.47227 3.48489L3.47836 3.47891L3.48434 3.47282C3.91099 3.0382 4.42694 2.70258 4.99578 2.4887L5.00559 2.48495C5.56381 2.26786 6.22165 2.10843 7.2445 2.06167M2.0617 7.24464C2.01253 8.33659 2 8.67508 2 11.5063C2 14.3381 2.01184 14.6758 2.06167 15.768M2.0617 7.24464L2.0617 7.52008M2.4887 18.0168C2.70258 18.5856 3.0382 19.1015 3.47282 19.5282L3.4789 19.5342L3.48487 19.5402C3.91119 19.9743 4.42697 20.3103 4.99631 20.5247L5.00481 20.5279C5.56354 20.7446 6.2217 20.9041 7.2445 20.9509M2.4887 18.0168L2.48495 18.0069C2.26786 17.4487 2.10843 16.7909 2.06167 15.768M2.4887 18.0168L2.47588 17.9492M2.06167 15.768L2.07842 15.8562M2.06167 15.768L2.06167 15.4919M2.47588 17.9492L2.07842 15.8562M2.47588 17.9492C2.30707 17.5033 2.13325 16.881 2.07842 15.8562M2.47588 17.9492C2.4818 17.9649 2.48771 17.9803 2.49362 17.9955C2.70769 18.5726 3.04689 19.0952 3.48682 19.5256C3.91712 19.9655 4.43947 20.3046 5.01639 20.5187C5.47938 20.699 6.13176 20.8875 7.24434 20.9385C8.36713 20.9896 8.71402 21 11.5063 21C14.2985 21 14.6457 20.9896 15.7685 20.9385C16.8825 20.8874 17.5341 20.6979 17.9954 20.519C18.5727 20.305 19.0953 19.9657 19.5257 19.5256C19.9655 19.0953 20.3046 18.573 20.5187 17.9961C20.699 17.5331 20.8875 16.8808 20.9385 15.7682C20.9896 14.6454 21 14.2978 21 11.5063C21 8.71472 20.9896 8.36684 20.9385 7.24405C20.8871 6.12427 20.6959 5.47168 20.5162 5.00992C20.2811 4.40322 19.9831 3.94437 19.525 3.48627C19.0678 3.02999 18.6102 2.73179 18.0031 2.49654C17.5396 2.31537 16.8866 2.12531 15.7685 2.07406C15.6712 2.06964 15.5798 2.06552 15.4921 2.06168M2.07842 15.8562C2.07687 15.8273 2.07542 15.7981 2.07406 15.7685C2.06964 15.6712 2.06551 15.5797 2.06167 15.4919M7.2445 2.06167C8.33671 2.01184 8.67508 2 11.5063 2C14.3374 2 14.6757 2.01252 15.7676 2.06168M7.2445 2.06167L7.52065 2.06167M15.7676 2.06168L15.4921 2.06168M15.7676 2.06168C16.7898 2.10844 17.449 2.26844 18.0085 2.48487L18.0162 2.48781C18.5856 2.70226 19.1013 3.03821 19.5276 3.47227L19.5336 3.4783L19.5396 3.48422C19.9737 3.91055 20.3096 4.42646 20.5239 4.99596L20.5276 5.00559C20.7447 5.56381 20.9041 6.22165 20.9509 7.2445M7.52065 2.06167L15.4921 2.06168M7.52065 2.06167C8.44551 2.02123 8.95669 2.01253 11.5063 2.01253C14.0561 2.01253 14.5671 2.02124 15.4921 2.06168M7.52065 2.06167C7.43287 2.06551 7.34137 2.06964 7.24405 2.07406C6.13007 2.12512 5.47846 2.31464 5.01711 2.49358C4.4377 2.70837 3.91331 3.04936 3.48195 3.49186C3.02813 3.94756 2.73108 4.40422 2.49658 5.0094C2.31539 5.4728 2.1253 6.12614 2.07405 7.24434C2.06964 7.34135 2.06552 7.43257 2.0617 7.52008M20.9509 15.768C20.9041 16.7908 20.7447 17.449 20.528 18.0077L20.5247 18.0162C20.3103 18.5856 19.9743 19.1013 19.5403 19.5276L19.5342 19.5336L19.5282 19.5397C19.1015 19.9743 18.5856 20.3099 18.0168 20.5238L18.0069 20.5276C17.4487 20.7447 16.7909 20.9041 15.768 20.9509M2.06167 15.4919C2.02123 14.567 2.01253 14.0558 2.01253 11.5063C2.01253 8.95591 2.02123 8.44544 2.0617 7.52008M2.06167 15.4919L2.0617 7.52008M9.81551 15.5881C10.3516 15.8101 10.9261 15.9244 11.5063 15.9244C12.678 15.9244 13.8018 15.4589 14.6304 14.6304C15.4589 13.8018 15.9244 12.678 15.9244 11.5063C15.9244 10.3345 15.4589 9.21072 14.6304 8.38215C13.8018 7.55359 12.678 7.0881 11.5063 7.0881C10.9261 7.0881 10.3515 7.20238 9.81551 7.42442C9.27948 7.64645 8.79242 7.97189 8.38216 8.38215C7.9719 8.79242 7.64646 9.27947 7.42442 9.81551C7.20239 10.3515 7.08811 10.9261 7.08811 11.5063C7.08811 12.0865 7.20239 12.661 7.42442 13.197C7.64646 13.7331 7.9719 14.2201 8.38216 14.6304C8.79242 15.0406 9.27948 15.3661 9.81551 15.5881ZM8.37232 8.37231C9.20349 7.54113 10.3308 7.07418 11.5063 7.07418C12.6817 7.07418 13.809 7.54113 14.6402 8.37231C15.4714 9.20349 15.9383 10.3308 15.9383 11.5063C15.9383 12.6817 15.4714 13.809 14.6402 14.6402C13.809 15.4714 12.6817 15.9383 11.5063 15.9383C10.3308 15.9383 9.20349 15.4714 8.37232 14.6402C7.54114 13.809 7.07419 12.6817 7.07419 11.5063C7.07419 10.3308 7.54114 9.20349 8.37232 8.37231ZM18.434 6.04229C18.434 6.37873 18.3004 6.70139 18.0625 6.93929C17.8246 7.17719 17.5019 7.31084 17.1655 7.31084C16.829 7.31084 16.5064 7.17719 16.2685 6.93929C16.0306 6.70139 15.8969 6.37873 15.8969 6.04229C15.8969 5.70585 16.0306 5.38319 16.2685 5.1453C16.5064 4.9074 16.829 4.77375 17.1655 4.77375C17.5019 4.77375 17.8246 4.9074 18.0625 5.1453C18.3004 5.38319 18.434 5.70585 18.434 6.04229Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),l("svg",{width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M22 3.9246C21.2645 4.25051 20.4744 4.47071 19.6438 4.57025C20.4911 4.06289 21.1412 3.25782 21.4477 2.29948C20.655 2.76984 19.7768 3.1116 18.8422 3.29481C18.0935 2.49855 17.0277 2 15.8474 2C13.582 2 11.7446 3.8374 11.7446 6.10464C11.7446 6.42526 11.7816 6.73707 11.8503 7.03832C8.43883 6.86656 5.41672 5.23263 3.39258 2.75046C3.04025 3.35823 2.83766 4.06289 2.83766 4.81335C2.83766 6.23677 3.56258 7.4937 4.66273 8.22919C3.98978 8.20717 3.35735 8.02308 2.80419 7.71567V7.76852C2.80419 9.75654 4.21792 11.4151 6.09583 11.7921C5.75055 11.8855 5.38853 11.9348 5.01506 11.9348C4.75081 11.9348 4.49273 11.9102 4.24258 11.8626C4.76491 13.4921 6.27993 14.6795 8.07593 14.7112C6.67101 15.8122 4.90144 16.4684 2.97948 16.4684C2.64829 16.4684 2.3215 16.449 2 16.4112C3.81626 17.5765 5.97252 18.2547 8.28909 18.2547C15.8378 18.2547 19.9644 12.0026 19.9644 6.58029C19.9644 6.40412 19.96 6.2262 19.9521 6.05003C20.7536 5.47045 21.4495 4.74905 21.9982 3.92724L22 3.9246Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),l("svg",{width:"21",height:"24",viewBox:"0 0 21 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M15.8218 5.1344C15.0887 4.29394 14.648 3.19805 14.648 2H13.7293M15.8218 5.1344C16.4899 5.90063 17.3945 6.45789 18.4245 6.67608C18.7446 6.74574 19.0787 6.78293 19.4267 6.78293V10.2191C17.645 10.2191 15.9933 9.64801 14.6478 8.68211V15.6707C14.6478 19.1627 11.8083 22 8.32392 22C6.50049 22 4.8534 21.2198 3.69812 19.98C2.64492 18.847 2 17.3331 2 15.6707C2 12.2298 4.75598 9.42509 8.17079 9.35079M15.8218 5.1344C15.8039 5.12276 15.7861 5.11101 15.7684 5.09914M5.98556 17.3517C5.64223 16.8781 5.43808 16.2977 5.43808 15.6661C5.43808 14.0734 6.73255 12.7778 8.324 12.7778C8.62093 12.7778 8.90856 12.8288 9.17768 12.9124V9.40192C8.89927 9.36473 8.61628 9.34149 8.324 9.34149C8.27294 9.34149 7.86183 9.36884 7.81079 9.36884M13.7245 2H11.2098L11.2051 15.7775C11.1495 17.3192 9.87817 18.5591 8.32392 18.5591C7.35884 18.5591 6.50977 18.0808 5.98086 17.3564",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})}),l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.9971 12C21.9971 17.5228 17.5199 22 11.9971 22C6.47422 22 1.99707 17.5228 1.99707 12C1.99707 6.47715 6.47422 2 11.9971 2C17.5199 2 21.9971 6.47715 21.9971 12ZM12.3554 9.38244C11.3828 9.787 9.43884 10.6243 6.52364 11.8944C6.05025 12.0827 5.80227 12.2669 5.7797 12.4469C5.74155 12.7513 6.12266 12.8711 6.64162 13.0343C6.71222 13.0565 6.78536 13.0795 6.86034 13.1038C7.37092 13.2698 8.05775 13.464 8.4148 13.4717C8.73868 13.4787 9.10017 13.3452 9.49926 13.0711C12.223 11.2325 13.629 10.3032 13.7173 10.2831C13.7796 10.269 13.8659 10.2512 13.9244 10.3032C13.9828 10.3552 13.9771 10.4536 13.9709 10.48C13.9331 10.641 12.4371 12.0318 11.663 12.7515C11.4216 12.9759 11.2505 13.135 11.2155 13.1714C11.1371 13.2528 11.0572 13.3298 10.9804 13.4038C10.506 13.8611 10.1503 14.204 11.0001 14.764C11.4084 15.0331 11.7352 15.2556 12.0612 15.4776C12.4172 15.7201 12.7723 15.9619 13.2317 16.2631C13.3488 16.3398 13.4606 16.4195 13.5695 16.4971C13.9838 16.7925 14.356 17.0579 14.8159 17.0155C15.0831 16.991 15.3591 16.7397 15.4993 15.9903C15.8306 14.2193 16.4817 10.3821 16.6322 8.80081C16.6454 8.66228 16.6288 8.48498 16.6155 8.40715C16.6022 8.32932 16.5744 8.21842 16.4732 8.13633C16.3534 8.03912 16.1684 8.01861 16.0857 8.02C15.7096 8.0267 15.1325 8.22735 12.3554 9.38244Z",stroke:"white",strokeWidth:"2.07951",strokeLinejoin:"round"})})]})]}),m("div",{className:Fh,children:[m("div",{children:["Omix Store Sociedad de Responsabilidad Limitada, dirección legal: 100, avenida Pobediteley, Minsk, 220020, oficina 203. 203",l("br",{}),"En el registro mercantil desde el 23 de junio de 2010"]}),m("div",{className:Vh,children:[l("img",{src:"/assets/belcart-footer.png",alt:"icon"}),l("img",{src:"/assets/visa-footer.png",alt:"icon"}),l("img",{src:"/assets/master-card-footer.png",alt:"icon"}),l("img",{src:"/assets/icon-footer2.png",alt:"icon"})]}),m("div",{children:["2020 - 2022 Omics Store Ltd. ",l("br",{}),"Todos los derechos reservados."]})]})]}):l(Rh,{})})})},V={root:"/",woman:"/mujer",product:"/product",cart:"/cart",checkout:"/checkout",payment:"/payment"},Wh=p`
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
`,Hh=p`

@media (min-width: 1024px) {
  display: none;
 }
`,Qh=p`
  margin: auto;

  @media (max-width: 725px) {
    display: none;
}

@media (min-width: 1000px) {
    white-space: nowrap;
}
`,Yh=p`
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
`,Kh=p`
  display: flex;
  gap: 20px;
  padding: 0rem 1rem;
  height: 18px;
  margin-right: 3rem;

`,Xh=()=>l("nav",{className:Qh,children:m("ul",{className:Yh,children:[l("li",{children:l(Le,{to:V.woman,children:"PARA MUJERES"})}),l("li",{children:l(Le,{to:V.woman,children:"HOMBRE"})}),l("li",{children:l(Le,{to:V.woman,children:"NUEVO"})}),l("li",{children:l(Le,{to:V.woman,children:"COLECCIONES ESPECIALES"})})]})}),pr=()=>m("header",{className:Wh,children:[l("div",{className:Hh,children:l("img",{src:"/assets/shape-lines.png",alt:"menu"})}),l("div",{children:l(Le,{to:V.root,children:l("img",{className:"img_1",src:"/assets/icons/logo.svg",alt:"logo"})})}),l(Xh,{}),m("div",{className:Kh,children:[l("img",{src:"/assets/gallery/shape-2.png",alt:"magnifying glass"}),l("img",{src:"/assets/gallery/shape-hearth.png",alt:"heart"}),l(Le,{to:V.cart,children:l("img",{src:"/assets/gallery/shape.png",alt:"cart"})})]})]}),Zh=p`
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
`,Gh=e=>{const{children:t,className:n}=e;return m("div",{className:yt(Zh,n),children:[m("div",{children:["Importe total del pedido: ",l("span",{children:"169.98 €"})]}),m("div",{children:["Coste de los bienes: ",l("span",{children:"159.98 €"})]}),m("div",{children:["Entrega: ",l("span",{children:"10 €"})]}),m("div",{children:["Importe del descuento: ",l("span",{children:"0 €"})]}),t]})},Jh=p`

  hr {
    display: none;
  }

  @media (min-width: 725px) {

    hr {

      display: unset;
      background: #212429;
      border: 1px solid #212429;
      margin: 1rem 0rem;
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
    padding: 1rem 5rem;

    div {
      padding: 0rem 5rem;
      gap: 150px;
    }
  }
`,Ii=p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
`,qh=p`
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
`,e2=p`
  font-weight: 500;
  border-radius: 48px;
  width: 80%;
  margin: 2rem auto 3rem;
  border: 1px solid #212429;

  cursor: pointer;
  color: #ffffff;
  background: black;
  border-radius: 48px;
`,t2=e=>{const{className:t}=e;return m("div",{className:yt(Jh,t),children:[l("div",{className:Ii,children:"Importe total del pedido"}),m("div",{className:Ii,children:["Coste de los bienes ",l("span",{children:"159.98 €"})]}),m("div",{className:Ii,children:["Entrega ",l("span",{children:"10 €"})]}),m("div",{className:Ii,children:["Importe del descuento ",l("span",{children:"0 €"})]}),l("hr",{}),m("div",{className:qh,children:["Importe total ",l("span",{children:"169,98 €"})]}),l(le,{route:V.payment,className:e2,children:"Pagar"})]})},n2=p`

 margin-top: 60px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;

  }
`,r2=p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: rgba(33, 36, 41, 0.64);
`,i2=p`
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
    padding: 1rem 5rem;
  }
`,o2=p`
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
`,l2=p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #999999;
`,a2=p`
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
`,s2=()=>m("div",{className:n2,children:[m("div",{className:i2,children:[l("div",{className:r2,children:"Inicio / Cesta / Pedidos"}),m("h1",{children:[l("img",{id:"img",src:"/assets/gallery/shape-arrow-left.png",alt:"arrow-left"}),"Pedidos"]}),l("h2",{children:"Datos de contacto"}),m("div",{className:o2,children:[l(Ge,{pl:"Nombre"}),l(Ge,{pl:"Apellido"}),l(Ge,{type:"email",pl:"E-mail"}),l(Ge,{type:"number",pl:"Teléfono"})]}),l("h2",{children:"Dirección de entrega"}),l("p",{children:"España, Madrid, Andrés Mellado, 77"}),l("div",{className:l2,children:"Cambiar dirección"}),m("div",{className:a2,children:[l("h2",{children:"Forma de pago"}),m("div",{children:[l(le,{children:"Pago en línea"}),l(le,{children:"Al recibir"})]})]})]}),l(t2,{})]}),u2=p`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1200px){
  & > div:last-of-type {
    align-self: center;
   }
  }
`,c2=p`

  margin: 2rem 2rem 1rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #212429;

`,d2=p`
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
`,Mn=p`
  width: 176px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  img {
    width: 176px;
  }


    text-align: center;

`,f2=()=>m("div",{className:u2,children:[l("h2",{className:c2,children:"Actual"}),m("div",{className:d2,children:[m("div",{className:Mn,children:[l("img",{src:"/assets/gallery/actual-image1.png",alt:"image"}),"Primavera/verano 2022"]}),m("div",{className:Mn,children:[l("img",{src:"/assets/gallery/actual-image2.png",alt:"image"}),"Elegir un estilista"]}),m("div",{className:Mn,children:[l("img",{src:"/assets/gallery/actual-image3.png",alt:"image"}),"Camisetas"]}),m("div",{className:Mn,children:[l("img",{src:"/assets/gallery/actual-image4.png",alt:"image"}),"Camisas"]}),m("div",{className:Mn,children:[l("img",{src:"/assets/gallery/actual-image5.png",alt:"image"}),"Vestidos"]}),m("div",{className:Mn,children:[l("img",{src:"/assets/gallery/Group8-sale.png",alt:"sale"}),"Sale"]})]})]}),p2=p`
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
`,m2=p`
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
`,h2=p`

  div {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 150%;
    color: #000000;
  }
`,g2=p`
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
`,v2=()=>l("div",{className:p2,children:m("div",{className:m2,children:[m("div",{className:h2,children:[l("p",{children:"ENVÍO GRATUITO EN TODOS LOS PEDIDOS"}),l("div",{children:"COLECCIÓN DE DEPORTES"})]}),l(le,{route:V.woman,className:g2,children:"Me interesa"})]})}),y2=p`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0rem 0.5rem;
  box-sizing: border-box;

`,x2=p`
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 100%;
  color: #212429;
  margin: auto;

`,w2=p`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #212429;
  margin: auto;
`,nc=p`
  position: relative;
  place-self: center;
  justify-self: center;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: #212429;
  text-align: start;
`,C2=p`
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
`,k2=()=>{const e=zt.useMediaQuery({minWidth:"725px"});return m("div",{className:y2,children:[e?m("div",{className:x2,children:["Todos ",l("br",{})," los estilos ",l("br",{})," más actuales"]}):l("div",{className:w2,children:"Hay ropa para todos"}),e?m("div",{className:nc,children:["Encuentra la ropa más actual en nuestra tienda y",l("br",{}),"obtén descuentos en tus compras."]}):l("div",{className:nc,children:"Pague sólo por lo que le convenga y le guste."}),m("div",{className:C2,children:[l(le,{route:V.woman,children:"Para mujeres"}),l(le,{route:V.woman,children:"Para hombres"})]})]})},S2=p`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  height: 100%;

`,E2=p`

  margin: 2rem 2rem 1rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #212429;
`,N2=p`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-left: 2rem;

  a {
    text-decoration: none;
    color: #212429;
  }
`,P2=p`
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
`,$i=p`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  img {
    width: 100%;
    height: 100%;

  }
`,_2=()=>{const e=cr();function t(){return e("/mujer")}return m("div",{className:S2,children:[l("h2",{className:E2,children:"Éxitos de ventas"}),m("div",{className:N2,children:[l(Le,{to:V.woman,children:"Mujeres"}),l(Le,{to:V.woman,children:"Hombres"})]}),m("div",{id:"exito-ventas",className:P2,children:[l(q,{onClick:()=>t(),className:$i,imageUrl:"/assets/gallery/exito-venta1.png",name:"Camiseta",price:"34.95 €"}),l(q,{className:$i,onClick:()=>t(),imageUrl:"/assets/gallery/exito-venta2.png",name:"Vestido",price:"34.95 €"}),l(q,{onClick:()=>t(),imageUrl:"/assets/gallery/exito-venta3.png",className:$i,name:"Vaqueros",price:"80.00 €"}),l(q,{onClick:()=>t(),imageUrl:"/assets/gallery/exito-venta4.png",className:$i,name:"Vestido",price:"179.00 €",offer:"75.00 €"})]})]})},L2=p`
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
`,z2=p`
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
`,M2=()=>m("div",{className:L2,children:[l("div",{children:"@Onix"}),m("div",{className:z2,children:[l("img",{src:"/assets/gallery/omix1.png",alt:"image"}),l("img",{src:"/assets/gallery/omix3.png",alt:"image"}),l("img",{src:"/assets/gallery/omix2.png",alt:"image"}),l("img",{src:"/assets/gallery/omix4.png",alt:"image"}),l("img",{src:"/assets/gallery/omix5.png",alt:"image"}),l("img",{src:"/assets/gallery/omix6.png",alt:"image"}),l("img",{src:"/assets/gallery/omix7.png",alt:"image"}),l("img",{src:"/assets/gallery/omix8.png",alt:"image"})]})]}),j2=p`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: end;

  img {
    width: 100%;
    box-sizing: border-box;
  }
`,T2=p`
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
`,jn=e=>{const{imgUrl:t,text:n,route:r}=e,i=cr();function o(){return i(`${r}`)}return m("div",{onClick:o,className:j2,children:[l("img",{src:t,alt:"image"}),l("div",{className:T2,children:l("h3",{children:n})})]})},R2=p`
  display: flex;
  flex-direction: column;

`,O2=p`
  margin: 1rem 2rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #212429;
`,rc=p`
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
`;const I2=()=>{const e=zt.useMediaQuery({minWidth:"725px"});return m("div",{id:"nuevas-colecciones",className:R2,children:[l("h2",{className:O2,children:"Nuevas colecciones"}),e?m("div",{className:rc,children:[l(jn,{imgUrl:"/assets/gallery/new-collection-desktop1.png",text:"Primavera/Verano 2022",route:V.woman}),l(jn,{imgUrl:"/assets/gallery/new-collection-desktop2.png",text:"Vaqueros",route:V.woman}),l(jn,{imgUrl:"/assets/gallery/new-collection-desktop3.png",text:"Bañadores",route:V.woman})]}):m("div",{className:rc,children:[l(jn,{imgUrl:"/assets/gallery/new-collection1.png",text:"Primavera/Verano 2022",route:V.woman}),l(jn,{imgUrl:"/assets/gallery/new-collection2.png",text:"Vaqueros",route:V.woman}),l(jn,{imgUrl:"/assets/gallery/new-collection3.png",text:"Bañadores",route:V.woman})]})]})},$2=p`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  height: 100%;

`,b2=p`
  margin: 2rem 2rem 1rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #212429;
`,D2=p`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-left: 2rem;

  a {
    text-decoration: none;
    color: #212429;
  }
`,U2=p`
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
`,ic=p`
  @media (max-width: 1024px) {
    display: none;
  }
`,A2=()=>{const e=cr();function t(){e(V.product)}return m("div",{className:$2,children:[l("h2",{className:b2,children:"Nuevo productos"}),m("div",{className:D2,children:[l(Le,{to:V.woman,children:"Mujeres"}),l(Le,{to:V.woman,children:"Hombres"})]}),m("div",{id:"nuevos-productos",className:U2,children:[l(q,{onClick:()=>t(),className:Ft,imageUrl:"/assets/gallery/nuevos-productos1.png",name:"Polo",price:"44.95 €"}),l(q,{className:Ft,onClick:()=>t(),imageUrl:"/assets/gallery/nuevos-productos2.png",name:"Camiseta",price:"25.00 €"}),l(q,{className:Ft,onClick:()=>t(),imageUrl:"/assets/gallery/nuevos-productos3.png",name:"Pantalones deportivos",price:"49.95 €"}),l(q,{className:Ft,onClick:()=>t(),imageUrl:"/assets/gallery/nuevos-productos4.png",name:"Camiseta",price:"27.99 €"}),l(q,{className:Ft,onClick:()=>t(),imageUrl:"/assets/gallery/nuevos-productos6.png",name:"Camisa",price:"25.00 €"}),l(q,{className:yt(Ft,ic),onClick:()=>t(),imageUrl:"/assets/gallery/nuevos-productos7.png",name:"Sudadera",price:"44.99 €"}),l(q,{className:Ft,onClick:()=>t(),imageUrl:"/assets/gallery/nuevos-productos5.png",name:"Juego de camisetas (5 piezas)",price:"75.95 €"}),l(q,{className:yt(Ft,ic),onClick:()=>t(),imageUrl:"/assets/gallery/nuevos-productos8.png",name:"Camiseta",price:"22.99 €"})]})]})},B2=p`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1225px;
  margin: 60px auto;

  hr {
    margin-top: 3rem;
  }
`,F2=p`
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
`,V2=p`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (min-width: 725px) {
    border-radius: 0px 50% 0px 0px;
    width: 40%;
  }
`,Pl=p`
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
`,W2=()=>m("div",{className:B2,children:[m("div",{className:F2,children:[l("img",{className:V2,src:"/assets/gallery/primaryImage2.png",alt:"home-image"}),l(k2,{})]}),l(f2,{}),l(_2,{}),l(le,{route:V.woman,className:Pl,children:"Todos los éxitos"}),l(I2,{}),l(le,{route:V.woman,className:Pl,children:"Todas las colecciones"}),l(A2,{}),l(le,{route:V.woman,className:Pl,children:"Ver todos"}),l(v2,{}),l(M2,{})]}),H2=p`

padding: 0rem 1rem;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 25% 75%;
    #div {
      position: sticky;
      top: 0;
    }
  }
`,Q2=p`
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
`,Y2=p`
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
`;const K2=p`
  margin: 2rem auto 1rem;
  border: solid 1px;
  width: 100%;
  background: #212429;
  color: #ffffff;

`,X2=()=>{const e=cr();function t(){e(V.product)}return m("div",{className:H2,children:[l("div",{id:"div"}),m("div",{children:[l("div",{children:m("div",{className:Q2,children:["Todos los productos",m("div",{children:[m("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("path",{d:"M3.5 3.5H10.5V10.5H3.5V3.5Z",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"}),l("path",{d:"M3.5 13.5H10.5V20.5H3.5V13.5Z",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"}),l("path",{d:"M13.5 3.5H20.5V10.5H13.5V3.5Z",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"}),l("path",{d:"M13.5 13.5H20.5V20.5H13.5V13.5Z",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"})]}),m("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("path",{d:"M0.500001 17.5L0.5 10.5L17.5 10.5V17.5H0.500001Z",stroke:"#B3B3B3",strokeLinecap:"round",strokeLinejoin:"round"}),l("path",{d:"M0.5 7.5L0.5 0.500001L17.5 0.5V7.5L0.5 7.5Z",stroke:"#B3B3B3",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})}),m("div",{className:Y2,children:[l(q,{imageUrl:"/assets/gallery/image-grid1.png",onClick:t,name:"Vaqueros",price:"79.99 €",sizes:"XS M L",colors:"1 Color"}),l(q,{imageUrl:"/assets/gallery/image-grid2.png",onClick:t,name:"Vestido",price:"34.99 €",sizes:"XS M L",colors:"1 Color"}),l(q,{imageUrl:"/assets/gallery/image-grid3.png",onClick:t,name:"Camisa",price:"44.99 €",sizes:"XS M L",colors:"2 Colores"}),l(q,{imageUrl:"/assets/gallery/image-grid4.png",onClick:t,name:"Vestido",price:"59.99 €",sizes:"XS M L",colors:"1 Color"}),l(q,{imageUrl:"/assets/gallery/image-grid5.png",onClick:t,name:"Camiseta",price:"22.99 €",sizes:"XS M L",colors:"17 Colores"}),l(q,{imageUrl:"/assets/gallery/image-grid6.png",onClick:t,name:"Pantalones cortos",price:"54.99 €",sizes:"XS M L",colors:"2 Colores"}),l(q,{imageUrl:"/assets/gallery/image-grid7.png",onClick:t,name:"Vaqueros",price:"79.99 €",sizes:"XS M L",colors:"1 Color"}),l(q,{imageUrl:"/assets/gallery/image-grid8.png",onClick:t,name:"Pantalones cortos",price:"54.99 €",sizes:"XS M L",colors:"17 Colores"}),l(q,{imageUrl:"/assets/gallery/image-grid9.png",onClick:t,name:"Vaqueros",price:"79.99 €",sizes:"XS M L",colors:"2 Colores"}),l(q,{imageUrl:"/assets/gallery/image-grid10.png",onClick:t,name:"Vestido",price:"34.99 €",sizes:"XS M L",colors:"1 Color"}),l(q,{imageUrl:"/assets/gallery/image-grid11.png",onClick:t,name:"Pantalones cortos",price:"34.99 €",sizes:"XS M L",colors:"17 Colores"}),l(q,{imageUrl:"/assets/gallery/image-grid12.png",onClick:t,name:"Camiseta",price:"79.99 €",sizes:"XS M L",colors:"2 Colores"})]}),l(le,{className:K2,children:"Los 12 productos siguientes"})]})]})},Z2=p`
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
`,oc=()=>m("div",{className:Z2,children:[l("img",{src:"/assets/gallery/box-images1.png",alt:"image"}),l("img",{src:"/assets/gallery/box-images2.png",alt:"image"}),l("img",{src:"/assets/gallery/box-images3.png",alt:"image"}),l("img",{src:"/assets/gallery/box-images4.png",alt:"image"})]}),G2=p`
  display: flex;
  flex-direction: column;
  gap: 3px;

  a {
    text-decoration: none;
    color: #212429;
  }
`,Nt=e=>{const{onClick:t,toggleIcon:n,h2:r,text1:i="Ver todos",text2:o="Éxitos de ventas",text3:a="Nueva colección",text4:s="nuevos productos"}=e;return m("div",{onClick:t,children:[m("h2",{children:[r,l("img",{src:`/assets/gallery/icon-${n?"plus":"minus"}.png`,alt:"icon"})]}),n&&m("ul",{className:G2,children:[l("li",{children:i}),l("li",{children:l(Le,{to:"/#exito-ventas",children:o})}),l("li",{children:l(Le,{to:"/#nuevas-colecciones",children:a})}),l("li",{children:l(Le,{to:"/#nuevos-productos",children:s})})]})]})},J2=p`
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
`,q2=p`
  display: flex;
  align-items: center;
  img {
    width: 16px;
    height: 14px;
  }
`,eg=p`
  display: flex;
  align-items: center;

  img {
    width: 16px;
    height: 18px;
  }
`,tg=p`
  display: grid;
  grid-template-columns: 25% 75%;

  @media (max-width: 1024px) {
    display: unset;
  }
`,ng=p`
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
`,lc=p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: rgba(33, 36, 41, 0.64);
  margin-left: 1rem;
`,rg=()=>{const e=zt.useMediaQuery({maxWidth:"725px"}),[t,n]=ct.useState({img1:!0,img2:!1,img3:!1,img4:!1,img5:!1});function r(i){n(o=>({...o,[i]:!o[i]}))}return l("div",{children:e?m("div",{children:[l("div",{className:lc,children:"Inicio/Mujer"}),m("div",{className:J2,children:[m("div",{className:q2,children:[l("img",{src:"/assets/gallery/shape-arrow-left.png",alt:"arrow"}),"Ropa de mujer"]}),l("div",{className:eg,children:l("img",{src:"/assets/gallery/shape-aside-1.png",alt:"settings"})})]}),l(oc,{})]}):m("div",{className:tg,children:[l("div",{children:m("aside",{className:ng,children:[l(Nt,{h2:"Mujeres",toggleIcon:t.img1,onClick:()=>r("img1")}),l(Nt,{h2:"Hombres",toggleIcon:t.img2,onClick:()=>r("img2")}),l(Nt,{h2:"Accesorios",toggleIcon:t.img3,onClick:()=>r("img3")}),l(Nt,{h2:"Colecciones",toggleIcon:t.img4,onClick:()=>r("img4")}),l(Nt,{h2:"Acciones",toggleIcon:t.img5,onClick:()=>r("img5")})]})}),m("div",{children:[l("div",{className:lc,children:"Inicio/Mujer"}),l(oc,{})]})]})})},ig=p`

 margin-top: 60px;
 scroll-behavior: initial;

`,og=()=>m("div",{className:ig,children:[l(rg,{}),l(X2,{})]}),lg=p`
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
`,ag=p`
  grid-area: num;

  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 64px;
  text-transform: capitalize;
  color: #212429;
`,sg=p`
  grid-area: texto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #212429;
`,ug=p`
  grid-area: stars;
`,cg=p`
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
`,Sr=p`
  height: 3px;
  background-color: #d9d9d9;
  border-radius: 18px;
  width: 160px;
`,ac=p`
  height: 100%;
  width: 50%;
  background: #212429;
  border-radius: 18px;
`,_l=p`
  height: 100%;
  width: 0%;
  background: #212429;
  border-radius: 18px;
`,dg=()=>m("div",{className:lg,children:[l("div",{className:ag,children:"4.5"}),l("div",{className:sg,children:"basados en 2 opiniones"}),m("div",{className:ug,children:[l("img",{src:"/assets/gallery/star.png",alt:"reviews"}),l("img",{src:"/assets/gallery/star.png",alt:"reviews"}),l("img",{src:"/assets/gallery/star.png",alt:"reviews"}),l("img",{src:"/assets/gallery/star.png",alt:"reviews"}),l("img",{src:"/assets/star-half-color.png",alt:"reviews"})]}),m("div",{className:cg,children:[m("div",{children:["5",l("div",{className:Sr,children:l("div",{className:ac})}),l("p",{children:"50%"})]}),m("div",{children:["4",l("div",{className:Sr,children:l("div",{className:ac})}),l("p",{children:"50%"})]}),m("div",{children:["3",l("div",{className:Sr,children:l("div",{className:_l})}),l("p",{children:"0%"})]}),m("div",{children:["2",l("div",{className:Sr,children:l("div",{className:_l})}),l("p",{children:"0%"})]}),m("div",{children:["1",l("div",{className:Sr,children:l("div",{className:_l})}),l("p",{children:"0%"})]})]})]}),fg=p`
  margin: 2rem auto 0rem;

  img {
    max-width: 104px;
  }

  @media (min-width: 725px) {
    img {
      max-width: 200px;
    }
  }
`,pg=p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #212429;
`,mg=p`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 20vw;
  }
`,hg=p`
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
`,sc=p`
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
`,uc=p`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;
`,cc=p`
  margin: 0.5rem 0rem;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;
`,dc=p`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;

  color: #878787;
`,fc=()=>m("div",{className:fg,children:[l("div",{className:pg,children:"Reseñas"}),l("br",{}),m("div",{className:mg,children:[l("div",{children:l(le,{className:hg,children:"Deja tu opinión"})}),l(dg,{})]}),m("div",{children:[m("div",{className:sc,children:["Ludmilla ",l("div",{children:"Hoy, 13.54"})]}),m("div",{className:uc,children:[m("div",{children:[l("img",{src:"/assets/gallery/star.png",alt:"reviews"}),l("img",{src:"/assets/gallery/star.png",alt:"reviews"}),l("img",{src:"/assets/gallery/star.png",alt:"reviews"}),l("img",{src:"/assets/gallery/star.png",alt:"reviews"}),l("img",{src:"/assets/gallery/star.png",alt:"reviews"})]}),l("div",{children:"Color: blanco"}),l("div",{children:"Talla: M"})]}),l("div",{className:cc,children:"Tejido agradable, ajuste perfecto. En la cintura. Color negro. Se ajusta perfectamente a la talla M."}),l("img",{src:"/assets/gallery/opinion-image1.png",alt:"reviewer"}),m("div",{className:dc,children:[l("div",{children:"Quejarse de la revision"}),l("div",{children:"Respuesta"})]})]}),m("div",{children:[m("div",{className:sc,children:["Elena ",l("div",{children:"4 Junio, 16.54"})]}),m("div",{className:uc,children:[m("div",{children:[l("img",{src:"/assets/gallery/star.png",alt:"reviews"}),l("img",{src:"/assets/gallery/star.png",alt:"reviews"}),l("img",{src:"/assets/gallery/star.png",alt:"reviews"}),l("img",{src:"/assets/gallery/star.png",alt:"reviews"}),l("img",{src:"/assets/gallery/star-white.png",alt:"reviews"})]}),l("div",{children:"Color: blanco"}),l("div",{children:"Talla: M"})]}),l("div",{className:cc,children:"Buenos vaqueros, la calidad en general es satisfactoria, la única pega es que son un poco cortos"}),l("img",{src:"/assets/gallery/opinion-image2.png",alt:"reviewer"}),m("div",{className:dc,children:[l("div",{children:"Quejarse de la revision"}),l("div",{children:"Respuesta"})]})]})]}),gg=p`
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
`,vg=p`
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
`,yg=p`
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
`,xg=p`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,wg=p`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 50px;
  margin-bottom: 1rem;
`,Cg=p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  font-variant: small-caps;
  width: 70%;
  color: #212429;
`,kg=p`
  margin: 1rem 0rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  font-variant: small-caps;
  color: #212429;
`,Sg=p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;
  max-height: 135px;
  box-sizing: border-box;
`,Eg=p`
  margin: 1rem 0rem;

  img {
    margin: 0.2rem 0rem;
    max-width: 80px;
  }
`,Ng=p`
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
`,Pg=p`
  display: flex;
  flex-direction: row;
  margin: auto;
  gap: 20px;
  margin-top: 1rem;
`,_g=p`
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
`,Lg=p`
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
`,Xf=e=>{const{className:t,onClick:n}=e;return l("div",{className:yt(gg,t),children:m("div",{className:vg,children:[l("img",{id:"img",src:"/assets/image-popup1.png",alt:"image"}),m("div",{children:[m("div",{className:yg,children:[l("button",{onClick:n,children:l("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M17.75 2.0125L15.9875 0.25L9 7.2375L2.0125 0.25L0.25 2.0125L7.2375 9L0.25 15.9875L2.0125 17.75L9 10.7625L15.9875 17.75L17.75 15.9875L10.7625 9L17.75 2.0125Z",fill:"#212429"})})}),l("p",{children:"2 comentarios"}),m("div",{className:xg,children:[l("img",{src:"/assets/gallery/shape-hearth.png",alt:"heart"}),l("img",{src:"/assets/gallery/shareIcon.png",alt:"share"})]})]}),m("div",{className:wg,children:[l("img",{src:"/assets/gallery/star.png",alt:"star"}),l("img",{src:"/assets/gallery/star.png",alt:"star"}),l("img",{src:"/assets/gallery/star.png",alt:"star"}),l("img",{src:"/assets/gallery/star.png",alt:"star"}),l("img",{src:"/assets/gallery/star.png",alt:"star"})]}),l("div",{className:Cg,children:"Vestido negro de lunares"}),l("div",{className:kg,children:"79.99 €"}),l("div",{className:Sg,children:"Precioso vestido femenino de silueta en tejido de popelina. Las mangas cortas alargadas se fruncen en la banda elástica. El cinturón en la cintura acentúa la feminidad de la figura. El bajo del vestido es un volante ancho con un fruncido ondulado."}),m("div",{className:Eg,children:[l("p",{children:" Lunares blancos y negros"}),m("div",{children:[l("img",{src:"/assets/image-popup2.png",alt:"image"}),l("img",{src:"/assets/image-popup3.png",alt:"image"})]})]}),m("div",{className:Ng,children:["Talla:",m("div",{children:[l("div",{children:"XS"}),l("div",{children:"S"}),l("div",{children:"M"}),l("div",{children:"L"})]})]}),m("div",{className:Pg,children:[m(le,{className:_g,children:[l("img",{src:"/assets/gallery/icon-minus.png",alt:"icon"}),"1",l("img",{src:"/assets/gallery/icon-plus.png",alt:"icon"})]}),m(le,{className:Lg,route:V.cart,children:[l("img",{src:"/assets/gallery/cartIcon.png",alt:"image"}),"  En cesta"]})]})]})]})})},zg=p`
 display: flex;
 flex-direction: column;
 margin-top: 1rem;
`,Mg=p`
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
`,jg=p`
  display: none;
`,Tg=p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #212429;
`,bi=p`
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
`;const pc=()=>{const e=zt.useMediaQuery({maxWidth:"1066px"}),[t,n]=ct.useState(!1),r=()=>{e||n(!0)};return m("div",{className:zg,children:[l("div",{className:Tg,children:"Comprar con este producto"}),m("div",{className:Mg,children:[l(Xf,{onClick:()=>{n(!1)},className:yt({[jg]:!t})}),l(q,{onClick:r,className:bi,showIcon:!1,imageUrl:"/assets/gallery/images-grid-product1.png",name:"Vaqueros",price:"59.99 €",colors:"1 Color",sizes:"XS S M L"}),l(q,{onClick:r,className:bi,showIcon:!1,imageUrl:"/assets/gallery/images-grid-product2.png",name:"Vaqueros",price:"22.99 €",colors:"17 Colores",sizes:"XS S M L"}),l(q,{onClick:r,showIcon:!1,className:bi,imageUrl:"/assets/gallery/images-grid-product3.png",name:"Vaqueros",price:"54.99 €",colors:"2 Colores",sizes:"XS S M L"}),l(q,{onClick:r,showIcon:!1,className:bi,imageUrl:"/assets/gallery/images-grid-product4.png",name:"Pantalones cortos",price:"22.99 €",sizes:"XS M L",colors:"17 Colores"})]})]})},Rg=p`
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
`,Di=p`
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
`;const mc=()=>{const e=zt.useMediaQuery({maxWidth:"1066px"}),[t,n]=ct.useState(!1),r=()=>{e||n(!0)};return m("div",{className:Rg,children:[l("div",{className:$g,children:"Productos similares"}),m("div",{className:Og,children:[l(Xf,{onClick:()=>{n(!1)},className:yt({[Ig]:!t})}),l(q,{onClick:r,showIcon:!1,className:Di,imageUrl:"/assets/gallery/images-grid-product4.png",name:"Pantalones cortos",price:"22.99 €",sizes:"XS M L",colors:"17 Colores"}),l(q,{onClick:r,showIcon:!1,className:Di,imageUrl:"/assets/gallery/images-grid-product5.png",name:"Camiseta",price:"59.99 €",sizes:"XS S M L",colors:"1 Color"}),l(q,{onClick:r,showIcon:!1,className:Di,imageUrl:"/assets/gallery/images-grid-product1.png",name:"Vaqueros",price:"59.99 €",colors:"1 Color",sizes:"XS S M L"}),l(q,{onClick:r,showIcon:!1,className:Di,imageUrl:"/assets/gallery/images-grid-product6.png",name:"Camiseta",price:"59.99 €",colors:"1 Color",sizes:"XS S M L"})]})]})},bg=p`
  padding: 0rem 1rem;

  @media (min-width: 1024px) {
    padding-left: 25%;
  }
`,Dg=p`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #000000;
`,hc=p`
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
`,Ll=p`
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
`,gc=p`
  margin: 2rem auto 1rem;
  border: solid 1px;
  width: 100%;
  background: #212429;
  color: #ffffff;

`,Ug=()=>{const e=zt.useMediaQuery({maxWidth:"1024px"});return l("div",{className:bg,children:e?m(Dr,{children:[m("div",{className:Dg,children:["Descripión",l("svg",{width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),m("div",{className:hc,children:[l("img",{src:"/assets/gallery/iconoir_delivery-truck.png",alt:"icon"}),m("div",{children:["Por mensajero a domicilio - a partir de 50 € gratis.",l("br",{}),"Montaje antes de la compra en 15 minutos"]})]}),m("div",{className:hc,children:[l("img",{src:"/assets/gallery/iconoir_delivery.png",alt:"icon"}),l("div",{children:"Belarus Post - a partir de 50 € gratis. Sin la posibilidad de encajar"})]}),l("hr",{}),l(fc,{}),l(pc,{}),l(mc,{}),l(le,{className:gc,children:"Los 12 productos siguientes"})]}):m(Dr,{children:[m("div",{children:[m("div",{className:Ll,children:[l("div",{children:"Descripción"}),m("p",{children:["Vaqueros blancos en denim de algodón de alta calidad (corte recto). El modelo largo es perfecto para las chicas más altas. Corte de talle alto. Pantalón acabado con elegantes rotos. Excelente modelo de vaqueros, que ayudará a crear imágenes de actualidad en estilo casual. Recomendado.",l("br",{}),"La altura de la modelo de la foto es de 179 cm.",l("br",{}),"La mayoría de las veces, la modelo elige ropa de la talla S."]})]}),m("div",{className:Ll,children:[l("div",{children:"Composición"}),l("p",{children:"100% algodón"})]}),m("div",{className:Ll,children:[l("div",{children:"Características"}),l("p",{children:"País de producción: China"})]})]}),l("hr",{}),l(fc,{}),l(pc,{}),l(mc,{}),l(le,{className:gc,children:"Los 12 productos siguientes"})]})})},Ag=p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  `,Bg=p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: rgba(33, 36, 41, 0.64);
`,Fg=p`
  display: grid;
  grid-template-rows: 1fr auto;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #212429;

  `,Vg=p`

 display: flex;
 flex-direction: row;
 justify-content: space-between;

 `,Wg=p`

  display: flex;
  flex-direction: column;
  justify-content: center;

  div {

    display: flex;
    flex-direction: row;
    gap: 5px;
  }
`,Hg=p`
  width: 100%;
  margin: auto;
`,Qg=p`

 justify-content: space-around;

  img {
    width: 30%;
  }
`,Yg=p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem auto;
`,vc=p`
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
`,Kg=p`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  width: 100%;

`,Xg=p`
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
`,Zg=p`
  margin-right: 3rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  text-align: right;
  color: #000000;

`,Gg=p`
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
`,Jg=()=>l(Dr,{children:m("div",{className:Ag,children:[l("div",{className:Bg,children:"Inicio/Mujer/Ropa de mujer/Vaqueros"}),m("div",{className:Fg,children:[l("h2",{children:" Vaqueros largos rectos en blanco"}),m("div",{className:Vg,children:[m("div",{children:[l("img",{src:"/assets/gallery/star.png",alt:"star"}),l("img",{src:"/assets/gallery/star.png",alt:"star"}),l("img",{src:"/assets/gallery/star.png",alt:"star"}),l("img",{src:"/assets/gallery/star.png",alt:"star"}),l("img",{src:"/assets/gallery/star.png",alt:"star"})]}),m("div",{children:[l("img",{src:"/assets/gallery/shape-hearth.png",alt:"hearth"}),"  ",l("img",{src:"/assets/gallery/shareIcon.png",alt:"share"})]})]})]}),m("div",{className:Wg,children:[l("img",{className:Hg,src:"/assets/gallery/product-image1.png",alt:"image"}),l("br",{}),m("div",{className:Qg,children:[l("img",{src:"/assets/gallery/product-image2.png",alt:"image"}),l("img",{src:"/assets/gallery/product-image3.png",alt:"image"}),l("img",{src:"/assets/gallery/product-image4.png",alt:"image"})]}),m("div",{className:Yg,children:[m("div",{className:vc,children:["Color",l("svg",{width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),m("div",{className:vc,children:["XS",l("svg",{width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M0.833344 1.33325L5.00001 5.49992L9.16668 1.33325",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),m("div",{className:Kg,children:[m(le,{className:Xg,route:V.cart,children:[l("img",{src:"/assets/gallery/icon-minus.png",alt:"icon"}),"1",l("img",{src:"/assets/gallery/icon-plus.png",alt:"icon"})]}),l("div",{className:Zg,children:"79.99 €"})]}),m(le,{className:Gg,route:V.cart,children:[l("img",{src:"/assets/gallery/cartIcon.png",alt:"image"}),"  En cesta"]})]})]})});p`
  display: grid;
  grid-template-columns: 25% 75%;
`;const qg=p`
  display: grid;
  grid-template-columns: 25% 75%;
`,e4=p`

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
`,t4=p`
  div {
    margin: 0.5rem 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,n4=p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: rgba(33, 36, 41, 0.64);
`,r4=p`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,i4=p`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;

`,o4=p`
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
`,l4=p`
  margin: 1rem 0rem;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #212429;
`,a4=p`
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
`,s4=p`
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
`,yc=p`
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
`,u4=p`
  display: flex;
  flex-direction: row;
  margin: auto;
  gap: 20px;
`,c4=p`
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
`,d4=p`
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
`,f4=()=>{const[e,t]=ct.useState({img1:!0,img2:!1,img3:!1,img4:!1,img5:!1});function n(r){t(i=>({...i,[r]:!i[r]}))}return m("div",{className:qg,children:[m("aside",{className:e4,children:[l(Nt,{h2:"Mujeres",toggleIcon:e.img1,onClick:()=>n("img1")}),l(Nt,{h2:"Hombres",toggleIcon:e.img2,onClick:()=>n("img2")}),l(Nt,{h2:"Accesorios",toggleIcon:e.img3,onClick:()=>n("img3")}),l(Nt,{h2:"Colecciones",toggleIcon:e.img4,onClick:()=>n("img4")}),l(Nt,{h2:"Acciones",toggleIcon:e.img5,onClick:()=>n("img5")})]}),m("div",{className:i4,children:[m("div",{className:t4,children:[l("div",{className:n4,children:"Inicio/Mujer/Ropa de mujer/Vaqueros"}),l("img",{src:"/assets/gallery/primaryImage.png",alt:"image"})," ",l("br",{}),m("div",{children:[l("img",{src:"/assets/gallery/small-image-second-page1.png",alt:"image"}),l("img",{src:"/assets/gallery/small-image-second-page2.png",alt:"image"}),l("img",{src:"/assets/gallery/small-image-second-page3.png",alt:"image"})]})]}),m("div",{className:r4,children:[m("div",{children:[l("img",{src:"/assets/gallery/star.png",alt:"star"}),l("img",{src:"/assets/gallery/star.png",alt:"star"}),l("img",{src:"/assets/gallery/star.png",alt:"star"}),l("img",{src:"/assets/gallery/star.png",alt:"star"}),l("img",{src:"/assets/gallery/star.png",alt:"star"})]}),m("div",{className:o4,children:[l("h2",{children:" Vaqueros largos rectos en blanco"}),m("div",{children:[l("img",{src:"/assets/gallery/shape-hearth.png",alt:"hearth"}),"  ",l("img",{src:"/assets/gallery/shareIcon.png",alt:"star"})]})]}),l("div",{className:l4,children:"79.99 €"}),m("div",{className:a4,children:["Color:",l("div",{})]}),l("br",{}),m("div",{className:s4,children:["Talla:",m("div",{children:[l("div",{children:"XS"}),l("div",{children:"S"}),l("div",{children:"M"}),l("div",{children:"L"})]})]}),m("div",{className:yc,children:[l("img",{src:"/assets/gallery/iconoir_delivery-truck.png",alt:"icon"}),l("div",{children:"Por mensajero a domicilio - a partir de 50 € gratis. Montaje antes de la compra en 15 minutos"})]}),m("div",{className:yc,children:[l("img",{src:"/assets/gallery/iconoir_delivery.png",alt:"icon"}),l("div",{children:"Belarus Post - a partir de 50 € gratis. Sin la posibilidad de encajar"})]}),m("div",{className:u4,children:[m(le,{className:c4,route:V.cart,children:[l("img",{src:"/assets/gallery/icon-minus.png",alt:"icon"}),"1",l("img",{src:"/assets/gallery/icon-plus.png",alt:"icon"})]}),m(le,{className:d4,route:V.cart,children:[l("img",{src:"/assets/gallery/cartIcon.png",alt:"image"}),"  En cesta"]})]})]})]})]})},p4=p`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`,m4=()=>{const e=zt.useMediaQuery({maxWidth:"1024px"});return l("div",{className:p4,children:e?l(Jg,{}):l(f4,{})})},h4=p`

 margin-top: 60px;
`,g4=()=>m("div",{className:h4,children:[l(m4,{}),l(Ug,{})]}),v4=p`

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

`,y4=p`

  grid-area: img;
  max-width: 104px;

  @media (min-width: 725px) {

    max-width: 200px;
  }
`,x4=p`
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
`,w4=p`
  grid-area: price;
  justify-self: end;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  color: #212429;
`,C4=p`
  grid-area: bin;
  justify-self: end;

  @media (min-width: 725px) {
    margin-right: 1rem;
  }
`,k4=p`

  grid-area: btn;
  justify-self: end;

`,S4=p`
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

`,xc=e=>{const{article:t,routeImg:n,text1:r,text2:i,numArticle:o,price:a}=e;return m("div",{className:v4,children:[l("img",{className:y4,src:`/assets/gallery/${n}`,alt:"image"}),m("div",{className:x4,children:[l("h3",{children:t}),m("h3",{children:["Color: ",l("span",{children:r})]}),m("h3",{children:["Talla: ",l("span",{children:i})]}),m("h3",{children:["Cantidad: ",l("span",{children:o})]})]}),m("h4",{className:w4,children:[a," €"]}),l("svg",{className:C4,width:"20",height:"22",viewBox:"0 0 20 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M7.857 4.14244H12.1427C12.1427 3.57412 11.917 3.02907 11.5151 2.62721C11.1132 2.22535 10.5682 1.99958 9.99986 1.99958C9.43154 1.99958 8.8865 2.22535 8.48463 2.62721C8.08277 3.02907 7.857 3.57412 7.857 4.14244V4.14244ZM6.57129 4.14244C6.57129 3.23312 6.93251 2.36105 7.57549 1.71807C8.21848 1.07509 9.09055 0.713867 9.99986 0.713867C10.9092 0.713867 11.7812 1.07509 12.4242 1.71807C13.0672 2.36105 13.4284 3.23312 13.4284 4.14244H18.7856C18.9561 4.14244 19.1196 4.21017 19.2401 4.33073C19.3607 4.45129 19.4284 4.6148 19.4284 4.7853C19.4284 4.95579 19.3607 5.11931 19.2401 5.23986C19.1196 5.36042 18.9561 5.42815 18.7856 5.42815H17.6627L16.6196 17.945C16.5437 18.8556 16.1284 19.7044 15.456 20.3231C14.7836 20.9418 13.9033 21.2852 12.9896 21.2853H7.01015C6.09643 21.2852 5.21609 20.9418 4.54372 20.3231C3.87135 19.7044 3.45604 18.8556 3.38015 17.945L2.337 5.42815H1.21415C1.04365 5.42815 0.880137 5.36042 0.759577 5.23986C0.639018 5.11931 0.571289 4.95579 0.571289 4.7853C0.571289 4.6148 0.639018 4.45129 0.759577 4.33073C0.880137 4.21017 1.04365 4.14244 1.21415 4.14244H6.57129ZM4.66157 17.8379C4.71059 18.4271 4.97925 18.9763 5.41427 19.3768C5.84929 19.7772 6.4189 19.9995 7.01015 19.9996H12.9896C13.5808 19.9995 14.1504 19.7772 14.5854 19.3768C15.0205 18.9763 15.2891 18.4271 15.3381 17.8379L16.3736 5.42815H3.627L4.66157 17.8379ZM8.07129 8.42815C8.24179 8.42815 8.4053 8.49588 8.52586 8.61644C8.64642 8.737 8.71415 8.90051 8.71415 9.07101V16.3567C8.71415 16.5272 8.64642 16.6907 8.52586 16.8113C8.4053 16.9319 8.24179 16.9996 8.07129 16.9996C7.90079 16.9996 7.73728 16.9319 7.61672 16.8113C7.49616 16.6907 7.42843 16.5272 7.42843 16.3567V9.07101C7.42843 8.90051 7.49616 8.737 7.61672 8.61644C7.73728 8.49588 7.90079 8.42815 8.07129 8.42815ZM12.5713 9.07101C12.5713 8.90051 12.5036 8.737 12.383 8.61644C12.2624 8.49588 12.0989 8.42815 11.9284 8.42815C11.7579 8.42815 11.5944 8.49588 11.4739 8.61644C11.3533 8.737 11.2856 8.90051 11.2856 9.07101V16.3567C11.2856 16.5272 11.3533 16.6907 11.4739 16.8113C11.5944 16.9319 11.7579 16.9996 11.9284 16.9996C12.0989 16.9996 12.2624 16.9319 12.383 16.8113C12.5036 16.6907 12.5713 16.5272 12.5713 16.3567V9.07101Z",fill:"#212429"})}),l("div",{className:k4,children:m(le,{className:S4,route:"/cart",children:[l("img",{src:"/assets/gallery/icon-minus.png",alt:"icon"}),"1",l("img",{src:"/assets/gallery/icon-plus.png",alt:"icon"})]})})]})},E4=p`
  padding: 1rem;


  h2 {
    padding-bottom: 1rem;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    color: #212429;

  }
`,N4=p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: rgba(33, 36, 41, 0.64);
`,P4=p`

  width: 100%;

  @media (min-width: 1024px) {

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10%;
  }
`,_4=p`
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
`,L4=p`
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
`,z4=p`
  margin: 1rem 0rem;
  padding-left: 0.2rem;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #212429;
  outline: none;
`,M4=p`

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
`,j4=p`
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
`,T4=p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0rem;
`,R4=p`
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
`,O4=()=>m("div",{className:E4,children:[l("div",{className:N4,children:"Inicio / Cesta"}),l("h2",{children:"Cesta"}),m("div",{className:P4,children:[m("div",{children:[l(xc,{article:"Vaqueros blancos",routeImg:"cesta2.png",text1:"Blanco",text2:"XS",numArticle:1,price:79.99}),l("br",{}),l(xc,{article:"Vestido",routeImg:"cesta1.png",text1:"Flores",text2:"XS",numArticle:1,price:79.99})]}),m("div",{className:_4,children:[l("h2",{children:"Código promocional"}),m("form",{children:[m("div",{className:L4,children:[l("input",{className:z4,required:!0,placeholder:"Introduzca el código",type:"text"}),l("button",{title:"enter-code",type:"submit",className:M4,children:l("svg",{width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M1 11L6 6L1 1",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),m("div",{className:j4,children:[l("h3",{children:"Importe del pedido"}),m("div",{children:["Coste de los bienes ",l("span",{children:"159,97 €"})]}),m("div",{children:["Entrega ",l("span",{children:"10 €"})]}),m("div",{children:["Importe del descuento ",l("span",{children:"0 €"})]})]}),l("hr",{}),m("div",{className:T4,children:["Importe total ",l("span",{children:"0 €"})]}),l(le,{route:V.checkout,className:R4,children:"Pagar"})]})]})]})]}),I4=p`

padding: 0rem 1rem;

& > :first-child{
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    font-variant: small-caps;
    color: #000000;
  }

`,wc=p`

 img {
  width: 24px;
 }
`,$4=p`
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
`,b4=p`

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
`,D4=p`
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
`,U4=p`
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
`,A4=()=>m("div",{className:I4,children:[l("div",{children:"Entrega"}),m("div",{className:$4,children:[m(le,{className:wc,children:[l("img",{src:"/assets/gallery/delivery-icon.png",alt:"delivery-icon"}),"  Envío"]}),m(le,{className:wc,children:[l("img",{src:"/assets/gallery/mail-icon.png",alt:"mail-icon"}),"  Correo"]})]}),m("div",{className:b4,children:[l("div",{children:"Probar antes de comprar.Plazo de entrega 2-7 días."}),l("div",{children:"¿Dónde quiere que le entreguemos su pedido?"}),l("div",{children:"Introduzca su dirección en el mapa o introduzca datos."})]}),m("div",{className:D4,children:[l("img",{src:"/assets/gallery/fi_map-pin.png",alt:"icon"}),"  ",l("span",{children:"Localizar envío"})]}),m("div",{className:U4,children:[l(Ge,{pl:"Ciudad o población"}),l(Ge,{pl:"Calle"}),l(Ge,{type:"number",pl:"Número"}),l(Ge,{pl:"Piso"})]})]}),B4=p`

margin-top: 60px;

  @media (min-width: 1024px) {
    padding: 0rem 3rem;
  }
`,F4=p`
  @media (min-width: 1024px) {
    display: none;
  }
`,V4=p`
  font-weight: 500;
  margin: 2rem auto 3rem;
  width: 100%;
  border-radius: 48px;
  cursor: pointer;
  border: 1px solid #212429;
  border-radius: 48px;
  color: #ffffff;
   background: #212429;

`,W4=()=>m("div",{className:B4,children:[l(O4,{}),l(A4,{}),l(Gh,{className:F4,children:l(le,{route:V.checkout,className:V4,children:"Ir al carrito"})})]}),H4=p`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  scroll-margin-top: 70px;

  hr {
    border: 1px solid #b6b6b6;
  }
`,Q4=p`
  margin-top: 5rem;
`,Y4=()=>{const e=()=>{window.scrollTo(0,0)};return ct.useEffect(()=>{const t=window.location.hash.substring(1),n=document.getElementById(t);n?n.scrollIntoView({behavior:"smooth"}):e()},[]),m("div",{className:H4,children:[l(pr,{}),l(W2,{}),l("hr",{className:Q4}),l(zs,{}),l(fr,{})]})},K4=p`
  display: flex;
  flex-direction: column;

  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  hr {
    border: 1px solid #b6b6b6;
  }
  `,X4=p`
  margin-top: 3rem;
`,Z4=()=>{const e=()=>{window.scrollTo(0,0)};return ct.useEffect(()=>{e()},[]),m("div",{className:K4,children:[l(pr,{}),l(og,{}),l("hr",{className:X4}),l(zs,{}),l(fr,{})]})},G4=p`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  overflow: hidden;
  box-sizing: border-box;

  hr {
    border: 1px solid #b6b6b6;
  }
`,J4=p`
 margin-top: 1rem;
`;p`
  margin: 2rem auto 1rem;
  border: solid 1px;
  width: 80%;

  &:hover {
    background-color: #212429;
    color: #ffffff;
    border: 0;
  }
`;const q4=()=>{const e=()=>{window.scrollTo(0,0)};return ct.useEffect(()=>{e()},[]),m("div",{className:G4,children:[l(pr,{}),l(g4,{}),l("hr",{className:J4}),l(zs,{}),l(fr,{})]})},ev=p`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  hr {
    border: 1px solid #b6b6b6;
  }

`,tv=()=>{const e=()=>{window.scrollTo(0,0)};return ct.useEffect(()=>{e()},[]),m("div",{className:ev,children:[l(pr,{}),l(W4,{}),l(fr,{})]})},nv=p`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`,rv=()=>{const e=()=>{window.scrollTo(0,0)};return ct.useEffect(()=>{e()},[]),m("div",{className:nv,children:[l(pr,{}),l(s2,{}),l(fr,{})]})},iv=p`
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
`,ov=p`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 5rem;
`,lv=p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: rgba(33, 36, 41, 0.64);
`,av=p`
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
`,sv=p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #999999;
  margin-bottom: 2rem;
`,uv=p`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`,cv=p`
  position: relative;
  right: 1.2rem;
  z-index: 4;
  width: 85%;

  @media (min-width: 1024px) {
    width: 80%;
  }
`,dv=p`
  position: absolute;
  right: 3%;
  top: 25%;
  z-index: 3;
  width: 82%;

  @media (min-width: 1024px) {
   width: 77%
  }
`,fv=p`
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
`,pv=p`

  display: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
`,mv=p`
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
`,hv=p`
  display: grid;
  grid-template-areas:
    'input1 input1 input1 input1'
    'input2 input2 input2 input2'
    'input3 input4 input5 input5';

  box-sizing: content-box;
  width: 100%;

  grid-row-gap: 10px;
`,gv=p`

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
`,vv=p`
  padding-left: 0.3rem;
  width: 312px;
  height: 48px;

  @media (min-width: 1024px) {
    width: 384px;
  }
`,yv=p`
  grid-area: input2;
  width: 100%;
  `,xv=p`
  padding-left: 0.3rem;
  width: 312px;
  height: 48px;

  @media (min-width: 1024px) {
    width: 384px;
  }
`,wv=p`

  grid-area: input3;
  display: flex;
  align-items: center;
  width: 100%;

  & :last-child {
    position: relative;
    right: 1.5rem;
  }
`,Cv=p`
  width: 72px;
  height: 48px;
  padding: 0.5rem;

  @media (min-width: 1024px) {
    width: 112px;
  }
`,kv=p`

  grid-area: input4;
  display: flex;
  align-items: center;
  width: 100%;

  & :last-child {
    position: relative;
    right: 1.5rem;
  }
`,Sv=p`
  width: 72px;
  height: 48px;
  box-sizing: border-box;
  padding: 0.5rem;
  border-radius: 48px;

  @media (min-width: 1024px) {
    width: 112px;
  }
`,Ev=p`

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
`,Nv=p`
  width: 140px;
  height: 48px;
  padding: 0.5rem;
  border: 2px solid #dbe5f1;

  @media (min-width: 1024px) {
    width: 130px;
  }
`,Pv=p`

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
`,_v=p`
  margin-top: 2rem;
  width: 100%;
  height: 48px;
  border-radius: 48px;
  color: #ffffff;
  background: black;
  cursor: pointer;
  border: 1px solid #212429;
  border-radius: 48px;
`,Lv=()=>m("div",{className:iv,children:[m("div",{className:ov,children:[l("div",{className:lv,children:"Inicio/Cesta de la compra/Pedidos/Pago"}),m("h1",{className:av,children:[l("div",{children:l("img",{src:"/assets/gallery/shape-arrow-left.png",alt:"arrow-left"})}),"Orden de pago"]}),l("div",{className:sv,children:"Todas las transacciones son seguras y están encriptadas"}),m("div",{className:uv,children:[l("img",{className:cv,src:"/assets/gallery/card1.png",alt:"card"}),l("img",{className:dv,src:"/assets/gallery/card2.png",alt:"card"})]})]}),m("div",{className:fv,children:[l("h2",{className:pv,children:"Tarjeta de crédito"}),m("form",{className:mv,children:[m("div",{className:hv,children:[m("div",{className:gv,children:[l(Ge,{pl:"Número de tarjeta",className:vv}),l("img",{src:"/assets/gallery/fi_lock.png",alt:"lock"})]}),l("div",{className:yv,children:l(Ge,{pl:"Nombre del titular",className:xv})}),m("div",{className:wv,children:[l(Ge,{pl:"12 ",className:Cv}),l("svg",{width:"12",height:"7",viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M1 1L6 6L11 1",stroke:"#999999",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),m("div",{className:kv,children:[l(Ge,{pl:"24",className:Sv}),l("svg",{width:"12",height:"7",viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M1 1L6 6L11 1",stroke:"#999999",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),m("div",{className:Ev,children:[l(Ge,{pl:"CVV",className:Nv}),l("img",{src:"/assets/gallery/question-mark-icon.png",alt:"quastion-mark"})]})]}),m("div",{className:Pv,children:["Importe a pagar ",l("span",{children:"169,98 €"})]}),l(le,{className:_v,children:"Pagar"})]})]})]}),zv=p`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`,Mv=()=>{const e=()=>{window.scrollTo(0,0)};return ct.useEffect(()=>{e()},[]),m("div",{className:zv,children:[l(pr,{}),l(Lv,{}),l(fr,{})]})},jv=()=>l(Y4,{}),Tv=()=>l(Z4,{}),Rv=()=>l(q4,{}),Ov=()=>l(tv,{}),Iv=()=>l(rv,{}),$v=()=>l(Mv,{}),bv=()=>l(gm,{children:m(dm,{children:[l(hn,{path:V.root,element:l(jv,{})}),l(hn,{path:V.woman,element:l(Tv,{})}),l(hn,{path:V.product,element:l(Rv,{})}),l(hn,{path:V.cart,element:l(Ov,{})}),l(hn,{path:V.checkout,element:l(Iv,{})}),l(hn,{path:V.payment,element:l($v,{})})]})}),Dv=()=>l(bv,{});oh`

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
`;const Uv=Mf(document.getElementById("root"));Uv.render(l(Dv,{}));
