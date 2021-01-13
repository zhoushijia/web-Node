// 导入数据库连接
const db = require('../db/db')
// 导入加密包
const bcryptjs = require('bcryptjs')

// 路由处理函数
// 注册
exports.reguser = (req, res) => {
  // 得到前端请求来的数据
  const userInfo = req.body
  // 判断用户名和密码是否为空
  if (!userInfo.username || !userInfo.password) {
    return res.send({ status: 1, msg: '用户名或密码不能为空' })
  }
  // 从数据库调取用户名 唯一
  const sqlStr = 'select * from users where username=?'

  // db.query()是一个异步函数
  db.query(sqlStr, userInfo.username, (err, results) => {
    // sql查询错误
    if (err) return res.send({ status: 1, msg: err.message })
    // 判断用户是否已经被注册 sql查询结果results是一个数组
    if (results.length > 0) return res.send({ status: 1, msg: '用户名已被占用' })
    // 密码加密
    userInfo.password = bcryptjs.hashSync(userInfo.password, 10)
    const sqlInsertStr = 'insert into users set ?'
    db.query(sqlInsertStr, { username: userInfo.username, password: userInfo.password }, (err, results) => {
      // sql插入代码出错
      if (err) return res.send({ status: 1, msg: err.message })
      // 插入失败
      if (results.affectedRows !== 1) return res.send({ status: 1, msg: '注册失败，请重新尝试' })
      res.send({ status: 0, msg: '注册成功' })
    })
  })
}

// 登录
exports.login = (req, res) => {
  res.send('login OK')
}
