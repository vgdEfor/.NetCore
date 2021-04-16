(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "HDgd":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/main/empleados/projects/projects-datatable/projects-datatable.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ProjectsDatatableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsDatatableComponent", function() { return ProjectsDatatableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ax_toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ax-toolbox */ "4/SI");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/api/services */ "EZPP");









function ProjectsDatatableComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "DOCUMENTACI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Para crear la tabla se usar\u00E1 el siguiente c\u00F3digo, dtColumns2 ser\u00E1 la variable que guardar\u00E1 los campos de la lista mientras que dtItemsInst2 ser\u00E1 la variable que almacenar\u00E1 los datos de la lista. La urlData ser\u00E1 la ruta a la cual acceder\u00E1 para invocar la lista dentro de esta tabla. Tambi\u00E9n se pueden a\u00F1adir gracias al getterFn, pero en este caso se ha hecho con el urlData y el employees con getterFn. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "        <ax-bs-datatable\n        [columns]=\"dtColumns2\"\n        [items]=\"dtItemsInst2\"\n        [actionButtonShowRefresh]=\"false\"\n        urlData=\"api/project/datatable\"\n        ></ax-bs-datatable>\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Las columnas se van a declarar con las siguientes variables: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "        static dtItemsP: Project[] = [];\n        dtColumns2: DtColumnItem<Project>[] = [];\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Ahora en el metodo se proceder\u00E1 a darle la forma a esas tablas con los tipos de dato que albergar\u00E1. Con esto lo que haremos ser\u00E1 que cuando seleccionemos un project, a trav\u00E9s de la url que le hemos indicado, nos redirigir\u00E1 a ese componente pas\u00E1ndole lo seleccionado dentro de {}, que en este caso ser\u00E1 el id del project. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "        this.dtColumns2 = [\n        new DtColumnItem().setData({\n        thTHeadClass: 'cell-narrow',\n\n        buttons: [\n          new DtActionColumnButton<Project, string>().setData({\n                    url: '/empleados/project/details/{id}',\n                    urlTarget: '_self',\n                    iconPreffix: 'fas',\n                    iconName: 'eye',\n                    btnClass: 'btn btn-outline-secondary btn-sm',\n                }),\n            ],\n        }),\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Siguiendo con la creaci\u00F3n de los campos de la tabla, la sintaxis a emplear ser\u00E1 la siguiente: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n        new DtColumnItem().setData({\n            columnName: 'Responsable',\n            field: 'responsable.name',\n            filter: true,\n            }),\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " - columnName: Es la que contendr\u00E1 al nombre de la columna en la tabla a mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " - field: Es el campo con los valores del modelo para saber a que campo tiene que acceder para recoger sus datos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " - filter: si es true, habilitar\u00E1 los filtros, sino, no");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Mas posibles elementos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " - fieldDisplayMiddleware: permite darle formato al campo que se mostrar\u00E1 - filterItem: sirve para darle formato al filtro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Donde columnName ir\u00E1 indicado el nombre de la columna, en field el tipo de valor que contendr\u00E1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " el campo y el filter es un boolean para indicar si tendr\u00E1 filtros o no. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " En cambio, si el campo es una fecha, habr\u00E1 que a\u00F1adirle una transformaci\u00F3n para que las fechas sean representadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " correctamente. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "        new DtColumnItem().setData({\n            columnName: 'Inicio',\n            field: 'dstart',\n            fieldDisplayType: 'date',\n            fieldDisplayMiddleware: (data) => {\n              if (data == null) { return ''; }\n              const transformed = this.dPipe.transform(data, this.translateSV.instant('FORMAT.DATE'));\n              return transformed;\n            },\n            filter: true,\n        }),\n\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Como a\u00F1adido, y gracias a la ultima actualizaci\u00F3n del ax-toolbox, se han podido implementar dos nuevas propiedades");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " a las dtColumns cuando son definidas. Estas propiedades permiten mostrar u ocultar la columna dependiendo del valor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " asignado a esas propiedades. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "        isShown: false,\n        canChangeIsShown: true\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Con el \"isShown\" se puede cambiar la visibilidad de la columna y con el \"canChangeIsShown\" se puede cambiar a que se muestre u oculte");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " directamente desde el html. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ProjectsDatatableComponent {
    constructor(dPipe, translateSV, servicio) {
        this.dPipe = dPipe;
        this.translateSV = translateSV;
        this.servicio = servicio;
        this.dtColumns2 = [];
        this.dtItemsInst2 = [];
        //booleans 
        this.isDocumented = false;
        this.initDatatables();
    }
    ngOnInit() {
        this.dtItemsInst2 = ProjectsDatatableComponent.dtItemsP;
    }
    //filtro
    addFilterPriority() {
        this.filtroPriority = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fromApi = yield this.servicio.apiProjectPrioritylistGet$Json({})
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .toPromise();
            return fromApi.map(dvalue => new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["LabelAndValueExtended"]().setData({
                label: dvalue.data,
                value: dvalue.value
            }));
        });
    }
    initDatatables() {
        this.initDtColumns();
    }
    initDtColumns() {
        this.dtColumns2 = [
            new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtColumnItem"]().setData({
                thTHeadClass: 'cell-narrow',
                buttons: [
                    new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtActionColumnButton"]().setData({
                        url: '/empleados/project/details/{id}',
                        urlTarget: '_self',
                        iconPreffix: 'fas',
                        iconName: 'eye',
                        btnClass: 'btn btn-outline-secondary btn-sm',
                    }),
                ],
            }),
            new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtColumnItem"]().setData({
                columnName: this.translateSV.instant('PAGE.PROJECT.LIST.DATATABLE.COLUMN.NAME'),
                field: 'name',
                filter: true,
                filterItem: new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtFilterItem"]().setData({
                    op: ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["FilterOpType"].Cn
                })
            }),
            new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtColumnItem"]().setData({
                columnName: 'Responsable',
                field: 'responsable.name',
                filter: true,
                isShown: false,
                canChangeIsShown: true
            }),
            new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtColumnItem"]().setData({
                columnName: 'Priority',
                field: 'priorityType',
                fieldDisplayMiddleware: (data) => {
                    if (data == 0) {
                        return "Low";
                    }
                    else if (data == 1) {
                        return "Medium";
                    }
                    else
                        return "High";
                },
                canChangeIsShown: true,
                filter: true,
                filterItem: new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtFilterItem"]().setData({
                    format: ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["FilterFormatType"].String,
                    op: ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["FilterOpType"].Eq,
                    type: ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["AxBsDatatableFilterType"].autocomplete,
                    options: [
                        new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["LabelAndValueExtended"]().setData({
                            label: 'Low',
                            value: '0'
                        }),
                        new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["LabelAndValueExtended"]().setData({
                            label: 'Medium',
                            value: '1'
                        }),
                        new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["LabelAndValueExtended"]().setData({
                            label: 'High',
                            value: '2'
                        }),
                    ]
                })
            }),
            new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtColumnItem"]().setData({
                columnName: 'Inicio',
                field: 'dstart',
                fieldDisplayType: 'date',
                filterItem: new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtFilterItem"]().setData({
                    format: ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["FilterFormatType"].Date,
                    type: ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["AxBsDatatableFilterType"].date
                }),
                fieldDisplayMiddleware: (data) => {
                    if (data == null) {
                        return '';
                    }
                    const transformed = this.dPipe.transform(data, this.translateSV.instant('FORMAT.DATE'));
                    return transformed;
                },
                filter: true,
            }),
            new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DtColumnItem"]().setData({
                columnName: 'Fin',
                field: 'dend',
                fieldDisplayType: 'date',
                fieldDisplayMiddleware: (data) => {
                    if (data == null) {
                        return '';
                    }
                    const transformed = this.dPipe.transform(data, this.translateSV.instant('FORMAT.DATE'));
                    return transformed;
                },
                filter: true,
            }),
        ];
    }
}
//project
ProjectsDatatableComponent.dtItemsP = [];
ProjectsDatatableComponent.ɵfac = function ProjectsDatatableComponent_Factory(t) { return new (t || ProjectsDatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_6__["ProjectService"])); };
ProjectsDatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectsDatatableComponent, selectors: [["app-projects-datatable"]], decls: 11, vars: 7, consts: [[1, "section-title", "my-4"], ["urlData", "api/project/datatable", 3, "columns", "items", "actionButtonShowRefresh"], ["dtProject", ""], ["type", "button", 1, "btn-primary", 3, "click"], [4, "ngIf"]], template: function ProjectsDatatableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ax-bs-datatable", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsDatatableComponent_Template_button_click_7_listener() { return ctx.isDocumented = !ctx.isDocumented; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Mostrar Documentaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProjectsDatatableComponent_div_10_Template, 55, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 5, "PAGE.PROJECT.LIST.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx.dtColumns2)("items", ctx.dtItemsInst2)("actionButtonShowRefresh", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDocumented);
    } }, directives: [ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["BsDatatableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vZW1wbGVhZG9zL3Byb2plY3RzL3Byb2plY3RzLWRhdGF0YWJsZS9wcm9qZWN0cy1kYXRhdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectsDatatableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-projects-datatable',
                templateUrl: './projects-datatable.component.html',
                styleUrls: ['./projects-datatable.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_6__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "U2pj":
/*!*********************************************************************!*\
  !*** ./src/app/pages/main/empleados/projects/projects.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _projects_datatable_projects_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-datatable/projects-datatable.component */ "HDgd");
/* harmony import */ var src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/api/services */ "EZPP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





class ProjectsComponent {
    constructor(servicioProject, employes) {
        this.servicioProject = servicioProject;
        this.employes = employes;
        this.responsables = [];
        //this.addItemsDatatable();
    }
    ngOnInit() {
    }
    addItemsDatatable() {
        if (_projects_datatable_projects_datatable_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsDatatableComponent"].dtItemsP == null || _projects_datatable_projects_datatable_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsDatatableComponent"].dtItemsP.length === 0) {
            this.servicioProject.apiProjectDatatablePost$Json().subscribe(result => {
                console.log("cargado correctamente");
                _projects_datatable_projects_datatable_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsDatatableComponent"].dtItemsP = result.items; // this.servicioProject.apiProjectGetlistGet();
                console.log(_projects_datatable_projects_datatable_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsDatatableComponent"].dtItemsP);
            }, error => {
            });
        }
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_2__["EmployeesService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 1, vars: 0, template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vZW1wbGVhZG9zL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }, { type: src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_2__["EmployeesService"] }]; }, null); })();


/***/ }),

/***/ "aSmE":
/*!******************************************************************!*\
  !*** ./src/app/pages/main/empleados/projects/projects.module.ts ***!
  \******************************************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.component */ "U2pj");







const routes = [
    { path: '', redirectTo: 'datatable', pathMatch: 'full' },
    {
        path: 'datatable', component: _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | projects-datatable-projects-datatable-module */ "projects-datatable-projects-datatable-module").then(__webpack_require__.bind(null, /*! ./projects-datatable/projects-datatable.module */ "RnUI")).then(m => m.ProjectsDatatableModule),
    },
    {
        path: 'new', component: _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"],
        loadChildren: () => Promise.all(/*! import() | projects-details-projects-details-module */[__webpack_require__.e("default~employees-details-employees-details-module~projects-details-projects-details-module"), __webpack_require__.e("common"), __webpack_require__.e("projects-details-projects-details-module")]).then(__webpack_require__.bind(null, /*! ./projects-details/projects-details.module */ "7dEM")).then(m => m.ProjectsDetailsModule),
    },
    {
        path: 'details', component: _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"],
        loadChildren: () => Promise.all(/*! import() | projects-details-projects-details-module */[__webpack_require__.e("default~employees-details-employees-details-module~projects-details-projects-details-module"), __webpack_require__.e("common"), __webpack_require__.e("projects-details-projects-details-module")]).then(__webpack_require__.bind(null, /*! ./projects-details/projects-details.module */ "7dEM")).then(m => m.ProjectsDetailsModule),
    },
];
class ProjectsModule {
}
ProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectsModule });
ProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectsModule_Factory(t) { return new (t || ProjectsModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsModule, { declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=projects-projects-module.js.map