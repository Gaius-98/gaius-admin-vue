import{a as v}from"./notice-eqoHyXhp.js";import{c as G,_ as J}from"./index-UYYxOZ8-.js";import{g as Z,m as ee,r as i,n as O,M as te,o as f,q as V,l as a,w as o,e as B,W as ae,X as oe,Y as ne,K as g,Q as le,$ as h,h as w,F as se,a0 as ie,a1 as ue,a2 as ce,au as de,a3 as re,a4 as me,a6 as pe,a7 as _e,an as ve}from"./.pnpm-CQm76_te.js";const fe={class:"notice"},ge={class:"tools"},ye=Z({__name:"NoticeView",setup(ke){const n=ee({keyword:"",pageNumber:1,pageSize:10,startTime:"",endTime:""}),r=i(""),I=()=>{r.value?(n.startTime=r.value[0],n.endTime=r.value[1]):(n.startTime="",n.endTime="")},T=i([]),R=i([{title:"标题",key:"title",dataIndex:"title",width:"150px"},{title:"内容",key:"content",dataIndex:"content",width:"400px",ellipsis:!0},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),k=i(!1),x=i(),U=()=>{var t;(t=x.value)==null||t.resetFields(),n.startTime="",n.endTime="",r.value="",m()},F=i(0),Y=()=>{n.pageNumber=1,n.pageSize=10,m()},$=t=>{const{current:e,pageSize:l}=t;n.pageNumber=e,n.pageSize=l,m()},m=()=>{k.value=!0,v.getList(n).then(t=>{const{code:e,data:l}=t;e==200&&(T.value=l.data,F.value=l.total),k.value=!1})},N=i([]),q=i({});O(()=>{m(),G.getDict(["configType"]).then(t=>{const{code:e,data:l,msg:u}=t;e==200&&(N.value=l.configType,q.value=N.value.reduce((y,d)=>(y[d.value]=d.label,y),{}))})});const p=i(!1),c=i({title:"",content:""}),_=i("add"),L=te(()=>({add:"新增通知",edit:"编辑通知"})[_.value]),C=i(),P=()=>{_.value="add",p.value=!0,c.value={title:"",content:""}},j=async t=>{const{code:e,data:l}=await v.getDetail(t.id);e==200&&(c.value=l,_.value="edit",p.value=!0)},E=async t=>{const{code:e,msg:l,data:u}=await v.remove(t.id);e==200&&(B.success(u),m())},D=()=>{var t;(t=C.value)==null||t.resetFields()},H=()=>{var t;(t=C.value)==null||t.validate().then(()=>{let e;_.value=="add"?e=v.add:e=v.update,e(c.value).then(l=>{const{code:u}=l;u==200&&(B.success(_.value=="add"?"新增成功":"编辑成功"),m()),D(),p.value=!1})})};return O(()=>{}),(t,e)=>{const l=ue,u=ce,y=de,d=re,S=me,z=ae,A=pe,K=_e,Q=ve,W=oe,b=ne("has-perm");return f(),V("div",fe,[a(z,{class:"search-area"},{default:o(()=>[a(S,{ref_key:"searchFormRef",ref:x,model:n,layout:"inline",onFinish:Y},{default:o(()=>[a(u,{label:"关键字",prop:"keyword"},{default:o(()=>[a(l,{value:n.keyword,"onUpdate:value":e[0]||(e[0]=s=>n.keyword=s)},null,8,["value"])]),_:1}),a(u,{label:"日期范围"},{default:o(()=>[a(y,{value:r.value,"onUpdate:value":e[1]||(e[1]=s=>r.value=s),showTime:!0,valueFormat:"YYYY-MM-DD HH:mm:ss",onChange:e[2]||(e[2]=s=>I())},null,8,["value"])]),_:1}),a(u,null,{default:o(()=>[a(d,{type:"primary","html-type":"submit"},{default:o(()=>[g("搜索")]),_:1}),a(d,{style:{margin:"0 8px"},onClick:U},{default:o(()=>[g(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(z,null,{default:o(()=>[le("div",ge,[h((f(),w(d,{type:"primary",onClick:P},{default:o(()=>[g("新增")]),_:1})),[[b,"system:notice:add"]])]),a(K,{loading:k.value,columns:R.value,"data-source":T.value,scroll:{y:560},onChange:$,pagination:{current:n.pageNumber,total:F.value,showSizeChanger:!0,pageSize:n.pageSize}},{bodyCell:o(({column:s,record:M})=>[s.key=="action"?(f(),V(se,{key:0},[h((f(),w(d,{type:"link",onClick:X=>j(M)},{default:o(()=>[g("编辑")]),_:2},1032,["onClick"])),[[b,"system:notice:update"]]),a(A,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:X=>E(M)},{default:o(()=>[h((f(),w(d,{type:"link",danger:""},{default:o(()=>[g("删除")]),_:1})),[[b,"system:notice:remove"]])]),_:2},1032,["onConfirm"])],64)):ie("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),a(W,{open:p.value,"onUpdate:open":e[5]||(e[5]=s=>p.value=s),onOk:H,title:L.value,onCancel:D},{default:o(()=>[a(S,{model:c.value,"label-col":{span:8},ref_key:"modalFormRef",ref:C},{default:o(()=>[a(u,{label:"标题",required:"",prop:"title"},{default:o(()=>[a(l,{value:c.value.title,"onUpdate:value":e[3]||(e[3]=s=>c.value.title=s)},null,8,["value"])]),_:1}),a(u,{label:"内容",required:"",prop:"title"},{default:o(()=>[a(Q,{value:c.value.content,"onUpdate:value":e[4]||(e[4]=s=>c.value.content=s),rows:5},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),we=J(ye,[["__scopeId","data-v-dd27a587"]]);export{we as default};
