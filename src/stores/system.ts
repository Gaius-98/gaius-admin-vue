import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
export const useSystemStore = defineStore('system', () => {
  const title = ref('gaius-admin')
  const menuList = reactive([
    {
      key: 'mail',
      label: 'Navigation One',
      title: 'Navigation One'
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
    },
    {
      key: 'alipay',
      title: 'Navigation Four - Link'
    }
  ])
  return {
    title,
    menuList
  }
})
