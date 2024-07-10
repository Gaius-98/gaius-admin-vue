<template>
  <code-editor v-model:value="scheamStr" prepend="表单配置"></code-editor>
  <code-editor
    :value="JSON.stringify(formData, null, 4)"
    prepend="表单数据"
    :height="80"
  ></code-editor>
  <schema-form
    :layout="schema.layout"
    :properties="schema.properties"
    v-model:formData="formData"
    ref="form"
  ></schema-form>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { Schema } from '@/components/SchemaForm/ISchema'

import dict from '../System/api/dict'
import CodeEditor from './../../components/CodeEditor.vue'
import common from '@/api/common'

const validatePass2 = async (_rule: any, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the password again')
  } else if (value == '1') {
    return Promise.reject("Two inputs don't match!")
  } else {
    return Promise.resolve()
  }
}

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
const scheamStr = ref('')
scheamStr.value = JSON.stringify(schema.value, null, 4)
const errmsg = ref('')
watchEffect(() => {
  try {
    schema.value = JSON.parse(scheamStr.value)
  } catch (error) {
    errmsg.value = JSON.stringify(error)
  }
})
const formData = ref({
  code: 'code'
})
</script>

<style scoped lang="scss"></style>
