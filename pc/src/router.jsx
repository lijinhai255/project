// 引入React
import React from 'react';
// 路由
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
// 引入应用程序
import App from './App';

// 确定策略并分返回
// export default (
// 	<BrowserRouter>
// 		<App></App>
// 	</BrowserRouter>
// )
// hash路由
export default (
	<HashRouter>
		<App></App>
	</HashRouter>
)