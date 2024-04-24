<template>
  <schema-form
    v-if="curControlCfg.id"
    :layout="schema.layout"
    :properties="schema.properties"
    :formData="curControlCfg"
  >
  </schema-form>
  <div v-else>
    <a-empty />
  </div>
</template>

<script lang="ts" setup>
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { Schema } from '@/components/SchemaForm/schema'
import { ref, watch } from 'vue'
import { useFormDesignStore } from '@/stores/formDesign'
import { storeToRefs } from 'pinia'
import ControlSchema from '../utils/ControlSchema'
import _ from 'lodash'
const formStore = useFormDesignStore()
const { curControlCfg } = storeToRefs(formStore)
const schema = ref<Schema>({
  layout: {
    layout: 'horizontal',
    labelAlign: 'right',
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  },
  properties: {}
})
watch(
  () => curControlCfg.value.type,
  () => {
    if (curControlCfg.value.type) {
      let cfg = ControlSchema.find((e) => e.type === curControlCfg.value.type)
      if (cfg) {
        schema.value.properties = _.cloneDeep(cfg.properties)
      }
    }
  }
)
</script>
<style scoped lang="scss"></style>
