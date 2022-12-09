import { d as defineComponent, o as openBlock, c as createElementBlock, g as createBaseVNode, t as toDisplayString, F as Fragment, f as renderList } from "./app.8d58ab53.js";
const _hoisted_1 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    list: null,
    title: { default: "\u9875\u9762\u5217\u8868" },
    baseUrl: { default: "web" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("h1", null, toDisplayString(__props.title), 1),
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.list, (item) => {
            return openBlock(), createElementBlock("li", {
              key: item.id
            }, [
              createBaseVNode("a", {
                href: `/press/${__props.baseUrl}/${item.href}`
              }, toDisplayString(item.name), 9, _hoisted_1)
            ]);
          }), 128))
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
