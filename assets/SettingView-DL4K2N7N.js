import{r as y,_ as se}from"./index-DKU_nxyK.js";/* empty css                                                                    */import{c as le}from"./common-2Sse0adR.js";import{g as ue,m as ie,r as p,n as P,L as de,U as re,o as i,q as F,l as t,w as e,e as j,V as pe,W as _e,J as d,P as ce,X as S,i as c,F as U,Y as f,R as me,Z as ge,$ as ve,a0 as ye,T as fe,a1 as ke,a2 as be,a3 as Te,a5 as xe,K as Ce,a4 as Ve,a6 as we,ar as Fe,a7 as he,a8 as De}from"./.pnpm-eZ9qvLl_.js";const V={getList:u=>y({method:"get",url:"setting/list",params:u}),getDetail:u=>y({method:"get",url:"setting/detail",params:{id:u}}),remove:u=>y({method:"get",url:"setting/remove",params:{id:u}}),add:u=>y({method:"post",url:"setting/add",data:u}),update:u=>y({method:"post",url:"setting/update",data:u}),getSettingByType:u=>y({method:"get",url:"setting/byType",params:{type:u}})},Se={class:"setting"},Ue={class:"tools"},Ie=ue({__name:"SettingView",setup(u){const r=ie({keyword:"",pageNumber:1,pageSize:10,type:""}),I=p([]),q=p([{title:"配置键名",key:"settingKey",dataIndex:"settingKey"},{title:"配置值",key:"settingValue",dataIndex:"settingValue"},{title:"配置类型",key:"settingType",dataIndex:"settingType"},{title:"状态",key:"status",dataIndex:"status"},{title:"备注",key:"remark",dataIndex:"remark"},{title:"操作",key:"action",dataIndex:"action"}]),h=p(!1),N=p(),E=()=>{var n;(n=N.value)==null||n.resetFields(),m()},K=p(0),A=()=>{r.pageNumber=1,r.pageSize=10,m()},J=n=>{const{current:a,pageSize:l}=n;r.pageNumber=a,r.pageSize=l,m()},m=()=>{h.value=!0,V.getList(r).then(n=>{const{code:a,data:l}=n;a==200&&(I.value=l.data,K.value=l.total),h.value=!1})},w=p([]),$=p({});P(()=>{m(),le.getDict(["configType"]).then(n=>{const{code:a,data:l,msg:_}=n;a==200&&(w.value=l.configType,$.value=w.value.reduce((g,T)=>(g[T.value]=T.label,g),{}))})});const k=p(!1),s=p({settingKey:"",settingValue:"",settingType:"",status:1,remark:""}),b=p("add"),W=de(()=>({add:"新增配置",edit:"编辑配置"})[b.value]),z=p(),X=()=>{b.value="add",k.value=!0,s.value={settingKey:"",settingValue:"",settingType:"",status:1,remark:""}},Y=async n=>{const{code:a,data:l}=await V.getDetail(n.id);a==200&&(s.value=l,b.value="edit",k.value=!0)},Z=async n=>{const{code:a,msg:l,data:_}=await V.remove(n.id);a==200&&(j.success(_),m())},B=()=>{var n;(n=z.value)==null||n.resetFields()},G=()=>{let n;b.value=="add"?n=V.add:n=V.update,n(s.value).then(a=>{const{code:l}=a;l==200&&(j.success(b.value=="add"?"新增成功":"编辑成功"),m()),B(),k.value=!1})};return P(()=>{}),(n,a)=>{const l=ge,_=ve,g=ye,T=fe,x=ke,H=be,O=Te,L=pe,C=xe,Q=Ce,ee=Ve,te=we,R=Fe,M=he,ae=De,ne=_e,D=re("has-perm");return i(),F("div",Se,[t(L,{class:"search-area"},{default:e(()=>[t(O,{ref_key:"searchFormRef",ref:N,model:r,onFinish:A},{default:e(()=>[t(H,{gutter:24},{default:e(()=>[t(g,{span:4},{default:e(()=>[t(_,{label:"配置键名",name:"keyword"},{default:e(()=>[t(l,{value:r.keyword,"onUpdate:value":a[0]||(a[0]=o=>r.keyword=o)},null,8,["value"])]),_:1})]),_:1}),t(g,{span:4},{default:e(()=>[t(_,{label:"所属配置类型",name:"type"},{default:e(()=>[t(T,{value:r.type,"onUpdate:value":a[1]||(a[1]=o=>r.type=o),options:w.value},null,8,["value","options"])]),_:1})]),_:1}),t(g,{span:4,style:{"text-align":"right"}},{default:e(()=>[t(x,{type:"primary","html-type":"submit"},{default:e(()=>[d("搜索")]),_:1}),t(x,{style:{margin:"0 8px"},onClick:E},{default:e(()=>[d(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(L,null,{default:e(()=>[ce("div",Ue,[S((i(),c(x,{type:"primary",onClick:X},{default:e(()=>[d("新增")]),_:1})),[[D,"system:setting:add"]])]),t(te,{loading:h.value,columns:q.value,"data-source":I.value,scroll:{y:440},onChange:J,pagination:{current:r.pageNumber,total:K.value}},{bodyCell:e(({column:o,record:v})=>[o.key=="status"?(i(),F(U,{key:0},[v.status?(i(),c(C,{key:0,color:"#87d068"},{default:e(()=>[d("启用")]),_:1})):(i(),c(C,{key:1,color:"#f50"},{default:e(()=>[d("停用")]),_:1}))],64)):f("",!0),o.key=="settingType"?(i(),c(C,{key:1},{default:e(()=>[d(me($.value[v.settingType]||"未定义"),1)]),_:2},1024)):f("",!0),o.key=="action"?(i(),F(U,{key:2},[S((i(),c(x,{type:"link",onClick:oe=>Y(v)},{default:e(()=>[d("编辑")]),_:2},1032,["onClick"])),[[D,"system:setting:update"]]),t(Q,{type:"vertical"}),t(ee,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:oe=>Z(v)},{default:e(()=>[S((i(),c(x,{type:"link",danger:""},{default:e(()=>[d("删除")]),_:1})),[[D,"system:setting:remove"]])]),_:2},1032,["onConfirm"])],64)):f("",!0),o.key=="settingType"?(i(),F(U,{key:3},[v.settingType=="app"?(i(),c(C,{key:0,color:"#2db7f5"},{default:e(()=>[d("菜单")]),_:1})):f("",!0),v.settingType=="directory"?(i(),c(C,{key:1,color:"#87d068"},{default:e(()=>[d("目录")]),_:1})):f("",!0)],64)):f("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),t(ne,{open:k.value,"onUpdate:open":a[7]||(a[7]=o=>k.value=o),onOk:G,title:W.value,onCancel:B},{default:e(()=>[t(O,{model:s.value,"label-col":{span:8},ref_key:"modalFormRef",ref:z},{default:e(()=>[t(_,{label:"配置键名"},{default:e(()=>[t(l,{value:s.value.settingKey,"onUpdate:value":a[2]||(a[2]=o=>s.value.settingKey=o)},null,8,["value"])]),_:1}),t(_,{label:"配置值"},{default:e(()=>[t(R,{"auto-size":"",value:s.value.settingValue,"onUpdate:value":a[3]||(a[3]=o=>s.value.settingValue=o)},null,8,["value"])]),_:1}),t(_,{label:"所属配置类型"},{default:e(()=>[t(T,{value:s.value.settingType,"onUpdate:value":a[4]||(a[4]=o=>s.value.settingType=o),options:w.value},null,8,["value","options"])]),_:1}),t(_,{label:"状态"},{default:e(()=>[t(ae,{value:s.value.status,"onUpdate:value":a[5]||(a[5]=o=>s.value.status=o),"button-style":"solid"},{default:e(()=>[t(M,{value:1},{default:e(()=>[d("启用 ")]),_:1}),t(M,{value:0},{default:e(()=>[d("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),t(_,{label:"备注"},{default:e(()=>[t(R,{"auto-size":"",value:s.value.remark,"onUpdate:value":a[6]||(a[6]=o=>s.value.remark=o)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),Be=se(Ie,[["__scopeId","data-v-56322bf1"]]);export{Be as default};
