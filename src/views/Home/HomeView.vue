<template>
  <a-button type="primary"> test </a-button>
  {{ formData }}
  <icon-select v-model="icon" style="width: 300px"></icon-select>
  <schema-form
    :layout="schema.layout"
    :properties="schema.properties"
    v-model:formData="formData"
  ></schema-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { Schema } from '@/components/SchemaForm/schema'
import IconSelect from './../../components/IconSelect/IconSelect.vue'
const icon = ref('')
const schema = ref<Schema>({
  layout: {
    labelAlign: 'left',
    layout: 'horizontal'
  },
  properties: {
    test: {
      type: 'string',
      label: '测试'
    },
    test2: {
      type: 'select',
      label: '测试下拉',
      show: '${formData.test} == ${formData.test3}',
      component: {
        asyncData: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve([
                {
                  label: '1',
                  value: '1'
                }
              ])
            }, 1000)
          })
        }
      }
    },
    test3: {
      type: 'string',
      label: '测试数值',
      component: {}
    }
  }
})
const formData = ref({})
</script>

<style scoped lang="scss"></style>
