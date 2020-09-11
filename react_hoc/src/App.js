import React from 'react'

import './App.css'
import FancyButton from './components/FancyButton'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'ABC',
    }
    this.fancyButtonRef = React.createRef() //1.React提供的createRef来创建ref
  }

  handleClickFancyButton = () => {
    this.setState({ title: '123' })
    //refs将不会透传下去，因为ref不是prop属性。
    //对HOC添加ref，该ref将引用最外层的容器组件LogProps，而不是被包裹的组件FancyButton。
    console.log('this.fancyButtonRef ->', this.fancyButtonRef)
    //输出LogProps，所以需要React.forwardRef来转发refs给被包裹的组件FancyButton
    this.fancyButtonRef.current.sayHi() // 5.可以调用被包裹组件上的方法
  }

  render() {
    return (
      <div className="App">
        <FancyButton
          onClick={this.handleClickFancyButton}
          title={this.state.title}
          ref={this.fancyButtonRef} // 2.ref可以被hoc组件logProps中的forwardRef接收作为第二个参数
        />
      </div>
    )
  }
}

export default App
