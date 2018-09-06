webpackJsonp(["vehicle-type.module"],{

/***/ "../../../../../src/app/pages/vehicle/type/list/vehicle-type-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-bottom: 20px;margin-top: 20px;\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <a [routerLink]=\"'/vehicle/type/create'\" mat-raised-button>Create</a>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"mat-elevation-z2 background-white\">\n        <mat-table #table [dataSource]=\"dataSource\">\n          <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.id}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{element.name}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              <a mat-button [routerLink]=\"element.id\">\n                <mat-icon>edit</mat-icon>\n              </a>\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator [length]=\"length\"\n                       [pageSize]=\"pageSize\"\n                       [pageIndex]=\"pageIndex\"\n                       [pageSizeOptions]=\"pageSizeOptions\"\n                       (page)=\"paginationEvent($event)\">\n        </mat-paginator>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/vehicle/type/list/vehicle-type-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleTypeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_page_title_service__ = __webpack_require__("../../../../../src/app/shared/services/page-title.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_records_vehicle_type_record__ = __webpack_require__("../../../../../src/app/shared/records/vehicle-type.record.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VehicleTypeListComponent = (function () {
    function VehicleTypeListComponent(pageTitle, activeRoute, router, vehicleTypeRecord) {
        this.pageTitle = pageTitle;
        this.activeRoute = activeRoute;
        this.router = router;
        this.vehicleTypeRecord = vehicleTypeRecord;
        this.displayedColumns = ['id', 'name', 'actions'];
        this.length = 100;
        this.pageSize = 20;
        this.pageIndex = 0;
        this.pageSizeOptions = [20, 50, 100];
    }
    VehicleTypeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitle.set('Vehicle type');
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTableDataSource */]();
        this.dataSource.data = [];
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.queryParams = params;
            _this.vehicleTypeRecord.findWhere(params).then(function (response) {
                _this.length = response.count;
                _this.pageSize = response.page_size;
                _this.pageIndex = response.page_index;
                _this.dataSource.data = response.results;
            });
        });
    };
    VehicleTypeListComponent.prototype.paginationEvent = function (event) {
        var queryParams = Object.assign({}, this.queryParams, {
            page_size: event.pageSize,
            page_index: event.pageIndex,
        });
        this.router.navigate([this.vehicleTypeRecord.getUrl()], { queryParams: queryParams });
    };
    VehicleTypeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pages-vehicle-type-list',
            template: __webpack_require__("../../../../../src/app/pages/vehicle/type/list/vehicle-type-list.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__shared_records_vehicle_type_record__["a" /* VehicleTypeRecord */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_page_title_service__["a" /* PageTitleService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared_records_vehicle_type_record__["a" /* VehicleTypeRecord */]])
    ], VehicleTypeListComponent);
    return VehicleTypeListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/vehicle/type/list/vehicle-type-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleTypeListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_material_module__ = __webpack_require__("../../../../../src/app/shared/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vehicle_type_list_component__ = __webpack_require__("../../../../../src/app/pages/vehicle/type/list/vehicle-type-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var VehicleTypeListModule = (function () {
    function VehicleTypeListModule() {
    }
    VehicleTypeListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__vehicle_type_list_component__["a" /* VehicleTypeListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_modules_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
            ],
        })
    ], VehicleTypeListModule);
    return VehicleTypeListModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/vehicle/type/vehicle-type.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTypeModule", function() { return VehicleTypeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_vehicle_type_list_component__ = __webpack_require__("../../../../../src/app/pages/vehicle/type/list/vehicle-type-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_vehicle_type_list_module__ = __webpack_require__("../../../../../src/app/pages/vehicle/type/list/vehicle-type-list.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__list_vehicle_type_list_component__["a" /* VehicleTypeListComponent */] },
    { path: 'create', loadChildren: './create/vehicle-type-create.module#VehicleTypeCreateModule' },
    { path: ':id', loadChildren: './create/vehicle-type-create.module#VehicleTypeCreateModule' },
];
var VehicleTypeModule = (function () {
    function VehicleTypeModule() {
    }
    VehicleTypeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(ROUTES),
                __WEBPACK_IMPORTED_MODULE_3__list_vehicle_type_list_module__["a" /* VehicleTypeListModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
            ],
        })
    ], VehicleTypeModule);
    return VehicleTypeModule;
}());



/***/ })

});
//# sourceMappingURL=vehicle-type.module.chunk.js.map