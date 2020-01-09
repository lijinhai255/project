<template>
<!-- <div>
	<h1>home page</h1>
	第一步 定义子路由渲染位置
	<router-view></router-view>
</div> -->
<el-container class="page-home">
	<el-header>
		<router-link to="/" tag="h1">爱创课堂后台管理系统</router-link>
		<div class="status">
			<span>您好</span>
			<strong>{{$store.state.username}}</strong>
			<span>欢迎回来！</span>
			<a href="/admin/logout">退出</a>
		</div>
	</el-header>
	<el-container>
		<el-aside width="250px">
			<!-- 菜单组件 -->
			<el-menu>
				<!-- 每一组菜单用el-submenu定义 -->
				<el-submenu v-for="(item, index) in menu" :key="index" :index="String(index)">
					<!-- 标题 -->
					<template slot="title">
						<i class="el-icon-menu"></i>
						<span>{{item.title}}</span>
					</template>
					<!-- 定义子菜单 -->
					<el-menu-item v-for="(childItem, childIndex) in item.children" :key="childIndex" :index="index + '-' + childIndex">
						<router-link tag="span" :to="childItem.url">{{childItem.title}}</router-link>
						<!-- <span>{{childItem.title}}</span> -->
					</el-menu-item>
				</el-submenu>
			</el-menu>
		</el-aside>
		<el-main>
			<router-view></router-view>
		</el-main>
	</el-container>
</el-container>
</template>
<style type="text/css" lang="scss">
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
html, body {
	background: #efefef;
	height: 100%;
}
.page-home {
	.el-header {
		display: flex;
		background: #fff;
		margin-bottom: 10px;
		h1 {
			flex: 1;
			line-height: 60px;
		}
		.status {
			padding-top: 35px;
		}
	}
	.el-aside {
		margin-right: 10px;
	}
	.el-aside,
	.el-main {
		background: #fff;
	}
	&.el-container {
		height: 100%;
	}
	.el-main {
		padding: 20px;
	}
	// 清除浮动
	.clearfix:after {
		content: '';
		display: block;
		clear: both;
	}
	// 公用样式
	.page-title {
		font-size: 26px;
		padding: 10px 20px;
		font-weight: normal;
		border-bottom: 1px solid #ccc;
		margin-bottom: 30px;
	}
	.el-input {
		width: 400px;
	}
	.form-btns {
		margin-left: 150px;
		padding-top: 20px;
	}
	.form-upload-tip {
		margin-left: 10px;
		color: #999;
	}
	.form-upload-img {
		margin-top: 20px;
	}
	.page-container {
		margin: 30px 0 40px;
		text-align: center;
	}
	a {
		text-decoration: none;
	}
}
</style>
<script type="text/javascript">
// 组件
export default {
	// 绑定数据
	data() {
		return {
			// 菜单数据
			menu: [
				{
					title: '课程模块',
					children: [
						{ title: '创建课程', url: '/lesson/create' },
						{ title: '课程列表', url: '/lesson/list/1' }
					]
				},
				{
					title: '用户模块',
					children: [
						{ title: '创建用户', url: '/user/create' },
						{ title: '用户列表', url: '/user/list/1' }
					]
				}
			]
		}
	}
}
</script>