import{k as t,F as Ae,e as _,Z as ae,a9 as ze,aa as Fe,ab as je,_ as I,g as Ee,m as Ue,ac as qe,c as Ge,P as ne,d as oe,u as He,ad as Ke,ae as We,G as Xe,af as fe,h as Z,l as _e,o as Qe,a8 as W,ag as Ze,L as Je,M as Ye,ah as et,N as $,U as O,V as a,a5 as D,O as Q,W as ye,Q as he,a2 as tt,B as lt,a3 as ge,a0 as S,a4 as be,a1 as X}from"./index-DHYPWQ85.js";import{_ as te}from"./lodash-CmFMvF3r.js";import{v as xe}from"./v4-CQkTLCs1.js";import{P as at,M as nt}from"./PlusCircleOutlined-Bjn2tnfG.js";import{u as ot,r as Se,a as st,I as $e,_ as it,B as rt,F as dt}from"./index-CdtpwkJ3.js";import{S as Ie}from"./shallowequal-CR05RP4G.js";import{a as we,_ as ut}from"./index-fD8JbyVc.js";import{C as ct,_ as pt,a as mt,b as vt,T as ft,S as _t}from"./index-DpgA65vI.js";import{M as yt}from"./index-CgUCiZsX.js";import{T as gt,_ as bt,a as xt}from"./index-BjFIsBv8.js";import{_ as St}from"./index-C8n_Ieqt.js";import"./PlusOutlined-EwmSp0VY.js";import"./RightOutlined-DbpFzJhf.js";import"./index-Bt2cPNZM.js";import"./FolderOutlined-BQQbXab5.js";import"./index-Mo8lSQ_I.js";import"./DoubleRightOutlined-CMTLLS_1.js";function le(e){return e!=null}const re=e=>{const{itemPrefixCls:l,component:i,span:s,labelStyle:r,contentStyle:v,bordered:y,label:d,content:f,colon:h}=e,C=i;return y?t(C,{class:[{[`${l}-item-label`]:le(d),[`${l}-item-content`]:le(f)}],colSpan:s},{default:()=>[le(d)&&t("span",{style:r},[d]),le(f)&&t("span",{style:v},[f])]}):t(C,{class:[`${l}-item`],colSpan:s},{default:()=>[t("div",{class:`${l}-item-container`},[(d||d===0)&&t("span",{class:[`${l}-item-label`,{[`${l}-item-no-colon`]:!h}],style:r},[d]),(f||f===0)&&t("span",{class:`${l}-item-content`,style:v},[f])])]})},Ct=e=>{const l=(h,C,L)=>{let{colon:P,prefixCls:R,bordered:p}=C,{component:u,type:o,showLabel:g,showContent:M,labelStyle:x,contentStyle:B}=L;return h.map((w,k)=>{var N,V;const z=w.props||{},{prefixCls:A=R,span:H=1,labelStyle:j=z["label-style"],contentStyle:E=z["content-style"],label:J=(V=(N=w.children)===null||N===void 0?void 0:N.label)===null||V===void 0?void 0:V.call(N)}=z,m=ze(w),n=Fe(w),b=je(w),{key:T}=w;return typeof u=="string"?t(re,{key:`${o}-${String(T)||k}`,class:n,style:b,labelStyle:I(I({},x),j),contentStyle:I(I({},B),E),span:H,colon:P,component:u,itemPrefixCls:A,bordered:p,label:g?J:null,content:M?m:null},null):[t(re,{key:`label-${String(T)||k}`,class:n,style:I(I(I({},x),b),j),span:1,colon:P,component:u[0],itemPrefixCls:A,bordered:p,label:J},null),t(re,{key:`content-${String(T)||k}`,class:n,style:I(I(I({},B),b),E),span:H*2-1,component:u[1],itemPrefixCls:A,bordered:p,content:m},null)]})},{prefixCls:i,vertical:s,row:r,index:v,bordered:y}=e,{labelStyle:d,contentStyle:f}=Ae(Be,{labelStyle:_({}),contentStyle:_({})});return s?t(ae,null,[t("tr",{key:`label-${v}`,class:`${i}-row`},[l(r,e,{component:"th",type:"label",showLabel:!0,labelStyle:d.value,contentStyle:f.value})]),t("tr",{key:`content-${v}`,class:`${i}-row`},[l(r,e,{component:"td",type:"content",showContent:!0,labelStyle:d.value,contentStyle:f.value})])]):t("tr",{key:v,class:`${i}-row`},[l(r,e,{component:y?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:d.value,contentStyle:f.value})])},ht=e=>{const{componentCls:l,descriptionsSmallPadding:i,descriptionsDefaultPadding:s,descriptionsMiddlePadding:r,descriptionsBg:v}=e;return{[`&${l}-bordered`]:{[`${l}-view`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"}},[`${l}-item-label, ${l}-item-content`]:{padding:s,borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`${l}-item-label`]:{backgroundColor:v,"&::after":{display:"none"}},[`${l}-row`]:{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"}},[`&${l}-middle`]:{[`${l}-item-label, ${l}-item-content`]:{padding:r}},[`&${l}-small`]:{[`${l}-item-label, ${l}-item-content`]:{padding:i}}}}},$t=e=>{const{componentCls:l,descriptionsExtraColor:i,descriptionItemPaddingBottom:s,descriptionsItemLabelColonMarginRight:r,descriptionsItemLabelColonMarginLeft:v,descriptionsTitleMarginBottom:y}=e;return{[l]:I(I(I({},Ge(e)),ht(e)),{"&-rtl":{direction:"rtl"},[`${l}-header`]:{display:"flex",alignItems:"center",marginBottom:y},[`${l}-title`]:I(I({},qe),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${l}-extra`]:{marginInlineStart:"auto",color:i,fontSize:e.fontSize},[`${l}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${l}-row`]:{"> th, > td":{paddingBottom:s},"&:last-child":{borderBottom:"none"}},[`${l}-item-label`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${v}px ${r}px`},[`&${l}-item-no-colon::after`]:{content:'""'}},[`${l}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${l}-item-content`]:{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${l}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${l}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${l}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${l}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${l}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},It=Ee("Descriptions",e=>{const l=e.colorFillAlter,i=e.fontSizeSM*e.lineHeightSM,s=e.colorText,r=`${e.paddingXS}px ${e.padding}px`,v=`${e.padding}px ${e.paddingLG}px`,y=`${e.paddingSM}px ${e.paddingLG}px`,d=e.padding,f=e.marginXS,h=e.marginXXS/2,C=Ue(e,{descriptionsBg:l,descriptionsTitleMarginBottom:i,descriptionsExtraColor:s,descriptionItemPaddingBottom:d,descriptionsSmallPadding:r,descriptionsDefaultPadding:v,descriptionsMiddlePadding:y,descriptionsItemLabelColonMarginRight:f,descriptionsItemLabelColonMarginLeft:h});return[$t(C)]});ne.any;const wt=()=>({prefixCls:String,label:ne.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}),ke=oe({compatConfig:{MODE:3},name:"ADescriptionsItem",props:wt(),setup(e,l){let{slots:i}=l;return()=>{var s;return(s=i.default)===null||s===void 0?void 0:s.call(i)}}}),Pe={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function kt(e,l){if(typeof e=="number")return e;if(typeof e=="object")for(let i=0;i<Se.length;i++){const s=Se[i];if(l[s]&&e[s]!==void 0)return e[s]||Pe[s]}return 3}function Ce(e,l,i){let s=e;return(i===void 0||i>l)&&(s=st(e,{span:l})),s}function Pt(e,l){const i=Qe(e),s=[];let r=[],v=l;return i.forEach((y,d)=>{var f;const h=(f=y.props)===null||f===void 0?void 0:f.span,C=h||1;if(d===i.length-1){r.push(Ce(y,v,h)),s.push(r);return}C<v?(v-=C,r.push(y)):(r.push(Ce(y,v,C)),s.push(r),v=l,r=[])}),s}const Bt=()=>({prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:ne.any,extra:ne.any,column:{type:[Number,Object],default:()=>Pe},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}),Be=Symbol("descriptionsContext"),G=oe({compatConfig:{MODE:3},name:"ADescriptions",inheritAttrs:!1,props:Bt(),slots:Object,Item:ke,setup(e,l){let{slots:i,attrs:s}=l;const{prefixCls:r,direction:v}=He("descriptions",e);let y;const d=_({}),[f,h]=It(r),C=ot();Ke(()=>{y=C.value.subscribe(P=>{typeof e.column=="object"&&(d.value=P)})}),We(()=>{C.value.unsubscribe(y)}),Xe(Be,{labelStyle:fe(e,"labelStyle"),contentStyle:fe(e,"contentStyle")});const L=Z(()=>kt(e.column,d.value));return()=>{var P,R,p;const{size:u,bordered:o=!1,layout:g="horizontal",colon:M=!0,title:x=(P=i.title)===null||P===void 0?void 0:P.call(i),extra:B=(R=i.extra)===null||R===void 0?void 0:R.call(i)}=e,w=(p=i.default)===null||p===void 0?void 0:p.call(i),k=Pt(w,L.value);return f(t("div",_e(_e({},s),{},{class:[r.value,{[`${r.value}-${u}`]:u!=="default",[`${r.value}-bordered`]:!!o,[`${r.value}-rtl`]:v.value==="rtl"},s.class,h.value]}),[(x||B)&&t("div",{class:`${r.value}-header`},[x&&t("div",{class:`${r.value}-title`},[x]),B&&t("div",{class:`${r.value}-extra`},[B])]),t("div",{class:`${r.value}-view`},[t("table",null,[t("tbody",null,[k.map((N,V)=>t(Ct,{key:V,index:V,colon:M,prefixCls:r.value,vertical:g==="vertical",bordered:o,row:N},null))])])])]))}}});G.install=function(e){return e.component(G.name,G),e.component(G.Item.name,G.Item),e};const q={getList:e=>W({method:"get",url:"request/list",params:e}),getDetail:e=>W({method:"get",url:"request/detail",params:{id:e}}),remove:e=>W({method:"get",url:"request/remove",params:{id:e}}),add:e=>W({method:"post",url:"request/add",data:e}),update:e=>W({method:"post",url:"request/update",data:e}),run:e=>Ze({method:"get",url:"/prod/request/proxy",params:{id:e}})},Tt={key:2,style:{display:"flex"}},Mt=oe({__name:"EditTable",props:Je({columns:{},action:{type:Boolean,default:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=Ye(e,"modelValue");let i=e;const{columns:s,action:r}=et(i),v=Z(()=>C("input")),y=Z(()=>C("select")),d=_([]),f=Z(()=>r.value?[...s.value,{title:"操作",dataIndex:"_action_"}]:s.value);d.value=l.value.map(p=>({_id_:xe(),...p}));const h=p=>{var u;return((u=s.value.find(o=>o.dataIndex==p))==null?void 0:u.options)||[]},C=p=>s.value.filter(u=>u.type==p).map(u=>u.dataIndex),L=(p,u,o)=>{d.value.find(g=>g._id_==p)[u]=o,l.value=d.value.map(g=>{let M=te.cloneDeep(g);return Reflect.deleteProperty(M,"_id_"),M})},P=()=>{let p=xe(),u=te.cloneDeep({_id_:p});s.value.map(o=>{Reflect.set(u,o.dataIndex,"")}),d.value.push(u)},R=p=>{let u=d.value.findIndex(o=>o._id_==p);d.value.splice(u,1),console.log(d.value.map(o=>{let g=te.cloneDeep(o);return Reflect.deleteProperty(g,"_id_"),g})),l.value=d.value.map(o=>{let g=te.cloneDeep(o);return Reflect.deleteProperty(g,"_id_"),g})};return(p,u)=>{const o=$e,g=Ie,M=we;return $(),O(M,{columns:f.value,"data-source":d.value,pagination:!1,rowKey:x=>x._id_,size:"small",scroll:{y:150}},{bodyCell:a(({column:x,index:B,record:w})=>[v.value.includes(x.dataIndex)?($(),O(o,{key:0,value:d.value[B][x.dataIndex],onChange:k=>L(w._id_,x.dataIndex,k.target.value)},null,8,["value","onChange"])):D("",!0),y.value.includes(x.dataIndex)?($(),O(g,{key:1,value:d.value[B][x.dataIndex],options:h(x.dataIndex),onChange:k=>{L(w._id_,x.dataIndex,k)}},null,8,["value","options","onChange"])):D("",!0),x.dataIndex=="_action_"?($(),Q("div",Tt,[t(ye(at),{class:"icon",onClick:u[0]||(u[0]=k=>P())}),t(ye(nt),{class:"icon",onClick:k=>R(w._id_)},null,8,["onClick"])])):D("",!0)]),_:1},8,["columns","data-source","rowKey"])}}}),de=he(Mt,[["__scopeId","data-v-a41a61a3"]]),Ot={class:"request"},Lt={class:"tools"},Rt=oe({__name:"RequestView",setup(e){const l=tt({keyword:"",pageNumber:1,pageSize:10,url:""}),i=_("params"),s=_([{value:"get",label:"GET"},{value:"post",label:"POST"}]),r=_([]),v=_([{title:"API名称",key:"apiName",dataIndex:"apiName"},{title:"请求地址",key:"url",dataIndex:"url"},{title:"请求方式",key:"method",dataIndex:"method"},{title:"状态",key:"status",dataIndex:"status"},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"备注",key:"desc",dataIndex:"desc"},{title:"操作",key:"action",dataIndex:"action"}]),y=_(!1),d=_([{title:"Key",dataIndex:"key",type:"input"},{title:"Value",dataIndex:"value",type:"input"},{title:"引用变量",dataIndex:"var",type:"input"}]),f=_([{title:"Key",dataIndex:"key",type:"input"},{title:"Value",dataIndex:"value",type:"input"}]),h=_(),C=()=>{var m;(m=h.value)==null||m.resetFields(),p()},L=_(0),P=()=>{l.pageNumber=1,l.pageSize=10,p()},R=m=>{const{current:n,pageSize:b}=m;l.pageNumber=n,l.pageSize=b,p()},p=()=>{y.value=!0,q.getList(l).then(m=>{const{code:n,data:b}=m;n==200&&(r.value=b.data,L.value=b.total),y.value=!1})};lt(()=>{p()});const u=_(!1),o=_({url:"",method:"get",apiName:"",params:[{key:"",value:"",var:""}],body:[{key:"",value:"",var:""}],headers:[{key:"",value:""}],status:1,desc:""}),g=_("add"),M=Z(()=>({add:"新增API",edit:"编辑API"})[g.value]),x=_(),B=()=>{g.value="add",u.value=!0,o.value={url:"",method:"get",apiName:"",params:[{key:"",value:"",var:""}],body:[{key:"",value:"",var:""}],headers:[{key:"",value:""}],status:1,desc:""}},w=async m=>{const{code:n,data:b}=await q.getDetail(m.id);n==200&&(o.value=b,console.log(o.value),g.value="edit",u.value=!0)},k=async m=>{const{code:n,msg:b,data:T}=await q.remove(m.id);n==200&&(ge.success(T),p())},N=()=>{var m;(m=x.value)==null||m.resetFields()},V=()=>{let m;g.value=="add"?m=q.add:m=q.update,m(o.value).then(n=>{const{code:b}=n;b==200&&(ge.success(g.value=="add"?"新增成功":"编辑成功"),p()),N(),u.value=!1})},z=_(!1),A=_({apiName:"",url:"",method:"get",status:1}),H=_(),j=_(!1),E=_(!1),J=m=>{z.value=!0,A.value=m,j.value=!0,q.run(m.id).then(n=>{const{code:b}=n.data;j.value=!1,H.value=n.data,b==200?E.value=!0:E.value=!1})};return(m,n)=>{const b=$e,T=it,se=pt,U=rt,Te=mt,ue=dt,ce=ct,Y=gt,ee=ut,Me=St,Oe=we,pe=bt,Le=xt,Re=Ie,ie=vt,Ne=ft,me=yt,De=_t,K=ke,Ve=G;return $(),Q("div",Ot,[t(ce,{class:"search-area"},{default:a(()=>[t(ue,{ref_key:"searchFormRef",ref:h,model:l,onFinish:P},{default:a(()=>[t(Te,{gutter:24},{default:a(()=>[t(se,{span:4},{default:a(()=>[t(T,{label:"API名称",name:"keyword"},{default:a(()=>[t(b,{value:l.keyword,"onUpdate:value":n[0]||(n[0]=c=>l.keyword=c)},null,8,["value"])]),_:1})]),_:1}),t(se,{span:4},{default:a(()=>[t(T,{label:"地址",name:"url"},{default:a(()=>[t(b,{value:l.url,"onUpdate:value":n[1]||(n[1]=c=>l.url=c)},null,8,["value"])]),_:1})]),_:1}),t(se,{span:4,style:{"text-align":"right"}},{default:a(()=>[t(U,{type:"primary","html-type":"submit"},{default:a(()=>[S("搜索")]),_:1}),t(U,{style:{margin:"0 8px"},onClick:C},{default:a(()=>[S(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(ce,null,{default:a(()=>[be("div",Lt,[t(U,{type:"primary",onClick:B},{default:a(()=>[S("新增")]),_:1})]),t(Oe,{loading:y.value,columns:v.value,"data-source":r.value,scroll:{y:440},onChange:R,pagination:{current:l.pageNumber,total:L.value}},{bodyCell:a(({column:c,record:F})=>[c.key=="status"?($(),Q(ae,{key:0},[F.status?($(),O(Y,{key:0,color:"#87d068"},{default:a(()=>[S("启用")]),_:1})):($(),O(Y,{key:1,color:"#f50"},{default:a(()=>[S("停用")]),_:1}))],64)):D("",!0),c.key=="action"?($(),Q(ae,{key:1},[F.status?($(),O(U,{key:0,type:"link",onClick:ve=>J(F)},{default:a(()=>[S("执行")]),_:2},1032,["onClick"])):D("",!0),t(ee,{type:"vertical"}),t(U,{type:"link",onClick:ve=>w(F)},{default:a(()=>[S("编辑")]),_:2},1032,["onClick"]),t(ee,{type:"vertical"}),t(Me,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:ve=>k(F)},{default:a(()=>[t(U,{type:"link",danger:""},{default:a(()=>[S("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):D("",!0),c.key=="method"?($(),Q(ae,{key:2},[F.method=="get"?($(),O(Y,{key:0,color:"#2db7f5"},{default:a(()=>[S("GET")]),_:1})):D("",!0),F.method=="post"?($(),O(Y,{key:1,color:"#87d068"},{default:a(()=>[S("POST")]),_:1})):D("",!0)],64)):D("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),t(me,{open:u.value,"onUpdate:open":n[11]||(n[11]=c=>u.value=c),onOk:V,title:M.value,onCancel:N},{default:a(()=>[t(ee,null,{default:a(()=>[S("API信息")]),_:1}),t(ue,{model:o.value,"label-col":{span:4},ref_key:"modalFormRef",ref:x},{default:a(()=>[t(T,{label:"API名"},{default:a(()=>[t(b,{value:o.value.apiName,"onUpdate:value":n[2]||(n[2]=c=>o.value.apiName=c)},null,8,["value"])]),_:1}),t(T,{label:"状态"},{default:a(()=>[t(Le,{value:o.value.status,"onUpdate:value":n[3]||(n[3]=c=>o.value.status=c),"button-style":"solid"},{default:a(()=>[t(pe,{value:1},{default:a(()=>[S("启用 ")]),_:1}),t(pe,{value:0},{default:a(()=>[S("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),t(T,{label:"备注"},{default:a(()=>[t(b,{value:o.value.desc,"onUpdate:value":n[4]||(n[4]=c=>o.value.desc=c)},null,8,["value"])]),_:1}),t(ee,null,{default:a(()=>[S("接口定义")]),_:1}),t(b,{value:o.value.url,"onUpdate:value":n[6]||(n[6]=c=>o.value.url=c)},{addonBefore:a(()=>[t(Re,{value:o.value.method,"onUpdate:value":n[5]||(n[5]=c=>o.value.method=c),options:s.value},null,8,["value","options"])]),_:1},8,["value"]),be("div",null,[t(Ne,{activeKey:i.value,"onUpdate:activeKey":n[10]||(n[10]=c=>i.value=c)},{default:a(()=>[t(ie,{key:"params",tab:"params"},{default:a(()=>[t(de,{columns:d.value,modelValue:o.value.params,"onUpdate:modelValue":n[7]||(n[7]=c=>o.value.params=c)},null,8,["columns","modelValue"])]),_:1}),t(ie,{key:"headers",tab:"headers"},{default:a(()=>[t(de,{columns:f.value,modelValue:o.value.headers,"onUpdate:modelValue":n[8]||(n[8]=c=>o.value.headers=c)},null,8,["columns","modelValue"])]),_:1}),t(ie,{key:"body",tab:"body"},{default:a(()=>[t(de,{columns:d.value,modelValue:o.value.body,"onUpdate:modelValue":n[9]||(n[9]=c=>o.value.body=c)},null,8,["columns","modelValue"])]),_:1})]),_:1},8,["activeKey"])])]),_:1},8,["model"])]),_:1},8,["open","title"]),t(me,{open:z.value,"onUpdate:open":n[12]||(n[12]=c=>z.value=c),title:"执行结果",footer:null},{default:a(()=>[j.value?($(),O(De,{key:0})):($(),O(Ve,{key:1,layout:"horizontal"},{default:a(()=>[t(K,{label:"API名称",span:3},{default:a(()=>[S(X(A.value.apiName),1)]),_:1}),t(K,{label:"请求地址",span:3},{default:a(()=>[S(X(A.value.url),1)]),_:1}),t(K,{label:"请求方式",span:3},{default:a(()=>[S(X(A.value.method),1)]),_:1}),t(K,{label:"调用结果",span:3},{default:a(()=>[S(X(E.value?"成功":"失败"),1)]),_:1}),t(K,{label:"返回信息",contentStyle:{"max-height":"300px","overflow-y":"auto"},span:4},{default:a(()=>[S(X(H.value),1)]),_:1})]),_:1}))]),_:1},8,["open"])])}}}),Jt=he(Rt,[["__scopeId","data-v-b8cc4be4"]]);export{Jt as default};
