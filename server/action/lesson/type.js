// 配置接口分成三步
// 引入数据库
var { end, collection } = require('../../db');
// 获取显示课程的数量
var { HOME_SHOW_LESSON_NUM } = require('../../consts');
// 第一步 定义接口回调函数
module.exports = (req, res) => {
	// res.json('success')
	// 获取分类id
	let type = req.query.id;
	// console.log(type)
	// 操作集合
	collection('lesson', res, (coll, res, db) => {
		// 查找数据
		coll
			.find({ type })
			// 获取最新的
			.sort({ _id: -1 })
			// 显示个数
			.limit(HOME_SHOW_LESSON_NUM)
			// 转化成数组，再返回
			.toArray((err, data) => {
				// 如果出现错误
				if (err) {
					// 返回错误
					return end('collectionFindtError', res, db)
				}
				// 没有数据
				if (data.length === 0) {
					// 返回没有数据错误码
					return end('noData', res, db)
				}
				// 有数据，返回数据
				end({
					data,
					errno: 0
				}, res, db)
			})
	})
}