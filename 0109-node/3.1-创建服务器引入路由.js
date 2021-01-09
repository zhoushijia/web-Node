// 引入 express
const express = require('express')

// 创建服务器对象
const app = express()

const router = require('./3-创建路由对象')
// 增加前缀，区分不同的路由文件
app.use('/msg', router)

// 监听端口
app.listen(3000, () => console.log('Server running on http://localhost:3000'))
