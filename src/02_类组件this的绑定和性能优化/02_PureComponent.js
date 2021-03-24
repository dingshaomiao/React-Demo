import React, { Component, PureComponent } from 'react'

export default class Demo1 extends PureComponent { // 继承Component和继承PureComponent的区别?性能优化,在上面的组件之间的嵌套也能体现
  constructor() {
    super()
    this.state = {
      name: 'dsm',
      message: 'Hello world',
      show: false
    }
  }

  // shouldComponentUpdate返回true/false, 决定是否更新render(), 默认返回true
  // shouldComponentUpdate (nextProps, nextState) {
  //   // console.log(nextProps, nextState, this.state);
  //   if (nextState.name !== this.state.name) {
  //     return true;
  //   }
  //   return false;
  // }

  render () {
    console.log('class 组件发生了渲染');
    return (
      <div>
        <div>{this.state.name}</div>
        <button onClick={() => { this.changeName() }}>改变姓名</button>
        <button onClick={() => { this.changeText() }}>改变文本</button>
      </div>
    )
  }

  changeName () {
    this.setState({
      name: 'ccy'
    })
  }

  changeText () {
    this.setState({
      message: 'Hello React'
    })
  }
}
