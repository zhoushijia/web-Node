const express = require('express')
const app = express()

// morgen日志模块
const morgan = require('morgan')
// app.use(morgan())
// 压缩版信息
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('ok')
})

app.listen(80, () => {
  console.log('server running at http://localhost')
})
