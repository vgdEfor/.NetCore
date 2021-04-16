(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+3se":
/*!***************************************!*\
  !*** ./src/app/shared/utils/utils.ts ***!
  \***************************************/
/*! exports provided: applyMixins, groupBy, removeHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMixins", function() { return applyMixins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeHtml", function() { return removeHtml; });
function applyMixins(finalClass, classesToCombine) {
    classesToCombine.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (name !== 'constructor') {
                finalClass.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}
/**
 * https://stackoverflow.com/a/38327540
 */
function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        }
        else {
            collection.push(item);
        }
    });
    return map;
}
function removeHtml(input) {
    const el = document.createElement('input');
    el.innerHTML = input;
    return el.innerText;
}


/***/ }),

/***/ "+6Yh":
/*!************************************************************!*\
  !*** ./src/app/shared/guards/translate/translate.guard.ts ***!
  \************************************************************/
/*! exports provided: LANGUAGES, LANGUAGE_CODES, LANGUAGE_DEFAULT, LANG_ROUTE_MARKER, TranslateGuard, AppLangBsLang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGES", function() { return LANGUAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_CODES", function() { return LANGUAGE_CODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_DEFAULT", function() { return LANGUAGE_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_ROUTE_MARKER", function() { return LANG_ROUTE_MARKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateGuard", function() { return TranslateGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLangBsLang", function() { return AppLangBsLang; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_locales_en_GB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/en-GB */ "URqu");
/* harmony import */ var _angular_common_locales_en_GB__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en_GB__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/es */ "2Yyj");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var _biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @biesbjerg/ngx-translate-extract-marker */ "ogFT");
/* harmony import */ var _models_api_translations_api_translations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/api-translations/api-translations */ "ZyAr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _api_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api/services */ "EZPP");
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/seo/seo.service */ "7Fmf");


//#region Angular locales



//#endregion
//#region Boostrap locales


// npm run translate will pick these values.
// see https://github.com/biesbjerg/ngx-translate-extract for more info.
// Dont't attempt to get the function inside a for loop: it won't work.







//#region LANGUAGE DECLARATIONS - KEEP THIS UPDATED
// Every key should be present at FRONTEND_LANG_CODES.
// If missing, LANGUAGES[LANGUAGE_DEFAULT] will be used.
const LANGUAGES = {
    es: { angular: _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4___default.a, bootstrap: ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_6__["esLocale"] },
    en: { angular: _angular_common_locales_en_GB__WEBPACK_IMPORTED_MODULE_3___default.a, bootstrap: ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_6__["enGbLocale"] },
};
const LANGUAGE_CODES = Object.keys(LANGUAGES);
const LANGUAGE_DEFAULT = LANGUAGE_CODES[0];
Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_7__["marker"])('LANG.ES');
Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_7__["marker"])('LANG.EN');
Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_7__["marker"])('LANG.ES_SHORT');
Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_7__["marker"])('LANG.EN_SHORT');
// Keep this function's content updates
Object(_models_api_translations_api_translations__WEBPACK_IMPORTED_MODULE_8__["markApiErrorStrings"])();
//#endregion
const LANG_ROUTE_MARKER = ':navLangCode';
class TranslateGuard {
    constructor(translateSV, langSV, seoSV, router) {
        this.translateSV = translateSV;
        this.langSV = langSV;
        this.seoSV = seoSV;
        this.router = router;
        this._isLangInitialized = false;
        this.registerLocales();
    }
    canLoad(route, segments) {
        let segment = segments.find((s) => s.parameterMap.has(LANG_ROUTE_MARKER));
        if (segment == null) {
            segment = new _angular_router__WEBPACK_IMPORTED_MODULE_1__["UrlSegment"]('', {});
        }
        return this.isLangParamMapInitialized(segment.parameterMap);
    }
    canActivate(next, state) {
        return this.isLangInitialized(next);
    }
    canActivateChild(next, state) {
        return this.isLangInitialized(next);
    }
    registerLocales() {
        const defLang = LANGUAGES[LANGUAGE_DEFAULT];
        if (!defLang.angular || !defLang.bootstrap) {
            throw new Error('Default language is missing some definitions.');
        }
        for (const l of Object.keys(LANGUAGES)) {
            const lang = LANGUAGES[l];
            const ang = lang.angular || defLang.angular;
            const bs = lang.bootstrap || defLang.bootstrap;
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(ang, l);
            Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_5__["defineLocale"])(l, bs);
        }
    }
    isLangInitialized(next) {
        return this.isLangParamMapInitialized(next.paramMap);
    }
    isLangParamMapInitialized(paramMap) {
        return new Promise((resolve) => {
            if (this._isLangInitialized) {
                resolve(true);
                return;
            }
            let langCode = paramMap.get(LANG_ROUTE_MARKER);
            if (langCode == null) {
                langCode = LANGUAGE_DEFAULT;
            }
            const s = this.translateSV.use(langCode)
                .subscribe(() => {
                this.translateSV.addLangs(LANGUAGE_CODES);
                this._isLangInitialized = true;
                this.seoSV.init().then(() => {
                    resolve(true);
                });
                setTimeout(() => {
                    s.unsubscribe();
                }, 0);
            });
        });
    }
}
TranslateGuard.ɵfac = function TranslateGuard_Factory(t) { return new (t || TranslateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_services__WEBPACK_IMPORTED_MODULE_10__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_11__["SeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TranslateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslateGuard, factory: TranslateGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }, { type: _api_services__WEBPACK_IMPORTED_MODULE_10__["LanguageService"] }, { type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_11__["SeoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();
class AppLangBsLang {
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vgbodon\.NetCore\PryBase\es.efor.PryBase.Angular\webapp\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "703i":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/interceptors/api-headers/api-header-kub/api-header-kub.interceptor.ts ***!
  \**********************************************************************************************/
/*! exports provided: ApiHeaderKubInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiHeaderKubInterceptor", function() { return ApiHeaderKubInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");






class ApiHeaderKubInterceptor {
    constructor(toastSV) {
        this.toastSV = toastSV;
        this.kubHeaders = {};
        this.kubHeaders = JSON.parse(localStorage.getItem('kubh')) || {};
    }
    intercept(request, next) {
        const output = next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                this.processResponse(error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((r) => {
            if (r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                this.processResponse(r);
            }
            return r;
        }));
        return output;
    }
    processResponse(response) {
        const kubHeaders = response.headers.keys()
            .filter((k) => k.toLowerCase().startsWith('kub'))
            .map((k) => ({ key: k, value: response.headers.get(k) }));
        this.checkKubHeaders(kubHeaders);
    }
    checkKubHeaders(newHeaders) {
        const changes = {};
        let hasChanges = false;
        for (const h of newHeaders) {
            if (this.kubHeaders[h.key] !== h.value) {
                changes[h.key] = {
                    old: this.kubHeaders[h.key],
                    new: h.value
                };
                this.kubHeaders[h.key] = h.value;
                hasChanges = true;
            }
        }
        if (hasChanges) {
            const mapped = Object.keys(changes).map((k) => {
                let msg = `${k} `;
                if (changes[k].old) {
                    msg += `-> ${changes[k].old} `;
                }
                msg += `--new-> ${changes[k].new}`;
                return msg;
            });
            this.toastSV.info(mapped.join('<hr>'), 'Kubernetes changed', { enableHtml: true });
            localStorage.setItem('kubh', JSON.stringify(this.kubHeaders));
        }
    }
}
ApiHeaderKubInterceptor.ɵfac = function ApiHeaderKubInterceptor_Factory(t) { return new (t || ApiHeaderKubInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
ApiHeaderKubInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiHeaderKubInterceptor, factory: ApiHeaderKubInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiHeaderKubInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "7Fmf":
/*!****************************************************!*\
  !*** ./src/app/shared/services/seo/seo.service.ts ***!
  \****************************************************/
/*! exports provided: SeoService, SeoMetadata, MetadataRobotConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoMetadata", function() { return SeoMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataRobotConfiguration", function() { return MetadataRobotConfiguration; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _models_basic_set_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/_basic/set-data */ "E/92");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "+3se");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");

// import { AppInfoService } from '../layout/app-info/app-info.service';





class SeoService {
    constructor(
    // public appInfoSV: AppInfoService,
    metaSV, titleSV, translate) {
        this.metaSV = metaSV;
        this.titleSV = titleSV;
        this.translate = translate;
        this._isInitted = false;
        this.tagsInUse = [];
    }
    get isInitted() { return this._isInitted; }
    /**
     * Sets the initial metadata values.
     */
    init() {
        // if (this.isInitted) { throw new Error('Metadata has already been initialized.'); }
        if (this.isInitted) {
            return new Promise((resolve) => { resolve(); });
        }
        this._isInitted = true;
        return this.setMetadata({});
    }
    setMetadata(data, robots = []) {
        return new Promise((resolve) => {
            this.translate.get('APP_NAME').toPromise().then((APP_NAME) => {
                const phData = new SeoMetadata()
                    .setData(this.sanitizeMetadata(data))
                    .setData({ Author: data.Author || APP_NAME });
                this.titleSV.setTitle(`${(phData.Title ? `${phData.Title} | ` : '')}${APP_NAME}`);
                this.clearMetadata();
                const asMetadataDefinitions = phData.toMetaDefinitions(robots);
                this.tagsInUse = asMetadataDefinitions.map((t) => t.name);
                this.metaSV.addTags(asMetadataDefinitions, true);
                resolve();
            });
        });
    }
    clearMetadata() {
        for (const t of this.tagsInUse) {
            this.removeMetadataByName(t);
        }
    }
    removeMetadataByName(tagName) {
        this.metaSV.removeTag(`name=${tagName}`);
    }
    sanitizeMetadata(data) {
        if (data == null) {
            data = {};
        }
        if (data.Author) {
            data.Author = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["removeHtml"])(data.Author);
        }
        if (data.Description) {
            data.Description = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["removeHtml"])(data.Description);
        }
        if (data.Keywords) {
            data.Keywords = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["removeHtml"])(data.Keywords);
        }
        if (data.ObjUrl) {
            data.ObjUrl = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["removeHtml"])(data.ObjUrl);
        }
        if (data.ObjUrlFull) {
            data.ObjUrlFull = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["removeHtml"])(data.ObjUrlFull);
        }
        if (data.Title) {
            data.Title = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["removeHtml"])(data.Title);
        }
        return data;
    }
}
SeoService.ɵfac = function SeoService_Factory(t) { return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
SeoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SeoService, factory: SeoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }]; }, null); })();
class SeoMetadata extends _models_basic_set_data__WEBPACK_IMPORTED_MODULE_1__["SetData"] {
    toMetaDefinitions(robots) {
        if (!robots || robots.length === 0) {
            robots = [MetadataRobotConfiguration.Index, MetadataRobotConfiguration.Follow];
        }
        return [
            { name: 'keywords', content: this.Keywords || '' },
            { name: 'description', content: this.Description || '' },
            { name: 'author', content: this.Author || '' },
            { name: 'robots', content: robots.join(', ') },
        ];
    }
}
var MetadataRobotConfiguration;
(function (MetadataRobotConfiguration) {
    MetadataRobotConfiguration["All"] = "all";
    MetadataRobotConfiguration["NoIndex"] = "noindex";
    MetadataRobotConfiguration["NoFollow"] = "nofollow";
    MetadataRobotConfiguration["None"] = "none";
    MetadataRobotConfiguration["NoArchive"] = "noarchive";
    MetadataRobotConfiguration["NoSnippet"] = "nosnippet";
    MetadataRobotConfiguration["NoOdp"] = "noodp";
    MetadataRobotConfiguration["NoTranslate"] = "notranslate";
    MetadataRobotConfiguration["NoImageIndex"] = "noimageindex";
    MetadataRobotConfiguration["Index"] = "index";
    MetadataRobotConfiguration["Follow"] = "follow";
    MetadataRobotConfiguration["Archive"] = "archive";
    MetadataRobotConfiguration["Snippet"] = "snippet";
    MetadataRobotConfiguration["Odp"] = "odp";
    MetadataRobotConfiguration["Translate"] = "translate";
    MetadataRobotConfiguration["ImageIndex"] = "imageindex";
})(MetadataRobotConfiguration || (MetadataRobotConfiguration = {}));


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B2yQ":
/*!*********************************************************!*\
  !*** ./src/app/shared/api/services/language.service.ts ***!
  \*********************************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-service */ "kcAd");
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request-builder */ "fXmr");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-configuration */ "CxSZ");
/* tslint:disable */








class LanguageService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiLanguageGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiLanguageGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, LanguageService.ApiLanguageGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiLanguageGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiLanguageGet$Plain(params) {
        return this.apiLanguageGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiLanguageGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiLanguageGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, LanguageService.ApiLanguageGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiLanguageGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiLanguageGet$Json(params) {
        return this.apiLanguageGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
}
/**
 * Path part for operation apiLanguageGet
 */
LanguageService.ApiLanguageGetPath = '/api/language';
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Bsj9":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/dictionary/dictionary.service.ts ***!
  \******************************************************************/
/*! exports provided: DictionaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryService", function() { return DictionaryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ax_toolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ax-toolbox */ "4/SI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/services */ "EZPP");





/**
 * This service mantains an updated dictionary with all the translations available
 * from the TranslateService. Its static `dictionary` property is used for Interceptors,
 * so that there is no circular dependencies.
 */
class DictionaryService {
    constructor(translate, languageSV) {
        this.translate = translate;
        this.languageSV = languageSV;
        this.serverSideLangs = [];
        this.isInitialized = false;
        this.subs = [];
        this.init();
    }
    static getFromStatic(dictionaryKey) {
        return ax_toolbox__WEBPACK_IMPORTED_MODULE_1__["StringUtilities"].formatFromObject(`{${dictionaryKey}}`, DictionaryService.dictionary);
    }
    ngOnDestroy() {
        this.subs.forEach(s => s.unsubscribe());
    }
    init() {
        const s = this.translate.onLangChange
            .subscribe((data) => {
            DictionaryService.currentLanguage = data.lang;
            DictionaryService.dictionary = data.translations;
            document.getElementsByTagName('html').item(0).setAttribute('lang', data.lang);
        });
        const s2 = this.languageSV.apiLanguageGet$Json()
            .subscribe((data) => {
            this.serverSideLangs = data;
            setTimeout(() => {
                s2.unsubscribe();
            }, 3000);
        });
        this.subs.push(s);
    }
}
// static = avoid circular dependencies in Interceptors
DictionaryService.dictionary = {};
DictionaryService.ɵfac = function DictionaryService_Factory(t) { return new (t || DictionaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_services__WEBPACK_IMPORTED_MODULE_3__["LanguageService"])); };
DictionaryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DictionaryService, factory: DictionaryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DictionaryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _api_services__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] }]; }, null); })();


/***/ }),

/***/ "Cdlr":
/*!*******************************************************!*\
  !*** ./src/app/shared/api/services/access.service.ts ***!
  \*******************************************************/
/*! exports provided: AccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessService", function() { return AccessService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-service */ "kcAd");
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request-builder */ "fXmr");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-configuration */ "CxSZ");
/* tslint:disable */








class AccessService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiAccessAccessGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAccessAccessGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, AccessService.ApiAccessAccessGetPath, 'get');
        if (params) {
            rb.query('p', params['p'], {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: String(r.body) === 'true' });
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiAccessAccessGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAccessAccessGet$Plain(params) {
        return this.apiAccessAccessGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiAccessAccessGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAccessAccessGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, AccessService.ApiAccessAccessGetPath, 'get');
        if (params) {
            rb.query('p', params['p'], {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: String(r.body) === 'true' });
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiAccessAccessGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAccessAccessGet$Json(params) {
        return this.apiAccessAccessGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
}
/**
 * Path part for operation apiAccessAccessGet
 */
AccessService.ApiAccessAccessGetPath = '/api/access/access';
AccessService.ɵfac = function AccessService_Factory(t) { return new (t || AccessService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AccessService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccessService, factory: AccessService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "CxSZ":
/*!*************************************************!*\
  !*** ./src/app/shared/api/api-configuration.ts ***!
  \*************************************************/
/*! exports provided: ApiConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiConfiguration", function() { return ApiConfiguration; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* tslint:disable */


/**
 * Global configuration
 */
class ApiConfiguration {
    constructor() {
        this.rootUrl = '';
    }
}
ApiConfiguration.ɵfac = function ApiConfiguration_Factory(t) { return new (t || ApiConfiguration)(); };
ApiConfiguration.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiConfiguration, factory: ApiConfiguration.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiConfiguration, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "DC9S":
/*!***************************************************************!*\
  !*** ./src/app/shared/models/_basic/destroy-subscriptions.ts ***!
  \***************************************************************/
/*! exports provided: DestroySubscriptionsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestroySubscriptionsDirective", function() { return DestroySubscriptionsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ax_toolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ax-toolbox */ "4/SI");



/**
 * @deprecated use `DestroySubscriptions` from `ax-toolbox` instead
 */
class DestroySubscriptionsDirective extends ax_toolbox__WEBPACK_IMPORTED_MODULE_1__["DestroySubscriptions"] {
    ngOnDestroy() {
        super.ngOnDestroy();
        this.subs.forEach((s) => s.unsubscribe());
    }
}
DestroySubscriptionsDirective.ɵfac = function DestroySubscriptionsDirective_Factory(t) { return ɵDestroySubscriptionsDirective_BaseFactory(t || DestroySubscriptionsDirective); };
DestroySubscriptionsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DestroySubscriptionsDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵDestroySubscriptionsDirective_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DestroySubscriptionsDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DestroySubscriptionsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], null, null); })();


/***/ }),

/***/ "Dp/R":
/*!************************************************************************!*\
  !*** ./src/app/shared/interceptors/api-error/api-error.interceptor.ts ***!
  \************************************************************************/
/*! exports provided: ApiErrorInterceptor, ServerSideError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiErrorInterceptor", function() { return ApiErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSideError", function() { return ServerSideError; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_basic_set_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/_basic/set-data */ "E/92");
/* harmony import */ var _services_dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/dictionary/dictionary.service */ "Bsj9");
/* harmony import */ var _biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @biesbjerg/ngx-translate-extract-marker */ "ogFT");









// STATUS CODE GENERIC ERRORS
Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_7__["marker"])('TOAST_ERR_HTTP_0_TITLE');
Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_7__["marker"])('TOAST_ERR_HTTP_0_BODY');
class ApiErrorInterceptor {
    constructor(injector) {
        this.injector = injector;
        this.toastSV = this.injector.get(ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]);
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            if (error instanceof ErrorEvent) { }
            else if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                let func = this['handleServerStatus' + error.status];
                if (func) {
                    func = func.bind(this);
                    const errorMessage = func(error);
                    if (errorMessage && errorMessage.toastData && (errorMessage.toastData.title || errorMessage.toastData.message)) {
                        const config = { extendedTimeOut: 4000 };
                        if (errorMessage.toastData.isHtml) {
                            config.enableHtml = true;
                        }
                        // if (errorMessage.iconCssClass) config = {icon};
                        this.toastSV.error(errorMessage.toastData.message, errorMessage.toastData.title, config);
                    }
                    if (errorMessage) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
                    }
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
    handleServerStatus0(error) {
        return new ServerSideError().setData({
            toastData: new ErrorAsToast().setData({
                iconCssClass: 'fas fa-plug',
                title: _services_dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_6__["DictionaryService"].getFromStatic('TOAST_ERR_HTTP_0_TITLE'),
                message: _services_dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_6__["DictionaryService"].getFromStatic('TOAST_ERR_HTTP_0_BODY'),
            }),
        });
    }
    handleServerStatus400(error) {
        const err = this.handleServerStatusGeneric(error);
        return err;
    }
    handleServerStatus404(error) {
        const err = this.handleServerStatusGeneric(error);
        return err;
    }
    handleServerStatusGeneric(error) {
        let parsed = null;
        // let toast: ErrorAsToast = null;
        if (error.error) {
            try {
                let asObj = null;
                if (typeof (error.error) === 'string') {
                    asObj = JSON.parse(error.error);
                }
                else if (typeof (error.error) === 'object') {
                    asObj = error.error;
                }
                parsed = new ServerSideError();
                parsed.errorData = asObj;
                if (typeof (asObj) === 'string') {
                    parsed.toastData.title = error.error;
                }
                else {
                    if (asObj) {
                        if (asObj._title) {
                            if (asObj._title instanceof (Array)) {
                                parsed.toastData.isHtml = true;
                                parsed.toastData.title = asObj._title
                                    .map((key) => _services_dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_6__["DictionaryService"].dictionary[key] || key)
                                    .join('<br>');
                            }
                            else if (typeof (asObj._title) === 'string') {
                                parsed.toastData.message = _services_dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_6__["DictionaryService"].dictionary[asObj._title];
                            }
                        }
                        if (asObj._message) {
                            if (asObj._message instanceof (Array)) {
                                parsed.toastData.message = asObj._message
                                    .map((key) => _services_dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_6__["DictionaryService"].dictionary[key] || key)
                                    .join('<br>');
                                parsed.toastData.isHtml = true;
                            }
                            else if (typeof (asObj._message) === 'string') {
                                parsed.toastData.message = _services_dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_6__["DictionaryService"].dictionary[asObj._message];
                            }
                        }
                    }
                }
            }
            catch (e) {
            }
        }
        return parsed;
    }
}
ApiErrorInterceptor.ɵfac = function ApiErrorInterceptor_Factory(t) { return new (t || ApiErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
ApiErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiErrorInterceptor, factory: ApiErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();
class ErrorAsToast extends _models_basic_set_data__WEBPACK_IMPORTED_MODULE_5__["SetData"] {
    constructor() {
        super(...arguments);
        this.iconCssClass = 'fa fa-warning';
        this.isHtml = false;
    }
}
class ServerSideError extends _models_basic_set_data__WEBPACK_IMPORTED_MODULE_5__["SetData"] {
    constructor() {
        super(...arguments);
        this.toastData = new ErrorAsToast();
    }
}


/***/ }),

/***/ "E/92":
/*!**************************************************!*\
  !*** ./src/app/shared/models/_basic/set-data.ts ***!
  \**************************************************/
/*! exports provided: SetData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetData", function() { return SetData; });
class SetData {
    /**
     * Sets the specified properties for this instance, using a partial object.
     * Only set properties will be applied (you may use `null` value. `undefined` will may be ignored).
     *
     * When SetData is extended, if the class uses an instanced class as a property, this `setData` should be extended
     * to call for the class' constructor. Otherwise, methods will not be initialized.
     *
     * @param newData The partial object to extend. A full instance may be used.
     *
     * @example
     ```typescript
     export class MySpecialClass extends SetData {
        myPropertyString = 'some-data'
        myPropertyClass = new MySubclass();

        setData(newData: Partial<this>) {
            // myPropertyString will be automatically set by the super method.
            // myPropertyClass must be propertly instanced and properties assigned.
            if (newData == null) { newData = {}; }
            if (newData.myPropertyClass) {
                // tip: MySubclass could extend SetData aswell to ease this work.
                const mpcPlaceholder = new MySubclass()
                    .setData(newData.myPropertyClass);
                this.myPropertyClass = mpcPlaceholder;
                
                // Super important to call delete. Otherwise, super will assign the data again, without a class instance
                delete newData.myPropertyClass;
            }
            return super.setData(newData);
        }
     }
     ```
     */
    setData(newData) {
        if (newData == null) {
            newData = {};
        }
        if (typeof (newData) !== 'object') {
            throw Error(`[${typeof (newData)}] is not a valid SetData object.`);
        }
        for (const k of Object.keys(newData)) {
            try {
                if (this[k] !== newData[k]) {
                    this[k] = newData[k];
                }
            }
            catch (e) {
                // Getters cannot be set. Skip.
                if (e instanceof TypeError && e.message != null && e.message.endsWith('which has only a getter')) {
                    return;
                }
                console.error(e);
            }
        }
        return this;
    }
}


/***/ }),

/***/ "EZPP":
/*!****************************************!*\
  !*** ./src/app/shared/api/services.ts ***!
  \****************************************/
/*! exports provided: AccessService, AccountService, EmployeesService, ImportsService, LanguageService, LayoutMenuService, ProjectService, UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/access.service */ "Cdlr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessService", function() { return _services_access_service__WEBPACK_IMPORTED_MODULE_0__["AccessService"]; });

/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/account.service */ "u9+3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]; });

/* harmony import */ var _services_employees_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/employees.service */ "eQiK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmployeesService", function() { return _services_employees_service__WEBPACK_IMPORTED_MODULE_2__["EmployeesService"]; });

/* harmony import */ var _services_imports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/imports.service */ "Up50");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImportsService", function() { return _services_imports_service__WEBPACK_IMPORTED_MODULE_3__["ImportsService"]; });

/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/language.service */ "B2yQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return _services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]; });

/* harmony import */ var _services_layout_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/layout-menu.service */ "JUJx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutMenuService", function() { return _services_layout_menu_service__WEBPACK_IMPORTED_MODULE_5__["LayoutMenuService"]; });

/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/project.service */ "x+pK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return _services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"]; });

/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/users.service */ "a0sM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return _services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]; });











/***/ }),

/***/ "JUJx":
/*!************************************************************!*\
  !*** ./src/app/shared/api/services/layout-menu.service.ts ***!
  \************************************************************/
/*! exports provided: LayoutMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutMenuService", function() { return LayoutMenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-service */ "kcAd");
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request-builder */ "fXmr");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-configuration */ "CxSZ");
/* tslint:disable */








class LayoutMenuService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiAdminLayoutmenuGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAdminLayoutmenuGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, LayoutMenuService.ApiAdminLayoutmenuGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiAdminLayoutmenuGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAdminLayoutmenuGet$Plain(params) {
        return this.apiAdminLayoutmenuGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiAdminLayoutmenuGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAdminLayoutmenuGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, LayoutMenuService.ApiAdminLayoutmenuGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiAdminLayoutmenuGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAdminLayoutmenuGet$Json(params) {
        return this.apiAdminLayoutmenuGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
}
/**
 * Path part for operation apiAdminLayoutmenuGet
 */
LayoutMenuService.ApiAdminLayoutmenuGetPath = '/api/admin/layoutmenu';
LayoutMenuService.ɵfac = function LayoutMenuService_Factory(t) { return new (t || LayoutMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LayoutMenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LayoutMenuService, factory: LayoutMenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutMenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/dictionary/dictionary.service */ "Bsj9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_third_party_ep_components_components_ep_fullscreen_img_ep_fullscreen_img_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/_third-party/ep-components/components/ep-fullscreen-img/ep-fullscreen-img.component */ "wHi0");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");






class AppComponent {
    constructor(dictSV) {
        this.dictSV = dictSV;
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 3, consts: [[3, "btnCloseLabel"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ep-fullscreen-img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("btnCloseLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "GENERIC.BTN.CLOSE"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_third_party_ep_components_components_ep_fullscreen_img_ep_fullscreen_img_component__WEBPACK_IMPORTED_MODULE_3__["EpFullscreenImgComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _shared_services_dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"] }]; }, null); })();


/***/ }),

/***/ "Up50":
/*!********************************************************!*\
  !*** ./src/app/shared/api/services/imports.service.ts ***!
  \********************************************************/
/*! exports provided: ImportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportsService", function() { return ImportsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-service */ "kcAd");
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request-builder */ "fXmr");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-configuration */ "CxSZ");
/* tslint:disable */








class ImportsService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * Returns a list of logs.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiImportsGetallGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiImportsGetallGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ImportsService.ApiImportsGetallGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns a list of logs.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiImportsGetallGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiImportsGetallGet$Plain(params) {
        return this.apiImportsGetallGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns a list of logs.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiImportsGetallGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiImportsGetallGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ImportsService.ApiImportsGetallGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns a list of logs.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiImportsGetallGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiImportsGetallGet$Json(params) {
        return this.apiImportsGetallGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns a list of logs with filters.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiImportsGetlogimportsGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiImportsGetlogimportsGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ImportsService.ApiImportsGetlogimportsGetPath, 'get');
        if (params) {
            rb.query('dateFrom', params.dateFrom, {});
            rb.query('dateTo', params.dateTo, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns a list of logs with filters.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiImportsGetlogimportsGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiImportsGetlogimportsGet$Plain(params) {
        return this.apiImportsGetlogimportsGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns a list of logs with filters.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiImportsGetlogimportsGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiImportsGetlogimportsGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ImportsService.ApiImportsGetlogimportsGetPath, 'get');
        if (params) {
            rb.query('dateFrom', params.dateFrom, {});
            rb.query('dateTo', params.dateTo, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns a list of logs with filters.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiImportsGetlogimportsGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiImportsGetlogimportsGet$Json(params) {
        return this.apiImportsGetlogimportsGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns LogImportDTO with the specified id.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiImportsGetlogimportbyidGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiImportsGetlogimportbyidGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ImportsService.ApiImportsGetlogimportbyidGetPath, 'get');
        if (params) {
            rb.query('id', params.id, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns LogImportDTO with the specified id.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiImportsGetlogimportbyidGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiImportsGetlogimportbyidGet$Plain(params) {
        return this.apiImportsGetlogimportbyidGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns LogImportDTO with the specified id.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiImportsGetlogimportbyidGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiImportsGetlogimportbyidGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ImportsService.ApiImportsGetlogimportbyidGetPath, 'get');
        if (params) {
            rb.query('id', params.id, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns LogImportDTO with the specified id.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiImportsGetlogimportbyidGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiImportsGetlogimportbyidGet$Json(params) {
        return this.apiImportsGetlogimportbyidGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Process to import files.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiImportsImportfilesGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiImportsImportfilesGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ImportsService.ApiImportsImportfilesGetPath, 'get');
        if (params) {
            rb.query('path', params.path, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: String(r.body) === 'true' });
        }));
    }
    /**
     * Process to import files.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiImportsImportfilesGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiImportsImportfilesGet$Plain(params) {
        return this.apiImportsImportfilesGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Process to import files.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiImportsImportfilesGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiImportsImportfilesGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ImportsService.ApiImportsImportfilesGetPath, 'get');
        if (params) {
            rb.query('path', params.path, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: String(r.body) === 'true' });
        }));
    }
    /**
     * Process to import files.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiImportsImportfilesGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiImportsImportfilesGet$Json(params) {
        return this.apiImportsImportfilesGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Saves the log to DB. If the log already exist, update it.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiImportsSetPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiImportsSetPost$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ImportsService.ApiImportsSetPostPath, 'post');
        if (params) {
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: String(r.body) === 'true' });
        }));
    }
    /**
     * Saves the log to DB. If the log already exist, update it.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiImportsSetPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiImportsSetPost$Plain(params) {
        return this.apiImportsSetPost$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Saves the log to DB. If the log already exist, update it.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiImportsSetPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiImportsSetPost$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ImportsService.ApiImportsSetPostPath, 'post');
        if (params) {
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: String(r.body) === 'true' });
        }));
    }
    /**
     * Saves the log to DB. If the log already exist, update it.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiImportsSetPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiImportsSetPost$Json(params) {
        return this.apiImportsSetPost$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
}
/**
 * Path part for operation apiImportsGetallGet
 */
ImportsService.ApiImportsGetallGetPath = '/api/imports/getall';
/**
 * Path part for operation apiImportsGetlogimportsGet
 */
ImportsService.ApiImportsGetlogimportsGetPath = '/api/imports/getlogimports';
/**
 * Path part for operation apiImportsGetlogimportbyidGet
 */
ImportsService.ApiImportsGetlogimportbyidGetPath = '/api/imports/getlogimportbyid';
/**
 * Path part for operation apiImportsImportfilesGet
 */
ImportsService.ApiImportsImportfilesGetPath = '/api/imports/importfiles';
/**
 * Path part for operation apiImportsSetPost
 */
ImportsService.ApiImportsSetPostPath = '/api/imports/set';
ImportsService.ɵfac = function ImportsService_Factory(t) { return new (t || ImportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ImportsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImportsService, factory: ImportsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImportsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "XFuG":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/shared/_third-party/ep-components/components/ep-fullscreen-img/services/ep-fullscreen-img.service.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: EpFullscreenImgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpFullscreenImgService", function() { return EpFullscreenImgService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class EpFullscreenImgService {
    constructor() {
        this._animationTime = 300;
        this._imgUrl = null;
        this._show = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._hide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    openImage(url) {
        this._imgUrl = url;
        this._show.next();
    }
    closeImage() {
        this._hide.next();
        setTimeout(() => {
            this._imgUrl = null;
        }, this._animationTime);
    }
}
EpFullscreenImgService.ɵfac = function EpFullscreenImgService_Factory(t) { return new (t || EpFullscreenImgService)(); };
EpFullscreenImgService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EpFullscreenImgService, factory: EpFullscreenImgService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EpFullscreenImgService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "3pDu");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _shared_api_api_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/api/api.module */ "pL04");
/* harmony import */ var _shared_interceptors_api_error_api_error_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/interceptors/api-error/api-error.interceptor */ "Dp/R");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var _ckeditor_ckeditor5_build_classic_build_translations_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic/build/translations/es */ "ZfMF");
/* harmony import */ var _ckeditor_ckeditor5_build_classic_build_translations_es__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic_build_translations_es__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic_build_translations_eu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic/build/translations/eu */ "PDtD");
/* harmony import */ var _ckeditor_ckeditor5_build_classic_build_translations_eu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic_build_translations_eu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shared_interceptors_api_headers_api_header_lang_api_header_lang_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/interceptors/api-headers/api-header-lang/api-header-lang.interceptor */ "xe8+");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-owl-carousel-o */ "KMir");
/* harmony import */ var _shared_third_party_ep_components_components_ep_fullscreen_img_ep_fullscreen_img_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/_third-party/ep-components/components/ep-fullscreen-img/ep-fullscreen-img.module */ "pjuU");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "lQde");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/alert */ "CNMR");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "aHM3");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "St1U");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/popover */ "KOzp");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "38Bd");
/* harmony import */ var ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-bootstrap/rating */ "/oml");
/* harmony import */ var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-bootstrap/sortable */ "p4Ho");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "M3cK");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "ZMeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var ax_toolbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ax-toolbox */ "4/SI");
/* harmony import */ var _shared_interceptors_api_headers_api_header_kub_api_header_kub_interceptor__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shared/interceptors/api-headers/api-header-kub/api-header-kub.interceptor */ "703i");
/* harmony import */ var _shared_interceptors_api_header_jwt_api_header_jwt_interceptor__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/interceptors/api-header-jwt/api-header-jwt.interceptor */ "kkAM");












// CKEditor language load.
// MUST BE INCLUDED ON COMPILATION TIME



















































class AppModule {
    constructor(library) {
        this.library = library;
        //#region FONTAWESOME ICONS
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["fas"]);
        library.addIconPacks(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["fab"]);
        library.addIcons(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faEnvelope"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faClock"]);
        //#endregion
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconLibrary"])); }, providers: [
        { provide: ax_toolbox__WEBPACK_IMPORTED_MODULE_37__["TRANSL_MISSING_HANDLER_CONFIG"], useValue: {} },
        //#region INTERCEPTORS
        //#region INTERCEPTORS - JWT HEADER
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_api_header_jwt_api_header_jwt_interceptor__WEBPACK_IMPORTED_MODULE_39__["ApiHeaderJwtInterceptor"], multi: true },
        //#endregion
        //#region INTERCEPTORS - ERROR
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_api_error_api_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["ApiErrorInterceptor"], multi: true },
        //#endregion
        //#region INTERCEPTORS - HEADERS
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _shared_interceptors_api_headers_api_header_lang_api_header_lang_interceptor__WEBPACK_IMPORTED_MODULE_14__["ApiHeaderLangInterceptor"],
            multi: true,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _shared_interceptors_api_headers_api_header_kub_api_header_kub_interceptor__WEBPACK_IMPORTED_MODULE_38__["ApiHeaderKubInterceptor"],
            multi: true,
        },
    ], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production,
            }),
            _shared_api_api_module__WEBPACK_IMPORTED_MODULE_6__["ApiModule"].forRoot({ rootUrl: '' }),
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"],
            _shared_third_party_ep_components_components_ep_fullscreen_img_ep_fullscreen_img_module__WEBPACK_IMPORTED_MODULE_16__["EpFullscreenImgModule"],
            ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_17__["AccordionModule"].forRoot(),
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_18__["AlertModule"].forRoot(),
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_19__["ButtonsModule"].forRoot(),
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_20__["CollapseModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_22__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["ModalModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_24__["PaginationModule"].forRoot(),
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_25__["PopoverModule"].forRoot(),
            ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_26__["ProgressbarModule"].forRoot(),
            ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_27__["RatingModule"].forRoot(),
            ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_28__["SortableModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_29__["TabsModule"].forRoot(),
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_30__["TimepickerModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_31__["TooltipModule"].forRoot(),
            ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_32__["TypeaheadModule"].forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateModule"].forRoot(ax_toolbox__WEBPACK_IMPORTED_MODULE_37__["APP_MODULE_TRANSLATE_ROOT_CONFIG"]),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_36__["ToastrModule"].forRoot(ax_toolbox__WEBPACK_IMPORTED_MODULE_37__["APP_MODULE_TOASTR_ROOT_CONFIG"]),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
            ax_toolbox__WEBPACK_IMPORTED_MODULE_37__["BsMenuModule"].forRoot(new ax_toolbox__WEBPACK_IMPORTED_MODULE_37__["BsMenuConfig"]().setData({
                appLogoSrc: 'assets/img/logo/PryBase.png',
                isAppNameLabelShown: true,
            })),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"], _shared_api_api_module__WEBPACK_IMPORTED_MODULE_6__["ApiModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"],
        _shared_third_party_ep_components_components_ep_fullscreen_img_ep_fullscreen_img_module__WEBPACK_IMPORTED_MODULE_16__["EpFullscreenImgModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_17__["AccordionModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_18__["AlertModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_19__["ButtonsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_20__["CollapseModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDatepickerModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_22__["BsDropdownModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["ModalModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_24__["PaginationModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_25__["PopoverModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_26__["ProgressbarModule"], ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_27__["RatingModule"], ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_28__["SortableModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_29__["TabsModule"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_30__["TimepickerModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_31__["TooltipModule"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_32__["TypeaheadModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_36__["ToastrModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"], ax_toolbox__WEBPACK_IMPORTED_MODULE_37__["BsMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
                        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production,
                    }),
                    _shared_api_api_module__WEBPACK_IMPORTED_MODULE_6__["ApiModule"].forRoot({ rootUrl: '' }),
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"],
                    _shared_third_party_ep_components_components_ep_fullscreen_img_ep_fullscreen_img_module__WEBPACK_IMPORTED_MODULE_16__["EpFullscreenImgModule"],
                    ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_17__["AccordionModule"].forRoot(),
                    ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_18__["AlertModule"].forRoot(),
                    ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_19__["ButtonsModule"].forRoot(),
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_20__["CollapseModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_22__["BsDropdownModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["ModalModule"].forRoot(),
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_24__["PaginationModule"].forRoot(),
                    ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_25__["PopoverModule"].forRoot(),
                    ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_26__["ProgressbarModule"].forRoot(),
                    ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_27__["RatingModule"].forRoot(),
                    ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_28__["SortableModule"].forRoot(),
                    ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_29__["TabsModule"].forRoot(),
                    ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_30__["TimepickerModule"].forRoot(),
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_31__["TooltipModule"].forRoot(),
                    ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_32__["TypeaheadModule"].forRoot(),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateModule"].forRoot(ax_toolbox__WEBPACK_IMPORTED_MODULE_37__["APP_MODULE_TRANSLATE_ROOT_CONFIG"]),
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_36__["ToastrModule"].forRoot(ax_toolbox__WEBPACK_IMPORTED_MODULE_37__["APP_MODULE_TOASTR_ROOT_CONFIG"]),
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                    ax_toolbox__WEBPACK_IMPORTED_MODULE_37__["BsMenuModule"].forRoot(new ax_toolbox__WEBPACK_IMPORTED_MODULE_37__["BsMenuConfig"]().setData({
                        appLogoSrc: 'assets/img/logo/PryBase.png',
                        isAppNameLabelShown: true,
                    })),
                ],
                providers: [
                    { provide: ax_toolbox__WEBPACK_IMPORTED_MODULE_37__["TRANSL_MISSING_HANDLER_CONFIG"], useValue: {} },
                    //#region INTERCEPTORS
                    //#region INTERCEPTORS - JWT HEADER
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_api_header_jwt_api_header_jwt_interceptor__WEBPACK_IMPORTED_MODULE_39__["ApiHeaderJwtInterceptor"], multi: true },
                    //#endregion
                    //#region INTERCEPTORS - ERROR
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_api_error_api_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["ApiErrorInterceptor"], multi: true },
                    //#endregion
                    //#region INTERCEPTORS - HEADERS
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                        useClass: _shared_interceptors_api_headers_api_header_lang_api_header_lang_interceptor__WEBPACK_IMPORTED_MODULE_14__["ApiHeaderLangInterceptor"],
                        multi: true,
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                        useClass: _shared_interceptors_api_headers_api_header_kub_api_header_kub_interceptor__WEBPACK_IMPORTED_MODULE_38__["ApiHeaderKubInterceptor"],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "ZyAr":
/*!********************************************************************!*\
  !*** ./src/app/shared/models/api-translations/api-translations.ts ***!
  \********************************************************************/
/*! exports provided: markApiStrings, markApiErrorStrings, markApiResponseStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markApiStrings", function() { return markApiStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markApiErrorStrings", function() { return markApiErrorStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markApiResponseStrings", function() { return markApiResponseStrings; });
/* harmony import */ var _biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @biesbjerg/ngx-translate-extract-marker */ "ogFT");

/**
 * This function does nothing by itself, it is only used
 * to keep track of the errors the API returns and make sure
 * translations files are updated.
 */
function markApiStrings() {
    markApiErrorStrings();
    markApiResponseStrings();
}
function markApiErrorStrings() {
    Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_0__["marker"])('API.ERROR.AUTH.PASS.FAIL');
}
function markApiResponseStrings() {
    Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_0__["marker"])('MENU.PAGE.HOME');
    Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_0__["marker"])('MENU.PAGE.INSURANCE.MAIN');
    Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_0__["marker"])('MENU.PAGE.INSURANCE.LIST');
    Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_0__["marker"])('MENU.PAGE.INSURANCE.DETAILS');
    Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_0__["marker"])('MENU.PAGE.INSURANCE.NEW');
    Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_0__["marker"])('MENU.PAGE.RCA.MAIN');
    Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_0__["marker"])('MENU.PAGE.ZITYENTITY.LIST');
    Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_0__["marker"])('MENU.PAGE.PROJECT.MAIN');
    Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_0__["marker"])('MENU.PAGE.PROJECT.LIST');
    Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_0__["marker"])('MENU.PAGE.PROJECT.DETAILS');
    Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_0__["marker"])('MENU.PAGE.PROJECT.NEW');
}


/***/ }),

/***/ "a0sM":
/*!******************************************************!*\
  !*** ./src/app/shared/api/services/users.service.ts ***!
  \******************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-service */ "kcAd");
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request-builder */ "fXmr");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-configuration */ "CxSZ");
/* tslint:disable */








class UsersService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * Returns a list of registered users.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetallusersGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetallusersGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetallusersGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns a list of registered users.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetallusersGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetallusersGet$Plain(params) {
        return this.apiUsersGetallusersGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns a list of registered users.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetallusersGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetallusersGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetallusersGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns a list of registered users.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetallusersGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetallusersGet$Json(params) {
        return this.apiUsersGetallusersGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns userDTO for the username specified.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetuserbynameGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetuserbynameGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetuserbynameGetPath, 'get');
        if (params) {
            rb.query('user', params.user, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns userDTO for the username specified.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetuserbynameGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetuserbynameGet$Plain(params) {
        return this.apiUsersGetuserbynameGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns userDTO for the username specified.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetuserbynameGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetuserbynameGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetuserbynameGetPath, 'get');
        if (params) {
            rb.query('user', params.user, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns userDTO for the username specified.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetuserbynameGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetuserbynameGet$Json(params) {
        return this.apiUsersGetuserbynameGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns userDTO for the user with the specified id.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetuserbyidGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetuserbyidGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetuserbyidGetPath, 'get');
        if (params) {
            rb.query('id', params.id, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns userDTO for the user with the specified id.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetuserbyidGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetuserbyidGet$Plain(params) {
        return this.apiUsersGetuserbyidGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns userDTO for the user with the specified id.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetuserbyidGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetuserbyidGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetuserbyidGetPath, 'get');
        if (params) {
            rb.query('id', params.id, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns userDTO for the user with the specified id.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetuserbyidGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetuserbyidGet$Json(params) {
        return this.apiUsersGetuserbyidGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns a number of users by department Id.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetusersbydepartmentGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetusersbydepartmentGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetusersbydepartmentGetPath, 'get');
        if (params) {
            rb.query('departmentId', params.departmentId, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: parseFloat(String(r.body)) });
        }));
    }
    /**
     * Returns a number of users by department Id.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetusersbydepartmentGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetusersbydepartmentGet$Plain(params) {
        return this.apiUsersGetusersbydepartmentGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns a number of users by department Id.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetusersbydepartmentGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetusersbydepartmentGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetusersbydepartmentGetPath, 'get');
        if (params) {
            rb.query('departmentId', params.departmentId, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: parseFloat(String(r.body)) });
        }));
    }
    /**
     * Returns a number of users by department Id.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetusersbydepartmentGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetusersbydepartmentGet$Json(params) {
        return this.apiUsersGetusersbydepartmentGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Return list of all users of Active Directory.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetalladusersGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetalladusersGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetalladusersGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Return list of all users of Active Directory.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetalladusersGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetalladusersGet$Plain(params) {
        return this.apiUsersGetalladusersGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Return list of all users of Active Directory.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetalladusersGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetalladusersGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetalladusersGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Return list of all users of Active Directory.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetalladusersGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetalladusersGet$Json(params) {
        return this.apiUsersGetalladusersGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns the menu nodes for the user.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetmenubyuserGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetmenubyuserGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetmenubyuserGetPath, 'get');
        if (params) {
            rb.query('user', params.user, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns the menu nodes for the user.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetmenubyuserGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetmenubyuserGet$Plain(params) {
        return this.apiUsersGetmenubyuserGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns the menu nodes for the user.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetmenubyuserGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetmenubyuserGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetmenubyuserGetPath, 'get');
        if (params) {
            rb.query('user', params.user, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns the menu nodes for the user.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetmenubyuserGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetmenubyuserGet$Json(params) {
        return this.apiUsersGetmenubyuserGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns all departments.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetalldepartmentsGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetalldepartmentsGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetalldepartmentsGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns all departments.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetalldepartmentsGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetalldepartmentsGet$Plain(params) {
        return this.apiUsersGetalldepartmentsGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns all departments.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetalldepartmentsGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetalldepartmentsGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetalldepartmentsGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns all departments.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetalldepartmentsGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetalldepartmentsGet$Json(params) {
        return this.apiUsersGetalldepartmentsGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns all levels.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetalllevelsGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetalllevelsGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetalllevelsGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns all levels.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetalllevelsGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetalllevelsGet$Plain(params) {
        return this.apiUsersGetalllevelsGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns all levels.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetalllevelsGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetalllevelsGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetalllevelsGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns all levels.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetalllevelsGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetalllevelsGet$Json(params) {
        return this.apiUsersGetalllevelsGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns UserDepartmentDTO for the department with the specified id.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetdepartmentbyidGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetdepartmentbyidGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetdepartmentbyidGetPath, 'get');
        if (params) {
            rb.query('id', params.id, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns UserDepartmentDTO for the department with the specified id.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetdepartmentbyidGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetdepartmentbyidGet$Plain(params) {
        return this.apiUsersGetdepartmentbyidGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns UserDepartmentDTO for the department with the specified id.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetdepartmentbyidGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetdepartmentbyidGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetdepartmentbyidGetPath, 'get');
        if (params) {
            rb.query('id', params.id, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns UserDepartmentDTO for the department with the specified id.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetdepartmentbyidGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetdepartmentbyidGet$Json(params) {
        return this.apiUsersGetdepartmentbyidGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns UserLevelDTO for the level with the specified id.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetlevelbyidGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetlevelbyidGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetlevelbyidGetPath, 'get');
        if (params) {
            rb.query('id', params.id, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns UserLevelDTO for the level with the specified id.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetlevelbyidGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetlevelbyidGet$Plain(params) {
        return this.apiUsersGetlevelbyidGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns UserLevelDTO for the level with the specified id.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetlevelbyidGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetlevelbyidGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetlevelbyidGetPath, 'get');
        if (params) {
            rb.query('id', params.id, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns UserLevelDTO for the level with the specified id.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetlevelbyidGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetlevelbyidGet$Json(params) {
        return this.apiUsersGetlevelbyidGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns all modules.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetallmodulesGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetallmodulesGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetallmodulesGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns all modules.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetallmodulesGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetallmodulesGet$Plain(params) {
        return this.apiUsersGetallmodulesGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns all modules.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetallmodulesGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetallmodulesGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetallmodulesGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns all modules.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetallmodulesGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetallmodulesGet$Json(params) {
        return this.apiUsersGetallmodulesGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns all functionalities.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetallfunctionalitiesGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetallfunctionalitiesGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetallfunctionalitiesGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns all functionalities.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetallfunctionalitiesGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetallfunctionalitiesGet$Plain(params) {
        return this.apiUsersGetallfunctionalitiesGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns all functionalities.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetallfunctionalitiesGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetallfunctionalitiesGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetallfunctionalitiesGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns all functionalities.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetallfunctionalitiesGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetallfunctionalitiesGet$Json(params) {
        return this.apiUsersGetallfunctionalitiesGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns all details.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetalldetailsGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetalldetailsGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetalldetailsGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns all details.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetalldetailsGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetalldetailsGet$Plain(params) {
        return this.apiUsersGetalldetailsGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns all details.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetalldetailsGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetalldetailsGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetalldetailsGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns all details.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetalldetailsGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetalldetailsGet$Json(params) {
        return this.apiUsersGetalldetailsGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns the permission by filter.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetpermissionbyfilterGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetpermissionbyfilterGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetpermissionbyfilterGetPath, 'get');
        if (params) {
            rb.query('department', params.department, {});
            rb.query('level', params.level, {});
            rb.query('functionality', params.functionality, {});
            rb.query('detail', params.detail, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns the permission by filter.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetpermissionbyfilterGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetpermissionbyfilterGet$Plain(params) {
        return this.apiUsersGetpermissionbyfilterGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns the permission by filter.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetpermissionbyfilterGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetpermissionbyfilterGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetpermissionbyfilterGetPath, 'get');
        if (params) {
            rb.query('department', params.department, {});
            rb.query('level', params.level, {});
            rb.query('functionality', params.functionality, {});
            rb.query('detail', params.detail, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns the permission by filter.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetpermissionbyfilterGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetpermissionbyfilterGet$Json(params) {
        return this.apiUsersGetpermissionbyfilterGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns number of permissions by department Id.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetpermissionsbydepartmentGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetpermissionsbydepartmentGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetpermissionsbydepartmentGetPath, 'get');
        if (params) {
            rb.query('departmentId', params.departmentId, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: parseFloat(String(r.body)) });
        }));
    }
    /**
     * Returns number of permissions by department Id.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetpermissionsbydepartmentGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetpermissionsbydepartmentGet$Plain(params) {
        return this.apiUsersGetpermissionsbydepartmentGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns number of permissions by department Id.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetpermissionsbydepartmentGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetpermissionsbydepartmentGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetpermissionsbydepartmentGetPath, 'get');
        if (params) {
            rb.query('departmentId', params.departmentId, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: parseFloat(String(r.body)) });
        }));
    }
    /**
     * Returns number of permissions by department Id.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetpermissionsbydepartmentGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersGetpermissionsbydepartmentGet$Json(params) {
        return this.apiUsersGetpermissionsbydepartmentGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Saves the user to DB. If the user already exist, update it.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersSetuserPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUsersSetuserPost$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersSetuserPostPath, 'post');
        if (params) {
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: String(r.body) === 'true' });
        }));
    }
    /**
     * Saves the user to DB. If the user already exist, update it.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersSetuserPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUsersSetuserPost$Plain(params) {
        return this.apiUsersSetuserPost$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Saves the user to DB. If the user already exist, update it.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersSetuserPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUsersSetuserPost$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersSetuserPostPath, 'post');
        if (params) {
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: String(r.body) === 'true' });
        }));
    }
    /**
     * Saves the user to DB. If the user already exist, update it.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersSetuserPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUsersSetuserPost$Json(params) {
        return this.apiUsersSetuserPost$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Saves the department to DB. If the department already exist, update it.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersSetdepartmentPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUsersSetdepartmentPost$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersSetdepartmentPostPath, 'post');
        if (params) {
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: String(r.body) === 'true' });
        }));
    }
    /**
     * Saves the department to DB. If the department already exist, update it.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersSetdepartmentPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUsersSetdepartmentPost$Plain(params) {
        return this.apiUsersSetdepartmentPost$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Saves the department to DB. If the department already exist, update it.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersSetdepartmentPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUsersSetdepartmentPost$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersSetdepartmentPostPath, 'post');
        if (params) {
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: String(r.body) === 'true' });
        }));
    }
    /**
     * Saves the department to DB. If the department already exist, update it.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersSetdepartmentPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUsersSetdepartmentPost$Json(params) {
        return this.apiUsersSetdepartmentPost$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns all the permission for the specified user.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetpermissionsPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUsersGetpermissionsPost$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetpermissionsPostPath, 'post');
        if (params) {
            rb.query('level', params.level, {});
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns all the permission for the specified user.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetpermissionsPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUsersGetpermissionsPost$Plain(params) {
        return this.apiUsersGetpermissionsPost$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Returns all the permission for the specified user.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersGetpermissionsPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUsersGetpermissionsPost$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersGetpermissionsPostPath, 'post');
        if (params) {
            rb.query('level', params.level, {});
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Returns all the permission for the specified user.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersGetpermissionsPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUsersGetpermissionsPost$Json(params) {
        return this.apiUsersGetpermissionsPost$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Saves the lines for a set of permissions to DB.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersSetpermissionsPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUsersSetpermissionsPost$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersSetpermissionsPostPath, 'post');
        if (params) {
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: String(r.body) === 'true' });
        }));
    }
    /**
     * Saves the lines for a set of permissions to DB.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersSetpermissionsPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUsersSetpermissionsPost$Plain(params) {
        return this.apiUsersSetpermissionsPost$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Saves the lines for a set of permissions to DB.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersSetpermissionsPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUsersSetpermissionsPost$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersSetpermissionsPostPath, 'post');
        if (params) {
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: String(r.body) === 'true' });
        }));
    }
    /**
     * Saves the lines for a set of permissions to DB.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersSetpermissionsPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUsersSetpermissionsPost$Json(params) {
        return this.apiUsersSetpermissionsPost$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Logic delete the user from DB.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersDeleteuserDelete$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersDeleteuserDelete$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersDeleteuserDeletePath, 'delete');
        if (params) {
            rb.query('id', params.id, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: String(r.body) === 'true' });
        }));
    }
    /**
     * Logic delete the user from DB.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersDeleteuserDelete$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersDeleteuserDelete$Plain(params) {
        return this.apiUsersDeleteuserDelete$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Logic delete the user from DB.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersDeleteuserDelete$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersDeleteuserDelete$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersDeleteuserDeletePath, 'delete');
        if (params) {
            rb.query('id', params.id, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: String(r.body) === 'true' });
        }));
    }
    /**
     * Logic delete the user from DB.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersDeleteuserDelete$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersDeleteuserDelete$Json(params) {
        return this.apiUsersDeleteuserDelete$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Logic delete the department from DB.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersDeletedepartmentDelete$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersDeletedepartmentDelete$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersDeletedepartmentDeletePath, 'delete');
        if (params) {
            rb.query('id', params.id, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: String(r.body) === 'true' });
        }));
    }
    /**
     * Logic delete the department from DB.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersDeletedepartmentDelete$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersDeletedepartmentDelete$Plain(params) {
        return this.apiUsersDeletedepartmentDelete$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Logic delete the department from DB.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUsersDeletedepartmentDelete$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersDeletedepartmentDelete$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, UsersService.ApiUsersDeletedepartmentDeletePath, 'delete');
        if (params) {
            rb.query('id', params.id, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: String(r.body) === 'true' });
        }));
    }
    /**
     * Logic delete the department from DB.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiUsersDeletedepartmentDelete$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUsersDeletedepartmentDelete$Json(params) {
        return this.apiUsersDeletedepartmentDelete$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
}
/**
 * Path part for operation apiUsersGetallusersGet
 */
UsersService.ApiUsersGetallusersGetPath = '/api/users/getallusers';
/**
 * Path part for operation apiUsersGetuserbynameGet
 */
UsersService.ApiUsersGetuserbynameGetPath = '/api/users/getuserbyname';
/**
 * Path part for operation apiUsersGetuserbyidGet
 */
UsersService.ApiUsersGetuserbyidGetPath = '/api/users/getuserbyid';
/**
 * Path part for operation apiUsersGetusersbydepartmentGet
 */
UsersService.ApiUsersGetusersbydepartmentGetPath = '/api/users/getusersbydepartment';
/**
 * Path part for operation apiUsersGetalladusersGet
 */
UsersService.ApiUsersGetalladusersGetPath = '/api/users/getalladusers';
/**
 * Path part for operation apiUsersGetmenubyuserGet
 */
UsersService.ApiUsersGetmenubyuserGetPath = '/api/users/getmenubyuser';
/**
 * Path part for operation apiUsersGetalldepartmentsGet
 */
UsersService.ApiUsersGetalldepartmentsGetPath = '/api/users/getalldepartments';
/**
 * Path part for operation apiUsersGetalllevelsGet
 */
UsersService.ApiUsersGetalllevelsGetPath = '/api/users/getalllevels';
/**
 * Path part for operation apiUsersGetdepartmentbyidGet
 */
UsersService.ApiUsersGetdepartmentbyidGetPath = '/api/users/getdepartmentbyid';
/**
 * Path part for operation apiUsersGetlevelbyidGet
 */
UsersService.ApiUsersGetlevelbyidGetPath = '/api/users/getlevelbyid';
/**
 * Path part for operation apiUsersGetallmodulesGet
 */
UsersService.ApiUsersGetallmodulesGetPath = '/api/users/getallmodules';
/**
 * Path part for operation apiUsersGetallfunctionalitiesGet
 */
UsersService.ApiUsersGetallfunctionalitiesGetPath = '/api/users/getallfunctionalities';
/**
 * Path part for operation apiUsersGetalldetailsGet
 */
UsersService.ApiUsersGetalldetailsGetPath = '/api/users/getalldetails';
/**
 * Path part for operation apiUsersGetpermissionbyfilterGet
 */
UsersService.ApiUsersGetpermissionbyfilterGetPath = '/api/users/getpermissionbyfilter';
/**
 * Path part for operation apiUsersGetpermissionsbydepartmentGet
 */
UsersService.ApiUsersGetpermissionsbydepartmentGetPath = '/api/users/getpermissionsbydepartment';
/**
 * Path part for operation apiUsersSetuserPost
 */
UsersService.ApiUsersSetuserPostPath = '/api/users/setuser';
/**
 * Path part for operation apiUsersSetdepartmentPost
 */
UsersService.ApiUsersSetdepartmentPostPath = '/api/users/setdepartment';
/**
 * Path part for operation apiUsersGetpermissionsPost
 */
UsersService.ApiUsersGetpermissionsPostPath = '/api/users/getpermissions';
/**
 * Path part for operation apiUsersSetpermissionsPost
 */
UsersService.ApiUsersSetpermissionsPostPath = '/api/users/setpermissions';
/**
 * Path part for operation apiUsersDeleteuserDelete
 */
UsersService.ApiUsersDeleteuserDeletePath = '/api/users/deleteuser';
/**
 * Path part for operation apiUsersDeletedepartmentDelete
 */
UsersService.ApiUsersDeletedepartmentDeletePath = '/api/users/deletedepartment';
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "cxeF":
/*!********************************************************!*\
  !*** ./src/app/shared/services/token/token.service.ts ***!
  \********************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);



class TokenService {
    constructor() {
        this.token = null;
        this.getStoredToken();
    }
    getStoredToken() {
        return new Promise((resolve) => {
            if (!this.token || moment__WEBPACK_IMPORTED_MODULE_1__().isSameOrAfter(this.token.validTo)) {
                this.token = JSON.parse(localStorage.getItem('auth'));
            }
            resolve(this.token);
        });
    }
    setStoredToken(newData) {
        localStorage.setItem('auth', JSON.stringify(newData));
        this.token = newData;
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dVYb":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/_third-party/ep-components/directives/auto-blur/auto-blur.directive.ts ***!
  \***********************************************************************************************/
/*! exports provided: AutoBlurDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoBlurDirective", function() { return AutoBlurDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class AutoBlurDirective {
    constructor(el) {
        this.el = el;
    }
    onHostClick(event) {
        setTimeout(() => {
            this.el.nativeElement.blur();
        }, 0);
    }
}
AutoBlurDirective.ɵfac = function AutoBlurDirective_Factory(t) { return new (t || AutoBlurDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AutoBlurDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutoBlurDirective, selectors: [["", "autoBlur", ""]], hostBindings: function AutoBlurDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoBlurDirective_click_HostBindingHandler($event) { return ctx.onHostClick($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoBlurDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[autoBlur]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onHostClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "eQiK":
/*!**********************************************************!*\
  !*** ./src/app/shared/api/services/employees.service.ts ***!
  \**********************************************************/
/*! exports provided: EmployeesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesService", function() { return EmployeesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-service */ "kcAd");
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request-builder */ "fXmr");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-configuration */ "CxSZ");
/* tslint:disable */








class EmployeesService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * Obtiene un empleado con la id seleccionada.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesGetbyidGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesGetbyidGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesGetbyidGetPath, 'get');
        if (params) {
            rb.query('id', params.id, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Obtiene un empleado con la id seleccionada.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesGetbyidGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesGetbyidGet$Plain(params) {
        return this.apiEmployeesGetbyidGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Obtiene un empleado con la id seleccionada.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesGetbyidGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesGetbyidGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesGetbyidGetPath, 'get');
        if (params) {
            rb.query('id', params.id, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Obtiene un empleado con la id seleccionada.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesGetbyidGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesGetbyidGet$Json(params) {
        return this.apiEmployeesGetbyidGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Obtiene la lista de empleados.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesGetlistPost$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesGetlistPost$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesGetlistPostPath, 'post');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Obtiene la lista de empleados.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesGetlistPost$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesGetlistPost$Plain(params) {
        return this.apiEmployeesGetlistPost$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Obtiene la lista de empleados.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesGetlistPost$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesGetlistPost$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesGetlistPostPath, 'post');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Obtiene la lista de empleados.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesGetlistPost$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesGetlistPost$Json(params) {
        return this.apiEmployeesGetlistPost$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Obtiene la lista de empleados.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesGetlistcompletaPost$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesGetlistcompletaPost$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesGetlistcompletaPostPath, 'post');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Obtiene la lista de empleados.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesGetlistcompletaPost$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesGetlistcompletaPost$Plain(params) {
        return this.apiEmployeesGetlistcompletaPost$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Obtiene la lista de empleados.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesGetlistcompletaPost$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesGetlistcompletaPost$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesGetlistcompletaPostPath, 'post');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Obtiene la lista de empleados.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesGetlistcompletaPost$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesGetlistcompletaPost$Json(params) {
        return this.apiEmployeesGetlistcompletaPost$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesPositionlistGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesPositionlistGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesPositionlistGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesPositionlistGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesPositionlistGet$Plain(params) {
        return this.apiEmployeesPositionlistGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesPositionlistGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesPositionlistGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesPositionlistGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesPositionlistGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesPositionlistGet$Json(params) {
        return this.apiEmployeesPositionlistGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesDatatablePost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiEmployeesDatatablePost$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesDatatablePostPath, 'post');
        if (params) {
            rb.query('pi', params.pi, {});
            rb.query('ps', params.ps, {});
            rb.query('sn', params.sn, {});
            rb.query('sd', params.sd, {});
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesDatatablePost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiEmployeesDatatablePost$Plain(params) {
        return this.apiEmployeesDatatablePost$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesDatatablePost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiEmployeesDatatablePost$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesDatatablePostPath, 'post');
        if (params) {
            rb.query('pi', params.pi, {});
            rb.query('ps', params.ps, {});
            rb.query('sn', params.sn, {});
            rb.query('sd', params.sd, {});
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesDatatablePost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiEmployeesDatatablePost$Json(params) {
        return this.apiEmployeesDatatablePost$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Obtiene la lista de empleados filtrada por name Contains.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesGetlistcombolistGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesGetlistcombolistGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesGetlistcombolistGetPath, 'get');
        if (params) {
            rb.query('filtro', params.filtro, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Obtiene la lista de empleados filtrada por name Contains.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesGetlistcombolistGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesGetlistcombolistGet$Plain(params) {
        return this.apiEmployeesGetlistcombolistGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Obtiene la lista de empleados filtrada por name Contains.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesGetlistcombolistGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesGetlistcombolistGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesGetlistcombolistGetPath, 'get');
        if (params) {
            rb.query('filtro', params.filtro, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Obtiene la lista de empleados filtrada por name Contains.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesGetlistcombolistGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesGetlistcombolistGet$Json(params) {
        return this.apiEmployeesGetlistcombolistGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Crea un nuevo empleado en la BD.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesInsertPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiEmployeesInsertPost$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesInsertPostPath, 'post');
        if (params) {
            rb.query('commit', params.commit, {});
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Crea un nuevo empleado en la BD.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesInsertPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiEmployeesInsertPost$Plain(params) {
        return this.apiEmployeesInsertPost$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Crea un nuevo empleado en la BD.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesInsertPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiEmployeesInsertPost$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesInsertPostPath, 'post');
        if (params) {
            rb.query('commit', params.commit, {});
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Crea un nuevo empleado en la BD.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesInsertPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiEmployeesInsertPost$Json(params) {
        return this.apiEmployeesInsertPost$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Busca al antiguo empleado en la BD y actualiza sus datos.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesUpdatePost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiEmployeesUpdatePost$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesUpdatePostPath, 'post');
        if (params) {
            rb.query('commit', params.commit, {});
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Busca al antiguo empleado en la BD y actualiza sus datos.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesUpdatePost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiEmployeesUpdatePost$Plain(params) {
        return this.apiEmployeesUpdatePost$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Busca al antiguo empleado en la BD y actualiza sus datos.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesUpdatePost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiEmployeesUpdatePost$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesUpdatePostPath, 'post');
        if (params) {
            rb.query('commit', params.commit, {});
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Busca al antiguo empleado en la BD y actualiza sus datos.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesUpdatePost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiEmployeesUpdatePost$Json(params) {
        return this.apiEmployeesUpdatePost$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Borra un empleado de la BD.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesDeleteDelete$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesDeleteDelete$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesDeleteDeletePath, 'delete');
        if (params) {
            rb.query('id', params.id, {});
            rb.query('commit', params.commit, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Borra un empleado de la BD.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesDeleteDelete$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesDeleteDelete$Plain(params) {
        return this.apiEmployeesDeleteDelete$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Borra un empleado de la BD.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiEmployeesDeleteDelete$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesDeleteDelete$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, EmployeesService.ApiEmployeesDeleteDeletePath, 'delete');
        if (params) {
            rb.query('id', params.id, {});
            rb.query('commit', params.commit, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Borra un empleado de la BD.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiEmployeesDeleteDelete$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiEmployeesDeleteDelete$Json(params) {
        return this.apiEmployeesDeleteDelete$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
}
/**
 * Path part for operation apiEmployeesGetbyidGet
 */
EmployeesService.ApiEmployeesGetbyidGetPath = '/api/employees/getbyid';
/**
 * Path part for operation apiEmployeesGetlistPost
 */
EmployeesService.ApiEmployeesGetlistPostPath = '/api/employees/getlist';
/**
 * Path part for operation apiEmployeesGetlistcompletaPost
 */
EmployeesService.ApiEmployeesGetlistcompletaPostPath = '/api/employees/getlistcompleta';
/**
 * Path part for operation apiEmployeesPositionlistGet
 */
EmployeesService.ApiEmployeesPositionlistGetPath = '/api/employees/positionlist';
/**
 * Path part for operation apiEmployeesDatatablePost
 */
EmployeesService.ApiEmployeesDatatablePostPath = '/api/employees/datatable';
/**
 * Path part for operation apiEmployeesGetlistcombolistGet
 */
EmployeesService.ApiEmployeesGetlistcombolistGetPath = '/api/employees/getlistcombolist';
/**
 * Path part for operation apiEmployeesInsertPost
 */
EmployeesService.ApiEmployeesInsertPostPath = '/api/employees/insert';
/**
 * Path part for operation apiEmployeesUpdatePost
 */
EmployeesService.ApiEmployeesUpdatePostPath = '/api/employees/update';
/**
 * Path part for operation apiEmployeesDeleteDelete
 */
EmployeesService.ApiEmployeesDeleteDeletePath = '/api/employees/delete';
EmployeesService.ɵfac = function EmployeesService_Factory(t) { return new (t || EmployeesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EmployeesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeesService, factory: EmployeesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fXmr":
/*!***********************************************!*\
  !*** ./src/app/shared/api/request-builder.ts ***!
  \***********************************************/
/*! exports provided: RequestBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestBuilder", function() { return RequestBuilder; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* tslint:disable */

/**
 * Custom parameter codec to correctly handle the plus sign in parameter
 * values. See https://github.com/angular/angular/issues/18261
 */
class ParameterCodec {
    encodeKey(key) {
        return encodeURIComponent(key);
    }
    encodeValue(value) {
        return encodeURIComponent(value);
    }
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}
const ParameterCodecInstance = new ParameterCodec();
/**
 * Base class for a parameter
 */
class Parameter {
    constructor(name, value, options, defaultStyle, defaultExplode) {
        this.name = name;
        this.value = value;
        this.options = options;
        this.options = options || {};
        if (this.options.style === null || this.options.style === undefined) {
            this.options.style = defaultStyle;
        }
        if (this.options.explode === null || this.options.explode === undefined) {
            this.options.explode = defaultExplode;
        }
    }
    serializeValue(value, separator = ',') {
        if (value === null || value === undefined) {
            return '';
        }
        else if (value instanceof Array) {
            return value.map(v => this.serializeValue(v).split(separator).join(encodeURIComponent(separator))).join(separator);
        }
        else if (typeof value === 'object') {
            const array = [];
            for (const key of Object.keys(value)) {
                let propVal = value[key];
                if (propVal !== null && propVal !== undefined) {
                    propVal = this.serializeValue(propVal).split(separator).join(encodeURIComponent(separator));
                    if (this.options.explode) {
                        array.push(`${key}=${propVal}`);
                    }
                    else {
                        array.push(key);
                        array.push(propVal);
                    }
                }
            }
            return array.join(separator);
        }
        else {
            return String(value);
        }
    }
}
/**
 * A parameter in the operation path
 */
class PathParameter extends Parameter {
    constructor(name, value, options) {
        super(name, value, options, 'simple', false);
    }
    append(path) {
        let value = this.value;
        if (value === null || value === undefined) {
            value = '';
        }
        let prefix = this.options.style === 'label' ? '.' : '';
        let separator = this.options.explode ? prefix === '' ? ',' : prefix : ',';
        if (this.options.style === 'matrix') {
            // The parameter name is just used as prefix, except in some cases...
            prefix = `;${this.name}=`;
            if (this.options.explode && typeof value === 'object') {
                prefix = ';';
                if (value instanceof Array) {
                    // For arrays we have to repeat the name for each element
                    value = value.map(v => `${this.name}=${this.serializeValue(v, ';')}`);
                    separator = ';';
                }
                else {
                    // For objects we have to put each the key / value pairs
                    value = this.serializeValue(value, ';');
                }
            }
        }
        value = prefix + this.serializeValue(value, separator);
        // Replace both the plain variable and the corresponding variant taking in the prefix and explode into account
        path = path.replace(`{${this.name}}`, value);
        path = path.replace(`{${prefix}${this.name}${this.options.explode ? '*' : ''}}`, value);
        return path;
    }
}
/**
 * A parameter in the query
 */
class QueryParameter extends Parameter {
    constructor(name, value, options) {
        super(name, value, options, 'form', true);
    }
    append(params) {
        if (this.value instanceof Array) {
            // Array serialization
            if (this.options.explode) {
                for (const v of this.value) {
                    params = params.append(this.name, this.serializeValue(v));
                }
            }
            else {
                const separator = this.options.style === 'spaceDelimited'
                    ? ' ' : this.options.style === 'pipeDelimited'
                    ? '|' : ',';
                return params.append(this.name, this.serializeValue(this.value, separator));
            }
        }
        else if (this.value !== null && typeof this.value === 'object') {
            // Object serialization
            if (this.options.style === 'deepObject') {
                // Append a parameter for each key, in the form `name[key]`
                for (const key of Object.keys(this.value)) {
                    const propVal = this.value[key];
                    if (propVal !== null && propVal !== undefined) {
                        params = params.append(`${this.name}[${key}]`, this.serializeValue(propVal));
                    }
                }
            }
            else if (this.options.explode) {
                // Append a parameter for each key without using the parameter name
                for (const key of Object.keys(this.value)) {
                    const propVal = this.value[key];
                    if (propVal !== null && propVal !== undefined) {
                        params = params.append(key, this.serializeValue(propVal));
                    }
                }
            }
            else {
                // Append a single parameter whose values are a comma-separated list of key,value,key,value...
                const array = [];
                for (const key of Object.keys(this.value)) {
                    const propVal = this.value[key];
                    if (propVal !== null && propVal !== undefined) {
                        array.push(key);
                        array.push(propVal);
                    }
                }
                params = params.append(this.name, this.serializeValue(array));
            }
        }
        else if (this.value !== null && this.value !== undefined) {
            // Plain value
            params = params.append(this.name, this.serializeValue(this.value));
        }
        return params;
    }
}
/**
 * A parameter in the HTTP request header
 */
class HeaderParameter extends Parameter {
    constructor(name, value, options) {
        super(name, value, options, 'simple', false);
    }
    append(headers) {
        if (this.value !== null && this.value !== undefined) {
            if (this.value instanceof Array) {
                for (const v of this.value) {
                    headers = headers.append(this.name, this.serializeValue(v));
                }
            }
            else {
                headers = headers.append(this.name, this.serializeValue(this.value));
            }
        }
        return headers;
    }
}
/**
 * Helper to build http requests from parameters
 */
class RequestBuilder {
    constructor(rootUrl, operationPath, method) {
        this.rootUrl = rootUrl;
        this.operationPath = operationPath;
        this.method = method;
        this._path = new Map();
        this._query = new Map();
        this._header = new Map();
    }
    /**
     * Sets a path parameter
     */
    path(name, value, options) {
        this._path.set(name, new PathParameter(name, value, options || {}));
    }
    /**
     * Sets a query parameter
     */
    query(name, value, options) {
        this._query.set(name, new QueryParameter(name, value, options || {}));
    }
    /**
     * Sets a header parameter
     */
    header(name, value, options) {
        this._header.set(name, new HeaderParameter(name, value, options || {}));
    }
    /**
     * Sets the body content, along with the content type
     */
    body(value, contentType = 'application/json') {
        if (value instanceof Blob) {
            this._bodyContentType = value.type;
        }
        else {
            this._bodyContentType = contentType;
        }
        if (this._bodyContentType === 'application/x-www-form-urlencoded' && value !== null && typeof value === 'object') {
            // Handle URL-encoded data
            const pairs = [];
            for (const key of Object.keys(value)) {
                let val = value[key];
                if (!(val instanceof Array)) {
                    val = [val];
                }
                for (const v of val) {
                    const formValue = this.formDataValue(v);
                    if (formValue !== null) {
                        pairs.push([key, formValue]);
                    }
                }
            }
            this._bodyContent = pairs.map(p => `${encodeURIComponent(p[0])}=${encodeURIComponent(p[1])}`).join('&');
        }
        else if (this._bodyContentType === 'multipart/form-data') {
            // Handle multipart form data
            const formData = new FormData();
            if (value !== null && value !== undefined) {
                for (const key of Object.keys(value)) {
                    const val = value[key];
                    if (val instanceof Array) {
                        for (const v of val) {
                            const toAppend = this.formDataValue(v);
                            if (toAppend !== null) {
                                formData.append(key, toAppend);
                            }
                        }
                    }
                    else {
                        const toAppend = this.formDataValue(val);
                        if (toAppend !== null) {
                            formData.set(key, toAppend);
                        }
                    }
                }
            }
            this._bodyContent = formData;
        }
        else {
            // The body is the plain content
            this._bodyContent = value;
        }
    }
    formDataValue(value) {
        if (value === null || value === undefined) {
            return null;
        }
        if (value instanceof Blob) {
            return value;
        }
        if (typeof value === 'object') {
            return JSON.stringify(value);
        }
        return String(value);
    }
    /**
     * Builds the request with the current set parameters
     */
    build(options) {
        options = options || {};
        // Path parameters
        let path = this.operationPath;
        for (const pathParam of this._path.values()) {
            path = pathParam.append(path);
        }
        const url = this.rootUrl + path;
        // Query parameters
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            encoder: ParameterCodecInstance
        });
        for (const queryParam of this._query.values()) {
            httpParams = queryParam.append(httpParams);
        }
        // Header parameters
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        if (options.accept) {
            httpHeaders = httpHeaders.append('Accept', options.accept);
        }
        for (const headerParam of this._header.values()) {
            httpHeaders = headerParam.append(httpHeaders);
        }
        // Request content headers
        if (this._bodyContentType && !(this._bodyContent instanceof FormData)) {
            httpHeaders = httpHeaders.set('Content-Type', this._bodyContentType);
        }
        // Perform the request
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"](this.method.toUpperCase(), url, this._bodyContent, {
            params: httpParams,
            headers: httpHeaders,
            responseType: options.responseType,
            reportProgress: options.reportProgress
        });
    }
}


/***/ }),

/***/ "kcAd":
/*!********************************************!*\
  !*** ./src/app/shared/api/base-service.ts ***!
  \********************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-configuration */ "CxSZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* tslint:disable */




/**
 * Base class for services
 */
class BaseService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
        this._rootUrl = '';
    }
    /**
     * Returns the root url for all operations in this service. If not set directly in this
     * service, will fallback to `ApiConfiguration.rootUrl`.
     */
    get rootUrl() {
        return this._rootUrl || this.config.rootUrl;
    }
    /**
     * Sets the root URL for API operations in this service.
     */
    set rootUrl(rootUrl) {
        this._rootUrl = rootUrl;
    }
}
BaseService.ɵfac = function BaseService_Factory(t) { return new (t || BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_1__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BaseService, factory: BaseService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_configuration__WEBPACK_IMPORTED_MODULE_1__["ApiConfiguration"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "kkAM":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/interceptors/api-header-jwt/api-header-jwt.interceptor.ts ***!
  \**********************************************************************************/
/*! exports provided: ApiHeaderJwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiHeaderJwtInterceptor", function() { return ApiHeaderJwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_token_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token/token.service */ "cxeF");





class ApiHeaderJwtInterceptor {
    constructor(tokenSV) {
        this.tokenSV = tokenSV;
    }
    intercept(request, next) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.handleRequest(request, next));
    }
    handleRequest(request, next) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = yield this.tokenSV.getStoredToken();
            if (token && token.accessToken && request.url.startsWith('/')) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token.accessToken}`,
                    },
                    withCredentials: true,
                });
            }
            return next.handle(request).toPromise();
        });
    }
}
ApiHeaderJwtInterceptor.ɵfac = function ApiHeaderJwtInterceptor_Factory(t) { return new (t || ApiHeaderJwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_token_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"])); };
ApiHeaderJwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiHeaderJwtInterceptor, factory: ApiHeaderJwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiHeaderJwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_token_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "pL04":
/*!******************************************!*\
  !*** ./src/app/shared/api/api.module.ts ***!
  \******************************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-configuration */ "CxSZ");
/* harmony import */ var _services_access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/access.service */ "Cdlr");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/account.service */ "u9+3");
/* harmony import */ var _services_employees_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/employees.service */ "eQiK");
/* harmony import */ var _services_imports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/imports.service */ "Up50");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/language.service */ "B2yQ");
/* harmony import */ var _services_layout_menu_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/layout-menu.service */ "JUJx");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/project.service */ "x+pK");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/users.service */ "a0sM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* tslint:disable */












/**
 * Module that provides all services and configuration.
 */
class ApiModule {
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    static forRoot(params) {
        return {
            ngModule: ApiModule,
            providers: [
                {
                    provide: _api_configuration__WEBPACK_IMPORTED_MODULE_1__["ApiConfiguration"],
                    useValue: params
                }
            ]
        };
    }
}
ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ApiModule });
ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ApiModule_Factory(t) { return new (t || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], 8)); }, providers: [
        _services_access_service__WEBPACK_IMPORTED_MODULE_2__["AccessService"],
        _services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
        _services_employees_service__WEBPACK_IMPORTED_MODULE_4__["EmployeesService"],
        _services_imports_service__WEBPACK_IMPORTED_MODULE_5__["ImportsService"],
        _services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"],
        _services_layout_menu_service__WEBPACK_IMPORTED_MODULE_7__["LayoutMenuService"],
        _services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
        _services_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"],
        _api_configuration__WEBPACK_IMPORTED_MODULE_1__["ApiConfiguration"]
    ], imports: [[]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [],
                exports: [],
                declarations: [],
                providers: [
                    _services_access_service__WEBPACK_IMPORTED_MODULE_2__["AccessService"],
                    _services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
                    _services_employees_service__WEBPACK_IMPORTED_MODULE_4__["EmployeesService"],
                    _services_imports_service__WEBPACK_IMPORTED_MODULE_5__["ImportsService"],
                    _services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"],
                    _services_layout_menu_service__WEBPACK_IMPORTED_MODULE_7__["LayoutMenuService"],
                    _services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
                    _services_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"],
                    _api_configuration__WEBPACK_IMPORTED_MODULE_1__["ApiConfiguration"]
                ],
            }]
    }], function () { return [{ type: ApiModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "pjuU":
/*!************************************************************************************************************!*\
  !*** ./src/app/shared/_third-party/ep-components/components/ep-fullscreen-img/ep-fullscreen-img.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: EpFullscreenImgModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpFullscreenImgModule", function() { return EpFullscreenImgModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ep_fullscreen_img_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ep-fullscreen-img.component */ "wHi0");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var _directives_auto_blur_auto_blur_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/auto-blur/auto-blur.module */ "xlD8");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");







class EpFullscreenImgModule {
}
EpFullscreenImgModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EpFullscreenImgModule });
EpFullscreenImgModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EpFullscreenImgModule_Factory(t) { return new (t || EpFullscreenImgModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
            _directives_auto_blur_auto_blur_module__WEBPACK_IMPORTED_MODULE_4__["AutoBlurModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["HammerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EpFullscreenImgModule, { declarations: [_ep_fullscreen_img_component__WEBPACK_IMPORTED_MODULE_2__["EpFullscreenImgComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
        _directives_auto_blur_auto_blur_module__WEBPACK_IMPORTED_MODULE_4__["AutoBlurModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["HammerModule"]], exports: [_ep_fullscreen_img_component__WEBPACK_IMPORTED_MODULE_2__["EpFullscreenImgComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EpFullscreenImgModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_ep_fullscreen_img_component__WEBPACK_IMPORTED_MODULE_2__["EpFullscreenImgComponent"]],
                exports: [_ep_fullscreen_img_component__WEBPACK_IMPORTED_MODULE_2__["EpFullscreenImgComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                    _directives_auto_blur_auto_blur_module__WEBPACK_IMPORTED_MODULE_4__["AutoBlurModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["HammerModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "u9+3":
/*!********************************************************!*\
  !*** ./src/app/shared/api/services/account.service.ts ***!
  \********************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-service */ "kcAd");
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request-builder */ "fXmr");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-configuration */ "CxSZ");
/* tslint:disable */








class AccountService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiAccountTokenPost$Plain()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    apiAccountTokenPost$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, AccountService.ApiAccountTokenPostPath, 'post');
        if (params) {
            rb.body(params.body, 'application/json');
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiAccountTokenPost$Plain$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    apiAccountTokenPost$Plain(params) {
        return this.apiAccountTokenPost$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiAccountTokenPost$Json()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    apiAccountTokenPost$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, AccountService.ApiAccountTokenPostPath, 'post');
        if (params) {
            rb.body(params.body, 'application/json');
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiAccountTokenPost$Json$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    apiAccountTokenPost$Json(params) {
        return this.apiAccountTokenPost$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiAccountLoginPost()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    apiAccountLoginPost$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, AccountService.ApiAccountLoginPostPath, 'post');
        if (params) {
            rb.body(params.body, 'application/json');
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: '*/*'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: undefined });
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiAccountLoginPost$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    apiAccountLoginPost(params) {
        return this.apiAccountLoginPost$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Only used to map Policies to OpenAPI (Swagger). Response will always be 200.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiAccountPoliciesGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAccountPoliciesGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, AccountService.ApiAccountPoliciesGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Only used to map Policies to OpenAPI (Swagger). Response will always be 200.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiAccountPoliciesGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAccountPoliciesGet$Plain(params) {
        return this.apiAccountPoliciesGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Only used to map Policies to OpenAPI (Swagger). Response will always be 200.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiAccountPoliciesGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAccountPoliciesGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, AccountService.ApiAccountPoliciesGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Only used to map Policies to OpenAPI (Swagger). Response will always be 200.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiAccountPoliciesGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAccountPoliciesGet$Json(params) {
        return this.apiAccountPoliciesGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiAccountLogoutPost()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAccountLogoutPost$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, AccountService.ApiAccountLogoutPostPath, 'post');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: '*/*'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: undefined });
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiAccountLogoutPost$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAccountLogoutPost(params) {
        return this.apiAccountLogoutPost$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiAccountProfileGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAccountProfileGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, AccountService.ApiAccountProfileGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiAccountProfileGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAccountProfileGet$Plain(params) {
        return this.apiAccountProfileGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiAccountProfileGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAccountProfileGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, AccountService.ApiAccountProfileGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiAccountProfileGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiAccountProfileGet$Json(params) {
        return this.apiAccountProfileGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
}
/**
 * Path part for operation apiAccountTokenPost
 */
AccountService.ApiAccountTokenPostPath = '/api/account/token';
/**
 * Path part for operation apiAccountLoginPost
 */
AccountService.ApiAccountLoginPostPath = '/api/account/login';
/**
 * Path part for operation apiAccountPoliciesGet
 */
AccountService.ApiAccountPoliciesGetPath = '/api/account/policies';
/**
 * Path part for operation apiAccountLogoutPost
 */
AccountService.ApiAccountLogoutPostPath = '/api/account/logout';
/**
 * Path part for operation apiAccountProfileGet
 */
AccountService.ApiAccountProfileGetPath = '/api/account/profile';
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, AppRoutingFirstRouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingFirstRouteModule", function() { return AppRoutingFirstRouteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_guards_translate_translate_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/guards/translate/translate.guard */ "+6Yh");
/* harmony import */ var _shared_guards_third_party_async_libraries_youtube_youtube_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guards/third-party-async-libraries/youtube/youtube.guard */ "wOY6");






const routes = [
    {
        path: '', loadChildren: () => __webpack_require__.e(/*! import() | pages-pages-module */ "pages-pages-module").then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN")).then(m => m.PagesModule),
        canLoad: [_shared_guards_translate_translate_guard__WEBPACK_IMPORTED_MODULE_2__["TranslateGuard"], _shared_guards_third_party_async_libraries_youtube_youtube_guard__WEBPACK_IMPORTED_MODULE_3__["YoutubeGuard"]]
    },
    { path: '**', redirectTo: '/' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            // anchorScrolling: 'enabled',
            // scrollPositionRestoration: 'enabled',
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    // anchorScrolling: 'enabled',
                    // scrollPositionRestoration: 'enabled',
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
class AppRoutingFirstRouteModule {
}
AppRoutingFirstRouteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingFirstRouteModule });
AppRoutingFirstRouteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingFirstRouteModule_Factory(t) { return new (t || AppRoutingFirstRouteModule)(); }, imports: [[]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingFirstRouteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "wHi0":
/*!***************************************************************************************************************!*\
  !*** ./src/app/shared/_third-party/ep-components/components/ep-fullscreen-img/ep-fullscreen-img.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: EpFullscreenImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpFullscreenImgComponent", function() { return EpFullscreenImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_shared_models_basic_destroy_subscriptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/_basic/destroy-subscriptions */ "DC9S");
/* harmony import */ var _services_ep_fullscreen_img_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/ep-fullscreen-img.service */ "XFuG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _directives_auto_blur_auto_blur_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/auto-blur/auto-blur.directive */ "dVYb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");








const _c0 = ["img"];
function EpFullscreenImgComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.service._imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c1 = function (a0) { return { "shown": a0 }; };
const _c2 = function () { return ["fas", "times"]; };
class EpFullscreenImgComponent extends src_app_shared_models_basic_destroy_subscriptions__WEBPACK_IMPORTED_MODULE_2__["DestroySubscriptionsDirective"] {
    constructor(cdref, service, el) {
        super();
        this.cdref = cdref;
        this.service = service;
        this.el = el;
        this._isShown = false;
        this.btnCloseLabel = '';
        this.bodyScrollState = null;
        this.initListeners();
    }
    set img(el) {
        if ((this._img == null && (el == null ||
            el.nativeElement == null)) ||
            this._img === (el != null && el.nativeElement)) {
            return;
        }
        if (el == null || el.nativeElement == null) {
            this._img = null;
            this.destroyHammerJS();
        }
        else {
            this._img = el.nativeElement;
            this.initHammerJS();
        }
    }
    onKeydownHandler(evt) {
        this.hide();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.hammer.destroy();
    }
    initListeners() {
        const s = this.service._show.subscribe(() => {
            if (this._isShown) {
                return;
            }
            this._isShown = true;
            const body = document.getElementsByTagName('body').item(0);
            const bodyStyles = window.getComputedStyle(body);
            this.bodyScrollState = body.style.overflow;
            body.style.overflow = 'hidden';
            // this.cdref.detectChanges();
        });
        const s2 = this.service._hide.subscribe(() => {
            if (!this._isShown) {
                return;
            }
            this._isShown = false;
            const body = document.getElementsByTagName('body').item(0);
            body.style.overflow = this.bodyScrollState;
        });
        this.subs.push(s, s2);
    }
    hide() {
        if (!this._isShown) {
            return;
        }
        this.service.closeImage();
    }
    destroyHammerJS() {
        this.hammer.destroy();
    }
    initHammerJS() {
        const container = this.el.nativeElement.firstElementChild;
        let posX = 0, posY = 0, scale = 1, last_scale = 1, last_posX = 0, last_posY = 0, max_pos_x = 0, max_pos_y = 0, transform = '', el = this._img.parentElement;
        this.hammer = new hammerjs__WEBPACK_IMPORTED_MODULE_1__["Manager"](container);
        // this.hammer.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        this.hammer.add(new hammerjs__WEBPACK_IMPORTED_MODULE_1__["Tap"]({}));
        this.hammer.add(new hammerjs__WEBPACK_IMPORTED_MODULE_1__["Pan"]({}));
        this.hammer.add(new hammerjs__WEBPACK_IMPORTED_MODULE_1__["Pinch"]({}));
        // doubletap is available aswell
        this.hammer.on('tap pan panstart panend pinch pinchend', (ev) => {
            // switch-case no nos vale en este caso, dado que hay ifs que deben ejecutarse
            // después del escalado
            if (ev.type == 'tap') {
                transform =
                    'translate3d(0, 0, 0) ' +
                        'scale3d(2, 2, 1) ';
                scale = 2;
                last_scale = 2;
                container.classList.add('scaled');
                try {
                    if (window.getComputedStyle(el, null).getPropertyValue('-webkit-transform').toString() != 'matrix(1, 0, 0, 1, 0, 0)') {
                        transform =
                            'translate3d(0, 0, 0) ' +
                                'scale3d(1, 1, 1) ';
                        scale = 1;
                        last_scale = 1;
                        container.classList.remove('scaled');
                    }
                }
                catch (err) { }
                el.style.webkitTransform = transform;
                transform = '';
            }
            // pan
            if (scale != 1) {
                posX = last_posX + ev.deltaX;
                posY = last_posY + ev.deltaY;
                max_pos_x = Math.ceil((scale - 1) * el.clientWidth / 2);
                max_pos_y = Math.ceil((scale - 1) * el.clientHeight / 2);
                if (posX > max_pos_x) {
                    posX = max_pos_x;
                }
                if (posX < -max_pos_x) {
                    posX = -max_pos_x;
                }
                if (posY > max_pos_y) {
                    posY = max_pos_y;
                }
                if (posY < -max_pos_y) {
                    posY = -max_pos_y;
                }
            }
            // pinch
            if (ev.type == 'pinch') {
                scale = Math.max(.999, Math.min(last_scale * (ev.scale), 4));
            }
            if (ev.type == 'pinchend') {
                last_scale = scale;
            }
            // panstart - panend
            if (ev.type == 'panstart') {
                container.classList.add('panning');
            }
            else if (ev.type == 'panend') {
                last_posX = posX < max_pos_x ? posX : max_pos_x;
                last_posY = posY < max_pos_y ? posY : max_pos_y;
                container.classList.remove('panning');
            }
            if (scale != 1) {
                transform =
                    'translate3d(' + posX + 'px,' + posY + 'px, 0) ' +
                        'scale3d(' + scale + ', ' + scale + ', 1)';
            }
            if (transform) {
                el.style.webkitTransform = transform;
            }
        });
    }
    setImgScale(scale) {
        const img = this.getImg();
        img.style.transform = `scale(${scale})`;
    }
    getImg() {
        return this.el.nativeElement.querySelector('img');
    }
}
EpFullscreenImgComponent.ɵfac = function EpFullscreenImgComponent_Factory(t) { return new (t || EpFullscreenImgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ep_fullscreen_img_service__WEBPACK_IMPORTED_MODULE_3__["EpFullscreenImgService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
EpFullscreenImgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EpFullscreenImgComponent, selectors: [["app-ep-fullscreen-img"]], viewQuery: function EpFullscreenImgComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.img = _t.first);
    } }, hostBindings: function EpFullscreenImgComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function EpFullscreenImgComponent_keydown_escape_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { btnCloseLabel: "btnCloseLabel" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 8, consts: [[1, "fullscreen-img-wrapper", 3, "ngClass"], ["class", "fullscreen-img-wrapper-zoom", 4, "ngIf"], ["type", "button", "autoBlur", "", 1, "btn", "rounded", "btn-danger", "btn-close", 3, "click"], [3, "icon"], [1, "fullscreen-img-wrapper-zoom"], [3, "src"], ["img", ""]], template: function EpFullscreenImgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EpFullscreenImgComponent_div_2_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EpFullscreenImgComponent_Template_button_click_3_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx._isShown));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._isShown, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service._imgUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.btnCloseLabel, "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _directives_auto_blur_auto_blur_directive__WEBPACK_IMPORTED_MODULE_5__["AutoBlurDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]], styles: ["[_nghost-%COMP%]   .fullscreen-img-wrapper[_ngcontent-%COMP%] {\n  cursor: zoom-in;\n  display: none;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  z-index: 3048;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .fullscreen-img-wrapper.shown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n[_nghost-%COMP%]   .fullscreen-img-wrapper.shown.scaled[_ngcontent-%COMP%] {\n  display: initial;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n[_nghost-%COMP%]   .fullscreen-img-wrapper.shown.scaled.panning[_ngcontent-%COMP%] {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n[_nghost-%COMP%]   .fullscreen-img-wrapper.shown.scaled.panning[_ngcontent-%COMP%]   .fullscreen-img-wrapper-zoom[_ngcontent-%COMP%] {\n  transition: none;\n}\n[_nghost-%COMP%]   .fullscreen-img-wrapper[_ngcontent-%COMP%]   .fullscreen-img-wrapper-zoom[_ngcontent-%COMP%] {\n  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);\n  transition: transform 0.3s;\n}\n[_nghost-%COMP%]   .fullscreen-img-wrapper[_ngcontent-%COMP%]   .fullscreen-img-wrapper-zoom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  pointer-events: none;\n  max-width: 100%;\n  max-height: 100%;\n}\n[_nghost-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 2;\n  left: 10px;\n  bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL190aGlyZC1wYXJ0eS9lcC1jb21wb25lbnRzL2NvbXBvbmVudHMvZXAtZnVsbHNjcmVlbi1pbWcvZXAtZnVsbHNjcmVlbi1pbWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQVo7QUFFWTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxZQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtBQUNwQjtBQUNvQjtFQUNJLGdCQUFBO0FBQ3hCO0FBS1E7RUFDSSxzREFBQTtFQUNBLDBCQUFBO0FBSFo7QUFLWTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSGhCO0FBU0k7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBUFIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvX3RoaXJkLXBhcnR5L2VwLWNvbXBvbmVudHMvY29tcG9uZW50cy9lcC1mdWxsc2NyZWVuLWltZy9lcC1mdWxsc2NyZWVuLWltZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC5mdWxsc2NyZWVuLWltZy13cmFwcGVyIHtcclxuICAgICAgICBjdXJzb3I6IHpvb20taW47XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDMwNDg7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5zaG93biB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmLnNjYWxlZCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBncmFiO1xyXG4gICAgICAgICAgICAgICAgJi5wYW5uaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGdyYWJiaW5nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZnVsbHNjcmVlbi1pbWctd3JhcHBlci16b29tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mdWxsc2NyZWVuLWltZy13cmFwcGVyLXpvb20ge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpIHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3M7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0bi1jbG9zZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EpFullscreenImgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ep-fullscreen-img',
                templateUrl: './ep-fullscreen-img.component.html',
                styleUrls: ['./ep-fullscreen-img.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_ep_fullscreen_img_service__WEBPACK_IMPORTED_MODULE_3__["EpFullscreenImgService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { img: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['img', { static: false }]
        }], btnCloseLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onKeydownHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown.escape', ['$event']]
        }] }); })();


/***/ }),

/***/ "wOY6":
/*!************************************************************************************!*\
  !*** ./src/app/shared/guards/third-party-async-libraries/youtube/youtube.guard.ts ***!
  \************************************************************************************/
/*! exports provided: YoutubeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeGuard", function() { return YoutubeGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




class YoutubeGuard {
    constructor() {
        /** Wether the YouTube API should be called */
        this.isInitialized = false;
        /** Wether the YouTube API has been initialized */
        this.isLoaded = false;
        this.isLoadedSubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isLoaded);
    }
    canLoad(route, segments) {
        this.initYouTubeApiScript();
        return this.isLoadedSubscriber
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(isLoaded => isLoaded === true));
    }
    initYouTubeApiScript() {
        if (this.isInitialized) {
            return;
        }
        this.isInitialized = true;
        // This code loads the IFrame Player API code asynchronously, according to the instructions at
        // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
        window.onYouTubeIframeAPIReady = () => {
            this.isLoaded = true;
            this.isLoadedSubscriber.next(this.isLoaded);
            delete window.onYouTubeIframeAPIReady;
        };
    }
}
YoutubeGuard.ɵfac = function YoutubeGuard_Factory(t) { return new (t || YoutubeGuard)(); };
YoutubeGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: YoutubeGuard, factory: YoutubeGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "x+pK":
/*!********************************************************!*\
  !*** ./src/app/shared/api/services/project.service.ts ***!
  \********************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-service */ "kcAd");
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request-builder */ "fXmr");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-configuration */ "CxSZ");
/* tslint:disable */








class ProjectService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * Añade un nuevo proyecto.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProjectInsertPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProjectInsertPost$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ProjectService.ApiProjectInsertPostPath, 'post');
        if (params) {
            rb.query('commit', params.commit, {});
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Añade un nuevo proyecto.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiProjectInsertPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProjectInsertPost$Plain(params) {
        return this.apiProjectInsertPost$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Añade un nuevo proyecto.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProjectInsertPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProjectInsertPost$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ProjectService.ApiProjectInsertPostPath, 'post');
        if (params) {
            rb.query('commit', params.commit, {});
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Añade un nuevo proyecto.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiProjectInsertPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProjectInsertPost$Json(params) {
        return this.apiProjectInsertPost$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Edita un proyecto.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProjectUpdatePost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProjectUpdatePost$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ProjectService.ApiProjectUpdatePostPath, 'post');
        if (params) {
            rb.query('commit', params.commit, {});
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Edita un proyecto.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiProjectUpdatePost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProjectUpdatePost$Plain(params) {
        return this.apiProjectUpdatePost$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Edita un proyecto.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProjectUpdatePost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProjectUpdatePost$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ProjectService.ApiProjectUpdatePostPath, 'post');
        if (params) {
            rb.query('commit', params.commit, {});
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Edita un proyecto.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiProjectUpdatePost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProjectUpdatePost$Json(params) {
        return this.apiProjectUpdatePost$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Borra proyecto.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProjectDeleteDelete$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProjectDeleteDelete$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ProjectService.ApiProjectDeleteDeletePath, 'delete');
        if (params) {
            rb.query('data', params.data, {});
            rb.query('commit', params.commit, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Borra proyecto.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiProjectDeleteDelete$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProjectDeleteDelete$Plain(params) {
        return this.apiProjectDeleteDelete$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Borra proyecto.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProjectDeleteDelete$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProjectDeleteDelete$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ProjectService.ApiProjectDeleteDeletePath, 'delete');
        if (params) {
            rb.query('data', params.data, {});
            rb.query('commit', params.commit, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Borra proyecto.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiProjectDeleteDelete$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProjectDeleteDelete$Json(params) {
        return this.apiProjectDeleteDelete$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Get project by Id.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProjectGetbyidGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProjectGetbyidGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ProjectService.ApiProjectGetbyidGetPath, 'get');
        if (params) {
            rb.query('clave', params.clave, {});
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Get project by Id.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiProjectGetbyidGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProjectGetbyidGet$Plain(params) {
        return this.apiProjectGetbyidGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Get project by Id.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProjectGetbyidGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProjectGetbyidGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ProjectService.ApiProjectGetbyidGetPath, 'get');
        if (params) {
            rb.query('clave', params.clave, {});
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Get project by Id.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiProjectGetbyidGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProjectGetbyidGet$Json(params) {
        return this.apiProjectGetbyidGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Get Project.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProjectGetlistPost$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProjectGetlistPost$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ProjectService.ApiProjectGetlistPostPath, 'post');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Get Project.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiProjectGetlistPost$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProjectGetlistPost$Plain(params) {
        return this.apiProjectGetlistPost$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Get Project.
     *
     *
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProjectGetlistPost$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProjectGetlistPost$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ProjectService.ApiProjectGetlistPostPath, 'post');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Get Project.
     *
     *
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiProjectGetlistPost$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProjectGetlistPost$Json(params) {
        return this.apiProjectGetlistPost$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProjectPrioritylistGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProjectPrioritylistGet$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ProjectService.ApiProjectPrioritylistGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiProjectPrioritylistGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProjectPrioritylistGet$Plain(params) {
        return this.apiProjectPrioritylistGet$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProjectPrioritylistGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProjectPrioritylistGet$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ProjectService.ApiProjectPrioritylistGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiProjectPrioritylistGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProjectPrioritylistGet$Json(params) {
        return this.apiProjectPrioritylistGet$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProjectDatatablePost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProjectDatatablePost$Plain$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ProjectService.ApiProjectDatatablePostPath, 'post');
        if (params) {
            rb.query('pi', params.pi, {});
            rb.query('ps', params.ps, {});
            rb.query('sn', params.sn, {});
            rb.query('sd', params.sd, {});
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiProjectDatatablePost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProjectDatatablePost$Plain(params) {
        return this.apiProjectDatatablePost$Plain$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProjectDatatablePost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProjectDatatablePost$Json$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, ProjectService.ApiProjectDatatablePostPath, 'post');
        if (params) {
            rb.query('pi', params.pi, {});
            rb.query('ps', params.ps, {});
            rb.query('sn', params.sn, {});
            rb.query('sd', params.sd, {});
            rb.body(params.body, 'application/*+json');
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiProjectDatatablePost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProjectDatatablePost$Json(params) {
        return this.apiProjectDatatablePost$Json$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
}
/**
 * Path part for operation apiProjectInsertPost
 */
ProjectService.ApiProjectInsertPostPath = '/api/project/insert';
/**
 * Path part for operation apiProjectUpdatePost
 */
ProjectService.ApiProjectUpdatePostPath = '/api/project/update';
/**
 * Path part for operation apiProjectDeleteDelete
 */
ProjectService.ApiProjectDeleteDeletePath = '/api/project/delete';
/**
 * Path part for operation apiProjectGetbyidGet
 */
ProjectService.ApiProjectGetbyidGetPath = '/api/project/getbyid';
/**
 * Path part for operation apiProjectGetlistPost
 */
ProjectService.ApiProjectGetlistPostPath = '/api/project/getlist';
/**
 * Path part for operation apiProjectPrioritylistGet
 */
ProjectService.ApiProjectPrioritylistGetPath = '/api/project/prioritylist';
/**
 * Path part for operation apiProjectDatatablePost
 */
ProjectService.ApiProjectDatatablePostPath = '/api/project/datatable';
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "xe8+":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/interceptors/api-headers/api-header-lang/api-header-lang.interceptor.ts ***!
  \************************************************************************************************/
/*! exports provided: ApiHeaderLangInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiHeaderLangInterceptor", function() { return ApiHeaderLangInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/dictionary/dictionary.service */ "Bsj9");



class ApiHeaderLangInterceptor {
    constructor() { }
    intercept(request, next) {
        if (src_app_shared_services_dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"].currentLanguage) {
            const clone = request.clone({
                headers: request.headers
                    .set('lang', src_app_shared_services_dictionary_dictionary_service__WEBPACK_IMPORTED_MODULE_1__["DictionaryService"].currentLanguage),
            });
            return next.handle(clone);
        }
        else {
            return next.handle(request);
        }
    }
}
ApiHeaderLangInterceptor.ɵfac = function ApiHeaderLangInterceptor_Factory(t) { return new (t || ApiHeaderLangInterceptor)(); };
ApiHeaderLangInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiHeaderLangInterceptor, factory: ApiHeaderLangInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiHeaderLangInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xlD8":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/_third-party/ep-components/directives/auto-blur/auto-blur.module.ts ***!
  \********************************************************************************************/
/*! exports provided: AutoBlurModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoBlurModule", function() { return AutoBlurModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _auto_blur_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auto-blur.directive */ "dVYb");




class AutoBlurModule {
}
AutoBlurModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AutoBlurModule });
AutoBlurModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AutoBlurModule_Factory(t) { return new (t || AutoBlurModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutoBlurModule, { declarations: [_auto_blur_directive__WEBPACK_IMPORTED_MODULE_2__["AutoBlurDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_auto_blur_directive__WEBPACK_IMPORTED_MODULE_2__["AutoBlurDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoBlurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [_auto_blur_directive__WEBPACK_IMPORTED_MODULE_2__["AutoBlurDirective"]],
                exports: [_auto_blur_directive__WEBPACK_IMPORTED_MODULE_2__["AutoBlurDirective"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map