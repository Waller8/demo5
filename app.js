 const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'))

console.log("这是一个测试pm2的demo")

app.listen(8000,()=>{
    console.log("服务已开启，正在监听3000端口！！！")
})

module.exports = app;
