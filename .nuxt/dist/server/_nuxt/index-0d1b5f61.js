import { withCtx, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import App from "./app-fc8ee179.js";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(App, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full p-4 md:grid row-auto col-auto rounded-lg bg-white text-sm group cursor-pointer"${_scopeId}><div data-tid="header" class="col-start-1 md:col-start-2 col-end-4 row-start-1 flex justify-between items-center pb-4"${_scopeId}><div data-tid="discount" class="button p-1 cursor-default"${_scopeId}><button data-tid="minus" type="button" class="button-discount text-blue-700 hover:bg-blue-100" title="Down vote"${_scopeId}><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M4 12L20 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></button><span class="text-base text-default"${_scopeId}> 27° </span><button data-tid="plus" type="button" class="button-discount text-red-700 hover:bg-red-100" title="Up vote"${_scopeId}><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M4 12H20M12 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></button></div><div data-tid="postedAt" class="flex text-gray-400"${_scopeId}><svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg><span class="ml-1"${_scopeId}>Posted 43 m ago</span></div></div><div data-tid="picture" class="float-left w-[72px] md:w-[160px] lg:w-[192px] row-start-2 md:row-start-1 row-end-5 col-start-1 mr-4 overflow-hidden rounded-lg relative"${_scopeId}><img alt="L&#39;oreal Men Expert Instant Refresh Gift Set 300ml Shower Gel + 100ml Face Scrub - Student Discount £4.50 + Free C&amp;C" class="object-contain aspect-square group-hover:scale-105 transition-transform" src="https://images.hotukdeals.com/threads/raw/tNPku/4211824_1/re/768x768/qt/60/4211824_1.jpg" loading="lazy" width="305" height="300"${_scopeId}><div class="absolute content-none bg-black bg-opacity-5 top-0 left-0 right-0 bottom-0"${_scopeId}></div></div><div data-tid="title" class="col-start-2 col-end-4 row-start-2 text-base overflow-x-hidden"${_scopeId}><strong class="line-clamp-2 fade hover:text-default transition-colors"${_scopeId}><a title="L&#39;oreal Men Expert Instant Refresh Gift Set 300ml Shower Gel + 100ml Face Scrub - Student Discount £4.50 + Free C&amp;C" href="https://www.hotukdeals.com/deals/loreal-men-expert-instant-refresh-gift-set-student-discount-ps450-free-cc-4212659"${_scopeId}> L&#39;oreal Men Expert Instant Refresh Gift Set 300ml Shower Gel + 100ml Face Scrub - Student Discount £4.50 + Free C&amp;C </a></strong><span data-tid="price" class="flex items-center w-full fade"${_scopeId}><span class="test-lg text-default font-bold"${_scopeId}><span class=""${_scopeId}>£5</span></span><span class="flex items-center text-gray-400 ml-2"${_scopeId}><svg fill="currentColor" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.998 511.998" xml:space="preserve"${_scopeId}><g${_scopeId}><g${_scopeId}><path d="M502.985,314.681v-61.857c0-2.867-0.754-5.683-2.186-8.167l-44.834-77.733c-2.919-5.061-8.317-8.178-14.16-8.178h-69.402
			v-21.772c0-9.027-7.319-16.346-16.346-16.346H28.773c-9.027,0-16.346,7.318-16.346,16.346v176.45
			C5.296,315.181,0,321.601,0,329.275c0,9.027,7.319,16.346,16.346,16.346h47.047c4.337,25.924,26.919,45.75,54.056,45.75
			s49.719-19.825,54.056-45.75h194.863c4.337,25.924,26.919,45.75,54.056,45.75c27.137,0,49.719-19.825,54.056-45.75h21.171
			c9.027,0,16.346-7.318,16.346-16.346C512,322.887,508.327,317.37,502.985,314.681z M117.451,358.679
			c-12.203,0-22.13-9.927-22.13-22.13c0-12.203,9.927-22.13,22.13-22.13c12.203,0,22.13,9.927,22.13,22.13
			C139.58,348.752,129.653,358.679,117.451,358.679z M339.713,312.929H166.914c-8.84-18.437-27.689-31.201-49.464-31.201
			s-40.625,12.764-49.464,31.201H45.119v-159.61h294.594V312.929z M372.404,191.437h59.959l22.443,38.91h-82.402V191.437z
			 M420.426,358.679c-12.203,0-22.13-9.927-22.13-22.13c0-12.203,9.927-22.13,22.13-22.13c12.203,0,22.13,9.927,22.13,22.13
			C442.556,348.752,432.628,358.679,420.426,358.679z M470.293,312.929h-0.403c-8.84-18.437-27.689-31.201-49.464-31.201
			c-20.659,0-38.679,11.49-48.023,28.412v-47.103h97.89V312.929z"${_scopeId}></path></g></g></svg><span class="ml-2 text-sm"${_scopeId}> £3 </span></span><span class="mx-2 w-[1px] h-6 bg-gray-300"${_scopeId}></span><button data-tid="provider" class="flex text-sm"${_scopeId}><a class="text-default font-bold hover:underline"${_scopeId}>Superdrug</a><span class="text-gray-400 ml-1"${_scopeId}>Deals</span></button></span></div><div data-tid="description" class="col-start-1 md:col-start-2 col-end-4 row-start-3 w-full md:w-auto py-1 line-clamp-5"${_scopeId}><span${_scopeId}> Description High performance shower gel to jump start your morning and give you an instant wake-up effect Enriched with 100mg of Taurine, an active ingredient that&#39;s like a shot of energy … </span></div><div data-tid="footer" class="col-start-1 md:col-start-2 col-end-4 row-start-4 flex flex-wrap items-center"${_scopeId}><span data-tid="source" class="flex mr-1 items-center"${_scopeId}><span class="aspect-square overflow-hidden rounded-full"${_scopeId}><img src="https://images.hotukdeals.com/users/raw/default/1426964_13/fi/30x30/qt/80/1426964_13.jpg" alt="Optimus2050&#39;s avatar" class=""${_scopeId}></span><span class="text-sm font-bold ml-1"${_scopeId}> Optimus2050 </span><span class=""${_scopeId}></span></span><span data-tid="meta" class="flex ml-auto"${_scopeId}><button data-tid="bookmark" type="button" class="button aspect-square mr-2"${_scopeId}><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"${_scopeId}></path></svg></button><button data-tid="comments" class="button px-4" title="Comments"${_scopeId}><svg fill="currentColor" width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M 2 5 L 2 21 L 6 21 L 6 26.09375 L 7.625 24.78125 L 12.34375 21 L 22 21 L 22 5 Z M 4 7 L 20 7 L 20 19 L 11.65625 19 L 11.375 19.21875 L 8 21.90625 L 8 19 L 4 19 Z M 24 9 L 24 11 L 28 11 L 28 23 L 24 23 L 24 25.90625 L 20.34375 23 L 12.84375 23 L 10.34375 25 L 19.65625 25 L 26 30.09375 L 26 25 L 30 25 L 30 9 Z"${_scopeId}></path></svg><span class="ml-1"${_scopeId}>0</span></button></span><button data-tid="deal" class="flex w-full md:w-auto items-center justify-center h-9 text-white bg-default hover:bg-hover hover:shadow-deal transition-all rounded-full px-3 mt-2 md:mt-0 md:ml-2"${_scopeId}><span class=""${_scopeId}>Get deal*</span><svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5m-6 0 7.5-7.5M15 3h6v6"${_scopeId}></path></svg></button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full p-4 md:grid row-auto col-auto rounded-lg bg-white text-sm group cursor-pointer" }, [
                createVNode("div", {
                  "data-tid": "header",
                  class: "col-start-1 md:col-start-2 col-end-4 row-start-1 flex justify-between items-center pb-4"
                }, [
                  createVNode("div", {
                    "data-tid": "discount",
                    class: "button p-1 cursor-default"
                  }, [
                    createVNode("button", {
                      "data-tid": "minus",
                      type: "button",
                      class: "button-discount text-blue-700 hover:bg-blue-100",
                      title: "Down vote"
                    }, [
                      (openBlock(), createBlock("svg", {
                        width: "16px",
                        height: "16px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M4 12L20 12",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    createVNode("span", { class: "text-base text-default" }, " 27° "),
                    createVNode("button", {
                      "data-tid": "plus",
                      type: "button",
                      class: "button-discount text-red-700 hover:bg-red-100",
                      title: "Up vote"
                    }, [
                      (openBlock(), createBlock("svg", {
                        width: "16px",
                        height: "16px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M4 12H20M12 4V20",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ])
                  ]),
                  createVNode("div", {
                    "data-tid": "postedAt",
                    class: "flex text-gray-400"
                  }, [
                    (openBlock(), createBlock("svg", {
                      width: "22px",
                      height: "22px",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ])),
                    createVNode("span", { class: "ml-1" }, "Posted 43 m ago")
                  ])
                ]),
                createVNode("div", {
                  "data-tid": "picture",
                  class: "float-left w-[72px] md:w-[160px] lg:w-[192px] row-start-2 md:row-start-1 row-end-5 col-start-1 mr-4 overflow-hidden rounded-lg relative"
                }, [
                  createVNode("img", {
                    alt: "L'oreal Men Expert Instant Refresh Gift Set 300ml Shower Gel + 100ml Face Scrub - Student Discount £4.50 + Free C&C",
                    class: "object-contain aspect-square group-hover:scale-105 transition-transform",
                    src: "https://images.hotukdeals.com/threads/raw/tNPku/4211824_1/re/768x768/qt/60/4211824_1.jpg",
                    loading: "lazy",
                    width: "305",
                    height: "300"
                  }),
                  createVNode("div", { class: "absolute content-none bg-black bg-opacity-5 top-0 left-0 right-0 bottom-0" })
                ]),
                createVNode("div", {
                  "data-tid": "title",
                  class: "col-start-2 col-end-4 row-start-2 text-base overflow-x-hidden"
                }, [
                  createVNode("strong", { class: "line-clamp-2 fade hover:text-default transition-colors" }, [
                    createVNode("a", {
                      title: "L'oreal Men Expert Instant Refresh Gift Set 300ml Shower Gel + 100ml Face Scrub - Student Discount £4.50 + Free C&C",
                      href: "https://www.hotukdeals.com/deals/loreal-men-expert-instant-refresh-gift-set-student-discount-ps450-free-cc-4212659"
                    }, " L'oreal Men Expert Instant Refresh Gift Set 300ml Shower Gel + 100ml Face Scrub - Student Discount £4.50 + Free C&C ")
                  ]),
                  createVNode("span", {
                    "data-tid": "price",
                    class: "flex items-center w-full fade"
                  }, [
                    createVNode("span", { class: "test-lg text-default font-bold" }, [
                      createVNode("span", { class: "" }, "£5")
                    ]),
                    createVNode("span", { class: "flex items-center text-gray-400 ml-2" }, [
                      (openBlock(), createBlock("svg", {
                        fill: "currentColor",
                        height: "24px",
                        width: "24px",
                        version: "1.1",
                        id: "Layer_1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        viewBox: "0 0 511.998 511.998",
                        "xml:space": "preserve"
                      }, [
                        createVNode("g", null, [
                          createVNode("g", null, [
                            createVNode("path", { d: "M502.985,314.681v-61.857c0-2.867-0.754-5.683-2.186-8.167l-44.834-77.733c-2.919-5.061-8.317-8.178-14.16-8.178h-69.402\n			v-21.772c0-9.027-7.319-16.346-16.346-16.346H28.773c-9.027,0-16.346,7.318-16.346,16.346v176.45\n			C5.296,315.181,0,321.601,0,329.275c0,9.027,7.319,16.346,16.346,16.346h47.047c4.337,25.924,26.919,45.75,54.056,45.75\n			s49.719-19.825,54.056-45.75h194.863c4.337,25.924,26.919,45.75,54.056,45.75c27.137,0,49.719-19.825,54.056-45.75h21.171\n			c9.027,0,16.346-7.318,16.346-16.346C512,322.887,508.327,317.37,502.985,314.681z M117.451,358.679\n			c-12.203,0-22.13-9.927-22.13-22.13c0-12.203,9.927-22.13,22.13-22.13c12.203,0,22.13,9.927,22.13,22.13\n			C139.58,348.752,129.653,358.679,117.451,358.679z M339.713,312.929H166.914c-8.84-18.437-27.689-31.201-49.464-31.201\n			s-40.625,12.764-49.464,31.201H45.119v-159.61h294.594V312.929z M372.404,191.437h59.959l22.443,38.91h-82.402V191.437z\n			 M420.426,358.679c-12.203,0-22.13-9.927-22.13-22.13c0-12.203,9.927-22.13,22.13-22.13c12.203,0,22.13,9.927,22.13,22.13\n			C442.556,348.752,432.628,358.679,420.426,358.679z M470.293,312.929h-0.403c-8.84-18.437-27.689-31.201-49.464-31.201\n			c-20.659,0-38.679,11.49-48.023,28.412v-47.103h97.89V312.929z" })
                          ])
                        ])
                      ])),
                      createVNode("span", { class: "ml-2 text-sm" }, " £3 ")
                    ]),
                    createVNode("span", { class: "mx-2 w-[1px] h-6 bg-gray-300" }),
                    createVNode("button", {
                      "data-tid": "provider",
                      class: "flex text-sm"
                    }, [
                      createVNode("a", { class: "text-default font-bold hover:underline" }, "Superdrug"),
                      createVNode("span", { class: "text-gray-400 ml-1" }, "Deals")
                    ])
                  ])
                ]),
                createVNode("div", {
                  "data-tid": "description",
                  class: "col-start-1 md:col-start-2 col-end-4 row-start-3 w-full md:w-auto py-1 line-clamp-5"
                }, [
                  createVNode("span", null, " Description High performance shower gel to jump start your morning and give you an instant wake-up effect Enriched with 100mg of Taurine, an active ingredient that's like a shot of energy … ")
                ]),
                createVNode("div", {
                  "data-tid": "footer",
                  class: "col-start-1 md:col-start-2 col-end-4 row-start-4 flex flex-wrap items-center"
                }, [
                  createVNode("span", {
                    "data-tid": "source",
                    class: "flex mr-1 items-center"
                  }, [
                    createVNode("span", { class: "aspect-square overflow-hidden rounded-full" }, [
                      createVNode("img", {
                        src: "https://images.hotukdeals.com/users/raw/default/1426964_13/fi/30x30/qt/80/1426964_13.jpg",
                        alt: "Optimus2050's avatar",
                        class: ""
                      })
                    ]),
                    createVNode("span", { class: "text-sm font-bold ml-1" }, " Optimus2050 "),
                    createVNode("span", { class: "" })
                  ]),
                  createVNode("span", {
                    "data-tid": "meta",
                    class: "flex ml-auto"
                  }, [
                    createVNode("button", {
                      "data-tid": "bookmark",
                      type: "button",
                      class: "button aspect-square mr-2"
                    }, [
                      (openBlock(), createBlock("svg", {
                        width: "16px",
                        height: "16px",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          d: "M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ]),
                    createVNode("button", {
                      "data-tid": "comments",
                      class: "button px-4",
                      title: "Comments"
                    }, [
                      (openBlock(), createBlock("svg", {
                        fill: "currentColor",
                        width: "22px",
                        height: "22px",
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", { d: "M 2 5 L 2 21 L 6 21 L 6 26.09375 L 7.625 24.78125 L 12.34375 21 L 22 21 L 22 5 Z M 4 7 L 20 7 L 20 19 L 11.65625 19 L 11.375 19.21875 L 8 21.90625 L 8 19 L 4 19 Z M 24 9 L 24 11 L 28 11 L 28 23 L 24 23 L 24 25.90625 L 20.34375 23 L 12.84375 23 L 10.34375 25 L 19.65625 25 L 26 30.09375 L 26 25 L 30 25 L 30 9 Z" })
                      ])),
                      createVNode("span", { class: "ml-1" }, "0")
                    ])
                  ]),
                  createVNode("button", {
                    "data-tid": "deal",
                    class: "flex w-full md:w-auto items-center justify-center h-9 text-white bg-default hover:bg-hover hover:shadow-deal transition-all rounded-full px-3 mt-2 md:mt-0 md:ml-2"
                  }, [
                    createVNode("span", { class: "" }, "Get deal*"),
                    (openBlock(), createBlock("svg", {
                      width: "20px",
                      height: "20px",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        stroke: "currentColor",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M12 6H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5m-6 0 7.5-7.5M15 3h6v6"
                      })
                    ]))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-0d1b5f61.js.map
