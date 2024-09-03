<template>
  <a-space>
    <div class="btn" v-for="btn in rowBtnList" :key="btn.id" @click="onClickRowBtn('row', btn)">
      <a>
        {{ btn.name }}
      </a>
    </div>
    <PlusOutlined style="cursor: pointer" @click="onClickRowBtn('row')" />
  </a-space>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, watch, computed } from 'vue'
import type { LCTableInteractionCfg } from '@/model'
import { PlusOutlined } from '@ant-design/icons-vue'
import { useTableDesignStore } from '@/stores/tableDesign'
import { storeToRefs } from 'pinia'
import agPubSub from '../utils/AgPubSub'
const store = useTableDesignStore()
const { tableCfg } = storeToRefs(store)
const rowBtnList = computed(
  () => tableCfg.value.global.actionCfg?.filter((e) => e.position == 'row')
)

const onClickRowBtn = (position: 'row' | 'header', data?: Partial<LCTableInteractionCfg>) => {
  agPubSub.onPublish('action', {
    position,
    data
  })
}
</script>
<style scoped lang="scss">
.btn-list {
  display: flex;
  justify-content: space-around;
  .btn {
    padding: 5px;
    border: 1px dashed transparent;
    &:hover {
      border: 1px dashed #4096ff;
    }
  }
}
</style>
