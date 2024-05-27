import{t as $}from"./table-Ce98BZqw.js";import{d as K,aD as Q,r as p,Q as Y,b as H,D as n,I as u,g as t,F as e,M as l,S as P,G as v,E as d,K as h,Y as W,U as b,aC as X,V as Z}from"./index-bmd1BFpa.js";import{C as tt,_ as et,a as ot,d as nt}from"./index-CHgE4CQh.js";import{I as at,_ as st,B as lt,F as it}from"./index-ccK5NkPn.js";import{T as _t}from"./index--nVjuQ_Y.js";import{I as rt}from"./index-BK2y0-Qq.js";import{S as ct}from"./SwapOutlined-TcDKE0fZ.js";import{E as pt}from"./EditOutlined-B2j8SXNC.js";import{D as ut}from"./DeleteOutlined-CY1dZxNL.js";import{_ as dt}from"./index-Dqd5qtTE.js";import{_ as mt}from"./index-Cq9WKtO8.js";import{_ as ft,a as yt}from"./index-DtiKgdxz.js";import"./index-CwNMyvuk.js";import"./index-Dt-PmioO.js";import"./PlusOutlined-N7c1luKh.js";import"./index-CKZFhYXA.js";import"./FolderOutlined-Ngg1a1-D.js";import"./index-D38tsNJ2.js";import"./ActionButton-Cn8iBn1C.js";import"./useDestroyed-C_53bEg2.js";import"./index-Cg1wufYO.js";import"./useBreakpoint-HC6Nlkir.js";const kt={class:"table"},gt={class:"tools"},vt={key:1},ht={key:0,class:"contain"},bt=K({__name:"TableList",setup(Ct){const k=Q(),E=p([{title:"id",key:"id",dataIndex:"id"},{title:"表格名称",key:"name",dataIndex:"name"},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"备注",key:"description",dataIndex:"description"},{title:"操作",key:"action",dataIndex:"action"}]),r=Y({keyword:"",pageNumber:1,pageSize:10}),m=p([]),C=p(0),x=p(!1),w=p(),L=()=>{var a;(a=w.value)==null||a.resetFields(),y()},f=p("table"),O=()=>{f.value=="table"?f.value="visual":f.value="table"},y=()=>{x.value=!0,$.getList(r).then(a=>{const{code:s,data:c}=a;s==200&&(m.value=c.data,C.value=c.total),x.value=!1})},S=()=>{k.push({path:"/low-code/table"})},R=a=>{k.push({path:"/low-code/preview-table",query:{id:a}})},I=a=>{k.push({path:"/low-code/table",query:{id:a}})},T=a=>{$.remove(a).then(s=>{const{code:c}=s;c==200&&y()})};return H(()=>{y()}),(a,s)=>{const c=at,U=st,F=et,i=lt,q=ot,A=it,g=tt,J=X,N=dt,M=nt,B=_t,D=mt,j=rt,z=ft,G=yt;return n(),u("div",kt,[t(g,{class:"search-area"},{default:e(()=>[t(A,{ref_key:"searchFormRef",ref:w,model:r,onFinish:y},{default:e(()=>[t(q,{gutter:24},{default:e(()=>[t(F,{span:4},{default:e(()=>[t(U,{label:"表格名称",name:"keyword"},{default:e(()=>[t(c,{value:r.keyword,"onUpdate:value":s[0]||(s[0]=o=>r.keyword=o)},null,8,["value"])]),_:1})]),_:1}),t(F,{span:4,style:{"text-align":"right"}},{default:e(()=>[t(i,{type:"primary","html-type":"submit"},{default:e(()=>[l("搜索")]),_:1}),t(i,{style:{margin:"0 8px"},onClick:L},{default:e(()=>[l(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(g,null,{default:e(()=>[P("div",gt,[t(i,{type:"primary",onClick:S},{default:e(()=>[l("新增")]),_:1}),t(i,{onClick:O,type:"link",style:{float:"right"}},{default:e(()=>[t(v(ct))]),_:1})]),m.value.length===0?(n(),d(J,{key:0})):(n(),u("div",vt,[f.value=="visual"?(n(),u("div",ht,[(n(!0),u(h,null,W(m.value,o=>(n(),d(g,{hoverable:!0,key:o.id},{actions:e(()=>[t(v(pt),{key:"edit",title:"编辑",onClick:_=>I(o.id)},null,8,["onClick"]),t(N,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:_=>T(o.id)},{default:e(()=>[t(v(ut),{key:"delete",title:"删除"})]),_:2},1032,["onConfirm"])]),default:e(()=>[t(M,{title:o.name,description:o.description},null,8,["title","description"])]),_:2},1024))),128))])):(n(),d(z,{key:1,columns:E.value,"data-source":m.value,pagination:!1,scroll:{y:470}},{bodyCell:e(({column:o,record:_})=>[o.key=="status"?(n(),u(h,{key:0},[_.status?(n(),d(B,{key:0,color:"#87d068"},{default:e(()=>[l("启用")]),_:1})):(n(),d(B,{key:1,color:"#f50"},{default:e(()=>[l("停用")]),_:1}))],64)):b("",!0),o.key=="action"?(n(),u(h,{key:1},[t(i,{type:"link",onClick:V=>R(_.id)},{default:e(()=>[l("预览")]),_:2},1032,["onClick"]),t(D,{type:"vertical"}),t(i,{type:"link",onClick:V=>I(_.id)},{default:e(()=>[l("编辑")]),_:2},1032,["onClick"]),t(D,{type:"vertical"}),t(N,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:V=>T(_.id)},{default:e(()=>[t(i,{type:"link",danger:""},{default:e(()=>[l("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):b("",!0),o.key=="img"?(n(),d(j,{key:2,src:_.img,height:"100px",width:"100%"},null,8,["src"])):b("",!0)]),_:1},8,["columns","data-source"]))])),t(G,{style:{display:"flex","justify-content":"flex-end"},current:r.pageNumber,"onUpdate:current":s[1]||(s[1]=o=>r.pageNumber=o),total:C.value,"show-less-items":""},null,8,["current","total"])]),_:1})])}}}),Gt=Z(bt,[["__scopeId","data-v-d9c8043f"]]);export{Gt as default};
