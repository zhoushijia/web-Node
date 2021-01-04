const fs = require('fs')
const path = require('path')

// 一直向222.txt文件添加内容
function fn() {
  // 向文件追加内容
  fs.writeFile(path.join(__dirname, '/素材/222.txt'), 'abcabc', { flag: 'a' }, (err) => {
    if (err) return console.log('写入文件失败,' + err.message)
    console.log('写入成功')
  })
}

fn()
