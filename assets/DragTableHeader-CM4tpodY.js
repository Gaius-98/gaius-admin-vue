import{d as b,W as v,au as M,X as x,r as X,D as r,E,F as I,G as n,I as p,Y as N,aG as S,$ as B,g as h,M as L,N as y,h as R,v as T,S as W,aB as $,K as z,V as F}from"./index-Dr_xJf3r.js";import{V as G}from"./vue-draggable-next.esm-bundler-CLLyQiI7.js";import{S as H}from"./SwapOutlined-BT5bNgxg.js";import{D as O}from"./DeleteOutlined-OZk--kP_.js";const K=["onClick"],U=["onMousedown"],Y=b({__name:"DragTableHeader",props:v({columnId:{default:"id"}},{modelValue:{},modelModifiers:{}}),emits:v(["onClick","onRemove"],["update:modelValue"]),setup(c,{emit:f}){const g=c,{columnId:d}=M(g),a=x(c,"modelValue"),i=X(""),w=(t,s)=>{const e=(s==null?void 0:s.width)||t.target.parentNode.offsetWidth,l=t.clientX,o=C=>{const D=C.clientX-l,V=e+D;s.width=V},m=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",m)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",m)},u=f,k=t=>{i.value=t[d.value],u("onClick",t)},_=t=>{u("onRemove",t)};return(t,s)=>(r(),E(n(G),{list:a.value,"onUpdate:list":s[0]||(s[0]=e=>a.value=e),class:"drag-table-header",animation:"300",group:{name:"column",pull:!0,put:!0},"ghost-class":"ghost","chosen-class":"chosen","fallback-class":"chosen",handle:".drag-icon","force-fallback":!0},{default:I(()=>[(r(!0),p(z,null,N(a.value,(e,l)=>(r(),p("div",{key:e,style:S({width:e.width+"px"||"auto"}),class:B(["drag-table-header-item",{active:e[n(d)]==i.value}]),onClick:o=>k(e)},[h(n(H),{class:"drag-icon"}),L(" "+y(e.title)+" ",1),h(n(O),{onClick:o=>_(e)},null,8,["onClick"]),R(W("div",{class:"line",onMousedown:$(o=>w(o,e),["stop"])},null,40,U),[[T,l!=a.value.length-1]])],14,K))),128))]),_:1},8,["list"]))}}),Q=F(Y,[["__scopeId","data-v-dd4648b3"]]);export{Q as D};
