// 引入库
import React, { Component } from 'react';
// 引入axios
import axios from 'axios';
// 引入样式
import './Buy.less';

// 定义类
export default class Buy extends Component {
	// 构造函数
	constructor(props) {
		// 继承
		super(props);
		// 状态
		this.state = {
			// 用属性数据修改状态数据
			show: props.show
		}
	}
	// 存在期
	componentWillReceiveProps(props) {
		// 用属性数据修改状态数据
		this.setState({ show: props.show })
	}
	// 购买课程
	buyLesson() {
		// 获取课程数据id
		let id = this.props.data._id;
		// 发送请求
		axios
			// 购买请求通常发送post
			// .post('/data/lesson/buy?id=' + this.props.data._id)
			// get模拟
			.get('/data/lesson/buy?id=' + id)
			// 监听数据返回
			.then(({ data }) => {
				// 如果购买成功
				if (data.errno === 0) {
					// 执行父组件方法。传递数据
					this.props.method(id)
					// 隐藏当前组件
					// this.setState({ show: false })
					this.hide();
				} else {
					// 提示错误
					alert(data.msg)
				}
			})
	}
	// 隐藏组件方法
	hide() {
		// 更新子组件数据
		this.setState({
			show: false
		})
		// 执行父组件方法
		this.props.hide();
	}
	// 渲染
	render() {
		// div.ickt-buy>div.buy-container>(div.header>h3+span.close)+(div.body>(div.info>img+div.title>h1+p)+p>span+span.price)+div.footer>(div.status>input:checkbox+input)+span.btn.btn-primary+span.btn
		// console.log(this.props, this.state.show)

		// 解构数据
		let { data } = this.props;
		// console.log(this.state.show)
		return (
			<div className="ickt-buy" style={{ display: this.state.show ? '' : 'none'}}>
				<div className="buy-container">
					<div className="header">
						<h3>购买课程</h3>
						<span className="close" onClick={this.hide.bind(this)}>x</span>
					</div>
					<div className="body">
						<div className="info">
							<img src={data.img} alt=""/>
							<div className="title">
								<h1>{data.title}</h1>
								<p>{data.sales + '人与你一起学习'}</p>
							</div>
						</div>
						<p className="price">
							<span>课程价格: </span>
							<span className="num">{'￥' + data.price}</span>
						</p>
					</div>
					<div className="footer">
						<div className="status">
							<input type="checkbox" name="" id=""/>
							<span>同意爱创课堂条款</span>
						</div>
						<span className="btn btn-primary" onClick={e => this.buyLesson()}>确定</span>
						<span className="btn btn-cancel" onClick={this.hide.bind(this)}>取消</span>
					</div>
				</div>
			</div>
		)
	}
}

// 初始化属性数据
Buy.defaultProps = {
	data: {},
	show: false,
	method() {},
	hide() {}
}