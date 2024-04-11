import axios from 'axios'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

//接口返回格式
export type Res<T = any> = {
  code: number
  data: T
  msg: string
}

const service = axios.create({
  baseURL: import.meta.env.VITE_REQ_URL,
  timeout: 60000
})

//请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => error
)
//响应拦截器
service.interceptors.response.use(
  (res: AxiosResponse<any, any>) => {
    return res
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

const request = <T>(config: AxiosRequestConfig) =>
  new Promise<Res<T>>((resolve, reject) => {
    service.request<T, Res<T>>(config).then(
      (res) => {
        resolve(res)
      },
      (err) => {
        reject(err)
      }
    )
  })

export default request
