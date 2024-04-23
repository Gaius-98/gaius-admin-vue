<template>
  <component :is="LayoutComponent"></component>
  <a-drawer
    :width="300"
    title="主题配置"
    placement="right"
    :open="isConfigVisible"
    @close="onCloseConfigDrawer"
    :bodyStyle="{
      padding: 0
    }"
  >
    <layout-theme-cfg></layout-theme-cfg>
  </a-drawer>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, computed, type Component } from 'vue'
import { useSystemStore } from '@/stores/system'
import { storeToRefs } from 'pinia'
import LayoutThemeCfg from './components/LayoutThemeCfg.vue'
import type { Obj } from '@/model'
const systemStore = useSystemStore()
const { isConfigVisible, themeCfg } = storeToRefs(systemStore)
const { onCloseConfigDrawer, startUp } = systemStore
const LayoutComponent = computed(() => {
  return layout[themeCfg.value.layoutMode]
})
const layout: Obj<Component> = {
  horizontal: defineAsyncComponent(() => import('@/layout/LayoutType/HorizontalSplitLayout.vue')),
  vertical: defineAsyncComponent(() => import('@/layout/LayoutType/VerticalStackLayout.vue'))
}
startUp()
</script>
<style scoped lang="scss"></style>
