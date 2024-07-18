const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HorizontalSplitLayout-CYh167LJ.js","assets/@vue-DmVhU8xE.js","assets/LayoutOpt-BBIP0N3w.js","assets/index-CzmVDmdz.js","assets/pinia-C_jLcksF.js","assets/axios-B4uVmeYG.js","assets/js-cookie-Cz0CWeBA.js","assets/ant-design-vue-DGPmw3tN.js","assets/@babel-BiFW4_mA.js","assets/@ant-design-CHQs8cUc.js","assets/@ctrl-DOFZgDuz.js","assets/lodash-es-PU94eZQX.js","assets/resize-observer-polyfill-B1PUzC5B.js","assets/dayjs-X-x4l2Bb.js","assets/throttle-debounce-CUWDS_la.js","assets/async-validator-DKvM95Vc.js","assets/scroll-into-view-if-needed-SxpMpKWN.js","assets/compute-scroll-into-view-1gs_hJI2.js","assets/vue-types-C5fUfLeo.js","assets/dom-align-CRCehRfe.js","assets/@emotion-BtrR-yrm.js","assets/stylis-DsJDcYJc.js","assets/@vueuse-CvnCfVh1.js","assets/vue-router-XjRCv15Q.js","assets/uuid-CQkTLCs1.js","assets/vue-codemirror-CBA9LlYn.js","assets/codemirror-DqN-1UAR.js","assets/@codemirror-BQbZevoh.js","assets/@lezer-CciglqRQ.js","assets/crelt-C8TCjufn.js","assets/style-mod-Bc2inJdb.js","assets/w3c-keyname-Vcq4gwWv.js","assets/echarts-DetEu2Tg.js","assets/tslib-BDyQ-Jie.js","assets/zrender-CDo53BfZ.js","assets/index-CK5iRhYk.css","assets/normalize-DxkFTwjz.css","assets/LayoutOpt-BqpBZDVB.css","assets/HorizontalSplitLayout-DMLuw81d.css","assets/VerticalStackLayout-J49N3EwS.js","assets/VerticalStackLayout-DwwDNBKV.css"])))=>i.map(i=>d[i]);
import{u as h,_ as f}from"./index-CzmVDmdz.js";import{s as v}from"./pinia-C_jLcksF.js";import{S as u}from"./SchemaForm-DwqqdS_r.js";import{c as V,d as z,e as T}from"./ant-design-vue-DGPmw3tN.js";import{d as k,r as _,R as y,S as A,c as o,a3 as p,J as d,u as t,F as B,m as D,ab as b,a2 as g,ac as E}from"./@vue-DmVhU8xE.js";/* empty css                      */import"./axios-B4uVmeYG.js";import"./js-cookie-Cz0CWeBA.js";import"./@vueuse-CvnCfVh1.js";import"./vue-router-XjRCv15Q.js";import"./uuid-CQkTLCs1.js";import"./vue-codemirror-CBA9LlYn.js";import"./codemirror-DqN-1UAR.js";import"./@codemirror-BQbZevoh.js";import"./@lezer-CciglqRQ.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./@ant-design-CHQs8cUc.js";import"./@ctrl-DOFZgDuz.js";import"./echarts-DetEu2Tg.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CDo53BfZ.js";import"./@babel-BiFW4_mA.js";import"./lodash-es-PU94eZQX.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./dayjs-X-x4l2Bb.js";import"./throttle-debounce-CUWDS_la.js";import"./async-validator-DKvM95Vc.js";import"./scroll-into-view-if-needed-SxpMpKWN.js";import"./compute-scroll-into-view-1gs_hJI2.js";import"./vue-types-C5fUfLeo.js";import"./dom-align-CRCehRfe.js";import"./@emotion-BtrR-yrm.js";import"./stylis-DsJDcYJc.js";import"./gaius-utils-ziEu-chL.js";var w=(e=>(e.horizontal="horizontal",e.vertical="vertical",e))(w||{}),C=(e=>(e.light="light",e.dark="dark",e))(C||{});const F=k({__name:"LayoutThemeCfg",setup(e){const n=_({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"100px"}}},properties:{projectName:{type:"string",label:"项目名称"},logo:{type:"string",label:"项目logo",component:{name:"image-picker"}},loginBg:{type:"string",label:"登录背景图",component:{name:"image-picker"}},colorPrimary:{type:"string",label:"主题色",component:{name:"color-picker"}},layoutMode:{type:"radio",label:"布局方式",component:{buttonStyle:"solid",dataSource:Object.entries(w).map(([a,l])=>({value:l,label:a}))}},watermarkVisible:{type:"switch",label:"显示水印"},watermarkText:{type:"string",label:"水印文字",show:"${formData.watermarkVisible}"}}}),m=_({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"80px"}}},properties:{headerBgColor:{type:"string",label:"背景色",component:{name:"color-picker"}},headerFontColor:{type:"string",label:"字体颜色",component:{name:"color-picker"}}}}),r=_({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"80px"}}},properties:{menuTheme:{type:"radio",label:"主题",component:{buttonStyle:"solid",dataSource:Object.entries(C).map(([a,l])=>({value:l,label:a}))}}}}),c=h(),{themeCfg:i}=v(c);return(a,l)=>{const s=V;return y(),A(B,null,[o(s,null,{default:p(()=>[d("全局配置")]),_:1}),o(t(u),{layout:n.value.layout,properties:n.value.properties,"form-data":t(i)},null,8,["layout","properties","form-data"]),o(s,null,{default:p(()=>[d("顶栏配置")]),_:1}),o(t(u),{layout:m.value.layout,properties:m.value.properties,"form-data":t(i)},null,8,["layout","properties","form-data"]),o(s,null,{default:p(()=>[d("菜单配置")]),_:1}),o(t(u),{layout:r.value.layout,properties:r.value.properties,"form-data":t(i)},null,8,["layout","properties","form-data"])],64)}}}),bt=k({__name:"LayoutView",setup(e){const n=h(),{isConfigVisible:m,themeCfg:r}=v(n),{onCloseConfigDrawer:c,startUp:i}=n,a=D(()=>l[r.value.layoutMode]),l={horizontal:b(()=>f(()=>import("./HorizontalSplitLayout-CYh167LJ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]))),vertical:b(()=>f(()=>import("./VerticalStackLayout-J49N3EwS.js"),__vite__mapDeps([39,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,40])))};return i(),(s,I)=>{const S=T,x=z;return y(),g(x,{content:t(r).watermarkText,zIndex:t(r).watermarkVisible?9:-1},{default:p(()=>[(y(),g(E(a.value))),o(S,{width:300,placement:"right",open:t(m),onClose:t(c),closable:!1,bodyStyle:{padding:"0 12px"}},{default:p(()=>[o(F)]),_:1},8,["open","onClose"])]),_:1},8,["content","zIndex"])}}});export{bt as default};
