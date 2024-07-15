<template>
  <div class="left-side-bar">
    <ul class="bar-top">
      <li
        v-for="item in nodeList"
        :key="item.value"
        :title="item.label"
        :class="[
          `iconfont icon-${item.icon}`,
          active && active.value === item.value ? 'active' : ''
        ]"
        @click="onClick(item)"
      ></li>
    </ul>
  </div>
  <div class="left-part" v-if="active" :key="active.value" :class="affix ? 'affix' : ''">
    <div class="header">
      <div class="title">{{ active.label }}</div>
      <div
        class="affix iconfont"
        @click="onAffix"
        :class="affix ? 'icon-pushpin-fill' : 'icon-pushpin'"
      ></div>
      <div class="close iconfont icon-close" @click="onClose"></div>
    </div>
    <div class="container">
      <component :is="active.component"></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NodeRelationship from './NodeRelationship.vue'
import MaterialArea from './MaterialArea.vue'
import { reactive, toRefs, ref } from 'vue'
const nodeList = [
  {
    label: '素材库',
    value: 'componentLib',
    icon: 'appstoreadd',
    component: MaterialArea
  },
  {
    label: '节点关系',
    value: 'nodeRelationship',
    icon: 'link',
    component: NodeRelationship
  }
]
const active = ref()
const affix = ref(false)
const onAffix = () => {
  affix.value = !affix.value
}
const onClick = (item: Record<string, any>) => {
  active.value = item
}
const onClose = () => {
  active.value = undefined
}
</script>
<style scoped lang="scss">
.left-side-bar {
  width: 40px;
  height: 100%;
  background-color: #fff;
  .bar-top {
    list-style: none;
    padding: 10px 0;
    margin: 0;
    li {
      width: 40px;
      height: 30px;
      line-height: 30px;
      font-size: 25px;
      text-align: center;
      cursor: pointer;
      &.active {
        color: rgb(22, 119, 255);
      }
    }
    li + li {
      margin-top: 5px;
    }
  }
}
.left-part {
  width: 300px;
  height: 100%;
  background-color: #fff;
  border-left: 1px solid #eee;
  box-shadow: 4px 6px 6px 0 var(--color-block-background-shallow, rgba(31, 50, 88, 0.08));
  .header {
    display: grid;
    grid-template-columns: auto 40px 40px;
    padding: 0 5px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    .iconfont {
      text-align: center;
    }
    .affix {
      font-size: 18px;
      cursor: pointer;
    }
    .close {
      font-size: 16px;
      cursor: pointer;
    }
  }
  .container {
    width: 100%;
    height: calc(100% - 40px);
  }
  &.affix {
    position: absolute;
    top: 0;
    left: 40px;
    z-index: 999;
  }
}
</style>
