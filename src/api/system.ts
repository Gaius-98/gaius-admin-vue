import request from '@/utils/request'
import type { ResMenuItem } from '@/model'
export default {
  getMenu: () => {
    return request<ResMenuItem[]>({
      url: '/menu',
      method: 'get',
    })
  },
  accessRecord: () => {
    return request({
      url: '/accessLog/record',
      method: 'get',

    })
  }
}
