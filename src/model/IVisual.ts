export interface VisualComp {
    name:string
    label:string
    id:string
    props:Record<string,any>
    position:{
        top:number
        left:number
    }
    size:{
        width:number
        height:number
    }
}
export interface VisualData {
    componentData:VisualComp[]
    name?:string
    id?:string
    img?:string
    height:number
    width:number
}
export interface VisualCompNodeInfo {
    id:string
    height:number
    width:number
    top:number
    left:number
}