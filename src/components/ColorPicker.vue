<template>
  <input type="color" :value="model" @change="onChangeColor" class="gaius-color-picker" />
</template>

<script lang="ts" setup>
const model = defineModel()
const emits = defineEmits(['change'])
const onChangeColor = (ev: Event) => {
  model.value = ev.target!.value
  emits('change', ev.target!.value)
}
</script>
<style scoped lang="scss">
.gaius-color-picker {
  padding: 0;
  block-size: 32px;
  width: 30px;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
}
</style>
