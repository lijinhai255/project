<template>
<div class="ickt-card">
	<img :src="data.img" alt="">
	<div class="content">
		<h2>{{data.title}}</h2>
		<p>
			<span class="sales">{{data.sales}}人与你一起学习</span>
			<span class="price">￥{{data.price}}</span>
			<span :class="['btn', data.hasBuy ? 'has-buy' : '']" @click="buyLesson">{{data.hasBuy ? '取消' : '购买'}}</span>
		</p>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
// 引入库
@import '../base.scss';
.ickt-card {
	background: #fff;
	border-radius: 10px;
	overflow: hidden;
	img {
		width: 100%;
	}
	.content {
		padding: 20px 10px 15px;
		h2 {
			@include ellipsis;
			font-size: 22px;
			margin-bottom: 10px;
		}
		p {
			@include ellipsis;
			font-size: 12px;
			display: flex;
		}
		.sales {
			flex: 1;
		}
		.price {
			color: #f30;
			font-size: 16px;
			margin-right: 4px;
		}
		.btn {
			color: #fff;
			background: #f30;
			border-radius: 4px;
			padding: 5px 8px;
			&.has-buy {
				background: #efefef;
				color: #666;
			}
		}
	}
}
</style>
<script type="text/javascript">
// 组件
export default {
	// 接收数据
	props: ['data'],
	// 方法
	methods: {
		// 购买课程
		buyLesson() {
			// 如果hasbuy是true，表示已经购买，点击应该发送取消
			this.$store.commit(this.data.hasBuy ? 'removeLesson' : 'addLesson', this.data)
			// 切换hasbuy的属性值
			// this.data.hasBuy = !this.data.hasBuy;
			// $set方法避免数据丢失
			this.$set(this.data, 'hasBuy', !this.data.hasBuy)
			// console.log(this.data.hasBuy)
			// 此时数据已经变了，如果hasbuy现在是true，那么之前的就是false， 点击按钮，添加课程
			// this.$store.commit(this.data.hasBuy ? 'addLesson' : 'removeLesson', this.data)
		}
	}
	// created() {
	// 	// console.log(this)
	// }
}
</script>