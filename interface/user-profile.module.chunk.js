webpackJsonp(["user-profile.module"],{

/***/ "../../../../../src/app/pages/user/profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  background-color: #fff;\n  padding: 1em;\n}\n\nmat-form-field {\n  width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user/profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_role_service__ = __webpack_require__("../../../../../src/app/shared/services/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_records_user_record__ = __webpack_require__("../../../../../src/app/shared/records/user.record.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_page_title_service__ = __webpack_require__("../../../../../src/app/shared/services/page-title.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProfileComponent = (function () {
    function UserProfileComponent(activeRoute, roleService, pageTitle, userRecord) {
        this.activeRoute = activeRoute;
        this.roleService = roleService;
        this.pageTitle = pageTitle;
        this.userRecord = userRecord;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roleService.getAll().subscribe(function (data) {
            _this.roles = data;
        });
        this.activeRoute.params.subscribe(function (params) {
            _this.userRecord.loadIn(params['id']).then(function (someData) {
                _this.initSomeData();
            });
        });
    };
    UserProfileComponent.prototype.initSomeData = function () {
        this.pageTitle.set('Edit user' + (" - " + this.userRecord.getAttribute('username')));
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/pages/user/profile/user-profile.components.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/user/profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_role_service__["a" /* RoleService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_page_title_service__["a" /* PageTitleService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_records_user_record__["a" /* UserRecord */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/user/profile/user-profile.components.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <form [formGroup]=\"userRecord.attributes\" class=\"mat-elevation-z8\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4>User</h4>\n            <mat-form-field>\n              <input matInput placeholder=\"Username\" formControlName=\"username\">\n              <mat-error *ngIf=\"userRecord.isAttributeNotValid('username')\">\n                {{userRecord.getAttributeError('username')}}\n              </mat-error>\n              <mat-hint align=\"end\">{{userRecord.attributes.get('username').value.length}} / {{userRecord.maxLength}}</mat-hint>\n            </mat-form-field>\n\n            <mat-form-field>\n              <input matInput placeholder=\"Password\" formControlName=\"password\">\n              <mat-error *ngIf=\"userRecord.isAttributeNotValid('password')\">\n                {{userRecord.getAttributeError('password')}}\n              </mat-error>\n              <mat-hint align=\"end\">{{userRecord.attributes.get('password').value.length}} / {{userRecord.maxLength}}</mat-hint>\n            </mat-form-field>\n\n            <div formGroupName=\"role\">\n              <mat-form-field>\n                <mat-select placeholder=\"Role\" formControlName=\"name\">\n                  <mat-option *ngFor=\"let role of roles\" value=\"{{role.name}}\">{{role.name}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <div formGroupName=\"profile\">\n              <h4>Contact data</h4>\n              <mat-form-field>\n                <input matInput placeholder=\"First name\" formControlName=\"first_name\">\n              </mat-form-field>\n\n              <mat-form-field>\n                <input matInput placeholder=\"Family name\" formControlName=\"family_name\">\n              </mat-form-field>\n\n              <mat-form-field>\n                <input matInput placeholder=\"Middle name\" formControlName=\"middle_name\">\n              </mat-form-field>\n\n              <mat-form-field>\n                <input matInput placeholder=\"Telephone number\" formControlName=\"telephone_number\">\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"col-md-12\">\n            <button mat-raised-button [disabled]=\"userRecord.isNotValid() || userRecord.isAttributeNotChanged()\" color=\"primary\" (click)=\"userRecord.save()\">Save</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/user/profile/user-profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_profile_component__ = __webpack_require__("../../../../../src/app/pages/user/profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_modules_material_module__ = __webpack_require__("../../../../../src/app/shared/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_records_user_record__ = __webpack_require__("../../../../../src/app/shared/records/user.record.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__user_profile_component__["a" /* UserProfileComponent */] },
];
var UserProfileModule = (function () {
    function UserProfileModule() {
    }
    UserProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__user_profile_component__["a" /* UserProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(ROUTES),
                __WEBPACK_IMPORTED_MODULE_5__shared_modules_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* ReactiveFormsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__shared_records_user_record__["a" /* UserRecord */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            ],
        })
    ], UserProfileModule);
    return UserProfileModule;
}());



/***/ })

});
//# sourceMappingURL=user-profile.module.chunk.js.map