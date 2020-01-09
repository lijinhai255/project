// 引入react
import React, { Component } from 'react';
// 引入组件
import { InputItem, WhiteSpace, WingBlank, Button, Picker, ImagePicker, List } from 'antd-mobile';
// 引入axios
import axios from 'axios';
// 引入校验方法
import { checkNotEmpty } from '../../../tools/validator';

// 定义组件
export default class Create extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			title: '',
			price: '',
			sales: '',
			img: '',
			type: ''
		}
	}
	// 课程分类数据
	get typeData() {
		return [
			{ label: '高级课程', value: 'super' },
			{ label: '中级课程', value: 'middle' },
			{ label: '初级课程', value: 'easy' },
			{ label: 'React课程', value: 'react' },
			{ label: 'Vue课程', value: 'vue' },
			{ label: 'Angular课程', value: 'angular' }
		]
	}
	// 	请求地址
	get submitUrl() {
		return '/admin/lesson/create'
	}
	// 切换分类
	getType() {
		// 根据当前的type数据，从typeData寻找对应成员的label值
		let obj = this.typeData.find(item => item.value === this.state.type);
		// 如果有该成员,返回其label值，否则返回请选择类型
		return obj ? obj.label : '请选择类型'
	}
	// 提交图片
	uploadImage(files) {
		// console.log(files)
		// 获取上传的文件
		let file = files[files.length - 1].file
		// let file = files.pop().file
		// 模拟表单提交
		let form = new FormData();
		// 添加file字段
		form.append('file', file)
		// 提交数据
		axios
			.post('/admin/lesson/upload', form)
			// 监听数据返回
			.then(({ data }) => {
				// 如果上传成功
				if (data.errno === 0) {
					// 存储图片
					// this.setState({ img: data.data.img })
					this.setState(data.data)
				} else {
					// 提示错误
					alert(data.msg)
				}
			})
	}
	// 提交数据
	submitData() {
		// 解构数据
		let { title, img, price, sales, type } = this.state;
		// 校验数据
		if (
			checkNotEmpty(title) && 
			checkNotEmpty(img) && 
			checkNotEmpty(price) && 
			checkNotEmpty(sales) && 
			checkNotEmpty(type)
		) {
			// 提交数据
			axios
				.post(this.submitUrl, this.state)
				// 监听数据返回
				.then(({ data }) => {
					// 如果提交成功。进入列表页面
					if (data.errno === 0) {
						// 进入列表页面
						this.props.history.replace('/lesson/list/1')
					} else {
						// 提示错误
						alert(data.msg);
					}
				})
		}
	}
	// 渲染
	render() {
		// 解构数据
		let { title, img, price, sales, type } = this.state;
		return (
			<div>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<InputItem placeholder="请输入课程标题" value={title} onChange={title => this.setState({ title })}>课程标题</InputItem>
				<WhiteSpace></WhiteSpace>
				<InputItem placeholder="请输入课程价格" type="number" value={price} onChange={price => this.setState({ price })}>课程价格</InputItem>
				<WhiteSpace></WhiteSpace>
				{/*<Picker data={this.typeData} cols={1} onChange={arr => this.setState({ type: arr[0] })}>
					<List.Item>选择分类&emsp;{this.getType()}</List.Item>
				</Picker>*/}
				<Picker data={this.typeData} cols={1} value={[type]} onChange={arr => this.setState({ type: arr[0] })}>
					<List.Item>选择分类</List.Item>
				</Picker>
				<WhiteSpace></WhiteSpace>
				<InputItem placeholder="请输入课程销量" type="number" value={sales} onChange={sales => this.setState({ sales })}>课程销量</InputItem>
				<WhiteSpace></WhiteSpace>
				<ImagePicker files={img ? [{ url: img }] : []} onChange={this.uploadImage.bind(this)}></ImagePicker>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WingBlank>
					<Button type="primary" onClick={this.submitData.bind(this)}>提交</Button>
				</WingBlank>
			</div>
		)
	}
}