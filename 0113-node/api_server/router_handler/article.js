// 导入数据库对象
const db = require('../db/db')

// 获取文章分类
module.exports.catesHandler = (req, res) => {
  // 根据分类的状态，获取所有未被删除的分类列表数据
  //?  sql语句
  const sql = 'select * from article_cate where is_delete=0 order by id asc'
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

module.exports.addcatesHandler = (req, res) => {
  res.send('ok')
}
