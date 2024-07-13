import{t as V}from"./table-IrS62KYg.js";import{u as W}from"./vue-router-AHw_0--4.js";import{g as G,h as K,i as P,j as Q,B as X,k as Y,F as Z,H as tt,m as et,L as ot,T as nt,c as at,I as st,n as lt,N as it}from"./ant-design-vue-B0DkA0I7.js";import{s as rt,$ as ct,N as pt}from"./@ant-design-B99nr-O7.js";import{d as _t,r as _,a as ut,o as mt,R as n,S as u,c as t,a3 as e,J as l,U as dt,u as v,a2 as m,F as h,W as ft,ad as b}from"./@vue-DSvEQE6c.js";import{b as yt}from"./index-JBZPYCR-.js";import"./@babel-BiFW4_mA.js";import"./lodash-es-PU94eZQX.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./dayjs-X-x4l2Bb.js";import"./@ctrl-DOFZgDuz.js";import"./throttle-debounce-CUWDS_la.js";import"./async-validator-DKvM95Vc.js";import"./scroll-into-view-if-needed-SxpMpKWN.js";import"./compute-scroll-into-view-1gs_hJI2.js";import"./vue-types-C5fUfLeo.js";import"./dom-align-CRCehRfe.js";import"./@emotion-BtrR-yrm.js";import"./stylis-DsJDcYJc.js";import"./pinia-D8eArRbh.js";/* empty css                      */import"./axios-B4uVmeYG.js";import"./js-cookie-Cz0CWeBA.js";import"./@vueuse-DIvJCaS9.js";import"./uuid-CQkTLCs1.js";import"./vue-codemirror-BztKek48.js";import"./codemirror-D0DHGrOV.js";import"./@codemirror-DKOYo8Op.js";import"./@lezer-CciglqRQ.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";const kt={class:"table"},gt={class:"tools"},vt={key:1},ht={key:0,class:"contain"},bt=_t({__name:"TableList",setup(xt){const k=W(),O=_([{title:"id",key:"id",dataIndex:"id"},{title:"表格名称",key:"name",dataIndex:"name"},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"备注",key:"description",dataIndex:"description"},{title:"操作",key:"action",dataIndex:"action"}]),c=ut({keyword:"",pageNumber:1,pageSize:10}),d=_([]),x=_(0),C=_(!1),w=_(),R=()=>{var a;(a=w.value)==null||a.resetFields(),y()},f=_("table"),D=()=>{f.value=="table"?f.value="visual":f.value="table"},y=()=>{C.value=!0,V.getList(c).then(a=>{const{code:s,data:p}=a;s==200&&(d.value=p.data,x.value=p.total),C.value=!1})},E=()=>{k.push({path:"/low-code/table"})},J=a=>{k.push({path:"/low-code/preview-table",query:{id:a}})},I=a=>{k.push({path:"/low-code/table",query:{id:a}})},N=a=>{V.remove(a).then(s=>{const{code:p}=s;p==200&&y()})};return mt(()=>{y()}),(a,s)=>{const p=K,S=P,T=Q,i=X,U=Y,j=Z,g=G,q=tt,F=et,A=ot,B=nt,L=at,z=st,H=lt,M=it;return n(),u("div",kt,[t(g,{class:"search-area"},{default:e(()=>[t(j,{ref_key:"searchFormRef",ref:w,model:c,onFinish:y},{default:e(()=>[t(U,{gutter:24},{default:e(()=>[t(T,{span:4},{default:e(()=>[t(S,{label:"表格名称",name:"keyword"},{default:e(()=>[t(p,{value:c.keyword,"onUpdate:value":s[0]||(s[0]=o=>c.keyword=o)},null,8,["value"])]),_:1})]),_:1}),t(T,{span:4,style:{"text-align":"right"}},{default:e(()=>[t(i,{type:"primary","html-type":"submit"},{default:e(()=>[l("搜索")]),_:1}),t(i,{style:{margin:"0 8px"},onClick:R},{default:e(()=>[l(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(g,null,{default:e(()=>[dt("div",gt,[t(i,{type:"primary",onClick:E},{default:e(()=>[l("新增")]),_:1}),t(i,{onClick:D,type:"link",style:{float:"right"}},{default:e(()=>[t(v(rt))]),_:1})]),d.value.length===0?(n(),m(q,{key:0})):(n(),u("div",vt,[f.value=="visual"?(n(),u("div",ht,[(n(!0),u(h,null,ft(d.value,o=>(n(),m(g,{hoverable:!0,key:o.id},{actions:e(()=>[t(v(ct),{key:"edit",title:"编辑",onClick:r=>I(o.id)},null,8,["onClick"]),t(F,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:r=>N(o.id)},{default:e(()=>[t(v(pt),{key:"delete",title:"删除"})]),_:2},1032,["onConfirm"])]),default:e(()=>[t(A,{title:o.name,description:o.description},null,8,["title","description"])]),_:2},1024))),128))])):(n(),m(H,{key:1,columns:O.value,"data-source":d.value,pagination:!1,scroll:{y:470}},{bodyCell:e(({column:o,record:r})=>[o.key=="status"?(n(),u(h,{key:0},[r.status?(n(),m(B,{key:0,color:"#87d068"},{default:e(()=>[l("启用")]),_:1})):(n(),m(B,{key:1,color:"#f50"},{default:e(()=>[l("停用")]),_:1}))],64)):b("",!0),o.key=="action"?(n(),u(h,{key:1},[t(i,{type:"link",onClick:$=>J(r.id)},{default:e(()=>[l("预览")]),_:2},1032,["onClick"]),t(L,{type:"vertical"}),t(i,{type:"link",onClick:$=>I(r.id)},{default:e(()=>[l("编辑")]),_:2},1032,["onClick"]),t(L,{type:"vertical"}),t(F,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:$=>N(r.id)},{default:e(()=>[t(i,{type:"link",danger:""},{default:e(()=>[l("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):b("",!0),o.key=="img"?(n(),m(z,{key:2,src:r.img,height:"100px",width:"100%"},null,8,["src"])):b("",!0)]),_:1},8,["columns","data-source"]))])),t(M,{style:{display:"flex","justify-content":"flex-end"},current:c.pageNumber,"onUpdate:current":s[1]||(s[1]=o=>c.pageNumber=o),total:x.value,"show-less-items":""},null,8,["current","total"])]),_:1})])}}}),ee=yt(bt,[["__scopeId","data-v-d9c8043f"]]);export{ee as default};