import type { VisualComp, TransformNode } from '@/model'
import { ViewCompNode } from './ViewCompNode'
export const getGroupCompInitInfo = (data: VisualComp[]) => {
  let minLeft: number | null = null
  let minTop: number | null = null
  let maxRight = 0
  let maxBottom = 0
  data.forEach((item) => {
    minLeft = minLeft == null ? item.position.left : Math.min(minLeft, item.position.left)
    minTop = minTop == null ? item.position.top : Math.min(minTop, item.position.top)
    maxRight = Math.max(maxRight, item.position.left + item.size.width)
    maxBottom = Math.max(maxBottom, item.position.top + item.size.height)
  })
  return {
    left: minLeft!,
    top: minTop!,
    width: maxRight - minLeft!,
    height: maxBottom - minTop!
  }
}
export const createGroup = (data: VisualComp[]) => {
  const { left, top, width, height } = getGroupCompInitInfo(data)
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
    data: data.map((compNode) => {
      return {
        ...compNode,
        position: {
          left: compNode.position.left - left,
          top: compNode.position.top - top
        }
      }
    })
  }
  return group
}

export const releaseGroup = (groupData: VisualComp) => {
  const {
    position: { left, top }
  } = groupData
  return groupData.props!.data.map((comp: VisualComp) => {
    comp.position.left = Number(comp.position.left) + left
    comp.position.top = Number(comp.position.top) + top
    return comp
  })
}
export const scaleGroupChildren = (raw: TransformNode, data: TransformNode, comp: VisualComp) => {
  const { height: rawHeight, width: rawWidth } = raw
  const { height: height, width: width } = data
  const scaleXPercent = (width - rawWidth) / rawWidth
  const scaleYPercent = (height - rawHeight) / rawHeight
  const comps = comp.props!.data as VisualComp[]
  comp.props!.data = comps.map((comp) => {
    return {
      ...comp,
      position: {
        left: (comp.position.left * (1 + scaleXPercent)).toFixed(2),
        top: (comp.position.top * (1 + scaleYPercent)).toFixed(2)
      },
      size: {
        width: (comp.size.width * (1 + scaleXPercent)).toFixed(2),
        height: (comp.size.height * (1 + scaleYPercent)).toFixed(2)
      }
    }
  })
  return comp
}
