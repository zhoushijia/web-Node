const sum = (a, b) => a + b
const age = 18
// 通过exports向外暴露
module.exports = {
  sum,
  age
}
// module.exports和exports的指引指向同一份内存
exports.divide = (a, b) => a - b
