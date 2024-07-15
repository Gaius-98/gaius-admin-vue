<template>
  <div ref="container" class="container" @dragover="allowDrop" @drop="dropComponent">
    <gu-drag-resize-plus
      v-for="(item, idx) in visualData.componentData"
      :key="item.id"
      :minh="20"
      :minw="20"
      :width="item.size.width"
      :height="item.size.height"
      :top="item.position.top"
      :left="item.position.left"
      :node-key="item.id"
      :active="item.id == curCompData.id"
      class="drag"
      :style="{
        zIndex: `${idx + 100}`
      }"
      @update="dragResizeAfter"
      @click="onClickComp(item)"
    >
      <component :is="item.tag" v-bind="item.props" :style="item.style || {}"> </component>
    </gu-drag-resize-plus>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useVisualStore } from '@/stores/visualDesign'
import type { VisualComp } from '@/model'
import { GuDragResizePlus } from 'gaius-utils'
import 'gaius-utils/lib/style.css'
import { ViewCompNode } from '../../core/ViewCompNode'
const store = useVisualStore()
const { visualData, curCompData } = storeToRefs(store)
const { onClickComp, setSnapshot, updateCompPosition, addComp } = store
const container = ref()
const getContainerStyle = () => {
  const { width, height } = visualData.value
  if (container.value) {
    return {
      width: width + 'px',
      height: height + 'px'
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
  if (!data) {
    return
  }
  data = new ViewCompNode(data.name)
  data.position = {
    top: ev.offsetY,
    left: ev.offsetX
  }
  data.size = {
    width: 100,
    height: 100
  }

  addComp(data)
}
const dragResizeAfter = () => {}
</script>
<style scoped lang="scss">
.container {
  flex: 1;
  background-color: #fff;
  margin: 0 10px;
}
</style>
