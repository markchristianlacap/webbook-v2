(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba18f9de"],{"0798":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("caad"),r("e439"),r("dbb4"),r("b64b"),r("159b");var s=r("ade3"),n=(r("0c18"),r("10d2")),i=r("afdd"),o=r("9d26"),a=r("f2e7"),c=r("7560"),l=r("2b0e"),u=l["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=r("58df"),h=r("d9bd");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(d["a"])(n["a"],a["a"],u).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(s["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(i["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(o["a"],{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=f({},n["a"].options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,r){},"0e7a":function(t,e,r){t.exports=r.p+"img/gardening.9e953d47.svg"},"4bd4":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("7db0"),r("4160"),r("caad"),r("e439"),r("dbb4"),r("b64b"),r("07ac"),r("2532"),r("159b");var s=r("ade3"),n=r("58df"),i=r("7e2b"),o=r("3206");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(n["a"])(i["a"],Object(o["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},s={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(s.valid=r(t)))})):s.valid=r(t),s},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"73cf":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{"align-center":"","justify-center":"","fill-height":""}},[s("v-flex",{attrs:{xs12:"",sm8:""}},[s("v-card",{staticClass:"pa-2"},[s("v-layout",{attrs:{"justify-center":""}},[s("h1",{staticClass:"headline primary white--text pa-1"},[t._v("AGRIBOOK")])]),s("v-layout",{attrs:{row:""}},[s("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md6:""}},[s("v-layout",{attrs:{"justify-center":""}},[s("v-flex",{attrs:{lg9:"",md10:"",xs12:""}},[s("v-img",{attrs:{src:r("0e7a")}})],1)],1)],1),s("v-flex",{staticClass:"pa-5",attrs:{xs12:"",md6:""}},[s("v-toolbar",{attrs:{flat:""}},[s("v-toolbar-title",{staticClass:"title"},[t._v("Register to access exclusive content")])],1),t.error?s("v-alert",{attrs:{text:"",dense:"",outlined:"",color:"deep-orange",type:"error"}},[t._v(" "+t._s(t.error)+" ")]):t._e(),t.success?s("v-alert",{attrs:{text:"",dense:"",outlined:"",color:"success",type:"success"}},[t._v(" "+t._s(t.success)+" ")]):t._e(),s("v-form",[s("v-text-field",{attrs:{dense:"",label:"Email","prepend-icon":"fa-at",type:"text"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),s("v-text-field",{attrs:{dense:"",label:"Complete Name","prepend-icon":"fa-signature",type:"text"},model:{value:t.user.displayName,callback:function(e){t.$set(t.user,"displayName",e)},expression:"user.displayName"}}),s("v-text-field",{attrs:{dense:"","append-icon":t.show.p?"fa-eye-slash":"fa-eye",type:t.show.p?"text":"password",label:"Password","prepend-icon":"fa-lock"},on:{"click:append":function(e){t.show.p=!t.show.p}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),s("v-text-field",{attrs:{dense:"","append-icon":t.show.c?"fa-eye-slash":"fa-eye",type:t.show.c?"text":"password",label:"Confirm Password","prepend-icon":"fa-key"},on:{"click:append":function(e){t.show.c=!t.show.c}},model:{value:t.user.confirm_password,callback:function(e){t.$set(t.user,"confirm_password",e)},expression:"user.confirm_password"}})],1),s("v-layout",[s("span",{staticClass:"subtitle"},[t._v("Already have an account? "),s("router-link",{attrs:{to:"/login"}},[t._v("Log in here.")])],1),s("v-spacer"),s("v-btn",{attrs:{loading:t.loading,outlined:"",text:"",color:"success"},on:{click:function(e){return e.preventDefault(),t.register(t.user)}}},[t._v("register")])],1)],1)],1)],1)],1)],1)},n=[],i=(r("d3b7"),r("96cf"),r("dc59")),o=(r("ea7b"),i["a"].auth()),a={data:function(){return{show:{c:!1,p:!1},user:{},loading:!1,error:null,success:null}},methods:{register:function(t){var e;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:if(this.error=null,t.password===t.confirm_password){r.next=3;break}return r.abrupt("return",this.error="The password you entered don't match");case 3:return r.prev=3,this.loading=!0,r.next=7,regeneratorRuntime.awrap(o.createUserWithEmailAndPassword(t.email,t.password));case 7:return e=r.sent,e.user.updateProfile(t),r.prev=9,r.next=12,regeneratorRuntime.awrap(o.currentUser.sendEmailVerification());case 12:this.success="An email has been sent to ".concat(t.email," for verification. Please check your inbox and click on verification link. Thank you"),r.next=18;break;case 15:r.prev=15,r.t0=r["catch"](9),console.log(r.t0);case 18:r.next=23;break;case 20:r.prev=20,r.t1=r["catch"](3),this.error=r.t1.message.toLowerCase();case 23:this.loading=!1;case 24:case"end":return r.stop()}}),null,this,[[3,20],[9,15]])}}},c=a,l=r("2877"),u=r("6544"),d=r.n(u),h=r("0798"),p=r("8336"),f=r("b0af"),v=r("0e8f"),b=r("4bd4"),m=r("adda"),g=r("a722"),y=r("2fa4"),w=r("8654"),_=r("71d9"),x=r("2a7f"),O=Object(l["a"])(c,s,n,!1,null,null,null);e["default"]=O.exports;d()(O,{VAlert:h["a"],VBtn:p["a"],VCard:f["a"],VFlex:v["a"],VForm:b["a"],VImg:m["a"],VLayout:g["a"],VSpacer:y["a"],VTextField:w["a"],VToolbar:_["a"],VToolbarTitle:x["a"]})},afdd:function(t,e,r){"use strict";var s=r("8336");e["a"]=s["a"]}}]);
//# sourceMappingURL=chunk-ba18f9de.0b0382fe.js.map