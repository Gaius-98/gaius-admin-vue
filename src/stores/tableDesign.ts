import { defineStore } from 'pinia'
import type { LCTableCfg, LCTableColumnCfg, Obj } from '@/model'
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'
import httpApi from '@/views/System/api/http'
import tableApi from '@/views/LowCode/Table/api/table'
import { message } from 'ant-design-vue'
export const useTableDesignStore = defineStore('tableDesign', () => {
  const tableData = ref<Obj<any>[]>([])
  const tableCfg = ref<LCTableCfg>({
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
      handlerFunc: ''
    },
    variablePool: []
  })
  const columnFields = ref<{ label: string; value: string }[]>([])
  const currentColumn = ref<Partial<LCTableColumnCfg>>({})
  const onAddColumn = () => {
    const randomStr = new Date().getTime().toString().slice(-4)
    tableCfg.value.columns.push({
      id: uuid(),
      dataIndex: 'field' + randomStr,
      title: '列' + randomStr,
      width:200
    })
  }
  const onSelectColumn = (id: string, data: Partial<LCTableColumnCfg>[]) => {
    const idx = data.findIndex((item) => item.id === id)
    if (idx != -1) {
      currentColumn.value = data[idx]
    }
  }
  const onRemoveColumn = (id: string, data: Partial<LCTableColumnCfg>[]) => {
    const idx = data.findIndex((item) => item.id === id)
    if (idx != -1) {
      data.splice(idx, 1)
    }
  }

  const transformParamsData = () => {
    const obj: Obj<any> = {}
    tableCfg.value.variablePool.reduce((p: Obj<any>, c) => {
      p[c!.key] = c!.defaultValue
      return p
    }, obj)
    return obj
  }
  const onRefreshData = async (handlerFunc?: string) => {
    try {
      const res = await httpApi.run(tableCfg.value.dataSource.interfaceUrl!, transformParamsData())
      const fun = new Function('res', handlerFunc || tableCfg.value.dataSource.handlerFunc)
      const resData = fun(res.data)
      return resData
    } catch (error) {
      return error
    }
  }
  const saveLoading = ref(false)
  const onSave = async () => {
    saveLoading.value = true

    const { code, msg } = await tableApi.add(tableCfg.value)
    if (code == 200) {
      message.success(msg)
    }
    saveLoading.value = false
  }
  return {
    tableCfg,
    currentColumn,
    onSelectColumn,
    onRemoveColumn,
    onAddColumn,
    tableData,
    onRefreshData,
    saveLoading,
    onSave,
    columnFields
  }
})
