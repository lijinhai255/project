// 引入axios
import axios from 'axios';
// 引入常量
import { LOGIN } from '../consts';
// 定义消息
export let saveUserName = (username) => {
	return { type: LOGIN, data: username }
}

// 异步action
// 检测是否登录
export let checkUserInfo = function() {
	// 实现异步操作
	return dispatch => {
		// console.log(dispatch)
		// 做异步操作，请求数据
		axios
			.get('/admin/userinfo')
			// 监听数据返回
			.then(({ data }) => {
				// 如果请求成功
				if (data.errno === 0) {
					// 发布同步消息
					dispatch(saveUserName(data.data.username))
				}
			})
	}
}
// 登录action
export let userLogin = function(data) {
	// 实现异步
	return dispatch => {
		// 发布请求
		axios
			.post('/admin/login', data)
			// 监听数据返回
			.then(({ data }) => {
				// 如果成功
				if (data.errno === 0) {
					// 发布同步消息
					dispatch(saveUserName(data.data.username))
				} else {
					// 提示错误
					alert(data.msg) 
				}
			})
	}
}