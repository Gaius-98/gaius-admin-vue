<template>
  <div class="cfg">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="position" tab="位置信息">
        <low-code-form-id :form-data="curCompData" id="77c39b52-fde7-491f-9e94-9f2f1d65fb69" />
      </a-tab-pane>
      <a-tab-pane key="props" tab="属性配置">
        <low-code-form-id
          :form-data="curCompData"
          :id="curCompData.formId"
          v-if="curCompData.formId"
          :key="curCompData.formId"
        />
      </a-tab-pane>

      <a-tab-pane key="data" tab="数据配置">Content of Tab 3</a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
import LowCodeFormId from '@/components/LowCodeForm/LowCodeFormId.vue'
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useVisualStore } from '@/stores/visualDesign'
const store = useVisualStore()
const { visualData, curCompData } = storeToRefs(store)
const activeKey = ref('position')
</script>
<style scoped lang="scss">
.cfg {
  width: 300px;
  background-color: #fff;
  padding: 5px;
}
</style>
