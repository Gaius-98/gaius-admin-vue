<template>
  <a-form :model="formData" v-bind="schema.formConfig">
    <low-code-form-item :formData="formData" :schema="schema.formCfgItemList"></low-code-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, onMounted } from 'vue'

import LowCodeFormItem from './components/LowCodeFormItem.vue'
import type { Obj } from '@/model'
interface Props {
  schema: any
  formData: Obj<any>
}
const props = defineProps<Props>()
const { schema, formData } = toRefs(props)
// const dictKeys = ref<string[]>([])
// const dict = ref<Obj<any>>({})
// const collectDictKey = () => {
//   schema.value.formCfgItemList.map((e: LCFormItemCfg<ControlType>) => {
//     if ('dict' in e.controlProp!) {
//       dictKeys.value.push(e.controlProp.dict!)
//     }
//   })
// }
// collectDictKey()
// const getDict = () => {
//   if (dictKeys.value.length > 0) {
//     common.getDict(dictKeys.value).then((res) => {
//       const { code, data, msg } = res
//       if (code == 200) {
//         dictKeys.value.map((key) => {
//           dict.value[key] = data[key]
//         })
//       }
//     })
//   }
// }
// onMounted(() => {
//   getDict()
// })
</script>
<style scoped lang="scss"></style>
