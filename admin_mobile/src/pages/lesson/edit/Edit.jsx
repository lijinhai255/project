// 页面相似，可以使用混合技术
import LessonCreate from '../create/Create';
// 引入axios
import axios from 'axios';

// 定义组件
export default class Edit extends LessonCreate {
	// 第一种方式。重写submitData方法
	// 第二种方式，重写请求地址
	get submitUrl() {
		return '/admin/lesson/update'
	}
	// 获取数据的方法
	getData() {
		// 获取课程id路由数据
		let { params } = this.props.match;
		// 发送请求
		axios
			.get('/admin/lesson/detail', { params })
			// 监听数据返回
			.then(({ data }) => {
				// 如果成功
				if (data.errno === 0) {
					// 存储数据
					// console.log(data)
					this.setState(data.data)
				} else {
					// 提示错误
					alert(data.msg)
				}
			})
	}
	// 组件创建的时候
	componentWillMount() {
		// 获取数据
		this.getData();
	}
	// 组件更新的时候
	componentDidUpdate(oldProps) {
		// id不同
		if (this.props.match.params.id !== oldProps.match.params.id) {
			// 更新数据
			this.getData();
		}
	}
}

// // 引入react
// import React, { Component } from 'react';

// // 定义组件
// export default class Edit extends Component {
// 	// 渲染
// 	render() {
// 		return <h1>lesson edit page</h1>
// 	}
// }