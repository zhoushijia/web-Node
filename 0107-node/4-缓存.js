// 这里请求了三次, 但模块只加载了一次, 因为缓存的原因
const t = require('./4.1-test')
const z = require('./4.1-test')
const x = require('./4.1-test')
