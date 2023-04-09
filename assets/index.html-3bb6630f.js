import { c as defineComponent, N as resolveComponent, p as openBlock, q as createElementBlock, O as createVNode, _ as _export_sfc } from "./framework-c611892d.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.html",
  setup(__props) {
    const list = [
      {
        id: "1",
        name: "与陌生人搭讪的三次握手",
        href: "three-way-handshake"
      }
    ];
    return (_ctx, _cache) => {
      const _component_LinkList = resolveComponent("LinkList");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_LinkList, {
          list,
          "base-url": "love"
        })
      ]);
    };
  }
});
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "index.html.vue"]]);
export {
  index_html as default
};
