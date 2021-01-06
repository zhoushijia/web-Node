const http = require('http')
const fs = require('fs')
const path = require('path')
// 引入第三方资源包
const mime = require('mime')

const server = http.createServer()
server.on('request', (req, res) => {
  //   res.setHeader('Content-Type', `${mime.getType(fpath)};charset=utf-8`)

  // 拼接请求路径
  //   const fpath = path.join(__dirname, req.url)
  let fpath = null
  // 优化请求路径
  if (req.url === '/') {
    fpath = path.join(__dirname, '/timer/timer.html')
  } else {
    fpath = path.join(__dirname, 'timer', req.url)
  }
  res.setHeader('Content-Type', `${mime.getType(fpath)};charset=utf-8`)

  fs.readFile(fpath, 'utf8', (err, dataStr) => {
    if (err) return res.end('404 NOT FOUND!')
    // 要设置响应头
    console.log(req.url)
    res.end(dataStr)
  })
})

server.listen(80, () => {
  console.log('Server running at http://127.0.0.1:80')
})
