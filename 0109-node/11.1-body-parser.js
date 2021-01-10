const querystring = require('querystring')
module.exports = {
  urlencoded: (obj) => (req, res, next) => {
    // 往 req.body 上面挂载一下解析之后的结果
    // req.body = '解析之后的结果';
    // 想接受前端的 POST 请求的数据
    // data 是一个监听传输过程的一个事件
    // let arr = []
    let str = ''
    req.on('data', (chunk) => {
      str += chunk
      // arr.push(chunk)
    })

    req.on('end', () => {
      // arr.join(',')
      if (obj.extended) {
        // 第三方插件实现post数据 // 用第三方的 qs 模块解析
      } else {
        req.body = querystring.parse(str)
      }
      next()
    })
  }
}
