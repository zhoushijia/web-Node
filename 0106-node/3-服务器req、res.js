// 创建http模块
const http = require('http')
// 获得server对象
const server = http.createServer()
// 监听request事件
server.on('request', (req, res) => {
  // req 代表请求 req.url是请求url地址 req.method 请求方法
  const str = `Your request url is ${req.url},Your request method is ${req.method}`
  //   res代表响应 end代表响应结束 并返回str
  res.end(str)
})
// 创建端口号
server.listen(3000, () => console.log('Server running on http://127.0.0.1:3000'))
