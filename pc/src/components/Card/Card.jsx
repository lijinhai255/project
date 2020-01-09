// 引入库
import React, { Component } from 'react';
// 引入样式
import './Card.less';
// 引入配置
import { TYPES } from '../../conf';

// 定义组件
export default class Card extends Component {
	// 渲染
	render() {
		// console.log(this.props)
		// console.log(this.props.data.hasBuy)
		// 解构数据
		let { data } = this.props;
		return (
			<div className="ickt-card">
				<div className="img-container">
					<img src={data.img} alt=""/>
				</div>
				<div className="content">
					<h3>{data.title}</h3>
					<p>
						<span className="sales">{data.sales + '人与你一起学习'}</span>
						<span className="price">{'￥' + data.price}</span>
						<span className="level">{TYPES[data.type] || data.type}</span>
					</p>
					<div className="layer">
						{/*2 执行父组件传递的方法,并传递参数*/}
						<div className={data.hasBuy ? 'btn btn-disabled' : 'btn btn-success'} onClick={e => data.hasBuy || this.props.method(data)}>{data.hasBuy ? '已经购买' : '立即购买'}</div>
					</div>
				</div>
			</div>
		)
	}
}

// 初始化默认数据
Card.defaultProps = {
	data: {},
	method() {}
}