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
const getProxyData = async (dataSource:LCTableDataSource,variableObj:Obj<any>,extra?:Obj<any>) =>{
    try {
        const res = await httpApi.run(dataSource.interfaceUrl, {
            ...variableObj,
            ...extra
        })
        let resData
        if(dataSource.handlerFunc){
            const fun = new Function('res', dataSource.handlerFunc)
            resData = fun(res.data)
        }else{
            resData = res
        }
        return resData
    } catch (error) {
        return error
    }
}
const parseString= (str:string, variables:Obj<any>)=> {
    return str.replace(/\${(.*?)}/g, (match, varName) => variables[varName.trim()]);
}
export default {
    getProxyData,
    transformParamsData,
    parseString
}