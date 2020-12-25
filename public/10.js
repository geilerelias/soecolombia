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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
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
              height: "350",
              gradient: "to top, rgba(5, 11, 31, 0.8), rgba(31, 5, 27, 0.8)",
              src: __webpack_require__(/*! @/images/header/empoderamiento.jpg */ "./resources/images/header/empoderamiento.jpg")
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
                      attrs: { dark: "", color: "white", items: _vm.links }
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