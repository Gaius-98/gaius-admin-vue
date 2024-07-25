import{t as L}from"./table-u-nwCakZ.js";import{u as P}from"./vue-router-C97ZxxSg.js";import{g as W,h as Y,i as G,j as H,B as Q,k as X,F as Z,K as tt,m as et,O as ot,T as nt,c as at,I as st,n as it,P as lt}from"./ant-design-vue-nZFTCpdE.js";import{s as rt,$ as pt,N as ct}from"./@ant-design-C9fRTiaf.js";import{d as _t,r as _,a as ut,o as mt,U as n,V as u,c as t,a5 as e,J as i,W as dt,u as v,a4 as m,F as h,Y as ft,ad as b}from"./@vue-Ckf1Z535.js";import{b as yt}from"./index-CiSVSn52.js";import"./@babel-BiFW4_mA.js";import"./lodash-es-PU94eZQX.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./dayjs-X-x4l2Bb.js";import"./@ctrl-DOFZgDuz.js";import"./throttle-debounce-CUWDS_la.js";import"./async-validator-DKvM95Vc.js";import"./scroll-into-view-if-needed-SxpMpKWN.js";import"./compute-scroll-into-view-1gs_hJI2.js";import"./vue-types-C5fUfLeo.js";import"./dom-align-CRCehRfe.js";import"./@emotion-BtrR-yrm.js";import"./stylis-DsJDcYJc.js";import"./pinia-DMSgKyd8.js";/* empty css                      */import"./axios-B4uVmeYG.js";import"./js-cookie-Cz0CWeBA.js";import"./@vueuse-BDAzFyRD.js";import"./uuid-CQkTLCs1.js";import"./vue-codemirror-CVO3ucIx.js";import"./codemirror-CwY5MT_v.js";import"./@codemirror-BgatmlGX.js";import"./@lezer-CciglqRQ.js";import"./crelt-C8TCjufn.js";import"./style-mod-Bc2inJdb.js";import"./w3c-keyname-Vcq4gwWv.js";import"./echarts-DetEu2Tg.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CDo53BfZ.js";import"./gaius-utils-B5cUlySA.js";const kt={class:"table"},gt={class:"tools"},vt={key:1},ht={key:0,class:"contain"},bt=_t({__name:"TableList",setup(xt){const k=P(),O=_([{title:"id",key:"id",dataIndex:"id"},{title:"表格名称",key:"name",dataIndex:"name"},{title:"状态",key:"status",dataIndex:"status",width:100},{title:"创建时间",key:"createTime",dataIndex:"createTime"},{title:"备注",key:"description",dataIndex:"description"},{title:"操作",key:"action",dataIndex:"action"}]),p=ut({keyword:"",pageNumber:1,pageSize:10}),f=_([]),x=_(0),C=_(!1),w=_(),D=()=>{var a;(a=w.value)==null||a.resetFields(),d()},y=_("table"),E=()=>{y.value=="table"?y.value="visual":y.value="table"},d=()=>{C.value=!0,L.getList(p).then(a=>{const{code:s,data:c}=a;s==200&&(f.value=c.data,x.value=c.total),C.value=!1})},J=()=>{k.push({path:"/low-code/table"})},R=a=>{k.push({path:"/low-code/preview-table",query:{id:a}})},I=a=>{k.push({path:"/low-code/table",query:{id:a}})},T=a=>{L.remove(a).then(s=>{const{code:c}=s;c==200&&d()})};return mt(()=>{d()}),(a,s)=>{const c=Y,U=G,F=H,l=Q,j=X,q=Z,g=W,A=tt,N=et,S=ot,$=nt,B=at,z=st,K=it,M=lt;return n(),u("div",kt,[t(g,{class:"search-area"},{default:e(()=>[t(q,{ref_key:"searchFormRef",ref:w,model:p,onFinish:d},{default:e(()=>[t(j,{gutter:24},{default:e(()=>[t(F,{span:4},{default:e(()=>[t(U,{label:"表格名称",name:"keyword"},{default:e(()=>[t(c,{value:p.keyword,"onUpdate:value":s[0]||(s[0]=o=>p.keyword=o)},null,8,["value"])]),_:1})]),_:1}),t(F,{span:4,style:{"text-align":"right"}},{default:e(()=>[t(l,{type:"primary","html-type":"submit"},{default:e(()=>[i("搜索")]),_:1}),t(l,{style:{margin:"0 8px"},onClick:D},{default:e(()=>[i(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(g,null,{default:e(()=>[dt("div",gt,[t(l,{type:"primary",onClick:J},{default:e(()=>[i("新增")]),_:1}),t(l,{onClick:E,type:"link",style:{float:"right"}},{default:e(()=>[t(v(rt))]),_:1})]),f.value.length===0?(n(),m(A,{key:0})):(n(),u("div",vt,[y.value=="visual"?(n(),u("div",ht,[(n(!0),u(h,null,ft(f.value,o=>(n(),m(g,{hoverable:!0,key:o.id},{actions:e(()=>[t(v(pt),{key:"edit",title:"编辑",onClick:r=>I(o.id)},null,8,["onClick"]),t(N,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:r=>T(o.id)},{default:e(()=>[t(v(ct),{key:"delete",title:"删除"})]),_:2},1032,["onConfirm"])]),default:e(()=>[t(S,{title:o.name,description:o.description},null,8,["title","description"])]),_:2},1024))),128))])):(n(),m(K,{key:1,columns:O.value,"data-source":f.value,pagination:!1,scroll:{y:470}},{bodyCell:e(({column:o,record:r})=>[o.key=="status"?(n(),u(h,{key:0},[r.status?(n(),m($,{key:0,color:"#87d068"},{default:e(()=>[i("启用")]),_:1})):(n(),m($,{key:1,color:"#f50"},{default:e(()=>[i("停用")]),_:1}))],64)):b("",!0),o.key=="action"?(n(),u(h,{key:1},[t(l,{type:"link",onClick:V=>R(r.id)},{default:e(()=>[i("预览")]),_:2},1032,["onClick"]),t(B,{type:"vertical"}),t(l,{type:"link",onClick:V=>I(r.id)},{default:e(()=>[i("编辑")]),_:2},1032,["onClick"]),t(B,{type:"vertical"}),t(N,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:V=>T(r.id)},{default:e(()=>[t(l,{type:"link",danger:""},{default:e(()=>[i("删除")]),_:1})]),_:2},1032,["onConfirm"])],64)):b("",!0),o.key=="img"?(n(),m(z,{key:2,src:r.img,height:"100px",width:"100%"},null,8,["src"])):b("",!0)]),_:1},8,["columns","data-source"]))])),t(M,{style:{display:"flex","justify-content":"flex-end"},current:p.pageNumber,"onUpdate:current":s[1]||(s[1]=o=>p.pageNumber=o),total:x.value,"show-less-items":"",onChange:s[2]||(s[2]=o=>d())},null,8,["current","total"])]),_:1})])}}}),se=yt(bt,[["__scopeId","data-v-77ca9b4a"]]);export{se as default};
