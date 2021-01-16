const express = require('express')
const router = express.Router()

const expressjoi = require('@escook/express-joi')
const article_schema = require('../schema/article')
// 导入数据解析包multer  解析文件类型的数据
const multer = require('multer')
const path = require('path')
// 文件存储路径
const uploads = multer({ dest: path.join(__dirname, '../uploads') })

// 导入文章管理处理函数
const articleHandler = require('../router_handler/article')
// 挂载路由
// 新增文章
// 中间件uploads.single得到文件数据req.file
router.post('/add', uploads.single('cover_img'), expressjoi(article_schema.addArt), articleHandler.addArt)
// 获取文章列表
router.get('/list', articleHandler.listArt)

module.exports = router