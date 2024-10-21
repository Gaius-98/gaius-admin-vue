<template>
  <input type="color" :value="value" @change="onChangeColor" class="sy-color-picker" />
</template>

<script lang="ts" setup>
const value = defineModel('value')
const emits = defineEmits(['change'])
const onChangeColor = (ev: Event) => {
  value.value = (ev.target as HTMLInputElement).value
  emits('change', (ev.target as HTMLInputElement).value)
}
</script>
<style scoped lang="scss">
.sy-color-picker {
  padding: 0;
  block-size: 32px;
  width: 30px;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
}
</style>
