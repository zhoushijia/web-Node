const express = require('express')
const router = express.Router()
// 导入验证joi包
const expressjoi = require('@escook/express-joi')
const userinfoSchema = require('../schema/user')

// 导入路由处理函数
const userinfoHandler = require('../router_handler/userinfo')

// 挂载路由
router.get('/userinfo', userinfoHandler.getinfo)
// 先验证用户信息
router.post('/userinfo', expressjoi(userinfoSchema.userinfo_schema), userinfoHandler.updateinfo)
// 更改用户密码
router.post('/updatepwd', expressjoi(userinfoSchema.updatepwd_schema), userinfoHandler.updatepwd)
// 更改用户头像
router.post('/update/avatar', expressjoi(userinfoSchema.updateavatar_schema), userinfoHandler.updateavatar)

// 导出
module.exports = router