import{a2 as y,d as le,S as ne,r as d,b as R,p as se,D as i,E as h,g as e,J as t,U as M,Q as r,V as re,N,I as C,W as k,K as ue,F as de}from"./index-Vac1NcXf.js";import{a as _e}from"./menu-8QWVjkQV.js";import{C as ce,_ as ie,a as pe}from"./index-BPVDB9kJ.js";import{M as me}from"./index-DrhgDIEF.js";import{I as fe,_ as ve,B as ge,F as ye}from"./index-C-QMBczu.js";import{T as ke}from"./index-BJ9iYP9Z.js";import{_ as z}from"./index-DQAw9DEM.js";import{_ as be}from"./index-D9q3ibEu.js";import{_ as Ie,a as he}from"./index-N9B2KCTz.js";import{_ as Ce,a as xe}from"./index-ZGlXNdes.js";import"./index-CVizMkN9.js";import"./PlusOutlined-Bp6PumwL.js";import"./FolderOutlined-DZPTx9hY.js";const b={getList:u=>y({method:"get",url:"role/list",params:u}),getDetail:u=>y({method:"get",url:"role/detail",params:{id:u}}),remove:u=>y({method:"get",url:"role/remove",params:{id:u}}),add:u=>y({method:"post",url:"role/add",data:u}),update:u=>y({method:"post",url:"role/update",data:u})},Ne={class:"role"},we={class:"tools"},Fe=le({__name:"RoleView",setup(u){const $=z.SHOW_ALL,_=ne({keyword:"",pageNumber:1,pageSize:10}),w=d([]),A=d([{title:"角色名",key:"roleName",dataIndex:"roleName"},{title:"角色ID",key:"roleId",dataIndex:"roleId"},{title:"备注",key:"desc",dataIndex:"desc"},{title:"状态",key:"status",dataIndex:"status"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action"}]),x=d(!1),F=d(),E=()=>{var o;(o=F.value)==null||o.resetFields(),p()},T=d(0),W=()=>{_.pageNumber=1,_.pageSize=10,p()},j=o=>{const{current:a,pageSize:n}=o;_.pageNumber=a,_.pageSize=n,p()},p=()=>{x.value=!0,b.getList(_).then(o=>{const{code:a,data:n}=o;a==200&&(w.value=n.data,T.value=n.total),x.value=!1})};R(()=>{p()});const m=d(!1),s=d({roleName:"",roleId:"",status:1,desc:"",roleValue:[]}),f=d("add"),H=se(()=>({add:"新增角色",edit:"编辑角色"})[f.value]),V=d(),P=()=>{f.value="add",m.value=!0,s.value={roleName:"",roleId:"",status:1,desc:"",roleValue:[]}},q=async o=>{const{code:a,data:n}=await b.getDetail(o.id);a==200&&(s.value=n,f.value="edit",m.value=!0)},J=async o=>{const{code:a,msg:n,data:c}=await b.remove(o.id);a==200&&(M.success(c),p())},D=()=>{var o;(o=V.value)==null||o.resetFields()},K=()=>{let o;f.value=="add"?o=b.add:o=b.update,o(s.value).then(a=>{const{code:n}=a;n==200&&(M.success(f.value=="add"?"新增成功":"编辑成功"),p()),D(),m.value=!1})},L=d([]),Q=()=>{_e.getList("").then(o=>{const{code:a,data:n,msg:c}=o;a==200&&(L.value=n)})};return R(()=>{Q()}),(o,a)=>{const n=fe,c=ve,O=ie,v=ge,G=pe,S=ye,U=ce,I=ke,X=be,Y=Ie,Z=he,B=Ce,ee=xe,te=z,ae=me;return i(),h("div",Ne,[e(U,{class:"search-area"},{default:t(()=>[e(S,{ref_key:"searchFormRef",ref:F,model:_,onFinish:W},{default:t(()=>[e(G,{gutter:24},{default:t(()=>[e(O,{span:4},{default:t(()=>[e(c,{label:"角色名称",name:"keyword"},{default:t(()=>[e(n,{value:_.keyword,"onUpdate:value":a[0]||(a[0]=l=>_.keyword=l)},null,8,["value"])]),_:1})]),_:1}),e(O,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(v,{type:"primary","html-type":"submit"},{default:t(()=>[r("搜索")]),_:1}),e(v,{style:{margin:"0 8px"},onClick:E},{default:t(()=>[r(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(U,null,{default:t(()=>[re("div",we,[e(v,{type:"primary",onClick:P},{default:t(()=>[r("新增")]),_:1})]),e(Z,{loading:x.value,columns:A.value,"data-source":w.value,scroll:{y:440},onChange:j,pagination:{current:_.pageNumber,total:T.value}},{bodyCell:t(({column:l,record:g})=>[l.key=="status"?(i(),h(N,{key:0},[g.status?(i(),C(I,{key:0,color:"#87d068"},{default:t(()=>[r("启用")]),_:1})):(i(),C(I,{key:1,color:"#f50"},{default:t(()=>[r("停用")]),_:1}))],64)):k("",!0),l.key=="action"?(i(),h(N,{key:1},[e(v,{type:"link",onClick:oe=>q(g)},{default:t(()=>[r("编辑")]),_:2},1032,["onClick"]),e(X,{type:"vertical"}),e(Y,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:oe=>J(g)},{default:t(()=>[e(v,{type:"link",danger:""},{default:t(()=>[r("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):k("",!0),l.key=="roleType"?(i(),h(N,{key:2},[g.roleType=="app"?(i(),C(I,{key:0,color:"#2db7f5"},{default:t(()=>[r("菜单")]),_:1})):k("",!0),g.roleType=="directory"?(i(),C(I,{key:1,color:"#87d068"},{default:t(()=>[r("目录")]),_:1})):k("",!0)],64)):k("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),e(ae,{open:m.value,"onUpdate:open":a[6]||(a[6]=l=>m.value=l),onOk:K,title:H.value,onCancel:D},{default:t(()=>[e(S,{model:s.value,"label-col":{span:8},ref_key:"modalFormRef",ref:V},{default:t(()=>[e(c,{label:"角色名"},{default:t(()=>[e(n,{value:s.value.roleName,"onUpdate:value":a[1]||(a[1]=l=>s.value.roleName=l)},null,8,["value"])]),_:1}),e(c,{label:"角色ID"},{default:t(()=>[e(n,{value:s.value.roleId,"onUpdate:value":a[2]||(a[2]=l=>s.value.roleId=l)},null,8,["value"])]),_:1}),e(c,{label:"状态"},{default:t(()=>[e(ee,{value:s.value.status,"onUpdate:value":a[3]||(a[3]=l=>s.value.status=l),"button-style":"solid"},{default:t(()=>[e(B,{value:1},{default:t(()=>[r("启用 ")]),_:1}),e(B,{value:0},{default:t(()=>[r("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),e(c,{label:"权限"},{default:t(()=>[e(te,{value:s.value.roleValue,"onUpdate:value":a[4]||(a[4]=l=>s.value.roleValue=l),style:{width:"100%"},"tree-data":L.value,"tree-checkable":"","allow-clear":"","show-checked-strategy":ue($),placeholder:"请选择权限","tree-node-filter-prop":"label","field-names":{children:"children",label:"label",value:"id"}},null,8,["value","tree-data","show-checked-strategy"])]),_:1}),e(c,{label:"备注"},{default:t(()=>[e(n,{value:s.value.desc,"onUpdate:value":a[5]||(a[5]=l=>s.value.desc=l)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),Ee=de(Fe,[["__scopeId","data-v-78d46b5b"]]);export{Ee as default};
