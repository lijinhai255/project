// 1 回调函数
module.exports = (req, res) => {
	// res.json('success')
	// 删除session中的用户名
	delete req.session.username;
	// 重定向到登录页面
	res.redirect('/admin')
}