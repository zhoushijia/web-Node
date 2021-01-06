// http模块
const http = require('http')
// 2、3、4步骤合并
http
  .createServer((req, res) => {
    res.end('ok')
  })
  .listen(80, () => console.log('Server running on http://127.0.0.1:80'))
