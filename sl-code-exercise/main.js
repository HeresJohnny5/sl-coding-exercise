(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-category-list></app-category-list>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/category-list/category-list.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_6__["CategoryListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/category-list/category-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/category-list/category-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  box-shadow: 0 1px 3px 0 rgba(10, 54, 69, 0.16);\n  margin: 3em auto;\n  width: 96%;\n}\n\ntd, .header-section-col, .col-1 {\n  padding: 19px 0 22px 25px;\n}\n\n.header-section-col > span {\n  font-weight: 300;\n}\n\n.header-top > th {\n  border-bottom: none;\n}\n\n.header-bottom > th {\n  border-top: none;\n}\n\n.header-add-category {\n  padding: 19px 10px 22px 0;\n  text-align: right;\n}\n\n.header-col-1 > span {\n  font-family: Helvetica;\n  font-size: 14px;\n  font-weight: normal;\n  letter-spacing: 3px;\n  width: 49px;\n}\n\n.header-bottom-col {\n  color: #7a8a90;\n  font-family: Helvetica;\n  padding-left: 0;\n}\n\n.header-add-category > button {\n  background-color: transparent;\n  border: none;\n  color: #06b4de;\n  font-family: Helvetica;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.table-striped > tbody > tr:nth-child(even) > td, \n.table-striped > tbody > tr:nth-child(even) > th {\n  background-color: #f2f2f2;\n}\n\n.table-striped > tbody > tr:nth-child(odd) > td, \n.table-striped > tbody > tr:nth-child(odd) > th {\n  background-color: #fff;\n}\n\n.col-2, .col-3 {\n  padding-left: 0;\n}\n\n.col-1 {\n  width: 10%;\n}\n\n.col-2 {\n  width: 30%;\n}\n\n.col-3 {\n  width: 40%;\n}\n\n.category-save, .field-remove {\n  text-align: right\n}\n\n.category-save {\n  padding-right: 5px;\n}\n\n.category-save > button {\n  background-color: transparent;\n  border: none;\n  color: #06b4de;\n  font-size: 12px;\n}\n\n.field-remove {\n  padding-right: 12px;\n}\n\n.col-3 > span {\n  background-color: #98cb65;\n  border-radius: 5px;\n  color: #fff;\n  padding: 5px 10px;\n}\n\n.draggable-icon {\n  height: 9.7px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 10.6px;\n}\n\n.remove-row-icon {\n  height: 27px;\n  width: 27px;\n}\n\nbutton.add-category:disabled, td.category-save > button:disabled {\n  color: #bfcfd5;\n}\n\ninput.ng-touched {\n  background: none;\n}\n\n/* MEDIA QUERIES */\n\n@media (max-width: 575.98px) {\n  button.add-category {\n    width: 12em;\n  }\n\n  .header-bottom-col {\n    font-size: 10px;\n  }\n\n  .col-2 {\n    width: 75%;\n  }\n\n.ml-auto >  {\n    padding-left: 30px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4Q0FBOEM7RUFDOUMsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFDRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0FBRUY7SUFDSSw2QkFBNkI7RUFDL0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5LWxpc3QvY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDEwLCA1NCwgNjksIDAuMTYpO1xuICBtYXJnaW46IDNlbSBhdXRvO1xuICB3aWR0aDogOTYlO1xufVxuXG50ZCwgLmhlYWRlci1zZWN0aW9uLWNvbCwgLmNvbC0xIHtcbiAgcGFkZGluZzogMTlweCAwIDIycHggMjVweDtcbn1cblxuLmhlYWRlci1zZWN0aW9uLWNvbCA+IHNwYW4ge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uaGVhZGVyLXRvcCA+IHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmhlYWRlci1ib3R0b20gPiB0aCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5oZWFkZXItYWRkLWNhdGVnb3J5IHtcbiAgcGFkZGluZzogMTlweCAxMHB4IDIycHggMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5oZWFkZXItY29sLTEgPiBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICB3aWR0aDogNDlweDtcbn1cblxuLmhlYWRlci1ib3R0b20tY29sIHtcbiAgY29sb3I6ICM3YThhOTA7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmhlYWRlci1hZGQtY2F0ZWdvcnkgPiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzA2YjRkZTtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChldmVuKSA+IHRkLCBcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSA+IHRkLCBcbi50YWJsZS1zdHJpcGVkID4gdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSA+IHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNvbC0yLCAuY29sLTMge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5jb2wtMSB7XG4gIHdpZHRoOiAxMCU7XG59XG5cbi5jb2wtMiB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5jb2wtMyB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5jYXRlZ29yeS1zYXZlLCAuZmllbGQtcmVtb3ZlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHRcbn1cblxuLmNhdGVnb3J5LXNhdmUge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5jYXRlZ29yeS1zYXZlID4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwNmI0ZGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZpZWxkLXJlbW92ZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG5cbi5jb2wtMyA+IHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThjYjY1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuLmRyYWdnYWJsZS1pY29uIHtcbiAgaGVpZ2h0OiA5LjdweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgd2lkdGg6IDEwLjZweDtcbn1cblxuLnJlbW92ZS1yb3ctaWNvbiB7XG4gIGhlaWdodDogMjdweDtcbiAgd2lkdGg6IDI3cHg7XG59XG5cbmJ1dHRvbi5hZGQtY2F0ZWdvcnk6ZGlzYWJsZWQsIHRkLmNhdGVnb3J5LXNhdmUgPiBidXR0b246ZGlzYWJsZWQge1xuICBjb2xvcjogI2JmY2ZkNTtcbn1cblxuaW5wdXQubmctdG91Y2hlZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi8qIE1FRElBIFFVRVJJRVMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICBidXR0b24uYWRkLWNhdGVnb3J5IHtcbiAgICB3aWR0aDogMTJlbTtcbiAgfVxuXG4gIC5oZWFkZXItYm90dG9tLWNvbCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmNvbC0yIHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG5cbi5tbC1hdXRvID4gIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/category-list/category-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/category-list/category-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <table id=\"table\" class=\"table table-striped\">\n    <thead>\n      <tr class=\"header-top\">\n        <th scope=\"col\" class=\"header-section-col\">\n          <span>Section</span>\n        </th>\n        <th scope=\"col\"></th>\n        <th scope=\"col\"></th>\n        <th scope=\"col\" class=\"header-add-category\">\n          <button type=\"button\" class=\"add-category\" (click)=\"onClickAddRow()\" [disabled]=\"addCategoryState\">+ ADD A CATEGORY</button>\n        </th>\n      </tr>\n      <tr class=\"header-bottom\">\n        <th scope=\"col\" class=\"col-1\"></th>\n        <th scope=\"col\" class=\"header-bottom-col col-2\">CATEGORY</th>\n        <th scope=\"col\" class=\"header-bottom-col col-3\">SEQ</th>\n        <th scope=\"col\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr id=\"tb-row-{{i + 1}}\" class=\"tb-row\" *ngFor=\"let tableField of tableFieldArray; let i = index\">\n        <td class=\"category col-1\">\n          <span>\n            <img src=\"../../assets/images/icon/icon-draggable/Group 11070.svg\" class=\"draggable-icon\" alt=\"Draggable Category Icon\">\n          </span>\n        </td>\n        <td class=\"category col-2\">\n          <input [(ngModel)]=\"tableField.name\" (keydown.enter)=\"onClickSaveCategory(i)\" type=\"text\" name=\"{tableField.name}\" placeholder=\"category\">\n        </td>\n        <td class=\"category col-3\">\n          <span>{{i + 1}}</span>\n        </td>\n        <td *ngIf=\"!tableField.saveState; else removeField\" class=\"category-save\">\n          <button [disabled]=\"tableField.name === undefined || tableField.name.length === 0\" type=\"button\" (click)=\"onClickSaveCategory(i)\">SAVE</button>\n        </td>\n        <ng-template #removeField>\n          <td class=\"field-remove\">\n            <span>\n              <img src=\"../../assets/images/icon/icon-remove/Group 15571.svg\" class=\"remove-row-icon\" alt=\"Remove Field Icon\" (click)=\"onClickRemoveRow(i)\">\n            </span>\n          </td>\n        </ng-template>\n      </tr>\n    </tbody>\n  </table>\n</section>"

/***/ }),

/***/ "./src/app/category-list/category-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/category-list/category-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery_ui_ui_widgets_sortable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-ui/ui/widgets/sortable.js */ "./node_modules/jquery-ui/ui/widgets/sortable.js");
/* harmony import */ var jquery_ui_ui_widgets_sortable_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_sortable_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent() {
        this.tableFieldArray = [];
        this.newAttribute = {};
        this.addCategoryState = false;
    }
    CategoryListComponent.prototype.ngOnInit = function () { };
    CategoryListComponent.prototype.onClickAddRow = function () {
        this.addCategoryState = true;
        this.tableFieldArray.push(this.newAttribute);
        this.newAttribute = {};
        jquery__WEBPACK_IMPORTED_MODULE_3__("tbody").sortable({
            axis: "y",
            containment: "tbody",
            helper: function (e, row) {
                row.children().each(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_3__(this).width(jquery__WEBPACK_IMPORTED_MODULE_3__(this).width());
                });
                return row;
            },
            items: "tr:not(:last)"
        });
    };
    CategoryListComponent.prototype.onClickRemoveRow = function (i) {
        this.tableFieldArray.splice(i, 1);
    };
    CategoryListComponent.prototype.onClickSaveCategory = function (i) {
        var inputField = jquery__WEBPACK_IMPORTED_MODULE_3__("#tb-row-" + (i + 1) + " input");
        inputField.prop("disabled", true);
        inputField.css("border", "none");
        this.addCategoryState = false;
        this.tableFieldArray[i].saveState = true;
        this.tableFieldArray.push(this.newAttribute);
        this.newAttribute = {};
    };
    CategoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-list',
            template: __webpack_require__(/*! ./category-list.component.html */ "./src/app/category-list/category-list.component.html"),
            styles: [__webpack_require__(/*! ./category-list.component.css */ "./src/app/category-list/category-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: #0a3645;\n  min-height: 40px;\n  padding-left: 0;\n}\n\n.active {\n  background-color: #4a636c;\n}\n\n.navbar-nav {\n  display: flex;\n}\n\n.nav-item {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: 40px;\n  text-align: center;\n  width: 95.2px;\n}\n\n.nav-item:hover {\n  color: #fff;\n}\n\n.nav-item > a {\n  font-family: Helvetica;\n  font-weight: bold;\n  font-size: 10px;\n  letter-spacing: 1px;\n}\n\n.navbar-brand > img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 25px;\n  width: 25px;\n}\n\n.navbar-toggler {\n  border: none;\n}\n\n.dropdown > a, .dropdown > a:hover {\n  color: #fff;\n}\n\n.dropdown-menu {\n  position: absolute;\n}\n\n.dropdown-toggle {\n  padding-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEzNjQ1O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE2MzZjO1xufVxuXG4ubmF2YmFyLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5uYXYtaXRlbSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDk1LjJweDtcbn1cblxuLm5hdi1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXYtaXRlbSA+IGEge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ubmF2YmFyLWJyYW5kID4gaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbn1cblxuLm5hdmJhci10b2dnbGVyIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZHJvcGRvd24gPiBhLCAuZHJvcGRvd24gPiBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark navbar-expand-md justify-content-between py-0\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".dual-nav\">\n    <img src=\"../../assets/images/icon/hamburger/Union 739.svg\" class=\"navbar-toggler-icon\" alt=\"\">\n    <!-- <span class=\"navbar-toggler-icon\"></span> -->\n  </button>\n\n  <div class=\"navbar-collapse collapse dual-nav w-50 order-1 order-md-0\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\" nav-link\" href=\"#!\">Nav 1\n          <span class=\"sr-only\">Nav 1</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" href=\"#!\">Nav 2</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#! \">Nav 3</a>\n      </li>\n    </ul>\n  </div>\n\n  <a href=\"/ \" class=\"navbar-brand mx-auto order-0\">\n    <img src=\"../../assets/images/logo/logo-nav/group-1.svg \" alt=\"Brand Logo\">\n  </a>\n\n  <div class=\"navbar-collapse collapse dual-nav w-50 order-2\">\n    <ul class=\"nav navbar-nav ml-auto\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#!\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">\n          Welcome Christy\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#!\">Action 1</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#!\">Action 2</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/johnerickson/angular/sl-code-exercise/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map