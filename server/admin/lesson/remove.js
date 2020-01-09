// 引入数据库模块
var { collection, end } = require('../../db');
// 引入mongodb
var mongodb = require('mongodb');
// 删除课程
module.exports = (req, res) => {
	// res.json('success')
	// 课程id
	let id = req.body.id;
	// 操作集合
	collection('lesson', res, (collection, res, db) => {
		// 删除操作
		collection
			.remove({ _id: mongodb.ObjectId(id) }, (err, data) => {
				// console.log(err, data)
				// 如果有错误
				if (err) {
					// 提示用户
					return end('collectionRemoveError', res, db)
				}
				// 如果删除成功
				if (data.result.n > 0) {
					// 返回成功的信息
					return end('success', res, db)
				}
				// 没有删除任何一条数据
				end('noRemoveData', res, db)
			})
	})
	// console.log(id)
}