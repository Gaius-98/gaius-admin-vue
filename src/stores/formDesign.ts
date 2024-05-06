import { defineStore } from "pinia";
import {ref} from 'vue'
import type { Obj,LCFormItemCfg,ControlType } from "@/model";
import initFormControl from "@/views/LowCode/Form/FormDeisgn/utils/FormUI";
import _ from 'lodash'
export const useFormDesignStore = defineStore('formDesign',()=>{
    const formConfig = ref<LCFormItemCfg<ControlType>[]>([])
    const curControlCfg = ref<LCFormItemCfg<ControlType>>({})
    const onSelectControlItem = (id:string,data:LCFormItemCfg<ControlType>[]) =>{
        const idx = data.findIndex(item=>item.id === id)
        if(idx != -1){
            curControlCfg.value = data[idx]
        }
    }
    const extraFormConfig = ref<Obj<any>>({
        name:''
    })
    const removeControlItem = (id:string,data:LCFormItemCfg<ControlType>[])=>{
        const idx = data.findIndex(item=>item.id === id)
        if(idx != -1){
            data.splice(idx,1)
        }
    }
    const copyControlItem = ()=>{
        const copyCfg = _.cloneDeep(curControlCfg.value)
        Reflect.deleteProperty(copyCfg,'id')
        const copyControl = initFormControl(curControlCfg.value.type!,copyCfg)
        formConfig.value.push(copyControl)
    }
    const onSave = () =>{
        console.log({
            schema:formConfig.value,
            ...extraFormConfig.value,
        })
    }
    return {
        curControlCfg,
        formConfig,
        onSelectControlItem,
        copyControlItem,
        removeControlItem,
        extraFormConfig,
        onSave
    }
})