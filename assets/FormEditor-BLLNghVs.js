import{B as oe,j as ve,k as ye,g as _e,c as ge,y as he,z as we,h as Pe,f as Ce,p as De,A as Se,r as Ie,E as ke,G as xe,a as Me,i as Te,v as Ve,H as $e,u as Fe,J as Ae,F as ze,M as Be,K as Le,t as Ue,T as Ee}from"./ant-design-vue-CaKXcGcF.js";import{d as x,r as y,R as p,S,U as D,F,a1 as z,W as _,a8 as u,J as k,V as J,ab as qe,ac as Ne,a9 as Ke,L as E,aa as W,m as j,w as le,u as r,c as b,X as B,K as ae,ad as Ye,af as Re,G,_ as Ge,Y as te,y as Oe,x as Je,Z as je}from"./@vue-fHF42jnH.js";import{b as q,u as He,e as We}from"./index-BiYaJyuZ.js";import{V as Xe}from"./vue-draggable-next-BdhTq0Kp.js";import{c as N}from"./lodash-es-PU94eZQX.js";import{v as re}from"./uuid-CQkTLCs1.js";import{d as Ze,s as L}from"./pinia-DfzYFrYR.js";import{_ as ne}from"./LowCodeForm.vue_vue_type_script_setup_true_lang-B8l-Dj0n.js";import{h as Qe}from"./html2canvas-BfYXEYrK.js";import{f as U}from"./form-Dd7uUe7w.js";import{_ as et,$ as tt}from"./@ant-design-0mnrYJ2t.js";import{S as H}from"./SchemaForm-CrK1ZbC8.js";import{d as O}from"./dict-ZIjHedrJ.js";import{u as ot}from"./vue-router-D1iaMedC.js";import"./@babel-BiFW4_mA.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./dayjs-X-x4l2Bb.js";import"./@ctrl-DOFZgDuz.js";import"./throttle-debounce-CUWDS_la.js";import"./async-validator-DKvM95Vc.js";import"./scroll-into-view-if-needed-SxpMpKWN.js";import"./compute-scroll-into-view-1gs_hJI2.js";import"./vue-types-C5fUfLeo.js";import"./dom-align-CRCehRfe.js";import"./@emotion-BtrR-yrm.js";import"./stylis-DsJDcYJc.js";/* empty css                      */import"./axios-B4uVmeYG.js";import"./js-cookie-Cz0CWeBA.js";import"./@vueuse-D7-wZPRK.js";import"./vue-codemirror-CQ4kpRVU.js";import"./codemirror-XzAVIbiy.js";import"./@codemirror-ByA7djrN.js";import"./@lezer-Bb8aRhbX.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./common-DY7zZKah.js";import"./gaius-utils-Bpz_sNTY.js";const se=n=>(qe("data-v-7e72941f"),n=n(),Ne(),n),lt={class:"material-area"},at={class:"material-layout-area"},rt=se(()=>D("div",{class:"title"},"布局组件",-1)),nt={class:"content"},st={class:"material-data-area"},it=se(()=>D("div",{class:"title"},"基础组件",-1)),pt={class:"content"},ct=x({__name:"MaterialArea",setup(n){const i=y({layoutMaterials:[{label:"栅格",value:"grid"},{label:"卡片",value:"card"},{label:"分割线",value:"divider"},{label:"折叠框",value:"collapse"}],dataMaterials:[{label:"输入框",value:"input"},{label:"选择器",value:"select"},{label:"日期选择器",value:"date"},{label:"数字输入框",value:"number"},{label:"开关",value:"switch"},{label:"单选框",value:"radio"},{label:"多选框",value:"checkbox"}]}),l=e=>{var c;const a=e.target;(c=e.dataTransfer)==null||c.setData("material",a.dataset.material)};return(e,a)=>{const c=oe;return p(),S("div",lt,[D("div",at,[rt,D("div",nt,[(p(!0),S(F,null,z(i.value.layoutMaterials,d=>(p(),_(c,{type:"dashed",key:d.value,draggable:"true",onDragstart:l,"data-material":d.value},{default:u(()=>[k(J(d.label),1)]),_:2},1032,["data-material"]))),128))])]),D("div",st,[it,D("div",pt,[(p(!0),S(F,null,z(i.value.dataMaterials,d=>(p(),_(c,{type:"dashed",key:d.value,draggable:"true",onDragstart:l,"data-material":d.value},{default:u(()=>[k(J(d.label),1)]),_:2},1032,["data-material"]))),128))])])])}}}),dt=q(ct,[["__scopeId","data-v-7e72941f"]]),T={formItemProp:{label:"",name:"",required:!1},show:void 0},ut={...T,controlProp:{allowClear:!0,bordered:!0,disabled:!1,maxlength:null,size:"middle"},type:"input",id:""},mt={...T,controlProp:{allowClear:!0,bordered:!0,disabled:!1,mode:null,size:"middle",virtual:!0},type:"select",id:""},bt={...T,controlProp:{disabled:!1,size:"middle"},type:"switch",id:""},ft={...T,controlProp:{disabled:!1,size:"middle",buttonStyle:"solid",optionType:"button"},type:"radio",id:""},vt={...T,controlProp:{disabled:!1},type:"checkbox",id:""},yt={...T,controlProp:{allowClear:!1,bordered:!0,disabled:!1,format:"YYYY-MM-DD",mode:"",valueFormat:"YYYY-MM-DD",size:"middle",picker:""},type:"date",id:""},_t={...T,controlProp:{disabled:!1,size:"middle",bordered:!0,controls:!0,max:null,min:null,precision:null,step:1},type:"number",id:""},gt={type:"grid",controlProp:{gutter:0,colNumber:2,children:[]},id:"",show:void 0},ht={type:"card",controlProp:{title:"",bordered:!0,hoverable:!1,children:[]},id:"",show:void 0},wt={type:"divider",controlProp:{type:"horizontal",plain:!1,orientation:"left",dashed:!1,title:""},id:"",show:void 0},Pt={type:"collapse",controlProp:{bordered:!0,ghost:!1,header:"折叠面板",showArrow:!0,defaultExpanded:!0,children:[]},id:"",show:void 0},Ct=[ut,bt,mt,ft,vt,gt,ht,yt,_t,wt,Pt],Dt=()=>"field"+new Date().getTime().toString().slice(-4),St=(n,i)=>{const l=Ct.find(e=>e.type===n);if(l){const e=N(l);if(e.formItemProp){const a=Dt();e.formItemProp.label=a,e.formItemProp.name=a}return e.id=new Date().getTime().toString(),{...e,...i}}else throw new Error(`ControlDefault中${n}不存在,加载配置失败。`)},It=x({__name:"MaterialGrid",props:Ke({gutter:{},colNumber:{}},{children:{required:!0},childrenModifiers:{}}),emits:["update:children"],setup(n){const i=n,{gutter:l,colNumber:e}=E(i),a=W(n,"children"),c=j(()=>24/e.value);return le(()=>e.value,()=>{a.value?a.value.length>e.value?a.value=a.value.slice(0,e.value):a.value=a.value.concat(Array.from({length:e.value-a.value.length}).map(()=>[])):a.value=Array.from({length:e.value}).map(()=>[])},{immediate:!0}),(d,h)=>{const m=ve,f=ye;return p(),_(f,{gutter:r(l)},{default:u(()=>[(p(!0),S(F,null,z(a.value,(P,v)=>(p(),_(m,{class:"gutter-col",span:c.value,key:v},{default:u(()=>[(p(),_(K,{modelValue:a.value[v],"onUpdate:modelValue":g=>a.value[v]=g,key:v},null,8,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["span"]))),128))]),_:1},8,["gutter"])}}}),kt=q(It,[["__scopeId","data-v-bd13b1ec"]]),xt=x({__name:"MaterialCard",props:{children:{required:!0},childrenModifiers:{}},emits:["update:children"],setup(n){const i=W(n,"children");return(l,e)=>{const a=_e;return p(),_(a,B(l.$attrs,{bodyStyle:{padding:0,"min-height":"40px"}}),{default:u(()=>[b(K,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=c=>i.value=c)},null,8,["modelValue"])]),_:1},16)}}}),Mt=x({__name:"MaterialDivider",props:{type:{},plain:{type:Boolean},orientation:{},dashed:{type:Boolean},title:{}},setup(n){const i=n,{title:l,dashed:e,orientation:a,plain:c,type:d}=E(i);return(h,m)=>{const f=ge;return p(),_(f,{dashed:r(e),orientation:r(a),plain:r(c),type:r(d)},{default:u(()=>[k(J(r(l)),1)]),_:1},8,["dashed","orientation","plain","type"])}}}),Tt=x({__name:"MaterialCollapse",props:{bordered:{type:Boolean},ghost:{type:Boolean},title:{},showArrow:{type:Boolean},defaultExpanded:{type:Boolean},children:{}},setup(n){const i=n,{title:l,showArrow:e,bordered:a,ghost:c,defaultExpanded:d,children:h}=E(i),m=y(""),f=y(re());return d.value&&(m.value=f.value),(P,v)=>{const g=he,t=we;return p(),_(t,{activeKey:m.value,"onUpdate:activeKey":v[1]||(v[1]=s=>m.value=s),bordered:r(a),ghost:r(c)},{default:u(()=>[(p(),_(g,{key:f.value,header:r(l),showArrow:r(e)},{default:u(()=>[b(K,{modelValue:r(h),"onUpdate:modelValue":v[0]||(v[0]=s=>ae(h)?h.value=s:null)},null,8,["modelValue"])]),_:1},8,["header","showArrow"]))]),_:1},8,["activeKey","bordered","ghost"])}}}),Vt={input:Pe,select:Ce,radio:De,switch:Se,number:Ie,checkbox:ke,grid:kt,card:xt,date:xe,divider:Mt,collapse:Tt},X=Ze("formDesign",()=>{const n=y([]),i=y({}),l=y({}),e=y(""),a=t=>{const{id:s,schema:o,name:w,description:$,status:V}=t;e.value=s,d.value={name:w,description:$,status:V},n.value=o.formCfgItemList,i.value=o.formConfig},c=(t,s)=>{const o=s.findIndex(w=>w.id===t);o!=-1&&(l.value=s[o])},d=y({name:"",description:"",status:1}),h=(t,s)=>{const o=s.findIndex(w=>w.id===t);o!=-1&&s.splice(o,1)},m=()=>{const t=N(l.value);f(t),Reflect.deleteProperty(t,"id");const s=t;n.value.push(s)},f=t=>{t.id=re(),t.type=="grid"?t.controlProp.children.forEach(s=>{s.forEach(o=>{f(o)})}):t.type=="card"?t.controlProp.children.forEach(s=>{f(s)}):t.type=="collapse"&&t.controlProp.children.forEach(s=>{f(s)})},P=y(!1),v=()=>{const t=document.createElement("div");t.className="preview-form",t.style.width="720px",t.style.height="500px",t.style.overflowY="auto",t.style.padding="10px",Ye(ne,{schema:{formCfgItemList:n.value,formConfig:i.value},formData:{}}).mount(t).$el,document.body.appendChild(t)};return{curControlCfg:l,formCfgItemList:n,onSelectControlItem:c,copyControlItem:m,removeControlItem:h,extraFormConfig:d,onSave:async()=>{P.value=!0;let t="";if(v(),document.querySelector(".preview-form")){const V=await Qe(document.querySelector(".preview-form"));V&&(t=V.toDataURL("image/png"),document.body.removeChild(document.querySelector(".preview-form")))}let s=U.add;const o={schema:{formCfgItemList:n.value,formConfig:i.value},...d.value,img:t};e.value&&(s=U.update,o.id=e.value);const{code:w,msg:$}=await s(o);w==200&&Me.success($),P.value=!1},id:e,saveLoading:P,setFormDetail:a,formConfig:i}}),$t=["onClick"],Ft={class:"material-util"},At=["onClick"],zt=x({__name:"MaterialView",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(n){Re(g=>({"377eb23e":r(l).colorPrimary}));const i=He(),{themeCfg:l}=L(i),e=X(),{curControlCfg:a}=L(e),{onSelectControlItem:c,copyControlItem:d,removeControlItem:h}=e,m=W(n,"modelValue"),f=g=>Vt[g],P=(g,t)=>{const s=N(g);switch(t){case"radio":s.options=[{label:"1",value:"1"},{label:"2",value:"2"}];break;case"checkbox":s.options=[{label:"1",value:"1"},{label:"2",value:"2"}];break;case"select":s.options=[{label:"1",value:"1"},{label:"2",value:"2"}];break}return s},v=g=>{if(g.dataTransfer.getData("material")){const t=St(g.dataTransfer.getData("material"));m.value.push(t)}};return(g,t)=>{const s=Te;return p(),_(r(Xe),{list:m.value,"onUpdate:list":t[1]||(t[1]=o=>m.value=o),class:"material-view",onDragover:t[2]||(t[2]=G(()=>{},["prevent","stop"])),onDrop:G(v,["stop"]),animation:"300",group:{name:"form",pull:!0,put:!0},"ghost-class":"ghost"},{default:u(()=>[(p(!0),S(F,null,z(m.value,o=>(p(),S("div",{key:o,onClick:G(w=>r(c)(o.id,m.value),["stop"]),class:Ge(["material-item",{active:o.id===r(a).id}])},[o.formItemProp?(p(),_(s,{key:0,label:o.formItemProp.label,name:o.formItemProp.name},{default:u(()=>[(p(),_(te(f(o.type)),B({ref_for:!0},P(o.controlProp,o.type),{key:o.id}),null,16))]),_:2},1032,["label","name"])):(p(),_(te(f(o.type)),B({key:1,ref_for:!0},P(o.controlProp,o.type),{children:o.controlProp.children,"onUpdate:children":w=>o.controlProp.children=w,key:o.id}),null,16,["children","onUpdate:children"])),D("div",Ft,[D("div",{class:"icon-btn",onClick:t[0]||(t[0]=(...w)=>r(d)&&r(d)(...w)),title:"复制"},[b(r(et))]),D("div",{class:"icon-btn",onClick:w=>r(h)(o.id,m.value),title:"删除"},[b(r(tt))],8,At)])],10,$t))),128))]),_:1},8,["list"])}}}),K=q(zt,[["__scopeId","data-v-11ca5068"]]),Bt=[{type:"input",properties:{"formItemProp.label":{type:"string",label:"标签文本"},"formItemProp.name":{type:"string",label:"字段名"},show:{type:"string",label:"显隐条件"},"controlProp.allowClear":{type:"switch",label:"可清除"},"controlProp.bordered":{type:"switch",label:"边框"},"controlProp.disabled":{type:"switch",label:"禁用"},"controlProp.size":{type:"radio",label:"大小",component:{dataSource:[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}]}},"controlProp.maxlength":{type:"number",label:"最大长度"}}},{type:"select",properties:{"formItemProp.label":{type:"string",label:"标签文本"},"formItemProp.name":{type:"string",label:"字段名"},show:{type:"string",label:"显隐条件"},"controlProp.allowClear":{type:"switch",label:"可清除"},"controlProp.bordered":{type:"switch",label:"边框"},"controlProp.disabled":{type:"switch",label:"禁用"},"controlProp.size":{type:"radio",label:"大小",component:{dataSource:[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}]}},"controlProp.virtual":{type:"switch",label:"虚拟滚动"},"controlProp.mode":{type:"select",label:"模式",component:{dataSource:[{label:"多选",value:"multiple"},{label:"标签",value:"tag"}],allowClear:!0}},"controlProp.dict":{type:"select",label:"字典",component:{asyncData:async()=>{const{code:n,data:i,msg:l}=await O.getDictTypeList();return n==200?i.map(e=>({label:e.dictTypeDesc,value:e.dictType})):[]}}}}},{type:"switch",properties:{"formItemProp.label":{type:"string",label:"标签文本"},"formItemProp.name":{type:"string",label:"字段名"},show:{type:"string",label:"显隐条件"},"controlProp.disabled":{type:"switch",label:"禁用"},"controlProp.size":{type:"radio",label:"大小",component:{dataSource:[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}]}}}},{type:"radio",properties:{"formItemProp.label":{type:"string",label:"标签文本"},"formItemProp.name":{type:"string",label:"字段名"},show:{type:"string",label:"显隐条件"},"controlProp.disabled":{type:"switch",label:"禁用"},"controlProp.size":{type:"radio",label:"大小",component:{dataSource:[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}]}},"controlProp.buttonStyle":{type:"radio",label:"样式",component:{dataSource:[{label:"描边",value:"outline"},{label:"填色",value:"solid"}]}},"controlProp.optionType":{type:"radio",label:"类型",component:{dataSource:[{label:"默认",value:"default"},{label:"按钮",value:"button"}]}},"controlProp.dict":{type:"select",label:"字典",component:{asyncData:async()=>{const{code:n,data:i,msg:l}=await O.getDictTypeList();return n==200?i.map(e=>({label:e.dictTypeDesc,value:e.dictType})):[]}}}}},{type:"checkbox",properties:{"formItemProp.label":{type:"string",label:"标签文本"},"formItemProp.name":{type:"string",label:"字段名"},show:{type:"string",label:"显隐条件"},"controlProp.disabled":{type:"switch",label:"禁用"},"controlProp.dict":{type:"select",label:"字典",component:{asyncData:async()=>{const{code:n,data:i,msg:l}=await O.getDictTypeList();return n==200?i.map(e=>({label:e.dictTypeDesc,value:e.dictType})):[]}}}}},{type:"number",properties:{"formItemProp.label":{type:"string",label:"标签文本"},"formItemProp.name":{type:"string",label:"字段名"},show:{type:"string",label:"显隐条件"},"controlProp.bordered":{type:"switch",label:"边框"},"controlProp.disabled":{type:"switch",label:"禁用"},"controlProp.controls":{type:"switch",label:"控件"},"controlProp.size":{type:"radio",label:"大小",component:{dataSource:[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}]}},"controlProp.max":{type:"number",label:"最大值"},"controlProp.min":{type:"number",label:"最小值"},"controlProp.precision":{type:"number",label:"精度"},"controlProp.step":{type:"number",label:"步长"}}},{type:"date",properties:{"formItemProp.label":{type:"string",label:"标签文本"},"formItemProp.name":{type:"string",label:"字段名"},show:{type:"string",label:"显隐条件"},"controlProp.bordered":{type:"switch",label:"边框"},"controlProp.disabled":{type:"switch",label:"禁用"},"controlProp.format":{type:"string",label:"显示格式化"},"controlProp.valueFormat":{type:"string",label:"值格式化"},"controlProp.size":{type:"radio",label:"大小",component:{dataSource:[{label:"大",value:"large"},{label:"中",value:"middle"},{label:"小",value:"small"}]}},"controlProp.mode":{type:"radio",label:"面板",component:{dataSource:[{label:"时间",value:"time"},{label:"日期",value:"date"},{label:"月",value:"month"},{label:"年",value:"year"}]}},"controlProp.picker":{type:"radio",label:"类型",component:{dataSource:[{label:"日期",value:"date"},{label:"周",value:"week"},{label:"月",value:"month"},{label:"年",value:"year"}]}}}},{type:"grid",properties:{show:{type:"string",label:"显隐条件"},"controlProp.gutter":{type:"number",label:"栅格间距"},"controlProp.colNumber":{type:"radio",label:"列配置",component:{dataSource:[{label:"一",value:1},{label:"二",value:2},{label:"三",value:3},{label:"四",value:4}]}}}},{type:"card",properties:{show:{type:"string",label:"显隐条件"},"controlProp.title":{type:"string",label:"标题"},"controlProp.bordered":{type:"switch",label:"边框"},"controlProp.hoverable":{type:"switch",label:"悬浮效果"}}},{type:"divider",properties:{show:{type:"string",label:"显隐条件"},"controlProp.title":{type:"string",label:"标题"},"controlProp.orientation":{type:"radio",label:"标题位置",component:{dataSource:[{label:"左",value:"left"},{label:"中",value:"center"},{label:"右",value:"right"}]}},"controlProp.dashed":{type:"switch",label:"虚线"},"controlProp.plain":{type:"switch",label:"普通正文"}}},{type:"collapse",properties:{show:{type:"string",label:"显隐条件"},"controlProp.title":{type:"string",label:"标题"},"controlProp.bordered":{type:"switch",label:"边框"},"controlProp.ghost":{type:"switch",label:"透明效果"},"controlProp.defaultExpanded":{type:"switch",label:"默认展开"},"controlProp.showArrow":{type:"switch",label:"显示箭头"}}}],Lt={key:1},Ut=x({__name:"MaterialCfg",setup(n){const i=X(),{curControlCfg:l,formConfig:e}=L(i),a=y({layout:{layout:"horizontal",labelAlign:"right",labelCol:{span:8},wrapperCol:{span:16}},properties:{}}),c=y({layout:{layout:"horizontal",labelAlign:"right",labelCol:{span:8},wrapperCol:{span:16}},properties:{labelAlign:{label:"对齐方式",type:"radio",component:{dataSource:[{label:"左对齐",value:"left"},{label:"右对齐",value:"right"}]}},"labelCol.span":{label:"标签宽度",type:"number"},"labelCol.offset":{label:"偏移量",type:"number"}}}),d=y("item");return le(()=>l.value.type,()=>{if(l.value.type){let h=Bt.find(m=>m.type===l.value.type);h&&(a.value.properties=N(h.properties))}},{immediate:!0}),(h,m)=>{const f=$e,P=Fe,v=Ve;return p(),_(v,{activeKey:d.value,"onUpdate:activeKey":m[0]||(m[0]=g=>d.value=g)},{default:u(()=>[b(P,{key:"item",tab:"控件配置"},{default:u(()=>[r(l).id?(p(),_(r(H),{layout:a.value.layout,properties:a.value.properties,formData:r(l),key:r(l).id},null,8,["layout","properties","formData"])):(p(),S("div",Lt,[b(f)]))]),_:1}),b(P,{key:"form",tab:"表单配置"},{default:u(()=>[b(r(H),{layout:c.value.layout,properties:c.value.properties,formData:r(e)},null,8,["layout","properties","formData"])]),_:1})]),_:1},8,["activeKey"])}}}),Et={class:"form-design"},qt={class:"middle-part"},Nt=x({__name:"FormEditor",props:{id:{}},setup(n){const i=n,{id:l}=E(i),e=X(),{formCfgItemList:a,extraFormConfig:c,saveLoading:d,formConfig:h}=L(e),{onSave:m,setFormDetail:f}=e,P=y(!1),v=y(0),g=[{title:"物料区",description:"选择您需要的表单控件",target:()=>document.querySelector(".left-part")},{title:"设计区",description:"将物料区的表单控件拖拽到此区域,可以按照你需要的方式进行布局。",target:()=>document.querySelector(".middle-part")},{title:"配置区",description:"对设计区选中的控件进行配置",target:()=>document.querySelector(".right-part")},{title:"查看实际效果",description:"对已经配置完成的表单进行预览",target:()=>document.querySelector(".preview-btn")},{title:"最后",description:"保存您刚刚的配置",target:()=>document.querySelector(".save-btn")}];l.value?U.getDetail(l.value).then(A=>{const{code:C,data:M,msg:R}=A;C==200&&f(M)}):(f({id:"",name:"",description:"",schema:{formCfgItemList:[],formConfig:{labelCol:{span:void 0,offset:void 0},labelAlign:"left"}},img:"",status:1}),P.value=!0);const t=j(()=>l.value?c.value.name:"新建表单"),s=j(()=>l.value?c.value.description:""),o=y(!1),w=y({layout:{labelAlign:"left",layout:"horizontal",labelCol:{span:4}},properties:{name:{type:"string",label:"表单名称"},description:{type:"string",label:"备注"},status:{type:"radio",label:"状态",component:{buttonStyle:"solid",dataSource:[{label:"启用",value:1},{label:"停用",value:0}]}}}}),$=()=>{o.value=!0},V=ot(),Z=()=>{V.go(-1)},ie=()=>{m().then(()=>{Z()}),o.value=!1},Y=y(!1),pe=y({}),ce=()=>{Y.value=!0},de=()=>{U.getTemplate(l.value).then(A=>{const{code:C,data:M,msg:R}=A;C==200&&We(M,c.value.name,"vue")})};return(A,C)=>{const M=oe,R=Ue,Q=Ee,ue=Ae,me=ze,ee=Be,be=Le,fe=Oe("loading");return p(),S(F,null,[b(ue,{title:t.value,subTitle:s.value,onBack:Z,ghost:!1,style:{padding:"10px 24px"}},{extra:u(()=>[b(R,null,{default:u(()=>[r(l)?(p(),_(M,{key:0,onClick:de},{default:u(()=>[k(" 导出 ")]),_:1})):je("",!0),b(M,{onClick:ce,class:"preview-btn"},{default:u(()=>[k(" 预览 ")]),_:1}),b(M,{onClick:$,type:"primary",class:"save-btn"},{default:u(()=>[k(" 保存 ")]),_:1})]),_:1})]),tags:u(()=>[r(c).status?(p(),_(Q,{key:0,color:"#87d068"},{default:u(()=>[k("启用")]),_:1})):(p(),_(Q,{key:1,color:"#f50"},{default:u(()=>[k("停用")]),_:1}))]),_:1},8,["title","subTitle"]),Je((p(),S("div",Et,[b(dt,{class:"left-part"}),D("div",qt,[b(me,B(r(h),{class:"middle-part-content"}),{default:u(()=>[b(K,{modelValue:r(a),"onUpdate:modelValue":C[0]||(C[0]=I=>ae(a)?a.value=I:null)},null,8,["modelValue"])]),_:1},16)]),b(Ut,{class:"right-part"})])),[[fe,r(d),void 0,{fullscreen:!0}]]),b(ee,{open:o.value,"onUpdate:open":C[1]||(C[1]=I=>o.value=I),title:"保存",onOk:ie},{default:u(()=>[b(r(H),{layout:w.value.layout,properties:w.value.properties,"form-data":r(c)},null,8,["layout","properties","form-data"])]),_:1},8,["open"]),b(ee,{open:Y.value,"onUpdate:open":C[2]||(C[2]=I=>Y.value=I),title:"预览"},{default:u(()=>[b(ne,{formData:pe.value,schema:{formCfgItemList:r(a),formConfig:r(h)}},null,8,["formData","schema"])]),_:1},8,["open"]),b(be,{current:v.value,"onUpdate:current":C[3]||(C[3]=I=>v.value=I),open:P.value,steps:g,onClose:C[4]||(C[4]=I=>P.value=!1)},null,8,["current","open"])],64)}}}),xo=q(Nt,[["__scopeId","data-v-dc0d2fc0"]]);export{xo as default};
