<template>
  <vue-draggable-next
    v-model:list="columns"
    class="drag-table-header"
    animation="300"
    :group="{ name: 'column', pull: true, put: true }"
    ghost-class="ghost"
    chosen-class="chosen"
    fallback-class="chosen"
    :handle="'.drag-icon'"
    :force-fallback="true"
  >
    <div
      v-for="(item, idx) in columns"
      :key="item"
      :style="{
        width: item.width + 'px' || 'auto'
      }"
      class="drag-table-header-item"
      :class="{
        active: item[columnId] == active
      }"
      @click="onClickItem(item)"
    >
      <SwapOutlined class="drag-icon" />
      {{ item.title }}
      <div
        class="line"
        v-show="idx != columns!.length - 1"
        @mousedown.stop="handleMouseDown($event, item)"
      ></div>
    </div>
  </vue-draggable-next>
</template>

<script lang="ts" setup>
import { VueDraggableNext } from 'vue-draggable-next'
import { reactive, toRefs, ref } from 'vue'
import { SwapOutlined } from '@ant-design/icons-vue'
interface Props {
  columnId: string
}
const props = withDefaults(defineProps<Props>(), {
  columnId: 'id'
})
const { columnId } = toRefs(props)
const columns = defineModel<any[]>()
const active = ref('')
const handleMouseDown = (event: MouseEvent, column: any) => {
  const width =
    column?.width || ((event.target as HTMLElement).parentNode! as HTMLElement).offsetWidth
  const startX = event.clientX
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
const emit = defineEmits(['onClick'])
const onClickItem = (column: any) => {
  active.value = column[columnId.value]
  emit('onClick', column)
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
    flex-grow: 1;
    &.active {
      border: 1px solid #169cff;
    }
    .drag-icon {
      cursor: move;
    }

    .line {
      position: absolute;
      top: 50%;
      right: 0;
      width: 20px;
      height: 100%;
      transform: translateY(-50%);
      transition: background-color 0.2s;
      cursor: ew-resize;
      &::before {
        display: block;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        content: '';
        width: 1px;
        height: 1.6em;
        background-color: #f0f0f0;
      }
      &:hover {
        &::before {
          background-color: #169cff;
          height: 100%;
          width: 3px;
        }
      }
    }
  }
  .drag-table-header-item[style^='width'] {
    flex-grow: 0;
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
}
</style>
