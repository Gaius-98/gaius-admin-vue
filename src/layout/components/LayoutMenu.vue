<template>
  <a-menu v-bind="$attrs" :items="menuList"> </a-menu>
</template>

<script lang="ts" setup>
import { useSystemStore } from '@/stores/system'
import { storeToRefs } from 'pinia'
const systemStore = useSystemStore()
const { menuList, themeCfg } = storeToRefs(systemStore)
</script>
<style scoped lang="scss">
.ant-menu-light {
  color: v-bind('themeCfg.menuFontColor');
  background: v-bind('themeCfg.menuBgColor');
}
</style>
