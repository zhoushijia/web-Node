const joi = require('@hapi/joi')

// 增加分类
exports.add_cates_schema = {
  body: {
    name: joi.string().required(),
    alias: joi.string().alphanum().required()
  }
}

// 文章分类id规则
exports.cate_id_schema = {
  params: {
    id: joi.number().integer().min(1).required()
  }
}
