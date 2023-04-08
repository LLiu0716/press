import { c as defineComponent, p as openBlock, q as createElementBlock, x as normalizeClass, y as normalizeStyle, _ as _export_sfc } from "./framework-f3b08abd.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Snake",
  props: {
    index: { default: 0 },
    width: { default: 18 },
    height: { default: 18 },
    type: { default: "body" },
    control: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "span",
        {
          class: normalizeClass(["snake", "snake-" + __props.index % 5, "snake-" + __props.type]),
          style: normalizeStyle({ width: __props.width + "px", height: __props.height + "px", ...__props.control })
        },
        null,
        6
        /* CLASS, STYLE */
      );
    };
  }
});
const Snake_vue_vue_type_style_index_0_scoped_887dcffc_lang = "";
const Snake = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-887dcffc"], ["__file", "Snake.vue"]]);
export {
  Snake as default
};
