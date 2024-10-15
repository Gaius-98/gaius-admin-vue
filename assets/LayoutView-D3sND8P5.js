function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HorizontalSplitLayout-BUtZQk9N.js","assets/.pnpm-DReGQEe3.js","assets/.pnpm-B8XvGNo-.css","assets/LayoutOpt-CgL1yH-W.js","assets/index-C5r9f3T2.js","assets/index-B8h4hpBr.css","assets/LayoutOpt-CpOsLSzg.css","assets/HorizontalSplitLayout-BR_tAihm.css","assets/VerticalStackLayout-HvHKkKXF.js","assets/VerticalStackLayout-DvKkt5fo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{u as k,i as E,a as g}from"./index-C5r9f3T2.js";import{g as w,r as _,s as x,o as f,q as L,l as t,w as p,J as d,j as o,F as j,K as D,L as v,G as C,i as S,M as F,B as O,N as P}from"./.pnpm-DReGQEe3.js";import{S as y}from"./SchemaForm-B_GrrUKt.js";var T=(e=>(e.horizontal="horizontal",e.vertical="vertical",e))(T||{}),z=(e=>(e.light="light",e.dark="dark",e))(z||{});const I=w({__name:"LayoutThemeCfg",setup(e){const r=_({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"100px"}}},properties:{colorPrimary:{type:"string",label:"主题色",component:{name:"color-picker"}},layoutMode:{type:"radio",label:"布局方式",component:{buttonStyle:"solid",dataSource:Object.entries(T).map(([a,l])=>({value:l,label:a}))}}}}),u=_({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"80px"}}},properties:{headerBgColor:{type:"string",label:"背景色",component:{name:"color-picker"}},headerFontColor:{type:"string",label:"字体颜色",component:{name:"color-picker"}}}}),i=_({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"80px"}}},properties:{menuTheme:{type:"radio",label:"主题",component:{buttonStyle:"solid",dataSource:Object.entries(z).map(([a,l])=>({value:l,label:a}))}}}}),c=k(),{themeCfg:n}=x(c);return(a,l)=>{const s=D;return f(),L(j,null,[t(s,null,{default:p(()=>[d("主题配置")]),_:1}),t(o(y),{layout:r.value.layout,properties:r.value.properties,"form-data":o(n)},null,8,["layout","properties","form-data"]),t(s,null,{default:p(()=>[d("顶栏配置")]),_:1}),t(o(y),{layout:u.value.layout,properties:u.value.properties,"form-data":o(n)},null,8,["layout","properties","form-data"]),t(s,null,{default:p(()=>[d("菜单配置")]),_:1}),t(o(y),{layout:i.value.layout,properties:i.value.properties,"form-data":o(n)},null,8,["layout","properties","form-data"])],64)}}}),$=w({__name:"LayoutView",setup(e){const r=k(),{isConfigVisible:u,themeCfg:i,systemSetting:c,userInfo:n}=x(r),{onCloseConfigDrawer:a,startUp:l}=r,s=v(()=>V[i.value.layoutMode]),A=v(()=>{const{projectWatermark:h}=c.value,{username:b,name:m}=n.value;return E(h)?`${b}(${m})`:""}),V={horizontal:C(()=>g(()=>import("./HorizontalSplitLayout-BUtZQk9N.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),vertical:C(()=>g(()=>import("./VerticalStackLayout-HvHKkKXF.js"),__vite__mapDeps([8,1,2,3,4,5,6,9])))};return l(),(h,b)=>{const m=P,B=F;return f(),S(B,{content:A.value},{default:p(()=>[(f(),S(O(s.value))),t(m,{width:300,placement:"right",open:o(u),onClose:o(a),closable:!1,bodyStyle:{padding:"0 12px"}},{default:p(()=>[t(I)]),_:1},8,["open","onClose"])]),_:1},8,["content"])}}});export{$ as default};
