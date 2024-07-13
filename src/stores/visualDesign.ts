import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { cloneDeep } from 'lodash-es'
import type { VisualComp,VisualData,VisualCompNodeInfo } from '@/model'
export const useVisualStore = defineStore('visual', () => {
    const visualData = ref<VisualData>({
        componentData:[

        ],
        name:'',
        id:'',
        img:'',
        height:1080,
        width:1920
    })
    const curCompData = ref<VisualComp>({
        name:'',
        type:'',
        id:'',
        props:{},
        tag:'',
        position:{
            top:0,
            left:0
        },
        size:{
            width:0,
            height:0
        }
    })
   /**
   * 快照数据 -- 只有影响布局的操作才会保存快照
   */
  const snapshotData = reactive<any[][]>([])
  /**
   * 当前快照idx
   */
  const curSnapshotIdx = ref(0)
  /**
   * 保存快照
   */
  const setSnapshot = () => {
    snapshotData[curSnapshotIdx.value++] = cloneDeep(visualData.value.componentData)
  }
  /**
   * 撤销
   */
  const undo = () => {
    if (curSnapshotIdx.value > 0) {
      curSnapshotIdx.value--
      visualData.value.componentData = cloneDeep(snapshotData[curSnapshotIdx.value])
    }
  }
  /**
   * 重做
   */
  const redo = () => {
    if (curSnapshotIdx.value < snapshotData.length - 1) {
      curSnapshotIdx.value++
      visualData.value.componentData = cloneDeep(snapshotData[curSnapshotIdx.value])
    }
  }
    /**
   * 选择组件
   */
  const onClickComp = (item: VisualComp) => {
    const idx = visualData.value.componentData.findIndex(e => e.id === item.id)
    if (idx != -1) {
        curCompData.value = visualData.value.componentData[idx]
    }
  }
  /**
   *  新增组件
   */
  const addComp = (item: VisualComp) => {
    visualData.value.componentData.push(item)
    setSnapshot()
  }
  /**
   * 删除组件
   */
  const removeComp = (item: VisualComp) => {
    const idx = visualData.value.componentData.findIndex(e => e.id === item.id)
    if (idx != -1) {
        visualData.value.componentData.splice(idx, 1)
        setSnapshot()
    }
  }
  /**
   * 更新组件
   */
  const updateCompPosition = (item: VisualCompNodeInfo) => {
    const idx = visualData.value.componentData.findIndex(e => e.id === item.id)
    if (idx != -1) {
        visualData.value.componentData[idx] = {
            ...visualData.value.componentData[idx],
            position: {
                ...visualData.value.componentData[idx].position,
                top:item.top,
                left:item.left
            },
            size:{
                ...visualData.value.componentData[idx].size,
                width:item.width,
                height:item.height
            }
        }
        setSnapshot()
    }
  }
  return {
    undo,
    redo,
    setSnapshot,
    onClickComp,
    visualData,
    curCompData,
    addComp,
    removeComp,
    updateCompPosition
  }
})
