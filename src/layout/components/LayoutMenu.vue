<template>
  <a-menu v-bind="$attrs" :items="realMenuTree" :theme="themeCfg.menuTheme"> </a-menu>
</template>

<script lang="ts" setup>
import { useSystemStore } from '@/stores/system'
import { storeToRefs } from 'pinia'
import * as icons from '@ant-design/icons-vue'
import { h } from 'vue'
import type { VNode, FunctionalComponent } from 'vue'
import type { SystemMenuItem, UIMenuItem, Obj } from '@/model'
const systemStore = useSystemStore()

const { menuTree, themeCfg } = storeToRefs(systemStore)
//转换菜单的图标,将字符串转为组件
const updateIcon = (tree: SystemMenuItem[]): UIMenuItem[] => {
  return tree.map((node) => {
    const newNode: UIMenuItem = { ...node }
    if (newNode.icon) {
      newNode.icon = h(
        (icons as Obj<FunctionalComponent | Function>)[newNode.icon] as FunctionalComponent
      ) as VNode
    }
    if (newNode.children) {
      newNode.children = updateIcon(newNode.children)
    }
    return newNode
  })
}

const realMenuTree = updateIcon(menuTree.value)
</script>
<style scoped lang="scss"></style>
