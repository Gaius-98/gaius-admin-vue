import{a as C}from"./form-DSyz4n1u.js";import{d as M,aF as Q,r as u,a1 as G,b as P,D as n,E as d,g as e,J as t,S as _,V as W,K as g,I as p,N as x,Q as X,a3 as w,aH as Y,aE as Z,F as ee}from"./index-5uVo7gFH.js";import{C as te,_ as oe,a as ne,d as ae}from"./index-C3PzdEku.js";import{D as se}from"./DownloadOutlined-5X1n1Czq.js";import{E as le}from"./EditOutlined-D2kDSJ8n.js";import{S as ie,D as ce}from"./DeleteOutlined-DDcEZl5K.js";import{I as _e,_ as re,B as ue,F as de}from"./index-CpuAoWon.js";import{I as pe}from"./index-CpEpho7f.js";import{T as me}from"./index-Bigpcaj9.js";import{_ as fe,a as ye,b as ke}from"./index-nftqSiLH.js";import{_ as ge}from"./index-BB4RItaP.js";import"./index-M8iWskMh.js";import"./index-C_zJiHiZ.js";import"./EllipsisOutlined-8LHnTuO9.js";import"./ActionButton-C4aYlXiL.js";import"./PlusOutlined-Dchd30vU.js";import"./FolderOutlined-YWqvTW0i.js";const ve={class:"form"},he={class:"tools"},Ce={key:1},xe={key:0,class:"contain"},we=M({__name:"FormList",setup(be){const b=Q(),S=u([{title:"表单名称",key:"name",dataIndex:"name"},{title:"预览图",key:"img",dataIndex:"img",width:150},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"备注",key:"description",dataIndex:"description"},{title:"操作",key:"action",dataIndex:"action"}]),r=G({keyword:"",pageNumber:1,pageSize:10}),m=u([]),F=u(0),I=u(!1),D=u(),R=()=>{var a;(a=D.value)==null||a.resetFields(),y()},f=u("table"),J=()=>{f.value=="table"?f.value="visual":f.value="table"},y=()=>{I.value=!0,C.getList(r).then(a=>{const{code:s,data:i}=a;s==200&&(m.value=i.data,F.value=i.total),I.value=!1})},U=()=>{b.push({path:"/low-code/form"})},N=a=>{b.push({path:"/low-code/form",query:{id:a}})},T=a=>{C.remove(a).then(s=>{const{code:i}=s;i==200&&y()})},B=(a,s)=>{C.getTemplate(a).then(i=>{const{code:v,data:k,msg:c}=i;v==200&&Y(k,s,"vue")})};return P(()=>{y()}),(a,s)=>{const i=_e,v=re,k=oe,c=ue,j=ne,q=de,h=te,z=Z,E=pe,$=fe,A=ae,L=me,O=ge,H=ye,K=ke;return n(),d("div",ve,[e(h,{class:"search-area"},{default:t(()=>[e(q,{ref_key:"searchFormRef",ref:D,model:r,onFinish:y},{default:t(()=>[e(j,{gutter:24},{default:t(()=>[e(k,{span:4},{default:t(()=>[e(v,{label:"表单名称",name:"keyword"},{default:t(()=>[e(i,{value:r.keyword,"onUpdate:value":s[0]||(s[0]=o=>r.keyword=o)},null,8,["value"])]),_:1})]),_:1}),e(k,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(c,{type:"primary","html-type":"submit"},{default:t(()=>[_("搜索")]),_:1}),e(c,{style:{margin:"0 8px"},onClick:R},{default:t(()=>[_(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(h,null,{default:t(()=>[W("div",he,[e(c,{type:"primary",onClick:U},{default:t(()=>[_("新增")]),_:1}),e(c,{onClick:J,type:"link",style:{float:"right"}},{default:t(()=>[e(g(ie))]),_:1})]),m.value.length===0?(n(),p(z,{key:0})):(n(),d("div",Ce,[f.value=="visual"?(n(),d("div",xe,[(n(!0),d(x,null,X(m.value,o=>(n(),p(h,{hoverable:!0,key:o.id},{cover:t(()=>[e(E,{src:o.img,height:"130px"},null,8,["src"])]),actions:t(()=>[e(g(se),{key:"download",onClick:l=>B(o.id,o.name),title:"下载"},null,8,["onClick"]),e(g(le),{key:"edit",title:"编辑",onClick:l=>N(o.id)},null,8,["onClick"]),e($,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:l=>T(o.id)},{default:t(()=>[e(g(ce),{key:"delete",title:"删除"})]),_:2},1032,["onConfirm"])]),default:t(()=>[e(A,{title:o.name,description:o.description},null,8,["title","description"])]),_:2},1024))),128))])):(n(),p(H,{key:1,columns:S.value,"data-source":m.value,pagination:!1,scroll:{y:470}},{bodyCell:t(({column:o,record:l})=>[o.key=="status"?(n(),d(x,{key:0},[l.status?(n(),p(L,{key:0,color:"#87d068"},{default:t(()=>[_("启用")]),_:1})):(n(),p(L,{key:1,color:"#f50"},{default:t(()=>[_("停用")]),_:1}))],64)):w("",!0),o.key=="action"?(n(),d(x,{key:1},[e(c,{type:"link",onClick:V=>B(l.id,l.name)},{default:t(()=>[_("下载")]),_:2},1032,["onClick"]),e(O,{type:"vertical"}),e(c,{type:"link",onClick:V=>N(l.id)},{default:t(()=>[_("编辑")]),_:2},1032,["onClick"]),e(O,{type:"vertical"}),e($,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:V=>T(l.id)},{default:t(()=>[e(c,{type:"link",danger:""},{default:t(()=>[_("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):w("",!0),o.key=="img"?(n(),p(E,{key:2,src:l.img,height:"100px",width:"100%"},null,8,["src"])):w("",!0)]),_:1},8,["columns","data-source"]))])),e(K,{style:{display:"flex","justify-content":"flex-end"},current:r.pageNumber,"onUpdate:current":s[1]||(s[1]=o=>r.pageNumber=o),total:F.value,"show-less-items":""},null,8,["current","total"])]),_:1})])}}}),ze=ee(we,[["__scopeId","data-v-78cca401"]]);export{ze as default};
