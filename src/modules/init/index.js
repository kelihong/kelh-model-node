    // 参数处理
    const bodyParser = require('body-parser')

    // 初始化
    function init(app) {

        // 跨域配置
        setCore(app)
        function setCore(app) {
            app.all('*', function (req, res, next) {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', 'Content-Type');
                res.header('Access-Control-Allow-Methods', '*');
                res.header('Content-Type', 'application/json;charset=utf-8');
                next();
            });
        }
        parseParams(app)
        function parseParams(app) {
            // 处理参数
            // parse application/x-www-form-urlencoded
            app.use(bodyParser.urlencoded({
                extended: false,
                limit: '100mb'  // 如果上传文件不设置这项，会报错（PayloadTooLargeError: request entity too large...)
            }))

            // parse application/json
            app.use(bodyParser.json({
                limit: '100mb'  // 如果上传文件不设置这项，会报错（PayloadTooLargeError: request entity too large...)
            }))

        }
    }

    module.exports = init