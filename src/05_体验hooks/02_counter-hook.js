import React, { memo, useState, useEffect } from 'react'

export default memo(function CounterHook () {

  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('Hello World')
  console.log('function counter渲染');

  useEffect(() => {
    console.log('获取更新后counter的值:', counter);
  }, [counter])

  useEffect(() => {
    console.log('每次组件更新都会调用');
  })

  useEffect(() => {
    // 订阅
    return () => {
      // 取消订阅
    }
  }, [])

  const changeText = () => {
    setMessage('Hello React')
  }

  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <h2>{message}</h2>
      <button onClick={e => { changeText() }}>改变文本</button>
    </div>
  )
})
