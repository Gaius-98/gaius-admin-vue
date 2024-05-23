import{d as m}from"./dict-Cvw5nVgS.js";import{d as P,Y as de,r as d,b as ie,p as pe,D as T,E as C,g as e,J as a,Z as j,W as p,$ as ce,N as A,I as E,a0 as L,K as M,F as re}from"./index-Pu50Ti4l.js";import{C as _e}from"./ActionButton-BURE71X2.js";import{M as me}from"./index-C3UQ7f1z.js";import{I as ve,_ as fe,B as ye,F as ge}from"./index-cHQbFAze.js";import{S as Te,_ as be,a as ke}from"./index-8G3Ipt2F.js";import{T as De}from"./index-DWRQBLZO.js";import{S as Ce}from"./index-CzaUU9cU.js";import{P as xe}from"./PlusOutlined-ikZ1FGXJ.js";import{_ as Ne,a as we}from"./index-BypFAKRh.js";import{_ as Fe}from"./index-DY0dzlKc.js";import{_ as Ue}from"./index-iF9kPiNd.js";import{_ as Ie}from"./index-BX5_ivGM.js";import{_ as Se}from"./index-CKYeVaAc.js";import"./index-DKIsZd3t.js";import"./FolderOutlined-CI8h7Ti8.js";const Oe={class:"dict"},Ve={class:"tools"},Be=P({__name:"DictView",setup(Re){const $=P({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}}),s=de({keyword:"",dictType:"",pageNumber:1,pageSize:10}),x=d([]),q=d([{title:"归属字典",key:"dictTypeDesc",dataIndex:"dictTypeDesc"},{title:"字典描述",key:"label",dataIndex:"label"},{title:"字典值",key:"value",dataIndex:"value"},{title:"状态",key:"status",dataIndex:"status"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action"}]),b=d(!1),N=d(),J=()=>{var o;(o=N.value)==null||o.resetFields(),c()},w=d(0),K=()=>{s.pageNumber=1,s.pageSize=10,c()},W=o=>{const{current:t,pageSize:u}=o;s.pageNumber=t,s.pageSize=u,c()},c=()=>{b.value=!0,m.getList(s).then(o=>{const{code:t,data:u}=o;t==200&&(x.value=u.data,w.value=u.total),b.value=!1})},v=d([]),F=async()=>{const{code:o,data:t,msg:u}=await m.getDictTypeList();o==200&&(v.value=t)};ie(()=>{c(),F()});const f=d(!1),n=d({label:"",value:"",dictType:"",dictTypeDesc:"",sortNum:0}),y=d("add"),Y=pe(()=>({add:"新增字典",edit:"编辑字典"})[y.value]),U=d(),Z=()=>{y.value="add",f.value=!0,n.value={label:"",value:"",dictType:"",dictTypeDesc:"",sortNum:0}},G=async o=>{const{code:t,data:u}=await m.getDetail(o.id);t==200&&(n.value=u,y.value="edit",f.value=!0)},H=async o=>{const{code:t,msg:u,data:i}=await m.remove(o.id);t==200&&(j.success(i),c())},I=()=>{var o;(o=U.value)==null||o.resetFields()},Q=()=>{let o;y.value=="add"?o=m.add:o=m.update,o(n.value).then(t=>{const{code:u}=t;u==200&&(j.success(y.value=="add"?"新增成功":"编辑成功"),c(),F(),k.value=[]),I(),f.value=!1})},r=d(""),k=d([]),X=o=>{o.preventDefault(),v.value.push({dictType:r.value,dictTypeDesc:r.value}),k.value.push(r.value),r.value=""},h=()=>{n.value.dictTypeDesc=v.value.find(o=>o.dictType==n.value.dictType).dictTypeDesc};return(o,t)=>{const u=ve,i=fe,D=Ne,S=Te,_=ye,ee=we,O=ge,V=_e,B=De,R=Fe,te=Ue,ae=Ie,le=Ce,oe=Se,z=be,ne=ke,ue=me;return T(),C("div",Oe,[e(V,{class:"search-area"},{default:a(()=>[e(O,{ref_key:"searchFormRef",ref:N,model:s,onFinish:K},{default:a(()=>[e(ee,{gutter:24},{default:a(()=>[e(D,{span:4},{default:a(()=>[e(i,{label:"字典描述",name:"keyword"},{default:a(()=>[e(u,{value:s.keyword,"onUpdate:value":t[0]||(t[0]=l=>s.keyword=l)},null,8,["value"])]),_:1})]),_:1}),e(D,{span:4},{default:a(()=>[e(i,{label:"归属字典",name:"dictType"},{default:a(()=>[e(S,{value:s.dictType,"onUpdate:value":t[1]||(t[1]=l=>s.dictType=l),fieldNames:{label:"dictTypeDesc",value:"dictType"},allowClear:"",options:v.value},null,8,["value","options"])]),_:1})]),_:1}),e(D,{span:4,style:{"text-align":"right"}},{default:a(()=>[e(_,{type:"primary","html-type":"submit"},{default:a(()=>[p("搜索")]),_:1}),e(_,{style:{margin:"0 8px"},onClick:J},{default:a(()=>[p(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(V,null,{default:a(()=>[ce("div",Ve,[e(_,{type:"primary",onClick:Z},{default:a(()=>[p("新增")]),_:1})]),e(ae,{loading:b.value,columns:q.value,"data-source":x.value,pagination:{current:s.pageNumber,total:w.value},current:s.pageNumber,"onUpdate:current":t[2]||(t[2]=l=>s.pageNumber=l),onChange:W,scroll:{y:440}},{bodyCell:a(({column:l,record:g})=>[l.key=="status"?(T(),C(A,{key:0},[g.status?(T(),E(B,{key:0,color:"#87d068"},{default:a(()=>[p("启用")]),_:1})):(T(),E(B,{key:1,color:"#f50"},{default:a(()=>[p("停用")]),_:1}))],64)):L("",!0),l.key=="action"?(T(),C(A,{key:1},[e(_,{type:"link",onClick:se=>G(g)},{default:a(()=>[p("编辑")]),_:2},1032,["onClick"]),e(R,{type:"vertical"}),e(te,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:se=>H(g)},{default:a(()=>[e(_,{type:"link",danger:""},{default:a(()=>[p("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):L("",!0)]),_:1},8,["loading","columns","data-source","pagination","current"])]),_:1}),e(ue,{open:f.value,"onUpdate:open":t[11]||(t[11]=l=>f.value=l),onOk:Q,title:Y.value,onCancel:I},{default:a(()=>[e(O,{model:n.value,"label-col":{span:8},ref_key:"modalFormRef",ref:U},{default:a(()=>[e(i,{label:"字典类型"},{default:a(()=>[e(S,{value:n.value.dictType,"onUpdate:value":t[4]||(t[4]=l=>n.value.dictType=l),fieldNames:{label:"dictType",value:"dictType"},options:v.value,onChange:h},{dropdownRender:a(({menuNode:l})=>[e(M($),{vnodes:l},null,8,["vnodes"]),e(R,{style:{margin:"4px 0"}}),e(le,{style:{padding:"4px 8px"}},{default:a(()=>[e(u,{ref:"inputRef",value:r.value,"onUpdate:value":t[3]||(t[3]=g=>r.value=g),placeholder:"请输入字典类型"},null,8,["value"]),e(_,{type:"text",onClick:X},{icon:a(()=>[e(M(xe))]),default:a(()=>[p(" 增加类型 ")]),_:1})]),_:1})]),_:1},8,["value","options"])]),_:1}),e(i,{label:"字典类型描述"},{default:a(()=>[e(u,{value:n.value.dictTypeDesc,"onUpdate:value":t[5]||(t[5]=l=>n.value.dictTypeDesc=l),disabled:!k.value.includes(n.value.dictType)},null,8,["value","disabled"])]),_:1}),e(i,{label:"字典描述"},{default:a(()=>[e(u,{value:n.value.label,"onUpdate:value":t[6]||(t[6]=l=>n.value.label=l)},null,8,["value"])]),_:1}),e(i,{label:"字典值"},{default:a(()=>[e(u,{value:n.value.value,"onUpdate:value":t[7]||(t[7]=l=>n.value.value=l)},null,8,["value"])]),_:1}),e(i,{label:"排序号"},{default:a(()=>[e(oe,{value:n.value.sortNum,"onUpdate:value":t[8]||(t[8]=l=>n.value.sortNum=l)},null,8,["value"])]),_:1}),e(i,{label:"状态"},{default:a(()=>[e(ne,{value:n.value.status,"onUpdate:value":t[9]||(t[9]=l=>n.value.status=l),"button-style":"solid"},{default:a(()=>[e(z,{value:1},{default:a(()=>[p("启用 ")]),_:1}),e(z,{value:0},{default:a(()=>[p("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),e(i,{label:"描述"},{default:a(()=>[e(u,{type:"textarea",value:n.value.desc,"onUpdate:value":t[10]||(t[10]=l=>n.value.desc=l)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),Qe=re(Be,[["__scopeId","data-v-05ac1c09"]]);export{Qe as default};
