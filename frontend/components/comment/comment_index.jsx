import React from 'react';
import {Link} from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchArtwork(this.props.artwork.id);
  }

  render () {
    const {artwork, deleteComment, updateComment, createComment} = this.props;
    if (!artwork.comments) return null;
    return (
      <ul>
        {Object.values(artwork.comments).map(comment =>
          <ul>
            <li>{comment.body}</li>
            <li>By: {comment.user.username}</li>
              <li><button onClick={deleteComment.bind(null,comment)}>
                <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
              </button>
            </li>
          </ul>
        )}
      </ul>
    );
  }
}

export default CommentIndex;
