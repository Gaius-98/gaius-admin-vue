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
        <a-button>加载外部组件</a-button>
        <a-button @click="onOpenVariableModal" class="variable-btn"> 变量池配置 </a-button>
        <a-button @click="onOpenSaveModal" type="primary" class="save-btn"> 保存 </a-button>
      </a-space>
    </template>
    <template #tags>
      <a-tag color="#87d068">启用</a-tag>
      <a-tag color="#f50">停用</a-tag>
    </template>
  </a-page-header>
  <div class="design-container">
    <left-side-bar class="left-sider"></left-side-bar>
    <design-area></design-area>
    <cfg-area></cfg-area>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { reactive, toRefs, ref, computed } from 'vue'
import CfgArea from './components/CfgArea.vue'
import DesignArea from './components/DesignArea.vue'
import leftSideBar from './components/LeftSideBar.vue'
const router = useRouter()

const title = computed(() => 'title')
const desc = computed(() => 'desc')
const onOpenVariableModal = () => {}
const onOpenSaveModal = () => {}
const goBack = () => {
  router.go(-1)
}
</script>
<style scoped lang="scss">
.design-container {
  position: relative;
  display: flex;
  height: calc(100% - 70px);
  margin-top: 10px;
  .left-side {
  }
}
</style>
