<template>
  <a-menu v-bind="$attrs" :items="realMenuTree" :theme="themeCfg.menuTheme" @select="onSelectMenu">
  </a-menu>
</template>

<script lang="ts" setup>
import { useSystemStore } from '@/stores/system'
import { storeToRefs } from 'pinia'
import * as icons from '@ant-design/icons-vue'
import { h, computed } from 'vue'
import type { VNode, FunctionalComponent } from 'vue'
import type { UIMenuItem, Obj, ResMenuItem } from '@/model'
import jump from '@/utils/jump'
const systemStore = useSystemStore()
const { menuTree, themeCfg } = storeToRefs(systemStore)

const realMenuTree = computed(() => {
  return transformMenuData(menuTree.value)
})
//转换菜单的图标,将字符串转为组件
const transformMenuData = (tree: ResMenuItem[]): UIMenuItem[] => {
  return tree.map((node) => {
    let newNode = { key: node?.id || '', ...node } as UIMenuItem
    if (newNode.icon) {
      newNode.icon = h(
        (icons as Obj<FunctionalComponent | Function>)[
          newNode.icon as string
        ] as FunctionalComponent
      ) as VNode
    }
    if (node.children) {
      newNode.children = transformMenuData(node.children)
    }
    return newNode
  })
}

const onSelectMenu = ({ item }: { item: Obj<ResMenuItem> }) => {
  const { originItemValue } = item
  jump(originItemValue)
}
</script>
<style scoped lang="scss"></style>
