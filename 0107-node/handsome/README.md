## 安装

```bash
npm i handsome
```

## 导入

```js
const handsome = require('handsome')
```

## 日期格式化

```js
// 调用日期格式化函数,格式化日期
const dt = handsome.dateFormat(new Date())
// 结果 2021-01-07 14:30:48
console.log(dt)
```

## 转义 HTML 中的特殊字符

```js
// 定义 HTML 特殊字符串
const str = '<h1>abc"&nbsp;"</h1>'
// 调用转义函数,转换字符串
const escapeStr = handsome.htmlEscape(str)
// 结果 &lt;h1&gt;abc&quot;&amp;nbsp;&quot;&lt;/h1&gt;
console.log(escapeStr)
```

## 还原 HTML 字符串

```js
// 定义 HTML 已被转换的字符串
const str = '&lt;h1&gt;abc&quot;&amp;nbsp;&quot;&lt;/h1&gt;'
// 调用还原函数,转换字符串
const unEscapeStr = handsome.htmlUnEscape(str)
// 结果 <h1>abc"&nbsp;"</h1>
console.log(unEscapeStr)
```

## 协议

ISC
