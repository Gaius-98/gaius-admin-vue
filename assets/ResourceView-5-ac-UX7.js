import{d as P,$ as T,r as l,b as M,J as d,L as q,g as e,M as t,af as f,O as _,a2 as E,U as x,Q as J,a3 as C,a0 as b,a4 as O,Z as Q,a5 as Z,ag as j,ah as A,a6 as G}from"./index-CmoA2GoM.js";import{C as H,_ as K,a as W}from"./index-BYYPv9R6.js";import{I as X}from"./index-BNogs11-.js";import{_ as Y}from"./index-THRGanZW.js";import{_ as ee}from"./index-woSD_LuY.js";import"./index-BwFnDrPT.js";import"./shallowequal-CXRC2vtV.js";import"./index-C_nXjZ5F.js";import"./EllipsisOutlined-DtdE-UCA.js";import"./Dropdown-Fepi5Sce.js";import"./index-DjDljBPH.js";import"./index-DOeiordB.js";import"./eagerComputed-BQoZFmQi.js";import"./index-ne0OhhUv.js";import"./FolderOutlined-DEA9pzxq.js";import"./useBreakpoint-C5eZpta0.js";import"./index-BLePi1r2.js";import"./index-B9RKzsGX.js";import"./dropdown-DEmaYe-4.js";const te={class:"resource"},ae={class:"tools"},oe=P({__name:"ResourceView",setup(ne){const n=T({keyword:"",pageNumber:1,pageSize:10}),g=l([]),w=l([{title:"文件名称",key:"originalname",dataIndex:"originalname"},{title:"文件大小",key:"size",dataIndex:"size"},{title:"文件",key:"path",dataIndex:"path",width:"250px"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action"}]),m=l(!1),y=l(),I="/prod",N=()=>{var a;(a=y.value)==null||a.resetFields(),c()},h=l(0),F=()=>{n.pageNumber=1,n.pageSize=10,c()},z=a=>{const{current:o,pageSize:s}=a;n.pageNumber=o,n.pageSize=s,c()},R=a=>{const o=new FormData;o.append("file",a.file,encodeURIComponent(a.file.name)),f.add(o).then(s=>{const{code:i,data:u,msg:r}=s;i==200&&b.success(r),c()})},c=()=>{m.value=!0,f.getList(n).then(a=>{const{code:o,data:s}=a;o==200&&(g.value=s.data,h.value=s.total),m.value=!1})};M(()=>{c()});const V=async a=>{const{code:o,msg:s,data:i}=await f.remove(a.id);o==200&&(b.success(i),c())};return(a,o)=>{const s=X,i=O,u=K,r=Q,B=W,S=Z,k=H,U=j,$=A,L=Y,D=ee;return d(),q("div",te,[e(k,{class:"search-area"},{default:t(()=>[e(S,{ref_key:"searchFormRef",ref:y,model:n,onFinish:F},{default:t(()=>[e(B,{gutter:24},{default:t(()=>[e(u,{span:4},{default:t(()=>[e(i,{label:"资源名称",name:"keyword"},{default:t(()=>[e(s,{value:n.keyword,"onUpdate:value":o[0]||(o[0]=p=>n.keyword=p)},null,8,["value"])]),_:1})]),_:1}),e(u,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(r,{type:"primary","html-type":"submit"},{default:t(()=>[_("搜索")]),_:1}),e(r,{style:{margin:"0 8px"},onClick:N},{default:t(()=>[_(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(k,null,{default:t(()=>[E("div",ae,[e(U,{name:"file",accept:"image/*",customRequest:R,maxCount:"1",showUploadList:!1},{default:t(()=>[e(r,{type:"primary"},{default:t(()=>[_(" 上传")]),_:1})]),_:1})]),e(D,{loading:m.value,columns:w.value,"data-source":g.value,scroll:{y:440},onChange:z,pagination:{current:n.pageNumber,total:h.value}},{bodyCell:t(({column:p,record:v})=>[p.key=="path"?(d(),x($,{key:0,src:`${J(I)}/${v.path}`,height:"130px"},null,8,["src"])):C("",!0),p.key=="action"?(d(),x(L,{key:1,title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:se=>V(v)},{default:t(()=>[e(r,{type:"link",danger:""},{default:t(()=>[_("删除")]),_:1})]),_:2},1032,["onConfirm"])):C("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1})])}}}),Ie=G(oe,[["__scopeId","data-v-ae71c595"]]);export{Ie as default};
