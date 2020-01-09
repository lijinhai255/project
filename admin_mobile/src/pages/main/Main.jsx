// 引入react
import React, { Component } from 'react';
// 引入组件
import { Button, InputItem, WingBlank, WhiteSpace } from 'antd-mobile';
// 引入校验的方法
import { checkUsername, checkPassword, checkRepeat } from '../../tools/validator';
// 引入axios
import axios from 'axios';

// 定义组件
export default class Main extends Component {
	// 构造函数
	constructor(props) {
		super(props)
		// 状态
		this.state = {
			username: '',
			password: '',
			repeat: ''
		}
	}
	// 提交数据
	submitData() {
		// console.log(this.state)
		// 解构数据
		let { username, password, repeat } = this.state;
		// 校验输入的内容
		if (
			checkUsername(username) &&
			checkPassword(password) &&
			checkRepeat(repeat, password)
		) {
			// console.log("校验通过")
			// 发布更新用户信息的请求
			axios
				.post('/admin/manager/update', { username, password })
				// 监听数据返回
				.then(({ data }) => {
					// 修改成功
					if (data.errno === 0) {
						// 刷新页面
						location.reload();
					} else {
						// 提示错误
						alert(data.msg)
					}
				})
		}
	}
	// 渲染
	render() {
		// 解构数据
		let { username, password, repeat } = this.state;
		return (
			<div>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<InputItem placeholder="请输入用户名" value={username} onChange={username => this.setState({ username })}>用户名</InputItem>
				<WhiteSpace></WhiteSpace>
				<InputItem placeholder="请输入密码" value={password} onChange={password => this.setState({ password })} type="password">密码</InputItem>
				<WhiteSpace></WhiteSpace>
				<InputItem placeholder="请重复输入密码" value={repeat} onChange={repeat => this.setState({ repeat })} type="password">重复密码</InputItem>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WingBlank>
					<Button type="primary" onClick={e => this.submitData()}>提交</Button>
				</WingBlank>
			</div>
		)
	}
}