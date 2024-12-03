function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HorizontalSplitLayout-dYEeVC8O.js","assets/.pnpm-CWzuy1aI.js","assets/.pnpm-DxkFTwjz.css","assets/LayoutOpt-D4AoXO36.js","assets/index-Cfdjy00A.js","assets/index-BL6Yr9Wm.css","assets/LayoutOpt-qYpxqwl0.css","assets/HorizontalSplitLayout-XuvMTpnk.css","assets/VerticalStackLayout-H1KWEu2k.js","assets/VerticalStackLayout-CGIqMD1j.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{g as _,s as h,u as A,i as M,a as $}from"./index-Cfdjy00A.js";import{t as W,P as H,r as P,Q as K,E as c,R as Q,U as X,V as Y,W as G,X as L,Y as J,$ as Z,a0 as I,a1 as x,a2 as D,a3 as k,a4 as ee,a5 as ne,g as R,s as B,o as V,q as te,l as f,w as E,a6 as j,i as C,F as oe,a7 as ae,a8 as N,h as T,a9 as se,B as le,H as y,aa as re}from"./.pnpm-CWzuy1aI.js";var U=(n=>(n.horizontal="horizontal",n.vertical="vertical",n))(U||{}),q=(n=>(n.light="light",n.dark="dark",n))(q||{});const ue=n=>{const e=/\$\{([^}]+)\}/g,l=n.match(e);return l?l.map(o=>{const r=o.trim().replace(/formData./g,"");return r.substring(2,r.length-1)}):[]},ie=(n,e)=>{const l=/\$\{([^}]+)\}/g;return n.replace(l,(r,a)=>{const t=a.trim();return _({formData:e},t)})},z=(n,e)=>{const l=ie(n,e);return new Function(`return ${l}`)()},ce=(n,e,l,o,r)=>{let a;switch(l){case"string":a=c(L,{...r,value:_(n,e),onChange:t=>{h(n,e,t.target.value),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:t.target.value})}});break;case"textarea":a=c(ne,{...r,value:_(n,e),onChange:t=>{h(n,e,t.target.value),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:t.target.value})}});break;case"select":a=c(ee,{...r,options:o.options[e]||[],value:_(n,e),onChange:t=>{h(n,e,t),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:t})}});break;case"number":a=c(k,{...r,value:_(n,e),onChange:t=>{h(n,e,t),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:t})}});break;case"date":a=c(D,{...r,value:_(n,e),onChange:t=>{h(n,e,t),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:t})}});break;case"tree":a=c(x,{...r,options:o.options[e]||[],value:_(n,e),onChange:t=>{h(n,e,t),o.onChange({formData:n,field:e,value:t})}});break;case"radio":a=c(I,{...r,value:_(n,e),onChange:t=>{h(n,e,t.target.value),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:t.target.value})}},{default:()=>(o.options[e]||[]).map(t=>c(Z,{value:t.value,key:t.value},{default:()=>t.label}))});break;case"switch":a=c(J,{checked:_(n,e),onChange(t){h(n,e,t),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:t})}});break;default:a=c(L,{...r,value:_(n,e),onChange:t=>{h(n,e,t.target.value),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:t.target.value})}});break}return a},pe=(n,e,l,o)=>{const{type:r,label:a,component:t,rules:p,tooltip:b}=l;let g;if(t!=null&&t.name){const{name:v}=t,S=X(t);if(Reflect.deleteProperty(S,"onChange"),!o.sfProvideEL[v])throw new Error(`${v} is not registered,provide('sfProvideEL','${v}',Component)`);g=c(o.sfProvideEL[v],{...S,formData:n,value:_(n,e),onChange:m=>{if(n[e]=m,h(n,e,m),t.onChange)try{t.onChange(m,n,e)}catch(d){throw new Error(d)}}})}else g=ce(n,e,r,o,t);return o.visibleInfo[e]&&c(Y,{label:a,name:e,rules:p,tooltip:b},{default:()=>[g]})},F={name:"SchemaForm",props:{layout:{type:Object},properties:{type:Object},formData:{type:Object,required:!0}},setup(n){const{layout:e,properties:l,formData:o}=W(n),r=H("sfProvideEL"),a=P({}),t=Object.entries(l.value).filter(([,s])=>{var u,i;return((u=s==null?void 0:s.component)==null?void 0:u.dataSource)||((i=s==null?void 0:s.component)==null?void 0:i.asyncData)}),p=async(s,u)=>{const{dataSource:i,asyncData:w}=u.component;i?a.value[s]=i:a.value[s]=await w(o.value,s)};t.map(async([s,u])=>{await p(s,u)});const b=s=>{const[u,i]=Object.entries(l.value).find(([w])=>s==w);i&&p(u,i)},g=new K,v=s=>{var w,O;const{field:u}=s,i=(O=(w=l.value[u])==null?void 0:w.component)==null?void 0:O.onChange;i&&i(s)},S=G(),m=()=>{Object.entries(l.value).map(([s,u])=>{if(typeof u.show>"u")d.value[s]=!0;else if(typeof u.show=="boolean")d.value[s]=u.show;else if(typeof u.show=="string"){const i=u.show;d.value[s]=z(i,o.value),ue(i).map(O=>{g.onSubscribe(O,()=>{d.value[s]=z(i,o.value)})})}})},d=P({});return m(),{layout:e,properties:l,refreshOption:b,formData:o,options:a,visibleInfo:d,pubSub:g,sfProvideEL:r,onChange:v,expose:S}},render:n=>c(Q,{...n.layout},{default:()=>[...Object.entries(n.properties).map(([e,l])=>pe(n.formData,e,l,n))]})},de=R({__name:"LayoutThemeCfg",setup(n){const e=P({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"100px"}}},properties:{colorPrimary:{type:"string",label:"主题色",component:{name:"color-picker"}},layoutMode:{type:"radio",label:"布局方式",component:{buttonStyle:"solid",dataSource:Object.entries(U).map(([t,p])=>({value:p,label:t}))}}}}),l=P({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"80px"}}},properties:{headerBgColor:{type:"string",label:"背景色",component:{name:"color-picker"}},headerFontColor:{type:"string",label:"字体颜色",component:{name:"color-picker"}}}}),o=P({layout:{labelAlign:"left",layout:"horizontal",labelCol:{style:{width:"80px"}}},properties:{menuTheme:{type:"radio",label:"主题",component:{buttonStyle:"solid",dataSource:Object.entries(q).map(([t,p])=>({value:p,label:t}))}}}}),r=A(),{themeCfg:a}=B(r);return(t,p)=>{const b=ae;return V(),te(oe,null,[f(b,null,{default:E(()=>[j("主题配置")]),_:1}),f(C(F),{layout:e.value.layout,properties:e.value.properties,"form-data":C(a)},null,8,["layout","properties","form-data"]),f(b,null,{default:E(()=>[j("顶栏配置")]),_:1}),f(C(F),{layout:l.value.layout,properties:l.value.properties,"form-data":C(a)},null,8,["layout","properties","form-data"]),f(b,null,{default:E(()=>[j("菜单配置")]),_:1}),f(C(F),{layout:o.value.layout,properties:o.value.properties,"form-data":C(a)},null,8,["layout","properties","form-data"])],64)}}}),be=R({__name:"LayoutView",setup(n){const e=A(),{isConfigVisible:l,themeCfg:o,systemSetting:r,userInfo:a}=B(e),{onCloseConfigDrawer:t,startUp:p}=e,b=N(()=>v[o.value.layoutMode]),g=N(()=>{const{projectWatermark:S,projectName:m}=r.value,{username:d}=a.value;return M(S)?`${m}(${d})`:""}),v={horizontal:y(()=>$(()=>import("./HorizontalSplitLayout-dYEeVC8O.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),vertical:y(()=>$(()=>import("./VerticalStackLayout-H1KWEu2k.js"),__vite__mapDeps([8,1,2,3,4,5,6,9])))};return p(),(S,m)=>{const d=re,s=se;return V(),T(s,{content:g.value},{default:E(()=>[(V(),T(le(b.value))),f(d,{width:300,placement:"right",open:C(l),onClose:C(t),closable:!1,bodyStyle:{padding:"0 12px"}},{default:E(()=>[f(de)]),_:1},8,["open","onClose"])]),_:1},8,["content"])}}});export{be as default};