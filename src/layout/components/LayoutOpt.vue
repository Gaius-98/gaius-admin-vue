<template>
  <div class="layout-opt">
    <div class="layout-opt-i18n">
      <a-button ghost size="small">English</a-button>
    </div>
    <div class="layout-opt-search">
      <SearchOutlined />
    </div>
    <div class="layout-opt-theme">
      <SettingOutlined />
    </div>
    <div class="layout-opt-github">
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
import { SearchOutlined, SettingOutlined, GithubOutlined } from '@ant-design/icons-vue'
</script>
<style scoped lang="scss">
.layout-opt {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
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
  }
}
</style>
