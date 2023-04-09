import { c as defineComponent, r as ref, h as computed, o as onMounted, p as openBlock, q as createElementBlock, R as createBaseVNode, v as createTextVNode, x as normalizeClass, w as toDisplayString, O as createVNode, W as withCtx, P as Fragment, aa as pushScopeId, ab as popScopeId, _ as _export_sfc } from "./framework-c611892d.js";
import Control from "./Control-9b65d1b7.js";
import Alert from "./Alert-2c06a393.js";
const _withScopeId = (n) => (pushScopeId("data-v-82afbc54"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "main" };
const _hoisted_2 = { class: "canvas-box" };
const _hoisted_3 = { class: "main-count" };
const _hoisted_4 = { class: "main-control" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "b",
  null,
  "提示:",
  -1
  /* HOISTED */
));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "alert" },
  [
    /* @__PURE__ */ createBaseVNode("b", null, "游戏失败")
  ],
  -1
  /* HOISTED */
));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GluttonousSnakeCanvas",
  setup(__props) {
    const boxSize = 17;
    let timeId;
    let speed = 360;
    const total = 300;
    const config = {
      /**
       * 方向信息
       * 1. ↑
       * 2: →
       * 3: ←
       * 4: ↓
       */
      direction: "2"
    };
    const canvasBox = ref();
    const snakeList = ref([]);
    const target = ref({});
    const suspend = ref(false);
    const ctx = computed(() => {
      var _a;
      return (_a = canvasBox.value) == null ? void 0 : _a.getContext("2d");
    });
    const onClick = (direction) => {
      if (direction === "Space") {
        start();
        return;
      }
      if (suspend.value)
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
    };
    function info() {
      snakeList.value = [];
      for (let i = 1; i <= 3; i++) {
        snakeList.value.push({
          x: i,
          y: 1,
          type: i === 3 ? "head" : "body"
        });
      }
      start();
    }
    const randomNumber = () => {
      const x = ~~(Math.random() * 19) + 1;
      const y = ~~(Math.random() * 19) + 1;
      if (!snakeList.value.some((v) => v.x === x && v.y === y)) {
        return { x, y };
      } else {
        return randomNumber();
      }
    };
    const randomTarget = (check = false) => {
      if (check || !target.value.type) {
        const { x, y } = randomNumber();
        target.value = {
          type: "body",
          y,
          x
        };
      }
      ctx.value.beginPath();
      ctx.value.fillStyle = "#ff0";
      ctx.value.fillRect(
        (target.value.x - 1) * boxSize,
        (target.value.y - 1) * boxSize,
        boxSize,
        boxSize
      );
    };
    function drawSnake(snakeList2) {
      snakeList2.forEach((v) => {
        ctx.value.beginPath();
        const x = (v.x - 1) * boxSize;
        const y = (v.y - 1) * boxSize;
        if (v.type === "head") {
          ctx.value.fillStyle = "red";
        } else {
          ctx.value.fillStyle = "green";
        }
        ctx.value.fillRect(x, y, boxSize, boxSize);
      });
    }
    function getSnake() {
      const _snake = [];
      const item = snakeList.value;
      const head = item.find((v) => v.type === "head");
      for (let i = 1; i < item.length; i++) {
        item[i].type = "body";
        _snake.push(item[i]);
      }
      const obj = {
        x: head == null ? void 0 : head.x,
        y: head == null ? void 0 : head.y,
        type: "head"
      };
      switch (config.direction) {
        case "1":
          obj.y -= 1;
          break;
        case "2":
          obj.x += 1;
          break;
        case "3":
          obj.x -= 1;
          break;
        default:
          obj.y += 1;
          break;
      }
      if (obj.x > boxSize + 3 || obj.x < 1 || obj.y > boxSize + 3 || obj.y < 1 || snakeList.value.some((v) => v.x === obj.x && v.y === obj.y)) {
        info();
        randomTarget(true);
        clearInterval(timeId);
        isShow.value = true;
        return;
      }
      if (obj.x === target.value.x && obj.y === target.value.y) {
        _snake.unshift(target.value);
        randomTarget(true);
      }
      _snake.push(obj);
      snakeList.value = _snake;
      drawSnake(snakeList.value);
    }
    function drawBoard() {
      for (let i = 1; i < 20; i++) {
        ctx.value.beginPath();
        ctx.value.moveTo(0, i * boxSize);
        ctx.value.lineTo(800, i * boxSize);
        ctx.value.stroke();
        ctx.value.beginPath();
        ctx.value.moveTo(i * boxSize, 0);
        ctx.value.lineTo(i * boxSize, 800);
        ctx.value.stroke();
      }
    }
    function move() {
      clearInterval(timeId);
      timeId = setInterval(() => {
        ctx.value.clearRect(0, 0, 600, 600);
        getSnake();
        drawSnake(snakeList.value);
        randomTarget(false);
      }, speed);
    }
    function start() {
      suspend.value = !suspend.value;
      suspend.value ? clearInterval(timeId) : move();
    }
    const select = (up) => {
      if (speed > 80 && up) {
        speed -= 60;
      }
      if (speed < 800 && !up) {
        speed += 60;
      }
      info();
    };
    const isShow = ref(false);
    function onConfirm() {
      suspend.value = false;
      isShow.value = false;
      config.direction = "2";
      info();
    }
    onMounted(() => {
      drawBoard();
      info();
      drawSnake(snakeList.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createBaseVNode("main", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode(
                "canvas",
                {
                  id: "canvas-snake",
                  ref_key: "canvasBox",
                  ref: canvasBox,
                  width: "340",
                  height: "340"
                },
                null,
                512
                /* NEED_PATCH */
              )
            ]),
            createBaseVNode("div", _hoisted_3, [
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
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode(
                "button",
                { onClick: start },
                toDisplayString(!suspend.value ? "暂停" : "开始"),
                1
                /* TEXT */
              ),
              createVNode(Control, { onOnClick: onClick }),
              createBaseVNode("button", { onClick: info }, "重来")
            ]),
            createBaseVNode("p", { class: "main-tip" }, [
              _hoisted_5,
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
              _hoisted_6
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
const GluttonousSnakeCanvas_vue_vue_type_style_index_0_scoped_82afbc54_lang = "";
const GluttonousSnakeCanvas = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-82afbc54"], ["__file", "GluttonousSnakeCanvas.vue"]]);
export {
  GluttonousSnakeCanvas as default
};
