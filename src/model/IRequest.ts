import type { PageParams } from './ICommon'
export interface ReqParamsItem {
  key: string
  value: string
  var: string
}
export interface ReqBodyItem extends ReqParamsItem {}
export type ReqHeaderItem = Pick<ReqParamsItem, 'key' | 'value'>
export interface ReqInfo {
  url: string
  method: 'get' | 'post'
  params?: ReqBodyItem[]
  body?: ReqBodyItem[]
  headers?: ReqHeaderItem[]
  status: 0 | 1
  apiName: string
  id?: string
  creatTime?: Date
  desc?: string
}
export interface ReqPageParams extends PageParams {
  url?: string
}
