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

const pagenum = joi.number().integer().min(1).required()
const pagesize = joi.number().integer().min(1).required()
// 文章列表
exports.listArt = {
  query: {
    pagenum,
    pagesize,
    cate_id: joi.number().integer().min(1),
    state: joi.string().valid('已发布', '草稿')
  }
}

// 删除文章
exports.delArt = {
  params: {
    id: joi.number().integer().min(1).required()
  }
}
