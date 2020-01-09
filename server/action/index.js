// 将所有接口打包
var lessonHome = require('./lesson/home');
// 第二步 打包接口
var lessonType = require('./lesson/type');
// 第二步 打包接口
var lessonSearch = require('./lesson/search');
// 暴露接口
module.exports = {
	lessonHome, lessonType, lessonSearch
}