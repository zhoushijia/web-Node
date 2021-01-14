// 导入sql
const db = require('../db/db')

// 获取用户信息
exports.getinfo = (req, res) => {
  const sqlStr = 'select id,username,nickname,email,user_pic from users where username=?'
  db.query(sqlStr, req.user.username, (err, results) => {
    //   sql错误
    if (err) return res.cc(err)
    if (results.length !== 1) return res.cc('用户信息获取失败')
    res.send({
      status: 0,
      msg: '获取用户信息成功',
      data: results[0]
    })
  })
}

// 更新用户信息
exports.updateinfo = (req, res) => {
  res.send('update')
}
