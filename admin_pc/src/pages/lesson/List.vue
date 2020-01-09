<template>
<div class="page-list">
	<h1 class="page-title">课程列表</h1>
	<div class="card-container clearfix">
		<el-card v-for="(item, index) in list" :key="index">
			<img :src="item.img" alt="">
			<h3>{{item.title}}</h3>
			<p class="price-part">
				<span class="price">￥{{item.price}}</span>
				<span class="type">{{getType(item.type)}}</span>
			</p>
			<p>{{item.sales}}人一起学习</p>
			<div class="card-btns">
				<!-- <el-button size="small" type="success">修改</el-button> -->
				<router-link class="el-button el-button--success el-button--small" :to="'/lesson/edit/' + item._id">修改</router-link>
				<el-button size="small" type="danger" @click="deleteLesson(item._id)">删除</el-button>
			</div>
		</el-card>
	</div>
	<div class="page-container">
		<!-- <el-button round>&larr;上一页</el-button> -->
		<!-- <el-button round>下一页&rarr;</el-button> -->
		<router-link class="el-button el-button--default is-round" :to="'/lesson/list/' + ($route.params.page < 2 ? 1 : $route.params.page - 1)">&larr; 上一页</router-link>
		<router-link class="el-button el-button--default is-round" :to="'/lesson/list/' + (+$route.params.page + 1)">下一页 &rarr;</router-link>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
.page-list {
	.card-container {
		margin-right: -20px;
	}
	.el-card {
		float: left;
		width: 305.75px;
		box-sizing: border-box;
		margin-right: 20px;
		margin-bottom: 20px;
		.el-card__body {
			padding: 8px;
			padding-bottom: 20px;
		}
		h3 {
			padding: 20px 0 10px;
			text-align: center;
			font-weight: normal;
			font-size: 20px;
		}
		p {
			line-height: 26px;
			font-size: 14px;
			padding: 0 10px;
		}
		.price-part {
			display: flex;
			.price {
				flex: 1;
				color: #f30;
				font-size: 16px;
			}
		}
		img {
			width: 100%;
		}
		.card-btns {
			margin-top: 10px;
			padding-left: 10px;
		}
	}
}
</style>
<script type="text/javascript">
// 数据映射
let type = {
	react: 'React课程',
	angular: 'Angular课程',
	vue: 'Vue课程',
	easy: '初级课程',
	middle: '中级课程',
	super: '高级课程'
}
// 组件
export default {
	// 数据
	data() {
		return {
			// 渲染的课程数据
			list: []
		}
	},
	// 定义方法
	methods: {
		// 获取类型
		getType(id) {
			// 在type数据中找到映射关系
			return type[id]
		},
		// 请求数据
		getData() {
			// 获取页面数据
			let { params } = this.$route;
			// 请求数据
			this.$http
				.get('/admin/lesson/list', { params })
				// 监听数据返回
				.then(({ data }) => {
					// 如果成功
					if (data.errno === 0) {
						// 存储数据
						this.list = data.data;
					} else {
						// 提示错误
						alert(data.msg);
						// 清空数据
						this.list = [];
					}
					// console.log(data)
				})
		},
		// 删除课程
		deleteLesson(id) {
			// 发送请求
			// console.log(id)
			this.$http
				.post('/admin/lesson/remove', { id })
				// 监听数据返回
				.then(({ data }) => {
					// 如果成功
					if (data.errno === 0) {
						// 刷新页面
						location.reload();
					} else {
						// 提示错误
						alert(data.msg)
					}
				})
		}
	},
	// 组件创建完成
	created() {
		// 更新数据
		this.getData()
	},
	// 监听数据变化
	watch: {
		// 路由改变，要发送请求
		$route() {
			// 更新数据
			this.getData()
		}
	}
}
</script>