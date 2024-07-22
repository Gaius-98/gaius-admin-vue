import {v4 as uuid} from 'uuid'
import ViewCompInfo from './ViewCompInfo'
import {cloneDeep} from 'lodash-es'
export class ViewCompNode {
    name:string='组件'
    id:string
    type:string
    tag:string
    icon:string
    props?:Record<string,any>
    style?:Record<string,any>
    formId:string=''
    position:{
        top:number,
        left:number
    } = {
        top:0,
        left:0
    }
    size:{
        width:number,
        height:number
    } = {
        width:0,
        height:0
    }
    constructor(type:string,id?:string){
        this.id = id || uuid()
        this.type = type
        const info = ViewCompInfo.find(item=>item.type === type)
        const cloneInfo = cloneDeep(info)!
        if(info){
        this.tag = cloneInfo.tag
        this.props = cloneInfo.props
        this.name=cloneInfo.name
        this.style=cloneInfo.style
        this.icon = cloneInfo.icon
        this.formId=cloneInfo.formId!
        }else{
            this.tag = 'div'
            this.icon='icon'
        }
    }

}