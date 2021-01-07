const express = require('express')
const init = require('./modules/init')
const router = require('./modules/router')
const path = require('path')

// 创建express实例
const app = express()

var resData = {}

// 初始化参数、跨域
init(app)

app.use(router)
app.use('/public', express.static(path.join(__dirname, '../public')))

app.listen(80, function() {
    console.log('express is running at port 80...')
})