const joi = require('@hapi/joi')

const name = joi.string().required()
const alias = joi.string().alphanum().required()
// 增加分类
exports.add_cates_schema = {
  body: {
    name,
    alias
  }
}

const id = joi.number().integer().min(1).required()
// 文章分类id规则
exports.cate_id_schema = {
  params: {
    id
  }
}

// 更新分类
exports.update_cate_schema = {
  body: {
    Id: id,
    name,
    alias
  }
}
