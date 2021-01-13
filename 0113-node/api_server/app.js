// 导入express包
const express = require('express')
// 导入跨域包
const cors = require('cors')
// 生成app 服务器
const app = express()
// 导入user路由
const userRouter = require('./router/user')

// 导入定义规则包
const joi = require('@hapi/joi')

// 中间件
// 实现跨域
app.use(cors())
// 解析前端传来的数据格式
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// 优化res.send
app.use((req, res, next) => {
  // status放在最后，默认值为1，可选传递属性
  res.cc = (err, status = 1) => {
    res.send({ status, err: err instanceof Error ? err.message : err })
  }
  next()
})

// 路由
app.use('/api', userRouter)

// 校验后错误中间件
app.use((err, req, res, next) => {
  // 判断 err 是否是由@hapi/joi校验引起的err
  if (err instanceof joi.ValidationError) return res.cc(err)
  // 未知错误
  res.cc(res)
})

// 端口
app.listen(3007, () => {
  console.log('server running at http://127.0.0.1:3007')
})
