(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Example.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Example.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ "./node_modules/vuetify/dist/vuetify.min.css");
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Vue.use(vuetify__WEBPACK_IMPORTED_MODULE_0___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      selection: 1
    };
  },
  methods: {
    reserve: function reserve() {
      var _this = this;

      this.loading = true;
      setTimeout(function () {
        return _this.loading = false;
      }, 2000);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Example.vue?vue&type=template&id=63af75cf&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Example.vue?vue&type=template&id=63af75cf&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "v-card",
    {
      staticClass: "mx-auto my-12",
      attrs: { loading: _vm.loading, "max-width": "374" }
    },
    [
      _c(
        "template",
        { slot: "progress" },
        [
          _c("v-progress-linear", {
            attrs: { color: "deep-purple", height: "10", indeterminate: "" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-img", {
        attrs: {
          height: "250",
          src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
        }
      }),
      _vm._v(" "),
      _c("v-card-title", [_vm._v("Cafe Badilico")]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-row",
            { staticClass: "mx-0", attrs: { align: "center" } },
            [
              _c("v-rating", {
                attrs: {
                  value: 4.5,
                  color: "amber",
                  dense: "",
                  "half-increments": "",
                  readonly: "",
                  size: "14"
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "grey--text ml-4" }, [
                _vm._v("\n                4.5 (413)\n            ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "my-4 subtitle-1" }, [
            _vm._v("\n            $ • Italian, Cafe\n        ")
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._v(
              "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating."
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider", { staticClass: "mx-4" }),
      _vm._v(" "),
      _c("v-card-title", [_vm._v("Tonight's availability")]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-chip-group",
            {
              attrs: {
                "active-class": "deep-purple accent-4 white--text",
                column: ""
              },
              model: {
                value: _vm.selection,
                callback: function($$v) {
                  _vm.selection = $$v
                },
                expression: "selection"
              }
            },
            [
              _c("v-chip", [_vm._v("5:30PM")]),
              _vm._v(" "),
              _c("v-chip", [_vm._v("7:30PM")]),
              _vm._v(" "),
              _c("v-chip", [_vm._v("8:00PM")]),
              _vm._v(" "),
              _c("v-chip", [_vm._v("9:00PM")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c(
            "v-btn",
            {
              attrs: { color: "deep-purple lighten-2", text: "" },
              on: { click: _vm.reserve }
            },
            [_vm._v("\n            Reserve\n        ")]
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Example.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Example.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Example_vue_vue_type_template_id_63af75cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Example.vue?vue&type=template&id=63af75cf&scoped=true& */ "./resources/js/components/Example.vue?vue&type=template&id=63af75cf&scoped=true&");
/* harmony import */ var _Example_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Example.vue?vue&type=script&lang=js& */ "./resources/js/components/Example.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Example_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Example_vue_vue_type_template_id_63af75cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Example_vue_vue_type_template_id_63af75cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "63af75cf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Example.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Example.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Example.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Example_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Example.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Example.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Example_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Example.vue?vue&type=template&id=63af75cf&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Example.vue?vue&type=template&id=63af75cf&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Example_vue_vue_type_template_id_63af75cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Example.vue?vue&type=template&id=63af75cf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Example.vue?vue&type=template&id=63af75cf&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Example_vue_vue_type_template_id_63af75cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Example_vue_vue_type_template_id_63af75cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);