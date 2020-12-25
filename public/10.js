(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Empoderamiento.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/Empoderamiento.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      testimonios: [{
        name: 'Ana',
        ocupation: 'Estudiante',
        src: '/videos/testimonios/ana.mp4'
      }, {
        name: 'Angelica y Maria',
        ocupation: 'Estudiantes',
        src: '/videos/testimonios/angelica y maria.mp4'
      }, {
        name: 'Carolai',
        ocupation: 'Estudiante',
        src: '/videos/testimonios/carolai.mp4'
      }, {
        name: 'Juliana',
        ocupation: 'Estudiante',
        src: '/videos/testimonios/julliana.mp4'
      }],
      onboarding: 0,
      links: [{
        text: "Inicio",
        disabled: false,
        href: "/"
      }, {
        text: "Empoderamiento",
        disabled: true,
        href: "/empoderamiento"
      }]
    };
  },
  methods: {
    next: function next() {
      this.onboarding = this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev: function prev() {
      this.onboarding = this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Empoderamiento.vue?vue&type=template&id=84adce08&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/Empoderamiento.vue?vue&type=template&id=84adce08&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticStyle: { "min-height": "70vh" } }, [
    _c(
      "section",
      [
        _c(
          "v-img",
          {
            attrs: {
              src: __webpack_require__(/*! @/images/header/empoderamiento.jpg */ "./resources/images/header/empoderamiento.jpg"),
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
                          "\n                        Empoderamiento\n                    "
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
      "section",
      [
        _c(
          "v-container",
          [
            _c("v-card", { staticClass: "pa-0", attrs: { color: "black" } }, [
              _c(
                "video",
                {
                  ref: "videoPlayer",
                  staticClass: "mb-0 pb-0",
                  attrs: { autoplay: "", controls: "" }
                },
                [
                  _c("source", {
                    attrs: {
                      src: "videos/Jenis Sagbini con imagenes.mp4",
                      type: "video/mp4"
                    }
                  })
                ]
              )
            ])
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "section",
      {
        staticClass: "grey lighten-5",
        staticStyle: { padding: "32px 0px" },
        attrs: { id: "testimonios" }
      },
      [
        _c(
          "div",
          { staticClass: "base-section-heading text-center mb-0" },
          [
            _c(
              "v-avatar",
              {
                staticClass: "d-inline-flex mb-4",
                attrs: { color: "primary", size: "56" }
              },
              [
                _c("v-icon", { attrs: { dark: "", size: "28" } }, [
                  _vm._v("mdi-chat-processing")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "h1",
              {
                staticClass:
                  "text-uppercase text-h5 font-weight-bold mb-2 text-center"
              },
              [_vm._v("\n                Testimonios\n            ")]
            ),
            _vm._v(" "),
            _c("v-divider", {
              staticClass: "primary mx-auto mb-6",
              staticStyle: { "max-width": "28px" }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-window",
          {
            attrs: { "show-arrows": "" },
            model: {
              value: _vm.onboarding,
              callback: function($$v) {
                _vm.onboarding = $$v
              },
              expression: "onboarding"
            }
          },
          _vm._l(_vm.testimonios, function(item, n) {
            return _c(
              "v-window-item",
              { key: "card-" + n },
              [
                _c(
                  "v-card",
                  {
                    attrs: { color: "grey lighten-5", flat: "", height: "50vh" }
                  },
                  [
                    _c(
                      "v-row",
                      {
                        staticClass: "fill-height",
                        attrs: { align: "center", justify: "center" }
                      },
                      [
                        _c(
                          "div",
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "secondary rounded-circle",
                                attrs: { height: "40vh", width: "40vh" }
                              },
                              [
                                _c(
                                  "v-avatar",
                                  { attrs: { height: "40vh", width: "40vh" } },
                                  [
                                    _c(
                                      "video",
                                      {
                                        staticClass: "mb-0 pb-0",
                                        attrs: { controls: "" }
                                      },
                                      [
                                        _c("source", {
                                          attrs: {
                                            src: item.src,
                                            type: "video/mp4"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "h3",
                              {
                                staticClass:
                                  "text-h6 font-weight-bold mb-0 text-center"
                              },
                              [_vm._v(" " + _vm._s(item.name) + " ")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "text-body-2 font-weight-regular mb-0 text-center grey--text"
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(item.ocupation) +
                                    "\n                            "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          }),
          1
        ),
        _vm._v(" "),
        _c(
          "v-card-actions",
          { staticClass: "justify-center grey" },
          [
            _c(
              "v-item-group",
              {
                staticClass: "text-center",
                attrs: { mandatory: "" },
                model: {
                  value: _vm.onboarding,
                  callback: function($$v) {
                    _vm.onboarding = $$v
                  },
                  expression: "onboarding"
                }
              },
              _vm._l(_vm.testimonios, function(item, n) {
                return _c("v-item", {
                  key: "btn-" + n,
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var active = ref.active
                          var toggle = ref.toggle
                          return [
                            _c(
                              "v-btn",
                              {
                                attrs: { "input-value": active, icon: "" },
                                on: { click: toggle }
                              },
                              [_c("v-icon", [_vm._v("mdi-record")])],
                              1
                            )
                          ]
                        }
                      }
                    ],
                    null,
                    true
                  )
                })
              }),
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/images/header/empoderamiento.jpg":
/*!****************************************************!*\
  !*** ./resources/images/header/empoderamiento.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/empoderamiento.jpg?2fba50cf8dd841675816a5ec3adafb19";

/***/ }),

/***/ "./resources/js/components/page/Empoderamiento.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/page/Empoderamiento.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Empoderamiento_vue_vue_type_template_id_84adce08_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Empoderamiento.vue?vue&type=template&id=84adce08&scoped=true& */ "./resources/js/components/page/Empoderamiento.vue?vue&type=template&id=84adce08&scoped=true&");
/* harmony import */ var _Empoderamiento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Empoderamiento.vue?vue&type=script&lang=js& */ "./resources/js/components/page/Empoderamiento.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Empoderamiento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Empoderamiento_vue_vue_type_template_id_84adce08_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Empoderamiento_vue_vue_type_template_id_84adce08_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "84adce08",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/Empoderamiento.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/Empoderamiento.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/page/Empoderamiento.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Empoderamiento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Empoderamiento.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Empoderamiento.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Empoderamiento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/Empoderamiento.vue?vue&type=template&id=84adce08&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/page/Empoderamiento.vue?vue&type=template&id=84adce08&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Empoderamiento_vue_vue_type_template_id_84adce08_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Empoderamiento.vue?vue&type=template&id=84adce08&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Empoderamiento.vue?vue&type=template&id=84adce08&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Empoderamiento_vue_vue_type_template_id_84adce08_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Empoderamiento_vue_vue_type_template_id_84adce08_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);