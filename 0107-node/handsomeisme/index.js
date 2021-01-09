const dateFormat = require('./src/dateFormat')
const escape = require('./src/escape')
module.exports = {
  ...dateFormat,
  ...escape
}
