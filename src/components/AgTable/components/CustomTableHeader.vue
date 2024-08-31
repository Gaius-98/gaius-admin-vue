<template>
  <div
    class="custom-header-item"
    style="width: 100%; display: flex; justify-content: space-between"
  >
    <SwapOutlined class="move" style="width: 20px; cursor: pointer" />
    <div class="custom-header-label" style="flex: 1">{{ params.displayName }}</div>
    <DeleteOutlined class="remove" style="width: 20px" @click="onPushRemove()" />
  </div>
</template>

<script lang="ts" setup>
import { SwapOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import { reactive, toRefs, ref } from 'vue'
import agPubSub from '../utils/AgPubSub'

interface Props {
  params: any
}
const props = defineProps<Props>()
const { params } = toRefs(props)
const emit = defineEmits(['onRemove'])
const onPushRemove = () => {
  agPubSub.onPublish('removeEvent', params.value)
}
</script>
<style scoped lang="scss"></style>
