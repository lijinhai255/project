<template>
<div>
	<!-- <h1>app page, num: {{$store.state.search}}</h1> -->
	<Header></Header>
	<!-- 路由渲染位置 -->
	<!-- <router-view></router-view> -->
	<!-- 保存组件状态 -->
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
</div>
</template>
<style type="text/css" lang="scss">
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
html, body {
	background: #efefef;
}
</style>
<script type="text/javascript">
// 引入组件
import Header from './components/Header';
// 暴露接口
export default {
	// 注册
	components: { Header },
	created() {
		// console.log(this)
	}
}
</script>