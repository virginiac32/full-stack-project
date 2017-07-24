import React from 'react';
import {Link} from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount(){
    // this.props.fetchArtwork(this.props.artwork.id);
  }

  render () {
    const {artwork, deleteComment, updateComment, createComment} = this.props;
    const comments = artwork.comments;
    console.log(comments);
    return (
      <ul>
        {comments.map(comment =>
          <li>{comment.body}
            <button onClick={deleteComment}>
              <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
            </button>
          </li>
        )}
      </ul>
    );
  }
}

export default CommentIndex;
