import{j as _e,m as ve,_ as C,d as $,g as u,u as F,r as be,q as ne,l as ae,p as xe,s as M,w as P,b as Se,A as Ce,e as q,i as Z,P as x,b1 as J,bI as H,bJ as $e,D as K,E as W,bK as Q,a0 as ke,F as j,G as we,ax as Le,I as g,az as Y,aC as re,M as se,h as Be,v as He,V as S,O as w,a2 as Te,a3 as Ie,X as ie,aF as Oe,H as b,N as L,bu as Re}from"./index-CdY1EXP5.js";import{S as le,b as ze,M as Ee}from"./index-DWa260Xh.js";import{i as De,B as Me}from"./index-BtP1Z3dV.js";import{i as Ae}from"./LayoutView-BGwXOpgJ.js";import{B as Ne,i as Pe,S as Fe,G as Ke}from"./index-BxN_-GyF.js";import{R as ee}from"./index-DviIdvon.js";import{L as te}from"./FolderOutlined-CiLZEO2w.js";import{D as We,a as je}from"./index-OtmSzTzE.js";import{A as Ge}from"./index-CgNflkXV.js";import{_ as Ve}from"./index-BTufbVqR.js";const Ue=e=>{const{componentCls:a,colorBgContainer:o,colorBgBody:i,colorText:s}=e;return{[`${a}-sider-light`]:{background:o,[`${a}-sider-trigger`]:{color:s,background:o},[`${a}-sider-zero-width-trigger`]:{color:s,background:o,border:`1px solid ${i}`,borderInlineStart:0}}}},Xe=e=>{const{antCls:a,componentCls:o,colorText:i,colorTextLightSolid:s,colorBgHeader:d,colorBgBody:c,colorBgTrigger:p,layoutHeaderHeight:m,layoutHeaderPaddingInline:y,layoutHeaderColor:_,layoutFooterPadding:t,layoutTriggerHeight:n,layoutZeroTriggerSize:l,motionDurationMid:h,motionDurationSlow:r,fontSize:v,borderRadius:f}=e;return{[o]:C(C({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:c,"&, *":{boxSizing:"border-box"},[`&${o}-has-sider`]:{flexDirection:"row",[`> ${o}, > ${o}-content`]:{width:0}},[`${o}-header, &${o}-footer`]:{flex:"0 0 auto"},[`${o}-header`]:{height:m,paddingInline:y,color:_,lineHeight:`${m}px`,background:d,[`${a}-menu`]:{lineHeight:"inherit"}},[`${o}-footer`]:{padding:t,color:i,fontSize:v,background:c},[`${o}-content`]:{flex:"auto",minHeight:0},[`${o}-sider`]:{position:"relative",minWidth:0,background:d,transition:`all ${h}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${a}-menu${a}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:n},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:n,color:s,lineHeight:`${n}px`,textAlign:"center",background:p,cursor:"pointer",transition:`all ${h}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:m,insetInlineEnd:-l,zIndex:1,width:l,height:l,color:s,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:d,borderStartStartRadius:0,borderStartEndRadius:f,borderEndEndRadius:f,borderEndStartRadius:0,cursor:"pointer",transition:`background ${r} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${r}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-l,borderStartStartRadius:f,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:f}}}}},Ue(e)),{"&-rtl":{direction:"rtl"}})}},qe=_e("Layout",e=>{const{colorText:a,controlHeightSM:o,controlHeight:i,controlHeightLG:s,marginXXS:d}=e,c=s*1.25,p=ve(e,{layoutHeaderHeight:i*2,layoutHeaderPaddingInline:c,layoutHeaderColor:a,layoutFooterPadding:`${o}px ${c}px`,layoutTriggerHeight:s+d*2,layoutZeroTriggerSize:s});return[Xe(p)]},e=>{const{colorBgLayout:a}=e;return{colorBgHeader:"#001529",colorBgBody:a,colorBgTrigger:"#002140"}}),G=()=>({prefixCls:String,hasSider:{type:Boolean,default:void 0},tagName:String});function R(e){let{suffixCls:a,tagName:o,name:i}=e;return s=>$({compatConfig:{MODE:3},name:i,props:G(),setup(c,p){let{slots:m}=p;const{prefixCls:y}=F(a,c);return()=>{const _=C(C({},c),{prefixCls:y.value,tagName:o});return u(s,_,m)}}})}const V=$({compatConfig:{MODE:3},props:G(),setup(e,a){let{slots:o}=a;return()=>u(e.tagName,{class:e.prefixCls},o)}}),Ze=$({compatConfig:{MODE:3},inheritAttrs:!1,props:G(),setup(e,a){let{slots:o,attrs:i}=a;const{prefixCls:s,direction:d}=F("",e),[c,p]=qe(s),m=be([]);ne(le,{addSider:t=>{m.value=[...m.value,t]},removeSider:t=>{m.value=m.value.filter(n=>n!==t)}});const _=ae(()=>{const{prefixCls:t,hasSider:n}=e;return{[p.value]:!0,[`${t}`]:!0,[`${t}-has-sider`]:typeof n=="boolean"?n:m.value.length>0,[`${t}-rtl`]:d.value==="rtl"}});return()=>{const{tagName:t}=e;return c(u(t,C(C({},i),{class:[_.value,i.class]}),o))}}}),A=R({suffixCls:"layout",tagName:"section",name:"ALayout"})(Ze),T=R({suffixCls:"layout-header",tagName:"header",name:"ALayoutHeader"})(V),N=R({suffixCls:"layout-footer",tagName:"footer",name:"ALayoutFooter"})(V),I=R({suffixCls:"layout-content",tagName:"main",name:"ALayoutContent"})(V),oe={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px",xxxl:"1999.98px"},Je=()=>({prefixCls:String,collapsible:{type:Boolean,default:void 0},collapsed:{type:Boolean,default:void 0},defaultCollapsed:{type:Boolean,default:void 0},reverseArrow:{type:Boolean,default:void 0},zeroWidthTriggerStyle:{type:Object,default:void 0},trigger:x.any,width:x.oneOfType([x.number,x.string]),collapsedWidth:x.oneOfType([x.number,x.string]),breakpoint:x.oneOf(J("xs","sm","md","lg","xl","xxl","xxxl")),theme:x.oneOf(J("light","dark")).def("dark"),onBreakpoint:Function,onCollapse:Function}),Qe=(()=>{let e=0;return function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,`${a}${e}`}})(),O=$({compatConfig:{MODE:3},name:"ALayoutSider",inheritAttrs:!1,props:De(Je(),{collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80}),emits:["breakpoint","update:collapsed","collapse"],setup(e,a){let{emit:o,attrs:i,slots:s}=a;const{prefixCls:d}=F("layout-sider",e),c=xe(le,void 0),p=M(!!(e.collapsed!==void 0?e.collapsed:e.defaultCollapsed)),m=M(!1);P(()=>e.collapsed,()=>{p.value=!!e.collapsed}),ne(ze,p);const y=(r,v)=>{e.collapsed===void 0&&(p.value=r),o("update:collapsed",r),o("collapse",r,v)},_=M(r=>{m.value=r.matches,o("breakpoint",r.matches),p.value!==r.matches&&y(r.matches,"responsive")});let t;function n(r){return _.value(r)}const l=Qe("ant-sider-");c&&c.addSider(l),Se(()=>{P(()=>e.breakpoint,()=>{try{t==null||t.removeEventListener("change",n)}catch{t==null||t.removeListener(n)}if(typeof window<"u"){const{matchMedia:r}=window;if(r&&e.breakpoint&&e.breakpoint in oe){t=r(`(max-width: ${oe[e.breakpoint]})`);try{t.addEventListener("change",n)}catch{t.addListener(n)}n(t)}}},{immediate:!0})}),Ce(()=>{try{t==null||t.removeEventListener("change",n)}catch{t==null||t.removeListener(n)}c&&c.removeSider(l)});const h=()=>{y(!p.value,"clickTrigger")};return()=>{var r,v;const f=d.value,{collapsedWidth:U,width:de,reverseArrow:z,zeroWidthTriggerStyle:ce,trigger:B=(r=s.trigger)===null||r===void 0?void 0:r.call(s),collapsible:X,theme:ue}=e,E=p.value?U:de,k=Ae(E)?`${E}px`:String(E),D=parseFloat(String(U||0))===0?u("span",{onClick:h,class:q(`${f}-zero-width-trigger`,`${f}-zero-width-trigger-${z?"right":"left"}`),style:ce},[B||u(Ne,null,null)]):null,pe={expanded:z?u(ee,null,null):u(te,null,null),collapsed:z?u(te,null,null):u(ee,null,null)},ge=p.value?"collapsed":"expanded",me=pe[ge],fe=B!==null?D||u("div",{class:`${f}-trigger`,onClick:h,style:{width:k}},[B||me]):null,he=[i.style,{flex:`0 0 ${k}`,maxWidth:k,minWidth:k,width:k}],ye=q(f,`${f}-${ue}`,{[`${f}-collapsed`]:!!p.value,[`${f}-has-trigger`]:X&&B!==null&&!D,[`${f}-below`]:!!m.value,[`${f}-zero-width`]:parseFloat(k)===0},i.class);return u("aside",Z(Z({},i),{},{class:ye,style:he}),[u("div",{class:`${f}-children`},[(v=s.default)===null||v===void 0?void 0:v.call(s)]),X||m.value&&D?fe:null])}}}),bt=T,xt=O,St=I,Ct=C(A,{Header:T,Footer:N,Content:I,Sider:O,install:e=>(e.component(A.name,A),e.component(T.name,T),e.component(N.name,N),e.component(O.name,O),e.component(I.name,I),e)}),Ye=e=>{const{type:a,address:o,openType:i}=e;switch(a){case"front":i=="_self"?H.push({path:o}):i=="_blank"&&H.push({path:"/link",query:{orgUrl:o}});break;case"page":break;case"form":H.push({path:"/preview/form",query:{id:o}});break;case"table":H.push({path:"/preview/table",query:{id:o}});break}},$t=$({__name:"LayoutMenu",setup(e){const a=$e(),o=K(),{menuTree:i,themeCfg:s}=W(o),d=Q("gaius-admin-menu-selected",[],sessionStorage),c=Q("gaius-admin-menu-open",[],sessionStorage),p=ae(()=>m(i.value)),m=t=>t.map(n=>{let l={key:(n==null?void 0:n.id)||"",...n};return l.icon&&(l.icon=ke(Pe[l.icon])),n.children&&(l.children=m(n.children)),l}),y=(t,n)=>{for(let l=0;l<n.length;l++){const h=n[l];if(h.address===t)return h.id;if(h.children){const r=y(t,h.children);if(r)return r}}};P(()=>a.path,()=>{const t=y(a.path,i.value);t&&(d.value=[t])},{immediate:!0});const _=({item:t})=>{const{originItemValue:n}=t;Ye(n)};return(t,n)=>{const l=Ee;return j(),we(l,Le(t.$attrs,{items:p.value,theme:g(s).menuTheme,onSelect:_,openKeys:g(c),"onUpdate:openKeys":n[0]||(n[0]=h=>Y(c)?c.value=h:null),selectedKeys:g(d),"onUpdate:selectedKeys":n[1]||(n[1]=h=>Y(d)?d.value=h:null)}),null,16,["items","theme","openKeys","selectedKeys"])}}}),et="/assets/logo-CR07U5_l.png",tt=e=>(Te("data-v-2ddd3707"),e=e(),Ie(),e),ot={class:"logo"},nt=tt(()=>S("img",{src:et,alt:""},null,-1)),at=$({__name:"LayoutLogo",setup(e){re(s=>({"5c5b4ff2":g(o).headerFontColor,a4719ade:g(o).headerBgColor}));const a=K(),{themeCfg:o,collapsed:i}=W(a);return(s,d)=>(j(),se("div",ot,[nt,Be(S("span",{class:"title"},w(g(o).projectName),513),[[He,!g(i)]])]))}}),kt=ie(at,[["__scopeId","data-v-2ddd3707"]]),rt={class:"layout-opt"},st={class:"layout-opt-userinfo"},it=["src"],lt={class:"layout-opt-userinfo-name"},dt=$({__name:"LayoutOpt",setup(e){re(_=>({"3be1782c":g(s).headerFontColor,"18fa17f6":g(s).headerBgColor}));const a=Oe(),o=K(),{local:i,themeCfg:s,userInfo:d}=W(o),{onOpenConfigDrawer:c,onToggleLocal:p}=o,m=()=>{window.open("https://github.com/Gaius-98/gaius-admin","_blank")},y=()=>{Re.remove(),a.push({path:"/login"})};return(_,t)=>{const n=Me,l=We,h=je,r=Ge,v=Ve;return j(),se("div",rt,[S("div",{class:"layout-opt-i18n",onClick:t[0]||(t[0]=(...f)=>g(p)&&g(p)(...f))},[u(n,{ghost:"",size:"small"},{default:b(()=>[L(w(g(i)=="en"?"中文":"English"),1)]),_:1})]),S("div",{class:"layout-opt-theme",onClick:t[1]||(t[1]=(...f)=>g(c)&&g(c)(...f))},[u(g(Fe))]),S("div",{class:"layout-opt-github",onClick:m},[u(g(Ke))]),S("div",st,[u(v,{placement:"bottomRight"},{content:b(()=>[u(n,{onClick:y,block:""},{default:b(()=>[L(" 退出 ")]),_:1})]),title:b(()=>[u(h,{title:"用户信息",size:"small",column:1,style:{width:"200px"}},{default:b(()=>[u(l,{label:"姓名"},{default:b(()=>[L(w(g(d).name),1)]),_:1}),u(l,{label:"用户名"},{default:b(()=>[L(w(g(d).username),1)]),_:1}),u(l,{label:"邮箱"},{default:b(()=>[L(w(g(d).email),1)]),_:1})]),_:1})]),default:b(()=>[u(r,null,{icon:b(()=>[S("img",{src:g(d).avatar||"",alt:""},null,8,it)]),_:1}),S("span",lt,w(g(d).name),1)]),_:1})])])}}}),wt=ie(dt,[["__scopeId","data-v-59d51c61"]]);export{kt as L,$t as _,wt as a,xt as b,bt as c,St as d,Ct as e};
