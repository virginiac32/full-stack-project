import React from 'react';
import {Link} from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchComments();
  }

  render () {
    const {comments, deleteComment, updateComment, createComment} = this.props;
    console.log(comments);
    return (
      <div>hello</div>
    );
  }
}

export default CommentIndex;
