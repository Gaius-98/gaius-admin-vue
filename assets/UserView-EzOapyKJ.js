import{d as Z,X as ie,r as u,b as j,D as p,I as k,g as e,G as I,C as de,F as o,M as g,S as z,Z as X,K as q,Y as re,$ as ce,R as A,a0 as pe,a1 as me,V as H,Q as _e,p as ve,a2 as S,E,N as fe,U as R}from"./index-BKVUJ49Y.js";import{a as Y,_ as ge}from"./resource-B5NfrXOt.js";import{P as ye}from"./PlusOutlined-B1JrIy6C.js";import{L as ke}from"./FolderOutlined-BRoMlcnB.js";import{R as be,S as Ce}from"./index-C6L_XfkU.js";import{I as Ie}from"./index-w_usrKqC.js";import{B as J,I as he,_ as xe,F as we,a as $e}from"./index-BHY8-qA4.js";import{M as W}from"./index-lN2lfoOB.js";import{C as Ne}from"./ActionButton-CJJ0zyet.js";import{T as Se}from"./index-KTZ4ZaWk.js";import{_ as Ue,a as Fe}from"./index-DRFPdzkk.js";import{_ as Ve}from"./index-OY7l33W6.js";import{_ as Oe}from"./index-DRUVA7Oe.js";import{_ as Re}from"./index-BjNiSnK7.js";import"./FileTwoTone-hH3jSTLk.js";import"./DeleteOutlined-DGgL8aQX.js";import"./DownloadOutlined-C8g1DIie.js";import"./index-CzOiOUBF.js";const ze=h=>(pe("data-v-25e15d5d"),h=h(),me(),h),De={class:"image-picker"},Le=ze(()=>z("div",{class:"select-image-text"},"选择图片",-1)),Te={key:1,class:"preview-image"},Pe={class:"image-container"},Me={class:"image-list"},Be=["src","onClick"],Ee=Z({__name:"ImagePicker",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(h){const i=ie(h,"modelValue"),x=u([]),w=u([]),d=u({pageSize:3,pageNumber:1,keyword:""}),U=u(0),$="/prod",b=u(""),T=f=>{b.value=f},P=()=>{d.value.pageNumber++,v()},v=()=>{Y.getList(d.value).then(f=>{const{code:c,data:m,msg:y}=f;c==200&&(x.value=x.value.concat(m.data),w.value=m.data,U.value=m.total)})},C=()=>{d.value.pageNumber--,w.value=x.value.slice((d.value.pageNumber-1)*d.value.pageSize,d.value.pageSize)},n=f=>{const c=new FormData;c.append("file",f.file,encodeURIComponent(f.file.name)),Y.add(c).then(m=>{const{code:y,data:N,msg:F}=m;y==200&&(i.value=`${$}/${N.path}`,A.success(F),r.value=!1)})},r=u(!1),M=()=>{r.value=!0},D=()=>{i.value=b.value,L()},L=()=>{b.value="",r.value=!1};return j(()=>{v()}),(f,c)=>{const m=Ie,y=J,N=ge,F=W;return p(),k("div",De,[i.value?(p(),k("div",Te,[e(I(de),{onClick:c[0]||(c[0]=a=>i.value=""),style:{position:"absolute",top:"5px",right:"5px",color:"#999","z-index":"99"}}),e(m,{src:i.value,width:"100px",height:"100px"},null,8,["src"])])):(p(),k("div",{key:0,class:"select-image",onClick:M},[e(I(ye)),Le])),e(F,{open:r.value,"onUpdate:open":c[1]||(c[1]=a=>r.value=a),title:"选择图片",onOk:D,onCancel:L},{default:o(()=>[e(N,{name:"file",accept:"image/*",customRequest:n,maxCount:"1",showUploadList:!1},{default:o(()=>[e(y,{type:"primary"},{default:o(()=>[g("自定义")]),_:1})]),_:1}),z("div",Pe,[e(y,{type:"ghost",icon:X(I(ke)),onClick:C,disabled:d.value.pageNumber==1},null,8,["icon","disabled"]),z("div",Me,[(p(!0),k(q,null,re(w.value,a=>(p(),k("div",{key:a.id,class:ce(["image-item",{selected:b.value==`${I($)}/${a.path}`}])},[z("img",{src:`${I($)}/${a.path}`,onClick:t=>T(`${I($)}/${a.path}`),height:"100px",width:"100px"},null,8,Be)],2))),128))]),e(y,{type:"ghost",icon:X(I(be)),onClick:P,disabled:d.value.pageSize*(d.value.pageNumber-1)+w.value.length==U.value},null,8,["icon","disabled"])])]),_:1},8,["open"])])}}}),je=H(Ee,[["__scopeId","data-v-25e15d5d"]]),qe={class:"user"},Ae={class:"tools"},Ge=Z({__name:"UserView",setup(h){const i=_e({keyword:"",pageNumber:1,pageSize:10}),x=u([]),w=u([{title:"用户名",key:"username",dataIndex:"username"},{title:"名称",key:"name",dataIndex:"name"},{title:"邮箱",key:"email",dataIndex:"email"},{title:"角色",key:"roleId",dataIndex:"roleId"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action"}]),d=u(!1),U=u(),$=()=>{var a;(a=U.value)==null||a.resetFields(),v()},b=u(0),T=()=>{i.pageNumber=1,i.pageSize=10,v()},P=a=>{const{current:t,pageSize:s}=a;i.pageNumber=t,i.pageSize=s,v()},v=()=>{d.value=!0,S.getList(i).then(a=>{const{code:t,data:s}=a;t==200&&(x.value=s.data,b.value=s.total),d.value=!1})};j(()=>{v()});const C=u(!1),n=u({username:"",name:"",password:"",email:"",avatar:"",roleId:""}),r=u("add"),M=ve(()=>({add:"新增用户",edit:"编辑用户"})[r.value]),D=u(),L=()=>{r.value="add",C.value=!0,n.value={username:"",name:"",password:"",email:"",avatar:"",roleId:""}},f=async a=>{const{code:t,data:s}=await S.getDetail(a.username);t==200&&(n.value=s,r.value="edit",C.value=!0)},c=async a=>{const{code:t,msg:s,data:_}=await S.remove(a.username);t==200&&(A.success(_),v())},m=()=>{var a;(a=D.value)==null||a.resetFields()},y=()=>{let a;r.value=="add"?a=S.add:a=S.update,a(n.value).then(t=>{const{code:s}=t;s==200&&(A.success(r.value=="add"?"新增成功":"编辑成功"),v()),m(),C.value=!1})},N=u([]),F=()=>{S.getRoleDict().then(a=>{const{code:t,data:s,msg:_}=a;t==200&&(N.value=s)})};return j(()=>{F()}),(a,t)=>{const s=he,_=xe,G=Ue,V=J,ee=Fe,K=we,Q=Ne,B=Se,ae=Ve,te=Oe,oe=Re,le=$e,ne=Ce,se=W;return p(),k("div",qe,[e(Q,{class:"search-area"},{default:o(()=>[e(K,{ref_key:"searchFormRef",ref:U,model:i,onFinish:T},{default:o(()=>[e(ee,{gutter:24},{default:o(()=>[e(G,{span:4},{default:o(()=>[e(_,{label:"用户名",name:"keyword"},{default:o(()=>[e(s,{value:i.keyword,"onUpdate:value":t[0]||(t[0]=l=>i.keyword=l)},null,8,["value"])]),_:1})]),_:1}),e(G,{span:4,style:{"text-align":"right"}},{default:o(()=>[e(V,{type:"primary","html-type":"submit"},{default:o(()=>[g("搜索")]),_:1}),e(V,{style:{margin:"0 8px"},onClick:$},{default:o(()=>[g(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(Q,null,{default:o(()=>[z("div",Ae,[e(V,{type:"primary",onClick:L},{default:o(()=>[g("新增")]),_:1})]),e(oe,{loading:d.value,columns:w.value,"data-source":x.value,scroll:{y:440},onChange:P,pagination:{current:i.pageNumber,total:b.value}},{bodyCell:o(({column:l,record:O})=>[l.key=="role"?(p(),E(B,{key:0},{default:o(()=>[g(fe(O.role),1)]),_:2},1024)):R("",!0),l.key=="action"?(p(),k(q,{key:1},[e(V,{type:"link",onClick:ue=>f(O)},{default:o(()=>[g("编辑")]),_:2},1032,["onClick"]),e(ae,{type:"vertical"}),e(te,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:ue=>c(O)},{default:o(()=>[e(V,{type:"link",danger:""},{default:o(()=>[g("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):R("",!0),l.key=="userType"?(p(),k(q,{key:2},[O.userType=="app"?(p(),E(B,{key:0,color:"#2db7f5"},{default:o(()=>[g("菜单")]),_:1})):R("",!0),O.userType=="directory"?(p(),E(B,{key:1,color:"#87d068"},{default:o(()=>[g("目录")]),_:1})):R("",!0)],64)):R("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),e(se,{open:C.value,"onUpdate:open":t[7]||(t[7]=l=>C.value=l),onOk:y,title:M.value,onCancel:m},{default:o(()=>[e(K,{model:n.value,"label-col":{span:8},ref_key:"modalFormRef",ref:D},{default:o(()=>[e(_,{label:"用户名"},{default:o(()=>[e(s,{value:n.value.username,"onUpdate:value":t[1]||(t[1]=l=>n.value.username=l)},null,8,["value"])]),_:1}),e(_,{label:"密码"},{default:o(()=>[e(le,{value:n.value.password,"onUpdate:value":t[2]||(t[2]=l=>n.value.password=l)},null,8,["value"])]),_:1}),e(_,{label:"角色"},{default:o(()=>[e(ne,{value:n.value.roleId,"onUpdate:value":t[3]||(t[3]=l=>n.value.roleId=l),fieldNames:{label:"roleName",value:"roleId"},options:N.value},null,8,["value","options"])]),_:1}),e(_,{label:"头像"},{default:o(()=>[e(je,{modelValue:n.value.avatar,"onUpdate:modelValue":t[4]||(t[4]=l=>n.value.avatar=l)},null,8,["modelValue"])]),_:1}),e(_,{label:"名称"},{default:o(()=>[e(s,{value:n.value.name,"onUpdate:value":t[5]||(t[5]=l=>n.value.name=l)},null,8,["value"])]),_:1}),e(_,{label:"邮箱"},{default:o(()=>[e(s,{value:n.value.email,"onUpdate:value":t[6]||(t[6]=l=>n.value.email=l)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),ra=H(Ge,[["__scopeId","data-v-96ec8309"]]);export{ra as default};
