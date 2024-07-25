import type { VisualComp } from "@/model"
import { ViewCompNode } from "./ViewCompNode"
export const getGroupCompInitInfo = (data:VisualComp[]) =>{
    let minLeft:number|null = null
    let minTop:number|null = null
    let maxRight = 0
    let maxBottom = 0
    data.forEach(item=>{
        minLeft =  minLeft == null ? item.position.left : Math.min(minLeft,item.position.left)
        minTop = minTop == null ? item.position.top : Math.min(minTop,item.position.top)
        maxRight = Math.max(maxRight,item.position.left + item.size.width)
        maxBottom = Math.max(maxBottom,item.position.top + item.size.height)
    })
    return {
        left:minLeft!,
        top:minTop!,
        width:maxRight - minLeft!,
        height:maxBottom - minTop!
    }
}
export const createGroup = (data:VisualComp[]) =>{
    const {left,top,width,height} = getGroupCompInitInfo(data)
    const group = new ViewCompNode('group')
    group.position = {
        top,
        left
    }
    group.size = {
        width,
        height
    }
    group.props = {
        data:data.map(compNode =>{
            return {
                ...compNode,
                position:{
                    left: compNode.position.left - left,
                    top: compNode.position.top - top
                }
            }
        })
    }
    return group
}