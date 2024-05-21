<template>
  <vue-draggable-next
    v-model:list="columns"
    class="drag-table-header"
    animation="300"
    :group="{ name: 'column', pull: true, put: true }"
    ghost-class="ghost"
    chosen-class="chosen"
    filter=".line"
  >
    <div
      v-for="item in columns"
      :key="item"
      :style="{
        width: item.width + 'px' || 'auto'
      }"
      class="drag-table-header-item"
    >
      <SwapOutlined class="drag-icon" />
      {{ item.title }}

      <div class="line" @mousedown.stop="handleMouseDown($event, item)"></div>
    </div>
  </vue-draggable-next>
</template>

<script lang="ts" setup>
import { VueDraggableNext } from 'vue-draggable-next'
import { reactive, toRefs, ref } from 'vue'
import { SwapOutlined } from '@ant-design/icons-vue'
interface Props {
  data: any[]
}
const columns = defineModel<any[]>()
const props = defineProps<Props>()
const handleMouseDown = (event: MouseEvent, column: any) => {
  const width = column?.width || 0
  const startX = event.clientX
  console.log('mouse')
  const move = (moveEvent: MouseEvent) => {
    const currX = moveEvent.clientX
    const disX = currX - startX
    const newWidth = width + disX
    column.width = newWidth
  }

  const up = () => {
    document.removeEventListener('mousemove', move)
    document.removeEventListener('mouseup', up)
  }

  document.addEventListener('mousemove', move)
  document.addEventListener('mouseup', up)
}
</script>
<style scoped lang="scss">
.drag-table-header {
  display: flex;
  position: relative;
  color: rgba(0, 0, 0, 0.88);
  font-weight: 600;
  text-align: start;
  background: #fafafa;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s ease;
  .drag-table-header-item {
    position: relative;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 600;
    text-align: start;
    background: #fafafa;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.2s ease;
    padding: 16px;
    resize: horizontal;
    flex: 1;
    .drag-icon {
      display: none;
    }
    .line {
      position: absolute;
      top: 50%;
      right: 0;
      width: 40px;
      height: 100%;
      transform: translateY(-50%);
      transition: background-color 0.2s;
      cursor: ew-resize;
      &::before {
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        content: '';
        width: 1px;
        height: 1.6em;
        background-color: #f0f0f0;
      }
    }
  }
}
.ghost {
  background-color: #169cff !important;
  color: #fff !important;
}
.chosen {
  background-color: #169cff !important;
  color: #fff !important;
  display: flex;
  flex-wrap: nowrap;
  .drag-icon {
    display: block !important;
  }
}
</style>
