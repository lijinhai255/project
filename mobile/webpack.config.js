// 引入path模块
let path = require('path');
// 引入html模板发布插件
let HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入css打包插件
let ExtractCssPlugin = require('extract-text-webpack-plugin');
// 压缩css插件
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// 引入webpack
let webpack = require('webpack');
// 定义接口
module.exports = {
	resolve: {
		// 入口
		alias: {
			'vue$': 'vue/dist/vue.js'
		},
		// 拓展名
		extensions: ['.vue', '.es', '.js']
	},
	// 入口
	entry: {
		// 开发的文件
		main: './src/main.es',
		// 库文件
		lib: ['vue', 'vuex', 'vue-router', 'axios']
	}, 
	// 发布
	output: {
		// 根路径
		path: path.join(process.cwd(), '../'),
		// 发布文件
		filename: './static/dist/mobile/[name].js'
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
				// 将css打包
				options: {
					// 提取css
					extractCSS: true,
					// ES6转ES5
					loaders: {
						js: 'babel-loader?presets[]=es2015'
					}
				}
			},
			// scss
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	},
	// 功能
	plugins: [
		// html模板发布
		new HtmlWebpackPlugin({
			// 模板
			template: './public/index.html',
			// 发布
			filename: './views/mobile.html',
			// 添加指纹
			hash: true
		}),
		// 将vue从main文件中分离
		new webpack.optimize.CommonsChunkPlugin('lib'),
		// 压缩js
		new webpack.optimize.UglifyJsPlugin(),
		// css打包后，发布的位置
		new ExtractCssPlugin('./static/dist/mobile/style.css'),
		// 压缩css
		new OptimizeCssAssetsPlugin()
	]
}