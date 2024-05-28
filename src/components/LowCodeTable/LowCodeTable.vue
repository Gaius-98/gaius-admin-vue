<template>
  <div class="low-code-table">
    <a-card class="filter-panel" v-if="showFilterForm">
      <low-code-form-id
        :formData="filterData"
        :id="tableCfg.global!.filterCfg!.formId"
        class="filter-form"
        :class="expand ? 'expand' : ''"
      ></low-code-form-id>
      <a-row>
        <a-col :span="24" style="text-align: right">
          <a-button type="primary" html-type="submit" @click="getList">搜索</a-button>
          <a-button style="margin: 0 8px" @click="onClear">重置</a-button>
          <a-button
            type="link"
            :icon="h(expand ? UpOutlined : DownOutlined)"
            @click="expand = !expand"
          >
            <span style="font-size: 12px">{{ expand ? '收起' : '展开' }}</span>
          </a-button>
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
        :scroll="{ y: showFilterForm ? 470 : 670 }"
        :loading="loading"
        :pagination="false"
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
      <a-pagination
        style="display: flex; justify-content: flex-end; margin-top: 20px"
        v-model:current="variableObj.pageNumber"
        :pageSize="variableObj.pageSize || 10"
        :total="total"
        show-less-items
      />
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { SyncOutlined, UpOutlined, DownOutlined } from '@ant-design/icons-vue'
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
const expand = ref(false)
const showFilterForm = computed(() => {
  return tableCfg.value?.global?.filterCfg?.show && tableCfg.value?.global?.filterCfg?.formId
})

const variableObj = ref<Obj<any>>({})

watch(
  () => id.value,
  () => {
    tableApi.getDetail(id.value).then((res) => {
      const { code, data, msg } = res
      if (code == 200) {
        tableCfg.value = data
        variableObj.value = api.transformParamsData(
          tableCfg.value.variablePool as LCTableVariableCfg
        )
        getList()
      }
    })
  },
  {
    immediate: true
  }
)
watch(
  () => variableObj.value,
  () => {
    getList()
  },
  {
    deep: true
  }
)

const total = ref(0)
const getList = async () => {
  loading.value = true
  try {
    const { data, total: resTotal } = await api.refreshData(
      tableCfg.value.dataSource!,
      variableObj.value,
      filterData.value
    )
    tableData.value = data
    if (resTotal) {
      total.value = resTotal
    }
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
  overflow-y: auto;
  .filter-panel {
    margin-bottom: 20px;
    .filter-form {
      max-height: 100px;
      overflow-y: hidden;
      &.expand {
        overflow-y: auto;
        max-height: 100%;
      }
    }
  }
}
</style>
