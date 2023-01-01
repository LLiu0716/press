import { d as defineComponent, e as ref, o as openBlock, c as createElementBlock, F as Fragment, f as renderList, t as toDisplayString, g as createBaseVNode } from "./app.cb60c35e.js";
import "./axios.755e13ab.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", null, "\u8FD9\u662F HOME \u9875", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const list = ref([]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", null, [
        _hoisted_1,
        (openBlock(true), createElementBlock(Fragment, null, renderList(list.value, (v) => {
          return openBlock(), createElementBlock("div", {
            key: v.id
          }, toDisplayString(v.name), 1);
        }), 128))
      ]);
    };
  }
});
export { _sfc_main as default };
