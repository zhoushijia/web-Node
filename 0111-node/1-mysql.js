const mysql = require('mysql')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'my_db_01'
})

// 查询数据
// const sqlStr = 'select * from users'
// pool.query(sqlStr, (err, results) => {
//   // sql执行失败
//   if (err) throw err
//   // 成功  results是数组
//   console.log(results)
// })

// 插入数据
// const sqlStr = 'insert into users (username,password) values(?,?)'
// pool.query(sqlStr, ['yaoyao', 'kankongqi'], (err, results) => {
//   // sql执行失败
//   if (err) throw err
//   // 成功
//   if (results.affectedRows === 1) console.log('插入数据成功')
// })

// 占位符便捷插入数据
// 用户数据
// const user = { username: 'xiaoming', password: '12345' }
// // 查询语句  set ? 是mysql包中封装的方法 ?是mysql包定义的占位
// const sqlStr = 'insert into users set ?'
// // 调用mysql池中的query函数
// pool.query(sqlStr, user, (err, results) => {
//   // sql执行失败
//   if (err) throw err
//   // 成功  results是受影响的对象
//   if (results.affectedRows === 1) console.log('插入数据成功')
// })

// 更新数据
// const user = { id: 3, username: 'yao', password: '123' }
// const sqlStr1 = 'update users set username=?,password=? where id=?'
// pool.query(sqlStr1, [user.username, user.password, user.id], (err, results) => {
//   if (err) throw err
//   if (results.affectedRows === 1) {
//     console.log('更新成功')
//   }
// })

// 占位符更新便捷方式
// const user = { id: 3, username: 'yao', password: '1234' }
// const sqlStr1 = 'update users set ? where id=?'
// pool.query(sqlStr1, [user, user.id], (err, results) => {
//   if (err) throw err
//   if (results.affectedRows === 1) {
//     console.log('更新成功')
//   }
// })

// 删除数据
// const sqlStr1 = 'delete from users where id=?'
// pool.query(sqlStr1, 4, (err, results) => {
//   if (err) throw err
//   if (results.affectedRows === 1) {
//     console.log('删除成功')
//   }
// })

// 标记删除  实际是更新
const sqlStr1 = 'update users set status=1 where id=?'
pool.query(sqlStr1, 4, (err, results) => {
  if (err) throw err
  if (results.affectedRows === 1) {
    console.log('删除成功')
  }
})
