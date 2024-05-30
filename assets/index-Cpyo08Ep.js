import{j as E,m as L,bq as j,_ as P,ab as O,d as z,u as F,l as m,e as H,g as d,i as b,s as X,af as U,R as q,P as B,aY as V,C as Y}from"./index-_076D9lD.js";import{al as G,am as J,an as K,af as Q}from"./index-B3gs7d4T.js";const v=(o,t,l)=>{const a=j(l);return{[`${o.componentCls}-${t}`]:{color:o[`color${l}`],background:o[`color${a}Bg`],borderColor:o[`color${a}Border`],[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}},Z=o=>G(o,(t,l)=>{let{textColor:a,lightBorderColor:r,lightColor:e,darkColor:c}=l;return{[`${o.componentCls}-${t}`]:{color:a,background:e,borderColor:r,"&-inverse":{color:o.colorTextLightSolid,background:c,borderColor:c},[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}}),oo=o=>{const{paddingXXS:t,lineWidth:l,tagPaddingHorizontal:a,componentCls:r}=o,e=a-l,c=t-l;return{[r]:P(P({},O(o)),{display:"inline-block",height:"auto",marginInlineEnd:o.marginXS,paddingInline:e,fontSize:o.tagFontSize,lineHeight:`${o.tagLineHeight}px`,whiteSpace:"nowrap",background:o.tagDefaultBg,border:`${o.lineWidth}px ${o.lineType} ${o.colorBorder}`,borderRadius:o.borderRadiusSM,opacity:1,transition:`all ${o.motionDurationMid}`,textAlign:"start",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:o.tagDefaultColor},[`${r}-close-icon`]:{marginInlineStart:c,color:o.colorTextDescription,fontSize:o.tagIconSize,cursor:"pointer",transition:`all ${o.motionDurationMid}`,"&:hover":{color:o.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${o.iconCls}-close, ${o.iconCls}-close:hover`]:{color:o.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:o.colorPrimary,backgroundColor:o.colorFillSecondary},"&:active, &-checked":{color:o.colorTextLightSolid},"&-checked":{backgroundColor:o.colorPrimary,"&:hover":{backgroundColor:o.colorPrimaryHover}},"&:active":{backgroundColor:o.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${o.iconCls} + span, > span + ${o.iconCls}`]:{marginInlineStart:e}}),[`${r}-borderless`]:{borderColor:"transparent",background:o.tagBorderlessBg}}},D=E("Tag",o=>{const{fontSize:t,lineHeight:l,lineWidth:a,fontSizeIcon:r}=o,e=Math.round(t*l),c=o.fontSizeSM,g=e-a*2,C=o.colorFillAlter,i=o.colorText,n=L(o,{tagFontSize:c,tagLineHeight:g,tagDefaultBg:C,tagDefaultColor:i,tagIconSize:r-2*a,tagPaddingHorizontal:8,tagBorderlessBg:o.colorFillTertiary});return[oo(n),Z(n),v(n,"success","Success"),v(n,"processing","Info"),v(n,"error","Error"),v(n,"warning","Warning")]}),eo=()=>({prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}),S=z({compatConfig:{MODE:3},name:"ACheckableTag",inheritAttrs:!1,props:eo(),setup(o,t){let{slots:l,emit:a,attrs:r}=t;const{prefixCls:e}=F("tag",o),[c,g]=D(e),C=n=>{const{checked:u}=o;a("update:checked",!u),a("change",!u),a("click",n)},i=m(()=>H(e.value,g.value,{[`${e.value}-checkable`]:!0,[`${e.value}-checkable-checked`]:o.checked}));return()=>{var n;return c(d("span",b(b({},r),{},{class:[i.value,r.class],onClick:C}),[(n=l.default)===null||n===void 0?void 0:n.call(l)]))}}}),lo=()=>({prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:B.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},onClick:V(),"onUpdate:visible":Function,icon:B.any,bordered:{type:Boolean,default:!0}}),h=z({compatConfig:{MODE:3},name:"ATag",inheritAttrs:!1,props:lo(),slots:Object,setup(o,t){let{slots:l,emit:a,attrs:r}=t;const{prefixCls:e,direction:c}=F("tag",o),[g,C]=D(e),i=X(!0);U(()=>{o.visible!==void 0&&(i.value=o.visible)});const n=s=>{s.stopPropagation(),a("update:visible",!1),a("close",s),!s.defaultPrevented&&o.visible===void 0&&(i.value=!1)},u=m(()=>J(o.color)||K(o.color)),M=m(()=>H(e.value,C.value,{[`${e.value}-${o.color}`]:u.value,[`${e.value}-has-color`]:o.color&&!u.value,[`${e.value}-hidden`]:!i.value,[`${e.value}-rtl`]:c.value==="rtl",[`${e.value}-borderless`]:!o.bordered})),w=s=>{a("click",s)};return()=>{var s,p,f;const{icon:A=(s=l.icon)===null||s===void 0?void 0:s.call(l),color:$,closeIcon:y=(p=l.closeIcon)===null||p===void 0?void 0:p.call(l),closable:_=!1}=o,k=()=>_?y?d("span",{class:`${e.value}-close-icon`,onClick:n},[y]):d(Y,{class:`${e.value}-close-icon`,onClick:n},null):null,N={backgroundColor:$&&!u.value?$:void 0},T=A||null,I=(f=l.default)===null||f===void 0?void 0:f.call(l),R=T?d(q,null,[T,d("span",null,[I])]):I,W=o.onClick!==void 0,x=d("span",b(b({},r),{},{onClick:w,class:[M.value,r.class],style:[N,r.style]}),[R,k()]);return g(W?d(Q,null,{default:()=>[x]}):x)}}});h.CheckableTag=S;h.install=function(o){return o.component(h.name,h),o.component(S.name,S),o};export{h as T};
