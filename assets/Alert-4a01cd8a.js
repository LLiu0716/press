import { c as defineComponent, r as ref, B as watch, p as openBlock, V as createBlock, $ as withDirectives, a0 as vShow, R as createBaseVNode, x as normalizeClass, t as renderSlot, q as createElementBlock, S as createCommentVNode, ab as Teleport, _ as _export_sfc } from "./framework-f3b08abd.js";
const _hoisted_1 = { class: "i-layer-main" };
const _hoisted_2 = { class: "content-main" };
const _hoisted_3 = {
  key: 0,
  class: "content-footer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  props: {
    value: {
      type: Boolean
    },
    headerShow: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: ""
    }
  },
  emits: ["update:value", "close", "confirm"],
  setup(__props, { emit }) {
    const props = __props;
    const show = ref(props.value);
    const contentShow = ref(false);
    watch(
      () => props.value,
      (value) => {
        console.log("value", value);
        if (value) {
          show.value = value;
        }
      }
    );
    watch(
      () => show.value,
      (value) => {
        if (value) {
          setTimeout(() => {
            contentShow.value = value;
          }, 100);
        }
      }
    );
    function close() {
      contentShow.value = false;
      setTimeout(() => {
        emit("close");
        show.value = false;
      }, 500);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: "body",
        disabled: false
      }, [
        withDirectives(createBaseVNode(
          "section",
          _hoisted_1,
          [
            createBaseVNode(
              "section",
              {
                class: normalizeClass(["i-layer-mask", { "i-layer-mask-show": contentShow.value }])
              },
              null,
              2
              /* CLASS */
            ),
            createBaseVNode(
              "section",
              {
                class: normalizeClass(["i-layer-content", { "content-show": contentShow.value }])
              },
              [
                createBaseVNode("div", _hoisted_2, [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ]),
                renderSlot(_ctx.$slots, "footer", {}, void 0, true),
                !_ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  createCommentVNode(' <button @click="close">取消</button> '),
                  createBaseVNode("button", { onClick: close }, "确定")
                ])) : createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )
          ],
          512
          /* NEED_PATCH */
        ), [
          [vShow, show.value]
        ])
      ]);
    };
  }
});
const Alert_vue_vue_type_style_index_0_scoped_521d4ab3_lang = "";
const Alert = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-521d4ab3"], ["__file", "Alert.vue"]]);
export {
  Alert as default
};
