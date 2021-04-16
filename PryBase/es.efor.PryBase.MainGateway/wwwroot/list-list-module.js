(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "HJjS":
/*!*****************************************************************!*\
  !*** ./src/app/pages/main/insurance-policy/list/list.module.ts ***!
  \*****************************************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.component */ "vxj8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ax_toolbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ax-toolbox */ "4/SI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var src_app_shared_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/guards/auth/auth.guard */ "w4NO");
/* harmony import */ var src_app_shared_api_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/api/models */ "0YDA");











const routes = [
    {
        path: '', component: _list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"],
        canLoad: [src_app_shared_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], canActivate: [src_app_shared_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        data: {
            policy: src_app_shared_api_models__WEBPACK_IMPORTED_MODULE_7__["PostPolicies"].PostList,
        }
    },
];
class ListModule {
}
ListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ListModule });
ListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ListModule_Factory(t) { return new (t || ListModule)(); }, providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ax_toolbox__WEBPACK_IMPORTED_MODULE_4__["BsDatatableModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListModule, { declarations: [_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ax_toolbox__WEBPACK_IMPORTED_MODULE_4__["BsDatatableModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]], exports: [_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]],
                exports: [_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    ax_toolbox__WEBPACK_IMPORTED_MODULE_4__["BsDatatableModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
                ],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=list-list-module.js.map