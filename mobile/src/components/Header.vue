<template>
<div class="ickt-header">
	<div class="navbar">
		<span @click="showSearch">搜索</span>
		<router-link to="/" tag="h1">爱创课堂授课网站</router-link>
		<span>登录</span>
	</div>
	<div class="search" v-show="isShow">
		<input type="text" v-model="query" @keyup.enter="showSearchPage" placeholder="请输入搜索关键字">
		<span @click="hideSearch">取消</span>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
.ickt-header {
	position: relative;
	background: #06c1ae;
	color: #fff;
	height: 50px;
	.navbar {
		display: flex;
		text-align: center;
		line-height: 50px;
		h1 {
			flex: 1;
			font-size: 24px;
		}
		span {
			width: 50px;
			display: inline-block;
			font-size: 14px;
		}
	}
	.search {
		position: absolute;
		background: #fff;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		padding: 8px 20px;
		input {
			flex: 1;
			padding-left: 20px;
			background: #efefef;
			outline: none;
			border: none;
			border-top-left-radius: 17px;
			border-bottom-left-radius: 17px;
		}
		span {
			padding: 0px 20px 0px 10px;
			color: #666;
			line-height: 34px;
			display: inline-block;
			background: #efefef;
			font-size: 14px;
			border-top-right-radius: 17px;
			border-bottom-right-radius: 17px;
		}
	}
}
</style>
<script type="text/javascript">
// 组件
export default {
	// 数据
	data() {
		return {
			// 是否显示搜索框
			isShow: false,
			// 搜索数据
			query: ''
		}
	},
	// 方法
	methods: {
		// 显示搜索框
		showSearch() {
			this.isShow = true;
		},
		// 隐藏搜索框
		hideSearch() {
			this.isShow = false;
		},
		// 进入搜索页面
		showSearchPage() {
			// 源生
			// location.hash = '#/search/' + this.query;
			// 路由方式
			// 不保留当前页面路由状态
			// this.$router.replace('/search/' + this.query);
			// 保留当前页面路由状态
			this.$router.push('/search/' + this.query);
			// 数据存储在store中
			// this.$store.commit('saveSearchValue', this.query)
			// 清空搜索词
			this.query = '';
			// 因此搜索条
			this.isShow = false;
		}
	}
}
</script>