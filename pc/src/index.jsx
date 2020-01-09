// 引入React
// import React from 'react';
// 引入渲染库
import { render } from 'react-dom';
// 引入应用程序并渲染
// import App from './App';
// 引入图片预加载器
import ImageLoader from './tools/imageloader';
// 引入配置
import { IMAGES } from './conf';
// 引入路由
import routes from './router';
// 引入全局样式
import './index.less'
// 获取加载进度容器元素
let loaderDOM = document.getElementById('loader_text');
// 渲染
{/*render(<App></App>, document.getElementById('app'))*/}
// 预加载图片，图片加载完成，渲染组件
new ImageLoader(IMAGES, (num, total) => {
		// console.log(arg)
		// 加载完一张图片。要计算进度
		// 百分比形式，并保留两位小数
		loaderDOM.innerHTML =  (num / total * 100).toFixed(2);
	}, () => {
		// console.log('done', arg)
		// 所有的都加载完成
		loaderDOM.innerHTML = '100.00';
		// 渲染组件
		// render(<App></App>, document.getElementById('app'))
		// 渲染路由
		render(routes, document.getElementById('app'))
	})