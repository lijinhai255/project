module.exports = (req, res) => {
	// 获取ua
	let ua = req.header('User-Agent');
	// 如果ua包含mobile。我们认为是移动端
	if (/mobile/i.test(ua)) {
		// 移动端渲染mobile.html
		res.render('mobile.html', { title: '爱创课堂' })
	} else {
		// pc端
		res.render('pc.html', { title: '爱创课堂' })
	}
	// console.log(ua)
	// 简单返回
	// res.end('success')
	// res.render('index.ejs', { title: '爱创课堂' })
	// res.render('index.html', { title: '爱创课堂' })
	// 渲染pc端页面
	// res.render('pc.html', { title: '爱创课堂' })
}