webpackJsonp(["vehicle-create-update.module"],{

/***/ "../../../../../src/app/pages/vehicle/create-update/vehicle-create-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\n  width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/vehicle/create-update/vehicle-create-update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <form\n          [formGroup]=\"vehicleRecord.attributes\"\n          class=\"mat-elevation-z2 background-white\"\n          [ngClass]=\"{\n            'valid': vehicleRecord.attributes.valid,\n            'not-valid': !vehicleRecord.attributes.valid\n          }\"\n      >\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <mat-form-field class=\"example-full-width\">\n              <input type=\"text\"\n                     placeholder=\"Vehicle type\"\n                     matInput\n                     [formControl]=\"vehicleRecord.attributes.get('type.name')\"\n                     [matAutocomplete]=\"vehicleTypeAuto\"\n              >\n              <mat-autocomplete #vehicleTypeAuto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let vehicleType of vehicleTypeList\" [value]=\"vehicleType.name\">\n                  {{ vehicleType.name }}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-3\">\n            <mat-form-field class=\"example-full-width\">\n              <input type=\"text\"\n                     placeholder=\"Vehicle brand\"\n                     matInput\n                     [formControl]=\"vehicleRecord.attributes.get('brand.name')\"\n                     [matAutocomplete]=\"vehicleBrandAuto\"\n              >\n              <mat-autocomplete #vehicleBrandAuto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let vehicleBrand of vehicleBrandList\" [value]=\"vehicleBrand.name\">\n                  {{ vehicleBrand.name }}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-6\">\n            <mat-form-field>\n              <input matInput placeholder=\"Model name\" formControlName=\"model_name\">\n              <mat-error *ngIf=\"vehicleRecord.isAttributeNotValid('model_name')\">\n                {{vehicleRecord.getAttributeError('model_name')}}\n              </mat-error>\n              <mat-hint align=\"end\">{{vehicleRecord.attributes.get('model_name').value.length}} / {{vehicleRecord.maxLength}}</mat-hint>\n            </mat-form-field>\n          </div>\n        </div>\n      </form>\n\n      <button\n          mat-raised-button\n          color=\"primary\"\n          (click)=\"save()\"\n          style=\"margin-top: 20px;\"\n          [disabled]=\"!isCanSave()\"\n      >Save</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/vehicle/create-update/vehicle-create-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleCreateUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_page_title_service__ = __webpack_require__("../../../../../src/app/shared/services/page-title.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_records_vehicle_record__ = __webpack_require__("../../../../../src/app/shared/records/vehicle.record.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_records_vehicle_type_record__ = __webpack_require__("../../../../../src/app/shared/records/vehicle-type.record.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_records_vehicle_brand_record__ = __webpack_require__("../../../../../src/app/shared/records/vehicle-brand.record.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VehicleCreateUpdateComponent = (function () {
    function VehicleCreateUpdateComponent(pageTitle, activeRoute, router, vehicleTypeRecord, vehicleBrandRecord, vehicleRecord) {
        this.pageTitle = pageTitle;
        this.activeRoute = activeRoute;
        this.router = router;
        this.vehicleTypeRecord = vehicleTypeRecord;
        this.vehicleBrandRecord = vehicleBrandRecord;
        this.vehicleRecord = vehicleRecord;
        this.vehicleTypeList = [];
        this.vehicleBrandList = [];
    }
    VehicleCreateUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicleTypeRecord.findWhere({}).then(function (response) {
            _this.vehicleTypeList = response.results;
        });
        this.vehicleBrandRecord.findWhere({}).then(function (response) {
            _this.vehicleBrandList = response.results;
        });
        this.vehicleRecord.attributes.get('brand.name').valueChanges.subscribe(function (name) {
            _this.vehicleRecord.attributes.get('brand.id').setValue('');
            _this.vehicleBrandRecord.findWhere({ name: name })
                .then(function (response) {
                _this.vehicleBrandList = response.results;
            })
                .then(function () {
                _this.vehicleBrandList.forEach(function (brand) {
                    if (brand.name === name) {
                        _this.vehicleRecord.attributes.get('brand.id').setValue(brand.id);
                    }
                });
            });
        });
        this.vehicleRecord.attributes.get('type.name').valueChanges.subscribe(function (name) {
            _this.vehicleRecord.attributes.get('type.id').setValue('');
            _this.vehicleTypeList.forEach(function (type) {
                if (type.name === name) {
                    _this.vehicleRecord.attributes.get('type.id').setValue(type.id);
                }
            });
        });
        this.activeRoute.params.subscribe(function (params) {
            _this.queryParams = params;
            if (_this.queryParams.hasOwnProperty('id')) {
                _this.vehicleRecord.loadIn(params['id']).then(function () {
                    _this.pageTitle.set("Update vehicle \"" + _this.vehicleRecord.attributes.get('model_name').value + "\"");
                });
            }
            else {
                _this.pageTitle.set('Create vehicle');
            }
        });
    };
    VehicleCreateUpdateComponent.prototype.isCanSave = function () {
        if (this.vehicleRecord.attributes.valid) {
            return true;
        }
        else {
            return false;
        }
    };
    VehicleCreateUpdateComponent.prototype.save = function () {
        var _this = this;
        this.vehicleRecord.save().then(function (response) {
            if (!_this.queryParams.hasOwnProperty('id') &&
                response.hasOwnProperty('id')) {
                _this.router.navigate([_this.vehicleRecord.getUrl() + '/' + response['id']]);
            }
        });
    };
    VehicleCreateUpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-vehicle-create-update',
            template: __webpack_require__("../../../../../src/app/pages/vehicle/create-update/vehicle-create-update.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/vehicle/create-update/vehicle-create-update.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__shared_records_vehicle_record__["a" /* VehicleRecord */],
                __WEBPACK_IMPORTED_MODULE_4__shared_records_vehicle_type_record__["a" /* VehicleTypeRecord */],
                __WEBPACK_IMPORTED_MODULE_5__shared_records_vehicle_brand_record__["a" /* VehicleBrandRecord */],
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_page_title_service__["a" /* PageTitleService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared_records_vehicle_type_record__["a" /* VehicleTypeRecord */],
            __WEBPACK_IMPORTED_MODULE_5__shared_records_vehicle_brand_record__["a" /* VehicleBrandRecord */],
            __WEBPACK_IMPORTED_MODULE_3__shared_records_vehicle_record__["a" /* VehicleRecord */]])
    ], VehicleCreateUpdateComponent);
    return VehicleCreateUpdateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/vehicle/create-update/vehicle-create-update.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleCreateUpdateModule", function() { return VehicleCreateUpdateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_material_module__ = __webpack_require__("../../../../../src/app/shared/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vehicle_create_update_component__ = __webpack_require__("../../../../../src/app/pages/vehicle/create-update/vehicle-create-update.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__vehicle_create_update_component__["a" /* VehicleCreateUpdateComponent */] },
];
var VehicleCreateUpdateModule = (function () {
    function VehicleCreateUpdateModule() {
    }
    VehicleCreateUpdateModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__vehicle_create_update_component__["a" /* VehicleCreateUpdateComponent */],
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
    ], VehicleCreateUpdateModule);
    return VehicleCreateUpdateModule;
}());



/***/ })

});
//# sourceMappingURL=vehicle-create-update.module.chunk.js.map