<template>
  <div class="table-design-container">
    <a-card class="filter-panel">
      <!-- <low-code-form></low-code-form> -->
    </a-card>
    <a-card class="table-container preview-table">
      <div class="tools">
        <a-button type="primary" @click="onAddColumn">新增列</a-button>
        <a-button
          :icon="h(SyncOutlined)"
          type="link"
          ghost
          title="刷新数据"
          style="float: right"
          @click="onRefresh"
        ></a-button>
      </div>
      <drag-table-header v-model="tableCfg.columns" @onClick="onClickColumn" @onRemove="onRemove" />
      <a-table
        :showHeader="false"
        :columns="tableCfg.columns"
        :data-source="tableData"
        :scroll="{ y: '515px' }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.type == 'image'">
            <a-image :src="`${record[column.dataIndex]}`" height="130px" width="100%" />
          </template>
          <template v-if="column.type == 'link'">
            <a :href="`${record[column.dataIndex]}`" target="_blank">
              {{ record[column.dataIndex] }}
            </a>
          </template>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import DragTableHeader from '@/components/DragTableHeader.vue'
import { SyncOutlined } from '@ant-design/icons-vue'
import { reactive, toRefs, ref, h } from 'vue'
import { useTableDesignStore } from '@/stores/tableDesign'
import { storeToRefs } from 'pinia'
import type { LCTableColumnCfg } from '@/model'
const tableStore = useTableDesignStore()
const { tableCfg, tableData } = storeToRefs(tableStore)
const { onSelectColumn, onRemoveColumn, onAddColumn, onRefreshData } = tableStore

const onClickColumn = (columnData: LCTableColumnCfg) => {
  onSelectColumn(columnData.id, tableCfg.value.columns)
}
const onRemove = (columnData: LCTableColumnCfg) => {
  onRemoveColumn(columnData.id, tableCfg.value.columns)
}
const onRefresh = () => {
  onRefreshData().then((res) => {
    tableData.value = res
  })
}
</script>
<style scoped lang="scss">
.table-design-container {
  display: flex;
  flex-direction: column;
}
</style>
