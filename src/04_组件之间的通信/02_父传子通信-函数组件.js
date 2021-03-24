import React, { PureComponent } from 'react'

function Children (props) {
  const { message, name } = props;
  return (
    <div>
      子组件为函数组件: 我是父组件传递过来的数据: {message} | {name}
    </div>
  )
}
export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: 'Hello World'
    }
  }
  render () {
    return (
      <div>
        <Children message={this.state.message} name='dsm' />
      </div>
    )
  }
}
