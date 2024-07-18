<template>
  <div ref="GEchart" class="ev-chart"></div>
</template>

<script lang="ts" setup>
import { init } from 'echarts'
import type { EChartsType } from 'echarts'
import { reactive, toRefs, ref, onMounted, watch } from 'vue'

export interface Props {
  option: Record<string, any>
}
const props = withDefaults(defineProps<Props>(), {
  option: () => ({})
})

const loading = ref(true)
const { option } = toRefs(props)
const chartOption = reactive<Record<string, any>>({})

Object.assign(chartOption, option.value)
const GEchart = ref()
let evChartInstance: EChartsType
const timer = ref(0)
const initEchart = () => {
  if (evChartInstance) {
    evChartInstance.clear()
    evChartInstance.setOption(chartOption)
  } else if (GEchart.value) {
    evChartInstance = init(GEchart.value)
    evChartInstance.setOption(chartOption)
  }
  loading.value = false
}
const rsOb = new ResizeObserver((e) => {
  if (timer.value) clearTimeout(timer.value)
  timer.value = window.setTimeout(() => {
    try {
      evChartInstance.resize()
    } catch (error) {
      console.warn(`chart重新设置大小失败,失败原因：${error}`)
    }
  }, 50)
})
onMounted(() => {
  initEchart()
  rsOb.observe(GEchart.value)
})

watch(
  option,
  () => {
    Object.assign(chartOption, option.value)
    initEchart()
  },
  { deep: true }
)

const emits = defineEmits([''])
</script>
<style scoped lang="scss">
.g-echart {
  width: 100%;
  height: 100%;
}
</style>
