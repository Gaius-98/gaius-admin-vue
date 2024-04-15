<template>
  <div class="menu">
    <a-card class="search-area">
      <a-form ref="searchFormRef" :model="menuParamsForm" @finish="getList">
        <a-row :gutter="24">
          <a-col :span="4">
            <a-form-item label="名称" name="keyword">
              <a-input v-model:value="menuParamsForm.keyword"> </a-input>
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
        <a-button type="primary" @click="onOpenAddMenu">新增</a-button>
      </div>
      <a-table :loading="loading" :columns="columns" :data-source="tableData">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key == 'action'">
            <a-button type="link" @click="onOpenEditMenu(record)">编辑</a-button>
            <a-divider type="vertical" />
            <a-popconfirm
              title="确定要删除吗?"
              ok-text="确定"
              cancel-text="取消"
              @confirm="onDeleteMenu(record)"
            >
              <a-button type="link" danger>删除</a-button>
            </a-popconfirm>
          </template>
          <template v-if="column.key == 'menuType'">
            <a-tag color="#2db7f5" v-if="record.menuType == 'app'">菜单</a-tag>
            <a-tag color="#87d068" v-if="record.menuType == 'directory'">目录</a-tag>
          </template>
        </template>
      </a-table>
    </a-card>
    <a-modal v-model:open="modalOpen" @ok="onConfirm" :title="modalTitle">
      <a-form :model="formData" :label-col="{ span: 8 }" ref="modalFormRef">
        <a-form-item label="名称" name="label">
          <a-input v-model:value="formData.label"></a-input>
        </a-form-item>
        <a-form-item label="类型" name="menuType">
          <a-radio-group v-model:value="formData.menuType" button-style="solid">
            <a-radio-button value="directory"> 目录 </a-radio-button>
            <a-radio-button value="app"> 菜单 </a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="地址" name="address" v-if="formData.menuType == 'app'">
          <a-input v-model:value="formData.address"> </a-input>
        </a-form-item>
        <a-form-item label="上级节点" name="pid">
          <a-tree-select
            v-model:value="formData.pid"
            tree-node-filter-prop="label"
            show-search
            allow-clear
            :treeData="dictList"
            :field-names="{
              children: 'children',
              label: 'label',
              value: 'id'
            }"
            @change="onChangeTreeSelect"
          >
          </a-tree-select>
        </a-form-item>
        <a-form-item label="排序号" name="sortNum">
          <a-input-number v-model:value="formData.sortNum"></a-input-number>
        </a-form-item>
        <a-form-item label="是否外链" name="openType">
          <a-radio-group v-model:value="formData.openType" button-style="solid">
            <a-radio-button value="_blank"> 是 </a-radio-button>
            <a-radio-button value="_self"> 否 </a-radio-button>
          </a-radio-group>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from 'vue'
import api from './api/menu'
import type { ResMenuItem } from '@/model'
import { message, type FormInstance } from 'ant-design-vue'
import type { MenuDict } from './api/menu'
const menuParamsForm = reactive({
  keyword: ''
})
const tableData = ref<ResMenuItem[]>([])
const columns = ref([
  {
    title: '名称',
    key: 'label',
    dataIndex: 'label'
  },
  {
    title: '类型',
    key: 'menuType',
    dataIndex: 'menuType'
  },
  {
    title: '地址',
    key: 'address',
    dataIndex: 'address'
  },
  {
    title: '排序号',
    key: 'sortNum',
    dataIndex: 'sortNum'
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
const getList = () => {
  loading.value = true
  api.getList(menuParamsForm.keyword).then((res) => {
    const { code, data } = res
    if (code == 200) {
      tableData.value = data
    }
    loading.value = false
  })
}
onMounted(() => {
  getList()
})
const modalOpen = ref(false)
const formData = ref<ResMenuItem>({
  label: '',
  menuType: 'app',
  sortNum: 0,
  address: '',
  type: 'front',
  openType: '_self',
  pid: ''
})
const modalType = ref<'add' | 'edit'>('add')
const modalTitle = computed(() => {
  let titleObj = {
    add: '新增菜单',
    edit: '编辑菜单'
  }
  return titleObj[modalType.value]
})
const modalFormRef = ref<FormInstance>()
const onOpenAddMenu = () => {
  formData.value = {
    label: '',
    menuType: 'app',
    sortNum: 0,
    address: '',
    type: 'front',
    openType: '_self',
    pid: ''
  }
  modalType.value = 'add'
  modalOpen.value = true
  getDict()
}
const getDetailById = async (id: string) => {
  return await api.getDetail(id)
}
const onOpenEditMenu = async (record: ResMenuItem) => {
  const { code, data } = await getDetailById(record.id!)
  if (code == 200) {
    formData.value = data
    modalType.value = 'edit'
    modalOpen.value = true
    getDict()
  }
}
const onDeleteMenu = async (record: ResMenuItem) => {
  const { code, msg } = await api.remove(record.id!)
  if (code == 200) {
    message.success(msg)
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
const dictList = ref<MenuDict[]>([])
const getDict = () => {
  api.dict().then((res) => {
    const { code, data } = res
    if (code == 200) {
      dictList.value = data
    }
  })
}
const onChangeTreeSelect = (val: string) => {
  let value = val ? val : ''
  formData.value.pid = value
}
</script>
<style scoped lang="scss">
.menu {
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
