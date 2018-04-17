webpackJsonp(["client.module"],{

/***/ "../../../../../src/app/pages/client/client.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_client_list_module__ = __webpack_require__("../../../../../src/app/pages/client/list/client-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_client_list_component__ = __webpack_require__("../../../../../src/app/pages/client/list/client-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__list_client_list_component__["a" /* ClientListComponent */] },
    { path: 'create', loadChildren: './create/client-create.module#ClientCreateModule' },
    { path: ':id', loadChildren: './create/client-create.module#ClientCreateModule' },
];
var ClientModule = (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(ROUTES),
                __WEBPACK_IMPORTED_MODULE_2__list_client_list_module__["a" /* ClientListModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
            ],
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/client/list/client-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-client-list-search-form></app-client-list-search-form>\n\n<div class=\"container-fluid\" style=\"margin-bottom: 20px;margin-top: 20px;\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <a [routerLink]=\"'/client/create'\" mat-raised-button>Create</a>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"mat-elevation-z2 background-white\">\n        <mat-table #table [dataSource]=\"dataSource\">\n          <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.id}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{element.family_name}}\n              {{element.first_name}}\n              {{element.middle_name}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"tel\">\n            <mat-header-cell *matHeaderCellDef> Telephone </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <div *ngFor=\"let telephone of element.telephones\">\n                <div>{{telephone.number | appTelephone}}</div>\n                <div *ngIf=\"telephone.note !== null\">{{telephone.note}}</div>\n              </div>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"vehicle\">\n            <mat-header-cell *matHeaderCellDef> Vehicle </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <div *ngFor=\"let vehicle of element.vehicles\">\n                <div>{{vehicle.type}}</div>\n                <div>{{vehicle.brand_name}} {{vehicle.model_name}}</div>\n                <div>{{vehicle.vin}}</div>\n                <div>{{vehicle.note}}</div>\n              </div>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <a mat-button [routerLink]=\"element.id\">\n                <mat-icon>edit</mat-icon>\n              </a>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator [length]=\"length\"\n                       [pageSize]=\"pageSize\"\n                       [pageIndex]=\"pageIndex\"\n                       [pageSizeOptions]=\"pageSizeOptions\"\n                       (page)=\"paginationEvent($event)\">\n        </mat-paginator>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/client/list/client-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_records_client_record__ = __webpack_require__("../../../../../src/app/shared/records/client.record.ts");
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





var ClientListComponent = (function () {
    function ClientListComponent(router, activeRoute, pageTitle, clientRecord) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.pageTitle = pageTitle;
        this.clientRecord = clientRecord;
        this.displayedColumns = ['id', 'name', 'tel', 'vehicle', 'actions'];
        this.length = 100;
        this.pageSize = 10;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    ClientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitle.set('Client list');
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTableDataSource */]();
        this.dataSource.data = [];
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.queryParams = params;
            _this.clientRecord.findWhere(params).then(function (response) {
                _this.length = response.count;
                _this.pageSize = response.page_size;
                _this.pageIndex = response.page_index;
                _this.dataSource.data = response.results;
            });
        });
    };
    ClientListComponent.prototype.paginationEvent = function (event) {
        var queryParams = Object.assign({}, this.queryParams, {
            page_size: event.pageSize,
            page_index: event.pageIndex,
        });
        this.router.navigate([this.clientRecord.getUrl()], { queryParams: queryParams });
    };
    ClientListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pages-client-list',
            template: __webpack_require__("../../../../../src/app/pages/client/list/client-list.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_records_client_record__["a" /* ClientRecord */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_page_title_service__["a" /* PageTitleService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_records_client_record__["a" /* ClientRecord */]])
    ], ClientListComponent);
    return ClientListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/client/list/client-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_list_component__ = __webpack_require__("../../../../../src/app/pages/client/list/client-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_modules_material_module__ = __webpack_require__("../../../../../src/app/shared/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_form_client_list_search_form_component__ = __webpack_require__("../../../../../src/app/pages/client/list/search-form/client-list-search-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_modules_pipe_module__ = __webpack_require__("../../../../../src/app/shared/modules/pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ClientListModule = (function () {
    function ClientListModule() {
    }
    ClientListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__client_list_component__["a" /* ClientListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__search_form_client_list_search_form_component__["a" /* ClientListSearchFormComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_modules_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_modules_pipe_module__["a" /* PipeModule */],
            ],
        })
    ], ClientListModule);
    return ClientListModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/client/list/search-form/client-list-search-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  background-color: white;\n  padding: 1em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/client/list/search-form/client-list-search-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <form [formGroup]=\"form\" class=\"mat-elevation-z2\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field>\n              <input matInput placeholder=\"ID\" formControlName=\"id\">\n            </mat-form-field>\n\n            <mat-form-field>\n              <input matInput placeholder=\"First name\" formControlName=\"first_name\">\n            </mat-form-field>\n\n            <mat-form-field>\n              <input matInput placeholder=\"Family name\" formControlName=\"family_name\">\n            </mat-form-field>\n\n            <mat-form-field>\n              <input matInput placeholder=\"Middle name\" formControlName=\"middle_name\">\n            </mat-form-field>\n\n            <mat-form-field>\n              <input matInput placeholder=\"Telephone number\" formControlName=\"telephone_number\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <button mat-raised-button color=\"primary\" (click)=\"search()\">Search</button>\n            <button mat-raised-button color=\"warn\" (click)=\"reset()\">Reset</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/client/list/search-form/client-list-search-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListSearchFormComponent; });
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



var ClientListSearchFormComponent = (function () {
    function ClientListSearchFormComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            first_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            family_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            middle_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            telephone_number: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
        });
    }
    ClientListSearchFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.form.patchValue(params);
        });
    };
    ClientListSearchFormComponent.prototype.search = function () {
        this.router.navigate(['/client'], { queryParams: this.form.getRawValue() });
    };
    ClientListSearchFormComponent.prototype.reset = function () {
        this.form.reset();
        this.router.navigate(['/client']);
    };
    ClientListSearchFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client-list-search-form',
            template: __webpack_require__("../../../../../src/app/pages/client/list/search-form/client-list-search-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/client/list/search-form/client-list-search-form.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ClientListSearchFormComponent);
    return ClientListSearchFormComponent;
}());



/***/ })

});
//# sourceMappingURL=client.module.chunk.js.map