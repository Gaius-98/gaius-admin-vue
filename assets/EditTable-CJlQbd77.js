import{e as M,H as U,I as $,t as N,L as c,o as s,g as i,w as p,W as r,q as O,j as _,h as m,a_ as y,a$ as R,J as j,ac as K,X as q,T as z,$ as A,a4 as F}from"./.pnpm-0Jz4sC39.js";import{_ as H}from"./index-L8l6AuQJ.js";const J={key:2,style:{display:"flex"}},L=M({__name:"EditTable",props:U({columns:{},action:{type:Boolean,default:!0},height:{default:150}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(v){const u=$(v,"modelValue");let C=v;const{columns:o,action:I}=N(C),k=c(()=>x("input")),b=c(()=>x("select")),g=c(()=>I.value?[...o.value,{title:"操作",dataIndex:"_action_"}]:o.value),h=t=>{var e;return((e=o.value.find(d=>d.dataIndex==t))==null?void 0:e.options)||[]},x=t=>o.value.filter(e=>e.type==t).map(e=>e.dataIndex),f=()=>{let t={};o.value.map(e=>{Reflect.set(t,e.dataIndex,"")}),u.value.push(t)},B=t=>{u.value.splice(t,1)};return(t,e)=>{const d=q,T=z,V=A,w=F;return s(),i(w,{columns:g.value,"data-source":u.value,pagination:!1,rowKey:(a,n)=>n,size:"small",scroll:{y:t.height}},{bodyCell:p(({column:a,record:n,index:E})=>[k.value.includes(a.dataIndex)?(s(),i(d,{key:0,value:n[a.dataIndex],"onUpdate:value":l=>n[a.dataIndex]=l},null,8,["value","onUpdate:value"])):r("",!0),b.value.includes(a.dataIndex)?(s(),i(T,{key:1,value:n[a.dataIndex],"onUpdate:value":l=>n[a.dataIndex]=l,options:h(a.dataIndex)},null,8,["value","onUpdate:value","options"])):r("",!0),a.dataIndex=="_action_"?(s(),O("div",J,[_(m(y),{class:"icon",onClick:e[0]||(e[0]=l=>f())}),_(m(R),{class:"icon",onClick:l=>B(E)},null,8,["onClick"])])):r("",!0)]),emptyText:p(()=>[_(V,{type:"text",onClick:f,icon:K(m(y))},{default:p(()=>[j(" 新增数据")]),_:1},8,["icon"])]),_:1},8,["columns","data-source","rowKey","scroll"])}}}),X=H(L,[["__scopeId","data-v-5b9e8dbe"]]);export{X as E};
