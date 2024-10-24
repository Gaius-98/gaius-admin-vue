import{r as w,c as ee,_ as te}from"./index-UYYxOZ8-.js";import{g as ae,m as oe,r as _,n as le,M as ne,o as s,q as b,l,w as e,e as L,W as se,X as ue,Y as re,K as r,Q as de,$ as D,h as p,F,a0 as v,y as ie,T as pe,a1 as _e,a2 as me,a3 as ce,a4 as ve,a5 as fe,a6 as ye,a7 as ge,aa as ke,a8 as we,a9 as be,ab as xe,an as he}from"./.pnpm-CQm76_te.js";const x={getList:d=>w({url:"/org/list",method:"get",params:{keyword:d}}),getDetail:d=>w({url:"/org/detail",method:"get",params:{id:d}}),remove:d=>w({url:"/org/remove",method:"get",params:{id:d}}),update:d=>w({url:"/org/update",method:"post",data:d}),add:d=>w({url:"/org/add",method:"post",data:d})},Ce={class:"org"},De={class:"tools"},Fe=ae({__name:"OrgView",setup(d){const h=oe({keyword:""}),O=_([]),R=_([{title:"机构名称",key:"name",dataIndex:"name",width:"250px"},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"排序号",key:"sortNum",dataIndex:"sortNum",width:"80px"},{title:"备注",key:"remark",dataIndex:"remark",ellipsis:!0,width:"300px"},{title:"创建时间",key:"createTime",dataIndex:"createTime",width:"150px"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),N=_(!1),I=_(),K=()=>{var a;(a=I.value)==null||a.resetFields(),f()},U=_([]),M=()=>{ee.getDict(["status"]).then(a=>{const{code:t,data:u,msg:i}=a;t==200&&(U.value=u.status)})},f=()=>{N.value=!0,x.getList(h.keyword).then(a=>{const{code:t,data:u}=a;t==200&&(O.value=u),N.value=!1})};le(()=>{f(),M()});const y=_(!1),n=_({name:"",sortNum:0,pid:void 0,status:"1",remark:""}),g=_("add"),j=ne(()=>({add:"新增机构",edit:"编辑机构"})[g.value]),T=_(),B=a=>{n.value={name:"",sortNum:0,pid:void 0,status:"1",remark:""},a&&(n.value.pid=a.id),g.value="add",y.value=!0},E=async a=>await x.getDetail(a),A=async a=>{const{code:t,data:u}=await E(a.id);t==200&&(n.value=u,g.value="edit",y.value=!0)},P=async a=>{const{code:t,msg:u}=await x.remove(a.id);t==200&&(L.success(u),f())},Q=()=>{var a;(a=T.value)==null||a.resetFields()},S=()=>{var a;(a=T.value)==null||a.validate().then(()=>{let t;g.value=="add"?t=x.add:t=x.update,t(n.value).then(u=>{const{code:i}=u;i==200&&(L.success(g.value=="add"?"新增成功":"编辑成功"),f()),Q(),y.value=!1})})};return(a,t)=>{const u=_e,i=me,c=ce,V=ve,$=se,k=fe,W=ye,X=ge,Y=ke,z=we,G=be,H=xe,J=he,Z=ue,C=re("has-perm");return s(),b("div",Ce,[l($,{class:"search-area"},{default:e(()=>[l(V,{ref_key:"searchFormRef",ref:I,model:h,layout:"inline",onFinish:f},{default:e(()=>[l(i,{label:"机构名称",prop:"keyword"},{default:e(()=>[l(u,{value:h.keyword,"onUpdate:value":t[0]||(t[0]=o=>h.keyword=o)},null,8,["value"])]),_:1}),l(i,null,{default:e(()=>[l(c,{type:"primary","html-type":"submit"},{default:e(()=>[r("搜索")]),_:1}),l(c,{style:{margin:"0 8px"},onClick:K},{default:e(()=>[r(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l($,null,{default:e(()=>[de("div",De,[D((s(),p(c,{type:"primary",onClick:B},{default:e(()=>[r("新增")]),_:1})),[[C,"system:org:add"]])]),l(X,{rowKey:o=>o.id,loading:N.value,columns:R.value,"data-source":O.value,pagination:!1,scroll:{y:620}},{bodyCell:e(({column:o,record:m})=>[o.key=="status"?(s(),b(F,{key:0},[m.status=="1"?(s(),p(k,{key:0,color:"#87d068"},{default:e(()=>[r("启用")]),_:1})):(s(),p(k,{key:1,color:"#f50"},{default:e(()=>[r("停用")]),_:1}))],64)):v("",!0),o.key=="action"?(s(),b(F,{key:1},[D((s(),p(c,{type:"link",onClick:q=>B(m)},{default:e(()=>[r("新增")]),_:2},1032,["onClick"])),[[C,"system:org:add"]]),D((s(),p(c,{type:"link",onClick:q=>A(m)},{default:e(()=>[r("编辑")]),_:2},1032,["onClick"])),[[C,"system:org:update"]]),l(W,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:q=>P(m)},{default:e(()=>[D((s(),p(c,{type:"link",danger:""},{default:e(()=>[r("删除")]),_:1})),[[C,"system:org:remove"]])]),_:2},1032,["onConfirm"])],64)):v("",!0),o.key=="orgType"?(s(),b(F,{key:2},[m.orgType=="app"?(s(),p(k,{key:0,color:"#2db7f5"},{default:e(()=>[r("机构")]),_:1})):v("",!0),m.orgType=="directory"?(s(),p(k,{key:1,color:"#87d068"},{default:e(()=>[r("目录")]),_:1})):v("",!0),m.orgType=="permission"?(s(),p(k,{key:2,color:"#f50"},{default:e(()=>[r("权限点")]),_:1})):v("",!0)],64)):v("",!0)]),_:1},8,["rowKey","loading","columns","data-source"])]),_:1}),l(Z,{open:y.value,"onUpdate:open":t[6]||(t[6]=o=>y.value=o),onOk:S,title:j.value},{default:e(()=>[l(V,{model:n.value,"label-col":{span:8},ref_key:"modalFormRef",ref:T},{default:e(()=>[l(i,{label:"机构名称",prop:"name",required:""},{default:e(()=>[l(u,{value:n.value.name,"onUpdate:value":t[1]||(t[1]=o=>n.value.name=o)},null,8,["value"])]),_:1}),l(i,{label:"上级节点",prop:"pid"},{default:e(()=>[l(Y,{value:n.value.pid,"onUpdate:value":t[2]||(t[2]=o=>n.value.pid=o),"tree-node-filter-prop":"label","show-search":"","allow-clear":"",treeData:O.value,"field-names":{children:"children",label:"name",value:"id"}},null,8,["value","treeData"])]),_:1}),l(i,{label:"状态",prop:"status",required:""},{default:e(()=>[l(G,{value:n.value.status,"onUpdate:value":t[3]||(t[3]=o=>n.value.status=o),"button-style":"solid"},{default:e(()=>[(s(!0),b(F,null,ie(U.value,o=>(s(),p(z,{value:o.value,key:o.value},{default:e(()=>[r(pe(o.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),l(i,{label:"排序号",prop:"sortNum",required:""},{default:e(()=>[l(H,{value:n.value.sortNum,"onUpdate:value":t[4]||(t[4]=o=>n.value.sortNum=o)},null,8,["value"])]),_:1}),l(i,{label:"备注",prop:"remark"},{default:e(()=>[l(J,{value:n.value.remark,"onUpdate:value":t[5]||(t[5]=o=>n.value.remark=o)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),Te=te(Fe,[["__scopeId","data-v-14f166e1"]]);export{Te as default};