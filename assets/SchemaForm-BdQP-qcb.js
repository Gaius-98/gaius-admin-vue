import{g as h,s as b}from"./index-Bunu3xEZ.js";import{s as O}from"./gaius-utils-ziEu-chL.js";import{F as j,i as L,h as P,E as N,o as $,p as m,q as V,H as q,r as R,f as T}from"./ant-design-vue-DGPmw3tN.js";import{c as H}from"./lodash-es-PU94eZQX.js";import{L as K,i as U,r as F,h as c,ag as z}from"./@vue-DmVhU8xE.js";const A=n=>{const e=/\$\{([^}]+)\}/g,r=n.match(e);return r?r.map(o=>{const i=o.trim().replace(/formData./g,"");return i.substring(2,i.length-1)}):[]},B=(n,e)=>{const r=/\$\{([^}]+)\}/g;return n.replace(r,(i,t)=>{const s=t.trim();return h({formData:e},s)})},E=(n,e)=>{const r=B(n,e);return new Function(`return ${r}`)()},G=(n,e,r,o,i)=>{let t;switch(r){case"string":t=c(P,{...i,value:h(n,e),onChange:s=>{b(n,e,s.target.value),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:s.target.value})}});break;case"select":t=c(T,{...i,options:o.options[e]||[],value:h(n,e),onChange:s=>{b(n,e,s),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:s})}});break;case"number":t=c(R,{...i,value:h(n,e),onChange:s=>{b(n,e,s),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:s})}});break;case"date":t=c(q,{...i,value:h(n,e),onChange:s=>{b(n,e,s),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:s})}});break;case"tree":t=c(V,{...i,options:o.options[e]||[],value:h(n,e),onChange:s=>{b(n,e,s),o.onChange({formData:n,field:e,value:s})}});break;case"radio":t=c(m,{...i,value:h(n,e),onChange:s=>{b(n,e,s.target.value),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:s.target.value})}},(o.options[e]||[]).map(s=>c($,{value:s.value,key:s.value},s.label)));break;case"switch":t=c(N,{checked:h(n,e),onChange(s){b(n,e,s),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:s})}});break;default:t=c(P,{...i,value:h(n,e),onChange:s=>{b(n,e,s.target.value),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:s.target.value})}});break}return t},J=(n,e,r,o)=>{const{type:i,label:t,component:s,rules:f,tooltip:w}=r;let v;if(s!=null&&s.name){const{name:d}=s,S=H(s);if(Reflect.deleteProperty(S,"onChange"),!o.sfProvideEL[d])throw new Error(`${d} is not registered,provide('sfProvideEL','${d}',Component)`);v=c(o.sfProvideEL[d],{...S,formData:n,value:h(n,e),onChange:C=>{if(n[e]=C,b(n,e,C),s.onChange)try{s.onChange(C,n,e)}catch(g){throw new Error(g)}}})}else v=G(n,e,i,o,s);return o.visibleInfo[e]&&c(L,{label:t,name:e,rules:f,tooltip:w},[v])},Z={name:"SchemaForm",props:{layout:{type:Object},properties:{type:Object},formData:{type:Object,required:!0}},setup(n){const{layout:e,properties:r,formData:o}=K(n),i=U("sfProvideEL"),t=F({}),s=Object.entries(r.value).filter(([,a])=>{var u,l;return((u=a==null?void 0:a.component)==null?void 0:u.dataSource)||((l=a==null?void 0:a.component)==null?void 0:l.asyncData)}),f=async(a,u)=>{const{dataSource:l,asyncData:p}=u.component;l?t.value[a]=l:t.value[a]=await p(o.value,a)};s.map(async([a,u])=>{await f(a,u)});const w=a=>{const[u,l]=Object.entries(r.value).find(([p])=>a==p);l&&f(u,l)},v=new O,d=a=>{var p,_;const{field:u}=a,l=(_=(p=r.value[u])==null?void 0:p.component)==null?void 0:_.onChange;l&&l(a)},S=z(),C=()=>{Object.entries(r.value).map(([a,u])=>{if(typeof u.show>"u")g.value[a]=!0;else if(typeof u.show=="boolean")g.value[a]=u.show;else if(typeof u.show=="string"){const l=u.show;g.value[a]=E(l,o.value),A(l).map(_=>{v.onSubscribe(_,()=>{g.value[a]=E(l,o.value)})})}})},g=F({});return C(),{layout:e,properties:r,refreshOption:w,formData:o,options:t,visibleInfo:g,pubSub:v,sfProvideEL:i,onChange:d,expose:S}},render:n=>c(j,{...n.layout},[...Object.entries(n.properties).map(([e,r])=>J(n.formData,e,r,n))])};export{Z as S};
