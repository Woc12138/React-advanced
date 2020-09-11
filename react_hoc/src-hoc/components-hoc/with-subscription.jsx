import React, { Component } from 'react'

import DataSource from '../db/data-source'

/*
  //BlogPost里的
    state = {
        blogPost: DataSource.getBlogPost(this.props.id)
    }
    //使用高阶组件
    withSubscription(BlogPost, (ds, props) => ds.getBlogPost(props.id))
*/
function WithSubscription(MyComponent, selector) {
  return class extends Component {
    state = {
      data: selector(DataSource, this.props),
    }

    componentDidMount() {
      DataSource.addChangeListener(this.handleChange)
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange)
    }

    handleChange = () => {
      this.setState({
        data: selector(DataSource, this.props),
      })
    }

    render() {
      return (
        <div>
          <MyComponent {...this.props} data={this.state.data} />
        </div>
      )
    }
  }
}

export default WithSubscription
