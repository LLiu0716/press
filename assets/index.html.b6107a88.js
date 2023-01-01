import { d as defineComponent, r as resolveComponent, o as openBlock, i as createBlock } from "./app.cb60c35e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const list = [
      {
        id: "1",
        name: "\u4E0E\u964C\u751F\u4EBA\u642D\u8BAA\u7684\u4E09\u6B21\u63E1\u624B",
        href: "three-way-handshake"
      }
    ];
    return (_ctx, _cache) => {
      const _component_LinkList = resolveComponent("LinkList");
      return openBlock(), createBlock(_component_LinkList, {
        list,
        "base-url": "love"
      });
    };
  }
});
export { _sfc_main as default };
