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
      @update="dragResizeAfter"
      @click="onClickComp(item)"
      @mousedown="onClickComp(item)"
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
    <div
      class="group"
      v-show="isShowGroup"
      :style="{
        width: groupInfo.width + 'px',
        height: groupInfo.height + 'px',
        top: groupInfo.top + 'px',
        left: groupInfo.left + 'px'
      }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, nextTick } from 'vue'
import { storeToRefs } from 'pinia'
import { useVisualStore } from '@/stores/visualDesign'
import type { VisualComp } from '@/model'
import { GuDragResizePlus } from 'gaius-utils'
import 'gaius-utils/lib/style.css'
import { ViewCompNode } from '../../core/ViewCompNode'
import { getGroupCompInitInfo } from '../../core/calculate'
const store = useVisualStore()
const { visualData, curCompData, oldCompData } = storeToRefs(store)
const { onClickComp, setSnapshot, addComp, updateCompPosition } = store
const container = ref()
const frameSelection = ref<string[]>([])
const isShowGroup = ref(false)
const groupInfo = ref({
  width: 0,
  height: 0,
  top: 0,
  left: 0
})
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
    endInfo.value.x = e.offsetX
    endInfo.value.y = e.offsetY
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
  const clear = () => {
    document.querySelector('.container')?.removeEventListener('click', clear)
    clearFrameSelection()
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
const dragResizeAfter = (data: any) => {
  const { top: endTop, left: endLeft, nodeKey: curId } = data
  const {
    position: { top: startTop, left: startLeft }
  } = oldCompData.value
  updateFrameSelectCompPosition(curId, endTop - startTop, endLeft - startLeft)
  setSnapshot()
}
const updateFrameSelectCompPosition = (curId: string, disY: number, disX: number) => {
  if (!frameSelection.value.length) return
  frameSelection.value.map((id) => {
    if (curId != id) {
      updateCompPosition(id, disY, disX)
    }
  })
}
document.body.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.ctrlKey && e.key === 'g') {
    e.preventDefault()
    if (frameSelection.value.length) {
      let data = visualData.value.componentData.filter((item) =>
        frameSelection.value.includes(item.id)
      )
      groupInfo.value = getGroupCompInitInfo(data)
      isShowGroup.value = true
      frameSelection.value = []
    }
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
