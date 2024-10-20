import{r as w,c as ee,_ as te}from"./index-Cs-9IBXQ.js";import{g as ae,m as oe,r as _,n as le,L as ne,o as s,q as b,l,w as e,e as L,U as se,V as ue,W as re,J as r,P as de,X as D,h as p,F,Y as v,y as ie,R as pe,$ as _e,a0 as me,a1 as ce,a2 as ve,a3 as fe,a4 as ye,a5 as ge,a8 as ke,a6 as we,a7 as be,a9 as xe,am as he}from"./.pnpm-CCsI2FsW.js";const x={getList:d=>w({url:"/org/list",method:"get",params:{keyword:d}}),getDetail:d=>w({url:"/org/detail",method:"get",params:{id:d}}),remove:d=>w({url:"/org/remove",method:"get",params:{id:d}}),update:d=>w({url:"/org/update",method:"post",data:d}),add:d=>w({url:"/org/add",method:"post",data:d})},Ce={class:"org"},De={class:"tools"},Fe=ae({__name:"OrgView",setup(d){const h=oe({keyword:""}),O=_([]),R=_([{title:"机构名称",key:"name",dataIndex:"name",width:"250px"},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"排序号",key:"sortNum",dataIndex:"sortNum",width:"80px"},{title:"备注",key:"remark",dataIndex:"remark",ellipsis:!0,width:"300px"},{title:"创建时间",key:"createTime",dataIndex:"createTime",width:"150px"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),N=_(!1),T=_(),j=()=>{var a;(a=T.value)==null||a.resetFields(),f()},U=_([]),E=()=>{ee.getDict(["status"]).then(a=>{const{code:t,data:u,msg:i}=a;t==200&&(U.value=u.status)})},f=()=>{N.value=!0,x.getList(h.keyword).then(a=>{const{code:t,data:u}=a;t==200&&(O.value=u),N.value=!1})};le(()=>{f(),E()});const y=_(!1),n=_({name:"",sortNum:0,pid:void 0,status:"1",remark:""}),g=_("add"),K=ne(()=>({add:"新增机构",edit:"编辑机构"})[g.value]),I=_(),V=a=>{n.value={name:"",sortNum:0,pid:void 0,status:"1",remark:""},a&&(n.value.pid=a.id),g.value="add",y.value=!0},M=async a=>await x.getDetail(a),P=async a=>{const{code:t,data:u}=await M(a.id);t==200&&(n.value=u,g.value="edit",y.value=!0)},A=async a=>{const{code:t,msg:u}=await x.remove(a.id);t==200&&(L.success(u),f())},J=()=>{var a;(a=I.value)==null||a.resetFields()},S=()=>{var a;(a=I.value)==null||a.validate().then(()=>{let t;g.value=="add"?t=x.add:t=x.update,t(n.value).then(u=>{const{code:i}=u;i==200&&(L.success(g.value=="add"?"新增成功":"编辑成功"),f()),J(),y.value=!1})})};return(a,t)=>{const u=_e,i=me,c=ce,B=ve,$=se,k=fe,W=ye,X=ge,Y=ke,z=we,G=be,H=xe,Q=he,Z=ue,C=re("has-perm");return s(),b("div",Ce,[l($,{class:"search-area"},{default:e(()=>[l(B,{ref_key:"searchFormRef",ref:T,model:h,layout:"inline",onFinish:f},{default:e(()=>[l(i,{label:"机构名称",prop:"keyword"},{default:e(()=>[l(u,{value:h.keyword,"onUpdate:value":t[0]||(t[0]=o=>h.keyword=o)},null,8,["value"])]),_:1}),l(i,null,{default:e(()=>[l(c,{type:"primary","html-type":"submit"},{default:e(()=>[r("搜索")]),_:1}),l(c,{style:{margin:"0 8px"},onClick:j},{default:e(()=>[r(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l($,null,{default:e(()=>[de("div",De,[D((s(),p(c,{type:"primary",onClick:V},{default:e(()=>[r("新增")]),_:1})),[[C,"system:org:add"]])]),l(X,{rowKey:o=>o.id,loading:N.value,columns:R.value,"data-source":O.value,pagination:!1,scroll:{y:620}},{bodyCell:e(({column:o,record:m})=>[o.key=="status"?(s(),b(F,{key:0},[m.status=="1"?(s(),p(k,{key:0,color:"#87d068"},{default:e(()=>[r("启用")]),_:1})):(s(),p(k,{key:1,color:"#f50"},{default:e(()=>[r("停用")]),_:1}))],64)):v("",!0),o.key=="action"?(s(),b(F,{key:1},[D((s(),p(c,{type:"link",onClick:q=>V(m)},{default:e(()=>[r("新增")]),_:2},1032,["onClick"])),[[C,"system:org:add"]]),D((s(),p(c,{type:"link",onClick:q=>P(m)},{default:e(()=>[r("编辑")]),_:2},1032,["onClick"])),[[C,"system:org:update"]]),l(W,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:q=>A(m)},{default:e(()=>[D((s(),p(c,{type:"link",danger:""},{default:e(()=>[r("删除")]),_:1})),[[C,"system:org:remove"]])]),_:2},1032,["onConfirm"])],64)):v("",!0),o.key=="orgType"?(s(),b(F,{key:2},[m.orgType=="app"?(s(),p(k,{key:0,color:"#2db7f5"},{default:e(()=>[r("机构")]),_:1})):v("",!0),m.orgType=="directory"?(s(),p(k,{key:1,color:"#87d068"},{default:e(()=>[r("目录")]),_:1})):v("",!0),m.orgType=="permission"?(s(),p(k,{key:2,color:"#f50"},{default:e(()=>[r("权限点")]),_:1})):v("",!0)],64)):v("",!0)]),_:1},8,["rowKey","loading","columns","data-source"])]),_:1}),l(Z,{open:y.value,"onUpdate:open":t[6]||(t[6]=o=>y.value=o),onOk:S,title:K.value},{default:e(()=>[l(B,{model:n.value,"label-col":{span:8},ref_key:"modalFormRef",ref:I},{default:e(()=>[l(i,{label:"机构名称",prop:"name",required:""},{default:e(()=>[l(u,{value:n.value.name,"onUpdate:value":t[1]||(t[1]=o=>n.value.name=o)},null,8,["value"])]),_:1}),l(i,{label:"上级节点",prop:"pid"},{default:e(()=>[l(Y,{value:n.value.pid,"onUpdate:value":t[2]||(t[2]=o=>n.value.pid=o),"tree-node-filter-prop":"label","show-search":"","allow-clear":"",treeData:O.value,"field-names":{children:"children",label:"name",value:"id"}},null,8,["value","treeData"])]),_:1}),l(i,{label:"状态",prop:"status",required:""},{default:e(()=>[l(G,{value:n.value.status,"onUpdate:value":t[3]||(t[3]=o=>n.value.status=o),"button-style":"solid"},{default:e(()=>[(s(!0),b(F,null,ie(U.value,o=>(s(),p(z,{value:o.value,key:o.value},{default:e(()=>[r(pe(o.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),l(i,{label:"排序号",prop:"sortNum",required:""},{default:e(()=>[l(H,{value:n.value.sortNum,"onUpdate:value":t[4]||(t[4]=o=>n.value.sortNum=o)},null,8,["value"])]),_:1}),l(i,{label:"备注",prop:"remark"},{default:e(()=>[l(Q,{value:n.value.remark,"onUpdate:value":t[5]||(t[5]=o=>n.value.remark=o)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),Ie=te(Fe,[["__scopeId","data-v-14f166e1"]]);export{Ie as default};