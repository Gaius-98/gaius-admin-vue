import{g as w,I as U,J as K,t as N,M as c,o as s,h as i,w as p,a0 as r,q as O,l as _,i as m,b5 as y,b6 as R,K as $,E as j,a1 as q,V as z,a3 as A,a7 as F}from"./.pnpm-CQm76_te.js";import{_ as J}from"./index-UYYxOZ8-.js";const P={key:2,style:{display:"flex"}},D=w({__name:"EditTable",props:U({columns:{},action:{type:Boolean,default:!0},height:{default:150}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(v){const u=K(v,"modelValue");let C=v;const{columns:o,action:I}=N(C),b=c(()=>x("input")),k=c(()=>x("select")),g=c(()=>I.value?[...o.value,{title:"操作",dataIndex:"_action_"}]:o.value),h=t=>{var e;return((e=o.value.find(d=>d.dataIndex==t))==null?void 0:e.options)||[]},x=t=>o.value.filter(e=>e.type==t).map(e=>e.dataIndex),f=()=>{let t={};o.value.map(e=>{Reflect.set(t,e.dataIndex,"")}),u.value.push(t)},V=t=>{u.value.splice(t,1)};return(t,e)=>{const d=q,B=z,E=A,M=F;return s(),i(M,{columns:g.value,"data-source":u.value,pagination:!1,rowKey:(a,n)=>n,size:"small",scroll:{y:t.height}},{bodyCell:p(({column:a,record:n,index:T})=>[b.value.includes(a.dataIndex)?(s(),i(d,{key:0,value:n[a.dataIndex],"onUpdate:value":l=>n[a.dataIndex]=l},null,8,["value","onUpdate:value"])):r("",!0),k.value.includes(a.dataIndex)?(s(),i(B,{key:1,value:n[a.dataIndex],"onUpdate:value":l=>n[a.dataIndex]=l,options:h(a.dataIndex)},null,8,["value","onUpdate:value","options"])):r("",!0),a.dataIndex=="_action_"?(s(),O("div",P,[_(m(y),{class:"icon",onClick:e[0]||(e[0]=l=>f())}),_(m(R),{class:"icon",onClick:l=>V(T)},null,8,["onClick"])])):r("",!0)]),emptyText:p(()=>[_(E,{type:"text",onClick:f,icon:j(m(y))},{default:p(()=>[$(" 新增数据")]),_:1},8,["icon"])]),_:1},8,["columns","data-source","rowKey","scroll"])}}}),L=J(D,[["__scopeId","data-v-5b9e8dbe"]]);export{L as E};
