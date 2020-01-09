// 引入库
import React, { Component } from 'react';
// 引入样式
import './Swiper.less'
// 定义组件
export default class Swiper extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			// 当前显示图片的索引值。
			num: 0
		}
	}
	// 根据num获取对应的索引值
	getIndex() {
		// 根据num值获取真实的索引值，就是对urls数组取余
		// 获取数组长度
		let len = this.props.urls.length;
		// 避免对0取余返回NaN
		if (len === 0) {
			return 0
		}
		// 对长度取余
		return this.state.num % len;
	}
	// 组件创建完成
	componentDidMount() {
		// 启动定时器
		this.startInterval();
		// css动画事件：
		// webkitTransitionStart, webkitTransitionEnd
		// webkitAnimationStart, webkitAnimationEnd
		// 监听过渡动画结束
		this.refs.container.addEventListener('webkitTransitionEnd', () => {
			// console.log('webkitTransitionEnd')
			// 关闭开关
			this.begin = false;
		})
	}
	// 封装启动计时器方法
	startInterval() {
		// 如果数据改变，希望组件进入存在期，我们将数据放在状态或者属性中，如果数据改变，不希望组件进入存在期，那么我们可以将数据放在组件自身。
		// 启动定时器。轮播
		this.timebar = setInterval(() => {
			// 让num + 1
			let num = this.state.num;
			// 更新num
			num++;
			// 更新状态
			this.setState({ num })
		}, this.props.time);
	}
	// 切换显示的图片
	toggle(num) {
		// 如果开关打开，不能切换
		if (this.begin) {
			// 阻止执行
			return ;
		}
		// 打开开关,开关数据的改变，不影响组件更新，可以放在组件自身
		this.begin = true;
		// 清除计时器
		clearInterval(this.timebar)
		// 切换num
		this.setState({ num })
		// 重启计时器
		this.startInterval();
	}
	// 创建按钮
	createBtns() {
		// 有几张图片，创建几个按钮
		return this.props.urls.map((item, index) => <span 
			key={index}
			className={this.getIndex() === index ? 'choose' : ''}
			onClick={e => this.toggle(index)}
		></span>)
	}
	// 渲染
	render() {
		// 解构数据
		let { width, height, urls } = this.props;
		// console.log(urls)
		return (
			<div className="ickt-swiper" ref="container" style={{
				width: width,
				height: height,
				backgroundImage: `url(${urls[this.getIndex()]})`
			}}>
				<div className="btns">{this.createBtns()}</div>
			</div>
		)
	}
}
// 默认属性数据
Swiper.defaultProps = {
	urls: [],
	width: '100%',
	height: 'auto',
	time: 2000
}