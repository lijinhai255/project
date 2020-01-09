// 引入数据库模块
var { collection, end } = require('../../db');
// 引入配置
var { ADMIN_SHOW_LESSON_NUM } = require('../../consts');
// 回调函数
module.exports = (req, res) => {
	// res.json('success')
	// 获取页码
	// 人看到的第一页实际上是计算机中的第0页
	let page = req.query.page - 1;
	// 保证页码大于等于0
	page = page < 0 ? 0 : page;
	// 操作集合
	collection('lesson', res, (collection, res, db) => {
		// 查找操作
		collection
			// 操作所有
			.find()
			// 获取最新的
			.sort({ _id: -1 })
			// 跳过的个数
			.skip(ADMIN_SHOW_LESSON_NUM * page)
			// 显示的个数
			.limit(ADMIN_SHOW_LESSON_NUM)
			// 转化成数组
			.toArray((err, data) => {
				// 如果有错误
				if (err) {
					// 提示错误
					return end('collectionFindtError', res, db)
				}
				// 有结果
				if (data.length > 0) {
					// 返回数据
					return end({
						data,
						errno: 0
					}, res, db)
				}
				// 该页没有数据
				end('noData', res, db);
			})
	})
	// console.log(page)
}