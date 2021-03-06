(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/base/Header.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/base/Header.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      offsetTop: 0,
      fab: false,
      fixed: false,
      value: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["drawer", "numero", "menu"])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(["setDrawer", "aumentar"])), {}, {
    toTop: function toTop() {
      this.$vuetify.goTo(0);
    },
    onScroll: function onScroll(e) {
      if (typeof window === "undefined") return;
      this.offsetTop = window.pageYOffset || e.target.scrollTop || 0;

      if (this.$vuetify.breakpoint.smAndDown) {
        if (this.offsetTop > 88) {
          this.fab = true;
          this.fixed = true;
        } else {
          this.fab = false;
          this.fixed = false;
        }
      } else {
        if (this.offsetTop > 127) {
          this.fab = true;
          this.fixed = true;
        } else {
          this.fab = false;
          this.fixed = false;
        }
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/base/Header.vue?vue&type=template&id=dc9ffda0&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/base/Header.vue?vue&type=template&id=dc9ffda0&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-card",
        {
          staticClass: "mb-0 pb-0",
          class: [
            _vm.fixed ? "pt-12" : "pt-0",
            _vm.$vuetify.breakpoint.smAndDown && _vm.fixed ? "pt-12" : "pt-0"
          ],
          attrs: { color: "white", flat: "", tile: "" }
        },
        [
          _c(
            "v-toolbar",
            {
              staticClass: "elevation-0  d-flex align-center align-stretch",
              class: _vm.$vuetify.breakpoint.smAndDown ? "my-4" : "",
              attrs: {
                prominent: _vm.$vuetify.breakpoint.smAndDown ? false : true
              }
            },
            [
              _c(
                "v-toolbar-title",
                {
                  staticClass:
                    "primary--text font-weight-black display-1 light text-truncate"
                },
                [
                  _c(
                    "v-avatar",
                    {
                      attrs: {
                        size: _vm.$vuetify.breakpoint.smAndDown ? "50" : "100",
                        color: "primary"
                      }
                    },
                    [
                      _c("v-img", {
                        attrs: {
                          src: __webpack_require__(/*! @/images/logo-soe-circular-morado.png */ "./resources/images/logo-soe-circular-morado.png"),
                          "aspect-ratio": "1",
                          contain: ""
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      class: _vm.$vuetify.breakpoint.smAndDown
                        ? "headline font-weight-black"
                        : ""
                    },
                    [_vm._v("Soy Empoderamiento")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-app-bar",
            {
              staticClass: "white--text",
              attrs: { fixed: _vm.fixed, color: "primary", dark: "", dense: "" }
            },
            [
              _c(
                "v-toolbar-title",
                { staticClass: "font-weight-black headline " },
                [_vm._v("\n                    SOE Colombia\n                ")]
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _vm._l(_vm.menu, function(item) {
                return _c(
                  "v-toolbar-items",
                  { key: item.id, staticClass: "hidden-md-and-down" },
                  [
                    !item.submenu
                      ? _c("v-btn", {
                          attrs: { to: item.to, text: "" },
                          domProps: { textContent: _vm._s(item.title) }
                        })
                      : _c(
                          "v-menu",
                          {
                            attrs: { "offset-y": "", "open-on-hover": "" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          {
                                            attrs: {
                                              to: item.to,
                                              color: "white",
                                              dark: "",
                                              text: ""
                                            },
                                            domProps: {
                                              textContent: _vm._s(item.title)
                                            }
                                          },
                                          on
                                        )
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "v-list",
                              _vm._l(item.submenu, function(
                                itemSubmenu,
                                index
                              ) {
                                return _c(
                                  "v-list-item",
                                  {
                                    key: index,
                                    attrs: { href: itemSubmenu.link }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(
                                        _vm._s(itemSubmenu.title) +
                                          "\n                                "
                                      )
                                    ])
                                  ],
                                  1
                                )
                              }),
                              1
                            )
                          ],
                          1
                        )
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c("v-app-bar-nav-icon", {
                staticClass: "hidden-lg-and-up",
                attrs: { color: "white" },
                on: {
                  click: function($event) {
                    _vm.drawer ? _vm.setDrawer(false) : _vm.setDrawer(true)
                  }
                }
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.fab,
              expression: "fab"
            },
            {
              name: "scroll",
              rawName: "v-scroll",
              value: _vm.onScroll,
              expression: "onScroll"
            }
          ],
          attrs: {
            bottom: "",
            color: "primary",
            dark: "",
            fab: "",
            fixed: "",
            right: ""
          },
          on: { click: _vm.toTop }
        },
        [_c("v-icon", [_vm._v("mdi-chevron-up")])],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/images/logo-soe-circular-morado.png":
/*!*******************************************************!*\
  !*** ./resources/images/logo-soe-circular-morado.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-soe-circular-morado.png?344a28462e1f76dd6dff1b0904895c37";

/***/ }),

/***/ "./resources/js/components/base/Header.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/base/Header.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_dc9ffda0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=dc9ffda0&scoped=true& */ "./resources/js/components/base/Header.vue?vue&type=template&id=dc9ffda0&scoped=true&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/components/base/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_dc9ffda0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_dc9ffda0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dc9ffda0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/base/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/base/Header.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/base/Header.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/base/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/base/Header.vue?vue&type=template&id=dc9ffda0&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/base/Header.vue?vue&type=template&id=dc9ffda0&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_dc9ffda0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=dc9ffda0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/base/Header.vue?vue&type=template&id=dc9ffda0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_dc9ffda0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_dc9ffda0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);