import{r as y}from"./index-C-7gdCj8.js";import{a as le}from"./menu-BfHbc1YM.js";import{o as B,a as M,f as ne,M as se,I as re,g as ue,h as de,B as ie,i as pe,F as me,T as ce,_ as _e,j as ve,k as fe,m as ge,n as ye}from"./ant-design-vue-xt7LDby6.js";import{d as ke,a as be,r as d,o as z,m as he,R as m,S as I,c as e,a8 as t,J as r,U as Ie,F as w,W as C,Z as k,u as Ce}from"./@vue-aP0pPEyH.js";import{_ as xe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./pinia-BukgqtI9.js";/* empty css                      */import"./axios-B4uVmeYG.js";import"./js-cookie-Cz0CWeBA.js";import"./@vueuse-CowBZe0U.js";import"./vue-router-CblwwlxB.js";import"./uuid-CQkTLCs1.js";import"./@babel-BiFW4_mA.js";import"./@ant-design-Bw6LI3J4.js";import"./@ctrl-DOFZgDuz.js";import"./lodash-es-PU94eZQX.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./dayjs-X-x4l2Bb.js";import"./throttle-debounce-CUWDS_la.js";import"./async-validator-DKvM95Vc.js";import"./scroll-into-view-if-needed-SxpMpKWN.js";import"./compute-scroll-into-view-1gs_hJI2.js";import"./vue-types-C5fUfLeo.js";import"./dom-align-CRCehRfe.js";import"./@emotion-BtrR-yrm.js";import"./stylis-DsJDcYJc.js";const b={getList:u=>y({method:"get",url:"role/list",params:u}),getDetail:u=>y({method:"get",url:"role/detail",params:{id:u}}),remove:u=>y({method:"get",url:"role/remove",params:{id:u}}),add:u=>y({method:"post",url:"role/add",data:u}),update:u=>y({method:"post",url:"role/update",data:u})},we={class:"role"},Ne={class:"tools"},Fe=ke({__name:"RoleView",setup(u){const $=B.SHOW_ALL,i=be({keyword:"",pageNumber:1,pageSize:10}),N=d([]),j=d([{title:"角色名",key:"roleName",dataIndex:"roleName"},{title:"角色ID",key:"roleId",dataIndex:"roleId"},{title:"备注",key:"desc",dataIndex:"desc"},{title:"状态",key:"status",dataIndex:"status"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action"}]),x=d(!1),F=d(),A=()=>{var o;(o=F.value)==null||o.resetFields(),c()},T=d(0),W=()=>{i.pageNumber=1,i.pageSize=10,c()},E=o=>{const{current:a,pageSize:n}=o;i.pageNumber=a,i.pageSize=n,c()},c=()=>{x.value=!0,b.getList(i).then(o=>{const{code:a,data:n}=o;a==200&&(N.value=n.data,T.value=n.total),x.value=!1})};z(()=>{c()});const _=d(!1),s=d({roleName:"",roleId:"",status:1,desc:"",roleValue:[]}),v=d("add"),H=he(()=>({add:"新增角色",edit:"编辑角色"})[v.value]),V=d(),P=()=>{v.value="add",_.value=!0,s.value={roleName:"",roleId:"",status:1,desc:"",roleValue:[]}},q=async o=>{const{code:a,data:n}=await b.getDetail(o.id);a==200&&(s.value=n,v.value="edit",_.value=!0)},J=async o=>{const{code:a,msg:n,data:p}=await b.remove(o.id);a==200&&(M.success(p),c())},L=()=>{var o;(o=V.value)==null||o.resetFields()},Z=()=>{let o;v.value=="add"?o=b.add:o=b.update,o(s.value).then(a=>{const{code:n}=a;n==200&&(M.success(v.value=="add"?"新增成功":"编辑成功"),c()),L(),_.value=!1})},O=d([]),G=()=>{le.getList("").then(o=>{const{code:a,data:n,msg:p}=o;a==200&&(O.value=n)})};return z(()=>{G()}),(o,a)=>{const n=re,p=ue,S=de,f=ie,K=pe,U=me,D=ne,h=ce,Q=_e,X=ve,Y=fe,R=ge,ee=ye,te=B,ae=se;return m(),I("div",we,[e(D,{class:"search-area"},{default:t(()=>[e(U,{ref_key:"searchFormRef",ref:F,model:i,onFinish:W},{default:t(()=>[e(K,{gutter:24},{default:t(()=>[e(S,{span:4},{default:t(()=>[e(p,{label:"角色名称",name:"keyword"},{default:t(()=>[e(n,{value:i.keyword,"onUpdate:value":a[0]||(a[0]=l=>i.keyword=l)},null,8,["value"])]),_:1})]),_:1}),e(S,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(f,{type:"primary","html-type":"submit"},{default:t(()=>[r("搜索")]),_:1}),e(f,{style:{margin:"0 8px"},onClick:A},{default:t(()=>[r(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(D,null,{default:t(()=>[Ie("div",Ne,[e(f,{type:"primary",onClick:P},{default:t(()=>[r("新增")]),_:1})]),e(Y,{loading:x.value,columns:j.value,"data-source":N.value,scroll:{y:440},onChange:E,pagination:{current:i.pageNumber,total:T.value}},{bodyCell:t(({column:l,record:g})=>[l.key=="status"?(m(),I(w,{key:0},[g.status?(m(),C(h,{key:0,color:"#87d068"},{default:t(()=>[r("启用")]),_:1})):(m(),C(h,{key:1,color:"#f50"},{default:t(()=>[r("停用")]),_:1}))],64)):k("",!0),l.key=="action"?(m(),I(w,{key:1},[e(f,{type:"link",onClick:oe=>q(g)},{default:t(()=>[r("编辑")]),_:2},1032,["onClick"]),e(Q,{type:"vertical"}),e(X,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:oe=>J(g)},{default:t(()=>[e(f,{type:"link",danger:""},{default:t(()=>[r("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):k("",!0),l.key=="roleType"?(m(),I(w,{key:2},[g.roleType=="app"?(m(),C(h,{key:0,color:"#2db7f5"},{default:t(()=>[r("菜单")]),_:1})):k("",!0),g.roleType=="directory"?(m(),C(h,{key:1,color:"#87d068"},{default:t(()=>[r("目录")]),_:1})):k("",!0)],64)):k("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),e(ae,{open:_.value,"onUpdate:open":a[6]||(a[6]=l=>_.value=l),onOk:Z,title:H.value,onCancel:L},{default:t(()=>[e(U,{model:s.value,"label-col":{span:8},ref_key:"modalFormRef",ref:V},{default:t(()=>[e(p,{label:"角色名"},{default:t(()=>[e(n,{value:s.value.roleName,"onUpdate:value":a[1]||(a[1]=l=>s.value.roleName=l)},null,8,["value"])]),_:1}),e(p,{label:"角色ID"},{default:t(()=>[e(n,{value:s.value.roleId,"onUpdate:value":a[2]||(a[2]=l=>s.value.roleId=l)},null,8,["value"])]),_:1}),e(p,{label:"状态"},{default:t(()=>[e(ee,{value:s.value.status,"onUpdate:value":a[3]||(a[3]=l=>s.value.status=l),"button-style":"solid"},{default:t(()=>[e(R,{value:1},{default:t(()=>[r("启用 ")]),_:1}),e(R,{value:0},{default:t(()=>[r("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),e(p,{label:"权限"},{default:t(()=>[e(te,{value:s.value.roleValue,"onUpdate:value":a[4]||(a[4]=l=>s.value.roleValue=l),style:{width:"100%"},"tree-data":O.value,"tree-checkable":"","allow-clear":"","show-checked-strategy":Ce($),placeholder:"请选择权限","tree-node-filter-prop":"label","field-names":{children:"children",label:"label",value:"id"}},null,8,["value","tree-data","show-checked-strategy"])]),_:1}),e(p,{label:"备注"},{default:t(()=>[e(n,{value:s.value.desc,"onUpdate:value":a[5]||(a[5]=l=>s.value.desc=l)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),et=xe(Fe,[["__scopeId","data-v-78d46b5b"]]);export{et as default};
