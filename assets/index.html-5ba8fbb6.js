import { c as defineComponent, N as resolveComponent, p as openBlock, q as createElementBlock, O as createVNode, _ as _export_sfc } from "./framework-f3b08abd.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.html",
  setup(__props) {
    const list = [
      {
        id: "1",
        name: "扫雷",
        href: "mine-clearance"
      },
      {
        id: "2",
        name: "贪吃蛇",
        href: "gluttonous-snake"
      }
    ];
    return (_ctx, _cache) => {
      const _component_LinkList = resolveComponent("LinkList");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_LinkList, {
          list,
          "base-url": "game"
        })
      ]);
    };
  }
});
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "index.html.vue"]]);
export {
  index_html as default
};
