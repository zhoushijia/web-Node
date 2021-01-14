// 导入定义规则包
const joi = require('@hapi/joi')

const pwd = joi
  .string()
  .pattern(/^[\S]{6,12}$/)
  .required()
exports.reg_login_schema = {
  body: {
    // 字符串 数字 字母 1-10位 必填项
    username: joi.string().alphanum().min(1).max(10).required(),
    password: pwd
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

// 修改密码的规则
exports.updatepwd_schema = {
  body: {
    oldPwd: pwd,
    // 1. joi.ref('oldPwd') 表示 newPwd 的值必须和 oldPwd 的值保持一致
    // 2. joi.not(joi.ref('oldPwd')) 表示 newPwd 的值不能等于 oldPwd 的值
    // 3. .concat() 用于合并 joi.not(joi.ref('oldPwd')) 和 password 这两条验证规则
    newPwd: joi.not(joi.ref('oldPwd')).concat(pwd)
  }
}
