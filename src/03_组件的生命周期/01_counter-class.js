import React, { Component } from 'react'

class Cpn extends Component {
  render () {
    return <h2>我是Cpn组件</h2>
  }

  componentWillUnmount () {
    console.log("调用了Cpn的componentWillUnmount方法");
  }
}

export default class CounterClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 1,
      show: true
    }
  }
  componentDidMount () {
    // 进行网络请求, 相当于Vue里面的mounted()
    // 发送订阅
    console.log('执行componentDidMount函数');
  }

  componentDidUpdate (prevProps, prevState) {
    // 查看setState更新后的数据
    // 比较数据前后是否发生了变化来决定是否发送网络请求
    console.log('执行componentDidUpdate函数');
    console.log('在componentDidUpdate函数中获取counter的值', this.state.counter);
  }

  componentWillUnmount () {
    // 取消订阅,做一些清除的动作,相当于Vue里面的beforeDestroy()
  }

  render () {
    console.log('class counter渲染');
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        {this.state.show && <Cpn />}
        <button onClick={e => this.changeShow()}>切换show</button>
      </div>
    )
  }

  /**
   * 知识点补充
   * setState()是异步的,要获取更新后的state的值可以在componentDidUpdate()生命周期函数中获取,
   * 也可以在setState()函数中传入第二个参数(回调函数)
   */
  increment () {
    this.setState({
      counter: this.state.counter + 1
    })
    // this.setState({
    //   counter: this.state.counter + 1
    // }, () => {
    //   console.log('在setState的回调函数中获取counter的值', this.state.counter);
    // })
    console.log('setState之后立即获取counter的值', this.state.counter);
  }

  changeShow () {
    this.setState({
      show: !this.state.show
    })
  }
}