// 导入express包
const express = require('express')

// 生成app 服务器
const app = express()

// 导入user路由
const userRouter = require('./router/user')
// 导入跨域包
const cors = require('cors')
// 导入定义规则包
const joi = require('@hapi/joi')

// 中间件
// 实现跨域
app.use(cors())
// 解析前端传来的数据格式
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//? 优化res.send  包封装 使代码更具观赏性
app.use(require('./middleware/optimize'))

//! 路由入口
app.use('/api', userRouter)

// 校验后错误中间件
app.use(require('./middleware/err'))

// 端口
app.listen(3007, () => {
  console.log('server running at http://127.0.0.1:3007')
})
