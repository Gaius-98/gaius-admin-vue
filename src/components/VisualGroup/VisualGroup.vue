<template>
  <div class="visual-group">
    <gu-drag-resize-plus
      v-for="item in data"
      :key="item.id"
      :disabled="true"
      :active="false"
      v-model:left="item.position.left"
      v-model:top="item.position.top"
      v-model:width="item.size.width"
      v-model:height="item.size.height"
    >
      <component :is="item.tag" v-bind="item.props" :style="item.style || {}"> </component>
    </gu-drag-resize-plus>
  </div>
</template>

<script lang="ts" setup>
import { GuDragResizePlus } from 'gaius-utils'
import { reactive, toRefs, ref } from 'vue'
import type { VisualComp } from '@/model'
interface Props {
  data: VisualComp[]
}
const props = defineProps<Props>()
const { data } = toRefs(props)
console.log(data.value)
</script>
<style scoped lang="scss">
.visual-group {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
