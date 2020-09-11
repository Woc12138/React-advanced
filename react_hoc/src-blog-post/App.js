import React from 'react';

// import CommentList from './components/comment-list'
import BlogPost from './components/blog-post'


class App extends React.Component {
  render() {
    return (
      <div>
        {/* <CommentList /> */}
        <BlogPost id={1}/>
      </div>
    );
  }
}

export default App;
