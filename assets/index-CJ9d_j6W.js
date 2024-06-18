import{m as W,p as E,ce as O,cf as j,_ as P,aL as X,d as z,x as F,t as S,e as D,g as d,i as b,s as U,aC as V,cg as q,ch as G,R as J,cc as K,P as B,bc as Q,D as Y}from"./index-Beh8klBv.js";const h=(o,c,l)=>{const a=O(l);return{[`${o.componentCls}-${c}`]:{color:o[`color${l}`],background:o[`color${a}Bg`],borderColor:o[`color${a}Border`],[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}},Z=o=>j(o,(c,l)=>{let{textColor:a,lightBorderColor:r,lightColor:e,darkColor:t}=l;return{[`${o.componentCls}-${c}`]:{color:a,background:e,borderColor:r,"&-inverse":{color:o.colorTextLightSolid,background:t,borderColor:t},[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}}),oo=o=>{const{paddingXXS:c,lineWidth:l,tagPaddingHorizontal:a,componentCls:r}=o,e=a-l,t=c-l;return{[r]:P(P({},X(o)),{display:"inline-block",height:"auto",marginInlineEnd:o.marginXS,paddingInline:e,fontSize:o.tagFontSize,lineHeight:`${o.tagLineHeight}px`,whiteSpace:"nowrap",background:o.tagDefaultBg,border:`${o.lineWidth}px ${o.lineType} ${o.colorBorder}`,borderRadius:o.borderRadiusSM,opacity:1,transition:`all ${o.motionDurationMid}`,textAlign:"start",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:o.tagDefaultColor},[`${r}-close-icon`]:{marginInlineStart:t,color:o.colorTextDescription,fontSize:o.tagIconSize,cursor:"pointer",transition:`all ${o.motionDurationMid}`,"&:hover":{color:o.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${o.iconCls}-close, ${o.iconCls}-close:hover`]:{color:o.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:o.colorPrimary,backgroundColor:o.colorFillSecondary},"&:active, &-checked":{color:o.colorTextLightSolid},"&-checked":{backgroundColor:o.colorPrimary,"&:hover":{backgroundColor:o.colorPrimaryHover}},"&:active":{backgroundColor:o.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${o.iconCls} + span, > span + ${o.iconCls}`]:{marginInlineStart:e}}),[`${r}-borderless`]:{borderColor:"transparent",background:o.tagBorderlessBg}}},H=W("Tag",o=>{const{fontSize:c,lineHeight:l,lineWidth:a,fontSizeIcon:r}=o,e=Math.round(c*l),t=o.fontSizeSM,g=e-a*2,C=o.colorFillAlter,i=o.colorText,n=E(o,{tagFontSize:t,tagLineHeight:g,tagDefaultBg:C,tagDefaultColor:i,tagIconSize:r-2*a,tagPaddingHorizontal:8,tagBorderlessBg:o.colorFillTertiary});return[oo(n),Z(n),h(n,"success","Success"),h(n,"processing","Info"),h(n,"error","Error"),h(n,"warning","Warning")]}),eo=()=>({prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}),m=z({compatConfig:{MODE:3},name:"ACheckableTag",inheritAttrs:!1,props:eo(),setup(o,c){let{slots:l,emit:a,attrs:r}=c;const{prefixCls:e}=F("tag",o),[t,g]=H(e),C=n=>{const{checked:u}=o;a("update:checked",!u),a("change",!u),a("click",n)},i=S(()=>D(e.value,g.value,{[`${e.value}-checkable`]:!0,[`${e.value}-checkable-checked`]:o.checked}));return()=>{var n;return t(d("span",b(b({},r),{},{class:[i.value,r.class],onClick:C}),[(n=l.default)===null||n===void 0?void 0:n.call(l)]))}}}),lo=()=>({prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:B.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},onClick:Q(),"onUpdate:visible":Function,icon:B.any,bordered:{type:Boolean,default:!0}}),v=z({compatConfig:{MODE:3},name:"ATag",inheritAttrs:!1,props:lo(),slots:Object,setup(o,c){let{slots:l,emit:a,attrs:r}=c;const{prefixCls:e,direction:t}=F("tag",o),[g,C]=H(e),i=U(!0);V(()=>{o.visible!==void 0&&(i.value=o.visible)});const n=s=>{s.stopPropagation(),a("update:visible",!1),a("close",s),!s.defaultPrevented&&o.visible===void 0&&(i.value=!1)},u=S(()=>q(o.color)||G(o.color)),M=S(()=>D(e.value,C.value,{[`${e.value}-${o.color}`]:u.value,[`${e.value}-has-color`]:o.color&&!u.value,[`${e.value}-hidden`]:!i.value,[`${e.value}-rtl`]:t.value==="rtl",[`${e.value}-borderless`]:!o.bordered})),w=s=>{a("click",s)};return()=>{var s,p,f;const{icon:A=(s=l.icon)===null||s===void 0?void 0:s.call(l),color:$,closeIcon:y=(p=l.closeIcon)===null||p===void 0?void 0:p.call(l),closable:_=!1}=o,k=()=>_?y?d("span",{class:`${e.value}-close-icon`,onClick:n},[y]):d(Y,{class:`${e.value}-close-icon`,onClick:n},null):null,L={backgroundColor:$&&!u.value?$:void 0},T=A||null,x=(f=l.default)===null||f===void 0?void 0:f.call(l),N=T?d(J,null,[T,d("span",null,[x])]):x,R=o.onClick!==void 0,I=d("span",b(b({},r),{},{onClick:w,class:[M.value,r.class],style:[L,r.style]}),[N,k()]);return g(R?d(K,null,{default:()=>[I]}):I)}}});v.CheckableTag=m;v.install=function(o){return o.component(v.name,v),o.component(m.name,m),o};export{v as T};