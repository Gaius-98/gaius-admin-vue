<template>
  <a-button type="primary"> test </a-button>
  {{ formData }}
  <icon-select v-model="icon" style="width: 300px"></icon-select>
  <drag-table-header v-model="columns"></drag-table-header>
  <code-editor v-model="formData.code"></code-editor>
  <schema-form
    :layout="schema.layout"
    :properties="schema.properties"
    v-model:formData="formData"
    ref="form"
  ></schema-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DragTableHeader from '@/components/DragTableHeader.vue'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { Schema } from '@/components/SchemaForm/ISchema'
import IconSelect from './../../components/IconSelect/IconSelect.vue'
import dict from '../System/api/dict'
import CodeEditor from './../../components/CodeEditor.vue'
import common from '@/api/common'
const icon = ref('')
const validatePass2 = async (_rule: any, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the password again')
  } else if (value == '1') {
    return Promise.reject("Two inputs don't match!")
  } else {
    return Promise.resolve()
  }
}
const columns = ref([
  {
    title: '归属字典',
    key: 'dictTypeDesc',
    dataIndex: 'dictTypeDesc'
  },
  {
    title: '字典描述',
    key: 'label',
    dataIndex: 'label'
  },
  {
    title: '字典值',
    key: 'value',
    dataIndex: 'value'
  },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status'
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime'
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action'
  }
])
const tableData = ref([
  {
    dictTypeDesc: '11',
    label: '22',
    value: '33',
    status: '44'
  }
])
const form = ref()
const schema = ref<Schema>({
  layout: {
    labelAlign: 'left',
    layout: 'horizontal',
    labelCol: {
      span: 2
    }
  },
  properties: {
    test: {
      type: 'string',
      label: '测试',
      show: '${formData.test2} != "1"',
      rules: [
        {
          validator: validatePass2,
          trigger: 'change'
        }
      ]
    },
    type: {
      type: 'select',
      label: '字典类型',
      show: '${formData.test} == ${formData.test3}',
      rules: [],

      component: {
        asyncData: async () => {
          const { code, data, msg } = await dict.getDictTypeList()
          if (code == 200) {
            return data.map((e) => ({
              label: e.dictTypeDesc,
              value: e.dictType
            }))
          } else {
            return []
          }
        },
        onChange: () => {
          form.value.refreshOption('dict')
        }
      }
    },
    dict: {
      type: 'select',
      label: '字典',
      rules: [
        {
          required: true,
          message: '必填'
        }
      ],
      component: {
        asyncData: async (formData, field) => {
          if (formData.type) {
            const { code, data, msg } = await common.getDict([formData.type])
            if (code == 200) {
              return data[formData.type]
            } else {
              return []
            }
          }
        }
      }
    }
  }
})
const formData = ref({
  code: 'code'
})
</script>

<style scoped lang="scss"></style>
