import{a as d,_ as P}from"./resource-tBbNUstR.js";import{C as T}from"./ActionButton-C-Y7yChP.js";import{d as E,Q as M,r as l,b as q,D as f,I as G,g as e,F as t,M as m,S as Q,E as x,G as j,U as C,R as b,V as A}from"./index-BZm-G3qC.js";import{I as H,_ as J,B as K,F as O}from"./index-3qYqREXO.js";import{I as W}from"./index-u9kbHFrM.js";import{_ as X,a as Y}from"./index-DrqEJ2vl.js";import{_ as Z}from"./index-BJ3bTzmr.js";import{_ as ee}from"./index-CGCozVeK.js";import"./index-D63AmW28.js";import"./FileTwoTone-D1QqFgSS.js";import"./DeleteOutlined-Az934RKT.js";import"./DownloadOutlined-SJU-AbcA.js";import"./index-Uecf5EQ1.js";import"./PlusOutlined-BUd1TO6A.js";import"./FolderOutlined-CDIT3Chu.js";import"./SwapOutlined-xKrs91O3.js";const te={class:"resource"},ae={class:"tools"},oe=E({__name:"ResourceView",setup(ne){const n=M({keyword:"",pageNumber:1,pageSize:10}),g=l([]),w=l([{title:"文件名称",key:"originalname",dataIndex:"originalname"},{title:"文件大小",key:"size",dataIndex:"size"},{title:"文件",key:"path",dataIndex:"path",width:"250px"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action"}]),p=l(!1),y=l(),I="/prod",F=()=>{var a;(a=y.value)==null||a.resetFields(),c()},h=l(0),N=()=>{n.pageNumber=1,n.pageSize=10,c()},R=a=>{const{current:o,pageSize:s}=a;n.pageNumber=o,n.pageSize=s,c()},V=a=>{const o=new FormData;o.append("file",a.file,encodeURIComponent(a.file.name)),d.add(o).then(s=>{const{code:i,data:u,msg:r}=s;i==200&&b.success(r),c()})},c=()=>{p.value=!0,d.getList(n).then(a=>{const{code:o,data:s}=a;o==200&&(g.value=s.data,h.value=s.total),p.value=!1})};q(()=>{c()});const z=async a=>{const{code:o,msg:s,data:i}=await d.remove(a.id);o==200&&(b.success(i),c())};return(a,o)=>{const s=H,i=J,u=X,r=K,B=Y,S=O,k=T,U=P,D=W,$=Z,L=ee;return f(),G("div",te,[e(k,{class:"search-area"},{default:t(()=>[e(S,{ref_key:"searchFormRef",ref:y,model:n,onFinish:N},{default:t(()=>[e(B,{gutter:24},{default:t(()=>[e(u,{span:4},{default:t(()=>[e(i,{label:"资源名称",name:"keyword"},{default:t(()=>[e(s,{value:n.keyword,"onUpdate:value":o[0]||(o[0]=_=>n.keyword=_)},null,8,["value"])]),_:1})]),_:1}),e(u,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(r,{type:"primary","html-type":"submit"},{default:t(()=>[m("搜索")]),_:1}),e(r,{style:{margin:"0 8px"},onClick:F},{default:t(()=>[m(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(k,null,{default:t(()=>[Q("div",ae,[e(U,{name:"file",accept:"image/*",customRequest:V,maxCount:"1",showUploadList:!1},{default:t(()=>[e(r,{type:"primary"},{default:t(()=>[m(" 上传")]),_:1})]),_:1})]),e(L,{loading:p.value,columns:w.value,"data-source":g.value,scroll:{y:440},onChange:R,pagination:{current:n.pageNumber,total:h.value}},{bodyCell:t(({column:_,record:v})=>[_.key=="path"?(f(),x(D,{key:0,src:`${j(I)}/${v.path}`,height:"130px"},null,8,["src"])):C("",!0),_.key=="action"?(f(),x($,{key:1,title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:se=>z(v)},{default:t(()=>[e(r,{type:"link",danger:""},{default:t(()=>[m("删除")]),_:1})]),_:2},1032,["onConfirm"])):C("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1})])}}}),Ce=A(oe,[["__scopeId","data-v-ae71c595"]]);export{Ce as default};
