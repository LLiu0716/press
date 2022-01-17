<template>
  <main>
    <h1>这是 OtherComponent 页</h1>

    <div v-for="v in list" :key="v.id">{{ v.name }}</div>
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const list = ref([])

onMounted(() => {
  getInfo()
})

async function getInfo() {
  try {
    const res = await axios.get('http://localhost:3000/list')
    list.value = res.data
  } catch (error) {}
}
</script>

<style></style>
