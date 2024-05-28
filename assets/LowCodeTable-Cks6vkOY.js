import{_ as L}from"./LowCodeFormId.vue_vue_type_script_setup_true_lang-BXfXm0pu.js";import{t as P}from"./table-BqybK1dR.js";import{h as A}from"./http-ByhGpKvM.js";import{d as E,av as R,r as i,p as G,w as I,D as y,I as N,E as S,F as l,U as x,g as e,R as M,$ as Z,M as B,Z as V,G as k,S as $,N as z,V as q}from"./index-sG7Hqm32.js";import{C as H,_ as J,a as K}from"./index-Bd8XQX-E.js";import{U as Q}from"./index-CiFuXvV1.js";import{D as W}from"./index-BuZhlrXI.js";import{B as X}from"./index-CVCqqbpn.js";import{I as Y}from"./index-BeGIwZ7d.js";import{S as tt}from"./SyncOutlined-CN7CE9MO.js";import{_ as at,a as et}from"./index-CuUL4o4i.js";import"./LowCodeForm.vue_vue_type_script_setup_true_lang-BB-NB2pK.js";import"./index-CsjWcuuD.js";import"./common-CvoJbl85.js";import"./index-B8zGhQ3q.js";import"./index-BrLZD6pm.js";import"./SwapRightOutlined-C9GExnN8.js";import"./index-CHNC6TYD.js";import"./form-BAgHAEhE.js";import"./index-BjjI0-yq.js";import"./PlusOutlined-CJhGNK-W.js";import"./index-62B0KUyo.js";import"./SwapOutlined-BwigZ3e2.js";import"./FolderOutlined-BgFXwmIX.js";import"./index-ku7_Q0AB.js";import"./useBreakpoint-TVORMxM2.js";const ot=c=>{const u={};return c.reduce((r,t)=>(r[t.key]=t.defaultValue,r),u),u},nt=async(c,u,r)=>{try{const t=await A.run(c.interfaceUrl,{...u,...r});return new Function("res",c.handlerFunc)(t.data)}catch(t){return t}},F={refreshData:nt,transformParamsData:ot},st={class:"low-code-table"},lt={style:{"font-size":"12px"}},rt={class:"tools"},it=["href"],ct=E({__name:"LowCodeTable",props:{id:{}},setup(c){const u=c,{id:r}=R(u),t=i({}),h=i([]),v=i({}),b=i(!1),U=()=>{v.value={},_()},m=i(!1),w=G(()=>{var o,a,n,d,g,f;return((n=(a=(o=t.value)==null?void 0:o.global)==null?void 0:a.filterCfg)==null?void 0:n.show)&&((f=(g=(d=t.value)==null?void 0:d.global)==null?void 0:g.filterCfg)==null?void 0:f.formId)}),p=i({});I(()=>r.value,()=>{P.getDetail(r.value).then(o=>{const{code:a,data:n,msg:d}=o;a==200&&(t.value=n,p.value=F.transformParamsData(t.value.variablePool),_())})},{immediate:!0}),I(()=>p.value,()=>{_()},{deep:!0});const D=i(0),_=async()=>{b.value=!0;try{const{data:o,total:a}=await F.refreshData(t.value.dataSource,p.value,v.value);h.value=o,a&&(D.value=a)}catch(o){M.error("获取数据失败:"+o)}b.value=!1};return(o,a)=>{const n=X,d=J,g=K,f=H,O=Y,T=at,j=et;return y(),N("div",st,[w.value?(y(),S(f,{key:0,class:"filter-panel"},{default:l(()=>[e(L,{formData:v.value,id:t.value.global.filterCfg.formId,class:Z(["filter-form",m.value?"expand":""])},null,8,["formData","id","class"]),e(g,null,{default:l(()=>[e(d,{span:24,style:{"text-align":"right"}},{default:l(()=>[e(n,{type:"primary","html-type":"submit",onClick:_},{default:l(()=>[B("搜索")]),_:1}),e(n,{style:{margin:"0 8px"},onClick:U},{default:l(()=>[B("重置")]),_:1}),e(n,{type:"link",icon:V(m.value?k(Q):k(W)),onClick:a[0]||(a[0]=s=>m.value=!m.value)},{default:l(()=>[$("span",lt,z(m.value?"收起":"展开"),1)]),_:1},8,["icon"])]),_:1})]),_:1})]),_:1})):x("",!0),e(f,{class:"table-container"},{default:l(()=>[$("div",rt,[e(n,{icon:V(k(tt)),type:"link",title:"刷新数据",style:{float:"right"},onClick:_},null,8,["icon"])]),e(T,{columns:t.value.columns,"data-source":h.value,scroll:{y:w.value?470:670},loading:b.value,pagination:!1},{bodyCell:l(({column:s,record:C})=>[s.type=="image"?(y(),S(O,{key:0,src:`${C[s.dataIndex]}`,height:"130px",width:"100%"},null,8,["src"])):x("",!0),s.type=="link"?(y(),N("a",{key:1,href:`${C[s.dataIndex]}`,target:"_blank"},z(C[s.dataIndex]),9,it)):x("",!0)]),_:1},8,["columns","data-source","scroll","loading"]),e(j,{style:{display:"flex","justify-content":"flex-end","margin-top":"20px"},current:p.value.pageNumber,"onUpdate:current":a[1]||(a[1]=s=>p.value.pageNumber=s),pageSize:p.value.pageSize||10,total:D.value,"show-less-items":""},null,8,["current","pageSize","total"])]),_:1})])}}}),Tt=q(ct,[["__scopeId","data-v-aa8aa963"]]);export{Tt as default};
