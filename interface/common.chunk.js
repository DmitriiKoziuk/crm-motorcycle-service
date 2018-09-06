webpackJsonp(["common"],{

/***/ "../../../../../src/app/shared/modules/pipe.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_telephone_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/telephone.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipeModule = (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__pipes_telephone_pipe__["a" /* TelephonePipe */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__pipes_telephone_pipe__["a" /* TelephonePipe */]
            ]
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/telephone.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelephonePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TelephonePipe = (function () {
    function TelephonePipe() {
    }
    TelephonePipe.prototype.transform = function (value) {
        switch (value.length) {
            case 1:
            case 2:
            case 3: return value.replace(/([+]{1})([0-9]{2})/g, '$1$2');
            case 4:
            case 5:
            case 6: return value.replace(/([+]{1})([0-9]{2})([0-9]{3})/g, '$1$2 ($3');
            case 7:
            case 8:
            case 9: return value.replace(/([+]{1})([0-9]{2})([0-9]{3})([0-9]{3})/g, '$1$2 ($3) $4');
            case 10:
            case 11: return value.replace(/([+]{1})([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{2})/g, '$1$2 ($3) $4-$5');
            case 12:
            case 13: return value.replace(/([+]{1})([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})/g, '$1$2 ($3) $4-$5-$6');
            default: return value;
        }
    };
    TelephonePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'appTelephone'
        })
    ], TelephonePipe);
    return TelephonePipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/records/active.record.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActiveRecord = (function () {
    function ActiveRecord(api) {
        this.api = api;
        this.searchParams = {};
        this.returnResultAsRawData = false;
        this.attributes = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
        });
    }
    ActiveRecord.prototype.getUrl = function () {
        return '';
    };
    ActiveRecord.prototype.getAttribute = function (path) {
        return this.attributes.get(path).value;
    };
    ActiveRecord.prototype.getAttributeError = function (path) {
        if (this.attributes.get(path).valid) {
            return false;
        }
        else {
            var e = '';
            var m = '';
            for (var error in this.attributes.get(path).errors) {
                if (this.attributes.get(path).errors.hasOwnProperty(error)) {
                    switch (error) {
                        case 'required':
                            m = 'Is required.';
                            break;
                        case 'minlength':
                            m = 'Must be at least ! characters long.';
                            break;
                        case 'maxlength':
                            m = 'Cannot be more than ! characters long.';
                            break;
                        default:
                            m = error;
                            break;
                    }
                    e = (e === '' ? e + m : e + ', ' + m);
                }
            }
            return e;
        }
    };
    ActiveRecord.prototype.setAttribute = function (name, value) {
        this.attributes.get(name).setValue(value);
    };
    ActiveRecord.prototype.setAttributes = function (attributes, parentControlName) {
        if (parentControlName === void 0) { parentControlName = ''; }
        for (var key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                var fullControlName = (parentControlName === '' ? key : parentControlName + '.' + key);
                var localControlName = (parentControlName === '' ? key : parentControlName);
                var isExist = this.attributes.get(fullControlName);
                if (isExist === null) {
                    var addTo = this.attributes.get(localControlName);
                    if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isObject"])(attributes[key])) {
                        if (addTo instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormArray */]) {
                            addTo.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({}));
                        }
                        else {
                            addTo.addControl(key, new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({}));
                            this.setAttributes(attributes[key], fullControlName);
                        }
                    }
                    else {
                        addTo.addControl(key, new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''));
                    }
                }
                if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isObject"])(attributes[key])) {
                    this.setAttributes(attributes[key], fullControlName);
                }
                else {
                    this.setAttribute(fullControlName, attributes[key]);
                }
            }
        }
    };
    ActiveRecord.prototype.loadIn = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.api.get(_this.getUrl() + '/' + id).subscribe(function (data) {
                if (data['error']) {
                    reject(data);
                }
                else {
                    _this.setAttributes(data);
                    resolve('ok');
                }
            });
        });
    };
    ActiveRecord.prototype.getById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.api.get(_this.getUrl() + '/' + id).subscribe(function (data) {
                if (data['error']) {
                    reject(data['error']);
                }
                else {
                    var object = new _this.constructor;
                    object.setAttributes(data);
                    resolve(object);
                }
            });
        });
    };
    ActiveRecord.prototype.findWhere = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.api.get(_this.getUrl(), params).subscribe(function (data) {
                if (data['error']) {
                    reject(data['error']);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    ActiveRecord.prototype.find = function () {
        this.searchParams = {};
        this.returnResultAsRawData = false;
        return this;
    };
    ActiveRecord.prototype.where = function (params) {
        this.searchParams = params;
        return this;
    };
    ActiveRecord.prototype.resultAsRawData = function () {
        this.returnResultAsRawData = true;
        return this;
    };
    ActiveRecord.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.api.get(_this.getUrl(), _this.searchParams).subscribe(function (data) {
                if (data['error']) {
                    reject(data['error']);
                }
                else {
                    if (!_this.returnResultAsRawData) {
                        var list_1 = [];
                        data.results.forEach(function (attributes) {
                            var object = new _this.constructor;
                            object.setAttributes(attributes);
                            list_1.push(object);
                        });
                        data.results = list_1;
                    }
                    resolve(data);
                }
            });
        });
    };
    ActiveRecord.prototype.isNewRecord = function () {
        return (this.attributes.get('id').value === '');
    };
    ActiveRecord.prototype.isAttributeValid = function (path) {
        return this.attributes.get(path).valid;
    };
    ActiveRecord.prototype.isAttributeNotValid = function (path) {
        return !this.isAttributeValid(path);
    };
    ActiveRecord.prototype.isAttributeChanged = function () {
        return this.attributes.dirty;
    };
    ActiveRecord.prototype.isAttributeNotChanged = function () {
        return !this.isAttributeChanged();
    };
    ActiveRecord.prototype.isValid = function () {
        return this.attributes.valid;
    };
    ActiveRecord.prototype.isNotValid = function () {
        return !this.isValid();
    };
    ActiveRecord.prototype.save = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.attributes.valid) {
                if (_this.isNewRecord()) {
                    _this.api
                        .post(_this.getUrl(), _this.attributes.getRawValue())
                        .subscribe(function (response) {
                        if (response['error']) {
                            reject(response['error']);
                        }
                        else {
                            resolve(response);
                        }
                    });
                }
                else {
                    _this.api
                        .put(_this.getUrl() + '/' + _this.attributes.get('id').value, _this.attributes.getRawValue())
                        .subscribe(function (response) {
                        if (response['error']) {
                            reject(response['error']);
                        }
                        else {
                            resolve(response);
                        }
                    });
                }
            }
            else {
                reject({
                    error: 'Attribute not valid'
                });
            }
        });
    };
    ActiveRecord = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]])
    ], ActiveRecord);
    return ActiveRecord;
}());



/***/ }),

/***/ "../../../../../src/app/shared/records/client.record.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__active_record__ = __webpack_require__("../../../../../src/app/shared/records/active.record.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClientRecord = (function (_super) {
    __extends(ClientRecord, _super);
    function ClientRecord() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minLength = 1;
        _this.maxLength = 45;
        _this.attributes = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            first_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(_this.minLength),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(_this.maxLength),
            ]),
            family_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(_this.minLength),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(_this.maxLength),
            ]),
            middle_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(_this.minLength),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(_this.maxLength),
            ]),
            telephones: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormArray */]([]),
            vehicles: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormArray */]([]),
        });
        return _this;
    }
    ClientRecord.prototype.getUrl = function () {
        return '/client';
    };
    ClientRecord.prototype.addVehicle = function (vehicle, vin, note) {
        console.log('aV', vehicle);
        this.attributes.get('vehicles').push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](vehicle.getAttribute('id')),
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](vehicle.getAttribute('type.name')),
            brand_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](vehicle.getAttribute('brand.name')),
            model_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](vehicle.getAttribute('model_name')),
            vin: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](vin),
            note: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](note),
        }));
        console.log(this.attributes.getRawValue());
    };
    ClientRecord = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ClientRecord);
    return ClientRecord;
}(__WEBPACK_IMPORTED_MODULE_2__active_record__["a" /* ActiveRecord */]));



/***/ }),

/***/ "../../../../../src/app/shared/records/user.record.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__active_record__ = __webpack_require__("../../../../../src/app/shared/records/active.record.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var UserRecord = (function (_super) {
    __extends(UserRecord, _super);
    function UserRecord() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minLength = 5;
        _this.maxLength = 10;
        _this.attributes = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            access_token: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(_this.minLength),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(_this.maxLength),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(_this.minLength),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(_this.maxLength),
            ]),
            profile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                first_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
                ]),
                family_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
                middle_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
                photo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
                telephone_number: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(13),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(13),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
                ]),
            }),
            role: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            }),
            permissions: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({}),
        });
        return _this;
    }
    UserRecord.prototype.getUrl = function () {
        return '/user';
    };
    return UserRecord;
}(__WEBPACK_IMPORTED_MODULE_0__active_record__["a" /* ActiveRecord */]));



/***/ }),

/***/ "../../../../../src/app/shared/records/vehicle-brand.record.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleBrandRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__active_record__ = __webpack_require__("../../../../../src/app/shared/records/active.record.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var VehicleBrandRecord = (function (_super) {
    __extends(VehicleBrandRecord, _super);
    function VehicleBrandRecord() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minLength = 1;
        _this.maxLength = 45;
        _this.attributes = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(_this.minLength),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(_this.maxLength),
            ]),
        });
        return _this;
    }
    VehicleBrandRecord.prototype.getUrl = function () {
        return '/vehicle/brand';
    };
    return VehicleBrandRecord;
}(__WEBPACK_IMPORTED_MODULE_0__active_record__["a" /* ActiveRecord */]));



/***/ }),

/***/ "../../../../../src/app/shared/records/vehicle-type.record.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleTypeRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__active_record__ = __webpack_require__("../../../../../src/app/shared/records/active.record.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var VehicleTypeRecord = (function (_super) {
    __extends(VehicleTypeRecord, _super);
    function VehicleTypeRecord() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minLength = 1;
        _this.maxLength = 15;
        _this.attributes = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(_this.minLength),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(_this.maxLength),
            ]),
        });
        return _this;
    }
    VehicleTypeRecord.prototype.getUrl = function () {
        return '/vehicle/type';
    };
    return VehicleTypeRecord;
}(__WEBPACK_IMPORTED_MODULE_0__active_record__["a" /* ActiveRecord */]));



/***/ }),

/***/ "../../../../../src/app/shared/records/vehicle.record.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__active_record__ = __webpack_require__("../../../../../src/app/shared/records/active.record.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var VehicleRecord = (function (_super) {
    __extends(VehicleRecord, _super);
    function VehicleRecord() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxLength = 150;
        _this.attributes = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
                name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
                ]),
            }),
            brand: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
                name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
                ]),
            }),
            model_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(1),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(_this.maxLength),
            ]),
        });
        return _this;
    }
    VehicleRecord.prototype.getUrl = function () {
        return '/vehicle';
    };
    VehicleRecord.prototype.getFullName = function () {
        return this.getAttribute('type.name') + ' ' +
            this.getAttribute('brand.name') + ' ' +
            this.getAttribute('model_name');
    };
    return VehicleRecord;
}(__WEBPACK_IMPORTED_MODULE_0__active_record__["a" /* ActiveRecord */]));



/***/ }),

/***/ "../../../../process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../../../util/node_modules/inherits/inherits_browser.js":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../../../../util/support/isBufferBrowser.js":
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "../../../../util/util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__("../../../../util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__("../../../../util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js"), __webpack_require__("../../../../process/browser.js")))

/***/ })

});
//# sourceMappingURL=common.chunk.js.map