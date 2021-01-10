// 导入mysql包
const mysql = require('mysql')
// 创建连接对象
const conn = mysql.createConnection({
  // 主机名
  host: '127.0.0.1',
  // 用户名
  user: 'root',
  // 用户密码
  password: 'root',
  // 数据库
  database: 'my_db_01'
})
// 建立连接
conn.connect()
// 定义查询字符串
const sqlStr = 'select * from users'
// 查询
conn.query(sqlStr, (err, results, fields) => {
  if (err) throw err
  console.log(results)
})

conn.end()
