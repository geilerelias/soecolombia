(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    return {
      name: "",
      email: "",
      password: "",
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      show1: false,
      show2: false,
      snackbar: false,
      color: "",
      text: "",
      mode: "",
      response: "",
      valid: true,
      nameRules: [function (v) {
        return !!v || "El nombre es requerido";
      }, function (v) {
        return v && v.length <= 100 || "El nombre no puede tener mas de 100 caracteres";
      }],
      emailRules: [function (v) {
        return !!v || "E-mail es requerido";
      }, function (v) {
        return /.+@.+\..+/.test(v) || "E-mail invalido";
      }],
      passwordRules: [function (v) {
        return !!v || "Requerido.";
      }, function (v) {
        return v && v.length >= 4 || "Mínimo 4 caracteres";
      }],
      passwordConfirmRules: [function (v) {
        return !!v || "Requerido.";
      }, function (v) {
        return v && v.length >= 4 || "Mínimo 4 caracteres";
      }, function (v) {
        return v === _this.user.password || "No coinciden.";
      }],
      overlay: false
    };
  },
  methods: {
    validate: function validate() {
      if (!this.$refs.form.validate()) {
        return;
      }

      this.register();
    },
    reset: function reset() {
      this.$refs.form.reset();
    },
    resetValidation: function resetValidation() {
      this.$refs.form.resetValidation();
    },
    register: function register() {
      var _this2 = this;

      console.log(this.user);
      var newUser = this.user;
      this.overlay = true;
      axios.post("/api/register", newUser).then(function (response) {
        Swal.fire(response.data.status === 201 ? "!Buen trabajo! 😀" : "Oops... 😮", response.data.message, response.data.status === 201 ? "success" : "error").then(function (result) {
          if (response.data.status === 201) {
            _this2.$router.push("/login");
          }
        });

        _this2.reset();
      })["catch"](function (error) {
        _this2.overlay = false;
        _this2.color = "red darken-3";
        _this2.mode = "vertical";
        console.log(error);
        console.log(error.response.data);
        console.log(error.response.data.message);
        var array = error.response.data.errors;
        console.log(array);
        _this2.text = "";

        for (var clave in array) {
          _this2.text += clave + ": " + array[clave] + "\n ";
        }

        console.log(_this2.text);
        _this2.text += error.response.data.message;
        Swal.fire("Oops... 😮", _this2.text, "error");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "inspire" } },
    [
      _c("header-app-component"),
      _vm._v(" "),
      _c("drawer-app-component"),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            { attrs: { fluid: "" } },
            [
              _c(
                "v-layout",
                { attrs: { "align-start": "", "justify-center": "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm8: "", md4: "" } },
                    [
                      [
                        _c(
                          "v-card",
                          {
                            staticClass: "mt-5",
                            staticStyle: { "border-radius": "0px!important" }
                          },
                          [
                            _c(
                              "v-toolbar",
                              { attrs: { dark: "", flat: "" } },
                              [
                                _c("v-toolbar-title", [
                                  _vm._v("Formulario de Registro")
                                ]),
                                _vm._v(" "),
                                _c("v-spacer")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-form",
                              {
                                ref: "form",
                                staticClass: "pa-5",
                                attrs: { "lazy-validation": "" },
                                model: {
                                  value: _vm.valid,
                                  callback: function($$v) {
                                    _vm.valid = $$v
                                  },
                                  expression: "valid"
                                }
                              },
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    clearable: "",
                                    counter: 100,
                                    rules: _vm.nameRules,
                                    label: "Nombre",
                                    required: ""
                                  },
                                  model: {
                                    value: _vm.user.name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.user, "name", $$v)
                                    },
                                    expression: "user.name"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-text-field", {
                                  attrs: {
                                    clearable: "",
                                    rules: _vm.emailRules,
                                    label: "Email",
                                    required: ""
                                  },
                                  model: {
                                    value: _vm.user.email,
                                    callback: function($$v) {
                                      _vm.$set(_vm.user, "email", $$v)
                                    },
                                    expression: "user.email"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", sm: "6" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            autocomplete: "off",
                                            "append-icon": _vm.show1
                                              ? "mdi-eye"
                                              : "mdi-eye-off",
                                            rules: _vm.passwordRules,
                                            type: _vm.show1
                                              ? "text"
                                              : "password",
                                            label: "Password",
                                            hint: "Al menos 4 carácteres",
                                            counter: ""
                                          },
                                          on: {
                                            "click:append": function($event) {
                                              _vm.show1 = !_vm.show1
                                            }
                                          },
                                          model: {
                                            value: _vm.user.password,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.user,
                                                "password",
                                                $$v
                                              )
                                            },
                                            expression: "user.password"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", sm: "6" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            "append-icon": _vm.show2
                                              ? "mdi-eye"
                                              : "mdi-eye-off",
                                            rules: _vm.passwordConfirmRules,
                                            type: _vm.show2
                                              ? "text"
                                              : "password",
                                            label: "Confirmar password",
                                            hint: "Al menos 4 carácteres",
                                            counter: ""
                                          },
                                          on: {
                                            "click:append": function($event) {
                                              _vm.show2 = !_vm.show2
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.user.password_confirmation,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.user,
                                                "password_confirmation",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "\n                                                user.password_confirmation\n                                            "
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  {
                                    staticClass:
                                      "justify-center aling-center text-center ma-0 pa-0"
                                  },
                                  [
                                    _c(
                                      "v-col",
                                      { staticClass: "ma-0 pa-1 text-end" },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { color: "error" },
                                            on: { click: _vm.reset }
                                          },
                                          [_vm._v("Limpiar")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { staticClass: "ma-0 pa-1 text-start" },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "white--text",
                                            attrs: {
                                              disabled: !_vm.valid,
                                              color: "#212121"
                                            },
                                            on: { click: _vm.validate }
                                          },
                                          [_vm._v("Registrar")]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c(
            "v-overlay",
            { attrs: { absolute: true, opacity: 0.9, value: _vm.overlay } },
            [
              _c(
                "v-row",
                { staticClass: "mb-6", attrs: { "no-gutters": "" } },
                [
                  _c(
                    "v-col",
                    { attrs: { sm: "12" } },
                    [
                      _c("v-progress-circular", {
                        attrs: { indeterminate: "", size: "64" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-col", { staticClass: "mt-5" }, [
                    _c("span", { staticClass: "white--text" }, [
                      _vm._v(
                        "\n                        Un momento por favor, estamos procesando su\n                        solicitud\n                    "
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Auth/Register.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Auth/Register.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_ff714c22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=ff714c22& */ "./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_ff714c22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_ff714c22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Auth/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_ff714c22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=ff714c22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_ff714c22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_ff714c22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);