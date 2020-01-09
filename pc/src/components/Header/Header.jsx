// 引入库
import React, { Component } from 'react';
// 引入路由导航组件
import { Link } from 'react-router-dom';
// 引入轮播图组件
import Swiper from '../Swiper/Swiper';
// 引入配置
import { IMAGES } from '../../conf';
// 引入样式
import './header.less'

// div.ickt-header>div.navbar.navbar-static-top>div.container>(Link.navbar-header>img)+(div.pull-right>input.form-control)+ul.nav.nav-justified>(li>Link)*6
// 定义组件
export default class Header extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			search: ''
		}
	}
	// 显示搜索页面
	showSearchPage(e) {
		// 点击了回车键
		if (e.keyCode === 13) {
			// console.log(this)
			// 切换到搜索页面
			// location.hash = '#/search/' + e.target.value
			// 约束性组件
			// location.hash = '#/search/' + this.state.search;
			// 切换页面
			// 不要加#
			this.props.history.push('/search/' + this.state.search)
			// 清空输入框
			this.setState({ search: '' })
		}
	}
	// 渲染
	render() {
		return (
			<div className="ickt-header">
				<div className="navbar navbar-static-top">
					<div className="container">
						<Link to="/" className="navbar-header">
							<img src="/static/img/logo.png" alt=""/>
						</Link>
						<div className="pull-right">
							{/*非约束性组件*/}
							{/*<input type="text" className="form-control" onKeyUp={this.showSearchPage.bind(this)}/>*/}
							{/*约束性组件*/}
							<input value={this.state.search} onChange={e => this.setState({ search: e.target.value })} type="text" className="form-control" onKeyUp={this.showSearchPage.bind(this)}/>
						</div>
						<ul className="nav nav-justified">
							<li>
								<Link to="/type/super">高级课程</Link>
							</li>
							<li>
								<Link to="/type/middle">中级课程</Link>
							</li>
							<li>
								<Link to="/type/easy">初级课程</Link>
							</li>
							<li>
								<Link to="/type/react">React</Link>
							</li>
							<li>
								<Link to="/type/vue">Vue</Link>
							</li>
							<li>
								<Link to="/type/angular">Angular</Link>
							</li>
						</ul>
					</div>
				</div>
				{/*使用轮播图*/}
				<Swiper urls={IMAGES} height="500px"></Swiper>
			</div>
		)
	}
}