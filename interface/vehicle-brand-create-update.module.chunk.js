webpackJsonp(["vehicle-brand-create-update.module"],{

/***/ "../../../../../src/app/pages/vehicle/brand/create-update/vehicle-brand-create-update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <form\n          [formGroup]=\"vehicleBrandRecord.attributes\"\n          class=\"mat-elevation-z2 background-white\"\n          [ngClass]=\"{\n            'valid': vehicleBrandRecord.attributes.valid,\n            'not-valid': !vehicleBrandRecord.attributes.valid\n          }\"\n      >\n        <mat-form-field>\n          <input matInput placeholder=\"Type name\" formControlName=\"name\">\n          <mat-error *ngIf=\"vehicleBrandRecord.isAttributeNotValid('name')\">\n            {{vehicleBrandRecord.getAttributeError('name')}}\n          </mat-error>\n          <mat-hint align=\"end\">{{vehicleBrandRecord.attributes.get('name').value.length}} / {{vehicleBrandRecord.maxLength}}</mat-hint>\n        </mat-form-field>\n      </form>\n\n      <button\n          mat-raised-button\n          color=\"primary\"\n          (click)=\"save()\"\n          style=\"margin-top: 20px;\"\n          [disabled]=\"!isCanSave()\"\n      >Save</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/vehicle/brand/create-update/vehicle-brand-create-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleBrandCreateUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_page_title_service__ = __webpack_require__("../../../../../src/app/shared/services/page-title.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_records_vehicle_brand_record__ = __webpack_require__("../../../../../src/app/shared/records/vehicle-brand.record.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehicleBrandCreateUpdateComponent = (function () {
    function VehicleBrandCreateUpdateComponent(pageTitle, activeRoute, router, vehicleBrandRecord) {
        this.pageTitle = pageTitle;
        this.activeRoute = activeRoute;
        this.router = router;
        this.vehicleBrandRecord = vehicleBrandRecord;
    }
    VehicleBrandCreateUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.queryParams = params;
            if (_this.queryParams.hasOwnProperty('id')) {
                _this.vehicleBrandRecord.loadIn(params['id']).then(function (response) {
                    _this.pageTitle.set("Update vehicle brand - " + _this.vehicleBrandRecord.attributes.get('name').value);
                });
            }
            else {
                _this.pageTitle.set('Create vehicle brand');
            }
        });
    };
    VehicleBrandCreateUpdateComponent.prototype.isCanSave = function () {
        if (this.vehicleBrandRecord.attributes.valid) {
            return true;
        }
        else {
            return false;
        }
    };
    VehicleBrandCreateUpdateComponent.prototype.save = function () {
        var _this = this;
        this.vehicleBrandRecord.save().then(function (response) {
            if (!_this.queryParams.hasOwnProperty('id') &&
                response.hasOwnProperty('id')) {
                _this.router.navigate([_this.vehicleBrandRecord.getUrl() + '/' + response['id']]);
            }
        });
    };
    VehicleBrandCreateUpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-vehicle-brand-create-update',
            template: __webpack_require__("../../../../../src/app/pages/vehicle/brand/create-update/vehicle-brand-create-update.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_records_vehicle_brand_record__["a" /* VehicleBrandRecord */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_page_title_service__["a" /* PageTitleService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_records_vehicle_brand_record__["a" /* VehicleBrandRecord */]])
    ], VehicleBrandCreateUpdateComponent);
    return VehicleBrandCreateUpdateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/vehicle/brand/create-update/vehicle-brand-create-update.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleBrandCreateUpdateModule", function() { return VehicleBrandCreateUpdateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_material_module__ = __webpack_require__("../../../../../src/app/shared/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vehicle_brand_create_update_component__ = __webpack_require__("../../../../../src/app/pages/vehicle/brand/create-update/vehicle-brand-create-update.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__vehicle_brand_create_update_component__["a" /* VehicleBrandCreateUpdateComponent */] },
];
var VehicleBrandCreateUpdateModule = (function () {
    function VehicleBrandCreateUpdateModule() {
    }
    VehicleBrandCreateUpdateModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__vehicle_brand_create_update_component__["a" /* VehicleBrandCreateUpdateComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(ROUTES),
                __WEBPACK_IMPORTED_MODULE_4__shared_modules_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
            ],
        })
    ], VehicleBrandCreateUpdateModule);
    return VehicleBrandCreateUpdateModule;
}());



/***/ })

});
//# sourceMappingURL=vehicle-brand-create-update.module.chunk.js.map