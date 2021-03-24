import React, { PureComponent } from 'react'

export default class App extends PureComponent {

  constructor(props) {
    super(props) // super()
    this.state = {
      name: '张三',
      age: 18,
      login: false,
      studentArr: [
        {
          name: '李四',
          age: '12'
        },
        {
          name: '李四',
          age: '13'
        },
        {
          name: '李四',
          age: '14'
        }
      ]
    }
  }
  render () {

    return (
      <div>
        <button onClick={this.btnClick}>未绑定this的按钮</button>

        <div>绑定this的方式一, 显示的绑定this</div>
        <h2>年龄: {this.state.age}</h2>
        <button onClick={this.incrementAge.bind(this)}>年龄+1</button>

        <div>绑定this的方式二, 使用箭头函数</div>
        <h2>{this.state.login ? '登录' : '未登录'}</h2>
        <button onClick={this.login}>切换</button>

        <div>绑定this的方式三(推荐)</div>
        <div>好友列表</div>
        <ul>
          {
            this.state.studentArr.map((item, index) => {
              return <li key={index} onClick={() => { this.showItemInfo(item) }}>姓名: {item.name} 年龄: {item.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
  /**
   * 知识补充: onClick是React的合成事件,需要传入一个函数作为事件处理函数，而不是一个字符串。
   * 参考官网: https://zh-hans.reactjs.org/docs/handling-events.html 事件处理
   */
  // 错误的写法,未绑定this,此时this的指向是undefined,此时调用this.state会报错
  btnClick () {
    console.log('btnClick this的指向', this);
    console.log('我被点击了');
  }

  // 显示的绑定this
  incrementAge () {
    console.log('incrementAge this的指向', this);
    this.setState({
      age: this.state.age + 1
    })
  }

  // ES6 class fields语法 ???
  login = () => {
    console.log('login this的指向', this);
    this.setState({
      login: !this.state.login
    })
  }

  // 定义一个箭头函数,箭头函数没有绑定this,会从上一层作用域中查询
  showItemInfo (item) {
    console.log('showItemInfo', this);
    console.log('发生了点击', item);
  }
}
