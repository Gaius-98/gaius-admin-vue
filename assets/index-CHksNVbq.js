import{m as U,p as Y,_ as x,aL as Z,u as ee,z as te,d as j,s as w,x as B,t as F,d3 as re,w as T,n as G,b as ae,C as H,g as m,i as C,P as ne,aC as oe,b2 as se,bv as ie}from"./index-BpUqFkTU.js";import{u as le}from"./useBreakpoint-CTe6NnWW.js";import{R as ce}from"./index-BTySQpdJ.js";import{e as ue}from"./index--CIbWw6l.js";import{_ as de}from"./index-BxD2BrFi.js";const pe=e=>{const{antCls:n,componentCls:a,iconCls:r,avatarBg:o,avatarColor:S,containerSize:i,containerSizeLG:c,containerSizeSM:f,textFontSize:p,textFontSizeLG:u,textFontSizeSM:A,borderRadius:b,borderRadiusLG:s,borderRadiusSM:z,lineWidth:g,lineType:h}=e,d=(v,t,l)=>({width:v,height:v,lineHeight:`${v-g*2}px`,borderRadius:"50%",[`&${a}-square`]:{borderRadius:l},[`${a}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${a}-icon`]:{fontSize:t,[`> ${r}`]:{margin:0}}});return{[a]:x(x(x(x({},Z(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:S,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:o,border:`${g}px ${h} transparent`,"&-image":{background:"transparent"},[`${n}-image-img`]:{display:"block"}}),d(i,p,b)),{"&-lg":x({},d(c,u,s)),"&-sm":x({},d(f,A,z)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},ge=e=>{const{componentCls:n,groupBorderColor:a,groupOverlapping:r,groupSpace:o}=e;return{[`${n}-group`]:{display:"inline-flex",[`${n}`]:{borderColor:a},"> *:not(:first-child)":{marginInlineStart:r}},[`${n}-group-popover`]:{[`${n} + ${n}`]:{marginInlineStart:o}}}},E=U("Avatar",e=>{const{colorTextLightSolid:n,colorTextPlaceholder:a}=e,r=Y(e,{avatarBg:a,avatarColor:n});return[pe(r),ge(r)]},e=>{const{controlHeight:n,controlHeightLG:a,controlHeightSM:r,fontSize:o,fontSizeLG:S,fontSizeXL:i,fontSizeHeading3:c,marginXS:f,marginXXS:p,colorBorderBg:u}=e;return{containerSize:n,containerSizeLG:a,containerSizeSM:r,textFontSize:Math.round((S+i)/2),textFontSizeLG:c,textFontSizeSM:o,groupSpace:p,groupOverlapping:-f,groupBorderColor:u}}),I=Symbol("AvatarContextKey"),ve=()=>ee(I,{}),fe=e=>te(I,e),me=()=>({prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:()=>"default"},src:String,srcset:String,icon:ne.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}),R=j({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:me(),slots:Object,setup(e,n){let{slots:a,attrs:r}=n;const o=w(!0),S=w(!1),i=w(1),c=w(null),f=w(null),{prefixCls:p}=B("avatar",e),[u,A]=E(p),b=ve(),s=F(()=>e.size==="default"?b.size:e.size),z=le(),g=ue(()=>{if(typeof e.size!="object")return;const t=re.find($=>z.value[$]);return e.size[t]}),h=t=>g.value?{width:`${g.value}px`,height:`${g.value}px`,lineHeight:`${g.value}px`,fontSize:`${t?g.value/2:18}px`}:{},d=()=>{if(!c.value||!f.value)return;const t=c.value.offsetWidth,l=f.value.offsetWidth;if(t!==0&&l!==0){const{gap:$=4}=e;$*2<l&&(i.value=l-$*2<t?(l-$*2)/t:1)}},v=()=>{const{loadError:t}=e;(t==null?void 0:t())!==!1&&(o.value=!1)};return T(()=>e.src,()=>{G(()=>{o.value=!0,i.value=1})}),T(()=>e.gap,()=>{G(()=>{d()})}),ae(()=>{G(()=>{d(),S.value=!0})}),()=>{var t,l;const{shape:$,src:O,alt:N,srcset:W,draggable:X,crossOrigin:D}=e,K=(t=b.shape)!==null&&t!==void 0?t:$,P=H(a,e,"icon"),y=p.value,q={[`${r.class}`]:!!r.class,[y]:!0,[`${y}-lg`]:s.value==="large",[`${y}-sm`]:s.value==="small",[`${y}-${K}`]:!0,[`${y}-image`]:O&&o.value,[`${y}-icon`]:P,[A.value]:!0},V=typeof s.value=="number"?{width:`${s.value}px`,height:`${s.value}px`,lineHeight:`${s.value}px`,fontSize:P?`${s.value/2}px`:"18px"}:{},M=(l=a.default)===null||l===void 0?void 0:l.call(a);let k;if(O&&o.value)k=m("img",{draggable:X,src:O,srcset:W,onError:v,alt:N,crossorigin:D},null);else if(P)k=P;else if(S.value||i.value!==1){const _=`scale(${i.value}) translateX(-50%)`,J={msTransform:_,WebkitTransform:_,transform:_},Q=typeof s.value=="number"?{lineHeight:`${s.value}px`}:{};k=m(ce,{onResize:d},{default:()=>[m("span",{class:`${y}-string`,ref:c,style:x(x({},Q),J)},[M])]})}else k=m("span",{class:`${y}-string`,ref:c,style:{opacity:0}},[M]);return u(m("span",C(C({},r),{},{ref:f,class:q,style:[V,h(!!P),r.style]}),[k]))}}}),Se=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),L=j({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:Se(),setup(e,n){let{slots:a,attrs:r}=n;const{prefixCls:o,direction:S}=B("avatar",e),i=F(()=>`${o.value}-group`),[c,f]=E(o);return oe(()=>{const p={size:e.size,shape:e.shape};fe(p)}),()=>{const{maxPopoverPlacement:p="top",maxCount:u,maxStyle:A,maxPopoverTrigger:b="hover",shape:s}=e,z={[i.value]:!0,[`${i.value}-rtl`]:S.value==="rtl",[`${r.class}`]:!!r.class,[f.value]:!0},g=H(a,e),h=se(g).map((v,t)=>ie(v,{key:`avatar-key-${t}`})),d=h.length;if(u&&u<d){const v=h.slice(0,u),t=h.slice(u,d);return v.push(m(de,{key:"avatar-popover-key",content:t,trigger:b,placement:p,overlayClassName:`${i.value}-popover`},{default:()=>[m(R,{style:A,shape:s},{default:()=>[`+${d-u}`]})]})),c(m("div",C(C({},r),{},{class:z,style:r.style}),[v]))}return c(m("div",C(C({},r),{},{class:z,style:r.style}),[h]))}}});R.Group=L;R.install=function(e){return e.component(R.name,R),e.component(L.name,L),e};export{R as A};