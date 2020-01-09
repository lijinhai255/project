// 引入数据库
var { collection, end } = require('../../db');
// 引入mongodb
var { ObjectId } = require('mongodb');
// 接口回调函数
module.exports = (req, res) => {
	// res.json('success')
	// 获取课程id
	let id = req.query.id;
	// 操作集合
	collection('lesson', res, (collection, res, db) => {
		// 查询操作
		collection
			.findOne({ _id: ObjectId(id) }, (err, data) => {
				// 如果有错误
				if (err) {
					// 查询错误
					return end('collectionFindtError', res, db)
				} 
				// 如果找到了数据
				if (data) {
					// 返回数据
					return end({
						data,
						errno: 0
					}, res, db)
				}
				// 没有找到数据
				end('noData', res, db)
				// console.log(err, data)
			})
	})
}