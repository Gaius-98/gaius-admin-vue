export interface DeviceInfo {
    deviceId:string
    belongType:string
    belongId:string
    netNumber:string
    expireDate?:Date|string
    id?:string
    isExpired:string
    mqttInfo?:any
    orgInfo?:any
    userInfo?:any
}

export interface ReportInfo {
    deviceId:string
    id?:number
    pm:string
    fa:string
    tovc:string
    temp:string
    rh:string
    createTime?:Date|string
}
export interface ChangeFields {
    changeField: string
    id:number
    logId:number
    newValue:string
    oldValue:string

}
export interface LogInfo {
    createBy:string
    createTime:Date|string
    userInfo:{
        userId:string
        username:string
    }
    changeInfo:ChangeFields[]
}