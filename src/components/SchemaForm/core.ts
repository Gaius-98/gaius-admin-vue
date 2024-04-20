import type { Obj } from "@/model";
export const compileText = (text:string) =>{
    const regex = /\$\{([^}]+)\}/g;
    const matches = text.match(regex);
    if(matches){
        return matches.map(match=>{
            const variableName = match.trim().substring(2, match.length - 1).split('.')[1]
            return variableName
        })
    }else{
        return []
    }
} 
export const replaceVar = (text:string,formData:Obj<any>)=>{
    const regex = /\$\{([^}]+)\}/g;
    const replacedStr = text.replace(regex, (match, p1) => {
        // 从捕获组中获取变量名称
        const variableName = p1.trim().split('.')[1];
        // 返回变量对应的值，如果变量不存在，则返回原占位符
        return formData[variableName]  ? formData[variableName] : null;
    });
    return replacedStr
}
export const execFun = (text:string,formData:Obj<any>) =>{
    const funStr = replaceVar(text,formData)
    const runFun = new Function(`return ${funStr}` )
    return runFun()
}