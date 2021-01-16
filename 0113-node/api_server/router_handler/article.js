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

// 新增文章分类
module.exports.addcatesHandler = (req, res) => {
  //? sql中需要判断分类名或别名是否被占用
  const sql = 'select * from article_cate where name=? or alias=?'
  db.query(sql, [req.body.name, req.body.alias], (err, results) => {
    if (err) return res.cc(err)
    if (results.length === 2) return res.cc('文章分类名和别名都已存在')
    if (results.length === 1 && results[0].name === req.body.name) return res.cc('文章分类名已存在')
    if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('文章分类别名已存在')
    const addSql = 'insert into article_cate set ?'
    db.query(addSql, req.body, (err, results) => {
      if (err) return res.cc(err)
      if (results.affectedRows !== 1) return res.cc('新增文章分类失败')
      res.cc('新增文章分类成功！', 0)
    })
  })
}

// 根据id删除文章分类
module.exports.deletecateHandler = (req, res) => {
  const sql = 'update article_cate set is_delete=1 where Id=?'
  db.query(sql, req.params.id, (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('删除文章分类失败')
    res.cc('删除文章分类成功', 0)
  })
}
