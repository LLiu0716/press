import { c as defineComponent, N as resolveComponent, p as openBlock, q as createElementBlock, O as createVNode, _ as _export_sfc } from "./framework-f3b08abd.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.html",
  setup(__props) {
    const list = [
      {
        id: "1",
        name: "前端项目规范化工具配置",
        href: "tool"
      },
      {
        id: "2",
        name: "Vue",
        href: "vue"
      },
      {
        id: "3",
        name: "React",
        href: "react"
      }
    ];
    return (_ctx, _cache) => {
      const _component_LinkList = resolveComponent("LinkList");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_LinkList, { list })
      ]);
    };
  }
});
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "index.html.vue"]]);
export {
  index_html as default
};
