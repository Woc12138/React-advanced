import React from 'react'

import logProps from './logProps'

class FancyButton extends React.Component {
  sayHi = () => {
    alert('Hello React!')
  }

  render() {
    return (
      <button onClick={this.props.onClick}>
        FancyButton：{this.props.title}
      </button>
    )
  }
}

export default logProps(FancyButton)
