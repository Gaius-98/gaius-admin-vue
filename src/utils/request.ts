import axios from 'axios'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'ant-design-vue'
import auth from './auth'
//接口返回格式
export type Res<T = any> = {
  code: number
  data: T
  msg: string
}
const service = axios.create({
  baseURL: import.meta.env.VITE_REQ_BASE_URL,
  timeout: 60000
})

//请求拦截器
service.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${auth.get()}`
    return config
  },
  (error) => error
)
//响应拦截器
service.interceptors.response.use(
  (res: AxiosResponse<any, any>) => {
    const { code, msg } = res.data
    if (code != 200) {
      message.error(msg)
    }
    return res.data
  },
  (error: AxiosError) => {
    message.error(error.message)
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
