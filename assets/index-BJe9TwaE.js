import{d5 as Oe,d6 as ot,d7 as It,d8 as St,d9 as Ct,u as ae,z as ce,t as m,d as Z,_ as p,aX as je,y as ye,s as z,F as he,w as G,b2 as lt,g as f,i as B,bv as De,bP as xt,P as Ie,o as _e,bH as it,K as Mt,bu as at,bo as ke,A as wt,e as Se,aH as Kt,r as L,T as Pt,h as Ot,v as kt,da as Ne,R as Ee,C as rt,bx as Tt,bf as Bt,m as Et,p as Ve,aM as We,b$ as At,bW as Dt,bS as Xe,aL as _t,c0 as Rt,x as Ht,b as zt,aC as Te,Q as be,bX as Ft,db as Lt}from"./index-BpUqFkTU.js";import{O as fe,n as Ge,q as ve}from"./index-Cz9sCY-M.js";import{E as jt}from"./EllipsisOutlined-Dh84clB6.js";function Nt(){}var Vt=1/0,Wt=Oe&&1/ot(new Oe([,-0]))[1]==Vt?function(t){return new Oe(t)}:Nt,Xt=200;function Gt(t,n,e){var o=-1,i=St,u=t.length,c=!0,a=[],s=a;if(u>=Xt){var v=Wt(t);if(v)return ot(v);c=!1,i=Ct,s=new It}else s=a;e:for(;++o<u;){var d=t[o],l=d;if(d=d!==0?d:0,c&&l===l){for(var $=s.length;$--;)if(s[$]===l)continue e;a.push(d)}else i(s,l,e)||(s!==a&&s.push(l),a.push(d))}return a}function Be(t){return t&&t.length?Gt(t):[]}const ut=Symbol("OverrideContextKey"),st=()=>ae(ut,void 0),In=t=>{var n,e,o;const{prefixCls:i,mode:u,selectable:c,validator:a,onClick:s,expandIcon:v}=st()||{};ce(ut,{prefixCls:m(()=>{var d,l;return(l=(d=t.prefixCls)===null||d===void 0?void 0:d.value)!==null&&l!==void 0?l:i==null?void 0:i.value}),mode:m(()=>{var d,l;return(l=(d=t.mode)===null||d===void 0?void 0:d.value)!==null&&l!==void 0?l:u==null?void 0:u.value}),selectable:m(()=>{var d,l;return(l=(d=t.selectable)===null||d===void 0?void 0:d.value)!==null&&l!==void 0?l:c==null?void 0:c.value}),validator:(n=t.validator)!==null&&n!==void 0?n:a,onClick:(e=t.onClick)!==null&&e!==void 0?e:s,expandIcon:(o=t.expandIcon)!==null&&o!==void 0?o:v==null?void 0:v.value})},dt=Symbol("menuContextKey"),ct=t=>{ce(dt,t)},Q=()=>ae(dt),mt=Symbol("ForceRenderKey"),Yt=t=>{ce(mt,t)},vt=()=>ae(mt,!1),ft=Symbol("menuFirstLevelContextKey"),pt=t=>{ce(ft,t)},Ut=()=>ae(ft,!0),Ce=Z({compatConfig:{MODE:3},name:"MenuContextProvider",inheritAttrs:!1,props:{mode:{type:String,default:void 0},overflowDisabled:{type:Boolean,default:void 0}},setup(t,n){let{slots:e}=n;const o=Q(),i=p({},o);return t.mode!==void 0&&(i.mode=je(t,"mode")),t.overflowDisabled!==void 0&&(i.overflowDisabled=je(t,"overflowDisabled")),ct(i),()=>{var u;return(u=e.default)===null||u===void 0?void 0:u.call(e)}}}),qt=ct,Zt=Symbol("siderCollapsed"),Sn=Symbol("siderHookProvider"),$e="$$__vc-menu-more__key",gt=Symbol("KeyPathContext"),Re=()=>ae(gt,{parentEventKeys:m(()=>[]),parentKeys:m(()=>[]),parentInfo:{}}),Qt=(t,n,e)=>{const{parentEventKeys:o,parentKeys:i}=Re(),u=m(()=>[...o.value,t]),c=m(()=>[...i.value,n]);return ce(gt,{parentEventKeys:u,parentKeys:c,parentInfo:e}),c},bt=Symbol("measure"),Ye=Z({compatConfig:{MODE:3},setup(t,n){let{slots:e}=n;return ce(bt,!0),()=>{var o;return(o=e.default)===null||o===void 0?void 0:o.call(e)}}}),He=()=>ae(bt,!1),Jt=Qt;function $t(t){const{mode:n,rtl:e,inlineIndent:o}=Q();return m(()=>n.value!=="inline"?null:e.value?{paddingRight:`${t.value*o.value}px`}:{paddingLeft:`${t.value*o.value}px`})}let en=0;const tn=()=>({id:String,role:String,disabled:Boolean,danger:Boolean,title:{type:[String,Boolean],default:void 0},icon:Ie.any,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function,originItemValue:_e()}),pe=Z({compatConfig:{MODE:3},name:"AMenuItem",inheritAttrs:!1,props:tn(),slots:Object,setup(t,n){let{slots:e,emit:o,attrs:i}=n;const u=it(),c=He(),a=typeof u.vnode.key=="symbol"?String(u.vnode.key):u.vnode.key;ye(typeof u.vnode.key!="symbol","MenuItem",`MenuItem \`:key="${String(a)}"\` not support Symbol type`);const s=`menu_item_${++en}_$$_${a}`,{parentEventKeys:v,parentKeys:d}=Re(),{prefixCls:l,activeKeys:$,disabled:y,changeActiveKeys:g,rtl:x,inlineCollapsed:M,siderCollapsed:O,onItemClick:w,selectedKeys:j,registerMenuInfo:U,unRegisterMenuInfo:I}=Q(),K=Ut(),R=z(!1),_=m(()=>[...d.value,a]);U(s,{eventKey:s,key:a,parentEventKeys:v,parentKeys:d,isLeaf:!0}),he(()=>{I(s)}),G($,()=>{R.value=!!$.value.find(h=>h===a)},{immediate:!0});const P=m(()=>y.value||t.disabled),W=m(()=>j.value.includes(a)),X=m(()=>{const h=`${l.value}-item`;return{[`${h}`]:!0,[`${h}-danger`]:t.danger,[`${h}-active`]:R.value,[`${h}-selected`]:W.value,[`${h}-disabled`]:P.value}}),Y=h=>({key:a,eventKey:s,keyPath:_.value,eventKeyPath:[...v.value,s],domEvent:h,item:p(p({},t),i)}),re=h=>{if(P.value)return;const E=Y(h);o("click",h),w(E)},ue=h=>{P.value||(g(_.value),o("mouseenter",h))},J=h=>{P.value||(g([]),o("mouseleave",h))},ee=h=>{if(o("keydown",h),h.which===Mt.ENTER){const E=Y(h);o("click",h),w(E)}},se=h=>{g(_.value),o("focus",h)},N=(h,E)=>{const F=f("span",{class:`${l.value}-title-content`},[E]);return(!h||at(E)&&E.type==="span")&&E&&M.value&&K&&typeof E=="string"?f("div",{class:`${l.value}-inline-collapsed-noicon`},[E.charAt(0)]):F},me=$t(m(()=>_.value.length));return()=>{var h,E,F,q,te;if(c)return null;const r=(h=t.title)!==null&&h!==void 0?h:(E=e.title)===null||E===void 0?void 0:E.call(e),b=lt((F=e.default)===null||F===void 0?void 0:F.call(e)),C=b.length;let k=r;typeof r>"u"?k=K&&C?b:"":r===!1&&(k="");const A={title:k};!O.value&&!M.value&&(A.title=null,A.open=!1);const H={};t.role==="option"&&(H["aria-selected"]=W.value);const T=(q=t.icon)!==null&&q!==void 0?q:(te=e.icon)===null||te===void 0?void 0:te.call(e,t);return f(xt,B(B({},A),{},{placement:x.value?"left":"right",overlayClassName:`${l.value}-inline-collapsed-tooltip`}),{default:()=>[f(fe.Item,B(B(B({component:"li"},i),{},{id:t.id,style:p(p({},i.style||{}),me.value),class:[X.value,{[`${i.class}`]:!!i.class,[`${l.value}-item-only-child`]:(T?C+1:C)===1}],role:t.role||"menuitem",tabindex:t.disabled?null:-1,"data-menu-id":a,"aria-disabled":t.disabled},H),{},{onMouseenter:ue,onMouseleave:J,onClick:re,onKeydown:ee,onFocus:se,title:typeof r=="string"?r:void 0}),{default:()=>[De(typeof T=="function"?T(t.originItemValue):T,{class:`${l.value}-item-icon`},!1),N(T,b)]})]})}}}),le={adjustX:1,adjustY:1},nn={topLeft:{points:["bl","tl"],overflow:le,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:le,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:le,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:le,offset:[4,0]}},on={topLeft:{points:["bl","tl"],overflow:le,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:le,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:le,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:le,offset:[4,0]}},ln={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"},Ue=Z({compatConfig:{MODE:3},name:"PopupTrigger",inheritAttrs:!1,props:{prefixCls:String,mode:String,visible:Boolean,popupClassName:String,popupOffset:Array,disabled:Boolean,onVisibleChange:Function},slots:Object,emits:["visibleChange"],setup(t,n){let{slots:e,emit:o}=n;const i=z(!1),{getPopupContainer:u,rtl:c,subMenuOpenDelay:a,subMenuCloseDelay:s,builtinPlacements:v,triggerSubMenuAction:d,forceSubMenuRender:l,motion:$,defaultMotions:y,rootClassName:g}=Q(),x=vt(),M=m(()=>c.value?p(p({},on),v.value):p(p({},nn),v.value)),O=m(()=>ln[t.mode]),w=z();G(()=>t.visible,I=>{ke.cancel(w.value),w.value=ke(()=>{i.value=I})},{immediate:!0}),he(()=>{ke.cancel(w.value)});const j=I=>{o("visibleChange",I)},U=m(()=>{var I,K;const R=$.value||((I=y.value)===null||I===void 0?void 0:I[t.mode])||((K=y.value)===null||K===void 0?void 0:K.other),_=typeof R=="function"?R():R;return _?wt(_.name,{css:!0}):void 0});return()=>{const{prefixCls:I,popupClassName:K,mode:R,popupOffset:_,disabled:V}=t;return f(Kt,{prefixCls:I,popupClassName:Se(`${I}-popup`,{[`${I}-rtl`]:c.value},K,g.value),stretch:R==="horizontal"?"minWidth":null,getPopupContainer:u.value,builtinPlacements:M.value,popupPlacement:O.value,popupVisible:i.value,popupAlign:_&&{offset:_},action:V?[]:[d.value],mouseEnterDelay:a.value,mouseLeaveDelay:s.value,onPopupVisibleChange:j,forceRender:x||l.value,popupAnimation:U.value},{popup:e.popup,default:e.default})}}}),ze=(t,n)=>{let{slots:e,attrs:o}=n;var i;const{prefixCls:u,mode:c}=Q();return f("ul",B(B({},o),{},{class:Se(u.value,`${u.value}-sub`,`${u.value}-${c.value==="inline"?"inline":"vertical"}`),"data-menu-list":!0}),[(i=e.default)===null||i===void 0?void 0:i.call(e)])};ze.displayName="SubMenuList";const an=Z({compatConfig:{MODE:3},name:"InlineSubMenuList",inheritAttrs:!1,props:{id:String,open:Boolean,keyPath:Array},setup(t,n){let{slots:e}=n;const o=m(()=>"inline"),{motion:i,mode:u,defaultMotions:c}=Q(),a=m(()=>u.value===o.value),s=L(!a.value),v=m(()=>a.value?t.open:!1);G(u,()=>{a.value&&(s.value=!1)},{flush:"post"});const d=m(()=>{var l,$;const y=i.value||((l=c.value)===null||l===void 0?void 0:l[o.value])||(($=c.value)===null||$===void 0?void 0:$.other),g=typeof y=="function"?y():y;return p(p({},g),{appear:t.keyPath.length<=1})});return()=>{var l;return s.value?null:f(Ce,{mode:o.value},{default:()=>[f(Pt,d.value,{default:()=>[Ot(f(ze,{id:t.id},{default:()=>[(l=e.default)===null||l===void 0?void 0:l.call(e)]}),[[kt,v.value]])]})]})}}});let qe=0;const rn=()=>({icon:Ie.any,title:Ie.any,disabled:Boolean,level:Number,popupClassName:String,popupOffset:Array,internalPopupClose:Boolean,eventKey:String,expandIcon:Function,theme:String,onMouseenter:Function,onMouseleave:Function,onTitleClick:Function,originItemValue:_e()}),de=Z({compatConfig:{MODE:3},name:"ASubMenu",inheritAttrs:!1,props:rn(),slots:Object,setup(t,n){let{slots:e,attrs:o,emit:i}=n;var u,c;pt(!1);const a=He(),s=it(),v=typeof s.vnode.key=="symbol"?String(s.vnode.key):s.vnode.key;ye(typeof s.vnode.key!="symbol","SubMenu",`SubMenu \`:key="${String(v)}"\` not support Symbol type`);const d=Ne(v)?v:`sub_menu_${++qe}_$$_not_set_key`,l=(u=t.eventKey)!==null&&u!==void 0?u:Ne(v)?`sub_menu_${++qe}_$$_${v}`:d,{parentEventKeys:$,parentInfo:y,parentKeys:g}=Re(),x=m(()=>[...g.value,d]),M=z([]),O={eventKey:l,key:d,parentEventKeys:$,childrenEventKeys:M,parentKeys:g};(c=y.childrenEventKeys)===null||c===void 0||c.value.push(l),he(()=>{var S;y.childrenEventKeys&&(y.childrenEventKeys.value=(S=y.childrenEventKeys)===null||S===void 0?void 0:S.value.filter(D=>D!=l))}),Jt(l,d,O);const{prefixCls:w,activeKeys:j,disabled:U,changeActiveKeys:I,mode:K,inlineCollapsed:R,openKeys:_,overflowDisabled:V,onOpenChange:P,registerMenuInfo:W,unRegisterMenuInfo:X,selectedSubMenuKeys:Y,expandIcon:re,theme:ue}=Q(),J=v!=null,ee=!a&&(vt()||!J);Yt(ee),(a&&J||!a&&!J||ee)&&(W(l,O),he(()=>{X(l)}));const se=m(()=>`${w.value}-submenu`),N=m(()=>U.value||t.disabled),me=z(),h=z(),E=m(()=>_.value.includes(d)),F=m(()=>!V.value&&E.value),q=m(()=>Y.value.includes(d)),te=z(!1);G(j,()=>{te.value=!!j.value.find(S=>S===d)},{immediate:!0});const r=S=>{N.value||(i("titleClick",S,d),K.value==="inline"&&P(d,!E.value))},b=S=>{N.value||(I(x.value),i("mouseenter",S))},C=S=>{N.value||(I([]),i("mouseleave",S))},k=$t(m(()=>x.value.length)),A=S=>{K.value!=="inline"&&P(d,S)},H=()=>{I(x.value)},T=l&&`${l}-popup`,ne=m(()=>Se(w.value,`${w.value}-${t.theme||ue.value}`,t.popupClassName)),ge=(S,D)=>{if(!D)return R.value&&!g.value.length&&S&&typeof S=="string"?f("div",{class:`${w.value}-inline-collapsed-noicon`},[S.charAt(0)]):f("span",{class:`${w.value}-title-content`},[S]);const oe=at(S)&&S.type==="span";return f(Ee,null,[De(typeof D=="function"?D(t.originItemValue):D,{class:`${w.value}-item-icon`},!1),oe?S:f("span",{class:`${w.value}-title-content`},[S])])},we=m(()=>K.value!=="inline"&&x.value.length>1?"vertical":K.value),yt=m(()=>K.value==="horizontal"?"vertical":K.value),ht=m(()=>we.value==="horizontal"?"vertical":we.value),Fe=()=>{var S,D;const oe=se.value,Ke=(S=t.icon)!==null&&S!==void 0?S:(D=e.icon)===null||D===void 0?void 0:D.call(e,t),Le=t.expandIcon||e.expandIcon||re.value,Pe=ge(rt(e,t,"title"),Ke);return f("div",{style:k.value,class:`${oe}-title`,tabindex:N.value?null:-1,ref:me,title:typeof Pe=="string"?Pe:null,"data-menu-id":d,"aria-expanded":F.value,"aria-haspopup":!0,"aria-controls":T,"aria-disabled":N.value,onClick:r,onFocus:H},[Pe,K.value!=="horizontal"&&Le?Le(p(p({},t),{isOpen:F.value})):f("i",{class:`${oe}-arrow`},null)])};return()=>{var S;if(a)return J?(S=e.default)===null||S===void 0?void 0:S.call(e):null;const D=se.value;let oe=()=>null;if(!V.value&&K.value!=="inline"){const Ke=K.value==="horizontal"?[0,8]:[10,0];oe=()=>f(Ue,{mode:we.value,prefixCls:D,visible:!t.internalPopupClose&&F.value,popupClassName:ne.value,popupOffset:t.popupOffset||Ke,disabled:N.value,onVisibleChange:A},{default:()=>[Fe()],popup:()=>f(Ce,{mode:ht.value},{default:()=>[f(ze,{id:T,ref:h},{default:e.default})]})})}else oe=()=>f(Ue,null,{default:Fe});return f(Ce,{mode:yt.value},{default:()=>[f(fe.Item,B(B({component:"li"},o),{},{role:"none",class:Se(D,`${D}-${K.value}`,o.class,{[`${D}-open`]:F.value,[`${D}-active`]:te.value,[`${D}-selected`]:q.value,[`${D}-disabled`]:N.value}),onMouseenter:b,onMouseleave:C,"data-submenu-id":d}),{default:()=>f(Ee,null,[oe(),!V.value&&f(an,{id:T,open:F.value,keyPath:x.value},{default:e.default})])})]})}}}),un=()=>({title:Ie.any,originItemValue:_e()}),xe=Z({compatConfig:{MODE:3},name:"AMenuItemGroup",inheritAttrs:!1,props:un(),slots:Object,setup(t,n){let{slots:e,attrs:o}=n;const{prefixCls:i}=Q(),u=m(()=>`${i.value}-item-group`),c=He();return()=>{var a,s;return c?(a=e.default)===null||a===void 0?void 0:a.call(e):f("li",B(B({},o),{},{onClick:v=>v.stopPropagation(),class:u.value}),[f("div",{title:typeof t.title=="string"?t.title:void 0,class:`${u.value}-title`},[rt(e,t,"title")]),f("ul",{class:`${u.value}-list`},[(s=e.default)===null||s===void 0?void 0:s.call(e)])])}}}),sn=()=>({prefixCls:String,dashed:Boolean}),Me=Z({compatConfig:{MODE:3},name:"AMenuDivider",props:sn(),setup(t){const{prefixCls:n}=Q(),e=m(()=>({[`${n.value}-item-divider`]:!0,[`${n.value}-item-divider-dashed`]:!!t.dashed}));return()=>f("li",{class:e.value},null)}});var dn=function(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(t);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(e[o[i]]=t[o[i]]);return e};function Ae(t,n,e){return(t||[]).map((o,i)=>{if(o&&typeof o=="object"){const u=o,{label:c,children:a,key:s,type:v}=u,d=dn(u,["label","children","key","type"]),l=s??`tmp-${i}`,$=e?e.parentKeys.slice():[],y=[],g={eventKey:l,key:l,parentEventKeys:L($),parentKeys:L($),childrenEventKeys:L(y),isLeaf:!1};if(a||v==="group"){if(v==="group"){const M=Ae(a,n,e);return f(xe,B(B({key:l},d),{},{title:c,originItemValue:o}),{default:()=>[M]})}n.set(l,g),e&&e.childrenEventKeys.push(l);const x=Ae(a,n,{childrenEventKeys:y,parentKeys:[].concat($,l)});return f(de,B(B({key:l},d),{},{title:c,originItemValue:o}),{default:()=>[x]})}return v==="divider"?f(Me,B({key:l},d),null):(g.isLeaf=!0,n.set(l,g),f(pe,B(B({key:l},d),{},{originItemValue:o}),{default:()=>[c]}))}return null}).filter(o=>o)}function cn(t){const n=z([]),e=z(!1),o=z(new Map);return G(()=>t.items,()=>{const i=new Map;e.value=!1,t.items?(e.value=!0,n.value=Ae(t.items,i)):n.value=void 0,o.value=i},{immediate:!0,deep:!0}),{itemsNodes:n,store:o,hasItmes:e}}const mn=t=>{const{componentCls:n,motionDurationSlow:e,menuHorizontalHeight:o,colorSplit:i,lineWidth:u,lineType:c,menuItemPaddingInline:a}=t;return{[`${n}-horizontal`]:{lineHeight:`${o}px`,border:0,borderBottom:`${u}px ${c} ${i}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${n}-item, ${n}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:a},[`> ${n}-item:hover,
        > ${n}-item-active,
        > ${n}-submenu ${n}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${n}-item, ${n}-submenu-title`]:{transition:[`border-color ${e}`,`background ${e}`].join(",")},[`${n}-submenu-arrow`]:{display:"none"}}}},vn=t=>{let{componentCls:n,menuArrowOffset:e}=t;return{[`${n}-rtl`]:{direction:"rtl"},[`${n}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${n}-rtl${n}-vertical,
    ${n}-submenu-rtl ${n}-vertical`]:{[`${n}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(-${e})`},"&::after":{transform:`rotate(45deg) translateY(${e})`}}}}},Ze=t=>p({},Tt(t)),Qe=(t,n)=>{const{componentCls:e,colorItemText:o,colorItemTextSelected:i,colorGroupTitle:u,colorItemBg:c,colorSubItemBg:a,colorItemBgSelected:s,colorActiveBarHeight:v,colorActiveBarWidth:d,colorActiveBarBorderSize:l,motionDurationSlow:$,motionEaseInOut:y,motionEaseOut:g,menuItemPaddingInline:x,motionDurationMid:M,colorItemTextHover:O,lineType:w,colorSplit:j,colorItemTextDisabled:U,colorDangerItemText:I,colorDangerItemTextHover:K,colorDangerItemTextSelected:R,colorDangerItemBgActive:_,colorDangerItemBgSelected:V,colorItemBgHover:P,menuSubMenuBg:W,colorItemTextSelectedHorizontal:X,colorItemBgSelectedHorizontal:Y}=t;return{[`${e}-${n}`]:{color:o,background:c,[`&${e}-root:focus-visible`]:p({},Ze(t)),[`${e}-item-group-title`]:{color:u},[`${e}-submenu-selected`]:{[`> ${e}-submenu-title`]:{color:i}},[`${e}-item-disabled, ${e}-submenu-disabled`]:{color:`${U} !important`},[`${e}-item:hover, ${e}-submenu-title:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:O}},[`&:not(${e}-horizontal)`]:{[`${e}-item:not(${e}-item-selected)`]:{"&:hover":{backgroundColor:P},"&:active":{backgroundColor:s}},[`${e}-submenu-title`]:{"&:hover":{backgroundColor:P},"&:active":{backgroundColor:s}}},[`${e}-item-danger`]:{color:I,[`&${e}-item:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:K}},[`&${e}-item:active`]:{background:_}},[`${e}-item a`]:{"&, &:hover":{color:"inherit"}},[`${e}-item-selected`]:{color:i,[`&${e}-item-danger`]:{color:R},"a, a:hover":{color:"inherit"}},[`& ${e}-item-selected`]:{backgroundColor:s,[`&${e}-item-danger`]:{backgroundColor:V}},[`${e}-item, ${e}-submenu-title`]:{[`&:not(${e}-item-disabled):focus-visible`]:p({},Ze(t))},[`&${e}-submenu > ${e}`]:{backgroundColor:W},[`&${e}-popup > ${e}`]:{backgroundColor:c},[`&${e}-horizontal`]:p(p({},n==="dark"?{borderBottom:0}:{}),{[`> ${e}-item, > ${e}-submenu`]:{top:l,marginTop:-l,marginBottom:0,borderRadius:0,"&::after":{position:"absolute",insetInline:x,bottom:0,borderBottom:`${v}px solid transparent`,transition:`border-color ${$} ${y}`,content:'""'},"&:hover, &-active, &-open":{"&::after":{borderBottomWidth:v,borderBottomColor:X}},"&-selected":{color:X,backgroundColor:Y,"&::after":{borderBottomWidth:v,borderBottomColor:X}}}}),[`&${e}-root`]:{[`&${e}-inline, &${e}-vertical`]:{borderInlineEnd:`${l}px ${w} ${j}`}},[`&${e}-inline`]:{[`${e}-sub${e}-inline`]:{background:a},[`${e}-item, ${e}-submenu-title`]:l&&d?{width:`calc(100% + ${l}px)`}:{},[`${e}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${d}px solid ${i}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${M} ${g}`,`opacity ${M} ${g}`].join(","),content:'""'},[`&${e}-item-danger`]:{"&::after":{borderInlineEndColor:R}}},[`${e}-selected, ${e}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${M} ${y}`,`opacity ${M} ${y}`].join(",")}}}}}},Je=t=>{const{componentCls:n,menuItemHeight:e,itemMarginInline:o,padding:i,menuArrowSize:u,marginXS:c,marginXXS:a}=t,s=i+u+c;return{[`${n}-item`]:{position:"relative"},[`${n}-item, ${n}-submenu-title`]:{height:e,lineHeight:`${e}px`,paddingInline:i,overflow:"hidden",textOverflow:"ellipsis",marginInline:o,marginBlock:a,width:`calc(100% - ${o*2}px)`},[`${n}-submenu`]:{paddingBottom:.02},[`> ${n}-item,
            > ${n}-submenu > ${n}-submenu-title`]:{height:e,lineHeight:`${e}px`},[`${n}-item-group-list ${n}-submenu-title,
            ${n}-submenu-title`]:{paddingInlineEnd:s}}},fn=t=>{const{componentCls:n,iconCls:e,menuItemHeight:o,colorTextLightSolid:i,dropdownWidth:u,controlHeightLG:c,motionDurationMid:a,motionEaseOut:s,paddingXL:v,fontSizeSM:d,fontSizeLG:l,motionDurationSlow:$,paddingXS:y,boxShadowSecondary:g}=t,x={height:o,lineHeight:`${o}px`,listStylePosition:"inside",listStyleType:"disc"};return[{[n]:{"&-inline, &-vertical":p({[`&${n}-root`]:{boxShadow:"none"}},Je(t))},[`${n}-submenu-popup`]:{[`${n}-vertical`]:p(p({},Je(t)),{boxShadow:g})}},{[`${n}-submenu-popup ${n}-vertical${n}-sub`]:{minWidth:u,maxHeight:`calc(100vh - ${c*2.5}px)`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${n}-inline`]:{width:"100%",[`&${n}-root`]:{[`${n}-item, ${n}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${$}`,`background ${$}`,`padding ${a} ${s}`].join(","),[`> ${n}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${n}-sub${n}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${n}-submenu > ${n}-submenu-title`]:x,[`& ${n}-item-group-title`]:{paddingInlineStart:v}},[`${n}-item`]:x}},{[`${n}-inline-collapsed`]:{width:o*2,[`&${n}-root`]:{[`${n}-item, ${n}-submenu ${n}-submenu-title`]:{[`> ${n}-inline-collapsed-noicon`]:{fontSize:l,textAlign:"center"}}},[`> ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-item,
          > ${n}-item-group > ${n}-item-group-list > ${n}-submenu > ${n}-submenu-title,
          > ${n}-submenu > ${n}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${d}px)`,textOverflow:"clip",[`
            ${n}-submenu-arrow,
            ${n}-submenu-expand-icon
          `]:{opacity:0},[`${n}-item-icon, ${e}`]:{margin:0,fontSize:l,lineHeight:`${o}px`,"+ span":{display:"inline-block",opacity:0}}},[`${n}-item-icon, ${e}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${n}-item-icon, ${e}`]:{display:"none"},"a, a:hover":{color:i}},[`${n}-item-group-title`]:p(p({},Bt),{paddingInline:y})}}]},et=t=>{const{componentCls:n,fontSize:e,motionDurationSlow:o,motionDurationMid:i,motionEaseInOut:u,motionEaseOut:c,iconCls:a,controlHeightSM:s}=t;return{[`${n}-item, ${n}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${o}`,`background ${o}`,`padding ${o} ${u}`].join(","),[`${n}-item-icon, ${a}`]:{minWidth:e,fontSize:e,transition:[`font-size ${i} ${c}`,`margin ${o} ${u}`,`color ${o}`].join(","),"+ span":{marginInlineStart:s-e,opacity:1,transition:[`opacity ${o} ${u}`,`margin ${o}`,`color ${o}`].join(",")}},[`${n}-item-icon`]:p({},Rt()),[`&${n}-item-only-child`]:{[`> ${a}, > ${n}-item-icon`]:{marginInlineEnd:0}}},[`${n}-item-disabled, ${n}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${n}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},tt=t=>{const{componentCls:n,motionDurationSlow:e,motionEaseInOut:o,borderRadius:i,menuArrowSize:u,menuArrowOffset:c}=t;return{[`${n}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:t.margin,width:u,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${e} ${o}, opacity ${e}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:u*.6,height:u*.15,backgroundColor:"currentcolor",borderRadius:i,transition:[`background ${e} ${o}`,`transform ${e} ${o}`,`top ${e} ${o}`,`color ${e} ${o}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(-${c})`},"&::after":{transform:`rotate(-45deg) translateY(${c})`}}}}},pn=t=>{const{antCls:n,componentCls:e,fontSize:o,motionDurationSlow:i,motionDurationMid:u,motionEaseInOut:c,lineHeight:a,paddingXS:s,padding:v,colorSplit:d,lineWidth:l,zIndexPopup:$,borderRadiusLG:y,radiusSubMenuItem:g,menuArrowSize:x,menuArrowOffset:M,lineType:O,menuPanelMaskInset:w}=t;return[{"":{[`${e}`]:p(p({},Xe()),{"&-hidden":{display:"none"}})},[`${e}-submenu-hidden`]:{display:"none"}},{[e]:p(p(p(p(p(p(p({},_t(t)),Xe()),{marginBottom:0,paddingInlineStart:0,fontSize:o,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${i} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${e}-item`]:{flex:"none"}},[`${e}-item, ${e}-submenu, ${e}-submenu-title`]:{borderRadius:t.radiusItem},[`${e}-item-group-title`]:{padding:`${s}px ${v}px`,fontSize:o,lineHeight:a,transition:`all ${i}`},[`&-horizontal ${e}-submenu`]:{transition:[`border-color ${i} ${c}`,`background ${i} ${c}`].join(",")},[`${e}-submenu, ${e}-submenu-inline`]:{transition:[`border-color ${i} ${c}`,`background ${i} ${c}`,`padding ${u} ${c}`].join(",")},[`${e}-submenu ${e}-sub`]:{cursor:"initial",transition:[`background ${i} ${c}`,`padding ${i} ${c}`].join(",")},[`${e}-title-content`]:{transition:`color ${i}`},[`${e}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${e}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:d,borderStyle:O,borderWidth:0,borderTopWidth:l,marginBlock:l,padding:0,"&-dashed":{borderStyle:"dashed"}}}),et(t)),{[`${e}-item-group`]:{[`${e}-item-group-list`]:{margin:0,padding:0,[`${e}-item, ${e}-submenu-title`]:{paddingInline:`${o*2}px ${v}px`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:$,background:"transparent",borderRadius:y,boxShadow:"none",transformOrigin:"0 0","&::before":{position:"absolute",inset:`${w}px 0 0`,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'}},"&-placement-rightTop::before":{top:0,insetInlineStart:w},[`> ${e}`]:p(p(p({borderRadius:y},et(t)),tt(t)),{[`${e}-item, ${e}-submenu > ${e}-submenu-title`]:{borderRadius:g},[`${e}-submenu-title::after`]:{transition:`transform ${i} ${c}`}})}}),tt(t)),{[`&-inline-collapsed ${e}-submenu-arrow,
        &-inline ${e}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${M})`},"&::after":{transform:`rotate(45deg) translateX(-${M})`}},[`${e}-submenu-open${e}-submenu-inline > ${e}-submenu-title > ${e}-submenu-arrow`]:{transform:`translateY(-${x*.2}px)`,"&::after":{transform:`rotate(-45deg) translateX(-${M})`},"&::before":{transform:`rotate(45deg) translateX(${M})`}}})},{[`${n}-layout-header`]:{[e]:{lineHeight:"inherit"}}}]},gn=(t,n)=>Et("Menu",(o,i)=>{let{overrideComponentToken:u}=i;if((n==null?void 0:n.value)===!1)return[];const{colorBgElevated:c,colorPrimary:a,colorError:s,colorErrorHover:v,colorTextLightSolid:d}=o,{controlHeightLG:l,fontSize:$}=o,y=$/7*5,g=Ve(o,{menuItemHeight:l,menuItemPaddingInline:o.margin,menuArrowSize:y,menuHorizontalHeight:l*1.15,menuArrowOffset:`${y*.25}px`,menuPanelMaskInset:-7,menuSubMenuBg:c}),x=new We(d).setAlpha(.65).toRgbString(),M=Ve(g,{colorItemText:x,colorItemTextHover:d,colorGroupTitle:x,colorItemTextSelected:d,colorItemBg:"#001529",colorSubItemBg:"#000c17",colorItemBgActive:"transparent",colorItemBgSelected:a,colorActiveBarWidth:0,colorActiveBarHeight:0,colorActiveBarBorderSize:0,colorItemTextDisabled:new We(d).setAlpha(.25).toRgbString(),colorDangerItemText:s,colorDangerItemTextHover:v,colorDangerItemTextSelected:d,colorDangerItemBgActive:s,colorDangerItemBgSelected:s,menuSubMenuBg:"#001529",colorItemTextSelectedHorizontal:d,colorItemBgSelectedHorizontal:a},p({},u));return[pn(g),mn(g),fn(g),Qe(g,"light"),Qe(M,"dark"),vn(g),At(g),Ge(g,"slide-up"),Ge(g,"slide-down"),Dt(g,"zoom-big")]},o=>{const{colorPrimary:i,colorError:u,colorTextDisabled:c,colorErrorBg:a,colorText:s,colorTextDescription:v,colorBgContainer:d,colorFillAlter:l,colorFillContent:$,lineWidth:y,lineWidthBold:g,controlItemBgActive:x,colorBgTextHover:M}=o;return{dropdownWidth:160,zIndexPopup:o.zIndexPopupBase+50,radiusItem:o.borderRadiusLG,radiusSubMenuItem:o.borderRadiusSM,colorItemText:s,colorItemTextHover:s,colorItemTextHoverHorizontal:i,colorGroupTitle:v,colorItemTextSelected:i,colorItemTextSelectedHorizontal:i,colorItemBg:d,colorItemBgHover:M,colorItemBgActive:$,colorSubItemBg:l,colorItemBgSelected:x,colorItemBgSelectedHorizontal:"transparent",colorActiveBarWidth:0,colorActiveBarHeight:g,colorActiveBarBorderSize:y,colorItemTextDisabled:c,colorDangerItemText:u,colorDangerItemTextHover:u,colorDangerItemTextSelected:u,colorDangerItemBgActive:a,colorDangerItemBgSelected:a,itemMarginInline:o.marginXXS}})(t),bn=()=>({id:String,prefixCls:String,items:Array,disabled:Boolean,inlineCollapsed:Boolean,disabledOverflow:Boolean,forceSubMenuRender:Boolean,openKeys:Array,selectedKeys:Array,activeKey:String,selectable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},tabindex:{type:[Number,String]},motion:Object,role:String,theme:{type:String,default:"light"},mode:{type:String,default:"vertical"},inlineIndent:{type:Number,default:24},subMenuOpenDelay:{type:Number,default:0},subMenuCloseDelay:{type:Number,default:.1},builtinPlacements:{type:Object},triggerSubMenuAction:{type:String,default:"hover"},getPopupContainer:Function,expandIcon:Function,onOpenChange:Function,onSelect:Function,onDeselect:Function,onClick:[Function,Array],onFocus:Function,onBlur:Function,onMousedown:Function,"onUpdate:openKeys":Function,"onUpdate:selectedKeys":Function,"onUpdate:activeKey":Function}),nt=[],ie=Z({compatConfig:{MODE:3},name:"AMenu",inheritAttrs:!1,props:bn(),slots:Object,setup(t,n){let{slots:e,emit:o,attrs:i}=n;const{direction:u,getPrefixCls:c}=Ht("menu",t),a=st(),s=m(()=>{var r;return c("menu",t.prefixCls||((r=a==null?void 0:a.prefixCls)===null||r===void 0?void 0:r.value))}),[v,d]=gn(s,m(()=>!a)),l=z(new Map),$=ae(Zt,L(void 0)),y=m(()=>$.value!==void 0?$.value:t.inlineCollapsed),{itemsNodes:g}=cn(t),x=z(!1);zt(()=>{x.value=!0}),Te(()=>{ye(!(t.inlineCollapsed===!0&&t.mode!=="inline"),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),ye(!($.value!==void 0&&t.inlineCollapsed===!0),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.")});const M=L([]),O=L([]),w=L({});G(l,()=>{const r={};for(const b of l.value.values())r[b.key]=b;w.value=r},{flush:"post"}),Te(()=>{if(t.activeKey!==void 0){let r=[];const b=t.activeKey?w.value[t.activeKey]:void 0;b&&t.activeKey!==void 0?r=Be([].concat(be(b.parentKeys),t.activeKey)):r=[],ve(M.value,r)||(M.value=r)}}),G(()=>t.selectedKeys,r=>{r&&(O.value=r.slice())},{immediate:!0,deep:!0});const j=L([]);G([w,O],()=>{let r=[];O.value.forEach(b=>{const C=w.value[b];C&&(r=r.concat(be(C.parentKeys)))}),r=Be(r),ve(j.value,r)||(j.value=r)},{immediate:!0});const U=r=>{if(t.selectable){const{key:b}=r,C=O.value.includes(b);let k;t.multiple?C?k=O.value.filter(H=>H!==b):k=[...O.value,b]:k=[b];const A=p(p({},r),{selectedKeys:k});ve(k,O.value)||(t.selectedKeys===void 0&&(O.value=k),o("update:selectedKeys",k),C&&t.multiple?o("deselect",A):o("select",A))}P.value!=="inline"&&!t.multiple&&I.value.length&&Y(nt)},I=L([]);G(()=>t.openKeys,function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:I.value;ve(I.value,r)||(I.value=r.slice())},{immediate:!0,deep:!0});let K;const R=r=>{clearTimeout(K),K=setTimeout(()=>{t.activeKey===void 0&&(M.value=r),o("update:activeKey",r[r.length-1])})},_=m(()=>!!t.disabled),V=m(()=>u.value==="rtl"),P=L("vertical"),W=z(!1);Te(()=>{var r;(t.mode==="inline"||t.mode==="vertical")&&y.value?(P.value="vertical",W.value=y.value):(P.value=t.mode,W.value=!1),!((r=a==null?void 0:a.mode)===null||r===void 0)&&r.value&&(P.value=a.mode.value)});const X=m(()=>P.value==="inline"),Y=r=>{I.value=r,o("update:openKeys",r),o("openChange",r)},re=L(I.value),ue=z(!1);G(I,()=>{X.value&&(re.value=I.value)},{immediate:!0}),G(X,()=>{if(!ue.value){ue.value=!0;return}X.value?I.value=re.value:Y(nt)},{immediate:!0});const J=m(()=>({[`${s.value}`]:!0,[`${s.value}-root`]:!0,[`${s.value}-${P.value}`]:!0,[`${s.value}-inline-collapsed`]:W.value,[`${s.value}-rtl`]:V.value,[`${s.value}-${t.theme}`]:!0})),ee=m(()=>c()),se=m(()=>({horizontal:{name:`${ee.value}-slide-up`},inline:Ft(`${ee.value}-motion-collapse`),other:{name:`${ee.value}-zoom-big`}}));pt(!0);const N=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];const b=[],C=l.value;return r.forEach(k=>{const{key:A,childrenEventKeys:H}=C.get(k);b.push(A,...N(be(H)))}),b},me=r=>{var b;o("click",r),U(r),(b=a==null?void 0:a.onClick)===null||b===void 0||b.call(a)},h=(r,b)=>{var C;const k=((C=w.value[r])===null||C===void 0?void 0:C.childrenEventKeys)||[];let A=I.value.filter(H=>H!==r);if(b)A.push(r);else if(P.value!=="inline"){const H=N(be(k));A=Be(A.filter(T=>!H.includes(T)))}ve(I,A)||Y(A)},E=(r,b)=>{l.value.set(r,b),l.value=new Map(l.value)},F=r=>{l.value.delete(r),l.value=new Map(l.value)},q=L(0),te=m(()=>{var r;return t.expandIcon||e.expandIcon||!((r=a==null?void 0:a.expandIcon)===null||r===void 0)&&r.value?b=>{let C=t.expandIcon||e.expandIcon;return C=typeof C=="function"?C(b):C,De(C,{class:`${s.value}-submenu-expand-icon`},!1)}:null});return qt({prefixCls:s,activeKeys:M,openKeys:I,selectedKeys:O,changeActiveKeys:R,disabled:_,rtl:V,mode:P,inlineIndent:m(()=>t.inlineIndent),subMenuCloseDelay:m(()=>t.subMenuCloseDelay),subMenuOpenDelay:m(()=>t.subMenuOpenDelay),builtinPlacements:m(()=>t.builtinPlacements),triggerSubMenuAction:m(()=>t.triggerSubMenuAction),getPopupContainer:m(()=>t.getPopupContainer),inlineCollapsed:W,theme:m(()=>t.theme),siderCollapsed:$,defaultMotions:m(()=>x.value?se.value:null),motion:m(()=>x.value?t.motion:null),overflowDisabled:z(void 0),onOpenChange:h,onItemClick:me,registerMenuInfo:E,unRegisterMenuInfo:F,selectedSubMenuKeys:j,expandIcon:te,forceSubMenuRender:m(()=>t.forceSubMenuRender),rootClassName:d}),()=>{var r,b;const C=g.value||lt((r=e.default)===null||r===void 0?void 0:r.call(e)),k=q.value>=C.length-1||P.value!=="horizontal"||t.disabledOverflow,A=P.value!=="horizontal"||t.disabledOverflow?C:C.map((T,ne)=>f(Ce,{key:T.key,overflowDisabled:ne>q.value},{default:()=>T})),H=((b=e.overflowedIndicator)===null||b===void 0?void 0:b.call(e))||f(jt,null,null);return v(f(fe,B(B({},i),{},{onMousedown:t.onMousedown,prefixCls:`${s.value}-overflow`,component:"ul",itemComponent:pe,class:[J.value,i.class,d.value],role:"menu",id:t.id,data:A,renderRawItem:T=>T,renderRawRest:T=>{const ne=T.length,ge=ne?C.slice(-ne):null;return f(Ee,null,[f(de,{eventKey:$e,key:$e,title:H,disabled:k,internalPopupClose:ne===0},{default:()=>ge}),f(Ye,null,{default:()=>[f(de,{eventKey:$e,key:$e,title:H,disabled:k,internalPopupClose:ne===0},{default:()=>ge})]})])},maxCount:P.value!=="horizontal"||t.disabledOverflow?fe.INVALIDATE:fe.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:T=>{q.value=T}}),{default:()=>[f(Lt,{to:"body"},{default:()=>[f("div",{style:{display:"none"},"aria-hidden":!0},[f(Ye,null,{default:()=>[A]})])]})]}))}}});ie.install=function(t){return t.component(ie.name,ie),t.component(pe.name,pe),t.component(de.name,de),t.component(Me.name,Me),t.component(xe.name,xe),t};ie.Item=pe;ie.Divider=Me;ie.SubMenu=de;ie.ItemGroup=xe;export{ie as M,Sn as S,pe as a,Zt as b,In as u};