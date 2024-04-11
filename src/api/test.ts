import request from '@/utils/request'
interface LoginInfo {
  username: string
  password: string
}
interface LoginResult {
  token: string
}
export default {
  login: (data: LoginInfo) => {
    return request<LoginResult>({
      method: 'get',
      url: '/login',
      params: {
        ...data
      }
    })
  }
}
