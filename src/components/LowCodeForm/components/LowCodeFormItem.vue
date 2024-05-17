<template>
  <template v-for="item in schema">
    <template v-if="['grid', 'card', 'collapse', 'divider'].includes(item.type)">
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
      <low-code-collapse
        :key="item.name"
        v-if="item.type == 'collapse'"
        :schema="item"
        :formData="formData"
      >
      </low-code-collapse>
      <a-divider v-if="item.type == 'divider'" v-bind="item.controlProp" :key="item.name">
        {{ item.controlProp.title }}
      </a-divider>
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
      <a-switch
        v-if="item.type == 'switch'"
        v-model:checked="formData[item.formItemProp.name]"
        v-bind="item.controlProp"
      ></a-switch>
    </a-form-item>
  </template>
</template>

<script lang="ts" setup>
import LowCodeCard from './LowCodeCard.vue'
import LowCodeGrid from './LowCodeGrid.vue'
import LowCodeCollapse from './LowCodeCollapse.vue'
import { reactive, toRefs, ref, onMounted } from 'vue'
import type { Obj } from '@/model'
import common from '@/api/common'
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
  schema.value.map((e: LCFormItemCfg<ControlType>) => {
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
