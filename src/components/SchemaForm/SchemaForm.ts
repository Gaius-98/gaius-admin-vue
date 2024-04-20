import {h, toRefs,ref,watch} from 'vue'
import type {Prop,ComputedOptions} from 'vue'
import type { SchemaProperties,ControlType,Schema,SchemaLayout } from './schema'
import type { Obj } from '@/model'
import { Input,Select,Form,FormItem,InputNumber,DatePicker,TreeSelect } from 'ant-design-vue'
import { compileText,replaceVar,execFun } from './core'
import { GuPubSub } from 'gaius-utils'
const createUIControl =  (formData:Obj<any>,key:string,type:ControlType,ctx:any,component?:Obj<any>) =>{
    let Node 
    switch (type) {
        case 'string':
            Node = h(Input,{
                ...component,
                value:formData[key],
                onChange:(e:Event)=>{
                    formData[key] = e.target!.value
                    ctx.pubSub.onPublish(key)
                }
            })
            break;
        case 'select':
            Node = h(Select,{
                ...component,
                options:ctx.options[key]||[],
                value:formData[key],
                onChange:(value:any)=>{
                    formData[key] = value
                    ctx.pubSub.onPublish(key)
                }

            })
            break;
        case 'number':
            Node = h(InputNumber,{
                ...component,
                value:formData[key],                
                onChange:(value:any)=>{
                    formData[key] = value
                    ctx.pubSub.onPublish(key)
                }})
            break;
        case 'date':
            Node = h(DatePicker,{
                ...component,
                value:formData[key],
                onChange:(value:any)=>{
                    formData[key] = value
                    ctx.pubSub.onPublish(key)
                }})

            break;
        case 'tree':
            Node = h(TreeSelect,{
                ...component,               
                options:ctx.options[key]||[],
                value:formData[key],
                onChange:(value:any)=>{
                    formData[key] = value
                },
            })
            break;
        default:
            Node = h(Input,{
                ...component,
                value:formData[key],
                onChange:(e:Event)=>{
                    formData[key] = e.target!.value
                    console.log(ctx.pubSub.onPublish.toString())
                    ctx.pubSub.onPublish(key)
                }})
            break;
    }
    return Node
}

const createSchemaFormItem =   (formData:Obj<any>,key:string,prop:SchemaProperties,ctx:any) =>{
    const {type,label,component } = prop
    let childrenNode 
    if(component?.name){
        const { name } = component
        childrenNode = h(name!,{
            ...component,
            formData
        })
    }else{
        childrenNode =   createUIControl(formData,key,type,ctx,component)
    }
    return ctx.visibleInfo[key] && h(FormItem,{
        label,
        name:key
    },[
        childrenNode
    ])

}

const SchemaForm = {
    name:'SchemaForm',
    props:{
        layout:{
            type:Object as Prop<SchemaLayout>
        },
        properties:{
            type:Object as Prop<SchemaProperties>
        },
        formData:{
           type :Object as Prop<Obj<any>>,
           required:true
        }
    },
    setup(props:Schema) {
        const { layout,properties,formData } =toRefs(props)
        const options = ref<Obj<any>>({})
        const needOptions =  Object.entries(properties.value).filter(([key,propItem])=> {
            return propItem?.component?.dataSource || propItem?.component?.asyncData
        })
        const getOptions = async (key:string,propItem:SchemaProperties) =>{
            const { dataSource,asyncData } = propItem.component!
            if(dataSource){
                options.value[key] = dataSource
            }else{
                options.value[key] = await asyncData!()
            }
        }
        needOptions.map(async ([key,propItem])=>{
           await getOptions(key,propItem)
        })

        const refrehOption = (key:string) =>{
            const [pKey,propItem] =  Object.entries(properties.value).find(([propKey,propItem])=>key == propKey)!
            if(propItem){
                getOptions(pKey,propItem)
            }
        }
        const pubSub = new GuPubSub()

        const setVisibleInfo = () =>{
            Object.entries(properties.value).map(([key,propItem])=> {
                if(typeof propItem.show  == 'undefined'){
                    visibleInfo.value[key] = true
                }else if(typeof propItem.show == 'boolean'){
                    visibleInfo.value[key] = propItem.show
                }else if(typeof propItem.show =='string') {
                    propItem.show!
                    const showStr = propItem.show as string
                    visibleInfo.value[key]  = execFun(showStr,formData!.value!)
                    const depend = compileText(showStr)
                    depend.map(dependKey=>{
                        pubSub.onSubscribe(dependKey,()=>{
                           visibleInfo.value[key] = execFun(showStr,formData!.value!)
                        })
                    })
                }
                return propItem?.component?.dataSource || propItem?.component?.asyncData
            })
        }
        const visibleInfo = ref<Obj<boolean>>({

        })
        setVisibleInfo()
        return {
            layout,
            properties,
            refrehOption,
            formData,
            options,
            visibleInfo,
            pubSub
        }
    },
    render : (ctx:any)=>{
        return  h(Form,{...ctx.layout},
         [...Object.entries(ctx.properties).map(  ([key,propItem])=>  createSchemaFormItem(ctx.formData,key,propItem,ctx))]
        )
    }
}
export default SchemaForm