import { c as defineComponent, r as ref, h as computed, o as onMounted, p as openBlock, q as createElementBlock, R as createBaseVNode, P as Fragment, Q as renderList, O as createVNode, A as unref, x as normalizeClass, w as toDisplayString, _ as _export_sfc } from "./framework-c611892d.js";
import Mine from "./Mine-17f87f2b.js";
const _hoisted_1 = { class: "main" };
const _hoisted_2 = { class: "btn-box" };
const _hoisted_3 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MineClearance",
  setup(__props) {
    const checked = ref(1);
    const reset = ref(false);
    const num = computed(() => {
      return checked.value * 7;
    });
    const mineNum = computed(() => {
      switch (checked.value) {
        case 1:
          return 9;
        case 2:
          return 40;
        default:
          return 99;
      }
    });
    const button = ref([
      {
        id: 1,
        value: "简单"
      },
      {
        id: 2,
        value: "中等"
      },
      {
        id: 3,
        value: "困难"
      }
    ]);
    const onChecked = (id) => {
      checked.value = id;
      reset.value = !reset.value;
    };
    const onReset = () => {
      reset.value = !reset.value;
    };
    const onNext = () => {
      const index = button.value.findIndex((v) => v.id === checked.value);
      if (index + 1 != button.value.length) {
        checked.value = button.value[index + 1].id;
      } else {
        checked.value = button.value[0].id;
      }
      onReset();
    };
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_2, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(button.value, (v) => {
                return openBlock(), createElementBlock("button", {
                  key: v.id,
                  class: normalizeClass({ checked: checked.value == v.id }),
                  onClick: ($event) => onChecked(v.id)
                }, toDisplayString(v.value), 11, _hoisted_3);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            createBaseVNode("button", { onClick: onReset }, "重置")
          ]),
          createVNode(Mine, {
            td: unref(num),
            tr: unref(num),
            "mine-num": unref(mineNum),
            reset: reset.value,
            onOnReset: onReset,
            onOnNext: onNext
          }, null, 8, ["td", "tr", "mine-num", "reset"])
        ])
      ]);
    };
  }
});
const MineClearance_vue_vue_type_style_index_0_scoped_40f9ffec_lang = "";
const MineClearance = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-40f9ffec"], ["__file", "MineClearance.vue"]]);
export {
  MineClearance as default
};
