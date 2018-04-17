webpackJsonp(["vehicle-type-create.module"],{

/***/ "../../../../../src/app/pages/vehicle/type/create/vehicle-type-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <form\n          [formGroup]=\"vehicleTypeRecord.attributes\"\n          class=\"mat-elevation-z2 background-white\"\n          [ngClass]=\"{\n            'valid': vehicleTypeRecord.attributes.valid,\n            'not-valid': !vehicleTypeRecord.attributes.valid\n          }\"\n      >\n        <mat-form-field>\n          <input matInput placeholder=\"Type name\" formControlName=\"name\">\n          <mat-error *ngIf=\"vehicleTypeRecord.isAttributeNotValid('name')\">\n            {{vehicleTypeRecord.getAttributeError('name')}}\n          </mat-error>\n          <mat-hint align=\"end\">{{vehicleTypeRecord.attributes.get('name').value.length}} / {{vehicleTypeRecord.maxLength}}</mat-hint>\n        </mat-form-field>\n      </form>\n\n      <button\n          mat-raised-button\n          color=\"primary\"\n          (click)=\"save()\"\n          style=\"margin-top: 20px;\"\n          [disabled]=\"!isCanSave()\"\n      >Save</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/vehicle/type/create/vehicle-type-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleTypeCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_records_vehicle_type_record__ = __webpack_require__("../../../../../src/app/shared/records/vehicle-type.record.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_page_title_service__ = __webpack_require__("../../../../../src/app/shared/services/page-title.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehicleTypeCreateComponent = (function () {
    function VehicleTypeCreateComponent(pageTitle, activeRoute, router, vehicleTypeRecord) {
        this.pageTitle = pageTitle;
        this.activeRoute = activeRoute;
        this.router = router;
        this.vehicleTypeRecord = vehicleTypeRecord;
    }
    VehicleTypeCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.queryParams = params;
            if (_this.queryParams.hasOwnProperty('id')) {
                _this.vehicleTypeRecord.loadIn(params['id']).then(function (response) {
                    _this.pageTitle.set("Update vehicle type - " + _this.vehicleTypeRecord.attributes.get('name').value);
                });
            }
            else {
                _this.pageTitle.set('Create vehicle type');
            }
        });
    };
    VehicleTypeCreateComponent.prototype.isCanSave = function () {
        if (this.vehicleTypeRecord.attributes.valid) {
            return true;
        }
        else {
            return false;
        }
    };
    VehicleTypeCreateComponent.prototype.save = function () {
        var _this = this;
        this.vehicleTypeRecord.save().then(function (response) {
            if (!_this.queryParams.hasOwnProperty('id') &&
                response.hasOwnProperty('id')) {
                _this.router.navigate([_this.vehicleTypeRecord.getUrl() + '/' + response['id']]);
            }
        });
    };
    VehicleTypeCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-vehicle-type-create',
            template: __webpack_require__("../../../../../src/app/pages/vehicle/type/create/vehicle-type-create.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_records_vehicle_type_record__["a" /* VehicleTypeRecord */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_page_title_service__["a" /* PageTitleService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_records_vehicle_type_record__["a" /* VehicleTypeRecord */]])
    ], VehicleTypeCreateComponent);
    return VehicleTypeCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/vehicle/type/create/vehicle-type-create.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTypeCreateModule", function() { return VehicleTypeCreateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_material_module__ = __webpack_require__("../../../../../src/app/shared/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vehicle_type_create_component__ = __webpack_require__("../../../../../src/app/pages/vehicle/type/create/vehicle-type-create.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__vehicle_type_create_component__["a" /* VehicleTypeCreateComponent */] },
];
var VehicleTypeCreateModule = (function () {
    function VehicleTypeCreateModule() {
    }
    VehicleTypeCreateModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__vehicle_type_create_component__["a" /* VehicleTypeCreateComponent */],
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
    ], VehicleTypeCreateModule);
    return VehicleTypeCreateModule;
}());



/***/ })

});
//# sourceMappingURL=vehicle-type-create.module.chunk.js.map