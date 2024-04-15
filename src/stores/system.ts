import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import type { ResMenuItem, SystemThemeCfg } from '@/model'
import systemApi from '@/api/system'
export const useSystemStore = defineStore('system', () => {
  const menuTree = ref<ResMenuItem[]>([])
  const isConfigVisible = ref(false)
  const onOpenConfigDrawer = () => {
    isConfigVisible.value = true
  }
  const onCloseConfigDrawer = () => {
    isConfigVisible.value = false
  }
  const local = ref<'en' | 'zh'>('en')
  const onToggleLocal = () => {
    local.value == 'en' ? (local.value = 'zh') : (local.value = 'en')
  }

  const themeCfg = reactive<SystemThemeCfg>({
    projectName: import.meta.env.VITE_TITLE,
    colorPrimary: '#1677ff',
    headerBgColor: '#001529',
    headerFontColor: '#ffffff',
    menuTheme: 'light',
    layoutMode: 'horizontal',
    watermarkVisible: false,
    watermarkText: import.meta.env.VITE_TITLE
  })
  const collapsed = ref(false)
  const onToggleCollapsed = () => {
    collapsed.value = !collapsed.value
  }

  const getMenu = async () => {
    const { data } = await systemApi.getMenu()
    menuTree.value = data
  }

  const startUp = async () => {
    await getMenu()
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
    getMenu
  }
})
