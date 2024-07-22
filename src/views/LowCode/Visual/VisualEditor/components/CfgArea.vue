<template>
  <div class="cfg">
    <low-code-form-id
      :form-data="curCompData"
      :id="curCompData.formId"
      v-if="curCompData.formId"
      :key="curCompData.formId"
    />
  </div>
</template>

<script lang="ts" setup>
import LowCodeFormId from '@/components/LowCodeForm/LowCodeFormId.vue'
import { reactive, toRefs, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useVisualStore } from '@/stores/visualDesign'
const store = useVisualStore()
const { visualData, curCompData } = storeToRefs(store)
</script>
<style scoped lang="scss">
.cfg {
  width: 300px;
}
</style>
