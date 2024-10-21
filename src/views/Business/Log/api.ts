import request from '@/utils/request'
import type { PageParams,ReportInfo,ResPage } from '@/model'
export default {
  getList: (params: PageParams) => {
    return request<ResPage<ReportInfo[]>>({
      method: 'get',
      url: 'business/log/list',
      params
    })
  },
  getDetail: (id: number) => {
    return request<ReportInfo>({
      method: 'get',
      url: 'business/log/detail',
      params: {
        id
      }
    })
  },

  remove: (id: number) => {
    return request<string>({
      method: 'get',
      url: 'business/log/remove',
      params: {
        id
      }
    })
  },


}
