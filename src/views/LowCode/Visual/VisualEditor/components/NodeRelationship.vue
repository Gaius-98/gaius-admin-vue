<template>
  <a-tree
    class="draggable-tree"
    block-node
    :tree-data="treeData"
    :showIcon="false"
    @select="onSelect"
    :fieldNames="{
      title: 'name',
      key: 'id',
      children: 'children'
    }"
  >
    <template #title="{ name, data }">
      <div :title="`${name}(${data.id})`">
        <i class="iconfont" :class="data.icon"></i>
        {{ name }}
      </div>
    </template>
  </a-tree>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useVisualStore } from '@/stores/visualDesign'
import { reactive, toRefs, ref, computed } from 'vue'
import type { AntTreeNodeSelectedEvent, AntTreeNodeDropEvent } from 'ant-design-vue/es/tree'
import type { VisualComp } from '@/model'
const store = useVisualStore()
const { visualData } = storeToRefs(store)
const { onClickComp } = store
const onSelect = (_: string, e: AntTreeNodeSelectedEvent) => {
  onClickComp(e.node.dataRef as unknown as VisualComp)
}

const convertNode = (node: Record<string, any>) => {
  // 创建一个新的对象，保留原始对象的其它属性
  let newNode = { id: node.id, type: node.type, children: [], icon: node.icon, name: node.name }

  if (newNode.type == 'group' && node.props.data.length > 0) {
    newNode.children = node.props.data.map((child: any) => convertNode(child))
  }

  return newNode
}
const treeData = computed(() => {
  let tree: any[] = []
  visualData.value.componentData.map((comp) => {
    tree.push(convertNode(comp))
  })
  return tree
})
</script>
<style scoped lang="scss">
.draggable-tree {
  padding: 10px;
}
</style>
