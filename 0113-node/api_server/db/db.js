// 导入myqsl 连接mysql数据库
const mysql = require('mysql')

// 创建数据库连接池对象
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'big_event'
})

// 测试用
// db.query('select * from users', (err, results) => {
//   if (err) throw err
//   console.log(results)
// })
// 导出数据库
module.exports = db
