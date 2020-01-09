// 引入常量
import { LOGIN } from '../consts';

// 定义reducer
export default function(state = { username: '' }, action) {
	// 定义结果对象
	let result = {};
	// 处理action
	switch (action.type) {
		// 如果是登录消息
		case LOGIN:
			// 更新用户名
			result.username = action.data;
			break;
		// 还可以处理其他类型的消息
	}
	// 返回新的state对象
	return Object.assign({}, state, result)
} 