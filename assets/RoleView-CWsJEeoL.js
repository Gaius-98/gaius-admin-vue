import{r as y,b as oe}from"./index-CzmVDmdz.js";import{a as le}from"./menu-QJowM6tf.js";import{q as ne,a as M,g as re,M as se,h as ue,i as de,j as ie,B as pe,k as me,F as ce,T as _e,c as ve,m as fe,n as ge,o as ye,p as ke,u as be}from"./ant-design-vue-DGPmw3tN.js";import{d as he,a as xe,r as d,o as L,m as Ce,R as m,S as x,c as e,a3 as t,J as s,U as z,F as N,a2 as C,ad as k}from"./@vue-DmVhU8xE.js";import"./pinia-C_jLcksF.js";/* empty css                      */import"./axios-B4uVmeYG.js";import"./js-cookie-Cz0CWeBA.js";import"./@vueuse-CvnCfVh1.js";import"./vue-router-XjRCv15Q.js";import"./uuid-CQkTLCs1.js";import"./vue-codemirror-CBA9LlYn.js";import"./codemirror-DqN-1UAR.js";import"./@codemirror-BQbZevoh.js";import"./@lezer-CciglqRQ.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./@ant-design-CHQs8cUc.js";import"./@ctrl-DOFZgDuz.js";import"./echarts-DetEu2Tg.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CDo53BfZ.js";import"./@babel-BiFW4_mA.js";import"./lodash-es-PU94eZQX.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./dayjs-X-x4l2Bb.js";import"./throttle-debounce-CUWDS_la.js";import"./async-validator-DKvM95Vc.js";import"./scroll-into-view-if-needed-SxpMpKWN.js";import"./compute-scroll-into-view-1gs_hJI2.js";import"./vue-types-C5fUfLeo.js";import"./dom-align-CRCehRfe.js";import"./@emotion-BtrR-yrm.js";import"./stylis-DsJDcYJc.js";const b={getList:u=>y({method:"get",url:"role/list",params:u}),getDetail:u=>y({method:"get",url:"role/detail",params:{id:u}}),remove:u=>y({method:"get",url:"role/remove",params:{id:u}}),add:u=>y({method:"post",url:"role/add",data:u}),update:u=>y({method:"post",url:"role/update",data:u})},Ie={class:"role"},Ne={class:"tools"},Fe={style:{height:"200px","overflow-y":"auto"}},Te=he({__name:"RoleView",setup(u){ne.SHOW_ALL;const i=xe({keyword:"",pageNumber:1,pageSize:10}),F=d([]),j=d([{title:"角色名",key:"roleName",dataIndex:"roleName"},{title:"角色ID",key:"roleId",dataIndex:"roleId"},{title:"备注",key:"desc",dataIndex:"desc"},{title:"状态",key:"status",dataIndex:"status"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action"}]),I=d(!1),T=d(),A=()=>{var o;(o=T.value)==null||o.resetFields(),c()},w=d(0),K=()=>{i.pageNumber=1,i.pageSize=10,c()},$=o=>{const{current:a,pageSize:n}=o;i.pageNumber=a,i.pageSize=n,c()},c=()=>{I.value=!0,b.getList(i).then(o=>{const{code:a,data:n}=o;a==200&&(F.value=n.data,w.value=n.total),I.value=!1})};L(()=>{c()});const _=d(!1),r=d({roleName:"",roleId:"",status:1,desc:"",roleValue:[]}),v=d("add"),q=Ce(()=>({add:"新增角色",edit:"编辑角色"})[v.value]),V=d(),E=()=>{v.value="add",_.value=!0,r.value={roleName:"",roleId:"",status:1,desc:"",roleValue:[]}},P=async o=>{const{code:a,data:n}=await b.getDetail(o.id);a==200&&(r.value=n,v.value="edit",_.value=!0)},H=async o=>{const{code:a,msg:n,data:p}=await b.remove(o.id);a==200&&(M.success(p),c())},S=()=>{var o;(o=V.value)==null||o.resetFields()},J=()=>{let o;v.value=="add"?o=b.add:o=b.update,o(r.value).then(a=>{const{code:n}=a;n==200&&(M.success(v.value=="add"?"新增成功":"编辑成功"),c()),S(),_.value=!1})},U=d([]),W=()=>{le.getAllMenu().then(o=>{const{code:a,data:n,msg:p}=o;a==200&&(U.value=n)})};return L(()=>{W()}),(o,a)=>{const n=ue,p=de,D=ie,f=pe,G=me,O=ce,R=re,h=_e,Q=ve,X=fe,Y=ge,B=ye,Z=ke,ee=be,te=se;return m(),x("div",Ie,[e(R,{class:"search-area"},{default:t(()=>[e(O,{ref_key:"searchFormRef",ref:T,model:i,onFinish:K},{default:t(()=>[e(G,{gutter:24},{default:t(()=>[e(D,{span:4},{default:t(()=>[e(p,{label:"角色名称",name:"keyword"},{default:t(()=>[e(n,{value:i.keyword,"onUpdate:value":a[0]||(a[0]=l=>i.keyword=l)},null,8,["value"])]),_:1})]),_:1}),e(D,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(f,{type:"primary","html-type":"submit"},{default:t(()=>[s("搜索")]),_:1}),e(f,{style:{margin:"0 8px"},onClick:A},{default:t(()=>[s(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(R,null,{default:t(()=>[z("div",Ne,[e(f,{type:"primary",onClick:E},{default:t(()=>[s("新增")]),_:1})]),e(Y,{loading:I.value,columns:j.value,"data-source":F.value,scroll:{y:440},onChange:$,pagination:{current:i.pageNumber,total:w.value}},{bodyCell:t(({column:l,record:g})=>[l.key=="status"?(m(),x(N,{key:0},[g.status?(m(),C(h,{key:0,color:"#87d068"},{default:t(()=>[s("启用")]),_:1})):(m(),C(h,{key:1,color:"#f50"},{default:t(()=>[s("停用")]),_:1}))],64)):k("",!0),l.key=="action"?(m(),x(N,{key:1},[e(f,{type:"link",onClick:ae=>P(g)},{default:t(()=>[s("编辑")]),_:2},1032,["onClick"]),e(Q,{type:"vertical"}),e(X,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:ae=>H(g)},{default:t(()=>[e(f,{type:"link",danger:""},{default:t(()=>[s("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):k("",!0),l.key=="roleType"?(m(),x(N,{key:2},[g.roleType=="app"?(m(),C(h,{key:0,color:"#2db7f5"},{default:t(()=>[s("菜单")]),_:1})):k("",!0),g.roleType=="directory"?(m(),C(h,{key:1,color:"#87d068"},{default:t(()=>[s("目录")]),_:1})):k("",!0)],64)):k("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),e(te,{open:_.value,"onUpdate:open":a[6]||(a[6]=l=>_.value=l),onOk:J,title:q.value,onCancel:S},{default:t(()=>[e(O,{model:r.value,"label-col":{span:8},ref_key:"modalFormRef",ref:V},{default:t(()=>[e(p,{label:"角色名"},{default:t(()=>[e(n,{value:r.value.roleName,"onUpdate:value":a[1]||(a[1]=l=>r.value.roleName=l)},null,8,["value"])]),_:1}),e(p,{label:"角色ID"},{default:t(()=>[e(n,{value:r.value.roleId,"onUpdate:value":a[2]||(a[2]=l=>r.value.roleId=l)},null,8,["value"])]),_:1}),e(p,{label:"状态"},{default:t(()=>[e(Z,{value:r.value.status,"onUpdate:value":a[3]||(a[3]=l=>r.value.status=l),"button-style":"solid"},{default:t(()=>[e(B,{value:1},{default:t(()=>[s("启用 ")]),_:1}),e(B,{value:0},{default:t(()=>[s("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),e(p,{label:"权限"},{default:t(()=>[z("div",Fe,[e(ee,{checkedKeys:r.value.roleValue,"onUpdate:checkedKeys":a[4]||(a[4]=l=>r.value.roleValue=l),"tree-data":U.value,checkable:"","field-names":{children:"children",title:"label",key:"id"}},null,8,["checkedKeys","tree-data"])])]),_:1}),e(p,{label:"备注"},{default:t(()=>[e(n,{value:r.value.desc,"onUpdate:value":a[5]||(a[5]=l=>r.value.desc=l)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),dt=oe(Te,[["__scopeId","data-v-467be61e"]]);export{dt as default};
