"use strict";
(self["webpackChunkang2_conduit"] = self["webpackChunkang2_conduit"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 1836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsRoutingModule": () => (/* binding */ SettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ 3825);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component */ 4586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);






const routes = [{
  path: '',
  component: _settings_component__WEBPACK_IMPORTED_MODULE_2__.SettingsComponent,
  canActivate: [_core__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}];
class SettingsRoutingModule {}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SettingsRoutingModule, "\u0275fac", function SettingsRoutingModule_Factory(t) {
  return new (t || SettingsRoutingModule)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SettingsRoutingModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SettingsRoutingModule
}));
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SettingsRoutingModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
}));

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SettingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 4586:
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _shared_list_errors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/list-errors.component */ 6860);










class SettingsComponent {
  constructor(router, userService, fb, cd) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userService", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fb", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "user", {});
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "settingsForm", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "errors", {});
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isSubmitting", false);
    this.router = router;
    this.userService = userService;
    this.fb = fb;
    this.cd = cd;
    // create form group using the form builder
    this.settingsForm = this.fb.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    });
    // Optional: subscribe to changes on the form
    // this.settingsForm.valueChanges.subscribe(values => this.updateUser(values));
  }

  ngOnInit() {
    // Make a fresh copy of the current user's object to place in editable form fields
    Object.assign(this.user, this.userService.getCurrentUser());
    // Fill the form
    this.settingsForm.patchValue(this.user);
  }
  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }
  submitForm() {
    this.isSubmitting = true;
    // update the model
    this.updateUser(this.settingsForm.value);
    this.userService.update(this.user).subscribe(updatedUser => this.router.navigateByUrl('/profile/' + updatedUser.username), err => {
      this.errors = err;
      this.isSubmitting = false;
      this.cd.markForCheck();
    });
  }
  updateUser(values) {
    Object.assign(this.user, values);
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SettingsComponent, "\u0275fac", function SettingsComponent_Factory(t) {
  return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SettingsComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SettingsComponent,
  selectors: [["app-settings-page"]],
  decls: 25,
  vars: 3,
  consts: [[1, "settings-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "errors"], [3, "formGroup", "ngSubmit"], [3, "disabled"], [1, "form-group"], ["type", "text", "placeholder", "URL of profile picture", "formControlName", "image", 1, "form-control"], ["type", "text", "placeholder", "Username", "formControlName", "username", 1, "form-control", "form-control-lg"], ["rows", "8", "placeholder", "Short bio about you", "formControlName", "bio", 1, "form-control", "form-control-lg"], ["type", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control", "form-control-lg"], ["type", "password", "placeholder", "New Password", "formControlName", "password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right"], [1, "btn", "btn-outline-danger", 3, "click"]],
  template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Your Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-list-errors", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_7_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "fieldset", 7)(9, "fieldset", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "fieldset", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "fieldset", 8)(14, "textarea", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "              ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "fieldset", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "fieldset", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Update Settings ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_23_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Or click here to logout. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("errors", ctx.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.settingsForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isSubmitting);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_list_errors_component__WEBPACK_IMPORTED_MODULE_2__.ListErrorsComponent],
  encapsulation: 2,
  changeDetection: 0
}));


/***/ }),

/***/ 7075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component */ 4586);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ 1679);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-routing.module */ 1836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);





class SettingsModule {}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SettingsModule, "\u0275fac", function SettingsModule_Factory(t) {
  return new (t || SettingsModule)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SettingsModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: SettingsModule
}));
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SettingsModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__.SettingsRoutingModule]
}));

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SettingsModule, {
    declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_1__.SettingsComponent],
    imports: [_shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__.SettingsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map