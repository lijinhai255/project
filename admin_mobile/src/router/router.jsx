// 引入react
import React from 'react';
// 引入路由策略
import { HashRouter, Route } from 'react-router-dom';
// 引入应用程序
import App from '../app/App';
// 引入拓展store数据的方法deal
import { deal } from '../store';

// 定义策略并返回
// export default (
// 	<HashRouter>
// 		<App></App>
// 	</HashRouter>
// )
// 用Route组件引入拓展后的App
export default (
	<HashRouter>
		<Route path="/" component={deal(App)}></Route>
	</HashRouter>
)