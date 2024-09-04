<template>
  <div style="background-color: #f5f5f5">
    <a-page-header title="预览表格" @back="goBack" class="page-header" />
    <low-code-table :id="id"></low-code-table>
  </div>
</template>

<script lang="ts" setup>
import LowCodeTable from '@/components/LowCodeTable/LowCodeTable.vue'
import { reactive, toRefs, ref } from 'vue'
interface Props {
  id: string
  from: string
}
const props = withDefaults(defineProps<Props>(), {
  id: '',
  from: ''
})
const { id, from } = toRefs(props)
const goBack = () => {
  window.open(from.value, 'table')
}
window.name = `table_${id.value}`
</script>
<style scoped lang="scss">
.page-header {
  background-color: #fff;
  margin-bottom: 10px;
}
</style>
