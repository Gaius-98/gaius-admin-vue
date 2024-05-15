import { defineStore } from "pinia";
import {ref} from 'vue'
import type { Obj,LCFormItemCfg,ControlType } from "@/model";
import initFormControl from "@/views/LowCode/Form/FormDeisgn/utils/FormUI";
import _ from 'lodash'
import LowCodeForm from "@/components/LowCodeForm/LowCodeForm.vue";
import { createApp } from "vue";
import html2canvas from 'html2canvas'
import formApi from "@/views/LowCode/Form/api/form";
import type { LCFormCfg } from "@/model";
import {message} from 'ant-design-vue'
export const useFormDesignStore = defineStore('formDesign',()=>{
    const formConfig = ref<LCFormItemCfg<ControlType>[]>([])

    const curControlCfg = ref<LCFormItemCfg<ControlType>>({})
    const id = ref('')
    const setFormDetail = (data:LCFormCfg) =>{
        const {id:formId,schema,name,description,status} = data
        id.value = formId!
        extraFormConfig.value = {
            name,
            description,
            status
        }
        formConfig.value = schema
    }
    const onSelectControlItem = (id:string,data:LCFormItemCfg<ControlType>[]) =>{
        const idx = data.findIndex(item=>item.id === id)
        if(idx != -1){
            curControlCfg.value = data[idx]
        }
    }
    const extraFormConfig = ref<Obj<any>>({
        name:'',
        description:'',
        status:1
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
    const saveLoading = ref(false)
    const AddPreviewForm = () => {
        const vNode = document.createElement('div')
        vNode.className = 'preview-form'
        vNode.style.width = '720px'
        vNode.style.height = '500px'
        vNode.style.overflowY = 'auto'
        vNode.style.padding = '10px'
        const FormComp = createApp(LowCodeForm, {
            schema: formConfig.value,
            formData:{}
        })
        FormComp.mount(vNode).$el
        document.body.appendChild(vNode)
    }
    const onSave = async () =>{
        saveLoading.value = true
        let img = ''
        AddPreviewForm()
        if (document.querySelector('.preview-form')) {
            const canvas = await html2canvas(document.querySelector('.preview-form') as HTMLElement)
            if (canvas) {
                img = canvas.toDataURL('image/png')
                document.body.removeChild(document.querySelector('.preview-form') as Node)
            }
        }
        let api = formApi.add
        const req = <LCFormCfg>{
            schema:formConfig.value,
            ...extraFormConfig.value,
            img
        }
        if(id.value){
            api = formApi.update
            req.id = id.value
        }
        const {code,msg} = await api(req)
        if(code == 200){
            message.success(msg)
        }
        saveLoading.value = false
    }
    return {
        curControlCfg,
        formConfig,
        onSelectControlItem,
        copyControlItem,
        removeControlItem,
        extraFormConfig,
        onSave,
        id,
        saveLoading,
        setFormDetail
    }
})