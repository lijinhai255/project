// 引入react
import React, { Component } from 'react';
// 引入组件
import { Button, InputItem, WingBlank, WhiteSpace } from 'antd-mobile';
// 引入校验方法
import { checkUsername, checkPassword } from '../../tools/validator';
// 引入存储用户名的消息
// import { saveUserName } from '../../action';
import { userLogin } from '../../action';
// 引入axios
// import axios from 'axios';
// 引入样式
import "./Login.less";

// 定义组件
export default class Login extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			username: '',
			password: ''
		}
	}
	// 登录
	login() {
		// 解构数据
		let { username, password } = this.state;
		// 确定表单正确
		if (checkUsername(username) && checkPassword(password)) {
			// 开始登录
			this.props.dispatch(userLogin(this.state))
			// axios
			// 	.post('/admin/login', this.state)
			// 	// 监听数据返回
			// 	.then(({ data }) => {
			// 		// 如果成功
			// 		if (data.errno === 0) {
			// 			// 将用户名发送给父组件
			// 			// this.props.method(data.data.username)
			// 			// 发布消息
			// 			this.props.dispatch(saveUserName(data.data.username))
			// 		} else {
			// 			// 提示错误
			// 			alert(data.msg)
			// 		}
			// 	})
		}
	}
	// 渲染
	render() {
		// console.log(this)
		// 解构数据
		let { username, password } = this.state;
		return (
			<div className="page-login">
				<InputItem value={username} onChange={username => this.setState({ username })} placeholder="请输入用户名">用户名</InputItem>
				<WhiteSpace></WhiteSpace>
				<InputItem value={password} onChange={password => this.setState({ password })} placeholder="请输入密码" type="password">密&emsp;码</InputItem>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WingBlank>
					<Button type="primary" onClick={e => this.login()}>提交</Button>
				</WingBlank>
			</div>
		)
	}
}