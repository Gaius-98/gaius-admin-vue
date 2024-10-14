import request from '@/utils/request'
import type { ResMenuItem } from '@/model'
export default {
  getMenu: () => {
    return request<ResMenuItem[]>({
      url: '/menu/user/list',
      method: 'get',
    })
  },
  
}
