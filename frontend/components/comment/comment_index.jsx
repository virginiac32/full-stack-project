import React from 'react';
import {Link} from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount(){
    this.props.fetchComments(this.props.artworks.currentArtwork);
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
