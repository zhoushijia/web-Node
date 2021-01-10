const express = require('express')
const router = express.Router()

router.get('/get', (req, res) => {
  res.send({
    status: 0,
    msg: 'GET请求成功',
    data: req.query
  })
})

router.post('/post', (req, res) => {
  res.send({
    status: 0,
    msg: 'POST请求成功',
    data: req.body
  })
})

router.delete('/delete', (req, res) => {
  res.send({
    status: 0,
    msg: 'delete请求成功',
    data: req.body
  })
})

module.exports = router
