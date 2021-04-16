(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-details-projects-details-module"],{

/***/ "7dEM":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/main/empleados/projects/projects-details/projects-details.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProjectsDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsDetailsModule", function() { return ProjectsDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _projects_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-details.component */ "j1H8");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var src_app_shared_components_array_translator_array_translator_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/array-translator/array-translator.module */ "dqf9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var src_app_shared_pipes_decimal_to_string_decimal_to_string_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/pipes/decimal-to-string/decimal-to-string.module */ "Hxe5");
/* harmony import */ var src_app_shared_components_modals_modal_confirmation_message_modal_confirmation_message_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/components/modals/modal-confirmation-message/modal-confirmation-message.module */ "PALy");
/* harmony import */ var ax_toolbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ax-toolbox */ "4/SI");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "St1U");


















const routes = [
    {
        path: '', component: _projects_details_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsDetailsComponent"],
    },
    { path: ':id', component: _projects_details_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsDetailsComponent"], }
];
class ProjectsDetailsModule {
}
ProjectsDetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectsDetailsModule });
ProjectsDetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectsDetailsModule_Factory(t) { return new (t || ProjectsDetailsModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
            src_app_shared_components_array_translator_array_translator_module__WEBPACK_IMPORTED_MODULE_5__["ArrayTranslatorModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"],
            src_app_shared_pipes_decimal_to_string_decimal_to_string_module__WEBPACK_IMPORTED_MODULE_10__["DecimalToStringModule"],
            src_app_shared_components_modals_modal_confirmation_message_modal_confirmation_message_module__WEBPACK_IMPORTED_MODULE_11__["ModalConfirmationMessageModule"],
            ax_toolbox__WEBPACK_IMPORTED_MODULE_12__["BsFormAutocompleteModule"],
            ax_toolbox__WEBPACK_IMPORTED_MODULE_12__["BsFormSelectModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_13__["CollapseModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsDetailsModule, { declarations: [_projects_details_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], src_app_shared_components_array_translator_array_translator_module__WEBPACK_IMPORTED_MODULE_5__["ArrayTranslatorModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"],
        src_app_shared_pipes_decimal_to_string_decimal_to_string_module__WEBPACK_IMPORTED_MODULE_10__["DecimalToStringModule"],
        src_app_shared_components_modals_modal_confirmation_message_modal_confirmation_message_module__WEBPACK_IMPORTED_MODULE_11__["ModalConfirmationMessageModule"],
        ax_toolbox__WEBPACK_IMPORTED_MODULE_12__["BsFormAutocompleteModule"],
        ax_toolbox__WEBPACK_IMPORTED_MODULE_12__["BsFormSelectModule"],
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_13__["CollapseModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsDetailsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_projects_details_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsDetailsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                    src_app_shared_components_array_translator_array_translator_module__WEBPACK_IMPORTED_MODULE_5__["ArrayTranslatorModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"],
                    src_app_shared_pipes_decimal_to_string_decimal_to_string_module__WEBPACK_IMPORTED_MODULE_10__["DecimalToStringModule"],
                    src_app_shared_components_modals_modal_confirmation_message_modal_confirmation_message_module__WEBPACK_IMPORTED_MODULE_11__["ModalConfirmationMessageModule"],
                    ax_toolbox__WEBPACK_IMPORTED_MODULE_12__["BsFormAutocompleteModule"],
                    ax_toolbox__WEBPACK_IMPORTED_MODULE_12__["BsFormSelectModule"],
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_13__["CollapseModule"]
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "j1H8":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/main/empleados/projects/projects-details/projects-details.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProjectsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsDetailsComponent", function() { return ProjectsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ax_toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ax-toolbox */ "4/SI");
/* harmony import */ var src_app_shared_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/utils/form-utils */ "4uUY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/api/services */ "EZPP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../projects.component */ "U2pj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var _shared_components_array_translator_array_translator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/array-translator/array-translator.component */ "vxM4");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _shared_components_modals_modal_confirmation_message_modal_confirmation_message_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../shared/components/modals/modal-confirmation-message/modal-confirmation-message.component */ "reQB");



















const _c0 = ["modalDeleteConfirm"];
const _c1 = ["modalCreateConfirm"];
function ProjectsDetailsComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PAGE.PROJECT.DETAILS.TITLE"));
} }
function ProjectsDetailsComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PAGE.PROJECT.NEW.TITLE"));
} }
function ProjectsDetailsComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", r_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](r_r13.label);
} }
const _c2 = function () { return ["/empleados/project"]; };
const _c3 = function () { return ["fas", "chevron-left"]; };
function ProjectsDetailsComponent_div_56_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "GENERIC.BTN.GOTO.LIST"), " ");
} }
const _c4 = function () { return ["fas", "sync"]; };
function ProjectsDetailsComponent_div_56_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c4))("spin", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "GENERIC.LABEL.LOADING"), " ");
} }
const _c5 = function () { return ["fas", "save"]; };
function ProjectsDetailsComponent_div_56_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "GENERIC.BTN.SAVE"), " ");
} }
const _c6 = function () { return ["fas", "trash"]; };
function ProjectsDetailsComponent_div_56_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsDetailsComponent_div_56_button_5_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.onBtnDelete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "GENERIC.BTN.DELETE"), " ");
} }
function ProjectsDetailsComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectsDetailsComponent_div_56_button_1_Template, 4, 7, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProjectsDetailsComponent_div_56_ng_container_3_Template, 4, 6, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProjectsDetailsComponent_div_56_ng_container_4_Template, 4, 5, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProjectsDetailsComponent_div_56_button_5_Template, 4, 5, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7._item.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r7._isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7._isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7._isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7._item.id);
} }
function ProjectsDetailsComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", null, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ax-bs-form-select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedChange", function ProjectsDetailsComponent_div_61_Template_ax_bs_form_select_selectedChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21._item.priorityType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Como variaci\u00F3n para mostrar los elementos del enum priority, se ha procedido a crear una funci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " que llamar\u00E1 al servicio trayendo desde la api una lista con los enum que ser\u00E1n mapeados para ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " pasarselos al componente con el formato que pide. Con el getterFn llamar\u00E9mos a la varaible que contendr\u00E1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " esa lista ya optimizada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "    <div>\n    <button type=\"button\" (click)=\"function()\">Mostrar variaci\u00F3n de priority</button>\n    </div>\n    \n    <div #myname *ngIf=\"isCollapsed\">\n      <ax-bs-form-select \n        [id]=\"'ddl-priority'\"\n        [label]=\"'PriorityVariation'\"\n        [tooltipContent]=\"'Priority variation'\"\n        [getterFn]=\"selectPostionGetterFn\"\n        [(selected)]=\"_item.priorityType\"\n        [debounceTimeMs]=\"200\" >\n      </ax-bs-form-select >\n    </div >\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Para rellenar la lista, tendremos que crear la variable selectPostionGetterFn: BsFormSelectGetterFn <number >;");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " A continuaci\u00F3n, la implementaremos en una funci\u00F3n en donde vamos a llamar a ese servicio que nos devolver\u00E1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " una lista la cual mapearemos para poder utilizarla. Estableceremos los valores de la label y el value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "    this.selectPostionGetterFn = async ()=>{\n      const fromApi = await this.servicio.apiProjectPrioritylistGet$Json({})\n      .pipe(first())\n      .toPromise();\n      return fromApi.map(dvalue => new LabelAndValueExtended<number>().setData( {\n         label: dvalue.label,\n         value: dvalue.value\n        }));\n      };\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Adem\u00E1s se ha a\u00F1adido un bot\u00F3n que har\u00E1 que se muestre tanto la variaci\u00F3n de priority como el texto explicativo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Este bot\u00F3n tiene un evento clic que lo que har\u00E1 ser\u00E1 acceder a una funci\u00F3n cambiando el valor de un boolean. Este ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " boolean servir\u00E1 para mostrar u ocultar toda esta composici\u00F3n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "      <div #myname *ngIf=\"isCollapsed\"></div>\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Como se puede observar, habr\u00E1 un div en donde se incorporar\u00E1 toda esta informaci\u00F3n y habr\u00E1 una sentencia if que");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " permitir\u00E1 visualizar todo este contenido si se cumple. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "ddl-priority")("label", "PriorityVariation")("tooltipContent", "Priority variation")("getterFn", ctx_r8.selectPostionGetterFn)("selected", ctx_r8._item.priorityType)("debounceTimeMs", 200);
} }
function ProjectsDetailsComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "DOCUMENTACI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Lo primero que se ha hecho es mirar por donde est\u00E1 entrando, si por nuevo o por detalles de un project. Con este codigo se comprueba para ver el path y saber por donde va. Si entra como nuevo item, el valor del boolean this.esNuevoItem ser\u00E1 modificado y guardado. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n    const childS = this.aRoute.paramMap.subscribe((data) =>{ \n      const id = data.get('id');\n      if (parentUrl[0].path === 'new') {\n        if (id) {\n          this.goBack();\n          return;\n          }\n        console.log(\"Entra por new\");\n        this.esNuevoItem = true;\n        this._isLoading = false;\n        } else {\n        if (!id) {\n          this.goBack();\n          return;\n          }\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Con este codigo se llamar\u00E1 al servicio para que busque si existe el project a trav\u00E9s del id, de esta forma, tendremos el objeto project en todo momento guardado para posteriormente modificarlo o borrarlo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "    this.servicio.apiProjectGetbyidGet$Json({  clave: this.newId }).subscribe(result => {\n      this._item = result;\n\n      if (this._item == null) {\n        this.goBack();\n        return;\n        }\n      if(this.newId === result.id){\n        this.dstart = new Date(result.dstart);\n        this.dend = new Date(result.dend);\n        this.responsableSelected = this._item.responsableId;\n        this._isLoading = false;\n        }\n                 \n        });\n    \n     ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Cabe destacar que todos los elementos guardados en el ts que queramos mostrar y posteriormente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " tratar, tendr\u00E1n que ir definidos en el HTML con el [(ngModel)]. Las variables que queramos modificar de nuestro item, las modificaremos a trav\u00E9s de un input.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Por ejemplo si quiero mostrar los valores");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " dentro de mi elemento recogido por el id, tendr\u00E9 que hacerlo con la siguiente sintaxis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n        <input type=\"text\" autocomplete=\"off\" class==form-control form-control-sm\"\n        [id]=\"lblName.getAttribute('for')\" [name]=\"lblName.getAttribute('for')\"\n        [(ngModel)]=\"_item.name\"\n        [disabled]=\"_isLoading\"\n        [required]=\"true\">\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Ahora, este metodo recoger\u00E1 las listas de empleados y de priority disponibles en el onInit para pasarselas a los DropDownList.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "    inicializaDropList(){\n    \u00A0\u00A0if(this.responsables.length<=0){\n    \u00A0\u00A0\u00A0\u00A0this.employes.apiEmployeesGetlistcompletaPost$Json().subscribe(data =>{\n    \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0this.responsables = data.items;\n    \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0console.log(data.items);\n    \u00A0\u00A0\u00A0\u00A0}\n    \u00A0\u00A0)}\n        \n    if(this.listaPriority.length<= 0){\n    \u00A0\u00A0\u00A0\u00A0this.servicio.apiProjectPrioritylistGet$Json().subscribe(data =>{\n    \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0this.listaPriority = data;\n    \u00A0\u00A0\u00A0\u00A0})\n    \u00A0\u00A0 }\n    }\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " En el ngModel se almacenar\u00E1, en este caso, el tipo de Prioridad seleccionada, pero tambien sirve para los campos dentro del formulario como se indic\u00F3 anteriormente.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Esto har\u00E1 que se muestre ese atributo de _item y que, a su vez, si se modifica, que se pueda recuperar. La label ser\u00E1 lo que se muestre y el value ser\u00E1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " el valor que nos guardaremos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "    <select class=\"form-control form-control-sm\"\n    [id]=\"lblPriority.getAttribute('for')\" [name]=\"lblPriority.getAttribute('for')\"\n    [disabled]=\"_isLoading\"\n    [(ngModel)]=\"_item.priorityType\"\n    [required]=\"true\">   \n    <option  *ngFor=\"let r of listaPriority | keyvalue\" [value]=\"r.value.value\">[[r.value.label]]</option>\n    </select>\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Una vez se hayan completado todos los campos, se proceder\u00E1 a guardar el resultado, ya sea al generar un nuevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " project o bien modificar uno. Para ello en el siguiente codigo convertir\u00E1 el formato fecha a uno legible, se ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " comprobar\u00E1 que los campos no est\u00E9n vac\u00EDos o sean errones mostrando con un modal una ventana que muestre que el cliente no ha introducido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " bien los datos,se comprobar\u00E1 si es un nuevo project o se est\u00E1 modificando uno");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " y posteriormente se har\u00E1n los cambios llamando al metodo correspondiente en el servicio. A su vez habr\u00E1 una peque\u00F1a espera de 3 segundos y volver\u00E1 al listado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Primero se crea una lista de strings,");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " luego se va a recorrer los object dentro de error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " de cada object se va a sacar el string del mensaje y se a\u00F1adir\u00E1 a la lista");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " desde el html se mostrar\u00E1 con un for la lista de errores.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Mas abajo se explicar\u00E1 el metodo de validaci\u00F3n y los errores. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "\n      async onBtnSave(ev: MouseEvent) {\n        this._isLoading = true;\n    \n        //guarda el formato fecha correctamente\n        if (this.dstart && this.dstart != undefined) {\n          this._item.dstart = this.dstart.getFullYear() + \"-\" + (this.dstart.getMonth() + 1) + \"-\" + this.dstart.getDate();\n          } else {\n          this._item.dstart = \"\";\n          }\n    \n        if (this.dend && this.dend != undefined) {\n          this._item.dend = this.dend.getFullYear() + \"-\" + (this.dend.getMonth() + 1) + \"-\" + this.dend.getDate();\n          } else {\n          this._item.dend = \"\";\n          }\n    \n    \n        //comprueba que el responsable exista, que no sea nulo, que el nombre este introducido, como la fecha\n        var isValid = false;\n        this.mensaje = [];\n        this._item.responsableId = this.responsableSelected;\n        if (this._item.responsableId == undefined || this._item.responsableId == null || this._item.responsableId <= 0) {\n          this.modalCreate.btnConfirmShown = false;\n          this.mensaje.push(\"Empleado no encontrado o no existe\");\n          this.modalCreate.open();\n          this._isLoading = false;\n          return;\n          } else {\n          this.employes.apiEmployeesGetbyidGet$Json({ id: this.responsableSelected }).subscribe(data => {\n            this.employeeError = data;\n            if (this.employeeError.id <= 0 ||\n              !this.responsables.find(element => element.name == this.employeeError.name) ||\n              !this.responsables.find(element => element.name == this._item.responsable.name) ||\n              this._item.name.length <= 0 || this._item.dend.length <= 0 || this._item.dstart.length <= 0) {\n    \n              this.modalCreate.btnConfirmShown = false;\n              this.mensaje.push(\"Empleado no encontrado o no existe\");\n              this.modalCreate.open();\n              this._isLoading = false;\n              isValid = true;\n              }\n    \n    \n            //comprueba si es nuevo o son los detalles de uno\n            if (this.esNuevoItem && !isValid) {\n              console.log(\"Entra en nuevo\");\n              this.servicio.apiProjectInsertPost$Json({ body: this._item, commit: true }).subscribe(data => {\n                this._isLoading = false\n                this.contador();\n    \n                }, error => {\n                this.crearMensajeError(error.errorData);\n                this.modalCreate.btnConfirmShown = false;\n                this.modalCreate.open();\n                this._isLoading = false;\n                return;\n                }\n              );\n    \n              } else if (!this.esNuevoItem && !isValid) {\n              console.log(\"Entra en update\");\n              this.servicio.apiProjectUpdatePost$Json({ body: this._item }).subscribe(data => {\n                this._isLoading = false\n                this.contador();\n    \n                }, error => {\n                this.crearMensajeError(error.errorData);\n                this.modalCreate.btnConfirmShown = false;\n                this.modalCreate.open();\n                this._isLoading = false;\n                return;\n                });\n              }\n    \n            });\n          }\n        }\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Como se puede observar, cuando se comprueba si se ha introducido todos los datos bien, dicho modal estar\u00E1 declarado en ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " el html como se mostrar\u00E1 a continuaci\u00F3n. Se le asignar\u00E1 un nombre y con la acci\u00F3n onClickConfirn llamar\u00E1 al boton save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " en donde se aplicar\u00E1 todo el codio anteriormente mostrado. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\n        <app-modal-confirmation-message \n          #modalCreateConfirm\n          (onClickConfirm)=\"onBtnSave($event)\">\n          <h3>Error</h3>\n          <p> *ngFor =\"let m of mensaje\">{{m} }</p>\n          </app-modal-confirmation-message>\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Por ultimo, si se quiere eliminar un project, se ejcutar\u00E1 el siguiente codigo, que directamente llamar\u00E1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " al metodo de borrado que le proporciona el servicio y le pasar\u00E1 el id del item a borrar. Al borrarse se volver\u00E1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " a la ventana anterior.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "      onModalDeleteConfirmed(){\n        this.servicio.apiProjectDeleteDelete$Json({data:this._item.id}).subscribe((data) => {\n          this._isLoading = false;\n          this.goBack();\n          });\n    \n        this.modalDetails.close();\n        }\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Validaci\u00F3n y errores");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " A la hora de hacer una comprobaci\u00F3n de un campo, esa validaci\u00F3n se puede hacer tanto desde el cliente como desde el servidor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " En este ejemplo se ver\u00E1 como hacerlo desde el servidor. Cuando llamemos al servicio de creacion o de update, tbn incluiremos el ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, " apartado de errores de la siguiente forma. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "\n        }, error => {\n          this.crearMensajeError(error.errorData);    \n          this.modalCreate.btnConfirmShown = false;\n          this.modalCreate.open();\n          this._isLoading = false;\n        return;\n        }\n      );\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " Cuando salta un error de validaci\u00F3n, se llamar\u00E1 a ese metodo mas luego crear\u00E1 un modal de confirmaci\u00F3n que mostrar\u00E1 el tipo de error ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " producido. Este metodo recibe los errores del servidor y los guarda en un array de strings que posteriormente ser\u00E1n mostrados con el");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, " modal de confirmaci\u00F3n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "\n        crearMensajeError(errors : any) {\n          console.log(errors);\n          alert(\"a1\");\n          this.mensaje = [\"Error\"];\n          \n          if(errors[\"errors\"]){ \n            Object.keys(errors[\"errors\"]).forEach((key:string)=>{\n              alert(\"a2\");\n              if(key==\"dstart\"){\n                this.mensaje[this.mensaje.length] = \"La fecha de comienzo es obligatoria\"; \n                } else if(key == \"dend\"){\n                this.mensaje[this.mensaje.length] = \"La fecha de comienzo es obligatoria\";\n                } else if (key==\"Responsable.Name\" || key == \"responsableId\" ){\n                this.mensaje[this.mensaje.length] = \"Nombre del responsable no asignado\";\n                } else {\n                this.mensaje[this.mensaje.length] = errors[\"errors\"][key][0];\n                }\n              }); \n            } else { \n            alert(\"a3\");  \n            Object.keys(errors).forEach((keyErrors:string)=>{\n                this.mensaje[this.mensaje.length] = errors[keyErrors][0];\n                });\n            }\n        \n          }\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, " Con este metodo se le pasa el tipo de error y se filtra si es un error de validaci\u00F3n desde el servidor sin pasar por el controller");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " o si es un error que si pasa por el controlador y se comprueba ah\u00ED. Como los errores almacenan object, se va a recoger la key perteneciente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " a cada nombre que se le ha asignado a ese error.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, " En ambos casos, se almacenar\u00E1 el mensaje de error en el array para luego pasarselo al modal para que este recorra esta lista");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " mostrando los errores. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsDetailsComponent_p_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r23);
} }
const _c7 = function () { return ["fas", "user-circle"]; };
const _c8 = function () { return ["fas", "calendar-day"]; };
class ProjectsDetailsComponent extends ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DestroySubscriptions"] {
    constructor(cdRef, router, aRoute, translate, servicio, employes, datepipe, projectComponent) {
        super();
        this.cdRef = cdRef;
        this.router = router;
        this.aRoute = aRoute;
        this.translate = translate;
        this.servicio = servicio;
        this.employes = employes;
        this.datepipe = datepipe;
        this.projectComponent = projectComponent;
        // inicialización vacía
        this._item = {
            id: 0,
            name: "",
            priorityType: 0,
            responsable: { id: 0, name: "", surname: "a" },
            responsableId: 0,
            dend: "",
            dstart: ""
        };
        this._itemErrors = {};
        this._isLoading = true;
        this.dstart = moment__WEBPACK_IMPORTED_MODULE_5__().toDate();
        this.dend = moment__WEBPACK_IMPORTED_MODULE_5__().add(1, 'month').toDate();
        //para saber si es nuevo o no
        this.esNuevoItem = false;
        //para dropbox
        this.responsables = [];
        this.listaPriority = [];
        //colapse
        this.isCollapsed = false;
        this.isDocumented = false;
        this.mensaje = [];
        this.employeeError = { id: 0, name: "", surname: "a" };
    }
    ngOnInit() {
        this.inicializaDropList();
        this.initListeners();
        this.initSelectPosition();
        this.initAutocomplete();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    initSelectPosition() {
        this.selectPostionGetterFn = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fromApi = yield this.servicio.apiProjectPrioritylistGet$Json({})
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .toPromise();
            return fromApi.map(dvalue => new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["LabelAndValueExtended"]().setData({
                label: dvalue.label,
                value: dvalue.value
            }));
        });
    }
    inicializaDropList() {
        if (this.responsables.length <= 0) {
            this.employes.apiEmployeesGetlistcompletaPost$Json().subscribe(data => {
                this.responsables = data.items;
            });
        }
        if (this.listaPriority.length <= 0) {
            this.servicio.apiProjectPrioritylistGet$Json().subscribe(data => {
                this.listaPriority = data;
            });
        }
    }
    onDatepicketValueChange($event, propertyName) {
        if (propertyName == "dstart" || propertyName == "dend") {
            src_app_shared_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__["FormUtilities"].onDatepicketValueChange(this, $event, propertyName, this.cdRef);
        }
        else {
            src_app_shared_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__["FormUtilities"].onDatepicketValueChange(this._item, $event, propertyName, this.cdRef);
        }
    }
    // autocomplete
    initAutocomplete() {
        this.autocompleteResponsableGetterFn = (filter) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const area = yield this.employes.apiEmployeesGetlistcombolistGet$Json({ filtro: filter })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).toPromise();
            return area
                .map((v) => new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["LabelAndValueExtended"]().setData({ label: v.name, value: v.id, extraData: v.surname }));
        });
    }
    initListeners() {
        this.initARouteListeners();
    }
    initARouteListeners() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const parentS = this.aRoute.parent.url.subscribe((parentUrl) => {
                if (parentUrl[0] == null || !parentUrl[0].path) {
                    this.goBack();
                    return;
                }
                //comprueba por qué ruta ha venido, si es por nueva, se indicará poniendo el boolean a true
                const childS = this.aRoute.paramMap.subscribe((data) => {
                    const id = data.get('id');
                    if (parentUrl[0].path === 'new') {
                        if (id) {
                            this.goBack();
                            return;
                        }
                        console.log("Entra por new");
                        this.esNuevoItem = true;
                        this._isLoading = false;
                    }
                    else {
                        if (!id) {
                            this.goBack();
                            return;
                        }
                        this._isLoading = true;
                        //bloque de carga del servicio
                        //guardamos el id como numero
                        this.newId = parseInt(id);
                        //creamos un objeto de tipo Projecto y nos traemos ese projecto si es igual al id         
                        this.servicio.apiProjectGetbyidGet$Json({ clave: this.newId }).subscribe(result => {
                            this._item = result;
                            if (this._item == null) {
                                this.goBack();
                                return;
                            }
                            if (this.newId === result.id) {
                                this.dstart = new Date(result.dstart);
                                this.dend = new Date(result.dend);
                                this.responsableSelected = this._item.responsableId;
                                this._isLoading = false;
                            }
                        });
                    }
                });
                this.subs.push(childS);
            });
            this.subs.push(parentS);
        });
    }
    function() {
        this.isCollapsed = !this.isCollapsed;
    }
    //EVENTO DE CLIC
    /*async onBtnSave(ev: MouseEvent) {
      this._isLoading = true;
  
      //guarda el formato fecha correctamente
      if (this.dstart && this.dstart != undefined) {
        this._item.dstart = this.dstart.getFullYear() + "-" + (this.dstart.getMonth() + 1) + "-" + this.dstart.getDate();
      } else {
        this._item.dstart = "";
      }
  
      if (this.dend && this.dend != undefined) {
        this._item.dend = this.dend.getFullYear() + "-" + (this.dend.getMonth() + 1) + "-" + this.dend.getDate();
      } else {
        this._item.dend = "";
      }
  
  
      //comprueba que el responsable exista, que no sea nulo, que el nombre este introducido, como la fecha
      /*!this.responsables.find(element => element.name == this.employeeError.name)||
      !this.responsables.find(element => element.name == this._item.responsable.name)||
      var isValid = false;
      this.mensaje = [];
      this._item.responsableId = this.responsableSelected;
      if (this._item.responsableId == undefined || this._item.responsableId == null || this._item.responsableId <= 0) {
        this.modalCreate.btnConfirmShown = false;
        this.mensaje.push("Empleado no encontrado o no existe");
        this.modalCreate.open();
        this._isLoading = false;
        return;
      } else {
        this.employes.apiEmployeesGetbyidGet$Json({ id: this.responsableSelected }).subscribe(data => {
          this.employeeError = data;
          if (this.employeeError.id <= 0 ||
            !this.responsables.find(element => element.name == this.employeeError.name) ||
            !this.responsables.find(element => element.name == this._item.responsable.name) ||
            this._item.name.length <= 0 || this._item.dend.length <= 0 || this._item.dstart.length <= 0) {
  
            this.modalCreate.btnConfirmShown = false;
            this.mensaje.push("Empleado no encontrado o no existe");
            this.modalCreate.open();
            this._isLoading = false;
            isValid = true;
          }
  
  
          //comprueba si es nuevo o son los detalles de uno
          if (this.esNuevoItem && !isValid) {
            console.log("Entra en nuevo");
            this.servicio.apiProjectInsertPost$Json({ body: this._item, commit: true }).subscribe(data => {
              this._isLoading = false
              this.contador();
  
            }, error => {
              this.crearMensajeError(error.errorData);
              this.modalCreate.btnConfirmShown = false;
              this.modalCreate.open();
              this._isLoading = false;
              return;
            }
            );
  
          } else if (!this.esNuevoItem && !isValid) {
            console.log("Entra en update");
            this.servicio.apiProjectUpdatePost$Json({ body: this._item }).subscribe(data => {
              this._isLoading = false
              this.contador();
  
            }, error => {
              this.crearMensajeError(error.errorData);
              this.modalCreate.btnConfirmShown = false;
              this.modalCreate.open();
              this._isLoading = false;
              return;
            });
          }
  
        });
      }
  
    }*/
    matrizFunction() {
        //prueba de matriz bidimensional
        var matriz = new Array(10);
        var matriz2 = new Array(10);
        var matrizResult = new Array(10);
        //se crea la matriz añadiendo por cada elemento de la matriz, un nuevo array
        for (var o = 0; o < 10; o++) {
            matriz[o] = new Array(10);
            matriz2[o] = new Array(10);
            matrizResult[o] = new Array(10);
        }
        //se rellenan los espacios de la matriz con numeros aleatorios entre el 10 y el 100
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                matriz[i][j] = Math.floor(Math.random() * (10 - 1)) + 1;
                matriz2[i][j] = Math.floor(Math.random() * (10 - 1)) + 1;
            }
        }
        //se crea un mensaje que mostrará los elementos correctamente
        var valorMasAlto = 0;
        var mensajete = "";
        for (var i = 0; i < 10; i++) {
            mensajete += "\n";
            for (var j = 0; j < 10; j++) {
                matrizResult[i][j] = this.factorial(matriz[i][j] * matriz2[i][j]);
                if (valorMasAlto < matrizResult[i][j]) {
                    valorMasAlto = matrizResult[i][j];
                }
                mensajete = mensajete + ("{" + (matrizResult[i][j]).toString() + "}");
            }
        }
        console.log(mensajete);
        console.log("El numero mas alto es " + valorMasAlto);
    }
    factorial(n) {
        var total = 1;
        for (var i = 1; i <= n; i++) {
            total = total * i;
        }
        return total;
    }
    //EVENTO DE CLIC
    onBtnSave(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._isLoading = true;
            this.matrizFunction();
            //guarda el formato fecha correctamente
            if (this.dstart && this.dstart != undefined) {
                this._item.dstart = this.dstart.getFullYear() + "-" + (this.dstart.getMonth() + 1) + "-" + this.dstart.getDate();
            }
            else {
                this._item.dstart = "";
            }
            if (this.dend && this.dend != undefined) {
                this._item.dend = this.dend.getFullYear() + "-" + (this.dend.getMonth() + 1) + "-" + this.dend.getDate();
            }
            else {
                this._item.dend = "";
            }
            //comprueba que el responsable exista, que no sea nulo, que el nombre este introducido, como la fecha
            this.mensaje = [];
            this._item.responsableId = this.responsableSelected;
            if (this._item.responsableId == undefined || this._item.responsableId == null || this._item.responsableId <= 0) {
                this.modalCreate.btnConfirmShown = false;
                this.mensaje.push("Empleado no encontrado o no existe");
                this.modalCreate.open();
                this._isLoading = false;
                return;
            }
            this.employeeError = yield this.employes.apiEmployeesGetbyidGet$Json({ id: this.responsableSelected }).toPromise();
            if (this.employeeError == null || this.employeeError.id <= 0 ||
                !this.responsables.find(element => element.name == this.employeeError.name) ||
                !this.responsables.find(element => element.name == this._item.responsable.name)) {
                this.modalCreate.btnConfirmShown = false;
                this.mensaje.push("Empleado no encontrado o no existe");
                this.modalCreate.open();
                this._isLoading = false;
                return;
            }
            //comprueba si es nuevo o son los detalles de uno
            if (this.esNuevoItem) {
                console.log("Entra en nuevo");
                this.servicio.apiProjectInsertPost$Json({ body: this._item, commit: true }).subscribe(data => {
                    this._isLoading = false;
                    this.contador();
                }, error => {
                    this.crearMensajeError(error.errorData);
                    this.modalCreate.btnConfirmShown = false;
                    this.modalCreate.open();
                    this._isLoading = false;
                    return;
                });
            }
            else {
                console.log("Entra en update");
                this.servicio.apiProjectUpdatePost$Json({ body: this._item }).subscribe(data => {
                    this._isLoading = false;
                    this.contador();
                }, error => {
                    this.crearMensajeError(error.errorData);
                    this.modalCreate.btnConfirmShown = false;
                    this.modalCreate.open();
                    this._isLoading = false;
                    return;
                });
            }
            ;
        });
    }
    // Recibe los errores del servidor y los guarda en un array de strings
    crearMensajeError(errors) {
        console.log(errors);
        if (errors["errors"]) { // Errores de validación en el servidor. No llega al controller
            Object.keys(errors["errors"]).forEach((key) => {
                if (key == "dstart") {
                    this.mensaje[this.mensaje.length] = "La fecha de comienzo es obligatoria";
                }
                else if (key == "dend") {
                    this.mensaje[this.mensaje.length] = "La fecha de finalización es obligatoria";
                }
                else if (key == "Responsable.Name" || key == "responsableId") {
                    this.mensaje[this.mensaje.length] = "Nombre del responsable no asignado";
                }
                else {
                    this.mensaje[this.mensaje.length] = errors["errors"][key][0];
                }
            });
        }
        else { // Errores de validación en el servidor. LLega al controler
            Object.keys(errors).forEach((keyErrors) => {
                this.mensaje[this.mensaje.length] = errors[keyErrors][0];
            });
        }
    }
    contador() {
        setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['/empleados/project/details', this._item.id]);
            this._isLoading = false;
            this.goBack();
        }), 3000);
    }
    onModalDeleteConfirmed() {
        this.servicio.apiProjectDeleteDelete$Json({ data: this._item.id }).subscribe((data) => {
            this._isLoading = false;
            this.goBack();
        });
        this.modalDetails.close();
    }
    onBtnDelete(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.modalDetails.open();
        });
    }
    goBack() {
        this.router.navigate(['/empleados/project']);
    }
}
ProjectsDetailsComponent.ɵfac = function ProjectsDetailsComponent_Factory(t) { return new (t || ProjectsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_8__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_8__["EmployeesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"])); };
ProjectsDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectsDetailsComponent, selectors: [["app-projects-details"]], viewQuery: function ProjectsDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalDetails = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalCreate = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 80, vars: 78, consts: [["class", "section-title my-4", 4, "ngIf"], ["autocomplete", "off", 3, "ngSubmit"], [1, "form-row"], [1, "col", "form-group"], ["for", "Name", 1, "text-nowrap", 3, "tooltip"], ["lblName", ""], [3, "icon"], ["type", "text", "autocomplete", "off", 1, "form-control", "form-control-sm", 3, "id", "name", "ngModel", "disabled", "required", "ngModelChange"], [1, "invalid-feedback", "d-block", 3, "labels"], [3, "id", "label", "tooltipContent", "getterFn", "selected", "filter", "debounceTimeMs", "selectedChange", "filterChange"], ["for", "Priority", 1, "text-nowrap", 3, "tooltip"], ["lblPriority", ""], [1, "form-control", "form-control-sm", 3, "id", "name", "disabled", "ngModel", "required", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-row", "pb-5"], [3, "tooltip"], ["lblDatetimeStart", ""], [1, "input-group", "input-group-sm"], ["type", "text", "placeholder", "Datepicker", "bsDatepicker", "", 1, "form-control", 3, "id", "name", "bsValue", "bsValueChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "disabled", "click"], ["lblDatetimeEnd", ""], [1, "row", "footer-formbuttons", "position-fixed", "w-100"], ["class", "col text-right", 4, "ngIf"], ["type", "button", 1, "btn-primary", 3, "click"], [4, "ngIf"], ["class", "col form-group", 4, "ngIf"], [3, "onClickConfirm"], ["modalDeleteConfirm", ""], ["modalCreateConfirm", ""], [4, "ngFor", "ngForOf"], [1, "section-title", "my-4"], [3, "value"], [1, "col", "text-right"], ["type", "button", "class", "btn btn-secondary mr-1", 3, "routerLink", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "mx-1", 3, "disabled"], ["type", "button", "class", "btn btn-danger ml-1", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", "mr-1", 3, "routerLink"], [3, "icon", "spin"], ["type", "button", 1, "btn", "btn-danger", "ml-1", 3, "click"], ["myname", ""], [3, "id", "label", "tooltipContent", "getterFn", "selected", "debounceTimeMs", "selectedChange"]], template: function ProjectsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProjectsDetailsComponent_h2_0_Template, 3, 3, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectsDetailsComponent_h2_1_Template, 3, 3, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProjectsDetailsComponent_Template_form_ngSubmit_2_listener($event) { return ctx.onBtnSave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProjectsDetailsComponent_Template_input_ngModelChange_11_listener($event) { return ctx._item.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-array-translator", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ax-bs-form-autocomplete", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedChange", function ProjectsDetailsComponent_Template_ax_bs_form_autocomplete_selectedChange_14_listener($event) { return ctx.responsableSelected = $event; })("filterChange", function ProjectsDetailsComponent_Template_ax_bs_form_autocomplete_filterChange_14_listener($event) { return ctx._item.responsable.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProjectsDetailsComponent_Template_select_ngModelChange_24_listener($event) { return ctx._item.priorityType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ProjectsDetailsComponent_option_25_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-array-translator", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("bsValueChange", function ProjectsDetailsComponent_Template_input_bsValueChange_36_listener($event) { return ctx.onDatepicketValueChange($event, "dstart"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsDetailsComponent_Template_button_click_38_listener() { return ctx.onDatepicketValueChange(null, "dstart"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "app-array-translator", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 15, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("bsValueChange", function ProjectsDetailsComponent_Template_input_bsValueChange_49_listener($event) { return ctx.onDatepicketValueChange($event, "dend"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsDetailsComponent_Template_button_click_51_listener() { return ctx.onDatepicketValueChange(null, "dend"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "app-array-translator", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, ProjectsDetailsComponent_div_56_Template, 6, 5, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsDetailsComponent_Template_button_click_58_listener() { return ctx.function(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Mostrar variaci\u00F3n de priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, ProjectsDetailsComponent_div_61_Template, 35, 6, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsDetailsComponent_Template_button_click_64_listener() { return ctx.isDocumented = !ctx.isDocumented; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Mostrar Documentaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, ProjectsDetailsComponent_div_66_Template, 114, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\n\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "app-modal-confirmation-message", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClickConfirm", function ProjectsDetailsComponent_Template_app_modal_confirmation_message_onClickConfirm_69_listener() { return ctx.onModalDeleteConfirmed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\u00BFDesea eliminar este proyecto?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "app-modal-confirmation-message", 27, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClickConfirm", function ProjectsDetailsComponent_Template_app_modal_confirmation_message_onClickConfirm_75_listener($event) { return ctx.onBtnSave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, ProjectsDetailsComponent_p_79_Template, 2, 1, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.esNuevoItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.esNuevoItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 52, "PAGE.PROJECT.DETAILS.TOOLTIP.NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](72, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 54, "PAGE.PROJECT.DETAILS.LABEL.NAME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", _r2.getAttribute("for"))("name", _r2.getAttribute("for"))("ngModel", ctx._item.name)("disabled", ctx._isLoading)("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("labels", ctx._itemErrors[_r2.getAttribute("for")]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "controlautocomplete")("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 56, "PAGE.PROJECT.DETAILS.LABEL.RESPONSABLEID"))("tooltipContent", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 58, "PAGE.PROJECT.DETAILS.TOOLTIP.RESPONSABLEID"))("getterFn", ctx.autocompleteResponsableGetterFn)("selected", ctx.responsableSelected)("filter", ctx._item.responsable.name)("debounceTimeMs", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 60, "PAGE.PROJECT.DETAILS.TOOLTIP.PRIORITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](73, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 62, "PAGE.PROJECT.DETAILS.LABEL.PRIORITY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", _r3.getAttribute("for"))("name", _r3.getAttribute("for"))("disabled", ctx._isLoading)("ngModel", ctx._item.priorityType)("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listaPriority);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("labels", ctx._itemErrors[_r3.getAttribute("for")]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 64, "PAGE.PROJECT.DETAILS.TOOLTIP.DATETIMESTART"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", "Post.DatetimeStart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](74, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 66, "PAGE.PROJECT.DETAILS.LABEL.DATETIMESTART"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", _r5.getAttribute("for"))("name", _r5.getAttribute("for"))("bsValue", ctx.dstart);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.dstart == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](75, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("labels", ctx._itemErrors[_r5.getAttribute("for")]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 68, "PAGE.PROJECT.DETAILS.TOOLTIP.DATETIMEEND"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", "Post.DatetimeEnd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](76, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 70, "PAGE.PROJECT.DETAILS.LABEL.DATETIMEEND"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", _r6.getAttribute("for"))("name", _r6.getAttribute("for"))("bsValue", ctx.dend);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.dend == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](77, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("labels", ctx._itemErrors[_r6.getAttribute("for")]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._item);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDocumented);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.mensaje);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _shared_components_array_translator_array_translator_component__WEBPACK_IMPORTED_MODULE_14__["ArrayTranslatorComponent"], ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["BsFormAutocompleteComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerDirective"], _shared_components_modals_modal_confirmation_message_modal_confirmation_message_component__WEBPACK_IMPORTED_MODULE_16__["ModalConfirmationMessageComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["BsFormSelectComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vZW1wbGVhZG9zL3Byb2plY3RzL3Byb2plY3RzLWRldGFpbHMvcHJvamVjdHMtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectsDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-projects-details',
                templateUrl: './projects-details.component.html',
                styleUrls: ['./projects-details.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_8__["ProjectService"] }, { type: src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_8__["EmployeesService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] }, { type: _projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"] }]; }, { modalDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalDeleteConfirm']
        }], modalCreate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalCreateConfirm']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=projects-details-projects-details-module.js.map