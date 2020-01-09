<!-- div.app-login>div.login-container>h1+el-form>(el-form-item[label]>el-input[v-model placeholder])*2+el-button{登录} -->
<template>
<!-- 第一步 写模板 -->
<div class="app-login">
	<div class="login-container">
		<h1>请您登录</h1>
		<!-- 表单校验 -->
		<!-- 1 为表单绑定校验的数据 model -->
		<!-- 2 定义每一个表单元素校验的字段 prop -->
		<!-- 3 定义校验规则 rules -->
		<!-- 4 提交回调函数中，获取form组件，执行校验方法，查看结果 -->
		<el-form ref="login" :model="data" :rules="rules" label-width="100px">
			<el-form-item label="用户名" prop="username">
				<el-input v-model="data.username" placeholder="请输入用户名"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="data.password" placeholder="请输入密码" type="password"></el-input>
			</el-form-item>
			<el-button type="success" class="submit-btn" @click="submitData">登录</el-button>
		</el-form>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
// 第二步 写样式
.app-login {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: #efefef;
	.login-container {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 400px;
		padding: 20px;
		margin: -170px -220px;
		border-radius: 10px;
		background: #fff;
		h1 {
			margin: 0;
			padding: 15px 0 12px;
			font-size: 24px;
			font-weight: normal;
			text-align: center;
			border-bottom: 1px solid #ccc;
			margin-bottom: 20px;
		}
		.submit-btn {
			display: block;
			width: 100%;
		}
	}
}
</style>
<script type="text/javascript">
// 引入校验策略算法
import { checkUserName, checkPassword } from '../tools/validator';
// 组件
export default {
	// 数据
	data() {
		return {
			// 绑定数据
			data: {},
			// 校验规则
			rules: {
				// 每一个属性代表一条规则
				username: { validator: checkUserName, trigger: 'blur' },
				// username: {
				// 	validator(field, value, callback) {
				// 		// 根据值的不同，执行回调函数。callback必须执行
				// 		// 如果没有输入数据，提示
				// 		if (!value) {
				// 			// return就不会在继续执行了
				// 			return callback(new Error('请输入用户名'))
				// 		}
				// 		// console.log(arguments)
				// 		// 如果成功了，必须执行callback
				// 		callback();
				// 	},
				// 	// 失去焦点时候校验
				// 	trigger: 'blur'
				// }
				// 校验密码
				password: { validator: checkPassword, trigger: 'blur' }
			}
		}
	},
	// 方法
	methods: {
		// 提交数据
		submitData() {
			// console.log(this)
			// 获取form组件，执行校验方法
			this.$refs.login.validate(valid => {
				// 如果成功，开始登录
				if (valid) {
					// 登录
					this.$http
						// post请求
						.post('/admin/login', this.data)
						// 监听数据返回
						.then(({ data }) => {
							// 如果登录成功
							if (data.errno === 0) {
								// 存储用户名
								this.$store.commit('udpateUsername', data.data.username)
							} else {
								// 提示用户
								alert(data.msg)
							}
						})
				}
			})
		}
	}
}
</script>