import React, { PureComponent } from 'react'


class Children extends PureComponent {
  constructor() {
    super();
    this.state = {

    }
  }
  render () {
    console.log(this.props, "render");

    const { message, name } = this.props;
    return (
      <div>
        子组件为类组件:我是父组件传过来的数据: {message} | {name}
      </div>
    )
  }
}

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      title: 'Hello World'
    }
  }
  render () {
    return (
      <div>
        <Children message={this.state.title} name="dsm" />
      </div>
    )
  }
}
