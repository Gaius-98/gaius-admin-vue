export interface VisualComp {
  name: string
  type: string
  id: string
  props?: Record<string, any>
  style?: Record<string, any>
  tag: string
  position: {
    top: number
    left: number
  }
  size: {
    width: number
    height: number
  }
  formId: string
}
export interface VisualData {
  componentData: VisualComp[]
  name?: string
  id?: string
  img?: string
  height: number
  width: number
}
export interface VisualCompNodeInfo {
  nodeKey: string
  height: number
  width: number
  top: number
  left: number
}
export interface TransformNode {
  nodeKey: string
  width: number
  height: number
  left: number
  top: number
}
