import{a as y}from"./resource-BzOPKozt.js";import{g as O,m as T,r as _,n as X,U as Y,o as d,q as I,l as e,w as o,V as A,J as p,P as G,i as $,j as h,Y as k,X as H,R as K,as as Q,e as v,$ as W,a0 as Z,a1 as ee,a2 as te,a3 as ae,a4 as oe,aj as ne,ac as se,a5 as ce,a7 as ie}from"./.pnpm-DmAI0IVr.js";import{_ as le}from"./index-B80LQDti.js";const re={class:"resource"},_e={class:"tools"},pe={key:1},ue=O({__name:"ResourceView",setup(de){const n=T({keyword:"",pageNumber:1,pageSize:10}),x=_([]),N=_([{title:"文件名称",key:"originalname",dataIndex:"originalname",width:"300px"},{title:"缩略图",key:"img",dataIndex:"img",width:"300px"},{title:"文件大小",key:"size",dataIndex:"size",width:"120px"},{title:"地址",key:"path",dataIndex:"path"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),m=_(!1),w=_(),g="/prod",F=()=>{var t;(t=w.value)==null||t.resetFields(),c()},C=_(0),R=()=>{n.pageNumber=1,n.pageSize=10,c()},V=t=>{const{current:a,pageSize:s}=t;n.pageNumber=a,n.pageSize=s,c()},z=t=>{const a=new FormData;a.append("file",t.file,encodeURIComponent(t.file.name)),y.add(a).then(s=>{const{code:l,data:f,msg:i}=s;l==200&&v.success(i),c()})},c=()=>{m.value=!0,y.getList(n).then(t=>{const{code:a,data:s}=t;a==200&&(x.value=s.data,C.value=s.total),m.value=!1})};X(()=>{c()});const D=t=>window.location.origin+g+t,S=async t=>{const{code:a,msg:s,data:l}=await y.remove(t.id);a==200&&(v.success(l),c())},B=()=>{v.success("复制成功")};return(t,a)=>{const s=W,l=Z,f=ee,i=te,P=ae,U=oe,b=A,L=ne,j=se,q=ce,E=ie,J=Y("copy");return d(),I("div",re,[e(b,{class:"search-area"},{default:o(()=>[e(U,{ref_key:"searchFormRef",ref:w,model:n,onFinish:R},{default:o(()=>[e(P,{gutter:24},{default:o(()=>[e(f,{span:4},{default:o(()=>[e(l,{label:"资源名称",name:"keyword"},{default:o(()=>[e(s,{value:n.keyword,"onUpdate:value":a[0]||(a[0]=r=>n.keyword=r)},null,8,["value"])]),_:1})]),_:1}),e(f,{span:4,style:{"text-align":"right"}},{default:o(()=>[e(i,{type:"primary","html-type":"submit"},{default:o(()=>[p("搜索")]),_:1}),e(i,{style:{margin:"0 8px"},onClick:F},{default:o(()=>[p(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(b,null,{default:o(()=>[G("div",_e,[e(L,{name:"file",accept:"image/*",customRequest:z,maxCount:"1",showUploadList:!1},{default:o(()=>[e(i,{type:"primary"},{default:o(()=>[p(" 上传")]),_:1})]),_:1})]),e(E,{loading:m.value,columns:N.value,"data-source":x.value,scroll:{y:440},onChange:V,pagination:{current:n.pageNumber,total:C.value}},{bodyCell:o(({column:r,record:u})=>[r.key=="img"?(d(),$(j,{key:0,src:`${h(g)}${u.path}`,height:"130px"},null,8,["src"])):k("",!0),r.key=="path"?H((d(),I("span",pe,[p(K(D(u.path))+" ",1),e(h(Q),{style:{cursor:"pointer"},onClick:a[1]||(a[1]=M=>B())})])),[[J,`${h(g)}${u.path}`]]):k("",!0),r.key=="action"?(d(),$(q,{key:2,title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:M=>S(u)},{default:o(()=>[e(i,{type:"link",danger:""},{default:o(()=>[p("删除")]),_:1})]),_:2},1032,["onConfirm"])):k("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1})])}}}),ye=le(ue,[["__scopeId","data-v-806ea9b6"]]);export{ye as default};
