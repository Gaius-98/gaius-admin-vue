<template>
  <a-select v-model:value="value" show-search allowClear>
    <a-select-option v-for="icon in iconList" :key="icon.value">
      <component :is="h(icon.node)"></component>
      {{ icon.label }}
    </a-select-option>
  </a-select>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, h } from 'vue'
import * as icons from '@ant-design/icons-vue'
const iconList = ref(
  Object.entries(icons).map(([key, VNode]) => {
    return {
      label: key,
      value: key,
      node: VNode
    }
  })
)
const value = defineModel()
const emits = defineEmits(['change'])
</script>
<style scoped lang="scss"></style>
