// 引入 express
const express = require('express')

// 创建服务器对象
const app = express()
// 服务器指定托管路径
app.use('/xxx', express.static('./timer'))
app.get('/', (req, res) => {
  res.send('ok')
})
// 监听端口
app.listen(3000, () => console.log('Server running on http://localhost:3000'))
