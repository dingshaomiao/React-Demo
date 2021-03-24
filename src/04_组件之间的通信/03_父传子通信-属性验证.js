import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * 自 React v15.5 起，React.PropTypes 已移入另一个包中。请使用 prop-types 库 代替。
 * 要在组件的 props 上进行类型检查，你只需配置特定的 propTypes 属性
 * 以上属性的验证方式适用类组件和函数式组件
 */

// class Children extends PureComponent {
//   render () {
//     const { name, age, height } = this.props;
//     return (
//       <div>
//         <h2>{name + age + height}</h2>
//       </div>
//     )
//   }
// }

function Children (props) {
  const { name, age, height } = props;
  return (
    <div>
      <h2>{name + age + height}</h2>
    </div>
  )
}

Children.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  height: PropTypes.number
}

Children.defaultProps = {
  name: '默认值'
}

export default class App extends PureComponent {
  render () {
    return (
      <div>
        <Children name="dsm" age={18} height={1.64} />
        <Children name="ccy" age='28' height='1.84' />
        <Children age='12' height='1.84' />
      </div>
    )
  }
}
