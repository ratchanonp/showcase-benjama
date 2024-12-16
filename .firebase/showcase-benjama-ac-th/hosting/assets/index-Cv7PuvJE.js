const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-DrfzdFqo.js","assets/navbar-CKgiNdTi.js","assets/index-BIx2ormR.js","assets/profilePage-iqOS8_le.js","assets/awardCard-CH6FRk6C.js","assets/separator-BwzGn8mb.js","assets/portfolioPage-BRpDLZ2-.js","assets/addPortfolioPage-BXvhZNfi.js","assets/index-Bpc60013.js","assets/input-Di0z1uxm.js","assets/radio-group-O5Jy25jt.js","assets/index-BICUkeyL.js","assets/addAwardPage-CWKgIjLa.js","assets/signUpPage-DXRlyztE.js","assets/signInPage-CLy6neC_.js","assets/forgotPasswordPage-BVYKEhE0.js"])))=>i.map(i=>d[i]);
function kT(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(i,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function Xf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Kd={exports:{}},Ja={},Gd={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function bT(){if(ly)return Ve;ly=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function S(V){return V===null||typeof V!="object"?null:(V=E&&V[E]||V["@@iterator"],typeof V=="function"?V:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,F={};function M(V,j,X){this.props=V,this.context=j,this.refs=F,this.updater=X||T}M.prototype.isReactComponent={},M.prototype.setState=function(V,j){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,j,"setState")},M.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ie(){}ie.prototype=M.prototype;function te(V,j,X){this.props=V,this.context=j,this.refs=F,this.updater=X||T}var re=te.prototype=new ie;re.constructor=te,O(re,M.prototype),re.isPureReactComponent=!0;var W=Array.isArray,le=Object.prototype.hasOwnProperty,ce={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function R(V,j,X){var oe,ue={},Ae=null,ve=null;if(j!=null)for(oe in j.ref!==void 0&&(ve=j.ref),j.key!==void 0&&(Ae=""+j.key),j)le.call(j,oe)&&!b.hasOwnProperty(oe)&&(ue[oe]=j[oe]);var Oe=arguments.length-2;if(Oe===1)ue.children=X;else if(1<Oe){for(var Be=Array(Oe),Ye=0;Ye<Oe;Ye++)Be[Ye]=arguments[Ye+2];ue.children=Be}if(V&&V.defaultProps)for(oe in Oe=V.defaultProps,Oe)ue[oe]===void 0&&(ue[oe]=Oe[oe]);return{$$typeof:n,type:V,key:Ae,ref:ve,props:ue,_owner:ce.current}}function C(V,j){return{$$typeof:n,type:V.type,key:j,ref:V.ref,props:V.props,_owner:V._owner}}function k(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function N(V){var j={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(X){return j[X]})}var x=/\/+/g;function A(V,j){return typeof V=="object"&&V!==null&&V.key!=null?N(""+V.key):j.toString(36)}function he(V,j,X,oe,ue){var Ae=typeof V;(Ae==="undefined"||Ae==="boolean")&&(V=null);var ve=!1;if(V===null)ve=!0;else switch(Ae){case"string":case"number":ve=!0;break;case"object":switch(V.$$typeof){case n:case e:ve=!0}}if(ve)return ve=V,ue=ue(ve),V=oe===""?"."+A(ve,0):oe,W(ue)?(X="",V!=null&&(X=V.replace(x,"$&/")+"/"),he(ue,j,X,"",function(Ye){return Ye})):ue!=null&&(k(ue)&&(ue=C(ue,X+(!ue.key||ve&&ve.key===ue.key?"":(""+ue.key).replace(x,"$&/")+"/")+V)),j.push(ue)),1;if(ve=0,oe=oe===""?".":oe+":",W(V))for(var Oe=0;Oe<V.length;Oe++){Ae=V[Oe];var Be=oe+A(Ae,Oe);ve+=he(Ae,j,X,Be,ue)}else if(Be=S(V),typeof Be=="function")for(V=Be.call(V),Oe=0;!(Ae=V.next()).done;)Ae=Ae.value,Be=oe+A(Ae,Oe++),ve+=he(Ae,j,X,Be,ue);else if(Ae==="object")throw j=String(V),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return ve}function Le(V,j,X){if(V==null)return V;var oe=[],ue=0;return he(V,oe,"","",function(Ae){return j.call(X,Ae,ue++)}),oe}function Ce(V){if(V._status===-1){var j=V._result;j=j(),j.then(function(X){(V._status===0||V._status===-1)&&(V._status=1,V._result=X)},function(X){(V._status===0||V._status===-1)&&(V._status=2,V._result=X)}),V._status===-1&&(V._status=0,V._result=j)}if(V._status===1)return V._result.default;throw V._result}var Ie={current:null},Q={transition:null},G={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:Q,ReactCurrentOwner:ce};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Ve.Children={map:Le,forEach:function(V,j,X){Le(V,function(){j.apply(this,arguments)},X)},count:function(V){var j=0;return Le(V,function(){j++}),j},toArray:function(V){return Le(V,function(j){return j})||[]},only:function(V){if(!k(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ve.Component=M,Ve.Fragment=t,Ve.Profiler=o,Ve.PureComponent=te,Ve.StrictMode=i,Ve.Suspense=f,Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,Ve.act=ee,Ve.cloneElement=function(V,j,X){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var oe=O({},V.props),ue=V.key,Ae=V.ref,ve=V._owner;if(j!=null){if(j.ref!==void 0&&(Ae=j.ref,ve=ce.current),j.key!==void 0&&(ue=""+j.key),V.type&&V.type.defaultProps)var Oe=V.type.defaultProps;for(Be in j)le.call(j,Be)&&!b.hasOwnProperty(Be)&&(oe[Be]=j[Be]===void 0&&Oe!==void 0?Oe[Be]:j[Be])}var Be=arguments.length-2;if(Be===1)oe.children=X;else if(1<Be){Oe=Array(Be);for(var Ye=0;Ye<Be;Ye++)Oe[Ye]=arguments[Ye+2];oe.children=Oe}return{$$typeof:n,type:V.type,key:ue,ref:Ae,props:oe,_owner:ve}},Ve.createContext=function(V){return V={$$typeof:u,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},Ve.createElement=R,Ve.createFactory=function(V){var j=R.bind(null,V);return j.type=V,j},Ve.createRef=function(){return{current:null}},Ve.forwardRef=function(V){return{$$typeof:d,render:V}},Ve.isValidElement=k,Ve.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:Ce}},Ve.memo=function(V,j){return{$$typeof:y,type:V,compare:j===void 0?null:j}},Ve.startTransition=function(V){var j=Q.transition;Q.transition={};try{V()}finally{Q.transition=j}},Ve.unstable_act=ee,Ve.useCallback=function(V,j){return Ie.current.useCallback(V,j)},Ve.useContext=function(V){return Ie.current.useContext(V)},Ve.useDebugValue=function(){},Ve.useDeferredValue=function(V){return Ie.current.useDeferredValue(V)},Ve.useEffect=function(V,j){return Ie.current.useEffect(V,j)},Ve.useId=function(){return Ie.current.useId()},Ve.useImperativeHandle=function(V,j,X){return Ie.current.useImperativeHandle(V,j,X)},Ve.useInsertionEffect=function(V,j){return Ie.current.useInsertionEffect(V,j)},Ve.useLayoutEffect=function(V,j){return Ie.current.useLayoutEffect(V,j)},Ve.useMemo=function(V,j){return Ie.current.useMemo(V,j)},Ve.useReducer=function(V,j,X){return Ie.current.useReducer(V,j,X)},Ve.useRef=function(V){return Ie.current.useRef(V)},Ve.useState=function(V){return Ie.current.useState(V)},Ve.useSyncExternalStore=function(V,j,X){return Ie.current.useSyncExternalStore(V,j,X)},Ve.useTransition=function(){return Ie.current.useTransition()},Ve.version="18.3.1",Ve}var uy;function Il(){return uy||(uy=1,Gd.exports=bT()),Gd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function NT(){if(cy)return Ja;cy=1;var n=Il(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,y){var v,E={},S=null,T=null;y!==void 0&&(S=""+y),f.key!==void 0&&(S=""+f.key),f.ref!==void 0&&(T=f.ref);for(v in f)i.call(f,v)&&!a.hasOwnProperty(v)&&(E[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)E[v]===void 0&&(E[v]=f[v]);return{$$typeof:e,type:d,key:S,ref:T,props:E,_owner:o.current}}return Ja.Fragment=t,Ja.jsx=u,Ja.jsxs=u,Ja}var hy;function xT(){return hy||(hy=1,Kd.exports=NT()),Kd.exports}var we=xT(),xe=Il();const ae=Xf(xe),AD=kT({__proto__:null,default:ae},[xe]);var Qu={},Qd={exports:{}},gn={},Yd={exports:{}},Xd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy;function DT(){return dy||(dy=1,function(n){function e(Q,G){var ee=Q.length;Q.push(G);e:for(;0<ee;){var V=ee-1>>>1,j=Q[V];if(0<o(j,G))Q[V]=G,Q[ee]=j,ee=V;else break e}}function t(Q){return Q.length===0?null:Q[0]}function i(Q){if(Q.length===0)return null;var G=Q[0],ee=Q.pop();if(ee!==G){Q[0]=ee;e:for(var V=0,j=Q.length,X=j>>>1;V<X;){var oe=2*(V+1)-1,ue=Q[oe],Ae=oe+1,ve=Q[Ae];if(0>o(ue,ee))Ae<j&&0>o(ve,ue)?(Q[V]=ve,Q[Ae]=ee,V=Ae):(Q[V]=ue,Q[oe]=ee,V=oe);else if(Ae<j&&0>o(ve,ee))Q[V]=ve,Q[Ae]=ee,V=Ae;else break e}}return G}function o(Q,G){var ee=Q.sortIndex-G.sortIndex;return ee!==0?ee:Q.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],y=[],v=1,E=null,S=3,T=!1,O=!1,F=!1,M=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(Q){for(var G=t(y);G!==null;){if(G.callback===null)i(y);else if(G.startTime<=Q)i(y),G.sortIndex=G.expirationTime,e(f,G);else break;G=t(y)}}function W(Q){if(F=!1,re(Q),!O)if(t(f)!==null)O=!0,Ce(le);else{var G=t(y);G!==null&&Ie(W,G.startTime-Q)}}function le(Q,G){O=!1,F&&(F=!1,ie(R),R=-1),T=!0;var ee=S;try{for(re(G),E=t(f);E!==null&&(!(E.expirationTime>G)||Q&&!N());){var V=E.callback;if(typeof V=="function"){E.callback=null,S=E.priorityLevel;var j=V(E.expirationTime<=G);G=n.unstable_now(),typeof j=="function"?E.callback=j:E===t(f)&&i(f),re(G)}else i(f);E=t(f)}if(E!==null)var X=!0;else{var oe=t(y);oe!==null&&Ie(W,oe.startTime-G),X=!1}return X}finally{E=null,S=ee,T=!1}}var ce=!1,b=null,R=-1,C=5,k=-1;function N(){return!(n.unstable_now()-k<C)}function x(){if(b!==null){var Q=n.unstable_now();k=Q;var G=!0;try{G=b(!0,Q)}finally{G?A():(ce=!1,b=null)}}else ce=!1}var A;if(typeof te=="function")A=function(){te(x)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,Le=he.port2;he.port1.onmessage=x,A=function(){Le.postMessage(null)}}else A=function(){M(x,0)};function Ce(Q){b=Q,ce||(ce=!0,A())}function Ie(Q,G){R=M(function(){Q(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Q){Q.callback=null},n.unstable_continueExecution=function(){O||T||(O=!0,Ce(le))},n.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Q?Math.floor(1e3/Q):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(Q){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var ee=S;S=G;try{return Q()}finally{S=ee}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Q,G){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var ee=S;S=Q;try{return G()}finally{S=ee}},n.unstable_scheduleCallback=function(Q,G,ee){var V=n.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?V+ee:V):ee=V,Q){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ee+j,Q={id:v++,callback:G,priorityLevel:Q,startTime:ee,expirationTime:j,sortIndex:-1},ee>V?(Q.sortIndex=ee,e(y,Q),t(f)===null&&Q===t(y)&&(F?(ie(R),R=-1):F=!0,Ie(W,ee-V))):(Q.sortIndex=j,e(f,Q),O||T||(O=!0,Ce(le))),Q},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(Q){var G=S;return function(){var ee=S;S=G;try{return Q.apply(this,arguments)}finally{S=ee}}}}(Xd)),Xd}var fy;function LT(){return fy||(fy=1,Yd.exports=DT()),Yd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function OT(){if(py)return gn;py=1;var n=Il(),e=LT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){u(r,s),u(r+"Capture",s)}function u(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function S(r){return f.call(E,r)?!0:f.call(v,r)?!1:y.test(r)?E[r]=!0:(v[r]=!0,!1)}function T(r,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function O(r,s,l,h){if(s===null||typeof s>"u"||T(r,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function F(r,s,l,h,p,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){M[r]=new F(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];M[s]=new F(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){M[r]=new F(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){M[r]=new F(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){M[r]=new F(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){M[r]=new F(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){M[r]=new F(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){M[r]=new F(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){M[r]=new F(r,5,!1,r.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function te(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(ie,te);M[s]=new F(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(ie,te);M[s]=new F(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(ie,te);M[s]=new F(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){M[r]=new F(r,1,!1,r.toLowerCase(),null,!1,!1)}),M.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){M[r]=new F(r,1,!1,r.toLowerCase(),null,!0,!0)});function re(r,s,l,h){var p=M.hasOwnProperty(s)?M[s]:null;(p!==null?p.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(O(s,l,p,h)&&(l=null),h||p===null?S(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):p.mustUseProperty?r[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,h=p.attributeNamespace,l===null?r.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?r.setAttributeNS(h,s,l):r.setAttribute(s,l))))}var W=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,le=Symbol.for("react.element"),ce=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),N=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),Le=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),Ie=Symbol.for("react.offscreen"),Q=Symbol.iterator;function G(r){return r===null||typeof r!="object"?null:(r=Q&&r[Q]||r["@@iterator"],typeof r=="function"?r:null)}var ee=Object.assign,V;function j(r){if(V===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var X=!1;function oe(r,s){if(!r||X)return"";X=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch($){var h=$}Reflect.construct(r,[],s)}else{try{s.call()}catch($){h=$}r.call(s.prototype)}else{try{throw Error()}catch($){h=$}r()}}catch($){if($&&h&&typeof $.stack=="string"){for(var p=$.stack.split(`
`),g=h.stack.split(`
`),w=p.length-1,P=g.length-1;1<=w&&0<=P&&p[w]!==g[P];)P--;for(;1<=w&&0<=P;w--,P--)if(p[w]!==g[P]){if(w!==1||P!==1)do if(w--,P--,0>P||p[w]!==g[P]){var D=`
`+p[w].replace(" at new "," at ");return r.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",r.displayName)),D}while(1<=w&&0<=P);break}}}finally{X=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?j(r):""}function ue(r){switch(r.tag){case 5:return j(r.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return r=oe(r.type,!1),r;case 11:return r=oe(r.type.render,!1),r;case 1:return r=oe(r.type,!0),r;default:return""}}function Ae(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case b:return"Fragment";case ce:return"Portal";case C:return"Profiler";case R:return"StrictMode";case A:return"Suspense";case he:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case N:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case x:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Le:return s=r.displayName||null,s!==null?s:Ae(r.type)||"Memo";case Ce:s=r._payload,r=r._init;try{return Ae(r(s))}catch{}}return null}function ve(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(s);case 8:return s===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Oe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Be(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ye(r){var s=Be(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,g=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return p.call(this)},set:function(w){h=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Ke(r){r._valueTracker||(r._valueTracker=Ye(r))}function kt(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return r&&(h=Be(r)?r.checked?"true":"false":r.value),r=h,r!==l?(s.setValue(r),!0):!1}function bt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Zn(r,s){var l=s.checked;return ee({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function Mn(r,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Oe(s.value!=null?s.value:l),r._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Hr(r,s){s=s.checked,s!=null&&re(r,"checked",s,!1)}function $t(r,s){Hr(r,s);var l=Oe(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?er(r,s.type,l):s.hasOwnProperty("defaultValue")&&er(r,s.type,Oe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function ln(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function er(r,s,l){(s!=="number"||bt(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var qt=Array.isArray;function tr(r,s,l,h){if(r=r.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<r.length;l++)p=s.hasOwnProperty("$"+r[l].value),r[l].selected!==p&&(r[l].selected=p),p&&h&&(r[l].defaultSelected=!0)}else{for(l=""+Oe(l),s=null,p=0;p<r.length;p++){if(r[p].value===l){r[p].selected=!0,h&&(r[p].defaultSelected=!0);return}s!==null||r[p].disabled||(s=r[p])}s!==null&&(s.selected=!0)}}function hs(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function It(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(qt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:Oe(l)}}function Tn(r,s){var l=Oe(s.value),h=Oe(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),h!=null&&(r.defaultValue=""+h)}function ds(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function mt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function st(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?mt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var nr,Wr=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,p){MSApp.execUnsafeLocalFunction(function(){return r(s,l,h,p)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(nr=nr||document.createElement("div"),nr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=nr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function en(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vn=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(r){Vn.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Sr[s]=Sr[r]})});function yi(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Sr.hasOwnProperty(r)&&Sr[r]?(""+s).trim():s+"px"}function fs(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=yi(l,s[l],h);l==="float"&&(l="cssFloat"),h?r.setProperty(l,p):r[l]=p}}var _i=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vi(r,s){if(s){if(_i[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ps(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rr=null;function tn(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var wi=null,Ee=null,Me=null;function Ge(r){if(r=Va(r)){if(typeof wi!="function")throw Error(t(280));var s=r.stateNode;s&&(s=cu(s),wi(r.stateNode,r.type,s))}}function ht(r){Ee?Me?Me.push(r):Me=[r]:Ee=r}function Ht(){if(Ee){var r=Ee,s=Me;if(Me=Ee=null,Ge(r),s)for(r=0;r<s.length;r++)Ge(s[r])}}function Fn(r,s){return r(s)}function ms(){}var Kr=!1;function ga(r,s,l){if(Kr)return r(s,l);Kr=!0;try{return Fn(r,s,l)}finally{Kr=!1,(Ee!==null||Me!==null)&&(ms(),Ht())}}function gt(r,s){var l=r.stateNode;if(l===null)return null;var h=cu(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var ro=!1;if(d)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){ro=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{ro=!1}function gs(r,s,l,h,p,g,w,P,D){var $=Array.prototype.slice.call(arguments,3);try{s.apply(l,$)}catch(J){this.onError(J)}}var ys=!1,io=null,sr=!1,ya=null,Eh={onError:function(r){ys=!0,io=r}};function so(r,s,l,h,p,g,w,P,D){ys=!1,io=null,gs.apply(Eh,arguments)}function Ol(r,s,l,h,p,g,w,P,D){if(so.apply(this,arguments),ys){if(ys){var $=io;ys=!1,io=null}else throw Error(t(198));sr||(sr=!0,ya=$)}}function or(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function _s(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function ar(r){if(or(r)!==r)throw Error(t(188))}function Ml(r){var s=r.alternate;if(!s){if(s=or(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,h=s;;){var p=l.return;if(p===null)break;var g=p.alternate;if(g===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===l)return ar(p),r;if(g===h)return ar(p),s;g=g.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=g;else{for(var w=!1,P=p.child;P;){if(P===l){w=!0,l=p,h=g;break}if(P===h){w=!0,h=p,l=g;break}P=P.sibling}if(!w){for(P=g.child;P;){if(P===l){w=!0,l=g,h=p;break}if(P===h){w=!0,h=g,l=p;break}P=P.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function _a(r){return r=Ml(r),r!==null?oo(r):null}function oo(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=oo(r);if(s!==null)return s;r=r.sibling}return null}var ao=e.unstable_scheduleCallback,va=e.unstable_cancelCallback,Vl=e.unstable_shouldYield,Th=e.unstable_requestPaint,Ze=e.unstable_now,Fl=e.unstable_getCurrentPriorityLevel,vs=e.unstable_ImmediatePriority,Ei=e.unstable_UserBlockingPriority,Un=e.unstable_NormalPriority,wa=e.unstable_LowPriority,Ul=e.unstable_IdlePriority,ws=null,In=null;function Bl(r){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(ws,r,void 0,(r.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:zl,Ea=Math.log,jl=Math.LN2;function zl(r){return r>>>=0,r===0?32:31-(Ea(r)/jl|0)|0}var lo=64,uo=4194304;function Ti(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Es(r,s){var l=r.pendingLanes;if(l===0)return 0;var h=0,p=r.suspendedLanes,g=r.pingedLanes,w=l&268435455;if(w!==0){var P=w&~p;P!==0?h=Ti(P):(g&=w,g!==0&&(h=Ti(g)))}else w=l&~p,w!==0?h=Ti(w):g!==0&&(h=Ti(g));if(h===0)return 0;if(s!==0&&s!==h&&!(s&p)&&(p=h&-h,g=s&-s,p>=g||p===16&&(g&4194240)!==0))return s;if(h&4&&(h|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)l=31-nn(s),p=1<<l,h|=r[l],s&=~p;return h}function Ih(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gr(r,s){for(var l=r.suspendedLanes,h=r.pingedLanes,p=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-nn(g),P=1<<w,D=p[w];D===-1?(!(P&l)||P&h)&&(p[w]=Ih(P,s)):D<=s&&(r.expiredLanes|=P),g&=~P}}function Sn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Ts(){var r=lo;return lo<<=1,!(lo&4194240)&&(lo=64),r}function Ii(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function Si(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-nn(s),r[s]=l}function Je(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<l;){var p=31-nn(l),g=1<<p;s[p]=0,h[p]=-1,r[p]=-1,l&=~g}}function Ri(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var h=31-nn(l),p=1<<h;p&s|r[h]&s&&(r[h]|=s),l&=~p}}var je=0;function Ai(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var $l,co,ql,Hl,Wl,Ta=!1,Rr=[],Mt=null,lr=null,ur=null,Pi=new Map,Bn=new Map,Ar=[],Sh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kl(r,s){switch(r){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Pi.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(s.pointerId)}}function un(r,s,l,h,p,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:g,targetContainers:[p]},s!==null&&(s=Va(s),s!==null&&co(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),r)}function Rh(r,s,l,h,p){switch(s){case"focusin":return Mt=un(Mt,r,s,l,h,p),!0;case"dragenter":return lr=un(lr,r,s,l,h,p),!0;case"mouseover":return ur=un(ur,r,s,l,h,p),!0;case"pointerover":var g=p.pointerId;return Pi.set(g,un(Pi.get(g)||null,r,s,l,h,p)),!0;case"gotpointercapture":return g=p.pointerId,Bn.set(g,un(Bn.get(g)||null,r,s,l,h,p)),!0}return!1}function Gl(r){var s=Ps(r.target);if(s!==null){var l=or(s);if(l!==null){if(s=l.tag,s===13){if(s=_s(l),s!==null){r.blockedOn=s,Wl(r.priority,function(){ql(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Qr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=ho(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var h=new l.constructor(l.type,l);rr=h,l.target.dispatchEvent(h),rr=null}else return s=Va(l),s!==null&&co(s),r.blockedOn=l,!1;s.shift()}return!0}function Is(r,s,l){Qr(r)&&l.delete(s)}function Ql(){Ta=!1,Mt!==null&&Qr(Mt)&&(Mt=null),lr!==null&&Qr(lr)&&(lr=null),ur!==null&&Qr(ur)&&(ur=null),Pi.forEach(Is),Bn.forEach(Is)}function cr(r,s){r.blockedOn===s&&(r.blockedOn=null,Ta||(Ta=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ql)))}function hr(r){function s(p){return cr(p,r)}if(0<Rr.length){cr(Rr[0],r);for(var l=1;l<Rr.length;l++){var h=Rr[l];h.blockedOn===r&&(h.blockedOn=null)}}for(Mt!==null&&cr(Mt,r),lr!==null&&cr(lr,r),ur!==null&&cr(ur,r),Pi.forEach(s),Bn.forEach(s),l=0;l<Ar.length;l++)h=Ar[l],h.blockedOn===r&&(h.blockedOn=null);for(;0<Ar.length&&(l=Ar[0],l.blockedOn===null);)Gl(l),l.blockedOn===null&&Ar.shift()}var Yr=W.ReactCurrentBatchConfig,Ci=!0;function ot(r,s,l,h){var p=je,g=Yr.transition;Yr.transition=null;try{je=1,Ia(r,s,l,h)}finally{je=p,Yr.transition=g}}function Ah(r,s,l,h){var p=je,g=Yr.transition;Yr.transition=null;try{je=4,Ia(r,s,l,h)}finally{je=p,Yr.transition=g}}function Ia(r,s,l,h){if(Ci){var p=ho(r,s,l,h);if(p===null)Vh(r,s,h,Ss,l),Kl(r,h);else if(Rh(p,r,s,l,h))h.stopPropagation();else if(Kl(r,h),s&4&&-1<Sh.indexOf(r)){for(;p!==null;){var g=Va(p);if(g!==null&&$l(g),g=ho(r,s,l,h),g===null&&Vh(r,s,h,Ss,l),g===p)break;p=g}p!==null&&h.stopPropagation()}else Vh(r,s,h,null,l)}}var Ss=null;function ho(r,s,l,h){if(Ss=null,r=tn(h),r=Ps(r),r!==null)if(s=or(r),s===null)r=null;else if(l=s.tag,l===13){if(r=_s(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Ss=r,null}function Sa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fl()){case vs:return 1;case Ei:return 4;case Un:case wa:return 16;case Ul:return 536870912;default:return 16}default:return 16}}var Rn=null,fo=null,cn=null;function Ra(){if(cn)return cn;var r,s=fo,l=s.length,h,p="value"in Rn?Rn.value:Rn.textContent,g=p.length;for(r=0;r<l&&s[r]===p[r];r++);var w=l-r;for(h=1;h<=w&&s[l-h]===p[g-h];h++);return cn=p.slice(r,1<h?1-h:void 0)}function po(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Pr(){return!0}function Aa(){return!1}function Vt(r){function s(l,h,p,g,w){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var P in r)r.hasOwnProperty(P)&&(l=r[P],this[P]=l?l(g):g[P]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Pr:Aa,this.isPropagationStopped=Aa,this}return ee(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Pr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Pr)},persist:function(){},isPersistent:Pr}),s}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mo=Vt(dr),Cr=ee({},dr,{view:0,detail:0}),Ph=Vt(Cr),go,Xr,ki,Rs=ee({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ki&&(ki&&r.type==="mousemove"?(go=r.screenX-ki.screenX,Xr=r.screenY-ki.screenY):Xr=go=0,ki=r),go)},movementY:function(r){return"movementY"in r?r.movementY:Xr}}),yo=Vt(Rs),Pa=ee({},Rs,{dataTransfer:0}),Yl=Vt(Pa),_o=ee({},Cr,{relatedTarget:0}),vo=Vt(_o),Xl=ee({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jr=Vt(Xl),Jl=ee({},dr,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Zl=Vt(Jl),eu=ee({},dr,{data:0}),Ca=Vt(eu),wo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=tu[r])?!!s[r]:!1}function kr(){return nu}var c=ee({},Cr,{key:function(r){if(r.key){var s=wo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=po(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?rn[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kr,charCode:function(r){return r.type==="keypress"?po(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?po(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Vt(c),_=ee({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Vt(_),U=ee({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kr}),q=Vt(U),se=ee({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xe=Vt(se),St=ee({},Rs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),$e=Vt(St),Nt=[9,13,27,32],vt=d&&"CompositionEvent"in window,jn=null;d&&"documentMode"in document&&(jn=document.documentMode);var An=d&&"TextEvent"in window&&!jn,As=d&&(!vt||jn&&8<jn&&11>=jn),Eo=" ",nm=!1;function rm(r,s){switch(r){case"keyup":return Nt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var To=!1;function AE(r,s){switch(r){case"compositionend":return im(s);case"keypress":return s.which!==32?null:(nm=!0,Eo);case"textInput":return r=s.data,r===Eo&&nm?null:r;default:return null}}function PE(r,s){if(To)return r==="compositionend"||!vt&&rm(r,s)?(r=Ra(),cn=fo=Rn=null,To=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return As&&s.locale!=="ko"?null:s.data;default:return null}}var CE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!CE[r.type]:s==="textarea"}function om(r,s,l,h){ht(h),s=au(s,"onChange"),0<s.length&&(l=new mo("onChange","change",null,l,h),r.push({event:l,listeners:s}))}var ka=null,ba=null;function kE(r){Sm(r,0)}function ru(r){var s=Po(r);if(kt(s))return r}function bE(r,s){if(r==="change")return s}var am=!1;if(d){var Ch;if(d){var kh="oninput"in document;if(!kh){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),kh=typeof lm.oninput=="function"}Ch=kh}else Ch=!1;am=Ch&&(!document.documentMode||9<document.documentMode)}function um(){ka&&(ka.detachEvent("onpropertychange",cm),ba=ka=null)}function cm(r){if(r.propertyName==="value"&&ru(ba)){var s=[];om(s,ba,r,tn(r)),ga(kE,s)}}function NE(r,s,l){r==="focusin"?(um(),ka=s,ba=l,ka.attachEvent("onpropertychange",cm)):r==="focusout"&&um()}function xE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ru(ba)}function DE(r,s){if(r==="click")return ru(s)}function LE(r,s){if(r==="input"||r==="change")return ru(s)}function OE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var fr=typeof Object.is=="function"?Object.is:OE;function Na(r,s){if(fr(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(s,p)||!fr(r[p],s[p]))return!1}return!0}function hm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function dm(r,s){var l=hm(r);r=0;for(var h;l;){if(l.nodeType===3){if(h=r+l.textContent.length,r<=s&&h>=s)return{node:l,offset:s-r};r=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=hm(l)}}function fm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?fm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function pm(){for(var r=window,s=bt();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=bt(r.document)}return s}function bh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function ME(r){var s=pm(),l=r.focusedElem,h=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&fm(l.ownerDocument.documentElement,l)){if(h!==null&&bh(l)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var p=l.textContent.length,g=Math.min(h.start,p);h=h.end===void 0?g:Math.min(h.end,p),!r.extend&&g>h&&(p=h,h=g,g=p),p=dm(l,g);var w=dm(l,h);p&&w&&(r.rangeCount!==1||r.anchorNode!==p.node||r.anchorOffset!==p.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var VE=d&&"documentMode"in document&&11>=document.documentMode,Io=null,Nh=null,xa=null,xh=!1;function mm(r,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;xh||Io==null||Io!==bt(h)||(h=Io,"selectionStart"in h&&bh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),xa&&Na(xa,h)||(xa=h,h=au(Nh,"onSelect"),0<h.length&&(s=new mo("onSelect","select",null,s,l),r.push({event:s,listeners:h}),s.target=Io)))}function iu(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var So={animationend:iu("Animation","AnimationEnd"),animationiteration:iu("Animation","AnimationIteration"),animationstart:iu("Animation","AnimationStart"),transitionend:iu("Transition","TransitionEnd")},Dh={},gm={};d&&(gm=document.createElement("div").style,"AnimationEvent"in window||(delete So.animationend.animation,delete So.animationiteration.animation,delete So.animationstart.animation),"TransitionEvent"in window||delete So.transitionend.transition);function su(r){if(Dh[r])return Dh[r];if(!So[r])return r;var s=So[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in gm)return Dh[r]=s[l];return r}var ym=su("animationend"),_m=su("animationiteration"),vm=su("animationstart"),wm=su("transitionend"),Em=new Map,Tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(r,s){Em.set(r,s),a(s,[r])}for(var Lh=0;Lh<Tm.length;Lh++){var Oh=Tm[Lh],FE=Oh.toLowerCase(),UE=Oh[0].toUpperCase()+Oh.slice(1);bi(FE,"on"+UE)}bi(ym,"onAnimationEnd"),bi(_m,"onAnimationIteration"),bi(vm,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(wm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function Im(r,s,l){var h=r.type||"unknown-event";r.currentTarget=l,Ol(h,s,void 0,r),r.currentTarget=null}function Sm(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var h=r[l],p=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var w=h.length-1;0<=w;w--){var P=h[w],D=P.instance,$=P.currentTarget;if(P=P.listener,D!==g&&p.isPropagationStopped())break e;Im(p,P,$),g=D}else for(w=0;w<h.length;w++){if(P=h[w],D=P.instance,$=P.currentTarget,P=P.listener,D!==g&&p.isPropagationStopped())break e;Im(p,P,$),g=D}}}if(sr)throw r=ya,sr=!1,ya=null,r}function tt(r,s){var l=s[$h];l===void 0&&(l=s[$h]=new Set);var h=r+"__bubble";l.has(h)||(Rm(s,r,2,!1),l.add(h))}function Mh(r,s,l){var h=0;s&&(h|=4),Rm(l,r,h,s)}var ou="_reactListening"+Math.random().toString(36).slice(2);function La(r){if(!r[ou]){r[ou]=!0,i.forEach(function(l){l!=="selectionchange"&&(BE.has(l)||Mh(l,!1,r),Mh(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[ou]||(s[ou]=!0,Mh("selectionchange",!1,s))}}function Rm(r,s,l,h){switch(Sa(s)){case 1:var p=ot;break;case 4:p=Ah;break;default:p=Ia}l=p.bind(null,s,l,r),p=void 0,!ro||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),h?p!==void 0?r.addEventListener(s,l,{capture:!0,passive:p}):r.addEventListener(s,l,!0):p!==void 0?r.addEventListener(s,l,{passive:p}):r.addEventListener(s,l,!1)}function Vh(r,s,l,h,p){var g=h;if(!(s&1)&&!(s&2)&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var P=h.stateNode.containerInfo;if(P===p||P.nodeType===8&&P.parentNode===p)break;if(w===4)for(w=h.return;w!==null;){var D=w.tag;if((D===3||D===4)&&(D=w.stateNode.containerInfo,D===p||D.nodeType===8&&D.parentNode===p))return;w=w.return}for(;P!==null;){if(w=Ps(P),w===null)return;if(D=w.tag,D===5||D===6){h=g=w;continue e}P=P.parentNode}}h=h.return}ga(function(){var $=g,J=tn(l),Z=[];e:{var Y=Em.get(r);if(Y!==void 0){var de=mo,me=r;switch(r){case"keypress":if(po(l)===0)break e;case"keydown":case"keyup":de=m;break;case"focusin":me="focus",de=vo;break;case"focusout":me="blur",de=vo;break;case"beforeblur":case"afterblur":de=vo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=Yl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=q;break;case ym:case _m:case vm:de=Jr;break;case wm:de=Xe;break;case"scroll":de=Ph;break;case"wheel":de=$e;break;case"copy":case"cut":case"paste":de=Zl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=I}var ye=(s&4)!==0,yt=!ye&&r==="scroll",B=ye?Y!==null?Y+"Capture":null:Y;ye=[];for(var L=$,z;L!==null;){z=L;var ne=z.stateNode;if(z.tag===5&&ne!==null&&(z=ne,B!==null&&(ne=gt(L,B),ne!=null&&ye.push(Oa(L,ne,z)))),yt)break;L=L.return}0<ye.length&&(Y=new de(Y,me,null,l,J),Z.push({event:Y,listeners:ye}))}}if(!(s&7)){e:{if(Y=r==="mouseover"||r==="pointerover",de=r==="mouseout"||r==="pointerout",Y&&l!==rr&&(me=l.relatedTarget||l.fromElement)&&(Ps(me)||me[Zr]))break e;if((de||Y)&&(Y=J.window===J?J:(Y=J.ownerDocument)?Y.defaultView||Y.parentWindow:window,de?(me=l.relatedTarget||l.toElement,de=$,me=me?Ps(me):null,me!==null&&(yt=or(me),me!==yt||me.tag!==5&&me.tag!==6)&&(me=null)):(de=null,me=$),de!==me)){if(ye=yo,ne="onMouseLeave",B="onMouseEnter",L="mouse",(r==="pointerout"||r==="pointerover")&&(ye=I,ne="onPointerLeave",B="onPointerEnter",L="pointer"),yt=de==null?Y:Po(de),z=me==null?Y:Po(me),Y=new ye(ne,L+"leave",de,l,J),Y.target=yt,Y.relatedTarget=z,ne=null,Ps(J)===$&&(ye=new ye(B,L+"enter",me,l,J),ye.target=z,ye.relatedTarget=yt,ne=ye),yt=ne,de&&me)t:{for(ye=de,B=me,L=0,z=ye;z;z=Ro(z))L++;for(z=0,ne=B;ne;ne=Ro(ne))z++;for(;0<L-z;)ye=Ro(ye),L--;for(;0<z-L;)B=Ro(B),z--;for(;L--;){if(ye===B||B!==null&&ye===B.alternate)break t;ye=Ro(ye),B=Ro(B)}ye=null}else ye=null;de!==null&&Am(Z,Y,de,ye,!1),me!==null&&yt!==null&&Am(Z,yt,me,ye,!0)}}e:{if(Y=$?Po($):window,de=Y.nodeName&&Y.nodeName.toLowerCase(),de==="select"||de==="input"&&Y.type==="file")var _e=bE;else if(sm(Y))if(am)_e=LE;else{_e=xE;var Se=NE}else(de=Y.nodeName)&&de.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(_e=DE);if(_e&&(_e=_e(r,$))){om(Z,_e,l,J);break e}Se&&Se(r,Y,$),r==="focusout"&&(Se=Y._wrapperState)&&Se.controlled&&Y.type==="number"&&er(Y,"number",Y.value)}switch(Se=$?Po($):window,r){case"focusin":(sm(Se)||Se.contentEditable==="true")&&(Io=Se,Nh=$,xa=null);break;case"focusout":xa=Nh=Io=null;break;case"mousedown":xh=!0;break;case"contextmenu":case"mouseup":case"dragend":xh=!1,mm(Z,l,J);break;case"selectionchange":if(VE)break;case"keydown":case"keyup":mm(Z,l,J)}var Re;if(vt)e:{switch(r){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else To?rm(r,l)&&(ke="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(ke="onCompositionStart");ke&&(As&&l.locale!=="ko"&&(To||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&To&&(Re=Ra()):(Rn=J,fo="value"in Rn?Rn.value:Rn.textContent,To=!0)),Se=au($,ke),0<Se.length&&(ke=new Ca(ke,r,null,l,J),Z.push({event:ke,listeners:Se}),Re?ke.data=Re:(Re=im(l),Re!==null&&(ke.data=Re)))),(Re=An?AE(r,l):PE(r,l))&&($=au($,"onBeforeInput"),0<$.length&&(J=new Ca("onBeforeInput","beforeinput",null,l,J),Z.push({event:J,listeners:$}),J.data=Re))}Sm(Z,s)})}function Oa(r,s,l){return{instance:r,listener:s,currentTarget:l}}function au(r,s){for(var l=s+"Capture",h=[];r!==null;){var p=r,g=p.stateNode;p.tag===5&&g!==null&&(p=g,g=gt(r,l),g!=null&&h.unshift(Oa(r,g,p)),g=gt(r,s),g!=null&&h.push(Oa(r,g,p))),r=r.return}return h}function Ro(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Am(r,s,l,h,p){for(var g=s._reactName,w=[];l!==null&&l!==h;){var P=l,D=P.alternate,$=P.stateNode;if(D!==null&&D===h)break;P.tag===5&&$!==null&&(P=$,p?(D=gt(l,g),D!=null&&w.unshift(Oa(l,D,P))):p||(D=gt(l,g),D!=null&&w.push(Oa(l,D,P)))),l=l.return}w.length!==0&&r.push({event:s,listeners:w})}var jE=/\r\n?/g,zE=/\u0000|\uFFFD/g;function Pm(r){return(typeof r=="string"?r:""+r).replace(jE,`
`).replace(zE,"")}function lu(r,s,l){if(s=Pm(s),Pm(r)!==s&&l)throw Error(t(425))}function uu(){}var Fh=null,Uh=null;function Bh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var jh=typeof setTimeout=="function"?setTimeout:void 0,$E=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=typeof Promise=="function"?Promise:void 0,qE=typeof queueMicrotask=="function"?queueMicrotask:typeof Cm<"u"?function(r){return Cm.resolve(null).then(r).catch(HE)}:jh;function HE(r){setTimeout(function(){throw r})}function zh(r,s){var l=s,h=0;do{var p=l.nextSibling;if(r.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){r.removeChild(p),hr(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);hr(s)}function Ni(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function km(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var Ao=Math.random().toString(36).slice(2),br="__reactFiber$"+Ao,Ma="__reactProps$"+Ao,Zr="__reactContainer$"+Ao,$h="__reactEvents$"+Ao,WE="__reactListeners$"+Ao,KE="__reactHandles$"+Ao;function Ps(r){var s=r[br];if(s)return s;for(var l=r.parentNode;l;){if(s=l[Zr]||l[br]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=km(r);r!==null;){if(l=r[br])return l;r=km(r)}return s}r=l,l=r.parentNode}return null}function Va(r){return r=r[br]||r[Zr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Po(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function cu(r){return r[Ma]||null}var qh=[],Co=-1;function xi(r){return{current:r}}function nt(r){0>Co||(r.current=qh[Co],qh[Co]=null,Co--)}function et(r,s){Co++,qh[Co]=r.current,r.current=s}var Di={},Wt=xi(Di),hn=xi(!1),Cs=Di;function ko(r,s){var l=r.type.contextTypes;if(!l)return Di;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var p={},g;for(g in l)p[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=p),p}function dn(r){return r=r.childContextTypes,r!=null}function hu(){nt(hn),nt(Wt)}function bm(r,s,l){if(Wt.current!==Di)throw Error(t(168));et(Wt,s),et(hn,l)}function Nm(r,s,l){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in s))throw Error(t(108,ve(r)||"Unknown",p));return ee({},l,h)}function du(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Di,Cs=Wt.current,et(Wt,r),et(hn,hn.current),!0}function xm(r,s,l){var h=r.stateNode;if(!h)throw Error(t(169));l?(r=Nm(r,s,Cs),h.__reactInternalMemoizedMergedChildContext=r,nt(hn),nt(Wt),et(Wt,r)):nt(hn),et(hn,l)}var ei=null,fu=!1,Hh=!1;function Dm(r){ei===null?ei=[r]:ei.push(r)}function GE(r){fu=!0,Dm(r)}function Li(){if(!Hh&&ei!==null){Hh=!0;var r=0,s=je;try{var l=ei;for(je=1;r<l.length;r++){var h=l[r];do h=h(!0);while(h!==null)}ei=null,fu=!1}catch(p){throw ei!==null&&(ei=ei.slice(r+1)),ao(vs,Li),p}finally{je=s,Hh=!1}}return null}var bo=[],No=0,pu=null,mu=0,zn=[],$n=0,ks=null,ti=1,ni="";function bs(r,s){bo[No++]=mu,bo[No++]=pu,pu=r,mu=s}function Lm(r,s,l){zn[$n++]=ti,zn[$n++]=ni,zn[$n++]=ks,ks=r;var h=ti;r=ni;var p=32-nn(h)-1;h&=~(1<<p),l+=1;var g=32-nn(s)+p;if(30<g){var w=p-p%5;g=(h&(1<<w)-1).toString(32),h>>=w,p-=w,ti=1<<32-nn(s)+p|l<<p|h,ni=g+r}else ti=1<<g|l<<p|h,ni=r}function Wh(r){r.return!==null&&(bs(r,1),Lm(r,1,0))}function Kh(r){for(;r===pu;)pu=bo[--No],bo[No]=null,mu=bo[--No],bo[No]=null;for(;r===ks;)ks=zn[--$n],zn[$n]=null,ni=zn[--$n],zn[$n]=null,ti=zn[--$n],zn[$n]=null}var Pn=null,Cn=null,at=!1,pr=null;function Om(r,s){var l=Kn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function Mm(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,Pn=r,Cn=Ni(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,Pn=r,Cn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ks!==null?{id:ti,overflow:ni}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Kn(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,Pn=r,Cn=null,!0):!1;default:return!1}}function Gh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Qh(r){if(at){var s=Cn;if(s){var l=s;if(!Mm(r,s)){if(Gh(r))throw Error(t(418));s=Ni(l.nextSibling);var h=Pn;s&&Mm(r,s)?Om(h,l):(r.flags=r.flags&-4097|2,at=!1,Pn=r)}}else{if(Gh(r))throw Error(t(418));r.flags=r.flags&-4097|2,at=!1,Pn=r}}}function Vm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Pn=r}function gu(r){if(r!==Pn)return!1;if(!at)return Vm(r),at=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Bh(r.type,r.memoizedProps)),s&&(s=Cn)){if(Gh(r))throw Fm(),Error(t(418));for(;s;)Om(r,s),s=Ni(s.nextSibling)}if(Vm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){Cn=Ni(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}Cn=null}}else Cn=Pn?Ni(r.stateNode.nextSibling):null;return!0}function Fm(){for(var r=Cn;r;)r=Ni(r.nextSibling)}function xo(){Cn=Pn=null,at=!1}function Yh(r){pr===null?pr=[r]:pr.push(r)}var QE=W.ReactCurrentBatchConfig;function Fa(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,r));var p=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var P=p.refs;w===null?delete P[g]:P[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function yu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Um(r){var s=r._init;return s(r._payload)}function Bm(r){function s(B,L){if(r){var z=B.deletions;z===null?(B.deletions=[L],B.flags|=16):z.push(L)}}function l(B,L){if(!r)return null;for(;L!==null;)s(B,L),L=L.sibling;return null}function h(B,L){for(B=new Map;L!==null;)L.key!==null?B.set(L.key,L):B.set(L.index,L),L=L.sibling;return B}function p(B,L){return B=zi(B,L),B.index=0,B.sibling=null,B}function g(B,L,z){return B.index=z,r?(z=B.alternate,z!==null?(z=z.index,z<L?(B.flags|=2,L):z):(B.flags|=2,L)):(B.flags|=1048576,L)}function w(B){return r&&B.alternate===null&&(B.flags|=2),B}function P(B,L,z,ne){return L===null||L.tag!==6?(L=jd(z,B.mode,ne),L.return=B,L):(L=p(L,z),L.return=B,L)}function D(B,L,z,ne){var _e=z.type;return _e===b?J(B,L,z.props.children,ne,z.key):L!==null&&(L.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Ce&&Um(_e)===L.type)?(ne=p(L,z.props),ne.ref=Fa(B,L,z),ne.return=B,ne):(ne=ju(z.type,z.key,z.props,null,B.mode,ne),ne.ref=Fa(B,L,z),ne.return=B,ne)}function $(B,L,z,ne){return L===null||L.tag!==4||L.stateNode.containerInfo!==z.containerInfo||L.stateNode.implementation!==z.implementation?(L=zd(z,B.mode,ne),L.return=B,L):(L=p(L,z.children||[]),L.return=B,L)}function J(B,L,z,ne,_e){return L===null||L.tag!==7?(L=Fs(z,B.mode,ne,_e),L.return=B,L):(L=p(L,z),L.return=B,L)}function Z(B,L,z){if(typeof L=="string"&&L!==""||typeof L=="number")return L=jd(""+L,B.mode,z),L.return=B,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case le:return z=ju(L.type,L.key,L.props,null,B.mode,z),z.ref=Fa(B,null,L),z.return=B,z;case ce:return L=zd(L,B.mode,z),L.return=B,L;case Ce:var ne=L._init;return Z(B,ne(L._payload),z)}if(qt(L)||G(L))return L=Fs(L,B.mode,z,null),L.return=B,L;yu(B,L)}return null}function Y(B,L,z,ne){var _e=L!==null?L.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return _e!==null?null:P(B,L,""+z,ne);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case le:return z.key===_e?D(B,L,z,ne):null;case ce:return z.key===_e?$(B,L,z,ne):null;case Ce:return _e=z._init,Y(B,L,_e(z._payload),ne)}if(qt(z)||G(z))return _e!==null?null:J(B,L,z,ne,null);yu(B,z)}return null}function de(B,L,z,ne,_e){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return B=B.get(z)||null,P(L,B,""+ne,_e);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case le:return B=B.get(ne.key===null?z:ne.key)||null,D(L,B,ne,_e);case ce:return B=B.get(ne.key===null?z:ne.key)||null,$(L,B,ne,_e);case Ce:var Se=ne._init;return de(B,L,z,Se(ne._payload),_e)}if(qt(ne)||G(ne))return B=B.get(z)||null,J(L,B,ne,_e,null);yu(L,ne)}return null}function me(B,L,z,ne){for(var _e=null,Se=null,Re=L,ke=L=0,Lt=null;Re!==null&&ke<z.length;ke++){Re.index>ke?(Lt=Re,Re=null):Lt=Re.sibling;var We=Y(B,Re,z[ke],ne);if(We===null){Re===null&&(Re=Lt);break}r&&Re&&We.alternate===null&&s(B,Re),L=g(We,L,ke),Se===null?_e=We:Se.sibling=We,Se=We,Re=Lt}if(ke===z.length)return l(B,Re),at&&bs(B,ke),_e;if(Re===null){for(;ke<z.length;ke++)Re=Z(B,z[ke],ne),Re!==null&&(L=g(Re,L,ke),Se===null?_e=Re:Se.sibling=Re,Se=Re);return at&&bs(B,ke),_e}for(Re=h(B,Re);ke<z.length;ke++)Lt=de(Re,B,ke,z[ke],ne),Lt!==null&&(r&&Lt.alternate!==null&&Re.delete(Lt.key===null?ke:Lt.key),L=g(Lt,L,ke),Se===null?_e=Lt:Se.sibling=Lt,Se=Lt);return r&&Re.forEach(function($i){return s(B,$i)}),at&&bs(B,ke),_e}function ye(B,L,z,ne){var _e=G(z);if(typeof _e!="function")throw Error(t(150));if(z=_e.call(z),z==null)throw Error(t(151));for(var Se=_e=null,Re=L,ke=L=0,Lt=null,We=z.next();Re!==null&&!We.done;ke++,We=z.next()){Re.index>ke?(Lt=Re,Re=null):Lt=Re.sibling;var $i=Y(B,Re,We.value,ne);if($i===null){Re===null&&(Re=Lt);break}r&&Re&&$i.alternate===null&&s(B,Re),L=g($i,L,ke),Se===null?_e=$i:Se.sibling=$i,Se=$i,Re=Lt}if(We.done)return l(B,Re),at&&bs(B,ke),_e;if(Re===null){for(;!We.done;ke++,We=z.next())We=Z(B,We.value,ne),We!==null&&(L=g(We,L,ke),Se===null?_e=We:Se.sibling=We,Se=We);return at&&bs(B,ke),_e}for(Re=h(B,Re);!We.done;ke++,We=z.next())We=de(Re,B,ke,We.value,ne),We!==null&&(r&&We.alternate!==null&&Re.delete(We.key===null?ke:We.key),L=g(We,L,ke),Se===null?_e=We:Se.sibling=We,Se=We);return r&&Re.forEach(function(CT){return s(B,CT)}),at&&bs(B,ke),_e}function yt(B,L,z,ne){if(typeof z=="object"&&z!==null&&z.type===b&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case le:e:{for(var _e=z.key,Se=L;Se!==null;){if(Se.key===_e){if(_e=z.type,_e===b){if(Se.tag===7){l(B,Se.sibling),L=p(Se,z.props.children),L.return=B,B=L;break e}}else if(Se.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Ce&&Um(_e)===Se.type){l(B,Se.sibling),L=p(Se,z.props),L.ref=Fa(B,Se,z),L.return=B,B=L;break e}l(B,Se);break}else s(B,Se);Se=Se.sibling}z.type===b?(L=Fs(z.props.children,B.mode,ne,z.key),L.return=B,B=L):(ne=ju(z.type,z.key,z.props,null,B.mode,ne),ne.ref=Fa(B,L,z),ne.return=B,B=ne)}return w(B);case ce:e:{for(Se=z.key;L!==null;){if(L.key===Se)if(L.tag===4&&L.stateNode.containerInfo===z.containerInfo&&L.stateNode.implementation===z.implementation){l(B,L.sibling),L=p(L,z.children||[]),L.return=B,B=L;break e}else{l(B,L);break}else s(B,L);L=L.sibling}L=zd(z,B.mode,ne),L.return=B,B=L}return w(B);case Ce:return Se=z._init,yt(B,L,Se(z._payload),ne)}if(qt(z))return me(B,L,z,ne);if(G(z))return ye(B,L,z,ne);yu(B,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,L!==null&&L.tag===6?(l(B,L.sibling),L=p(L,z),L.return=B,B=L):(l(B,L),L=jd(z,B.mode,ne),L.return=B,B=L),w(B)):l(B,L)}return yt}var Do=Bm(!0),jm=Bm(!1),_u=xi(null),vu=null,Lo=null,Xh=null;function Jh(){Xh=Lo=vu=null}function Zh(r){var s=_u.current;nt(_u),r._currentValue=s}function ed(r,s,l){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===l)break;r=r.return}}function Oo(r,s){vu=r,Xh=Lo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(fn=!0),r.firstContext=null)}function qn(r){var s=r._currentValue;if(Xh!==r)if(r={context:r,memoizedValue:s,next:null},Lo===null){if(vu===null)throw Error(t(308));Lo=r,vu.dependencies={lanes:0,firstContext:r}}else Lo=Lo.next=r;return s}var Ns=null;function td(r){Ns===null?Ns=[r]:Ns.push(r)}function zm(r,s,l,h){var p=s.interleaved;return p===null?(l.next=l,td(s)):(l.next=p.next,p.next=l),s.interleaved=l,ri(r,h)}function ri(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var Oi=!1;function nd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $m(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function ii(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Mi(r,s,l){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,He&2){var p=h.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),h.pending=s,ri(r,l)}return p=h.interleaved,p===null?(s.next=s,td(h)):(s.next=p.next,p.next=s),h.interleaved=s,ri(r,l)}function wu(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,Ri(r,l)}}function qm(r,s){var l=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?p=g=w:g=g.next=w,l=l.next}while(l!==null);g===null?p=g=s:g=g.next=s}else p=g=s;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function Eu(r,s,l,h){var p=r.updateQueue;Oi=!1;var g=p.firstBaseUpdate,w=p.lastBaseUpdate,P=p.shared.pending;if(P!==null){p.shared.pending=null;var D=P,$=D.next;D.next=null,w===null?g=$:w.next=$,w=D;var J=r.alternate;J!==null&&(J=J.updateQueue,P=J.lastBaseUpdate,P!==w&&(P===null?J.firstBaseUpdate=$:P.next=$,J.lastBaseUpdate=D))}if(g!==null){var Z=p.baseState;w=0,J=$=D=null,P=g;do{var Y=P.lane,de=P.eventTime;if((h&Y)===Y){J!==null&&(J=J.next={eventTime:de,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var me=r,ye=P;switch(Y=s,de=l,ye.tag){case 1:if(me=ye.payload,typeof me=="function"){Z=me.call(de,Z,Y);break e}Z=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ye.payload,Y=typeof me=="function"?me.call(de,Z,Y):me,Y==null)break e;Z=ee({},Z,Y);break e;case 2:Oi=!0}}P.callback!==null&&P.lane!==0&&(r.flags|=64,Y=p.effects,Y===null?p.effects=[P]:Y.push(P))}else de={eventTime:de,lane:Y,tag:P.tag,payload:P.payload,callback:P.callback,next:null},J===null?($=J=de,D=Z):J=J.next=de,w|=Y;if(P=P.next,P===null){if(P=p.shared.pending,P===null)break;Y=P,P=Y.next,Y.next=null,p.lastBaseUpdate=Y,p.shared.pending=null}}while(!0);if(J===null&&(D=Z),p.baseState=D,p.firstBaseUpdate=$,p.lastBaseUpdate=J,s=p.shared.interleaved,s!==null){p=s;do w|=p.lane,p=p.next;while(p!==s)}else g===null&&(p.shared.lanes=0);Ls|=w,r.lanes=w,r.memoizedState=Z}}function Hm(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Ua={},Nr=xi(Ua),Ba=xi(Ua),ja=xi(Ua);function xs(r){if(r===Ua)throw Error(t(174));return r}function rd(r,s){switch(et(ja,s),et(Ba,r),et(Nr,Ua),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:st(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=st(s,r)}nt(Nr),et(Nr,s)}function Mo(){nt(Nr),nt(Ba),nt(ja)}function Wm(r){xs(ja.current);var s=xs(Nr.current),l=st(s,r.type);s!==l&&(et(Ba,r),et(Nr,l))}function id(r){Ba.current===r&&(nt(Nr),nt(Ba))}var lt=xi(0);function Tu(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var sd=[];function od(){for(var r=0;r<sd.length;r++)sd[r]._workInProgressVersionPrimary=null;sd.length=0}var Iu=W.ReactCurrentDispatcher,ad=W.ReactCurrentBatchConfig,Ds=0,ut=null,Rt=null,xt=null,Su=!1,za=!1,$a=0,YE=0;function Kt(){throw Error(t(321))}function ld(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!fr(r[l],s[l]))return!1;return!0}function ud(r,s,l,h,p,g){if(Ds=g,ut=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Iu.current=r===null||r.memoizedState===null?eT:tT,r=l(h,p),za){g=0;do{if(za=!1,$a=0,25<=g)throw Error(t(301));g+=1,xt=Rt=null,s.updateQueue=null,Iu.current=nT,r=l(h,p)}while(za)}if(Iu.current=Pu,s=Rt!==null&&Rt.next!==null,Ds=0,xt=Rt=ut=null,Su=!1,s)throw Error(t(300));return r}function cd(){var r=$a!==0;return $a=0,r}function xr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?ut.memoizedState=xt=r:xt=xt.next=r,xt}function Hn(){if(Rt===null){var r=ut.alternate;r=r!==null?r.memoizedState:null}else r=Rt.next;var s=xt===null?ut.memoizedState:xt.next;if(s!==null)xt=s,Rt=r;else{if(r===null)throw Error(t(310));Rt=r,r={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},xt===null?ut.memoizedState=xt=r:xt=xt.next=r}return xt}function qa(r,s){return typeof s=="function"?s(r):s}function hd(r){var s=Hn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=Rt,p=h.baseQueue,g=l.pending;if(g!==null){if(p!==null){var w=p.next;p.next=g.next,g.next=w}h.baseQueue=p=g,l.pending=null}if(p!==null){g=p.next,h=h.baseState;var P=w=null,D=null,$=g;do{var J=$.lane;if((Ds&J)===J)D!==null&&(D=D.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),h=$.hasEagerState?$.eagerState:r(h,$.action);else{var Z={lane:J,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};D===null?(P=D=Z,w=h):D=D.next=Z,ut.lanes|=J,Ls|=J}$=$.next}while($!==null&&$!==g);D===null?w=h:D.next=P,fr(h,s.memoizedState)||(fn=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=D,l.lastRenderedState=h}if(r=l.interleaved,r!==null){p=r;do g=p.lane,ut.lanes|=g,Ls|=g,p=p.next;while(p!==r)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function dd(r){var s=Hn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=l.dispatch,p=l.pending,g=s.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do g=r(g,w.action),w=w.next;while(w!==p);fr(g,s.memoizedState)||(fn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,h]}function Km(){}function Gm(r,s){var l=ut,h=Hn(),p=s(),g=!fr(h.memoizedState,p);if(g&&(h.memoizedState=p,fn=!0),h=h.queue,fd(Xm.bind(null,l,h,r),[r]),h.getSnapshot!==s||g||xt!==null&&xt.memoizedState.tag&1){if(l.flags|=2048,Ha(9,Ym.bind(null,l,h,p,s),void 0,null),Dt===null)throw Error(t(349));Ds&30||Qm(l,s,p)}return p}function Qm(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=ut.updateQueue,s===null?(s={lastEffect:null,stores:null},ut.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function Ym(r,s,l,h){s.value=l,s.getSnapshot=h,Jm(s)&&Zm(r)}function Xm(r,s,l){return l(function(){Jm(s)&&Zm(r)})}function Jm(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!fr(r,l)}catch{return!0}}function Zm(r){var s=ri(r,1);s!==null&&_r(s,r,1,-1)}function eg(r){var s=xr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:r},s.queue=r,r=r.dispatch=ZE.bind(null,ut,r),[s.memoizedState,r]}function Ha(r,s,l,h){return r={tag:r,create:s,destroy:l,deps:h,next:null},s=ut.updateQueue,s===null?(s={lastEffect:null,stores:null},ut.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(h=l.next,l.next=r,r.next=h,s.lastEffect=r)),r}function tg(){return Hn().memoizedState}function Ru(r,s,l,h){var p=xr();ut.flags|=r,p.memoizedState=Ha(1|s,l,void 0,h===void 0?null:h)}function Au(r,s,l,h){var p=Hn();h=h===void 0?null:h;var g=void 0;if(Rt!==null){var w=Rt.memoizedState;if(g=w.destroy,h!==null&&ld(h,w.deps)){p.memoizedState=Ha(s,l,g,h);return}}ut.flags|=r,p.memoizedState=Ha(1|s,l,g,h)}function ng(r,s){return Ru(8390656,8,r,s)}function fd(r,s){return Au(2048,8,r,s)}function rg(r,s){return Au(4,2,r,s)}function ig(r,s){return Au(4,4,r,s)}function sg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function og(r,s,l){return l=l!=null?l.concat([r]):null,Au(4,4,sg.bind(null,s,r),l)}function pd(){}function ag(r,s){var l=Hn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&ld(s,h[1])?h[0]:(l.memoizedState=[r,s],r)}function lg(r,s){var l=Hn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&ld(s,h[1])?h[0]:(r=r(),l.memoizedState=[r,s],r)}function ug(r,s,l){return Ds&21?(fr(l,s)||(l=Ts(),ut.lanes|=l,Ls|=l,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,fn=!0),r.memoizedState=l)}function XE(r,s){var l=je;je=l!==0&&4>l?l:4,r(!0);var h=ad.transition;ad.transition={};try{r(!1),s()}finally{je=l,ad.transition=h}}function cg(){return Hn().memoizedState}function JE(r,s,l){var h=Bi(r);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},hg(r))dg(s,l);else if(l=zm(r,s,l,h),l!==null){var p=on();_r(l,r,h,p),fg(l,s,h)}}function ZE(r,s,l){var h=Bi(r),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(hg(r))dg(s,p);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,P=g(w,l);if(p.hasEagerState=!0,p.eagerState=P,fr(P,w)){var D=s.interleaved;D===null?(p.next=p,td(s)):(p.next=D.next,D.next=p),s.interleaved=p;return}}catch{}finally{}l=zm(r,s,p,h),l!==null&&(p=on(),_r(l,r,h,p),fg(l,s,h))}}function hg(r){var s=r.alternate;return r===ut||s!==null&&s===ut}function dg(r,s){za=Su=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function fg(r,s,l){if(l&4194240){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,Ri(r,l)}}var Pu={readContext:qn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},eT={readContext:qn,useCallback:function(r,s){return xr().memoizedState=[r,s===void 0?null:s],r},useContext:qn,useEffect:ng,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,Ru(4194308,4,sg.bind(null,s,r),l)},useLayoutEffect:function(r,s){return Ru(4194308,4,r,s)},useInsertionEffect:function(r,s){return Ru(4,2,r,s)},useMemo:function(r,s){var l=xr();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var h=xr();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=JE.bind(null,ut,r),[h.memoizedState,r]},useRef:function(r){var s=xr();return r={current:r},s.memoizedState=r},useState:eg,useDebugValue:pd,useDeferredValue:function(r){return xr().memoizedState=r},useTransition:function(){var r=eg(!1),s=r[0];return r=XE.bind(null,r[1]),xr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var h=ut,p=xr();if(at){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Dt===null)throw Error(t(349));Ds&30||Qm(h,s,l)}p.memoizedState=l;var g={value:l,getSnapshot:s};return p.queue=g,ng(Xm.bind(null,h,g,r),[r]),h.flags|=2048,Ha(9,Ym.bind(null,h,g,l,s),void 0,null),l},useId:function(){var r=xr(),s=Dt.identifierPrefix;if(at){var l=ni,h=ti;l=(h&~(1<<32-nn(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=$a++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=YE++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},tT={readContext:qn,useCallback:ag,useContext:qn,useEffect:fd,useImperativeHandle:og,useInsertionEffect:rg,useLayoutEffect:ig,useMemo:lg,useReducer:hd,useRef:tg,useState:function(){return hd(qa)},useDebugValue:pd,useDeferredValue:function(r){var s=Hn();return ug(s,Rt.memoizedState,r)},useTransition:function(){var r=hd(qa)[0],s=Hn().memoizedState;return[r,s]},useMutableSource:Km,useSyncExternalStore:Gm,useId:cg,unstable_isNewReconciler:!1},nT={readContext:qn,useCallback:ag,useContext:qn,useEffect:fd,useImperativeHandle:og,useInsertionEffect:rg,useLayoutEffect:ig,useMemo:lg,useReducer:dd,useRef:tg,useState:function(){return dd(qa)},useDebugValue:pd,useDeferredValue:function(r){var s=Hn();return Rt===null?s.memoizedState=r:ug(s,Rt.memoizedState,r)},useTransition:function(){var r=dd(qa)[0],s=Hn().memoizedState;return[r,s]},useMutableSource:Km,useSyncExternalStore:Gm,useId:cg,unstable_isNewReconciler:!1};function mr(r,s){if(r&&r.defaultProps){s=ee({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function md(r,s,l,h){s=r.memoizedState,l=l(h,s),l=l==null?s:ee({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Cu={isMounted:function(r){return(r=r._reactInternals)?or(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var h=on(),p=Bi(r),g=ii(h,p);g.payload=s,l!=null&&(g.callback=l),s=Mi(r,g,p),s!==null&&(_r(s,r,p,h),wu(s,r,p))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var h=on(),p=Bi(r),g=ii(h,p);g.tag=1,g.payload=s,l!=null&&(g.callback=l),s=Mi(r,g,p),s!==null&&(_r(s,r,p,h),wu(s,r,p))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=on(),h=Bi(r),p=ii(l,h);p.tag=2,s!=null&&(p.callback=s),s=Mi(r,p,h),s!==null&&(_r(s,r,h,l),wu(s,r,h))}};function pg(r,s,l,h,p,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,w):s.prototype&&s.prototype.isPureReactComponent?!Na(l,h)||!Na(p,g):!0}function mg(r,s,l){var h=!1,p=Di,g=s.contextType;return typeof g=="object"&&g!==null?g=qn(g):(p=dn(s)?Cs:Wt.current,h=s.contextTypes,g=(h=h!=null)?ko(r,p):Di),s=new s(l,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Cu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=p,r.__reactInternalMemoizedMaskedChildContext=g),s}function gg(r,s,l,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==r&&Cu.enqueueReplaceState(s,s.state,null)}function gd(r,s,l,h){var p=r.stateNode;p.props=l,p.state=r.memoizedState,p.refs={},nd(r);var g=s.contextType;typeof g=="object"&&g!==null?p.context=qn(g):(g=dn(s)?Cs:Wt.current,p.context=ko(r,g)),p.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(md(r,s,g,l),p.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Cu.enqueueReplaceState(p,p.state,null),Eu(r,l,p,h),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308)}function Vo(r,s){try{var l="",h=s;do l+=ue(h),h=h.return;while(h);var p=l}catch(g){p=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:p,digest:null}}function yd(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function _d(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var rT=typeof WeakMap=="function"?WeakMap:Map;function yg(r,s,l){l=ii(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Ou||(Ou=!0,Dd=h),_d(r,s)},l}function _g(r,s,l){l=ii(-1,l),l.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var p=s.value;l.payload=function(){return h(p)},l.callback=function(){_d(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){_d(r,s),typeof h!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),l}function vg(r,s,l){var h=r.pingCache;if(h===null){h=r.pingCache=new rT;var p=new Set;h.set(s,p)}else p=h.get(s),p===void 0&&(p=new Set,h.set(s,p));p.has(l)||(p.add(l),r=yT.bind(null,r,s,l),s.then(r,r))}function wg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Eg(r,s,l,h,p){return r.mode&1?(r.flags|=65536,r.lanes=p,r):(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=ii(-1,1),s.tag=2,Mi(l,s,1))),l.lanes|=1),r)}var iT=W.ReactCurrentOwner,fn=!1;function sn(r,s,l,h){s.child=r===null?jm(s,null,l,h):Do(s,r.child,l,h)}function Tg(r,s,l,h,p){l=l.render;var g=s.ref;return Oo(s,p),h=ud(r,s,l,h,g,p),l=cd(),r!==null&&!fn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~p,si(r,s,p)):(at&&l&&Wh(s),s.flags|=1,sn(r,s,h,p),s.child)}function Ig(r,s,l,h,p){if(r===null){var g=l.type;return typeof g=="function"&&!Bd(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=g,Sg(r,s,g,h,p)):(r=ju(l.type,null,h,s,s.mode,p),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&p)){var w=g.memoizedProps;if(l=l.compare,l=l!==null?l:Na,l(w,h)&&r.ref===s.ref)return si(r,s,p)}return s.flags|=1,r=zi(g,h),r.ref=s.ref,r.return=s,s.child=r}function Sg(r,s,l,h,p){if(r!==null){var g=r.memoizedProps;if(Na(g,h)&&r.ref===s.ref)if(fn=!1,s.pendingProps=h=g,(r.lanes&p)!==0)r.flags&131072&&(fn=!0);else return s.lanes=r.lanes,si(r,s,p)}return vd(r,s,l,h,p)}function Rg(r,s,l){var h=s.pendingProps,p=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Uo,kn),kn|=l;else{if(!(l&1073741824))return r=g!==null?g.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,et(Uo,kn),kn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:l,et(Uo,kn),kn|=h}else g!==null?(h=g.baseLanes|l,s.memoizedState=null):h=l,et(Uo,kn),kn|=h;return sn(r,s,p,l),s.child}function Ag(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function vd(r,s,l,h,p){var g=dn(l)?Cs:Wt.current;return g=ko(s,g),Oo(s,p),l=ud(r,s,l,h,g,p),h=cd(),r!==null&&!fn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~p,si(r,s,p)):(at&&h&&Wh(s),s.flags|=1,sn(r,s,l,p),s.child)}function Pg(r,s,l,h,p){if(dn(l)){var g=!0;du(s)}else g=!1;if(Oo(s,p),s.stateNode===null)bu(r,s),mg(s,l,h),gd(s,l,h,p),h=!0;else if(r===null){var w=s.stateNode,P=s.memoizedProps;w.props=P;var D=w.context,$=l.contextType;typeof $=="object"&&$!==null?$=qn($):($=dn(l)?Cs:Wt.current,$=ko(s,$));var J=l.getDerivedStateFromProps,Z=typeof J=="function"||typeof w.getSnapshotBeforeUpdate=="function";Z||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(P!==h||D!==$)&&gg(s,w,h,$),Oi=!1;var Y=s.memoizedState;w.state=Y,Eu(s,h,w,p),D=s.memoizedState,P!==h||Y!==D||hn.current||Oi?(typeof J=="function"&&(md(s,l,J,h),D=s.memoizedState),(P=Oi||pg(s,l,P,h,Y,D,$))?(Z||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=D),w.props=h,w.state=D,w.context=$,h=P):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,$m(r,s),P=s.memoizedProps,$=s.type===s.elementType?P:mr(s.type,P),w.props=$,Z=s.pendingProps,Y=w.context,D=l.contextType,typeof D=="object"&&D!==null?D=qn(D):(D=dn(l)?Cs:Wt.current,D=ko(s,D));var de=l.getDerivedStateFromProps;(J=typeof de=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(P!==Z||Y!==D)&&gg(s,w,h,D),Oi=!1,Y=s.memoizedState,w.state=Y,Eu(s,h,w,p);var me=s.memoizedState;P!==Z||Y!==me||hn.current||Oi?(typeof de=="function"&&(md(s,l,de,h),me=s.memoizedState),($=Oi||pg(s,l,$,h,Y,me,D)||!1)?(J||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,me,D),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,me,D)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||P===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||P===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=me),w.props=h,w.state=me,w.context=D,h=$):(typeof w.componentDidUpdate!="function"||P===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||P===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),h=!1)}return wd(r,s,l,h,g,p)}function wd(r,s,l,h,p,g){Ag(r,s);var w=(s.flags&128)!==0;if(!h&&!w)return p&&xm(s,l,!1),si(r,s,g);h=s.stateNode,iT.current=s;var P=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&w?(s.child=Do(s,r.child,null,g),s.child=Do(s,null,P,g)):sn(r,s,P,g),s.memoizedState=h.state,p&&xm(s,l,!0),s.child}function Cg(r){var s=r.stateNode;s.pendingContext?bm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&bm(r,s.context,!1),rd(r,s.containerInfo)}function kg(r,s,l,h,p){return xo(),Yh(p),s.flags|=256,sn(r,s,l,h),s.child}var Ed={dehydrated:null,treeContext:null,retryLane:0};function Td(r){return{baseLanes:r,cachePool:null,transitions:null}}function bg(r,s,l){var h=s.pendingProps,p=lt.current,g=!1,w=(s.flags&128)!==0,P;if((P=w)||(P=r!==null&&r.memoizedState===null?!1:(p&2)!==0),P?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(p|=1),et(lt,p&1),r===null)return Qh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(w=h.children,r=h.fallback,g?(h=s.mode,g=s.child,w={mode:"hidden",children:w},!(h&1)&&g!==null?(g.childLanes=0,g.pendingProps=w):g=zu(w,h,0,null),r=Fs(r,h,l,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Td(l),s.memoizedState=Ed,r):Id(s,w));if(p=r.memoizedState,p!==null&&(P=p.dehydrated,P!==null))return sT(r,s,w,h,P,p,l);if(g){g=h.fallback,w=s.mode,p=r.child,P=p.sibling;var D={mode:"hidden",children:h.children};return!(w&1)&&s.child!==p?(h=s.child,h.childLanes=0,h.pendingProps=D,s.deletions=null):(h=zi(p,D),h.subtreeFlags=p.subtreeFlags&14680064),P!==null?g=zi(P,g):(g=Fs(g,w,l,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,w=r.child.memoizedState,w=w===null?Td(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~l,s.memoizedState=Ed,h}return g=r.child,r=g.sibling,h=zi(g,{mode:"visible",children:h.children}),!(s.mode&1)&&(h.lanes=l),h.return=s,h.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=h,s.memoizedState=null,h}function Id(r,s){return s=zu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function ku(r,s,l,h){return h!==null&&Yh(h),Do(s,r.child,null,l),r=Id(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function sT(r,s,l,h,p,g,w){if(l)return s.flags&256?(s.flags&=-257,h=yd(Error(t(422))),ku(r,s,w,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,p=s.mode,h=zu({mode:"visible",children:h.children},p,0,null),g=Fs(g,p,w,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,s.mode&1&&Do(s,r.child,null,w),s.child.memoizedState=Td(w),s.memoizedState=Ed,g);if(!(s.mode&1))return ku(r,s,w,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var P=h.dgst;return h=P,g=Error(t(419)),h=yd(g,h,void 0),ku(r,s,w,h)}if(P=(w&r.childLanes)!==0,fn||P){if(h=Dt,h!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(h.suspendedLanes|w)?0:p,p!==0&&p!==g.retryLane&&(g.retryLane=p,ri(r,p),_r(h,r,p,-1))}return Ud(),h=yd(Error(t(421))),ku(r,s,w,h)}return p.data==="$?"?(s.flags|=128,s.child=r.child,s=_T.bind(null,r),p._reactRetry=s,null):(r=g.treeContext,Cn=Ni(p.nextSibling),Pn=s,at=!0,pr=null,r!==null&&(zn[$n++]=ti,zn[$n++]=ni,zn[$n++]=ks,ti=r.id,ni=r.overflow,ks=s),s=Id(s,h.children),s.flags|=4096,s)}function Ng(r,s,l){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),ed(r.return,s,l)}function Sd(r,s,l,h,p){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=l,g.tailMode=p)}function xg(r,s,l){var h=s.pendingProps,p=h.revealOrder,g=h.tail;if(sn(r,s,h.children,l),h=lt.current,h&2)h=h&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Ng(r,l,s);else if(r.tag===19)Ng(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(et(lt,h),!(s.mode&1))s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)r=l.alternate,r!==null&&Tu(r)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Sd(s,!1,p,l,g);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(r=p.alternate,r!==null&&Tu(r)===null){s.child=p;break}r=p.sibling,p.sibling=l,l=p,p=r}Sd(s,!0,l,null,g);break;case"together":Sd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function bu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function si(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),Ls|=s.lanes,!(l&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=zi(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=zi(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function oT(r,s,l){switch(s.tag){case 3:Cg(s),xo();break;case 5:Wm(s);break;case 1:dn(s.type)&&du(s);break;case 4:rd(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,p=s.memoizedProps.value;et(_u,h._currentValue),h._currentValue=p;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(et(lt,lt.current&1),s.flags|=128,null):l&s.child.childLanes?bg(r,s,l):(et(lt,lt.current&1),r=si(r,s,l),r!==null?r.sibling:null);et(lt,lt.current&1);break;case 19:if(h=(l&s.childLanes)!==0,r.flags&128){if(h)return xg(r,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),et(lt,lt.current),h)break;return null;case 22:case 23:return s.lanes=0,Rg(r,s,l)}return si(r,s,l)}var Dg,Rd,Lg,Og;Dg=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Rd=function(){},Lg=function(r,s,l,h){var p=r.memoizedProps;if(p!==h){r=s.stateNode,xs(Nr.current);var g=null;switch(l){case"input":p=Zn(r,p),h=Zn(r,h),g=[];break;case"select":p=ee({},p,{value:void 0}),h=ee({},h,{value:void 0}),g=[];break;case"textarea":p=hs(r,p),h=hs(r,h),g=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=uu)}vi(l,h);var w;l=null;for($ in p)if(!h.hasOwnProperty($)&&p.hasOwnProperty($)&&p[$]!=null)if($==="style"){var P=p[$];for(w in P)P.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(o.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in h){var D=h[$];if(P=p!=null?p[$]:void 0,h.hasOwnProperty($)&&D!==P&&(D!=null||P!=null))if($==="style")if(P){for(w in P)!P.hasOwnProperty(w)||D&&D.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in D)D.hasOwnProperty(w)&&P[w]!==D[w]&&(l||(l={}),l[w]=D[w])}else l||(g||(g=[]),g.push($,l)),l=D;else $==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,P=P?P.__html:void 0,D!=null&&P!==D&&(g=g||[]).push($,D)):$==="children"?typeof D!="string"&&typeof D!="number"||(g=g||[]).push($,""+D):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(o.hasOwnProperty($)?(D!=null&&$==="onScroll"&&tt("scroll",r),g||P===D||(g=[])):(g=g||[]).push($,D))}l&&(g=g||[]).push("style",l);var $=g;(s.updateQueue=$)&&(s.flags|=4)}},Og=function(r,s,l,h){l!==h&&(s.flags|=4)};function Wa(r,s){if(!at)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Gt(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,h=0;if(s)for(var p=r.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=r,p=p.sibling;else for(p=r.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=r,p=p.sibling;return r.subtreeFlags|=h,r.childLanes=l,s}function aT(r,s,l){var h=s.pendingProps;switch(Kh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(s),null;case 1:return dn(s.type)&&hu(),Gt(s),null;case 3:return h=s.stateNode,Mo(),nt(hn),nt(Wt),od(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(gu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,pr!==null&&(Md(pr),pr=null))),Rd(r,s),Gt(s),null;case 5:id(s);var p=xs(ja.current);if(l=s.type,r!==null&&s.stateNode!=null)Lg(r,s,l,h,p),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Gt(s),null}if(r=xs(Nr.current),gu(s)){h=s.stateNode,l=s.type;var g=s.memoizedProps;switch(h[br]=s,h[Ma]=g,r=(s.mode&1)!==0,l){case"dialog":tt("cancel",h),tt("close",h);break;case"iframe":case"object":case"embed":tt("load",h);break;case"video":case"audio":for(p=0;p<Da.length;p++)tt(Da[p],h);break;case"source":tt("error",h);break;case"img":case"image":case"link":tt("error",h),tt("load",h);break;case"details":tt("toggle",h);break;case"input":Mn(h,g),tt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},tt("invalid",h);break;case"textarea":It(h,g),tt("invalid",h)}vi(l,g),p=null;for(var w in g)if(g.hasOwnProperty(w)){var P=g[w];w==="children"?typeof P=="string"?h.textContent!==P&&(g.suppressHydrationWarning!==!0&&lu(h.textContent,P,r),p=["children",P]):typeof P=="number"&&h.textContent!==""+P&&(g.suppressHydrationWarning!==!0&&lu(h.textContent,P,r),p=["children",""+P]):o.hasOwnProperty(w)&&P!=null&&w==="onScroll"&&tt("scroll",h)}switch(l){case"input":Ke(h),ln(h,g,!0);break;case"textarea":Ke(h),ds(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=uu)}h=p,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=mt(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(l,{is:h.is}):(r=w.createElement(l),l==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,l),r[br]=s,r[Ma]=h,Dg(r,s,!1,!1),s.stateNode=r;e:{switch(w=ps(l,h),l){case"dialog":tt("cancel",r),tt("close",r),p=h;break;case"iframe":case"object":case"embed":tt("load",r),p=h;break;case"video":case"audio":for(p=0;p<Da.length;p++)tt(Da[p],r);p=h;break;case"source":tt("error",r),p=h;break;case"img":case"image":case"link":tt("error",r),tt("load",r),p=h;break;case"details":tt("toggle",r),p=h;break;case"input":Mn(r,h),p=Zn(r,h),tt("invalid",r);break;case"option":p=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},p=ee({},h,{value:void 0}),tt("invalid",r);break;case"textarea":It(r,h),p=hs(r,h),tt("invalid",r);break;default:p=h}vi(l,p),P=p;for(g in P)if(P.hasOwnProperty(g)){var D=P[g];g==="style"?fs(r,D):g==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&Wr(r,D)):g==="children"?typeof D=="string"?(l!=="textarea"||D!=="")&&en(r,D):typeof D=="number"&&en(r,""+D):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?D!=null&&g==="onScroll"&&tt("scroll",r):D!=null&&re(r,g,D,w))}switch(l){case"input":Ke(r),ln(r,h,!1);break;case"textarea":Ke(r),ds(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Oe(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?tr(r,!!h.multiple,g,!1):h.defaultValue!=null&&tr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(r.onclick=uu)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Gt(s),null;case 6:if(r&&s.stateNode!=null)Og(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=xs(ja.current),xs(Nr.current),gu(s)){if(h=s.stateNode,l=s.memoizedProps,h[br]=s,(g=h.nodeValue!==l)&&(r=Pn,r!==null))switch(r.tag){case 3:lu(h.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&lu(h.nodeValue,l,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[br]=s,s.stateNode=h}return Gt(s),null;case 13:if(nt(lt),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(at&&Cn!==null&&s.mode&1&&!(s.flags&128))Fm(),xo(),s.flags|=98560,g=!1;else if(g=gu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[br]=s}else xo(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Gt(s),g=!1}else pr!==null&&(Md(pr),pr=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=l,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,s.mode&1&&(r===null||lt.current&1?At===0&&(At=3):Ud())),s.updateQueue!==null&&(s.flags|=4),Gt(s),null);case 4:return Mo(),Rd(r,s),r===null&&La(s.stateNode.containerInfo),Gt(s),null;case 10:return Zh(s.type._context),Gt(s),null;case 17:return dn(s.type)&&hu(),Gt(s),null;case 19:if(nt(lt),g=s.memoizedState,g===null)return Gt(s),null;if(h=(s.flags&128)!==0,w=g.rendering,w===null)if(h)Wa(g,!1);else{if(At!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(w=Tu(r),w!==null){for(s.flags|=128,Wa(g,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)g=l,r=h,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return et(lt,lt.current&1|2),s.child}r=r.sibling}g.tail!==null&&Ze()>Bo&&(s.flags|=128,h=!0,Wa(g,!1),s.lanes=4194304)}else{if(!h)if(r=Tu(w),r!==null){if(s.flags|=128,h=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Wa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!at)return Gt(s),null}else 2*Ze()-g.renderingStartTime>Bo&&l!==1073741824&&(s.flags|=128,h=!0,Wa(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(l=g.last,l!==null?l.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Ze(),s.sibling=null,l=lt.current,et(lt,h?l&1|2:l&1),s):(Gt(s),null);case 22:case 23:return Fd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&s.mode&1?kn&1073741824&&(Gt(s),s.subtreeFlags&6&&(s.flags|=8192)):Gt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function lT(r,s){switch(Kh(s),s.tag){case 1:return dn(s.type)&&hu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Mo(),nt(hn),nt(Wt),od(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return id(s),null;case 13:if(nt(lt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));xo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return nt(lt),null;case 4:return Mo(),null;case 10:return Zh(s.type._context),null;case 22:case 23:return Fd(),null;case 24:return null;default:return null}}var Nu=!1,Qt=!1,uT=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Fo(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){dt(r,s,h)}else l.current=null}function Ad(r,s,l){try{l()}catch(h){dt(r,s,h)}}var Mg=!1;function cT(r,s){if(Fh=Ci,r=pm(),bh(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var w=0,P=-1,D=-1,$=0,J=0,Z=r,Y=null;t:for(;;){for(var de;Z!==l||p!==0&&Z.nodeType!==3||(P=w+p),Z!==g||h!==0&&Z.nodeType!==3||(D=w+h),Z.nodeType===3&&(w+=Z.nodeValue.length),(de=Z.firstChild)!==null;)Y=Z,Z=de;for(;;){if(Z===r)break t;if(Y===l&&++$===p&&(P=w),Y===g&&++J===h&&(D=w),(de=Z.nextSibling)!==null)break;Z=Y,Y=Z.parentNode}Z=de}l=P===-1||D===-1?null:{start:P,end:D}}else l=null}l=l||{start:0,end:0}}else l=null;for(Uh={focusedElem:r,selectionRange:l},Ci=!1,pe=s;pe!==null;)if(s=pe,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,pe=r;else for(;pe!==null;){s=pe;try{var me=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ye=me.memoizedProps,yt=me.memoizedState,B=s.stateNode,L=B.getSnapshotBeforeUpdate(s.elementType===s.type?ye:mr(s.type,ye),yt);B.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var z=s.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){dt(s,s.return,ne)}if(r=s.sibling,r!==null){r.return=s.return,pe=r;break}pe=s.return}return me=Mg,Mg=!1,me}function Ka(r,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&r)===r){var g=p.destroy;p.destroy=void 0,g!==void 0&&Ad(s,l,g)}p=p.next}while(p!==h)}}function xu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function Pd(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function Vg(r){var s=r.alternate;s!==null&&(r.alternate=null,Vg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[br],delete s[Ma],delete s[$h],delete s[WE],delete s[KE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Fg(r){return r.tag===5||r.tag===3||r.tag===4}function Ug(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Fg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Cd(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=uu));else if(h!==4&&(r=r.child,r!==null))for(Cd(r,s,l),r=r.sibling;r!==null;)Cd(r,s,l),r=r.sibling}function kd(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(kd(r,s,l),r=r.sibling;r!==null;)kd(r,s,l),r=r.sibling}var Ft=null,gr=!1;function Vi(r,s,l){for(l=l.child;l!==null;)Bg(r,s,l),l=l.sibling}function Bg(r,s,l){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(ws,l)}catch{}switch(l.tag){case 5:Qt||Fo(l,s);case 6:var h=Ft,p=gr;Ft=null,Vi(r,s,l),Ft=h,gr=p,Ft!==null&&(gr?(r=Ft,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Ft.removeChild(l.stateNode));break;case 18:Ft!==null&&(gr?(r=Ft,l=l.stateNode,r.nodeType===8?zh(r.parentNode,l):r.nodeType===1&&zh(r,l),hr(r)):zh(Ft,l.stateNode));break;case 4:h=Ft,p=gr,Ft=l.stateNode.containerInfo,gr=!0,Vi(r,s,l),Ft=h,gr=p;break;case 0:case 11:case 14:case 15:if(!Qt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var g=p,w=g.destroy;g=g.tag,w!==void 0&&(g&2||g&4)&&Ad(l,s,w),p=p.next}while(p!==h)}Vi(r,s,l);break;case 1:if(!Qt&&(Fo(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(P){dt(l,s,P)}Vi(r,s,l);break;case 21:Vi(r,s,l);break;case 22:l.mode&1?(Qt=(h=Qt)||l.memoizedState!==null,Vi(r,s,l),Qt=h):Vi(r,s,l);break;default:Vi(r,s,l)}}function jg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new uT),s.forEach(function(h){var p=vT.bind(null,r,h);l.has(h)||(l.add(h),h.then(p,p))})}}function yr(r,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var g=r,w=s,P=w;e:for(;P!==null;){switch(P.tag){case 5:Ft=P.stateNode,gr=!1;break e;case 3:Ft=P.stateNode.containerInfo,gr=!0;break e;case 4:Ft=P.stateNode.containerInfo,gr=!0;break e}P=P.return}if(Ft===null)throw Error(t(160));Bg(g,w,p),Ft=null,gr=!1;var D=p.alternate;D!==null&&(D.return=null),p.return=null}catch($){dt(p,s,$)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)zg(s,r),s=s.sibling}function zg(r,s){var l=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(yr(s,r),Dr(r),h&4){try{Ka(3,r,r.return),xu(3,r)}catch(ye){dt(r,r.return,ye)}try{Ka(5,r,r.return)}catch(ye){dt(r,r.return,ye)}}break;case 1:yr(s,r),Dr(r),h&512&&l!==null&&Fo(l,l.return);break;case 5:if(yr(s,r),Dr(r),h&512&&l!==null&&Fo(l,l.return),r.flags&32){var p=r.stateNode;try{en(p,"")}catch(ye){dt(r,r.return,ye)}}if(h&4&&(p=r.stateNode,p!=null)){var g=r.memoizedProps,w=l!==null?l.memoizedProps:g,P=r.type,D=r.updateQueue;if(r.updateQueue=null,D!==null)try{P==="input"&&g.type==="radio"&&g.name!=null&&Hr(p,g),ps(P,w);var $=ps(P,g);for(w=0;w<D.length;w+=2){var J=D[w],Z=D[w+1];J==="style"?fs(p,Z):J==="dangerouslySetInnerHTML"?Wr(p,Z):J==="children"?en(p,Z):re(p,J,Z,$)}switch(P){case"input":$t(p,g);break;case"textarea":Tn(p,g);break;case"select":var Y=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!g.multiple;var de=g.value;de!=null?tr(p,!!g.multiple,de,!1):Y!==!!g.multiple&&(g.defaultValue!=null?tr(p,!!g.multiple,g.defaultValue,!0):tr(p,!!g.multiple,g.multiple?[]:"",!1))}p[Ma]=g}catch(ye){dt(r,r.return,ye)}}break;case 6:if(yr(s,r),Dr(r),h&4){if(r.stateNode===null)throw Error(t(162));p=r.stateNode,g=r.memoizedProps;try{p.nodeValue=g}catch(ye){dt(r,r.return,ye)}}break;case 3:if(yr(s,r),Dr(r),h&4&&l!==null&&l.memoizedState.isDehydrated)try{hr(s.containerInfo)}catch(ye){dt(r,r.return,ye)}break;case 4:yr(s,r),Dr(r);break;case 13:yr(s,r),Dr(r),p=r.child,p.flags&8192&&(g=p.memoizedState!==null,p.stateNode.isHidden=g,!g||p.alternate!==null&&p.alternate.memoizedState!==null||(xd=Ze())),h&4&&jg(r);break;case 22:if(J=l!==null&&l.memoizedState!==null,r.mode&1?(Qt=($=Qt)||J,yr(s,r),Qt=$):yr(s,r),Dr(r),h&8192){if($=r.memoizedState!==null,(r.stateNode.isHidden=$)&&!J&&r.mode&1)for(pe=r,J=r.child;J!==null;){for(Z=pe=J;pe!==null;){switch(Y=pe,de=Y.child,Y.tag){case 0:case 11:case 14:case 15:Ka(4,Y,Y.return);break;case 1:Fo(Y,Y.return);var me=Y.stateNode;if(typeof me.componentWillUnmount=="function"){h=Y,l=Y.return;try{s=h,me.props=s.memoizedProps,me.state=s.memoizedState,me.componentWillUnmount()}catch(ye){dt(h,l,ye)}}break;case 5:Fo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Hg(Z);continue}}de!==null?(de.return=Y,pe=de):Hg(Z)}J=J.sibling}e:for(J=null,Z=r;;){if(Z.tag===5){if(J===null){J=Z;try{p=Z.stateNode,$?(g=p.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(P=Z.stateNode,D=Z.memoizedProps.style,w=D!=null&&D.hasOwnProperty("display")?D.display:null,P.style.display=yi("display",w))}catch(ye){dt(r,r.return,ye)}}}else if(Z.tag===6){if(J===null)try{Z.stateNode.nodeValue=$?"":Z.memoizedProps}catch(ye){dt(r,r.return,ye)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===r)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===r)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===r)break e;J===Z&&(J=null),Z=Z.return}J===Z&&(J=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:yr(s,r),Dr(r),h&4&&jg(r);break;case 21:break;default:yr(s,r),Dr(r)}}function Dr(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(Fg(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(en(p,""),h.flags&=-33);var g=Ug(r);kd(r,g,p);break;case 3:case 4:var w=h.stateNode.containerInfo,P=Ug(r);Cd(r,P,w);break;default:throw Error(t(161))}}catch(D){dt(r,r.return,D)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function hT(r,s,l){pe=r,$g(r)}function $g(r,s,l){for(var h=(r.mode&1)!==0;pe!==null;){var p=pe,g=p.child;if(p.tag===22&&h){var w=p.memoizedState!==null||Nu;if(!w){var P=p.alternate,D=P!==null&&P.memoizedState!==null||Qt;P=Nu;var $=Qt;if(Nu=w,(Qt=D)&&!$)for(pe=p;pe!==null;)w=pe,D=w.child,w.tag===22&&w.memoizedState!==null?Wg(p):D!==null?(D.return=w,pe=D):Wg(p);for(;g!==null;)pe=g,$g(g),g=g.sibling;pe=p,Nu=P,Qt=$}qg(r)}else p.subtreeFlags&8772&&g!==null?(g.return=p,pe=g):qg(r)}}function qg(r){for(;pe!==null;){var s=pe;if(s.flags&8772){var l=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Qt||xu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Qt)if(l===null)h.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:mr(s.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Hm(s,g,h);break;case 3:var w=s.updateQueue;if(w!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Hm(s,w,l)}break;case 5:var P=s.stateNode;if(l===null&&s.flags&4){l=P;var D=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&l.focus();break;case"img":D.src&&(l.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var $=s.alternate;if($!==null){var J=$.memoizedState;if(J!==null){var Z=J.dehydrated;Z!==null&&hr(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Qt||s.flags&512&&Pd(s)}catch(Y){dt(s,s.return,Y)}}if(s===r){pe=null;break}if(l=s.sibling,l!==null){l.return=s.return,pe=l;break}pe=s.return}}function Hg(r){for(;pe!==null;){var s=pe;if(s===r){pe=null;break}var l=s.sibling;if(l!==null){l.return=s.return,pe=l;break}pe=s.return}}function Wg(r){for(;pe!==null;){var s=pe;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{xu(4,s)}catch(D){dt(s,l,D)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var p=s.return;try{h.componentDidMount()}catch(D){dt(s,p,D)}}var g=s.return;try{Pd(s)}catch(D){dt(s,g,D)}break;case 5:var w=s.return;try{Pd(s)}catch(D){dt(s,w,D)}}}catch(D){dt(s,s.return,D)}if(s===r){pe=null;break}var P=s.sibling;if(P!==null){P.return=s.return,pe=P;break}pe=s.return}}var dT=Math.ceil,Du=W.ReactCurrentDispatcher,bd=W.ReactCurrentOwner,Wn=W.ReactCurrentBatchConfig,He=0,Dt=null,wt=null,Ut=0,kn=0,Uo=xi(0),At=0,Ga=null,Ls=0,Lu=0,Nd=0,Qa=null,pn=null,xd=0,Bo=1/0,oi=null,Ou=!1,Dd=null,Fi=null,Mu=!1,Ui=null,Vu=0,Ya=0,Ld=null,Fu=-1,Uu=0;function on(){return He&6?Ze():Fu!==-1?Fu:Fu=Ze()}function Bi(r){return r.mode&1?He&2&&Ut!==0?Ut&-Ut:QE.transition!==null?(Uu===0&&(Uu=Ts()),Uu):(r=je,r!==0||(r=window.event,r=r===void 0?16:Sa(r.type)),r):1}function _r(r,s,l,h){if(50<Ya)throw Ya=0,Ld=null,Error(t(185));Si(r,l,h),(!(He&2)||r!==Dt)&&(r===Dt&&(!(He&2)&&(Lu|=l),At===4&&ji(r,Ut)),mn(r,h),l===1&&He===0&&!(s.mode&1)&&(Bo=Ze()+500,fu&&Li()))}function mn(r,s){var l=r.callbackNode;Gr(r,s);var h=Es(r,r===Dt?Ut:0);if(h===0)l!==null&&va(l),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(l!=null&&va(l),s===1)r.tag===0?GE(Gg.bind(null,r)):Dm(Gg.bind(null,r)),qE(function(){!(He&6)&&Li()}),l=null;else{switch(Ai(h)){case 1:l=vs;break;case 4:l=Ei;break;case 16:l=Un;break;case 536870912:l=Ul;break;default:l=Un}l=ny(l,Kg.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function Kg(r,s){if(Fu=-1,Uu=0,He&6)throw Error(t(327));var l=r.callbackNode;if(jo()&&r.callbackNode!==l)return null;var h=Es(r,r===Dt?Ut:0);if(h===0)return null;if(h&30||h&r.expiredLanes||s)s=Bu(r,h);else{s=h;var p=He;He|=2;var g=Yg();(Dt!==r||Ut!==s)&&(oi=null,Bo=Ze()+500,Ms(r,s));do try{mT();break}catch(P){Qg(r,P)}while(!0);Jh(),Du.current=g,He=p,wt!==null?s=0:(Dt=null,Ut=0,s=At)}if(s!==0){if(s===2&&(p=Sn(r),p!==0&&(h=p,s=Od(r,p))),s===1)throw l=Ga,Ms(r,0),ji(r,h),mn(r,Ze()),l;if(s===6)ji(r,h);else{if(p=r.current.alternate,!(h&30)&&!fT(p)&&(s=Bu(r,h),s===2&&(g=Sn(r),g!==0&&(h=g,s=Od(r,g))),s===1))throw l=Ga,Ms(r,0),ji(r,h),mn(r,Ze()),l;switch(r.finishedWork=p,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Vs(r,pn,oi);break;case 3:if(ji(r,h),(h&130023424)===h&&(s=xd+500-Ze(),10<s)){if(Es(r,0)!==0)break;if(p=r.suspendedLanes,(p&h)!==h){on(),r.pingedLanes|=r.suspendedLanes&p;break}r.timeoutHandle=jh(Vs.bind(null,r,pn,oi),s);break}Vs(r,pn,oi);break;case 4:if(ji(r,h),(h&4194240)===h)break;for(s=r.eventTimes,p=-1;0<h;){var w=31-nn(h);g=1<<w,w=s[w],w>p&&(p=w),h&=~g}if(h=p,h=Ze()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*dT(h/1960))-h,10<h){r.timeoutHandle=jh(Vs.bind(null,r,pn,oi),h);break}Vs(r,pn,oi);break;case 5:Vs(r,pn,oi);break;default:throw Error(t(329))}}}return mn(r,Ze()),r.callbackNode===l?Kg.bind(null,r):null}function Od(r,s){var l=Qa;return r.current.memoizedState.isDehydrated&&(Ms(r,s).flags|=256),r=Bu(r,s),r!==2&&(s=pn,pn=l,s!==null&&Md(s)),r}function Md(r){pn===null?pn=r:pn.push.apply(pn,r)}function fT(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],g=p.getSnapshot;p=p.value;try{if(!fr(g(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ji(r,s){for(s&=~Nd,s&=~Lu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-nn(s),h=1<<l;r[l]=-1,s&=~h}}function Gg(r){if(He&6)throw Error(t(327));jo();var s=Es(r,0);if(!(s&1))return mn(r,Ze()),null;var l=Bu(r,s);if(r.tag!==0&&l===2){var h=Sn(r);h!==0&&(s=h,l=Od(r,h))}if(l===1)throw l=Ga,Ms(r,0),ji(r,s),mn(r,Ze()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Vs(r,pn,oi),mn(r,Ze()),null}function Vd(r,s){var l=He;He|=1;try{return r(s)}finally{He=l,He===0&&(Bo=Ze()+500,fu&&Li())}}function Os(r){Ui!==null&&Ui.tag===0&&!(He&6)&&jo();var s=He;He|=1;var l=Wn.transition,h=je;try{if(Wn.transition=null,je=1,r)return r()}finally{je=h,Wn.transition=l,He=s,!(He&6)&&Li()}}function Fd(){kn=Uo.current,nt(Uo)}function Ms(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,$E(l)),wt!==null)for(l=wt.return;l!==null;){var h=l;switch(Kh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&hu();break;case 3:Mo(),nt(hn),nt(Wt),od();break;case 5:id(h);break;case 4:Mo();break;case 13:nt(lt);break;case 19:nt(lt);break;case 10:Zh(h.type._context);break;case 22:case 23:Fd()}l=l.return}if(Dt=r,wt=r=zi(r.current,null),Ut=kn=s,At=0,Ga=null,Nd=Lu=Ls=0,pn=Qa=null,Ns!==null){for(s=0;s<Ns.length;s++)if(l=Ns[s],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,g=l.pending;if(g!==null){var w=g.next;g.next=p,h.next=w}l.pending=h}Ns=null}return r}function Qg(r,s){do{var l=wt;try{if(Jh(),Iu.current=Pu,Su){for(var h=ut.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Su=!1}if(Ds=0,xt=Rt=ut=null,za=!1,$a=0,bd.current=null,l===null||l.return===null){At=1,Ga=s,wt=null;break}e:{var g=r,w=l.return,P=l,D=s;if(s=Ut,P.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var $=D,J=P,Z=J.tag;if(!(J.mode&1)&&(Z===0||Z===11||Z===15)){var Y=J.alternate;Y?(J.updateQueue=Y.updateQueue,J.memoizedState=Y.memoizedState,J.lanes=Y.lanes):(J.updateQueue=null,J.memoizedState=null)}var de=wg(w);if(de!==null){de.flags&=-257,Eg(de,w,P,g,s),de.mode&1&&vg(g,$,s),s=de,D=$;var me=s.updateQueue;if(me===null){var ye=new Set;ye.add(D),s.updateQueue=ye}else me.add(D);break e}else{if(!(s&1)){vg(g,$,s),Ud();break e}D=Error(t(426))}}else if(at&&P.mode&1){var yt=wg(w);if(yt!==null){!(yt.flags&65536)&&(yt.flags|=256),Eg(yt,w,P,g,s),Yh(Vo(D,P));break e}}g=D=Vo(D,P),At!==4&&(At=2),Qa===null?Qa=[g]:Qa.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var B=yg(g,D,s);qm(g,B);break e;case 1:P=D;var L=g.type,z=g.stateNode;if(!(g.flags&128)&&(typeof L.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(Fi===null||!Fi.has(z)))){g.flags|=65536,s&=-s,g.lanes|=s;var ne=_g(g,P,s);qm(g,ne);break e}}g=g.return}while(g!==null)}Jg(l)}catch(_e){s=_e,wt===l&&l!==null&&(wt=l=l.return);continue}break}while(!0)}function Yg(){var r=Du.current;return Du.current=Pu,r===null?Pu:r}function Ud(){(At===0||At===3||At===2)&&(At=4),Dt===null||!(Ls&268435455)&&!(Lu&268435455)||ji(Dt,Ut)}function Bu(r,s){var l=He;He|=2;var h=Yg();(Dt!==r||Ut!==s)&&(oi=null,Ms(r,s));do try{pT();break}catch(p){Qg(r,p)}while(!0);if(Jh(),He=l,Du.current=h,wt!==null)throw Error(t(261));return Dt=null,Ut=0,At}function pT(){for(;wt!==null;)Xg(wt)}function mT(){for(;wt!==null&&!Vl();)Xg(wt)}function Xg(r){var s=ty(r.alternate,r,kn);r.memoizedProps=r.pendingProps,s===null?Jg(r):wt=s,bd.current=null}function Jg(r){var s=r;do{var l=s.alternate;if(r=s.return,s.flags&32768){if(l=lT(l,s),l!==null){l.flags&=32767,wt=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{At=6,wt=null;return}}else if(l=aT(l,s,kn),l!==null){wt=l;return}if(s=s.sibling,s!==null){wt=s;return}wt=s=r}while(s!==null);At===0&&(At=5)}function Vs(r,s,l){var h=je,p=Wn.transition;try{Wn.transition=null,je=1,gT(r,s,l,h)}finally{Wn.transition=p,je=h}return null}function gT(r,s,l,h){do jo();while(Ui!==null);if(He&6)throw Error(t(327));l=r.finishedWork;var p=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=l.lanes|l.childLanes;if(Je(r,g),r===Dt&&(wt=Dt=null,Ut=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Mu||(Mu=!0,ny(Un,function(){return jo(),null})),g=(l.flags&15990)!==0,l.subtreeFlags&15990||g){g=Wn.transition,Wn.transition=null;var w=je;je=1;var P=He;He|=4,bd.current=null,cT(r,l),zg(l,r),ME(Uh),Ci=!!Fh,Uh=Fh=null,r.current=l,hT(l),Th(),He=P,je=w,Wn.transition=g}else r.current=l;if(Mu&&(Mu=!1,Ui=r,Vu=p),g=r.pendingLanes,g===0&&(Fi=null),Bl(l.stateNode),mn(r,Ze()),s!==null)for(h=r.onRecoverableError,l=0;l<s.length;l++)p=s[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Ou)throw Ou=!1,r=Dd,Dd=null,r;return Vu&1&&r.tag!==0&&jo(),g=r.pendingLanes,g&1?r===Ld?Ya++:(Ya=0,Ld=r):Ya=0,Li(),null}function jo(){if(Ui!==null){var r=Ai(Vu),s=Wn.transition,l=je;try{if(Wn.transition=null,je=16>r?16:r,Ui===null)var h=!1;else{if(r=Ui,Ui=null,Vu=0,He&6)throw Error(t(331));var p=He;for(He|=4,pe=r.current;pe!==null;){var g=pe,w=g.child;if(pe.flags&16){var P=g.deletions;if(P!==null){for(var D=0;D<P.length;D++){var $=P[D];for(pe=$;pe!==null;){var J=pe;switch(J.tag){case 0:case 11:case 15:Ka(8,J,g)}var Z=J.child;if(Z!==null)Z.return=J,pe=Z;else for(;pe!==null;){J=pe;var Y=J.sibling,de=J.return;if(Vg(J),J===$){pe=null;break}if(Y!==null){Y.return=de,pe=Y;break}pe=de}}}var me=g.alternate;if(me!==null){var ye=me.child;if(ye!==null){me.child=null;do{var yt=ye.sibling;ye.sibling=null,ye=yt}while(ye!==null)}}pe=g}}if(g.subtreeFlags&2064&&w!==null)w.return=g,pe=w;else e:for(;pe!==null;){if(g=pe,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Ka(9,g,g.return)}var B=g.sibling;if(B!==null){B.return=g.return,pe=B;break e}pe=g.return}}var L=r.current;for(pe=L;pe!==null;){w=pe;var z=w.child;if(w.subtreeFlags&2064&&z!==null)z.return=w,pe=z;else e:for(w=L;pe!==null;){if(P=pe,P.flags&2048)try{switch(P.tag){case 0:case 11:case 15:xu(9,P)}}catch(_e){dt(P,P.return,_e)}if(P===w){pe=null;break e}var ne=P.sibling;if(ne!==null){ne.return=P.return,pe=ne;break e}pe=P.return}}if(He=p,Li(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(ws,r)}catch{}h=!0}return h}finally{je=l,Wn.transition=s}}return!1}function Zg(r,s,l){s=Vo(l,s),s=yg(r,s,1),r=Mi(r,s,1),s=on(),r!==null&&(Si(r,1,s),mn(r,s))}function dt(r,s,l){if(r.tag===3)Zg(r,r,l);else for(;s!==null;){if(s.tag===3){Zg(s,r,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Fi===null||!Fi.has(h))){r=Vo(l,r),r=_g(s,r,1),s=Mi(s,r,1),r=on(),s!==null&&(Si(s,1,r),mn(s,r));break}}s=s.return}}function yT(r,s,l){var h=r.pingCache;h!==null&&h.delete(s),s=on(),r.pingedLanes|=r.suspendedLanes&l,Dt===r&&(Ut&l)===l&&(At===4||At===3&&(Ut&130023424)===Ut&&500>Ze()-xd?Ms(r,0):Nd|=l),mn(r,s)}function ey(r,s){s===0&&(r.mode&1?(s=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):s=1);var l=on();r=ri(r,s),r!==null&&(Si(r,s,l),mn(r,l))}function _T(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),ey(r,l)}function vT(r,s){var l=0;switch(r.tag){case 13:var h=r.stateNode,p=r.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),ey(r,l)}var ty;ty=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||hn.current)fn=!0;else{if(!(r.lanes&l)&&!(s.flags&128))return fn=!1,oT(r,s,l);fn=!!(r.flags&131072)}else fn=!1,at&&s.flags&1048576&&Lm(s,mu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;bu(r,s),r=s.pendingProps;var p=ko(s,Wt.current);Oo(s,l),p=ud(null,s,h,r,p,l);var g=cd();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,dn(h)?(g=!0,du(s)):g=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,nd(s),p.updater=Cu,s.stateNode=p,p._reactInternals=s,gd(s,h,r,l),s=wd(null,s,h,!0,g,l)):(s.tag=0,at&&g&&Wh(s),sn(null,s,p,l),s=s.child),s;case 16:h=s.elementType;e:{switch(bu(r,s),r=s.pendingProps,p=h._init,h=p(h._payload),s.type=h,p=s.tag=ET(h),r=mr(h,r),p){case 0:s=vd(null,s,h,r,l);break e;case 1:s=Pg(null,s,h,r,l);break e;case 11:s=Tg(null,s,h,r,l);break e;case 14:s=Ig(null,s,h,mr(h.type,r),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:mr(h,p),vd(r,s,h,p,l);case 1:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:mr(h,p),Pg(r,s,h,p,l);case 3:e:{if(Cg(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,p=g.element,$m(r,s),Eu(s,h,null,l);var w=s.memoizedState;if(h=w.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){p=Vo(Error(t(423)),s),s=kg(r,s,h,l,p);break e}else if(h!==p){p=Vo(Error(t(424)),s),s=kg(r,s,h,l,p);break e}else for(Cn=Ni(s.stateNode.containerInfo.firstChild),Pn=s,at=!0,pr=null,l=jm(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(xo(),h===p){s=si(r,s,l);break e}sn(r,s,h,l)}s=s.child}return s;case 5:return Wm(s),r===null&&Qh(s),h=s.type,p=s.pendingProps,g=r!==null?r.memoizedProps:null,w=p.children,Bh(h,p)?w=null:g!==null&&Bh(h,g)&&(s.flags|=32),Ag(r,s),sn(r,s,w,l),s.child;case 6:return r===null&&Qh(s),null;case 13:return bg(r,s,l);case 4:return rd(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=Do(s,null,h,l):sn(r,s,h,l),s.child;case 11:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:mr(h,p),Tg(r,s,h,p,l);case 7:return sn(r,s,s.pendingProps,l),s.child;case 8:return sn(r,s,s.pendingProps.children,l),s.child;case 12:return sn(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,p=s.pendingProps,g=s.memoizedProps,w=p.value,et(_u,h._currentValue),h._currentValue=w,g!==null)if(fr(g.value,w)){if(g.children===p.children&&!hn.current){s=si(r,s,l);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var P=g.dependencies;if(P!==null){w=g.child;for(var D=P.firstContext;D!==null;){if(D.context===h){if(g.tag===1){D=ii(-1,l&-l),D.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var J=$.pending;J===null?D.next=D:(D.next=J.next,J.next=D),$.pending=D}}g.lanes|=l,D=g.alternate,D!==null&&(D.lanes|=l),ed(g.return,l,s),P.lanes|=l;break}D=D.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=l,P=w.alternate,P!==null&&(P.lanes|=l),ed(w,l,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}sn(r,s,p.children,l),s=s.child}return s;case 9:return p=s.type,h=s.pendingProps.children,Oo(s,l),p=qn(p),h=h(p),s.flags|=1,sn(r,s,h,l),s.child;case 14:return h=s.type,p=mr(h,s.pendingProps),p=mr(h.type,p),Ig(r,s,h,p,l);case 15:return Sg(r,s,s.type,s.pendingProps,l);case 17:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:mr(h,p),bu(r,s),s.tag=1,dn(h)?(r=!0,du(s)):r=!1,Oo(s,l),mg(s,h,p),gd(s,h,p,l),wd(null,s,h,!0,r,l);case 19:return xg(r,s,l);case 22:return Rg(r,s,l)}throw Error(t(156,s.tag))};function ny(r,s){return ao(r,s)}function wT(r,s,l,h){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(r,s,l,h){return new wT(r,s,l,h)}function Bd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function ET(r){if(typeof r=="function")return Bd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===x)return 11;if(r===Le)return 14}return 2}function zi(r,s){var l=r.alternate;return l===null?(l=Kn(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function ju(r,s,l,h,p,g){var w=2;if(h=r,typeof r=="function")Bd(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case b:return Fs(l.children,p,g,s);case R:w=8,p|=8;break;case C:return r=Kn(12,l,s,p|2),r.elementType=C,r.lanes=g,r;case A:return r=Kn(13,l,s,p),r.elementType=A,r.lanes=g,r;case he:return r=Kn(19,l,s,p),r.elementType=he,r.lanes=g,r;case Ie:return zu(l,p,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:w=10;break e;case N:w=9;break e;case x:w=11;break e;case Le:w=14;break e;case Ce:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Kn(w,l,s,p),s.elementType=r,s.type=h,s.lanes=g,s}function Fs(r,s,l,h){return r=Kn(7,r,h,s),r.lanes=l,r}function zu(r,s,l,h){return r=Kn(22,r,h,s),r.elementType=Ie,r.lanes=l,r.stateNode={isHidden:!1},r}function jd(r,s,l){return r=Kn(6,r,null,s),r.lanes=l,r}function zd(r,s,l){return s=Kn(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function TT(r,s,l,h,p){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ii(0),this.expirationTimes=Ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function $d(r,s,l,h,p,g,w,P,D){return r=new TT(r,s,l,P,D),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Kn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},nd(g),r}function IT(r,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:h==null?null:""+h,children:r,containerInfo:s,implementation:l}}function ry(r){if(!r)return Di;r=r._reactInternals;e:{if(or(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(dn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(dn(l))return Nm(r,l,s)}return s}function iy(r,s,l,h,p,g,w,P,D){return r=$d(l,h,!0,r,p,g,w,P,D),r.context=ry(null),l=r.current,h=on(),p=Bi(l),g=ii(h,p),g.callback=s??null,Mi(l,g,p),r.current.lanes=p,Si(r,p,h),mn(r,h),r}function $u(r,s,l,h){var p=s.current,g=on(),w=Bi(p);return l=ry(l),s.context===null?s.context=l:s.pendingContext=l,s=ii(g,w),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=Mi(p,s,w),r!==null&&(_r(r,p,w,g),wu(r,p,w)),w}function qu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function sy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function qd(r,s){sy(r,s),(r=r.alternate)&&sy(r,s)}function ST(){return null}var oy=typeof reportError=="function"?reportError:function(r){console.error(r)};function Hd(r){this._internalRoot=r}Hu.prototype.render=Hd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));$u(r,s,null,null)},Hu.prototype.unmount=Hd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Os(function(){$u(null,r,null,null)}),s[Zr]=null}};function Hu(r){this._internalRoot=r}Hu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Hl();r={blockedOn:null,target:r,priority:s};for(var l=0;l<Ar.length&&s!==0&&s<Ar[l].priority;l++);Ar.splice(l,0,r),l===0&&Gl(r)}};function Wd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Wu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function ay(){}function RT(r,s,l,h,p){if(p){if(typeof h=="function"){var g=h;h=function(){var $=qu(w);g.call($)}}var w=iy(s,h,r,0,null,!1,!1,"",ay);return r._reactRootContainer=w,r[Zr]=w.current,La(r.nodeType===8?r.parentNode:r),Os(),w}for(;p=r.lastChild;)r.removeChild(p);if(typeof h=="function"){var P=h;h=function(){var $=qu(D);P.call($)}}var D=$d(r,0,!1,null,null,!1,!1,"",ay);return r._reactRootContainer=D,r[Zr]=D.current,La(r.nodeType===8?r.parentNode:r),Os(function(){$u(s,D,l,h)}),D}function Ku(r,s,l,h,p){var g=l._reactRootContainer;if(g){var w=g;if(typeof p=="function"){var P=p;p=function(){var D=qu(w);P.call(D)}}$u(s,w,r,p)}else w=RT(l,s,r,p,h);return qu(w)}$l=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=Ti(s.pendingLanes);l!==0&&(Ri(s,l|1),mn(s,Ze()),!(He&6)&&(Bo=Ze()+500,Li()))}break;case 13:Os(function(){var h=ri(r,1);if(h!==null){var p=on();_r(h,r,1,p)}}),qd(r,1)}},co=function(r){if(r.tag===13){var s=ri(r,134217728);if(s!==null){var l=on();_r(s,r,134217728,l)}qd(r,134217728)}},ql=function(r){if(r.tag===13){var s=Bi(r),l=ri(r,s);if(l!==null){var h=on();_r(l,r,s,h)}qd(r,s)}},Hl=function(){return je},Wl=function(r,s){var l=je;try{return je=r,s()}finally{je=l}},wi=function(r,s,l){switch(s){case"input":if($t(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==r&&h.form===r.form){var p=cu(h);if(!p)throw Error(t(90));kt(h),$t(h,p)}}}break;case"textarea":Tn(r,l);break;case"select":s=l.value,s!=null&&tr(r,!!l.multiple,s,!1)}},Fn=Vd,ms=Os;var AT={usingClientEntryPoint:!1,Events:[Va,Po,cu,ht,Ht,Vd]},Xa={findFiberByHostInstance:Ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},PT={bundleType:Xa.bundleType,version:Xa.version,rendererPackageName:Xa.rendererPackageName,rendererConfig:Xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=_a(r),r===null?null:r.stateNode},findFiberByHostInstance:Xa.findFiberByHostInstance||ST,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gu.isDisabled&&Gu.supportsFiber)try{ws=Gu.inject(PT),In=Gu}catch{}}return gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AT,gn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wd(s))throw Error(t(200));return IT(r,s,null,l)},gn.createRoot=function(r,s){if(!Wd(r))throw Error(t(299));var l=!1,h="",p=oy;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=$d(r,1,!1,null,null,l,!1,h,p),r[Zr]=s.current,La(r.nodeType===8?r.parentNode:r),new Hd(s)},gn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=_a(s),r=r===null?null:r.stateNode,r},gn.flushSync=function(r){return Os(r)},gn.hydrate=function(r,s,l){if(!Wu(s))throw Error(t(200));return Ku(null,r,s,!0,l)},gn.hydrateRoot=function(r,s,l){if(!Wd(r))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,g="",w=oy;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),s=iy(s,null,r,1,l??null,p,!1,g,w),r[Zr]=s.current,La(r),h)for(r=0;r<h.length;r++)l=h[r],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Hu(s)},gn.render=function(r,s,l){if(!Wu(s))throw Error(t(200));return Ku(null,r,s,!1,l)},gn.unmountComponentAtNode=function(r){if(!Wu(r))throw Error(t(40));return r._reactRootContainer?(Os(function(){Ku(null,null,r,!1,function(){r._reactRootContainer=null,r[Zr]=null})}),!0):!1},gn.unstable_batchedUpdates=Vd,gn.unstable_renderSubtreeIntoContainer=function(r,s,l,h){if(!Wu(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Ku(r,s,l,!1,h)},gn.version="18.3.1-next-f1338f8080-20240426",gn}var my;function pv(){if(my)return Qd.exports;my=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Qd.exports=OT(),Qd.exports}var gy;function MT(){if(gy)return Qu;gy=1;var n=pv();return Qu.createRoot=n.createRoot,Qu.hydrateRoot=n.hydrateRoot,Qu}var VT=MT();const FT=Xf(VT),yy="pushstate",_y="popstate",mv="beforeunload",gv=n=>(n.preventDefault(),n.returnValue=""),UT=()=>{removeEventListener(mv,gv,{capture:!0})};function yv(n){let e=n.getLocation();const t=new Set;let i=[];const o=()=>{e=n.getLocation(),t.forEach(u=>u({location:e}))},a=async(u,d)=>{var f;if(!((d==null?void 0:d.ignoreBlocker)??!1)&&typeof document<"u"&&i.length){for(const v of i)if(!await v()){(f=n.onBlocked)==null||f.call(n,o);return}}u()};return{get location(){return e},get length(){return n.getLength()},subscribers:t,subscribe:u=>(t.add(u),()=>{t.delete(u)}),push:(u,d,f)=>{d=vy(d),a(()=>{n.pushState(u,d),o()},f)},replace:(u,d,f)=>{d=vy(d),a(()=>{n.replaceState(u,d),o()},f)},go:(u,d)=>{a(()=>{n.go(u),o()},d)},back:u=>{a(()=>{n.back(),o()},u)},forward:u=>{a(()=>{n.forward(),o()},u)},createHref:u=>n.createHref(u),block:u=>(i.push(u),i.length===1&&addEventListener(mv,gv,{capture:!0}),()=>{i=i.filter(d=>d!==u),i.length||UT()}),flush:()=>{var u;return(u=n.flush)==null?void 0:u.call(n)},destroy:()=>{var u;return(u=n.destroy)==null?void 0:u.call(n)},notify:o}}function vy(n){return n||(n={}),{...n,key:zT()}}function BT(n){const e=typeof document<"u"?window:void 0,t=e.history.pushState,i=e.history.replaceState,o=F=>F,a=()=>Sc(`${e.location.pathname}${e.location.search}${e.location.hash}`,e.history.state);let u=a(),d;const f=()=>u;let y,v;const E=()=>{y&&(O._ignoreSubscribers=!0,(y.isPush?e.history.pushState:e.history.replaceState)(y.state,"",y.href),O._ignoreSubscribers=!1,y=void 0,v=void 0,d=void 0)},S=(F,M,ie)=>{const te=o(M);v||(d=u),u=Sc(M,ie),y={href:te,state:ie,isPush:(y==null?void 0:y.isPush)||F==="push"},v||(v=Promise.resolve().then(()=>E()))},T=()=>{u=a(),O.notify()},O=yv({getLocation:f,getLength:()=>e.history.length,pushState:(F,M)=>S("push",F,M),replaceState:(F,M)=>S("replace",F,M),back:()=>e.history.back(),forward:()=>e.history.forward(),go:F=>e.history.go(F),createHref:F=>o(F),flush:E,destroy:()=>{e.history.pushState=t,e.history.replaceState=i,e.removeEventListener(yy,T),e.removeEventListener(_y,T)},onBlocked:F=>{d&&u!==d&&(u=d,F())}});return e.addEventListener(yy,T),e.addEventListener(_y,T),e.history.pushState=function(...F){const M=t.apply(e.history,F);return O._ignoreSubscribers||T(),M},e.history.replaceState=function(...F){const M=i.apply(e.history,F);return O._ignoreSubscribers||T(),M},O}function jT(n={initialEntries:["/"]}){const e=n.initialEntries;let t=n.initialIndex??e.length-1;const i=e.map(()=>({}));return yv({getLocation:()=>Sc(e[t],i[t]),getLength:()=>e.length,pushState:(a,u)=>{t<e.length-1&&(e.splice(t+1),i.splice(t+1)),i.push(u),e.push(a),t=Math.max(e.length-1,0)},replaceState:(a,u)=>{i[t]=u,e[t]=a},back:()=>{t=Math.max(t-1,0)},forward:()=>{t=Math.min(t+1,e.length-1)},go:a=>{t=Math.min(Math.max(t+a,0),e.length-1)},createHref:a=>a})}function Sc(n,e){const t=n.indexOf("#"),i=n.indexOf("?");return{href:n,pathname:n.substring(0,t>0?i>0?Math.min(t,i):t:i>0?i:n.length),hash:t>-1?n.substring(t):"",search:i>-1?n.slice(i,t===-1?void 0:t):"",state:e||{}}}function zT(){return(Math.random()+1).toString(36).substring(7)}var $T="Invariant failed";function _n(n,e){if(!n)throw new Error($T)}const Jd=xe.createContext(null);function _v(){return typeof document>"u"?Jd:window.__TSR_ROUTER_CONTEXT__?window.__TSR_ROUTER_CONTEXT__:(window.__TSR_ROUTER_CONTEXT__=Jd,Jd)}function Js(n){const e=xe.useContext(_v());return n==null||n.warn,e}var Zd={exports:{}},ef={},tf={exports:{}},nf={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy;function qT(){if(wy)return nf;wy=1;var n=Il();function e(E,S){return E===S&&(E!==0||1/E===1/S)||E!==E&&S!==S}var t=typeof Object.is=="function"?Object.is:e,i=n.useState,o=n.useEffect,a=n.useLayoutEffect,u=n.useDebugValue;function d(E,S){var T=S(),O=i({inst:{value:T,getSnapshot:S}}),F=O[0].inst,M=O[1];return a(function(){F.value=T,F.getSnapshot=S,f(F)&&M({inst:F})},[E,T,S]),o(function(){return f(F)&&M({inst:F}),E(function(){f(F)&&M({inst:F})})},[E]),u(T),T}function f(E){var S=E.getSnapshot;E=E.value;try{var T=S();return!t(E,T)}catch{return!0}}function y(E,S){return S()}var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?y:d;return nf.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:v,nf}var Ey;function HT(){return Ey||(Ey=1,tf.exports=qT()),tf.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty;function WT(){if(Ty)return ef;Ty=1;var n=Il(),e=HT();function t(y,v){return y===v&&(y!==0||1/y===1/v)||y!==y&&v!==v}var i=typeof Object.is=="function"?Object.is:t,o=e.useSyncExternalStore,a=n.useRef,u=n.useEffect,d=n.useMemo,f=n.useDebugValue;return ef.useSyncExternalStoreWithSelector=function(y,v,E,S,T){var O=a(null);if(O.current===null){var F={hasValue:!1,value:null};O.current=F}else F=O.current;O=d(function(){function ie(ce){if(!te){if(te=!0,re=ce,ce=S(ce),T!==void 0&&F.hasValue){var b=F.value;if(T(b,ce))return W=b}return W=ce}if(b=W,i(re,ce))return b;var R=S(ce);return T!==void 0&&T(b,R)?(re=ce,b):(re=ce,W=R)}var te=!1,re,W,le=E===void 0?null:E;return[function(){return ie(v())},le===null?void 0:function(){return ie(le())}]},[v,E,S,T]);var M=o(y,O[0],O[1]);return u(function(){F.hasValue=!0,F.value=M},[M]),f(M),M},ef}var Iy;function KT(){return Iy||(Iy=1,Zd.exports=WT()),Zd.exports}var GT=KT();class QT{constructor(e,t){this.listeners=new Set,this._batching=!1,this._flushing=0,this.subscribe=i=>{var o,a;this.listeners.add(i);const u=(a=(o=this.options)==null?void 0:o.onSubscribe)==null?void 0:a.call(o,i,this);return()=>{this.listeners.delete(i),u==null||u()}},this.setState=i=>{var o,a,u;const d=this.state;this.state=(o=this.options)!=null&&o.updateFn?this.options.updateFn(d)(i):i(d),(u=(a=this.options)==null?void 0:a.onUpdate)==null||u.call(a),this._flush()},this._flush=()=>{if(this._batching)return;const i=++this._flushing;this.listeners.forEach(o=>{this._flushing===i&&o()})},this.batch=i=>{if(this._batching)return i();this._batching=!0,i(),this._batching=!1,this._flush()},this.state=e,this.options=t}}function YT(n,e=t=>t){return GT.useSyncExternalStoreWithSelector(n.subscribe,()=>n.state,()=>n.state,e,XT)}function XT(n,e){if(Object.is(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;if(n instanceof Map&&e instanceof Map){if(n.size!==e.size)return!1;for(const[i,o]of n)if(!e.has(i)||!Object.is(o,e.get(i)))return!1;return!0}if(n instanceof Set&&e instanceof Set){if(n.size!==e.size)return!1;for(const i of n)if(!e.has(i))return!1;return!0}const t=Object.keys(n);if(t.length!==Object.keys(e).length)return!1;for(let i=0;i<t.length;i++)if(!Object.prototype.hasOwnProperty.call(e,t[i])||!Object.is(n[t[i]],e[t[i]]))return!1;return!0}const Nn="__root__";function JT(n,e){let t,i,o,a="";for(t in n)if((o=n[t])!==void 0)if(Array.isArray(o))for(i=0;i<o.length;i++)a&&(a+="&"),a+=encodeURIComponent(t)+"="+encodeURIComponent(o[i]);else a&&(a+="&"),a+=encodeURIComponent(t)+"="+encodeURIComponent(o);return""+a}function Sy(n){if(!n)return"";const e=decodeURIComponent(n);return e==="false"?!1:e==="true"?!0:+e*0===0&&+e+""===e?+e:e}function ZT(n,e){let t,i;const o={},a=n.split("&");for(;t=a.shift();){const u=t.indexOf("=");if(u!==-1){i=t.slice(0,u),i=decodeURIComponent(i);const d=t.slice(u+1);o[i]!==void 0?o[i]=[].concat(o[i],Sy(d)):o[i]=Sy(d)}else i=t,i=decodeURIComponent(i),o[i]=""}return o}const eI=nI(JSON.parse),tI=rI(JSON.stringify,JSON.parse);function nI(n){return e=>{e.substring(0,1)==="?"&&(e=e.substring(1));const t=ZT(e);for(const i in t){const o=t[i];if(typeof o=="string")try{t[i]=n(o)}catch{}}return t}}function rI(n,e){function t(i){if(typeof i=="object"&&i!==null)try{return n(i)}catch{}else if(typeof i=="string"&&typeof e=="function")try{return e(i),n(i)}catch{}return i}return i=>{i={...i},Object.keys(i).forEach(a=>{const u=i[a];typeof u>"u"||u===void 0?delete i[a]:i[a]=t(u)});const o=JT(i).toString();return o?`?${o}`:""}}function sl(n){return n[n.length-1]}function iI(n){return typeof n=="function"}function Yu(n,e){return iI(n)?n(e):n}function cc(n,e){return e.reduce((t,i)=>(t[i]=n[i],t),{})}function Gn(n,e){if(n===e)return n;const t=e,i=Ay(n)&&Ay(t);if(i||Jo(n)&&Jo(t)){const o=i?n:Object.keys(n),a=o.length,u=i?t:Object.keys(t),d=u.length,f=i?[]:{};let y=0;for(let v=0;v<d;v++){const E=i?v:u[v];(!i&&o.includes(E)||i)&&n[E]===void 0&&t[E]===void 0?(f[E]=void 0,y++):(f[E]=Gn(n[E],t[E]),f[E]===n[E]&&n[E]!==void 0&&y++)}return a===d&&y===a?n:f}return t}function Jo(n){if(!Ry(n))return!1;const e=n.constructor;if(typeof e>"u")return!0;const t=e.prototype;return!(!Ry(t)||!t.hasOwnProperty("isPrototypeOf"))}function Ry(n){return Object.prototype.toString.call(n)==="[object Object]"}function Ay(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function Py(n,e){let t=Object.keys(n);return e&&(t=t.filter(i=>n[i]!==void 0)),t}function ol(n,e,t){if(n===e)return!0;if(typeof n!=typeof e)return!1;if(Jo(n)&&Jo(e)){const i=(t==null?void 0:t.ignoreUndefined)??!0,o=Py(n,i),a=Py(e,i);return!(t!=null&&t.partial)&&o.length!==a.length?!1:a.every(u=>ol(n[u],e[u],t))}return Array.isArray(n)&&Array.isArray(e)?n.length!==e.length?!1:!n.some((i,o)=>!ol(i,e[o],t)):!1}const Xu=typeof window<"u"?xe.useLayoutEffect:xe.useEffect;function zo(n){let e,t;const i=new Promise((o,a)=>{e=o,t=a});return i.status="pending",i.resolve=o=>{i.status="resolved",i.value=o,e(o),n==null||n(o)},i.reject=o=>{i.status="rejected",t(o)},i}function rf(n){const e=xe.useRef({value:n,prev:null}),t=e.current.value;return n!==t&&(e.current={value:n,prev:t}),e.current.prev}function PD(n,e,t={},i={}){const o=xe.useRef(typeof IntersectionObserver=="function"),a=xe.useRef(null);return xe.useEffect(()=>{if(!(!n.current||!o.current||i.disabled))return a.current=new IntersectionObserver(([u])=>{e(u)},t),a.current.observe(n.current),()=>{var u;(u=a.current)==null||u.disconnect()}},[e,t,i.disabled,n]),a.current}function CD(n){const e=xe.useRef(null);return xe.useEffect(()=>{n&&(typeof n=="function"?n(e.current):n.current=e.current)}),e}function ci(n){return Wc(n.filter(e=>e!==void 0).join("/"))}function Wc(n){return n.replace(/\/{2,}/g,"/")}function Jf(n){return n==="/"?n:n.replace(/^\/{1,}/,"")}function js(n){return n==="/"?n:n.replace(/\/{1,}$/,"")}function sI(n){return js(Jf(n))}function Cy(n,e){return n.endsWith("/")&&n!=="/"&&n!==`${e}/`?n.slice(0,-1):n}function kD(n,e,t){return Cy(n,t)===Cy(e,t)}function oI({basepath:n,base:e,to:t,trailingSlash:i="never",caseSensitive:o}){var a,u;e=Rc(n,e,o),t=Rc(n,t,o);let d=Zo(e);const f=Zo(t);d.length>1&&((a=sl(d))==null?void 0:a.value)==="/"&&d.pop(),f.forEach((v,E)=>{v.value==="/"?E?E===f.length-1&&d.push(v):d=[v]:v.value===".."?d.pop():v.value==="."||d.push(v)}),d.length>1&&(((u=sl(d))==null?void 0:u.value)==="/"?i==="never"&&d.pop():i==="always"&&d.push({type:"pathname",value:"/"}));const y=ci([n,...d.map(v=>v.value)]);return Wc(y)}function Zo(n){if(!n)return[];n=Wc(n);const e=[];if(n.slice(0,1)==="/"&&(n=n.substring(1),e.push({type:"pathname",value:"/"})),!n)return e;const t=n.split("/").filter(Boolean);return e.push(...t.map(i=>i==="$"||i==="*"?{type:"wildcard",value:i}:i.charAt(0)==="$"?{type:"param",value:i}:{type:"pathname",value:decodeURI(i)})),n.slice(-1)==="/"&&(n=n.substring(1),e.push({type:"pathname",value:"/"})),e}function Ju({path:n,params:e,leaveWildcards:t,leaveParams:i,decodeCharMap:o}){const a=Zo(n),u={};for(const[d,f]of Object.entries(e)){const y=typeof f=="string";["*","_splat"].includes(d)?u[d]=y?encodeURI(f):f:u[d]=y?aI(f,o):f}return ci(a.map(d=>{if(d.type==="wildcard"){const f=u._splat;return t?`${d.value}${f??""}`:f}if(d.type==="param"){if(i){const f=u[d.value];return`${d.value}${f??""}`}return u[d.value.substring(1)]??"undefined"}return d.value}))}function aI(n,e){let t=encodeURIComponent(n);if(e)for(const[i,o]of e)t=t.replaceAll(i,o);return t}function Zu(n,e,t){const i=lI(n,e,t);if(!(t.to&&!i))return i??{}}function Rc(n,e,t=!1){const i=t?n:n.toLowerCase(),o=t?e:e.toLowerCase();switch(!0){case i==="/":return e;case o===i:return"";case e.length<n.length:return e;case o[i.length]!=="/":return e;case o.startsWith(i):return e.slice(n.length);default:return e}}function lI(n,e,t){if(n!=="/"&&!e.startsWith(n))return;e=Rc(n,e,t.caseSensitive);const i=Rc(n,`${t.to??"$"}`,t.caseSensitive),o=Zo(e),a=Zo(i);e.startsWith("/")||o.unshift({type:"pathname",value:"/"}),i.startsWith("/")||a.unshift({type:"pathname",value:"/"});const u={};return(()=>{for(let f=0;f<Math.max(o.length,a.length);f++){const y=o[f],v=a[f],E=f>=o.length-1,S=f>=a.length-1;if(v){if(v.type==="wildcard"){const T=decodeURI(ci(o.slice(f).map(O=>O.value)));return u["*"]=T,u._splat=T,!0}if(v.type==="pathname"){if(v.value==="/"&&!(y!=null&&y.value))return!0;if(y){if(t.caseSensitive){if(v.value!==y.value)return!1}else if(v.value.toLowerCase()!==y.value.toLowerCase())return!1}}if(!y)return!1;if(v.type==="param"){if(y.value==="/")return!1;y.value.charAt(0)!=="$"&&(u[v.value.substring(1)]=decodeURIComponent(y.value))}}if(!E&&S)return u["**"]=ci(o.slice(f+1).map(T=>T.value)),!!t.fuzzy&&(v==null?void 0:v.value)!=="/"}return!0})()?u:void 0}function ua(n){if(n.isRedirect=!0,n.statusCode=n.statusCode||n.code||307,n.headers=n.headers||{},n.throw)throw n;return n}function Us(n){return!!(n!=null&&n.isRedirect)}function sf(n){return!!(n!=null&&n.isRedirect)&&n.href}function Zf(n){const e=n.errorComponent??Kc;return we.jsx(uI,{getResetKey:n.getResetKey,onCatch:n.onCatch,children:({error:t,reset:i})=>t?xe.createElement(e,{error:t,reset:i}):n.children})}class uI extends xe.Component{constructor(){super(...arguments),this.state={error:null}}static getDerivedStateFromProps(e){return{resetKey:e.getResetKey()}}static getDerivedStateFromError(e){return{error:e}}reset(){this.setState({error:null})}componentDidUpdate(e,t){t.error&&t.resetKey!==this.state.resetKey&&this.reset()}componentDidCatch(e,t){this.props.onCatch&&this.props.onCatch(e,t)}render(){return this.props.children({error:this.state.resetKey!==this.props.getResetKey()?null:this.state.error,reset:()=>{this.reset()}})}}function Kc({error:n}){const[e,t]=xe.useState(!1);return we.jsxs("div",{style:{padding:".5rem",maxWidth:"100%"},children:[we.jsxs("div",{style:{display:"flex",alignItems:"center",gap:".5rem"},children:[we.jsx("strong",{style:{fontSize:"1rem"},children:"Something went wrong!"}),we.jsx("button",{style:{appearance:"none",fontSize:".6em",border:"1px solid currentColor",padding:".1rem .2rem",fontWeight:"bold",borderRadius:".25rem"},onClick:()=>t(i=>!i),children:e?"Hide Error":"Show Error"})]}),we.jsx("div",{style:{height:".25rem"}}),e?we.jsx("div",{children:we.jsx("pre",{style:{fontSize:".7em",border:"1px solid red",borderRadius:".25rem",padding:".3rem",color:"red",overflow:"auto"},children:n.message?we.jsx("code",{children:n.message}):null})}):null]})}function Qn(n){const e=Js({warn:(n==null?void 0:n.router)===void 0}),t=(n==null?void 0:n.router)||e,i=xe.useRef();return YT(t.__store,o=>{if(n!=null&&n.select){if(n.structuralSharing??t.options.defaultStructuralSharing){const a=Gn(i.current,n.select(o));return i.current=a,a}return n.select(o)}return o})}function cI(n={}){if(n.isNotFound=!0,n.throw)throw n;return n}function vr(n){return!!(n!=null&&n.isNotFound)}function hI(n){const e=Qn({select:t=>`not-found-${t.location.pathname}-${t.status}`});return we.jsx(Zf,{getResetKey:()=>e,onCatch:(t,i)=>{var o;if(vr(t))(o=n.onCatch)==null||o.call(n,t,i);else throw t},errorComponent:({error:t})=>{var i;if(vr(t))return(i=n.fallback)==null?void 0:i.call(n,t);throw t},children:n.children})}function dI(){return we.jsx("p",{children:"Not Found"})}const fI={stringify:n=>JSON.stringify(n,function(t,i){const o=this[t],a=ky.find(u=>u.stringifyCondition(o));return a?a.stringify(o):i}),parse:n=>JSON.parse(n,function(t,i){const o=this[t],a=ky.find(u=>u.parseCondition(o));return a?a.parse(o):i})},ky=[{stringifyCondition:n=>n instanceof Date,stringify:n=>({$date:n.toISOString()}),parseCondition:n=>Jo(n)&&n.$date,parse:n=>new Date(n.$date)},{stringifyCondition:n=>n===void 0,stringify:()=>({$undefined:""}),parseCondition:n=>Jo(n)&&n.$undefined==="",parse:()=>{}}],vv=["component","errorComponent","pendingComponent","notFoundComponent"];function pI(n){var e;for(const t of vv)if((e=n.options[t])!=null&&e.preload)return!0;return!1}function of(n,e){if(n==null)return{};if("~standard"in n){const t=n["~standard"].validate(e);if(t instanceof Promise)throw new If("Async validation not supported");if(t.issues)throw new If(JSON.stringify(t.issues,void 0,2));return t.value}return"parse"in n?n.parse(e):typeof n=="function"?n(e):{}}function mI(n){return new gI(n)}class gI{constructor(e){this.tempLocationKey=`${Math.round(Math.random()*1e7)}`,this.resetNextScroll=!0,this.shouldViewTransition=void 0,this.isViewTransitionTypesSupported=void 0,this.subscribers=new Set,this.startReactTransition=t=>t(),this.update=t=>{var i;t.notFoundRoute&&console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/guide/not-found-errors#migrating-from-notfoundroute for more info.");const o=this.options;this.options={...this.options,...t},this.isServer=this.options.isServer??typeof document>"u",this.pathParamsDecodeCharMap=this.options.pathParamsAllowedCharacters?new Map(this.options.pathParamsAllowedCharacters.map(a=>[encodeURIComponent(a),a])):void 0,(!this.basepath||t.basepath&&t.basepath!==o.basepath)&&(t.basepath===void 0||t.basepath===""||t.basepath==="/"?this.basepath="/":this.basepath=`/${sI(t.basepath)}`),(!this.history||this.options.history&&this.options.history!==this.history)&&(this.history=this.options.history??(this.isServer?jT({initialEntries:[this.basepath||"/"]}):BT()),this.latestLocation=this.parseLocation()),this.options.routeTree!==this.routeTree&&(this.routeTree=this.options.routeTree,this.buildRouteTree()),this.__store||(this.__store=new QT(_I(this.latestLocation),{onUpdate:()=>{this.__store.state={...this.state,cachedMatches:this.state.cachedMatches.filter(a=>!["redirected"].includes(a.status))}}})),typeof window<"u"&&"CSS"in window&&typeof((i=window.CSS)==null?void 0:i.supports)=="function"&&(this.isViewTransitionTypesSupported=window.CSS.supports("selector(:active-view-transition-type(a)"))},this.buildRouteTree=()=>{this.routesById={},this.routesByPath={};const t=this.options.notFoundRoute;t&&(t.init({originalIndex:99999999999,defaultSsr:this.options.defaultSsr}),this.routesById[t.id]=t);const i=u=>{u.forEach((d,f)=>{d.init({originalIndex:f,defaultSsr:this.options.defaultSsr});const y=this.routesById[d.id];if(_n(!y,`Duplicate routes found with id: ${String(d.id)}`),this.routesById[d.id]=d,!d.isRoot&&d.path){const E=js(d.fullPath);(!this.routesByPath[E]||d.fullPath.endsWith("/"))&&(this.routesByPath[E]=d)}const v=d.children;v!=null&&v.length&&i(v)})};i([this.routeTree]);const o=[];Object.values(this.routesById).forEach((u,d)=>{var f;if(u.isRoot||!u.path)return;const y=Jf(u.fullPath),v=Zo(y);for(;v.length>1&&((f=v[0])==null?void 0:f.value)==="/";)v.shift();const E=v.map(S=>S.value==="/"?.75:S.type==="param"?.5:S.type==="wildcard"?.25:1);o.push({child:u,trimmed:y,parsed:v,index:d,scores:E})}),this.flatRoutes=o.sort((u,d)=>{const f=Math.min(u.scores.length,d.scores.length);for(let y=0;y<f;y++)if(u.scores[y]!==d.scores[y])return d.scores[y]-u.scores[y];if(u.scores.length!==d.scores.length)return d.scores.length-u.scores.length;for(let y=0;y<f;y++)if(u.parsed[y].value!==d.parsed[y].value)return u.parsed[y].value>d.parsed[y].value?1:-1;return u.index-d.index}).map((u,d)=>(u.child.rank=d,u.child))},this.subscribe=(t,i)=>{const o={eventType:t,fn:i};return this.subscribers.add(o),()=>{this.subscribers.delete(o)}},this.emit=t=>{this.subscribers.forEach(i=>{i.eventType===t.type&&i.fn(t)})},this.parseLocation=t=>{const i=({pathname:d,search:f,hash:y,state:v})=>{const E=this.options.parseSearch(f),S=this.options.stringifySearch(E);return{pathname:d,searchStr:S,search:Gn(t==null?void 0:t.search,E),hash:y.split("#").reverse()[0]??"",href:`${d}${S}${y}`,state:Gn(t==null?void 0:t.state,v)}},o=i(this.history.location),{__tempLocation:a,__tempKey:u}=o.state;if(a&&(!u||u===this.tempLocationKey)){const d=i(a);return d.state.key=o.state.key,delete d.state.__tempLocation,{...d,maskedLocation:o}}return o},this.resolvePathWithBase=(t,i)=>oI({basepath:this.basepath,base:t,to:Wc(i),trailingSlash:this.options.trailingSlash,caseSensitive:this.options.caseSensitive}),this.getMatchedRoutes=(t,i)=>{let o={};const a=js(t.pathname),u=v=>Zu(this.basepath,a,{to:v.fullPath,caseSensitive:v.options.caseSensitive??this.options.caseSensitive,fuzzy:!0});let d=(i==null?void 0:i.to)!==void 0?this.routesByPath[i.to]:void 0;d?o=u(d):d=this.flatRoutes.find(v=>{const E=u(v);return E?(o=E,!0):!1});let f=d||this.routesById[Nn];const y=[f];for(;f.parentRoute;)f=f.parentRoute,y.unshift(f);return{matchedRoutes:y,routeParams:o,foundRoute:d}},this.cancelMatch=t=>{const i=this.getMatch(t);i&&(i.abortController.abort(),clearTimeout(i.pendingTimeout))},this.cancelMatches=()=>{var t;(t=this.state.pendingMatches)==null||t.forEach(i=>{this.cancelMatch(i.id)})},this.buildLocation=t=>{const i=(a={},u)=>{var d,f,y,v,E,S;const T=a._fromLocation?this.matchRoutes(a._fromLocation,{_buildLocation:!0}):this.state.matches,O=a.from!=null?T.find(N=>Zu(this.basepath,js(N.pathname),{to:a.from,caseSensitive:!1,fuzzy:!1})):void 0,F=(O==null?void 0:O.pathname)||this.latestLocation.pathname;_n(a.from==null||O!=null,"Could not find match for from: "+a.from);const M=(d=this.state.pendingMatches)!=null&&d.length?(f=sl(this.state.pendingMatches))==null?void 0:f.search:((y=sl(T))==null?void 0:y.search)||this.latestLocation.search,ie=u==null?void 0:u.matchedRoutes.filter(N=>T.find(x=>x.routeId===N.id));let te;if(a.to)te=this.resolvePathWithBase(F,`${a.to}`);else{const N=this.routesById[(v=ie==null?void 0:ie.find(x=>{const A=Ju({path:x.fullPath,params:(u==null?void 0:u.routeParams)??{},decodeCharMap:this.pathParamsDecodeCharMap});return ci([this.basepath,A])===F}))==null?void 0:v.id];te=this.resolvePathWithBase(F,(N==null?void 0:N.to)??F)}const re={...(E=sl(T))==null?void 0:E.params};let W=(a.params??!0)===!0?re:{...re,...Yu(a.params,re)};Object.keys(W).length>0&&(u==null||u.matchedRoutes.map(N=>{var x;return((x=N.options.params)==null?void 0:x.stringify)??N.options.stringifyParams}).filter(Boolean).forEach(N=>{W={...W,...N(W)}})),te=Ju({path:te,params:W??{},leaveWildcards:!1,leaveParams:t.leaveParams,decodeCharMap:this.pathParamsDecodeCharMap});let le=M;if(t._includeValidateSearch&&((S=this.options.search)!=null&&S.strict)){let N={};u==null||u.matchedRoutes.forEach(x=>{try{x.options.validateSearch&&(N={...N,...of(x.options.validateSearch,{...N,...le})??{}})}catch{}}),le=N}le=(N=>{const x=(u==null?void 0:u.matchedRoutes.reduce((Le,Ce)=>{var Ie;const Q=[];if("search"in Ce.options)(Ie=Ce.options.search)!=null&&Ie.middlewares&&Q.push(...Ce.options.search.middlewares);else if(Ce.options.preSearchFilters||Ce.options.postSearchFilters){const G=({search:ee,next:V})=>{let j=ee;"preSearchFilters"in Ce.options&&Ce.options.preSearchFilters&&(j=Ce.options.preSearchFilters.reduce((oe,ue)=>ue(oe),ee));const X=V(j);return"postSearchFilters"in Ce.options&&Ce.options.postSearchFilters?Ce.options.postSearchFilters.reduce((oe,ue)=>ue(oe),X):X};Q.push(G)}if(t._includeValidateSearch&&Ce.options.validateSearch){const G=({search:ee,next:V})=>{try{const j=V(ee);return{...j,...of(Ce.options.validateSearch,j)??{}}}catch{}};Q.push(G)}return Le.concat(Q)},[]))??[],A=({search:Le})=>a.search?a.search===!0?Le:Yu(a.search,Le):{};x.push(A);const he=(Le,Ce)=>{if(Le>=x.length)return Ce;const Ie=x[Le];return Ie({search:Ce,next:G=>he(Le+1,G)})};return he(0,N)})(le),le=Gn(M,le);const b=this.options.stringifySearch(le),R=a.hash===!0?this.latestLocation.hash:a.hash?Yu(a.hash,this.latestLocation.hash):void 0,C=R?`#${R}`:"";let k=a.state===!0?this.latestLocation.state:a.state?Yu(a.state,this.latestLocation.state):{};return k=Gn(this.latestLocation.state,k),{pathname:te,search:le,searchStr:b,state:k,hash:R??"",href:`${te}${b}${C}`,unmaskOnReload:a.unmaskOnReload}},o=(a={},u)=>{var d;const f=i(a);let y=u?i(u):void 0;if(!y){let S={};const T=(d=this.options.routeMasks)==null?void 0:d.find(O=>{const F=Zu(this.basepath,f.pathname,{to:O.from,caseSensitive:!1,fuzzy:!1});return F?(S=F,!0):!1});if(T){const{from:O,...F}=T;u={...cc(t,["from"]),...F,params:S},y=i(u)}}const v=this.getMatchedRoutes(f,a),E=i(a,v);if(y){const S=this.getMatchedRoutes(y,u),T=i(u,S);E.maskedLocation=T}return E};return t.mask?o(t,{...cc(t,["from"]),...t.mask}):o(t)},this.commitLocation=({viewTransition:t,ignoreBlocker:i,...o})=>{const a=()=>{o.state.key=this.latestLocation.state.key;const f=ol(o.state,this.latestLocation.state);return delete o.state.key,f},u=this.latestLocation.href===o.href,d=this.commitLocationPromise;if(this.commitLocationPromise=zo(()=>{d==null||d.resolve()}),u&&a())this.load();else{let{maskedLocation:f,...y}=o;f&&(y={...f,state:{...f.state,__tempKey:void 0,__tempLocation:{...y,search:y.searchStr,state:{...y.state,__tempKey:void 0,__tempLocation:void 0,key:void 0}}}},(y.unmaskOnReload??this.options.unmaskOnReload??!1)&&(y.state.__tempKey=this.tempLocationKey)),this.shouldViewTransition=t,this.history[o.replace?"replace":"push"](y.href,y.state,{ignoreBlocker:i})}return this.resetNextScroll=o.resetScroll??!0,this.history.subscribers.size||this.load(),this.commitLocationPromise},this.buildAndCommitLocation=({replace:t,resetScroll:i,viewTransition:o,ignoreBlocker:a,...u}={})=>{const d=u.href;if(d){const y=Sc(d,{});u.to=y.pathname,u.search=this.options.parseSearch(y.search),u.hash=y.hash.slice(1)}const f=this.buildLocation({...u,_includeValidateSearch:!0});return this.commitLocation({...f,viewTransition:o,replace:t,resetScroll:i,ignoreBlocker:a})},this.navigate=({to:t,...i})=>{const o=String(t);let a;try{new URL(`${o}`),a=!0}catch{}return _n(!a),this.buildAndCommitLocation({...i,to:t})},this.load=async()=>{this.latestLocation=this.parseLocation(this.latestLocation);let t,i,o;for(o=new Promise(a=>{this.startReactTransition(async()=>{var u;try{const d=this.latestLocation,f=this.state.resolvedLocation,y=f.href!==d.href,v=f.pathname!==d.pathname;this.cancelMatches();let E;this.__store.batch(()=>{E=this.matchRoutes(d),this.__store.setState(S=>({...S,status:"pending",isLoading:!0,location:d,pendingMatches:E,cachedMatches:S.cachedMatches.filter(T=>!E.find(O=>O.id===T.id))}))}),this.state.redirect||this.emit({type:"onBeforeNavigate",fromLocation:f,toLocation:d,pathChanged:v,hrefChanged:y}),this.emit({type:"onBeforeLoad",fromLocation:f,toLocation:d,pathChanged:v,hrefChanged:y}),await this.loadMatches({matches:E,location:d,onReady:async()=>{this.startViewTransition(async()=>{let S,T,O;this.__store.batch(()=>{this.__store.setState(F=>{const M=F.matches,ie=F.pendingMatches||F.matches;return S=M.filter(te=>!ie.find(re=>re.id===te.id)),T=ie.filter(te=>!M.find(re=>re.id===te.id)),O=M.filter(te=>ie.find(re=>re.id===te.id)),{...F,isLoading:!1,loadedAt:Date.now(),matches:ie,pendingMatches:void 0,cachedMatches:[...F.cachedMatches,...S.filter(te=>te.status!=="error")]}}),this.clearExpiredCache()}),[[S,"onLeave"],[T,"onEnter"],[O,"onStay"]].forEach(([F,M])=>{F.forEach(ie=>{var te,re;(re=(te=this.looseRoutesById[ie.routeId].options)[M])==null||re.call(te,ie)})})})}})}catch(d){sf(d)?(t=d,this.isServer||this.navigate({...d,replace:!0,ignoreBlocker:!0})):vr(d)&&(i=d),this.__store.setState(f=>({...f,statusCode:t?t.statusCode:i?404:f.matches.some(y=>y.status==="error")?500:200,redirect:t}))}this.latestLoadPromise===o&&((u=this.commitLocationPromise)==null||u.resolve(),this.latestLoadPromise=void 0,this.commitLocationPromise=void 0),a()})}),this.latestLoadPromise=o,await o;this.latestLoadPromise&&o!==this.latestLoadPromise;)await this.latestLoadPromise},this.startViewTransition=t=>{const i=this.shouldViewTransition??this.options.defaultViewTransition;if(delete this.shouldViewTransition,i&&typeof document<"u"&&"startViewTransition"in document&&typeof document.startViewTransition=="function"){let o;typeof i=="object"&&this.isViewTransitionTypesSupported?o={update:t,types:i.types}:o=t,document.startViewTransition(o)}else t()},this.updateMatch=(t,i)=>{var o;let a;const u=(o=this.state.pendingMatches)==null?void 0:o.find(v=>v.id===t),d=this.state.matches.find(v=>v.id===t),f=this.state.cachedMatches.find(v=>v.id===t),y=u?"pendingMatches":d?"matches":f?"cachedMatches":"";return y&&this.__store.setState(v=>{var E;return{...v,[y]:(E=v[y])==null?void 0:E.map(S=>S.id===t?a=i(S):S)}}),a},this.getMatch=t=>[...this.state.cachedMatches,...this.state.pendingMatches??[],...this.state.matches].find(i=>i.id===t),this.loadMatches=async({location:t,matches:i,preload:o,onReady:a,updateMatch:u=this.updateMatch})=>{let d,f=!1;const y=async()=>{f||(f=!0,await(a==null?void 0:a()))},v=S=>!!(o&&!this.state.matches.find(T=>T.id===S));!this.isServer&&!this.state.matches.length&&y();const E=(S,T)=>{var O,F,M;if(sf(T))throw T;if(Us(T)||vr(T)){if(u(S.id,ie=>({...ie,status:Us(T)?"redirected":vr(T)?"notFound":"error",isFetching:!1,error:T,beforeLoadPromise:void 0,loaderPromise:void 0})),T.routeId||(T.routeId=S.routeId),(O=S.beforeLoadPromise)==null||O.resolve(),(F=S.loaderPromise)==null||F.resolve(),(M=S.loadPromise)==null||M.resolve(),Us(T))throw f=!0,T=this.resolveRedirect({...T,_fromLocation:t}),T;if(vr(T))throw this._handleNotFound(i,T,{updateMatch:u}),T}};try{await new Promise((S,T)=>{(async()=>{var O,F,M;try{const ie=(W,le,ce)=>{var b,R;const{id:C,routeId:k}=i[W],N=this.looseRoutesById[k];if(le instanceof Promise)throw le;le.routerCode=ce,d=d??W,E(this.getMatch(C),le);try{(R=(b=N.options).onError)==null||R.call(b,le)}catch(x){le=x,E(this.getMatch(C),le)}u(C,x=>{var A,he;return(A=x.beforeLoadPromise)==null||A.resolve(),(he=x.loadPromise)==null||he.resolve(),{...x,error:le,status:"error",isFetching:!1,updatedAt:Date.now(),abortController:new AbortController,beforeLoadPromise:void 0}})};for(const[W,{id:le,routeId:ce}]of i.entries()){const b=this.getMatch(le),R=(O=i[W-1])==null?void 0:O.id,C=this.looseRoutesById[ce],k=C.options.pendingMs??this.options.defaultPendingMs,N=!!(a&&!this.isServer&&!v(le)&&(C.options.loader||C.options.beforeLoad)&&typeof k=="number"&&k!==1/0&&(C.options.pendingComponent??this.options.defaultPendingComponent));let x=!0;if((b.beforeLoadPromise||b.loaderPromise)&&(N&&setTimeout(()=>{try{y()}catch{}},k),await b.beforeLoadPromise,x=this.getMatch(le).status!=="success"),x){try{u(le,ue=>({...ue,loadPromise:zo(()=>{var Ae;(Ae=ue.loadPromise)==null||Ae.resolve()}),beforeLoadPromise:zo()}));const A=new AbortController;let he;N&&(he=setTimeout(()=>{try{y()}catch{}},k));const{paramsError:Le,searchError:Ce}=this.getMatch(le);Le&&ie(W,Le,"PARSE_PARAMS"),Ce&&ie(W,Ce,"VALIDATE_SEARCH");const Ie=()=>R?this.getMatch(R).context:this.options.context??{};u(le,ue=>({...ue,isFetching:"beforeLoad",fetchCount:ue.fetchCount+1,abortController:A,pendingTimeout:he,context:{...Ie(),...ue.__routeContext,...ue.__beforeLoadContext}}));const{search:Q,params:G,context:ee,cause:V}=this.getMatch(le),j=v(le),X={search:Q,abortController:A,params:G,preload:j,context:ee,location:t,navigate:ue=>this.navigate({...ue,_fromLocation:t}),buildLocation:this.buildLocation,cause:j?"preload":V,matches:i};let oe=await((M=(F=C.options).beforeLoad)==null?void 0:M.call(F,X))??{};this.serializeLoaderData&&(oe=this.serializeLoaderData("__beforeLoadContext",oe,{router:this,match:this.getMatch(le)})),(Us(oe)||vr(oe))&&ie(W,oe,"BEFORE_LOAD"),u(le,ue=>({...ue,__beforeLoadContext:oe,context:{...Ie(),...ue.__routeContext,...oe},abortController:A}))}catch(A){ie(W,A,"BEFORE_LOAD")}u(le,A=>{var he;return(he=A.beforeLoadPromise)==null||he.resolve(),{...A,beforeLoadPromise:void 0,isFetching:!1}})}}const te=i.slice(0,d),re=[];te.forEach(({id:W,routeId:le},ce)=>{re.push((async()=>{const{loaderPromise:b}=this.getMatch(W);let R=!1;if(b)await b;else{const C=re[ce-1],k=this.looseRoutesById[le],N=()=>{const{params:j,loaderDeps:X,abortController:oe,context:ue,cause:Ae}=this.getMatch(W),ve=v(W);return{params:j,deps:X,preload:!!ve,parentMatchPromise:C,abortController:oe,context:ue,location:t,navigate:Oe=>this.navigate({...Oe,_fromLocation:t}),cause:ve?"preload":Ae,route:k}},x=Date.now()-this.getMatch(W).updatedAt,A=v(W),he=A?k.options.preloadStaleTime??this.options.defaultPreloadStaleTime??3e4:k.options.staleTime??this.options.defaultStaleTime??0,Le=k.options.shouldReload,Ce=typeof Le=="function"?Le(N()):Le;u(W,j=>({...j,loaderPromise:zo(),preload:!!A&&!this.state.matches.find(X=>X.id===W)}));const Ie=async()=>{var j,X,oe,ue,Ae,ve,Oe,Be;try{const Ye=async()=>{const Ke=this.getMatch(W);Ke.minPendingPromise&&await Ke.minPendingPromise};try{k._lazyPromise===void 0&&(k.lazyFn?k._lazyPromise=k.lazyFn().then($t=>{const{id:ln,...er}=$t.options;Object.assign(k.options,er)}):k._lazyPromise=Promise.resolve()),k._componentsPromise===void 0&&(k._componentsPromise=k._lazyPromise.then(()=>Promise.all(vv.map(async $t=>{const ln=k.options[$t];ln!=null&&ln.preload&&await ln.preload()})))),u(W,$t=>({...$t,isFetching:"loader"}));let Ke=await((X=(j=k.options).loader)==null?void 0:X.call(j,N()));this.serializeLoaderData&&(Ke=this.serializeLoaderData("loaderData",Ke,{router:this,match:this.getMatch(W)})),E(this.getMatch(W),Ke),await k._lazyPromise,await Ye();const kt=(ue=(oe=k.options).head)==null?void 0:ue.call(oe,{matches:i,match:this.getMatch(W),params:this.getMatch(W).params,loaderData:Ke}),bt=kt==null?void 0:kt.meta,Zn=kt==null?void 0:kt.links,Mn=kt==null?void 0:kt.scripts,Hr=(ve=(Ae=k.options).headers)==null?void 0:ve.call(Ae,{loaderData:Ke});u(W,$t=>({...$t,error:void 0,status:"success",isFetching:!1,updatedAt:Date.now(),loaderData:Ke,meta:bt,links:Zn,scripts:Mn,headers:Hr}))}catch(Ke){let kt=Ke;await Ye(),E(this.getMatch(W),Ke);try{(Be=(Oe=k.options).onError)==null||Be.call(Oe,Ke)}catch(bt){kt=bt,E(this.getMatch(W),bt)}u(W,bt=>({...bt,error:kt,status:"error",isFetching:!1}))}await k._componentsPromise}catch(Ye){u(W,Ke=>({...Ke,loaderPromise:void 0})),E(this.getMatch(W),Ye)}},{status:Q,invalid:G}=this.getMatch(W);R=Q==="success"&&(G||(Ce??x>he)),A&&k.options.preload===!1||(R?(async()=>{try{await Ie()}catch(j){sf(j)&&await this.navigate(j)}})():Q!=="success"&&await Ie());const{loaderPromise:ee,loadPromise:V}=this.getMatch(W);ee==null||ee.resolve(),V==null||V.resolve()}return u(W,C=>({...C,isFetching:R?C.isFetching:!1,loaderPromise:void 0,invalid:!1})),this.getMatch(W)})())}),await Promise.all(re),S()}catch(ie){T(ie)}})()}),await y()}catch(S){if(Us(S)||vr(S))throw vr(S)&&!o&&await y(),S}return i},this.invalidate=t=>{const i=o=>{var a;return((a=t==null?void 0:t.filter)==null?void 0:a.call(t,o))??!0?{...o,invalid:!0,...o.status==="error"?{status:"pending",error:void 0}:{}}:o};return this.__store.setState(o=>{var a;return{...o,matches:o.matches.map(i),cachedMatches:o.cachedMatches.map(i),pendingMatches:(a=o.pendingMatches)==null?void 0:a.map(i)}}),this.load()},this.resolveRedirect=t=>{const i=t;return i.href||(i.href=this.buildLocation(i).href),i},this.clearCache=t=>{const i=t==null?void 0:t.filter;i!==void 0?this.__store.setState(o=>({...o,cachedMatches:o.cachedMatches.filter(a=>!i(a))})):this.__store.setState(o=>({...o,cachedMatches:[]}))},this.clearExpiredCache=()=>{const t=i=>{const o=this.looseRoutesById[i.routeId];if(!o.options.loader)return!0;const a=(i.preload?o.options.preloadGcTime??this.options.defaultPreloadGcTime:o.options.gcTime??this.options.defaultGcTime)??5*60*1e3;return!(i.status!=="error"&&Date.now()-i.updatedAt<a)};this.clearCache({filter:t})},this.preloadRoute=async t=>{const i=this.buildLocation(t);let o=this.matchRoutes(i,{throwOnError:!0,preload:!0,dest:t});const a=new Set([...this.state.matches,...this.state.pendingMatches??[]].map(d=>d.id)),u=new Set([...a,...this.state.cachedMatches.map(d=>d.id)]);this.__store.batch(()=>{o.forEach(d=>{u.has(d.id)||this.__store.setState(f=>({...f,cachedMatches:[...f.cachedMatches,d]}))})});try{return o=await this.loadMatches({matches:o,location:i,preload:!0,updateMatch:(d,f)=>{a.has(d)?o=o.map(y=>y.id===d?f(y):y):this.updateMatch(d,f)}}),o}catch(d){if(Us(d))return await this.preloadRoute({...d,_fromLocation:i});console.error(d);return}},this.matchRoute=(t,i)=>{const o={...t,to:t.to?this.resolvePathWithBase(t.from||"",t.to):void 0,params:t.params||{},leaveParams:!0},a=this.buildLocation(o);if(i!=null&&i.pending&&this.state.status!=="pending")return!1;const d=((i==null?void 0:i.pending)===void 0?!this.state.isLoading:i.pending)?this.latestLocation:this.state.resolvedLocation,f=Zu(this.basepath,d.pathname,{...i,to:a.pathname});return!f||t.params&&!ol(f,t.params,{partial:!0})?!1:f&&((i==null?void 0:i.includeSearch)??!0)?ol(d.search,a.search,{partial:!0})?f:!1:f},this.dehydrate=()=>{var t;const i=((t=this.options.errorSerializer)==null?void 0:t.serialize)??vI;return{state:{dehydratedMatches:this.state.matches.map(o=>({...cc(o,["id","status","updatedAt"]),error:o.error?{data:i(o.error),__isServerError:!0}:void 0}))},manifest:this.manifest}},this.hydrate=()=>{var t,i,o;let a;typeof document<"u"&&(a=this.options.transformer.parse((t=window.__TSR__)==null?void 0:t.dehydrated)),_n(a),this.dehydratedData=a.payload,(o=(i=this.options).hydrate)==null||o.call(i,a.payload);const u=a.router.state,d=this.matchRoutes(this.state.location).map(f=>{const y=u.dehydratedMatches.find(v=>v.id===f.id);return _n(y,`Could not find a client-side match for dehydrated match with id: ${f.id}!`),{...f,...y}});this.__store.setState(f=>({...f,matches:d})),this.manifest=a.router.manifest},this.injectedHtml=[],this.injectHtml=t=>{const i=()=>(this.injectedHtml=this.injectedHtml.filter(o=>o!==i),t);this.injectedHtml.push(i)},this.injectScript=(t,i)=>{this.injectHtml(`<script class='tsr-once'>${t}; if (typeof __TSR__ !== 'undefined') __TSR__.cleanScripts()<\/script>`)},this.streamedKeys=new Set,this.getStreamedValue=t=>{var i;if(this.isServer)return;const o=(i=window.__TSR__)==null?void 0:i.streamedValues[t];if(o)return o.parsed||(o.parsed=this.options.transformer.parse(o.value)),o.parsed},this.streamValue=(t,i)=>{var o;this.streamedKeys.has(t),this.streamedKeys.add(t),this.injectScript(`__TSR__.streamedValues['${t}'] = { value: ${(o=this.serializer)==null?void 0:o.call(this,this.options.transformer.stringify(i))}}`)},this._handleNotFound=(t,i,{updateMatch:o=this.updateMatch}={})=>{const a=Object.fromEntries(t.map(f=>[f.routeId,f]));let u=(i.global?this.looseRoutesById[Nn]:this.looseRoutesById[i.routeId])||this.looseRoutesById[Nn];for(;!u.options.notFoundComponent&&!this.options.defaultNotFoundComponent&&u.id!==Nn;)u=u.parentRoute,_n(u);const d=a[u.id];_n(d,"Could not find match for route: "+u.id),o(d.id,f=>({...f,status:"notFound",error:i,isFetching:!1})),i.routerCode==="BEFORE_LOAD"&&u.parentRoute&&(i.routeId=u.parentRoute.id,this._handleNotFound(t,i,{updateMatch:o}))},this.hasNotFoundMatch=()=>this.__store.state.matches.some(t=>t.status==="notFound"||t.globalNotFound),this.update({defaultPreloadDelay:50,defaultPendingMs:1e3,defaultPendingMinMs:500,context:void 0,...e,caseSensitive:e.caseSensitive??!1,notFoundMode:e.notFoundMode??"fuzzy",stringifySearch:e.stringifySearch??tI,parseSearch:e.parseSearch??eI,transformer:e.transformer??fI}),typeof document<"u"&&(window.__TSR__ROUTER__=this)}get state(){return this.__store.state}get looseRoutesById(){return this.routesById}matchRoutes(e,t,i){return typeof e=="string"?this.matchRoutesInternal({pathname:e,search:t},i):this.matchRoutesInternal(e,t)}matchRoutesInternal(e,t){const{foundRoute:i,matchedRoutes:o,routeParams:a}=this.getMatchedRoutes(e,t==null?void 0:t.dest);let u=!1;(i?i.path!=="/"&&a["**"]:js(e.pathname))&&(this.options.notFoundRoute?o.push(this.options.notFoundRoute):u=!0);const d=(()=>{if(u){if(this.options.notFoundMode!=="root")for(let v=o.length-1;v>=0;v--){const E=o[v];if(E.children)return E.id}return Nn}})(),f=o.map(v=>{var E;let S;const T=((E=v.options.params)==null?void 0:E.parse)??v.options.parseParams;if(T)try{const O=T(a);Object.assign(a,O)}catch(O){if(S=new yI(O.message,{cause:O}),t!=null&&t.throwOnError)throw S;return S}}),y=[];return o.forEach((v,E)=>{var S,T,O,F,M,ie,te,re;const W=y[E-1],[le,ce]=(()=>{const Q=(W==null?void 0:W.search)??e.search;try{const G=of(v.options.validateSearch,Q)??{};return[{...Q,...G},void 0]}catch(G){const ee=new If(G.message,{cause:G});if(t!=null&&t.throwOnError)throw ee;return[Q,ee]}})(),b=((T=(S=v.options).loaderDeps)==null?void 0:T.call(S,{search:le}))??"",R=b?JSON.stringify(b):"",C=Ju({path:v.fullPath,params:a,decodeCharMap:this.pathParamsDecodeCharMap}),k=Ju({path:v.id,params:a,leaveWildcards:!0,decodeCharMap:this.pathParamsDecodeCharMap})+R,N=this.getMatch(k),x=this.state.matches.find(Q=>Q.routeId===v.id),A=x?"stay":"enter";let he;if(N)he={...N,cause:A,params:x?Gn(x.params,a):a,search:Gn(x?x.search:N.search,le)};else{const Q=v.options.loader||v.options.beforeLoad||v.lazyFn||pI(v)?"pending":"success";he={id:k,index:E,routeId:v.id,params:x?Gn(x.params,a):a,pathname:ci([this.basepath,C]),updatedAt:Date.now(),search:x?Gn(x.search,le):le,searchError:void 0,status:Q,isFetching:!1,error:void 0,paramsError:f[E],__routeContext:{},__beforeLoadContext:{},context:{},abortController:new AbortController,fetchCount:0,cause:A,loaderDeps:x?Gn(x.loaderDeps,b):b,invalid:!1,preload:!1,links:void 0,scripts:void 0,meta:void 0,staticData:v.options.staticData||{},loadPromise:zo(),fullPath:v.fullPath}}const Le=(F=(O=v.options).head)==null?void 0:F.call(O,{matches:y,match:he,params:he.params,loaderData:he.loaderData??void 0});he.links=Le==null?void 0:Le.links,he.scripts=Le==null?void 0:Le.scripts,he.meta=Le==null?void 0:Le.meta,he.status==="success"&&(he.headers=(ie=(M=v.options).headers)==null?void 0:ie.call(M,{loaderData:he.loaderData})),t!=null&&t.preload||(he.globalNotFound=d===v.id),he.searchError=ce;const Ie=(W==null?void 0:W.id)?W.context??this.options.context??{}:this.options.context??{};if(he.context={...Ie,...he.__routeContext,...he.__beforeLoadContext},!N&&(t==null?void 0:t._buildLocation)!==!0){const Q={deps:b,params:he.params,context:he.context,location:e,navigate:G=>this.navigate({...G,_fromLocation:e}),buildLocation:this.buildLocation,cause:he.cause,abortController:he.abortController,preload:!!he.preload,matches:y};he.__routeContext=((re=(te=v.options).context)==null?void 0:re.call(te,Q))??{},he.context={...Ie,...he.__routeContext,...he.__beforeLoadContext}}y.push(he)}),y}}class If extends Error{}class yI extends Error{}function _I(n){return{loadedAt:0,isLoading:!1,isTransitioning:!1,status:"idle",resolvedLocation:{...n},location:n,matches:[],pendingMatches:[],cachedMatches:[],statusCode:200}}function vI(n){return n instanceof Error?{name:n.name,message:n.message}:{data:n}}function by(n){return!(typeof n=="object"&&n&&"data"in n)||!("__isServerError"in n&&n.__isServerError)||!(typeof n.data=="object"&&n.data)?!1:n.__isServerError===!0}function Ny(n){if("name"in n&&"message"in n){const e=new Error(n.message);return e.name=n.name,e}return n.data}const Gc=xe.createContext(void 0),wI=xe.createContext(void 0);function jr(n){const e=xe.useContext(n.from?wI:Gc);return Qn({select:i=>{const o=i.matches.find(a=>n.from?n.from===a.routeId:a.id===e);if(_n(!((n.shouldThrow??!0)&&!o),`Could not find ${n.from?`an active match from "${n.from}"`:"a nearest match!"}`),o!==void 0)return n.select?n.select(o):o},structuralSharing:n.structuralSharing})}function ep(n){return jr({from:n.from,strict:n.strict,structuralSharing:n.structuralSharing,select:e=>n.select?n.select(e.loaderData):e.loaderData})}function tp(n){const{select:e,...t}=n;return jr({...t,select:i=>e?e(i.loaderDeps):i.loaderDeps})}function np(n){return jr({from:n.from,strict:n.strict,structuralSharing:n.structuralSharing,select:e=>n.select?n.select(e.params):e.params})}function rp(n){return jr({from:n.from,strict:n.strict,structuralSharing:n.structuralSharing,select:e=>n.select?n.select(e.search):e.search})}function ip(n){const{navigate:e}=Js();return xe.useCallback(t=>e({...t}),[e])}function bD(n){return new EI({id:n})}class EI{constructor({id:e}){this.useMatch=t=>jr({select:t==null?void 0:t.select,from:this.id,structuralSharing:t==null?void 0:t.structuralSharing}),this.useRouteContext=t=>jr({from:this.id,select:i=>t!=null&&t.select?t.select(i.context):i.context}),this.useSearch=t=>rp({select:t==null?void 0:t.select,structuralSharing:t==null?void 0:t.structuralSharing,from:this.id}),this.useParams=t=>np({select:t==null?void 0:t.select,structuralSharing:t==null?void 0:t.structuralSharing,from:this.id}),this.useLoaderDeps=t=>tp({...t,from:this.id,strict:!1}),this.useLoaderData=t=>ep({...t,from:this.id,strict:!1}),this.useNavigate=()=>ip({from:this.id}),this.notFound=t=>cI({routeId:this.id,...t}),this.id=e}}let wv=class{constructor(e){this.init=t=>{var i,o;this.originalIndex=t.originalIndex;const a=this.options,u=!(a!=null&&a.path)&&!(a!=null&&a.id);this.parentRoute=(o=(i=this.options).getParentRoute)==null?void 0:o.call(i),u?this._path=Nn:_n(this.parentRoute);let d=u?Nn:a.path;d&&d!=="/"&&(d=Jf(d));const f=(a==null?void 0:a.id)||d;let y=u?Nn:ci([this.parentRoute.id===Nn?"":this.parentRoute.id,f]);d===Nn&&(d="/"),y!==Nn&&(y=ci(["/",y]));const v=y===Nn?"/":ci([this.parentRoute.fullPath,d]);this._path=d,this._id=y,this._fullPath=v,this._to=v,this._ssr=(a==null?void 0:a.ssr)??t.defaultSsr??!0},this.updateLoader=t=>(Object.assign(this.options,t),this),this.update=t=>(Object.assign(this.options,t),this),this.lazy=t=>(this.lazyFn=t,this),this.useMatch=t=>jr({select:t==null?void 0:t.select,from:this.id,structuralSharing:t==null?void 0:t.structuralSharing}),this.useRouteContext=t=>jr({...t,from:this.id,select:i=>t!=null&&t.select?t.select(i.context):i.context}),this.useSearch=t=>rp({select:t==null?void 0:t.select,structuralSharing:t==null?void 0:t.structuralSharing,from:this.id}),this.useParams=t=>np({select:t==null?void 0:t.select,structuralSharing:t==null?void 0:t.structuralSharing,from:this.id}),this.useLoaderDeps=t=>tp({...t,from:this.id}),this.useLoaderData=t=>ep({...t,from:this.id}),this.useNavigate=()=>ip({from:this.id}),this.options=e||{},this.isRoot=!(e!=null&&e.getParentRoute),_n(!(e!=null&&e.id&&(e!=null&&e.path))),this.$$typeof=Symbol.for("react.memo")}get to(){return this._to}get id(){return this._id}get path(){return this._path}get fullPath(){return this._fullPath}get ssr(){return this._ssr}addChildren(e){return this._addFileChildren(e)}_addFileChildren(e){return Array.isArray(e)&&(this.children=e),typeof e=="object"&&e!==null&&(this.children=Object.values(e)),this}};function TI(n){return new wv(n)}function II(){return n=>RI(n)}class SI extends wv{constructor(e){super(e)}addChildren(e){return super.addChildren(e),this}_addFileChildren(e){return super._addFileChildren(e),this}_addFileTypes(){return this}}function RI(n){return new SI(n)}function Ir(n){return new AI(n,{silent:!0}).createRoute}class AI{constructor(e,t){this.path=e,this.createRoute=i=>{this.silent;const o=TI(i);return o.isRoot=!1,o},this.silent=t==null?void 0:t.silent}}class PI{constructor(e){this.useMatch=t=>jr({select:t==null?void 0:t.select,from:this.options.id,structuralSharing:t==null?void 0:t.structuralSharing}),this.useRouteContext=t=>jr({from:this.options.id,select:i=>t!=null&&t.select?t.select(i.context):i.context}),this.useSearch=t=>rp({select:t==null?void 0:t.select,structuralSharing:t==null?void 0:t.structuralSharing,from:this.options.id}),this.useParams=t=>np({select:t==null?void 0:t.select,structuralSharing:t==null?void 0:t.structuralSharing,from:this.options.id}),this.useLoaderDeps=t=>tp({...t,from:this.options.id}),this.useLoaderData=t=>ep({...t,from:this.options.id}),this.useNavigate=()=>ip({from:this.options.id}),this.options=e,this.$$typeof=Symbol.for("react.memo")}}function xD(n){return e=>new PI({id:n,...e})}function hc(n){return we.jsx(we.Fragment,{children:n.children})}function Ev(n,e,t){return e.options.notFoundComponent?we.jsx(e.options.notFoundComponent,{data:t}):n.options.defaultNotFoundComponent?we.jsx(n.options.defaultNotFoundComponent,{data:t}):we.jsx(dI,{})}const Tv=xe.memo(function({matchId:e}){var t,i;const o=Js(),a=Qn({select:M=>{var ie;return(ie=M.matches.find(te=>te.id===e))==null?void 0:ie.routeId}});_n(a);const u=o.routesById[a],d=u.options.pendingComponent??o.options.defaultPendingComponent,f=d?we.jsx(d,{}):null,y=u.options.errorComponent??o.options.defaultErrorComponent,v=u.options.onCatch??o.options.defaultOnCatch,E=u.isRoot?u.options.notFoundComponent??((t=o.options.notFoundRoute)==null?void 0:t.options.component):u.options.notFoundComponent,S=(!u.isRoot||u.options.wrapInSuspense)&&(u.options.wrapInSuspense??d??((i=u.options.errorComponent)==null?void 0:i.preload))?xe.Suspense:hc,T=y?Zf:hc,O=E?hI:hc,F=Qn({select:M=>M.loadedAt});return we.jsx(Gc.Provider,{value:e,children:we.jsx(S,{fallback:f,children:we.jsx(T,{getResetKey:()=>F,errorComponent:y||Kc,onCatch:(M,ie)=>{if(vr(M))throw M;v==null||v(M,ie)},children:we.jsx(O,{fallback:M=>{if(!E||M.routeId&&M.routeId!==a||!M.routeId&&!u.isRoot)throw M;return xe.createElement(E,M)},children:we.jsx(CI,{matchId:e})})})})})}),CI=xe.memo(function({matchId:e}){var t,i,o,a,u;const d=Js(),{match:f,matchIndex:y,routeId:v}=Qn({select:O=>{const F=O.matches.findIndex(te=>te.id===e),M=O.matches[F];return{routeId:M.routeId,matchIndex:F,match:cc(M,["id","status","error"])}},structuralSharing:!0}),E=d.routesById[v],S=xe.useMemo(()=>{const O=E.options.component??d.options.defaultComponent;return O?we.jsx(O,{}):we.jsx(Iv,{})},[E.options.component,d.options.defaultComponent]),T=(E.options.errorComponent??d.options.defaultErrorComponent)||Kc;if(f.status==="notFound"){let O;return by(f.error)?O=(((t=d.options.errorSerializer)==null?void 0:t.deserialize)??Ny)(f.error.data):O=f.error,_n(vr(O)),Ev(d,E,O)}if(f.status==="redirected")throw _n(Us(f.error)),(i=d.getMatch(f.id))==null?void 0:i.loadPromise;if(f.status==="error"){if(d.isServer)return we.jsx(T,{error:f.error,info:{componentStack:""}});throw by(f.error)?(((o=d.options.errorSerializer)==null?void 0:o.deserialize)??Ny)(f.error.data):f.error}if(f.status==="pending"){const O=E.options.pendingMinMs??d.options.defaultPendingMinMs;if(O&&!((a=d.getMatch(f.id))!=null&&a.minPendingPromise)&&!d.isServer){const F=zo();Promise.resolve().then(()=>{d.updateMatch(f.id,M=>({...M,minPendingPromise:F}))}),setTimeout(()=>{F.resolve(),d.updateMatch(f.id,M=>({...M,minPendingPromise:void 0}))},O)}throw(u=d.getMatch(f.id))==null?void 0:u.loadPromise}return we.jsxs(we.Fragment,{children:[S,d.AfterEachMatch?we.jsx(d.AfterEachMatch,{match:f,matchIndex:y}):null]})}),Iv=xe.memo(function(){const e=Js(),t=xe.useContext(Gc),i=Qn({select:y=>{var v;return(v=y.matches.find(E=>E.id===t))==null?void 0:v.routeId}}),o=e.routesById[i],a=Qn({select:y=>{const E=y.matches.find(S=>S.id===t);return _n(E),E.globalNotFound}}),u=Qn({select:y=>{var v;const E=y.matches,S=E.findIndex(T=>T.id===t);return(v=E[S+1])==null?void 0:v.id}});if(a)return Ev(e,o,void 0);if(!u)return null;const d=we.jsx(Tv,{matchId:u}),f=e.options.defaultPendingComponent?we.jsx(e.options.defaultPendingComponent,{}):null;return t===Nn?we.jsx(xe.Suspense,{fallback:f,children:d}):d});function kI(n){return typeof(n==null?void 0:n.message)=="string"&&/Failed to fetch dynamically imported module/.test(n.message)}function os(n,e,t){let i,o,a;const u=()=>(typeof document>"u",i||(i=n().then(f=>{i=void 0,o=f.default}).catch(f=>{a=f})),i),d=function(y){if(a){if(kI(a)&&a instanceof Error&&typeof window<"u"&&typeof sessionStorage<"u"){const v=`tanstack_router_reload:${a.message}`;if(!sessionStorage.getItem(v))return sessionStorage.setItem(v,"1"),window.location.reload(),{default:()=>null}}throw a}if(!o)throw u();return xe.createElement(o,y)};return d.preload=u,d}var dc=pv();const bI=Xf(dc);function NI(){const n=Js(),e=xe.useRef({router:n,mounted:!1}),t=Qn({select:({isLoading:E})=>E}),[i,o]=xe.useState(!1),a=Qn({select:E=>E.matches.some(S=>S.status==="pending"),structuralSharing:!0}),u=rf(t),d=t||i||a,f=rf(d),y=t||a,v=rf(y);return n.isServer||(n.startReactTransition=E=>{o(!0),xe.startTransition(()=>{E(),o(!1)})}),xe.useEffect(()=>{const E=n.history.subscribe(n.load),S=n.buildLocation({to:n.latestLocation.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0});return js(n.latestLocation.href)!==js(S.href)&&n.commitLocation({...S,replace:!0}),()=>{E()}},[n,n.history]),Xu(()=>{var E;if(typeof window<"u"&&((E=window.__TSR__)!=null&&E.dehydrated)||e.current.router===n&&e.current.mounted)return;e.current={router:n,mounted:!0},(async()=>{try{await n.load()}catch(T){console.error(T)}})()},[n]),Xu(()=>{if(u&&!t){const E=n.state.location,S=n.state.resolvedLocation,T=S.pathname!==E.pathname,O=S.href!==E.href;n.emit({type:"onLoad",fromLocation:S,toLocation:E,pathChanged:T,hrefChanged:O})}},[u,n,t]),Xu(()=>{if(v&&!y){const E=n.state.location,S=n.state.resolvedLocation,T=S.pathname!==E.pathname,O=S.href!==E.href;n.emit({type:"onBeforeRouteMount",fromLocation:S,toLocation:E,pathChanged:T,hrefChanged:O})}},[y,v,n]),Xu(()=>{if(f&&!d){const E=n.state.location,S=n.state.resolvedLocation,T=S.pathname!==E.pathname,O=S.href!==E.href;if(n.emit({type:"onResolved",fromLocation:S,toLocation:E,pathChanged:T,hrefChanged:O}),n.__store.setState(F=>({...F,status:"idle",resolvedLocation:F.location})),typeof document<"u"&&document.querySelector&&n.state.location.hash!==""){const F=document.getElementById(n.state.location.hash);F&&F.scrollIntoView()}}},[d,f,n]),null}function xI(){const n=Js(),e=n.options.defaultPendingComponent?we.jsx(n.options.defaultPendingComponent,{}):null,t=n.isServer||typeof document<"u"&&window.__TSR__?hc:xe.Suspense,i=we.jsxs(t,{fallback:e,children:[we.jsx(NI,{}),we.jsx(DI,{})]});return n.options.InnerWrap?we.jsx(n.options.InnerWrap,{children:i}):i}function DI(){const n=Qn({select:t=>{var i;return(i=t.matches[0])==null?void 0:i.id}}),e=Qn({select:t=>t.loadedAt});return we.jsx(Gc.Provider,{value:n,children:we.jsx(Zf,{getResetKey:()=>e,errorComponent:Kc,onCatch:t=>{t.message||t.toString()},children:n?we.jsx(Tv,{matchId:n}):null})})}function LI({router:n,children:e,...t}){n.update({...n.options,...t,context:{...n.options.context,...t.context}});const i=_v(),o=we.jsx(i.Provider,{value:n,children:e});return n.options.Wrap?we.jsx(n.options.Wrap,{children:o}):o}function OI({router:n,...e}){return we.jsx(LI,{router:n,...e,children:we.jsx(xI,{})})}var xy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},MI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[i++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],u=n[t++],d=n[t++],f=((o&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(f>>10)),e[i++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(a&63)<<6|u&63)}}return e.join("")},Rv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const a=n[o],u=o+1<n.length,d=u?n[o+1]:0,f=o+2<n.length,y=f?n[o+2]:0,v=a>>2,E=(a&3)<<4|d>>4;let S=(d&15)<<2|y>>6,T=y&63;f||(T=64,u||(S=64)),i.push(t[v],t[E],t[S],t[T])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Sv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):MI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||y==null||E==null)throw new VI;const S=a<<2|d>>4;if(i.push(S),y!==64){const T=d<<4&240|y>>2;if(i.push(T),E!==64){const O=y<<6&192|E;i.push(O)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class VI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FI=function(n){const e=Sv(n);return Rv.encodeByteArray(e,!0)},Ac=function(n){return FI(n).replace(/\./g,"")},Av=function(n){try{return Rv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=()=>UI().__FIREBASE_DEFAULTS__,jI=()=>{if(typeof process>"u"||typeof xy>"u")return;const n=xy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Av(n[1]);return e&&JSON.parse(e)},Qc=()=>{try{return BI()||jI()||zI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Pv=n=>{var e,t;return(t=(e=Qc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Cv=n=>{const e=Pv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},kv=()=>{var n;return(n=Qc())===null||n===void 0?void 0:n.config},bv=n=>{var e;return(e=Qc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ac(JSON.stringify(t)),Ac(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zt())}function HI(){var n;const e=(n=Qc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function KI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GI(){const n=Zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function QI(){return!HI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dv(){try{return typeof indexedDB=="object"}catch{return!1}}function Lv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}function YI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="FirebaseError";class Xn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=XI,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zs.prototype.create)}}class Zs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],u=a?JI(a,i):"Error",d=`${this.serviceName}: ${u} (${o}).`;return new Xn(o,d,i)}}function JI(n,e){return n.replace(ZI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const ZI=/\{\$([^}]+)}/g;function eS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function pl(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const a=n[o],u=e[o];if(Dy(a)&&Dy(u)){if(!pl(a,u))return!1}else if(a!==u)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Dy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function el(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,a]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function tl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function tS(n,e){const t=new nS(n,e);return t.subscribe.bind(t)}class nS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");rS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=af),o.error===void 0&&(o.error=af),o.complete===void 0&&(o.complete=af);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function af(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=1e3,sS=2,oS=4*60*60*1e3,aS=.5;function Ly(n,e=iS,t=sS){const i=e*Math.pow(t,n),o=Math.round(aS*i*(Math.random()-.5)*2);return Math.min(oS,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n){return n&&n._delegate?n._delegate:n}class Yn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new $I;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cS(e))try{this.getOrInitializeService({instanceIdentifier:Bs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});i.resolve(a)}catch{}}}}clearInstance(e=Bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bs){return this.instances.has(e)}getOptions(e=Bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);i===d&&u.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(o,a);const u=this.instances.get(o);return u&&e(u,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:uS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Bs){return this.component?this.component.multipleInstances?e:Bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uS(n){return n===Bs?void 0:n}function cS(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Fe||(Fe={}));const dS={debug:Fe.DEBUG,verbose:Fe.VERBOSE,info:Fe.INFO,warn:Fe.WARN,error:Fe.ERROR,silent:Fe.SILENT},fS=Fe.INFO,pS={[Fe.DEBUG]:"log",[Fe.VERBOSE]:"log",[Fe.INFO]:"info",[Fe.WARN]:"warn",[Fe.ERROR]:"error"},mS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=pS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yc{constructor(e){this.name=e,this._logLevel=fS,this._logHandler=mS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Fe.DEBUG,...e),this._logHandler(this,Fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Fe.VERBOSE,...e),this._logHandler(this,Fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Fe.INFO,...e),this._logHandler(this,Fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Fe.WARN,...e),this._logHandler(this,Fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Fe.ERROR,...e),this._logHandler(this,Fe.ERROR,...e)}}const gS=(n,e)=>e.some(t=>n instanceof t);let Oy,My;function yS(){return Oy||(Oy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _S(){return My||(My=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ov=new WeakMap,Sf=new WeakMap,Mv=new WeakMap,lf=new WeakMap,sp=new WeakMap;function vS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Xi(n.result)),o()},u=()=>{i(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&Ov.set(t,n)}).catch(()=>{}),sp.set(e,n),e}function wS(n){if(Sf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),o()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});Sf.set(n,e)}let Rf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Mv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ES(n){Rf=n(Rf)}function TS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(uf(this),e,...t);return Mv.set(i,e.sort?e.sort():[e]),Xi(i)}:_S().includes(n)?function(...e){return n.apply(uf(this),e),Xi(Ov.get(this))}:function(...e){return Xi(n.apply(uf(this),e))}}function IS(n){return typeof n=="function"?TS(n):(n instanceof IDBTransaction&&wS(n),gS(n,yS())?new Proxy(n,Rf):n)}function Xi(n){if(n instanceof IDBRequest)return vS(n);if(lf.has(n))return lf.get(n);const e=IS(n);return e!==n&&(lf.set(n,e),sp.set(e,n)),e}const uf=n=>sp.get(n);function Vv(n,e,{blocked:t,upgrade:i,blocking:o,terminated:a}={}){const u=indexedDB.open(n,e),d=Xi(u);return i&&u.addEventListener("upgradeneeded",f=>{i(Xi(u.result),f.oldVersion,f.newVersion,Xi(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),o&&f.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const SS=["get","getKey","getAll","getAllKeys","count"],RS=["put","add","delete","clear"],cf=new Map;function Vy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cf.get(e))return cf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=RS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||SS.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,o?"readwrite":"readonly");let y=f.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&f.done]))[0]};return cf.set(e,a),a}ES(n=>({...n,get:(e,t,i)=>Vy(e,t)||n.get(e,t,i),has:(e,t)=>!!Vy(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(PS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function PS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Af="@firebase/app",Fy="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new Yc("@firebase/app"),CS="@firebase/app-compat",kS="@firebase/analytics-compat",bS="@firebase/analytics",NS="@firebase/app-check-compat",xS="@firebase/app-check",DS="@firebase/auth",LS="@firebase/auth-compat",OS="@firebase/database",MS="@firebase/data-connect",VS="@firebase/database-compat",FS="@firebase/functions",US="@firebase/functions-compat",BS="@firebase/installations",jS="@firebase/installations-compat",zS="@firebase/messaging",$S="@firebase/messaging-compat",qS="@firebase/performance",HS="@firebase/performance-compat",WS="@firebase/remote-config",KS="@firebase/remote-config-compat",GS="@firebase/storage",QS="@firebase/storage-compat",YS="@firebase/firestore",XS="@firebase/vertexai",JS="@firebase/firestore-compat",ZS="firebase",e1="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="[DEFAULT]",t1={[Af]:"fire-core",[CS]:"fire-core-compat",[bS]:"fire-analytics",[kS]:"fire-analytics-compat",[xS]:"fire-app-check",[NS]:"fire-app-check-compat",[DS]:"fire-auth",[LS]:"fire-auth-compat",[OS]:"fire-rtdb",[MS]:"fire-data-connect",[VS]:"fire-rtdb-compat",[FS]:"fire-fn",[US]:"fire-fn-compat",[BS]:"fire-iid",[jS]:"fire-iid-compat",[zS]:"fire-fcm",[$S]:"fire-fcm-compat",[qS]:"fire-perf",[HS]:"fire-perf-compat",[WS]:"fire-rc",[KS]:"fire-rc-compat",[GS]:"fire-gcs",[QS]:"fire-gcs-compat",[YS]:"fire-fst",[JS]:"fire-fst-compat",[XS]:"fire-vertex","fire-js":"fire-js",[ZS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new Map,n1=new Map,Cf=new Map;function Uy(n,e){try{n.container.addComponent(e)}catch(t){di.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function wr(n){const e=n.name;if(Cf.has(e))return di.debug(`There were multiple attempts to register component ${e}.`),!1;Cf.set(e,n);for(const t of Pc.values())Uy(t,n);for(const t of n1.values())Uy(t,n);return!0}function as(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Lr(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ji=new Zs("app","Firebase",r1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ji.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=e1;function Fv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Pf,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ji.create("bad-app-name",{appName:String(o)});if(t||(t=kv()),!t)throw Ji.create("no-options");const a=Pc.get(o);if(a){if(pl(t,a.options)&&pl(i,a.config))return a;throw Ji.create("duplicate-app",{appName:o})}const u=new hS(o);for(const f of Cf.values())u.addComponent(f);const d=new i1(t,i,u);return Pc.set(o,d),d}function Xc(n=Pf){const e=Pc.get(n);if(!e&&n===Pf&&kv())return Fv();if(!e)throw Ji.create("no-app",{appName:n});return e}function wn(n,e,t){var i;let o=(i=t1[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${o}" with version "${e}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),di.warn(d.join(" "));return}wr(new Yn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1="firebase-heartbeat-database",o1=1,ml="firebase-heartbeat-store";let hf=null;function Uv(){return hf||(hf=Vv(s1,o1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ml)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ji.create("idb-open",{originalErrorMessage:n.message})})),hf}async function a1(n){try{const t=(await Uv()).transaction(ml),i=await t.objectStore(ml).get(Bv(n));return await t.done,i}catch(e){if(e instanceof Xn)di.warn(e.message);else{const t=Ji.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});di.warn(t.message)}}}async function By(n,e){try{const i=(await Uv()).transaction(ml,"readwrite");await i.objectStore(ml).put(e,Bv(n)),await i.done}catch(t){if(t instanceof Xn)di.warn(t.message);else{const i=Ji.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});di.warn(i.message)}}}function Bv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=1024,u1=30*24*60*60*1e3;class c1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new d1(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=jy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const d=new Date(u.date).valueOf();return Date.now()-d<=u1}),this._storage.overwrite(this._heartbeatsCache))}catch(i){di.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jy(),{heartbeatsToSend:i,unsentEntries:o}=h1(this._heartbeatsCache.heartbeats),a=Ac(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return di.warn(t),""}}}function jy(){return new Date().toISOString().substring(0,10)}function h1(n,e=l1){const t=[];let i=n.slice();for(const o of n){const a=t.find(u=>u.agent===o.agent);if(a){if(a.dates.push(o.date),zy(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),zy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class d1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dv()?Lv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await a1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return By(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return By(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function zy(n){return Ac(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(n){wr(new Yn("platform-logger",e=>new AS(e),"PRIVATE")),wr(new Yn("heartbeat",e=>new c1(e),"PRIVATE")),wn(Af,Fy,n),wn(Af,Fy,"esm2017"),wn("fire-js","")}f1("");const jv="@firebase/installations",op="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=1e4,$v=`w:${op}`,qv="FIS_v2",p1="https://firebaseinstallations.googleapis.com/v1",m1=60*60*1e3,g1="installations",y1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ws=new Zs(g1,y1,_1);function Hv(n){return n instanceof Xn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv({projectId:n}){return`${p1}/projects/${n}/installations`}function Kv(n){return{token:n.token,requestStatus:2,expiresIn:w1(n.expiresIn),creationTime:Date.now()}}async function Gv(n,e){const i=(await e.json()).error;return Ws.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Qv({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function v1(n,{refreshToken:e}){const t=Qv(n);return t.append("Authorization",E1(e)),t}async function Yv(n){const e=await n();return e.status>=500&&e.status<600?n():e}function w1(n){return Number(n.replace("s","000"))}function E1(n){return`${qv} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Wv(n),o=Qv(n),a=e.getImmediate({optional:!0});if(a){const y=await a.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const u={fid:t,authVersion:qv,appId:n.appId,sdkVersion:$v},d={method:"POST",headers:o,body:JSON.stringify(u)},f=await Yv(()=>fetch(i,d));if(f.ok){const y=await f.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:Kv(y.authToken)}}else throw await Gv("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=/^[cdef][\w-]{21}$/,kf="";function R1(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=A1(n);return S1.test(t)?t:kf}catch{return kf}}function A1(n){return I1(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=new Map;function Zv(n,e){const t=Jc(n);e0(t,e),P1(t,e)}function e0(n,e){const t=Jv.get(n);if(t)for(const i of t)i(e)}function P1(n,e){const t=C1();t&&t.postMessage({key:n,fid:e}),k1()}let zs=null;function C1(){return!zs&&"BroadcastChannel"in self&&(zs=new BroadcastChannel("[Firebase] FID Change"),zs.onmessage=n=>{e0(n.data.key,n.data.fid)}),zs}function k1(){Jv.size===0&&zs&&(zs.close(),zs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1="firebase-installations-database",N1=1,Ks="firebase-installations-store";let df=null;function ap(){return df||(df=Vv(b1,N1,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ks)}}})),df}async function Cc(n,e){const t=Jc(n),o=(await ap()).transaction(Ks,"readwrite"),a=o.objectStore(Ks),u=await a.get(t);return await a.put(e,t),await o.done,(!u||u.fid!==e.fid)&&Zv(n,e.fid),e}async function t0(n){const e=Jc(n),i=(await ap()).transaction(Ks,"readwrite");await i.objectStore(Ks).delete(e),await i.done}async function Zc(n,e){const t=Jc(n),o=(await ap()).transaction(Ks,"readwrite"),a=o.objectStore(Ks),u=await a.get(t),d=e(u);return d===void 0?await a.delete(t):await a.put(d,t),await o.done,d&&(!u||u.fid!==d.fid)&&Zv(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(n){let e;const t=await Zc(n.appConfig,i=>{const o=x1(i),a=D1(n,o);return e=a.registrationPromise,a.installationEntry});return t.fid===kf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function x1(n){const e=n||{fid:R1(),registrationStatus:0};return n0(e)}function D1(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ws.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=L1(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:O1(n)}:{installationEntry:e}}async function L1(n,e){try{const t=await T1(n,e);return Cc(n.appConfig,t)}catch(t){throw Hv(t)&&t.customData.serverCode===409?await t0(n.appConfig):await Cc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function O1(n){let e=await $y(n.appConfig);for(;e.registrationStatus===1;)await Xv(100),e=await $y(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await lp(n);return i||t}return e}function $y(n){return Zc(n,e=>{if(!e)throw Ws.create("installation-not-found");return n0(e)})}function n0(n){return M1(n)?{fid:n.fid,registrationStatus:0}:n}function M1(n){return n.registrationStatus===1&&n.registrationTime+zv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1({appConfig:n,heartbeatServiceProvider:e},t){const i=F1(n,t),o=v1(n,t),a=e.getImmediate({optional:!0});if(a){const y=await a.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const u={installation:{sdkVersion:$v,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(u)},f=await Yv(()=>fetch(i,d));if(f.ok){const y=await f.json();return Kv(y)}else throw await Gv("Generate Auth Token",f)}function F1(n,{fid:e}){return`${Wv(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(n,e=!1){let t;const i=await Zc(n.appConfig,a=>{if(!r0(a))throw Ws.create("not-registered");const u=a.authToken;if(!e&&j1(u))return a;if(u.requestStatus===1)return t=U1(n,e),a;{if(!navigator.onLine)throw Ws.create("app-offline");const d=$1(a);return t=B1(n,d),d}});return t?await t:i.authToken}async function U1(n,e){let t=await qy(n.appConfig);for(;t.authToken.requestStatus===1;)await Xv(100),t=await qy(n.appConfig);const i=t.authToken;return i.requestStatus===0?up(n,e):i}function qy(n){return Zc(n,e=>{if(!r0(e))throw Ws.create("not-registered");const t=e.authToken;return q1(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function B1(n,e){try{const t=await V1(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Cc(n.appConfig,i),t}catch(t){if(Hv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await t0(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Cc(n.appConfig,i)}throw t}}function r0(n){return n!==void 0&&n.registrationStatus===2}function j1(n){return n.requestStatus===2&&!z1(n)}function z1(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+m1}function $1(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function q1(n){return n.requestStatus===1&&n.requestTime+zv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H1(n){const e=n,{installationEntry:t,registrationPromise:i}=await lp(e);return i?i.catch(console.error):up(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(n,e=!1){const t=n;return await K1(t),(await up(t,e)).token}async function K1(n){const{registrationPromise:e}=await lp(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(n){if(!n||!n.options)throw ff("App Configuration");if(!n.name)throw ff("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ff(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ff(n){return Ws.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="installations",Q1="installations-internal",Y1=n=>{const e=n.getProvider("app").getImmediate(),t=G1(e),i=as(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},X1=n=>{const e=n.getProvider("app").getImmediate(),t=as(e,i0).getImmediate();return{getId:()=>H1(t),getToken:o=>W1(t,o)}};function J1(){wr(new Yn(i0,Y1,"PUBLIC")),wr(new Yn(Q1,X1,"PRIVATE"))}J1();wn(jv,op);wn(jv,op,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="analytics",Z1="firebase_id",eR="origin",tR=60*1e3,nR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",cp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new Yc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ln=new Zs("analytics","Analytics",rR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(n){if(!n.startsWith(cp)){const e=Ln.create("invalid-gtag-resource",{gtagURL:n});return En.warn(e.message),""}return n}function s0(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function sR(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function oR(n,e){const t=sR("firebase-js-sdk-policy",{createScriptURL:iR}),i=document.createElement("script"),o=`${cp}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function aR(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function lR(n,e,t,i,o,a){const u=i[o];try{if(u)await e[u];else{const f=(await s0(t)).find(y=>y.measurementId===o);f&&await e[f.appId]}}catch(d){En.error(d)}n("config",o,a)}async function uR(n,e,t,i,o){try{let a=[];if(o&&o.send_to){let u=o.send_to;Array.isArray(u)||(u=[u]);const d=await s0(t);for(const f of u){const y=d.find(E=>E.measurementId===f),v=y&&e[y.appId];if(v)a.push(v);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),n("event",i,o||{})}catch(a){En.error(a)}}function cR(n,e,t,i){async function o(a,...u){try{if(a==="event"){const[d,f]=u;await uR(n,e,t,d,f)}else if(a==="config"){const[d,f]=u;await lR(n,e,t,i,d,f)}else if(a==="consent"){const[d,f]=u;n("consent",d,f)}else if(a==="get"){const[d,f,y]=u;n("get",d,f,y)}else if(a==="set"){const[d]=u;n("set",d)}else n(a,...u)}catch(d){En.error(d)}}return o}function hR(n,e,t,i,o){let a=function(...u){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(a=window[o]),window[o]=cR(a,n,e,t),{gtagCore:a,wrappedGtag:window[o]}}function dR(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(cp)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=30,pR=1e3;class mR{constructor(e={},t=pR){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const o0=new mR;function gR(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function yR(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:gR(i)},a=nR.replace("{app-id}",t),u=await fetch(a,o);if(u.status!==200&&u.status!==304){let d="";try{const f=await u.json();!((e=f.error)===null||e===void 0)&&e.message&&(d=f.error.message)}catch{}throw Ln.create("config-fetch-failed",{httpStatus:u.status,responseMessage:d})}return u.json()}async function _R(n,e=o0,t){const{appId:i,apiKey:o,measurementId:a}=n.options;if(!i)throw Ln.create("no-app-id");if(!o){if(a)return{measurementId:a,appId:i};throw Ln.create("no-api-key")}const u=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new ER;return setTimeout(async()=>{d.abort()},tR),a0({appId:i,apiKey:o,measurementId:a},u,d,e)}async function a0(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=o0){var a;const{appId:u,measurementId:d}=n;try{await vR(i,e)}catch(f){if(d)return En.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:u,measurementId:d};throw f}try{const f=await yR(n);return o.deleteThrottleMetadata(u),f}catch(f){const y=f;if(!wR(y)){if(o.deleteThrottleMetadata(u),d)return En.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:u,measurementId:d};throw f}const v=Number((a=y==null?void 0:y.customData)===null||a===void 0?void 0:a.httpStatus)===503?Ly(t,o.intervalMillis,fR):Ly(t,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+v,backoffCount:t+1};return o.setThrottleMetadata(u,E),En.debug(`Calling attemptFetch again in ${v} millis`),a0(n,E,i,o)}}function vR(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),a=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(a),i(Ln.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function wR(n){if(!(n instanceof Xn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class ER{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function TR(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const a=await e,u=Object.assign(Object.assign({},i),{send_to:a});n("event",t,u)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IR(){if(Dv())try{await Lv()}catch(n){return En.warn(Ln.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return En.warn(Ln.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function SR(n,e,t,i,o,a,u){var d;const f=_R(n);f.then(T=>{t[T.measurementId]=T.appId,n.options.measurementId&&T.measurementId!==n.options.measurementId&&En.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>En.error(T)),e.push(f);const y=IR().then(T=>{if(T)return i.getId()}),[v,E]=await Promise.all([f,y]);dR(a)||oR(a,v.measurementId),o("js",new Date);const S=(d=u==null?void 0:u.config)!==null&&d!==void 0?d:{};return S[eR]="firebase",S.update=!0,E!=null&&(S[Z1]=E),o("config",v.measurementId,S),v.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.app=e}_delete(){return delete al[this.app.options.appId],Promise.resolve()}}let al={},Hy=[];const Wy={};let pf="dataLayer",AR="gtag",Ky,l0,Gy=!1;function PR(){const n=[];if(xv()&&n.push("This is a browser extension environment."),YI()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=Ln.create("invalid-analytics-context",{errorInfo:e});En.warn(t.message)}}function CR(n,e,t){PR();const i=n.options.appId;if(!i)throw Ln.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)En.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ln.create("no-api-key");if(al[i]!=null)throw Ln.create("already-exists",{id:i});if(!Gy){aR(pf);const{wrappedGtag:a,gtagCore:u}=hR(al,Hy,Wy,pf,AR);l0=a,Ky=u,Gy=!0}return al[i]=SR(n,Hy,Wy,e,Ky,pf,t),new RR(n)}function kR(n=Xc()){n=it(n);const e=as(n,kc);return e.isInitialized()?e.getImmediate():bR(n)}function bR(n,e={}){const t=as(n,kc);if(t.isInitialized()){const o=t.getImmediate();if(pl(e,t.getOptions()))return o;throw Ln.create("already-initialized")}return t.initialize({options:e})}function NR(n,e,t,i){n=it(n),TR(l0,al[n.app.options.appId],e,t,i).catch(o=>En.error(o))}const Qy="@firebase/analytics",Yy="0.10.10";function xR(){wr(new Yn(kc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return CR(i,o,t)},"PUBLIC")),wr(new Yn("analytics-internal",n,"PRIVATE")),wn(Qy,Yy),wn(Qy,Yy,"esm2017");function n(e){try{const t=e.getProvider(kc).getImmediate();return{logEvent:(i,o,a)=>NR(t,i,o,a)}}catch(t){throw Ln.create("interop-component-reg-failed",{reason:t})}}}xR();var DR="firebase",LR="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(DR,LR,"app");var Xy=function(){return Xy=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Xy.apply(this,arguments)};function hp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function DD(n,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,a;i<o;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return n.concat(a||Array.prototype.slice.call(e))}function u0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OR=u0,c0=new Zs("auth","Firebase",u0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new Yc("@firebase/auth");function MR(n,...e){bc.logLevel<=Fe.WARN&&bc.warn(`Auth (${eo}): ${n}`,...e)}function fc(n,...e){bc.logLevel<=Fe.ERROR&&bc.error(`Auth (${eo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n,...e){throw dp(n,...e)}function Mr(n,...e){return dp(n,...e)}function h0(n,e,t){const i=Object.assign(Object.assign({},OR()),{[e]:t});return new Zs("auth","Firebase",i).create(e,{appName:n.name})}function hi(n){return h0(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return c0.create(n,...e)}function Pe(n,e,...t){if(!n)throw dp(e,...t)}function ai(n){const e="INTERNAL ASSERTION FAILED: "+n;throw fc(e),new Error(e)}function fi(n,e){n||ai(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function VR(){return Jy()==="http:"||Jy()==="https:"}function Jy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VR()||xv()||"connection"in navigator)?navigator.onLine:!0}function UR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t){this.shortDelay=e,this.longDelay=t,fi(t>e,"Short delay should be less than long delay!"),this.isMobile=qI()||KI()}get(){return FR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(n,e){fi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ai("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ai("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ai("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=new Rl(3e4,6e4);function gi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function $r(n,e,t,i,o={}){return f0(n,o,async()=>{let a={},u={};i&&(e==="GET"?u=i:a={body:JSON.stringify(i)});const d=Sl(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:f},a);return WI()||(y.referrerPolicy="no-referrer"),d0.fetch()(p0(n,n.config.apiHost,t,d),y)})}async function f0(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},BR),e);try{const o=new $R(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw ec(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,y]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw ec(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw ec(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw ec(n,"user-disabled",u);const v=i[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw h0(n,v,y);Er(n,v)}}catch(o){if(o instanceof Xn)throw o;Er(n,"network-request-failed",{message:String(o)})}}async function Al(n,e,t,i,o={}){const a=await $r(n,e,t,i,o);return"mfaPendingCredential"in a&&Er(n,"multi-factor-auth-required",{_serverResponse:a}),a}function p0(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?fp(n.config,o):`${n.config.apiScheme}://${o}`}function zR(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $R{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Mr(this.auth,"network-request-failed")),jR.get())})}}function ec(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Mr(n,e,i);return o.customData._tokenResponse=t,o}function Zy(n){return n!==void 0&&n.enterprise!==void 0}class qR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return zR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function HR(n,e){return $r(n,"GET","/v2/recaptchaConfig",gi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(n,e){return $r(n,"POST","/v1/accounts:delete",e)}async function m0(n,e){return $r(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KR(n,e=!1){const t=it(n),i=await t.getIdToken(e),o=pp(i);Pe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:o,token:i,authTime:ll(mf(o.auth_time)),issuedAtTime:ll(mf(o.iat)),expirationTime:ll(mf(o.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function mf(n){return Number(n)*1e3}function pp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return fc("JWT malformed, contained fewer than 3 sections"),null;try{const o=Av(t);return o?JSON.parse(o):(fc("Failed to decode base64 JWT payload"),null)}catch(o){return fc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function e_(n){const e=pp(n);return Pe(e,"internal-error"),Pe(typeof e.exp<"u","internal-error"),Pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Xn&&GR(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function GR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ll(this.lastLoginAt),this.creationTime=ll(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await ea(n,m0(t,{idToken:i}));Pe(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?g0(a.providerUserInfo):[],d=XR(n.providerData,u),f=n.isAnonymous,y=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?y:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Nf(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,E)}async function YR(n){const e=it(n);await Nc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XR(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function g0(n){return n.map(e=>{var{providerId:t}=e,i=hp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(n,e){const t=await f0(n,{},async()=>{const i=Sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,u=p0(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",d0.fetch()(u,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ZR(n,e){return $r(n,"POST","/v2/accounts:revokeToken",gi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Pe(e.idToken,"internal-error"),Pe(typeof e.idToken<"u","internal-error"),Pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):e_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Pe(e.length!==0,"internal-error");const t=e_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:a}=await JR(e,t);this.updateTokensAndExpiration(i,o,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:a}=t,u=new Go;return i&&(Pe(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),o&&(Pe(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),a&&(Pe(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Go,this.toJSON())}_performRefresh(){return ai("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(n,e){Pe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class li{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,a=hp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Nf(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await ea(this,this.stsTokenManager.getToken(this.auth,e));return Pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return KR(this,e)}reload(){return YR(this)}_assign(e){this!==e&&(Pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new li(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Nc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lr(this.auth.app))return Promise.reject(hi(this.auth));const e=await this.getIdToken();return await ea(this,WR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,a,u,d,f,y,v;const E=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,T=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,O=(u=t.photoURL)!==null&&u!==void 0?u:void 0,F=(d=t.tenantId)!==null&&d!==void 0?d:void 0,M=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,ie=(y=t.createdAt)!==null&&y!==void 0?y:void 0,te=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:re,emailVerified:W,isAnonymous:le,providerData:ce,stsTokenManager:b}=t;Pe(re&&b,e,"internal-error");const R=Go.fromJSON(this.name,b);Pe(typeof re=="string",e,"internal-error"),qi(E,e.name),qi(S,e.name),Pe(typeof W=="boolean",e,"internal-error"),Pe(typeof le=="boolean",e,"internal-error"),qi(T,e.name),qi(O,e.name),qi(F,e.name),qi(M,e.name),qi(ie,e.name),qi(te,e.name);const C=new li({uid:re,auth:e,email:S,emailVerified:W,displayName:E,isAnonymous:le,photoURL:O,phoneNumber:T,tenantId:F,stsTokenManager:R,createdAt:ie,lastLoginAt:te});return ce&&Array.isArray(ce)&&(C.providerData=ce.map(k=>Object.assign({},k))),M&&(C._redirectEventId=M),C}static async _fromIdTokenResponse(e,t,i=!1){const o=new Go;o.updateFromServerResponse(t);const a=new li({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Nc(a),a}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Pe(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?g0(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),d=new Go;d.updateFromIdToken(i);const f=new li({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:u}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Nf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,y),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new Map;function ui(n){fi(n instanceof Function,"Expected a class definition");let e=t_.get(n);return e?(fi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,t_.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}y0.type="NONE";const n_=y0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n,e,t){return`firebase:${n}:${e}:${t}`}class Qo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:a}=this.auth;this.fullUserKey=pc(this.userKey,o.apiKey,a),this.fullPersistenceKey=pc("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?li._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Qo(ui(n_),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let a=o[0]||ui(n_);const u=pc(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const v=await y._get(u);if(v){const E=li._fromJSON(e,v);y!==a&&(d=E),a=y;break}}catch{}const f=o.filter(y=>y._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Qo(a,e,i):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==a)try{await y._remove(u)}catch{}})),new Qo(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(E0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(I0(e))return"Blackberry";if(S0(e))return"Webos";if(v0(e))return"Safari";if((e.includes("chrome/")||w0(e))&&!e.includes("edge/"))return"Chrome";if(T0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function _0(n=Zt()){return/firefox\//i.test(n)}function v0(n=Zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function w0(n=Zt()){return/crios\//i.test(n)}function E0(n=Zt()){return/iemobile/i.test(n)}function T0(n=Zt()){return/android/i.test(n)}function I0(n=Zt()){return/blackberry/i.test(n)}function S0(n=Zt()){return/webos/i.test(n)}function mp(n=Zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function eA(n=Zt()){var e;return mp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tA(){return GI()&&document.documentMode===10}function R0(n=Zt()){return mp(n)||T0(n)||S0(n)||I0(n)||/windows phone/i.test(n)||E0(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(n,e=[]){let t;switch(n){case"Browser":t=r_(Zt());break;case"Worker":t=`${r_(Zt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${eo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(n,e={}){return $r(n,"GET","/v2/passwordPolicy",gi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=6;class sA{constructor(e){var t,i,o,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:iA,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(i=f.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),f.isValid&&(f.isValid=(o=f.containsLowercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new i_(this),this.idTokenSubscription=new i_(this),this.beforeStateQueue=new nA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ui(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Qo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await m0(this,{idToken:e}),i=await li._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Lr(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(o=f.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Nc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lr(this.app))return Promise.reject(hi(this));const t=e?it(e):null;return t&&Pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lr(this.app)?Promise.reject(hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lr(this.app)?Promise.reject(hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ui(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rA(this),t=new sA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await ZR(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ui(e)||this._popupRedirectResolver;Pe(t,this,"argument-error"),this.redirectPersistenceManager=await Qo.create(this,[ui(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Pe(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,i,o);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=A0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&MR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ls(n){return it(n)}class i_{constructor(e){this.auth=e,this.observer=null,this.addObserver=tS(t=>this.observer=t)}get next(){return Pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aA(n){eh=n}function P0(n){return eh.loadJS(n)}function lA(){return eh.recaptchaEnterpriseScript}function uA(){return eh.gapiScript}function cA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class hA{constructor(){this.enterprise=new dA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class dA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const fA="recaptcha-enterprise",C0="NO_RECAPTCHA";class pA{constructor(e){this.type=fA,this.auth=ls(e)}async verify(e="verify",t=!1){async function i(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{HR(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new qR(f);return a.tenantId==null?a._agentRecaptchaConfig=y:a._tenantRecaptchaConfigs[a.tenantId]=y,u(y.siteKey)}}).catch(f=>{d(f)})})}function o(a,u,d){const f=window.grecaptcha;Zy(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(y=>{u(y)}).catch(()=>{u(C0)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hA().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{i(this.auth).then(d=>{if(!t&&Zy(window.grecaptcha))o(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=lA();f.length!==0&&(f+=d),P0(f).then(()=>{o(d,a,u)}).catch(y=>{u(y)})}}).catch(d=>{u(d)})})}}async function s_(n,e,t,i=!1,o=!1){const a=new pA(n);let u;if(o)u=C0;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:y,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function xc(n,e,t,i,o){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await s_(n,e,t,t==="getOobCode");return i(n,u)}else return i(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await s_(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(n,e){const t=as(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(pl(a,e??{}))return o;Er(o,"already-initialized")}return t.initialize({options:e})}function gA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ui);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function yA(n,e,t){const i=ls(n);Pe(i._canInitEmulator,i,"emulator-config-failed"),Pe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,a=k0(e),{host:u,port:d}=_A(e),f=d===null?"":`:${d}`;i.config.emulator={url:`${a}//${u}${f}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})}),vA()}function k0(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _A(n){const e=k0(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const a=o[1];return{host:a,port:o_(i.substr(a.length+1))}}else{const[a,u]=i.split(":");return{host:a,port:o_(u)}}}function o_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function vA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ai("not implemented")}_getIdTokenResponse(e){return ai("not implemented")}_linkToIdToken(e,t){return ai("not implemented")}_getReauthenticationResolver(e){return ai("not implemented")}}async function wA(n,e){return $r(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(n,e){return Al(n,"POST","/v1/accounts:signInWithPassword",gi(n,e))}async function TA(n,e){return $r(n,"POST","/v1/accounts:sendOobCode",gi(n,e))}async function IA(n,e){return TA(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(n,e){return Al(n,"POST","/v1/accounts:signInWithEmailLink",gi(n,e))}async function RA(n,e){return Al(n,"POST","/v1/accounts:signInWithEmailLink",gi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends gp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new gl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new gl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xc(e,t,"signInWithPassword",EA);case"emailLink":return SA(e,{email:this._email,oobCode:this._password});default:Er(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xc(e,i,"signUpPassword",wA);case"emailLink":return RA(e,{idToken:t,email:this._email,oobCode:this._password});default:Er(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(n,e){return Al(n,"POST","/v1/accounts:signInWithIdp",gi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="http://localhost";class Gs extends gp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Er("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,a=hp(t,["providerId","signInMethod"]);if(!i||!o)return null;const u=new Gs(i,o);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Yo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Yo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yo(e,t)}buildRequest(){const e={requestUri:AA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Sl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CA(n){const e=el(tl(n)).link,t=e?el(tl(e)).deep_link_id:null,i=el(tl(n)).deep_link_id;return(i?el(tl(i)).link:null)||i||t||e||n}class yp{constructor(e){var t,i,o,a,u,d;const f=el(tl(e)),y=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(i=f.oobCode)!==null&&i!==void 0?i:null,E=PA((o=f.mode)!==null&&o!==void 0?o:null);Pe(y&&v&&E,"argument-error"),this.apiKey=y,this.operation=E,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=CA(e);try{return new yp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){this.providerId=ca.PROVIDER_ID}static credential(e,t){return gl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=yp.parseLink(t);return Pe(i,"argument-error"),gl._fromEmailAndCode(e,i.code,i.tenantId)}}ca.PROVIDER_ID="password";ca.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ca.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends b0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends Pl{constructor(){super("facebook.com")}static credential(e){return Gs._fromParams({providerId:Hi.PROVIDER_ID,signInMethod:Hi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hi.credentialFromTaggedObject(e)}static credentialFromError(e){return Hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hi.credential(e.oauthAccessToken)}catch{return null}}}Hi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gs._fromParams({providerId:Wi.PROVIDER_ID,signInMethod:Wi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Wi.credentialFromTaggedObject(e)}static credentialFromError(e){return Wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Wi.credential(t,i)}catch{return null}}}Wi.GOOGLE_SIGN_IN_METHOD="google.com";Wi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends Pl{constructor(){super("github.com")}static credential(e){return Gs._fromParams({providerId:Ki.PROVIDER_ID,signInMethod:Ki.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ki.credentialFromTaggedObject(e)}static credentialFromError(e){return Ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ki.credential(e.oauthAccessToken)}catch{return null}}}Ki.GITHUB_SIGN_IN_METHOD="github.com";Ki.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Pl{constructor(){super("twitter.com")}static credential(e,t){return Gs._fromParams({providerId:Gi.PROVIDER_ID,signInMethod:Gi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Gi.credentialFromTaggedObject(e)}static credentialFromError(e){return Gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Gi.credential(t,i)}catch{return null}}}Gi.TWITTER_SIGN_IN_METHOD="twitter.com";Gi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(n,e){return Al(n,"POST","/v1/accounts:signUp",gi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const a=await li._fromIdTokenResponse(e,i,o),u=a_(i);return new Qs({user:a,providerId:u,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=a_(i);return new Qs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function a_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends Xn{constructor(e,t,i,o){var a;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Dc.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Dc(e,t,i,o)}}function N0(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Dc._fromErrorAndOperation(n,a,e,i):a})}async function bA(n,e,t=!1){const i=await ea(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Qs._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(n,e,t=!1){const{auth:i}=n;if(Lr(i.app))return Promise.reject(hi(i));const o="reauthenticate";try{const a=await ea(n,N0(i,o,e,n),t);Pe(a.idToken,i,"internal-error");const u=pp(a.idToken);Pe(u,i,"internal-error");const{sub:d}=u;return Pe(n.uid===d,i,"user-mismatch"),Qs._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Er(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(n,e,t=!1){if(Lr(n.app))return Promise.reject(hi(n));const i="signIn",o=await N0(n,i,e),a=await Qs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(a.user),a}async function xA(n,e){return x0(ls(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D0(n){const e=ls(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function LD(n,e,t){const i=ls(n);await xc(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",IA)}async function OD(n,e,t){if(Lr(n.app))return Promise.reject(hi(n));const i=ls(n),u=await xc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kA).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&D0(n),f}),d=await Qs._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(d.user),d}function DA(n,e,t){return Lr(n.app)?Promise.reject(hi(n)):xA(it(n),ca.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&D0(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(n,e){return $r(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MD(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=it(n),a={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await ea(i,LA(i.auth,a));i.displayName=u.displayName||null,i.photoURL=u.photoUrl||null;const d=i.providerData.find(({providerId:f})=>f==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(u)}function OA(n,e,t,i){return it(n).onIdTokenChanged(e,t,i)}function MA(n,e,t){return it(n).beforeAuthStateChanged(e,t)}function VA(n,e,t,i){return it(n).onAuthStateChanged(e,t,i)}function FA(n){return it(n).signOut()}const Lc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Lc,"1"),this.storage.removeItem(Lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=1e3,BA=10;class O0 extends L0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=R0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(i);!t&&this.localCache[i]===u||this.notifyListeners(i,u)},a=this.storage.getItem(i);tA()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,BA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},UA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}O0.type="LOCAL";const jA=O0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0 extends L0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}M0.type="SESSION";const V0=M0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new th(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:a}=t.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(u).map(async y=>y(t.origin,a)),f=await zA(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}th.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const y=_p("",20);o.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},i);u={messageChannel:o,onMessage(E){const S=E;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(S.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(){return window}function qA(n){Vr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(){return typeof Vr().WorkerGlobalScope<"u"&&typeof Vr().importScripts=="function"}async function HA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function KA(){return F0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0="firebaseLocalStorageDb",GA=1,Oc="firebaseLocalStorage",B0="fbase_key";class Cl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nh(n,e){return n.transaction([Oc],e?"readwrite":"readonly").objectStore(Oc)}function QA(){const n=indexedDB.deleteDatabase(U0);return new Cl(n).toPromise()}function xf(){const n=indexedDB.open(U0,GA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Oc,{keyPath:B0})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Oc)?e(i):(i.close(),await QA(),e(await xf()))})})}async function l_(n,e,t){const i=nh(n,!0).put({[B0]:e,value:t});return new Cl(i).toPromise()}async function YA(n,e){const t=nh(n,!1).get(e),i=await new Cl(t).toPromise();return i===void 0?null:i.value}function u_(n,e){const t=nh(n,!0).delete(e);return new Cl(t).toPromise()}const XA=800,JA=3;class j0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>JA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return F0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=th._getInstance(KA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await HA(),!this.activeServiceWorker)return;this.sender=new $A(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xf();return await l_(e,Lc,"1"),await u_(e,Lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>l_(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>YA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>u_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=nh(o,!1).getAll();return new Cl(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j0.type="LOCAL";const ZA=j0;new Rl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(n,e){return e?ui(e):(Pe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp extends gp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tP(n){return x0(n.auth,new vp(n),n.bypassAuthState)}function nP(n){const{auth:e,user:t}=n;return Pe(t,e,"internal-error"),NA(t,new vp(n),n.bypassAuthState)}async function rP(n){const{auth:e,user:t}=n;return Pe(t,e,"internal-error"),bA(t,new vp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,t,i,o,a=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tP;case"linkViaPopup":case"linkViaRedirect":return rP;case"reauthViaPopup":case"reauthViaRedirect":return nP;default:Er(this.auth,"internal-error")}}resolve(e){fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=new Rl(2e3,1e4);class Ko extends z0{constructor(e,t,i,o,a){super(e,t,o,a),this.provider=i,this.authWindow=null,this.pollId=null,Ko.currentPopupAction&&Ko.currentPopupAction.cancel(),Ko.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Pe(e,this.auth,"internal-error"),e}async onExecution(){fi(this.filter.length===1,"Popup operations only handle one event");const e=_p();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ko.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iP.get())};e()}}Ko.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP="pendingRedirect",mc=new Map;class oP extends z0{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=mc.get(this.auth._key());if(!e){try{const i=await aP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}mc.set(this.auth._key(),e)}return this.bypassAuthState||mc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aP(n,e){const t=cP(e),i=uP(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function lP(n,e){mc.set(n._key(),e)}function uP(n){return ui(n._redirectPersistence)}function cP(n){return pc(sP,n.config.apiKey,n.name)}async function hP(n,e,t=!1){if(Lr(n.app))return Promise.reject(hi(n));const i=ls(n),o=eP(i,e),u=await new oP(i,o,t).execute();return u&&!t&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=10*60*1e3;class fP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!$0(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Mr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dP&&this.cachedEventUids.clear(),this.cachedEventUids.has(c_(e))}saveEventToCache(e){this.cachedEventUids.add(c_(e)),this.lastProcessedEventTime=Date.now()}}function c_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $0(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mP(n,e={}){return $r(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yP=/^https?/;async function _P(n){if(n.config.emulator)return;const{authorizedDomains:e}=await mP(n);for(const t of e)try{if(vP(t))return}catch{}Er(n,"unauthorized-domain")}function vP(n){const e=bf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===i}if(!yP.test(t))return!1;if(gP.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=new Rl(3e4,6e4);function h_(){const n=Vr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function EP(n){return new Promise((e,t)=>{var i,o,a;function u(){h_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{h_(),t(Mr(n,"network-request-failed"))},timeout:wP.get()})}if(!((o=(i=Vr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=Vr().gapi)===null||a===void 0)&&a.load)u();else{const d=cA("iframefcb");return Vr()[d]=()=>{gapi.load?u():t(Mr(n,"network-request-failed"))},P0(`${uA()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw gc=null,e})}let gc=null;function TP(n){return gc=gc||EP(n),gc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=new Rl(5e3,15e3),SP="__/auth/iframe",RP="emulator/auth/iframe",AP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CP(n){const e=n.config;Pe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?fp(e,RP):`https://${n.config.authDomain}/${SP}`,i={apiKey:e.apiKey,appName:n.name,v:eo},o=PP.get(n.config.apiHost);o&&(i.eid=o);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${Sl(i).slice(1)}`}async function kP(n){const e=await TP(n),t=Vr().gapi;return Pe(t,n,"internal-error"),e.open({where:document.body,url:CP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AP,dontclear:!0},i=>new Promise(async(o,a)=>{await i.restyle({setHideOnLeave:!1});const u=Mr(n,"network-request-failed"),d=Vr().setTimeout(()=>{a(u)},IP.get());function f(){Vr().clearTimeout(d),o(i)}i.ping(f).then(f,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NP=500,xP=600,DP="_blank",LP="http://localhost";class d_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OP(n,e,t,i=NP,o=xP){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const f=Object.assign(Object.assign({},bP),{width:i.toString(),height:o.toString(),top:a,left:u}),y=Zt().toLowerCase();t&&(d=w0(y)?DP:t),_0(y)&&(e=e||LP,f.scrollbars="yes");const v=Object.entries(f).reduce((S,[T,O])=>`${S}${T}=${O},`,"");if(eA(y)&&d!=="_self")return MP(e||"",d),new d_(null);const E=window.open(e||"",d,v);Pe(E,n,"popup-blocked");try{E.focus()}catch{}return new d_(E)}function MP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP="__/auth/handler",FP="emulator/auth/handler",UP=encodeURIComponent("fac");async function f_(n,e,t,i,o,a){Pe(n.config.authDomain,n,"auth-domain-config-required"),Pe(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:eo,eventId:o};if(e instanceof b0){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",eS(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))u[v]=E}if(e instanceof Pl){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),y=f?`#${UP}=${encodeURIComponent(f)}`:"";return`${BP(n)}?${Sl(d).slice(1)}${y}`}function BP({config:n}){return n.emulator?fp(n,FP):`https://${n.authDomain}/${VP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="webStorageSupport";class jP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=V0,this._completeRedirectFn=hP,this._overrideRedirectResult=lP}async _openPopup(e,t,i,o){var a;fi((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await f_(e,t,i,bf(),o);return OP(e,u,_p())}async _openRedirect(e,t,i,o){await this._originValidation(e);const a=await f_(e,t,i,bf(),o);return qA(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(fi(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await kP(e),i=new fP(e);return t.register("authEvent",o=>(Pe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gf,{type:gf},o=>{var a;const u=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[gf];u!==void 0&&t(!!u),Er(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_P(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return R0()||v0()||mp()}}const zP=jP;var p_="@firebase/auth",m_="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HP(n){wr(new Yn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=i.options;Pe(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A0(n)},y=new oA(i,o,a,f);return gA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),wr(new Yn("auth-internal",e=>{const t=ls(e.getProvider("auth").getImmediate());return(i=>new $P(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(p_,m_,qP(n)),wn(p_,m_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=5*60,KP=bv("authIdTokenMaxAge")||WP;let g_=null;const GP=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>KP)return;const o=t==null?void 0:t.token;g_!==o&&(g_=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function QP(n=Xc()){const e=as(n,"auth");if(e.isInitialized())return e.getImmediate();const t=mA(n,{popupRedirectResolver:zP,persistence:[ZA,jA,V0]}),i=bv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const u=GP(a.toString());MA(t,u,()=>u(t.currentUser)),OA(t,d=>u(d))}}const o=Pv("auth");return o&&yA(t,`http://${o}`),t}function YP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}aA({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const a=Mr("internal-error");a.customData=o,t(a)},i.type="text/javascript",i.charset="UTF-8",YP().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HP("Browser");var y_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qs,q0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,R){function C(){}C.prototype=R.prototype,b.D=R.prototype,b.prototype=new C,b.prototype.constructor=b,b.C=function(k,N,x){for(var A=Array(arguments.length-2),he=2;he<arguments.length;he++)A[he-2]=arguments[he];return R.prototype[N].apply(k,A)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(b,R,C){C||(C=0);var k=Array(16);if(typeof R=="string")for(var N=0;16>N;++N)k[N]=R.charCodeAt(C++)|R.charCodeAt(C++)<<8|R.charCodeAt(C++)<<16|R.charCodeAt(C++)<<24;else for(N=0;16>N;++N)k[N]=R[C++]|R[C++]<<8|R[C++]<<16|R[C++]<<24;R=b.g[0],C=b.g[1],N=b.g[2];var x=b.g[3],A=R+(x^C&(N^x))+k[0]+3614090360&4294967295;R=C+(A<<7&4294967295|A>>>25),A=x+(N^R&(C^N))+k[1]+3905402710&4294967295,x=R+(A<<12&4294967295|A>>>20),A=N+(C^x&(R^C))+k[2]+606105819&4294967295,N=x+(A<<17&4294967295|A>>>15),A=C+(R^N&(x^R))+k[3]+3250441966&4294967295,C=N+(A<<22&4294967295|A>>>10),A=R+(x^C&(N^x))+k[4]+4118548399&4294967295,R=C+(A<<7&4294967295|A>>>25),A=x+(N^R&(C^N))+k[5]+1200080426&4294967295,x=R+(A<<12&4294967295|A>>>20),A=N+(C^x&(R^C))+k[6]+2821735955&4294967295,N=x+(A<<17&4294967295|A>>>15),A=C+(R^N&(x^R))+k[7]+4249261313&4294967295,C=N+(A<<22&4294967295|A>>>10),A=R+(x^C&(N^x))+k[8]+1770035416&4294967295,R=C+(A<<7&4294967295|A>>>25),A=x+(N^R&(C^N))+k[9]+2336552879&4294967295,x=R+(A<<12&4294967295|A>>>20),A=N+(C^x&(R^C))+k[10]+4294925233&4294967295,N=x+(A<<17&4294967295|A>>>15),A=C+(R^N&(x^R))+k[11]+2304563134&4294967295,C=N+(A<<22&4294967295|A>>>10),A=R+(x^C&(N^x))+k[12]+1804603682&4294967295,R=C+(A<<7&4294967295|A>>>25),A=x+(N^R&(C^N))+k[13]+4254626195&4294967295,x=R+(A<<12&4294967295|A>>>20),A=N+(C^x&(R^C))+k[14]+2792965006&4294967295,N=x+(A<<17&4294967295|A>>>15),A=C+(R^N&(x^R))+k[15]+1236535329&4294967295,C=N+(A<<22&4294967295|A>>>10),A=R+(N^x&(C^N))+k[1]+4129170786&4294967295,R=C+(A<<5&4294967295|A>>>27),A=x+(C^N&(R^C))+k[6]+3225465664&4294967295,x=R+(A<<9&4294967295|A>>>23),A=N+(R^C&(x^R))+k[11]+643717713&4294967295,N=x+(A<<14&4294967295|A>>>18),A=C+(x^R&(N^x))+k[0]+3921069994&4294967295,C=N+(A<<20&4294967295|A>>>12),A=R+(N^x&(C^N))+k[5]+3593408605&4294967295,R=C+(A<<5&4294967295|A>>>27),A=x+(C^N&(R^C))+k[10]+38016083&4294967295,x=R+(A<<9&4294967295|A>>>23),A=N+(R^C&(x^R))+k[15]+3634488961&4294967295,N=x+(A<<14&4294967295|A>>>18),A=C+(x^R&(N^x))+k[4]+3889429448&4294967295,C=N+(A<<20&4294967295|A>>>12),A=R+(N^x&(C^N))+k[9]+568446438&4294967295,R=C+(A<<5&4294967295|A>>>27),A=x+(C^N&(R^C))+k[14]+3275163606&4294967295,x=R+(A<<9&4294967295|A>>>23),A=N+(R^C&(x^R))+k[3]+4107603335&4294967295,N=x+(A<<14&4294967295|A>>>18),A=C+(x^R&(N^x))+k[8]+1163531501&4294967295,C=N+(A<<20&4294967295|A>>>12),A=R+(N^x&(C^N))+k[13]+2850285829&4294967295,R=C+(A<<5&4294967295|A>>>27),A=x+(C^N&(R^C))+k[2]+4243563512&4294967295,x=R+(A<<9&4294967295|A>>>23),A=N+(R^C&(x^R))+k[7]+1735328473&4294967295,N=x+(A<<14&4294967295|A>>>18),A=C+(x^R&(N^x))+k[12]+2368359562&4294967295,C=N+(A<<20&4294967295|A>>>12),A=R+(C^N^x)+k[5]+4294588738&4294967295,R=C+(A<<4&4294967295|A>>>28),A=x+(R^C^N)+k[8]+2272392833&4294967295,x=R+(A<<11&4294967295|A>>>21),A=N+(x^R^C)+k[11]+1839030562&4294967295,N=x+(A<<16&4294967295|A>>>16),A=C+(N^x^R)+k[14]+4259657740&4294967295,C=N+(A<<23&4294967295|A>>>9),A=R+(C^N^x)+k[1]+2763975236&4294967295,R=C+(A<<4&4294967295|A>>>28),A=x+(R^C^N)+k[4]+1272893353&4294967295,x=R+(A<<11&4294967295|A>>>21),A=N+(x^R^C)+k[7]+4139469664&4294967295,N=x+(A<<16&4294967295|A>>>16),A=C+(N^x^R)+k[10]+3200236656&4294967295,C=N+(A<<23&4294967295|A>>>9),A=R+(C^N^x)+k[13]+681279174&4294967295,R=C+(A<<4&4294967295|A>>>28),A=x+(R^C^N)+k[0]+3936430074&4294967295,x=R+(A<<11&4294967295|A>>>21),A=N+(x^R^C)+k[3]+3572445317&4294967295,N=x+(A<<16&4294967295|A>>>16),A=C+(N^x^R)+k[6]+76029189&4294967295,C=N+(A<<23&4294967295|A>>>9),A=R+(C^N^x)+k[9]+3654602809&4294967295,R=C+(A<<4&4294967295|A>>>28),A=x+(R^C^N)+k[12]+3873151461&4294967295,x=R+(A<<11&4294967295|A>>>21),A=N+(x^R^C)+k[15]+530742520&4294967295,N=x+(A<<16&4294967295|A>>>16),A=C+(N^x^R)+k[2]+3299628645&4294967295,C=N+(A<<23&4294967295|A>>>9),A=R+(N^(C|~x))+k[0]+4096336452&4294967295,R=C+(A<<6&4294967295|A>>>26),A=x+(C^(R|~N))+k[7]+1126891415&4294967295,x=R+(A<<10&4294967295|A>>>22),A=N+(R^(x|~C))+k[14]+2878612391&4294967295,N=x+(A<<15&4294967295|A>>>17),A=C+(x^(N|~R))+k[5]+4237533241&4294967295,C=N+(A<<21&4294967295|A>>>11),A=R+(N^(C|~x))+k[12]+1700485571&4294967295,R=C+(A<<6&4294967295|A>>>26),A=x+(C^(R|~N))+k[3]+2399980690&4294967295,x=R+(A<<10&4294967295|A>>>22),A=N+(R^(x|~C))+k[10]+4293915773&4294967295,N=x+(A<<15&4294967295|A>>>17),A=C+(x^(N|~R))+k[1]+2240044497&4294967295,C=N+(A<<21&4294967295|A>>>11),A=R+(N^(C|~x))+k[8]+1873313359&4294967295,R=C+(A<<6&4294967295|A>>>26),A=x+(C^(R|~N))+k[15]+4264355552&4294967295,x=R+(A<<10&4294967295|A>>>22),A=N+(R^(x|~C))+k[6]+2734768916&4294967295,N=x+(A<<15&4294967295|A>>>17),A=C+(x^(N|~R))+k[13]+1309151649&4294967295,C=N+(A<<21&4294967295|A>>>11),A=R+(N^(C|~x))+k[4]+4149444226&4294967295,R=C+(A<<6&4294967295|A>>>26),A=x+(C^(R|~N))+k[11]+3174756917&4294967295,x=R+(A<<10&4294967295|A>>>22),A=N+(R^(x|~C))+k[2]+718787259&4294967295,N=x+(A<<15&4294967295|A>>>17),A=C+(x^(N|~R))+k[9]+3951481745&4294967295,b.g[0]=b.g[0]+R&4294967295,b.g[1]=b.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,b.g[2]=b.g[2]+N&4294967295,b.g[3]=b.g[3]+x&4294967295}i.prototype.u=function(b,R){R===void 0&&(R=b.length);for(var C=R-this.blockSize,k=this.B,N=this.h,x=0;x<R;){if(N==0)for(;x<=C;)o(this,b,x),x+=this.blockSize;if(typeof b=="string"){for(;x<R;)if(k[N++]=b.charCodeAt(x++),N==this.blockSize){o(this,k),N=0;break}}else for(;x<R;)if(k[N++]=b[x++],N==this.blockSize){o(this,k),N=0;break}}this.h=N,this.o+=R},i.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var R=1;R<b.length-8;++R)b[R]=0;var C=8*this.o;for(R=b.length-8;R<b.length;++R)b[R]=C&255,C/=256;for(this.u(b),b=Array(16),R=C=0;4>R;++R)for(var k=0;32>k;k+=8)b[C++]=this.g[R]>>>k&255;return b};function a(b,R){var C=d;return Object.prototype.hasOwnProperty.call(C,b)?C[b]:C[b]=R(b)}function u(b,R){this.h=R;for(var C=[],k=!0,N=b.length-1;0<=N;N--){var x=b[N]|0;k&&x==R||(C[N]=x,k=!1)}this.g=C}var d={};function f(b){return-128<=b&&128>b?a(b,function(R){return new u([R|0],0>R?-1:0)}):new u([b|0],0>b?-1:0)}function y(b){if(isNaN(b)||!isFinite(b))return E;if(0>b)return M(y(-b));for(var R=[],C=1,k=0;b>=C;k++)R[k]=b/C|0,C*=4294967296;return new u(R,0)}function v(b,R){if(b.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(b.charAt(0)=="-")return M(v(b.substring(1),R));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(R,8)),k=E,N=0;N<b.length;N+=8){var x=Math.min(8,b.length-N),A=parseInt(b.substring(N,N+x),R);8>x?(x=y(Math.pow(R,x)),k=k.j(x).add(y(A))):(k=k.j(C),k=k.add(y(A)))}return k}var E=f(0),S=f(1),T=f(16777216);n=u.prototype,n.m=function(){if(F(this))return-M(this).m();for(var b=0,R=1,C=0;C<this.g.length;C++){var k=this.i(C);b+=(0<=k?k:4294967296+k)*R,R*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(O(this))return"0";if(F(this))return"-"+M(this).toString(b);for(var R=y(Math.pow(b,6)),C=this,k="";;){var N=W(C,R).g;C=ie(C,N.j(R));var x=((0<C.g.length?C.g[0]:C.h)>>>0).toString(b);if(C=N,O(C))return x+k;for(;6>x.length;)x="0"+x;k=x+k}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function O(b){if(b.h!=0)return!1;for(var R=0;R<b.g.length;R++)if(b.g[R]!=0)return!1;return!0}function F(b){return b.h==-1}n.l=function(b){return b=ie(this,b),F(b)?-1:O(b)?0:1};function M(b){for(var R=b.g.length,C=[],k=0;k<R;k++)C[k]=~b.g[k];return new u(C,~b.h).add(S)}n.abs=function(){return F(this)?M(this):this},n.add=function(b){for(var R=Math.max(this.g.length,b.g.length),C=[],k=0,N=0;N<=R;N++){var x=k+(this.i(N)&65535)+(b.i(N)&65535),A=(x>>>16)+(this.i(N)>>>16)+(b.i(N)>>>16);k=A>>>16,x&=65535,A&=65535,C[N]=A<<16|x}return new u(C,C[C.length-1]&-2147483648?-1:0)};function ie(b,R){return b.add(M(R))}n.j=function(b){if(O(this)||O(b))return E;if(F(this))return F(b)?M(this).j(M(b)):M(M(this).j(b));if(F(b))return M(this.j(M(b)));if(0>this.l(T)&&0>b.l(T))return y(this.m()*b.m());for(var R=this.g.length+b.g.length,C=[],k=0;k<2*R;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var N=0;N<b.g.length;N++){var x=this.i(k)>>>16,A=this.i(k)&65535,he=b.i(N)>>>16,Le=b.i(N)&65535;C[2*k+2*N]+=A*Le,te(C,2*k+2*N),C[2*k+2*N+1]+=x*Le,te(C,2*k+2*N+1),C[2*k+2*N+1]+=A*he,te(C,2*k+2*N+1),C[2*k+2*N+2]+=x*he,te(C,2*k+2*N+2)}for(k=0;k<R;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=R;k<2*R;k++)C[k]=0;return new u(C,0)};function te(b,R){for(;(b[R]&65535)!=b[R];)b[R+1]+=b[R]>>>16,b[R]&=65535,R++}function re(b,R){this.g=b,this.h=R}function W(b,R){if(O(R))throw Error("division by zero");if(O(b))return new re(E,E);if(F(b))return R=W(M(b),R),new re(M(R.g),M(R.h));if(F(R))return R=W(b,M(R)),new re(M(R.g),R.h);if(30<b.g.length){if(F(b)||F(R))throw Error("slowDivide_ only works with positive integers.");for(var C=S,k=R;0>=k.l(b);)C=le(C),k=le(k);var N=ce(C,1),x=ce(k,1);for(k=ce(k,2),C=ce(C,2);!O(k);){var A=x.add(k);0>=A.l(b)&&(N=N.add(C),x=A),k=ce(k,1),C=ce(C,1)}return R=ie(b,N.j(R)),new re(N,R)}for(N=E;0<=b.l(R);){for(C=Math.max(1,Math.floor(b.m()/R.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),x=y(C),A=x.j(R);F(A)||0<A.l(b);)C-=k,x=y(C),A=x.j(R);O(x)&&(x=S),N=N.add(x),b=ie(b,A)}return new re(N,b)}n.A=function(b){return W(this,b).h},n.and=function(b){for(var R=Math.max(this.g.length,b.g.length),C=[],k=0;k<R;k++)C[k]=this.i(k)&b.i(k);return new u(C,this.h&b.h)},n.or=function(b){for(var R=Math.max(this.g.length,b.g.length),C=[],k=0;k<R;k++)C[k]=this.i(k)|b.i(k);return new u(C,this.h|b.h)},n.xor=function(b){for(var R=Math.max(this.g.length,b.g.length),C=[],k=0;k<R;k++)C[k]=this.i(k)^b.i(k);return new u(C,this.h^b.h)};function le(b){for(var R=b.g.length+1,C=[],k=0;k<R;k++)C[k]=b.i(k)<<1|b.i(k-1)>>>31;return new u(C,b.h)}function ce(b,R){var C=R>>5;R%=32;for(var k=b.g.length-C,N=[],x=0;x<k;x++)N[x]=0<R?b.i(x+C)>>>R|b.i(x+C+1)<<32-R:b.i(x+C);return new u(N,b.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,q0=i,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=y,u.fromString=v,qs=u}).apply(typeof y_<"u"?y_:typeof self<"u"?self:typeof window<"u"?window:{});var tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var H0,nl,W0,yc,Df,K0,G0,Q0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,_){return c==Array.prototype||c==Object.prototype||(c[m]=_.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof tc=="object"&&tc];for(var m=0;m<c.length;++m){var _=c[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(c,m){if(m)e:{var _=i;c=c.split(".");for(var I=0;I<c.length-1;I++){var U=c[I];if(!(U in _))break e;_=_[U]}c=c[c.length-1],I=_[c],m=m(I),m!=I&&m!=null&&e(_,c,{configurable:!0,writable:!0,value:m})}}function a(c,m){c instanceof String&&(c+="");var _=0,I=!1,U={next:function(){if(!I&&_<c.length){var q=_++;return{value:m(q,c[q]),done:!1}}return I=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return a(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function y(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function v(c,m,_){return c.call.apply(c.bind,arguments)}function E(c,m,_){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,I),c.apply(m,U)}}return function(){return c.apply(m,arguments)}}function S(c,m,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,S.apply(null,arguments)}function T(c,m){var _=Array.prototype.slice.call(arguments,1);return function(){var I=_.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function O(c,m){function _(){}_.prototype=m.prototype,c.aa=m.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(I,U,q){for(var se=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)se[Xe-2]=arguments[Xe];return m.prototype[U].apply(I,se)}}function F(c){const m=c.length;if(0<m){const _=Array(m);for(let I=0;I<m;I++)_[I]=c[I];return _}return[]}function M(c,m){for(let _=1;_<arguments.length;_++){const I=arguments[_];if(f(I)){const U=c.length||0,q=I.length||0;c.length=U+q;for(let se=0;se<q;se++)c[U+se]=I[se]}else c.push(I)}}class ie{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function te(c){return/^[\s\xa0]*$/.test(c)}function re(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function W(c){return W[" "](c),c}W[" "]=function(){};var le=re().indexOf("Gecko")!=-1&&!(re().toLowerCase().indexOf("webkit")!=-1&&re().indexOf("Edge")==-1)&&!(re().indexOf("Trident")!=-1||re().indexOf("MSIE")!=-1)&&re().indexOf("Edge")==-1;function ce(c,m,_){for(const I in c)m.call(_,c[I],I,c)}function b(c,m){for(const _ in c)m.call(void 0,c[_],_,c)}function R(c){const m={};for(const _ in c)m[_]=c[_];return m}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(c,m){let _,I;for(let U=1;U<arguments.length;U++){I=arguments[U];for(_ in I)c[_]=I[_];for(let q=0;q<C.length;q++)_=C[q],Object.prototype.hasOwnProperty.call(I,_)&&(c[_]=I[_])}}function N(c){var m=1;c=c.split(":");const _=[];for(;0<m&&c.length;)_.push(c.shift()),m--;return c.length&&_.push(c.join(":")),_}function x(c){d.setTimeout(()=>{throw c},0)}function A(){var c=G;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class he{constructor(){this.h=this.g=null}add(m,_){const I=Le.get();I.set(m,_),this.h?this.h.next=I:this.g=I,this.h=I}}var Le=new ie(()=>new Ce,c=>c.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,Q=!1,G=new he,ee=()=>{const c=d.Promise.resolve(void 0);Ie=()=>{c.then(V)}};var V=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(_){x(_)}var m=Le;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}Q=!1};function j(){this.s=this.s,this.C=this.C}j.prototype.s=!1,j.prototype.ma=function(){this.s||(this.s=!0,this.N())},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function X(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var oe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return c}();function ue(c,m){if(X.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(le){e:{try{W(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else _=="mouseover"?m=c.fromElement:_=="mouseout"&&(m=c.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ae[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&ue.aa.h.call(this)}}O(ue,X);var Ae={2:"touch",3:"pen",4:"mouse"};ue.prototype.h=function(){ue.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ve="closure_listenable_"+(1e6*Math.random()|0),Oe=0;function Be(c,m,_,I,U){this.listener=c,this.proxy=null,this.src=m,this.type=_,this.capture=!!I,this.ha=U,this.key=++Oe,this.da=this.fa=!1}function Ye(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ke(c){this.src=c,this.g={},this.h=0}Ke.prototype.add=function(c,m,_,I,U){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var se=bt(c,m,I,U);return-1<se?(m=c[se],_||(m.fa=!1)):(m=new Be(m,this.src,q,!!I,U),m.fa=_,c.push(m)),m};function kt(c,m){var _=m.type;if(_ in c.g){var I=c.g[_],U=Array.prototype.indexOf.call(I,m,void 0),q;(q=0<=U)&&Array.prototype.splice.call(I,U,1),q&&(Ye(m),c.g[_].length==0&&(delete c.g[_],c.h--))}}function bt(c,m,_,I){for(var U=0;U<c.length;++U){var q=c[U];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==I)return U}return-1}var Zn="closure_lm_"+(1e6*Math.random()|0),Mn={};function Hr(c,m,_,I,U){if(Array.isArray(m)){for(var q=0;q<m.length;q++)Hr(c,m[q],_,I,U);return null}return _=ds(_),c&&c[ve]?c.K(m,_,y(I)?!!I.capture:!!I,U):$t(c,m,_,!1,I,U)}function $t(c,m,_,I,U,q){if(!m)throw Error("Invalid event type");var se=y(U)?!!U.capture:!!U,Xe=It(c);if(Xe||(c[Zn]=Xe=new Ke(c)),_=Xe.add(m,_,I,se,q),_.proxy)return _;if(I=ln(),_.proxy=I,I.src=c,I.listener=_,c.addEventListener)oe||(U=se),U===void 0&&(U=!1),c.addEventListener(m.toString(),I,U);else if(c.attachEvent)c.attachEvent(tr(m.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ln(){function c(_){return m.call(c.src,c.listener,_)}const m=hs;return c}function er(c,m,_,I,U){if(Array.isArray(m))for(var q=0;q<m.length;q++)er(c,m[q],_,I,U);else I=y(I)?!!I.capture:!!I,_=ds(_),c&&c[ve]?(c=c.i,m=String(m).toString(),m in c.g&&(q=c.g[m],_=bt(q,_,I,U),-1<_&&(Ye(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete c.g[m],c.h--)))):c&&(c=It(c))&&(m=c.g[m.toString()],c=-1,m&&(c=bt(m,_,I,U)),(_=-1<c?m[c]:null)&&qt(_))}function qt(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[ve])kt(m.i,c);else{var _=c.type,I=c.proxy;m.removeEventListener?m.removeEventListener(_,I,c.capture):m.detachEvent?m.detachEvent(tr(_),I):m.addListener&&m.removeListener&&m.removeListener(I),(_=It(m))?(kt(_,c),_.h==0&&(_.src=null,m[Zn]=null)):Ye(c)}}}function tr(c){return c in Mn?Mn[c]:Mn[c]="on"+c}function hs(c,m){if(c.da)c=!0;else{m=new ue(m,this);var _=c.listener,I=c.ha||c.src;c.fa&&qt(c),c=_.call(I,m)}return c}function It(c){return c=c[Zn],c instanceof Ke?c:null}var Tn="__closure_events_fn_"+(1e9*Math.random()>>>0);function ds(c){return typeof c=="function"?c:(c[Tn]||(c[Tn]=function(m){return c.handleEvent(m)}),c[Tn])}function mt(){j.call(this),this.i=new Ke(this),this.M=this,this.F=null}O(mt,j),mt.prototype[ve]=!0,mt.prototype.removeEventListener=function(c,m,_,I){er(this,c,m,_,I)};function st(c,m){var _,I=c.F;if(I)for(_=[];I;I=I.F)_.push(I);if(c=c.M,I=m.type||m,typeof m=="string")m=new X(m,c);else if(m instanceof X)m.target=m.target||c;else{var U=m;m=new X(I,c),k(m,U)}if(U=!0,_)for(var q=_.length-1;0<=q;q--){var se=m.g=_[q];U=nr(se,I,!0,m)&&U}if(se=m.g=c,U=nr(se,I,!0,m)&&U,U=nr(se,I,!1,m)&&U,_)for(q=0;q<_.length;q++)se=m.g=_[q],U=nr(se,I,!1,m)&&U}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var _=c.g[m],I=0;I<_.length;I++)Ye(_[I]);delete c.g[m],c.h--}}this.F=null},mt.prototype.K=function(c,m,_,I){return this.i.add(String(c),m,!1,_,I)},mt.prototype.L=function(c,m,_,I){return this.i.add(String(c),m,!0,_,I)};function nr(c,m,_,I){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,q=0;q<m.length;++q){var se=m[q];if(se&&!se.da&&se.capture==_){var Xe=se.listener,St=se.ha||se.src;se.fa&&kt(c.i,se),U=Xe.call(St,I)!==!1&&U}}return U&&!I.defaultPrevented}function Wr(c,m,_){if(typeof c=="function")_&&(c=S(c,_));else if(c&&typeof c.handleEvent=="function")c=S(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(c,m||0)}function en(c){c.g=Wr(()=>{c.g=null,c.i&&(c.i=!1,en(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class Sr extends j{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:en(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vn(c){j.call(this),this.h=c,this.g={}}O(Vn,j);var yi=[];function fs(c){ce(c.g,function(m,_){this.g.hasOwnProperty(_)&&qt(m)},c),c.g={}}Vn.prototype.N=function(){Vn.aa.N.call(this),fs(this)},Vn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _i=d.JSON.stringify,vi=d.JSON.parse,ps=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function rr(){}rr.prototype.h=null;function tn(c){return c.h||(c.h=c.i())}function wi(){}var Ee={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Me(){X.call(this,"d")}O(Me,X);function Ge(){X.call(this,"c")}O(Ge,X);var ht={},Ht=null;function Fn(){return Ht=Ht||new mt}ht.La="serverreachability";function ms(c){X.call(this,ht.La,c)}O(ms,X);function Kr(c){const m=Fn();st(m,new ms(m))}ht.STAT_EVENT="statevent";function ga(c,m){X.call(this,ht.STAT_EVENT,c),this.stat=m}O(ga,X);function gt(c){const m=Fn();st(m,new ga(m,c))}ht.Ma="timingevent";function ro(c,m){X.call(this,ht.Ma,c),this.size=m}O(ro,X);function ir(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},m)}function gs(){this.g=!0}gs.prototype.xa=function(){this.g=!1};function ys(c,m,_,I,U,q){c.info(function(){if(c.g)if(q)for(var se="",Xe=q.split("&"),St=0;St<Xe.length;St++){var $e=Xe[St].split("=");if(1<$e.length){var Nt=$e[0];$e=$e[1];var vt=Nt.split("_");se=2<=vt.length&&vt[1]=="type"?se+(Nt+"="+$e+"&"):se+(Nt+"=redacted&")}}else se=null;else se=q;return"XMLHTTP REQ ("+I+") [attempt "+U+"]: "+m+`
`+_+`
`+se})}function io(c,m,_,I,U,q,se){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+U+"]: "+m+`
`+_+`
`+q+" "+se})}function sr(c,m,_,I){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+Eh(c,_)+(I?" "+I:"")})}function ya(c,m){c.info(function(){return"TIMEOUT: "+m})}gs.prototype.info=function(){};function Eh(c,m){if(!c.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var I=_[c];if(!(2>I.length)){var U=I[1];if(Array.isArray(U)&&!(1>U.length)){var q=U[0];if(q!="noop"&&q!="stop"&&q!="close")for(var se=1;se<U.length;se++)U[se]=""}}}}return _i(_)}catch{return m}}var so={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ol={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},or;function _s(){}O(_s,rr),_s.prototype.g=function(){return new XMLHttpRequest},_s.prototype.i=function(){return{}},or=new _s;function ar(c,m,_,I){this.j=c,this.i=m,this.l=_,this.R=I||1,this.U=new Vn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ml}function Ml(){this.i=null,this.g="",this.h=!1}var _a={},oo={};function ao(c,m,_){c.L=1,c.v=Ri(Sn(m)),c.m=_,c.P=!0,va(c,null)}function va(c,m){c.F=Date.now(),Ze(c),c.A=Sn(c.v);var _=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),Pi(_.i,"t",I),c.C=0,_=c.j.J,c.h=new Ml,c.g=eu(c.j,_?m:null,!c.m),0<c.O&&(c.M=new Sr(S(c.Y,c,c.g),c.O)),m=c.U,_=c.g,I=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(yi[0]=U.toString()),U=yi);for(var q=0;q<U.length;q++){var se=Hr(_,U[q],I||m.handleEvent,!1,m.h||m);if(!se)break;m.g[se.key]=se}m=c.H?R(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),Kr(),ys(c.i,c.u,c.A,c.l,c.R,c.m)}ar.prototype.ca=function(c){c=c.target;const m=this.M;m&&cn(c)==3?m.j():this.Y(c)},ar.prototype.Y=function(c){try{if(c==this.g)e:{const vt=cn(this.g);var m=this.g.Ba();const jn=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||Ra(this.g)))){this.J||vt!=4||m==7||(m==8||0>=jn?Kr(3):Kr(2)),vs(this);var _=this.g.Z();this.X=_;t:if(Vl(this)){var I=Ra(this.g);c="";var U=I.length,q=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),Ei(this);var se="";break t}this.h.i=new d.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,c+=this.h.i.decode(I[m],{stream:!(q&&m==U-1)});I.length=0,this.h.g+=c,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=_==200,io(this.i,this.u,this.A,this.l,this.R,vt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Xe,St=this.g;if((Xe=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(Xe)){var $e=Xe;break t}}$e=null}if(_=$e)sr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wa(this,_);else{this.o=!1,this.s=3,gt(12),Un(this),Ei(this);break e}}if(this.P){_=!0;let An;for(;!this.J&&this.C<se.length;)if(An=Th(this,se),An==oo){vt==4&&(this.s=4,gt(14),_=!1),sr(this.i,this.l,null,"[Incomplete Response]");break}else if(An==_a){this.s=4,gt(15),sr(this.i,this.l,se,"[Invalid Chunk]"),_=!1;break}else sr(this.i,this.l,An,null),wa(this,An);if(Vl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||se.length!=0||this.h.h||(this.s=1,gt(16),_=!1),this.o=this.o&&_,!_)sr(this.i,this.l,se,"[Invalid Chunked Response]"),Un(this),Ei(this);else if(0<se.length&&!this.W){this.W=!0;var Nt=this.j;Nt.g==this&&Nt.ba&&!Nt.M&&(Nt.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),Pa(Nt),Nt.M=!0,gt(11))}}else sr(this.i,this.l,se,null),wa(this,se);vt==4&&Un(this),this.o&&!this.J&&(vt==4?vo(this.j,this):(this.o=!1,Ze(this)))}else po(this.g),_==400&&0<se.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Un(this),Ei(this)}}}catch{}finally{}};function Vl(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Th(c,m){var _=c.C,I=m.indexOf(`
`,_);return I==-1?oo:(_=Number(m.substring(_,I)),isNaN(_)?_a:(I+=1,I+_>m.length?oo:(m=m.slice(I,I+_),c.C=I+_,m)))}ar.prototype.cancel=function(){this.J=!0,Un(this)};function Ze(c){c.S=Date.now()+c.I,Fl(c,c.I)}function Fl(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=ir(S(c.ba,c),m)}function vs(c){c.B&&(d.clearTimeout(c.B),c.B=null)}ar.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(ya(this.i,this.A),this.L!=2&&(Kr(),gt(17)),Un(this),this.s=2,Ei(this)):Fl(this,this.S-c)};function Ei(c){c.j.G==0||c.J||vo(c.j,c)}function Un(c){vs(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,fs(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function wa(c,m){try{var _=c.j;if(_.G!=0&&(_.g==c||nn(_.h,c))){if(!c.K&&nn(_.h,c)&&_.G==3){try{var I=_.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var U=I;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)_o(_),dr(_);else break e;yo(_),gt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=ir(S(_.Za,_),6e3));if(1>=Bl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Jr(_,11)}else if((c.K||_.g==c)&&_o(_),!te(m))for(U=_.Da.g.parse(m),m=0;m<U.length;m++){let $e=U[m];if(_.T=$e[0],$e=$e[1],_.G==2)if($e[0]=="c"){_.K=$e[1],_.ia=$e[2];const Nt=$e[3];Nt!=null&&(_.la=Nt,_.j.info("VER="+_.la));const vt=$e[4];vt!=null&&(_.Aa=vt,_.j.info("SVER="+_.Aa));const jn=$e[5];jn!=null&&typeof jn=="number"&&0<jn&&(I=1.5*jn,_.L=I,_.j.info("backChannelRequestTimeoutMs_="+I)),I=_;const An=c.g;if(An){const As=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(As){var q=I.h;q.g||As.indexOf("spdy")==-1&&As.indexOf("quic")==-1&&As.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Ea(q,q.h),q.h=null))}if(I.D){const Eo=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;Eo&&(I.ya=Eo,Je(I.I,I.D,Eo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),I=_;var se=c;if(I.qa=Zl(I,I.J?I.ia:null,I.W),se.K){jl(I.h,se);var Xe=se,St=I.L;St&&(Xe.I=St),Xe.B&&(vs(Xe),Ze(Xe)),I.g=se}else Rs(I);0<_.i.length&&Cr(_)}else $e[0]!="stop"&&$e[0]!="close"||Jr(_,7);else _.G==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?Jr(_,7):Vt(_):$e[0]!="noop"&&_.l&&_.l.ta($e),_.v=0)}}Kr(4)}catch{}}var Ul=class{constructor(c,m){this.g=c,this.map=m}};function ws(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function In(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Bl(c){return c.h?1:c.g?c.g.size:0}function nn(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Ea(c,m){c.g?c.g.add(m):c.h=m}function jl(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}ws.prototype.cancel=function(){if(this.i=zl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function zl(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const _ of c.g.values())m=m.concat(_.D);return m}return F(c.i)}function lo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var m=[],_=c.length,I=0;I<_;I++)m.push(c[I]);return m}m=[],_=0;for(I in c)m[_++]=c[I];return m}function uo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var m=[];c=c.length;for(var _=0;_<c;_++)m.push(_);return m}m=[],_=0;for(const I in c)m[_++]=I;return m}}}function Ti(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var _=uo(c),I=lo(c),U=I.length,q=0;q<U;q++)m.call(void 0,I[q],_&&_[q],c)}var Es=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ih(c,m){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var I=c[_].indexOf("="),U=null;if(0<=I){var q=c[_].substring(0,I);U=c[_].substring(I+1)}else q=c[_];m(q,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Gr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Gr){this.h=c.h,Ts(this,c.j),this.o=c.o,this.g=c.g,Ii(this,c.s),this.l=c.l;var m=c.i,_=new Rr;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Si(this,_),this.m=c.m}else c&&(m=String(c).match(Es))?(this.h=!1,Ts(this,m[1]||"",!0),this.o=je(m[2]||""),this.g=je(m[3]||"",!0),Ii(this,m[4]),this.l=je(m[5]||"",!0),Si(this,m[6]||"",!0),this.m=je(m[7]||"")):(this.h=!1,this.i=new Rr(null,this.h))}Gr.prototype.toString=function(){var c=[],m=this.j;m&&c.push(Ai(m,co,!0),":");var _=this.g;return(_||m=="file")&&(c.push("//"),(m=this.o)&&c.push(Ai(m,co,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Ai(_,_.charAt(0)=="/"?Hl:ql,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Ai(_,Ta)),c.join("")};function Sn(c){return new Gr(c)}function Ts(c,m,_){c.j=_?je(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function Ii(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function Si(c,m,_){m instanceof Rr?(c.i=m,Ar(c.i,c.h)):(_||(m=Ai(m,Wl)),c.i=new Rr(m,c.h))}function Je(c,m,_){c.i.set(m,_)}function Ri(c){return Je(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function je(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ai(c,m,_){return typeof c=="string"?(c=encodeURI(c).replace(m,$l),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function $l(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var co=/[#\/\?@]/g,ql=/[#\?:]/g,Hl=/[#\?]/g,Wl=/[#\?@]/g,Ta=/#/g;function Rr(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function Mt(c){c.g||(c.g=new Map,c.h=0,c.i&&Ih(c.i,function(m,_){c.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Rr.prototype,n.add=function(c,m){Mt(this),this.i=null,c=Bn(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(m),this.h+=1,this};function lr(c,m){Mt(c),m=Bn(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function ur(c,m){return Mt(c),m=Bn(c,m),c.g.has(m)}n.forEach=function(c,m){Mt(this),this.g.forEach(function(_,I){_.forEach(function(U){c.call(m,U,I,this)},this)},this)},n.na=function(){Mt(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let I=0;I<m.length;I++){const U=c[I];for(let q=0;q<U.length;q++)_.push(m[I])}return _},n.V=function(c){Mt(this);let m=[];if(typeof c=="string")ur(this,c)&&(m=m.concat(this.g.get(Bn(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)m=m.concat(c[_])}return m},n.set=function(c,m){return Mt(this),this.i=null,c=Bn(this,c),ur(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},n.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function Pi(c,m,_){lr(c,m),0<_.length&&(c.i=null,c.g.set(Bn(c,m),F(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var I=m[_];const q=encodeURIComponent(String(I)),se=this.V(I);for(I=0;I<se.length;I++){var U=q;se[I]!==""&&(U+="="+encodeURIComponent(String(se[I]))),c.push(U)}}return this.i=c.join("&")};function Bn(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function Ar(c,m){m&&!c.j&&(Mt(c),c.i=null,c.g.forEach(function(_,I){var U=I.toLowerCase();I!=U&&(lr(this,I),Pi(this,U,_))},c)),c.j=m}function Sh(c,m){const _=new gs;if(d.Image){const I=new Image;I.onload=T(un,_,"TestLoadImage: loaded",!0,m,I),I.onerror=T(un,_,"TestLoadImage: error",!1,m,I),I.onabort=T(un,_,"TestLoadImage: abort",!1,m,I),I.ontimeout=T(un,_,"TestLoadImage: timeout",!1,m,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else m(!1)}function Kl(c,m){const _=new gs,I=new AbortController,U=setTimeout(()=>{I.abort(),un(_,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:I.signal}).then(q=>{clearTimeout(U),q.ok?un(_,"TestPingServer: ok",!0,m):un(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),un(_,"TestPingServer: error",!1,m)})}function un(c,m,_,I,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),I(_)}catch{}}function Rh(){this.g=new ps}function Gl(c,m,_){const I=_||"";try{Ti(c,function(U,q){let se=U;y(U)&&(se=_i(U)),m.push(I+q+"="+encodeURIComponent(se))})}catch(U){throw m.push(I+"type="+encodeURIComponent("_badmap")),U}}function Qr(c){this.l=c.Ub||null,this.j=c.eb||!1}O(Qr,rr),Qr.prototype.g=function(){return new Is(this.l,this.j)},Qr.prototype.i=function(c){return function(){return c}}({});function Is(c,m){mt.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(Is,mt),n=Is.prototype,n.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,hr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,hr(this)),this.g&&(this.readyState=3,hr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ql(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ql(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?cr(this):hr(this),this.readyState==3&&Ql(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,cr(this))},n.Qa=function(c){this.g&&(this.response=c,cr(this))},n.ga=function(){this.g&&cr(this)};function cr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,hr(c)}n.setRequestHeader=function(c,m){this.u.append(c,m)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=m.next();return c.join(`\r
`)};function hr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Yr(c){let m="";return ce(c,function(_,I){m+=I,m+=":",m+=_,m+=`\r
`}),m}function Ci(c,m,_){e:{for(I in _){var I=!1;break e}I=!0}I||(_=Yr(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Je(c,m,_))}function ot(c){mt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(ot,mt);var Ah=/^https?$/i,Ia=["POST","PUT"];n=ot.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,m,_,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():or.g(),this.v=this.o?tn(this.o):tn(or),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(q){Ss(this,q);return}if(c=_||"",_=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var U in I)_.set(U,I[U]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const q of I.keys())_.set(q,I.get(q));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),U=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ia,m,void 0))||I||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,se]of _)this.g.setRequestHeader(q,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fo(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){Ss(this,q)}};function Ss(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,ho(c),Rn(c)}function ho(c){c.A||(c.A=!0,st(c,"complete"),st(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,st(this,"complete"),st(this,"abort"),Rn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rn(this,!0)),ot.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Sa(this):this.bb())},n.bb=function(){Sa(this)};function Sa(c){if(c.h&&typeof u<"u"&&(!c.v[1]||cn(c)!=4||c.Z()!=2)){if(c.u&&cn(c)==4)Wr(c.Ea,0,c);else if(st(c,"readystatechange"),cn(c)==4){c.h=!1;try{const se=c.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var I;if(I=se===0){var U=String(c.D).match(Es)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),I=!Ah.test(U?U.toLowerCase():"")}_=I}if(_)st(c,"complete"),st(c,"success");else{c.m=6;try{var q=2<cn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",ho(c)}}finally{Rn(c)}}}}function Rn(c,m){if(c.g){fo(c);const _=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||st(c,"ready");try{_.onreadystatechange=I}catch{}}}function fo(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function cn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),vi(m)}};function Ra(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function po(c){const m={};c=(c.g&&2<=cn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(te(c[I]))continue;var _=N(c[I]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[U]||[];m[U]=q,q.push(_)}b(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pr(c,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||m}function Aa(c){this.Aa=0,this.i=[],this.j=new gs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pr("baseRetryDelayMs",5e3,c),this.cb=Pr("retryDelaySeedMs",1e4,c),this.Wa=Pr("forwardChannelMaxRetries",2,c),this.wa=Pr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new ws(c&&c.concurrentRequestLimit),this.Da=new Rh,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Aa.prototype,n.la=8,n.G=1,n.connect=function(c,m,_,I){gt(0),this.W=c,this.H=m||{},_&&I!==void 0&&(this.H.OSID=_,this.H.OAID=I),this.F=this.X,this.I=Zl(this,null,this.W),Cr(this)};function Vt(c){if(mo(c),c.G==3){var m=c.U++,_=Sn(c.I);if(Je(_,"SID",c.K),Je(_,"RID",m),Je(_,"TYPE","terminate"),Xr(c,_),m=new ar(c,c.j,m),m.L=2,m.v=Ri(Sn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=eu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ze(m)}Jl(c)}function dr(c){c.g&&(Pa(c),c.g.cancel(),c.g=null)}function mo(c){dr(c),c.u&&(d.clearTimeout(c.u),c.u=null),_o(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function Cr(c){if(!In(c.h)&&!c.s){c.s=!0;var m=c.Ga;Ie||ee(),Q||(Ie(),Q=!0),G.add(m,c),c.B=0}}function Ph(c,m){return Bl(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=ir(S(c.Ga,c,m),Xl(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new ar(this,this.j,c);let q=this.o;if(this.S&&(q?(q=R(q),k(q,this.S)):q=this.S),this.m!==null||this.O||(U.H=q,q=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var I=this.i[_];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ki(this,U,m),_=Sn(this.I),Je(_,"RID",c),Je(_,"CVER",22),this.D&&Je(_,"X-HTTP-Session-Id",this.D),Xr(this,_),q&&(this.O?m="headers="+encodeURIComponent(String(Yr(q)))+"&"+m:this.m&&Ci(_,this.m,q)),Ea(this.h,U),this.Ua&&Je(_,"TYPE","init"),this.P?(Je(_,"$req",m),Je(_,"SID","null"),U.T=!0,ao(U,_,null)):ao(U,_,m),this.G=2}}else this.G==3&&(c?go(this,c):this.i.length==0||In(this.h)||go(this))};function go(c,m){var _;m?_=m.l:_=c.U++;const I=Sn(c.I);Je(I,"SID",c.K),Je(I,"RID",_),Je(I,"AID",c.T),Xr(c,I),c.m&&c.o&&Ci(I,c.m,c.o),_=new ar(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),m&&(c.i=m.D.concat(c.i)),m=ki(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ea(c.h,_),ao(_,I,m)}function Xr(c,m){c.H&&ce(c.H,function(_,I){Je(m,I,_)}),c.l&&Ti({},function(_,I){Je(m,I,_)})}function ki(c,m,_){_=Math.min(c.i.length,_);var I=c.l?S(c.l.Na,c.l,c):null;e:{var U=c.i;let q=-1;for(;;){const se=["count="+_];q==-1?0<_?(q=U[0].g,se.push("ofs="+q)):q=0:se.push("ofs="+q);let Xe=!0;for(let St=0;St<_;St++){let $e=U[St].g;const Nt=U[St].map;if($e-=q,0>$e)q=Math.max(0,U[St].g-100),Xe=!1;else try{Gl(Nt,se,"req"+$e+"_")}catch{I&&I(Nt)}}if(Xe){I=se.join("&");break e}}}return c=c.i.splice(0,_),m.D=c,I}function Rs(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;Ie||ee(),Q||(Ie(),Q=!0),G.add(m,c),c.v=0}}function yo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=ir(S(c.Fa,c),Xl(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Yl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=ir(S(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),dr(this),Yl(this))};function Pa(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Yl(c){c.g=new ar(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=Sn(c.qa);Je(m,"RID","rpc"),Je(m,"SID",c.K),Je(m,"AID",c.T),Je(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&Je(m,"TO",c.ja),Je(m,"TYPE","xmlhttp"),Xr(c,m),c.m&&c.o&&Ci(m,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=Ri(Sn(m)),_.m=null,_.P=!0,va(_,c)}n.Za=function(){this.C!=null&&(this.C=null,dr(this),yo(this),gt(19))};function _o(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function vo(c,m){var _=null;if(c.g==m){_o(c),Pa(c),c.g=null;var I=2}else if(nn(c.h,m))_=m.D,jl(c.h,m),I=1;else return;if(c.G!=0){if(m.o)if(I==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var U=c.B;I=Fn(),st(I,new ro(I,_)),Cr(c)}else Rs(c);else if(U=m.s,U==3||U==0&&0<m.X||!(I==1&&Ph(c,m)||I==2&&yo(c)))switch(_&&0<_.length&&(m=c.h,m.i=m.i.concat(_)),U){case 1:Jr(c,5);break;case 4:Jr(c,10);break;case 3:Jr(c,6);break;default:Jr(c,2)}}}function Xl(c,m){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*m}function Jr(c,m){if(c.j.info("Error code "+m),m==2){var _=S(c.fb,c),I=c.Xa;const U=!I;I=new Gr(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ts(I,"https"),Ri(I),U?Sh(I.toString(),_):Kl(I.toString(),_)}else gt(2);c.G=0,c.l&&c.l.sa(m),Jl(c),mo(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Jl(c){if(c.G=0,c.ka=[],c.l){const m=zl(c.h);(m.length!=0||c.i.length!=0)&&(M(c.ka,m),M(c.ka,c.i),c.h.i.length=0,F(c.i),c.i.length=0),c.l.ra()}}function Zl(c,m,_){var I=_ instanceof Gr?Sn(_):new Gr(_);if(I.g!="")m&&(I.g=m+"."+I.g),Ii(I,I.s);else{var U=d.location;I=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var q=new Gr(null);I&&Ts(q,I),m&&(q.g=m),U&&Ii(q,U),_&&(q.l=_),I=q}return _=c.D,m=c.ya,_&&m&&Je(I,_,m),Je(I,"VER",c.la),Xr(c,I),I}function eu(c,m,_){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new ot(new Qr({eb:_})):new ot(c.pa),m.Ha(c.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ca(){}n=Ca.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function wo(){}wo.prototype.g=function(c,m){return new rn(c,m)};function rn(c,m){mt.call(this),this.g=new Aa(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!te(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!te(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new kr(this)}O(rn,mt),rn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},rn.prototype.close=function(){Vt(this.g)},rn.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=_i(c),c=_);m.i.push(new Ul(m.Ya++,c)),m.G==3&&Cr(m)},rn.prototype.N=function(){this.g.l=null,delete this.j,Vt(this.g),delete this.g,rn.aa.N.call(this)};function tu(c){Me.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const _ in m){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}O(tu,Me);function nu(){Ge.call(this),this.status=1}O(nu,Ge);function kr(c){this.g=c}O(kr,Ca),kr.prototype.ua=function(){st(this.g,"a")},kr.prototype.ta=function(c){st(this.g,new tu(c))},kr.prototype.sa=function(c){st(this.g,new nu)},kr.prototype.ra=function(){st(this.g,"b")},wo.prototype.createWebChannel=wo.prototype.g,rn.prototype.send=rn.prototype.o,rn.prototype.open=rn.prototype.m,rn.prototype.close=rn.prototype.close,Q0=function(){return new wo},G0=function(){return Fn()},K0=ht,Df={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},so.NO_ERROR=0,so.TIMEOUT=8,so.HTTP_ERROR=6,yc=so,Ol.COMPLETE="complete",W0=Ol,wi.EventType=Ee,Ee.OPEN="a",Ee.CLOSE="b",Ee.ERROR="c",Ee.MESSAGE="d",mt.prototype.listen=mt.prototype.K,nl=wi,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,H0=ot}).apply(typeof tc<"u"?tc:typeof self<"u"?self:typeof window<"u"?window:{});const __="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new Yc("@firebase/firestore");function $o(){return Ys.logLevel}function fe(n,...e){if(Ys.logLevel<=Fe.DEBUG){const t=e.map(wp);Ys.debug(`Firestore (${ha}): ${n}`,...t)}}function pi(n,...e){if(Ys.logLevel<=Fe.ERROR){const t=e.map(wp);Ys.error(`Firestore (${ha}): ${n}`,...t)}}function ta(n,...e){if(Ys.logLevel<=Fe.WARN){const t=e.map(wp);Ys.warn(`Firestore (${ha}): ${n}`,...t)}}function wp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(n="Unexpected state"){const e=`FIRESTORE (${ha}) INTERNAL ASSERTION FAILED: `+n;throw pi(e),new Error(e)}function Qe(n,e){n||be()}function De(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends Xn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Xt.UNAUTHENTICATED))}shutdown(){}}class JP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ZP{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Qe(this.o===void 0);let i=this.i;const o=f=>this.i!==i?(i=this.i,t(f)):Promise.resolve();let a=new Zi;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Zi,e.enqueueRetryable(()=>o(this.currentUser))};const u=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await o(this.currentUser)})},d=f=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>d(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Zi)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Qe(typeof i.accessToken=="string"),new Y0(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string"),new Xt(e)}}class eC{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class tC{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new eC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Qe(this.o===void 0);const i=a=>{a.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.R;return this.R=a.token,fe("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>i(a))};const o=a=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>o(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?o(a):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Qe(typeof t.token=="string"),this.R=t.token,new nC(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=iC(40);for(let a=0;a<o.length;++a)i.length<20&&o[a]<t&&(i+=e.charAt(o[a]%e.length))}return i}}function ze(n,e){return n<e?-1:n>e?1:0}function na(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{static now(){return Pt.fromMillis(Date.now())}static fromDate(e){return Pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new Pt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ge(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ge(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ge(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ze(this.nanoseconds,e.nanoseconds):ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{static fromTimestamp(e){return new Ne(e)}static min(){return new Ne(new Pt(0,0))}static max(){return new Ne(new Pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t,i){t===void 0?t=0:t>e.length&&be(),i===void 0?i=e.length-t:i>e.length-t&&be(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return yl.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof yl?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const a=e.get(o),u=t.get(o);if(a<u)return-1;if(a>u)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class rt extends yl{construct(e,t,i){return new rt(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ge(K.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new rt(t)}static emptyPath(){return new rt([])}}const sC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends yl{construct(e,t,i){return new jt(e,t,i)}static isValidIdentifier(e){return sC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new jt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const a=()=>{if(i.length===0)throw new ge(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let u=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ge(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[o+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ge(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=f,o+=2}else d==="`"?(u=!u,o++):d!=="."||u?(i+=d,o++):(a(),o++)}if(a(),u)throw new ge(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(t)}static emptyPath(){return new jt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.path=e}static fromPath(e){return new Te(rt.fromString(e))}static fromName(e){return new Te(rt.fromString(e).popFirst(5))}static empty(){return new Te(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return rt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Te(new rt(e.slice()))}}function oC(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ne.fromTimestamp(i===1e9?new Pt(t+1,0):new Pt(t,i));return new ts(o,Te.empty(),e)}function aC(n){return new ts(n.readTime,n.key,-1)}class ts{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ts(Ne.min(),Te.empty(),-1)}static max(){return new ts(Ne.max(),Te.empty(),-1)}}function lC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Te.comparator(n.documentKey,e.documentKey),t!==0?t:ze(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function da(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==uC)throw n;fe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&be(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H((i,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(i,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):H.reject(t)}static resolve(e){return new H((t,i)=>{t(e)})}static reject(e){return new H((t,i)=>{i(e)})}static waitFor(e){return new H((t,i)=>{let o=0,a=0,u=!1;e.forEach(d=>{++o,d.next(()=>{++a,u&&a===o&&t()},f=>i(f))}),u=!0,a===o&&t()})}static or(e){let t=H.resolve(!1);for(const i of e)t=t.next(o=>o?H.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,a)=>{i.push(t.call(this,o,a))}),this.waitFor(i)}static mapArray(e,t){return new H((i,o)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const y=f;t(e[y]).next(v=>{u[y]=v,++d,d===a&&i(u)},v=>o(v))}})}static doWhile(e,t){return new H((i,o)=>{const a=()=>{e()===!0?t().next(()=>{a()},o):i()};a()})}}function hC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function fa(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}rh.oe=-1;function ih(n){return n==null}function Mc(n){return n===0&&1/n==-1/0}function dC(n){return typeof n=="number"&&Number.isInteger(n)&&!Mc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=v_(e)),e=pC(n.get(t),e);return v_(e)}function pC(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case"":t+="";break;default:t+=a}}return t}function v_(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function us(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function J0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){this.comparator=e,this.root=t||Bt.EMPTY}insert(e,t){return new ct(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nc(this.root,e,this.comparator,!1)}getReverseIterator(){return new nc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nc(this.root,e,this.comparator,!0)}}class nc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?i(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,t,i,o,a){this.key=e,this.value=t,this.color=i??Bt.RED,this.left=o??Bt.EMPTY,this.right=a??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,a){return new Bt(e??this.key,t??this.value,i??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const a=i(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,i),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Bt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw be();const e=this.left.check();if(e!==this.right.check())throw be();return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw be()}get value(){throw be()}get color(){throw be()}get left(){throw be()}get right(){throw be()}copy(e,t,i,o,a){return this}insert(e,t,i){return new Bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new E_(this.data.getIterator())}getIteratorFrom(e){return new E_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ct(this.comparator);return t.data=e,t}}class E_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.fields=e,e.sort(jt.comparator)}static empty(){return new xn([])}unionWith(e){let t=new Ct(jt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new xn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return na(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Z0("Invalid base64 string: "+a):a}}(e);return new zt(t)}static fromUint8Array(e){const t=function(o){let a="";for(let u=0;u<o.length;++u)a+=String.fromCharCode(o[u]);return a}(e);return new zt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}zt.EMPTY_BYTE_STRING=new zt("");const mC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ns(n){if(Qe(!!n),typeof n=="string"){let e=0;const t=mC.exec(n);if(Qe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:_t(n.seconds),nanos:_t(n.nanos)}}function _t(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function rs(n){return typeof n=="string"?zt.fromBase64String(n):zt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function sh(n){const e=n.mapValue.fields.__previous_value__;return Ep(e)?sh(e):e}function _l(n){const e=ns(n.mapValue.fields.__local_write_time__.timestampValue);return new Pt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,t,i,o,a,u,d,f,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=y}}class vl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new vl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function is(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ep(n)?4:_C(n)?9007199254740991:yC(n)?10:11:be()}function zr(n,e){if(n===e)return!0;const t=is(n);if(t!==is(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return _l(n).isEqual(_l(e));case 3:return function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const u=ns(o.timestampValue),d=ns(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,a){return rs(o.bytesValue).isEqual(rs(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,a){return _t(o.geoPointValue.latitude)===_t(a.geoPointValue.latitude)&&_t(o.geoPointValue.longitude)===_t(a.geoPointValue.longitude)}(n,e);case 2:return function(o,a){if("integerValue"in o&&"integerValue"in a)return _t(o.integerValue)===_t(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const u=_t(o.doubleValue),d=_t(a.doubleValue);return u===d?Mc(u)===Mc(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return na(n.arrayValue.values||[],e.arrayValue.values||[],zr);case 10:case 11:return function(o,a){const u=o.mapValue.fields||{},d=a.mapValue.fields||{};if(w_(u)!==w_(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!zr(u[f],d[f])))return!1;return!0}(n,e);default:return be()}}function wl(n,e){return(n.values||[]).find(t=>zr(t,e))!==void 0}function ra(n,e){if(n===e)return 0;const t=is(n),i=is(e);if(t!==i)return ze(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return ze(n.booleanValue,e.booleanValue);case 2:return function(a,u){const d=_t(a.integerValue||a.doubleValue),f=_t(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1}(n,e);case 3:return T_(n.timestampValue,e.timestampValue);case 4:return T_(_l(n),_l(e));case 5:return ze(n.stringValue,e.stringValue);case 6:return function(a,u){const d=rs(a),f=rs(u);return d.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(a,u){const d=a.split("/"),f=u.split("/");for(let y=0;y<d.length&&y<f.length;y++){const v=ze(d[y],f[y]);if(v!==0)return v}return ze(d.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,u){const d=ze(_t(a.latitude),_t(u.latitude));return d!==0?d:ze(_t(a.longitude),_t(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return I_(n.arrayValue,e.arrayValue);case 10:return function(a,u){var d,f,y,v;const E=a.fields||{},S=u.fields||{},T=(d=E.value)===null||d===void 0?void 0:d.arrayValue,O=(f=S.value)===null||f===void 0?void 0:f.arrayValue,F=ze(((y=T==null?void 0:T.values)===null||y===void 0?void 0:y.length)||0,((v=O==null?void 0:O.values)===null||v===void 0?void 0:v.length)||0);return F!==0?F:I_(T,O)}(n.mapValue,e.mapValue);case 11:return function(a,u){if(a===rc.mapValue&&u===rc.mapValue)return 0;if(a===rc.mapValue)return 1;if(u===rc.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),y=u.fields||{},v=Object.keys(y);f.sort(),v.sort();for(let E=0;E<f.length&&E<v.length;++E){const S=ze(f[E],v[E]);if(S!==0)return S;const T=ra(d[f[E]],y[v[E]]);if(T!==0)return T}return ze(f.length,v.length)}(n.mapValue,e.mapValue);default:throw be()}}function T_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ze(n,e);const t=ns(n),i=ns(e),o=ze(t.seconds,i.seconds);return o!==0?o:ze(t.nanos,i.nanos)}function I_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const a=ra(t[o],i[o]);if(a)return a}return ze(t.length,i.length)}function ia(n){return Lf(n)}function Lf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=ns(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return rs(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Te.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const a of t.values||[])o?o=!1:i+=",",i+=Lf(a);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const u of i)a?a=!1:o+=",",o+=`${u}:${Lf(t.fields[u])}`;return o+"}"}(n.mapValue):be()}function _c(n){switch(is(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sh(n);return e?16+_c(e):16;case 5:return 2*n.stringValue.length;case 6:return rs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,a)=>o+_c(a),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return us(i.fields,(a,u)=>{o+=a.length+_c(u)}),o}(n.mapValue);default:throw be()}}function S_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Of(n){return!!n&&"integerValue"in n}function Tp(n){return!!n&&"arrayValue"in n}function R_(n){return!!n&&"nullValue"in n}function A_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function vc(n){return!!n&&"mapValue"in n}function yC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ul(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return us(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=ul(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ul(n.arrayValue.values[t]);return e}return Object.assign({},n)}function _C(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.value=e}static empty(){return new vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!vc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ul(t)}setAll(e){let t=jt.emptyPath(),i={},o=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,i,o),i={},o=[],t=d.popLast()}u?i[d.lastSegment()]=ul(u):o.push(d.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,i,o)}delete(e){const t=this.field(e.popLast());vc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return zr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];vc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){us(t,(o,a)=>e[o]=a);for(const o of i)delete e[o]}clone(){return new vn(ul(this.value))}}function ew(n){const e=[];return us(n.fields,(t,i)=>{const o=new jt([t]);if(vc(i)){const a=ew(i.mapValue).fields;if(a.length===0)e.push(o);else for(const u of a)e.push(o.child(u))}else e.push(o)}),new xn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t,i,o,a,u,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new Jt(e,0,Ne.min(),Ne.min(),Ne.min(),vn.empty(),0)}static newFoundDocument(e,t,i,o){return new Jt(e,1,t,Ne.min(),i,o,0)}static newNoDocument(e,t){return new Jt(e,2,t,Ne.min(),Ne.min(),vn.empty(),0)}static newUnknownDocument(e,t){return new Jt(e,3,t,Ne.min(),Ne.min(),vn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t){this.position=e,this.inclusive=t}}function P_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const a=e[o],u=n.position[o];if(a.field.isKeyField()?i=Te.comparator(Te.fromName(u.referenceValue),t.key):i=ra(u,t.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function C_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!zr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t="asc"){this.field=e,this.dir=t}}function vC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{}class Tt extends tw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new EC(e,t,i):t==="array-contains"?new SC(e,i):t==="in"?new RC(e,i):t==="not-in"?new AC(e,i):t==="array-contains-any"?new PC(e,i):new Tt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new TC(e,i):new IC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ra(t,this.value)):t!==null&&is(this.value)===is(t)&&this.matchesComparison(ra(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tr extends tw{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Tr(e,t)}matches(e){return nw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nw(n){return n.op==="and"}function rw(n){return wC(n)&&nw(n)}function wC(n){for(const e of n.filters)if(e instanceof Tr)return!1;return!0}function Mf(n){if(n instanceof Tt)return n.field.canonicalString()+n.op.toString()+ia(n.value);if(rw(n))return n.filters.map(e=>Mf(e)).join(",");{const e=n.filters.map(t=>Mf(t)).join(",");return`${n.op}(${e})`}}function iw(n,e){return n instanceof Tt?function(i,o){return o instanceof Tt&&i.op===o.op&&i.field.isEqual(o.field)&&zr(i.value,o.value)}(n,e):n instanceof Tr?function(i,o){return o instanceof Tr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((a,u,d)=>a&&iw(u,o.filters[d]),!0):!1}(n,e):void be()}function sw(n){return n instanceof Tt?function(t){return`${t.field.canonicalString()} ${t.op} ${ia(t.value)}`}(n):n instanceof Tr?function(t){return t.op.toString()+" {"+t.getFilters().map(sw).join(" ,")+"}"}(n):"Filter"}class EC extends Tt{constructor(e,t,i){super(e,t,i),this.key=Te.fromName(i.referenceValue)}matches(e){const t=Te.comparator(e.key,this.key);return this.matchesComparison(t)}}class TC extends Tt{constructor(e,t){super(e,"in",t),this.keys=ow("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class IC extends Tt{constructor(e,t){super(e,"not-in",t),this.keys=ow("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ow(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>Te.fromName(i.referenceValue))}class SC extends Tt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Tp(t)&&wl(t.arrayValue,this.value)}}class RC extends Tt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&wl(this.value.arrayValue,t)}}class AC extends Tt{constructor(e,t){super(e,"not-in",t)}matches(e){if(wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!wl(this.value.arrayValue,t)}}class PC extends Tt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Tp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>wl(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,t=null,i=[],o=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=a,this.startAt=u,this.endAt=d,this.ue=null}}function k_(n,e=null,t=[],i=[],o=null,a=null,u=null){return new CC(n,e,t,i,o,a,u)}function Ip(n){const e=De(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Mf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),ih(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>ia(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>ia(i)).join(",")),e.ue=t}return e.ue}function Sp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!vC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!iw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!C_(n.startAt,e.startAt)&&C_(n.endAt,e.endAt)}function Vf(n){return Te.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,t=null,i=[],o=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function kC(n,e,t,i,o,a,u,d){return new kl(n,e,t,i,o,a,u,d)}function aw(n){return new kl(n)}function b_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lw(n){return n.collectionGroup!==null}function cl(n){const e=De(n);if(e.ce===null){e.ce=[];const t=new Set;for(const a of e.explicitOrderBy)e.ce.push(a),t.add(a.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Ct(jt.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.ce.push(new Fc(a,i))}),t.has(jt.keyField().canonicalString())||e.ce.push(new Fc(jt.keyField(),i))}return e.ce}function Fr(n){const e=De(n);return e.le||(e.le=bC(e,cl(n))),e.le}function bC(n,e){if(n.limitType==="F")return k_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const a=o.dir==="desc"?"asc":"desc";return new Fc(o.field,a)});const t=n.endAt?new Vc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Vc(n.startAt.position,n.startAt.inclusive):null;return k_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Ff(n,e){const t=n.filters.concat([e]);return new kl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Uf(n,e,t){return new kl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function oh(n,e){return Sp(Fr(n),Fr(e))&&n.limitType===e.limitType}function uw(n){return`${Ip(Fr(n))}|lt:${n.limitType}`}function qo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>sw(o)).join(", ")}]`),ih(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>ia(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>ia(o)).join(",")),`Target(${i})`}(Fr(n))}; limitType=${n.limitType})`}function ah(n,e){return e.isFoundDocument()&&function(i,o){const a=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):Te.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(n,e)&&function(i,o){for(const a of cl(i))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const a of i.filters)if(!a.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(u,d,f){const y=P_(u,d,f);return u.inclusive?y<=0:y<0}(i.startAt,cl(i),o)||i.endAt&&!function(u,d,f){const y=P_(u,d,f);return u.inclusive?y>=0:y>0}(i.endAt,cl(i),o))}(n,e)}function NC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function cw(n){return(e,t)=>{let i=!1;for(const o of cl(n)){const a=xC(o,e,t);if(a!==0)return a;i=i||o.field.isKeyField()}return 0}}function xC(n,e,t){const i=n.field.isKeyField()?Te.comparator(e.key,t.key):function(a,u,d){const f=u.data.field(a),y=d.data.field(a);return f!==null&&y!==null?ra(f,y):be()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return be()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,a]of i)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){us(this.inner,(t,i)=>{for(const[o,a]of i)e(o,a)})}isEmpty(){return J0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=new ct(Te.comparator);function mi(){return DC}const hw=new ct(Te.comparator);function rl(...n){let e=hw;for(const t of n)e=e.insert(t.key,t);return e}function dw(n){let e=hw;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function $s(){return hl()}function fw(){return hl()}function hl(){return new to(n=>n.toString(),(n,e)=>n.isEqual(e))}const LC=new ct(Te.comparator),OC=new Ct(Te.comparator);function Ue(...n){let e=OC;for(const t of n)e=e.add(t);return e}const MC=new Ct(ze);function VC(){return MC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mc(e)?"-0":e}}function pw(n){return{integerValue:""+n}}function FC(n,e){return dC(e)?pw(e):Rp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(){this._=void 0}}function UC(n,e,t){return n instanceof Uc?function(o,a){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&Ep(a)&&(a=sh(a)),a&&(u.fields.__previous_value__=a),{mapValue:u}}(t,e):n instanceof El?gw(n,e):n instanceof Tl?yw(n,e):function(o,a){const u=mw(o,a),d=N_(u)+N_(o.Pe);return Of(u)&&Of(o.Pe)?pw(d):Rp(o.serializer,d)}(n,e)}function BC(n,e,t){return n instanceof El?gw(n,e):n instanceof Tl?yw(n,e):t}function mw(n,e){return n instanceof Bc?function(i){return Of(i)||function(a){return!!a&&"doubleValue"in a}(i)}(e)?e:{integerValue:0}:null}class Uc extends lh{}class El extends lh{constructor(e){super(),this.elements=e}}function gw(n,e){const t=_w(e);for(const i of n.elements)t.some(o=>zr(o,i))||t.push(i);return{arrayValue:{values:t}}}class Tl extends lh{constructor(e){super(),this.elements=e}}function yw(n,e){let t=_w(e);for(const i of n.elements)t=t.filter(o=>!zr(o,i));return{arrayValue:{values:t}}}class Bc extends lh{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function N_(n){return _t(n.integerValue||n.doubleValue)}function _w(n){return Tp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function jC(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof El&&o instanceof El||i instanceof Tl&&o instanceof Tl?na(i.elements,o.elements,zr):i instanceof Bc&&o instanceof Bc?zr(i.Pe,o.Pe):i instanceof Uc&&o instanceof Uc}(n.transform,e.transform)}class zC{constructor(e,t){this.version=e,this.transformResults=t}}class Ur{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ur}static exists(e){return new Ur(void 0,e)}static updateTime(e){return new Ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class uh{}function vw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ew(n.key,Ur.none()):new bl(n.key,n.data,Ur.none());{const t=n.data,i=vn.empty();let o=new Ct(jt.comparator);for(let a of e.fields)if(!o.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?i.delete(a):i.set(a,u),o=o.add(a)}return new cs(n.key,i,new xn(o.toArray()),Ur.none())}}function $C(n,e,t){n instanceof bl?function(o,a,u){const d=o.value.clone(),f=D_(o.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof cs?function(o,a,u){if(!wc(o.precondition,a))return void a.convertToUnknownDocument(u.version);const d=D_(o.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(ww(o)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,e,t):function(o,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function dl(n,e,t,i){return n instanceof bl?function(a,u,d,f){if(!wc(a.precondition,u))return d;const y=a.value.clone(),v=L_(a.fieldTransforms,f,u);return y.setAll(v),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof cs?function(a,u,d,f){if(!wc(a.precondition,u))return d;const y=L_(a.fieldTransforms,f,u),v=u.data;return v.setAll(ww(a)),v.setAll(y),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(E=>E.field))}(n,e,t,i):function(a,u,d){return wc(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function qC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),a=mw(i.transform,o||null);a!=null&&(t===null&&(t=vn.empty()),t.set(i.field,a))}return t||null}function x_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&na(i,o,(a,u)=>jC(a,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class bl extends uh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class cs extends uh{constructor(e,t,i,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function ww(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function D_(n,e,t){const i=new Map;Qe(n.length===t.length);for(let o=0;o<t.length;o++){const a=n[o],u=a.transform,d=e.data.field(a.field);i.set(a.field,BC(u,d,t[o]))}return i}function L_(n,e,t){const i=new Map;for(const o of n){const a=o.transform,u=t.data.field(o.field);i.set(o.field,UC(a,u,e))}return i}class Ew extends uh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HC extends uh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&$C(a,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=dl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=dl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=fw();return this.mutations.forEach(o=>{const a=e.get(o.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(o.key)?null:d;const f=vw(u,d);f!==null&&i.set(o.key,f),u.isValidDocument()||u.convertToNoDocument(Ne.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ue())}isEqual(e){return this.batchId===e.batchId&&na(this.mutations,e.mutations,(t,i)=>x_(t,i))&&na(this.baseMutations,e.baseMutations,(t,i)=>x_(t,i))}}class Ap{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Qe(e.mutations.length===i.length);let o=function(){return LC}();const a=e.mutations;for(let u=0;u<a.length;u++)o=o.insert(a[u].key,i[u].version);return new Ap(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et,qe;function QC(n){switch(n){default:return be();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0}}function Tw(n){if(n===void 0)return pi("GRPC error has no .code"),K.UNKNOWN;switch(n){case Et.OK:return K.OK;case Et.CANCELLED:return K.CANCELLED;case Et.UNKNOWN:return K.UNKNOWN;case Et.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case Et.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case Et.INTERNAL:return K.INTERNAL;case Et.UNAVAILABLE:return K.UNAVAILABLE;case Et.UNAUTHENTICATED:return K.UNAUTHENTICATED;case Et.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case Et.NOT_FOUND:return K.NOT_FOUND;case Et.ALREADY_EXISTS:return K.ALREADY_EXISTS;case Et.PERMISSION_DENIED:return K.PERMISSION_DENIED;case Et.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case Et.ABORTED:return K.ABORTED;case Et.OUT_OF_RANGE:return K.OUT_OF_RANGE;case Et.UNIMPLEMENTED:return K.UNIMPLEMENTED;case Et.DATA_LOSS:return K.DATA_LOSS;default:return be()}}(qe=Et||(Et={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=new qs([4294967295,4294967295],0);function O_(n){const e=YC().encode(n),t=new q0;return t.update(e),new Uint8Array(t.digest())}function M_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new qs([t,i],0),new qs([o,a],0)]}class Pp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new il(`Invalid padding: ${t}`);if(i<0)throw new il(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new il(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new il(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=qs.fromNumber(this.Te)}Ee(e,t,i){let o=e.add(t.multiply(qs.fromNumber(i)));return o.compare(XC)===1&&(o=new qs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=O_(e),[i,o]=M_(t);for(let a=0;a<this.hashCount;a++){const u=this.Ee(i,o,a);if(!this.de(u))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Pp(a,o,t);return i.forEach(d=>u.insert(d)),u}insert(e){if(this.Te===0)return;const t=O_(e),[i,o]=M_(t);for(let a=0;a<this.hashCount;a++){const u=this.Ee(i,o,a);this.Ae(u)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class il extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,t,i,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Nl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new ch(Ne.min(),o,new ct(ze),mi(),Ue())}}class Nl{constructor(e,t,i,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Nl(i,t,Ue(),Ue(),Ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class Iw{constructor(e,t){this.targetId=e,this.me=t}}class Sw{constructor(e,t,i=zt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class V_{constructor(){this.fe=0,this.ge=F_(),this.pe=zt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ue(),t=Ue(),i=Ue();return this.ge.forEach((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:be()}}),new Nl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=F_()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Qe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class JC{constructor(e){this.Le=e,this.Be=new Map,this.ke=mi(),this.qe=ic(),this.Qe=ic(),this.Ke=new ct(ze)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:be()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const a=o.target;if(Vf(a))if(i===0){const u=new Te(a.path);this.We(t,u,Jt.newNoDocument(u,Ne.min()))}else Qe(i===1);else{const u=this.Ze(t);if(u!==i){const d=this.Xe(e),f=d?this.et(d,e,u):1;if(f!==0){this.He(t);const y=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=t;let u,d;try{u=rs(i).toUint8Array()}catch(f){if(f instanceof Z0)return ta("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Pp(u,o,a)}catch(f){return ta(f instanceof il?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(a=>{const u=this.Le.nt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.We(t,a,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((a,u)=>{const d=this.Ye(u);if(d){if(a.current&&Vf(d.target)){const f=new Te(d.target.path);this.st(f).has(u)||this.ot(u,f)||this.We(u,f,Jt.newNoDocument(f,e))}a.be&&(t.set(u,a.ve()),a.Ce())}});let i=Ue();this.Qe.forEach((a,u)=>{let d=!0;u.forEachWhile(f=>{const y=this.Ye(f);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(a))}),this.ke.forEach((a,u)=>u.setReadTime(e));const o=new ch(e,t,this.Ke,this.ke,i);return this.ke=mi(),this.qe=ic(),this.Qe=ic(),this.Ke=new ct(ze),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new V_,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Ct(ze),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ct(ze),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new V_),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ic(){return new ct(Te.comparator)}function F_(){return new ct(Te.comparator)}const ZC={asc:"ASCENDING",desc:"DESCENDING"},ek={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tk={and:"AND",or:"OR"};class nk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bf(n,e){return n.useProto3Json||ih(e)?e:{value:e}}function jc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function rk(n,e){return jc(n,e.toTimestamp())}function Br(n){return Qe(!!n),Ne.fromTimestamp(function(t){const i=ns(t);return new Pt(i.seconds,i.nanos)}(n))}function Cp(n,e){return jf(n,e).canonicalString()}function jf(n,e){const t=function(o){return new rt(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Aw(n){const e=rt.fromString(n);return Qe(Nw(e)),e}function zf(n,e){return Cp(n.databaseId,e.path)}function yf(n,e){const t=Aw(e);if(t.get(1)!==n.databaseId.projectId)throw new ge(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ge(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Te(Cw(t))}function Pw(n,e){return Cp(n.databaseId,e)}function ik(n){const e=Aw(n);return e.length===4?rt.emptyPath():Cw(e)}function $f(n){return new rt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Cw(n){return Qe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function U_(n,e,t){return{name:zf(n,e),fields:t.value.mapValue.fields}}function sk(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:be()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=function(y,v){return y.useProto3Json?(Qe(v===void 0||typeof v=="string"),zt.fromBase64String(v||"")):(Qe(v===void 0||v instanceof Buffer||v instanceof Uint8Array),zt.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(y){const v=y.code===void 0?K.UNKNOWN:Tw(y.code);return new ge(v,y.message||"")}(u);t=new Sw(i,o,a,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=yf(n,i.document.name),a=Br(i.document.updateTime),u=i.document.createTime?Br(i.document.createTime):Ne.min(),d=new vn({mapValue:{fields:i.document.fields}}),f=Jt.newFoundDocument(o,a,u,d),y=i.targetIds||[],v=i.removedTargetIds||[];t=new Ec(y,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=yf(n,i.document),a=i.readTime?Br(i.readTime):Ne.min(),u=Jt.newNoDocument(o,a),d=i.removedTargetIds||[];t=new Ec([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=yf(n,i.document),a=i.removedTargetIds||[];t=new Ec([],a,o,null)}else{if(!("filter"in e))return be();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:a}=i,u=new GC(o,a),d=i.targetId;t=new Iw(d,u)}}return t}function ok(n,e){let t;if(e instanceof bl)t={update:U_(n,e.key,e.value)};else if(e instanceof Ew)t={delete:zf(n,e.key)};else if(e instanceof cs)t={update:U_(n,e.key,e.data),updateMask:mk(e.fieldMask)};else{if(!(e instanceof HC))return be();t={verify:zf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(a,u){const d=u.transform;if(d instanceof Uc)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof El)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Tl)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Bc)return{fieldPath:u.field.canonicalString(),increment:d.Pe};throw be()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,a){return a.updateTime!==void 0?{updateTime:rk(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:be()}(n,e.precondition)),t}function ak(n,e){return n&&n.length>0?(Qe(e!==void 0),n.map(t=>function(o,a){let u=o.updateTime?Br(o.updateTime):Br(a);return u.isEqual(Ne.min())&&(u=Br(a)),new zC(u,o.transformResults||[])}(t,e))):[]}function lk(n,e){return{documents:[Pw(n,e.path)]}}function uk(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Pw(n,o);const a=function(y){if(y.length!==0)return bw(Tr.create(y,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const u=function(y){if(y.length!==0)return y.map(v=>function(S){return{field:Ho(S.field),direction:dk(S.dir)}}(v))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Bf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function ck(n){let e=ik(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Qe(i===1);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=function(E){const S=kw(E);return S instanceof Tr&&rw(S)?S.getFilters():[S]}(t.where));let u=[];t.orderBy&&(u=function(E){return E.map(S=>function(O){return new Fc(Wo(O.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(S))}(t.orderBy));let d=null;t.limit&&(d=function(E){let S;return S=typeof E=="object"?E.value:E,ih(S)?null:S}(t.limit));let f=null;t.startAt&&(f=function(E){const S=!!E.before,T=E.values||[];return new Vc(T,S)}(t.startAt));let y=null;return t.endAt&&(y=function(E){const S=!E.before,T=E.values||[];return new Vc(T,S)}(t.endAt)),kC(e,o,u,a,d,"F",f,y)}function hk(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Wo(t.unaryFilter.field);return Tt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Wo(t.unaryFilter.field);return Tt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Wo(t.unaryFilter.field);return Tt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Wo(t.unaryFilter.field);return Tt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return be()}}(n):n.fieldFilter!==void 0?function(t){return Tt.create(Wo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return be()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Tr.create(t.compositeFilter.filters.map(i=>kw(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return be()}}(t.compositeFilter.op))}(n):be()}function dk(n){return ZC[n]}function fk(n){return ek[n]}function pk(n){return tk[n]}function Ho(n){return{fieldPath:n.canonicalString()}}function Wo(n){return jt.fromServerFormat(n.fieldPath)}function bw(n){return n instanceof Tt?function(t){if(t.op==="=="){if(A_(t.value))return{unaryFilter:{field:Ho(t.field),op:"IS_NAN"}};if(R_(t.value))return{unaryFilter:{field:Ho(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(A_(t.value))return{unaryFilter:{field:Ho(t.field),op:"IS_NOT_NAN"}};if(R_(t.value))return{unaryFilter:{field:Ho(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ho(t.field),op:fk(t.op),value:t.value}}}(n):n instanceof Tr?function(t){const i=t.getFilters().map(o=>bw(o));return i.length===1?i[0]:{compositeFilter:{op:pk(t.op),filters:i}}}(n):be()}function mk(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Nw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t,i,o,a=Ne.min(),u=Ne.min(),d=zt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e){this.ht=e}}function yk(n){const e=ck({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Uf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(){this.ln=new vk}addToCollectionParentIndex(e,t){return this.ln.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(ts.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(ts.min())}updateCollectionGroup(e,t,i){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class vk{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Ct(rt.comparator),a=!o.has(i);return this.index[t]=o.add(i),a}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Ct(rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class yn{static withCacheSize(e){return new yn(e,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(41943040,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new sa(0)}static Qn(){return new sa(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_([n,e],[t,i]){const o=ze(n,t);return o===0?ze(e,i):o}class wk{constructor(e){this.Gn=e,this.buffer=new Ct(j_),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();j_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ek{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){fe("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){fa(t)?fe("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await da(t)}await this.Yn(3e5)})}}class Tk{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return H.resolve(rh.oe);const i=new wk(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(B_)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),B_):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,a,u,d,f,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,u=Date.now(),this.nthSequenceNumber(e,o))).next(E=>(i=E,d=Date.now(),this.removeTargets(e,i,t))).next(E=>(a=E,f=Date.now(),this.removeOrphanedDocuments(e,i))).next(E=>(y=Date.now(),$o()<=Fe.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${o} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${E} documents in `+(y-f)+`ms
Total Duration: ${y-v}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:E})))}}function Ik(n,e){return new Tk(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(){this.changes=new to(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?H.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&dl(i.mutation,o,xn.empty(),Pt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Ue()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Ue()){const o=$s();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(a=>{let u=rl();return a.forEach((d,f)=>{u=u.insert(d,f.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const i=$s();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Ue()))}populateOverlays(e,t,i){const o=[];return i.forEach(a=>{t.has(a)||o.push(a)}),this.documentOverlayCache.getOverlays(e,o).next(a=>{a.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,i,o){let a=mi();const u=hl(),d=function(){return hl()}();return t.forEach((f,y)=>{const v=i.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof cs)?a=a.insert(y.key,y):v!==void 0?(u.set(y.key,v.mutation.getFieldMask()),dl(v.mutation,y,v.mutation.getFieldMask(),Pt.now())):u.set(y.key,xn.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((y,v)=>u.set(y,v)),t.forEach((y,v)=>{var E;return d.set(y,new Rk(v,(E=u.get(y))!==null&&E!==void 0?E:null))}),d))}recalculateAndSaveOverlays(e,t){const i=hl();let o=new ct((u,d)=>u-d),a=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(f=>{const y=t.get(f);if(y===null)return;let v=i.get(f)||xn.empty();v=d.applyToLocalView(y,v),i.set(f,v);const E=(o.get(d.batchId)||Ue()).add(f);o=o.insert(d.batchId,E)})}).next(()=>{const u=[],d=o.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),y=f.key,v=f.value,E=fw();v.forEach(S=>{if(!a.has(S)){const T=vw(t.get(S),i.get(S));T!==null&&E.set(S,T),a=a.add(S)}}),u.push(this.documentOverlayCache.saveOverlays(e,y,E))}return H.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(u){return Te.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):lw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(a=>{const u=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-a.size):H.resolve($s());let d=-1,f=a;return u.next(y=>H.forEach(y,(v,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(v)?H.resolve():this.remoteDocumentCache.getEntry(e,v).next(S=>{f=f.insert(v,S)}))).next(()=>this.populateOverlays(e,y,a)).next(()=>this.computeViews(e,f,y,Ue())).next(v=>({batchId:d,changes:dw(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Te(t)).next(i=>{let o=rl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const a=t.collectionGroup;let u=rl();return this.indexManager.getCollectionParents(e,a).next(d=>H.forEach(d,f=>{const y=function(E,S){return new kl(S,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(v=>{v.forEach((E,S)=>{u=u.insert(E,S)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,i,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,a,o))).next(u=>{a.forEach((f,y)=>{const v=y.getKey();u.get(v)===null&&(u=u.insert(v,Jt.newInvalidDocument(v)))});let d=rl();return u.forEach((f,y)=>{const v=a.get(f);v!==void 0&&dl(v.mutation,y,xn.empty(),Pt.now()),ah(t,y)&&(d=d.insert(f,y))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return H.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Br(o.createTime)}}(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:yk(o.bundledQuery),readTime:Br(o.readTime)}}(t)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.overlays=new ct(Te.comparator),this.Er=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const i=$s();return H.forEach(t,o=>this.getOverlay(e,o).next(a=>{a!==null&&i.set(o,a)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,a)=>{this.Tt(e,t,a)}),H.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Er.get(i);return o!==void 0&&(o.forEach(a=>this.overlays=this.overlays.remove(a)),this.Er.delete(i)),H.resolve()}getOverlaysForCollection(e,t,i){const o=$s(),a=t.length+1,u=new Te(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,y=f.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===a&&f.largestBatchId>i&&o.set(f.getKey(),f)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let a=new ct((y,v)=>y-v);const u=this.overlays.getIterator();for(;u.hasNext();){const y=u.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let v=a.get(y.largestBatchId);v===null&&(v=$s(),a=a.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const d=$s(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((y,v)=>d.set(y,v)),!(d.size()>=o)););return H.resolve(d)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const u=this.Er.get(o.largestBatchId).delete(i.key);this.Er.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new KC(t,i));let a=this.Er.get(t);a===void 0&&(a=Ue(),this.Er.set(t,a)),this.Er.set(t,a.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.sessionToken=zt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(){this.dr=new Ct(Ot.Ar),this.Rr=new Ct(Ot.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const i=new Ot(e,t);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new Ot(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new Te(new rt([])),i=new Ot(t,e),o=new Ot(t,e+1),a=[];return this.Rr.forEachInRange([i,o],u=>{this.gr(u),a.push(u.key)}),a}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new Te(new rt([])),i=new Ot(t,e),o=new Ot(t,e+1);let a=Ue();return this.Rr.forEachInRange([i,o],u=>{a=a.add(u.key)}),a}containsKey(e){const t=new Ot(e,0),i=this.dr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ot{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return Te.comparator(e.key,t.key)||ze(e.br,t.br)}static Vr(e,t){return ze(e.br,t.br)||Te.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Ct(Ot.Ar)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const a=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new WC(a,t,i,o);this.mutationQueue.push(u);for(const d of o)this.vr=this.vr.add(new Ot(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return H.resolve(u)}lookupMutationBatch(e,t){return H.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),a=o<0?0:o;return H.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ot(t,0),o=new Ot(t,Number.POSITIVE_INFINITY),a=[];return this.vr.forEachInRange([i,o],u=>{const d=this.Cr(u.br);a.push(d)}),H.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ct(ze);return t.forEach(o=>{const a=new Ot(o,0),u=new Ot(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([a,u],d=>{i=i.add(d.br)})}),H.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let a=i;Te.isDocumentKey(a)||(a=a.child(""));const u=new Ot(new Te(a),0);let d=new Ct(ze);return this.vr.forEachWhile(f=>{const y=f.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(f.br)),!0)},u),H.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Qe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return H.forEach(t.mutations,o=>{const a=new Ot(o.key,t.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,t){const i=new Ot(t,0),o=this.vr.firstAfterOrEqual(i);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.Nr=e,this.docs=function(){return new ct(Te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),a=o?o.size:0,u=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return H.resolve(i?i.document.mutableCopy():Jt.newInvalidDocument(t))}getEntries(e,t){let i=mi();return t.forEach(o=>{const a=this.docs.get(o);i=i.insert(o,a?a.document.mutableCopy():Jt.newInvalidDocument(o))}),H.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let a=mi();const u=t.path,d=new Te(u.child("")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:y,value:{document:v}}=f.getNext();if(!u.isPrefixOf(y.path))break;y.path.length>u.length+1||lC(aC(v),i)<=0||(o.has(v.key)||ah(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return H.resolve(a)}getAllFromCollectionGroup(e,t,i,o){be()}Lr(e,t){return H.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new xk(this)}getSize(e){return H.resolve(this.size)}}class xk extends Sk{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),H.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.persistence=e,this.Br=new to(t=>Ip(t),Sp),this.lastRemoteSnapshotVersion=Ne.min(),this.highestTargetId=0,this.kr=0,this.qr=new kp,this.targetCount=0,this.Qr=sa.qn()}forEachTarget(e,t){return this.Br.forEach((i,o)=>t(o)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),H.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new sa(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Un(t),H.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,i){let o=0;const a=[];return this.Br.forEach((u,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Br.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),H.waitFor(a).next(()=>o)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const i=this.Br.get(t)||null;return H.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),H.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach(u=>{a.push(o.markPotentiallyOrphaned(e,u))}),H.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return H.resolve(i)}containsKey(e,t){return H.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t){this.Kr={},this.overlays={},this.$r=new rh(0),this.Ur=!1,this.Ur=!0,this.Wr=new kk,this.referenceDelegate=e(this),this.Gr=new Dk(this),this.indexManager=new _k,this.remoteDocumentCache=function(o){return new Nk(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new gk(t),this.jr=new Pk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ck,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new bk(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){fe("MemoryPersistence","Starting transaction:",e);const o=new Lk(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(a=>this.referenceDelegate.Jr(o).next(()=>a)).toPromise().then(a=>(o.raiseOnCommittedEvent(),a))}Yr(e,t){return H.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class Lk extends cC{constructor(e){super(),this.currentSequenceNumber=e}}class bp{constructor(e){this.persistence=e,this.Zr=new kp,this.Xr=null}static ei(e){return new bp(e)}get ti(){if(this.Xr)return this.Xr;throw be()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),H.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),H.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(a=>this.ti.add(a.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.ti,i=>{const o=Te.fromPath(i);return this.ni(e,o).next(a=>{a||t.removeEntry(o,Ne.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return H.or([()=>H.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class zc{constructor(e,t){this.persistence=e,this.ri=new to(i=>fC(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=Ik(this,t)}static ei(e,t){return new zc(e,t)}Hr(){}Jr(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return H.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(a=>a?H.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.Lr(e,u=>this.ir(e,u,t).next(d=>{d||(i++,a.removeEntry(u,Ne.min()))})).next(()=>a.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),H.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),H.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=_c(e.data.value)),t}ir(e,t,i){return H.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return H.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=Ue(),o=Ue();for(const a of t.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new Np(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return QI()?8:hC(Zt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const a={result:null};return this.Xi(e,t).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.es(e,t,o,i).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new Ok;return this.ts(e,t,u).next(d=>{if(a.result=d,this.Hi)return this.ns(e,t,u,d.size)})}).next(()=>a.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?($o()<=Fe.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",qo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),H.resolve()):($o()<=Fe.DEBUG&&fe("QueryEngine","Query:",qo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?($o()<=Fe.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",qo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fr(t))):H.resolve())}Xi(e,t){if(b_(t))return H.resolve(null);let i=Fr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Uf(t,null,"F"),i=Fr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(a=>{const u=Ue(...a);return this.Zi.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,i).next(f=>{const y=this.rs(t,d);return this.ss(t,y,u,f.readTime)?this.Xi(e,Uf(t,null,"F")):this.os(e,y,t,f)}))})))}es(e,t,i,o){return b_(t)||o.isEqual(Ne.min())?H.resolve(null):this.Zi.getDocuments(e,i).next(a=>{const u=this.rs(t,a);return this.ss(t,u,i,o)?H.resolve(null):($o()<=Fe.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),qo(t)),this.os(e,u,t,oC(o,-1)).next(d=>d))})}rs(e,t){let i=new Ct(cw(e));return t.forEach((o,a)=>{ah(e,a)&&(i=i.add(a))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ts(e,t,i){return $o()<=Fe.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",qo(t)),this.Zi.getDocumentsMatchingQuery(e,t,ts.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(a=>(t.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new ct(ze),this.cs=new to(a=>Ip(a),Sp),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ak(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function Fk(n,e,t,i){return new Vk(n,e,t,i)}async function Dw(n,e){const t=De(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(a=>(o=a,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(a=>{const u=[],d=[];let f=Ue();for(const y of o){u.push(y.batchId);for(const v of y.mutations)f=f.add(v.key)}for(const y of a){d.push(y.batchId);for(const v of y.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(i,f).next(y=>({Ts:y,removedBatchIds:u,addedBatchIds:d}))})})}function Uk(n,e){const t=De(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),a=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,f,y,v){const E=y.batch,S=E.keys();let T=H.resolve();return S.forEach(O=>{T=T.next(()=>v.getEntry(f,O)).next(F=>{const M=y.docVersions.get(O);Qe(M!==null),F.version.compareTo(M)<0&&(E.applyToRemoteDocument(F,y),F.isValidDocument()&&(F.setReadTime(y.commitVersion),v.addEntry(F)))})}),T.next(()=>d.mutationQueue.removeMutationBatch(f,E))}(t,i,e,a).next(()=>a.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let f=Ue();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(f=f.add(d.batch.mutations[y].key));return f}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function Lw(n){const e=De(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function Bk(n,e){const t=De(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const d=[];e.targetChanges.forEach((v,E)=>{const S=o.get(E);if(!S)return;d.push(t.Gr.removeMatchingKeys(a,v.removedDocuments,E).next(()=>t.Gr.addMatchingKeys(a,v.addedDocuments,E)));let T=S.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?T=T.withResumeToken(zt.EMPTY_BYTE_STRING,Ne.min()).withLastLimboFreeSnapshotVersion(Ne.min()):v.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(v.resumeToken,i)),o=o.insert(E,T),function(F,M,ie){return F.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=3e8?!0:ie.addedDocuments.size+ie.modifiedDocuments.size+ie.removedDocuments.size>0}(S,T,v)&&d.push(t.Gr.updateTargetData(a,T))});let f=mi(),y=Ue();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))}),d.push(jk(a,u,e.documentUpdates).next(v=>{f=v.Is,y=v.Es})),!i.isEqual(Ne.min())){const v=t.Gr.getLastRemoteSnapshotVersion(a).next(E=>t.Gr.setTargetsMetadata(a,a.currentSequenceNumber,i));d.push(v)}return H.waitFor(d).next(()=>u.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,y)).next(()=>f)}).then(a=>(t.us=o,a))}function jk(n,e,t){let i=Ue(),o=Ue();return t.forEach(a=>i=i.add(a)),e.getEntries(n,i).next(a=>{let u=mi();return t.forEach((d,f)=>{const y=a.get(d);f.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),f.isNoDocument()&&f.version.isEqual(Ne.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!y.isValidDocument()||f.version.compareTo(y.version)>0||f.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):fe("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",f.version)}),{Is:u,Es:o}})}function zk(n,e){const t=De(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function $k(n,e){const t=De(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(a=>a?(o=a,H.resolve(o)):t.Gr.allocateTargetId(i).next(u=>(o=new Yi(e,u,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function qf(n,e,t){const i=De(n),o=i.us.get(e),a=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",a,u=>i.persistence.referenceDelegate.removeTarget(u,o))}catch(u){if(!fa(u))throw u;fe("LocalStore",`Failed to update sequence numbers for target ${e}: ${u}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function z_(n,e,t){const i=De(n);let o=Ne.min(),a=Ue();return i.persistence.runTransaction("Execute query","readwrite",u=>function(f,y,v){const E=De(f),S=E.cs.get(v);return S!==void 0?H.resolve(E.us.get(S)):E.Gr.getTargetData(y,v)}(i,u,Fr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(u,d.targetId).next(f=>{a=f})}).next(()=>i._s.getDocumentsMatchingQuery(u,e,t?o:Ne.min(),t?a:Ue())).next(d=>(qk(i,NC(e),d),{documents:d,ds:a})))}function qk(n,e,t){let i=n.ls.get(e)||Ne.min();t.forEach((o,a)=>{a.readTime.compareTo(i)>0&&(i=a.readTime)}),n.ls.set(e,i)}class $_{constructor(){this.activeTargetIds=VC()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Hk{constructor(){this._o=new $_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new $_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){fe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){fe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc=null;function _f(){return sc===null?sc=function(){return 268435456+Math.round(2147483648*Math.random())}():sc++,"0x"+sc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="WebChannelConnection";class Qk extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${a}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${a}`}Oo(t,i,o,a,u){const d=_f(),f=this.No(t,i.toUriEncodedString());fe("RestConnection",`Sending RPC '${t}' ${d}:`,f,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(y,a,u),this.Bo(t,f,y,o).then(v=>(fe("RestConnection",`Received RPC '${t}' ${d}: `,v),v),v=>{throw ta("RestConnection",`RPC '${t}' ${d} failed with error: `,v,"url: ",f,"request:",o),v})}ko(t,i,o,a,u,d){return this.Oo(t,i,o,a,u)}Lo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ha}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((a,u)=>t[u]=a),o&&o.headers.forEach((a,u)=>t[u]=a)}No(t,i){const o=Kk[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,i,o){const a=_f();return new Promise((u,d)=>{const f=new H0;f.setWithCredentials(!0),f.listenOnce(W0.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case yc.NO_ERROR:const v=f.getResponseJson();fe(Yt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),u(v);break;case yc.TIMEOUT:fe(Yt,`RPC '${e}' ${a} timed out`),d(new ge(K.DEADLINE_EXCEEDED,"Request time out"));break;case yc.HTTP_ERROR:const E=f.getStatus();if(fe(Yt,`RPC '${e}' ${a} failed with status:`,E,"response text:",f.getResponseText()),E>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const T=S==null?void 0:S.error;if(T&&T.status&&T.message){const O=function(M){const ie=M.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(ie)>=0?ie:K.UNKNOWN}(T.status);d(new ge(O,T.message))}else d(new ge(K.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new ge(K.UNAVAILABLE,"Connection failed."));break;default:be()}}finally{fe(Yt,`RPC '${e}' ${a} completed.`)}});const y=JSON.stringify(o);fe(Yt,`RPC '${e}' ${a} sending request:`,o),f.send(t,"POST",y,i,15)})}qo(e,t,i){const o=_f(),a=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=Q0(),d=G0(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(f.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Lo(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const v=a.join("");fe(Yt,`Creating RPC '${e}' stream ${o}: ${v}`,f);const E=u.createWebChannel(v,f);let S=!1,T=!1;const O=new Gk({Eo:M=>{T?fe(Yt,`Not sending because RPC '${e}' stream ${o} is closed:`,M):(S||(fe(Yt,`Opening RPC '${e}' stream ${o} transport.`),E.open(),S=!0),fe(Yt,`RPC '${e}' stream ${o} sending:`,M),E.send(M))},Ao:()=>E.close()}),F=(M,ie,te)=>{M.listen(ie,re=>{try{te(re)}catch(W){setTimeout(()=>{throw W},0)}})};return F(E,nl.EventType.OPEN,()=>{T||(fe(Yt,`RPC '${e}' stream ${o} transport opened.`),O.So())}),F(E,nl.EventType.CLOSE,()=>{T||(T=!0,fe(Yt,`RPC '${e}' stream ${o} transport closed`),O.Do())}),F(E,nl.EventType.ERROR,M=>{T||(T=!0,ta(Yt,`RPC '${e}' stream ${o} transport errored:`,M),O.Do(new ge(K.UNAVAILABLE,"The operation could not be completed")))}),F(E,nl.EventType.MESSAGE,M=>{var ie;if(!T){const te=M.data[0];Qe(!!te);const re=te,W=(re==null?void 0:re.error)||((ie=re[0])===null||ie===void 0?void 0:ie.error);if(W){fe(Yt,`RPC '${e}' stream ${o} received error:`,W);const le=W.status;let ce=function(C){const k=Et[C];if(k!==void 0)return Tw(k)}(le),b=W.message;ce===void 0&&(ce=K.INTERNAL,b="Unknown error status: "+le+" with message "+W.message),T=!0,O.Do(new ge(ce,b)),E.close()}else fe(Yt,`RPC '${e}' stream ${o} received:`,te),O.vo(te)}}),F(d,K0.STAT_EVENT,M=>{M.stat===Df.PROXY?fe(Yt,`RPC '${e}' stream ${o} detected buffering proxy`):M.stat===Df.NOPROXY&&fe(Yt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{O.bo()},0),O}}function vf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(n){return new nk(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,t,i=1e3,o=1.5,a=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=a,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&fe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,t,i,o,a,u,d,f){this.li=e,this.Yo=i,this.Zo=o,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Ow(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(pi(t.toString()),pi("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new ge(K.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.E_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return fe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(fe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yk extends Mw{constructor(e,t,i,o,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,u),this.serializer=a}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=sk(this.serializer,e),i=function(a){if(!("targetChange"in a))return Ne.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Ne.min():u.readTime?Br(u.readTime):Ne.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=$f(this.serializer),t.addTarget=function(a,u){let d;const f=u.target;if(d=Vf(f)?{documents:lk(a,f)}:{query:uk(a,f).ct},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=Rw(a,u.resumeToken);const y=Bf(a,u.expectedCount);y!==null&&(d.expectedCount=y)}else if(u.snapshotVersion.compareTo(Ne.min())>0){d.readTime=jc(a,u.snapshotVersion.toTimestamp());const y=Bf(a,u.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=hk(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=$f(this.serializer),t.removeTarget=e,this.c_(t)}}class Xk extends Mw{constructor(e,t,i,o,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,u),this.serializer=a}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Qe(!!e.streamToken),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Qe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=ak(e.writeResults,e.commitTime),i=Br(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=$f(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>ok(this.serializer,i))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ge(K.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Oo(e,jf(t,i),o,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ge(K.UNKNOWN,a.toString())})}ko(e,t,i,o,a){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.ko(e,jf(t,i),o,u,d,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ge(K.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Zk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(pi(t),this.C_=!1):fe("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t,i,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=a,this.Q_.uo(u=>{i.enqueueAndForget(async()=>{no(this)&&(fe("RemoteStore","Restarting streams for network reachability change."),await async function(f){const y=De(f);y.k_.add(4),await xl(y),y.K_.set("Unknown"),y.k_.delete(4),await dh(y)}(this))})}),this.K_=new Zk(i,o)}}async function dh(n){if(no(n))for(const e of n.q_)await e(!0)}async function xl(n){for(const e of n.q_)await e(!1)}function Vw(n,e){const t=De(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Op(t)?Lp(t):pa(t).s_()&&Dp(t,e))}function xp(n,e){const t=De(n),i=pa(t);t.B_.delete(e),i.s_()&&Fw(t,e),t.B_.size===0&&(i.s_()?i.a_():no(t)&&t.K_.set("Unknown"))}function Dp(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ne.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}pa(n).V_(e)}function Fw(n,e){n.U_.xe(e),pa(n).m_(e)}function Lp(n){n.U_=new JC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),pa(n).start(),n.K_.F_()}function Op(n){return no(n)&&!pa(n).i_()&&n.B_.size>0}function no(n){return De(n).k_.size===0}function Uw(n){n.U_=void 0}async function tb(n){n.K_.set("Online")}async function nb(n){n.B_.forEach((e,t)=>{Dp(n,e)})}async function rb(n,e){Uw(n),Op(n)?(n.K_.O_(e),Lp(n)):n.K_.set("Unknown")}async function ib(n,e,t){if(n.K_.set("Online"),e instanceof Sw&&e.state===2&&e.cause)try{await async function(o,a){const u=a.cause;for(const d of a.targetIds)o.B_.has(d)&&(await o.remoteSyncer.rejectListen(d,u),o.B_.delete(d),o.U_.removeTarget(d))}(n,e)}catch(i){fe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await $c(n,i)}else if(e instanceof Ec?n.U_.$e(e):e instanceof Iw?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ne.min()))try{const i=await Lw(n.localStore);t.compareTo(i)>=0&&await function(a,u){const d=a.U_.it(u);return d.targetChanges.forEach((f,y)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.B_.get(y);v&&a.B_.set(y,v.withResumeToken(f.resumeToken,u))}}),d.targetMismatches.forEach((f,y)=>{const v=a.B_.get(f);if(!v)return;a.B_.set(f,v.withResumeToken(zt.EMPTY_BYTE_STRING,v.snapshotVersion)),Fw(a,f);const E=new Yi(v.target,f,y,v.sequenceNumber);Dp(a,E)}),a.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){fe("RemoteStore","Failed to raise snapshot:",i),await $c(n,i)}}async function $c(n,e,t){if(!fa(e))throw e;n.k_.add(1),await xl(n),n.K_.set("Offline"),t||(t=()=>Lw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{fe("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await dh(n)})}function Bw(n,e){return e().catch(t=>$c(n,t,e))}async function fh(n){const e=De(n),t=ss(e);let i=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;sb(e);)try{const o=await zk(e.localStore,i);if(o===null){e.L_.length===0&&t.a_();break}i=o.batchId,ob(e,o)}catch(o){await $c(e,o)}jw(e)&&zw(e)}function sb(n){return no(n)&&n.L_.length<10}function ob(n,e){n.L_.push(e);const t=ss(n);t.s_()&&t.f_&&t.g_(e.mutations)}function jw(n){return no(n)&&!ss(n).i_()&&n.L_.length>0}function zw(n){ss(n).start()}async function ab(n){ss(n).w_()}async function lb(n){const e=ss(n);for(const t of n.L_)e.g_(t.mutations)}async function ub(n,e,t){const i=n.L_.shift(),o=Ap.from(i,e,t);await Bw(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await fh(n)}async function cb(n,e){e&&ss(n).f_&&await async function(i,o){if(function(u){return QC(u)&&u!==K.ABORTED}(o.code)){const a=i.L_.shift();ss(i).__(),await Bw(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,o)),await fh(i)}}(n,e),jw(n)&&zw(n)}async function H_(n,e){const t=De(n);t.asyncQueue.verifyOperationInProgress(),fe("RemoteStore","RemoteStore received new credentials");const i=no(t);t.k_.add(3),await xl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await dh(t)}async function hb(n,e){const t=De(n);e?(t.k_.delete(2),await dh(t)):e||(t.k_.add(2),await xl(t),t.K_.set("Unknown"))}function pa(n){return n.W_||(n.W_=function(t,i,o){const a=De(t);return a.b_(),new Yk(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{Ro:tb.bind(null,n),mo:nb.bind(null,n),po:rb.bind(null,n),R_:ib.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Op(n)?Lp(n):n.K_.set("Unknown")):(await n.W_.stop(),Uw(n))})),n.W_}function ss(n){return n.G_||(n.G_=function(t,i,o){const a=De(t);return a.b_(),new Xk(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:ab.bind(null,n),po:cb.bind(null,n),p_:lb.bind(null,n),y_:ub.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await fh(n)):(await n.G_.stop(),n.L_.length>0&&(fe("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,t,i,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=a,this.deferred=new Zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,a){const u=Date.now()+i,d=new Mp(e,t,u,o,a);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vp(n,e){if(pi("AsyncQueue",`${e}: ${n}`),fa(n))return new ge(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{static emptySet(e){return new Xo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Te.comparator(t.key,i.key):(t,i)=>Te.comparator(t.key,i.key),this.keyedMap=rl(),this.sortedSet=new ct(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Xo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(){this.z_=new ct(Te.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):be():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class oa{constructor(e,t,i,o,a,u,d,f,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,a){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new oa(e,t,Xo.emptySet(t),u,i,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class fb{constructor(){this.queries=K_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=De(t),a=o.queries;o.queries=K_(),a.forEach((u,d)=>{for(const f of d.J_)f.onError(i)})})(this,new ge(K.ABORTED,"Firestore shutting down"))}}function K_(){return new to(n=>uw(n),oh)}async function pb(n,e){const t=De(n);let i=3;const o=e.query;let a=t.queries.get(o);a?!a.Y_()&&e.Z_()&&(i=2):(a=new db,i=e.Z_()?0:1);try{switch(i){case 0:a.H_=await t.onListen(o,!0);break;case 1:a.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(u){const d=Vp(u,`Initialization of query '${qo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.J_.push(e),e.ea(t.onlineState),a.H_&&e.ta(a.H_)&&Fp(t)}async function mb(n,e){const t=De(n),i=e.query;let o=3;const a=t.queries.get(i);if(a){const u=a.J_.indexOf(e);u>=0&&(a.J_.splice(u,1),a.J_.length===0?o=e.Z_()?0:1:!a.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function gb(n,e){const t=De(n);let i=!1;for(const o of e){const a=o.query,u=t.queries.get(a);if(u){for(const d of u.J_)d.ta(o)&&(i=!0);u.H_=o}}i&&Fp(t)}function yb(n,e,t){const i=De(n),o=i.queries.get(e);if(o)for(const a of o.J_)a.onError(t);i.queries.delete(e)}function Fp(n){n.X_.forEach(e=>{e.next()})}var Hf,G_;(G_=Hf||(Hf={})).na="default",G_.Cache="cache";class _b{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new oa(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=oa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Hf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.key=e}}class qw{constructor(e){this.key=e}}class vb{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ue(),this.mutatedKeys=Ue(),this.Va=cw(e),this.ma=new Xo(this.Va)}get fa(){return this.da}ga(e,t){const i=t?t.pa:new W_,o=t?t.ma:this.ma;let a=t?t.mutatedKeys:this.mutatedKeys,u=o,d=!1;const f=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,E)=>{const S=o.get(v),T=ah(this.query,E)?E:null,O=!!S&&this.mutatedKeys.has(S.key),F=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let M=!1;S&&T?S.data.isEqual(T.data)?O!==F&&(i.track({type:3,doc:T}),M=!0):this.ya(S,T)||(i.track({type:2,doc:T}),M=!0,(f&&this.Va(T,f)>0||y&&this.Va(T,y)<0)&&(d=!0)):!S&&T?(i.track({type:0,doc:T}),M=!0):S&&!T&&(i.track({type:1,doc:S}),M=!0,(f||y)&&(d=!0)),M&&(T?(u=u.add(T),a=F?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),i.track({type:1,doc:v})}return{ma:u,pa:i,ss:d,mutatedKeys:a}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const a=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const u=e.pa.j_();u.sort((v,E)=>function(T,O){const F=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be()}};return F(T)-F(O)}(v.type,E.type)||this.Va(v.doc,E.doc)),this.wa(i),o=o!=null&&o;const d=t&&!o?this.Sa():[],f=this.Ra.size===0&&this.current&&!o?1:0,y=f!==this.Aa;return this.Aa=f,u.length!==0||y?{snapshot:new oa(this.query,e.ma,a,u,e.mutatedKeys,f===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new W_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ue(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new qw(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new $w(i))}),t}va(e){this.da=e.ds,this.Ra=Ue();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return oa.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class wb{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Eb{constructor(e){this.key=e,this.Fa=!1}}class Tb{constructor(e,t,i,o,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new to(d=>uw(d),oh),this.Oa=new Map,this.Na=new Set,this.La=new ct(Te.comparator),this.Ba=new Map,this.ka=new kp,this.qa={},this.Qa=new Map,this.Ka=sa.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Ib(n,e,t=!0){const i=Yw(n);let o;const a=i.xa.get(e);return a?(i.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.Ca()):o=await Hw(i,e,t,!0),o}async function Sb(n,e){const t=Yw(n);await Hw(t,e,!0,!1)}async function Hw(n,e,t,i){const o=await $k(n.localStore,Fr(e)),a=o.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return i&&(d=await Rb(n,e,a,u==="current",o.resumeToken)),n.isPrimaryClient&&t&&Vw(n.remoteStore,o),d}async function Rb(n,e,t,i,o){n.Ua=(E,S,T)=>async function(F,M,ie,te){let re=M.view.ga(ie);re.ss&&(re=await z_(F.localStore,M.query,!1).then(({documents:b})=>M.view.ga(b,re)));const W=te&&te.targetChanges.get(M.targetId),le=te&&te.targetMismatches.get(M.targetId)!=null,ce=M.view.applyChanges(re,F.isPrimaryClient,W,le);return Y_(F,M.targetId,ce.ba),ce.snapshot}(n,E,S,T);const a=await z_(n.localStore,e,!0),u=new vb(e,a.ds),d=u.ga(a.documents),f=Nl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=u.applyChanges(d,n.isPrimaryClient,f);Y_(n,t,y.ba);const v=new wb(e,t,u);return n.xa.set(e,v),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function Ab(n,e,t){const i=De(n),o=i.xa.get(e),a=i.Oa.get(o.targetId);if(a.length>1)return i.Oa.set(o.targetId,a.filter(u=>!oh(u,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await qf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&xp(i.remoteStore,o.targetId),Wf(i,o.targetId)}).catch(da)):(Wf(i,o.targetId),await qf(i.localStore,o.targetId,!0))}async function Pb(n,e){const t=De(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),xp(t.remoteStore,i.targetId))}async function Cb(n,e,t){const i=Ob(n);try{const o=await function(u,d){const f=De(u),y=Pt.now(),v=d.reduce((T,O)=>T.add(O.key),Ue());let E,S;return f.persistence.runTransaction("Locally write mutations","readwrite",T=>{let O=mi(),F=Ue();return f.hs.getEntries(T,v).next(M=>{O=M,O.forEach((ie,te)=>{te.isValidDocument()||(F=F.add(ie))})}).next(()=>f.localDocuments.getOverlayedDocuments(T,O)).next(M=>{E=M;const ie=[];for(const te of d){const re=qC(te,E.get(te.key).overlayedDocument);re!=null&&ie.push(new cs(te.key,re,ew(re.value.mapValue),Ur.exists(!0)))}return f.mutationQueue.addMutationBatch(T,y,ie,d)}).next(M=>{S=M;const ie=M.applyToLocalDocumentSet(E,F);return f.documentOverlayCache.saveOverlays(T,M.batchId,ie)})}).then(()=>({batchId:S.batchId,changes:dw(E)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(u,d,f){let y=u.qa[u.currentUser.toKey()];y||(y=new ct(ze)),y=y.insert(d,f),u.qa[u.currentUser.toKey()]=y}(i,o.batchId,t),await Dl(i,o.changes),await fh(i.remoteStore)}catch(o){const a=Vp(o,"Failed to persist write");t.reject(a)}}async function Ww(n,e){const t=De(n);try{const i=await Bk(t.localStore,e);e.targetChanges.forEach((o,a)=>{const u=t.Ba.get(a);u&&(Qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?u.Fa=!0:o.modifiedDocuments.size>0?Qe(u.Fa):o.removedDocuments.size>0&&(Qe(u.Fa),u.Fa=!1))}),await Dl(t,i,e)}catch(i){await da(i)}}function Q_(n,e,t){const i=De(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((a,u)=>{const d=u.view.ea(e);d.snapshot&&o.push(d.snapshot)}),function(u,d){const f=De(u);f.onlineState=d;let y=!1;f.queries.forEach((v,E)=>{for(const S of E.J_)S.ea(d)&&(y=!0)}),y&&Fp(f)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function kb(n,e,t){const i=De(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ba.get(e),a=o&&o.key;if(a){let u=new ct(Te.comparator);u=u.insert(a,Jt.newNoDocument(a,Ne.min()));const d=Ue().add(a),f=new ch(Ne.min(),new Map,new ct(ze),u,d);await Ww(i,f),i.La=i.La.remove(a),i.Ba.delete(e),Up(i)}else await qf(i.localStore,e,!1).then(()=>Wf(i,e,t)).catch(da)}async function bb(n,e){const t=De(n),i=e.batch.batchId;try{const o=await Uk(t.localStore,e);Gw(t,i,null),Kw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Dl(t,o)}catch(o){await da(o)}}async function Nb(n,e,t){const i=De(n);try{const o=await function(u,d){const f=De(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let v;return f.mutationQueue.lookupMutationBatch(y,d).next(E=>(Qe(E!==null),v=E.keys(),f.mutationQueue.removeMutationBatch(y,E))).next(()=>f.mutationQueue.performConsistencyCheck(y)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(y,v,d)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v)).next(()=>f.localDocuments.getDocuments(y,v))})}(i.localStore,e);Gw(i,e,t),Kw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Dl(i,o)}catch(o){await da(o)}}function Kw(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Gw(n,e,t){const i=De(n);let o=i.qa[i.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function Wf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||Qw(n,i)})}function Qw(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(xp(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),Up(n))}function Y_(n,e,t){for(const i of t)i instanceof $w?(n.ka.addReference(i.key,e),xb(n,i)):i instanceof qw?(fe("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||Qw(n,i.key)):be()}function xb(n,e){const t=e.key,i=t.path.canonicalString();n.La.get(t)||n.Na.has(i)||(fe("SyncEngine","New document in limbo: "+t),n.Na.add(i),Up(n))}function Up(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new Te(rt.fromString(e)),i=n.Ka.next();n.Ba.set(i,new Eb(t)),n.La=n.La.insert(t,i),Vw(n.remoteStore,new Yi(Fr(aw(t.path)),i,"TargetPurposeLimboResolution",rh.oe))}}async function Dl(n,e,t){const i=De(n),o=[],a=[],u=[];i.xa.isEmpty()||(i.xa.forEach((d,f)=>{u.push(i.Ua(f,e,t).then(y=>{var v;if((y||t)&&i.isPrimaryClient){const E=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(y){o.push(y);const E=Np.zi(f.targetId,y);a.push(E)}}))}),await Promise.all(u),i.Ma.R_(o),await async function(f,y){const v=De(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>H.forEach(y,S=>H.forEach(S.Wi,T=>v.persistence.referenceDelegate.addReference(E,S.targetId,T)).next(()=>H.forEach(S.Gi,T=>v.persistence.referenceDelegate.removeReference(E,S.targetId,T)))))}catch(E){if(!fa(E))throw E;fe("LocalStore","Failed to update sequence numbers: "+E)}for(const E of y){const S=E.targetId;if(!E.fromCache){const T=v.us.get(S),O=T.snapshotVersion,F=T.withLastLimboFreeSnapshotVersion(O);v.us=v.us.insert(S,F)}}}(i.localStore,a))}async function Db(n,e){const t=De(n);if(!t.currentUser.isEqual(e)){fe("SyncEngine","User change. New user:",e.toKey());const i=await Dw(t.localStore,e);t.currentUser=e,function(a,u){a.Qa.forEach(d=>{d.forEach(f=>{f.reject(new ge(K.CANCELLED,u))})}),a.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Dl(t,i.Ts)}}function Lb(n,e){const t=De(n),i=t.Ba.get(e);if(i&&i.Fa)return Ue().add(i.key);{let o=Ue();const a=t.Oa.get(e);if(!a)return o;for(const u of a){const d=t.xa.get(u);o=o.unionWith(d.view.fa)}return o}}function Yw(n){const e=De(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ww.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kb.bind(null,e),e.Ma.R_=gb.bind(null,e.eventManager),e.Ma.Wa=yb.bind(null,e.eventManager),e}function Ob(n){const e=De(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Nb.bind(null,e),e}class qc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hh(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return Fk(this.persistence,new Mk,e.initialUser,this.serializer)}ja(e){return new xw(bp.ei,this.serializer)}za(e){return new Hk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qc.provider={build:()=>new qc};class Mb extends qc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Qe(this.persistence.referenceDelegate instanceof zc);const i=this.persistence.referenceDelegate.garbageCollector;return new Ek(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new xw(i=>zc.ei(i,t),this.serializer)}}class Kf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Q_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Db.bind(null,this.syncEngine),await hb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fb}()}createDatastore(e){const t=hh(e.databaseInfo.databaseId),i=function(a){return new Qk(a)}(e.databaseInfo);return function(a,u,d,f){return new Jk(a,u,d,f)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,a,u,d){return new eb(i,o,a,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>Q_(this.syncEngine,t,0),function(){return q_.p()?new q_:new Wk}())}createSyncEngine(e,t){return function(o,a,u,d,f,y,v){const E=new Tb(o,a,u,d,f,y);return v&&(E.$a=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const a=De(o);fe("RemoteStore","RemoteStore shutting down."),a.k_.add(5),await xl(a),a.Q_.shutdown(),a.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Kf.provider={build:()=>new Kf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):pi("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,t,i,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Xt.UNAUTHENTICATED,this.clientId=X0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(i,async u=>{fe("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(fe("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Vp(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function wf(n,e){n.asyncQueue.verifyOperationInProgress(),fe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await Dw(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function X_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ub(n);fe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>H_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>H_(e.remoteStore,o)),n._onlineComponents=e}async function Ub(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){fe("FirestoreClient","Using user provided OfflineComponentProvider");try{await wf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;ta("Error using user provided cache. Falling back to memory cache: "+t),await wf(n,new qc)}}else fe("FirestoreClient","Using default OfflineComponentProvider"),await wf(n,new Mb(void 0));return n._offlineComponents}async function Xw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(fe("FirestoreClient","Using user provided OnlineComponentProvider"),await X_(n,n._uninitializedComponentsProvider._online)):(fe("FirestoreClient","Using default OnlineComponentProvider"),await X_(n,new Kf))),n._onlineComponents}function Bb(n){return Xw(n).then(e=>e.syncEngine)}async function jb(n){const e=await Xw(n),t=e.eventManager;return t.onListen=Ib.bind(null,e.syncEngine),t.onUnlisten=Ab.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Sb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Pb.bind(null,e.syncEngine),t}function zb(n,e,t={}){const i=new Zi;return n.asyncQueue.enqueueAndForget(async()=>function(a,u,d,f,y){const v=new Vb({next:S=>{v.eu(),u.enqueueAndForget(()=>mb(a,E)),S.fromCache&&f.source==="server"?y.reject(new ge(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(S)},error:S=>y.reject(S)}),E=new _b(d,v,{includeMetadataChanges:!0,ua:!0});return pb(a,E)}(await jb(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(n,e,t){if(!t)throw new ge(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function $b(n,e,t,i){if(e===!0&&i===!0)throw new ge(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Z_(n){if(!Te.isDocumentKey(n))throw new ge(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ev(n){if(Te.isDocumentKey(n))throw new ge(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ph(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":be()}function aa(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ge(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ph(n);throw new ge(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ge(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ge(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$b("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ge(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ge(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ge(K.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tv(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new XP;switch(i.type){case"firstParty":return new tC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ge(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=J_.get(t);i&&(fe("ComponentProvider","Removing Datastore"),J_.delete(t),i.terminate())}(this),Promise.resolve()}}function qb(n,e,t,i={}){var o;const a=(n=aa(n,mh))._getSettings(),u=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==u&&ta("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:u,ssl:!1})),i.mockUserToken){let d,f;if(typeof i.mockUserToken=="string")d=i.mockUserToken,f=Xt.MOCK_USER;else{d=Nv(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new ge(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Xt(y)}n._authCredentials=new JP(new Y0(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ma(this.firestore,e,this._query)}}class On{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new On(this.firestore,e,this._key)}}class es extends ma{constructor(e,t,i){super(e,t,aw(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new On(this.firestore,null,new Te(e))}withConverter(e){return new es(this.firestore,e,this._path)}}function BD(n,e,...t){if(n=it(n),Zw("collection","path",e),n instanceof mh){const i=rt.fromString(e,...t);return ev(i),new es(n,null,i)}{if(!(n instanceof On||n instanceof es))throw new ge(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(rt.fromString(e,...t));return ev(i),new es(n.firestore,null,i)}}function Hb(n,e,...t){if(n=it(n),arguments.length===1&&(e=X0.newId()),Zw("doc","path",e),n instanceof mh){const i=rt.fromString(e,...t);return Z_(i),new On(n,null,new Te(i))}{if(!(n instanceof On||n instanceof es))throw new ge(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(rt.fromString(e,...t));return Z_(i),new On(n.firestore,n instanceof es?n.converter:null,new Te(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Ow(this,"async_queue_retry"),this.fu=()=>{const i=vf();i&&fe("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=vf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=vf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Zi;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!fa(e))throw e;fe("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(u){let d=u.message||"";return u.stack&&(d=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),d}(i);throw pi("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Mp.createAndSchedule(this,e,t,i,a=>this.Su(a));return this.du.push(o),o}pu(){this.Au&&be()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class gh extends mh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new nv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new nv(e),this._firestoreClient=void 0,await e}}}function Wb(n,e){const t=typeof n=="object"?n:Xc(),i=typeof n=="string"?n:"(default)",o=as(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const a=Cv("firestore");a&&qb(o,...a)}return o}function eE(n){if(n._terminated)throw new ge(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Kb(n),n._firestoreClient}function Kb(n){var e,t,i;const o=n._freezeSettings(),a=function(d,f,y,v){return new gC(d,f,y,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,Jw(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new Fb(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this._byteString=e}static fromBase64String(e){try{return new la(zt.fromBase64String(e))}catch(t){throw new ge(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new la(zt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ge(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ge(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ge(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==o[a])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=/^__.*__$/;class Qb{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new cs(e,this.data,this.fieldMask,t,this.fieldTransforms):new bl(e,this.data,t,this.fieldTransforms)}}class tE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new cs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function nE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be()}}class $p{constructor(e,t,i,o,a,u){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,a===void 0&&this.Fu(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new $p(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Lu(e),o}Bu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Hc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(nE(this.Mu)&&Gb.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class Yb{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||hh(e)}$u(e,t,i,o=!1){return new $p({Mu:e,methodName:t,Ku:i,path:jt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qp(n){const e=n._freezeSettings(),t=hh(n._databaseId);return new Yb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Xb(n,e,t,i,o,a={}){const u=n.$u(a.merge||a.mergeFields?2:0,e,t,o);Hp("Data must be an object, but it was:",u,i);const d=rE(i,u);let f,y;if(a.merge)f=new xn(u.fieldMask),y=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const E of a.mergeFields){const S=Gf(e,E,t);if(!u.contains(S))throw new ge(K.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);sE(v,S)||v.push(S)}f=new xn(v),y=u.fieldTransforms.filter(E=>f.covers(E.field))}else f=null,y=u.fieldTransforms;return new Qb(new vn(d),f,y)}class _h extends Bp{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _h}}function Jb(n,e,t,i){const o=n.$u(1,e,t);Hp("Data must be an object, but it was:",o,i);const a=[],u=vn.empty();us(i,(f,y)=>{const v=Wp(e,f,t);y=it(y);const E=o.Bu(v);if(y instanceof _h)a.push(v);else{const S=Ll(y,E);S!=null&&(a.push(v),u.set(v,S))}});const d=new xn(a);return new tE(u,d,o.fieldTransforms)}function Zb(n,e,t,i,o,a){const u=n.$u(1,e,t),d=[Gf(e,i,t)],f=[o];if(a.length%2!=0)throw new ge(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<a.length;S+=2)d.push(Gf(e,a[S])),f.push(a[S+1]);const y=[],v=vn.empty();for(let S=d.length-1;S>=0;--S)if(!sE(y,d[S])){const T=d[S];let O=f[S];O=it(O);const F=u.Bu(T);if(O instanceof _h)y.push(T);else{const M=Ll(O,F);M!=null&&(y.push(T),v.set(T,M))}}const E=new xn(y);return new tE(v,E,u.fieldTransforms)}function eN(n,e,t,i=!1){return Ll(t,n.$u(i?4:3,e))}function Ll(n,e){if(iE(n=it(n)))return Hp("Unsupported field value:",e,n),rE(n,e);if(n instanceof Bp)return function(i,o){if(!nE(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(o);a&&o.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const a=[];let u=0;for(const d of i){let f=Ll(d,o.ku(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}}(n,e)}return function(i,o){if((i=it(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return FC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=Pt.fromDate(i);return{timestampValue:jc(o.serializer,a)}}if(i instanceof Pt){const a=new Pt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:jc(o.serializer,a)}}if(i instanceof jp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof la)return{bytesValue:Rw(o.serializer,i._byteString)};if(i instanceof On){const a=o.databaseId,u=i.firestore._databaseId;if(!u.isEqual(a))throw o.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Cp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof zp)return function(u,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw d.qu("VectorValues must only contain numeric values.");return Rp(d.serializer,f)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${ph(i)}`)}(n,e)}function rE(n,e){const t={};return J0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):us(n,(i,o)=>{const a=Ll(o,e.Ou(i));a!=null&&(t[i]=a)}),{mapValue:{fields:t}}}function iE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Pt||n instanceof jp||n instanceof la||n instanceof On||n instanceof Bp||n instanceof zp)}function Hp(n,e,t){if(!iE(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=ph(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function Gf(n,e,t){if((e=it(e))instanceof yh)return e._internalPath;if(typeof e=="string")return Wp(n,e);throw Hc("Field path arguments must be of type string or ",n,!1,void 0,t)}const tN=new RegExp("[~\\*/\\[\\]]");function Wp(n,e,t){if(e.search(tN)>=0)throw Hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new yh(...e.split("."))._internalPath}catch{throw Hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Hc(n,e,t,i,o){const a=i&&!i.isEmpty(),u=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${i}`),u&&(f+=` in document ${o}`),f+=")"),new ge(K.INVALID_ARGUMENT,d+n+f)}function sE(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,t,i,o,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new On(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Kp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class nN extends oE{data(){return super.data()}}function Kp(n,e){return typeof e=="string"?Wp(n,e):e instanceof yh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ge(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gp{}class iN extends Gp{}function jD(n,e,...t){let i=[];e instanceof Gp&&i.push(e),i=i.concat(t),function(a){const u=a.filter(f=>f instanceof Qp).length,d=a.filter(f=>f instanceof vh).length;if(u>1||u>0&&d>0)throw new ge(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class vh extends iN{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new vh(e,t,i)}_apply(e){const t=this._parse(e);return aE(e._query,t),new ma(e.firestore,e.converter,Ff(e._query,t))}_parse(e){const t=qp(e.firestore);return function(a,u,d,f,y,v,E){let S;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ge(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){iv(E,v);const T=[];for(const O of E)T.push(rv(f,a,O));S={arrayValue:{values:T}}}else S=rv(f,a,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||iv(E,v),S=eN(d,u,E,v==="in"||v==="not-in");return Tt.create(y,v,S)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function zD(n,e,t){const i=e,o=Kp("where",n);return vh._create(o,i,t)}class Qp extends Gp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Qp(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Tr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,a){let u=o;const d=a.getFlattenedFilters();for(const f of d)aE(u,f),u=Ff(u,f)}(e._query,t),new ma(e.firestore,e.converter,Ff(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function rv(n,e,t){if(typeof(t=it(t))=="string"){if(t==="")throw new ge(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lw(e)&&t.indexOf("/")!==-1)throw new ge(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(rt.fromString(t));if(!Te.isDocumentKey(i))throw new ge(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return S_(n,new Te(i))}if(t instanceof On)return S_(n,t._key);throw new ge(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ph(t)}.`)}function iv(n,e){if(!Array.isArray(n)||n.length===0)throw new ge(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aE(n,e){const t=function(o,a){for(const u of o)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ge(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ge(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class sN{convertValue(e,t="none"){switch(is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw be()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return us(e,(o,a)=>{i[o]=this.convertValue(a,t)}),i}convertVectorValue(e){var t,i,o;const a=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(u=>_t(u.doubleValue));return new zp(a)}convertGeoPoint(e){return new jp(_t(e.latitude),_t(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=sh(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(_l(e));default:return null}}convertTimestamp(e){const t=ns(e);return new Pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=rt.fromString(e);Qe(Nw(i));const o=new vl(i.get(1),i.get(3)),a=new Te(i.popFirst(5));return o.isEqual(t)||pi(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aN extends oE{constructor(e,t,i,o,a,u){super(e,t,i,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Tc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Kp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Tc extends aN{data(e={}){return super.data(e)}}class lN{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new oc(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Tc(this._firestore,this._userDataWriter,i.key,i,new oc(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ge(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,a){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map(d=>{const f=new Tc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new oc(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}})}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const f=new Tc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new oc(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return d.type!==0&&(y=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:uN(d.type),doc:f,oldIndex:y,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function uN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return be()}}class cN extends sN{constructor(e){super(),this.firestore=e}convertBytes(e){return new la(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new On(this.firestore,null,t)}}function $D(n){n=aa(n,ma);const e=aa(n.firestore,gh),t=eE(e),i=new cN(e);return rN(n._query),zb(t,n._query).then(o=>new lN(e,i,n,o))}function qD(n,e,t,...i){n=aa(n,On);const o=aa(n.firestore,gh),a=qp(o);let u;return u=typeof(e=it(e))=="string"||e instanceof yh?Zb(a,"updateDoc",n._key,e,t,i):Jb(a,"updateDoc",n._key,e),lE(o,[u.toMutation(n._key,Ur.exists(!0))])}function HD(n,e){const t=aa(n.firestore,gh),i=Hb(n),o=oN(n.converter,e);return lE(t,[Xb(qp(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Ur.exists(!1))]).then(()=>i)}function lE(n,e){return function(i,o){const a=new Zi;return i.asyncQueue.enqueueAndForget(async()=>Cb(await Bb(i),o,a)),a.promise}(eE(n),e)}(function(e,t=!0){(function(o){ha=o})(eo),wr(new Yn("firestore",(i,{instanceIdentifier:o,options:a})=>{const u=i.getProvider("app").getImmediate(),d=new gh(new ZP(i.getProvider("auth-internal")),new rC(i.getProvider("app-check-internal")),function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ge(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vl(y.options.projectId,v)}(u,o),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),wn(__,"4.7.5",e),wn(__,"4.7.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="firebasestorage.googleapis.com",cE="storageBucket",hN=2*60*1e3,dN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Xn{constructor(e,t,i=0){super(Ef(e),`Firebase Storage: ${t} (${Ef(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ef(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ft;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ft||(ft={}));function Ef(n){return"storage/"+n}function Yp(){const n="An unknown error occurred, please check the error payload for server response.";return new pt(ft.UNKNOWN,n)}function fN(n){return new pt(ft.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function pN(n){return new pt(ft.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mN(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new pt(ft.UNAUTHENTICATED,n)}function gN(){return new pt(ft.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function yN(n){return new pt(ft.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function _N(){return new pt(ft.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vN(){return new pt(ft.CANCELED,"User canceled the upload/download.")}function wN(n){return new pt(ft.INVALID_URL,"Invalid URL '"+n+"'.")}function EN(n){return new pt(ft.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function TN(){return new pt(ft.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+cE+"' property when initializing the app?")}function IN(){return new pt(ft.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function SN(){return new pt(ft.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function RN(n){return new pt(ft.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Qf(n){return new pt(ft.INVALID_ARGUMENT,n)}function hE(){return new pt(ft.APP_DELETED,"The Firebase app was deleted.")}function AN(n){return new pt(ft.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function fl(n,e){return new pt(ft.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Za(n){throw new pt(ft.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Dn.makeFromUrl(e,t)}catch{return new Dn(e,"")}if(i.path==="")return i;throw EN(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function a(W){W.path.charAt(W.path.length-1)==="/"&&(W.path_=W.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+o+u,"i"),f={bucket:1,path:3};function y(W){W.path_=decodeURIComponent(W.path)}const v="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",T=new RegExp(`^https?://${E}/${v}/b/${o}/o${S}`,"i"),O={bucket:1,path:3},F=t===uE?"(?:storage.googleapis.com|storage.cloud.google.com)":t,M="([^?#]*)",ie=new RegExp(`^https?://${F}/${o}/${M}`,"i"),re=[{regex:d,indices:f,postModify:a},{regex:T,indices:O,postModify:y},{regex:ie,indices:{bucket:1,path:2},postModify:y}];for(let W=0;W<re.length;W++){const le=re[W],ce=le.regex.exec(e);if(ce){const b=ce[le.indices.bucket];let R=ce[le.indices.path];R||(R=""),i=new Dn(b,R),le.postModify(i);break}}if(i==null)throw wN(e);return i}}class PN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(n,e,t){let i=1,o=null,a=null,u=!1,d=0;function f(){return d===2}let y=!1;function v(...M){y||(y=!0,e.apply(null,M))}function E(M){o=setTimeout(()=>{o=null,n(T,f())},M)}function S(){a&&clearTimeout(a)}function T(M,...ie){if(y){S();return}if(M){S(),v.call(null,M,...ie);return}if(f()||u){S(),v.call(null,M,...ie);return}i<64&&(i*=2);let re;d===1?(d=2,re=0):re=(i+Math.random())*1e3,E(re)}let O=!1;function F(M){O||(O=!0,S(),!y&&(o!==null?(M||(d=2),clearTimeout(o),E(0)):M||(d=1)))}return E(0),a=setTimeout(()=>{u=!0,F(!0)},t),F}function kN(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(n){return n!==void 0}function NN(n){return typeof n=="object"&&!Array.isArray(n)}function Xp(n){return typeof n=="string"||n instanceof String}function sv(n){return Jp()&&n instanceof Blob}function Jp(){return typeof Blob<"u"}function ov(n,e,t,i){if(i<e)throw Qf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Qf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function dE(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Hs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Hs||(Hs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||o||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,t,i,o,a,u,d,f,y,v,E,S=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=E,this.retry=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,O)=>{this.resolve_=T,this.reject_=O,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new ac(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,y)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===Hs.NO_ERROR,f=a.getStatus();if(!d||xN(f,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===Hs.ABORT;i(!1,new ac(!1,null,v));return}const y=this.successCodes_.indexOf(f)!==-1;i(!0,new ac(y,a))})},t=(i,o)=>{const a=this.resolve_,u=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());bN(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=Yp();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(o.canceled){const f=this.appDelete_?hE():vN();u(f)}else{const f=_N();u(f)}};this.canceled_?t(!1,new ac(!1,null,!0)):this.backoffId_=CN(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ac{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function LN(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function ON(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function MN(n,e){e&&(n["X-Firebase-GMPID"]=e)}function VN(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function FN(n,e,t,i,o,a,u=!0){const d=dE(n.urlParams),f=n.url+d,y=Object.assign({},n.headers);return MN(y,e),LN(y,t),ON(y,a),VN(y,i),new DN(f,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function BN(...n){const e=UN();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Jp())return new Blob(n);throw new pt(ft.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function jN(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(n){if(typeof atob>"u")throw RN("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Tf{constructor(e,t){this.data=e,this.contentType=t||null}}function $N(n,e){switch(n){case Or.RAW:return new Tf(fE(e));case Or.BASE64:case Or.BASE64URL:return new Tf(pE(n,e));case Or.DATA_URL:return new Tf(HN(e),WN(e))}throw Yp()}function fE(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=i,u=n.charCodeAt(++t);i=65536|(a&1023)<<10|u&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function qN(n){let e;try{e=decodeURIComponent(n)}catch{throw fl(Or.DATA_URL,"Malformed data URL.")}return fE(e)}function pE(n,e){switch(n){case Or.BASE64:{const o=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(o||a)throw fl(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case Or.BASE64URL:{const o=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(o||a)throw fl(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=zN(e)}catch(o){throw o.message.includes("polyfill")?o:fl(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class mE{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw fl(Or.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=KN(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function HN(n){const e=new mE(n);return e.base64?pE(Or.BASE64,e.rest):qN(e.rest)}function WN(n){return new mE(n).contentType}function KN(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t){let i=0,o="";sv(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(sv(this.data_)){const i=this.data_,o=jN(i,e,t);return o===null?null:new Qi(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Qi(i,!0)}}static getBlob(...e){if(Jp()){const t=e.map(i=>i instanceof Qi?i.data_:i);return new Qi(BN.apply(null,t))}else{const t=e.map(u=>Xp(u)?$N(Or.RAW,u).data:u.data_);let i=0;t.forEach(u=>{i+=u.byteLength});const o=new Uint8Array(i);let a=0;return t.forEach(u=>{for(let d=0;d<u.length;d++)o[a++]=u[d]}),new Qi(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(n){let e;try{e=JSON.parse(n)}catch{return null}return NN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function QN(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function yE(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(n,e){return e}class an{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||YN}}let lc=null;function XN(n){return!Xp(n)||n.length<2?n:yE(n)}function _E(){if(lc)return lc;const n=[];n.push(new an("bucket")),n.push(new an("generation")),n.push(new an("metageneration")),n.push(new an("name","fullPath",!0));function e(a,u){return XN(u)}const t=new an("name");t.xform=e,n.push(t);function i(a,u){return u!==void 0?Number(u):u}const o=new an("size");return o.xform=i,n.push(o),n.push(new an("timeCreated")),n.push(new an("updated")),n.push(new an("md5Hash",null,!0)),n.push(new an("cacheControl",null,!0)),n.push(new an("contentDisposition",null,!0)),n.push(new an("contentEncoding",null,!0)),n.push(new an("contentLanguage",null,!0)),n.push(new an("contentType",null,!0)),n.push(new an("metadata","customMetadata",!0)),lc=n,lc}function JN(n,e){function t(){const i=n.bucket,o=n.fullPath,a=new Dn(i,o);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function ZN(n,e,t){const i={};i.type="file";const o=t.length;for(let a=0;a<o;a++){const u=t[a];i[u.local]=u.xform(i,e[u.server])}return JN(i,n),i}function vE(n,e,t){const i=gE(e);return i===null?null:ZN(n,i,t)}function ex(n,e,t,i){const o=gE(e);if(o===null||!Xp(o.downloadTokens))return null;const a=o.downloadTokens;if(a.length===0)return null;const u=encodeURIComponent;return a.split(",").map(y=>{const v=n.bucket,E=n.fullPath,S="/b/"+u(v)+"/o/"+u(E),T=Zp(S,t,i),O=dE({alt:"media",token:y});return T+O})[0]}function tx(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const a=e[o];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class wE{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(n){if(!n)throw Yp()}function nx(n,e){function t(i,o){const a=vE(n,o,e);return EE(a!==null),a}return t}function rx(n,e){function t(i,o){const a=vE(n,o,e);return EE(a!==null),ex(a,o,n.host,n._protocol)}return t}function TE(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=gN():o=mN():t.getStatus()===402?o=pN(n.bucket):t.getStatus()===403?o=yN(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function ix(n){const e=TE(n);function t(i,o){let a=e(i,o);return i.getStatus()===404&&(a=fN(n.path)),a.serverResponse=o.serverResponse,a}return t}function sx(n,e,t){const i=e.fullServerUrl(),o=Zp(i,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,d=new wE(o,a,rx(n,t),u);return d.errorHandler=ix(e),d}function ox(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function ax(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=ox(null,e)),i}function lx(n,e,t,i,o){const a=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function d(){let re="";for(let W=0;W<2;W++)re=re+Math.random().toString().slice(2);return re}const f=d();u["Content-Type"]="multipart/related; boundary="+f;const y=ax(e,i,o),v=tx(y,t),E="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+f+`\r
Content-Type: `+y.contentType+`\r
\r
`,S=`\r
--`+f+"--",T=Qi.getBlob(E,i,S);if(T===null)throw IN();const O={name:y.fullPath},F=Zp(a,n.host,n._protocol),M="POST",ie=n.maxUploadRetryTime,te=new wE(F,M,nx(n,t),ie);return te.urlParams=O,te.headers=u,te.body=T.uploadData(),te.errorHandler=TE(e),te}class ux{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Hs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Hs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Hs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw Za("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Za("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Za("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Za("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Za("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class cx extends ux{initXhr(){this.xhr_.responseType="text"}}function IE(){return new cx}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t){this._service=e,t instanceof Dn?this._location=t:this._location=Dn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Xs(e,t)}get root(){const e=new Dn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yE(this._location.path)}get storage(){return this._service}get parent(){const e=GN(this._location.path);if(e===null)return null;const t=new Dn(this._location.bucket,e);return new Xs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw AN(e)}}function hx(n,e,t){n._throwIfRoot("uploadBytes");const i=lx(n.storage,n._location,_E(),new Qi(e,!0),t);return n.storage.makeRequestWithTokens(i,IE).then(o=>({metadata:o,ref:n}))}function dx(n){n._throwIfRoot("getDownloadURL");const e=sx(n.storage,n._location,_E());return n.storage.makeRequestWithTokens(e,IE).then(t=>{if(t===null)throw SN();return t})}function fx(n,e){const t=QN(n._location.path,e),i=new Dn(n._location.bucket,t);return new Xs(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(n){return/^[A-Za-z]+:\/\//.test(n)}function mx(n,e){return new Xs(n,e)}function SE(n,e){if(n instanceof em){const t=n;if(t._bucket==null)throw TN();const i=new Xs(t,t._bucket);return e!=null?SE(i,e):i}else return e!==void 0?fx(n,e):n}function gx(n,e){if(e&&px(e)){if(n instanceof em)return mx(n,e);throw Qf("To use ref(service, url), the first argument must be a Storage instance.")}else return SE(n,e)}function av(n,e){const t=e==null?void 0:e[cE];return t==null?null:Dn.makeFromBucketSpec(t,n)}function yx(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:Nv(o,n.app.options.projectId))}class em{constructor(e,t,i,o,a){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=a,this._bucket=null,this._host=uE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hN,this._maxUploadRetryTime=dN,this._requests=new Set,o!=null?this._bucket=Dn.makeFromBucketSpec(o,this._host):this._bucket=av(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dn.makeFromBucketSpec(this._url,e):this._bucket=av(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ov("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ov("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xs(this,e)}_makeRequest(e,t,i,o,a=!0){if(this._deleted)return new PN(hE());{const u=FN(e,this._appId,i,o,t,this._firebaseVersion,a);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const lv="@firebase/storage",uv="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="storage";function WD(n,e,t){return n=it(n),hx(n,e,t)}function KD(n){return n=it(n),dx(n)}function GD(n,e){return n=it(n),gx(n,e)}function _x(n=Xc(),e){n=it(n);const i=as(n,RE).getImmediate({identifier:e}),o=Cv("storage");return o&&vx(i,...o),i}function vx(n,e,t,i={}){yx(n,e,t,i)}function wx(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new em(t,i,o,e,eo)}function Ex(){wr(new Yn(RE,wx,"PUBLIC").setMultipleInstances(!0)),wn(lv,uv,""),wn(lv,uv,"esm2017")}Ex();const Tx={apiKey:"AIzaSyDmQ1Xc8oWBED8D7bay7-yhWTrNS0Yqg_8",authDomain:"showcase-benjama-ac-th.firebaseapp.com",projectId:"showcase-benjama-ac-th",storageBucket:"showcase-benjama-ac-th.firebasestorage.app",messagingSenderId:"805153108143",appId:"1:805153108143:web:f1c3a5482f2d21f5e4645a",measurementId:"G-SJZDC0XGHR"},wh=Fv(Tx);kR(wh);const Ic=QP(wh),QD=_x(wh),YD=Wb(wh);Ic.languageCode="th";var Ix=n=>{switch(n){case"success":return Ax;case"info":return Cx;case"warning":return Px;case"error":return kx;default:return null}},Sx=Array(12).fill(0),Rx=({visible:n,className:e})=>ae.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":n},ae.createElement("div",{className:"sonner-spinner"},Sx.map((t,i)=>ae.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${i}`})))),Ax=ae.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ae.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Px=ae.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},ae.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Cx=ae.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ae.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),kx=ae.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ae.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),bx=ae.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},ae.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),ae.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Nx=()=>{let[n,e]=ae.useState(document.hidden);return ae.useEffect(()=>{let t=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",t),()=>window.removeEventListener("visibilitychange",t)},[]),n},Yf=1,xx=class{constructor(){this.subscribe=n=>(this.subscribers.push(n),()=>{let e=this.subscribers.indexOf(n);this.subscribers.splice(e,1)}),this.publish=n=>{this.subscribers.forEach(e=>e(n))},this.addToast=n=>{this.publish(n),this.toasts=[...this.toasts,n]},this.create=n=>{var e;let{message:t,...i}=n,o=typeof(n==null?void 0:n.id)=="number"||((e=n.id)==null?void 0:e.length)>0?n.id:Yf++,a=this.toasts.find(d=>d.id===o),u=n.dismissible===void 0?!0:n.dismissible;return a?this.toasts=this.toasts.map(d=>d.id===o?(this.publish({...d,...n,id:o,title:t}),{...d,...n,id:o,dismissible:u,title:t}):d):this.addToast({title:t,...i,dismissible:u,id:o}),o},this.dismiss=n=>(n||this.toasts.forEach(e=>{this.subscribers.forEach(t=>t({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:n,dismiss:!0})),n),this.message=(n,e)=>this.create({...e,message:n}),this.error=(n,e)=>this.create({...e,message:n,type:"error"}),this.success=(n,e)=>this.create({...e,type:"success",message:n}),this.info=(n,e)=>this.create({...e,type:"info",message:n}),this.warning=(n,e)=>this.create({...e,type:"warning",message:n}),this.loading=(n,e)=>this.create({...e,type:"loading",message:n}),this.promise=(n,e)=>{if(!e)return;let t;e.loading!==void 0&&(t=this.create({...e,promise:n,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let i=n instanceof Promise?n:n(),o=t!==void 0,a,u=i.then(async f=>{if(a=["resolve",f],ae.isValidElement(f))o=!1,this.create({id:t,type:"default",message:f});else if(Lx(f)&&!f.ok){o=!1;let y=typeof e.error=="function"?await e.error(`HTTP error! status: ${f.status}`):e.error,v=typeof e.description=="function"?await e.description(`HTTP error! status: ${f.status}`):e.description;this.create({id:t,type:"error",message:y,description:v})}else if(e.success!==void 0){o=!1;let y=typeof e.success=="function"?await e.success(f):e.success,v=typeof e.description=="function"?await e.description(f):e.description;this.create({id:t,type:"success",message:y,description:v})}}).catch(async f=>{if(a=["reject",f],e.error!==void 0){o=!1;let y=typeof e.error=="function"?await e.error(f):e.error,v=typeof e.description=="function"?await e.description(f):e.description;this.create({id:t,type:"error",message:y,description:v})}}).finally(()=>{var f;o&&(this.dismiss(t),t=void 0),(f=e.finally)==null||f.call(e)}),d=()=>new Promise((f,y)=>u.then(()=>a[0]==="reject"?y(a[1]):f(a[1])).catch(y));return typeof t!="string"&&typeof t!="number"?{unwrap:d}:Object.assign(t,{unwrap:d})},this.custom=(n,e)=>{let t=(e==null?void 0:e.id)||Yf++;return this.create({jsx:n(t),id:t,...e}),t},this.subscribers=[],this.toasts=[]}},bn=new xx,Dx=(n,e)=>{let t=(e==null?void 0:e.id)||Yf++;return bn.addToast({title:n,...e,id:t}),t},Lx=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",Ox=Dx,Mx=()=>bn.toasts,Vx=Object.assign(Ox,{success:bn.success,info:bn.info,warning:bn.warning,error:bn.error,custom:bn.custom,message:bn.message,promise:bn.promise,dismiss:bn.dismiss,loading:bn.loading},{getHistory:Mx});function Fx(n,{insertAt:e}={}){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",e==="top"&&t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}Fx(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function uc(n){return n.label!==void 0}var Ux=3,Bx="32px",cv=4e3,jx=356,zx=14,$x=20,qx=200;function Hx(...n){return n.filter(Boolean).join(" ")}var Wx=n=>{var e,t,i,o,a,u,d,f,y,v,E;let{invert:S,toast:T,unstyled:O,interacting:F,setHeights:M,visibleToasts:ie,heights:te,index:re,toasts:W,expanded:le,removeToast:ce,defaultRichColors:b,closeButton:R,style:C,cancelButtonStyle:k,actionButtonStyle:N,className:x="",descriptionClassName:A="",duration:he,position:Le,gap:Ce,loadingIcon:Ie,expandByDefault:Q,classNames:G,icons:ee,closeButtonAriaLabel:V="Close toast",pauseWhenPageIsHidden:j,cn:X}=n,[oe,ue]=ae.useState(!1),[Ae,ve]=ae.useState(!1),[Oe,Be]=ae.useState(!1),[Ye,Ke]=ae.useState(!1),[kt,bt]=ae.useState(!1),[Zn,Mn]=ae.useState(0),[Hr,$t]=ae.useState(0),ln=ae.useRef(T.duration||he||cv),er=ae.useRef(null),qt=ae.useRef(null),tr=re===0,hs=re+1<=ie,It=T.type,Tn=T.dismissible!==!1,ds=T.className||"",mt=T.descriptionClassName||"",st=ae.useMemo(()=>te.findIndex(Ee=>Ee.toastId===T.id)||0,[te,T.id]),nr=ae.useMemo(()=>{var Ee;return(Ee=T.closeButton)!=null?Ee:R},[T.closeButton,R]);ae.useMemo(()=>T.duration||he||cv,[T.duration,he]);let Wr=ae.useRef(0),en=ae.useRef(0),Sr=ae.useRef(0),Vn=ae.useRef(null),[yi,fs]=Le.split("-"),_i=ae.useMemo(()=>te.reduce((Ee,Me,Ge)=>Ge>=st?Ee:Ee+Me.height,0),[te,st]),vi=Nx(),ps=T.invert||S,rr=It==="loading";en.current=ae.useMemo(()=>st*Ce+_i,[st,_i]),ae.useEffect(()=>{ue(!0)},[]),ae.useEffect(()=>{let Ee=qt.current;if(Ee){let Me=Ee.getBoundingClientRect().height;return $t(Me),M(Ge=>[{toastId:T.id,height:Me,position:T.position},...Ge]),()=>M(Ge=>Ge.filter(ht=>ht.toastId!==T.id))}},[M,T.id]),ae.useLayoutEffect(()=>{if(!oe)return;let Ee=qt.current,Me=Ee.style.height;Ee.style.height="auto";let Ge=Ee.getBoundingClientRect().height;Ee.style.height=Me,$t(Ge),M(ht=>ht.find(Ht=>Ht.toastId===T.id)?ht.map(Ht=>Ht.toastId===T.id?{...Ht,height:Ge}:Ht):[{toastId:T.id,height:Ge,position:T.position},...ht])},[oe,T.title,T.description,M,T.id]);let tn=ae.useCallback(()=>{ve(!0),Mn(en.current),M(Ee=>Ee.filter(Me=>Me.toastId!==T.id)),setTimeout(()=>{ce(T)},qx)},[T,ce,M,en]);ae.useEffect(()=>{if(T.promise&&It==="loading"||T.duration===1/0||T.type==="loading")return;let Ee;return le||F||j&&vi?(()=>{if(Sr.current<Wr.current){let Me=new Date().getTime()-Wr.current;ln.current=ln.current-Me}Sr.current=new Date().getTime()})():ln.current!==1/0&&(Wr.current=new Date().getTime(),Ee=setTimeout(()=>{var Me;(Me=T.onAutoClose)==null||Me.call(T,T),tn()},ln.current)),()=>clearTimeout(Ee)},[le,F,T,It,j,vi,tn]),ae.useEffect(()=>{T.delete&&tn()},[tn,T.delete]);function wi(){var Ee,Me,Ge;return ee!=null&&ee.loading?ae.createElement("div",{className:X(G==null?void 0:G.loader,(Ee=T==null?void 0:T.classNames)==null?void 0:Ee.loader,"sonner-loader"),"data-visible":It==="loading"},ee.loading):Ie?ae.createElement("div",{className:X(G==null?void 0:G.loader,(Me=T==null?void 0:T.classNames)==null?void 0:Me.loader,"sonner-loader"),"data-visible":It==="loading"},Ie):ae.createElement(Rx,{className:X(G==null?void 0:G.loader,(Ge=T==null?void 0:T.classNames)==null?void 0:Ge.loader),visible:It==="loading"})}return ae.createElement("li",{tabIndex:0,ref:qt,className:X(x,ds,G==null?void 0:G.toast,(e=T==null?void 0:T.classNames)==null?void 0:e.toast,G==null?void 0:G.default,G==null?void 0:G[It],(t=T==null?void 0:T.classNames)==null?void 0:t[It]),"data-sonner-toast":"","data-rich-colors":(i=T.richColors)!=null?i:b,"data-styled":!(T.jsx||T.unstyled||O),"data-mounted":oe,"data-promise":!!T.promise,"data-swiped":kt,"data-removed":Ae,"data-visible":hs,"data-y-position":yi,"data-x-position":fs,"data-index":re,"data-front":tr,"data-swiping":Oe,"data-dismissible":Tn,"data-type":It,"data-invert":ps,"data-swipe-out":Ye,"data-expanded":!!(le||Q&&oe),style:{"--index":re,"--toasts-before":re,"--z-index":W.length-re,"--offset":`${Ae?Zn:en.current}px`,"--initial-height":Q?"auto":`${Hr}px`,...C,...T.style},onPointerDown:Ee=>{rr||!Tn||(er.current=new Date,Mn(en.current),Ee.target.setPointerCapture(Ee.pointerId),Ee.target.tagName!=="BUTTON"&&(Be(!0),Vn.current={x:Ee.clientX,y:Ee.clientY}))},onPointerUp:()=>{var Ee,Me,Ge,ht;if(Ye||!Tn)return;Vn.current=null;let Ht=Number(((Ee=qt.current)==null?void 0:Ee.style.getPropertyValue("--swipe-amount").replace("px",""))||0),Fn=new Date().getTime()-((Me=er.current)==null?void 0:Me.getTime()),ms=Math.abs(Ht)/Fn;if(Math.abs(Ht)>=$x||ms>.11){Mn(en.current),(Ge=T.onDismiss)==null||Ge.call(T,T),tn(),Ke(!0),bt(!1);return}(ht=qt.current)==null||ht.style.setProperty("--swipe-amount","0px"),Be(!1)},onPointerMove:Ee=>{var Me,Ge;if(!Vn.current||!Tn)return;let ht=Ee.clientY-Vn.current.y,Ht=((Me=window.getSelection())==null?void 0:Me.toString().length)>0,Fn=yi==="top"?Math.min(0,ht):Math.max(0,ht);Math.abs(Fn)>0&&bt(!0),!Ht&&((Ge=qt.current)==null||Ge.style.setProperty("--swipe-amount",`${Fn}px`))}},nr&&!T.jsx?ae.createElement("button",{"aria-label":V,"data-disabled":rr,"data-close-button":!0,onClick:rr||!Tn?()=>{}:()=>{var Ee;tn(),(Ee=T.onDismiss)==null||Ee.call(T,T)},className:X(G==null?void 0:G.closeButton,(o=T==null?void 0:T.classNames)==null?void 0:o.closeButton)},(a=ee==null?void 0:ee.close)!=null?a:bx):null,T.jsx||ae.isValidElement(T.title)?T.jsx?T.jsx:typeof T.title=="function"?T.title():T.title:ae.createElement(ae.Fragment,null,It||T.icon||T.promise?ae.createElement("div",{"data-icon":"",className:X(G==null?void 0:G.icon,(u=T==null?void 0:T.classNames)==null?void 0:u.icon)},T.promise||T.type==="loading"&&!T.icon?T.icon||wi():null,T.type!=="loading"?T.icon||(ee==null?void 0:ee[It])||Ix(It):null):null,ae.createElement("div",{"data-content":"",className:X(G==null?void 0:G.content,(d=T==null?void 0:T.classNames)==null?void 0:d.content)},ae.createElement("div",{"data-title":"",className:X(G==null?void 0:G.title,(f=T==null?void 0:T.classNames)==null?void 0:f.title)},typeof T.title=="function"?T.title():T.title),T.description?ae.createElement("div",{"data-description":"",className:X(A,mt,G==null?void 0:G.description,(y=T==null?void 0:T.classNames)==null?void 0:y.description)},typeof T.description=="function"?T.description():T.description):null),ae.isValidElement(T.cancel)?T.cancel:T.cancel&&uc(T.cancel)?ae.createElement("button",{"data-button":!0,"data-cancel":!0,style:T.cancelButtonStyle||k,onClick:Ee=>{var Me,Ge;uc(T.cancel)&&Tn&&((Ge=(Me=T.cancel).onClick)==null||Ge.call(Me,Ee),tn())},className:X(G==null?void 0:G.cancelButton,(v=T==null?void 0:T.classNames)==null?void 0:v.cancelButton)},T.cancel.label):null,ae.isValidElement(T.action)?T.action:T.action&&uc(T.action)?ae.createElement("button",{"data-button":!0,"data-action":!0,style:T.actionButtonStyle||N,onClick:Ee=>{var Me,Ge;uc(T.action)&&((Ge=(Me=T.action).onClick)==null||Ge.call(Me,Ee),!Ee.defaultPrevented&&tn())},className:X(G==null?void 0:G.actionButton,(E=T==null?void 0:T.classNames)==null?void 0:E.actionButton)},T.action.label):null))};function hv(){if(typeof window>"u"||typeof document>"u")return"ltr";let n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}var Kx=xe.forwardRef(function(n,e){let{invert:t,position:i="bottom-right",hotkey:o=["altKey","KeyT"],expand:a,closeButton:u,className:d,offset:f,theme:y="light",richColors:v,duration:E,style:S,visibleToasts:T=Ux,toastOptions:O,dir:F=hv(),gap:M=zx,loadingIcon:ie,icons:te,containerAriaLabel:re="Notifications",pauseWhenPageIsHidden:W,cn:le=Hx}=n,[ce,b]=ae.useState([]),R=ae.useMemo(()=>Array.from(new Set([i].concat(ce.filter(j=>j.position).map(j=>j.position)))),[ce,i]),[C,k]=ae.useState([]),[N,x]=ae.useState(!1),[A,he]=ae.useState(!1),[Le,Ce]=ae.useState(y!=="system"?y:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),Ie=ae.useRef(null),Q=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),G=ae.useRef(null),ee=ae.useRef(!1),V=ae.useCallback(j=>{b(X=>{var oe;return(oe=X.find(ue=>ue.id===j.id))!=null&&oe.delete||bn.dismiss(j.id),X.filter(({id:ue})=>ue!==j.id)})},[]);return ae.useEffect(()=>bn.subscribe(j=>{if(j.dismiss){b(X=>X.map(oe=>oe.id===j.id?{...oe,delete:!0}:oe));return}setTimeout(()=>{bI.flushSync(()=>{b(X=>{let oe=X.findIndex(ue=>ue.id===j.id);return oe!==-1?[...X.slice(0,oe),{...X[oe],...j},...X.slice(oe+1)]:[j,...X]})})})}),[]),ae.useEffect(()=>{if(y!=="system"){Ce(y);return}if(y==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?Ce("dark"):Ce("light")),typeof window>"u")return;let j=window.matchMedia("(prefers-color-scheme: dark)");try{j.addEventListener("change",({matches:X})=>{Ce(X?"dark":"light")})}catch{j.addListener(({matches:oe})=>{try{Ce(oe?"dark":"light")}catch(ue){console.error(ue)}})}},[y]),ae.useEffect(()=>{ce.length<=1&&x(!1)},[ce]),ae.useEffect(()=>{let j=X=>{var oe,ue;o.every(Ae=>X[Ae]||X.code===Ae)&&(x(!0),(oe=Ie.current)==null||oe.focus()),X.code==="Escape"&&(document.activeElement===Ie.current||(ue=Ie.current)!=null&&ue.contains(document.activeElement))&&x(!1)};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[o]),ae.useEffect(()=>{if(Ie.current)return()=>{G.current&&(G.current.focus({preventScroll:!0}),G.current=null,ee.current=!1)}},[Ie.current]),ae.createElement("section",{"aria-label":`${re} ${Q}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false"},R.map((j,X)=>{var oe;let[ue,Ae]=j.split("-");return ce.length?ae.createElement("ol",{key:j,dir:F==="auto"?hv():F,tabIndex:-1,ref:Ie,className:d,"data-sonner-toaster":!0,"data-theme":Le,"data-y-position":ue,"data-lifted":N&&ce.length>1&&!a,"data-x-position":Ae,style:{"--front-toast-height":`${((oe=C[0])==null?void 0:oe.height)||0}px`,"--offset":typeof f=="number"?`${f}px`:f||Bx,"--width":`${jx}px`,"--gap":`${M}px`,...S},onBlur:ve=>{ee.current&&!ve.currentTarget.contains(ve.relatedTarget)&&(ee.current=!1,G.current&&(G.current.focus({preventScroll:!0}),G.current=null))},onFocus:ve=>{ve.target instanceof HTMLElement&&ve.target.dataset.dismissible==="false"||ee.current||(ee.current=!0,G.current=ve.relatedTarget)},onMouseEnter:()=>x(!0),onMouseMove:()=>x(!0),onMouseLeave:()=>{A||x(!1)},onPointerDown:ve=>{ve.target instanceof HTMLElement&&ve.target.dataset.dismissible==="false"||he(!0)},onPointerUp:()=>he(!1)},ce.filter(ve=>!ve.position&&X===0||ve.position===j).map((ve,Oe)=>{var Be,Ye;return ae.createElement(Wx,{key:ve.id,icons:te,index:Oe,toast:ve,defaultRichColors:v,duration:(Be=O==null?void 0:O.duration)!=null?Be:E,className:O==null?void 0:O.className,descriptionClassName:O==null?void 0:O.descriptionClassName,invert:t,visibleToasts:T,closeButton:(Ye=O==null?void 0:O.closeButton)!=null?Ye:u,interacting:A,position:j,style:O==null?void 0:O.style,unstyled:O==null?void 0:O.unstyled,classNames:O==null?void 0:O.classNames,cancelButtonStyle:O==null?void 0:O.cancelButtonStyle,actionButtonStyle:O==null?void 0:O.actionButtonStyle,removeToast:V,toasts:ce.filter(Ke=>Ke.position==ve.position),heights:C.filter(Ke=>Ke.position==ve.position),setHeights:k,expandByDefault:a,gap:M,loadingIcon:ie,expanded:N,pauseWhenPageIsHidden:W,cn:le})})):null}))});const tm=xe.createContext({isAuthenticated:!1,user:null,login:async()=>{},logout:async()=>{}});function Gx({children:n}){const[e,t]=xe.useState(!0),[i,o]=xe.useState(null),a=xe.useMemo(()=>!!i,[i]);xe.useEffect(()=>VA(Ic,y=>{dc.flushSync(()=>{o(y),t(!1)})}),[]);const u=xe.useCallback(async(f,y)=>{try{const v=await DA(Ic,f,y);dc.flushSync(()=>{o(v.user)})}catch(v){Vx.error(v.message)}},[]),d=xe.useCallback(async()=>{await FA(Ic),dc.flushSync(()=>{o(null)})},[]);if(!e)return we.jsx(tm.Provider,{value:{isAuthenticated:a,user:i,login:u,logout:d},children:n})}tm.Consumer;const Qx="modulepreload",Yx=function(n){return"/"+n},dv={},qr=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),d=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));o=Promise.allSettled(t.map(f=>{if(f=Yx(f),f in dv)return;dv[f]=!0;const y=f.endsWith(".css"),v=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${v}`))return;const E=document.createElement("link");if(E.rel=y?"stylesheet":Qx,y||(E.as="script"),E.crossOrigin="",E.href=f,d&&E.setAttribute("nonce",d),document.head.appendChild(E),y)return new Promise((S,T)=>{E.addEventListener("load",S),E.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${f}`)))})}))}function a(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return o.then(u=>{for(const d of u||[])d.status==="rejected"&&a(d.reason);return e().catch(a)})},Jn=II()({component:()=>we.jsxs(we.Fragment,{children:[we.jsx(Iv,{}),we.jsx(Kx,{richColors:!0}),we.jsx(xe.Suspense,{children:we.jsx(Xx,{})})]})}),Xx=()=>null,Jx=Ir("/")({component:os(()=>qr(()=>import("./HomePage-DrfzdFqo.js"),__vite__mapDeps([0,1,2])))}),Zx=Ir("/profile/")({beforeLoad:({context:n,location:e})=>{if(!n.auth.isAuthenticated)throw ua({to:"/auth/signIn",search:{redirect:e.href}})},component:os(()=>qr(()=>import("./profilePage-iqOS8_le.js"),__vite__mapDeps([3,1,2,4,5])))}),eD=Ir("/portfolio/")({component:os(()=>qr(()=>import("./portfolioPage-BRpDLZ2-.js"),__vite__mapDeps([6,1,2,5])))}),tD=Ir("/profile/edit")({component:nD});function nD(){return we.jsx("div",{children:'Hello "/profile/edit"!'})}const rD=Ir("/profile/add-portfolio")({component:os(()=>qr(()=>import("./addPortfolioPage-BXvhZNfi.js"),__vite__mapDeps([7,1,2,8,9,10,11]))),beforeLoad:({context:n,location:e})=>{if(!n.auth.isAuthenticated)throw ua({to:"/auth/signIn",search:{redirect:e.href}})}}),iD=Ir("/profile/add-award")({component:os(()=>qr(()=>import("./addAwardPage-CWKgIjLa.js"),__vite__mapDeps([12,1,2,8,9,10,11]))),beforeLoad:({context:n,location:e})=>{if(!n.auth.isAuthenticated)throw ua({to:"/auth/signIn",search:{redirect:e.href}})}}),sD=Ir("/auth/signUp")({component:os(()=>qr(()=>import("./signUpPage-DXRlyztE.js"),__vite__mapDeps([13,2,5,8,9]))),beforeLoad:({context:n})=>{if(n.auth.isAuthenticated)throw ua({to:"/profile"})}}),oD=Ir("/auth/signIn")({component:os(()=>qr(()=>import("./signInPage-CLy6neC_.js"),__vite__mapDeps([14,5,2,8,9]))),beforeLoad:({context:n})=>{if(n.auth.isAuthenticated)throw ua({to:"/profile"})},validateSearch:n=>({redirect:n.redirect})}),aD=Ir("/auth/forgot-password")({component:os(()=>qr(()=>import("./forgotPasswordPage-BVYKEhE0.js"),__vite__mapDeps([15,2,5,8,9]))),beforeLoad:({context:n})=>{if(n.auth.isAuthenticated)throw ua({to:"/profile"})}}),lD=Ir("/award/")(),uD=Ir("/about/")(),cD=Jx.update({id:"/",path:"/",getParentRoute:()=>Jn}),hD=lD.update({id:"/award/",path:"/award/",getParentRoute:()=>Jn}).lazy(()=>qr(()=>import("./index.lazy-DESaLSud.js"),[]).then(n=>n.Route)),dD=uD.update({id:"/about/",path:"/about/",getParentRoute:()=>Jn}).lazy(()=>qr(()=>import("./index.lazy-Bh_v_sRG.js"),[]).then(n=>n.Route)),fD=Zx.update({id:"/profile/",path:"/profile/",getParentRoute:()=>Jn}),pD=eD.update({id:"/portfolio/",path:"/portfolio/",getParentRoute:()=>Jn}),mD=tD.update({id:"/profile/edit",path:"/profile/edit",getParentRoute:()=>Jn}),gD=rD.update({id:"/profile/add-portfolio",path:"/profile/add-portfolio",getParentRoute:()=>Jn}),yD=iD.update({id:"/profile/add-award",path:"/profile/add-award",getParentRoute:()=>Jn}),_D=sD.update({id:"/auth/signUp",path:"/auth/signUp",getParentRoute:()=>Jn}),vD=oD.update({id:"/auth/signIn",path:"/auth/signIn",getParentRoute:()=>Jn}),wD=aD.update({id:"/auth/forgot-password",path:"/auth/forgot-password",getParentRoute:()=>Jn}),ED={IndexRoute:cD,AuthForgotPasswordRoute:wD,AuthSignInRoute:vD,AuthSignUpRoute:_D,ProfileAddAwardRoute:yD,ProfileAddPortfolioRoute:gD,ProfileEditRoute:mD,PortfolioIndexRoute:pD,ProfileIndexRoute:fD,AboutIndexLazyRoute:dD,AwardIndexLazyRoute:hD},TD=Jn._addFileChildren(ED)._addFileTypes(),ID=mI({routeTree:TD,context:{auth:void 0}});function SD(){const n=xe.useContext(tm);return we.jsx(OI,{router:ID,context:{auth:n}})}function RD(){return we.jsx(Gx,{children:we.jsx(SD,{})})}const fv=document.getElementById("root");fv.innerHTML||FT.createRoot(fv).render(we.jsx(xe.StrictMode,{children:we.jsx(RD,{})}));export{tm as A,ae as B,Js as C,CD as D,Qn as E,jr as F,kD as G,Cy as H,ol as I,PD as J,Xu as K,Yu as L,dc as M,AD as R,qr as _,BD as a,HD as b,xD as c,YD as d,GD as e,KD as f,$D as g,qD as h,ip as i,we as j,OD as k,os as l,Ic as m,MD as n,bD as o,LD as p,jD as q,xe as r,QD as s,Vx as t,WD as u,bI as v,zD as w,Xy as x,hp as y,DD as z};
