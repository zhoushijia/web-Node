// 导入
const { urlencoded } = require('express')
const express = require('express')
// 创建服务器
const app = express()
// 监听
app.get('/', (req, res) => {
  res.send(req.query)
})
app.get('/news', (req, res) => {
  res.send('news')
})
app.post('/', (req, res) => {
  // req.query 相当于 {fpath,query} = url.parse(req.url,true)
  res.send(req.query)
})
// 启动服务器 创建端口
app.listen(80, () => {
  console.log('Server running at http://127.0.0.1')
})
