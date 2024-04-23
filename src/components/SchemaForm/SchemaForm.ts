import {h, toRefs,ref,inject} from 'vue'
import type {Prop} from 'vue'
import type { SchemaProperties,ControlType,Schema,SchemaLayout } from './schema'
import type { Obj } from '@/model'
import { Input,Select,Form,FormItem,InputNumber,DatePicker,TreeSelect,RadioButton,RadioGroup, type RadioChangeEvent,Switch } from 'ant-design-vue'
import { compileText,execFun } from './core'
import { GuPubSub } from 'gaius-utils'
import _ from 'lodash'
const createUIControl =  (formData:Obj<any>,key:string,type:ControlType,ctx:any,component?:Obj<any>) =>{
    let Node 
    switch (type) {
        case 'string':
            Node = h(Input,{
                ...component,
                value:formData[key],
                onChange:(e:Event)=>{
                    formData[key] = (e.target as HTMLInputElement).value
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
        case 'radio':
            Node = h(RadioGroup,{
                ...component,
                value:formData[key],
                onChange:(e:RadioChangeEvent)=>{
                    formData[key] = e.target!.value
                    ctx.pubSub.onPublish(key)
                }
            },(ctx.options[key] || []).map((item:any)=>{
                return h(RadioButton,{
                    value:item.value,
                    key:item.value
                },item.label)
            }))
            break;
        case 'switch':
            Node = h(Switch,{
                checked:formData[key],
                onChange(value:any){
                    formData[key] = value
                    ctx.pubSub.onPublish(key)
                }
            })
            break;
        default:
            Node = h(Input,{
                ...component,
                value:formData[key],
                onChange:(e:Event)=>{
                    formData[key] = (e.target as HTMLInputElement).value
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
        const itemProps = _.cloneDeep(component)
        Reflect.deleteProperty(itemProps,'onChange')
        if(!ctx.registeredComponents[name]){
            throw new Error(`${name} is not registered,provide('registeredComponents','${name}',Component)`)
        }
        childrenNode = h(ctx.registeredComponents[name],{
            ...itemProps,
            formData,
            value:formData[key],
            onChange:(value:any)=>{
                formData[key] = value
                ctx.pubSub.onPublish(key)
                if(component.onChange){
                   try {
                     component.onChange(value,formData,key)
                   } catch (error:any) {
                        throw new Error(error)
                   }
                }
            }
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
        const registeredComponents = inject('registeredComponents')
        const options = ref<Obj<any>>({})
        const needOptions =  Object.entries(properties.value).filter(([,propItem])=> {
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
            const [pKey,propItem] =  Object.entries(properties.value).find(([propKey])=>key == propKey)!
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
            pubSub,
            registeredComponents
        }
    },
    render : (ctx:any)=>{
        return  h(Form,{...ctx.layout},
         [...Object.entries(ctx.properties as Obj<SchemaProperties>).map(  ([key,propItem]:[string,SchemaProperties])=>  createSchemaFormItem(ctx.formData,key,propItem,ctx))]
        )
    }
}
export default SchemaForm