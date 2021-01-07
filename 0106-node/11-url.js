const url = require('url')
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  // 端口后面那部分
  // http://localhost/index.html?name=ifer

  // req.url => /aaa.html?name=ifer
  // 我只期望获取到 /aaa.html，后面的查询参数使用

  // 第二个参数为 true 会把 query 解析成对象  pathname和 query 是固定写法
  const { pathname, query } = url.parse(req.url, true)
  console.log(pathname)
  console.log(query)

  if (pathname === '/index.html') {
    return res.end('Welcome ' + query.name)
  }
  res.end('404')
})

server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
