// 引入react
import React from 'react';
import { render } from 'react-dom';
// 引入App
// import App from './app/App';
// 引入路由
import routes from './router/router';
// 引入Provider
import { Provider } from 'react-redux';
// 引入store
import { store } from './store';

// 渲染
// render(<App></App>, document.getElementById('app'));
// render(routes, document.getElementById('app'));
// 通过Provider组件渲染路由
render(<Provider store={store}>{routes}</Provider>, document.getElementById('app'))