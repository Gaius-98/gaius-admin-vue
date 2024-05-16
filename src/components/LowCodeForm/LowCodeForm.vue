<template>
  <a-form :model="formData" v-bind="schema.formConfig">
    <template v-for="item in schema.formCfgItemList">
      <template v-if="['grid', 'card'].includes(item.type)">
        <low-code-card
          :key="item.name"
          v-if="item.type == 'card'"
          :schema="item"
          :formData="formData"
        >
        </low-code-card>
        <low-code-grid
          :key="item.name"
          v-if="item.type == 'grid'"
          :schema="item"
          :formData="formData"
        >
        </low-code-grid>
      </template>
      <a-form-item
        v-else
        :label="item.formItemProp.label"
        :name="item.formItemProp.name"
        :key="item.name"
        :required="item.formItemProp.required"
      >
        <a-input
          v-if="item.type == 'input'"
          v-model:value="formData[item.formItemProp.name]"
          v-bind="item.controlProp"
        />
        <a-select
          v-if="item.type == 'select'"
          v-model:value="formData[item.formItemProp.name]"
          v-bind="item.controlProp"
          :options="dict[item.controlProp.dict]"
        >
        </a-select>
        <a-radio-group
          v-if="item.type == 'radio'"
          v-model:value="formData[item.formItemProp.name]"
          v-bind="item.controlProp"
          :options="dict[item.controlProp.dict]"
        >
        </a-radio-group>
        <a-date-picker
          v-if="item.type == 'date'"
          v-model:value="formData[item.formItemProp.name]"
          v-bind="item.controlProp"
        >
        </a-date-picker>
        <a-input-number
          v-if="item.type == 'number'"
          v-model:value="formData[item.formItemProp.name]"
          v-bind="item.controlProp"
        >
        </a-input-number>
        <a-checkbox-group
          v-if="item.type == 'checkbox'"
          v-model:value="formData[item.formItemProp.name]"
          v-bind="item.controlProp"
          :options="dict[item.controlProp.dict]"
        >
        </a-checkbox-group>
      </a-form-item>
    </template>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, onMounted } from 'vue'
import LowCodeCard from './components/LowCodeCard.vue'
import LowCodeGrid from './components/LowCodeGrid.vue'
import common from '@/api/common'
import type { Obj } from '@/model'
import type { LCFormItemCfg, ControlType } from '@/model'
interface Props {
  schema: any
  formData: Obj<any>
}
const props = defineProps<Props>()
const { schema, formData } = toRefs(props)
const dictKeys = ref<string[]>([])
const dict = ref<Obj<any>>({})
const collectDictKey = () => {
  schema.value.formCfgItemList.map((e: LCFormItemCfg<ControlType>) => {
    if ('dict' in e.controlProp!) {
      dictKeys.value.push(e.controlProp.dict!)
    }
  })
}
collectDictKey()
const getDict = () => {
  if (dictKeys.value.length > 0) {
    common.getDict(dictKeys.value).then((res) => {
      const { code, data, msg } = res
      if (code == 200) {
        dictKeys.value.map((key) => {
          dict.value[key] = data[key]
        })
      }
    })
  }
}
onMounted(() => {
  getDict()
})
</script>
<style scoped lang="scss"></style>
