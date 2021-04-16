(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0YDA":
/*!**************************************!*\
  !*** ./src/app/shared/api/models.ts ***!
  \**************************************/
/*! exports provided: PolicyMenu, CategoryPolicies, PostPolicies, RoleManagementPolicies, UserManagementPolicies, ZityEntityPolicies, PriorityEnum, PositionEnum, FilterOperator, FilterDbType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_policy_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/policy-menu */ "Q2eR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolicyMenu", function() { return _models_policy_menu__WEBPACK_IMPORTED_MODULE_0__["PolicyMenu"]; });

/* harmony import */ var _models_category_policies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/category-policies */ "H9MU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryPolicies", function() { return _models_category_policies__WEBPACK_IMPORTED_MODULE_1__["CategoryPolicies"]; });

/* harmony import */ var _models_post_policies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/post-policies */ "Z3jG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostPolicies", function() { return _models_post_policies__WEBPACK_IMPORTED_MODULE_2__["PostPolicies"]; });

/* harmony import */ var _models_role_management_policies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/role-management-policies */ "gqu1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoleManagementPolicies", function() { return _models_role_management_policies__WEBPACK_IMPORTED_MODULE_3__["RoleManagementPolicies"]; });

/* harmony import */ var _models_user_management_policies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/user-management-policies */ "OSGV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserManagementPolicies", function() { return _models_user_management_policies__WEBPACK_IMPORTED_MODULE_4__["UserManagementPolicies"]; });

/* harmony import */ var _models_zity_entity_policies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/zity-entity-policies */ "Yx2t");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZityEntityPolicies", function() { return _models_zity_entity_policies__WEBPACK_IMPORTED_MODULE_5__["ZityEntityPolicies"]; });

/* harmony import */ var _models_priority_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/priority-enum */ "tY7S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PriorityEnum", function() { return _models_priority_enum__WEBPACK_IMPORTED_MODULE_6__["PriorityEnum"]; });

/* harmony import */ var _models_position_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/position-enum */ "RrLU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PositionEnum", function() { return _models_position_enum__WEBPACK_IMPORTED_MODULE_7__["PositionEnum"]; });

/* harmony import */ var _models_filter_operator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/filter-operator */ "K7Id");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterOperator", function() { return _models_filter_operator__WEBPACK_IMPORTED_MODULE_8__["FilterOperator"]; });

/* harmony import */ var _models_filter_db_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/filter-db-type */ "bwiT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterDbType", function() { return _models_filter_db_type__WEBPACK_IMPORTED_MODULE_9__["FilterDbType"]; });













/***/ }),

/***/ "H9MU":
/*!********************************************************!*\
  !*** ./src/app/shared/api/models/category-policies.ts ***!
  \********************************************************/
/*! exports provided: CategoryPolicies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPolicies", function() { return CategoryPolicies; });
/* tslint:disable */
var CategoryPolicies;
(function (CategoryPolicies) {
    CategoryPolicies["CategoryDetailView"] = "CategoryDetailView";
    CategoryPolicies["CategoryListView"] = "CategoryListView";
    CategoryPolicies["CategoryEdit"] = "CategoryEdit";
    CategoryPolicies["CategoryDelete"] = "CategoryDelete";
})(CategoryPolicies || (CategoryPolicies = {}));


/***/ }),

/***/ "Hxe5":
/*!****************************************************************************!*\
  !*** ./src/app/shared/pipes/decimal-to-string/decimal-to-string.module.ts ***!
  \****************************************************************************/
/*! exports provided: DecimalToStringModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecimalToStringModule", function() { return DecimalToStringModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _decimal_to_string_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decimal-to-string.pipe */ "Myb+");
/* harmony import */ var _replace_replace_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../replace/replace.pipe */ "bUuM");




class DecimalToStringModule {
}
DecimalToStringModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DecimalToStringModule });
DecimalToStringModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DecimalToStringModule_Factory(t) { return new (t || DecimalToStringModule)(); }, providers: [_replace_replace_pipe__WEBPACK_IMPORTED_MODULE_2__["ReplacePipe"]], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DecimalToStringModule, { declarations: [_decimal_to_string_pipe__WEBPACK_IMPORTED_MODULE_1__["DecimalToStringPipe"]], exports: [_decimal_to_string_pipe__WEBPACK_IMPORTED_MODULE_1__["DecimalToStringPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DecimalToStringModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_decimal_to_string_pipe__WEBPACK_IMPORTED_MODULE_1__["DecimalToStringPipe"]],
                exports: [_decimal_to_string_pipe__WEBPACK_IMPORTED_MODULE_1__["DecimalToStringPipe"]],
                imports: [],
                providers: [_replace_replace_pipe__WEBPACK_IMPORTED_MODULE_2__["ReplacePipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "K7Id":
/*!******************************************************!*\
  !*** ./src/app/shared/api/models/filter-operator.ts ***!
  \******************************************************/
/*! exports provided: FilterOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOperator", function() { return FilterOperator; });
/* tslint:disable */
var FilterOperator;
(function (FilterOperator) {
    FilterOperator["Eq"] = "Eq";
    FilterOperator["Ne"] = "Ne";
    FilterOperator["EqualOrNotEqual"] = "EqualOrNotEqual";
    FilterOperator["Lt"] = "Lt";
    FilterOperator["Le"] = "Le";
    FilterOperator["Gt"] = "Gt";
    FilterOperator["Ge"] = "Ge";
    FilterOperator["Bw"] = "Bw";
    FilterOperator["Bn"] = "Bn";
    FilterOperator["In"] = "In";
    FilterOperator["Ni"] = "Ni";
    FilterOperator["Ew"] = "Ew";
    FilterOperator["En"] = "En";
    FilterOperator["Cn"] = "Cn";
    FilterOperator["Nc"] = "Nc";
    FilterOperator["Nu"] = "Nu";
    FilterOperator["Nn"] = "Nn";
    FilterOperator["NullOperators"] = "NullOperators";
    FilterOperator["NoTextOperators"] = "NoTextOperators";
    FilterOperator["TextOperators"] = "TextOperators";
})(FilterOperator || (FilterOperator = {}));


/***/ }),

/***/ "Myb+":
/*!**************************************************************************!*\
  !*** ./src/app/shared/pipes/decimal-to-string/decimal-to-string.pipe.ts ***!
  \**************************************************************************/
/*! exports provided: DecimalToStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecimalToStringPipe", function() { return DecimalToStringPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _replace_replace_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../replace/replace.pipe */ "bUuM");



// const SEPARATOR_DECIMAL = ',';
// const SEPARATOR_THOUSAND = '.';
class DecimalToStringPipe {
    constructor(replacePipe) {
        this.replacePipe = replacePipe;
    }
    transform(originalText, minDecimals, maxDecimals, textIfEmpty, divideThousands, separatorDecimal = ',', separatorThousand = '.') {
        if (textIfEmpty == null) {
            textIfEmpty = '-';
        }
        if (originalText == null) {
            originalText = '';
        }
        if (divideThousands == null) {
            divideThousands = false;
        }
        this.checkForErrors(separatorDecimal, separatorThousand);
        const isANumber = originalText != null && originalText.toString().length > 0 && !isNaN(originalText);
        if (isANumber) {
            let phStr = originalText.toString();
            let totalDecimals = this.getDecimals(phStr);
            if (maxDecimals == null) {
                maxDecimals = 5;
            }
            if (minDecimals == null) {
                minDecimals = 0;
            }
            if (minDecimals > maxDecimals) {
                maxDecimals = minDecimals;
            }
            if (totalDecimals > maxDecimals) {
                const phNum = parseFloat(phStr);
                phStr = phNum.toFixed(maxDecimals);
            }
            phStr = parseFloat(phStr).toString(); // Por si se queda como 490.9400, para quitar esos últimos 00
            totalDecimals = this.getDecimals(phStr);
            if (totalDecimals < minDecimals) {
                const phNum = parseFloat(phStr);
                phStr = phNum.toFixed(minDecimals);
            }
            phStr = this.replacePipe.transform(phStr, '.', separatorDecimal);
            if (divideThousands) {
                phStr = this.separateThousands(phStr, separatorDecimal, separatorThousand);
            }
            return phStr;
        }
        else {
            return textIfEmpty || '';
        }
    }
    /**
     * Gets how many decimal digits a stringified number has.
     * @param inputText The number to analyze, passed as a string: "13.12345".
     */
    getDecimals(inputText) {
        let totalDecimals = 0;
        let indexOfComma = inputText.indexOf(',');
        if (indexOfComma < 0) {
            indexOfComma = inputText.indexOf('.');
        }
        if (indexOfComma >= 0) {
            totalDecimals = inputText.substr(indexOfComma).length - 1;
        }
        return totalDecimals;
    }
    /**
     * Splits a string every 3 characters from the right (before a decimal)
     * with the given thousandSeparator.
     * @param originalString The string to be transformed
     */
    separateThousands(originalString, separatorDecimal, separatorThousand) {
        const hasNegative = originalString.indexOf('-') >= 0;
        const hasPositive = originalString.indexOf('+') >= 0;
        if (hasNegative) {
            originalString = originalString.replace('-', '');
        }
        if (hasPositive) {
            originalString = originalString.replace('+', '');
        }
        let decimalPosition = originalString.lastIndexOf(separatorDecimal);
        if (decimalPosition < 0) {
            decimalPosition = originalString.length;
        }
        let phStr = originalString.substring(0, decimalPosition);
        // Reverse string:
        const reversed = phStr.split('').reverse().join('');
        // Separate every 3 characters. If less, group them.
        const regex = new RegExp(separatorThousand + '{1,3}', 'g');
        const thousands = reversed.match(regex).map(r => r.split('').reverse().join(''));
        // const thousands = reversed.match(/.{1,3}/g).map(r => r.split('').reverse().join(''));
        // Reverse the string groups and build them into a single string.
        phStr = thousands.reverse().join(separatorThousand);
        // Concat decimals
        if (decimalPosition < (originalString.length - 1)) {
            phStr = phStr.concat(separatorDecimal, originalString.substr(decimalPosition + 1, originalString.length));
        }
        if (hasNegative) {
            phStr = `-${phStr}`;
        }
        if (hasPositive) {
            phStr = `+${phStr}`;
        }
        return phStr;
    }
    /**
     * Validates the input string and checks for possible errors.
     * Also checks for programming errors.
     * @param originalString The string to be evaluated
     */
    checkForErrors(separatorDecimal, separatorThousand) {
        // tslint:disable-next-line: triple-equals
        if (separatorDecimal == separatorThousand) {
            throw new Error(`Thousand separator [ ${separatorThousand} ] cannot be the same as decimal separator [ ${separatorDecimal} ]`);
        }
    }
}
DecimalToStringPipe.ɵfac = function DecimalToStringPipe_Factory(t) { return new (t || DecimalToStringPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_replace_replace_pipe__WEBPACK_IMPORTED_MODULE_1__["ReplacePipe"])); };
DecimalToStringPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "decimalToString", type: DecimalToStringPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DecimalToStringPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'decimalToString'
            }]
    }], function () { return [{ type: _replace_replace_pipe__WEBPACK_IMPORTED_MODULE_1__["ReplacePipe"] }]; }, null); })();


/***/ }),

/***/ "OSGV":
/*!***************************************************************!*\
  !*** ./src/app/shared/api/models/user-management-policies.ts ***!
  \***************************************************************/
/*! exports provided: UserManagementPolicies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementPolicies", function() { return UserManagementPolicies; });
/* tslint:disable */
var UserManagementPolicies;
(function (UserManagementPolicies) {
    UserManagementPolicies["UserManagementDetailView"] = "UserManagementDetailView";
    UserManagementPolicies["UserManagementRoleEdit"] = "UserManagementRoleEdit";
})(UserManagementPolicies || (UserManagementPolicies = {}));


/***/ }),

/***/ "RrLU":
/*!****************************************************!*\
  !*** ./src/app/shared/api/models/position-enum.ts ***!
  \****************************************************/
/*! exports provided: PositionEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionEnum", function() { return PositionEnum; });
/* tslint:disable */
var PositionEnum;
(function (PositionEnum) {
    PositionEnum["Chief"] = "Chief";
    PositionEnum["Manager"] = "Manager";
    PositionEnum["Supervisor"] = "Supervisor";
    PositionEnum["Developer"] = "Developer";
    PositionEnum["Tester"] = "Tester";
})(PositionEnum || (PositionEnum = {}));


/***/ }),

/***/ "Yx2t":
/*!***********************************************************!*\
  !*** ./src/app/shared/api/models/zity-entity-policies.ts ***!
  \***********************************************************/
/*! exports provided: ZityEntityPolicies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZityEntityPolicies", function() { return ZityEntityPolicies; });
/* tslint:disable */
var ZityEntityPolicies;
(function (ZityEntityPolicies) {
    ZityEntityPolicies["ZityEntityList"] = "ZityEntityList";
    ZityEntityPolicies["ZityEntityDetail"] = "ZityEntityDetail";
    ZityEntityPolicies["ZityEntityCreate"] = "ZityEntityCreate";
    ZityEntityPolicies["ZityEntityEdit"] = "ZityEntityEdit";
    ZityEntityPolicies["ZityEntityDelete"] = "ZityEntityDelete";
    ZityEntityPolicies["ZityEntityDetailOwner"] = "ZityEntityDetailOwner";
    ZityEntityPolicies["ZityEntityEditOwner"] = "ZityEntityEditOwner";
})(ZityEntityPolicies || (ZityEntityPolicies = {}));


/***/ }),

/***/ "Z3jG":
/*!****************************************************!*\
  !*** ./src/app/shared/api/models/post-policies.ts ***!
  \****************************************************/
/*! exports provided: PostPolicies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPolicies", function() { return PostPolicies; });
/* tslint:disable */
var PostPolicies;
(function (PostPolicies) {
    PostPolicies["PostList"] = "PostList";
    PostPolicies["PostDetail"] = "PostDetail";
    PostPolicies["PostCreate"] = "PostCreate";
    PostPolicies["PostEdit"] = "PostEdit";
    PostPolicies["PostDelete"] = "PostDelete";
    PostPolicies["PostListOwner"] = "PostListOwner";
    PostPolicies["PostDetailOwner"] = "PostDetailOwner";
    PostPolicies["PostCreateOwner"] = "PostCreateOwner";
    PostPolicies["PostEditOwner"] = "PostEditOwner";
    PostPolicies["PostDeleteOwner"] = "PostDeleteOwner";
})(PostPolicies || (PostPolicies = {}));


/***/ }),

/***/ "bUuM":
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/replace/replace.pipe.ts ***!
  \******************************************************/
/*! exports provided: ReplacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacePipe", function() { return ReplacePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class ReplacePipe {
    transform(originalText, find, replaceAs) {
        if (originalText == null) {
            return originalText;
        }
        let asString = originalText.toString();
        if (asString.length === 0 || asString.indexOf(find) < 0) {
            return originalText;
        }
        asString = asString.replace(find, replaceAs);
        return asString;
    }
}
ReplacePipe.ɵfac = function ReplacePipe_Factory(t) { return new (t || ReplacePipe)(); };
ReplacePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "replace", type: ReplacePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplacePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'replace'
            }]
    }], null, null); })();


/***/ }),

/***/ "bwiT":
/*!*****************************************************!*\
  !*** ./src/app/shared/api/models/filter-db-type.ts ***!
  \*****************************************************/
/*! exports provided: FilterDbType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDbType", function() { return FilterDbType; });
/* tslint:disable */
var FilterDbType;
(function (FilterDbType) {
    FilterDbType["Literal"] = "Literal";
    FilterDbType["String"] = "String";
    FilterDbType["DateTime"] = "DateTime";
    FilterDbType["Guid"] = "Guid";
})(FilterDbType || (FilterDbType = {}));


/***/ }),

/***/ "gqu1":
/*!***************************************************************!*\
  !*** ./src/app/shared/api/models/role-management-policies.ts ***!
  \***************************************************************/
/*! exports provided: RoleManagementPolicies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementPolicies", function() { return RoleManagementPolicies; });
/* tslint:disable */
var RoleManagementPolicies;
(function (RoleManagementPolicies) {
    RoleManagementPolicies["RoleManagementDetailView"] = "RoleManagementDetailView";
    RoleManagementPolicies["RolManagementCreate"] = "RolManagementCreate";
    RoleManagementPolicies["RolManagementEdit"] = "RolManagementEdit";
    RoleManagementPolicies["RolManagementDelete"] = "RolManagementDelete";
})(RoleManagementPolicies || (RoleManagementPolicies = {}));


/***/ }),

/***/ "tY7S":
/*!****************************************************!*\
  !*** ./src/app/shared/api/models/priority-enum.ts ***!
  \****************************************************/
/*! exports provided: PriorityEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriorityEnum", function() { return PriorityEnum; });
/* tslint:disable */
var PriorityEnum;
(function (PriorityEnum) {
    PriorityEnum["Low"] = "Low";
    PriorityEnum["Medium"] = "Medium";
    PriorityEnum["High"] = "High";
})(PriorityEnum || (PriorityEnum = {}));


/***/ })

}]);
//# sourceMappingURL=common.js.map