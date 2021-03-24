import React, { Component, memo, useEffect } from 'react'
/**
 * 组件的嵌套
 *  1.加深对函数组件的理解(没有内部状态)
 *    当函数组件作为子组件的时候,每次父组件重新render的时候,整个函数组件被重新渲染,整个函数被重新执行,无法只更新render函数
 *  2.类组件和函数组件的性能优化(PureComponent,memo)
 */

class Header extends Component {
  componentDidMount () {
    console.log('类组件 --- 网络请求,只执行一次');
  }

  componentDidUpdate () {
    // console.log('componentDidUpdate被重新调用');
  }

  render () {
    console.log("Header render函数被渲染");
    return (
      <div>
        <h2>我是Header类组件</h2>
        <div>-----------------------------------------------</div>
      </div>
    )
  }
}

const MemoMain = memo(function Main (props) {
  // 相当于componentDidMounted()
  // useEffect(() => {
  //   console.log('hooks之后的函数组件,--- 网络请求,只执行一次');
  // }, [])
  console.log('Main 函数组件被渲染');
  console.log('函数组件 --- 网络请求,每次函数更新都会执行');
  return (
    <div>
      <h2>我是Main函数组件</h2>
      <h2>counter: {props.counter}</h2>
      <div>-----------------------------------------------</div>
    </div>
  )
})

const MemoFooter = memo(function Footer () {
  console.log('Footer 函数组件被渲染');
  console.log('函数组件 --- 网络请求,每次函数更新都会执行');
  return (
    <div>
      <h2>我是Footer函数组件</h2>
      <div>-----------------------------------------------</div>
    </div>
  )
})




export default class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }
  render () {
    console.log('App 组件被调用');
    return (
      <div>
        {/* 类组件 Header */}
        <Header />

        {/* 函数组件 Main */}
        <MemoMain counter={this.state.counter} />

        {/* 函数组件 Footer */}
        <MemoFooter />


        <div>当前计数: {this.state.counter}</div>
        <button onClick={() => { this.changeCounter() }}>+1</button>
      </div>
    )
  }
  changeCounter () {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
