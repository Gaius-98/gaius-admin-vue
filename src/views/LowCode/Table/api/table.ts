import request from '@/utils/request'
import type { PageParams,  ResPage,LCTableCfg } from '@/model'
export interface ApiDictItem {
  apiName:string,
  id:string
}
export default {
  getList: (params: PageParams) => {
    return request<ResPage<LCTableCfg[]>>({
      method: 'get',
      url: 'table/list',
      params
    })
  },
  getDetail: (id: string) => {
    return request<LCTableCfg>({
      method: 'get',
      url: 'table/detail',
      params: {
        id
      }
    })
  },
  remove: (id: string) => {
    return request<string>({
      method: 'get',
      url: 'table/remove',
      params: {
        id
      }
    })
  },
  add: (data: LCTableCfg) => {
    return request({
      method: 'post',
      url: 'table/add',
      data
    })
  },
  update: (data: LCTableCfg) => {
    return request({
      method: 'post',
      url: 'table/update',
      data
    })
  },
  getApiList:()=>{
    return request<ApiDictItem[]>({
      method: 'get',
      url: 'request/dict',
    })
  }
}
