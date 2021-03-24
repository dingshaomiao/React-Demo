import React, { PureComponent } from 'react'

// function CounterButton (props) {

//   const { onBtnClick, onBtnClickWithParams } = props;

//   return (
//     <div>
//       {/* 没有参数传递的 */}
//       <button onClick={onBtnClick}>+1</button>
//       <button onClick={() => { onBtnClickWithParams(10) }}>+10,传递参数给父组件</button>
//     </div >
//   )
// }

class CounterButton extends PureComponent {

  render () {
    const { onBtnClick, onBtnClickWithParams } = this.props;
    return (
      <div>
        {/* 没有参数传递的 */}
        <button onClick={onBtnClick}>+1</button>
        <button onClick={() => { onBtnClickWithParams(10) }}>+10,传递参数给父组件</button>
      </div >
    )

  }
}

/**
 * 子传父通信
 * 给子组件传递一个回调函数,当子组件发生点击的时候,出发父组件执行回调函数
 *    1.子组件触发父组件,没有传递参数给父组件
 *    2.子组件触发父组件,传递参数给父组件
 */
export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }
  render () {
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <CounterButton onBtnClick={() => this.increment()} onBtnClickWithParams={(num) => this.decrement(num)} />
      </div>
    )
  }

  increment () {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement (num) {
    this.setState({
      counter: this.state.counter + num
    })
  }
}
