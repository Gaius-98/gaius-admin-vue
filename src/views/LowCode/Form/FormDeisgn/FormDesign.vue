<template>
  <div class="form-design" v-loading.fullscreen="saveLoading">
    <material-area class="left-part"></material-area>
    <div class="middle-part">
      <div class="middle-part-header">
        <a-button @click="onOpenSaveModal" type="primary"> 保存 </a-button>
        <a-button @click="onOpenPreviewModal"> 预览 </a-button>
      </div>
      <material-view v-model="formConfig" class="middle-part-content"></material-view>
    </div>
    <material-cfg class="right-part"></material-cfg>
  </div>
  <a-modal v-model:open="show" title="保存" @ok="onConfirm">
    <schema-form
      :layout="schema.layout"
      :properties="schema.properties"
      :form-data="extraFormConfig"
    ></schema-form>
  </a-modal>
  <a-modal v-model:open="previewShow" title="预览">
    <low-code-form :formData="formData" :schema="formConfig"></low-code-form>
  </a-modal>
</template>

<script lang="ts" setup>
import MaterialArea from './components/MaterialArea.vue'
import MaterialView from './components/MaterialView.vue'
import MaterialCfg from './components/MaterialCfg.vue'
import { reactive, toRefs, ref } from 'vue'
import { useFormDesignStore } from '@/stores/formDesign'
import { storeToRefs } from 'pinia'
import SchemaForm from '@/components/SchemaForm/SchemaForm'
import type { Schema } from '@/components/SchemaForm/schema'
import LowCodeForm from '@/components/LowCodeForm/LowCodeForm.vue'
const formStore = useFormDesignStore()
const { formConfig, extraFormConfig, saveLoading } = storeToRefs(formStore)
const { onSave } = formStore
const show = ref(false)
const schema = ref<Schema>({
  layout: {
    labelAlign: 'left',
    layout: 'horizontal'
  },
  properties: {
    name: {
      type: 'string',
      label: '表单名称'
    }
  }
})
const onOpenSaveModal = () => {
  show.value = true
}
const onConfirm = () => {
  onSave()
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
  gap: 20px;
  height: 100%;
  .left-part {
    padding: 20px;
    background-color: #fff;
  }
  .middle-part {
    display: flex;
    flex-direction: column;
    .middle-part-header {
      display: flex;
      align-items: center;
      height: 40px;
      background-color: #fff;
    }
    .middle-part-content {
      margin-top: 20px;
      flex: 1;
      background-color: #fff;
    }
  }
  .right-part {
    padding: 20px 20px 0 0;
    background-color: #fff;
  }
}
</style>
