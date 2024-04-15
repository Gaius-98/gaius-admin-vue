<template>
  <a-menu v-bind="$attrs" :items="realMenuTree" :theme="themeCfg.menuTheme" @select="onSelectMenu">
  </a-menu>
</template>

<script lang="ts" setup>
import { useSystemStore } from '@/stores/system'
import { storeToRefs } from 'pinia'
import * as icons from '@ant-design/icons-vue'
import { h, ref, computed } from 'vue'
import type { VNode, FunctionalComponent } from 'vue'
import type { SystemMenuItem, UIMenuItem, Obj, ResMenuItem } from '@/model'
import jump from '@/utils/jump'
const systemStore = useSystemStore()
const { menuTree, themeCfg } = storeToRefs(systemStore)

const realMenuTree = computed(() => {
  return transformMenuData(menuTree.value)
})
//转换菜单的图标,将字符串转为组件
const transformMenuData = (tree: SystemMenuItem[]): UIMenuItem[] => {
  return tree.map((node) => {
    const newNode: UIMenuItem = { ...node }
    newNode.key = newNode.id
    if (newNode.icon) {
      newNode.icon = h(
        (icons as Obj<FunctionalComponent | Function>)[newNode.icon] as FunctionalComponent
      ) as VNode
    }
    if (newNode.children) {
      newNode.children = transformMenuData(newNode.children)
    }
    return newNode
  })
}

const onSelectMenu = ({ item }) => {
  const { originItemValue } = item
  jump(originItemValue)
}
</script>
<style scoped lang="scss"></style>
