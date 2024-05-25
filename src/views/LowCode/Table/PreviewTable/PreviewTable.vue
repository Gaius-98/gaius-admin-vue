<template>
  <a-page-header title="预览表格" @back="goBack" class="page-header" />
  <low-code-table :id="id"></low-code-table>
</template>

<script lang="ts" setup>
import LowCodeTable from '@/components/LowCodeTable/LowCodeTable.vue'
import { reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router'
interface Props {
  id: string
}
const props = defineProps<Props>()
const { id } = toRefs(props)
const router = useRouter()
const goBack = () => {
  router.go(-1)
}
</script>
<style scoped lang="scss">
.page-header {
  background-color: #fff;
  margin-bottom: 10px;
}
</style>
