<template>
  <a-layout class="layout">
    <a-layout-header class="layout-header">
      <layout-logo />
      <layout-menu mode="horizontal"></layout-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div class="layout-content">
        <router-view></router-view>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts" setup>
import LayoutMenu from '../components/LayoutMenu.vue'
import LayoutLogo from '../components/LayoutLogo.vue'
</script>
<style scoped lang="scss">
@import url('@/styles/layout/common.scss');
</style>
