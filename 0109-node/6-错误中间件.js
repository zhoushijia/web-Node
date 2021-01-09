// 引入 express
const express = require('express')

// 创建服务器对象
const app = express()

app.get('/', (req, res) => {
  throw new Error('服务器错误！')
  res.send('ok')
})

app.use((err, req, res, next) => {
  res.send(err.message)
})
// 监听端口
app.listen(3000, () => console.log('Server running on http://localhost:3000'))
