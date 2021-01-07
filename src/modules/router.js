const express = require('express')
const fs = require('fs')

const router = express.Router()

// 保存数据
router.get('/', function(req, res) {
    res.send({
        code: 200,
        msg: '连接成功！'
    })

})


// 保存数据
router.post('/dotsData', function(req, res) {
    var reqData = req.body
    res.send({
        code: 200,
        msg: '保存成功！'
    })

})


// 保存数据
router.get('/dotsData', function(req, res) {
    var reqData = req.body
    res.send({
        code: 200,
        msg: '获取成功！'
    })

})


module.exports = router