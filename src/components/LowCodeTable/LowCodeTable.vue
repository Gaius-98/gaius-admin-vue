<template>
  <div class="low-code-table">
    <a-card class="filter-panel" v-if="showFilterForm">
      <low-code-form-id
        :formData="filterData"
        :id="tableCfg.global!.filterCfg!.formId"
        class="filter-form"
        :class="expand ? 'expand' : ''"
      ></low-code-form-id>
      <a-row>
        <a-col :span="24" style="text-align: right">
          <a-button type="primary" html-type="submit" @click="getList">搜索</a-button>
          <a-button style="margin: 0 8px" @click="onClear">重置</a-button>
          <a-button
            type="link"
            :icon="h(expand ? UpOutlined : DownOutlined)"
            @click="expand = !expand"
          >
            <span style="font-size: 12px">{{ expand ? '收起' : '展开' }}</span>
          </a-button>
        </a-col>
      </a-row>
    </a-card>
    <a-card class="table-container">
      <div class="tools">
        <a-space>
          <a-button v-for="btn in headerBtns" :key="btn.id" @click="onClickBtn(btn)">
            {{ btn.name }}
          </a-button>
        </a-space>
        <a-button
          :icon="h(SyncOutlined)"
          type="link"
          title="刷新数据"
          style="float: right"
          @click="getList"
        ></a-button>
      </div>
      <a-table
        :columns="tableColumn"
        :data-source="tableData"
        :scroll="{ y: showFilterForm ? 470 : 670 }"
        :loading="loading"
        :pagination="false"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.type == 'image'">
            <a-image :src="`${record[column.dataIndex]}`" height="130px" width="100%" />
          </template>
          <template v-if="column.type == 'link'">
            <a :href="`${record[column.dataIndex]}`" target="_blank">
              {{ record[column.dataIndex] }}
            </a>
          </template>
          <template v-if="column.key == '_action'">
            <a-button
              type="link"
              @click="onClickBtn(btn, record)"
              v-for="btn in rowBtns"
              :key="btn.id"
            >
              {{ btn.name }}
            </a-button>
          </template>
        </template>
      </a-table>
      <a-pagination
        style="display: flex; justify-content: flex-end; margin-top: 20px"
        v-model:current="variableObj.pageNumber"
        :pageSize="variableObj.pageSize || 10"
        :total="total"
        show-less-items
      />
    </a-card>
  </div>
  <a-modal v-model:open="modalShow" @ok="onConfirm" @cancel="onCancel">
    <low-code-form-id :formData="curData" :id="curModalInfo.id"> </low-code-form-id>
  </a-modal>
</template>

<script lang="ts" setup>
import { SyncOutlined, UpOutlined, DownOutlined } from '@ant-design/icons-vue'
import LowCodeFormId from '@/components/LowCodeForm/LowCodeFormId.vue'
import { reactive, toRefs, ref, watch, computed, h } from 'vue'
import tableApi from '@/views/LowCode/Table/api/table'
import type { Obj, LCTableCfg, LCTableVariableCfg, LCTableInteractionCfg } from '@/model'
import { message } from 'ant-design-vue'
import core from './core'

interface Props {
  id: string
}
const props = defineProps<Props>()
const { id } = toRefs(props)
const tableCfg = ref<Partial<LCTableCfg>>({})
const tableData = ref<Obj<any>[]>([])
const filterData = ref({})
const loading = ref(false)
const onClear = () => {
  filterData.value = {}
  getList()
}
const expand = ref(false)
const showFilterForm = computed(() => {
  return tableCfg.value?.global?.filterCfg?.show && tableCfg.value?.global?.filterCfg?.formId
})
const tableColumn = computed(() => {
  if (rowBtns.value.length > 0) {
    return [
      ...tableCfg.value.columns!,
      {
        title: '操作',
        dataIndex: '_action',
        key: '_action',
        width: 200,
        fixed: 'right'
      }
    ]
  }
  return tableCfg.value.columns
})
const variableObj = ref<Obj<any>>({})
const headerBtns = ref<Partial<LCTableInteractionCfg>[]>([])
const rowBtns = ref<Partial<LCTableInteractionCfg>[]>([])
watch(
  () => id.value,
  () => {
    tableApi.getDetail(id.value).then((res) => {
      const { code, data, msg } = res
      if (code == 200) {
        tableCfg.value = data
        if (tableCfg.value.global!.actionCfg && tableCfg.value.global!.actionCfg?.length > 0) {
          let actionCfg = tableCfg.value.global!.actionCfg!
          actionCfg.map((e) => {
            if (e.position == 'header') {
              headerBtns.value.push(e)
            } else {
              rowBtns.value.push(e)
            }
          })
        }

        variableObj.value = core.transformParamsData(
          tableCfg.value.variablePool as LCTableVariableCfg
        )
        getList()
      }
    })
  },
  {
    immediate: true
  }
)
watch(
  () => variableObj.value,
  () => {
    getList()
  },
  {
    deep: true
  }
)

const total = ref(0)
const getList = async () => {
  loading.value = true
  try {
    const { data, total: resTotal } = await core.getProxyData(
      tableCfg.value.dataSource!,
      variableObj.value,
      filterData.value
    )
    tableData.value = data
    if (resTotal) {
      total.value = resTotal
    }
  } catch (error) {
    message.error('获取数据失败:' + error)
  }
  loading.value = false
}
const modalShow = ref(false)
const curData = ref<any>({})
const curModalInfo = ref<any>({})
const onClickBtn = async (btnInfo: Partial<LCTableInteractionCfg>, extraData?: any) => {
  const { formId, event, interfaceUrl, AfterHandleFunc, request, linkUrl, actionCfg } =
    btnInfo as LCTableInteractionCfg
  if (request) {
    const data = await core.getProxyData(
      {
        type: 'dynamic',
        interfaceUrl,
        handlerFunc: AfterHandleFunc
      },
      {},
      { ...extraData }
    )
    curData.value = data
  } else {
    curData.value = extraData || {}
  }
  switch (event) {
    case 'modal':
      curModalInfo.value = {
        id: formId,
        modalUrl: actionCfg?.interfaceUrl
      }
      modalShow.value = true
      break
    case 'link':
      window.open(linkUrl, '_blank')
      break
  }
}
const onCancel = () => {
  curData.value = {}
  modalShow.value = false
}
const onConfirm = () => {
  core
    .getProxyData(
      {
        type: 'dynamic',
        interfaceUrl: curModalInfo.value.modalUrl,
        handlerFunc: ''
      },
      {},
      { ...curData.value }
    )
    .then((res) => {
      message.info(res?.data?.msg)
      onCancel()
    })
    .catch((error) => {
      message.error(error)
    })
}
</script>
<style scoped lang="scss">
.low-code-table {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  .filter-panel {
    margin-bottom: 20px;
    .filter-form {
      max-height: 100px;
      overflow-y: hidden;
      &.expand {
        overflow-y: auto;
        max-height: 100%;
      }
    }
  }
  .table-container {
    .tools {
      margin-bottom: 10px;
    }
  }
}
</style>
