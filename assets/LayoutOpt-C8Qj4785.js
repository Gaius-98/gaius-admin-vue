import{u as L,j as X,_ as B,e as q}from"./index-DHr4AJ_f.js";import{g as M,aQ as A,s as O,u as $,L as R,X as E,p as J,o as d,h as I,C as Q,i as e,aR as N,aS as W,aI as j,q as b,P as c,R as D,S as Y,T as i,aT as Z,aU as H,aG as ee,af as te,l as o,w as s,F as oe,y as se,aV as ne,aW as ae,aX as le,J as p,aY as ie,aZ as ce,a_ as re,ah as ue,aB as de,aC as _e,a$ as pe}from"./.pnpm-DwIV1MCi.js";const me=M({__name:"LayoutMenu",setup(T){const m=A(),h=L(),{menuTree:g,themeCfg:x}=O(h),r=$("sy-admin-menu-selected",[],sessionStorage),n=$("sy-admin-menu-open",[],sessionStorage),C=R(()=>k(g.value)),k=l=>l.map(t=>{let a={key:(t==null?void 0:t.id)||"",...t};return a.icon&&(a.icon=E("span",{class:`iconfont icon-${a.icon}`})),t.children&&(a.children=k(t.children)),a}),y=(l,t)=>{for(let a=0;a<t.length;a++){const u=t[a];if(u.address===l)return u.id;if(u.children){const v=y(l,u.children);if(v)return v}}};J(()=>m.path,()=>{const l=y(m.path,g.value);l&&(r.value=[l])},{immediate:!0});const w=({item:l})=>{const{originItemValue:t}=l;X(t)};return(l,t)=>{const a=W;return d(),I(a,Q(l.$attrs,{items:C.value,theme:e(x).menuTheme,onSelect:w,openKeys:e(n),"onUpdate:openKeys":t[0]||(t[0]=u=>N(n)?n.value=u:null),selectedKeys:e(r),"onUpdate:selectedKeys":t[1]||(t[1]=u=>N(r)?r.value=u:null),style:{height:"100%","overflow-y":"auto"},class:"sy-menu"}),null,16,["items","theme","openKeys","selectedKeys"])}}}),Ke=B(me,[["__scopeId","data-v-5a18ebf9"]]),fe={class:"logo"},he=["src"],ge=M({__name:"LayoutLogo",setup(T){j(n=>({"2c5c8f8c":e(h).headerFontColor,32770384:e(h).headerBgColor}));const m=L(),{themeCfg:h,collapsed:g,systemSetting:x}=O(m),{onToggleCollapsed:r}=m;return(n,C)=>(d(),b("div",fe,[c("img",{src:e(x).projectLogo,alt:""},null,8,he),D(c("span",{class:"title"},i(e(x).projectName),513),[[Y,!e(g)]]),e(g)?(d(),I(e(Z),{key:0,class:"trigger",onClick:e(r)},null,8,["onClick"])):(d(),I(e(H),{key:1,class:"trigger",onClick:e(r)},null,8,["onClick"]))]))}}),$e=B(ge,[["__scopeId","data-v-b6204024"]]),ye={class:"layout-opt"},ve={class:"layout-opt-notice",title:"通知"},be={class:"content",style:{display:"flex","flex-direction":"column"}},xe={key:0,class:"notice-list",style:{padding:"0 5px"}},Ce={class:"title",style:{"font-size":"14px","font-weight":"bold"}},ke=["title"],we={style:{flex:"1","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},Se={class:"layout-opt-userinfo",title:"用户信息"},Ie=["src"],Le={class:"layout-opt-userinfo-name"},Be=M({__name:"LayoutOpt",setup(T){j(v=>({"2eb059ea":e(r).headerFontColor,"28f25134":e(r).headerBgColor}));const m=ee(),h=L(),g=R(()=>k.value.map(v=>v.roleName).join(",")),{local:x,themeCfg:r,userInfo:n,orgInfo:C,roleInfo:k,noticeInfo:y}=O(h),{onOpenConfigDrawer:w,onToggleLocal:l}=h,t=()=>{window.open("https://github.com/Gaius-98/gaius-admin","_blank")},a=()=>{q.remove(),m.push({path:"/login"})},u=()=>{m.push({path:"/system/notice-message"})};return(v,S)=>{const V=ie,F=ce,K=re,G=ue,f=de,P=_e,U=pe,z=te("has-perm");return d(),b("div",ye,[D((d(),b("div",ve,[o(K,{title:"通知",trigger:"click"},{content:s(()=>[c("div",be,[e(y)&&e(y).list.length>0?(d(),b("div",xe,[(d(!0),b(oe,null,se(e(y).list,_=>(d(),b("div",{key:_.id,style:{display:"flex","flex-direction":"column","justify-items":"flex-start","border-bottom":"1px solid rgba(5, 5, 5, 0.06)",padding:"5px",width:"200px"}},[c("div",Ce,i(_.notice.title),1),c("div",{class:"content",title:_.notice.content,style:{display:"flex",width:"100%"}},[c("div",we,i(_.notice.content),1),c("a",{style:{width:"50px","text-decoration":"underline"},onClick:S[0]||(S[0]=Me=>u())},"查看 ")],8,ke)]))),128))])):(d(),I(V,{key:1}))])]),default:s(()=>[o(F,{count:e(y).total,"overflow-count":3,class:"badge"},null,8,["count"]),o(e(ne))]),_:1})])),[[z,"private:notice:limit"]]),c("div",{class:"layout-opt-theme",onClick:S[1]||(S[1]=(..._)=>e(w)&&e(w)(..._)),title:"主题配置"},[o(e(ae))]),c("div",{class:"layout-opt-github",onClick:t,title:"github"},[o(e(le))]),c("div",Se,[o(K,{placement:"bottomRight"},{content:s(()=>[o(G,{onClick:a,block:""},{default:s(()=>[p(" 退出 ")]),_:1})]),title:s(()=>[o(P,{title:"用户信息",size:"small",column:2,style:{width:"400px"}},{default:s(()=>[o(f,{label:"姓名"},{default:s(()=>[p(i(e(n).name),1)]),_:1}),o(f,{label:"用户名"},{default:s(()=>[p(i(e(n).username),1)]),_:1}),o(f,{label:"邮箱"},{default:s(()=>[p(i(e(n).email),1)]),_:1}),o(f,{label:"手机"},{default:s(()=>[p(i(e(n).phone),1)]),_:1}),o(f,{label:"角色"},{default:s(()=>[p(i(g.value),1)]),_:1}),o(f,{label:"所属机构"},{default:s(()=>{var _;return[p(i((_=e(C))==null?void 0:_.name),1)]}),_:1}),o(f,{label:"上次登录IP",span:2},{default:s(()=>[p(i(e(n).lastLoginIp),1)]),_:1}),o(f,{label:"登录IP",span:2},{default:s(()=>[p(i(e(n).loginIp),1)]),_:1})]),_:1})]),default:s(()=>[o(U,null,{icon:s(()=>[c("img",{src:e(n).avatar||"",alt:""},null,8,Ie)]),_:1}),c("span",Le,i(e(n).name),1)]),_:1})])])}}}),Ne=B(Be,[["__scopeId","data-v-bd1b921e"]]);export{$e as L,Ne as a,Ke as b};
