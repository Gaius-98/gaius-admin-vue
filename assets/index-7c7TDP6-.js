import{d as z,u as D,z as M,g as l,i as v,P as j,o as Q,aW as ne,k,m as ee,_ as C,aa as ae,aX as oe,at as G,aN as le,aY as ie,s as re,b as se,an as Z,l as ce,p as de,e as ue,aZ as P,aj as pe,a_ as me,a$ as ge}from"./index-bmd1BFpa.js";import{A as be,a as fe}from"./ArrowRightOutlined-CAlSanQc.js";import{a as ve,o as he}from"./index-CKZFhYXA.js";import{D as ye,K as q}from"./index-CwNMyvuk.js";import{M as Se}from"./index-Dt-PmioO.js";import{A as Ce}from"./index-DRvELAbR.js";import{R as _e}from"./index-ccK5NkPn.js";import{u as $e}from"./useDestroyed-C_53bEg2.js";import{S as xe}from"./index-_zUWzMOO.js";var He=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const Be=()=>({prefixCls:String,href:String,separator:j.any,dropdownProps:Q(),overlay:j.any,onClick:ne()}),E=z({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:Be(),slots:Object,setup(e,r){let{slots:t,attrs:a,emit:n}=r;const{prefixCls:s}=D("breadcrumb",e),g=(m,h)=>{const f=M(t,e,"overlay");return f?l(ve,v(v({},e.dropdownProps),{},{overlay:f,placement:"bottom"}),{default:()=>[l("span",{class:`${h}-overlay-link`},[m,l(ye,null,null)])]}):m},y=m=>{n("click",m)};return()=>{var m;const h=(m=M(t,e,"separator"))!==null&&m!==void 0?m:"/",f=M(t,e),{class:p,style:i}=a,d=He(a,["class","style"]);let b;return e.href!==void 0?b=l("a",v({class:`${s.value}-link`,onClick:y},d),[f]):b=l("span",v({class:`${s.value}-link`,onClick:y},d),[f]),b=g(b,s.value),f!=null?l("li",{class:p,style:i},[b,h&&l("span",{class:`${s.value}-separator`},[h])]):null}}}),Te=e=>{const{componentCls:r,iconCls:t}=e;return{[r]:C(C({},ae(e)),{color:e.breadcrumbBaseColor,fontSize:e.breadcrumbFontSize,[t]:{fontSize:e.breadcrumbIconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:C({color:e.breadcrumbLinkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${e.paddingXXS}px`,borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover}},oe(e)),"li:last-child":{color:e.breadcrumbLastItemColor,[`& > ${r}-separator`]:{display:"none"}},[`${r}-separator`]:{marginInline:e.breadcrumbSeparatorMargin,color:e.breadcrumbSeparatorColor},[`${r}-link`]:{[`
          > ${t} + span,
          > ${t} + a
        `]:{marginInlineStart:e.marginXXS}},[`${r}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:`0 ${e.paddingXXS}px`,marginInline:-e.marginXXS,[`> ${t}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover,a:{color:e.breadcrumbLinkColorHover}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},Oe=k("Breadcrumb",e=>{const r=ee(e,{breadcrumbBaseColor:e.colorTextDescription,breadcrumbFontSize:e.fontSize,breadcrumbIconFontSize:e.fontSize,breadcrumbLinkColor:e.colorTextDescription,breadcrumbLinkColorHover:e.colorText,breadcrumbLastItemColor:e.colorText,breadcrumbSeparatorMargin:e.marginXS,breadcrumbSeparatorColor:e.colorTextDescription});return[Te(r)]}),Pe=()=>({prefixCls:String,routes:{type:Array},params:j.any,separator:j.any,itemRender:{type:Function}});function Re(e,r){if(!e.breadcrumbName)return null;const t=Object.keys(r).join("|");return e.breadcrumbName.replace(new RegExp(`:(${t})`,"g"),(n,s)=>r[s]||n)}function J(e){const{route:r,params:t,routes:a,paths:n}=e,s=a.indexOf(r)===a.length-1,g=Re(r,t);return s?l("span",null,[g]):l("a",{href:`#/${n.join("/")}`},[g])}const R=z({compatConfig:{MODE:3},name:"ABreadcrumb",inheritAttrs:!1,props:Pe(),slots:Object,setup(e,r){let{slots:t,attrs:a}=r;const{prefixCls:n,direction:s}=D("breadcrumb",e),[g,y]=Oe(n),m=(p,i)=>(p=(p||"").replace(/^\//,""),Object.keys(i).forEach(d=>{p=p.replace(`:${d}`,i[d])}),p),h=(p,i,d)=>{const b=[...p],S=m(i||"",d);return S&&b.push(S),b},f=p=>{let{routes:i=[],params:d={},separator:b,itemRender:S=J}=p;const _=[];return i.map($=>{const H=m($.path,d);H&&_.push(H);const x=[..._];let o=null;$.children&&$.children.length&&(o=l(Se,{items:$.children.map(u=>({key:u.path||u.breadcrumbName,label:S({route:u,params:d,routes:i,paths:h(x,u.path,d)})}))},null));const c={separator:b};return o&&(c.overlay=o),l(E,v(v({},c),{},{key:H||$.breadcrumbName}),{default:()=>[S({route:$,params:d,routes:i,paths:x})]})})};return()=>{var p;let i;const{routes:d,params:b={}}=e,S=G(M(t,e)),_=(p=M(t,e,"separator"))!==null&&p!==void 0?p:"/",$=e.itemRender||t.itemRender||J;d&&d.length>0?i=f({routes:d,params:b,separator:_,itemRender:$}):S.length&&(i=S.map((x,o)=>(le(typeof x.type=="object"&&(x.type.__ANT_BREADCRUMB_ITEM||x.type.__ANT_BREADCRUMB_SEPARATOR)),ie(x,{separator:_,key:o}))));const H={[n.value]:!0,[`${n.value}-rtl`]:s.value==="rtl",[`${a.class}`]:!!a.class,[y.value]:!0};return g(l("nav",v(v({},a),{},{class:H}),[l("ol",null,[i])]))}}});var we=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const Ae=()=>({prefixCls:String}),V=z({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:Ae(),setup(e,r){let{slots:t,attrs:a}=r;const{prefixCls:n}=D("breadcrumb",e);return()=>{var s;const{separator:g,class:y}=a,m=we(a,["separator","class"]),h=G((s=t.default)===null||s===void 0?void 0:s.call(t));return l("span",v({class:[`${n.value}-separator`,y]},m),[h.length>0?h:"/"])}}});R.Item=E;R.Separator=V;R.install=function(e){return e.component(R.name,R),e.component(E.name,E),e.component(V.name,V),e};var Ie=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const Me={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},je=z({compatConfig:{MODE:3},name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup(e,r){let{slots:t,emit:a,attrs:n,expose:s}=r;const g=re(),y=i=>{const{keyCode:d}=i;d===q.ENTER&&i.preventDefault()},m=i=>{const{keyCode:d}=i;d===q.ENTER&&a("click",i)},h=i=>{a("click",i)},f=()=>{g.value&&g.value.focus()},p=()=>{g.value&&g.value.blur()};return se(()=>{e.autofocus&&f()}),s({focus:f,blur:p}),()=>{var i;const{noStyle:d,disabled:b}=e,S=Ie(e,["noStyle","disabled"]);let _={};return d||(_=C({},Me)),b&&(_.pointerEvents="none"),l("div",v(v(v({role:"button",tabindex:0,ref:g},S),n),{},{onClick:h,onKeydown:y,onKeyup:m,style:C(C({},_),n.style||{})}),[(i=t.default)===null||i===void 0?void 0:i.call(t)])}}}),ze=e=>{const{componentCls:r,antCls:t}=e;return{[r]:C(C({},ae(e)),{position:"relative",padding:`${e.pageHeaderPaddingVertical}px ${e.pageHeaderPadding}px`,backgroundColor:e.colorBgContainer,[`&${r}-ghost`]:{backgroundColor:e.pageHeaderGhostBg},"&.has-footer":{paddingBottom:0},[`${r}-back`]:{marginRight:e.marginMD,fontSize:e.fontSizeLG,lineHeight:1,"&-button":C(C({},he(e)),{color:e.pageHeaderBackColor,cursor:"pointer"})},[`${t}-divider-vertical`]:{height:"14px",margin:`0 ${e.marginSM}`,verticalAlign:"middle"},[`${t}-breadcrumb + &-heading`]:{marginTop:e.marginXS},[`${r}-heading`]:{display:"flex",justifyContent:"space-between","&-left":{display:"flex",alignItems:"center",margin:`${e.marginXS/2}px 0`,overflow:"hidden"},"&-title":C({marginRight:e.marginSM,marginBottom:0,color:e.colorTextHeading,fontWeight:600,fontSize:e.pageHeaderHeadingTitle,lineHeight:`${e.controlHeight}px`},Z),[`${t}-avatar`]:{marginRight:e.marginSM},"&-sub-title":C({marginRight:e.marginSM,color:e.colorTextDescription,fontSize:e.pageHeaderHeadingSubTitle,lineHeight:e.lineHeight},Z),"&-extra":{margin:`${e.marginXS/2}px 0`,whiteSpace:"nowrap","> *":{marginLeft:e.marginSM,whiteSpace:"unset"},"> *:first-child":{marginLeft:0}}},[`${r}-content`]:{paddingTop:e.pageHeaderContentPaddingVertical},[`${r}-footer`]:{marginTop:e.marginMD,[`${t}-tabs`]:{[`> ${t}-tabs-nav`]:{margin:0,"&::before":{border:"none"}},[`${t}-tabs-tab`]:{paddingTop:e.paddingXS,paddingBottom:e.paddingXS,fontSize:e.pageHeaderTabFontSize}}},[`${r}-compact ${r}-heading`]:{flexWrap:"wrap"},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},Ee=k("PageHeader",e=>{const r=ee(e,{pageHeaderPadding:e.paddingLG,pageHeaderPaddingVertical:e.paddingMD,pageHeaderPaddingBreadcrumb:e.paddingSM,pageHeaderContentPaddingVertical:e.paddingSM,pageHeaderBackColor:e.colorTextBase,pageHeaderGhostBg:"transparent",pageHeaderHeadingTitle:e.fontSizeHeading4,pageHeaderHeadingSubTitle:e.fontSize,pageHeaderTabFontSize:e.fontSizeLG});return[ze(r)]}),De=()=>({backIcon:P(),prefixCls:String,title:P(),subTitle:P(),breadcrumb:j.object,tags:P(),footer:P(),extra:P(),avatar:Q(),ghost:{type:Boolean,default:void 0},onBack:Function}),Ne=z({compatConfig:{MODE:3},name:"APageHeader",inheritAttrs:!1,props:De(),slots:Object,setup(e,r){let{emit:t,slots:a,attrs:n}=r;const{prefixCls:s,direction:g,pageHeader:y}=D("page-header",e),[m,h]=Ee(s),f=re(!1),p=$e(),i=o=>{let{width:c}=o;p.value||(f.value=c<768)},d=de(()=>{var o,c,u;return(u=(o=e.ghost)!==null&&o!==void 0?o:(c=y==null?void 0:y.value)===null||c===void 0?void 0:c.ghost)!==null&&u!==void 0?u:!0}),b=()=>{var o,c,u;return(u=(o=e.backIcon)!==null&&o!==void 0?o:(c=a.backIcon)===null||c===void 0?void 0:c.call(a))!==null&&u!==void 0?u:g.value==="rtl"?l(be,null,null):l(fe,null,null)},S=o=>!o||!e.onBack?null:l(ge,{componentName:"PageHeader",children:c=>{let{back:u}=c;return l("div",{class:`${s.value}-back`},[l(je,{onClick:B=>{t("back",B)},class:`${s.value}-back-button`,"aria-label":u},{default:()=>[o]})])}},null),_=()=>{var o;return e.breadcrumb?l(R,e.breadcrumb,null):(o=a.breadcrumb)===null||o===void 0?void 0:o.call(a)},$=()=>{var o,c,u,B,T,w,N,X,L;const{avatar:F}=e,A=(o=e.title)!==null&&o!==void 0?o:(c=a.title)===null||c===void 0?void 0:c.call(a),I=(u=e.subTitle)!==null&&u!==void 0?u:(B=a.subTitle)===null||B===void 0?void 0:B.call(a),K=(T=e.tags)!==null&&T!==void 0?T:(w=a.tags)===null||w===void 0?void 0:w.call(a),U=(N=e.extra)!==null&&N!==void 0?N:(X=a.extra)===null||X===void 0?void 0:X.call(a),O=`${s.value}-heading`,W=A||I||K||U;if(!W)return null;const te=b(),Y=S(te);return l("div",{class:O},[(Y||F||W)&&l("div",{class:`${O}-left`},[Y,F?l(Ce,F,null):(L=a.avatar)===null||L===void 0?void 0:L.call(a),A&&l("span",{class:`${O}-title`,title:typeof A=="string"?A:void 0},[A]),I&&l("span",{class:`${O}-sub-title`,title:typeof I=="string"?I:void 0},[I]),K&&l("span",{class:`${O}-tags`},[K])]),U&&l("span",{class:`${O}-extra`},[l(xe,null,{default:()=>[U]})])])},H=()=>{var o,c;const u=(o=e.footer)!==null&&o!==void 0?o:pe((c=a.footer)===null||c===void 0?void 0:c.call(a));return me(u)?null:l("div",{class:`${s.value}-footer`},[u])},x=o=>l("div",{class:`${s.value}-content`},[o]);return()=>{var o,c;const u=((o=e.breadcrumb)===null||o===void 0?void 0:o.routes)||a.breadcrumb,B=e.footer||a.footer,T=G((c=a.default)===null||c===void 0?void 0:c.call(a)),w=ue(s.value,{"has-breadcrumb":u,"has-footer":B,[`${s.value}-ghost`]:d.value,[`${s.value}-rtl`]:g.value==="rtl",[`${s.value}-compact`]:f.value},n.class,h.value);return m(l(_e,{onResize:i},{default:()=>[l("div",v(v({},n),{},{class:w}),[_(),$(),T.length?x(T):null,H()])]}))}}}),qe=ce(Ne);export{qe as _};
