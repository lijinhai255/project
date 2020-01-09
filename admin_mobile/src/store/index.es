// 引入redux
import { createStore, applyMiddleware } from 'redux';
// 引入react-redux
import { connect } from 'react-redux';
// 引入异步action插件
import thunkMiddleware from 'redux-thunk';
// 引入reducer
import reducer from '../reducer';

// 如何拓展state
function mapStateToProps(state) {
	// 为组件的属性拓展state数据
	return { state };
}
// 如何拓展dispatch
function mapDispatchToProps(dispatch) {
	// 为组件的属性拓展dispatch方法
	return { dispatch }
}
// 定义拓展方法
export let deal = connect(mapStateToProps, mapDispatchToProps);

// 创建store
// export let store = createStore(reducer); 

// 拓展createStore方法
// let newCreateStore = applyMiddleware(thunkMiddleware)(createStore)
// // 创建store
// export let store = newCreateStore(reducer)
// 合并成一步
export let store = applyMiddleware(thunkMiddleware)(createStore)(reducer)