<template>
<div class="app">
	<!-- <h1>hello-{{$store.state.username}}</h1>
	<el-button>ickt</el-button> -->
	<Login v-if="!$store.state.username"></Login>
	<!-- 路由容器 -->
	<router-view v-else></router-view>
	<!-- <Home v-else></Home> -->
</div>
</template>
<style type="text/css" lang="scss">
.app {
	height: 100%;
}
</style>
<script type="text/javascript">
// 引入注册组件
import Login from './pages/Login';
import Home from './pages/Home';
// 定义组件
export default {
	// 注册
	components: { Login, Home },
	// 获取用户登录状态
	created() {
		// 请求登录信息
		this.$http
			.get('/admin/userinfo')
			// 监听数据返回
			.then(({ data }) => {
				// 如果登录了
				if (data.errno === 0) {
					// 存储用户名
					this.$store.commit('udpateUsername', data.data.username)
				}
				// 不存储用户名就自然而然的展示登录页面了
			})
	}
}
</script>