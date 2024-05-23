import { defineStore } from "pinia";
import type{ LCTableCfg,LCTableColumnCfg } from "@/model";
import {ref} from 'vue'
export const useTableDesignStore = defineStore('tableDesign',()=>{
    const tableCfg =  ref<LCTableCfg>({
        name:'',
        description:'',
        status:1,
        columns:[
            {
                id:'1',
                title:'测试',
                dataIndex:'test',
                type:'text',            
            },
            {
                id:'2',
                title:'测试3',
                dataIndex:'test4',
                type:'text',            
            }
        ],
        global:{
            bordered:false,
            pagination:{
                show:false,
                current:1,
                pageSize:10,
                pageSizeOptions:[],
                total:10
            },
            actionCfg:{},
            filterCfg:{
                show:false,
                formId:''
            }
        },
        dataSource:{
            type:'dynamic',
            interfaceUrl:'',
            handlerFunc:'',
            preDataFunc:''
        },
        variablePool:[],
        img:''
    })
    const currentColumn = ref<Partial<LCTableColumnCfg>>({})
    const onSelectColumn = (id:string,data:Partial<LCTableColumnCfg>[])=>{
        const idx = data.findIndex(item=>item.id === id)
        if(idx != -1){
            currentColumn.value = data[idx]
        }
    }
    const onRemoveColumn = (id:string,data:Partial<LCTableColumnCfg>[]) =>{
         const idx = data.findIndex(item=>item.id === id)
        if(idx != -1){
            data.splice(idx,1)
        }
    }
    return {
        tableCfg,
        currentColumn,
        onSelectColumn,
        onRemoveColumn
    }
})