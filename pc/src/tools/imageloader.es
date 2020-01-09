// 基于ES6语法实现
export default class ImageLoader {
	/***
	 * 构造函数
	 * @urls 		所有图片地址
	 * @complete 	每加载完成一张图片执行的回调函数
	 * @done 		所有图片都加载完成，执行的回调函数
	 **/ 
	constructor(urls, complete, done) {
		// 存储数据
		this.urls = urls;
		this.complete = complete;
		this.done = done;
		// 当前加载完成的数
		this.num = 0;
		// 开始加载图片
		this.init();
	}
	// 初始化，加载图片
	init() {
		// 如果没有图片，直接加载完成
		if (this.urls.length === 0) {
			// 直接加载完成
			return this.done(0, 0);
		}
		// 遍历urls，执行loade方法，加载图片
		this.urls.forEach(item => this.load(item))
	}
	/***
	 * @url 	图片地址
	 **/
	load(url) {
		// 创建图片加载器
		let img = new Image();
		// 监听图片加载成功
		img.onload = () => {
			// 加载成功
			this.loaded();
		}
		// 监听图片加载失败
		img.onerror = () => {
			// 加载失败
			this.loaded(true);
		}
		// 加载图片
		img.src = url;
	}
	/***
	 * @isFail 		是否失败
	 **/
	loaded(isFail) {
		// 图片总数
		let len = this.urls.length;
		// 加载完一张图片
		this.num++;
		// 执行加载成功的方法
		this.complete(this.num, len, isFail)
		// 是否全部加载完成
		if (this.num === len) {
			// 加载完成了
			this.done(this.num, len)
		}
	}
}