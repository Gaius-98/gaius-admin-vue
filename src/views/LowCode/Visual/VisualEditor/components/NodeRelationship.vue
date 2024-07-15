<template>
  <a-tree
    class="draggable-tree"
    draggable
    block-node
    :tree-data="visualData.componentData"
    :showIcon="false"
    @select="onSelect"
    @drop="onDrop"
  >
    <template #title="{ title, data }">
      <div>
        <i class="iconfont" :class="data.icon"></i>
        {{ data.name }}({{ title }})
      </div>
    </template>
  </a-tree>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useVisualStore } from '@/stores/visualDesign'
import { reactive, toRefs, ref } from 'vue'
import type { AntTreeNodeSelectedEvent, AntTreeNodeDropEvent } from 'ant-design-vue/es/tree'
import type { VisualComp } from '@/model'
const store = useVisualStore()
const { visualData } = storeToRefs(store)
const { onClickComp } = store
const onSelect = (_: string, e: AntTreeNodeSelectedEvent) => {
  onClickComp(e.node.dataRef as unknown as VisualComp)
}
const onDrop = (info: AntTreeNodeDropEvent) => {
  console.log(info)
}
</script>
<style scoped lang="scss">
.draggable-tree {
  padding: 10px;
}
</style>
