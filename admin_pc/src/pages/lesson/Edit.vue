<template>
<div>
	<h1 class="page-title">课程修改</h1>
	<!-- 数据双向绑定 -->
	<!-- 设置model -->
	<!-- 设置prop -->
	<!-- 规则 rules -->
	<!-- 设置ref -->
	<!-- 提交事件 -->
	<el-form ref="lesson" :model="data" :rules="rules" label-width="150px">
		<el-form-item label="课程标题" prop="title">
			<el-input placeholder="请输入课程标题" v-model="data.title"></el-input>
		</el-form-item>
		<el-form-item label="课程价格" prop="price">
			<el-input placeholder="请输入课程价格" type="number" v-model="data.price"></el-input>
		</el-form-item>
		<el-form-item label="课程类别" prop="type">
			<el-select placeholder="请选择课程类别" v-model="data.type">
				<el-option v-for="item in types" :key="item.value" :label="item.label" :value="item.value"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="课程销量" prop="sales">
			<el-input placeholder="请输入课程销量" type="number" v-model="data.sales"></el-input>
		</el-form-item>
		<el-form-item label="课程图片" prop="img">
			<el-upload
				action="/admin/lesson/upload"
				:show-file-list="false"
				:on-success="uploadSuccess"
				:on-error="uploadError"
			>
				<el-button type="primary">上传</el-button>
				<span slot="tip" class="form-upload-tip">请选择课程图片</span>
			</el-upload>
			<img :src="data.img" v-if="data.img" class="form-upload-img" alt="">
		</el-form-item>
		<div class="form-btns">
			<el-button type="success" @click="submitData">提交</el-button>
		</div>
	</el-form>
</div>
</template>
<script type="text/javascript">
// 不能为空
import { checkNotEmpty } from '../../tools/validator';
// 组件
export default {
	// 数据
	data() {
		// 不能为空校验规则
		let notEmpty = [ { validator: checkNotEmpty, trigger: 'blur' } ]
		return {
			// 绑定的数据
			data: {},
			// 课程类别
			types: [
				{ label: '高级课程', value: 'super' },
				{ label: '中级课程', value: 'middle' },
				{ label: '初级课程', value: 'easy' },
				{ label: 'React课程', value: 'react' },
				{ label: 'Vue课程', value: 'vue' },
				{ label: 'Angular课程', value: 'angular' }
			],
			// 校验规则对象
			rules: {
				title: notEmpty,
				price: notEmpty,
				sales: notEmpty,
				img: notEmpty,
				type: notEmpty
			}
		}
	},
	// 方法
	methods: {
		// 获取数据
		getData() {
			// 解构数据
			let { params } = this.$route;
			// 发送请求
			this.$http
				.get('/admin/lesson/detail', { params })
				// 监听数据返回
				.then(({ data }) => {
					// 如果成功
					if (data.errno === 0) {
						this.data = data.data;
					} else {
						// 提示错误
						alert(data.msg)
					}
				})
		},
		// 上传成功
		uploadSuccess(res) {
			// 如果上传成功
			if (res.errno === 0) {
				// 存储数据
				this.data.img = res.data.img;
			} else {
				// 提示错误
				alert(res.msg);
			}
		},
		// 上传失败
		uploadError() {},
		// 提交数据
		submitData() {
			// 提交数据
			// 校验表单合法性
			this.$refs.lesson.validate(valid => {
				// 如果合法。
				if (valid) {
					// 提交数据
					this.$http
						// 修改数据
						.post('/admin/lesson/update', this.data)
						// 监听数据返回
						.then(({ data }) => {
							// 如果更新成功
							if (data.errno === 0) {
								// 进入列表页
								// this.$router.go(-1)
								// 精确跳转
								this.$router.replace('/lesson/list/1')
							} else {
								// 提示错误
								alert(data.msg)
							}
						})
				}
			})
		}
	},
	// 创建完成
	created() {
		// 请求数据
		this.getData(); 
	},
	// 监听数据变化
	watch: {
		// 路由改变
		$route() {
			// 更新数据
			this.getData();
		}
	}
}
</script>