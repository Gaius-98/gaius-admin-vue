import{g as h,s as b}from"./index-MMbopz_q.js";import{s as O}from"./gaius-utils-ziEu-chL.js";import{F as j,i as L,h as P,E as N,o as $,p as V,q,H as R,r as T,f as m,J as H}from"./ant-design-vue-LmSW3W2i.js";import{c as J}from"./lodash-es-PU94eZQX.js";import{L as K,i as U,r as F,h as c,ag as z}from"./@vue-DmVhU8xE.js";const A=n=>{const e=/\$\{([^}]+)\}/g,r=n.match(e);return r?r.map(o=>{const t=o.trim().replace(/formData./g,"");return t.substring(2,t.length-1)}):[]},B=(n,e)=>{const r=/\$\{([^}]+)\}/g;return n.replace(r,(t,u)=>{const s=u.trim();return h({formData:e},s)})},E=(n,e)=>{const r=B(n,e);return new Function(`return ${r}`)()},G=(n,e,r,o,t)=>{let u;switch(r){case"string":u=c(P,{...t,value:h(n,e),onChange:s=>{b(n,e,s.target.value),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:s.target.value})}});break;case"textarea":u=c(H,{...t,value:h(n,e),onChange:s=>{b(n,e,s.target.value),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:s.target.value})}});break;case"select":u=c(m,{...t,options:o.options[e]||[],value:h(n,e),onChange:s=>{b(n,e,s),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:s})}});break;case"number":u=c(T,{...t,value:h(n,e),onChange:s=>{b(n,e,s),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:s})}});break;case"date":u=c(R,{...t,value:h(n,e),onChange:s=>{b(n,e,s),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:s})}});break;case"tree":u=c(q,{...t,options:o.options[e]||[],value:h(n,e),onChange:s=>{b(n,e,s),o.onChange({formData:n,field:e,value:s})}});break;case"radio":u=c(V,{...t,value:h(n,e),onChange:s=>{b(n,e,s.target.value),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:s.target.value})}},(o.options[e]||[]).map(s=>c($,{value:s.value,key:s.value},s.label)));break;case"switch":u=c(N,{checked:h(n,e),onChange(s){b(n,e,s),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:s})}});break;default:u=c(P,{...t,value:h(n,e),onChange:s=>{b(n,e,s.target.value),o.pubSub.onPublish(e),o.onChange({formData:n,field:e,value:s.target.value})}});break}return u},M=(n,e,r,o)=>{const{type:t,label:u,component:s,rules:_,tooltip:w}=r;let v;if(s!=null&&s.name){const{name:d}=s,S=J(s);if(Reflect.deleteProperty(S,"onChange"),!o.sfProvideEL[d])throw new Error(`${d} is not registered,provide('sfProvideEL','${d}',Component)`);v=c(o.sfProvideEL[d],{...S,formData:n,value:h(n,e),onChange:C=>{if(n[e]=C,b(n,e,C),s.onChange)try{s.onChange(C,n,e)}catch(g){throw new Error(g)}}})}else v=G(n,e,t,o,s);return o.visibleInfo[e]&&c(L,{label:u,name:e,rules:_,tooltip:w},[v])},I={name:"SchemaForm",props:{layout:{type:Object},properties:{type:Object},formData:{type:Object,required:!0}},setup(n){const{layout:e,properties:r,formData:o}=K(n),t=U("sfProvideEL"),u=F({}),s=Object.entries(r.value).filter(([,a])=>{var l,i;return((l=a==null?void 0:a.component)==null?void 0:l.dataSource)||((i=a==null?void 0:a.component)==null?void 0:i.asyncData)}),_=async(a,l)=>{const{dataSource:i,asyncData:p}=l.component;i?u.value[a]=i:u.value[a]=await p(o.value,a)};s.map(async([a,l])=>{await _(a,l)});const w=a=>{const[l,i]=Object.entries(r.value).find(([p])=>a==p);i&&_(l,i)},v=new O,d=a=>{var p,f;const{field:l}=a,i=(f=(p=r.value[l])==null?void 0:p.component)==null?void 0:f.onChange;i&&i(a)},S=z(),C=()=>{Object.entries(r.value).map(([a,l])=>{if(typeof l.show>"u")g.value[a]=!0;else if(typeof l.show=="boolean")g.value[a]=l.show;else if(typeof l.show=="string"){const i=l.show;g.value[a]=E(i,o.value),A(i).map(f=>{v.onSubscribe(f,()=>{g.value[a]=E(i,o.value)})})}})},g=F({});return C(),{layout:e,properties:r,refreshOption:w,formData:o,options:u,visibleInfo:g,pubSub:v,sfProvideEL:t,onChange:d,expose:S}},render:n=>c(j,{...n.layout},[...Object.entries(n.properties).map(([e,r])=>M(n.formData,e,r,n))])};export{I as S};
