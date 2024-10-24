import{r as k,c as ne,_ as re}from"./index-UYYxOZ8-.js";import{a as se}from"./menu-1gOVHn9k.js";import{g as ue,m as de,r as u,n as O,M as ie,o as d,q as w,l as t,w as a,e as R,W as pe,X as ce,Y as me,K as i,Q as B,$ as F,h as m,F as I,a0 as h,a1 as _e,a2 as ve,a3 as fe,a4 as ye,a5 as ge,a6 as ke,a7 as he,a8 as be,a9 as xe,ad as we,V as Ce,an as Ne}from"./.pnpm-CQm76_te.js";const b={getList:p=>k({method:"get",url:"role/list",params:p}),getDetail:p=>k({method:"get",url:"role/detail",params:{id:p}}),remove:p=>k({method:"get",url:"role/remove",params:{id:p}}),add:p=>k({method:"post",url:"role/add",data:p}),update:p=>k({method:"post",url:"role/update",data:p})},Me={class:"role"},Fe={class:"tools"},Ie={style:{height:"150px","overflow-y":"auto"}},Pe=ue({__name:"RoleView",setup(p){const c=de({keyword:"",pageNumber:1,pageSize:10}),P=u([]),$=u([{title:"角色名",key:"roleName",dataIndex:"roleName",width:"200px"},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"备注",key:"remark",dataIndex:"remark"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),C=u(!1),T=u(),L=()=>{var o;(o=T.value)==null||o.resetFields(),_()},D=u(0),A=()=>{c.pageNumber=1,c.pageSize=10,_()},j=o=>{const{current:e,pageSize:r}=o;c.pageNumber=e,c.pageSize=r,_()},_=()=>{C.value=!0,b.getList(c).then(o=>{const{code:e,data:r}=o;e==200&&(P.value=r.data,D.value=r.total),C.value=!1})},K=u([]);O(()=>{_(),ne.getDict(["dataPerm"]).then(o=>{const{code:e,data:r,msg:s}=o;e==200&&(K.value=r.dataPerm)})});const v=u(!1),l=u({roleName:"",roleKey:"",status:"1",remark:"",roleMenus:[],dataPerm:"1"}),f=u("add"),E=ie(()=>({add:"新增角色",edit:"编辑角色"})[f.value]),N=u(),Q=()=>{f.value="add",v.value=!0,l.value={roleName:"",roleKey:"",status:"1",remark:"",roleMenus:[],dataPerm:"1"}},W=async o=>{const{code:e,data:r}=await b.getDetail(o.roleId);e==200&&(l.value=r,f.value="edit",v.value=!0)},X=async o=>{const{code:e,msg:r,data:s}=await b.remove(o.roleId);e==200&&(R.success(s),_())},S=()=>{var o;(o=N.value)==null||o.resetFields()},Y=()=>{var o;(o=N.value)==null||o.validate().then(()=>{let e;f.value=="add"?e=b.add:e=b.update,l.value.roleMenus instanceof Array||(l.value.roleMenus=l.value.roleMenus.checked),e(l.value).then(r=>{const{code:s}=r;s==200&&(R.success(f.value=="add"?"新增成功":"编辑成功"),_()),S(),v.value=!1})})},U=u([]),G=()=>{se.getAllMenu().then(o=>{const{code:e,data:r,msg:s}=o;e==200&&(U.value=r)})};return O(()=>{G()}),(o,e)=>{const r=_e,s=ve,y=fe,z=ye,V=pe,x=ge,H=ke,J=he,q=be,Z=xe,ee=we,ae=Ce,te=Ne,oe=ce,M=me("has-perm");return d(),w("div",Me,[t(V,{class:"search-area"},{default:a(()=>[t(z,{ref_key:"searchFormRef",ref:T,layout:"inline",model:c,onFinish:A},{default:a(()=>[t(s,{label:"角色名称",prop:"keyword"},{default:a(()=>[t(r,{value:c.keyword,"onUpdate:value":e[0]||(e[0]=n=>c.keyword=n)},null,8,["value"])]),_:1}),t(s,null,{default:a(()=>[t(y,{type:"primary","html-type":"submit"},{default:a(()=>[i("搜索")]),_:1}),t(y,{style:{margin:"0 8px"},onClick:L},{default:a(()=>[i(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(V,null,{default:a(()=>[B("div",Fe,[F((d(),m(y,{type:"primary",onClick:Q},{default:a(()=>[i("新增")]),_:1})),[[M,"system:role:add"]])]),t(J,{loading:C.value,columns:$.value,"data-source":P.value,scroll:{y:560},onChange:j,pagination:{current:c.pageNumber,total:D.value,showSizeChanger:!0,pageSize:c.pageSize}},{bodyCell:a(({column:n,record:g})=>[n.key=="status"?(d(),w(I,{key:0},[g.status=="1"?(d(),m(x,{key:0,color:"#87d068"},{default:a(()=>[i("启用")]),_:1})):(d(),m(x,{key:1,color:"#f50"},{default:a(()=>[i("停用")]),_:1}))],64)):h("",!0),n.key=="action"?(d(),w(I,{key:1},[F((d(),m(y,{type:"link",onClick:le=>W(g)},{default:a(()=>[i("编辑")]),_:2},1032,["onClick"])),[[M,"system:role:update"]]),t(H,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:le=>X(g)},{default:a(()=>[F((d(),m(y,{type:"link",danger:""},{default:a(()=>[i("删除")]),_:1})),[[M,"system:role:remove"]])]),_:2},1032,["onConfirm"])],64)):h("",!0),n.key=="roleType"?(d(),w(I,{key:2},[g.roleType=="app"?(d(),m(x,{key:0,color:"#2db7f5"},{default:a(()=>[i("菜单")]),_:1})):h("",!0),g.roleType=="directory"?(d(),m(x,{key:1,color:"#87d068"},{default:a(()=>[i("目录")]),_:1})):h("",!0)],64)):h("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),t(oe,{open:v.value,"onUpdate:open":e[7]||(e[7]=n=>v.value=n),onOk:Y,title:E.value,onCancel:S},{default:a(()=>[t(z,{model:l.value,"label-col":{span:8},ref_key:"modalFormRef",ref:N},{default:a(()=>[t(s,{label:"角色名",required:"",prop:"roleName"},{default:a(()=>[t(r,{value:l.value.roleName,"onUpdate:value":e[1]||(e[1]=n=>l.value.roleName=n)},null,8,["value"])]),_:1}),t(s,{label:"角色ID",required:"",prop:"roleKey"},{default:a(()=>[t(r,{value:l.value.roleKey,"onUpdate:value":e[2]||(e[2]=n=>l.value.roleKey=n)},null,8,["value"])]),_:1}),t(s,{label:"状态",required:"",prop:"status"},{default:a(()=>[t(Z,{value:l.value.status,"onUpdate:value":e[3]||(e[3]=n=>l.value.status=n),"button-style":"solid"},{default:a(()=>[t(q,{value:"1"},{default:a(()=>[i("启用 ")]),_:1}),t(q,{value:"0"},{default:a(()=>[i("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),t(s,{label:"菜单权限",prop:"roleMenus"},{default:a(()=>[B("div",Ie,[t(ee,{checkedKeys:l.value.roleMenus,"onUpdate:checkedKeys":e[4]||(e[4]=n=>l.value.roleMenus=n),"tree-data":U.value,checkStrictly:!0,checkable:"","field-names":{children:"children",title:"label",key:"id"}},null,8,["checkedKeys","tree-data"])])]),_:1}),t(s,{label:"数据权限",required:"",prop:"dataPerm"},{default:a(()=>[t(ae,{value:l.value.dataPerm,"onUpdate:value":e[5]||(e[5]=n=>l.value.dataPerm=n),options:K.value},null,8,["value","options"])]),_:1}),t(s,{label:"备注",prop:"remark"},{default:a(()=>[t(te,{value:l.value.remark,"onUpdate:value":e[6]||(e[6]=n=>l.value.remark=n),rows:5},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),Se=re(Pe,[["__scopeId","data-v-795fb0a3"]]);export{Se as default};
