// 引入 express
const express = require('express')

// 创建服务器对象
const app = express()
// 中间件应用一:日志记录
const mw1 = (req, res, next) => {
  const time = Date.now()
  console.log(`发送的请求方式是：${req.method},请求地址是：${req.url},请求时间时：${time}`)
  next()
}
app.use(mw1)
// 中间件应用二:服务器维护拦截
const mw2 = (req, res, next) => {
  res.send('<h1 style="text-align:center;margin-top:100px">服务器正在维护....</h1>')
}
app.use(mw2)

// 中间件应用三:访问地址不存在
// const mw3 = (req, res, next) => {
//   res.send('<h1 style="text-align:center;margin-top:100px">404 访问不存在</h1>')
// }
// app.use(mw3)
// 监听端口
app.listen(3000, () => console.log('Server running on http://localhost:3000'))
