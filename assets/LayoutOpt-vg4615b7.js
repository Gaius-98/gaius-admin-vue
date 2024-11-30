import{u as I,j as A,_ as S,e as E}from"./index-bp98ELWv.js";import{g as M,aU as q,s as B,u as O,a8 as j,E as G,p as W,o as d,h as L,C as X,i as e,aV as $,aW as Y,aM as T,q as b,N as r,L as D,M as Z,O as c,aX as H,aY as J,aK as Q,ac as ee,l as o,w as s,F as te,y as oe,aZ as se,a_ as ne,a6 as p,a$ as ae,b0 as le,b1 as ie,ai as ce,aj as re,al as ue,b2 as de}from"./.pnpm-CWzuy1aI.js";const _e=M({__name:"LayoutMenu",setup(K){const m=q(),g=I(),{menuTree:y,themeCfg:x}=B(g),u=O("sy-admin-menu-selected",[],sessionStorage),n=O("sy-admin-menu-open",[],sessionStorage),C=j(()=>k(y.value)),k=l=>l.map(t=>{let a={key:(t==null?void 0:t.id)||"",...t};return a.icon&&(a.icon=G("span",{class:`iconfont icon-${a.icon}`})),t.children&&(a.children=k(t.children)),a}),h=(l,t)=>{for(let a=0;a<t.length;a++){const i=t[a];if(i.address===l)return i.id;if(i.children){const v=h(l,i.children);if(v)return v}}};W(()=>m.path,()=>{const l=h(m.path,y.value);l&&(u.value=[l])},{immediate:!0});const w=({item:l})=>{const{originItemValue:t}=l;A(t)};return(l,t)=>{const a=Y;return d(),L(a,X(l.$attrs,{items:C.value,theme:e(x).menuTheme,onSelect:w,openKeys:e(n),"onUpdate:openKeys":t[0]||(t[0]=i=>$(n)?n.value=i:null),selectedKeys:e(u),"onUpdate:selectedKeys":t[1]||(t[1]=i=>$(u)?u.value=i:null),style:{height:"100%","overflow-y":"auto"},class:"sy-menu"}),null,16,["items","theme","openKeys","selectedKeys"])}}}),Ke=S(_e,[["__scopeId","data-v-5a18ebf9"]]),pe={class:"logo"},me=["src"],fe=M({__name:"LayoutLogo",setup(K){T(n=>({"2c5c8f8c":e(g).headerFontColor,32770384:e(g).headerBgColor}));const m=I(),{themeCfg:g,collapsed:y,systemSetting:x}=B(m),{onToggleCollapsed:u}=m;return(n,C)=>(d(),b("div",pe,[r("img",{src:e(x).projectLogo,alt:""},null,8,me),D(r("span",{class:"title"},c(e(x).projectName),513),[[Z,!e(y)]]),e(y)?(d(),L(e(H),{key:0,class:"trigger",onClick:e(u)},null,8,["onClick"])):(d(),L(e(J),{key:1,class:"trigger",onClick:e(u)},null,8,["onClick"]))]))}}),Ne=S(fe,[["__scopeId","data-v-b6204024"]]),ge={class:"layout-opt"},ye={class:"layout-opt-notice",title:"通知"},he={class:"content",style:{display:"flex","flex-direction":"column"}},ve={key:0,class:"notice-list",style:{padding:"0 5px"}},be={class:"title",style:{"font-size":"14px","font-weight":"bold"}},xe=["title"],Ce={style:{flex:"1","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},ke={class:"layout-opt-userinfo",title:"用户信息"},we=["src"],Le={class:"layout-opt-userinfo-name"},Ie=M({__name:"LayoutOpt",setup(K){T(i=>({"9b273e02":e(u).headerFontColor,"6cbf1989":e(u).headerBgColor}));const m=Q(),g=I(),y=j(()=>k.value.map(i=>i.roleName).join(",")),{local:x,themeCfg:u,userInfo:n,orgInfo:C,roleInfo:k,noticeInfo:h}=B(g),{onOpenConfigDrawer:w,onToggleLocal:l}=g,t=()=>{E.remove(),m.push({path:"/login"})},a=()=>{m.push({path:"/system/notice-message"})};return(i,v)=>{const V=ae,F=le,N=ie,R=ce,f=re,P=ue,U=de,z=ee("has-perm");return d(),b("div",ge,[D((d(),b("div",ye,[o(N,{title:"通知",trigger:"click"},{content:s(()=>[r("div",he,[e(h)&&e(h).list.length>0?(d(),b("div",ve,[(d(!0),b(te,null,oe(e(h).list,_=>(d(),b("div",{key:_.id,style:{display:"flex","flex-direction":"column","justify-items":"flex-start","border-bottom":"1px solid rgba(5, 5, 5, 0.06)",padding:"5px",width:"200px"}},[r("div",be,c(_.notice.title),1),r("div",{class:"content",title:_.notice.content,style:{display:"flex",width:"100%"}},[r("div",Ce,c(_.notice.content),1),r("a",{style:{width:"50px","text-decoration":"underline"},onClick:v[0]||(v[0]=Se=>a())},"查看 ")],8,xe)]))),128))])):(d(),L(V,{key:1}))])]),default:s(()=>[o(F,{count:e(h).total,"overflow-count":3,class:"badge"},null,8,["count"]),o(e(se))]),_:1})])),[[z,"private:notice:limit"]]),r("div",{class:"layout-opt-theme",onClick:v[1]||(v[1]=(..._)=>e(w)&&e(w)(..._)),title:"主题配置"},[o(e(ne))]),r("div",ke,[o(N,{placement:"bottomRight"},{content:s(()=>[o(R,{onClick:t,block:""},{default:s(()=>[p(" 退出 ")]),_:1})]),title:s(()=>[o(P,{title:"用户信息",size:"small",column:2,style:{width:"400px"}},{default:s(()=>[o(f,{label:"姓名"},{default:s(()=>[p(c(e(n).name),1)]),_:1}),o(f,{label:"用户名"},{default:s(()=>[p(c(e(n).username),1)]),_:1}),o(f,{label:"邮箱"},{default:s(()=>[p(c(e(n).email),1)]),_:1}),o(f,{label:"手机"},{default:s(()=>[p(c(e(n).phone),1)]),_:1}),o(f,{label:"角色"},{default:s(()=>[p(c(y.value),1)]),_:1}),o(f,{label:"所属机构"},{default:s(()=>{var _;return[p(c((_=e(C))==null?void 0:_.name),1)]}),_:1}),o(f,{label:"上次登录IP",span:2},{default:s(()=>[p(c(e(n).lastLoginIp),1)]),_:1}),o(f,{label:"登录IP",span:2},{default:s(()=>[p(c(e(n).loginIp),1)]),_:1})]),_:1})]),default:s(()=>[o(U,null,{icon:s(()=>[r("img",{src:e(n).avatar||"",alt:""},null,8,we)]),_:1}),r("span",Le,c(e(n).name),1)]),_:1})])])}}}),Oe=S(Ie,[["__scopeId","data-v-a5f9655d"]]);export{Ne as L,Oe as a,Ke as b};
