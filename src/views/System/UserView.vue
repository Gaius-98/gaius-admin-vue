<template>
  <div class="user">
    <a-card class="search-area">
      <a-form ref="searchFormRef" :model="userParamsForm" @finish="getList">
        <a-row :gutter="24">
          <a-col :span="4">
            <a-form-item label="用户名" name="keyword">
              <a-input v-model:value="userParamsForm.keyword"> </a-input>
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
        <a-button type="primary" @click="onOpenAdduser">新增</a-button>
      </div>
      <a-table
        :loading="loading"
        :columns="columns"
        :data-source="tableData"
        :pagination="{ current: userParamsForm.pageNumber, total: total }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key == 'role'">
            <a-tag>{{ record.role }}</a-tag>
          </template>
          <template v-if="column.key == 'action'">
            <a-button type="link" @click="onOpenEdituser(record)">编辑</a-button>
            <a-divider type="vertical" />
            <a-popconfirm
              title="确定要删除吗?"
              ok-text="确定"
              cancel-text="取消"
              @confirm="onDeleteuser(record)"
            >
              <a-button type="link" danger>删除</a-button>
            </a-popconfirm>
          </template>
          <template v-if="column.key == 'userType'">
            <a-tag color="#2db7f5" v-if="record.userType == 'app'">菜单</a-tag>
            <a-tag color="#87d068" v-if="record.userType == 'directory'">目录</a-tag>
          </template>
        </template>
      </a-table>
    </a-card>
    <a-modal v-model:open="modalOpen" @ok="onConfirm" :title="modalTitle" @cancel="resetForm">
      <a-form :model="formData" :label-col="{ span: 8 }" ref="modalFormRef">
        <a-form-item label="用户名">
          <a-input v-model:value="formData.username"></a-input>
        </a-form-item>
        <a-form-item label="密码">
          <a-input-password v-model:value="formData.password"></a-input-password>
        </a-form-item>
        <a-form-item label="角色">
          <a-select
            v-model:value="formData.roleId"
            :fieldNames="{
              label: 'roleName',
              value: 'roleId'
            }"
            :options="roleDictList"
          ></a-select>
        </a-form-item>
        <a-form-item label="名称">
          <a-input v-model:value="formData.name"></a-input>
        </a-form-item>
        <a-form-item label="邮箱">
          <a-input v-model:value="formData.email"></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from 'vue'
import api from './api/user'
import { message, type FormInstance } from 'ant-design-vue'
import type { AuthInfo, PageParams, CreateAuthInfo, RoleDictItem } from '@/model'
const userParamsForm = reactive<PageParams>({
  keyword: '',
  pageNumber: 1,
  pageSize: 10
})
const tableData = ref<AuthInfo[]>([])
const columns = ref([
  {
    title: '用户名',
    key: 'username',
    dataIndex: 'username'
  },
  {
    title: '名称',
    key: 'name',
    dataIndex: 'name'
  },
  {
    title: '邮箱',
    key: 'email',
    dataIndex: 'email'
  },
  {
    title: '角色',
    key: 'roleId',
    dataIndex: 'roleId'
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime'
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action'
  }
])
const loading = ref(false)
const searchFormRef = ref<FormInstance>()
const onClear = () => {
  searchFormRef.value?.resetFields()
  getList()
}
const total = ref(0)
const getList = () => {
  loading.value = true
  api.getList(userParamsForm).then((res) => {
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
const formData = ref<CreateAuthInfo>({
  username: '',
  name: '',
  password: '',
  email: '',
  avatar: '',
  roleId: ''
})
const modalType = ref<'add' | 'edit'>('add')
const modalTitle = computed(() => {
  let titleObj = {
    add: '新增用户',
    edit: '编辑用户'
  }
  return titleObj[modalType.value]
})
const modalFormRef = ref<FormInstance>()
const onOpenAdduser = () => {
  modalType.value = 'add'
  modalOpen.value = true
  formData.value = {
    username: '',
    name: '',
    password: '',
    email: '',
    avatar: '',
    roleId: ''
  }
}

const onOpenEdituser = async (record: AuthInfo) => {
  const { code, data } = await api.getDetail(record.username!)
  if (code == 200) {
    formData.value = data
    modalType.value = 'edit'
    modalOpen.value = true
  }
}
const onDeleteuser = async (record: AuthInfo) => {
  const { code, msg, data } = await api.remove(record.username!)
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
const roleDictList = ref<RoleDictItem[]>([])
const getRoleDict = () => {
  api.getRoleDict().then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      roleDictList.value = data
    }
  })
}
onMounted(() => {
  getRoleDict()
})
</script>
<style scoped lang="scss">
.user {
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
