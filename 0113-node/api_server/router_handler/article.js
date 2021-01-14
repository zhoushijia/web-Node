// 导入数据库对象
const db = require('../db/db')

// 获取文章分类
module.exports.cateHandler = (req, res) => {
  const sql = 'select * from article_cate'
  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    if (results.length <= 0) return res.cc('获取文章分类列表失败')
    res.send({
      status: 0,
      msg: '获取文章分类列表成功',
      data: results
    })
  })
}
