(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employees-employees-module"],{

/***/ "45GK":
/*!********************************************************************!*\
  !*** ./src/app/pages/main/empleados/employees/employees.module.ts ***!
  \********************************************************************/
/*! exports provided: EmployeesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesModule", function() { return EmployeesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees.component */ "M/S7");






const routes = [
    { path: '', redirectTo: 'datatable', pathMatch: 'full' },
    {
        path: 'datatable', component: _employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | employees-datatable-employees-datatable-module */ "employees-datatable-employees-datatable-module").then(__webpack_require__.bind(null, /*! ./employees-datatable/employees-datatable.module */ "4wDt")).then(m => m.EmployeesDatatableModule),
    }, {
        path: 'new', component: _employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"],
        loadChildren: () => Promise.all(/*! import() | employees-details-employees-details-module */[__webpack_require__.e("default~employees-details-employees-details-module~projects-details-projects-details-module"), __webpack_require__.e("common"), __webpack_require__.e("employees-details-employees-details-module")]).then(__webpack_require__.bind(null, /*! ./employees-details/employees-details.module */ "4qcS")).then(m => m.EmployeesDetailsModule),
    }, {
        path: 'details', component: _employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"],
        loadChildren: () => Promise.all(/*! import() | employees-details-employees-details-module */[__webpack_require__.e("default~employees-details-employees-details-module~projects-details-projects-details-module"), __webpack_require__.e("common"), __webpack_require__.e("employees-details-employees-details-module")]).then(__webpack_require__.bind(null, /*! ./employees-details/employees-details.module */ "4qcS")).then(m => m.EmployeesDetailsModule),
    }
];
class EmployeesModule {
}
EmployeesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmployeesModule });
EmployeesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmployeesModule_Factory(t) { return new (t || EmployeesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeesModule, { declarations: [_employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "M/S7":
/*!***********************************************************************!*\
  !*** ./src/app/pages/main/empleados/employees/employees.component.ts ***!
  \***********************************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/api/services */ "EZPP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




class EmployeesComponent {
    constructor(employeesSV) {
        this.employeesSV = employeesSV;
    }
    ngOnInit() {
    }
}
EmployeesComponent.ɵfac = function EmployeesComponent_Factory(t) { return new (t || EmployeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_1__["EmployeesService"])); };
EmployeesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeesComponent, selectors: [["app-employees"]], decls: 1, vars: 0, template: function EmployeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vZW1wbGVhZG9zL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employees',
                templateUrl: './employees.component.html',
                styleUrls: ['./employees.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_1__["EmployeesService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=employees-employees-module.js.map