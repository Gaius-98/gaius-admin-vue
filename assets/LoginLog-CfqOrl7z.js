import{r as I,_ as S}from"./index-UYYxOZ8-.js";import{g as z,m as F,r as l,n as N,o as Y,q as B,l as a,w as n,W as D,K as y,a1 as M,a2 as P,au as R,a3 as q,a4 as H,a7 as U}from"./.pnpm-CQm76_te.js";const V={getList:m=>I({method:"get",url:"loginlog/list",params:m})},E={class:"loginLog"},K=z({__name:"LoginLog",setup(m){const e=F({keyword:"",startTime:"",endTime:"",pageNumber:1,pageSize:20}),r=l(""),_=l([]),k=l([{title:"用户名",key:"username",dataIndex:"username"},{title:"ip地址",key:"ip",dataIndex:"ip"},{title:"地址",key:"address",dataIndex:"address"},{title:"操作系统",key:"os",dataIndex:"os"},{title:"浏览器",key:"browser",dataIndex:"browser"},{title:"登录时间",key:"createTime",dataIndex:"createTime"}]),d=l(!1),p=l(),b=()=>{var o;(o=p.value)==null||o.resetFields(),i()},g=l(0),h=()=>{e.pageNumber=1,e.pageSize=20,i()},x=()=>{r.value?(e.startTime=r.value[0],e.endTime=r.value[1]):(e.startTime="",e.endTime="")},T=o=>{const{current:t,pageSize:s}=o;e.pageNumber=t,e.pageSize=s,i()},i=()=>{d.value=!0,V.getList(e).then(o=>{const{code:t,data:s}=o;t==200&&(_.value=s.data,g.value=s.total),d.value=!1})};return N(()=>{i()}),(o,t)=>{const s=M,c=P,w=R,f=q,C=H,v=D,L=U;return Y(),B("div",E,[a(v,{class:"search-area"},{default:n(()=>[a(C,{ref_key:"searchFormRef",ref:p,model:e,layout:"inline",onFinish:h},{default:n(()=>[a(c,{label:"ip地址",name:"keyword"},{default:n(()=>[a(s,{value:e.keyword,"onUpdate:value":t[0]||(t[0]=u=>e.keyword=u)},null,8,["value"])]),_:1}),a(c,{label:"登录日期"},{default:n(()=>[a(w,{value:r.value,"onUpdate:value":t[1]||(t[1]=u=>r.value=u),showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss",onChange:t[2]||(t[2]=u=>x())},null,8,["value"])]),_:1}),a(c,null,{default:n(()=>[a(f,{type:"primary","html-type":"submit"},{default:n(()=>[y("搜索")]),_:1}),a(f,{style:{margin:"0 8px"},onClick:b},{default:n(()=>[y(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(v,null,{default:n(()=>[a(L,{loading:d.value,columns:k.value,"data-source":_.value,scroll:{y:600},onChange:T,pagination:{current:e.pageNumber,total:g.value,showSizeChanger:!0,pageSize:e.pageSize}},null,8,["loading","columns","data-source","pagination"])]),_:1})])}}}),j=S(K,[["__scopeId","data-v-38b3be7b"]]);export{j as default};
