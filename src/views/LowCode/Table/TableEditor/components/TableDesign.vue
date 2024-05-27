<template>
  <div class="table-design-container">
    <a-card class="filter-panel" v-if="showFilterForm">
      <low-code-form-id
        v-model:formData="filterData"
        :id="tableCfg.global.filterCfg!.formId"
        style="overflow-y: auto; max-height: 120px; margin-bottom: 10px"
      ></low-code-form-id>
      <a-row>
        <a-col :span="24" style="text-align: right">
          <a-button type="primary" html-type="submit">搜索</a-button>
          <a-button style="margin: 0 8px">重置</a-button>
        </a-col>
      </a-row>
    </a-card>
    <a-card class="table-container">
      <div class="tools">
        <a-button type="primary" @click="onAddColumn">新增列</a-button>
        <a-button
          :icon="h(SyncOutlined)"
          type="link"
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
        :scroll="{ y: showFilterForm ? 300 : 500 }"
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
import { reactive, toRefs, ref, computed, h } from 'vue'
import { useTableDesignStore } from '@/stores/tableDesign'
import { storeToRefs } from 'pinia'
import type { LCTableColumnCfg } from '@/model'
import LowCodeFormId from '@/components/LowCodeForm/LowCodeFormId.vue'
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
const showFilterForm = computed(() => {
  return tableCfg.value.global.filterCfg?.show && tableCfg.value.global.filterCfg?.formId
})
const filterData = ref({})
</script>
<style scoped lang="scss">
.table-design-container {
  display: flex;
  flex-direction: column;
  .filter-panel {
    max-height: 200px;
    margin-bottom: 20px;
  }
}
</style>
