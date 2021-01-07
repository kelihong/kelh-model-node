const mysql = require('mysql')

let sqlPingTimer = null // ping 数据库
// 创建数据库
const con = mysql.createConnection({
    // host: '',
    host: '',
    user: 'root',
    password: '',
    database: '',
    //  database: 'memory_test',
})
con.connect();

function sqlConnect(sql, callback) {
    con.query(sql, function (error, result, fields) {

        callback(error, result, fields)

        // ping 数据库 保持数据库链接, 防止数据库断开
        clearInterval(sqlPingTimer)
        sqlPingTimer = setInterval(() => {
            con.ping(function () {
                console.log('mysql is online...')
            })
        }, 60000);
    })

}

module.exports = sqlConnect