import{r as L,_ as S}from"./index-bp98ELWv.js";import{g as z,m as F,r as l,n as N,o as R,q as Y,l as a,w as n,ab as q,a6 as y,X as B,V as D,aI as M,ai as P,R as V,aq as U}from"./.pnpm-CWzuy1aI.js";const E={getList:m=>L({method:"get",url:"loginlog/list",params:m})},X={class:"loginLog"},$=z({__name:"LoginLog",setup(m){const e=F({keyword:"",startTime:"",endTime:"",pageNumber:1,pageSize:20}),r=l(""),_=l([]),k=l([{title:"用户名",key:"username",dataIndex:"username"},{title:"ip地址",key:"ip",dataIndex:"ip"},{title:"地址",key:"address",dataIndex:"address"},{title:"操作系统",key:"os",dataIndex:"os"},{title:"浏览器",key:"browser",dataIndex:"browser"},{title:"登录时间",key:"createTime",dataIndex:"createTime"}]),d=l(!1),p=l(),b=()=>{var o;(o=p.value)==null||o.resetFields(),i()},g=l(0),x=()=>{e.pageNumber=1,e.pageSize=20,i()},h=()=>{r.value?(e.startTime=r.value[0],e.endTime=r.value[1]):(e.startTime="",e.endTime="")},T=o=>{const{current:t,pageSize:s}=o;e.pageNumber=t,e.pageSize=s,i()},i=()=>{d.value=!0,E.getList(e).then(o=>{const{code:t,data:s}=o;t==200&&(_.value=s.data,g.value=s.total),d.value=!1})};return N(()=>{i()}),(o,t)=>{const s=B,c=D,w=M,f=P,C=V,v=q,I=U;return R(),Y("div",X,[a(v,{class:"search-area"},{default:n(()=>[a(C,{ref_key:"searchFormRef",ref:p,model:e,layout:"inline",onFinish:x},{default:n(()=>[a(c,{label:"ip地址",name:"keyword"},{default:n(()=>[a(s,{value:e.keyword,"onUpdate:value":t[0]||(t[0]=u=>e.keyword=u)},null,8,["value"])]),_:1}),a(c,{label:"登录日期"},{default:n(()=>[a(w,{value:r.value,"onUpdate:value":t[1]||(t[1]=u=>r.value=u),valueFormat:"YYYY-MM-DD",onChange:t[2]||(t[2]=u=>h())},null,8,["value"])]),_:1}),a(c,null,{default:n(()=>[a(f,{type:"primary","html-type":"submit"},{default:n(()=>[y("搜索")]),_:1}),a(f,{style:{margin:"0 8px"},onClick:b},{default:n(()=>[y(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(v,null,{default:n(()=>[a(I,{loading:d.value,columns:k.value,"data-source":_.value,scroll:{y:600},onChange:T,pagination:{current:e.pageNumber,total:g.value,showSizeChanger:!0,pageSize:e.pageSize}},null,8,["loading","columns","data-source","pagination"])]),_:1})])}}}),G=S($,[["__scopeId","data-v-99a14db4"]]);export{G as default};
