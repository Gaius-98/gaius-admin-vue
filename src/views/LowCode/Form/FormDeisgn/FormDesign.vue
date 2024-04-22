<template>
  <div class="form-design">
    <material-area></material-area>
    <material-view v-model="list"></material-view>
  </div>
</template>

<script lang="ts" setup>
import MaterialArea from './components/MaterialArea.vue'
import MaterialView from './components/MaterialView.vue'
import { reactive, toRefs, ref } from 'vue'
const list = ref([])
</script>
<style scoped lang="scss">
.form-design {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  height: 100%;
}
</style>
