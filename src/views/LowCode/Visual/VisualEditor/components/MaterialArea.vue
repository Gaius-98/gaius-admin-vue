<template>
  <a-collapse v-model:activeKey="activeKey" class="material-area" :ghost="true">
    <a-collapse-panel :header="item.title" v-for="item in materialList" :key="item.value">
      <div class="component-layout">
        <div
          class="component-item"
          v-for="component in item.list"
          :key="component.name"
          draggable="true"
          @dragstart="onDrag"
          :data-component="JSON.stringify(component)"
        >
          <span class="iconfont component-item-icon" :class="component.icon"></span>
          <span class="component-item-text">{{ component.label }}</span>
        </div>
      </div>
    </a-collapse-panel>
  </a-collapse>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
const activeKey = ref()
const materialList = [
  {
    title: '基础组件',
    value: 'base',
    list: [
      {
        label: '图片',
        icon: 'icon-image1',
        name: 'img'
      },
      {
        label: '文本',
        icon: 'icon-text',
        name: 'text'
      },
      {
        label: '视频',
        name: 'video',
        icon: 'icon-video'
      },
      {
        label: '嵌入页',
        name: 'iframe',
        icon: 'icon-HTML'
      }
    ]
  },
  {
    title: '图表',
    value: 'echart',
    list: [
      {
        label: '柱状图',
        icon: 'icon-barchart',
        name: 'bar'
      },
      {
        label: '折线图',
        icon: 'icon-linechart',
        name: 'line'
      }
    ]
  }
]
const onDrag = (ev: any) => {
  if (ev && ev.target && ev.dataTransfer) {
    ev.dataTransfer.setData('componentData', ev.target.getAttribute('data-component'))
  }
}
</script>
<style scoped lang="scss">
.material-area {
  .component-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .component-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100px;
      background: #fff;
      border: 1px solid #ccc;
      cursor: pointer;
      .component-item-icon {
        width: 30px;
        height: 30px;
        font-size: 30px;
      }
      .component-item-text {
        margin-top: 10px;
      }
      & + .component-item {
        border-left: none;
      }
      &:hover {
        box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.15);
      }
    }
  }
}
</style>
