"use strict";
(self["webpackChunkang2_conduit"] = self["webpackChunkang2_conduit"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-quicklink */ 979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);





const routes = [{
  path: 'settings',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 7075)).then(m => m.SettingsModule)
}, {
  path: 'profile',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4523)).then(m => m.ProfileModule)
}, {
  path: 'editor',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_editor_editor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./editor/editor.module */ 3164)).then(m => m.EditorModule)
}, {
  path: 'article',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_article_article_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./article/article.module */ 5745)).then(m => m.ArticleModule)
}];
class AppRoutingModule {}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppRoutingModule, "\u0275fac", function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppRoutingModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
}));
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppRoutingModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__.QuicklinkModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__.QuicklinkStrategy
  }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
}));

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [ngx_quicklink__WEBPACK_IMPORTED_MODULE_2__.QuicklinkModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _shared_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/layout/footer.component */ 8498);
/* harmony import */ var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/layout/header.component */ 9596);







class AppComponent {
  constructor(userService) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userService", void 0);
    this.userService = userService;
  }
  ngOnInit() {
    this.userService.populate();
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppComponent, "\u0275fac", function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__.UserService));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-layout-header")(1, "router-outlet")(2, "app-layout-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _shared_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent],
  encapsulation: 2,
  changeDetection: 0
}));


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.module */ 1674);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.module */ 3467);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ 1679);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ 4413);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6839);












class AppModule {}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppModule, "\u0275fac", function AppModule_Factory(t) {
  return new (t || AppModule)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
}));
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _core_core_module__WEBPACK_IMPORTED_MODULE_6__.CoreModule, _shared__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _home_home_module__WEBPACK_IMPORTED_MODULE_3__.HomeModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.production
  })]
}));

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _shared__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _core_core_module__WEBPACK_IMPORTED_MODULE_6__.CoreModule, _shared__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _home_home_module__WEBPACK_IMPORTED_MODULE_3__.HomeModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ 980);
/* harmony import */ var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-auth-guard.service */ 6047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);






const routes = [{
  path: 'login',
  component: _auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent,
  canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.NoAuthGuard]
}, {
  path: 'register',
  component: _auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent,
  canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.NoAuthGuard]
}];
class AuthRoutingModule {}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AuthRoutingModule, "\u0275fac", function AuthRoutingModule_Factory(t) {
  return new (t || AuthRoutingModule)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AuthRoutingModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AuthRoutingModule
}));
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AuthRoutingModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
}));

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 980:
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _shared_list_errors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/list-errors.component */ 6860);











const _c0 = function () {
  return ["/login"];
};
function AuthComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Have an account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}
const _c1 = function () {
  return ["/register"];
};
function AuthComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Need an account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1));
  }
}
function AuthComponent_input_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 15);
  }
}
class AuthComponent {
  constructor(route, router, userService, fb, cd) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "route", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userService", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fb", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "authType", '');
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", '');
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "errors", {
      errors: {}
    });
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isSubmitting", false);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "authForm", void 0);
    this.route = route;
    this.router = router;
    this.userService = userService;
    this.fb = fb;
    this.cd = cd;
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = this.authType === 'login' ? 'Sign in' : 'Sign up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('username', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl());
      }
      this.cd.markForCheck();
    });
  }
  submitForm() {
    this.isSubmitting = true;
    this.errors = {
      errors: {}
    };
    const credentials = this.authForm.value;
    this.userService.attemptAuth(this.authType, credentials).subscribe(data => this.router.navigateByUrl('/'), err => {
      this.errors = err;
      this.isSubmitting = false;
      this.cd.markForCheck();
    });
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AuthComponent, "\u0275fac", function AuthComponent_Factory(t) {
  return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AuthComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AuthComponent,
  selectors: [["app-auth-page"]],
  decls: 20,
  vars: 9,
  consts: [[1, "auth-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "routerLink", 4, "ngIf"], [3, "errors"], [3, "formGroup", "ngSubmit"], [3, "disabled"], [1, "form-group"], ["formControlName", "username", "placeholder", "Username", "class", "form-control form-control-lg", "type", "text", 4, "ngIf"], ["formControlName", "email", "placeholder", "Email", "type", "text", 1, "form-control", "form-control-lg"], ["formControlName", "password", "placeholder", "Password", "type", "password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right", 3, "disabled"], [3, "routerLink"], ["formControlName", "username", "placeholder", "Username", "type", "text", 1, "form-control", "form-control-lg"]],
  template: function AuthComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AuthComponent_a_7_Template, 2, 2, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AuthComponent_a_8_Template, 2, 2, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-list-errors", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_10_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "fieldset", 8)(12, "fieldset", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AuthComponent_input_13_Template, 1, 0, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "fieldset", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "fieldset", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authType === "register");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authType === "login");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("errors", ctx.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.authForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isSubmitting);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authType === "register");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.authForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _shared_list_errors_component__WEBPACK_IMPORTED_MODULE_2__.ListErrorsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  encapsulation: 2,
  changeDetection: 0
}));


/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ 980);
/* harmony import */ var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-auth-guard.service */ 6047);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ 1679);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ 431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);






class AuthModule {}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AuthModule, "\u0275fac", function AuthModule_Factory(t) {
  return new (t || AuthModule)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AuthModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AuthModule
}));
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AuthModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.NoAuthGuard],
  imports: [_shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__.AuthRoutingModule]
}));

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent],
    imports: [_shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__.AuthRoutingModule]
  });
})();

/***/ }),

/***/ 6047:
/*!***********************************************!*\
  !*** ./src/app/auth/no-auth-guard.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoAuthGuard": () => (/* binding */ NoAuthGuard)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ 3825);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);







class NoAuthGuard {
  constructor(router, userService) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userService", void 0);
    this.router = router;
    this.userService = userService;
  }
  canActivate(route, state) {
    return this.userService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(isAuth => !isAuth));
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(NoAuthGuard, "\u0275fac", function NoAuthGuard_Factory(t) {
  return new (t || NoAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_1__.UserService));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(NoAuthGuard, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: NoAuthGuard,
  factory: NoAuthGuard.ɵfac
}));


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors/http.token.interceptor */ 6643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);





class CoreModule {}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CoreModule, "\u0275fac", function CoreModule_Factory(t) {
  return new (t || CoreModule)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CoreModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: CoreModule
}));
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CoreModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
    useClass: _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpTokenInterceptor,
    multi: true
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
}));

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
  });
})();

/***/ }),

/***/ 3825:
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.ApiService),
/* harmony export */   "ArticlesService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.ArticlesService),
/* harmony export */   "AuthGuard": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.AuthGuard),
/* harmony export */   "CommentsService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.CommentsService),
/* harmony export */   "CoreModule": () => (/* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule),
/* harmony export */   "HttpTokenInterceptor": () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_3__.HttpTokenInterceptor),
/* harmony export */   "JwtService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.JwtService),
/* harmony export */   "ProfilesService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.ProfilesService),
/* harmony export */   "TagsService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.TagsService),
/* harmony export */   "UserService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.UserService)
/* harmony export */ });
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ 294);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ 8138);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ 3902);
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors */ 2756);





/***/ }),

/***/ 6643:
/*!*************************************************************!*\
  !*** ./src/app/core/interceptors/http.token.interceptor.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpTokenInterceptor": () => (/* binding */ HttpTokenInterceptor)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ 8138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);





class HttpTokenInterceptor {
  constructor(jwtService) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "jwtService", void 0);
    this.jwtService = jwtService;
  }
  intercept(req, next) {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const token = this.jwtService.getToken();
    if (token) {
      headersConfig['Authorization'] = `Token ${token}`;
    }
    const request = req.clone({
      setHeaders: headersConfig
    });
    return next.handle(request);
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HttpTokenInterceptor, "\u0275fac", function HttpTokenInterceptor_Factory(t) {
  return new (t || HttpTokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__.JwtService));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HttpTokenInterceptor, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: HttpTokenInterceptor,
  factory: HttpTokenInterceptor.ɵfac
}));


/***/ }),

/***/ 2756:
/*!********************************************!*\
  !*** ./src/app/core/interceptors/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpTokenInterceptor": () => (/* reexport safe */ _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__.HttpTokenInterceptor)
/* harmony export */ });
/* harmony import */ var _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.token.interceptor */ 6643);


/***/ }),

/***/ 137:
/*!**********************************************************!*\
  !*** ./src/app/core/models/article-list-config.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7247:
/*!**********************************************!*\
  !*** ./src/app/core/models/article.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8230:
/*!**********************************************!*\
  !*** ./src/app/core/models/comment.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 1046:
/*!*********************************************!*\
  !*** ./src/app/core/models/errors.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3902:
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article.model */ 7247);
/* harmony import */ var _article_list_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-list-config.model */ 137);
/* harmony import */ var _comment_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment.model */ 8230);
/* harmony import */ var _errors_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors.model */ 1046);
/* harmony import */ var _profile_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.model */ 2191);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.model */ 9249);







/***/ }),

/***/ 2191:
/*!**********************************************!*\
  !*** ./src/app/core/models/profile.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 9249:
/*!*******************************************!*\
  !*** ./src/app/core/models/user.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5384:
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);







class ApiService {
  constructor(http) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "http", void 0);
    this.http = http;
  }
  formatErrors(error) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error.error);
  }
  get(path, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams()) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url}${path}`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
  }
  put(path, body = {}) {
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url}${path}`, JSON.stringify(body)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
  }
  post(path, body = {}) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url}${path}`, JSON.stringify(body)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
  }
  delete(path) {
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url}${path}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ApiService, "\u0275fac", function ApiService_Factory(t) {
  return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ApiService, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: ApiService,
  factory: ApiService.ɵfac,
  providedIn: 'root'
}));


/***/ }),

/***/ 9921:
/*!***************************************************!*\
  !*** ./src/app/core/services/articles.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesService": () => (/* binding */ ArticlesService)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 5384);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);






class ArticlesService {
  constructor(apiService) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "apiService", void 0);
    this.apiService = apiService;
  }
  query(config) {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};
    Object.keys(config.filters).forEach(key => {
      params[key] = config.filters[key];
    });
    return this.apiService.get('/articles' + (config.type === 'feed' ? '/feed' : ''), new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams({
      fromObject: params
    }));
  }
  get(slug) {
    return this.apiService.get('/articles/' + slug).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data.article));
  }
  destroy(slug) {
    return this.apiService.delete('/articles/' + slug);
  }
  save(article) {
    // If we're updating an existing article
    if (article.slug) {
      return this.apiService.put('/articles/' + article.slug, {
        article: article
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data.article));
      // Otherwise, create a new article
    } else {
      return this.apiService.post('/articles/', {
        article: article
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data.article));
    }
  }
  favorite(slug) {
    return this.apiService.post('/articles/' + slug + '/favorite');
  }
  unfavorite(slug) {
    return this.apiService.delete('/articles/' + slug + '/favorite');
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ArticlesService, "\u0275fac", function ArticlesService_Factory(t) {
  return new (t || ArticlesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ArticlesService, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: ArticlesService,
  factory: ArticlesService.ɵfac,
  providedIn: 'root'
}));


/***/ }),

/***/ 970:
/*!*****************************************************!*\
  !*** ./src/app/core/services/auth-guard.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 8386);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);







class AuthGuard {
  constructor(router, userService) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userService", void 0);
    this.router = router;
    this.userService = userService;
  }
  canActivate(route, state) {
    return this.userService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1));
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AuthGuard, "\u0275fac", function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AuthGuard, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
}));


/***/ }),

/***/ 378:
/*!***************************************************!*\
  !*** ./src/app/core/services/comments.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsService": () => (/* binding */ CommentsService)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 5384);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);





class CommentsService {
  constructor(apiService) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "apiService", void 0);
    this.apiService = apiService;
  }
  add(slug, payload) {
    return this.apiService.post(`/articles/${slug}/comments`, {
      comment: {
        body: payload
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data.comment));
  }
  getAll(slug) {
    return this.apiService.get(`/articles/${slug}/comments`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data.comments));
  }
  destroy(commentId, articleSlug) {
    return this.apiService.delete(`/articles/${articleSlug}/comments/${commentId}`);
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CommentsService, "\u0275fac", function CommentsService_Factory(t) {
  return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CommentsService, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CommentsService,
  factory: CommentsService.ɵfac,
  providedIn: 'root'
}));


/***/ }),

/***/ 8138:
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* reexport safe */ _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService),
/* harmony export */   "ArticlesService": () => (/* reexport safe */ _articles_service__WEBPACK_IMPORTED_MODULE_1__.ArticlesService),
/* harmony export */   "AuthGuard": () => (/* reexport safe */ _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuard),
/* harmony export */   "CommentsService": () => (/* reexport safe */ _comments_service__WEBPACK_IMPORTED_MODULE_3__.CommentsService),
/* harmony export */   "JwtService": () => (/* reexport safe */ _jwt_service__WEBPACK_IMPORTED_MODULE_4__.JwtService),
/* harmony export */   "ProfilesService": () => (/* reexport safe */ _profiles_service__WEBPACK_IMPORTED_MODULE_5__.ProfilesService),
/* harmony export */   "TagsService": () => (/* reexport safe */ _tags_service__WEBPACK_IMPORTED_MODULE_6__.TagsService),
/* harmony export */   "UserService": () => (/* reexport safe */ _user_service__WEBPACK_IMPORTED_MODULE_7__.UserService)
/* harmony export */ });
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5384);
/* harmony import */ var _articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles.service */ 9921);
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-guard.service */ 970);
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.service */ 378);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ 7493);
/* harmony import */ var _profiles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profiles.service */ 7457);
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tags.service */ 3171);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ 8386);









/***/ }),

/***/ 7493:
/*!**********************************************!*\
  !*** ./src/app/core/services/jwt.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtService": () => (/* binding */ JwtService)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);


class JwtService {
  getToken() {
    return window.localStorage['jwtToken'];
  }
  saveToken(token) {
    window.localStorage['jwtToken'] = token;
  }
  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(JwtService, "\u0275fac", function JwtService_Factory(t) {
  return new (t || JwtService)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(JwtService, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: JwtService,
  factory: JwtService.ɵfac,
  providedIn: 'root'
}));


/***/ }),

/***/ 7457:
/*!***************************************************!*\
  !*** ./src/app/core/services/profiles.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilesService": () => (/* binding */ ProfilesService)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 5384);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);





class ProfilesService {
  constructor(apiService) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "apiService", void 0);
    this.apiService = apiService;
  }
  get(username) {
    return this.apiService.get('/profiles/' + username).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data.profile));
  }
  follow(username) {
    return this.apiService.post('/profiles/' + username + '/follow');
  }
  unfollow(username) {
    return this.apiService.delete('/profiles/' + username + '/follow');
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfilesService, "\u0275fac", function ProfilesService_Factory(t) {
  return new (t || ProfilesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfilesService, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ProfilesService,
  factory: ProfilesService.ɵfac,
  providedIn: 'root'
}));


/***/ }),

/***/ 3171:
/*!***********************************************!*\
  !*** ./src/app/core/services/tags.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsService": () => (/* binding */ TagsService)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 5384);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);





class TagsService {
  constructor(apiService) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "apiService", void 0);
    this.apiService = apiService;
  }
  getAll() {
    return this.apiService.get('/tags').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data.tags));
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TagsService, "\u0275fac", function TagsService_Factory(t) {
  return new (t || TagsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TagsService, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TagsService,
  factory: TagsService.ɵfac,
  providedIn: 'root'
}));


/***/ }),

/***/ 8386:
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 5384);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.service */ 7493);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6839);








class UserService {
  constructor(apiService, jwtService) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "apiService", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "jwtService", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentUserSubject", new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({}));
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentUser", this.currentUserSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)()));
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isAuthenticatedSubject", new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1));
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isAuthenticated", this.isAuthenticatedSubject.asObservable());
    this.apiService = apiService;
    this.jwtService = jwtService;
  }
  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    const token = this.jwtService.getToken();
    if (token) {
      this.apiService.get("/user").subscribe(data => {
        return this.setAuth({
          ...data.user,
          token
        });
      }, err => this.purgeAuth());
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }
  setAuth(user) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }
  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({});
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }
  attemptAuth(type, credentials) {
    const route = type === 'login' ? '/login' : '';
    return this.apiService.post(`/users${route}`, {
      user: credentials
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(data => {
      this.setAuth(data.user);
      return data;
    }));
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  // Update the user on the server (email, pass, etc)
  update(user) {
    return this.apiService.put('/user', {
      user
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(data => {
      // Update the currentUser observable
      this.currentUserSubject.next(data.user);
      return data.user;
    }));
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UserService, "\u0275fac", function UserService_Factory(t) {
  return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_jwt_service__WEBPACK_IMPORTED_MODULE_2__.JwtService));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(UserService, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac,
  providedIn: 'root'
}));


/***/ }),

/***/ 2160:
/*!****************************************************!*\
  !*** ./src/app/home/home-auth-resolver.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeAuthResolver": () => (/* binding */ HomeAuthResolver)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ 3825);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);







class HomeAuthResolver {
  constructor(router, userService) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userService", void 0);
    this.router = router;
    this.userService = userService;
  }
  resolve(route, state) {
    return this.userService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1));
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HomeAuthResolver, "\u0275fac", function HomeAuthResolver_Factory(t) {
  return new (t || HomeAuthResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_1__.UserService));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HomeAuthResolver, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: HomeAuthResolver,
  factory: HomeAuthResolver.ɵfac,
  providedIn: 'root'
}));


/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 5067);
/* harmony import */ var _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-auth-resolver.service */ 2160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);






const routes = [{
  path: '',
  component: _home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
  resolve: {
    isAuthenticated: _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_2__.HomeAuthResolver
  }
}];
class HomeRoutingModule {}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HomeRoutingModule, "\u0275fac", function HomeRoutingModule_Factory(t) {
  return new (t || HomeRoutingModule)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HomeRoutingModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: HomeRoutingModule
}));
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HomeRoutingModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
}));

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/article-helpers/article-list.component */ 870);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _shared_show_authed_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/show-authed.directive */ 893);










function HomeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "conduit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "A place to share your ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Angular");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " knowledge.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function HomeComponent_a_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_a_23_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const tag_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.setListTo("all", {
        tag: tag_r2
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", tag_r2, " ");
  }
}
const _c0 = function (a0) {
  return {
    "active": a0
  };
};
class HomeComponent {
  constructor(router, tagsService, userService, cd) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tagsService", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userService", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isAuthenticated", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "listConfig", {
      type: 'all',
      filters: {}
    });
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tags", []);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tagsLoaded", false);
    this.router = router;
    this.tagsService = tagsService;
    this.userService = userService;
    this.cd = cd;
  }
  ngOnInit() {
    this.userService.isAuthenticated.subscribe(authenticated => {
      this.isAuthenticated = authenticated;
      // set the article list accordingly
      if (authenticated) {
        this.setListTo('feed');
      } else {
        this.setListTo('all');
      }
      this.cd.markForCheck();
    });
    this.tagsService.getAll().subscribe(tags => {
      this.tags = tags;
      this.tagsLoaded = true;
      this.cd.markForCheck();
    });
  }
  trackByFn(index, item) {
    return index;
  }
  setListTo(type = '', filters = {}) {
    // If feed is requested but user is not authenticated, redirect to login
    if (type === 'feed' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }
    // Otherwise, set the list object
    this.listConfig = {
      type: type,
      filters: filters
    };
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HomeComponent, "\u0275fac", function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__.TagsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HomeComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home-page"]],
  decls: 28,
  vars: 15,
  consts: [[1, "home-page"], ["class", "banner", 4, "appShowAuthed"], [1, "container", "page"], [1, "row"], [1, "col-md-9"], [1, "feed-toggle"], [1, "nav", "nav-pills", "outline-active"], [1, "nav-item"], [1, "nav-link", 3, "ngClass", "click"], [1, "nav-item", 3, "hidden"], [1, "nav-link", "active"], [1, "ion-pound"], [3, "limit", "config"], [1, "col-md-3"], [1, "sidebar"], [1, "tag-list"], ["class", "tag-default tag-pill", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "hidden"], [1, "banner"], [1, "container"], [1, "logo-font"], [1, "tag-default", "tag-pill", 3, "click"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 9, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "ul", 6)(7, "li", 7)(8, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_8_listener() {
        return ctx.setListTo("feed");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Your Feed ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li", 7)(11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_11_listener() {
        return ctx.setListTo("all");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Global Feed ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li", 9)(14, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "app-article-list", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 13)(19, "div", 14)(20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Popular Tags");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, HomeComponent_a_23_Template, 2, 1, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Loading tags... ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " No tags are here... yet. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appShowAuthed", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, ctx.listConfig.type === "feed"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, ctx.listConfig.type === "all" && !ctx.listConfig.filters.tag));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx.listConfig.filters.tag);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.listConfig.filters.tag, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("limit", 10)("config", ctx.listConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.tags)("ngForTrackBy", ctx.trackByFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.tagsLoaded);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx.tagsLoaded || ctx.tags.length > 0);
    }
  },
  dependencies: [_shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_2__.ArticleListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _shared_show_authed_directive__WEBPACK_IMPORTED_MODULE_3__.ShowAuthedDirective],
  styles: [".nav-link[_ngcontent-%COMP%] {\r\n  cursor:pointer;\r\n}\r\n\r\n.tag-pill[_ngcontent-%COMP%]{\r\n  cursor:pointer;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi50YWctcGlsbHtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
}));


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 5067);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ 1679);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);





class HomeModule {}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HomeModule, "\u0275fac", function HomeModule_Factory(t) {
  return new (t || HomeModule)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HomeModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HomeModule
}));
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HomeModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_3__.HomeRoutingModule]
}));

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent],
    imports: [_shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_3__.HomeRoutingModule]
  });
})();

/***/ }),

/***/ 870:
/*!******************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleListComponent": () => (/* binding */ ArticleListComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _article_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-preview.component */ 4028);







function ArticleListComponent_app_article_preview_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-article-preview", 5);
  }
  if (rf & 2) {
    const article_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("article", article_r2);
  }
}
const _c0 = function (a0) {
  return {
    "active": a0
  };
};
function ArticleListComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ArticleListComponent_li_7_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const pageNumber_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.setPageTo(pageNumber_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pageNumber_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, pageNumber_r3 === ctx_r1.currentPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](pageNumber_r3);
  }
}
class ArticleListComponent {
  constructor(articlesService, cd) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "articlesService", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "limit", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "query", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "results", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loading", false);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentPage", 1);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "totalPages", [1]);
    this.articlesService = articlesService;
    this.cd = cd;
  }
  set config(config) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }
  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }
  trackByFn(index, item) {
    return index;
  }
  runQuery() {
    this.loading = true;
    this.results = [];
    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset = this.limit * (this.currentPage - 1);
    }
    this.articlesService.query(this.query).subscribe(data => {
      this.loading = false;
      this.results = data.articles;
      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);
      this.cd.markForCheck();
    });
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ArticleListComponent, "\u0275fac", function ArticleListComponent_Factory(t) {
  return new (t || ArticleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__.ArticlesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ArticleListComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ArticleListComponent,
  selectors: [["app-article-list"]],
  inputs: {
    limit: "limit",
    config: "config"
  },
  decls: 8,
  vars: 7,
  consts: [[3, "article", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "app-article-preview", 3, "hidden"], [3, "hidden"], [1, "pagination"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "article"], [1, "page-item", 3, "ngClass", "click"], [1, "page-link"]],
  template: function ArticleListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ArticleListComponent_app_article_preview_0_Template, 1, 1, "app-article-preview", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Loading articles...\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " No articles are here... yet.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nav", 2)(6, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ArticleListComponent_li_7_Template, 3, 4, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.results)("ngForTrackBy", ctx.trackByFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.loading || ctx.results.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.loading || ctx.totalPages.length <= 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.totalPages)("ngForTrackBy", ctx.trackByFn);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _article_preview_component__WEBPACK_IMPORTED_MODULE_2__.ArticlePreviewComponent],
  styles: [".page-link[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2FydGljbGUtaGVscGVycy9hcnRpY2xlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
}));


/***/ }),

/***/ 540:
/*!******************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-meta.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleMetaComponent": () => (/* binding */ ArticleMetaComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);




const _c0 = function (a1) {
  return ["/profile", a1];
};
const _c1 = ["*"];
class ArticleMetaComponent {
  constructor() {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "article", void 0);
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ArticleMetaComponent, "\u0275fac", function ArticleMetaComponent_Factory(t) {
  return new (t || ArticleMetaComponent)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ArticleMetaComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ArticleMetaComponent,
  selectors: [["app-article-meta"]],
  inputs: {
    article: "article"
  },
  ngContentSelectors: _c1,
  decls: 10,
  vars: 12,
  consts: [[1, "article-meta"], [3, "routerLink"], ["alt", "author image", 3, "src"], [1, "info"], [1, "author", 3, "routerLink"], [1, "date"]],
  template: function ArticleMetaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.article.author.username));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.article.author.image || "https://static.productionready.io/images/smiley-cyrus.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.article.author.username));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.article.author.username, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 5, ctx.article.createdAt, "longDate"), " ");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  encapsulation: 2,
  changeDetection: 0
}));


/***/ }),

/***/ 4028:
/*!*********************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-preview.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlePreviewComponent": () => (/* binding */ ArticlePreviewComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _article_meta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-meta.component */ 540);
/* harmony import */ var _buttons_favorite_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttons/favorite-button.component */ 4929);






function ArticlePreviewComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", tag_r1, " ");
  }
}
const _c0 = function (a1) {
  return ["/article", a1];
};
class ArticlePreviewComponent {
  constructor() {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "article", void 0);
  }
  trackByFn(index, item) {
    return index;
  }
  onToggleFavorite(favorited) {
    this.article['favorited'] = favorited;
    if (favorited) {
      this.article['favoritesCount']++;
    } else {
      this.article['favoritesCount']--;
    }
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ArticlePreviewComponent, "\u0275fac", function ArticlePreviewComponent_Factory(t) {
  return new (t || ArticlePreviewComponent)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ArticlePreviewComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ArticlePreviewComponent,
  selectors: [["app-article-preview"]],
  inputs: {
    article: "article"
  },
  decls: 13,
  vars: 10,
  consts: [[1, "article-preview"], [3, "article"], [1, "pull-xs-right", 3, "article", "toggle"], [1, "preview-link", 3, "routerLink"], [1, "tag-list"], ["class", "tag-default tag-pill tag-outline", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "tag-default", "tag-pill", "tag-outline"]],
  template: function ArticlePreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "app-article-meta", 1)(2, "app-favorite-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("toggle", function ArticlePreviewComponent_Template_app_favorite_button_toggle_2_listener($event) {
        return ctx.onToggleFavorite($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 3)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Read more...");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ArticlePreviewComponent_li_12_Template, 2, 1, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("article", ctx.article);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("article", ctx.article);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.article.favoritesCount, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx.article.slug));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.article.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.article.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.article.tagList)("ngForTrackBy", ctx.trackByFn);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _article_meta_component__WEBPACK_IMPORTED_MODULE_1__.ArticleMetaComponent, _buttons_favorite_button_component__WEBPACK_IMPORTED_MODULE_2__.FavoriteButtonComponent],
  encapsulation: 2,
  changeDetection: 0
}));


/***/ }),

/***/ 6579:
/*!*************************************************!*\
  !*** ./src/app/shared/article-helpers/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleListComponent": () => (/* reexport safe */ _article_list_component__WEBPACK_IMPORTED_MODULE_0__.ArticleListComponent),
/* harmony export */   "ArticleMetaComponent": () => (/* reexport safe */ _article_meta_component__WEBPACK_IMPORTED_MODULE_1__.ArticleMetaComponent),
/* harmony export */   "ArticlePreviewComponent": () => (/* reexport safe */ _article_preview_component__WEBPACK_IMPORTED_MODULE_2__.ArticlePreviewComponent)
/* harmony export */ });
/* harmony import */ var _article_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-list.component */ 870);
/* harmony import */ var _article_meta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-meta.component */ 540);
/* harmony import */ var _article_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-preview.component */ 4028);




/***/ }),

/***/ 4929:
/*!*************************************************************!*\
  !*** ./src/app/shared/buttons/favorite-button.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteButtonComponent": () => (/* binding */ FavoriteButtonComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core */ 3825);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3853);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);










const _c0 = function (a0, a1, a2) {
  return {
    "disabled": a0,
    "btn-outline-primary": a1,
    "btn-primary": a2
  };
};
const _c1 = ["*"];
class FavoriteButtonComponent {
  constructor(articlesService, router, userService, cd) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "articlesService", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userService", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "article", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggle", new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter());
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isSubmitting", false);
    this.articlesService = articlesService;
    this.router = router;
    this.userService = userService;
    this.cd = cd;
  }
  toggleFavorite() {
    this.isSubmitting = true;
    this.userService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(authenticated => {
      // Not authenticated? Push to login screen
      if (!authenticated) {
        this.router.navigateByUrl('/login');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
      }
      // Favorite the article if it isn't favorited yet
      if (!this.article.favorited) {
        return this.articlesService.favorite(this.article.slug).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(data => {
          this.isSubmitting = false;
          this.toggle.emit(true);
        }, err => this.isSubmitting = false));
        // Otherwise, unfavorite the article
      } else {
        return this.articlesService.unfavorite(this.article.slug).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(data => {
          this.isSubmitting = false;
          this.toggle.emit(false);
        }, err => this.isSubmitting = false));
      }
    })).subscribe(() => {
      this.cd.markForCheck();
    });
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(FavoriteButtonComponent, "\u0275fac", function FavoriteButtonComponent_Factory(t) {
  return new (t || FavoriteButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__.ArticlesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(FavoriteButtonComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FavoriteButtonComponent,
  selectors: [["app-favorite-button"]],
  inputs: {
    article: "article"
  },
  outputs: {
    toggle: "toggle"
  },
  ngContentSelectors: _c1,
  decls: 3,
  vars: 5,
  consts: [[1, "btn", "btn-sm", 3, "ngClass", "click"], [1, "ion-heart"]],
  template: function FavoriteButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FavoriteButtonComponent_Template_button_click_0_listener() {
        return ctx.toggleFavorite();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](1, _c0, ctx.isSubmitting, !ctx.article.favorited, ctx.article.favorited));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass],
  encapsulation: 2,
  changeDetection: 0
}));


/***/ }),

/***/ 1322:
/*!***********************************************************!*\
  !*** ./src/app/shared/buttons/follow-button.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowButtonComponent": () => (/* binding */ FollowButtonComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core */ 3825);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3853);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);










const _c0 = function (a0, a1, a2) {
  return {
    "disabled": a0,
    "btn-outline-secondary": a1,
    "btn-secondary": a2
  };
};
class FollowButtonComponent {
  constructor(profilesService, router, userService, cd) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "profilesService", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userService", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "profile", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggle", new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter());
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isSubmitting", false);
    this.profilesService = profilesService;
    this.router = router;
    this.userService = userService;
    this.cd = cd;
  }
  toggleFollowing() {
    this.isSubmitting = true;
    // TODO: remove nested subscribes, use mergeMap
    this.userService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(authenticated => {
      // Not authenticated? Push to login screen
      if (!authenticated) {
        this.router.navigateByUrl('/login');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
      }
      // Follow this profile if we aren't already
      if (!this.profile.following) {
        return this.profilesService.follow(this.profile.username).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(data => {
          this.isSubmitting = false;
          this.toggle.emit(true);
        }, err => this.isSubmitting = false));
        // Otherwise, unfollow this profile
      } else {
        return this.profilesService.unfollow(this.profile.username).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(data => {
          this.isSubmitting = false;
          this.toggle.emit(false);
        }, err => this.isSubmitting = false));
      }
    })).subscribe(() => {
      this.cd.markForCheck();
    });
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(FollowButtonComponent, "\u0275fac", function FollowButtonComponent_Factory(t) {
  return new (t || FollowButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__.ProfilesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(FollowButtonComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FollowButtonComponent,
  selectors: [["app-follow-button"]],
  inputs: {
    profile: "profile"
  },
  outputs: {
    toggle: "toggle"
  },
  decls: 3,
  vars: 7,
  consts: [[1, "btn", "btn-sm", "action-btn", 3, "ngClass", "click"], [1, "ion-plus-round"]],
  template: function FollowButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FollowButtonComponent_Template_button_click_0_listener() {
        return ctx.toggleFollowing();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](3, _c0, ctx.isSubmitting, !ctx.profile.following, ctx.profile.following));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" \u00A0 ", ctx.profile.following ? "Unfollow" : "Follow", " ", ctx.profile.username, "\n");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass],
  encapsulation: 2,
  changeDetection: 0
}));


/***/ }),

/***/ 2341:
/*!*****************************************!*\
  !*** ./src/app/shared/buttons/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteButtonComponent": () => (/* reexport safe */ _favorite_button_component__WEBPACK_IMPORTED_MODULE_0__.FavoriteButtonComponent),
/* harmony export */   "FollowButtonComponent": () => (/* reexport safe */ _follow_button_component__WEBPACK_IMPORTED_MODULE_1__.FollowButtonComponent)
/* harmony export */ });
/* harmony import */ var _favorite_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-button.component */ 4929);
/* harmony import */ var _follow_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow-button.component */ 1322);



/***/ }),

/***/ 1679:
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleListComponent": () => (/* reexport safe */ _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticleListComponent),
/* harmony export */   "ArticleMetaComponent": () => (/* reexport safe */ _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticleMetaComponent),
/* harmony export */   "ArticlePreviewComponent": () => (/* reexport safe */ _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticlePreviewComponent),
/* harmony export */   "FavoriteButtonComponent": () => (/* reexport safe */ _buttons__WEBPACK_IMPORTED_MODULE_1__.FavoriteButtonComponent),
/* harmony export */   "FollowButtonComponent": () => (/* reexport safe */ _buttons__WEBPACK_IMPORTED_MODULE_1__.FollowButtonComponent),
/* harmony export */   "FooterComponent": () => (/* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.FooterComponent),
/* harmony export */   "HeaderComponent": () => (/* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent),
/* harmony export */   "ListErrorsComponent": () => (/* reexport safe */ _list_errors_component__WEBPACK_IMPORTED_MODULE_3__.ListErrorsComponent),
/* harmony export */   "SharedModule": () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule),
/* harmony export */   "ShowAuthedDirective": () => (/* reexport safe */ _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__.ShowAuthedDirective)
/* harmony export */ });
/* harmony import */ var _article_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-helpers */ 6579);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ 2341);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ 7633);
/* harmony import */ var _list_errors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-errors.component */ 6860);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.module */ 4466);
/* harmony import */ var _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-authed.directive */ 893);







/***/ }),

/***/ 8498:
/*!***************************************************!*\
  !*** ./src/app/shared/layout/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);




class FooterComponent {
  constructor() {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "today", Date.now());
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(FooterComponent, "\u0275fac", function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(FooterComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-layout-footer"]],
  decls: 10,
  vars: 4,
  consts: [[1, "container"], ["routerLink", "/", 1, "logo-font"], [1, "attribution"], ["href", "https://thinkster.io"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "conduit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Thinkster");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ". Code licensed under MIT. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 1, ctx.today, "yyyy"), ". An interactive learning project from ");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  encapsulation: 2,
  changeDetection: 0
}));


/***/ }),

/***/ 9596:
/*!***************************************************!*\
  !*** ./src/app/shared/layout/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _show_authed_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../show-authed.directive */ 893);








function HeaderComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 4)(1, "li", 5)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 5)(5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li", 5)(8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function HeaderComponent_ul_5_img_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 16);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.currentUser.image || "https://static.productionready.io/images/smiley-cyrus.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function () {
  return {
    exact: true
  };
};
const _c1 = function (a1) {
  return ["/profile", a1];
};
function HeaderComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 4)(1, "li", 5)(2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 5)(5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u00A0New Article ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 5)(9, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\u00A0Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 5)(13, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, HeaderComponent_ul_5_img_14_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c1, ctx_r1.currentUser.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.currentUser.username, " ");
  }
}
class HeaderComponent {
  constructor(userService, cd) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userService", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentUser", void 0);
    this.userService = userService;
    this.cd = cd;
  }
  ngOnInit() {
    this.userService.currentUser.subscribe(userData => {
      this.currentUser = userData;
      this.cd.markForCheck();
    });
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HeaderComponent, "\u0275fac", function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HeaderComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-layout-header"]],
  decls: 6,
  vars: 2,
  consts: [[1, "navbar", "navbar-light"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["class", "nav navbar-nav pull-xs-right", 4, "appShowAuthed"], [1, "nav", "navbar-nav", "pull-xs-right"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/register", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/editor", "routerLinkActive", "active", 1, "nav-link"], [1, "ion-compose"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "nav-link"], [1, "ion-gear-a"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["class", "user-pic", "alt", "user image", 3, "src", 4, "ngIf"], ["alt", "user image", 1, "user-pic", 3, "src"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "conduit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HeaderComponent_ul_4_Template, 10, 0, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, HeaderComponent_ul_5_Template, 16, 7, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appShowAuthed", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appShowAuthed", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _show_authed_directive__WEBPACK_IMPORTED_MODULE_2__.ShowAuthedDirective],
  encapsulation: 2,
  changeDetection: 0
}));


/***/ }),

/***/ 7633:
/*!****************************************!*\
  !*** ./src/app/shared/layout/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* reexport safe */ _footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent),
/* harmony export */   "HeaderComponent": () => (/* reexport safe */ _header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent)
/* harmony export */ });
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ 8498);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component */ 9596);



/***/ }),

/***/ 6860:
/*!*************************************************!*\
  !*** ./src/app/shared/list-errors.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListErrorsComponent": () => (/* binding */ ListErrorsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);



function ListErrorsComponent_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r2, " ");
  }
}
function ListErrorsComponent_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListErrorsComponent_ul_0_li_1_Template, 2, 1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.errorList)("ngForTrackBy", ctx_r0.trackByFn);
  }
}
class ListErrorsComponent {
  constructor() {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "formattedErrors", []);
  }
  set errors(errorList) {
    this.formattedErrors = Object.keys(errorList.errors || {}).map(key => `${key} ${errorList.errors[key]}`);
  }
  get errorList() {
    return this.formattedErrors;
  }
  trackByFn(index, item) {
    return index;
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ListErrorsComponent, "\u0275fac", function ListErrorsComponent_Factory(t) {
  return new (t || ListErrorsComponent)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ListErrorsComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ListErrorsComponent,
  selectors: [["app-list-errors"]],
  inputs: {
    errors: "errors"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "error-messages", 4, "ngIf"], [1, "error-messages"], [4, "ngFor", "ngForOf", "ngForTrackBy"]],
  template: function ListErrorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ListErrorsComponent_ul_0_Template, 2, 2, "ul", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  encapsulation: 2,
  changeDetection: 0
}));


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _article_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-helpers */ 6579);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons */ 2341);
/* harmony import */ var _list_errors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-errors.component */ 6860);
/* harmony import */ var _show_authed_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-authed.directive */ 893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);










class SharedModule {}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SharedModule, "\u0275fac", function SharedModule_Factory(t) {
  return new (t || SharedModule)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SharedModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: SharedModule
}));
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SharedModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
}));

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_article_helpers__WEBPACK_IMPORTED_MODULE_1__.ArticleListComponent, _article_helpers__WEBPACK_IMPORTED_MODULE_1__.ArticleMetaComponent, _article_helpers__WEBPACK_IMPORTED_MODULE_1__.ArticlePreviewComponent, _buttons__WEBPACK_IMPORTED_MODULE_2__.FavoriteButtonComponent, _buttons__WEBPACK_IMPORTED_MODULE_2__.FollowButtonComponent, _list_errors_component__WEBPACK_IMPORTED_MODULE_3__.ListErrorsComponent, _show_authed_directive__WEBPACK_IMPORTED_MODULE_4__.ShowAuthedDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_article_helpers__WEBPACK_IMPORTED_MODULE_1__.ArticleListComponent, _article_helpers__WEBPACK_IMPORTED_MODULE_1__.ArticleMetaComponent, _article_helpers__WEBPACK_IMPORTED_MODULE_1__.ArticlePreviewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _buttons__WEBPACK_IMPORTED_MODULE_2__.FavoriteButtonComponent, _buttons__WEBPACK_IMPORTED_MODULE_2__.FollowButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _list_errors_component__WEBPACK_IMPORTED_MODULE_3__.ListErrorsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _show_authed_directive__WEBPACK_IMPORTED_MODULE_4__.ShowAuthedDirective]
  });
})();

/***/ }),

/***/ 893:
/*!*************************************************!*\
  !*** ./src/app/shared/show-authed.directive.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowAuthedDirective": () => (/* binding */ ShowAuthedDirective)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);





class ShowAuthedDirective {
  constructor(templateRef, userService, viewContainer) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "templateRef", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userService", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "viewContainer", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "condition", void 0);
    this.templateRef = templateRef;
    this.userService = userService;
    this.viewContainer = viewContainer;
  }
  ngOnInit() {
    this.userService.isAuthenticated.subscribe(isAuthenticated => {
      if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
  set appShowAuthed(condition) {
    this.condition = condition;
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ShowAuthedDirective, "\u0275fac", function ShowAuthedDirective_Factory(t) {
  return new (t || ShowAuthedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ShowAuthedDirective, "\u0275dir", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: ShowAuthedDirective,
  selectors: [["", "appShowAuthed", ""]],
  inputs: {
    appShowAuthed: "appShowAuthed"
  }
}));


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
const environment = {
  production: false,
  api_url: 'https://api.realworld.io/api'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
const bootstrapPromise = _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);
// Logging bootstrap information
bootstrapPromise.then(success => console.log(`Bootstrap success`)).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map