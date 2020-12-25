(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Contactenos.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/Contactenos.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      links: [{
        text: "Inicio",
        disabled: false,
        href: "/"
      }, {
        text: "Contáctenos",
        disabled: true,
        href: "/contactenos"
      }],
      contact: [{
        icon: "mdi-map-marker-outline",
        name: "Dirección",
        content: "Cra 4-A # 54-52<br />Chapinero Alto, Bogot\xE1, Colombia"
      }, {
        icon: "mdi-cellphone",
        name: "Teléfonos",
        content: "+57 315 734 0385 <br/> +57 300 290 0321"
      }, {
        icon: "mdi-email",
        name: "Correos",
        content: "contacto@mvictoriaaponte.com<br/>contacto@soecolombia.com <br /> contacto@jenissagbini.com"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Contactenos.vue?vue&type=template&id=736e3ed0&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/Contactenos.vue?vue&type=template&id=736e3ed0&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "mt-0" },
    [
      _c(
        "section",
        [
          _c(
            "v-img",
            {
              attrs: {
                src: __webpack_require__(/*! @/images/header/contacto.jpg */ "./resources/images/header/contacto.jpg"),
                gradient: "to top, rgba(5, 11, 31, 0.8), rgba(31, 5, 27, 0.8)",
                height: "350"
              }
            },
            [
              _c(
                "v-row",
                {
                  staticClass:
                    "fill-height text-center align-center justify-center"
                },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "h1",
                        {
                          staticClass:
                            "display-2 font-weight-500 mb-2 text-center white--text"
                        },
                        [
                          _vm._v(
                            "\n                        CONTÁCTENOS\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-breadcrumbs", {
                        staticClass: "justify-center white--text",
                        attrs: { items: _vm.links, color: "white", dark: "" }
                      })
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
      ),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "6" } },
                [
                  _c(
                    "h3",
                    {
                      staticClass:
                        "text-uppercase primary--text title font-weight-bold mb-1 text-left"
                    },
                    [
                      _vm._v(
                        "\n                    MANTENTE EN CONTACTO CON NOSOTROS\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass:
                        "base-body body-1 grey--text text--darken-1 text-left mb-6 text-justify"
                    },
                    [
                      _vm._v(
                        "\n                    Si quieres saber mas de lo que hacemos y como podemos\n                    ayudarte, no dudes en escribirnos a nuestros correos\n                    electrónicos o llamar a cualquiera de los números\n                    telefónicos que tenemos disponibles para ti. Para\n                    nosotros es un placer poder servirte.\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.contact, function(item) {
                    return _c(
                      "div",
                      {
                        key: item.name,
                        staticClass:
                          "pt-2 mb-0 d-flex justify-start align-content-start align-start"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "base-avatar d-inline-flex mb-3 ",
                            staticStyle: { "margin-left": "-10" }
                          },
                          [
                            _c("v-icon", {
                              staticClass: "mt-6",
                              attrs: { color: "primary", size: "32" },
                              domProps: { textContent: _vm._s(item.icon) }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "ml-3" }, [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "text-uppercase font-weight-black subtitle-2 mb-1 text-left primary--text"
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(item.name) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "base-body body-1 mx-auto  text--lighten-1 text-left mb-0"
                            },
                            [
                              _c("div", {
                                domProps: { innerHTML: _vm._s(item.content) }
                              })
                            ]
                          )
                        ])
                      ]
                    )
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "6" } },
                [
                  _c(
                    "h3",
                    {
                      staticClass:
                        "text-uppercase title primary--text  font-weight-bold mb-1 text-left"
                    },
                    [
                      _vm._v(
                        "\n                    Envíanos un correo electrónico\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-form", [
                    _c("div", [
                      _c(
                        "div",
                        [
                          _c("v-text-field", {
                            attrs: { label: "Nombre", outlined: "" }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              label: "Correo",
                              outlined: "",
                              small: "",
                              type: "email"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "Tema", outlined: "" }
                          }),
                          _vm._v(" "),
                          _c("v-textarea", {
                            attrs: {
                              label: "Descripción o Mensaje",
                              outlined: ""
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color: "primary",
                                dark: "",
                                outlined: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n                                Enviar\n                            "
                              )
                            ]
                          )
                        ],
                        1
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

/***/ "./resources/images/header/contacto.jpg":
/*!**********************************************!*\
  !*** ./resources/images/header/contacto.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/contacto.jpg?bce3846c3cdcb2e6c6f764e0a3fa28d5";

/***/ }),

/***/ "./resources/js/components/page/Contactenos.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/page/Contactenos.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contactenos_vue_vue_type_template_id_736e3ed0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contactenos.vue?vue&type=template&id=736e3ed0&scoped=true& */ "./resources/js/components/page/Contactenos.vue?vue&type=template&id=736e3ed0&scoped=true&");
/* harmony import */ var _Contactenos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contactenos.vue?vue&type=script&lang=js& */ "./resources/js/components/page/Contactenos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contactenos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contactenos_vue_vue_type_template_id_736e3ed0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contactenos_vue_vue_type_template_id_736e3ed0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "736e3ed0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/Contactenos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/Contactenos.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/page/Contactenos.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactenos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contactenos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Contactenos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactenos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/Contactenos.vue?vue&type=template&id=736e3ed0&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/page/Contactenos.vue?vue&type=template&id=736e3ed0&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactenos_vue_vue_type_template_id_736e3ed0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contactenos.vue?vue&type=template&id=736e3ed0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Contactenos.vue?vue&type=template&id=736e3ed0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactenos_vue_vue_type_template_id_736e3ed0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contactenos_vue_vue_type_template_id_736e3ed0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);