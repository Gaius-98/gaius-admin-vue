import {v4 as uuid} from 'uuid'
import ViewCompInfo from './ViewCompInfo'
export class ViewCompNode {
    name:string='组件'
    id:string
    type:string
    tag:string
    props?:Record<string,any>
    style?:Record<string,any>
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
        if(info){
            this.tag = info.tag
            this.props = info.props
            this.name=info.name
            this.style=info.style
        }else{
            this.tag = 'div'
        }
    }
}