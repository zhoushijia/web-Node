const express = require('express')
// 创建路由对象
const router = express.Router()
// 路由映射关系
router.get('/user/list', (req, res) => {
  res.send('GET user list')
})
router.post('/user/add', (req, res) => {
  res.send('POST add user')
})

// 挂载
module.exports = router
