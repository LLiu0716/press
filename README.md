---
lang: zh-CN
title: 页面的标题
description: 页面的描述
home: true
heroImage: /favicon.svg
actions:
  - text: 快速上手
    link: /home
    type: primary
  - text: 项目简介
    link: /guides
    type: secondary
footer: 2022-1-17
footerHtml: true
---

<RedDiv>
<OtherComponent v-for="v in 10" :key="v" />
</RedDiv>
<Badge type="tip" text="v2" vertical="top" />

你好， {{ msg }}

<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>

<RedDiv>

当前计数为： {{ count }}

</RedDiv>

<button @click="count++">点我！</button>

<script>
import { h, ref } from 'vue'

const RedDiv = (_, ctx) => h(
  'div',
  {
    class: 'red-div',
  },
  ctx.slots.default()
)

export default {
  components: {
    RedDiv,
  },

  setup() {
    const msg = 'Markdown'
    const count = ref(0)

    return {
      msg,
      count,
    }
  }
}
</script>

<style lang='less'>
.red-div {
  color: red;
}
</style>
