// 引入模块，并打包
// 登录接口
exports.managerLogin = require('./manager/login');
// 获取用户登录信息接口
exports.managerUserInfo = require('./manager/userinfo');
// 2 用户退出接口
exports.managerLogout = require('./manager/logout');
// 更改用户名信息
exports.managerUpdate = require('./manager/update');

// 课程模块
exports.lessonUpload = require('./lesson/upload');
// 创建课程
exports.lessonCreate = require('./lesson/create');
// 课程列表
exports.lessonList = require('./lesson/list');
// 删除课程
exports.lessonRemove = require('./lesson/remove');
// 课程详情
exports.lessonDetail = require('./lesson/detail');
// 课程接口
exports.lessonUpdate = require('./lesson/update');