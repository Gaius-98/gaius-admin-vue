import{r as e}from"./index-ChcIlpw2.js";const d={getTypeList:t=>e({method:"get",url:"dict/list/type",params:t}),getTypeDetail:t=>e({method:"get",url:"dict/detail/type",params:{id:t}}),getDictDetail:t=>e({method:"get",url:"dict/detail/data",params:{id:t}}),removeType:t=>e({method:"get",url:"dict/remove/type",params:{id:t}}),removeData:t=>e({method:"get",url:"dict/remove/data",params:{id:t}}),addType:t=>e({method:"post",url:"dict/add/type",data:t}),addData:t=>e({method:"post",url:"dict/add/data",data:t}),updateType:t=>e({method:"post",url:"dict/update/type",data:t}),updateData:t=>e({method:"post",url:"dict/update/data",data:t}),getDictTypeList:()=>e({method:"get",url:"dict/dictTypeList"})};export{d};
