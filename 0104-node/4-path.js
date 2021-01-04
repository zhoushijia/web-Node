// 获得fileSystem
const fs = require('fs')
// 获得path模块
const path = require('path')

// 读取成绩
fs.readFile(path.join(__dirname, '/素材/成绩.txt'), 'utf8', (err, data) => {
  if (err) return console.log(`成绩获取失败,${err.message}`)
  //   可以使用模板字符串
  //   console.log(`${err}`)

  //   对成绩进行加工
  const newData = data.replace(/=/g, '：').replace(/\s/g, '\n')
  //   或者
  //   const arr = data.split(' ')
  //   const newArr = []
  //   arr.forEach((ele) => {
  //     newArr.push(ele.replace('=', '：'))
  //   })
  //   const newData = newArr.join('\n')
  //   写入
  fs.writeFile(path.join(__dirname, '/素材/成绩-ok.txt'), newData, (err) => {
    if (err) return console.log('写入失败')
    console.log('写入成功')
  })
})
