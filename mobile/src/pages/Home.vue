<template>
<div class="page-home">
	<div class="menu">
		<router-link v-for="item in types" :key="item.id" :to="'/type/' + item.id">{{item.text}}</router-link>
	</div>
	<!-- 课程卡片 -->
	<div class="card-container">
		<!-- 循环list数据，创建课程卡片 -->
		<Card v-for="(item, index) in list" :key="index" :data="item"></Card>
	</div>
	<!-- 购物车 -->
	<ShoppingCar></ShoppingCar>
</div>
</template>
<style type="text/css" lang="scss">
.page-home {
	.menu {
		background: #fff;
		text-align: center;
		height: 40px;
		line-height: 40px;
		a {
			color: #666;
			text-decoration: none;
			padding: 0 10px;
			border-bottom: 2px solid transparent;
			display: inline-block;
			&.router-link-active {
				color: red;
				border-bottom-color: red;
			}
		}
	}
	.card-container {
		padding: 30px 20px 50px;
		.ickt-card {
			margin-bottom: 20px;
		}
	}
}
</style>
<script type="text/javascript">
// 注册组件
import Card from '../components/Card';
import ShoppingCar from '../components/ShoppingCar';
// 组件
export default {
	// 注册
	components: { Card, ShoppingCar },
	// 数据
	data() {
		return {
			// 同步数据直接写
			types: [
				{ id: 'super', text: '高级课程' },
				{ id: 'middle', text: '中级课程' },
				{ id: 'easy', text: '初级课程' }
			],
			// 课程数据
			list: []
		}
	},
	// 方法
	methods: {
		// 获取请求地址
		getUrl() {
			// console.log(this)
			// 获取路径
			let { fullPath, params } = this.$route;
			// 如果是分类页面
			if (fullPath.indexOf('/type/') === 0) {
				// 返回分类页面请求地址
				return '/data/lesson/type?id=' + params.id;
			} else {
				// 首页
				return '/data/lesson/home'
			}
		},
		// 请求数据
		getData() {
			// 获取数据
			this.$http
				// 请求数据
				.get(this.getUrl())
				// 监听数据返回
				.then(({ data }) => {
					// 如果成功
					if (data.errno === 0) {
						// 返回的数据，如果在购物车中，应该设置已经购买的状态
						data.data.forEach(item => {
							// 如果在购物车中
							this.$store.state.lessons.some(lesson => {
								// 如果_id相等，说明在购物车中
								if (lesson._id === item._id) {
									// 设置购买状态
									item.hasBuy = true;
									// 已经找到了，不会在寻找下一个了
									return true;
								}
							})
						})
						// 存储课程数据
						this.list = data.data;
					} else {
						// 提示错误
						alert(data.msg);
					}
				})
		}
	},
	// 组件创建的时候请求
	created() {
		// 请求数据
		this.getData();
	},
	// 路由改变的时候请求
	watch: {
		// 监听路由的变化
		$route() {
			// 如果是首页，或者是分类页面
			if (this.$route.fullPath === '/' || this.$route.fullPath.indexOf('/type/') === 0) {
				// 请求数据
				this.getData();
			}
		}
	}
}
</script>