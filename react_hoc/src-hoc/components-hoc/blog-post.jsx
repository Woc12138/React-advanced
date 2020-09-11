import React, { Component } from 'react'

import DataSource from '../db/data-source'
import withSubscription from './with-subscription'

class BlogPost extends Component {
  handleAddComment = () => {
    const id = Date.now()
    DataSource.addComment({ id: id, msg: '新评论' + id })
  }

  handleUpdateBlog = () => {
    const blogPost = this.props.data
    const blogPostNew = Object.assign({}, blogPost, {
      msg: '修改后的文章内容' + Date.now(),
    })
    DataSource.updateBlogPost(blogPostNew)
  }

  render() {
    return (
      <div>
        <div>{this.props.data.msg}</div>
        <button onClick={this.handleUpdateBlog}>提交文章修改</button>
      </div>
    )
  }
}

export default withSubscription(BlogPost, (DataSource, props) =>
  DataSource.getBlogPost(props.id)
)
