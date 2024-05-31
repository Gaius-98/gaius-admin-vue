import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import type { ResMenuItem, SystemThemeCfg, CreateAuthInfo } from '@/model'
import systemApi from '@/api/system'
import userApi from '@/views/System/api/user'
import { useStorage } from '@vueuse/core'
export const useSystemStore = defineStore('system', () => {
  const menuTree = ref<ResMenuItem[]>([])
  const isConfigVisible = ref(false)
  const onOpenConfigDrawer = () => {
    isConfigVisible.value = true
  }
  const onCloseConfigDrawer = () => {
    isConfigVisible.value = false
  }
  const local = ref<'en' | 'zh'>('zh')
  const onToggleLocal = () => {
    local.value == 'en' ? (local.value = 'zh') : (local.value = 'en')
  }

  const themeCfg = useStorage<SystemThemeCfg>('gaius-theme-json',{
    projectName: import.meta.env.VITE_TITLE,
    logo:'/prod/uploads/3a587351093a7d331c2f210100eaef5593.png',
    loginBg:'/prod/uploads/bef69558f77f710e05a25f66ad1076bed7.webp',
    colorPrimary: '#1677ff',
    headerBgColor: '#001529',
    headerFontColor: '#ffffff',
    menuTheme: 'light',
    layoutMode: 'horizontal',
    watermarkVisible: false,
    watermarkText: import.meta.env.VITE_TITLE
  })
  const userInfo = ref<Partial<CreateAuthInfo>>({})
  const collapsed = ref(false)
  const onToggleCollapsed = () => {
    collapsed.value = !collapsed.value
  }

  const getMenu = async () => {
    const { data } = await systemApi.getMenu()
    menuTree.value = data
  }
  const getUserInfo = async () => {
    const { data } = await userApi.getUserInfo()
    userInfo.value = data
  }

  const startUp = async () => {
    await getMenu()
    await getUserInfo()
  }
  return {
    menuTree,
    isConfigVisible,
    local,
    onOpenConfigDrawer,
    onCloseConfigDrawer,
    onToggleLocal,
    themeCfg,
    collapsed,
    onToggleCollapsed,
    startUp,
    getMenu,
    userInfo,
    getUserInfo
  }
})
