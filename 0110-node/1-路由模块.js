const express = require('express')

const router = express.Router()

// 路由模块
// get请求
router.get('/get', (req, res) => {
  const query = req.query
  res.send({
    status: 0, // 0表示请求成功, 1表示失败
    msg: 'GET请求成功',
    data: query
  })
})
// post请求
router.post('/post', (req, res) => {
  const body = req.body
  res.send({
    status: 0, // 0表示请求成功, 1表示失败
    msg: 'POST请求成功',
    data: body
  })
})
// delet请求
router.post('/delete', (req, res) => {
  res.send({
    status: 0, // 0表示请求成功, 1表示失败
    msg: 'delete请求成功'
  })
})

module.exports = router
