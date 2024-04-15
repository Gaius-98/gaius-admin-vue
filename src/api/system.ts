import request from '@/utils/request'
import type { ResMenuItem } from '@/model'
export default {
  getMenu: () => {
    return request<ResMenuItem[]>({
      url: '/menu/list',
      method: 'get',
      params: {
        keyword: ''
      }
    })
  }
}
