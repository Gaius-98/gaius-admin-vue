import{a as D}from"./table-DB9fWxSG.js";import{d as J,aD as K,r as u,Q,b as Y,D as a,I as p,g as e,F as t,M as l,S as H,G as g,E as d,K as v,Y as P,U as h,aC as W,V as X}from"./index-BKVUJ49Y.js";import{C as Z,b as ee}from"./ActionButton-CJJ0zyet.js";import{I as te,_ as oe,B as ae,F as ne}from"./index-BHY8-qA4.js";import{T as se}from"./index-KTZ4ZaWk.js";import{I as le}from"./index-w_usrKqC.js";import{S as ie,D as _e}from"./DeleteOutlined-DGgL8aQX.js";import{E as ce}from"./EditOutlined-C1RIpRoH.js";import{_ as re,a as ue}from"./index-DRFPdzkk.js";import{_ as pe}from"./index-DRUVA7Oe.js";import{_ as de}from"./index-OY7l33W6.js";import{_ as me,a as fe}from"./index-BjNiSnK7.js";import"./index-C6L_XfkU.js";import"./index-CzOiOUBF.js";import"./PlusOutlined-B1JrIy6C.js";import"./FolderOutlined-BRoMlcnB.js";const ye={class:"table"},ke={class:"tools"},ge={key:1},ve={key:0,class:"contain"},he=J({__name:"TableList",setup(be){const b=K(),E=u([{title:"表格名称",key:"name",dataIndex:"name"},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"备注",key:"description",dataIndex:"description"},{title:"操作",key:"action",dataIndex:"action"}]),i=Q({keyword:"",pageNumber:1,pageSize:10}),m=u([]),x=u(0),C=u(!1),w=u(),L=()=>{var n;(n=w.value)==null||n.resetFields(),y()},f=u("table"),V=()=>{f.value=="table"?f.value="visual":f.value="table"},y=()=>{C.value=!0,D.getList(i).then(n=>{const{code:s,data:_}=n;s==200&&(m.value=_.data,x.value=_.total),C.value=!1})},O=()=>{b.push({path:"/low-code/table"})},I=n=>{b.push({path:"/low-code/table",query:{id:n}})},T=n=>{D.remove(n).then(s=>{const{code:_}=s;_==200&&y()})};return Y(()=>{y()}),(n,s)=>{const _=te,S=oe,F=re,c=ae,$=ue,R=ne,k=Z,U=W,N=pe,M=ee,B=se,j=de,q=le,z=me,A=fe;return a(),p("div",ye,[e(k,{class:"search-area"},{default:t(()=>[e(R,{ref_key:"searchFormRef",ref:w,model:i,onFinish:y},{default:t(()=>[e($,{gutter:24},{default:t(()=>[e(F,{span:4},{default:t(()=>[e(S,{label:"表格名称",name:"keyword"},{default:t(()=>[e(_,{value:i.keyword,"onUpdate:value":s[0]||(s[0]=o=>i.keyword=o)},null,8,["value"])]),_:1})]),_:1}),e(F,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(c,{type:"primary","html-type":"submit"},{default:t(()=>[l("搜索")]),_:1}),e(c,{style:{margin:"0 8px"},onClick:L},{default:t(()=>[l(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(k,null,{default:t(()=>[H("div",ke,[e(c,{type:"primary",onClick:O},{default:t(()=>[l("新增")]),_:1}),e(c,{onClick:V,type:"link",style:{float:"right"}},{default:t(()=>[e(g(ie))]),_:1})]),m.value.length===0?(a(),d(U,{key:0})):(a(),p("div",ge,[f.value=="visual"?(a(),p("div",ve,[(a(!0),p(v,null,P(m.value,o=>(a(),d(k,{hoverable:!0,key:o.id},{actions:t(()=>[e(g(ce),{key:"edit",title:"编辑",onClick:r=>I(o.id)},null,8,["onClick"]),e(N,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:r=>T(o.id)},{default:t(()=>[e(g(_e),{key:"delete",title:"删除"})]),_:2},1032,["onConfirm"])]),default:t(()=>[e(M,{title:o.name,description:o.description},null,8,["title","description"])]),_:2},1024))),128))])):(a(),d(z,{key:1,columns:E.value,"data-source":m.value,pagination:!1,scroll:{y:470}},{bodyCell:t(({column:o,record:r})=>[o.key=="status"?(a(),p(v,{key:0},[r.status?(a(),d(B,{key:0,color:"#87d068"},{default:t(()=>[l("启用")]),_:1})):(a(),d(B,{key:1,color:"#f50"},{default:t(()=>[l("停用")]),_:1}))],64)):h("",!0),o.key=="action"?(a(),p(v,{key:1},[e(c,{type:"link",onClick:G=>I(r.id)},{default:t(()=>[l("编辑")]),_:2},1032,["onClick"]),e(j,{type:"vertical"}),e(N,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:G=>T(r.id)},{default:t(()=>[e(c,{type:"link",danger:""},{default:t(()=>[l("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):h("",!0),o.key=="img"?(a(),d(q,{key:2,src:r.img,height:"100px",width:"100%"},null,8,["src"])):h("",!0)]),_:1},8,["columns","data-source"]))])),e(A,{style:{display:"flex","justify-content":"flex-end"},current:i.pageNumber,"onUpdate:current":s[1]||(s[1]=o=>i.pageNumber=o),total:x.value,"show-less-items":""},null,8,["current","total"])]),_:1})])}}}),Ue=X(he,[["__scopeId","data-v-62db91aa"]]);export{Ue as default};
