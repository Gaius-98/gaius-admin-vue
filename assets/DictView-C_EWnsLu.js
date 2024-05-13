import{d as m,S as de}from"./dict-Bwb2J60o.js";import{d as z,a2 as ie,e as d,B as pe,h as ce,N as T,O as C,k as e,V as a,a3 as P,a0 as p,a4 as re,Z as j,U as A,a5 as L,W as M,Q as _e}from"./index-Q_LEWK6E.js";import{C as me,_ as ve,a as fe}from"./index-By70sYAT.js";import{M as ye}from"./index-Df3fhuFZ.js";import{P as ge}from"./PlusOutlined-mrNONVS0.js";import{I as Te,_ as be,B as ke,F as De}from"./index-CWL3bAtR.js";import{S as Ce,T as xe,_ as Ne,a as we}from"./index-CyGgqfN5.js";import{_ as Ue,a as Fe,b as Ie}from"./index-BKBXWhj-.js";import{_ as Oe}from"./index-DT1HGZig.js";import"./index-Dk2B38mc.js";import"./index-xbjEHnFq.js";import"./FolderOutlined-DKfAmW6F.js";import"./RightOutlined-DC8EJ79U.js";const Se={class:"dict"},Ve={class:"tools"},Be=z({__name:"DictView",setup(Re){const E=z({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),s=ie({keyword:"",dictType:"",pageNumber:1,pageSize:10}),x=d([]),q=d([{title:"归属字典",key:"dictTypeDesc",dataIndex:"dictTypeDesc"},{title:"字典描述",key:"label",dataIndex:"label"},{title:"字典值",key:"value",dataIndex:"value"},{title:"状态",key:"status",dataIndex:"status"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action"}]),b=d(!1),N=d(),Q=()=>{var o;(o=N.value)==null||o.resetFields(),c()},w=d(0),W=()=>{s.pageNumber=1,s.pageSize=10,c()},Z=o=>{const{current:t,pageSize:u}=o;s.pageNumber=t,s.pageSize=u,c()},c=()=>{b.value=!0,m.getList(s).then(o=>{const{code:t,data:u}=o;t==200&&(x.value=u.data,w.value=u.total),b.value=!1})},v=d([]),U=async()=>{const{code:o,data:t,msg:u}=await m.getDictTypeList();o==200&&(v.value=t)};pe(()=>{c(),U()});const f=d(!1),n=d({label:"",value:"",dictType:"",dictTypeDesc:"",sortNum:0}),y=d("add"),G=ce(()=>({add:"新增字典",edit:"编辑字典"})[y.value]),F=d(),H=()=>{y.value="add",f.value=!0,n.value={label:"",value:"",dictType:"",dictTypeDesc:"",sortNum:0}},J=async o=>{const{code:t,data:u}=await m.getDetail(o.id);t==200&&(n.value=u,y.value="edit",f.value=!0)},K=async o=>{const{code:t,msg:u,data:i}=await m.remove(o.id);t==200&&(P.success(i),c())},I=()=>{var o;(o=F.value)==null||o.resetFields()},X=()=>{let o;y.value=="add"?o=m.add:o=m.update,o(n.value).then(t=>{const{code:u}=t;u==200&&(P.success(y.value=="add"?"新增成功":"编辑成功"),c(),U(),k.value=[]),I(),f.value=!1})},r=d(""),k=d([]),Y=o=>{o.preventDefault(),v.value.push({dictType:r.value,dictTypeDesc:r.value}),k.value.push(r.value),r.value=""},h=()=>{n.value.dictTypeDesc=v.value.find(o=>o.dictType==n.value.dictType).dictTypeDesc};return(o,t)=>{const u=Te,i=be,D=ve,O=Ce,_=ke,ee=fe,S=De,V=me,B=xe,R=Ue,te=Fe,ae=Ie,le=de,oe=Oe,$=Ne,ne=we,ue=ye;return T(),C("div",Se,[e(V,{class:"search-area"},{default:a(()=>[e(S,{ref_key:"searchFormRef",ref:N,model:s,onFinish:W},{default:a(()=>[e(ee,{gutter:24},{default:a(()=>[e(D,{span:4},{default:a(()=>[e(i,{label:"字典描述",name:"keyword"},{default:a(()=>[e(u,{value:s.keyword,"onUpdate:value":t[0]||(t[0]=l=>s.keyword=l)},null,8,["value"])]),_:1})]),_:1}),e(D,{span:4},{default:a(()=>[e(i,{label:"归属字典",name:"dictType"},{default:a(()=>[e(O,{value:s.dictType,"onUpdate:value":t[1]||(t[1]=l=>s.dictType=l),fieldNames:{label:"dictTypeDesc",value:"dictType"},allowClear:"",options:v.value},null,8,["value","options"])]),_:1})]),_:1}),e(D,{span:4,style:{"text-align":"right"}},{default:a(()=>[e(_,{type:"primary","html-type":"submit"},{default:a(()=>[p("搜索")]),_:1}),e(_,{style:{margin:"0 8px"},onClick:Q},{default:a(()=>[p(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(V,null,{default:a(()=>[re("div",Ve,[e(_,{type:"primary",onClick:H},{default:a(()=>[p("新增")]),_:1})]),e(ae,{loading:b.value,columns:q.value,"data-source":x.value,pagination:{current:s.pageNumber,total:w.value},current:s.pageNumber,"onUpdate:current":t[2]||(t[2]=l=>s.pageNumber=l),onChange:Z,scroll:{y:440}},{bodyCell:a(({column:l,record:g})=>[l.key=="status"?(T(),C(j,{key:0},[g.status?(T(),A(B,{key:0,color:"#87d068"},{default:a(()=>[p("启用")]),_:1})):(T(),A(B,{key:1,color:"#f50"},{default:a(()=>[p("停用")]),_:1}))],64)):L("",!0),l.key=="action"?(T(),C(j,{key:1},[e(_,{type:"link",onClick:se=>J(g)},{default:a(()=>[p("编辑")]),_:2},1032,["onClick"]),e(R,{type:"vertical"}),e(te,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:se=>K(g)},{default:a(()=>[e(_,{type:"link",danger:""},{default:a(()=>[p("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):L("",!0)]),_:1},8,["loading","columns","data-source","pagination","current"])]),_:1}),e(ue,{open:f.value,"onUpdate:open":t[11]||(t[11]=l=>f.value=l),onOk:X,title:G.value,onCancel:I},{default:a(()=>[e(S,{model:n.value,"label-col":{span:8},ref_key:"modalFormRef",ref:F},{default:a(()=>[e(i,{label:"字典类型"},{default:a(()=>[e(O,{value:n.value.dictType,"onUpdate:value":t[4]||(t[4]=l=>n.value.dictType=l),fieldNames:{label:"dictType",value:"dictType"},options:v.value,onChange:h},{dropdownRender:a(({menuNode:l})=>[e(M(E),{vnodes:l},null,8,["vnodes"]),e(R,{style:{margin:"4px 0"}}),e(le,{style:{padding:"4px 8px"}},{default:a(()=>[e(u,{ref:"inputRef",value:r.value,"onUpdate:value":t[3]||(t[3]=g=>r.value=g),placeholder:"请输入字典类型"},null,8,["value"]),e(_,{type:"text",onClick:Y},{icon:a(()=>[e(M(ge))]),default:a(()=>[p(" 增加类型 ")]),_:1})]),_:1})]),_:1},8,["value","options"])]),_:1}),e(i,{label:"字典类型描述"},{default:a(()=>[e(u,{value:n.value.dictTypeDesc,"onUpdate:value":t[5]||(t[5]=l=>n.value.dictTypeDesc=l),disabled:!k.value.includes(n.value.dictType)},null,8,["value","disabled"])]),_:1}),e(i,{label:"字典描述"},{default:a(()=>[e(u,{value:n.value.label,"onUpdate:value":t[6]||(t[6]=l=>n.value.label=l)},null,8,["value"])]),_:1}),e(i,{label:"字典值"},{default:a(()=>[e(u,{value:n.value.value,"onUpdate:value":t[7]||(t[7]=l=>n.value.value=l)},null,8,["value"])]),_:1}),e(i,{label:"排序号"},{default:a(()=>[e(oe,{value:n.value.sortNum,"onUpdate:value":t[8]||(t[8]=l=>n.value.sortNum=l)},null,8,["value"])]),_:1}),e(i,{label:"状态"},{default:a(()=>[e(ne,{value:n.value.status,"onUpdate:value":t[9]||(t[9]=l=>n.value.status=l),"button-style":"solid"},{default:a(()=>[e($,{value:1},{default:a(()=>[p("启用 ")]),_:1}),e($,{value:0},{default:a(()=>[p("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),e(i,{label:"描述"},{default:a(()=>[e(u,{type:"textarea",value:n.value.desc,"onUpdate:value":t[10]||(t[10]=l=>n.value.desc=l)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),He=_e(Be,[["__scopeId","data-v-05ac1c09"]]);export{He as default};
