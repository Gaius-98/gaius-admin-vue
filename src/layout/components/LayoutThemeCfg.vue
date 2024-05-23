<template>
  <a-form :model="themeCfg" :label-col="{ span: 8 }">
    <a-collapse ghost>
      <a-collapse-panel header="全局配置">
        <schema-form
          :layout="globalSchema.layout"
          :properties="globalSchema.properties"
          :form-data="themeCfg"
        >
        </schema-form>
      </a-collapse-panel>
      <a-collapse-panel header="顶栏配置">
        <schema-form
          :layout="headerSchema.layout"
          :properties="headerSchema.properties"
          :form-data="themeCfg"
        >
        </schema-form>
      </a-collapse-panel>
      <a-collapse-panel header="菜单配置">
        <schema-form
          :layout="menuSchema.layout"
          :properties="menuSchema.properties"
          :form-data="themeCfg"
        >
        </schema-form>
      </a-collapse-panel>
    </a-collapse>
  </a-form>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'
import { useSystemStore } from '@/stores/system'
import { storeToRefs } from 'pinia'
import ColorPicker from '@/components/ColorPicker.vue'
import { LayoutCategory, ThemeCategory } from '@/model'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { Schema } from '@/components/SchemaForm/ISchema'
const registeredComponents = ref({
  'color-picker': ColorPicker
})

// 提供已注册的子组件给子组件使用
provide('registeredComponents', registeredComponents.value)

const globalSchema = ref<Schema>({
  layout: {
    labelAlign: 'left',
    layout: 'horizontal'
  },
  properties: {
    projectName: {
      type: 'string',
      label: '项目名称'
    },
    colorPrimary: {
      type: 'string',
      label: '主题色',
      component: {
        name: 'color-picker'
      }
    },
    layoutMode: {
      type: 'radio',
      label: '布局方式',
      component: {
        buttonStyle: 'solid',
        dataSource: Object.entries(LayoutCategory).map(([key, value]) => ({
          value,
          label: key
        }))
      }
    },
    watermarkVisible: {
      type: 'switch',
      label: '是否显示水印'
    },
    watermarkText: {
      type: 'string',
      label: '水印文字',
      show: '${formData.watermarkVisible}'
    }
  }
})
const headerSchema = ref<Schema>({
  layout: {
    labelAlign: 'left',
    layout: 'horizontal'
  },
  properties: {
    headerBgColor: {
      type: 'string',
      label: '背景色',
      component: {
        name: 'color-picker'
      }
    },
    headerFontColor: {
      type: 'string',
      label: '字体颜色',
      component: {
        name: 'color-picker'
      }
    }
  }
})
const menuSchema = ref<Schema>({
  layout: {
    labelAlign: 'left',
    layout: 'horizontal'
  },
  properties: {
    menuTheme: {
      type: 'radio',
      label: '主题',
      component: {
        buttonStyle: 'solid',
        dataSource: Object.entries(ThemeCategory).map(([key, value]) => ({
          value,
          label: key
        }))
      }
    }
  }
})
const systemStore = useSystemStore()
const { themeCfg } = storeToRefs(systemStore)
</script>
<style scoped lang="scss"></style>
