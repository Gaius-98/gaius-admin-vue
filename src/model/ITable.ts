export interface LCTableCfg {
    name:string
    description?:string
    createTime?:string
    id?:string
    status:number
    columns:Partial<LCTableColumnCfg>[]
    global:LCTableGlobalCfg
    dataSource:LCTableDataSource
    variablePool:LCTableVariableCfg
    img:string
}
export enum AlignType {
    left = 'left',
    center = 'center',
    right = 'right'
}
export enum FixedType {
    left = 'left',
    right = 'right',
}
export enum ColumnType {
    text='text',
    link='link',
    image='image'
}
export interface LCTableColumnCfg {
    id:string
    dataIndex:string
    title:string
    type:keyof typeof ColumnType
    width:number
    align:keyof typeof AlignType
    fixed:keyof typeof FixedType
    children:LCTableColumnCfg[]
}
export interface LCTablePaginationCfg{
    current:number
    pageSize:number
    pageSizeOptions:string[]|number[]
    total:number
}
export interface LCActionCfg{
    formId:string
    show:boolean
    actionCfg?:{
        interfaceUrl:string
        beforeHandleFunc?:string
    }
}
export interface LCTableGlobalCfg{
    bordered:boolean
    pagination: Partial<LCTablePaginationCfg> & {
        show:boolean,
    }
    actionCfg:{
        [key:string]:LCActionCfg
    }
    filterCfg:LCActionCfg
}
export enum DataSourceType  {
    static = 'static',
    dynamic = 'dynamic'
}
export interface LCTableDataSource{
    type:keyof typeof DataSourceType
    interfaceUrl:string
    handlerFunc:string
    preDataFunc:string
}
export interface VariableItemCfg {
    key:string
    defaultValue:string
}
export type LCTableVariableCfg = VariableItemCfg[]
export interface VariablePool {
    [key:string]:any
}