// 引入react
import React, { Component } from 'react';
// 使用按钮
import { Button } from 'antd-mobile';
// 引入axios
// import axios from 'axios';
// 引入页面组件
import Home from '../pages/Home';
import Login from '../pages/login/Login';
// 引入action
import { checkUserInfo } from '../action';


// 定义组件
export default class App extends Component {
	// 组件创建前
	componentWillMount() {
		// 发布异步action。检测用户是否登录
		this.props.dispatch(checkUserInfo())
	}
	// 渲染
	render() {
		// console.log(this.props, 111)
		// 从属性中，解构state
		let { state, dispatch, history } = this.props;
		// 要根据用户名判断
		if (state.username) {
			// 渲染首页
			// 拓展高阶组件  deal, withRouter
			// 传递数据
			return <Home state={state} history={history}></Home>
		} else {
			// 渲染登录页
			// 通过deal方法，拓展Login组件
			// 直接传递dispatch方法
			return <Login dispatch={dispatch}></Login>
		}
	}
}



// // 定义组件
// export default class App extends Component {
// 	// 构造函数
// 	constructor(props) {
// 		super(props)
// 		// 状态
// 		this.state = {
// 			// username: ''
// 			// 默认值
// 			username: 'YYQh'
// 		}
// 	}
// 	// 组件创建前
// 	componentWillMount() {
// 		// 获取登录信息
// 		// axios
// 		// 	.get('/admin/userinfo')
// 		// 	// 监听数据返回
// 		// 	.then(({ data }) => {
// 		// 		// 如果登录成功
// 		// 		if (data.errno === 0) {
// 		// 			// 存储用户名
// 		// 			this.setState(data.data)
// 		// 		} else {
// 		// 			// 没有登录
// 		// 			this.setState({ username: '' })
// 		// 		}
// 		// 	})
// 	}
// 	// 渲染
// 	render() {
// 		console.log(this)
// 		// 要根据用户名判断
// 		if (this.state.username) {
// 			// 渲染首页
// 			return <Home></Home>
// 		} else {
// 			// 渲染登录页
// 			return <Login method={username => this.setState({ username })}></Login>
// 		}
// 		// return (
// 		// 	<div>
// 		// 		<h1>app page</h1>
// 		// 		<Button>hello</Button>
// 		// 	</div>
// 		// )
// 	}
// }