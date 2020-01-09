<!-- div>h1.page-title{创建课程}+el-form[model rules label-width]>(el-form-item[prop label]>el-input[v-model placeholder])*5+div.form-btns>el-button[type=success]{提交} -->
<template>
<div>
	<h1 class="page-title">创建课程</h1>
	<!-- <h1 class="page-title">{{$route.fullPath === '/lesson/create' ? '创建课程' : '编辑课程'}}</h1> -->
	<!-- 1 设置model -->
	<!-- 2 设置prop -->
	<!-- 3 设置rules -->
	<!-- 4 设置ref -->
	<!-- 5 提交数据事件回调函数 -->
	<el-form ref="lesson" :model="data" :rules="rules" label-width="150px">
		<el-form-item prop="title" label="课程标题：">
			<el-input v-model="data.title" placeholder="请输入课程标题"></el-input>
		</el-form-item>
		<el-form-item prop="price" label="课程价格：">
			<el-input v-model="data.price" placeholder="请输入课程价格" type="number"></el-input>
		</el-form-item>
		<el-form-item prop="type" label="课程分类：">
			<!-- 课程分类下拉框 -->
			<el-select v-model="data.type" placeholder="请选择课程分类">
				<el-option v-for="item in types" :label="item.label" :value="item.value" :key="item.value"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item prop="sales" label="课程销量：">
			<el-input v-model="data.sales" placeholder="请输入课程销量" type="number"></el-input>
		</el-form-item>
		<el-form-item prop="img" label="课程图片：">
			<el-upload
				action="/admin/lesson/upload"
				:show-file-list="false"
				:on-success="uploadSuccess"
				:on-error="uploadError"
			>
				<el-button type="primary">上传</el-button>
				<span slot="tip" class="form-upload-tip">请选择上传的图片</span>
			</el-upload>
			<!-- 有数据再渲染图片 -->
			<img class="form-upload-img" :src="data.img" v-if="data.img" alt="">
		</el-form-item>
		<div class="form-btns">
			<el-button type="success" @click="submitData">提交</el-button>
		</div>
	</el-form>
</div>
</template>
<script type="text/javascript">
// 引入校验算法
import { checkNotEmpty } from '../../tools/validator';
// 组件
export default {
	// 数据
	data() {
		// 定义非空校验对象
		let notEmpty = [ { validator: checkNotEmpty, trigger: 'blur' } ];
		// let notEmpty = [ { validator: checkNotEmpty.bind(this, '传递数据'), trigger: 'blur' } ];
		// let notEmpty = [ { validator: (...arg) => checkNotEmpty('hello', ...arg), trigger: 'blur' } ];
		return {
			// 绑定的数据
			data: {},
			// 课程分类
			types: [
				{ label: '高级课程', value: 'super' },
				{ label: '中级课程', value: 'middle' },
				{ label: '初级课程', value: 'easy' },
				{ label: 'React课程', value: 'react' },
				{ label: 'Vue课程', value: 'vue' },
				{ label: 'Angular课程', value: 'angular' }
			],
			// 校验规则
			rules: {
				title: notEmpty,
				price: notEmpty,
				sales: notEmpty,
				type: notEmpty,
				img: notEmpty
			}
		}
	},
	// 定义方法
	methods: {
		// 上传成功
		uploadSuccess(res) {
			// console.log(arguments)
			// 如果成功
			if (res.errno === 0) {
				// 存储数据
				// return this.data.img = res.data.img
				// 避免数据丢失
				return this.$set(this.data, 'img', res.data.img)
			} 
			// 提示错误
			alert(res.msg)
		},
		// 上传失败
		uploadError() {
			console.log('error')
		},
		// 提交数据
		submitData() {
			// 校验表单
			this.$refs.lesson.validate(valid => {
				// 如果校验成功
				if (valid) {
					// 提交数据
					this.$http
						// 添加数据
						.post('/admin/lesson/create', this.data)
						// 监听数据返回
						.then(({ data }) => {
							// 如果创建成功
							if (data.errno === 0) {
								// 进入列表页查看
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
	// created() {
	// 	// 解构数据
	// 	let { params } = this.$route;
	// 	// 发送请求
	// 	this.$http
	// 		.get('/admin/lesson/detail', { params })
	// 		// 监听数据返回
	// 		.then(({ data }) => {
	// 			if (data.errno === 0) {
	// 				// 存储数据
	// 				this.data = data.data;
	// 			}
	// 		})
	// }
}
</script>