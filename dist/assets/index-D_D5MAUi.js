(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var id={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function wy(){if(N0)return Nl;N0=1;var l=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,o,c){var d=null;if(c!==void 0&&(d=""+c),o.key!==void 0&&(d=""+o.key),"key"in o){c={};for(var m in o)m!=="key"&&(c[m]=o[m])}else c=o;return o=c.ref,{$$typeof:l,type:s,key:d,ref:o!==void 0?o:null,props:c}}return Nl.Fragment=e,Nl.jsx=i,Nl.jsxs=i,Nl}var D0;function Ny(){return D0||(D0=1,id.exports=wy()),id.exports}var h=Ny(),ad={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function Dy(){if(U0)return st;U0=1;var l=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),x=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function b(U,Y,Me){this.props=U,this.context=Y,this.refs=M,this.updater=Me||A}b.prototype.isReactComponent={},b.prototype.setState=function(U,Y){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Y,"setState")},b.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function P(){}P.prototype=b.prototype;function z(U,Y,Me){this.props=U,this.context=Y,this.refs=M,this.updater=Me||A}var N=z.prototype=new P;N.constructor=z,w(N,b.prototype),N.isPureReactComponent=!0;var F=Array.isArray;function L(){}var I={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(U,Y,Me){var Ce=Me.ref;return{$$typeof:l,type:U,key:Y,ref:Ce!==void 0?Ce:null,props:Me}}function q(U,Y){return O(U.type,Y,U.props)}function V(U){return typeof U=="object"&&U!==null&&U.$$typeof===l}function J(U){var Y={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Me){return Y[Me]})}var $=/\/+/g;function fe(U,Y){return typeof U=="object"&&U!==null&&U.key!=null?J(""+U.key):Y.toString(36)}function K(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(L,L):(U.status="pending",U.then(function(Y){U.status==="pending"&&(U.status="fulfilled",U.value=Y)},function(Y){U.status==="pending"&&(U.status="rejected",U.reason=Y)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function B(U,Y,Me,Ce,Ie){var re=typeof U;(re==="undefined"||re==="boolean")&&(U=null);var ye=!1;if(U===null)ye=!0;else switch(re){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(U.$$typeof){case l:case e:ye=!0;break;case _:return ye=U._init,B(ye(U._payload),Y,Me,Ce,Ie)}}if(ye)return Ie=Ie(U),ye=Ce===""?"."+fe(U,0):Ce,F(Ie)?(Me="",ye!=null&&(Me=ye.replace($,"$&/")+"/"),B(Ie,Y,Me,"",function(nt){return nt})):Ie!=null&&(V(Ie)&&(Ie=q(Ie,Me+(Ie.key==null||U&&U.key===Ie.key?"":(""+Ie.key).replace($,"$&/")+"/")+ye)),Y.push(Ie)),1;ye=0;var Se=Ce===""?".":Ce+":";if(F(U))for(var He=0;He<U.length;He++)Ce=U[He],re=Se+fe(Ce,He),ye+=B(Ce,Y,Me,re,Ie);else if(He=S(U),typeof He=="function")for(U=He.call(U),He=0;!(Ce=U.next()).done;)Ce=Ce.value,re=Se+fe(Ce,He++),ye+=B(Ce,Y,Me,re,Ie);else if(re==="object"){if(typeof U.then=="function")return B(K(U),Y,Me,Ce,Ie);throw Y=String(U),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ye}function G(U,Y,Me){if(U==null)return U;var Ce=[],Ie=0;return B(U,Ce,"","",function(re){return Y.call(Me,re,Ie++)}),Ce}function ee(U){if(U._status===-1){var Y=U._result;Y=Y(),Y.then(function(Me){(U._status===0||U._status===-1)&&(U._status=1,U._result=Me)},function(Me){(U._status===0||U._status===-1)&&(U._status=2,U._result=Me)}),U._status===-1&&(U._status=0,U._result=Y)}if(U._status===1)return U._result.default;throw U._result}var ge=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Ee={map:G,forEach:function(U,Y,Me){G(U,function(){Y.apply(this,arguments)},Me)},count:function(U){var Y=0;return G(U,function(){Y++}),Y},toArray:function(U){return G(U,function(Y){return Y})||[]},only:function(U){if(!V(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return st.Activity=y,st.Children=Ee,st.Component=b,st.Fragment=i,st.Profiler=o,st.PureComponent=z,st.StrictMode=s,st.Suspense=g,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,st.__COMPILER_RUNTIME={__proto__:null,c:function(U){return I.H.useMemoCache(U)}},st.cache=function(U){return function(){return U.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(U,Y,Me){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ce=w({},U.props),Ie=U.key;if(Y!=null)for(re in Y.key!==void 0&&(Ie=""+Y.key),Y)!T.call(Y,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&Y.ref===void 0||(Ce[re]=Y[re]);var re=arguments.length-2;if(re===1)Ce.children=Me;else if(1<re){for(var ye=Array(re),Se=0;Se<re;Se++)ye[Se]=arguments[Se+2];Ce.children=ye}return O(U.type,Ie,Ce)},st.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},st.createElement=function(U,Y,Me){var Ce,Ie={},re=null;if(Y!=null)for(Ce in Y.key!==void 0&&(re=""+Y.key),Y)T.call(Y,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Ie[Ce]=Y[Ce]);var ye=arguments.length-2;if(ye===1)Ie.children=Me;else if(1<ye){for(var Se=Array(ye),He=0;He<ye;He++)Se[He]=arguments[He+2];Ie.children=Se}if(U&&U.defaultProps)for(Ce in ye=U.defaultProps,ye)Ie[Ce]===void 0&&(Ie[Ce]=ye[Ce]);return O(U,re,Ie)},st.createRef=function(){return{current:null}},st.forwardRef=function(U){return{$$typeof:m,render:U}},st.isValidElement=V,st.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:ee}},st.memo=function(U,Y){return{$$typeof:p,type:U,compare:Y===void 0?null:Y}},st.startTransition=function(U){var Y=I.T,Me={};I.T=Me;try{var Ce=U(),Ie=I.S;Ie!==null&&Ie(Me,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(L,ge)}catch(re){ge(re)}finally{Y!==null&&Me.types!==null&&(Y.types=Me.types),I.T=Y}},st.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},st.use=function(U){return I.H.use(U)},st.useActionState=function(U,Y,Me){return I.H.useActionState(U,Y,Me)},st.useCallback=function(U,Y){return I.H.useCallback(U,Y)},st.useContext=function(U){return I.H.useContext(U)},st.useDebugValue=function(){},st.useDeferredValue=function(U,Y){return I.H.useDeferredValue(U,Y)},st.useEffect=function(U,Y){return I.H.useEffect(U,Y)},st.useEffectEvent=function(U){return I.H.useEffectEvent(U)},st.useId=function(){return I.H.useId()},st.useImperativeHandle=function(U,Y,Me){return I.H.useImperativeHandle(U,Y,Me)},st.useInsertionEffect=function(U,Y){return I.H.useInsertionEffect(U,Y)},st.useLayoutEffect=function(U,Y){return I.H.useLayoutEffect(U,Y)},st.useMemo=function(U,Y){return I.H.useMemo(U,Y)},st.useOptimistic=function(U,Y){return I.H.useOptimistic(U,Y)},st.useReducer=function(U,Y,Me){return I.H.useReducer(U,Y,Me)},st.useRef=function(U){return I.H.useRef(U)},st.useState=function(U){return I.H.useState(U)},st.useSyncExternalStore=function(U,Y,Me){return I.H.useSyncExternalStore(U,Y,Me)},st.useTransition=function(){return I.H.useTransition()},st.version="19.2.8",st}var L0;function Oh(){return L0||(L0=1,ad.exports=Dy()),ad.exports}var at=Oh(),sd={exports:{}},Dl={},rd={exports:{}},ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function Uy(){return O0||(O0=1,(function(l){function e(B,G){var ee=B.length;B.push(G);e:for(;0<ee;){var ge=ee-1>>>1,Ee=B[ge];if(0<o(Ee,G))B[ge]=G,B[ee]=Ee,ee=ge;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var G=B[0],ee=B.pop();if(ee!==G){B[0]=ee;e:for(var ge=0,Ee=B.length,U=Ee>>>1;ge<U;){var Y=2*(ge+1)-1,Me=B[Y],Ce=Y+1,Ie=B[Ce];if(0>o(Me,ee))Ce<Ee&&0>o(Ie,Me)?(B[ge]=Ie,B[Ce]=ee,ge=Ce):(B[ge]=Me,B[Y]=ee,ge=Y);else if(Ce<Ee&&0>o(Ie,ee))B[ge]=Ie,B[Ce]=ee,ge=Ce;else break e}}return G}function o(B,G){var ee=B.sortIndex-G.sortIndex;return ee!==0?ee:B.id-G.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;l.unstable_now=function(){return c.now()}}else{var d=Date,m=d.now();l.unstable_now=function(){return d.now()-m}}var g=[],p=[],_=1,y=null,x=3,S=!1,A=!1,w=!1,M=!1,b=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function N(B){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=B)s(p),G.sortIndex=G.expirationTime,e(g,G);else break;G=i(p)}}function F(B){if(w=!1,N(B),!A)if(i(g)!==null)A=!0,L||(L=!0,J());else{var G=i(p);G!==null&&K(F,G.startTime-B)}}var L=!1,I=-1,T=5,O=-1;function q(){return M?!0:!(l.unstable_now()-O<T)}function V(){if(M=!1,L){var B=l.unstable_now();O=B;var G=!0;try{e:{A=!1,w&&(w=!1,P(I),I=-1),S=!0;var ee=x;try{t:{for(N(B),y=i(g);y!==null&&!(y.expirationTime>B&&q());){var ge=y.callback;if(typeof ge=="function"){y.callback=null,x=y.priorityLevel;var Ee=ge(y.expirationTime<=B);if(B=l.unstable_now(),typeof Ee=="function"){y.callback=Ee,N(B),G=!0;break t}y===i(g)&&s(g),N(B)}else s(g);y=i(g)}if(y!==null)G=!0;else{var U=i(p);U!==null&&K(F,U.startTime-B),G=!1}}break e}finally{y=null,x=ee,S=!1}G=void 0}}finally{G?J():L=!1}}}var J;if(typeof z=="function")J=function(){z(V)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,fe=$.port2;$.port1.onmessage=V,J=function(){fe.postMessage(null)}}else J=function(){b(V,0)};function K(B,G){I=b(function(){B(l.unstable_now())},G)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(B){B.callback=null},l.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},l.unstable_getCurrentPriorityLevel=function(){return x},l.unstable_next=function(B){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var ee=x;x=G;try{return B()}finally{x=ee}},l.unstable_requestPaint=function(){M=!0},l.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=x;x=B;try{return G()}finally{x=ee}},l.unstable_scheduleCallback=function(B,G,ee){var ge=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ge+ee:ge):ee=ge,B){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ee+Ee,B={id:_++,callback:G,priorityLevel:B,startTime:ee,expirationTime:Ee,sortIndex:-1},ee>ge?(B.sortIndex=ee,e(p,B),i(g)===null&&B===i(p)&&(w?(P(I),I=-1):w=!0,K(F,ee-ge))):(B.sortIndex=Ee,e(g,B),A||S||(A=!0,L||(L=!0,J()))),B},l.unstable_shouldYield=q,l.unstable_wrapCallback=function(B){var G=x;return function(){var ee=x;x=G;try{return B.apply(this,arguments)}finally{x=ee}}}})(ld)),ld}var P0;function Ly(){return P0||(P0=1,rd.exports=Uy()),rd.exports}var od={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0;function Oy(){if(I0)return Dn;I0=1;var l=Oh();function e(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(g,p,_){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:""+y,children:g,containerInfo:p,implementation:_}}var d=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(g,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(g,p,null,_)},Dn.flushSync=function(g){var p=d.T,_=s.p;try{if(d.T=null,s.p=2,g)return g()}finally{d.T=p,s.p=_,s.d.f()}},Dn.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(g,p))},Dn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Dn.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var _=p.as,y=m(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:S}):_==="script"&&s.d.X(g,{crossOrigin:y,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=m(p.as,p.crossOrigin);s.d.M(g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(g)},Dn.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,y=m(_,p.crossOrigin);s.d.L(g,_,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(g,p){if(typeof g=="string")if(p){var _=m(p.as,p.crossOrigin);s.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(g)},Dn.requestFormReset=function(g){s.d.r(g)},Dn.unstable_batchedUpdates=function(g,p){return g(p)},Dn.useFormState=function(g,p,_){return d.H.useFormState(g,p,_)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.8",Dn}var B0;function Py(){if(B0)return od.exports;B0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(e){console.error(e)}}return l(),od.exports=Oy(),od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function Iy(){if(F0)return Dl;F0=1;var l=Ly(),e=Oh(),i=Py();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return g(u),t;if(f===r)return g(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,C=u.child;C;){if(C===a){v=!0,a=u,r=f;break}if(C===r){v=!0,r=u,a=f;break}C=C.sibling}if(!v){for(C=f.child;C;){if(C===a){v=!0,a=f,r=u;break}if(C===r){v=!0,r=f,a=u;break}C=C.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var y=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),z=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var $=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case b:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case L:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case z:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:fe(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return fe(t(n))}catch{}}return null}var K=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ge=[],Ee=-1;function U(t){return{current:t}}function Y(t){0>Ee||(t.current=ge[Ee],ge[Ee]=null,Ee--)}function Me(t,n){Ee++,ge[Ee]=t.current,t.current=n}var Ce=U(null),Ie=U(null),re=U(null),ye=U(null);function Se(t,n){switch(Me(re,n),Me(Ie,t),Me(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?$g(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=$g(n),t=e0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(Ce),Me(Ce,t)}function He(){Y(Ce),Y(Ie),Y(re)}function nt(t){t.memoizedState!==null&&Me(ye,t);var n=Ce.current,a=e0(n,t.type);n!==a&&(Me(Ie,t),Me(Ce,a))}function Ke(t){Ie.current===t&&(Y(Ce),Y(Ie)),ye.current===t&&(Y(ye),Al._currentValue=ee)}var Wt,ft;function vt(t){if(Wt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Wt=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wt+t+ft}var _t=!1;function dt(t,n){if(!t||_t)return"";_t=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ue){var ce=ue}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(ue){ce=ue}t.call(_e.prototype)}}else{try{throw Error()}catch(ue){ce=ue}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ue){if(ue&&ce&&typeof ue.stack=="string")return[ue.stack,ce.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],C=f[1];if(v&&C){var H=v.split(`
`),ie=C.split(`
`);for(u=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(r===H.length||u===ie.length)for(r=H.length-1,u=ie.length-1;1<=r&&0<=u&&H[r]!==ie[u];)u--;for(;1<=r&&0<=u;r--,u--)if(H[r]!==ie[u]){if(r!==1||u!==1)do if(r--,u--,0>u||H[r]!==ie[u]){var me=`
`+H[r].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=r&&0<=u);break}}}finally{_t=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?vt(a):""}function $t(t,n){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==n&&n!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return vt("Activity");default:return""}}function en(t){try{var n="",a=null;do n+=$t(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var tn=Object.prototype.hasOwnProperty,on=l.unstable_scheduleCallback,Xt=l.unstable_cancelCallback,nn=l.unstable_shouldYield,W=l.unstable_requestPaint,zt=l.unstable_now,Ct=l.unstable_getCurrentPriorityLevel,D=l.unstable_ImmediatePriority,E=l.unstable_UserBlockingPriority,Q=l.unstable_NormalPriority,le=l.unstable_LowPriority,he=l.unstable_IdlePriority,Te=l.log,Ne=l.unstable_setDisableYieldValue,de=null,pe=null;function Re(t){if(typeof Te=="function"&&Ne(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(de,t)}catch{}}var Fe=Math.clz32?Math.clz32:Ze,Le=Math.log,De=Math.LN2;function Ze(t){return t>>>=0,t===0?32:31-(Le(t)/De|0)|0}var Qe=256,it=262144,j=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var C=r&134217727;return C!==0?(r=C&~f,r!==0?u=Ae(r):(v&=C,v!==0?u=Ae(v):a||(a=C&~t,a!==0&&(u=Ae(a))))):(C=r&~f,C!==0?u=Ae(C):v!==0?u=Ae(v):a||(a=r&~t,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Be(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=j;return j<<=1,(j&62914560)===0&&(j=4194304),t}function We(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zt(t,n,a,r,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,H=t.expirationTimes,ie=t.hiddenUpdates;for(a=v&~a;0<a;){var me=31-Fe(a),_e=1<<me;C[me]=0,H[me]=-1;var ce=ie[me];if(ce!==null)for(ie[me]=null,me=0;me<ce.length;me++){var ue=ce[me];ue!==null&&(ue.lane&=-536870913)}a&=~_e}r!==0&&Ut(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Ut(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Fe(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Zn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Fe(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Kn(t,n){var a=n&-n;return a=(a&42)!==0?1:Hr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Hr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Gr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Vr(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:M0(t.type))}function zs(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var Ui=Math.random().toString(36).slice(2),fn="__reactFiber$"+Ui,En="__reactProps$"+Ui,Fn="__reactContainer$"+Ui,rs="__reactEvents$"+Ui,Zl="__reactListeners$"+Ui,Kl="__reactHandles$"+Ui,ls="__reactResources$"+Ui,Ea="__reactMarker$"+Ui;function Ta(t){delete t[fn],delete t[En],delete t[rs],delete t[Zl],delete t[Kl]}function Yi(t){var n=t[fn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Fn]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=l0(t);t!==null;){if(a=t[fn])return a;t=l0(t)}return n}t=a,a=t.parentNode}return null}function Zi(t){if(t=t[fn]||t[Fn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function os(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Aa(t){var n=t[ls];return n||(n=t[ls]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[Ea]=!0}var Ql=new Set,R={};function X(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(R[t]=n,t=0;t<n.length;t++)Ql.add(n[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},Oe={};function Ge(t){return tn.call(Oe,t)?!0:tn.call(se,t)?!1:ae.test(t)?Oe[t]=!0:(se[t]=!0,!1)}function Ue(t,n,a){if(Ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function je(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Et(t){if(!t._valueTracker){var n=lt(t)?"checked":"value";t._valueTracker=Ye(t,n,""+t[n])}}function Kt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=lt(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function Ot(t){return t.replace(Lt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ze(t,n,a,r,u,f,v,C){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Je(n)):t.value!==""+Je(n)&&(t.value=""+Je(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?ht(t,v,Je(n)):a!=null?ht(t,v,Je(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+Je(C):t.removeAttribute("name")}function Nn(t,n,a,r,u,f,v,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Et(t);return}a=a!=null?""+Je(a):"",n=n!=null?""+Je(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=C?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Et(t)}function ht(t,n,a){n==="number"&&kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vn(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Je(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Qn(t,n,a){if(n!=null&&(n=""+Je(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Je(a):""}function bi(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(K(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Je(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Et(t)}function Jn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Pt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qt(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Pt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Si(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Qt(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Qt(t,f,n[f])}function Dt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ra=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cs(t){return Ra.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ki(){}var $c=null;function eu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hs=null,Gs=null;function Jh(t){var n=Zi(t);if(n&&(t=n.stateNode)){var a=t[En]||null;e:switch(t=n.stateNode,n.type){case"input":if(ze(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[En]||null;if(!u)throw Error(s(90));ze(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Kt(r)}break e;case"textarea":Qn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&vn(t,!!a.multiple,n,!1)}}}var tu=!1;function $h(t,n,a){if(tu)return t(n,a);tu=!0;try{var r=t(n);return r}finally{if(tu=!1,(Hs!==null||Gs!==null)&&(zo(),Hs&&(n=Hs,t=Gs,Gs=Hs=null,Jh(n),t)))for(n=0;n<t.length;n++)Jh(t[n])}}function kr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[En]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(Qi)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){nu=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{nu=!1}var Ca=null,iu=null,Jl=null;function ep(){if(Jl)return Jl;var t,n=iu,a=n.length,r,u="value"in Ca?Ca.value:Ca.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return Jl=u.slice(t,1<r?1-r:void 0)}function $l(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function eo(){return!0}function tp(){return!1}function zn(t){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?eo:tp,this.isPropagationStopped=tp,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),n}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},to=zn(us),Xr=y({},us,{view:0,detail:0}),Rv=zn(Xr),au,su,Wr,no=y({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wr&&(Wr&&t.type==="mousemove"?(au=t.screenX-Wr.screenX,su=t.screenY-Wr.screenY):su=au=0,Wr=t),au)},movementY:function(t){return"movementY"in t?t.movementY:su}}),np=zn(no),Cv=y({},no,{dataTransfer:0}),wv=zn(Cv),Nv=y({},Xr,{relatedTarget:0}),ru=zn(Nv),Dv=y({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),Uv=zn(Dv),Lv=y({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ov=zn(Lv),Pv=y({},us,{data:0}),ip=zn(Pv),Iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Fv[t])?!!n[t]:!1}function lu(){return zv}var Hv=y({},Xr,{key:function(t){if(t.key){var n=Iv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=$l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(t){return t.type==="keypress"?$l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gv=zn(Hv),Vv=y({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=zn(Vv),kv=y({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),jv=zn(kv),Xv=y({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=zn(Xv),qv=y({},no,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yv=zn(qv),Zv=y({},us,{newState:0,oldState:0}),Kv=zn(Zv),Qv=[9,13,27,32],ou=Qi&&"CompositionEvent"in window,qr=null;Qi&&"documentMode"in document&&(qr=document.documentMode);var Jv=Qi&&"TextEvent"in window&&!qr,sp=Qi&&(!ou||qr&&8<qr&&11>=qr),rp=" ",lp=!1;function op(t,n){switch(t){case"keyup":return Qv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function $v(t,n){switch(t){case"compositionend":return cp(n);case"keypress":return n.which!==32?null:(lp=!0,rp);case"textInput":return t=n.data,t===rp&&lp?null:t;default:return null}}function e_(t,n){if(Vs)return t==="compositionend"||!ou&&op(t,n)?(t=ep(),Jl=iu=Ca=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sp&&n.locale!=="ko"?null:n.data;default:return null}}var t_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!t_[t.type]:n==="textarea"}function fp(t,n,a,r){Hs?Gs?Gs.push(r):Gs=[r]:Hs=r,n=Wo(n,"onChange"),0<n.length&&(a=new to("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Yr=null,Zr=null;function n_(t){qg(t,0)}function io(t){var n=os(t);if(Kt(n))return t}function dp(t,n){if(t==="change")return n}var hp=!1;if(Qi){var cu;if(Qi){var uu="oninput"in document;if(!uu){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),uu=typeof pp.oninput=="function"}cu=uu}else cu=!1;hp=cu&&(!document.documentMode||9<document.documentMode)}function mp(){Yr&&(Yr.detachEvent("onpropertychange",gp),Zr=Yr=null)}function gp(t){if(t.propertyName==="value"&&io(Zr)){var n=[];fp(n,Zr,t,eu(t)),$h(n_,n)}}function i_(t,n,a){t==="focusin"?(mp(),Yr=n,Zr=a,Yr.attachEvent("onpropertychange",gp)):t==="focusout"&&mp()}function a_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return io(Zr)}function s_(t,n){if(t==="click")return io(n)}function r_(t,n){if(t==="input"||t==="change")return io(n)}function l_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:l_;function Kr(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!tn.call(n,u)||!$n(t[u],n[u]))return!1}return!0}function xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vp(t,n){var a=xp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xp(a)}}function _p(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?_p(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function yp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=kt(t.document)}return n}function fu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var o_=Qi&&"documentMode"in document&&11>=document.documentMode,ks=null,du=null,Qr=null,hu=!1;function bp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hu||ks==null||ks!==kt(r)||(r=ks,"selectionStart"in r&&fu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&Kr(Qr,r)||(Qr=r,r=Wo(du,"onSelect"),0<r.length&&(n=new to("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ks)))}function fs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var js={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},pu={},Sp={};Qi&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function ds(t){if(pu[t])return pu[t];if(!js[t])return t;var n=js[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Sp)return pu[t]=n[a];return t}var Mp=ds("animationend"),Ep=ds("animationiteration"),Tp=ds("animationstart"),c_=ds("transitionrun"),u_=ds("transitionstart"),f_=ds("transitioncancel"),Ap=ds("transitionend"),Rp=new Map,mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mu.push("scrollEnd");function Mi(t,n){Rp.set(t,n),X(n,[t])}var ao=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],Xs=0,gu=0;function so(){for(var t=Xs,n=gu=Xs=0;n<t;){var a=oi[n];oi[n++]=null;var r=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&Cp(a,u,f)}}function ro(t,n,a,r){oi[Xs++]=t,oi[Xs++]=n,oi[Xs++]=a,oi[Xs++]=r,gu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function xu(t,n,a,r){return ro(t,n,a,r),lo(t)}function hs(t,n){return ro(t,null,null,n),lo(t)}function Cp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function lo(t){if(50<_l)throw _l=0,Rf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ws={};function d_(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,n,a,r){return new d_(t,n,a,r)}function vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ji(t,n){var a=t.alternate;return a===null?(a=ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function wp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function oo(t,n,a,r,u,f){var v=0;if(r=t,typeof t=="function")vu(t)&&(v=1);else if(typeof t=="string")v=xy(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=ei(31,a,n,u),t.elementType=O,t.lanes=f,t;case w:return ps(a.children,u,f,n);case M:v=8,u|=24;break;case b:return t=ei(12,a,n,u|2),t.elementType=b,t.lanes=f,t;case F:return t=ei(13,a,n,u),t.elementType=F,t.lanes=f,t;case L:return t=ei(19,a,n,u),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:v=10;break e;case P:v=9;break e;case N:v=11;break e;case I:v=14;break e;case T:v=16,r=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=ei(v,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function ps(t,n,a,r){return t=ei(7,t,r,n),t.lanes=a,t}function _u(t,n,a){return t=ei(6,t,null,n),t.lanes=a,t}function Np(t){var n=ei(18,null,null,0);return n.stateNode=t,n}function yu(t,n,a){return n=ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Dp=new WeakMap;function ci(t,n){if(typeof t=="object"&&t!==null){var a=Dp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:en(n)},Dp.set(t,n),n)}return{value:t,source:n,stack:en(n)}}var qs=[],Ys=0,co=null,Jr=0,ui=[],fi=0,wa=null,Oi=1,Pi="";function $i(t,n){qs[Ys++]=Jr,qs[Ys++]=co,co=t,Jr=n}function Up(t,n,a){ui[fi++]=Oi,ui[fi++]=Pi,ui[fi++]=wa,wa=t;var r=Oi;t=Pi;var u=32-Fe(r)-1;r&=~(1<<u),a+=1;var f=32-Fe(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Oi=1<<32-Fe(n)+u|a<<u|r,Pi=f+t}else Oi=1<<f|a<<u|r,Pi=t}function bu(t){t.return!==null&&($i(t,1),Up(t,1,0))}function Su(t){for(;t===co;)co=qs[--Ys],qs[Ys]=null,Jr=qs[--Ys],qs[Ys]=null;for(;t===wa;)wa=ui[--fi],ui[fi]=null,Pi=ui[--fi],ui[fi]=null,Oi=ui[--fi],ui[fi]=null}function Lp(t,n){ui[fi++]=Oi,ui[fi++]=Pi,ui[fi++]=wa,Oi=n.id,Pi=n.overflow,wa=t}var Tn=null,qt=null,yt=!1,Na=null,di=!1,Mu=Error(s(519));function Da(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $r(ci(n,t)),Mu}function Op(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[fn]=t,n[En]=r,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<bl.length;a++)mt(bl[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Nn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),bi(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Qg(n.textContent,a)?(r.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),r.onScroll!=null&&mt("scroll",n),r.onScrollEnd!=null&&mt("scrollend",n),r.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||Da(t,!0)}function Pp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Tn=Tn.return}}function Zs(t){if(t!==Tn)return!1;if(!yt)return Pp(t),yt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Vf(t.type,t.memoizedProps)),a=!a),a&&qt&&Da(t),Pp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qt=r0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qt=r0(t)}else n===27?(n=qt,Xa(t.type)?(t=qf,qf=null,qt=t):qt=n):qt=Tn?pi(t.stateNode.nextSibling):null;return!0}function ms(){qt=Tn=null,yt=!1}function Eu(){var t=Na;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),Na=null),t}function $r(t){Na===null?Na=[t]:Na.push(t)}var Tu=U(null),gs=null,ea=null;function Ua(t,n,a){Me(Tu,n._currentValue),n._currentValue=a}function ta(t){t._currentValue=Tu.current,Y(Tu)}function Au(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Ru(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var H=0;H<n.length;H++)if(C.context===n[H]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Au(f.return,a,t),r||(v=null);break e}f=C.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Au(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Ks(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var C=u.type;$n(u.pendingProps.value,v.value)||(t!==null?t.push(C):t=[C])}}else if(u===ye.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Al):t=[Al])}u=u.return}t!==null&&Ru(n,t,a,r),n.flags|=262144}function uo(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xs(t){gs=t,ea=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Ip(gs,t)}function fo(t,n){return gs===null&&xs(t),Ip(t,n)}function Ip(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(t===null)throw Error(s(308));ea=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ea=ea.next=n;return a}var h_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},p_=l.unstable_scheduleCallback,m_=l.unstable_NormalPriority,hn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cu(){return{controller:new h_,data:new Map,refCount:0}}function el(t){t.refCount--,t.refCount===0&&p_(m_,function(){t.controller.abort()})}var tl=null,wu=0,Qs=0,Js=null;function g_(t,n){if(tl===null){var a=tl=[];wu=0,Qs=Lf(),Js={status:"pending",value:void 0,then:function(r){a.push(r)}}}return wu++,n.then(Bp,Bp),n}function Bp(){if(--wu===0&&tl!==null){Js!==null&&(Js.status="fulfilled");var t=tl;tl=null,Qs=0,Js=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function x_(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Fp=B.S;B.S=function(t,n){bg=zt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&g_(t,n),Fp!==null&&Fp(t,n)};var vs=U(null);function Nu(){var t=vs.current;return t!==null?t:jt.pooledCache}function ho(t,n){n===null?Me(vs,vs.current):Me(vs,n.pool)}function zp(){var t=Nu();return t===null?null:{parent:hn._currentValue,pool:t}}var $s=Error(s(460)),Du=Error(s(474)),po=Error(s(542)),mo={then:function(){}};function Hp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,kp(t),t;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,kp(t),t}throw ys=n,$s}}function _s(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ys=a,$s):a}}var ys=null;function Vp(){if(ys===null)throw Error(s(459));var t=ys;return ys=null,t}function kp(t){if(t===$s||t===po)throw Error(s(483))}var er=null,nl=0;function go(t){var n=nl;return nl+=1,er===null&&(er=[]),Gp(er,t,n)}function il(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function xo(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function jp(t){function n(Z,k){if(t){var te=Z.deletions;te===null?(Z.deletions=[k],Z.flags|=16):te.push(k)}}function a(Z,k){if(!t)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function r(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=Ji(Z,k),Z.index=0,Z.sibling=null,Z}function f(Z,k,te){return Z.index=te,t?(te=Z.alternate,te!==null?(te=te.index,te<k?(Z.flags|=67108866,k):te):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function v(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function C(Z,k,te,ve){return k===null||k.tag!==6?(k=_u(te,Z.mode,ve),k.return=Z,k):(k=u(k,te),k.return=Z,k)}function H(Z,k,te,ve){var $e=te.type;return $e===w?me(Z,k,te.props.children,ve,te.key):k!==null&&(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===T&&_s($e)===k.type)?(k=u(k,te.props),il(k,te),k.return=Z,k):(k=oo(te.type,te.key,te.props,null,Z.mode,ve),il(k,te),k.return=Z,k)}function ie(Z,k,te,ve){return k===null||k.tag!==4||k.stateNode.containerInfo!==te.containerInfo||k.stateNode.implementation!==te.implementation?(k=yu(te,Z.mode,ve),k.return=Z,k):(k=u(k,te.children||[]),k.return=Z,k)}function me(Z,k,te,ve,$e){return k===null||k.tag!==7?(k=ps(te,Z.mode,ve,$e),k.return=Z,k):(k=u(k,te),k.return=Z,k)}function _e(Z,k,te){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=_u(""+k,Z.mode,te),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return te=oo(k.type,k.key,k.props,null,Z.mode,te),il(te,k),te.return=Z,te;case A:return k=yu(k,Z.mode,te),k.return=Z,k;case T:return k=_s(k),_e(Z,k,te)}if(K(k)||J(k))return k=ps(k,Z.mode,te,null),k.return=Z,k;if(typeof k.then=="function")return _e(Z,go(k),te);if(k.$$typeof===z)return _e(Z,fo(Z,k),te);xo(Z,k)}return null}function ce(Z,k,te,ve){var $e=k!==null?k.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return $e!==null?null:C(Z,k,""+te,ve);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case S:return te.key===$e?H(Z,k,te,ve):null;case A:return te.key===$e?ie(Z,k,te,ve):null;case T:return te=_s(te),ce(Z,k,te,ve)}if(K(te)||J(te))return $e!==null?null:me(Z,k,te,ve,null);if(typeof te.then=="function")return ce(Z,k,go(te),ve);if(te.$$typeof===z)return ce(Z,k,fo(Z,te),ve);xo(Z,te)}return null}function ue(Z,k,te,ve,$e){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Z=Z.get(te)||null,C(k,Z,""+ve,$e);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case S:return Z=Z.get(ve.key===null?te:ve.key)||null,H(k,Z,ve,$e);case A:return Z=Z.get(ve.key===null?te:ve.key)||null,ie(k,Z,ve,$e);case T:return ve=_s(ve),ue(Z,k,te,ve,$e)}if(K(ve)||J(ve))return Z=Z.get(te)||null,me(k,Z,ve,$e,null);if(typeof ve.then=="function")return ue(Z,k,te,go(ve),$e);if(ve.$$typeof===z)return ue(Z,k,te,fo(k,ve),$e);xo(k,ve)}return null}function Xe(Z,k,te,ve){for(var $e=null,Tt=null,qe=k,ct=k=0,xt=null;qe!==null&&ct<te.length;ct++){qe.index>ct?(xt=qe,qe=null):xt=qe.sibling;var At=ce(Z,qe,te[ct],ve);if(At===null){qe===null&&(qe=xt);break}t&&qe&&At.alternate===null&&n(Z,qe),k=f(At,k,ct),Tt===null?$e=At:Tt.sibling=At,Tt=At,qe=xt}if(ct===te.length)return a(Z,qe),yt&&$i(Z,ct),$e;if(qe===null){for(;ct<te.length;ct++)qe=_e(Z,te[ct],ve),qe!==null&&(k=f(qe,k,ct),Tt===null?$e=qe:Tt.sibling=qe,Tt=qe);return yt&&$i(Z,ct),$e}for(qe=r(qe);ct<te.length;ct++)xt=ue(qe,Z,ct,te[ct],ve),xt!==null&&(t&&xt.alternate!==null&&qe.delete(xt.key===null?ct:xt.key),k=f(xt,k,ct),Tt===null?$e=xt:Tt.sibling=xt,Tt=xt);return t&&qe.forEach(function(Ka){return n(Z,Ka)}),yt&&$i(Z,ct),$e}function et(Z,k,te,ve){if(te==null)throw Error(s(151));for(var $e=null,Tt=null,qe=k,ct=k=0,xt=null,At=te.next();qe!==null&&!At.done;ct++,At=te.next()){qe.index>ct?(xt=qe,qe=null):xt=qe.sibling;var Ka=ce(Z,qe,At.value,ve);if(Ka===null){qe===null&&(qe=xt);break}t&&qe&&Ka.alternate===null&&n(Z,qe),k=f(Ka,k,ct),Tt===null?$e=Ka:Tt.sibling=Ka,Tt=Ka,qe=xt}if(At.done)return a(Z,qe),yt&&$i(Z,ct),$e;if(qe===null){for(;!At.done;ct++,At=te.next())At=_e(Z,At.value,ve),At!==null&&(k=f(At,k,ct),Tt===null?$e=At:Tt.sibling=At,Tt=At);return yt&&$i(Z,ct),$e}for(qe=r(qe);!At.done;ct++,At=te.next())At=ue(qe,Z,ct,At.value,ve),At!==null&&(t&&At.alternate!==null&&qe.delete(At.key===null?ct:At.key),k=f(At,k,ct),Tt===null?$e=At:Tt.sibling=At,Tt=At);return t&&qe.forEach(function(Cy){return n(Z,Cy)}),yt&&$i(Z,ct),$e}function Vt(Z,k,te,ve){if(typeof te=="object"&&te!==null&&te.type===w&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case S:e:{for(var $e=te.key;k!==null;){if(k.key===$e){if($e=te.type,$e===w){if(k.tag===7){a(Z,k.sibling),ve=u(k,te.props.children),ve.return=Z,Z=ve;break e}}else if(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===T&&_s($e)===k.type){a(Z,k.sibling),ve=u(k,te.props),il(ve,te),ve.return=Z,Z=ve;break e}a(Z,k);break}else n(Z,k);k=k.sibling}te.type===w?(ve=ps(te.props.children,Z.mode,ve,te.key),ve.return=Z,Z=ve):(ve=oo(te.type,te.key,te.props,null,Z.mode,ve),il(ve,te),ve.return=Z,Z=ve)}return v(Z);case A:e:{for($e=te.key;k!==null;){if(k.key===$e)if(k.tag===4&&k.stateNode.containerInfo===te.containerInfo&&k.stateNode.implementation===te.implementation){a(Z,k.sibling),ve=u(k,te.children||[]),ve.return=Z,Z=ve;break e}else{a(Z,k);break}else n(Z,k);k=k.sibling}ve=yu(te,Z.mode,ve),ve.return=Z,Z=ve}return v(Z);case T:return te=_s(te),Vt(Z,k,te,ve)}if(K(te))return Xe(Z,k,te,ve);if(J(te)){if($e=J(te),typeof $e!="function")throw Error(s(150));return te=$e.call(te),et(Z,k,te,ve)}if(typeof te.then=="function")return Vt(Z,k,go(te),ve);if(te.$$typeof===z)return Vt(Z,k,fo(Z,te),ve);xo(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,k!==null&&k.tag===6?(a(Z,k.sibling),ve=u(k,te),ve.return=Z,Z=ve):(a(Z,k),ve=_u(te,Z.mode,ve),ve.return=Z,Z=ve),v(Z)):a(Z,k)}return function(Z,k,te,ve){try{nl=0;var $e=Vt(Z,k,te,ve);return er=null,$e}catch(qe){if(qe===$s||qe===po)throw qe;var Tt=ei(29,qe,null,Z.mode);return Tt.lanes=ve,Tt.return=Z,Tt}finally{}}}var bs=jp(!0),Xp=jp(!1),La=!1;function Uu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(wt&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=lo(t),Cp(t,null,a),n}return ro(t,r,n,a),lo(t)}function al(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Zn(t,a)}}function Ou(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Pu=!1;function sl(){if(Pu){var t=Js;if(t!==null)throw t}}function rl(t,n,a,r){Pu=!1;var u=t.updateQueue;La=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var H=C,ie=H.next;H.next=null,v===null?f=ie:v.next=ie,v=H;var me=t.alternate;me!==null&&(me=me.updateQueue,C=me.lastBaseUpdate,C!==v&&(C===null?me.firstBaseUpdate=ie:C.next=ie,me.lastBaseUpdate=H))}if(f!==null){var _e=u.baseState;v=0,me=ie=H=null,C=f;do{var ce=C.lane&-536870913,ue=ce!==C.lane;if(ue?(gt&ce)===ce:(r&ce)===ce){ce!==0&&ce===Qs&&(Pu=!0),me!==null&&(me=me.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Xe=t,et=C;ce=n;var Vt=a;switch(et.tag){case 1:if(Xe=et.payload,typeof Xe=="function"){_e=Xe.call(Vt,_e,ce);break e}_e=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=et.payload,ce=typeof Xe=="function"?Xe.call(Vt,_e,ce):Xe,ce==null)break e;_e=y({},_e,ce);break e;case 2:La=!0}}ce=C.callback,ce!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[ce]:ue.push(ce))}else ue={lane:ce,tag:C.tag,payload:C.payload,callback:C.callback,next:null},me===null?(ie=me=ue,H=_e):me=me.next=ue,v|=ce;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ue=C,C=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);me===null&&(H=_e),u.baseState=H,u.firstBaseUpdate=ie,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),Ha|=v,t.lanes=v,t.memoizedState=_e}}function Wp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function qp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Wp(a[t],n)}var tr=U(null),vo=U(0);function Yp(t,n){t=ua,Me(vo,t),Me(tr,n),ua=t|n.baseLanes}function Iu(){Me(vo,ua),Me(tr,tr.current)}function Bu(){ua=vo.current,Y(tr),Y(vo)}var ti=U(null),hi=null;function Ia(t){var n=t.alternate;Me(cn,cn.current&1),Me(ti,t),hi===null&&(n===null||tr.current!==null||n.memoizedState!==null)&&(hi=t)}function Fu(t){Me(cn,cn.current),Me(ti,t),hi===null&&(hi=t)}function Zp(t){t.tag===22?(Me(cn,cn.current),Me(ti,t),hi===null&&(hi=t)):Ba()}function Ba(){Me(cn,cn.current),Me(ti,ti.current)}function ni(t){Y(ti),hi===t&&(hi=null),Y(cn)}var cn=U(0);function _o(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xf(a)||Wf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var na=0,ot=null,Ht=null,pn=null,yo=!1,nr=!1,Ss=!1,bo=0,ll=0,ir=null,v_=0;function an(){throw Error(s(321))}function zu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!$n(t[a],n[a]))return!1;return!0}function Hu(t,n,a,r,u,f){return na=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?Um:tf,Ss=!1,f=a(r,u),Ss=!1,nr&&(f=Qp(n,a,r,u)),Kp(t),f}function Kp(t){B.H=ul;var n=Ht!==null&&Ht.next!==null;if(na=0,pn=Ht=ot=null,yo=!1,ll=0,ir=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&uo(t)&&(mn=!0))}function Qp(t,n,a,r){ot=t;var u=0;do{if(nr&&(ir=null),ll=0,nr=!1,25<=u)throw Error(s(301));if(u+=1,pn=Ht=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Lm,f=n(a,r)}while(nr);return f}function __(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?ol(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(ot.flags|=1024),n}function Gu(){var t=bo!==0;return bo=0,t}function Vu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ku(t){if(yo){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}yo=!1}na=0,pn=Ht=ot=null,nr=!1,ll=bo=0,ir=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ot.memoizedState=pn=t:pn=pn.next=t,pn}function un(){if(Ht===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=pn===null?ot.memoizedState:pn.next;if(n!==null)pn=n,Ht=t;else{if(t===null)throw ot.alternate===null?Error(s(467)):Error(s(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},pn===null?ot.memoizedState=pn=t:pn=pn.next=t}return pn}function So(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ol(t){var n=ll;return ll+=1,ir===null&&(ir=[]),t=Gp(ir,t,n),n=ot,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Um:tf),t}function Mo(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ol(t);if(t.$$typeof===z)return An(t)}throw Error(s(438,String(t)))}function ju(t){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ot.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=So(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=q;return n.index++,a}function ia(t,n){return typeof n=="function"?n(t):n}function Eo(t){var n=un();return Xu(n,Ht,t)}function Xu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var C=v=null,H=null,ie=n,me=!1;do{var _e=ie.lane&-536870913;if(_e!==ie.lane?(gt&_e)===_e:(na&_e)===_e){var ce=ie.revertLane;if(ce===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),_e===Qs&&(me=!0);else if((na&ce)===ce){ie=ie.next,ce===Qs&&(me=!0);continue}else _e={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(C=H=_e,v=f):H=H.next=_e,ot.lanes|=ce,Ha|=ce;_e=ie.action,Ss&&a(f,_e),f=ie.hasEagerState?ie.eagerState:a(f,_e)}else ce={lane:_e,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(C=H=ce,v=f):H=H.next=ce,ot.lanes|=_e,Ha|=_e;ie=ie.next}while(ie!==null&&ie!==n);if(H===null?v=f:H.next=C,!$n(f,t.memoizedState)&&(mn=!0,me&&(a=Js,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=H,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Wu(t){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);$n(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Jp(t,n,a){var r=ot,u=un(),f=yt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!$n((Ht||u).memoizedState,a);if(v&&(u.memoizedState=a,mn=!0),u=u.queue,Zu(tm.bind(null,r,u,t),[t]),u.getSnapshot!==n||v||pn!==null&&pn.memoizedState.tag&1){if(r.flags|=2048,ar(9,{destroy:void 0},em.bind(null,r,u,a,n),null),jt===null)throw Error(s(349));f||(na&127)!==0||$p(r,n,a)}return a}function $p(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=So(),ot.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function em(t,n,a,r){n.value=a,n.getSnapshot=r,nm(n)&&im(t)}function tm(t,n,a){return a(function(){nm(n)&&im(t)})}function nm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!$n(t,a)}catch{return!0}}function im(t){var n=hs(t,2);n!==null&&jn(n,t,2)}function qu(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),Ss){Re(!0);try{a()}finally{Re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},n}function am(t,n,a,r){return t.baseState=a,Xu(t,Ht,typeof r=="function"?r:ia)}function y_(t,n,a,r,u){if(Ro(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};B.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,sm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function sm(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=B.T,v={};B.T=v;try{var C=a(u,r),H=B.S;H!==null&&H(v,C),rm(t,n,C)}catch(ie){Yu(t,n,ie)}finally{f!==null&&v.types!==null&&(f.types=v.types),B.T=f}}else try{f=a(u,r),rm(t,n,f)}catch(ie){Yu(t,n,ie)}}function rm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){lm(t,n,r)},function(r){return Yu(t,n,r)}):lm(t,n,a)}function lm(t,n,a){n.status="fulfilled",n.value=a,om(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,sm(t,a)))}function Yu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,om(n),n=n.next;while(n!==r)}t.action=null}function om(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function cm(t,n){return n}function um(t,n){if(yt){var a=jt.formState;if(a!==null){e:{var r=ot;if(yt){if(qt){t:{for(var u=qt,f=di;u.nodeType!==8;){if(!f){u=null;break t}if(u=pi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qt=pi(u.nextSibling),r=u.data==="F!";break e}}Da(r)}r=!1}r&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cm,lastRenderedState:n},a.queue=r,a=wm.bind(null,ot,r),r.dispatch=a,r=qu(!1),f=ef.bind(null,ot,!1,r.queue),r=Pn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=y_.bind(null,ot,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function fm(t){var n=un();return dm(n,Ht,t)}function dm(t,n,a){if(n=Xu(t,n,cm)[0],t=Eo(ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ol(n)}catch(v){throw v===$s?po:v}else r=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,ar(9,{destroy:void 0},b_.bind(null,u,a),null)),[r,f,t]}function b_(t,n){t.action=n}function hm(t){var n=un(),a=Ht;if(a!==null)return dm(n,a,t);un(),n=n.memoizedState,a=un();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ar(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ot.updateQueue,n===null&&(n=So(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function pm(){return un().memoizedState}function To(t,n,a,r){var u=Pn();ot.flags|=t,u.memoizedState=ar(1|n,{destroy:void 0},a,r===void 0?null:r)}function Ao(t,n,a,r){var u=un();r=r===void 0?null:r;var f=u.memoizedState.inst;Ht!==null&&r!==null&&zu(r,Ht.memoizedState.deps)?u.memoizedState=ar(n,f,a,r):(ot.flags|=t,u.memoizedState=ar(1|n,f,a,r))}function mm(t,n){To(8390656,8,t,n)}function Zu(t,n){Ao(2048,8,t,n)}function S_(t){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=So(),ot.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function gm(t){var n=un().memoizedState;return S_({ref:n,nextImpl:t}),function(){if((wt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function xm(t,n){return Ao(4,2,t,n)}function vm(t,n){return Ao(4,4,t,n)}function _m(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ym(t,n,a){a=a!=null?a.concat([t]):null,Ao(4,4,_m.bind(null,n,t),a)}function Ku(){}function bm(t,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&zu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Sm(t,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&zu(n,r[1]))return r[0];if(r=t(),Ss){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[r,n],r}function Qu(t,n,a){return a===void 0||(na&1073741824)!==0&&(gt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Mg(),ot.lanes|=t,Ha|=t,a)}function Mm(t,n,a,r){return $n(a,n)?a:tr.current!==null?(t=Qu(t,a,r),$n(t,n)||(mn=!0),t):(na&42)===0||(na&1073741824)!==0&&(gt&261930)===0?(mn=!0,t.memoizedState=a):(t=Mg(),ot.lanes|=t,Ha|=t,n)}function Em(t,n,a,r,u){var f=G.p;G.p=f!==0&&8>f?f:8;var v=B.T,C={};B.T=C,ef(t,!1,n,a);try{var H=u(),ie=B.S;if(ie!==null&&ie(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var me=x_(H,r);cl(t,n,me,si(t))}else cl(t,n,r,si(t))}catch(_e){cl(t,n,{then:function(){},status:"rejected",reason:_e},si())}finally{G.p=f,v!==null&&C.types!==null&&(v.types=C.types),B.T=v}}function M_(){}function Ju(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Tm(t).queue;Em(t,u,n,ee,a===null?M_:function(){return Am(t),a(r)})}function Tm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Am(t){var n=Tm(t);n.next===null&&(n=t.alternate.memoizedState),cl(t,n.next.queue,{},si())}function $u(){return An(Al)}function Rm(){return un().memoizedState}function Cm(){return un().memoizedState}function E_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();t=Oa(a);var r=Pa(n,t,a);r!==null&&(jn(r,n,a),al(r,n,a)),n={cache:Cu()},t.payload=n;return}n=n.return}}function T_(t,n,a){var r=si();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ro(t)?Nm(n,a):(a=xu(t,n,a,r),a!==null&&(jn(a,t,r),Dm(a,n,r)))}function wm(t,n,a){var r=si();cl(t,n,a,r)}function cl(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ro(t))Nm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,C=f(v,a);if(u.hasEagerState=!0,u.eagerState=C,$n(C,v))return ro(t,n,u,0),jt===null&&so(),!1}catch{}finally{}if(a=xu(t,n,u,r),a!==null)return jn(a,t,r),Dm(a,n,r),!0}return!1}function ef(t,n,a,r){if(r={lane:2,revertLane:Lf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ro(t)){if(n)throw Error(s(479))}else n=xu(t,a,r,2),n!==null&&jn(n,t,2)}function Ro(t){var n=t.alternate;return t===ot||n!==null&&n===ot}function Nm(t,n){nr=yo=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Dm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Zn(t,a)}}var ul={readContext:An,use:Mo,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};ul.useEffectEvent=an;var Um={readContext:An,use:Mo,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:mm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,To(4194308,4,_m.bind(null,n,t),a)},useLayoutEffect:function(t,n){return To(4194308,4,t,n)},useInsertionEffect:function(t,n){To(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var r=t();if(Ss){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Pn();if(a!==void 0){var u=a(n);if(Ss){Re(!0);try{a(n)}finally{Re(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=T_.bind(null,ot,t),[r.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=qu(t);var n=t.queue,a=wm.bind(null,ot,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ku,useDeferredValue:function(t,n){var a=Pn();return Qu(a,t,n)},useTransition:function(){var t=qu(!1);return t=Em.bind(null,ot,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ot,u=Pn();if(yt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),jt===null)throw Error(s(349));(gt&127)!==0||$p(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,mm(tm.bind(null,r,f,t),[t]),r.flags|=2048,ar(9,{destroy:void 0},em.bind(null,r,f,a,n),null),a},useId:function(){var t=Pn(),n=jt.identifierPrefix;if(yt){var a=Pi,r=Oi;a=(r&~(1<<32-Fe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=bo++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=v_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:$u,useFormState:um,useActionState:um,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ef.bind(null,ot,!0,a),a.dispatch=n,[t,n]},useMemoCache:ju,useCacheRefresh:function(){return Pn().memoizedState=E_.bind(null,ot)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((wt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},tf={readContext:An,use:Mo,useCallback:bm,useContext:An,useEffect:Zu,useImperativeHandle:ym,useInsertionEffect:xm,useLayoutEffect:vm,useMemo:Sm,useReducer:Eo,useRef:pm,useState:function(){return Eo(ia)},useDebugValue:Ku,useDeferredValue:function(t,n){var a=un();return Mm(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Eo(ia)[0],n=un().memoizedState;return[typeof t=="boolean"?t:ol(t),n]},useSyncExternalStore:Jp,useId:Rm,useHostTransitionStatus:$u,useFormState:fm,useActionState:fm,useOptimistic:function(t,n){var a=un();return am(a,Ht,t,n)},useMemoCache:ju,useCacheRefresh:Cm};tf.useEffectEvent=gm;var Lm={readContext:An,use:Mo,useCallback:bm,useContext:An,useEffect:Zu,useImperativeHandle:ym,useInsertionEffect:xm,useLayoutEffect:vm,useMemo:Sm,useReducer:Wu,useRef:pm,useState:function(){return Wu(ia)},useDebugValue:Ku,useDeferredValue:function(t,n){var a=un();return Ht===null?Qu(a,t,n):Mm(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Wu(ia)[0],n=un().memoizedState;return[typeof t=="boolean"?t:ol(t),n]},useSyncExternalStore:Jp,useId:Rm,useHostTransitionStatus:$u,useFormState:hm,useActionState:hm,useOptimistic:function(t,n){var a=un();return Ht!==null?am(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ju,useCacheRefresh:Cm};Lm.useEffectEvent=gm;function nf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:y({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var af={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=si(),u=Oa(r);u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,r),n!==null&&(jn(n,t,r),al(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=si(),u=Oa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,r),n!==null&&(jn(n,t,r),al(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=si(),r=Oa(a);r.tag=2,n!=null&&(r.callback=n),n=Pa(t,r,a),n!==null&&(jn(n,t,a),al(n,t,a))}};function Om(t,n,a,r,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!Kr(a,r)||!Kr(u,f):!0}function Pm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&af.enqueueReplaceState(n,n.state,null)}function Ms(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=y({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Im(t){ao(t)}function Bm(t){console.error(t)}function Fm(t){ao(t)}function Co(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function zm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function sf(t,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Co(t,n)},a}function Hm(t){return t=Oa(t),t.tag=3,t}function Gm(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){zm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){zm(n,a,r),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})})}function A_(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?Ho():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===mo?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Nf(t,r,u)),!1;case 22:return a.flags|=65536,r===mo?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Nf(t,r,u)),!1}throw Error(s(435,a.tag))}return Nf(t,r,u),Ho(),!1}if(yt)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Mu&&(t=Error(s(422),{cause:r}),$r(ci(t,a)))):(r!==Mu&&(n=Error(s(423),{cause:r}),$r(ci(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=ci(r,a),u=sf(t.stateNode,r,u),Ou(t,u),sn!==4&&(sn=2)),!1;var f=Error(s(520),{cause:r});if(f=ci(f,a),vl===null?vl=[f]:vl.push(f),sn!==4&&(sn=2),n===null)return!0;r=ci(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=sf(a.stateNode,r,t),Ou(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Hm(u),Gm(u,t,a,r),Ou(a,u),!1}a=a.return}while(a!==null);return!1}var rf=Error(s(461)),mn=!1;function Rn(t,n,a,r){n.child=t===null?Xp(n,null,a,r):bs(n,t.child,a,r)}function Vm(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var C in r)C!=="ref"&&(v[C]=r[C])}else v=r;return xs(n),r=Hu(t,n,a,v,f,u),C=Gu(),t!==null&&!mn?(Vu(t,n,u),aa(t,n,u)):(yt&&C&&bu(n),n.flags|=1,Rn(t,n,r,u),n.child)}function km(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!vu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,jm(t,n,f,r,u)):(t=oo(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!pf(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Kr,a(v,r)&&t.ref===n.ref)return aa(t,n,u)}return n.flags|=1,t=Ji(f,r),t.ref=n.ref,t.return=n,n.child=t}function jm(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(Kr(f,r)&&t.ref===n.ref)if(mn=!1,n.pendingProps=r=f,pf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,aa(t,n,u)}return lf(t,n,a,r,u)}function Xm(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Wm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ho(n,f!==null?f.cachePool:null),f!==null?Yp(n,f):Iu(),Zp(n);else return r=n.lanes=536870912,Wm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ho(n,f.cachePool),Yp(n,f),Ba(),n.memoizedState=null):(t!==null&&ho(n,null),Iu(),Ba());return Rn(t,n,u,a),n.child}function fl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Wm(t,n,a,r,u){var f=Nu();return f=f===null?null:{parent:hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&ho(n,null),Iu(),Zp(n),t!==null&&Ks(t,n,r,!0),n.childLanes=u,null}function wo(t,n){return n=Do({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function qm(t,n,a){return bs(n,t.child,null,a),t=wo(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function R_(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(yt){if(r.mode==="hidden")return t=wo(n,r),n.lanes=536870912,fl(null,t);if(Fu(n),(t=qt)?(t=s0(t,di),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Np(t),a.return=n,n.child=a,Tn=n,qt=null)):t=null,t===null)throw Da(n);return n.lanes=536870912,null}return wo(n,r)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Fu(n),u)if(n.flags&256)n.flags&=-257,n=qm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||Ks(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(r=jt,r!==null&&(v=Kn(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,hs(t,v),jn(r,t,v),rf;Ho(),n=qm(t,n,a)}else t=f.treeContext,qt=pi(v.nextSibling),Tn=n,yt=!0,Na=null,di=!1,t!==null&&Lp(n,t),n=wo(n,r),n.flags|=4096;return n}return t=Ji(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function No(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function lf(t,n,a,r,u){return xs(n),a=Hu(t,n,a,r,void 0,u),r=Gu(),t!==null&&!mn?(Vu(t,n,u),aa(t,n,u)):(yt&&r&&bu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function Ym(t,n,a,r,u,f){return xs(n),n.updateQueue=null,a=Qp(n,r,a,u),Kp(t),r=Gu(),t!==null&&!mn?(Vu(t,n,f),aa(t,n,f)):(yt&&r&&bu(n),n.flags|=1,Rn(t,n,a,f),n.child)}function Zm(t,n,a,r,u){if(xs(n),n.stateNode===null){var f=Ws,v=a.contextType;typeof v=="object"&&v!==null&&(f=An(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=af,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Uu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?An(v):Ws,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(nf(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&af.enqueueReplaceState(f,f.state,null),rl(n,r,f,u),sl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var C=n.memoizedProps,H=Ms(a,C);f.props=H;var ie=f.context,me=a.contextType;v=Ws,typeof me=="object"&&me!==null&&(v=An(me));var _e=a.getDerivedStateFromProps;me=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||ie!==v)&&Pm(n,f,r,v),La=!1;var ce=n.memoizedState;f.state=ce,rl(n,r,f,u),sl(),ie=n.memoizedState,C||ce!==ie||La?(typeof _e=="function"&&(nf(n,a,_e,r),ie=n.memoizedState),(H=La||Om(n,a,H,r,ce,ie,v))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ie),f.props=r,f.state=ie,f.context=v,r=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Lu(t,n),v=n.memoizedProps,me=Ms(a,v),f.props=me,_e=n.pendingProps,ce=f.context,ie=a.contextType,H=Ws,typeof ie=="object"&&ie!==null&&(H=An(ie)),C=a.getDerivedStateFromProps,(ie=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==_e||ce!==H)&&Pm(n,f,r,H),La=!1,ce=n.memoizedState,f.state=ce,rl(n,r,f,u),sl();var ue=n.memoizedState;v!==_e||ce!==ue||La||t!==null&&t.dependencies!==null&&uo(t.dependencies)?(typeof C=="function"&&(nf(n,a,C,r),ue=n.memoizedState),(me=La||Om(n,a,me,r,ce,ue,H)||t!==null&&t.dependencies!==null&&uo(t.dependencies))?(ie||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ue,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ue,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ue),f.props=r,f.state=ue,f.context=H,r=me):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,No(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=bs(n,t.child,null,u),n.child=bs(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=aa(t,n,u),t}function Km(t,n,a,r){return ms(),n.flags|=256,Rn(t,n,a,r),n.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cf(t){return{baseLanes:t,cachePool:zp()}}function uf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function Qm(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(yt){if(u?Ia(n):Ba(),(t=qt)?(t=s0(t,di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Np(t),a.return=n,n.child=a,Tn=n,qt=null)):t=null,t===null)throw Da(n);return Wf(t)?n.lanes=32:n.lanes=536870912,null}var C=r.children;return r=r.fallback,u?(Ba(),u=n.mode,C=Do({mode:"hidden",children:C},u),r=ps(r,u,a,null),C.return=n,r.return=n,C.sibling=r,n.child=C,r=n.child,r.memoizedState=cf(a),r.childLanes=uf(t,v,a),n.memoizedState=of,fl(null,r)):(Ia(n),ff(n,C))}var H=t.memoizedState;if(H!==null&&(C=H.dehydrated,C!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=df(t,n,a)):n.memoizedState!==null?(Ba(),n.child=t.child,n.flags|=128,n=null):(Ba(),C=r.fallback,u=n.mode,r=Do({mode:"visible",children:r.children},u),C=ps(C,u,a,null),C.flags|=2,r.return=n,C.return=n,r.sibling=C,n.child=r,bs(n,t.child,null,a),r=n.child,r.memoizedState=cf(a),r.childLanes=uf(t,v,a),n.memoizedState=of,n=fl(null,r));else if(Ia(n),Wf(C)){if(v=C.nextSibling&&C.nextSibling.dataset,v)var ie=v.dgst;v=ie,r=Error(s(419)),r.stack="",r.digest=v,$r({value:r,source:null,stack:null}),n=df(t,n,a)}else if(mn||Ks(t,n,a,!1),v=(a&t.childLanes)!==0,mn||v){if(v=jt,v!==null&&(r=Kn(v,a),r!==0&&r!==H.retryLane))throw H.retryLane=r,hs(t,r),jn(v,t,r),rf;Xf(C)||Ho(),n=df(t,n,a)}else Xf(C)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,qt=pi(C.nextSibling),Tn=n,yt=!0,Na=null,di=!1,t!==null&&Lp(n,t),n=ff(n,r.children),n.flags|=4096);return n}return u?(Ba(),C=r.fallback,u=n.mode,H=t.child,ie=H.sibling,r=Ji(H,{mode:"hidden",children:r.children}),r.subtreeFlags=H.subtreeFlags&65011712,ie!==null?C=Ji(ie,C):(C=ps(C,u,a,null),C.flags|=2),C.return=n,r.return=n,r.sibling=C,n.child=r,fl(null,r),r=n.child,C=t.child.memoizedState,C===null?C=cf(a):(u=C.cachePool,u!==null?(H=hn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=zp(),C={baseLanes:C.baseLanes|a,cachePool:u}),r.memoizedState=C,r.childLanes=uf(t,v,a),n.memoizedState=of,fl(t.child,r)):(Ia(n),a=t.child,t=a.sibling,a=Ji(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function ff(t,n){return n=Do({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Do(t,n){return t=ei(22,t,null,n),t.lanes=0,t}function df(t,n,a){return bs(n,t.child,null,a),t=ff(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Jm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Au(t.return,n,a)}function hf(t,n,a,r,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function $m(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=cn.current,C=(v&2)!==0;if(C?(v=v&1|2,n.flags|=128):v&=1,Me(cn,v),Rn(t,n,r,a),r=yt?Jr:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jm(t,a,n);else if(t.tag===19)Jm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&_o(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),hf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&_o(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}hf(n,!0,a,null,f,r);break;case"together":hf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function aa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ks(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ji(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ji(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function pf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&uo(t)))}function C_(t,n,a){switch(n.tag){case 3:Se(n,n.stateNode.containerInfo),Ua(n,hn,t.memoizedState.cache),ms();break;case 27:case 5:nt(n);break;case 4:Se(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Fu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Qm(t,n,a):(Ia(n),t=aa(t,n,a),t!==null?t.sibling:null);Ia(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ks(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return $m(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Me(cn,cn.current),r)break;return null;case 22:return n.lanes=0,Xm(t,n,a,n.pendingProps);case 24:Ua(n,hn,t.memoizedState.cache)}return aa(t,n,a)}function eg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!pf(t,a)&&(n.flags&128)===0)return mn=!1,C_(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,yt&&(n.flags&1048576)!==0&&Up(n,Jr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(t=_s(n.elementType),n.type=t,typeof t=="function")vu(t)?(r=Ms(t,r),n.tag=1,n=Zm(null,n,t,r,a)):(n.tag=0,n=lf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=Vm(null,n,t,r,a);break e}else if(u===I){n.tag=14,n=km(null,n,t,r,a);break e}}throw n=fe(t)||t,Error(s(306,n,""))}}return n;case 0:return lf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ms(r,n.pendingProps),Zm(t,n,r,u,a);case 3:e:{if(Se(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Lu(t,n),rl(n,r,null,a);var v=n.memoizedState;if(r=v.cache,Ua(n,hn,r),r!==f.cache&&Ru(n,[hn],a,!0),sl(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Km(t,n,r,a);break e}else if(r!==u){u=ci(Error(s(424)),n),$r(u),n=Km(t,n,r,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qt=pi(t.firstChild),Tn=n,yt=!0,Na=null,di=!0,a=Xp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ms(),r===u){n=aa(t,n,a);break e}Rn(t,n,r,a)}n=n.child}return n;case 26:return No(t,n),t===null?(a=f0(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,t=n.pendingProps,r=qo(re.current).createElement(a),r[fn]=n,r[En]=t,Cn(r,a,t),dn(r),n.stateNode=r):n.memoizedState=f0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&yt&&(r=n.stateNode=o0(n.type,n.pendingProps,re.current),Tn=n,di=!0,u=qt,Xa(n.type)?(qf=u,qt=pi(r.firstChild)):qt=u),Rn(t,n,n.pendingProps.children,a),No(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&yt&&((u=r=qt)&&(r=ay(r,n.type,n.pendingProps,di),r!==null?(n.stateNode=r,Tn=n,qt=pi(r.firstChild),di=!1,u=!0):u=!1),u||Da(n)),nt(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,r=f.children,Vf(u,f)?r=null:v!==null&&Vf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Hu(t,n,__,null,null,a),Al._currentValue=u),No(t,n),Rn(t,n,r,a),n.child;case 6:return t===null&&yt&&((t=a=qt)&&(a=sy(a,n.pendingProps,di),a!==null?(n.stateNode=a,Tn=n,qt=null,t=!0):t=!1),t||Da(n)),null;case 13:return Qm(t,n,a);case 4:return Se(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=bs(n,null,r,a):Rn(t,n,r,a),n.child;case 11:return Vm(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ua(n,n.type,r.value),Rn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,xs(n),u=An(u),r=r(u),n.flags|=1,Rn(t,n,r,a),n.child;case 14:return km(t,n,n.type,n.pendingProps,a);case 15:return jm(t,n,n.type,n.pendingProps,a);case 19:return $m(t,n,a);case 31:return R_(t,n,a);case 22:return Xm(t,n,a,n.pendingProps);case 24:return xs(n),r=An(hn),t===null?(u=Nu(),u===null&&(u=jt,f=Cu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Uu(n),Ua(n,hn,u)):((t.lanes&a)!==0&&(Lu(t,n),rl(n,null,null,a),sl()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ua(n,hn,r)):(r=f.cache,Ua(n,hn,r),r!==u.cache&&Ru(n,[hn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function sa(t){t.flags|=4}function mf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Rg())t.flags|=8192;else throw ys=mo,Du}else t.flags&=-16777217}function tg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!g0(n))if(Rg())t.flags|=8192;else throw ys=mo,Du}function Uo(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?be():536870912,t.lanes|=n,or|=n)}function dl(t,n){if(!yt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function w_(t,n,a){var r=n.pendingProps;switch(Su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ta(hn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zs(n)?sa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Eu())),Yt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(sa(n),f!==null?(Yt(n),tg(n,f)):(Yt(n),mf(n,u,null,r,a))):f?f!==t.memoizedState?(sa(n),Yt(n),tg(n,f)):(Yt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&sa(n),Yt(n),mf(n,u,t,r,a)),null;case 27:if(Ke(n),a=re.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&sa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Yt(n),null}t=Ce.current,Zs(n)?Op(n):(t=o0(u,r,a),n.stateNode=t,sa(n))}return Yt(n),null;case 5:if(Ke(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&sa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Yt(n),null}if(f=Ce.current,Zs(n))Op(n);else{var v=qo(re.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[fn]=n,f[En]=r;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Cn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&sa(n)}}return Yt(n),mf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&sa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=re.current,Zs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Qg(t.nodeValue,a)),t||Da(n,!0)}else t=qo(t).createTextNode(r),t[fn]=n,n.stateNode=t}return Yt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Zs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[fn]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),t=!1}else a=Eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Yt(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Zs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[fn]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),u=!1}else u=Eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Uo(n,n.updateQueue),Yt(n),null);case 4:return He(),t===null&&Bf(n.stateNode.containerInfo),Yt(n),null;case 10:return ta(n.type),Yt(n),null;case 19:if(Y(cn),r=n.memoizedState,r===null)return Yt(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)dl(r,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=_o(t),f!==null){for(n.flags|=128,dl(r,!1),t=f.updateQueue,n.updateQueue=t,Uo(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)wp(a,t),a=a.sibling;return Me(cn,cn.current&1|2),yt&&$i(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&zt()>Bo&&(n.flags|=128,u=!0,dl(r,!1),n.lanes=4194304)}else{if(!u)if(t=_o(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Uo(n,t),dl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!yt)return Yt(n),null}else 2*zt()-r.renderingStartTime>Bo&&a!==536870912&&(n.flags|=128,u=!0,dl(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=zt(),t.sibling=null,a=cn.current,Me(cn,u?a&1|2:a&1),yt&&$i(n,r.treeForkCount),t):(Yt(n),null);case 22:case 23:return ni(n),Bu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&Uo(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Y(vs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(hn),Yt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function N_(t,n){switch(Su(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ta(hn),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ke(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y(cn),null;case 4:return He(),null;case 10:return ta(n.type),null;case 22:case 23:return ni(n),Bu(),t!==null&&Y(vs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ta(hn),null;case 25:return null;default:return null}}function ng(t,n){switch(Su(n),n.tag){case 3:ta(hn),He();break;case 26:case 27:case 5:Ke(n);break;case 4:He();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:Y(cn);break;case 10:ta(n.type);break;case 22:case 23:ni(n),Bu(),t!==null&&Y(vs);break;case 24:ta(hn)}}function hl(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(C){Bt(n,n.return,C)}}function Fa(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var v=r.inst,C=v.destroy;if(C!==void 0){v.destroy=void 0,u=n;var H=a,ie=C;try{ie()}catch(me){Bt(u,H,me)}}}r=r.next}while(r!==f)}}catch(me){Bt(n,n.return,me)}}function ig(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{qp(n,a)}catch(r){Bt(t,t.return,r)}}}function ag(t,n,a){a.props=Ms(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Bt(t,n,r)}}function pl(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){Bt(t,n,u)}}function Ii(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Bt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(t,n,u)}else a.current=null}function sg(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Bt(t,t.return,u)}}function gf(t,n,a){try{var r=t.stateNode;J_(r,t.type,a,n),r[En]=n}catch(u){Bt(t,t.return,u)}}function rg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Xa(t.type)||t.tag===4}function xf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Xa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki));else if(r!==4&&(r===27&&Xa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(vf(t,n,a),t=t.sibling;t!==null;)vf(t,n,a),t=t.sibling}function Lo(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Xa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Lo(t,n,a),t=t.sibling;t!==null;)Lo(t,n,a),t=t.sibling}function lg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,r,a),n[fn]=t,n[En]=a}catch(f){Bt(t,t.return,f)}}var ra=!1,gn=!1,_f=!1,og=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function D_(t,n){if(t=t.containerInfo,Hf=ec,t=yp(t),fu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,C=-1,H=-1,ie=0,me=0,_e=t,ce=null;t:for(;;){for(var ue;_e!==a||u!==0&&_e.nodeType!==3||(C=v+u),_e!==f||r!==0&&_e.nodeType!==3||(H=v+r),_e.nodeType===3&&(v+=_e.nodeValue.length),(ue=_e.firstChild)!==null;)ce=_e,_e=ue;for(;;){if(_e===t)break t;if(ce===a&&++ie===u&&(C=v),ce===f&&++me===r&&(H=v),(ue=_e.nextSibling)!==null)break;_e=ce,ce=_e.parentNode}_e=ue}a=C===-1||H===-1?null:{start:C,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gf={focusedElem:t,selectionRange:a},ec=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Xe=Ms(a.type,u);t=r.getSnapshotBeforeUpdate(Xe,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(et){Bt(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)jf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":jf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function cg(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:oa(t,a),r&4&&hl(5,a);break;case 1:if(oa(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Bt(a,a.return,v)}else{var u=Ms(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Bt(a,a.return,v)}}r&64&&ig(a),r&512&&pl(a,a.return);break;case 3:if(oa(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{qp(t,n)}catch(v){Bt(a,a.return,v)}}break;case 27:n===null&&r&4&&lg(a);case 26:case 5:oa(t,a),n===null&&r&4&&sg(a),r&512&&pl(a,a.return);break;case 12:oa(t,a);break;case 31:oa(t,a),r&4&&dg(t,a);break;case 13:oa(t,a),r&4&&hg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=H_.bind(null,a),ry(t,a))));break;case 22:if(r=a.memoizedState!==null||ra,!r){n=n!==null&&n.memoizedState!==null||gn,u=ra;var f=gn;ra=r,(gn=n)&&!f?ca(t,a,(a.subtreeFlags&8772)!==0):oa(t,a),ra=u,gn=f}break;case 30:break;default:oa(t,a)}}function ug(t){var n=t.alternate;n!==null&&(t.alternate=null,ug(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ta(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Hn=!1;function la(t,n,a){for(a=a.child;a!==null;)fg(t,n,a),a=a.sibling}function fg(t,n,a){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(de,a)}catch{}switch(a.tag){case 26:gn||Ii(a,n),la(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||Ii(a,n);var r=Jt,u=Hn;Xa(a.type)&&(Jt=a.stateNode,Hn=!1),la(t,n,a),Ml(a.stateNode),Jt=r,Hn=u;break;case 5:gn||Ii(a,n);case 6:if(r=Jt,u=Hn,Jt=null,la(t,n,a),Jt=r,Hn=u,Jt!==null)if(Hn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:Jt!==null&&(Hn?(t=Jt,i0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),gr(t)):i0(Jt,a.stateNode));break;case 4:r=Jt,u=Hn,Jt=a.stateNode.containerInfo,Hn=!0,la(t,n,a),Jt=r,Hn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),gn||Fa(4,a,n),la(t,n,a);break;case 1:gn||(Ii(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&ag(a,n,r)),la(t,n,a);break;case 21:la(t,n,a);break;case 22:gn=(r=gn)||a.memoizedState!==null,la(t,n,a),gn=r;break;default:la(t,n,a)}}function dg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{gr(t)}catch(a){Bt(n,n.return,a)}}}function hg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gr(t)}catch(a){Bt(n,n.return,a)}}function U_(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new og),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new og),n;default:throw Error(s(435,t.tag))}}function Oo(t,n){var a=U_(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=G_.bind(null,t,r);r.then(u,u)}})}function Gn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,v=n,C=v;e:for(;C!==null;){switch(C.tag){case 27:if(Xa(C.type)){Jt=C.stateNode,Hn=!1;break e}break;case 5:Jt=C.stateNode,Hn=!1;break e;case 3:case 4:Jt=C.stateNode.containerInfo,Hn=!0;break e}C=C.return}if(Jt===null)throw Error(s(160));fg(f,v,u),Jt=null,Hn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)pg(n,t),n=n.sibling}var Ei=null;function pg(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Vn(t),r&4&&(Fa(3,t,t.return),hl(3,t),Fa(5,t,t.return));break;case 1:Gn(n,t),Vn(t),r&512&&(gn||a===null||Ii(a,a.return)),r&64&&ra&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ei;if(Gn(n,t),Vn(t),r&512&&(gn||a===null||Ii(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){e:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ea]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,r,a),f[fn]=t,dn(f),r=f;break e;case"link":var v=p0("link","href",u).get(r+(a.href||""));if(v){for(var C=0;C<v.length;C++)if(f=v[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(C,1);break t}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;case"meta":if(v=p0("meta","content",u).get(r+(a.content||""))){for(C=0;C<v.length;C++)if(f=v[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(C,1);break t}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[fn]=t,dn(f),r=f}t.stateNode=r}else m0(u,t.type,t.stateNode);else t.stateNode=h0(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?m0(u,t.type,t.stateNode):h0(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&gf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,t),Vn(t),r&512&&(gn||a===null||Ii(a,a.return)),a!==null&&r&4&&gf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,t),Vn(t),r&512&&(gn||a===null||Ii(a,a.return)),t.flags&32){u=t.stateNode;try{Jn(u,"")}catch(Xe){Bt(t,t.return,Xe)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,gf(t,u,a!==null?a.memoizedProps:u)),r&1024&&(_f=!0);break;case 6:if(Gn(n,t),Vn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Xe){Bt(t,t.return,Xe)}}break;case 3:if(Ko=null,u=Ei,Ei=Yo(n.containerInfo),Gn(n,t),Ei=u,Vn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{gr(n.containerInfo)}catch(Xe){Bt(t,t.return,Xe)}_f&&(_f=!1,mg(t));break;case 4:r=Ei,Ei=Yo(t.stateNode.containerInfo),Gn(n,t),Vn(t),Ei=r;break;case 12:Gn(n,t),Vn(t);break;case 31:Gn(n,t),Vn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Oo(t,r)));break;case 13:Gn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Io=zt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Oo(t,r)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ie=ra,me=gn;if(ra=ie||u,gn=me||H,Gn(n,t),gn=me,ra=ie,Vn(t),r&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ra||gn||Es(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{C=H.stateNode;var _e=H.memoizedProps.style,ce=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;C.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(Xe){Bt(H,H.return,Xe)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Xe){Bt(H,H.return,Xe)}}}else if(n.tag===18){if(a===null){H=n;try{var ue=H.stateNode;u?a0(ue,!0):a0(H.stateNode,!1)}catch(Xe){Bt(H,H.return,Xe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Oo(t,a))));break;case 19:Gn(n,t),Vn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Oo(t,r)));break;case 30:break;case 21:break;default:Gn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(rg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=xf(t);Lo(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Jn(v,""),a.flags&=-33);var C=xf(t);Lo(t,C,v);break;case 3:case 4:var H=a.stateNode.containerInfo,ie=xf(t);vf(t,ie,H);break;default:throw Error(s(161))}}catch(me){Bt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function mg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function oa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)cg(t,n.alternate,n),n=n.sibling}function Es(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),Es(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ag(n,n.return,a),Es(n);break;case 27:Ml(n.stateNode);case 26:case 5:Ii(n,n.return),Es(n);break;case 22:n.memoizedState===null&&Es(n);break;case 30:Es(n);break;default:Es(n)}t=t.sibling}}function ca(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ca(u,f,a),hl(4,f);break;case 1:if(ca(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Bt(r,r.return,ie)}if(r=f,u=r.updateQueue,u!==null){var C=r.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Wp(H[u],C)}catch(ie){Bt(r,r.return,ie)}}a&&v&64&&ig(f),pl(f,f.return);break;case 27:lg(f);case 26:case 5:ca(u,f,a),a&&r===null&&v&4&&sg(f),pl(f,f.return);break;case 12:ca(u,f,a);break;case 31:ca(u,f,a),a&&v&4&&dg(u,f);break;case 13:ca(u,f,a),a&&v&4&&hg(u,f);break;case 22:f.memoizedState===null&&ca(u,f,a),pl(f,f.return);break;case 30:break;default:ca(u,f,a)}n=n.sibling}}function yf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&el(a))}function bf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&el(t))}function Ti(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)gg(t,n,a,r),n=n.sibling}function gg(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,r),u&2048&&hl(9,n);break;case 1:Ti(t,n,a,r);break;case 3:Ti(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&el(t)));break;case 12:if(u&2048){Ti(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,C=f.onPostCommit;typeof C=="function"&&C(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Bt(n,n.return,H)}}else Ti(t,n,a,r);break;case 31:Ti(t,n,a,r);break;case 13:Ti(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(t,n,a,r):ml(t,n):f._visibility&2?Ti(t,n,a,r):(f._visibility|=2,sr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&yf(v,n);break;case 24:Ti(t,n,a,r),u&2048&&bf(n.alternate,n);break;default:Ti(t,n,a,r)}}function sr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,C=a,H=r,ie=v.flags;switch(v.tag){case 0:case 11:case 15:sr(f,v,C,H,u),hl(8,v);break;case 23:break;case 22:var me=v.stateNode;v.memoizedState!==null?me._visibility&2?sr(f,v,C,H,u):ml(f,v):(me._visibility|=2,sr(f,v,C,H,u)),u&&ie&2048&&yf(v.alternate,v);break;case 24:sr(f,v,C,H,u),u&&ie&2048&&bf(v.alternate,v);break;default:sr(f,v,C,H,u)}n=n.sibling}}function ml(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:ml(a,r),u&2048&&yf(r.alternate,r);break;case 24:ml(a,r),u&2048&&bf(r.alternate,r);break;default:ml(a,r)}n=n.sibling}}var gl=8192;function rr(t,n,a){if(t.subtreeFlags&gl)for(t=t.child;t!==null;)xg(t,n,a),t=t.sibling}function xg(t,n,a){switch(t.tag){case 26:rr(t,n,a),t.flags&gl&&t.memoizedState!==null&&vy(a,Ei,t.memoizedState,t.memoizedProps);break;case 5:rr(t,n,a);break;case 3:case 4:var r=Ei;Ei=Yo(t.stateNode.containerInfo),rr(t,n,a),Ei=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=gl,gl=16777216,rr(t,n,a),gl=r):rr(t,n,a));break;default:rr(t,n,a)}}function vg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function xl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,yg(r,t)}vg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_g(t),t=t.sibling}function _g(t){switch(t.tag){case 0:case 11:case 15:xl(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:xl(t);break;case 12:xl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Po(t)):xl(t);break;default:xl(t)}}function Po(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,yg(r,t)}vg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Po(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Po(n));break;default:Po(n)}t=t.sibling}}function yg(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:el(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Sn=r;else e:for(a=t;Sn!==null;){r=Sn;var u=r.sibling,f=r.return;if(ug(r),r===a){Sn=null;break e}if(u!==null){u.return=f,Sn=u;break e}Sn=f}}}var L_={getCacheForType:function(t){var n=An(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(hn).controller.signal}},O_=typeof WeakMap=="function"?WeakMap:Map,wt=0,jt=null,pt=null,gt=0,It=0,ii=null,za=!1,lr=!1,Sf=!1,ua=0,sn=0,Ha=0,Ts=0,Mf=0,ai=0,or=0,vl=null,kn=null,Ef=!1,Io=0,bg=0,Bo=1/0,Fo=null,Ga=null,_n=0,Va=null,cr=null,fa=0,Tf=0,Af=null,Sg=null,_l=0,Rf=null;function si(){return(wt&2)!==0&&gt!==0?gt&-gt:B.T!==null?Lf():Vr()}function Mg(){if(ai===0)if((gt&536870912)===0||yt){var t=it;it<<=1,(it&3932160)===0&&(it=262144),ai=t}else ai=536870912;return t=ti.current,t!==null&&(t.flags|=32),ai}function jn(t,n,a){(t===jt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(ur(t,0),ka(t,gt,ai,!1)),Ve(t,a),((wt&2)===0||t!==jt)&&(t===jt&&((wt&2)===0&&(Ts|=a),sn===4&&ka(t,gt,ai,!1)),Bi(t))}function Eg(t,n,a){if((wt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),u=r?B_(t,n):wf(t,n,!0),f=r;do{if(u===0){lr&&!r&&ka(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!P_(a)){u=wf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var C=t;u=vl;var H=C.current.memoizedState.isDehydrated;if(H&&(ur(C,v).flags|=256),v=wf(C,v,!1),v!==2){if(Sf&&!H){C.errorRecoveryDisabledLanes|=f,Ts|=f,u=4;break e}f=kn,kn=u,f!==null&&(kn===null?kn=f:kn.push.apply(kn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){ur(t,0),ka(t,n,0,!0);break}e:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(r,n,ai,!za);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Io+300-zt(),10<u)){if(ka(r,n,ai,!za),xe(r,0,!0)!==0)break e;fa=n,r.timeoutHandle=t0(Tg.bind(null,r,a,kn,Fo,Ef,n,ai,Ts,or,za,f,"Throttled",-0,0),u);break e}Tg(r,a,kn,Fo,Ef,n,ai,Ts,or,za,f,null,-0,0)}}break}while(!0);Bi(t)}function Tg(t,n,a,r,u,f,v,C,H,ie,me,_e,ce,ue){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},xg(n,f,_e);var Xe=(f&62914560)===f?Io-zt():(f&4194048)===f?bg-zt():0;if(Xe=_y(_e,Xe),Xe!==null){fa=f,t.cancelPendingCommit=Xe(Lg.bind(null,t,n,f,a,r,u,v,C,H,me,_e,null,ce,ue)),ka(t,f,v,!ie);return}}Lg(t,n,f,a,r,u,v,C,H)}function P_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,a,r){n&=~Mf,n&=~Ts,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Fe(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&Ut(t,a,n)}function zo(){return(wt&6)===0?(yl(0),!1):!0}function Cf(){if(pt!==null){if(It===0)var t=pt.return;else t=pt,ea=gs=null,ku(t),er=null,nl=0,t=pt;for(;t!==null;)ng(t.alternate,t),t=t.return;pt=null}}function ur(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ty(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),fa=0,Cf(),jt=t,pt=a=Ji(t.current,null),gt=n,It=0,ii=null,za=!1,lr=we(t,n),Sf=!1,or=ai=Mf=Ts=Ha=sn=0,kn=vl=null,Ef=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Fe(r),f=1<<u;n|=t[u],r&=~f}return ua=n,so(),a}function Ag(t,n){ot=null,B.H=ul,n===$s||n===po?(n=Vp(),It=3):n===Du?(n=Vp(),It=4):It=n===rf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,pt===null&&(sn=1,Co(t,ci(n,t.current)))}function Rg(){var t=ti.current;return t===null?!0:(gt&4194048)===gt?hi===null:(gt&62914560)===gt||(gt&536870912)!==0?t===hi:!1}function Cg(){var t=B.H;return B.H=ul,t===null?ul:t}function wg(){var t=B.A;return B.A=L_,t}function Ho(){sn=4,za||(gt&4194048)!==gt&&ti.current!==null||(lr=!0),(Ha&134217727)===0&&(Ts&134217727)===0||jt===null||ka(jt,gt,ai,!1)}function wf(t,n,a){var r=wt;wt|=2;var u=Cg(),f=wg();(jt!==t||gt!==n)&&(Fo=null,ur(t,n)),n=!1;var v=sn;e:do try{if(It!==0&&pt!==null){var C=pt,H=ii;switch(It){case 8:Cf(),v=6;break e;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var ie=It;if(It=0,ii=null,fr(t,C,H,ie),a&&lr){v=0;break e}break;default:ie=It,It=0,ii=null,fr(t,C,H,ie)}}I_(),v=sn;break}catch(me){Ag(t,me)}while(!0);return n&&t.shellSuspendCounter++,ea=gs=null,wt=r,B.H=u,B.A=f,pt===null&&(jt=null,gt=0,so()),v}function I_(){for(;pt!==null;)Ng(pt)}function B_(t,n){var a=wt;wt|=2;var r=Cg(),u=wg();jt!==t||gt!==n?(Fo=null,Bo=zt()+500,ur(t,n)):lr=we(t,n);e:do try{if(It!==0&&pt!==null){n=pt;var f=ii;t:switch(It){case 1:It=0,ii=null,fr(t,n,f,1);break;case 2:case 9:if(Hp(f)){It=0,ii=null,Dg(n);break}n=function(){It!==2&&It!==9||jt!==t||(It=7),Bi(t)},f.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:Hp(f)?(It=0,ii=null,Dg(n)):(It=0,ii=null,fr(t,n,f,7));break;case 5:var v=null;switch(pt.tag){case 26:v=pt.memoizedState;case 5:case 27:var C=pt;if(v?g0(v):C.stateNode.complete){It=0,ii=null;var H=C.sibling;if(H!==null)pt=H;else{var ie=C.return;ie!==null?(pt=ie,Go(ie)):pt=null}break t}}It=0,ii=null,fr(t,n,f,5);break;case 6:It=0,ii=null,fr(t,n,f,6);break;case 8:Cf(),sn=6;break e;default:throw Error(s(462))}}F_();break}catch(me){Ag(t,me)}while(!0);return ea=gs=null,B.H=r,B.A=u,wt=a,pt!==null?0:(jt=null,gt=0,so(),sn)}function F_(){for(;pt!==null&&!nn();)Ng(pt)}function Ng(t){var n=eg(t.alternate,t,ua);t.memoizedProps=t.pendingProps,n===null?Go(t):pt=n}function Dg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Ym(a,n,n.pendingProps,n.type,void 0,gt);break;case 11:n=Ym(a,n,n.pendingProps,n.type.render,n.ref,gt);break;case 5:ku(n);default:ng(a,n),n=pt=wp(n,ua),n=eg(a,n,ua)}t.memoizedProps=t.pendingProps,n===null?Go(t):pt=n}function fr(t,n,a,r){ea=gs=null,ku(n),er=null,nl=0;var u=n.return;try{if(A_(t,u,n,a,gt)){sn=1,Co(t,ci(a,t.current)),pt=null;return}}catch(f){if(u!==null)throw pt=u,f;sn=1,Co(t,ci(a,t.current)),pt=null;return}n.flags&32768?(yt||r===1?t=!0:lr||(gt&536870912)!==0?t=!1:(za=t=!0,(r===2||r===9||r===3||r===6)&&(r=ti.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ug(n,t)):Go(n)}function Go(t){var n=t;do{if((n.flags&32768)!==0){Ug(n,za);return}t=n.return;var a=w_(n.alternate,n,ua);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=t}while(n!==null);sn===0&&(sn=5)}function Ug(t,n){do{var a=N_(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);sn=6,pt=null}function Lg(t,n,a,r,u,f,v,C,H){t.cancelPendingCommit=null;do Vo();while(_n!==0);if((wt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=gu,Zt(t,a,f,v,C,H),t===jt&&(pt=jt=null,gt=0),cr=n,Va=t,fa=a,Tf=f,Af=u,Sg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,V_(Q,function(){return Fg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null,u=G.p,G.p=2,v=wt,wt|=4;try{D_(t,n,a)}finally{wt=v,G.p=u,B.T=r}}_n=1,Og(),Pg(),Ig()}}function Og(){if(_n===1){_n=0;var t=Va,n=cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var r=G.p;G.p=2;var u=wt;wt|=4;try{pg(n,t);var f=Gf,v=yp(t.containerInfo),C=f.focusedElem,H=f.selectionRange;if(v!==C&&C&&C.ownerDocument&&_p(C.ownerDocument.documentElement,C)){if(H!==null&&fu(C)){var ie=H.start,me=H.end;if(me===void 0&&(me=ie),"selectionStart"in C)C.selectionStart=ie,C.selectionEnd=Math.min(me,C.value.length);else{var _e=C.ownerDocument||document,ce=_e&&_e.defaultView||window;if(ce.getSelection){var ue=ce.getSelection(),Xe=C.textContent.length,et=Math.min(H.start,Xe),Vt=H.end===void 0?et:Math.min(H.end,Xe);!ue.extend&&et>Vt&&(v=Vt,Vt=et,et=v);var Z=vp(C,et),k=vp(C,Vt);if(Z&&k&&(ue.rangeCount!==1||ue.anchorNode!==Z.node||ue.anchorOffset!==Z.offset||ue.focusNode!==k.node||ue.focusOffset!==k.offset)){var te=_e.createRange();te.setStart(Z.node,Z.offset),ue.removeAllRanges(),et>Vt?(ue.addRange(te),ue.extend(k.node,k.offset)):(te.setEnd(k.node,k.offset),ue.addRange(te))}}}}for(_e=[],ue=C;ue=ue.parentNode;)ue.nodeType===1&&_e.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<_e.length;C++){var ve=_e[C];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}ec=!!Hf,Gf=Hf=null}finally{wt=u,G.p=r,B.T=a}}t.current=n,_n=2}}function Pg(){if(_n===2){_n=0;var t=Va,n=cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var r=G.p;G.p=2;var u=wt;wt|=4;try{cg(t,n.alternate,n)}finally{wt=u,G.p=r,B.T=a}}_n=3}}function Ig(){if(_n===4||_n===3){_n=0,W();var t=Va,n=cr,a=fa,r=Sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,cr=Va=null,Bg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ga=null),Gr(a),n=n.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(de,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=B.T,u=G.p,G.p=2,B.T=null;try{for(var f=t.onRecoverableError,v=0;v<r.length;v++){var C=r[v];f(C.value,{componentStack:C.stack})}}finally{B.T=n,G.p=u}}(fa&3)!==0&&Vo(),Bi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Rf?_l++:(_l=0,Rf=t):_l=0,yl(0)}}function Bg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,el(n)))}function Vo(){return Og(),Pg(),Ig(),Fg()}function Fg(){if(_n!==5)return!1;var t=Va,n=Tf;Tf=0;var a=Gr(fa),r=B.T,u=G.p;try{G.p=32>a?32:a,B.T=null,a=Af,Af=null;var f=Va,v=fa;if(_n=0,cr=Va=null,fa=0,(wt&6)!==0)throw Error(s(331));var C=wt;if(wt|=4,_g(f.current),gg(f,f.current,v,a),wt=C,yl(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(de,f)}catch{}return!0}finally{G.p=u,B.T=r,Bg(t,n)}}function zg(t,n,a){n=ci(a,n),n=sf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(Ve(t,2),Bi(t))}function Bt(t,n,a){if(t.tag===3)zg(t,t,a);else for(;n!==null;){if(n.tag===3){zg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ga===null||!Ga.has(r))){t=ci(a,t),a=Hm(2),r=Pa(n,a,2),r!==null&&(Gm(a,r,n,t),Ve(r,2),Bi(r));break}}n=n.return}}function Nf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new O_;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Sf=!0,u.add(a),t=z_.bind(null,t,n,a),n.then(t,t))}function z_(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(gt&a)===a&&(sn===4||sn===3&&(gt&62914560)===gt&&300>zt()-Io?(wt&2)===0&&ur(t,0):Mf|=a,or===gt&&(or=0)),Bi(t)}function Hg(t,n){n===0&&(n=be()),t=hs(t,n),t!==null&&(Ve(t,n),Bi(t))}function H_(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Hg(t,a)}function G_(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Hg(t,a)}function V_(t,n){return on(t,n)}var ko=null,dr=null,Df=!1,jo=!1,Uf=!1,ja=0;function Bi(t){t!==dr&&t.next===null&&(dr===null?ko=dr=t:dr=dr.next=t),jo=!0,Df||(Df=!0,j_())}function yl(t,n){if(!Uf&&jo){Uf=!0;do for(var a=!1,r=ko;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,C=r.pingedLanes;f=(1<<31-Fe(42|t)+1)-1,f&=u&~(v&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,jg(r,f))}else f=gt,f=xe(r,r===jt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||we(r,f)||(a=!0,jg(r,f));r=r.next}while(a);Uf=!1}}function k_(){Gg()}function Gg(){jo=Df=!1;var t=0;ja!==0&&ey()&&(t=ja);for(var n=zt(),a=null,r=ko;r!==null;){var u=r.next,f=Vg(r,n);f===0?(r.next=null,a===null?ko=u:a.next=u,u===null&&(dr=a)):(a=r,(t!==0||(f&3)!==0)&&(jo=!0)),r=u}_n!==0&&_n!==5||yl(t),ja!==0&&(ja=0)}function Vg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Fe(f),C=1<<v,H=u[v];H===-1?((C&a)===0||(C&r)!==0)&&(u[v]=Be(C,n)):H<=n&&(t.expiredLanes|=C),f&=~C}if(n=jt,a=gt,a=xe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Xt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Xt(r),Gr(a)){case 2:case 8:a=E;break;case 32:a=Q;break;case 268435456:a=he;break;default:a=Q}return r=kg.bind(null,t),a=on(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Xt(r),t.callbackPriority=2,t.callbackNode=null,2}function kg(t,n){if(_n!==0&&_n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Vo()&&t.callbackNode!==a)return null;var r=gt;return r=xe(t,t===jt?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Eg(t,r,n),Vg(t,zt()),t.callbackNode!=null&&t.callbackNode===a?kg.bind(null,t):null)}function jg(t,n){if(Vo())return null;Eg(t,n,!0)}function j_(){ny(function(){(wt&6)!==0?on(D,k_):Gg()})}function Lf(){if(ja===0){var t=Qs;t===0&&(t=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),ja=t}return ja}function Xg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:cs(""+t)}function Wg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function X_(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Xg((u[En]||null).action),v=r.submitter;v&&(n=(n=v[En]||null)?Xg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var C=new to("action","action",null,r,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ja!==0){var H=v?Wg(u,v):new FormData(u);Ju(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(C.preventDefault(),H=v?Wg(u,v):new FormData(u),Ju(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Of=0;Of<mu.length;Of++){var Pf=mu[Of],W_=Pf.toLowerCase(),q_=Pf[0].toUpperCase()+Pf.slice(1);Mi(W_,"on"+q_)}Mi(Mp,"onAnimationEnd"),Mi(Ep,"onAnimationIteration"),Mi(Tp,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(c_,"onTransitionRun"),Mi(u_,"onTransitionStart"),Mi(f_,"onTransitionCancel"),Mi(Ap,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),X("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),X("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),X("onBeforeInput",["compositionend","keypress","textInput","paste"]),X("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));function qg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var C=r[v],H=C.instance,ie=C.currentTarget;if(C=C.listener,H!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ie;try{f(u)}catch(me){ao(me)}u.currentTarget=null,f=H}else for(v=0;v<r.length;v++){if(C=r[v],H=C.instance,ie=C.currentTarget,C=C.listener,H!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ie;try{f(u)}catch(me){ao(me)}u.currentTarget=null,f=H}}}}function mt(t,n){var a=n[rs];a===void 0&&(a=n[rs]=new Set);var r=t+"__bubble";a.has(r)||(Yg(n,t,2,!1),a.add(r))}function If(t,n,a){var r=0;n&&(r|=4),Yg(a,t,r,n)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function Bf(t){if(!t[Xo]){t[Xo]=!0,Ql.forEach(function(a){a!=="selectionchange"&&(Y_.has(a)||If(a,!1,t),If(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Xo]||(n[Xo]=!0,If("selectionchange",!1,n))}}function Yg(t,n,a,r){switch(M0(n)){case 2:var u=Sy;break;case 8:u=My;break;default:u=Jf}a=u.bind(null,n,a,t),u=void 0,!nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Ff(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var C=r.stateNode.containerInfo;if(C===u)break;if(v===4)for(v=r.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;C!==null;){if(v=Yi(C),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){r=f=v;continue e}C=C.parentNode}}r=r.return}$h(function(){var ie=f,me=eu(a),_e=[];e:{var ce=Rp.get(t);if(ce!==void 0){var ue=to,Xe=t;switch(t){case"keypress":if($l(a)===0)break e;case"keydown":case"keyup":ue=Gv;break;case"focusin":Xe="focus",ue=ru;break;case"focusout":Xe="blur",ue=ru;break;case"beforeblur":case"afterblur":ue=ru;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=jv;break;case Mp:case Ep:case Tp:ue=Uv;break;case Ap:ue=Wv;break;case"scroll":case"scrollend":ue=Rv;break;case"wheel":ue=Yv;break;case"copy":case"cut":case"paste":ue=Ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=ap;break;case"toggle":case"beforetoggle":ue=Kv}var et=(n&4)!==0,Vt=!et&&(t==="scroll"||t==="scrollend"),Z=et?ce!==null?ce+"Capture":null:ce;et=[];for(var k=ie,te;k!==null;){var ve=k;if(te=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||te===null||Z===null||(ve=kr(k,Z),ve!=null&&et.push(Sl(k,ve,te))),Vt)break;k=k.return}0<et.length&&(ce=new ue(ce,Xe,null,a,me),_e.push({event:ce,listeners:et}))}}if((n&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",ce&&a!==$c&&(Xe=a.relatedTarget||a.fromElement)&&(Yi(Xe)||Xe[Fn]))break e;if((ue||ce)&&(ce=me.window===me?me:(ce=me.ownerDocument)?ce.defaultView||ce.parentWindow:window,ue?(Xe=a.relatedTarget||a.toElement,ue=ie,Xe=Xe?Yi(Xe):null,Xe!==null&&(Vt=c(Xe),et=Xe.tag,Xe!==Vt||et!==5&&et!==27&&et!==6)&&(Xe=null)):(ue=null,Xe=ie),ue!==Xe)){if(et=np,ve="onMouseLeave",Z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(et=ap,ve="onPointerLeave",Z="onPointerEnter",k="pointer"),Vt=ue==null?ce:os(ue),te=Xe==null?ce:os(Xe),ce=new et(ve,k+"leave",ue,a,me),ce.target=Vt,ce.relatedTarget=te,ve=null,Yi(me)===ie&&(et=new et(Z,k+"enter",Xe,a,me),et.target=te,et.relatedTarget=Vt,ve=et),Vt=ve,ue&&Xe)t:{for(et=Z_,Z=ue,k=Xe,te=0,ve=Z;ve;ve=et(ve))te++;ve=0;for(var $e=k;$e;$e=et($e))ve++;for(;0<te-ve;)Z=et(Z),te--;for(;0<ve-te;)k=et(k),ve--;for(;te--;){if(Z===k||k!==null&&Z===k.alternate){et=Z;break t}Z=et(Z),k=et(k)}et=null}else et=null;ue!==null&&Zg(_e,ce,ue,et,!1),Xe!==null&&Vt!==null&&Zg(_e,Vt,Xe,et,!0)}}e:{if(ce=ie?os(ie):window,ue=ce.nodeName&&ce.nodeName.toLowerCase(),ue==="select"||ue==="input"&&ce.type==="file")var Tt=dp;else if(up(ce))if(hp)Tt=r_;else{Tt=a_;var qe=i_}else ue=ce.nodeName,!ue||ue.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?ie&&Dt(ie.elementType)&&(Tt=dp):Tt=s_;if(Tt&&(Tt=Tt(t,ie))){fp(_e,Tt,a,me);break e}qe&&qe(t,ce,ie),t==="focusout"&&ie&&ce.type==="number"&&ie.memoizedProps.value!=null&&ht(ce,"number",ce.value)}switch(qe=ie?os(ie):window,t){case"focusin":(up(qe)||qe.contentEditable==="true")&&(ks=qe,du=ie,Qr=null);break;case"focusout":Qr=du=ks=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,bp(_e,a,me);break;case"selectionchange":if(o_)break;case"keydown":case"keyup":bp(_e,a,me)}var ct;if(ou)e:{switch(t){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Vs?op(t,a)&&(xt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(sp&&a.locale!=="ko"&&(Vs||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Vs&&(ct=ep()):(Ca=me,iu="value"in Ca?Ca.value:Ca.textContent,Vs=!0)),qe=Wo(ie,xt),0<qe.length&&(xt=new ip(xt,t,null,a,me),_e.push({event:xt,listeners:qe}),ct?xt.data=ct:(ct=cp(a),ct!==null&&(xt.data=ct)))),(ct=Jv?$v(t,a):e_(t,a))&&(xt=Wo(ie,"onBeforeInput"),0<xt.length&&(qe=new ip("onBeforeInput","beforeinput",null,a,me),_e.push({event:qe,listeners:xt}),qe.data=ct)),X_(_e,t,ie,a,me)}qg(_e,n)})}function Sl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Wo(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=kr(t,a),u!=null&&r.unshift(Sl(t,u,f)),u=kr(t,n),u!=null&&r.push(Sl(t,u,f))),t.tag===3)return r;t=t.return}return[]}function Z_(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Zg(t,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var C=a,H=C.alternate,ie=C.stateNode;if(C=C.tag,H!==null&&H===r)break;C!==5&&C!==26&&C!==27||ie===null||(H=ie,u?(ie=kr(a,f),ie!=null&&v.unshift(Sl(a,ie,H))):u||(ie=kr(a,f),ie!=null&&v.push(Sl(a,ie,H)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var K_=/\r\n?/g,Q_=/\u0000|\uFFFD/g;function Kg(t){return(typeof t=="string"?t:""+t).replace(K_,`
`).replace(Q_,"")}function Qg(t,n){return n=Kg(n),Kg(t)===n}function Gt(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Jn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Jn(t,""+r);break;case"className":je(t,"class",r);break;case"tabIndex":je(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":je(t,a,r);break;case"style":Si(t,r,f);break;case"data":if(n!=="object"){je(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=cs(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(t,n,"name",u.name,u,null),Gt(t,n,"formEncType",u.formEncType,u,null),Gt(t,n,"formMethod",u.formMethod,u,null),Gt(t,n,"formTarget",u.formTarget,u,null)):(Gt(t,n,"encType",u.encType,u,null),Gt(t,n,"method",u.method,u,null),Gt(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=cs(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Ki);break;case"onScroll":r!=null&&mt("scroll",t);break;case"onScrollEnd":r!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=cs(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Ue(t,"popover",r);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ue(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Li.get(a)||a,Ue(t,a,r))}}function zf(t,n,a,r,u,f){switch(a){case"style":Si(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Jn(t,r):(typeof r=="number"||typeof r=="bigint")&&Jn(t,""+r);break;case"onScroll":r!=null&&mt("scroll",t);break;case"onScrollEnd":r!=null&&mt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break e}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ue(t,a,r)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(t,n,f,v,a,null)}}u&&Gt(t,n,"srcSet",a.srcSet,a,null),r&&Gt(t,n,"src",a.src,a,null);return;case"input":mt("invalid",t);var C=f=v=u=null,H=null,ie=null;for(r in a)if(a.hasOwnProperty(r)){var me=a[r];if(me!=null)switch(r){case"name":u=me;break;case"type":v=me;break;case"checked":H=me;break;case"defaultChecked":ie=me;break;case"value":f=me;break;case"defaultValue":C=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:Gt(t,n,r,me,a,null)}}Nn(t,f,C,H,ie,v,u,!1);return;case"select":mt("invalid",t),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":v=C;break;case"multiple":r=C;default:Gt(t,n,u,C,a,null)}n=f,a=v,t.multiple=!!r,n!=null?vn(t,!!r,n,!1):a!=null&&vn(t,!!r,a,!0);return;case"textarea":mt("invalid",t),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(C=a[v],C!=null))switch(v){case"value":r=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Gt(t,n,v,C,a,null)}bi(t,r,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(r=a[H],r!=null))switch(H){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Gt(t,n,H,r,a,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(r=0;r<bl.length;r++)mt(bl[r],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(r=a[ie],r!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(t,n,ie,r,a,null)}return;default:if(Dt(n)){for(me in a)a.hasOwnProperty(me)&&(r=a[me],r!==void 0&&zf(t,n,me,r,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(r=a[C],r!=null&&Gt(t,n,C,r,a,null))}function J_(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,C=null,H=null,ie=null,me=null;for(ue in a){var _e=a[ue];if(a.hasOwnProperty(ue)&&_e!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":H=_e;default:r.hasOwnProperty(ue)||Gt(t,n,ue,null,r,_e)}}for(var ce in r){var ue=r[ce];if(_e=a[ce],r.hasOwnProperty(ce)&&(ue!=null||_e!=null))switch(ce){case"type":f=ue;break;case"name":u=ue;break;case"checked":ie=ue;break;case"defaultChecked":me=ue;break;case"value":v=ue;break;case"defaultValue":C=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:ue!==_e&&Gt(t,n,ce,ue,r,_e)}}ze(t,v,C,H,ie,me,f,u);return;case"select":ue=v=C=ce=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ue=H;default:r.hasOwnProperty(f)||Gt(t,n,f,null,r,H)}for(u in r)if(f=r[u],H=a[u],r.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":ce=f;break;case"defaultValue":C=f;break;case"multiple":v=f;default:f!==H&&Gt(t,n,u,f,r,H)}n=C,a=v,r=ue,ce!=null?vn(t,!!a,ce,!1):!!r!=!!a&&(n!=null?vn(t,!!a,n,!0):vn(t,!!a,a?[]:"",!1));return;case"textarea":ue=ce=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!r.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Gt(t,n,C,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":ce=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Gt(t,n,v,u,r,f)}Qn(t,ce,ue);return;case"option":for(var Xe in a)if(ce=a[Xe],a.hasOwnProperty(Xe)&&ce!=null&&!r.hasOwnProperty(Xe))switch(Xe){case"selected":t.selected=!1;break;default:Gt(t,n,Xe,null,r,ce)}for(H in r)if(ce=r[H],ue=a[H],r.hasOwnProperty(H)&&ce!==ue&&(ce!=null||ue!=null))switch(H){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Gt(t,n,H,ce,r,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)ce=a[et],a.hasOwnProperty(et)&&ce!=null&&!r.hasOwnProperty(et)&&Gt(t,n,et,null,r,ce);for(ie in r)if(ce=r[ie],ue=a[ie],r.hasOwnProperty(ie)&&ce!==ue&&(ce!=null||ue!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:Gt(t,n,ie,ce,r,ue)}return;default:if(Dt(n)){for(var Vt in a)ce=a[Vt],a.hasOwnProperty(Vt)&&ce!==void 0&&!r.hasOwnProperty(Vt)&&zf(t,n,Vt,void 0,r,ce);for(me in r)ce=r[me],ue=a[me],!r.hasOwnProperty(me)||ce===ue||ce===void 0&&ue===void 0||zf(t,n,me,ce,r,ue);return}}for(var Z in a)ce=a[Z],a.hasOwnProperty(Z)&&ce!=null&&!r.hasOwnProperty(Z)&&Gt(t,n,Z,null,r,ce);for(_e in r)ce=r[_e],ue=a[_e],!r.hasOwnProperty(_e)||ce===ue||ce==null&&ue==null||Gt(t,n,_e,ce,r,ue)}function Jg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $_(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,C=u.duration;if(f&&C&&Jg(v)){for(v=0,C=u.responseEnd,r+=1;r<a.length;r++){var H=a[r],ie=H.startTime;if(ie>C)break;var me=H.transferSize,_e=H.initiatorType;me&&Jg(_e)&&(H=H.responseEnd,v+=me*(H<C?1:(C-ie)/(H-ie)))}if(--r,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Hf=null,Gf=null;function qo(t){return t.nodeType===9?t:t.ownerDocument}function $g(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kf=null;function ey(){var t=window.event;return t&&t.type==="popstate"?t===kf?!1:(kf=t,!0):(kf=null,!1)}var t0=typeof setTimeout=="function"?setTimeout:void 0,ty=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(t){return n0.resolve(null).then(t).catch(iy)}:t0;function iy(t){setTimeout(function(){throw t})}function Xa(t){return t==="head"}function i0(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),gr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Ml(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ml(a);for(var f=a.firstChild;f;){var v=f.nextSibling,C=f.nodeName;f[Ea]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Ml(t.ownerDocument.body);a=u}while(a);gr(n)}function a0(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function jf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jf(a),Ta(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ay(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ea])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function sy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=pi(t.nextSibling),t===null))return null;return t}function s0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=pi(t.nextSibling),t===null))return null;return t}function Xf(t){return t.data==="$?"||t.data==="$~"}function Wf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ry(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function pi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var qf=null;function r0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return pi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function l0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function o0(t,n,a){switch(n=qo(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ml(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ta(t)}var mi=new Map,c0=new Set;function Yo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var da=G.d;G.d={f:ly,r:oy,D:cy,C:uy,L:fy,m:dy,X:py,S:hy,M:my};function ly(){var t=da.f(),n=zo();return t||n}function oy(t){var n=Zi(t);n!==null&&n.tag===5&&n.type==="form"?Am(n):da.r(t)}var hr=typeof document>"u"?null:document;function u0(t,n,a){var r=hr;if(r&&typeof n=="string"&&n){var u=Ot(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),c0.has(u)||(c0.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Cn(n,"link",t),dn(n),r.head.appendChild(n)))}}function cy(t){da.D(t),u0("dns-prefetch",t,null)}function uy(t,n){da.C(t,n),u0("preconnect",t,n)}function fy(t,n,a){da.L(t,n,a);var r=hr;if(r&&t&&n){var u='link[rel="preload"][as="'+Ot(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ot(a.imageSizes)+'"]')):u+='[href="'+Ot(t)+'"]';var f=u;switch(n){case"style":f=pr(t);break;case"script":f=mr(t)}mi.has(f)||(t=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),mi.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(El(f))||n==="script"&&r.querySelector(Tl(f))||(n=r.createElement("link"),Cn(n,"link",t),dn(n),r.head.appendChild(n)))}}function dy(t,n){da.m(t,n);var a=hr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ot(r)+'"][href="'+Ot(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=mr(t)}if(!mi.has(f)&&(t=y({rel:"modulepreload",href:t},n),mi.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Tl(f)))return}r=a.createElement("link"),Cn(r,"link",t),dn(r),a.head.appendChild(r)}}}function hy(t,n,a){da.S(t,n,a);var r=hr;if(r&&t){var u=Aa(r).hoistableStyles,f=pr(t);n=n||"default";var v=u.get(f);if(!v){var C={loading:0,preload:null};if(v=r.querySelector(El(f)))C.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":n},a),(a=mi.get(f))&&Yf(t,a);var H=v=r.createElement("link");dn(H),Cn(H,"link",t),H._p=new Promise(function(ie,me){H.onload=ie,H.onerror=me}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Zo(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:C},u.set(f,v)}}}function py(t,n){da.X(t,n);var a=hr;if(a&&t){var r=Aa(a).hoistableScripts,u=mr(t),f=r.get(u);f||(f=a.querySelector(Tl(u)),f||(t=y({src:t,async:!0},n),(n=mi.get(u))&&Zf(t,n),f=a.createElement("script"),dn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function my(t,n){da.M(t,n);var a=hr;if(a&&t){var r=Aa(a).hoistableScripts,u=mr(t),f=r.get(u);f||(f=a.querySelector(Tl(u)),f||(t=y({src:t,async:!0,type:"module"},n),(n=mi.get(u))&&Zf(t,n),f=a.createElement("script"),dn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function f0(t,n,a,r){var u=(u=re.current)?Yo(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=pr(a.href),a=Aa(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=pr(a.href);var f=Aa(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(El(t)))&&!f._p&&(v.instance=f,v.state.loading=5),mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(t,a),f||gy(u,t,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mr(a),a=Aa(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function pr(t){return'href="'+Ot(t)+'"'}function El(t){return'link[rel="stylesheet"]['+t+"]"}function d0(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function gy(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Cn(n,"link",a),dn(n),t.head.appendChild(n))}function mr(t){return'[src="'+Ot(t)+'"]'}function Tl(t){return"script[async]"+t}function h0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(r)return n.instance=r,dn(r),r;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),dn(r),Cn(r,"style",u),Zo(r,a.precedence,t),n.instance=r;case"stylesheet":u=pr(a.href);var f=t.querySelector(El(u));if(f)return n.state.loading|=4,n.instance=f,dn(f),f;r=d0(a),(u=mi.get(u))&&Yf(r,u),f=(t.ownerDocument||t).createElement("link"),dn(f);var v=f;return v._p=new Promise(function(C,H){v.onload=C,v.onerror=H}),Cn(f,"link",r),n.state.loading|=4,Zo(f,a.precedence,t),n.instance=f;case"script":return f=mr(a.src),(u=t.querySelector(Tl(f)))?(n.instance=u,dn(u),u):(r=a,(u=mi.get(f))&&(r=y({},a),Zf(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),dn(u),Cn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Zo(r,a.precedence,t));return n.instance}function Zo(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var C=r[v];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Yf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ko=null;function p0(t,n,a){if(Ko===null){var r=new Map,u=Ko=new Map;u.set(a,r)}else u=Ko,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ea]||f[fn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var C=r.get(v);C?C.push(f):r.set(v,[f])}}return r}function m0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function xy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function g0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function vy(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=pr(r.href),f=n.querySelector(El(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Qo.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,dn(f);return}f=n.ownerDocument||n,r=d0(r),(u=mi.get(u))&&Yf(r,u),f=f.createElement("link"),dn(f);var v=f;v._p=new Promise(function(C,H){v.onload=C,v.onerror=H}),Cn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Qo.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Kf=0;function _y(t,n){return t.stylesheets&&t.count===0&&$o(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&$o(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Kf===0&&(Kf=62500*$_());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$o(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Kf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Qo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$o(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Jo=null;function $o(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Jo=new Map,n.forEach(yy,t),Jo=null,Qo.call(t))}function yy(t,n){if(!(n.state.loading&4)){var a=Jo.get(t);if(a)var r=a.get(null);else{a=new Map,Jo.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=Qo.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Al={$$typeof:z,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function by(t,n,a,r,u,f,v,C,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=We(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=We(0),this.hiddenUpdates=We(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function x0(t,n,a,r,u,f,v,C,H,ie,me,_e){return t=new by(t,n,a,v,H,ie,me,_e,C),n=1,f===!0&&(n|=24),f=ei(3,null,null,n),t.current=f,f.stateNode=t,n=Cu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Uu(f),t}function v0(t){return t?(t=Ws,t):Ws}function _0(t,n,a,r,u,f){u=v0(u),r.context===null?r.context=u:r.pendingContext=u,r=Oa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Pa(t,r,n),a!==null&&(jn(a,t,n),al(a,t,n))}function y0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Qf(t,n){y0(t,n),(t=t.alternate)&&y0(t,n)}function b0(t){if(t.tag===13||t.tag===31){var n=hs(t,67108864);n!==null&&jn(n,t,67108864),Qf(t,67108864)}}function S0(t){if(t.tag===13||t.tag===31){var n=si();n=Hr(n);var a=hs(t,n);a!==null&&jn(a,t,n),Qf(t,n)}}var ec=!0;function Sy(t,n,a,r){var u=B.T;B.T=null;var f=G.p;try{G.p=2,Jf(t,n,a,r)}finally{G.p=f,B.T=u}}function My(t,n,a,r){var u=B.T;B.T=null;var f=G.p;try{G.p=8,Jf(t,n,a,r)}finally{G.p=f,B.T=u}}function Jf(t,n,a,r){if(ec){var u=$f(r);if(u===null)Ff(t,n,r,tc,a),E0(t,r);else if(Ty(u,t,n,a,r))r.stopPropagation();else if(E0(t,r),n&4&&-1<Ey.indexOf(t)){for(;u!==null;){var f=Zi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ae(f.pendingLanes);if(v!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;v;){var H=1<<31-Fe(v);C.entanglements[1]|=H,v&=~H}Bi(f),(wt&6)===0&&(Bo=zt()+500,yl(0))}}break;case 31:case 13:C=hs(f,2),C!==null&&jn(C,f,2),zo(),Qf(f,2)}if(f=$f(r),f===null&&Ff(t,n,r,tc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Ff(t,n,r,null,a)}}function $f(t){return t=eu(t),ed(t)}var tc=null;function ed(t){if(tc=null,t=Yi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=m(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return tc=t,null}function M0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case D:return 2;case E:return 8;case Q:case le:return 32;case he:return 268435456;default:return 32}default:return 32}}var td=!1,Wa=null,qa=null,Ya=null,Rl=new Map,Cl=new Map,Za=[],Ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function E0(t,n){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Rl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cl.delete(n.pointerId)}}function wl(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Zi(n),n!==null&&b0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Ty(t,n,a,r,u){switch(n){case"focusin":return Wa=wl(Wa,t,n,a,r,u),!0;case"dragenter":return qa=wl(qa,t,n,a,r,u),!0;case"mouseover":return Ya=wl(Ya,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Rl.set(f,wl(Rl.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Cl.set(f,wl(Cl.get(f)||null,t,n,a,r,u)),!0}return!1}function T0(t){var n=Yi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,zs(t.priority,function(){S0(a)});return}}else if(n===31){if(n=m(a),n!==null){t.blockedOn=n,zs(t.priority,function(){S0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=$f(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);$c=r,a.target.dispatchEvent(r),$c=null}else return n=Zi(a),n!==null&&b0(n),t.blockedOn=a,!1;n.shift()}return!0}function A0(t,n,a){nc(t)&&a.delete(n)}function Ay(){td=!1,Wa!==null&&nc(Wa)&&(Wa=null),qa!==null&&nc(qa)&&(qa=null),Ya!==null&&nc(Ya)&&(Ya=null),Rl.forEach(A0),Cl.forEach(A0)}function ic(t,n){t.blockedOn===n&&(t.blockedOn=null,td||(td=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Ay)))}var ac=null;function R0(t){ac!==t&&(ac=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){ac===t&&(ac=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(ed(r||a)===null)continue;break}var f=Zi(a);f!==null&&(t.splice(n,3),n-=3,Ju(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function gr(t){function n(H){return ic(H,t)}Wa!==null&&ic(Wa,t),qa!==null&&ic(qa,t),Ya!==null&&ic(Ya,t),Rl.forEach(n),Cl.forEach(n);for(var a=0;a<Za.length;a++){var r=Za[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)T0(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[En]||null;if(typeof f=="function")v||R0(a);else if(v){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[En]||null)C=v.formAction;else if(ed(u)!==null)continue}else C=v.action;typeof C=="function"?a[r+1]=C:(a.splice(r,3),r-=3),R0(a)}}}function C0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function nd(t){this._internalRoot=t}sc.prototype.render=nd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=si();_0(a,r,t,n,null,null)},sc.prototype.unmount=nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;_0(t.current,2,null,t,null,null),zo(),n[Fn]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Vr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&T0(t)}};var w0=e.version;if(w0!=="19.2.8")throw Error(s(527,w0,"19.2.8"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Ry={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{de=rc.inject(Ry),pe=rc}catch{}}return Dl.createRoot=function(t,n){if(!o(t))throw Error(s(299));var a=!1,r="",u=Im,f=Bm,v=Fm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=x0(t,1,!1,null,null,a,r,null,u,f,v,C0),t[Fn]=n.current,Bf(t),new nd(n)},Dl.hydrateRoot=function(t,n,a){if(!o(t))throw Error(s(299));var r=!1,u="",f=Im,v=Bm,C=Fm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=x0(t,1,!0,n,a??null,r,u,H,f,v,C,C0),n.context=v0(null),a=n.current,r=si(),r=Hr(r),u=Oa(r),u.callback=null,Pa(a,u,r),a=r,n.current.lanes=a,Ve(n,a),Bi(n),t[Fn]=n.current,Bf(t),new sc(n)},Dl.version="19.2.8",Dl}var z0;function By(){if(z0)return sd.exports;z0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(e){console.error(e)}}return l(),sd.exports=Iy(),sd.exports}var Fy=By();const jx=({mode:l="dots",className:e="fixed inset-0 w-full h-full z-[-1] pointer-events-none"})=>{const i=at.useRef(null);return at.useEffect(()=>{const s=i.current;if(!s)return;const o=s.getContext("webgl")||s.getContext("experimental-webgl");if(!o)return;let c;const d=()=>{const P=s.clientWidth||window.innerWidth,z=s.clientHeight||window.innerHeight;(s.width!==P||s.height!==z)&&(s.width=P,s.height=z)},m=new ResizeObserver(d);m.observe(s),d();const g=`attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`,p=`precision highp float;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float line = step(0.98, fract(uv.x * 25.0)) + step(0.98, fract(uv.y * 25.0));
    float grid = line * 0.12;
    
    vec3 color = vec3(0.02, 0.04, 0.08);
    color += grid * vec3(0.23, 0.51, 0.96);
    
    float pulse = (sin(u_time * 0.5) * 0.5 + 0.5) * 0.06;
    color += pulse * vec3(0.0, 0.4, 0.8);
    
    gl_FragColor = vec4(color, 1.0);
}`,_=`precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
varying vec2 v_texCoord;

float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

void main() {
    vec2 uv = v_texCoord;
    vec3 color = vec3(0.02, 0.03, 0.05); // Deep cyber background
    
    // Grid lines
    vec2 grid_uv = fract(uv * 40.0);
    float grid = step(0.98, grid_uv.x) + step(0.98, grid_uv.y);
    color += grid * vec3(0.05, 0.12, 0.22);
    
    // Scanning horizontal sweep line
    float scan = step(0.995, fract(uv.y - u_time * 0.08));
    color += scan * vec3(0.0, 0.35, 0.65) * 0.5;
    
    // Glowing node points
    vec2 p_uv = floor(uv * 40.0);
    float p = hash(p_uv);
    if (p > 0.985) {
        float glow = sin(u_time * 2.0 + p * 10.0) * 0.5 + 0.5;
        color += glow * vec3(0.2, 0.55, 1.0) * 0.45;
    }
    
    gl_FragColor = vec4(color, 1.0);
}`,y=(P,z)=>{const N=o.createShader(P);return o.shaderSource(N,z),o.compileShader(N),N},x=o.createProgram();o.attachShader(x,y(o.VERTEX_SHADER,g)),o.attachShader(x,y(o.FRAGMENT_SHADER,l==="grid"?p:_)),o.linkProgram(x),o.useProgram(x);const S=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,S),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),o.STATIC_DRAW);const A=o.getAttribLocation(x,"a_position");o.enableVertexAttribArray(A),o.vertexAttribPointer(A,2,o.FLOAT,!1,0,0);const w=o.getUniformLocation(x,"u_time"),M=o.getUniformLocation(x,"u_resolution"),b=P=>{d(),o.viewport(0,0,s.width,s.height),w&&o.uniform1f(w,P*.001),M&&o.uniform2f(M,s.width,s.height),o.drawArrays(o.TRIANGLE_STRIP,0,4),c=requestAnimationFrame(b)};return b(0),()=>{cancelAnimationFrame(c),m.disconnect()}},[l]),h.jsx("div",{className:e,children:h.jsx("canvas",{ref:i,className:"w-full h-full block"})})},zy=({currentView:l,onNavigate:e,isOpenMobile:i=!1,onCloseMobile:s})=>{const o=[{id:"command-center",label:"Command Center",icon:"dashboard"},{id:"ai-assistant",label:"AI Assistant",icon:"smart_toy"},{id:"case-center",label:"Case Center",icon:"folder_shared"},{id:"network-graph",label:"Network Graph",icon:"hub"},{id:"crime-search",label:"Crime Search",icon:"manage_search"},{id:"evidence",label:"Evidence",icon:"folder_open"},{id:"settings",label:"Settings",icon:"settings"}];return h.jsxs(h.Fragment,{children:[i&&h.jsx("div",{onClick:s,className:"fixed inset-0 bg-black/70 backdrop-blur-sm z-[55] md:hidden"}),h.jsxs("nav",{className:`fixed left-0 top-0 h-screen w-64 z-[60] bg-[#0c0e12]/80 backdrop-blur-2xl border-r border-white/10 shadow-2xl flex flex-col py-6 transition-transform duration-300 ease-in-out ${i?"translate-x-0":"-translate-x-full md:translate-x-0"}`,children:[h.jsxs("div",{className:"px-6 mb-8 flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("span",{className:"material-symbols-outlined text-primary text-3xl",style:{fontVariationSettings:"'FILL' 1"},children:"local_police"}),h.jsxs("div",{children:[h.jsx("h1",{className:"font-headline-md text-xl text-primary font-bold tracking-tighter",children:"KSP Intel"}),h.jsx("p",{className:"font-data-mono text-xs text-on-surface-variant/70",children:"Unit 01-BLR"})]})]}),i&&h.jsx("button",{onClick:s,className:"text-on-surface-variant hover:text-white md:hidden",children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})})]}),h.jsx("div",{className:"flex-1 px-3 space-y-1.5 overflow-y-auto",children:o.map(c=>{const d=l===c.id;return h.jsxs("button",{onClick:()=>{e(c.id),s&&s()},className:`w-full flex items-center gap-3.5 px-4 py-2.5 rounded-lg text-xs font-label-caps tracking-wider transition-all duration-200 text-left ${d?"text-secondary border-r-2 border-secondary bg-secondary/10 shadow-[0_0_15px_rgba(76,215,246,0.2)] font-semibold":"text-on-surface-variant/70 hover:text-on-surface hover:bg-white/5"}`,children:[h.jsx("span",{className:"material-symbols-outlined text-[20px]",style:d?{fontVariationSettings:"'FILL' 1"}:{},children:c.icon}),h.jsx("span",{children:c.label})]},c.id)})}),h.jsxs("div",{className:"px-3 space-y-1.5 mt-auto pt-4 border-t border-white/5",children:[h.jsxs("button",{onClick:()=>e("settings"),className:"w-full flex items-center gap-3.5 px-4 py-2 rounded-lg text-xs font-label-caps text-on-surface-variant/70 hover:text-on-surface hover:bg-white/5 transition-all text-left",children:[h.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"help"}),h.jsx("span",{children:"Support"})]}),h.jsxs("button",{onClick:()=>e("login"),className:"w-full flex items-center gap-3.5 px-4 py-2 rounded-lg text-xs font-label-caps text-error/80 hover:text-error hover:bg-error/10 transition-all text-left",children:[h.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"logout"}),h.jsx("span",{children:"Logout"})]}),h.jsxs("div",{className:"mt-4 pt-3 border-t border-white/5 flex items-center gap-3 px-3",children:[h.jsx("img",{src:"https://lh3.googleusercontent.com/aida-public/AB6AXuAQAOeFDSTPNQ0tQ70sOj4_1yZcjNY84KEZCEi9IwsY7bT7cYKWOP-e8750XZ7hsg7u9dr61SaPsJDT0MstCZOSNP3XSsNQFwDxYJ_rO-TmLy8WB7ekhN9JFgyhSqY4jML3xFQMslZpHMT_5bv7f9z9ItN46iSOS2MAOmUNG7p07QgR9ZM0Mn4CEbM2TzmcV0fXK6gqnfdYxN-C1NgS75dvoNhFAb0B5-j2PZSi-Yh3cjMhxgB4ANBHuA",alt:"Officer Profile",className:"w-8 h-8 rounded-full border border-white/20 object-cover"}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"font-data-mono text-xs text-on-surface font-medium",children:"OFC-7729"}),h.jsx("span",{className:"font-label-caps text-[9px] text-secondary tracking-widest font-semibold",children:"ACTIVE DUTY"})]})]})]})]})]})},Hy=({searchQuery:l,onSearchChange:e,onOpenMobileMenu:i,onNotificationClick:s,unreadCount:o=3})=>h.jsxs("header",{className:"fixed top-0 left-0 md:left-64 right-0 z-50 flex items-center justify-between px-4 md:px-6 h-16 bg-[#191c1f]/40 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(173,198,255,0.1)]",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("button",{onClick:i,className:"p-2 text-on-surface-variant hover:text-white rounded-lg md:hidden","aria-label":"Open navigation menu",children:h.jsx("span",{className:"material-symbols-outlined text-2xl",children:"menu"})}),h.jsx("div",{className:"font-headline-md text-lg md:text-xl font-bold text-on-surface tracking-tighter",children:"KSP Intelligence Wing"})]}),h.jsxs("div",{className:"hidden lg:flex items-center bg-black/50 border border-outline/30 rounded-full px-4 py-1.5 ml-6 focus-within:border-secondary focus-within:shadow-[0_0_10px_rgba(76,215,246,0.5)] transition-all",children:[h.jsx("span",{className:"material-symbols-outlined text-outline text-sm mr-2",children:"search"}),h.jsx("input",{type:"text",value:l,onChange:c=>e(c.target.value),placeholder:"Search Intel DB (Entity ID, Phone, FIR)...",className:"bg-transparent border-none text-data-mono font-data-mono text-xs text-on-surface focus:ring-0 w-64 placeholder:text-outline-variant outline-none"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("button",{onClick:s,className:"p-2 text-on-surface-variant hover:text-on-surface hover:bg-white/5 rounded-full transition-colors relative active:scale-95 duration-200",title:"Notifications",children:[h.jsx("span",{className:"material-symbols-outlined",children:"notifications"}),o>0&&h.jsx("span",{className:"absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full pulse-dot-critical"})]}),h.jsx("button",{className:"p-2 text-on-surface-variant hover:text-on-surface hover:bg-white/5 rounded-full transition-colors active:scale-95 duration-200",title:"Security Clearance Level 4",children:h.jsx("span",{className:"material-symbols-outlined",children:"security"})}),h.jsx("button",{className:"p-2 text-on-surface-variant hover:text-on-surface hover:bg-white/5 rounded-full transition-colors active:scale-95 duration-200",title:"Account Profile",children:h.jsx("span",{className:"material-symbols-outlined",children:"account_circle"})})]})]}),Gy=({onLoginSuccess:l})=>{const[e,i]=at.useState("KSP-7729-BLR"),[s,o]=at.useState("••••••••"),[c,d]=at.useState(!1),[m,g]=at.useState(!0),[p,_]=at.useState(!0),[y,x]=at.useState(!1),S=A=>{A.preventDefault(),x(!0),setTimeout(()=>{x(!1),l()},800)};return h.jsxs("div",{className:"relative min-h-screen w-full flex items-center justify-center p-4 bg-[#111417] text-[#e1e2e7] font-body-md overflow-hidden",children:[h.jsx(jx,{mode:"grid",className:"absolute inset-0 w-full h-full z-0 opacity-40 mix-blend-screen pointer-events-none"}),h.jsxs("div",{className:"relative z-10 w-full max-w-md p-6 md:p-8 glass-panel rounded-xl shadow-2xl flex flex-col items-center border border-white/10",children:[h.jsxs("div",{className:"flex flex-col items-center mb-6 w-full",children:[h.jsxs("div",{className:"w-24 h-24 mb-3 relative flex items-center justify-center",children:[h.jsx("div",{className:"absolute inset-0 bg-primary/20 blur-xl rounded-full"}),h.jsx("img",{src:"https://lh3.googleusercontent.com/aida-public/AB6AXuChpz6LcPtepzhTWpRQ8Fk0UdTGa0UmBSkrXJ94VpZtqzUVAjq3xCJy9Nz9fSje4wLU6Q4LJ1W5BBe1RqJn375HYZidBbC5lVHjgdwGSGS8jJ90V7tR8YnmHObhwyyJPUAyZ4aUTBRw7aB__zxYV4odiPQ6912ie5LJ9z3ZHXHjmVu_wcko9UXeqpGfb5YJS1W4QbWIHnT9seOR3EHG1VyiTeVzheVdk5DumPdg77cTQl-RZ3PP3n1G1w",alt:"KSP Emblem",className:"w-full h-full object-contain relative z-10 filter drop-shadow-[0_0_12px_rgba(173,198,255,0.6)]"})]}),h.jsx("h1",{className:"font-headline-lg text-2xl md:text-3xl text-on-surface tracking-tight text-center font-bold",children:"KSP Intelligence Wing"}),h.jsx("p",{className:"font-data-mono text-xs text-secondary/90 mt-1 uppercase tracking-widest text-center font-medium",children:"Secure Gateway"}),h.jsx("div",{className:"w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4"})]}),h.jsxs("form",{onSubmit:S,className:"w-full space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{htmlFor:"badge_id",className:"font-label-caps text-xs text-on-surface-variant block mb-1.5 font-semibold uppercase tracking-wider",children:"Badge ID / Username"}),h.jsxs("div",{className:"relative",children:[h.jsx("span",{className:"material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg",children:"badge"}),h.jsx("input",{id:"badge_id",type:"text",value:e,onChange:A=>i(A.target.value),placeholder:"KSP-####-####",className:"w-full bg-black/60 border border-white/10 rounded-md focus:border-secondary focus:ring-1 focus:ring-secondary/50 text-on-surface pl-10 pr-4 py-2.5 font-data-mono text-sm transition-all placeholder:text-on-surface-variant/30 outline-none",required:!0})]})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[h.jsx("label",{htmlFor:"password",className:"font-label-caps text-xs text-on-surface-variant font-semibold uppercase tracking-wider",children:"Passcode"}),h.jsx("button",{type:"button",className:"text-xs text-secondary/80 hover:text-secondary hover:underline transition-colors",onClick:()=>alert("Security Token recovery protocol initiated. Please contact Node Administrator."),children:"Forgot?"})]}),h.jsxs("div",{className:"relative",children:[h.jsx("span",{className:"material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg",children:"lock"}),h.jsx("input",{id:"password",type:c?"text":"password",value:s,onChange:A=>o(A.target.value),placeholder:"••••••••",className:"w-full bg-black/60 border border-white/10 rounded-md focus:border-secondary focus:ring-1 focus:ring-secondary/50 text-on-surface pl-10 pr-10 py-2.5 font-data-mono text-sm transition-all placeholder:text-on-surface-variant/30 outline-none",required:!0}),h.jsx("button",{type:"button",onClick:()=>d(!c),className:"absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 hover:text-on-surface transition-colors",children:h.jsx("span",{className:"material-symbols-outlined text-lg",children:c?"visibility_off":"visibility"})})]})]}),h.jsxs("div",{className:"flex items-center justify-between pt-1",children:[h.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer group",children:[h.jsx("input",{type:"checkbox",checked:m,onChange:A=>g(A.target.checked),className:"rounded bg-black/50 border-white/20 text-secondary focus:ring-secondary/50"}),h.jsx("span",{className:"font-label-caps text-xs text-on-surface-variant group-hover:text-on-surface transition-colors",children:"Remember Node"})]}),h.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer group",children:[h.jsx("input",{type:"checkbox",checked:p,onChange:A=>_(A.target.checked),className:"rounded bg-black/50 border-white/20 text-secondary focus:ring-secondary/50"}),h.jsx("span",{className:"font-label-caps text-xs text-secondary group-hover:text-secondary-fixed transition-colors font-medium",children:"Require OTP"})]})]}),h.jsxs("div",{className:"pt-3 border-t border-white/10 w-full flex flex-col gap-2.5",children:[h.jsx("button",{type:"submit",disabled:y,className:"w-full bg-primary/20 hover:bg-primary/30 border border-primary/50 text-primary font-headline-md font-semibold text-base py-3 rounded-lg transition-all shadow-[0_0_15px_rgba(173,198,255,0.25)] flex items-center justify-center space-x-2 relative overflow-hidden group cursor-pointer",children:y?h.jsx("span",{className:"material-symbols-outlined animate-spin",children:"autorenew"}):h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"material-symbols-outlined group-hover:scale-110 transition-transform",children:"login"}),h.jsx("span",{children:"Secure Login"})]})}),h.jsxs("div",{className:"flex gap-2",children:[h.jsxs("button",{type:"button",onClick:()=>{x(!0),setTimeout(()=>{x(!1),l()},600)},className:"flex-1 bg-transparent hover:bg-white/5 border border-white/10 text-on-surface-variant font-label-caps text-xs py-2 rounded transition-colors flex items-center justify-center space-x-1.5",children:[h.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"fingerprint"}),h.jsx("span",{children:"Biometric"})]}),h.jsxs("button",{type:"button",onClick:()=>{x(!0),setTimeout(()=>{x(!1),l()},600)},className:"flex-1 bg-transparent hover:bg-white/5 border border-white/10 text-on-surface-variant font-label-caps text-xs py-2 rounded transition-colors flex items-center justify-center space-x-1.5",children:[h.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"face"}),h.jsx("span",{children:"Face ID"})]})]})]})]}),h.jsxs("div",{className:"mt-8 w-full flex justify-between items-center text-on-surface-variant/60 font-data-mono text-[10px]",children:[h.jsxs("div",{className:"flex items-center space-x-1.5",children:[h.jsx("div",{className:"w-2 h-2 rounded-full bg-secondary animate-pulse"}),h.jsx("span",{children:"NODE 01-BLR ACTIVE"})]}),h.jsx("span",{children:"v2.4.1 (CYBER)"})]})]})]})},Vy=({onOpenCase:l})=>{const[e]=at.useState([{id:"INC-8892",title:"Armed Robbery, Majestic",location:"Majestic Bus Stand, Sector 1",timeAgo:"2 mins ago",unitStatus:"Unit 4 En Route",severity:"HIGH"},{id:"INC-8891",title:"Suspicious Package, MG Rd",location:"MG Road Metro Station",timeAgo:"14 mins ago",unitStatus:"Investigating",severity:"MED"},{id:"INC-8890",title:"Vehicle Theft, Indiranagar",location:"100ft Road, Indiranagar",timeAgo:"45 mins ago",unitStatus:"Alert Issued",severity:"MED"},{id:"INC-8889",title:"Cyber Heist Attempt, Electronic City",location:"Phase 1 Tech Corridor",timeAgo:"1h 10m ago",unitStatus:"Unit 9 Deployed",severity:"HIGH"}]),[i]=at.useState([{id:"KA-01",name:"Bengaluru Urban",code:"BLR-01",zone:"Z-Alpha",totalCrime:1204,threatLevel:"HIGH",pendingFIR:342,solved30d:89,coords:{x:210,y:400}},{id:"KA-02",name:"Mysuru Division",code:"MYS-02",zone:"Z-Beta",totalCrime:612,threatLevel:"MED",pendingFIR:118,solved30d:92,coords:{x:260,y:340}},{id:"KA-03",name:"Hubballi-Dharwad",code:"HUB-03",zone:"Z-Gamma",totalCrime:489,threatLevel:"MED",pendingFIR:95,solved30d:84,coords:{x:310,y:280}},{id:"KA-04",name:"Mangaluru Coastal",code:"MNG-04",zone:"Z-Delta",totalCrime:320,threatLevel:"LOW",pendingFIR:42,solved30d:95,coords:{x:140,y:460}}]),[s,o]=at.useState(i[0]),[c,d]=at.useState(!1),[m,g]=at.useState(null),p=_=>{g(`Tactical units deployed to ${_} jurisdiction!`),setTimeout(()=>g(null),4e3)};return h.jsxs("div",{className:"w-full h-[calc(100vh-64px)] overflow-y-auto p-4 md:p-6 mt-16 max-w-[1600px] mx-auto",children:[m&&h.jsxs("div",{className:"fixed top-20 right-6 z-50 bg-secondary/90 text-on-secondary px-5 py-3 rounded-lg shadow-xl font-data-mono text-xs flex items-center gap-3 backdrop-blur-md animate-bounce",children:[h.jsx("span",{className:"material-symbols-outlined text-lg",children:"local_shipping"}),h.jsx("span",{children:m})]}),h.jsxs("div",{className:"grid grid-cols-12 gap-4 lg:gap-6 h-full min-h-[700px]",children:[h.jsxs("div",{className:"col-span-12 lg:col-span-3 flex flex-col gap-4 h-full",children:[h.jsxs("div",{className:"glass-panel rounded-xl p-4 neon-glow transition-all group",children:[h.jsxs("div",{className:"flex justify-between items-start mb-2",children:[h.jsx("span",{className:"font-label-caps text-xs text-outline uppercase tracking-wider font-semibold",children:"State Heat Index"}),h.jsx("span",{className:"material-symbols-outlined text-error text-xl group-hover:animate-pulse",children:"local_fire_department"})]}),h.jsxs("div",{className:"font-display-lg text-4xl font-bold text-on-surface tracking-tighter",children:["78.4",h.jsx("span",{className:"text-error text-xl font-body-md",children:"%"})]}),h.jsxs("div",{className:"font-data-mono text-xs text-on-surface-variant mt-1 flex items-center gap-1",children:[h.jsx("span",{className:"material-symbols-outlined text-error text-sm",children:"trending_up"}),h.jsx("span",{children:"+2.1% (24h)"})]})]}),h.jsxs("div",{className:"glass-panel rounded-xl p-4 neon-glow transition-all group",children:[h.jsxs("div",{className:"flex justify-between items-start mb-2",children:[h.jsx("span",{className:"font-label-caps text-xs text-outline uppercase tracking-wider font-semibold",children:"Active Operations"}),h.jsx("span",{className:"material-symbols-outlined text-secondary text-xl",children:"radar"})]}),h.jsx("div",{className:"font-display-lg text-4xl font-bold text-on-surface tracking-tighter",children:"142"}),h.jsxs("div",{className:"font-data-mono text-xs text-on-surface-variant mt-1 flex items-center gap-1.5",children:[h.jsx("div",{className:"w-2 h-2 bg-secondary rounded-full pulse-dot"}),h.jsx("span",{children:"12 Units Deployed"})]})]}),h.jsxs("div",{className:"glass-panel rounded-xl p-4 flex-1 flex flex-col overflow-hidden",children:[h.jsxs("div",{className:"flex justify-between items-center mb-3 pb-2 border-b border-white/10",children:[h.jsx("h3",{className:"font-label-caps text-xs font-bold text-on-surface uppercase tracking-widest",children:"Critical Incidents"}),h.jsx("span",{className:"material-symbols-outlined text-error text-sm",children:"warning"})]}),h.jsx("div",{className:"overflow-y-auto flex-1 pr-1 space-y-2.5",children:e.map(_=>h.jsxs("div",{onClick:()=>l==null?void 0:l(_.id),className:`p-3 border rounded-lg cursor-pointer transition-colors ${_.severity==="HIGH"?"bg-error-container/20 border-error/30 hover:bg-error-container/30":"bg-surface-container/50 border-outline/20 hover:bg-surface-container"}`,children:[h.jsxs("div",{className:"flex justify-between items-center mb-1",children:[h.jsx("span",{className:`font-data-mono text-xs font-semibold ${_.severity==="HIGH"?"text-error":"text-primary"}`,children:_.id}),h.jsx("span",{className:`text-[10px] font-label-caps px-1.5 py-0.5 rounded font-bold ${_.severity==="HIGH"?"text-on-error-container bg-error/20":"text-secondary bg-secondary/10"}`,children:_.severity})]}),h.jsx("p",{className:"font-body-md text-sm text-on-surface font-medium truncate",children:_.title}),h.jsxs("p",{className:"font-data-mono text-outline-variant text-[10px] mt-1",children:[_.timeAgo," - ",_.unitStatus]})]},_.id))})]})]}),h.jsx("div",{className:"col-span-12 lg:col-span-6 flex flex-col h-[520px] lg:h-full relative",children:h.jsxs("div",{className:"glass-panel rounded-xl flex-1 flex flex-col relative overflow-hidden",children:[h.jsxs("div",{className:"absolute top-0 left-0 w-full p-4 flex justify-between items-center z-10 pointer-events-none",children:[h.jsxs("div",{className:"bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 pointer-events-auto flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-secondary animate-ping"}),h.jsx("span",{className:"font-label-caps text-xs text-on-surface tracking-widest font-semibold",children:"KARNATAKA THEATER"})]}),h.jsxs("div",{className:"flex gap-2 pointer-events-auto",children:[h.jsx("button",{onClick:()=>alert("Map zoomed in"),className:"w-8 h-8 rounded bg-black/60 border border-white/10 flex items-center justify-center text-on-surface hover:text-secondary transition-colors",children:h.jsx("span",{className:"material-symbols-outlined text-sm",children:"zoom_in"})}),h.jsx("button",{onClick:()=>alert("Map zoomed out"),className:"w-8 h-8 rounded bg-black/60 border border-white/10 flex items-center justify-center text-on-surface hover:text-secondary transition-colors",children:h.jsx("span",{className:"material-symbols-outlined text-sm",children:"zoom_out"})})]})]}),h.jsx("div",{className:"flex-1 w-full h-full bg-[#0c0e12]/40 flex items-center justify-center p-6 cursor-crosshair relative",children:h.jsxs("svg",{className:"w-full h-full max-h-[500px] drop-shadow-[0_0_15px_rgba(76,215,246,0.2)]",viewBox:"0 0 500 600",children:[h.jsx("path",{className:"fill-[rgba(255,84,81,0.6)] stroke-white/30 hover:fill-[rgba(255,84,81,0.85)] cursor-pointer transition-all",d:"M150,400 L200,350 L250,380 L220,450 Z",onClick:()=>{o(i[0]),d(!0)}}),h.jsx("path",{className:"fill-[rgba(255,179,173,0.4)] stroke-white/30 hover:fill-[rgba(255,179,173,0.7)] cursor-pointer transition-all",d:"M200,350 L280,300 L300,360 L250,380 Z",onClick:()=>{o(i[1]),d(!0)}}),h.jsx("path",{className:"fill-[rgba(76,215,246,0.2)] stroke-white/30 hover:fill-[rgba(76,215,246,0.5)] cursor-pointer transition-all",d:"M280,300 L350,250 L380,320 L300,360 Z",onClick:()=>{o(i[2]),d(!0)}}),h.jsx("path",{className:"fill-[rgba(76,215,246,0.15)] stroke-white/30 hover:fill-[rgba(76,215,246,0.4)] cursor-pointer transition-all",d:"M150,400 L100,450 L120,500 L180,480 Z",onClick:()=>{o(i[3]),d(!0)}}),h.jsx("path",{className:"fill-[rgba(255,179,173,0.35)] stroke-white/30 hover:fill-[rgba(255,179,173,0.6)] cursor-pointer transition-all",d:"M350,250 L420,200 L450,280 L380,320 Z",onClick:()=>{o(i[2]),d(!0)}}),h.jsx("circle",{className:"fill-error pulse-dot-critical",cx:"210",cy:"400",r:"5"}),h.jsx("circle",{className:"fill-secondary pulse-dot",cx:"320",cy:"300",r:"4"}),h.jsx("circle",{className:"fill-primary pulse-dot",cx:"130",cy:"470",r:"4"})]})}),h.jsx("div",{className:"absolute bottom-0 left-0 w-full p-3 flex justify-center z-10 pointer-events-none",children:h.jsxs("div",{className:"bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-lg border border-white/10 pointer-events-auto flex gap-6 font-label-caps text-[10px] text-outline",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("div",{className:"w-3 h-3 bg-[rgba(255,84,81,0.7)] rounded-sm"}),h.jsx("span",{children:"HIGH HEAT"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("div",{className:"w-3 h-3 bg-[rgba(255,179,173,0.5)] rounded-sm"}),h.jsx("span",{children:"MED HEAT"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("div",{className:"w-3 h-3 bg-[rgba(76,215,246,0.2)] border border-white/20 rounded-sm"}),h.jsx("span",{children:"LOW HEAT"})]})]})})]})}),h.jsxs("div",{className:"col-span-12 lg:col-span-3 flex flex-col gap-4 h-full",children:[h.jsxs("div",{className:"glass-panel rounded-xl p-4 flex-1 flex flex-col",children:[h.jsxs("div",{className:"flex justify-between items-center mb-2",children:[h.jsx("span",{className:"font-label-caps text-xs text-outline uppercase tracking-wider font-semibold",children:"Recent FIR Activity"}),h.jsx("span",{className:"material-symbols-outlined text-outline text-sm",children:"show_chart"})]}),h.jsx("div",{className:"flex-1 w-full relative flex items-end min-h-[90px]",children:h.jsxs("svg",{className:"w-full h-full absolute inset-0 opacity-80",viewBox:"0 0 100 50",preserveAspectRatio:"none",children:[h.jsx("polyline",{fill:"none",points:"0,40 20,35 40,45 60,20 80,30 100,10",stroke:"#4cd7f6",strokeWidth:"2"}),h.jsx("polygon",{fill:"url(#grad1)",points:"0,50 0,40 20,35 40,45 60,20 80,30 100,10 100,50"}),h.jsx("defs",{children:h.jsxs("linearGradient",{id:"grad1",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[h.jsx("stop",{offset:"0%",style:{stopColor:"#4cd7f6",stopOpacity:.3}}),h.jsx("stop",{offset:"100%",style:{stopColor:"#4cd7f6",stopOpacity:0}})]})})]})}),h.jsxs("div",{className:"w-full flex justify-between font-data-mono text-[9px] text-outline-variant pt-1 border-t border-white/10 mt-1",children:[h.jsx("span",{children:"00:00"}),h.jsx("span",{children:"06:00"}),h.jsx("span",{children:"12:00"}),h.jsx("span",{children:"18:00"})]})]}),h.jsxs("div",{className:"glass-panel rounded-xl p-4 flex-1 flex flex-col",children:[h.jsxs("div",{className:"flex justify-between items-center mb-2",children:[h.jsx("span",{className:"font-label-caps text-xs text-outline uppercase tracking-wider font-semibold",children:"Top Categories"}),h.jsx("span",{className:"material-symbols-outlined text-outline text-sm",children:"bar_chart"})]}),h.jsxs("div",{className:"flex-1 flex flex-col justify-end gap-3 mt-2",children:[h.jsxs("div",{className:"w-full flex items-center gap-2",children:[h.jsx("span",{className:"font-data-mono text-[10px] text-outline-variant w-10",children:"THEFT"}),h.jsx("div",{className:"flex-1 h-2 bg-surface-container rounded-full overflow-hidden",children:h.jsx("div",{className:"h-full bg-secondary w-[85%] rounded-full shadow-[0_0_5px_#4cd7f6]"})}),h.jsx("span",{className:"font-data-mono text-[10px] text-on-surface font-semibold",children:"85%"})]}),h.jsxs("div",{className:"w-full flex items-center gap-2",children:[h.jsx("span",{className:"font-data-mono text-[10px] text-outline-variant w-10",children:"FRAUD"}),h.jsx("div",{className:"flex-1 h-2 bg-surface-container rounded-full overflow-hidden",children:h.jsx("div",{className:"h-full bg-primary w-[62%] rounded-full"})}),h.jsx("span",{className:"font-data-mono text-[10px] text-on-surface font-semibold",children:"62%"})]}),h.jsxs("div",{className:"w-full flex items-center gap-2",children:[h.jsx("span",{className:"font-data-mono text-[10px] text-outline-variant w-10",children:"ASLT"}),h.jsx("div",{className:"flex-1 h-2 bg-surface-container rounded-full overflow-hidden",children:h.jsx("div",{className:"h-full bg-error w-[40%] rounded-full"})}),h.jsx("span",{className:"font-data-mono text-[10px] text-on-surface font-semibold",children:"40%"})]})]})]}),h.jsxs("div",{className:"glass-panel rounded-xl p-4 overflow-hidden h-28 flex flex-col",children:[h.jsx("span",{className:"font-label-caps text-xs text-outline uppercase tracking-wider font-semibold mb-2",children:"Live Intel Feed"}),h.jsx("div",{className:"flex-1 relative overflow-hidden bg-black/40 rounded border border-white/5 p-2 flex items-center",children:h.jsxs("div",{className:"whitespace-nowrap font-data-mono text-xs text-on-surface-variant flex gap-8 scroll-ticker",children:[h.jsx("span",{className:"text-secondary",children:"[SYS] Surveillance drone D-04 online."}),h.jsx("span",{className:"text-error",children:"[ALERT] Unusual border activity Sector 7."}),h.jsx("span",{children:"[INFO] Daily briefing uploaded to DB."}),h.jsx("span",{className:"text-secondary",children:"[SYS] Facial recog hit: Camera BLR-92."}),h.jsx("span",{className:"text-primary",children:"[CASE] FIR-23098 auto-indexed."})]})})]})]})]}),s&&c&&h.jsxs("div",{className:"fixed right-0 top-[64px] h-[calc(100vh-64px)] w-80 bg-[#1d2023]/95 backdrop-blur-3xl border-l border-white/10 shadow-2xl z-50 flex flex-col transition-all duration-300",children:[h.jsxs("div",{className:"p-6 border-b border-white/10 flex justify-between items-start",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"font-headline-md text-xl text-on-surface font-bold",children:s.name}),h.jsxs("p",{className:"font-data-mono text-xs text-secondary mt-1 font-semibold",children:["ID: ",s.id," | ",s.zone]})]}),h.jsx("button",{onClick:()=>d(!1),className:"text-outline hover:text-on-surface transition-colors p-1 rounded",children:h.jsx("span",{className:"material-symbols-outlined",children:"close"})})]}),h.jsxs("div",{className:"p-6 space-y-6 overflow-y-auto flex-1",children:[h.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[h.jsxs("div",{className:"bg-black/50 p-3 rounded-lg border border-white/5",children:[h.jsx("div",{className:"font-label-caps text-[10px] text-outline uppercase mb-1",children:"Total Crime"}),h.jsx("div",{className:"font-headline-lg text-2xl font-bold text-on-surface",children:s.totalCrime.toLocaleString()})]}),h.jsxs("div",{className:"bg-error/10 p-3 rounded-lg border border-error/20",children:[h.jsx("div",{className:"font-label-caps text-[10px] text-error uppercase mb-1 font-semibold",children:"Threat Lvl"}),h.jsx("div",{className:"font-headline-lg text-2xl font-bold text-error",children:s.threatLevel})]}),h.jsxs("div",{className:"bg-black/50 p-3 rounded-lg border border-white/5",children:[h.jsx("div",{className:"font-label-caps text-[10px] text-outline uppercase mb-1",children:"Pending FIR"}),h.jsx("div",{className:"font-headline-lg text-2xl font-bold text-primary",children:s.pendingFIR})]}),h.jsxs("div",{className:"bg-black/50 p-3 rounded-lg border border-white/5",children:[h.jsx("div",{className:"font-label-caps text-[10px] text-outline uppercase mb-1",children:"Solved (30d)"}),h.jsxs("div",{className:"font-headline-lg text-2xl font-bold text-secondary",children:[s.solved30d,"%"]})]})]}),h.jsxs("button",{onClick:()=>p(s.name),className:"w-full py-3 bg-transparent border border-secondary text-secondary font-label-caps text-xs font-bold rounded-lg hover:bg-secondary hover:text-on-secondary transition-all shadow-[0_0_12px_rgba(76,215,246,0.25)] flex items-center justify-center gap-2 cursor-pointer",children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:"local_shipping"}),h.jsx("span",{children:"DEPLOY RESOURCES"})]})]})]})]})},ky=()=>{const[l,e]=at.useState([{id:"1",sender:"user",timestamp:"10:42 AM",content:"Analyze recent robbery patterns in Koramangala area over the last 30 days. Highlight any recurring MOs."},{id:"2",sender:"ai",timestamp:"10:42 AM",content:"I have analyzed 14 reported incidents matching your criteria in the Koramangala jurisdiction between Sept 15 and Oct 15.",metadata:{title:"Analysis Report: Koramangala Robberies (30 Days)",isConfidential:!0,confidence:"94%",refTags:["FIR-23098","CCTV-KRM-04"],keyFindings:["Target Selection: Pedestrians carrying laptops near tech parks post 9:00 PM.","Vehicle: Black Pulsar motorcycles (partial plates recovered in 2 cases).","Weaponry: Intimidation via blunt objects; no firearms reported."]}}]),[i,s]=at.useState(""),[o,c]=at.useState(!1),[d,m]=at.useState("Bengaluru Robbery Analysis"),g=at.useRef(null),p=()=>{var x;(x=g.current)==null||x.scrollIntoView({behavior:"smooth"})};at.useEffect(()=>{p()},[l,o]);const _=async x=>{const S=x||i;if(!S.trim()||o)return;const A={id:Date.now().toString(),sender:"user",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),content:S};e(w=>[...w,A]),x||s(""),c(!0);try{const M=await(await fetch("/api/gemini/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:S,context:"KSP Intelligence DB"})})).json(),b={id:(Date.now()+1).toString(),sender:"ai",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),content:M.text||"Intelligence query processed successfully.",metadata:{title:`Analysis Report: ${S.slice(0,35)}...`,isConfidential:!0,confidence:M.confidence||"92%",refTags:M.refTags||["FIR-23098","CCTV-KRM-04"],keyFindings:["Correlated 12 recent FIR records across active BLR Sectors.","Spatial-temporal heat signature indicates 18:00 - 22:00 spike.","Cross-indexed with Known Suspects database Node ID-8829-X."]}};e(P=>[...P,b])}catch(w){console.error(w);const M={id:(Date.now()+1).toString(),sender:"ai",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),content:"Based on KSP Intelligence DB records, patterns indicate heightened cyber & theft activity along primary transit hubs.",metadata:{title:"Intelligence Assessment",isConfidential:!0,confidence:"90%",refTags:["FIR-23098","KSP-GRID-01"]}};e(b=>[...b,M])}finally{c(!1)}},y=[{title:"FIR 23045 Summary",timeAgo:"2 Hours Ago"},{title:"Bengaluru Robbery Analysis",timeAgo:"Yesterday"},{title:"Suspect Network Map",timeAgo:"Oct 12"}];return h.jsxs("div",{className:"flex-1 flex h-[calc(100vh-64px)] mt-16 overflow-hidden w-full relative",children:[h.jsxs("aside",{className:"hidden lg:flex flex-col w-72 border-r border-white/10 bg-[#111417]/80 overflow-y-auto",children:[h.jsx("div",{className:"p-4 border-b border-white/10",children:h.jsxs("button",{onClick:()=>{e([]),m("New Analysis")},className:"w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-secondary text-secondary hover:bg-secondary/10 transition-colors cyber-glow-active font-label-caps text-xs font-semibold cursor-pointer",children:[h.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"add"}),h.jsx("span",{children:"New Analysis"})]})}),h.jsxs("div",{className:"p-4 flex-1",children:[h.jsx("h3",{className:"font-label-caps text-xs text-outline mb-4 uppercase tracking-wider font-semibold",children:"Recent Sessions"}),h.jsx("ul",{className:"space-y-2",children:y.map((x,S)=>h.jsx("li",{children:h.jsxs("button",{onClick:()=>m(x.title),className:`w-full text-left p-3 rounded-lg border transition-all ${d===x.title?"bg-surface-container-high/70 border-secondary/50":"hover:bg-surface-container-high/30 border-transparent"}`,children:[h.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[h.jsx("span",{className:"material-symbols-outlined text-outline text-[16px]",children:"chat"}),h.jsx("span",{className:"font-data-mono text-xs text-on-surface font-medium truncate",children:x.title})]}),h.jsx("span",{className:"font-label-caps text-[10px] text-on-surface-variant/60 block",children:x.timeAgo})]})},S))})]})]}),h.jsxs("div",{className:"flex-1 flex flex-col relative overflow-hidden bg-[#111417]",children:[h.jsx("div",{className:"flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth pb-32",children:l.length===0?h.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto my-auto py-12",children:[h.jsx("span",{className:"material-symbols-outlined text-primary text-6xl mb-4 opacity-80",style:{fontVariationSettings:"'FILL' 1"},children:"smart_toy"}),h.jsx("h2",{className:"font-display-lg text-2xl md:text-3xl text-on-surface font-bold mb-2",children:"KSP Intelligence Assistant"}),h.jsx("p",{className:"font-body-lg text-sm text-on-surface-variant mb-8",children:"Secure AI processing activated. How can I assist with your investigation today?"}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 w-full",children:[h.jsxs("button",{onClick:()=>_("Predict crime hotspots based on recent FIRs in Bengaluru"),className:"glass-panel p-4 rounded-xl text-left hover:border-secondary/50 transition-all group flex flex-col gap-2 cursor-pointer",children:[h.jsx("span",{className:"material-symbols-outlined text-secondary opacity-70 group-hover:opacity-100 transition-opacity",children:"timeline"}),h.jsx("span",{className:"font-body-md text-xs font-medium text-on-surface",children:"Predict crime hotspots based on recent FIRs"})]}),h.jsxs("button",{onClick:()=>_("Show known associates for Suspect ID: 9402"),className:"glass-panel p-4 rounded-xl text-left hover:border-secondary/50 transition-all group flex flex-col gap-2 cursor-pointer",children:[h.jsx("span",{className:"material-symbols-outlined text-secondary opacity-70 group-hover:opacity-100 transition-opacity",children:"group"}),h.jsx("span",{className:"font-body-md text-xs font-medium text-on-surface",children:"Show known associates for Suspect ID: 9402"})]}),h.jsxs("button",{onClick:()=>_("Explain evidence protocol for seized digital assets"),className:"glass-panel p-4 rounded-xl text-left hover:border-secondary/50 transition-all group flex flex-col gap-2 cursor-pointer",children:[h.jsx("span",{className:"material-symbols-outlined text-secondary opacity-70 group-hover:opacity-100 transition-opacity",children:"policy"}),h.jsx("span",{className:"font-body-md text-xs font-medium text-on-surface",children:"Explain evidence protocol for seized digital assets"})]})]})]}):h.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[l.map(x=>{var S,A,w,M;return x.sender==="user"?h.jsxs("div",{className:"flex flex-col items-end gap-1",children:[h.jsx("div",{className:"bg-[#323539] text-on-surface px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] border border-white/5 shadow-md",children:h.jsx("p",{className:"font-body-md text-sm",children:x.content})}),h.jsxs("span",{className:"font-label-caps text-[10px] text-on-surface-variant/50 mr-2",children:["Officer • ",x.timestamp]})]},x.id):h.jsxs("div",{className:"flex gap-4",children:[h.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mt-1",children:h.jsx("span",{className:"material-symbols-outlined text-primary text-[20px]",style:{fontVariationSettings:"'FILL' 1"},children:"smart_toy"})}),h.jsxs("div",{className:"flex-1 space-y-3 max-w-[90%]",children:[h.jsxs("div",{className:"flex items-center gap-2 text-secondary font-data-mono text-xs opacity-80",children:[h.jsx("span",{className:"material-symbols-outlined text-[16px] animate-spin",children:"autorenew"}),h.jsx("span",{children:"Querying Case Center DB... Accessing KSP Grid..."})]}),h.jsxs("div",{className:"glass-panel p-5 rounded-2xl rounded-tl-sm relative overflow-hidden border border-white/10",children:[h.jsx("div",{className:"scan-line"}),((S=x.metadata)==null?void 0:S.title)&&h.jsxs("h4",{className:"font-headline-md text-base md:text-lg font-bold text-on-surface mb-3 flex items-center gap-2 flex-wrap",children:[h.jsx("span",{children:x.metadata.title}),x.metadata.isConfidential&&h.jsx("span",{className:"bg-surface-container px-2 py-0.5 rounded text-[10px] font-data-mono text-outline-variant border border-outline-variant/30 font-semibold",children:"CONFIDENTIAL"})]}),h.jsxs("div",{className:"prose prose-invert max-w-none font-body-md text-sm text-on-surface-variant space-y-3",children:[h.jsx("p",{className:"whitespace-pre-line",children:x.content}),((A=x.metadata)==null?void 0:A.keyFindings)&&x.metadata.keyFindings.length>0&&h.jsxs("div",{className:"bg-black/40 border border-white/10 p-4 rounded-lg my-3",children:[h.jsx("h5",{className:"font-label-caps text-xs text-primary mb-2 font-bold uppercase tracking-wider",children:"Key Findings & MO"}),h.jsx("ul",{className:"list-disc pl-5 space-y-1 text-xs text-on-surface",children:x.metadata.keyFindings.map((b,P)=>h.jsx("li",{children:b},P))})]}),((w=x.metadata)==null?void 0:w.refTags)&&x.metadata.refTags.length>0&&h.jsxs("div",{className:"flex flex-wrap gap-2 my-2 items-center",children:[h.jsx("span",{className:"font-label-caps text-xs text-outline font-semibold mr-1",children:"Ref:"}),x.metadata.refTags.map((b,P)=>h.jsxs("a",{href:"#search",className:"inline-flex items-center gap-1 bg-surface-container px-2.5 py-1 rounded text-xs font-data-mono text-primary hover:bg-primary/10 border border-primary/20 transition-colors",children:[h.jsx("span",{className:"material-symbols-outlined text-[14px]",children:"description"}),h.jsx("span",{children:b})]},P))]})]}),h.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10 flex items-center justify-between flex-wrap gap-3",children:[h.jsxs("div",{className:"flex items-center gap-1.5 bg-black/30 px-2.5 py-1 rounded border border-white/5",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-secondary"}),h.jsxs("span",{className:"font-data-mono text-xs text-secondary font-semibold",children:["Confidence: ",((M=x.metadata)==null?void 0:M.confidence)||"94%"]})]}),h.jsxs("div",{className:"flex gap-2",children:[h.jsxs("button",{onClick:()=>alert("Opening geospatial overlay in Command Center"),className:"px-3 py-1.5 rounded bg-surface border border-white/10 text-xs font-label-caps hover:bg-white/5 transition-colors flex items-center gap-1 cursor-pointer",children:[h.jsx("span",{className:"material-symbols-outlined text-[14px]",children:"map"}),h.jsx("span",{children:"Map View"})]}),h.jsxs("button",{onClick:()=>alert("Intelligence dossier exported as PDF"),className:"px-3 py-1.5 rounded bg-surface border border-white/10 text-xs font-label-caps hover:bg-white/5 transition-colors flex items-center gap-1 text-primary cursor-pointer",children:[h.jsx("span",{className:"material-symbols-outlined text-[14px]",children:"file_download"}),h.jsx("span",{children:"Export"})]})]})]})]})]})]},x.id)}),o&&h.jsxs("div",{className:"flex gap-4",children:[h.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center",children:h.jsx("span",{className:"material-symbols-outlined text-primary text-[20px]",style:{fontVariationSettings:"'FILL' 1"},children:"smart_toy"})}),h.jsxs("div",{className:"glass-panel px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5 w-20",children:[h.jsx("div",{className:"w-2 h-2 bg-secondary rounded-full animate-ping"}),h.jsx("div",{className:"w-2 h-2 bg-secondary rounded-full animate-ping delay-100"}),h.jsx("div",{className:"w-2 h-2 bg-secondary rounded-full animate-ping delay-200"})]})]}),h.jsx("div",{ref:g})]})}),h.jsx("div",{className:"absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-[#111417] via-[#111417] to-transparent pointer-events-none z-20",children:h.jsxs("div",{className:"max-w-4xl mx-auto pointer-events-auto",children:[h.jsxs("div",{className:"glass-panel rounded-xl flex flex-col p-2 cyber-glow focus-within:border-secondary focus-within:cyber-glow-active transition-all border border-white/10",children:[h.jsx("div",{className:"flex items-center gap-2 px-2 py-1",children:h.jsxs("span",{className:"bg-surface-container-high px-2 py-0.5 rounded text-[10px] font-data-mono text-outline-variant flex items-center gap-1",children:[h.jsx("span",{className:"material-symbols-outlined text-[12px]",children:"database"}),h.jsx("span",{children:"KSP Intelligence DB"})]})}),h.jsxs("div",{className:"flex items-end gap-2 relative",children:[h.jsx("button",{type:"button",onClick:()=>alert("Attachment upload dialog initiated."),className:"p-2 text-outline hover:text-primary transition-colors flex-shrink-0 cursor-pointer",title:"Attach digital evidence",children:h.jsx("span",{className:"material-symbols-outlined",children:"add_circle"})}),h.jsx("textarea",{value:i,onChange:x=>s(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),_())},className:"w-full bg-transparent border-none text-on-surface font-body-md text-sm placeholder:text-outline-variant resize-none focus:ring-0 max-h-32 py-2 outline-none",placeholder:"Request intelligence analysis, search records, or correlate data...",rows:1}),h.jsxs("div",{className:"flex items-center gap-1 p-1 flex-shrink-0",children:[h.jsx("button",{type:"button",onClick:()=>alert("Voice command active. Speak clearly."),className:"p-2 text-outline hover:text-secondary transition-colors cursor-pointer",title:"Voice dictation",children:h.jsx("span",{className:"material-symbols-outlined",children:"mic"})}),h.jsx("button",{type:"button",onClick:()=>_(),disabled:!i.trim()||o,className:"w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-lg disabled:opacity-50 cursor-pointer",children:h.jsx("span",{className:"material-symbols-outlined text-[20px]",style:{fontVariationSettings:"'FILL' 1"},children:"send"})})]})]})]}),h.jsx("div",{className:"text-center mt-2",children:h.jsx("span",{className:"font-data-mono text-[10px] text-outline-variant",children:"AI responses may require manual verification. KSP Intel v2.4"})})]})})]})]})},jy=()=>{const[l,e]=at.useState("fir"),[i,s]=at.useState("Cyber Ransomware Incident - Tech Park"),[o,c]=at.useState("Bengaluru Urban"),[d,m]=at.useState("12.9352° N, 77.6245° E"),[g,p]=at.useState("Unidentified cyber entity compromised local server cluster demanding crypto ransom."),[_,y]=at.useState(null),x=S=>{S.preventDefault();const A=`BLR-2023-FIR-${Math.floor(1e3+Math.random()*9e3)}`;y(A)};return h.jsxs("div",{className:"w-full h-[calc(100vh-64px)] overflow-y-auto p-4 md:p-6 mt-16 max-w-[1400px] mx-auto",children:[h.jsxs("div",{className:"mb-6",children:[h.jsx("h1",{className:"font-headline-lg text-2xl md:text-3xl text-on-surface font-bold",children:"Case Registration Center"}),h.jsx("p",{className:"font-data-mono text-xs text-outline mt-1",children:"KSP Intelligence Intake Protocol v4.1"})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[h.jsxs("button",{onClick:()=>e("fir"),className:`glass-panel p-4 rounded-xl text-left transition-all border cursor-pointer ${l==="fir"?"border-secondary bg-secondary/10 cyber-glow-active":"border-white/10 hover:border-white/20"}`,children:[h.jsxs("div",{className:"flex justify-between items-center mb-2",children:[h.jsx("span",{className:"font-data-mono text-[10px] text-secondary font-bold",children:"INT-01"}),h.jsx("span",{className:"material-symbols-outlined text-secondary text-xl",children:"description"})]}),h.jsx("h3",{className:"font-headline-md text-base font-bold text-on-surface",children:"Register FIR"}),h.jsx("p",{className:"font-body-md text-xs text-outline mt-1",children:"First Information Report Entry"})]}),h.jsxs("button",{onClick:()=>e("suspect"),className:`glass-panel p-4 rounded-xl text-left transition-all border cursor-pointer ${l==="suspect"?"border-secondary bg-secondary/10 cyber-glow-active":"border-white/10 hover:border-white/20"}`,children:[h.jsxs("div",{className:"flex justify-between items-center mb-2",children:[h.jsx("span",{className:"font-data-mono text-[10px] text-error font-bold",children:"BIO-02"}),h.jsx("span",{className:"material-symbols-outlined text-error text-xl",children:"person_add"})]}),h.jsx("h3",{className:"font-headline-md text-base font-bold text-on-surface",children:"Add Criminal"}),h.jsx("p",{className:"font-body-md text-xs text-outline mt-1",children:"Biometric & Suspect Indexing"})]}),h.jsxs("button",{onClick:()=>e("evidence"),className:`glass-panel p-4 rounded-xl text-left transition-all border cursor-pointer ${l==="evidence"?"border-secondary bg-secondary/10 cyber-glow-active":"border-white/10 hover:border-white/20"}`,children:[h.jsxs("div",{className:"flex justify-between items-center mb-2",children:[h.jsx("span",{className:"font-data-mono text-[10px] text-primary font-bold",children:"EVD-03"}),h.jsx("span",{className:"material-symbols-outlined text-primary text-xl",children:"upload_file"})]}),h.jsx("h3",{className:"font-headline-md text-base font-bold text-on-surface",children:"Upload Evidence"}),h.jsx("p",{className:"font-body-md text-xs text-outline mt-1",children:"Digital & Physical Vault"})]}),h.jsxs("button",{onClick:()=>e("assign"),className:`glass-panel p-4 rounded-xl text-left transition-all border cursor-pointer ${l==="assign"?"border-secondary bg-secondary/10 cyber-glow-active":"border-white/10 hover:border-white/20"}`,children:[h.jsxs("div",{className:"flex justify-between items-center mb-2",children:[h.jsx("span",{className:"font-data-mono text-[10px] text-outline font-bold",children:"OPS-04"}),h.jsx("span",{className:"material-symbols-outlined text-outline text-xl",children:"badge"})]}),h.jsx("h3",{className:"font-headline-md text-base font-bold text-on-surface",children:"Assign Officer"}),h.jsx("p",{className:"font-body-md text-xs text-outline mt-1",children:"Investigative Task Force"})]})]}),h.jsxs("div",{className:"glass-panel p-6 md:p-8 rounded-xl border border-white/10",children:[l==="fir"&&h.jsxs("form",{onSubmit:x,className:"space-y-6",children:[h.jsxs("div",{className:"flex justify-between items-center pb-4 border-b border-white/10",children:[h.jsxs("h2",{className:"font-headline-md text-lg text-on-surface font-bold flex items-center gap-2",children:[h.jsx("span",{className:"material-symbols-outlined text-secondary",children:"assignment"}),h.jsx("span",{children:"First Information Report Intake (Protocol INT-01)"})]}),h.jsx("span",{className:"font-data-mono text-xs text-secondary font-bold",children:"STATUS: DRAFT"})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"font-label-caps text-xs text-outline font-semibold block mb-1",children:"Incident Title"}),h.jsx("input",{type:"text",value:i,onChange:S=>s(S.target.value),className:"w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 font-body-md text-sm text-on-surface focus:border-secondary outline-none",required:!0})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"font-label-caps text-xs text-outline font-semibold block mb-1",children:"Jurisdiction District"}),h.jsxs("select",{value:o,onChange:S=>c(S.target.value),className:"w-full bg-black/60 border border-white/10 rounded-lg px-3 py-2.5 font-body-md text-sm text-on-surface focus:border-secondary outline-none",children:[h.jsx("option",{children:"Bengaluru Urban"}),h.jsx("option",{children:"Mysuru Division"}),h.jsx("option",{children:"Hubballi-Dharwad"}),h.jsx("option",{children:"Mangaluru Coastal"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"font-label-caps text-xs text-outline font-semibold block mb-1",children:"Geo Coordinates"}),h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:"text",value:d,onChange:S=>m(S.target.value),className:"w-full bg-black/60 border border-white/10 rounded-lg px-3 py-2.5 font-data-mono text-xs text-on-surface focus:border-secondary outline-none pr-8"}),h.jsx("button",{type:"button",onClick:()=>m("12.9716° N, 77.5946° E"),className:"absolute right-2 top-1/2 -translate-y-1/2 text-secondary hover:text-white",title:"My Location",children:h.jsx("span",{className:"material-symbols-outlined text-sm",children:"my_location"})})]})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"font-label-caps text-xs text-outline font-semibold block mb-1",children:"Initial Narrative & Officer Observations"}),h.jsx("textarea",{rows:4,value:g,onChange:S=>p(S.target.value),className:"w-full bg-black/60 border border-white/10 rounded-lg p-3 font-body-md text-sm text-on-surface focus:border-secondary outline-none resize-none"})]})]}),h.jsxs("div",{className:"flex flex-col gap-3",children:[h.jsx("label",{className:"font-label-caps text-xs text-outline font-semibold",children:"Geospatial Verification"}),h.jsxs("div",{className:"flex-1 min-h-[220px] rounded-lg border border-white/10 overflow-hidden relative group",children:[h.jsx("img",{src:"https://lh3.googleusercontent.com/aida-public/AB6AXuA4FB3kBvlYIrHpLvw89Yr3DtoYoTWmEcvafDFk9wMwLaQU0LTI1jEvDUmU1C2-oyML1JaQZY7Dsd8LXL4J07R3rHMAxsI0b4WIgxOHV_P_vG6o-EDzdAWHgpn90CTz1yHpH6KuHAOZ8A2QqfXcSqGMV2wkmsStdjbEdwbkPaSA2seUNq0TQElI1yHIRef2z1aVIxi--BevC6-dCadxf0QNw2B-jnKXX3E0W0xucCE6Ji1zlHtcBfyzzA",alt:"Geospatial Map",className:"w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-300"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4",children:h.jsxs("span",{className:"font-data-mono text-xs text-secondary font-bold flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-secondary pulse-dot"}),h.jsx("span",{children:"COORDS VERIFIED: Koramangala Sector 4"})]})})]})]})]}),h.jsx("div",{className:"pt-4 border-t border-white/10 flex justify-end",children:h.jsxs("button",{type:"submit",className:"px-8 py-3 bg-secondary text-on-secondary font-label-caps text-xs font-bold rounded-lg hover:bg-secondary-container transition-all shadow-[0_0_15px_rgba(76,215,246,0.3)] flex items-center gap-2 cursor-pointer",children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:"verified"}),h.jsx("span",{children:"COMMIT RECORD TO DB"})]})})]}),l==="suspect"&&h.jsxs("div",{className:"space-y-6",children:[h.jsxs("h2",{className:"font-headline-md text-lg text-on-surface font-bold flex items-center gap-2",children:[h.jsx("span",{className:"material-symbols-outlined text-error",children:"fingerprint"}),h.jsx("span",{children:"Biometric & Criminal Profile Intake (Protocol BIO-02)"})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[h.jsxs("div",{className:"border border-dashed border-white/20 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-black/40 hover:border-error/50 transition-colors",children:[h.jsx("span",{className:"material-symbols-outlined text-error text-4xl mb-2",children:"add_a_photo"}),h.jsx("span",{className:"font-label-caps text-xs text-on-surface font-bold",children:"Upload Biometric Photo"}),h.jsx("span",{className:"font-data-mono text-[10px] text-outline mt-1",children:"MPEG / PNG / RAW (Facial Indexing)"})]}),h.jsxs("div",{className:"md:col-span-2 space-y-4",children:[h.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"font-label-caps text-xs text-outline block mb-1",children:"Primary Alias"}),h.jsx("input",{type:"text",placeholder:"e.g. Viper",className:"w-full bg-black/60 border border-white/10 rounded-lg p-2.5 font-body-md text-sm text-on-surface outline-none"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"font-label-caps text-xs text-outline block mb-1",children:"Government ID / Aadhaar / Passport"}),h.jsx("input",{type:"text",placeholder:"e.g. ####-####-8821",className:"w-full bg-black/60 border border-white/10 rounded-lg p-2.5 font-body-md text-sm text-on-surface outline-none"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"font-label-caps text-xs text-outline block mb-1",children:"Threat Designation"}),h.jsxs("select",{className:"w-full bg-black/60 border border-white/10 rounded-lg p-2.5 font-body-md text-sm text-on-surface outline-none",children:[h.jsx("option",{children:"LEVEL 1 - CRITICAL (Armed / Cyber Offender)"}),h.jsx("option",{children:"LEVEL 2 - HIGH (Organized Gang Member)"}),h.jsx("option",{children:"LEVEL 3 - MODERATE (Property Offender)"})]})]}),h.jsx("button",{onClick:()=>alert("Biometric profile committed to KSP Cyber DB."),className:"px-6 py-2.5 bg-error text-on-error font-label-caps text-xs font-bold rounded-lg hover:bg-error-container transition-all cursor-pointer",children:"SAVE SUSPECT DOSSIER"})]})]})]}),l==="evidence"&&h.jsxs("div",{className:"space-y-6",children:[h.jsxs("h2",{className:"font-headline-md text-lg text-on-surface font-bold flex items-center gap-2",children:[h.jsx("span",{className:"material-symbols-outlined text-primary",children:"upload_file"}),h.jsx("span",{children:"Secure Digital Evidence Vault (Protocol EVD-03)"})]}),h.jsxs("div",{className:"border-2 border-dashed border-primary/30 bg-primary/5 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary transition-colors cursor-pointer",children:[h.jsx("span",{className:"material-symbols-outlined text-primary text-5xl mb-2",children:"cloud_upload"}),h.jsx("span",{className:"font-headline-md text-sm font-bold text-on-surface",children:"Drag and drop classified evidence files here"}),h.jsx("span",{className:"font-data-mono text-xs text-outline mt-1",children:"Supports SHA-256 Hash Indexing for Chain of Custody Compliance"})]})]}),l==="assign"&&h.jsxs("div",{className:"space-y-6",children:[h.jsxs("h2",{className:"font-headline-md text-lg text-on-surface font-bold flex items-center gap-2",children:[h.jsx("span",{className:"material-symbols-outlined text-outline",children:"badge"}),h.jsx("span",{children:"Investigative Operative Assignment (Protocol OPS-04)"})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"bg-black/50 p-4 rounded-xl border border-white/10 flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"w-10 h-10 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center font-data-mono text-secondary font-bold text-xs",children:"RK"}),h.jsxs("div",{children:[h.jsx("h4",{className:"font-headline-md text-sm font-bold text-on-surface",children:"Insp. R. Kumar"}),h.jsx("p",{className:"font-data-mono text-[10px] text-outline",children:"Cyber Cell - Unit 01"})]})]}),h.jsx("button",{onClick:()=>alert("Assigned Inspector R. Kumar to active docket."),className:"px-3 py-1.5 bg-secondary/20 border border-secondary/50 text-secondary font-label-caps text-xs font-bold rounded hover:bg-secondary/30 cursor-pointer",children:"ASSIGN"})]}),h.jsxs("div",{className:"bg-black/50 p-4 rounded-xl border border-white/10 flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center font-data-mono text-primary font-bold text-xs",children:"SP"}),h.jsxs("div",{children:[h.jsx("h4",{className:"font-headline-md text-sm font-bold text-on-surface",children:"Sub-Insp. S. Patil"}),h.jsx("p",{className:"font-data-mono text-[10px] text-outline",children:"Field Intel - Unit 04"})]})]}),h.jsx("button",{onClick:()=>alert("Assigned Sub-Inspector S. Patil to active docket."),className:"px-3 py-1.5 bg-primary/20 border border-primary/50 text-primary font-label-caps text-xs font-bold rounded hover:bg-primary/30 cursor-pointer",children:"ASSIGN"})]})]})]})]}),_&&h.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4",children:h.jsxs("div",{className:"glass-panel max-w-md w-full p-6 rounded-2xl border border-secondary/50 shadow-2xl text-center space-y-4",children:[h.jsx("div",{className:"w-16 h-16 bg-secondary/20 border border-secondary rounded-full flex items-center justify-center mx-auto text-secondary",children:h.jsx("span",{className:"material-symbols-outlined text-3xl",children:"task_alt"})}),h.jsx("h3",{className:"font-headline-lg text-2xl font-bold text-on-surface",children:"Record Committed"}),h.jsx("p",{className:"font-data-mono text-xs text-outline",children:"Docket assigned official registration reference:"}),h.jsx("div",{className:"bg-black/60 py-3 px-4 rounded-lg border border-white/10 font-data-mono text-lg font-bold text-secondary tracking-widest",children:_}),h.jsxs("div",{className:"flex gap-3 pt-2",children:[h.jsx("button",{onClick:()=>y(null),className:"flex-1 py-2.5 bg-white/10 text-on-surface font-label-caps text-xs font-bold rounded-lg hover:bg-white/20 transition-colors cursor-pointer",children:"Close"}),h.jsx("button",{onClick:()=>{alert(`Printing official docket for ${_}...`),y(null)},className:"flex-1 py-2.5 bg-secondary text-on-secondary font-label-caps text-xs font-bold rounded-lg hover:bg-secondary-container transition-colors cursor-pointer",children:"Print Docket"})]})]})})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ph="185",Xy=0,H0=1,Wy=2,Dc=1,qy=2,Hl=3,ss=0,Wn=1,va=2,ya=0,Dr=1,G0=2,V0=3,k0=4,Yy=5,Ds=100,Zy=101,Ky=102,Qy=103,Jy=104,$y=200,eb=201,tb=202,nb=203,kd=204,jd=205,ib=206,ab=207,sb=208,rb=209,lb=210,ob=211,cb=212,ub=213,fb=214,Xd=0,Wd=1,qd=2,Or=3,Yd=4,Zd=5,Kd=6,Qd=7,Xx=0,db=1,hb=2,ki=0,Wx=1,qx=2,Yx=3,Zx=4,Kx=5,Qx=6,Jx=7,$x=300,Ps=301,Pr=302,cd=303,ud=304,Yc=306,Jd=1e3,_a=1001,$d=1002,wn=1003,pb=1004,lc=1005,On=1006,fd=1007,Ls=1008,_i=1009,ev=1010,tv=1011,kl=1012,Ih=1013,Wi=1014,Gi=1015,Sa=1016,Bh=1017,Fh=1018,jl=1020,nv=35902,iv=35899,av=1021,sv=1022,Ni=1023,Ma=1026,Os=1027,rv=1028,zh=1029,Is=1030,Hh=1031,Gh=1033,Uc=33776,Lc=33777,Oc=33778,Pc=33779,eh=35840,th=35841,nh=35842,ih=35843,ah=36196,sh=37492,rh=37496,lh=37488,oh=37489,Bc=37490,ch=37491,uh=37808,fh=37809,dh=37810,hh=37811,ph=37812,mh=37813,gh=37814,xh=37815,vh=37816,_h=37817,yh=37818,bh=37819,Sh=37820,Mh=37821,Eh=36492,Th=36494,Ah=36495,Rh=36283,Ch=36284,Fc=36285,wh=36286,mb=3200,j0=0,gb=1,is="",xi="srgb",zc="srgb-linear",Hc="linear",Ft="srgb",xr=7680,X0=519,xb=512,vb=513,_b=514,Vh=515,yb=516,bb=517,kh=518,Sb=519,W0=35044,q0="300 es",Vi=2e3,Gc=2001;function Mb(l){for(let e=l.length-1;e>=0;--e)if(l[e]>=65535)return!0;return!1}function Vc(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function Eb(){const l=Vc("canvas");return l.style.display="block",l}const Y0={};function Z0(...l){const e="THREE."+l.shift();console.log(e,...l)}function lv(l){const e=l[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=l[1];i&&i.isStackTrace?l[0]+=" "+i.getLocation():l[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return l}function tt(...l){l=lv(l);const e="THREE."+l.shift();{const i=l[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...l)}}function Mt(...l){l=lv(l);const e="THREE."+l.shift();{const i=l[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...l)}}function Ur(...l){const e=l.join(" ");e in Y0||(Y0[e]=!0,tt(...l))}function Tb(l,e,i){return new Promise(function(s,o){function c(){switch(l.clientWaitSync(e,l.SYNC_FLUSH_COMMANDS_BIT,0)){case l.WAIT_FAILED:o();break;case l.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Ab={[Xd]:Wd,[qd]:Kd,[Yd]:Qd,[Or]:Zd,[Wd]:Xd,[Kd]:qd,[Qd]:Yd,[Zd]:Or};class Fs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=Math.PI/180,Nh=180/Math.PI;function Xl(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[l&255]+Un[l>>8&255]+Un[l>>16&255]+Un[l>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function St(l,e,i){return Math.max(e,Math.min(i,l))}function Rb(l,e){return(l%e+e)%e}function hd(l,e,i){return(1-i)*l+i*e}function Ul(l,e){switch(e.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xn(l,e){switch(e.constructor){case Float32Array:return l;case Uint32Array:return Math.round(l*4294967295);case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int32Array:return Math.round(l*2147483647);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const qh=class qh{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,o=e.elements;return this.x=o[0]*i+o[3]*s+o[6],this.y=o[1]*i+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),o=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*o+e.x,this.y=c*o+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qh.prototype.isVector2=!0;let Rt=qh;class Fr{constructor(e=0,i=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=o}static slerpFlat(e,i,s,o,c,d,m){let g=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3],x=c[d+0],S=c[d+1],A=c[d+2],w=c[d+3];if(y!==w||g!==x||p!==S||_!==A){let M=g*x+p*S+_*A+y*w;M<0&&(x=-x,S=-S,A=-A,w=-w,M=-M);let b=1-m;if(M<.9995){const P=Math.acos(M),z=Math.sin(P);b=Math.sin(b*P)/z,m=Math.sin(m*P)/z,g=g*b+x*m,p=p*b+S*m,_=_*b+A*m,y=y*b+w*m}else{g=g*b+x*m,p=p*b+S*m,_=_*b+A*m,y=y*b+w*m;const P=1/Math.sqrt(g*g+p*p+_*_+y*y);g*=P,p*=P,_*=P,y*=P}}e[i]=g,e[i+1]=p,e[i+2]=_,e[i+3]=y}static multiplyQuaternionsFlat(e,i,s,o,c,d){const m=s[o],g=s[o+1],p=s[o+2],_=s[o+3],y=c[d],x=c[d+1],S=c[d+2],A=c[d+3];return e[i]=m*A+_*y+g*S-p*x,e[i+1]=g*A+_*x+p*y-m*S,e[i+2]=p*A+_*S+m*x-g*y,e[i+3]=_*A-m*y-g*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,o){return this._x=e,this._y=i,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,o=e._y,c=e._z,d=e._order,m=Math.cos,g=Math.sin,p=m(s/2),_=m(o/2),y=m(c/2),x=g(s/2),S=g(o/2),A=g(c/2);switch(d){case"XYZ":this._x=x*_*y+p*S*A,this._y=p*S*y-x*_*A,this._z=p*_*A+x*S*y,this._w=p*_*y-x*S*A;break;case"YXZ":this._x=x*_*y+p*S*A,this._y=p*S*y-x*_*A,this._z=p*_*A-x*S*y,this._w=p*_*y+x*S*A;break;case"ZXY":this._x=x*_*y-p*S*A,this._y=p*S*y+x*_*A,this._z=p*_*A+x*S*y,this._w=p*_*y-x*S*A;break;case"ZYX":this._x=x*_*y-p*S*A,this._y=p*S*y+x*_*A,this._z=p*_*A-x*S*y,this._w=p*_*y+x*S*A;break;case"YZX":this._x=x*_*y+p*S*A,this._y=p*S*y+x*_*A,this._z=p*_*A-x*S*y,this._w=p*_*y-x*S*A;break;case"XZY":this._x=x*_*y-p*S*A,this._y=p*S*y-x*_*A,this._z=p*_*A+x*S*y,this._w=p*_*y+x*S*A;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],o=i[4],c=i[8],d=i[1],m=i[5],g=i[9],p=i[2],_=i[6],y=i[10],x=s+m+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-g)*S,this._y=(c-p)*S,this._z=(d-o)*S}else if(s>m&&s>y){const S=2*Math.sqrt(1+s-m-y);this._w=(_-g)/S,this._x=.25*S,this._y=(o+d)/S,this._z=(c+p)/S}else if(m>y){const S=2*Math.sqrt(1+m-s-y);this._w=(c-p)/S,this._x=(o+d)/S,this._y=.25*S,this._z=(g+_)/S}else{const S=2*Math.sqrt(1+y-s-m);this._w=(d-o)/S,this._x=(c+p)/S,this._y=(g+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,i/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,o=e._y,c=e._z,d=e._w,m=i._x,g=i._y,p=i._z,_=i._w;return this._x=s*_+d*m+o*p-c*g,this._y=o*_+d*g+c*m-s*p,this._z=c*_+d*p+s*g-o*m,this._w=d*_-s*m-o*g-c*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,o=e._y,c=e._z,d=e._w,m=this.dot(e);m<0&&(s=-s,o=-o,c=-c,d=-d,m=-m);let g=1-i;if(m<.9995){const p=Math.acos(m),_=Math.sin(p);g=Math.sin(g*p)/_,i=Math.sin(i*p)/_,this._x=this._x*g+s*i,this._y=this._y*g+o*i,this._z=this._z*g+c*i,this._w=this._w*g+d*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+o*i,this._z=this._z*g+c*i,this._w=this._w*g+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yh=class Yh{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(K0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(K0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*o,this.y=c[1]*i+c[4]*s+c[7]*o,this.z=c[2]*i+c[5]*s+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,o=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*o+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*o+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*o+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,o=this.z,c=e.x,d=e.y,m=e.z,g=e.w,p=2*(d*o-m*s),_=2*(m*i-c*o),y=2*(c*s-d*i);return this.x=i+g*p+d*y-m*_,this.y=s+g*_+m*p-c*y,this.z=o+g*y+c*_-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*o,this.y=c[1]*i+c[5]*s+c[9]*o,this.z=c[2]*i+c[6]*s+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,o=e.y,c=e.z,d=i.x,m=i.y,g=i.z;return this.x=o*g-c*m,this.y=c*d-s*g,this.z=s*m-o*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return i*i+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const o=Math.sin(i)*e;return this.x=o*Math.sin(s),this.y=Math.cos(i)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yh.prototype.isVector3=!0;let ne=Yh;const pd=new ne,K0=new Fr,Zh=class Zh{constructor(e,i,s,o,c,d,m,g,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,o,c,d,m,g,p)}set(e,i,s,o,c,d,m,g,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=m,_[3]=i,_[4]=c,_[5]=g,_[6]=s,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,o=i.elements,c=this.elements,d=s[0],m=s[3],g=s[6],p=s[1],_=s[4],y=s[7],x=s[2],S=s[5],A=s[8],w=o[0],M=o[3],b=o[6],P=o[1],z=o[4],N=o[7],F=o[2],L=o[5],I=o[8];return c[0]=d*w+m*P+g*F,c[3]=d*M+m*z+g*L,c[6]=d*b+m*N+g*I,c[1]=p*w+_*P+y*F,c[4]=p*M+_*z+y*L,c[7]=p*b+_*N+y*I,c[2]=x*w+S*P+A*F,c[5]=x*M+S*z+A*L,c[8]=x*b+S*N+A*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],o=e[2],c=e[3],d=e[4],m=e[5],g=e[6],p=e[7],_=e[8];return i*d*_-i*m*p-s*c*_+s*m*g+o*c*p-o*d*g}invert(){const e=this.elements,i=e[0],s=e[1],o=e[2],c=e[3],d=e[4],m=e[5],g=e[6],p=e[7],_=e[8],y=_*d-m*p,x=m*g-_*c,S=p*c-d*g,A=i*y+s*x+o*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=y*w,e[1]=(o*p-_*s)*w,e[2]=(m*s-o*d)*w,e[3]=x*w,e[4]=(_*i-o*g)*w,e[5]=(o*c-m*i)*w,e[6]=S*w,e[7]=(s*g-p*i)*w,e[8]=(d*i-s*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,o,c,d,m){const g=Math.cos(c),p=Math.sin(c);return this.set(s*g,s*p,-s*(g*d+p*m)+d+e,-o*p,o*g,-o*(-p*d+g*m)+m+i,0,0,1),this}scale(e,i){return Ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(md.makeScale(e,i)),this}rotate(e){return Ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(md.makeRotation(-e)),this}translate(e,i){return Ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(md.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let o=0;o<9;o++)if(i[o]!==s[o])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zh.prototype.isMatrix3=!0;let rt=Zh;const md=new rt,Q0=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),J0=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cb(){const l={enabled:!0,workingColorSpace:zc,spaces:{},convert:function(o,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ft&&(o.r=ba(o.r),o.g=ba(o.g),o.b=ba(o.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ft&&(o.r=Lr(o.r),o.g=Lr(o.g),o.b=Lr(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===is?Hc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,d){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Ur("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),l.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Ur("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),l.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return l.define({[zc]:{primaries:e,whitePoint:s,transfer:Hc,toXYZ:Q0,fromXYZ:J0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:s,transfer:Ft,toXYZ:Q0,fromXYZ:J0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),l}const bt=Cb();function ba(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function Lr(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}let vr;class wb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{vr===void 0&&(vr=Vc("canvas")),vr.width=e.width,vr.height=e.height;const o=vr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=vr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Vc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=ba(c[d]/255)*255;return s.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ba(i[s]/255)*255):i[s]=ba(i[s]);return{data:i,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nb=0;class jh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nb++}),this.uuid=Xl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,m=o.length;d<m;d++)o[d].isDataTexture?c.push(gd(o[d].image)):c.push(gd(o[d]))}else c=gd(o);s.url=c}return i||(e.images[this.uuid]=s),s}}function gd(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?wb.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let Db=0;const xd=new ne;class Bn extends Fs{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=_a,o=_a,c=On,d=Ls,m=Ni,g=_i,p=Bn.DEFAULT_ANISOTROPY,_=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Xl(),this.name="",this.source=new jh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=m,this.internalFormat=null,this.type=g,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xd).x}get height(){return this.source.getSize(xd).y}get depth(){return this.source.getSize(xd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){tt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){tt(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$x)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jd:e.x=e.x-Math.floor(e.x);break;case _a:e.x=e.x<0?0:1;break;case $d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jd:e.y=e.y-Math.floor(e.y);break;case _a:e.y=e.y<0?0:1;break;case $d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=$x;Bn.DEFAULT_ANISOTROPY=1;const Kh=class Kh{constructor(e=0,i=0,s=0,o=1){this.x=e,this.y=i,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,o){return this.x=e,this.y=i,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*o+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*o+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*o+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*o+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,o,c;const g=e.elements,p=g[0],_=g[4],y=g[8],x=g[1],S=g[5],A=g[9],w=g[2],M=g[6],b=g[10];if(Math.abs(_-x)<.01&&Math.abs(y-w)<.01&&Math.abs(A-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(y+w)<.1&&Math.abs(A+M)<.1&&Math.abs(p+S+b-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,N=(S+1)/2,F=(b+1)/2,L=(_+x)/4,I=(y+w)/4,T=(A+M)/4;return z>N&&z>F?z<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(z),o=L/s,c=I/s):N>F?N<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(N),s=L/o,c=T/o):F<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),s=I/c,o=T/c),this.set(s,o,c,i),this}let P=Math.sqrt((M-A)*(M-A)+(y-w)*(y-w)+(x-_)*(x-_));return Math.abs(P)<.001&&(P=1),this.x=(M-A)/P,this.y=(y-w)/P,this.z=(x-_)/P,this.w=Math.acos((p+S+b-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kh.prototype.isVector4=!0;let rn=Kh;class Ub extends Fs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:s.depth},c=new Bn(o),d=s.count;for(let m=0;m<d;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new jh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends Ub{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class ov extends Bn{constructor(e=null,i=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lb extends Bn{constructor(e=null,i=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qc=class qc{constructor(e,i,s,o,c,d,m,g,p,_,y,x,S,A,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,o,c,d,m,g,p,_,y,x,S,A,w,M)}set(e,i,s,o,c,d,m,g,p,_,y,x,S,A,w,M){const b=this.elements;return b[0]=e,b[4]=i,b[8]=s,b[12]=o,b[1]=c,b[5]=d,b[9]=m,b[13]=g,b[2]=p,b[6]=_,b[10]=y,b[14]=x,b[3]=S,b[7]=A,b[11]=w,b[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,o=1/_r.setFromMatrixColumn(e,0).length(),c=1/_r.setFromMatrixColumn(e,1).length(),d=1/_r.setFromMatrixColumn(e,2).length();return i[0]=s[0]*o,i[1]=s[1]*o,i[2]=s[2]*o,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,o=e.y,c=e.z,d=Math.cos(s),m=Math.sin(s),g=Math.cos(o),p=Math.sin(o),_=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const x=d*_,S=d*y,A=m*_,w=m*y;i[0]=g*_,i[4]=-g*y,i[8]=p,i[1]=S+A*p,i[5]=x-w*p,i[9]=-m*g,i[2]=w-x*p,i[6]=A+S*p,i[10]=d*g}else if(e.order==="YXZ"){const x=g*_,S=g*y,A=p*_,w=p*y;i[0]=x+w*m,i[4]=A*m-S,i[8]=d*p,i[1]=d*y,i[5]=d*_,i[9]=-m,i[2]=S*m-A,i[6]=w+x*m,i[10]=d*g}else if(e.order==="ZXY"){const x=g*_,S=g*y,A=p*_,w=p*y;i[0]=x-w*m,i[4]=-d*y,i[8]=A+S*m,i[1]=S+A*m,i[5]=d*_,i[9]=w-x*m,i[2]=-d*p,i[6]=m,i[10]=d*g}else if(e.order==="ZYX"){const x=d*_,S=d*y,A=m*_,w=m*y;i[0]=g*_,i[4]=A*p-S,i[8]=x*p+w,i[1]=g*y,i[5]=w*p+x,i[9]=S*p-A,i[2]=-p,i[6]=m*g,i[10]=d*g}else if(e.order==="YZX"){const x=d*g,S=d*p,A=m*g,w=m*p;i[0]=g*_,i[4]=w-x*y,i[8]=A*y+S,i[1]=y,i[5]=d*_,i[9]=-m*_,i[2]=-p*_,i[6]=S*y+A,i[10]=x-w*y}else if(e.order==="XZY"){const x=d*g,S=d*p,A=m*g,w=m*p;i[0]=g*_,i[4]=-y,i[8]=p*_,i[1]=x*y+w,i[5]=d*_,i[9]=S*y-A,i[2]=A*y-S,i[6]=m*_,i[10]=w*y+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ob,e,Pb)}lookAt(e,i,s){const o=this.elements;return ri.subVectors(e,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Qa.crossVectors(s,ri),Qa.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Qa.crossVectors(s,ri)),Qa.normalize(),oc.crossVectors(ri,Qa),o[0]=Qa.x,o[4]=oc.x,o[8]=ri.x,o[1]=Qa.y,o[5]=oc.y,o[9]=ri.y,o[2]=Qa.z,o[6]=oc.z,o[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,o=i.elements,c=this.elements,d=s[0],m=s[4],g=s[8],p=s[12],_=s[1],y=s[5],x=s[9],S=s[13],A=s[2],w=s[6],M=s[10],b=s[14],P=s[3],z=s[7],N=s[11],F=s[15],L=o[0],I=o[4],T=o[8],O=o[12],q=o[1],V=o[5],J=o[9],$=o[13],fe=o[2],K=o[6],B=o[10],G=o[14],ee=o[3],ge=o[7],Ee=o[11],U=o[15];return c[0]=d*L+m*q+g*fe+p*ee,c[4]=d*I+m*V+g*K+p*ge,c[8]=d*T+m*J+g*B+p*Ee,c[12]=d*O+m*$+g*G+p*U,c[1]=_*L+y*q+x*fe+S*ee,c[5]=_*I+y*V+x*K+S*ge,c[9]=_*T+y*J+x*B+S*Ee,c[13]=_*O+y*$+x*G+S*U,c[2]=A*L+w*q+M*fe+b*ee,c[6]=A*I+w*V+M*K+b*ge,c[10]=A*T+w*J+M*B+b*Ee,c[14]=A*O+w*$+M*G+b*U,c[3]=P*L+z*q+N*fe+F*ee,c[7]=P*I+z*V+N*K+F*ge,c[11]=P*T+z*J+N*B+F*Ee,c[15]=P*O+z*$+N*G+F*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],o=e[8],c=e[12],d=e[1],m=e[5],g=e[9],p=e[13],_=e[2],y=e[6],x=e[10],S=e[14],A=e[3],w=e[7],M=e[11],b=e[15],P=g*S-p*x,z=m*S-p*y,N=m*x-g*y,F=d*S-p*_,L=d*x-g*_,I=d*y-m*_;return i*(w*P-M*z+b*N)-s*(A*P-M*F+b*L)+o*(A*z-w*F+b*I)-c*(A*N-w*L+M*I)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],o=e[8],c=e[1],d=e[5],m=e[9],g=e[2],p=e[6],_=e[10];return i*(d*_-m*p)-s*(c*_-m*g)+o*(c*p-d*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],o=e[2],c=e[3],d=e[4],m=e[5],g=e[6],p=e[7],_=e[8],y=e[9],x=e[10],S=e[11],A=e[12],w=e[13],M=e[14],b=e[15],P=i*m-s*d,z=i*g-o*d,N=i*p-c*d,F=s*g-o*m,L=s*p-c*m,I=o*p-c*g,T=_*w-y*A,O=_*M-x*A,q=_*b-S*A,V=y*M-x*w,J=y*b-S*w,$=x*b-S*M,fe=P*$-z*J+N*V+F*q-L*O+I*T;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/fe;return e[0]=(m*$-g*J+p*V)*K,e[1]=(o*J-s*$-c*V)*K,e[2]=(w*I-M*L+b*F)*K,e[3]=(x*L-y*I-S*F)*K,e[4]=(g*q-d*$-p*O)*K,e[5]=(i*$-o*q+c*O)*K,e[6]=(M*N-A*I-b*z)*K,e[7]=(_*I-x*N+S*z)*K,e[8]=(d*J-m*q+p*T)*K,e[9]=(s*q-i*J-c*T)*K,e[10]=(A*L-w*N+b*P)*K,e[11]=(y*N-_*L-S*P)*K,e[12]=(m*O-d*V-g*T)*K,e[13]=(i*V-s*O+o*T)*K,e[14]=(w*z-A*F-M*P)*K,e[15]=(_*F-y*z+x*P)*K,this}scale(e){const i=this.elements,s=e.x,o=e.y,c=e.z;return i[0]*=s,i[4]*=o,i[8]*=c,i[1]*=s,i[5]*=o,i[9]*=c,i[2]*=s,i[6]*=o,i[10]*=c,i[3]*=s,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,o))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),o=Math.sin(i),c=1-s,d=e.x,m=e.y,g=e.z,p=c*d,_=c*m;return this.set(p*d+s,p*m-o*g,p*g+o*m,0,p*m+o*g,_*m+s,_*g-o*d,0,p*g-o*m,_*g+o*d,c*g*g+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,o,c,d){return this.set(1,s,c,0,e,1,d,0,i,o,1,0,0,0,0,1),this}compose(e,i,s){const o=this.elements,c=i._x,d=i._y,m=i._z,g=i._w,p=c+c,_=d+d,y=m+m,x=c*p,S=c*_,A=c*y,w=d*_,M=d*y,b=m*y,P=g*p,z=g*_,N=g*y,F=s.x,L=s.y,I=s.z;return o[0]=(1-(w+b))*F,o[1]=(S+N)*F,o[2]=(A-z)*F,o[3]=0,o[4]=(S-N)*L,o[5]=(1-(x+b))*L,o[6]=(M+P)*L,o[7]=0,o[8]=(A+z)*I,o[9]=(M-P)*I,o[10]=(1-(x+w))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let d=_r.set(o[0],o[1],o[2]).length();const m=_r.set(o[4],o[5],o[6]).length(),g=_r.set(o[8],o[9],o[10]).length();c<0&&(d=-d),Ai.copy(this);const p=1/d,_=1/m,y=1/g;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=_,Ai.elements[5]*=_,Ai.elements[6]*=_,Ai.elements[8]*=y,Ai.elements[9]*=y,Ai.elements[10]*=y,i.setFromRotationMatrix(Ai),s.x=d,s.y=m,s.z=g,this}makePerspective(e,i,s,o,c,d,m=Vi,g=!1){const p=this.elements,_=2*c/(i-e),y=2*c/(s-o),x=(i+e)/(i-e),S=(s+o)/(s-o);let A,w;if(g)A=c/(d-c),w=d*c/(d-c);else if(m===Vi)A=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(m===Gc)A=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=y,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,o,c,d,m=Vi,g=!1){const p=this.elements,_=2/(i-e),y=2/(s-o),x=-(i+e)/(i-e),S=-(s+o)/(s-o);let A,w;if(g)A=1/(d-c),w=d/(d-c);else if(m===Vi)A=-2/(d-c),w=-(d+c)/(d-c);else if(m===Gc)A=-1/(d-c),w=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=y,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=A,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let o=0;o<16;o++)if(i[o]!==s[o])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};qc.prototype.isMatrix4=!0;let ln=qc;const _r=new ne,Ai=new ln,Ob=new ne(0,0,0),Pb=new ne(1,1,1),Qa=new ne,oc=new ne,ri=new ne,$0=new ln,ex=new Fr;class Bs{constructor(e=0,i=0,s=0,o=Bs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,o=this._order){return this._x=e,this._y=i,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const o=e.elements,c=o[0],d=o[4],m=o[8],g=o[1],p=o[5],_=o[9],y=o[2],x=o[6],S=o[10];switch(i){case"XYZ":this._y=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(m,S),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-St(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(m,S));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return $0.makeRotationFromQuaternion(e),this.setFromRotationMatrix($0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return ex.setFromEuler(this),this.setFromQuaternion(ex,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bs.DEFAULT_ORDER="XYZ";class Xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ib=0;const tx=new ne,yr=new Fr,ha=new ln,cc=new ne,Ll=new ne,Bb=new ne,Fb=new Fr,nx=new ne(1,0,0),ix=new ne(0,1,0),ax=new ne(0,0,1),sx={type:"added"},zb={type:"removed"},br={type:"childadded",child:null},vd={type:"childremoved",child:null};class qn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=Xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new ne,i=new Bs,s=new Fr,o=new ne(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ln},normalMatrix:{value:new rt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(nx,e)}rotateY(e){return this.rotateOnAxis(ix,e)}rotateZ(e){return this.rotateOnAxis(ax,e)}translateOnAxis(e,i){return tx.copy(e).applyQuaternion(this.quaternion),this.position.add(tx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(nx,e)}translateY(e){return this.translateOnAxis(ix,e)}translateZ(e){return this.translateOnAxis(ax,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?cc.copy(e):cc.set(e,i,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Ll,cc,this.up):ha.lookAt(cc,Ll,this.up),this.quaternion.setFromRotationMatrix(ha),o&&(ha.extractRotation(o.matrixWorld),yr.setFromRotationMatrix(ha),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sx),br.child=e,this.dispatchEvent(br),br.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(zb),vd.child=e,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sx),br.child=e,this.dispatchEvent(br),br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,o=this.children.length;s<o;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,e,Bb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,Fb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*o,c[13]+=s-c[1]*i-c[5]*s-c[9]*o,c[14]+=o-c[2]*i-c[6]*s-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let d=0,m=c.length;d<m;d++)c[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(m=>({...m})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(m,g){return m[g.uuid]===void 0&&(m[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const g=m.shapes;if(Array.isArray(g))for(let p=0,_=g.length;p<_;p++){const y=g[p];c(e.shapes,y)}else c(e.shapes,g)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let g=0,p=this.material.length;g<p;g++)m.push(c(e.materials,this.material[g]));o.material=m}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let m=0;m<this.children.length;m++)o.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let m=0;m<this.animations.length;m++){const g=this.animations[m];o.animations.push(c(e.animations,g))}}if(i){const m=d(e.geometries),g=d(e.materials),p=d(e.textures),_=d(e.images),y=d(e.shapes),x=d(e.skeletons),S=d(e.animations),A=d(e.nodes);m.length>0&&(s.geometries=m),g.length>0&&(s.materials=g),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),y.length>0&&(s.shapes=y),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),A.length>0&&(s.nodes=A)}return s.object=o,s;function d(m){const g=[];for(const p in m){const _=m[p];delete _.metadata,g.push(_)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}qn.DEFAULT_UP=new ne(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gl extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hb={type:"move"};class _d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let o=null,c=null,d=null;const m=this._targetRay,g=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,s),b=this._getHandJoint(p,w);M!==null&&(b.matrix.fromArray(M.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=M.radius),b.visible=M!==null}const _=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],x=_.position.distanceTo(y.position),S=.02,A=.005;p.inputState.pinching&&x>S+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:e,target:this})));m!==null&&(o=i.getPose(e.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(m.matrix.fromArray(o.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,o.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(o.linearVelocity)):m.hasLinearVelocity=!1,o.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(o.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(Hb)))}return m!==null&&(m.visible=o!==null),g!==null&&(g.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Gl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},uc={h:0,s:0,l:0};function yd(l,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?l+(e-l)*6*i:i<1/2?e:i<2/3?l+(e-l)*6*(2/3-i):l}class Nt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,o=bt.workingColorSpace){return this.r=e,this.g=i,this.b=s,bt.colorSpaceToWorking(this,o),this}setHSL(e,i,s,o=bt.workingColorSpace){if(e=Rb(e,1),i=St(i,0,1),s=St(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=yd(d,c,e+1/3),this.g=yd(d,c,e),this.b=yd(d,c,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,i=xi){function s(c){c!==void 0&&parseFloat(c)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],m=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:tt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xi){const s=cv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return bt.workingToColorSpace(Ln.copy(this),e),Math.round(St(Ln.r*255,0,255))*65536+Math.round(St(Ln.g*255,0,255))*256+Math.round(St(Ln.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=bt.workingColorSpace){bt.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,o=Ln.g,c=Ln.b,d=Math.max(s,o,c),m=Math.min(s,o,c);let g,p;const _=(m+d)/2;if(m===d)g=0,p=0;else{const y=d-m;switch(p=_<=.5?y/(d+m):y/(2-d-m),d){case s:g=(o-c)/y+(o<c?6:0);break;case o:g=(c-s)/y+2;break;case c:g=(s-o)/y+4;break}g/=6}return e.h=g,e.s=p,e.l=_,e}getRGB(e,i=bt.workingColorSpace){return bt.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=xi){bt.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,s=Ln.g,o=Ln.b;return e!==xi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,i,s){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(uc);const s=hd(Ja.h,uc.h,i),o=hd(Ja.s,uc.s,i),c=hd(Ja.l,uc.l,i);return this.setHSL(s,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*o,this.g=c[1]*i+c[4]*s+c[7]*o,this.b=c[2]*i+c[5]*s+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Nt;Nt.NAMES=cv;class Gb extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bs,this.environmentIntensity=1,this.environmentRotation=new Bs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ri=new ne,pa=new ne,bd=new ne,ma=new ne,Sr=new ne,Mr=new ne,rx=new ne,Sd=new ne,Md=new ne,Ed=new ne,Td=new rn,Ad=new rn,Rd=new rn;class wi{constructor(e=new ne,i=new ne,s=new ne){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,o){o.subVectors(s,i),Ri.subVectors(e,i),o.cross(Ri);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,s,o,c){Ri.subVectors(o,i),pa.subVectors(s,i),bd.subVectors(e,i);const d=Ri.dot(Ri),m=Ri.dot(pa),g=Ri.dot(bd),p=pa.dot(pa),_=pa.dot(bd),y=d*p-m*m;if(y===0)return c.set(0,0,0),null;const x=1/y,S=(p*g-m*_)*x,A=(d*_-m*g)*x;return c.set(1-S-A,A,S)}static containsPoint(e,i,s,o){return this.getBarycoord(e,i,s,o,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(e,i,s,o,c,d,m,g){return this.getBarycoord(e,i,s,o,ma)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,ma.x),g.addScaledVector(d,ma.y),g.addScaledVector(m,ma.z),g)}static getInterpolatedAttribute(e,i,s,o,c,d){return Td.setScalar(0),Ad.setScalar(0),Rd.setScalar(0),Td.fromBufferAttribute(e,i),Ad.fromBufferAttribute(e,s),Rd.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(Td,c.x),d.addScaledVector(Ad,c.y),d.addScaledVector(Rd,c.z),d}static isFrontFacing(e,i,s,o){return Ri.subVectors(s,i),pa.subVectors(e,i),Ri.cross(pa).dot(o)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,o){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,s,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ri.cross(pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,o,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,s,o,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,o=this.b,c=this.c;let d,m;Sr.subVectors(o,s),Mr.subVectors(c,s),Sd.subVectors(e,s);const g=Sr.dot(Sd),p=Mr.dot(Sd);if(g<=0&&p<=0)return i.copy(s);Md.subVectors(e,o);const _=Sr.dot(Md),y=Mr.dot(Md);if(_>=0&&y<=_)return i.copy(o);const x=g*y-_*p;if(x<=0&&g>=0&&_<=0)return d=g/(g-_),i.copy(s).addScaledVector(Sr,d);Ed.subVectors(e,c);const S=Sr.dot(Ed),A=Mr.dot(Ed);if(A>=0&&S<=A)return i.copy(c);const w=S*p-g*A;if(w<=0&&p>=0&&A<=0)return m=p/(p-A),i.copy(s).addScaledVector(Mr,m);const M=_*A-S*y;if(M<=0&&y-_>=0&&S-A>=0)return rx.subVectors(c,o),m=(y-_)/(y-_+(S-A)),i.copy(o).addScaledVector(rx,m);const b=1/(M+w+x);return d=w*b,m=x*b,i.copy(s).addScaledVector(Sr,d).addScaledVector(Mr,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wl{constructor(e=new ne(1/0,1/0,1/0),i=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,m=c.count;d<m;d++)e.isMesh===!0?e.getVertexPosition(d,Ci):Ci.fromBufferAttribute(c,d),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),fc.copy(s.boundingBox)),fc.applyMatrix4(e.matrixWorld),this.union(fc)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ol),dc.subVectors(this.max,Ol),Er.subVectors(e.a,Ol),Tr.subVectors(e.b,Ol),Ar.subVectors(e.c,Ol),$a.subVectors(Tr,Er),es.subVectors(Ar,Tr),As.subVectors(Er,Ar);let i=[0,-$a.z,$a.y,0,-es.z,es.y,0,-As.z,As.y,$a.z,0,-$a.x,es.z,0,-es.x,As.z,0,-As.x,-$a.y,$a.x,0,-es.y,es.x,0,-As.y,As.x,0];return!Cd(i,Er,Tr,Ar,dc)||(i=[1,0,0,0,1,0,0,0,1],!Cd(i,Er,Tr,Ar,dc))?!1:(hc.crossVectors($a,es),i=[hc.x,hc.y,hc.z],Cd(i,Er,Tr,Ar,dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ga),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ga=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Ci=new ne,fc=new Wl,Er=new ne,Tr=new ne,Ar=new ne,$a=new ne,es=new ne,As=new ne,Ol=new ne,dc=new ne,hc=new ne,Rs=new ne;function Cd(l,e,i,s,o){for(let c=0,d=l.length-3;c<=d;c+=3){Rs.fromArray(l,c);const m=o.x*Math.abs(Rs.x)+o.y*Math.abs(Rs.y)+o.z*Math.abs(Rs.z),g=e.dot(Rs),p=i.dot(Rs),_=s.dot(Rs);if(Math.max(-Math.max(g,p,_),Math.min(g,p,_))>m)return!1}return!0}const xn=new ne,pc=new Rt;let Vb=0;class Xi extends Fs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=W0,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(e),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ul(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Xn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ul(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ul(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ul(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ul(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,o){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),o=Xn(o,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,i,s,o,c){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),o=Xn(o,this.array),c=Xn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==W0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class uv extends Xi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class fv extends Xi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Yn extends Xi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const kb=new Wl,Pl=new ne,wd=new ne;class Zc{constructor(e=new ne,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):kb.setFromPoints(e).getCenter(s);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pl.subVectors(e,this.center);const i=Pl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),o=(s-this.radius)*.5;this.center.addScaledVector(Pl,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pl.copy(e.center).add(wd)),this.expandByPoint(Pl.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jb=0;const gi=new ln,Nd=new qn,Rr=new ne,li=new Wl,Il=new Wl,Mn=new ne;class yi extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=Xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mb(e)?fv:uv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new rt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,i,s){return gi.makeTranslation(e,i,s),this.applyMatrix4(gi),this}scale(e,i,s){return gi.makeScale(e,i,s),this.applyMatrix4(gi),this}lookAt(e){return Nd.lookAt(e),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let o=0,c=e.length;o<c;o++){const d=e[o];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Yn(s,3))}else{const s=Math.min(e.length,i.count);for(let o=0;o<s;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,o=i.length;s<o;s++){const c=i[s];li.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const m=i[c];Il.setFromBufferAttribute(m),this.morphTargetsRelative?(Mn.addVectors(li.min,Il.min),li.expandByPoint(Mn),Mn.addVectors(li.max,Il.max),li.expandByPoint(Mn)):(li.expandByPoint(Il.min),li.expandByPoint(Il.max))}li.getCenter(s);let o=0;for(let c=0,d=e.count;c<d;c++)Mn.fromBufferAttribute(e,c),o=Math.max(o,s.distanceToSquared(Mn));if(i)for(let c=0,d=i.length;c<d;c++){const m=i[c],g=this.morphTargetsRelative;for(let p=0,_=m.count;p<_;p++)Mn.fromBufferAttribute(m,p),g&&(Rr.fromBufferAttribute(e,p),Mn.add(Rr)),o=Math.max(o,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,o=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Xi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const m=[],g=[];for(let T=0;T<s.count;T++)m[T]=new ne,g[T]=new ne;const p=new ne,_=new ne,y=new ne,x=new Rt,S=new Rt,A=new Rt,w=new ne,M=new ne;function b(T,O,q){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,O),y.fromBufferAttribute(s,q),x.fromBufferAttribute(c,T),S.fromBufferAttribute(c,O),A.fromBufferAttribute(c,q),_.sub(p),y.sub(p),S.sub(x),A.sub(x);const V=1/(S.x*A.y-A.x*S.y);isFinite(V)&&(w.copy(_).multiplyScalar(A.y).addScaledVector(y,-S.y).multiplyScalar(V),M.copy(y).multiplyScalar(S.x).addScaledVector(_,-A.x).multiplyScalar(V),m[T].add(w),m[O].add(w),m[q].add(w),g[T].add(M),g[O].add(M),g[q].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,O=P.length;T<O;++T){const q=P[T],V=q.start,J=q.count;for(let $=V,fe=V+J;$<fe;$+=3)b(e.getX($+0),e.getX($+1),e.getX($+2))}const z=new ne,N=new ne,F=new ne,L=new ne;function I(T){F.fromBufferAttribute(o,T),L.copy(F);const O=m[T];z.copy(O),z.sub(F.multiplyScalar(F.dot(O))).normalize(),N.crossVectors(L,O);const V=N.dot(g[T])<0?-1:1;d.setXYZW(T,z.x,z.y,z.z,V)}for(let T=0,O=P.length;T<O;++T){const q=P[T],V=q.start,J=q.count;for(let $=V,fe=V+J;$<fe;$+=3)I(e.getX($+0)),I(e.getX($+1)),I(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Xi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const o=new ne,c=new ne,d=new ne,m=new ne,g=new ne,p=new ne,_=new ne,y=new ne;if(e)for(let x=0,S=e.count;x<S;x+=3){const A=e.getX(x+0),w=e.getX(x+1),M=e.getX(x+2);o.fromBufferAttribute(i,A),c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),_.subVectors(d,c),y.subVectors(o,c),_.cross(y),m.fromBufferAttribute(s,A),g.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),m.add(_),g.add(_),p.add(_),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(w,g.x,g.y,g.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,S=i.count;x<S;x+=3)o.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),_.subVectors(d,c),y.subVectors(o,c),_.cross(y),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(m,g){const p=m.array,_=m.itemSize,y=m.normalized,x=new p.constructor(g.length*_);let S=0,A=0;for(let w=0,M=g.length;w<M;w++){m.isInterleavedBufferAttribute?S=g[w]*m.data.stride+m.offset:S=g[w]*_;for(let b=0;b<_;b++)x[A++]=p[S++]}return new Xi(x,_,y)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new yi,s=this.index.array,o=this.attributes;for(const m in o){const g=o[m],p=e(g,s);i.setAttribute(m,p)}const c=this.morphAttributes;for(const m in c){const g=[],p=c[m];for(let _=0,y=p.length;_<y;_++){const x=p[_],S=e(x,s);g.push(S)}i.morphAttributes[m]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let m=0,g=d.length;m<g;m++){const p=d[m];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(e[p]=g[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const p=s[g];e.data.attributes[g]=p.toJSON(e.data)}const o={};let c=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],_=[];for(let y=0,x=p.length;y<x;y++){const S=p[y];_.push(S.toJSON(e.data))}_.length>0&&(o[g]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],y=c[p];for(let x=0,S=y.length;x<S;x++)_.push(y[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,_=d.length;p<_;p++){const y=d[p];this.addGroup(y.start,y.count,y.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Xb=0;class ql extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=Xl(),this.name="",this.type="Material",this.blending=Dr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=jd,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){tt(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){tt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector2&&s&&s.isVector2||o&&o.isEuler&&s&&s.isEuler||o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(s.blending=this.blending),this.side!==ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==kd&&(s.blendSrc=this.blendSrc),this.blendDst!==jd&&(s.blendDst=this.blendDst),this.blendEquation!==Ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const d=[];for(const m in c){const g=c[m];delete g.metadata,d.push(g)}return d}if(i){const c=o(e.textures),d=o(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Rt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const o=i.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xa=new ne,Dd=new ne,mc=new ne,ts=new ne,Ud=new ne,gc=new ne,Ld=new ne;class Wh{constructor(e=new ne,i=new ne(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(e))}distanceSqToSegment(e,i,s,o){Dd.copy(e).add(i).multiplyScalar(.5),mc.copy(i).sub(e).normalize(),ts.copy(this.origin).sub(Dd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(mc),m=ts.dot(this.direction),g=-ts.dot(mc),p=ts.lengthSq(),_=Math.abs(1-d*d);let y,x,S,A;if(_>0)if(y=d*g-m,x=d*m-g,A=c*_,y>=0)if(x>=-A)if(x<=A){const w=1/_;y*=w,x*=w,S=y*(y+d*x+2*m)+x*(d*y+x+2*g)+p}else x=c,y=Math.max(0,-(d*x+m)),S=-y*y+x*(x+2*g)+p;else x=-c,y=Math.max(0,-(d*x+m)),S=-y*y+x*(x+2*g)+p;else x<=-A?(y=Math.max(0,-(-d*c+m)),x=y>0?-c:Math.min(Math.max(-c,-g),c),S=-y*y+x*(x+2*g)+p):x<=A?(y=0,x=Math.min(Math.max(-c,-g),c),S=x*(x+2*g)+p):(y=Math.max(0,-(d*c+m)),x=y>0?c:Math.min(Math.max(-c,-g),c),S=-y*y+x*(x+2*g)+p);else x=d>0?-c:c,y=Math.max(0,-(d*x+m)),S=-y*y+x*(x+2*g)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Dd).addScaledVector(mc,x),S}intersectSphere(e,i){xa.subVectors(e.center,this.origin);const s=xa.dot(this.direction),o=xa.dot(xa)-s*s,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),m=s-d,g=s+d;return g<0?null:m<0?this.at(g,i):this.at(m,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,o,c,d,m,g;const p=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),_>=0?(c=(e.min.y-x.y)*_,d=(e.max.y-x.y)*_):(c=(e.max.y-x.y)*_,d=(e.min.y-x.y)*_),s>d||c>o||((c>s||isNaN(s))&&(s=c),(d<o||isNaN(o))&&(o=d),y>=0?(m=(e.min.z-x.z)*y,g=(e.max.z-x.z)*y):(m=(e.max.z-x.z)*y,g=(e.min.z-x.z)*y),s>g||m>o)||((m>s||s!==s)&&(s=m),(g<o||o!==o)&&(o=g),o<0)?null:this.at(s>=0?s:o,i)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,i,s,o,c){Ud.subVectors(i,e),gc.subVectors(s,e),Ld.crossVectors(Ud,gc);let d=this.direction.dot(Ld),m;if(d>0){if(o)return null;m=1}else if(d<0)m=-1,d=-d;else return null;ts.subVectors(this.origin,e);const g=m*this.direction.dot(gc.crossVectors(ts,gc));if(g<0)return null;const p=m*this.direction.dot(Ud.cross(ts));if(p<0||g+p>d)return null;const _=-m*ts.dot(Ld);return _<0?null:this.at(_/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kc extends ql{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bs,this.combine=Xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lx=new ln,Cs=new Wh,xc=new Zc,ox=new ne,vc=new ne,_c=new ne,yc=new ne,Od=new ne,bc=new ne,cx=new ne,Sc=new ne;class Di extends qn{constructor(e=new yi,i=new kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const o=i[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const m=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(e,i){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(o,e);const m=this.morphTargetInfluences;if(c&&m){bc.set(0,0,0);for(let g=0,p=c.length;g<p;g++){const _=m[g],y=c[g];_!==0&&(Od.fromBufferAttribute(y,e),d?bc.addScaledVector(Od,_):bc.addScaledVector(Od.sub(i),_))}i.add(bc)}return i}raycast(e,i){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(c),Cs.copy(e.ray).recast(e.near),!(xc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(xc,ox)===null||Cs.origin.distanceToSquared(ox)>(e.far-e.near)**2))&&(lx.copy(c).invert(),Cs.copy(e.ray).applyMatrix4(lx),!(s.boundingBox!==null&&Cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Cs)))}_computeIntersections(e,i,s){let o;const c=this.geometry,d=this.material,m=c.index,g=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,y=c.attributes.normal,x=c.groups,S=c.drawRange;if(m!==null)if(Array.isArray(d))for(let A=0,w=x.length;A<w;A++){const M=x[A],b=d[M.materialIndex],P=Math.max(M.start,S.start),z=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let N=P,F=z;N<F;N+=3){const L=m.getX(N),I=m.getX(N+1),T=m.getX(N+2);o=Mc(this,b,e,s,p,_,y,L,I,T),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=M.materialIndex,i.push(o))}}else{const A=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let M=A,b=w;M<b;M+=3){const P=m.getX(M),z=m.getX(M+1),N=m.getX(M+2);o=Mc(this,d,e,s,p,_,y,P,z,N),o&&(o.faceIndex=Math.floor(M/3),i.push(o))}}else if(g!==void 0)if(Array.isArray(d))for(let A=0,w=x.length;A<w;A++){const M=x[A],b=d[M.materialIndex],P=Math.max(M.start,S.start),z=Math.min(g.count,Math.min(M.start+M.count,S.start+S.count));for(let N=P,F=z;N<F;N+=3){const L=N,I=N+1,T=N+2;o=Mc(this,b,e,s,p,_,y,L,I,T),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=M.materialIndex,i.push(o))}}else{const A=Math.max(0,S.start),w=Math.min(g.count,S.start+S.count);for(let M=A,b=w;M<b;M+=3){const P=M,z=M+1,N=M+2;o=Mc(this,d,e,s,p,_,y,P,z,N),o&&(o.faceIndex=Math.floor(M/3),i.push(o))}}}}function Wb(l,e,i,s,o,c,d,m){let g;if(e.side===Wn?g=s.intersectTriangle(d,c,o,!0,m):g=s.intersectTriangle(o,c,d,e.side===ss,m),g===null)return null;Sc.copy(m),Sc.applyMatrix4(l.matrixWorld);const p=i.ray.origin.distanceTo(Sc);return p<i.near||p>i.far?null:{distance:p,point:Sc.clone(),object:l}}function Mc(l,e,i,s,o,c,d,m,g,p){l.getVertexPosition(m,vc),l.getVertexPosition(g,_c),l.getVertexPosition(p,yc);const _=Wb(l,e,i,s,vc,_c,yc,cx);if(_){const y=new ne;wi.getBarycoord(cx,vc,_c,yc,y),o&&(_.uv=wi.getInterpolatedAttribute(o,m,g,p,y,new Rt)),c&&(_.uv1=wi.getInterpolatedAttribute(c,m,g,p,y,new Rt)),d&&(_.normal=wi.getInterpolatedAttribute(d,m,g,p,y,new ne),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:m,b:g,c:p,normal:new ne,materialIndex:0};wi.getNormal(vc,_c,yc,x.normal),_.face=x,_.barycoord=y}return _}class qb extends Bn{constructor(e=null,i=1,s=1,o,c,d,m,g,p=wn,_=wn,y,x){super(null,d,m,g,p,_,o,c,y,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pd=new ne,Yb=new ne,Zb=new rt;class Ns{constructor(e=new ne(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,o){return this.normal.set(e,i,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const o=Pd.subVectors(s,i).cross(Yb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const o=e.delta(Pd),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(o,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Zb.getNormalMatrix(e),o=this.coplanarPoint(Pd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Zc,Kb=new Rt(.5,.5),Ec=new ne;class dv{constructor(e=new Ns,i=new Ns,s=new Ns,o=new Ns,c=new Ns,d=new Ns){this.planes=[e,i,s,o,c,d]}set(e,i,s,o,c,d){const m=this.planes;return m[0].copy(e),m[1].copy(i),m[2].copy(s),m[3].copy(o),m[4].copy(c),m[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Vi,s=!1){const o=this.planes,c=e.elements,d=c[0],m=c[1],g=c[2],p=c[3],_=c[4],y=c[5],x=c[6],S=c[7],A=c[8],w=c[9],M=c[10],b=c[11],P=c[12],z=c[13],N=c[14],F=c[15];if(o[0].setComponents(p-d,S-_,b-A,F-P).normalize(),o[1].setComponents(p+d,S+_,b+A,F+P).normalize(),o[2].setComponents(p+m,S+y,b+w,F+z).normalize(),o[3].setComponents(p-m,S-y,b-w,F-z).normalize(),s)o[4].setComponents(g,x,M,N).normalize(),o[5].setComponents(p-g,S-x,b-M,F-N).normalize();else if(o[4].setComponents(p-g,S-x,b-M,F-N).normalize(),i===Vi)o[5].setComponents(p+g,S+x,b+M,F+N).normalize();else if(i===Gc)o[5].setComponents(g,x,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const i=Kb.distanceTo(e.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const i=this.planes,s=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const o=i[s];if(Ec.x=o.normal.x>0?e.max.x:e.min.x,Ec.y=o.normal.y>0?e.max.y:e.min.y,Ec.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hv extends ql{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jc=new ne,Xc=new ne,ux=new ln,Bl=new Wh,Tc=new Zc,Id=new ne,fx=new ne;class Qb extends qn{constructor(e=new yi,i=new hv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let o=1,c=i.count;o<c;o++)jc.fromBufferAttribute(i,o-1),Xc.fromBufferAttribute(i,o),s[o]=s[o-1],s[o]+=jc.distanceTo(Xc);e.setAttribute("lineDistance",new Yn(s,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(o),Tc.radius+=c,e.ray.intersectsSphere(Tc)===!1)return;ux.copy(o).invert(),Bl.copy(e.ray).applyMatrix4(ux);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=m*m,p=this.isLineSegments?2:1,_=s.index,x=s.attributes.position;if(_!==null){const S=Math.max(0,d.start),A=Math.min(_.count,d.start+d.count);for(let w=S,M=A-1;w<M;w+=p){const b=_.getX(w),P=_.getX(w+1),z=Ac(this,e,Bl,g,b,P,w);z&&i.push(z)}if(this.isLineLoop){const w=_.getX(A-1),M=_.getX(S),b=Ac(this,e,Bl,g,w,M,A-1);b&&i.push(b)}}else{const S=Math.max(0,d.start),A=Math.min(x.count,d.start+d.count);for(let w=S,M=A-1;w<M;w+=p){const b=Ac(this,e,Bl,g,w,w+1,w);b&&i.push(b)}if(this.isLineLoop){const w=Ac(this,e,Bl,g,A-1,S,A-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const o=i[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const m=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function Ac(l,e,i,s,o,c,d){const m=l.geometry.attributes.position;if(jc.fromBufferAttribute(m,o),Xc.fromBufferAttribute(m,c),i.distanceSqToSegment(jc,Xc,Id,fx)>s)return;Id.applyMatrix4(l.matrixWorld);const p=e.ray.origin.distanceTo(Id);if(!(p<e.near||p>e.far))return{distance:p,point:fx.clone().applyMatrix4(l.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:l}}const dx=new ne,hx=new ne;class Jb extends Qb{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let o=0,c=i.count;o<c;o+=2)dx.fromBufferAttribute(i,o),hx.fromBufferAttribute(i,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+dx.distanceTo(hx);e.setAttribute("lineDistance",new Yn(s,1))}else tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pv extends Bn{constructor(e=[],i=Ps,s,o,c,d,m,g,p,_){super(e,i,s,o,c,d,m,g,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ir extends Bn{constructor(e,i,s=Wi,o,c,d,m=wn,g=wn,p,_=Ma,y=1){if(_!==Ma&&_!==Os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:y};super(x,o,c,d,m,g,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class $b extends Ir{constructor(e,i=Wi,s=Ps,o,c,d=wn,m=wn,g,p=Ma){const _={width:e,height:e,depth:1},y=[_,_,_,_,_,_];super(e,e,i,s,o,c,d,m,g,p),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mv extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yl extends yi{constructor(e=1,i=1,s=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:o,heightSegments:c,depthSegments:d};const m=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const g=[],p=[],_=[],y=[];let x=0,S=0;A("z","y","x",-1,-1,s,i,e,d,c,0),A("z","y","x",1,-1,s,i,-e,d,c,1),A("x","z","y",1,1,e,s,i,o,d,2),A("x","z","y",1,-1,e,s,-i,o,d,3),A("x","y","z",1,-1,e,i,s,o,c,4),A("x","y","z",-1,-1,e,i,-s,o,c,5),this.setIndex(g),this.setAttribute("position",new Yn(p,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(y,2));function A(w,M,b,P,z,N,F,L,I,T,O){const q=N/I,V=F/T,J=N/2,$=F/2,fe=L/2,K=I+1,B=T+1;let G=0,ee=0;const ge=new ne;for(let Ee=0;Ee<B;Ee++){const U=Ee*V-$;for(let Y=0;Y<K;Y++){const Me=Y*q-J;ge[w]=Me*P,ge[M]=U*z,ge[b]=fe,p.push(ge.x,ge.y,ge.z),ge[w]=0,ge[M]=0,ge[b]=L>0?1:-1,_.push(ge.x,ge.y,ge.z),y.push(Y/I),y.push(1-Ee/T),G+=1}}for(let Ee=0;Ee<T;Ee++)for(let U=0;U<I;U++){const Y=x+U+K*Ee,Me=x+U+K*(Ee+1),Ce=x+(U+1)+K*(Ee+1),Ie=x+(U+1)+K*Ee;g.push(Y,Me,Ie),g.push(Me,Ce,Ie),ee+=6}m.addGroup(S,ee,O),S+=ee,x+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kc extends yi{constructor(e=1,i=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:o};const c=e/2,d=i/2,m=Math.floor(s),g=Math.floor(o),p=m+1,_=g+1,y=e/m,x=i/g,S=[],A=[],w=[],M=[];for(let b=0;b<_;b++){const P=b*x-d;for(let z=0;z<p;z++){const N=z*y-c;A.push(N,-P,0),w.push(0,0,1),M.push(z/m),M.push(1-b/g)}}for(let b=0;b<g;b++)for(let P=0;P<m;P++){const z=P+p*b,N=P+p*(b+1),F=P+1+p*(b+1),L=P+1+p*b;S.push(z,N,L),S.push(N,F,L)}this.setIndex(S),this.setAttribute("position",new Yn(A,3)),this.setAttribute("normal",new Yn(w,3)),this.setAttribute("uv",new Yn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wc extends yi{constructor(e=1,i=32,s=16,o=0,c=Math.PI*2,d=0,m=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:o,phiLength:c,thetaStart:d,thetaLength:m},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const g=Math.min(d+m,Math.PI);let p=0;const _=[],y=new ne,x=new ne,S=[],A=[],w=[],M=[];for(let b=0;b<=s;b++){const P=[],z=b/s,N=d+z*m,F=e*Math.cos(N),L=Math.sqrt(e*e-F*F);let I=0;b===0&&d===0?I=.5/i:b===s&&g===Math.PI&&(I=-.5/i);for(let T=0;T<=i;T++){const O=T/i,q=o+O*c;y.x=-L*Math.cos(q),y.y=F,y.z=L*Math.sin(q),A.push(y.x,y.y,y.z),x.copy(y).normalize(),w.push(x.x,x.y,x.z),M.push(O+I,1-z),P.push(p++)}_.push(P)}for(let b=0;b<s;b++)for(let P=0;P<i;P++){const z=_[b][P+1],N=_[b][P],F=_[b+1][P],L=_[b+1][P+1];(b!==0||d>0)&&S.push(z,N,L),(b!==s-1||g<Math.PI)&&S.push(N,F,L)}this.setIndex(S),this.setAttribute("position",new Yn(A,3)),this.setAttribute("normal",new Yn(w,3)),this.setAttribute("uv",new Yn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Br(l){const e={};for(const i in l){e[i]={};for(const s in l[i]){const o=l[i][s];if(px(o))o.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=o.clone();else if(Array.isArray(o))if(px(o[0])){const c=[];for(let d=0,m=o.length;d<m;d++)c[d]=o[d].clone();e[i][s]=c}else e[i][s]=o.slice();else e[i][s]=o}}return e}function In(l){const e={};for(let i=0;i<l.length;i++){const s=Br(l[i]);for(const o in s)e[o]=s[o]}return e}function px(l){return l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)}function eS(l){const e=[];for(let i=0;i<l.length;i++)e.push(l[i].clone());return e}function gv(l){const e=l.getRenderTarget();return e===null?l.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const tS={clone:Br,merge:In};var nS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends ql{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nS,this.fragmentShader=iS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=eS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?i.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[o]={type:"m4",value:d.toArray()}:i.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(this.uniforms[s]={},o.type){case"t":this.uniforms[s].value=i[o.value]||null;break;case"c":this.uniforms[s].value=new Nt().setHex(o.value);break;case"v2":this.uniforms[s].value=new Rt().fromArray(o.value);break;case"v3":this.uniforms[s].value=new ne().fromArray(o.value);break;case"v4":this.uniforms[s].value=new rn().fromArray(o.value);break;case"m3":this.uniforms[s].value=new rt().fromArray(o.value);break;case"m4":this.uniforms[s].value=new ln().fromArray(o.value);break;default:this.uniforms[s].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class aS extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sS extends ql{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rS extends ql{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rc=new ne,Cc=new Fr,Fi=new ne;class xv extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rc,Cc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rc,Cc,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Rc,Cc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rc,Cc,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new ne,mx=new Rt,gx=new Rt;class vi extends xv{constructor(e=50,i=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Nh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nh*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,i){return this.getViewBounds(e,mx,gx),i.subVectors(gx,mx)}setViewOffset(e,i,s,o,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(dd*.5*this.fov)/this.zoom,s=2*i,o=this.aspect*s,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,p=d.fullHeight;c+=d.offsetX*o/g,i-=d.offsetY*s/p,o*=d.width/g,s*=d.height/p}const m=this.filmOffset;m!==0&&(c+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class vv extends xv{constructor(e=-1,i=1,s=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-e,d=s+e,m=o+i,g=o-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,m-=_*this.view.offsetY,g=m-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,m,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Cr=-90,wr=1;class lS extends qn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new vi(Cr,wr,e,i);o.layers=this.layers,this.add(o);const c=new vi(Cr,wr,e,i);c.layers=this.layers,this.add(c);const d=new vi(Cr,wr,e,i);d.layers=this.layers,this.add(d);const m=new vi(Cr,wr,e,i);m.layers=this.layers,this.add(m);const g=new vi(Cr,wr,e,i);g.layers=this.layers,this.add(g);const p=new vi(Cr,wr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,o,c,d,m,g]=i;for(const p of i)this.remove(p);if(e===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===Gc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,m,g,p,_]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,3,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(s,4,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(y,x,S),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class oS extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const xx=new ln;class cS{constructor(e,i,s=0,o=1/0){this.ray=new Wh(e,i),this.near=s,this.far=o,this.camera=null,this.layers=new Xh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Mt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return xx.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xx),this}intersectObject(e,i=!0,s=[]){return Dh(e,this,s,i),s.sort(vx),s}intersectObjects(e,i=!0,s=[]){for(let o=0,c=e.length;o<c;o++)Dh(e[o],this,s,i);return s.sort(vx),s}}function vx(l,e){return l.distance-e.distance}function Dh(l,e,i,s){let o=!0;if(l.layers.test(e.layers)&&l.raycast(e,i)===!1&&(o=!1),o===!0&&s===!0){const c=l.children;for(let d=0,m=c.length;d<m;d++)Dh(c[d],e,i,!0)}}const Qh=class Qh{constructor(e,i,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=o,this}};Qh.prototype.isMatrix2=!0;let _x=Qh;function yx(l,e,i,s){const o=uS(s);switch(i){case av:return l*e;case rv:return l*e/o.components*o.byteLength;case zh:return l*e/o.components*o.byteLength;case Is:return l*e*2/o.components*o.byteLength;case Hh:return l*e*2/o.components*o.byteLength;case sv:return l*e*3/o.components*o.byteLength;case Ni:return l*e*4/o.components*o.byteLength;case Gh:return l*e*4/o.components*o.byteLength;case Uc:case Lc:return Math.floor((l+3)/4)*Math.floor((e+3)/4)*8;case Oc:case Pc:return Math.floor((l+3)/4)*Math.floor((e+3)/4)*16;case th:case ih:return Math.max(l,16)*Math.max(e,8)/4;case eh:case nh:return Math.max(l,8)*Math.max(e,8)/2;case ah:case sh:case lh:case oh:return Math.floor((l+3)/4)*Math.floor((e+3)/4)*8;case rh:case Bc:case ch:return Math.floor((l+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((l+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((l+4)/5)*Math.floor((e+3)/4)*16;case dh:return Math.floor((l+4)/5)*Math.floor((e+4)/5)*16;case hh:return Math.floor((l+5)/6)*Math.floor((e+4)/5)*16;case ph:return Math.floor((l+5)/6)*Math.floor((e+5)/6)*16;case mh:return Math.floor((l+7)/8)*Math.floor((e+4)/5)*16;case gh:return Math.floor((l+7)/8)*Math.floor((e+5)/6)*16;case xh:return Math.floor((l+7)/8)*Math.floor((e+7)/8)*16;case vh:return Math.floor((l+9)/10)*Math.floor((e+4)/5)*16;case _h:return Math.floor((l+9)/10)*Math.floor((e+5)/6)*16;case yh:return Math.floor((l+9)/10)*Math.floor((e+7)/8)*16;case bh:return Math.floor((l+9)/10)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((l+11)/12)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((l+11)/12)*Math.floor((e+11)/12)*16;case Eh:case Th:case Ah:return Math.ceil(l/4)*Math.ceil(e/4)*16;case Rh:case Ch:return Math.ceil(l/4)*Math.ceil(e/4)*8;case Fc:case wh:return Math.ceil(l/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function uS(l){switch(l){case _i:case ev:return{byteLength:1,components:1};case kl:case tv:case Sa:return{byteLength:2,components:1};case Bh:case Fh:return{byteLength:2,components:4};case Wi:case Ih:case Gi:return{byteLength:4,components:1};case nv:case iv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${l}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ph}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ph);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _v(){let l=null,e=!1,i=null,s=null;function o(c,d){i(c,d),s=l.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&l!==null&&(s=l.requestAnimationFrame(o),e=!0)},stop:function(){l!==null&&l.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){l=c}}}function fS(l){const e=new WeakMap;function i(m,g){const p=m.array,_=m.usage,y=p.byteLength,x=l.createBuffer();l.bindBuffer(g,x),l.bufferData(g,p,_),m.onUploadCallback();let S;if(p instanceof Float32Array)S=l.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=l.HALF_FLOAT;else if(p instanceof Uint16Array)m.isFloat16BufferAttribute?S=l.HALF_FLOAT:S=l.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=l.SHORT;else if(p instanceof Uint32Array)S=l.UNSIGNED_INT;else if(p instanceof Int32Array)S=l.INT;else if(p instanceof Int8Array)S=l.BYTE;else if(p instanceof Uint8Array)S=l.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=l.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:m.version,size:y}}function s(m,g,p){const _=g.array,y=g.updateRanges;if(l.bindBuffer(p,m),y.length===0)l.bufferSubData(p,0,_);else{y.sort((S,A)=>S.start-A.start);let x=0;for(let S=1;S<y.length;S++){const A=y[x],w=y[S];w.start<=A.start+A.count+1?A.count=Math.max(A.count,w.start+w.count-A.start):(++x,y[x]=w)}y.length=x+1;for(let S=0,A=y.length;S<A;S++){const w=y[S];l.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}g.clearUpdateRanges()}g.onUploadCallback()}function o(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=e.get(m);g&&(l.deleteBuffer(g.buffer),e.delete(m))}function d(m,g){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const _=e.get(m);(!_||_.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const p=e.get(m);if(p===void 0)e.set(m,i(m,g));else if(p.version<m.version){if(p.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,m,g),p.version=m.version}}return{get:o,remove:c,update:d}}var dS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hS=`#ifdef USE_ALPHAHASH
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
#endif`,pS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vS=`#ifdef USE_AOMAP
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
#endif`,_S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yS=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ES=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TS=`#ifdef USE_IRIDESCENCE
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
#endif`,AS=`#ifdef USE_BUMPMAP
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
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,US=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,LS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,PS=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,IS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BS=`vec3 transformedNormal = objectNormal;
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
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VS="gl_FragColor = linearToOutputTexel( gl_FragColor );",kS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,WS=`#ifdef USE_ENVMAP
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
#endif`,qS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$S=`#ifdef USE_GRADIENTMAP
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
}`,eM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iM=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,aM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,sM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,uM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fM=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_M=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SM=`#if defined( USE_POINTS_UV )
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
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`#ifdef USE_MORPHTARGETS
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
#endif`,wM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,UM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,PM=`#ifdef USE_NORMALMAP
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
#endif`,IM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,VM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ZM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,QM=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,JM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$M=`#ifdef USE_SKINNING
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
#endif`,eE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tE=`#ifdef USE_SKINNING
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
#endif`,nE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rE=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lE=`#ifdef USE_TRANSMISSION
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
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hE=`uniform sampler2D t2D;
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
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`#include <common>
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
}`,_E=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yE=`#define DISTANCE
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
}`,bE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ME=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`uniform float scale;
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
}`,TE=`uniform vec3 diffuse;
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
}`,AE=`#include <common>
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
}`,RE=`uniform vec3 diffuse;
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
}`,CE=`#define LAMBERT
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
}`,wE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,NE=`#define MATCAP
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
}`,DE=`#define MATCAP
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
}`,UE=`#define NORMAL
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
}`,LE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OE=`#define PHONG
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
}`,PE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,IE=`#define STANDARD
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
}`,BE=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,FE=`#define TOON
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
}`,zE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,HE=`uniform float size;
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
}`,GE=`uniform vec3 diffuse;
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
}`,VE=`#include <common>
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
}`,kE=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,jE=`uniform float rotation;
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
}`,XE=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:dS,alphahash_pars_fragment:hS,alphamap_fragment:pS,alphamap_pars_fragment:mS,alphatest_fragment:gS,alphatest_pars_fragment:xS,aomap_fragment:vS,aomap_pars_fragment:_S,batching_pars_vertex:yS,batching_vertex:bS,begin_vertex:SS,beginnormal_vertex:MS,bsdfs:ES,iridescence_fragment:TS,bumpmap_pars_fragment:AS,clipping_planes_fragment:RS,clipping_planes_pars_fragment:CS,clipping_planes_pars_vertex:wS,clipping_planes_vertex:NS,color_fragment:DS,color_pars_fragment:US,color_pars_vertex:LS,color_vertex:OS,common:PS,cube_uv_reflection_fragment:IS,defaultnormal_vertex:BS,displacementmap_pars_vertex:FS,displacementmap_vertex:zS,emissivemap_fragment:HS,emissivemap_pars_fragment:GS,colorspace_fragment:VS,colorspace_pars_fragment:kS,envmap_fragment:jS,envmap_common_pars_fragment:XS,envmap_pars_fragment:WS,envmap_pars_vertex:qS,envmap_physical_pars_fragment:aM,envmap_vertex:YS,fog_vertex:ZS,fog_pars_vertex:KS,fog_fragment:QS,fog_pars_fragment:JS,gradientmap_pars_fragment:$S,lightmap_pars_fragment:eM,lights_lambert_fragment:tM,lights_lambert_pars_fragment:nM,lights_pars_begin:iM,lights_toon_fragment:sM,lights_toon_pars_fragment:rM,lights_phong_fragment:lM,lights_phong_pars_fragment:oM,lights_physical_fragment:cM,lights_physical_pars_fragment:uM,lights_fragment_begin:fM,lights_fragment_maps:dM,lights_fragment_end:hM,lightprobes_pars_fragment:pM,logdepthbuf_fragment:mM,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:xM,logdepthbuf_vertex:vM,map_fragment:_M,map_pars_fragment:yM,map_particle_fragment:bM,map_particle_pars_fragment:SM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:EM,morphinstance_vertex:TM,morphcolor_vertex:AM,morphnormal_vertex:RM,morphtarget_pars_vertex:CM,morphtarget_vertex:wM,normal_fragment_begin:NM,normal_fragment_maps:DM,normal_pars_fragment:UM,normal_pars_vertex:LM,normal_vertex:OM,normalmap_pars_fragment:PM,clearcoat_normal_fragment_begin:IM,clearcoat_normal_fragment_maps:BM,clearcoat_pars_fragment:FM,iridescence_pars_fragment:zM,opaque_fragment:HM,packing:GM,premultiplied_alpha_fragment:VM,project_vertex:kM,dithering_fragment:jM,dithering_pars_fragment:XM,roughnessmap_fragment:WM,roughnessmap_pars_fragment:qM,shadowmap_pars_fragment:YM,shadowmap_pars_vertex:ZM,shadowmap_vertex:KM,shadowmask_pars_fragment:QM,skinbase_vertex:JM,skinning_pars_vertex:$M,skinning_vertex:eE,skinnormal_vertex:tE,specularmap_fragment:nE,specularmap_pars_fragment:iE,tonemapping_fragment:aE,tonemapping_pars_fragment:sE,transmission_fragment:rE,transmission_pars_fragment:lE,uv_pars_fragment:oE,uv_pars_vertex:cE,uv_vertex:uE,worldpos_vertex:fE,background_vert:dE,background_frag:hE,backgroundCube_vert:pE,backgroundCube_frag:mE,cube_vert:gE,cube_frag:xE,depth_vert:vE,depth_frag:_E,distance_vert:yE,distance_frag:bE,equirect_vert:SE,equirect_frag:ME,linedashed_vert:EE,linedashed_frag:TE,meshbasic_vert:AE,meshbasic_frag:RE,meshlambert_vert:CE,meshlambert_frag:wE,meshmatcap_vert:NE,meshmatcap_frag:DE,meshnormal_vert:UE,meshnormal_frag:LE,meshphong_vert:OE,meshphong_frag:PE,meshphysical_vert:IE,meshphysical_frag:BE,meshtoon_vert:FE,meshtoon_frag:zE,points_vert:HE,points_frag:GE,shadow_vert:VE,shadow_frag:kE,sprite_vert:jE,sprite_frag:XE},Pe={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Hi={basic:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:In([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:In([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:In([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:In([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:In([Pe.points,Pe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:In([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:In([Pe.common,Pe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:In([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:In([Pe.sprite,Pe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:In([Pe.common,Pe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:In([Pe.lights,Pe.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Hi.physical={uniforms:In([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const wc={r:0,b:0,g:0},WE=new ln,yv=new rt;yv.set(-1,0,0,0,1,0,0,0,1);function qE(l,e,i,s,o,c){const d=new Nt(0);let m=o===!0?0:1,g,p,_=null,y=0,x=null;function S(P){let z=P.isScene===!0?P.background:null;if(z&&z.isTexture){const N=P.backgroundBlurriness>0;z=e.get(z,N)}return z}function A(P){let z=!1;const N=S(P);N===null?M(d,m):N&&N.isColor&&(M(N,1),z=!0);const F=l.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(l.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil))}function w(P,z){const N=S(z);N&&(N.isCubeTexture||N.mapping===Yc)?(p===void 0&&(p=new Di(new Yl(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Br(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(WE.makeRotationFromEuler(z.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(yv),p.material.toneMapped=bt.getTransfer(N.colorSpace)!==Ft,(_!==N||y!==N.version||x!==l.toneMapping)&&(p.material.needsUpdate=!0,_=N,y=N.version,x=l.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(g===void 0&&(g=new Di(new Kc(2,2),new qi({name:"BackgroundMaterial",uniforms:Br(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=N,g.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,g.material.toneMapped=bt.getTransfer(N.colorSpace)!==Ft,N.matrixAutoUpdate===!0&&N.updateMatrix(),g.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||y!==N.version||x!==l.toneMapping)&&(g.material.needsUpdate=!0,_=N,y=N.version,x=l.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null))}function M(P,z){P.getRGB(wc,gv(l)),i.buffers.color.setClear(wc.r,wc.g,wc.b,z,c)}function b(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,z=1){d.set(P),m=z,M(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,M(d,m)},render:A,addToRenderList:w,dispose:b}}function YE(l,e){const i=l.getParameter(l.MAX_VERTEX_ATTRIBS),s={},o=x(null);let c=o,d=!1;function m(V,J,$,fe,K){let B=!1;const G=y(V,fe,$,J);c!==G&&(c=G,p(c.object)),B=S(V,fe,$,K),B&&A(V,fe,$,K),K!==null&&e.update(K,l.ELEMENT_ARRAY_BUFFER),(B||d)&&(d=!1,N(V,J,$,fe),K!==null&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function g(){return l.createVertexArray()}function p(V){return l.bindVertexArray(V)}function _(V){return l.deleteVertexArray(V)}function y(V,J,$,fe){const K=fe.wireframe===!0;let B=s[J.id];B===void 0&&(B={},s[J.id]=B);const G=V.isInstancedMesh===!0?V.id:0;let ee=B[G];ee===void 0&&(ee={},B[G]=ee);let ge=ee[$.id];ge===void 0&&(ge={},ee[$.id]=ge);let Ee=ge[K];return Ee===void 0&&(Ee=x(g()),ge[K]=Ee),Ee}function x(V){const J=[],$=[],fe=[];for(let K=0;K<i;K++)J[K]=0,$[K]=0,fe[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:$,attributeDivisors:fe,object:V,attributes:{},index:null}}function S(V,J,$,fe){const K=c.attributes,B=J.attributes;let G=0;const ee=$.getAttributes();for(const ge in ee)if(ee[ge].location>=0){const U=K[ge];let Y=B[ge];if(Y===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(Y=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(Y=V.instanceColor)),U===void 0||U.attribute!==Y||Y&&U.data!==Y.data)return!0;G++}return c.attributesNum!==G||c.index!==fe}function A(V,J,$,fe){const K={},B=J.attributes;let G=0;const ee=$.getAttributes();for(const ge in ee)if(ee[ge].location>=0){let U=B[ge];U===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(U=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(U=V.instanceColor));const Y={};Y.attribute=U,U&&U.data&&(Y.data=U.data),K[ge]=Y,G++}c.attributes=K,c.attributesNum=G,c.index=fe}function w(){const V=c.newAttributes;for(let J=0,$=V.length;J<$;J++)V[J]=0}function M(V){b(V,0)}function b(V,J){const $=c.newAttributes,fe=c.enabledAttributes,K=c.attributeDivisors;$[V]=1,fe[V]===0&&(l.enableVertexAttribArray(V),fe[V]=1),K[V]!==J&&(l.vertexAttribDivisor(V,J),K[V]=J)}function P(){const V=c.newAttributes,J=c.enabledAttributes;for(let $=0,fe=J.length;$<fe;$++)J[$]!==V[$]&&(l.disableVertexAttribArray($),J[$]=0)}function z(V,J,$,fe,K,B,G){G===!0?l.vertexAttribIPointer(V,J,$,K,B):l.vertexAttribPointer(V,J,$,fe,K,B)}function N(V,J,$,fe){w();const K=fe.attributes,B=$.getAttributes(),G=J.defaultAttributeValues;for(const ee in B){const ge=B[ee];if(ge.location>=0){let Ee=K[ee];if(Ee===void 0&&(ee==="instanceMatrix"&&V.instanceMatrix&&(Ee=V.instanceMatrix),ee==="instanceColor"&&V.instanceColor&&(Ee=V.instanceColor)),Ee!==void 0){const U=Ee.normalized,Y=Ee.itemSize,Me=e.get(Ee);if(Me===void 0)continue;const Ce=Me.buffer,Ie=Me.type,re=Me.bytesPerElement,ye=Ie===l.INT||Ie===l.UNSIGNED_INT||Ee.gpuType===Ih;if(Ee.isInterleavedBufferAttribute){const Se=Ee.data,He=Se.stride,nt=Ee.offset;if(Se.isInstancedInterleavedBuffer){for(let Ke=0;Ke<ge.locationSize;Ke++)b(ge.location+Ke,Se.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ke=0;Ke<ge.locationSize;Ke++)M(ge.location+Ke);l.bindBuffer(l.ARRAY_BUFFER,Ce);for(let Ke=0;Ke<ge.locationSize;Ke++)z(ge.location+Ke,Y/ge.locationSize,Ie,U,He*re,(nt+Y/ge.locationSize*Ke)*re,ye)}else{if(Ee.isInstancedBufferAttribute){for(let Se=0;Se<ge.locationSize;Se++)b(ge.location+Se,Ee.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Se=0;Se<ge.locationSize;Se++)M(ge.location+Se);l.bindBuffer(l.ARRAY_BUFFER,Ce);for(let Se=0;Se<ge.locationSize;Se++)z(ge.location+Se,Y/ge.locationSize,Ie,U,Y*re,Y/ge.locationSize*Se*re,ye)}}else if(G!==void 0){const U=G[ee];if(U!==void 0)switch(U.length){case 2:l.vertexAttrib2fv(ge.location,U);break;case 3:l.vertexAttrib3fv(ge.location,U);break;case 4:l.vertexAttrib4fv(ge.location,U);break;default:l.vertexAttrib1fv(ge.location,U)}}}}P()}function F(){O();for(const V in s){const J=s[V];for(const $ in J){const fe=J[$];for(const K in fe){const B=fe[K];for(const G in B)_(B[G].object),delete B[G];delete fe[K]}}delete s[V]}}function L(V){if(s[V.id]===void 0)return;const J=s[V.id];for(const $ in J){const fe=J[$];for(const K in fe){const B=fe[K];for(const G in B)_(B[G].object),delete B[G];delete fe[K]}}delete s[V.id]}function I(V){for(const J in s){const $=s[J];for(const fe in $){const K=$[fe];if(K[V.id]===void 0)continue;const B=K[V.id];for(const G in B)_(B[G].object),delete B[G];delete K[V.id]}}}function T(V){for(const J in s){const $=s[J],fe=V.isInstancedMesh===!0?V.id:0,K=$[fe];if(K!==void 0){for(const B in K){const G=K[B];for(const ee in G)_(G[ee].object),delete G[ee];delete K[B]}delete $[fe],Object.keys($).length===0&&delete s[J]}}}function O(){q(),d=!0,c!==o&&(c=o,p(c.object))}function q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:m,reset:O,resetDefaultState:q,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:M,disableUnusedAttributes:P}}function ZE(l,e,i){let s;function o(g){s=g}function c(g,p){l.drawArrays(s,g,p),i.update(p,s,1)}function d(g,p,_){_!==0&&(l.drawArraysInstanced(s,g,p,_),i.update(p,s,_))}function m(g,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,p,0,_);let x=0;for(let S=0;S<_;S++)x+=p[S];i.update(x,s,1)}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=m}function KE(l,e,i,s){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=l.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(I){return!(I!==Ni&&s.convert(I)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(I){const T=I===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==_i&&s.convert(I)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Gi&&!T)}function g(I){if(I==="highp"){if(l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.HIGH_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.MEDIUM_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=g(p);_!==p&&(tt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const y=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),A=l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=l.getParameter(l.MAX_TEXTURE_SIZE),M=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),b=l.getParameter(l.MAX_VERTEX_ATTRIBS),P=l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),z=l.getParameter(l.MAX_VARYING_VECTORS),N=l.getParameter(l.MAX_FRAGMENT_UNIFORM_VECTORS),F=l.getParameter(l.MAX_SAMPLES),L=l.getParameter(l.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:m,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:A,maxTextureSize:w,maxCubemapSize:M,maxAttributes:b,maxVertexUniforms:P,maxVaryings:z,maxFragmentUniforms:N,maxSamples:F,samples:L}}function QE(l){const e=this;let i=null,s=0,o=!1,c=!1;const d=new Ns,m=new rt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||s!==0||o;return o=x,s=y.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,x){i=_(y,x,0)},this.setState=function(y,x,S){const A=y.clippingPlanes,w=y.clipIntersection,M=y.clipShadows,b=l.get(y);if(!o||A===null||A.length===0||c&&!M)c?_(null):p();else{const P=c?0:s,z=P*4;let N=b.clippingState||null;g.value=N,N=_(A,x,z,S);for(let F=0;F!==z;++F)N[F]=i[F];b.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(y,x,S,A){const w=y!==null?y.length:0;let M=null;if(w!==0){if(M=g.value,A!==!0||M===null){const b=S+w*4,P=x.matrixWorldInverse;m.getNormalMatrix(P),(M===null||M.length<b)&&(M=new Float32Array(b));for(let z=0,N=S;z!==w;++z,N+=4)d.copy(y[z]).applyMatrix4(P,m),d.normal.toArray(M,N),M[N+3]=d.constant}g.value=M,g.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const as=4,bx=[.125,.215,.35,.446,.526,.582],Us=20,JE=256,Fl=new vv,Sx=new Nt;let Bd=null,Fd=0,zd=0,Hd=!1;const $E=new ne;class Mx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,o=100,c={}){const{size:d=256,position:m=$E}=c;Bd=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,o,g,m),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ax(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bd,Fd,zd),this._renderer.xr.enabled=Hd,e.scissorTest=!1,Nr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ps||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bd=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:Sa,format:Ni,colorSpace:zc,depthBuffer:!1},o=Ex(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ex(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=e1(c)),this._blurMaterial=n1(c,e,i),this._ggxMaterial=t1(c,e,i)}return o}_compileMaterial(e){const i=new Di(new yi,e);this._renderer.compile(i,Fl)}_sceneToCubeUV(e,i,s,o,c){const g=new vi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],y=this._renderer,x=y.autoClear,S=y.toneMapping;y.getClearColor(Sx),y.toneMapping=ki,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new Yl,new kc({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let b=!1;const P=e.background;P?P.isColor&&(M.color.copy(P),e.background=null,b=!0):(M.color.copy(Sx),b=!0);for(let z=0;z<6;z++){const N=z%3;N===0?(g.up.set(0,p[z],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+_[z],c.y,c.z)):N===1?(g.up.set(0,0,p[z]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+_[z],c.z)):(g.up.set(0,p[z],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+_[z]));const F=this._cubeSize;Nr(o,N*F,z>2?F:0,F,F),y.setRenderTarget(o),b&&y.render(w,g),y.render(e,g)}y.toneMapping=S,y.autoClear=x,e.background=P}_textureToCubeUV(e,i){const s=this._renderer,o=e.mapping===Ps||e.mapping===Pr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ax()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tx());const c=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const m=c.uniforms;m.envMap.value=e;const g=this._cubeSize;Nr(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(d,Fl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const o=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,m=this._lodMeshes[s];m.material=d;const g=d.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),y=Math.sqrt(p*p-_*_),x=0+p*1.25,S=y*x,{_lodMax:A}=this,w=this._sizeLods[s],M=3*w*(s>A-as?s-A+as:0),b=4*(this._cubeSize-w);g.envMap.value=e.texture,g.roughness.value=S,g.mipInt.value=A-i,Nr(c,M,b,3*w,2*w),o.setRenderTarget(c),o.render(m,Fl),g.envMap.value=c.texture,g.roughness.value=0,g.mipInt.value=A-s,Nr(e,M,b,3*w,2*w),o.setRenderTarget(e),o.render(m,Fl)}_blur(e,i,s,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,o,"latitudinal",c),this._halfBlur(d,e,s,s,o,"longitudinal",c)}_halfBlur(e,i,s,o,c,d,m){const g=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Mt("blur direction must be either latitudinal or longitudinal!");const _=3,y=this._lodMeshes[o];y.material=p;const x=p.uniforms,S=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Us-1),w=c/A,M=isFinite(c)?1+Math.floor(_*w):Us;M>Us&&tt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Us}`);const b=[];let P=0;for(let I=0;I<Us;++I){const T=I/w,O=Math.exp(-T*T/2);b.push(O),I===0?P+=O:I<M&&(P+=2*O)}for(let I=0;I<b.length;I++)b[I]=b[I]/P;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=b,x.latitudinal.value=d==="latitudinal",m&&(x.poleAxis.value=m);const{_lodMax:z}=this;x.dTheta.value=A,x.mipInt.value=z-s;const N=this._sizeLods[o],F=3*N*(o>z-as?o-z+as:0),L=4*(this._cubeSize-N);Nr(i,F,L,3*N,2*N),g.setRenderTarget(i),g.render(y,Fl)}}function e1(l){const e=[],i=[],s=[];let o=l;const c=l-as+1+bx.length;for(let d=0;d<c;d++){const m=Math.pow(2,o);e.push(m);let g=1/m;d>l-as?g=bx[d-l+as-1]:d===0&&(g=0),i.push(g);const p=1/(m-2),_=-p,y=1+p,x=[_,_,y,_,y,y,_,_,y,y,_,y],S=6,A=6,w=3,M=2,b=1,P=new Float32Array(w*A*S),z=new Float32Array(M*A*S),N=new Float32Array(b*A*S);for(let L=0;L<S;L++){const I=L%3*2/3-1,T=L>2?0:-1,O=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];P.set(O,w*A*L),z.set(x,M*A*L);const q=[L,L,L,L,L,L];N.set(q,b*A*L)}const F=new yi;F.setAttribute("position",new Xi(P,w)),F.setAttribute("uv",new Xi(z,M)),F.setAttribute("faceIndex",new Xi(N,b)),s.push(new Di(F,null)),o>as&&o--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Ex(l,e,i){const s=new ji(l,e,i);return s.texture.mapping=Yc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nr(l,e,i,s,o){l.viewport.set(e,i,s,o),l.scissor.set(e,i,s,o)}function t1(l,e,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function n1(l,e,i){const s=new Float32Array(Us),o=new ne(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Tx(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Ax(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}class bv extends ji{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new pv(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Yl(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:ya});c.uniforms.tEquirect.value=i;const d=new Di(o,c),m=i.minFilter;return i.minFilter===Ls&&(i.minFilter=On),new lS(1,10,this).update(e,d),i.minFilter=m,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,o=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,o);e.setRenderTarget(c)}}function i1(l){let e=new WeakMap,i=new WeakMap,s=null;function o(x,S=!1){return x==null?null:S?d(x):c(x)}function c(x){if(x&&x.isTexture){const S=x.mapping;if(S===cd||S===ud)if(e.has(x)){const A=e.get(x).texture;return m(A,x.mapping)}else{const A=x.image;if(A&&A.height>0){const w=new bv(A.height);return w.fromEquirectangularTexture(l,x),e.set(x,w),x.addEventListener("dispose",p),m(w.texture,x.mapping)}else return null}}return x}function d(x){if(x&&x.isTexture){const S=x.mapping,A=S===cd||S===ud,w=S===Ps||S===Pr;if(A||w){let M=i.get(x);const b=M!==void 0?M.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==b)return s===null&&(s=new Mx(l)),M=A?s.fromEquirectangular(x,M):s.fromCubemap(x,M),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),M.texture;if(M!==void 0)return M.texture;{const P=x.image;return A&&P&&P.height>0||w&&P&&g(P)?(s===null&&(s=new Mx(l)),M=A?s.fromEquirectangular(x):s.fromCubemap(x),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),x.addEventListener("dispose",_),M.texture):null}}}return x}function m(x,S){return S===cd?x.mapping=Ps:S===ud&&(x.mapping=Pr),x}function g(x){let S=0;const A=6;for(let w=0;w<A;w++)x[w]!==void 0&&S++;return S===A}function p(x){const S=x.target;S.removeEventListener("dispose",p);const A=e.get(S);A!==void 0&&(e.delete(S),A.dispose())}function _(x){const S=x.target;S.removeEventListener("dispose",_);const A=i.get(S);A!==void 0&&(i.delete(S),A.dispose())}function y(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:y}}function a1(l){const e={};function i(s){if(e[s]!==void 0)return e[s];const o=l.getExtension(s);return e[s]=o,o}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const o=i(s);return o===null&&Ur("WebGLRenderer: "+s+" extension not supported."),o}}}function s1(l,e,i,s){const o={},c=new WeakMap;function d(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",d),delete o[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function m(y,x){return o[x.id]===!0||(x.addEventListener("dispose",d),o[x.id]=!0,i.memory.geometries++),x}function g(y){const x=y.attributes;for(const S in x)e.update(x[S],l.ARRAY_BUFFER)}function p(y){const x=[],S=y.index,A=y.attributes.position;let w=0;if(A===void 0)return;if(S!==null){const P=S.array;w=S.version;for(let z=0,N=P.length;z<N;z+=3){const F=P[z+0],L=P[z+1],I=P[z+2];x.push(F,L,L,I,I,F)}}else{const P=A.array;w=A.version;for(let z=0,N=P.length/3-1;z<N;z+=3){const F=z+0,L=z+1,I=z+2;x.push(F,L,L,I,I,F)}}const M=new(A.count>=65535?fv:uv)(x,1);M.version=w;const b=c.get(y);b&&e.remove(b),c.set(y,M)}function _(y){const x=c.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&p(y)}else p(y);return c.get(y)}return{get:m,update:g,getWireframeAttribute:_}}function r1(l,e,i){let s;function o(y){s=y}let c,d;function m(y){c=y.type,d=y.bytesPerElement}function g(y,x){l.drawElements(s,x,c,y*d),i.update(x,s,1)}function p(y,x,S){S!==0&&(l.drawElementsInstanced(s,x,c,y*d,S),i.update(x,s,S))}function _(y,x,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,y,0,S);let w=0;for(let M=0;M<S;M++)w+=x[M];i.update(w,s,1)}this.setMode=o,this.setIndex=m,this.render=g,this.renderInstances=p,this.renderMultiDraw=_}function l1(l){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,m){switch(i.calls++,d){case l.TRIANGLES:i.triangles+=m*(c/3);break;case l.LINES:i.lines+=m*(c/2);break;case l.LINE_STRIP:i.lines+=m*(c-1);break;case l.LINE_LOOP:i.lines+=m*c;break;case l.POINTS:i.points+=m*c;break;default:Mt("WebGLInfo: Unknown draw mode:",d);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:s}}function o1(l,e,i){const s=new WeakMap,o=new rn;function c(d,m,g){const p=d.morphTargetInfluences,_=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,y=_!==void 0?_.length:0;let x=s.get(m);if(x===void 0||x.count!==y){let q=function(){T.dispose(),s.delete(m),m.removeEventListener("dispose",q)};var S=q;x!==void 0&&x.texture.dispose();const A=m.morphAttributes.position!==void 0,w=m.morphAttributes.normal!==void 0,M=m.morphAttributes.color!==void 0,b=m.morphAttributes.position||[],P=m.morphAttributes.normal||[],z=m.morphAttributes.color||[];let N=0;A===!0&&(N=1),w===!0&&(N=2),M===!0&&(N=3);let F=m.attributes.position.count*N,L=1;F>e.maxTextureSize&&(L=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const I=new Float32Array(F*L*4*y),T=new ov(I,F,L,y);T.type=Gi,T.needsUpdate=!0;const O=N*4;for(let V=0;V<y;V++){const J=b[V],$=P[V],fe=z[V],K=F*L*4*V;for(let B=0;B<J.count;B++){const G=B*O;A===!0&&(o.fromBufferAttribute(J,B),I[K+G+0]=o.x,I[K+G+1]=o.y,I[K+G+2]=o.z,I[K+G+3]=0),w===!0&&(o.fromBufferAttribute($,B),I[K+G+4]=o.x,I[K+G+5]=o.y,I[K+G+6]=o.z,I[K+G+7]=0),M===!0&&(o.fromBufferAttribute(fe,B),I[K+G+8]=o.x,I[K+G+9]=o.y,I[K+G+10]=o.z,I[K+G+11]=fe.itemSize===4?o.w:1)}}x={count:y,texture:T,size:new Rt(F,L)},s.set(m,x),m.addEventListener("dispose",q)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(l,"morphTexture",d.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const w=m.morphTargetsRelative?1:1-A;g.getUniforms().setValue(l,"morphTargetBaseInfluence",w),g.getUniforms().setValue(l,"morphTargetInfluences",p)}g.getUniforms().setValue(l,"morphTargetsTexture",x.texture,i),g.getUniforms().setValue(l,"morphTargetsTextureSize",x.size)}return{update:c}}function c1(l,e,i,s,o){let c=new WeakMap;function d(p){const _=o.render.frame,y=p.geometry,x=e.get(p,y);if(c.get(x)!==_&&(e.update(x),c.set(x,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",g)===!1&&p.addEventListener("dispose",g),c.get(p)!==_&&(i.update(p.instanceMatrix,l.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,l.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return x}function m(){c=new WeakMap}function g(p){const _=p.target;_.removeEventListener("dispose",g),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:m}}const u1={[Wx]:"LINEAR_TONE_MAPPING",[qx]:"REINHARD_TONE_MAPPING",[Yx]:"CINEON_TONE_MAPPING",[Zx]:"ACES_FILMIC_TONE_MAPPING",[Qx]:"AGX_TONE_MAPPING",[Jx]:"NEUTRAL_TONE_MAPPING",[Kx]:"CUSTOM_TONE_MAPPING"};function f1(l,e,i,s,o,c){const d=new ji(e,i,{type:l,depthBuffer:o,stencilBuffer:c,samples:s?4:0,depthTexture:o?new Ir(e,i):void 0}),m=new ji(e,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),g=new yi;g.setAttribute("position",new Yn([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new Yn([0,2,0,0,2,0],2));const p=new aS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new Di(g,p),y=new vv(-1,1,1,-1,0,1);let x=null,S=null,A=!1,w,M=null,b=[],P=!1;this.setSize=function(z,N){d.setSize(z,N),m.setSize(z,N);for(let F=0;F<b.length;F++){const L=b[F];L.setSize&&L.setSize(z,N)}},this.setEffects=function(z){b=z,P=b.length>0&&b[0].isRenderPass===!0;const N=d.width,F=d.height;for(let L=0;L<b.length;L++){const I=b[L];I.setSize&&I.setSize(N,F)}},this.begin=function(z,N){if(A||z.toneMapping===ki&&b.length===0)return!1;if(M=N,N!==null){const F=N.width,L=N.height;(d.width!==F||d.height!==L)&&this.setSize(F,L)}return P===!1&&z.setRenderTarget(d),w=z.toneMapping,z.toneMapping=ki,!0},this.hasRenderPass=function(){return P},this.end=function(z,N){z.toneMapping=w,A=!0;let F=d,L=m;for(let I=0;I<b.length;I++){const T=b[I];if(T.enabled!==!1&&(T.render(z,L,F,N),T.needsSwap!==!1)){const O=F;F=L,L=O}}if(x!==z.outputColorSpace||S!==z.toneMapping){x=z.outputColorSpace,S=z.toneMapping,p.defines={},bt.getTransfer(x)===Ft&&(p.defines.SRGB_TRANSFER="");const I=u1[S];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=F.texture,z.setRenderTarget(M),z.render(_,y),M=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),m.dispose(),g.dispose(),p.dispose()}}const Sv=new Bn,Uh=new Ir(1,1),Mv=new ov,Ev=new Lb,Tv=new pv,Rx=[],Cx=[],wx=new Float32Array(16),Nx=new Float32Array(9),Dx=new Float32Array(4);function zr(l,e,i){const s=l[0];if(s<=0||s>0)return l;const o=e*i;let c=Rx[o];if(c===void 0&&(c=new Float32Array(o),Rx[o]=c),e!==0){s.toArray(c,0);for(let d=1,m=0;d!==e;++d)m+=i,l[d].toArray(c,m)}return c}function yn(l,e){if(l.length!==e.length)return!1;for(let i=0,s=l.length;i<s;i++)if(l[i]!==e[i])return!1;return!0}function bn(l,e){for(let i=0,s=e.length;i<s;i++)l[i]=e[i]}function Jc(l,e){let i=Cx[e];i===void 0&&(i=new Int32Array(e),Cx[e]=i);for(let s=0;s!==e;++s)i[s]=l.allocateTextureUnit();return i}function d1(l,e){const i=this.cache;i[0]!==e&&(l.uniform1f(this.addr,e),i[0]=e)}function h1(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(l.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;l.uniform2fv(this.addr,e),bn(i,e)}}function p1(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(l.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(l.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;l.uniform3fv(this.addr,e),bn(i,e)}}function m1(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(l.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;l.uniform4fv(this.addr,e),bn(i,e)}}function g1(l,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;l.uniformMatrix2fv(this.addr,!1,e),bn(i,e)}else{if(yn(i,s))return;Dx.set(s),l.uniformMatrix2fv(this.addr,!1,Dx),bn(i,s)}}function x1(l,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;l.uniformMatrix3fv(this.addr,!1,e),bn(i,e)}else{if(yn(i,s))return;Nx.set(s),l.uniformMatrix3fv(this.addr,!1,Nx),bn(i,s)}}function v1(l,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;l.uniformMatrix4fv(this.addr,!1,e),bn(i,e)}else{if(yn(i,s))return;wx.set(s),l.uniformMatrix4fv(this.addr,!1,wx),bn(i,s)}}function _1(l,e){const i=this.cache;i[0]!==e&&(l.uniform1i(this.addr,e),i[0]=e)}function y1(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(l.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;l.uniform2iv(this.addr,e),bn(i,e)}}function b1(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(l.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;l.uniform3iv(this.addr,e),bn(i,e)}}function S1(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(l.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;l.uniform4iv(this.addr,e),bn(i,e)}}function M1(l,e){const i=this.cache;i[0]!==e&&(l.uniform1ui(this.addr,e),i[0]=e)}function E1(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(l.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;l.uniform2uiv(this.addr,e),bn(i,e)}}function T1(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(l.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;l.uniform3uiv(this.addr,e),bn(i,e)}}function A1(l,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(l.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;l.uniform4uiv(this.addr,e),bn(i,e)}}function R1(l,e,i){const s=this.cache,o=i.allocateTextureUnit();s[0]!==o&&(l.uniform1i(this.addr,o),s[0]=o);let c;this.type===l.SAMPLER_2D_SHADOW?(Uh.compareFunction=i.isReversedDepthBuffer()?kh:Vh,c=Uh):c=Sv,i.setTexture2D(e||c,o)}function C1(l,e,i){const s=this.cache,o=i.allocateTextureUnit();s[0]!==o&&(l.uniform1i(this.addr,o),s[0]=o),i.setTexture3D(e||Ev,o)}function w1(l,e,i){const s=this.cache,o=i.allocateTextureUnit();s[0]!==o&&(l.uniform1i(this.addr,o),s[0]=o),i.setTextureCube(e||Tv,o)}function N1(l,e,i){const s=this.cache,o=i.allocateTextureUnit();s[0]!==o&&(l.uniform1i(this.addr,o),s[0]=o),i.setTexture2DArray(e||Mv,o)}function D1(l){switch(l){case 5126:return d1;case 35664:return h1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return x1;case 35676:return v1;case 5124:case 35670:return _1;case 35667:case 35671:return y1;case 35668:case 35672:return b1;case 35669:case 35673:return S1;case 5125:return M1;case 36294:return E1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return N1}}function U1(l,e){l.uniform1fv(this.addr,e)}function L1(l,e){const i=zr(e,this.size,2);l.uniform2fv(this.addr,i)}function O1(l,e){const i=zr(e,this.size,3);l.uniform3fv(this.addr,i)}function P1(l,e){const i=zr(e,this.size,4);l.uniform4fv(this.addr,i)}function I1(l,e){const i=zr(e,this.size,4);l.uniformMatrix2fv(this.addr,!1,i)}function B1(l,e){const i=zr(e,this.size,9);l.uniformMatrix3fv(this.addr,!1,i)}function F1(l,e){const i=zr(e,this.size,16);l.uniformMatrix4fv(this.addr,!1,i)}function z1(l,e){l.uniform1iv(this.addr,e)}function H1(l,e){l.uniform2iv(this.addr,e)}function G1(l,e){l.uniform3iv(this.addr,e)}function V1(l,e){l.uniform4iv(this.addr,e)}function k1(l,e){l.uniform1uiv(this.addr,e)}function j1(l,e){l.uniform2uiv(this.addr,e)}function X1(l,e){l.uniform3uiv(this.addr,e)}function W1(l,e){l.uniform4uiv(this.addr,e)}function q1(l,e,i){const s=this.cache,o=e.length,c=Jc(i,o);yn(s,c)||(l.uniform1iv(this.addr,c),bn(s,c));let d;this.type===l.SAMPLER_2D_SHADOW?d=Uh:d=Sv;for(let m=0;m!==o;++m)i.setTexture2D(e[m]||d,c[m])}function Y1(l,e,i){const s=this.cache,o=e.length,c=Jc(i,o);yn(s,c)||(l.uniform1iv(this.addr,c),bn(s,c));for(let d=0;d!==o;++d)i.setTexture3D(e[d]||Ev,c[d])}function Z1(l,e,i){const s=this.cache,o=e.length,c=Jc(i,o);yn(s,c)||(l.uniform1iv(this.addr,c),bn(s,c));for(let d=0;d!==o;++d)i.setTextureCube(e[d]||Tv,c[d])}function K1(l,e,i){const s=this.cache,o=e.length,c=Jc(i,o);yn(s,c)||(l.uniform1iv(this.addr,c),bn(s,c));for(let d=0;d!==o;++d)i.setTexture2DArray(e[d]||Mv,c[d])}function Q1(l){switch(l){case 5126:return U1;case 35664:return L1;case 35665:return O1;case 35666:return P1;case 35674:return I1;case 35675:return B1;case 35676:return F1;case 5124:case 35670:return z1;case 35667:case 35671:return H1;case 35668:case 35672:return G1;case 35669:case 35673:return V1;case 5125:return k1;case 36294:return j1;case 36295:return X1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return K1}}class J1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=D1(i.type)}}class $1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Q1(i.type)}}class eT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const m=o[c];m.setValue(e,i[m.id],s)}}}const Gd=/(\w+)(\])?(\[|\.)?/g;function Ux(l,e){l.seq.push(e),l.map[e.id]=e}function tT(l,e,i){const s=l.name,o=s.length;for(Gd.lastIndex=0;;){const c=Gd.exec(s),d=Gd.lastIndex;let m=c[1];const g=c[2]==="]",p=c[3];if(g&&(m=m|0),p===void 0||p==="["&&d+2===o){Ux(i,p===void 0?new J1(m,l,e):new $1(m,l,e));break}else{let y=i.map[m];y===void 0&&(y=new eT(m),Ux(i,y)),i=y}}}class Ic{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const m=e.getActiveUniform(i,d),g=e.getUniformLocation(i,m.name);tT(m,g,this)}const o=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):c.push(d);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,s,o){const c=this.map[i];c!==void 0&&c.setValue(e,s,o)}setOptional(e,i,s){const o=i[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,i,s,o){for(let c=0,d=i.length;c!==d;++c){const m=i[c],g=s[m.id];g.needsUpdate!==!1&&m.setValue(e,g.value,o)}}static seqWithValue(e,i){const s=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in i&&s.push(d)}return s}}function Lx(l,e,i){const s=l.createShader(e);return l.shaderSource(s,i),l.compileShader(s),s}const nT=37297;let iT=0;function aT(l,e){const i=l.split(`
`),s=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=o;d<c;d++){const m=d+1;s.push(`${m===e?">":" "} ${m}: ${i[d]}`)}return s.join(`
`)}const Ox=new rt;function sT(l){bt._getMatrix(Ox,bt.workingColorSpace,l);const e=`mat3( ${Ox.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(l)){case Hc:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",l),[e,"LinearTransferOETF"]}}function Px(l,e,i){const s=l.getShaderParameter(e,l.COMPILE_STATUS),c=(l.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const m=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+aT(l.getShaderSource(e),m)}else return c}function rT(l,e){const i=sT(e);return[`vec4 ${l}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const lT={[Wx]:"Linear",[qx]:"Reinhard",[Yx]:"Cineon",[Zx]:"ACESFilmic",[Qx]:"AgX",[Jx]:"Neutral",[Kx]:"Custom"};function oT(l,e){const i=lT[e];return i===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+l+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+l+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nc=new ne;function cT(){bt.getLuminanceCoefficients(Nc);const l=Nc.x.toFixed(4),e=Nc.y.toFixed(4),i=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${l}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uT(l){return[l.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",l.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vl).join(`
`)}function fT(l){const e=[];for(const i in l){const s=l[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function dT(l,e){const i={},s=l.getProgramParameter(e,l.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=l.getActiveAttrib(e,o),d=c.name;let m=1;c.type===l.FLOAT_MAT2&&(m=2),c.type===l.FLOAT_MAT3&&(m=3),c.type===l.FLOAT_MAT4&&(m=4),i[d]={type:c.type,location:l.getAttribLocation(e,d),locationSize:m}}return i}function Vl(l){return l!==""}function Ix(l,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bx(l,e){return l.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(l){return l.replace(hT,mT)}const pT=new Map;function mT(l,e){let i=ut[e];if(i===void 0){const s=pT.get(e);if(s!==void 0)i=ut[s],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Lh(i)}const gT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fx(l){return l.replace(gT,xT)}function xT(l,e,i,s){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function zx(l){let e=`precision ${l.precision} float;
	precision ${l.precision} int;
	precision ${l.precision} sampler2D;
	precision ${l.precision} samplerCube;
	precision ${l.precision} sampler3D;
	precision ${l.precision} sampler2DArray;
	precision ${l.precision} sampler2DShadow;
	precision ${l.precision} samplerCubeShadow;
	precision ${l.precision} sampler2DArrayShadow;
	precision ${l.precision} isampler2D;
	precision ${l.precision} isampler3D;
	precision ${l.precision} isamplerCube;
	precision ${l.precision} isampler2DArray;
	precision ${l.precision} usampler2D;
	precision ${l.precision} usampler3D;
	precision ${l.precision} usamplerCube;
	precision ${l.precision} usampler2DArray;
	`;return l.precision==="highp"?e+=`
#define HIGH_PRECISION`:l.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const vT={[Dc]:"SHADOWMAP_TYPE_PCF",[Hl]:"SHADOWMAP_TYPE_VSM"};function _T(l){return vT[l.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yT={[Ps]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[Yc]:"ENVMAP_TYPE_CUBE_UV"};function bT(l){return l.envMap===!1?"ENVMAP_TYPE_CUBE":yT[l.envMapMode]||"ENVMAP_TYPE_CUBE"}const ST={[Pr]:"ENVMAP_MODE_REFRACTION"};function MT(l){return l.envMap===!1?"ENVMAP_MODE_REFLECTION":ST[l.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ET={[Xx]:"ENVMAP_BLENDING_MULTIPLY",[db]:"ENVMAP_BLENDING_MIX",[hb]:"ENVMAP_BLENDING_ADD"};function TT(l){return l.envMap===!1?"ENVMAP_BLENDING_NONE":ET[l.combine]||"ENVMAP_BLENDING_NONE"}function AT(l){const e=l.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function RT(l,e,i,s){const o=l.getContext(),c=i.defines;let d=i.vertexShader,m=i.fragmentShader;const g=_T(i),p=bT(i),_=MT(i),y=TT(i),x=AT(i),S=uT(i),A=fT(c),w=o.createProgram();let M,b,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Vl).join(`
`),M.length>0&&(M+=`
`),b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Vl).join(`
`),b.length>0&&(b+=`
`)):(M=[zx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vl).join(`
`),b=[zx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?ut.tonemapping_pars_fragment:"",i.toneMapping!==ki?oT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,rT("linearToOutputTexel",i.outputColorSpace),cT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vl).join(`
`)),d=Lh(d),d=Ix(d,i),d=Bx(d,i),m=Lh(m),m=Ix(m,i),m=Bx(m,i),d=Fx(d),m=Fx(m),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,b=["#define varying in",i.glslVersion===q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const z=P+M+d,N=P+b+m,F=Lx(o,o.VERTEX_SHADER,z),L=Lx(o,o.FRAGMENT_SHADER,N);o.attachShader(w,F),o.attachShader(w,L),i.index0AttributeName!==void 0?o.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function I(V){if(l.debug.checkShaderErrors){const J=o.getProgramInfoLog(w)||"",$=o.getShaderInfoLog(F)||"",fe=o.getShaderInfoLog(L)||"",K=J.trim(),B=$.trim(),G=fe.trim();let ee=!0,ge=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(ee=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(o,w,F,L);else{const Ee=Px(o,F,"vertex"),U=Px(o,L,"fragment");Mt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+K+`
`+Ee+`
`+U)}else K!==""?tt("WebGLProgram: Program Info Log:",K):(B===""||G==="")&&(ge=!1);ge&&(V.diagnostics={runnable:ee,programLog:K,vertexShader:{log:B,prefix:M},fragmentShader:{log:G,prefix:b}})}o.deleteShader(F),o.deleteShader(L),T=new Ic(o,w),O=dT(o,w)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let O;this.getAttributes=function(){return O===void 0&&I(this),O};let q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=o.getProgramParameter(w,nT)),q},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=iT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=L,this}let CT=0;class wT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new NT(e),i.set(e,s)),s}}class NT{constructor(e){this.id=CT++,this.code=e,this.usedTimes=0}}function DT(l){return l===Is||l===Bc||l===Fc}function UT(l,e,i,s,o,c){const d=new Xh,m=new wT,g=new Set,p=[],_=new Map,y=s.logarithmicDepthBuffer;let x=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return g.add(T),T===0?"uv":`uv${T}`}function w(T,O,q,V,J,$){const fe=V.fog,K=J.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||B,G),ge=ee&&ee.mapping===Yc?ee.image.height:null,Ee=S[T.type];T.precision!==null&&(x=s.getMaxPrecision(T.precision),x!==T.precision&&tt("WebGLProgram.getParameters:",T.precision,"not supported, using",x,"instead."));const U=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Y=U!==void 0?U.length:0;let Me=0;K.morphAttributes.position!==void 0&&(Me=1),K.morphAttributes.normal!==void 0&&(Me=2),K.morphAttributes.color!==void 0&&(Me=3);let Ce,Ie,re,ye;if(Ee){const Ve=Hi[Ee];Ce=Ve.vertexShader,Ie=Ve.fragmentShader}else{Ce=T.vertexShader,Ie=T.fragmentShader;const Ve=m.getVertexShaderStage(T),Zt=m.getFragmentShaderStage(T);m.update(T,Ve,Zt),re=Ve.id,ye=Zt.id}const Se=l.getRenderTarget(),He=l.state.buffers.depth.getReversed(),nt=J.isInstancedMesh===!0,Ke=J.isBatchedMesh===!0,Wt=!!T.map,ft=!!T.matcap,vt=!!ee,_t=!!T.aoMap,dt=!!T.lightMap,$t=!!T.bumpMap&&T.wireframe===!1,en=!!T.normalMap,tn=!!T.displacementMap,on=!!T.emissiveMap,Xt=!!T.metalnessMap,nn=!!T.roughnessMap,W=T.anisotropy>0,zt=T.clearcoat>0,Ct=T.dispersion>0,D=T.iridescence>0,E=T.sheen>0,Q=T.transmission>0,le=W&&!!T.anisotropyMap,he=zt&&!!T.clearcoatMap,Te=zt&&!!T.clearcoatNormalMap,Ne=zt&&!!T.clearcoatRoughnessMap,de=D&&!!T.iridescenceMap,pe=D&&!!T.iridescenceThicknessMap,Re=E&&!!T.sheenColorMap,Fe=E&&!!T.sheenRoughnessMap,Le=!!T.specularMap,De=!!T.specularColorMap,Ze=!!T.specularIntensityMap,Qe=Q&&!!T.transmissionMap,it=Q&&!!T.thicknessMap,j=!!T.gradientMap,Ae=!!T.alphaMap,xe=T.alphaTest>0,we=!!T.alphaHash,Be=!!T.extensions;let be=ki;T.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(be=l.toneMapping);const We={shaderID:Ee,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:Ie,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:x,batching:Ke,batchingColor:Ke&&J._colorsTexture!==null,instancing:nt,instancingColor:nt&&J.instanceColor!==null,instancingMorph:nt&&J.morphTexture!==null,outputColorSpace:Se===null?l.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Wt,matcap:ft,envMap:vt,envMapMode:vt&&ee.mapping,envMapCubeUVHeight:ge,aoMap:_t,lightMap:dt,bumpMap:$t,normalMap:en,displacementMap:tn,emissiveMap:on,normalMapObjectSpace:en&&T.normalMapType===gb,normalMapTangentSpace:en&&T.normalMapType===j0,packedNormalMap:en&&T.normalMapType===j0&&DT(T.normalMap.format),metalnessMap:Xt,roughnessMap:nn,anisotropy:W,anisotropyMap:le,clearcoat:zt,clearcoatMap:he,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ne,dispersion:Ct,iridescence:D,iridescenceMap:de,iridescenceThicknessMap:pe,sheen:E,sheenColorMap:Re,sheenRoughnessMap:Fe,specularMap:Le,specularColorMap:De,specularIntensityMap:Ze,transmission:Q,transmissionMap:Qe,thicknessMap:it,gradientMap:j,opaque:T.transparent===!1&&T.blending===Dr&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:xe,alphaHash:we,combine:T.combine,mapUv:Wt&&A(T.map.channel),aoMapUv:_t&&A(T.aoMap.channel),lightMapUv:dt&&A(T.lightMap.channel),bumpMapUv:$t&&A(T.bumpMap.channel),normalMapUv:en&&A(T.normalMap.channel),displacementMapUv:tn&&A(T.displacementMap.channel),emissiveMapUv:on&&A(T.emissiveMap.channel),metalnessMapUv:Xt&&A(T.metalnessMap.channel),roughnessMapUv:nn&&A(T.roughnessMap.channel),anisotropyMapUv:le&&A(T.anisotropyMap.channel),clearcoatMapUv:he&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Te&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&A(T.sheenRoughnessMap.channel),specularMapUv:Le&&A(T.specularMap.channel),specularColorMapUv:De&&A(T.specularColorMap.channel),specularIntensityMapUv:Ze&&A(T.specularIntensityMap.channel),transmissionMapUv:Qe&&A(T.transmissionMap.channel),thicknessMapUv:it&&A(T.thicknessMap.channel),alphaMapUv:Ae&&A(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(en||W),vertexNormals:!!K.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!K.attributes.uv&&(Wt||Ae),fog:!!fe,useFog:T.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||K.attributes.normal===void 0&&en===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:He,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Me,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:l.shadowMap.enabled&&q.length>0,shadowMapType:l.shadowMap.type,toneMapping:be,decodeVideoTexture:Wt&&T.map.isVideoTexture===!0&&bt.getTransfer(T.map.colorSpace)===Ft,decodeVideoTextureEmissive:on&&T.emissiveMap.isVideoTexture===!0&&bt.getTransfer(T.emissiveMap.colorSpace)===Ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===va,flipSided:T.side===Wn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Be&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&T.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return We.vertexUv1s=g.has(1),We.vertexUv2s=g.has(2),We.vertexUv3s=g.has(3),g.clear(),We}function M(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)O.push(q),O.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(b(O,T),P(O,T),O.push(l.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function b(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function P(T,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),O.packedNormalMap&&d.enable(22),O.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),O.numLightProbeGrids>0&&d.enable(22),O.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function z(T){const O=S[T.type];let q;if(O){const V=Hi[O];q=tS.clone(V.uniforms)}else q=T.uniforms;return q}function N(T,O){let q=_.get(O);return q!==void 0?++q.usedTimes:(q=new RT(l,O,T,o),p.push(q),_.set(O,q)),q}function F(T){if(--T.usedTimes===0){const O=p.indexOf(T);p[O]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function L(T){m.remove(T)}function I(){m.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:z,acquireProgram:N,releaseProgram:F,releaseShaderCache:L,programs:p,dispose:I}}function LT(){let l=new WeakMap;function e(d){return l.has(d)}function i(d){let m=l.get(d);return m===void 0&&(m={},l.set(d,m)),m}function s(d){l.delete(d)}function o(d,m,g){l.get(d)[m]=g}function c(){l=new WeakMap}return{has:e,get:i,remove:s,update:o,dispose:c}}function OT(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.material.id!==e.material.id?l.material.id-e.material.id:l.materialVariant!==e.materialVariant?l.materialVariant-e.materialVariant:l.z!==e.z?l.z-e.z:l.id-e.id}function Hx(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.z!==e.z?e.z-l.z:l.id-e.id}function Gx(){const l=[];let e=0;const i=[],s=[],o=[];function c(){e=0,i.length=0,s.length=0,o.length=0}function d(x){let S=0;return x.isInstancedMesh&&(S+=2),x.isSkinnedMesh&&(S+=1),S}function m(x,S,A,w,M,b){let P=l[e];return P===void 0?(P={id:x.id,object:x,geometry:S,material:A,materialVariant:d(x),groupOrder:w,renderOrder:x.renderOrder,z:M,group:b},l[e]=P):(P.id=x.id,P.object=x,P.geometry=S,P.material=A,P.materialVariant=d(x),P.groupOrder=w,P.renderOrder=x.renderOrder,P.z=M,P.group=b),e++,P}function g(x,S,A,w,M,b){const P=m(x,S,A,w,M,b);A.transmission>0?s.push(P):A.transparent===!0?o.push(P):i.push(P)}function p(x,S,A,w,M,b){const P=m(x,S,A,w,M,b);A.transmission>0?s.unshift(P):A.transparent===!0?o.unshift(P):i.unshift(P)}function _(x,S,A){i.length>1&&i.sort(x||OT),s.length>1&&s.sort(S||Hx),o.length>1&&o.sort(S||Hx),A&&(i.reverse(),s.reverse(),o.reverse())}function y(){for(let x=e,S=l.length;x<S;x++){const A=l[x];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:o,init:c,push:g,unshift:p,finish:y,sort:_}}function PT(){let l=new WeakMap;function e(s,o){const c=l.get(s);let d;return c===void 0?(d=new Gx,l.set(s,[d])):o>=c.length?(d=new Gx,c.push(d)):d=c[o],d}function i(){l=new WeakMap}return{get:e,dispose:i}}function IT(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ne,color:new Nt};break;case"SpotLight":i={position:new ne,direction:new ne,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ne,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ne,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":i={color:new Nt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return l[e.id]=i,i}}}function BT(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[e.id]=i,i}}}let FT=0;function zT(l,e){return(e.castShadow?2:0)-(l.castShadow?2:0)+(e.map?1:0)-(l.map?1:0)}function HT(l){const e=new IT,i=BT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ne);const o=new ne,c=new ln,d=new ln;function m(p){let _=0,y=0,x=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let S=0,A=0,w=0,M=0,b=0,P=0,z=0,N=0,F=0,L=0,I=0;p.sort(zT);for(let O=0,q=p.length;O<q;O++){const V=p[O],J=V.color,$=V.intensity,fe=V.distance;let K=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Is?K=V.shadow.map.texture:K=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=J.r*$,y+=J.g*$,x+=J.b*$;else if(V.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(V.sh.coefficients[B],$);I++}else if(V.isDirectionalLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,ee=i.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,s.directionalShadow[S]=ee,s.directionalShadowMap[S]=K,s.directionalShadowMatrix[S]=V.shadow.matrix,P++}s.directional[S]=B,S++}else if(V.isSpotLight){const B=e.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(J).multiplyScalar($),B.distance=fe,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,s.spot[w]=B;const G=V.shadow;if(V.map&&(s.spotLightMap[F]=V.map,F++,G.updateMatrices(V),V.castShadow&&L++),s.spotLightMatrix[w]=G.matrix,V.castShadow){const ee=i.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,s.spotShadow[w]=ee,s.spotShadowMap[w]=K,N++}w++}else if(V.isRectAreaLight){const B=e.get(V);B.color.copy(J).multiplyScalar($),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=B,M++}else if(V.isPointLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const G=V.shadow,ee=i.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,ee.shadowCameraNear=G.camera.near,ee.shadowCameraFar=G.camera.far,s.pointShadow[A]=ee,s.pointShadowMap[A]=K,s.pointShadowMatrix[A]=V.shadow.matrix,z++}s.point[A]=B,A++}else if(V.isHemisphereLight){const B=e.get(V);B.skyColor.copy(V.color).multiplyScalar($),B.groundColor.copy(V.groundColor).multiplyScalar($),s.hemi[b]=B,b++}}M>0&&(l.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=y,s.ambient[2]=x;const T=s.hash;(T.directionalLength!==S||T.pointLength!==A||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==b||T.numDirectionalShadows!==P||T.numPointShadows!==z||T.numSpotShadows!==N||T.numSpotMaps!==F||T.numLightProbes!==I)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=M,s.point.length=A,s.hemi.length=b,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=N+F-L,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=I,T.directionalLength=S,T.pointLength=A,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=b,T.numDirectionalShadows=P,T.numPointShadows=z,T.numSpotShadows=N,T.numSpotMaps=F,T.numLightProbes=I,s.version=FT++)}function g(p,_){let y=0,x=0,S=0,A=0,w=0;const M=_.matrixWorldInverse;for(let b=0,P=p.length;b<P;b++){const z=p[b];if(z.isDirectionalLight){const N=s.directional[y];N.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(M),y++}else if(z.isSpotLight){const N=s.spot[S];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(M),S++}else if(z.isRectAreaLight){const N=s.rectArea[A];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(M),d.identity(),c.copy(z.matrixWorld),c.premultiply(M),d.extractRotation(c),N.halfWidth.set(z.width*.5,0,0),N.halfHeight.set(0,z.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),A++}else if(z.isPointLight){const N=s.point[x];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(M),x++}else if(z.isHemisphereLight){const N=s.hemi[w];N.direction.setFromMatrixPosition(z.matrixWorld),N.direction.transformDirection(M),w++}}}return{setup:m,setupView:g,state:s}}function Vx(l){const e=new HT(l),i=[],s=[],o=[];function c(x){y.camera=x,i.length=0,s.length=0,o.length=0}function d(x){i.push(x)}function m(x){s.push(x)}function g(x){o.push(x)}function p(){e.setup(i)}function _(x){e.setupView(i,x)}const y={lightsArray:i,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:y,setupLights:p,setupLightsView:_,pushLight:d,pushShadow:m,pushLightProbeGrid:g}}function GT(l){let e=new WeakMap;function i(o,c=0){const d=e.get(o);let m;return d===void 0?(m=new Vx(l),e.set(o,[m])):c>=d.length?(m=new Vx(l),d.push(m)):m=d[c],m}function s(){e=new WeakMap}return{get:i,dispose:s}}const VT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jT=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],XT=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],kx=new ln,zl=new ne,Vd=new ne;function WT(l,e,i){let s=new dv;const o=new Rt,c=new Rt,d=new rn,m=new sS,g=new rS,p={},_=i.maxTextureSize,y={[ss]:Wn,[Wn]:ss,[va]:va},x=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:VT,fragmentShader:kT}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const A=new yi;A.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Di(A,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let b=this.type;this.render=function(L,I,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;this.type===qy&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Dc);const O=l.getRenderTarget(),q=l.getActiveCubeFace(),V=l.getActiveMipmapLevel(),J=l.state;J.setBlending(ya),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const $=b!==this.type;$&&I.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(K=>K.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,K=L.length;fe<K;fe++){const B=L[fe],G=B.shadow;if(G===void 0){tt("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const ee=G.getFrameExtents();o.multiply(ee),c.copy(G.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/ee.x),o.x=c.x*ee.x,G.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/ee.y),o.y=c.y*ee.y,G.mapSize.y=c.y));const ge=l.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ge,G.map===null||$===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Hl){if(B.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ji(o.x,o.y,{format:Is,type:Sa,minFilter:On,magFilter:On,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new Ir(o.x,o.y,Gi),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Ma,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn}else B.isPointLight?(G.map=new bv(o.x),G.map.depthTexture=new $b(o.x,Wi)):(G.map=new ji(o.x,o.y),G.map.depthTexture=new Ir(o.x,o.y,Wi)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Ma,this.type===Dc?(G.map.depthTexture.compareFunction=ge?kh:Vh,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn);G.camera.updateProjectionMatrix()}const Ee=G.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<Ee;U++){if(G.map.isWebGLCubeRenderTarget)l.setRenderTarget(G.map,U),l.clear();else{U===0&&(l.setRenderTarget(G.map),l.clear());const Y=G.getViewport(U);d.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),J.viewport(d)}if(B.isPointLight){const Y=G.camera,Me=G.matrix,Ce=B.distance||Y.far;Ce!==Y.far&&(Y.far=Ce,Y.updateProjectionMatrix()),zl.setFromMatrixPosition(B.matrixWorld),Y.position.copy(zl),Vd.copy(Y.position),Vd.add(jT[U]),Y.up.copy(XT[U]),Y.lookAt(Vd),Y.updateMatrixWorld(),Me.makeTranslation(-zl.x,-zl.y,-zl.z),kx.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G._frustum.setFromProjectionMatrix(kx,Y.coordinateSystem,Y.reversedDepth)}else G.updateMatrices(B);s=G.getFrustum(),N(I,T,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===Hl&&P(G,T),G.needsUpdate=!1}b=this.type,M.needsUpdate=!1,l.setRenderTarget(O,q,V)};function P(L,I){const T=e.update(w);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ji(o.x,o.y,{format:Is,type:Sa})),x.uniforms.shadow_pass.value=L.map.depthTexture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,l.setRenderTarget(L.mapPass),l.clear(),l.renderBufferDirect(I,null,T,x,w,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,l.setRenderTarget(L.map),l.clear(),l.renderBufferDirect(I,null,T,S,w,null)}function z(L,I,T,O){let q=null;const V=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)q=V;else if(q=T.isPointLight===!0?g:m,l.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const J=q.uuid,$=I.uuid;let fe=p[J];fe===void 0&&(fe={},p[J]=fe);let K=fe[$];K===void 0&&(K=q.clone(),fe[$]=K,I.addEventListener("dispose",F)),q=K}if(q.visible=I.visible,q.wireframe=I.wireframe,O===Hl?q.side=I.shadowSide!==null?I.shadowSide:I.side:q.side=I.shadowSide!==null?I.shadowSide:y[I.side],q.alphaMap=I.alphaMap,q.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,q.map=I.map,q.clipShadows=I.clipShadows,q.clippingPlanes=I.clippingPlanes,q.clipIntersection=I.clipIntersection,q.displacementMap=I.displacementMap,q.displacementScale=I.displacementScale,q.displacementBias=I.displacementBias,q.wireframeLinewidth=I.wireframeLinewidth,q.linewidth=I.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const J=l.properties.get(q);J.light=T}return q}function N(L,I,T,O,q){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&q===Hl)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const $=e.update(L),fe=L.material;if(Array.isArray(fe)){const K=$.groups;for(let B=0,G=K.length;B<G;B++){const ee=K[B],ge=fe[ee.materialIndex];if(ge&&ge.visible){const Ee=z(L,ge,O,q);L.onBeforeShadow(l,L,I,T,$,Ee,ee),l.renderBufferDirect(T,null,$,Ee,L,ee),L.onAfterShadow(l,L,I,T,$,Ee,ee)}}}else if(fe.visible){const K=z(L,fe,O,q);L.onBeforeShadow(l,L,I,T,$,K,null),l.renderBufferDirect(T,null,$,K,L,null),L.onAfterShadow(l,L,I,T,$,K,null)}}const J=L.children;for(let $=0,fe=J.length;$<fe;$++)N(J[$],I,T,O,q)}function F(L){L.target.removeEventListener("dispose",F);for(const T in p){const O=p[T],q=L.target.uuid;q in O&&(O[q].dispose(),delete O[q])}}}function qT(l,e){function i(){let j=!1;const Ae=new rn;let xe=null;const we=new rn(0,0,0,0);return{setMask:function(Be){xe!==Be&&!j&&(l.colorMask(Be,Be,Be,Be),xe=Be)},setLocked:function(Be){j=Be},setClear:function(Be,be,We,Ve,Zt){Zt===!0&&(Be*=Ve,be*=Ve,We*=Ve),Ae.set(Be,be,We,Ve),we.equals(Ae)===!1&&(l.clearColor(Be,be,We,Ve),we.copy(Ae))},reset:function(){j=!1,xe=null,we.set(-1,0,0,0)}}}function s(){let j=!1,Ae=!1,xe=null,we=null,Be=null;return{setReversed:function(be){if(Ae!==be){const We=e.get("EXT_clip_control");be?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ae=be;const Ve=Be;Be=null,this.setClear(Ve)}},getReversed:function(){return Ae},setTest:function(be){be?Se(l.DEPTH_TEST):He(l.DEPTH_TEST)},setMask:function(be){xe!==be&&!j&&(l.depthMask(be),xe=be)},setFunc:function(be){if(Ae&&(be=Ab[be]),we!==be){switch(be){case Xd:l.depthFunc(l.NEVER);break;case Wd:l.depthFunc(l.ALWAYS);break;case qd:l.depthFunc(l.LESS);break;case Or:l.depthFunc(l.LEQUAL);break;case Yd:l.depthFunc(l.EQUAL);break;case Zd:l.depthFunc(l.GEQUAL);break;case Kd:l.depthFunc(l.GREATER);break;case Qd:l.depthFunc(l.NOTEQUAL);break;default:l.depthFunc(l.LEQUAL)}we=be}},setLocked:function(be){j=be},setClear:function(be){Be!==be&&(Be=be,Ae&&(be=1-be),l.clearDepth(be))},reset:function(){j=!1,xe=null,we=null,Be=null,Ae=!1}}}function o(){let j=!1,Ae=null,xe=null,we=null,Be=null,be=null,We=null,Ve=null,Zt=null;return{setTest:function(Ut){j||(Ut?Se(l.STENCIL_TEST):He(l.STENCIL_TEST))},setMask:function(Ut){Ae!==Ut&&!j&&(l.stencilMask(Ut),Ae=Ut)},setFunc:function(Ut,Zn,Kn){(xe!==Ut||we!==Zn||Be!==Kn)&&(l.stencilFunc(Ut,Zn,Kn),xe=Ut,we=Zn,Be=Kn)},setOp:function(Ut,Zn,Kn){(be!==Ut||We!==Zn||Ve!==Kn)&&(l.stencilOp(Ut,Zn,Kn),be=Ut,We=Zn,Ve=Kn)},setLocked:function(Ut){j=Ut},setClear:function(Ut){Zt!==Ut&&(l.clearStencil(Ut),Zt=Ut)},reset:function(){j=!1,Ae=null,xe=null,we=null,Be=null,be=null,We=null,Ve=null,Zt=null}}}const c=new i,d=new s,m=new o,g=new WeakMap,p=new WeakMap;let _={},y={},x={},S=new WeakMap,A=[],w=null,M=!1,b=null,P=null,z=null,N=null,F=null,L=null,I=null,T=new Nt(0,0,0),O=0,q=!1,V=null,J=null,$=null,fe=null,K=null;const B=l.getParameter(l.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ee=0;const ge=l.getParameter(l.VERSION);ge.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ge)[1]),G=ee>=1):ge.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),G=ee>=2);let Ee=null,U={};const Y=l.getParameter(l.SCISSOR_BOX),Me=l.getParameter(l.VIEWPORT),Ce=new rn().fromArray(Y),Ie=new rn().fromArray(Me);function re(j,Ae,xe,we){const Be=new Uint8Array(4),be=l.createTexture();l.bindTexture(j,be),l.texParameteri(j,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(j,l.TEXTURE_MAG_FILTER,l.NEAREST);for(let We=0;We<xe;We++)j===l.TEXTURE_3D||j===l.TEXTURE_2D_ARRAY?l.texImage3D(Ae,0,l.RGBA,1,1,we,0,l.RGBA,l.UNSIGNED_BYTE,Be):l.texImage2D(Ae+We,0,l.RGBA,1,1,0,l.RGBA,l.UNSIGNED_BYTE,Be);return be}const ye={};ye[l.TEXTURE_2D]=re(l.TEXTURE_2D,l.TEXTURE_2D,1),ye[l.TEXTURE_CUBE_MAP]=re(l.TEXTURE_CUBE_MAP,l.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[l.TEXTURE_2D_ARRAY]=re(l.TEXTURE_2D_ARRAY,l.TEXTURE_2D_ARRAY,1,1),ye[l.TEXTURE_3D]=re(l.TEXTURE_3D,l.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),m.setClear(0),Se(l.DEPTH_TEST),d.setFunc(Or),$t(!1),en(H0),Se(l.CULL_FACE),_t(ya);function Se(j){_[j]!==!0&&(l.enable(j),_[j]=!0)}function He(j){_[j]!==!1&&(l.disable(j),_[j]=!1)}function nt(j,Ae){return x[j]!==Ae?(l.bindFramebuffer(j,Ae),x[j]=Ae,j===l.DRAW_FRAMEBUFFER&&(x[l.FRAMEBUFFER]=Ae),j===l.FRAMEBUFFER&&(x[l.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ke(j,Ae){let xe=A,we=!1;if(j){xe=S.get(Ae),xe===void 0&&(xe=[],S.set(Ae,xe));const Be=j.textures;if(xe.length!==Be.length||xe[0]!==l.COLOR_ATTACHMENT0){for(let be=0,We=Be.length;be<We;be++)xe[be]=l.COLOR_ATTACHMENT0+be;xe.length=Be.length,we=!0}}else xe[0]!==l.BACK&&(xe[0]=l.BACK,we=!0);we&&l.drawBuffers(xe)}function Wt(j){return w!==j?(l.useProgram(j),w=j,!0):!1}const ft={[Ds]:l.FUNC_ADD,[Zy]:l.FUNC_SUBTRACT,[Ky]:l.FUNC_REVERSE_SUBTRACT};ft[Qy]=l.MIN,ft[Jy]=l.MAX;const vt={[$y]:l.ZERO,[eb]:l.ONE,[tb]:l.SRC_COLOR,[kd]:l.SRC_ALPHA,[lb]:l.SRC_ALPHA_SATURATE,[sb]:l.DST_COLOR,[ib]:l.DST_ALPHA,[nb]:l.ONE_MINUS_SRC_COLOR,[jd]:l.ONE_MINUS_SRC_ALPHA,[rb]:l.ONE_MINUS_DST_COLOR,[ab]:l.ONE_MINUS_DST_ALPHA,[ob]:l.CONSTANT_COLOR,[cb]:l.ONE_MINUS_CONSTANT_COLOR,[ub]:l.CONSTANT_ALPHA,[fb]:l.ONE_MINUS_CONSTANT_ALPHA};function _t(j,Ae,xe,we,Be,be,We,Ve,Zt,Ut){if(j===ya){M===!0&&(He(l.BLEND),M=!1);return}if(M===!1&&(Se(l.BLEND),M=!0),j!==Yy){if(j!==b||Ut!==q){if((P!==Ds||F!==Ds)&&(l.blendEquation(l.FUNC_ADD),P=Ds,F=Ds),Ut)switch(j){case Dr:l.blendFuncSeparate(l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case G0:l.blendFunc(l.ONE,l.ONE);break;case V0:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case k0:l.blendFuncSeparate(l.DST_COLOR,l.ONE_MINUS_SRC_ALPHA,l.ZERO,l.ONE);break;default:Mt("WebGLState: Invalid blending: ",j);break}else switch(j){case Dr:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case G0:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE,l.ONE,l.ONE);break;case V0:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case k0:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",j);break}z=null,N=null,L=null,I=null,T.set(0,0,0),O=0,b=j,q=Ut}return}Be=Be||Ae,be=be||xe,We=We||we,(Ae!==P||Be!==F)&&(l.blendEquationSeparate(ft[Ae],ft[Be]),P=Ae,F=Be),(xe!==z||we!==N||be!==L||We!==I)&&(l.blendFuncSeparate(vt[xe],vt[we],vt[be],vt[We]),z=xe,N=we,L=be,I=We),(Ve.equals(T)===!1||Zt!==O)&&(l.blendColor(Ve.r,Ve.g,Ve.b,Zt),T.copy(Ve),O=Zt),b=j,q=!1}function dt(j,Ae){j.side===va?He(l.CULL_FACE):Se(l.CULL_FACE);let xe=j.side===Wn;Ae&&(xe=!xe),$t(xe),j.blending===Dr&&j.transparent===!1?_t(ya):_t(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),c.setMask(j.colorWrite);const we=j.stencilWrite;m.setTest(we),we&&(m.setMask(j.stencilWriteMask),m.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),m.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),on(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Se(l.SAMPLE_ALPHA_TO_COVERAGE):He(l.SAMPLE_ALPHA_TO_COVERAGE)}function $t(j){V!==j&&(j?l.frontFace(l.CW):l.frontFace(l.CCW),V=j)}function en(j){j!==Xy?(Se(l.CULL_FACE),j!==J&&(j===H0?l.cullFace(l.BACK):j===Wy?l.cullFace(l.FRONT):l.cullFace(l.FRONT_AND_BACK))):He(l.CULL_FACE),J=j}function tn(j){j!==$&&(G&&l.lineWidth(j),$=j)}function on(j,Ae,xe){j?(Se(l.POLYGON_OFFSET_FILL),(fe!==Ae||K!==xe)&&(fe=Ae,K=xe,d.getReversed()&&(Ae=-Ae),l.polygonOffset(Ae,xe))):He(l.POLYGON_OFFSET_FILL)}function Xt(j){j?Se(l.SCISSOR_TEST):He(l.SCISSOR_TEST)}function nn(j){j===void 0&&(j=l.TEXTURE0+B-1),Ee!==j&&(l.activeTexture(j),Ee=j)}function W(j,Ae,xe){xe===void 0&&(Ee===null?xe=l.TEXTURE0+B-1:xe=Ee);let we=U[xe];we===void 0&&(we={type:void 0,texture:void 0},U[xe]=we),(we.type!==j||we.texture!==Ae)&&(Ee!==xe&&(l.activeTexture(xe),Ee=xe),l.bindTexture(j,Ae||ye[j]),we.type=j,we.texture=Ae)}function zt(){const j=U[Ee];j!==void 0&&j.type!==void 0&&(l.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Ct(){try{l.compressedTexImage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function D(){try{l.compressedTexImage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function E(){try{l.texSubImage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function Q(){try{l.texSubImage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function le(){try{l.compressedTexSubImage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function he(){try{l.compressedTexSubImage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function Te(){try{l.texStorage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function Ne(){try{l.texStorage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function de(){try{l.texImage2D(...arguments)}catch(j){Mt("WebGLState:",j)}}function pe(){try{l.texImage3D(...arguments)}catch(j){Mt("WebGLState:",j)}}function Re(j){return y[j]!==void 0?y[j]:l.getParameter(j)}function Fe(j,Ae){y[j]!==Ae&&(l.pixelStorei(j,Ae),y[j]=Ae)}function Le(j){Ce.equals(j)===!1&&(l.scissor(j.x,j.y,j.z,j.w),Ce.copy(j))}function De(j){Ie.equals(j)===!1&&(l.viewport(j.x,j.y,j.z,j.w),Ie.copy(j))}function Ze(j,Ae){let xe=p.get(Ae);xe===void 0&&(xe=new WeakMap,p.set(Ae,xe));let we=xe.get(j);we===void 0&&(we=l.getUniformBlockIndex(Ae,j.name),xe.set(j,we))}function Qe(j,Ae){const we=p.get(Ae).get(j);g.get(Ae)!==we&&(l.uniformBlockBinding(Ae,we,j.__bindingPointIndex),g.set(Ae,we))}function it(){l.disable(l.BLEND),l.disable(l.CULL_FACE),l.disable(l.DEPTH_TEST),l.disable(l.POLYGON_OFFSET_FILL),l.disable(l.SCISSOR_TEST),l.disable(l.STENCIL_TEST),l.disable(l.SAMPLE_ALPHA_TO_COVERAGE),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.ONE,l.ZERO),l.blendFuncSeparate(l.ONE,l.ZERO,l.ONE,l.ZERO),l.blendColor(0,0,0,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(l.LESS),d.setReversed(!1),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(l.ALWAYS,0,4294967295),l.stencilOp(l.KEEP,l.KEEP,l.KEEP),l.clearStencil(0),l.cullFace(l.BACK),l.frontFace(l.CCW),l.polygonOffset(0,0),l.activeTexture(l.TEXTURE0),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),l.pixelStorei(l.PACK_ALIGNMENT,4),l.pixelStorei(l.UNPACK_ALIGNMENT,4),l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,!1),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,l.BROWSER_DEFAULT_WEBGL),l.pixelStorei(l.PACK_ROW_LENGTH,0),l.pixelStorei(l.PACK_SKIP_PIXELS,0),l.pixelStorei(l.PACK_SKIP_ROWS,0),l.pixelStorei(l.UNPACK_ROW_LENGTH,0),l.pixelStorei(l.UNPACK_IMAGE_HEIGHT,0),l.pixelStorei(l.UNPACK_SKIP_PIXELS,0),l.pixelStorei(l.UNPACK_SKIP_ROWS,0),l.pixelStorei(l.UNPACK_SKIP_IMAGES,0),_={},y={},Ee=null,U={},x={},S=new WeakMap,A=[],w=null,M=!1,b=null,P=null,z=null,N=null,F=null,L=null,I=null,T=new Nt(0,0,0),O=0,q=!1,V=null,J=null,$=null,fe=null,K=null,Ce.set(0,0,l.canvas.width,l.canvas.height),Ie.set(0,0,l.canvas.width,l.canvas.height),c.reset(),d.reset(),m.reset()}return{buffers:{color:c,depth:d,stencil:m},enable:Se,disable:He,bindFramebuffer:nt,drawBuffers:Ke,useProgram:Wt,setBlending:_t,setMaterial:dt,setFlipSided:$t,setCullFace:en,setLineWidth:tn,setPolygonOffset:on,setScissorTest:Xt,activeTexture:nn,bindTexture:W,unbindTexture:zt,compressedTexImage2D:Ct,compressedTexImage3D:D,texImage2D:de,texImage3D:pe,pixelStorei:Fe,getParameter:Re,updateUBOMapping:Ze,uniformBlockBinding:Qe,texStorage2D:Te,texStorage3D:Ne,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:le,compressedTexSubImage3D:he,scissor:Le,viewport:De,reset:it}}function YT(l,e,i,s,o,c,d){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Rt,_=new WeakMap,y=new Set;let x;const S=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,E){return A?new OffscreenCanvas(D,E):Vc("canvas")}function M(D,E,Q){let le=1;const he=Ct(D);if((he.width>Q||he.height>Q)&&(le=Q/Math.max(he.width,he.height)),le<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Te=Math.floor(le*he.width),Ne=Math.floor(le*he.height);x===void 0&&(x=w(Te,Ne));const de=E?w(Te,Ne):x;return de.width=Te,de.height=Ne,de.getContext("2d").drawImage(D,0,0,Te,Ne),tt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Te+"x"+Ne+")."),de}else return"data"in D&&tt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),D;return D}function b(D){return D.generateMipmaps}function P(D){l.generateMipmap(D)}function z(D){return D.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?l.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function N(D,E,Q,le,he,Te=!1){if(D!==null){if(l[D]!==void 0)return l[D];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ne;le&&(Ne=e.get("EXT_texture_norm16"),Ne||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=E;if(E===l.RED&&(Q===l.FLOAT&&(de=l.R32F),Q===l.HALF_FLOAT&&(de=l.R16F),Q===l.UNSIGNED_BYTE&&(de=l.R8),Q===l.UNSIGNED_SHORT&&Ne&&(de=Ne.R16_EXT),Q===l.SHORT&&Ne&&(de=Ne.R16_SNORM_EXT)),E===l.RED_INTEGER&&(Q===l.UNSIGNED_BYTE&&(de=l.R8UI),Q===l.UNSIGNED_SHORT&&(de=l.R16UI),Q===l.UNSIGNED_INT&&(de=l.R32UI),Q===l.BYTE&&(de=l.R8I),Q===l.SHORT&&(de=l.R16I),Q===l.INT&&(de=l.R32I)),E===l.RG&&(Q===l.FLOAT&&(de=l.RG32F),Q===l.HALF_FLOAT&&(de=l.RG16F),Q===l.UNSIGNED_BYTE&&(de=l.RG8),Q===l.UNSIGNED_SHORT&&Ne&&(de=Ne.RG16_EXT),Q===l.SHORT&&Ne&&(de=Ne.RG16_SNORM_EXT)),E===l.RG_INTEGER&&(Q===l.UNSIGNED_BYTE&&(de=l.RG8UI),Q===l.UNSIGNED_SHORT&&(de=l.RG16UI),Q===l.UNSIGNED_INT&&(de=l.RG32UI),Q===l.BYTE&&(de=l.RG8I),Q===l.SHORT&&(de=l.RG16I),Q===l.INT&&(de=l.RG32I)),E===l.RGB_INTEGER&&(Q===l.UNSIGNED_BYTE&&(de=l.RGB8UI),Q===l.UNSIGNED_SHORT&&(de=l.RGB16UI),Q===l.UNSIGNED_INT&&(de=l.RGB32UI),Q===l.BYTE&&(de=l.RGB8I),Q===l.SHORT&&(de=l.RGB16I),Q===l.INT&&(de=l.RGB32I)),E===l.RGBA_INTEGER&&(Q===l.UNSIGNED_BYTE&&(de=l.RGBA8UI),Q===l.UNSIGNED_SHORT&&(de=l.RGBA16UI),Q===l.UNSIGNED_INT&&(de=l.RGBA32UI),Q===l.BYTE&&(de=l.RGBA8I),Q===l.SHORT&&(de=l.RGBA16I),Q===l.INT&&(de=l.RGBA32I)),E===l.RGB&&(Q===l.UNSIGNED_SHORT&&Ne&&(de=Ne.RGB16_EXT),Q===l.SHORT&&Ne&&(de=Ne.RGB16_SNORM_EXT),Q===l.UNSIGNED_INT_5_9_9_9_REV&&(de=l.RGB9_E5),Q===l.UNSIGNED_INT_10F_11F_11F_REV&&(de=l.R11F_G11F_B10F)),E===l.RGBA){const pe=Te?Hc:bt.getTransfer(he);Q===l.FLOAT&&(de=l.RGBA32F),Q===l.HALF_FLOAT&&(de=l.RGBA16F),Q===l.UNSIGNED_BYTE&&(de=pe===Ft?l.SRGB8_ALPHA8:l.RGBA8),Q===l.UNSIGNED_SHORT&&Ne&&(de=Ne.RGBA16_EXT),Q===l.SHORT&&Ne&&(de=Ne.RGBA16_SNORM_EXT),Q===l.UNSIGNED_SHORT_4_4_4_4&&(de=l.RGBA4),Q===l.UNSIGNED_SHORT_5_5_5_1&&(de=l.RGB5_A1)}return(de===l.R16F||de===l.R32F||de===l.RG16F||de===l.RG32F||de===l.RGBA16F||de===l.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function F(D,E){let Q;return D?E===null||E===Wi||E===jl?Q=l.DEPTH24_STENCIL8:E===Gi?Q=l.DEPTH32F_STENCIL8:E===kl&&(Q=l.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wi||E===jl?Q=l.DEPTH_COMPONENT24:E===Gi?Q=l.DEPTH_COMPONENT32F:E===kl&&(Q=l.DEPTH_COMPONENT16),Q}function L(D,E){return b(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function I(D){const E=D.target;E.removeEventListener("dispose",I),O(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&y.delete(E)}function T(D){const E=D.target;E.removeEventListener("dispose",T),V(E)}function O(D){const E=s.get(D);if(E.__webglInit===void 0)return;const Q=D.source,le=S.get(Q);if(le){const he=le[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&q(D),Object.keys(le).length===0&&S.delete(Q)}s.remove(D)}function q(D){const E=s.get(D);l.deleteTexture(E.__webglTexture);const Q=D.source,le=S.get(Q);delete le[E.__cacheKey],d.memory.textures--}function V(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(E.__webglFramebuffer[le]))for(let he=0;he<E.__webglFramebuffer[le].length;he++)l.deleteFramebuffer(E.__webglFramebuffer[le][he]);else l.deleteFramebuffer(E.__webglFramebuffer[le]);E.__webglDepthbuffer&&l.deleteRenderbuffer(E.__webglDepthbuffer[le])}else{if(Array.isArray(E.__webglFramebuffer))for(let le=0;le<E.__webglFramebuffer.length;le++)l.deleteFramebuffer(E.__webglFramebuffer[le]);else l.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&l.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&l.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let le=0;le<E.__webglColorRenderbuffer.length;le++)E.__webglColorRenderbuffer[le]&&l.deleteRenderbuffer(E.__webglColorRenderbuffer[le]);E.__webglDepthRenderbuffer&&l.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=D.textures;for(let le=0,he=Q.length;le<he;le++){const Te=s.get(Q[le]);Te.__webglTexture&&(l.deleteTexture(Te.__webglTexture),d.memory.textures--),s.remove(Q[le])}s.remove(D)}let J=0;function $(){J=0}function fe(){return J}function K(D){J=D}function B(){const D=J;return D>=o.maxTextures&&tt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),J+=1,D}function G(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ee(D,E){const Q=s.get(D);if(D.isVideoTexture&&W(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Q.__version!==D.version){const le=D.image;if(le===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{He(Q,D,E);return}}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(l.TEXTURE_2D,Q.__webglTexture,l.TEXTURE0+E)}function ge(D,E){const Q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){He(Q,D,E);return}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(l.TEXTURE_2D_ARRAY,Q.__webglTexture,l.TEXTURE0+E)}function Ee(D,E){const Q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){He(Q,D,E);return}i.bindTexture(l.TEXTURE_3D,Q.__webglTexture,l.TEXTURE0+E)}function U(D,E){const Q=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Q.__version!==D.version){nt(Q,D,E);return}i.bindTexture(l.TEXTURE_CUBE_MAP,Q.__webglTexture,l.TEXTURE0+E)}const Y={[Jd]:l.REPEAT,[_a]:l.CLAMP_TO_EDGE,[$d]:l.MIRRORED_REPEAT},Me={[wn]:l.NEAREST,[pb]:l.NEAREST_MIPMAP_NEAREST,[lc]:l.NEAREST_MIPMAP_LINEAR,[On]:l.LINEAR,[fd]:l.LINEAR_MIPMAP_NEAREST,[Ls]:l.LINEAR_MIPMAP_LINEAR},Ce={[xb]:l.NEVER,[Sb]:l.ALWAYS,[vb]:l.LESS,[Vh]:l.LEQUAL,[_b]:l.EQUAL,[kh]:l.GEQUAL,[yb]:l.GREATER,[bb]:l.NOTEQUAL};function Ie(D,E){if(E.type===Gi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===fd||E.magFilter===lc||E.magFilter===Ls||E.minFilter===On||E.minFilter===fd||E.minFilter===lc||E.minFilter===Ls)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),l.texParameteri(D,l.TEXTURE_WRAP_S,Y[E.wrapS]),l.texParameteri(D,l.TEXTURE_WRAP_T,Y[E.wrapT]),(D===l.TEXTURE_3D||D===l.TEXTURE_2D_ARRAY)&&l.texParameteri(D,l.TEXTURE_WRAP_R,Y[E.wrapR]),l.texParameteri(D,l.TEXTURE_MAG_FILTER,Me[E.magFilter]),l.texParameteri(D,l.TEXTURE_MIN_FILTER,Me[E.minFilter]),E.compareFunction&&(l.texParameteri(D,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(D,l.TEXTURE_COMPARE_FUNC,Ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==lc&&E.minFilter!==Ls||E.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");l.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function re(D,E){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",I));const le=E.source;let he=S.get(le);he===void 0&&(he={},S.set(le,he));const Te=G(E);if(Te!==D.__cacheKey){he[Te]===void 0&&(he[Te]={texture:l.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),he[Te].usedTimes++;const Ne=he[D.__cacheKey];Ne!==void 0&&(he[D.__cacheKey].usedTimes--,Ne.usedTimes===0&&q(E)),D.__cacheKey=Te,D.__webglTexture=he[Te].texture}return Q}function ye(D,E,Q){return Math.floor(Math.floor(D/Q)/E)}function Se(D,E,Q,le){const Te=D.updateRanges;if(Te.length===0)i.texSubImage2D(l.TEXTURE_2D,0,0,0,E.width,E.height,Q,le,E.data);else{Te.sort((Fe,Le)=>Fe.start-Le.start);let Ne=0;for(let Fe=1;Fe<Te.length;Fe++){const Le=Te[Ne],De=Te[Fe],Ze=Le.start+Le.count,Qe=ye(De.start,E.width,4),it=ye(Le.start,E.width,4);De.start<=Ze+1&&Qe===it&&ye(De.start+De.count-1,E.width,4)===Qe?Le.count=Math.max(Le.count,De.start+De.count-Le.start):(++Ne,Te[Ne]=De)}Te.length=Ne+1;const de=i.getParameter(l.UNPACK_ROW_LENGTH),pe=i.getParameter(l.UNPACK_SKIP_PIXELS),Re=i.getParameter(l.UNPACK_SKIP_ROWS);i.pixelStorei(l.UNPACK_ROW_LENGTH,E.width);for(let Fe=0,Le=Te.length;Fe<Le;Fe++){const De=Te[Fe],Ze=Math.floor(De.start/4),Qe=Math.ceil(De.count/4),it=Ze%E.width,j=Math.floor(Ze/E.width),Ae=Qe,xe=1;i.pixelStorei(l.UNPACK_SKIP_PIXELS,it),i.pixelStorei(l.UNPACK_SKIP_ROWS,j),i.texSubImage2D(l.TEXTURE_2D,0,it,j,Ae,xe,Q,le,E.data)}D.clearUpdateRanges(),i.pixelStorei(l.UNPACK_ROW_LENGTH,de),i.pixelStorei(l.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(l.UNPACK_SKIP_ROWS,Re)}}function He(D,E,Q){let le=l.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=l.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=l.TEXTURE_3D);const he=re(D,E),Te=E.source;i.bindTexture(le,D.__webglTexture,l.TEXTURE0+Q);const Ne=s.get(Te);if(Te.version!==Ne.__version||he===!0){if(i.activeTexture(l.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const xe=bt.getPrimaries(bt.workingColorSpace),we=E.colorSpace===is?null:bt.getPrimaries(E.colorSpace),Be=E.colorSpace===is||xe===we?l.NONE:l.BROWSER_DEFAULT_WEBGL;i.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}i.pixelStorei(l.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=M(E.image,!1,o.maxTextureSize);pe=zt(E,pe);const Re=c.convert(E.format,E.colorSpace),Fe=c.convert(E.type);let Le=N(E.internalFormat,Re,Fe,E.normalized,E.colorSpace,E.isVideoTexture);Ie(le,E);let De;const Ze=E.mipmaps,Qe=E.isVideoTexture!==!0,it=Ne.__version===void 0||he===!0,j=Te.dataReady,Ae=L(E,pe);if(E.isDepthTexture)Le=F(E.format===Os,E.type),it&&(Qe?i.texStorage2D(l.TEXTURE_2D,1,Le,pe.width,pe.height):i.texImage2D(l.TEXTURE_2D,0,Le,pe.width,pe.height,0,Re,Fe,null));else if(E.isDataTexture)if(Ze.length>0){Qe&&it&&i.texStorage2D(l.TEXTURE_2D,Ae,Le,Ze[0].width,Ze[0].height);for(let xe=0,we=Ze.length;xe<we;xe++)De=Ze[xe],Qe?j&&i.texSubImage2D(l.TEXTURE_2D,xe,0,0,De.width,De.height,Re,Fe,De.data):i.texImage2D(l.TEXTURE_2D,xe,Le,De.width,De.height,0,Re,Fe,De.data);E.generateMipmaps=!1}else Qe?(it&&i.texStorage2D(l.TEXTURE_2D,Ae,Le,pe.width,pe.height),j&&Se(E,pe,Re,Fe)):i.texImage2D(l.TEXTURE_2D,0,Le,pe.width,pe.height,0,Re,Fe,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Qe&&it&&i.texStorage3D(l.TEXTURE_2D_ARRAY,Ae,Le,Ze[0].width,Ze[0].height,pe.depth);for(let xe=0,we=Ze.length;xe<we;xe++)if(De=Ze[xe],E.format!==Ni)if(Re!==null)if(Qe){if(j)if(E.layerUpdates.size>0){const Be=yx(De.width,De.height,E.format,E.type);for(const be of E.layerUpdates){const We=De.data.subarray(be*Be/De.data.BYTES_PER_ELEMENT,(be+1)*Be/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,xe,0,0,be,De.width,De.height,1,Re,We)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,xe,0,0,0,De.width,De.height,pe.depth,Re,De.data)}else i.compressedTexImage3D(l.TEXTURE_2D_ARRAY,xe,Le,De.width,De.height,pe.depth,0,De.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?j&&i.texSubImage3D(l.TEXTURE_2D_ARRAY,xe,0,0,0,De.width,De.height,pe.depth,Re,Fe,De.data):i.texImage3D(l.TEXTURE_2D_ARRAY,xe,Le,De.width,De.height,pe.depth,0,Re,Fe,De.data)}else{Qe&&it&&i.texStorage2D(l.TEXTURE_2D,Ae,Le,Ze[0].width,Ze[0].height);for(let xe=0,we=Ze.length;xe<we;xe++)De=Ze[xe],E.format!==Ni?Re!==null?Qe?j&&i.compressedTexSubImage2D(l.TEXTURE_2D,xe,0,0,De.width,De.height,Re,De.data):i.compressedTexImage2D(l.TEXTURE_2D,xe,Le,De.width,De.height,0,De.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?j&&i.texSubImage2D(l.TEXTURE_2D,xe,0,0,De.width,De.height,Re,Fe,De.data):i.texImage2D(l.TEXTURE_2D,xe,Le,De.width,De.height,0,Re,Fe,De.data)}else if(E.isDataArrayTexture)if(Qe){if(it&&i.texStorage3D(l.TEXTURE_2D_ARRAY,Ae,Le,pe.width,pe.height,pe.depth),j)if(E.layerUpdates.size>0){const xe=yx(pe.width,pe.height,E.format,E.type);for(const we of E.layerUpdates){const Be=pe.data.subarray(we*xe/pe.data.BYTES_PER_ELEMENT,(we+1)*xe/pe.data.BYTES_PER_ELEMENT);i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,we,pe.width,pe.height,1,Re,Fe,Be)}E.clearLayerUpdates()}else i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Re,Fe,pe.data)}else i.texImage3D(l.TEXTURE_2D_ARRAY,0,Le,pe.width,pe.height,pe.depth,0,Re,Fe,pe.data);else if(E.isData3DTexture)Qe?(it&&i.texStorage3D(l.TEXTURE_3D,Ae,Le,pe.width,pe.height,pe.depth),j&&i.texSubImage3D(l.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Re,Fe,pe.data)):i.texImage3D(l.TEXTURE_3D,0,Le,pe.width,pe.height,pe.depth,0,Re,Fe,pe.data);else if(E.isFramebufferTexture){if(it)if(Qe)i.texStorage2D(l.TEXTURE_2D,Ae,Le,pe.width,pe.height);else{let xe=pe.width,we=pe.height;for(let Be=0;Be<Ae;Be++)i.texImage2D(l.TEXTURE_2D,Be,Le,xe,we,0,Re,Fe,null),xe>>=1,we>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in l){const xe=l.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),pe.parentNode!==xe){xe.appendChild(pe),y.add(E),xe.onpaint=we=>{const Be=we.changedElements;for(const be of y)Be.includes(be.image)&&(be.needsUpdate=!0)},xe.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,pe);else{const Be=l.RGBA,be=l.RGBA,We=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,Be,be,We,pe)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Qe&&it){const xe=Ct(Ze[0]);i.texStorage2D(l.TEXTURE_2D,Ae,Le,xe.width,xe.height)}for(let xe=0,we=Ze.length;xe<we;xe++)De=Ze[xe],Qe?j&&i.texSubImage2D(l.TEXTURE_2D,xe,0,0,Re,Fe,De):i.texImage2D(l.TEXTURE_2D,xe,Le,Re,Fe,De);E.generateMipmaps=!1}else if(Qe){if(it){const xe=Ct(pe);i.texStorage2D(l.TEXTURE_2D,Ae,Le,xe.width,xe.height)}j&&i.texSubImage2D(l.TEXTURE_2D,0,0,0,Re,Fe,pe)}else i.texImage2D(l.TEXTURE_2D,0,Le,Re,Fe,pe);b(E)&&P(le),Ne.__version=Te.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function nt(D,E,Q){if(E.image.length!==6)return;const le=re(D,E),he=E.source;i.bindTexture(l.TEXTURE_CUBE_MAP,D.__webglTexture,l.TEXTURE0+Q);const Te=s.get(he);if(he.version!==Te.__version||le===!0){i.activeTexture(l.TEXTURE0+Q);const Ne=bt.getPrimaries(bt.workingColorSpace),de=E.colorSpace===is?null:bt.getPrimaries(E.colorSpace),pe=E.colorSpace===is||Ne===de?l.NONE:l.BROWSER_DEFAULT_WEBGL;i.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(l.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Re=E.isCompressedTexture||E.image[0].isCompressedTexture,Fe=E.image[0]&&E.image[0].isDataTexture,Le=[];for(let be=0;be<6;be++)!Re&&!Fe?Le[be]=M(E.image[be],!0,o.maxCubemapSize):Le[be]=Fe?E.image[be].image:E.image[be],Le[be]=zt(E,Le[be]);const De=Le[0],Ze=c.convert(E.format,E.colorSpace),Qe=c.convert(E.type),it=N(E.internalFormat,Ze,Qe,E.normalized,E.colorSpace),j=E.isVideoTexture!==!0,Ae=Te.__version===void 0||le===!0,xe=he.dataReady;let we=L(E,De);Ie(l.TEXTURE_CUBE_MAP,E);let Be;if(Re){j&&Ae&&i.texStorage2D(l.TEXTURE_CUBE_MAP,we,it,De.width,De.height);for(let be=0;be<6;be++){Be=Le[be].mipmaps;for(let We=0;We<Be.length;We++){const Ve=Be[We];E.format!==Ni?Ze!==null?j?xe&&i.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,0,0,Ve.width,Ve.height,Ze,Ve.data):i.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,it,Ve.width,Ve.height,0,Ve.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?xe&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,0,0,Ve.width,Ve.height,Ze,Qe,Ve.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,it,Ve.width,Ve.height,0,Ze,Qe,Ve.data)}}}else{if(Be=E.mipmaps,j&&Ae){Be.length>0&&we++;const be=Ct(Le[0]);i.texStorage2D(l.TEXTURE_CUBE_MAP,we,it,be.width,be.height)}for(let be=0;be<6;be++)if(Fe){j?xe&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Le[be].width,Le[be].height,Ze,Qe,Le[be].data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,it,Le[be].width,Le[be].height,0,Ze,Qe,Le[be].data);for(let We=0;We<Be.length;We++){const Zt=Be[We].image[be].image;j?xe&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,0,0,Zt.width,Zt.height,Ze,Qe,Zt.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,it,Zt.width,Zt.height,0,Ze,Qe,Zt.data)}}else{j?xe&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ze,Qe,Le[be]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,it,Ze,Qe,Le[be]);for(let We=0;We<Be.length;We++){const Ve=Be[We];j?xe&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,0,0,Ze,Qe,Ve.image[be]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,it,Ze,Qe,Ve.image[be])}}}b(E)&&P(l.TEXTURE_CUBE_MAP),Te.__version=he.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Ke(D,E,Q,le,he,Te){const Ne=c.convert(Q.format,Q.colorSpace),de=c.convert(Q.type),pe=N(Q.internalFormat,Ne,de,Q.normalized,Q.colorSpace),Re=s.get(E),Fe=s.get(Q);if(Fe.__renderTarget=E,!Re.__hasExternalTextures){const Le=Math.max(1,E.width>>Te),De=Math.max(1,E.height>>Te);he===l.TEXTURE_3D||he===l.TEXTURE_2D_ARRAY?i.texImage3D(he,Te,pe,Le,De,E.depth,0,Ne,de,null):i.texImage2D(he,Te,pe,Le,De,0,Ne,de,null)}i.bindFramebuffer(l.FRAMEBUFFER,D),nn(E)?m.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,le,he,Fe.__webglTexture,0,Xt(E)):(he===l.TEXTURE_2D||he>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,le,he,Fe.__webglTexture,Te),i.bindFramebuffer(l.FRAMEBUFFER,null)}function Wt(D,E,Q){if(l.bindRenderbuffer(l.RENDERBUFFER,D),E.depthBuffer){const le=E.depthTexture,he=le&&le.isDepthTexture?le.type:null,Te=F(E.stencilBuffer,he),Ne=E.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;nn(E)?m.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Xt(E),Te,E.width,E.height):Q?l.renderbufferStorageMultisample(l.RENDERBUFFER,Xt(E),Te,E.width,E.height):l.renderbufferStorage(l.RENDERBUFFER,Te,E.width,E.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,Ne,l.RENDERBUFFER,D)}else{const le=E.textures;for(let he=0;he<le.length;he++){const Te=le[he],Ne=c.convert(Te.format,Te.colorSpace),de=c.convert(Te.type),pe=N(Te.internalFormat,Ne,de,Te.normalized,Te.colorSpace);nn(E)?m.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Xt(E),pe,E.width,E.height):Q?l.renderbufferStorageMultisample(l.RENDERBUFFER,Xt(E),pe,E.width,E.height):l.renderbufferStorage(l.RENDERBUFFER,pe,E.width,E.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function ft(D,E,Q){const le=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(l.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=s.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),le){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),he.__webglTexture===void 0){he.__webglTexture=l.createTexture(),i.bindTexture(l.TEXTURE_CUBE_MAP,he.__webglTexture),Ie(l.TEXTURE_CUBE_MAP,E.depthTexture);const Re=c.convert(E.depthTexture.format),Fe=c.convert(E.depthTexture.type);let Le;E.depthTexture.format===Ma?Le=l.DEPTH_COMPONENT24:E.depthTexture.format===Os&&(Le=l.DEPTH24_STENCIL8);for(let De=0;De<6;De++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Le,E.width,E.height,0,Re,Fe,null)}}else ee(E.depthTexture,0);const Te=he.__webglTexture,Ne=Xt(E),de=le?l.TEXTURE_CUBE_MAP_POSITIVE_X+Q:l.TEXTURE_2D,pe=E.depthTexture.format===Os?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ma)nn(E)?m.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,pe,de,Te,0,Ne):l.framebufferTexture2D(l.FRAMEBUFFER,pe,de,Te,0);else if(E.depthTexture.format===Os)nn(E)?m.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,pe,de,Te,0,Ne):l.framebufferTexture2D(l.FRAMEBUFFER,pe,de,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(D){const E=s.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const le=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),le){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,le.removeEventListener("dispose",he)};le.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=le}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let le=0;le<6;le++)ft(E.__webglFramebuffer[le],D,le);else{const le=D.texture.mipmaps;le&&le.length>0?ft(E.__webglFramebuffer[0],D,0):ft(E.__webglFramebuffer,D,0)}else if(Q){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(i.bindFramebuffer(l.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]===void 0)E.__webglDepthbuffer[le]=l.createRenderbuffer(),Wt(E.__webglDepthbuffer[le],D,!1);else{const he=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer[le];l.bindRenderbuffer(l.RENDERBUFFER,Te),l.framebufferRenderbuffer(l.FRAMEBUFFER,he,l.RENDERBUFFER,Te)}}else{const le=D.texture.mipmaps;if(le&&le.length>0?i.bindFramebuffer(l.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(l.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=l.createRenderbuffer(),Wt(E.__webglDepthbuffer,D,!1);else{const he=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,Te),l.framebufferRenderbuffer(l.FRAMEBUFFER,he,l.RENDERBUFFER,Te)}}i.bindFramebuffer(l.FRAMEBUFFER,null)}function _t(D,E,Q){const le=s.get(D);E!==void 0&&Ke(le.__webglFramebuffer,D,D.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),Q!==void 0&&vt(D)}function dt(D){const E=D.texture,Q=s.get(D),le=s.get(E);D.addEventListener("dispose",T);const he=D.textures,Te=D.isWebGLCubeRenderTarget===!0,Ne=he.length>1;if(Ne||(le.__webglTexture===void 0&&(le.__webglTexture=l.createTexture()),le.__version=E.version,d.memory.textures++),Te){Q.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[de]=[];for(let pe=0;pe<E.mipmaps.length;pe++)Q.__webglFramebuffer[de][pe]=l.createFramebuffer()}else Q.__webglFramebuffer[de]=l.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)Q.__webglFramebuffer[de]=l.createFramebuffer()}else Q.__webglFramebuffer=l.createFramebuffer();if(Ne)for(let de=0,pe=he.length;de<pe;de++){const Re=s.get(he[de]);Re.__webglTexture===void 0&&(Re.__webglTexture=l.createTexture(),d.memory.textures++)}if(D.samples>0&&nn(D)===!1){Q.__webglMultisampledFramebuffer=l.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(l.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let de=0;de<he.length;de++){const pe=he[de];Q.__webglColorRenderbuffer[de]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,Q.__webglColorRenderbuffer[de]);const Re=c.convert(pe.format,pe.colorSpace),Fe=c.convert(pe.type),Le=N(pe.internalFormat,Re,Fe,pe.normalized,pe.colorSpace,D.isXRRenderTarget===!0),De=Xt(D);l.renderbufferStorageMultisample(l.RENDERBUFFER,De,Le,D.width,D.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+de,l.RENDERBUFFER,Q.__webglColorRenderbuffer[de])}l.bindRenderbuffer(l.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=l.createRenderbuffer(),Wt(Q.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(l.FRAMEBUFFER,null)}}if(Te){i.bindTexture(l.TEXTURE_CUBE_MAP,le.__webglTexture),Ie(l.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Ke(Q.__webglFramebuffer[de][pe],D,E,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else Ke(Q.__webglFramebuffer[de],D,E,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);b(E)&&P(l.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ne){for(let de=0,pe=he.length;de<pe;de++){const Re=he[de],Fe=s.get(Re);let Le=l.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Le=D.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),i.bindTexture(Le,Fe.__webglTexture),Ie(Le,Re),Ke(Q.__webglFramebuffer,D,Re,l.COLOR_ATTACHMENT0+de,Le,0),b(Re)&&P(Le)}i.unbindTexture()}else{let de=l.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(de=D.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),i.bindTexture(de,le.__webglTexture),Ie(de,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Ke(Q.__webglFramebuffer[pe],D,E,l.COLOR_ATTACHMENT0,de,pe);else Ke(Q.__webglFramebuffer,D,E,l.COLOR_ATTACHMENT0,de,0);b(E)&&P(de),i.unbindTexture()}D.depthBuffer&&vt(D)}function $t(D){const E=D.textures;for(let Q=0,le=E.length;Q<le;Q++){const he=E[Q];if(b(he)){const Te=z(D),Ne=s.get(he).__webglTexture;i.bindTexture(Te,Ne),P(Te),i.unbindTexture()}}}const en=[],tn=[];function on(D){if(D.samples>0){if(nn(D)===!1){const E=D.textures,Q=D.width,le=D.height;let he=l.COLOR_BUFFER_BIT;const Te=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Ne=s.get(D),de=E.length>1;if(de)for(let Re=0;Re<E.length;Re++)i.bindFramebuffer(l.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Re,l.RENDERBUFFER,null),i.bindFramebuffer(l.FRAMEBUFFER,Ne.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+Re,l.TEXTURE_2D,null,0);i.bindFramebuffer(l.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const pe=D.texture.mipmaps;pe&&pe.length>0?i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(he|=l.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(he|=l.STENCIL_BUFFER_BIT)),de){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,Ne.__webglColorRenderbuffer[Re]);const Fe=s.get(E[Re]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,Fe,0)}l.blitFramebuffer(0,0,Q,le,0,0,Q,le,he,l.NEAREST),g===!0&&(en.length=0,tn.length=0,en.push(l.COLOR_ATTACHMENT0+Re),D.depthBuffer&&D.resolveDepthBuffer===!1&&(en.push(Te),tn.push(Te),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,tn)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,en))}if(i.bindFramebuffer(l.READ_FRAMEBUFFER,null),i.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),de)for(let Re=0;Re<E.length;Re++){i.bindFramebuffer(l.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Re,l.RENDERBUFFER,Ne.__webglColorRenderbuffer[Re]);const Fe=s.get(E[Re]).__webglTexture;i.bindFramebuffer(l.FRAMEBUFFER,Ne.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+Re,l.TEXTURE_2D,Fe,0)}i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&g){const E=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[E])}}}function Xt(D){return Math.min(o.maxSamples,D.samples)}function nn(D){const E=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function W(D){const E=d.render.frame;_.get(D)!==E&&(_.set(D,E),D.update())}function zt(D,E){const Q=D.colorSpace,le=D.format,he=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==zc&&Q!==is&&(bt.getTransfer(Q)===Ft?(le!==Ni||he!==_i)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",Q)),E}function Ct(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=B,this.resetTextureUnits=$,this.getTextureUnits=fe,this.setTextureUnits=K,this.setTexture2D=ee,this.setTexture2DArray=ge,this.setTexture3D=Ee,this.setTextureCube=U,this.rebindTextures=_t,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function ZT(l,e){function i(s,o=is){let c;const d=bt.getTransfer(o);if(s===_i)return l.UNSIGNED_BYTE;if(s===Bh)return l.UNSIGNED_SHORT_4_4_4_4;if(s===Fh)return l.UNSIGNED_SHORT_5_5_5_1;if(s===nv)return l.UNSIGNED_INT_5_9_9_9_REV;if(s===iv)return l.UNSIGNED_INT_10F_11F_11F_REV;if(s===ev)return l.BYTE;if(s===tv)return l.SHORT;if(s===kl)return l.UNSIGNED_SHORT;if(s===Ih)return l.INT;if(s===Wi)return l.UNSIGNED_INT;if(s===Gi)return l.FLOAT;if(s===Sa)return l.HALF_FLOAT;if(s===av)return l.ALPHA;if(s===sv)return l.RGB;if(s===Ni)return l.RGBA;if(s===Ma)return l.DEPTH_COMPONENT;if(s===Os)return l.DEPTH_STENCIL;if(s===rv)return l.RED;if(s===zh)return l.RED_INTEGER;if(s===Is)return l.RG;if(s===Hh)return l.RG_INTEGER;if(s===Gh)return l.RGBA_INTEGER;if(s===Uc||s===Lc||s===Oc||s===Pc)if(d===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Uc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Uc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===eh||s===th||s===nh||s===ih)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===eh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===th)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ih)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ah||s===sh||s===rh||s===lh||s===oh||s===Bc||s===ch)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ah||s===sh)return d===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===rh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===lh)return c.COMPRESSED_R11_EAC;if(s===oh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Bc)return c.COMPRESSED_RG11_EAC;if(s===ch)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===xh||s===vh||s===_h||s===yh||s===bh||s===Sh||s===Mh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===uh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ph)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_h)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Eh||s===Th||s===Ah)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Eh)return d===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Th)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ah)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Rh||s===Ch||s===Fc||s===wh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Rh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ch)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jl?l.UNSIGNED_INT_24_8:l[s]!==void 0?l[s]:null}return{convert:i}}const KT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QT=`
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

}`;class JT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new mv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new qi({vertexShader:KT,fragmentShader:QT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Di(new Kc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $T extends Fs{constructor(e,i){super();const s=this;let o=null,c=1,d=null,m="local-floor",g=1,p=null,_=null,y=null,x=null,S=null,A=null;const w=typeof XRWebGLBinding<"u",M=new JT,b={},P=i.getContextAttributes();let z=null,N=null;const F=[],L=[],I=new Rt;let T=null;const O=new vi;O.viewport=new rn;const q=new vi;q.viewport=new rn;const V=[O,q],J=new oS;let $=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ye=F[re];return ye===void 0&&(ye=new _d,F[re]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(re){let ye=F[re];return ye===void 0&&(ye=new _d,F[re]=ye),ye.getGripSpace()},this.getHand=function(re){let ye=F[re];return ye===void 0&&(ye=new _d,F[re]=ye),ye.getHandSpace()};function K(re){const ye=L.indexOf(re.inputSource);if(ye===-1)return;const Se=F[ye];Se!==void 0&&(Se.update(re.inputSource,re.frame,p||d),Se.dispatchEvent({type:re.type,data:re.inputSource}))}function B(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",G);for(let re=0;re<F.length;re++){const ye=L[re];ye!==null&&(L[re]=null,F[re].disconnect(ye))}$=null,fe=null,M.reset();for(const re in b)delete b[re];e.setRenderTarget(z),S=null,x=null,y=null,o=null,N=null,Ie.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,s.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){m=re,s.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y===null&&w&&(y=new XRWebGLBinding(o,i)),y},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",B),o.addEventListener("inputsourceschange",G),P.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,He=null,nt=null;P.depth&&(nt=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Se=P.stencil?Os:Ma,He=P.stencil?jl:Wi);const Ke={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:c};y=this.getBinding(),x=y.createProjectionLayer(Ke),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new ji(x.textureWidth,x.textureHeight,{format:Ni,type:_i,depthTexture:new Ir(x.textureWidth,x.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,i,Se),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new ji(S.framebufferWidth,S.framebufferHeight,{format:Ni,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(g),p=null,d=await o.requestReferenceSpace(m),Ie.setContext(o),Ie.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(re){for(let ye=0;ye<re.removed.length;ye++){const Se=re.removed[ye],He=L.indexOf(Se);He>=0&&(L[He]=null,F[He].disconnect(Se))}for(let ye=0;ye<re.added.length;ye++){const Se=re.added[ye];let He=L.indexOf(Se);if(He===-1){for(let Ke=0;Ke<F.length;Ke++)if(Ke>=L.length){L.push(Se),He=Ke;break}else if(L[Ke]===null){L[Ke]=Se,He=Ke;break}if(He===-1)break}const nt=F[He];nt&&nt.connect(Se)}}const ee=new ne,ge=new ne;function Ee(re,ye,Se){ee.setFromMatrixPosition(ye.matrixWorld),ge.setFromMatrixPosition(Se.matrixWorld);const He=ee.distanceTo(ge),nt=ye.projectionMatrix.elements,Ke=Se.projectionMatrix.elements,Wt=nt[14]/(nt[10]-1),ft=nt[14]/(nt[10]+1),vt=(nt[9]+1)/nt[5],_t=(nt[9]-1)/nt[5],dt=(nt[8]-1)/nt[0],$t=(Ke[8]+1)/Ke[0],en=Wt*dt,tn=Wt*$t,on=He/(-dt+$t),Xt=on*-dt;if(ye.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Xt),re.translateZ(on),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),nt[10]===-1)re.projectionMatrix.copy(ye.projectionMatrix),re.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const nn=Wt+on,W=ft+on,zt=en-Xt,Ct=tn+(He-Xt),D=vt*ft/W*nn,E=_t*ft/W*nn;re.projectionMatrix.makePerspective(zt,Ct,D,E,nn,W),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function U(re,ye){ye===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ye.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let ye=re.near,Se=re.far;M.texture!==null&&(M.depthNear>0&&(ye=M.depthNear),M.depthFar>0&&(Se=M.depthFar)),J.near=q.near=O.near=ye,J.far=q.far=O.far=Se,($!==J.near||fe!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),$=J.near,fe=J.far),J.layers.mask=re.layers.mask|6,O.layers.mask=J.layers.mask&-5,q.layers.mask=J.layers.mask&-3;const He=re.parent,nt=J.cameras;U(J,He);for(let Ke=0;Ke<nt.length;Ke++)U(nt[Ke],He);nt.length===2?Ee(J,O,q):J.projectionMatrix.copy(O.projectionMatrix),Y(re,J,He)};function Y(re,ye,Se){Se===null?re.matrix.copy(ye.matrixWorld):(re.matrix.copy(Se.matrixWorld),re.matrix.invert(),re.matrix.multiply(ye.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ye.projectionMatrix),re.projectionMatrixInverse.copy(ye.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Nh*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(x===null&&S===null))return g},this.setFoveation=function(re){g=re,x!==null&&(x.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(re){return b[re]};let Me=null;function Ce(re,ye){if(_=ye.getViewerPose(p||d),A=ye,_!==null){const Se=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let He=!1;Se.length!==J.cameras.length&&(J.cameras.length=0,He=!0);for(let ft=0;ft<Se.length;ft++){const vt=Se[ft];let _t=null;if(S!==null)_t=S.getViewport(vt);else{const $t=y.getViewSubImage(x,vt);_t=$t.viewport,ft===0&&(e.setRenderTargetTextures(N,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(N))}let dt=V[ft];dt===void 0&&(dt=new vi,dt.layers.enable(ft),dt.viewport=new rn,V[ft]=dt),dt.matrix.fromArray(vt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(vt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(_t.x,_t.y,_t.width,_t.height),ft===0&&(J.matrix.copy(dt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),He===!0&&J.cameras.push(dt)}const nt=o.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){y=s.getBinding();const ft=y.getDepthInformation(Se[0]);ft&&ft.isValid&&ft.texture&&M.init(ft,o.renderState)}if(nt&&nt.includes("camera-access")&&w){e.state.unbindTexture(),y=s.getBinding();for(let ft=0;ft<Se.length;ft++){const vt=Se[ft].camera;if(vt){let _t=b[vt];_t||(_t=new mv,b[vt]=_t);const dt=y.getCameraImage(vt);_t.sourceTexture=dt}}}}for(let Se=0;Se<F.length;Se++){const He=L[Se],nt=F[Se];He!==null&&nt!==void 0&&nt.update(He,ye,p||d)}Me&&Me(re,ye),ye.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ye}),A=null}const Ie=new _v;Ie.setAnimationLoop(Ce),this.setAnimationLoop=function(re){Me=re},this.dispose=function(){}}}const eA=new ln,Av=new rt;Av.set(-1,0,0,0,1,0,0,0,1);function tA(l,e){function i(M,b){M.matrixAutoUpdate===!0&&M.updateMatrix(),b.value.copy(M.matrix)}function s(M,b){b.color.getRGB(M.fogColor.value,gv(l)),b.isFog?(M.fogNear.value=b.near,M.fogFar.value=b.far):b.isFogExp2&&(M.fogDensity.value=b.density)}function o(M,b,P,z,N){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?c(M,b):b.isMeshLambertMaterial?(c(M,b),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(c(M,b),y(M,b)):b.isMeshPhongMaterial?(c(M,b),_(M,b),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(c(M,b),x(M,b),b.isMeshPhysicalMaterial&&S(M,b,N)):b.isMeshMatcapMaterial?(c(M,b),A(M,b)):b.isMeshDepthMaterial?c(M,b):b.isMeshDistanceMaterial?(c(M,b),w(M,b)):b.isMeshNormalMaterial?c(M,b):b.isLineBasicMaterial?(d(M,b),b.isLineDashedMaterial&&m(M,b)):b.isPointsMaterial?g(M,b,P,z):b.isSpriteMaterial?p(M,b):b.isShadowMaterial?(M.color.value.copy(b.color),M.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function c(M,b){M.opacity.value=b.opacity,b.color&&M.diffuse.value.copy(b.color),b.emissive&&M.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(M.map.value=b.map,i(b.map,M.mapTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.bumpMap&&(M.bumpMap.value=b.bumpMap,i(b.bumpMap,M.bumpMapTransform),M.bumpScale.value=b.bumpScale,b.side===Wn&&(M.bumpScale.value*=-1)),b.normalMap&&(M.normalMap.value=b.normalMap,i(b.normalMap,M.normalMapTransform),M.normalScale.value.copy(b.normalScale),b.side===Wn&&M.normalScale.value.negate()),b.displacementMap&&(M.displacementMap.value=b.displacementMap,i(b.displacementMap,M.displacementMapTransform),M.displacementScale.value=b.displacementScale,M.displacementBias.value=b.displacementBias),b.emissiveMap&&(M.emissiveMap.value=b.emissiveMap,i(b.emissiveMap,M.emissiveMapTransform)),b.specularMap&&(M.specularMap.value=b.specularMap,i(b.specularMap,M.specularMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest);const P=e.get(b),z=P.envMap,N=P.envMapRotation;z&&(M.envMap.value=z,M.envMapRotation.value.setFromMatrix4(eA.makeRotationFromEuler(N)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Av),M.reflectivity.value=b.reflectivity,M.ior.value=b.ior,M.refractionRatio.value=b.refractionRatio),b.lightMap&&(M.lightMap.value=b.lightMap,M.lightMapIntensity.value=b.lightMapIntensity,i(b.lightMap,M.lightMapTransform)),b.aoMap&&(M.aoMap.value=b.aoMap,M.aoMapIntensity.value=b.aoMapIntensity,i(b.aoMap,M.aoMapTransform))}function d(M,b){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,b.map&&(M.map.value=b.map,i(b.map,M.mapTransform))}function m(M,b){M.dashSize.value=b.dashSize,M.totalSize.value=b.dashSize+b.gapSize,M.scale.value=b.scale}function g(M,b,P,z){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,M.size.value=b.size*P,M.scale.value=z*.5,b.map&&(M.map.value=b.map,i(b.map,M.uvTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest)}function p(M,b){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,M.rotation.value=b.rotation,b.map&&(M.map.value=b.map,i(b.map,M.mapTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest)}function _(M,b){M.specular.value.copy(b.specular),M.shininess.value=Math.max(b.shininess,1e-4)}function y(M,b){b.gradientMap&&(M.gradientMap.value=b.gradientMap)}function x(M,b){M.metalness.value=b.metalness,b.metalnessMap&&(M.metalnessMap.value=b.metalnessMap,i(b.metalnessMap,M.metalnessMapTransform)),M.roughness.value=b.roughness,b.roughnessMap&&(M.roughnessMap.value=b.roughnessMap,i(b.roughnessMap,M.roughnessMapTransform)),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)}function S(M,b,P){M.ior.value=b.ior,b.sheen>0&&(M.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),M.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(M.sheenColorMap.value=b.sheenColorMap,i(b.sheenColorMap,M.sheenColorMapTransform)),b.sheenRoughnessMap&&(M.sheenRoughnessMap.value=b.sheenRoughnessMap,i(b.sheenRoughnessMap,M.sheenRoughnessMapTransform))),b.clearcoat>0&&(M.clearcoat.value=b.clearcoat,M.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(M.clearcoatMap.value=b.clearcoatMap,i(b.clearcoatMap,M.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,i(b.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(M.clearcoatNormalMap.value=b.clearcoatNormalMap,i(b.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===Wn&&M.clearcoatNormalScale.value.negate())),b.dispersion>0&&(M.dispersion.value=b.dispersion),b.iridescence>0&&(M.iridescence.value=b.iridescence,M.iridescenceIOR.value=b.iridescenceIOR,M.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(M.iridescenceMap.value=b.iridescenceMap,i(b.iridescenceMap,M.iridescenceMapTransform)),b.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=b.iridescenceThicknessMap,i(b.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),b.transmission>0&&(M.transmission.value=b.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),b.transmissionMap&&(M.transmissionMap.value=b.transmissionMap,i(b.transmissionMap,M.transmissionMapTransform)),M.thickness.value=b.thickness,b.thicknessMap&&(M.thicknessMap.value=b.thicknessMap,i(b.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=b.attenuationDistance,M.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(M.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(M.anisotropyMap.value=b.anisotropyMap,i(b.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=b.specularIntensity,M.specularColor.value.copy(b.specularColor),b.specularColorMap&&(M.specularColorMap.value=b.specularColorMap,i(b.specularColorMap,M.specularColorMapTransform)),b.specularIntensityMap&&(M.specularIntensityMap.value=b.specularIntensityMap,i(b.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,b){b.matcap&&(M.matcap.value=b.matcap)}function w(M,b){const P=e.get(b).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function nA(l,e,i,s){let o={},c={},d=[];const m=l.getParameter(l.MAX_UNIFORM_BUFFER_BINDINGS);function g(N,F){const L=F.program;s.uniformBlockBinding(N,L)}function p(N,F){let L=o[N.id];L===void 0&&(M(N),L=_(N),o[N.id]=L,N.addEventListener("dispose",P));const I=F.program;s.updateUBOMapping(N,I);const T=e.render.frame;c[N.id]!==T&&(x(N),c[N.id]=T)}function _(N){const F=y();N.__bindingPointIndex=F;const L=l.createBuffer(),I=N.__size,T=N.usage;return l.bindBuffer(l.UNIFORM_BUFFER,L),l.bufferData(l.UNIFORM_BUFFER,I,T),l.bindBuffer(l.UNIFORM_BUFFER,null),l.bindBufferBase(l.UNIFORM_BUFFER,F,L),L}function y(){for(let N=0;N<m;N++)if(d.indexOf(N)===-1)return d.push(N),N;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const F=o[N.id],L=N.uniforms,I=N.__cache;l.bindBuffer(l.UNIFORM_BUFFER,F);for(let T=0,O=L.length;T<O;T++){const q=L[T];if(Array.isArray(q))for(let V=0,J=q.length;V<J;V++)S(q[V],T,V,I);else S(q,T,0,I)}l.bindBuffer(l.UNIFORM_BUFFER,null)}function S(N,F,L,I){if(w(N,F,L,I)===!0){const T=N.__offset,O=N.value;if(Array.isArray(O)){let q=0;for(let V=0;V<O.length;V++){const J=O[V],$=b(J);A(J,N.__data,q),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(O,N.__data,0);l.bufferSubData(l.UNIFORM_BUFFER,T,N.__data)}}function A(N,F,L){typeof N=="number"||typeof N=="boolean"?F[0]=N:N.isMatrix3?(F[0]=N.elements[0],F[1]=N.elements[1],F[2]=N.elements[2],F[3]=0,F[4]=N.elements[3],F[5]=N.elements[4],F[6]=N.elements[5],F[7]=0,F[8]=N.elements[6],F[9]=N.elements[7],F[10]=N.elements[8],F[11]=0):ArrayBuffer.isView(N)?F.set(new N.constructor(N.buffer,N.byteOffset,F.length)):N.toArray(F,L)}function w(N,F,L,I){const T=N.value,O=F+"_"+L;if(I[O]===void 0)return typeof T=="number"||typeof T=="boolean"?I[O]=T:ArrayBuffer.isView(T)?I[O]=T.slice():I[O]=T.clone(),!0;{const q=I[O];if(typeof T=="number"||typeof T=="boolean"){if(q!==T)return I[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(q.equals(T)===!1)return q.copy(T),!0}}return!1}function M(N){const F=N.uniforms;let L=0;const I=16;for(let O=0,q=F.length;O<q;O++){const V=Array.isArray(F[O])?F[O]:[F[O]];for(let J=0,$=V.length;J<$;J++){const fe=V[J],K=Array.isArray(fe.value)?fe.value:[fe.value];for(let B=0,G=K.length;B<G;B++){const ee=K[B],ge=b(ee),Ee=L%I,U=Ee%ge.boundary,Y=Ee+U;L+=U,Y!==0&&I-Y<ge.storage&&(L+=I-Y),fe.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=L,L+=ge.storage}}}const T=L%I;return T>0&&(L+=I-T),N.__size=L,N.__cache={},this}function b(N){const F={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(F.boundary=4,F.storage=4):N.isVector2?(F.boundary=8,F.storage=8):N.isVector3||N.isColor?(F.boundary=16,F.storage=12):N.isVector4?(F.boundary=16,F.storage=16):N.isMatrix3?(F.boundary=48,F.storage=48):N.isMatrix4?(F.boundary=64,F.storage=64):N.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(F.boundary=16,F.storage=N.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",N),F}function P(N){const F=N.target;F.removeEventListener("dispose",P);const L=d.indexOf(F.__bindingPointIndex);d.splice(L,1),l.deleteBuffer(o[F.id]),delete o[F.id],delete c[F.id]}function z(){for(const N in o)l.deleteBuffer(o[N]);d=[],o={},c={}}return{bind:g,update:p,dispose:z}}const iA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function aA(){return zi===null&&(zi=new qb(iA,16,16,Is,Sa),zi.name="DFG_LUT",zi.minFilter=On,zi.magFilter=On,zi.wrapS=_a,zi.wrapT=_a,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class sA{constructor(e={}){const{canvas:i=Eb(),context:s=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:m=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:x=!1,outputBufferType:S=_i}=e;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const w=S,M=new Set([Gh,Hh,zh]),b=new Set([_i,Wi,kl,jl,Bh,Fh]),P=new Uint32Array(4),z=new Int32Array(4),N=new ne;let F=null,L=null;const I=[],T=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let V=!1,J=null,$=null,fe=null,K=null;this._outputColorSpace=xi;let B=0,G=0,ee=null,ge=-1,Ee=null;const U=new rn,Y=new rn;let Me=null;const Ce=new Nt(0);let Ie=0,re=i.width,ye=i.height,Se=1,He=null,nt=null;const Ke=new rn(0,0,re,ye),Wt=new rn(0,0,re,ye);let ft=!1;const vt=new dv;let _t=!1,dt=!1;const $t=new ln,en=new ne,tn=new rn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function nn(){return ee===null?Se:1}let W=s;function zt(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:o,stencil:c,antialias:m,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ph}`),i.addEventListener("webglcontextlost",Zt,!1),i.addEventListener("webglcontextrestored",Ut,!1),i.addEventListener("webglcontextcreationerror",Zn,!1),W===null){const X="webgl2";if(W=zt(X,R),W===null)throw zt(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Mt("WebGLRenderer: "+R.message),R}let Ct,D,E,Q,le,he,Te,Ne,de,pe,Re,Fe,Le,De,Ze,Qe,it,j,Ae,xe,we,Be,be;function We(){Ct=new a1(W),Ct.init(),we=new ZT(W,Ct),D=new KE(W,Ct,e,we),E=new qT(W,Ct),D.reversedDepthBuffer&&x&&E.buffers.depth.setReversed(!0),$=W.createFramebuffer(),fe=W.createFramebuffer(),K=W.createFramebuffer(),Q=new l1(W),le=new LT,he=new YT(W,Ct,E,le,D,we,Q),Te=new i1(q),Ne=new fS(W),Be=new YE(W,Ne),de=new s1(W,Ne,Q,Be),pe=new c1(W,de,Ne,Be,Q),j=new o1(W,D,he),Ze=new QE(le),Re=new UT(q,Te,Ct,D,Be,Ze),Fe=new tA(q,le),Le=new PT,De=new GT(Ct),it=new qE(q,Te,E,pe,A,g),Qe=new WT(q,pe,D),be=new nA(W,Q,D,E),Ae=new ZE(W,Ct,Q),xe=new r1(W,Ct,Q),Q.programs=Re.programs,q.capabilities=D,q.extensions=Ct,q.properties=le,q.renderLists=Le,q.shadowMap=Qe,q.state=E,q.info=Q}We(),w!==_i&&(O=new f1(w,i.width,i.height,m,o,c));const Ve=new $T(q,W);this.xr=Ve,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=Ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(R){R!==void 0&&(Se=R,this.setSize(re,ye,!1))},this.getSize=function(R){return R.set(re,ye)},this.setSize=function(R,X,oe=!0){if(Ve.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}re=R,ye=X,i.width=Math.floor(R*Se),i.height=Math.floor(X*Se),oe===!0&&(i.style.width=R+"px",i.style.height=X+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(re*Se,ye*Se).floor()},this.setDrawingBufferSize=function(R,X,oe){re=R,ye=X,Se=oe,i.width=Math.floor(R*oe),i.height=Math.floor(X*oe),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(w===_i){Mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(Ke)},this.setViewport=function(R,X,oe,ae){R.isVector4?Ke.set(R.x,R.y,R.z,R.w):Ke.set(R,X,oe,ae),E.viewport(U.copy(Ke).multiplyScalar(Se).round())},this.getScissor=function(R){return R.copy(Wt)},this.setScissor=function(R,X,oe,ae){R.isVector4?Wt.set(R.x,R.y,R.z,R.w):Wt.set(R,X,oe,ae),E.scissor(Y.copy(Wt).multiplyScalar(Se).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(R){E.setScissorTest(ft=R)},this.setOpaqueSort=function(R){He=R},this.setTransparentSort=function(R){nt=R},this.getClearColor=function(R){return R.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,oe=!0){let ae=0;if(R){let se=!1;if(ee!==null){const Oe=ee.texture.format;se=M.has(Oe)}if(se){const Oe=ee.texture.type,Ge=b.has(Oe),Ue=it.getClearColor(),je=it.getClearAlpha(),ke=Ue.r,Je=Ue.g,lt=Ue.b;Ge?(P[0]=ke,P[1]=Je,P[2]=lt,P[3]=je,W.clearBufferuiv(W.COLOR,0,P)):(z[0]=ke,z[1]=Je,z[2]=lt,z[3]=je,W.clearBufferiv(W.COLOR,0,z))}else ae|=W.COLOR_BUFFER_BIT}X&&(ae|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ae|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&W.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),J=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Zt,!1),i.removeEventListener("webglcontextrestored",Ut,!1),i.removeEventListener("webglcontextcreationerror",Zn,!1),it.dispose(),Le.dispose(),De.dispose(),le.dispose(),Te.dispose(),pe.dispose(),Be.dispose(),be.dispose(),Re.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",fn),Ve.removeEventListener("sessionend",En),Fn.stop()};function Zt(R){R.preventDefault(),Z0("WebGLRenderer: Context Lost."),V=!0}function Ut(){Z0("WebGLRenderer: Context Restored."),V=!1;const R=Q.autoReset,X=Qe.enabled,oe=Qe.autoUpdate,ae=Qe.needsUpdate,se=Qe.type;We(),Q.autoReset=R,Qe.enabled=X,Qe.autoUpdate=oe,Qe.needsUpdate=ae,Qe.type=se}function Zn(R){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Kn(R){const X=R.target;X.removeEventListener("dispose",Kn),Hr(X)}function Hr(R){Gr(R),le.remove(R)}function Gr(R){const X=le.get(R).programs;X!==void 0&&(X.forEach(function(oe){Re.releaseProgram(oe)}),R.isShaderMaterial&&Re.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,oe,ae,se,Oe){X===null&&(X=on);const Ge=se.isMesh&&se.matrixWorld.determinantAffine()<0,Ue=Aa(R,X,oe,ae,se);E.setMaterial(ae,Ge);let je=oe.index,ke=1;if(ae.wireframe===!0){if(je=de.getWireframeAttribute(oe),je===void 0)return;ke=2}const Je=oe.drawRange,lt=oe.attributes.position;let Ye=Je.start*ke,Et=(Je.start+Je.count)*ke;Oe!==null&&(Ye=Math.max(Ye,Oe.start*ke),Et=Math.min(Et,(Oe.start+Oe.count)*ke)),je!==null?(Ye=Math.max(Ye,0),Et=Math.min(Et,je.count)):lt!=null&&(Ye=Math.max(Ye,0),Et=Math.min(Et,lt.count));const Kt=Et-Ye;if(Kt<0||Kt===1/0)return;Be.setup(se,ae,Ue,oe,je);let kt,Lt=Ae;if(je!==null&&(kt=Ne.get(je),Lt=xe,Lt.setIndex(kt)),se.isMesh)ae.wireframe===!0?(E.setLineWidth(ae.wireframeLinewidth*nn()),Lt.setMode(W.LINES)):Lt.setMode(W.TRIANGLES);else if(se.isLine){let Ot=ae.linewidth;Ot===void 0&&(Ot=1),E.setLineWidth(Ot*nn()),se.isLineSegments?Lt.setMode(W.LINES):se.isLineLoop?Lt.setMode(W.LINE_LOOP):Lt.setMode(W.LINE_STRIP)}else se.isPoints?Lt.setMode(W.POINTS):se.isSprite&&Lt.setMode(W.TRIANGLES);if(se.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Lt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const Ot=se._multiDrawStarts,ze=se._multiDrawCounts,Nn=se._multiDrawCount,ht=je?Ne.get(je).bytesPerElement:1,vn=le.get(ae).currentProgram.getUniforms();for(let Qn=0;Qn<Nn;Qn++)vn.setValue(W,"_gl_DrawID",Qn),Lt.render(Ot[Qn]/ht,ze[Qn])}else if(se.isInstancedMesh)Lt.renderInstances(Ye,Kt,se.count);else if(oe.isInstancedBufferGeometry){const Ot=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ze=Math.min(oe.instanceCount,Ot);Lt.renderInstances(Ye,Kt,ze)}else Lt.render(Ye,Kt)};function Vr(R,X,oe){R.transparent===!0&&R.side===va&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,Ta(R,X,oe),R.side=ss,R.needsUpdate=!0,Ta(R,X,oe),R.side=va):Ta(R,X,oe)}this.compile=function(R,X,oe=null){oe===null&&(oe=R),L=De.get(oe),L.init(X),T.push(L),oe.traverseVisible(function(se){se.isLight&&se.layers.test(X.layers)&&(L.pushLight(se),se.castShadow&&L.pushShadow(se))}),R!==oe&&R.traverseVisible(function(se){se.isLight&&se.layers.test(X.layers)&&(L.pushLight(se),se.castShadow&&L.pushShadow(se))}),L.setupLights();const ae=new Set;return R.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Oe=se.material;if(Oe)if(Array.isArray(Oe))for(let Ge=0;Ge<Oe.length;Ge++){const Ue=Oe[Ge];Vr(Ue,oe,se),ae.add(Ue)}else Vr(Oe,oe,se),ae.add(Oe)}),L=T.pop(),ae},this.compileAsync=function(R,X,oe=null){const ae=this.compile(R,X,oe);return new Promise(se=>{function Oe(){if(ae.forEach(function(Ge){le.get(Ge).currentProgram.isReady()&&ae.delete(Ge)}),ae.size===0){se(R);return}setTimeout(Oe,10)}Ct.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let zs=null;function Ui(R){zs&&zs(R)}function fn(){Fn.stop()}function En(){Fn.start()}const Fn=new _v;Fn.setAnimationLoop(Ui),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(R){zs=R,Ve.setAnimationLoop(R),R===null?Fn.stop():Fn.start()},Ve.addEventListener("sessionstart",fn),Ve.addEventListener("sessionend",En),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;J!==null&&J.renderStart(R,X);const oe=Ve.enabled===!0&&Ve.isPresenting===!0,ae=O!==null&&(ee===null||oe)&&O.begin(q,ee);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(X),X=Ve.getCamera()),R.isScene===!0&&R.onBeforeRender(q,R,X,ee),L=De.get(R,T.length),L.init(X),L.state.textureUnits=he.getTextureUnits(),T.push(L),$t.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),vt.setFromProjectionMatrix($t,Vi,X.reversedDepth),dt=this.localClippingEnabled,_t=Ze.init(this.clippingPlanes,dt),F=Le.get(R,I.length),F.init(),I.push(F),Ve.enabled===!0&&Ve.isPresenting===!0){const Ge=q.xr.getDepthSensingMesh();Ge!==null&&rs(Ge,X,-1/0,q.sortObjects)}rs(R,X,0,q.sortObjects),F.finish(),q.sortObjects===!0&&F.sort(He,nt,X.reversedDepth),Xt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Xt&&it.addToRenderList(F,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&Ze.beginShadows();const se=L.state.shadowsArray;if(Qe.render(se,R,X),_t===!0&&Ze.endShadows(),(ae&&O.hasRenderPass())===!1){const Ge=F.opaque,Ue=F.transmissive;if(L.setupLights(),X.isArrayCamera){const je=X.cameras;if(Ue.length>0)for(let ke=0,Je=je.length;ke<Je;ke++){const lt=je[ke];Kl(Ge,Ue,R,lt)}Xt&&it.render(R);for(let ke=0,Je=je.length;ke<Je;ke++){const lt=je[ke];Zl(F,R,lt,lt.viewport)}}else Ue.length>0&&Kl(Ge,Ue,R,X),Xt&&it.render(R),Zl(F,R,X)}ee!==null&&G===0&&(he.updateMultisampleRenderTarget(ee),he.updateRenderTargetMipmap(ee)),ae&&O.end(q),R.isScene===!0&&R.onAfterRender(q,R,X),Be.resetDefaultState(),ge=-1,Ee=null,T.pop(),T.length>0?(L=T[T.length-1],he.setTextureUnits(L.state.textureUnits),_t===!0&&Ze.setGlobalState(q.clippingPlanes,L.state.camera)):L=null,I.pop(),I.length>0?F=I[I.length-1]:F=null,J!==null&&J.renderEnd()};function rs(R,X,oe,ae){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLightProbeGrid)L.pushLightProbeGrid(R);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||vt.intersectsSprite(R)){ae&&tn.setFromMatrixPosition(R.matrixWorld).applyMatrix4($t);const Ge=pe.update(R),Ue=R.material;Ue.visible&&F.push(R,Ge,Ue,oe,tn.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||vt.intersectsObject(R))){const Ge=pe.update(R),Ue=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),tn.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),tn.copy(Ge.boundingSphere.center)),tn.applyMatrix4(R.matrixWorld).applyMatrix4($t)),Array.isArray(Ue)){const je=Ge.groups;for(let ke=0,Je=je.length;ke<Je;ke++){const lt=je[ke],Ye=Ue[lt.materialIndex];Ye&&Ye.visible&&F.push(R,Ge,Ye,oe,tn.z,lt)}}else Ue.visible&&F.push(R,Ge,Ue,oe,tn.z,null)}}const Oe=R.children;for(let Ge=0,Ue=Oe.length;Ge<Ue;Ge++)rs(Oe[Ge],X,oe,ae)}function Zl(R,X,oe,ae){const{opaque:se,transmissive:Oe,transparent:Ge}=R;L.setupLightsView(oe),_t===!0&&Ze.setGlobalState(q.clippingPlanes,oe),ae&&E.viewport(U.copy(ae)),se.length>0&&ls(se,X,oe),Oe.length>0&&ls(Oe,X,oe),Ge.length>0&&ls(Ge,X,oe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Kl(R,X,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ae.id]===void 0){const Ye=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ae.id]=new ji(1,1,{generateMipmaps:!0,type:Ye?Sa:_i,minFilter:Ls,samples:Math.max(4,D.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Oe=L.state.transmissionRenderTarget[ae.id],Ge=ae.viewport||U;Oe.setSize(Ge.z*q.transmissionResolutionScale,Ge.w*q.transmissionResolutionScale);const Ue=q.getRenderTarget(),je=q.getActiveCubeFace(),ke=q.getActiveMipmapLevel();q.setRenderTarget(Oe),q.getClearColor(Ce),Ie=q.getClearAlpha(),Ie<1&&q.setClearColor(16777215,.5),q.clear(),Xt&&it.render(oe);const Je=q.toneMapping;q.toneMapping=ki;const lt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),L.setupLightsView(ae),_t===!0&&Ze.setGlobalState(q.clippingPlanes,ae),ls(R,oe,ae),he.updateMultisampleRenderTarget(Oe),he.updateRenderTargetMipmap(Oe),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Et=0,Kt=X.length;Et<Kt;Et++){const kt=X[Et],{object:Lt,geometry:Ot,material:ze,group:Nn}=kt;if(ze.side===va&&Lt.layers.test(ae.layers)){const ht=ze.side;ze.side=Wn,ze.needsUpdate=!0,Ea(Lt,oe,ae,Ot,ze,Nn),ze.side=ht,ze.needsUpdate=!0,Ye=!0}}Ye===!0&&(he.updateMultisampleRenderTarget(Oe),he.updateRenderTargetMipmap(Oe))}q.setRenderTarget(Ue,je,ke),q.setClearColor(Ce,Ie),lt!==void 0&&(ae.viewport=lt),q.toneMapping=Je}function ls(R,X,oe){const ae=X.isScene===!0?X.overrideMaterial:null;for(let se=0,Oe=R.length;se<Oe;se++){const Ge=R[se],{object:Ue,geometry:je,group:ke}=Ge;let Je=Ge.material;Je.allowOverride===!0&&ae!==null&&(Je=ae),Ue.layers.test(oe.layers)&&Ea(Ue,X,oe,je,Je,ke)}}function Ea(R,X,oe,ae,se,Oe){R.onBeforeRender(q,X,oe,ae,se,Oe),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),se.onBeforeRender(q,X,oe,ae,R,Oe),se.transparent===!0&&se.side===va&&se.forceSinglePass===!1?(se.side=Wn,se.needsUpdate=!0,q.renderBufferDirect(oe,X,ae,se,R,Oe),se.side=ss,se.needsUpdate=!0,q.renderBufferDirect(oe,X,ae,se,R,Oe),se.side=va):q.renderBufferDirect(oe,X,ae,se,R,Oe),R.onAfterRender(q,X,oe,ae,se,Oe)}function Ta(R,X,oe){X.isScene!==!0&&(X=on);const ae=le.get(R),se=L.state.lights,Oe=L.state.shadowsArray,Ge=se.state.version,Ue=Re.getParameters(R,se.state,Oe,X,oe,L.state.lightProbeGridArray),je=Re.getProgramCacheKey(Ue);let ke=ae.programs;ae.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,ae.fog=X.fog;const Je=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ae.envMap=Te.get(R.envMap||ae.environment,Je),ae.envMapRotation=ae.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,ke===void 0&&(R.addEventListener("dispose",Kn),ke=new Map,ae.programs=ke);let lt=ke.get(je);if(lt!==void 0){if(ae.currentProgram===lt&&ae.lightsStateVersion===Ge)return Zi(R,Ue),lt}else Ue.uniforms=Re.getUniforms(R),J!==null&&R.isNodeMaterial&&J.build(R,oe,Ue),R.onBeforeCompile(Ue,q),lt=Re.acquireProgram(Ue,je),ke.set(je,lt),ae.uniforms=Ue.uniforms;const Ye=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Ze.uniform),Zi(R,Ue),ae.needsLights=Ql(R),ae.lightsStateVersion=Ge,ae.needsLights&&(Ye.ambientLightColor.value=se.state.ambient,Ye.lightProbe.value=se.state.probe,Ye.directionalLights.value=se.state.directional,Ye.directionalLightShadows.value=se.state.directionalShadow,Ye.spotLights.value=se.state.spot,Ye.spotLightShadows.value=se.state.spotShadow,Ye.rectAreaLights.value=se.state.rectArea,Ye.ltc_1.value=se.state.rectAreaLTC1,Ye.ltc_2.value=se.state.rectAreaLTC2,Ye.pointLights.value=se.state.point,Ye.pointLightShadows.value=se.state.pointShadow,Ye.hemisphereLights.value=se.state.hemi,Ye.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ye.spotLightMatrix.value=se.state.spotLightMatrix,Ye.spotLightMap.value=se.state.spotLightMap,Ye.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.lightProbeGrid=L.state.lightProbeGridArray.length>0,ae.currentProgram=lt,ae.uniformsList=null,lt}function Yi(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Ic.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Zi(R,X){const oe=le.get(R);oe.outputColorSpace=X.outputColorSpace,oe.batching=X.batching,oe.batchingColor=X.batchingColor,oe.instancing=X.instancing,oe.instancingColor=X.instancingColor,oe.instancingMorph=X.instancingMorph,oe.skinning=X.skinning,oe.morphTargets=X.morphTargets,oe.morphNormals=X.morphNormals,oe.morphColors=X.morphColors,oe.morphTargetsCount=X.morphTargetsCount,oe.numClippingPlanes=X.numClippingPlanes,oe.numIntersection=X.numClipIntersection,oe.vertexAlphas=X.vertexAlphas,oe.vertexTangents=X.vertexTangents,oe.toneMapping=X.toneMapping}function os(R,X){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;N.setFromMatrixPosition(X.matrixWorld);for(let oe=0,ae=R.length;oe<ae;oe++){const se=R[oe];if(se.texture!==null&&se.boundingBox.containsPoint(N))return se}return null}function Aa(R,X,oe,ae,se){X.isScene!==!0&&(X=on),he.resetTextureUnits();const Oe=X.fog,Ge=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?X.environment:null,Ue=ee===null?q.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:bt.workingColorSpace,je=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,ke=Te.get(ae.envMap||Ge,je),Je=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,lt=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ye=!!oe.morphAttributes.position,Et=!!oe.morphAttributes.normal,Kt=!!oe.morphAttributes.color;let kt=ki;ae.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(kt=q.toneMapping);const Lt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ot=Lt!==void 0?Lt.length:0,ze=le.get(ae),Nn=L.state.lights;if(_t===!0&&(dt===!0||R!==Ee)){const Dt=R===Ee&&ae.id===ge;Ze.setState(ae,R,Dt)}let ht=!1;ae.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Nn.state.version||ze.outputColorSpace!==Ue||se.isBatchedMesh&&ze.batching===!1||!se.isBatchedMesh&&ze.batching===!0||se.isBatchedMesh&&ze.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&ze.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&ze.instancing===!1||!se.isInstancedMesh&&ze.instancing===!0||se.isSkinnedMesh&&ze.skinning===!1||!se.isSkinnedMesh&&ze.skinning===!0||se.isInstancedMesh&&ze.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&ze.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&ze.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&ze.instancingMorph===!1&&se.morphTexture!==null||ze.envMap!==ke||ae.fog===!0&&ze.fog!==Oe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ze.numPlanes||ze.numIntersection!==Ze.numIntersection)||ze.vertexAlphas!==Je||ze.vertexTangents!==lt||ze.morphTargets!==Ye||ze.morphNormals!==Et||ze.morphColors!==Kt||ze.toneMapping!==kt||ze.morphTargetsCount!==Ot||!!ze.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,ze.__version=ae.version);let vn=ze.currentProgram;ht===!0&&(vn=Ta(ae,X,se),J&&ae.isNodeMaterial&&J.onUpdateProgram(ae,vn,ze));let Qn=!1,bi=!1,Jn=!1;const Pt=vn.getUniforms(),Qt=ze.uniforms;if(E.useProgram(vn.program)&&(Qn=!0,bi=!0,Jn=!0),ae.id!==ge&&(ge=ae.id,bi=!0),ze.needsLights){const Dt=os(L.state.lightProbeGridArray,se);ze.lightProbeGrid!==Dt&&(ze.lightProbeGrid=Dt,bi=!0)}if(Qn||Ee!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Pt.setValue(W,"projectionMatrix",R.projectionMatrix),Pt.setValue(W,"viewMatrix",R.matrixWorldInverse);const Li=Pt.map.cameraPosition;Li!==void 0&&Li.setValue(W,en.setFromMatrixPosition(R.matrixWorld)),D.logarithmicDepthBuffer&&Pt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Pt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),Ee!==R&&(Ee=R,bi=!0,Jn=!0)}if(ze.needsLights&&(Nn.state.directionalShadowMap.length>0&&Pt.setValue(W,"directionalShadowMap",Nn.state.directionalShadowMap,he),Nn.state.spotShadowMap.length>0&&Pt.setValue(W,"spotShadowMap",Nn.state.spotShadowMap,he),Nn.state.pointShadowMap.length>0&&Pt.setValue(W,"pointShadowMap",Nn.state.pointShadowMap,he)),se.isSkinnedMesh){Pt.setOptional(W,se,"bindMatrix"),Pt.setOptional(W,se,"bindMatrixInverse");const Dt=se.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Pt.setValue(W,"boneTexture",Dt.boneTexture,he))}se.isBatchedMesh&&(Pt.setOptional(W,se,"batchingTexture"),Pt.setValue(W,"batchingTexture",se._matricesTexture,he),Pt.setOptional(W,se,"batchingIdTexture"),Pt.setValue(W,"batchingIdTexture",se._indirectTexture,he),Pt.setOptional(W,se,"batchingColorTexture"),se._colorsTexture!==null&&Pt.setValue(W,"batchingColorTexture",se._colorsTexture,he));const Si=oe.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&j.update(se,oe,vn),(bi||ze.receiveShadow!==se.receiveShadow)&&(ze.receiveShadow=se.receiveShadow,Pt.setValue(W,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&X.environment!==null&&(Qt.envMapIntensity.value=X.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=aA()),bi){if(Pt.setValue(W,"toneMappingExposure",q.toneMappingExposure),ze.needsLights&&dn(Qt,Jn),Oe&&ae.fog===!0&&Fe.refreshFogUniforms(Qt,Oe),Fe.refreshMaterialUniforms(Qt,ae,Se,ye,L.state.transmissionRenderTarget[R.id]),ze.needsLights&&ze.lightProbeGrid){const Dt=ze.lightProbeGrid;Qt.probesSH.value=Dt.texture,Qt.probesMin.value.copy(Dt.boundingBox.min),Qt.probesMax.value.copy(Dt.boundingBox.max),Qt.probesResolution.value.copy(Dt.resolution)}Ic.upload(W,Yi(ze),Qt,he)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Ic.upload(W,Yi(ze),Qt,he),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Pt.setValue(W,"center",se.center),Pt.setValue(W,"modelViewMatrix",se.modelViewMatrix),Pt.setValue(W,"normalMatrix",se.normalMatrix),Pt.setValue(W,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const Dt=ae.uniformsGroups;for(let Li=0,Ra=Dt.length;Li<Ra;Li++){const cs=Dt[Li];be.update(cs,vn),be.bind(cs,vn)}}return vn}function dn(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Ql(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(R,X,oe){const ae=le.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),le.get(R.texture).__webglTexture=X,le.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const oe=le.get(R);oe.__webglFramebuffer=X,oe.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,oe=0){ee=R,B=X,G=oe;let ae=null,se=!1,Oe=!1;if(R){const Ue=le.get(R);if(Ue.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(W.FRAMEBUFFER,Ue.__webglFramebuffer),U.copy(R.viewport),Y.copy(R.scissor),Me=R.scissorTest,E.viewport(U),E.scissor(Y),E.setScissorTest(Me),ge=-1;return}else if(Ue.__webglFramebuffer===void 0)he.setupRenderTarget(R);else if(Ue.__hasExternalTextures)he.rebindTextures(R,le.get(R.texture).__webglTexture,le.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Ue.__boundDepthTexture!==Je){if(Je!==null&&le.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(R)}}const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Oe=!0);const ke=le.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[X])?ae=ke[X][oe]:ae=ke[X],se=!0):R.samples>0&&he.useMultisampledRTT(R)===!1?ae=le.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?ae=ke[oe]:ae=ke,U.copy(R.viewport),Y.copy(R.scissor),Me=R.scissorTest}else U.copy(Ke).multiplyScalar(Se).floor(),Y.copy(Wt).multiplyScalar(Se).floor(),Me=ft;if(oe!==0&&(ae=$),E.bindFramebuffer(W.FRAMEBUFFER,ae)&&E.drawBuffers(R,ae),E.viewport(U),E.scissor(Y),E.setScissorTest(Me),se){const Ue=le.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ue.__webglTexture,oe)}else if(Oe){const Ue=X;for(let je=0;je<R.textures.length;je++){const ke=le.get(R.textures[je]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+je,ke.__webglTexture,oe,Ue)}}else if(R!==null&&oe!==0){const Ue=le.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ue.__webglTexture,oe)}ge=-1},this.readRenderTargetPixels=function(R,X,oe,ae,se,Oe,Ge,Ue=0){if(!(R&&R.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=le.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(je=je[Ge]),je){E.bindFramebuffer(W.FRAMEBUFFER,je);try{const ke=R.textures[Ue],Je=ke.format,lt=ke.type;if(R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ue),!D.textureFormatReadable(Je)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(lt)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ae&&oe>=0&&oe<=R.height-se&&W.readPixels(X,oe,ae,se,we.convert(Je),we.convert(lt),Oe)}finally{const ke=ee!==null?le.get(ee).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(R,X,oe,ae,se,Oe,Ge,Ue=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=le.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(je=je[Ge]),je)if(X>=0&&X<=R.width-ae&&oe>=0&&oe<=R.height-se){E.bindFramebuffer(W.FRAMEBUFFER,je);const ke=R.textures[Ue],Je=ke.format,lt=ke.type;if(R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ue),!D.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ye),W.bufferData(W.PIXEL_PACK_BUFFER,Oe.byteLength,W.STREAM_READ),W.readPixels(X,oe,ae,se,we.convert(Je),we.convert(lt),0);const Et=ee!==null?le.get(ee).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,Et);const Kt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Tb(W,Kt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ye),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Oe),W.deleteBuffer(Ye),W.deleteSync(Kt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,oe=0){const ae=Math.pow(2,-oe),se=Math.floor(R.image.width*ae),Oe=Math.floor(R.image.height*ae),Ge=X!==null?X.x:0,Ue=X!==null?X.y:0;he.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,oe,0,0,Ge,Ue,se,Oe),E.unbindTexture()},this.copyTextureToTexture=function(R,X,oe=null,ae=null,se=0,Oe=0){let Ge,Ue,je,ke,Je,lt,Ye,Et,Kt;const kt=R.isCompressedTexture?R.mipmaps[Oe]:R.image;if(oe!==null)Ge=oe.max.x-oe.min.x,Ue=oe.max.y-oe.min.y,je=oe.isBox3?oe.max.z-oe.min.z:1,ke=oe.min.x,Je=oe.min.y,lt=oe.isBox3?oe.min.z:0;else{const Qt=Math.pow(2,-se);Ge=Math.floor(kt.width*Qt),Ue=Math.floor(kt.height*Qt),R.isDataArrayTexture?je=kt.depth:R.isData3DTexture?je=Math.floor(kt.depth*Qt):je=1,ke=0,Je=0,lt=0}ae!==null?(Ye=ae.x,Et=ae.y,Kt=ae.z):(Ye=0,Et=0,Kt=0);const Lt=we.convert(X.format),Ot=we.convert(X.type);let ze;X.isData3DTexture?(he.setTexture3D(X,0),ze=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(he.setTexture2DArray(X,0),ze=W.TEXTURE_2D_ARRAY):(he.setTexture2D(X,0),ze=W.TEXTURE_2D),E.activeTexture(W.TEXTURE0),E.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),E.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),E.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);const Nn=E.getParameter(W.UNPACK_ROW_LENGTH),ht=E.getParameter(W.UNPACK_IMAGE_HEIGHT),vn=E.getParameter(W.UNPACK_SKIP_PIXELS),Qn=E.getParameter(W.UNPACK_SKIP_ROWS),bi=E.getParameter(W.UNPACK_SKIP_IMAGES);E.pixelStorei(W.UNPACK_ROW_LENGTH,kt.width),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,kt.height),E.pixelStorei(W.UNPACK_SKIP_PIXELS,ke),E.pixelStorei(W.UNPACK_SKIP_ROWS,Je),E.pixelStorei(W.UNPACK_SKIP_IMAGES,lt);const Jn=R.isDataArrayTexture||R.isData3DTexture,Pt=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const Qt=le.get(R),Si=le.get(X),Dt=le.get(Qt.__renderTarget),Li=le.get(Si.__renderTarget);E.bindFramebuffer(W.READ_FRAMEBUFFER,Dt.__webglFramebuffer),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Ra=0;Ra<je;Ra++)Jn&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,le.get(R).__webglTexture,se,lt+Ra),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,le.get(X).__webglTexture,Oe,Kt+Ra)),W.blitFramebuffer(ke,Je,Ge,Ue,Ye,Et,Ge,Ue,W.DEPTH_BUFFER_BIT,W.NEAREST);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(se!==0||R.isRenderTargetTexture||le.has(R)){const Qt=le.get(R),Si=le.get(X);E.bindFramebuffer(W.READ_FRAMEBUFFER,fe),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,K);for(let Dt=0;Dt<je;Dt++)Jn?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Qt.__webglTexture,se,lt+Dt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Qt.__webglTexture,se),Pt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Si.__webglTexture,Oe,Kt+Dt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Si.__webglTexture,Oe),se!==0?W.blitFramebuffer(ke,Je,Ge,Ue,Ye,Et,Ge,Ue,W.COLOR_BUFFER_BIT,W.NEAREST):Pt?W.copyTexSubImage3D(ze,Oe,Ye,Et,Kt+Dt,ke,Je,Ge,Ue):W.copyTexSubImage2D(ze,Oe,Ye,Et,ke,Je,Ge,Ue);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Pt?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(ze,Oe,Ye,Et,Kt,Ge,Ue,je,Lt,Ot,kt.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(ze,Oe,Ye,Et,Kt,Ge,Ue,je,Lt,kt.data):W.texSubImage3D(ze,Oe,Ye,Et,Kt,Ge,Ue,je,Lt,Ot,kt):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Oe,Ye,Et,Ge,Ue,Lt,Ot,kt.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Oe,Ye,Et,kt.width,kt.height,Lt,kt.data):W.texSubImage2D(W.TEXTURE_2D,Oe,Ye,Et,Ge,Ue,Lt,Ot,kt);E.pixelStorei(W.UNPACK_ROW_LENGTH,Nn),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ht),E.pixelStorei(W.UNPACK_SKIP_PIXELS,vn),E.pixelStorei(W.UNPACK_SKIP_ROWS,Qn),E.pixelStorei(W.UNPACK_SKIP_IMAGES,bi),Oe===0&&X.generateMipmaps&&W.generateMipmap(ze),E.unbindTexture()},this.initRenderTarget=function(R){le.get(R).__webglFramebuffer===void 0&&he.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?he.setTextureCube(R,0):R.isData3DTexture?he.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?he.setTexture2DArray(R,0):he.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){B=0,G=0,ee=null,E.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),i.unpackColorSpace=bt._getUnpackColorSpace()}}const rA=({nodes:l,selectedNodeId:e,onSelectNode:i,confidenceThreshold:s,activeFilters:o})=>{const c=at.useRef(null);return at.useEffect(()=>{const d=c.current;if(!d)return;const m=d.clientWidth||window.innerWidth,g=d.clientHeight||window.innerHeight,p=new Gb,_=new vi(60,m/g,.1,1e3);_.position.set(0,0,10);const y=new sA({alpha:!0,antialias:!0});y.setSize(m,g),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.innerHTML="",d.appendChild(y.domElement);const x=l.filter($=>!($.confidence<s||$.type==="suspect"&&!o.suspects||$.type==="device"&&!o.devices||$.type==="vehicle"&&!o.vehicles||$.type==="address"&&!o.addresses||$.type==="financial"&&!o.financial)),S=new Gl;p.add(S);const A=[],w=x.map($=>new ne(...$.pos));for(let $=0;$<w.length;$++)for(let fe=$+1;fe<w.length;fe++)w[$].distanceTo(w[fe])<4.2&&A.push(w[$],w[fe]);if(A.length>0){const $=new yi().setFromPoints(A),fe=new hv({color:3900150,transparent:!0,opacity:.35}),K=new Jb($,fe);S.add(K)}const M=$=>{switch($){case"suspect":return 16733265;case"device":return 5036022;case"vehicle":return 16757677;case"address":return 11388671;case"financial":return 3290425;default:return 6333946}},b=new Map;x.forEach($=>{const fe=$.id===e,K=fe?.22:$.type==="suspect"?.16:.11,B=new Wc(K,16,16),G=M($.type),ee=new kc({color:fe?11333119:G,wireframe:fe}),ge=new Di(B,ee);if(ge.position.set($.pos[0],$.pos[1],$.pos[2]),ge.userData={node:$},S.add(ge),b.set($.id,ge),$.status.includes("PRIMARY")||fe){const Ee=new Wc(K*1.8,12,12),U=new kc({color:5036022,transparent:!0,opacity:.25,wireframe:!0}),Y=new Di(Ee,U);Y.position.set($.pos[0],$.pos[1],$.pos[2]),S.add(Y)}});const P=new cS,z=new Rt,N=$=>{const fe=d.getBoundingClientRect();z.x=($.clientX-fe.left)/fe.width*2-1,z.y=-(($.clientY-fe.top)/fe.height)*2+1,P.setFromCamera(z,_);const K=P.intersectObjects(S.children);if(K.length>0){const B=K[0].object;B.userData&&B.userData.node&&i(B.userData.node)}};d.addEventListener("pointerdown",N);let F=!1,L={x:0,y:0};const I=$=>{F=!0,L={x:$.clientX,y:$.clientY}},T=$=>{if(!F)return;const fe={x:$.clientX-L.x,y:$.clientY-L.y};S.rotation.y+=fe.x*.005,S.rotation.x+=fe.y*.005,L={x:$.clientX,y:$.clientY}},O=()=>{F=!1};d.addEventListener("mousedown",I),window.addEventListener("mousemove",T),window.addEventListener("mouseup",O);let q;const V=()=>{q=requestAnimationFrame(V),F||(S.rotation.y+=.0015),y.render(p,_)};V();const J=()=>{const $=d.clientWidth||window.innerWidth,fe=d.clientHeight||window.innerHeight;_.aspect=$/fe,_.updateProjectionMatrix(),y.setSize($,fe)};return window.addEventListener("resize",J),()=>{cancelAnimationFrame(q),d.removeEventListener("pointerdown",N),d.removeEventListener("mousedown",I),window.removeEventListener("mousemove",T),window.removeEventListener("mouseup",O),window.removeEventListener("resize",J),y.dispose()}},[l,e,s,o,i]),h.jsx("div",{ref:c,className:"w-full h-full cursor-grab active:cursor-grabbing"})},lA=()=>{var x;const[l,e]=at.useState(50),[i,s]=at.useState({suspects:!0,devices:!0,vehicles:!0,addresses:!0,financial:!0}),[o]=at.useState([{id:"NODE-8829",label:'K. Ramesh ("Viper")',type:"suspect",confidence:94,alias:"Viper",realName:"K. Ramesh",status:"PRIMARY TARGET",connectionsCount:12,details:{lastActivity:"VoIP Ping - Koramangala",recentAction:"Encrypted transfer 14:20Z"},pos:[0,0,0]},{id:"NODE-9402",label:"S. Patil",type:"suspect",confidence:88,alias:"Patil",status:"ASSOCIATE",connectionsCount:6,pos:[2.5,1.2,-1]},{id:"NODE-[#8821]",label:"IMEI-88219381",type:"device",confidence:96,status:"ACTIVE SIM",connectionsCount:4,pos:[-2.1,2,1.5]},{id:"NODE-KA01-992",label:"KA-01-MJ-8821",type:"vehicle",confidence:78,status:"BLR CCTV MATCH",connectionsCount:3,pos:[1.8,-2.2,.8]},{id:"NODE-ADDR-44",label:"Flat 402, Indiranagar",type:"address",confidence:82,status:"SAFEHOUSE",connectionsCount:5,pos:[-3,-1.5,-2]},{id:"NODE-ACC-99",label:"A/C 88201-X",type:"financial",confidence:65,status:"CYBER WALLET",connectionsCount:8,pos:[.5,3.2,-2.5]}]),[c,d]=at.useState(o[0]),[m,g]=at.useState(!1),[p,_]=at.useState(75),y=S=>{s(A=>({...A,[S]:!A[S]}))};return h.jsxs("div",{className:"relative w-full h-[calc(100vh-64px)] mt-16 overflow-hidden bg-[#090b0e]",children:[h.jsx("div",{className:"absolute inset-0 w-full h-full z-0",children:h.jsx(rA,{nodes:o,selectedNodeId:c.id,onSelectNode:d,confidenceThreshold:l,activeFilters:i})}),h.jsxs("div",{className:"absolute left-4 md:left-6 top-6 z-20 w-80 glass-panel rounded-xl p-5 border border-white/10 shadow-2xl flex flex-col gap-5 max-h-[calc(100vh-160px)] overflow-y-auto",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("span",{className:"font-label-caps text-[10px] text-secondary font-bold uppercase tracking-widest",children:"OPERATION GRIDLOCK"}),h.jsx("span",{className:"bg-error/20 text-error border border-error/30 text-[9px] font-data-mono px-1.5 py-0.5 rounded font-bold",children:"HIGH RISK"})]}),h.jsx("h2",{className:"font-headline-md text-lg text-on-surface font-bold",children:"Target Network Graph"}),h.jsx("p",{className:"font-data-mono text-xs text-outline mt-0.5",children:"Nodes Active: 3,492 | Depth Lvl: 3"})]}),h.jsxs("div",{className:"space-y-2 border-t border-white/10 pt-4",children:[h.jsx("span",{className:"font-label-caps text-xs text-outline font-semibold uppercase tracking-wider block mb-2",children:"Entity Filters"}),h.jsxs("label",{className:"flex items-center justify-between text-xs font-body-md text-on-surface cursor-pointer",children:[h.jsxs("span",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-error"}),h.jsx("span",{children:"Known Suspects"})]}),h.jsx("input",{type:"checkbox",checked:i.suspects,onChange:()=>y("suspects"),className:"rounded bg-black/60 border-white/20 text-secondary focus:ring-0"})]}),h.jsxs("label",{className:"flex items-center justify-between text-xs font-body-md text-on-surface cursor-pointer",children:[h.jsxs("span",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-secondary"}),h.jsx("span",{children:"Mobile Devices"})]}),h.jsx("input",{type:"checkbox",checked:i.devices,onChange:()=>y("devices"),className:"rounded bg-black/60 border-white/20 text-secondary focus:ring-0"})]}),h.jsxs("label",{className:"flex items-center justify-between text-xs font-body-md text-on-surface cursor-pointer",children:[h.jsxs("span",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[rgba(255,179,173,1)]"}),h.jsx("span",{children:"Vehicles"})]}),h.jsx("input",{type:"checkbox",checked:i.vehicles,onChange:()=>y("vehicles"),className:"rounded bg-black/60 border-white/20 text-secondary focus:ring-0"})]}),h.jsxs("label",{className:"flex items-center justify-between text-xs font-body-md text-on-surface cursor-pointer",children:[h.jsxs("span",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[rgba(173,198,255,1)]"}),h.jsx("span",{children:"Addresses"})]}),h.jsx("input",{type:"checkbox",checked:i.addresses,onChange:()=>y("addresses"),className:"rounded bg-black/60 border-white/20 text-secondary focus:ring-0"})]}),h.jsxs("label",{className:"flex items-center justify-between text-xs font-body-md text-on-surface cursor-pointer",children:[h.jsxs("span",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[rgba(100,100,100,1)]"}),h.jsx("span",{children:"Financial Acc."})]}),h.jsx("input",{type:"checkbox",checked:i.financial,onChange:()=>y("financial"),className:"rounded bg-black/60 border-white/20 text-secondary focus:ring-0"})]})]}),h.jsxs("div",{className:"border-t border-white/10 pt-4",children:[h.jsxs("div",{className:"flex justify-between items-center mb-1",children:[h.jsx("span",{className:"font-label-caps text-xs text-outline font-semibold uppercase tracking-wider",children:"Confidence Threshold"}),h.jsxs("span",{className:"font-data-mono text-xs text-secondary font-bold",children:[l,"%"]})]}),h.jsx("input",{type:"range",min:"0",max:"100",value:l,onChange:S=>e(Number(S.target.value)),className:"w-full accent-secondary cursor-pointer"})]})]}),c&&h.jsxs("div",{className:"absolute right-4 md:right-6 top-6 z-20 w-80 md:w-96 glass-panel rounded-xl p-5 border border-white/10 shadow-2xl flex flex-col gap-4",children:[h.jsxs("div",{className:"flex justify-between items-start border-b border-white/10 pb-3",children:[h.jsxs("div",{children:[h.jsx("span",{className:"bg-error/20 text-error text-[10px] font-data-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider",children:c.status}),h.jsx("h3",{className:"font-headline-md text-xl font-bold text-on-surface mt-1",children:c.label}),h.jsxs("p",{className:"font-data-mono text-xs text-outline",children:["ID: ",c.id]})]}),h.jsxs("div",{className:"bg-black/50 p-2.5 rounded-lg border border-white/10 text-center",children:[h.jsxs("span",{className:"font-data-mono text-lg font-bold text-secondary block",children:[c.confidence,"%"]}),h.jsx("span",{className:"font-label-caps text-[9px] text-outline uppercase block",children:"Match"})]})]}),h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{className:"bg-black/40 p-3 rounded-lg border border-white/5 space-y-2",children:[h.jsxs("div",{className:"flex justify-between text-xs",children:[h.jsx("span",{className:"text-outline font-label-caps",children:"Direct Connections"}),h.jsxs("span",{className:"font-data-mono text-on-surface font-semibold",children:[c.connectionsCount," Nodes"]})]}),h.jsxs("div",{className:"flex justify-between text-xs",children:[h.jsx("span",{className:"text-outline font-label-caps",children:"Entity Type"}),h.jsx("span",{className:"font-data-mono text-secondary uppercase font-semibold",children:c.type})]}),((x=c.details)==null?void 0:x.lastActivity)&&h.jsxs("div",{className:"flex justify-between text-xs",children:[h.jsx("span",{className:"text-outline font-label-caps",children:"Last Signal"}),h.jsx("span",{className:"font-data-mono text-on-surface truncate max-w-[150px]",children:c.details.lastActivity})]})]}),h.jsxs("button",{onClick:()=>alert(`Extracting full dossier for ${c.label} (Node ${c.id})`),className:"w-full py-2.5 bg-primary/20 border border-primary/50 text-primary font-label-caps text-xs font-bold rounded-lg hover:bg-primary/30 transition-all shadow-[0_0_12px_rgba(173,198,255,0.2)] flex items-center justify-center gap-2 cursor-pointer",children:[h.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"file_present"}),h.jsx("span",{children:"EXTRACT DOSSIER"})]})]})]}),h.jsxs("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-3xl glass-panel rounded-xl p-4 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center gap-4",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{onClick:()=>g(!m),className:"w-9 h-9 rounded-lg bg-secondary/20 border border-secondary/50 text-secondary hover:bg-secondary/30 transition-colors flex items-center justify-center cursor-pointer",children:h.jsx("span",{className:"material-symbols-outlined text-lg",children:m?"pause":"play_arrow"})}),h.jsx("button",{onClick:()=>_(100),className:"p-2 text-outline hover:text-on-surface transition-colors",children:h.jsx("span",{className:"material-symbols-outlined text-lg",children:"fast_forward"})})]}),h.jsxs("div",{className:"flex-1 w-full space-y-1",children:[h.jsxs("div",{className:"flex justify-between text-[10px] font-data-mono text-outline",children:[h.jsx("span",{children:"T-72h"}),h.jsx("span",{children:"T-48h"}),h.jsx("span",{children:"T-24h"}),h.jsx("span",{className:"text-secondary font-bold",children:"REAL-TIME (2023-10-27 14:32Z)"})]}),h.jsx("input",{type:"range",min:"0",max:"100",value:p,onChange:S=>_(Number(S.target.value)),className:"w-full accent-secondary cursor-pointer"})]})]})]})},oA=()=>{const[l,e]=at.useState(""),[i,s]=at.useState(""),[o,c]=at.useState(""),[d,m]=at.useState("All"),[g,p]=at.useState("All"),[_]=at.useState([{id:"BLR-24-991A",subject:'Unknown ("Viper")',alias:"Viper",category:"Cyber",date:"2023-10-24",status:"Critical",district:"Bengaluru Urban",summary:"Target entity orchestrated phishing breach targeting financial nodes in Sector 4.",custodyChain:[{step:1,title:"Evidence Seized (Smartphone)",logger:"OFC-7729",time:"2023-10-24 10:15Z"},{step:2,title:"Forensic Hash Indexing",logger:"CYBER-LAB-01",time:"2023-10-24 12:40Z"}],evidenceImages:[{id:"EV-01",label:"Seized Mobile Terminal",url:"https://lh3.googleusercontent.com/aida-public/AB6AXuB9VVrxMxBs6rSdKs-bfNrZ5ORuVPEfL353gCRGyU7M3sbGJf10tKUifIYYXSiZw6_Jd8gYWtPlq-j1DoQaEfbk1m5h6GTqZsQ57SZhC-mP4EyUW8uYw7e-BR6hZWG-T2yl2pIEgIInBGBo924BFvO5sda_6RWPkvApHSPXlrx-cvADvPBmg2gsFHwSugngo15gnGfDy0U2KqEJSLXCSk9_GWG5hvneAkauQ3z0Z2DOCZlM9SDuk7V7vw"},{id:"EV-02",label:"Physical Samples",url:"https://lh3.googleusercontent.com/aida-public/AB6AXuBKsj-oPH47jqJZhTtKwy-pa6tA94QVygpUKYHnDj94Q3_RdgBpXtquNqz_uQwnhSN0gi7SlmaHnbEIkEuYVSMBCNIwK68Hzk-7coUZ0SZ-QwCuE-o0MrIe7SO6gdUvWO6FWRu1Wtxb_PEf-yXNxgflEW-GLuklwsv2f9xkSLo-c9InoEVWyNqmOopemwcCILVHALvA2yedw2JdPKJqPxUM2fwfLWWwaOtK5VtxTw8ivnnzeWQhk08G7w"}]},{id:"MYS-24-112",subject:"Syndicate Alpha",category:"Organized",date:"2023-10-18",status:"Active",district:"Mysuru Division",summary:"Illegal logistics movement intercepted near national highway border.",custodyChain:[{step:1,title:"Vehicle Interception",logger:"OFC-4102",time:"2023-10-18 22:10Z"}],evidenceImages:[]},{id:"HUB-24-055",subject:"Rajesh Kumar",alias:"Raju",category:"Theft",date:"2023-09-30",status:"Closed",district:"Hubballi-Dharwad",summary:"Grand theft auto case resolved with vehicle recovery.",custodyChain:[{step:1,title:"FIR Filed",logger:"OFC-9912",time:"2023-09-30 08:00Z"},{step:2,title:"Property Returned",logger:"OFC-9912",time:"2023-10-02 14:00Z"}],evidenceImages:[]}]),[y,x]=at.useState(_[0]),S=["All","Cyber","Narcotics","Organized","Theft","Fraud"],A=_.filter(w=>!(g!=="All"&&w.category!==g||d!=="All"&&w.district!==d||l&&!w.id.toLowerCase().includes(l.toLowerCase())||i&&!w.subject.toLowerCase().includes(i.toLowerCase())));return h.jsxs("div",{className:"w-full h-[calc(100vh-64px)] overflow-y-auto p-4 md:p-6 mt-16 max-w-[1600px] mx-auto space-y-6",children:[h.jsxs("div",{children:[h.jsx("h1",{className:"font-headline-lg text-2xl md:text-3xl text-on-surface font-bold",children:"Crime Search & Intelligence DB"}),h.jsx("p",{className:"font-data-mono text-xs text-outline mt-1",children:"KSP Central Unified Criminal Database"})]}),h.jsxs("div",{className:"glass-panel p-5 rounded-xl border border-white/10 space-y-4",children:[h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"font-label-caps text-xs text-outline font-semibold block mb-1",children:"Case ID / Reference"}),h.jsx("input",{type:"text",value:l,onChange:w=>e(w.target.value),placeholder:"e.g. BLR-24-991A",className:"w-full bg-black/60 border border-white/10 rounded-lg p-2.5 font-data-mono text-xs text-on-surface focus:border-secondary outline-none"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"font-label-caps text-xs text-outline font-semibold block mb-1",children:"Subject Name / Alias"}),h.jsx("input",{type:"text",value:i,onChange:w=>s(w.target.value),placeholder:"e.g. Viper",className:"w-full bg-black/60 border border-white/10 rounded-lg p-2.5 font-data-mono text-xs text-on-surface focus:border-secondary outline-none"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"font-label-caps text-xs text-outline font-semibold block mb-1",children:"Phone / IMEI / Vehicle"}),h.jsx("input",{type:"text",value:o,onChange:w=>c(w.target.value),placeholder:"e.g. 9882109920",className:"w-full bg-black/60 border border-white/10 rounded-lg p-2.5 font-data-mono text-xs text-on-surface focus:border-secondary outline-none"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"font-label-caps text-xs text-outline font-semibold block mb-1",children:"Jurisdiction District"}),h.jsxs("select",{value:d,onChange:w=>m(w.target.value),className:"w-full bg-black/60 border border-white/10 rounded-lg p-2.5 font-body-md text-xs text-on-surface focus:border-secondary outline-none",children:[h.jsx("option",{value:"All",children:"All Districts"}),h.jsx("option",{value:"Bengaluru Urban",children:"Bengaluru Urban"}),h.jsx("option",{value:"Mysuru Division",children:"Mysuru Division"}),h.jsx("option",{value:"Hubballi-Dharwad",children:"Hubballi-Dharwad"}),h.jsx("option",{value:"Mangaluru Coastal",children:"Mangaluru Coastal"})]})]})]}),h.jsxs("div",{className:"flex items-center gap-2 flex-wrap pt-2 border-t border-white/10",children:[h.jsx("span",{className:"font-label-caps text-xs text-outline font-semibold mr-2",children:"Category:"}),S.map(w=>h.jsx("button",{onClick:()=>p(w),className:`px-3 py-1 rounded-full text-xs font-label-caps transition-all cursor-pointer ${g===w?"bg-secondary text-on-secondary font-bold shadow-[0_0_10px_rgba(76,215,246,0.3)]":"bg-surface-container text-outline hover:text-on-surface"}`,children:w},w))]})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[h.jsxs("div",{className:"lg:col-span-7 glass-panel rounded-xl overflow-hidden border border-white/10 flex flex-col",children:[h.jsxs("div",{className:"p-4 border-b border-white/10 bg-black/40 flex justify-between items-center",children:[h.jsxs("span",{className:"font-label-caps text-xs text-outline font-bold uppercase tracking-wider",children:["Search Results (",A.length,")"]}),h.jsx("span",{className:"font-data-mono text-[10px] text-secondary",children:"GRID SYNCED"})]}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-left font-body-md text-xs",children:[h.jsx("thead",{className:"bg-black/60 text-outline font-label-caps text-[10px] uppercase border-b border-white/10",children:h.jsxs("tr",{children:[h.jsx("th",{className:"p-3.5",children:"Reference"}),h.jsx("th",{className:"p-3.5",children:"Subject"}),h.jsx("th",{className:"p-3.5",children:"Category"}),h.jsx("th",{className:"p-3.5",children:"District"}),h.jsx("th",{className:"p-3.5",children:"Status"})]})}),h.jsx("tbody",{className:"divide-y divide-white/5 font-data-mono",children:A.map(w=>{const M=y.id===w.id;return h.jsxs("tr",{onClick:()=>x(w),className:`cursor-pointer transition-colors ${M?"bg-secondary/15 border-l-2 border-secondary":"hover:bg-white/5"}`,children:[h.jsx("td",{className:"p-3.5 font-bold text-secondary",children:w.id}),h.jsx("td",{className:"p-3.5 text-on-surface",children:w.subject}),h.jsx("td",{className:"p-3.5",children:h.jsx("span",{className:"bg-surface-container px-2 py-0.5 rounded text-[10px] text-primary border border-primary/20",children:w.category})}),h.jsx("td",{className:"p-3.5 text-outline-variant",children:w.district}),h.jsx("td",{className:"p-3.5",children:h.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold ${w.status==="Critical"?"bg-error/20 text-error":w.status==="Active"?"bg-secondary/20 text-secondary":"bg-white/10 text-outline"}`,children:w.status})})]},w.id)})})]})})]}),h.jsxs("div",{className:"lg:col-span-5 glass-panel rounded-xl p-6 border border-white/10 space-y-6",children:[h.jsx("div",{className:"flex justify-between items-start border-b border-white/10 pb-4",children:h.jsxs("div",{children:[h.jsx("span",{className:"bg-secondary/20 text-secondary text-[10px] font-data-mono px-2 py-0.5 rounded font-bold",children:y.id}),h.jsx("h3",{className:"font-headline-md text-xl font-bold text-on-surface mt-2",children:y.subject}),h.jsxs("p",{className:"font-data-mono text-xs text-outline mt-0.5",children:["Jurisdiction: ",y.district]})]})}),h.jsxs("div",{className:"space-y-2",children:[h.jsxs("h4",{className:"font-label-caps text-xs text-primary font-bold uppercase tracking-wider flex items-center gap-1.5",children:[h.jsx("span",{className:"material-symbols-outlined text-sm",children:"smart_toy"}),h.jsx("span",{children:"AI Case Summary"})]}),h.jsx("div",{className:"bg-black/50 p-4 rounded-lg border border-white/5 font-body-md text-xs text-on-surface-variant leading-relaxed",children:y.summary})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("h4",{className:"font-label-caps text-xs text-outline font-bold uppercase tracking-wider",children:"Chain of Custody Timeline"}),h.jsx("div",{className:"space-y-2",children:y.custodyChain.map(w=>h.jsxs("div",{className:"bg-black/40 p-3 rounded-lg border border-white/5 flex items-center justify-between text-xs font-data-mono",children:[h.jsxs("div",{children:[h.jsxs("span",{className:"text-secondary font-bold mr-2",children:["#",w.step]}),h.jsx("span",{className:"text-on-surface",children:w.title})]}),h.jsx("span",{className:"text-outline-variant text-[10px]",children:w.time})]},w.step))})]}),y.evidenceImages.length>0&&h.jsxs("div",{className:"space-y-2",children:[h.jsx("h4",{className:"font-label-caps text-xs text-outline font-bold uppercase tracking-wider",children:"Evidence Gallery"}),h.jsx("div",{className:"grid grid-cols-2 gap-3",children:y.evidenceImages.map(w=>h.jsxs("div",{className:"rounded-lg border border-white/10 overflow-hidden bg-black/60 relative group cursor-pointer",children:[h.jsx("img",{src:w.url,alt:w.label,className:"w-full h-28 object-cover group-hover:scale-105 transition-transform duration-300"}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2",children:h.jsxs("span",{className:"font-data-mono text-[10px] text-on-surface font-semibold truncate",children:[w.id,": ",w.label]})})]},w.id))})]})]})]})]})};function cA(){const[l,e]=at.useState("login"),[i,s]=at.useState(""),[o,c]=at.useState(!1),[d,m]=at.useState(!1),g=_=>{e(_),c(!1)},p=_=>{s(_),_.trim()&&l!=="crime-search"&&e("crime-search")};return l==="login"?h.jsx(Gy,{onLoginSuccess:()=>e("command-center")}):h.jsxs("div",{className:"relative min-h-screen bg-[#111417] text-[#e1e2e7] font-body-md overflow-x-hidden selection:bg-secondary/30 selection:text-secondary",children:[h.jsx(jx,{mode:"dots",className:"fixed inset-0 w-full h-full z-0 opacity-30 pointer-events-none"}),h.jsx(Hy,{searchQuery:i,onSearchChange:p,onOpenMobileMenu:()=>c(!0),onNotificationClick:()=>m(!d),unreadCount:3}),h.jsx(zy,{currentView:l,onNavigate:g,isOpenMobile:o,onCloseMobile:()=>c(!1)}),h.jsxs("main",{className:"relative z-10 md:pl-64 min-h-screen flex flex-col",children:[l==="command-center"&&h.jsx(Vy,{onOpenCase:_=>g("crime-search")}),l==="ai-assistant"&&h.jsx(ky,{}),l==="case-center"&&h.jsx(jy,{}),l==="network-graph"&&h.jsx(lA,{}),(l==="crime-search"||l==="evidence")&&h.jsx(oA,{}),l==="settings"&&h.jsxs("div",{className:"w-full h-[calc(100vh-64px)] mt-16 p-6 max-w-4xl mx-auto space-y-6",children:[h.jsx("h1",{className:"font-headline-lg text-2xl md:text-3xl font-bold text-on-surface",children:"System Settings & Security Protocols"}),h.jsxs("div",{className:"glass-panel p-6 rounded-xl border border-white/10 space-y-4 font-data-mono text-xs",children:[h.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-white/10",children:[h.jsx("span",{children:"Node Designation"}),h.jsx("span",{className:"text-secondary font-bold",children:"KSP-UNIT-01-BLR"})]}),h.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-white/10",children:[h.jsx("span",{children:"Encryption Standard"}),h.jsx("span",{className:"text-secondary font-bold",children:"AES-256-GCM / Quantum Ready"})]}),h.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-white/10",children:[h.jsx("span",{children:"Gemini Cyber AI Model"}),h.jsx("span",{className:"text-primary font-bold",children:"gemini-3.6-flash"})]}),h.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-white/10",children:[h.jsx("span",{children:"Database Sync Status"}),h.jsx("span",{className:"text-secondary font-bold",children:"ONLINE (0ms latency)"})]})]})]})]}),d&&h.jsxs("div",{className:"fixed right-4 top-20 z-50 w-80 glass-panel rounded-xl p-4 border border-white/10 shadow-2xl space-y-3 font-body-md text-xs",children:[h.jsxs("div",{className:"flex justify-between items-center pb-2 border-b border-white/10",children:[h.jsx("span",{className:"font-label-caps text-xs text-on-surface font-bold uppercase",children:"System Alerts"}),h.jsx("button",{onClick:()=>m(!1),className:"text-outline hover:text-white",children:h.jsx("span",{className:"material-symbols-outlined text-sm",children:"close"})})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"p-2.5 bg-error/10 border border-error/20 rounded font-data-mono text-[11px]",children:[h.jsx("span",{className:"text-error font-bold block",children:"[HIGH RISK]"}),h.jsx("span",{children:"INC-8892 Armed Robbery flagged in Sector 1."})]}),h.jsxs("div",{className:"p-2.5 bg-secondary/10 border border-secondary/20 rounded font-data-mono text-[11px]",children:[h.jsx("span",{className:"text-secondary font-bold block",children:"[FACIAL RECOG MATCH]"}),h.jsx("span",{children:"Camera BLR-92 detected suspect Viper."})]}),h.jsxs("div",{className:"p-2.5 bg-black/40 border border-white/5 rounded font-data-mono text-[11px]",children:[h.jsx("span",{className:"text-outline font-bold block",children:"[SYS UPDATE]"}),h.jsx("span",{children:"Intake protocol updated to v4.1."})]})]})]})]})}Fy.createRoot(document.getElementById("root")).render(h.jsx(at.StrictMode,{children:h.jsx(cA,{})}));
