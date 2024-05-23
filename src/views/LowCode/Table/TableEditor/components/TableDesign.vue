<template>
  <div class="table-design-container">
    <a-card class="filter-panel">
      <!-- <low-code-form></low-code-form> -->
    </a-card>
    <a-card class="table-container">
      <drag-table-header v-model="tableCfg.columns" @onClick="onClickColumn" />
      <a-table :showHeader="false" :columns="tableCfg.columns" :data-source="tableData"> </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import DragTableHeader from '@/components/DragTableHeader.vue'
import LowCodeForm from '@/components/LowCodeForm/LowCodeForm.vue'
import { reactive, toRefs, ref } from 'vue'
import { useTableDesignStore } from '@/stores/tableDesign'
import { storeToRefs } from 'pinia'
import type { LCTableColumnCfg } from '@/model'
const tableStore = useTableDesignStore()
const { tableCfg } = storeToRefs(tableStore)
const { onSelectColumn } = tableStore
const tableData = ref([
  {
    test: 1,
    test4: 'e'
  }
])
const onClickColumn = (columnData: LCTableColumnCfg) => {
  onSelectColumn(columnData.id, tableCfg.value.columns)
}
</script>
<style scoped lang="scss">
.table-design-container {
  display: flex;
  flex-direction: column;
}
</style>
