// 数据库模块
var { collection, end } = require('../../db');
// 接口回调函数
module.exports = (req, res) => {
	// res.json('success')
	// console.log(req.body)
	// 操作lesson集合
	collection('lesson', res, (collection, res, db) => {
		// 插入操作
		collection.insertOne(req.body, (err, data) => {
			// console.log(err, result)
			// 如果有错误
			if (err) {
				// 返回错误提示
				return end('collectionInsertError', res, db)
			}
			// 如果存储成功
			if (data.result.n > 0) {
				// 成功
				return end('success', res, db);
			}
			end('noInsertData', res, db)
		})
	})
}