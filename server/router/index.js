// 引入页面路由中间件
let page = require('./page');
// 引入action路由中间件
let action = require('./action');
// 引入admin路由中间件
let admin = require('./admin');

// 暴露接口
module.exports = (app) => {
	// 安装该中间件
	app.use(page);
	// 安装中间件
	app.use(action);
	// 安装中间件
	app.use(admin);
}
