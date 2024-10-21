<template>
  <div class="log">
    <a-card class="search-area">
      <a-form ref="searchFormRef" :model="logParams" layout="inline" @finish="onSearch">
        <a-form-item label="采集记录设备编号">
          <a-input v-model:value="logParams.keyword" />
        </a-form-item>
        <a-form-item label="操作时间">
          <a-range-picker v-model:value="date" valueFormat="YYYY-MM-DD" @change="changeTime()" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">搜索</a-button>
          <a-button style="margin: 0 8px" @click="onClear"> 重置 </a-button>
        </a-form-item>
      </a-form>
    </a-card>
    <a-card>
      <a-table
        :loading="loading"
        :columns="columns"
        :data-source="tableData"
        :scroll="{ y: 560 }"
        rowKey="id"
        @change="onChangePagination"
        :pagination="{
          current: logParams.pageNumber,
          total: total,
          showSizeChanger: true,
          pageSize: logParams.pageSize
        }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key == 'deviceId'">
            <div>
              {{ record.reportInfo.deviceId }}
            </div>
          </template>
        </template>
        <template #expandedRowRender="{ record }">
          <a-card>
            <a-descriptions title="操作人信息" size="small" :column="1">
              <a-descriptions-item label="操作账号">{{
                record.userInfo.username
              }}</a-descriptions-item>
              <a-descriptions-item label="用户姓名">{{ record.userInfo.name }}</a-descriptions-item>
              <a-descriptions-item label="操作时间">{{ record.createTime }}</a-descriptions-item>
            </a-descriptions>
            <a-descriptions title="操作数据信息" size="small" :column="1"></a-descriptions>
            <a-table
              class="ant-table-striped"
              :columns="infoColumns"
              :pagination="false"
              :data-source="record.changeInfo"
              :row-class-name="
                (_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : null)
              "
              style="margin: 5px"
            >
              <template> </template>
            </a-table>
          </a-card>
        </template>
      </a-table>
    </a-card>
    <a-modal v-model:open="modalOpen" :title="modalTitle" @cancel="resetForm"> </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from 'vue'
import api from './api'
import { message, type FormInstance, type PaginationProps } from 'ant-design-vue'
import type { AuthInfo, PageParams, CreateAuthInfo, RoleDictItem, SystemOrgTree } from '@/model'

import type { LogInfo } from '@/model'
import common, { type DictItem } from '@/api/common'
const logParams = reactive<PageParams>({
  keyword: '',
  pageNumber: 1,
  pageSize: 10,
  startTime: '',
  endTime: ''
})
const date = ref('')
const changeTime = () => {
  if (date.value) {
    logParams.startTime = date.value[0]
    logParams.endTime = date.value[1]
  } else {
    logParams.startTime = ''
    logParams.endTime = ''
  }
}
const tableData = ref<LogInfo[]>([])
const columns = ref([
  {
    title: '采集设备编号',
    key: 'deviceId',
    dataIndex: 'deviceId'
  },
  {
    title: '操作人',
    key: 'createBy',
    dataIndex: 'createBy'
  },
  {
    title: '操作时间',
    key: 'createTime',
    dataIndex: 'createTime'
  }
])
const infoColumns = ref([
  {
    title: '变更项',
    key: 'fieldDesc',
    dataIndex: 'fieldDesc'
  },
  {
    title: '变更前的值',
    key: 'oldValue',
    dataIndex: 'oldValue'
  },
  {
    title: '变更后的值',
    key: 'newValue',
    dataIndex: 'newValue'
  }
])
const loading = ref(false)
const searchFormRef = ref<FormInstance>()
const onClear = () => {
  searchFormRef.value?.resetFields()
  logParams.startTime = ''
  logParams.endTime = ''
  date.value = ''
  getList()
}
const total = ref(0)
const onSearch = () => {
  logParams.pageNumber = 1
  logParams.pageSize = 10
  getList()
}
const onChangePagination = (pagination: PaginationProps) => {
  const { current, pageSize } = pagination
  logParams.pageNumber = current!
  logParams.pageSize = pageSize!
  getList()
}
const getList = () => {
  loading.value = true
  api.getList(logParams).then((res: any) => {
    const { code, data } = res
    if (code == 200) {
      tableData.value = data.data
      total.value = data.total
    }
    loading.value = false
  })
}
const logTypeList = ref<DictItem[]>([])
const logTypeMap = ref<Record<string, string>>({})
const orgTree = ref<SystemOrgTree[]>([])
const userList = ref<DictItem[]>([])
onMounted(() => {
  getList()
  common.getOrgTree().then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      orgTree.value = data
    }
  })
  common.getAllUser().then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      userList.value = data
    }
  })
  common.getDict(['logBelongType']).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      logTypeList.value = data['logBelongType']
      logTypeMap.value = logTypeList.value.reduce(
        (p, c) => {
          p[c.value] = c.label
          return p
        },
        {} as Record<string, string>
      )
    }
  })
})
const modalOpen = ref(false)

const modalType = ref<'add' | 'edit'>('add')
const modalTitle = computed(() => {
  let titleObj = {
    add: '新增记录',
    edit: '编辑记录'
  }
  return titleObj[modalType.value]
})
const modalFormRef = ref<FormInstance>()

const onOpenEditlog = async (record: LogInfo) => {
  // const { code, data } = await api.getDetail(record.id!)
  // if (code == 200) {
  //   modalType.value = 'edit'
  //   modalOpen.value = true
  // }
}

const resetForm = () => {
  modalFormRef.value?.resetFields()
}

onMounted(() => {})
</script>
<style scoped lang="scss">
.log {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .search-area {
    margin-bottom: $gap;
  }
  .tools {
    margin-bottom: $half-gap;
  }
}
</style>
