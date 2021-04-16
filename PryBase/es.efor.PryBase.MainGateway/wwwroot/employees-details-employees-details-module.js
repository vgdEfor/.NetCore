(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employees-details-employees-details-module"],{

/***/ "4qcS":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/main/empleados/employees/employees-details/employees-details.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: EmployeesDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesDetailsModule", function() { return EmployeesDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _employees_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employees-details.component */ "JKft");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var src_app_shared_components_array_translator_array_translator_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/array-translator/array-translator.module */ "dqf9");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var src_app_shared_components_modals_modal_confirmation_message_modal_confirmation_message_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/modals/modal-confirmation-message/modal-confirmation-message.module */ "PALy");
/* harmony import */ var ax_toolbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ax-toolbox */ "4/SI");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "St1U");















const routes = [
    { path: '', component: _employees_details_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesDetailsComponent"] },
    { path: ':id', component: _employees_details_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesDetailsComponent"] },
];
class EmployeesDetailsModule {
}
EmployeesDetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmployeesDetailsModule });
EmployeesDetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmployeesDetailsModule_Factory(t) { return new (t || EmployeesDetailsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            src_app_shared_components_array_translator_array_translator_module__WEBPACK_IMPORTED_MODULE_8__["ArrayTranslatorModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"],
            src_app_shared_components_modals_modal_confirmation_message_modal_confirmation_message_module__WEBPACK_IMPORTED_MODULE_10__["ModalConfirmationMessageModule"],
            ax_toolbox__WEBPACK_IMPORTED_MODULE_11__["BsFormSelectModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__["CollapseModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeesDetailsModule, { declarations: [_employees_details_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        src_app_shared_components_array_translator_array_translator_module__WEBPACK_IMPORTED_MODULE_8__["ArrayTranslatorModule"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"],
        src_app_shared_components_modals_modal_confirmation_message_modal_confirmation_message_module__WEBPACK_IMPORTED_MODULE_10__["ModalConfirmationMessageModule"],
        ax_toolbox__WEBPACK_IMPORTED_MODULE_11__["BsFormSelectModule"],
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__["CollapseModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeesDetailsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_employees_details_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesDetailsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                    src_app_shared_components_array_translator_array_translator_module__WEBPACK_IMPORTED_MODULE_8__["ArrayTranslatorModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"],
                    src_app_shared_components_modals_modal_confirmation_message_modal_confirmation_message_module__WEBPACK_IMPORTED_MODULE_10__["ModalConfirmationMessageModule"],
                    ax_toolbox__WEBPACK_IMPORTED_MODULE_11__["BsFormSelectModule"],
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__["CollapseModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "JKft":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/main/empleados/employees/employees-details/employees-details.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EmployeesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesDetailsComponent", function() { return EmployeesDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ax_toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ax-toolbox */ "4/SI");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_api_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/api/models */ "0YDA");
/* harmony import */ var src_app_shared_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/utils/form-utils */ "4uUY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/api/services */ "EZPP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var _shared_components_array_translator_array_translator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/components/array-translator/array-translator.component */ "vxM4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "St1U");
/* harmony import */ var _shared_components_modals_modal_confirmation_message_modal_confirmation_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/modals/modal-confirmation-message/modal-confirmation-message.component */ "reQB");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");



















const _c0 = ["modalDeleteConfirm"];
const _c1 = ["modalEmpleadoConProyectos"];
const _c2 = ["modalDatosRequired"];
function EmployeesDetailsComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", position_r15.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](position_r15.label);
} }
const _c3 = function () { return ["fas", "calendar-day"]; };
const _c4 = function () { return ["fas", "trash"]; };
function EmployeesDetailsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("bsValueChange", function EmployeesDetailsComponent_div_32_Template_input_bsValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.onDatepicketValueChange($event, "datebirth"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeesDetailsComponent_div_32_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.onDatepicketValueChange(null, "datebirth"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-array-translator", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 30, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("bsValueChange", function EmployeesDetailsComponent_div_32_Template_input_bsValueChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.onDatepicketValueChange($event, "datestart"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeesDetailsComponent_div_32_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.onDatepicketValueChange(null, "datestart"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-array-translator", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 20, "PAGE.EMPLOYEES.DETAILS.LABEL.DATEBIRTH"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", "Post.DatetimeBirth");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 22, "PAGE.EMPLOYEES.DETAILS.LABEL.DATEBIRTH"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", _r16.getAttribute("for"))("name", _r16.getAttribute("for"))("bsValue", ctx_r4.datebirth);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.datebirth == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("labels", ctx_r4._itemErrors[_r16.getAttribute("for")]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 24, "PAGE.EMPLOYEES.DETAILS.LABEL.DATESTART"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", "Post.DatetimeStart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 26, "PAGE.EMPLOYEES.DETAILS.LABEL.DATESTART"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", _r17.getAttribute("for"))("name", _r17.getAttribute("for"))("bsValue", ctx_r4.datestart);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.datestart == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("labels", ctx_r4._itemErrors[_r17.getAttribute("for")]);
} }
function EmployeesDetailsComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ax-bs-form-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedChange", function EmployeesDetailsComponent_div_40_Template_ax_bs_form_select_selectedChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23._item.position = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "position")("label", "Posici\u00F3n")("tooltipContent", "Posici\u00F3n")("getterFn", ctx_r7.selectPostionGetterFn)("selected", ctx_r7._item.position)("debounceTimeMs", 200);
} }
const _c5 = function () { return ["/empleados/employees"]; };
const _c6 = function () { return ["fas", "chevron-left"]; };
function EmployeesDetailsComponent_div_42_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "GENERIC.BTN.GOTO.LIST"), " ");
} }
const _c7 = function () { return ["fas", "sync"]; };
function EmployeesDetailsComponent_div_42_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c7))("spin", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "GENERIC.LABEL.LOADING"), " ");
} }
const _c8 = function () { return ["fas", "save"]; };
function EmployeesDetailsComponent_div_42_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "GENERIC.BTN.SAVE"), " ");
} }
function EmployeesDetailsComponent_div_42_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeesDetailsComponent_div_42_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.onBtnDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "GENERIC.BTN.DELETE"), " ");
} }
function EmployeesDetailsComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeesDetailsComponent_div_42_button_1_Template, 4, 7, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EmployeesDetailsComponent_div_42_ng_container_3_Template, 4, 6, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EmployeesDetailsComponent_div_42_ng_container_4_Template, 4, 5, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EmployeesDetailsComponent_div_42_button_5_Template, 4, 5, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8._item.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r8._isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8._isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8._isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8._item.id);
} }
function EmployeesDetailsComponent_p_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r31);
} }
const _c9 = function () { return ["fas", "user-circle"]; };
class EmployeesDetailsComponent extends ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["DestroySubscriptions"] {
    constructor(router, aRoute, translate, employeesSV, cdRef) {
        super();
        this.router = router;
        this.aRoute = aRoute;
        this.translate = translate;
        this.employeesSV = employeesSV;
        this.cdRef = cdRef;
        this._item = {
            id: 0,
            name: "",
            surname: "",
            positionType: 0,
            position: src_app_shared_api_models__WEBPACK_IMPORTED_MODULE_4__["PositionEnum"].Chief,
            dbirth: "",
            dstart: ""
        };
        this._itemErrors = {};
        this._isLoading = true;
        this._isNewItem = false;
        this.listaPositions = [];
        this.mensaje = [];
        this.mostrarSelect = true;
        this.mostrarDoc = true;
    }
    ngOnInit() {
        if (this.listaPositions.length <= 0) {
            this.employeesSV.apiEmployeesPositionlistGet$Json().subscribe(data => {
                this.listaPositions = data;
            });
        }
        this.initSelectPosition();
        this.initListeners();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    onBtnSave(ev) {
        // GUardar
        this._isLoading = true;
        /*if (this._item.name.trim() == "" || this._item.surname.trim() == ""
        || !this.datebirth || this.datebirth === undefined
        || !this.datestart || this.datestart === undefined){
          this.modalDatosRequired.btnConfirmShown = false;
          this.modalDatosRequired.open();
          this._isLoading = false;
          return;
        }*/
        if (this.datebirth && this.datebirth != undefined) {
            this._item.dbirth = this.datebirth.getFullYear() + "-" + (this.datebirth.getMonth() + 1) + "-" + this.datebirth.getDate();
        }
        else {
            this._item.dbirth = "0000-00-00";
        }
        if (this.datestart && this.datestart != undefined) {
            this._item.dstart = this.datestart.getFullYear() + "-" + (this.datestart.getMonth() + 1) + "-" + this.datestart.getDate();
        }
        else {
            this._item.dstart = "0000-00-00";
        }
        if (this._isNewItem) {
            //console.log(this._item);
            this.employeesSV.apiEmployeesInsertPost$Json({ body: this._item }).subscribe((data) => {
                // console.log("Creado: " + data.id + " - " + data.name);
                this._isLoading = false;
                this.goBack();
            }, error => {
                console.log(error);
                this.crearMensajeError(error.errorData);
                this.modalDatosRequired.btnConfirmShown = false;
                this.modalDatosRequired.open();
                this._isLoading = false;
                return;
            });
        }
        else {
            this.employeesSV.apiEmployeesUpdatePost$Json({ body: this._item }).subscribe((data) => {
                // console.log("Actualizado: " + data.id + " - " + data.name);
                this._isLoading = false;
                this.goBack();
            }, error => {
                this.crearMensajeError(error.errorData);
                this.modalDatosRequired.btnConfirmShown = false;
                this.modalDatosRequired.open();
                this._isLoading = false;
                return;
            });
        }
    }
    // Recibe los errores del servidor y los guarda en un array de strings
    crearMensajeError(errors) {
        this.mensaje = ["Error"];
        if (errors["errors"]) { // Errores de validación en el servidor. No llega al controller
            Object.keys(errors["errors"]).forEach((key) => {
                if (key == "dbirth") {
                    this.mensaje[this.mensaje.length] = "The Birth date is required";
                }
                else if (key == "dstart") {
                    this.mensaje[this.mensaje.length] = "The Start date is required";
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
    onModalDeleteConfirmed() {
        this.employeesSV.apiEmployeesDeleteDelete$Json({ id: this._item.id }).subscribe((data) => {
            // console.log("Borrado: " + data.id + " - " + data.name);
            this._isLoading = false;
            this.goBack();
        });
        this.modalDetails.close();
    }
    onBtnDelete() {
        if (this._item.projects.length > 0) {
            this.modalEmpleadoConProyectos.btnConfirmShown = false;
            this.modalEmpleadoConProyectos.open();
        }
        else {
            this.modalDetails.open();
        }
    }
    onDatepicketValueChange($event, propertyName) {
        if (propertyName == "datebirth" || propertyName == "datestart") {
            src_app_shared_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["FormUtilities"].onDatepicketValueChange(this, $event, propertyName, this.cdRef);
        }
        else {
            src_app_shared_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["FormUtilities"].onDatepicketValueChange(this._item, $event, propertyName, this.cdRef);
        }
    }
    initSelectPosition() {
        this.selectPostionGetterFn = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fromApi = yield this.employeesSV.apiEmployeesPositionlistGet$Json({})
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .toPromise();
            return fromApi.map(dvalue => new ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["LabelAndValueExtended"]().setData({
                label: dvalue.label,
                value: dvalue.data
            }));
        });
    }
    initListeners() {
        this.initARouteListeners();
    }
    initARouteListeners() {
        const parentS = this.aRoute.parent.url.subscribe((parentUrl) => {
            // Illegal navigation
            if (parentUrl[0] == null || !parentUrl[0].path) {
                this.goBack();
                return;
            }
            const childS = this.aRoute.paramMap.subscribe((data) => {
                // New does not need ID.
                const id = data.get('id');
                if (parentUrl[0].path === 'new') {
                    if (id) {
                        this.goBack();
                        return;
                    }
                    this._isNewItem = true;
                    this._isLoading = false;
                }
                else {
                    if (!id) {
                        this.goBack();
                        return;
                    }
                    // Cargar empleado BD
                    this.employeesSV.apiEmployeesGetbyidGet$Json({ id: parseInt(id) }).subscribe((data) => {
                        this._item = data;
                        this._isLoading = true;
                        // 404
                        if (this._item == null) {
                            this.goBack();
                            return;
                        }
                        if (parseInt(id) === this._item.id) {
                            this.datebirth = new Date(this._item.dbirth);
                            this.datestart = new Date(this._item.dstart);
                            this._isLoading = false;
                        }
                    });
                }
            });
            this.subs.push(childS);
        });
        this.subs.push(parentS);
    }
    goBack() {
        this.router.navigate(['/empleados/employees']);
    }
}
EmployeesDetailsComponent.ɵfac = function EmployeesDetailsComponent_Factory(t) { return new (t || EmployeesDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_8__["EmployeesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
EmployeesDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmployeesDetailsComponent, selectors: [["app-employees-details"]], viewQuery: function EmployeesDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalDetails = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalEmpleadoConProyectos = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalDatosRequired = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 211, vars: 68, consts: [[1, "section-title", "my-4"], ["autocomplete", "off", 3, "ngSubmit"], [1, "form-row"], [1, "col", "form-group"], ["for", "Name", 1, "text-nowrap", 3, "tooltip"], ["lblName", ""], [3, "icon"], ["type", "text", "autocomplete", "off", 1, "form-control", "form-control-sm", 3, "id", "name", "ngModel", "disabled", "required", "ngModelChange"], [1, "invalid-feedback", "d-block", 3, "labels"], ["for", "Surname", 1, "text-nowrap", 3, "tooltip"], ["lblSurname", ""], ["for", "Position", 1, "text-nowrap", 3, "tooltip"], ["lblPosition", ""], [1, "form-control", "form-control-sm", 3, "id", "name", "disabled", "ngModel", "required", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-row pb-5", 4, "ngIf"], ["type", "button", 1, "btn-primary", 3, "click"], ["botonDocumentacion", ""], [3, "collapse", "isAnimated"], ["documentacion", ""], [1, "row", "footer-formbuttons", "position-fixed", "w-100"], ["class", "col text-right", 4, "ngIf"], [3, "onClickConfirm"], ["modalDeleteConfirm", ""], ["modalEmpleadoConProyectos", ""], ["modalDatosRequired", ""], [4, "ngFor", "ngForOf"], [1, "btn-primary", 3, "click"], [3, "value"], [1, "form-row", "pb-5"], [3, "tooltip"], ["lblDateBirth", ""], [1, "input-group", "input-group-sm"], ["type", "text", "placeholder", "Fecha nacimiento", "bsDatepicker", "", 1, "form-control", 3, "id", "name", "bsValue", "bsValueChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "disabled", "click"], ["lblDateStart", ""], ["type", "text", "placeholder", "Fecha inicio", "bsDatepicker", "", 1, "form-control", 3, "id", "name", "bsValue", "bsValueChange"], [3, "id", "label", "tooltipContent", "getterFn", "selected", "debounceTimeMs", "selectedChange"], [1, "col", "text-right"], ["type", "button", "class", "btn btn-secondary mr-1", 3, "routerLink", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "mx-1", 3, "disabled"], [4, "ngIf"], ["type", "button", "class", "btn btn-danger ml-1", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", "mr-1", 3, "routerLink"], [3, "icon", "spin"], ["type", "button", 1, "btn", "btn-danger", "ml-1", 3, "click"]], template: function EmployeesDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EmployeesDetailsComponent_Template_form_ngSubmit_3_listener($event) { return ctx.onBtnSave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmployeesDetailsComponent_Template_input_ngModelChange_12_listener($event) { return ctx._item.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-array-translator", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmployeesDetailsComponent_Template_input_ngModelChange_21_listener($event) { return ctx._item.surname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-array-translator", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmployeesDetailsComponent_Template_select_ngModelChange_30_listener($event) { return ctx._item.position = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, EmployeesDetailsComponent_option_31_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, EmployeesDetailsComponent_div_32_Template, 27, 32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeesDetailsComponent_Template_button_click_33_listener() { return ctx.mostrarSelect = !ctx.mostrarSelect; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Mostar select alternativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "M\u00E9todo alternantivo para el select de enums. Componente ax-bs-form-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, EmployeesDetailsComponent_div_40_Template, 3, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, EmployeesDetailsComponent_div_42_Template, 6, 5, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "app-modal-confirmation-message", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClickConfirm", function EmployeesDetailsComponent_Template_app_modal_confirmation_message_onClickConfirm_43_listener() { return ctx.onModalDeleteConfirmed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\u00BFDesea eliminar este empleado?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "app-modal-confirmation-message", null, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "No puedes borrar este empleado. Tiene proyectos asignados. Borra antes sus proyectos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "app-modal-confirmation-message", null, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, EmployeesDetailsComponent_p_59_Template, 2, 1, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 27, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeesDetailsComponent_Template_button_click_61_listener() { return ctx.mostrarDoc = !ctx.mostrarDoc; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Mostar documentaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "DOCUMENTACI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Para mostrar est\u00E1 p\u00E1gina comenzaremos creando un formulario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\n    <form (ngSubmit)=\"onBtnSave($event)\" autocomplete=\"off\"></form>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "En ngSubmit indicaremos el m\u00E9todo que se ejecutar\u00E1 al hacer el submit del formulario. Cada fila del formulario la incluiremos dentro de un div con la siguiente clase:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "\n    <div class=\"form-row\">\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Elementos del formulario");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Cada elemento del formulario lo incluiremos dentro de un div con la siguientes clases:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\n    <div class=\"col form-group\">\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Para mostrar cada elemento del formulario usaremos el siguiente c\u00F3digo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "\n- #lblName ser\u00E1 el id de la label del input");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "\n- for indicar\u00E1 a que input har\u00E1 referencia la label. Se establecer\u00E1 como id y name del input a trav\u00E9s de [id]=\"lblName.getAttribute('for')\" [name]=\"lblName.getAttribute('for')\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "\n- ngModel indicar\u00E1 la variable que modificar\u00E1 el input.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Fechas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "\nEn el caso de que el campo sea una fecha necesitaremos a\u00F1adir el siguiente c\u00F3digo adicional al input para\nconvertirlo en un datepicker\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "\n    class=\"form-control\"\n    bsDatepicker\n    [bsValue]=\"datebirth\"\n    (bsValueChange)=\"onDatepicketValueChange($event, 'datebirth')\">\n    <div class=\"input-group-append\">\n    <button class=\"btn btn-outline-danger\"\n        type=\"button\"\n        [disabled]=\"datebirth == null\"\n        (click)=\"onDatepicketValueChange(null, 'datebirth')\">\n    <fa-icon [icon]=\"['fas', 'trash']\"></fa-icon>\n    </button>\n    </div>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "- bsValue sustituir\u00E1 a ngModel\n- En bsValueChange indicaremos el m\u00E9todo que se ejecutar\u00E1 cuando cambie el valor de la fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Selects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "\nEn el caso del dropdown list usaremos el siguiente c\u00F3digo:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "\n    <select class=\"form-control form-control-sm\"\n    [id]=\"lblPosition.getAttribute('for')\" [name]=\"lblPosition.getAttribute('for')\"\n    [disabled]=\"_isLoading\"\n    [(ngModel)]=\"_item.position\"\n    [required]=\"true\">\n      <option  *ngFor=\"let position of listaPositions | keyvalue\" [value]=\"position.value.data\">{ {position.value.label}}</option>\n    </select>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Haremos un bucle para que muestre una opci\u00F3n para cada valor de la lista de enums. Para cargar los valores del enum usaremos el siguiente c\u00F3digo en el componente:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "\n    if(this.listaPositions.length <= 0){\n      this.employeeSV.apiEmployeesPositionlistGet$Json().subscribe(data =>{\n        this.listaPositions = data;\n      });\n    }\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Select - m\u00E9todo alternativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Usando el componente ax-bs-form-select tenemos una forma alternativa de mostrar los enums en el select.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "\n    <ax-bs-form-select\n      [id]=\"'position'\"\n      [label]=\"'Posici\u00F3n'\"\n      [tooltipContent]=\"'Posici\u00F3n'\"\n      [getterFn]=\"selectPostionGetterFn\"\n      [(selected)]=\"_item.position\"\n      [debounceTimeMs]=\"200\">\n    </ax-bs-form-select>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "- getterFn ser\u00E1 la variable que se encargue de recoger los datos de la api y cargarlos en el select.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "\n- selected ser\u00E1 la variable que modificar\u00E1 el componente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "\nPara cargar la lista usaremos el siguiente c\u00F3digo en el componente:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "\n    private initSelectPosition(){\n        this.selectPostionGetterFn = async ()=>{\n          const fromApi = await this.employeeSV.apiEmployeesPositionlistGet$Json({})\n          .pipe(first())\n          .toPromise();\n          return fromApi.map(dvalue => new LabelAndValueExtended<number>().setData( {\n            label: dvalue.label,\n            value: dvalue.data\n          }));\n        };\n    }\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "De esta forma cargaremos los datos de la api y los mapaearemos de la forma en la que el componente los necesita.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Guardar/Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Para mostrar los botones de Volver a lista/Guardar/Eliminar usaremos el siguinete c\u00F3digo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](154, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](155, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](156, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](157, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Para sacar una ventana modal usaremos el siguiente c\u00F3digo HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "\n    <app-modal-confirmation-message \n      #modalDeleteConfirm\n      (onClickConfirm)=\"onModalDeleteConfirmed()\">\n      <h3>Eliminar</h3>\n      <p>\u00BFDesea eliminar este empleado?</p>\n    </app-modal-confirmation-message>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "En el componente rescataremos el modal con esta variable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "\n    @ViewChild('modalDeleteConfirm') modalDetails:ModalConfirmationMessageComponent;\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "\nPara mostrar y cerrar el modal usaremos: this.modalDetails.open(); this.modalDetails.close(); Para guardar un empleado usaremos el siguiente c\u00F3digo:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "\n    onBtnSave(ev: MouseEvent): void {\n        console.log(\"GUARDANDO...\");\n        this._isLoading = true;\n\n        this._item.dbirth = this.datebirth.getFullYear() + \"-\" + (this.datebirth.getMonth()+1) + \"-\" + this.datebirth.getDate();\n        this._item.dstart = this.datestart.getFullYear() + \"-\" + (this.datestart.getMonth()+1) + \"-\" + this.datestart.getDate();\n\n        if (this._isNewItem){\n          console.log(this._item);\n          this.employeeSV.apiEmployeesInsertPost$Json({body:this._item}).subscribe((data) => {\n            console.log(\"Creado: \" + data.id + \" - \" + data.name);\n            this._isLoading = false;\n            this.goBack();\n          });\n        } else {\n          this.employeeSV.apiEmployeesUpdatePost$Json({body:this._item}).subscribe((data) => {\n            console.log(\"Actualizado: \" + data.id + \" - \" + data.name);\n            this._isLoading = false;\n            this.goBack();\n          });\n        }\n        \n    }\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Para eliminar un empleado usaremos el siguiente c\u00F3digo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "\n    onModalDeleteConfirmed(){\n      this.employeeSV.apiEmployeesDeleteDelete$Json({id:this._item.id}).subscribe((data) => {\n        console.log(\"Borrado: \" + data.id + \" - \" + data.name);\n        this._isLoading = false;\n        this.goBack();\n      });\n\n      this.modalDetails.close();\n    }\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Cargar el empleado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "A la hora de cargar los datos en el formulario primero tendremos que comprobar los datos de la ruta:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "\n    const parentS = this.aRoute.parent.url.subscribe((parentUrl) => {\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Si el valor de la ruta es nulo o vac\u00EDo, no ser\u00E1 una navegaci\u00F3n correcta. En caso contrario comprobaremos\nla ruta hija:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "\n    const childS = this.aRoute.paramMap.subscribe((data) => {\n        const id = data.get('id');\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Si el valor de la ruta es new, significar\u00E1 que estamos creado un empleado nuevo y no necesitamos cargar datos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "\n    if (parentUrl[0].path === 'new') {\n      if (id) {\n        this.goBack();\n        return;\n      }\n      this._isNewItem = true;\n      this._isLoading = false;\n    } \n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "En caso contrario comprobamos que el id introducido en la ruta exista y cargamos los datos en el formulario.\nEn el caso de las fechas ser\u00E1 necesario transformarlas a Date para que el datepicker las reconozca.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "\n    if (!id) {\n      this.goBack();\n      return;\n    }\n\n    this.employeeSV.apiEmployeesGetbyidGet$Json({id:parseInt(id)}).subscribe((data) => {\n        this._item = data;\n        this._isLoading = true;\n\n        // 404\n        if (this._item == null) {\n          this.goBack();\n          return;\n        }\n\n        if (parseInt(id) === this._item.id) {\n          this.datebirth = new Date(this._item.dbirth);\n          this.datestart = new Date(this._item.dstart);\n          this._isLoading = false;\n        }\n\n    });\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 41, "PAGE.EMPLOYEES.DETAILS.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 43, "PAGE.EMPLOYEES.DETAILS.LABEL.NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](65, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 45, "PAGE.EMPLOYEES.DETAILS.LABEL.NAME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", _r0.getAttribute("for"))("name", _r0.getAttribute("for"))("ngModel", ctx._item.name)("disabled", ctx._isLoading)("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("labels", ctx._itemErrors[_r0.getAttribute("for")]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 47, "PAGE.EMPLOYEES.DETAILS.LABEL.SURNAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](66, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 49, "PAGE.EMPLOYEES.DETAILS.LABEL.SURNAME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", _r1.getAttribute("for"))("name", _r1.getAttribute("for"))("ngModel", ctx._item.surname)("disabled", ctx._isLoading)("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("labels", ctx._itemErrors[_r1.getAttribute("for")]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 51, "PAGE.EMPLOYEES.DETAILS.LABEL.POSITION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](67, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 53, "PAGE.EMPLOYEES.DETAILS.LABEL.POSITION"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", _r2.getAttribute("for"))("name", _r2.getAttribute("for"))("disabled", ctx._isLoading)("ngModel", ctx._item.position)("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listaPositions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._item);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapse", ctx.mostrarSelect)("isAnimated", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._item);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._item);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.mensaje);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapse", ctx.mostrarDoc)("isAnimated", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n    <label #lblName for=\"Name\" [tooltip]=\"'PAGE.EMPLOYEES.DETAILS.LABEL.NAME' | translate \"\n            class=\"text-nowrap\">\n      <fa-icon [icon]=\"['fas', 'user-circle']\"></fa-icon>\n      ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](94, 55, "PAGE.EMPLOYEES.DETAILS.LABEL.NAME"), "\n    </label>\n    <input type=\"text\" autocomplete=\"off\" class=\"form-control form-control-sm\"\n            [id]=\"lblName.getAttribute('for')\" [name]=\"lblName.getAttribute('for')\"\n            [(ngModel)]=\"_item.name\"\n            [disabled]=\"_isLoading\"\n            [required]=\"true\">\n    <app-array-translator class=\"invalid-feedback d-block\"\n      [labels]=\"_itemErrors[lblName.getAttribute('for')]\"></app-array-translator>\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("\n      <div class=\"row footer-formbuttons position-fixed w-100\">\n      <div class=\"col text-right\" *ngIf=\"_item\">\n        \n        <button type=\"button\" *ngIf=\"_item.id\"\n                class=\"btn btn-secondary mr-1\"\n                [routerLink]=\"['/empleados/employees']\">\n          <fa-icon [icon]=\"['fas', 'chevron-left']\"></fa-icon>\n          ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](154, 57, "GENERIC.BTN.GOTO.LIST"), "\n        </button>\n\n        <button type=\"submit\" class=\"btn btn-primary mx-1\" [disabled]=\"_isLoading\">\n          <ng-container *ngIf=\"_isLoading\">\n            <fa-icon [icon]=\"['fas', 'sync']\" [spin]=\"true\"></fa-icon>\n            ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](155, 59, "GENERIC.LABEL.LOADING"), "\n          </ng-container>\n          <ng-container *ngIf=\"!_isLoading\">\n            <fa-icon [icon]=\"['fas', 'save']\"></fa-icon>\n            ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](156, 61, "GENERIC.BTN.SAVE"), "\n          </ng-container>\n        </button>\n\n        <button type=\"button\" *ngIf=\"_item.id\"\n                class=\"btn btn-danger ml-1\" (click)=\"onBtnDelete()\">\n          <fa-icon [icon]=\"['fas', 'trash']\"></fa-icon>\n          ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](157, 63, "GENERIC.BTN.DELETE"), "\n        </button>\n\n      </div>\n    </div>\n");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _shared_components_array_translator_array_translator_component__WEBPACK_IMPORTED_MODULE_12__["ArrayTranslatorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_14__["CollapseDirective"], _shared_components_modals_modal_confirmation_message_modal_confirmation_message_component__WEBPACK_IMPORTED_MODULE_15__["ModalConfirmationMessageComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsDatepickerDirective"], ax_toolbox__WEBPACK_IMPORTED_MODULE_2__["BsFormSelectComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vZW1wbGVhZG9zL2VtcGxveWVlcy9lbXBsb3llZXMtZGV0YWlscy9lbXBsb3llZXMtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmployeesDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-employees-details',
                templateUrl: './employees-details.component.html',
                styleUrls: ['./employees-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: src_app_shared_api_services__WEBPACK_IMPORTED_MODULE_8__["EmployeesService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { modalDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalDeleteConfirm']
        }], modalEmpleadoConProyectos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalEmpleadoConProyectos']
        }], modalDatosRequired: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalDatosRequired']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=employees-details-employees-details-module.js.map