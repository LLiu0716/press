import { c as defineComponent, r as ref, N as resolveComponent, p as openBlock, q as createElementBlock, O as createVNode, W as withCtx, P as Fragment, Q as renderList, a2 as createStaticVNode, R as createBaseVNode, v as createTextVNode, w as toDisplayString, _ as _export_sfc } from "./framework-c611892d.js";
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>这是一个提示</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>这是一个警告</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>这是一个危险警告</p></div><details class="custom-container details"><p>这是一个 details 标签</p></details><div class="custom-container danger"><p class="custom-container-title">STOP</p><p>危险区域，禁止通行</p></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你好，VuePress！&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>', 6);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-typescript line-numbers-mode",
    "data-ext": "ts"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-typescript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" foo"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token builtin" }, "string"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'foo'"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "line-numbers",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" foo "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'foo'"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "line-numbers",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.html",
  setup(__props) {
    ref(Date());
    return (_ctx, _cache) => {
      const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
      const _component_CodeGroup = resolveComponent("CodeGroup");
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        createVNode(_component_CodeGroup, null, {
          default: withCtx(() => [
            createVNode(_component_CodeGroupItem, { title: "typescript" }, {
              default: withCtx(() => [
                _hoisted_7
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_CodeGroupItem, { title: "javascript" }, {
              default: withCtx(() => [
                _hoisted_8
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (openBlock(), createElementBlock(
          Fragment,
          null,
          renderList(30, (v) => {
            return createBaseVNode(
              "div",
              { key: v },
              toDisplayString(v),
              1
              /* TEXT */
            );
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ]);
    };
  }
});
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "index.html.vue"]]);
export {
  index_html as default
};
