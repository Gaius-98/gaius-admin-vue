import{d as C,g as S,s as k,m as L,aK as V,r as j,n as q,o as U,q as B,P as o,i as n,R as m,l as e,w as s,aV as R,a2 as M,a1 as N,aE as T,ba as O,bb as $,bc as z,J as E,$ as F,a0 as H,ad as I}from"./.pnpm-CCsI2FsW.js";import{r as P,u as A,e as D,_ as J}from"./index-CLs9IoH3.js";const g={login:d=>P({method:"post",url:"/auth/login",data:d}),getCaptcha:()=>C({baseURL:"/prod",method:"get",url:"/auth/captcha"})},K={class:"login"},G={class:"login-container"},Q={class:"login-form"},W={class:"project-header"},X=["src"],Y={class:"project-title"},Z=["innerHTML"],ee={class:"version"},te=S({__name:"LoginView",setup(d){T(c=>({"27c7a12c":n(f).colorPrimary}));const h=A(),{themeCfg:f,systemSetting:i}=k(h),a=L({username:"test",password:"test",captcha:""}),v=V(),y=()=>{g.login(a).then(c=>{const{code:t,data:l}=c;t==200&&(D.set(l),v.push("/home"))})},p=j(""),_=async()=>{const{data:c}=await g.getCaptcha();p.value=c};return q(()=>{_()}),(c,t)=>{const l=F,u=H,w=I,b=M,x=N;return U(),B("div",K,[o("div",{class:"login-bg",style:R({background:`url(${n(i).projectBgUrl})`,backgroundSize:"100% 100%"})},[o("div",G,[o("div",Q,[o("div",W,[o("img",{src:n(i).projectLogo,alt:"",srcset:"",class:"project-logo"},null,8,X),o("div",Y,m(n(i).projectName),1)]),e(b,{model:a,aligin:"left",hideRequiredMark:""},{default:s(()=>[e(u,{name:"username",rules:[{required:!0,message:"请输入账号"}]},{default:s(()=>[e(l,{value:a.username,"onUpdate:value":t[0]||(t[0]=r=>a.username=r),placeholder:"请输入账号"},{prefix:s(()=>[e(n(O))]),_:1},8,["value"])]),_:1}),e(u,{name:"password",rules:[{required:!0,message:"请输入密码"}]},{default:s(()=>[e(w,{value:a.password,"onUpdate:value":t[1]||(t[1]=r=>a.password=r),placeholder:"请输入密码"},{prefix:s(()=>[e(n($))]),_:1},8,["value"])]),_:1}),e(u,{name:"captcha",rules:[{required:!0,message:"请输入验证码"}]},{default:s(()=>[e(l,{value:a.captcha,"onUpdate:value":t[3]||(t[3]=r=>a.captcha=r),placeholder:"请输入验证码"},{prefix:s(()=>[e(n(z))]),addonAfter:s(()=>[o("div",{innerHTML:p.value,onClick:t[2]||(t[2]=r=>_()),style:{height:"100%"}},null,8,Z)]),_:1},8,["value"])]),_:1})]),_:1},8,["model"]),e(x,{type:"primary","html-type":"submit",style:{width:"100%"},onClick:y},{default:s(()=>[E(" 登录 ")]),_:1})])]),o("div",ee,m(n(i).projectVersion),1)],4)])}}}),oe=J(te,[["__scopeId","data-v-a23864ea"]]);export{oe as default};
