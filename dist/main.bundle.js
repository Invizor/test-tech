webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.API_URL = 'https://jsonplaceholder.typicode.com';
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TestApp';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routing_app_routing_module__ = __webpack_require__("./src/app/routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_list_user_list_user_component__ = __webpack_require__("./src/app/page/list-user/list-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_albums_user_albums_user_component__ = __webpack_require__("./src/app/page/albums-user/albums-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_modal_edit_user_modal_edit_user_component__ = __webpack_require__("./src/app/components/modal-edit-user/modal-edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_modal_user_albums_modal_user_albums_component__ = __webpack_require__("./src/app/components/modal-user-albums/modal-user-albums.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__page_list_user_list_user_component__["a" /* ListUserComponent */],
                __WEBPACK_IMPORTED_MODULE_7__page_albums_user_albums_user_component__["a" /* AlbumsUserComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_modal_edit_user_modal_edit_user_component__["a" /* ModalEditUserComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_modal_user_albums_modal_user_albums_component__["a" /* ModalUserAlbumsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/modal-edit-user/modal-edit-user.component.css":
/***/ (function(module, exports) {

module.exports = ".c-modal-edit-user {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n}\n\n.c-modal-edit-user .wrapper {\n  background-color: #000;\n  opacity: .9;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n@media(min-width: 1000px) {\n  .c-modal-edit-user .content-window {\n    width: 700px;\n  }\n}\n\n@media(max-width: 999px) {\n  .c-modal-edit-user .content-window {\n    width: 90%;\n  }\n}\n\n.c-modal-edit-user .content-window {\n  margin-left: auto;\n  margin-right: auto;\n  opacity: .99;\n  z-index: 2020;\n  -webkit-box-shadow: 0 0 2px #ffffff;\n          box-shadow: 0 0 2px #ffffff;\n  overflow: auto;\n  max-height: 90%;\n  margin-top: 70px;\n  background: #333333;\n  border-radius: 5px;\n\n}\n\n.c-modal-edit-user .content-window .header-window {\n  background: #262626;\n  height: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n}\n\n.c-modal-edit-user .content-window .header-window i {\n  color: #ffffff;\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 14px;\n  font-size: 17px;\n}\n\n.c-modal-edit-user .content-window form {\n  padding: 50px 30px;\n}\n\n.c-modal-edit-user .content-window form .field-input {\n  padding: 0px 10px 15px 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: left;\n      -ms-flex-align: left;\n          align-items: left;\n}\n\n@media(min-width: 1000px) {\n  .c-modal-edit-user .content-window form .field-input input {\n    width: 45%;\n  }\n\n  .c-modal-edit-user .content-window form .field-input button {\n    width: 45%;\n  }\n}\n\n@media(max-width: 999px) {\n  .c-modal-edit-user .content-window form .field-input input {\n    width: 100%;\n  }\n\n  .c-modal-edit-user .content-window form .field-input button {\n    width: 100%;\n  }\n}\n\n.c-modal-edit-user .content-window form .field-input input {\n  height: 30px;\n  border-radius: 5px;\n  border: 1px solid #383838;\n  background: #2d2d2d;\n  outline: none;\n  padding: 5px;\n  color: #ffffff;\n  font-size: 12px;\n}\n\n.c-modal-edit-user .content-window form .field-input button {\n  height: 30px;\n  border-radius: 5px;\n  border: 1px solid #383838;\n  outline: none;\n  cursor: pointer;\n  background: -webkit-gradient(linear, left top, right top, from(#f45342), to(#f4bb41));\n  background: linear-gradient(90deg, #f45342, #f4bb41);\n  color: #ffffff;\n  font-size: 14px;\n}\n\n.c-modal-edit-user .content-window form .field-input label {\n  font-size: 12px;\n  padding-bottom: 3px;\n  color: #ffffff;\n}\n\n"

/***/ }),

/***/ "./src/app/components/modal-edit-user/modal-edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"c-modal-edit-user\" [hidden]=\"!isOpen\">\n  <div class=\"wrapper\" (click)=\"closeModal()\">\n  </div>\n  <div class=\"content-window\">\n    <div class=\"header-window\">\n      Edit user\n      <i class=\"fas fa-times\" (click)=\"closeModal()\"></i>\n    </div>\n    <form [formGroup]=\"form\" (ngSubmit)=\"saveUserChanges()\">\n      <div class=\"field-input\">\n        <label>\n          Name\n        </label>\n        <input formControlName=\"name\">\n      </div>\n      <div class=\"field-input\">\n        <label>\n          Email\n        </label>\n        <input formControlName=\"email\">\n      </div>\n      <div class=\"field-input\">\n        <label>\n          Phone\n        </label>\n        <input formControlName=\"phone\">\n      </div>\n\n      <div class=\"field-input\">\n        <button type=\"submit\">Save</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/modal-edit-user/modal-edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalEditUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__("./src/app/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalEditUserComponent = /** @class */ (function () {
    function ModalEditUserComponent(fb, userService) {
        this.fb = fb;
        this.userService = userService;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ModalEditUserComponent.prototype.ngOnInit = function () {
    };
    ModalEditUserComponent.prototype.ngOnChanges = function (changes) {
        this.initForm();
    };
    ModalEditUserComponent.prototype.initForm = function () {
        if (this.user) {
            this.form = this.fb.group({
                name: this.user.name || '',
                email: this.user.email || '',
                phone: this.user.phone || ''
            });
        }
        else {
            this.form = this.fb.group({
                name: '',
                email: '',
                phone: ''
            });
        }
    };
    ModalEditUserComponent.prototype.closeModal = function (userData) {
        if (userData === void 0) { userData = null; }
        this.isOpen = false;
        this.close.emit(userData);
    };
    ModalEditUserComponent.prototype.saveUserChanges = function () {
        var _this = this;
        this.userService.changeFieldsUser(this.user.id, {
            name: this.form.value.name,
            email: this.form.value.email,
            phone: this.form.value.phone
        })
            .subscribe(function (updatedUserData) {
            _this.closeModal(updatedUserData);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ModalEditUserComponent.prototype, "isOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* UserModel */])
    ], ModalEditUserComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ModalEditUserComponent.prototype, "close", void 0);
    ModalEditUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modal-edit-user',
            template: __webpack_require__("./src/app/components/modal-edit-user/modal-edit-user.component.html"),
            styles: [__webpack_require__("./src/app/components/modal-edit-user/modal-edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], ModalEditUserComponent);
    return ModalEditUserComponent;
}());



/***/ }),

/***/ "./src/app/components/modal-user-albums/modal-user-albums.component.css":
/***/ (function(module, exports) {

module.exports = ".c-modal-user-albums {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n}\n\n.c-modal-user-albums .wrapper {\n  background-color: #000;\n  opacity: .9;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n@media(min-width: 1000px) {\n  .c-modal-user-albums .content-window {\n    width: 700px;\n  }\n}\n\n@media(max-width: 999px) {\n  .c-modal-user-albums .content-window {\n    width: 90%;\n  }\n}\n\n.c-modal-user-albums .content-window {\n  max-width: 90%;\n  overflow: auto;\n  margin-left: auto;\n  margin-right: auto;\n  opacity: .99;\n  z-index: 2020;\n  -webkit-box-shadow: 0 0 2px #ffffff;\n          box-shadow: 0 0 2px #ffffff;\n  overflow: auto;\n  max-height: 95%;\n  margin-top: 50px;\n  background: #ffffff;\n  border-radius: 5px;\n\n}\n\n.c-modal-user-albums .content-window .header-window {\n  background: #e5e5e5;\n  height: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n}\n\n.c-modal-user-albums .content-window .header-window i {\n  color: #ffffff;\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 14px;\n  font-size: 17px;\n}\n\n.c-modal-user-albums .content-window .content-filter {\n  padding-top: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.c-modal-user-albums .content-window .content-filter .container-input {\n  width: 200px;\n  height: 40px;\n  position: relative;\n}\n\n.c-modal-user-albums .content-window .content-filter .container-input .filter-name {\n  width: 200px;\n  height: 40px;\n  border: 1px solid rgba(255,255,255,0.10);\n  background: rgba(0,0,0,0.10);\n  -webkit-box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.20);\n          box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.20);\n  border-radius: 5px;\n  font-size: 14px;\n  color: #000000;\n  outline: none;\n  padding-left: 35px;\n}\n\n.c-modal-user-albums .content-window .content-filter .container-input i {\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  font-size: 22px;\n}\n\n.c-modal-user-albums .content-window .content-table {\n  width: 100%;\n  padding: 20px;\n  overflow-x: auto;\n}\n\n.c-modal-user-albums .content-window .content-table .table-albums-user {\n  width: 100%;\n  min-width: 250px;\n  background: #333333;\n  border: 1px solid #484848;\n  border-radius: 10px;\n  color: #ffffff;\n}\n\n.c-modal-user-albums .content-window .content-table .table-albums-user  tr {\n  height: 60px;\n}\n\n.c-modal-user-albums .content-window .content-table .table-albums-user  tr:nth-child(2n) {\n  background: #393939;\n}\n\n.c-modal-user-albums .content-window .content-table .table-albums-user  tr th {\n  border: 1px solid #484848;\n}\n\n.c-modal-user-albums .content-window .content-table .table-albums-user  tr:first-child th:first-child {\n  border-top-left-radius: 10px;\n}\n\n.c-modal-user-albums .content-window .content-table .table-albums-user  tr:first-child th:last-child {\n  border-top-right-radius: 10px;\n}\n\n.c-modal-user-albums .content-window .content-table .table-albums-user  tr:last-child th:first-child {\n  border-bottom-left-radius: 10px;\n}\n\n.c-modal-user-albums .content-window .content-table .table-albums-user  tr:last-child th:last-child {\n  border-bottom-right-radius: 10px;\n}\n\n.c-modal-user-albums .content-window .content-table .table-albums-user  tr .column-id {\n  width: 15%;\n}\n\n.c-modal-user-albums .content-window .content-table .table-albums-user  tr .column-title {\n  width: 85%;\n}\n\n.c-modal-user-albums .content-window .content-table .table-albums-user  tr td {\n  text-align: center;\n  border: 1px solid #484848;\n}\n\n.c-modal-user-albums .content-window .content-table .table-albums-user  tr:last-child td:first-child {\n  border-bottom-left-radius: 10px;\n}\n\n.c-modal-user-albums .content-window .content-table .table-albums-user  tr:last-child td:last-child {\n  border-bottom-right-radius: 10px;\n}\n\n"

/***/ }),

/***/ "./src/app/components/modal-user-albums/modal-user-albums.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"c-modal-user-albums\" [hidden]=\"!isOpen\">\n  <div class=\"wrapper\" (click)=\"closeModal()\">\n  </div>\n  <div class=\"content-window\">\n    <div class=\"header-window\">\n      User albums\n      <i class=\"fas fa-times\" (click)=\"closeModal()\"></i>\n    </div>\n    <div class=\"content-filter\">\n      <div class=\"container-input\">\n        <input class=\"filter-name\" type=\"text\" [ngModel]=\"filterTitleAlbums\" (ngModelChange)=\"changedFilterAlbums($event)\">\n        <i class=\"fas fa-search\"></i>\n      </div>\n    </div>\n    <div class=\"content-table\">\n      <table class=\"table-albums-user\" cellspacing=\"0px\">\n        <tr>\n          <th class=\"column-id\">ID</th>\n          <th class=\"column-title\">Name</th>\n        </tr>\n        <tr *ngFor=\"let album of viewListAlbums\">\n          <td class=\"element-id\">\n            {{album.id}}\n          </td>\n          <td class=\"element-title\">\n            {{album.title}}\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/modal-user-albums/modal-user-albums.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalUserAlbumsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__("./src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalUserAlbumsComponent = /** @class */ (function () {
    function ModalUserAlbumsComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.listAlbums = [];
        this.viewListAlbums = [];
        this.modelFilterTitleAlbums = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.filterTitleAlbums = '';
        this.modelFilterTitleAlbums
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(function (model) {
            _this.filterTitleAlbums = model;
            _this.filteredAlbumsUser();
        });
    }
    ModalUserAlbumsComponent.prototype.ngOnInit = function () {
    };
    ModalUserAlbumsComponent.prototype.ngOnChanges = function (changes) {
        this.loadData();
    };
    ModalUserAlbumsComponent.prototype.loadData = function () {
        if (this.user && typeof (this.user.id) === 'number') {
            this.loadUserAlbums(this.user.id);
        }
    };
    ModalUserAlbumsComponent.prototype.loadUserAlbums = function (idUser) {
        var _this = this;
        this.userService.getAlbumsUser(idUser)
            .subscribe(function (listAlbums) {
            _this.listAlbums = listAlbums;
            _this.viewListAlbums = listAlbums;
        }, function (error) { });
    };
    ModalUserAlbumsComponent.prototype.closeModal = function (userData) {
        if (userData === void 0) { userData = null; }
        this.isOpen = false;
        this.close.emit();
    };
    ModalUserAlbumsComponent.prototype.changedFilterAlbums = function (text) {
        this.modelFilterTitleAlbums.next(text);
    };
    ModalUserAlbumsComponent.prototype.filteredAlbumsUser = function () {
        var _this = this;
        if (this.filterTitleAlbums === '') {
            this.viewListAlbums = this.listAlbums;
        }
        else {
            this.viewListAlbums = this.listAlbums.filter(function (album) {
                return Boolean(album.title.indexOf(_this.filterTitleAlbums) !== -1);
            });
        }
    };
    ModalUserAlbumsComponent.prototype.ngOnDestroy = function () {
        this.filterTitleAlbums = '';
        this.listAlbums = [];
        this.viewListAlbums = [];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ModalUserAlbumsComponent.prototype, "isOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* UserModel */])
    ], ModalUserAlbumsComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ModalUserAlbumsComponent.prototype, "close", void 0);
    ModalUserAlbumsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modal-user-albums',
            template: __webpack_require__("./src/app/components/modal-user-albums/modal-user-albums.component.html"),
            styles: [__webpack_require__("./src/app/components/modal-user-albums/modal-user-albums.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], ModalUserAlbumsComponent);
    return ModalUserAlbumsComponent;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());



/***/ }),

/***/ "./src/app/page/albums-user/albums-user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/albums-user/albums-user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  albums-user works!\n</p>\n"

/***/ }),

/***/ "./src/app/page/albums-user/albums-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlbumsUserComponent = /** @class */ (function () {
    function AlbumsUserComponent() {
    }
    AlbumsUserComponent.prototype.ngOnInit = function () {
    };
    AlbumsUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-albums-user',
            template: __webpack_require__("./src/app/page/albums-user/albums-user.component.html"),
            styles: [__webpack_require__("./src/app/page/albums-user/albums-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlbumsUserComponent);
    return AlbumsUserComponent;
}());



/***/ }),

/***/ "./src/app/page/list-user/list-user.component.css":
/***/ (function(module, exports) {

module.exports = "@media(min-width: 1200px) {\n  .c-page-list-user {\n    padding-left: 300px;\n    padding-right: 300px;\n    width: 100%;\n  }\n}\n\n@media(max-width: 1199px) and (min-width: 850px) {\n  .c-page-list-user {\n    padding-left: 100px;\n    padding-right: 100px;\n    width: 100%;\n  }\n}\n\n@media(max-width: 849px){\n  .c-page-list-user {\n    padding-left: 20px;\n    padding-right: 20px;\n    width: 100%;\n  }\n}\n\n.c-page-list-user .content-filter {\n  padding-top: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.c-page-list-user .content-filter .container-input {\n  width: 200px;\n  height: 40px;\n  position: relative;\n}\n\n.c-page-list-user .content-filter .container-input .filter-name {\n  width: 200px;\n  height: 40px;\n  border: 1px solid rgba(255,255,255,0.10);\n  background: rgba(0,0,0,0.10);\n  -webkit-box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.20);\n          box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.20);\n  border-radius: 5px;\n  font-size: 14px;\n  color: #000000;\n  outline: none;\n  padding-left: 35px;\n}\n\n.c-page-list-user .content-filter .container-input i {\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  font-size: 22px;\n}\n\n.c-page-list-user .content-table {\n  width: 100%;\n  padding-top: 20px;\n  overflow-x: auto;\n}\n\n.c-page-list-user .content-table .table-list-users {\n  width: 100%;\n  min-width: 600px;\n  background: #333333;\n  border: 1px solid #484848;\n  border-radius: 10px;\n  color: #ffffff;\n}\n\n.c-page-list-user .content-table .table-list-users tr {\n  height: 60px;\n}\n\n.c-page-list-user .content-table .table-list-users tr:nth-child(2n) {\n  background: #393939;\n}\n\n.c-page-list-user .content-table .table-list-users tr th {\n  border: 1px solid #484848;\n}\n\n.c-page-list-user .content-table .table-list-users tr:first-child th:first-child {\n  border-top-left-radius: 10px;\n}\n\n.c-page-list-user .content-table .table-list-users tr:first-child th:last-child {\n  border-top-right-radius: 10px;\n}\n\n.c-page-list-user .content-table .table-list-users tr:last-child th:first-child {\n  border-bottom-left-radius: 10px;\n}\n\n.c-page-list-user .content-table .table-list-users tr:last-child th:last-child {\n  border-bottom-right-radius: 10px;\n}\n\n.c-page-list-user .content-table .table-list-users tr .column-id {\n  width: 15%;\n}\n\n.c-page-list-user .content-table .table-list-users tr .column-name {\n  width: 30%;\n}\n\n.c-page-list-user .content-table .table-list-users tr .element-name {\n  cursor: pointer;\n}\n\n.c-page-list-user .content-table .table-list-users tr .element-name:hover {\n  text-decoration: underline;\n}\n\n.c-page-list-user .content-table .table-list-users tr .column-email {\n  width: 30%;\n}\n\n.c-page-list-user .content-table .table-list-users tr .column-edit {\n  width: 25%;\n}\n\n.c-page-list-user .content-table .table-list-users tr .element-edit {\n  cursor: pointer;\n}\n\n.c-page-list-user .content-table .table-list-users tr .element-edit:hover {\n  text-decoration: underline;\n}\n\n.c-page-list-user .content-table .table-list-users tr td {\n  text-align: center;\n  border: 1px solid #484848;\n}\n\n.c-page-list-user .content-table .table-list-users tr:last-child td:first-child {\n  border-bottom-left-radius: 10px;\n}\n\n.c-page-list-user .content-table .table-list-users tr:last-child td:last-child {\n  border-bottom-right-radius: 10px;\n}"

/***/ }),

/***/ "./src/app/page/list-user/list-user.component.html":
/***/ (function(module, exports) {

module.exports = "<app-modal-edit-user\n  *ngIf=\"isOpenModalEditUser\"\n  [isOpen]=\"isOpenModalEditUser\"\n  [user]=\"editableUser\"\n  (close)=\"onCloseModalEditUser($event)\"\n>\n</app-modal-edit-user>\n<app-modal-user-albums\n  *ngIf=\"isOpenModalUserAlbums\"\n  [isOpen]=\"isOpenModalUserAlbums\"\n  [user]=\"editableUser\"\n  (close)=\"onCloseModalUserAlbums($event)\"\n>\n</app-modal-user-albums>\n<div class=\"c-page-list-user\">\n  <div class=\"content-filter\">\n    <div class=\"container-input\">\n      <input class=\"filter-name\" type=\"text\" [ngModel]=\"filterNameUser\" (ngModelChange)=\"changedFilterUser($event)\">\n      <i class=\"fas fa-search\"></i>\n    </div>\n  </div>\n  <div class=\"content-table\">\n    <table class=\"table-list-users\" cellspacing=\"0px\">\n      <tr>\n        <th class=\"column-id\">ID</th>\n        <th class=\"column-name\">Name</th>\n        <th class=\"column-email\">Email</th>\n        <th class=\"column-edit\">Edit</th>\n      </tr>\n      <tr *ngFor=\"let user of viewListUsers\">\n        <td class=\"element-id\">\n          {{user.id}}\n        </td>\n        <td class=\"element-name\" (click)=\"openModalUserAlbums(user)\">\n          {{user.name}}\n        </td>\n        <td class=\"element-email\">\n          {{user.email}}\n        </td>\n        <td class=\"element-edit\" (click)=\"startEditCurrentUser(user)\">\n          Edit\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page/list-user/list-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListUserComponent = /** @class */ (function () {
    function ListUserComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.filterNameUser = '';
        this.isOpenModalEditUser = false;
        this.isOpenModalUserAlbums = false;
        this.modelFilterNameUserChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.modelFilterNameUserChanged
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(function (model) {
            _this.filterNameUser = model;
            _this.filteredListUser();
        });
    }
    ListUserComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    ListUserComponent.prototype.loadData = function () {
        this.loadListUser();
    };
    ListUserComponent.prototype.loadListUser = function () {
        var _this = this;
        this.userService.getListUsers()
            .subscribe(function (listUsers) {
            _this.listUsers = listUsers;
            _this.viewListUsers = listUsers;
        }, function (error) { });
    };
    ListUserComponent.prototype.startEditCurrentUser = function (user) {
        this.editableUser = user;
        this.isOpenModalEditUser = true;
    };
    ListUserComponent.prototype.openModalUserAlbums = function (user) {
        this.editableUser = user;
        this.isOpenModalUserAlbums = true;
    };
    ListUserComponent.prototype.changedFilterUser = function (text) {
        this.modelFilterNameUserChanged.next(text);
    };
    ListUserComponent.prototype.filteredListUser = function () {
        var _this = this;
        if (this.filterNameUser === '') {
            this.viewListUsers = this.listUsers;
        }
        else {
            this.viewListUsers = this.listUsers.filter(function (user) {
                return Boolean(user.name.indexOf(_this.filterNameUser) !== -1);
            });
        }
    };
    ListUserComponent.prototype.onCloseModalEditUser = function (event) {
        this.isOpenModalEditUser = false;
    };
    ListUserComponent.prototype.onCloseModalUserAlbums = function (event) {
        this.isOpenModalUserAlbums = false;
    };
    ListUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-user',
            template: __webpack_require__("./src/app/page/list-user/list-user.component.html"),
            styles: [__webpack_require__("./src/app/page/list-user/list-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], ListUserComponent);
    return ListUserComponent;
}());



/***/ }),

/***/ "./src/app/routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_albums_user_albums_user_component__ = __webpack_require__("./src/app/page/albums-user/albums-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_list_user_list_user_component__ = __webpack_require__("./src/app/page/list-user/list-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'list-user', pathMatch: 'full' },
    { path: 'list-user',
        component: __WEBPACK_IMPORTED_MODULE_3__page_list_user_list_user_component__["a" /* ListUserComponent */]
    },
    { path: 'albums',
        component: __WEBPACK_IMPORTED_MODULE_2__page_albums_user_albums_user_component__["a" /* AlbumsUserComponent */],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
    }
    ApiService.prototype.get = function (path, params, options) {
        if (options === void 0) { options = null; }
        var resultPath = path;
        var resultOptions = {
            headers: this.httpOptions.headers
        };
        if (options) {
            resultOptions = options;
        }
        if (params) {
            resultPath += '?';
            Object.keys(params).forEach(function (key) {
                resultPath += key + "=" + params[key] + "&";
            });
            resultPath = resultPath.slice(0, -1);
        }
        return this._http
            .get(resultPath, resultOptions)
            .map(function (data) {
            if (!data) {
                throw data;
            }
            return data;
        });
    };
    ApiService.prototype.post = function (path, params, options) {
        if (options === void 0) { options = null; }
        var resultPath = path;
        var resultOptions = {
            headers: this.httpOptions.headers
        };
        if (options) {
            resultOptions = options;
        }
        var resultBody = params;
        return this._http
            .post(resultPath, resultBody, resultOptions)
            .map(function (data) {
            if (!data) {
                throw data;
            }
            return data;
        });
    };
    ApiService.prototype.patch = function (path, params, options) {
        if (options === void 0) { options = null; }
        var resultPath = path;
        var resultOptions = {
            headers: this.httpOptions.headers
        };
        if (options) {
            resultOptions = options;
        }
        var resultBody = params;
        return this._http
            .patch(resultPath, resultBody, resultOptions)
            .map(function (data) {
            if (!data) {
                throw data;
            }
            return data;
        });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("./src/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(apiService) {
        this.apiService = apiService;
        this._listUser = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.listUser = [];
        this.init();
    }
    UserService.prototype.init = function () {
    };
    UserService.prototype.setListUsers = function (listUsers) {
        if (Array.isArray(listUsers)) {
            this.listUser = listUsers;
            this._listUser.next(listUsers);
        }
        else {
            this.listUser = [];
            this._listUser.next([]);
        }
    };
    UserService.prototype.getListUsers = function () {
        var _this = this;
        var path = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */].API_URL + '/users';
        return this.apiService.get(path)
            .flatMap(function (listUsers) {
            _this.setListUsers(listUsers);
            return _this._listUser.asObservable();
        });
    };
    UserService.prototype.getAlbumsUser = function (userId) {
        var path = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */].API_URL + '/albums';
        return this.apiService.get(path, { userId: userId })
            .map(function (albumsUser) {
            return albumsUser;
        });
    };
    UserService.prototype.changeFieldsUser = function (userId, paramsBody) {
        var _this = this;
        var path = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */].API_URL + '/users/' + userId;
        return this.apiService.patch(path, paramsBody)
            .map(function (changeUser) {
            if (changeUser) {
                for (var i = 0; i < _this.listUser.length; i++) {
                    if (_this.listUser[i].id === changeUser.id) {
                        _this.listUser[i] = changeUser;
                    }
                }
                ;
                _this.setListUsers(_this.listUser);
            }
            return changeUser;
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map