import{d as b,g as S,aC as j,s as k,m as L,aI as V,r as q,n as U,o as B,q as R,P as o,j as n,R as m,l as e,w as s,aT as T,a4 as M,a2 as N,b8 as I,b9 as O,ba as $,J as z,$ as F,a0 as H,ad as P}from"./.pnpm-DmAI0IVr.js";import{r as A,u as D,e as E,_ as J}from"./index-B80LQDti.js";const g={login:d=>A({method:"post",url:"/auth/login",data:d}),getCaptcha:()=>b({baseURL:"/prod",method:"get",url:"/auth/captcha"})},G={class:"login"},K={class:"login-container"},Q={class:"login-form"},W={class:"project-header"},X=["src"],Y={class:"project-title"},Z=["innerHTML"],ee={class:"version"},te=S({__name:"LoginView",setup(d){j(c=>({"68476c21":n(f).colorPrimary}));const h=D(),{themeCfg:f,systemSetting:i}=k(h),a=L({username:"test",password:"test",captcha:""}),v=V(),y=()=>{g.login(a).then(c=>{const{code:t,data:l}=c;t==200&&(E.set(l),v.push("/home"))})},p=q(""),_=async()=>{const{data:c}=await g.getCaptcha();p.value=c};return U(()=>{_()}),(c,t)=>{const l=F,u=H,w=P,x=M,C=N;return B(),R("div",G,[o("div",{class:"login-bg",style:T({background:`url(${n(i).projectBgUrl})`,backgroundSize:"100% 100%"})},[o("div",K,[o("div",Q,[o("div",W,[o("img",{src:n(i).projectLogo,alt:"",srcset:"",class:"project-logo"},null,8,X),o("div",Y,m(n(i).projectName),1)]),e(x,{model:a,aligin:"left",hideRequiredMark:""},{default:s(()=>[e(u,{name:"username",rules:[{required:!0,message:"请输入账号"}]},{default:s(()=>[e(l,{value:a.username,"onUpdate:value":t[0]||(t[0]=r=>a.username=r),placeholder:"请输入账号"},{prefix:s(()=>[e(n(I))]),_:1},8,["value"])]),_:1}),e(u,{name:"password",rules:[{required:!0,message:"请输入密码"}]},{default:s(()=>[e(w,{value:a.password,"onUpdate:value":t[1]||(t[1]=r=>a.password=r),placeholder:"请输入密码"},{prefix:s(()=>[e(n(O))]),_:1},8,["value"])]),_:1}),e(u,{name:"captcha",rules:[{required:!0,message:"请输入验证码"}]},{default:s(()=>[e(l,{value:a.captcha,"onUpdate:value":t[3]||(t[3]=r=>a.captcha=r),placeholder:"请输入验证码"},{prefix:s(()=>[e(n($))]),addonAfter:s(()=>[o("div",{innerHTML:p.value,onClick:t[2]||(t[2]=r=>_()),style:{height:"100%"}},null,8,Z)]),_:1},8,["value"])]),_:1})]),_:1},8,["model"]),e(C,{type:"primary","html-type":"submit",style:{width:"100%"},onClick:y},{default:s(()=>[z(" 登录 ")]),_:1})])]),o("div",ee,m(n(i).projectVersion),1)],4)])}}}),oe=J(te,[["__scopeId","data-v-ee65d2c1"]]);export{oe as default};
