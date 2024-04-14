import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import type { SystemMenuItem, SystemThemeCfg } from '@/model'
export const useSystemStore = defineStore('system', () => {
  const menuTree = reactive<SystemMenuItem[]>([
    {
      key: 'mail',
      label: 'Navigation One',
      title: 'Navigation One',
      icon: 'StepBackwardOutlined'
    },
    {
      key: 'app',
      label: 'Navigation Two',
      title: 'Navigation Two'
    },
    {
      key: 'sub1',
      label: 'Navigation Three - Submenu',
      title: 'Navigation Three - Submenu',
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1'
            },
            {
              label: 'Option 2',
              key: 'setting:2'
            }
          ]
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3'
            },
            {
              label: 'Option 4',
              key: 'setting:4'
            }
          ]
        }
      ]
    }
  ])
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
  return {
    menuTree,
    isConfigVisible,
    local,
    onOpenConfigDrawer,
    onCloseConfigDrawer,
    onToggleLocal,
    themeCfg,
    collapsed,
    onToggleCollapsed
  }
})
