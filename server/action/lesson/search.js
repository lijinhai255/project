// 引入数据库模块
var { end, collection } = require('../../db');
// 引入显示课程的数量
var { HOME_SHOW_LESSON_NUM } = require('../../consts');
// 第一步 定义接口回调函数
module.exports = (req, res) => {
	// res.json('success')
	// 获取搜索词
	let search = req.query.id;
	// 操作集合
	collection('lesson', res, (coll, res, db) => {
		// 搜索数据
		coll
			.find({ title: new RegExp(search, 'i') })
			// 显示最新的
			.sort({ _id: -1 })
			// 截取15个
			.limit(HOME_SHOW_LESSON_NUM)
			// 转化成数组
			.toArray((err, data) => {
				// 如果有错误
				if (err) {
					return end('collectionFindtError', res, db);
				}
				// 如果没有数据
				if (data.length === 0) {
					return end('noData', res, db);
				}
				// 有数据，返回数据
				end({
					data,
					errno: 0
				}, res, db)
			})
	})
}