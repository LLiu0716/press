import { c as defineComponent, p as openBlock, q as createElementBlock, R as createBaseVNode, w as toDisplayString, P as Fragment, Q as renderList, _ as _export_sfc } from "./framework-f3b08abd.js";
const _hoisted_1 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LinkList",
  props: {
    list: null,
    title: { default: "页面列表" },
    baseUrl: { default: "web" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode(
          "h1",
          null,
          toDisplayString(__props.title),
          1
          /* TEXT */
        ),
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(__props.list, (item) => {
              return openBlock(), createElementBlock("li", {
                key: item.id
              }, [
                createBaseVNode("a", {
                  href: `/press/${__props.baseUrl}/${item.href}`
                }, toDisplayString(item.name), 9, _hoisted_1)
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]);
    };
  }
});
const LinkList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "LinkList.vue"]]);
export {
  LinkList as default
};
