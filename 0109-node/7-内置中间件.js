const express = require('express')

const app = express()

// 内置中间件
app.use(express.static('timer'))
// 解析从服务端传来的json格式的数据
app.use(express.json())
// 解析服务端传来的key、value数据
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
  // req.body 得到传来的结果
  res.send(req.body)
})

app.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})
