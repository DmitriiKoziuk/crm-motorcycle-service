webpackJsonp(["client-create.module"],{

/***/ "../../../../../src/app/pages/client/create/client-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\n  width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/client/create/client-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <form\n          [formGroup]=\"clientRecord.attributes\"\n          class=\"mat-elevation-z2 background-white\"\n          [ngClass]=\"{\n            'valid': clientRecord.attributes.valid,\n            'not-valid': !clientRecord.attributes.valid\n          }\"\n      >\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <mat-form-field>\n              <input matInput placeholder=\"First name\" formControlName=\"first_name\">\n              <mat-error *ngIf=\"clientRecord.isAttributeNotValid('first_name')\">\n                {{clientRecord.getAttributeError('first_name')}}\n              </mat-error>\n              <mat-hint align=\"end\">{{clientRecord.attributes.get('first_name').value.length}} / {{clientRecord.maxLength}}</mat-hint>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field>\n              <input matInput placeholder=\"Family name\" formControlName=\"family_name\">\n              <mat-error *ngIf=\"clientRecord.isAttributeNotValid('family_name')\">\n                {{clientRecord.getAttributeError('family_name')}}\n              </mat-error>\n              <mat-hint align=\"end\">{{clientRecord.attributes.get('family_name').value.length}} / {{clientRecord.maxLength}}</mat-hint>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field>\n              <input matInput placeholder=\"Middle name\" formControlName=\"middle_name\">\n              <mat-error *ngIf=\"clientRecord.isAttributeNotValid('middle_name')\">\n                {{clientRecord.getAttributeError('middle_name')}}\n              </mat-error>\n              <mat-hint align=\"end\">{{clientRecord.attributes.get('middle_name').value.length}} / {{clientRecord.maxLength}}</mat-hint>\n            </mat-form-field>\n          </div>\n        </div>\n      </form>\n\n      <form\n          [formGroup]=\"telephoneForm\"\n          class=\"mat-elevation-z2 background-white\"\n          style=\"margin-top: 20px;\"\n          [ngClass]=\"{\n            'valid': clientRecord.attributes.get('telephones').value.length,\n            'not-valid': !clientRecord.attributes.get('telephones').value.length\n          }\"\n      >\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <mat-form-field>\n              <input matInput placeholder=\"Telephone number\" formControlName=\"number\" [(ngModel)]=\"telephoneForm.get('number').value\">\n              <mat-hint align=\"end\">{{telephoneForm.get('number').value.length}} / {{13}}</mat-hint>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field>\n              <input matInput placeholder=\"Note\" formControlName=\"note\">\n              <mat-hint align=\"end\">{{telephoneForm.get('note').value.length}} / {{150}}</mat-hint>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <button type=\"button\" [disabled]=\"! telephoneForm.valid\" mat-raised-button color=\"primary\" (click)=\"addTelephone()\">+</button>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"row\" *ngFor=\"let telephone of clientRecord.attributes.get('telephones').controls; let i = index\">\n              <div class=\"col-md-4\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Telephone number\" [formControl]=\"telephone.controls['number']\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-4\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Note\" [formControl]=\"telephone.controls['note']\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-4\">\n                <button mat-raised-button color=\"warn\" (click)=\"removeTelephone(i)\">-</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n\n      <form\n          [formGroup]=\"vehicleForm\"\n          class=\"mat-elevation-z2 background-white\"\n          style=\"margin-top: 20px;\"\n          [ngClass]=\"{\n            'valid':      clientRecord.attributes.get('vehicles').value.length,\n            'not-valid': !clientRecord.attributes.get('vehicles').value.length\n          }\"\n      >\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <mat-form-field>\n              <input matInput\n                     placeholder=\"Vehicle name\"\n                     formControlName=\"name\"\n                     [(ngModel)]=\"vehicleForm.get('name').value\"\n                     [matAutocomplete]=\"vehicleTypeAuto\"\n              >\n              <mat-autocomplete #vehicleTypeAuto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let vehicle of vehicleList\" [value]=\"vehicle.model_name\">\n                  {{vehicle.type}} {{vehicle.brand_name}} {{ vehicle.model_name }}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-2\">\n            <mat-form-field>\n              <input matInput placeholder=\"Vin\" formControlName=\"vin\">\n              <mat-hint align=\"end\">{{vehicleForm.get('vin').value.length}} / {{17}}</mat-hint>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-2\">\n            <mat-form-field>\n              <input matInput placeholder=\"Note\" formControlName=\"note\">\n              <mat-hint align=\"end\">{{vehicleForm.get('note').value.length}} / {{150}}</mat-hint>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <button type=\"button\" [disabled]=\"! vehicleForm.valid\" mat-raised-button color=\"primary\" (click)=\"addVehicle()\">+</button>\n          </div>\n        </div>\n\n\n      </form>\n\n      <button\n          mat-raised-button\n          color=\"primary\"\n          (click)=\"save()\"\n          style=\"margin-top: 20px;\"\n          [disabled]=\"!isCanSave()\"\n      >Save</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/client/create/client-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_page_title_service__ = __webpack_require__("../../../../../src/app/shared/services/page-title.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_records_client_record__ = __webpack_require__("../../../../../src/app/shared/records/client.record.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_records_vehicle_record__ = __webpack_require__("../../../../../src/app/shared/records/vehicle.record.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientCreateComponent = (function () {
    function ClientCreateComponent(pageTitle, activeRoute, router, vehicleRecord, clientRecord) {
        this.pageTitle = pageTitle;
        this.activeRoute = activeRoute;
        this.router = router;
        this.vehicleRecord = vehicleRecord;
        this.clientRecord = clientRecord;
        this.vehicleList = [];
        this.telephoneForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            number: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('+38', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(13),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(13),
            ]),
            note: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(150),
            ]),
        });
        this.vehicleForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required
            ]),
            vin: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required
            ]),
            note: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
        });
    }
    ClientCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.queryParams = params;
            if (_this.queryParams.hasOwnProperty('id')) {
                _this.clientRecord.loadIn(params['id']).then(function (response) {
                    _this.pageTitle.set("Update client - " + _this.clientRecord.attributes.get('first_name').value);
                });
            }
            else {
                _this.pageTitle.set('Create client');
            }
        });
        this.vehicleRecord.findWhere({}).then(function (response) {
            _this.vehicleList = response.results;
        });
    };
    ClientCreateComponent.prototype.addTelephone = function () {
        if (this.telephoneForm.valid) {
            this.clientRecord.attributes.get('telephones').push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                number: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.telephoneForm.get('number').value),
                note: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.telephoneForm.get('note').value),
            }));
            this.telephoneForm.reset({
                number: '+38',
                note: '',
            });
        }
    };
    ClientCreateComponent.prototype.removeTelephone = function (index) {
        this.clientRecord.attributes.get('telephones').removeAt(index);
    };
    ClientCreateComponent.prototype.addVehicle = function () {
    };
    ClientCreateComponent.prototype.isCanSave = function () {
        if (this.clientRecord.attributes.valid && this.clientRecord.attributes.get('telephones').value.length) {
            return true;
        }
        else {
            return false;
        }
    };
    ClientCreateComponent.prototype.save = function () {
        var _this = this;
        this.clientRecord.save().then(function (response) {
            if (!_this.queryParams.hasOwnProperty('id') &&
                response.hasOwnProperty('id')) {
                _this.router.navigate([_this.clientRecord.getUrl() + '/' + response['id']]);
            }
        });
    };
    ClientCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-client-create',
            template: __webpack_require__("../../../../../src/app/pages/client/create/client-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/client/create/client-create.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__shared_records_client_record__["a" /* ClientRecord */],
                __WEBPACK_IMPORTED_MODULE_5__shared_records_vehicle_record__["a" /* VehicleRecord */],
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_page_title_service__["a" /* PageTitleService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__shared_records_vehicle_record__["a" /* VehicleRecord */],
            __WEBPACK_IMPORTED_MODULE_4__shared_records_client_record__["a" /* ClientRecord */]])
    ], ClientCreateComponent);
    return ClientCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/client/create/client-create.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCreateModule", function() { return ClientCreateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_create_component__ = __webpack_require__("../../../../../src/app/pages/client/create/client-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_modules_material_module__ = __webpack_require__("../../../../../src/app/shared/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_modules_pipe_module__ = __webpack_require__("../../../../../src/app/shared/modules/pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__client_create_component__["a" /* ClientCreateComponent */] },
];
var ClientCreateModule = (function () {
    function ClientCreateModule() {
    }
    ClientCreateModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__client_create_component__["a" /* ClientCreateComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(ROUTES),
                __WEBPACK_IMPORTED_MODULE_5__shared_modules_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_modules_pipe_module__["a" /* PipeModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
            ],
        })
    ], ClientCreateModule);
    return ClientCreateModule;
}());



/***/ })

});
//# sourceMappingURL=client-create.module.chunk.js.map