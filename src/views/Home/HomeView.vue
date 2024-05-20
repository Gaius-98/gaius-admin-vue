<template>
  <a-button type="primary"> test </a-button>
  {{ formData }}
  <icon-select v-model="icon" style="width: 300px"></icon-select>
  <schema-form
    :layout="schema.layout"
    :properties="schema.properties"
    v-model:formData="formData"
    ref="form"
  ></schema-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { Schema } from '@/components/SchemaForm/schema'
import IconSelect from './../../components/IconSelect/IconSelect.vue'
import dict from '../System/api/dict'
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
          form.value.refrehOption('dict')
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
const formData = ref({})
</script>

<style scoped lang="scss"></style>
