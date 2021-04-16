(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employees-datatable-employees-datatable-module"],{

/***/ "4wDt":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/main/empleados/employees/employees-datatable/employees-datatable.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: EmployeesDatatableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesDatatableModule", function() { return EmployeesDatatableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _employees_datatable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees-datatable.component */ "Stxj");
/* harmony import */ var ax_toolbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ax-toolbox */ "4/SI");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "St1U");










const routes = [
    {
        path: '', component: _employees_datatable_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesDatatableComponent"]
    }
];
class EmployeesDatatableModule {
}
EmployeesDatatableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmployeesDatatableModule });
EmployeesDatatableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmployeesDatatableModule_Factory(t) { return new (t || EmployeesDatatableModule)(); }, providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ax_toolbox__WEBPACK_IMPORTED_MODULE_4__["BsDatatableModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"],
            ax_toolbox__WEBPACK_IMPORTED_MODULE_4__["BsFormSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeesDatatableModule, { declarations: [_employees_datatable_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesDatatableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ax_toolbox__WEBPACK_IMPORTED_MODULE_4__["BsDatatableModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"],
        ax_toolbox__WEBPACK_IMPORTED_MODULE_4__["BsFormSelectModule"]], exports: [_employees_datatable_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesDatatableComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeesDatatableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_employees_datatable_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesDatatableComponent"]],
                exports: [_employees_datatable_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesDatatableComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    ax_toolbox__WEBPACK_IMPORTED_MODULE_4__["BsDatatableModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"],
                    ax_toolbox__WEBPACK_IMPORTED_MODULE_4__["BsFormSelectModule"]
                ],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Stxj":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/main/empleados/employees/employees-datatable/employees-datatable.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EmployeesDatatableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesDatatableComponent", function() { return EmployeesDatatableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ax_toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ax-toolbox */ "4/SI");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/api/services */ "EZPP");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "St1U");










class EmployeesDatatableComponent {
    constructor(dPipe, translateSV, employeesSV) {
        this.dPipe = dPipe;
        this.translateSV = translateSV;
        this.employeesSV = employeesSV;
        this.dtColumns = [];
        this.mostrarTabla = true;
        this.mostrarDoc = true;
        this.initDatatables();
    }
    ngOnInit() {
    }
    initDatatables() {
        this.initFilterPosition();
        this.initDtColumns();
        this.filterDataTableGetterFn = (queryParams, filters) => {
            return this.employeesSV.apiEmployeesDatatablePost$Json({ body: filters, pi: queryParams.pi, ps: queryParams.ps })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((d) => new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtApiResponse"]().setData({
                items: d.items,
                pageIndex: Number(queryParams.pi),
                pageSize: Number(queryParams.ps),
                total: d.total
            }))).toPromise();
        };
    }
    initDtColumns() {
        this.dtColumns = [
            new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtColumnItem"]().setData({
                thTHeadClass: 'cell-narrow',
                buttons: [
                    new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtActionColumnButton"]().setData({
                        url: '/empleados/employees/details/{id}',
                        urlTarget: '_self',
                        iconPreffix: 'fas',
                        iconName: 'eye',
                        btnClass: 'btn btn-outline-secondary btn-sm',
                    }),
                ],
            }),
            new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtColumnItem"]().setData({
                columnName: 'Nombre',
                field: 'name',
                filter: true,
            }), new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtColumnItem"]().setData({
                columnName: 'Apellido',
                field: 'surname',
                filter: true,
            }), new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtColumnItem"]().setData({
                columnName: 'Fecha de nacimiento',
                field: 'dbirth',
                fieldDisplayType: 'datetime',
                filter: true,
                filterItem: new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtFilterItem"]().setData({
                    format: ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["FilterFormatType"].Date,
                    type: ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["AxBsDatatableFilterType"].date
                }),
                fieldDisplayMiddleware: (data) => {
                    if (data == null) {
                        return '';
                    }
                    const transformed = this.dPipe.transform(data, this.translateSV.instant('FORMAT.DATETIME'));
                    return transformed;
                },
            }), new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtColumnItem"]().setData({
                columnName: 'Fecha de comienzo',
                field: 'dstart',
                fieldDisplayType: 'datetime',
                filter: true,
                filterItem: new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtFilterItem"]().setData({
                    format: ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["FilterFormatType"].Date,
                    type: ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["AxBsDatatableFilterType"].date
                }),
                fieldDisplayMiddleware: (data) => {
                    if (data == null) {
                        return '';
                    }
                    const transformed = this.dPipe.transform(data, this.translateSV.instant('FORMAT.DATETIME'));
                    return transformed;
                },
            }),
            new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtColumnItem"]().setData({
                columnName: 'Posición',
                field: 'positionType',
                fieldDisplayMiddleware: (data) => {
                    if (data == 0) {
                        return "Jefe";
                    }
                    else if (data == 1) {
                        return "Gerente";
                    }
                    else if (data == 2) {
                        return "Supervisor";
                    }
                    else if (data == 3) {
                        return "Desarrollador";
                    }
                    else {
                        return "Testeador";
                    }
                },
                filter: true,
                filterItem: new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtFilterItem"]().setData({
                    format: ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["FilterFormatType"].Int,
                    type: ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["AxBsDatatableFilterType"].autocomplete,
                    getterFn: this.filtroPosition
                })
            }),
        ];
    }
    initFilterPosition() {
        this.filtroPosition = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fromApi = yield this.employeesSV.apiEmployeesPositionlistGet$Json({})
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .toPromise();
            return fromApi.map(dvalue => new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["LabelAndValueExtended"]().setData({
                label: dvalue.data,
                value: dvalue.value
            }));
        });
    }
}
EmployeesDatatableComponent.ɵfac = function EmployeesDatatableComponent_Factory(t) { return new (t || EmployeesDatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_6__["EmployeesService"])); };
EmployeesDatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmployeesDatatableComponent, selectors: [["app-employees-datatable"]], decls: 177, vars: 12, consts: [[1, "section-title", "my-4"], ["urlData", "api/employees/datatable", 3, "columns", "actionButtonShowRefresh"], [1, "btn-primary", 3, "click"], ["botonTablaAlt", ""], [3, "collapse", "isAnimated"], ["tablaAlt", ""], [3, "columns", "actionButtonShowRefresh", "dataGetterFn"], ["botonDocumentacion", ""], ["documentacion", ""], ["href", "https://momentjs.com/docs/#/parsing/string-format/", "target", "_black"]], template: function EmployeesDatatableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ax-bs-datatable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeesDatatableComponent_Template_button_click_4_listener() { return ctx.mostrarTabla = !ctx.mostrarTabla; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Mostar tabla alternativa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "M\u00E9todo de cargado de tabla alternativo: GetterFn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ax-bs-datatable", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeesDatatableComponent_Template_button_click_14_listener() { return ctx.mostrarDoc = !ctx.mostrarDoc; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Mostar documentaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "DOCUMENTACI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Para crear la siguiente tabla usaremos el siguiente c\u00F3digo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n        <ax-bs-datatable\n        [columns]=\"dtColumns\"\n        [actionButtonShowRefresh]=\"false\"\n        urlData=\"api/employees/datatable\"\n        ></ax-bs-datatable>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\ndtColumns ser\u00E1 la variable que guarde las columnas en nuestro componente.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n        dtColumns: DtColumnItem<Employee>[] = [];\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "urlData se encargar\u00E1 de acceder a la ruta marcada para extraer los datos de la lista en el servidor. Podemos usar un m\u00E9todo alternativo con getterFn para cargar la tabla:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\n    <ax-bs-datatable\n    [columns]=\"dtColumns\"\n    [actionButtonShowRefresh]=\"false\"\n    [dataGetterFn]=\"filterDataTableGetterFn\"\n    ></ax-bs-datatable>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "dataGetterFn sustituir\u00E1 a urlData. filterDataTableGetterFn ser\u00E1 la variable que se encargue de cargar los datos de la tabla:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n    filterDataTableGetterFn: DtDataGetterFn<Employee>;\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Para cargar los datos en la variable usaremos el siguiente c\u00F3digo en el componente:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\n    this.filterDataTableGetterFn = (queryParams, filters) => {\n    return this.employeesSV.apiEmployeesDatatablePost$Json({body:filters as any,pi:queryParams.pi as any,ps:queryParams.ps as any})\n    .pipe(first())\n    .pipe(map((d) => new DtApiResponse<Employee>().setData({\n      items:d.items,\n      pageIndex:Number(queryParams.pi),\n      pageSize:Number(queryParams.ps),\n      total:d.total\n    })\n    )).toPromise();\n  };\n  };\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "De est\u00E1 forma accederemos a la api y maparemos los datos con el formato que acepta datatable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Para establecer las columnas de la tabla modificaremos la variable dtColumns:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\n        this.dtColumns = []\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Dentro de los corchetes a\u00F1adiremos los disitintos DTColumnItem. A cada DtColumnItem podemos a\u00F1adirle las siguientes opciones:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\n- columnName (string) - Nombre que tendr\u00E1 la columna.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\n- field (string) - Variable del componente que mostrar\u00E1 la columna.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\n- fieldDisplayWrapperClass (string) - Clase que se asignar\u00E1 al div contenido en cada td de la columna");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\n- fieldDisplayType (FieldDisplayType) - Indica el tipo de campo que mostrar\u00E1 la columna. Los valores posibles a indicar son: 'text', 'html', 'url', 'boolean', 'date', 'datetime', 'time', 'currency', 'array'.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\n- fieldDisplayPreffix (string) - A\u00F1ade un texto delante de cada valor en cada fila de la columna.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\n- fieldDisplaySuffix (string) - A\u00F1ade un texto detr\u00E1s de cada valor en cada fila de la columna.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\n- fieldDisplayMiddleware (FieldDisplayMiddleware<TRow, TCellValue>) - Nos permite formatear los datos de la celda de la forma deseada. Por ejemplo, para a\u00F1adir el prefijo \"AX-\" delante de cada dato usar\u00EDamos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "\n        fieldDisplayMiddleware: (data) => { \n            return ('AX-' + data);\n        }\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " - fieldDisplayFormatDate (string), fieldDisplayFormatTime (string) y fieldDisplayFormatDateTime (string) - Indica el formato de fecha y hora en el caso de que sea un campo de fecha y/o hora. Puedes ver los distintos formartos que se pueden aplicar desde ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "aqu\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\n- filter (boolean) - Indica si se podr\u00E1 filtrar por la columna de la tabla.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "\n- filterItem (DtFilterItem<unknown>) - Personaliza el campo de filtrado de la columna. Podemos asignarle los siguientes valores al filterItem:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "field (string) - Variable a modificar por el filtro.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "value (TValue) - Valor que tendr\u00E1 el filtro por defecto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "op (FilterOpType) - Tipo de operador que usar\u00E1 el filtro. Las opciones son: Eq (Equal), Ne (Not equal), EqualOrNotEqual (equal and not equal), Lt (less than), Le (Less or equal), Gt (Greater), Ge (Greater or equal), Bw (Begins with), Bn (Does not begin with), In (Is in), Ni (Is not in), Ew (Ends with), En (Does not end with), Cn (Contains), Nc (Does not contain), Nu (Is null), Nn(Is not null), NoTextOperators, TextOperators, NullOperators.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "format (FilterFormatType) - Indica el formato del filtro. Las opciones son: Literal, String, DateTime, Guid, Date = 2, Bool, Int.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "options (LabelAndValueExtended<TValue, any>[]) - A\u00F1ade opciones extra al filtro.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "type (AxBsDatatableFilterType) - Tipo de input que usar\u00E1 el filtro. Las opciones son: text, textarea, date, number, dataselect, autocomplete = 5, daterange = 6.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "getterFn (BsAutocompleteGetterFn<TFilterValue> | BsFormSelectGetterFn<TFilterValue>) - Variable getterFn que servir\u00E1 para generar los datos del filtro si este es un dataselect o un autocomplete.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "filterText (string) - Texto por defecto para el filtro si es de tipo autocomplete.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "\nPor ejemplo, podemos establecer un datepicker para el filtro de la siguiente forma:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "\n    filterItem:  new DtFilterItem().setData({\n        format:FilterFormatType.Date,\n        type:AxBsDatatableFilterType.date,\n        })\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, " - sort: (boolean) - Indica si se podr\u00E1 ordenar por la columna de la tabla.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "\n- isSorting (boolean) - Indica si se est\u00E1 ordenando por la columna.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "\n- sortDirection (SortDirection) - Indica el sentido en que se hace la ordenaci\u00F3n. Las opciones son: Ascendent = 0, Descendent = 1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "\n- buttons (DtActionColumnButton<TRow, TCellValue>[]) - A\u00F1ade botones a la columna. Ver ejemplo debajo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "\n- buttonWrapperClass (string) - Clase que se asignar\u00E1 al div que contiene los botones en la columna.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "\n- thTHeadClass (string) - Clase que se asignar\u00E1 al th de la columna");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, " Otros campos que puedes a\u00F1adir son:\n- fieldExcelExportMiddleware (FieldDisplayMiddleware<TRow, TCellValue>) Nos permite formatear los datos de la celda de la forma deseada cuando son exportados a excel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "\n- fieldDisplay (string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "\n- isBooleanFalseIcon (ColumnItemIconDefinition)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "\n- isBooleanBooleanIcon (ColumnItemIconDefinition)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "\n- valueIcons (ColumnItemIconConfig<TCellValue>[])");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "\n- fieldCssClass (string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Ejemplo de DtColumns para una tabla");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, " La primera columna de la tabla ser\u00E1 el bot\u00F3n de detalles:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "\n        new DtColumnItem().setData({\n            thTHeadClass: 'cell-narrow',\n            buttons: [\n            new DtActionColumnButton<Employee, string>().setData({\n                url: '/empleados/employees/details/{id}',\n                urlTarget: '_self',\n                iconPreffix: 'fas',\n                iconName: 'eye',\n                btnClass: 'btn btn-outline-secondary btn-sm',\n            }),\n            ],\n            }),\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Para a\u00F1adir una columna de un campo de texto a\u00F1adiremos el siguiente c\u00F3digo a dtColumns:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "\n        new DtColumnItem().setData({\n            columnName: 'Nombre',\n            field: 'name',\n            filter: true,\n            }),\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "columnName indica el nombre que se mostrar\u00E1 en el header de la columna field ser\u00E1 el nombre del atributo del objeto que queremos mostrar en la columna filter indica si se podr\u00E1 filtrar por esa columna Para los campos que se traten de una fecha a\u00F1adiremos el siguiente c\u00F3digo adicional:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "\n        fieldDisplayType: 'datetime',\n        fieldDisplayMiddleware: (data) => {\n            if (data == null) { return ''; }\n            const transformed = this.dPipe.transform(data, this.translateSV.instant('FORMAT.DATETIME'));\n            return transformed;\n        }\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, " Primero se va a crear una variable BsFormSelectGetterFn para obtener las position. Para ello, crearemos el ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, " m\u00E9todo que se encargar\u00E1 de traernos estos datos desde la api y mappearlos para poder ser usados.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, " Inicializamos este metodo dentro del initDatatables().\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "    this.filtroPosition = async ()=>{\n        const fromApi = await this.employeesSV.apiEmployeesPositionlistGet$Json({})\n        .pipe(first())\n        .toPromise();\n        return fromApi.map(dvalue => new LabelAndValueExtended<number>().setData( {\n           label: dvalue.data,\n           value: dvalue.value\n           }));\n        };\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, " Una vez creamos el metodo, pasamos a a\u00F1adirselo al dtColumns para que cree una columna que se pueda filtrar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, " por los valores que le pasaremos. Para ello, cuando creamos un filterItem, le pasamos esta variable BsFormSelectGetterFn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, " creada con anterioridad y ya inicializada al getterFn.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "    new DtColumnItem().setData({\n        columnName: 'Posici\u00F3n',\n        field: 'position',\n        filter: true,\n        filterItem: new DtFilterItem().setData({\n          format:FilterFormatType.Int,\n          type:AxBsDatatableFilterType.autocomplete,\n          getterFn: this.filtroPosition\n          })\n        }),\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 10, "PAGE.EMPLOYEES.LIST.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx.dtColumns)("actionButtonShowRefresh", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapse", ctx.mostrarTabla)("isAnimated", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx.dtColumns)("actionButtonShowRefresh", false)("dataGetterFn", ctx.filterDataTableGetterFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapse", ctx.mostrarDoc)("isAnimated", true);
    } }, directives: [ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["BsDatatableComponent"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vZW1wbGVhZG9zL2VtcGxveWVlcy9lbXBsb3llZXMtZGF0YXRhYmxlL2VtcGxveWVlcy1kYXRhdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmployeesDatatableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-employees-datatable',
                templateUrl: './employees-datatable.component.html',
                styleUrls: ['./employees-datatable.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_6__["EmployeesService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=employees-datatable-employees-datatable-module.js.map