<template>
  <a-form :model="themeCfg" :label-col="{ span: 8 }">
    <a-collapse ghost>
      <a-collapse-panel header="全局配置">
        <a-form-item label="项目名称">
          <a-input v-model:value="themeCfg.projectName" />
        </a-form-item>
        <a-form-item label="主题色配置">
          <color-picker v-model="themeCfg.colorPrimary" />
        </a-form-item>
        <a-form-item label="布局方式">
          <a-radio-group v-model:value="themeCfg.layoutMode" button-style="solid">
            <a-radio-button value="horizontal">horizontal</a-radio-button>
            <a-radio-button value="vertical">vertical</a-radio-button>
          </a-radio-group>
        </a-form-item>
      </a-collapse-panel>
      <a-collapse-panel header="顶栏配置">
        <a-form-item label="背景颜色">
          <color-picker v-model="themeCfg.headerBgColor" />
        </a-form-item>
        <a-form-item label="字体颜色">
          <color-picker v-model="themeCfg.headerFontColor" />
        </a-form-item>
      </a-collapse-panel>
      <a-collapse-panel header="菜单配置">
        <a-form-item label="背景颜色">
          <color-picker v-model="themeCfg.menuBgColor" />
        </a-form-item>
        <a-form-item label="字体颜色">
          <color-picker v-model="themeCfg.menuFontColor" />
        </a-form-item>
      </a-collapse-panel>
    </a-collapse>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
import { useSystemStore } from '@/stores/system'
import { storeToRefs } from 'pinia'
import ColorPicker from '@/components/GaiusColorPicker.vue'
const systemStore = useSystemStore()
const { themeCfg } = storeToRefs(systemStore)
</script>
<style scoped lang="scss"></style>
