/**!
 * FlexSearch.js v0.7.21 (ES5)
 * Copyright 2018-2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/flexsearch
 */
(function(self){'use strict';var t,v="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};function aa(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var w=aa(this);
function x(a,b){if(b)a:{var c=w;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&v(c,a,{configurable:!0,writable:!0,value:b})}}function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ca(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}}function C(){this.s=!1;this.l=null;this.m=void 0;this.h=1;this.J=0;this.o=null}
function D(a){if(a.s)throw new TypeError("Generator is already running");a.s=!0}C.prototype.D=function(a){this.m=a};function da(a,b){a.o={W:b,X:!0};a.h=a.J}C.prototype.return=function(a){this.o={return:a};this.h=this.J};function E(a,b,c){a.h=c;return{value:b}}function ea(a){this.h=new C;this.l=a}function fa(a,b){D(a.h);var c=a.h.l;if(c)return ha(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);a.h.return(b);return F(a)}
function ha(a,b,c,d){try{var f=b.call(a.h.l,c);if(!(f instanceof Object))throw new TypeError("Iterator result "+f+" is not an object");if(!f.done)return a.h.s=!1,f;var h=f.value}catch(e){return a.h.l=null,da(a.h,e),F(a)}a.h.l=null;d.call(a.h,h);return F(a)}function F(a){for(;a.h.h;)try{var b=a.l(a.h);if(b)return a.h.s=!1,{value:b.value,done:!1}}catch(c){a.h.m=void 0,da(a.h,c)}a.h.s=!1;if(a.h.o){b=a.h.o;a.h.o=null;if(b.X)throw b.W;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ia(a){this.next=function(b){D(a.h);a.h.l?b=ha(a,a.h.l.next,b,a.h.D):(a.h.D(b),b=F(a));return b};this.throw=function(b){D(a.h);a.h.l?b=ha(a,a.h.l["throw"],b,a.h.D):(da(a.h,b),b=F(a));return b};this.return=function(b){return fa(a,b)};this[Symbol.iterator]=function(){return this}}function ja(a){function b(d){return a.next(d)}function c(d){return a.throw(d)}return new Promise(function(d,f){function h(e){e.done?d(e.value):Promise.resolve(e.value).then(b,c).then(h,f)}h(a.next())})}
function ka(a){return ja(new ia(new ea(a)))}x("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(h||"")+"_"+f++,h)}function c(h,e){this.h=h;v(this,"description",{configurable:!0,writable:!0,value:e})}if(a)return a;c.prototype.toString=function(){return this.h};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",f=0;return b});
x("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=w[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&v(d.prototype,a,{configurable:!0,writable:!0,value:function(){return la(ba(this))}})}return a});function la(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
x("Promise",function(a){function b(e){this.l=0;this.m=void 0;this.h=[];this.J=!1;var g=this.o();try{e(g.resolve,g.reject)}catch(k){g.reject(k)}}function c(){this.h=null}function d(e){return e instanceof b?e:new b(function(g){g(e)})}if(a)return a;c.prototype.l=function(e){if(null==this.h){this.h=[];var g=this;this.m(function(){g.s()})}this.h.push(e)};var f=w.setTimeout;c.prototype.m=function(e){f(e,0)};c.prototype.s=function(){for(;this.h&&this.h.length;){var e=this.h;this.h=[];for(var g=0;g<e.length;++g){var k=
e[g];e[g]=null;try{k()}catch(l){this.o(l)}}}this.h=null};c.prototype.o=function(e){this.m(function(){throw e;})};b.prototype.o=function(){function e(l){return function(m){k||(k=!0,l.call(g,m))}}var g=this,k=!1;return{resolve:e(this.S),reject:e(this.s)}};b.prototype.S=function(e){if(e===this)this.s(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.U(e);else{a:switch(typeof e){case "object":var g=null!=e;break a;case "function":g=!0;break a;default:g=!1}g?this.R(e):this.D(e)}};
b.prototype.R=function(e){var g=void 0;try{g=e.then}catch(k){this.s(k);return}"function"==typeof g?this.V(g,e):this.D(e)};b.prototype.s=function(e){this.N(2,e)};b.prototype.D=function(e){this.N(1,e)};b.prototype.N=function(e,g){if(0!=this.l)throw Error("Cannot settle("+e+", "+g+"): Promise already settled in state"+this.l);this.l=e;this.m=g;2===this.l&&this.T();this.O()};b.prototype.T=function(){var e=this;f(function(){if(e.P()){var g=w.console;"undefined"!==typeof g&&g.error(e.m)}},1)};b.prototype.P=
function(){if(this.J)return!1;var e=w.CustomEvent,g=w.Event,k=w.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof g?e=new g("unhandledrejection",{cancelable:!0}):(e=w.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.m;return k(e)};b.prototype.O=function(){if(null!=this.h){for(var e=0;e<this.h.length;++e)h.l(this.h[e]);this.h=null}};var h=new c;b.prototype.U=
function(e){var g=this.o();e.K(g.resolve,g.reject)};b.prototype.V=function(e,g){var k=this.o();try{e.call(g,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(e,g){function k(n,q){return"function"==typeof n?function(r){try{l(n(r))}catch(u){m(u)}}:q}var l,m,p=new b(function(n,q){l=n;m=q});this.K(k(e,l),k(g,m));return p};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.K=function(e,g){function k(){switch(l.l){case 1:e(l.m);break;case 2:g(l.m);break;default:throw Error("Unexpected state: "+
l.l);}}var l=this;null==this.h?h.l(k):this.h.push(k);this.J=!0};b.resolve=d;b.reject=function(e){return new b(function(g,k){k(e)})};b.race=function(e){return new b(function(g,k){for(var l=ca(e),m=l.next();!m.done;m=l.next())d(m.value).K(g,k)})};b.all=function(e){var g=ca(e),k=g.next();return k.done?d([]):new b(function(l,m){function p(r){return function(u){n[r]=u;q--;0==q&&l(n)}}var n=[],q=0;do n.push(void 0),q++,d(k.value).K(p(n.length-1),m),k=g.next();while(!k.done)})};return b});
function ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,f={next:function(){if(!d&&c<a.length){var h=c++;return{value:b(h,a[h]),done:!1}}d=!0;return{done:!0,value:void 0}}};f[Symbol.iterator]=function(){return f};return f}x("Array.prototype.keys",function(a){return a?a:function(){return ma(this,function(b){return b})}});
var na="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(a[f]=d[f])}return a};x("Object.assign",function(a){return a||na});function H(a){return"undefined"!==typeof a?a:!0}function oa(a){for(var b=Array(a),c=0;c<a;c++)b[c]=I();return b}function I(){return Object.create(null)}function pa(a,b){return b.length-a.length}function J(a){return"string"===typeof a}function K(a){return"object"===typeof a}function qa(a){return"function"===typeof a};function ra(a,b){var c=sa;if(a&&(b&&(a=L(a,b)),this.L&&(a=L(a,this.L)),this.M&&1<a.length&&(a=L(a,this.M)),c||""===c)){a=a.split(c);if(this.filter){b=this.filter;c=a.length;for(var d=[],f=0,h=0;f<c;f++){var e=a[f];e&&!b[e]&&(d[h++]=e)}a=d}return a}return a}var sa=/[\p{Z}\p{S}\p{P}\p{C}]+/u,ta=/[\u0300-\u036f]/g;
function ua(a,b){for(var c=Object.keys(a),d=c.length,f=[],h="",e=0,g=0,k,l;g<d;g++)k=c[g],(l=a[k])?(f[e++]=N(b?"(?!\\b)"+k+"(\\b|_)":k),f[e++]=l):h+=(h?"|":"")+k;h&&(f[e++]=N(b?"(?!\\b)("+h+")(\\b|_)":"("+h+")"),f[e]="");return f}function L(a,b){for(var c=0,d=b.length;c<d&&(a=a.replace(b[c],b[c+1]),a);c+=2);return a}function N(a){return new RegExp(a,"g")}function va(a){for(var b="",c="",d=0,f=a.length,h=void 0;d<f;d++)(h=a[d])!==c&&(b+=c=h);return b};var xa={encode:wa,H:!1,I:""};function wa(a){return ra.call(this,(""+a).toLowerCase(),!1)};var ya={},O={};function za(a){P(a,"add");P(a,"append");P(a,"search");P(a,"update");P(a,"remove")}function P(a,b){a[b+"Async"]=function(){var c=this,d=arguments,f=d[d.length-1];if(qa(f)){var h=f;delete d[d.length-1]}f=new Promise(function(e){setTimeout(function(){c.async=!0;var g=c[b].apply(c,d);c.async=!1;e(g)})});return h?(f.then(h),this):f}};function Aa(a,b,c,d){var f=a.length,h=[],e,g=0;d&&(d=[]);for(var k=f-1;0<=k;k--){for(var l=a[k],m=l.length,p=I(),n=!B,q=0;q<m;q++){var r=l[q],u=r.length;if(u)for(var A=0,y=void 0,z;A<u;A++)if(z=r[A],B){if(B[z]){if(!k)if(c)c--;else if(h[g++]=z,g===b)return h;if(k||d)p[z]=1;n=!0}if(d&&(e[z]=(y=e[z])?++y:y=1,y<f)){var M=d[y-2]||(d[y-2]=[]);M[M.length]=z}}else p[z]=1}if(d)B||(e=p);else if(!n)return[];var B=p}if(d)for(a=d.length-1;0<=a;a--)for(f=d[a],e=f.length,k=0;k<e;k++)if(l=f[k],!B[l]){if(c)c--;else if(h[g++]=
l,g===b)return h;B[l]=1}return h}function Ba(a,b){for(var c=I(),d=I(),f=[],h=0;h<a.length;h++)c[a[h]]=1;for(a=0;a<b.length;a++){h=b[a];for(var e=0,g;e<h.length;e++)g=h[e],c[g]&&!d[g]&&(d[g]=1,f[f.length]=g)}return f};function Q(a){this.l=!0!==a&&a;this.cache=I();this.h=[]}function Ca(a,b,c){K(a)&&(a=a.query);var d=this.cache.get(a);d||(d=this.search(a,b,c),this.cache.set(a,d));return d}Q.prototype.set=function(a,b){if(!this.cache[a]){var c=this.h.length;c===this.l?delete this.cache[this.h[c-1]]:c++;for(--c;0<c;c--)this.h[c]=this.h[c-1];this.h[0]=a}this.cache[a]=b};Q.prototype.get=function(a){var b=this.cache[a];if(this.l&&b&&(a=this.h.indexOf(a))){var c=this.h[a-1];this.h[a-1]=this.h[a];this.h[a]=c}return b};var Da={memory:{charset:"latin:extra",G:3,F:4,A:!1},performance:{G:3,F:3,C:!1,context:{depth:2,G:1}},match:{charset:"latin:extra",I:"reverse"},score:{charset:"latin:advanced",G:20,F:3,context:{depth:3,G:9}},"default":{}};function Ea(a,b,c,d,f,h){var e;return ka(function(g){return 1==g.h?((e=a(c,JSON.stringify(h)))&&e.then?g=E(g,e,2):(g.h=2,g=void 0),g):4!=g.h?E(g,b.export(a,b,c,d,f+1),4):g.return(g.m)})};function R(a,b){if(!(this instanceof R))return new R(a);var c;if(a){J(a)?a=Da[a]:(c=a.preset)&&(a=Object.assign({},c[c],a));c=a.charset;var d=a.lang;J(c)&&(-1===c.indexOf(":")&&(c+=":default"),c=O[c]);J(d)&&(d=ya[d])}else a={};var f,h,e=a.context||{};this.encode=a.encode||c&&c.encode||wa;this.register=b||I();this.G=f=a.resolution||9;this.I=b=c&&c.I||a.tokenize||"strict";this.depth="strict"===b&&e.depth;this.l=H(e.bidirectional);this.C=h=H(a.optimize);this.A=H(a.fastupdate);this.F=a.minlength||1;this.o=
a.boost;this.map=h?oa(f):I();this.m=f=e.resolution||1;this.h=h?oa(f):I();this.H=c&&c.H||a.rtl;this.L=(b=a.matcher||d&&d.L)&&ua(b,!1);this.M=(b=a.stemmer||d&&d.M)&&ua(b,!0);if(c=b=a.filter||d&&d.filter){c=b;d=I();e=0;for(f=c.length;e<f;e++)d[c[e]]=1;c=d}this.filter=c;this.cache=(b=a.cache)&&new Q(b)}t=R.prototype;t.append=function(a,b){return this.add(a,b,!0)};
t.add=function(a,b,c,d){if(b&&(a||0===a)){if(!d&&!c&&this.register[a])return this.update(a,b);b=this.encode(b);if(d=b.length){for(var f=I(),h=I(),e=this.depth,g=this.G,k=0;k<d;k++){var l=b[this.H?d-1-k:k],m=l.length;if(l&&m>=this.F&&(e||!h[l])){var p=S(g,d,k),n="";switch(this.I){case "full":if(3<m){for(p=0;p<m;p++)for(var q=m;q>p;q--)if(q-p>=this.F){var r=S(g,d,k,m,p);n=l.substring(p,q);T(this,h,n,r,a,c)}break}case "reverse":if(2<m){for(q=m-1;0<q;q--)n=l[q]+n,n.length>=this.F&&T(this,h,n,S(g,d,k,
m,q),a,c);n=""}case "forward":if(1<m){for(q=0;q<m;q++)n+=l[q],n.length>=this.F&&T(this,h,n,p,a,c);break}default:if(this.o&&(p=Math.min(p/this.o(b,l,k)|0,g-1)),T(this,h,l,p,a,c),e&&1<d&&k<d-1)for(m=I(),n=this.m,p=l,q=Math.min(e+1,d-k),r=m[p]=1;r<q;r++)if((l=b[this.H?d-1-k-r:k+r])&&l.length>=this.F&&!m[l]){m[l]=1;var u=this.l&&l>p;T(this,f,u?p:l,S(n+(d/2>n?0:1),d,k,q-1,r-1),a,c,u?l:p)}}}}this.A||(this.register[a]=1)}}return this};
function S(a,b,c,d,f){return c&&1<a?b+(d||0)<=a?c+(f||0):(a-1)/(b+(d||0))*(c+(f||0))+1|0:0}function T(a,b,c,d,f,h,e){var g=e?a.h:a.map;if(!b[c]||e&&!b[c][e])a.C&&(g=g[d]),e?(b=b[c]||(b[c]=I()),b[e]=1,g=g[e]||(g[e]=I())):b[c]=1,g=g[c]||(g[c]=[]),a.C||(g=g[d]||(g[d]=[])),h&&-1!==g.indexOf(f)||(g[g.length]=f,a.A&&(a=a.register[f]||(a.register[f]=[]),a[a.length]=g))}
t.search=function(a,b,c){c||(!b&&K(a)?(c=a,a=c.query):K(b)&&(c=b));var d=[],f=0;if(c){b=c.limit;f=c.offset||0;var h=c.context;var e=c.suggest;a=c.query||a}if(a){a=this.encode(a);var g=a.length;if(1<g){c=I();for(var k=[],l=0,m=0,p;l<g;l++)if((p=a[l])&&p.length>=this.F&&!c[p])if(this.C||e||this.map[p])k[m++]=p,c[p]=1;else return d;a=k;g=a.length}}if(!g)return d;b||(b=100);h=this.depth&&1<g&&!1!==h;c=0;if(h){var n=a[0];c=1}else 1<g&&a.sort(pa);for(;c<g;c++){l=a[c];h?(k=Fa(this,d,e,b,f,2===g,l,n),e&&
!1===k&&d.length||(n=l)):k=Fa(this,d,e,b,f,1===g,l);if(k)return k;if(e&&c===g-1){k=d.length;if(!k){if(h){h=0;c=-1;continue}return d}if(1===k)return Ga(d[0],b,f)}}return Aa(d,b,f,e)};
function Fa(a,b,c,d,f,h,e,g){var k=[],l=g?a.h:a.map;a.C||(l=Ha(l,e,g,a.l));if(l){for(var m=0,p=Math.min(l.length,g?a.m:a.G),n=0,q=0,r,u;n<p;n++)if(r=l[n])if(a.C&&(r=Ha(r,e,g,a.l)),f&&r&&h&&(u=r.length,u<=f?(f-=u,r=null):(r=r.slice(f),f=0)),r&&(k[m++]=r,h&&(q+=r.length,q>=d)))break;if(m){if(h)return Ga(k,d,0);b[b.length]=k;return}}return!c&&k}function Ga(a,b,c){a=1===a.length?a[0]:[].concat.apply([],a);return c||a.length>b?a.slice(c,c+b):a}
function Ha(a,b,c,d){c?(d=d&&b>c,a=(a=a[d?b:c])&&a[d?c:b]):a=a[b];return a}t.contain=function(a){return!!this.register[a]};t.update=function(a,b){return this.remove(a).add(a,b)};
t.remove=function(a,b){var c=this.register[a];if(c){if(this.A)for(var d=0,f;d<c.length;d++)f=c[d],f.splice(f.indexOf(a),1);else U(this.map,a,this.G,this.C),this.depth&&U(this.h,a,this.m,this.C);b||delete this.register[a];if(this.cache)for(b=this.cache,c=0;c<b.h.length;c++)f=b.h[c],d=b.cache[f],-1!==d.indexOf(a)&&(b.h.splice(c--,1),delete b.cache[f])}return this};
function U(a,b,c,d,f){var h=0;if(a.constructor===Array)if(f)b=a.indexOf(b),-1!==b?1<a.length&&(a.splice(b,1),h++):h++;else{f=Math.min(a.length,c);for(var e=0,g;e<f;e++)if(g=a[e])h=U(g,b,c,d,f),d||h||delete a[e]}else for(e in a)(h=U(a[e],b,c,d,f))||delete a[e];return h}t.searchCache=Ca;
t.export=function(a,b,c,d,f){var h=this,e,g,k;return ka(function(l){if(1==l.h){switch(f||(f=0)){case 0:e="reg";if(h.A)for(k in g=I(),h.register)g[k]=1;else g=h.register;break;case 1:e="cfg";g={doc:0,opt:h.C?1:0};break;case 2:e="map";g=h.map;break;case 3:e="ctx";g=h.h;break;default:return l.return(!0)}return E(l,Ea(a,b||h,c?c+"."+e:e,d,f,g),2)}return l.return(l.m)})};
t.import=function(a,b){if(b)switch(J(b)&&(b=JSON.parse(b)),a){case "cfg":this.C=!!b.opt;break;case "reg":this.A=!1;this.register=b;break;case "map":this.map=b;break;case "ctx":this.h=b}};za(R.prototype);function Ia(a){a=a.data;var b=self._index,c=a.args,d=a.task;switch(d){case "init":d=a.options||{};a=a.factory;b=d.encode;d.cache=!1;b&&0===b.indexOf("function")&&(d.encode=Function("return "+b)());a?(Function("return "+a)()(self),self._index=new self.FlexSearch.Index(d),delete self.FlexSearch):self._index=new R(d);break;default:a=a.id,b=b[d].apply(b,c),postMessage("search"===d?{id:a,msg:b}:{id:a})}};var Ja=0;function V(a){if(!(this instanceof V))return new V(a);var b;a?qa(b=a.encode)&&(a.encode=b.toString()):a={};(b=(self||window)._factory)&&(b=b.toString());var c=self.exports,d=this;this.B=Ka(b,c,a.worker);this.h=I();if(this.B){if(c)this.B.on("message",function(f){d.h[f.id](f.msg);delete d.h[f.id]});else this.B.onmessage=function(f){f=f.data;d.h[f.id](f.msg);delete d.h[f.id]};this.B.postMessage({task:"init",factory:b,options:a})}}W("add");W("append");W("search");W("update");W("remove");
function W(a){V.prototype[a]=V.prototype[a+"Async"]=function(){var b=this,c=[].slice.call(arguments),d=c[c.length-1];if(qa(d)){var f=d;c.splice(c.length-1,1)}d=new Promise(function(h){setTimeout(function(){b.h[++Ja]=h;b.B.postMessage({task:a,id:Ja,args:c})})});return f?(d.then(f),this):d}}
function Ka(a,b,c){try{var d=b?eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")'):a?new Worker(URL.createObjectURL(new Blob(["onmessage="+Ia.toString()],{type:"text/javascript"}))):new Worker(J(c)?c:"worker/worker.js",{type:"module"})}catch(f){}return d};function X(a){if(!(this instanceof X))return new X(a);var b=a.document||a.doc||a,c;this.D=[];this.h=[];this.m=[];this.register=I();this.key=(c=b.key||b.id)&&Y(c,this.m)||"id";this.A=H(a.fastupdate);this.o=(c=b.store)&&!0!==c&&[];this.store=c&&I();this.s=(c=b.tag)&&Y(c,this.m);this.l=c&&I();this.cache=(c=a.cache)&&new Q(c);a.cache=!1;this.B=a.worker;this.async=!1;c=I();var d=b.index||b.field||b;J(d)&&(d=[d]);for(var f=0,h,e=void 0;f<d.length;f++)h=d[f],J(h)||(e=h,h=h.field),e=K(e)?Object.assign({},
a,e):a,this.B&&(c[h]=new V(e),c[h].B||(this.B=!1)),this.B||(c[h]=new R(e,this.register)),this.D[f]=Y(h,this.m),this.h[f]=h;if(this.o)for(a=b.store,J(a)&&(a=[a]),b=0;b<a.length;b++)this.o[b]=Y(a[b],this.m);this.index=c}function Y(a,b){for(var c=a.split(":"),d=0,f=0;f<c.length;f++)a=c[f],0<=a.indexOf("[]")&&(a=a.substring(0,a.length-2))&&(b[d]=!0),a&&(c[d++]=a);d<c.length&&(c.length=d);return 1<d?c:c[0]}function La(a,b){if(J(b))a=a[b];else for(var c=0;a&&c<b.length;c++)a=a[b[c]];return a}
function Ma(a,b,c,d,f){a=a[f];if(d===c.length-1)b[f]=a;else if(a)if(a.constructor===Array)for(b=b[f]=Array(a.length),f=0;f<a.length;f++)Ma(a,b,c,d,f);else b=b[f]||(b[f]=I()),f=c[++d],Ma(a,b,c,d,f)}function Na(a,b,c,d,f,h,e,g){if(a=a[e])if(d===b.length-1){if(a.constructor===Array){if(c[d]){for(b=0;b<a.length;b++)f.add(h,a[b],!0,!0);return}a=a.join(" ")}f.add(h,a,g,!0)}else if(a.constructor===Array)for(e=0;e<a.length;e++)Na(a,b,c,d,f,h,e,g);else e=b[++d],Na(a,b,c,d,f,h,e,g)}t=X.prototype;
t.add=function(a,b,c){K(a)&&(b=a,a=La(b,this.key));if(b&&(a||0===a)){if(!c&&this.register[a])return this.update(a,b);for(var d=0,f,h;d<this.h.length;d++)h=this.h[d],f=this.D[d],J(f)&&(f=[f]),Na(b,f,this.m,0,this.index[h],a,f[0],c);if(this.s){d=La(b,this.s);f=I();J(d)&&(d=[d]);h=0;for(var e;h<d.length;h++)if(e=d[h],!f[e]&&(f[e]=1,e=this.l[e]||(this.l[e]=[]),!c||-1===e.indexOf(a)))if(e[e.length]=a,this.A){var g=this.register[a]||(this.register[a]=[]);g[g.length]=e}}if(this.store&&(!c||!this.store[a])){if(this.o){var k=
I();for(c=0;c<this.o.length;c++)d=this.o[c],J(d)?k[d]=b[d]:Ma(b,k,d,0,d[0])}this.store[a]=k||b}}return this};t.append=function(a,b){return this.add(a,b,!0)};t.update=function(a,b){return this.remove(a).add(a,b)};
t.remove=function(a){K(a)&&(a=La(a,this.key));if(this.register[a]){for(var b=0;b<this.h.length&&(this.index[this.h[b]].remove(a,!this.B),!this.A);b++);if(this.s&&!this.A)for(var c in this.l){b=this.l[c];var d=b.indexOf(a);-1!==d&&(1<b.length?b.splice(d,1):delete this.l[c])}this.store&&delete this.store[a];delete this.register[a]}return this};
t.search=function(a,b,c,d){c||(!b&&K(a)?(c=a,a=c.query):K(b)&&(c=b,b=0));var f=[],h=[],e,g=0;if(c)if(c.constructor===Array){var k=c;c=null}else{k=(e=c.pluck)||c.index||c.field;var l=c.tag;var m=this.store&&c.enrich;var p="and"===c.bool;b=c.limit||100;var n=c.offset||0;if(l&&(J(l)&&(l=[l]),!a)){h=0;for(e=void 0;h<l.length;h++)if(e=Oa.call(this,l[h],b,n,m))f[f.length]=e,g++;return g?f:[]}J(k)&&(k=[k])}k||(k=this.h);p=p&&(1<k.length||l&&1<l.length);for(var q=!d&&(this.B||this.async)&&[],r=0,u=void 0,
A=void 0,y=void 0;r<k.length;r++)if(y=void 0,A=k[r],J(A)||(y=A,A=A.field),q)q[r]=this.index[A].searchAsync(a,b,y||c);else{d?u=d[r]:u=this.index[A].search(a,b,y||c);y=u&&u.length;if(l&&y){var z=[],M=0;p&&(z[0]=[u]);var B=0,G=void 0;for(G=void 0;B<l.length;B++)if(G=l[B],y=(G=this.l[G])&&G.length)M++,z[z.length]=p?[G]:G;M&&(u=p?Aa(z,b||100,n||0):Ba(u,z),y=u.length)}if(y)h[g]=A,f[g++]=u;else if(p)return[]}if(q){var Wa=this;return new Promise(function(Xa){Promise.all(q).then(function(Ya){Xa(Wa.search(a,
b,c,Ya))})})}if(!g)return[];if(e&&(!m||!this.store))return f[0];l=0;for(n=void 0;l<h.length;l++){n=f[l];n.length&&m&&(n=Pa.call(this,n));if(e)return n;f[l]={field:h[l],result:n}}return f};function Oa(a,b,c,d){var f=this.l[a],h=f&&f.length-c;if(h&&0<h){if(h>b||c)f=f.slice(c,c+b);d&&(f=Pa.call(this,f));return{tag:a,result:f}}}function Pa(a){for(var b=Array(a.length),c=0,d;c<a.length;c++)d=a[c],b[c]={id:d,doc:this.store[d]};return b}t.contain=function(a){return!!this.register[a]};t.get=function(a){return this.store[a]};
t.set=function(a,b){this.store[a]=b;return this};t.searchCache=Ca;t.export=function(a,b,c,d,f){var h=this,e,g,k,l;return ka(function(m){switch(m.h){case 1:f||(f=0);d||(d=0);if(d<h.h.length)return k=h.h[d],l=h.index[k],b=h,E(m,l.export(a,b,f?k.replace(":","-"):"",d,f++),5);switch(f){case 1:e="tag";g=h.l;break;case 2:e="store";g=h.store;break;default:return m.return(!0)}return E(m,Ea(a,h,e,d,f,g),4);case 4:return m.return(m.m);case 5:if(m.m){m.h=6;break}d++;f=1;return E(m,b.export(a,b,k,d,f),6);case 6:return m.return(!0)}})};
t.import=function(a,b){if(b)switch(J(b)&&(b=JSON.parse(b)),a){case "tag":this.l=b;break;case "reg":this.A=!1;this.register=b;a=0;for(var c;a<this.h.length;a++)c=this.index[this.h[a]],c.register=b,c.A=!1;break;case "store":this.store=b;break;default:a=a.split("."),c=a[0],a=a[1],c&&a&&this.index[c].import(a,b)}};za(X.prototype);var Ra={encode:Qa,H:!1,I:""},Sa=[N("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",N("[\u00e8\u00e9\u00ea\u00eb]"),"e",N("[\u00ec\u00ed\u00ee\u00ef]"),"i",N("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",N("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",N("[\u00fd\u0177\u00ff]"),"y",N("\u00f1"),"n",N("[\u00e7c]"),"k",N("\u00df"),"s",N(" & ")," and "];function Qa(a){var b=a;b.normalize&&(b=b.normalize("NFD").replace(ta,""));return ra.call(this,b.toLowerCase(),!a.normalize&&Sa)};var Ua={encode:Ta,H:!1,I:"strict"},Va=/[^a-z0-9]+/,Za={b:"p",v:"f",w:"f",z:"s",x:"s","\u00df":"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function Ta(a){a=Qa.call(this,a).join(" ");var b=[];if(a)for(var c=a.split(Va),d=c.length,f=0,h,e=0;f<d;f++)if((a=c[f])&&(!this.filter||!this.filter[a])){h=a[0];for(var g=Za[h]||h,k=g,l=1;l<a.length;l++)h=a[l],(h=Za[h]||h)&&h!==k&&(g+=h,k=h);b[e++]=g}return b};var ab={encode:$a,H:!1,I:""},bb=[N("ae"),"a",N("oe"),"o",N("sh"),"s",N("th"),"t",N("ph"),"f",N("pf"),"f",N("(?![aeo])h(?![aeo])"),"",N("(?!^[aeo])h(?!^[aeo])"),""];function $a(a,b){a&&(a=Ta.call(this,a).join(" "),2<a.length&&(a=L(a,bb)),b||(1<a.length&&(a=va(a)),a&&(a=a.split(" "))));return a};var db={encode:cb,H:!1,I:""},eb=N("(?!\\b)[aeo]");function cb(a){a&&(a=$a.call(this,a,!0),1<a.length&&(a=a.replace(eb,"")),1<a.length&&(a=va(a)),a&&(a=a.split(" ")));return a};O["latin:default"]=xa;O["latin:simple"]=Ra;O["latin:balance"]=Ua;O["latin:advanced"]=ab;O["latin:extra"]=db;var Z=self,fb,gb={Index:R,Document:X,Worker:V,registerCharset:function(a,b){O[a]=b},registerLanguage:function(a,b){ya[a]=b}};(fb=Z.define)&&fb.amd?fb([],function(){return gb}):Z.exports?Z.exports=gb:Z.FlexSearch=gb;}(this));
