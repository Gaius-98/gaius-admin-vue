<template>
  <div>{{ title }}</div>
</template>

<script lang="ts" setup>
import { useSystemStore } from '../../stores/system'
import { storeToRefs } from 'pinia'
const systemStore = useSystemStore()
const { title } = storeToRefs(systemStore)
</script>
<style scoped lang="scss"></style>
