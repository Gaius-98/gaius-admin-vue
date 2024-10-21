import{t as O}from"./table-BxIZTEUl.js";import{g as P,aK as Q,r as d,m as Y,n as G,o,q as p,l as e,w as t,U as H,J as s,P as W,i as v,aO as X,h as r,F as g,y as Z,aQ as ee,aR as te,Y as h,$ as ne,a0 as ae,av as oe,a1 as le,aw as se,a2 as ie,aJ as _e,a4 as ce,aS as ue,a3 as de,K as pe,ac as re,a5 as me,aT as fe}from"./.pnpm-CCsI2FsW.js";import{_ as ye}from"./index-CLs9IoH3.js";const ke={class:"table"},ve={class:"tools"},ge={key:1},he={key:0,class:"contain"},be=P({__name:"TableList",setup(xe){const b=Q(),V=d([{title:"id",key:"id",dataIndex:"id"},{title:"表格名称",key:"name",dataIndex:"name"},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"备注",key:"description",dataIndex:"description"},{title:"操作",key:"action",dataIndex:"action"}]),c=Y({keyword:"",pageNumber:1,pageSize:10}),f=d([]),x=d(0),C=d(!1),w=d(),J=()=>{var a;(a=w.value)==null||a.resetFields(),m()},y=d("table"),R=()=>{y.value=="table"?y.value="visual":y.value="table"},m=()=>{C.value=!0,O.getList(c).then(a=>{const{code:l,data:u}=a;l==200&&(f.value=u.data,x.value=u.total),C.value=!1})},D=()=>{b.push({path:"/low-code/table"})},E=a=>{window.open(`/preview-table?id=${a}&from=${location.pathname}`,`table_${a}`)},$=a=>{b.push({path:"/low-code/table",query:{id:a}})},I=a=>{O.remove(a).then(l=>{const{code:u}=l;u==200&&m()})};return G(()=>{m()}),(a,l)=>{const u=ne,S=ae,T=oe,i=le,U=se,q=ie,k=H,A=_e,F=ce,K=ue,N=de,B=pe,j=re,z=me,M=fe;return o(),p("div",ke,[e(k,{class:"search-area"},{default:t(()=>[e(q,{ref_key:"searchFormRef",ref:w,model:c,onFinish:m},{default:t(()=>[e(U,{gutter:24},{default:t(()=>[e(T,{span:4},{default:t(()=>[e(S,{label:"表格名称",name:"keyword"},{default:t(()=>[e(u,{value:c.keyword,"onUpdate:value":l[0]||(l[0]=n=>c.keyword=n)},null,8,["value"])]),_:1})]),_:1}),e(T,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(i,{type:"primary","html-type":"submit"},{default:t(()=>[s("搜索")]),_:1}),e(i,{style:{margin:"0 8px"},onClick:J},{default:t(()=>[s(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(k,null,{default:t(()=>[W("div",ve,[e(i,{type:"primary",onClick:D},{default:t(()=>[s("新增")]),_:1}),e(i,{onClick:R,type:"link",style:{float:"right"}},{default:t(()=>[e(v(X))]),_:1})]),f.value.length===0?(o(),r(A,{key:0})):(o(),p("div",ge,[y.value=="visual"?(o(),p("div",he,[(o(!0),p(g,null,Z(f.value,n=>(o(),r(k,{hoverable:!0,key:n.id},{actions:t(()=>[e(v(ee),{key:"edit",title:"编辑",onClick:_=>$(n.id)},null,8,["onClick"]),e(F,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:_=>I(n.id)},{default:t(()=>[e(v(te),{key:"delete",title:"删除"})]),_:2},1032,["onConfirm"])]),default:t(()=>[e(K,{title:n.name,description:n.description},null,8,["title","description"])]),_:2},1024))),128))])):(o(),r(z,{key:1,columns:V.value,"data-source":f.value,pagination:!1,scroll:{y:470}},{bodyCell:t(({column:n,record:_})=>[n.key=="status"?(o(),p(g,{key:0},[_.status?(o(),r(N,{key:0,color:"#87d068"},{default:t(()=>[s("启用")]),_:1})):(o(),r(N,{key:1,color:"#f50"},{default:t(()=>[s("停用")]),_:1}))],64)):h("",!0),n.key=="action"?(o(),p(g,{key:1},[e(i,{type:"link",onClick:L=>E(_.id)},{default:t(()=>[s("预览")]),_:2},1032,["onClick"]),e(B,{type:"vertical"}),e(i,{type:"link",onClick:L=>$(_.id)},{default:t(()=>[s("编辑")]),_:2},1032,["onClick"]),e(B,{type:"vertical"}),e(F,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:L=>I(_.id)},{default:t(()=>[e(i,{type:"link",danger:""},{default:t(()=>[s("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):h("",!0),n.key=="img"?(o(),r(j,{key:2,src:_.img,height:"100px",width:"100%"},null,8,["src"])):h("",!0)]),_:1},8,["columns","data-source"]))])),e(M,{style:{display:"flex","justify-content":"flex-end"},current:c.pageNumber,"onUpdate:current":l[1]||(l[1]=n=>c.pageNumber=n),total:x.value,"show-less-items":"",onChange:l[2]||(l[2]=n=>m())},null,8,["current","total"])]),_:1})])}}}),Ie=ye(be,[["__scopeId","data-v-91930d05"]]);export{Ie as default};
