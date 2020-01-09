<template>
<div class="ickt-shopping-car">
	<div class="total">共￥{{$store.state.price}}元</div>
	<router-link to="/buy" class="btn">选好了</router-link>
</div>
</template>
<style type="text/css" lang="scss">
.ickt-shopping-car {
	height: 50px;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	background: #484d54;
	color: #fff;
	display: flex;
	font-size: 18px;
	line-height: 50px;
	text-align: center;
	.total {
		flex: 1;
	}
	.btn {
		color: #fff;
		background: #fe2947;
		text-decoration: none;
		padding: 0 22px;
	}
}
</style>