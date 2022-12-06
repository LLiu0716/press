import { r as resolveComponent, o as openBlock, c as createElementBlock, g as createBaseVNode, a as createVNode, h as createTextVNode } from "./app.d2123734.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://cn.vuejs.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Vue \u4E2D\u6587\u5B98\u7F51");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("p", null, [
    createBaseVNode("a", _hoisted_1, [
      _hoisted_2,
      createVNode(_component_ExternalLinkIcon)
    ])
  ]);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
