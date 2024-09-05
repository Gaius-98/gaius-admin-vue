import{d as v}from"./dict-DhJbkgo3.js";import{e as S,m as de,r as d,n as ie,L as ce,o as T,q as x,j as e,w as a,c as z,U as pe,V as _e,J as c,P as re,F as L,g as P,W as A,h as q,aa as ve,X as me,Y as fe,Z as ye,T as ge,$ as Te,a0 as be,a1 as ke,a3 as De,K as xe,a2 as Ce,a4 as Ne,aj as we,a8 as Ue,a5 as Fe,a6 as Ie}from"./.pnpm-0Jz4sC39.js";import{_ as Oe}from"./index-L8l6AuQJ.js";const Ve={class:"dict"},$e={class:"tools"},Re=S({__name:"DictView",setup(je){const E=S({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),s=de({keyword:"",dictType:"",pageNumber:1,pageSize:10}),C=d([]),M=d([{title:"归属字典",key:"dictTypeDesc",dataIndex:"dictTypeDesc"},{title:"字典描述",key:"label",dataIndex:"label"},{title:"字典值",key:"value",dataIndex:"value"},{title:"状态",key:"status",dataIndex:"status"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action"}]),b=d(!1),N=d(),J=()=>{var n;(n=N.value)==null||n.resetFields(),p()},w=d(0),K=()=>{s.pageNumber=1,s.pageSize=10,p()},W=n=>{const{current:t,pageSize:u}=n;s.pageNumber=t,s.pageSize=u,p()},p=()=>{b.value=!0,v.getList(s).then(n=>{const{code:t,data:u}=n;t==200&&(C.value=u.data,w.value=u.total),b.value=!1})},m=d([]),U=async()=>{const{code:n,data:t,msg:u}=await v.getDictTypeList();n==200&&(m.value=t)};ie(()=>{p(),U()});const f=d(!1),o=d({label:"",value:"",dictType:"",dictTypeDesc:"",sortNum:0}),y=d("add"),X=ce(()=>({add:"新增字典",edit:"编辑字典"})[y.value]),F=d(),Y=()=>{y.value="add",f.value=!0,o.value={label:"",value:"",dictType:"",dictTypeDesc:"",sortNum:0}},Z=async n=>{const{code:t,data:u}=await v.getDetail(n.id);t==200&&(o.value=u,y.value="edit",f.value=!0)},G=async n=>{const{code:t,msg:u,data:i}=await v.remove(n.id);t==200&&(z.success(i),p())},I=()=>{var n;(n=F.value)==null||n.resetFields()},H=()=>{let n;y.value=="add"?n=v.add:n=v.update,n(o.value).then(t=>{const{code:u}=t;u==200&&(z.success(y.value=="add"?"新增成功":"编辑成功"),p(),U(),k.value=[]),I(),f.value=!1})},_=d(""),k=d([]),Q=n=>{n.preventDefault(),m.value.push({dictType:_.value,dictTypeDesc:_.value}),k.value.push(_.value),_.value=""},h=()=>{o.value.dictTypeDesc=m.value.find(n=>n.dictType==o.value.dictType).dictTypeDesc};return(n,t)=>{const u=me,i=fe,D=ye,O=ge,r=Te,ee=be,V=ke,$=pe,R=De,j=xe,te=Ce,ae=Ne,le=we,ne=Ue,B=Fe,oe=Ie,ue=_e;return T(),x("div",Ve,[e($,{class:"search-area"},{default:a(()=>[e(V,{ref_key:"searchFormRef",ref:N,model:s,onFinish:K},{default:a(()=>[e(ee,{gutter:24},{default:a(()=>[e(D,{span:4},{default:a(()=>[e(i,{label:"字典描述",name:"keyword"},{default:a(()=>[e(u,{value:s.keyword,"onUpdate:value":t[0]||(t[0]=l=>s.keyword=l)},null,8,["value"])]),_:1})]),_:1}),e(D,{span:4},{default:a(()=>[e(i,{label:"归属字典",name:"dictType"},{default:a(()=>[e(O,{value:s.dictType,"onUpdate:value":t[1]||(t[1]=l=>s.dictType=l),fieldNames:{label:"dictTypeDesc",value:"dictType"},allowClear:"",options:m.value},null,8,["value","options"])]),_:1})]),_:1}),e(D,{span:4,style:{"text-align":"right"}},{default:a(()=>[e(r,{type:"primary","html-type":"submit"},{default:a(()=>[c("搜索")]),_:1}),e(r,{style:{margin:"0 8px"},onClick:J},{default:a(()=>[c(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e($,null,{default:a(()=>[re("div",$e,[e(r,{type:"primary",onClick:Y},{default:a(()=>[c("新增")]),_:1})]),e(ae,{loading:b.value,columns:M.value,"data-source":C.value,pagination:{current:s.pageNumber,total:w.value},current:s.pageNumber,"onUpdate:current":t[2]||(t[2]=l=>s.pageNumber=l),onChange:W,scroll:{y:440}},{bodyCell:a(({column:l,record:g})=>[l.key=="status"?(T(),x(L,{key:0},[g.status?(T(),P(R,{key:0,color:"#87d068"},{default:a(()=>[c("启用")]),_:1})):(T(),P(R,{key:1,color:"#f50"},{default:a(()=>[c("停用")]),_:1}))],64)):A("",!0),l.key=="action"?(T(),x(L,{key:1},[e(r,{type:"link",onClick:se=>Z(g)},{default:a(()=>[c("编辑")]),_:2},1032,["onClick"]),e(j,{type:"vertical"}),e(te,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:se=>G(g)},{default:a(()=>[e(r,{type:"link",danger:""},{default:a(()=>[c("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):A("",!0)]),_:1},8,["loading","columns","data-source","pagination","current"])]),_:1}),e(ue,{open:f.value,"onUpdate:open":t[11]||(t[11]=l=>f.value=l),onOk:H,title:X.value,onCancel:I},{default:a(()=>[e(V,{model:o.value,"label-col":{span:8},ref_key:"modalFormRef",ref:F},{default:a(()=>[e(i,{label:"字典类型"},{default:a(()=>[e(O,{value:o.value.dictType,"onUpdate:value":t[4]||(t[4]=l=>o.value.dictType=l),fieldNames:{label:"dictType",value:"dictType"},options:m.value,onChange:h},{dropdownRender:a(({menuNode:l})=>[e(q(E),{vnodes:l},null,8,["vnodes"]),e(j,{style:{margin:"4px 0"}}),e(le,{style:{padding:"4px 8px"}},{default:a(()=>[e(u,{ref:"inputRef",value:_.value,"onUpdate:value":t[3]||(t[3]=g=>_.value=g),placeholder:"请输入字典类型"},null,8,["value"]),e(r,{type:"text",onClick:Q},{icon:a(()=>[e(q(ve))]),default:a(()=>[c(" 增加类型 ")]),_:1})]),_:1})]),_:1},8,["value","options"])]),_:1}),e(i,{label:"字典类型描述"},{default:a(()=>[e(u,{value:o.value.dictTypeDesc,"onUpdate:value":t[5]||(t[5]=l=>o.value.dictTypeDesc=l),disabled:!k.value.includes(o.value.dictType)},null,8,["value","disabled"])]),_:1}),e(i,{label:"字典描述"},{default:a(()=>[e(u,{value:o.value.label,"onUpdate:value":t[6]||(t[6]=l=>o.value.label=l)},null,8,["value"])]),_:1}),e(i,{label:"字典值"},{default:a(()=>[e(u,{value:o.value.value,"onUpdate:value":t[7]||(t[7]=l=>o.value.value=l)},null,8,["value"])]),_:1}),e(i,{label:"排序号"},{default:a(()=>[e(ne,{value:o.value.sortNum,"onUpdate:value":t[8]||(t[8]=l=>o.value.sortNum=l)},null,8,["value"])]),_:1}),e(i,{label:"状态"},{default:a(()=>[e(oe,{value:o.value.status,"onUpdate:value":t[9]||(t[9]=l=>o.value.status=l),"button-style":"solid"},{default:a(()=>[e(B,{value:1},{default:a(()=>[c("启用 ")]),_:1}),e(B,{value:0},{default:a(()=>[c("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),e(i,{label:"描述"},{default:a(()=>[e(u,{type:"textarea",value:o.value.desc,"onUpdate:value":t[10]||(t[10]=l=>o.value.desc=l)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),Le=Oe(Re,[["__scopeId","data-v-05ac1c09"]]);export{Le as default};
