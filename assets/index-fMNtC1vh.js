import{aB as te,aC as ae,b as he,w as V,F as be,t as C,_ as x,f as N,G as O,aD as ie,o as G,d as j,g as r,O as z,i as d,e as R,R as J,r as Z,aE as ye,aF as X,l as se,k as Ce,ak as q,aG as ne,s as xe,aH as we,aI as $e,a as Pe,D as Se,Z as oe,aJ as Oe,aK as ke,m as Ie,p as Te,aL as Ne,aM as D,aN as Re,aO as _e,q as Be,x as Ae,aP as je}from"./index-DZkXttzx.js";function Ee(e){const n=window.innerWidth||document.documentElement.clientWidth,i=window.innerHeight||document.documentElement.clientHeight,{top:t,right:o,bottom:v,left:f}=e.getBoundingClientRect();return t>=0&&f>=0&&o<=n&&v<=i}function Me(e,n,i,t){const[o,v]=te(void 0);ae(()=>{const l=typeof e.value=="function"?e.value():e.value;v(l||null)},{flush:"post"});const[f,u]=te(null),h=()=>{if(!n.value){u(null);return}if(o.value){!Ee(o.value)&&n.value&&o.value.scrollIntoView(t.value);const{left:l,top:s,width:p,height:b}=o.value.getBoundingClientRect(),g={left:l,top:s,width:p,height:b,radius:0};JSON.stringify(f.value)!==JSON.stringify(g)&&u(g)}else u(null)};return he(()=>{V([n,o],()=>{h()},{flush:"post",immediate:!0}),window.addEventListener("resize",h)}),be(()=>{window.removeEventListener("resize",h)}),[C(()=>{var l,s;if(!f.value)return f.value;const p=((l=i.value)===null||l===void 0?void 0:l.offset)||6,b=((s=i.value)===null||s===void 0?void 0:s.radius)||2;return{left:f.value.left-p,top:f.value.top-p,width:f.value.width+p*2,height:f.value.height+p*2,radius:b}}),o]}const ze=()=>({arrow:O([Boolean,Object]),target:O([String,Function,Object]),title:O([String,Object]),description:O([String,Object]),placement:ie(),mask:O([Object,Boolean],!0),className:{type:String},style:G(),scrollIntoViewOptions:O([Boolean,Object])}),K=()=>x(x({},ze()),{prefixCls:{type:String},total:{type:Number},current:{type:Number},onClose:N(),onFinish:N(),renderPanel:N(),onPrev:N(),onNext:N()}),De=j({name:"DefaultPanel",inheritAttrs:!1,props:K(),setup(e,n){let{attrs:i}=n;return()=>{const{prefixCls:t,current:o,total:v,title:f,description:u,onClose:h,onPrev:a,onNext:l,onFinish:s}=e;return r("div",d(d({},i),{},{class:R(`${t}-content`,i.class)}),[r("div",{class:`${t}-inner`},[r("button",{type:"button",onClick:h,"aria-label":"Close",class:`${t}-close`},[r("span",{class:`${t}-close-x`},[z("×")])]),r("div",{class:`${t}-header`},[r("div",{class:`${t}-title`},[f])]),r("div",{class:`${t}-description`},[u]),r("div",{class:`${t}-footer`},[r("div",{class:`${t}-sliders`},[v>1?[...Array.from({length:v}).keys()].map((p,b)=>r("span",{key:p,class:b===o?"active":""},null)):null]),r("div",{class:`${t}-buttons`},[o!==0?r("button",{class:`${t}-prev-btn`,onClick:a},[z("Prev")]):null,o===v-1?r("button",{class:`${t}-finish-btn`,onClick:s},[z("Finish")]):r("button",{class:`${t}-next-btn`,onClick:l},[z("Next")])])])])])}}}),Fe=j({name:"TourStep",inheritAttrs:!1,props:K(),setup(e,n){let{attrs:i}=n;return()=>{const{current:t,renderPanel:o}=e;return r(J,null,[typeof o=="function"?o(x(x({},i),e),t):r(De,d(d({},i),e),null)])}}});let re=0;const Ve=ye();function He(){let e;return Ve?(e=re,re+=1):e="TEST_OR_SSR",e}function Le(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Z("");const n=`vc_unique_${He()}`;return e.value||n}const F={fill:"transparent","pointer-events":"auto"},We=j({name:"TourMask",props:{prefixCls:{type:String},pos:G(),rootClassName:{type:String},showMask:X(),fill:{type:String,default:"rgba(0,0,0,0.5)"},open:X(),animated:O([Boolean,Object]),zIndex:{type:Number}},setup(e,n){let{attrs:i}=n;const t=Le();return()=>{const{prefixCls:o,open:v,rootClassName:f,pos:u,showMask:h,fill:a,animated:l,zIndex:s}=e,p=`${o}-mask-${t}`,b=typeof l=="object"?l==null?void 0:l.placeholder:l;return r(se,{visible:v,autoLock:!0},{default:()=>v&&r("div",d(d({},i),{},{class:R(`${o}-mask`,f,i.class),style:[{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:s,pointerEvents:"none"},i.style]}),[h?r("svg",{style:{width:"100%",height:"100%"}},[r("defs",null,[r("mask",{id:p},[r("rect",{x:"0",y:"0",width:"100vw",height:"100vh",fill:"white"},null),u&&r("rect",{x:u.left,y:u.top,rx:u.radius,width:u.width,height:u.height,fill:"black",class:b?`${o}-placeholder-animated`:""},null)])]),r("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:a,mask:`url(#${p})`},null),u&&r(J,null,[r("rect",d(d({},F),{},{x:"0",y:"0",width:"100%",height:u.top}),null),r("rect",d(d({},F),{},{x:"0",y:"0",width:u.left,height:"100%"}),null),r("rect",d(d({},F),{},{x:"0",y:u.top+u.height,width:"100%",height:`calc(100vh - ${u.top+u.height}px)`}),null),r("rect",d(d({},F),{},{x:u.left+u.width,y:"0",width:`calc(100vw - ${u.left+u.width}px)`,height:"100%"}),null)])]):null])})}}}),Ue=[0,0],le={left:{points:["cr","cl"],offset:[-8,0]},right:{points:["cl","cr"],offset:[8,0]},top:{points:["bc","tc"],offset:[0,-8]},bottom:{points:["tc","bc"],offset:[0,8]},topLeft:{points:["bl","tl"],offset:[0,-8]},leftTop:{points:["tr","tl"],offset:[-8,0]},topRight:{points:["br","tr"],offset:[0,-8]},rightTop:{points:["tl","tr"],offset:[8,0]},bottomRight:{points:["tr","br"],offset:[0,8]},rightBottom:{points:["bl","br"],offset:[8,0]},bottomLeft:{points:["tl","bl"],offset:[0,8]},leftBottom:{points:["br","bl"],offset:[-8,0]}};function ue(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const n={};return Object.keys(le).forEach(i=>{n[i]=x(x({},le[i]),{autoArrow:e,targetOffset:Ue})}),n}ue();var Xe=function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(i[t[o]]=e[t[o]]);return i};const U={left:"50%",top:"50%",width:"1px",height:"1px"},ce=()=>{const{builtinPlacements:e,popupAlign:n}=$e();return{builtinPlacements:e,popupAlign:n,steps:Pe(),open:X(),defaultCurrent:{type:Number},current:{type:Number},onChange:N(),onClose:N(),onFinish:N(),mask:O([Boolean,Object],!0),arrow:O([Boolean,Object],!0),rootClassName:{type:String},placement:ie("bottom"),prefixCls:{type:String,default:"rc-tour"},renderPanel:N(),gap:G(),animated:O([Boolean,Object]),scrollIntoViewOptions:O([Boolean,Object],!0),zIndex:{type:Number,default:1001}}},Ge=j({name:"Tour",inheritAttrs:!1,props:Ce(ce(),{}),setup(e){const{defaultCurrent:n,placement:i,mask:t,scrollIntoViewOptions:o,open:v,gap:f,arrow:u}=q(e),h=Z(),[a,l]=ne(0,{value:C(()=>e.current),defaultValue:n.value}),[s,p]=ne(void 0,{value:C(()=>e.open),postState:c=>a.value<0||a.value>=e.steps.length?!1:c??!0}),b=xe(s.value);ae(()=>{s.value&&!b.value&&l(0),b.value=s.value});const g=C(()=>e.steps[a.value]||{}),_=C(()=>{var c;return(c=g.value.placement)!==null&&c!==void 0?c:i.value}),y=C(()=>{var c;return s.value&&((c=g.value.mask)!==null&&c!==void 0?c:t.value)}),$=C(()=>{var c;return(c=g.value.scrollIntoViewOptions)!==null&&c!==void 0?c:o.value}),[w,P]=Me(C(()=>g.value.target),v,f,$),S=C(()=>P.value?typeof g.value.arrow>"u"?u.value:g.value.arrow:!1),k=C(()=>typeof S.value=="object"?S.value.pointAtCenter:!1);V(k,()=>{var c;(c=h.value)===null||c===void 0||c.forcePopupAlign()}),V(a,()=>{var c;(c=h.value)===null||c===void 0||c.forcePopupAlign()});const I=c=>{var m;l(c),(m=e.onChange)===null||m===void 0||m.call(e,c)};return()=>{var c;const{prefixCls:m,steps:T,onClose:B,onFinish:H,rootClassName:L,renderPanel:de,animated:pe,zIndex:Q}=e,Y=Xe(e,["prefixCls","steps","onClose","onFinish","rootClassName","renderPanel","animated","zIndex"]);if(P.value===void 0)return null;const ee=()=>{p(!1),B==null||B(a.value)},ve=typeof y.value=="boolean"?y.value:!!y.value,A=typeof y.value=="boolean"?void 0:y.value,fe=()=>P.value||document.body,ge=()=>r(Fe,d({arrow:S.value,key:"content",prefixCls:m,total:T.length,renderPanel:de,onPrev:()=>{I(a.value-1)},onNext:()=>{I(a.value+1)},onClose:ee,current:a.value,onFinish:()=>{ee(),H==null||H()}},g.value),null),me=C(()=>{const M=w.value||U,W={};return Object.keys(M).forEach(E=>{typeof M[E]=="number"?W[E]=`${M[E]}px`:W[E]=M[E]}),W});return s.value?r(J,null,[r(We,{zIndex:Q,prefixCls:m,pos:w.value,showMask:ve,style:A==null?void 0:A.style,fill:A==null?void 0:A.color,open:s.value,animated:pe,rootClassName:L},null),r(we,d(d({},Y),{},{builtinPlacements:g.value.target?(c=Y.builtinPlacements)!==null&&c!==void 0?c:ue(k.value):void 0,ref:h,popupStyle:g.value.target?g.value.style:x(x({},g.value.style),{position:"fixed",left:U.left,top:U.top,transform:"translate(-50%, -50%)"}),popupPlacement:_.value,popupVisible:s.value,popupClassName:R(L,g.value.className),prefixCls:m,popup:ge,forceRender:!1,destroyPopupOnHide:!0,zIndex:Q,mask:!1,getTriggerDOMNode:fe}),{default:()=>[r(se,{visible:s.value,autoLock:!0},{default:()=>[r("div",{class:R(L,`${m}-target-placeholder`),style:x(x({},me.value),{position:"fixed",pointerEvents:"none"})},null)]})]})]):null}}}),Je=()=>x(x({},ce()),{steps:{type:Array},prefixCls:{type:String},current:{type:Number},type:{type:String},"onUpdate:current":Function}),Ze=()=>x(x({},K()),{cover:{type:Object},nextButtonProps:{type:Object},prevButtonProps:{type:Object},current:{type:Number},type:{type:String}}),qe=j({name:"ATourPanel",inheritAttrs:!1,props:Ze(),setup(e,n){let{attrs:i,slots:t}=n;const{current:o,total:v}=q(e),f=C(()=>o.value===v.value-1),u=a=>{var l;const s=e.prevButtonProps;(l=e.onPrev)===null||l===void 0||l.call(e,a),typeof(s==null?void 0:s.onClick)=="function"&&(s==null||s.onClick())},h=a=>{var l,s;const p=e.nextButtonProps;f.value?(l=e.onFinish)===null||l===void 0||l.call(e,a):(s=e.onNext)===null||s===void 0||s.call(e,a),typeof(p==null?void 0:p.onClick)=="function"&&(p==null||p.onClick())};return()=>{const{prefixCls:a,title:l,onClose:s,cover:p,description:b,type:g,arrow:_}=e,y=e.prevButtonProps,$=e.nextButtonProps;let w;l&&(w=r("div",{class:`${a}-header`},[r("div",{class:`${a}-title`},[l])]));let P;b&&(P=r("div",{class:`${a}-description`},[b]));let S;p&&(S=r("div",{class:`${a}-cover`},[p]));let k;t.indicatorsRender?k=t.indicatorsRender({current:o.value,total:v}):k=[...Array.from({length:v.value}).keys()].map((m,T)=>r("span",{key:m,class:R(T===o.value&&`${a}-indicator-active`,`${a}-indicator`)},null));const I=g==="primary"?"default":"primary",c={type:"default",ghost:g==="primary"};return r(ke,{componentName:"Tour",defaultLocale:Oe.Tour},{default:m=>{var T,B;return r("div",d(d({},i),{},{class:R(g==="primary"?`${a}-primary`:"",i.class,`${a}-content`)}),[_&&r("div",{class:`${a}-arrow`,key:"arrow"},null),r("div",{class:`${a}-inner`},[r(Se,{class:`${a}-close`,onClick:s},null),S,w,P,r("div",{class:`${a}-footer`},[v.value>1&&r("div",{class:`${a}-indicators`},[k]),r("div",{class:`${a}-buttons`},[o.value!==0?r(oe,d(d(d({},c),y),{},{onClick:u,size:"small",class:R(`${a}-prev-btn`,y==null?void 0:y.className)}),{default:()=>[(T=y==null?void 0:y.children)!==null&&T!==void 0?T:m.Previous]}):null,r(oe,d(d({type:I},$),{},{onClick:h,size:"small",class:R(`${a}-next-btn`,$==null?void 0:$.className)}),{default:()=>[(B=$==null?void 0:$.children)!==null&&B!==void 0?B:f.value?m.Finish:m.Next]})])])])])}})}}}),Ke=e=>{let{defaultType:n,steps:i,current:t,defaultCurrent:o}=e;const v=Z(o==null?void 0:o.value),f=C(()=>t==null?void 0:t.value);V(f,l=>{v.value=l??(o==null?void 0:o.value)},{immediate:!0});const u=l=>{v.value=l},h=C(()=>{var l,s;return typeof v.value=="number"?i&&((s=(l=i.value)===null||l===void 0?void 0:l[v.value])===null||s===void 0?void 0:s.type):n==null?void 0:n.value});return{currentMergedType:C(()=>{var l;return(l=h.value)!==null&&l!==void 0?l:n==null?void 0:n.value}),updateInnerCurrent:u}},Qe=e=>{const{componentCls:n,lineHeight:i,padding:t,paddingXS:o,borderRadius:v,borderRadiusXS:f,colorPrimary:u,colorText:h,colorFill:a,indicatorHeight:l,indicatorWidth:s,boxShadowTertiary:p,tourZIndexPopup:b,fontSize:g,colorBgContainer:_,fontWeightStrong:y,marginXS:$,colorTextLightSolid:w,tourBorderRadius:P,colorWhite:S,colorBgTextHover:k,tourCloseSize:I,motionDurationSlow:c,antCls:m}=e;return[{[n]:x(x({},Ne(e)),{color:h,position:"absolute",zIndex:b,display:"block",visibility:"visible",fontSize:g,lineHeight:i,width:520,"--antd-arrow-background-color":_,"&-pure":{maxWidth:"100%",position:"relative"},[`&${n}-hidden`]:{display:"none"},[`${n}-content`]:{position:"relative"},[`${n}-inner`]:{textAlign:"start",textDecoration:"none",borderRadius:P,boxShadow:p,position:"relative",backgroundColor:_,border:"none",backgroundClip:"padding-box",[`${n}-close`]:{position:"absolute",top:t,insetInlineEnd:t,color:e.colorIcon,outline:"none",width:I,height:I,borderRadius:e.borderRadiusSM,transition:`background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:e.colorIconHover,backgroundColor:e.wireframe?"transparent":e.colorFillContent}},[`${n}-cover`]:{textAlign:"center",padding:`${t+I+o}px ${t}px 0`,img:{width:"100%"}},[`${n}-header`]:{padding:`${t}px ${t}px ${o}px`,[`${n}-title`]:{lineHeight:i,fontSize:g,fontWeight:y}},[`${n}-description`]:{padding:`0 ${t}px`,lineHeight:i,wordWrap:"break-word"},[`${n}-footer`]:{padding:`${o}px ${t}px ${t}px`,textAlign:"end",borderRadius:`0 0 ${f}px ${f}px`,display:"flex",[`${n}-indicators`]:{display:"inline-block",[`${n}-indicator`]:{width:s,height:l,display:"inline-block",borderRadius:"50%",background:a,"&:not(:last-child)":{marginInlineEnd:l},"&-active":{background:u}}},[`${n}-buttons`]:{marginInlineStart:"auto",[`${m}-btn`]:{marginInlineStart:$}}}},[`${n}-primary, &${n}-primary`]:{"--antd-arrow-background-color":u,[`${n}-inner`]:{color:w,textAlign:"start",textDecoration:"none",backgroundColor:u,borderRadius:v,boxShadow:p,[`${n}-close`]:{color:w},[`${n}-indicators`]:{[`${n}-indicator`]:{background:new D(w).setAlpha(.15).toRgbString(),"&-active":{background:w}}},[`${n}-prev-btn`]:{color:w,borderColor:new D(w).setAlpha(.15).toRgbString(),backgroundColor:u,"&:hover":{backgroundColor:new D(w).setAlpha(.15).toRgbString(),borderColor:"transparent"}},[`${n}-next-btn`]:{color:u,borderColor:"transparent",background:S,"&:hover":{background:new D(k).onBackground(S).toRgbString()}}}}}),[`${n}-mask`]:{[`${n}-placeholder-animated`]:{transition:`all ${c}`}},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${n}-inner`]:{borderRadius:Math.min(P,Re)}}},_e(e,{colorBg:"var(--antd-arrow-background-color)",contentRadius:P,limitVerticalRadius:!0})]},Ye=Ie("Tour",e=>{const{borderRadiusLG:n,fontSize:i,lineHeight:t}=e,o=Te(e,{tourZIndexPopup:e.zIndexPopupBase+70,indicatorWidth:6,indicatorHeight:6,tourBorderRadius:n,tourCloseSize:i*t});return[Qe(o)]});var et=function(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(i[t[o]]=e[t[o]]);return i};const tt=j({name:"ATour",inheritAttrs:!1,props:Je(),setup(e,n){let{attrs:i,emit:t,slots:o}=n;const{current:v,type:f,steps:u,defaultCurrent:h}=q(e),{prefixCls:a,direction:l}=Ae("tour",e),[s,p]=Ye(a),{currentMergedType:b,updateInnerCurrent:g}=Ke({defaultType:f,steps:u,current:v,defaultCurrent:h});return()=>{const{steps:_,current:y,type:$,rootClassName:w}=e,P=et(e,["steps","current","type","rootClassName"]),S=R({[`${a.value}-primary`]:b.value==="primary",[`${a.value}-rtl`]:l.value==="rtl"},p.value,w),k=(m,T)=>r(qe,d(d({},m),{},{type:$,current:T}),{indicatorsRender:o.indicatorsRender}),I=m=>{g(m),t("update:current",m),t("change",m)},c=C(()=>je({arrowPointAtCenter:!0,autoAdjustOverflow:!0}));return s(r(Ge,d(d(d({},i),P),{},{rootClassName:S,prefixCls:a.value,current:y,defaultCurrent:e.defaultCurrent,animated:!0,renderPanel:k,onChange:I,steps:_,builtinPlacements:c.value}),null))}}}),ot=Be(tt);export{ot as _};
