import request from "@/utils/request";
import type {PageParams,AuthInfo,ResPage,CreateAuthInfo} from '@/model'
export default {
    getList:(params:PageParams)=>{
        return request<ResPage<AuthInfo[]>>({
            method:'get',
            url:'user/list',
            params,
        })
    },
    getDetail:(username:string)=>{
        return request<CreateAuthInfo>({
            method:'get',
            url:'user/detail',
            params:{
                username
            },
        })
    },
    remove:(username:string)=>{
        return request<string>({
            method:'get',
            url:'user/remove',
            params:{
                username
            },
        })
    },
    add:(data:CreateAuthInfo)=>{
        return request({
            method:'post',
            url:'user/register',
            data,
        })
    },
    update:(data:CreateAuthInfo)=>{
        return request({
            method:'post',
            url:'user/update',
            data,
        })
    }
}