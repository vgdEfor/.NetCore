(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "Huwh":
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_interceptors_api_error_api_error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/interceptors/api-error/api-error.interceptor */ "Dp/R");
/* harmony import */ var src_app_shared_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/seo/seo.service */ "7Fmf");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ax_toolbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ax-toolbox */ "4/SI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/api/services */ "EZPP");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "imvL");
/* harmony import */ var src_app_shared_services_token_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/token/token.service */ "cxeF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_components_array_translator_array_translator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/array-translator/array-translator.component */ "vxM4");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
















const _c0 = function (a0) { return [a0]; };
function LoginComponent_app_array_translator_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-array-translator", 12);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("labels", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2._errorMessage));
} }
const _c1 = function () { return ["fas", "sync"]; };
function LoginComponent_fa_icon_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 26);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1))("spin", true);
} }
function LoginComponent_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAGES.AUTH.LOGIN.BTN.LOGIN"));
} }
const _c2 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(cdref, aRoute, router, accSV, authSV, seo, tokenSV) {
        this.cdref = cdref;
        this.aRoute = aRoute;
        this.router = router;
        this.accSV = accSV;
        this.authSV = authSV;
        this.seo = seo;
        this.tokenSV = tokenSV;
        this._isLoading = false;
        this._userData = {};
        this._errors = {};
        this._errorMessage = null;
        this.subs = [];
        this.initListeners();
        this.seo.clearMetadata();
        this.seo.setMetadata({}, [src_app_shared_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__["MetadataRobotConfiguration"].None]);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subs.forEach((s) => s.unsubscribe());
    }
    onFormSubmit(ev) {
        if (!ev.isTrusted) {
            return;
        }
        this._isLoading = true;
        this._errors = {};
        this.cdref.detectChanges();
        this.authWithJwt()
            // this.authWithCookies()
            .then(() => {
            let redirectTo = this.returnUrl;
            this.authSV.refreshAccountProfile()
                .then(() => {
                this._userData = {};
                this.cdref.detectChanges();
                if (ax_toolbox__WEBPACK_IMPORTED_MODULE_4__["StringUtilities"].isNullOrWhitespace(redirectTo) || redirectTo === '/') {
                    redirectTo = '/';
                }
                const angularRoute = this.router.parseUrl(redirectTo);
                this.router.navigateByUrl(angularRoute).then(() => { });
            });
        }, (err) => {
            if (err instanceof src_app_shared_interceptors_api_error_api_error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ServerSideError"]) {
                this._errors = err.errorData;
            }
            this._isLoading = false;
            this.cdref.detectChanges();
        });
    }
    authWithJwt() {
        return new Promise((resolve, reject) => {
            this.accSV.apiAccountTokenPost$Json({ body: this._userData })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(() => true))
                .subscribe((data) => {
                this.tokenSV.setStoredToken(data);
                resolve();
            }, (err) => {
                reject(err);
            });
        });
    }
    authWithCookies() {
        return new Promise((resolve, reject) => {
            this.accSV.apiAccountLoginPost({ body: this._userData })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(() => true))
                .subscribe(() => {
                resolve();
            }, (err) => {
                reject(err);
            });
        });
    }
    initListeners() {
        const s = this.aRoute.queryParamMap.subscribe((p) => {
            this._errorMessage = p.get('errMsg');
            this.returnUrl = p.get('ReturnUrl');
        });
        this.subs.push(s);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_6__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_token_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 36, vars: 46, consts: [[1, "background"], [1, "bg-image"], [1, "text-center", "d-flex", "align-items-center", 3, "ngSubmit"], [1, "card", "m-auto", "text-left", "shadow"], [1, "card-header", "bg-primary", "text-white"], [1, "card-title"], [1, ""], [1, "card-body"], [1, "form-group"], ["for", "Username", 1, "sr-only"], ["lblUsername", ""], [1, "form-control", 3, "id", "name", "ngClass", "placeholder", "required", "autofocus", "autocomplete", "ngModel", "disabled", "ngModelChange"], [1, "invalid-feedback", "d-block", 3, "labels"], ["for", "Password", 1, "sr-only"], ["lblPassword", ""], [1, "form-control", 3, "id", "name", "ngClass", "type", "placeholder", "required", "autofocus", "autocomplete", "ngModel", "disabled", "ngModelChange"], ["class", "invalid-feedback d-block", 3, "labels", 4, "ngIf"], [1, "form-check", "custom-checkbox"], [1, "form-check-input", "custom-control-input", 3, "id", "name", "type", "checked", "change"], ["for", "RememberMe", 1, "custom-control-label", "form-check-label"], ["lblRememberMe", ""], [1, "mt-3", "card-footer", "text-right"], [1, "card-logo"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"], [3, "icon", "spin", 4, "ngIf"], [4, "ngIf"], [3, "icon", "spin"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener($event) { return ctx.onFormSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx._userData.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-array-translator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_22_listener($event) { return ctx._userData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-array-translator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LoginComponent_app_array_translator_24_Template, 1, 3, "app-array-translator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LoginComponent_Template_input_change_26_listener() { return ctx._userData.rememberMe = !ctx._userData.rememberMe; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, LoginComponent_fa_icon_34_Template, 1, 3, "fa-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, LoginComponent_ng_container_35_Template, 3, 3, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 34, "APP_NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 36, "PAGES.AUTH.LOGIN.LABEL.USERNAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", _r0.getAttribute("for"))("name", _r0.getAttribute("for"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c2, ctx._errors[_r0.getAttribute("for")]))("placeholder", _r0.innerText)("required", true)("autofocus", true)("autocomplete", "username")("ngModel", ctx._userData.username)("disabled", ctx._isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", _r0.getAttribute("for"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("labels", ctx._errors[_r0.getAttribute("for")]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 38, "PAGES.AUTH.LOGIN.LABEL.PASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", _r1.getAttribute("for"))("name", _r1.getAttribute("for"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c2, ctx._errors[_r1.getAttribute("for")]))("type", "password")("placeholder", _r1.innerText)("required", true)("autofocus", true)("autocomplete", "current-password")("ngModel", ctx._userData.password)("disabled", ctx._isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("labels", ctx._errors[_r1.getAttribute("for")]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", _r3.getAttribute("for"))("name", _r3.getAttribute("for"))("type", "checkbox")("checked", ctx._userData.rememberMe);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 40, "PAGES.AUTH.LOGIN.LABEL.REMEMBERME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx._isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _shared_components_array_translator_array_translator_component__WEBPACK_IMPORTED_MODULE_11__["ArrayTranslatorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FaIconComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: ["[_nghost-%COMP%]   .background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .bg-image[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-image: url(\"https://www.PryBase.es/assets/images/logos/PryBase.png\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  filter: blur(3px);\n  transform: scale(0.95);\n}\n[_nghost-%COMP%]    > form[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n}\n[_nghost-%COMP%]   .card-logo[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  max-width: 350px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-logo[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/logo/PryBase.png\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  height: 31px;\n  width: 100px;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-logo.card-logo-hanging[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -3.1px;\n  right: -25px;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .card-logo[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/logo/PryBase.png\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  height: 31px;\n  width: 100px;\n  position: relative;\n  float: left;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .card-logo.card-logo-hanging[_ngcontent-%COMP%] {\n  float: none;\n  position: absolute;\n  bottom: -15.5px;\n  left: 0.8333333333px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBUlI7QUFTUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0VBbEJGO0VBbUJFLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFwQkc7RUFxQkgsaUJBQUE7RUFDQSxzQkFBQTtBQVBaO0FBVUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFSUjtBQVdJO0VBQ0ksb0JBQUE7QUFUUjtBQVlJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBVlI7QUFhWTtFQUNJLHFEQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUExQ0c7RUEyQ0gsWUExQ0U7QUErQmxCO0FBYWdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVhwQjtBQWNZOztFQUVJLFNBQUE7QUFaaEI7QUFhZ0I7O0VBQ0ksU0FBQTtBQVZwQjtBQWVZO0VBQ0kscURBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQWpFRztFQWtFSCxZQWpFRTtFQWtFRixrQkFBQTtFQUNBLFdBQUE7QUFiaEI7QUFlZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFicEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzLnZhcmlhYmxlcy5zY3NzJztcclxuJHBhZ2UtYmc6IHVybCgnaHR0cHM6Ly93d3cuUHJ5QmFzZS5lcy9hc3NldHMvaW1hZ2VzL2xvZ29zL1ByeUJhc2UucG5nJyk7XHJcbiRwYWdlLWJnLXNpemU6IGNvbnRhaW47XHJcbiRwYWdlLWJnLXNjYWxlOiAwLjk1O1xyXG4kcGFnZS1iZy1ibHVyOiAzcHg7XHJcbiRjYXJkLWxvZ28taGVpZ2h0OiAzMXB4O1xyXG4kY2FyZC1sb2dvLXdpZHRoOiAxMDBweDtcclxuXHJcbjpob3N0IHtcclxuICAgIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgLmJnLWltYWdlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogJHBhZ2UtYmc7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAkcGFnZS1iZy1zaXplO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoJHBhZ2UtYmctYmx1cik7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoJHBhZ2UtYmctc2NhbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgID5mb3JtIHtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1sb2dvIHtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgLmNhcmQtbG9nbyB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyN7JGFwcC1sb2dvLXVybH0nKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRjYXJkLWxvZ28taGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICRjYXJkLWxvZ28td2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5jYXJkLWxvZ28taGFuZ2luZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLSN7JGNhcmQtbG9nby1oZWlnaHQgLyAxMH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0jeyRjYXJkLWxvZ28td2lkdGggLyA0fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZC10aXRsZSxcclxuICAgICAgICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgPiAqIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICAgICAgLmNhcmQtbG9nbyB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyN7JGFwcC1sb2dvLXVybH0nKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRjYXJkLWxvZ28taGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICRjYXJkLWxvZ28td2lkdGg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICAgICAgICAgICAgICAmLmNhcmQtbG9nby1oYW5naW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtI3skY2FyZC1sb2dvLWhlaWdodCAvIDJ9O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICN7JGNhcmQtbG9nby13aWR0aCAvIDEyMH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }, { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: src_app_shared_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"] }, { type: src_app_shared_services_token_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "dqf9":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/array-translator/array-translator.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ArrayTranslatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayTranslatorModule", function() { return ArrayTranslatorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _array_translator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array-translator.component */ "vxM4");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");






class ArrayTranslatorModule {
}
ArrayTranslatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArrayTranslatorModule });
ArrayTranslatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArrayTranslatorModule_Factory(t) { return new (t || ArrayTranslatorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArrayTranslatorModule, { declarations: [_array_translator_component__WEBPACK_IMPORTED_MODULE_2__["ArrayTranslatorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]], exports: [_array_translator_component__WEBPACK_IMPORTED_MODULE_2__["ArrayTranslatorComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArrayTranslatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_array_translator_component__WEBPACK_IMPORTED_MODULE_2__["ArrayTranslatorComponent"]],
                exports: [_array_translator_component__WEBPACK_IMPORTED_MODULE_2__["ArrayTranslatorComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "qdgq":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "Huwh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var src_app_shared_components_array_translator_array_translator_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/array-translator/array-translator.module */ "dqf9");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");











const routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: ':errMsg', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
];
class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            src_app_shared_components_array_translator_array_translator_module__WEBPACK_IMPORTED_MODULE_6__["ArrayTranslatorModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], src_app_shared_components_array_translator_array_translator_module__WEBPACK_IMPORTED_MODULE_6__["ArrayTranslatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
                    src_app_shared_components_array_translator_array_translator_module__WEBPACK_IMPORTED_MODULE_6__["ArrayTranslatorModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vxM4":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/array-translator/array-translator.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ArrayTranslatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayTranslatorComponent", function() { return ArrayTranslatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







function ArrayTranslatorComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const l_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.labelCssClass)("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, l_r3), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function ArrayTranslatorComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArrayTranslatorComponent_ng_container_1_div_1_Template, 2, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0._labels);
} }
function ArrayTranslatorComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r4.labelCssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, l_r5));
} }
function ArrayTranslatorComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArrayTranslatorComponent_ng_container_2_div_1_Template, 3, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1._labels);
} }
class ArrayTranslatorComponent {
    constructor(translateSV) {
        this.translateSV = translateSV;
        this._labels = [];
        this.isHtml = false;
        this.labelCssClass = null;
    }
    set labels(values) {
        if (values == null) {
            values = [];
        }
        if (typeof (values) === 'string') {
            values = [values];
        }
        this._labels = values;
        this.checkTranslations().finally(() => { });
    }
    ngOnInit() {
    }
    checkTranslations() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
                return;
            }
            if (this._labels.length === 0) {
                return;
            }
            const translations = yield this.translateSV.get(this._labels)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(() => true))
                .toPromise();
            for (const l of this._labels) {
                if (translations[l] == null || (translations[l]).length === 0) {
                    console.warn(`No translation for [${l}]`);
                }
            }
        });
    }
}
ArrayTranslatorComponent.ɵfac = function ArrayTranslatorComponent_Factory(t) { return new (t || ArrayTranslatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
ArrayTranslatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArrayTranslatorComponent, selectors: [["app-array-translator"]], inputs: { labels: "labels", isHtml: "isHtml", labelCssClass: "labelCssClass" }, decls: 3, vars: 2, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "ngClass", "innerHTML", 4, "ngFor", "ngForOf"], [3, "ngClass", "innerHTML"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function ArrayTranslatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArrayTranslatorComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArrayTranslatorComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.isHtml);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FycmF5LXRyYW5zbGF0b3IvYXJyYXktdHJhbnNsYXRvci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArrayTranslatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-array-translator',
                templateUrl: './array-translator.component.html',
                styleUrls: ['./array-translator.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }]; }, { labels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isHtml: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], labelCssClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map