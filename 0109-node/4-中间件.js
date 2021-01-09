const express = require('express')
const url = require('url')

const app = express()

// 设置托管 中间件 中间件和路由的req,res是共享的
app.use('/', (req, res, next) => {
  //   封装自己的req.query
  const { query } = url.parse(req.url, true)
  req.query2 = query
  next()
})

app.get('/', (req, res) => {
  res.send('home page')
})

app.get('/user', (req, res) => {
  res.send(req.query2)
})

// 设置端口
app.listen(3000, () => console.log('express server running at http://127.0.0.1:3000'))
