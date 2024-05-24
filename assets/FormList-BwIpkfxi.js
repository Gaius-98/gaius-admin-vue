import{a as C}from"./form-CKeDysrh.js";import{d as Q,aC as W,r as u,S as X,b as G,D as n,E as m,g as e,J as t,Q as r,V as H,K as g,I as d,N as x,X as P,W as w,aE as Y,aB as Z,F as ee}from"./index-D85MyExI.js";import{C as te,b as oe}from"./ActionButton-BHrkLwi5.js";import{D as ne}from"./DownloadOutlined-Bq2o8LzN.js";import{E as ae}from"./EditOutlined-DxoECwPr.js";import{D as se}from"./DeleteOutlined-DNT6tArM.js";import{I as le,_ as ie,B as ce,F as re}from"./index-_GMueuJ1.js";import{I as _e}from"./index-BJ1eoDV-.js";import{T as ue}from"./index-YiWhRIN6.js";import{_ as me,a as de}from"./index-bDJ4DXBd.js";import{S as pe}from"./SwapOutlined-CbjhSaGO.js";import{_ as fe,a as ye}from"./index-Y2-JRfKg.js";import{_ as ke}from"./index-DlRTUMdb.js";import{_ as ge}from"./index-Cci9A0iV.js";import"./index-BQlVeXUd.js";import"./index-BDiK9-iU.js";import"./PlusOutlined-CMXs5pii.js";import"./FolderOutlined-DoEqKYRO.js";const ve={class:"form"},he={class:"tools"},Ce={key:1},xe={key:0,class:"contain"},we=Q({__name:"FormList",setup(be){const b=W(),S=u([{title:"表单名称",key:"name",dataIndex:"name"},{title:"预览图",key:"img",dataIndex:"img",width:150},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"备注",key:"description",dataIndex:"description"},{title:"操作",key:"action",dataIndex:"action"}]),_=X({keyword:"",pageNumber:1,pageSize:10}),p=u([]),F=u(0),I=u(!1),D=u(),R=()=>{var a;(a=D.value)==null||a.resetFields(),y()},f=u("table"),J=()=>{f.value=="table"?f.value="visual":f.value="table"},y=()=>{I.value=!0,C.getList(_).then(a=>{const{code:s,data:i}=a;s==200&&(p.value=i.data,F.value=i.total),I.value=!1})},U=()=>{b.push({path:"/low-code/form"})},N=a=>{b.push({path:"/low-code/form",query:{id:a}})},T=a=>{C.remove(a).then(s=>{const{code:i}=s;i==200&&y()})},B=(a,s)=>{C.getTemplate(a).then(i=>{const{code:v,data:k,msg:c}=i;v==200&&Y(k,s,"vue")})};return G(()=>{y()}),(a,s)=>{const i=le,v=ie,k=fe,c=ce,j=ye,q=re,h=te,z=Z,E=_e,$=ke,A=oe,L=ue,O=ge,K=me,M=de;return n(),m("div",ve,[e(h,{class:"search-area"},{default:t(()=>[e(q,{ref_key:"searchFormRef",ref:D,model:_,onFinish:y},{default:t(()=>[e(j,{gutter:24},{default:t(()=>[e(k,{span:4},{default:t(()=>[e(v,{label:"表单名称",name:"keyword"},{default:t(()=>[e(i,{value:_.keyword,"onUpdate:value":s[0]||(s[0]=o=>_.keyword=o)},null,8,["value"])]),_:1})]),_:1}),e(k,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(c,{type:"primary","html-type":"submit"},{default:t(()=>[r("搜索")]),_:1}),e(c,{style:{margin:"0 8px"},onClick:R},{default:t(()=>[r(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(h,null,{default:t(()=>[H("div",he,[e(c,{type:"primary",onClick:U},{default:t(()=>[r("新增")]),_:1}),e(c,{onClick:J,type:"link",style:{float:"right"}},{default:t(()=>[e(g(pe))]),_:1})]),p.value.length===0?(n(),d(z,{key:0})):(n(),m("div",Ce,[f.value=="visual"?(n(),m("div",xe,[(n(!0),m(x,null,P(p.value,o=>(n(),d(h,{hoverable:!0,key:o.id},{cover:t(()=>[e(E,{src:o.img,height:"130px"},null,8,["src"])]),actions:t(()=>[e(g(ne),{key:"download",onClick:l=>B(o.id,o.name),title:"下载"},null,8,["onClick"]),e(g(ae),{key:"edit",title:"编辑",onClick:l=>N(o.id)},null,8,["onClick"]),e($,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:l=>T(o.id)},{default:t(()=>[e(g(se),{key:"delete",title:"删除"})]),_:2},1032,["onConfirm"])]),default:t(()=>[e(A,{title:o.name,description:o.description},null,8,["title","description"])]),_:2},1024))),128))])):(n(),d(K,{key:1,columns:S.value,"data-source":p.value,pagination:!1,scroll:{y:470}},{bodyCell:t(({column:o,record:l})=>[o.key=="status"?(n(),m(x,{key:0},[l.status?(n(),d(L,{key:0,color:"#87d068"},{default:t(()=>[r("启用")]),_:1})):(n(),d(L,{key:1,color:"#f50"},{default:t(()=>[r("停用")]),_:1}))],64)):w("",!0),o.key=="action"?(n(),m(x,{key:1},[e(c,{type:"link",onClick:V=>B(l.id,l.name)},{default:t(()=>[r("下载")]),_:2},1032,["onClick"]),e(O,{type:"vertical"}),e(c,{type:"link",onClick:V=>N(l.id)},{default:t(()=>[r("编辑")]),_:2},1032,["onClick"]),e(O,{type:"vertical"}),e($,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:V=>T(l.id)},{default:t(()=>[e(c,{type:"link",danger:""},{default:t(()=>[r("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):w("",!0),o.key=="img"?(n(),d(E,{key:2,src:l.img,height:"100px",width:"100%"},null,8,["src"])):w("",!0)]),_:1},8,["columns","data-source"]))])),e(M,{style:{display:"flex","justify-content":"flex-end"},current:_.pageNumber,"onUpdate:current":s[1]||(s[1]=o=>_.pageNumber=o),total:F.value,"show-less-items":""},null,8,["current","total"])]),_:1})])}}}),Ae=ee(we,[["__scopeId","data-v-78cca401"]]);export{Ae as default};
