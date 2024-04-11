<template>
  <a-layout class="layout">
    <a-layout-sider collapsible>
      <layout-logo />
      <layout-menu mode="inline"> </layout-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
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
</script>
<style scoped lang="scss">
@import url('@/styles/layout/common.scss');
</style>
