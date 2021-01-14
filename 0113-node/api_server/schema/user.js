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

exports.userinfo_schema = {
  body: {
    id: joi.number().integer().min(1).required(),
    nickname: joi
      .string()
      // 非空字符 汉字也行
      .pattern(/^([\u4e00-\u9fa5]|[\S]){1,6}$/)
      .required(),
    email: joi
      .string()
      // .pattern(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
      .email()
      .required()
  }
}
