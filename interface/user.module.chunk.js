webpackJsonp(["user.module"],{

/***/ "../../../../../src/app/pages/user/list/search-form/user-list-search-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  background-color: white;\n  padding: 1em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user/list/search-form/user-list-search-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-bottom: 1.5em;\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <form [formGroup]=\"form\" class=\"mat-elevation-z8\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field>\n              <input matInput placeholder=\"Username\" formControlName=\"username\">\n            </mat-form-field>\n\n            <mat-form-field>\n              <input matInput placeholder=\"First name\" formControlName=\"first_name\">\n            </mat-form-field>\n\n            <mat-form-field>\n              <input matInput placeholder=\"Family name\" formControlName=\"family_name\">\n            </mat-form-field>\n\n            <mat-form-field>\n              <input matInput placeholder=\"Telephone number\" formControlName=\"telephone_number\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <button mat-raised-button color=\"primary\" (click)=\"search()\">Search</button>\n            <button mat-raised-button color=\"warn\" (click)=\"reset()\">Reset</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/user/list/search-form/user-list-search-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListSearchFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListSearchFormComponent = (function () {
    function UserListSearchFormComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            first_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            family_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            telephone_number: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
        });
    }
    UserListSearchFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.form.patchValue(params);
        });
    };
    UserListSearchFormComponent.prototype.search = function () {
        this.router.navigate(['/user'], { queryParams: this.form.getRawValue() });
    };
    UserListSearchFormComponent.prototype.reset = function () {
        this.form.reset();
        this.router.navigate(['/user']);
    };
    UserListSearchFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-list-search-from',
            template: __webpack_require__("../../../../../src/app/pages/user/list/search-form/user-list-search-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/user/list/search-form/user-list-search-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UserListSearchFormComponent);
    return UserListSearchFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/user/list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-list-search-from></app-user-list-search-from>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"mat-elevation-z8\">\n        <mat-table #table [dataSource]=\"dataSource\">\n          <!-- Position Column -->\n          <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.id}} </mat-cell>\n          </ng-container>\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"photo\">\n            <mat-header-cell *matHeaderCellDef> Photo </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.profile.photo}} </mat-cell>\n          </ng-container>\n\n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"role\">\n            <mat-header-cell *matHeaderCellDef> Role </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.role.name}} </mat-cell>\n          </ng-container>\n\n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"login\">\n            <mat-header-cell *matHeaderCellDef> Login </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.username}} </mat-cell>\n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Full Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.profile.first_name}} </mat-cell>\n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"tel\">\n            <mat-header-cell *matHeaderCellDef> Telephone </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.profile.telephone_number | appTelephone}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <a mat-menu-item [routerLink]=\"[element.id]\">\n                  <mat-icon>account_circle</mat-icon>\n                  <span>{{element.username}} Profile</span>\n                </a>\n                <button mat-menu-item>\n                  <mat-icon>attach_money</mat-icon>\n                  <span>Payment</span>\n                </button>\n                <button mat-menu-item (click)=\"logOut()\">\n                  <mat-icon>exit_to_app</mat-icon>\n                  <span>Login as {{element.username}}</span>\n                </button>\n              </mat-menu>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/user/list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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





var UserListComponent = (function () {
    function UserListComponent(activeRoute, pageTitle, userRecord) {
        this.activeRoute = activeRoute;
        this.pageTitle = pageTitle;
        this.userRecord = userRecord;
        this.displayedColumns = ['id', 'photo', 'role', 'login', 'name', 'tel', 'actions'];
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitle.set('User list');
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableDataSource */]();
        this.dataSource.data = [];
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.userRecord.findWhere(params).then(function (data) {
                _this.dataSource.data = data;
            });
        });
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-list',
            template: __webpack_require__("../../../../../src/app/pages/user/list/user-list.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_records_user_record__["a" /* UserRecord */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_page_title_service__["a" /* PageTitleService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_records_user_record__["a" /* UserRecord */]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/user/list/user-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_list_component__ = __webpack_require__("../../../../../src/app/pages/user/list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_modules_material_module__ = __webpack_require__("../../../../../src/app/shared/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_form_user_list_search_form_component__ = __webpack_require__("../../../../../src/app/pages/user/list/search-form/user-list-search-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_modules_pipe_module__ = __webpack_require__("../../../../../src/app/shared/modules/pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserListModule = (function () {
    function UserListModule() {
    }
    UserListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__search_form_user_list_search_form_component__["a" /* UserListSearchFormComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_modules_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_modules_pipe_module__["a" /* PipeModule */],
            ],
        })
    ], UserListModule);
    return UserListModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_user_list_component__ = __webpack_require__("../../../../../src/app/pages/user/list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_user_list_module__ = __webpack_require__("../../../../../src/app/pages/user/list/user-list.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__list_user_list_component__["a" /* UserListComponent */] },
    { path: ':id', loadChildren: './profile/user-profile.module#UserProfileModule' }
];
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(ROUTES),
                __WEBPACK_IMPORTED_MODULE_3__list_user_list_module__["a" /* UserListModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map