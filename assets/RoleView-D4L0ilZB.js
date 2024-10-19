import{r as k,c as se,_ as ue}from"./index-BHBjcBaR.js";import{a as re}from"./menu-DjNgra2I.js";import{g as de,m as ce,r,n as B,L as _e,U as ie,o as d,q as w,l as t,w as a,e as L,V as me,W as pe,J as c,P as z,X as F,i as m,F as M,Y as b,$ as ve,a0 as fe,a1 as ye,a2 as ge,a3 as ke,a4 as be,a5 as he,a6 as xe,a7 as we,a8 as Ce,a9 as Ne,ad as Fe,T as Me}from"./.pnpm-DZa05fHr.js";const h={getList:_=>k({method:"get",url:"role/list",params:_}),getDetail:_=>k({method:"get",url:"role/detail",params:{id:_}}),remove:_=>k({method:"get",url:"role/remove",params:{id:_}}),add:_=>k({method:"post",url:"role/add",data:_}),update:_=>k({method:"post",url:"role/update",data:_})},Pe={class:"role"},De={class:"tools"},Ie={style:{height:"150px","overflow-y":"auto"}},Te=de({__name:"RoleView",setup(_){const i=ce({keyword:"",pageNumber:1,pageSize:10}),P=r([]),A=r([{title:"角色名",key:"roleName",dataIndex:"roleName",width:"200px"},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"备注",key:"remark",dataIndex:"remark"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),C=r(!1),D=r(),j=()=>{var o;(o=D.value)==null||o.resetFields(),p()},I=r(0),q=()=>{i.pageNumber=1,i.pageSize=10,p()},E=o=>{const{current:e,pageSize:s}=o;i.pageNumber=e,i.pageSize=s,p()},p=()=>{C.value=!0,h.getList(i).then(o=>{const{code:e,data:s}=o;e==200&&(P.value=s.data,I.value=s.total),C.value=!1})},T=r([]);B(()=>{p(),se.getDict(["dataPerm"]).then(o=>{const{code:e,data:s,msg:u}=o;e==200&&(T.value=s.dataPerm)})});const v=r(!1),l=r({roleName:"",roleKey:"",status:1,remark:"",roleMenus:[],dataPerm:"1"}),f=r("add"),J=_e(()=>({add:"新增角色",edit:"编辑角色"})[f.value]),U=r(),W=()=>{f.value="add",v.value=!0,l.value={roleName:"",roleKey:"",status:1,remark:"",roleMenus:[],dataPerm:"1"}},X=async o=>{const{code:e,data:s}=await h.getDetail(o.roleId);e==200&&(l.value=s,f.value="edit",v.value=!0)},Y=async o=>{const{code:e,msg:s,data:u}=await h.remove(o.roleId);e==200&&(L.success(u),p())},K=()=>{var o;(o=U.value)==null||o.resetFields()},G=()=>{let o;f.value=="add"?o=h.add:o=h.update,l.value.roleMenus instanceof Array||(l.value.roleMenus=l.value.roleMenus.checked),o(l.value).then(e=>{const{code:s}=e;s==200&&(L.success(f.value=="add"?"新增成功":"编辑成功"),p()),K(),v.value=!1})},V=r([]),H=()=>{re.getAllMenu().then(o=>{const{code:e,data:s,msg:u}=o;e==200&&(V.value=s)})};return B(()=>{H()}),(o,e)=>{const s=ve,u=fe,O=ye,y=ge,Q=ke,R=be,S=me,x=he,Z=xe,ee=we,$=Ce,ae=Ne,te=Fe,oe=Me,le=pe,N=ie("has-perm");return d(),w("div",Pe,[t(S,{class:"search-area"},{default:a(()=>[t(R,{ref_key:"searchFormRef",ref:D,model:i,onFinish:q},{default:a(()=>[t(Q,{gutter:24},{default:a(()=>[t(O,{span:4},{default:a(()=>[t(u,{label:"角色名称",name:"keyword"},{default:a(()=>[t(s,{value:i.keyword,"onUpdate:value":e[0]||(e[0]=n=>i.keyword=n)},null,8,["value"])]),_:1})]),_:1}),t(O,{span:4,style:{"text-align":"right"}},{default:a(()=>[t(y,{type:"primary","html-type":"submit"},{default:a(()=>[c("搜索")]),_:1}),t(y,{style:{margin:"0 8px"},onClick:j},{default:a(()=>[c(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(S,null,{default:a(()=>[z("div",De,[F((d(),m(y,{type:"primary",onClick:W},{default:a(()=>[c("新增")]),_:1})),[[N,"system:role:add"]])]),t(ee,{loading:C.value,columns:A.value,"data-source":P.value,scroll:{y:510},onChange:E,pagination:{current:i.pageNumber,total:I.value}},{bodyCell:a(({column:n,record:g})=>[n.key=="status"?(d(),w(M,{key:0},[g.status=="1"?(d(),m(x,{key:0,color:"#87d068"},{default:a(()=>[c("启用")]),_:1})):(d(),m(x,{key:1,color:"#f50"},{default:a(()=>[c("停用")]),_:1}))],64)):b("",!0),n.key=="action"?(d(),w(M,{key:1},[F((d(),m(y,{type:"link",onClick:ne=>X(g)},{default:a(()=>[c("编辑")]),_:2},1032,["onClick"])),[[N,"system:role:update"]]),t(Z,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:ne=>Y(g)},{default:a(()=>[F((d(),m(y,{type:"link",danger:""},{default:a(()=>[c("删除")]),_:1})),[[N,"system:role:remove"]])]),_:2},1032,["onConfirm"])],64)):b("",!0),n.key=="roleType"?(d(),w(M,{key:2},[g.roleType=="app"?(d(),m(x,{key:0,color:"#2db7f5"},{default:a(()=>[c("菜单")]),_:1})):b("",!0),g.roleType=="directory"?(d(),m(x,{key:1,color:"#87d068"},{default:a(()=>[c("目录")]),_:1})):b("",!0)],64)):b("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),t(le,{open:v.value,"onUpdate:open":e[7]||(e[7]=n=>v.value=n),onOk:G,title:J.value,onCancel:K},{default:a(()=>[t(R,{model:l.value,"label-col":{span:8},ref_key:"modalFormRef",ref:U},{default:a(()=>[t(u,{label:"角色名"},{default:a(()=>[t(s,{value:l.value.roleName,"onUpdate:value":e[1]||(e[1]=n=>l.value.roleName=n)},null,8,["value"])]),_:1}),t(u,{label:"角色ID"},{default:a(()=>[t(s,{value:l.value.roleKey,"onUpdate:value":e[2]||(e[2]=n=>l.value.roleKey=n)},null,8,["value"])]),_:1}),t(u,{label:"状态"},{default:a(()=>[t(ae,{value:l.value.status,"onUpdate:value":e[3]||(e[3]=n=>l.value.status=n),"button-style":"solid"},{default:a(()=>[t($,{value:"1"},{default:a(()=>[c("启用 ")]),_:1}),t($,{value:"0"},{default:a(()=>[c("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),t(u,{label:"菜单权限"},{default:a(()=>[z("div",Ie,[t(te,{checkedKeys:l.value.roleMenus,"onUpdate:checkedKeys":e[4]||(e[4]=n=>l.value.roleMenus=n),"tree-data":V.value,checkStrictly:!0,checkable:"","field-names":{children:"children",title:"label",key:"id"}},null,8,["checkedKeys","tree-data"])])]),_:1}),t(u,{label:"数据权限"},{default:a(()=>[t(oe,{value:l.value.dataPerm,"onUpdate:value":e[5]||(e[5]=n=>l.value.dataPerm=n),options:T.value},null,8,["value","options"])]),_:1}),t(u,{label:"备注"},{default:a(()=>[t(s,{value:l.value.remark,"onUpdate:value":e[6]||(e[6]=n=>l.value.remark=n)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),Oe=ue(Te,[["__scopeId","data-v-326ec726"]]);export{Oe as default};