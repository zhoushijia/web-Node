// 引入 express
const express = require('express')

// 创建服务器对象
const app = express()
const router = require('./5.3-路由模块')
const cors = require('cors')

app.get('/api/jsonp', (req, res) => {
  // res.jsonp({
  //   status: 0,
  //   msg: 'jsonp请求成功'
  // })

  // 拿到前端的回调函数名
  const fn = req.query.callback
  // 要响应的数据
  const data = { status: 0, msg: 'jsonp请求成功' }
  // 响应给前端
  // 注意这里的数据必须转换成json格式否则无法解析
  res.send(`${fn}(${JSON.stringify(data)})`)
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', router)

// 监听端口
app.listen(3000, () => console.log('Server running on http://localhost:3000'))
