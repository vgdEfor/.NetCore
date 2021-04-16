(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["insurance-policy-insurance-policy-module"],{

/***/ "6V2U":
/*!************************************************************************!*\
  !*** ./src/app/pages/main/insurance-policy/insurance-policy.module.ts ***!
  \************************************************************************/
/*! exports provided: InsurancePolicyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurancePolicyModule", function() { return InsurancePolicyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _insurance_policy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insurance-policy.component */ "Fl/a");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");






const routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _insurance_policy_component__WEBPACK_IMPORTED_MODULE_2__["InsurancePolicyComponent"], loadChildren: () => Promise.all(/*! import() | list-list-module */[__webpack_require__.e("common"), __webpack_require__.e("list-list-module")]).then(__webpack_require__.bind(null, /*! ./list/list.module */ "HJjS")).then(m => m.ListModule), },
    { path: 'new', component: _insurance_policy_component__WEBPACK_IMPORTED_MODULE_2__["InsurancePolicyComponent"], loadChildren: () => Promise.all(/*! import() | details-details-module */[__webpack_require__.e("common"), __webpack_require__.e("details-details-module")]).then(__webpack_require__.bind(null, /*! ./details/details.module */ "2qKE")).then(m => m.DetailsModule), },
    { path: 'details', component: _insurance_policy_component__WEBPACK_IMPORTED_MODULE_2__["InsurancePolicyComponent"], loadChildren: () => Promise.all(/*! import() | details-details-module */[__webpack_require__.e("common"), __webpack_require__.e("details-details-module")]).then(__webpack_require__.bind(null, /*! ./details/details.module */ "2qKE")).then(m => m.DetailsModule), },
];
class InsurancePolicyModule {
}
InsurancePolicyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InsurancePolicyModule });
InsurancePolicyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InsurancePolicyModule_Factory(t) { return new (t || InsurancePolicyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InsurancePolicyModule, { declarations: [_insurance_policy_component__WEBPACK_IMPORTED_MODULE_2__["InsurancePolicyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_insurance_policy_component__WEBPACK_IMPORTED_MODULE_2__["InsurancePolicyComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InsurancePolicyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_insurance_policy_component__WEBPACK_IMPORTED_MODULE_2__["InsurancePolicyComponent"]],
                exports: [_insurance_policy_component__WEBPACK_IMPORTED_MODULE_2__["InsurancePolicyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Fl/a":
/*!***************************************************************************!*\
  !*** ./src/app/pages/main/insurance-policy/insurance-policy.component.ts ***!
  \***************************************************************************/
/*! exports provided: InsurancePolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurancePolicyComponent", function() { return InsurancePolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "vxj8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





class InsurancePolicyComponent {
    constructor() {
        this.initMockupItems();
    }
    ngOnInit() {
    }
    initMockupItems() {
        if (_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"].dtItems == null || _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"].dtItems.length === 0) {
            _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"].dtItems = [
                new _list_list_component__WEBPACK_IMPORTED_MODULE_2__["MockupItem"]().setData({
                    id: '1c2d475a-7011-4361-b24f-60e4984c9522',
                    name: 'Axular',
                    surname1: 'Etxeguren',
                    surname2: 'Abascal',
                    amount: 230,
                    datetime: moment__WEBPACK_IMPORTED_MODULE_1__().add(-3, 'month').toDate(),
                    isPremium: true,
                }),
                new _list_list_component__WEBPACK_IMPORTED_MODULE_2__["MockupItem"](true).setData({
                    name: 'Javier',
                    surname1: 'Lusarreta',
                    surname2: 'Ayestarán',
                    amount: 170,
                    datetime: moment__WEBPACK_IMPORTED_MODULE_1__().add(-3, 'month').toDate(),
                    isPremium: true,
                }),
                new _list_list_component__WEBPACK_IMPORTED_MODULE_2__["MockupItem"](true).setData({
                    name: 'Mikel',
                    surname1: 'Rodriguez',
                    surname2: 'Valiño',
                    amount: 230,
                    datetime: moment__WEBPACK_IMPORTED_MODULE_1__().toDate(),
                    isPremium: true,
                }),
                new _list_list_component__WEBPACK_IMPORTED_MODULE_2__["MockupItem"](true).setData({
                    name: 'Juan José',
                    surname1: 'Martinez',
                    surname2: '',
                    amount: 1280,
                    datetime: moment__WEBPACK_IMPORTED_MODULE_1__().add(3, 'day').startOf('day').toDate(),
                    isPremium: false,
                }),
            ];
        }
    }
}
InsurancePolicyComponent.ɵfac = function InsurancePolicyComponent_Factory(t) { return new (t || InsurancePolicyComponent)(); };
InsurancePolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InsurancePolicyComponent, selectors: [["app-insurance-policy"]], decls: 1, vars: 0, template: function InsurancePolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vaW5zdXJhbmNlLXBvbGljeS9pbnN1cmFuY2UtcG9saWN5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InsurancePolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-insurance-policy',
                templateUrl: './insurance-policy.component.html',
                styleUrls: ['./insurance-policy.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vxj8":
/*!********************************************************************!*\
  !*** ./src/app/pages/main/insurance-policy/list/list.component.ts ***!
  \********************************************************************/
/*! exports provided: ListComponent, MockupItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockupItem", function() { return MockupItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ax_toolbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ax-toolbox */ "4/SI");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");







class ListComponent {
    constructor(dPipe, translateSV) {
        this.dPipe = dPipe;
        this.translateSV = translateSV;
        this.dtColumns = [];
        this.dtItemsInst = [];
        this.initDatatables();
    }
    ngOnInit() {
        this.dtItemsInst = ListComponent.dtItems;
    }
    initDatatables() {
        this.initDtColumns();
    }
    initDtColumns() {
        this.dtColumns = [
            new ax_toolbox__WEBPACK_IMPORTED_MODULE_1__["DtColumnItem"]().setData({
                thTHeadClass: 'cell-narrow',
                buttons: [
                    new ax_toolbox__WEBPACK_IMPORTED_MODULE_1__["DtActionColumnButton"]().setData({
                        url: '/insurance/details/{id}',
                        urlTarget: '_self',
                        iconPreffix: 'fas',
                        iconName: 'eye',
                        btnClass: 'btn btn-outline-secondary btn-sm',
                    }),
                ],
            }),
            new ax_toolbox__WEBPACK_IMPORTED_MODULE_1__["DtColumnItem"]().setData({
                columnName: 'Fecha de alta',
                field: 'datetime',
                fieldDisplayType: 'datetime',
                fieldDisplayMiddleware: (data) => {
                    if (data == null) {
                        return '';
                    }
                    const transformed = this.dPipe.transform(data, this.translateSV.instant('FORMAT.DATETIME'));
                    return transformed;
                },
            }),
            new ax_toolbox__WEBPACK_IMPORTED_MODULE_1__["DtColumnItem"]().setData({
                columnName: this.translateSV.instant('PAGE.INSURANCE.LIST.DATATABLE.COLUMN.NAME'),
                field: 'name',
                filter: true,
            }),
            new ax_toolbox__WEBPACK_IMPORTED_MODULE_1__["DtColumnItem"]().setData({
                columnName: 'Primer apellido',
                field: 'surname1',
                filter: true,
            }),
            new ax_toolbox__WEBPACK_IMPORTED_MODULE_1__["DtColumnItem"]().setData({
                columnName: 'Segundo apellido',
                field: 'surname2',
                filter: true,
            }),
            new ax_toolbox__WEBPACK_IMPORTED_MODULE_1__["DtColumnItem"]().setData({
                columnName: 'Precio póliza',
                field: 'amount',
                fieldDisplayType: 'currency'
            }),
            new ax_toolbox__WEBPACK_IMPORTED_MODULE_1__["DtColumnItem"]().setData({
                columnName: 'Pack premium',
                field: 'isPremium',
                fieldDisplayType: 'boolean',
                filter: true,
            }),
        ];
    }
}
ListComponent.dtItems = [];
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 4, vars: 6, consts: [[1, "section-title", "my-4"], [3, "columns", "items", "actionButtonShowRefresh"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ax-bs-datatable", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "PAGE.INSURANCE.LIST.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.dtColumns)("items", ctx.dtItemsInst)("actionButtonShowRefresh", false);
    } }, directives: [ax_toolbox__WEBPACK_IMPORTED_MODULE_1__["BsDatatableComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vaW5zdXJhbmNlLXBvbGljeS9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }]; }, null); })();
class MockupItem extends ax_toolbox__WEBPACK_IMPORTED_MODULE_1__["SetData"] {
    constructor(setId = false) {
        super();
        this.name = '';
        this.surname1 = '';
        this.surname2 = '';
        this.amount = 34.5;
        this.isPremium = false;
        if (setId) {
            this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=insurance-policy-insurance-policy-module.js.map