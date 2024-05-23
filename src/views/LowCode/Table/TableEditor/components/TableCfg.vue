<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="column" tab="列配置">
      <schema-form
        v-if="currentColumn.id"
        :layout="schema.layout"
        :properties="schema.properties"
        :formData="currentColumn"
        :key="currentColumn.id"
      >
      </schema-form>
      <div v-else>
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
import { reactive, toRefs, ref } from 'vue'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { Schema } from '@/components/SchemaForm/ISchema'
import { useTableDesignStore } from '@/stores/tableDesign'
import { storeToRefs } from 'pinia'
const tableStore = useTableDesignStore()
const schema = ref<Schema>({
  layout: {
    layout: 'horizontal',
    labelAlign: 'right',
    labelCol: { style: { width: '100px' } }
  },
  properties: {
    dataIndex: {
      type: 'string',
      label: '字段名'
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
            label: '左固定'
          },
          {
            value: 'right',
            label: '右固定'
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
    'pagination.show': {
      type: 'switch',
      label: '是否分页'
    },
    'pagination.pageSize': {
      type: 'number',
      label: '每页条数',
      show: '${formData.pagination.show}'
    }
  }
})
const { tableCfg, currentColumn } = storeToRefs(tableStore)
</script>
<style scoped lang="scss"></style>
