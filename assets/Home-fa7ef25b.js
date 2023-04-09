import { c as defineComponent, r as ref, p as openBlock, q as createElementBlock, P as Fragment, Q as renderList, R as createBaseVNode, w as toDisplayString, _ as _export_sfc } from "./framework-c611892d.js";
import "./index-2d77be42.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  null,
  "这是 HOME 页",
  -1
  /* HOISTED */
);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Home",
  setup(__props) {
    const list = ref([]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", null, [
        _hoisted_1,
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(list.value, (v) => {
            return openBlock(), createElementBlock(
              "div",
              {
                key: v.id
              },
              toDisplayString(v.name),
              1
              /* TEXT */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]);
    };
  }
});
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Home.vue"]]);
export {
  Home as default
};
