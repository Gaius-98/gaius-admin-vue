<template>
  <div class="form-design">
    <material-area class="left-part"></material-area>
    <material-view class="middle-part" v-model="formConfig"></material-view>
    <material-cfg class="right-part"></material-cfg>
  </div>
</template>

<script lang="ts" setup>
import MaterialArea from './components/MaterialArea.vue'
import MaterialView from './components/MaterialView.vue'
import MaterialCfg from './components/MaterialCfg.vue'
import { reactive, toRefs, ref } from 'vue'
import { useFormDesignStore } from '@/stores/formDesign'
import { storeToRefs } from 'pinia'
const formStore = useFormDesignStore()
const { formConfig } = storeToRefs(formStore)
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
    padding: 20px;
    background-color: #fff;
  }
  .right-part {
    padding: 20px 20px 0 0;
    background-color: #fff;
  }
}
</style>
