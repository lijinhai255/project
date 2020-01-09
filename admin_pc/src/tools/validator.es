// 校验用户名
export function checkUserName(field, value, callback) {
	// 根据值的不同，执行回调函数。callback必须执行
	// 如果没有输入数据，提示
	if (!value) {
		// return就不会在继续执行了
		return callback(new Error('请输入用户名'))
	}
	// 用户名4-10位字母数字下划线
	if (!/^\w{4,10}$/.test(value)) {
		// 提示用户
		return callback(new Error('用户名要求4-10位字母数字下划线'))
	}
	// console.log(arguments)
	// 如果成功了，必须执行callback
	callback();
}
// 校验密码
export function checkPassword(field, value, callback) {
	// 如果没有输入数据，提示
	if (!value) {
		// return就不会在继续执行了
		return callback(new Error('请输入密码'))
	}
	// 密码包含字母和数字
	if (!/[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(value)) {
		// 提示用户
		return callback(new Error('密码要包含字母和数字'))
	}
	// 如果成功了，必须执行callback
	callback();
}
// 校验重复密码
export function checkRepeat(name, field, value, callback) {
	// console.log(arguments, this, this.data[name])
	// 必须要输入数据
	if (!value) {
		// 提示用户
		return callback(new Error('请输入数据'))
	}
	// 密码与重复密码必须是相同的
	if (this.data[name] !== value) {
		// 不相同提示用户
		return callback(new Error('重复密码与密码不一致'))
	}
	// 成功 
	callback();
}
// 非空校验
export function checkNotEmpty(filed, value, callback) {
	// console.log(arguments)
	// 如果没有数据
	if (!value) {
		// 提示用户
		return callback(new Error('请输入数据'))
	}
	// 成功
	callback();
}