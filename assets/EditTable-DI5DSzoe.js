import{P as I,M as N}from"./PlusCircleOutlined-DC_xa18e.js";import{I as U,B as w}from"./index-B3gs7d4T.js";import{S as O}from"./index-7w2Cp3sl.js";import{d as R,Y as F,Z as K,av as P,l as c,F as s,G as i,H as r,W as p,M as S,g as m,I as _,N as $,a0 as j,X as z}from"./index-_076D9lD.js";import{_ as A}from"./index-CPKqZdjW.js";const G={key:2,style:{display:"flex"}},H=R({__name:"EditTable",props:F({columns:{},action:{type:Boolean,default:!0},height:{default:150}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(v){const u=K(v,"modelValue");let y=v;const{columns:o,action:C}=P(y),k=c(()=>f("input")),b=c(()=>f("select")),g=c(()=>C.value?[...o.value,{title:"操作",dataIndex:"_action_"}]:o.value),h=e=>{var t;return((t=o.value.find(d=>d.dataIndex==e))==null?void 0:t.options)||[]},f=e=>o.value.filter(t=>t.type==e).map(t=>t.dataIndex),x=()=>{let e={};o.value.map(t=>{Reflect.set(e,t.dataIndex,"")}),console.log(e),u.value.push(e)},B=e=>{u.value.splice(e,1)};return(e,t)=>{const d=U,M=O,V=w,T=A;return s(),i(T,{columns:g.value,"data-source":u.value,pagination:!1,rowKey:(a,n)=>n,size:"small",scroll:{y:e.height}},{bodyCell:r(({column:a,record:n,index:E})=>[k.value.includes(a.dataIndex)?(s(),i(d,{key:0,value:n[a.dataIndex],"onUpdate:value":l=>n[a.dataIndex]=l},null,8,["value","onUpdate:value"])):p("",!0),b.value.includes(a.dataIndex)?(s(),i(M,{key:1,value:n[a.dataIndex],"onUpdate:value":l=>n[a.dataIndex]=l,options:h(a.dataIndex)},null,8,["value","onUpdate:value","options"])):p("",!0),a.dataIndex=="_action_"?(s(),S("div",G,[m(_(I),{class:"icon",onClick:t[0]||(t[0]=l=>x())}),m(_(N),{class:"icon",onClick:l=>B(E)},null,8,["onClick"])])):p("",!0)]),emptyText:r(()=>[m(V,{type:"text",onClick:x,icon:j(_(I))},{default:r(()=>[$(" 新增数据")]),_:1},8,["icon"])]),_:1},8,["columns","data-source","rowKey","scroll"])}}}),D=z(H,[["__scopeId","data-v-5b9e8dbe"]]);export{D as E};
