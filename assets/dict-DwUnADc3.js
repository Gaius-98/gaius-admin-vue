import{a8 as e}from"./index-D-AsqWGq.js";const d={getList:t=>e({method:"get",url:"dict/list",params:t}),getDetail:t=>e({method:"get",url:"dict/detail",params:{id:t}}),remove:t=>e({method:"get",url:"dict/remove",params:{id:t}}),add:t=>e({method:"post",url:"dict/add",data:t}),update:t=>e({method:"post",url:"dict/update",data:t}),getDictTypeList:()=>e({method:"get",url:"dict/dictTypeList"})};export{d};
