const express = require('express')

const app = express();

app.all('/',(request,response)=>{
    response.send('hello express');
});

//监听端口
app.listen(9000,()=>{
    console.log("服务器已经启动");
})