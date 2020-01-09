// 引入path
var path = require('path');
// css打包
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// 模板
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入webpack
var { CommonsChunkPlugin } = require('webpack').optimize;

// 配置
module.exports = {
	// 功能
	resolve: {
		// 拓展名
		extensions: ['.jsx', '.es', '.js']
	},
	// 入口文件
	entry: {
		// 开发文件
		main: './src/main.jsx',
		// 库文件
		lib: ['react', 'react-dom', 'axios']
	},
	// 发布文件
	output: {
		// 根目录
		path: path.join(process.cwd(), '../'),
		// 入口
		filename: './admin/mobile/[name].js'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// jsx
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				// 配置
				options: {
					presets: ['es2015', 'react'],
					plugins: [
						// 按需加载
						['import', {
							style: 'css',
							libraryName: 'antd-mobile'
						}]
					]
				}
			},
			// es6
			{
				test: /\.es$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// css
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader']
				})
			},
			// less
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'less-loader']
				})
			}
		]
	},
	// 插件功能
	plugins: [
		// 处理模板
		new HtmlWebpackPlugin({
			// 模板
			template: './public/index.html',
			// 发布
			filename: './views/admin_mobile.html',
			// 指纹
			hash: true
		}),
		// 提取模块
		new CommonsChunkPlugin('lib'),
		// css
		new ExtractTextPlugin('./admin/mobile/style.css')
	]
}