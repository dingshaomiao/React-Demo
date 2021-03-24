import React from 'react'

/**
 * 函数组件的定义，以及优点和缺点
 * 1.没有this对象
 * 2.没有内部状态
 *   (1): 没有类似类组件的setState()函数,用于通知React去更新界面
 *   (2): 当函数组件作为子组件的时候,每次父组件重新render的时候,整个函数组件被重新渲染,整个函数被重新执行,无法只更新render函数
 */
export default function App () {
  console.log('函数组件被调用');
  let counter = 1;

  const increment = () => {
    console.log('点击前的值', counter);
    counter = counter + 1; // 这样直接修改counter的值,是不会更新页面UI的,出现hooks之前没有像类组件里面的setState()函数去通知react更新界面
    console.log('点击后的值', counter);
  }

  return (
    <div>
      <span>我是函数组件</span>
      <h2>当前计数: {counter}</h2>
      <button onClick={increment}>点击+1</button>
      <h2>Hello React</h2>
    </div>
  )

}
