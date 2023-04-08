import { r as ref, o as onMounted, B as watch, c as defineComponent, n as onBeforeUnmount, A as unref, p as openBlock, q as createElementBlock, P as Fragment, Q as renderList, S as createCommentVNode, R as createBaseVNode, w as toDisplayString, x as normalizeClass, _ as _export_sfc } from "./framework-f3b08abd.js";
const bast = () => {
  const resize = ref(0);
  const isH5 = ref(false);
  let timeId = true;
  onMounted(() => {
    resize.value = window.innerWidth;
    window.onresize = () => {
      return (() => {
        if (timeId) {
          timeId = false;
          return window.setTimeout(() => {
            resize.value = window.innerWidth;
            timeId = true;
          }, 300);
        }
        return null;
      })();
    };
  });
  const outWatch = watch(resize, (value) => {
    const isAndroid = window.navigator.userAgent.match(/android/gi);
    const isIPhone = window.navigator.userAgent.match(/iphone/gi);
    console.log("isAndroid ", isAndroid);
    console.log("isIPhone ", isIPhone);
    console.log("value <= 750 ", value <= 750);
    if (isIPhone || isAndroid || value <= 750) {
      isH5.value = true;
    } else {
      isH5.value = false;
    }
    console.log("isH5", isH5.value);
  });
  return {
    // 监听窗口大小
    isH5,
    // 关闭监听
    outWatch
  };
};
const base = bast;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Control",
  emits: ["onClick"],
  setup(__props, { emit: emits }) {
    const touchstart = ref("");
    const { isH5 } = base();
    const addEventListener = () => {
      window.addEventListener("keydown", (e) => {
        let key = "2";
        switch (e.code) {
          case "Space":
            key = "Space";
            break;
          case "ArrowUp":
          case "KeyW":
            key = "1";
            break;
          case "ArrowDown":
          case "KeyS":
            key = "4";
            break;
          case "ArrowLeft":
          case "KeyA":
            key = "3";
            break;
          default:
            key = "2";
            break;
        }
        emits("onClick", key);
      });
    };
    const onClick = (target) => {
      touchstart.value = target.innerText;
      emits("onClick", target.innerText);
    };
    onMounted(() => {
      if (isH5.value)
        return;
      addEventListener();
    });
    onBeforeUnmount(() => {
      window.removeEventListener("keydown", () => {
      });
    });
    return (_ctx, _cache) => {
      return unref(isH5) ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: "control",
          onTouchstart: _cache[0] || (_cache[0] = (e) => onClick(e.target)),
          onTouchend: _cache[1] || (_cache[1] = () => touchstart.value = "")
        },
        [
          (openBlock(), createElementBlock(
            Fragment,
            null,
            renderList(4, (v) => {
              return createBaseVNode(
                "span",
                {
                  class: normalizeClass([touchstart.value === `${v}` ? "check" : ""])
                },
                toDisplayString(v),
                3
                /* TEXT, CLASS */
              );
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ],
        32
        /* HYDRATE_EVENTS */
      )) : createCommentVNode("v-if", true);
    };
  }
});
const Control_vue_vue_type_style_index_0_scoped_16693159_lang = "";
const Control = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-16693159"], ["__file", "Control.vue"]]);
export {
  Control as default
};
