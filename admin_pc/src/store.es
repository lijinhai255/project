// 引入vue，安装vuex
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

// 安装
Vue.use(Vuex);

// 实例化
export default new Store({
	// 数据
	state: {
		// 用户名
		// username: 'YYQH'
		username: ''
	},
	// 同步消息
	mutations: {
		// 更新用户名
		udpateUsername(state, username) {
			// 更新用户名
			state.username = username;
		}
	}
}) 