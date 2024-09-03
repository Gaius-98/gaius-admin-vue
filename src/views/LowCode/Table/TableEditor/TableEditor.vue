<template>
  <a-page-header
    :title="title"
    :subTitle="desc"
    @back="goBack"
    :ghost="false"
    style="padding: 10px 24px"
  >
    <template #extra>
      <a-space>
        <a-button @click="onOpenDataSourceModal" class="data-source-btn"> 数据源配置 </a-button>
        <a-button @click="onOpenVariableModal" class="variable-btn"> 变量池配置 </a-button>
        <a-button @click="onPreview" v-show="tableCfg.id"> 预览 </a-button>
        <a-button @click="onOpenSaveModal" type="primary" class="save-btn"> 保存 </a-button>
      </a-space>
    </template>
    <template #tags>
      <a-tag color="#87d068" v-if="tableCfg.status">启用</a-tag>
      <a-tag color="#f50" v-else>停用</a-tag>
    </template>
  </a-page-header>
  <div class="table-design" v-loading.fullscreen="saveLoading">
    <div class="left-part">
      <table-design></table-design>
    </div>
    <div class="right-part">
      <table-cfg></table-cfg>
    </div>
  </div>
  <a-modal v-model:open="show" title="保存" @ok="onConfirm">
    <schema-form
      v-model:formData="tableCfg"
      :layout="schema.layout"
      :properties="schema.properties"
    ></schema-form>
  </a-modal>
  <a-modal
    v-model:open="dataSourceShow"
    title="数据源配置"
    @ok="onConfirmDataSource"
    @cancel="onCancelDataSource"
  >
    <schema-form
      :layout="dataSourceSchema.layout"
      :properties="dataSourceSchema.properties"
      v-model:formData="dataSourceFormData"
    ></schema-form>
    <a-divider>结果区</a-divider>
    <a-button
      type="primary"
      style="margin-bottom: 5px"
      @click="onGetResult"
      :loading="resultLoading"
      >运行</a-button
    >
    <code-editor :height="200" disabled v-model:value="result"></code-editor>
  </a-modal>
  <a-modal title="变量池配置" :open="variableShow" :footer="false" @cancel="variableShow = false">
    <edit-table :columns="variableColumns" v-model="tableCfg.variablePool"></edit-table>
  </a-modal>
  <a-tour v-model:current="current" :open="open" :steps="steps" @close="open = false" />
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, computed, provide } from 'vue'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { Schema } from '@/components/SchemaForm/ISchema'
import TableDesign from './components/TableDesign.vue'
import api from '../api/table'
import { useRouter } from 'vue-router'
import TableCfg from './components/TableCfg.vue'
import { useTableDesignStore } from '@/stores/tableDesign'
import { storeToRefs } from 'pinia'
import type { LCTableDataSource, Obj } from '@/model'
import CodeEditor from '@/components/CodeEditor.vue'
import { message } from 'ant-design-vue'
import EditTable from '@/components/EditTable.vue'
import type { EditColumn } from '@/components/EditTable.vue'
interface Props {
  id?: string
}
const props = defineProps<Props>()
const { id } = toRefs(props)
const tableDesignStore = useTableDesignStore()
const { tableCfg, tableData, saveLoading, columnFields } = storeToRefs(tableDesignStore)
const { onRefreshData, onSave } = tableDesignStore
// 引导
const open = ref<boolean>(false)

const current = ref(0)
const steps = [
  {
    title: '数据配置',
    description: '在开始配置列表前，请先配置数据源',
    target: () => document.querySelector('.data-source-btn')
  },
  {
    title: '变量配置',
    description: '配置数据源后,为保证数据源的正常获取数据,还需要配置对应的参数',
    target: () => document.querySelector('.variable-btn')
  },
  {
    title: '表格布局区',
    description: '在此区域可以编辑、预览您配置的表格整体样式',
    target: () => document.querySelector('.left-part')
  },
  {
    title: '列配置',
    description: '此处可以为表格增加列,列之间可以进行拖拽排序',
    target: () => document.querySelector('.add-column')
  },
  {
    title: '配置区',
    description: '可以对表格整体或者表格单独的列进行配置,满足您的需求',
    target: () => document.querySelector('.right-part')
  },
  {
    title: '按钮配置',
    description: '如果是一个可以交互的表格,点击此处增加表格的交互功能',
    target: () => document.querySelector('.add-btn')
  },
  {
    title: '最后',
    description: '保存您刚刚的配置',
    target: () => document.querySelector('.save-btn')
  }
]
const dataSourceFormData = ref<LCTableDataSource>({
  interfaceUrl: '',
  handlerFunc: 'return res',
  type: 'dynamic'
})
const result = ref('')
const onRefresh = () => {
  onRefreshData().then((res) => {
    const { data } = res
    if (data) {
      tableData.value = data
      try {
        columnFields.value = Object.keys(data[0]).map((e) => ({
          value: e,
          label: e
        }))
      } catch (error) {
        message.warning('接口数据解析失败')
      }
    }
  })
}
if (id.value) {
  api.getDetail(id.value).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      tableCfg.value = data
      onRefresh()
    }
  })
} else {
  tableCfg.value = {
    name: '',
    description: '',
    status: 1,
    columns: [],
    global: {
      bordered: false,
      actionCfg: [],
      filterCfg: {
        show: false,
        formId: ''
      }
    },
    dataSource: {
      type: 'dynamic',
      interfaceUrl: '',
      handlerFunc: 'return res'
    },
    variablePool: [
      {
        key: 'pageNumber',
        defaultValue: '1'
      },
      {
        key: 'pageSize',
        defaultValue: '10'
      }
    ]
  }
  dataSourceFormData.value = tableCfg.value.dataSource
  tableData.value = []
  columnFields.value = []
  open.value = true
}

const title = computed(() => {
  return tableCfg.value.name ? tableCfg.value.name : '新建表格'
})
const desc = computed(() => {
  return tableCfg.value.description ? tableCfg.value.description : ''
})
const show = ref(false)
const schema = ref<Schema>({
  layout: {
    labelAlign: 'left',
    layout: 'horizontal',
    labelCol: {
      span: 4
    }
  },
  properties: {
    name: {
      type: 'string',
      label: '表格名称'
    },
    description: {
      type: 'string',
      label: '备注'
    },
    status: {
      type: 'radio',
      label: '状态',
      component: {
        buttonStyle: 'solid',
        dataSource: [
          {
            label: '启用',
            value: 1
          },
          {
            label: '停用',
            value: 0
          }
        ]
      }
    }
  }
})
const onOpenSaveModal = () => {
  show.value = true
}
const router = useRouter()
const goBack = () => {
  router.go(-1)
}
const onConfirm = () => {
  onSave()
  show.value = false
  goBack()
}
const onPreview = () => {
  router.push({
    path: '/low-code/preview-table',
    query: {
      id: tableCfg.value.id
    }
  })
}
const dataSourceShow = ref(false)
const dataSourceSchema = ref<Schema>({
  layout: {
    labelAlign: 'left',
    layout: 'horizontal',
    labelCol: {
      span: 5
    }
  },
  properties: {
    interfaceUrl: {
      type: 'select',
      label: '接口地址',
      component: {
        asyncData: async () => {
          const { code, data, msg } = await api.getApiList()
          if (code == 200) {
            return data.map((e) => ({ value: e.id, label: e.apiName }))
          } else {
            return []
          }
        }
      }
    },
    handlerFunc: {
      type: 'string',
      label: '数据预处理',
      tooltip: '请保证输出的数据格式为:{data:any[],total:number}',
      component: {
        name: 'code-editor',
        height: 200,
        prepend: '(res)=>{',
        append: '}'
      }
    }
  }
})
const onOpenDataSourceModal = () => {
  dataSourceFormData.value = tableCfg.value.dataSource
  dataSourceShow.value = true
}
const onConfirmDataSource = () => {
  tableCfg.value.dataSource = dataSourceFormData.value
  onRefresh()
  onCancelDataSource()
}
const onCancelDataSource = () => {
  dataSourceShow.value = false
}
const resultLoading = ref(false)
const onRun = async () => {
  return await onRefreshData()
}

const onGetResult = async () => {
  resultLoading.value = true
  const data = await onRun()
  resultLoading.value = false
  result.value = JSON.stringify(data, null, 2)
}
const variableShow = ref(false)
const variableColumns = ref<EditColumn[]>([
  {
    title: 'Key',
    dataIndex: 'key',
    type: 'input'
  },
  {
    title: '默认值',
    dataIndex: 'defaultValue',
    type: 'input'
  }
])
const onOpenVariableModal = () => {
  variableShow.value = true
}
</script>
<style scoped lang="scss">
.table-design {
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 10px;
  height: calc(100% - 70px);
  margin-top: 10px;

  .left-part {
    display: flex;
    flex-direction: column;
    .left-part-header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 40px;
      background-color: #fff;
    }
    .left-part-content {
      flex: 1;
      background-color: #fff;
    }
  }
  .right-part {
    padding: 0 20px 0 20px;
    background-color: #fff;
  }
}
</style>
