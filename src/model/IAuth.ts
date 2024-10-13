export interface AuthLogin {
  username: string
  password: string
  captcha: string
}
export type AuthToken = string
export interface AuthInfo {
  avatar: string
  email: string
  username: string
  userId:string
  name: string
  roleIds: string[]
  createTime: Date
  id: string
}
export type CreateAuthInfo = Pick<AuthInfo, 'avatar' | 'email' | 'name' | 'roleIds' | 'username'> & {
  password: string
  phone:string
  userId?:string
}
export interface UserInfo {
  permissions:string[],
  roles:RoleInfo[],
  user:AuthInfo
}

export interface RoleInfo {
  roleId?: string
  roleName: string
  roleMenus: string[] | {
    checked:string[]
  }

  roleKey: string
  creatTime?: Date
  remark?: string
  status: number
}
export interface RoleDictItem {
  roleId: string
  roleName: string
}
