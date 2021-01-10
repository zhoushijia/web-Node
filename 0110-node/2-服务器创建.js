const express = require('express')
const app = express()

// 解决post数据格式
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// jsonp后端处理
app.get('/api/jsonp', (req, res) => {
  // 自己写的jsonp
  // 获取回调函数名
  //   const fn = req.query.callback
  //   const data = { name: 'zs', age: 18 }
  // 将函数和数据响应给前端
  //   res.send(`${fn}(${JSON.stringify(data)})`)

  // express内置jsonp
  res.jsonp({ name: 'zs', age: 18 })
})

// 导入cors跨域模块
const cors = require('cors')
app.use(cors())

// 导入路由模块
const router = require('./1-路由模块')

// 注册路由模块
app.use('/api', router)

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
