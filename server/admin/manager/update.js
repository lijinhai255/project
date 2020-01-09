// 引入配置
var { ERROR_TEXT } = require('../../consts');
// 引入数据库
var { collection, end } = require('../../db');
// 回调函数
module.exports = (req, res) => {
	// res.json('success')
	// 根据sesion中的用户名，去更新数据
	if (req.session.username) {
		// 查询数据库，更新数据
		collection('manager', res, (collection, res, db) => {
			// 更新集合
			collection
				.update(
					// 根据用户名更新数据
					{ username: req.session.username },
					// 更新的数据
					req.body,
					// 监听结果
					(err, data) => {
						// 如果有错误。要提示错误
						if (err) {
							return end('collectionUpdateError', res, db)
						}
						// 更新成功
						if (data.result.n > 0) {
							// 更新成功
							// 删除session中的用户名，重新登录
							delete req.session.username;
							// 返回信息，更新成功
							return end('success', res, db);
						}
						// 没有更新成功
						end('noUpdateData', res, db)
						// console.log(err, result)
					}
				)
		})
	} else {
		// 提示用户尚未登录
		res.json(ERROR_TEXT.notLogin)
	}
}