import{r as k,c as ne,_ as re}from"./index-Cfdjy00A.js";import{a as se}from"./menu-Cw3WMEGd.js";import{g as ue,m as de,r as u,n as V,a8 as ie,o as d,q as w,l as t,w as a,e as O,ab as pe,ao as ce,ac as me,a6 as i,N as B,L as F,h as m,F as I,ad as h,X as _e,V as ve,ai as fe,R as ye,ak as ge,ap as ke,aq as he,$ as be,a0 as xe,as as we,a4 as Ce,a5 as Ne}from"./.pnpm-CWzuy1aI.js";const b={getList:p=>k({method:"get",url:"role/list",params:p}),getDetail:p=>k({method:"get",url:"role/detail",params:{id:p}}),remove:p=>k({method:"get",url:"role/remove",params:{id:p}}),add:p=>k({method:"post",url:"role/add",data:p}),update:p=>k({method:"post",url:"role/update",data:p})},Me={class:"role"},Fe={class:"tools"},Ie={style:{height:"150px","overflow-y":"auto"}},Pe=ue({__name:"RoleView",setup(p){const c=de({keyword:"",pageNumber:1,pageSize:10}),P=u([]),L=u([{title:"角色名",key:"roleName",dataIndex:"roleName",width:"200px"},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"备注",key:"remark",dataIndex:"remark"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),C=u(!1),T=u(),$=()=>{var o;(o=T.value)==null||o.resetFields(),_()},D=u(0),A=()=>{c.pageNumber=1,c.pageSize=10,_()},j=o=>{const{current:e,pageSize:r}=o;c.pageNumber=e,c.pageSize=r,_()},_=()=>{C.value=!0,b.getList(c).then(o=>{const{code:e,data:r}=o;e==200&&(P.value=r.data,D.value=r.total),C.value=!1})},S=u([]);V(()=>{_(),ne.getDict(["dataPerm"]).then(o=>{const{code:e,data:r,msg:s}=o;e==200&&(S.value=r.dataPerm)})});const v=u(!1),l=u({roleName:"",roleKey:"",status:"1",remark:"",roleMenus:[],dataPerm:"1"}),f=u("add"),E=ie(()=>({add:"新增角色",edit:"编辑角色"})[f.value]),N=u(),X=()=>{f.value="add",v.value=!0,l.value={roleName:"",roleKey:"",status:"1",remark:"",roleMenus:[],dataPerm:"1"}},G=async o=>{const{code:e,data:r}=await b.getDetail(o.roleId);e==200&&(l.value=r,f.value="edit",v.value=!0)},H=async o=>{const{code:e,msg:r,data:s}=await b.remove(o.roleId);e==200&&(O.success(s),_())},K=()=>{var o;(o=N.value)==null||o.resetFields()},J=()=>{var o;(o=N.value)==null||o.validate().then(()=>{let e;f.value=="add"?e=b.add:e=b.update,l.value.roleMenus instanceof Array||(l.value.roleMenus=l.value.roleMenus.checked),e(l.value).then(r=>{const{code:s}=r;s==200&&(O.success(f.value=="add"?"新增成功":"编辑成功"),_()),K(),v.value=!1})})},U=u([]),Q=()=>{se.getAllMenu().then(o=>{const{code:e,data:r,msg:s}=o;e==200&&(U.value=r)})};return V(()=>{Q()}),(o,e)=>{const r=_e,s=ve,y=fe,q=ye,z=pe,x=ge,W=ke,Y=he,R=be,Z=xe,ee=we,ae=Ce,te=Ne,oe=ce,M=me("has-perm");return d(),w("div",Me,[t(z,{class:"search-area"},{default:a(()=>[t(q,{ref_key:"searchFormRef",ref:T,layout:"inline",model:c,onFinish:A},{default:a(()=>[t(s,{label:"角色名称",prop:"keyword"},{default:a(()=>[t(r,{value:c.keyword,"onUpdate:value":e[0]||(e[0]=n=>c.keyword=n)},null,8,["value"])]),_:1}),t(s,null,{default:a(()=>[t(y,{type:"primary","html-type":"submit"},{default:a(()=>[i("搜索")]),_:1}),t(y,{style:{margin:"0 8px"},onClick:$},{default:a(()=>[i(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(z,null,{default:a(()=>[B("div",Fe,[F((d(),m(y,{type:"primary",onClick:X},{default:a(()=>[i("新增")]),_:1})),[[M,"system:role:add"]])]),t(Y,{loading:C.value,columns:L.value,"data-source":P.value,scroll:{y:560},onChange:j,pagination:{current:c.pageNumber,total:D.value,showSizeChanger:!0,pageSize:c.pageSize}},{bodyCell:a(({column:n,record:g})=>[n.key=="status"?(d(),w(I,{key:0},[g.status=="1"?(d(),m(x,{key:0,color:"#87d068"},{default:a(()=>[i("启用")]),_:1})):(d(),m(x,{key:1,color:"#f50"},{default:a(()=>[i("停用")]),_:1}))],64)):h("",!0),n.key=="action"?(d(),w(I,{key:1},[F((d(),m(y,{type:"link",onClick:le=>G(g)},{default:a(()=>[i("编辑")]),_:2},1032,["onClick"])),[[M,"system:role:update"]]),t(W,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:le=>H(g)},{default:a(()=>[F((d(),m(y,{type:"link",danger:""},{default:a(()=>[i("删除")]),_:1})),[[M,"system:role:remove"]])]),_:2},1032,["onConfirm"])],64)):h("",!0),n.key=="roleType"?(d(),w(I,{key:2},[g.roleType=="app"?(d(),m(x,{key:0,color:"#2db7f5"},{default:a(()=>[i("菜单")]),_:1})):h("",!0),g.roleType=="directory"?(d(),m(x,{key:1,color:"#87d068"},{default:a(()=>[i("目录")]),_:1})):h("",!0)],64)):h("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),t(oe,{open:v.value,"onUpdate:open":e[7]||(e[7]=n=>v.value=n),onOk:J,title:E.value,onCancel:K},{default:a(()=>[t(q,{model:l.value,"label-col":{span:8},ref_key:"modalFormRef",ref:N},{default:a(()=>[t(s,{label:"角色名",required:"",prop:"roleName"},{default:a(()=>[t(r,{value:l.value.roleName,"onUpdate:value":e[1]||(e[1]=n=>l.value.roleName=n)},null,8,["value"])]),_:1}),t(s,{label:"角色ID",required:"",prop:"roleKey"},{default:a(()=>[t(r,{value:l.value.roleKey,"onUpdate:value":e[2]||(e[2]=n=>l.value.roleKey=n)},null,8,["value"])]),_:1}),t(s,{label:"状态",required:"",prop:"status"},{default:a(()=>[t(Z,{value:l.value.status,"onUpdate:value":e[3]||(e[3]=n=>l.value.status=n),"button-style":"solid"},{default:a(()=>[t(R,{value:"1"},{default:a(()=>[i("启用 ")]),_:1}),t(R,{value:"0"},{default:a(()=>[i("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),t(s,{label:"菜单权限",prop:"roleMenus"},{default:a(()=>[B("div",Ie,[t(ee,{checkedKeys:l.value.roleMenus,"onUpdate:checkedKeys":e[4]||(e[4]=n=>l.value.roleMenus=n),"tree-data":U.value,checkStrictly:!0,checkable:"","field-names":{children:"children",title:"label",key:"id"}},null,8,["checkedKeys","tree-data"])])]),_:1}),t(s,{label:"数据权限",required:"",prop:"dataPerm"},{default:a(()=>[t(ae,{value:l.value.dataPerm,"onUpdate:value":e[5]||(e[5]=n=>l.value.dataPerm=n),options:S.value},null,8,["value","options"])]),_:1}),t(s,{label:"备注",prop:"remark"},{default:a(()=>[t(te,{value:l.value.remark,"onUpdate:value":e[6]||(e[6]=n=>l.value.remark=n),rows:5},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),Ke=re(Pe,[["__scopeId","data-v-795fb0a3"]]);export{Ke as default};