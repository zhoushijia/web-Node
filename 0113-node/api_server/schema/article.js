const joi = require('@hapi/joi')

// 定义 标题、分类Id、内容、发布状态 的验证规则
const title = joi.string().required()
const cate_id = joi.number().integer().min(1).required()
// 必须有，但可以为空
const content = joi.string().required().allow('')
// 两个值二选一
const state = joi.string().valid('已发布', '草稿').required()

// 新增文章
exports.addArt = {
  body: {
    title,
    cate_id,
    content,
    state
  }
}
