import request from "@/utils/request";
import type { SystemDictItem,ResPage,PageParams,SystemDictTypeItem } from "@/model";
export interface DictPageParams extends PageParams {
    dictType:string
}
export default {
    getList:(params:PageParams)=>{
        return request<ResPage<SystemDictItem[]>>({
            method:'get',
            url:'dict/list',
            params,
        })
    },
    getDetail:(id:string)=>{
        return request<SystemDictItem>({
            method:'get',
            url:'dict/detail',
            params:{
                id
            },
        })
    },
    remove:(id:string)=>{
        return request<string>({
            method:'get',
            url:'dict/remove',
            params:{
                id
            },
        })
    },
    add:(data:SystemDictItem)=>{
        return request({
            method:'post',
            url:'dict/add',
            data,
        })
    },
    update:(data:SystemDictItem)=>{
        return request({
            method:'post',
            url:'dict/update',
            data,
        })
    },
    getDictTypeList:()=>{
        return request<SystemDictTypeItem[]>({
            method:'get',
            url:'dict/dictTypeList'
        })
    }
}