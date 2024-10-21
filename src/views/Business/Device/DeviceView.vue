<template>
  <div class="device">
    <a-card class="search-area">
      <a-form ref="searchFormRef" :model="deviceParams" layout="inline" @finish="onSearch">
        <a-form-item label="设备编号" prop="deviceId">
          <a-input
            v-model:value="deviceParams.deviceId"
            :options="deviceTypeList"
            show-search
            allowClear
            optionFilterProp="label"
            style="width: 200px"
          ></a-input>
        </a-form-item>
        <a-form-item label="所属类型" prop="belongType">
          <a-select
            v-model:value="deviceParams.belongType"
            :options="deviceTypeList"
            show-search
            allowClear
            optionFilterProp="label"
            style="width: 200px"
          ></a-select>
        </a-form-item>
        <a-form-item label="所属机构" prop="belongId" v-if="deviceParams.belongType == '1'">
          <a-tree-select
            v-model:value="deviceParams.belongId"
            tree-node-filter-prop="label"
            show-search
            allow-clear
            :treeData="orgTree"
            :field-names="{
              children: 'children',
              label: 'name',
              value: 'id'
            }"
            style="width: 200px"
          >
          </a-tree-select>
        </a-form-item>
        <a-form-item label="所属人" prop="belongId" v-if="deviceParams.belongType == '0'">
          <a-select
            v-model:value="deviceParams.belongId"
            :options="userList"
            show-search
            allowClear
            optionFilterProp="label"
            style="width: 200px"
          ></a-select>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">搜索</a-button>
          <a-button style="margin: 0 8px" @click="onClear"> 重置 </a-button>
        </a-form-item>
      </a-form>
    </a-card>
    <a-card>
      <div class="tools">
        <a-button type="primary" @click="onOpenAdddevice" v-has-perm="'business:device:add'"
          >新增</a-button
        >
      </div>
      <a-table
        :loading="loading"
        :columns="columns"
        :data-source="tableData"
        :scroll="{ y: 560 }"
        @change="onChangePagination"
        :pagination="{
          current: deviceParams.pageNumber,
          total: total,
          showSizeChanger: true,
          pageSize: deviceParams.pageSize
        }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key == 'isExpired'">
            <a-tag color="#87d068" v-if="record.isExpired == '0'">未过保</a-tag>
            <a-tag color="#f50" v-else>已过保</a-tag>
          </template>
          <template v-if="column.key == 'belongId'">
            {{ record.belongType == '1' ? record?.orgInfo?.name : record?.userInfo?.username }}
          </template>

          <template v-if="column.key == 'belongType'">
            <a-tag color="#87d068" v-if="record.belongType == '1'">机构</a-tag>
            <a-tag color="#2db7f5" v-else>个人</a-tag>
          </template>
          <template v-if="column.key == 'action'">
            <a-button
              type="link"
              @click="onOpenEditdevice(record)"
              v-has-perm="'business:device:update'"
              >编辑</a-button
            >
            <a-divider type="vertical" />
            <a-popconfirm
              title="确定要删除吗?"
              ok-text="确定"
              cancel-text="取消"
              @confirm="onDeletedevice(record)"
            >
              <a-button type="link" danger v-has-perm="'business:device:remove'">删除</a-button>
            </a-popconfirm>
          </template>
        </template>
      </a-table>
    </a-card>
    <a-modal v-model:open="modalOpen" @ok="onConfirm" :title="modalTitle" @cancel="resetForm">
      <a-form :model="formData" :label-col="{ span: 8 }" ref="modalFormRef">
        <a-form-item label="设备编号" required prop="deviceId">
          <a-input v-model:value="formData.deviceId"></a-input>
        </a-form-item>
        <a-form-item label="设备入网编号" required prop="netNumber">
          <a-input v-model:value="formData.netNumber"></a-input>
        </a-form-item>
        <a-form-item label="设备所属类型" required prop="belongType">
          <a-select
            v-model:value="formData.belongType"
            :options="deviceTypeList"
            @change="formData.belongId = ''"
          ></a-select>
        </a-form-item>
        <a-form-item label="所属人" required prop="belongId" v-if="formData.belongType == '0'">
          <a-select
            v-model:value="formData.belongId"
            :options="userList"
            show-search
            allowClear
            optionFilterProp="label"
          ></a-select>
        </a-form-item>
        <a-form-item label="所属机构" required prop="belongId" v-if="formData.belongType == '1'">
          <a-tree-select
            v-model:value="formData.belongId"
            tree-node-filter-prop="label"
            show-search
            allow-clear
            :treeData="orgTree"
            :field-names="{
              children: 'children',
              label: 'name',
              value: 'id'
            }"
            style="width: 200px"
          >
          </a-tree-select>
        </a-form-item>
        <a-form-item label="保修截至日期" prop="expireDate" required>
          <a-date-picker v-model:value="formData.expireDate" valueFormat="YYYY-MM-DD" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from 'vue'
import api from './api'
import { message, type FormInstance, type PaginationProps } from 'ant-design-vue'
import type { AuthInfo, PageParams, CreateAuthInfo, RoleDictItem, SystemOrgTree } from '@/model'
import ImagePicker from '@/components/ImagePicker.vue'
import type { DeviceInfo } from '@/model'
import common, { type DictItem } from '@/api/common'
const deviceParams = reactive<PageParams>({
  keyword: '',
  pageNumber: 1,
  pageSize: 10,
  type: ''
})
const tableData = ref<DeviceInfo[]>([])
const columns = ref([
  {
    title: '设备编号',
    key: 'deviceId',
    dataIndex: 'deviceId',
    width: '250px'
  },
  {
    title: '入网编号',
    key: 'netNumber',
    dataIndex: 'netNumber',
    width: '250px'
  },
  {
    title: '所属类型',
    key: 'belongType',
    dataIndex: 'belongType',
    width: '100px'
  },
  {
    title: '所属人/机构',
    key: 'belongId',
    dataIndex: 'belongId',
    width: '200px'
  },
  {
    title: '保修状态',
    key: 'isExpired',
    dataIndex: 'isExpired',
    width: '100px'
  },
  {
    title: '保修截至日期',
    key: 'expireDate',
    dataIndex: 'expireDate'
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
  deviceParams.pageNumber = 1
  deviceParams.pageSize = 10
  getList()
}
const onChangePagination = (pagination: PaginationProps) => {
  const { current, pageSize } = pagination
  deviceParams.pageNumber = current!
  deviceParams.pageSize = pageSize!
  getList()
}
const getList = () => {
  loading.value = true
  api.getList(deviceParams).then((res) => {
    const { code, data } = res
    if (code == 200) {
      tableData.value = data.data
      total.value = data.total
    }
    loading.value = false
  })
}
const deviceTypeList = ref<DictItem[]>([])
const deviceTypeMap = ref<Record<string, string>>({})
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
  common.getDict(['deviceBelongType']).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      deviceTypeList.value = data['deviceBelongType']
      deviceTypeMap.value = deviceTypeList.value.reduce(
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
const formData = ref<DeviceInfo>({
  deviceId: '',
  netNumber: '',
  belongId: '',
  belongType: '',
  expireDate: '',
  isExpired: ''
})
const modalType = ref<'add' | 'edit'>('add')
const modalTitle = computed(() => {
  let titleObj = {
    add: '新增设备',
    edit: '编辑设备'
  }
  return titleObj[modalType.value]
})
const modalFormRef = ref<FormInstance>()
const onOpenAdddevice = () => {
  modalType.value = 'add'
  modalOpen.value = true
  formData.value = {
    deviceId: '',
    netNumber: '',
    belongId: '',
    belongType: '',
    expireDate: '',
    isExpired: ''
  }
}

const onOpenEditdevice = async (record: DeviceInfo) => {
  const { code, data } = await api.getDetail(record.deviceId!)
  if (code == 200) {
    formData.value = data
    modalType.value = 'edit'
    modalOpen.value = true
  }
}
const onDeletedevice = async (record: DeviceInfo) => {
  const { code, msg, data } = await api.remove(record.deviceId!)
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
    http(formData.value).then((res) => {
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

onMounted(() => {})
</script>
<style scoped lang="scss">
.device {
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
