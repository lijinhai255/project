// 引入表单上传模块
var formidable = require('formidable');
// 引入路径模块
var path = require('path');
// 引入fs
var fs = require('fs');
// 引入配置
var { UPLOAD_IAMGE_CACHE_DIR, UPLOAD_IAMGE_SAVE_DIR, ERROR_TEXT } = require('../../consts');
// 路由回调函数
module.exports = (req, res) => {
	// res.json('success')
	// 要实例化上传组件
	var form = new formidable.IncomingForm();
	// 定义缓存路径
	form.uploadDir = path.join(process.cwd(), UPLOAD_IAMGE_CACHE_DIR);
	// 解析数据
	form.parse(req, (err, filed, files) => {
		// console.log(arguments)
		// 如果有错误
		if (err) {
			// 提示错误
			return res.json(ERROR_TEXT.uploadError)
		}
		// console.log(files.file)
		// 重新定义路径
		// 文件名由20个随机数字构成
		let filePath = UPLOAD_IAMGE_SAVE_DIR + '/' + String(Math.random()).slice(2, 12) + 
			String(Math.random()).slice(2, 12) + 
			// 文件拓展名
			path.extname(files.file.name)
		// console.log(filePath)
		// 将缓存文件存储在upload目录下
		fs.rename(files.file.path, path.join(process.cwd(), filePath), (err) => {
			// console.log(err, result)
			if (err) {
				// 存储图片发生错误
				return res.json(ERROR_TEXT.renameError);
			}
			// 返回给客户端
			res.json({
				errno: 0,
				data: {
					img: filePath
				}
			})
		})

	})
}