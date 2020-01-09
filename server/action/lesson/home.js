// 引入数据库
let { collection, end } = require('../../db');
// 引入数据限制
let { HOME_SHOW_LESSON_NUM } = require('../../consts');
// 定义接口
module.exports = (req, res) => {
	// 返回模拟数据
	// res.json('success')
	// 查找数据
	collection('lesson', res, (coll, res, db) => {
		// 查找
		coll
			.find()
			// 倒序
			.sort({ _id: -1 })
			// 第五页
			// .skip(HOME_SHOW_LESSON_NUM * 5)
			// 数量限制
			.limit(HOME_SHOW_LESSON_NUM)
			// 转化成数组返回
			.toArray((err, result) => {
				// 如果有错误
				if (err) {
					// 返回错误信息
					return end('collectionFindtError', res, db)
				}
				// 如果没有数据
				if (result.length === 0) {
					// 没有数据
					return end('noData', res, db)
				}
				// 返回数据
				end({
					errno: 0,
					data: result
				}, res, db)
				// console.log(err, result)
			})
	})
	// 插入一些数据
	// collection('lesson', res, (coll, res, db) => {
	// 	// 操作集合
	// 	coll
	// 		// 插入一些数据
	// 		.insertMany([
 //              {
 //                  "img": "/static/img/lesson/05.jpg",
 //                  "title": "Javscript进阶课程",
 //                  "sales": "123",
 //                  "price": "120.00",
 //                  "type": "easy"
 //              },
 //              {
 //                  "img": "/static/img/lesson/06.jpg",
 //                  "title": "css进阶课程",
 //                  "sales": "234",
 //                  "price": "20.00",
 //                  "type": "easy"
 //              },
 //              {
 //                  "img": "/static/img/lesson/07.jpg",
 //                  "title": "html进阶课程",
 //                  "sales": "67",
 //                  "price": "10.00",
 //                  "type": "easy"
 //              },
 //              {
 //                  "img": "/static/img/lesson/08.jpg",
 //                  "title": "css3 进阶课程",
 //                  "sales": "12",
 //                  "price": "50.00",
 //                  "type": "easy"
 //              },
 //              {
 //                  "img": "/static/img/lesson/09.jpg",
 //                  "title": "html5进阶课程",
 //                  "sales": "145",
 //                  "price": "20.00",
 //                  "type": "easy"
 //              },
 //              {
 //                  "img": "/static/img/lesson/10.jpg",
 //                  "title": "设计模式进阶课程",
 //                  "sales": "45",
 //                  "price": "201.00",
 //                  "type": "middle"
 //              },
 //              {
 //                  "img": "/static/img/lesson/11.jpg",
 //                  "title": "canvas进阶课程",
 //                  "sales": "125",
 //                  "price": "220.00",
 //                  "type": "middle"
 //              },
 //              {
 //                  "img": "/static/img/lesson/12.jpg",
 //                  "title": "游戏课程",
 //                  "sales": "145",
 //                  "price": "20.00",
 //                  "type": "middle"
 //              },
 //              {
 //                  "img": "/static/img/lesson/13.jpg",
 //                  "title": "backbone进阶课程",
 //                  "sales": "125",
 //                  "price": "50.00",
 //                  "type": "super"
 //              },
 //              {
 //                  "img": "/static/img/lesson/14.jpg",
 //                  "title": "ionic课程",
 //                  "sales": "15",
 //                  "price": "290.00",
 //                  "type": "super"
 //              },
 //              {
 //                  "img": "/static/img/lesson/15.jpg",
 //                  "title": "Angular 6.0进阶课程",
 //                  "sales": "15",
 //                  "price": "240.00",
 //                  "type": "super"
 //              },
 //              {
 //                  "img": "/static/img/lesson/16.jpg",
 //                  "title": "Angular 1.0进阶课程",
 //                  "sales": "145",
 //                  "price": "20.00",
 //                  "type": "super"
 //              },
 //              {
 //                  "img": "/static/img/lesson/17.jpg",
 //                  "title": "Redux进阶课程",
 //                  "sales": "345",
 //                  "price": "290.00",
 //                  "type": "super"
 //              },
 //              {
 //                  "img": "/static/img/lesson/18.jpg",
 //                  "title": "Reflux进阶课程",
 //                  "sales": "125",
 //                  "price": "202.00",
 //                  "type": "super"
 //              },
 //              {
 //                  "img": "/static/img/lesson/19.jpg",
 //                  "title": "MVC课程",
 //                  "sales": "1445",
 //                  "price": "20.00",
 //                  "type": "super"
 //              },
 //              {
 //                  "img": "/static/img/lesson/20.jpg",
 //                  "title": "Express课程",
 //                  "sales": "12",
 //                  "price": "234.00",
 //                  "type": "super"
 //              },
 //              {
 //                  "img": "/static/img/lesson/21.jpg",
 //                  "title": "Session课程",
 //                  "sales": "12",
 //                  "price": "20.00",
 //                  "type": "super"
 //              },
 //              {
 //                  "img": "/static/img/lesson/22.jpg",
 //                  "title": "Cookie课程",
 //                  "sales": "345",
 //                  "price": "220.00",
 //                  "type": "super"
 //              }
 //          ])
	// })
}