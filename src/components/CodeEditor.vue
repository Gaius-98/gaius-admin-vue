<template>
  <codemirror
    :style="{ height: `${height}px` }"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    v-bind="$attrs"
    v-model="value"
  />
</template>

<script lang="ts" setup name="EvCode">
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { reactive, toRefs, ref } from 'vue'

interface Props {
  height: number
}
const props = withDefaults(defineProps<Props>(), {
  height: 400
})
const { height } = toRefs(props)
const value = defineModel<string>({ required: true })

const extensions = [javascript()]
</script>
<style scoped lang="scss"></style>
