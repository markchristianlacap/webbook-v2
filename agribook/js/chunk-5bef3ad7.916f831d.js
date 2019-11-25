(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bef3ad7"],{1681:function(t,e,n){},"169a":function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("caad"),n("45fc"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("2532"),n("498a"),n("159b");var r=n("2fa7"),i=(n("368e"),n("4ad4")),o=n("b848"),a=n("75eb"),s=n("e707"),u=n("e4d3"),c=n("21be"),l=n("f2e7"),h=n("a293"),p=n("80d2"),f=n("bfc5"),d=n("58df"),v=n("d9bd");function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=Object(d["a"])(i["a"],o["a"],a["a"],s["a"],u["a"],c["a"],l["a"]);e["a"]=m.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(r["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r["a"])(t,"v-dialog--active",this.isActive),Object(r["a"])(t,"v-dialog--persistent",this.persistent),Object(r["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(r["a"])(t,"v-dialog--scrollable",this.scrollable),Object(r["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(v["d"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):s["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.activeZIndex>=this.getMaxZIndex()&&(this.isActive=!1)},onKeydown:function(t){if(t.keyCode===p["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}}}},render:function(t){var e=[],n={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}},style:{}};this.fullscreen||(n.style={maxWidth:"none"===this.maxWidth?void 0:Object(p["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["g"])(this.width)}),e.push(this.genActivator());var r=t("div",n,this.showLazyContent(this.getContentSlot()));return this.transition&&(r=t("transition",{props:{name:this.transition,origin:this.origin}},[r])),e.push(t("div",{class:this.contentClasses,attrs:b({role:"document",tabindex:this.isActive?0:void 0},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(f["a"],{props:{root:!0,light:this.light,dark:this.dark}},[r])])),t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},e)}})},"368e":function(t,e,n){},"3c93":function(t,e,n){},"4bd4":function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("7db0"),n("4160"),n("caad"),n("e439"),n("dbb4"),n("b64b"),n("07ac"),n("2532"),n("159b");var r=n("2fa7"),i=n("58df"),o=n("7e2b"),a=n("3206");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]=Object(i["a"])(o["a"],Object(a["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(r.valid=n(t)))})):r.valid=n(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:u({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"588e":function(t,e,n){"use strict";var r=n("c23d"),i=n.n(r),o=n("9ab4"),a="firebasestorage.googleapis.com",s="storageBucket",u=12e4,c=6e5,l=-9007199254740991,h=function(){function t(t,e){this.code_=f(t),this.message_="Firebase Storage: "+e,this.serverResponse_=null,this.name_="FirebaseError"}return t.prototype.codeProp=function(){return this.code},t.prototype.codeEquals=function(t){return f(t)===this.codeProp()},t.prototype.serverResponseProp=function(){return this.serverResponse_},t.prototype.setServerResponseProp=function(t){this.serverResponse_=t},Object.defineProperty(t.prototype,"name",{get:function(){return this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"code",{get:function(){return this.code_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"message",{get:function(){return this.message_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!0,configurable:!0}),t}(),p={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};function f(t){return"storage/"+t}function d(){var t="An unknown error occurred, please check the error payload for server response.";return new h(p.UNKNOWN,t)}function v(t){return new h(p.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function _(t){return new h(p.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function b(){var t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(p.UNAUTHENTICATED,t)}function m(t){return new h(p.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function y(){return new h(p.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function g(){return new h(p.CANCELED,"User canceled the upload/download.")}function w(t){return new h(p.INVALID_URL,"Invalid URL '"+t+"'.")}function O(t){return new h(p.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function R(){return new h(p.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+s+"' property when initializing the app?")}function E(){return new h(p.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function T(){return new h(p.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function k(){return new h(p.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function A(t,e,n){return new h(p.INVALID_ARGUMENT,"Invalid argument in `"+e+"` at index "+t+": "+n)}function N(t,e,n,r){var i,o;return t===e?(i=t,o=1===t?"argument":"arguments"):(i="between "+t+" and "+e,o="arguments"),new h(p.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+n+"`: Expected "+i+" "+o+", received "+r+".")}function S(){return new h(p.APP_DELETED,"The Firebase app was deleted.")}function C(t){return new h(p.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function x(t,e){return new h(p.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function U(t){throw new h(p.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var P={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function I(t){switch(t){case P.RAW:case P.BASE64:case P.BASE64URL:case P.DATA_URL:return;default:throw"Expected one of the event types: ["+P.RAW+", "+P.BASE64+", "+P.BASE64URL+", "+P.DATA_URL+"]."}}var L=function(){function t(t,e){this.data=t,this.contentType=e||null}return t}();function D(t,e){switch(t){case P.RAW:return new L(j(e));case P.BASE64:case P.BASE64URL:return new L(M(t,e));case P.DATA_URL:return new L(G(e),H(e))}throw d()}function j(t){for(var e=[],n=0;n<t.length;n++){var r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){var i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){var o=r,a=t.charCodeAt(++n);r=65536|(1023&o)<<10|1023&a,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function B(t){var e;try{e=decodeURIComponent(t)}catch(n){throw x(P.DATA_URL,"Malformed data URL.")}return j(e)}function M(t,e){switch(t){case P.BASE64:var n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){var i=n?"-":"_";throw x(t,"Invalid character '"+i+"' found: is it base64url encoded?")}break;case P.BASE64URL:var o=-1!==e.indexOf("+"),a=-1!==e.indexOf("/");if(o||a){i=o?"+":"/";throw x(t,"Invalid character '"+i+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}var s;try{s=atob(e)}catch(l){throw x(t,"Invalid character found")}for(var u=new Uint8Array(s.length),c=0;c<s.length;c++)u[c]=s.charCodeAt(c);return u}var W=function(){function t(t){this.base64=!1,this.contentType=null;var e=t.match(/^data:([^,]+)?,/);if(null===e)throw x(P.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var n=e[1]||null;null!=n&&(this.base64=F(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}return t}();function G(t){var e=new W(t);return e.base64?M(P.BASE64,e.rest):B(e.rest)}function H(t){var e=new W(t);return e.contentType}function F(t,e){var n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var q,z={STATE_CHANGED:"state_changed"},$={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},V={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function X(t){switch(t){case $.RUNNING:case $.PAUSING:case $.CANCELING:return V.RUNNING;case $.PAUSED:return V.PAUSED;case $.SUCCESS:return V.SUCCESS;case $.CANCELED:return V.CANCELED;case $.ERROR:return V.ERROR;default:return V.ERROR}}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */function K(t){return null!=t}function Z(t){return void 0!==t}function J(t){return"function"===typeof t}function Y(t){return"object"===typeof t}function Q(t){return Y(t)&&null!==t}function tt(t){return Y(t)&&!Array.isArray(t)}function et(t){return"string"===typeof t||t instanceof String}function nt(t){return rt(t)&&Number.isInteger(t)}function rt(t){return"number"===typeof t||t instanceof Number}function it(t){return ot()&&t instanceof Blob}function ot(){return"undefined"!==typeof Blob}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(q||(q={}));
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */
var at=function(){function t(){var t=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=q.NO_ERROR,this.sendPromise_=new Promise((function(e){t.xhr_.addEventListener("abort",(function(){t.errorCode_=q.ABORT,e(t)})),t.xhr_.addEventListener("error",(function(){t.errorCode_=q.NETWORK_ERROR,e(t)})),t.xhr_.addEventListener("load",(function(){e(t)}))}))}return t.prototype.send=function(t,e,n,r){if(this.sent_)throw U("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),K(r))for(var i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return K(n)?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_},t.prototype.getErrorCode=function(){if(!this.sent_)throw U("cannot .getErrorCode() before sending");return this.errorCode_},t.prototype.getStatus=function(){if(!this.sent_)throw U("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}},t.prototype.getResponseText=function(){if(!this.sent_)throw U("cannot .getResponseText() before sending");return this.xhr_.responseText},t.prototype.abort=function(){this.xhr_.abort()},t.prototype.getResponseHeader=function(t){return this.xhr_.getResponseHeader(t)},t.prototype.addUploadProgressListener=function(t){K(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",t)},t.prototype.removeUploadProgressListener=function(t){K(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",t)},t}(),st=function(){function t(){}return t.prototype.createXhrIo=function(){return new at},t}();
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */
function ut(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ct(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=ut();if(void 0!==n){for(var r=new n,i=0;i<t.length;i++)r.append(t[i]);return r.getBlob()}if(ot())return new Blob(t);throw Error("This browser doesn't seem to support creating Blobs")}function lt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var ht=function(){function t(t,e){var n=0,r="";it(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}return t.prototype.size=function(){return this.size_},t.prototype.type=function(){return this.type_},t.prototype.slice=function(e,n){if(it(this.data_)){var r=this.data_,i=lt(r,e,n);return null===i?null:new t(i)}var o=new Uint8Array(this.data_.buffer,e,n-e);return new t(o,!0)},t.getBlob=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(ot()){var r=e.map((function(e){return e instanceof t?e.data_:e}));return new t(ct.apply(null,r))}var i=e.map((function(t){return et(t)?D(P.RAW,t).data:t.data_})),o=0;i.forEach((function(t){o+=t.byteLength}));var a=new Uint8Array(o),s=0;return i.forEach((function(t){for(var e=0;e<t.length;e++)a[s++]=t[e]})),new t(a,!0)},t.prototype.uploadData=function(){return this.data_},t}(),pt=function(){function t(t,e){this.bucket=t,this.path_=e}return Object.defineProperty(t.prototype,"path",{get:function(){return this.path_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!0,configurable:!0}),t.prototype.fullServerUrl=function(){var t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)},t.prototype.bucketOnlyServerUrl=function(){var t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"},t.makeFromBucketSpec=function(e){var n;try{n=t.makeFromUrl(e)}catch(r){return new t(e,"")}if(""===n.path)return n;throw O(e)},t.makeFromUrl=function(e){var n=null,r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}var o="(/(.*))?$",s="(/([^?#]*).*)?$",u=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(t){t.path_=decodeURIComponent(t.path)}for(var h="v[A-Za-z0-9_]+",p=a.replace(/[.]/g,"\\."),f=new RegExp("^https?://"+p+"/"+h+"/b/"+r+"/o"+s,"i"),d={bucket:1,path:3},v=[{regex:u,indices:c,postModify:i},{regex:f,indices:d,postModify:l}],_=0;_<v.length;_++){var b=v[_],m=b.regex.exec(e);if(m){var y=m[b.indices.bucket],g=m[b.indices.path];g||(g=""),n=new t(y,g),b.postModify(n);break}}if(null==n)throw w(e);return n},t}();
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */
function ft(t){var e;try{e=JSON.parse(t)}catch(n){return null}return tt(e)?e:null}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */function dt(t){if(0===t.length)return null;var e=t.lastIndexOf("/");if(-1===e)return"";var n=t.slice(0,e);return n}function vt(t,e){var n=e.split("/").filter((function(t){return t.length>0})).join("/");return 0===t.length?n:t+"/"+n}function _t(t){var e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */function bt(t){return"https://"+a+"/v0"+t}function mt(t){var e=encodeURIComponent,n="?";for(var r in t)if(t.hasOwnProperty(r)){var i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */function yt(t,e){return e}var gt=function(){function t(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||yt}return t}(),wt=null;function Ot(t){return!et(t)||t.length<2?t:_t(t)}function Rt(){if(wt)return wt;var t=[];function e(t,e){return Ot(e)}t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));var n=new gt("name");function r(t,e){return K(e)?Number(e):e}n.xform=e,t.push(n);var i=new gt("size");return i.xform=r,t.push(i),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),wt=t,wt}function Et(t,e){function n(){var n=t["bucket"],r=t["fullPath"],i=new pt(n,r);return e.makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Tt(t,e,n){for(var r={type:"file"},i=n.length,o=0;o<i;o++){var a=n[o];r[a.local]=a.xform(r,e[a.server])}return Et(r,t),r}function kt(t,e,n){var r=ft(e);if(null===r)return null;var i=r;return Tt(t,i,n)}function At(t,e){var n=ft(e);if(null===n)return null;if(!et(n["downloadTokens"]))return null;var r=n["downloadTokens"];if(0===r.length)return null;var i=encodeURIComponent,o=r.split(","),a=o.map((function(e){var n=t["bucket"],r=t["fullPath"],o="/b/"+i(n)+"/o/"+i(r),a=bt(o),s=mt({alt:"media",token:e});return a+s}));return a[0]}function Nt(t,e){for(var n={},r=e.length,i=0;i<r;i++){var o=e[i];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}function St(t){if(!Y(t)||!t)throw"Expected Metadata object.";for(var e in t)if(t.hasOwnProperty(e)){var n=t[e];if("customMetadata"===e){if(!Y(n))throw"Expected object for 'customMetadata' mapping."}else if(Q(n))throw"Mapping for '"+e+"' cannot be an object."}}
/**
 * @license
 * Copyright 2019 Google Inc.
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
 */var Ct="maxResults",xt=1e3,Ut="pageToken",Pt="prefixes",It="items";function Lt(t,e){var n={prefixes:[],items:[],nextPageToken:e["nextPageToken"]},r=t.bucket();if(null===r)throw R();if(e[Pt])for(var i=0,o=e[Pt];i<o.length;i++){var a=o[i],s=a.replace(/\/$/,""),u=t.makeStorageReference(new pt(r,s));n.prefixes.push(u)}if(e[It])for(var c=0,l=e[It];c<l.length;c++){var h=l[c];u=t.makeStorageReference(new pt(r,h["name"]));n.items.push(u)}return n}function Dt(t,e){var n=ft(e);if(null===n)return null;var r=n;return Lt(t,r)}function jt(t){if(!Y(t)||!t)throw"Expected ListOptions object.";for(var e in t)if(e===Ct){if(!nt(t[Ct])||t[Ct]<=0)throw"Expected maxResults to be a positive number.";if(t[Ct]>1e3)throw"Expected maxResults to be less than or equal to "+xt+"."}else{if(e!==Ut)throw"Unknown option: "+e;if(t[Ut]&&!et(t[Ut]))throw"Expected pageToken to be string."}}var Bt=function(){function t(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return t}();
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */function Mt(t){if(!t)throw d()}function Wt(t,e){function n(n,r){var i=kt(t,r,e);return Mt(null!==i),i}return n}function Gt(t){function e(e,n){var r=Dt(t,n);return Mt(null!==r),r}return e}function Ht(t,e){function n(n,r){var i=kt(t,r,e);return Mt(null!==i),At(i,r)}return n}function Ft(t){function e(e,n){var r;return r=401===e.getStatus()?b():402===e.getStatus()?_(t.bucket):403===e.getStatus()?m(t.path):n,r.setServerResponseProp(n.serverResponseProp()),r}return e}function qt(t){var e=Ft(t);function n(n,r){var i=e(n,r);return 404===n.getStatus()&&(i=v(t.path)),i.setServerResponseProp(r.serverResponseProp()),i}return n}function zt(t,e,n){var r=e.fullServerUrl(),i=bt(r),o="GET",a=t.maxOperationRetryTime(),s=new Bt(i,o,Wt(t,n),a);return s.errorHandler=qt(e),s}function $t(t,e,n,r,i){var o={};e.isRoot?o["prefix"]="":o["prefix"]=e.path+"/",n&&n.length>0&&(o["delimiter"]=n),r&&(o["pageToken"]=r),i&&(o["maxResults"]=i);var a=e.bucketOnlyServerUrl(),s=bt(a),u="GET",c=t.maxOperationRetryTime(),l=new Bt(s,u,Gt(t),c);return l.urlParams=o,l.errorHandler=Ft(e),l}function Vt(t,e,n){var r=e.fullServerUrl(),i=bt(r),o="GET",a=t.maxOperationRetryTime(),s=new Bt(i,o,Ht(t,n),a);return s.errorHandler=qt(e),s}function Xt(t,e,n,r){var i=e.fullServerUrl(),o=bt(i),a="PATCH",s=Nt(n,r),u={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime(),l=new Bt(o,a,Wt(t,r),c);return l.headers=u,l.body=s,l.errorHandler=qt(e),l}function Kt(t,e){var n=e.fullServerUrl(),r=bt(n),i="DELETE",o=t.maxOperationRetryTime();function a(t,e){}var s=new Bt(r,i,a,o);return s.successCodes=[200,204],s.errorHandler=qt(e),s}function Zt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Jt(t,e,n){var r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=Zt(null,e)),r}function Yt(t,e,n,r,i){var o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function s(){for(var t="",e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}var u=s();a["Content-Type"]="multipart/related; boundary="+u;var c=Jt(e,r,i),l=Nt(c,n),h="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+u+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",p="\r\n--"+u+"--",f=ht.getBlob(h,r,p);if(null===f)throw E();var d={name:c["fullPath"]},v=bt(o),_="POST",b=t.maxUploadRetryTime(),m=new Bt(v,_,Wt(t,n),b);return m.urlParams=d,m.headers=a,m.body=f.uploadData(),m.errorHandler=Ft(e),m}var Qt=function(){function t(t,e,n,r){this.current=t,this.total=e,this.finalized=!!n,this.metadata=r||null}return t}();function te(t,e){var n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(i){Mt(!1)}var r=e||["active"];return Mt(!!n&&-1!==r.indexOf(n)),n}function ee(t,e,n,r,i){var o=e.bucketOnlyServerUrl(),a=Jt(e,r,i),s={name:a["fullPath"]},u=bt(o),c="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":r.size(),"X-Goog-Upload-Header-Content-Type":a["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Nt(a,n),p=t.maxUploadRetryTime();function f(t){var e;te(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){Mt(!1)}return Mt(et(e)),e}var d=new Bt(u,c,f,p);return d.urlParams=s,d.headers=l,d.body=h,d.errorHandler=Ft(e),d}function ne(t,e,n,r){var i={"X-Goog-Upload-Command":"query"};function o(t){var e=te(t,["active","final"]),n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(o){Mt(!1)}n||Mt(!1);var i=Number(n);return Mt(!isNaN(i)),new Qt(i,r.size(),"final"===e)}var a="POST",s=t.maxUploadRetryTime(),u=new Bt(n,a,o,s);return u.headers=i,u.errorHandler=Ft(e),u}var re=262144;function ie(t,e,n,r,i,o,a,s){var u=new Qt(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw T();var c=u.total-u.current,l=c;i>0&&(l=Math.min(l,i));var h=u.current,p=h+l,f=l===c?"upload, finalize":"upload",d={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":u.current},v=r.slice(h,p);if(null===v)throw E();function _(t,n){var i,a=te(t,["active","final"]),s=u.current+l,c=r.size();return i="final"===a?Wt(e,o)(t,n):null,new Qt(s,c,"final"===a,i)}var b="POST",m=e.maxUploadRetryTime(),y=new Bt(n,b,_,m);return y.headers=d,y.body=v.uploadData(),y.progressCallback=s||null,y.errorHandler=Ft(t),y}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var oe=function(){function t(t,e,n){var r=J(t)||K(e)||K(n);if(r)this.next=t,this.error=e||null,this.complete=n||null;else{var i=t;this.next=i.next||null,this.error=i.error||null,this.complete=i.complete||null}}return t}(),ae=function(){function t(t,e,n,r,i,o){this.bytesTransferred=t,this.totalBytes=e,this.state=n,this.metadata=r,this.task=i,this.ref=o}return t}();
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */
function se(t,e,n){for(var r=e.length,i=e.length,o=0;o<e.length;o++)if(e[o].optional){r=o;break}var a=r<=n.length&&n.length<=i;if(!a)throw N(r,i,t,n.length);for(o=0;o<n.length;o++)try{e[o].validator(n[o])}catch(s){throw s instanceof Error?A(o,t,s.message):A(o,t,s)}}var ue=function(){function t(t,e){var n=this;this.validator=function(e){n.optional&&!Z(e)||t(e)},this.optional=!!e}return t}();function ce(t,e){return function(n){t(n),e(n)}}function le(t,e){function n(t){if(!et(t))throw"Expected string."}var r;return r=t?ce(n,t):n,new ue(r,e)}function he(){function t(t){var e=t instanceof Uint8Array||t instanceof ArrayBuffer||ot()&&t instanceof Blob;if(!e)throw"Expected Blob or File."}return new ue(t)}function pe(t){return new ue(St,t)}function fe(t){return new ue(jt,t)}function de(){function t(t){var e=rt(t)&&t>=0;if(!e)throw"Expected a number 0 or greater."}return new ue(t)}function ve(t,e){function n(e){var n=null===e||K(e)&&e instanceof Object;if(!n)throw"Expected an Object.";void 0!==t&&null!==t&&t(e)}return new ue(n,e)}function _e(t){function e(t){var e=null===t||J(t);if(!e)throw"Expected a Function."}return new ue(e,t)}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */function be(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];Promise.resolve().then((function(){return t.apply(void 0,e)}))}}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var me=function(){function t(t,e,n,r,i,o){var a=this;void 0===o&&(o=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=t,this.authWrapper_=e,this.location_=n,this.blob_=i,this.metadata_=o,this.mappings_=r,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=$.RUNNING,this.errorHandler_=function(t){a.request_=null,a.chunkMultiplier_=1,t.codeEquals(p.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=t,a.transition_($.ERROR))},this.metadataErrorHandler_=function(t){a.request_=null,t.codeEquals(p.CANCELED)?a.completeTransitions_():(a.error_=t,a.transition_($.ERROR))},this.promise_=new Promise((function(t,e){a.resolve_=t,a.reject_=e,a.start_()})),this.promise_.then(null,(function(){}))}return t.prototype.makeProgressCallback_=function(){var t=this,e=this.transferred_;return function(n){return t.updateProgress_(e+n)}},t.prototype.shouldDoResumable_=function(t){return t.size()>262144},t.prototype.start_=function(){this.state_===$.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},t.prototype.resolveToken_=function(t){var e=this;this.authWrapper_.getAuthToken().then((function(n){switch(e.state_){case $.RUNNING:t(n);break;case $.CANCELING:e.transition_($.CANCELED);break;case $.PAUSING:e.transition_($.PAUSED);break}}))},t.prototype.createResumable_=function(){var t=this;this.resolveToken_((function(e){var n=ee(t.authWrapper_,t.location_,t.mappings_,t.blob_,t.metadata_),r=t.authWrapper_.makeRequest(n,e);t.request_=r,r.getPromise().then((function(e){t.request_=null,t.uploadUrl_=e,t.needToFetchStatus_=!1,t.completeTransitions_()}),t.errorHandler_)}))},t.prototype.fetchStatus_=function(){var t=this,e=this.uploadUrl_;this.resolveToken_((function(n){var r=ne(t.authWrapper_,t.location_,e,t.blob_),i=t.authWrapper_.makeRequest(r,n);t.request_=i,i.getPromise().then((function(e){e=e,t.request_=null,t.updateProgress_(e.current),t.needToFetchStatus_=!1,e.finalized&&(t.needToFetchMetadata_=!0),t.completeTransitions_()}),t.errorHandler_)}))},t.prototype.continueUpload_=function(){var t=this,e=re*this.chunkMultiplier_,n=new Qt(this.transferred_,this.blob_.size()),r=this.uploadUrl_;this.resolveToken_((function(i){var o;try{o=ie(t.location_,t.authWrapper_,r,t.blob_,e,t.mappings_,n,t.makeProgressCallback_())}catch(s){return t.error_=s,void t.transition_($.ERROR)}var a=t.authWrapper_.makeRequest(o,i);t.request_=a,a.getPromise().then((function(e){t.increaseMultiplier_(),t.request_=null,t.updateProgress_(e.current),e.finalized?(t.metadata_=e.metadata,t.transition_($.SUCCESS)):t.completeTransitions_()}),t.errorHandler_)}))},t.prototype.increaseMultiplier_=function(){var t=re*this.chunkMultiplier_;t<33554432&&(this.chunkMultiplier_*=2)},t.prototype.fetchMetadata_=function(){var t=this;this.resolveToken_((function(e){var n=zt(t.authWrapper_,t.location_,t.mappings_),r=t.authWrapper_.makeRequest(n,e);t.request_=r,r.getPromise().then((function(e){t.request_=null,t.metadata_=e,t.transition_($.SUCCESS)}),t.metadataErrorHandler_)}))},t.prototype.oneShotUpload_=function(){var t=this;this.resolveToken_((function(e){var n=Yt(t.authWrapper_,t.location_,t.mappings_,t.blob_,t.metadata_),r=t.authWrapper_.makeRequest(n,e);t.request_=r,r.getPromise().then((function(e){t.request_=null,t.metadata_=e,t.updateProgress_(t.blob_.size()),t.transition_($.SUCCESS)}),t.errorHandler_)}))},t.prototype.updateProgress_=function(t){var e=this.transferred_;this.transferred_=t,this.transferred_!==e&&this.notifyObservers_()},t.prototype.transition_=function(t){if(this.state_!==t)switch(t){case $.CANCELING:this.state_=t,null!==this.request_&&this.request_.cancel();break;case $.PAUSING:this.state_=t,null!==this.request_&&this.request_.cancel();break;case $.RUNNING:var e=this.state_===$.PAUSED;this.state_=t,e&&(this.notifyObservers_(),this.start_());break;case $.PAUSED:this.state_=t,this.notifyObservers_();break;case $.CANCELED:this.error_=g(),this.state_=t,this.notifyObservers_();break;case $.ERROR:this.state_=t,this.notifyObservers_();break;case $.SUCCESS:this.state_=t,this.notifyObservers_();break}},t.prototype.completeTransitions_=function(){switch(this.state_){case $.PAUSING:this.transition_($.PAUSED);break;case $.CANCELING:this.transition_($.CANCELED);break;case $.RUNNING:this.start_();break}},Object.defineProperty(t.prototype,"snapshot",{get:function(){var t=X(this.state_);return new ae(this.transferred_,this.blob_.size(),t,this.metadata_,this,this.ref_)},enumerable:!0,configurable:!0}),t.prototype.on=function(t,e,n,r){function i(){if(t!==z.STATE_CHANGED)throw"Expected one of the event types: ["+z.STATE_CHANGED+"]."}var o="Expected a function or an Object with one of `next`, `error`, `complete` properties.",a=_e(!0).validator,s=ve(null,!0).validator;function u(t){try{return void a(t)}catch(n){}try{s(t);var e=Z(t["next"])||Z(t["error"])||Z(t["complete"]);if(!e)throw"";return}catch(n){throw o}}var c=[le(i),ve(u,!0),_e(!0),_e(!0)];se("on",c,arguments);var l=this;function h(t){function e(e,n,i){null!==t&&se("on",t,arguments);var o=new oe(e,n,r);return l.addObserver_(o),function(){l.removeObserver_(o)}}return e}function p(t){if(null===t)throw o;u(t)}var f=[ve(p),_e(!0),_e(!0)],d=!(Z(e)||Z(n)||Z(r));return d?h(f):h(null)(e,n,r)},t.prototype.then=function(t,e){return this.promise_.then(t,e)},t.prototype.catch=function(t){return this.then(null,t)},t.prototype.addObserver_=function(t){this.observers_.push(t),this.notifyObserver_(t)},t.prototype.removeObserver_=function(t){var e=this.observers_.indexOf(t);-1!==e&&this.observers_.splice(e,1)},t.prototype.notifyObservers_=function(){var t=this;this.finishPromise_();var e=this.observers_.slice();e.forEach((function(e){t.notifyObserver_(e)}))},t.prototype.finishPromise_=function(){if(null!==this.resolve_){var t=!0;switch(X(this.state_)){case V.SUCCESS:be(this.resolve_.bind(null,this.snapshot))();break;case V.CANCELED:case V.ERROR:var e=this.reject_;be(e.bind(null,this.error_))();break;default:t=!1;break}t&&(this.resolve_=null,this.reject_=null)}},t.prototype.notifyObserver_=function(t){var e=X(this.state_);switch(e){case V.RUNNING:case V.PAUSED:t.next&&be(t.next.bind(t,this.snapshot))();break;case V.SUCCESS:t.complete&&be(t.complete.bind(t))();break;case V.CANCELED:case V.ERROR:t.error&&be(t.error.bind(t,this.error_))();break;default:t.error&&be(t.error.bind(t,this.error_))()}},t.prototype.resume=function(){se("resume",[],arguments);var t=this.state_===$.PAUSED||this.state_===$.PAUSING;return t&&this.transition_($.RUNNING),t},t.prototype.pause=function(){se("pause",[],arguments);var t=this.state_===$.RUNNING;return t&&this.transition_($.PAUSING),t},t.prototype.cancel=function(){se("cancel",[],arguments);var t=this.state_===$.RUNNING||this.state_===$.PAUSING;return t&&this.transition_($.CANCELING),t},t}(),ye=function(){function t(t,e){this.authWrapper=t,this.location=e instanceof pt?e:pt.makeFromUrl(e)}return t.prototype.toString=function(){return se("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},t.prototype.newRef=function(e,n){return new t(e,n)},t.prototype.mappings=function(){return Rt()},t.prototype.child=function(t){se("child",[le()],arguments);var e=vt(this.location.path,t),n=new pt(this.location.bucket,e);return this.newRef(this.authWrapper,n)},Object.defineProperty(t.prototype,"parent",{get:function(){var t=dt(this.location.path);if(null===t)return null;var e=new pt(this.location.bucket,t);return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){var t=new pt(this.location.bucket,"");return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return _t(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),t.prototype.put=function(t,e){return void 0===e&&(e=null),se("put",[he(),pe(!0)],arguments),this.throwIfRoot_("put"),new me(this,this.authWrapper,this.location,this.mappings(),new ht(t),e)},t.prototype.putString=function(t,e,n){void 0===e&&(e=P.RAW),se("putString",[le(),le(I,!0),pe(!0)],arguments),this.throwIfRoot_("putString");var r=D(e,t),i=Object.assign({},n);return!K(i["contentType"])&&K(r.contentType)&&(i["contentType"]=r.contentType),new me(this,this.authWrapper,this.location,this.mappings(),new ht(r.data,!0),i)},t.prototype.delete=function(){var t=this;return se("delete",[],arguments),this.throwIfRoot_("delete"),this.authWrapper.getAuthToken().then((function(e){var n=Kt(t.authWrapper,t.location);return t.authWrapper.makeRequest(n,e).getPromise()}))},t.prototype.listAll=function(){se("listAll",[],arguments);var t={prefixes:[],items:[]};return this.listAllHelper(t).then((function(){return t}))},t.prototype.listAllHelper=function(t,e){return Object(o["__awaiter"])(this,void 0,void 0,(function(){var n,r,i,a;return Object(o["__generator"])(this,(function(o){switch(o.label){case 0:return n={pageToken:e},[4,this.list(n)];case 1:return r=o.sent(),(i=t.prefixes).push.apply(i,r.prefixes),(a=t.items).push.apply(a,r.items),null==r.nextPageToken?[3,3]:[4,this.listAllHelper(t,r.nextPageToken)];case 2:o.sent(),o.label=3;case 3:return[2]}}))}))},t.prototype.list=function(t){se("list",[fe(!0)],arguments);var e=this;return this.authWrapper.getAuthToken().then((function(n){var r=t||{},i=$t(e.authWrapper,e.location,"/",r.pageToken,r.maxResults);return e.authWrapper.makeRequest(i,n).getPromise()}))},t.prototype.getMetadata=function(){var t=this;return se("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.authWrapper.getAuthToken().then((function(e){var n=zt(t.authWrapper,t.location,t.mappings());return t.authWrapper.makeRequest(n,e).getPromise()}))},t.prototype.updateMetadata=function(t){var e=this;return se("updateMetadata",[pe()],arguments),this.throwIfRoot_("updateMetadata"),this.authWrapper.getAuthToken().then((function(n){var r=Xt(e.authWrapper,e.location,t,e.mappings());return e.authWrapper.makeRequest(r,n).getPromise()}))},t.prototype.getDownloadURL=function(){var t=this;return se("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.authWrapper.getAuthToken().then((function(e){var n=Vt(t.authWrapper,t.location,t.mappings());return t.authWrapper.makeRequest(n,e).getPromise().then((function(t){if(null===t)throw k();return t}))}))},t.prototype.throwIfRoot_=function(t){if(""===this.location.path)throw C(t)},t}(),ge=function(){function t(t){this.promise_=Promise.reject(t)}return t.prototype.getPromise=function(){return this.promise_},t.prototype.cancel=function(t){},t}(),we=function(){function t(){this.map=new Map,this.id=l}return t.prototype.addRequest=function(t){var e=this,n=this.id;this.id++,this.map.set(n,t),t.getPromise().then((function(){return e.map.delete(n)}),(function(){return e.map.delete(n)}))},t.prototype.clear=function(){this.map.forEach((function(t){t&&t.cancel(!0)})),this.map.clear()},t}(),Oe=function(){function t(e,n,r,i,o){if(this.bucket_=null,this.deleted_=!1,this.app_=e,null!==this.app_){var a=this.app_.options;K(a)&&(this.bucket_=t.extractBucket_(a))}this.storageRefMaker_=n,this.requestMaker_=r,this.pool_=o,this.service_=i,this.maxOperationRetryTime_=u,this.maxUploadRetryTime_=c,this.requestMap_=new we}return t.extractBucket_=function(t){var e=t[s]||null;if(null==e)return null;var n=pt.makeFromBucketSpec(e);return n.bucket},t.prototype.getAuthToken=function(){return null!==this.app_&&K(this.app_.INTERNAL)&&K(this.app_.INTERNAL.getToken)?this.app_.INTERNAL.getToken().then((function(t){return null!==t?t.accessToken:null}),(function(){return null})):Promise.resolve(null)},t.prototype.bucket=function(){if(this.deleted_)throw S();return this.bucket_},t.prototype.service=function(){return this.service_},t.prototype.makeStorageReference=function(t){return this.storageRefMaker_(this,t)},t.prototype.makeRequest=function(t,e){if(this.deleted_)return new ge(S());var n=this.requestMaker_(t,e,this.pool_);return this.requestMap_.addRequest(n),n},t.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},t.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},t.prototype.setMaxUploadRetryTime=function(t){this.maxUploadRetryTime_=t},t.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},t.prototype.setMaxOperationRetryTime=function(t){this.maxOperationRetryTime_=t},t}();
/**
 * @license
 * Copyright 2019 Google Inc.
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
 */
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */
function Re(t,e,n){var r=1,i=null,a=!1,s=0;function u(){return 2===s}var c=!1;function l(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];c||(c=!0,e.apply(null,t))}function h(e){i=setTimeout((function(){i=null,t(p,u())}),e)}function p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!c)if(t)l.call.apply(l,Object(o["__spreadArrays"])([null,t],e));else{var i,p=u()||a;if(p)l.call.apply(l,Object(o["__spreadArrays"])([null,t],e));else r<64&&(r*=2),1===s?(s=2,i=0):i=1e3*(r+Math.random()),h(i)}}var f=!1;function d(t){f||(f=!0,c||(null!==i?(t||(s=2),clearTimeout(i),h(0)):t||(s=1)))}return h(0),setTimeout((function(){a=!0,d(!0)}),n),d}function Ee(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var Te=function(){function t(t,e,n,r,i,o,a,s,u,c,l){var h=this;this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=o.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise((function(t,e){h.resolve_=t,h.reject_=e,h.start_()}))}return t.prototype.start_=function(){var t=this;function e(e,n){if(n)e(!1,new ke(!1,null,!0));else{var r=t.pool_.createXhrIo();t.pendingXhr_=r,null!==t.progressCallback_&&r.addUploadProgressListener(i),r.send(t.url_,t.method_,t.body_,t.headers_).then((function(n){null!==t.progressCallback_&&n.removeUploadProgressListener(i),t.pendingXhr_=null,n=n;var r=n.getErrorCode()===q.NO_ERROR,o=n.getStatus();if(r&&!t.isRetryStatusCode_(o)){var a=-1!==t.successCodes_.indexOf(o);e(!0,new ke(a,n))}else{var s=n.getErrorCode()===q.ABORT;e(!1,new ke(!1,null,s))}}))}function i(e){var n=e.loaded,r=e.lengthComputable?e.total:-1;null!==t.progressCallback_&&t.progressCallback_(n,r)}}function n(e,n){var r=t.resolve_,i=t.reject_,o=n.xhr;if(n.wasSuccessCode)try{var a=t.callback_(o,o.getResponseText());Z(a)?r(a):r()}catch(u){i(u)}else if(null!==o){var s=d();s.setServerResponseProp(o.getResponseText()),t.errorCallback_?i(t.errorCallback_(o,s)):i(s)}else if(n.canceled){s=t.appDelete_?S():g();i(s)}else{s=y();i(s)}}this.canceled_?n(!1,new ke(!1,null,!0)):this.backoffId_=Re(e,n,this.timeout_)},t.prototype.getPromise=function(){return this.promise_},t.prototype.cancel=function(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&Ee(this.backoffId_),null!==this.pendingXhr_&&this.pendingXhr_.abort()},t.prototype.isRetryStatusCode_=function(t){var e=t>=500&&t<600,n=[408,429],r=-1!==n.indexOf(t),i=-1!==this.additionalRetryCodes_.indexOf(t);return e||r||i},t}(),ke=function(){function t(t,e,n){this.wasSuccessCode=t,this.xhr=e,this.canceled=!!n}return t}();function Ae(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function Ne(t){var e="undefined"!==typeof i.a?i.a.SDK_VERSION:"AppManager";t["X-Firebase-Storage-Version"]="webjs/"+e}function Se(t,e,n){var r=mt(t.urlParams),i=t.url+r,o=Object.assign({},t.headers);return Ae(o,e),Ne(o),new Te(i,t.method,o,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,n)}
/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var Ce=function(){function t(t,e,n){function r(t,e){return new ye(t,e)}if(this.bucket_=null,this.authWrapper_=new Oe(t,r,Se,this,e),this.app_=t,null!=n)this.bucket_=pt.makeFromBucketSpec(n);else{var i=this.authWrapper_.bucket();null!=i&&(this.bucket_=new pt(i,""))}this.internals_=new xe(this)}return t.prototype.ref=function(t){function e(t){if("string"!==typeof t)throw"Path is not a string.";if(/^[A-Za-z]+:\/\//.test(t))throw"Expected child path but got a URL, use refFromURL instead."}if(se("ref",[le(e,!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var n=new ye(this.authWrapper_,this.bucket_);return null!=t?n.child(t):n},t.prototype.refFromURL=function(t){function e(t){if("string"!==typeof t)throw"Path is not a string.";if(!/^[A-Za-z]+:\/\//.test(t))throw"Expected full URL but got a child path, use ref instead.";try{pt.makeFromUrl(t)}catch(e){throw"Expected valid full URL but got an invalid one."}}return se("refFromURL",[le(e,!1)],arguments),new ye(this.authWrapper_,t)},Object.defineProperty(t.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!0,configurable:!0}),t.prototype.setMaxUploadRetryTime=function(t){se("setMaxUploadRetryTime",[de()],arguments),this.authWrapper_.setMaxUploadRetryTime(t)},t.prototype.setMaxOperationRetryTime=function(t){se("setMaxOperationRetryTime",[de()],arguments),this.authWrapper_.setMaxOperationRetryTime(t)},Object.defineProperty(t.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!0,configurable:!0}),t}(),xe=function(){function t(t){this.service_=t}return t.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),Promise.resolve()},t}(),Ue="storage";function Pe(t,e,n){return new Ce(t,new st,n)}function Ie(t){var e={TaskState:V,TaskEvent:z,StringFormat:P,Storage:Ce,Reference:ye};t.INTERNAL.registerService(Ue,Pe,e,void 0,!0)}Ie(i.a)},a844:function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("acd8"),n("e25e"),n("159b");var r=n("2fa7"),i=(n("1681"),n("8654")),o=n("58df");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=Object(o["a"])(i["a"]);e["a"]=u.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return s({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},baa5:function(t,e,n){var r=n("23e7"),i=n("e58c");r({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},e58c:function(t,e,n){"use strict";var r=n("fc6a"),i=n("a691"),o=n("50c4"),a=n("b301"),s=Math.min,u=[].lastIndexOf,c=!!u&&1/[1].lastIndexOf(1,-0)<0,l=a("lastIndexOf");t.exports=c||l?function(t){if(c)return u.apply(this,arguments)||0;var e=r(this),n=o(e.length),a=n-1;for(arguments.length>1&&(a=s(a,i(arguments[1]))),a<0&&(a=n+a);a>=0;a--)if(a in e&&e[a]===t)return a||0;return-1}:u},e707:function(t,e,n){"use strict";n("caad"),n("a9e3"),n("2532"),n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("2fa7"),i=(n("3c93"),n("a9ad")),o=n("7560"),a=n("f2e7"),s=n("58df");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=Object(s["a"])(i["a"],o["a"],a["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return c({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),h=l,p=n("80d2"),f=n("2b0e");e["a"]=f["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new h({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(p["u"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(p["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[p["x"].up,p["x"].pageup],n=[p["x"].down,p["x"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!n.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),n=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var r=this.$refs.dialog,i=window.getSelection().anchorNode;return!(r&&this.hasScrollbar(r)&&this.isInside(i,r))||this.shouldScroll(r,n)}for(var o=0;o<e.length;o++){var a=e[o];if(a===document)return!0;if(a===document.documentElement)return!0;if(a===this.$refs.content)return!0;if(this.hasScrollbar(a))return this.shouldScroll(a,n)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],n=t.target;while(n){if(e.push(n),"HTML"===n.tagName)return e.push(document),e.push(window),e;n=n.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(p["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=chunk-5bef3ad7.916f831d.js.map