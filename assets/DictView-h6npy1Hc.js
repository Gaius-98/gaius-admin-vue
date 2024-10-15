import{d as _}from"./dict-Wb7WdAIz.js";import{g as ve,m as ye,r as u,n as fe,L as Y,U as ke,o as d,q as w,l as a,w as t,e as U,V as ge,W as De,J as s,P as be,X as b,i as m,F as I,Y as O,T as Te,a0 as xe,a1 as Ce,a2 as we,a3 as Ne,a4 as Fe,a5 as Ue,a6 as Ie,K as Oe,a7 as $e,$ as he,a8 as Re,a9 as Ve,ab as Be}from"./.pnpm-Cqh-doGy.js";import{_ as Le}from"./index-DK5QFDbs.js";const Pe={class:"dict"},Se={class:"tools"},je=ve({__name:"DictView",setup(ze){const p=ye({keyword:"",dictType:"",pageNumber:1,pageSize:10}),B=u([]),G=u([{title:"字典类型",key:"dictType",dataIndex:"dictType",width:"300px"},{title:"类型描述",key:"dictTypeDesc",dataIndex:"dictTypeDesc",width:"300px"},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"备注",key:"remark",dataIndex:"remark"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),H=u([{title:"字典值",key:"value",dataIndex:"value",width:"300px"},{title:"翻译值",key:"label",dataIndex:"label",width:"300px"},{title:"排序号",key:"sortNum",dataIndex:"sortNum",width:"120px"},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"备注",key:"remark",dataIndex:"remark"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),$=u(!1),L=u(),Q=()=>{var l;(l=L.value)==null||l.resetFields(),v()},P=u(0),Z=()=>{p.pageNumber=1,p.pageSize=10,v()},ee=l=>{const{current:e,pageSize:n}=l;p.pageNumber=e,p.pageSize=n,v()},v=()=>{$.value=!0,_.getTypeList(p).then(l=>{const{code:e,data:n}=l;e==200&&(B.value=n.data,P.value=n.total),$.value=!1})},h=u([]),S=async()=>{const{code:l,data:e,msg:n}=await _.getDictTypeList();l==200&&(h.value=e)};fe(()=>{v(),S()});const T=u(!1),r=u({dictType:"",dictTypeDesc:"",remark:"",status:1}),f=u("add"),te=Y(()=>({add:"新增字典类型",edit:"编辑字典类型"})[f.value]),R=u("add"),ae=Y(()=>({add:"新增字典",edit:"编辑字典"})[R.value]),j=u(),le=()=>{f.value="add",T.value=!0,r.value={dictType:"",dictTypeDesc:"",status:1,remark:""}},oe=async l=>{const{code:e,data:n}=await _.getTypeDetail(l.id);e==200&&(r.value=n,f.value="edit",T.value=!0)},ne=async l=>{const{code:e,msg:n,data:c}=await _.removeType(l.id);e==200&&(U.success(c),p.pageNumber=1,v())},se=async l=>{const{code:e,msg:n,data:c}=await _.removeData(l.id);e==200&&(U.success(c),v())},z=()=>{var l;(l=j.value)==null||l.resetFields()},E=()=>{var l;(l=M.value)==null||l.resetFields()},ue=()=>{let l;f.value=="add"?l=_.addType:l=_.updateType,l(r.value).then(e=>{const{code:n}=e;n==200&&(U.success(f.value=="add"?"新增成功":"编辑成功"),v()),z(),T.value=!1})},de=()=>{let l;f.value=="add"?l=_.addData:l=_.updateData,l(i.value).then(e=>{const{code:n}=e;n==200&&(U.success(f.value=="add"?"新增成功":"编辑成功"),v(),S()),E(),x.value=!1})},x=u(!1),ie=async l=>{const{code:e,data:n}=await _.getDictDetail(l.id);e==200&&(x.value=!0,R.value="edit",i.value=n)},ce=l=>{x.value=!0,R.value="add",i.value={dictType:l.dictType,label:"",value:"",status:1,sortNum:0}},i=u({label:"",value:"",sortNum:0,status:1,dictType:""}),M=u();return(l,e)=>{const n=Te,c=xe,A=Ce,y=we,pe=Ne,V=Fe,K=ge,N=Ue,q=Ie,re=Oe,J=$e,C=he,F=Re,W=Ve,X=De,_e=Be,g=ke("has-perm");return d(),w("div",Pe,[a(K,{class:"search-area"},{default:t(()=>[a(V,{ref_key:"searchFormRef",ref:L,model:p,onFinish:Z},{default:t(()=>[a(pe,{gutter:24},{default:t(()=>[a(A,{span:4},{default:t(()=>[a(c,{label:"字典类型",name:"dictType"},{default:t(()=>[a(n,{value:p.dictType,"onUpdate:value":e[0]||(e[0]=o=>p.dictType=o),fieldNames:{label:"dictTypeDesc",value:"dictType"},optionFilterProp:"dictTypeDesc","show-search":"",allowClear:"",options:h.value},null,8,["value","options"])]),_:1})]),_:1}),a(A,{span:4,style:{"text-align":"right"}},{default:t(()=>[a(y,{type:"primary","html-type":"submit"},{default:t(()=>[s("搜索")]),_:1}),a(y,{style:{margin:"0 8px"},onClick:Q},{default:t(()=>[s(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(K,null,{default:t(()=>[be("div",Se,[b((d(),m(y,{type:"primary",onClick:le},{default:t(()=>[s("新增")]),_:1})),[[g,"system:dict:add"]])]),a(J,{loading:$.value,columns:G.value,"data-source":B.value,pagination:{current:p.pageNumber,total:P.value},current:p.pageNumber,"onUpdate:current":e[1]||(e[1]=o=>p.pageNumber=o),onChange:ee,scroll:{y:440},rowKey:"id"},{bodyCell:t(({column:o,record:k})=>[o.key=="status"?(d(),w(I,{key:0},[k.status=="1"?(d(),m(N,{key:0,color:"#87d068"},{default:t(()=>[s("启用")]),_:1})):(d(),m(N,{key:1,color:"#f50"},{default:t(()=>[s("停用")]),_:1}))],64)):O("",!0),o.key=="action"?(d(),w(I,{key:1},[b((d(),m(y,{type:"link",onClick:D=>ce(k)},{default:t(()=>[s("新增")]),_:2},1032,["onClick"])),[[g,"system:dict:add"]]),b((d(),m(y,{type:"link",onClick:D=>oe(k)},{default:t(()=>[s("编辑")]),_:2},1032,["onClick"])),[[g,"system:dict:update"]]),a(q,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:D=>ne(k)},{default:t(()=>[b((d(),m(y,{type:"link",danger:""},{default:t(()=>[s("删除")]),_:1})),[[g,"system:dict:remove"]])]),_:2},1032,["onConfirm"])],64)):O("",!0)]),expandedRowRender:t(({record:o})=>[a(J,{columns:H.value,pagination:!1,"data-source":o.dictDataList},{bodyCell:t(({column:k,record:D})=>[k.key=="status"?(d(),w(I,{key:0},[D.status?(d(),m(N,{key:0,color:"#87d068"},{default:t(()=>[s("启用")]),_:1})):(d(),m(N,{key:1,color:"#f50"},{default:t(()=>[s("停用")]),_:1}))],64)):O("",!0),k.key=="action"?(d(),w(I,{key:1},[b((d(),m(y,{type:"link",onClick:me=>ie(D)},{default:t(()=>[s("编辑")]),_:2},1032,["onClick"])),[[g,"system:dict:update"]]),a(re,{type:"vertical"}),a(q,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:me=>se(D)},{default:t(()=>[b((d(),m(y,{type:"link",danger:""},{default:t(()=>[s("删除")]),_:1})),[[g,"system:dict:remove"]])]),_:2},1032,["onConfirm"])],64)):O("",!0)]),_:2},1032,["columns","data-source"])]),_:1},8,["loading","columns","data-source","pagination","current"])]),_:1}),a(X,{open:T.value,"onUpdate:open":e[6]||(e[6]=o=>T.value=o),onOk:ue,title:te.value,onCancel:z},{default:t(()=>[a(V,{model:r.value,"label-col":{span:8},ref_key:"modalFormRef",ref:j},{default:t(()=>[a(c,{label:"字典类型值"},{default:t(()=>[a(C,{value:r.value.dictType,"onUpdate:value":e[2]||(e[2]=o=>r.value.dictType=o)},null,8,["value"])]),_:1}),a(c,{label:"字典类型描述"},{default:t(()=>[a(C,{value:r.value.dictTypeDesc,"onUpdate:value":e[3]||(e[3]=o=>r.value.dictTypeDesc=o)},null,8,["value"])]),_:1}),a(c,{label:"状态"},{default:t(()=>[a(W,{value:r.value.status,"onUpdate:value":e[4]||(e[4]=o=>r.value.status=o),"button-style":"solid"},{default:t(()=>[a(F,{value:"1"},{default:t(()=>[s("启用 ")]),_:1}),a(F,{value:"0"},{default:t(()=>[s("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),a(c,{label:"描述"},{default:t(()=>[a(C,{type:"textarea",value:r.value.remark,"onUpdate:value":e[5]||(e[5]=o=>r.value.remark=o)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"]),a(X,{open:x.value,"onUpdate:open":e[12]||(e[12]=o=>x.value=o),title:ae.value,onOk:de,onCancel:E},{default:t(()=>[a(V,{model:i.value,"label-col":{span:8},ref_key:"modalDictDataRef",ref:M},{default:t(()=>[a(c,{label:"所属类型"},{default:t(()=>[a(n,{value:i.value.dictType,"onUpdate:value":e[7]||(e[7]=o=>i.value.dictType=o),fieldNames:{label:"dictTypeDesc",value:"dictType"},optionFilterProp:"dictTypeDesc","show-search":"",allowClear:"",options:h.value,disabled:""},null,8,["value","options"])]),_:1}),a(c,{label:"字典值"},{default:t(()=>[a(C,{value:i.value.value,"onUpdate:value":e[8]||(e[8]=o=>i.value.value=o)},null,8,["value"])]),_:1}),a(c,{label:"字典翻译"},{default:t(()=>[a(C,{value:i.value.label,"onUpdate:value":e[9]||(e[9]=o=>i.value.label=o)},null,8,["value"])]),_:1}),a(c,{label:"排序号"},{default:t(()=>[a(_e,{min:0,step:1,value:i.value.sortNum,"onUpdate:value":e[10]||(e[10]=o=>i.value.sortNum=o)},null,8,["value"])]),_:1}),a(c,{label:"状态"},{default:t(()=>[a(W,{value:i.value.status,"onUpdate:value":e[11]||(e[11]=o=>i.value.status=o),"button-style":"solid"},{default:t(()=>[a(F,{value:"1"},{default:t(()=>[s("启用 ")]),_:1}),a(F,{value:"0"},{default:t(()=>[s("停用 ")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),Ke=Le(je,[["__scopeId","data-v-a846d0dc"]]);export{Ke as default};
