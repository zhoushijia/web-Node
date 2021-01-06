// 获取模块
const fs = require('fs')
const path = require('path')

// 定义正则
const regCss = /<style>([\s\S]*)<\/style>/
const regScript = /<script>([\s\S]*)<\/script>/

// 读取文件
fs.readFile(path.join(__dirname, '/素材/index.html'), 'utf8', (err, result) => {
  if (err) return console.log('信息读取失败' + err.message)
  const targetCss = path.join(__dirname, '/timer/timer.css')
  const targetJS = path.join(__dirname, '/timer/timer.js')
  get(result, regCss, targetCss)
  get(result, regScript, targetJS)
  getHTML(result)
})

// 封装处理css/js文件函数
function get(result, reg, targetPath) {
  const str = reg.exec(result)[1]
  //   写入文件
  fs.writeFile(targetPath, str, (err) => {
    if (err) return console.log('写入文件失败' + err.message)
    console.log('写入文件成功')
  })
}

// 封装处理html文件函数
function getHTML(result) {
  const linkCss = '<link rel="stylesheet" href="./timer.css">'
  const scriptJS = '<script src="./timer.js"></script>'
  const targetHTML = path.join(__dirname, '/timer/timer.html')
  const newStr = result.replace(regCss, linkCss).replace(regScript, scriptJS)
  fs.writeFile(targetHTML, newStr, (err) => {
    if (err) return console.log('写入html文件失败,' + err.message)
    console.log('写入html文件成功')
  })
}
