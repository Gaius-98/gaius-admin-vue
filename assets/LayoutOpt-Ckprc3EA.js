import{k as Oe,m as Te,_ as L,d as O,g as h,u as X,r as Z,t as ge,p as me,j as Be,q as He,s as R,w as D,b as he,X as Ae,e as ne,i as re,P as C,a_ as ae,K as m,n as ye,bK as Ee,bL as Ne,bM as De,bk as Ie,bN as se,bO as ze,G as q,H as Y,Y as Fe,D as Q,I as Me,a0 as Re,aA as ie,aD as ve,E as be,h as We,v as Pe,V as k,U as A,a5 as je,a6 as Ke,F as Se,aF as Ve,J as x,S as N,bv as Ge}from"./index-5uVo7gFH.js";import{S as _e,c as Je,M as Ue,_ as Xe}from"./index-C_zJiHiZ.js";import{i as Ze}from"./LayoutView-B3UJf114.js";import{B as qe,i as Ye,S as Qe,G as et}from"./index-DD9OwVaF.js";import{R as le}from"./index-M8iWskMh.js";import{L as ue}from"./FolderOutlined-YWqvTW0i.js";import{B as tt}from"./index-CpuAoWon.js";import{D as ot,a as nt}from"./index-CRRvRRti.js";import{A as rt}from"./index-OCsTzSiT.js";const at=e=>{const{componentCls:o,colorBgContainer:t,colorBgBody:r,colorText:s}=e;return{[`${o}-sider-light`]:{background:t,[`${o}-sider-trigger`]:{color:s,background:t},[`${o}-sider-zero-width-trigger`]:{color:s,background:t,border:`1px solid ${r}`,borderInlineStart:0}}}},st=e=>{const{antCls:o,componentCls:t,colorText:r,colorTextLightSolid:s,colorBgHeader:u,colorBgBody:d,colorBgTrigger:p,layoutHeaderHeight:f,layoutHeaderPaddingInline:b,layoutHeaderColor:y,layoutFooterPadding:n,layoutTriggerHeight:a,layoutZeroTriggerSize:c,motionDurationMid:v,motionDurationSlow:i,fontSize:_,borderRadius:g}=e;return{[t]:L(L({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:d,"&, *":{boxSizing:"border-box"},[`&${t}-has-sider`]:{flexDirection:"row",[`> ${t}, > ${t}-content`]:{width:0}},[`${t}-header, &${t}-footer`]:{flex:"0 0 auto"},[`${t}-header`]:{height:f,paddingInline:b,color:y,lineHeight:`${f}px`,background:u,[`${o}-menu`]:{lineHeight:"inherit"}},[`${t}-footer`]:{padding:n,color:r,fontSize:_,background:d},[`${t}-content`]:{flex:"auto",minHeight:0},[`${t}-sider`]:{position:"relative",minWidth:0,background:u,transition:`all ${v}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${o}-menu${o}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:a},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:a,color:s,lineHeight:`${a}px`,textAlign:"center",background:p,cursor:"pointer",transition:`all ${v}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:f,insetInlineEnd:-c,zIndex:1,width:c,height:c,color:s,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:u,borderStartStartRadius:0,borderStartEndRadius:g,borderEndEndRadius:g,borderEndStartRadius:0,cursor:"pointer",transition:`background ${i} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${i}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-c,borderStartStartRadius:g,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:g}}}}},at(e)),{"&-rtl":{direction:"rtl"}})}},it=Oe("Layout",e=>{const{colorText:o,controlHeightSM:t,controlHeight:r,controlHeightLG:s,marginXXS:u}=e,d=s*1.25,p=Te(e,{layoutHeaderHeight:r*2,layoutHeaderPaddingInline:d,layoutHeaderColor:o,layoutFooterPadding:`${t}px ${d}px`,layoutTriggerHeight:s+u*2,layoutZeroTriggerSize:s});return[st(p)]},e=>{const{colorBgLayout:o}=e;return{colorBgHeader:"#001529",colorBgBody:o,colorBgTrigger:"#002140"}}),ee=()=>({prefixCls:String,hasSider:{type:Boolean,default:void 0},tagName:String});function K(e){let{suffixCls:o,tagName:t,name:r}=e;return s=>O({compatConfig:{MODE:3},name:r,props:ee(),setup(d,p){let{slots:f}=p;const{prefixCls:b}=X(o,d);return()=>{const y=L(L({},d),{prefixCls:b.value,tagName:t});return h(s,y,f)}}})}const te=O({compatConfig:{MODE:3},props:ee(),setup(e,o){let{slots:t}=o;return()=>h(e.tagName,{class:e.prefixCls},t)}}),lt=O({compatConfig:{MODE:3},inheritAttrs:!1,props:ee(),setup(e,o){let{slots:t,attrs:r}=o;const{prefixCls:s,direction:u}=X("",e),[d,p]=it(s),f=Z([]);ge(_e,{addSider:n=>{f.value=[...f.value,n]},removeSider:n=>{f.value=f.value.filter(a=>a!==n)}});const y=me(()=>{const{prefixCls:n,hasSider:a}=e;return{[p.value]:!0,[`${n}`]:!0,[`${n}-has-sider`]:typeof a=="boolean"?a:f.value.length>0,[`${n}-rtl`]:u.value==="rtl"}});return()=>{const{tagName:n}=e;return d(h(n,L(L({},r),{class:[y.value,r.class]}),t))}}}),G=K({suffixCls:"layout",tagName:"section",name:"ALayout"})(lt),W=K({suffixCls:"layout-header",tagName:"header",name:"ALayoutHeader"})(te),J=K({suffixCls:"layout-footer",tagName:"footer",name:"ALayoutFooter"})(te),P=K({suffixCls:"layout-content",tagName:"main",name:"ALayoutContent"})(te),ce={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px",xxxl:"1999.98px"},ut=()=>({prefixCls:String,collapsible:{type:Boolean,default:void 0},collapsed:{type:Boolean,default:void 0},defaultCollapsed:{type:Boolean,default:void 0},reverseArrow:{type:Boolean,default:void 0},zeroWidthTriggerStyle:{type:Object,default:void 0},trigger:C.any,width:C.oneOfType([C.number,C.string]),collapsedWidth:C.oneOfType([C.number,C.string]),breakpoint:C.oneOf(ae("xs","sm","md","lg","xl","xxl","xxxl")),theme:C.oneOf(ae("light","dark")).def("dark"),onBreakpoint:Function,onCollapse:Function}),ct=(()=>{let e=0;return function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,`${o}${e}`}})(),j=O({compatConfig:{MODE:3},name:"ALayoutSider",inheritAttrs:!1,props:Be(ut(),{collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80}),emits:["breakpoint","update:collapsed","collapse"],setup(e,o){let{emit:t,attrs:r,slots:s}=o;const{prefixCls:u}=X("layout-sider",e),d=He(_e,void 0),p=R(!!(e.collapsed!==void 0?e.collapsed:e.defaultCollapsed)),f=R(!1);D(()=>e.collapsed,()=>{p.value=!!e.collapsed}),ge(Je,p);const b=(i,_)=>{e.collapsed===void 0&&(p.value=i),t("update:collapsed",i),t("collapse",i,_)},y=R(i=>{f.value=i.matches,t("breakpoint",i.matches),p.value!==i.matches&&b(i.matches,"responsive")});let n;function a(i){return y.value(i)}const c=ct("ant-sider-");d&&d.addSider(c),he(()=>{D(()=>e.breakpoint,()=>{try{n==null||n.removeEventListener("change",a)}catch{n==null||n.removeListener(a)}if(typeof window<"u"){const{matchMedia:i}=window;if(i&&e.breakpoint&&e.breakpoint in ce){n=i(`(max-width: ${ce[e.breakpoint]})`);try{n.addEventListener("change",a)}catch{n.addListener(a)}a(n)}}},{immediate:!0})}),Ae(()=>{try{n==null||n.removeEventListener("change",a)}catch{n==null||n.removeListener(a)}d&&d.removeSider(c)});const v=()=>{b(!p.value,"clickTrigger")};return()=>{var i,_;const g=u.value,{collapsedWidth:$,width:V,reverseArrow:T,zeroWidthTriggerStyle:I,trigger:B=(i=s.trigger)===null||i===void 0?void 0:i.call(s),collapsible:z,theme:H}=e,E=p.value?$:V,l=Ze(E)?`${E}px`:String(E),S=parseFloat(String($||0))===0?h("span",{onClick:v,class:ne(`${g}-zero-width-trigger`,`${g}-zero-width-trigger-${T?"right":"left"}`),style:I},[B||h(qe,null,null)]):null,w={expanded:T?h(le,null,null):h(ue,null,null),collapsed:T?h(ue,null,null):h(le,null,null)},xe=p.value?"collapsed":"expanded",Ce=w[xe],$e=B!==null?S||h("div",{class:`${g}-trigger`,onClick:v,style:{width:l}},[B||Ce]):null,ke=[r.style,{flex:`0 0 ${l}`,maxWidth:l,minWidth:l,width:l}],Le=ne(g,`${g}-${H}`,{[`${g}-collapsed`]:!!p.value,[`${g}-has-trigger`]:z&&B!==null&&!S,[`${g}-below`]:!!f.value,[`${g}-zero-width`]:parseFloat(l)===0},r.class);return h("aside",re(re({},r),{},{class:Le,style:ke}),[h("div",{class:`${g}-children`},[(_=s.default)===null||_===void 0?void 0:_.call(s)]),z||f.value&&S?$e:null])}}}),Ut=W,Xt=j,Zt=P,qt=L(G,{Header:W,Footer:J,Content:P,Sider:j,install:e=>(e.component(G.name,G),e.component(W.name,W),e.component(J.name,J),e.component(j.name,j),e.component(P.name,P),e)});function dt(e){return Ne()?(De(e),!0):!1}function oe(e){return typeof e=="function"?e():m(e)}const pt=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ft=Object.prototype.toString,gt=e=>ft.call(e)==="[object Object]",mt=()=>{};function ht(e,o){function t(...r){return new Promise((s,u)=>{Promise.resolve(e(()=>o.apply(this,r),{fn:o,thisArg:this,args:r})).then(s).catch(u)})}return t}const we=e=>e();function yt(e=we){const o=Z(!0);function t(){o.value=!1}function r(){o.value=!0}const s=(...u)=>{o.value&&e(...u)};return{isActive:Ee(o),pause:t,resume:r,eventFilter:s}}function vt(e){return Ie()}function bt(e,o,t={}){const{eventFilter:r=we,...s}=t;return D(e,ht(r,o),s)}function St(e,o,t={}){const{eventFilter:r,...s}=t,{eventFilter:u,pause:d,resume:p,isActive:f}=yt(r);return{stop:bt(e,o,{...s,eventFilter:u}),pause:d,resume:p,isActive:f}}function _t(e,o=!0,t){vt()?he(e,t):o?e():ye(e)}function wt(e){var o;const t=oe(e);return(o=t==null?void 0:t.$el)!=null?o:t}const U=pt?window:void 0;function de(...e){let o,t,r,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,r,s]=e,o=U):[o,t,r,s]=e,!o)return mt;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const u=[],d=()=>{u.forEach(y=>y()),u.length=0},p=(y,n,a,c)=>(y.addEventListener(n,a,c),()=>y.removeEventListener(n,a,c)),f=D(()=>[wt(o),oe(s)],([y,n])=>{if(d(),!y)return;const a=gt(n)?{...n}:n;u.push(...t.flatMap(c=>r.map(v=>p(y,c,v,a))))},{immediate:!0,flush:"post"}),b=()=>{f(),d()};return dt(b),b}const F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M="__vueuse_ssr_handlers__",xt=Ct();function Ct(){return M in F||(F[M]=F[M]||{}),F[M]}function $t(e,o){return xt[e]||o}function kt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Lt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},pe="vueuse-storage";function fe(e,o,t,r={}){var s;const{flush:u="pre",deep:d=!0,listenToStorageChanges:p=!0,writeDefaults:f=!0,mergeDefaults:b=!1,shallow:y,window:n=U,eventFilter:a,onError:c=l=>{console.error(l)},initOnMounted:v}=r,i=(y?R:Z)(typeof o=="function"?o():o);if(!t)try{t=$t("getDefaultStorage",()=>{var l;return(l=U)==null?void 0:l.localStorage})()}catch(l){c(l)}if(!t)return i;const _=oe(o),g=kt(_),$=(s=r.serializer)!=null?s:Lt[g],{pause:V,resume:T}=St(i,()=>B(i.value),{flush:u,deep:d,eventFilter:a});n&&p&&_t(()=>{de(n,"storage",H),de(n,pe,E),v&&H()}),v||H();function I(l,S){n&&n.dispatchEvent(new CustomEvent(pe,{detail:{key:e,oldValue:l,newValue:S,storageArea:t}}))}function B(l){try{const S=t.getItem(e);if(l==null)I(S,null),t.removeItem(e);else{const w=$.write(l);S!==w&&(t.setItem(e,w),I(S,w))}}catch(S){c(S)}}function z(l){const S=l?l.newValue:t.getItem(e);if(S==null)return f&&_!=null&&t.setItem(e,$.write(_)),_;if(!l&&b){const w=$.read(S);return typeof b=="function"?b(w,_):g==="object"&&!Array.isArray(w)?{..._,...w}:w}else return typeof S!="string"?S:$.read(S)}function H(l){if(!(l&&l.storageArea!==t)){if(l&&l.key==null){i.value=_;return}if(!(l&&l.key!==e)){V();try{(l==null?void 0:l.newValue)!==$.write(i.value)&&(i.value=z(l))}catch(S){c(S)}finally{l?ye(T):T()}}}}function E(l){H(l.detail)}return i}const Ot=e=>{const{type:o,address:t,openType:r}=e;switch(o){case"front":r=="_self"?se.push({path:t}):r=="_blank"&&se.push({path:"/link",query:{orgUrl:t}});break}},Yt=O({__name:"LayoutMenu",setup(e){const o=ze(),t=q(),{menuTree:r,themeCfg:s}=Y(t),u=fe("gaius-admin-menu-selected",[],sessionStorage),d=fe("gaius-admin-menu-open",[],sessionStorage),p=me(()=>f(r.value)),f=n=>n.map(a=>{let c={key:(a==null?void 0:a.id)||"",...a};return c.icon&&(c.icon=Fe(Ye[c.icon])),a.children&&(c.children=f(a.children)),c}),b=(n,a)=>{for(let c=0;c<a.length;c++){const v=a[c];if(v.address===n)return v.id;if(v.children){const i=b(n,v.children);if(i)return i}}};D(()=>o.path,()=>{const n=b(o.path,r.value);n&&(u.value=[n])},{immediate:!0});const y=({item:n})=>{const{originItemValue:a}=n;Ot(a)};return(n,a)=>{const c=Ue;return Q(),Me(c,Re(n.$attrs,{items:p.value,theme:m(s).menuTheme,onSelect:y,openKeys:m(d),"onUpdate:openKeys":a[0]||(a[0]=v=>ie(d)?d.value=v:null),selectedKeys:m(u),"onUpdate:selectedKeys":a[1]||(a[1]=v=>ie(u)?u.value=v:null)}),null,16,["items","theme","openKeys","selectedKeys"])}}}),Tt="/assets/logo-CR07U5_l.png",Bt=e=>(je("data-v-2ddd3707"),e=e(),Ke(),e),Ht={class:"logo"},At=Bt(()=>k("img",{src:Tt,alt:""},null,-1)),Et=O({__name:"LayoutLogo",setup(e){ve(s=>({"5c5b4ff2":m(t).headerFontColor,a4719ade:m(t).headerBgColor}));const o=q(),{themeCfg:t,collapsed:r}=Y(o);return(s,u)=>(Q(),be("div",Ht,[At,We(k("span",{class:"title"},A(m(t).projectName),513),[[Pe,!m(r)]])]))}}),Qt=Se(Et,[["__scopeId","data-v-2ddd3707"]]),Nt={class:"layout-opt"},Dt={class:"layout-opt-userinfo"},It=["src"],zt={class:"layout-opt-userinfo-name"},Ft=O({__name:"LayoutOpt",setup(e){ve(y=>({"3be1782c":m(s).headerFontColor,"18fa17f6":m(s).headerBgColor}));const o=Ve(),t=q(),{local:r,themeCfg:s,userInfo:u}=Y(t),{onOpenConfigDrawer:d,onToggleLocal:p}=t,f=()=>{window.open("https://github.com/Gaius-98/gaius-admin","_blank")},b=()=>{Ge.remove(),o.push({path:"/login"})};return(y,n)=>{const a=tt,c=ot,v=nt,i=rt,_=Xe;return Q(),be("div",Nt,[k("div",{class:"layout-opt-i18n",onClick:n[0]||(n[0]=(...g)=>m(p)&&m(p)(...g))},[h(a,{ghost:"",size:"small"},{default:x(()=>[N(A(m(r)=="en"?"中文":"English"),1)]),_:1})]),k("div",{class:"layout-opt-theme",onClick:n[1]||(n[1]=(...g)=>m(d)&&m(d)(...g))},[h(m(Qe))]),k("div",{class:"layout-opt-github",onClick:f},[h(m(et))]),k("div",Dt,[h(_,{placement:"bottomRight"},{content:x(()=>[h(a,{onClick:b,block:""},{default:x(()=>[N(" 退出 ")]),_:1})]),title:x(()=>[h(v,{title:"用户信息",size:"small",column:1,style:{width:"200px"}},{default:x(()=>[h(c,{label:"姓名"},{default:x(()=>[N(A(m(u).name),1)]),_:1}),h(c,{label:"用户名"},{default:x(()=>[N(A(m(u).username),1)]),_:1}),h(c,{label:"邮箱"},{default:x(()=>[N(A(m(u).email),1)]),_:1})]),_:1})]),default:x(()=>[h(i,null,{icon:x(()=>[k("img",{src:m(u).avatar||"",alt:""},null,8,It)]),_:1}),k("span",zt,A(m(u).name),1)]),_:1})])])}}}),eo=Se(Ft,[["__scopeId","data-v-59d51c61"]]);export{Qt as L,Yt as _,eo as a,Xt as b,Ut as c,Zt as d,qt as e};
