import{b as y,c as pe,_ as _e}from"./index-Cs-9IBXQ.js";import me from"./ImagePicker-BsR7gLrk.js";import{g as ce,m as ve,r,n as M,L as fe,o as u,q as C,P as S,l as a,w as l,e as A,aa as ge,ab as ye,U as ke,V as be,W as Ie,J as i,X as V,h as _,F as O,Y as m,R as we,$ as he,a0 as xe,a1 as Ce,a2 as Ue,a3 as De,ac as Fe,a4 as Ne,a5 as Te,ad as Se,T as Ve,a8 as Oe,a6 as Re,a7 as $e}from"./.pnpm-CCsI2FsW.js";import"./resource-CaYpRUp8.js";/* empty css                                                                    */const qe={class:"container"},Be={class:"search-tree"},ze={class:"user"},Ke={class:"tools"},Le=ce({__name:"UserView",setup(Pe){const d=ve({keyword:"",pageNumber:1,pageSize:10,orgId:null}),U=r([]),R=r([]),J=r([{title:"用户名",key:"username",dataIndex:"username",width:"100px"},{title:"头像",key:"avatar",dataIndex:"avatar",width:"60px"},{title:"昵称",key:"name",dataIndex:"name"},{title:"所属机构",key:"org",dataIndex:"org"},{title:"邮箱",key:"email",dataIndex:"email"},{title:"状态",key:"status",dataIndex:"status",width:"100px"},{title:"操作",key:"action",dataIndex:"action",width:"250px"}]),D=r(!1),$=r(),W=o=>{d.orgId=o[0],B()},X=()=>{var o;(o=$.value)==null||o.resetFields(),f()},q=r(0),B=()=>{d.pageNumber=1,d.pageSize=10,f()},Y=o=>{const{current:e,pageSize:s}=o;d.pageNumber=e,d.pageSize=s,f()},f=()=>{D.value=!0,y.getList(d).then(o=>{const{code:e,data:s}=o;e==200&&(R.value=s.data,q.value=s.total),D.value=!1})},k=r([]),F=r(""),z=()=>pe.getOrgTree(F.value).then(o=>{const{code:e,data:s,msg:c}=o;e==200&&(k.value=s)});M(()=>{z().then(()=>{var o;d.orgId=k.value?(o=k.value[0])==null?void 0:o.id:null,U.value=[d.orgId],f()})});const b=r(!1),n=r({username:"",name:"",password:"",email:"",avatar:"",roleIds:[],phone:"",status:"1"}),g=r("add"),G=fe(()=>({add:"新增用户",edit:"编辑用户"})[g.value]),N=r(),H=()=>{g.value="add",b.value=!0,n.value={username:"",name:"",password:"",email:"",avatar:"",roleIds:[],phone:"",status:"1"}},Q=async o=>{const{code:e,data:s}=await y.getDetail(o.userId);e==200&&(n.value=s,g.value="edit",b.value=!0)},Z=async o=>{const{code:e,msg:s,data:c}=await y.remove(o.userId);e==200&&(A.success(c),f())},K=()=>{var o;(o=N.value)==null||o.resetFields()},ee={username:[{required:!0,message:"请输入用户名"}],status:[{required:!0,message:"请选择状态"}],name:[{required:!0,message:"请输入名称"}],email:[{required:!0,message:"请输入联系邮箱"}]},ae=()=>{var o;(o=N.value)==null||o.validate().then(()=>{let e;g.value=="add"?e=y.add:e=y.update,e(n.value).then(s=>{const{code:c}=s;c==200&&(A.success(g.value=="add"?"新增成功":"编辑成功"),f()),K(),b.value=!1})})},L=r([]),te=()=>{y.getRoleDict().then(o=>{const{code:e,data:s,msg:c}=o;e==200&&(L.value=s)})};return M(()=>{te()}),(o,e)=>{const s=ge,c=ye,I=he,p=xe,w=Ce,P=Ue,j=ke,h=De,le=Fe,oe=Ne,ne=Te,se=Se,ue=Ve,re=Oe,E=Re,de=$e,ie=be,T=Ie("has-perm");return u(),C("div",qe,[S("div",Be,[a(s,{value:F.value,"onUpdate:value":e[0]||(e[0]=t=>F.value=t),style:{"margin-bottom":"8px"},placeholder:"请输入机构名称",onSearch:z},null,8,["value"]),a(c,{selectedKeys:U.value,"onUpdate:selectedKeys":e[1]||(e[1]=t=>U.value=t),"tree-data":k.value,selectable:"",fieldNames:{title:"name",key:"id",children:"children"},style:{height:"calc(100% - 30px)"},onSelect:W},null,8,["selectedKeys","tree-data"])]),S("div",ze,[a(j,{class:"search-area"},{default:l(()=>[a(P,{ref_key:"searchFormRef",ref:$,model:d,onFinish:B,layout:"inline"},{default:l(()=>[a(p,{label:"用户名",name:"keyword"},{default:l(()=>[a(I,{value:d.keyword,"onUpdate:value":e[2]||(e[2]=t=>d.keyword=t)},null,8,["value"])]),_:1}),a(p,null,{default:l(()=>[a(w,{type:"primary","html-type":"submit"},{default:l(()=>[i("搜索")]),_:1}),a(w,{style:{margin:"0 8px"},onClick:X},{default:l(()=>[i(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(j,null,{default:l(()=>[S("div",Ke,[V((u(),_(w,{type:"primary",onClick:H},{default:l(()=>[i("新增")]),_:1})),[[T,"system:user:add"]])]),a(ne,{loading:D.value,columns:J.value,"data-source":R.value,scroll:{y:560},onChange:Y,pagination:{current:d.pageNumber,total:q.value}},{bodyCell:l(({column:t,record:v})=>[t.key=="status"?(u(),C(O,{key:0},[v.status=="1"?(u(),_(h,{key:0,color:"#87d068"},{default:l(()=>[i("启用")]),_:1})):(u(),_(h,{key:1,color:"#f50"},{default:l(()=>[i("停用")]),_:1}))],64)):m("",!0),t.key=="avatar"?(u(),_(le,{key:1,src:`${v.avatar}`,height:"30px",width:"30px",preview:!1},null,8,["src"])):m("",!0),t.key=="org"?(u(),_(h,{key:2},{default:l(()=>{var x;return[i(we((x=v.orgInfo)==null?void 0:x.name),1)]}),_:2},1024)):m("",!0),t.key=="action"?(u(),C(O,{key:3},[V((u(),_(w,{type:"link",onClick:x=>Q(v)},{default:l(()=>[i("编辑")]),_:2},1032,["onClick"])),[[T,"system:user:update"]]),a(oe,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:x=>Z(v)},{default:l(()=>[V((u(),_(w,{type:"link",danger:""},{default:l(()=>[i("删除")]),_:1})),[[T,"system:user:remove"]])]),_:2},1032,["onConfirm"])],64)):m("",!0),t.key=="userType"?(u(),C(O,{key:4},[v.userType=="app"?(u(),_(h,{key:0,color:"#2db7f5"},{default:l(()=>[i("菜单")]),_:1})):m("",!0),v.userType=="directory"?(u(),_(h,{key:1,color:"#87d068"},{default:l(()=>[i("目录")]),_:1})):m("",!0)],64)):m("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1}),a(ie,{open:b.value,"onUpdate:open":e[12]||(e[12]=t=>b.value=t),onOk:ae,title:G.value,onCancel:K},{default:l(()=>[a(P,{model:n.value,"label-col":{span:8},ref_key:"modalFormRef",ref:N,rules:ee},{default:l(()=>[a(p,{label:"用户名",prop:"username"},{default:l(()=>[a(I,{value:n.value.username,"onUpdate:value":e[3]||(e[3]=t=>n.value.username=t)},null,8,["value"])]),_:1}),g.value=="add"?(u(),_(p,{key:0,label:"密码",prop:"password"},{default:l(()=>[a(se,{value:n.value.password,"onUpdate:value":e[4]||(e[4]=t=>n.value.password=t)},null,8,["value"])]),_:1})):m("",!0),a(p,{label:"角色",prop:"roleIds"},{default:l(()=>[a(ue,{value:n.value.roleIds,"onUpdate:value":e[5]||(e[5]=t=>n.value.roleIds=t),fieldNames:{label:"roleName",value:"roleId"},mode:"multiple",options:L.value},null,8,["value","options"])]),_:1}),a(p,{label:"所属机构",prop:"orgId"},{default:l(()=>[a(re,{value:n.value.orgId,"onUpdate:value":e[6]||(e[6]=t=>n.value.orgId=t),"tree-node-filter-prop":"label","show-search":"","allow-clear":"",treeData:k.value,"field-names":{children:"children",label:"name",value:"id"}},null,8,["value","treeData"])]),_:1}),a(p,{label:"头像",prop:"avatar"},{default:l(()=>[a(me,{value:n.value.avatar,"onUpdate:value":e[7]||(e[7]=t=>n.value.avatar=t)},null,8,["value"])]),_:1}),a(p,{label:"状态",prop:"status"},{default:l(()=>[a(de,{value:n.value.status,"onUpdate:value":e[8]||(e[8]=t=>n.value.status=t),"button-style":"solid"},{default:l(()=>[a(E,{value:"1"},{default:l(()=>[i("启用 ")]),_:1}),a(E,{value:"0"},{default:l(()=>[i("停用 ")]),_:1})]),_:1},8,["value"])]),_:1}),a(p,{label:"名称",prop:"name"},{default:l(()=>[a(I,{value:n.value.name,"onUpdate:value":e[9]||(e[9]=t=>n.value.name=t)},null,8,["value"])]),_:1}),a(p,{label:"邮箱",prop:"email"},{default:l(()=>[a(I,{value:n.value.email,"onUpdate:value":e[10]||(e[10]=t=>n.value.email=t)},null,8,["value"])]),_:1}),a(p,{label:"电话",prop:"phone"},{default:l(()=>[a(I,{value:n.value.phone,"onUpdate:value":e[11]||(e[11]=t=>n.value.phone=t)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])])}}}),We=_e(Le,[["__scopeId","data-v-97077e96"]]);export{We as default};
