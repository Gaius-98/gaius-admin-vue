export interface AuthLogin {
    username:string
    password:string
    captcha:string
}
export type AuthToken = string
export interface AuthInfo {
    avatar:string|null
    email:string
    username:string
    name:string
    role:string
    createTime:Date,
    id:string
}
export type CreateAuthInfo =  Pick<AuthInfo,'avatar'|'email'|'name'|'role'|'username'> &  {
    password:string,
}
