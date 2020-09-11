import React, { Component } from 'react';

import DataSource from '../db/data-source'
import CommentItem from './comment-item'

export default class CommentList extends Component {
  state = {
    comments: DataSource.getComments()
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange)
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange)
  }

  handleChange = () => {
    this.setState({ comments: DataSource.getComments() })
  }

  handleAddOneComment = () => {
    const id = Date.now()
    DataSource.addComment({id: id, msg: '新评论' + id})
  }

  render() {
    return (
      <div>
        {
          this.state.comments.map((comment) => (
            <CommentItem comment={comment} key={comment.id} />
          ))
        }
        <button onClick={this.handleAddOneComment}>添加评论</button>
      </div>
    );
  }
}