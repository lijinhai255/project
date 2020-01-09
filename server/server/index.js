// 引入http
var http = require('http');
// 引入https
var https = require('https');
// 引入fs模块
var fs = require('fs');
// 引入端口号
var { HTTP_PORT, HTTPS_PORT } = require('../consts');

// 读取ssl秘钥
var key = fs.readFileSync('../../ssl/private.pem');
var cert = fs.readFileSync('../../ssl/file.crt');

// 定义接口
module.exports = (app) => {
	// console.log(process.argv)
	// 定义端口号,没有传递使用默认的
	let httpPort = process.argv[2] || HTTP_PORT;
	// 定义https端口号，如果没有传递https端口号，如果传递了http端口号，让https的端口号在http端口号上加一。
	let httpsPort = process.argv[3] || (process.argv[2] ? +process.argv[2] + 1 : HTTPS_PORT);
	// console.log(httpPort, httpsPort)
	// 启动http服务
	http.createServer(app)
		// 监听端口号
		.listen(httpPort, res => console.log('http servre listen at ' + httpPort))
	// 启动https服务
	https.createServer({ key, cert }, app)
		// 监听端口号
		.listen(httpsPort, res => console.log('https server listen at ' + httpsPort))
}

