(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10731258"],{"0060":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{staticClass:"pa-1"},[s("v-flex",{attrs:{xs12:"",md2:""}},[s("sidebar")],1),s("v-flex",[s("v-card",{attrs:{small:""}},[s("v-layout",{staticClass:"pa-1",attrs:{"justify-center":""}},[s("h1",{staticClass:"headline primary white--text pa-1"},[t._v("AGRIBOOK")])]),s("v-layout",{attrs:{row:""}},[s("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md6:""}},[s("v-img",{attrs:{src:r("2252")}})],1),s("v-flex",{staticClass:"pa-5",attrs:{xs12:"",md6:""}},[s("v-toolbar",{attrs:{flat:"",dense:""}},[s("v-toolbar-title",{staticClass:"title grey--text"},[t._v("Change Password")])],1),s("v-form",{ref:"form",staticClass:"px-3"},[s("v-card-text",[t.ErrorMsg?s("v-alert",{attrs:{text:"",dense:"",outlined:"",color:"deep-orange",type:"error"}},[t._v(" "+t._s(t.ErrorMsg)+" ")]):t._e(),s("div",{staticClass:"subtitle ma-2 primary--text"},[t._v(t._s(t.SuccessMsg))]),s("v-text-field",{ref:"oldPass",attrs:{dense:"",label:"Current Password*","append-icon":t.visible?"fa-eye-slash":"fa-eye",type:t.visible?"text":"password"},on:{"click:append":function(){return t.visible=!t.visible}},model:{value:t.oldPass,callback:function(e){t.oldPass=e},expression:"oldPass"}}),s("v-text-field",{ref:"newPass",attrs:{dense:"",label:"New Password*","append-icon":t.visible1?"fa-eye-slash":"fa-eye",type:t.visible1?"text":"password"},on:{"click:append":function(){return t.visible1=!t.visible1}},model:{value:t.newPass,callback:function(e){t.newPass=e},expression:"newPass"}}),s("v-text-field",{ref:"confirmPass",attrs:{dense:"",label:"Confirm Password*","append-icon":t.visible2?"fa-eye-slash":"fa-eye",type:t.visible2?"text":"password"},on:{"click:append":function(){return t.visible2=!t.visible2}},model:{value:t.confirmPass,callback:function(e){t.confirmPass=e},expression:"confirmPass"}}),s("small",[t._v("*indicates required field")])],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{staticClass:"mb-3",attrs:{text:"",color:"warning darken-1",to:"/Dashboard"}},[s("v-icon",{attrs:{left:""}},[t._v("fa-angle-left")]),s("span",[t._v("Close")])],1),s("v-btn",{staticClass:"mb-3 mr-2",attrs:{text:"",loading:t.loadingBtn,color:"success darken-1"},on:{click:t.save}},[s("v-icon",{attrs:{left:""}},[t._v("fa-check")]),s("span",[t._v("Save")])],1)],1)],1)],1)],1)],1)],1)],1)},i=[],a=(r("d3b7"),r("96cf"),r("5ea5")),n=r("dc59"),o=(r("ea7b"),{components:{sidebar:a["a"]},data:function(){return{ErrorMsg:"",SuccessMsg:"",newPass:"",oldPass:"",confirmPass:"",visible:!1,visible1:!1,visible2:!1,loadingBtn:!1}},computed:{user:function(){return this.$store.state.user}},methods:{save:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return this.loadingBtn=!0,e.next=3,regeneratorRuntime.awrap(n["a"].auth.EmailAuthProvider.credential(this.user.email,this.oldPass));case 3:return t=e.sent,e.prev=4,e.next=7,regeneratorRuntime.awrap(this.user.reauthenticateWithCredential(t));case 7:if(this.newPass!==this.oldPass){e.next=11;break}this.ErrorMsg="Please change your current password.",e.next=28;break;case 11:if(this.newPass===this.confirmPass){e.next=15;break}this.ErrorMsg="New Password does not match",e.next=28;break;case 15:return e.prev=15,e.next=18,regeneratorRuntime.awrap(this.user.updatePassword(this.newPass));case 18:this.SuccessMsg="Password successfully changed.",this.oldPass="",this.newPass="",this.confirmPass="",this.ErrorMsg="",e.next=28;break;case 25:e.prev=25,e.t0=e["catch"](15),this.ErrorMsg=e.t0.message;case 28:e.next=33;break;case 30:e.prev=30,e.t1=e["catch"](4),this.ErrorMsg=e.t1.message;case 33:this.loadingBtn=!1;case 34:case"end":return e.stop()}}),null,this,[[4,30],[15,25]])}}}),c=o,l=r("2877"),u=r("6544"),d=r.n(u),h=r("0798"),f=r("8336"),p=r("b0af"),v=r("99d9"),b=r("0e8f"),m=r("4bd4"),g=r("132d"),w=r("adda"),y=r("a722"),_=r("2fa4"),P=r("8654"),x=r("71d9"),O=r("2a7f"),C=Object(l["a"])(c,s,i,!1,null,null,null);e["default"]=C.exports;d()(C,{VAlert:h["a"],VBtn:f["a"],VCard:p["a"],VCardActions:v["a"],VCardText:v["c"],VFlex:b["a"],VForm:m["a"],VIcon:g["a"],VImg:w["a"],VLayout:y["a"],VSpacer:_["a"],VTextField:P["a"],VToolbar:x["a"],VToolbarTitle:O["a"]})},"0798":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("caad"),r("e439"),r("dbb4"),r("b64b"),r("159b");var s=r("ade3"),i=(r("0c18"),r("10d2")),a=r("afdd"),n=r("9d26"),o=r("f2e7"),c=r("7560"),l=r("2b0e"),u=l["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=r("58df"),h=r("d9bd");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(d["a"])(i["a"],o["a"],u).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(s["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(a["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(n["a"],{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(n["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=p({},i["a"].options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,r){},2252:function(t,e,r){t.exports=r.p+"img/authentication.68199a18.svg"},"4bd4":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("7db0"),r("4160"),r("caad"),r("e439"),r("dbb4"),r("b64b"),r("07ac"),r("2532"),r("159b");var s=r("ade3"),i=r("58df"),a=r("7e2b"),n=r("3206");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(i["a"])(a["a"],Object(n["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},s={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(s.valid=r(t)))})):s.valid=r(t),s},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},afdd:function(t,e,r){"use strict";var s=r("8336");e["a"]=s["a"]}}]);
//# sourceMappingURL=chunk-10731258.d39e7072.js.map