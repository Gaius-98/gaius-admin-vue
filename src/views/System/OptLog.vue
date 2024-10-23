<template>
  <div class="optLog">
    <a-card class="search-area">
      <a-form ref="searchFormRef" :model="optLogParamsForm" layout="inline" @finish="onSearch">
        <a-form-item label="用户名" name="keyword">
          <a-input v-model:value="optLogParamsForm.keyword"> </a-input>
        </a-form-item>
        <a-form-item label="操作日期">
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
        :scroll="{ y: 600 }"
        @change="onChangePagination"
        :pagination="{
          current: optLogParamsForm.pageNumber,
          total: total,
          showSizeChanger: true,
          pageSize: optLogParamsForm.pageSize
        }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key == 'resStatus'">
            <a-tag color="#87d068" v-if="record.resStatus == '1'">成功</a-tag>
            <a-tag color="#f50" v-else>失败</a-tag>
          </template>
          <template v-if="column.key == 'action'">
            <a-button type="link">查看</a-button>
          </template>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from 'vue'
import api from './api/optLog'
import { message, type FormInstance, type PaginationProps } from 'ant-design-vue'
import type { PageParams, SystemLoginLog } from '@/model'
const optLogParamsForm = reactive<PageParams>({
  keyword: '',
  startTime: '',
  endTime: '',
  pageNumber: 1,
  pageSize: 20
})
const date = ref('')
const tableData = ref<SystemLoginLog[]>([])
const columns = ref([
  {
    title: '操作用户',
    key: 'username',
    dataIndex: 'username'
  },
  {
    title: 'ip地址',
    key: 'ip',
    dataIndex: 'ip'
  },
  {
    title: '地址',
    key: 'location',
    dataIndex: 'location'
  },
  {
    title: '操作模块',
    key: 'optModule',
    dataIndex: 'optModule'
  },
  {
    title: '操作类型',
    key: 'optType',
    dataIndex: 'optType'
  },
  {
    title: '操作结果',
    key: 'resStatus',
    dataIndex: 'resStatus'
  },
  {
    title: '操作耗时',
    key: 'resTime',
    dataIndex: 'resTime'
  },
  {
    title: '操作时间',
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

  getList()
}
const total = ref(0)
const onSearch = () => {
  optLogParamsForm.pageNumber = 1
  optLogParamsForm.pageSize = 20
  getList()
}
const changeTime = () => {
  if (date.value) {
    optLogParamsForm.startTime = date.value[0]
    optLogParamsForm.endTime = date.value[1]
  } else {
    optLogParamsForm.startTime = ''
    optLogParamsForm.endTime = ''
  }
}
const onChangePagination = (pagination: PaginationProps) => {
  const { current, pageSize } = pagination
  optLogParamsForm.pageNumber = current!
  optLogParamsForm.pageSize = pageSize!
  getList()
}
const getList = () => {
  loading.value = true
  api.getList(optLogParamsForm).then((res) => {
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
</script>
<style scoped lang="scss">
.optLog {
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
