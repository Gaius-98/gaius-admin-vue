<template>
  <div class="logo">
    <img :src="themeCfg.logo" alt="" />
    <span class="title" v-show="!collapsed">{{ themeCfg.projectName }}</span>
  </div>
</template>

<script lang="ts" setup>
import { useSystemStore } from '@/stores/system'
import { storeToRefs } from 'pinia'
const systemStore = useSystemStore()
const { themeCfg, collapsed } = storeToRefs(systemStore)
</script>
<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: $layout-header-height;
  color: v-bind('themeCfg.headerFontColor');
  background: v-bind('themeCfg.headerBgColor');
  img {
    width: 40px;
    height: 40px;
  }
  .title {
    font-size: 20px;
  }
}
</style>
