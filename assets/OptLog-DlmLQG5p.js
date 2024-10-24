import{r as K,c as W,_ as X}from"./index-UYYxOZ8-.js";import{g as j,m as A,r as i,n as G,o as d,q as D,l as a,w as e,W as J,X as Q,K as t,h as f,T as o,a0 as x,F as Z,a1 as ee,a2 as ae,au as te,a3 as le,a4 as oe,a5 as ne,a7 as se,ar as ue,as as re}from"./.pnpm-CQm76_te.js";const pe={getList:C=>K({method:"get",url:"operationlog/list",params:C})},ie={class:"optLog"},ce=j({__name:"OptLog",setup(C){const s=A({keyword:"",startTime:"",endTime:"",pageNumber:1,pageSize:20}),v=i(""),w=i([]),q=i([{title:"操作用户",key:"username",dataIndex:"username"},{title:"ip地址",key:"ip",dataIndex:"ip"},{title:"地址",key:"location",dataIndex:"location"},{title:"操作模块",key:"optModule",dataIndex:"optModule"},{title:"操作类型",key:"optType",dataIndex:"optType"},{title:"操作结果",key:"resStatus",dataIndex:"resStatus"},{title:"响应时间",key:"resTime",dataIndex:"resTime"},{title:"操作时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),h=i(!1),M=i(),P=()=>{var p;(p=M.value)==null||p.resetFields(),k()},F=i(0),B=()=>{s.pageNumber=1,s.pageSize=20,k()},U=()=>{v.value?(s.startTime=v.value[0],s.endTime=v.value[1]):(s.startTime="",s.endTime="")},V=p=>{const{current:u,pageSize:_}=p;s.pageNumber=u,s.pageSize=_,k()},k=()=>{h.value=!0,pe.getList(s).then(p=>{const{code:u,data:_}=p;u==200&&(w.value=_.data,F.value=_.total),h.value=!1})},l=i({}),I=i(!1),Y=p=>{l.value=p,I.value=!0},L=i([]),g=i(new Map),O=["green","cyan","red","pink","orange","blue","purple"];return G(()=>{k(),W.getDict(["optType"]).then(p=>{const{code:u,data:_,msg:T}=p;u==200&&(L.value=_.optType,L.value.forEach((b,y)=>{g.value.set(b.value,{label:b.label,color:O[y]})}))})}),(p,u)=>{const _=ee,T=ae,b=te,y=le,R=oe,N=J,m=ne,E=se,n=ue,H=re,$=Q;return d(),D("div",ie,[a(N,{class:"search-area"},{default:e(()=>[a(R,{ref_key:"searchFormRef",ref:M,model:s,layout:"inline",onFinish:B},{default:e(()=>[a(T,{label:"用户名",name:"keyword"},{default:e(()=>[a(_,{value:s.keyword,"onUpdate:value":u[0]||(u[0]=r=>s.keyword=r)},null,8,["value"])]),_:1}),a(T,{label:"操作日期"},{default:e(()=>[a(b,{value:v.value,"onUpdate:value":u[1]||(u[1]=r=>v.value=r),showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss",onChange:u[2]||(u[2]=r=>U())},null,8,["value"])]),_:1}),a(T,null,{default:e(()=>[a(y,{type:"primary","html-type":"submit"},{default:e(()=>[t("搜索")]),_:1}),a(y,{style:{margin:"0 8px"},onClick:P},{default:e(()=>[t(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(N,null,{default:e(()=>[a(E,{loading:h.value,columns:q.value,"data-source":w.value,scroll:{y:600},onChange:V,pagination:{current:s.pageNumber,total:F.value,showSizeChanger:!0,pageSize:s.pageSize}},{bodyCell:e(({column:r,record:c})=>{var z;return[r.key=="optType"?(d(),f(m,{key:0,color:(z=g.value.get(c.optType))==null?void 0:z.color},{default:e(()=>{var S;return[t(o((S=g.value.get(c.optType))==null?void 0:S.label),1)]}),_:2},1032,["color"])):x("",!0),r.key=="resTime"?(d(),f(m,{key:1,color:parseInt(c.resTime)<500?"#87d068":"#f50"},{default:e(()=>[t(o(c.resTime),1)]),_:2},1032,["color"])):x("",!0),r.key=="resStatus"?(d(),D(Z,{key:2},[c.resStatus=="1"?(d(),f(m,{key:0,color:"#87d068"},{default:e(()=>[t("成功")]),_:1})):(d(),f(m,{key:1,color:"#f50"},{default:e(()=>[t("失败")]),_:1}))],64)):x("",!0),r.key=="action"?(d(),f(y,{key:3,type:"link",onClick:S=>Y(c)},{default:e(()=>[t("查看")]),_:2},1032,["onClick"])):x("",!0)]}),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),a($,{open:I.value,"onUpdate:open":u[3]||(u[3]=r=>I.value=r),title:"查看详情",footer:null,width:"1000px"},{default:e(()=>[a(H,{column:2},{default:e(()=>[a(n,{label:"操作用户"},{default:e(()=>[t(o(l.value.username),1)]),_:1}),a(n,{label:"操作IP"},{default:e(()=>[t(o(l.value.ip),1)]),_:1}),a(n,{label:"操作地点"},{default:e(()=>[t(o(l.value.location),1)]),_:1}),a(n,{label:"操作时间"},{default:e(()=>[t(o(l.value.createTime),1)]),_:1}),a(n,{label:"请求类型"},{default:e(()=>[t(o(l.value.reqType),1)]),_:1}),a(n,{label:"请求地址"},{default:e(()=>[t(o(l.value.reqUrl),1)]),_:1}),a(n,{label:"请求参数"},{default:e(()=>[t(o(l.value.reqParam),1)]),_:1}),a(n,{label:"模块名称"},{default:e(()=>[t(o(l.value.moduleName),1)]),_:1}),a(n,{label:"方法名称"},{default:e(()=>[t(o(l.value.funcName),1)]),_:1}),a(n,{label:"操作模块"},{default:e(()=>[t(o(l.value.optModule),1)]),_:1}),a(n,{label:"操作类型"},{default:e(()=>{var r;return[a(m,{color:(r=g.value.get(l.value.optType))==null?void 0:r.color},{default:e(()=>{var c;return[t(o((c=g.value.get(l.value.optType))==null?void 0:c.label),1)]}),_:1},8,["color"])]}),_:1}),a(n,{label:"操作结果"},{default:e(()=>[l.value.resStatus=="1"?(d(),f(m,{key:0,color:"#87d068"},{default:e(()=>[t("成功")]),_:1})):(d(),f(m,{key:1,color:"#f50"},{default:e(()=>[t("失败")]),_:1}))]),_:1}),a(n,{label:"响应时间"},{default:e(()=>[a(m,{color:parseInt(l.value.resTime)<500?"#87d068":"#f50"},{default:e(()=>[t(o(l.value.resTime),1)]),_:1},8,["color"])]),_:1}),a(n,{label:"请求结果",span:4},{default:e(()=>[t(o(l.value.res),1)]),_:1}),a(n,{label:"异常信息",span:4},{default:e(()=>[t(o(l.value.errMsg),1)]),_:1})]),_:1})]),_:1},8,["open"])])}}}),me=X(ce,[["__scopeId","data-v-f0f56045"]]);export{me as default};
