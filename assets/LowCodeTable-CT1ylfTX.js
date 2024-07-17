import{_ as J}from"./LowCodeFormId.vue_vue_type_script_setup_true_lang-DBgxcR5K.js";import{t as ea}from"./table-6eW9yATy.js";import{h as ta}from"./http-B0WA9ZcC.js";import{a as V,g as oa,M as na,B as la,j as ra,k as sa,t as ia,I as ua,n as ca,N as pa}from"./ant-design-vue-CPw5FL5U.js";import{U as ma,D as da,a0 as fa}from"./@ant-design-B99nr-O7.js";import{d as _a,L as va,r,m as W,w as X,R as d,S as U,U as j,a2 as I,a3 as s,ad as F,c as l,F as T,X as ga,J as B,h as G,u as A,a6 as S,W as K}from"./@vue-DSvEQE6c.js";import{b as ya}from"./index-nCmImmF1.js";import"./LowCodeForm.vue_vue_type_script_setup_true_lang-Cj1-RMcP.js";import"./uuid-CQkTLCs1.js";import"./common-DilUN9b2.js";import"./form-VEzAPWBV.js";import"./axios-B4uVmeYG.js";import"./@babel-BiFW4_mA.js";import"./lodash-es-PU94eZQX.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./dayjs-X-x4l2Bb.js";import"./@ctrl-DOFZgDuz.js";import"./throttle-debounce-CUWDS_la.js";import"./async-validator-DKvM95Vc.js";import"./scroll-into-view-if-needed-SxpMpKWN.js";import"./compute-scroll-into-view-1gs_hJI2.js";import"./vue-types-C5fUfLeo.js";import"./dom-align-CRCehRfe.js";import"./@emotion-BtrR-yrm.js";import"./stylis-DsJDcYJc.js";import"./pinia-D8eArRbh.js";/* empty css                      */import"./js-cookie-Cz0CWeBA.js";import"./@vueuse-DIvJCaS9.js";import"./vue-router-AHw_0--4.js";import"./vue-codemirror-BztKek48.js";import"./codemirror-D0DHGrOV.js";import"./@codemirror-DKOYo8Op.js";import"./@lezer-CciglqRQ.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";const ha=i=>{const c={};return i.reduce((p,a)=>(p[a.key]=a.defaultValue,p),c),c},ka=async(i,c,p)=>{try{const a=await ta.run(i.interfaceUrl,{...c,...p});let v;return i.handlerFunc?v=new Function("res",i.handlerFunc)(a.data):v=a,v}catch(a){return a}},Ca=(i,c)=>i.replace(/\${(.*?)}/g,(p,a)=>c[a.trim()]),w={getProxyData:ka,transformParamsData:ha,parseString:Ca},ba={class:"low-code-table"},wa={style:{"font-size":"12px"}},xa={class:"tools"},Da=["href"],Ua=_a({__name:"LowCodeTable",props:{id:{}},setup(i){const c=i,{id:p}=va(c),a=r({}),v=r([]),x=r({}),N=r(!1),Q=()=>{x.value={},k()},h=r(!1),M=W(()=>{var t,e,n,f,u,m;return((n=(e=(t=a.value)==null?void 0:t.global)==null?void 0:e.filterCfg)==null?void 0:n.show)&&((m=(u=(f=a.value)==null?void 0:f.global)==null?void 0:u.filterCfg)==null?void 0:m.formId)}),Y=W(()=>P.value.length>0?[...a.value.columns,{title:"操作",dataIndex:"_action",key:"_action",width:200,fixed:"right"}]:a.value.columns),g=r({}),R=r([]),P=r([]);X(()=>p.value,()=>{ea.getDetail(p.value).then(t=>{var u;const{code:e,data:n,msg:f}=t;e==200&&(a.value=n,a.value.global.actionCfg&&((u=a.value.global.actionCfg)==null?void 0:u.length)>0&&a.value.global.actionCfg.map(_=>{_.position=="header"?R.value.push(_):P.value.push(_)}),g.value=w.transformParamsData(a.value.variablePool),k())})},{immediate:!0}),X(()=>g.value,()=>{k()},{deep:!0});const q=r(0),k=async()=>{N.value=!0;try{const{data:t,total:e}=await w.getProxyData(a.value.dataSource,g.value,x.value);v.value=t,e&&(q.value=e)}catch(t){V.error("获取数据失败:"+t)}N.value=!1},D=r(!1),y=r({}),$=r({}),E=async(t,e)=>{const{formId:n,event:f,interfaceUrl:u,AfterHandleFunc:m,request:_,linkUrl:z,actionCfg:C}=t;if(_){const L=await w.getProxyData({type:"dynamic",interfaceUrl:u,handlerFunc:m},{},{...e});y.value=L}else y.value=e||{};switch(f){case"modal":$.value={id:n,modalUrl:C==null?void 0:C.interfaceUrl},D.value=!0;break;case"link":window.open(w.parseString(z,y.value),"_blank");break}},H=()=>{y.value={},D.value=!1},Z=()=>{w.getProxyData({type:"dynamic",interfaceUrl:$.value.modalUrl,handlerFunc:""},{},{...y.value}).then(t=>{var e;V.info((e=t==null?void 0:t.data)==null?void 0:e.msg),H()}).catch(t=>{V.error(t)})};return(t,e)=>{const n=la,f=ra,u=sa,m=oa,_=ia,z=ua,C=ca,L=pa,aa=na;return d(),U(T,null,[j("div",ba,[M.value?(d(),I(m,{key:0,class:"filter-panel"},{default:s(()=>[l(J,{formData:x.value,id:a.value.global.filterCfg.formId,class:ga(["filter-form",h.value?"expand":""])},null,8,["formData","id","class"]),l(u,null,{default:s(()=>[l(f,{span:24,style:{"text-align":"right"}},{default:s(()=>[l(n,{type:"primary","html-type":"submit",onClick:k},{default:s(()=>[B("搜索")]),_:1}),l(n,{style:{margin:"0 8px"},onClick:Q},{default:s(()=>[B("重置")]),_:1}),l(n,{type:"link",icon:G(h.value?A(ma):A(da)),onClick:e[0]||(e[0]=o=>h.value=!h.value)},{default:s(()=>[j("span",wa,S(h.value?"收起":"展开"),1)]),_:1},8,["icon"])]),_:1})]),_:1})]),_:1})):F("",!0),l(m,{class:"table-container"},{default:s(()=>[j("div",xa,[l(_,null,{default:s(()=>[(d(!0),U(T,null,K(R.value,o=>(d(),I(n,{key:o.id,onClick:b=>E(o)},{default:s(()=>[B(S(o.name),1)]),_:2},1032,["onClick"]))),128))]),_:1}),l(n,{icon:G(A(fa)),type:"link",title:"刷新数据",style:{float:"right"},onClick:k},null,8,["icon"])]),l(C,{columns:Y.value,"data-source":v.value,scroll:{y:M.value?400:650},loading:N.value,pagination:!1},{bodyCell:s(({column:o,record:b})=>[o.type=="image"?(d(),I(z,{key:0,src:`${b[o.dataIndex]}`,height:"130px",width:"100%"},null,8,["src"])):F("",!0),o.type=="link"?(d(),U("a",{key:1,href:`${b[o.dataIndex]}`,target:"_blank"},S(b[o.dataIndex]),9,Da)):F("",!0),o.key=="_action"?(d(!0),U(T,{key:2},K(P.value,O=>(d(),I(n,{type:"link",onClick:Ia=>E(O,b),key:O.id},{default:s(()=>[B(S(O.name),1)]),_:2},1032,["onClick"]))),128)):F("",!0)]),_:1},8,["columns","data-source","scroll","loading"]),l(L,{style:{display:"flex","justify-content":"flex-end","margin-top":"20px"},current:g.value.pageNumber,"onUpdate:current":e[1]||(e[1]=o=>g.value.pageNumber=o),pageSize:g.value.pageSize||10,total:q.value,"show-less-items":""},null,8,["current","pageSize","total"])]),_:1})]),l(aa,{open:D.value,"onUpdate:open":e[2]||(e[2]=o=>D.value=o),onOk:Z,onCancel:H},{default:s(()=>[l(J,{formData:y.value,id:$.value.id},null,8,["formData","id"])]),_:1},8,["open"])],64)}}}),pe=ya(Ua,[["__scopeId","data-v-fb8602ee"]]);export{pe as default};