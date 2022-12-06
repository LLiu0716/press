import { d as defineComponent, e as ref, i as computed, j as onMounted, o as openBlock, c as createElementBlock, g as createBaseVNode, F as Fragment, f as renderList, n as normalizeClass, t as toDisplayString, a as createVNode, u as unref } from "./app.92c1248a.js";
import Mine from "./Mine.ba66b0ec.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
var Game_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "main" };
const _hoisted_2 = { class: "btn-box" };
const _hoisted_3 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
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
        value: "\u7B80\u5355"
      },
      {
        id: 2,
        value: "\u4E2D\u7B49"
      },
      {
        id: 3,
        value: "\u56F0\u96BE"
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
            (openBlock(true), createElementBlock(Fragment, null, renderList(button.value, (v) => {
              return openBlock(), createElementBlock("button", {
                key: v.id,
                class: normalizeClass({ checked: checked.value == v.id }),
                onClick: ($event) => onChecked(v.id)
              }, toDisplayString(v.value), 11, _hoisted_3);
            }), 128)),
            createBaseVNode("button", { onClick: onReset }, "\u91CD\u7F6E")
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
var Game = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b545a052"]]);
export { Game as default };
