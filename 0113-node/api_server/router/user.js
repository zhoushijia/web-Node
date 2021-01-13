const express = require('express')
// 创建路由
const router = express.Router()
// 导入路由处理函数
const handler = require('../router_handler/user')

// 挂载user请求
router.post('/reguser', handler.reguser)
router.post('/login', handler.login)

// 导出路由
module.exports = router
