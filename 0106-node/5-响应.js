const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
  const url = req.url
  let content = '404 Not Found!'
  //   判断请求页面
  if (url === '/' || url === '/index.html') content = '首页'
  if (url === '/about.html') content = '关于。。。'
  //   设置响应头  text/html;charset=utf-8 别写错了
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.end(`<h2>${content}</h2>`)
})
server.listen(80, () => {
  console.log('Server running on http://127.0.0.1:80')
})
