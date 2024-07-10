<template>
  <div ref="container" class="view-design-container">
    <div class="container" :style="getContainerStyle()" @dragover="allowDrop" @drop="dropComponent">
      <gu-drag-resize
        v-for="(item, idx) in visualData.componentData"
        :key="item.id"
        minh="20"
        minw="20"
        :width="item.size.width"
        :height="item.size.height"
        :top="item.position.top"
        :left="item.position.left"
        :node-key="item.id"
        :class="item.id == curCompData.id ? 'active' : ''"
        class="drag"
        :style="{
          zIndex: `${idx + 100}`
        }"
        @on-drag-resize="dragResizeAfter"
        @click="onClickComp(item)"
      >
        <component :is="item.name" v-bind="item.props"> </component>
      </gu-drag-resize>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useVisualStore } from '@/stores/visualDesign'
import type { VisualComp } from '@/model'
import { GuDragResize } from 'gaius-utils'
import { v4 as uuid } from 'uuid'
const store = useVisualStore()
const { visualData, curCompData } = storeToRefs(store)
const { onClickComp, setSnapshot, updateCompPosition, addComp } = store
const container = ref()
const getContainerStyle = () => {
  const { width, height } = visualData.value
  if (container.value) {
    return {
      width: width + 'px',
      height: height + 'px',
      transform: `scale(${(container.value.offsetWidth - 40) / width},${
        (container.value.offsetHeight - 40) / height
      })`,
      'transform-origin': '0 0 '
    }
  }
  return {
    width: '100%',
    height: '100%'
  }
}
const allowDrop = (ev: any) => {
  ev.preventDefault()
}
const dropComponent = (ev: any) => {
  ev.preventDefault()
  let data = JSON.parse(ev.dataTransfer.getData('componentData')) as VisualComp
  data.id = uuid()
  data.position = {
    top: ev.offsetY,
    left: ev.offsetX
  }
  data.size.width = 100
  data.size.height = 100
  addComp(data)
}
const dragResizeAfter = () => {}
</script>
<style scoped lang="scss"></style>
