// 引入vuex
import Vuex, { Store } from 'vuex';
import Vue from 'vue';

// 安装
Vue.use(Vuex);

// 创建store
export default new Store({
	// 数据
	state: {
		// 所有已经购买课程的价格
		price: 0,
		// num: 0
		// search: '',
		// 购物车中，所有的课程
		lessons: []
	},
	// 同步消息
	mutations: {
		// 购买课程
		addLesson(state, lesson) {
			// 过滤价格是非数字的情况
			if (Object.is(+lesson.price, NaN)) {
				// 阻止后面操作
				return ;
			}
			// 如果已经添加购物车，就不要添加了
			if (state.lessons.find(item => item._id === lesson._id)) {
				// 阻止后面操作
				return ;
			}
			// 添加课程：更改价格，存储课程
			// 更改价格
			state.price += +lesson.price;
			// 存储课程
			state.lessons.push(lesson)
			// console.log('add', lesson)
		},
		// 取消购买
		removeLesson(state, lesson) {
			// 过滤价格是非数字的情况
			if (Object.is(+lesson.price, NaN)) {
				// 阻止后面操作
				return ;
			}
			// 要想删除，lesson必须在购物车中
			if (state.lessons.find(item => item._id === lesson._id)) {
				// 删除课程
				state.lessons.splice(state.lessons.findIndex(item => item._id === lesson._id), 1)
				// 更新价格
				state.price -= lesson.price;
			}
			// console.log('remove')
		},
		// 清空购物车
		clearLessons(state) {
			// 价格清空
			state.price = 0;
			// 将所有课程商品变成可以购买状态
			state.lessons.forEach(item => item.hasBuy = false);
			// 清空数组
			state.lessons = [];
		}
		// 存储搜索词
		// saveSearchValue(state, value) {
		// 	// 存储在state中
		// 	state.search = value;
		// }
	}
})