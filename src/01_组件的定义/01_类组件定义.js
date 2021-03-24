import React, { Component } from 'react'
// 类组件的定义以及setState()的使用
export default class App extends Component {
  constructor() {
    super()

    this.state = {
      message: 'Hello World'
    }
  }
  render () {
    return (
      <div>
        <span>我是类组件</span>
        <h2>{this.state.message}</h2>
        <button onClick={() => { this.changeText() }}>改变文本</button>
      </div>
    )
  }

  changeText () {
    // 不能直接修改state的值(因为react内部并没有跟vue一样实现双向数据绑定因此),需要通过setState函数,告诉React需要更新页面,重新调用render函数
    // this.state.message = 'Hello React';
    // console.log(this.state.message);
    this.setState({
      message: 'Hello React'
    })
  }
}
