import{t as $}from"./table-SJEw5qfa.js";import{d as K,aD as Q,r as u,Q as Y,b as H,D as n,I as p,g as e,F as t,M as l,S as P,G as v,E as d,K as h,Y as W,U as b,aC as X,V as Z}from"./index-Dr_xJf3r.js";import{C as ee,_ as te,a as oe,d as ne}from"./index-P7Rk9JyE.js";import{I as ae,_ as se,B as le,F as ie}from"./index-DJUJLJKr.js";import{T as _e}from"./index-BnqKMOzu.js";import{I as ce}from"./index-DiyaNr1_.js";import{S as re}from"./SwapOutlined-BT5bNgxg.js";import{E as ue}from"./EditOutlined-DlJ6rBPo.js";import{D as pe}from"./DeleteOutlined-OZk--kP_.js";import{_ as de}from"./index-uRdxTZZZ.js";import{_ as me}from"./index-C9PWjmrG.js";import{_ as fe,a as ye}from"./index-CXXXuKYx.js";import"./index-Bt-QeFPZ.js";import"./index-CRD48DaG.js";import"./PlusOutlined-CeoWGJA8.js";import"./FolderOutlined-BQRPZZT_.js";import"./ActionButton-CBJGH2HZ.js";const ke={class:"table"},ge={class:"tools"},ve={key:1},he={key:0,class:"contain"},be=K({__name:"TableList",setup(Ce){const k=Q(),E=u([{title:"表格名称",key:"name",dataIndex:"name"},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"备注",key:"description",dataIndex:"description"},{title:"操作",key:"action",dataIndex:"action"}]),c=Y({keyword:"",pageNumber:1,pageSize:10}),m=u([]),C=u(0),x=u(!1),w=u(),L=()=>{var a;(a=w.value)==null||a.resetFields(),y()},f=u("table"),O=()=>{f.value=="table"?f.value="visual":f.value="table"},y=()=>{x.value=!0,$.getList(c).then(a=>{const{code:s,data:r}=a;s==200&&(m.value=r.data,C.value=r.total),x.value=!1})},S=()=>{k.push({path:"/low-code/table"})},R=a=>{k.push({path:"/low-code/preview-table",query:{id:a}})},I=a=>{k.push({path:"/low-code/table",query:{id:a}})},T=a=>{$.remove(a).then(s=>{const{code:r}=s;r==200&&y()})};return H(()=>{y()}),(a,s)=>{const r=ae,U=se,F=te,i=le,q=oe,A=ie,g=ee,J=X,N=de,M=ne,B=_e,D=me,j=ce,z=fe,G=ye;return n(),p("div",ke,[e(g,{class:"search-area"},{default:t(()=>[e(A,{ref_key:"searchFormRef",ref:w,model:c,onFinish:y},{default:t(()=>[e(q,{gutter:24},{default:t(()=>[e(F,{span:4},{default:t(()=>[e(U,{label:"表格名称",name:"keyword"},{default:t(()=>[e(r,{value:c.keyword,"onUpdate:value":s[0]||(s[0]=o=>c.keyword=o)},null,8,["value"])]),_:1})]),_:1}),e(F,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(i,{type:"primary","html-type":"submit"},{default:t(()=>[l("搜索")]),_:1}),e(i,{style:{margin:"0 8px"},onClick:L},{default:t(()=>[l(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(g,null,{default:t(()=>[P("div",ge,[e(i,{type:"primary",onClick:S},{default:t(()=>[l("新增")]),_:1}),e(i,{onClick:O,type:"link",style:{float:"right"}},{default:t(()=>[e(v(re))]),_:1})]),m.value.length===0?(n(),d(J,{key:0})):(n(),p("div",ve,[f.value=="visual"?(n(),p("div",he,[(n(!0),p(h,null,W(m.value,o=>(n(),d(g,{hoverable:!0,key:o.id},{actions:t(()=>[e(v(ue),{key:"edit",title:"编辑",onClick:_=>I(o.id)},null,8,["onClick"]),e(N,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:_=>T(o.id)},{default:t(()=>[e(v(pe),{key:"delete",title:"删除"})]),_:2},1032,["onConfirm"])]),default:t(()=>[e(M,{title:o.name,description:o.description},null,8,["title","description"])]),_:2},1024))),128))])):(n(),d(z,{key:1,columns:E.value,"data-source":m.value,pagination:!1,scroll:{y:470}},{bodyCell:t(({column:o,record:_})=>[o.key=="status"?(n(),p(h,{key:0},[_.status?(n(),d(B,{key:0,color:"#87d068"},{default:t(()=>[l("启用")]),_:1})):(n(),d(B,{key:1,color:"#f50"},{default:t(()=>[l("停用")]),_:1}))],64)):b("",!0),o.key=="action"?(n(),p(h,{key:1},[e(i,{type:"link",onClick:V=>R(_.id)},{default:t(()=>[l("预览")]),_:2},1032,["onClick"]),e(D,{type:"vertical"}),e(i,{type:"link",onClick:V=>I(_.id)},{default:t(()=>[l("编辑")]),_:2},1032,["onClick"]),e(D,{type:"vertical"}),e(N,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:V=>T(_.id)},{default:t(()=>[e(i,{type:"link",danger:""},{default:t(()=>[l("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):b("",!0),o.key=="img"?(n(),d(j,{key:2,src:_.img,height:"100px",width:"100%"},null,8,["src"])):b("",!0)]),_:1},8,["columns","data-source"]))])),e(G,{style:{display:"flex","justify-content":"flex-end"},current:c.pageNumber,"onUpdate:current":s[1]||(s[1]=o=>c.pageNumber=o),total:C.value,"show-less-items":""},null,8,["current","total"])]),_:1})])}}}),Ae=Z(be,[["__scopeId","data-v-2a21c1dc"]]);export{Ae as default};