// 导入mysql模块
const mysql = require('mysql')
// 创建连接
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'my_db_01'
})

// 连接
conn.connect()

// sql语句
const sqlStr = 'select * from users'
const sqlStr1 = 'update users set username="ls",password="333" where id=1'
const sqlStr2 = 'insert into users (username,password) values ("ww","444")'
const sqlStr3 = 'delete from users where id=4'
const sqlStr4 = 'select id=2 from users'
conn.query(sqlStr, (err, results) => {
  if (err) throw err
  console.log(results)
})

conn.end()
