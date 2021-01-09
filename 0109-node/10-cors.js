// 引入 express
const express = require('express')
const cors = require('cors')

// 创建服务器对象
const app = express()

// cors解决跨域
app.use(cors())

app.get('/user', (req, res) => {
  res.send('ok')
})

// 监听端口
app.listen(3000, () => console.log('Server running on http://localhost:3000'))
