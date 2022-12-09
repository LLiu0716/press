import { d as defineComponent, e as ref, r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, w as withCtx, F as Fragment, f as renderList, b as createStaticVNode, g as createBaseVNode, t as toDisplayString, h as createTextVNode } from "./app.8d58ab53.js";
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u8B66\u544A</p></div><details class="custom-container details"><p>\u8FD9\u662F\u4E00\u4E2A details \u6807\u7B7E</p></details><div class="custom-container danger"><p class="custom-container-title">STOP</p><p>\u5371\u9669\u533A\u57DF\uFF0C\u7981\u6B62\u901A\u884C</p></div><details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u4F60\u597D\uFF0CVuePress\uFF01&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details>', 6);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "language-typescript ext-ts line-numbers-mode" }, [
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
  /* @__PURE__ */ createBaseVNode("div", { class: "line-numbers" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "1"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
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
  /* @__PURE__ */ createBaseVNode("div", { class: "line-numbers" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "line-number" }, "1"),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    ref(Date());
    return (_ctx, _cache) => {
      const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
      const _component_CodeGroup = resolveComponent("CodeGroup");
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createVNode(_component_CodeGroup, null, {
          default: withCtx(() => [
            createVNode(_component_CodeGroupItem, { title: "typescript" }, {
              default: withCtx(() => [
                _hoisted_7
              ]),
              _: 1
            }),
            createVNode(_component_CodeGroupItem, { title: "javascript" }, {
              default: withCtx(() => [
                _hoisted_8
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        (openBlock(), createElementBlock(Fragment, null, renderList(30, (v) => {
          return createBaseVNode("div", { key: v }, toDisplayString(v), 1);
        }), 64))
      ], 64);
    };
  }
});
export { _sfc_main as default };
