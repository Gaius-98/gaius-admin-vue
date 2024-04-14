<template>
  <a-layout class="layout">
    <a-layout-sider collapsible :collapsed="collapsed" :trigger="null" :theme="themeCfg.menuTheme">
      <layout-logo />
      <layout-menu mode="inline"> </layout-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="onToggleCollapsed" />
        <menu-fold-outlined v-else class="trigger" @click="onToggleCollapsed" />
        <layout-opt></layout-opt>
      </a-layout-header>
      <a-layout-content class="layout-content">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import LayoutMenu from '../components/LayoutMenu.vue'
import LayoutLogo from '../components/LayoutLogo.vue'
import LayoutOpt from '../components/LayoutOpt.vue'
import { useSystemStore } from '@/stores/system'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { storeToRefs } from 'pinia'
const systemStore = useSystemStore()
const { collapsed, themeCfg } = storeToRefs(systemStore)
const { onToggleCollapsed } = systemStore
</script>
<style scoped lang="scss">
@import url('@/styles/layout/common.scss');
.layout-header {
  color: v-bind('themeCfg.headerFontColor');
  background: v-bind('themeCfg.headerBgColor');
}
</style>
