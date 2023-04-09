import { c as defineComponent, r as ref, B as watch, o as onMounted, n as onBeforeUnmount, p as openBlock, q as createElementBlock, R as createBaseVNode, y as normalizeStyle, P as Fragment, Q as renderList, v as createTextVNode, x as normalizeClass, w as toDisplayString, O as createVNode, W as withCtx, aa as pushScopeId, ab as popScopeId, V as createBlock, _ as _export_sfc } from "./framework-c611892d.js";
import Snake from "./Snake-b2035f7a.js";
import Control from "./Control-9b65d1b7.js";
import Alert from "./Alert-2c06a393.js";
const _withScopeId = (n) => (pushScopeId("data-v-683afa8e"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "main" };
const _hoisted_2 = { class: "main-count" };
const _hoisted_3 = {
  key: 0,
  class: "main-control"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "b",
  null,
  "提示:",
  -1
  /* HOISTED */
));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "alert" },
  [
    /* @__PURE__ */ createBaseVNode("b", null, "游戏失败")
  ],
  -1
  /* HOISTED */
));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GluttonousSnake",
  setup(__props) {
    const size = 18;
    const index = 1;
    const total = 300;
    const config = {
      /**
       * 方向信息
       * 1. ↑
       * 2: →
       * 3: ←
       * 4: ↓
       */
      direction: "2",
      max: size * index * 20
    };
    const snakeList = ref([]);
    const hansGameOver = ref(false);
    const suspend = ref(false);
    const target = ref({
      top: "",
      left: ""
    });
    watch(
      () => snakeList.value.length,
      (value) => {
        if (value > total) {
          select(false);
        }
      }
    );
    const onClick = (direction) => {
      if (direction === "Space") {
        start();
        return;
      }
      if (!suspend.value)
        return;
      if (config.direction === "1" && direction === "4")
        return;
      if (config.direction === "2" && direction === "3")
        return;
      if (config.direction === "3" && direction === "2")
        return;
      if (config.direction === "4" && direction === "1")
        return;
      config.direction = direction;
      move();
    };
    let timeId;
    let speed = 360;
    const start = () => {
      suspend.value = !suspend.value;
      if (!suspend.value) {
        document.body.style.overflow = "auto";
        clearInterval(timeId);
      } else {
        document.body.style.overflow = "hidden";
        timeId = setInterval(move, speed);
      }
    };
    const info = () => {
      config.direction = "2";
      snakeList.value = [];
      for (let i = 0; i < 5; i++) {
        snakeList.value.push({
          id: 0 + i,
          control: {
            top: "0px",
            left: size * i + "px",
            [i === 4 ? "transform" : ""]: "rotate(-90deg)"
          },
          type: i === 4 ? "head" : "body"
        });
      }
      randomTarget();
      clearInterval(timeId);
      if (!suspend.value)
        return;
      suspend.value = true;
      timeId = setInterval(move, speed);
    };
    const select = (up) => {
      if (speed > 80 && up) {
        speed -= 60;
      }
      if (speed < 800 && !up) {
        speed += 60;
      }
      info();
    };
    const randomNumber = () => {
      const i = ~~(Math.random() * 19) + 1;
      const j = ~~(Math.random() * 19) + 1;
      if (!snakeList.value.some(
        (v) => parseInt(v.control.top) === i * size && parseInt(v.control.left) === j * size
      )) {
        return { top: i * size + "px", left: size * j + "px" };
      } else {
        return randomNumber();
      }
    };
    const randomTarget = () => {
      const { top, left } = randomNumber();
      target.value = {
        top,
        left
      };
    };
    const move = () => {
      if (snakeList.value.some(
        (v) => v.control.top === target.value.top && v.control.left === target.value.left
      )) {
        snakeList.value.push({
          type: "body",
          id: snakeList.value.length,
          control: target.value
        });
        randomTarget();
      }
      const item = snakeList.value.find((v) => v.type === "head");
      const obj = {
        top: "",
        left: "",
        transform: ""
      };
      switch (config.direction) {
        case "1":
          obj.transform = "rotate(-180deg)";
          obj.top = parseInt(item == null ? void 0 : item.control.top) - size + "px";
          obj.left = item == null ? void 0 : item.control.left;
          break;
        case "2":
          obj.transform = "rotate(-90deg)";
          obj.left = parseInt(item == null ? void 0 : item.control.left) + size + "px";
          obj.top = item == null ? void 0 : item.control.top;
          break;
        case "3":
          obj.transform = "rotate(90deg)";
          obj.left = parseInt(item == null ? void 0 : item.control.left) - size + "px";
          obj.top = item == null ? void 0 : item.control.top;
          break;
        default:
          obj.transform = "rotate(0deg)";
          obj.top = parseInt(item == null ? void 0 : item.control.top) + size + "px";
          obj.left = item == null ? void 0 : item.control.left;
          break;
      }
      if (parseInt(obj.top) < 0 || parseInt(obj.top) >= config.max || parseInt(obj.left) < 0 || parseInt(obj.left) >= config.max || snakeList.value.some(
        (v) => v.control.top === obj.top && v.control.left === obj.left
      )) {
        hansGameOver.value = true;
        isShow.value = true;
        return;
      }
      item.type = "body";
      item.control.transform = "";
      snakeList.value.push({
        type: "head",
        id: snakeList.value[0].id,
        control: obj
      });
      snakeList.value.splice(0, 1);
    };
    const isShow = ref(false);
    function onConfirm() {
      if (hansGameOver.value) {
        suspend.value = true;
        isShow.value = false;
        info();
      } else {
        select(false);
      }
    }
    onMounted(() => {
      info();
    });
    onBeforeUnmount(() => {
      document.body.style.overflow = "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createBaseVNode("main", _hoisted_1, [
            createBaseVNode(
              "div",
              {
                class: "main-view",
                style: normalizeStyle({ minWidth: 365 * index + "px", minHeight: 365 * index + "px" })
              },
              [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(snakeList.value, (v, i) => {
                    return openBlock(), createBlock(Snake, {
                      key: v.id,
                      index: i,
                      type: v.type,
                      width: size * index,
                      height: size * index,
                      control: v.control
                    }, null, 8, ["index", "type", "width", "height", "control"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                createBaseVNode(
                  "div",
                  {
                    class: "target",
                    style: normalizeStyle({
                      width: size * index + "px",
                      height: size * index + "px",
                      ...target.value
                    })
                  },
                  null,
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            ),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => select(false))
              }, "上一关"),
              createBaseVNode("span", null, [
                createTextVNode("当前长度 "),
                createBaseVNode(
                  "b",
                  {
                    class: normalizeClass(`snakeList-length-${snakeList.value.length % 3}`)
                  },
                  toDisplayString(snakeList.value.length),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              createBaseVNode("button", {
                onClick: _cache[1] || (_cache[1] = ($event) => select(true))
              }, "下一关")
            ]),
            (openBlock(), createElementBlock("div", _hoisted_3, [
              createBaseVNode(
                "button",
                { onClick: start },
                toDisplayString(suspend.value ? "暂停" : "开始"),
                1
                /* TEXT */
              ),
              createVNode(Control, { onOnClick: onClick }),
              createBaseVNode("button", { onClick: info }, "重来")
            ])),
            createBaseVNode("p", { class: "main-tip" }, [
              _hoisted_4,
              createTextVNode(" 长度超过 "),
              createBaseVNode("span", null, toDisplayString(total)),
              createTextVNode(" 自动加速 ")
            ])
          ]),
          createVNode(Alert, {
            value: isShow.value,
            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => isShow.value = $event),
            onClose: onConfirm
          }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const GluttonousSnake_vue_vue_type_style_index_0_scoped_683afa8e_lang = "";
const GluttonousSnake = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-683afa8e"], ["__file", "GluttonousSnake.vue"]]);
export {
  GluttonousSnake as default
};
