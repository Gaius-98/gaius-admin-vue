<template>
  <component :is="layout[curLayout]"></component>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'

const curLayout = ref<'horizontal' | 'vertical'>('horizontal')
const layout = {
  horizontal: defineAsyncComponent(() => import('@/layout/LayoutType/HorizontalSplitLayout.vue')),
  vertical: defineAsyncComponent(() => import('@/layout/LayoutType/VerticalStackLayout.vue'))
}
</script>
<style scoped lang="scss"></style>
