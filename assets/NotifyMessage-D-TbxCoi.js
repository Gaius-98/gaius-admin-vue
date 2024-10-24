import{a as F}from"./notice-DHNX0RXk.js";import{c as O,_ as E}from"./index-c0CRmTe3.js";import{g as J,m as W,r as c,n as X,o as u,q as b,l as a,w as e,U as j,V as A,W as G,J as s,F as K,h as g,Y as T,R as m,X as Q,$ as Z,a0 as ee,at as te,a1 as ae,a2 as ne,a3 as oe,a5 as le,aq as se,ar as ie}from"./.pnpm-DNwF09EQ.js";const ce={class:"notice"},ue=["title"],re={key:2},de=J({__name:"NotifyMessage",setup(_e){const n=W({keyword:"",pageNumber:1,pageSize:10,startTime:"",endTime:""}),d=c(""),z=()=>{d.value?(n.startTime=d.value[0],n.endTime=d.value[1]):(n.startTime="",n.endTime="")},C=c([]),M=c([{title:"标题",key:"title",dataIndex:"title",width:"150px"},{title:"内容",key:"content",dataIndex:"content",width:"500px",ellipsis:!0},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"消息发送时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),w=c(!1),I=c(),V=()=>{var l;(l=I.value)==null||l.resetFields(),n.startTime="",n.endTime="",d.value="",f()},N=c(0),Y=()=>{n.pageNumber=1,n.pageSize=10,f()},B=l=>{const{current:t,pageSize:i}=l;n.pageNumber=t,n.pageSize=i,f()},f=()=>{w.value=!0,F.getNoticeList(n).then(l=>{const{code:t,data:i}=l;t==200&&(C.value=i.data,N.value=i.total),w.value=!1})},D=c([]),R=c({});X(()=>{f(),O.getDict(["configType"]).then(l=>{const{code:t,data:i,msg:y}=l;t==200&&(D.value=i.configType,R.value=D.value.reduce((k,p)=>(k[p.value]=p.label,k),{}))})});const x=c(!1),_=c({id:0,noticeId:0,recevieId:"",status:"",notice:{title:"",content:""}}),U=async l=>{const{code:t,data:i}=await F.getNoticeDetail(l.id);t==200&&(_.value=i,x.value=!0)};return(l,t)=>{const i=Z,y=ee,k=te,p=ae,$=ne,S=j,h=oe,L=le,v=se,P=ie,q=A,H=G("has-perm");return u(),b("div",ce,[a(S,{class:"search-area"},{default:e(()=>[a($,{ref_key:"searchFormRef",ref:I,model:n,layout:"inline",onFinish:Y},{default:e(()=>[a(y,{label:"关键字",prop:"keyword"},{default:e(()=>[a(i,{value:n.keyword,"onUpdate:value":t[0]||(t[0]=o=>n.keyword=o)},null,8,["value"])]),_:1}),a(y,{label:"日期范围"},{default:e(()=>[a(k,{value:d.value,"onUpdate:value":t[1]||(t[1]=o=>d.value=o),showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss",onChange:t[2]||(t[2]=o=>z())},null,8,["value"])]),_:1}),a(y,null,{default:e(()=>[a(p,{type:"primary","html-type":"submit"},{default:e(()=>[s("搜索")]),_:1}),a(p,{style:{margin:"0 8px"},onClick:V},{default:e(()=>[s(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(S,null,{default:e(()=>[a(L,{loading:w.value,columns:M.value,"data-source":C.value,scroll:{y:560},onChange:B,pagination:{current:n.pageNumber,total:N.value,showSizeChanger:!0,pageSize:n.pageSize}},{bodyCell:e(({column:o,record:r})=>[o.key=="status"?(u(),b(K,{key:0},[r.status=="1"?(u(),g(h,{key:0,color:"#87d068"},{default:e(()=>[s("已读")]),_:1})):(u(),g(h,{key:1,color:"#f50"},{default:e(()=>[s("未读")]),_:1}))],64)):T("",!0),o.key=="title"?(u(),b("div",{key:1,title:r.notice.title},m(r.notice.title),9,ue)):T("",!0),o.key=="content"?(u(),b("div",re,m(r.notice.content),1)):T("",!0),o.key=="action"?Q((u(),g(p,{key:3,type:"link",onClick:pe=>U(r)},{default:e(()=>[s("查看")]),_:2},1032,["onClick"])),[[H,"private:notice:detail"]]):T("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),a(q,{open:x.value,"onUpdate:open":t[3]||(t[3]=o=>x.value=o),title:"查看通知",footer:null,width:700,onCancel:t[4]||(t[4]=o=>f())},{default:e(()=>[a(P,{column:2},{default:e(()=>[a(v,{label:"标题",style:{"font-weight":"bold"}},{default:e(()=>[s(m(_.value.notice.title),1)]),_:1}),a(v,{label:"状态"},{default:e(()=>[_.value.status=="1"?(u(),g(h,{key:0,color:"#87d068"},{default:e(()=>[s("已读")]),_:1})):(u(),g(h,{key:1,color:"#f50"},{default:e(()=>[s("未读")]),_:1}))]),_:1}),a(v,{label:"发送人"},{default:e(()=>{var o,r;return[s(m((r=(o=_.value)==null?void 0:o.userInfo)==null?void 0:r.username),1)]}),_:1}),a(v,{label:"查看时间"},{default:e(()=>[s(m(_.value.readTime),1)]),_:1}),a(v,{label:"内容",span:2},{default:e(()=>[s(m(_.value.notice.content),1)]),_:1})]),_:1})]),_:1},8,["open"])])}}}),ge=E(de,[["__scopeId","data-v-88296c07"]]);export{ge as default};
