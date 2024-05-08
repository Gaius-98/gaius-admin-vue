import{a6 as y,d as le,a2 as ne,e as d,B as R,h as se,N as c,O as C,k as e,V as t,a3 as M,a0 as r,a4 as re,Z as N,U as I,a5 as k,W as ue,Q as de}from"./index-9LWc0fjX.js";import{a as _e}from"./menu-rbcRnHSJ.js";import{C as ie,_ as ce,a as pe}from"./index-CZCbL0Qk.js";import{M as me}from"./index-C-vnd1Bk.js";import{I as fe,_ as ve,B as ge,F as ye}from"./index-CQK2gLuT.js";import{T as ke,_ as be,a as he}from"./index-DeuveweZ.js";import{_ as z}from"./index-DyEyGKWL.js";import{_ as Ce,a as Ie}from"./index-erj5rNCk.js";import{_ as xe}from"./index-aWH5MmH0.js";import"./shallowequal-BqL5Aq4i.js";import"./PlusOutlined-DhNNxLq6.js";import"./RightOutlined-Xu13KEib.js";import"./FolderOutlined-2VuNuGzE.js";import"./DoubleRightOutlined-isug7sUV.js";const b={getList:u=>y({method:"get",url:"role/list",params:u}),getDetail:u=>y({method:"get",url:"role/detail",params:{id:u}}),remove:u=>y({method:"get",url:"role/remove",params:{id:u}}),add:u=>y({method:"post",url:"role/add",data:u}),update:u=>y({method:"post",url:"role/update",data:u})},Ne={class:"role"},we={class:"tools"},Fe=le({__name:"RoleView",setup(u){const $=z.SHOW_ALL,_=ne({keyword:"",pageNumber:1,pageSize:10}),w=d([]),A=d([{title:"角色名",key:"roleName",dataIndex:"roleName"},{title:"角色ID",key:"roleId",dataIndex:"roleId"},{title:"备注",key:"desc",dataIndex:"desc"},{title:"状态",key:"status",dataIndex:"status"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action"}]),x=d(!1),F=d(),W=()=>{var o;(o=F.value)==null||o.resetFields(),p()},T=d(0),j=()=>{_.pageNumber=1,_.pageSize=10,p()},E=o=>{const{current:a,pageSize:n}=o;_.pageNumber=a,_.pageSize=n,p()},p=()=>{x.value=!0,b.getList(_).then(o=>{const{code:a,data:n}=o;a==200&&(w.value=n.data,T.value=n.total),x.value=!1})};R(()=>{p()});const m=d(!1),s=d({roleName:"",roleId:"",status:1,desc:"",roleValue:[]}),f=d("add"),H=se(()=>({add:"新增角色",edit:"编辑角色"})[f.value]),V=d(),P=()=>{f.value="add",m.value=!0,s.value={roleName:"",roleId:"",status:1,desc:"",roleValue:[]}},q=async o=>{const{code:a,data:n}=await b.getDetail(o.id);a==200&&(s.value=n,f.value="edit",m.value=!0)},Q=async o=>{const{code:a,msg:n,data:i}=await b.remove(o.id);a==200&&(M.success(i),p())},O=()=>{var o;(o=V.value)==null||o.resetFields()},Z=()=>{let o;f.value=="add"?o=b.add:o=b.update,o(s.value).then(a=>{const{code:n}=a;n==200&&(M.success(f.value=="add"?"新增成功":"编辑成功"),p()),O(),m.value=!1})},L=d([]),G=()=>{_e.getList("").then(o=>{const{code:a,data:n,msg:i}=o;a==200&&(L.value=n)})};return R(()=>{G()}),(o,a)=>{const n=fe,i=ve,U=ce,v=ge,J=pe,B=ye,D=ie,h=ke,K=Ce,X=xe,Y=Ie,S=be,ee=he,te=z,ae=me;return c(),C("div",Ne,[e(D,{class:"search-area"},{default:t(()=>[e(B,{ref_key:"searchFormRef",ref:F,model:_,onFinish:j},{default:t(()=>[e(J,{gutter:24},{default:t(()=>[e(U,{span:4},{default:t(()=>[e(i,{label:"角色名称",name:"keyword"},{default:t(()=>[e(n,{value:_.keyword,"onUpdate:value":a[0]||(a[0]=l=>_.keyword=l)},null,8,["value"])]),_:1})]),_:1}),e(U,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(v,{type:"primary","html-type":"submit"},{default:t(()=>[r("搜索")]),_:1}),e(v,{style:{margin:"0 8px"},onClick:W},{default:t(()=>[r(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(D,null,{default:t(()=>[re("div",we,[e(v,{type:"primary",onClick:P},{default:t(()=>[r("新增")]),_:1})]),e(Y,{loading:x.value,columns:A.value,"data-source":w.value,scroll:{y:440},onChange:E,pagination:{current:_.pageNumber,total:T.value}},{bodyCell:t(({column:l,record:g})=>[l.key=="status"?(c(),C(N,{key:0},[g.status?(c(),I(h,{key:0,color:"#87d068"},{default:t(()=>[r("启用")]),_:1})):(c(),I(h,{key:1,color:"#f50"},{default:t(()=>[r("停用")]),_:1}))],64)):k("",!0),l.key=="action"?(c(),C(N,{key:1},[e(v,{type:"link",onClick:oe=>q(g)},{default:t(()=>[r("编辑")]),_:2},1032,["onClick"]),e(K,{type:"vertical"}),e(X,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:oe=>Q(g)},{default:t(()=>[e(v,{type:"link",danger:""},{default:t(()=>[r("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):k("",!0),l.key=="roleType"?(c(),C(N,{key:2},[g.roleType=="app"?(c(),I(h,{key:0,color:"#2db7f5"},{default:t(()=>[r("菜单")]),_:1})):k("",!0),g.roleType=="directory"?(c(),I(h,{key:1,color:"#87d068"},{default:t(()=>[r("目录")]),_:1})):k("",!0)],64)):k("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),e(ae,{open:m.value,"onUpdate:open":a[6]||(a[6]=l=>m.value=l),onOk:Z,title:H.value,onCancel:O},{default:t(()=>[e(B,{model:s.value,"label-col":{span:8},ref_key:"modalFormRef",ref:V},{default:t(()=>[e(i,{label:"角色名"},{default:t(()=>[e(n,{value:s.value.roleName,"onUpdate:value":a[1]||(a[1]=l=>s.value.roleName=l)},null,8,["value"])]),_:1}),e(i,{label:"角色ID"},{default:t(()=>[e(n,{value:s.value.roleId,"onUpdate:value":a[2]||(a[2]=l=>s.value.roleId=l)},null,8,["value"])]),_:1}),e(i,{label:"状态"},{default:t(()=>[e(ee,{value:s.value.status,"onUpdate:value":a[3]||(a[3]=l=>s.value.status=l),"button-style":"solid"},{default:t(()=>[e(S,{value:1},{default:t(()=>[r("启用 ")]),_:1}),e(S,{value:0},{default:t(()=>[r("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),e(i,{label:"权限"},{default:t(()=>[e(te,{value:s.value.roleValue,"onUpdate:value":a[4]||(a[4]=l=>s.value.roleValue=l),style:{width:"100%"},"tree-data":L.value,"tree-checkable":"","allow-clear":"","show-checked-strategy":ue($),placeholder:"请选择权限","tree-node-filter-prop":"label","field-names":{children:"children",label:"label",value:"id"}},null,8,["value","tree-data","show-checked-strategy"])]),_:1}),e(i,{label:"备注"},{default:t(()=>[e(n,{value:s.value.desc,"onUpdate:value":a[5]||(a[5]=l=>s.value.desc=l)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),je=de(Fe,[["__scopeId","data-v-78d46b5b"]]);export{je as default};
