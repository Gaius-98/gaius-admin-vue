import{_ as i}from"./LowCodeForm.vue_vue_type_script_setup_true_lang-D84ikPqs.js";import{f as p}from"./form-DcFDPUHP.js";import{w as u}from"./ant-design-vue-xt7LDby6.js";import{d as _,L as d,r as m,w as h,R as n,W as c}from"./@vue-aP0pPEyH.js";const y=_({__name:"LowCodeFormId",props:{id:{},formData:{default:()=>({})}},setup(f){const l=f,{id:t}=d(l),s=m(),e=m(!1);return h(()=>t.value,()=>{e.value=!1,p.getDetail(t.value).then(a=>{const{code:r,data:o,msg:v}=a;r==200&&(s.value=o.schema,e.value=!0)})},{immediate:!0}),(a,r)=>{const o=u;return e.value?(n(),c(i,{key:0,formData:a.formData,schema:s.value},null,8,["formData","schema"])):(n(),c(o,{key:1}))}}});export{y as _};
