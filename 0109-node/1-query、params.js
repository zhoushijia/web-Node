const express = require('express')
const app = express()
app.get(':id', (req, res) => {
  console.log(req.params)
  res.send(req.params)
})

app.listen(3000, () => console.log('express server running at http://127.0.0.1:3000'))
