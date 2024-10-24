function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LayoutView-BYzH6tvC.js","assets/.pnpm-CQm76_te.js","assets/.pnpm-B8XvGNo-.css","assets/SchemaForm-CZQEjxD-.js","assets/HomeView-9Y405umL.js","assets/CodeEditor.vue_vue_type_script_setup_true_name_EvCode_lang-CpKqJGLl.js","assets/BlankView-BeUgzHJ9.js","assets/MenuView-DvL54yrI.js","assets/menu-1gOVHn9k.js","assets/MenuView-C-lAJoZ-.css","assets/UserView-CYhNVgMZ.js","assets/ImagePicker-Isi-Gmxm.js","assets/resource-Caa8MKpu.js","assets/ImagePicker-BymuNb7A.css","assets/UserView-B-rC9g3J.css","assets/OrgView-D7pPDTM9.js","assets/OrgView-CauDlU9N.css","assets/DictView-BGtN7Go8.js","assets/dict-BZqdfx21.js","assets/DictView-CR8Lv7TH.css","assets/RoleView-CYBR1kTY.js","assets/RoleView-DRAH-v6M.css","assets/RequestView-BTh_rpwn.js","assets/http-CY9W1pNi.js","assets/EditTable-B2soikxP.js","assets/EditTable-SPepZD-M.css","assets/RequestView-D8MFHQGi.css","assets/ResourceView-LxnBXwQ7.js","assets/ResourceView-DNv5c5j5.css","assets/SettingView-DJjhgbTJ.js","assets/SettingView-B6rrPwn_.css","assets/LoginLog-CfqOrl7z.js","assets/LoginLog-CwrlciHu.css","assets/OptLog-DlmLQG5p.js","assets/OptLog-CPYCv5Kw.css","assets/NoticeView-Ci2BnEnK.js","assets/notice-eqoHyXhp.js","assets/NoticeView-CmygozyV.css","assets/NotifyMessage-C5TYlXGc.js","assets/NotifyMessage-D0v_j2tx.css","assets/SystemInfo-DA6S7PPG.js","assets/SystemInfo-D-UYu0oL.css","assets/FormEditor-BMQt5FJO.js","assets/LowCodeForm.vue_vue_type_script_setup_true_lang-Dii13ojY.js","assets/form-CL6aCgDe.js","assets/FormEditor-x3-kvSnF.css","assets/FormList-NUMhEw96.js","assets/FormList-BCO_XHId.css","assets/TableEditor-ACIjwN8G.js","assets/table-Dnhp_3zP.js","assets/LowCodeFormId.vue_vue_type_script_setup_true_lang-CMi2oEVC.js","assets/TableEditor-D1dTrbfZ.css","assets/TableList-Bs7c5nsK.js","assets/TableList-DRK7IWyr.css","assets/VisualList-B9gDkm_c.js","assets/VisualList-Dwczkzza.css","assets/VisualEditor-C26jnlh2.js","assets/VisualEditor-CXAvYAmQ.css","assets/LowCodeFormId-Dr1uy-sA.js","assets/LowCodeTable-JsNEwran.js","assets/LowCodeTable-6s2xZMMX.css","assets/IframeView-D22j2iE4.js","assets/NotFound-ODjEodUG.js","assets/LoginView-BSuTrZM3.js","assets/LoginView-CdhfC7vB.css","assets/PreviewTable-DdfHSaOl.js","assets/PreviewTable-Ak2e0XO5.css","assets/CodeEditor-Mnwskuvl.js","assets/ColorPicker-R0AshBsd.js","assets/ColorPicker-BWXd6GtE.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var K=Object.defineProperty;var J=(e,t,o)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var q=(e,t,o)=>(J(e,typeof t!="symbol"?t+"":t,o),o);import{a as A,c as Q,b as X,d as Y,e as P,f as ee,r as m,u as U,g as w,s as z,o as v,h as T,w as B,i as y,j as te,z as oe,k as ne,_ as re,l as se,v as ae,t as x,m as ie,n as ce,p as le,q as R,x as pe,F as ue,y as me,A as de,B as _e,C as fe,D as M,E as he,S as ge,Z as ve,G as ye,H as O}from"./.pnpm-CQm76_te.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const Ee="modulepreload",be=function(e){return"/"+e},j={},a=function(t,o,s){let n=Promise.resolve();if(o&&o.length>0){const r=document.getElementsByTagName("link");n=Promise.all(o.map(i=>{if(i=be(i),i in j)return;j[i]=!0;const c=i.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const _=r[u];if(_.href===i&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":Ee,c||(p.as="script",p.crossOrigin=""),p.href=i,document.head.appendChild(p),c)return new Promise((u,_)=>{p.addEventListener("load",u),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${i}`)))})}))}return n.then(()=>t()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})},Le=(e,t,o=1)=>{A.set(e,t.toString(),{expires:o})},Ie=e=>A.get(e),Oe=e=>{A.remove(e)};class Pe{constructor(){q(this,"_token","");const t=Ie("admin-token");t&&(this._token=t)}set(t){Le("admin-token",t),this._token=t}get(){return this._token}remove(){Oe("admin-token"),this._token=null}}const N=new Pe,Te=[{path:"/",name:"layout",component:()=>a(()=>import("./LayoutView-BYzH6tvC.js"),__vite__mapDeps([0,1,2,3])),redirect:{path:"/home"},children:[{path:"/home",name:"home",component:()=>a(()=>import("./HomeView-9Y405umL.js"),__vite__mapDeps([4,3,1,2,5]))},{path:"/system",name:"system",component:()=>a(()=>import("./BlankView-BeUgzHJ9.js"),__vite__mapDeps([6,1,2])),children:[{path:"menu",name:"menu",component:()=>a(()=>import("./MenuView-DvL54yrI.js"),__vite__mapDeps([7,8,1,2,9]))},{path:"user",name:"user",component:()=>a(()=>import("./UserView-CYhNVgMZ.js"),__vite__mapDeps([10,11,12,1,2,13,14]))},{path:"org",name:"org",component:()=>a(()=>import("./OrgView-D7pPDTM9.js"),__vite__mapDeps([15,1,2,16]))},{path:"dict",name:"dict",component:()=>a(()=>import("./DictView-BGtN7Go8.js"),__vite__mapDeps([17,18,1,2,19]))},{path:"role",name:"role",component:()=>a(()=>import("./RoleView-CYBR1kTY.js"),__vite__mapDeps([20,8,1,2,21]))},{path:"request",name:"request",component:()=>a(()=>import("./RequestView-BTh_rpwn.js"),__vite__mapDeps([22,23,1,2,24,25,26]))},{path:"resource",name:"resource",component:()=>a(()=>import("./ResourceView-LxnBXwQ7.js"),__vite__mapDeps([27,12,1,2,28]))},{path:"setting",name:"setting",component:()=>a(()=>import("./SettingView-DJjhgbTJ.js"),__vite__mapDeps([29,1,2,30,13]))},{path:"login-log",name:"loginLog",component:()=>a(()=>import("./LoginLog-CfqOrl7z.js"),__vite__mapDeps([31,1,2,32]))},{path:"opt-log",name:"optLog",component:()=>a(()=>import("./OptLog-DlmLQG5p.js"),__vite__mapDeps([33,1,2,34]))},{path:"notice",name:"notice",component:()=>a(()=>import("./NoticeView-Ci2BnEnK.js"),__vite__mapDeps([35,36,1,2,37]))},{path:"notice-message",name:"noticeMessage",component:()=>a(()=>import("./NotifyMessage-C5TYlXGc.js"),__vite__mapDeps([38,36,1,2,39]))},{path:"system-info",name:"systemInfo",component:()=>a(()=>import("./SystemInfo-DA6S7PPG.js"),__vite__mapDeps([40,1,2,41]))}]},{path:"/low-code",name:"lowCode",component:()=>a(()=>import("./BlankView-BeUgzHJ9.js"),__vite__mapDeps([6,1,2])),children:[{path:"form",name:"form",component:()=>a(()=>import("./FormEditor-BMQt5FJO.js"),__vite__mapDeps([42,1,2,43,44,3,18,45])),props:e=>e.query},{path:"form-list",name:"formList",component:()=>a(()=>import("./FormList-NUMhEw96.js"),__vite__mapDeps([46,44,1,2,47]))},{path:"table",name:"table",component:()=>a(()=>import("./TableEditor-ACIjwN8G.js"),__vite__mapDeps([48,1,2,3,23,49,50,43,44,5,24,25,51])),props:e=>e.query},{path:"table-list",name:"tableList",component:()=>a(()=>import("./TableList-Bs7c5nsK.js"),__vite__mapDeps([52,49,1,2,53]))},{path:"visual-list",name:"visualList",component:()=>a(()=>import("./VisualList-B9gDkm_c.js"),__vite__mapDeps([54,1,2,55]))},{path:"visual",name:"visual",component:()=>a(()=>import("./VisualEditor-C26jnlh2.js"),__vite__mapDeps([56,1,2,50,43,44,57]))}]},{path:"/apply",name:"apply",children:[{path:"form",name:"apply-form",component:()=>a(()=>import("./LowCodeFormId-Dr1uy-sA.js"),__vite__mapDeps([58,50,43,1,2,44])),props:e=>e.query},{path:"table",name:"apply-table",component:()=>a(()=>import("./LowCodeTable-JsNEwran.js"),__vite__mapDeps([59,50,43,1,2,44,49,23,60])),props:e=>e.query},{path:"iframe",name:"iframe",component:()=>a(()=>import("./IframeView-D22j2iE4.js"),__vite__mapDeps([61,1,2])),props:e=>e.query}]},{path:"/:pathMatch(.*)*",name:"404",component:()=>a(()=>import("./NotFound-ODjEodUG.js"),__vite__mapDeps([62,1,2]))}]},{path:"/login",name:"login",component:()=>a(()=>import("./LoginView-BSuTrZM3.js"),__vite__mapDeps([63,1,2,64]))},{path:"/preview-table",name:"previewLowCodeTable",component:()=>a(()=>import("./PreviewTable-DdfHSaOl.js"),__vite__mapDeps([65,59,50,43,1,2,44,49,23,60,66])),props:e=>e.query}],E=Q({history:X("/"),routes:Te});E.beforeEach((e,t,o)=>{e.path=="/login"||N.get()?o():o("/login")});const Re=e=>{const{type:t,address:o,openType:s}=e;switch(t){case"front":s=="_self"?E.push({path:o}):s=="_blank"&&window.open(o,"_blank");break;case"page":break;case"form":E.push({path:"/apply/form",query:{id:o}});break;case"table":E.push({path:"/apply/table",query:{id:o}});break;case"iframe":E.push({path:"/apply/iframe",query:{id:encodeURIComponent(o)}});break}},D=Y.create({baseURL:"/prod",timeout:6e4});D.interceptors.request.use(e=>(e.headers.Authorization=`Bearer ${N.get()}`,e),e=>e);D.interceptors.response.use(e=>{const{code:t,msg:o}=e.data;return t!=200&&P.error(o),e.data},e=>{var t,o;return P.error(((t=e.response)==null?void 0:t.data).msg||e.message),((o=e.response)==null?void 0:o.data).code==403&&Re({type:"front",openType:"_self",address:"/login"}),Promise.reject(e)});const d=e=>new Promise((t,o)=>{D.request(e).then(s=>{t(s)},s=>{o(s)})}),Ae={getMenu:()=>d({url:"/menu",method:"get"})},we={getList:e=>d({method:"get",url:"user/list",params:e}),getDetail:e=>d({method:"get",url:"user/detail",params:{userId:e}}),getUserInfo:()=>d({method:"get",url:"auth/userInfo"}),remove:e=>d({method:"get",url:"user/remove",params:{userId:e}}),add:e=>d({method:"post",url:"user/register",data:e}),update:e=>d({method:"post",url:"user/update",data:e}),getRoleDict:()=>d({method:"get",url:"role/dict"})},$={getDict:e=>d({method:"get",url:"/dict/dictByType",params:{dictType:e}}),getSetting:e=>d({method:"get",url:"/setting/byType",params:{type:e}}),getOrgTree:e=>d({url:"org/orgTree",method:"get",params:{keyword:e}}),getNotice:()=>d({url:"notice/list/ByUser/limit",method:"get"})},G=ee("system",()=>{const e=m([]),t=m(!1),o=()=>{t.value=!0},s=()=>{t.value=!1},n=m("zh"),r=()=>{n.value=="en"?n.value="zh":n.value="en"},i=U("gaius-theme-json",{projectName:"gaius-admin",logo:"/prod/uploads/3a587351093a7d331c2f210100eaef5593.png",loginBg:"/prod/uploads/bef69558f77f710e05a25f66ad1076bed7.webp",colorPrimary:"#1677ff",headerBgColor:"#001529",headerFontColor:"#ffffff",menuTheme:"light",layoutMode:"horizontal",watermarkVisible:!1,watermarkText:"gaius-admin"}),c=m({}),l=m({}),f=m([]),p=m({name:"",status:"",sortNum:0}),u=m({list:[],total:0}),_=U("gaius-permissions",[]),I=m(!1),H=()=>{I.value=!I.value},W=h=>{c.value=h},V=async()=>{const{data:h}=await Ae.getMenu();e.value=h},k=async()=>{const{data:{user:h,roles:b,permissions:S,org:Z}}=await we.getUserInfo();l.value=h,f.value=b,p.value=Z,_.value=S},C=async()=>{const{code:h,data:b,msg:S}=await $.getNotice();h==200&&(u.value.list=b.data,u.value.total=b.total)};return{menuTree:e,isConfigVisible:t,local:n,onOpenConfigDrawer:o,onCloseConfigDrawer:s,onToggleLocal:r,themeCfg:i,collapsed:I,onToggleCollapsed:H,startUp:async()=>{await V(),await k(),await C()},getMenu:V,userInfo:l,getUserInfo:k,permissionInfo:_,systemSetting:c,setSystemSetting:W,orgInfo:p,roleInfo:f,getNoticeList:C,noticeInfo:u}}),De=w({__name:"App",setup(e){const t=m("middle");$.getSetting("system").then(i=>{const{code:c,data:l,msg:f}=i;if(c==200){let p=document.querySelector('link[rel="icon"]');p.href=l.projectLogo;let u=document.querySelector("title");u.innerText=l.projectName,s(l)}else P.error("获取系统配置失败")});const o=G(),{setSystemSetting:s}=o,{local:n,themeCfg:r}=z(o);return(i,c)=>{const l=ne("router-view"),f=re;return v(),T(f,{locale:y(n)=="en"?y(te):y(oe),"component-size":t.value,theme:{token:{colorPrimary:y(r).colorPrimary}}},{default:B(()=>[se(l)]),_:1},8,["locale","component-size","theme"])}}}),Ze=(e,t,o="json")=>{const s=document.createElement("a"),n=new Blob([e]);t=`${decodeURI(encodeURI(t||ae()))}.${o}`,s.href=URL.createObjectURL(n),s.setAttribute("download",t),document.body.appendChild(s),s.click(),document.body.removeChild(s)},Ve=()=>{const e=document.querySelector(".pre-loading");e&&e.remove()},Ke=(e,t)=>t.split(".").reduce((s,n)=>{if(s!=null)return s[n]||null},e),Je=(e,t,o)=>{const s=t.split(".");s.reduce((n,r,i)=>(i===s.length-1?n[r]=o||void 0:n[r]||(n[r]={}),n[r]),e)},Qe=e=>{if(typeof e=="string")return Number(e)!==0;if(typeof e=="number")return e!==0},ke={install:(e,t)=>{e.provide("sfProvideEL",t)}},Ce=w({__name:"GEchart",props:{option:{default:()=>({})}},emits:[""],setup(e,{emit:t}){const o=e,s=m(!0),{option:n}=x(o),r=ie({});Object.assign(r,n.value);const i=m();let c;const l=m(0),f=()=>{c?(c.clear(),c.setOption(r)):i.value&&(c=pe(i.value),c.setOption(r)),s.value=!1},p=new ResizeObserver(u=>{l.value&&clearTimeout(l.value),l.value=window.setTimeout(()=>{try{c.resize()}catch(_){console.warn(`chart重新设置大小失败,失败原因：${_}`)}},50)});return ce(()=>{f(),p.observe(i.value)}),le(n,()=>{Object.assign(r,n.value),f()},{deep:!0}),(u,_)=>(v(),R("div",{ref_key:"GEchart",ref:i,class:"ev-chart"},null,512))}}),F=(e,t)=>{const o=e.__vccOpts||e;for(const[s,n]of t)o[s]=n;return o},Se=F(Ce,[["__scopeId","data-v-da7e9beb"]]),qe={class:"visual-group"},Ue=w({__name:"VisualGroup",props:{data:{}},setup(e){const t=e,{data:o}=x(t);return(s,n)=>(v(),R("div",qe,[(v(!0),R(ue,null,me(y(o),r=>(v(),T(y(de),{key:r.id,disabled:!0,active:!1,left:r.position.left,top:r.position.top,width:r.size.width,height:r.size.height},{default:B(()=>[(v(),T(_e(r.tag),fe(r.props,{style:r.style||{}}),null,16,["style"]))]),_:2},1032,["left","top","width","height"]))),128))]))}}),je=F(Ue,[["__scopeId","data-v-0d1345e7"]]),ze={name:"has-perm",options:{beforeMount(e,t){const o=G(),{permissionInfo:s}=z(o);!s.value.includes(t.value)&&!s.value.includes("*")&&(e.style.display="none")}}},Be={render:e=>he(ge)},xe=()=>{const e=document.createElement("div");return Object.assign(e.style,{position:"absolute",zIndex:2e3,top:0,left:0,right:0,bottom:0,backgroudColor:"rgba(0,0,0,.2)",display:"flex",alignItems:"center",justifyContent:"center"}),e},L=xe(),Me=M(Be);Me.mount(L);const Ne={name:"loading",options:{beforeMount(e,t){const{value:o,modifiers:s}=t;s.fullscreen?e=document.body:(e.setAttribute("old-position",e.style.position),e.style.position="relative"),o&&e.appendChild(L)},update(e,t){const{value:o,modifiers:s}=t;if(s.fullscreen&&(e=document.body),o)e.setAttribute("old-position",e.style.position),e.style.position="relative",e.appendChild(L);else{const n=e.getAttribute("old-position");n?e.style.position=n:Reflect.deleteProperty(e.style,"position"),e.removeChild(L)}}}},$e=[ze,ve,Ne],Ge=e=>{$e.map(t=>{e.directive(t.name,t.options)})},g=M(De);g.use(ye());g.use(Ge);g.use(E);g.use(ke,{"code-editor":O(()=>a(()=>import("./CodeEditor-Mnwskuvl.js"),__vite__mapDeps([67,5,1,2]))),"color-picker":O(()=>a(()=>import("./ColorPicker-R0AshBsd.js"),__vite__mapDeps([68,1,2,69]))),"image-picker":O(()=>a(()=>import("./ImagePicker-Isi-Gmxm.js"),__vite__mapDeps([11,12,1,2,13])))});g.component("GEchart",Se);g.component("VisualGroup",je);g.mount("#app");Ve();export{F as _,a,we as b,$ as c,Ze as d,N as e,Ke as g,Qe as i,Re as j,d as r,Je as s,G as u};