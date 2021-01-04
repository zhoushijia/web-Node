const fs = require('fs')
const path = require('path')

// 定义正则
const regCss = /<style>([\s\S]*)<\/style>/
const regJS = /<script>([\s\S]*)<\/script>/

fs.readFile(path.join(__dirname, 'tpl-index.html'), 'utf8', (err, data) => {
  if (err) return console.log('读取文件成功,' + err.message)
  console.log('读取文件成功')
  const cssPath = path.join(__dirname, 'index.css')
  const jsPath = path.join(__dirname, 'index.js')

  getFile(data, regCss, cssPath, 'css')
  getFile(data, regJS, jsPath, 'js')
  getHTML(data)
})

function getFile(data, reg, fpath, type) {
  const newData = reg.exec(data)[1]
  fs.writeFile(fpath, newData, (err) => {
    if (err) return console.log(`写入${type}文件失败,${err.message}`)
    console.log(`写入${type}文件成功`)
  })
}

function getHTML(data) {
  const newHTML = data.replace(regCss, '<link rel="stylesheet" href="./index.css">').replace(regJS, '<script src="./index.js"></script>')
  fs.writeFile(path.join(__dirname, 'index.html'), newHTML, (err) => {
    if (err) return console.log('写入html文件失败,' + err.message)
    console.log('写入html文件成功')
  })
}
