import{a1 as y,a2 as R}from"./@ant-design-B99nr-O7.js";import{h as U,f as w,B as N,n as O}from"./ant-design-vue-B0DkA0I7.js";import{d as K,a4 as S,a5 as $,L as j,m as c,R as s,a2 as i,a3 as r,ad as p,S as z,c as m,u as _,J as A,h as F}from"./@vue-DSvEQE6c.js";import{b as J}from"./index-JBZPYCR-.js";const L={key:2,style:{display:"flex"}},P=K({__name:"EditTable",props:S({columns:{},action:{type:Boolean,default:!0},height:{default:150}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(v){const u=$(v,"modelValue");let C=v;const{columns:o,action:I}=j(C),b=c(()=>f("input")),k=c(()=>f("select")),h=c(()=>I.value?[...o.value,{title:"操作",dataIndex:"_action_"}]:o.value),g=t=>{var e;return((e=o.value.find(d=>d.dataIndex==t))==null?void 0:e.options)||[]},f=t=>o.value.filter(e=>e.type==t).map(e=>e.dataIndex),x=()=>{let t={};o.value.map(e=>{Reflect.set(t,e.dataIndex,"")}),u.value.push(t)},B=t=>{u.value.splice(t,1)};return(t,e)=>{const d=U,V=w,T=N,E=O;return s(),i(E,{columns:h.value,"data-source":u.value,pagination:!1,rowKey:(a,n)=>n,size:"small",scroll:{y:t.height}},{bodyCell:r(({column:a,record:n,index:M})=>[b.value.includes(a.dataIndex)?(s(),i(d,{key:0,value:n[a.dataIndex],"onUpdate:value":l=>n[a.dataIndex]=l},null,8,["value","onUpdate:value"])):p("",!0),k.value.includes(a.dataIndex)?(s(),i(V,{key:1,value:n[a.dataIndex],"onUpdate:value":l=>n[a.dataIndex]=l,options:g(a.dataIndex)},null,8,["value","onUpdate:value","options"])):p("",!0),a.dataIndex=="_action_"?(s(),z("div",L,[m(_(y),{class:"icon",onClick:e[0]||(e[0]=l=>x())}),m(_(R),{class:"icon",onClick:l=>B(M)},null,8,["onClick"])])):p("",!0)]),emptyText:r(()=>[m(T,{type:"text",onClick:x,icon:F(_(y))},{default:r(()=>[A(" 新增数据")]),_:1},8,["icon"])]),_:1},8,["columns","data-source","rowKey","scroll"])}}}),Q=J(P,[["__scopeId","data-v-5b9e8dbe"]]);export{Q as E};