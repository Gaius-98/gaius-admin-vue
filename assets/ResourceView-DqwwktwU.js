import{a as g}from"./resource-CaYpRUp8.js";import{g as q,m as j,r as p,n as E,o as d,q as C,l as t,w as o,U as J,W as M,J as _,P as O,h as b,Y as y,X as T,R as W,i as X,as as Y,e as h,$ as A,a0 as G,a1 as H,a2 as K,aj as Q,ac as Z,a4 as ee,a5 as te}from"./.pnpm-CCsI2FsW.js";import{_ as ae}from"./index-Cs-9IBXQ.js";const oe={class:"resource"},ne={class:"tools"},se={key:1},ce=q({__name:"ResourceView",setup(ie){const n=j({keyword:"",pageNumber:1,pageSize:10}),k=p([]),I=p([{title:"文件名称",key:"originalname",dataIndex:"originalname",width:"300px"},{title:"缩略图",key:"img",dataIndex:"img",width:"300px"},{title:"文件大小",key:"size",dataIndex:"size",width:"120px"},{title:"地址",key:"path",dataIndex:"path"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),m=p(!1),v=p(),N=()=>{var a;(a=v.value)==null||a.resetFields(),c()},x=p(0),F=()=>{n.pageNumber=1,n.pageSize=10,c()},R=a=>{const{current:e,pageSize:s}=a;n.pageNumber=e,n.pageSize=s,c()},z=a=>{const e=new FormData;e.append("file",a.file,encodeURIComponent(a.file.name)),g.add(e).then(s=>{const{code:i,data:l,msg:f}=s;i==200&&h.success(f),c()})},c=()=>{m.value=!0,g.getList(n).then(a=>{const{code:e,data:s}=a;e==200&&(k.value=s.data,x.value=s.total),m.value=!1})};E(()=>{c()});const D=async a=>{const{code:e,msg:s,data:i}=await g.remove(a.id);e==200&&(h.success(i),c())},S=()=>{h.success("复制成功")};return(a,e)=>{const s=A,i=G,l=H,f=K,w=J,V=Q,B=Z,U=ee,$=te,L=M("copy");return d(),C("div",oe,[t(w,{class:"search-area"},{default:o(()=>[t(f,{ref_key:"searchFormRef",ref:v,layout:"inline",model:n,onFinish:F},{default:o(()=>[t(i,{label:"资源名称",prop:"keyword"},{default:o(()=>[t(s,{value:n.keyword,"onUpdate:value":e[0]||(e[0]=r=>n.keyword=r)},null,8,["value"])]),_:1}),t(i,null,{default:o(()=>[t(l,{type:"primary","html-type":"submit"},{default:o(()=>[_("搜索")]),_:1}),t(l,{style:{margin:"0 8px"},onClick:N},{default:o(()=>[_(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(w,null,{default:o(()=>[O("div",ne,[t(V,{name:"file",accept:"image/*",customRequest:z,maxCount:"1",showUploadList:!1},{default:o(()=>[t(l,{type:"primary"},{default:o(()=>[_(" 上传")]),_:1})]),_:1})]),t($,{loading:m.value,columns:I.value,"data-source":k.value,scroll:{y:560},onChange:R,pagination:{current:n.pageNumber,total:x.value}},{bodyCell:o(({column:r,record:u})=>[r.key=="img"?(d(),b(B,{key:0,src:u.path,height:"130px"},null,8,["src"])):y("",!0),r.key=="path"?T((d(),C("span",se,[_(W(u.path)+" ",1),t(X(Y),{style:{cursor:"pointer"},onClick:e[1]||(e[1]=P=>S())})])),[[L,u.path]]):y("",!0),r.key=="action"?(d(),b(U,{key:2,title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:P=>D(u)},{default:o(()=>[t(l,{type:"link",danger:""},{default:o(()=>[_("删除")]),_:1})]),_:2},1032,["onConfirm"])):y("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1})])}}}),_e=ae(ce,[["__scopeId","data-v-a8b164e3"]]);export{_e as default};
