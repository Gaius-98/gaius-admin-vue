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
      <a-tag color="#87d068">启用</a-tag>
      <a-tag color="#f50">停用</a-tag>
    </template>
  </a-page-header>
  <div class="form-design">
    <div class="left-part"></div>
    <div class="middle-part"></div>
    <div class="right-part"></div>
  </div>
  <a-modal v-model:open="show" title="保存" @ok="onConfirm">
    <schema-form :layout="schema.layout" :properties="schema.properties"></schema-form>
  </a-modal>
  <a-modal v-model:open="previewShow" title="预览"> </a-modal>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, computed } from 'vue'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { Schema } from '@/components/SchemaForm/schema'
import api from '../api/table'
import { useRouter } from 'vue-router'
interface Props {
  id?: string
}
const props = defineProps<Props>()
const { id } = toRefs(props)

// if (id.value) {
//   api.getDetail(id.value).then((res) => {
//     const { code, data, msg } = res
//     if (code == 200) {
//     }
//   })
// } else {
// }
const title = computed(() => {
  return '新建表单'
})
const desc = computed(() => {
  return ''
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
      label: '表单名称'
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
.form-design {
  display: grid;
  grid-template-columns: 1fr 6fr 2fr;
  gap: 10px;
  height: calc(100% - 60px);
  margin-top: 10px;
  .left-part {
    padding: 20px;
    background-color: #fff;
  }
  .middle-part {
    display: flex;
    flex-direction: column;
    .middle-part-header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 40px;
      background-color: #fff;
    }
    .middle-part-content {
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
