<template>
<div class="page-buy">
	<div class="page-buy-price">
		<span>课程总价: </span>
		<span class="num">￥{{$store.state.price}}</span>
	</div>
	<div class="btns">
		<!-- v-on指令让属性值是js环境，可以执行方法 -->
		<span class="btn-cancel" @click="$router.go(-1)">取消购买</span>
		<span class="btn-buy" @click="buyLessons">购买课程</span>
	</div>
	<div class="title">已购商品</div>
	<div class="linear"></div>
	<!-- 课程卡片容器 -->
	<div class="card-container">
		<!-- 根据store中的购物车的课程数据，渲染课程卡片 -->
		<Card v-for="(item, index) in $store.state.lessons" :key="index" :data="item"></Card>
	</div>
</div>
</template>
<style type="text/css" lang="scss" scoped>
.page-buy {
	.page-buy-price {
		padding: 30px 20px 20px;
		background: #fff;
		color: #666;
		font-size: 18px;
		.num {
			color: #f30;
			font-size: 30px;
		}
	}
	.btns {
		text-align: center;
		background: #fff;
		span {
			color: #fff;
			background: #999;
			padding: 5px 10px;
			border-radius: 4px;
			font-size: 14px;
			margin: 0 10px;
			display: inline-block;
		}
		.btn-buy {
			background: #f30;
		}
	}
	.title {
		font-size: 24px;
		padding: 20px 20px 0;
		background: #fff;
		color: #333;
	}
	.linear {
		height: 30px;
		background: linear-gradient(#fff, #efefef);
	}
	.card-container {
		padding: 0 20px;
		.ickt-card {
			margin-bottom: 20px;
		}
	}
}
</style>
<script type="text/javascript">
// 引入组件
import Card from '../components/Card';
// 组件
export default {
	// 注册组件
	components: { Card },
	// 方法
	methods: {
		// // 是否应该返回上一个页面
		// shouldGoBack() {
		// 	// 如果没有课程数据，要返回上一个页
		// 	if (this.$store.state.lessons.length === 0) {
		// 		// 返回上一个页面
		// 		this.$router.go(-1);
		// 	}
		// }
		// 购买课程
		buyLessons() {
			// 发送请求
			this.$http
				// 要传递所有课程id
				.get('/data/lesson/buy', {
					params: {
						lessons: this.$store.state.lessons
								// 获取id
								.map(item => item._id)
								// 通过逗号拼接
								.join(',')
					}
				})
				// 监听数据返回
				.then(({ data }) => {
					// 如果成功
					if (data.errno === 0) {
						// 清空购物车
						return this.$store.commit('clearLessons')
					}
					 // else {
						// 提示错误
						alert(data.msg)
					// }
				})
		}
	},
	// 组件创建
	created() {
		// 如果没有课程数据，要返回上一个页
		if (this.$store.state.lessons.length === 0) {
			// 提醒用户再返回
			alert('购物车空空如也!');
			// 返回上一个页面
			this.$router.go(-1);
		}
		// 创建的时候要检测是否应该返回
		// this.shouldGoBack();
	},
	// 视图渲染完成
	mounted() {
		// 将页面滚动到最顶部
		window.scrollTo(0, 0)
	},
	// 存在期
	updated() {
		// 更新的时候要检测是否应该返回
		// this.shouldGoBack();
		// 如果没有课程数据，要返回上一个页面
		if (this.$store.state.lessons.length === 0) {
			// 返回上一个页面
			this.$router.go(-1);
		}
	}
}
</script>