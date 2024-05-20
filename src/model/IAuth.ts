export interface AuthLogin {
  username: string
  password: string
  captcha: string
}
export type AuthToken = string
export interface AuthInfo {
  avatar: string | null
  email: string
  username: string
  name: string
  roleId: string
  createTime: Date
  id: string
}
export type CreateAuthInfo = Pick<AuthInfo, 'avatar' | 'email' | 'name' | 'roleId' | 'username'> & {
  password: string
}
export interface RoleInfo {
  id?: string
  roleName: string
  roleValue: string[]
  roleId: string
  creatTime?: Date
  desc?: string
  status: number
}
export interface RoleDictItem {
  roleId: string
  roleName: string
}
