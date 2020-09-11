import React, { Component } from 'react'

import DataSource from '../db/data-source'
import CommentItem from './comment-item'

export default class CommentList extends Component {
  state = {
    comments: DataSource.getComments(),
    blogPost: DataSource.getBlogPost(this.props.id),
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange)
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange)
  }

  handleChange = () => {
    this.setState({
      comments: DataSource.getComments(),
      blogPost: DataSource.getBlogPost(this.props.id),
    })
  }

  handleAddComment = () => {
    const id = Date.now()
    DataSource.addComment({ id: id, msg: '新评论' + id })
  }

  handleUpdateBlog = () => {
    const { blogPost } = this.state
    const blogPostNew = Object.assign({}, blogPost, {
      msg: '修改后的文章内容' + Date.now(),
    })
    DataSource.updateBlogPost(blogPostNew)
  }

  render() {
    return (
      <div>
        {this.state.comments.map(comment => (
          <CommentItem comment={comment} key={comment.id} />
        ))}
        <button onClick={this.handleAddComment}>添加评论</button>
        <div>{this.state.blogPost.msg}</div>
        <button onClick={this.handleUpdateBlog}>提交文章修改</button>
      </div>
    )
  }
}
