// 引入Router
var { Router } = require('express');
// 引入接口
var { lessonHome, lessonType, lessonSearch } = require('../action');

// 实例化
var router = new Router();

// 配置规则
module.exports = router
	// 首页接口
	.get('/data/lesson/home', lessonHome)
	// 第三步 配置接口
	.get('/data/lesson/type', lessonType)
	// 第三步 配置接口
	.get('/data/lesson/search', lessonSearch)