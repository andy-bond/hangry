(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{r8uj:function(t,e,n){"use strict";n.r(e),n.d(e,"HangryModule",(function(){return rt}));var i=n("ofXK"),a=n("fXoL"),s=n("cp0P"),r=n("Cfvw"),o=n("lJxs");function l(t){return null==t||0===t.length}function c(t){return null!=t&&"number"==typeof t.length}const h=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class u{static min(t){return e=>{if(l(e.value)||l(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}static max(t){return e=>{if(l(e.value)||l(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}static required(t){return l(t.value)?{required:!0}:null}static requiredTrue(t){return!0===t.value?null:{required:!0}}static email(t){return l(t.value)||h.test(t.value)?null:{email:!0}}static minLength(t){return e=>l(e.value)||!c(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}static maxLength(t){return e=>c(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}static pattern(t){if(!t)return u.nullValidator;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(l(t.value))return null;const i=t.value;return e.test(i)?null:{pattern:{requiredPattern:n,actualValue:i}}}}static nullValidator(t){return null}static compose(t){if(!t)return null;const e=t.filter(d);return 0==e.length?null:function(t){return m(g(t,e))}}static composeAsync(t){if(!t)return null;const e=t.filter(d);return 0==e.length?null:function(t){const n=g(t,e).map(p);return Object(s.a)(n).pipe(Object(o.a)(m))}}}function d(t){return null!=t}function p(t){const e=Object(a.rb)(t)?Object(r.a)(t):t;return Object(a.qb)(e),e}function m(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function g(t,e){return e.map(e=>e(t))}function f(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}let _=(()=>{class t{constructor(){this._accessors=[]}add(t,e){this._accessors.push([t,e])}remove(t){for(let e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===t)return void this._accessors.splice(e,1)}select(t){this._accessors.forEach(e=>{this._isSameGroup(e,t)&&e[1]!==t&&e[1].fireUncheck(t.value)})}_isSameGroup(t,e){return!!t[0].control&&t[0]._parent===e._control._parent&&t[1].name===e.name}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})();function y(t){return(V(t)?t.validators:t)||null}function b(t){return Array.isArray(t)?null!=(e=t)?u.compose(f(e)):null:t||null;var e}function v(t,e){return(V(e)?e.asyncValidators:t)||null}function C(t){return Array.isArray(t)?null!=(e=t)?u.composeAsync(f(e)):null:t||null;var e}function V(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class A{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=b(this._rawValidators),this._composedAsyncValidatorFn=C(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return"VALID"===this.status}get invalid(){return"INVALID"===this.status}get pending(){return"PENDING"==this.status}get disabled(){return"DISABLED"===this.status}get enabled(){return"DISABLED"!==this.status}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=b(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=C(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status="PENDING",!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status="DISABLED",this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status="VALID",this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),"VALID"!==this.status&&"PENDING"!==this.status||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?"DISABLED":"VALID"}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status="PENDING",this._hasOwnPendingAsyncValidator=!0;const e=p(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let i=t;return e.forEach(t=>{i=i instanceof O?i.controls.hasOwnProperty(t)?i.controls[t]:null:i instanceof E&&i.at(t)||null}),i}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new a.n,this.statusChanges=new a.n}_calculateStatus(){return this._allControlsDisabled()?"DISABLED":this.errors?"INVALID":this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus("PENDING")?"PENDING":this._anyControlsHaveStatus("INVALID")?"INVALID":"VALID"}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){V(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&this._parent&&this._parent.dirty&&!this._parent._anyControlsDirty()}}class x extends A{constructor(t=null,e,n){super(y(e),v(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1}),this._initObservables()}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_clearChangeFns(){this._onChange=[],this._onDisabledChange=[],this._onCollectionChange=()=>{}}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class O extends A{constructor(t,e,n){super(y(e),v(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t={},e={}){this._forEachChild((n,i)=>{n.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof x?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>t(this.controls[e],e))}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,i)=>{n=e(n,t,i)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class E extends A{constructor(t,e,n){super(y(e),v(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t=[],e={}){this._forEachChild((n,i)=>{n.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof x?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error("Cannot find form control at index "+t)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const w=new a.q("NgModelWithFormControlWarning");let k=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)}}),t})(),S=(()=>{class t{group(t,e=null){const n=this._reduceControls(t);let i=null,a=null,s=void 0;return null!=e&&(function(t){return void 0!==t.asyncValidators||void 0!==t.validators||void 0!==t.updateOn}(e)?(i=null!=e.validators?e.validators:null,a=null!=e.asyncValidators?e.asyncValidators:null,s=null!=e.updateOn?e.updateOn:void 0):(i=null!=e.validator?e.validator:null,a=null!=e.asyncValidator?e.asyncValidator:null)),new O(n,{asyncValidators:a,updateOn:s,validators:i})}control(t,e,n){return new x(t,e,n)}array(t,e,n){const i=t.map(t=>this._createControl(t));return new E(i,e,n)}_reduceControls(t){const e={};return Object.keys(t).forEach(n=>{e[n]=this._createControl(t[n])}),e}_createControl(t){return t instanceof x||t instanceof O||t instanceof E?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})(),P=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},providers:[_],imports:[k]}),t})(),I=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:w,useValue:e.warnOnNgModelWithFormControl}]}}}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},providers:[S,_],imports:[k]}),t})();var j=n("YUcS"),D=n("/t3+"),L=n("NFeN"),T=n("R1ws"),M=n("FKr1");const N=["*",[["mat-card-footer"]]],z=["*","mat-card-footer"];let F=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(T.a,8))},t.\u0275cmp=a.Eb({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,e){2&t&&a.Cb("_mat-animation-noopable","NoopAnimations"===e._animationMode)},exportAs:["matCard"],ngContentSelectors:z,decls:2,vars:0,template:function(t,e){1&t&&(a.ec(N),a.dc(0),a.dc(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),G=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[M.a],M.a]}),t})();var U=n("bTqV"),$=n("Xa2L"),q=n("tyNb"),H=n("2Vo4"),B=n("tk/3");let Z=(()=>{class t{constructor(t){this.http=t,this.tree=new H.a(void 0)}get tree$(){return void 0===this.tree.value&&this.http.get("assets/content/decision-tree.jsonc").subscribe(t=>this.tree.next(t)),this.tree.asObservable()}}return t.\u0275fac=function(e){return new(e||t)(a.Tb(B.b))},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var R=n("XiUz"),X=n("R0Ic");const W={opacity:0,transform:"translateY(-4px)"},K={opacity:1,transform:"none"},J=Object(X.i)("fade",[Object(X.h)(":enter",[Object(X.g)(W),Object(X.e)("0.3s 0s ease-in-out",Object(X.g)(K))]),Object(X.h)(":leave",[Object(X.g)(K),Object(X.e)("0.3s 0s ease-in-out",Object(X.g)(W))])]);function Y(t,e){if(1&t&&a.Lb(0,"mat-icon",3),2&t){const t=a.ac();a.fc("svgIcon",t.choice.icon)}}let Q=(()=>{class t{constructor(){this.selected=new a.n}ngOnInit(){}click(){this.selected.emit(this.choice.action)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-choice"]],inputs:{choice:"choice"},outputs:{selected:"selected"},decls:5,vars:4,consts:[["mat-raised-button","","color","primary",3,"click"],["fxLayoutGap","8px",1,"flex-center"],[3,"svgIcon",4,"ngIf"],[3,"svgIcon"]],template:function(t,e){1&t&&(a.Pb(0,"button",0),a.Xb("click",(function(){return e.click()})),a.Pb(1,"div",1),a.nc(2,Y,1,1,"mat-icon",2),a.Pb(3,"div"),a.pc(4),a.Ob(),a.Ob(),a.Ob()),2&t&&(a.Cb("active",e.choice.selected),a.zb(2),a.fc("ngIf",e.choice.icon),a.zb(2),a.qc(e.choice.text))},directives:[U.a,R.d,i.k,L.a],styles:["[_nghost-%COMP%], button[_ngcontent-%COMP%]{width:100%;flex:1 1 auto!important;min-height:36px}button[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{justify-content:center;line-height:normal}.active[_ngcontent-%COMP%]{background-color:var(--color-success)!important}"]}),t})();function tt(t,e){if(1&t){const t=a.Qb();a.Pb(0,"app-choice",4),a.Xb("selected",(function(n){a.jc(t);const i=e.$implicit;return a.ac(2).perform(i,n)})),a.Ob()}2&t&&a.fc("choice",e.$implicit)}function et(t,e){if(1&t&&(a.Nb(0),a.Pb(1,"div",2),a.nc(2,tt,1,1,"app-choice",3),a.Ob(),a.Mb()),2&t){const t=a.ac();a.zb(2),a.fc("ngForOf",t.decision.choices)}}function nt(t,e){if(1&t&&(a.Nb(0),a.Pb(1,"div",5),a.Lb(2,"mat-icon",6),a.Ob(),a.Lb(3,"app-decision",7),a.Mb()),2&t){const t=a.ac();a.zb(1),a.fc("@fade",void 0),a.zb(2),a.fc("decision",t.next)}}let it=(()=>{class t{constructor(){}ngOnInit(){}perform(t,e){var n;this.next=void 0,(null===(n=this.decision.choices)||void 0===n?void 0:n.length)>0&&this.decision.choices.forEach(e=>{e.selected=e===t}),"decision"===e.type&&(this.next=e.value)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-decision"]],inputs:{decision:"decision"},decls:6,vars:6,consts:[["fxLayout","column","fxLayoutGap","16px",1,"mat-elevation-z4"],[4,"ngIf"],["fxLayout","row","fxLayout.lt-sm","column","fxLayoutGap","16px",1,"flex-center"],[3,"choice","selected",4,"ngFor","ngForOf"],[3,"choice","selected"],["fxLayout","column","fxLayoutAlign","center center",1,"chevron"],["svgIcon","chevron-down"],[3,"decision"]],template:function(t,e){1&t&&(a.Pb(0,"mat-card",0),a.Pb(1,"h3"),a.pc(2),a.bc(3,"uppercase"),a.Ob(),a.nc(4,et,3,1,"ng-container",1),a.Ob(),a.nc(5,nt,4,2,"ng-container",1)),2&t&&(a.fc("@fade",void 0),a.zb(2),a.qc(a.cc(3,4,e.decision.header)),a.zb(2),a.fc("ngIf",(null==e.decision.choices?null:e.decision.choices.length)>0),a.zb(1),a.fc("ngIf",e.next))},directives:[F,R.c,R.d,i.k,i.j,Q,R.b,L.a,t],pipes:[i.q],styles:["h3[_ngcontent-%COMP%]{font-family:var(--font-serif);font-size:1.5em;color:var(--color-text-secondary);margin:0;padding:0;text-align:center}.chevron[_ngcontent-%COMP%]{margin:32px 0}"],data:{animation:[J]}}),t})();const at=[{path:"",component:(()=>{class t{constructor(t){this.decisionTree=t}ngOnInit(){this.decision$=this.decisionTree.tree$}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(Z))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-hangry"]],decls:5,vars:3,consts:[["fxLayout","column","fxLayoutGap","32px",1,"hangry-container"],[3,"decision"]],template:function(t,e){1&t&&(a.Pb(0,"div",0),a.Pb(1,"h1"),a.pc(2,"WHAT SHOULD WE EAT?"),a.Ob(),a.Lb(3,"app-decision",1),a.bc(4,"async"),a.Ob()),2&t&&(a.zb(3),a.fc("decision",a.cc(4,1,e.decision$)))},directives:[R.c,R.d,it],pipes:[i.b],styles:["h1[_ngcontent-%COMP%]{font-family:var(--font-serif);font-size:2em;margin:0;padding:0;font-weight:700;text-align:center}"]}),t})()}];let st=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[q.d.forChild(at)],q.d]}),t})(),rt=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[i.c,P,I,j.a,D.b,L.b,U.b,$.a,G,st]]}),t})()}}]);