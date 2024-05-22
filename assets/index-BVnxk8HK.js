import{q as at,t as nt,d as je,r as ye,p as y,w as be,n as ot,s as M,Z as Q,g as z,i as U,_ as p,ap as rt,b3 as st,al as $e,j as Ze,aw as ae,$ as ct,P as ue,k as it,m as Qe,u as ut,av as dt,b4 as vt,e as ze,az as ft,ab as _e,ac as ht,ae as pt,o as mt,f as Ae}from"./index-5uVo7gFH.js";import{k as gt,l as yt,c as bt,K as ie,T as Ct,m as St,n as He,o as wt,u as Ue,q as xt,r as It,t as qe,B as Vt,v as kt,w as Tt,x as Nt,y as Lt,z as Et,A as Dt}from"./index-M8iWskMh.js";import{o as Ce,J as Pt,d as Oe,u as Kt,y as _t,C as At,z as Ot,A as Ft}from"./index-CpuAoWon.js";function Ht(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}function Mt(e){const{label:c,value:a,children:l}=e||{},t=a||"value";return{_title:c?[c]:["title","label"],value:t,key:t,children:l||"children"}}function Me(e){return e.disabled||e.disableCheckbox||e.checkable===!1}function Rt(e,c){const a=[];function l(t){t.forEach(n=>{a.push(n[c.value]);const o=n[c.children];o&&l(o)})}return l(e),a}function Xe(e){return e==null}const et=Symbol("TreeSelectContextPropsKey");function jt(e){return nt(et,e)}function $t(){return at(et,{})}const Bt={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},Wt=je({compatConfig:{MODE:3},name:"OptionList",inheritAttrs:!1,setup(e,c){let{slots:a,expose:l}=c;const t=gt(),n=yt(),o=$t(),i=ye(),v=bt(()=>o.treeData,[()=>t.open,()=>o.treeData],d=>d[0]),r=y(()=>{const{checkable:d,halfCheckedKeys:b,checkedKeys:L}=n;return d?{checked:L,halfChecked:b}:null});be(()=>t.open,()=>{ot(()=>{var d;t.open&&!t.multiple&&n.checkedKeys.length&&((d=i.value)===null||d===void 0||d.scrollTo({key:n.checkedKeys[0]}))})},{immediate:!0,flush:"post"});const u=y(()=>String(t.searchValue).toLowerCase()),g=d=>u.value?String(d[n.treeNodeFilterProp]).toLowerCase().includes(u.value):!1,V=M(n.treeDefaultExpandedKeys),S=M(null);be(()=>t.searchValue,()=>{t.searchValue&&(S.value=Rt(Q(o.treeData),Q(o.fieldNames)))},{immediate:!0});const I=y(()=>n.treeExpandedKeys?n.treeExpandedKeys.slice():t.searchValue?S.value:V.value),w=d=>{var b;V.value=d,S.value=d,(b=n.onTreeExpand)===null||b===void 0||b.call(n,d)},k=d=>{d.preventDefault()},O=(d,b)=>{let{node:L}=b;var P,N;const{checkable:B,checkedKeys:q}=n;B&&Me(L)||((P=o.onSelect)===null||P===void 0||P.call(o,L.key,{selected:!q.includes(L.key)}),t.multiple||(N=t.toggleOpen)===null||N===void 0||N.call(t,!1))},K=ye(null),_=y(()=>n.keyEntities[K.value]),F=d=>{K.value=d};return l({scrollTo:function(){for(var d,b,L=arguments.length,P=new Array(L),N=0;N<L;N++)P[N]=arguments[N];return(b=(d=i.value)===null||d===void 0?void 0:d.scrollTo)===null||b===void 0?void 0:b.call(d,...P)},onKeydown:d=>{var b;const{which:L}=d;switch(L){case ie.UP:case ie.DOWN:case ie.LEFT:case ie.RIGHT:(b=i.value)===null||b===void 0||b.onKeydown(d);break;case ie.ENTER:{if(_.value){const{selectable:P,value:N}=_.value.node||{};P!==!1&&O(null,{node:{key:K.value},selected:!n.checkedKeys.includes(N)})}break}case ie.ESC:t.toggleOpen(!1)}},onKeyup:()=>{}}),()=>{var d;const{prefixCls:b,multiple:L,searchValue:P,open:N,notFoundContent:B=(d=a.notFoundContent)===null||d===void 0?void 0:d.call(a)}=t,{listHeight:q,listItemHeight:R,virtual:ee,dropdownMatchSelectWidth:X,treeExpandAction:ne}=o,{checkable:oe,treeDefaultExpandAll:re,treeIcon:te,showTreeIcon:G,switcherIcon:ve,treeLine:fe,loadData:he,treeLoadedKeys:se,treeMotion:m,onTreeLoad:E,checkedKeys:H}=n;if(v.value.length===0)return z("div",{role:"listbox",class:`${b}-empty`,onMousedown:k},[B]);const le={fieldNames:o.fieldNames};return se&&(le.loadedKeys=se),I.value&&(le.expandedKeys=I.value),z("div",{onMousedown:k},[_.value&&N&&z("span",{style:Bt,"aria-live":"assertive"},[_.value.node.value]),z(Ct,U(U({ref:i,focusable:!1,prefixCls:`${b}-tree`,treeData:v.value,height:q,itemHeight:R,virtual:ee!==!1&&X!==!1,multiple:L,icon:te,showIcon:G,switcherIcon:ve,showLine:fe,loadData:P?null:he,motion:m,activeKey:K.value,checkable:oe,checkStrictly:!0,checkedKeys:r.value,selectedKeys:oe?[]:H,defaultExpandAll:re},le),{},{onActiveChange:F,onSelect:O,onCheck:O,onExpand:w,onLoad:E,filterTreeNode:g,expandAction:ne}),p(p({},a),{checkable:n.customSlots.treeCheckable}))])}}}),zt="SHOW_ALL",tt="SHOW_PARENT",Be="SHOW_CHILD";function Ge(e,c,a,l){const t=new Set(e);return c===Be?e.filter(n=>{const o=a[n];return!(o&&o.children&&o.children.some(i=>{let{node:v}=i;return t.has(v[l.value])})&&o.children.every(i=>{let{node:v}=i;return Me(v)||t.has(v[l.value])}))}):c===tt?e.filter(n=>{const o=a[n],i=o?o.parent:null;return!(i&&!Me(i.node)&&t.has(i.key))}):e}const de=()=>null;de.inheritAttrs=!1;de.displayName="ATreeSelectNode";de.isTreeSelectNode=!0;var Ut=function(e,c){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&c.indexOf(l)<0&&(a[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,l=Object.getOwnPropertySymbols(e);t<l.length;t++)c.indexOf(l[t])<0&&Object.prototype.propertyIsEnumerable.call(e,l[t])&&(a[l[t]]=e[l[t]]);return a};function qt(e){return e&&e.type&&e.type.isTreeSelectNode}function Xt(e){function c(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return rt(a).map(l=>{var t,n,o;if(!qt(l))return null;const i=l.children||{},v=l.key,r={};for(const[L,P]of Object.entries(l.props))r[st(L)]=P;const{isLeaf:u,checkable:g,selectable:V,disabled:S,disableCheckbox:I}=r,w={isLeaf:u||u===""||void 0,checkable:g||g===""||void 0,selectable:V||V===""||void 0,disabled:S||S===""||void 0,disableCheckbox:I||I===""||void 0},k=p(p({},r),w),{title:O=(t=i.title)===null||t===void 0?void 0:t.call(i,k),switcherIcon:K=(n=i.switcherIcon)===null||n===void 0?void 0:n.call(i,k)}=r,_=Ut(r,["title","switcherIcon"]),F=(o=i.default)===null||o===void 0?void 0:o.call(i),d=p(p(p({},_),{title:O,switcherIcon:K,key:v,isLeaf:u}),w),b=c(F);return b.length&&(d.children=b),d})}return c(e)}function Re(e){if(!e)return e;const c=p({},e);return"props"in c||Object.defineProperty(c,"props",{get(){return c}}),c}function Gt(e,c,a,l,t,n){let o=null,i=null;function v(){function r(u){let g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"0",V=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return u.map((S,I)=>{const w=`${g}-${I}`,k=S[n.value],O=a.includes(k),K=r(S[n.children]||[],w,O),_=z(de,S,{default:()=>[K.map(F=>F.node)]});if(c===k&&(o=_),O){const F={pos:w,node:_,children:K};return V||i.push(F),F}return null}).filter(S=>S)}i||(i=[],r(l),i.sort((u,g)=>{let{node:{props:{value:V}}}=u,{node:{props:{value:S}}}=g;const I=a.indexOf(V),w=a.indexOf(S);return I-w}))}Object.defineProperty(e,"triggerNode",{get(){return v(),o}}),Object.defineProperty(e,"allCheckedNodes",{get(){return v(),t?i:i.map(r=>{let{node:u}=r;return u})}})}function Jt(e,c){let{id:a,pId:l,rootPId:t}=c;const n={},o=[];return e.map(v=>{const r=p({},v),u=r[a];return n[u]=r,r.key=r.key||u,r}).forEach(v=>{const r=v[l],u=n[r];u&&(u.children=u.children||[],u.children.push(v)),(r===t||!u&&t===null)&&o.push(v)}),o}function Yt(e,c,a){const l=M();return be([a,e,c],()=>{const t=a.value;e.value?l.value=a.value?Jt(Q(e.value),p({id:"id",pId:"pId",rootPId:null},t!==!0?t:{})):Q(e.value).slice():l.value=Xt(Q(c.value))},{immediate:!0,deep:!0}),l}const Zt=e=>{const c=M({valueLabels:new Map}),a=M();return be(e,()=>{a.value=Q(e.value)},{immediate:!0}),[y(()=>{const{valueLabels:t}=c.value,n=new Map,o=a.value.map(i=>{var v;const{value:r}=i,u=(v=i.label)!==null&&v!==void 0?v:t.get(r);return n.set(r,u),p(p({},i),{label:u})});return c.value.valueLabels=n,o})]},Qt=(e,c)=>{const a=M(new Map),l=M({});return $e(()=>{const t=c.value,n=St(e.value,{fieldNames:t,initWrapper:o=>p(p({},o),{valueEntities:new Map}),processEntity:(o,i)=>{const v=o.node[t.value];i.valueEntities.set(v,o)}});a.value=n.valueEntities,l.value=n.keyEntities}),{valueEntities:a,keyEntities:l}},el=(e,c,a,l,t,n)=>{const o=M([]),i=M([]);return $e(()=>{let v=e.value.map(g=>{let{value:V}=g;return V}),r=c.value.map(g=>{let{value:V}=g;return V});const u=v.filter(g=>!l.value[g]);a.value&&({checkedKeys:v,halfCheckedKeys:r}=He(v,!0,l.value,t.value,n.value)),o.value=Array.from(new Set([...u,...v])),i.value=r}),[o,i]},tl=(e,c,a)=>{let{treeNodeFilterProp:l,filterTreeNode:t,fieldNames:n}=a;return y(()=>{const{children:o}=n.value,i=c.value,v=l==null?void 0:l.value;if(!i||t.value===!1)return e.value;let r;if(typeof t.value=="function")r=t.value;else{const g=i.toUpperCase();r=(V,S)=>{const I=S[v];return String(I).toUpperCase().includes(g)}}function u(g){let V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const S=[];for(let I=0,w=g.length;I<w;I++){const k=g[I],O=k[o],K=V||r(i,Re(k)),_=u(O||[],K);(K||_.length)&&S.push(p(p({},k),{[o]:_}))}return S}return u(e.value)})};function lt(){return p(p({},Ce(kt(),["mode"])),{prefixCls:String,id:String,value:{type:[String,Number,Object,Array]},defaultValue:{type:[String,Number,Object,Array]},onChange:{type:Function},searchValue:String,inputValue:String,onSearch:{type:Function},autoClearSearchValue:{type:Boolean,default:void 0},filterTreeNode:{type:[Boolean,Function],default:void 0},treeNodeFilterProp:String,onSelect:Function,onDeselect:Function,showCheckedStrategy:{type:String},treeNodeLabelProp:String,fieldNames:{type:Object},multiple:{type:Boolean,default:void 0},treeCheckable:{type:Boolean,default:void 0},treeCheckStrictly:{type:Boolean,default:void 0},labelInValue:{type:Boolean,default:void 0},treeData:{type:Array},treeDataSimpleMode:{type:[Boolean,Object],default:void 0},loadData:{type:Function},treeLoadedKeys:{type:Array},onTreeLoad:{type:Function},treeDefaultExpandAll:{type:Boolean,default:void 0},treeExpandedKeys:{type:Array},treeDefaultExpandedKeys:{type:Array},onTreeExpand:{type:Function},virtual:{type:Boolean,default:void 0},listHeight:Number,listItemHeight:Number,onDropdownVisibleChange:{type:Function},treeLine:{type:[Boolean,Object],default:void 0},treeIcon:ue.any,showTreeIcon:{type:Boolean,default:void 0},switcherIcon:ue.any,treeMotion:ue.any,children:Array,treeExpandAction:String,showArrow:{type:Boolean,default:void 0},showSearch:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},placeholder:ue.any,maxTagPlaceholder:{type:Function},dropdownPopupAlign:ue.any,customSlots:Object})}function ll(e){return!e||typeof e!="object"}const al=je({compatConfig:{MODE:3},name:"TreeSelect",inheritAttrs:!1,props:Ze(lt(),{treeNodeFilterProp:"value",autoClearSearchValue:!0,showCheckedStrategy:Be,listHeight:200,listItemHeight:20,prefixCls:"vc-tree-select"}),setup(e,c){let{attrs:a,expose:l,slots:t}=c;const n=wt(ae(e,"id")),o=y(()=>e.treeCheckable&&!e.treeCheckStrictly),i=y(()=>e.treeCheckable||e.treeCheckStrictly),v=y(()=>e.treeCheckStrictly||e.labelInValue),r=y(()=>i.value||e.multiple),u=y(()=>Mt(e.fieldNames)),[g,V]=Ue("",{value:y(()=>e.searchValue!==void 0?e.searchValue:e.inputValue),postState:s=>s||""}),S=s=>{var f;V(s),(f=e.onSearch)===null||f===void 0||f.call(e,s)},I=Yt(ae(e,"treeData"),ae(e,"children"),ae(e,"treeDataSimpleMode")),{keyEntities:w,valueEntities:k}=Qt(I,u),O=s=>{const f=[],h=[];return s.forEach(x=>{k.value.has(x)?h.push(x):f.push(x)}),{missingRawValues:f,existRawValues:h}},K=tl(I,g,{fieldNames:u,treeNodeFilterProp:ae(e,"treeNodeFilterProp"),filterTreeNode:ae(e,"filterTreeNode")}),_=s=>{if(s){if(e.treeNodeLabelProp)return s[e.treeNodeLabelProp];const{_title:f}=u.value;for(let h=0;h<f.length;h+=1){const x=s[f[h]];if(x!==void 0)return x}}},F=s=>Ht(s).map(h=>ll(h)?{value:h}:h),d=s=>F(s).map(h=>{let{label:x}=h;const{value:A,halfChecked:T}=h;let C;const D=k.value.get(A);return D&&(x=x??_(D.node),C=D.node.disabled),{label:x,value:A,halfChecked:T,disabled:C}}),[b,L]=Ue(e.defaultValue,{value:ae(e,"value")}),P=y(()=>F(b.value)),N=M([]),B=M([]);$e(()=>{const s=[],f=[];P.value.forEach(h=>{h.halfChecked?f.push(h):s.push(h)}),N.value=s,B.value=f});const q=y(()=>N.value.map(s=>s.value)),{maxLevel:R,levelEntities:ee}=xt(w),[X,ne]=el(N,B,o,w,R,ee),oe=y(()=>{const h=Ge(X.value,e.showCheckedStrategy,w.value,u.value).map(T=>{var C,D,W;return(W=(D=(C=w.value[T])===null||C===void 0?void 0:C.node)===null||D===void 0?void 0:D[u.value.value])!==null&&W!==void 0?W:T}).map(T=>{const C=N.value.find(D=>D.value===T);return{value:T,label:C==null?void 0:C.label}}),x=d(h),A=x[0];return!r.value&&A&&Xe(A.value)&&Xe(A.label)?[]:x.map(T=>{var C;return p(p({},T),{label:(C=T.label)!==null&&C!==void 0?C:T.value})})}),[re]=Zt(oe),te=(s,f,h)=>{const x=d(s);if(L(x),e.autoClearSearchValue&&V(""),e.onChange){let A=s;o.value&&(A=Ge(s,e.showCheckedStrategy,w.value,u.value).map(Z=>{const ge=k.value.get(Z);return ge?ge.node[u.value.value]:Z}));const{triggerValue:T,selected:C}=f||{triggerValue:void 0,selected:void 0};let D=A;if(e.treeCheckStrictly){const $=B.value.filter(Z=>!A.includes(Z.value));D=[...D,...$]}const W=d(D),J={preValue:N.value,triggerValue:T};let Y=!0;(e.treeCheckStrictly||h==="selection"&&!C)&&(Y=!1),Gt(J,T,s,I.value,Y,u.value),i.value?J.checked=C:J.selected=C;const j=v.value?W:W.map($=>$.value);e.onChange(r.value?j:j[0],v.value?null:W.map($=>$.label),J)}},G=(s,f)=>{let{selected:h,source:x}=f;var A,T,C;const D=Q(w.value),W=Q(k.value),J=D[s],Y=J==null?void 0:J.node,j=(A=Y==null?void 0:Y[u.value.value])!==null&&A!==void 0?A:s;if(!r.value)te([j],{selected:!0,triggerValue:j},"option");else{let $=h?[...q.value,j]:X.value.filter(Z=>Z!==j);if(o.value){const{missingRawValues:Z,existRawValues:ge}=O($),We=ge.map(Ke=>W.get(Ke).key);let Pe;h?{checkedKeys:Pe}=He(We,!0,D,R.value,ee.value):{checkedKeys:Pe}=He(We,{checked:!1,halfCheckedKeys:ne.value},D,R.value,ee.value),$=[...Z,...Pe.map(Ke=>D[Ke].node[u.value.value])]}te($,{selected:h,triggerValue:j},x||"option")}h||!r.value?(T=e.onSelect)===null||T===void 0||T.call(e,j,Re(Y)):(C=e.onDeselect)===null||C===void 0||C.call(e,j,Re(Y))},ve=s=>{if(e.onDropdownVisibleChange){const f={};Object.defineProperty(f,"documentClickClose",{get(){return!1}}),e.onDropdownVisibleChange(s,f)}},fe=(s,f)=>{const h=s.map(x=>x.value);if(f.type==="clear"){te(h,{},"selection");return}f.values.length&&G(f.values[0].value,{selected:!1,source:"selection"})},{treeNodeFilterProp:he,loadData:se,treeLoadedKeys:m,onTreeLoad:E,treeDefaultExpandAll:H,treeExpandedKeys:le,treeDefaultExpandedKeys:Se,onTreeExpand:we,virtual:xe,listHeight:Ie,listItemHeight:Ve,treeLine:me,treeIcon:ke,showTreeIcon:Te,switcherIcon:Ne,treeMotion:Le,customSlots:Ee,dropdownMatchSelectWidth:pe,treeExpandAction:De}=ct(e);It(qe({checkable:i,loadData:se,treeLoadedKeys:m,onTreeLoad:E,checkedKeys:X,halfCheckedKeys:ne,treeDefaultExpandAll:H,treeExpandedKeys:le,treeDefaultExpandedKeys:Se,onTreeExpand:we,treeIcon:ke,treeMotion:Le,showTreeIcon:Te,switcherIcon:Ne,treeLine:me,treeNodeFilterProp:he,keyEntities:w,customSlots:Ee})),jt(qe({virtual:xe,listHeight:Ie,listItemHeight:Ve,treeData:K,fieldNames:u,onSelect:G,dropdownMatchSelectWidth:pe,treeExpandAction:De}));const ce=ye();return l({focus(){var s;(s=ce.value)===null||s===void 0||s.focus()},blur(){var s;(s=ce.value)===null||s===void 0||s.blur()},scrollTo(s){var f;(f=ce.value)===null||f===void 0||f.scrollTo(s)}}),()=>{var s;const f=Ce(e,["id","prefixCls","customSlots","value","defaultValue","onChange","onSelect","onDeselect","searchValue","inputValue","onSearch","autoClearSearchValue","filterTreeNode","treeNodeFilterProp","showCheckedStrategy","treeNodeLabelProp","multiple","treeCheckable","treeCheckStrictly","labelInValue","fieldNames","treeDataSimpleMode","treeData","children","loadData","treeLoadedKeys","onTreeLoad","treeDefaultExpandAll","treeExpandedKeys","treeDefaultExpandedKeys","onTreeExpand","virtual","listHeight","listItemHeight","onDropdownVisibleChange","treeLine","treeIcon","showTreeIcon","switcherIcon","treeMotion"]);return z(Vt,U(U(U({ref:ce},a),f),{},{id:n,prefixCls:e.prefixCls,mode:r.value?"multiple":void 0,displayValues:re.value,onDisplayValuesChange:fe,searchValue:g.value,onSearch:S,OptionList:Wt,emptyOptions:!I.value.length,onDropdownVisibleChange:ve,tagRender:e.tagRender||t.tagRender,dropdownMatchSelectWidth:(s=e.dropdownMatchSelectWidth)!==null&&s!==void 0?s:!0}),t)}}}),nl=e=>{const{componentCls:c,treePrefixCls:a,colorBgElevated:l}=e,t=`.${a}`;return[{[`${c}-dropdown`]:[{padding:`${e.paddingXS}px ${e.paddingXS/2}px`},Tt(a,Qe(e,{colorBgContainer:l})),{[t]:{borderRadius:0,"&-list-holder-inner":{alignItems:"stretch",[`${t}-treenode`]:{[`${t}-node-content-wrapper`]:{flex:"auto"}}}}},Nt(`${a}-checkbox`,e),{"&-rtl":{direction:"rtl",[`${t}-switcher${t}-switcher_close`]:{[`${t}-switcher-icon svg`]:{transform:"rotate(90deg)"}}}}]}]};function ol(e,c){return it("TreeSelect",a=>{const l=Qe(a,{treePrefixCls:c.value});return[nl(l)]})(e)}const Je=(e,c,a)=>a!==void 0?a:`${e}-${c}`;function rl(){return p(p({},Ce(lt(),["showTreeIcon","treeMotion","inputIcon","getInputElement","treeLine","customSlots"])),{suffixIcon:ue.any,size:_e(),bordered:ht(),treeLine:pt([Boolean,Object]),replaceFields:mt(),placement:_e(),status:_e(),popupClassName:String,dropdownClassName:String,"onUpdate:value":Ae(),"onUpdate:treeExpandedKeys":Ae(),"onUpdate:searchValue":Ae()})}const Fe=je({compatConfig:{MODE:3},name:"ATreeSelect",inheritAttrs:!1,props:Ze(rl(),{choiceTransitionName:"",listHeight:256,treeIcon:!1,listItemHeight:26,bordered:!0}),slots:Object,setup(e,c){let{attrs:a,slots:l,expose:t,emit:n}=c;Pt(!(e.treeData===void 0&&l.default)),Oe(e.multiple!==!1||!e.treeCheckable,"TreeSelect","`multiple` will always be `true` when `treeCheckable` is true"),Oe(e.replaceFields===void 0,"TreeSelect","`replaceFields` is deprecated, please use fieldNames instead"),Oe(!e.dropdownClassName,"TreeSelect","`dropdownClassName` is deprecated. Please use `popupClassName` instead.");const o=Kt(),i=_t.useInject(),v=y(()=>At(i.status,e.status)),{prefixCls:r,renderEmpty:u,direction:g,virtual:V,dropdownMatchSelectWidth:S,size:I,getPopupContainer:w,getPrefixCls:k,disabled:O}=ut("select",e),{compactSize:K,compactItemClassnames:_}=Ot(r,g),F=y(()=>K.value||I.value),d=dt(),b=y(()=>{var m;return(m=O.value)!==null&&m!==void 0?m:d.value}),L=y(()=>k()),P=y(()=>e.placement!==void 0?e.placement:g.value==="rtl"?"bottomRight":"bottomLeft"),N=y(()=>Je(L.value,vt(P.value),e.transitionName)),B=y(()=>Je(L.value,"",e.choiceTransitionName)),q=y(()=>k("select-tree",e.prefixCls)),R=y(()=>k("tree-select",e.prefixCls)),[ee,X]=Lt(r),[ne]=ol(R,q),oe=y(()=>ze(e.popupClassName||e.dropdownClassName,`${R.value}-dropdown`,{[`${R.value}-dropdown-rtl`]:g.value==="rtl"},X.value)),re=y(()=>!!(e.treeCheckable||e.multiple)),te=y(()=>e.showArrow!==void 0?e.showArrow:e.loading||!re.value),G=ye();t({focus(){var m,E;(E=(m=G.value).focus)===null||E===void 0||E.call(m)},blur(){var m,E;(E=(m=G.value).blur)===null||E===void 0||E.call(m)}});const ve=function(){for(var m=arguments.length,E=new Array(m),H=0;H<m;H++)E[H]=arguments[H];n("update:value",E[0]),n("change",...E),o.onFieldChange()},fe=m=>{n("update:treeExpandedKeys",m),n("treeExpand",m)},he=m=>{n("update:searchValue",m),n("search",m)},se=m=>{n("blur",m),o.onFieldBlur()};return()=>{var m,E;const{notFoundContent:H=(m=l.notFoundContent)===null||m===void 0?void 0:m.call(l),prefixCls:le,bordered:Se,listHeight:we,listItemHeight:xe,multiple:Ie,treeIcon:Ve,treeLine:me,showArrow:ke,switcherIcon:Te=(E=l.switcherIcon)===null||E===void 0?void 0:E.call(l),fieldNames:Ne=e.replaceFields,id:Le=o.id.value}=e,{isFormItemInput:Ee,hasFeedback:pe,feedbackIcon:De}=i,{suffixIcon:ce,removeIcon:s,clearIcon:f}=Et(p(p({},e),{multiple:re.value,showArrow:te.value,hasFeedback:pe,feedbackIcon:De,prefixCls:r.value}),l);let h;H!==void 0?h=H:h=u("Select");const x=Ce(e,["suffixIcon","itemIcon","removeIcon","clearIcon","switcherIcon","bordered","status","onUpdate:value","onUpdate:treeExpandedKeys","onUpdate:searchValue"]),A=ze(!le&&R.value,{[`${r.value}-lg`]:F.value==="large",[`${r.value}-sm`]:F.value==="small",[`${r.value}-rtl`]:g.value==="rtl",[`${r.value}-borderless`]:!Se,[`${r.value}-in-form-item`]:Ee},Ft(r.value,v.value,pe),_.value,a.class,X.value),T={};return e.treeData===void 0&&l.default&&(T.children=ft(l.default())),ee(ne(z(al,U(U(U(U({},a),x),{},{disabled:b.value,virtual:V.value,dropdownMatchSelectWidth:S.value,id:Le,fieldNames:Ne,ref:G,prefixCls:r.value,class:A,listHeight:we,listItemHeight:xe,treeLine:!!me,inputIcon:ce,multiple:Ie,removeIcon:s,clearIcon:f,switcherIcon:C=>Dt(q.value,Te,C,l.leafIcon,me),showTreeIcon:Ve,notFoundContent:h,getPopupContainer:w==null?void 0:w.value,treeMotion:null,dropdownClassName:oe.value,choiceTransitionName:B.value,onChange:ve,onBlur:se,onSearch:he,onTreeExpand:fe},T),{},{transitionName:N.value,customSlots:p(p({},l),{treeCheckable:()=>z("span",{class:`${r.value}-tree-checkbox-inner`},null)}),maxTagPlaceholder:e.maxTagPlaceholder||l.maxTagPlaceholder,placement:P.value,showArrow:pe||ke}),p(p({},l),{treeCheckable:()=>z("span",{class:`${r.value}-tree-checkbox-inner`},null)}))))}}}),Ye=de,ul=p(Fe,{TreeNode:de,SHOW_ALL:zt,SHOW_PARENT:tt,SHOW_CHILD:Be,install:e=>(e.component(Fe.name,Fe),e.component(Ye.displayName,Ye),e)});export{ul as _};
