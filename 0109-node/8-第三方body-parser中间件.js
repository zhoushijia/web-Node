// body-parser morgen cors

// body-parser
// 引入 express
const express = require('express')
const bodyParser = require('body-parser')
// 创建服务器对象
const app = express()
// 解析从服务端传来的json格式的数据
app.use(bodyParser.json())
// 解析服务端传来的key、value数据
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/xxx', (req, res) => {
  res.send(req.body)
})

// 监听端口
app.listen(3000, () => console.log('Server running on http://localhost:3000'))
