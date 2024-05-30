import{f as C}from"./form-5nZ0ggrj.js";import{d as J,aF as W,r as m,S as X,b as K,F as n,M as p,g as t,H as e,N as c,V as P,I as g,G as u,R as x,$ as Q,W as w,aH as Y,aE as Z,X as tt}from"./index-DBvavrl4.js";import{C as et,_ as ot,a as nt,d as at}from"./index-D3tz_IuI.js";import{D as lt}from"./DownloadOutlined-N5V36vUL.js";import{E as st}from"./EditOutlined-Djw7tftz.js";import{I as it,_ as rt,B as ct,F as _t}from"./index-DAGcGbMr.js";import{I as mt}from"./index-BxU6gPb3.js";import{T as pt}from"./index-Gnlru6qg.js";import{_ as ut,a as dt}from"./index-BacOjwHg.js";import{S as ft}from"./SwapOutlined-BENC58zi.js";import{D as yt}from"./DeleteOutlined-C8A3Lx6s.js";import{_ as kt}from"./index-DQoTxR5n.js";import{_ as gt}from"./index-DUQh8Act.js";import"./index-DgqE6CCS.js";import"./initDefaultProps-B16bGYVp.js";import"./index-WcLF7Acp.js";import"./PlusOutlined-DLOqF6K1.js";import"./index-CJPtdA_V.js";import"./FolderOutlined-BWfFzhXv.js";import"./index-GBZWbRmY.js";import"./index-OgT7q4Df.js";import"./useBreakpoint-CMuEWdAM.js";import"./index-sDrP8k2S.js";import"./ActionButton-Cdk-Q_Nl.js";import"./useDestroyed-DivsZDkl.js";const vt={class:"form"},ht={class:"tools"},Ct={key:1},xt={key:0,class:"contain"},wt=J({__name:"FormList",setup(bt){const b=W(),R=m([{title:"id",key:"id",dataIndex:"id"},{title:"表单名称",key:"name",dataIndex:"name"},{title:"预览图",key:"img",dataIndex:"img",width:150},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action"}]),_=X({keyword:"",pageNumber:1,pageSize:10}),d=m([]),F=m(0),I=m(!1),N=m(),S=()=>{var a;(a=N.value)==null||a.resetFields(),y()},f=m("table"),A=()=>{f.value=="table"?f.value="visual":f.value="table"},y=()=>{I.value=!0,C.getList(_).then(a=>{const{code:l,data:i}=a;l==200&&(d.value=i.data,F.value=i.total),I.value=!1})},H=()=>{b.push({path:"/low-code/form"})},T=a=>{b.push({path:"/low-code/form",query:{id:a}})},$=a=>{C.remove(a).then(l=>{const{code:i}=l;i==200&&y()})},D=(a,l)=>{C.getTemplate(a).then(i=>{const{code:v,data:k,msg:r}=i;v==200&&Y(k,l,"vue")})};return K(()=>{y()}),(a,l)=>{const i=it,v=rt,k=ot,r=ct,M=nt,U=_t,h=et,j=Z,B=mt,E=kt,q=at,L=pt,O=gt,z=ut,G=dt;return n(),p("div",vt,[t(h,{class:"search-area"},{default:e(()=>[t(U,{ref_key:"searchFormRef",ref:N,model:_,onFinish:y},{default:e(()=>[t(M,{gutter:24},{default:e(()=>[t(k,{span:4},{default:e(()=>[t(v,{label:"表单名称",name:"keyword"},{default:e(()=>[t(i,{value:_.keyword,"onUpdate:value":l[0]||(l[0]=o=>_.keyword=o)},null,8,["value"])]),_:1})]),_:1}),t(k,{span:4,style:{"text-align":"right"}},{default:e(()=>[t(r,{type:"primary","html-type":"submit"},{default:e(()=>[c("搜索")]),_:1}),t(r,{style:{margin:"0 8px"},onClick:S},{default:e(()=>[c(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(h,null,{default:e(()=>[P("div",ht,[t(r,{type:"primary",onClick:H},{default:e(()=>[c("新增")]),_:1}),t(r,{onClick:A,type:"link",style:{float:"right"}},{default:e(()=>[t(g(ft))]),_:1})]),d.value.length===0?(n(),u(j,{key:0})):(n(),p("div",Ct,[f.value=="visual"?(n(),p("div",xt,[(n(!0),p(x,null,Q(d.value,o=>(n(),u(h,{hoverable:!0,key:o.id},{cover:e(()=>[t(B,{src:o.img,height:"130px"},null,8,["src"])]),actions:e(()=>[t(g(lt),{key:"download",onClick:s=>D(o.id,o.name),title:"下载"},null,8,["onClick"]),t(g(st),{key:"edit",title:"编辑",onClick:s=>T(o.id)},null,8,["onClick"]),t(E,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:s=>$(o.id)},{default:e(()=>[t(g(yt),{key:"delete",title:"删除"})]),_:2},1032,["onConfirm"])]),default:e(()=>[t(q,{title:o.name,description:o.description},null,8,["title","description"])]),_:2},1024))),128))])):(n(),u(z,{key:1,columns:R.value,"data-source":d.value,pagination:!1,scroll:{y:470}},{bodyCell:e(({column:o,record:s})=>[o.key=="status"?(n(),p(x,{key:0},[s.status?(n(),u(L,{key:0,color:"#87d068"},{default:e(()=>[c("启用")]),_:1})):(n(),u(L,{key:1,color:"#f50"},{default:e(()=>[c("停用")]),_:1}))],64)):w("",!0),o.key=="action"?(n(),p(x,{key:1},[t(r,{type:"link",onClick:V=>D(s.id,s.name)},{default:e(()=>[c("下载")]),_:2},1032,["onClick"]),t(O,{type:"vertical"}),t(r,{type:"link",onClick:V=>T(s.id)},{default:e(()=>[c("编辑")]),_:2},1032,["onClick"]),t(O,{type:"vertical"}),t(E,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:V=>$(s.id)},{default:e(()=>[t(r,{type:"link",danger:""},{default:e(()=>[c("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):w("",!0),o.key=="img"?(n(),u(B,{key:2,src:s.img,height:"100px",width:"100%"},null,8,["src"])):w("",!0)]),_:1},8,["columns","data-source"]))])),t(G,{style:{display:"flex","justify-content":"flex-end"},current:_.pageNumber,"onUpdate:current":l[1]||(l[1]=o=>_.pageNumber=o),total:F.value,"show-less-items":""},null,8,["current","total"])]),_:1})])}}}),Pt=tt(wt,[["__scopeId","data-v-f144c530"]]);export{Pt as default};
