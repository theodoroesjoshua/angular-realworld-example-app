"use strict";
(self["webpackChunkang2_conduit"] = self["webpackChunkang2_conduit"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 9513:
/*!*******************************************************!*\
  !*** ./src/app/profile/profile-articles.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileArticlesComponent": () => (/* binding */ ProfileArticlesComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/article-helpers/article-list.component */ 870);






class ProfileArticlesComponent {
  constructor(route, router, cd) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "route", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "profile", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "articlesConfig", {
      type: 'all',
      filters: {}
    });
    this.route = route;
    this.router = router;
    this.cd = cd;
  }
  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.profile = data.profile;
      this.articlesConfig = {
        type: 'all',
        filters: {}
      }; // Only method I found to refresh article load on swap
      this.articlesConfig.filters.author = this.profile.username;
      this.cd.markForCheck();
    });
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileArticlesComponent, "\u0275fac", function ProfileArticlesComponent_Factory(t) {
  return new (t || ProfileArticlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileArticlesComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProfileArticlesComponent,
  selectors: [["app-profile-articles"]],
  decls: 1,
  vars: 2,
  consts: [[3, "limit", "config"]],
  template: function ProfileArticlesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-article-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("limit", 10)("config", ctx.articlesConfig);
    }
  },
  dependencies: [_shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_1__.ArticleListComponent],
  encapsulation: 2,
  changeDetection: 0
}));


/***/ }),

/***/ 6873:
/*!********************************************************!*\
  !*** ./src/app/profile/profile-favorites.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileFavoritesComponent": () => (/* binding */ ProfileFavoritesComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/article-helpers/article-list.component */ 870);






class ProfileFavoritesComponent {
  constructor(route, cd) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "route", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "profile", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "favoritesConfig", {
      type: 'all',
      filters: {}
    });
    this.route = route;
    this.cd = cd;
  }
  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.profile = data.profile;
      this.favoritesConfig = {
        ...this.favoritesConfig
      };
      this.favoritesConfig.filters.favorited = this.profile.username;
      this.cd.markForCheck();
    });
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileFavoritesComponent, "\u0275fac", function ProfileFavoritesComponent_Factory(t) {
  return new (t || ProfileFavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileFavoritesComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProfileFavoritesComponent,
  selectors: [["app-profile-favorites"]],
  decls: 1,
  vars: 2,
  consts: [[3, "limit", "config"]],
  template: function ProfileFavoritesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-article-list", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("limit", 10)("config", ctx.favoritesConfig);
    }
  },
  dependencies: [_shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_1__.ArticleListComponent],
  encapsulation: 2,
  changeDetection: 0
}));


/***/ }),

/***/ 102:
/*!*****************************************************!*\
  !*** ./src/app/profile/profile-resolver.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileResolver": () => (/* binding */ ProfileResolver)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ 3825);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);







class ProfileResolver {
  constructor(profilesService, router) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "profilesService", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    this.profilesService = profilesService;
    this.router = router;
  }
  resolve(route, state) {
    return this.profilesService.get(route.params['username']).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => this.router.navigateByUrl('/')));
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileResolver, "\u0275fac", function ProfileResolver_Factory(t) {
  return new (t || ProfileResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_1__.ProfilesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileResolver, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ProfileResolver,
  factory: ProfileResolver.ɵfac,
  providedIn: 'root'
}));


/***/ }),

/***/ 6829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _profile_articles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-articles.component */ 9513);
/* harmony import */ var _profile_favorites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-favorites.component */ 6873);
/* harmony import */ var _profile_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-resolver.service */ 102);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ 6630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);








const routes = [{
  path: ':username',
  component: _profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent,
  resolve: {
    profile: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_3__.ProfileResolver
  },
  children: [{
    path: '',
    component: _profile_articles_component__WEBPACK_IMPORTED_MODULE_1__.ProfileArticlesComponent
  }, {
    path: 'favorites',
    component: _profile_favorites_component__WEBPACK_IMPORTED_MODULE_2__.ProfileFavoritesComponent
  }]
}];
class ProfileRoutingModule {}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileRoutingModule, "\u0275fac", function ProfileRoutingModule_Factory(t) {
  return new (t || ProfileRoutingModule)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileRoutingModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: ProfileRoutingModule
}));
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileRoutingModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
}));

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 6630:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ 3825);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3853);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _shared_buttons_follow_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/buttons/follow-button.component */ 1322);









const _c0 = function () {
  return ["/settings"];
};
const _c1 = function () {
  return {
    exact: true
  };
};
const _c2 = function (a1) {
  return ["/profile", a1];
};
const _c3 = function (a1) {
  return ["/profile", a1, "favorites"];
};
class ProfileComponent {
  constructor(route, userService, cd) {
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "route", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userService", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cd", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "profile", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentUser", void 0);
    (0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isUser", void 0);
    this.route = route;
    this.userService = userService;
    this.cd = cd;
  }
  ngOnInit() {
    this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(data => {
      this.profile = data.profile;
      // Load the current user's data.
      return this.userService.currentUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(userData => {
        this.currentUser = userData;
        this.isUser = this.currentUser.username === this.profile.username;
      }));
    })).subscribe(() => {
      this.cd.markForCheck();
    });
  }
  onToggleFollowing(following) {
    this.profile.following = following;
  }
}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileComponent, "\u0275fac", function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile-page"]],
  decls: 26,
  vars: 18,
  consts: [[1, "profile-page"], [1, "user-info"], [1, "container"], [1, "row"], [1, "col-xs-12", "col-md-10", "offset-md-1"], ["alt", "user image", 1, "user-img", 3, "src"], [3, "hidden", "profile", "toggle"], [1, "btn", "btn-sm", "btn-outline-secondary", "action-btn", 3, "routerLink", "hidden"], [1, "ion-gear-a"], [1, "articles-toggle"], [1, "nav", "nav-pills", "outline-active"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions", "routerLink"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "app-follow-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("toggle", function ProfileComponent_Template_app_follow_button_toggle_10_listener($event) {
        return ctx.onToggleFollowing($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Edit Profile Settings ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 2)(15, "div", 3)(16, "div", 4)(17, "div", 9)(18, "ul", 10)(19, "li", 11)(20, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " My Posts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "li", 11)(23, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Favorited Posts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.profile.image || "https://static.productionready.io/images/smiley-cyrus.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.profile.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.profile.bio);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.isUser)("profile", ctx.profile);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c0))("hidden", !ctx.isUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](13, _c2, ctx.profile.username));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c3, ctx.profile.username));
    }
  },
  dependencies: [_shared_buttons_follow_button_component__WEBPACK_IMPORTED_MODULE_2__.FollowButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive],
  encapsulation: 2,
  changeDetection: 0
}));


/***/ }),

/***/ 4523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _profile_articles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-articles.component */ 9513);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component */ 6630);
/* harmony import */ var _profile_favorites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-favorites.component */ 6873);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ 1679);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ 6829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);







class ProfileModule {}
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileModule, "\u0275fac", function ProfileModule_Factory(t) {
  return new (t || ProfileModule)();
});
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: ProfileModule
}));
(0,C_Users_Joshua_Desktop_BACHELORARBEIT_Repositories_Realworld_angular_realworld_example_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ProfileModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_shared__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__.ProfileRoutingModule]
}));

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProfileModule, {
    declarations: [_profile_articles_component__WEBPACK_IMPORTED_MODULE_1__.ProfileArticlesComponent, _profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent, _profile_favorites_component__WEBPACK_IMPORTED_MODULE_3__.ProfileFavoritesComponent],
    imports: [_shared__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__.ProfileRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map