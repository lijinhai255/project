// 配置
module.exports = {
	// 端口号
	HTTP_PORT: 3000,
	HTTPS_PORT: 3001,
	// 静态配置
	STATIC: {
		'/static/': '/static/',
		'/fonts/': '/static/fonts/',
		'/favicon.ico': '/favicon.ico',
		// admin目录
		'/admin/': '/admin/'
	},
	// 数据库地址
	MONGO_URL: 'mongodb://localhost:27017/ickt_19_quanzhan',
	// 3.0
	// MONGO_URL: 'mongodb://localhost:27017'
	// 错误提示
	ERROR_TEXT: {
		// 操作成功
		success: { errno: 0, msg: 'success' },
		// 打开数据库错误
		mongoError: { errno: 1, msg: '数据库错误' },
		// 集合插入数据出现错误
		collectionInsertError: { errno: 2, msg: '数据库错误' },
		// 集合查找错误
		collectionFindtError: { errno: 3, msg: '数据库错误' },
		// 没有数据
		noData: { errno: 4, msg: '没有数据' },
		// 用户名或者密码不对
		loginNotRight: { errno: 5, msg: '用户名或者密码不对' },
		// 尚未登录
		notLogin: { errno: 6, msg: '该用户尚未登录' },
		// 集合更新错误
		collectionUpdateError: { errno: 7, msg: '数据库错误' },
		// 没有任何一条数据被更新
		noUpdateData: { errno: 8, msg: '没有更新的数据' },
		// 上传失败
		uploadError: { errno: 9, msg: '上传失败' },
		// 存储文件发生错误
		renameError: { errno: 10, msg: '存储失败' },
		// 数据存储失败
		noInsertData: { errno: 11, msg: '数据存储失败' },
		// 删除数据发生错误
		collectionRemoveError: { errno: 12, msg: '数据库错误' },
		// 数据删除失败
		noRemoveData: { errno: 13, msg: '没有删除数据' },
	},
	// 返回数据限制
	HOME_SHOW_LESSON_NUM: 15,
	// 后台每页显示课程的数量
	ADMIN_SHOW_LESSON_NUM: 16,
	// 上传图片缓存路径
	UPLOAD_IAMGE_CACHE_DIR: '/cache/upload',
	// 上传图片存储路径
	UPLOAD_IAMGE_SAVE_DIR: '/static/upload'
}