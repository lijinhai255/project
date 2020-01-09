// 引入react
import React, { Component } from 'react';
// 引入axios
import axios from 'axios';
// 引入组件
import { Pagination, Card, Button } from 'antd-mobile';
// 引入样式
import './List.less';

// 定义组件
export default class List extends Component {
	// 构造函数
	constructor(props) {
		// 构造函数继承
		super(props);
		// 状态
		this.state = {
			list: []
		}
	}
	// 获取数据的方法
	getData() {
		// console.log(this.props)
		// 解构路由数据
		let { params } = this.props.match;
		// 获取数据
		axios
			.get('/admin/lesson/list', { params })
			// 监听数据返回
			.then(({ data }) => {
				// 如果成功
				if (data.errno === 0) {
					// 存储数据
					this.setState({ list: data.data })
				} else {
					alert(data.msg)
					// 清空视图
					this.setState({ list: [] })
				}
			})
	}
	// 根据id获取类型文案
	getType(id) {
		let typeData = {
			'super': '高级课程',
			middle: '中级课程',
			easy: '初级课程',
			react: 'React课程',
			vue: 'Vue课程',
			angular: 'Angular课程',
		}
		return typeData[id];
	} 
	// 组件创建前
	componentWillMount() {
		// 请求数据
		this.getData();
	}
	// 组件更新时候要请求数据
	componentDidUpdate(oldProps) {
		// 翻页了，才要发送请求
		if (this.props.match.params.page !== oldProps.match.params.page) {
			// 更新数据
			this.getData()
		}
	}
	// 切换页面
	changePage(page) {
		// 改变路由
		this.props.history.push('/lesson/list/' + page);
	}
	// 删除课程
	removeItem(id) {
		// 提交数据
		axios
			.post('/admin/lesson/remove', { id })
			// 监听数据返回
			.then(({ data }) => {
				// 如果成功
				if (data.errno === 0) {
					// 刷新页面
					location.reload();
				} else {
					// 提示错误
					alert(data.msg)
				}
			})
	}
	// 进入编辑页面
	showEditPage(id) {
		// 更改路由
		this.props.history.push('/lesson/edit/' + id)
	}
	// 创建课程卡片
	createLessonCard() {
		// 根据状态数据创建
		return this.state.list.map((item, index) => 
			<Card key={index}>
				<Card.Body>
					<img src={item.img} alt=""/>
					<h3>{item.title}</h3>
					<p className="info">
						<span className="price">{'￥' + item.price}</span>
						<span className="type">{this.getType(item.type)}</span>
					</p>
					<p>{item.sales + '人与你一起学习'}</p>
					<div className="card-btns">
						<Button type="primary" size="small" inline onClick={e => this.showEditPage(item._id)}>修改</Button>
						<Button type="warning" size="small" inline onClick={e => this.removeItem(item._id)}>删除</Button>
					</div>
				</Card.Body>
			</Card>
		)
	}
	// 渲染
	render() {
		return (
			<div className="page-lesson-list">
				{/*课程卡片*/}
				{this.createLessonCard()}
				{/*分页器*/}
				<Pagination simple={true} current={+this.props.match.params.page} total={Infinity} onChange={this.changePage.bind(this)}></Pagination>
			</div>
		)
	}
}