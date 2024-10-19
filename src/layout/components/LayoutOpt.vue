<template>
  <div class="layout-opt">
    <!-- <div class="layout-opt-i18n" @click="onToggleLocal">
      <a-button ghost size="small">
        {{ local == 'en' ? '中文' : 'English' }}
      </a-button>
    </div> -->
    <!-- <div class="layout-opt-search">
      <SearchOutlined />
    </div> -->
    <div class="layout-opt-theme" @click="onOpenConfigDrawer">
      <SettingOutlined />
    </div>
    <div class="layout-opt-github" @click="onOpenGithub">
      <GithubOutlined />
    </div>
    <div class="layout-opt-userinfo">
      <a-popover placement="bottomRight">
        <template #content>
          <a-button @click="onLogout" block> 退出 </a-button>
        </template>
        <template #title>
          <a-descriptions title="用户信息" size="small" :column="2" style="width: 400px">
            <a-descriptions-item label="姓名">{{ userInfo.name }}</a-descriptions-item>
            <a-descriptions-item label="用户名">{{ userInfo.username }}</a-descriptions-item>
            <a-descriptions-item label="邮箱">{{ userInfo.email }}</a-descriptions-item>
            <a-descriptions-item label="手机">{{ userInfo.phone }}</a-descriptions-item>
            <a-descriptions-item label="角色">{{ role }}</a-descriptions-item>
            <a-descriptions-item label="所属机构">{{ orgInfo?.name }}</a-descriptions-item>

            <a-descriptions-item label="上次登录IP" :span="2">{{
              userInfo.lastLoginIp
            }}</a-descriptions-item>
            <a-descriptions-item label="登录IP" :span="2">{{
              userInfo.loginIp
            }}</a-descriptions-item>
          </a-descriptions>
        </template>
        <a-avatar>
          <template #icon>
            <img :src="userInfo.avatar || ''" alt="" />
          </template>
        </a-avatar>
        <span class="layout-opt-userinfo-name">{{ userInfo.name }}</span>
      </a-popover>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSystemStore } from '@/stores/system'
import { storeToRefs } from 'pinia'
import { SearchOutlined, SettingOutlined, GithubOutlined } from '@ant-design/icons-vue'
import auth from '@/utils/auth'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
const router = useRouter()
const systemStore = useSystemStore()
const role = computed(() => {
  return roleInfo.value.map((e) => e.roleName).join(',')
})
const { local, themeCfg, userInfo, orgInfo, roleInfo } = storeToRefs(systemStore)
const { onOpenConfigDrawer, onToggleLocal } = systemStore
const onOpenGithub = () => {
  window.open('https://github.com/Gaius-98/gaius-admin', '_blank')
}
const onLogout = () => {
  auth.remove()
  router.push({
    path: '/login'
  })
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
    cursor: pointer;
    .layout-opt-userinfo-name {
      max-width: 80px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>
