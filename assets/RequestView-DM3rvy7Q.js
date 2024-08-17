import{h as f}from"./http-CrVGA6a6.js";import{E as P}from"./EditTable-CKR38psB.js";import{a as J,g as ve,M as fe,h as ye,i as ke,j as ge,B as be,k as xe,F as Ie,T as Ce,c as he,m as Ve,n as Ne,o as we,p as Fe,f as Ue,v as Se,w as Te,x as Pe,D as Ae,y as Oe}from"./ant-design-vue-D_mFXu_Y.js";import{d as De,a as Re,r as s,o as qe,m as Be,U as i,V as N,c as e,a5 as t,J as u,W,F as A,a4 as _,ad as y,a6 as C}from"./@vue-CeHXljvD.js";import{b as Ee}from"./index-XMdY5bGJ.js";import"./axios-DsPaXkF5.js";import"./@ant-design-D3E7U7HN.js";import"./@ctrl-DOFZgDuz.js";import"./@babel-BiFW4_mA.js";import"./lodash-es-PU94eZQX.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./dayjs-X-x4l2Bb.js";import"./throttle-debounce-CUWDS_la.js";import"./async-validator-DKvM95Vc.js";import"./scroll-into-view-if-needed-SxpMpKWN.js";import"./compute-scroll-into-view-1gs_hJI2.js";import"./vue-types-C5fUfLeo.js";import"./dom-align-CRCehRfe.js";import"./@emotion-BtrR-yrm.js";import"./stylis-DsJDcYJc.js";import"./pinia-DZPz60mG.js";/* empty css                      */import"./js-cookie-Cz0CWeBA.js";import"./@vueuse-N9TsG8xj.js";import"./vue-router-BsaqgHAe.js";import"./uuid-CQkTLCs1.js";import"./vue-codemirror-DAixPvWe.js";import"./codemirror-D_HKGbp9.js";import"./@codemirror-BNYy9MjX.js";import"./@lezer-Cp1Os4ub.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./echarts-DetEu2Tg.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CDo53BfZ.js";import"./gaius-utils-BQYB1CTP.js";const Ke={class:"request"},ze={class:"tools"},$e=De({__name:"RequestView",setup(je){const p=Re({keyword:"",pageNumber:1,pageSize:10,url:""}),O=s("params"),H=s([{value:"get",label:"GET"},{value:"post",label:"POST"}]),D=s([]),Q=s([{title:"API名称",key:"apiName",dataIndex:"apiName"},{title:"请求地址",key:"url",dataIndex:"url"},{title:"请求方式",key:"method",dataIndex:"method",width:100},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"备注",key:"desc",dataIndex:"desc"},{title:"操作",key:"action",dataIndex:"action"}]),w=s(!1),R=s([{title:"Key",dataIndex:"key",type:"input"},{title:"Value",dataIndex:"value",type:"input"},{title:"引用变量",dataIndex:"var",type:"input"}]),X=s([{title:"Key",dataIndex:"key",type:"input"},{title:"Value",dataIndex:"value",type:"input"}]),q=s(),Y=()=>{var l;(l=q.value)==null||l.resetFields(),c()},B=s(0),Z=()=>{p.pageNumber=1,p.pageSize=10,c()},ee=l=>{const{current:a,pageSize:d}=l;p.pageNumber=a,p.pageSize=d,c()},c=()=>{w.value=!0,f.getList(p).then(l=>{const{code:a,data:d}=l;a==200&&(D.value=d.data,B.value=d.total),w.value=!1})};qe(()=>{c()});const k=s(!1),n=s({url:"",method:"get",apiName:"",params:[{key:"",value:"",var:""}],body:[{key:"",value:"",var:""}],headers:[{key:"",value:""}],status:1,desc:""}),g=s("add"),te=Be(()=>({add:"新增API",edit:"编辑API"})[g.value]),E=s(),ae=()=>{g.value="add",k.value=!0,n.value={url:"",method:"get",apiName:"",params:[{key:"",value:"",var:""}],body:[{key:"",value:"",var:""}],headers:[{key:"",value:""}],status:1,desc:""}},oe=async l=>{const{code:a,data:d}=await f.getDetail(l.id);a==200&&(n.value=d,g.value="edit",k.value=!0)},le=async l=>{const{code:a,msg:d,data:r}=await f.remove(l.id);a==200&&(J.success(r),c())},K=()=>{var l;(l=E.value)==null||l.resetFields()},ne=()=>{let l;g.value=="add"?l=f.add:l=f.update,l(n.value).then(a=>{const{code:d}=a;d==200&&(J.success(g.value=="add"?"新增成功":"编辑成功"),c()),K(),k.value=!1})},F=s(!1),h=s({apiName:"",url:"",method:"get",status:1}),z=s(),U=s(!1),b=s(!1),ue=l=>{F.value=!0,h.value=l,U.value=!0,f.run(l.id).then(a=>{const{code:d}=a.data;U.value=!1,z.value=a.data,d==200?b.value=!0:b.value=!1})};return(l,a)=>{const d=ye,r=ke,S=ge,v=be,se=xe,$=Ie,j=ve,x=Ce,V=he,de=Ve,pe=Ne,L=we,ie=Fe,re=Ue,T=Se,me=Te,M=fe,_e=Pe,I=Ae,ce=Oe;return i(),N("div",Ke,[e(j,{class:"search-area"},{default:t(()=>[e($,{ref_key:"searchFormRef",ref:q,model:p,onFinish:Z},{default:t(()=>[e(se,{gutter:24},{default:t(()=>[e(S,{span:4},{default:t(()=>[e(r,{label:"API名称",name:"keyword"},{default:t(()=>[e(d,{value:p.keyword,"onUpdate:value":a[0]||(a[0]=o=>p.keyword=o)},null,8,["value"])]),_:1})]),_:1}),e(S,{span:4},{default:t(()=>[e(r,{label:"地址",name:"url"},{default:t(()=>[e(d,{value:p.url,"onUpdate:value":a[1]||(a[1]=o=>p.url=o)},null,8,["value"])]),_:1})]),_:1}),e(S,{span:4,style:{"text-align":"right"}},{default:t(()=>[e(v,{type:"primary","html-type":"submit"},{default:t(()=>[u("搜索")]),_:1}),e(v,{style:{margin:"0 8px"},onClick:Y},{default:t(()=>[u(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(j,null,{default:t(()=>[W("div",ze,[e(v,{type:"primary",onClick:ae},{default:t(()=>[u("新增")]),_:1})]),e(pe,{loading:w.value,columns:Q.value,"data-source":D.value,scroll:{y:440},onChange:ee,pagination:{current:p.pageNumber,total:B.value}},{bodyCell:t(({column:o,record:m})=>[o.key=="status"?(i(),N(A,{key:0},[m.status?(i(),_(x,{key:0,color:"#87d068"},{default:t(()=>[u("启用")]),_:1})):(i(),_(x,{key:1,color:"#f50"},{default:t(()=>[u("停用")]),_:1}))],64)):y("",!0),o.key=="action"?(i(),N(A,{key:1},[m.status?(i(),_(v,{key:0,type:"link",onClick:G=>ue(m)},{default:t(()=>[u("执行")]),_:2},1032,["onClick"])):y("",!0),e(V,{type:"vertical"}),e(v,{type:"link",onClick:G=>oe(m)},{default:t(()=>[u("编辑")]),_:2},1032,["onClick"]),e(V,{type:"vertical"}),e(de,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:G=>le(m)},{default:t(()=>[e(v,{type:"link",danger:""},{default:t(()=>[u("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):y("",!0),o.key=="method"?(i(),N(A,{key:2},[m.method=="get"?(i(),_(x,{key:0,color:"#2db7f5"},{default:t(()=>[u("GET")]),_:1})):y("",!0),m.method=="post"?(i(),_(x,{key:1,color:"#87d068"},{default:t(()=>[u("POST")]),_:1})):y("",!0)],64)):y("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),e(M,{open:k.value,"onUpdate:open":a[11]||(a[11]=o=>k.value=o),onOk:ne,title:te.value,onCancel:K},{default:t(()=>[e(V,null,{default:t(()=>[u("API信息")]),_:1}),e($,{model:n.value,"label-col":{span:4},ref_key:"modalFormRef",ref:E},{default:t(()=>[e(r,{label:"API名"},{default:t(()=>[e(d,{value:n.value.apiName,"onUpdate:value":a[2]||(a[2]=o=>n.value.apiName=o)},null,8,["value"])]),_:1}),e(r,{label:"状态"},{default:t(()=>[e(ie,{value:n.value.status,"onUpdate:value":a[3]||(a[3]=o=>n.value.status=o),"button-style":"solid"},{default:t(()=>[e(L,{value:1},{default:t(()=>[u("启用 ")]),_:1}),e(L,{value:0},{default:t(()=>[u("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),e(r,{label:"备注"},{default:t(()=>[e(d,{value:n.value.desc,"onUpdate:value":a[4]||(a[4]=o=>n.value.desc=o)},null,8,["value"])]),_:1}),e(V,null,{default:t(()=>[u("接口定义")]),_:1}),e(d,{value:n.value.url,"onUpdate:value":a[6]||(a[6]=o=>n.value.url=o)},{addonBefore:t(()=>[e(re,{value:n.value.method,"onUpdate:value":a[5]||(a[5]=o=>n.value.method=o),options:H.value},null,8,["value","options"])]),_:1},8,["value"]),W("div",null,[e(me,{activeKey:O.value,"onUpdate:activeKey":a[10]||(a[10]=o=>O.value=o)},{default:t(()=>[e(T,{key:"params",tab:"params"},{default:t(()=>[e(P,{columns:R.value,modelValue:n.value.params,"onUpdate:modelValue":a[7]||(a[7]=o=>n.value.params=o)},null,8,["columns","modelValue"])]),_:1}),e(T,{key:"headers",tab:"headers"},{default:t(()=>[e(P,{columns:X.value,modelValue:n.value.headers,"onUpdate:modelValue":a[8]||(a[8]=o=>n.value.headers=o)},null,8,["columns","modelValue"])]),_:1}),e(T,{key:"body",tab:"body"},{default:t(()=>[e(P,{columns:R.value,modelValue:n.value.body,"onUpdate:modelValue":a[9]||(a[9]=o=>n.value.body=o)},null,8,["columns","modelValue"])]),_:1})]),_:1},8,["activeKey"])])]),_:1},8,["model"])]),_:1},8,["open","title"]),e(M,{open:F.value,"onUpdate:open":a[12]||(a[12]=o=>F.value=o),title:"执行结果",footer:null},{default:t(()=>[U.value?(i(),_(_e,{key:0})):(i(),_(ce,{key:1,layout:"horizontal"},{default:t(()=>[e(I,{label:"API名称",span:3},{default:t(()=>[u(C(h.value.apiName),1)]),_:1}),e(I,{label:"请求地址",span:3},{default:t(()=>[u(C(h.value.url),1)]),_:1}),e(I,{label:"请求方式",span:3},{default:t(()=>[u(C(h.value.method),1)]),_:1}),e(I,{label:"调用结果",span:3,contentStyle:{color:b.value?"#52c41a":"#f5222d"}},{default:t(()=>[e(x,{color:b.value?"success":"error"},{default:t(()=>[u(C(b.value?"成功":"失败"),1)]),_:1},8,["color"])]),_:1},8,["contentStyle"]),e(I,{label:"返回信息",contentStyle:{"max-height":"300px","overflow-y":"auto"},span:4},{default:t(()=>[u(C(z.value),1)]),_:1})]),_:1}))]),_:1},8,["open"])])}}}),wt=Ee($e,[["__scopeId","data-v-7eb99f40"]]);export{wt as default};
