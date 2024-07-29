<template>
  <div
    ref="container"
    class="container"
    @dragover="allowDrop"
    @drop="dropComponent"
    @mousedown="onMouseDown"
  >
    <gu-drag-resize-plus
      v-for="(item, idx) in visualData.componentData"
      :key="item.id"
      :minh="20"
      :minw="20"
      v-model:width="item.size.width"
      v-model:height="item.size.height"
      v-model:top="item.position.top"
      v-model:left="item.position.left"
      :node-key="item.id"
      :active="item.id == curCompData.id || frameSelection.includes(item.id)"
      class="drag"
      :style="{
        zIndex: `${idx + 100}`
      }"
      :wait="10"
      @update="debounceDragResizeAfter"
      @click.stop="onClickComp(item)"
      @mousedown.stop="onClickComp(item)"
      @before-transform="onBeforeTransform"
    >
      <component :is="item.tag" v-bind="item.props" :style="item.style || {}"> </component>
    </gu-drag-resize-plus>
    <div
      class="mask"
      v-show="isShowMask"
      :style="{
        width: endInfo.x - startInfo.x + 'px',
        height: endInfo.y - startInfo.y + 'px',
        top: startInfo.y + 'px',
        left: startInfo.x + 'px'
      }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, nextTick, defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useVisualStore } from '@/stores/visualDesign'
import type { VisualComp, TransformNode } from '@/model'
import { GuDragResizePlus } from 'gaius-utils'
import 'gaius-utils/lib/style.css'
import { ViewCompNode } from '../../core/ViewCompNode'
import { createGroup, scaleGroupChildren } from '../../core/calculate'
import { debounce } from 'lodash-es'
const store = useVisualStore()
const { visualData, curCompData, frameSelection } = storeToRefs(store)
const { onClickComp, setSnapshot, addComp, removeComp, updateComp, addGroup } = store
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
const isShowMask = ref(false)
const startInfo = ref({
  x: 0,
  y: 0
})
const endInfo = ref({
  x: 0,
  y: 0
})
const onMouseDown = (ev: MouseEvent) => {
  isShowMask.value = true
  startInfo.value.x = ev.offsetX
  startInfo.value.y = ev.offsetY
  const move = (e: Event) => {
    let ev = e as MouseEvent
    endInfo.value.x = ev.offsetX
    endInfo.value.y = ev.offsetY
  }
  const up = () => {
    document.querySelector('.container')!.removeEventListener('mousemove', move)
    document.querySelector('.container')!.removeEventListener('mouseup', up)
    handleFrameSelectData()
  }
  document.querySelector('.container')!.addEventListener('mousemove', move)
  document.querySelector('.container')!.addEventListener('mouseup', up)
}
const handleFrameSelectData = () => {
  visualData.value.componentData.map((comp) => {
    if (
      comp.position.left >= startInfo.value.x &&
      comp.position.left + comp.size.width <= endInfo.value.x &&
      comp.position.top >= startInfo.value.y &&
      comp.position.top + comp.size.height <= endInfo.value.y
    ) {
      frameSelection.value.push(comp.id)
    }
  })

  endInfo.value = {
    x: 0,
    y: 0
  }
  startInfo.value = {
    x: 0,
    y: 0
  }
}
const clearFrameSelection = () => {
  frameSelection.value = []
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
const beforeTransformNodeInfo = ref<Partial<TransformNode>>({})
const onBeforeTransform = (data: TransformNode) => {
  beforeTransformNodeInfo.value = data
}

const dragResizeAfter = (data: TransformNode) => {
  const { nodeKey } = data
  let idx = visualData.value.componentData.findIndex((item) => item.id === nodeKey)
  if (
    idx != -1 &&
    visualData.value.componentData[idx].type == 'group' &&
    nodeKey == beforeTransformNodeInfo.value.nodeKey
  ) {
    updateComp(
      scaleGroupChildren(
        beforeTransformNodeInfo.value as TransformNode,
        data,
        visualData.value.componentData[idx]
      )
    )
  }
  setSnapshot()
}
const debounceDragResizeAfter = debounce(dragResizeAfter, 100)
// const addGroup = () => {
//   if (frameSelection.value.length) {
//     let data = visualData.value.componentData.filter((item) =>
//       frameSelection.value.includes(item.id)
//     )
//     const newGroup = createGroup(data)
//     data.forEach((item) => {
//       removeComp(item)
//     })
//     addComp(newGroup)
//     clearFrameSelection()
//   }
// }
document.body.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.ctrlKey && e.key === 'g') {
    e.preventDefault()
    addGroup()
  }
})
</script>
<style scoped lang="scss">
.container {
  flex: 1;
  position: relative;
  background-color: #fff;
  margin: 0 10px;
  .mask {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .group {
    position: absolute;
    background-color: rgba(0, 2, 5, 0.5);
  }
}
</style>
