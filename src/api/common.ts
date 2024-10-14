import request from '@/utils/request'
import type { Obj } from '@/model'
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
  }
}
