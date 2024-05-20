import request from '@/utils/request'
import type { ResPage, ReqInfo, ReqPageParams } from '@/model'
import axios from 'axios'
export default {
  getList: (params: ReqPageParams) => {
    return request<ResPage<ReqInfo[]>>({
      method: 'get',
      url: 'request/list',
      params
    })
  },
  getDetail: (id: string) => {
    return request<ReqInfo>({
      method: 'get',
      url: 'request/detail',
      params: {
        id
      }
    })
  },
  remove: (id: string) => {
    return request<string>({
      method: 'get',
      url: 'request/remove',
      params: {
        id
      }
    })
  },
  add: (data: ReqInfo) => {
    return request({
      method: 'post',
      url: 'request/add',
      data
    })
  },
  update: (data: ReqInfo) => {
    return request({
      method: 'post',
      url: 'request/update',
      data
    })
  },
  run: (id: string) => {
    return axios({
      method: 'get',
      url: import.meta.env.VITE_REQ_BASE_URL + '/request/proxy',
      params: {
        id
      }
    })
  }
}
