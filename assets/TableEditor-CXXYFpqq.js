import{d as Q,a4 as ce,L as de,a5 as De,r as s,R as h,a2 as R,a3 as o,S as O,W as pe,af as ke,X as xe,u as r,c as e,J as C,a6 as me,x as X,E as W,U as A,G as Ie,F as G,m as le,ad as oe,h as $e,w as Fe,y as Ue,K as Te}from"./@vue-DmVhU8xE.js";import{S as j}from"./SchemaForm-DwqqdS_r.js";import{V as Ve}from"./vue-draggable-next-CCJiDrHk.js";import{s as Re,N as Le,a0 as Oe}from"./@ant-design-CHQs8cUc.js";import{b as ne,a as Ae}from"./index-CzmVDmdz.js";import{d as Ee,s as se}from"./pinia-C_jLcksF.js";import{h as Me}from"./http-DsBFDMqD.js";import{t as E}from"./table-GaNaay-T.js";import{v as fe}from"./uuid-CQkTLCs1.js";import{a as re,g as Ne,M as ve,B as be,j as Pe,k as qe,t as _e,I as Ke,n as ze,v as ge,w as ye,J as Be,K as Xe,L as je,T as He,c as Je}from"./ant-design-vue-DGPmw3tN.js";import{_ as We}from"./LowCodeFormId.vue_vue_type_script_setup_true_lang-pnJcJHpb.js";import{u as Ge}from"./vue-router-XjRCv15Q.js";import{E as Qe}from"./EditTable-VxGd9TuY.js";import"./gaius-utils-ziEu-chL.js";import"./lodash-es-PU94eZQX.js";import"./@ctrl-DOFZgDuz.js";/* empty css                      */import"./axios-B4uVmeYG.js";import"./js-cookie-Cz0CWeBA.js";import"./@vueuse-CvnCfVh1.js";import"./vue-codemirror-CBA9LlYn.js";import"./codemirror-DqN-1UAR.js";import"./@codemirror-BQbZevoh.js";import"./@lezer-CciglqRQ.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./echarts-DetEu2Tg.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CDo53BfZ.js";import"./@babel-BiFW4_mA.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./dayjs-X-x4l2Bb.js";import"./throttle-debounce-CUWDS_la.js";import"./async-validator-DKvM95Vc.js";import"./scroll-into-view-if-needed-SxpMpKWN.js";import"./compute-scroll-into-view-1gs_hJI2.js";import"./vue-types-C5fUfLeo.js";import"./dom-align-CRCehRfe.js";import"./@emotion-BtrR-yrm.js";import"./stylis-DsJDcYJc.js";import"./LowCodeForm.vue_vue_type_script_setup_true_lang-B_-kR3Oe.js";import"./common-BTJ658h-.js";import"./form-C-YaJrQl.js";const Ye=["onClick"],Ze=["onMousedown"],et=Q({__name:"DragTableHeader",props:ce({columnId:{default:"id"}},{modelValue:{},modelModifiers:{}}),emits:ce(["onClick","onRemove"],["update:modelValue"]),setup(U,{emit:g}){const d=U,{columnId:_}=de(d),l=De(U,"modelValue"),w=s(""),S=(p,a)=>{const t=(a==null?void 0:a.width)||p.target.parentNode.offsetWidth,i=p.clientX,m=M=>{const T=M.clientX-i,N=t+T;a.width=N},$=()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",$)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",$)},D=g,I=p=>{w.value=p[_.value],D("onClick",p)},k=p=>{D("onRemove",p)};return(p,a)=>(h(),R(r(Ve),{list:l.value,"onUpdate:list":a[0]||(a[0]=t=>l.value=t),class:"drag-table-header",animation:"300",group:{name:"column",pull:!0,put:!0},"ghost-class":"ghost","chosen-class":"chosen","fallback-class":"chosen",handle:".drag-icon","force-fallback":!0},{default:o(()=>[(h(!0),O(G,null,pe(l.value,(t,i)=>(h(),O("div",{key:t,style:ke({width:t.width+"px"||"auto"}),class:xe(["drag-table-header-item",{active:t[r(_)]==w.value}]),onClick:m=>I(t)},[e(r(Re),{class:"drag-icon"}),C(" "+me(t.title)+" ",1),e(r(Le),{onClick:m=>k(t)},null,8,["onClick"]),X(A("div",{class:"line",onMousedown:Ie(m=>S(m,t),["stop"])},null,40,Ze),[[W,i!=l.value.length-1]])],14,Ye))),128))]),_:1},8,["list"]))}}),tt=ne(et,[["__scopeId","data-v-dd4648b3"]]),ie=Ee("tableDesign",()=>{const U=s([]),g=s({name:"",description:"",status:1,columns:[],global:{bordered:!1,actionCfg:[],filterCfg:{show:!1,formId:""}},dataSource:{type:"dynamic",interfaceUrl:"",handlerFunc:""},variablePool:[]}),d=s([]),_=s({}),l=()=>{const a=new Date().getTime().toString().slice(-4);g.value.columns.push({id:fe(),dataIndex:"field"+a,title:"列"+a})},w=(a,t)=>{const i=t.findIndex(m=>m.id===a);i!=-1&&(_.value=t[i])},S=(a,t)=>{const i=t.findIndex(m=>m.id===a);i!=-1&&t.splice(i,1)},D=()=>{const a={};return g.value.variablePool.reduce((t,i)=>(t[i.key]=i.defaultValue,t),a),a},I=async a=>{try{const t=await Me.run(g.value.dataSource.interfaceUrl,D());return new Function("res",a||g.value.dataSource.handlerFunc)(t.data)}catch(t){return t}},k=s(!1);return{tableCfg:g,currentColumn:_,onSelectColumn:w,onRemoveColumn:S,onAddColumn:l,tableData:U,onRefreshData:I,saveLoading:k,onSave:async()=>{k.value=!0;const{code:a,msg:t}=await E.add(g.value);a==200&&re.success(t),k.value=!1},columnFields:d}}),at={class:"table-design-container"},ot={class:"tools",style:{"margin-bottom":"5px"}},lt=["href"],nt={class:"action-container"},st=Q({__name:"TableDesign",setup(U){const g=ie(),{tableCfg:d,tableData:_,columnFields:l}=se(g),{onSelectColumn:w,onRemoveColumn:S,onAddColumn:D,onRefreshData:I}=g,k=u=>{w(u.id,d.value.columns)},p=u=>{S(u.id,d.value.columns)},a=s(0),t=()=>{I().then(u=>{const{data:n,total:b}=u;if(n){_.value=n;try{l.value=Object.keys(n[0]).map(v=>({value:v,label:v}))}catch{re.warning("接口数据解析失败")}}b&&(a.value=b)})},i=le(()=>{var u,n;return((u=d.value.global.filterCfg)==null?void 0:u.show)&&((n=d.value.global.filterCfg)==null?void 0:n.formId)}),m=s({}),$=s(!1),M=s({layout:{layout:"horizontal",labelAlign:"right",labelCol:{style:{width:"100px"}}},properties:{id:{type:"string",label:"按钮标识",component:{disabled:!0}},name:{type:"string",label:"按钮名称"},position:{type:"radio",label:"按钮位置",component:{dataSource:[{value:"row",label:"行内"},{value:"header",label:"表头"}],buttonStyle:"solid"}},request:{type:"switch",label:"请求接口",tooltip:"是否在点击按钮后请求接口获取数据"},interfaceUrl:{show:"${formData.request}",type:"select",label:"接口地址",component:{asyncData:async()=>{const{code:u,data:n,msg:b}=await E.getApiList();return u==200?n.map(v=>({value:v.id,label:v.apiName})):[]}}},AfterHandleFunc:{show:"${formData.request}",type:"string",label:"处理函数",tooltip:"处理接口返回的数据,数据用于表单渲染或地址拼接",component:{name:"code-editor",height:100,prepend:"(res)=>{",append:"}"}},event:{type:"radio",label:"触发事件",component:{dataSource:[{value:"modal",label:"弹窗"},{value:"link",label:"链接"}],buttonStyle:"solid"}},linkUrl:{show:"'${formData.event}' == 'link'",type:"string",label:"链接地址",tooltip:"可以通过${name}的方式拼接变量,name为变量名称"},formId:{show:"'${formData.event}' == 'modal'",type:"select",label:"表单",component:{asyncData:async()=>await new Promise(u=>{setTimeout(()=>{u(P.value)},100)})}},"actionCfg.interfaceUrl":{show:"'${formData.event}' == 'modal'",type:"select",label:"接口地址",tooltip:"一般用于提交数据,新增后保存当前的表单数据",component:{asyncData:async()=>{const{code:u,data:n,msg:b}=await E.getApiList();return u==200?n.map(v=>({value:v.id,label:v.apiName})):[]}}}}}),F=s(""),T=()=>{F.value=fe(),d.value.global.actionCfg.push({name:"按钮",id:F.value,actionCfg:{interfaceUrl:""}})},N=u=>{let n=0;d.value.global.actionCfg.forEach((b,v)=>{b.id===u&&(n=v-1)}),d.value.global.actionCfg=d.value.global.actionCfg.filter(b=>b.id!==u),d.value.global.actionCfg.length&&F.value===u&&(n>=0?F.value=d.value.global.actionCfg[n].id:F.value=d.value.global.actionCfg[0].id)},Y=(u,n)=>{n==="add"?T():N(u)},P=s([]);return E.getFormList().then(u=>{const{code:n,data:b,msg:v}=u;n==200&&(P.value=b.map(L=>({value:L.id,label:L.name})))}),(u,n)=>{const b=be,v=Pe,L=qe,H=Ne,Z=_e,J=Ke,q=ze,ee=ge,te=ye,K=ve;return h(),O(G,null,[A("div",at,[i.value?(h(),R(H,{key:0,class:"filter-panel"},{default:o(()=>[e(We,{formData:m.value,id:r(d).global.filterCfg.formId,style:{"overflow-y":"auto","max-height":"120px","margin-bottom":"10px"}},null,8,["formData","id"]),e(L,null,{default:o(()=>[e(v,{span:24,style:{"text-align":"right"}},{default:o(()=>[e(b,{type:"primary","html-type":"submit"},{default:o(()=>[C("搜索")]),_:1}),e(b,{style:{margin:"0 8px"}},{default:o(()=>[C("重置")]),_:1})]),_:1})]),_:1})]),_:1})):oe("",!0),e(H,{class:"table-container"},{default:o(()=>[A("div",ot,[e(Z,null,{default:o(()=>[e(b,{type:"primary",onClick:r(D)},{default:o(()=>[C("新增列")]),_:1},8,["onClick"]),e(b,{type:"primary",onClick:n[0]||(n[0]=f=>$.value=!0)},{default:o(()=>[C("交互配置")]),_:1})]),_:1}),e(b,{icon:$e(r(Oe)),type:"link",title:"刷新数据",style:{float:"right"},onClick:t},null,8,["icon"])]),e(tt,{modelValue:r(d).columns,"onUpdate:modelValue":n[1]||(n[1]=f=>r(d).columns=f),onOnClick:k,onOnRemove:p},null,8,["modelValue"]),e(q,{showHeader:!1,columns:r(d).columns,"data-source":r(_),scroll:{y:i.value?300:500},pagination:{total:a.value}},{bodyCell:o(({column:f,record:z})=>[f&&f.type=="image"?(h(),R(J,{key:0,src:`${z[f.dataIndex]}`,height:"130px",width:"100%"},null,8,["src"])):oe("",!0),f&&f.type=="link"?(h(),O("a",{key:1,href:`${z[f.dataIndex]}`,target:"_blank"},me(z[f.dataIndex]),9,lt)):oe("",!0)]),_:1},8,["columns","data-source","scroll","pagination"])]),_:1})]),e(K,{open:$.value,"onUpdate:open":n[3]||(n[3]=f=>$.value=f),footer:null,title:"交互配置"},{default:o(()=>[e(te,{activeKey:F.value,"onUpdate:activeKey":n[2]||(n[2]=f=>F.value=f),type:"editable-card",onEdit:Y},{default:o(()=>[(h(!0),O(G,null,pe(r(d).global.actionCfg,f=>(h(),R(ee,{key:f.id,tab:f.name},{default:o(()=>[A("div",nt,[e(r(j),{layout:M.value.layout,properties:M.value.properties,formData:f},null,8,["layout","properties","formData"])])]),_:2},1032,["tab"]))),128))]),_:1},8,["activeKey"])]),_:1},8,["open"])],64)}}}),rt=ne(st,[["__scopeId","data-v-00902517"]]),it=Q({__name:"TableCfg",setup(U){const g=ie(),{tableCfg:d,currentColumn:_,columnFields:l}=se(g),w=s({layout:{layout:"horizontal",labelAlign:"right",labelCol:{style:{width:"100px"}}},properties:{dataIndex:{type:"select",label:"字段名",component:{asyncData:async()=>await new Promise(p=>{setTimeout(()=>{p(l.value)},100)})}},title:{type:"string",label:"列名"},width:{type:"number",label:"列宽"},align:{type:"radio",label:"对齐方式",component:{dataSource:[{value:"left",label:"左"},{value:"center",label:"居中"},{value:"right",label:"右"}],buttonStyle:"solid"}},fixed:{type:"radio",label:"固定列",component:{dataSource:[{value:"left",label:"左"},{value:"right",label:"右"},{value:!1,label:"不固定"}],buttonStyle:"solid"}},type:{type:"select",label:"列类型",component:{dataSource:[{value:"link",label:"链接"},{value:"image",label:"图片"},{value:"text",label:"文本"}]}}}}),S=s();Fe(()=>l,()=>{S.value&&(S.value,S.value.refreshOption("dataIndex"))},{deep:!0,immediate:!0});const D=s("column"),I=s({layout:{layout:"horizontal",labelAlign:"right",labelCol:{style:{width:"100px"}}},properties:{bordered:{type:"switch",label:"边框"},"filterCfg.show":{type:"switch",label:"显示筛选区"},"filterCfg.formId":{type:"select",label:"筛选区表单",show:"${formData.filterCfg.show}",component:{asyncData:async()=>await new Promise(p=>{setTimeout(()=>{p(k.value)},100)})}}}}),k=s([]);return E.getFormList().then(p=>{const{code:a,data:t,msg:i}=p;a==200&&(k.value=t.map(m=>({value:m.id,label:m.name})))}),(p,a)=>{const t=Be,i=ge,m=ye;return h(),R(m,{activeKey:D.value,"onUpdate:activeKey":a[0]||(a[0]=$=>D.value=$)},{default:o(()=>[e(i,{key:"column",tab:"列配置"},{default:o(()=>[X((h(),R(r(j),{layout:w.value.layout,properties:w.value.properties,formData:r(_),key:r(_).id,ref_key:"columnForm",ref:S},null,8,["layout","properties","formData"])),[[W,r(_).id]]),X(A("div",null,[e(t)],512),[[W,!r(_).id]])]),_:1}),e(i,{key:"global",tab:"全局配置"},{default:o(()=>[e(r(j),{layout:I.value.layout,properties:I.value.properties,formData:r(d).global},null,8,["layout","properties","formData"])]),_:1})]),_:1},8,["activeKey"])}}}),ut={class:"table-design"},ct={class:"left-part"},dt={class:"right-part"},pt=Q({__name:"TableEditor",props:{id:{}},setup(U){const g=U,{id:d}=de(g),_=ie(),{tableCfg:l,tableData:w,saveLoading:S,columnFields:D}=se(_),{onRefreshData:I,onSave:k}=_,p=s(!1),a=s(0),t=[{title:"数据配置",description:"在开始配置列表前，请先配置数据源",target:()=>document.querySelector(".data-source-btn")},{title:"变量配置",description:"配置数据源后,为保证数据源的正常获取数据,还需要配置对应的参数",target:()=>document.querySelector(".variable-btn")},{title:"表格布局区",description:"现在可以通过新增列,来增加表格的列,支持拖拽表头改变列的位置及列宽",target:()=>document.querySelector(".left-part")},{title:"配置区",description:"可以对表格整体或者表格单独的列进行配置,满足您的需求",target:()=>document.querySelector(".right-part")},{title:"最后",description:"保存您刚刚的配置",target:()=>document.querySelector(".save-btn")}],i=s({interfaceUrl:"",handlerFunc:"return res",type:"dynamic"}),m=s(""),$=()=>{I().then(V=>{const{data:c}=V;if(c){w.value=c;try{D.value=Object.keys(c[0]).map(x=>({value:x,label:x}))}catch{re.warning("接口数据解析失败")}}})};d.value?E.getDetail(d.value).then(V=>{const{code:c,data:x,msg:B}=V;c==200&&(l.value=x,$())}):(l.value={name:"",description:"",status:1,columns:[],global:{bordered:!1,actionCfg:[],filterCfg:{show:!1,formId:""}},dataSource:{type:"dynamic",interfaceUrl:"",handlerFunc:"return res"},variablePool:[{key:"pageNumber",defaultValue:"1"},{key:"pageSize",defaultValue:"10"}]},i.value=l.value.dataSource,w.value=[],D.value=[],p.value=!0);const M=le(()=>l.value.name?l.value.name:"新建表格"),F=le(()=>l.value.description?l.value.description:""),T=s(!1),N=s({layout:{labelAlign:"left",layout:"horizontal",labelCol:{span:4}},properties:{name:{type:"string",label:"表格名称"},description:{type:"string",label:"备注"},status:{type:"radio",label:"状态",component:{buttonStyle:"solid",dataSource:[{label:"启用",value:1},{label:"停用",value:0}]}}}}),Y=()=>{T.value=!0},P=Ge(),u=()=>{P.go(-1)},n=()=>{k(),T.value=!1,u()},b=()=>{P.push({path:"/low-code/preview-table",query:{id:l.value.id}})},v=s(!1),L=s({layout:{labelAlign:"left",layout:"horizontal",labelCol:{span:5}},properties:{interfaceUrl:{type:"select",label:"接口地址",component:{asyncData:async()=>{const{code:V,data:c,msg:x}=await E.getApiList();return V==200?c.map(B=>({value:B.id,label:B.apiName})):[]}}},handlerFunc:{type:"string",label:"数据预处理",tooltip:"请保证输出的数据格式为:{data:any[],total:number}",component:{name:"code-editor",height:200,prepend:"(res)=>{",append:"}"}}}}),H=()=>{i.value=l.value.dataSource,v.value=!0},Z=()=>{l.value.dataSource=i.value,$(),J()},J=()=>{v.value=!1},q=s(!1),ee=async()=>await I(),te=async()=>{q.value=!0;const V=await ee();q.value=!1,m.value=JSON.stringify(V,null,2)},K=s(!1),f=s([{title:"Key",dataIndex:"key",type:"input"},{title:"默认值",dataIndex:"defaultValue",type:"input"}]),z=()=>{K.value=!0};return(V,c)=>{const x=be,B=_e,ue=He,he=Xe,ae=ve,Ce=Je,we=je,Se=Ue("loading");return h(),O(G,null,[e(he,{title:M.value,subTitle:F.value,onBack:u,ghost:!1,style:{padding:"10px 24px"}},{extra:o(()=>[e(B,null,{default:o(()=>[e(x,{onClick:H,class:"data-source-btn"},{default:o(()=>[C(" 数据源配置 ")]),_:1}),e(x,{onClick:z,class:"variable-btn"},{default:o(()=>[C(" 变量池配置 ")]),_:1}),X(e(x,{onClick:b},{default:o(()=>[C(" 预览 ")]),_:1},512),[[W,r(l).id]]),e(x,{onClick:Y,type:"primary",class:"save-btn"},{default:o(()=>[C(" 保存 ")]),_:1})]),_:1})]),tags:o(()=>[r(l).status?(h(),R(ue,{key:0,color:"#87d068"},{default:o(()=>[C("启用")]),_:1})):(h(),R(ue,{key:1,color:"#f50"},{default:o(()=>[C("停用")]),_:1}))]),_:1},8,["title","subTitle"]),X((h(),O("div",ut,[A("div",ct,[e(rt)]),A("div",dt,[e(it)])])),[[Se,r(S),void 0,{fullscreen:!0}]]),e(ae,{open:T.value,"onUpdate:open":c[1]||(c[1]=y=>T.value=y),title:"保存",onOk:n},{default:o(()=>[e(r(j),{formData:r(l),"onUpdate:formData":c[0]||(c[0]=y=>Te(l)?l.value=y:null),layout:N.value.layout,properties:N.value.properties},null,8,["formData","layout","properties"])]),_:1},8,["open"]),e(ae,{open:v.value,"onUpdate:open":c[4]||(c[4]=y=>v.value=y),title:"数据源配置",onOk:Z,onCancel:J},{default:o(()=>[e(r(j),{layout:L.value.layout,properties:L.value.properties,formData:i.value,"onUpdate:formData":c[2]||(c[2]=y=>i.value=y)},null,8,["layout","properties","formData"]),e(Ce,null,{default:o(()=>[C("结果区")]),_:1}),e(x,{type:"primary",style:{"margin-bottom":"5px"},onClick:te,loading:q.value},{default:o(()=>[C("运行")]),_:1},8,["loading"]),e(Ae,{height:200,disabled:"",value:m.value,"onUpdate:value":c[3]||(c[3]=y=>m.value=y)},null,8,["value"])]),_:1},8,["open"]),e(ae,{title:"变量池配置",open:K.value,footer:!1,onCancel:c[6]||(c[6]=y=>K.value=!1)},{default:o(()=>[e(Qe,{columns:f.value,modelValue:r(l).variablePool,"onUpdate:modelValue":c[5]||(c[5]=y=>r(l).variablePool=y)},null,8,["columns","modelValue"])]),_:1},8,["open"]),e(we,{current:a.value,"onUpdate:current":c[7]||(c[7]=y=>a.value=y),open:p.value,steps:t,onClose:c[8]||(c[8]=y=>p.value=!1)},null,8,["current","open"])],64)}}}),oa=ne(pt,[["__scopeId","data-v-0fa3ecde"]]);export{oa as default};
