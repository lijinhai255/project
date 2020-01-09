// 暴露接口
module.exports = (req, res) => {
	// 获取ua
	let ua = req.header('User-Agent');
	// 如果是移动端
	if (/mobile/i.test(ua)) {
		res.render('admin_mobile.html')
	} else {
		// pc端
		// 渲染模板
		res.render('admin_pc.html')
	}
}