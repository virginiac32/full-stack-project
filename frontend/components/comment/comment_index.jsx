import React from 'react';
import {Link} from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderDelete = this.renderDelete.bind(this);
  }

  componentDidMount(){
    this.props.fetchArtwork(this.props.artwork.id);
  }

  renderDelete(comment, deleteComment) {
    if (this.props.currentUser.id === comment.user.id) {
      return (
        <button onClick={deleteComment.bind(null,comment)}>
          <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
        </button>
      );
    }
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
              <li>{this.renderDelete(comment,deleteComment)}
            </li>
          </ul>
        )}
      </ul>
    );
  }
}

export default CommentIndex;
