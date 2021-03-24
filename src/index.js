import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './01_组件的定义/01_类组件定义'
// import App from './01_组件的定义/02_函数组件定义'
import App from './01_组件的定义/03_组件之间的嵌套'

// import App from './02_类组件this的绑定和性能优化/01_类组件绑定this'
// import App from './02_类组件this的绑定和性能优化/02_PureComponent'
// import App from './02_类组件this的绑定和性能优化/03_memo的使用'

// import App from './03_组件的生命周期/01_counter-class';

// import App from './04_组件之间的通信/01_父传子通信-类组件'
// import App from './04_组件之间的通信/02_父传子通信-函数组件'
// import App from './04_组件之间的通信/03_父传子通信-属性验证'
// import App from './04_组件之间的通信/04_子传父通信-函数传递'

// import App from './05_体验hooks/01_counter-class';
// import App from './05_体验hooks/02_counter-hook';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
