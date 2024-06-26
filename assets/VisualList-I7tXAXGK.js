import{ae as d,d as H,au as K,r as m,$ as P,b as W,J as n,L as p,g as t,M as e,O as c,a2 as X,Q as h,ax as Y,U as f,R as w,a9 as tt,ay as et,az as at,a3 as b,aw as ot,a4 as nt,Z as lt,a5 as st,at as it,ah as rt,a6 as ut}from"./index-CmoA2GoM.js";import{C as ct,_ as _t,a as dt,d as mt}from"./index-BYYPv9R6.js";import{I as pt}from"./index-BNogs11-.js";import{T as ft}from"./index-C77IJ5XB.js";import{E as yt}from"./EditOutlined-eAw7p3z4.js";import{_ as gt}from"./index-THRGanZW.js";import{_ as kt}from"./index-BaP_Y1ip.js";import{_ as vt,a as ht}from"./index-woSD_LuY.js";import"./index-BwFnDrPT.js";import"./shallowequal-CXRC2vtV.js";import"./index-C_nXjZ5F.js";import"./EllipsisOutlined-DtdE-UCA.js";import"./Dropdown-Fepi5Sce.js";import"./index-DjDljBPH.js";import"./index-DOeiordB.js";import"./eagerComputed-BQoZFmQi.js";import"./index-ne0OhhUv.js";import"./FolderOutlined-DEA9pzxq.js";import"./useBreakpoint-C5eZpta0.js";import"./index-BLePi1r2.js";import"./index-B9RKzsGX.js";import"./dropdown-DEmaYe-4.js";const I={getList:o=>d({method:"get",url:"form/list",params:o}),getDetail:o=>d({method:"get",url:"form/detail",params:{id:o}}),remove:o=>d({method:"get",url:"form/remove",params:{id:o}}),add:o=>d({method:"post",url:"form/add",data:o}),update:o=>d({method:"post",url:"form/update",data:o}),getTemplate:o=>d({method:"get",url:"/form/template",params:{id:o}})},xt={class:"visual"},Ct={class:"tools"},wt={key:1},bt={key:0,class:"contain"},It=H({__name:"VisualList",setup(o){const T=K(),q=m([{title:"id",key:"id",dataIndex:"id"},{title:"可视化名称",key:"name",dataIndex:"name"},{title:"预览图",key:"img",dataIndex:"img",width:150},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action"}]),_=P({keyword:"",pageNumber:1,pageSize:10}),y=m([]),F=m(0),L=m(!1),N=m(),z=()=>{var l;(l=N.value)==null||l.resetFields(),k()},g=m("table"),J=()=>{g.value=="table"?g.value="visual":g.value="table"},k=()=>{L.value=!0,I.getList(_).then(l=>{const{code:s,data:r}=l;s==200&&(y.value=r.data,F.value=r.total),L.value=!1})},M=()=>{T.push({path:"/low-code/visual"})},$=l=>{T.push({path:"/low-code/visual",query:{id:l}})},D=l=>{I.remove(l).then(s=>{const{code:r}=s;r==200&&k()})},O=(l,s)=>{I.getTemplate(l).then(r=>{const{code:x,data:v,msg:u}=r;x==200&&ot(v,s,"vue")})};return W(()=>{k()}),(l,s)=>{const r=pt,x=nt,v=_t,u=lt,S=dt,j=st,C=ct,A=it,V=rt,B=gt,Q=mt,E=ft,R=kt,Z=vt,G=ht;return n(),p("div",xt,[t(C,{class:"search-area"},{default:e(()=>[t(j,{ref_key:"searchFormRef",ref:N,model:_,onFinish:k},{default:e(()=>[t(S,{gutter:24},{default:e(()=>[t(v,{span:4},{default:e(()=>[t(x,{label:"可视化名称",name:"keyword"},{default:e(()=>[t(r,{value:_.keyword,"onUpdate:value":s[0]||(s[0]=a=>_.keyword=a)},null,8,["value"])]),_:1})]),_:1}),t(v,{span:4,style:{"text-align":"right"}},{default:e(()=>[t(u,{type:"primary","html-type":"submit"},{default:e(()=>[c("搜索")]),_:1}),t(u,{style:{margin:"0 8px"},onClick:z},{default:e(()=>[c(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(C,null,{default:e(()=>[X("div",Ct,[t(u,{type:"primary",onClick:M},{default:e(()=>[c("新增")]),_:1}),t(u,{onClick:J,type:"link",style:{float:"right"}},{default:e(()=>[t(h(Y))]),_:1})]),y.value.length===0?(n(),f(A,{key:0})):(n(),p("div",wt,[g.value=="visual"?(n(),p("div",bt,[(n(!0),p(w,null,tt(y.value,a=>(n(),f(C,{hoverable:!0,key:a.id},{cover:e(()=>[t(V,{src:a.img,height:"130px"},null,8,["src"])]),actions:e(()=>[t(h(et),{key:"download",onClick:i=>O(a.id,a.name),title:"下载"},null,8,["onClick"]),t(h(yt),{key:"edit",title:"编辑",onClick:i=>$(a.id)},null,8,["onClick"]),t(B,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:i=>D(a.id)},{default:e(()=>[t(h(at),{key:"delete",title:"删除"})]),_:2},1032,["onConfirm"])]),default:e(()=>[t(Q,{title:a.name,description:a.description},null,8,["title","description"])]),_:2},1024))),128))])):(n(),f(Z,{key:1,columns:q.value,"data-source":y.value,pagination:!1,scroll:{y:470}},{bodyCell:e(({column:a,record:i})=>[a.key=="status"?(n(),p(w,{key:0},[i.status?(n(),f(E,{key:0,color:"#87d068"},{default:e(()=>[c("启用")]),_:1})):(n(),f(E,{key:1,color:"#f50"},{default:e(()=>[c("停用")]),_:1}))],64)):b("",!0),a.key=="action"?(n(),p(w,{key:1},[t(u,{type:"link",onClick:U=>O(i.id,i.name)},{default:e(()=>[c("下载")]),_:2},1032,["onClick"]),t(R,{type:"vertical"}),t(u,{type:"link",onClick:U=>$(i.id)},{default:e(()=>[c("编辑")]),_:2},1032,["onClick"]),t(R,{type:"vertical"}),t(B,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:U=>D(i.id)},{default:e(()=>[t(u,{type:"link",danger:""},{default:e(()=>[c("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):b("",!0),a.key=="img"?(n(),f(V,{key:2,src:i.img,height:"100px",width:"100%"},null,8,["src"])):b("",!0)]),_:1},8,["columns","data-source"]))])),t(G,{style:{display:"flex","justify-content":"flex-end"},current:_.pageNumber,"onUpdate:current":s[1]||(s[1]=a=>_.pageNumber=a),total:F.value,"show-less-items":""},null,8,["current","total"])]),_:1})])}}}),Ht=ut(It,[["__scopeId","data-v-a88b3a4c"]]);export{Ht as default};
