import { c as defineComponent, B as watch, r as ref, o as onMounted, p as openBlock, q as createElementBlock, R as createBaseVNode, x as normalizeClass, P as Fragment, Q as renderList, v as createTextVNode, w as toDisplayString, $ as withDirectives, a0 as vShow, S as createCommentVNode, ac as withModifiers, aa as pushScopeId, ab as popScopeId, _ as _export_sfc } from "./framework-c611892d.js";
const mine = () => {
  const data = {
    squares: [],
    checkedList: [],
    surplusMine: 0
  };
  const randomNum = (tr, td, mineNum) => {
    return Array.from({ length: tr * td }, (v, i) => i).sort(() => 0.5 - Math.random()).slice(0, mineNum);
  };
  const getAround = (square, td, tr) => {
    const { x, y } = square;
    const result = [];
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (i < 0 || // 超出了左边的范围
        j < 0 || // 超出了上边的范围
        i > td - 1 || // 超出了右边的范围
        j > tr - 1 || // 超出了下边的范围
        i == x && j == y || // 自己
        data.squares[j][i].type === "mine") {
          continue;
        }
        result.push([j, i]);
      }
    }
    return result;
  };
  const updateNum = (tr, td) => {
    for (let i = 0; i < tr; i++) {
      for (let j = 0; j < td; j++) {
        if (data.squares[i][j].type === "mine") {
          const num = getAround(data.squares[i][j], td, tr);
          for (let k = 0; k < num.length; k++) {
            data.squares[num[k][0]][num[k][1]].value += 1;
          }
        }
      }
    }
  };
  const getSquares = (tr, td, mineNum) => {
    init();
    data.checkedList = Array.from({ length: mineNum }, () => "");
    data.surplusMine = mineNum;
    const mineNumList = randomNum(tr, td, mineNum);
    let n = 0;
    for (let i = 0; i < tr; i++) {
      data.squares[i] = [];
      for (let j = 0; j < td; j++) {
        const obj = {
          x: j,
          y: i,
          type: "number",
          value: 0
        };
        if (mineNumList.includes(n++)) {
          obj.type = "mine";
        }
        data.squares[i][j] = obj;
      }
    }
    updateNum(tr, td);
  };
  const init = () => {
    data.checkedList = [];
    data.squares = [];
    data.surplusMine = 0;
  };
  return {
    data,
    getAround,
    getSquares
  };
};
const _withScopeId = (n) => (pushScopeId("data-v-ea6079bd"), n = n(), popScopeId(), n);
const _hoisted_1 = ["onContextmenu"];
const _hoisted_2 = { class: "mine-box" };
const _hoisted_3 = ["onMousedown"];
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "剩余数量",
  -1
  /* HOISTED */
));
const _hoisted_5 = { class: "over" };
const _hoisted_6 = { class: "alert-box" };
const _hoisted_7 = { class: "alert" };
const _hoisted_8 = { class: "content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Mine",
  props: {
    tr: { default: 9 },
    td: { default: 9 },
    mineNum: { default: 10 },
    reset: { type: Boolean }
  },
  emits: ["onReset", "onNext"],
  setup(__props, { emit }) {
    const props = __props;
    const contextmenu = () => {
      return false;
    };
    watch(
      () => props.reset,
      () => {
        init();
      }
    );
    const content = ref([]);
    const over = ref(false);
    const surplus = ref("恭喜过关");
    const surplusMineNum = ref(0);
    const { data, getSquares, getAround } = mine();
    const init = () => {
      over.value = false;
      content.value = [];
      surplusMineNum.value = props.mineNum;
      getSquares(props.td, props.tr, props.mineNum);
      let n = 1;
      content.value = data.squares.map((item) => {
        return item.map(() => {
          return {
            id: n++,
            type: "",
            value: 0,
            checked: false
          };
        });
      });
    };
    const checkedTd = (e, v, y, x) => {
      if (e.buttons == 2) {
        mouseRight(v, y, x);
      } else {
        mouseLeft(v, y, x);
      }
    };
    const mouseRight = (v, y, x) => {
      if (!surplusMineNum.value)
        return;
      const square = data.squares[y][x];
      if (v.type && v.type !== "flag") {
        return;
      }
      if (v.type == "flag") {
        v.type = "";
        surplusMineNum.value++;
        data.checkedList[surplusMineNum.value] = "";
      } else {
        v.type = "flag";
        surplusMineNum.value--;
        data.checkedList[surplusMineNum.value] = square.type;
      }
      if (!surplusMineNum.value) {
        const result = data.checkedList.some((v2) => v2 == "number");
        over.value = true;
        if (result) {
          surplus.value = "游戏失败";
        } else {
          surplus.value = "恭喜过关";
        }
      }
    };
    const mouseLeft = (v, y, x) => {
      if (v.type)
        return;
      const square = data.squares[y][x];
      v.type = square.type;
      v.value = square.value;
      v.checked = true;
      if (square.type == "mine") {
        over.value = true;
        for (let i = 0; i < props.tr; i++) {
          for (let j = 0; j < props.td; j++) {
            if (data.squares[i][j].type === "mine") {
              content.value[i][j].type = "mine";
            }
          }
        }
        v.type += " game-over";
        surplusMineNum.value = 0;
        surplus.value = "游戏失败";
        return;
      }
      const getAllZero = (squareZero) => {
        const around = getAround(squareZero, props.td, props.tr);
        around.forEach((item) => {
          const x2 = item[0];
          const y2 = item[1];
          content.value[x2][y2].type = "number";
          content.value[x2][y2].value = data.squares[x2][y2].value;
          if (data.squares[x2][y2].value == 0) {
            if (!data.squares[x2][y2].check) {
              data.squares[x2][y2].check = true;
              getAllZero(data.squares[x2][y2]);
            }
          }
        });
      };
      getAllZero(square);
    };
    onMounted(() => {
      init();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "box",
        onContextmenu: withModifiers(contextmenu, ["prevent"])
      }, [
        createBaseVNode("table", _hoisted_2, [
          createBaseVNode(
            "tbody",
            {
              class: normalizeClass({ tbody: __props.mineNum > 30 })
            },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(content.value, (item, index) => {
                  return openBlock(), createElementBlock("tr", { key: index }, [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(item, (v, i) => {
                        return openBlock(), createElementBlock("td", {
                          key: `${index}-${i}`,
                          class: normalizeClass([v.type === "number" ? `number-${v.value}` : v.type]),
                          onMousedown: ($event) => checkedTd($event, v, index, i)
                        }, toDisplayString(v.value ? v.value : ""), 43, _hoisted_3);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            2
            /* CLASS */
          )
        ]),
        createBaseVNode("p", null, [
          _hoisted_4,
          createTextVNode(" "),
          createBaseVNode(
            "b",
            {
              class: normalizeClass(`number-${surplusMineNum.value}`)
            },
            toDisplayString(surplusMineNum.value),
            3
            /* TEXT, CLASS */
          )
        ]),
        withDirectives(createBaseVNode(
          "div",
          _hoisted_5,
          null,
          512
          /* NEED_PATCH */
        ), [
          [vShow, over.value]
        ]),
        withDirectives(createBaseVNode(
          "div",
          _hoisted_6,
          [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("h1", _hoisted_8, [
                createBaseVNode(
                  "strong",
                  null,
                  toDisplayString(surplus.value),
                  1
                  /* TEXT */
                )
              ]),
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(["btn", { next: surplus.value != "游戏失败" }])
                },
                [
                  createBaseVNode("button", {
                    onClick: _cache[0] || (_cache[0] = ($event) => emit("onReset"))
                  }, "重新开始"),
                  surplus.value != "游戏失败" ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    onClick: _cache[1] || (_cache[1] = ($event) => emit("onNext"))
                  }, " 增加难度 ")) : createCommentVNode("v-if", true)
                ],
                2
                /* CLASS */
              )
            ])
          ],
          512
          /* NEED_PATCH */
        ), [
          [vShow, !surplusMineNum.value]
        ])
      ], 40, _hoisted_1);
    };
  }
});
const Mine_vue_vue_type_style_index_0_scoped_ea6079bd_lang = "";
const Mine = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea6079bd"], ["__file", "Mine.vue"]]);
export {
  Mine as default
};
