import{f as x}from"./form-CL6aCgDe.js";import{g as K,aN as Q,r as d,m as G,n as H,o,q as r,l as e,w as t,W as P,K as c,Q as X,i as g,aR as Y,h as p,F as C,y as Z,aS as ee,aT as te,aU as ne,a0 as w,a1 as ae,a2 as oe,ax as le,a3 as se,ay as ie,a4 as _e,aM as ce,ae as ue,a6 as de,aV as re,a5 as pe,L as me,a7 as fe,aW as ye}from"./.pnpm-CQm76_te.js";import{d as ke,_ as ge}from"./index-UYYxOZ8-.js";const ve={class:"form"},he={class:"tools"},xe={key:1},Ce={key:0,class:"contain"},we=K({__name:"FormList",setup(be){const b=Q(),E=d([{title:"id",key:"id",dataIndex:"id"},{title:"表单名称",key:"name",dataIndex:"name"},{title:"预览图",key:"img",dataIndex:"img",width:150},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action",dataIndex:"action"}]),u=G({keyword:"",pageNumber:1,pageSize:10}),f=d([]),F=d(0),I=d(!1),N=d(),S=()=>{var l;(l=N.value)==null||l.resetFields(),m()},y=d("table"),U=()=>{y.value=="table"?y.value="visual":y.value="table"},m=()=>{I.value=!0,x.getList(u).then(l=>{const{code:a,data:i}=l;a==200&&(f.value=i.data,F.value=i.total),I.value=!1})},q=()=>{b.push({path:"/low-code/form"})},$=l=>{b.push({path:"/low-code/form",query:{id:l}})},T=l=>{x.remove(l).then(a=>{const{code:i}=a;i==200&&m()})},L=(l,a)=>{x.getTemplate(l).then(i=>{const{code:v,data:k,msg:_}=i;v==200&&ke(k,a,"vue")})};return H(()=>{m()}),(l,a)=>{const i=ae,v=oe,k=le,_=se,A=ie,M=_e,h=P,W=ce,B=ue,D=de,j=re,O=pe,V=me,z=fe,J=ye;return o(),r("div",ve,[e(h,{class:"search-area"},{default:t(()=>[e(M,{ref_key:"searchFormRef",ref:N,model:u,onFinish:m},{default:t(()=>[e(A,{gutter:24},{default:t(()=>[e(k,{span:4},{default:t(()=>[e(v,{label:"表单名称",name:"keyword"},{default:t(()=>[e(i,{value:u.keyword,"onUpdate:value":a[0]||(a[0]=n=>u.keyword=n)},null,8,["value"])]),_:1})]),_:1}),e(k,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(_,{type:"primary","html-type":"submit"},{default:t(()=>[c("搜索")]),_:1}),e(_,{style:{margin:"0 8px"},onClick:S},{default:t(()=>[c(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(h,null,{default:t(()=>[X("div",he,[e(_,{type:"primary",onClick:q},{default:t(()=>[c("新增")]),_:1}),e(_,{onClick:U,type:"link",style:{float:"right"}},{default:t(()=>[e(g(Y))]),_:1})]),f.value.length===0?(o(),p(W,{key:0})):(o(),r("div",xe,[y.value=="visual"?(o(),r("div",Ce,[(o(!0),r(C,null,Z(f.value,n=>(o(),p(h,{hoverable:!0,key:n.id},{cover:t(()=>[e(B,{src:n.img,height:"130px"},null,8,["src"])]),actions:t(()=>[e(g(ee),{key:"download",onClick:s=>L(n.id,n.name),title:"下载"},null,8,["onClick"]),e(g(te),{key:"edit",title:"编辑",onClick:s=>$(n.id)},null,8,["onClick"]),e(D,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:s=>T(n.id)},{default:t(()=>[e(g(ne),{key:"delete",title:"删除"})]),_:2},1032,["onConfirm"])]),default:t(()=>[e(j,{title:n.name,description:n.description},null,8,["title","description"])]),_:2},1024))),128))])):(o(),p(z,{key:1,columns:E.value,"data-source":f.value,pagination:!1,scroll:{y:470}},{bodyCell:t(({column:n,record:s})=>[n.key=="status"?(o(),r(C,{key:0},[s.status?(o(),p(O,{key:0,color:"#87d068"},{default:t(()=>[c("启用")]),_:1})):(o(),p(O,{key:1,color:"#f50"},{default:t(()=>[c("停用")]),_:1}))],64)):w("",!0),n.key=="action"?(o(),r(C,{key:1},[e(_,{type:"link",onClick:R=>L(s.id,s.name)},{default:t(()=>[c("下载")]),_:2},1032,["onClick"]),e(V,{type:"vertical"}),e(_,{type:"link",onClick:R=>$(s.id)},{default:t(()=>[c("编辑")]),_:2},1032,["onClick"]),e(V,{type:"vertical"}),e(D,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:R=>T(s.id)},{default:t(()=>[e(_,{type:"link",danger:""},{default:t(()=>[c("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):w("",!0),n.key=="img"?(o(),p(B,{key:2,src:s.img,height:"100px",width:"100%"},null,8,["src"])):w("",!0)]),_:1},8,["columns","data-source"]))])),e(J,{style:{display:"flex","justify-content":"flex-end"},current:u.pageNumber,"onUpdate:current":a[1]||(a[1]=n=>u.pageNumber=n),total:F.value,"show-less-items":"",onChange:a[2]||(a[2]=n=>m())},null,8,["current","total"])]),_:1})])}}}),$e=ge(we,[["__scopeId","data-v-7364fe84"]]);export{$e as default};