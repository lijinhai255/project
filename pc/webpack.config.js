// 引入path模块
var path = require('path');
// 引入插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入css分离插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizerCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// 引入webpack
var webpack = require('webpack');
// console.log(webpack)
// 定义配置
module.exports = {
	resolve: {
		// 拓展名
		extensions: ['.jsx', '.js', '.es']
	},
	// 入口文件
	// entry: './src/index.jsx',
	// 多个入口文件
	entry: {
		// 模块
		main: './src/index.jsx',
		// 核心库
		lib: ['react', 'react-dom', 'react-router-dom', 'axios']
	},
	// 发布文件
	output: {
		// 将example目录设置成根目录
		path: path.join(process.cwd(), '../'),
		// 发布到static/dist
		// filename: './static/dist/pc.js'
		// 发布多个入口文件
		filename: './static/dist/pc/[name].js'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// jsx
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
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
			// less
			{
				test: /\.less$/,
				// loader: 'style-loader!css-loader!less-loader'
				// 从js中，将样式分离
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'less-loader']
				})
			},
			// css
			// {
			// 	test: /\.css$/,
			// 	loader: 'style-loader!css-loader'
			// }
		]
	},
	// 插件
	plugins: [
		// 模板插件
		new HtmlWebpackPlugin({
			// 模板
			template: './public/index.html',
			// 发布
			filename: './views/pc.html',
			// 引入的资源，添加指纹
			hash: true
		}),
		// 将css打包输出到style.css文件中
		new ExtractTextPlugin('./static/dist/pc/style.css'),
		// 将lib库中的模块，从main中解析出来
		new webpack.optimize.CommonsChunkPlugin('lib'),
		// 压缩js
		new webpack.optimize.UglifyJsPlugin(),
		// 压缩css
		new OptimizerCssAssetsPlugin()
	]
}