import{_ as J}from"./LowCodeFormId.vue_vue_type_script_setup_true_lang-pnJcJHpb.js";import{t as at}from"./table-GaNaay-T.js";import{h as et}from"./http-DsBFDMqD.js";import{a as V,g as ot,M as nt,B as lt,j as rt,k as st,t as it,I as ut,n as ct,O as pt}from"./ant-design-vue-DGPmw3tN.js";import{U as mt,D as dt,a0 as ft}from"./@ant-design-CHQs8cUc.js";import{d as _t,L as vt,r,m as W,w as X,R as d,S as U,U as j,a2 as I,a3 as s,ad as F,c as l,F as T,X as gt,J as B,h as G,u as A,a6 as S,W as K}from"./@vue-DmVhU8xE.js";import{b as yt}from"./index-CzmVDmdz.js";import"./LowCodeForm.vue_vue_type_script_setup_true_lang-B_-kR3Oe.js";import"./uuid-CQkTLCs1.js";import"./common-BTJ658h-.js";import"./form-C-YaJrQl.js";import"./axios-B4uVmeYG.js";import"./@babel-BiFW4_mA.js";import"./lodash-es-PU94eZQX.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./dayjs-X-x4l2Bb.js";import"./@ctrl-DOFZgDuz.js";import"./throttle-debounce-CUWDS_la.js";import"./async-validator-DKvM95Vc.js";import"./scroll-into-view-if-needed-SxpMpKWN.js";import"./compute-scroll-into-view-1gs_hJI2.js";import"./vue-types-C5fUfLeo.js";import"./dom-align-CRCehRfe.js";import"./@emotion-BtrR-yrm.js";import"./stylis-DsJDcYJc.js";import"./pinia-C_jLcksF.js";/* empty css                      */import"./js-cookie-Cz0CWeBA.js";import"./@vueuse-CvnCfVh1.js";import"./vue-router-XjRCv15Q.js";import"./vue-codemirror-CBA9LlYn.js";import"./codemirror-DqN-1UAR.js";import"./@codemirror-BQbZevoh.js";import"./@lezer-CciglqRQ.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./echarts-DetEu2Tg.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CDo53BfZ.js";const ht=i=>{const c={};return i.reduce((p,t)=>(p[t.key]=t.defaultValue,p),c),c},kt=async(i,c,p)=>{try{const t=await et.run(i.interfaceUrl,{...c,...p});let v;return i.handlerFunc?v=new Function("res",i.handlerFunc)(t.data):v=t,v}catch(t){return t}},Ct=(i,c)=>i.replace(/\${(.*?)}/g,(p,t)=>c[t.trim()]),w={getProxyData:kt,transformParamsData:ht,parseString:Ct},bt={class:"low-code-table"},wt={style:{"font-size":"12px"}},xt={class:"tools"},Dt=["href"],Ut=_t({__name:"LowCodeTable",props:{id:{}},setup(i){const c=i,{id:p}=vt(c),t=r({}),v=r([]),x=r({}),P=r(!1),Q=()=>{x.value={},k()},h=r(!1),M=W(()=>{var e,a,n,f,u,m;return((n=(a=(e=t.value)==null?void 0:e.global)==null?void 0:a.filterCfg)==null?void 0:n.show)&&((m=(u=(f=t.value)==null?void 0:f.global)==null?void 0:u.filterCfg)==null?void 0:m.formId)}),Y=W(()=>$.value.length>0?[...t.value.columns,{title:"操作",dataIndex:"_action",key:"_action",width:200,fixed:"right"}]:t.value.columns),g=r({}),R=r([]),$=r([]);X(()=>p.value,()=>{at.getDetail(p.value).then(e=>{var u;const{code:a,data:n,msg:f}=e;a==200&&(t.value=n,t.value.global.actionCfg&&((u=t.value.global.actionCfg)==null?void 0:u.length)>0&&t.value.global.actionCfg.map(_=>{_.position=="header"?R.value.push(_):$.value.push(_)}),g.value=w.transformParamsData(t.value.variablePool),k())})},{immediate:!0}),X(()=>g.value,()=>{k()},{deep:!0});const q=r(0),k=async()=>{P.value=!0;try{const{data:e,total:a}=await w.getProxyData(t.value.dataSource,g.value,x.value);v.value=e,a&&(q.value=a)}catch(e){V.error("获取数据失败:"+e)}P.value=!1},D=r(!1),y=r({}),N=r({}),E=async(e,a)=>{const{formId:n,event:f,interfaceUrl:u,AfterHandleFunc:m,request:_,linkUrl:O,actionCfg:C}=e;if(_){const z=await w.getProxyData({type:"dynamic",interfaceUrl:u,handlerFunc:m},{},{...a});y.value=z}else y.value=a||{};switch(f){case"modal":N.value={id:n,modalUrl:C==null?void 0:C.interfaceUrl},D.value=!0;break;case"link":window.open(w.parseString(O,y.value),"_blank");break}},H=()=>{y.value={},D.value=!1},Z=()=>{w.getProxyData({type:"dynamic",interfaceUrl:N.value.modalUrl,handlerFunc:""},{},{...y.value}).then(e=>{var a;V.info((a=e==null?void 0:e.data)==null?void 0:a.msg),H()}).catch(e=>{V.error(e)})};return(e,a)=>{const n=lt,f=rt,u=st,m=ot,_=it,O=ut,C=ct,z=pt,tt=nt;return d(),U(T,null,[j("div",bt,[M.value?(d(),I(m,{key:0,class:"filter-panel"},{default:s(()=>[l(J,{formData:x.value,id:t.value.global.filterCfg.formId,class:gt(["filter-form",h.value?"expand":""])},null,8,["formData","id","class"]),l(u,null,{default:s(()=>[l(f,{span:24,style:{"text-align":"right"}},{default:s(()=>[l(n,{type:"primary","html-type":"submit",onClick:k},{default:s(()=>[B("搜索")]),_:1}),l(n,{style:{margin:"0 8px"},onClick:Q},{default:s(()=>[B("重置")]),_:1}),l(n,{type:"link",icon:G(h.value?A(mt):A(dt)),onClick:a[0]||(a[0]=o=>h.value=!h.value)},{default:s(()=>[j("span",wt,S(h.value?"收起":"展开"),1)]),_:1},8,["icon"])]),_:1})]),_:1})]),_:1})):F("",!0),l(m,{class:"table-container"},{default:s(()=>[j("div",xt,[l(_,null,{default:s(()=>[(d(!0),U(T,null,K(R.value,o=>(d(),I(n,{key:o.id,onClick:b=>E(o)},{default:s(()=>[B(S(o.name),1)]),_:2},1032,["onClick"]))),128))]),_:1}),l(n,{icon:G(A(ft)),type:"link",title:"刷新数据",style:{float:"right"},onClick:k},null,8,["icon"])]),l(C,{columns:Y.value,"data-source":v.value,scroll:{y:M.value?400:650},loading:P.value,pagination:!1},{bodyCell:s(({column:o,record:b})=>[o.type=="image"?(d(),I(O,{key:0,src:`${b[o.dataIndex]}`,height:"130px",width:"100%"},null,8,["src"])):F("",!0),o.type=="link"?(d(),U("a",{key:1,href:`${b[o.dataIndex]}`,target:"_blank"},S(b[o.dataIndex]),9,Dt)):F("",!0),o.key=="_action"?(d(!0),U(T,{key:2},K($.value,L=>(d(),I(n,{type:"link",onClick:It=>E(L,b),key:L.id},{default:s(()=>[B(S(L.name),1)]),_:2},1032,["onClick"]))),128)):F("",!0)]),_:1},8,["columns","data-source","scroll","loading"]),l(z,{style:{display:"flex","justify-content":"flex-end","margin-top":"20px"},current:g.value.pageNumber,"onUpdate:current":a[1]||(a[1]=o=>g.value.pageNumber=o),pageSize:g.value.pageSize||10,total:q.value,"show-less-items":""},null,8,["current","pageSize","total"])]),_:1})]),l(tt,{open:D.value,"onUpdate:open":a[2]||(a[2]=o=>D.value=o),onOk:Z,onCancel:H},{default:s(()=>[l(J,{formData:y.value,id:N.value.id},null,8,["formData","id"])]),_:1},8,["open"])],64)}}}),fa=yt(Ut,[["__scopeId","data-v-fb8602ee"]]);export{fa as default};
