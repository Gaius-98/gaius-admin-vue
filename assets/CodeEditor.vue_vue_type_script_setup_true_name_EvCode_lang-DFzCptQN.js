import{d as f,S as h,N as g,U as V,V as w,W as x,A as r,H as l,u as e,X as p,aa as u,c as y,a7 as B,F}from"./@vue-BvA2MXdg.js";import{T as M}from"./vue-codemirror-BENg5eLO.js";import{F as N}from"./@codemirror-Bw0AUzsQ.js";const C=f({__name:"CodeEditor",props:h({height:{default:400},prepend:{},append:{}},{value:{required:!0},valueModifiers:{}}),emits:["update:value"],setup(a){const i=a,{height:d,prepend:t,append:s}=g(i),o=V(a,"value"),m=[N()];return(c,n)=>(w(),x(F,null,[r(p("span",null,u(e(t)),513),[[l,e(t)]]),y(e(M),B({style:{height:`${e(d)}px`},"indent-with-tab":!0,"tab-size":2,extensions:m},c.$attrs,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=v=>o.value=v)}),null,16,["style","modelValue"]),r(p("span",null,u(e(s)),513),[[l,e(s)]])],64))}});export{C as _};
