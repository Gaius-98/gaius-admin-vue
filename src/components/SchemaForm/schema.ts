import type { Obj } from "@/model"

export interface SchemaLayout {
    labelAlign?:'left'|'right'
    labelCol?:{
        span?:number,
        offset?:number,
        style?:Obj<any>
    },
    wrapperCol?:{
        span?:number,
        offset?:number,
        style?:Obj<any>
    }
    layout?:'horizontal'|'vertical'|'inline',
}
export type ControlType = 'string'|'date'|'number'|'select'|'tree'|'radio'|'switch'
export interface SchemaProperties{
    label:string
    required?:boolean
    rules?:any[]|Obj<any>
    tooltip?:string
    type:ControlType
    show?:boolean|string
    component?:{
        name?:string
        dataSource?:any[]
        asyncData?:()=>Promise<any>
        [key:string]:any
    }
}
export interface Schema {
    layout?:SchemaLayout
    properties:Obj<SchemaProperties>,
    formData?:Obj<any>
}