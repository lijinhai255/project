<template>
<div>
	<h1 class="page-title">修改密码</h1>
	<!-- 1 设置label -->
	<!-- 2 设置placeholder -->
	<!-- 3 数据双向绑定 v-model -->
	<!-- 开始做表单校验 -->
	<!-- 4 设置校验数据 model -->
	<!-- 5 设置校验数据项 prop -->
	<!-- 6 校验规则 rules -->
	<!-- 7 设置ref，获取表单 -->
	<!-- 8 在事件回调函数中，请求数据 -->
	<!-- 9 设置密码表单类型 -->
	<el-form ref="manager" :model="data" :rules="rules"  label-width="150px">
		<el-form-item label="用户名" prop="username">
			<el-input placeholder="请输入用户名" v-model="data.username"></el-input>
		</el-form-item>
		<el-form-item label="密码" prop="password">
			<el-input placeholder="请输入密码" v-model="data.password" type="password"></el-input>
		</el-form-item>
		<el-form-item label="重复密码" prop="repeat">
			<el-input placeholder="请重复输入密码" v-model="data.repeat" type="password"></el-input>
		</el-form-item>
		<div class="form-btns">
			<el-button type="success" @click="submitData">提交</el-button>
			<el-button type="warning" @click="resetData">重置</el-button>
		</div>
	</el-form>
</div>
</template>
<script type="text/javascript">
// 引入校验规则方法
import { checkUserName, checkPassword, checkRepeat } from '../tools/validator';
// 组件
export default {
	// 数据
	data() {
		// console.log(this)
		return {
			// 绑定的数据
			data: {
				username: '',
				password: '',
				repeat: ''
			},
			// 校验规则
			rules: {
				username: [ { validator: checkUserName, trigger: 'blur' } ],
				password: [ { validator: checkPassword, trigger: 'blur' } ],
				repeat: [ { validator: checkRepeat.bind(this, 'password'), trigger: 'blur' } ]
			}
		}
	},
	// 方法
	methods: {
		// 提交数据
		submitData() {
			// 校验表单
			this.$refs.manager.validate(valid => {
				// 如果校验成功，要提交数据
				if (valid) {
					// 解构数据
					let { username, password } = this.data;
					// 提交数据
					this.$http
						.post('/admin/manager/update', { username, password })
						// 监听数据返回
						.then(({ data }) => {
							// 如果更新成功
							if (data.errno === 0) {
								// 提示用户
								alert('修改成功，请重新登录');
								// 刷新页面
								// location.href = '/admin'
								location.reload();
							} else {
								// 提示错误信息
								alert(data.msg)
							}
						})
				}
			})
		},
		// 重置数据
		resetData() {
			// console.log(this.$refs.manager)
			// 重置表单
			this.$refs.manager.resetFields();
		}
	}
}
</script>