import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { cloneDeep } from 'lodash-es'
import { createGroup,releaseGroup } from '@/views/LowCode/Visual/core/calculate'

import type { VisualComp,VisualData,VisualCompNodeInfo } from '@/model'
// 快照保存的长度
const SNAPSHOTLEN = 10
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
      },
      formId:''
  })
   /**
   * 快照数据 -- 只有影响布局的操作才会保存快照
   */
  const snapshotData = ref<any[][]>([])
  /**
   * 当前快照idx
   */
  const curSnapshotIdx = ref(0)
  /**
   * 保存快照
   */
  const setSnapshot = () => {
    snapshotData.value[curSnapshotIdx.value++] = cloneDeep(visualData.value.componentData)
    if(snapshotData.value.length > SNAPSHOTLEN){
      snapshotData.value = snapshotData.value.slice(snapshotData.value.length - SNAPSHOTLEN)
      curSnapshotIdx.value = SNAPSHOTLEN
    }
  }
  /**
   * 撤销
   */
  const undo = () => {
    if (curSnapshotIdx.value > 0) {
      curSnapshotIdx.value--
      visualData.value.componentData = cloneDeep(snapshotData.value[curSnapshotIdx.value])
    }
  }
  /**
   * 重做
   */
  const redo = () => {
    if (curSnapshotIdx.value < snapshotData.value.length - 1) {
      curSnapshotIdx.value++
      visualData.value.componentData = cloneDeep(snapshotData.value[curSnapshotIdx.value])
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
    onClickComp(item)
    setSnapshot()
  }
  /**
   * 更新组件
   */
  const updateComp = (item: VisualComp) => {
    const idx = visualData.value.componentData.findIndex(e => e.id === item.id)
    if (idx != -1) {
        visualData.value.componentData[idx] = item
        setSnapshot()
    }
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

  // 范围选中
  const  frameSelection = ref<string[]>([])
  const addGroup = () => {
    if (frameSelection.value.length) {
      const data = visualData.value.componentData.filter((item) =>
        frameSelection.value.includes(item.id)
      )
      const newGroup = createGroup(data)
      data.forEach((item) => {
        removeComp(item)
      })
      addComp(newGroup)
      clearFrameSelection()
    }
  }
  const reduceGroup = () =>{
   const newCompList =  releaseGroup(curCompData.value)
   removeComp(curCompData.value)
   if(newCompList){
      newCompList.map((comp:VisualComp)=>{
        addComp(comp)
      })
   }
   
  }
  const clearFrameSelection = () =>{
    frameSelection.value = []
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
    snapshotData,
    curSnapshotIdx,
    updateComp,
    frameSelection,
    addGroup,
    reduceGroup
  }
})
