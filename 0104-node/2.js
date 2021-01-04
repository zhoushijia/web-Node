const fs = require('fs')

// 这个方法是异步的
fs.readFile('./test/11.txt', 'utf8', (err, data) => {
  if (err) return console.log(err, '文件打开失败')
  console.log('-----------')
  console.log(data)
})

// 同步
const result = fs.readFileSync('./test/11.txt', 'utf8')
console.log(result)

global.console.log('hello')

// node中没有bom对象
// window.console.log(222)
