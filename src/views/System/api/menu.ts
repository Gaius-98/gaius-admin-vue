import request from "@/utils/request";
import type { ResMenuItem } from "@/model";
export interface MenuDict {
    id:string,
    label:string
}
export default {
    getList:(keyword:string)=>{
        return request<ResMenuItem[]>({
            url:'/menu/list',
            method:'get',
            params:{
                keyword
            }
        })
    },
    getDetail:(id:string)=>{
        return request<ResMenuItem>({
            url:'/menu/detail',
            method:'get',
            params:{
                id
            }
        })
    },
    remove:(id:string)=>{
        return request({
            url:'/menu/remove',
            method:'get',
            params:{
                id
            }
        })
    },
    update:(data:ResMenuItem)=>{
        return request({
            url:'/menu/update',
            method:'post',
            data
        })
    },
    add:(data:ResMenuItem)=>{
        return request({
            url:'/menu/add',
            method:'post',
            data
        })
    },
    dict:()=>{
        return request<MenuDict[]>({
            url:'menu/directory',
            method:'get'
        })
    }
}