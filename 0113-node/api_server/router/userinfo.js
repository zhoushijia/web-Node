const express = require('express')
const router = express.Router()

// 导入路由处理函数
const userinfoHandler = require('../router_handler/userinfo')

// 挂载路由
router.get('/userinfo', userinfoHandler.getinfo)
router.post('/userinfo', userinfoHandler.updateinfo)

// 导出
module.exports = router
