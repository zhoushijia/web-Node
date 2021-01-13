const express = require('express')
// 创建路由
const router = express.Router()
// 导入路由处理函数
const handler = require('../router_handler/user')

// 导入校验包
const expressJOI = require('@escook/express-joi')
// 导入定义的规则
const { reg_login_schema } = require('../schema/user')

// 挂载user请求  expressJOI(reg_login_schema)为局部中间件-->校验数据
router.post('/reguser', expressJOI(reg_login_schema), handler.reguser)
router.post('/login', expressJOI(reg_login_schema), handler.login)

// 导出路由
module.exports = router
