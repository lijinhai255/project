// 封装数据库
// 引入mongodb
let mongodb = require('mongodb');
// 引入配置
// 数据库地址
let { MONGO_URL, ERROR_TEXT } = require('../consts')
// 获取客户端
let MongoClient = mongodb.MongoClient;


/***
 * 封装end方法，关闭数据库，并返回数据
 * @data 		返回的数据
 * @res 		相应对象
 * @db 			数据库
 **/ 
function end(data, res, db) {
	// 如果data是字符串
	if (typeof data === 'string') {
		// 返回数据
		res.json(ERROR_TEXT[data]);
	} else {
		// data是返回的对象
		res.json(data)
	}
	// 关闭数据库
	db.close();
}

/***
 * 定义操作集合的方法
 * @name		集合名称
 * @res 		相应对象
 * @callback 	回调函数
 **/ 
function collection(name, res, callback) {
	// 链接数据库
	MongoClient.connect(MONGO_URL, (err, db) => {
		// 如果有错误
		if (err) {
			// // 提示客户端
			// res.json(ERROR_TEXT.mongoError)
			// // 关闭数据库
			// db.close();
			// // 阻止继续执行
			// return ;

			// 一步操作
			return end('mongoError', res, db)
		}
		// 没有错误,执行回调函数
		callback(db.collection(name), res, db)
	})
	// 3.0
	// MongoClient.connect(MONGO_URL, (err, client) => {
	// 	// 获取数据库
	// 	db = client('ickt_19_quanzhan')
	// })
}

// 暴露接口
module.exports = {
	collection, end
}