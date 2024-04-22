<template>
  <!-- <vue-draggable-next v-model:list="data" class="material-view" @dragover.prevent @drop="onDrop">
    <div v-for="item in data" :key="item">{{ item }}</div>
  </vue-draggable-next> -->
  test
</template>

<script lang="ts" setup>
// import { VueDraggableNext } from 'vue-draggable-next'

const data = defineModel<any[]>({ required: true })
const onDrop = (e: DragEvent) => {
  data.value.push(e.dataTransfer?.getData('material'))
}
</script>
<style scoped lang="scss"></style>
