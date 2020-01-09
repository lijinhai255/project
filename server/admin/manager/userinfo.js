// 引入配置
var { ERROR_TEXT } = require('../../consts');
// 回调函数
module.exports = (req, res) => {
	// res.json('success')
	// session中如果有用户名，就是登录过的
	if (req.session.username) {
		// 返回已经登录信息
		res.json({ 
			errno: 0, 
			data: { 
				username: req.session.username 
			}
		})
	} else {
		// 没有登录过
		res.json(ERROR_TEXT.notLogin)
	}
}