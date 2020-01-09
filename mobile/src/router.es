// 引入路由
import VueRouter from 'vue-router';
// 引入vue
import Vue from 'vue';
// 引入页面组件
import Home from './pages/Home';
import Search from './pages/Search';
import Buy from './pages/Buy';

// 安装
Vue.use(VueRouter);

// 定义规则
let routes = [
	// 首页
	{ path: '/', component: Home },
	// 分类页面
	{ path: '/type/:id', component: Home },
	// 搜索页面
	{ path: '/search/:id', component: Search },
	// 购买页面
	{ path: '/buy', component: Buy },
	// 重定向
	{ path: '*', redirect: '/' }
]

// 实例化
export default new VueRouter({ routes });