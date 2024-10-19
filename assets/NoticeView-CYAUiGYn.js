import{a as f}from"./notice-u-r88xV6.js";import{c as ee,_ as te}from"./index-CfwTnm9W.js";import{g as ae,m as ne,r as i,n as U,L as oe,U as le,o as g,q as z,l as t,w as n,e as B,V as se,W as ie,J as y,P as ce,X as w,i as x,F as ue,Y as de,$ as re,a0 as _e,a1 as pe,av as me,a2 as ve,a3 as fe,a4 as ge,K as ye,a6 as ke,a7 as be,ao as Ce}from"./.pnpm-DZa05fHr.js";const we={class:"notice"},xe={class:"tools"},Te=ae({__name:"NoticeView",setup(he){const l=ne({keyword:"",pageNumber:1,pageSize:10,startTime:"",endTime:""}),_=i(""),I=()=>{_.value?(l.startTime=_.value[0],l.endTime=_.value[1]):(l.startTime="",l.endTime="")},T=i([]),M=i([{title:"标题",key:"title",dataIndex:"title",width:"150px"},{title:"内容",key:"content",dataIndex:"content",width:"400px",ellipsis:!0},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),b=i(!1),h=i(),S=()=>{var a;(a=h.value)==null||a.resetFields(),d()},F=i(0),Y=()=>{l.pageNumber=1,l.pageSize=10,d()},L=a=>{const{current:e,pageSize:o}=a;l.pageNumber=e,l.pageSize=o,d()},d=()=>{b.value=!0,f.getList(l).then(a=>{const{code:e,data:o}=a;e==200&&(T.value=o.data,F.value=o.total),b.value=!1})},N=i([]),P=i({});U(()=>{d(),ee.getDict(["configType"]).then(a=>{const{code:e,data:o,msg:u}=a;e==200&&(N.value=o.configType,P.value=N.value.reduce((r,k)=>(r[k.value]=k.label,r),{}))})});const p=i(!1),c=i({title:"",content:""}),m=i("add"),j=oe(()=>({add:"新增通知",edit:"编辑通知"})[m.value]),D=i(),E=()=>{m.value="add",p.value=!0,c.value={title:"",content:""}},q=async a=>{const{code:e,data:o}=await f.getDetail(a.id);e==200&&(c.value=o,m.value="edit",p.value=!0)},A=async a=>{const{code:e,msg:o,data:u}=await f.remove(a.id);e==200&&(B.success(u),d())},V=()=>{var a;(a=D.value)==null||a.resetFields()},J=()=>{let a;m.value=="add"?a=f.add:a=f.update,a(c.value).then(e=>{const{code:o}=e;o==200&&(B.success(m.value=="add"?"新增成功":"编辑成功"),d()),V(),p.value=!1})};return U(()=>{}),(a,e)=>{const o=re,u=_e,r=pe,k=me,v=ve,K=fe,$=ge,O=se,W=ye,X=ke,G=be,H=Ce,Q=ie,C=le("has-perm");return g(),z("div",we,[t(O,{class:"search-area"},{default:n(()=>[t($,{ref_key:"searchFormRef",ref:h,model:l,onFinish:Y},{default:n(()=>[t(K,{gutter:24},{default:n(()=>[t(r,{span:4},{default:n(()=>[t(u,{label:"关键字",name:"keyword"},{default:n(()=>[t(o,{value:l.keyword,"onUpdate:value":e[0]||(e[0]=s=>l.keyword=s)},null,8,["value"])]),_:1})]),_:1}),t(r,{span:8},{default:n(()=>[t(u,{label:"时间范围"},{default:n(()=>[t(k,{value:_.value,"onUpdate:value":e[1]||(e[1]=s=>_.value=s),valueFormat:"YYYY-MM-DD",onChange:e[2]||(e[2]=s=>I())},null,8,["value"])]),_:1})]),_:1}),t(r,{span:4,style:{"text-align":"right"}},{default:n(()=>[t(v,{type:"primary","html-type":"submit"},{default:n(()=>[y("搜索")]),_:1}),t(v,{style:{margin:"0 8px"},onClick:S},{default:n(()=>[y(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(O,null,{default:n(()=>[ce("div",xe,[w((g(),x(v,{type:"primary",onClick:E},{default:n(()=>[y("新增")]),_:1})),[[C,"system:notice:add"]])]),t(G,{loading:b.value,columns:M.value,"data-source":T.value,scroll:{y:510},onChange:L,pagination:{current:l.pageNumber,total:F.value}},{bodyCell:n(({column:s,record:R})=>[s.key=="action"?(g(),z(ue,{key:0},[w((g(),x(v,{type:"link",onClick:Z=>q(R)},{default:n(()=>[y("编辑")]),_:2},1032,["onClick"])),[[C,"system:notice:update"]]),t(W,{type:"vertical"}),t(X,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:Z=>A(R)},{default:n(()=>[w((g(),x(v,{type:"link",danger:""},{default:n(()=>[y("删除")]),_:1})),[[C,"system:notice:remove"]])]),_:2},1032,["onConfirm"])],64)):de("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),t(Q,{open:p.value,"onUpdate:open":e[5]||(e[5]=s=>p.value=s),onOk:J,title:j.value,onCancel:V},{default:n(()=>[t($,{model:c.value,"label-col":{span:8},ref_key:"modalFormRef",ref:D},{default:n(()=>[t(u,{label:"标题"},{default:n(()=>[t(o,{value:c.value.title,"onUpdate:value":e[3]||(e[3]=s=>c.value.title=s)},null,8,["value"])]),_:1}),t(u,{label:"内容"},{default:n(()=>[t(H,{"auto-size":"",value:c.value.content,"onUpdate:value":e[4]||(e[4]=s=>c.value.content=s),minRows:5},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),Ve=te(Te,[["__scopeId","data-v-2538855e"]]);export{Ve as default};
