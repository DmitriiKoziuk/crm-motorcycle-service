webpackJsonp(["action-log.module"],{

/***/ "../../../../../src/app/pages/action-log/action-log.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-cell {\n  padding: 5px;\n}\n.data {\n  padding: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/action-log/action-log.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"mat-elevation-z2 background-white\">\n        <mat-table #table [dataSource]=\"dataSource\">\n          <ng-container matColumnDef=\"id\">\n            <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.id}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"user\">\n            <mat-header-cell *matHeaderCellDef> User </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{element.user.first_name}}\n              {{element.user.family_name}}\n              {{element.user.middle_name}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"entity_name\">\n            <mat-header-cell *matHeaderCellDef> Entity name </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{element.entity_name}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"entity_id\">\n            <mat-header-cell *matHeaderCellDef> Entity id </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{element.entity_id}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"action_type\">\n            <mat-header-cell *matHeaderCellDef> Action type </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{element.action_type}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"old_data\">\n            <mat-header-cell *matHeaderCellDef> Old data </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" class=\"data\">\n              {{element.old_data | json}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"new_data\">\n            <mat-header-cell *matHeaderCellDef> New data </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\" class=\"data\">\n              {{element.new_data | json}}\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"apply_time\">\n            <mat-header-cell *matHeaderCellDef> Apply time </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n              {{element.apply_time}}\n            </mat-cell>\n          </ng-container>\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n        <mat-paginator [length]=\"length\"\n                       [pageSize]=\"pageSize\"\n                       [pageIndex]=\"pageIndex\"\n                       [pageSizeOptions]=\"pageSizeOptions\"\n                       (page)=\"paginationEvent($event)\">\n        </mat-paginator>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/action-log/action-log.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionLogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_page_title_service__ = __webpack_require__("../../../../../src/app/shared/services/page-title.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_records_action_log_record__ = __webpack_require__("../../../../../src/app/shared/records/action-log.record.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActionLogComponent = (function () {
    function ActionLogComponent(activeRoute, router, pageTitle, actionLog) {
        this.activeRoute = activeRoute;
        this.router = router;
        this.pageTitle = pageTitle;
        this.actionLog = actionLog;
        this.displayedColumns = [
            'id', 'user', 'entity_name', 'entity_id',
            'action_type', 'old_data', 'new_data', 'apply_time'
        ];
        this.length = 100;
        this.pageSize = 10;
        this.pageIndex = 0;
        this.pageSizeOptions = [20, 50, 100];
    }
    ActionLogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitle.set('Action log');
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTableDataSource */]();
        this.dataSource.data = [];
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.queryParams = params;
            _this.actionLog.findWhere(params).then(function (response) {
                _this.length = response.count;
                _this.pageSize = response.page_size;
                _this.pageIndex = response.page_index;
                _this.dataSource.data = response.results;
            });
        });
    };
    ActionLogComponent.prototype.paginationEvent = function (event) {
        var queryParams = Object.assign({}, this.queryParams, {
            page_size: event.pageSize,
            page_index: event.pageIndex,
        });
        this.router.navigate([this.actionLog.getUrl()], { queryParams: queryParams });
    };
    ActionLogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pages-action-log',
            template: __webpack_require__("../../../../../src/app/pages/action-log/action-log.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/action-log/action-log.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__shared_records_action_log_record__["a" /* ActionLogRecord */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_page_title_service__["a" /* PageTitleService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_records_action_log_record__["a" /* ActionLogRecord */]])
    ], ActionLogComponent);
    return ActionLogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/action-log/action-log.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionLogModule", function() { return ActionLogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_material_module__ = __webpack_require__("../../../../../src/app/shared/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__action_log_component__ = __webpack_require__("../../../../../src/app/pages/action-log/action-log.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__action_log_component__["a" /* ActionLogComponent */] }
];
var ActionLogModule = (function () {
    function ActionLogModule() {
    }
    ActionLogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__action_log_component__["a" /* ActionLogComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(ROUTES),
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_modules_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
            ],
        })
    ], ActionLogModule);
    return ActionLogModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/records/action-log.record.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionLogRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__active_record__ = __webpack_require__("../../../../../src/app/shared/records/active.record.ts");
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

var ActionLogRecord = (function (_super) {
    __extends(ActionLogRecord, _super);
    function ActionLogRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionLogRecord.prototype.getUrl = function () {
        return '/action-log';
    };
    return ActionLogRecord;
}(__WEBPACK_IMPORTED_MODULE_0__active_record__["a" /* ActiveRecord */]));



/***/ })

});
//# sourceMappingURL=action-log.module.chunk.js.map