import{S as f}from"./SchemaForm-B33AVQbJ.js";import{_ as m}from"./CodeEditor.vue_vue_type_script_setup_true_name_EvCode_lang-B9RC6xWa.js";import{d as c,r as e,q as v,U as d,V as y,c as p,u as g,F as h,W as _}from"./@vue-erW_et9m.js";import"./index-Br8gjNii.js";import"./pinia-DOycVbUI.js";/* empty css                      */import"./axios-C8DqakIB.js";import"./js-cookie-Cz0CWeBA.js";import"./ant-design-vue-yNpjrsH-.js";import"./@babel-BiFW4_mA.js";import"./@ant-design-IRTEbH5T.js";import"./@ctrl-DOFZgDuz.js";import"./lodash-es-PU94eZQX.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./dayjs-B73STPP_.js";import"./throttle-debounce-CUWDS_la.js";import"./async-validator-DKvM95Vc.js";import"./scroll-into-view-if-needed-SxpMpKWN.js";import"./compute-scroll-into-view-1gs_hJI2.js";import"./vue-types-C5fUfLeo.js";import"./dom-align-CRCehRfe.js";import"./@emotion-BtrR-yrm.js";import"./stylis-OW4gUFyn.js";import"./@vueuse-DFKns4fX.js";import"./vue-router-CjQMd8cK.js";import"./uuid-CQkTLCs1.js";import"./echarts-DetEu2Tg.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CDo53BfZ.js";import"./gaius-utils-FbSzq_Sh.js";import"./vue-codemirror-dF9jxKSA.js";import"./codemirror-D_HKGbp9.js";import"./@codemirror-BNYy9MjX.js";import"./@lezer-Cp1Os4ub.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";const S=_("h4",null,"JSONForm组件(将json数据格式转换为对应的form)",-1),it=c({__name:"HomeView",setup(b){const s=async(i,t)=>t===""?Promise.reject("Please input the password again"):t=="1"?Promise.reject("Two inputs don't match!"):Promise.resolve(),n=e(),r=e({layout:{labelAlign:"left",layout:"horizontal",labelCol:{span:2}},properties:{field:{type:"string",label:"字段名"},test:{type:"string",label:"测试",tooltip:"字段名等于test时不显示此项",show:"'${formData.field}' != 'test'",rules:[{validator:s,trigger:"change"}]},asyncData:{label:"异步加载数据",type:"select",component:{dataSource:[{label:"1",value:1},{label:"2",value:2}]}}}}),o=e("");o.value=JSON.stringify(r.value,null,4);const u=e("");v(()=>{try{r.value=JSON.parse(o.value)}catch(i){u.value=JSON.stringify(i)}});const a=e({field:"1",test:"测试",asyncData:1});return(i,t)=>(d(),y(h,null,[S,p(m,{value:o.value,"onUpdate:value":t[0]||(t[0]=l=>o.value=l),prepend:"组件配置"},null,8,["value"]),p(m,{value:JSON.stringify(a.value,null,4),prepend:"表单数据",height:80,disabled:""},null,8,["value"]),p(g(f),{layout:r.value.layout,properties:r.value.properties,formData:a.value,"onUpdate:formData":t[1]||(t[1]=l=>a.value=l),ref_key:"form",ref:n},null,8,["layout","properties","formData"])],64))}});export{it as default};
