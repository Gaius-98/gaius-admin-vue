<template>
  <input type="color" :value="model" @change="onChange" class="gaius-color-picker" />
</template>

<script lang="ts" setup>
const model = defineModel()
const onChange = (ev: Event) => {
  model.value = ev.target!.value
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
