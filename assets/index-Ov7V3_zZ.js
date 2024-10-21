function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LayoutView-BPoy9hJE.js","assets/.pnpm-8LtkOrH2.js","assets/.pnpm-DxkFTwjz.css","assets/SchemaForm-DUG9qGca.js","assets/HomeView-DyxTKD3j.js","assets/CodeEditor.vue_vue_type_script_setup_true_name_EvCode_lang-CtRBiSck.js","assets/BlankView-D-c-R5H4.js","assets/MenuView-DqNaK5dW.js","assets/menu-B3R33kFs.js","assets/MenuView-C-lAJoZ-.css","assets/UserView-WZJG1K3I.js","assets/ImagePicker-BpcPEnva.js","assets/resource-NDTtHG99.js","assets/ImagePicker-BymuNb7A.css","assets/UserView-D4vWQ16k.css","assets/OrgView-BPj9U7vH.js","assets/OrgView-CauDlU9N.css","assets/DictView-DzGtM48s.js","assets/DictView-CR8Lv7TH.css","assets/RoleView-CpdY4Dc4.js","assets/RoleView-DRAH-v6M.css","assets/RequestView-pLZtaEJX.js","assets/RequestView-B7UQYcaC.css","assets/ResourceView-DyZLkS7V.js","assets/ResourceView-BO5FAEvx.css","assets/SettingView-CsqxtBuC.js","assets/SettingView-B6rrPwn_.css","assets/LoginLog-2lK0JnY3.js","assets/LoginLog-oLa7bnxa.css","assets/NoticeView-Dtapu6kl.js","assets/notice-CuCpDEtA.js","assets/NoticeView-s3DDEuLe.css","assets/NotifyMessage-DZ0ul47R.js","assets/NotifyMessage-DgbXIpcY.css","assets/DeviceView-tf0wwqic.js","assets/DeviceView-Bw_aC0vH.css","assets/ReportView-CCOZaKfb.js","assets/ReportView-BxPmagnz.css","assets/LogView-DerHql-z.js","assets/LogView-C3pxSEGw.css","assets/NotFound-C4wtBbL2.js","assets/LoginView-B-Ve2-QZ.js","assets/LoginView-CdhfC7vB.css","assets/CodeEditor-DPS8jIID.js","assets/ColorPicker-AdKOHkkK.js","assets/ColorPicker-_ImOMT5B.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Z=Object.defineProperty;var H=(e,t,o)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var C=(e,t,o)=>(H(e,typeof t!="symbol"?t+"":t,o),o);import{a as w,c as K,b as J,d as Q,e as O,f as X,r as m,u as q,g as R,s as N,o as v,h as b,w as B,i as y,j as Y,z as ee,k as te,_ as oe,l as re,t as U,m as se,n as ne,p as ae,q as I,v as ie,F as ce,x as le,y as ue,A as pe,B as me,Z as de,C as _e,D as fe,E as L}from"./.pnpm-8LtkOrH2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const he="modulepreload",ge=function(e){return"/"+e},z={},i=function(t,o,n){let s=Promise.resolve();if(o&&o.length>0){const r=document.getElementsByTagName("link");s=Promise.all(o.map(a=>{if(a=ge(a),a in z)return;z[a]=!0;const c=a.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!n)for(let p=r.length-1;p>=0;p--){const _=r[p];if(_.href===a&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":he,c||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),c)return new Promise((p,_)=>{u.addEventListener("load",p),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>t()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})},ve=(e,t,o=1)=>{w.set(e,t.toString(),{expires:o})},ye=e=>w.get(e),Ee=e=>{w.remove(e)};class Pe{constructor(){C(this,"_token","");const t=ye("admin-token");t&&(this._token=t)}set(t){ve("admin-token",t),this._token=t}get(){return this._token}remove(){Ee("admin-token"),this._token=null}}const j=new Pe,Te=[{path:"/",name:"layout",component:()=>i(()=>import("./LayoutView-BPoy9hJE.js"),__vite__mapDeps([0,1,2,3])),redirect:{path:"/home"},children:[{path:"/home",name:"home",component:()=>i(()=>import("./HomeView-DyxTKD3j.js"),__vite__mapDeps([4,3,1,2,5]))},{path:"/system",name:"system",component:()=>i(()=>import("./BlankView-D-c-R5H4.js"),__vite__mapDeps([6,1,2])),children:[{path:"menu",name:"menu",component:()=>i(()=>import("./MenuView-DqNaK5dW.js"),__vite__mapDeps([7,8,1,2,9]))},{path:"user",name:"user",component:()=>i(()=>import("./UserView-WZJG1K3I.js"),__vite__mapDeps([10,11,12,1,2,13,14]))},{path:"org",name:"org",component:()=>i(()=>import("./OrgView-BPj9U7vH.js"),__vite__mapDeps([15,1,2,16]))},{path:"dict",name:"dict",component:()=>i(()=>import("./DictView-DzGtM48s.js"),__vite__mapDeps([17,1,2,18]))},{path:"role",name:"role",component:()=>i(()=>import("./RoleView-CpdY4Dc4.js"),__vite__mapDeps([19,8,1,2,20]))},{path:"request",name:"request",component:()=>i(()=>import("./RequestView-pLZtaEJX.js"),__vite__mapDeps([21,1,2,22]))},{path:"resource",name:"resource",component:()=>i(()=>import("./ResourceView-DyZLkS7V.js"),__vite__mapDeps([23,12,1,2,24]))},{path:"setting",name:"setting",component:()=>i(()=>import("./SettingView-CsqxtBuC.js"),__vite__mapDeps([25,1,2,26,13]))},{path:"login-log",name:"loginLog",component:()=>i(()=>import("./LoginLog-2lK0JnY3.js"),__vite__mapDeps([27,1,2,28]))},{path:"notice",name:"notice",component:()=>i(()=>import("./NoticeView-Dtapu6kl.js"),__vite__mapDeps([29,30,1,2,31]))},{path:"notice-message",name:"noticeMessage",component:()=>i(()=>import("./NotifyMessage-DZ0ul47R.js"),__vite__mapDeps([32,30,1,2,33]))}]},{path:"/business",name:"business",component:()=>i(()=>import("./BlankView-D-c-R5H4.js"),__vite__mapDeps([6,1,2])),children:[{path:"device",name:"device",component:()=>i(()=>import("./DeviceView-tf0wwqic.js"),__vite__mapDeps([34,1,2,35,13]))},{path:"report",name:"report",component:()=>i(()=>import("./ReportView-CCOZaKfb.js"),__vite__mapDeps([36,1,2,37]))},{path:"log",name:"log",component:()=>i(()=>import("./LogView-DerHql-z.js"),__vite__mapDeps([38,1,2,39]))}]},{path:"/:pathMatch(.*)*",name:"404",component:()=>i(()=>import("./NotFound-C4wtBbL2.js"),__vite__mapDeps([40,1,2]))}]},{path:"/login",name:"login",component:()=>i(()=>import("./LoginView-B-Ve2-QZ.js"),__vite__mapDeps([41,1,2,42]))}],E=K({history:J("/"),routes:Te});E.beforeEach((e,t,o)=>{e.path=="/login"||j.get()?o():o("/login")});const Le=e=>{const{type:t,address:o,openType:n}=e;switch(t){case"front":n=="_self"?E.push({path:o}):n=="_blank"&&window.open(o,"_blank");break;case"page":break;case"form":E.push({path:"/apply/form",query:{id:o}});break;case"table":E.push({path:"/apply/table",query:{id:o}});break;case"iframe":E.push({path:"/apply/iframe",query:{id:encodeURIComponent(o)}});break}},k=Q.create({baseURL:"/prod",timeout:6e4});k.interceptors.request.use(e=>(e.headers.Authorization=`Bearer ${j.get()}`,e),e=>e);k.interceptors.response.use(e=>{const{code:t,msg:o}=e.data;return t!=200&&O.error(o),e.data},e=>{var t,o;return O.error(((t=e.response)==null?void 0:t.data).msg||e.message),((o=e.response)==null?void 0:o.data).code==403&&Le({type:"front",openType:"_self",address:"/login"}),Promise.reject(e)});const d=e=>new Promise((t,o)=>{k.request(e).then(n=>{t(n)},n=>{o(n)})}),Oe={getMenu:()=>d({url:"/menu",method:"get"})},be={getList:e=>d({method:"get",url:"user/list",params:e}),getDetail:e=>d({method:"get",url:"user/detail",params:{userId:e}}),getUserInfo:()=>d({method:"get",url:"auth/userInfo"}),remove:e=>d({method:"get",url:"user/remove",params:{userId:e}}),add:e=>d({method:"post",url:"user/register",data:e}),update:e=>d({method:"post",url:"user/update",data:e}),getRoleDict:()=>d({method:"get",url:"role/dict"})},M={getDict:e=>d({method:"get",url:"/dict/dictByType",params:{dictType:e}}),getSetting:e=>d({method:"get",url:"/setting/byType",params:{type:e}}),getOrgTree:e=>d({url:"org/orgTree",method:"get",params:{keyword:e}}),getNotice:()=>d({url:"notice/list/ByUser/limit",method:"get"}),getAllUser:()=>d({url:"user/all",method:"get"})},$=X("system",()=>{const e=m([]),t=m(!1),o=()=>{t.value=!0},n=()=>{t.value=!1},s=m("zh"),r=()=>{s.value=="en"?s.value="zh":s.value="en"},a=q("sy-theme-json",{projectName:"sy-admin",logo:"/prod/uploads/3a587351093a7d331c2f210100eaef5593.png",loginBg:"/prod/uploads/bef69558f77f710e05a25f66ad1076bed7.webp",colorPrimary:"#1677ff",headerBgColor:"#001529",headerFontColor:"#ffffff",menuTheme:"light",layoutMode:"horizontal",watermarkVisible:!1,watermarkText:"sy-admin"}),c=m({}),l=m({}),f=m([]),u=m({name:"",status:"",sortNum:0}),p=m({list:[],total:0}),_=q("sy-permissions",[]),T=m(!1),G=()=>{T.value=!T.value},F=h=>{c.value=h},A=async()=>{const{data:h}=await Oe.getMenu();e.value=h},D=async()=>{const{data:{user:h,roles:P,permissions:S,org:W}}=await be.getUserInfo();l.value=h,f.value=P,u.value=W,_.value=S},V=async()=>{const{code:h,data:P,msg:S}=await M.getNotice();h==200&&(p.value.list=P.data,p.value.total=P.total)};return{menuTree:e,isConfigVisible:t,local:s,onOpenConfigDrawer:o,onCloseConfigDrawer:n,onToggleLocal:r,themeCfg:a,collapsed:T,onToggleCollapsed:G,startUp:async()=>{await A(),await D(),await V()},getMenu:A,userInfo:l,getUserInfo:D,permissionInfo:_,systemSetting:c,setSystemSetting:F,orgInfo:u,roleInfo:f,getNoticeList:V,noticeInfo:p}}),Ie=R({__name:"App",setup(e){const t=m("middle");M.getSetting("system").then(a=>{const{code:c,data:l,msg:f}=a;if(c==200){let u=document.querySelector('link[rel="icon"]');u.href=l.projectLogo;let p=document.querySelector("title");p.innerText=l.projectName,n(l)}else O.error("获取系统配置失败")});const o=$(),{setSystemSetting:n}=o,{local:s,themeCfg:r}=N(o);return(a,c)=>{const l=te("router-view"),f=oe;return v(),b(f,{locale:y(s)=="en"?y(Y):y(ee),"component-size":t.value,theme:{token:{colorPrimary:y(r).colorPrimary}}},{default:B(()=>[re(l)]),_:1},8,["locale","component-size","theme"])}}}),we=()=>{const e=document.querySelector(".pre-loading");e&&e.remove()},je=(e,t)=>t.split(".").reduce((n,s)=>{if(n!=null)return n[s]||null},e),Me=(e,t,o)=>{const n=t.split(".");n.reduce((s,r,a)=>(a===n.length-1?s[r]=o||void 0:s[r]||(s[r]={}),s[r]),e)},$e=e=>{if(typeof e=="string")return Number(e)!==0;if(typeof e=="number")return e!==0},Re={install:(e,t)=>{e.provide("sfProvideEL",t)}},ke=R({__name:"GEchart",props:{option:{default:()=>({})}},emits:[""],setup(e,{emit:t}){const o=e,n=m(!0),{option:s}=U(o),r=se({});Object.assign(r,s.value);const a=m();let c;const l=m(0),f=()=>{c?(c.clear(),c.setOption(r)):a.value&&(c=ie(a.value),c.setOption(r)),n.value=!1},u=new ResizeObserver(p=>{l.value&&clearTimeout(l.value),l.value=window.setTimeout(()=>{try{c.resize()}catch(_){console.warn(`chart重新设置大小失败,失败原因：${_}`)}},50)});return ne(()=>{f(),u.observe(a.value)}),ae(s,()=>{Object.assign(r,s.value),f()},{deep:!0}),(p,_)=>(v(),I("div",{ref_key:"GEchart",ref:a,class:"ev-chart"},null,512))}}),x=(e,t)=>{const o=e.__vccOpts||e;for(const[n,s]of t)o[n]=s;return o},Ae=x(ke,[["__scopeId","data-v-da7e9beb"]]),De={class:"visual-group"},Ve=R({__name:"VisualGroup",props:{data:{}},setup(e){const t=e,{data:o}=U(t);return(n,s)=>(v(),I("div",De,[(v(!0),I(ce,null,le(y(o),r=>(v(),b(y(ue),{key:r.id,disabled:!0,active:!1,left:r.position.left,top:r.position.top,width:r.size.width,height:r.size.height},{default:B(()=>[(v(),b(pe(r.tag),me(r.props,{style:r.style||{}}),null,16,["style"]))]),_:2},1032,["left","top","width","height"]))),128))]))}}),Se=x(Ve,[["__scopeId","data-v-0d1345e7"]]),Ce={name:"has-perm",options:{beforeMount(e,t){const o=$(),{permissionInfo:n}=N(o);!n.value.includes(t.value)&&!n.value.includes("*")&&(e.style.display="none")}}},qe=[Ce,de],ze=e=>{qe.map(t=>{e.directive(t.name,t.options)})},g=_e(Ie);g.use(fe());g.use(ze);g.use(E);g.use(Re,{"code-editor":L(()=>i(()=>import("./CodeEditor-DPS8jIID.js"),__vite__mapDeps([43,5,1,2]))),"color-picker":L(()=>i(()=>import("./ColorPicker-AdKOHkkK.js"),__vite__mapDeps([44,1,2,45]))),"image-picker":L(()=>i(()=>import("./ImagePicker-BpcPEnva.js"),__vite__mapDeps([11,12,1,2,13])))});g.component("GEchart",Ae);g.component("VisualGroup",Se);g.mount("#app");we();export{x as _,i as a,be as b,M as c,j as d,je as g,$e as i,Le as j,d as r,Me as s,$ as u};
