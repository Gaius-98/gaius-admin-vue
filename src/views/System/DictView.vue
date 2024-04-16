<template>
  <div class="dict">
    <a-card class="search-area">
      <a-form ref="searchFormRef" :model="dictParamsForm" @finish="getList">
        <a-row :gutter="24">
          <a-col :span="4">
            <a-form-item label="名称" name="keyword">
              <a-input v-model:value="dictParamsForm.keyword"> </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item label="名称" name="keyword">
              <a-select
                v-model:value="dictParamsForm.dictType"
                :fieldNames="{
                  label: 'dictTypeDesc',
                  value: 'dictType'
                }"
                :options="dictTypes"
              >
              </a-select>
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
        <a-button type="primary" @click="onOpenAdddict">新增</a-button>
      </div>
      <a-table
        :loading="loading"
        :columns="columns"
        :data-source="tableData"
        :pagination="{ current: dictParamsForm.pageNumber, total: total }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key == 'action'">
            <a-button type="link" @click="onOpenEditdict(record)">编辑</a-button>
            <a-divider type="vertical" />
            <a-popconfirm
              title="确定要删除吗?"
              ok-text="确定"
              cancel-text="取消"
              @confirm="onDeletedict(record)"
            >
              <a-button type="link" danger>删除</a-button>
            </a-popconfirm>
          </template>
        </template>
      </a-table>
    </a-card>
    <a-modal v-model:open="modalOpen" @ok="onConfirm" :title="modalTitle" @cancel="resetForm">
      <a-form :model="formData" :label-col="{ span: 8 }" ref="modalFormRef">
        <a-form-item label="字典类型">
          <a-select
            v-model:value="formData.dictType"
            :fieldNames="{
              label: 'dictType',
              value: 'dictType'
            }"
            :options="dictTypes"
            @change="onChangeDictType"
          >
            <template #dropdownRender="{ menuNode: menu }">
              <v-nodes :vnodes="menu" />
              <a-divider style="margin: 4px 0" />
              <a-space style="padding: 4px 8px">
                <a-input ref="inputRef" v-model:value="dictType" placeholder="请输入字典类型" />
                <a-button type="text" @click="addDictType">
                  <template #icon>
                    <plus-outlined />
                  </template>
                  增加类型
                </a-button>
              </a-space>
            </template>
          </a-select>
        </a-form-item>
        <a-form-item label="字典类型描述">
          <a-input v-model:value="formData.dictTypeDesc"></a-input>
        </a-form-item>
        <a-form-item label="字典描述">
          <a-input v-model:value="formData.label"></a-input>
        </a-form-item>
        <a-form-item label="字典值">
          <a-input v-model:value="formData.value"></a-input>
        </a-form-item>
        <a-form-item label="排序号">
          <a-input-number v-model:value="formData.sortNum"></a-input-number>
        </a-form-item>
        <a-form-item label="描述">
          <a-input type="textarea" v-model:value="formData.desc"></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, computed, defineComponent } from 'vue'
import api from './api/dict'
import { message, type FormInstance } from 'ant-design-vue'
import type { SystemDictItem, SystemDictTypeItem } from '@/model'
import type { DictPageParams } from './api/dict'
import { PlusOutlined } from '@ant-design/icons-vue'
const VNodes = defineComponent({
  props: {
    vnodes: {
      type: Object,
      required: true
    }
  },
  render() {
    return this.vnodes
  }
})
const dictParamsForm = reactive<DictPageParams>({
  keyword: '',
  dictType: [],
  pageNumber: 1,
  pageSize: 10
})
const tableData = ref<SystemDictItem[]>([])
const columns = ref([
  {
    title: '字典描述',
    key: 'label',
    dataIndex: 'label'
  },
  {
    title: '字典值',
    key: 'value',
    dataIndex: 'value'
  },
  {
    title: '归属字典',
    key: 'dictTypeDesc',
    dataIndex: 'dictTypeDesc'
  },
  {
    title: '归属字典类型',
    key: 'dictType',
    dataIndex: 'dictType'
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
  api.getList(dictParamsForm).then((res) => {
    const { code, data } = res
    if (code == 200) {
      tableData.value = data.data
      total.value = data.total
    }
    loading.value = false
  })
}
const dictTypes = ref<SystemDictTypeItem[]>([])
const getDictTypes = async () => {
  const { code, data, msg } = await api.getDictTypeList()
  if (code == 200) {
    dictTypes.value = data
  }
}
onMounted(() => {
  getList()
  getDictTypes()
})
const modalOpen = ref(false)
const formData = ref<SystemDictItem>({})
const modalType = ref<'add' | 'edit'>('add')
const modalTitle = computed(() => {
  let titleObj = {
    add: '新增字典',
    edit: '编辑字典'
  }
  return titleObj[modalType.value]
})
const modalFormRef = ref<FormInstance>()
const onOpenAdddict = () => {
  modalType.value = 'add'
  modalOpen.value = true
  formData.value = {
    label: '',
    value: '',
    dictType: '',
    dictTypeDesc: '',
    sortNum: 0
  }
}

const onOpenEditdict = async (record: SystemDictItem) => {
  const { code, data } = await api.getDetail(record.id!)
  if (code == 200) {
    formData.value = data
    modalType.value = 'edit'
    modalOpen.value = true
  }
}
const onDeletedict = async (record: SystemDictItem) => {
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

const dictType = ref('')
const addDictType = (e: Event) => {
  e.preventDefault()
  dictTypes.value.push({ dictType: dictType.value, dictTypeDesc: dictType.value })
}
const onChangeDictType = () => {
  formData.value.dictTypeDesc = dictTypes.value.find(
    (e) => e.dictType == formData.value.dictType
  )!.dictTypeDesc
}
</script>
<style scoped lang="scss">
.dict {
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
