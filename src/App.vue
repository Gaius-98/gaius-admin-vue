<template>
  <a-config-provider
    :locale="local == 'en' ? enUS : zhCN"
    :theme="{
      token: {
        colorPrimary: themeCfg.colorPrimary
      }
    }"
  >
    <a-watermark :content="themeCfg.watermarkText" :zIndex="themeCfg.watermarkVisible ? 9 : -1">
      <router-view></router-view>
    </a-watermark>
  </a-config-provider>
</template>
<script setup lang="ts">
import { useSystemStore } from '@/stores/system'
import { storeToRefs } from 'pinia'
import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
const systemStore = useSystemStore()
const { local, themeCfg } = storeToRefs(systemStore)
</script>

<style scoped></style>
