import{g as b,s as h}from"./index-L8l6AuQJ.js";import{t as j,b0 as E,r as P,aQ as L,ac as c,a1 as N,aq as $,Y as V,b1 as T,X as F,au as q,a5 as R,a6 as K,a7 as Q,aw as U,a8 as X,T as Y,ax as z}from"./.pnpm-0Jz4sC39.js";const A=n=>{const e=/\$\{([^}]+)\}/g,t=n.match(e);return t?t.map(a=>{const l=a.trim().replace(/formData./g,"");return l.substring(2,l.length-1)}):[]},B=(n,e)=>{const t=/\$\{([^}]+)\}/g;return n.replace(t,(l,o)=>{const s=o.trim();return b({formData:e},s)})},O=(n,e)=>{const t=B(n,e);return new Function(`return ${t}`)()},G=(n,e,t,a,l)=>{let o;switch(t){case"string":o=c(F,{...l,value:b(n,e),onChange:s=>{h(n,e,s.target.value),a.pubSub.onPublish(e),a.onChange({formData:n,field:e,value:s.target.value})}});break;case"textarea":o=c(z,{...l,value:b(n,e),onChange:s=>{h(n,e,s.target.value),a.pubSub.onPublish(e),a.onChange({formData:n,field:e,value:s.target.value})}});break;case"select":o=c(Y,{...l,options:a.options[e]||[],value:b(n,e),onChange:s=>{h(n,e,s),a.pubSub.onPublish(e),a.onChange({formData:n,field:e,value:s})}});break;case"number":o=c(X,{...l,value:b(n,e),onChange:s=>{h(n,e,s),a.pubSub.onPublish(e),a.onChange({formData:n,field:e,value:s})}});break;case"date":o=c(U,{...l,value:b(n,e),onChange:s=>{h(n,e,s),a.pubSub.onPublish(e),a.onChange({formData:n,field:e,value:s})}});break;case"tree":o=c(Q,{...l,options:a.options[e]||[],value:b(n,e),onChange:s=>{h(n,e,s),a.onChange({formData:n,field:e,value:s})}});break;case"radio":o=c(K,{...l,value:b(n,e),onChange:s=>{h(n,e,s.target.value),a.pubSub.onPublish(e),a.onChange({formData:n,field:e,value:s.target.value})}},{default:()=>(a.options[e]||[]).map(s=>c(R,{value:s.value,key:s.value},{default:()=>s.label}))});break;case"switch":o=c(q,{checked:b(n,e),onChange(s){h(n,e,s),a.pubSub.onPublish(e),a.onChange({formData:n,field:e,value:s})}});break;default:o=c(F,{...l,value:b(n,e),onChange:s=>{h(n,e,s.target.value),a.pubSub.onPublish(e),a.onChange({formData:n,field:e,value:s.target.value})}});break}return o},H=(n,e,t,a)=>{const{type:l,label:o,component:s,rules:C,tooltip:w}=t;let d;if(s!=null&&s.name){const{name:v}=s,S=$(s);if(Reflect.deleteProperty(S,"onChange"),!a.sfProvideEL[v])throw new Error(`${v} is not registered,provide('sfProvideEL','${v}',Component)`);d=c(a.sfProvideEL[v],{...S,formData:n,value:b(n,e),onChange:_=>{if(n[e]=_,h(n,e,_),s.onChange)try{s.onChange(_,n,e)}catch(g){throw new Error(g)}}})}else d=G(n,e,l,a,s);return a.visibleInfo[e]&&c(V,{label:o,name:e,rules:C,tooltip:w},{default:()=>[d]})},W={name:"SchemaForm",props:{layout:{type:Object},properties:{type:Object},formData:{type:Object,required:!0}},setup(n){const{layout:e,properties:t,formData:a}=j(n),l=E("sfProvideEL"),o=P({}),s=Object.entries(t.value).filter(([,u])=>{var r,i;return((r=u==null?void 0:u.component)==null?void 0:r.dataSource)||((i=u==null?void 0:u.component)==null?void 0:i.asyncData)}),C=async(u,r)=>{const{dataSource:i,asyncData:p}=r.component;i?o.value[u]=i:o.value[u]=await p(a.value,u)};s.map(async([u,r])=>{await C(u,r)});const w=u=>{const[r,i]=Object.entries(t.value).find(([p])=>u==p);i&&C(r,i)},d=new L,v=u=>{var p,f;const{field:r}=u,i=(f=(p=t.value[r])==null?void 0:p.component)==null?void 0:f.onChange;i&&i(u)},S=T(),_=()=>{Object.entries(t.value).map(([u,r])=>{if(typeof r.show>"u")g.value[u]=!0;else if(typeof r.show=="boolean")g.value[u]=r.show;else if(typeof r.show=="string"){const i=r.show;g.value[u]=O(i,a.value),A(i).map(f=>{d.onSubscribe(f,()=>{g.value[u]=O(i,a.value)})})}})},g=P({});return _(),{layout:e,properties:t,refreshOption:w,formData:a,options:o,visibleInfo:g,pubSub:d,sfProvideEL:l,onChange:v,expose:S}},render:n=>c(N,{...n.layout},{default:()=>[...Object.entries(n.properties).map(([e,t])=>H(n.formData,e,t,n))]})};export{W as S};
