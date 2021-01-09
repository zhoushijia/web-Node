const express = require('express')
const app = express()
// 得到自己封装的body-parser对象
const bodyParser = require('./11.1-body-parser')
// 中间件
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/xxxx', (req, res) => {
  res.send(req.body)
})

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
