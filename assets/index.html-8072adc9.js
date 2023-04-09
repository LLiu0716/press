import { c as defineComponent, N as resolveComponent, p as openBlock, q as createElementBlock, R as createBaseVNode, v as createTextVNode, O as createVNode, _ as _export_sfc } from "./framework-c611892d.js";
const _hoisted_1 = {
  href: "https://nodejs.org/zh-cn/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.html",
  setup(__props) {
    const list = [
      {
        id: "1",
        name: "koa",
        href: "koa"
      }
    ];
    return (_ctx, _cache) => {
      const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
      const _component_LinkList = resolveComponent("LinkList");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("p", null, [
          createBaseVNode("a", _hoisted_1, [
            createTextVNode("Node 中文官网"),
            createVNode(_component_ExternalLinkIcon)
          ])
        ]),
        createVNode(_component_LinkList, {
          list,
          "base-url": "node"
        })
      ]);
    };
  }
});
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "index.html.vue"]]);
export {
  index_html as default
};
