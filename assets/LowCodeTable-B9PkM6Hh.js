import{_ as J}from"./LowCodeFormId.vue_vue_type_script_setup_true_lang-BbWvFZl4.js";import{t as ea}from"./table-DXTu8T48.js";import{h as ta}from"./http-DvD_U-ww.js";import{g as na,t as la,r as o,L as Q,p as Y,o as d,q as I,P as j,h as w,w as s,Y as B,l as r,F as A,e as q,U as oa,V as sa,Q as ra,J as P,ag as G,i as N,bd as ua,be as ia,R as S,y as K,a_ as ca,a1 as da,av as pa,aw as _a,aN as fa,ac as ma,a5 as va,aT as ga}from"./.pnpm-CCsI2FsW.js";import{_ as ya}from"./index-Cs-9IBXQ.js";import"./LowCodeForm.vue_vue_type_script_setup_true_lang-ANrnzxWP.js";import"./form-Cx5mqIMY.js";const ha=u=>{const p={};return u.reduce((i,a)=>(i[a.key]=a.defaultValue,i),p),p},ka=async(u,p,i)=>{try{const a=await ta.run(u.interfaceUrl,{...p,...i});let v;return u.handlerFunc?v=new Function("res",u.handlerFunc)(a.data):v=a,v}catch(a){return a}},Ca=(u,p)=>u.replace(/\${(.*?)}/g,(i,a)=>p[a.trim()]),x={getProxyData:ka,transformParamsData:ha,parseString:Ca},ba={class:"low-code-table"},wa={style:{"font-size":"12px"}},xa={class:"tools"},Da=["href"],Ua=na({__name:"LowCodeTable",props:{id:{}},setup(u){const p=u,{id:i}=la(p),a=o({}),v=o([]),D=o({}),$=o(!1),W=()=>{D.value={},k()},h=o(!1),M=Q(()=>{var t,e,l,f,c,_;return((l=(e=(t=a.value)==null?void 0:t.global)==null?void 0:e.filterCfg)==null?void 0:l.show)&&((_=(c=(f=a.value)==null?void 0:f.global)==null?void 0:c.filterCfg)==null?void 0:_.formId)}),X=Q(()=>U.value.length>0?[...a.value.columns,{title:"操作",dataIndex:"_action",key:"_action",width:200,fixed:"right"}]:a.value.columns),g=o({}),V=o([]),U=o([]);Y(()=>i.value,()=>{V.value=[],U.value=[],ea.getDetail(i.value).then(t=>{var c;const{code:e,data:l,msg:f}=t;e==200&&(a.value=l,a.value.global.actionCfg&&((c=a.value.global.actionCfg)==null?void 0:c.length)>0&&a.value.global.actionCfg.map(m=>{m.position=="header"?V.value.push(m):U.value.push(m)}),g.value=x.transformParamsData(a.value.variablePool),k())})},{immediate:!0}),Y(()=>g.value,()=>{k()},{deep:!0});const R=o(0),k=async()=>{$.value=!0;try{const{data:t,total:e}=await x.getProxyData(a.value.dataSource,g.value,D.value);v.value=t,e&&(R.value=e)}catch(t){q.error("获取数据失败:"+t)}$.value=!1},F=o(!1),y=o({}),z=o({}),E=async(t,e)=>{const{formId:l,event:f,interfaceUrl:c,AfterHandleFunc:_,request:m,linkUrl:L,actionCfg:C}=t;if(m){const O=await x.getProxyData({type:"dynamic",interfaceUrl:c,handlerFunc:_},{},{...e});y.value=O}else y.value=e||{};switch(f){case"modal":z.value={id:l,modalUrl:C==null?void 0:C.interfaceUrl},F.value=!0;break;case"link":window.open(x.parseString(L,y.value),"_blank");break}},H=()=>{y.value={},F.value=!1},Z=()=>{x.getProxyData({type:"dynamic",interfaceUrl:z.value.modalUrl,handlerFunc:""},{},{...y.value}).then(t=>{var e;q.info((e=t==null?void 0:t.data)==null?void 0:e.msg),H()}).catch(t=>{q.error(t)})};return(t,e)=>{const l=da,f=pa,c=_a,_=oa,m=fa,L=ma,C=va,O=ga,aa=sa;return d(),I(A,null,[j("div",ba,[M.value?(d(),w(_,{key:0,class:"filter-panel"},{default:s(()=>[r(J,{formData:D.value,id:a.value.global.filterCfg.formId,class:ra(["filter-form",h.value?"expand":""])},null,8,["formData","id","class"]),r(c,null,{default:s(()=>[r(f,{span:24,style:{"text-align":"right"}},{default:s(()=>[r(l,{type:"primary","html-type":"submit",onClick:k},{default:s(()=>[P("搜索")]),_:1}),r(l,{style:{margin:"0 8px"},onClick:W},{default:s(()=>[P("重置")]),_:1}),r(l,{type:"link",icon:G(h.value?N(ua):N(ia)),onClick:e[0]||(e[0]=n=>h.value=!h.value)},{default:s(()=>[j("span",wa,S(h.value?"收起":"展开"),1)]),_:1},8,["icon"])]),_:1})]),_:1})]),_:1})):B("",!0),r(_,{class:"table-container"},{default:s(()=>[j("div",xa,[r(m,null,{default:s(()=>[(d(!0),I(A,null,K(V.value,n=>(d(),w(l,{key:n.id,onClick:b=>E(n)},{default:s(()=>[P(S(n.name),1)]),_:2},1032,["onClick"]))),128))]),_:1}),r(l,{icon:G(N(ca)),type:"link",title:"刷新数据",style:{float:"right"},onClick:k},null,8,["icon"])]),(d(),w(C,{columns:X.value,"data-source":v.value,scroll:{y:M.value?400:650},loading:$.value,pagination:!1,key:N(i)},{bodyCell:s(({column:n,record:b})=>[n.type=="image"?(d(),w(L,{key:0,src:`${b[n.dataIndex]}`,height:"130px",width:"100%"},null,8,["src"])):B("",!0),n.type=="link"?(d(),I("a",{key:1,href:`${b[n.dataIndex]}`,target:"_blank"},S(b[n.dataIndex]),9,Da)):B("",!0),n.key=="_action"?(d(!0),I(A,{key:2},K(U.value,T=>(d(),w(l,{type:"link",onClick:Fa=>E(T,b),key:T.id},{default:s(()=>[P(S(T.name),1)]),_:2},1032,["onClick"]))),128)):B("",!0)]),_:1},8,["columns","data-source","scroll","loading"])),r(O,{style:{display:"flex","justify-content":"flex-end","margin-top":"20px"},current:g.value.pageNumber,"onUpdate:current":e[1]||(e[1]=n=>g.value.pageNumber=n),pageSize:g.value.pageSize||10,total:R.value,"show-less-items":""},null,8,["current","pageSize","total"])]),_:1})]),r(aa,{open:F.value,"onUpdate:open":e[2]||(e[2]=n=>F.value=n),onOk:Z,onCancel:H},{default:s(()=>[r(J,{formData:y.value,id:z.value.id},null,8,["formData","id"])]),_:1},8,["open"])],64)}}}),za=ya(Ua,[["__scopeId","data-v-66544863"]]);export{za as default};