// 包管理文件中dependencies记录了第三方加载包资源
const hs = require('./handsome')

console.log(hs.dateFormat(new Date()))
console.log(hs.htmlEscape('<h1>abc"&nbsp;"</h1>'))
console.log(hs.htmlUnEscape('&lt;h1&gt;abc&quot;&amp;nbsp;&quot;&lt;/h1&gt;'))
