// 导入sql
const db = require('../db/db')
// 导入密码加密包
const bcryptjs = require('bcryptjs')

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
  const userinfo = req.body
  // 这里需要判断前端传来的id与token的id一致，否则不能修改
  if (userinfo.id != req.user.id) return res.cc('更新用户信息失败')
  const sqlStr = 'update users set ? where id=?'
  db.query(sqlStr, [userinfo, req.body.id], (err, results) => {
    //   sql错误
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('更新用户信息失败')
    res.cc('更新信息成功', 0)
  })
}

// 更改密码
exports.updatepwd = (req, res) => {
  const sql = 'select password from users where id=?'
  db.query(sql, req.user.id, (err, results) => {
    if (err) return res.cc(err)
    // 判断用户是否还存在
    if (results.length <= 0) return res.cc('用户不存在')
    // 判断旧密码与数据库密码是否一致
    const comparePwd = bcryptjs.compareSync(req.body.oldPwd, results[0].password)
    if (!comparePwd) return res.cc('原密码错误')
    //? sql语句 update 表名 set 字段  别忘记set
    const updatepwdSql = 'update users set password=? where id=?'
    // 给新密码加密
    req.body.newPwd = bcryptjs.hashSync(req.body.newPwd, 10)
    db.query(updatepwdSql, [req.body.newPwd, req.user.id], (err, results) => {
      if (err) return res.cc(err)
      if (results.affectedRows !== 1) return res.cc('密码修改失败')
      res.cc('密码修改成功', 0)
    })
  })
}
