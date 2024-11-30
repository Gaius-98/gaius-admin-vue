import request from '@/utils/request'
import type { PageParams,DeviceInfo,ResPage } from '@/model'
export default {
  getList: (params: PageParams) => {
    return request<ResPage<DeviceInfo[]>>({
      method: 'get',
      url: 'business/device/list',
      params
    })
  },
  
  getDetail: (id: string) => {
    return request<DeviceInfo>({
      method: 'get',
      url: 'business/device/detail/noMqtt',
      params: {
        id
      }
    })
  },

  remove: (id: string) => {
    return request<string>({
      method: 'get',
      url: 'business/device/remove',
      params: {
        id
      }
    })
  },
  add: (data: DeviceInfo) => {
    return request({
      method: 'post',
      url: 'business/device/add',
      data
    })
  },
  update: (data: DeviceInfo) => {
    return request({
      method: 'post',
      url: 'business/device/update',
      data
    })
  },

}
