// 使用混合技术，直接引入首页
import Home from '../Home/Home';

// 定义组件
export default class Type extends Home {
	// 重写请求地址
	get url() {
		// console.log(this.props)
		return '/data/lesson/type?id=' + this.props.match.params.id
	}
	// 组件更新期，更新数据
	componentDidUpdate(oldProps) {
		// 新旧路由数据是否发生改变
		if (oldProps.match.params.id !== this.props.match.params.id) {
			// 更新数据
			this.getData();
		}
	}
}


// // 引入库
// import React, { Component } from 'react';

// // 定义组件暴露接口
// export default class Type extends Component {
// 	// 渲染
// 	render() {
// 		return <h1>type page</h1>
// 	}
// }

