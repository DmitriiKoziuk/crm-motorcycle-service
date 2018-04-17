webpackJsonp(["login.module"],{

/***/ "../../../../../src/app/pages/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  min-width: 250px;\n}\n\n.row {\n  height: 100vh;\n}\n\n.login-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.submit-button {\n  margin-top: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-md-center align-items-center\">\n    <div class=\"col-md-auto\">\n      <mat-card>\n        <mat-card-header>\n          <h1>Login form</h1>\n        </mat-card-header>\n        <mat-card-content>\n          <form class=\"login-form\" [formGroup]=\"loginForm\" (submit)=\"submit()\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Username\" formControlName=\"username\">\n              <mat-error *ngIf=\"usernameErrors()\">\n                {{usernameErrors()}}\n              </mat-error>\n              <mat-hint align=\"end\">{{loginForm.get('username').value.length}} / {{maxLength}}</mat-hint>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n              <mat-error *ngIf=\"passwordErrors()\">\n                {{passwordErrors()}}\n              </mat-error>\n              <mat-hint align=\"end\">{{loginForm.get('password').value.length}} / {{maxLength}}</mat-hint>\n            </mat-form-field>\n            <button type=\"submit\" mat-raised-button class=\"submit-button\" color=\"primary\" style=\"width: 100%;\">Login</button>\n          </form>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.error = null;
        this.minLength = 5;
        this.maxLength = 10;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(this.minLength),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(this.maxLength)
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(this.minLength),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(this.maxLength)
            ]),
        });
    };
    LoginComponent.prototype.usernameErrors = function () {
        if (this.loginForm.get('username').valid) {
            return false;
        }
        else {
            var e = '';
            for (var error in this.loginForm.get('username').errors) {
                if (this.loginForm.get('username').errors.hasOwnProperty(error)) {
                    e = e === '' ? e + error : e + ', ' + error;
                }
            }
            return e;
        }
    };
    LoginComponent.prototype.passwordErrors = function () {
        if (this.loginForm.get('password').valid) {
            return false;
        }
        else {
            var e = '';
            for (var error in this.loginForm.get('password').errors) {
                if (this.loginForm.get('password').errors.hasOwnProperty(error)) {
                    e = e === '' ? e + error : e + ', ' + error;
                }
            }
            return e;
        }
    };
    LoginComponent.prototype.submit = function () {
        if (this.loginForm.valid) {
            this.error = this.authService.login(this.loginForm.get('username').value, this.loginForm.get('password').value);
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_modules_material_module__ = __webpack_require__("../../../../../src/app/shared/modules/material.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var loginRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */] }
];
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__shared_modules_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(loginRoutes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* ReactiveFormsModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map