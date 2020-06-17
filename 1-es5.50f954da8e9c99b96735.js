function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1], {
  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./containers */
    "./src/app/auth/containers/index.ts");

    var routes = [{
      path: '',
      component: _containers__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
      children: [{
        path: 'create',
        component: _containers__WEBPACK_IMPORTED_MODULE_2__["CreateAccountComponent"]
      }, {
        path: 'createSuccess',
        component: _containers__WEBPACK_IMPORTED_MODULE_2__["CreateAccountSuccessComponent"]
      }, {
        path: 'login',
        component: _containers__WEBPACK_IMPORTED_MODULE_2__["LogInComponent"]
      }, {
        path: 'recoverPassword',
        component: _containers__WEBPACK_IMPORTED_MODULE_2__["RecoverPasswordComponent"]
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'create'
      }]
    }];

    var AuthRoutingModule = /*@__PURE__*/function () {
      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthRoutingModule_Factory(t) {
          return new (t || AuthRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      return AuthRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./containers */
    "./src/app/auth/containers/index.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components */
    "./src/app/auth/components/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services */
    "./src/app/auth/services/index.ts");
    /* harmony import */


    var _store_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./store/reducers */
    "./src/app/auth/store/reducers/index.ts");
    /* harmony import */


    var _store_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./store/effects */
    "./src/app/auth/store/effects/index.ts");
    /* harmony import */


    var _store_auth_sandbox_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./store/auth-sandbox.service */
    "./src/app/auth/store/auth-sandbox.service.ts");

    var AuthModule = /*@__PURE__*/function () {
      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        providers: [_services__WEBPACK_IMPORTED_MODULE_9__["AuthRepositoryService"], _store_auth_sandbox_service__WEBPACK_IMPORTED_MODULE_12__["AuthSandboxService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('auth', _store_reducers__WEBPACK_IMPORTED_MODULE_10__["reducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_store_effects__WEBPACK_IMPORTED_MODULE_11__["LoginEffects"], _store_effects__WEBPACK_IMPORTED_MODULE_11__["RecoverPasswordEffects"], _store_effects__WEBPACK_IMPORTED_MODULE_11__["GlobalEffects"], _store_effects__WEBPACK_IMPORTED_MODULE_11__["CreateAccountEffects"]])]]
      });
      return AuthModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
        declarations: [_containers__WEBPACK_IMPORTED_MODULE_7__["LogInComponent"], _containers__WEBPACK_IMPORTED_MODULE_7__["RecoverPasswordComponent"], _containers__WEBPACK_IMPORTED_MODULE_7__["CreateAccountComponent"], _containers__WEBPACK_IMPORTED_MODULE_7__["CreateAccountSuccessComponent"], _containers__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"], _components__WEBPACK_IMPORTED_MODULE_8__["SuccessMessageComponent"], _components__WEBPACK_IMPORTED_MODULE_8__["RecoverPasswordSuccessComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsFeatureModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/auth/components/index.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/components/index.ts ***!
    \******************************************/

  /*! exports provided: SuccessMessageComponent, RecoverPasswordSuccessComponent */

  /***/
  function srcAppAuthComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _success_message_success_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./success-message/success-message.component */
    "./src/app/auth/components/success-message/success-message.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SuccessMessageComponent", function () {
      return _success_message_success_message_component__WEBPACK_IMPORTED_MODULE_0__["SuccessMessageComponent"];
    });
    /* harmony import */


    var _recover_password_success_recover_password_success_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./recover-password-success/recover-password-success.component */
    "./src/app/auth/components/recover-password-success/recover-password-success.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RecoverPasswordSuccessComponent", function () {
      return _recover_password_success_recover_password_success_component__WEBPACK_IMPORTED_MODULE_1__["RecoverPasswordSuccessComponent"];
    });
    /***/

  },

  /***/
  "./src/app/auth/components/recover-password-success/recover-password-success.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/auth/components/recover-password-success/recover-password-success.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: RecoverPasswordSuccessComponent */

  /***/
  function srcAppAuthComponentsRecoverPasswordSuccessRecoverPasswordSuccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecoverPasswordSuccessComponent", function () {
      return RecoverPasswordSuccessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _success_message_success_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../success-message/success-message.component */
    "./src/app/auth/components/success-message/success-message.component.ts");

    var RecoverPasswordSuccessComponent = /*@__PURE__*/function () {
      var RecoverPasswordSuccessComponent = /*#__PURE__*/function () {
        function RecoverPasswordSuccessComponent() {
          _classCallCheck(this, RecoverPasswordSuccessComponent);
        }

        _createClass(RecoverPasswordSuccessComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RecoverPasswordSuccessComponent;
      }();

      RecoverPasswordSuccessComponent.ɵfac = function RecoverPasswordSuccessComponent_Factory(t) {
        return new (t || RecoverPasswordSuccessComponent)();
      };

      RecoverPasswordSuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RecoverPasswordSuccessComponent,
        selectors: [["app-recover-password-success"]],
        decls: 4,
        vars: 1,
        consts: [[3, "messageTitle"]],
        template: function RecoverPasswordSuccessComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-success-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " An email has been sent to your registered email address, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " click on the link to reset your password.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("messageTitle", "We sent you an Email");
          }
        },
        directives: [_success_message_success_message_component__WEBPACK_IMPORTED_MODULE_1__["SuccessMessageComponent"]],
        styles: [""],
        changeDetection: 0
      });
      return RecoverPasswordSuccessComponent;
    }();
    /***/

  },

  /***/
  "./src/app/auth/components/success-message/success-message.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/auth/components/success-message/success-message.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SuccessMessageComponent */

  /***/
  function srcAppAuthComponentsSuccessMessageSuccessMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessMessageComponent", function () {
      return SuccessMessageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var SuccessMessageComponent = /*@__PURE__*/function () {
      var SuccessMessageComponent = function SuccessMessageComponent() {
        _classCallCheck(this, SuccessMessageComponent);

        this.messageTitle = '';
      };

      SuccessMessageComponent.ɵfac = function SuccessMessageComponent_Factory(t) {
        return new (t || SuccessMessageComponent)();
      };

      SuccessMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SuccessMessageComponent,
        selectors: [["app-success-message"]],
        inputs: {
          messageTitle: "messageTitle"
        },
        ngContentSelectors: _c0,
        decls: 7,
        vars: 1,
        consts: [[1, "text-xl", "text-center", "mb-l"], [1, "valid-icon", "success-text", "col", "mb-l"], [1, "col"], [1, "text-l", "text-center", "success-text-section", "mb-l"]],
        template: function SuccessMessageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2713");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messageTitle);
          }
        },
        styles: [""],
        changeDetection: 0
      });
      return SuccessMessageComponent;
    }();
    /***/

  },

  /***/
  "./src/app/auth/containers/auth/auth.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/auth/containers/auth/auth.component.ts ***!
    \********************************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthContainersAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthComponent = /*@__PURE__*/function () {
      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent() {
          _classCallCheck(this, AuthComponent);
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthComponent;
      }();

      AuthComponent.ɵfac = function AuthComponent_Factory(t) {
        return new (t || AuthComponent)();
      };

      AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthComponent,
        selectors: [["app-auth"]],
        decls: 2,
        vars: 0,
        consts: [[1, "block-m", "auth"]],
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.auth[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: center;\n}"]
      });
      return AuthComponent;
    }();
    /***/

  },

  /***/
  "./src/app/auth/containers/create-account-success/create-account-success.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/auth/containers/create-account-success/create-account-success.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: CreateAccountSuccessComponent */

  /***/
  function srcAppAuthContainersCreateAccountSuccessCreateAccountSuccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateAccountSuccessComponent", function () {
      return CreateAccountSuccessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_auth_sandbox_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/auth-sandbox.service */
    "./src/app/auth/store/auth-sandbox.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_success_message_success_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/success-message/success-message.component */
    "./src/app/auth/components/success-message/success-message.component.ts");

    var CreateAccountSuccessComponent = /*@__PURE__*/function () {
      var CreateAccountSuccessComponent = /*#__PURE__*/function () {
        function CreateAccountSuccessComponent(authSandboxService, router) {
          _classCallCheck(this, CreateAccountSuccessComponent);

          this.authSandboxService = authSandboxService;
          this.router = router;
        }

        _createClass(CreateAccountSuccessComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setupProfile",
          value: function setupProfile() {
            return this.router.navigate(["/setupProfile"]);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authSandboxService.logout();
          }
        }]);

        return CreateAccountSuccessComponent;
      }();

      CreateAccountSuccessComponent.ɵfac = function CreateAccountSuccessComponent_Factory(t) {
        return new (t || CreateAccountSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_auth_sandbox_service__WEBPACK_IMPORTED_MODULE_1__["AuthSandboxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      CreateAccountSuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateAccountSuccessComponent,
        selectors: [["app-create-account-success"]],
        decls: 8,
        vars: 1,
        consts: [[3, "messageTitle"], [1, "text-l", "text-center", "success-text-section", "mb-l"], [1, "row", "space-between"], ["type", "button", 1, "btn", "logout", 3, "click"], ["type", "button", 1, "btn", "setup-profile", "btn-primary", 3, "click"]],
        template: function CreateAccountSuccessComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-success-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You have taken the first step to something great! You can either keep on going and set up your profile now, or log out and come back to it later ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateAccountSuccessComponent_Template_button_click_4_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Logout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateAccountSuccessComponent_Template_button_click_6_listener() {
              return ctx.setupProfile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Set Up Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("messageTitle", "Account Created!");
          }
        },
        directives: [_components_success_message_success_message_component__WEBPACK_IMPORTED_MODULE_3__["SuccessMessageComponent"]],
        styles: [""],
        changeDetection: 0
      });
      return CreateAccountSuccessComponent;
    }();
    /***/

  },

  /***/
  "./src/app/auth/containers/create-account/create-account.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/auth/containers/create-account/create-account.component.ts ***!
    \****************************************************************************/

  /*! exports provided: CreateAccountComponent */

  /***/
  function srcAppAuthContainersCreateAccountCreateAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateAccountComponent", function () {
      return CreateAccountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_account_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/account-form */
    "./src/app/auth/services/account-form/index.ts");
    /* harmony import */


    var _store_auth_sandbox_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/auth-sandbox.service */
    "./src/app/auth/store/auth-sandbox.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CreateAccountComponent_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2713");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateAccountComponent_ul_12_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateAccountComponent_ul_12_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "3 Characters Long");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateAccountComponent_ul_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateAccountComponent_ul_12_li_1_Template, 2, 0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateAccountComponent_ul_12_li_2_Template, 2, 0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userNameControl.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.userNameControl.hasError("minlength"));
      }
    }

    function CreateAccountComponent_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2713");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateAccountComponent_ul_18_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateAccountComponent_ul_18_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "8 Characters Long");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateAccountComponent_ul_18_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contain one Capital");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateAccountComponent_ul_18_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contain one Numeral");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateAccountComponent_ul_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateAccountComponent_ul_18_li_1_Template, 2, 0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateAccountComponent_ul_18_li_2_Template, 2, 0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateAccountComponent_ul_18_li_3_Template, 2, 0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateAccountComponent_ul_18_li_4_Template, 2, 0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.passwordControl.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.passwordControl.hasError("minlength"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.passwordControl.hasError("validateCapitalLetter"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.passwordControl.hasError("validateNumber"));
      }
    }

    function CreateAccountComponent_span_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2713");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateAccountComponent_ul_23_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords should match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateAccountComponent_ul_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateAccountComponent_ul_23_li_1_Template, 2, 0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.hasPasswordsMatchError);
      }
    }

    var _c0 = function _c0() {
      return ["../login"];
    };

    var _c1 = function _c1() {
      return ["/info/termsOfServices"];
    };

    var _c2 = function _c2() {
      return ["/info/privacyPolicy"];
    };

    var CreateAccountComponent = /*@__PURE__*/function () {
      var CreateAccountComponent = /*#__PURE__*/function () {
        function CreateAccountComponent(accountFormService, authSandboxService) {
          _classCallCheck(this, CreateAccountComponent);

          this.accountFormService = accountFormService;
          this.authSandboxService = authSandboxService;
          this.controlNames = _services_account_form__WEBPACK_IMPORTED_MODULE_1__["CreateAccountFormControlNames"];
          this.createAccountForm = this.accountFormService.generateCreateAccountForm();
        }

        _createClass(CreateAccountComponent, [{
          key: "submit",
          value: function submit() {
            if (this.createAccountForm.valid) {
              var userName = this.userNameControl.value;
              var password = this.passwordControl.value;
              this.authSandboxService.createAccount({
                userName: userName,
                password: password
              });
            }
          }
        }, {
          key: "passwordsGroup",
          get: function get() {
            return this.createAccountForm.get(this.controlNames.PasswordFormGroup);
          }
        }, {
          key: "passwordControl",
          get: function get() {
            return this.passwordsGroup.get(this.controlNames.Password);
          }
        }, {
          key: "confirmPasswordControl",
          get: function get() {
            return this.passwordsGroup.get(this.controlNames.ConfirmPassword);
          }
        }, {
          key: "userNameControl",
          get: function get() {
            return this.createAccountForm.get(this.controlNames.UserName);
          }
        }, {
          key: "hasErrorsPasswordControl",
          get: function get() {
            return !this.passwordControl.valid;
          }
        }, {
          key: "hasPasswordsMatchError",
          get: function get() {
            return this.passwordsGroup.hasError('validSameValues');
          }
        }, {
          key: "hasErrorsUserNameControl",
          get: function get() {
            return !this.userNameControl.valid;
          }
        }]);

        return CreateAccountComponent;
      }();

      CreateAccountComponent.ɵfac = function CreateAccountComponent_Factory(t) {
        return new (t || CreateAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_form__WEBPACK_IMPORTED_MODULE_1__["AccountFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_auth_sandbox_service__WEBPACK_IMPORTED_MODULE_2__["AuthSandboxService"]));
      };

      CreateAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateAccountComponent,
        selectors: [["app-create-account"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([], [_services_account_form__WEBPACK_IMPORTED_MODULE_1__["AccountFormService"]])],
        decls: 35,
        vars: 17,
        consts: [[1, "text-xl", "text-center"], [1, "text-l", "text-center", "sign-in-section"], [1, "link-text", 3, "routerLink"], ["name", "create-account"], [3, "formGroup"], [1, "col", "with-errors", "text-line"], [1, "control-wrap"], ["type", "text", "placeholder", "User Name", 3, "formControlName"], ["class", "valid-icon", 4, "ngIf"], ["class", "errors text-m", 4, "ngIf"], [1, "form-group-validity", 3, "formGroupName"], ["type", "password", "placeholder", "Password", 3, "formControlName"], ["type", "password", "placeholder", "Confirm Password", 3, "formControlName"], [1, "col"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "valid-icon"], [1, "errors", "text-m"], ["class", "error", 4, "ngIf"], [1, "error"]],
        template: function CreateAccountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create New Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Already have an account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CreateAccountComponent_span_11_Template, 2, 0, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateAccountComponent_ul_12_Template, 3, 2, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateAccountComponent_span_17_Template, 2, 0, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CreateAccountComponent_ul_18_Template, 5, 4, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CreateAccountComponent_span_22_Template, 2, 0, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CreateAccountComponent_ul_23_Template, 2, 1, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateAccountComponent_Template_button_click_25_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Create Account ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " By signing up, you agree to our ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Terms of Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createAccountForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.controlNames.UserName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userNameControl.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasErrorsUserNameControl && ctx.userNameControl.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", ctx.controlNames.PasswordFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.controlNames.Password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordControl.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasErrorsPasswordControl && ctx.passwordControl.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.controlNames.ConfirmPassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmPasswordControl.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasPasswordsMatchError && ctx.confirmPasswordControl.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"]],
        styles: [".sign-in-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}"]
      });
      return CreateAccountComponent;
    }();
    /***/

  },

  /***/
  "./src/app/auth/containers/index.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/containers/index.ts ***!
    \******************************************/

  /*! exports provided: RecoverPasswordComponent, LogInComponent, CreateAccountComponent, AuthComponent, CreateAccountSuccessComponent */

  /***/
  function srcAppAuthContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./recover-password/recover-password.component */
    "./src/app/auth/containers/recover-password/recover-password.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RecoverPasswordComponent", function () {
      return _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_0__["RecoverPasswordComponent"];
    });
    /* harmony import */


    var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./log-in/log-in.component */
    "./src/app/auth/containers/log-in/log-in.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LogInComponent", function () {
      return _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__["LogInComponent"];
    });
    /* harmony import */


    var _create_account_create_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./create-account/create-account.component */
    "./src/app/auth/containers/create-account/create-account.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateAccountComponent", function () {
      return _create_account_create_account_component__WEBPACK_IMPORTED_MODULE_2__["CreateAccountComponent"];
    });
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/containers/auth/auth.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"];
    });
    /* harmony import */


    var _create_account_success_create_account_success_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-account-success/create-account-success.component */
    "./src/app/auth/containers/create-account-success/create-account-success.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateAccountSuccessComponent", function () {
      return _create_account_success_create_account_success_component__WEBPACK_IMPORTED_MODULE_4__["CreateAccountSuccessComponent"];
    });
    /***/

  },

  /***/
  "./src/app/auth/containers/log-in/log-in.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/auth/containers/log-in/log-in.component.ts ***!
    \************************************************************/

  /*! exports provided: LogInComponent */

  /***/
  function srcAppAuthContainersLogInLogInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogInComponent", function () {
      return LogInComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services */
    "./src/app/auth/services/index.ts");
    /* harmony import */


    var _store_auth_sandbox_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/auth-sandbox.service */
    "./src/app/auth/store/auth-sandbox.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function LogInComponent_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.loginError$));
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "btn-disabled": a0
      };
    };

    var LogInComponent = /*@__PURE__*/function () {
      var LogInComponent = /*#__PURE__*/function () {
        function LogInComponent(logInFormService, authSandboxService) {
          _classCallCheck(this, LogInComponent);

          this.logInFormService = logInFormService;
          this.authSandboxService = authSandboxService;
          this.controlNames = _services__WEBPACK_IMPORTED_MODULE_1__["LoginFormControlNames"];
          this.loginError$ = this.authSandboxService.loginError$;
          this.loginForm = this.logInFormService.generateLoginForm();
        }

        _createClass(LogInComponent, [{
          key: "login",
          value: function login() {
            var userName = this.userNameControl.value;
            var password = this.passwordControl.value;
            this.authSandboxService.login({
              userName: userName,
              password: password
            });
          }
        }, {
          key: "userNameControl",
          get: function get() {
            return this.loginForm.get(_services__WEBPACK_IMPORTED_MODULE_1__["LoginFormControlNames"].UserName);
          }
        }, {
          key: "passwordControl",
          get: function get() {
            return this.loginForm.get(_services__WEBPACK_IMPORTED_MODULE_1__["LoginFormControlNames"].Password);
          }
        }, {
          key: "isSignInDisabled",
          get: function get() {
            return !(this.userNameControl.value && this.passwordControl.value);
          }
        }]);

        return LogInComponent;
      }();

      LogInComponent.ɵfac = function LogInComponent_Factory(t) {
        return new (t || LogInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AccountFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_auth_sandbox_service__WEBPACK_IMPORTED_MODULE_2__["AuthSandboxService"]));
      };

      LogInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LogInComponent,
        selectors: [["app-log-in"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([], [_services__WEBPACK_IMPORTED_MODULE_1__["AccountFormService"]])],
        decls: 19,
        vars: 11,
        consts: [[1, "text-xl", "mb-xl"], ["class", "error-text", 4, "ngIf"], ["name", "login"], [3, "formGroup"], [1, "col", "mb-l"], ["type", "text", "placeholder", "User Name", 3, "formControlName"], ["type", "password", "placeholder", "Password", 3, "formControlName"], ["type", "submit", 1, "btn", "btn-primary", 3, "ngClass", "disabled", "click"], [1, "row", "space-between"], ["for", "rememberMe"], ["type", "checkbox", "id", "rememberMe", 3, "formControlName"], ["routerLink", "../recoverPassword", 1, "link-text"], [1, "error-text"]],
        template: function LogInComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log In To Your Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LogInComponent_p_2_Template, 3, 3, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogInComponent_Template_button_click_11_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Sign In ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Remember Me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Forgot Password? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx.loginError$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.controlNames.UserName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.controlNames.Password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.isSignInDisabled))("disabled", ctx.isSignInDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.controlNames.RememberMe);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
        styles: [""]
      });
      return LogInComponent;
    }();
    /***/

  },

  /***/
  "./src/app/auth/containers/recover-password/recover-password.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/auth/containers/recover-password/recover-password.component.ts ***!
    \********************************************************************************/

  /*! exports provided: RecoverPasswordComponent */

  /***/
  function srcAppAuthContainersRecoverPasswordRecoverPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecoverPasswordComponent", function () {
      return RecoverPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_auth_sandbox_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/auth-sandbox.service */
    "./src/app/auth/store/auth-sandbox.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_recover_password_success_recover_password_success_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/recover-password-success/recover-password-success.component */
    "./src/app/auth/components/recover-password-success/recover-password-success.component.ts");

    function RecoverPasswordComponent_div_0_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.recoverPasswordError$));
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "btn-disabled": a0
      };
    };

    function RecoverPasswordComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Recover your password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Enter your registered email or username to reset your password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", null, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecoverPasswordComponent_div_0_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.usernameOrEmail = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RecoverPasswordComponent_div_0_li_10_Template, 3, 3, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecoverPasswordComponent_div_0_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.submit(_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Recover Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.usernameOrEmail);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, ctx_r0.recoverPasswordError$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, _r2.invalid))("disabled", _r2.invalid);
      }
    }

    function RecoverPasswordComponent_app_recover_password_success_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-recover-password-success");
      }
    }

    var RecoverPasswordComponent = /*@__PURE__*/function () {
      var RecoverPasswordComponent = /*#__PURE__*/function () {
        function RecoverPasswordComponent(authSandboxService) {
          _classCallCheck(this, RecoverPasswordComponent);

          this.authSandboxService = authSandboxService;
          this.recoverPasswordSuccess$ = this.authSandboxService.recoverPasswordSuccess$;
          this.recoverPasswordError$ = this.authSandboxService.recoverPasswordError$;
        }

        _createClass(RecoverPasswordComponent, [{
          key: "submit",
          value: function submit(f) {
            if (f.valid) {
              this.authSandboxService.recoverPassword(this.usernameOrEmail);
            }
          }
        }]);

        return RecoverPasswordComponent;
      }();

      RecoverPasswordComponent.ɵfac = function RecoverPasswordComponent_Factory(t) {
        return new (t || RecoverPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_auth_sandbox_service__WEBPACK_IMPORTED_MODULE_1__["AuthSandboxService"]));
      };

      RecoverPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RecoverPasswordComponent,
        selectors: [["app-recover-password"]],
        decls: 4,
        vars: 6,
        consts: [["class", "main-section", 4, "ngIf"], [4, "ngIf"], [1, "main-section"], [1, "text-xl", "text-center", "mb-l"], [1, "text-l", "text-center", "success-text-section", "mb-l"], ["recoverPasswordForm", "ngForm"], [1, "control-wrap", "col", "mb-l", "with-errors"], ["type", "text", "required", "", "name", "usernameOrEmail", "placeholder", "Username or Email", 3, "ngModel", "ngModelChange"], [1, "errors", "text-m"], ["class", "error", 4, "ngIf"], [1, "col"], ["type", "button", 1, "btn", "btn-primary", "recover-password", 3, "ngClass", "disabled", "click"], [1, "error"]],
        template: function RecoverPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RecoverPasswordComponent_div_0_Template, 15, 8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RecoverPasswordComponent_app_recover_password_success_2_Template, 1, 0, "app-recover-password-success", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.recoverPasswordSuccess$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.recoverPasswordSuccess$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _components_recover_password_success_recover_password_success_component__WEBPACK_IMPORTED_MODULE_4__["RecoverPasswordSuccessComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
        styles: [""]
      });
      return RecoverPasswordComponent;
    }();
    /***/

  },

  /***/
  "./src/app/auth/services/account-form/account-form.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/auth/services/account-form/account-form.service.ts ***!
    \********************************************************************/

  /*! exports provided: AccountFormService */

  /***/
  function srcAppAuthServicesAccountFormAccountFormServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountFormService", function () {
      return AccountFormService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _login_form_control_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login-form-control-names */
    "./src/app/auth/services/account-form/login-form-control-names.ts");
    /* harmony import */


    var _has_number_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./has-number.validator */
    "./src/app/auth/services/account-form/has-number.validator.ts");
    /* harmony import */


    var _has_capital_letter_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./has-capital-letter.validator */
    "./src/app/auth/services/account-form/has-capital-letter.validator.ts");
    /* harmony import */


    var _create_account_form_control_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-account-form-control-names */
    "./src/app/auth/services/account-form/create-account-form-control-names.ts");
    /* harmony import */


    var _group_same_value_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./group-same-value.validator */
    "./src/app/auth/services/account-form/group-same-value.validator.ts");

    var AccountFormService = /*@__PURE__*/function () {
      var AccountFormService = /*#__PURE__*/function () {
        function AccountFormService(fb) {
          _classCallCheck(this, AccountFormService);

          this.fb = fb;
        }

        _createClass(AccountFormService, [{
          key: "generateLoginForm",
          value: function generateLoginForm(params) {
            var _this$fb$group;

            var userNameValue = params && params[_login_form_control_names__WEBPACK_IMPORTED_MODULE_2__["LoginFormControlNames"].UserName] || '';
            var passwordValue = params && params[_login_form_control_names__WEBPACK_IMPORTED_MODULE_2__["LoginFormControlNames"].Password] || '';
            var rememberMeValue = params && params[_login_form_control_names__WEBPACK_IMPORTED_MODULE_2__["LoginFormControlNames"].RememberMe] || '';
            return this.fb.group((_this$fb$group = {}, _defineProperty(_this$fb$group, _login_form_control_names__WEBPACK_IMPORTED_MODULE_2__["LoginFormControlNames"].UserName, [userNameValue]), _defineProperty(_this$fb$group, _login_form_control_names__WEBPACK_IMPORTED_MODULE_2__["LoginFormControlNames"].Password, [passwordValue]), _defineProperty(_this$fb$group, _login_form_control_names__WEBPACK_IMPORTED_MODULE_2__["LoginFormControlNames"].RememberMe, [rememberMeValue]), _this$fb$group));
          }
        }, {
          key: "generateCreateAccountForm",
          value: function generateCreateAccountForm() {
            var _this$fb$group2, _this$fb$group3;

            return this.fb.group((_this$fb$group3 = {}, _defineProperty(_this$fb$group3, _create_account_form_control_names__WEBPACK_IMPORTED_MODULE_5__["CreateAccountFormControlNames"].UserName, ['', this.getCreateAccountUserNameValidators()]), _defineProperty(_this$fb$group3, _create_account_form_control_names__WEBPACK_IMPORTED_MODULE_5__["CreateAccountFormControlNames"].PasswordFormGroup, this.fb.group((_this$fb$group2 = {}, _defineProperty(_this$fb$group2, _create_account_form_control_names__WEBPACK_IMPORTED_MODULE_5__["CreateAccountFormControlNames"].Password, ['', this.getCreateAccountFormPasswordValidators()]), _defineProperty(_this$fb$group2, _create_account_form_control_names__WEBPACK_IMPORTED_MODULE_5__["CreateAccountFormControlNames"].ConfirmPassword, ['', this.getCreateAccountFormPasswordValidators()]), _this$fb$group2), {
              validators: _group_same_value_validator__WEBPACK_IMPORTED_MODULE_6__["validateSameValue"]
            })), _this$fb$group3));
          }
        }, {
          key: "getCreateAccountUserNameValidators",
          value: function getCreateAccountUserNameValidators() {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]);
          }
        }, {
          key: "getCreateAccountFormPasswordValidators",
          value: function getCreateAccountFormPasswordValidators() {
            return _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _has_number_validator__WEBPACK_IMPORTED_MODULE_3__["validateNumber"], _has_capital_letter_validator__WEBPACK_IMPORTED_MODULE_4__["validateCapitalLetter"]]);
          }
        }]);

        return AccountFormService;
      }();

      AccountFormService.ɵfac = function AccountFormService_Factory(t) {
        return new (t || AccountFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      AccountFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AccountFormService,
        factory: AccountFormService.ɵfac
      });
      return AccountFormService;
    }();
    /***/

  },

  /***/
  "./src/app/auth/services/account-form/create-account-form-control-names.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/auth/services/account-form/create-account-form-control-names.ts ***!
    \*********************************************************************************/

  /*! exports provided: CreateAccountFormControlNames */

  /***/
  function srcAppAuthServicesAccountFormCreateAccountFormControlNamesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateAccountFormControlNames", function () {
      return CreateAccountFormControlNames;
    });

    var CreateAccountFormControlNames = /*@__PURE__*/function (CreateAccountFormControlNames) {
      CreateAccountFormControlNames["UserName"] = "userName";
      CreateAccountFormControlNames["Password"] = "password";
      CreateAccountFormControlNames["ConfirmPassword"] = "confirmPassword";
      CreateAccountFormControlNames["PasswordFormGroup"] = "passwordFormGroup";
      return CreateAccountFormControlNames;
    }({});
    /***/

  },

  /***/
  "./src/app/auth/services/account-form/group-same-value.validator.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/auth/services/account-form/group-same-value.validator.ts ***!
    \**************************************************************************/

  /*! exports provided: validateSameValue */

  /***/
  function srcAppAuthServicesAccountFormGroupSameValueValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateSameValue", function () {
      return validateSameValue;
    });

    function validateSameValue(fg) {
      var controlValues = [];
      var isTheSame = true;

      for (var controlsKey in fg.controls) {
        controlValues.push(fg.get(controlsKey).value);
      }

      if (controlValues) {
        isTheSame = controlValues.every(function (controlValue) {
          return controlValue === controlValues[0];
        });
      }

      return isTheSame ? null : {
        validSameValues: {
          valid: false
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/auth/services/account-form/has-capital-letter.validator.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/auth/services/account-form/has-capital-letter.validator.ts ***!
    \****************************************************************************/

  /*! exports provided: validateCapitalLetter */

  /***/
  function srcAppAuthServicesAccountFormHasCapitalLetterValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateCapitalLetter", function () {
      return validateCapitalLetter;
    });

    function validateCapitalLetter(c) {
      var EMAIL_REGEXP = /[A-Z]/;
      return EMAIL_REGEXP.test(c.value) ? null : {
        validateCapitalLetter: {
          valid: false
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/auth/services/account-form/has-number.validator.ts":
  /*!********************************************************************!*\
    !*** ./src/app/auth/services/account-form/has-number.validator.ts ***!
    \********************************************************************/

  /*! exports provided: validateNumber */

  /***/
  function srcAppAuthServicesAccountFormHasNumberValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateNumber", function () {
      return validateNumber;
    });

    function validateNumber(c) {
      var EMAIL_REGEXP = /\d/;
      return EMAIL_REGEXP.test(c.value) ? null : {
        validateNumber: {
          valid: false
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/auth/services/account-form/index.ts":
  /*!*****************************************************!*\
    !*** ./src/app/auth/services/account-form/index.ts ***!
    \*****************************************************/

  /*! exports provided: LoginFormControlNames, CreateAccountFormControlNames, validateCapitalLetter, validateNumber, AccountFormService, validateSameValue */

  /***/
  function srcAppAuthServicesAccountFormIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _login_form_control_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login-form-control-names */
    "./src/app/auth/services/account-form/login-form-control-names.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginFormControlNames", function () {
      return _login_form_control_names__WEBPACK_IMPORTED_MODULE_0__["LoginFormControlNames"];
    });
    /* harmony import */


    var _create_account_form_control_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./create-account-form-control-names */
    "./src/app/auth/services/account-form/create-account-form-control-names.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateAccountFormControlNames", function () {
      return _create_account_form_control_names__WEBPACK_IMPORTED_MODULE_1__["CreateAccountFormControlNames"];
    });
    /* harmony import */


    var _has_capital_letter_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./has-capital-letter.validator */
    "./src/app/auth/services/account-form/has-capital-letter.validator.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "validateCapitalLetter", function () {
      return _has_capital_letter_validator__WEBPACK_IMPORTED_MODULE_2__["validateCapitalLetter"];
    });
    /* harmony import */


    var _has_number_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./has-number.validator */
    "./src/app/auth/services/account-form/has-number.validator.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "validateNumber", function () {
      return _has_number_validator__WEBPACK_IMPORTED_MODULE_3__["validateNumber"];
    });
    /* harmony import */


    var _account_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./account-form.service */
    "./src/app/auth/services/account-form/account-form.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccountFormService", function () {
      return _account_form_service__WEBPACK_IMPORTED_MODULE_4__["AccountFormService"];
    });
    /* harmony import */


    var _group_same_value_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./group-same-value.validator */
    "./src/app/auth/services/account-form/group-same-value.validator.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "validateSameValue", function () {
      return _group_same_value_validator__WEBPACK_IMPORTED_MODULE_5__["validateSameValue"];
    });
    /***/

  },

  /***/
  "./src/app/auth/services/account-form/login-form-control-names.ts":
  /*!************************************************************************!*\
    !*** ./src/app/auth/services/account-form/login-form-control-names.ts ***!
    \************************************************************************/

  /*! exports provided: LoginFormControlNames */

  /***/
  function srcAppAuthServicesAccountFormLoginFormControlNamesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginFormControlNames", function () {
      return LoginFormControlNames;
    });

    var LoginFormControlNames = /*@__PURE__*/function (LoginFormControlNames) {
      LoginFormControlNames["UserName"] = "userName";
      LoginFormControlNames["Password"] = "password";
      LoginFormControlNames["RememberMe"] = "rememberMe";
      return LoginFormControlNames;
    }({});
    /***/

  },

  /***/
  "./src/app/auth/services/auth-repository.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/auth/services/auth-repository.service.ts ***!
    \**********************************************************/

  /*! exports provided: AuthRepositoryService */

  /***/
  function srcAppAuthServicesAuthRepositoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRepositoryService", function () {
      return AuthRepositoryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthRepositoryService = /*@__PURE__*/function () {
      var AuthRepositoryService = /*#__PURE__*/function () {
        function AuthRepositoryService(http) {
          _classCallCheck(this, AuthRepositoryService);

          this.http = http;
        }

        _createClass(AuthRepositoryService, [{
          key: "login",
          value: function login(credential) {
            return this.http.post("/api/login", credential);
          }
        }, {
          key: "logout",
          value: function logout() {
            return this.http.post("/api/logout", {});
          }
        }, {
          key: "recoverPassword",
          value: function recoverPassword(userName) {
            return this.http.post('/api/recover', {
              term: userName
            });
          }
        }, {
          key: "createAccount",
          value: function createAccount(credential) {
            return this.http.post("/api/users", {
              userName: credential.userName,
              password: credential.password,
              email: "".concat(credential.userName, "@gmail.com")
            });
          }
        }, {
          key: "updateUserBioDetails",
          value: function updateUserBioDetails(userBio) {
            return this.http.post("/api/userBio", {
              userBio: userBio
            });
          }
        }]);

        return AuthRepositoryService;
      }();

      AuthRepositoryService.ɵfac = function AuthRepositoryService_Factory(t) {
        return new (t || AuthRepositoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      AuthRepositoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthRepositoryService,
        factory: AuthRepositoryService.ɵfac
      });
      return AuthRepositoryService;
    }();
    /***/

  },

  /***/
  "./src/app/auth/services/index.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/services/index.ts ***!
    \****************************************/

  /*! exports provided: AccountFormService, LoginFormControlNames, CreateAccountFormControlNames, AuthRepositoryService */

  /***/
  function srcAppAuthServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _account_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./account-form */
    "./src/app/auth/services/account-form/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccountFormService", function () {
      return _account_form__WEBPACK_IMPORTED_MODULE_0__["AccountFormService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginFormControlNames", function () {
      return _account_form__WEBPACK_IMPORTED_MODULE_0__["LoginFormControlNames"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateAccountFormControlNames", function () {
      return _account_form__WEBPACK_IMPORTED_MODULE_0__["CreateAccountFormControlNames"];
    });
    /* harmony import */


    var _auth_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth-repository.service */
    "./src/app/auth/services/auth-repository.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthRepositoryService", function () {
      return _auth_repository_service__WEBPACK_IMPORTED_MODULE_1__["AuthRepositoryService"];
    });
    /***/

  },

  /***/
  "./src/app/auth/store/actions/create-account.actions.ts":
  /*!**************************************************************!*\
    !*** ./src/app/auth/store/actions/create-account.actions.ts ***!
    \**************************************************************/

  /*! exports provided: createAccount, createAccountSuccess, createAccountError */

  /***/
  function srcAppAuthStoreActionsCreateAccountActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createAccount", function () {
      return createAccount;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createAccountSuccess", function () {
      return createAccountSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createAccountError", function () {
      return createAccountError;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var createAccount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Create Account', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var createAccountSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Create Account Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var createAccountError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Create Account Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/auth/store/actions/global.actions.ts":
  /*!******************************************************!*\
    !*** ./src/app/auth/store/actions/global.actions.ts ***!
    \******************************************************/

  /*! exports provided: reset */

  /***/
  function srcAppAuthStoreActionsGlobalActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reset", function () {
      return reset;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var reset = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] RESET');
    /***/
  },

  /***/
  "./src/app/auth/store/actions/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/store/actions/index.ts ***!
    \*********************************************/

  /*! exports provided: login, loginSuccess, loginError, logout, recoverPassword, recoverPasswordSuccess, recoverPasswordError, reset, createAccount, createAccountSuccess, createAccountError */

  /***/
  function srcAppAuthStoreActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _login_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login.actions */
    "./src/app/auth/store/actions/login.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "login", function () {
      return _login_actions__WEBPACK_IMPORTED_MODULE_0__["login"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "loginSuccess", function () {
      return _login_actions__WEBPACK_IMPORTED_MODULE_0__["loginSuccess"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "loginError", function () {
      return _login_actions__WEBPACK_IMPORTED_MODULE_0__["loginError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "logout", function () {
      return _login_actions__WEBPACK_IMPORTED_MODULE_0__["logout"];
    });
    /* harmony import */


    var _recover_password_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./recover-password.actions */
    "./src/app/auth/store/actions/recover-password.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "recoverPassword", function () {
      return _recover_password_actions__WEBPACK_IMPORTED_MODULE_1__["recoverPassword"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "recoverPasswordSuccess", function () {
      return _recover_password_actions__WEBPACK_IMPORTED_MODULE_1__["recoverPasswordSuccess"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "recoverPasswordError", function () {
      return _recover_password_actions__WEBPACK_IMPORTED_MODULE_1__["recoverPasswordError"];
    });
    /* harmony import */


    var _global_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./global.actions */
    "./src/app/auth/store/actions/global.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "reset", function () {
      return _global_actions__WEBPACK_IMPORTED_MODULE_2__["reset"];
    });
    /* harmony import */


    var _create_account_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-account.actions */
    "./src/app/auth/store/actions/create-account.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "createAccount", function () {
      return _create_account_actions__WEBPACK_IMPORTED_MODULE_3__["createAccount"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "createAccountSuccess", function () {
      return _create_account_actions__WEBPACK_IMPORTED_MODULE_3__["createAccountSuccess"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "createAccountError", function () {
      return _create_account_actions__WEBPACK_IMPORTED_MODULE_3__["createAccountError"];
    });
    /***/

  },

  /***/
  "./src/app/auth/store/actions/login.actions.ts":
  /*!*****************************************************!*\
    !*** ./src/app/auth/store/actions/login.actions.ts ***!
    \*****************************************************/

  /*! exports provided: login, loginSuccess, loginError, logout */

  /***/
  function srcAppAuthStoreActionsLoginActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "login", function () {
      return login;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginSuccess", function () {
      return loginSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginError", function () {
      return loginError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "logout", function () {
      return logout;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] LogIn', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loginSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] LogIn Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loginError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] LogIn Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Logout');
    /***/
  },

  /***/
  "./src/app/auth/store/actions/recover-password.actions.ts":
  /*!****************************************************************!*\
    !*** ./src/app/auth/store/actions/recover-password.actions.ts ***!
    \****************************************************************/

  /*! exports provided: recoverPassword, recoverPasswordSuccess, recoverPasswordError */

  /***/
  function srcAppAuthStoreActionsRecoverPasswordActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "recoverPassword", function () {
      return recoverPassword;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "recoverPasswordSuccess", function () {
      return recoverPasswordSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "recoverPasswordError", function () {
      return recoverPasswordError;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var recoverPassword = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Recover Password', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var recoverPasswordSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Recover Password Success');
    var recoverPasswordError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Auth] Recover Password Error', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/auth/store/auth-sandbox.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/auth/store/auth-sandbox.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthSandboxService */

  /***/
  function srcAppAuthStoreAuthSandboxServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthSandboxService", function () {
      return AuthSandboxService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./actions */
    "./src/app/auth/store/actions/index.ts");
    /* harmony import */


    var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./selectors */
    "./src/app/auth/store/selectors/index.ts");

    var AuthSandboxService = /*@__PURE__*/function () {
      var AuthSandboxService = /*#__PURE__*/function () {
        function AuthSandboxService(store) {
          _classCallCheck(this, AuthSandboxService);

          this.store = store;
          this.loginError$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAuthLoginError"]));
          this.loginInProgress$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAuthLoginInProgress"]));
          this.loggedIn$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAuthLoggedIn"]));
          this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAuthUser"]));
          this.recoverPasswordSuccess$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_3__["selectRecoverPasswordSuccess"]));
          this.recoverPasswordError$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_3__["selectRecoverPasswordError"]));
        }

        _createClass(AuthSandboxService, [{
          key: "login",
          value: function login(credential) {
            this.store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["login"])(Object.assign({}, credential)));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["logout"])());
          }
        }, {
          key: "recoverPassword",
          value: function recoverPassword(userName) {
            this.store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["recoverPassword"])({
              userName: userName
            }));
          }
        }, {
          key: "resetAll",
          value: function resetAll() {
            this.store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["reset"])());
          }
        }, {
          key: "createAccount",
          value: function createAccount(credential) {
            this.store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["createAccount"])(credential));
          }
        }]);

        return AuthSandboxService;
      }();

      AuthSandboxService.ɵfac = function AuthSandboxService_Factory(t) {
        return new (t || AuthSandboxService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
      };

      AuthSandboxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthSandboxService,
        factory: AuthSandboxService.ɵfac
      });
      return AuthSandboxService;
    }();
    /***/

  },

  /***/
  "./src/app/auth/store/auth-state.dto.ts":
  /*!**********************************************!*\
    !*** ./src/app/auth/store/auth-state.dto.ts ***!
    \**********************************************/

  /*! exports provided: LoadingStateBase, loginInitialState, recoverPasswordInitialState, createAccountInitialState, initialState, selectAuthFeature */

  /***/
  function srcAppAuthStoreAuthStateDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingStateBase", function () {
      return LoadingStateBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginInitialState", function () {
      return loginInitialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "recoverPasswordInitialState", function () {
      return recoverPasswordInitialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createAccountInitialState", function () {
      return createAccountInitialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAuthFeature", function () {
      return selectAuthFeature;
    });
    /* harmony import */


    var _dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../dto */
    "./src/app/auth/dto/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var LoadingStateBase = function LoadingStateBase() {
      _classCallCheck(this, LoadingStateBase);
    };

    var loginInitialState = {
      user: _dto__WEBPACK_IMPORTED_MODULE_0__["UserDto"].empty(),
      loading: _dto__WEBPACK_IMPORTED_MODULE_0__["LoadingState"].NotStarted,
      error: null
    };
    var recoverPasswordInitialState = {
      loading: _dto__WEBPACK_IMPORTED_MODULE_0__["LoadingState"].NotStarted,
      error: null
    };
    var createAccountInitialState = {
      loading: _dto__WEBPACK_IMPORTED_MODULE_0__["LoadingState"].NotStarted,
      error: null
    };
    var initialState = {
      login: loginInitialState,
      recoverPassword: recoverPasswordInitialState,
      createAccount: createAccountInitialState
    };
    var selectAuthFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('auth');
    /***/
  },

  /***/
  "./src/app/auth/store/effects/create-account.effects.ts":
  /*!**************************************************************!*\
    !*** ./src/app/auth/store/effects/create-account.effects.ts ***!
    \**************************************************************/

  /*! exports provided: CreateAccountEffects */

  /***/
  function srcAppAuthStoreEffectsCreateAccountEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateAccountEffects", function () {
      return CreateAccountEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions */
    "./src/app/auth/store/actions/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services */
    "./src/app/auth/services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CreateAccountEffects = /*@__PURE__*/function () {
      var CreateAccountEffects = function CreateAccountEffects(actions$, authRepositoryService, router) {
        var _this = this;

        _classCallCheck(this, CreateAccountEffects);

        this.actions$ = actions$;
        this.authRepositoryService = authRepositoryService;
        this.router = router;
        this.createAccount$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
          return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["createAccount"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return _this.authRepositoryService.createAccount({
              userName: action.userName,
              password: action.password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
              return _actions__WEBPACK_IMPORTED_MODULE_2__["createAccountSuccess"]({
                user: user
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions__WEBPACK_IMPORTED_MODULE_2__["createAccountError"]({
                error: e.error.message
              }));
            }));
          }));
        });
        this.createAccountSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
          return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["createAccountSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            return _this.router.navigate(["/auth/createSuccess"]);
          }));
        }, {
          dispatch: false
        });
      };

      CreateAccountEffects.ɵfac = function CreateAccountEffects_Factory(t) {
        return new (t || CreateAccountEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_5__["AuthRepositoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      CreateAccountEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CreateAccountEffects,
        factory: CreateAccountEffects.ɵfac
      });
      return CreateAccountEffects;
    }();
    /***/

  },

  /***/
  "./src/app/auth/store/effects/global.effects.ts":
  /*!******************************************************!*\
    !*** ./src/app/auth/store/effects/global.effects.ts ***!
    \******************************************************/

  /*! exports provided: GlobalEffects */

  /***/
  function srcAppAuthStoreEffectsGlobalEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalEffects", function () {
      return GlobalEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions */
    "./src/app/auth/store/actions/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services */
    "./src/app/auth/services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GlobalEffects = /*@__PURE__*/function () {
      var GlobalEffects = function GlobalEffects(actions$, authRepositoryService, router) {
        var _this2 = this;

        _classCallCheck(this, GlobalEffects);

        this.actions$ = actions$;
        this.authRepositoryService = authRepositoryService;
        this.router = router;
        this.reset$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["reset"]), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_) {
            return _this2.router.navigate(["/auth/login"]);
          })));
        }, {
          dispatch: false
        });
      };

      GlobalEffects.ɵfac = function GlobalEffects_Factory(t) {
        return new (t || GlobalEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_5__["AuthRepositoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      GlobalEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GlobalEffects,
        factory: GlobalEffects.ɵfac
      });
      return GlobalEffects;
    }();
    /***/

  },

  /***/
  "./src/app/auth/store/effects/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/store/effects/index.ts ***!
    \*********************************************/

  /*! exports provided: LoginEffects, RecoverPasswordEffects, GlobalEffects, CreateAccountEffects */

  /***/
  function srcAppAuthStoreEffectsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _login_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login.effects */
    "./src/app/auth/store/effects/login.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginEffects", function () {
      return _login_effects__WEBPACK_IMPORTED_MODULE_0__["LoginEffects"];
    });
    /* harmony import */


    var _recover_password_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./recover-password.effects */
    "./src/app/auth/store/effects/recover-password.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RecoverPasswordEffects", function () {
      return _recover_password_effects__WEBPACK_IMPORTED_MODULE_1__["RecoverPasswordEffects"];
    });
    /* harmony import */


    var _global_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./global.effects */
    "./src/app/auth/store/effects/global.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GlobalEffects", function () {
      return _global_effects__WEBPACK_IMPORTED_MODULE_2__["GlobalEffects"];
    });
    /* harmony import */


    var _create_account_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-account.effects */
    "./src/app/auth/store/effects/create-account.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateAccountEffects", function () {
      return _create_account_effects__WEBPACK_IMPORTED_MODULE_3__["CreateAccountEffects"];
    });
    /***/

  },

  /***/
  "./src/app/auth/store/effects/login.effects.ts":
  /*!*****************************************************!*\
    !*** ./src/app/auth/store/effects/login.effects.ts ***!
    \*****************************************************/

  /*! exports provided: LoginEffects */

  /***/
  function srcAppAuthStoreEffectsLoginEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginEffects", function () {
      return LoginEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions */
    "./src/app/auth/store/actions/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services */
    "./src/app/auth/services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginEffects = /*@__PURE__*/function () {
      var LoginEffects = function LoginEffects(actions$, authRepositoryService, router) {
        var _this3 = this;

        _classCallCheck(this, LoginEffects);

        this.actions$ = actions$;
        this.authRepositoryService = authRepositoryService;
        this.router = router;
        this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
          return _this3.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["login"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return _this3.authRepositoryService.login({
              userName: action.userName,
              password: action.password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
              return _actions__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"]({
                user: user
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions__WEBPACK_IMPORTED_MODULE_2__["loginError"]({
                error: e.error.message
              }));
            }));
          }));
        });
        this.logout$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
          return _this3.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_2__["logout"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) {
            return _this3.authRepositoryService.logout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_) {
              return _this3.router.navigate(["/auth/login"]);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
              return _this3.router.navigate(["/auth/login"]);
            }));
          }));
        }, {
          dispatch: false
        });
      };

      LoginEffects.ɵfac = function LoginEffects_Factory(t) {
        return new (t || LoginEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_5__["AuthRepositoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      LoginEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoginEffects,
        factory: LoginEffects.ɵfac
      });
      return LoginEffects;
    }();
    /***/

  },

  /***/
  "./src/app/auth/store/effects/recover-password.effects.ts":
  /*!****************************************************************!*\
    !*** ./src/app/auth/store/effects/recover-password.effects.ts ***!
    \****************************************************************/

  /*! exports provided: RecoverPasswordEffects */

  /***/
  function srcAppAuthStoreEffectsRecoverPasswordEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecoverPasswordEffects", function () {
      return RecoverPasswordEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions */
    "./src/app/auth/store/actions/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services */
    "./src/app/auth/services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RecoverPasswordEffects = /*@__PURE__*/function () {
      var RecoverPasswordEffects = function RecoverPasswordEffects(actions$, authRepositoryService, router) {
        var _this4 = this;

        _classCallCheck(this, RecoverPasswordEffects);

        this.actions$ = actions$;
        this.authRepositoryService = authRepositoryService;
        this.router = router;
        this.recoverPassword$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this4.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["recoverPassword"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (action) {
            return _this4.authRepositoryService.recoverPassword(action.userName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_) {
              return _actions__WEBPACK_IMPORTED_MODULE_4__["recoverPasswordSuccess"]();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["recoverPasswordError"]({
                error: e.error.message
              }));
            }));
          }));
        });
        this.recoverPasswordSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this4.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["recoverPasswordSuccess"]), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions__WEBPACK_IMPORTED_MODULE_4__["reset"]());
          })));
        });
      };

      RecoverPasswordEffects.ɵfac = function RecoverPasswordEffects_Factory(t) {
        return new (t || RecoverPasswordEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_5__["AuthRepositoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      RecoverPasswordEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RecoverPasswordEffects,
        factory: RecoverPasswordEffects.ɵfac
      });
      return RecoverPasswordEffects;
    }();
    /***/

  },

  /***/
  "./src/app/auth/store/reducers/create-account.reducer.ts":
  /*!***************************************************************!*\
    !*** ./src/app/auth/store/reducers/create-account.reducer.ts ***!
    \***************************************************************/

  /*! exports provided: createAccountReducer */

  /***/
  function srcAppAuthStoreReducersCreateAccountReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createAccountReducer", function () {
      return createAccountReducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../dto */
    "./src/app/auth/dto/index.ts");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions */
    "./src/app/auth/store/actions/index.ts");
    /* harmony import */


    var _auth_state_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth-state.dto */
    "./src/app/auth/store/auth-state.dto.ts");

    var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_auth_state_dto__WEBPACK_IMPORTED_MODULE_3__["createAccountInitialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["createAccount"], function (state) {
      return Object.assign(Object.assign({}, state), {
        loading: _dto__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].Loading,
        error: null
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["createAccountError"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        loading: _dto__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].Failed,
        error: action.error
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["createAccountSuccess"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        loading: _dto__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].Loaded,
        error: null
      });
    }));

    function createAccountReducer(state, action) {
      return reducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/auth/store/reducers/index.ts":
  /*!**********************************************!*\
    !*** ./src/app/auth/store/reducers/index.ts ***!
    \**********************************************/

  /*! exports provided: loginReducer, recoverPasswordReducer, createAccountReducer, reducers */

  /***/
  function srcAppAuthStoreReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var _login_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login.reducer */
    "./src/app/auth/store/reducers/login.reducer.ts");
    /* harmony import */


    var _recover_password_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./recover-password.reducer */
    "./src/app/auth/store/reducers/recover-password.reducer.ts");
    /* harmony import */


    var _create_account_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./create-account.reducer */
    "./src/app/auth/store/reducers/create-account.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "loginReducer", function () {
      return _login_reducer__WEBPACK_IMPORTED_MODULE_0__["loginReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "recoverPasswordReducer", function () {
      return _recover_password_reducer__WEBPACK_IMPORTED_MODULE_1__["recoverPasswordReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "createAccountReducer", function () {
      return _create_account_reducer__WEBPACK_IMPORTED_MODULE_2__["createAccountReducer"];
    });

    var reducers = {
      login: _login_reducer__WEBPACK_IMPORTED_MODULE_0__["loginReducer"],
      recoverPassword: _recover_password_reducer__WEBPACK_IMPORTED_MODULE_1__["recoverPasswordReducer"],
      createAccount: _create_account_reducer__WEBPACK_IMPORTED_MODULE_2__["createAccountReducer"]
    };
    /***/
  },

  /***/
  "./src/app/auth/store/reducers/login.reducer.ts":
  /*!******************************************************!*\
    !*** ./src/app/auth/store/reducers/login.reducer.ts ***!
    \******************************************************/

  /*! exports provided: loginReducer */

  /***/
  function srcAppAuthStoreReducersLoginReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginReducer", function () {
      return loginReducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../dto */
    "./src/app/auth/dto/index.ts");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions */
    "./src/app/auth/store/actions/index.ts");
    /* harmony import */


    var _auth_state_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth-state.dto */
    "./src/app/auth/store/auth-state.dto.ts");

    var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_auth_state_dto__WEBPACK_IMPORTED_MODULE_3__["loginInitialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["login"], function (state) {
      return Object.assign(Object.assign({}, state), {
        loading: _dto__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].Loading,
        error: null
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["loginError"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        loading: _dto__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].Failed,
        error: action.error
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"], _actions__WEBPACK_IMPORTED_MODULE_2__["createAccountSuccess"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        loading: _dto__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].Loaded,
        error: null,
        user: action.user
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["logout"], _actions__WEBPACK_IMPORTED_MODULE_2__["reset"], function (state, action) {
      return Object.assign({}, _auth_state_dto__WEBPACK_IMPORTED_MODULE_3__["loginInitialState"]);
    }));

    function loginReducer(state, action) {
      return reducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/auth/store/reducers/recover-password.reducer.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/auth/store/reducers/recover-password.reducer.ts ***!
    \*****************************************************************/

  /*! exports provided: recoverPasswordReducer */

  /***/
  function srcAppAuthStoreReducersRecoverPasswordReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "recoverPasswordReducer", function () {
      return recoverPasswordReducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../dto */
    "./src/app/auth/dto/index.ts");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions */
    "./src/app/auth/store/actions/index.ts");
    /* harmony import */


    var _auth_state_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth-state.dto */
    "./src/app/auth/store/auth-state.dto.ts");

    var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_auth_state_dto__WEBPACK_IMPORTED_MODULE_3__["recoverPasswordInitialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["recoverPassword"], function (state) {
      return Object.assign(Object.assign({}, state), {
        loading: _dto__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].Loading,
        error: null
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["recoverPasswordError"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        loading: _dto__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].Failed,
        error: action.error
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["recoverPasswordSuccess"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        loading: _dto__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].Loaded,
        error: null
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["logout"], _actions__WEBPACK_IMPORTED_MODULE_2__["reset"], function (state, action) {
      return Object.assign({}, _auth_state_dto__WEBPACK_IMPORTED_MODULE_3__["recoverPasswordInitialState"]);
    }));

    function recoverPasswordReducer(state, action) {
      return reducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/auth/store/selectors/index.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/store/selectors/index.ts ***!
    \***********************************************/

  /*! exports provided: selectLoginState, selectAuthUser, selectAuthLoggedIn, selectAuthLoginError, selectAuthLoginInProgress, selectRecoverPasswordState, selectRecoverPasswordSuccess, selectRecoverPasswordError, selectRecoverPasswordInProgress */

  /***/
  function srcAppAuthStoreSelectorsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _login_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login.selector */
    "./src/app/auth/store/selectors/login.selector.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectLoginState", function () {
      return _login_selector__WEBPACK_IMPORTED_MODULE_0__["selectLoginState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectAuthUser", function () {
      return _login_selector__WEBPACK_IMPORTED_MODULE_0__["selectAuthUser"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectAuthLoggedIn", function () {
      return _login_selector__WEBPACK_IMPORTED_MODULE_0__["selectAuthLoggedIn"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectAuthLoginError", function () {
      return _login_selector__WEBPACK_IMPORTED_MODULE_0__["selectAuthLoginError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectAuthLoginInProgress", function () {
      return _login_selector__WEBPACK_IMPORTED_MODULE_0__["selectAuthLoginInProgress"];
    });
    /* harmony import */


    var _recover_password_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./recover-password.selector */
    "./src/app/auth/store/selectors/recover-password.selector.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectRecoverPasswordState", function () {
      return _recover_password_selector__WEBPACK_IMPORTED_MODULE_1__["selectRecoverPasswordState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectRecoverPasswordSuccess", function () {
      return _recover_password_selector__WEBPACK_IMPORTED_MODULE_1__["selectRecoverPasswordSuccess"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectRecoverPasswordError", function () {
      return _recover_password_selector__WEBPACK_IMPORTED_MODULE_1__["selectRecoverPasswordError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectRecoverPasswordInProgress", function () {
      return _recover_password_selector__WEBPACK_IMPORTED_MODULE_1__["selectRecoverPasswordInProgress"];
    });
    /***/

  },

  /***/
  "./src/app/auth/store/selectors/login.selector.ts":
  /*!********************************************************!*\
    !*** ./src/app/auth/store/selectors/login.selector.ts ***!
    \********************************************************/

  /*! exports provided: selectLoginState, selectAuthUser, selectAuthLoggedIn, selectAuthLoginError, selectAuthLoginInProgress */

  /***/
  function srcAppAuthStoreSelectorsLoginSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectLoginState", function () {
      return selectLoginState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAuthUser", function () {
      return selectAuthUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAuthLoggedIn", function () {
      return selectAuthLoggedIn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAuthLoginError", function () {
      return selectAuthLoginError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAuthLoginInProgress", function () {
      return selectAuthLoginInProgress;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../dto */
    "./src/app/auth/dto/index.ts");
    /* harmony import */


    var _auth_state_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth-state.dto */
    "./src/app/auth/store/auth-state.dto.ts");

    var selectLoginState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_auth_state_dto__WEBPACK_IMPORTED_MODULE_2__["selectAuthFeature"], function (state) {
      return state.login;
    });
    var selectAuthUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLoginState, function (state) {
      return state.user;
    });
    var selectAuthLoggedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLoginState, function (state) {
      return state.loading === _dto__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].Loaded;
    });
    var selectAuthLoginError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLoginState, function (state) {
      return state.error;
    });
    var selectAuthLoginInProgress = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLoginState, function (state) {
      return state.loading === _dto__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].Loading;
    });
    /***/
  },

  /***/
  "./src/app/auth/store/selectors/recover-password.selector.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/auth/store/selectors/recover-password.selector.ts ***!
    \*******************************************************************/

  /*! exports provided: selectRecoverPasswordState, selectRecoverPasswordSuccess, selectRecoverPasswordError, selectRecoverPasswordInProgress */

  /***/
  function srcAppAuthStoreSelectorsRecoverPasswordSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectRecoverPasswordState", function () {
      return selectRecoverPasswordState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectRecoverPasswordSuccess", function () {
      return selectRecoverPasswordSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectRecoverPasswordError", function () {
      return selectRecoverPasswordError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectRecoverPasswordInProgress", function () {
      return selectRecoverPasswordInProgress;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../dto */
    "./src/app/auth/dto/index.ts");
    /* harmony import */


    var _auth_state_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth-state.dto */
    "./src/app/auth/store/auth-state.dto.ts");

    var selectRecoverPasswordState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_auth_state_dto__WEBPACK_IMPORTED_MODULE_2__["selectAuthFeature"], function (state) {
      return state.recoverPassword;
    });
    var selectRecoverPasswordSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRecoverPasswordState, function (state) {
      return state.loading === _dto__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].Loaded;
    });
    var selectRecoverPasswordError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRecoverPasswordState, function (state) {
      return state.error;
    });
    var selectRecoverPasswordInProgress = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRecoverPasswordState, function (state) {
      return state.loading === _dto__WEBPACK_IMPORTED_MODULE_1__["LoadingState"].Loading;
    });
    /***/
  }
}]);