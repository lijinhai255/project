// 引入库
import React, { Component } from 'react';
// 引入路由
import { Switch, Route, withRouter } from 'react-router-dom';
// 引入页面组件
import Home from './pages/Home/Home';
import Type from './pages/Type/Type';
import Search from './pages/Search/Search';
// 引入Header组件
import Header from './components/Header/Header';

// 定义高阶组件
let RouterHeader = withRouter(Header)

// 定义组件并暴露接口
export default class App extends Component {
	// 渲染
	render() {
		// console.log('app', this)
		return (
			<div>
				{/*<h1>header</h1>*/}
				{/*<Header></Header>*/}
				<RouterHeader></RouterHeader>
				<Switch>
					{/*分类页面*/}
					<Route path="/type/:id" component={Type}></Route>
					{/*搜索页面*/}
					<Route path="/search/:id" component={Search}></Route>
					{/*默认页面*/}
					<Route path="*" component={Home}></Route>
				</Switch>
			</div>
		)
	}
}