// 导入express包
const express = require('express')
// 导入跨域包
const cors = require('cors')
// 生成app 服务器
const app = express()
// 导入user路由
const userRouter = require('./router/user')

// 中间件
// 实现跨域
app.use(cors())
// 解析前端传来的数据格式
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// 路由
app.use('/api', userRouter)

// 端口
app.listen(3007, () => {
  console.log('server running at http://127.0.0.1:3007')
})
