import{$ as t}from"./index-DSUwjLB0.js";const u={getList:e=>t({url:"/menu/list",method:"get",params:{keyword:e}}),getDetail:e=>t({url:"/menu/detail",method:"get",params:{id:e}}),remove:e=>t({url:"/menu/remove",method:"get",params:{id:e}}),update:e=>t({url:"/menu/update",method:"post",data:e}),add:e=>t({url:"/menu/add",method:"post",data:e}),dict:()=>t({url:"menu/directory",method:"get"})};export{u as a};
