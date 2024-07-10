<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="item" tab="控件配置">
      <schema-form
        v-if="curControlCfg.id"
        :layout="schema.layout"
        :properties="schema.properties"
        :formData="curControlCfg"
        :key="curControlCfg.id"
      >
      </schema-form>
      <div v-else>
        <a-empty />
      </div>
    </a-tab-pane>
    <a-tab-pane key="form" tab="表单配置">
      <schema-form
        :layout="formSchema.layout"
        :properties="formSchema.properties"
        :formData="formConfig"
      >
      </schema-form>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup>
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { Schema } from '@/components/SchemaForm/ISchema'
import { ref, watch } from 'vue'
import { useFormDesignStore } from '@/stores/formDesign'
import { storeToRefs } from 'pinia'
import ControlSchema from '../utils/ControlSchema'
import { cloneDeep } from 'lodash-es'
const formStore = useFormDesignStore()
const { curControlCfg, formConfig } = storeToRefs(formStore)
const schema = ref<Schema>({
  layout: {
    layout: 'horizontal',
    labelAlign: 'right',
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  },
  properties: {}
})
const formSchema = ref<Schema>({
  layout: {
    layout: 'horizontal',
    labelAlign: 'right',
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  },
  properties: {
    labelAlign: {
      label: '对齐方式',
      type: 'radio',
      component: {
        dataSource: [
          {
            label: '左对齐',
            value: 'left'
          },
          {
            label: '右对齐',
            value: 'right'
          }
        ]
      }
    },
    'labelCol.span': {
      label: '标签宽度',
      type: 'number'
    },
    'labelCol.offset': {
      label: '偏移量',
      type: 'number'
    }
  }
})
const activeKey = ref('item')
watch(
  () => curControlCfg.value.type,
  () => {
    if (curControlCfg.value.type) {
      let cfg = ControlSchema.find((e) => e.type === curControlCfg.value.type)
      if (cfg) {
        schema.value.properties = cloneDeep(cfg.properties)
      }
    }
  },
  {
    immediate: true
  }
)
</script>
<style scoped lang="scss"></style>
