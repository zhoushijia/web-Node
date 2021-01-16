const db = require('../db/db')
const path = require('path')

// 新增文章
exports.addArt = (req, res) => {
  //   console.log(req.body)
  //   [Object: null prototype] {
  //     title: 'aaaaa',
  //     cate_id: 2,
  //     content: '1111',
  //     state: '已发布'
  //   }
  //   console.log(req.file)
  //   {
  //     fieldname: 'cover_img',
  //     originalname: 'top.png',
  //     encoding: '7bit',
  //     mimetype: 'image/png',
  //     destination: 'F:\\web\\web-Node\\0113-node\\api_server\\uploads',
  //     filename: '25891aeac197d9c7dc40ee6680ada50e',
  //     path: 'F:\\web\\web-Node\\0113-node\\api_server\\uploads\\25891aeac197d9c7dc40ee6680ada50e',
  //     size: 6947
  //   }
  if (!req.file || req.file.fieldname !== 'cover_img') return res.cc('图片文件必须上传')
  const artInfo = {
    ...req.body,
    // 服务器存储图片的路径
    cover_img: path.join('/uploads', req.file.filename),
    pub_date: new Date(),
    author_id: req.user.id
  }
  const sql = 'insert into articles set ?'
  db.query(sql, artInfo, (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('发布文章失败！')
    res.cc('发布文章成功！', 0)
  })
}

// 获取文章列表
exports.listArt = (req, res) => {
  res.send('ok')
}
