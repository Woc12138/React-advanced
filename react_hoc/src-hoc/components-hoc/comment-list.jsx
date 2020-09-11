import React, { Component } from 'react'

import DataSource from '../db/data-source'
import CommentItem from './comment-item'
import withSubscription from './with-subscription'

class CommentList extends Component {
  handleAddOneComment = () => {
    const id = Date.now()
    DataSource.addComment({ id: id, msg: '新评论' + id })
  }

  render() {
    return (
      <div>
        {this.props.data.map(comment => (
          <CommentItem comment={comment} key={comment.id} />
        ))}
        <button onClick={this.handleAddOneComment}>添加评论</button>
      </div>
    )
  }
}

export default withSubscription(CommentList, DataSource =>
  DataSource.getComments()
)
