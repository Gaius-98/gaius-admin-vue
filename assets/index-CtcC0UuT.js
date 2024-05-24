import{k as E,m as R,bp as O,_ as P,aa as j,d as z,u as F,p as m,e as H,g as d,i as b,s as X,af as U,K,P as B,aL as V,C as q}from"./index-BZm-G3qC.js";import{af as G,ag as J,ah as Q,W as Y}from"./index-3qYqREXO.js";const h=(o,t,l)=>{const a=O(l);return{[`${o.componentCls}-${t}`]:{color:o[`color${l}`],background:o[`color${a}Bg`],borderColor:o[`color${a}Border`],[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}},Z=o=>G(o,(t,l)=>{let{textColor:a,lightBorderColor:r,lightColor:e,darkColor:c}=l;return{[`${o.componentCls}-${t}`]:{color:a,background:e,borderColor:r,"&-inverse":{color:o.colorTextLightSolid,background:c,borderColor:c},[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}}),oo=o=>{const{paddingXXS:t,lineWidth:l,tagPaddingHorizontal:a,componentCls:r}=o,e=a-l,c=t-l;return{[r]:P(P({},j(o)),{display:"inline-block",height:"auto",marginInlineEnd:o.marginXS,paddingInline:e,fontSize:o.tagFontSize,lineHeight:`${o.tagLineHeight}px`,whiteSpace:"nowrap",background:o.tagDefaultBg,border:`${o.lineWidth}px ${o.lineType} ${o.colorBorder}`,borderRadius:o.borderRadiusSM,opacity:1,transition:`all ${o.motionDurationMid}`,textAlign:"start",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:o.tagDefaultColor},[`${r}-close-icon`]:{marginInlineStart:c,color:o.colorTextDescription,fontSize:o.tagIconSize,cursor:"pointer",transition:`all ${o.motionDurationMid}`,"&:hover":{color:o.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${o.iconCls}-close, ${o.iconCls}-close:hover`]:{color:o.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:o.colorPrimary,backgroundColor:o.colorFillSecondary},"&:active, &-checked":{color:o.colorTextLightSolid},"&-checked":{backgroundColor:o.colorPrimary,"&:hover":{backgroundColor:o.colorPrimaryHover}},"&:active":{backgroundColor:o.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${o.iconCls} + span, > span + ${o.iconCls}`]:{marginInlineStart:e}}),[`${r}-borderless`]:{borderColor:"transparent",background:o.tagBorderlessBg}}},D=E("Tag",o=>{const{fontSize:t,lineHeight:l,lineWidth:a,fontSizeIcon:r}=o,e=Math.round(t*l),c=o.fontSizeSM,g=e-a*2,C=o.colorFillAlter,i=o.colorText,n=R(o,{tagFontSize:c,tagLineHeight:g,tagDefaultBg:C,tagDefaultColor:i,tagIconSize:r-2*a,tagPaddingHorizontal:8,tagBorderlessBg:o.colorFillTertiary});return[oo(n),Z(n),h(n,"success","Success"),h(n,"processing","Info"),h(n,"error","Error"),h(n,"warning","Warning")]}),eo=()=>({prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}),S=z({compatConfig:{MODE:3},name:"ACheckableTag",inheritAttrs:!1,props:eo(),setup(o,t){let{slots:l,emit:a,attrs:r}=t;const{prefixCls:e}=F("tag",o),[c,g]=D(e),C=n=>{const{checked:u}=o;a("update:checked",!u),a("change",!u),a("click",n)},i=m(()=>H(e.value,g.value,{[`${e.value}-checkable`]:!0,[`${e.value}-checkable-checked`]:o.checked}));return()=>{var n;return c(d("span",b(b({},r),{},{class:[i.value,r.class],onClick:C}),[(n=l.default)===null||n===void 0?void 0:n.call(l)]))}}}),lo=()=>({prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:B.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},onClick:V(),"onUpdate:visible":Function,icon:B.any,bordered:{type:Boolean,default:!0}}),v=z({compatConfig:{MODE:3},name:"ATag",inheritAttrs:!1,props:lo(),slots:Object,setup(o,t){let{slots:l,emit:a,attrs:r}=t;const{prefixCls:e,direction:c}=F("tag",o),[g,C]=D(e),i=X(!0);U(()=>{o.visible!==void 0&&(i.value=o.visible)});const n=s=>{s.stopPropagation(),a("update:visible",!1),a("close",s),!s.defaultPrevented&&o.visible===void 0&&(i.value=!1)},u=m(()=>J(o.color)||Q(o.color)),M=m(()=>H(e.value,C.value,{[`${e.value}-${o.color}`]:u.value,[`${e.value}-has-color`]:o.color&&!u.value,[`${e.value}-hidden`]:!i.value,[`${e.value}-rtl`]:c.value==="rtl",[`${e.value}-borderless`]:!o.bordered})),k=s=>{a("click",s)};return()=>{var s,p,f;const{icon:w=(s=l.icon)===null||s===void 0?void 0:s.call(l),color:$,closeIcon:y=(p=l.closeIcon)===null||p===void 0?void 0:p.call(l),closable:A=!1}=o,W=()=>A?y?d("span",{class:`${e.value}-close-icon`,onClick:n},[y]):d(q,{class:`${e.value}-close-icon`,onClick:n},null):null,_={backgroundColor:$&&!u.value?$:void 0},T=w||null,I=(f=l.default)===null||f===void 0?void 0:f.call(l),L=T?d(K,null,[T,d("span",null,[I])]):I,N=o.onClick!==void 0,x=d("span",b(b({},r),{},{onClick:k,class:[M.value,r.class],style:[_,r.style]}),[L,W()]);return g(N?d(Y,null,{default:()=>[x]}):x)}}});v.CheckableTag=S;v.install=function(o){return o.component(v.name,v),o.component(S.name,S),o};export{v as T};
