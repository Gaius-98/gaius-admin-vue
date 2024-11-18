import request from '@/utils/request'
import type { PageParams,ReportInfo,ResPage } from '@/model'
export default {
  getList: (params: PageParams) => {
    return request<ResPage<ReportInfo[]>>({
      method: 'get',
      url: 'business/report/list',
      params
    })
  },
  getDetail: (id: number) => {
    return request<ReportInfo>({
      method: 'get',
      url: 'business/report/detail',
      params: {
        id
      }
    })
  },

  remove: (id: number) => {
    return request<string>({
      method: 'get',
      url: 'business/report/remove',
      params: {
        id
      }
    })
  },
  add: (data: ReportInfo) => {
    return request({
      method: 'post',
      url: 'business/report/add',
      data
    })
  },
  update: (data: ReportInfo) => {
    return request({
      method: 'post',
      url: 'business/report/update',
      data
    })
  },
  export: (id: number) => {
    return request({
      method: 'post',
      url: 'business/report/export',
      data:{
        id
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      responseType: 'blob',
    })
  },
}
