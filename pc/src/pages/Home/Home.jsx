// 引入库
import React, { Component } from 'react';
// 引入axios
import axios from 'axios';
// 引入Card组件
import Card from '../../components/Card/Card';
// 购买卡片
import Buy from '../../components/Buy/Buy';
// 引入样式
import './Home.less';

// 定义组件暴露接口
export default class Home extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			data: [],
			lesson: {},
			// 是否显示购买课程组件
			show: false
		}
	}
	// 定义请求地址
	get url() {
		return '/data/lesson/home';
	}
	// 提取请求数据的方法
	getData() {
		// 请求数据
		axios
			.get(this.url)
			// 监听数据返回
			// .then(({ data }) => this.setState({ data: data.data }))
			.then(({ data }) => {
				// 如果请求成功
				if (data.errno === 0) {
					// 更新数据
					this.setState(data)
				// 提示错误
				} else {
					alert(data.msg)
					// 清空数据
					this.setState({ data: [] })
				}
			})
	}
	// 组件创建的时候，请求数据
	componentWillMount() {
		// 请求数据
		this.getData();
	}
	// 购买课程成功回调函数
	buyLesson(id) {
		// 在data数组中寻找id相同的
		let item = this.state.data.find(lesson => lesson._id === id);
		// 如果找到成员了
		if (item) {
			// 已经购买了
			item.hasBuy = true;
			// 更新数据
			this.setState({ data: this.state.data })
		}
		// console.log(item)
	}
	// 创建卡片列表
	createList() {
		// 遍历状态数据
		// 1 传递方法
		// 3 父组件存储接收的数据
		return this.state.data.map((item, index) => <Card data={item} key={index} method={lesson => this.setState({ 
				lesson,
				show: true
			})}></Card>)
	}
	// 渲染
	render() {
		// console.log(this.state)
		// 解构数据
		let { lesson, show } = this.state;
		return (
			<div className="page-home container">
				<div className="page-inner clearfix">{this.createList()}</div>
				{/*购买课程卡片*/}
				{/*4父组件将数据传递给另一个组件*/}
				<Buy data={lesson} show={show} method={this.buyLesson.bind(this)} hide={e => this.setState({show: false})}></Buy>
			</div>
		)
	}
}