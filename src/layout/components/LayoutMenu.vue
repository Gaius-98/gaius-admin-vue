<template>
  <a-menu v-bind="$attrs" :items="menuList" theme="dark"> </a-menu>
</template>

<script lang="ts" setup>
import { useSystemStore } from '@/stores/system'
import { storeToRefs } from 'pinia'
const systemStore = useSystemStore()
const { menuList } = storeToRefs(systemStore)
</script>
<style scoped lang="scss"></style>
