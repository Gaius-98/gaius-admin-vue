import httpApi from '@/views/System/api/http'
import type { Obj,LCTableDataSource,LCTableVariableCfg } from '@/model'

const transformParamsData = (variablePool:LCTableVariableCfg) => {
    const obj: Obj<any> = {}
    variablePool.reduce((p: Obj<any>, c) => {
        p[c!.key] = c!.defaultValue
        return p
    }, obj)
    return obj
}
const refreshData = async (dataSource:LCTableDataSource,variablePool:LCTableVariableCfg,extra?:Obj<any>) =>{
    try {
        const res = await httpApi.run(dataSource.interfaceUrl, {
            ...transformParamsData(variablePool),
            ...extra
        })
        const fun = new Function('res', dataSource.handlerFunc)
        const resData = fun(res.data)
        return resData
    } catch (error) {
        return error
    }
}

export default {
    refreshData,
    transformParamsData
}