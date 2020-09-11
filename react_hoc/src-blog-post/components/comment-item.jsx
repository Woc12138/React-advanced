import React, { Component } from 'react';

export default class CommentItem extends Component {
  render() {
    return (
      <div>
        { this.props.comment.msg }
      </div>
    );
  }
}