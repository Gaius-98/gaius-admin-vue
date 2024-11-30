import{a as F}from"./notice-BN9iwSHq.js";import{c as j,_ as E}from"./index-bp98ELWv.js";import{g as X,m as A,r as c,n as G,o as u,q as h,l as a,w as e,ab as H,ao as J,ac as K,a6 as s,F as Q,h as g,ad as T,O as m,L as W,X as Z,V as ee,aI as te,ai as ae,R as ne,ak as oe,aq as le,aj as se,al as ie}from"./.pnpm-CWzuy1aI.js";const ce={class:"notice"},ue=["title"],de={key:2},re=X({__name:"NotifyMessage",setup(_e){const n=A({keyword:"",pageNumber:1,pageSize:10,startTime:"",endTime:""}),r=c(""),z=()=>{r.value?(n.startTime=r.value[0],n.endTime=r.value[1]):(n.startTime="",n.endTime="")},C=c([]),M=c([{title:"标题",key:"title",dataIndex:"title",width:"150px"},{title:"内容",key:"content",dataIndex:"content",width:"500px",ellipsis:!0},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"消息发送时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),w=c(!1),I=c(),V=()=>{var l;(l=I.value)==null||l.resetFields(),n.startTime="",n.endTime="",r.value="",f()},N=c(0),B=()=>{n.pageNumber=1,n.pageSize=10,f()},L=l=>{const{current:t,pageSize:i}=l;n.pageNumber=t,n.pageSize=i,f()},f=()=>{w.value=!0,F.getNoticeList(n).then(l=>{const{code:t,data:i}=l;t==200&&(C.value=i.data,N.value=i.total),w.value=!1})},D=c([]),R=c({});G(()=>{f(),j.getDict(["configType"]).then(l=>{const{code:t,data:i,msg:y}=l;t==200&&(D.value=i.configType,R.value=D.value.reduce((k,p)=>(k[p.value]=p.label,k),{}))})});const x=c(!1),_=c({id:0,noticeId:0,recevieId:"",status:"",notice:{title:"",content:""}}),Y=async l=>{const{code:t,data:i}=await F.getNoticeDetail(l.id);t==200&&(_.value=i,x.value=!0)};return(l,t)=>{const i=Z,y=ee,k=te,p=ae,O=ne,S=H,b=oe,P=le,v=se,U=ie,$=J,q=K("has-perm");return u(),h("div",ce,[a(S,{class:"search-area"},{default:e(()=>[a(O,{ref_key:"searchFormRef",ref:I,model:n,layout:"inline",onFinish:B},{default:e(()=>[a(y,{label:"关键字",prop:"keyword"},{default:e(()=>[a(i,{value:n.keyword,"onUpdate:value":t[0]||(t[0]=o=>n.keyword=o)},null,8,["value"])]),_:1}),a(y,{label:"日期范围"},{default:e(()=>[a(k,{value:r.value,"onUpdate:value":t[1]||(t[1]=o=>r.value=o),valueFormat:"YYYY-MM-DD",onChange:t[2]||(t[2]=o=>z())},null,8,["value"])]),_:1}),a(y,null,{default:e(()=>[a(p,{type:"primary","html-type":"submit"},{default:e(()=>[s("搜索")]),_:1}),a(p,{style:{margin:"0 8px"},onClick:V},{default:e(()=>[s(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(S,null,{default:e(()=>[a(P,{loading:w.value,columns:M.value,"data-source":C.value,scroll:{y:560},onChange:L,pagination:{current:n.pageNumber,total:N.value,showSizeChanger:!0,pageSize:n.pageSize}},{bodyCell:e(({column:o,record:d})=>[o.key=="status"?(u(),h(Q,{key:0},[d.status=="1"?(u(),g(b,{key:0,color:"#87d068"},{default:e(()=>[s("已读")]),_:1})):(u(),g(b,{key:1,color:"#f50"},{default:e(()=>[s("未读")]),_:1}))],64)):T("",!0),o.key=="title"?(u(),h("div",{key:1,title:d.notice.title},m(d.notice.title),9,ue)):T("",!0),o.key=="content"?(u(),h("div",de,m(d.notice.content),1)):T("",!0),o.key=="action"?W((u(),g(p,{key:3,type:"link",onClick:pe=>Y(d)},{default:e(()=>[s("查看")]),_:2},1032,["onClick"])),[[q,"private:notice:detail"]]):T("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),a($,{open:x.value,"onUpdate:open":t[3]||(t[3]=o=>x.value=o),title:"查看通知",footer:null,width:700,onCancel:t[4]||(t[4]=o=>f())},{default:e(()=>[a(U,{column:2},{default:e(()=>[a(v,{label:"标题",style:{"font-weight":"bold"}},{default:e(()=>[s(m(_.value.notice.title),1)]),_:1}),a(v,{label:"状态"},{default:e(()=>[_.value.status=="1"?(u(),g(b,{key:0,color:"#87d068"},{default:e(()=>[s("已读")]),_:1})):(u(),g(b,{key:1,color:"#f50"},{default:e(()=>[s("未读")]),_:1}))]),_:1}),a(v,{label:"发送人"},{default:e(()=>{var o,d;return[s(m((d=(o=_.value)==null?void 0:o.userInfo)==null?void 0:d.username),1)]}),_:1}),a(v,{label:"查看时间"},{default:e(()=>[s(m(_.value.readTime),1)]),_:1}),a(v,{label:"内容",span:2},{default:e(()=>[s(m(_.value.notice.content),1)]),_:1})]),_:1})]),_:1},8,["open"])])}}}),ge=E(re,[["__scopeId","data-v-93ac4d48"]]);export{ge as default};
