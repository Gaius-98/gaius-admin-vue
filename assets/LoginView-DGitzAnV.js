import{ae as b,bn as S,d as C,H as x,I,$ as L,aJ as k,r as V,b as q,J as B,L as M,a2 as r,aP as z,Q as d,X as F,g as a,M as s,aF as N,cz as R,a5 as T,O as U,ay as H,az as $,a4 as j,Z as J,a6 as P}from"./index-Dnllc660.js";import{I as A,_ as D}from"./index-CdPL3hVj.js";const m={login:o=>b({method:"post",url:"/auth/login",data:o}),getCaptcha:()=>S({baseURL:"/prod",method:"get",url:"/auth/captcha"})},E=o=>(H("data-v-dc35106e"),o=o(),$(),o),O={class:"login"},Q={class:"login-right"},X={class:"project-title"},Z={class:"login-right-form"},G=E(()=>r("div",{class:"form-title"},"用户登录",-1)),K=["innerHTML"],W=C({__name:"LoginView",setup(o){N(l=>({a79c6ce6:d(i).colorPrimary}));const g=x(),{themeCfg:i}=I(g),t=L({username:"",password:"",captcha:""}),h=k(),f=()=>{m.login(t).then(l=>{const{code:e,data:u}=l;e==200&&(R.set(u),h.push("/home"))})},p=V(""),_=async()=>{const{data:l}=await m.getCaptcha();p.value=l};return q(()=>{_()}),(l,e)=>{const u=A,c=j,v=D,y=J,w=T;return B(),M("div",O,[r("div",{class:"login-left",style:z({background:`url(${d(i).loginBg})`,backgroundSize:"100% 100%"})},null,4),r("div",Q,[r("div",X,F(d(i).projectName),1),r("div",Z,[G,a(w,{model:t,"label-col":{span:8},hideRequiredMark:"",onFinish:f},{default:s(()=>[a(c,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入账号"}]},{default:s(()=>[a(u,{value:t.username,"onUpdate:value":e[0]||(e[0]=n=>t.username=n)},null,8,["value"])]),_:1}),a(c,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}]},{default:s(()=>[a(v,{value:t.password,"onUpdate:value":e[1]||(e[1]=n=>t.password=n)},null,8,["value"])]),_:1}),a(c,{label:"验证码",name:"captcha",rules:[{required:!0,message:"请输入验证码"}]},{default:s(()=>[a(u,{value:t.captcha,"onUpdate:value":e[3]||(e[3]=n=>t.captcha=n)},{addonAfter:s(()=>[r("div",{innerHTML:p.value,onClick:e[2]||(e[2]=n=>_()),style:{height:"100%"}},null,8,K)]),_:1},8,["value"])]),_:1}),a(c,{"wrapper-col":{offset:8,span:16}},{default:s(()=>[a(y,{type:"primary","html-type":"submit",style:{width:"100%"}},{default:s(()=>[U(" 登录 ")]),_:1})]),_:1})]),_:1},8,["model"])])])])}}}),ae=P(W,[["__scopeId","data-v-dc35106e"]]);export{ae as default};
