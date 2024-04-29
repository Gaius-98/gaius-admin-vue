import request from '@/utils/request'
import type { Obj } from '@/model'
export type DictTypes = string[]
export interface DictItem {
  id:string
  label:string
}
export default {
  getDict: (data: DictTypes) => {
    console.log(data)
    return request<Obj<DictItem[]>>({
      method: 'get',
      url: '/dict/dictByType',
      params: {
        dictType:data
      }
    })
  }
}
