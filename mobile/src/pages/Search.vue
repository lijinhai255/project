<template>
<div class="page-search">
	<div class="card-container">
		<!-- 渲染Card组件 -->
		<Card v-for="(item, index) in list" :key="index" :data="item"></Card>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
.page-search {
	.card-container {
		padding: 30px 20px 50px;
		.ickt-card {
			margin-bottom: 20px;
		}
	}
}
</style>
<script type="text/javascript">
// 注册card组件
import Card from '../components/Card';
// 定义组件
export default {
	// 注册
	components: { Card },
	// 定义数据
	data() {
		return {
			// 数据
			list: []
		}
	},
	// 方法
	methods: {
		// 请求数据方法
		getData() {
			// 解构数据
			let { params } = this.$route;
			this.$http
				// 请求数据，携带搜索词
				.get('/data/lesson/search', { params })
				// 监听数据返回
				.then(({ data }) => {
					// 如果成功
					if (data.errno === 0) {
						// 如果课程已经加入购物车，要添加hasBuy属性
						data.data.forEach(item => {
							// 过滤store中的购物车课程数据
							this.$store.state.lessons.some(lesson => {
								// 如果id相等
								if (lesson._id === item._id) {
									// 课程找到了
									item.hasBuy = true;
									// 阻止继续往下找了
									return true;
								}
							})
						})
						// 存储数据
						this.list = data.data;
					} else {
						// 提示错误
						alert(data.msg)
					}
				})
		}
	},
	// 组件创建要请求数据
	created() {
		// 更新数据
		this.getData();
	},
	// 路由更新
	watch: {
		$route() {
			// 如果是搜索页面的路由改变，再发送请求
			if (this.$route.fullPath.indexOf('/search/') === 0) {
				// 请求数据
				this.getData();
			}
		}
	}
}
</script>