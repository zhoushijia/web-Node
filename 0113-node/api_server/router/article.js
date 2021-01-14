const express = require('express')
const router = express.Router()
// 导入文章处理函数
const articleHandler = require('../router_handler/article')

// 挂载路由
// 获取文章分类列表
router.get('/cates', articleHandler.cateHandler)

module.exports = router
