import{f as C}from"./form-xuNZB4c7.js";import{d as Z,aJ as G,r as u,$ as H,b as K,J as n,L as d,g as e,M as t,O as _,a2 as P,Q as g,aM as W,U as p,R as x,a9 as X,aN as Y,aO as ee,a3 as w,aL as te,a4 as oe,Z as ne,a5 as ae,aI as le,ah as se,a6 as ie}from"./index-UcyKtJhV.js";import{C as ce,_ as _e,a as re,d as ue}from"./index-DdDnDLv5.js";import{E as de}from"./EditOutlined-CVQ2WFPN.js";import{I as pe}from"./index-RpgdHoyq.js";import{T as me}from"./index-B0m6czRM.js";import{_ as fe,a as ye}from"./index-DgwEnZmz.js";import{_ as ke}from"./index-OyENwZ8E.js";import{_ as ge}from"./index-BgjFvMef.js";import"./index-D8lGRPz2.js";import"./index-CCkp0GpB.js";import"./EllipsisOutlined-DCXt9jPE.js";import"./index-PrskqlXj.js";import"./index-Blk_YMO7.js";import"./FolderOutlined-BCA1edsU.js";import"./useBreakpoint-D4tBTyuq.js";import"./index-BR60m0r6.js";import"./index-ChbQcKRP.js";const ve={class:"form"},he={class:"tools"},Ce={key:1},xe={key:0,class:"contain"},we=Z({__name:"FormList",setup(be){const b=G(),V=u([{title:"id",key:"id",dataIndex:"id"},{title:"表单名称",key:"name",dataIndex:"name"},{title:"预览图",key:"img",dataIndex:"img",width:150},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action"}]),r=H({keyword:"",pageNumber:1,pageSize:10}),m=u([]),I=u(0),F=u(!1),N=u(),J=()=>{var a;(a=N.value)==null||a.resetFields(),y()},f=u("table"),M=()=>{f.value=="table"?f.value="visual":f.value="table"},y=()=>{F.value=!0,C.getList(r).then(a=>{const{code:l,data:i}=a;l==200&&(m.value=i.data,I.value=i.total),F.value=!1})},U=()=>{b.push({path:"/low-code/form"})},T=a=>{b.push({path:"/low-code/form",query:{id:a}})},$=a=>{C.remove(a).then(l=>{const{code:i}=l;i==200&&y()})},L=(a,l)=>{C.getTemplate(a).then(i=>{const{code:v,data:k,msg:c}=i;v==200&&te(k,l,"vue")})};return K(()=>{y()}),(a,l)=>{const i=pe,v=oe,k=_e,c=ne,A=re,S=ae,h=ce,j=le,O=se,B=ke,q=ue,D=me,E=ge,z=fe,Q=ye;return n(),d("div",ve,[e(h,{class:"search-area"},{default:t(()=>[e(S,{ref_key:"searchFormRef",ref:N,model:r,onFinish:y},{default:t(()=>[e(A,{gutter:24},{default:t(()=>[e(k,{span:4},{default:t(()=>[e(v,{label:"表单名称",name:"keyword"},{default:t(()=>[e(i,{value:r.keyword,"onUpdate:value":l[0]||(l[0]=o=>r.keyword=o)},null,8,["value"])]),_:1})]),_:1}),e(k,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(c,{type:"primary","html-type":"submit"},{default:t(()=>[_("搜索")]),_:1}),e(c,{style:{margin:"0 8px"},onClick:J},{default:t(()=>[_(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(h,null,{default:t(()=>[P("div",he,[e(c,{type:"primary",onClick:U},{default:t(()=>[_("新增")]),_:1}),e(c,{onClick:M,type:"link",style:{float:"right"}},{default:t(()=>[e(g(W))]),_:1})]),m.value.length===0?(n(),p(j,{key:0})):(n(),d("div",Ce,[f.value=="visual"?(n(),d("div",xe,[(n(!0),d(x,null,X(m.value,o=>(n(),p(h,{hoverable:!0,key:o.id},{cover:t(()=>[e(O,{src:o.img,height:"130px"},null,8,["src"])]),actions:t(()=>[e(g(Y),{key:"download",onClick:s=>L(o.id,o.name),title:"下载"},null,8,["onClick"]),e(g(de),{key:"edit",title:"编辑",onClick:s=>T(o.id)},null,8,["onClick"]),e(B,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:s=>$(o.id)},{default:t(()=>[e(g(ee),{key:"delete",title:"删除"})]),_:2},1032,["onConfirm"])]),default:t(()=>[e(q,{title:o.name,description:o.description},null,8,["title","description"])]),_:2},1024))),128))])):(n(),p(z,{key:1,columns:V.value,"data-source":m.value,pagination:!1,scroll:{y:470}},{bodyCell:t(({column:o,record:s})=>[o.key=="status"?(n(),d(x,{key:0},[s.status?(n(),p(D,{key:0,color:"#87d068"},{default:t(()=>[_("启用")]),_:1})):(n(),p(D,{key:1,color:"#f50"},{default:t(()=>[_("停用")]),_:1}))],64)):w("",!0),o.key=="action"?(n(),d(x,{key:1},[e(c,{type:"link",onClick:R=>L(s.id,s.name)},{default:t(()=>[_("下载")]),_:2},1032,["onClick"]),e(E,{type:"vertical"}),e(c,{type:"link",onClick:R=>T(s.id)},{default:t(()=>[_("编辑")]),_:2},1032,["onClick"]),e(E,{type:"vertical"}),e(B,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:R=>$(s.id)},{default:t(()=>[e(c,{type:"link",danger:""},{default:t(()=>[_("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):w("",!0),o.key=="img"?(n(),p(O,{key:2,src:s.img,height:"100px",width:"100%"},null,8,["src"])):w("",!0)]),_:1},8,["columns","data-source"]))])),e(Q,{style:{display:"flex","justify-content":"flex-end"},current:r.pageNumber,"onUpdate:current":l[1]||(l[1]=o=>r.pageNumber=o),total:I.value,"show-less-items":""},null,8,["current","total"])]),_:1})])}}}),qe=ie(we,[["__scopeId","data-v-f144c530"]]);export{qe as default};
