<template>
  <div class="low-code-table">
    <a-card class="filter-panel" v-if="showFilterForm">
      <low-code-form-id
        v-model:formData="filterData"
        :id="tableCfg.global!.filterCfg!.formId"
        style="overflow-y: auto; max-height: 120px; margin-bottom: 10px"
      ></low-code-form-id>
      <a-row>
        <a-col :span="24" style="text-align: right">
          <a-button type="primary" html-type="submit" @click="getList">搜索</a-button>
          <a-button style="margin: 0 8px" @click="onClear">清空</a-button>
        </a-col>
      </a-row>
    </a-card>
    <a-card class="table-container">
      <div class="tools">
        <a-button
          :icon="h(SyncOutlined)"
          type="link"
          title="刷新数据"
          style="float: right"
          @click="getList"
        ></a-button>
      </div>
      <a-table
        :columns="tableCfg.columns"
        :data-source="tableData"
        :scroll="{ y: showFilterForm ? 300 : 500 }"
        :loading="loading"
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
import { SyncOutlined } from '@ant-design/icons-vue'
import LowCodeFormId from '@/components/LowCodeForm/LowCodeFormId.vue'
import { reactive, toRefs, ref, watch, computed, h } from 'vue'
import tableApi from '@/views/LowCode/Table/api/table'
import type { Obj, LCTableCfg, LCTableVariableCfg } from '@/model'
import { message } from 'ant-design-vue'
import api from './api'

interface Props {
  id: string
}
const props = defineProps<Props>()
const { id } = toRefs(props)
const tableCfg = ref<Partial<LCTableCfg>>({})
const tableData = ref<Obj<any>[]>([])
const filterData = ref({})
const loading = ref(false)
const onClear = () => {
  filterData.value = {}
  getList()
}
const showFilterForm = computed(() => {
  return tableCfg.value?.global?.filterCfg?.show && tableCfg.value?.global?.filterCfg?.formId
})

watch(
  () => id.value,
  () => {
    tableApi.getDetail(id.value).then((res) => {
      const { code, data, msg } = res
      if (code == 200) {
        tableCfg.value = data
        getList()
      }
    })
  },
  {
    immediate: true
  }
)
const getList = async () => {
  loading.value = true
  try {
    const data = await api.refreshData(
      tableCfg.value.dataSource!,
      tableCfg.value.variablePool as LCTableVariableCfg,
      filterData.value
    )
    tableData.value = data
  } catch (error) {
    message.error('获取数据失败:' + error)
  }
  loading.value = false
}
</script>
<style scoped lang="scss">
.low-code-table {
  display: flex;
  flex-direction: column;
  .filter-panel {
    max-height: 200px;
    margin-bottom: 20px;
  }
}
</style>
