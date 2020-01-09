// 引入mongodb
var { ObjectId } = require('mongodb');
// 引入db
var { collection, end } = require('../../db');
// 回调函数
module.exports = (req, res) => {
	// res.json('success')
	// 获取查询数据的id
	let id = req.body._id;
	// 删除_id字段
	delete req.body._id;
	// 操作集合
	collection('lesson', res, (collection, res, db) => {
		// 更新查找
		collection.updateOne({ _id: ObjectId(id) }, req.body, (err, data) => {
			// console.log(err, data)
			// 如果有错误
			if (err) {
				// 提示用户
				return end('collectionUpdateError', res, db)
			}
			// 如果修改成功
			if (data.result.n > 0) {
				// 返回修改成功信息
				return end('success', res, db);
			}
			// 更新失败
			end('noUpdateData', res, db);
		})
	})
}