// 导入数据库连接
const db = require('../db/db')

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
  db.query(sqlStr, userInfo.username, (err, results) => {
    // sql查询错误
    if (err) return res.send({ status: 1, msg: err.message })
    // 判断用户是否已经被注册
    if (results.length > 0) return res.send({ status: 1, msg: '用户名已被占用' })
    res.send('可以注册')
  })
}

// 登录
exports.login = (req, res) => {
  res.send('login OK')
}
