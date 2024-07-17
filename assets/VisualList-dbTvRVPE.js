import{r as c,e as K,b as P}from"./index-nCmImmF1.js";import{u as Q}from"./vue-router-AHw_0--4.js";import{g as X,h as Y,i as Z,j as tt,B as et,k as ot,F as nt,H as at,I as lt,m as st,L as it,T as rt,c as ut,n as mt,N as pt}from"./ant-design-vue-CPw5FL5U.js";import{s as ct,O as dt,$ as _t,N as ft}from"./@ant-design-B99nr-O7.js";import{d as gt,r as d,a as yt,o as kt,R as l,S as _,c as t,a3 as e,J as m,U as vt,u as h,a2 as f,F as w,W as ht,ad as b}from"./@vue-DSvEQE6c.js";import"./pinia-D8eArRbh.js";/* empty css                      */import"./axios-B4uVmeYG.js";import"./js-cookie-Cz0CWeBA.js";import"./@vueuse-DIvJCaS9.js";import"./uuid-CQkTLCs1.js";import"./vue-codemirror-BztKek48.js";import"./codemirror-D0DHGrOV.js";import"./@codemirror-DKOYo8Op.js";import"./@lezer-CciglqRQ.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./@babel-BiFW4_mA.js";import"./lodash-es-PU94eZQX.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./dayjs-X-x4l2Bb.js";import"./@ctrl-DOFZgDuz.js";import"./throttle-debounce-CUWDS_la.js";import"./async-validator-DKvM95Vc.js";import"./scroll-into-view-if-needed-SxpMpKWN.js";import"./compute-scroll-into-view-1gs_hJI2.js";import"./vue-types-C5fUfLeo.js";import"./dom-align-CRCehRfe.js";import"./@emotion-BtrR-yrm.js";import"./stylis-DsJDcYJc.js";const F={getList:n=>c({method:"get",url:"form/list",params:n}),getDetail:n=>c({method:"get",url:"form/detail",params:{id:n}}),remove:n=>c({method:"get",url:"form/remove",params:{id:n}}),add:n=>c({method:"post",url:"form/add",data:n}),update:n=>c({method:"post",url:"form/update",data:n}),getTemplate:n=>c({method:"get",url:"/form/template",params:{id:n}})},Ct={class:"visual"},xt={class:"tools"},wt={key:1},bt={key:0,class:"contain"},Ft=gt({__name:"VisualList",setup(n){const I=Q(),U=d([{title:"id",key:"id",dataIndex:"id"},{title:"可视化名称",key:"name",dataIndex:"name"},{title:"预览图",key:"img",dataIndex:"img",width:150},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action"}]),p=yt({keyword:"",pageNumber:1,pageSize:10}),y=d([]),N=d(0),T=d(!1),$=d(),j=()=>{var s;(s=$.value)==null||s.resetFields(),g()},k=d("table"),q=()=>{k.value=="table"?k.value="visual":k.value="table"},g=()=>{T.value=!0,F.getList(p).then(s=>{const{code:a,data:r}=s;a==200&&(y.value=r.data,N.value=r.total),T.value=!1})},J=()=>{I.push({path:"/low-code/visual"})},L=s=>{I.push({path:"/low-code/visual",query:{id:s}})},B=s=>{F.remove(s).then(a=>{const{code:r}=a;r==200&&g()})},D=(s,a)=>{F.getTemplate(s).then(r=>{const{code:C,data:v,msg:u}=r;C==200&&K(v,a,"vue")})};return kt(()=>{g()}),(s,a)=>{const r=Y,C=Z,v=tt,u=et,z=ot,A=nt,x=X,H=at,O=lt,V=st,M=it,R=rt,E=ut,W=mt,G=pt;return l(),_("div",Ct,[t(x,{class:"search-area"},{default:e(()=>[t(A,{ref_key:"searchFormRef",ref:$,model:p,onFinish:g},{default:e(()=>[t(z,{gutter:24},{default:e(()=>[t(v,{span:4},{default:e(()=>[t(C,{label:"可视化名称",name:"keyword"},{default:e(()=>[t(r,{value:p.keyword,"onUpdate:value":a[0]||(a[0]=o=>p.keyword=o)},null,8,["value"])]),_:1})]),_:1}),t(v,{span:4,style:{"text-align":"right"}},{default:e(()=>[t(u,{type:"primary","html-type":"submit"},{default:e(()=>[m("搜索")]),_:1}),t(u,{style:{margin:"0 8px"},onClick:j},{default:e(()=>[m(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(x,null,{default:e(()=>[vt("div",xt,[t(u,{type:"primary",onClick:J},{default:e(()=>[m("新增")]),_:1}),t(u,{onClick:q,type:"link",style:{float:"right"}},{default:e(()=>[t(h(ct))]),_:1})]),y.value.length===0?(l(),f(H,{key:0})):(l(),_("div",wt,[k.value=="visual"?(l(),_("div",bt,[(l(!0),_(w,null,ht(y.value,o=>(l(),f(x,{hoverable:!0,key:o.id},{cover:e(()=>[t(O,{src:o.img,height:"130px"},null,8,["src"])]),actions:e(()=>[t(h(dt),{key:"download",onClick:i=>D(o.id,o.name),title:"下载"},null,8,["onClick"]),t(h(_t),{key:"edit",title:"编辑",onClick:i=>L(o.id)},null,8,["onClick"]),t(V,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:i=>B(o.id)},{default:e(()=>[t(h(ft),{key:"delete",title:"删除"})]),_:2},1032,["onConfirm"])]),default:e(()=>[t(M,{title:o.name,description:o.description},null,8,["title","description"])]),_:2},1024))),128))])):(l(),f(W,{key:1,columns:U.value,"data-source":y.value,pagination:!1,scroll:{y:470}},{bodyCell:e(({column:o,record:i})=>[o.key=="status"?(l(),_(w,{key:0},[i.status?(l(),f(R,{key:0,color:"#87d068"},{default:e(()=>[m("启用")]),_:1})):(l(),f(R,{key:1,color:"#f50"},{default:e(()=>[m("停用")]),_:1}))],64)):b("",!0),o.key=="action"?(l(),_(w,{key:1},[t(u,{type:"link",onClick:S=>D(i.id,i.name)},{default:e(()=>[m("下载")]),_:2},1032,["onClick"]),t(E,{type:"vertical"}),t(u,{type:"link",onClick:S=>L(i.id)},{default:e(()=>[m("编辑")]),_:2},1032,["onClick"]),t(E,{type:"vertical"}),t(V,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:S=>B(i.id)},{default:e(()=>[t(u,{type:"link",danger:""},{default:e(()=>[m("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):b("",!0),o.key=="img"?(l(),f(O,{key:2,src:i.img,height:"100px",width:"100%"},null,8,["src"])):b("",!0)]),_:1},8,["columns","data-source"]))])),t(G,{style:{display:"flex","justify-content":"flex-end"},current:p.pageNumber,"onUpdate:current":a[1]||(a[1]=o=>p.pageNumber=o),total:N.value,"show-less-items":"",onChange:a[2]||(a[2]=o=>g())},null,8,["current","total"])]),_:1})])}}}),ne=P(Ft,[["__scopeId","data-v-1971fd98"]]);export{ne as default};