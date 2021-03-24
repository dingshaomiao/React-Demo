import React, { Component } from 'react'

export default class CounterClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 1
    }
  }
  componentDidMount () {
    // 进行网络请求
    // 发送订阅
  }

  componentDidUpdate (prevProps, prevState) {
    // 查看setState更新后的数据
    // 比较数据前后是否发生了变化来决定是否发送网络请求
    console.log(this.state.counter);
  }

  componentWillUnmount () {
    // 取消订阅,做一些清除的动作
  }

  render () {
    console.log('class counter渲染');
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.decrement()}>-1</button>
      </div>
    )
  }

  increment () {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement () {
    this.setState({
      counter: this.state.counter - 1
    })
  }
}