(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-datatable-projects-datatable-module"],{

/***/ "RnUI":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/main/empleados/projects/projects-datatable/projects-datatable.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProjectsDatatableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsDatatableModule", function() { return ProjectsDatatableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _projects_datatable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-datatable.component */ "HDgd");
/* harmony import */ var ax_toolbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ax-toolbox */ "4/SI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");









const routes = [
    {
        path: '', component: _projects_datatable_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsDatatableComponent"]
    }
];
class ProjectsDatatableModule {
}
ProjectsDatatableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectsDatatableModule });
ProjectsDatatableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectsDatatableModule_Factory(t) { return new (t || ProjectsDatatableModule)(); }, providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ax_toolbox__WEBPACK_IMPORTED_MODULE_4__["BsDatatableModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsDatatableModule, { declarations: [_projects_datatable_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsDatatableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ax_toolbox__WEBPACK_IMPORTED_MODULE_4__["BsDatatableModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]], exports: [_projects_datatable_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsDatatableComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsDatatableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_projects_datatable_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsDatatableComponent"]],
                exports: [_projects_datatable_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsDatatableComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
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
//# sourceMappingURL=projects-datatable-projects-datatable-module.js.map