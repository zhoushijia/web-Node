const express = require('express')
const router = express.Router()
// 导入文章处理函数
const articleHandler = require('../router_handler/article')
// 导入校验规则处理包
const expressjoi = require('@escook/express-joi')
// 导入校验规则
const articleSchema = require('../schema/article')

// 挂载路由
// 获取文章分类列表
router.get('/cates', articleHandler.catesHandler)
// 新增文章分类
router.post('/addcates', expressjoi(articleSchema.add_cates_Schema), articleHandler.addcatesHandler)

module.exports = router
