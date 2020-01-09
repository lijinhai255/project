// 引入react
import React, { Component } from 'react';
// 引入路由
import { Switch, Route, Link } from 'react-router-dom';
// 引入组件
import { NavBar, Menu } from 'antd-mobile';
// 引入页面组件
import LessonCreate from './lesson/create/Create';
import LessonList from './lesson/list/List';
import LessonEdit from './lesson/edit/Edit';
// 用户模块
import UserCreate from './user/create/Create';
import UserList from './user/list/List';
import UserEidt from './user/edit/Edit';
// 默认页面
import Main from './main/Main';
// 引入样式文件
import "./Home.less";

// 定义组件
export default class Home extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			showMenu: false
		}
	}
	// 将菜单数据放在组件自身
	get menuData() {
		// 每一个成员，代表一组菜单
		return [
			{
				label: '课程模块',
				value: 'lesson',
				// 二级菜单
				children: [
					{ label: '创建课程', value: 'create' },
					{ label: '课程列表', value: 'list/1' }
				]
			},
			{
				label: '用户模块',
				value: 'user',
				// 二级菜单
				children: [
					{ label: '创建用户', value: 'create' },
					{ label: '用户列表', value: 'list/1' }
				]
			}
		]
	}
	// 切换菜单
	menuChange(arr) {
		// console.log(arr)
		// 切换路由
		this.props.history.push('/' + arr.join('/'))
		// 隐藏菜单
		this.setState({ showMenu: false })
	}
	// 渲染
	render() {
		// 解构状态数据
		let { showMenu } = this.state;
		return (
			<div className="page-home">
				<NavBar
					className="navbar-title"
					leftContent="菜单"
					rightContent={<a href="/admin/logout">{this.props.state.username}</a>}
					onLeftClick={e => this.setState({ showMenu: !showMenu })}
				>
					<Link to="/">爱创课堂</Link>
				</NavBar>
				{/*渲染菜单*/}
				{showMenu ? <Menu data={this.menuData} onChange={this.menuChange.bind(this)}></Menu> : ''}
				<Switch>
					{/*课程模块*/}
					<Route path="/lesson/create" component={LessonCreate}></Route>
					<Route path="/lesson/list/:page" component={LessonList}></Route>
					<Route path="/lesson/edit/:id" component={LessonEdit}></Route>
					{/*用户模块*/}
					<Route path="/user/create" component={UserCreate}></Route>
					<Route path="/user/list/:page" component={UserList}></Route>
					<Route path="/user/edit/:id" component={UserEidt}></Route>
					{/*默认路由*/}
					<Route path="*" component={Main}></Route>
				</Switch>
			</div>
		)
	}
}