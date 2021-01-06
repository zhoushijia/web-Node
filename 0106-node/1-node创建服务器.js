// 获得http模块
const http = require('http')
// 创建服务器对象  ()中不用传数值
const server = http.createServer()
// request事件
server.on('request', (request, response) => {
  response.end('你找到我啦！')
})
// 创建端口
server.listen(80, () => console.log('Server running on http://127.0.0.1:80'))
