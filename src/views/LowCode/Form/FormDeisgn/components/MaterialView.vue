<template>
  <vue-draggable-next
    v-model:list="data"
    class="material-view"
    @dragover.prevent.stop
    @drop.stop="onDrop"
  >
    <div
      v-for="item in data"
      :key="item"
      @click.stop="onSelectControl(item.id)"
      class="material-item"
      :class="{ active: item.id === curControlCfg.id }"
    >
      <a-form-item
        v-if="item.formItemProp"
        :label="item.formItemProp.label"
        :name="item.formItemProp.name"
      >
        <component
          :is="getComponentNameByType(item.type)"
          v-bind="getComponentProp(item.controlProp)"
          :key="item.id"
        ></component>
      </a-form-item>
      <component
        v-else
        :is="getComponentNameByType(item.type)"
        v-bind="getComponentProp(item.controlProp)"
        v-model:children="item.controlProp.children"
        :key="item.id"
      ></component>
    </div>
  </vue-draggable-next>
</template>

<script lang="ts" setup>
import { VueDraggableNext } from 'vue-draggable-next'
import initFormControl from '../utils/FormUI'
import ControlMappingType from '../utils/ControlMappingType'
import { useFormDesignStore } from '@/stores/formDesign'
import { storeToRefs } from 'pinia'
const formStore = useFormDesignStore()
const { curControlCfg } = storeToRefs(formStore)
const { onSelectControl } = formStore
const data = defineModel<any[]>({ required: true })
const getComponentNameByType = (type: string) => {
  return ControlMappingType[type]
}
const getComponentProp = (prop: any) => {
  return prop
}
const onDrop = (e: DragEvent) => {
  const initData = initFormControl(e.dataTransfer!.getData('material'))
  data.value.push(initData)
}
</script>
<style scoped lang="scss">
.material-view {
  height: 100%;
  .material-item {
    &.active {
      border: 1px solid;
    }
  }
}
</style>
