const express = require('express')
const router = express.Router()
// 导入文章处理函数
const articlecateHandler = require('../router_handler/articlecate')
// 导入校验规则处理包
const expressjoi = require('@escook/express-joi')
// 导入校验规则
const articlecateSchema = require('../schema/articlecate')

// 挂载路由
// 获取文章分类列表
router.get('/cates', articlecateHandler.catesHandler)
// 新增文章分类
router.post('/addcates', expressjoi(articlecateSchema.add_cates_schema), articlecateHandler.addcatesHandler)
// 删除文章分类
router.get('/deletecate/:id', expressjoi(articlecateSchema.cate_id_schema), articlecateHandler.deletecateHandler)
// 根据id获取文章分类
router.get('/cates/:id', expressjoi(articlecateSchema.cate_id_schema), articlecateHandler.cateByIdHandler)
// 更新文章分类和别名
router.post('/updatecate', expressjoi(articlecateSchema.update_cate_schema), articlecateHandler.updatecateHandler)

module.exports = router
