<template>
  <a-card
    :bodyStyle="{
      padding: 0,
      'min-height': '40px'
    }"
    :title="schema.title"
    :bordered="schema.bordered"
    :hoverable="schema.hoverable"
  >
    <low-code-form :schema="schema.children" :formData="formData"></low-code-form>
  </a-card>
</template>

<script lang="ts" setup>
import LowCodeForm from '../LowCodeForm.vue'
import { reactive, toRefs, ref } from 'vue'
import type { Obj } from '@/model'
interface Props {
  schema: any
  formData: Obj<any>
}
const props = defineProps<Props>()
const { schema, formData } = toRefs(props)
</script>
<style scoped lang="scss"></style>
