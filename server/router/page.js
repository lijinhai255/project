// 我们定义页面路由中间件
// 引入express
var express = require('express');
// 引入页面路由回调函数
// var home = require('../page/home.js');
// 引入页面回调函数
var { home, admin } = require('../page');
// 基于中间件的形式定义路径
var router = new express.Router()

// 基于router定义路由规则
// router.get('/', home)
// // 暴露接口
// module.exports = router;

// 合并一句话
// 暴露接口
module.exports = router
	.get('/', home)
	// admin
	.get('/admin', admin)