import{g as c,H as r,I as n,o as u,q as i}from"./.pnpm-DmAI0IVr.js";import{_ as p}from"./index-CyIlIWQL.js";const _=["value"],m=c({__name:"ColorPicker",props:{value:{},valueModifiers:{}},emits:r(["change"],["update:value"]),setup(a,{emit:t}){const o=n(a,"value"),s=t,l=e=>{o.value=e.target.value,s("change",e.target.value)};return(e,v)=>(u(),i("input",{type:"color",value:o.value,onChange:l,class:"gaius-color-picker"},null,40,_))}}),f=p(m,[["__scopeId","data-v-63818e5c"]]);export{f as default};