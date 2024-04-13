<template>
  <div class="layout-opt">
    <div class="layout-opt-i18n" @click="onToggleLocal">
      <a-button ghost size="small">
        {{ local == 'en' ? '中文' : 'English' }}
      </a-button>
    </div>
    <div class="layout-opt-search">
      <SearchOutlined />
    </div>
    <div class="layout-opt-theme" @click="onOpenConfigDrawer">
      <SettingOutlined />
    </div>
    <div class="layout-opt-github" @click="onOpenGithub">
      <GithubOutlined />
    </div>
    <div class="layout-opt-userinfo">
      <a-avatar>
        <template #icon>
          <img src="../../assets/user.jpg" alt="" />
        </template>
      </a-avatar>
      <span class="layout-opt-userinfo-name">测试</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSystemStore } from '@/stores/system'
import { storeToRefs } from 'pinia'
import { SearchOutlined, SettingOutlined, GithubOutlined } from '@ant-design/icons-vue'
const systemStore = useSystemStore()
const { local, themeCfg } = storeToRefs(systemStore)
const { onOpenConfigDrawer, onToggleLocal } = systemStore
const onOpenGithub = () => {
  window.open('https://github.com/Gaius-98/gaius-admin', '_blank')
}
</script>
<style scoped lang="scss">
.layout-opt {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: v-bind('themeCfg.headerFontColor');
  background: v-bind('themeCfg.headerBgColor');
  height: $layout-header-height;
  div {
    margin: 0 5px;
  }
  .layout-opt-search,
  .layout-opt-theme,
  .layout-opt-github {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
  }
  .layout-opt-userinfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .layout-opt-userinfo-name {
      max-width: 80px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>
