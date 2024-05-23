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
        <a-button @click="onOpenPreviewModal"> 预览 </a-button>
        <a-button @click="onOpenSaveModal" type="primary"> 保存 </a-button>
      </a-space>
    </template>
    <template #tags>
      <a-tag color="#87d068" v-if="tableCfg.status">启用</a-tag>
      <a-tag color="#f50" v-else>停用</a-tag>
    </template>
  </a-page-header>
  <div class="table-design">
    <div class="left-part">
      <table-design></table-design>
    </div>
    <div class="right-part">
      <table-cfg></table-cfg>
    </div>
  </div>
  <a-modal v-model:open="show" title="保存" @ok="onConfirm">
    <schema-form :layout="schema.layout" :properties="schema.properties"></schema-form>
  </a-modal>
  <a-modal v-model:open="previewShow" title="预览"> </a-modal>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, computed } from 'vue'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { Schema } from '@/components/SchemaForm/ISchema'
import TableDesign from './components/TableDesign.vue'
import api from '../api/table'
import { useRouter } from 'vue-router'
import TableCfg from './components/TableCfg.vue'
import { useTableDesignStore } from '@/stores/tableDesign'
import { storeToRefs } from 'pinia'
interface Props {
  id?: string
}
const props = defineProps<Props>()
const { id } = toRefs(props)
const tableDesignStore = useTableDesignStore()
const { tableCfg } = storeToRefs(tableDesignStore)
if (id.value) {
  api.getDetail(id.value).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      tableCfg.value = data
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
      pagination: {
        show: false,
        current: 1,
        pageSize: 10,
        pageSizeOptions: [],
        total: 10
      },
      actionCfg: {},
      filterCfg: {
        show: false,
        formId: ''
      }
    },
    dataSource: {
      type: 'dynamic',
      interfaceUrl: '',
      handlerFunc: '',
      preDataFunc: ''
    },
    img: '',
    variablePool: []
  }
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
  show.value = false
}
const previewShow = ref(false)
const formData = ref({})
const onOpenPreviewModal = () => {
  previewShow.value = true
}
</script>
<style scoped lang="scss">
.table-design {
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 10px;
  height: calc(100% - 60px);
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
