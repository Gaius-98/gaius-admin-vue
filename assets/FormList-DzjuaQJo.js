import{a as Ne}from"./form-CRo69Le6.js";import{r as O,S as ae,_ as c,b as be,t as Qe,q as Je,s as J,p as d,d as se,w as le,az as qe,g as i,i as A,N as pe,e as ee,c as Ge,a8 as et,P as tt,k as ot,aI as re,m as je,a9 as nt,a5 as it,C as at,u as Be,y as _e,b5 as lt,b4 as rt,ap as st,D as R,E as oe,J as h,Q as W,V as ut,K as he,I as ne,X as ct,W as Oe,ar as pt,ao as vt,F as dt}from"./index-SGSUymbp.js";import{g as mt,f as ft,h as gt,i as wt,C as Ct,_ as yt,a as ht,j as _t,b as bt}from"./index-DAMu46su.js";import{R as xt,a as St,Z as Pt,b as It,S as $e,D as kt,E as Mt,c as Nt}from"./DownloadOutlined-DDoflKiV.js";import{O as Ot,Q as $t,w as Ee,K as ie,S as Dt,U as At,I as Lt,_ as jt,B as Et,F as Tt}from"./index-DMpRLJun.js";import{g as zt,b as Fe,_ as Rt,a as Gt,c as Bt}from"./index-CroPWWXn.js";import{u as Ue,K as Te,R as Ft,T as Ut}from"./index-tBVD3xYT.js";import{L as Yt}from"./FolderOutlined-DPBeyiNR.js";import"./index-C2Za34w6.js";import"./PlusOutlined-Brua8zgw.js";var Vt="[object Number]";function Xt(e){return typeof e=="number"||Ot(e)&&$t(e)==Vt}function Wt(e){const n=O(null),a=ae(c({},e)),t=O([]),o=u=>{n.value===null&&(t.value=[],n.value=Ee(()=>{let v;t.value.forEach(g=>{v=c(c({},v),g)}),c(a,v),n.value=null})),t.value.push(u)};return be(()=>{n.value&&Ee.cancel(n.value)}),[a,o]}function ze(e,n,a,t){const o=n+a,u=(a-t)/2;if(a>t){if(n>0)return{[e]:u};if(n<0&&o<t)return{[e]:-u}}else if(n<0||o>t)return{[e]:n<0?u:-u};return{}}function Zt(e,n,a,t){const{width:o,height:u}=zt();let v=null;return e<=o&&n<=u?v={x:0,y:0}:(e>o||n>u)&&(v=c(c({},ze("x",a,e,o)),ze("y",t,n,u))),v}var Ht=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const Re=Symbol("previewGroupContext"),Ae={provide:e=>{Qe(Re,e)},inject:()=>Je(Re,{isPreviewGroup:J(!1),previewUrls:d(()=>new Map),setPreviewUrls:()=>{},current:O(null),setCurrent:()=>{},setShowPreview:()=>{},setMousePosition:()=>{},registerImage:null,rootClassName:""})},Kt=()=>({previewPrefixCls:String,preview:{type:[Boolean,Object],default:!0},icons:{type:Object,default:()=>({})}}),Qt=se({compatConfig:{MODE:3},name:"PreviewGroup",inheritAttrs:!1,props:Kt(),setup(e,n){let{slots:a}=n;const t=d(()=>{const l={visible:void 0,onVisibleChange:()=>{},getContainer:void 0,current:0};return typeof e.preview=="object"?We(e.preview,l):l}),o=ae(new Map),u=O(),v=d(()=>t.value.visible),g=d(()=>t.value.getContainer),k=(l,M)=>{var I,$;($=(I=t.value).onVisibleChange)===null||$===void 0||$.call(I,l,M)},[x,f]=Ue(!!v.value,{value:v,onChange:k}),w=O(null),L=d(()=>v.value!==void 0),C=d(()=>Array.from(o.keys())),S=d(()=>C.value[t.value.current]),P=d(()=>new Map(Array.from(o).filter(l=>{let[,{canPreview:M}]=l;return!!M}).map(l=>{let[M,{url:I}]=l;return[M,I]}))),p=function(l,M){let I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;o.set(l,{url:M,canPreview:I})},m=l=>{u.value=l},_=l=>{w.value=l},j=function(l,M){let I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const $=()=>{o.delete(l)};return o.set(l,{url:M,canPreview:I}),$},b=l=>{l==null||l.stopPropagation(),f(!1),_(null)};return le(S,l=>{m(l)},{immediate:!0,flush:"post"}),qe(()=>{x.value&&L.value&&m(S.value)},{flush:"post"}),Ae.provide({isPreviewGroup:J(!0),previewUrls:P,setPreviewUrls:p,current:u,setCurrent:m,setShowPreview:f,setMousePosition:_,registerImage:j}),()=>{const l=Ht(t.value,[]);return i(pe,null,[a.default&&a.default(),i(Ve,A(A({},l),{},{"ria-hidden":!x.value,visible:x.value,prefixCls:e.previewPrefixCls,onClose:b,mousePosition:w.value,src:P.value.get(u.value),icons:e.icons,getContainer:g.value}),null)])}}}),Ye=Qt,Q={x:0,y:0},Jt=c(c({},mt()),{src:String,alt:String,rootClassName:String,icons:{type:Object,default:()=>({})}}),Ve=se({compatConfig:{MODE:3},name:"Preview",inheritAttrs:!1,props:Jt,emits:["close","afterClose"],setup(e,n){let{emit:a,attrs:t}=n;const{rotateLeft:o,rotateRight:u,zoomIn:v,zoomOut:g,close:k,left:x,right:f,flipX:w,flipY:L}=ae(e.icons),C=J(1),S=J(0),P=ae({x:1,y:1}),[p,m]=Wt(Q),_=()=>a("close"),j=J(),b=ae({originX:0,originY:0,deltaX:0,deltaY:0}),l=J(!1),M=Ae.inject(),{previewUrls:I,current:$,isPreviewGroup:Z,setCurrent:D}=M,B=d(()=>I.value.size),U=d(()=>Array.from(I.value.keys())),N=d(()=>U.value.indexOf($.value)),te=d(()=>Z.value?I.value.get($.value):e.src),G=d(()=>Z.value&&B.value>1),F=J({wheelDirection:0}),y=()=>{C.value=1,S.value=0,P.x=1,P.y=1,m(Q),a("afterClose")},s=r=>{r?C.value+=.5:C.value++,m(Q)},E=r=>{C.value>1&&(r?C.value-=.5:C.value--),m(Q)},T=()=>{S.value+=90},H=()=>{S.value-=90},ve=()=>{P.x=-P.x},xe=()=>{P.y=-P.y},de=r=>{r.preventDefault(),r.stopPropagation(),N.value>0&&D(U.value[N.value-1])},me=r=>{r.preventDefault(),r.stopPropagation(),N.value<B.value-1&&D(U.value[N.value+1])},ue=ee({[`${e.prefixCls}-moving`]:l.value}),Se=`${e.prefixCls}-operations-operation`,Pe=`${e.prefixCls}-operations-icon`,fe=[{icon:k,onClick:_,type:"close"},{icon:v,onClick:()=>s(),type:"zoomIn"},{icon:g,onClick:()=>E(),type:"zoomOut",disabled:d(()=>C.value===1)},{icon:u,onClick:T,type:"rotateRight"},{icon:o,onClick:H,type:"rotateLeft"},{icon:w,onClick:ve,type:"flipX"},{icon:L,onClick:xe,type:"flipY"}],ge=()=>{if(e.visible&&l.value){const r=j.value.offsetWidth*C.value,z=j.value.offsetHeight*C.value,{left:Y,top:K}=Fe(j.value),V=S.value%180!==0;l.value=!1;const X=Zt(V?z:r,V?r:z,Y,K);X&&m(c({},X))}},Ie=r=>{r.button===0&&(r.preventDefault(),r.stopPropagation(),b.deltaX=r.pageX-p.x,b.deltaY=r.pageY-p.y,b.originX=p.x,b.originY=p.y,l.value=!0)},we=r=>{e.visible&&l.value&&m({x:r.pageX-b.deltaX,y:r.pageY-b.deltaY})},ke=r=>{if(!e.visible)return;r.preventDefault();const z=r.deltaY;F.value={wheelDirection:z}},Me=r=>{!e.visible||!G.value||(r.preventDefault(),r.keyCode===Te.LEFT?N.value>0&&D(U.value[N.value-1]):r.keyCode===Te.RIGHT&&N.value<B.value-1&&D(U.value[N.value+1]))},Ce=()=>{e.visible&&(C.value!==1&&(C.value=1),(p.x!==Q.x||p.y!==Q.y)&&m(Q))};let ce=()=>{};return be(()=>{le([()=>e.visible,l],()=>{ce();let r,z;const Y=ie(window,"mouseup",ge,!1),K=ie(window,"mousemove",we,!1),V=ie(window,"wheel",ke,{passive:!1}),X=ie(window,"keydown",Me,!1);try{window.top!==window.self&&(r=ie(window.top,"mouseup",ge,!1),z=ie(window.top,"mousemove",we,!1))}catch{}ce=()=>{Y.remove(),K.remove(),V.remove(),X.remove(),r&&r.remove(),z&&z.remove()}},{flush:"post",immediate:!0}),le([F],()=>{const{wheelDirection:r}=F.value;r>0?E(!0):r<0&&s(!0)})}),Ge(()=>{ce()}),()=>{const{visible:r,prefixCls:z,rootClassName:Y}=e;return i(ft,A(A({},t),{},{transitionName:e.transitionName,maskTransitionName:e.maskTransitionName,closable:!1,keyboard:!0,prefixCls:z,onClose:_,afterClose:y,visible:r,wrapClassName:ue,rootClassName:Y,getContainer:e.getContainer}),{default:()=>[i("div",{class:[`${e.prefixCls}-operations-wrapper`,Y]},[i("ul",{class:`${e.prefixCls}-operations`},[fe.map(K=>{let{icon:V,onClick:X,type:Le,disabled:ye}=K;return i("li",{class:ee(Se,{[`${e.prefixCls}-operations-operation-disabled`]:ye&&(ye==null?void 0:ye.value)}),onClick:X,key:Le},[et(V,{class:Pe})])})])]),i("div",{class:`${e.prefixCls}-img-wrapper`,style:{transform:`translate3d(${p.x}px, ${p.y}px, 0)`}},[i("img",{onMousedown:Ie,onDblclick:Ce,ref:j,class:`${e.prefixCls}-img`,src:te.value,alt:e.alt,style:{transform:`scale3d(${P.x*C.value}, ${P.y*C.value}, 1) rotate(${S.value}deg)`}},null)]),G.value&&i("div",{class:ee(`${e.prefixCls}-switch-left`,{[`${e.prefixCls}-switch-left-disabled`]:N.value<=0}),onClick:de},[x]),G.value&&i("div",{class:ee(`${e.prefixCls}-switch-right`,{[`${e.prefixCls}-switch-right-disabled`]:N.value>=B.value-1}),onClick:me},[f])]})}}});var qt=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const Xe=()=>({src:String,wrapperClassName:String,wrapperStyle:{type:Object,default:void 0},rootClassName:String,prefixCls:String,previewPrefixCls:String,previewMask:{type:[Boolean,Function],default:void 0},placeholder:tt.any,fallback:String,preview:{type:[Boolean,Object],default:!0},onClick:{type:Function},onError:{type:Function}}),We=(e,n)=>{const a=c({},e);return Object.keys(n).forEach(t=>{e[t]===void 0&&(a[t]=n[t])}),a};let eo=0;const Ze=se({compatConfig:{MODE:3},name:"VcImage",inheritAttrs:!1,props:Xe(),emits:["click","error"],setup(e,n){let{attrs:a,slots:t,emit:o}=n;const u=d(()=>e.prefixCls),v=d(()=>`${u.value}-preview`),g=d(()=>{const s={visible:void 0,onVisibleChange:()=>{},getContainer:void 0};return typeof e.preview=="object"?We(e.preview,s):s}),k=d(()=>{var s;return(s=g.value.src)!==null&&s!==void 0?s:e.src}),x=d(()=>e.placeholder&&e.placeholder!==!0||t.placeholder),f=d(()=>g.value.visible),w=d(()=>g.value.getContainer),L=d(()=>f.value!==void 0),C=(s,E)=>{var T,H;(H=(T=g.value).onVisibleChange)===null||H===void 0||H.call(T,s,E)},[S,P]=Ue(!!f.value,{value:f,onChange:C}),p=O(x.value?"loading":"normal");le(()=>e.src,()=>{p.value=x.value?"loading":"normal"});const m=O(null),_=d(()=>p.value==="error"),j=Ae.inject(),{isPreviewGroup:b,setCurrent:l,setShowPreview:M,setMousePosition:I,registerImage:$}=j,Z=O(eo++),D=d(()=>e.preview&&!_.value),B=()=>{p.value="normal"},U=s=>{p.value="error",o("error",s)},N=s=>{if(!L.value){const{left:E,top:T}=Fe(s.target);b.value?(l(Z.value),I({x:E,y:T})):m.value={x:E,y:T}}b.value?M(!0):P(!0),o("click",s)},te=()=>{P(!1),L.value||(m.value=null)},G=O(null);le(()=>G,()=>{p.value==="loading"&&G.value.complete&&(G.value.naturalWidth||G.value.naturalHeight)&&B()});let F=()=>{};be(()=>{le([k,D],()=>{if(F(),!b.value)return()=>{};F=$(Z.value,k.value,D.value),D.value||F()},{flush:"post",immediate:!0})}),Ge(()=>{F()});const y=s=>Xt(s)?s+"px":s;return()=>{const{prefixCls:s,wrapperClassName:E,fallback:T,src:H,placeholder:ve,wrapperStyle:xe,rootClassName:de}=e,{width:me,height:ue,crossorigin:Se,decoding:Pe,alt:fe,sizes:ge,srcset:Ie,usemap:we,class:ke,style:Me}=a,Ce=g.value,{icons:ce,maskClassName:r}=Ce,z=qt(Ce,["icons","maskClassName"]),Y=ee(s,E,de,{[`${s}-error`]:_.value}),K=_.value&&T?T:k.value,V={crossorigin:Se,decoding:Pe,alt:fe,sizes:ge,srcset:Ie,usemap:we,width:me,height:ue,class:ee(`${s}-img`,{[`${s}-img-placeholder`]:ve===!0},ke),style:c({height:y(ue)},Me)};return i(pe,null,[i("div",{class:Y,onClick:D.value?N:X=>{o("click",X)},style:c({width:y(me),height:y(ue)},xe)},[i("img",A(A(A({},V),_.value&&T?{src:T}:{onLoad:B,onError:U,src:H}),{},{ref:G}),null),p.value==="loading"&&i("div",{"aria-hidden":"true",class:`${s}-placeholder`},[ve||t.placeholder&&t.placeholder()]),t.previewMask&&D.value&&i("div",{class:[`${s}-mask`,r]},[t.previewMask()])]),!b.value&&D.value&&i(Ve,A(A({},z),{},{"aria-hidden":!S.value,visible:S.value,prefixCls:v.value,onClose:te,mousePosition:m.value,src:K,alt:fe,getContainer:w.value,icons:ce,rootClassName:de}),null)])}}});Ze.PreviewGroup=Ye;const to=Ze,De=e=>({position:e||"absolute",inset:0}),oo=e=>{const{iconCls:n,motionDurationSlow:a,paddingXXS:t,marginXXS:o,prefixCls:u}=e;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",background:new re("#000").setAlpha(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${a}`,[`.${u}-mask-info`]:c(c({},nt),{padding:`0 ${t}px`,[n]:{marginInlineEnd:o,svg:{verticalAlign:"baseline"}}})}},no=e=>{const{previewCls:n,modalMaskBg:a,paddingSM:t,previewOperationColorDisabled:o,motionDurationSlow:u}=e,v=new re(a).setAlpha(.1),g=v.clone().setAlpha(.2);return{[`${n}-operations`]:c(c({},it(e)),{display:"flex",flexDirection:"row-reverse",alignItems:"center",color:e.previewOperationColor,listStyle:"none",background:v.toRgbString(),pointerEvents:"auto","&-operation":{marginInlineStart:t,padding:t,cursor:"pointer",transition:`all ${u}`,userSelect:"none","&:hover":{background:g.toRgbString()},"&-disabled":{color:o,pointerEvents:"none"},"&:last-of-type":{marginInlineStart:0}},"&-progress":{position:"absolute",left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%)"},"&-icon":{fontSize:e.previewOperationSize}})}},io=e=>{const{modalMaskBg:n,iconCls:a,previewOperationColorDisabled:t,previewCls:o,zIndexPopup:u,motionDurationSlow:v}=e,g=new re(n).setAlpha(.1),k=g.clone().setAlpha(.2);return{[`${o}-switch-left, ${o}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:u+1,display:"flex",alignItems:"center",justifyContent:"center",width:e.imagePreviewSwitchSize,height:e.imagePreviewSwitchSize,marginTop:-e.imagePreviewSwitchSize/2,color:e.previewOperationColor,background:g.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${v}`,pointerEvents:"auto",userSelect:"none","&:hover":{background:k.toRgbString()},"&-disabled":{"&, &:hover":{color:t,background:"transparent",cursor:"not-allowed",[`> ${a}`]:{cursor:"not-allowed"}}},[`> ${a}`]:{fontSize:e.previewOperationSize}},[`${o}-switch-left`]:{insetInlineStart:e.marginSM},[`${o}-switch-right`]:{insetInlineEnd:e.marginSM}}},ao=e=>{const{motionEaseOut:n,previewCls:a,motionDurationSlow:t,componentCls:o}=e;return[{[`${o}-preview-root`]:{[a]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${a}-body`]:c(c({},De()),{overflow:"hidden"}),[`${a}-img`]:{maxWidth:"100%",maxHeight:"100%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${t} ${n} 0s`,userSelect:"none",pointerEvents:"auto","&-wrapper":c(c({},De()),{transition:`transform ${t} ${n} 0s`,display:"flex",justifyContent:"center",alignItems:"center","&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${a}-moving`]:{[`${a}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${o}-preview-root`]:{[`${a}-wrap`]:{zIndex:e.zIndexPopup}}},{[`${o}-preview-operations-wrapper`]:{position:"fixed",insetBlockStart:0,insetInlineEnd:0,zIndex:e.zIndexPopup+1,width:"100%"},"&":[no(e),io(e)]}]},lo=e=>{const{componentCls:n}=e;return{[n]:{position:"relative",display:"inline-block",[`${n}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${n}-img-placeholder`]:{backgroundColor:e.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${n}-mask`]:c({},oo(e)),[`${n}-mask:hover`]:{opacity:1},[`${n}-placeholder`]:c({},De())}}},ro=e=>{const{previewCls:n}=e;return{[`${n}-root`]:Dt(e,"zoom"),"&":wt(e,!0)}},He=ot("Image",e=>{const n=`${e.componentCls}-preview`,a=je(e,{previewCls:n,modalMaskBg:new re("#000").setAlpha(.45).toRgbString(),imagePreviewSwitchSize:e.controlHeightLG});return[lo(a),ao(a),gt(je(a,{componentCls:n})),ro(a)]},e=>({zIndexPopup:e.zIndexPopupBase+80,previewOperationColor:new re(e.colorTextLightSolid).toRgbString(),previewOperationColorDisabled:new re(e.colorTextLightSolid).setAlpha(.25).toRgbString(),previewOperationSize:e.fontSizeIcon*1.5})),Ke={rotateLeft:i(xt,null,null),rotateRight:i(St,null,null),zoomIn:i(Pt,null,null),zoomOut:i(It,null,null),close:i(at,null,null),left:i(Yt,null,null),right:i(Ft,null,null),flipX:i($e,null,null),flipY:i($e,{rotate:90},null)},so=()=>({previewPrefixCls:String,preview:lt()}),uo=se({compatConfig:{MODE:3},name:"AImagePreviewGroup",inheritAttrs:!1,props:so(),setup(e,n){let{attrs:a,slots:t}=n;const{prefixCls:o,rootPrefixCls:u}=Be("image",e),v=d(()=>`${o.value}-preview`),[g,k]=He(o),x=d(()=>{const{preview:f}=e;if(f===!1)return f;const w=typeof f=="object"?f:{};return c(c({},w),{rootClassName:k.value,transitionName:_e(u.value,"zoom",w.transitionName),maskTransitionName:_e(u.value,"fade",w.maskTransitionName)})});return()=>g(i(Ye,A(A({},c(c({},a),e)),{},{preview:x.value,icons:Ke,previewPrefixCls:v.value}),t))}}),co=uo,q=se({name:"AImage",inheritAttrs:!1,props:Xe(),setup(e,n){let{slots:a,attrs:t}=n;const{prefixCls:o,rootPrefixCls:u,configProvider:v}=Be("image",e),[g,k]=He(o),x=d(()=>{const{preview:f}=e;if(f===!1)return f;const w=typeof f=="object"?f:{};return c(c({icons:Ke},w),{transitionName:_e(u.value,"zoom",w.transitionName),maskTransitionName:_e(u.value,"fade",w.maskTransitionName)})});return()=>{var f,w;const L=((w=(f=v.locale)===null||f===void 0?void 0:f.value)===null||w===void 0?void 0:w.Image)||rt.Image,C=()=>i("div",{class:`${o.value}-mask-info`},[i(At,null,null),L==null?void 0:L.preview]),{previewMask:S=a.previewMask||C}=e;return g(i(to,A(A({},c(c(c({},t),e),{prefixCls:o.value})),{},{preview:x.value,rootClassName:ee(e.rootClassName,k.value)}),c(c({},a),{previewMask:typeof S=="function"?S:null})))}}});q.PreviewGroup=co;q.install=function(e){return e.component(q.name,q),e.component(q.PreviewGroup.name,q.PreviewGroup),e};const po={class:"form"},vo={class:"tools"},mo={key:1},fo={key:0,class:"contain"},go=se({__name:"FormList",setup(e){const n=st(),a=O([{title:"表单名称",key:"name",dataIndex:"name"},{title:"预览图",key:"img",dataIndex:"img",width:150},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"备注",key:"description",dataIndex:"description"},{title:"操作",key:"action",dataIndex:"action"}]),t=ae({keyword:"",pageNumber:1,pageSize:10}),o=O([]),u=O(0),v=O(!1),g=O(),k=()=>{var p;(p=g.value)==null||p.resetFields(),w()},x=O("form"),f=()=>{x.value=="form"?x.value="visual":x.value="form"},w=()=>{v.value=!0,Ne.getList(t).then(p=>{const{code:m,data:_}=p;m==200&&(o.value=_.data,u.value=_.total),v.value=!1})},L=()=>{n.push({path:"/low-code/form"})},C=p=>{n.push({path:"/low-code/form",query:{id:p}})},S=p=>{Ne.remove(p).then(m=>{const{code:_}=m;_==200&&w()})},P=(p,m)=>{Ne.getTemplate(p).then(_=>{const{code:j,data:b,msg:l}=_;j==200&&pt(b,m,"vue")})};return be(()=>{w()}),(p,m)=>{const _=Lt,j=jt,b=yt,l=Et,M=ht,I=Tt,$=Ct,Z=vt,D=q,B=Rt,U=_t,N=Ut,te=bt,G=Gt,F=Bt;return R(),oe("div",po,[i($,{class:"search-area"},{default:h(()=>[i(I,{ref_key:"searchFormRef",ref:g,model:t,onFinish:w},{default:h(()=>[i(M,{gutter:24},{default:h(()=>[i(b,{span:4},{default:h(()=>[i(j,{label:"表单名称",name:"keyword"},{default:h(()=>[i(_,{value:t.keyword,"onUpdate:value":m[0]||(m[0]=y=>t.keyword=y)},null,8,["value"])]),_:1})]),_:1}),i(b,{span:4,style:{"text-align":"right"}},{default:h(()=>[i(l,{type:"primary","html-type":"submit"},{default:h(()=>[W("搜索")]),_:1}),i(l,{style:{margin:"0 8px"},onClick:k},{default:h(()=>[W(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),i($,null,{default:h(()=>[ut("div",vo,[i(l,{type:"primary",onClick:L},{default:h(()=>[W("新增")]),_:1}),i(l,{onClick:f,type:"link",style:{float:"right"}},{default:h(()=>[i(he($e))]),_:1})]),o.value.length===0?(R(),ne(Z,{key:0})):(R(),oe("div",mo,[x.value=="visual"?(R(),oe("div",fo,[(R(!0),oe(pe,null,ct(o.value,y=>(R(),ne($,{hoverable:!0,key:y.id},{cover:h(()=>[i(D,{src:y.img,height:"130px"},null,8,["src"])]),actions:h(()=>[i(he(kt),{key:"download",onClick:s=>P(y.id,y.name),title:"下载"},null,8,["onClick"]),i(he(Mt),{key:"edit",title:"编辑",onClick:s=>C(y.id)},null,8,["onClick"]),i(B,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:s=>S(y.id)},{default:h(()=>[i(he(Nt),{key:"delete",title:"删除"})]),_:2},1032,["onConfirm"])]),default:h(()=>[i(U,{title:y.name,description:y.description},null,8,["title","description"])]),_:2},1024))),128))])):(R(),ne(G,{key:1,columns:a.value,"data-source":o.value,pagination:!1,scroll:{y:470}},{bodyCell:h(({column:y,record:s})=>[y.key=="status"?(R(),oe(pe,{key:0},[s.status?(R(),ne(N,{key:0,color:"#87d068"},{default:h(()=>[W("启用")]),_:1})):(R(),ne(N,{key:1,color:"#f50"},{default:h(()=>[W("停用")]),_:1}))],64)):Oe("",!0),y.key=="action"?(R(),oe(pe,{key:1},[i(l,{type:"link",onClick:E=>P(s.id,s.name)},{default:h(()=>[W("下载")]),_:2},1032,["onClick"]),i(te,{type:"vertical"}),i(l,{type:"link",onClick:E=>C(s.id)},{default:h(()=>[W("编辑")]),_:2},1032,["onClick"]),i(te,{type:"vertical"}),i(B,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:E=>S(s.id)},{default:h(()=>[i(l,{type:"link",danger:""},{default:h(()=>[W("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):Oe("",!0),y.key=="img"?(R(),ne(D,{key:2,src:s.img,height:"100px",width:"100%"},null,8,["src"])):Oe("",!0)]),_:1},8,["columns","data-source"]))])),i(F,{style:{display:"flex","justify-content":"flex-end"},current:t.pageNumber,"onUpdate:current":m[1]||(m[1]=y=>t.pageNumber=y),total:u.value,"show-less-items":""},null,8,["current","total"])]),_:1})])}}}),ko=dt(go,[["__scopeId","data-v-3a252a59"]]);export{ko as default};
