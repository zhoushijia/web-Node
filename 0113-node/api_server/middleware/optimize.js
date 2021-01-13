// 优化
module.exports = (req, res, next) => {
  // status放在最后，默认值为1，可选传递属性
  res.cc = (err, status = 1) => {
    res.send({ status, msg: err instanceof Error ? err.message : err })
  }
  next()
}
