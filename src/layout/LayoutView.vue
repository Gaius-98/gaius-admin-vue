<template>
  <a-watermark :content="themeCfg.watermarkText" :zIndex="themeCfg.watermarkVisible ? 9 : -1">
    <component :is="LayoutComponent"></component>
    <a-drawer
      :width="300"
      placement="right"
      :open="isConfigVisible"
      @close="onCloseConfigDrawer"
      :closable="false"
      :bodyStyle="{
        padding: '0 12px'
      }"
    >
      <layout-theme-cfg></layout-theme-cfg>
    </a-drawer>
  </a-watermark>
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
