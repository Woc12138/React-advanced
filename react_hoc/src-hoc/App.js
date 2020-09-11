import React from 'react'

import CommentList from './components-hoc/comment-list'
import BlogPost from './components-hoc/blog-post'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CommentList />
        <BlogPost id={1} />
      </div>
    )
  }
}

export default App
