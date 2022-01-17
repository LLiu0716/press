---
lang: zh-CN
title: OtherComponent
description: OtherComponent
footer: { { list } }
---

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码

```js
console.log('你好，VuePress！')
```

:::

:::: code-group
::: code-group-item typescript

```ts
const foo: string = 'foo'
```

:::
::: code-group-item javascript

```js
const foo = 'foo'
```

:::
::::

<div v-for="v in 30" :key="v">{{ v }}</div>

<script lang="ts" setup>
import { ref } from 'vue'

const list = ref(Date())
</script>
