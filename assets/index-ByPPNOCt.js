import{g as i,q as J,r as O,K as Q,bE as Y,b$ as Z,bH as k,_ as c,k as ee,m as te,aa as le,an as ne,P as B,d as q,u as oe,bc as ie,ae,t as se,aq as G,p as re,i as X,at as de}from"./index-BSdDcxy1.js";import{ax as ce,ay as F,x as pe}from"./index-oSfz28Wk.js";function I(e){return e!=null}const j=e=>{const{itemPrefixCls:t,component:l,span:o,labelStyle:n,contentStyle:a,bordered:d,label:r,content:s,colon:u}=e,p=l;return d?i(p,{class:[{[`${t}-item-label`]:I(r),[`${t}-item-content`]:I(s)}],colSpan:o},{default:()=>[I(r)&&i("span",{style:n},[r]),I(s)&&i("span",{style:a},[s])]}):i(p,{class:[`${t}-item`],colSpan:o},{default:()=>[i("div",{class:`${t}-item-container`},[(r||r===0)&&i("span",{class:[`${t}-item-label`,{[`${t}-item-no-colon`]:!u}],style:n},[r]),(s||s===0)&&i("span",{class:`${t}-item-content`,style:a},[s])])]})},ue=e=>{const t=(u,p,L)=>{let{colon:m,prefixCls:x,bordered:f}=p,{component:y,type:w,showLabel:P,showContent:M,labelStyle:g,contentStyle:S}=L;return u.map((b,h)=>{var $,v;const _=b.props||{},{prefixCls:z=x,span:R=1,labelStyle:A=_["label-style"],contentStyle:H=_["content-style"],label:N=(v=($=b.children)===null||$===void 0?void 0:$.label)===null||v===void 0?void 0:v.call($)}=_,W=Y(b),D=Z(b),E=k(b),{key:T}=b;return typeof y=="string"?i(j,{key:`${w}-${String(T)||h}`,class:D,style:E,labelStyle:c(c({},g),A),contentStyle:c(c({},S),H),span:R,colon:m,component:y,itemPrefixCls:z,bordered:f,label:P?N:null,content:M?W:null},null):[i(j,{key:`label-${String(T)||h}`,class:D,style:c(c(c({},g),E),A),span:1,colon:m,component:y[0],itemPrefixCls:z,bordered:f,label:N},null),i(j,{key:`content-${String(T)||h}`,class:D,style:c(c(c({},S),E),H),span:R*2-1,component:y[1],itemPrefixCls:z,bordered:f,content:W},null)]})},{prefixCls:l,vertical:o,row:n,index:a,bordered:d}=e,{labelStyle:r,contentStyle:s}=J(V,{labelStyle:O({}),contentStyle:O({})});return o?i(Q,null,[i("tr",{key:`label-${a}`,class:`${l}-row`},[t(n,e,{component:"th",type:"label",showLabel:!0,labelStyle:r.value,contentStyle:s.value})]),i("tr",{key:`content-${a}`,class:`${l}-row`},[t(n,e,{component:"td",type:"content",showContent:!0,labelStyle:r.value,contentStyle:s.value})])]):i("tr",{key:a,class:`${l}-row`},[t(n,e,{component:d?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:r.value,contentStyle:s.value})])},me=e=>{const{componentCls:t,descriptionsSmallPadding:l,descriptionsDefaultPadding:o,descriptionsMiddlePadding:n,descriptionsBg:a}=e;return{[`&${t}-bordered`]:{[`${t}-view`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"}},[`${t}-item-label, ${t}-item-content`]:{padding:o,borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`${t}-item-label`]:{backgroundColor:a,"&::after":{display:"none"}},[`${t}-row`]:{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"}},[`&${t}-middle`]:{[`${t}-item-label, ${t}-item-content`]:{padding:n}},[`&${t}-small`]:{[`${t}-item-label, ${t}-item-content`]:{padding:l}}}}},be=e=>{const{componentCls:t,descriptionsExtraColor:l,descriptionItemPaddingBottom:o,descriptionsItemLabelColonMarginRight:n,descriptionsItemLabelColonMarginLeft:a,descriptionsTitleMarginBottom:d}=e;return{[t]:c(c(c({},le(e)),me(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:d},[`${t}-title`]:c(c({},ne),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:l,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${t}-row`]:{"> th, > td":{paddingBottom:o},"&:last-child":{borderBottom:"none"}},[`${t}-item-label`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${a}px ${n}px`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},fe=ee("Descriptions",e=>{const t=e.colorFillAlter,l=e.fontSizeSM*e.lineHeightSM,o=e.colorText,n=`${e.paddingXS}px ${e.padding}px`,a=`${e.padding}px ${e.paddingLG}px`,d=`${e.paddingSM}px ${e.paddingLG}px`,r=e.padding,s=e.marginXS,u=e.marginXXS/2,p=te(e,{descriptionsBg:t,descriptionsTitleMarginBottom:l,descriptionsExtraColor:o,descriptionItemPaddingBottom:r,descriptionsSmallPadding:n,descriptionsDefaultPadding:a,descriptionsMiddlePadding:d,descriptionsItemLabelColonMarginRight:s,descriptionsItemLabelColonMarginLeft:u});return[be(p)]});B.any;const ye=()=>({prefixCls:String,label:B.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}),ge=q({compatConfig:{MODE:3},name:"ADescriptionsItem",props:ye(),setup(e,t){let{slots:l}=t;return()=>{var o;return(o=l.default)===null||o===void 0?void 0:o.call(l)}}}),K={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function Se(e,t){if(typeof e=="number")return e;if(typeof e=="object")for(let l=0;l<F.length;l++){const o=F[l];if(t[o]&&e[o]!==void 0)return e[o]||K[o]}return 3}function U(e,t,l){let o=e;return(l===void 0||l>t)&&(o=pe(e,{span:t})),o}function $e(e,t){const l=de(e),o=[];let n=[],a=t;return l.forEach((d,r)=>{var s;const u=(s=d.props)===null||s===void 0?void 0:s.span,p=u||1;if(r===l.length-1){n.push(U(d,a,u)),o.push(n);return}p<a?(a-=p,n.push(d)):(n.push(U(d,a,p)),o.push(n),a=t,n=[])}),o}const ve=()=>({prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:B.any,extra:B.any,column:{type:[Number,Object],default:()=>K},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}),V=Symbol("descriptionsContext"),C=q({compatConfig:{MODE:3},name:"ADescriptions",inheritAttrs:!1,props:ve(),slots:Object,Item:ge,setup(e,t){let{slots:l,attrs:o}=t;const{prefixCls:n,direction:a}=oe("descriptions",e);let d;const r=O({}),[s,u]=fe(n),p=ce();ie(()=>{d=p.value.subscribe(m=>{typeof e.column=="object"&&(r.value=m)})}),ae(()=>{p.value.unsubscribe(d)}),se(V,{labelStyle:G(e,"labelStyle"),contentStyle:G(e,"contentStyle")});const L=re(()=>Se(e.column,r.value));return()=>{var m,x,f;const{size:y,bordered:w=!1,layout:P="horizontal",colon:M=!0,title:g=(m=l.title)===null||m===void 0?void 0:m.call(l),extra:S=(x=l.extra)===null||x===void 0?void 0:x.call(l)}=e,b=(f=l.default)===null||f===void 0?void 0:f.call(l),h=$e(b,L.value);return s(i("div",X(X({},o),{},{class:[n.value,{[`${n.value}-${y}`]:y!=="default",[`${n.value}-bordered`]:!!w,[`${n.value}-rtl`]:a.value==="rtl"},o.class,u.value]}),[(g||S)&&i("div",{class:`${n.value}-header`},[g&&i("div",{class:`${n.value}-title`},[g]),S&&i("div",{class:`${n.value}-extra`},[S])]),i("div",{class:`${n.value}-view`},[i("table",null,[i("tbody",null,[h.map(($,v)=>i(ue,{key:v,index:v,colon:M,prefixCls:n.value,vertical:P==="vertical",bordered:w,row:$},null))])])])]))}}});C.install=function(e){return e.component(C.name,C),e.component(C.Item.name,C.Item),e};export{ge as D,C as a};