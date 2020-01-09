/***
 * 校验用户名
 * @value 		传递的用户名
 * @return 		是否校验成功
 **/
export function checkUsername(value) {
	// 不能为空
	if (!value) {
		alert('请输入用户名');
		return;
	}
	// 4-10位字母数字下划线
	if (!/^\w{4,10}$/.test(value)) {
		alert('用户名4-10位字母数字下划线')
		return;
	}
	// 成功
	return true
}
/***
 * 校验密码
 * @value 		传递的密码
 * @return 		是否校验成功
 **/
export function checkPassword(value) {
	// 不能为空
	if (!value) {
		alert('请输入密码');
		return;
	}
	// 包含字母和数字
	if (!/[a-zA-Z].*\d|\d.*[a-zA-Z]]/.test(value)) {
		alert('密码是包含字母和数字的')
		return;
	}
	// 成功
	return true
}
/***
 * 校验密码
 * @repeatValue	重复输入的数据
 * @value 		传递的数据
 * @return 		是否校验成功
 **/
export function checkRepeat(repeatValue, value) {
	// 不能为空
	if (!repeatValue) {
		alert('请输入数据');
		return;
	}
	// 包含字母和数字
	if (repeatValue !== value) {
		alert('两次输入的内容不一致，请重新输入')
		return;
	}
	// 成功
	return true
}
/***
 * 非空校验
 * @value 		输入的内容
 * @return 		是否校验成功
 **/
export function checkNotEmpty(value) {
	// 不能为空
	if (!value) {
		alert('请输入完整！');
		return;
	}
	// 成功
	return true
}