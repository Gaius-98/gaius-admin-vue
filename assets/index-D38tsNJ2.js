import{k as P,m as S,_ as d,aa as _,l as w,d as B,j as T,r as k,aN as N,u as z,p as A,e as D,g as f,i as x,y as I,a6 as $,aj as y,K as W}from"./index-bmd1BFpa.js";import{D as j,az as E,aA as H,q as M,o as R,T as L,s as O}from"./index-ccK5NkPn.js";const q=e=>{const{componentCls:o,popoverBg:r,popoverColor:t,width:a,fontWeightStrong:s,popoverPadding:l,boxShadowSecondary:c,colorTextHeading:g,borderRadiusLG:u,zIndexPopup:p,marginXS:v,colorBgElevated:n}=e;return[{[o]:d(d({},_(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:p,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":n,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${o}-content`]:{position:"relative"},[`${o}-inner`]:{backgroundColor:r,backgroundClip:"padding-box",borderRadius:u,boxShadow:c,padding:l},[`${o}-title`]:{minWidth:a,marginBottom:v,color:g,fontWeight:s},[`${o}-inner-content`]:{color:t}})},E(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${o}-pure`]:{position:"relative",maxWidth:"none",[`${o}-content`]:{display:"inline-block"}}}]},F=e=>{const{componentCls:o}=e;return{[o]:H.map(r=>{const t=e[`${r}-6`];return{[`&${o}-${r}`]:{"--antd-arrow-background-color":t,[`${o}-inner`]:{backgroundColor:t},[`${o}-arrow`]:{background:"transparent"}}}})}},G=e=>{const{componentCls:o,lineWidth:r,lineType:t,colorSplit:a,paddingSM:s,controlHeight:l,fontSize:c,lineHeight:g,padding:u}=e,p=l-Math.round(c*g),v=p/2,n=p/2-r,i=u;return{[o]:{[`${o}-inner`]:{padding:0},[`${o}-title`]:{margin:0,padding:`${v}px ${i}px ${n}px`,borderBottom:`${r}px ${t} ${a}`},[`${o}-inner-content`]:{padding:`${s}px ${i}px`}}}},V=P("Popover",e=>{const{colorBgElevated:o,colorText:r,wireframe:t}=e,a=S(e,{popoverBg:o,popoverColor:r,popoverPadding:12});return[q(a),F(a),t&&G(a),j(a,"zoom-big")]},e=>{let{zIndexPopupBase:o}=e;return{zIndexPopup:o+30,width:177}}),X=()=>d(d({},O()),{content:$(),title:$()}),Z=B({compatConfig:{MODE:3},name:"APopover",inheritAttrs:!1,props:T(X(),d(d({},M()),{trigger:"hover",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup(e,o){let{expose:r,slots:t,attrs:a}=o;const s=k();N(e.visible===void 0),r({getPopupDomNode:()=>{var n,i;return(i=(n=s.value)===null||n===void 0?void 0:n.getPopupDomNode)===null||i===void 0?void 0:i.call(n)}});const{prefixCls:l,configProvider:c}=z("popover",e),[g,u]=V(l),p=A(()=>c.getPrefixCls()),v=()=>{var n,i;const{title:m=y((n=t.title)===null||n===void 0?void 0:n.call(t)),content:h=y((i=t.content)===null||i===void 0?void 0:i.call(t))}=e,C=!!(Array.isArray(m)?m.length:m),b=!!(Array.isArray(h)?h.length:m);return!C&&!b?null:f(W,null,[C&&f("div",{class:`${l.value}-title`},[m]),f("div",{class:`${l.value}-inner-content`},[h])])};return()=>{const n=D(e.overlayClassName,u.value);return g(f(L,x(x(x({},R(e,["title","content"])),a),{},{prefixCls:l.value,ref:s,overlayClassName:n,transitionName:I(p.value,"zoom-big",e.transitionName),"data-popover-inject":!0}),{title:v,default:t.default}))}}}),Q=w(Z);export{Q as _};
