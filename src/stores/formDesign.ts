import { defineStore } from "pinia";
import {ref} from 'vue'
import type { Obj } from "@/model";
export const useFormDesignStore = defineStore('formDesign',()=>{
    const formConfig = ref([])
    const curControlCfg = ref<Obj<any>>({})
    const onSelectControl = (id:string) =>{
       const idx =  formConfig.value.findIndex(e=>(e.id === id))
       if(idx != -1){
        curControlCfg.value = formConfig.value[idx]
       }
    }
    return {
        curControlCfg,
        formConfig,
        onSelectControl
    }
})