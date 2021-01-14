// 导入数据库连接
const db = require('../db/db')
// 导入加密包
const bcryptjs = require('bcryptjs')
// 导入JWT包
const jwt = require('jsonwebtoken')
// 导入token密匙文件
const config = require('../config')

// 路由处理函数
// 注册
exports.reguser = (req, res) => {
  // 得到前端请求来的数据
  const userInfo = req.body
  //   这里用@escook/express-joi和@hapi/joi实现了用户和密码校验
  // 判断用户名和密码是否为空
  //   if (!userInfo.username || !userInfo.password) {
  //     return res.cc('用户名或密码不能为空')
  //   }
  // 从数据库调取用户名 唯一
  const sqlStr = 'select * from users where username=?'

  // db.query()是一个异步函数
  db.query(sqlStr, userInfo.username, (err, results) => {
    // sql查询错误
    // if (err) return res.send({ status: 1, msg: err.message })
    if (err) return res.cc(err)
    // 判断用户是否已经被注册 sql查询结果results是一个数组
    // if (results.length > 0) return res.send({ status: 1, msg: '用户名已被占用' })
    if (results.length > 0) return res.cc('用户名已被占用')

    // 密码加密
    userInfo.password = bcryptjs.hashSync(userInfo.password, 10)
    const sqlInsertStr = 'insert into users set ?'
    db.query(sqlInsertStr, { username: userInfo.username, password: userInfo.password }, (err, results) => {
      // sql插入代码出错
      //   if (err) return res.send({ status: 1, msg: err.message })
      if (err) return res.cc(err)
      // 插入失败
      //   if (results.affectedRows !== 1) return res.send({ status: 1, msg: '注册失败，请重新尝试' })
      if (results.affectedRows !== 1) return res.cc('注册失败，请重新尝试')
      //   res.send({ status: 0, msg: '注册成功' })
      res.cc('注册成功', 0)
    })
  })
}

// 登录
exports.login = (req, res) => {
  const userInfo = req.body
  const sqlStr = 'select * from users where username=?'
  db.query(sqlStr, userInfo.username, (err, results) => {
    //   sql语句执行错误
    if (err) return res.cc(err)
    // 查询结果不为1
    if (results.length !== 1) return res.cc('用户名不存在,登陆失败')
    // bcryptjs比较输入密码与数据库密码
    const compareBcrypt = bcryptjs.compareSync(userInfo.password, results[0].password)
    // 如果compareBcrypt为false 则说明密码输入错误
    if (!compareBcrypt) return res.cc('密码错误,登录失败')
    // 登录成功
    //  将用户密码和图片置空
    const user = { ...results[0], password: '', user_pic: '' }
    // 生成token
    const token = jwt.sign(user, config.secretKey, { expiresIn: '10h' })
    res.send({
      status: 0,
      msg: '登陆成功',
      token: 'Bearer ' + token
    })
  })
}
