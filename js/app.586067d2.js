(function(e){function n(n){for(var r,i,c=n[0],l=n[1],s=n[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(n);while(f.length)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var l=t[c];0!==o[l]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/double_clicker/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var u=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-main",[t("Button")],1)],1)},a=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{staticClass:"fill-height",attrs:{fluid:"",primary:""}},[t("v-row",{staticClass:"text-center",attrs:{align:"center",justify:"center"}},[t("v-col",{attrs:{cols:"8"}},[t("v-card",[t("v-card-text",{staticClass:"grey lighten-5 text-center py-auto",staticStyle:{height:"300px"}},[t("v-btn",{attrs:{color:"primary"},on:{dblclick:function(n){e.hidden=!e.hidden}}},[e._v(" "+e._s(e.hidden?"Double Click Me":"Double Click Me Again")+" ")])],1),t("v-card-text",{staticClass:"secondary",staticStyle:{height:"100px",position:"relative"}},[t("v-fab-transition",[t("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{color:"pink",dark:"",absolute:"",top:"",middle:"",fab:""}},[t("v-icon",[e._v("mdi-plus")])],1)],1)],1)],1)],1)],1)],1)},c=[],l={data:function(){return{hidden:!0}}},s=l,u=t("2877"),d=t("6544"),f=t.n(d),p=t("8336"),v=t("b0af"),h=t("99d9"),b=t("62ad"),g=t("a523"),y=t("0789"),w=t("132d"),m=t("0fd9"),x=Object(u["a"])(s,i,c,!1,null,null,null),k=x.exports;f()(x,{VBtn:p["a"],VCard:v["a"],VCardText:h["a"],VCol:b["a"],VContainer:g["a"],VFabTransition:y["a"],VIcon:w["a"],VRow:m["a"]});var _={name:"App",components:{Button:k},data:function(){return{}}},j=_,O=t("7496"),C=t("f6c4"),V=Object(u["a"])(j,o,a,!1,null,null,null),S=V.exports;f()(V,{VApp:O["a"],VMain:C["a"]});var M=t("f309");r["a"].use(M["a"]);var P=new M["a"]({}),A=t("9483");Object(A["a"])("".concat("/double_clicker/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({vuetify:P,render:function(e){return e(S)}}).$mount("#app")}});
//# sourceMappingURL=app.586067d2.js.map