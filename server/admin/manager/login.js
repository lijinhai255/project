// 引入数据库
var { collection, end } = require('../../db');
// 定义回调函数
module.exports = (req, res) => {
	// res.json('success')
	// data数据在请求体中
	// console.log(req.body)
	// 查找集合
	collection('manager', res, (coll, res, db) => {
		coll
			// 用户名和密码都必须相同
			.find(req.body)
			// 转换成数组
			.toArray((err, data) => {
				// 如果有错误
				if (err) {
					return end('collectionFindtError', res, db)
				} 
				// 没有数据。说明用户名和密码不对
				if (data.length === 0) {
					return end('loginNotRight', res, db);
				}
				// 有结果。说明登录成功
				// 1 session中存储数据
				req.session.username = req.body.username
				// 2 返回数据
				end({
					errno: 0,
					data: { username: req.body.username }
				}, res, db)
				// console.log(err, data)
			})
	})
		

	// 存储一份数据
	// collection('manager', res, collection => collection.insertOne(req.body))
}