import{a6 as N,a4 as m,f as S,P as R,a3 as z,k as Z,m as ee,_ as P,aF as ne,a9 as oe,d as V,j as X,r as te,w as ae,u as L,p as le,e as k,g as f,i as _,aG as re,as as se,aH as ie,ak as ce,s as de,ae as pe,h as ue,v as fe,T as ve}from"./index-D85MyExI.js";import{g as me,f as $e,e as ge,h as F,d as be}from"./index-_GMueuJ1.js";import{R as he}from"./index-BQlVeXUd.js";const xe=()=>({prefixCls:String,activeKey:N([Array,Number,String]),defaultActiveKey:N([Array,Number,String]),accordion:m(),destroyInactivePanel:m(),bordered:m(),expandIcon:S(),openAnimation:R.object,expandIconPosition:z(),collapsible:z(),ghost:m(),onChange:S(),"onUpdate:activeKey":S()}),q=()=>({openAnimation:R.object,prefixCls:String,header:R.any,headerClass:String,showArrow:m(),isActive:m(),destroyInactivePanel:m(),disabled:m(),accordion:m(),forceRender:m(),expandIcon:S(),extra:R.any,panelKey:N(),collapsible:z(),role:String,onItemClick:S()}),Ce=n=>{const{componentCls:e,collapseContentBg:t,padding:p,collapseContentPaddingHorizontal:i,collapseHeaderBg:c,collapseHeaderPadding:l,collapsePanelBorderRadius:u,lineWidth:v,lineType:g,colorBorder:x,colorText:C,colorTextHeading:$,colorTextDisabled:b,fontSize:y,lineHeight:h,marginSM:A,paddingSM:o,motionDurationSlow:a,fontSizeIcon:r}=n,s=`${v}px ${g} ${x}`;return{[e]:P(P({},oe(n)),{backgroundColor:c,border:s,borderBottom:0,borderRadius:`${u}px`,"&-rtl":{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:s,"&:last-child":{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${u}px ${u}px`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:l,color:$,lineHeight:h,cursor:"pointer",transition:`all ${a}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${e}-expand-icon`]:{height:y*h,display:"flex",alignItems:"center",paddingInlineEnd:A},[`${e}-arrow`]:P(P({},ne()),{fontSize:r,svg:{transition:`transform ${a}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-header-collapsible-only`]:{cursor:"default",[`${e}-header-text`]:{flex:"none",cursor:"pointer"},[`${e}-expand-icon`]:{cursor:"pointer"}},[`${e}-icon-collapsible-only`]:{cursor:"default",[`${e}-expand-icon`]:{cursor:"pointer"}},[`&${e}-no-arrow`]:{[`> ${e}-header`]:{paddingInlineStart:o}}},[`${e}-content`]:{color:C,backgroundColor:t,borderTop:s,[`& > ${e}-content-box`]:{padding:`${p}px ${i}px`},"&-hidden":{display:"none"}},[`${e}-item:last-child`]:{[`> ${e}-content`]:{borderRadius:`0 0 ${u}px ${u}px`}},[`& ${e}-item-disabled > ${e}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:b,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:A}}}}})}},ye=n=>{const{componentCls:e}=n,t=`> ${e}-item > ${e}-header ${e}-arrow svg`;return{[`${e}-rtl`]:{[t]:{transform:"rotate(180deg)"}}}},Ae=n=>{const{componentCls:e,collapseHeaderBg:t,paddingXXS:p,colorBorder:i}=n;return{[`${e}-borderless`]:{backgroundColor:t,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${i}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:p}}}},Ie=n=>{const{componentCls:e,paddingSM:t}=n;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:t}}}}}},Pe=Z("Collapse",n=>{const e=ee(n,{collapseContentBg:n.colorBgContainer,collapseHeaderBg:n.colorFillAlter,collapseHeaderPadding:`${n.paddingSM}px ${n.padding}px`,collapsePanelBorderRadius:n.borderRadiusLG,collapseContentPaddingHorizontal:16});return[Ce(e),Ae(e),Ie(e),ye(e),me(e)]});function U(n){let e=n;if(!Array.isArray(e)){const t=typeof e;e=t==="number"||t==="string"?[e]:[]}return e.map(t=>String(t))}const T=V({compatConfig:{MODE:3},name:"ACollapse",inheritAttrs:!1,props:X(xe(),{accordion:!1,destroyInactivePanel:!1,bordered:!0,expandIconPosition:"start"}),slots:Object,setup(n,e){let{attrs:t,slots:p,emit:i}=e;const c=te(U($e([n.activeKey,n.defaultActiveKey])));ae(()=>n.activeKey,()=>{c.value=U(n.activeKey)},{deep:!0});const{prefixCls:l,direction:u,rootPrefixCls:v}=L("collapse",n),[g,x]=Pe(l),C=le(()=>{const{expandIconPosition:o}=n;return o!==void 0?o:u.value==="rtl"?"end":"start"}),$=o=>{const{expandIcon:a=p.expandIcon}=n,r=a?a(o):f(he,{rotate:o.isActive?90:void 0},null);return f("div",{class:[`${l.value}-expand-icon`,x.value],onClick:()=>["header","icon"].includes(n.collapsible)&&y(o.panelKey)},[ce(Array.isArray(a)?r[0]:r)?F(r,{class:`${l.value}-arrow`},!1):r])},b=o=>{n.activeKey===void 0&&(c.value=o);const a=n.accordion?o[0]:o;i("update:activeKey",a),i("change",a)},y=o=>{let a=c.value;if(n.accordion)a=a[0]===o?[]:[o];else{a=[...a];const r=a.indexOf(o);r>-1?a.splice(r,1):a.push(o)}b(a)},h=(o,a)=>{var r,s,I;if(ie(o))return;const d=c.value,{accordion:w,destroyInactivePanel:E,collapsible:K,openAnimation:H}=n,M=H||ge(`${v.value}-motion-collapse`),B=String((r=o.key)!==null&&r!==void 0?r:a),{header:J=(I=(s=o.children)===null||s===void 0?void 0:s.header)===null||I===void 0?void 0:I.call(s),headerClass:Q,collapsible:D,disabled:W}=o.props||{};let O=!1;w?O=d[0]===B:O=d.indexOf(B)>-1;let j=D??K;(W||W==="")&&(j="disabled");const Y={key:B,panelKey:B,header:J,headerClass:Q,isActive:O,prefixCls:l.value,destroyInactivePanel:E,openAnimation:M,accordion:w,onItemClick:j==="disabled"?null:y,expandIcon:$,collapsible:j};return F(o,Y)},A=()=>{var o;return se((o=p.default)===null||o===void 0?void 0:o.call(p)).map(h)};return()=>{const{accordion:o,bordered:a,ghost:r}=n,s=k(l.value,{[`${l.value}-borderless`]:!a,[`${l.value}-icon-position-${C.value}`]:!0,[`${l.value}-rtl`]:u.value==="rtl",[`${l.value}-ghost`]:!!r,[t.class]:!!t.class},x.value);return g(f("div",_(_({class:s},re(t)),{},{style:t.style,role:o?"tablist":null}),[A()]))}}}),Se=V({compatConfig:{MODE:3},name:"PanelContent",props:q(),setup(n,e){let{slots:t}=e;const p=de(!1);return pe(()=>{(n.isActive||n.forceRender)&&(p.value=!0)}),()=>{var i;if(!p.value)return null;const{prefixCls:c,isActive:l,role:u}=n;return f("div",{class:k(`${c}-content`,{[`${c}-content-active`]:l,[`${c}-content-inactive`]:!l}),role:u},[f("div",{class:`${c}-content-box`},[(i=t.default)===null||i===void 0?void 0:i.call(t)])])}}}),G=V({compatConfig:{MODE:3},name:"ACollapsePanel",inheritAttrs:!1,props:X(q(),{showArrow:!0,isActive:!1,onItemClick(){},headerClass:"",forceRender:!1}),slots:Object,setup(n,e){let{slots:t,emit:p,attrs:i}=e;be(n.disabled===void 0,"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');const{prefixCls:c}=L("collapse",n),l=()=>{p("itemClick",n.panelKey)},u=v=>{(v.key==="Enter"||v.keyCode===13||v.which===13)&&l()};return()=>{var v,g;const{header:x=(v=t.header)===null||v===void 0?void 0:v.call(t),headerClass:C,isActive:$,showArrow:b,destroyInactivePanel:y,accordion:h,forceRender:A,openAnimation:o,expandIcon:a=t.expandIcon,extra:r=(g=t.extra)===null||g===void 0?void 0:g.call(t),collapsible:s}=n,I=s==="disabled",d=c.value,w=k(`${d}-header`,{[C]:C,[`${d}-header-collapsible-only`]:s==="header",[`${d}-icon-collapsible-only`]:s==="icon"}),E=k({[`${d}-item`]:!0,[`${d}-item-active`]:$,[`${d}-item-disabled`]:I,[`${d}-no-arrow`]:!b,[`${i.class}`]:!!i.class});let K=f("i",{class:"arrow"},null);b&&typeof a=="function"&&(K=a(n));const H=ue(f(Se,{prefixCls:d,isActive:$,forceRender:A,role:h?"tabpanel":null},{default:t.default}),[[fe,$]]),M=P({appear:!1,css:!1},o);return f("div",_(_({},i),{},{class:E}),[f("div",{class:w,onClick:()=>!["header","icon"].includes(s)&&l(),role:h?"tab":"button",tabindex:I?-1:0,"aria-expanded":$,onKeypress:u},[b&&K,f("span",{onClick:()=>s==="header"&&l(),class:`${d}-header-text`},[x]),r&&f("div",{class:`${d}-extra`},[r])]),f(ve,M,{default:()=>[!y||$?H:null]})])}}});T.Panel=G;T.install=function(n){return n.component(T.name,T),n.component(G.name,G),n};export{T as C,G as _};
