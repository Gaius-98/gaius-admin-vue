import{u as S,j as z,_ as M,e as A}from"./index-UYYxOZ8-.js";import{g as B,bl as E,s as K,u as T,M as j,E as H,p as Q,o as d,h as L,C as Y,i as e,aA as $,bm as J,aH as D,q as v,Q as c,$ as F,b2 as W,T as i,bn as X,bo as Z,aN as ee,Y as te,l as o,w as s,F as oe,y as se,bp as ne,bq as ae,br as le,K as p,aM as ie,bs as ce,bt as re,a3 as ue,ar as de,as as _e,bu as pe}from"./.pnpm-CQm76_te.js";const me=B({__name:"LayoutMenu",setup(O){const m=E(),f=S(),{menuTree:h,themeCfg:x}=K(f),r=T("gaius-admin-menu-selected",[],sessionStorage),n=T("gaius-admin-menu-open",[],sessionStorage),C=j(()=>k(h.value)),k=l=>l.map(t=>{let a={key:(t==null?void 0:t.id)||"",...t};return a.icon&&(a.icon=H("span",{class:`iconfont icon-${a.icon}`})),t.children&&(a.children=k(t.children)),a}),y=(l,t)=>{for(let a=0;a<t.length;a++){const u=t[a];if(u.address===l)return u.id;if(u.children){const b=y(l,u.children);if(b)return b}}};Q(()=>m.path,()=>{const l=y(m.path,h.value);l&&(r.value=[l])},{immediate:!0});const w=({item:l})=>{const{originItemValue:t}=l;z(t)};return(l,t)=>{const a=J;return d(),L(a,Y(l.$attrs,{items:C.value,theme:e(x).menuTheme,onSelect:w,openKeys:e(n),"onUpdate:openKeys":t[0]||(t[0]=u=>$(n)?n.value=u:null),selectedKeys:e(r),"onUpdate:selectedKeys":t[1]||(t[1]=u=>$(r)?r.value=u:null),style:{height:"100%","overflow-y":"auto"},class:"gaius-menu"}),null,16,["items","theme","openKeys","selectedKeys"])}}}),Ne=M(me,[["__scopeId","data-v-a976a1d0"]]),ge={class:"logo"},fe=["src"],he=B({__name:"LayoutLogo",setup(O){D(n=>({"2c5c8f8c":e(f).headerFontColor,32770384:e(f).headerBgColor}));const m=S(),{themeCfg:f,collapsed:h,systemSetting:x}=K(m),{onToggleCollapsed:r}=m;return(n,C)=>(d(),v("div",ge,[c("img",{src:e(x).projectLogo,alt:""},null,8,fe),F(c("span",{class:"title"},i(e(x).projectName),513),[[W,!e(h)]]),e(h)?(d(),L(e(X),{key:0,class:"trigger",onClick:e(r)},null,8,["onClick"])):(d(),L(e(Z),{key:1,class:"trigger",onClick:e(r)},null,8,["onClick"]))]))}}),Te=M(he,[["__scopeId","data-v-b6204024"]]),ye={class:"layout-opt"},be={class:"layout-opt-notice",title:"通知"},ve={class:"content",style:{display:"flex","flex-direction":"column"}},xe={key:0,class:"notice-list",style:{padding:"0 5px"}},Ce={class:"title",style:{"font-size":"14px","font-weight":"bold"}},ke=["title"],we={style:{flex:"1","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},Ie={class:"layout-opt-userinfo",title:"用户信息"},Le=["src"],Se={class:"layout-opt-userinfo-name"},Me=B({__name:"LayoutOpt",setup(O){D(b=>({"2eb059ea":e(r).headerFontColor,"28f25134":e(r).headerBgColor}));const m=ee(),f=S(),h=j(()=>k.value.map(b=>b.roleName).join(",")),{local:x,themeCfg:r,userInfo:n,orgInfo:C,roleInfo:k,noticeInfo:y}=K(f),{onOpenConfigDrawer:w,onToggleLocal:l}=f,t=()=>{window.open("https://github.com/Gaius-98/gaius-admin","_blank")},a=()=>{A.remove(),m.push({path:"/login"})},u=()=>{m.push({path:"/system/notice-message"})};return(b,I)=>{const R=ie,V=ce,N=re,G=ue,g=de,P=_e,U=pe,q=te("has-perm");return d(),v("div",ye,[F((d(),v("div",be,[o(N,{title:"通知",trigger:"click"},{content:s(()=>[c("div",ve,[e(y)&&e(y).list.length>0?(d(),v("div",xe,[(d(!0),v(oe,null,se(e(y).list,_=>(d(),v("div",{key:_.id,style:{display:"flex","flex-direction":"column","justify-items":"flex-start","border-bottom":"1px solid rgba(5, 5, 5, 0.06)",padding:"5px",width:"200px"}},[c("div",Ce,i(_.notice.title),1),c("div",{class:"content",title:_.notice.content,style:{display:"flex",width:"100%"}},[c("div",we,i(_.notice.content),1),c("a",{style:{width:"50px","text-decoration":"underline"},onClick:I[0]||(I[0]=Be=>u())},"查看 ")],8,ke)]))),128))])):(d(),L(R,{key:1}))])]),default:s(()=>[o(V,{count:e(y).total,"overflow-count":3,class:"badge"},null,8,["count"]),o(e(ne))]),_:1})])),[[q,"private:notice:limit"]]),c("div",{class:"layout-opt-theme",onClick:I[1]||(I[1]=(..._)=>e(w)&&e(w)(..._)),title:"主题配置"},[o(e(ae))]),c("div",{class:"layout-opt-github",onClick:t,title:"github"},[o(e(le))]),c("div",Ie,[o(N,{placement:"bottomRight"},{content:s(()=>[o(G,{onClick:a,block:""},{default:s(()=>[p(" 退出 ")]),_:1})]),title:s(()=>[o(P,{title:"用户信息",size:"small",column:2,style:{width:"400px"}},{default:s(()=>[o(g,{label:"姓名"},{default:s(()=>[p(i(e(n).name),1)]),_:1}),o(g,{label:"用户名"},{default:s(()=>[p(i(e(n).username),1)]),_:1}),o(g,{label:"邮箱"},{default:s(()=>[p(i(e(n).email),1)]),_:1}),o(g,{label:"手机"},{default:s(()=>[p(i(e(n).phone),1)]),_:1}),o(g,{label:"角色"},{default:s(()=>[p(i(h.value),1)]),_:1}),o(g,{label:"所属机构"},{default:s(()=>{var _;return[p(i((_=e(C))==null?void 0:_.name),1)]}),_:1}),o(g,{label:"上次登录IP",span:2},{default:s(()=>[p(i(e(n).lastLoginIp),1)]),_:1}),o(g,{label:"登录IP",span:2},{default:s(()=>[p(i(e(n).loginIp),1)]),_:1})]),_:1})]),default:s(()=>[o(U,null,{icon:s(()=>[c("img",{src:e(n).avatar||"",alt:""},null,8,Le)]),_:1}),c("span",Se,i(e(n).name),1)]),_:1})])])}}}),$e=M(Me,[["__scopeId","data-v-bd1b921e"]]);export{Te as L,$e as a,Ne as b};