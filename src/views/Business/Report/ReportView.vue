<template>
  <div class="report">
    <a-card class="search-area">
      <a-form ref="searchFormRef" :model="reportParams" layout="inline" @finish="onSearch">
        <!-- <a-form-item label="记录编号" prop="reportId">
          <a-input
            v-model:value="reportParams.reportId"
            :options="reportTypeList"
            show-search
            allowClear
            optionFilterProp="label"
            style="width: 200px"
          ></a-input>
        </a-form-item> -->
        <a-form-item label="记录时间">
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
        @change="onChangePagination"
        :pagination="{
          current: reportParams.pageNumber,
          total: total,
          showSizeChanger: true,
          pageSize: reportParams.pageSize
        }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key == 'action'">
            <a-button
              type="link"
              @click="onOpenEditreport(record)"
              v-has-perm="'business:report:update'"
              >编辑</a-button
            >
            <a-divider type="vertical" />
            <a-button type="link" @click="onExport(record)" v-has-perm="'business:report:export'"
              >导出</a-button
            >
            <a-divider type="vertical" />
            <a-popconfirm
              title="确定要删除吗?"
              ok-text="确定"
              cancel-text="取消"
              @confirm="onDeletereport(record)"
            >
              <a-button type="link" danger v-has-perm="'business:report:remove'">删除</a-button>
            </a-popconfirm>
          </template>
        </template>
      </a-table>
    </a-card>
    <a-modal v-model:open="modalOpen" @ok="onConfirm" :title="modalTitle" @cancel="resetForm">
      <a-form :model="formData" :label-col="{ span: 8 }" ref="modalFormRef">
        <a-form-item label="采集设备编号" required prop="deviceId">
          <a-input v-model:value="formData.deviceId" disabled></a-input>
        </a-form-item>
        <a-form-item label="PM2.5浓度" required prop="pm">
          <a-input v-model:value="formData.pm"></a-input>
        </a-form-item>
        <a-form-item label="甲醛浓度" required prop="fa">
          <a-input v-model:value="formData.fa"></a-input>
        </a-form-item>
        <a-form-item label="TOVC" required prop="tovc">
          <a-input v-model:value="formData.tovc"></a-input>
        </a-form-item>
        <a-form-item label="温度" required prop="temp">
          <a-input v-model:value="formData.temp"></a-input>
        </a-form-item>
        <a-form-item label="湿度" required prop="rh">
          <a-input v-model:value="formData.rh"></a-input>
        </a-form-item>
        <a-form-item label="采集时间" prop="createTime" required>
          <a-date-picker
            v-model:value="formData.createTime"
            valueFormat="YYYY-MM-DD HH:mm:ss"
            showTime
            disabled
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from 'vue'
import api from './api'
import { service } from '@/utils/request'
import axios from 'axios'
import { message, type FormInstance, type PaginationProps } from 'ant-design-vue'
import type { AuthInfo, PageParams, CreateAuthInfo, RoleDictItem, SystemOrgTree } from '@/model'
import { downloadFile, downloadFileByBlob } from '@/utils/tools'
import type { ReportInfo } from '@/model'
import common, { type DictItem } from '@/api/common'
const reportParams = reactive<PageParams>({
  keyword: '',
  pageNumber: 1,
  pageSize: 10,
  startTime: '',
  endTime: ''
})
const date = ref('')
const changeTime = () => {
  if (date.value) {
    reportParams.startTime = date.value[0]
    reportParams.endTime = date.value[1]
  } else {
    reportParams.startTime = ''
    reportParams.endTime = ''
  }
}
const tableData = ref<ReportInfo[]>([])
const columns = ref([
  {
    title: '采集设备编号',
    key: 'deviceId',
    dataIndex: 'deviceId',
    width: '250px'
  },
  {
    title: 'PM2.5浓度',
    key: 'pm',
    dataIndex: 'pm'
  },
  {
    title: '甲醛浓度',
    key: 'fa',
    dataIndex: 'fa'
  },
  {
    title: 'TOVC',
    key: 'tovc',
    dataIndex: 'tovc'
  },
  {
    title: '温度',
    key: 'temp',
    dataIndex: 'temp'
  },
  {
    title: '湿度',
    key: 'rh',
    dataIndex: 'rh'
  },
  {
    title: '采集时间',
    key: 'createTime',
    dataIndex: 'createTime'
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
    width: '250px'
  }
])
const loading = ref(false)
const searchFormRef = ref<FormInstance>()
const onClear = () => {
  searchFormRef.value?.resetFields()
  reportParams.startTime = ''
  reportParams.endTime = ''
  date.value = ''
  getList()
}
const total = ref(0)
const onSearch = () => {
  reportParams.pageNumber = 1
  reportParams.pageSize = 10
  getList()
}
const onChangePagination = (pagination: PaginationProps) => {
  const { current, pageSize } = pagination
  reportParams.pageNumber = current!
  reportParams.pageSize = pageSize!
  getList()
}
const getList = () => {
  loading.value = true
  api.getList(reportParams).then((res: any) => {
    const { code, data } = res
    if (code == 200) {
      tableData.value = data.data
      total.value = data.total
    }
    loading.value = false
  })
}
const reportTypeList = ref<DictItem[]>([])
const reportTypeMap = ref<Record<string, string>>({})
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
  common.getDict(['reportBelongType']).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      reportTypeList.value = data['reportBelongType']
      reportTypeMap.value = reportTypeList.value.reduce(
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
const formData = ref<ReportInfo>({
  deviceId: '',
  fa: '',
  rh: '',
  temp: '',
  createTime: '',
  tovc: '',
  pm: ''
})
const modalType = ref<'add' | 'edit'>('add')
const modalTitle = computed(() => {
  let titleObj = {
    add: '新增记录',
    edit: '编辑记录'
  }
  return titleObj[modalType.value]
})
const modalFormRef = ref<FormInstance>()

const onOpenEditreport = async (record: ReportInfo) => {
  const { code, data } = await api.getDetail(record.id!)
  if (code == 200) {
    formData.value = data
    modalType.value = 'edit'
    modalOpen.value = true
  }
}
const onDeletereport = async (record: ReportInfo) => {
  const { code, msg, data } = await api.remove(record.id!)
  if (code == 200) {
    message.success(data)
    getList()
  }
}
const resetForm = () => {
  modalFormRef.value?.resetFields()
}
const onConfirm = () => {
  modalFormRef.value?.validate().then(() => {
    let http
    if (modalType.value == 'add') {
      http = api.add
    } else {
      http = api.update
    }
    http(formData.value).then((res: any) => {
      const { code } = res
      if (code == 200) {
        message.success(modalType.value == 'add' ? '新增成功' : '编辑成功')
        getList()
      }
      resetForm()
      modalOpen.value = false
    })
  })
}
const onExport = (record: ReportInfo) => {
  const { id } = record
  api.export(id!).then((res) => {
    downloadFileByBlob(res as unknown as Blob, '空气检验报告', 'doc')
  })
}
onMounted(() => {})
</script>
<style scoped lang="scss">
.report {
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
