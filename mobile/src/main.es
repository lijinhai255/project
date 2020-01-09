// 引入vue
import Vue from 'vue';
// 引入axios
import axios from 'axios';
// 引入应用程序
import App from './App';
// 引入store
import store from './store';
// 引入router
import router from './router';

// 安装axios
Vue.prototype.$http = axios;

// 实例化
new Vue({
	// 注册store
	store,
	// 注册路由
	router,
	// 渲染
	render: h => h(App)
// 挂载
}).$mount('#app')