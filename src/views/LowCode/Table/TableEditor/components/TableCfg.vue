<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="column" tab="列配置">
      <schema-form
        v-show="currentColumn.id"
        :layout="schema.layout"
        :properties="schema.properties"
        :formData="currentColumn"
        :key="currentColumn.id"
        ref="columnForm"
      >
      </schema-form>
      <div v-show="!currentColumn.id">
        <a-empty />
      </div>
    </a-tab-pane>
    <a-tab-pane key="global" tab="全局配置">
      <schema-form
        :layout="globalSchema.layout"
        :properties="globalSchema.properties"
        :formData="tableCfg.global"
      >
      </schema-form>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, watch } from 'vue'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { Schema } from '@/components/SchemaForm/ISchema'
import { useTableDesignStore } from '@/stores/tableDesign'
import { storeToRefs } from 'pinia'
import tableApi from '../../api/table'
const tableStore = useTableDesignStore()
const { tableCfg, currentColumn, columnFields } = storeToRefs(tableStore)

const schema = ref<Schema>({
  layout: {
    layout: 'horizontal',
    labelAlign: 'right',
    labelCol: { style: { width: '100px' } }
  },
  properties: {
    dataIndex: {
      type: 'select',
      label: '字段名',
      component: {
        asyncData: async () => {
          return await new Promise((resolve) => {
            setTimeout(() => {
              resolve(columnFields.value)
            }, 100)
          })
        }
      }
    },
    title: {
      type: 'string',
      label: '列名'
    },
    width: {
      type: 'number',
      label: '列宽'
    },
    align: {
      type: 'radio',
      label: '对齐方式',
      component: {
        dataSource: [
          {
            value: 'left',
            label: '左'
          },
          {
            value: 'center',
            label: '居中'
          },
          {
            value: 'right',
            label: '右'
          }
        ],
        buttonStyle: 'solid'
      }
    },
    fixed: {
      type: 'radio',
      label: '固定列',
      component: {
        dataSource: [
          {
            value: 'left',
            label: '左'
          },
          {
            value: 'right',
            label: '右'
          },
          {
            value: false,
            label: '不固定'
          }
        ],
        buttonStyle: 'solid'
      }
    },
    type: {
      type: 'select',
      label: '列类型',
      component: {
        dataSource: [
          {
            value: 'link',
            label: '链接'
          },
          {
            value: 'image',
            label: '图片'
          },
          {
            value: 'text',
            label: '文本'
          }
        ]
      }
    }
  }
})
const columnForm = ref()
watch(
  () => columnFields,
  () => {
    if (columnForm.value) {
      console.log('columnForm', columnForm.value)
      columnForm.value.refreshOption('dataIndex')
    }
  },
  {
    deep: true,
    immediate: true
  }
)
const activeKey = ref('column')
const globalSchema = ref<Schema>({
  layout: {
    layout: 'horizontal',
    labelAlign: 'right',
    labelCol: { style: { width: '100px' } }
  },
  properties: {
    bordered: {
      type: 'switch',
      label: '边框'
    },
    'filterCfg.show': {
      type: 'switch',
      label: '显示筛选区'
    },
    'filterCfg.formId': {
      type: 'select',
      label: '筛选区表单',
      show: '${formData.filterCfg.show}',
      component: {
        asyncData: async () => {
          return await new Promise((resolve) => {
            setTimeout(() => {
              resolve(formList.value)
            }, 100)
          })
        }
      }
    }
  }
})
const formList = ref<{ value: string; label: string }[]>([])
tableApi.getFormList().then((res) => {
  const { code, data, msg } = res
  if (code == 200) {
    formList.value = data.map((e) => ({ value: e.id, label: e.name }))
  }
})
</script>
<style scoped lang="scss"></style>
