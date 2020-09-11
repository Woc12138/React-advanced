import React from 'react'

function logProps(WrappedComponent) {
  const WrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name

  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log(WrappedComponentName + '->old props', prevProps)
      console.log(WrappedComponentName + '->new props', this.props)
    }

    render() {
      const { forwardedRef, ...rest } = this.props
      // 4.再将forwardedRef传递给被包裹的UI组件FancyButton
      return <WrappedComponent ref={forwardedRef} {...rest} />
    }
  }

  function forwardRef(props, ref) {
    // 3.渲染函数的第二个参数ref就是App.js调用时传入的这个hoc组件时的ref
    // 再调用容器组件LogProps，传入被包装成props的形式的ref，即forwardedRef
    return <LogProps {...props} forwardedRef={ref} />
  }

  return React.forwardRef(forwardRef) // 最终返回React提供的高级函数forwardRef，接收一个渲染函数
}

export default logProps
