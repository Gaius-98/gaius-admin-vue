import{r as e}from"./index-BiYaJyuZ.js";const a={getList:t=>e({method:"get",url:"table/list",params:t}),getDetail:t=>e({method:"get",url:"table/detail",params:{id:t}}),remove:t=>e({method:"get",url:"table/remove",params:{id:t}}),add:t=>e({method:"post",url:"table/add",data:t}),update:t=>e({method:"post",url:"table/update",data:t}),getApiList:()=>e({method:"get",url:"request/dict"}),getFormList:()=>e({method:"get",url:"form/dict"})};export{a as t};