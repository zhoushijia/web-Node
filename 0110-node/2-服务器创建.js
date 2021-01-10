const express = require('express')
const app = express()
// 导入cors跨域模块
const cors = require('cors')
app.use(cors())

// 解决post数据格式
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// 导入路由模块
const router = require('./1-路由模块')

// 注册路由模块
app.use('/api', router)

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
