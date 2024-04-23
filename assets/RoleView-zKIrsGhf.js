import{ay as g,d as ae,ar as oe,e as d,B as M,h as le,N as c,O as x,k as e,V as t,ax as A,a0 as u,al as ne,Z as w,U as h,ao as k,W as se,Q as ue}from"./index-D-DMxueM.js";import{a as re}from"./menu-0_I8dmGq.js";import{C as de,M as _e,_ as ce,a as ie,b as pe,c as me,d as fe}from"./index-CTKbgCuu.js";import{I as ve,_ as ye,F as ge}from"./index-Cct7ndk0.js";import{B as ke}from"./index-DcMcWl_R.js";import{T as be,_ as Ie,g as xe}from"./index-18WSJPcU.js";import{_ as S}from"./index-Byc8mnXC.js";import"./FolderOutlined-W7RJ59gV.js";import"./RightOutlined-C4KZ8E22.js";const b={getList:r=>g({method:"get",url:"role/list",params:r}),getDetail:r=>g({method:"get",url:"role/detail",params:{id:r}}),remove:r=>g({method:"get",url:"role/remove",params:{id:r}}),add:r=>g({method:"post",url:"role/add",data:r}),update:r=>g({method:"post",url:"role/update",data:r})},he={class:"role"},Ce={class:"tools"},we=ae({__name:"RoleView",setup(r){const W=S.SHOW_ALL,i=oe({keyword:"",pageNumber:1,pageSize:10}),N=d([]),$=d([{title:"角色名",key:"roleName",dataIndex:"roleName"},{title:"角色ID",key:"roleId",dataIndex:"roleId"},{title:"备注",key:"desc",dataIndex:"desc"},{title:"状态",key:"status",dataIndex:"status"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action"}]),C=d(!1),F=d(),j=()=>{var o;(o=F.value)==null||o.resetFields(),p()},T=d(0),p=()=>{C.value=!0,b.getList(i).then(o=>{const{code:a,data:s}=o;a==200&&(N.value=s.data,T.value=s.total),C.value=!1})};M(()=>{p()});const m=d(!1),n=d({roleName:"",roleId:"",status:1,desc:"",roleValue:[]}),f=d("add"),E=le(()=>({add:"新增角色",edit:"编辑角色"})[f.value]),V=d(),H=()=>{f.value="add",m.value=!0,n.value={roleName:"",roleId:"",status:1,desc:"",roleValue:[]}},q=async o=>{const{code:a,data:s}=await b.getDetail(o.id);a==200&&(n.value=s,f.value="edit",m.value=!0)},z=async o=>{const{code:a,msg:s,data:_}=await b.remove(o.id);a==200&&(A.success(_),p())},O=()=>{var o;(o=V.value)==null||o.resetFields()},P=()=>{let o;f.value=="add"?o=b.add:o=b.update,o(n.value).then(a=>{const{code:s}=a;s==200&&(A.success(f.value=="add"?"新增成功":"编辑成功"),p()),O(),m.value=!1})},L=d([]),Q=()=>{re.getList("").then(o=>{const{code:a,data:s,msg:_}=o;a==200&&(L.value=s)})};return M(()=>{Q()}),(o,a)=>{const s=ve,_=ye,U=ce,v=ke,Z=ie,B=ge,D=de,I=be,G=pe,J=me,K=fe,R=Ie,X=xe,Y=S,ee=_e;return c(),x("div",he,[e(D,{class:"search-area"},{default:t(()=>[e(B,{ref_key:"searchFormRef",ref:F,model:i,onFinish:p},{default:t(()=>[e(Z,{gutter:24},{default:t(()=>[e(U,{span:4},{default:t(()=>[e(_,{label:"角色名称",name:"keyword"},{default:t(()=>[e(s,{value:i.keyword,"onUpdate:value":a[0]||(a[0]=l=>i.keyword=l)},null,8,["value"])]),_:1})]),_:1}),e(U,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(v,{type:"primary","html-type":"submit"},{default:t(()=>[u("搜索")]),_:1}),e(v,{style:{margin:"0 8px"},onClick:j},{default:t(()=>[u(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(D,null,{default:t(()=>[ne("div",Ce,[e(v,{type:"primary",onClick:H},{default:t(()=>[u("新增")]),_:1})]),e(K,{loading:C.value,columns:$.value,"data-source":N.value,pagination:{current:i.pageNumber,total:T.value}},{bodyCell:t(({column:l,record:y})=>[l.key=="status"?(c(),x(w,{key:0},[y.status?(c(),h(I,{key:0,color:"#87d068"},{default:t(()=>[u("启用")]),_:1})):(c(),h(I,{key:1,color:"#f50"},{default:t(()=>[u("停用")]),_:1}))],64)):k("",!0),l.key=="action"?(c(),x(w,{key:1},[e(v,{type:"link",onClick:te=>q(y)},{default:t(()=>[u("编辑")]),_:2},1032,["onClick"]),e(G,{type:"vertical"}),e(J,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:te=>z(y)},{default:t(()=>[e(v,{type:"link",danger:""},{default:t(()=>[u("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):k("",!0),l.key=="roleType"?(c(),x(w,{key:2},[y.roleType=="app"?(c(),h(I,{key:0,color:"#2db7f5"},{default:t(()=>[u("菜单")]),_:1})):k("",!0),y.roleType=="directory"?(c(),h(I,{key:1,color:"#87d068"},{default:t(()=>[u("目录")]),_:1})):k("",!0)],64)):k("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),e(ee,{open:m.value,"onUpdate:open":a[6]||(a[6]=l=>m.value=l),onOk:P,title:E.value,onCancel:O},{default:t(()=>[e(B,{model:n.value,"label-col":{span:8},ref_key:"modalFormRef",ref:V},{default:t(()=>[e(_,{label:"角色名"},{default:t(()=>[e(s,{value:n.value.roleName,"onUpdate:value":a[1]||(a[1]=l=>n.value.roleName=l)},null,8,["value"])]),_:1}),e(_,{label:"角色ID"},{default:t(()=>[e(s,{value:n.value.roleId,"onUpdate:value":a[2]||(a[2]=l=>n.value.roleId=l)},null,8,["value"])]),_:1}),e(_,{label:"状态"},{default:t(()=>[e(X,{value:n.value.status,"onUpdate:value":a[3]||(a[3]=l=>n.value.status=l),"button-style":"solid"},{default:t(()=>[e(R,{value:1},{default:t(()=>[u("启用 ")]),_:1}),e(R,{value:0},{default:t(()=>[u("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),e(_,{label:"权限"},{default:t(()=>[e(Y,{value:n.value.roleValue,"onUpdate:value":a[4]||(a[4]=l=>n.value.roleValue=l),style:{width:"100%"},"tree-data":L.value,"tree-checkable":"","allow-clear":"","show-checked-strategy":se(W),placeholder:"请选择权限","tree-node-filter-prop":"label","field-names":{children:"children",label:"label",value:"id"}},null,8,["value","tree-data","show-checked-strategy"])]),_:1}),e(_,{label:"备注"},{default:t(()=>[e(s,{value:n.value.desc,"onUpdate:value":a[5]||(a[5]=l=>n.value.desc=l)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),Re=ue(we,[["__scopeId","data-v-520e10f9"]]);export{Re as default};
