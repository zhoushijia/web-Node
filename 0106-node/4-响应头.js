const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
  const str = `你的 url 是 ${req.url},你的 method 是 ${req.method}`
  //   设置响应头
  res.setHeader('Content-Type', 'text/html;charset:utf-8')
  res.end(`<h2>${str}</h2>`)
})
server.listen(80, () => {
  console.log('Server running on http://127.0.0.1:80')
})
