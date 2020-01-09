// 安装路由
import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入组件
import LessonCreate from './pages/lesson/Create.vue'; 
import LessonList from './pages/lesson/List.vue'; 
import LessonEdit from './pages/lesson/Edit.vue'; 
import UserCreate from './pages/user/Create.vue';
import UserList from './pages/user/List.vue'; 
import UserEdit from './pages/user/Edit.vue';  
// 默认页面
import Main from './pages/Main';
import Home from './pages/Home';

// 安装
Vue.use(VueRouter);

// 路由规则
let routes = [
	// 第二步 在children属性中，定义路由规则
	{ path: '/', component: Home, children: [
		// 课程模块
		{ path: 'lesson/create', component: LessonCreate },
		{ path: 'lesson/list/:page', component: LessonList },
		{ path: 'lesson/edit/:id', component: LessonEdit },
		// { path: 'lesson/edit/:id', component: LessonCreate },
		// 用户模块
		{ path: 'user/create', component: UserCreate },
		{ path: 'user/list/:page', component: UserList },
		{ path: 'user/edit/:id', component: UserEdit },
		// 默认页面
		{ path: '*', component: Main }
	] }
]

// 实例化
export default new VueRouter({ routes });