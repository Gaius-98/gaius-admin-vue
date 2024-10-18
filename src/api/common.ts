import request from '@/utils/request'
import type { Obj,SystemOrgTree } from '@/model'
export type DictTypes = string[]
export interface DictItem {
  value: string
  label: string
}
export default {
  getDict: (data: DictTypes) => {
    return request<Obj<DictItem[]>>({
      method: 'get',
      url: '/dict/dictByType',
      params: {
        dictType: data
      }
    })
  },
  getSetting:(type:string)=>{
    return request<Obj<string>>({
      method: 'get',
      url: '/setting/byType',
      params: {
        type
      }
    })
  },
  getOrgTree:()=>{
    return request<SystemOrgTree[]>({
      url: 'org/orgList',
      method: 'get'
    })
  }
}
