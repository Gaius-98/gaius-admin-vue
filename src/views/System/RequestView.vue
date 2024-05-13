<template>
  <div class="request">
    <a-card class="search-area">
      <a-form ref="searchFormRef" :model="requestParamsForm" @finish="onSearch">
        <a-row :gutter="24">
          <a-col :span="4">
            <a-form-item label="API名称" name="keyword">
              <a-input v-model:value="requestParamsForm.keyword"> </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item label="地址" name="url">
              <a-input v-model:value="requestParamsForm.url"> </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="4" style="text-align: right">
            <a-button type="primary" html-type="submit">搜索</a-button>
            <a-button style="margin: 0 8px" @click="onClear"> 重置 </a-button>
          </a-col>
        </a-row>
      </a-form>
    </a-card>
    <a-card>
      <div class="tools">
        <a-button type="primary" @click="onOpenAddrequest">新增</a-button>
      </div>
      <a-table
        :loading="loading"
        :columns="columns"
        :data-source="tableData"
        :scroll="{ y: 440 }"
        @change="onChangePagination"
        :pagination="{ current: requestParamsForm.pageNumber, total: total }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key == 'status'">
            <a-tag color="#87d068" v-if="record.status">启用</a-tag>
            <a-tag color="#f50" v-else>停用</a-tag>
          </template>
          <template v-if="column.key == 'action'">
            <a-button type="link" @click="onRun(record)" v-if="record.status">执行</a-button>
            <a-divider type="vertical" />
            <a-button type="link" @click="onOpenEditrequest(record)">编辑</a-button>
            <a-divider type="vertical" />
            <a-popconfirm
              title="确定要删除吗?"
              ok-text="确定"
              cancel-text="取消"
              @confirm="onDeleterequest(record)"
            >
              <a-button type="link" danger>删除</a-button>
            </a-popconfirm>
          </template>
          <template v-if="column.key == 'method'">
            <a-tag color="#2db7f5" v-if="record.method == 'get'">GET</a-tag>
            <a-tag color="#87d068" v-if="record.method == 'post'">POST</a-tag>
          </template>
        </template>
      </a-table>
    </a-card>
    <a-modal v-model:open="modalOpen" @ok="onConfirm" :title="modalTitle" @cancel="resetForm">
      <a-divider>API信息</a-divider>
      <a-form :model="formData" :label-col="{ span: 4 }" ref="modalFormRef">
        <a-form-item label="API名">
          <a-input v-model:value="formData.apiName"></a-input>
        </a-form-item>
        <a-form-item label="状态">
          <a-radio-group v-model:value="formData.status" button-style="solid">
            <a-radio-button :value="1">启用 </a-radio-button>
            <a-radio-button :value="0">停用 </a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="备注">
          <a-input v-model:value="formData.desc"></a-input>
        </a-form-item>
        <a-divider>接口定义</a-divider>
        <a-input v-model:value="formData.url">
          <template #addonBefore>
            <a-select v-model:value="formData.method" :options="methodOptions"></a-select>
          </template>
        </a-input>
        <div>
          <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="params" tab="params">
              <edit-table :columns="paramsColumns" v-model="formData.params"> </edit-table>
            </a-tab-pane>
            <a-tab-pane key="headers" tab="headers">
              <edit-table :columns="headersColumns" v-model="formData.headers"> </edit-table>
            </a-tab-pane>
            <a-tab-pane key="body" tab="body">
              <edit-table :columns="paramsColumns" v-model="formData.body"> </edit-table>
            </a-tab-pane>
          </a-tabs>
        </div>
      </a-form>
    </a-modal>
    <a-modal v-model:open="modalResultOpen" title="执行结果" :footer="null">
      <a-skeleton v-if="runLoading" />
      <a-descriptions layout="horizontal" v-else>
        <a-descriptions-item label="API名称" :span="3">
          {{ curApiInfo.apiName }}
        </a-descriptions-item>
        <a-descriptions-item label="请求地址" :span="3">
          {{ curApiInfo.url }}
        </a-descriptions-item>
        <a-descriptions-item label="请求方式" :span="3">
          {{ curApiInfo.method }}
        </a-descriptions-item>
        <a-descriptions-item label="调用结果" :span="3">
          {{ resultFlag ? '成功' : '失败' }}
        </a-descriptions-item>
        <a-descriptions-item
          label="返回信息"
          :contentStyle="{
            'max-height': '300px',
            'overflow-y': 'auto'
          }"
          :span="4"
        >
          {{ result }}
        </a-descriptions-item>
      </a-descriptions>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from 'vue'
import api from './api/http'
import { message, type FormInstance, type PaginationProps } from 'ant-design-vue'
import type { ReqInfo, ReqPageParams } from '@/model'
import EditTable from '@/components/EditTable.vue'
import type { EditColumn } from '@/components/EditTable.vue'
const requestParamsForm = reactive<ReqPageParams>({
  keyword: '',
  pageNumber: 1,
  pageSize: 10,
  url: ''
})
const activeKey = ref('params')
const methodOptions = ref([
  {
    value: 'get',
    label: 'GET'
  },
  {
    value: 'post',
    label: 'POST'
  }
])
const tableData = ref<ReqInfo[]>([])
const columns = ref([
  {
    title: 'API名称',
    key: 'apiName',
    dataIndex: 'apiName'
  },
  {
    title: '请求地址',
    key: 'url',
    dataIndex: 'url'
  },
  {
    title: '请求方式',
    key: 'method',
    dataIndex: 'method',
    width: 100
  },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status',
    width: 100
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime'
  },
  {
    title: '备注',
    key: 'desc',
    dataIndex: 'desc'
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action'
  }
])
const loading = ref(false)
const paramsColumns = ref<EditColumn[]>([
  {
    title: 'Key',
    dataIndex: 'key',
    type: 'input'
  },
  {
    title: 'Value',
    dataIndex: 'value',
    type: 'input'
  },
  {
    title: '引用变量',
    dataIndex: 'var',
    type: 'input'
  }
])
const headersColumns = ref<EditColumn[]>([
  {
    title: 'Key',
    dataIndex: 'key',
    type: 'input'
  },
  {
    title: 'Value',
    dataIndex: 'value',
    type: 'input'
  }
])
const searchFormRef = ref<FormInstance>()
const onClear = () => {
  searchFormRef.value?.resetFields()
  getList()
}
const total = ref(0)
const onSearch = () => {
  requestParamsForm.pageNumber = 1
  requestParamsForm.pageSize = 10
  getList()
}
const onChangePagination = (pagination: PaginationProps) => {
  const { current, pageSize } = pagination
  requestParamsForm.pageNumber = current!
  requestParamsForm.pageSize = pageSize!
  getList()
}
const getList = () => {
  loading.value = true
  api.getList(requestParamsForm).then((res) => {
    const { code, data } = res
    if (code == 200) {
      tableData.value = data.data
      total.value = data.total
    }
    loading.value = false
  })
}
onMounted(() => {
  getList()
})
const modalOpen = ref(false)
const formData = ref<ReqInfo>({
  url: '',
  method: 'get',
  apiName: '',
  params: [{ key: '', value: '', var: '' }],
  body: [{ key: '', value: '', var: '' }],
  headers: [{ key: '', value: '' }],
  status: 1,
  desc: ''
})
const modalType = ref<'add' | 'edit'>('add')
const modalTitle = computed(() => {
  let titleObj = {
    add: '新增API',
    edit: '编辑API'
  }
  return titleObj[modalType.value]
})
const modalFormRef = ref<FormInstance>()
const onOpenAddrequest = () => {
  modalType.value = 'add'
  modalOpen.value = true
  formData.value = {
    url: '',
    method: 'get',
    apiName: '',
    params: [{ key: '', value: '', var: '' }],
    body: [{ key: '', value: '', var: '' }],
    headers: [{ key: '', value: '' }],
    status: 1,
    desc: ''
  }
}

const onOpenEditrequest = async (record: ReqInfo) => {
  const { code, data } = await api.getDetail(record.id!)
  if (code == 200) {
    formData.value = data
    console.log(formData.value)
    modalType.value = 'edit'
    modalOpen.value = true
  }
}
const onDeleterequest = async (record: ReqInfo) => {
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
  let http
  if (modalType.value == 'add') {
    http = api.add
  } else {
    http = api.update
  }
  http(formData.value).then((res) => {
    const { code } = res
    if (code == 200) {
      message.success(modalType.value == 'add' ? '新增成功' : '编辑成功')
      getList()
    }
    resetForm()
    modalOpen.value = false
  })
}
const modalResultOpen = ref(false)
const curApiInfo = ref<ReqInfo>({
  apiName: '',
  url: '',
  method: 'get',
  status: 1
})
const result = ref<any>()
const runLoading = ref(false)
const resultFlag = ref(false)
const onRun = (record: ReqInfo) => {
  modalResultOpen.value = true
  curApiInfo.value = record
  runLoading.value = true
  api.run(record.id!).then((res) => {
    const { code } = res.data
    runLoading.value = false
    result.value = res.data
    if (code == 200) {
      resultFlag.value = true
    } else {
      resultFlag.value = false
    }
  })
}
</script>
<style scoped lang="scss">
.request {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .search-area {
    margin-bottom: 20px;
  }
  .tools {
    margin-bottom: 5px;
  }
}
</style>
