<template>
  <a-config-provider
    :locale="local == 'en' ? enUS : zhCN"
    :theme="{
      token: {
        colorPrimary: themeCfg.colorPrimary
      }
    }"
  >
    <layout-view></layout-view>
  </a-config-provider>
</template>
<script setup lang="ts">
import { useSystemStore } from '@/stores/system'
import { storeToRefs } from 'pinia'
import LayoutView from '@/layout/LayoutView.vue'
import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
const systemStore = useSystemStore()
const { local, themeCfg } = storeToRefs(systemStore)
</script>

<style scoped></style>
