import{k as U,l as X,d as G,j as J,_ as r,r as Q,aN as Y,aq as Z,u as ee,p as j,ar as oe,as as ne,e as te,g as i,i as k,y as ae,a6 as f,a4 as le,o as I,aO as se}from"./index-BSdDcxy1.js";import{_ as ie}from"./index-CMg9c0Jg.js";import{q as re,o as ce,r as ue,s as pe,p as z,B as de}from"./index-oSfz28Wk.js";import{u as fe,K as me}from"./index-CrlCD_R0.js";import{A as ve}from"./ActionButton-C8ADpHxy.js";const ge=o=>{const{componentCls:l,iconCls:t,zIndexPopup:a,colorText:s,colorWarning:C,marginXS:p,fontSize:c,fontWeightStrong:x,lineHeight:d}=o;return{[l]:{zIndex:a,[`${l}-inner-content`]:{color:s},[`${l}-message`]:{position:"relative",marginBottom:p,color:s,fontSize:c,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${l}-message-icon ${t}`]:{color:C,fontSize:c,flex:"none",lineHeight:1,paddingTop:(Math.round(c*d)-c)/2},"&-title":{flex:"auto",marginInlineStart:p},"&-title-only":{fontWeight:x}},[`${l}-description`]:{position:"relative",marginInlineStart:c+p,marginBottom:p,color:s,fontSize:c},[`${l}-buttons`]:{textAlign:"end",button:{marginInlineStart:p}}}}},ye=U("Popconfirm",o=>ge(o),o=>{const{zIndexPopupBase:l}=o;return{zIndexPopup:l+60}});var Ce=function(o,l){var t={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&l.indexOf(a)<0&&(t[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(o);s<a.length;s++)l.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(o,a[s])&&(t[a[s]]=o[a[s]]);return t};const xe=()=>r(r({},pe()),{prefixCls:String,content:f(),title:f(),description:f(),okType:le("primary"),disabled:{type:Boolean,default:!1},okText:f(),cancelText:f(),icon:f(),okButtonProps:I(),cancelButtonProps:I(),showCancel:{type:Boolean,default:!0},onConfirm:Function,onCancel:Function}),Pe=G({compatConfig:{MODE:3},name:"APopconfirm",inheritAttrs:!1,props:J(xe(),r(r({},re()),{trigger:"click",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0,okType:"primary",disabled:!1})),slots:Object,setup(o,l){let{slots:t,emit:a,expose:s,attrs:C}=l;const p=Q();Y(o.visible===void 0),s({getPopupDomNode:()=>{var e,n;return(n=(e=p.value)===null||e===void 0?void 0:e.getPopupDomNode)===null||n===void 0?void 0:n.call(e)}});const[c,x]=fe(!1,{value:Z(o,"open")}),d=(e,n)=>{o.open===void 0&&x(e),a("update:open",e),a("openChange",e,n)},D=e=>{d(!1,e)},O=e=>{var n;return(n=o.onConfirm)===null||n===void 0?void 0:n.call(o,e)},A=e=>{var n;d(!1,e),(n=o.onCancel)===null||n===void 0||n.call(o,e)},E=e=>{e.keyCode===me.ESC&&c&&d(!1,e)},R=e=>{const{disabled:n}=o;n||d(e)},{prefixCls:u,getPrefixCls:T}=ee("popconfirm",o),F=j(()=>T()),K=j(()=>T("btn")),[L]=ye(u),[S]=oe("Popconfirm",ne.Popconfirm),V=()=>{var e,n,m,v,g;const{okButtonProps:y,cancelButtonProps:P,title:_=(e=t.title)===null||e===void 0?void 0:e.call(t),description:b=(n=t.description)===null||n===void 0?void 0:n.call(t),cancelText:W=(m=t.cancel)===null||m===void 0?void 0:m.call(t),okText:q=(v=t.okText)===null||v===void 0?void 0:v.call(t),okType:h,icon:B=((g=t.icon)===null||g===void 0?void 0:g.call(t))||i(se,null,null),showCancel:H=!0}=o,{cancelButton:N,okButton:w}=t,$=r({onClick:A,size:"small"},P),M=r(r(r({onClick:O},z(h)),{size:"small"}),y);return i("div",{class:`${u.value}-inner-content`},[i("div",{class:`${u.value}-message`},[B&&i("span",{class:`${u.value}-message-icon`},[B]),i("div",{class:[`${u.value}-message-title`,{[`${u.value}-message-title-only`]:!!b}]},[_])]),b&&i("div",{class:`${u.value}-description`},[b]),i("div",{class:`${u.value}-buttons`},[H?N?N($):i(de,$,{default:()=>[W||S.value.cancelText]}):null,w?w(M):i(ve,{buttonProps:r(r({size:"small"},z(h)),y),actionFn:O,close:D,prefixCls:K.value,quitOnNullishReturnValue:!0,emitEvent:!0},{default:()=>[q||S.value.okText]})])])};return()=>{var e;const{placement:n,overlayClassName:m,trigger:v="click"}=o,g=Ce(o,["placement","overlayClassName","trigger"]),y=ce(g,["title","content","cancelText","okText","onUpdate:open","onConfirm","onCancel","prefixCls"]),P=te(u.value,m);return L(i(ie,k(k(k({},y),C),{},{trigger:v,placement:n,onOpenChange:R,open:c.value,overlayClassName:P,transitionName:ae(F.value,"zoom-big",o.transitionName),ref:p,"data-popover-inject":!0}),{default:()=>[ue(((e=t.default)===null||e===void 0?void 0:e.call(t))||[],{onKeydown:_=>{E(_)}},!1)],content:V}))}}}),Se=X(Pe);export{Se as _};