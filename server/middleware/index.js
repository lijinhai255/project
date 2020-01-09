// 引入express
var express = require('express');
// 引入path模块
var path = require('path');
// 引入ejs
var ejs = require('ejs');
// 使用session
var session = require('express-session');
// body-parser
var bodyParser = require('body-parser');
// 引入配置
var { STATIC } = require('../consts');

// 暴露接口
module.exports = (app) => {
	// 更改ejs插值语法
	ejs.delimiter = '$';
	// 更改模板引擎拓展名
	app.engine('.html', ejs.__express);
	// 设置模板引擎
	app.set('view engine', 'ejs');

	// 安装session
	app.use(session({
		secret: 'icketang',
		resave: true,
		saveUninitialized: false
	}));

	// 处理请求数据
	app.use(bodyParser.json());

	// 静态化
	// 解析Static
	for (var key in STATIC) {
		// key请求的路径
		// STATIC[key] 静态化的目录
		// 指令在example目录下执行，对应process.cwd()
		// 文件所在目录是middlwware，对应__dirname
		app.use(key, express.static(path.join(process.cwd(), STATIC[key])))
	}
	// 静态化
	// 获取当前路径：process.cwd(), __dirname
	// app.use('/static/', express.static(__dirname))
	// app.use('/static/', express.static(path.join(process.cwd(), '/static/')))
	// // 字体静态化
	// app.use('/fonts/', express.static(path.join(process.cwd(), '/static/fonts/')))
	// // 配置favicon
	// app.use('/favicon.ico', express.static(path.join(process.cwd(), '/favicon.ico')))

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
}

