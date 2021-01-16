const joi = require('@hapi/joi')

// 增加分类
exports.add_cates_Schema = {
  body: {
    name: joi.string().required(),
    alias: joi.string().alphanum().required()
  }
}
