const __vite__fileDeps=["assets/HorizontalSplitLayout-CRk3_jd1.js","assets/index-_076D9lD.js","assets/index-ghq7kpHO.css","assets/LayoutOpt-CYwMLC2s.js","assets/index-DediDgMc.js","assets/index-7w2Cp3sl.js","assets/index-B3gs7d4T.js","assets/PlusOutlined-OaagY0y8.js","assets/index-BNhViSMY.js","assets/ArrowRightOutlined-DQ2Rdp75.js","assets/SwapRightOutlined-DkVIoAKr.js","assets/index-Dki68cvG.js","assets/FolderOutlined-DXrQAxbn.js","assets/DeleteFilled-BS21_nwC.js","assets/DeleteOutlined-DmUga1mW.js","assets/DownloadOutlined-CDpeabZu.js","assets/EditOutlined-MDFp-CpF.js","assets/FileTwoTone-DWksMDV9.js","assets/PlusCircleOutlined-DC_xa18e.js","assets/SwapOutlined-By1aQJrU.js","assets/SyncOutlined-CCcJMgwm.js","assets/index-Dhs4_qce.js","assets/index-CcVHqGC9.js","assets/index-DP-F5FTu.js","assets/useBreakpoint-Bx7VNTpE.js","assets/index-DzYSeCDr.js","assets/LayoutOpt-a-_KfRB9.css","assets/SchemaForm-C1-R_EW6.js","assets/index-Ds3DYnq4.js","assets/index-Cpyo08Ep.js","assets/index-DNEV8tUT.js","assets/index-pBL7AeiE.js","assets/HorizontalSplitLayout-Bj2t9R4j.css","assets/VerticalStackLayout-DRjx8wGk.js","assets/VerticalStackLayout-DDhD1ElF.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as X,P as g,o as U,a as ue,f as Ee,d as ee,s as A,b as me,n as ae,w as G,c as Ne,e as de,g as u,T as ye,h as he,v as ge,i as E,r as re,j as Be,m as We,k as De,l as S,p as Re,u as Ve,q as He,t as be,x as we,y as le,C as Xe,z as Ye,A as Ue,B as Ge,D as Te,E as Ie,F as fe,G as ve,H as K,I as R,J as Se,K as Ke,L as Ce}from"./index-_076D9lD.js";import{S as ie}from"./SchemaForm-C1-R_EW6.js";import{_ as qe,C as Je}from"./index-pBL7AeiE.js";import{o as ze,i as pe,P as Ze,d as Qe,N as et,F as tt}from"./index-B3gs7d4T.js";import{u as ot,a as nt,t as at,d as rt}from"./index-Ds3DYnq4.js";import{K as lt}from"./index-7w2Cp3sl.js";const _e=e=>!isNaN(parseFloat(e))&&isFinite(e),Me=()=>({prefixCls:String,width:g.oneOfType([g.string,g.number]),height:g.oneOfType([g.string,g.number]),style:{type:Object,default:void 0},class:String,rootClassName:String,rootStyle:U(),placement:{type:String},wrapperClassName:String,level:{type:[String,Array]},levelMove:{type:[Number,Function,Array]},duration:String,ease:String,showMask:{type:Boolean,default:void 0},maskClosable:{type:Boolean,default:void 0},maskStyle:{type:Object,default:void 0},afterVisibleChange:Function,keyboard:{type:Boolean,default:void 0},contentWrapperStyle:ue(),autofocus:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},motion:Ee(),maskMotion:U()}),it=()=>X(X({},Me()),{forceRender:{type:Boolean,default:void 0},getContainer:g.oneOfType([g.string,g.func,g.object,g.looseBool])}),st=()=>X(X({},Me()),{getContainer:Function,getOpenCount:Function,scrollLocker:g.any,inline:Boolean});function ct(e){return Array.isArray(e)?e:[e]}const ut={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"};Object.keys(ut).filter(e=>{if(typeof document>"u")return!1;const n=document.getElementsByTagName("html")[0];return e in(n?n.style:{})})[0];const dt=!(typeof window<"u"&&window.document&&window.document.createElement);var ft=function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(l[t[i]]=e[t[i]]);return l};const ke=ee({compatConfig:{MODE:3},inheritAttrs:!1,props:st(),emits:["close","handleClick","change"],setup(e,n){let{emit:l,slots:t}=n;const i=A(),d=A(),f=A(),h=A(),b=A();let y=[];`${Number((Date.now()+Math.random()).toString().replace(".",Math.round(Math.random()*9).toString())).toString(16)}`,me(()=>{ae(()=>{var s;const{open:p,getContainer:_,showMask:I,autofocus:k}=e,x=_==null?void 0:_();j(e),p&&(x&&(x.parentNode,document.body),ae(()=>{k&&w()}),I&&((s=e.scrollLocker)===null||s===void 0||s.lock()))})}),G(()=>e.level,()=>{j(e)},{flush:"post"}),G(()=>e.open,()=>{const{open:s,getContainer:p,scrollLocker:_,showMask:I,autofocus:k}=e,x=p==null?void 0:p();x&&(x.parentNode,document.body),s?(k&&w(),I&&(_==null||_.lock())):_==null||_.unLock()},{flush:"post"}),Ne(()=>{var s;const{open:p}=e;p&&(document.body.style.touchAction=""),(s=e.scrollLocker)===null||s===void 0||s.unLock()}),G(()=>e.placement,s=>{s&&(b.value=null)});const w=()=>{var s,p;(p=(s=d.value)===null||s===void 0?void 0:s.focus)===null||p===void 0||p.call(s)},C=s=>{l("close",s)},N=s=>{s.keyCode===lt.ESC&&(s.stopPropagation(),C(s))},T=()=>{const{open:s,afterVisibleChange:p}=e;p&&p(!!s)},j=s=>{let{level:p,getContainer:_}=s;if(dt)return;const I=_==null?void 0:_(),k=I?I.parentNode:null;y=[],p==="all"?(k?Array.prototype.slice.call(k.children):[]).forEach(z=>{z.nodeName!=="SCRIPT"&&z.nodeName!=="STYLE"&&z.nodeName!=="LINK"&&z!==I&&y.push(z)}):p&&ct(p).forEach(x=>{document.querySelectorAll(x).forEach(z=>{y.push(z)})})},V=s=>{l("handleClick",s)},B=A(!1);return G(d,()=>{ae(()=>{B.value=!0})}),()=>{var s,p;const{width:_,height:I,open:k,prefixCls:x,placement:z,level:Y,levelMove:q,ease:o,duration:r,getContainer:v,onChange:P,afterVisibleChange:H,showMask:$,maskClosable:D,maskStyle:F,keyboard:L,getOpenCount:a,scrollLocker:c,contentWrapperStyle:m,style:O,class:M,rootClassName:J,rootStyle:Z,maskMotion:te,motion:Q,inline:oe}=e,ne=ft(e,["width","height","open","prefixCls","placement","level","levelMove","ease","duration","getContainer","onChange","afterVisibleChange","showMask","maskClosable","maskStyle","keyboard","getOpenCount","scrollLocker","contentWrapperStyle","style","class","rootClassName","rootStyle","maskMotion","motion","inline"]),W=k&&B.value,Fe=de(x,{[`${x}-${z}`]:!0,[`${x}-open`]:W,[`${x}-inline`]:oe,"no-mask":!$,[J]:!0}),Le=typeof Q=="function"?Q(z):Q;return u("div",E(E({},ze(ne,["autofocus"])),{},{tabindex:-1,class:Fe,style:Z,ref:d,onKeydown:W&&L?N:void 0}),[u(ye,te,{default:()=>[$&&he(u("div",{class:`${x}-mask`,onClick:D?C:void 0,style:F,ref:f},null),[[ge,W]])]}),u(ye,E(E({},Le),{},{onAfterEnter:T,onAfterLeave:T}),{default:()=>[he(u("div",{class:`${x}-content-wrapper`,style:[m],ref:i},[u("div",{class:[`${x}-content`,M],style:O,ref:b},[(s=t.default)===null||s===void 0?void 0:s.call(t)]),t.handler?u("div",{onClick:V,ref:h},[(p=t.handler)===null||p===void 0?void 0:p.call(t)]):null]),[[ge,W]])]})])}}});var xe=function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(l[t[i]]=e[t[i]]);return l};const vt=ee({compatConfig:{MODE:3},inheritAttrs:!1,props:pe(it(),{prefixCls:"drawer",placement:"left",getContainer:"body",level:"all",duration:".3s",ease:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",afterVisibleChange:()=>{},showMask:!0,maskClosable:!0,maskStyle:{},wrapperClassName:"",keyboard:!0,forceRender:!1,autofocus:!0}),emits:["handleClick","close"],setup(e,n){let{emit:l,slots:t}=n;const i=re(null),d=h=>{l("handleClick",h)},f=h=>{l("close",h)};return()=>{const{getContainer:h,wrapperClassName:b,rootClassName:y,rootStyle:w,forceRender:C}=e,N=xe(e,["getContainer","wrapperClassName","rootClassName","rootStyle","forceRender"]);let T=null;if(!h)return u(ke,E(E({},N),{},{rootClassName:y,rootStyle:w,open:e.open,onClose:f,onHandleClick:d,inline:!0}),t);const j=!!t.handler||C;return(j||e.open||i.value)&&(T=u(Ze,{autoLock:!0,visible:e.open,forceRender:j,getContainer:h,wrapperClassName:b},{default:V=>{var{visible:B,afterClose:s}=V,p=xe(V,["visible","afterClose"]);return u(ke,E(E(E({ref:i},N),p),{},{rootClassName:y,rootStyle:w,open:B!==void 0?B:e.open,afterVisibleChange:s!==void 0?s:e.afterVisibleChange,onClose:f,onHandleClick:d}),t)}})),T}}}),mt=e=>{const{componentCls:n,motionDurationSlow:l}=e,t={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${l}`}}};return{[n]:{[`${n}-mask-motion`]:{"&-enter, &-appear, &-leave":{"&-active":{transition:`all ${l}`}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}},[`${n}-panel-motion`]:{"&-left":[t,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[t,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[t,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[t,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}}}},pt=e=>{const{componentCls:n,zIndexPopup:l,colorBgMask:t,colorBgElevated:i,motionDurationSlow:d,motionDurationMid:f,padding:h,paddingLG:b,fontSizeLG:y,lineHeightLG:w,lineWidth:C,lineType:N,colorSplit:T,marginSM:j,colorIcon:V,colorIconHover:B,colorText:s,fontWeightStrong:p,drawerFooterPaddingVertical:_,drawerFooterPaddingHorizontal:I}=e,k=`${n}-content-wrapper`;return{[n]:{position:"fixed",inset:0,zIndex:l,pointerEvents:"none","&-pure":{position:"relative",background:i,[`&${n}-left`]:{boxShadow:e.boxShadowDrawerLeft},[`&${n}-right`]:{boxShadow:e.boxShadowDrawerRight},[`&${n}-top`]:{boxShadow:e.boxShadowDrawerUp},[`&${n}-bottom`]:{boxShadow:e.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${n}-mask`]:{position:"absolute",inset:0,zIndex:l,background:t,pointerEvents:"auto"},[k]:{position:"absolute",zIndex:l,transition:`all ${d}`,"&-hidden":{display:"none"}},[`&-left > ${k}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowDrawerLeft},[`&-right > ${k}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:e.boxShadowDrawerRight},[`&-top > ${k}`]:{top:0,insetInline:0,boxShadow:e.boxShadowDrawerUp},[`&-bottom > ${k}`]:{bottom:0,insetInline:0,boxShadow:e.boxShadowDrawerDown},[`${n}-content`]:{width:"100%",height:"100%",overflow:"auto",background:i,pointerEvents:"auto"},[`${n}-wrapper-body`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},[`${n}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${h}px ${b}px`,fontSize:y,lineHeight:w,borderBottom:`${C}px ${N} ${T}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${n}-extra`]:{flex:"none"},[`${n}-close`]:{display:"inline-block",marginInlineEnd:j,color:V,fontWeight:p,fontSize:y,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:`color ${f}`,textRendering:"auto","&:focus, &:hover":{color:B,textDecoration:"none"}},[`${n}-title`]:{flex:1,margin:0,color:s,fontWeight:e.fontWeightStrong,fontSize:y,lineHeight:w},[`${n}-body`]:{flex:1,minWidth:0,minHeight:0,padding:b,overflow:"auto"},[`${n}-footer`]:{flexShrink:0,padding:`${_}px ${I}px`,borderTop:`${C}px ${N} ${T}`},"&-rtl":{direction:"rtl"}}}},yt=Be("Drawer",e=>{const n=We(e,{drawerFooterPaddingVertical:e.paddingXS,drawerFooterPaddingHorizontal:e.padding});return[pt(n),mt(n)]},e=>({zIndexPopup:e.zIndexPopupBase}));var ht=function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(l[t[i]]=e[t[i]]);return l};const gt=["top","right","bottom","left"],$e={distance:180},bt=()=>({autofocus:{type:Boolean,default:void 0},closable:{type:Boolean,default:void 0},closeIcon:g.any,destroyOnClose:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},getContainer:{type:[String,Function,Boolean,Object],default:void 0},maskClosable:{type:Boolean,default:void 0},mask:{type:Boolean,default:void 0},maskStyle:U(),rootClassName:String,rootStyle:U(),size:{type:String},drawerStyle:U(),headerStyle:U(),bodyStyle:U(),contentWrapperStyle:{type:Object,default:void 0},title:g.any,visible:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},width:g.oneOfType([g.string,g.number]),height:g.oneOfType([g.string,g.number]),zIndex:Number,prefixCls:String,push:g.oneOfType([g.looseBool,{type:Object}]),placement:g.oneOf(gt),keyboard:{type:Boolean,default:void 0},extra:g.any,footer:g.any,footerStyle:U(),level:g.any,levelMove:{type:[Number,Array,Function]},handle:g.any,afterVisibleChange:Function,onAfterVisibleChange:Function,onAfterOpenChange:Function,"onUpdate:visible":Function,"onUpdate:open":Function,onClose:Function}),wt=ee({compatConfig:{MODE:3},name:"ADrawer",inheritAttrs:!1,props:pe(bt(),{closable:!0,placement:"right",maskClosable:!0,mask:!0,level:null,keyboard:!0,push:$e}),slots:Object,setup(e,n){let{emit:l,slots:t,attrs:i}=n;const d=A(!1),f=A(!1),h=A(null),b=A(!1),y=A(!1),w=S(()=>{var a;return(a=e.open)!==null&&a!==void 0?a:e.visible});G(w,()=>{w.value?b.value=!0:y.value=!1},{immediate:!0}),G([w,b],()=>{w.value&&b.value&&(y.value=!0)},{immediate:!0});const C=Re("parentDrawerOpts",null),{prefixCls:N,getPopupContainer:T,direction:j}=Ve("drawer",e),[V,B]=yt(N),s=S(()=>e.getContainer===void 0&&(T!=null&&T.value)?()=>T.value(document.body):e.getContainer);Qe(!e.afterVisibleChange,"Drawer","`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead"),He("parentDrawerOpts",{setPush:()=>{d.value=!0},setPull:()=>{d.value=!1,ae(()=>{I()})}}),me(()=>{w.value&&C&&C.setPush()}),Ne(()=>{C&&C.setPull()}),G(y,()=>{C&&(y.value?C.setPush():C.setPull())},{flush:"post"});const I=()=>{var a,c;(c=(a=h.value)===null||a===void 0?void 0:a.domFocus)===null||c===void 0||c.call(a)},k=a=>{l("update:visible",!1),l("update:open",!1),l("close",a)},x=a=>{var c;a||(f.value===!1&&(f.value=!0),e.destroyOnClose&&(b.value=!1)),(c=e.afterVisibleChange)===null||c===void 0||c.call(e,a),l("afterVisibleChange",a),l("afterOpenChange",a)},z=S(()=>{const{push:a,placement:c}=e;let m;return typeof a=="boolean"?m=a?$e.distance:0:m=a.distance,m=parseFloat(String(m||0)),c==="left"||c==="right"?`translateX(${c==="left"?m:-m}px)`:c==="top"||c==="bottom"?`translateY(${c==="top"?m:-m}px)`:null}),Y=S(()=>{var a;return(a=e.width)!==null&&a!==void 0?a:e.size==="large"?736:378}),q=S(()=>{var a;return(a=e.height)!==null&&a!==void 0?a:e.size==="large"?736:378}),o=S(()=>{const{mask:a,placement:c}=e;if(!y.value&&!a)return{};const m={};return c==="left"||c==="right"?m.width=_e(Y.value)?`${Y.value}px`:Y.value:m.height=_e(q.value)?`${q.value}px`:q.value,m}),r=S(()=>{const{zIndex:a,contentWrapperStyle:c}=e,m=o.value;return[{zIndex:a,transform:d.value?z.value:void 0},X({},c),m]}),v=a=>{const{closable:c,headerStyle:m}=e,O=le(t,e,"extra"),M=le(t,e,"title");return!M&&!c?null:u("div",{class:de(`${a}-header`,{[`${a}-header-close-only`]:c&&!M&&!O}),style:m},[u("div",{class:`${a}-header-title`},[P(a),M&&u("div",{class:`${a}-title`},[M])]),O&&u("div",{class:`${a}-extra`},[O])])},P=a=>{var c;const{closable:m}=e,O=t.closeIcon?(c=t.closeIcon)===null||c===void 0?void 0:c.call(t):e.closeIcon;return m&&u("button",{key:"closer",onClick:k,"aria-label":"Close",class:`${a}-close`},[O===void 0?u(Xe,null,null):O])},H=a=>{var c;if(f.value&&!e.forceRender&&!b.value)return null;const{bodyStyle:m,drawerStyle:O}=e;return u("div",{class:`${a}-wrapper-body`,style:O},[v(a),u("div",{key:"body",class:`${a}-body`,style:m},[(c=t.default)===null||c===void 0?void 0:c.call(t)]),$(a)])},$=a=>{const c=le(t,e,"footer");if(!c)return null;const m=`${a}-footer`;return u("div",{class:m,style:e.footerStyle},[c])},D=S(()=>de({"no-mask":!e.mask,[`${N.value}-rtl`]:j.value==="rtl"},e.rootClassName,B.value)),F=S(()=>be(we(N.value,"mask-motion"))),L=a=>be(we(N.value,`panel-motion-${a}`));return()=>{const{width:a,height:c,placement:m,mask:O,forceRender:M}=e,J=ht(e,["width","height","placement","mask","forceRender"]),Z=X(X(X({},i),ze(J,["size","closeIcon","closable","destroyOnClose","drawerStyle","headerStyle","bodyStyle","title","push","onAfterVisibleChange","onClose","onUpdate:visible","onUpdate:open","visible"])),{forceRender:M,onClose:k,afterVisibleChange:x,handler:!1,prefixCls:N.value,open:y.value,showMask:O,placement:m,ref:h});return V(u(et,null,{default:()=>[u(vt,E(E({},Z),{},{maskMotion:F.value,motion:L,width:Y.value,height:q.value,getContainer:s.value,rootClassName:D.value,rootStyle:e.rootStyle,contentWrapperStyle:r.value}),{handler:e.handle?()=>e.handle:t.handle,default:()=>H(N.value)})]}))}}}),St=De(wt);function Ct(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}function _t(e){return Object.keys(e).map(n=>`${Ct(n)}: ${e[n]};`).join(" ")}function Oe(){return window.devicePixelRatio||1}function se(e,n,l,t){e.translate(n,l),e.rotate(Math.PI/180*Number(t)),e.translate(-n,-l)}const kt=(e,n)=>{let l=!1;return e.removedNodes.length&&(l=Array.from(e.removedNodes).some(t=>t===n)),e.type==="attributes"&&e.target===n&&(l=!0),l};var xt=function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(l[t[i]]=e[t[i]]);return l};function $t(e,n){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{window:t=rt}=l,i=xt(l,["window"]);let d;const f=ot(()=>t&&"MutationObserver"in t),h=()=>{d&&(d.disconnect(),d=void 0)},b=G(()=>nt(e),w=>{h(),f.value&&t&&w&&(d=new MutationObserver(n),d.observe(w,i))},{immediate:!0}),y=()=>{h(),b()};return at(y),{isSupported:f,stop:y}}const ce=2,Pe=3,Ot=()=>({zIndex:Number,rotate:Number,width:Number,height:Number,image:String,content:Ge([String,Array]),font:U(),rootClassName:String,gap:ue(),offset:ue()}),Pt=ee({name:"AWatermark",inheritAttrs:!1,props:pe(Ot(),{zIndex:9,rotate:-22,font:{},gap:[100,100]}),setup(e,n){let{slots:l,attrs:t}=n;const[,i]=Ye(),d=A(),f=A(),h=A(!1),b=S(()=>{var o,r;return(r=(o=e.gap)===null||o===void 0?void 0:o[0])!==null&&r!==void 0?r:100}),y=S(()=>{var o,r;return(r=(o=e.gap)===null||o===void 0?void 0:o[1])!==null&&r!==void 0?r:100}),w=S(()=>b.value/2),C=S(()=>y.value/2),N=S(()=>{var o,r;return(r=(o=e.offset)===null||o===void 0?void 0:o[0])!==null&&r!==void 0?r:w.value}),T=S(()=>{var o,r;return(r=(o=e.offset)===null||o===void 0?void 0:o[1])!==null&&r!==void 0?r:C.value}),j=S(()=>{var o,r;return(r=(o=e.font)===null||o===void 0?void 0:o.fontSize)!==null&&r!==void 0?r:i.value.fontSizeLG}),V=S(()=>{var o,r;return(r=(o=e.font)===null||o===void 0?void 0:o.fontWeight)!==null&&r!==void 0?r:"normal"}),B=S(()=>{var o,r;return(r=(o=e.font)===null||o===void 0?void 0:o.fontStyle)!==null&&r!==void 0?r:"normal"}),s=S(()=>{var o,r;return(r=(o=e.font)===null||o===void 0?void 0:o.fontFamily)!==null&&r!==void 0?r:"sans-serif"}),p=S(()=>{var o,r;return(r=(o=e.font)===null||o===void 0?void 0:o.color)!==null&&r!==void 0?r:i.value.colorFill}),_=S(()=>{var o;const r={zIndex:(o=e.zIndex)!==null&&o!==void 0?o:9,position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",backgroundRepeat:"repeat"};let v=N.value-w.value,P=T.value-C.value;return v>0&&(r.left=`${v}px`,r.width=`calc(100% - ${v}px)`,v=0),P>0&&(r.top=`${P}px`,r.height=`calc(100% - ${P}px)`,P=0),r.backgroundPosition=`${v}px ${P}px`,r}),I=()=>{f.value&&(f.value.remove(),f.value=void 0)},k=(o,r)=>{var v;d.value&&f.value&&(h.value=!0,f.value.setAttribute("style",_t(X(X({},_.value),{backgroundImage:`url('${o}')`,backgroundSize:`${(b.value+r)*ce}px`}))),(v=d.value)===null||v===void 0||v.append(f.value),setTimeout(()=>{h.value=!1}))},x=o=>{let r=120,v=64;const P=e.content,H=e.image,$=e.width,D=e.height;if(!H&&o.measureText){o.font=`${Number(j.value)}px ${s.value}`;const F=Array.isArray(P)?P:[P],L=F.map(a=>o.measureText(a).width);r=Math.ceil(Math.max(...L)),v=Number(j.value)*F.length+(F.length-1)*Pe}return[$??r,D??v]},z=(o,r,v,P,H)=>{const $=Oe(),D=e.content,F=Number(j.value)*$;o.font=`${B.value} normal ${V.value} ${F}px/${H}px ${s.value}`,o.fillStyle=p.value,o.textAlign="center",o.textBaseline="top",o.translate(P/2,0);const L=Array.isArray(D)?D:[D];L==null||L.forEach((a,c)=>{o.fillText(a??"",r,v+c*(F+Pe*$))})},Y=()=>{var o;const r=document.createElement("canvas"),v=r.getContext("2d"),P=e.image,H=(o=e.rotate)!==null&&o!==void 0?o:-22;if(v){f.value||(f.value=document.createElement("div"));const $=Oe(),[D,F]=x(v),L=(b.value+D)*$,a=(y.value+F)*$;r.setAttribute("width",`${L*ce}px`),r.setAttribute("height",`${a*ce}px`);const c=b.value*$/2,m=y.value*$/2,O=D*$,M=F*$,J=(O+b.value*$)/2,Z=(M+y.value*$)/2,te=c+L,Q=m+a,oe=J+L,ne=Z+a;if(v.save(),se(v,J,Z,H),P){const W=new Image;W.onload=()=>{v.drawImage(W,c,m,O,M),v.restore(),se(v,oe,ne,H),v.drawImage(W,te,Q,O,M),k(r.toDataURL(),D)},W.crossOrigin="anonymous",W.referrerPolicy="no-referrer",W.src=P}else z(v,c,m,O,M),v.restore(),se(v,oe,ne,H),z(v,te,Q,O,M),k(r.toDataURL(),D)}};return me(()=>{Y()}),G(()=>[e,i.value.colorFill,i.value.fontSizeLG],()=>{Y()},{deep:!0,flush:"post"}),Ue(()=>{I()}),$t(d,o=>{h.value||o.forEach(r=>{kt(r,f.value)&&(I(),Y())})},{attributes:!0,subtree:!0,childList:!0,attributeFilter:["style","class"]}),()=>{var o;return u("div",E(E({},t),{},{ref:d,class:[t.class,e.rootClassName],style:[{position:"relative"},t.style]}),[(o=l.default)===null||o===void 0?void 0:o.call(l)])}}}),Nt=De(Pt);var Ae=(e=>(e.horizontal="horizontal",e.vertical="vertical",e))(Ae||{}),je=(e=>(e.light="light",e.dark="dark",e))(je||{});const Dt=ee({__name:"LayoutThemeCfg",setup(e){const n=re({layout:{labelAlign:"left",layout:"horizontal"},properties:{projectName:{type:"string",label:"项目名称"},colorPrimary:{type:"string",label:"主题色",component:{name:"color-picker"}},layoutMode:{type:"radio",label:"布局方式",component:{buttonStyle:"solid",dataSource:Object.entries(Ae).map(([f,h])=>({value:h,label:f}))}},watermarkVisible:{type:"switch",label:"是否显示水印"},watermarkText:{type:"string",label:"水印文字",show:"${formData.watermarkVisible}"}}}),l=re({layout:{labelAlign:"left",layout:"horizontal"},properties:{headerBgColor:{type:"string",label:"背景色",component:{name:"color-picker"}},headerFontColor:{type:"string",label:"字体颜色",component:{name:"color-picker"}}}}),t=re({layout:{labelAlign:"left",layout:"horizontal"},properties:{menuTheme:{type:"radio",label:"主题",component:{buttonStyle:"solid",dataSource:Object.entries(je).map(([f,h])=>({value:h,label:f}))}}}}),i=Te(),{themeCfg:d}=Ie(i);return(f,h)=>{const b=qe,y=Je,w=tt;return fe(),ve(w,{model:R(d),"label-col":{span:8}},{default:K(()=>[u(y,{ghost:""},{default:K(()=>[u(b,{header:"全局配置"},{default:K(()=>[u(R(ie),{layout:n.value.layout,properties:n.value.properties,"form-data":R(d)},null,8,["layout","properties","form-data"])]),_:1}),u(b,{header:"顶栏配置"},{default:K(()=>[u(R(ie),{layout:l.value.layout,properties:l.value.properties,"form-data":R(d)},null,8,["layout","properties","form-data"])]),_:1}),u(b,{header:"菜单配置"},{default:K(()=>[u(R(ie),{layout:t.value.layout,properties:t.value.properties,"form-data":R(d)},null,8,["layout","properties","form-data"])]),_:1})]),_:1})]),_:1},8,["model"])}}}),Tt=ee({__name:"LayoutView",setup(e){const n=Te(),{isConfigVisible:l,themeCfg:t}=Ie(n),{onCloseConfigDrawer:i,startUp:d}=n,f=S(()=>h[t.value.layoutMode]),h={horizontal:Se(()=>Ce(()=>import("./HorizontalSplitLayout-CRk3_jd1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]))),vertical:Se(()=>Ce(()=>import("./VerticalStackLayout-DRjx8wGk.js"),__vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,34])))};return d(),(b,y)=>{const w=St,C=Nt;return fe(),ve(C,{content:R(t).watermarkText,zIndex:R(t).watermarkVisible?9:-1},{default:K(()=>[(fe(),ve(Ke(f.value))),u(w,{width:300,title:"主题配置",placement:"right",open:R(l),onClose:R(i),bodyStyle:{padding:0}},{default:K(()=>[u(Dt)]),_:1},8,["open","onClose"])]),_:1},8,["content","zIndex"])}}}),Lt=Object.freeze(Object.defineProperty({__proto__:null,default:Tt},Symbol.toStringTag,{value:"Module"}));export{Lt as L,_e as i};
