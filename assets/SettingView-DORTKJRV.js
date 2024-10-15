import{r as y,c as se,_ as le}from"./index-B80LQDti.js";/* empty css                                                                    */import{g as ue,m as ie,r,n as P,L as de,U as pe,o as i,q as V,l as t,w as e,e as j,V as re,W as _e,J as d,P as ce,X as S,i as c,F as U,Y as f,R as me,$ as ge,a0 as ve,a1 as ye,T as fe,a2 as ke,a3 as be,a4 as xe,a6 as Te,K as we,a5 as Ce,a7 as he,at as Ve,a8 as Fe,a9 as De}from"./.pnpm-DmAI0IVr.js";const C={getList:u=>y({method:"get",url:"setting/list",params:u}),getDetail:u=>y({method:"get",url:"setting/detail",params:{id:u}}),remove:u=>y({method:"get",url:"setting/remove",params:{id:u}}),add:u=>y({method:"post",url:"setting/add",data:u}),update:u=>y({method:"post",url:"setting/update",data:u}),getSettingByType:u=>y({method:"get",url:"setting/byType",params:{type:u}})},Se={class:"setting"},Ue={class:"tools"},Ie=ue({__name:"SettingView",setup(u){const p=ie({keyword:"",pageNumber:1,pageSize:10,type:""}),I=r([]),q=r([{title:"配置键名",key:"settingKey",dataIndex:"settingKey",width:"150px"},{title:"配置值",key:"settingValue",dataIndex:"settingValue",width:"400px"},{title:"配置类型",key:"settingType",dataIndex:"settingType",width:"100px"},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"备注",key:"remark",dataIndex:"remark"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),F=r(!1),N=r(),E=()=>{var n;(n=N.value)==null||n.resetFields(),m()},K=r(0),A=()=>{p.pageNumber=1,p.pageSize=10,m()},J=n=>{const{current:a,pageSize:l}=n;p.pageNumber=a,p.pageSize=l,m()},m=()=>{F.value=!0,C.getList(p).then(n=>{const{code:a,data:l}=n;a==200&&(I.value=l.data,K.value=l.total),F.value=!1})},h=r([]),$=r({});P(()=>{m(),se.getDict(["configType"]).then(n=>{const{code:a,data:l,msg:_}=n;a==200&&(h.value=l.configType,$.value=h.value.reduce((g,x)=>(g[x.value]=x.label,g),{}))})});const k=r(!1),s=r({settingKey:"",settingValue:"",settingType:"",status:1,remark:""}),b=r("add"),W=de(()=>({add:"新增配置",edit:"编辑配置"})[b.value]),z=r(),X=()=>{b.value="add",k.value=!0,s.value={settingKey:"",settingValue:"",settingType:"",status:1,remark:""}},Y=async n=>{const{code:a,data:l}=await C.getDetail(n.id);a==200&&(s.value=l,b.value="edit",k.value=!0)},G=async n=>{const{code:a,msg:l,data:_}=await C.remove(n.id);a==200&&(j.success(_),m())},B=()=>{var n;(n=z.value)==null||n.resetFields()},H=()=>{let n;b.value=="add"?n=C.add:n=C.update,n(s.value).then(a=>{const{code:l}=a;l==200&&(j.success(b.value=="add"?"新增成功":"编辑成功"),m()),B(),k.value=!1})};return P(()=>{}),(n,a)=>{const l=ge,_=ve,g=ye,x=fe,T=ke,Q=be,O=xe,L=re,w=Te,Z=we,ee=Ce,te=he,R=Ve,M=Fe,ae=De,ne=_e,D=pe("has-perm");return i(),V("div",Se,[t(L,{class:"search-area"},{default:e(()=>[t(O,{ref_key:"searchFormRef",ref:N,model:p,onFinish:A},{default:e(()=>[t(Q,{gutter:24},{default:e(()=>[t(g,{span:4},{default:e(()=>[t(_,{label:"配置键名",name:"keyword"},{default:e(()=>[t(l,{value:p.keyword,"onUpdate:value":a[0]||(a[0]=o=>p.keyword=o)},null,8,["value"])]),_:1})]),_:1}),t(g,{span:4},{default:e(()=>[t(_,{label:"所属配置类型",name:"type"},{default:e(()=>[t(x,{value:p.type,"onUpdate:value":a[1]||(a[1]=o=>p.type=o),options:h.value},null,8,["value","options"])]),_:1})]),_:1}),t(g,{span:4,style:{"text-align":"right"}},{default:e(()=>[t(T,{type:"primary","html-type":"submit"},{default:e(()=>[d("搜索")]),_:1}),t(T,{style:{margin:"0 8px"},onClick:E},{default:e(()=>[d(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(L,null,{default:e(()=>[ce("div",Ue,[S((i(),c(T,{type:"primary",onClick:X},{default:e(()=>[d("新增")]),_:1})),[[D,"system:setting:add"]])]),t(te,{loading:F.value,columns:q.value,"data-source":I.value,scroll:{y:440},onChange:J,pagination:{current:p.pageNumber,total:K.value}},{bodyCell:e(({column:o,record:v})=>[o.key=="status"?(i(),V(U,{key:0},[v.status?(i(),c(w,{key:0,color:"#87d068"},{default:e(()=>[d("启用")]),_:1})):(i(),c(w,{key:1,color:"#f50"},{default:e(()=>[d("停用")]),_:1}))],64)):f("",!0),o.key=="settingType"?(i(),c(w,{key:1},{default:e(()=>[d(me($.value[v.settingType]||"未定义"),1)]),_:2},1024)):f("",!0),o.key=="action"?(i(),V(U,{key:2},[S((i(),c(T,{type:"link",onClick:oe=>Y(v)},{default:e(()=>[d("编辑")]),_:2},1032,["onClick"])),[[D,"system:setting:update"]]),t(Z,{type:"vertical"}),t(ee,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:oe=>G(v)},{default:e(()=>[S((i(),c(T,{type:"link",danger:""},{default:e(()=>[d("删除")]),_:1})),[[D,"system:setting:remove"]])]),_:2},1032,["onConfirm"])],64)):f("",!0),o.key=="settingType"?(i(),V(U,{key:3},[v.settingType=="app"?(i(),c(w,{key:0,color:"#2db7f5"},{default:e(()=>[d("菜单")]),_:1})):f("",!0),v.settingType=="directory"?(i(),c(w,{key:1,color:"#87d068"},{default:e(()=>[d("目录")]),_:1})):f("",!0)],64)):f("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),t(ne,{open:k.value,"onUpdate:open":a[7]||(a[7]=o=>k.value=o),onOk:H,title:W.value,onCancel:B},{default:e(()=>[t(O,{model:s.value,"label-col":{span:8},ref_key:"modalFormRef",ref:z},{default:e(()=>[t(_,{label:"配置键名"},{default:e(()=>[t(l,{value:s.value.settingKey,"onUpdate:value":a[2]||(a[2]=o=>s.value.settingKey=o)},null,8,["value"])]),_:1}),t(_,{label:"配置值"},{default:e(()=>[t(R,{"auto-size":"",value:s.value.settingValue,"onUpdate:value":a[3]||(a[3]=o=>s.value.settingValue=o)},null,8,["value"])]),_:1}),t(_,{label:"所属配置类型"},{default:e(()=>[t(x,{value:s.value.settingType,"onUpdate:value":a[4]||(a[4]=o=>s.value.settingType=o),options:h.value},null,8,["value","options"])]),_:1}),t(_,{label:"状态"},{default:e(()=>[t(ae,{value:s.value.status,"onUpdate:value":a[5]||(a[5]=o=>s.value.status=o),"button-style":"solid"},{default:e(()=>[t(M,{value:1},{default:e(()=>[d("启用 ")]),_:1}),t(M,{value:0},{default:e(()=>[d("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),t(_,{label:"备注"},{default:e(()=>[t(R,{"auto-size":"",value:s.value.remark,"onUpdate:value":a[6]||(a[6]=o=>s.value.remark=o)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}}),ze=le(Ie,[["__scopeId","data-v-24071870"]]);export{ze as default};
