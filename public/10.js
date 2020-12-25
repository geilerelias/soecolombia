(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/NoMasViolencia.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/NoMasViolencia.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        text: "No más violencia",
        disabled: true,
        href: "/no-mas-violencia"
      }],
      onboarding: 0,
      model: null,
      e6: 1,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      comic: {
        title: "",
        image: ""
      },
      comics: [{
        title: "Un día de tu rutina",
        image: "/images/comics/caricaturas_001.png"
      }, {
        title: "Contradicciones y frustraciones",
        image: "/images/comics/caricaturas_002.png"
      }, {
        title: "Y el desarrollo de la mujer ?…….Qué ?",
        image: "/images/comics/caricaturas_003.png"
      }, {
        title: "Y la reivindicación de tus derechos ?… Qué ?",
        image: "/images/comics/caricaturas_004.png"
      }, {
        title: "Y la visibilización de la mujer en lo público ? …Qué ?",
        image: "/images/comics/caricaturas_005.png"
      }, {
        title: "Así fué la historia de tu vida !!",
        image: "/images/comics/caricaturas_006.png"
      }]
    };
  },
  methods: {
    viewModal: function viewModal(comic) {
      this.comic = comic;
      this.dialog = true;
    },
    next: function next() {
      this.onboarding = this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev: function prev() {
      this.onboarding = this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/NoMasViolencia.vue?vue&type=template&id=9e3d69ee&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/NoMasViolencia.vue?vue&type=template&id=9e3d69ee&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c(
        "section",
        [
          _c(
            "v-img",
            {
              attrs: {
                height: "350",
                gradient: "to top, rgba(5, 11, 31, 0.8), rgba(31, 5, 27, 0.8)",
                src: __webpack_require__(/*! @/images/header/no-mas-violencia.jpg */ "./resources/images/header/no-mas-violencia.jpg")
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
                            "\n                        No más violencia\n                    "
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
        "v-container",
        [
          _c(
            "p",
            {
              staticClass:
                "primary--text text-uppercase headline font-weight-bold my-2"
            },
            [_vm._v("\n            PRÁCTICAS SEXISTAS\n        ")]
          ),
          _vm._v(" "),
          _c(
            "v-stepper",
            {
              attrs: { vertical: "", "non-linear": "" },
              model: {
                value: _vm.e6,
                callback: function($$v) {
                  _vm.e6 = $$v
                },
                expression: "e6"
              }
            },
            _vm._l(_vm.comics, function(comic, index) {
              return _c(
                "div",
                { key: index },
                [
                  _c(
                    "v-stepper-step",
                    {
                      attrs: {
                        complete: _vm.e6 > 1,
                        step: index + 1,
                        editable: ""
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(comic.title) +
                          "\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-stepper-content",
                    { attrs: { step: index + 1 } },
                    [
                      _c(
                        "v-container",
                        { staticClass: "grey lighten-2", attrs: { fluid: "" } },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "mb-12 mx-auto",
                              attrs: { elevation: "24", "max-width": "700" }
                            },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("v-img", {
                                    attrs: {
                                      contain: "",
                                      src: comic.image,
                                      "lazy-src":
                                        "https://i.picsum.photos/id/300/10/6.jpg",
                                      "aspect-ratio": 5 / 8
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  index !== 0
                                    ? _c(
                                        "v-btn",
                                        {
                                          on: {
                                            click: function($event) {
                                              _vm.e6 = index - 1
                                            }
                                          }
                                        },
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-skip-previous-outline")
                                          ])
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  index < _vm.comics.length
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: { color: "primary" },
                                          on: {
                                            click: function($event) {
                                              _vm.e6 = index + 2
                                            }
                                          }
                                        },
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-skip-next-outline")
                                          ])
                                        ],
                                        1
                                      )
                                    : _vm._e()
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
                ],
                1
              )
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-card",
            { attrs: { tile: "" } },
            [
              _c(
                "v-window",
                {
                  model: {
                    value: _vm.onboarding,
                    callback: function($$v) {
                      _vm.onboarding = $$v
                    },
                    expression: "onboarding"
                  }
                },
                _vm._l(_vm.comics, function(comic, index) {
                  return _c(
                    "v-window-item",
                    { key: index },
                    [
                      _c(
                        "v-toolbar",
                        [
                          _c(
                            "v-toolbar-title",
                            { staticClass: "primary--text font-weight-black" },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(comic.title) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { text: "" }, on: { click: _vm.prev } },
                            [_c("v-icon", [_vm._v("mdi-chevron-left")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { text: "" }, on: { click: _vm.next } },
                            [_c("v-icon", [_vm._v("mdi-chevron-right")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { staticClass: "grey lighten-2" },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: " mx-auto mt-4",
                              attrs: { "max-width": "700" }
                            },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("v-img", {
                                    attrs: {
                                      contain: "",
                                      src: comic.image,
                                      "lazy-src":
                                        "https://i.picsum.photos/id/300/10/6.jpg",
                                      "aspect-ratio": 5 / 8
                                    }
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
                  )
                }),
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                { staticClass: "justify-space-between" },
                [
                  _c(
                    "v-btn",
                    { attrs: { text: "" }, on: { click: _vm.prev } },
                    [_c("v-icon", [_vm._v("mdi-chevron-left")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-sheet",
                    {
                      staticClass: "hidden-sm-and-down",
                      attrs: { "max-width": "800" }
                    },
                    [
                      _c(
                        "v-slide-group",
                        {
                          staticClass: "pa-4 text-center mx-auto",
                          attrs: { "show-arrows": false },
                          model: {
                            value: _vm.onboarding,
                            callback: function($$v) {
                              _vm.onboarding = $$v
                            },
                            expression: "onboarding"
                          }
                        },
                        _vm._l(_vm.comics, function(comic, n) {
                          return _c("v-slide-item", {
                            key: n,
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var active = ref.active
                                    var toggle = ref.toggle
                                    return [
                                      _c(
                                        "v-avatar",
                                        {
                                          staticClass: "mx-1",
                                          attrs: {
                                            color: active
                                              ? "primary"
                                              : "grey lighten-1",
                                            width: "75",
                                            height: "100",
                                            tile: ""
                                          },
                                          on: { click: toggle }
                                        },
                                        [
                                          _c(
                                            "v-scale-transition",
                                            [
                                              _c("v-img", {
                                                attrs: {
                                                  contain: "",
                                                  src: comic.image,
                                                  alt: "image",
                                                  gradient: active
                                                    ? "to bottom, rgba(158, 67, 115, 0.48), rgba(158, 67, 115, 0.58)"
                                                    : ""
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { text: "" }, on: { click: _vm.next } },
                    [_c("v-icon", [_vm._v("mdi-chevron-right")])],
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
            "v-sheet",
            { staticClass: "mx-auto", attrs: { elevation: "8" } },
            [
              _c(
                "v-slide-group",
                {
                  staticClass: "pa-4",
                  attrs: { "center-active": "", "show-arrows": "" },
                  model: {
                    value: _vm.model,
                    callback: function($$v) {
                      _vm.model = $$v
                    },
                    expression: "model"
                  }
                },
                _vm._l(_vm.comics, function(comic) {
                  return _c("v-slide-item", {
                    key: comic.title,
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(ref) {
                            var active = ref.active
                            var toggle = ref.toggle
                            return [
                              _c(
                                "v-card",
                                {
                                  staticClass: "ma-4",
                                  attrs: { height: "450", width: "270" },
                                  on: { click: toggle }
                                },
                                [
                                  _c(
                                    "v-img",
                                    {
                                      staticClass: "white--text align-end",
                                      attrs: {
                                        src: comic.image,
                                        gradient:
                                          "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                        height: "400"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.viewModal(comic)
                                        }
                                      }
                                    },
                                    [
                                      _c("v-card-title", {
                                        domProps: {
                                          textContent: _vm._s(comic.title)
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { icon: "" },
                                          on: {
                                            click: function($event) {
                                              return _vm.viewModal(comic)
                                            }
                                          }
                                        },
                                        [_c("v-icon", [_vm._v("mdi-eye")])],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        { attrs: { icon: "" } },
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-share-variant")
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition"
          },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "primary" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-toolbar-title", {
                    domProps: { textContent: _vm._s(_vm.comic.title) }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "mt-4 mx-auto",
                  attrs: { elevation: "0", "max-width": "700" }
                },
                [
                  _c("v-img", { attrs: { src: _vm.comic.image } }),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("mdi-close")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { icon: "" } },
                        [_c("v-icon", [_vm._v("mdi-share-variant")])],
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        { attrs: { id: "sexismo" } },
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
                        src: "videos/Video 7. Prácticas sexistas.mp4",
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
        { staticClass: "grey lighten-5 pt-6", attrs: { id: "testimonios" } },
        [
          _c("div", { staticClass: "base-section-heading text-center mb-0" }, [
            _c(
              "div",
              { staticClass: "d-inline-flex mb-4" },
              [
                _c(
                  "v-avatar",
                  { staticClass: "primary", attrs: { size: "56" } },
                  [
                    _c("v-icon", { attrs: { dark: "" } }, [
                      _vm._v(
                        "\n                        mdi-chat-processing\n                    "
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
              "h1",
              {
                staticClass:
                  "text-uppercase headline font-weight-bold mb-2 text-center"
              },
              [
                _vm._v(
                  "\n                UN RELATO SOBRE VIVENCIAS GUARDADAS DE MUJERES\n            "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("v-container", { staticClass: "text-justify" }, [
            _c("p", [
              _vm._v(
                "\n                Estos relatos, que a continuación presento, los llamé\n                “vivencias guardadas” y son fragmentos de historias de vida,\n                sobre el maltrato contra la mujer, y son referidas por\n                mujeres de diferentes regiones del país, ubicadas en la\n                ciudad de Bogotá, son producto de una compilación de\n                investigaciones que he realizado a lo largo de mi vida sobre\n                violencia de género.\n            "
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                En estos fragmentos de vivencias, me refiero especialmente a\n                esas experiencias que, en la vida de las mujeres, marcan un\n                recorrido de violencia, tal vez orientado por la\n                permisividad de manera consciente o inconsciente con que la\n                mujer acepta y permite el maltrato.\n            "
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                A medida que las mujeres, avanzaban en sus relatos, me\n                apasionaba cada vez más el tema y me conmovían\n                profundamente. No sólo era registrar hechos aislados y datos\n                sueltos, sino captar lo que ellas lograban transmitirme con\n                su lenguaje corporal, sus sonrisas, sus miradas, su llanto,\n                sus gestos, sus experiencias y emociones.\n            "
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                Es así como este conjunto de momentos mágicos, se\n                convirtieron en el entorno que me permitió un acercamiento,\n                y una complicidad suficiente, para armar un clima de\n                confianza y ayuda mutua que permitiera la fluidez en las\n                entrevistas.\n            "
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                Por esa razón, culminar con la interpretación de estos\n                relatos, fue un desafío y decidí mostrar el producto de\n                estas indagaciones a través de fragmentos de historia de\n                vida de mujeres, para devolvérselas bajo la forma de\n                cuestionamientos que las enriqueciera.\n            "
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                Todo esto, fue emocionante, y me permitió realizar una\n                travesía de realidades comunes con las mujeres, donde ellas\n                elegían palabras, e imágenes para expresarse, dando cuenta\n                de la representación que hacían de sí mismas, y la forma\n                como iba desentrañando el significado de sus vivencias, esas\n                que llevaban guardadas, que traían ocultas, y que dejaron\n                huellas imborrables en sus recuerdos.\n            "
              )
            ]),
            _vm._v(" "),
            _c("ol", [
              _c(
                "li",
                { staticClass: "primary--text subtitle-1 font-weight-black" },
                [
                  _c("p", [
                    _vm._v(
                      "\n                        VIVENCIAS GUARDADAS: CICATRICES IMBORRABLES.\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "font-weight-medium black--text body-1 text-justify"
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n                            El fenómeno de la violencia contra las mujeres\n                            no es reciente. Su estudio y los esfuerzos para\n                            hacerla visible han hecho que se enuncie como un\n                            problema de carácter social y se considere como\n                            delito en algunos países del mundo.\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            Este trabajo representó un reto para mi logro\n                            personal y profesional, porque implica mostrar\n                            la cara oculta de la violencia intrafamiliar, lo\n                            que las mujeres callamos de manera muy\n                            consciente, porque es más fácil culpar a otros\n                            de la desgracia propia, antes que cuestionarnos\n                            nosotras mismas.\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            Es pertinente entender que el significado de\n                            violencia apunta a las características sociales,\n                            corporales y subjetivas, Berger y Luckman, 1999,\n                            manifiesta que el significado es determinado por\n                            su carácter temporal y contextual\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            Este trabajo representó un reto para mi logro\n                            personal y profesional, porque implica mostrar\n                            la cara oculta de la violencia intrafamiliar, lo\n                            que las mujeres callamos de manera muy\n                            consciente, porque es más fácil culpar a otros\n                            de la desgracia propia, antes que cuestionarnos\n                            nosotras mismas.\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            Es pertinente entender que el significado de\n                            violencia apunta a las características sociales,\n                            corporales y subjetivas, Berger y Luckman, 1999,\n                            manifiesta que el significado es determinado por\n                            su carácter temporal y contextual\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            Es cierto que alrededor de las mujeres se tejen\n                            vínculos de solidaridad que pueden ser\n                            aprovechados para enfrentar situaciones de\n                            malestar, y son estas experiencias y modos de\n                            vida lo que las identifica y las hace\n                            diferentes, y es significativo, retomarlo desde\n                            las memorias.\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            “Decidí trabajar sobre violencia de género,\n                            documentando los recuerdos de maltrato a lo\n                            largo de la vida de las mujeres”. La decisión de\n                            trabajar con violencia contra las mujeres, surge\n                            porque este flagelo afecta todos los ciclos de\n                            la vida, partiendo desde la niñez, y\n                            adolescencia, hasta la adultez y la tercera\n                            edad, con el fin de poder identificar los tipos\n                            de violencia que ellas han experimentado durante\n                            toda su vida.\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            Lo anterior responde al hecho de que existen\n                            problemas estructurales del sistema patriarcal,\n                            en el que las mujeres se encuentran en una\n                            posición inferior frente al hombre.\n                            Manifestaciones culturales como la música, son\n                            determinantes en la replicación de violencia de\n                            género, expresiones directamente relacionadas\n                            con violencia simbólica, donde el flagelo se\n                            camufla y es socialmente aceptado y normalizado.\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            Según la OMS, 2018, la violencia de género,\n                            adopta formas tales como la violencia física,\n                            psicológica, sexual o y económica dentro del\n                            hogar; violaciones; trata de mujeres y niñas;\n                            prostitución forzada; violencia por los grupos\n                            armados al margen de la ley, asesinatos,\n                            violaciones sistemáticas, esclavitud sexual y\n                            embarazo forzado; los asesinatos por razones de\n                            honor; la violencia por causa de la dote.\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            De igual manera, el infanticidio femenino y la\n                            selección prenatal del sexo del feto en favor de\n                            bebés masculinos; la mutilación genital\n                            femenina; el impacto desproporcionado del\n                            desplazamiento forzado en las mujeres y otras\n                            prácticas y tradiciones perjudiciales\n                            (Presidencia de la República, 2013). “Los\n                            significados de cada una de sus experiencias\n                            aluden a la representación mental y la manera de\n                            apropiación de esos recuerdos”, fui testigo de\n                            desgarradoras anécdotas, donde algunas,\n                            expusieron el rechazo de sus padres desde que\n                            nacieron, tan sólo por el simple hecho de haber\n                            nacido mujeres, motivo por el cual, en lugar de\n                            educación solo recibieron maltrato.\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            En el relato de estas experiencias Jelin, 2001,\n                            me aclaró que valerse de la memoria, involucra\n                            referirse a recuerdos y olvidos, narrativas y\n                            actos, silencios y gestos, saberes y emociones;\n                            pero también huecos y fracturas.\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            El común denominador fue la violencia\n                            intrafamiliar, estas mujeres, en sus relatos\n                            narraron la abnegación y entrega a su hogar,\n                            dedicándose a cuidar a sus hijos y esposos,\n                            figura que en muchas ocasiones resultaba ser el\n                            principal victimario. Es importante aclarar que\n                            la violencia, en las relaciones sociales y\n                            particularmente dentro de la familia, se\n                            convierte en unos de los obstáculos más serios\n                            para el crecimiento de las personas, deteriora\n                            la calidad de vida y genera muertes evitables.\n                                \n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            La violencia intrafamiliar, explica el maltrato\n                            hacia la mujer en el ámbito familiar, y en\n                            particular la que es ejercida por el hombre con\n                            quien convive--su marido o compañero--, o la que\n                            es ejercida desde fuera de la familia por el\n                            hombre con quien ha convivido, o con quien\n                            mantiene una relación de pareja (Ferreira,\n                            1995). \n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            Se tipifican los tipos de maltrato a la mujer ya\n                            que no solo de manera física se maltrata a una\n                            mujer, también psicológicamente cuando se ejerce\n                            poder sobre ella, sobre sus acciones o sobre lo\n                            que piensa. Se le condiciona o se invalida\n                            haciéndola sentir menos, desde la dependencia\n                            económica, el chantaje y amenazas, como también\n                            el maltrato verbal, esto hace que la mujer\n                            soporte el maltrato por miedo.\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            Para aclarar estas apreciaciones, Perela 2.014,\n                            muestra que la violencia psicológica, es la que\n                            causa daño emocional y disminución de la\n                            autoestima o perjudica y perturba el pleno\n                            desarrollo personal o que busca degradar o\n                            controlar sus acciones, comportamientos,\n                            creencias y decisiones, mediante amenaza, acoso,\n                            hostigamiento, restricción, humillación,\n                            deshonra, descrédito, manipulación o\n                            aislamiento.\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            También contribuye con este deterioro, la\n                            violencia Física, porque incluye cualquier acto\n                            de fuerza contra el cuerpo de la mujer, con\n                            resultado o riesgo de producir lesión física o\n                            daño (Carrasco, 2014). De igual manera, la\n                            violencia económica, es definida como cualquier\n                            acción u omisión orientada al abuso económico,\n                            el control abusivo de las finanzas, recompensas\n                            o castigos monetarios a las mujeres por razón de\n                            su condición social, económica o política\n                            (Ministerio de Protección Social, Ley 1257 de\n                            2008).\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            Teniendo en cuenta lo anterior, es de destacar\n                            que además de compartir tipos de violencia, las\n                            mujeres también tienen en común que están\n                            sometidas a la dominación genérica y de clase,\n                            lo que aumenta la percepción hostil y el\n                            significado que tienen sobre la realidad, porque\n                            la consideran amenazante, creen que es una\n                            conducta socialmente anómala, a la cual están\n                            expuestas en su casa y fuera de ella.\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            Moliner, 2007, me explicó que ellas comparten\n                            como género la misma condición histórica,\n                            comenta que la memoria, en tanto es una\n                            «facultad psíquica con la que se recuerda» o la\n                            «capacidad, mayor o menor, para recordar» y que\n                            el recordar permite a los seres humanos\n                            reconstruir las historias vividas y, de acuerdo\n                            a cada contexto (cultura) dotarlas de\n                            significado.  \n                        "
                        )
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "primary--text subtitle-1 font-weight-black" },
                [
                  _c("p", [
                    _vm._v(
                      "\n                        USTIFICANDO LA REALIDAD ESTUDIADA\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "font-weight-medium black--text body-1 text-justify"
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n                            La violencia contra la mujer es un fenómeno muy\n                            complejo, sobre todo porque no es correctamente\n                            identificado por toda la población y su\n                            reconocimiento, sería la primera dificultad que\n                            se debe vencer para poder enfrentarlo con la\n                            emergencia necesaria,\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            De igual manera esta investigación, es relevante\n                            para las mujeres colombianas, debido a que\n                            genera aportes para el avance de ellas, en temas\n                            de crecimiento personal, porque muestran\n                            vivencias que se constituyen en aportes para el\n                            manejo de problemáticas similares que estén\n                            experimentando otras mujeres en el espacio de su\n                            vida cotidiana\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            Este estudio aporta desde lo práctico el espacio\n                            que se necesita para despertar la conciencia de\n                            la mujer a nivel individual y colectivo para\n                            poder detectar la violencia y detenerla a\n                            tiempo.\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            Se busca generar en otras mujeres, el deseo de\n                            que también ellas cuenten su historia de vida,\n                            como un espacio de resiliencia y despierte en\n                            ellas el deseo de no repetición de episodios de\n                            violencia en sus vidas, buscando sanación que\n                            repercuta en una buena salud mental para ella.\n                             \n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            Así mismo, esto redundará, no solo en el\n                            beneficio de la mujer, sino también de las\n                            personas que hacen parte del núcleo familiar,\n                            buscando la convivencia armónica y que todos los\n                            miembros de la familia, realicen acciones que\n                            permita la legitimación de los derechos de la\n                            mujer, y la toma de decisiones autónomas para su\n                            proyecto de vida, logrando el empoderamiento\n                            femenino.\n                        "
                        )
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "primary--text subtitle-1 font-weight-black" },
                [
                  _c("p", [
                    _vm._v(
                      "\n                       SIGNIFICADO DE LA EXPERIENCIA\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", {
                    staticClass:
                      "font-weight-medium black--text body-1 text-justify"
                  })
                ]
              )
            ])
          ])
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

/***/ "./resources/images/header/no-mas-violencia.jpg":
/*!******************************************************!*\
  !*** ./resources/images/header/no-mas-violencia.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/no-mas-violencia.jpg?da0ff6a577aaf2b7d70a299208aae6c5";

/***/ }),

/***/ "./resources/js/components/page/NoMasViolencia.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/page/NoMasViolencia.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NoMasViolencia_vue_vue_type_template_id_9e3d69ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoMasViolencia.vue?vue&type=template&id=9e3d69ee&scoped=true& */ "./resources/js/components/page/NoMasViolencia.vue?vue&type=template&id=9e3d69ee&scoped=true&");
/* harmony import */ var _NoMasViolencia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoMasViolencia.vue?vue&type=script&lang=js& */ "./resources/js/components/page/NoMasViolencia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NoMasViolencia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NoMasViolencia_vue_vue_type_template_id_9e3d69ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NoMasViolencia_vue_vue_type_template_id_9e3d69ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9e3d69ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/NoMasViolencia.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/NoMasViolencia.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/page/NoMasViolencia.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoMasViolencia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NoMasViolencia.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/NoMasViolencia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoMasViolencia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/NoMasViolencia.vue?vue&type=template&id=9e3d69ee&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/page/NoMasViolencia.vue?vue&type=template&id=9e3d69ee&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoMasViolencia_vue_vue_type_template_id_9e3d69ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NoMasViolencia.vue?vue&type=template&id=9e3d69ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/NoMasViolencia.vue?vue&type=template&id=9e3d69ee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoMasViolencia_vue_vue_type_template_id_9e3d69ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoMasViolencia_vue_vue_type_template_id_9e3d69ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);