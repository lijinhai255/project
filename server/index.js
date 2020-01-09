// 引入相关模块
// 引入express
var express = require('express');
// 引入服务器
var server = require('./server');
// 引入中间件
var middleware = require('./middleware');
// 引入路由
var router = require('./router');

var app = express();

// 使用服务器模块
server(app)
// 使用中间件
middleware(app)
// 使用路由
router(app)


// 在请求中，操作数据库
// var { collection, end } = require('./db')
// // 引入配置
// // var { ERROR_TEXT } = require('./consts');
// app.get('/create', (req, res) => {
// 	// 操作数据库
// 	collection('lesson', res, (collection, res, db) => {
// 		// console.log(collection, res, db)
// 		// 操作集合
// 		collection.insertOne({
// 			"img": "static/img/lesson/15.jpg",
// 			"title": "爱创课堂HTML进阶课程",
// 			"sales": "12345",
// 			"price": "400.00",
// 			"type": "super"
// 		}, (err, result) => {
// 			// 如果有错误，提示错误
// 			if (err) {
// 				// 返回错误
// 				// res.json(ERROR_TEXT.collectionInsertError)
// 				// // 关闭数据库
// 				// db.close();
// 				// // 返回
// 				// return;
// 				// 简化
// 				return end('collectionInsertError', res, db)
// 			}
// 			// 没有错误，返回数据
// 			// res.json(ERROR_TEXT.success);
// 			// // 关闭数据库
// 			// db.close();
// 			end('success', res, db)
// 		})
// 	})
// })

// 使用mongo数据库
// 引入mongodb
// var mongodb = require('mongodb');
// // 定义数据库地址
// var mongoUrl = 'mongodb://localhost:27017/ickt_19_quanzhan'
// // 获取客户端
// var MongoClient = mongodb.MongoClient;
// // console.log(MongoClient)
// // 链接数据库
// MongoClient.connect(mongoUrl, (err, db) => {
// 	// 如果有错误
// 	if (err) {
// 		// 处理错误
// 		return ;
// 	} 
// 	// 操作集合
// 	db.collection('lesson')
// 		// 插入一个成员
// 		.insertOne({
// 			"img": "static/img/lesson/01.jpg",
// 			"title": "爱创课堂Javscript进阶课程",
// 			"sales": "12345",
// 			"price": "200.00",
// 			"type": "react"
// 		}, (err, result) => {
// 			console.log(err, result)
// 		})
// 	// console.log(db)
// })

// 3.0
// var mongoUrl = 'mongodb://localhost:27017'
// MongoClient.connect(mongoUrl, (err, client) => {
// 	// 获取数据
// 	var db = client('ickt_19_quanzhan')
// 	console.log(db)
// })







// // 引入http
// var http = require('http');
// // 引入https
// var https = require('https');
// // 引入fs模块
// var fs = require('fs');
// // 引入path模块
// var path = require('path');
// // 引入ejs
// var ejs = require('ejs');

// 读取ssl秘钥
// var key = fs.readFileSync('./ssl/private.pem');
// var cert = fs.readFileSync('./ssl/file.crt');

// 端口号
// var HTTP_PORT = 3000;
// var HTTPS_PORT = 3001;
// 创建应用程序
// var app = express();



// // 使用服务器模块
// server(app)
// // 使用中间件
// middleware(app)
// router(app)









// // 更改ejs插值语法
// ejs.delimiter = '$';

// // 更改模板引擎拓展名
// app.engine('.html', ejs.__express);

// // 设置模板引擎
// app.set('view engine', 'ejs');

// // 静态化
// // 获取当前路径：process.cwd(), __dirname
// // app.use('/static/', express.static(__dirname))
// app.use('/static/', express.static(path.join(process.cwd(), '/static/')))
// // 字体静态化
// app.use('/fonts/', express.static(path.join(process.cwd(), '/static/fonts/')))
// // 配置favicon
// app.use('/favicon.ico', express.static(path.join(process.cwd(), '/favicon.ico')))
// 异步请求静态化
// use方法可以添加多个中间件
// app.use('/data/', (req, res, next) => {
// 	// console.log(req.url)
// 	// 添加拓展名.json
// 	// req.url += '.json'
// 	// req.url = req.url + '.json';
// 	// 切割url
// 	let arr = req.url.split('?');
// 	// 第一个部分添加拓展名
// 	arr[0] += '.json';
// 	// 通过?将arr拼接在一起
// 	req.url = arr.join('?')
// 	// console.log(req.url)
// 	// 类似路由守卫，必须要执行next方法
// 	next();
// }, express.static(path.join(process.cwd(), '/static/data/')))


// // 基于中间件的形式定义路径
// var router = new express.Router()
// // 基于router定义路由规则
// router.get('/', (req, res) => {
// 	// 获取ua
// 	let ua = req.header('User-Agent');
// 	// 如果ua包含mobile。我们认为是移动端
// 	if (/mobile/i.test(ua)) {
// 		// 移动端渲染mobile.html
// 		res.render('mobile.html', { title: '爱创课堂' })
// 	} else {
// 		// pc端
// 		res.render('pc.html', { title: '爱创课堂' })
// 	}
// 	// console.log(ua)
// 	// 简单返回
// 	// res.end('success')
// 	// res.render('index.ejs', { title: '爱创课堂' })
// 	// res.render('index.html', { title: '爱创课堂' })
// 	// 渲染pc端页面
// 	// res.render('pc.html', { title: '爱创课堂' })
// })
// // 安装该中间件
// app.use(router);



// 定义接口
// app.get('/', (req, res) => {
// 	// 获取ua
// 	let ua = req.header('User-Agent');
// 	// 如果ua包含mobile。我们认为是移动端
// 	if (/mobile/i.test(ua)) {
// 		// 移动端渲染mobile.html
// 		res.render('mobile.html', { title: '爱创课堂' })
// 	} else {
// 		// pc端
// 		res.render('pc.html', { title: '爱创课堂' })
// 	}
// 	// console.log(ua)
// 	// 简单返回
// 	// res.end('success')
// 	// res.render('index.ejs', { title: '爱创课堂' })
// 	// res.render('index.html', { title: '爱创课堂' })
// 	// 渲染pc端页面
// 	// res.render('pc.html', { title: '爱创课堂' })
// })
// 定义接口
// app.get('/type/*', (req, res) => {
// 	res.render('pc.html', { title: '爱创课堂' })
// })

// // 启动http服务
// http.createServer(app)
// 	// 监听端口号
// 	.listen(HTTP_PORT, res => console.log('http servre listen at ' + HTTP_PORT))
// // 启动https服务
// https.createServer({ key, cert }, app)
// 	// 监听端口号
// 	.listen(HTTPS_PORT, res => console.log('https server listen at ' + HTTPS_PORT))
