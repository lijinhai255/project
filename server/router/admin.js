// 引入Router
var { Router } = require('express');
// 引入回调函数
let { 
	managerLogin, managerUserInfo, managerLogout, managerUpdate,
	lessonUpload, lessonCreate, lessonList, lessonRemove, lessonDetail, lessonUpdate
} = require('../admin');

// 实例化
let router = new Router();

// 配置
module.exports = router
	// 登录接口
	.post('/admin/login', managerLogin)
	// 更改用户信息
	.post('/admin/manager/update', managerUpdate)
	// 获取用户信息
	.get('/admin/userinfo', managerUserInfo)
	// 用户退出
	.get('/admin/logout', managerLogout)
	// 课程模块
	// 上传课程图片
	.post('/admin/lesson/upload', lessonUpload)
	// 创建课程
	.post('/admin/lesson/create', lessonCreate)
	// 删除课程
	.post('/admin/lesson/remove', lessonRemove)
	// 更新课程
	.post('/admin/lesson/update', lessonUpdate)
	// 获取课程列表
	.get('/admin/lesson/list', lessonList)
	// 获取课程详情
	.get('/admin/lesson/detail', lessonDetail)