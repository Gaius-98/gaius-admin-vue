<template>
  <a-button type="primary"> test </a-button>
</template>

<script lang="ts" setup>
import { useSystemStore } from '../../stores/system'
import { storeToRefs } from 'pinia'
const systemStore = useSystemStore()
const { title } = storeToRefs(systemStore)
</script>
<style scoped lang="scss"></style>
