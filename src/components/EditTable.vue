<template>
  <a-table
    :columns="tableColumns"
    :data-source="tableData"
    :pagination="false"
    :rowKey="(record: any) => record._id_"
    size="small"
    :scroll="{
      y: height
    }"
  >
    <template #bodyCell="{ column, index, record }">
      <template v-if="inputColumns.includes(column.dataIndex)">
        <a-input
          :value="tableData[index][column.dataIndex]"
          @change="onChange(record._id_, column.dataIndex, $event.target.value)"
        ></a-input>
      </template>
      <template v-if="selectColumns.includes(column.dataIndex)">
        <a-select
          :value="tableData[index][column.dataIndex]"
          :options="getColumnOptions(column.dataIndex)"
          @change="
            (val: string) => {
              onChange(record._id_, column.dataIndex, val)
            }
          "
        ></a-select>
      </template>
      <template v-if="column.dataIndex == '_action_'">
        <div style="display: flex">
          <PlusCircleOutlined class="icon" @click="onAdd()" />
          <MinusCircleOutlined class="icon" @click="onRemove(record._id_)" />
        </div>
      </template>
    </template>
    <template #emptyText>
      <a-button type="text" @click="onAdd" :icon="h(PlusCircleOutlined)"> 新增数据</a-button>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, computed, watch, h } from 'vue'
import type { ModelRef } from 'vue'
import type { Obj } from '@/model'
import { v4 as uuidV4 } from 'uuid'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons-vue'
import _ from 'lodash'
export interface SelectOptionItem {
  value: string
  label: string
}
export interface EditColumn {
  dataIndex: string
  title: string
  type?: 'input' | 'select'
  options?: SelectOptionItem[]
}
interface Props {
  columns: EditColumn[]
  action?: boolean
  height?: number
}
const data: ModelRef<any> = defineModel()
const tableData = ref<any[]>([])

watch(
  () => data,
  () => {
    tableData.value = data.value.map((e: Obj<string>) => ({
      _id_: uuidV4(),
      ...e
    }))
  },
  {
    deep: true,
    immediate: true
  }
)
let props = withDefaults(defineProps<Props>(), {
  action: true,
  height: 150
})
const { columns, action } = toRefs(props)
const inputColumns = computed(() => {
  return getFilterColumnByType('input')
})
const selectColumns = computed(() => {
  return getFilterColumnByType('select')
})

const tableColumns = computed(() => {
  if (action.value) {
    return [
      ...columns.value,
      {
        title: '操作',
        dataIndex: '_action_'
      }
    ]
  }
  return columns.value
})

const getColumnOptions = (dataIndex: string) => {
  return columns.value.find((e) => e.dataIndex == dataIndex)?.options || []
}
const getFilterColumnByType = (type: 'input' | 'select') => {
  return columns.value.filter((e) => e.type == type).map((e) => e.dataIndex)
}

const onChange = (id: string, dataIndex: string, value: string) => {
  tableData.value.find((e) => e._id_ == id)[dataIndex] = value
  data.value = tableData.value.map((e) => {
    let obj = _.cloneDeep(e)
    Reflect.deleteProperty(obj, '_id_')
    return obj
  })
}
const onAdd = () => {
  let id = uuidV4()
  let obj = _.cloneDeep({
    _id_: id
  })
  columns.value.map((column) => {
    Reflect.set(obj, column.dataIndex, '')
  })
  tableData.value.push(obj)
}
const onRemove = (id: string) => {
  let idx = tableData.value.findIndex((e) => e._id_ == id)
  tableData.value.splice(idx, 1)
  console.log(
    tableData.value.map((e) => {
      let obj = _.cloneDeep(e)
      Reflect.deleteProperty(obj, '_id_')
      return obj
    })
  )
  data.value = tableData.value.map((e) => {
    let obj = _.cloneDeep(e)
    Reflect.deleteProperty(obj, '_id_')
    return obj
  })
}
</script>
<style scoped lang="scss">
.icon + .icon {
  margin-left: 5px;
  cursor: pointer;
}
</style>
