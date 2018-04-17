webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./brand/vehicle-brand.module": [
		"../../../../../src/app/pages/vehicle/brand/vehicle-brand.module.ts",
		"common",
		"vehicle-brand.module"
	],
	"./create-update/vehicle-brand-create-update.module": [
		"../../../../../src/app/pages/vehicle/brand/create-update/vehicle-brand-create-update.module.ts",
		"common",
		"vehicle-brand-create-update.module"
	],
	"./create-update/vehicle-create-update.module": [
		"../../../../../src/app/pages/vehicle/create-update/vehicle-create-update.module.ts",
		"common",
		"vehicle-create-update.module"
	],
	"./create/client-create.module": [
		"../../../../../src/app/pages/client/create/client-create.module.ts",
		"common",
		"client-create.module"
	],
	"./create/vehicle-type-create.module": [
		"../../../../../src/app/pages/vehicle/type/create/vehicle-type-create.module.ts",
		"common",
		"vehicle-type-create.module"
	],
	"./pages/action-log/action-log.module": [
		"../../../../../src/app/pages/action-log/action-log.module.ts",
		"common",
		"action-log.module"
	],
	"./pages/client/client.module": [
		"../../../../../src/app/pages/client/client.module.ts",
		"common",
		"client.module"
	],
	"./pages/dashboard/dashboard.module": [
		"../../../../../src/app/pages/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"./pages/login/login.module": [
		"../../../../../src/app/pages/login/login.module.ts",
		"login.module"
	],
	"./pages/user/user.module": [
		"../../../../../src/app/pages/user/user.module.ts",
		"common",
		"user.module"
	],
	"./pages/vehicle/vehicle.module": [
		"../../../../../src/app/pages/vehicle/vehicle.module.ts",
		"common",
		"vehicle.module"
	],
	"./profile/user-profile.module": [
		"../../../../../src/app/pages/user/profile/user-profile.module.ts",
		"common",
		"user-profile.module"
	],
	"./type/vehicle-type.module": [
		"../../../../../src/app/pages/vehicle/type/vehicle-type.module.ts",
		"common",
		"vehicle-type.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_full_layout_component__ = __webpack_require__("../../../../../src/app/layouts/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_simple_layout_component__ = __webpack_require__("../../../../../src/app/layouts/simple-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_full_layout_module__ = __webpack_require__("../../../../../src/app/layouts/full-layout.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layouts_full_layout_component__["a" /* FullLayoutComponent */],
        children: [
            { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
            { path: 'user', loadChildren: './pages/user/user.module#UserModule' },
            { path: 'client', loadChildren: './pages/client/client.module#ClientModule' },
            { path: 'vehicle', loadChildren: './pages/vehicle/vehicle.module#VehicleModule' },
            { path: 'action-log', loadChildren: './pages/action-log/action-log.module#ActionLogModule' },
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__layouts_simple_layout_component__["a" /* SimpleLayoutComponent */],
        children: [
            { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__layouts_simple_layout_component__["a" /* SimpleLayoutComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(ROUTES),
                __WEBPACK_IMPORTED_MODULE_4__layouts_full_layout_module__["a" /* FullLayoutModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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



var AppComponent = (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this.authService.isUserLoggedIn()) {
            this.router.navigate(['/login']);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_debug_service__ = __webpack_require__("../../../../../src/app/shared/services/debug.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_access_token_service__ = __webpack_require__("../../../../../src/app/shared/services/access-token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_role_service__ = __webpack_require__("../../../../../src/app/shared/services/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__shared_services_debug_service__["a" /* DebugService */],
                __WEBPACK_IMPORTED_MODULE_8__shared_services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_services_access_token_service__["a" /* AccessTokenService */],
                __WEBPACK_IMPORTED_MODULE_10__shared_services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_services_role_service__["a" /* RoleService */],
                __WEBPACK_IMPORTED_MODULE_12__shared_services_user_service__["a" /* UserService */],
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>Hello</span>\n    <span class=\"spacer\"></span>\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n      <mat-icon>more_vert</mat-icon>\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-menu #menu=\"matMenu\">\n  <a mat-menu-item>\n    <mat-icon>account_circle</mat-icon>\n    <span>My Profile</span>\n  </a>\n  <button mat-menu-item>\n    <mat-icon>attach_money</mat-icon>\n    <span>Payment</span>\n  </button>\n  <button mat-menu-item (click)=\"logOut()\">\n    <mat-icon>exit_to_app</mat-icon>\n    <span>Log Out</span>\n  </button>\n</mat-menu>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.logOut = function () {
        this.authService.logOut();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\n  width: 240px;\n  color: #797979;\n  background: #ffffff;\n  padding: 0;\n}\n\n.sidebar ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.sidebar ul a {\n  color: rgba(49, 58, 70, 0.8);\n  display: block;\n  padding: 12px 20px;\n  margin: 2px 0;\n  font-size: 16px;\n  text-decoration: none;\n}\n\n.sidebar ul a:active {\n  color: #313a46 !important;\n  background-color: whitesmoke;\n}\n\n.sidebar ul a:hover,\n.sidebar ul a.active,\n.sidebar ul a:focus {\n  color: #313a46;\n  background-color: whitesmoke;\n}\n\n.sidebar ul a .icon {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 17px;\n  margin: 0 10px 0 3px;\n  text-align: center;\n  vertical-align: middle;\n  width: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <ul>\n    <li *ngFor=\"let link of links\">\n      <a *ngIf=\"authService.isLoggedInUserCan(link.permissionName)\" [routerLink]=\"link.url\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <span>{{link.name}}</span>\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(authService) {
        this.authService = authService;
        this.links = [
            { name: 'dashboard', url: ['/dashboard'], permissionName: 'seeDashboardPage', iconName: 'desktop' },
            { name: 'users', url: ['/user'], permissionName: 'seeUserControlPage', iconName: '' },
        ];
    }
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/full-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  background-color: #f1f1f1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n\n#sidebar {\n  z-index: 2;\n  background: #ffffff;\n  color: #797979;\n  transition: all 0.3s;\n  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);\n}\n\n#sidebar .sidebar-header {\n  color: white;\n  background: #5d6dc3;\n  background: linear-gradient(to top, #5d6dc3, #3c86d8);\n  box-shadow: -12px 0px 18px 0 rgba(0, 0, 0, 0.3);\n  height: 70px;\n  padding: .5rem 1rem;\n}\n\n#sidebar .sidebar-header h3 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%;\n}\n\n#sidebar ul.components {\n  padding: 20px 0;\n}\n\n#sidebar ul p {\n\n}\n\n#sidebar ul li a {\n  padding: 10px;\n  font-size: 1.1em;\n  display: block;\n  overflow: hidden;\n}\n#sidebar ul li a:hover {\n  color: #313a46;\n  background-color: whitesmoke;\n}\n\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\n  color: #313a46;\n  background-color: whitesmoke;\n}\n\n#sidebar {\n  min-width: 230px;\n  max-width: 230px;\n  min-height: 100vh;\n}\n\n#sidebar.active {\n  min-width: 80px;\n  max-width: 80px;\n  text-align: center;\n}\n\n#sidebar.active a span {\n  display: none;\n  position: relative;\n}\n\n#sidebar.active li:hover a {\n  position: relative;\n  width: 230px;\n  color: #313a46 !important;\n  background-color: whitesmoke;\n}\n\n#sidebar.active li:hover a span {\n  display: inline-block;\n}\n\na, a:hover, a:focus {\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s;\n}\n\na[data-toggle=\"collapse\"] {\n  position: relative;\n}\n\na[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\n  content: '\\E259';\n  display: block;\n  position: absolute;\n  right: 20px;\n  font-size: 0.6em;\n}\n\na[aria-expanded=\"true\"]::before {\n  content: '\\E260';\n}\n\nul ul a {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: #6d7fcc;\n}\n\n#content {\n  width: 100%;\n}\n\n.navbar {\n  background: #5d6dc3;\n  background: linear-gradient(to top, #5d6dc3, #3c86d8);\n  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);\n  height: 70px;\n}\n\n.navbar .toggle-button {\n  font-size: 2rem;\n  background: transparent;\n  color: white;\n  border: none;\n}\n\n@media (max-width: 768px) {\n  #sidebar {\n    margin-left: -230px;\n  }\n  #sidebar.active {\n    margin-left: 0;\n    min-width: 230px;\n  }\n  #sidebar.active a {\n    width: 100%;\n    text-align: left;\n  }\n  #sidebar.active a span {\n    display: inline-block;\n    position: relative;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <nav id=\"sidebar\" [ngClass]=\"{'active': isSidebarActive}\">\n    <!-- Sidebar Header -->\n    <div class=\"sidebar-header\">\n      <h3>Hello</h3>\n    </div>\n\n    <!-- Sidebar Links -->\n    <ul class=\"list-unstyled components\">\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"'/dashboard'\">\n          <i class=\"fa fa-desktop\"></i>\n          <span>Dashboard</span>\n        </a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"'/user'\">\n          <i class=\"fa fa-users\"></i>\n          <span>Users</span>\n        </a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"'/client'\">\n          <i class=\"fa fa-users\"></i>\n          <span>Clients</span>\n        </a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"'/vehicle'\">\n          <i class=\"fa fa-users\"></i>\n          <span>Vehicle</span>\n        </a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"'/vehicle/type'\">\n          <i class=\"fa fa-users\"></i>\n          <span>Vehicle type</span>\n        </a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"'/vehicle/brand'\">\n          <i class=\"fa fa-users\"></i>\n          <span>Vehicle brand</span>\n        </a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"'/action-log'\">\n          <i class=\"fa fa-users\"></i>\n          <span>Action log</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n\n  <div id=\"content\">\n    <nav class=\"navbar\">\n      <button type=\"button\" class=\"btn toggle-button\" (click)=\"toggleSidebar()\">\n        <i class=\"fa fa-align-justify\"></i>\n      </button>\n    </nav>\n\n    <div class=\"page-title-box\">\n      <span>\n        {{pageTitle.get()}}\n      </span>\n    </div>\n\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/full-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_page_title_service__ = __webpack_require__("../../../../../src/app/shared/services/page-title.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullLayoutComponent = (function () {
    function FullLayoutComponent(pageTitle) {
        this.pageTitle = pageTitle;
        this.isSidebarActive = false;
    }
    FullLayoutComponent.prototype.toggleSidebar = function () {
        this.isSidebarActive = !this.isSidebarActive;
    };
    FullLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-full-layout',
            template: __webpack_require__("../../../../../src/app/layouts/full-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/full-layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_page_title_service__["a" /* PageTitleService */]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/full-layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__full_layout_component__ = __webpack_require__("../../../../../src/app/layouts/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_material_module__ = __webpack_require__("../../../../../src/app/shared/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_page_title_service__ = __webpack_require__("../../../../../src/app/shared/services/page-title.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var FullLayoutModule = (function () {
    function FullLayoutModule() {
    }
    FullLayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__full_layout_component__["a" /* FullLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_modules_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["a" /* CollapseModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__shared_services_page_title_service__["a" /* PageTitleService */],
            ],
        })
    ], FullLayoutModule);
    return FullLayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/simple-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\n  height: 100%;\n  background-color: #5d6dc3;\n  background: linear-gradient(to top, #5d6dc3, #3c86d8);\n  padding-bottom: 0;\n  min-height: 100px !important;\n}\n\nbody {\n  margin: 0;\n  font-family: 'Open Sans', sans-serif;\n  background-color: #5d6dc3;\n  background: linear-gradient(to top, #5d6dc3, #3c86d8);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/simple-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/layouts/simple-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimpleLayoutComponent = (function () {
    function SimpleLayoutComponent() {
    }
    SimpleLayoutComponent.prototype.ngOnInit = function () {
    };
    SimpleLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-simple-layout',
            template: __webpack_require__("../../../../../src/app/layouts/simple-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/simple-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleLayoutComponent);
    return SimpleLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatStepperModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatStepperModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/access-token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessTokenService; });
var AccessTokenService = (function () {
    function AccessTokenService() {
    }
    AccessTokenService.prototype.set = function (accessToken) {
        this.accessToken = accessToken;
    };
    AccessTokenService.prototype.get = function () {
        return this.accessToken;
    };
    return AccessTokenService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__access_token_service__ = __webpack_require__("../../../../../src/app/shared/services/access-token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = (function () {
    function ApiService(http, accessToken, router) {
        this.http = http;
        this.accessToken = accessToken;
        this.router = router;
        this.apiUrl = 'http://api.' + window.location.hostname + '/v1';
    }
    ApiService.prototype.get = function (url, params) {
        if (params === void 0) { params = {}; }
        return this.http.get(this.setUrl(url, params), {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.accessToken.get()),
        });
    };
    ApiService.prototype.post = function (url, data) {
        return this.http.post(this.setUrl(url), data, {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.accessToken.get()),
        });
    };
    ApiService.prototype.put = function (url, data) {
        return this.http.put(this.setUrl(url), data, {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.accessToken.get()),
        });
    };
    ApiService.prototype.setUrl = function (url, params) {
        if (params === void 0) { params = {}; }
        var queryParams = {};
        Object.keys(params).forEach(function (name) {
            queryParams[name] = params[name];
        });
        if (!__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
            queryParams['XDEBUG_SESSION_START'] = 'debug';
        }
        return this.apiUrl + this.router
            .createUrlTree([url], { queryParams: queryParams })
            .toString();
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__access_token_service__["a" /* AccessTokenService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__access_token_service__ = __webpack_require__("../../../../../src/app/shared/services/access-token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__debug_service__ = __webpack_require__("../../../../../src/app/shared/services/debug.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user__ = __webpack_require__("../../../../../src/app/shared/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(apiService, accessToken, router) {
        this.apiService = apiService;
        this.accessToken = accessToken;
        this.router = router;
        this.loggedInUser = null;
        this.storageName = 'loggedInUser';
        if (window.localStorage.getItem(this.storageName)) {
            this.loadFromLocalStorage();
        }
    }
    AuthService.prototype.isLoggedInUserCan = function (permissionName) {
        return this.loggedInUser.permissions.hasOwnProperty(permissionName);
    };
    AuthService.prototype.isUserLoggedIn = function () {
        return this.loggedInUser;
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        this.apiService.post('login', {
            'username': username,
            'password': password
        }).subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_4__debug_service__["a" /* DebugService */].Log(data);
            if (!data['error']) {
                _this.loggedInUser = new __WEBPACK_IMPORTED_MODULE_5__models_user__["a" /* User */]();
                _this.loggedInUser = data;
                _this.accessToken.set(_this.loggedInUser.access_token);
                _this.saveToLocalStorage();
                __WEBPACK_IMPORTED_MODULE_4__debug_service__["a" /* DebugService */].Log(_this.loggedInUser);
                _this.router.navigate(['/']);
                return null;
            }
            else {
                return data['error'];
            }
        });
        return null;
    };
    AuthService.prototype.logOut = function () {
        this.removeFromLocalStorage();
        this.loggedInUser = null;
        this.router.navigate(['/login']);
    };
    AuthService.prototype.checkStatus = function () {
        var _this = this;
        if (this.loggedInUser) {
            this.apiService.post('login/check', {
                'username': this.loggedInUser.username,
                'access_token': this.loggedInUser.access_token,
            }).subscribe(function (data) {
                if (data['error']) {
                    _this.removeFromLocalStorage();
                    _this.router.navigate(['/login']);
                }
            });
        }
    };
    AuthService.prototype.saveToLocalStorage = function () {
        window.localStorage.setItem(this.storageName, JSON.stringify(this.loggedInUser));
    };
    AuthService.prototype.loadFromLocalStorage = function () {
        if (window.localStorage.getItem(this.storageName)) {
            this.loggedInUser = JSON.parse(window.localStorage.getItem(this.storageName));
            this.accessToken.set(this.loggedInUser.access_token);
            this.checkStatus();
        }
    };
    AuthService.prototype.removeFromLocalStorage = function () {
        if (window.localStorage.getItem(this.storageName)) {
            window.localStorage.removeItem(this.storageName);
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__access_token_service__["a" /* AccessTokenService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/debug.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebugService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var DebugService = (function () {
    function DebugService() {
    }
    DebugService.Log = function (message) {
        if (!__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].production) {
            console.log(message);
        }
    };
    return DebugService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/page-title.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTitleService; });
var PageTitleService = (function () {
    function PageTitleService() {
        this.title = '';
    }
    PageTitleService.prototype.set = function (value) {
        this.title = value;
    };
    PageTitleService.prototype.get = function () {
        return this.title;
    };
    return PageTitleService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/role.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoleService = (function () {
    function RoleService(apiService) {
        this.apiService = apiService;
    }
    RoleService.prototype.getAll = function () {
        return this.apiService.get('role');
    };
    RoleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(api) {
        this.api = api;
    }
    UserService.prototype.getAll = function () {
        return this.api.get('user');
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}

Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map