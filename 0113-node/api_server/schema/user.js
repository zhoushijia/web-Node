// 导入定义规则包
const joi = require('@hapi/joi')

exports.reg_login_schema = {
  body: {
    // 字符串 数字 字母 1-10位 必填项
    username: joi.string().alphanum().min(1).max(10).required(),
    password: joi
      .string()
      .pattern(/^[\S]{6,12}$/)
      .required()
  }
}
