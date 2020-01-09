// 引入html插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入webpack
var webpack = require('webpack');
// console.log(webpack)
// 引入解析模块插件
var { CommonsChunkPlugin } = webpack.optimize;
// 解析css
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// 引入path模块
var path = require('path');
// 配置
module.exports = {
	// 入口和拓展名
	resolve: {
		// 入口
		alias: {
			vue$: 'vue/dist/vue.js'
		},
		// 拓展名
		extensions: ['.es', '.vue', '.js']
	},
	// 入口
	entry: {
		main: './src/main.es',
		// 库
		lib: ['vue', 'vuex', 'vue-router', 'axios', 'element-ui']
		// lib: ['vue', 'element-ui']
	},
	// 发布
	output: {
		// 发布根目录
		path: path.join(process.cwd(), '../'),
		// 发布到admin目录下
		filename: './admin/pc/[name].js'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// es6
			{
				test: /\.es$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// vue
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					// 只能处理vue文件中的样式
					extractCSS: true
				}
			},
			// scss
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			// css
			{
				test: /\.css$/,
				// 处理main.es中引入的样式文件
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader']
				})
			},
			// 字体图标
			{
				test: /\.(woff|ttf)$/,
				loader: 'url-loader'
			}
		]
	},
	// 功能
	plugins: [
		// 发布模板
		new HtmlWebpackPlugin({
			// 模板
			template: './public/index.html',
			// 发布
			filename: './views/admin_pc.html',
			// 添加指纹
			hash: true
		}),
		// 解析模块
		new CommonsChunkPlugin('lib'),
		// 打包css
		new ExtractTextPlugin('./admin/pc/style.css')
		// 开发完，再压缩
	]
}