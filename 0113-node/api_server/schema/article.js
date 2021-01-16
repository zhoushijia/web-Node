const joi = require('@hapi/joi')

// 增加分类
exports.add_cates_schema = {
  body: {
    name: joi.string().required(),
    alias: joi.string().alphanum().required()
  }
}

// 删除分类
exports.del_cate_schema = {
  params: {
    id: joi.number().integer().min(1).required()
  }
}
