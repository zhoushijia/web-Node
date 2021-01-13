// 导入定义规则包
const joi = require('@hapi/joi')

// 捕获err信息功能
module.exports = (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') return res.cc('身份认证失败')
  // 判断 err 是否是由@hapi/joi校验引起的err
  if (err instanceof joi.ValidationError) return res.cc(err)
  // 未知错误
  res.cc(res)
}
