// 与home页面相比，search页面与type页面更加相似，因此混合继承分类页面
import Type from '../Type/Type';
// 定义组件
export default class Search extends Type {
	// 只需要重写请求地址
	get url() {
		return '/data/lesson/search?id=' + this.props.match.params.id;
	}
}

// // 引入库
// import React, { Component } from 'react';

// // 定义组件暴露接口
// export default class Search extends Component {
// 	// 渲染
// 	render() {
// 		return <h1>search page</h1>
// 	}
// }